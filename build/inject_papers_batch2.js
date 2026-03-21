/**
 * inject_papers_batch2.js - Injects/updates 4 papers in xcsc_data.js
 * Papers: km2017, xs2022, cg2021, xs2021
 * Idempotent: removes existing copies before re-injecting.
 * Run: node build/inject_papers_batch2.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Build paper data from helper modules
const papers = [
  require('./b2_km2017.js'),
  require('./b2_xs2022.js'),
  require('./b2_cg2021.js'),
  require('./b2_xs2021.js')
];

const paperIds = new Set(papers.map(p => p.id));

function parseXcscData(src) {
  // Use a sandboxed VM context to safely evaluate the JS file
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox);
  return sandbox.window.XCSC_DATA;
}

function inject() {
  const filePath = path.join(__dirname, '..', 'xcsc_data.js');
  let src = fs.readFileSync(filePath, 'utf8');

  // Parse existing data using sandboxed VM
  let data;
  try {
    data = parseXcscData(src);
  } catch (e) {
    console.error('ERROR: Could not parse XCSC_DATA:', e.message);
    process.exit(1);
  }

  if (!data || !data.papers) {
    console.error('ERROR: XCSC_DATA.papers not found');
    process.exit(1);
  }

  const beforeCount = data.papers.length;

  // Remove existing papers with same IDs
  const existingIds = data.papers.filter(p => paperIds.has(p.id)).map(p => p.id);
  if (existingIds.length > 0) {
    console.log(`Removing ${existingIds.length} existing paper(s): ${existingIds.join(', ')}`);
    data.papers = data.papers.filter(p => !paperIds.has(p.id));
  }

  // Add new papers
  for (const p of papers) {
    data.papers.push(p);
  }

  // Rebuild the file using JSON.stringify (ensures all keys are quoted)
  const indent = '    ';
  const papersArr = data.papers.map(p => {
    return indent + JSON.stringify(p, null, 4)
      .split('\n').map((l, i) => i === 0 ? l : indent + l).join('\n');
  });

  const newSrc = `/* xcsc_data.js \u2014 \u5c0f\u5347\u521d\u771f\u9898 (Primary-to-Junior Real Exam Papers)
 * ${data.papers.length} papers from various districts
 * Auto-generated - do not edit by hand
 */
window.XCSC_DATA = {
  "papers": [
${papersArr.join(',\n')}
  ]
};`;

  fs.writeFileSync(filePath, newSrc, 'utf8');

  // Validate by re-reading with JSON.parse (all keys are now quoted)
  const valSrc = fs.readFileSync(filePath, 'utf8');
  const valMatch = valSrc.match(/window\.XCSC_DATA\s*=\s*(\{[\s\S]*\})\s*;/);
  if (!valMatch) {
    console.error('VALIDATION ERROR: Could not re-parse XCSC_DATA after write');
    process.exit(1);
  }
  const valData = JSON.parse(valMatch[1]);
  let totalQ = 0;
  valData.papers.forEach(p => p.sections.forEach(s => { totalQ += s.questions.length; }));

  console.log(`\nResult: ${beforeCount} -> ${valData.papers.length} papers (${totalQ} total questions)`);
  console.log(`\nInjected ${papers.length} paper(s):`);
  for (const p of papers) {
    const qCount = p.sections.reduce((sum, s) => sum + s.questions.length, 0);
    console.log(`  + [${p.id}] ${p.title} | ${p.sections.length} sections, ${qCount} questions`);
  }
  console.log('\nDone!');
}

inject();
