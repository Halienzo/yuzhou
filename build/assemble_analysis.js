/**
 * Assemble analysis unit files into final analysis_gXsX.js files.
 * Usage: node build/assemble_analysis.js g9s2
 *   or:  node build/assemble_analysis.js all
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const buildDir = path.join(__dirname);
const rootDir = path.dirname(buildDir);

function assembleGrade(gs) {
  const varName = 'AN_' + gs.toUpperCase();

  // Find all unit files for this grade
  const unitFiles = [];
  for (let u = 1; u <= 8; u++) {
    const f = path.join(buildDir, '_' + gs + '_u' + u + '.js');
    if (fs.existsSync(f)) unitFiles.push({ unit: u, path: f });
  }

  // Also check for _fix file (partial replacements)
  const fixFile = path.join(buildDir, '_' + gs + '_fix.js');
  const hasFix = fs.existsSync(fixFile);

  if (unitFiles.length === 0 && !hasFix) {
    console.log(gs + ': no unit files found, skipping');
    return;
  }

  let entries = [];

  if (hasFix) {
    // Fix mode: load existing analysis, replace template entries
    const existingFile = path.join(rootDir, 'analysis_' + gs + '.js');
    if (!fs.existsSync(existingFile)) {
      console.log(gs + ': fix file exists but no existing analysis, skipping');
      return;
    }
    const ctx = vm.createContext({ window: {} });
    vm.runInContext(fs.readFileSync(existingFile, 'utf8'), ctx);
    entries = ctx.window[varName] || [];

    // Load fix entries
    const fixEntries = require(fixFile);
    const fixMap = {};
    fixEntries.forEach(e => { fixMap[e.lessonId] = e; });

    // Replace template entries with fix entries
    let replaced = 0;
    entries = entries.map(e => {
      if (fixMap[e.lessonId]) {
        replaced++;
        return fixMap[e.lessonId];
      }
      return e;
    });
    console.log(gs + ': replaced ' + replaced + ' entries from fix file');
  }

  if (unitFiles.length > 0) {
    // Assemble from unit files
    const unitEntries = [];
    unitFiles.forEach(uf => {
      const ue = require(uf.path);
      unitEntries.push(...ue);
      console.log(gs + ' u' + uf.unit + ': ' + ue.length + ' entries');
    });

    if (hasFix && entries.length > 0) {
      // Merge mode: unit entries replace matching existing, fix entries fill remaining gaps
      const unitMap = {};
      unitEntries.forEach(e => { unitMap[e.lessonId] = e; });
      entries = entries.map(e => unitMap[e.lessonId] || e);
      console.log(gs + ': merged ' + unitEntries.length + ' unit + fix entries into existing');
    } else {
      entries = unitEntries;
    }
  }

  // Generate the final JS file
  const header = '/**\n * 语宙 YuZhou — Literary Analysis: ' + gs.toUpperCase().replace('G','Grade ').replace('S',', Semester ') + '\n * Generated: ' + new Date().toISOString().slice(0,10) + '\n * ' + entries.length + ' lessons with web-verified content\n */\nwindow.' + varName + ' = ';

  const json = JSON.stringify(entries, null, 2);
  // Convert JSON to JS (unquote keys for readability isn't necessary, JSON is valid JS)
  const output = header + json + ';\n';

  const outFile = path.join(rootDir, 'analysis_' + gs + '.js');
  fs.writeFileSync(outFile, output, 'utf8');
  console.log(gs + ': wrote ' + entries.length + ' entries to ' + outFile + ' (' + Math.round(output.length/1024) + 'KB)');
}

// Parse args
const args = process.argv.slice(2);
if (args.length === 0 || args[0] === 'all') {
  const grades = [];
  for (let g = 1; g <= 9; g++) {
    for (let s = 1; s <= 2; s++) {
      grades.push('g' + g + 's' + s);
    }
  }
  grades.forEach(assembleGrade);
} else {
  args.forEach(assembleGrade);
}
