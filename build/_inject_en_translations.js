#!/usr/bin/env node
/**
 * Generic EN translation injector.
 * Usage: node _inject_en_translations.js <textbook_file> <en_json_file>
 *
 * The JSON file maps titleEn -> string[] of English paragraphs.
 * Each lesson's textEn[] is replaced if the titleEn key matches.
 */
var fs = require('fs');
var vm = require('vm');

var tbFile = process.argv[2];
var enFile = process.argv[3];
if (!tbFile || !enFile) {
  console.error('Usage: node _inject_en_translations.js <textbook.js> <en.json>');
  process.exit(1);
}

var src = fs.readFileSync(tbFile, 'utf8');
var enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));

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

function buildEnArray(paragraphs, indent) {
  indent = indent || '      ';
  return paragraphs.map(function(p, i) {
    var comma = i < paragraphs.length - 1 ? ',' : '';
    var escaped = p.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '');
    return indent + '  "' + escaped + '"' + comma;
  }).join('\n');
}

var count = 0;
Object.keys(enData).forEach(function(titleEn) {
  var newEn = enData[titleEn];
  var idx = src.indexOf('titleEn: "' + titleEn + '"');
  if (idx === -1) { console.error('  NOT FOUND: ' + titleEn); return; }

  // Find text[] to verify paragraph count
  var textMarker = src.indexOf('text: [', idx);
  if (textMarker === -1 || textMarker > idx + 5000) { console.error('  No text[]: ' + titleEn); return; }
  var tOpen = src.indexOf('[', textMarker);
  var tClose = findMatchingBracket(src, tOpen);

  // Find textEn[]
  var after = src.substring(tClose, tClose + 1500);
  var eOff = after.indexOf('textEn: [');
  if (eOff === -1) { console.error('  No textEn: ' + titleEn); return; }
  var eMarker = tClose + eOff;
  var eOpen = src.indexOf('[', eMarker);
  var eClose = findMatchingBracket(src, eOpen);
  if (eClose === -1) { console.error('  No textEn]: ' + titleEn); return; }

  var indent = '      ';
  var newE = '[\n' + buildEnArray(newEn, indent) + '\n' + indent + ']';
  src = src.substring(0, eOpen) + newE + src.substring(eClose + 1);
  count++;
  console.log('  OK: ' + titleEn + ' => ' + newEn.length + ' en paras');
});

fs.writeFileSync(tbFile, src, 'utf8');
console.log('\nInjected ' + count + ' translations into ' + tbFile);

// Validate
var varName = tbFile.replace(/.*[\/\\]/, '').replace('textbook_', 'TB_').replace('.js', '').toUpperCase();
var ctx = {};
vm.runInNewContext(src, ctx);
var tb = ctx[varName];
var issues = 0;
tb.units.forEach(function(u) {
  u.lessons.forEach(function(l) {
    var mismatch = l.text && l.textEn && l.text.length !== l.textEn.length;
    if (mismatch) {
      issues++;
      console.log('  MISMATCH L' + l.id + ' ' + l.title + ': p=' + l.text.length + '/' + l.textEn.length);
    }
  });
});
console.log('Validation: ' + (issues === 0 ? 'PASS' : issues + ' mismatches'));
