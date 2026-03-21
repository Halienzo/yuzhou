#!/usr/bin/env node
/**
 * Auto-generate textPinyin for all lessons missing it.
 * Uses pinyin-pro to convert Chinese text to pinyin.
 *
 * Usage: node build/gen_textpinyin.js [g3s1|g7s2|...] [--dry-run]
 *
 * If no argument given, processes all G1-G9 files.
 * With --dry-run, shows what would be generated without writing.
 */
var fs = require('fs');
var vm = require('vm');
var pinyinPro = require('pinyin-pro');

var args = process.argv.slice(2);
var dryRun = args.indexOf('--dry-run') > -1;
args = args.filter(function(a) { return a !== '--dry-run'; });

function toPinyin(text) {
  // Convert Chinese text to pinyin, preserving punctuation
  var result = pinyinPro.pinyin(text, { toneType: 'symbol', type: 'string' });
  // Clean up spacing around punctuation
  result = result.replace(/ ([，。！？；：、""''《》（）\u2014\u2026\u00b7])/g, '$1');
  result = result.replace(/([""''《》（]) /g, '$1');
  result = result.replace(/ (\n)/g, '$1');
  return result;
}

function findMatchingBracket(s, openPos) {
  var depth = 0, inStr = false, strCh = '', esc = false;
  for (var i = openPos + 1; i < s.length; i++) {
    var c = s[i];
    if (esc) { esc = false; continue; }
    if (c === '\\') { esc = true; continue; }
    if (inStr) { if (c === strCh) inStr = false; continue; }
    if (c === '"' || c === "'") { inStr = true; strCh = c; continue; }
    if (c === '[') depth++;
    if (c === ']') { if (depth === 0) return i; depth--; }
  }
  return -1;
}

function toU(s) {
  var r = '';
  for (var i = 0; i < s.length; i++) {
    var code = s.codePointAt(i);
    if (code === 10) { r += '\\n'; }
    else if (code === 13) { /* skip */ }
    else if (code === 34) { r += '\\"'; }
    else if (code === 92) { r += '\\\\'; }
    else if (code > 127) {
      r += '\\u' + code.toString(16).padStart(4, '0');
      if (code > 0xFFFF) i++;
    } else { r += s[i]; }
  }
  return r;
}

function buildPinyinArray(paragraphs, indent) {
  indent = indent || '      ';
  return paragraphs.map(function(p, i) {
    var comma = i < paragraphs.length - 1 ? ',' : '';
    return indent + '  "' + toU(p) + '"' + comma;
  }).join('\n');
}

// Determine which files to process
var allGrades = [];
if (args.length > 0) {
  args.forEach(function(a) { allGrades.push(a); });
} else {
  for (var g = 1; g <= 9; g++) {
    for (var s = 1; s <= 2; s++) {
      allGrades.push('g' + g + 's' + s);
    }
  }
}

var totalAdded = 0;

