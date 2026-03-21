#!/usr/bin/env node
/**
 * Generate HSK data files (hsk_data_1.js .. hsk_data_9.js) + updated hsk_index.js
 *
 * Data sources:
 *   - /tmp/hsk_chars_*.txt      - official HSK 3.0 character lists (GF0025-2021)
 *   - /tmp/hsk_meaning_*.tsv    - pinyin + english meanings
 *   - Chinese chars.html        - RAW_DATA, CHAR_EN (existing app data)
 *   - hsk_index.js              - current L1-L6 index
 *
 * HSK 7-9 split strategy:
 *   The standard combines 7-9 (1200 chars). We split into ~400 each by frequency.
 *
 * Usage: node build/gen_hsk_data.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const os = require('os');
const ROOT = path.join(__dirname, '..');
const TMP = os.tmpdir();

// ---- 1. Load existing HSK_INDEX ----
console.log('=== Loading existing data ===');
const hskSrc = fs.readFileSync(path.join(ROOT, 'hsk_index.js'), 'utf8');
const hskCtx = {};
vm.runInNewContext(hskSrc, hskCtx);
const existingIndex = hskCtx.HSK_INDEX || {};
console.log('Existing HSK_INDEX:', Object.keys(existingIndex).length, 'chars');

// ---- 2. Load official HSK character lists ----
function loadCharFile(fp) {
  if (!fs.existsSync(fp)) return [];
  return fs.readFileSync(fp, 'utf8')
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l.length === 1);
}

const hskChars = {};
for (let i = 1; i <= 6; i++) {
  hskChars[i] = loadCharFile(path.join(TMP, 'hsk_chars_' + i + '.txt'));
  console.log('HSK ' + i + ':', hskChars[i].length, 'chars');
}
const chars79 = loadCharFile(path.join(TMP, 'hsk_chars_79.txt'));
console.log('HSK 7-9 combined:', chars79.length, 'chars');

// ---- 3. Load meaning TSV files ----
function loadMeaningTSV(fp) {
  if (!fs.existsSync(fp)) return [];
  return fs.readFileSync(fp, 'utf8')
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .filter(l => l.includes('\t'))
    .map(line => {
      const p = line.split('\t');
      return { simp: (p[1]||'').trim(), pinyin: (p[2]||'').trim(), english: (p[3]||'').trim() };
    });
}

const wordData = {};
const charPinyin = {};
const charEnglish = {};

for (let i = 1; i <= 6; i++) {
  loadMeaningTSV(path.join(TMP, 'hsk_meaning_' + i + '.tsv')).forEach(function(e) {
    wordData[e.simp] = { pinyin: e.pinyin, english: e.english, level: i };
    if (e.simp.length === 1) { charPinyin[e.simp] = e.pinyin; charEnglish[e.simp] = e.english; }
  });
}
loadMeaningTSV(path.join(TMP, 'hsk_meaning_79.tsv')).forEach(function(e) {
  wordData[e.simp] = { pinyin: e.pinyin, english: e.english, level: 79 };
  if (e.simp.length === 1) { charPinyin[e.simp] = e.pinyin; charEnglish[e.simp] = e.english; }
});
console.log('Word data:', Object.keys(wordData).length, '| Char pinyin:', Object.keys(charPinyin).length);

// ---- 4. Extract CHAR_EN from HTML using regex ----
console.log('\n=== Extracting HTML data ===');
const html = fs.readFileSync(path.join(ROOT, 'Chinese chars.html'), 'utf8');

// CHAR_EN uses const and JSON-style double quotes: const CHAR_EN={"X":"Y",...}
const CHAR_EN = {};
var ceStart = html.indexOf('CHAR_EN=');
if (ceStart >= 0) {
  var braceStart = html.indexOf('{', ceStart);
  var braceEnd = html.indexOf('};', ceStart);
  if (braceStart >= 0 && braceEnd >= 0) {
    var ceJson = html.slice(braceStart, braceEnd + 1);
    try {
      var parsed = JSON.parse(ceJson);
      Object.assign(CHAR_EN, parsed);
    } catch(e) {
      console.warn('CHAR_EN JSON parse failed, using regex fallback');
      var ceRe = /"([^"]{1,2})"\s*:\s*"([^"]*)"/g;
      var m;
      while ((m = ceRe.exec(ceJson)) !== null) CHAR_EN[m[1]] = m[2];
    }
  }
}
console.log('CHAR_EN:', Object.keys(CHAR_EN).length, 'entries');

// RAW_DATA uses const and JSON: const RAW_DATA=[{"c":"X","p":"Y","w":[...],...},...]
const rawMap = {};
var rawStart = html.indexOf('RAW_DATA=');
if (rawStart >= 0) {
  var arrStart = html.indexOf('[', rawStart);
  // Find matching ] by tracking depth
  var depth = 0; var arrEnd = arrStart;
  for (var ri = arrStart; ri < html.length && ri < arrStart + 600000; ri++) {
    if (html[ri] === '[') depth++;
    else if (html[ri] === ']') { depth--; if (depth === 0) { arrEnd = ri + 1; break; } }
  }
  try {
    var rawArr = JSON.parse(html.slice(arrStart, arrEnd));
    rawArr.forEach(function(d) {
      if (d.c) rawMap[d.c] = { p: d.p || '', w: d.w || [], g: d.g || 0, s: d.s || 0, u: d.u || 0 };
    });
  } catch(e) {
    console.warn('RAW_DATA JSON parse failed:', e.message);
  }
}
console.log('RAW_DATA:', Object.keys(rawMap).length, 'entries');

// ---- 4b. Infer pinyin for chars not in single-char entries ----
// Chinese pinyin syllable splitter: splits compound pinyin like "āyí" → ["ā", "yí"]
var PY_INITIALS = ['zh','ch','sh','b','p','m','f','d','t','n','l','g','k','h','j','q','x','r','z','c','s','y','w'];
function splitPinyinSyllables(py) {
  // If already space-separated, just split
  if (py.indexOf(' ') >= 0) return py.trim().split(/\s+/);
  // Otherwise, try to split by detecting syllable boundaries
  var result = [];
  var rest = py.toLowerCase();
  var maxIter = 20;
  while (rest.length > 0 && maxIter-- > 0) {
    var best = '';
    // Try each initial
    for (var ii = 0; ii < PY_INITIALS.length; ii++) {
      var init = PY_INITIALS[ii];
      if (rest.indexOf(init) === 0 && init.length > best.length) best = init;
    }
    // Find the end of the vowel+final portion
    var start = best.length;
    if (start >= rest.length) { result.push(rest); break; }
    // Scan forward to find the next consonant that starts a new syllable
    var end = rest.length;
    for (var ei = start + 1; ei < rest.length; ei++) {
      var ch2 = rest[ei];
      // Check if this position starts a new initial
      var isNewSyl = false;
      for (var ji = 0; ji < PY_INITIALS.length; ji++) {
        if (rest.slice(ei).indexOf(PY_INITIALS[ji]) === 0) { isNewSyl = true; break; }
      }
      // Exception: 'n' and 'g' could be part of 'ng' final, not new syllable
      if (isNewSyl && !(ch2 === 'g' && ei > start && rest[ei-1] === 'n')) {
        // But 'n' before a vowel = new syllable, 'n' before consonant = final
        if (ch2 === 'n' && ei + 1 < rest.length && 'aeiouāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü'.indexOf(rest[ei+1]) >= 0) {
          end = ei; break;
        } else if (ch2 !== 'n' && ch2 !== 'g') {
          end = ei; break;
        }
      }
    }
    result.push(rest.slice(0, end));
    rest = rest.slice(end);
  }
  return result;
}

function inferCharPinyin(ch) {
  if (charPinyin[ch]) return charPinyin[ch];
  // First priority: find exact single-char word entry
  if (wordData[ch] && wordData[ch].pinyin) return wordData[ch].pinyin;
  // Second: extract from 2-char words using syllable splitting
  for (var w in wordData) {
    if (w.length === 2 && w[0] === ch && wordData[w].pinyin) {
      var syls = splitPinyinSyllables(wordData[w].pinyin);
      if (syls.length >= 2) return syls[0];
    }
  }
  for (var w in wordData) {
    if (w.length === 2 && w[1] === ch && wordData[w].pinyin) {
      var syls = splitPinyinSyllables(wordData[w].pinyin);
      if (syls.length >= 2) return syls[syls.length - 1];
    }
  }
  return '';
}

// Also infer English from CHAR_EN or word context
function inferCharEnglish(ch) {
  if (charEnglish[ch]) return charEnglish[ch];
  if (CHAR_EN[ch]) return CHAR_EN[ch];
  // Try single-char word entry
  if (wordData[ch]) return wordData[ch].english;
  return '';
}

// Pre-populate missing pinyin/english
var inferred = 0;
var allHskChars = [].concat(chars79);
for (var i = 1; i <= 6; i++) allHskChars = allHskChars.concat(hskChars[i]);
allHskChars.forEach(function(ch) {
  if (!charPinyin[ch]) {
    var py = inferCharPinyin(ch);
    if (py) { charPinyin[ch] = py; inferred++; }
  }
  if (!charEnglish[ch]) {
    var en = inferCharEnglish(ch);
    if (en) charEnglish[ch] = en;
  }
});
console.log('Inferred pinyin for', inferred, 'additional chars');
console.log('Total char pinyin now:', Object.keys(charPinyin).length);

// ---- 5. Split HSK 7-9 by frequency ----
console.log('\n=== Splitting HSK 7-9 ===');
function charScore(ch) {
  var s = 0;
  if (rawMap[ch]) s += 10;
  if (charPinyin[ch]) s += 5;
  if (CHAR_EN[ch]) s += 3;
  var code = ch.charCodeAt(0);
  if (code >= 0x4E00 && code <= 0x6000) s += 2;
  else if (code >= 0x6000 && code <= 0x7000) s += 1;
  return s;
}

var scored79 = chars79.map(function(ch) { return { ch: ch, sc: charScore(ch) }; });
scored79.sort(function(a, b) { return b.sc - a.sc || a.ch.localeCompare(b.ch, 'zh'); });

var third = Math.ceil(scored79.length / 3);
hskChars[7] = scored79.slice(0, third).map(function(x){ return x.ch; });
hskChars[8] = scored79.slice(third, third * 2).map(function(x){ return x.ch; });
hskChars[9] = scored79.slice(third * 2).map(function(x){ return x.ch; });
console.log('L7:', hskChars[7].length, '| L8:', hskChars[8].length, '| L9:', hskChars[9].length);

// ---- 6. Generate hsk_index.js ----
console.log('\n=== Writing hsk_index.js ===');
// Deduplicate: if a char appears in multiple levels, keep the lowest
var charLevel = {};
for (var lv = 1; lv <= 9; lv++) {
  hskChars[lv].forEach(function(ch) {
    if (!charLevel[ch]) charLevel[ch] = lv;
  });
  // Remove duplicates from this level's list
  hskChars[lv] = hskChars[lv].filter(function(ch) { return charLevel[ch] === lv; });
}
var totalChars = 0;
for (var lv = 1; lv <= 9; lv++) { totalChars += hskChars[lv].length; console.log('L' + lv + ' deduped:', hskChars[lv].length); }

var idx = '/* HSK 3.0 Character Index (GF0025-2021) */\n';
idx += '/* International Chinese Education Standard */\n';
idx += '/* Levels 1-9, ' + totalChars + ' unique characters */\n';
idx += '/* L1-6: ~300 each. L7-9: ~400 each (split from combined L7-9 list) */\n';
idx += 'var HSK_INDEX = {\n';

