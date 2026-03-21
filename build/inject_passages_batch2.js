/**
 * Batch 2: Inject remaining missing passages + English translations into xcsc_data.js
 * Reads fix data from _batch2_data.json
 *
 * Usage: node build/inject_passages_batch2.js
 */
var fs = require('fs');
var src = fs.readFileSync('E:/chinese/xcsc_data.js', 'utf8');
var jsonStr = src.replace(/^window\.XCSC_DATA\s*=\s*/, '').replace(/;\s*$/, '');
var data = JSON.parse(jsonStr);

var FIXES = JSON.parse(fs.readFileSync('E:/chinese/build/_batch2_data.json', 'utf8'));

var fixCount = 0;
var p = data.papers;
Object.keys(FIXES).forEach(function(paperId) {
  var paperFixes = FIXES[paperId];
  var paper = p.find(function(pp) { return pp.id === paperId; });
  if (!paper) {
    console.log('WARNING: Paper ' + paperId + ' not found');
    return;
  }
  Object.keys(paperFixes).forEach(function(qNumStr) {
    var qNum = parseInt(qNumStr);
    var fix = paperFixes[qNumStr];
    var found = false;
    paper.sections.forEach(function(s) {
      s.questions.forEach(function(q) {
        if (q.num === qNum) {
          found = true;
          Object.keys(fix).forEach(function(key) {
            q[key] = fix[key];
          });
          fixCount++;
          console.log('  Fixed ' + paperId + ' Q' + qNum + ' (' + Object.keys(fix).join(', ') + ')');
        }
      });
    });
    if (!found) {
      console.log('WARNING: ' + paperId + ' Q' + qNum + ' not found');
    }
  });
});

console.log('\nTotal fixes applied: ' + fixCount);

var output = 'window.XCSC_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('E:/chinese/xcsc_data.js', output, 'utf8');
console.log('Saved xcsc_data.js (' + (output.length / 1024).toFixed(0) + ' KB)');
