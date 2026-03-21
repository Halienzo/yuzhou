#!/usr/bin/env node
/**
 * Generate missing grammarPoints for all grades.
 * Format: [{point, pointEn, example, exampleEn, explanation, explanationEn}]
 *
 * Generates 1-2 grammar points per lesson based on grade level and content type.
 * Uses vocabWords and text content to create relevant examples.
 *
 * Usage: node build/gen_grammar_points.js [g3s1|g7s2|...] [--dry-run]
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

function findLessonPositions(src, tb) {
  var positions = [];
  tb.units.forEach(function(u) {
    u.lessons.forEach(function(l) {
      var titlePlain = l.title;
      var titleEsc = toU(l.title);
      var idStr = 'id: ' + l.id + ',';
      var pos = 0;
      var found2 = false;
      while (true) {
        var found = src.indexOf(idStr, pos);
        if (found === -1) break;
        var after = src.substring(found, found + 60);
        if (after.indexOf('title:') > -1) {
          var before = src.substring(Math.max(0, found - 40), found);
          var afterMore = src.substring(found, found + 200);
          if (before.indexOf('term:') === -1 && before.indexOf('word:') === -1
              && afterMore.indexOf('type:') === -1 && afterMore.indexOf('lessons:') === -1) {
            if (afterMore.indexOf(titlePlain) > -1 || afterMore.indexOf(titleEsc) > -1) {
              positions.push(found);
              found2 = true;
              break;
            }
          }
        }
        pos = found + 1;
      }
      // Fallback: search by title (plain, lowercase esc, uppercase esc)
      if (!found2) {
        var titleEscUp2 = titleEsc.replace(/\\u([0-9a-f]{4})/g, function(m, h) { return '\\u' + h.toUpperCase(); });
        var titleSearches = ['title: "' + titlePlain + '"', 'title: "' + titleEsc + '"', 'title: "' + titleEscUp2 + '"'];
        for (var ts = 0; ts < titleSearches.length; ts++) {
          var tfound = src.indexOf(titleSearches[ts]);
          if (tfound > -1) {
            var tAfterMore = src.substring(tfound, tfound + 200);
            if (tAfterMore.indexOf('type:') === -1 && tAfterMore.indexOf('lessons:') === -1) {
              positions.push(tfound);
              break;
            }
          }
        }
      }
    });
  });
  return positions.sort(function(a, b) { return a - b; });
}

/* ========== Grammar Point Templates by Grade ========== */

// Extract a short sentence from text (first sentence or short segment)
function extractSentence(text) {
  if (!text || !text.length) return '';
  var t = Array.isArray(text) ? text[0] : text;
  // Find first complete sentence
  var m = t.match(/[^。！？\n]+[。！？]/);
  if (m && m[0].length <= 40) return m[0];
  // Truncate
  if (t.length > 30) return t.substring(0, 30) + '\u2026';
  return t;
}

