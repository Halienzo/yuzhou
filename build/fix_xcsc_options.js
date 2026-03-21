#!/usr/bin/env node
/**
 * fix_xcsc_options.js
 * Finds choice/readingChoice/multiChoice questions with missing or empty options arrays
 * and converts them to openEnded type with gradeable:false.
 *
 * Usage: node build/fix_xcsc_options.js
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'xcsc_data.js');
let src = fs.readFileSync(filePath, 'utf8');

// Extract the JS object by evaluating the script
// We create a mock window to capture the assignment
const vm = require('vm');
const ctx = { window: {} };
vm.runInNewContext(src, ctx);
const data = ctx.window.XCSC_DATA;

if (!data || !data.papers) {
  console.error('Failed to parse XCSC_DATA');
  process.exit(1);
}

let fixCount = 0;

function checkQ(q, paperId, secName) {
  const t = q.type;
  if (t === 'choice' || t === 'readingChoice' || t === 'multiChoice') {
    if (!q.options || q.options.length === 0) {
      console.log(`  FIX: ${paperId} / ${secName} / Q${q.num} (${t}) → openEnded`);
      q.type = 'openEnded';
      q.gradeable = false;
      delete q.options;
      delete q.optionsEn;
      delete q.answer;
      fixCount++;
    }
  }
  if (q.type === 'readingGroup' && q.subQuestions) {
    q.subQuestions.forEach(sq => checkQ(sq, paperId, secName));
  }
}

data.papers.forEach(paper => {
  (paper.sections || []).forEach(sec => {
    (sec.questions || []).forEach(q => checkQ(q, paper.id, sec.name));
  });
});

console.log(`\nTotal fixed: ${fixCount} questions`);

if (fixCount > 0) {
  // Re-serialize the data
  const header = `/* xcsc_data.js — 小升初真题 (Primary-to-Junior Real Exam Papers)
 * 22 papers from various districts
 * Auto-generated - do not edit by hand
 */
window.XCSC_DATA = `;
  const json = JSON.stringify(data, null, 2);
  const output = header + json + ';\n';
  fs.writeFileSync(filePath, output, 'utf8');
  console.log('File updated successfully.');
} else {
  console.log('No changes needed.');
}
