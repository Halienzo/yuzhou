var fs=require('fs');
var html=fs.readFileSync('Chinese chars.html','utf-8');
var checks = [
  '_tbIsCurrentPoem',
  '_renderPoemBlock',
  'tb-poem-wrap',
  'tb-poem-scroll',
  'tbPyRuby',
  '_cmResolvePinyin',
  '_cmW=d.words',
  '_cmPyPatch',
  'writing-mode:vertical-rl'
];
checks.forEach(function(c) {
  var idx = html.indexOf(c);
  console.log((idx >= 0 ? 'OK' : 'MISSING') + ': ' + c);
});
// Check no "push('?')" remains
var hasQ = html.indexOf("pys.push('?')") >= 0;
console.log('\npush(?) removed: ' + (hasQ ? 'NO (still there)' : 'YES'));
// Check file size
console.log('File size: ' + (html.length / 1024 / 1024).toFixed(2) + ' MB');
