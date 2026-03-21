#!/usr/bin/env node
/**
 * Full-field audit for all 476 lessons across G1-G9.
 * Checks coverage and quality of every data field.
 *
 * Usage: node build/audit_full.js [--verbose]
 */
var fs = require('fs');
var vm = require('vm');

var verbose = process.argv.indexOf('--verbose') > -1;

var fields = [
  {name: 'text',          required: true,  all: true},
  {name: 'textEn',        required: true,  all: true},
  {name: 'textPinyin',    required: true,  all: true},
  {name: 'vocabWords',    required: true,  all: true},
  {name: 'footnotes',     required: true,  all: true},
  {name: 'readingTips',   required: true,  all: true},
  {name: 'grammarPoints', required: true,  all: true},
  {name: 'teachingPoints',required: false, all: true},
  {name: 'parentTips',    required: false, all: true},
  {name: 'exercises',     required: false, all: true},
  {name: 'authorBio',     required: false, all: true},
  {name: 'difficulty',    required: false, all: true},
  // G7-G9 only
  {name: 'annotations',   required: false, all: false, grades: [7,8,9]},
  {name: 'thinkExplore',  required: false, all: false, grades: [7,8,9]},
  {name: 'accumExtend',   required: false, all: false, grades: [7,8,9]},
  {name: 'preview',       required: false, all: false, grades: [7,8,9]}
];

var totalLessons = 0;
var coverage = {};
fields.forEach(function(f) { coverage[f.name] = {has: 0, miss: 0, issues: []}; });

var alignIssues = [];
var parseErrors = [];

for (var g = 1; g <= 9; g++) {
  for (var s = 1; s <= 2; s++) {
    var file = 'textbook_g' + g + 's' + s + '.js';
    if (!fs.existsSync(file)) { parseErrors.push(file + ': FILE MISSING'); continue; }

    var ctx = { window: {} };
    try {
      vm.runInNewContext(fs.readFileSync(file, 'utf8'), ctx);
    } catch (e) {
      parseErrors.push(file + ': PARSE ERROR ' + e.message.substring(0, 100));
      continue;
    }

    var varName = 'TB_G' + g + 'S' + s;
    var tb = ctx[varName] || ctx.window[varName];
    if (!tb) { parseErrors.push(file + ': NO ' + varName); continue; }

    tb.units.forEach(function(u) {
      if (!u.lessons) return;
      u.lessons.forEach(function(l) {
        totalLessons++;
        var lid = 'G' + g + 'S' + s + ' L' + l.id + ' ' + (l.title || '?');

        // Check each field
        fields.forEach(function(f) {
          if (f.grades && f.grades.indexOf(g) === -1) return; // skip if not applicable grade

          var val = l[f.name];
          var hasIt = false;

          if (f.name === 'authorBio') {
            hasIt = val && (val.cn || val.en);
          } else if (f.name === 'difficulty') {
            hasIt = typeof val === 'number' && val > 0;
          } else if (Array.isArray(val)) {
            hasIt = val.length > 0;
          } else if (typeof val === 'object' && val !== null) {
            hasIt = true;
          } else if (typeof val === 'string') {
            hasIt = val.length > 0;
          }

          if (hasIt) {
            coverage[f.name].has++;
          } else {
            coverage[f.name].miss++;
            if (f.required || verbose) {
              coverage[f.name].issues.push(lid);
            }
          }
        });

        // Alignment check: text[] vs textEn[] length
        var text = Array.isArray(l.text) ? l.text : [];
        var textEn = Array.isArray(l.textEn) ? l.textEn : [];
        if (text.length > 0 && textEn.length > 0 && text.length !== textEn.length && !l.multiText) {
          alignIssues.push(lid + ': text=' + text.length + ' textEn=' + textEn.length);
        }

        // Stub check
        if (textEn.length > 0) {
          var hasStub = textEn.some(function(e) { return e === '(Translation pending)'; });
          if (hasStub) {
            coverage['textEn'].issues.push(lid + ' [STUB]');
          }
        }

        // textPinyin alignment
        var textPinyin = Array.isArray(l.textPinyin) ? l.textPinyin : [];
        if (text.length > 0 && textPinyin.length > 0 && text.length !== textPinyin.length && !l.multiText) {
          coverage['textPinyin'].issues.push(lid + ': text=' + text.length + ' pinyin=' + textPinyin.length);
        }

        // grammarPoints quality: each should have point + pointEn + explanation
        if (l.grammarPoints && l.grammarPoints.length > 0) {
          l.grammarPoints.forEach(function(gp, gi) {
            if (!gp.point || !gp.pointEn) {
              coverage['grammarPoints'].issues.push(lid + ' GP[' + gi + ']: missing point/pointEn');
            }
          });
        }

        // vocabWords quality: each should have word + pinyin + en
        if (l.vocabWords && l.vocabWords.length > 0) {
          var badVw = l.vocabWords.filter(function(v) { return !v.word || !v.pinyin; });
          if (badVw.length > 0) {
            coverage['vocabWords'].issues.push(lid + ': ' + badVw.length + ' missing word/pinyin');
          }
        }
      });
    });
  }
}

// Report
console.log('=== YuZhou Full-Field Audit ===\n');

if (parseErrors.length > 0) {
  console.log('PARSE ERRORS:');
  parseErrors.forEach(function(e) { console.log('  ' + e); });
  console.log('');
}

console.log('Total lessons: ' + totalLessons + '\n');

console.log('Field Coverage:');
console.log('  ' + pad('Field', 18) + pad('Has', 6) + pad('Miss', 6) + 'Pct');
console.log('  ' + '-'.repeat(38));

var allOk = true;
fields.forEach(function(f) {
  var c = coverage[f.name];
  var total = c.has + c.miss;
  if (total === 0) return;
  var pct = (c.has / total * 100).toFixed(1);
  var marker = c.miss === 0 ? ' OK' : (f.required ? ' FAIL' : '');
  if (f.required && c.miss > 0) allOk = false;
  console.log('  ' + pad(f.name, 18) + pad(c.has + '/' + total, 10) + pct + '%' + marker);
});

if (alignIssues.length > 0) {
  console.log('\nAlignment Issues (' + alignIssues.length + '):');
  alignIssues.forEach(function(i) { console.log('  ' + i); });
  allOk = false;
}

// Show issues for required fields
fields.forEach(function(f) {
  var c = coverage[f.name];
  if (c.issues.length > 0 && (f.required || verbose)) {
    console.log('\n' + f.name + ' issues (' + c.issues.length + '):');
    c.issues.slice(0, verbose ? 999 : 10).forEach(function(i) { console.log('  ' + i); });
    if (!verbose && c.issues.length > 10) console.log('  ... and ' + (c.issues.length - 10) + ' more');
  }
});

console.log('\n' + (allOk ? 'All required fields OK.' : 'ISSUES FOUND — see above.'));
if (!allOk) process.exit(1);

function pad(s, n) { s = String(s); while (s.length < n) s += ' '; return s; }