function genGrammarPoints(l, grade) {
  var items = [];
  var isC = l.isClassical || false;
  var isP = l.isPoetry || /[\u8bd7\u8bcd\u53e4\u8bd7]/.test(l.title);
  var text = Array.isArray(l.text) ? l.text.join('') : (l.text || '');

  if (grade <= 2) {
    // G1-G2: basic sentence patterns, character knowledge
    var patterns = [
      {
        test: function() { return text.indexOf('\u7684') > -1; },
        point: '\u2026\u2026\u7684\u2026\u2026', pointEn: '...de... (descriptive particle)',
        explanation: '\u201c\u7684\u201d\u7528\u5728\u540d\u8bcd\u524d\u9762\uff0c\u8868\u793a\u4fee\u9970\u5173\u7cfb',
        explanationEn: '"de" is placed before a noun to show a descriptive relationship'
      },
      {
        test: function() { return text.indexOf('\u4e86') > -1; },
        point: '\u2026\u2026\u4e86', pointEn: '...le (completed action)',
        explanation: '\u201c\u4e86\u201d\u8868\u793a\u52a8\u4f5c\u5df2\u7ecf\u5b8c\u6210',
        explanationEn: '"le" indicates a completed action'
      },
      {
        test: function() { return text.indexOf('\u5728') > -1; },
        point: '\u5728\u2026\u2026', pointEn: 'z\u00e0i... (location/ongoing)',
        explanation: '\u201c\u5728\u201d\u8868\u793a\u5730\u70b9\u6216\u6b63\u5728\u8fdb\u884c\u7684\u52a8\u4f5c',
        explanationEn: '"z\u00e0i" indicates location or an ongoing action'
      },
      {
        test: function() { return text.indexOf('\u662f') > -1; },
        point: '\u2026\u2026\u662f\u2026\u2026', pointEn: '...sh\u00ec... (is/are)',
        explanation: '\u201c\u662f\u201d\u8868\u793a\u5224\u65ad\u5173\u7cfb\uff0c\u8fde\u63a5\u4e3b\u8bed\u548c\u8868\u8bed',
        explanationEn: '"sh\u00ec" connects subject and predicate to express identity or equivalence'
      },
      {
        test: function() { return text.indexOf('\u5417') > -1 || text.indexOf('\u5462') > -1 || text.indexOf('\uff1f') > -1; },
        point: '\u2026\u2026\u5417\uff1f / \u2026\u2026\u5462\uff1f', pointEn: '...ma? / ...ne? (question particles)',
        explanation: '\u7528\u8bed\u6c14\u8bcd\u6784\u6210\u7591\u95ee\u53e5',
        explanationEn: 'Question particles form interrogative sentences'
      },
      {
        test: function() { return true; },
        point: '\u53e5\u5b50\u7ed3\u6784\uff1a\u8c01 + \u505a\u4ec0\u4e48', pointEn: 'Sentence structure: Who + does what',
        explanation: '\u57fa\u672c\u53e5\u5f0f\uff1a\u4e3b\u8bed + \u8c13\u8bed',
        explanationEn: 'Basic pattern: subject + predicate'
      }
    ];

    // Pick 2 matching patterns
    var picked = 0;
    for (var pi = 0; pi < patterns.length && picked < 2; pi++) {
      if (patterns[pi].test()) {
        var p = patterns[pi];
        var ex = extractSentence(l.text);
        items.push({
          point: p.point, pointEn: p.pointEn,
          example: ex, exampleEn: l.textEn && l.textEn[0] ? l.textEn[0].substring(0, 60) : '',
          explanation: p.explanation, explanationEn: p.explanationEn
        });
        picked++;
      }
    }
  } else if (grade <= 6) {
    // G3-G6: sentence patterns, rhetorical devices, text structure
    var patterns36 = [
      {
        test: function() { return text.indexOf('\u50cf') > -1 || text.indexOf('\u4eff\u4f5b') > -1 || text.indexOf('\u5982\u540c') > -1; },
        point: '\u6bd4\u55bb\u53e5', pointEn: 'Simile',
        explanation: '\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8',
        explanationEn: 'Using "like" or "as if" for comparison to make descriptions more vivid'
      },
      {
        test: function() { return text.indexOf('\u867d\u7136') > -1 || text.indexOf('\u4f46\u662f') > -1; },
        point: '\u867d\u7136\u2026\u2026\u4f46\u662f\u2026\u2026', pointEn: 'although...but...',
        explanation: '\u8f6c\u6298\u590d\u53e5\uff0c\u8868\u793a\u524d\u540e\u610f\u601d\u7684\u8f6c\u6298',
        explanationEn: 'Adversative compound sentence showing contrast between clauses'
      },
      {
        test: function() { return text.indexOf('\u4e0d\u4f46') > -1 || text.indexOf('\u800c\u4e14') > -1; },
        point: '\u4e0d\u4f46\u2026\u2026\u800c\u4e14\u2026\u2026', pointEn: 'not only...but also...',
        explanation: '\u9012\u8fdb\u590d\u53e5\uff0c\u540e\u4e00\u5206\u53e5\u6bd4\u524d\u4e00\u5206\u53e5\u7a0b\u5ea6\u66f4\u6df1',
        explanationEn: 'Progressive compound sentence where the second clause goes further than the first'
      },
      {
        test: function() { return text.indexOf('\u56e0\u4e3a') > -1 || text.indexOf('\u6240\u4ee5') > -1; },
        point: '\u56e0\u4e3a\u2026\u2026\u6240\u4ee5\u2026\u2026', pointEn: 'because...therefore...',
        explanation: '\u56e0\u679c\u590d\u53e5\uff0c\u8868\u793a\u539f\u56e0\u548c\u7ed3\u679c\u7684\u5173\u7cfb',
        explanationEn: 'Causal compound sentence expressing cause and effect'
      },
      {
        test: function() { return text.indexOf('\u5148') > -1 && text.indexOf('\u518d') > -1; },
        point: '\u5148\u2026\u2026\u518d\u2026\u2026', pointEn: 'first...then...',
        explanation: '\u8868\u793a\u52a8\u4f5c\u7684\u5148\u540e\u987a\u5e8f',
        explanationEn: 'Indicates sequential order of actions'
      },
      {
        test: function() { return text.indexOf('\u4e00\u8fb9') > -1 || text.indexOf('\u4e00\u9762') > -1; },
        point: '\u4e00\u8fb9\u2026\u2026\u4e00\u8fb9\u2026\u2026', pointEn: 'while doing...at the same time...',
        explanation: '\u8868\u793a\u4e24\u4e2a\u52a8\u4f5c\u540c\u65f6\u8fdb\u884c',
        explanationEn: 'Indicates two actions happening simultaneously'
      },
      {
        test: function() { return text.indexOf('\u628a') > -1; },
        point: '\u628a\u5b57\u53e5', pointEn: 'b\u01ce-construction',
        explanation: '\u7528\u201c\u628a\u201d\u5c06\u5bbe\u8bed\u63d0\u524d\uff0c\u5f3a\u8c03\u52a8\u4f5c\u5bf9\u5bf9\u8c61\u7684\u5f71\u54cd',
        explanationEn: 'Moves the object before the verb using "b\u01ce" to emphasize the effect of the action'
      },
      {
        test: function() { return text.indexOf('\u88ab') > -1; },
        point: '\u88ab\u5b57\u53e5', pointEn: 'b\u00e8i-construction (passive)',
        explanation: '\u88ab\u52a8\u53e5\uff0c\u8868\u793a\u4e3b\u8bed\u662f\u52a8\u4f5c\u7684\u627f\u53d7\u8005',
        explanationEn: 'Passive construction where the subject receives the action'
      },
      {
        test: function() { return true; },
        point: '\u603b\u5206\u7ed3\u6784', pointEn: 'General-specific structure',
        explanation: '\u5148\u603b\u8ff0\u518d\u5206\u8ff0\uff0c\u6216\u5148\u5206\u8ff0\u518d\u603b\u7ed3\uff0c\u4f7f\u6587\u7ae0\u6761\u7406\u6e05\u6670',
        explanationEn: 'Start with overview then details, or vice versa, for clear organization'
      }
    ];

    var picked36 = 0;
    for (var p36 = 0; p36 < patterns36.length && picked36 < 2; p36++) {
      if (patterns36[p36].test()) {
        var pp = patterns36[p36];
        var ex2 = extractSentence(l.text);
        items.push({
          point: pp.point, pointEn: pp.pointEn,
          example: ex2, exampleEn: l.textEn && l.textEn[0] ? l.textEn[0].substring(0, 80) : '',
          explanation: pp.explanation, explanationEn: pp.explanationEn
        });
        picked36++;
      }
    }
  } else {
    // G7-G9: literary techniques, argumentation, classical Chinese
    if (isC) {
      items.push({
        point: '\u6587\u8a00\u5b9e\u8bcd', pointEn: 'Classical content words',
        example: extractSentence(l.text),
        exampleEn: l.textEn && l.textEn[0] ? l.textEn[0].substring(0, 80) : '',
        explanation: '\u7406\u89e3\u6587\u8a00\u6587\u4e2d\u91cd\u70b9\u5b9e\u8bcd\u7684\u542b\u4e49\uff0c\u6ce8\u610f\u53e4\u4eca\u5f02\u4e49',
        explanationEn: 'Understand key content words in classical Chinese and note differences from modern usage'
      });
      items.push({
        point: '\u6587\u8a00\u53e5\u5f0f', pointEn: 'Classical sentence patterns',
        example: extractSentence(l.text),
        exampleEn: l.textEn && l.textEn[0] ? l.textEn[0].substring(0, 80) : '',
        explanation: '\u638c\u63e1\u5012\u88c5\u53e5\u3001\u7701\u7565\u53e5\u3001\u5224\u65ad\u53e5\u7b49\u6587\u8a00\u7279\u6b8a\u53e5\u5f0f',
        explanationEn: 'Master classical patterns: inverted sentences, ellipsis, and copular sentences'
      });
    } else if (isP) {
      items.push({
        point: '\u610f\u8c61\u4e0e\u610f\u5883', pointEn: 'Imagery and atmosphere',
        example: extractSentence(l.text),
        exampleEn: l.textEn && l.textEn[0] ? l.textEn[0].substring(0, 80) : '',
        explanation: '\u8bd7\u4eba\u901a\u8fc7\u610f\u8c61\u7684\u9009\u62e9\u548c\u7ec4\u5408\u8425\u9020\u7279\u5b9a\u7684\u610f\u5883\uff0c\u4f20\u8fbe\u60c5\u611f',
        explanationEn: 'Poets create atmosphere through selecting and combining imagery to convey emotions'
      });
      items.push({
        point: '\u97f5\u5f8b\u4e0e\u8282\u594f', pointEn: 'Rhyme and rhythm',
        example: extractSentence(l.text),
        exampleEn: l.textEn && l.textEn[0] ? l.textEn[0].substring(0, 80) : '',
        explanation: '\u8bd7\u6b4c\u901a\u8fc7\u62bc\u97f5\u3001\u5bf9\u4ed7\u3001\u53e5\u5f0f\u53d8\u5316\u4ea7\u751f\u97f3\u4e50\u7f8e',
        explanationEn: 'Poetry achieves musicality through rhyme, parallelism, and varying line structures'
      });
    } else {
      var patterns79 = [
        {
          test: function() { return text.indexOf('\u6bd4\u55bb') > -1 || text.indexOf('\u50cf') > -1 || text.indexOf('\u4eff\u4f5b') > -1; },
          point: '\u6bd4\u55bb', pointEn: 'Simile/Metaphor',
          explanation: '\u901a\u8fc7\u6bd4\u55bb\u4f7f\u62bd\u8c61\u7684\u4e8b\u7269\u5177\u4f53\u5316\uff0c\u589e\u5f3a\u8868\u8fbe\u6548\u679c',
          explanationEn: 'Using metaphor to make abstract things concrete and enhance expressive effect'
        },
        {
          test: function() { return text.indexOf('\u5bf9\u6bd4') > -1 || (text.indexOf('\u800c') > -1 && text.indexOf('\u5374') > -1); },
          point: '\u5bf9\u6bd4\u624b\u6cd5', pointEn: 'Contrast',
          explanation: '\u901a\u8fc7\u5bf9\u6bd4\u7a81\u51fa\u4e8b\u7269\u7684\u7279\u5f81\uff0c\u4f7f\u8868\u8fbe\u66f4\u9c9c\u660e',
          explanationEn: 'Using contrast to highlight characteristics and sharpen the expression'
        },
        {
          test: function() { return text.indexOf('\u8bae\u8bba') > -1 || text.indexOf('\u8bba\u70b9') > -1 || text.indexOf('\u8bba\u636e') > -1; },
          point: '\u8bae\u8bba\u6587\u7ed3\u6784', pointEn: 'Argumentative essay structure',
          explanation: '\u8bae\u8bba\u6587\u7531\u8bba\u70b9\u3001\u8bba\u636e\u3001\u8bba\u8bc1\u4e09\u90e8\u5206\u7ec4\u6210',
          explanationEn: 'Argumentative essays consist of thesis, evidence, and reasoning'
        },
        {
          test: function() { return text.indexOf('\u6392\u6bd4') > -1 || /[\u2026]{2}[\uff0c\u3002][^。]{0,20}[\u2026]{2}[\uff0c\u3002]/.test(text); },
          point: '\u6392\u6bd4', pointEn: 'Parallelism',
          explanation: '\u7528\u7ed3\u6784\u76f8\u540c\u7684\u53e5\u5f0f\u6392\u5217\u5728\u4e00\u8d77\uff0c\u589e\u5f3a\u8bed\u52bf',
          explanationEn: 'Arranging sentences of the same structure together to strengthen momentum'
        },
        {
          test: function() { return true; },
          point: '\u8868\u8fbe\u65b9\u5f0f', pointEn: 'Modes of expression',
          explanation: '\u53d9\u8ff0\u3001\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\u4e94\u79cd\u57fa\u672c\u8868\u8fbe\u65b9\u5f0f',
          explanationEn: 'Five basic modes: narration, description, argumentation, lyrical expression, and exposition'
        },
        {
          test: function() { return true; },
          point: '\u4e2d\u5fc3\u601d\u60f3', pointEn: 'Central idea',
          explanation: '\u6587\u7ae0\u7684\u4e3b\u9898\u548c\u4f5c\u8005\u60f3\u8981\u8868\u8fbe\u7684\u6838\u5fc3\u601d\u60f3',
          explanationEn: 'The theme and core idea the author wishes to convey'
        }
      ];

      var picked79 = 0;
      for (var p79 = 0; p79 < patterns79.length && picked79 < 2; p79++) {
        if (patterns79[p79].test()) {
          var pp79 = patterns79[p79];
          items.push({
            point: pp79.point, pointEn: pp79.pointEn,
            example: extractSentence(l.text),
            exampleEn: l.textEn && l.textEn[0] ? l.textEn[0].substring(0, 80) : '',
            explanation: pp79.explanation, explanationEn: pp79.explanationEn
          });
          picked79++;
        }
      }
    }
  }
  return items;
}

