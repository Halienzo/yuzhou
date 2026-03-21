#!/usr/bin/env node
/**
 * Auto-generate readingTips for all lessons missing them.
 * Generates 2 bilingual reading guidance tips per lesson based on
 * lesson metadata (grade, type, author, title, content characteristics).
 *
 * Usage: node build/gen_reading_tips.js [g3s1|g7s2|...] [--dry-run]
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

function toU(s, uppercase) {
  var r = '';
  for (var i = 0; i < s.length; i++) {
    var code = s.codePointAt(i);
    if (code === 10) { r += '\\n'; }
    else if (code === 13) { }
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
 * Generate 2 reading tips based on lesson metadata.
 */
function generateReadingTips(lesson, grade) {
  var tips = [];
  var title = lesson.title;
  var isClassical = lesson.isClassical;
  var isPoetry = lesson.isPoetry || (lesson.poems && lesson.poems.length > 0);
  var hasPoemInTitle = title.indexOf('\u8bd7') > -1 || title.indexOf('\u8bcd') > -1;
  var textLen = lesson.text ? lesson.text.join('').length : 0;
  var paraCount = lesson.text ? lesson.text.length : 0;

  if (grade <= 2) {
    // G1-G2: simple, fun, character-focused
    if (hasPoemInTitle || isPoetry) {
      tips.push({
        cn: '\u8bd5\u7740\u6709\u611f\u60c5\u5730\u6717\u8bfb\u8fd9\u9996\u53e4\u8bd7\uff0c\u6ce8\u610f\u8282\u594f\u548c\u97f5\u5f8b\u3002\u60f3\u4e00\u60f3\u8bd7\u4eba\u63cf\u7ed8\u4e86\u600e\u6837\u7684\u753b\u9762\u3002',
        en: 'Try reading this poem aloud with feeling, paying attention to rhythm and rhyme. Think about what scene the poet painted.'
      });
      tips.push({
        cn: '\u627e\u51fa\u8bd7\u4e2d\u4f60\u559c\u6b22\u7684\u8bcd\u8bed\uff0c\u8bf4\u8bf4\u4e3a\u4ec0\u4e48\u559c\u6b22\u3002',
        en: 'Find your favorite words in the poem and say why you like them.'
      });
    } else if (title.indexOf('\u8c1c') > -1 || title.indexOf('\u6b4c') > -1 || title.indexOf('\u8c23') > -1) {
      tips.push({
        cn: '\u6709\u8da3\u5730\u8bfb\u4e00\u8bfb\uff0c\u8fb9\u8bfb\u8fb9\u62cd\u624b\u6253\u8282\u62cd\u3002\u8bd5\u7740\u80cc\u8bf5\u4e0b\u6765\u3002',
        en: 'Read it aloud in a fun way, clapping along to the rhythm. Try to memorize it.'
      });
      tips.push({
        cn: '\u548c\u7238\u7238\u5988\u5988\u4e00\u8d77\u8bfb\uff0c\u770b\u770b\u8c01\u8bfb\u5f97\u66f4\u6d41\u5229\u3002',
        en: 'Read together with your parents and see who can read more fluently.'
      });
    } else {
      tips.push({
        cn: '\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f',
        en: 'As you read, think: what is this story about? Do you find it interesting?'
      });
      tips.push({
        cn: '\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002',
        en: 'After reading, try retelling the story in your own words.'
      });
    }
  } else if (grade <= 6) {
    // G3-G6: reading strategies, comprehension, appreciation
    if (isClassical) {
      tips.push({
        cn: '\u5148\u5bf9\u7167\u6ce8\u91ca\u8bfb\u61c2\u5927\u610f\uff0c\u518d\u53cd\u590d\u6717\u8bfb\uff0c\u4f53\u4f1a\u6587\u8a00\u6587\u7684\u8282\u594f\u7f8e\u3002',
        en: 'First read with the annotations to understand the meaning, then read aloud repeatedly to appreciate the rhythm of classical Chinese.'
      });
      tips.push({
        cn: '\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u590d\u8ff0\u6545\u4e8b\u5185\u5bb9\uff0c\u60f3\u60f3\u8fd9\u4e2a\u6545\u4e8b\u544a\u8bc9\u6211\u4eec\u4ec0\u4e48\u9053\u7406\u3002',
        en: 'Try retelling the story in your own words. Think about what lesson it teaches us.'
      });
    } else if (hasPoemInTitle || isPoetry) {
      tips.push({
        cn: '\u6709\u611f\u60c5\u5730\u6717\u8bfb\u53e4\u8bd7\uff0c\u6ce8\u610f\u505c\u987f\u548c\u91cd\u97f3\u3002\u60f3\u8c61\u8bd7\u53e5\u63cf\u7ed8\u7684\u753b\u9762\uff0c\u4f53\u4f1a\u8bd7\u4eba\u7684\u60c5\u611f\u3002',
        en: 'Read the poem aloud with feeling, noting pauses and emphasis. Visualize the scenes described and feel the poet\'s emotions.'
      });
      tips.push({
        cn: '\u627e\u51fa\u8bd7\u4e2d\u7684\u5173\u952e\u610f\u8c61\uff08\u5982\u5c71\u3001\u6c34\u3001\u6708\u3001\u82b1\u7b49\uff09\uff0c\u60f3\u60f3\u5b83\u4eec\u8868\u8fbe\u4e86\u4ec0\u4e48\u611f\u60c5\u3002',
        en: 'Identify key imagery (like mountains, water, moon, flowers) and think about what emotions they convey.'
      });
    } else if (textLen > 800) {
      tips.push({
        cn: '\u8fd9\u7bc7\u6587\u7ae0\u8f83\u957f\uff0c\u5efa\u8bae\u5206\u6bb5\u9605\u8bfb\u3002\u6bcf\u8bfb\u5b8c\u4e00\u6bb5\uff0c\u505c\u4e0b\u6765\u60f3\u60f3\u8fd9\u6bb5\u7684\u4e3b\u8981\u5185\u5bb9\u3002',
        en: 'This is a longer text. Read it paragraph by paragraph, pausing after each to think about the main idea.'
      });
      tips.push({
        cn: '\u8bfb\u5b8c\u5168\u6587\u540e\uff0c\u8bd5\u7740\u7528\u4e00\u53e5\u8bdd\u6982\u62ec\u6587\u7ae0\u7684\u4e2d\u5fc3\u601d\u60f3\u3002',
        en: 'After reading the whole text, try to summarize the central idea in one sentence.'
      });
    } else {
      tips.push({
        cn: '\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002',
        en: 'While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way.'
      });
      tips.push({
        cn: '\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f',
        en: 'After reading, discuss with classmates: which part of the text do you like best? Why?'
      });
    }
  } else {
    // G7-G9: deeper analysis, literary techniques, critical thinking
    if (isClassical) {
      tips.push({
        cn: '\u5148\u7ed3\u5408\u6ce8\u91ca\u7586\u901a\u6587\u610f\uff0c\u518d\u53cd\u590d\u8bf5\u8bfb\uff0c\u4f53\u4f1a\u6587\u8a00\u6587\u7684\u7b80\u7ec3\u4e0e\u97f5\u5f8b\u3002\u6ce8\u610f\u79ef\u7d2f\u5e38\u89c1\u7684\u6587\u8a00\u5b9e\u8bcd\u548c\u865a\u8bcd\u3002',
        en: 'First understand the text with annotations, then read aloud repeatedly to appreciate the conciseness and rhythm of classical Chinese. Note common content and function words.'
      });
      tips.push({
        cn: '\u601d\u8003\u6587\u7ae0\u7684\u5199\u4f5c\u80cc\u666f\u548c\u4f5c\u8005\u7684\u601d\u60f3\u611f\u60c5\u3002\u6587\u8a00\u6587\u4e2d\u7684\u54ea\u4e9b\u601d\u60f3\u5bf9\u4eca\u5929\u4ecd\u6709\u542f\u53d1\uff1f',
        en: 'Consider the historical context and the author\'s thoughts and feelings. Which ideas from this classical text still resonate today?'
      });
    } else if (hasPoemInTitle || isPoetry) {
      tips.push({
        cn: '\u53cd\u590d\u8bf5\u8bfb\uff0c\u4f53\u4f1a\u8bd7\u6b4c\u7684\u97f3\u97f5\u7f8e\u548c\u610f\u5883\u7f8e\u3002\u6ce8\u610f\u5206\u6790\u8bd7\u4e2d\u7684\u610f\u8c61\u548c\u4fee\u8f9e\u624b\u6cd5\u3002',
        en: 'Read aloud repeatedly to appreciate the phonetic beauty and artistic conception. Analyze the imagery and rhetorical devices used.'
      });
      tips.push({
        cn: '\u7ed3\u5408\u8bd7\u4eba\u7684\u751f\u5e73\u548c\u5199\u4f5c\u80cc\u666f\uff0c\u7406\u89e3\u8bd7\u6b4c\u4e2d\u8574\u542b\u7684\u601d\u60f3\u611f\u60c5\u3002',
        en: 'Consider the poet\'s life and the context of writing to understand the deeper emotions expressed.'
      });
    } else if (lesson.author) {
      // Narrative/prose with known author
      tips.push({
        cn: '\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f',
        en: 'Pay attention to the author\'s narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?'
      });
      tips.push({
        cn: '\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f',
        en: 'After reading, think: what theme does the author convey? How does the title relate to the content?'
      });
    } else {
      tips.push({
        cn: '\u901a\u8bfb\u5168\u6587\uff0c\u7406\u6e05\u6587\u7ae0\u7684\u7ed3\u6784\u5c42\u6b21\u3002\u4f5c\u8005\u662f\u6309\u4ec0\u4e48\u987a\u5e8f\u7ec4\u7ec7\u5185\u5bb9\u7684\uff1f',
        en: 'Read through the whole text and identify its structure. How does the author organize the content?'
      });
      tips.push({
        cn: '\u627e\u51fa\u6587\u7ae0\u4e2d\u7684\u5173\u952e\u8bcd\u53e5\uff0c\u4f53\u4f1a\u5176\u5728\u8868\u8fbe\u4e3b\u9898\u4e2d\u7684\u4f5c\u7528\u3002',
        en: 'Find key words and sentences, and consider their role in expressing the theme.'
      });
    }
  }
  return tips;
}

