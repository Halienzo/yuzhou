#!/usr/bin/env node
/**
 * Fix G7S2 cascading cross-contamination in 10 lessons.
 * Each lesson's PDF extraction overflowed into the next lesson.
 *
 * L4:  Trim text[0] after "结友而别。", remove text[1] (黄河颂歌词)
 * L5:  Trim text[0] to 朗诵词+歌词 only, remove text[1-4] (老山界)
 * L6:  Trim text[2] after "还是小得很。", remove text[3] (L7 content)
 * L7:  Trim text[3] after "最可爱的人！", keep 4 paras
 * L8:  Remove text[3] (木兰诗)
 * L12: Trim text[4] after "父亲老了。", keep 5 paras
 * L14: Trim text[2] after "深重的苦心。", remove text[3] (驿路梨花)
 * L15: Remove text[3] (最苦与最乐)
 * L18: Remove text[1-3] (一棵小桃树 + 外国诗), keep 1 para
 * L20: Remove text[1] (古代诗歌五首)
 */
var fs = require('fs');
var vm = require('vm');

var src = fs.readFileSync('textbook_g7s2.js', 'utf8');

// Load EN translations if available
var enData = null;
try { enData = JSON.parse(fs.readFileSync('build/_g7s2_en_fixes.json', 'utf8')); } catch(e) { console.log('WARNING: _g7s2_en_fixes.json not found, will use stub EN to match para counts'); }

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
  var eMarker = tClose + eOff;
  var eOpen = src.indexOf('[', eMarker);
  var eClose = findMatchingBracket(src, eOpen);
  if (eClose === -1) { console.error('  No textEn]: ' + titleEn); return false; }

  var indent = '      ';

  if (newEn) {
    var newE = '[\n' + buildEnArray(newEn, indent) + '\n' + indent + ']';
    src = src.substring(0, eOpen) + newE + src.substring(eClose + 1);
  }
  if (newCn) {
    var newT = '[\n' + buildTextArray(newCn, indent) + '\n' + indent + ']';
    src = src.substring(0, tOpen) + newT + src.substring(tClose + 1);
  }
  var cnCount = newCn ? newCn.length : '-';
  var enCount = newEn ? newEn.length : '-';
  console.log('  OK: ' + titleEn + ' => ' + cnCount + ' cn, ' + enCount + ' en');
  return true;
}

// First, parse the current textbook to get existing text content for trimming
var ctx = {};
vm.runInNewContext(fs.readFileSync('textbook_g7s2.js', 'utf8'), ctx);
var tb = ctx.TB_G7S2;
function fl(id) { var r; tb.units.forEach(function(u){ u.lessons.forEach(function(l){ if(l.id===id)r=l; }); }); return r; }

// Helper: stub EN to match paragraph count
function stubEn(titleEn, count) {
  if (enData && enData[titleEn]) return enData[titleEn];
  var arr = [];
  for (var i = 0; i < count; i++) arr.push('(Translation pending)');
  return arr;
}

// ===== L4: 孙权劝学 — trim to classical text only =====
console.log('\n=== L4: 孙权劝学 ===');
var l4 = fl(4);
var l4trim = l4.text[0].indexOf('\u7ed3\u53cb\u800c\u522b\u3002'); // 结友而别。
var l4cn = [l4.text[0].substring(0, l4trim + 5)]; // include 结友而别。
var l4en = stubEn('Sun Quan Urges Learning', 1);
replaceTextAndEn('Sun Quan Urges Learning', l4cn, l4en);

// ===== L5: 黄河颂 — 朗诵词 + 歌词 =====
console.log('\n=== L5: 黄河颂 ===');
var l5 = fl(5);
// 朗诵词 from L5 text[0] up to "赞歌。"
var zangeEnd = l5.text[0].indexOf('\u8d5e\u6b4c\u3002'); // 赞歌。
var langSongCi = l5.text[0].substring(0, zangeEnd + 3); // include 赞歌。
// 歌词 is clean in L4 text[1]
var geCi = l4.text[1];
var l5cn = [langSongCi, geCi];
var l5en = stubEn('Ode to the Yellow River', 2);
replaceTextAndEn('Ode to the Yellow River', l5cn, l5en);

// ===== L6: 老山界 — trim text[2], remove text[3] =====
console.log('\n=== L6: 老山界 ===');
var l6 = fl(6);
var l6trimMarker = '\u8fd8\u662f\u5c0f\u5f97\u5f88\u3002'; // 还是小得很。
var l6trimIdx = l6.text[2].indexOf(l6trimMarker);
var l6t2 = l6.text[2].substring(0, l6trimIdx + l6trimMarker.length);
var l6cn = [l6.text[0], l6.text[1], l6t2];
var l6en = stubEn('Laoshan Pass', 3);
replaceTextAndEn('Laoshan Pass', l6cn, l6en);