for (var lv = 1; lv <= 9; lv++) {
  var chs = hskChars[lv];
  idx += '// === HSK Level ' + lv + ' (' + chs.length + ' characters) ===\n';
  for (var i = 0; i < chs.length; i += 10) {
    var batch = chs.slice(i, i + 10);
    idx += batch.map(function(c){ return "'" + c + "':{level:" + lv + "}"; }).join(',');
    if (i + 10 < chs.length || lv < 9) idx += ',';
    idx += '\n';
  }
}
idx += '};\n';

fs.writeFileSync(path.join(ROOT, 'hsk_index.js'), idx, 'utf8');
console.log('hsk_index.js:', totalChars, 'chars,', (fs.statSync(path.join(ROOT, 'hsk_index.js')).size / 1024).toFixed(1) + 'KB');

// ---- 7. Generate hsk_data_N.js ----
console.log('\n=== Writing data files ===');

for (var lv = 1; lv <= 9; lv++) {
  var chs = hskChars[lv];
  var data = {};

  chs.forEach(function(ch) {
    var e = {};
    var raw = rawMap[ch];

    e.pinyin = charPinyin[ch] || (raw ? raw.p : '') || '';
    e.english = charEnglish[ch] || CHAR_EN[ch] || '';

    // Collect words containing this char
    var words = [];
    var maxLevel = lv <= 6 ? lv : 79;
    Object.keys(wordData).forEach(function(w) {
      if (w.length > 1 && w.indexOf(ch) >= 0 && wordData[w].level <= maxLevel && words.length < 8) {
        words.push({ w: w, p: wordData[w].pinyin, en: wordData[w].english });
      }
    });

    // Also add RAW_DATA words not yet included
    if (raw && raw.w) {
      raw.w.forEach(function(w) {
        if (!words.find(function(x){ return x.w === w; })) {
          var wd = wordData[w];
          words.push({ w: w, p: wd ? wd.pinyin : '', en: wd ? wd.english : '' });
        }
      });
    }

    if (words.length > 0) e.words = words.slice(0, 10);
    if (raw && raw.g) { e.grade = raw.g; e.semester = raw.s; e.unit = raw.u; }

    data[ch] = e;
  });

  var vn = 'HSK_DATA_' + lv;
  var out = '/* HSK Level ' + lv + ' Character Data (' + chs.length + ' characters) */\n';
  out += '/* Generated by build/gen_hsk_data.js */\n';
  out += 'var ' + vn + ' = ' + JSON.stringify(data, null, 1) + ';\n';

  var fp = path.join(ROOT, 'hsk_data_' + lv + '.js');
  fs.writeFileSync(fp, out, 'utf8');

  var wp = Object.values(data).filter(function(d){ return d.pinyin; }).length;
  var ww = Object.values(data).filter(function(d){ return d.words && d.words.length > 0; }).length;
  console.log('L' + lv + ': ' + chs.length + ' chars, ' + wp + ' pinyin, ' + ww + ' words, ' + (fs.statSync(fp).size / 1024).toFixed(1) + 'KB');
}

console.log('\nAll done!');
