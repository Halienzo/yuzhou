#!/usr/bin/env node
/**
 * inject_full_zk_passages.js
 * Replaces short summary passages in zhongkao_data.js with full article texts + English translations.
 * Run: node build/inject_full_zk_passages.js
 */
const fs = require('fs');
const path = require('path');

const ZK_PATH = path.resolve(__dirname, '..', 'zhongkao_data.js');
const DATA_PATH = path.resolve(__dirname, '_full_zk_passages_data.json');

// Load the fix data
const fixes = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));

// Load zhongkao_data.js — format: /* comment */\nwindow.ZK_DATA = {...};
let src = fs.readFileSync(ZK_PATH, 'utf8');

// Extract comment block
const commentMatch = src.match(/^(\/\*[\s\S]*?\*\/\s*)/);
const headerComment = commentMatch ? commentMatch[1] : '';

// Extract JSON
const prefix = 'window.ZK_DATA = ';
const prefixIdx = src.indexOf(prefix);
if (prefixIdx === -1) {
  console.error('ERROR: zhongkao_data.js does not contain expected prefix');
  process.exit(1);
}
const jsonStr = src.slice(prefixIdx + prefix.length).replace(/;\s*$/, '');
const data = JSON.parse(jsonStr);

let fixCount = 0;
let skipCount = 0;

// Apply fixes
fixes.forEach(fix => {
  const paper = data.papers.find(p => p.id === fix.paperId);
  if (!paper) {
    console.warn('WARN: Paper ' + fix.paperId + ' not found');
    skipCount++;
    return;
  }

  let found = false;
  for (const section of paper.sections) {
    found = applyFixToQuestions(section.questions, fix);
    if (found) break;
  }
  if (!found) {
    console.warn('WARN: Q' + fix.num + ' not found in paper ' + fix.paperId);
    skipCount++;
  }
});

function applyFixToQuestions(questions, fix) {
  for (const q of questions) {
    if (q.num === fix.num && q.passage !== undefined) {
      // Check matchPrefix if provided
      if (fix.matchPrefix && !q.passage.startsWith(fix.matchPrefix)) {
        if (q.subQuestions) {
          const r = applyFixToQuestions(q.subQuestions, fix);
          if (r) return true;
        }
        continue;
      }
      // Only replace if fix passage is longer than current
      if (fix.passage.length <= q.passage.length) {
        console.log('SKIP: ' + fix.paperId + ' Q' + fix.num + ' (fix ' + fix.passage.length + ' <= current ' + q.passage.length + ')');
        skipCount++;
        return true;
      }
      q.passage = fix.passage;
      if (fix.passageEn) {
        q.passageEn = fix.passageEn;
      }
      console.log('FIXED: ' + fix.paperId + ' Q' + fix.num + ' (' + q.passage.length + ' chars)');
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

// Write back
const output = headerComment + prefix + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync(ZK_PATH, output, 'utf8');

console.log('\nDone: ' + fixCount + ' passages fixed, ' + skipCount + ' skipped');
console.log('Output: ' + ZK_PATH + ' (' + (output.length / 1024).toFixed(0) + ' KB)');
