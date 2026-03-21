#!/usr/bin/env node
/**
 * Fix G8S2 cross-contamination in L6-L7:
 * L6: text[0] has essay1+essay2 merged, text[1] has tail of essay2 + 大雁归来 content
 *   => Replace both with clean extracted essays
 * L7: text[1] has 时间的脚印 appended after "野性的诗歌。", text[2] is entirely 时间的脚印
 *   => Trim text[1] at boundary, remove text[2]
 * L6/L7/L8: stub English translations => inject full translations
 */
var fs = require('fs');
var vm = require('vm');

var src = fs.readFileSync('textbook_g8s2.js', 'utf8');

// Load fix data
var fixData = JSON.parse(fs.readFileSync('build/_g8s2_contamination_fix.json', 'utf8'));

// Load EN translations
var enData = null;
try { enData = JSON.parse(fs.readFileSync('build/_g8s2_en_l6_l8.json', 'utf8')); } catch(e) { console.log('WARNING: _g8s2_en_l6_l8.json not found, skipping EN'); }

function toU(s) {
  var r = '';
  for (var i = 0; i < s.length; i++) {
    var code = s.codePointAt(i);
    if (code === 10) { r += '\\n'; }
    else if (code === 13) { /* skip */ }
    else if (code === 34) { r += '\\"'; }
    else if (code === 92) { r += '\\\\'; }
    else if (code > 127) {
      r += '\\u' + code.toString(16).padStart(4, '0');
      if (code > 0xFFFF) i++;
    } else { r += s[i]; }
  }
  return r;
}

function buildTextArray(paragraphs, indent) {
  indent = indent || '      ';
  return paragraphs.map(function(p, i) {
    var comma = i < paragraphs.length - 1 ? ',' : '';
    return indent + '  "' + toU(p) + '"' + comma;
  }).join('\n');
}

function buildEnArray(paragraphs, indent) {
  indent = indent || '      ';
  return paragraphs.map(function(p, i) {
    var comma = i < paragraphs.length - 1 ? ',' : '';
    var escaped = p.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '');
    return indent + '  "' + escaped + '"' + comma;
  }).join('\n');
}

function findMatchingBracket(src, openPos) {
  var depth = 0, inStr = false, strCh = '', esc = false;
  for (var i = openPos + 1; i < src.length; i++) {
    var c = src[i];
    if (esc) { esc = false; continue; }
    if (c === '\\') { esc = true; continue; }
    if (inStr) { if (c === strCh) inStr = false; continue; }
    if (c === '"' || c === "'") { inStr = true; strCh = c; continue; }
    if (c === '[') depth++;
    if (c === ']') { if (depth === 0) return i; depth--; }
  }
  return -1;
}

function replaceTextAndEn(titleEn, newCn, newEn) {
  var idx = src.indexOf('titleEn: "' + titleEn + '"');
  if (idx === -1) { console.error('NOT FOUND: ' + titleEn); return false; }

  var textMarker = src.indexOf('text: [', idx);
  if (textMarker === -1 || textMarker > idx + 3000) { console.error('No text[]: ' + titleEn); return false; }
  var tOpen = src.indexOf('[', textMarker);
  var tClose = findMatchingBracket(src, tOpen);
  if (tClose === -1) { console.error('No text]: ' + titleEn); return false; }

  var after = src.substring(tClose, tClose + 1000);
  var eOff = after.indexOf('textEn: [');
  if (eOff === -1) { console.error('No textEn: ' + titleEn); return false; }
  var eMarker = tClose + eOff;
  var eOpen = src.indexOf('[', eMarker);
  var eClose = findMatchingBracket(src, eOpen);
  if (eClose === -1) { console.error('No textEn]: ' + titleEn); return false; }

  var indent = '      ';

  // Replace textEn first (higher position), then text
  if (newEn) {
    var newE = '[\n' + buildEnArray(newEn, indent) + '\n' + indent + ']';
    src = src.substring(0, eOpen) + newE + src.substring(eClose + 1);
  }
  if (newCn) {
    var newT = '[\n' + buildTextArray(newCn, indent) + '\n' + indent + ']';
    src = src.substring(0, tOpen) + newT + src.substring(tClose + 1);
  }
  console.log('  OK: ' + titleEn + ' => ' + (newCn ? newCn.length + ' cn' : 'cn unchanged') + ', ' + (newEn ? newEn.length + ' en' : 'en unchanged'));
  return true;
}

// ===== FIX L6: Replace both essays with clean extracted text =====
console.log('\n=== Fix L6: 阿西莫夫短文两篇 ===');
var l6en = enData ? enData.L6 : null;
replaceTextAndEn('Two Short Essays by Asimov', fixData.L6.cn, l6en);

// ===== FIX L7: Replace text with clean 大雁归来 (trim 时间的脚印 contamination) =====
console.log('\n=== Fix L7: 大雁归来 ===');
var l7en = enData ? enData.L7 : null;
replaceTextAndEn('The Return of the Wild Geese', fixData.L7.cn, l7en);

// ===== FIX L8: EN only (CN is correct) =====
console.log('\n=== Fix L8: 时间的脚印 ===');
if (enData && enData.L8) {
  // Only replace EN, keep CN
  var idx8 = src.indexOf('titleEn: "Footprints of Time"');
  if (idx8 !== -1) {
    var tClose8 = findMatchingBracket(src, src.indexOf('[', src.indexOf('text: [', idx8)));
    var after8 = src.substring(tClose8, tClose8 + 1000);
    var eOff8 = after8.indexOf('textEn: [');
    if (eOff8 !== -1) {
      var eOpen8 = src.indexOf('[', tClose8 + eOff8);
      var eClose8 = findMatchingBracket(src, eOpen8);
      var newE8 = '[\n' + buildEnArray(enData.L8, '      ') + '\n      ]';
      src = src.substring(0, eOpen8) + newE8 + src.substring(eClose8 + 1);
      console.log('  OK: Footprints of Time => en ' + enData.L8.length);
    }
  }
} else {
  console.log('  Skipped (no EN data)');
}

// Write output
fs.writeFileSync('textbook_g8s2.js', src, 'utf8');
console.log('\nDone. Wrote textbook_g8s2.js');

// Validate
console.log('\n=== Validation ===');
var ctx = {};
vm.runInNewContext(src, ctx);
var tb = ctx.TB_G8S2;
var total = 0;
tb.units.forEach(function(u) {
  u.lessons.forEach(function(l) {
    var cn = l.text ? l.text.join('').replace(/[^\u4e00-\u9fff]/g, '').length : 0;
    total += cn;
    var enLen = l.textEn ? l.textEn.join('').length : 0;
    var mismatch = l.text && l.textEn && l.text.length !== l.textEn.length;
    var ratio = cn > 0 && enLen > 0 ? (enLen/cn).toFixed(2) : 'N/A';
    if (l.id >= 6 && l.id <= 8) {
      console.log('  L' + l.id + ' ' + l.title + ': ' + cn + 'cn, ' + enLen + 'en, r=' + ratio + ', p=' + (l.text ? l.text.length : 0) + '/' + (l.textEn ? l.textEn.length : 0) + (mismatch ? ' MISMATCH!' : ''));
    }
  });
});
console.log('Total CN chars: ' + total);
