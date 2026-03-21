// Comprehensive audit: find ALL Chinese characters in textbook texts
// that have NO pinyin, NO English in any data source
var fs = require('fs');
var vm = require('vm');

// 1. Load all data sources from Chinese chars.html
var html = fs.readFileSync('Chinese chars.html', 'utf-8');

// RAW_DATA
var m = html.match(/const RAW_DATA=(\[[\s\S]*?\]);/);
var RAW_DATA = m ? JSON.parse(m[1]) : [];
var rawPyMap = {};
RAW_DATA.forEach(function(d) { if (d.c && d.p) rawPyMap[d.c] = d.p; });

// CHAR_EN (may use const or var)
var m2 = html.match(/(?:const|var) CHAR_EN=(\{[\s\S]*?\});/);
var CHAR_EN = m2 ? JSON.parse(m2[1]) : {};

// WORD_PINYIN (may use const or var)
var m3 = html.match(/(?:const|var) WORD_PINYIN=(\{[\s\S]*?\});/);
var WORD_PINYIN = m3 ? JSON.parse(m3[1]) : {};

// HSK_INDEX
var hi = fs.readFileSync('hsk_index.js', 'utf-8');
var sandbox = {};
vm.runInNewContext(hi, sandbox);
var HSK_INDEX = sandbox.HSK_INDEX || {};

// _cmPyPatch (uses JS unicode escapes, eval via vm)
var m4 = html.match(/var _cmPyPatch=(\{[^}]+\});/);
var _cmPyPatch = {};
if (m4) { var _s = {}; vm.runInNewContext('var r=' + m4[1], _s); _cmPyPatch = _s.r || {}; }

console.log('Data sources loaded:');
console.log('  RAW_DATA pinyin:', Object.keys(rawPyMap).length);
console.log('  CHAR_EN:', Object.keys(CHAR_EN).length);
console.log('  WORD_PINYIN:', Object.keys(WORD_PINYIN).length);
console.log('  HSK_INDEX:', Object.keys(HSK_INDEX).length);
console.log('  _cmPyPatch:', Object.keys(_cmPyPatch).length);

// 2. Scan ALL textbook files for characters
var allChars = {};  // char -> {sources: [...], hasPinyin, hasEnglish}

function extractChars(text, source) {
  if (!text) return;
  var str = typeof text === 'string' ? text : '';
  if (Array.isArray(text)) str = text.join('\n');
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if ((code >= 0x4e00 && code <= 0x9fff) || (code >= 0x3400 && code <= 0x4dbf)) {
      var ch = str[i];
      if (!allChars[ch]) allChars[ch] = { sources: [], count: 0 };
      if (allChars[ch].sources.indexOf(source) < 0) allChars[ch].sources.push(source);
      allChars[ch].count++;
    }
  }
}

// Scan textbook files
for (var g = 1; g <= 9; g++) {
  for (var s = 1; s <= 2; s++) {
    var fname = 'textbook_g' + g + 's' + s + '.js';
    try {
      var tbContent = fs.readFileSync(fname, 'utf-8');
      var tbSandbox = {};
      vm.runInNewContext(tbContent, tbSandbox);
      var tbData = tbSandbox['TB_G' + g + 'S' + s];
      if (!tbData || !tbData.units) continue;

      tbData.units.forEach(function(unit) {
        var lessons = unit.lessons || [unit];
        lessons.forEach(function(les) {
          var src = 'G' + g + 'S' + s + ' ' + (les.title || '');
          // Lesson text
          extractChars(les.text, src);
          // Vocab words
          if (les.vocabWords) les.vocabWords.forEach(function(v) {
            extractChars(v.word, src);
            extractChars(v.sentence, src);
          });
          // Garden sections
          if (unit.garden) {
            var gd = unit.garden;
            if (gd.accumulation) {
              var acc = gd.accumulation.content || gd.accumulation;
              extractChars(acc.text || acc.cn, src + ' [accum]');
              if (acc.items) acc.items.forEach(function(it) { extractChars(it.cn, src + ' [accum]'); });
            }
            if (gd.readWithAdults) {
              var rwa = gd.readWithAdults.content || gd.readWithAdults;
              extractChars(rwa.text || rwa.cn, src + ' [rwa]');
            }
            if (gd.wordSentence) gd.wordSentence.forEach(function(ws) {
              extractChars(ws.text || ws.cn, src + ' [ws]');
              if (ws.words) ws.words.forEach(function(w) { extractChars(w, src + ' [ws]'); });
            });
            if (gd.shiziStation) {
              var sz = gd.shiziStation;
              if (sz.chars) extractChars(sz.chars.join(''), src + ' [shizi]');
              if (sz.content && sz.content.chars) extractChars(sz.content.chars.join(''), src + ' [shizi]');
            }
          }
        });
      });
    } catch (e) {
      // skip missing files
    }
  }
}

// 3. Check coverage
var totalChars = Object.keys(allChars).length;
var noPinyin = [];
var noEnglish = [];
var noAnything = [];

function canResolvePinyin(ch) {
  if (rawPyMap[ch]) return true;
  if (_cmPyPatch[ch]) return true;
  if (HSK_INDEX[ch]) return true;  // Will be resolved when HSK data loads
  if (WORD_PINYIN[ch]) return true;
  // Check WORD_PINYIN decomposition
  for (var w in WORD_PINYIN) {
    if (w.length === 2 && (w[0] === ch || w[1] === ch)) return true;
  }
  return false;
}

function hasEnglish(ch) {
  if (CHAR_EN[ch]) return true;
  return false;
}

Object.keys(allChars).forEach(function(ch) {
  var hasPy = canResolvePinyin(ch);
  var hasEn = hasEnglish(ch);
  if (!hasPy) noPinyin.push(ch);
  if (!hasEn) noEnglish.push(ch);
  if (!hasPy && !hasEn) noAnything.push(ch);
});

console.log('\n=== COVERAGE AUDIT ===');
console.log('Total unique chars in textbooks:', totalChars);
console.log('Without pinyin:', noPinyin.length);
console.log('Without English:', noEnglish.length);
console.log('Without BOTH (no data at all):', noAnything.length);

if (noAnything.length > 0) {
  console.log('\n--- Characters with NO pinyin AND NO English ---');
  noAnything.sort(function(a, b) { return allChars[b].count - allChars[a].count; });
  noAnything.forEach(function(ch) {
    var info = allChars[ch];
    console.log('  ' + ch + ' (appears ' + info.count + 'x) in: ' + info.sources.slice(0, 3).join(', '));
  });
}

if (noPinyin.length > 0 && noPinyin.length !== noAnything.length) {
  console.log('\n--- Characters with NO pinyin (but have English) ---');
  var pyOnly = noPinyin.filter(function(ch) { return CHAR_EN[ch]; });
  pyOnly.forEach(function(ch) {
    var info = allChars[ch];
    console.log('  ' + ch + ' en="' + CHAR_EN[ch] + '" (appears ' + info.count + 'x) in: ' + info.sources.slice(0, 2).join(', '));
  });
}

// Also check chars that have pinyin but no English
var pyNoEn = noEnglish.filter(function(ch) { return canResolvePinyin(ch); });
if (pyNoEn.length > 0) {
  console.log('\n--- Characters with pinyin but NO English (top 50) ---');
  pyNoEn.sort(function(a, b) { return allChars[b].count - allChars[a].count; });
  pyNoEn.slice(0, 50).forEach(function(ch) {
    var info = allChars[ch];
    console.log('  ' + ch + ' (appears ' + info.count + 'x) in: ' + info.sources.slice(0, 2).join(', '));
  });
}
