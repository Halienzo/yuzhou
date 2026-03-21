#!/usr/bin/env node
/**
 * Auto-generate footnotes for all lessons missing them.
 * Converts vocabWords into footnote format with contextual definitions.
 *
 * Usage: node build/gen_footnotes.js [g3s1|g7s2|...] [--dry-run]
 *
 * If no argument given, processes all G1-G9 files.
 * With --dry-run, shows what would be generated without writing.
 */
var fs = require('fs');
var vm = require('vm');

var args = process.argv.slice(2);
var dryRun = args.indexOf('--dry-run') > -1;
args = args.filter(function(a) { return a !== '--dry-run'; });

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

function findMatchingBrace(s, openPos) {
  var depth = 0, inStr = false, strCh = '', esc = false;
  for (var i = openPos + 1; i < s.length; i++) {
    var c = s[i];
    if (esc) { esc = false; continue; }
    if (c === '\\') { esc = true; continue; }
    if (inStr) { if (c === strCh) inStr = false; continue; }
    if (c === '"' || c === "'") { inStr = true; strCh = c; continue; }
    if (c === '{') depth++;
    if (c === '}') { if (depth === 0) return i; depth--; }
  }
  return -1;
}

function toU(s, uppercase) {
  var r = '';
  for (var i = 0; i < s.length; i++) {
    var code = s.codePointAt(i);
    if (code === 10) { r += '\\n'; }
    else if (code === 13) { /* skip */ }
    else if (code === 34) { r += '\\"'; }
    else if (code === 92) { r += '\\\\'; }
    else if (code > 127) {
      var hex = code.toString(16).padStart(4, '0');
      r += '\\u' + (uppercase ? hex.toUpperCase() : hex);
      if (code > 0xFFFF) i++;
    } else { r += s[i]; }
  }
  return r;
}

/**
 * Generate footnotes from vocabWords.
 * For each vocabWord, create a footnote with:
 *   term: the word
 *   termEn: English translation
 *   definition: Chinese definition (contextual sentence)
 *   definitionEn: English definition
 */
function generateFootnotes(lesson) {
  var vw = lesson.vocabWords || [];
  if (vw.length === 0) return [];

  var footnotes = [];
  vw.forEach(function(v) {
    var fn = {};
    fn.term = v.word;
    fn.termEn = v.en;
    // Use pinyin + meaning as Chinese definition
    fn.definition = '(' + v.pinyin + ') ' + v.en;
    fn.definitionEn = v.en;
    // For classical texts, check if the sentence provides context
    if (lesson.isClassical && v.sentence) {
      fn.definition = '(' + v.pinyin + ') ' + v.en + '\u3002\u4f8b\uff1a' + v.sentence;
    }
    footnotes.push(fn);
  });

  return footnotes;
}

function buildFootnoteEntry(fn, indent) {
  var parts = [];
  parts.push('term:"' + toU(fn.term) + '"');
  if (fn.termEn) parts.push('termEn:"' + toU(fn.termEn) + '"');
  parts.push('definition:"' + toU(fn.definition) + '"');
  if (fn.definitionEn) parts.push('definitionEn:"' + toU(fn.definitionEn) + '"');
  return indent + '  {' + parts.join(', ') + '}';
}

