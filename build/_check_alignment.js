#!/usr/bin/env node
/**
 * Full alignment check for all 476 lessons across G1-G9.
 * Verifies: text/textEn existence, paragraph count match, no stubs, healthy EN/CN ratio.
 *
 * Usage: node build/_check_alignment.js
 */
var fs = require('fs');
var vm = require('vm');

var allGrades = [];
for (var g = 1; g <= 9; g++) {
  for (var s = 1; s <= 2; s++) {
    allGrades.push('g' + g + 's' + s);
  }
}

var totalLessons = 0, withEn = 0, noText = 0, noTextEn = 0, mismatches = 0, lowRatio = 0, stubs = 0;
var issues = [];

allGrades.forEach(function(gs) {
  var file = 'textbook_' + gs + '.js';
  if (!fs.existsSync(file)) { console.log('MISSING: ' + file); return; }
  var ctx = {};
  var varName = 'TB_' + gs.toUpperCase();
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), ctx);
  var tb = ctx[varName];
  var gsLessons = 0;
  tb.units.forEach(function(u) {
    u.lessons.forEach(function(l) {
      totalLessons++;
      gsLessons++;

      if (!l.text || l.text.length === 0) {
        noText++;
        issues.push(gs + ' L' + l.id + ' ' + (l.titleEn || l.title) + ': NO TEXT');
        return;
      }

      if (!l.textEn || l.textEn.length === 0) {
        noTextEn++;
        issues.push(gs + ' L' + l.id + ' ' + (l.titleEn || l.title) + ': NO textEn');
        return;
      }

      if (l.text.length !== l.textEn.length) {
        mismatches++;
        issues.push(gs + ' L' + l.id + ' ' + (l.titleEn || l.title) + ': MISMATCH p=' + l.text.length + '/' + l.textEn.length);
        return;
      }

      var hasStub = l.textEn.some(function(e) { return e === '(Translation pending)'; });
      if (hasStub) {
        stubs++;
        issues.push(gs + ' L' + l.id + ' ' + (l.titleEn || l.title) + ': STUB EN');
        return;
      }

      var cn = l.text.join('').length;
      var en = l.textEn.join('').length;
      var ratio = cn > 0 ? en / cn : 0;
      if (ratio < 0.3 && cn > 50) {
        lowRatio++;
        issues.push(gs + ' L' + l.id + ' ' + (l.titleEn || l.title) + ': LOW RATIO ' + ratio.toFixed(2) + ' (' + en + 'en/' + cn + 'cn)');
      }

      withEn++;
    });
  });
  console.log(gs + ': ' + gsLessons + ' lessons');
});

console.log('\n=== SUMMARY ===');
console.log('Total lessons: ' + totalLessons);
console.log('With aligned EN: ' + withEn);
console.log('No text[]: ' + noText);
console.log('No textEn[]: ' + noTextEn);
console.log('Paragraph mismatches: ' + mismatches);
console.log('Stub translations: ' + stubs);
console.log('Low EN/CN ratio: ' + lowRatio);

if (issues.length > 0) {
  console.log('\n=== ISSUES ===');
  issues.forEach(function(i) { console.log('  ' + i); });
  process.exit(1);
} else {
  console.log('\nAll ' + totalLessons + ' lessons OK.');
}