function buildTipsArray(tips, indent) {
  indent = indent || '      ';
  return tips.map(function(t, i) {
    var comma = i < tips.length - 1 ? ',' : '';
    return indent + '  {cn:"' + toU(t.cn) + '", en:"' + toU(t.en) + '"}' + comma;
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
  var grade = tb.grade;

  var added = 0;
  var modified = false;

  tb.units.forEach(function(u) {
    u.lessons.forEach(function(l) {
      if (l.readingTips && l.readingTips.length > 0) return;
      if (!l.text || l.text.length === 0) return;

      var tips = generateReadingTips(l, grade);
      if (tips.length === 0) return;

      if (dryRun) {
        console.log('  [DRY] ' + gs + ' L' + l.id + ' ' + l.title + ': ' + tips.length + ' tips');
        tips.forEach(function(t) { console.log('    cn: ' + t.cn.substring(0, 60)); });
        added++;
        return;
      }

      // Find lesson in source by id + title
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

      // Skip past multiText/poems blocks
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

      // Find footnotes: [...] to insert readingTips after it
      var fnMarker = src.indexOf('footnotes:', searchFrom);
      if (fnMarker === -1 || fnMarker > idx + 300000) {
        // Fallback: try vocabWords
        fnMarker = src.indexOf('vocabWords:', searchFrom);
        if (fnMarker === -1 || fnMarker > idx + 300000) {
          fnMarker = src.indexOf('vocabWords:', idx);
        }
      }
      if (fnMarker === -1 || fnMarker > idx + 300000) {
        console.log('  SKIP L' + l.id + ' ' + l.title + ': no anchor found');
        return;
      }

      var fOpen = src.indexOf('[', fnMarker);
      var fClose = findMatchingBracket(src, fOpen);
      if (fClose === -1) {
        console.log('  SKIP L' + l.id + ' ' + l.title + ': no bracket close');
        return;
      }

      // Check if readingTips already exists right after footnotes (same line or next)
      var afterFn = src.substring(fClose + 1, fClose + 100);
      var rtIdx = afterFn.indexOf('readingTips:');
      if (rtIdx > -1 && rtIdx < 40 && afterFn.substring(0, rtIdx).split('\n').length <= 2) {
        console.log('  SKIP L' + l.id + ' ' + l.title + ': readingTips already in source');
        return;
      }

      // Detect indentation
      var indent = '      ';
      var lineStart = src.lastIndexOf('\n', fnMarker) + 1;
      var lineContent = src.substring(lineStart, fnMarker);
      var match = lineContent.match(/^(\s+)/);
      if (match) indent = match[1];

      // Insert after footnotes/vocabWords closing bracket
      var insertPos = fClose + 1;
      var hasComma = src[insertPos] === ',';
      if (hasComma) insertPos++;

      var block = (hasComma ? '' : ',') + '\n' + indent + 'readingTips: [\n' + buildTipsArray(tips, indent) + '\n' + indent + '],';
      src = src.substring(0, insertPos) + block + src.substring(insertPos);

      added++;
      modified = true;
      console.log('  OK: L' + l.id + ' ' + l.title + ' => ' + tips.length + ' tips');
    });
  });

  if (modified && !dryRun) {
    try {
      var ctx2 = {};
      vm.runInNewContext(src, ctx2);
      fs.writeFileSync(file, src, 'utf8');
      console.log(gs + ': wrote ' + added + ' readingTips arrays');
    } catch(e) {
      console.error(gs + ': PARSE ERROR, NOT writing! ' + e.message.substring(0, 100));
    }
  } else if (added > 0) {
    console.log(gs + ': ' + added + ' lessons ' + (dryRun ? '(dry run)' : 'already have readingTips'));
  }

  totalAdded += added;
});

console.log('\nTotal: ' + totalAdded + ' lessons processed');