function buildGPArray(items, indent) {
  var lines = [];
  items.forEach(function(item) {
    lines.push(indent + '  {point: "' + toU(item.point) + '", pointEn: "' + toU(item.pointEn) +
      '", example: "' + toU(item.example) + '", exampleEn: "' + toU(item.exampleEn) +
      '", explanation: "' + toU(item.explanation) + '", explanationEn: "' + toU(item.explanationEn) + '"}');
  });
  return lines.join(',\n');
}

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
      if (l.grammarPoints && l.grammarPoints.length > 0) return;

      var points = genGrammarPoints(l, tb.grade);
      if (!points || !points.length) return;

      if (dryRun) {
        console.log('  [DRY] ' + gs + ' L' + l.id + ' ' + l.title + ' => ' + points.length + ' points');
        added++;
        return;
      }

      // Find lesson position — try id+title, fallback to title-only for G1-G2
      var idx = -1;
      var titlePlain = l.title;
      var titleEsc = toU(l.title);

      // Strategy 1: search by id pattern
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
            // For grades with duplicate IDs, verify title matches
            if (afterMore.indexOf(titlePlain) > -1 || afterMore.indexOf(titleEsc) > -1) {
              idx = found;
              break;
            }
          }
        }
        pos = found + 1;
      }

      // Strategy 2: search by title directly (plain, lowercase esc, uppercase esc)
      if (idx === -1) {
        var titleEscUp = toU(l.title).replace(/\\u([0-9a-f]{4})/g, function(m, h) { return '\\u' + h.toUpperCase(); });
        var titleSearches = [
          'title: "' + titlePlain + '"', 'title: "' + titleEsc + '"',
          'title:"' + titlePlain + '"', 'title:"' + titleEsc + '"',
          'title: "' + titleEscUp + '"', 'title:"' + titleEscUp + '"'
        ];
        for (var ts = 0; ts < titleSearches.length; ts++) {
          var tpos = 0;
          while (true) {
            var tfound = src.indexOf(titleSearches[ts], tpos);
            if (tfound === -1) break;
            // Check this is a lesson (has id: before it)
            var tbefore = src.substring(Math.max(0, tfound - 100), tfound);
            if (tbefore.indexOf('id:') > -1) {
              var tAfterMore = src.substring(tfound, tfound + 200);
              if (tAfterMore.indexOf('type:') === -1 && tAfterMore.indexOf('lessons:') === -1) {
                idx = tfound;
                break;
              }
            }
            tpos = tfound + 1;
          }
          if (idx > -1) break;
        }
      }

      if (idx === -1) { console.log('  WARN: ' + gs + ' L' + l.id + ' ' + l.title + ' not found'); return; }

      var lessonEnd = src.length;
      for (var lpi = 0; lpi < lessonPositions.length; lpi++) {
        if (lessonPositions[lpi] > idx + 10) { lessonEnd = lessonPositions[lpi]; break; }
      }

      var lessonBlock = src.substring(idx, lessonEnd);
      if (lessonBlock.indexOf('grammarPoints:') > -1) {
        // Check if empty
        var gpIdx = lessonBlock.indexOf('grammarPoints:');
        var gpAfter = lessonBlock.substring(gpIdx, gpIdx + 30);
        if (gpAfter.indexOf('[]') === -1) return;
        // Replace empty
        var emptyPos = idx + gpIdx;
        var lineStartE = src.lastIndexOf('\n', emptyPos);
        var indentE = '      ';
        if (lineStartE > -1) { var mE = src.substring(lineStartE + 1, emptyPos).match(/^(\s+)/); if (mE) indentE = mE[1]; }
        var emptyStr = 'grammarPoints: []';
        var replaceStr = 'grammarPoints: [\n' + buildGPArray(points, indentE) + '\n' + indentE + ']';
        if (src.substring(emptyPos, emptyPos + emptyStr.length) === emptyStr) {
          src = src.substring(0, emptyPos) + replaceStr + src.substring(emptyPos + emptyStr.length);
          modified = true; added++;
          var shift = replaceStr.length - emptyStr.length;
          for (var u2 = 0; u2 < lessonPositions.length; u2++) { if (lessonPositions[u2] > emptyPos) lessonPositions[u2] += shift; }
        }
        return;
      }

      // Insert after vocabWords or readingTips or footnotes
      var anchors = ['vocabWords:', 'readingTips:', 'footnotes:', 'textPinyin:', 'textEn:'];
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
      var block = (hasComma ? '' : ',') + '\n' + indent + 'grammarPoints: [\n' + buildGPArray(points, indent) + '\n' + indent + '],';
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
      console.log(gs + ': added ' + added + ' grammarPoints');
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

console.log('\nTotal: ' + totalAdded + ' grammarPoints added');
