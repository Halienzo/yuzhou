#!/usr/bin/env node
/**
 * Generate missing thinkExplore, accumExtend, and preview for G7-G9 lessons.
 * Generates curriculum-appropriate content based on lesson metadata.
 *
 * Usage: node build/gen_exercises_g7g9.js [g7s1|g8s2|...] [--dry-run]
 */
var fs = require('fs');
var vm = require('vm');

var args = process.argv.slice(2);
var dryRun = args.indexOf('--dry-run') > -1;
args = args.filter(function(a) { return a !== '--dry-run'; });

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

function findMatchingBracket(src, openPos) {
  var depth = 0;
  var inStr = false, strCh = '';
  for (var i = openPos; i < src.length; i++) {
    var ch = src[i];
    if (inStr) {
      if (ch === '\\') { i++; continue; }
      if (ch === strCh) inStr = false;
      continue;
    }
    if (ch === '"' || ch === "'") { inStr = true; strCh = ch; continue; }
    if (ch === '[') depth++;
    if (ch === ']') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

/* ========== Content Generation Templates ========== */

function isClassical(l) {
  return l.isClassical || false;
}

function isPoetry(l) {
  return l.isPoetry || /[\u8bd7\u8bcd\u53e4\u8bd7]/.test(l.title) || false;
}

function getVocabSample(l) {
  if (l.vocabWords && l.vocabWords.length > 0) {
    var words = l.vocabWords.slice(0, 3).map(function(v) { return v.word; });
    return words.join('\u3001');
  }
  return '';
}

function genThinkExplore(l, grade) {
  var items = [];
  var title = l.title;
  var vocabSample = getVocabSample(l);

  if (isClassical(l)) {
    items.push({
      cn: '\u6709\u611f\u60c5\u5730\u6717\u8bfb\u8bfe\u6587\uff0c\u7ed3\u5408\u6ce8\u91ca\u758f\u901a\u6587\u610f\u3002\u8bf4\u8bf4\u8fd9\u7bc7\u6587\u7ae0\u7684\u4e3b\u8981\u5185\u5bb9\u548c\u4e2d\u5fc3\u601d\u60f3\u3002',
      en: 'Read the text with feeling. Use the annotations to understand the meaning, then summarize the main content and central idea.'
    });
    items.push({
      cn: '\u8bd5\u7740\u627e\u51fa\u6587\u4e2d\u7684\u91cd\u70b9\u5b9e\u8bcd\u548c\u865a\u8bcd\uff0c\u5f52\u7eb3\u5b83\u4eec\u7684\u7528\u6cd5\u3002\u60f3\u60f3\u8fd9\u4e9b\u8bcd\u5728\u73b0\u4ee3\u6c49\u8bed\u4e2d\u6709\u4ec0\u4e48\u4e0d\u540c\u3002',
      en: 'Identify the key content words and function words. Note how their classical usage differs from modern Chinese.'
    });
    items.push({
      cn: '\u8fd9\u7bc7\u53e4\u6587\u5bf9\u4eca\u5929\u7684\u6211\u4eec\u6709\u4ec0\u4e48\u542f\u793a\uff1f\u7ed3\u5408\u81ea\u5df1\u7684\u751f\u6d3b\u7ecf\u9a8c\u8c08\u8c08\u4f60\u7684\u7406\u89e3\u3002',
      en: 'What lessons does this classical text offer us today? Share your understanding based on your own life experience.'
    });
  } else if (isPoetry(l)) {
    items.push({
      cn: '\u6709\u611f\u60c5\u5730\u6717\u8bfb\u8fd9\u9996\u8bd7\uff0c\u6ce8\u610f\u8282\u594f\u548c\u97f5\u5f8b\u3002\u8bd7\u4e2d\u8425\u9020\u4e86\u600e\u6837\u7684\u610f\u5883\uff1f\u8bd7\u4eba\u8868\u8fbe\u4e86\u600e\u6837\u7684\u60c5\u611f\uff1f',
      en: 'Read the poem aloud with feeling, paying attention to rhythm and rhyme. What atmosphere does it create? What emotions does the poet express?'
    });
    items.push({
      cn: '\u627e\u51fa\u8bd7\u4e2d\u7684\u610f\u8c61\u548c\u5173\u952e\u8bcd\u8bed\uff0c\u5206\u6790\u5b83\u4eec\u5982\u4f55\u5851\u9020\u8bd7\u6b4c\u7684\u4e3b\u9898\u548c\u60c5\u611f\u57fa\u8c03\u3002',
      en: 'Identify the imagery and key phrases. Analyze how they shape the poem\'s theme and emotional tone.'
    });
    items.push({
      cn: '\u6bd4\u8f83\u8fd9\u9996\u8bd7\u4e0e\u4f60\u8bfb\u8fc7\u7684\u5176\u4ed6\u540c\u4e3b\u9898\u8bd7\u6b4c\uff0c\u8bf4\u8bf4\u5b83\u4eec\u5728\u8868\u8fbe\u65b9\u5f0f\u4e0a\u6709\u4ec0\u4e48\u5f02\u540c\u3002',
      en: 'Compare this poem with other poems of similar themes you\'ve read. How do they differ in expression?'
    });
  } else {
    items.push({
      cn: '\u6717\u8bfb\u8bfe\u6587\uff0c\u6982\u62ec\u6587\u7ae0\u7684\u4e3b\u8981\u5185\u5bb9\u3002\u4f5c\u8005\u60f3\u8981\u8868\u8fbe\u7684\u4e2d\u5fc3\u601d\u60f3\u662f\u4ec0\u4e48\uff1f',
      en: 'Read the text aloud and summarize its main content. What central idea does the author wish to convey?'
    });
    items.push({
      cn: '\u6587\u4e2d\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bed\u53e5\u6216\u6bb5\u843d\uff1f\u627e\u51fa\u6765\u54c1\u5473\u5176\u4e2d\u7684\u8868\u8fbe\u6548\u679c\uff0c\u5e76\u4e0e\u540c\u5b66\u5206\u4eab\u4f60\u7684\u611f\u53d7\u3002',
      en: 'Which sentences or paragraphs are most impressive? Identify them, appreciate their expressive effects, and share your feelings with classmates.'
    });
    if (l.author) {
      items.push({
        cn: '\u7ed3\u5408\u4f5c\u8005' + l.author + '\u7684\u5199\u4f5c\u80cc\u666f\uff0c\u8c08\u8c08\u4f60\u5bf9\u8fd9\u7bc7\u6587\u7ae0\u7684\u7406\u89e3\u3002\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8981\u5199\u8fd9\u7bc7\u6587\u7ae0\uff1f',
        en: 'Considering the author ' + (l.authorEn || l.author) + '\'s background, discuss your understanding. Why did the author write this?'
      });
    } else {
      items.push({
        cn: '\u8fd9\u7bc7\u6587\u7ae0\u7684\u5199\u4f5c\u7279\u8272\u662f\u4ec0\u4e48\uff1f\u4ece\u8bed\u8a00\u3001\u7ed3\u6784\u3001\u8868\u8fbe\u65b9\u5f0f\u7b49\u65b9\u9762\u8c08\u8c08\u4f60\u7684\u770b\u6cd5\u3002',
        en: 'What are the writing characteristics of this article? Share your views on its language, structure, and modes of expression.'
      });
    }
  }
  return items;
}

function genAccumExtend(l, grade) {
  var items = [];
  var vocabSample = getVocabSample(l);

  if (vocabSample) {
    items.push({
      cn: '\u8bfe\u6587\u4e2d\u6709\u4e0d\u5c11\u597d\u8bcd\u4f73\u53e5\uff0c\u5982\u201c' + vocabSample + '\u201d\u7b49\u3002\u8bf7\u6458\u5f55\u4f60\u559c\u6b22\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u5e76\u8bd5\u7740\u5728\u81ea\u5df1\u7684\u5199\u4f5c\u4e2d\u8fd0\u7528\u3002',
      en: 'The text contains fine words and phrases such as "' + vocabSample + '". Collect the words and sentences you like and try using them in your own writing.'
    });
  } else {
    items.push({
      cn: '\u6458\u5f55\u8bfe\u6587\u4e2d\u7684\u597d\u8bcd\u4f73\u53e5\uff0c\u5e76\u8bd5\u7740\u5728\u81ea\u5df1\u7684\u5199\u4f5c\u4e2d\u8fd0\u7528\u3002',
      en: 'Collect fine words and phrases from the text and try using them in your own writing.'
    });
  }

  if (isClassical(l)) {
    items.push({
      cn: '\u5c1d\u8bd5\u80cc\u8bf5\u5168\u6587\u3002\u7528\u81ea\u5df1\u7684\u8bdd\u590d\u8ff0\u6587\u7ae0\u5185\u5bb9\uff0c\u6ce8\u610f\u4fdd\u7559\u5173\u952e\u7ec6\u8282\u3002',
      en: 'Try to recite the entire text. Retell the content in your own words, keeping key details.'
    });
    items.push({
      cn: '\u67e5\u627e\u4e0e\u672c\u6587\u76f8\u5173\u7684\u53e4\u6587\u6216\u6545\u4e8b\uff0c\u62d3\u5c55\u9605\u8bfb\uff0c\u52a0\u6df1\u5bf9\u4f5c\u54c1\u7684\u7406\u89e3\u3002',
      en: 'Find related classical texts or stories for extended reading to deepen your understanding.'
    });
  } else if (isPoetry(l)) {
    items.push({
      cn: '\u5c1d\u8bd5\u80cc\u8bf5\u8fd9\u9996\u8bd7\u3002\u53ef\u4ee5\u914d\u4e0a\u97f3\u4e50\u6216\u56fe\u753b\uff0c\u8fdb\u884c\u521b\u610f\u6717\u8bf5\u3002',
      en: 'Try to recite this poem. You can pair it with music or illustrations for a creative reading.'
    });
    items.push({
      cn: '\u4eff\u7167\u8fd9\u9996\u8bd7\u7684\u98ce\u683c\uff0c\u8bd5\u7740\u5199\u4e00\u9996\u5c0f\u8bd7\uff0c\u8868\u8fbe\u4f60\u5bf9\u67d0\u4e2a\u4e3b\u9898\u7684\u611f\u60f3\u3002',
      en: 'Following the style of this poem, try writing a short poem expressing your thoughts on a topic.'
    });
  } else {
    items.push({
      cn: '\u9009\u62e9\u8bfe\u6587\u4e2d\u4f60\u6700\u559c\u6b22\u7684\u4e00\u4e2a\u6bb5\u843d\uff0c\u6709\u611f\u60c5\u5730\u6717\u8bfb\uff0c\u6807\u51fa\u91cd\u97f3\u548c\u505c\u8fde\uff0c\u5728\u5c0f\u7ec4\u91cc\u4e92\u76f8\u8bc4\u4ef7\u3002',
      en: 'Choose your favorite paragraph, read it with feeling, mark stress and pauses, and do peer evaluation in groups.'
    });
    if (l.author) {
      items.push({
        cn: '\u8bfe\u5916\u9605\u8bfb' + l.author + '\u7684\u5176\u4ed6\u4f5c\u54c1\uff0c\u6bd4\u8f83\u4e0e\u672c\u6587\u7684\u5f02\u540c\uff0c\u5199\u4e00\u7bc7\u77ed\u6587\u5206\u4eab\u4f60\u7684\u53d1\u73b0\u3002',
        en: 'Read other works by ' + (l.authorEn || l.author) + ' and compare them with this text. Write a short essay sharing your findings.'
      });
    } else {
      items.push({
        cn: '\u56f4\u7ed5\u672c\u6587\u7684\u4e3b\u9898\uff0c\u5199\u4e00\u7bc7300\u5b57\u5de6\u53f3\u7684\u77ed\u6587\uff0c\u8868\u8fbe\u4f60\u81ea\u5df1\u7684\u770b\u6cd5\u6216\u7ecf\u5386\u3002',
        en: 'Write a short essay of about 300 characters on the theme of this text, expressing your own views or experiences.'
      });
    }
  }
  return items;
}

function genPreview(l, grade) {
  var items = [];

  if (isClassical(l)) {
    items.push({
      cn: '\u501f\u52a9\u8bfe\u6587\u6ce8\u91ca\u548c\u5de5\u5177\u4e66\uff0c\u5c1d\u8bd5\u901a\u8bfb\u5168\u6587\uff0c\u6807\u8bb0\u51fa\u4e0d\u7406\u89e3\u7684\u5b57\u8bcd\u548c\u53e5\u5b50\u3002',
      en: 'With the help of annotations and reference books, try reading through the full text. Mark any characters, words, or sentences you don\'t understand.'
    });
    items.push({
      cn: '\u4e86\u89e3\u4f5c\u8005\u53ca\u5176\u6240\u5904\u65f6\u4ee3\u7684\u80cc\u666f\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8981\u5199\u8fd9\u7bc7\u6587\u7ae0\u3002',
      en: 'Learn about the author and the historical context. Think about why the author wrote this text.'
    });
  } else if (isPoetry(l)) {
    items.push({
      cn: '\u6717\u8bfb\u8fd9\u9996\u8bd7\uff0c\u611f\u53d7\u8bd7\u6b4c\u7684\u8282\u594f\u548c\u97f3\u97f5\u3002\u60f3\u60f3\u8bd7\u4eba\u5728\u4ec0\u4e48\u60c5\u5883\u4e0b\u5199\u4e0b\u8fd9\u9996\u8bd7\u3002',
      en: 'Read this poem aloud and feel its rhythm and rhyme. Think about the circumstances in which the poet wrote it.'
    });
    items.push({
      cn: '\u67e5\u627e\u4e0e\u672c\u8bd7\u76f8\u5173\u7684\u80cc\u666f\u8d44\u6599\uff0c\u5305\u62ec\u4f5c\u8005\u751f\u5e73\u548c\u5199\u4f5c\u80cc\u666f\u3002',
      en: 'Look up background information related to this poem, including the poet\'s life and the context of writing.'
    });
  } else {
    items.push({
      cn: '\u901a\u8bfb\u8bfe\u6587\uff0c\u521d\u6b65\u4e86\u89e3\u6587\u7ae0\u7684\u4e3b\u8981\u5185\u5bb9\u3002\u6807\u8bb0\u51fa\u4f60\u8ba4\u4e3a\u91cd\u8981\u7684\u8bcd\u8bed\u548c\u4e0d\u7406\u89e3\u7684\u5730\u65b9\u3002',
      en: 'Read through the text for an initial understanding of the main content. Mark important vocabulary and parts you don\'t understand.'
    });
    if (l.author) {
      items.push({
        cn: '\u67e5\u627e\u4f5c\u8005' + l.author + '\u7684\u76f8\u5173\u8d44\u6599\uff0c\u4e86\u89e3\u5176\u5199\u4f5c\u98ce\u683c\u548c\u672c\u6587\u7684\u5199\u4f5c\u80cc\u666f\u3002',
        en: 'Research the author ' + (l.authorEn || l.author) + ' to understand their writing style and the context of this text.'
      });
    } else {
      items.push({
        cn: '\u601d\u8003\u8bfe\u6587\u6807\u9898\u201c' + l.title + '\u201d\uff0c\u731c\u6d4b\u6587\u7ae0\u4f1a\u5199\u4e9b\u4ec0\u4e48\uff0c\u5e26\u7740\u95ee\u9898\u53bb\u9605\u8bfb\u3002',
        en: 'Think about the title "' + (l.titleEn || l.title) + '". Predict what the article might cover and read with questions in mind.'
      });
    }
  }
  return items;
}

/* ========== Injection Logic ========== */

function buildItemArray(items, indent) {
  var lines = [];
  items.forEach(function(item) {
    lines.push(indent + '  {cn: "' + toU(item.cn) + '", en: "' + toU(item.en) + '"}');
  });
  return lines.join(',\n');
}

// Determine which files to process
var allGrades = [];
if (args.length > 0) {
  args.forEach(function(a) { allGrades.push(a); });
} else {
  for (var g = 7; g <= 9; g++) {
    for (var s = 1; s <= 2; s++) {
      allGrades.push('g' + g + 's' + s);
    }
  }
}

var totalStats = { thinkExplore: 0, accumExtend: 0, preview: 0 };

allGrades.forEach(function(gs) {
  var file = 'textbook_' + gs + '.js';
  if (!fs.existsSync(file)) { console.log('SKIP: ' + file + ' not found'); return; }

  var src = fs.readFileSync(file, 'utf8');
  var ctx = { window: {} };
  var varName = 'TB_' + gs.toUpperCase();
  vm.runInNewContext(src, ctx);
  var tb = ctx[varName] || ctx.window[varName];
  if (!tb) { console.log('SKIP: ' + gs + ' - variable not found'); return; }
  var grade = tb.grade;

  var modified = false;
  var stats = { thinkExplore: 0, accumExtend: 0, preview: 0 };

  // Pre-scan: find all lesson positions in source for boundary detection
  var lessonPositions = [];
  tb.units.forEach(function(u) {
    u.lessons.forEach(function(l) {
      var idPatterns = ['id: ' + l.id + ',', 'id:' + l.id + ','];
      for (var ip = 0; ip < idPatterns.length; ip++) {
        var searchPos = 0;
        while (true) {
          var found = src.indexOf(idPatterns[ip], searchPos);
          if (found === -1) break;
          var after = src.substring(found, found + 60);
          if (after.indexOf('title:') > -1) {
            var before = src.substring(Math.max(0, found - 40), found);
            var afterMore = src.substring(found, found + 200);
            // Skip vocab/footnote ids, unit definitions (have 'type:' or 'lessons:')
            if (before.indexOf('term:') === -1 && before.indexOf('word:') === -1
                && afterMore.indexOf('type:') === -1 && afterMore.indexOf('lessons:') === -1) {
              lessonPositions.push(found);
              break;
            }
          }
          searchPos = found + 1;
        }
        if (lessonPositions.length > 0 && lessonPositions[lessonPositions.length - 1] === found) break;
      }
    });
  });
  lessonPositions.sort(function(a, b) { return a - b; });

  tb.units.forEach(function(u) {
    u.lessons.forEach(function(l) {
      var fieldsToAdd = [];

      // Check which fields need generation
      if (!l.thinkExplore || !l.thinkExplore.length) {
        fieldsToAdd.push({ name: 'thinkExplore', data: genThinkExplore(l, grade) });
      }
      if (!l.accumExtend || !l.accumExtend.length) {
        fieldsToAdd.push({ name: 'accumExtend', data: genAccumExtend(l, grade) });
      }
      if (!l.preview || !l.preview.length) {
        fieldsToAdd.push({ name: 'preview', data: genPreview(l, grade) });
      }

      if (!fieldsToAdd.length) return;

      if (dryRun) {
        fieldsToAdd.forEach(function(f) {
          console.log('  [DRY] ' + gs + ' L' + l.id + ' ' + l.title + ' => ' + f.name + ' (' + f.data.length + ' items)');
          stats[f.name]++;
        });
        return;
      }

      // Find the lesson in source by id + title
      // Find lesson by id pattern, then verify title: follows
      var idPatterns = ['id: ' + l.id + ',', 'id:' + l.id + ','];
      var idx = -1;

      for (var ip = 0; ip < idPatterns.length; ip++) {
        var searchPos = 0;
        while (true) {
          var found = src.indexOf(idPatterns[ip], searchPos);
          if (found === -1) break;
          // Check that 'title:' appears within 60 chars after id
          var after = src.substring(found, found + 60);
          if (after.indexOf('title:') > -1 || after.indexOf('title :') > -1) {
            // Verify this is a lesson id (not footnote/vocab/unit id)
            var before = src.substring(Math.max(0, found - 40), found);
            var afterMore = src.substring(found, found + 200);
            if (before.indexOf('term:') === -1 && before.indexOf('word:') === -1
                && afterMore.indexOf('type:') === -1 && afterMore.indexOf('lessons:') === -1) {
              idx = found;
              break;
            }
          }
          searchPos = found + 1;
        }
        if (idx > -1) break;
      }

      if (idx === -1) {
        console.log('  WARN: ' + gs + ' L' + l.id + ' ' + l.title + ' - lesson not found in source');
        return;
      }

      // For each field, find insertion point after readingTips (or footnotes, or textPinyin)
      fieldsToAdd.forEach(function(f) {
        // Check if field already exists near this lesson
        // Find next lesson start using pre-scanned positions
        var lessonEnd = src.length;
        for (var lpi = 0; lpi < lessonPositions.length; lpi++) {
          if (lessonPositions[lpi] > idx + 10) {
            lessonEnd = lessonPositions[lpi];
            break;
          }
        }
        var lessonBlock = src.substring(idx, lessonEnd);

        // Check if field already exists with content (not empty)
        var fieldCheck = lessonBlock.indexOf(f.name + ':');
        if (fieldCheck > -1) {
          var afterField = lessonBlock.substring(fieldCheck, fieldCheck + f.name.length + 20);
          if (afterField.indexOf('[]') > -1) {
            // Empty array — replace it in-place
            var emptyPos = idx + fieldCheck;
            var emptyStr = f.name + ': []';
            // Detect indent from line
            var lineStartE = src.lastIndexOf('\n', emptyPos);
            var indentE = '      ';
            if (lineStartE > -1) {
              var mE = src.substring(lineStartE + 1, emptyPos).match(/^(\s+)/);
              if (mE) indentE = mE[1];
            }
            var replaceStr = f.name + ': [\n' + buildItemArray(f.data, indentE) + '\n' + indentE + ']';
            if (src.substring(emptyPos, emptyPos + emptyStr.length) === emptyStr) {
              src = src.substring(0, emptyPos) + replaceStr + src.substring(emptyPos + emptyStr.length);
              modified = true;
              stats[f.name]++;
              var blockLen2 = replaceStr.length - emptyStr.length;
              for (var lpu2 = 0; lpu2 < lessonPositions.length; lpu2++) {
                if (lessonPositions[lpu2] > emptyPos) lessonPositions[lpu2] += blockLen2;
              }
            }
            return;
          } else {
            // Has content already
            return;
          }
        }

        // Find a good insertion point: after readingTips, or footnotes, or textPinyin
        var insertAfter = -1;
        var searchFrom = idx;

        // Skip past multiText block if present
        var multiTextMarker = src.indexOf('multiText:', idx);
        if (multiTextMarker > -1 && multiTextMarker < idx + 500) {
          var mtOpen = src.indexOf('[', multiTextMarker);
          var mtClose = findMatchingBracket(src, mtOpen);
          if (mtClose > -1) searchFrom = mtClose + 1;
        }

        // Try to find readingTips, then footnotes, then textPinyin as anchor
        var anchors = ['readingTips:', 'footnotes:', 'textPinyin:', 'vocabWords:', 'textEn:'];
        for (var ai = 0; ai < anchors.length; ai++) {
          var anchorPos = src.indexOf(anchors[ai], searchFrom);
          if (anchorPos > -1 && anchorPos < lessonEnd) {
            var aBrk = src.indexOf('[', anchorPos);
            if (aBrk > -1) {
              var aClose = findMatchingBracket(src, aBrk);
              if (aClose > -1 && aClose < lessonEnd) {
                insertAfter = aClose;
                break;
              }
            }
          }
        }

        if (insertAfter === -1) {
          console.log('  WARN: ' + gs + ' L' + l.id + ' - no anchor for ' + f.name);
          return;
        }

        // Detect indent
        var lineStart = src.lastIndexOf('\n', insertAfter);
        var indent = '    ';
        if (lineStart > -1) {
          var lineContent = src.substring(lineStart + 1, insertAfter);
          var m = lineContent.match(/^(\s+)/);
          if (m) indent = m[1];
        }

        // Check if there's a comma after the closing bracket
        var afterClose = src.substring(insertAfter + 1, insertAfter + 5);
        var hasComma = afterClose[0] === ',';

        // Insert point: after the comma if present, else after the bracket
        var insertPos = hasComma ? insertAfter + 2 : insertAfter + 1;
        var block = (hasComma ? '' : ',') + '\n' + indent + f.name + ': [\n' + buildItemArray(f.data, indent) + '\n' + indent + '],';
        src = src.substring(0, insertPos) + block + src.substring(insertPos);
        modified = true;
        stats[f.name]++;
        // Update pre-scanned positions after insertion
        var blockLen = block.length;
        for (var lpu = 0; lpu < lessonPositions.length; lpu++) {
          if (lessonPositions[lpu] > insertPos) lessonPositions[lpu] += blockLen;
        }

        // Update lessonEnd since we inserted content
        lessonEnd += block.length;
      });
    });
  });

  if (modified && !dryRun) {
    // Verify the modified source parses correctly
    try {
      var ctx2 = { window: {} };
      vm.runInNewContext(src, ctx2);
      fs.writeFileSync(file, src, 'utf8');
      console.log(gs + ': added thinkExplore=' + stats.thinkExplore + ' accumExtend=' + stats.accumExtend + ' preview=' + stats.preview);
    } catch (e) {
      console.error(gs + ': PARSE ERROR, NOT writing! ' + e.message.substring(0, 200));
    }
  } else if (dryRun) {
    console.log(gs + ': (dry run) thinkExplore=' + stats.thinkExplore + ' accumExtend=' + stats.accumExtend + ' preview=' + stats.preview);
  } else {
    console.log(gs + ': nothing to add');
  }

  totalStats.thinkExplore += stats.thinkExplore;
  totalStats.accumExtend += stats.accumExtend;
  totalStats.preview += stats.preview;
});

console.log('\nTotal: thinkExplore=' + totalStats.thinkExplore + ' accumExtend=' + totalStats.accumExtend + ' preview=' + totalStats.preview);
