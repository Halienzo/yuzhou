// fix_word_en.js — Extract broken WORD_EN entries and apply fixes
// Usage: node fix_word_en.js [--extract | --apply | --stats]
const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'Chinese chars.html');
const fixesPath = path.join(__dirname, 'word_en_fixes.js');

// Extract WORD_EN from HTML (line-by-line since it's a huge single line)
function extractWordEN() {
  const lines = fs.readFileSync(htmlPath, 'utf8').split('\n');
  for (const line of lines) {
    const t = line.trim();
    if (t.startsWith('const WORD_EN=')) {
      const json = t.replace(/^const WORD_EN=/, '').replace(/;$/, '');
      try { return JSON.parse(json); }
      catch(e) { console.error('Failed to parse WORD_EN:', e.message); return null; }
    }
  }
  console.error('WORD_EN not found in HTML');
  return null;
}

// Detect broken "X + Y" format entries
function isBroken(en) {
  if (!en) return false;
  // Pattern: "word1 + word2" or "word1 + word2 + word3"
  return /\w+\s*\+\s*\w+/.test(en) && !en.includes('(') && en.split('+').length >= 2;
}

const mode = process.argv[2] || '--stats';

if (mode === '--extract') {
  const wordEN = extractWordEN();
  if (!wordEN) process.exit(1);
  const broken = {};
  const good = {};
  for (const [word, en] of Object.entries(wordEN)) {
    if (isBroken(en)) broken[word] = en;
    else good[word] = en;
  }
  console.log('Total WORD_EN entries:', Object.keys(wordEN).length);
  console.log('Broken (X+Y format):', Object.keys(broken).length);
  console.log('Good (proper translations):', Object.keys(good).length);

  // Write broken entries for manual/AI fixing
  const outPath = path.join(__dirname, 'word_en_broken.json');
  fs.writeFileSync(outPath, JSON.stringify(broken, null, 2), 'utf8');
  console.log('Broken entries written to:', outPath);

} else if (mode === '--apply') {
  // Apply fixes from word_en_fixes.js
  if (!fs.existsSync(fixesPath)) {
    console.error('Fixes file not found:', fixesPath);
    process.exit(1);
  }
  const fixes = require(fixesPath);
  const lines = fs.readFileSync(htmlPath, 'utf8').split('\n');
  let fixCount = 0, found = false;

  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t.startsWith('const WORD_EN=')) {
      const json = t.replace(/^const WORD_EN=/, '').replace(/;$/, '');
      const wordEN = JSON.parse(json);
      for (const [word, en] of Object.entries(fixes)) {
        if (wordEN[word] !== undefined) { wordEN[word] = en; fixCount++; }
        else { wordEN[word] = en; fixCount++; } // Also add new entries
      }
      lines[i] = 'const WORD_EN=' + JSON.stringify(wordEN) + ';';
      found = true;
      break;
    }
  }

  if (!found) { console.error('WORD_EN not found'); process.exit(1); }
  fs.writeFileSync(htmlPath, lines.join('\n'), 'utf8');
  console.log('Applied', fixCount, 'fixes to WORD_EN');

} else {
  // --stats
  const wordEN = extractWordEN();
  if (!wordEN) process.exit(1);
  let broken = 0, good = 0, empty = 0;
  for (const [word, en] of Object.entries(wordEN)) {
    if (!en) empty++;
    else if (isBroken(en)) broken++;
    else good++;
  }
  console.log('WORD_EN Statistics:');
  console.log('  Total:', Object.keys(wordEN).length);
  console.log('  Good translations:', good);
  console.log('  Broken (X+Y):', broken);
  console.log('  Empty:', empty);
}
