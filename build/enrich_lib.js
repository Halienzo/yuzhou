/**
 * Shared enrichment library for textbook files
 * Usage: const {enrichLesson, enrichByEn, saveAndValidate} = require('./enrich_lib');
 *
 * SECURITY NOTE: Build-time data enrichment script operating on trusted local files.
 */
const fs = require('fs');

function findTitle(src, titleStr) {
  // Try literal first
  let marker = 'title: "' + titleStr + '"';
  let idx = src.indexOf(marker);
  if (idx !== -1) return { idx, marker };

  // Try compact format
  marker = 'title:"' + titleStr + '"';
  idx = src.indexOf(marker);
  if (idx !== -1) return { idx, marker };

  // Try Unicode-escaped version
  const escaped = titleStr.split('').map(c => {
    const code = c.charCodeAt(0);
    return code > 127 ? '\\u' + code.toString(16).toUpperCase().padStart(4, '0') : c;
  }).join('');
  marker = 'title: "' + escaped + '"';
  idx = src.indexOf(marker);
  if (idx !== -1) return { idx, marker };

  marker = 'title:"' + escaped + '"';
  idx = src.indexOf(marker);
  if (idx !== -1) return { idx, marker };

  return null;
}

function buildVocabStr(indent, vocabArr) {
  let vw = '\n' + indent + 'vocabWords: [\n';
  vocabArr.forEach((v, i) => {
    const e = v[2].replace(/'/g, '\u2019');
    const se = v[4].replace(/'/g, '\u2019');
    vw += indent + '  {word:\'' + v[0] + '\',pinyin:\'' + v[1] + '\',en:\'' + e + '\',sentence:\'' + v[3] + '\',sentenceEn:\'' + se + '\'}';
    vw += (i < vocabArr.length - 1 ? ',' : '') + '\n';
  });
  vw += indent + '],';
  return vw;
}

function buildGrammarStr(indent, grammarArr) {
  let gp = '\n' + indent + 'grammarPoints: [\n';
  grammarArr.forEach((g, i) => {
    const fix = s => s.replace(/'/g, '\u2019');
    gp += indent + '  {point:\'' + fix(g[0]) + '\',pointEn:\'' + fix(g[1]) + '\',example:\'' + fix(g[2]) + '\',exampleEn:\'' + fix(g[3]) + '\',explanation:\'' + fix(g[4]) + '\',explanationEn:\'' + fix(g[5]) + '\'}';
    gp += (i < grammarArr.length - 1 ? ',' : '') + '\n';
  });
  gp += indent + '],';
  return gp;
}

function findNearestInsertionPoint(afterTitle) {
  const patterns = [
    /\n(\s+)exercises:\s*\[/,
    /\n(\s+)annotations:\s*\[/,
    /\n(\s+)thinkExplore:\s*\[/,
    /\n(\s+)readingTips:\s*\[/,
    /\n(\s+)authorBio:\s*\{/,
    /\n(\s+)content:\s*\{/,
    /\n(\s+)text:\s*"/,
    /\n(\s+)textEn:\s*"/,
    /\n(\s+)prompt:\s*\{/,
    /\n(\s+)description:\s*\{/,
    /\n(\s+)author:\s*"/,
    /\n(\s+)source:\s*"/,
    /\n(\s+)extracurricularPoetry:\s*\[/
  ];
  let best = null;
  for (const pat of patterns) {
    const m = afterTitle.match(pat);
    if (m) {
      const pos = afterTitle.indexOf(m[0]);
      if (!best || pos < best.pos) best = { match: m, pos: pos };
    }
  }
  return best;
}

function enrichLesson(src, titleStr, vocabArr, grammarArr) {
  const found = findTitle(src, titleStr);
  if (!found) { console.log('NOT FOUND:', titleStr); return src; }

  const afterTitle = src.slice(found.idx);
  const best = findNearestInsertionPoint(afterTitle);
  if (!best) { console.log('NO exercises:', titleStr); return src; }
  const exMatch = best.match;
  const exPos = found.idx + best.pos;
  const between = src.slice(found.idx, exPos);
  const indent = exMatch[1];

  let insertion = '';
  if (vocabArr && vocabArr.length && !between.includes('vocabWords:')) {
    insertion += buildVocabStr(indent, vocabArr);
  }
  if (grammarArr && grammarArr.length && !between.includes('grammarPoints:')) {
    insertion += buildGrammarStr(indent, grammarArr);
  }

  if (!insertion) return src;
  return src.slice(0, exPos) + insertion + src.slice(exPos);
}

function escapeToUnicode(str) {
  return str.split('').map(c => {
    const code = c.charCodeAt(0);
    return code > 127 ? '\\u' + code.toString(16).padStart(4, '0') : c;
  }).join('');
}

function enrichByEn(src, titleEnStr, vocabArr, grammarArr) {
  let enIdx = src.indexOf('titleEn: "' + titleEnStr + '"');
  if (enIdx === -1) enIdx = src.indexOf('titleEn:"' + titleEnStr + '"');
  // Try unicode-escaped version for chars like \u2019 \u2014
  if (enIdx === -1) {
    const escaped = escapeToUnicode(titleEnStr);
    enIdx = src.indexOf('titleEn: "' + escaped + '"');
    if (enIdx === -1) enIdx = src.indexOf('titleEn:"' + escaped + '"');
  }
  if (enIdx === -1) { console.log('EN NOT FOUND:', titleEnStr); return src; }
  const titleIdx = src.lastIndexOf('title:', enIdx);
  if (titleIdx === -1 || enIdx - titleIdx > 200) return src;

  const afterTitle = src.slice(titleIdx);
  const best = findNearestInsertionPoint(afterTitle);
  if (!best) { console.log('NO exercises EN:', titleEnStr); return src; }
  const exMatch = best.match;
  const exPos = titleIdx + best.pos;
  const between = src.slice(titleIdx, exPos);
  const indent = exMatch[1];

  let insertion = '';
  if (vocabArr && vocabArr.length && !between.includes('vocabWords:')) {
    insertion += buildVocabStr(indent, vocabArr);
  }
  if (grammarArr && grammarArr.length && !between.includes('grammarPoints:')) {
    insertion += buildGrammarStr(indent, grammarArr);
  }

  if (!insertion) return src;
  return src.slice(0, exPos) + insertion + src.slice(exPos);
}

function saveAndValidate(filename, code, varName) {
  fs.writeFileSync(filename, code, 'utf8');
  console.log('Done!', filename, 'enriched.');
  try {
    const testCode = code.replace('window.' + varName, 'var ' + varName);
    require('vm').runInNewContext(testCode, { window: {}, console: console });
    console.log('Validation: syntax OK');
    console.log('vocabWords:', (code.match(/vocabWords:/g) || []).length);
    console.log('grammarPoints:', (code.match(/grammarPoints:/g) || []).length);
  } catch (e) {
    console.log('Validation FAILED:', e.message);
  }
}

module.exports = { enrichLesson, enrichByEn, saveAndValidate };
