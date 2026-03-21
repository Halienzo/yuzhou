#!/usr/bin/env node
/**
 * inject_full_passages.js
 * Replaces short summary passages in xcsc_data.js with full article texts + English translations.
 * Run: node build/inject_full_passages.js
 */
const fs = require('fs');
const path = require('path');

const XCSC_PATH = path.resolve(__dirname, '..', 'xcsc_data.js');
const DATA_PATH = path.resolve(__dirname, '_full_passages_data.json');

// Load the fix data
const fixes = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));

// Load xcsc_data.js
let src = fs.readFileSync(XCSC_PATH, 'utf8');
const prefix = 'window.XCSC_DATA = ';
const prefixIdx = src.indexOf(prefix);
if (prefixIdx === -1) {
  console.error('ERROR: xcsc_data.js does not contain expected prefix');
  process.exit(1);
}
const headerComment = src.slice(0, prefixIdx);
const jsonStr = src.slice(prefixIdx + prefix.length).replace(/;\s*$/, '');
const data = JSON.parse(jsonStr);

let fixCount = 0;
let skipCount = 0;

// Apply fixes
fixes.forEach(fix => {
  const paper = data.papers.find(p => p.id === fix.paperId);
  if (!paper) {
    console.warn(`WARN: Paper ${fix.paperId} not found`);
    skipCount++;
    return;
  }

  // Find the question by num across all sections
  let found = false;
  for (const section of paper.sections) {
    found = applyFixToQuestions(section.questions, fix);
    if (found) break;
  }
  if (!found) {
    console.warn(`WARN: Q${fix.num} not found in paper ${fix.paperId}`);
    skipCount++;
  }
});

function applyFixToQuestions(questions, fix) {
  for (const q of questions) {
    if (q.num === fix.num && q.passage !== undefined) {
      // Check if this is the right question by matching existing passage prefix
      if (fix.matchPrefix && !q.passage.startsWith(fix.matchPrefix)) {
        // Try subQuestions
        if (q.subQuestions) {
          const r = applyFixToQuestions(q.subQuestions, fix);
          if (r) return true;
        }
        continue;
      }
      q.passage = fix.passage;
      if (fix.passageEn) {
        q.passageEn = fix.passageEn;
      }
      console.log(`FIXED: ${fix.paperId} Q${fix.num} (${q.passage.length} chars)`);
      fixCount++;
      return true;
    }
    if (q.subQuestions) {
      const r = applyFixToQuestions(q.subQuestions, fix);
      if (r) return true;
    }
  }
  return false;
}

// Write back (preserve header comment if present)
const output = headerComment + prefix + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync(XCSC_PATH, output, 'utf8');

console.log(`\nDone: ${fixCount} passages fixed, ${skipCount} skipped`);
console.log(`Output: ${XCSC_PATH} (${(output.length / 1024).toFixed(0)} KB)`);
