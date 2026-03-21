#!/usr/bin/env node
/**
 * Fix G9S1 cross-contamination issues:
 * L1: text[] has 5 poems merged — trim to just 沁园春·雪
 * L9: text[] entirely replaced with L7+L8 content — inject correct 论教养
 * L15: text[0] has poet names prepended — strip prefix
 * L16: text[1] has 孤独之旅 content appended — trim tail
 * L9/L15/L16/L17: stub English translations — inject full translations
 */
var fs = require('fs');
var vm = require('vm');

var src = fs.readFileSync('textbook_g9s1.js', 'utf8');

// Load fix data
var fixData = JSON.parse(fs.readFileSync('build/_g9s1_contamination_fix.json', 'utf8'));

// Load translations (check if files exist)
var enL9 = null, enL15_17 = null;
try { enL9 = JSON.parse(fs.readFileSync('build/_g9s1_en_l9.json', 'utf8')); } catch(e) { console.log('WARNING: _g9s1_en_l9.json not found, skipping L9 EN'); }
try { enL15_17 = JSON.parse(fs.readFileSync('build/_g9s1_en_l15_17.json', 'utf8')); } catch(e) { console.log('WARNING: _g9s1_en_l15_17.json not found, skipping L15-17 EN'); }

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

  // Find text: [
  var textMarker = src.indexOf('text: [', idx);
  if (textMarker === -1 || textMarker > idx + 3000) { console.error('No text[]: ' + titleEn); return false; }
  var tOpen = src.indexOf('[', textMarker);
  var tClose = findMatchingBracket(src, tOpen);
  if (tClose === -1) { console.error('No text]: ' + titleEn); return false; }

  // Find textEn: [
  var after = src.substring(tClose, tClose + 1000);
  var eOff = after.indexOf('textEn: [');
  if (eOff === -1) { console.error('No textEn: ' + titleEn); return false; }
  var eMarker = tClose + eOff;
  var eOpen = src.indexOf('[', eMarker);
  var eClose = findMatchingBracket(src, eOpen);
  if (eClose === -1) { console.error('No textEn]: ' + titleEn); return false; }

  // Detect indent from surrounding context
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

function replaceEnOnly(titleEn, newEn) {
  return replaceTextAndEn(titleEn, null, newEn);
}

// ===== FIX L1: Trim poem to just 沁园春·雪 =====
console.log('\n=== Fix L1: 沁园春·雪 ===');
replaceTextAndEn('Spring in a Pleasure Garden: Snow', fixData.L1_poem_fix.cn, null);

// ===== FIX L9: Replace with correct 论教养 text =====
console.log('\n=== Fix L9: 论教养 ===');
var l9en = enL9 ? enL9.textEn : null;
replaceTextAndEn('On Good Manners', fixData.L9_full_replace.cn, l9en);

// ===== FIX L15: Strip prefix from text[0] =====
console.log('\n=== Fix L15: 故乡 ===');
var prefix = fixData.L15_prefix_strip.strip_prefix;
var prefixU = toU(prefix);
// Search from the L15 lesson area, not globally
var l15anchor = src.indexOf('titleEn: "My Hometown"');
if (l15anchor !== -1) {
  var prefixIdx = src.indexOf(prefixU, l15anchor);
  if (prefixIdx !== -1 && prefixIdx - l15anchor < 5000) {
    src = src.substring(0, prefixIdx) + src.substring(prefixIdx + prefixU.length);
    console.log('  OK: stripped prefix "' + prefix + '" (' + prefixU.length + ' chars)');
  } else {
    console.log('  Prefix not found near L15 (idx=' + prefixIdx + ', dist=' + (prefixIdx - l15anchor) + ')');
  }
} else {
  console.log('  L15 titleEn not found');
}
// Replace EN for L15
if (enL15_17) {
  var l15 = enL15_17.lessons.find(function(l) { return l.title === '故乡'; });
  if (l15) replaceEnOnly('My Hometown', l15.textEn);
}

// ===== FIX L16: Trim 孤独之旅 content from text[1] =====
console.log('\n=== Fix L16: 我的叔叔于勒 ===');
var l16anchor = src.indexOf('titleEn: "My Uncle Jules"');
if (l16anchor !== -1) {
  var trimMarker = toU(fixData.L16_trim_tail.trim_marker);
  var trimIdx = src.indexOf(trimMarker, l16anchor);
  if (trimIdx !== -1 && trimIdx - l16anchor < 30000) {
    // Find the end of this string literal (closing quote)
    var afterTrimSearch = src.substring(trimIdx);
    var strEnd = -1;
    var inEsc = false;
    for (var j = 0; j < afterTrimSearch.length; j++) {
      if (inEsc) { inEsc = false; continue; }
      if (afterTrimSearch[j] === '\\') { inEsc = true; continue; }
      if (afterTrimSearch[j] === '"') { strEnd = j; break; }
    }
    if (strEnd !== -1) {
      src = src.substring(0, trimIdx) + src.substring(trimIdx + strEnd);
      console.log('  OK: trimmed ' + strEnd + ' chars of 孤独之旅 content from L16');
    } else {
      console.log('  Could not find string end after trim marker');
    }
  } else {
    console.log('  Trim marker not found near L16 (idx=' + trimIdx + ')');
  }
} else {
  console.log('  L16 titleEn not found');
}
// Replace EN for L16
if (enL15_17) {
  var l16 = enL15_17.lessons.find(function(l) { return l.title === '我的叔叔于勒'; });
  if (l16) replaceEnOnly('My Uncle Jules', l16.textEn);
}

// ===== FIX L17: Replace EN only =====
console.log('\n=== Fix L17: 孤独之旅 ===');
if (enL15_17) {
  var l17 = enL15_17.lessons.find(function(l) { return l.title === '孤独之旅'; });
  if (l17) replaceEnOnly('A Lonely Journey', l17.textEn);
}

// Write output
fs.writeFileSync('textbook_g9s1.js', src, 'utf8');
console.log('\nDone. Wrote textbook_g9s1.js');

// Validate
console.log('\n=== Validation ===');
var ctx = {};
vm.runInNewContext(src, ctx);
var tb = ctx.TB_G9S1;
var total = 0;
tb.units.forEach(function(u) {
  u.lessons.forEach(function(l) {
    var cn = l.text ? l.text.join('').replace(/[^\u4e00-\u9fff]/g, '').length : 0;
    total += cn;
    var enLen = l.textEn ? l.textEn.join('').length : 0;
    var mismatch = l.text && l.textEn && l.text.length !== l.textEn.length;
    if (mismatch || cn < 50) {
      console.log('  ' + l.title + ': ' + cn + 'cn, ' + enLen + 'en, text=' + (l.text ? l.text.length : 0) + ' textEn=' + (l.textEn ? l.textEn.length : 0) + (mismatch ? ' MISMATCH!' : ''));
    }
  });
});
console.log('Total CN chars: ' + total);