function buildFootnotesArray(footnotes, indent) {
  indent = indent || '      ';
  return footnotes.map(function(fn, i) {
    var comma = i < footnotes.length - 1 ? ',' : '';
    return buildFootnoteEntry(fn, indent) + comma;
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
      // Skip if already has footnotes
      if (l.footnotes && l.footnotes.length > 0) return;
      // Skip if no text
      if (!l.text || l.text.length === 0) return;

      // Generate footnotes
      var footnotes = generateFootnotes(l);
      if (footnotes.length === 0) return;

      if (dryRun) {
        console.log('  [DRY] ' + gs + ' L' + l.id + ' ' + l.title + ': ' + footnotes.length + ' footnotes');
        footnotes.forEach(function(fn) {
          console.log('    ' + fn.term + ' => ' + fn.definition.substring(0, 60));
        });
        added++;
        return;
      }

      // Find the lesson in source by id + title
      var titleSearches = [];
      if (l.titleEn) {
        titleSearches.push('titleEn: "' + l.titleEn + '"');
        titleSearches.push('titleEn:"' + l.titleEn + '"');
        titleSearches.push('titleEn: "' + toU(l.titleEn) + '"');
        titleSearches.push('titleEn:"' + toU(l.titleEn) + '"');
        titleSearches.push('titleEn: "' + toU(l.titleEn, true) + '"');
        titleSearches.push('titleEn:"' + toU(l.titleEn, true) + '"');
      }
      titleSearches.push('title: "' + l.title + '"');
      titleSearches.push('title:"' + l.title + '"');
      titleSearches.push('title: "' + toU(l.title) + '"');
      titleSearches.push('title:"' + toU(l.title) + '"');
      titleSearches.push('title: "' + toU(l.title, true) + '"');
      titleSearches.push('title:"' + toU(l.title, true) + '"');

      // Find correct instance by verifying id
      var idStr = 'id: ' + l.id + ',';
      var idStr2 = 'id:' + l.id + ',';
      var idx = -1;
      for (var si = 0; si < titleSearches.length; si++) {
        var searchPos = 0;
        while (true) {
          var found = src.indexOf(titleSearches[si], searchPos);
          if (found === -1) break;
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

      // For multiText/poems lessons, skip past nested blocks to find top-level vocabWords
      var searchFrom = idx;
      var multiTextMarker = src.indexOf('multiText:', idx);
      if (multiTextMarker > -1 && multiTextMarker < idx + 500) {
        var mtOpen = src.indexOf('[', multiTextMarker);
        var mtClose = findMatchingBracket(src, mtOpen);
        if (mtClose > -1) searchFrom = mtClose + 1;
      }
      var poemsMarker = src.indexOf('poems:', idx);
      if (poemsMarker > -1 && poemsMarker < idx + 500) {
        var pmOpen = src.indexOf('[', poemsMarker);
        var pmClose = findMatchingBracket(src, pmOpen);
        if (pmClose > -1 && pmClose > searchFrom) searchFrom = pmClose + 1;
      }

      // Find vocabWords: [...] to insert footnotes after it
      var vocabMarker = src.indexOf('vocabWords:', searchFrom);
      var vocabMarker2 = src.indexOf('vocabWords: [', searchFrom);
      if (vocabMarker === -1 || vocabMarker > idx + 300000) vocabMarker = vocabMarker2;
      else if (vocabMarker2 > -1 && vocabMarker2 < vocabMarker) vocabMarker = vocabMarker2;

      // Also try finding vocabWords in the original idx range (before multiText skip)
      if (vocabMarker === -1 || vocabMarker > idx + 300000) {
        vocabMarker = src.indexOf('vocabWords:', idx);
        if (vocabMarker > idx + 300000) vocabMarker = -1;
      }

      if (vocabMarker === -1) {
        console.log('  SKIP L' + l.id + ' ' + l.title + ': no vocabWords[]');
        return;
      }

      var vOpen = src.indexOf('[', vocabMarker);
      var vClose = findMatchingBracket(src, vOpen);
      if (vClose === -1) {
        console.log('  SKIP L' + l.id + ' ' + l.title + ': no vocabWords]');
        return;
      }

      // Check if footnotes already exists nearby
      var afterVocab = src.substring(vClose + 1, vClose + 200);
      if (afterVocab.indexOf('footnotes:') > -1 && afterVocab.indexOf('footnotes:') < 80) {
        console.log('  SKIP L' + l.id + ' ' + l.title + ': footnotes already in source');
        return;
      }

      // Detect indentation
      var indent = '      ';
      var lineStart = src.lastIndexOf('\n', vocabMarker) + 1;
      var lineContent = src.substring(lineStart, vocabMarker);
      var match = lineContent.match(/^(\s+)/);
      if (match) indent = match[1];

      // Insert footnotes after vocabWords closing bracket
      var insertPos = vClose + 1;
      var hasComma = src[insertPos] === ',';
      if (hasComma) insertPos++;

      var block = (hasComma ? '' : ',') + '\n' + indent + 'footnotes: [\n' + buildFootnotesArray(footnotes, indent) + '\n' + indent + '],';
      src = src.substring(0, insertPos) + block + src.substring(insertPos);

      added++;
      modified = true;
      console.log('  OK: L' + l.id + ' ' + l.title + ' => ' + footnotes.length + ' footnotes');
    });
  });

  if (modified && !dryRun) {
    try {
      var ctx2 = {};
      vm.runInNewContext(src, ctx2);
      fs.writeFileSync(file, src, 'utf8');
      console.log(gs + ': wrote ' + added + ' footnotes arrays');
    } catch(e) {
      console.error(gs + ': PARSE ERROR after injection, NOT writing! ' + e.message.substring(0, 100));
    }
  } else if (added > 0) {
    console.log(gs + ': ' + added + ' lessons ' + (dryRun ? '(dry run)' : 'already have footnotes'));
  }

  totalAdded += added;
});

console.log('\nTotal: ' + totalAdded + ' lessons processed');