allGrades.forEach(function(gs) {
  var file = 'textbook_' + gs + '.js';
  if (!fs.existsSync(file)) { console.log('SKIP: ' + file + ' not found'); return; }

  var src = fs.readFileSync(file, 'utf8');
  var ctx = {};
  var varName = 'TB_' + gs.toUpperCase();
  vm.runInNewContext(src, ctx);
  var tb = ctx[varName];

  var added = 0;
  var modified = false;

  tb.units.forEach(function(u) {
    u.lessons.forEach(function(l) {
      // Skip if already has textPinyin
      if (l.textPinyin && l.textPinyin.length > 0) return;
      // Skip if no text
      if (!l.text || l.text.length === 0) return;

      // Generate pinyin for each paragraph
      var pinyinParas = l.text.map(function(t) { return toPinyin(t); });

      if (dryRun) {
        console.log('  [DRY] ' + gs + ' L' + l.id + ' ' + l.title + ': ' + pinyinParas.length + ' paras');
        pinyinParas.forEach(function(p, i) {
          console.log('    [' + i + ']: ' + p.substring(0, 100));
        });
        added++;
        return;
      }

      // Find the lesson in source and inject textPinyin after textEn
      var titleSearches = [];
      if (l.titleEn) {
        titleSearches.push('titleEn: "' + l.titleEn + '"');
        titleSearches.push('titleEn:"' + l.titleEn + '"');
        titleSearches.push('titleEn: "' + toU(l.titleEn) + '"');
        titleSearches.push('titleEn:"' + toU(l.titleEn) + '"');
      }
      titleSearches.push('title: "' + l.title + '"');
      titleSearches.push('title:"' + l.title + '"');
      titleSearches.push('title: "' + toU(l.title) + '"');
      titleSearches.push('title:"' + toU(l.title) + '"');
      // Find the correct instance by verifying the id: value nearby
      var idStr = 'id: ' + l.id + ',';
      var idStr2 = 'id:' + l.id + ',';
      var idx = -1;
      for (var si = 0; si < titleSearches.length; si++) {
        var searchPos = 0;
        while (true) {
          var found = src.indexOf(titleSearches[si], searchPos);
          if (found === -1) break;
          // Check that id: N is within 200 chars before this title
          var before = src.substring(Math.max(0, found - 200), found);
          if (before.indexOf(idStr) > -1 || before.indexOf(idStr2) > -1) {
            idx = found;
            break;
          }
          searchPos = found + 1;
        }
        if (idx > -1) break;
      }
      if (idx === -1) {
        console.log('  SKIP L' + l.id + ' ' + l.title + ': title not found');
        return;
      }

      // For multiText lessons, skip past the multiText block to find top-level textEn
      var searchFrom = idx;
      var multiTextMarker = src.indexOf('multiText:', idx);
      if (multiTextMarker > -1 && multiTextMarker < idx + 500) {
        var mtOpen = src.indexOf('[', multiTextMarker);
        var mtClose = findMatchingBracket(src, mtOpen);
        if (mtClose > -1) searchFrom = mtClose + 1;
      }

      // Find textEn: [...] for this lesson (handle both "textEn: [" and "textEn:[")
      var textEnMarker = src.indexOf('textEn: [', searchFrom);
      var textEnMarker2 = src.indexOf('textEn:[', searchFrom);
      if (textEnMarker === -1 || textEnMarker > idx + 200000) textEnMarker = textEnMarker2;
      else if (textEnMarker2 > -1 && textEnMarker2 < textEnMarker) textEnMarker = textEnMarker2;
      if (textEnMarker === -1 || textEnMarker > idx + 200000) {
        console.log('  SKIP L' + l.id + ' ' + l.title + ': no textEn[]');
        return;
      }
      var eOpen = src.indexOf('[', textEnMarker);
      var eClose = findMatchingBracket(src, eOpen);
      if (eClose === -1) {
        console.log('  SKIP L' + l.id + ' ' + l.title + ': no textEn]');
        return;
      }

      // Check if textPinyin already exists in source (might be empty)
      var afterEn = src.substring(eClose + 1, eClose + 200);
      if (afterEn.indexOf('textPinyin:') > -1 && afterEn.indexOf('textPinyin:') < 50) {
        console.log('  SKIP L' + l.id + ' ' + l.title + ': textPinyin already in source');
        return;
      }

      // Detect indentation
      var indent = '      ';
      var lineStart = src.lastIndexOf('\n', textEnMarker) + 1;
      var lineContent = src.substring(lineStart, textEnMarker);
      var match = lineContent.match(/^(\s+)/);
      if (match) indent = match[1];

      // Insert textPinyin after textEn closing bracket
      var insertPos = eClose + 1;
      var hasComma = src[insertPos] === ',';
      if (hasComma) insertPos++; // skip past existing comma

      // Always add comma before textPinyin (],\n becomes ],\ntextPinyin), and trailing comma on block
      var pinyinBlock = (hasComma ? '' : ',') + '\n' + indent + 'textPinyin: [\n' + buildPinyinArray(pinyinParas, indent) + '\n' + indent + '],';
      src = src.substring(0, insertPos) + pinyinBlock + src.substring(insertPos);

      added++;
      modified = true;
      console.log('  OK: L' + l.id + ' ' + l.title + ' => ' + pinyinParas.length + ' pinyin paras');
    });
  });

  if (modified && !dryRun) {
    // Verify it still parses
    try {
      var ctx2 = {};
      vm.runInNewContext(src, ctx2);
      fs.writeFileSync(file, src, 'utf8');
      console.log(gs + ': wrote ' + added + ' textPinyin arrays');
    } catch(e) {
      console.error(gs + ': PARSE ERROR after injection, NOT writing! ' + e.message.substring(0, 100));
    }
  } else if (added > 0) {
    console.log(gs + ': ' + added + ' lessons ' + (dryRun ? '(dry run)' : 'already have pinyin'));
  }

  totalAdded += added;
});

console.log('\nTotal: ' + totalAdded + ' lessons processed');
