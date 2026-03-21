#!/usr/bin/env node
/**
 * Generate missing annotations for G7-G9 lessons from vocabWords data.
 * annotations format: [{term, pinyin, definition, definitionEn, termEn}]
 * vocabWords format: [{word, pinyin, en, sentence, sentenceEn}]
 *
 * Usage: node build/gen_annotations.js [g7s1|g8s1|...] [--dry-run]
 */
var fs = require('fs');
var vm = require('vm');

var args = process.argv.slice(2);
var dryRun = args.indexOf('--dry-run') > -1;
args = args.filter(function(a) { return a !== '--dry-run'; });

function toU(s) {
  var r = '';
  for (var i = 0; i < s.length; i++) {
    var code = s.codePointAt(i);
    if (code === 10) { r += '\\n'; }
    else if (code === 13) { }
    else if (code === 34) { r += '\\"'; }
    else if (code === 92) { r += '\\\\'; }
    else if (code > 127) {
      r += '\\u' + code.toString(16).padStart(4, '0');
      if (code > 0xFFFF) i++;
    } else { r += s[i]; }
  }
  return r;
}

function findMatchingBracket(src, openPos) {
  var depth = 0, inStr = false, strCh = '';
  for (var i = openPos; i < src.length; i++) {
    var ch = src[i];
    if (inStr) { if (ch === '\\') { i++; continue; } if (ch === strCh) inStr = false; continue; }
    if (ch === '"' || ch === "'") { inStr = true; strCh = ch; continue; }
    if (ch === '[') depth++;
    if (ch === ']') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

function genAnnotations(l) {
  if (!l.vocabWords || !l.vocabWords.length) return null;
  return l.vocabWords.map(function(v) {
    return {
      term: v.word,
      termEn: v.en || '',
      pinyin: v.pinyin || '',
      definition: v.sentence || '',
      definitionEn: v.sentenceEn || ''
    };
  });
}

function buildAnnotationArray(items, indent) {
  var lines = [];
  items.forEach(function(item) {
    var parts = [];
    parts.push('term: "' + toU(item.term) + '"');
    if (item.termEn) parts.push('termEn: "' + toU(item.termEn) + '"');
    parts.push('pinyin: "' + toU(item.pinyin) + '"');
    if (item.definition) parts.push('definition: "' + toU(item.definition) + '"');
    if (item.definitionEn) parts.push('definitionEn: "' + toU(item.definitionEn) + '"');
    lines.push(indent + '  {' + parts.join(', ') + '}');
  });
  return lines.join(',\n');
}

// Pre-scan helper: find lesson positions
function findLessonPositions(src, tb) {
  var positions = [];
  tb.units.forEach(function(u) {
    u.lessons.forEach(function(l) {
      var idStr = 'id: ' + l.id + ',';
      var pos = 0;
      while (true) {
        var found = src.indexOf(idStr, pos);
        if (found === -1) break;
        var after = src.substring(found, found + 60);
        if (after.indexOf('title:') > -1) {
          var before = src.substring(Math.max(0, found - 40), found);
          var afterMore = src.substring(found, found + 200);
          if (before.indexOf('term:') === -1 && before.indexOf('word:') === -1
              && afterMore.indexOf('type:') === -1 && afterMore.indexOf('lessons:') === -1) {
            positions.push(found);
            break;
          }
        }
        pos = found + 1;
      }
    });
  });
  return positions.sort(function(a, b) { return a - b; });
}

var allGrades = args.length > 0 ? args : ['g7s1', 'g7s2', 'g8s1', 'g8s2', 'g9s1', 'g9s2'];
var totalAdded = 0;

allGrades.forEach(function(gs) {
  var file = 'textbook_' + gs + '.js';
  if (!fs.existsSync(file)) { console.log('SKIP: ' + file); return; }

  var src = fs.readFileSync(file, 'utf8');
  var ctx = { window: {} };
  var varName = 'TB_' + gs.toUpperCase();
  vm.runInNewContext(src, ctx);
  var tb = ctx[varName] || ctx.window[varName];
  if (!tb) { console.log('SKIP: ' + gs); return; }

  var lessonPositions = findLessonPositions(src, tb);
  var modified = false;
  var added = 0;

  tb.units.forEach(function(u) {
    u.lessons.forEach(function(l) {
      var ann = l.vocabAnnotations || l.annotations;
      if (ann && ann.length > 0) return; // already has annotations

      var newAnn = genAnnotations(l);
      if (!newAnn || !newAnn.length) return;

      if (dryRun) {
        console.log('  [DRY] ' + gs + ' L' + l.id + ' ' + l.title + ' => ' + newAnn.length + ' annotations');
        added++;
        return;
      }

      // Find lesson position
      var idx = -1;
      var idStr = 'id: ' + l.id + ',';
      var pos = 0;
      while (true) {
        var found = src.indexOf(idStr, pos);
        if (found === -1) break;
        var after = src.substring(found, found + 60);
        if (after.indexOf('title:') > -1) {
          var before = src.substring(Math.max(0, found - 40), found);
          var afterMore = src.substring(found, found + 200);
          if (before.indexOf('term:') === -1 && before.indexOf('word:') === -1
              && afterMore.indexOf('type:') === -1 && afterMore.indexOf('lessons:') === -1) {
            idx = found;
            break;
          }
        }
        pos = found + 1;
      }
      if (idx === -1) { console.log('  WARN: ' + gs + ' L' + l.id + ' not found'); return; }

      // Find lessonEnd
      var lessonEnd = src.length;
      for (var lpi = 0; lpi < lessonPositions.length; lpi++) {
        if (lessonPositions[lpi] > idx + 10) { lessonEnd = lessonPositions[lpi]; break; }
      }

      // Check if annotations already in source
      var lessonBlock = src.substring(idx, lessonEnd);
      if (lessonBlock.indexOf('annotations:') > -1) {
        // Check if empty
        var acIdx = lessonBlock.indexOf('annotations:');
        var acAfter = lessonBlock.substring(acIdx, acIdx + 30);
        if (acAfter.indexOf('[]') === -1) return; // has content
        // Replace empty array
        var emptyPos = idx + acIdx;
        var lineStartE = src.lastIndexOf('\n', emptyPos);
        var indentE = '      ';
        if (lineStartE > -1) { var mE = src.substring(lineStartE + 1, emptyPos).match(/^(\s+)/); if (mE) indentE = mE[1]; }
        var emptyStr = 'annotations: []';
        var replaceStr = 'annotations: [\n' + buildAnnotationArray(newAnn, indentE) + '\n' + indentE + ']';
        if (src.substring(emptyPos, emptyPos + emptyStr.length) === emptyStr) {
          src = src.substring(0, emptyPos) + replaceStr + src.substring(emptyPos + emptyStr.length);
          modified = true; added++;
          var shift = replaceStr.length - emptyStr.length;
          for (var u2 = 0; u2 < lessonPositions.length; u2++) { if (lessonPositions[u2] > emptyPos) lessonPositions[u2] += shift; }
        }
        return;
      }

      // Insert after vocabWords
      var anchors = ['vocabWords:', 'readingTips:', 'footnotes:', 'textPinyin:'];
      var insertAfter = -1;
      for (var ai = 0; ai < anchors.length; ai++) {
        var anchorPos = src.indexOf(anchors[ai], idx);
        if (anchorPos > -1 && anchorPos < lessonEnd) {
          var aBrk = src.indexOf('[', anchorPos);
          if (aBrk > -1) {
            var aClose = findMatchingBracket(src, aBrk);
            if (aClose > -1 && aClose < lessonEnd) { insertAfter = aClose; break; }
          }
        }
      }
      if (insertAfter === -1) { console.log('  WARN: ' + gs + ' L' + l.id + ' no anchor'); return; }

      var lineStart = src.lastIndexOf('\n', insertAfter);
      var indent = '      ';
      if (lineStart > -1) { var m = src.substring(lineStart + 1, insertAfter).match(/^(\s+)/); if (m) indent = m[1]; }

      var afterClose = src.substring(insertAfter + 1, insertAfter + 5);
      var hasComma = afterClose[0] === ',';
      var insertPos = hasComma ? insertAfter + 2 : insertAfter + 1;
      var block = (hasComma ? '' : ',') + '\n' + indent + 'annotations: [\n' + buildAnnotationArray(newAnn, indent) + '\n' + indent + '],';
      src = src.substring(0, insertPos) + block + src.substring(insertPos);
      modified = true; added++;
      var blockLen = block.length;
      for (var u3 = 0; u3 < lessonPositions.length; u3++) { if (lessonPositions[u3] > insertPos) lessonPositions[u3] += blockLen; }
    });
  });

  if (modified && !dryRun) {
    try {
      var ctx2 = { window: {} };
      vm.runInNewContext(src, ctx2);
      fs.writeFileSync(file, src, 'utf8');
      console.log(gs + ': added ' + added + ' annotations');
    } catch (e) {
      console.error(gs + ': PARSE ERROR! ' + e.message.substring(0, 200));
    }
  } else if (dryRun) {
    console.log(gs + ': ' + added + ' (dry run)');
  } else {
    console.log(gs + ': nothing to add');
  }
  totalAdded += added;
});

console.log('\nTotal: ' + totalAdded + ' annotations added');
