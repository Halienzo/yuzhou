#!/usr/bin/env node
/**
 * Fix G9S2 cross-contamination:
 * L7 溜索: text[2] has 蒲柳人家 appended after "寻不着那鹰。", text[3-4] entirely wrong
 * L14 山水画的意境: text[1] has 无言之美 appended after "艺术语言。", text[2] entirely wrong
 * L15 无言之美: text[2] is entirely 驱遣我们的想象 content
 * L16 驱遣我们的想象: correct (no fix needed, just EN)
 */
var fs = require('fs');
var vm = require('vm');

var src = fs.readFileSync('textbook_g9s2.js', 'utf8');

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

function replaceTextAndEn(titleEn, newCn, newEn) {
  var idx = src.indexOf('titleEn: "' + titleEn + '"');
  if (idx === -1) { console.error('  NOT FOUND: ' + titleEn); return false; }
  var textMarker = src.indexOf('text: [', idx);
  if (textMarker === -1 || textMarker > idx + 5000) { console.error('  No text[]: ' + titleEn); return false; }
  var tOpen = src.indexOf('[', textMarker);
  var tClose = findMatchingBracket(src, tOpen);
  if (tClose === -1) { console.error('  No text]: ' + titleEn); return false; }
  var after = src.substring(tClose, tClose + 1500);
  var eOff = after.indexOf('textEn: [');
  if (eOff === -1) { console.error('  No textEn: ' + titleEn); return false; }
  var eOpen = src.indexOf('[', tClose + eOff);
  var eClose = findMatchingBracket(src, eOpen);
  if (eClose === -1) { console.error('  No textEn]: ' + titleEn); return false; }
  var indent = '      ';
  if (newEn) {
    src = src.substring(0, eOpen) + '[\n' + buildEnArray(newEn, indent) + '\n' + indent + ']' + src.substring(eClose + 1);
  }
  if (newCn) {
    src = src.substring(0, tOpen) + '[\n' + buildTextArray(newCn, indent) + '\n' + indent + ']' + src.substring(tClose + 1);
  }
  console.log('  OK: ' + titleEn + ' => ' + (newCn ? newCn.length + ' cn' : '-') + ', ' + (newEn ? newEn.length + ' en' : '-'));
  return true;
}

// Load current data for trimming
var ctx = {};
vm.runInNewContext(fs.readFileSync('textbook_g9s2.js', 'utf8'), ctx);
var tb = ctx.TB_G9S2;
function fl(id) { var r; tb.units.forEach(function(u){ u.lessons.forEach(function(l){ if(l.id===id)r=l; }); }); return r; }

// Stub EN helper
function stubEn(count) {
  var arr = [];
  for (var i = 0; i < count; i++) arr.push('(Translation pending)');
  return arr;
}

// ===== L7: 溜索 — trim text[2] at "寻不着那鹰。", remove text[3-4] =====
console.log('\n=== L7: 溜索 ===');
var l7 = fl(7);
var l7t2 = l7.text[2];
var l7endIdx = l7t2.indexOf('\u5bfb\u4e0d\u7740\u90a3\u9e70'); // 寻不着那鹰
var l7period = l7t2.indexOf('\u3002', l7endIdx); // period after
var l7t2trimmed = l7t2.substring(0, l7period + 1);
var l7cn = [l7.text[0], l7.text[1], l7t2trimmed];
replaceTextAndEn('The Zip Line', l7cn, stubEn(3));

// ===== L14: 山水画的意境 — trim text[1] at "艺术语言。", remove text[2] =====
console.log('\n=== L14: 山水画的意境 ===');
var l14 = fl(14);
var l14t1 = l14.text[1];
var l14endMarker = '\u6253\u52a8\u4eba\u5fc3\u7684\u827a\u672f\u8bed\u8a00\u3002'; // 打动人心的艺术语言。
var l14endIdx = l14t1.indexOf(l14endMarker);
var l14t1trimmed = l14t1.substring(0, l14endIdx + l14endMarker.length);
var l14cn = [l14.text[0], l14t1trimmed];
replaceTextAndEn('The Artistic Conception of Landscape Painting', l14cn, stubEn(2));

// ===== L15: 无言之美 — remove text[2] (entirely L16 content) =====
console.log('\n=== L15: 无言之美 ===');
var l15 = fl(15);
var l15cn = [l15.text[0], l15.text[1]];
replaceTextAndEn('The Beauty of Silence', l15cn, stubEn(2));

// Write
fs.writeFileSync('textbook_g9s2.js', src, 'utf8');
console.log('\nDone. Wrote textbook_g9s2.js');

// Validate
console.log('\n=== Validation ===');
var ctx2 = {};
vm.runInNewContext(src, ctx2);
var tb2 = ctx2.TB_G9S2;
var total = 0, issues = 0;
tb2.units.forEach(function(u) {
  u.lessons.forEach(function(l) {
    var cn = l.text ? l.text.join('').replace(/[^\u4e00-\u9fff]/g, '').length : 0;
    total += cn;
    var mismatch = l.text && l.textEn && l.text.length !== l.textEn.length;
    if (mismatch) { issues++; console.log('  MISMATCH L' + l.id + ' ' + l.title); }
    if ([7,14,15,16].indexOf(l.id) !== -1) {
      console.log('  L' + l.id + ' ' + l.title + ': ' + cn + 'cn, p=' + l.text.length + '/' + l.textEn.length);
    }
  });
});
console.log('Total CN chars: ' + total);
console.log('Mismatches: ' + issues);