// ===== L7: 谁是最可爱的人 — trim text[3] =====
console.log('\n=== L7: 谁是最可爱的人 ===');
var l7 = fl(7);
var l7trimMarker = '\u6700\u53ef\u7231\u7684\u4eba\uff01'; // 最可爱的人！
var l7trimIdx = l7.text[3].indexOf(l7trimMarker);
var l7t3 = l7.text[3].substring(0, l7trimIdx + l7trimMarker.length);
var l7cn = [l7.text[0], l7.text[1], l7.text[2], l7t3];
var l7en = stubEn('Who Are the Most Beloved People', 4);
replaceTextAndEn('Who Are the Most Beloved People', l7cn, l7en);

// ===== L8: 土地的誓言 — remove text[3] (木兰诗) =====
console.log('\n=== L8: 土地的誓言 ===');
var l8 = fl(8);
var l8cn = [l8.text[0], l8.text[1], l8.text[2]];
var l8en = stubEn('Oath to the Land', 3);
replaceTextAndEn('Oath to the Land', l8cn, l8en);

// ===== L12: 台阶 — trim text[4] =====
console.log('\n=== L12: 台阶 ===');
var l12 = fl(12);
var l12trimMarker = '\u7236\u4eb2\u8001\u4e86\u3002'; // 父亲老了。
var l12trimIdx = l12.text[4].indexOf(l12trimMarker);
var l12t4 = l12.text[4].substring(0, l12trimIdx + l12trimMarker.length);
var l12cn = [l12.text[0], l12.text[1], l12.text[2], l12.text[3], l12t4];
var l12en = stubEn('The Steps', 5);
replaceTextAndEn('The Steps', l12cn, l12en);

// ===== L14: 叶圣陶先生二三事 — trim text[2], remove text[3] =====
console.log('\n=== L14: 叶圣陶先生二三事 ===');
var l14 = fl(14);
var l14trimMarker = '\u6df1\u91cd\u7684\u82e6\u5fc3\u3002'; // 深重的苦心。
var l14trimIdx = l14.text[2].indexOf(l14trimMarker);
var l14t2 = l14.text[2].substring(0, l14trimIdx + l14trimMarker.length);
var l14cn = [l14.text[0], l14.text[1], l14t2];
var l14en = stubEn('Two or Three Things about Mr. Ye Shengtao', 3);
replaceTextAndEn('Two or Three Things about Mr. Ye Shengtao', l14cn, l14en);

// ===== L15: 驿路梨花 — remove text[3] =====
console.log('\n=== L15: 驿路梨花 ===');
var l15 = fl(15);
var l15cn = [l15.text[0], l15.text[1], l15.text[2]];
var l15en = stubEn('Pear Blossoms Along the Post Road', 3);
replaceTextAndEn('Pear Blossoms Along the Post Road', l15cn, l15en);

// ===== L18: 紫藤萝瀑布 — keep only text[0] =====
console.log('\n=== L18: 紫藤萝瀑布 ===');
var l18 = fl(18);
var l18cn = [l18.text[0]];
var l18en = stubEn('The Wisteria Waterfall', 1);
replaceTextAndEn('The Wisteria Waterfall', l18cn, l18en);

// ===== L20: 外国诗二首 — remove text[1] =====
console.log('\n=== L20: 外国诗二首 ===');
var l20 = fl(20);
var l20cn = [l20.text[0]];
var l20en = stubEn('Two Foreign Poems', 1);
replaceTextAndEn('Two Foreign Poems', l20cn, l20en);

// Write
fs.writeFileSync('textbook_g7s2.js', src, 'utf8');
console.log('\nDone. Wrote textbook_g7s2.js');

// Validate
console.log('\n=== Validation ===');
var ctx2 = {};
vm.runInNewContext(src, ctx2);
var tb2 = ctx2.TB_G7S2;
var total = 0, issues = 0;
tb2.units.forEach(function(u) {
  u.lessons.forEach(function(l) {
    var cn = l.text ? l.text.join('').replace(/[^\u4e00-\u9fff]/g, '').length : 0;
    total += cn;
    var enLen = l.textEn ? l.textEn.join('').length : 0;
    var mismatch = l.text && l.textEn && l.text.length !== l.textEn.length;
    if (mismatch) { issues++; console.log('  MISMATCH L' + l.id + ' ' + l.title + ': p=' + l.text.length + '/' + l.textEn.length); }
    var affected = [4,5,6,7,8,12,14,15,18,20];
    if (affected.indexOf(l.id) !== -1) {
      console.log('  L' + l.id + ' ' + l.title + ': ' + cn + 'cn, ' + enLen + 'en, p=' + l.text.length + '/' + l.textEn.length);
    }
  });
});
console.log('Total CN chars: ' + total);
console.log('Mismatches: ' + issues);
