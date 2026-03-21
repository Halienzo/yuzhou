/**
 * Fix script: Correct gradeRange/hskRange for grammar.comparisons items
 * where the traps[].level was incorrectly used instead of the item's own level.
 *
 * Run: node build/fix_bridge_levels.js
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'bridge_data.js');
let src = fs.readFileSync(filePath, 'utf-8');
let lines = src.split('\n');

function gradeRange(level) {
  if (level === 1) return '[1,3]';
  if (level === 2) return '[3,6]';
  return '[7,9]';
}
function hskRange(level) {
  if (level === 1) return '[1,2]';
  if (level === 2) return '[3,5]';
  return '[6,9]';
}

// The grammar items are on lines 77-106 (1-indexed), i.e., indices 76-105
// Each line has pattern: ...],level:N,gradeRange:[...],hskRange:[...],...
// We need to:
// 1. Extract the item's own level (the one after ],level: which comes after traps)
// 2. Recompute gradeRange and hskRange
// 3. Replace the wrong values

let fixCount = 0;

for (let i = 76; i <= 105; i++) {
  const line = lines[i];
  // The item's own level appears as: ],level:N, (after traps array closing])
  const m = line.match(/\],level:(\d+),gradeRange:\[(\d+),(\d+)\],hskRange:\[(\d+),(\d+)\]/);
  if (m) {
    const actualLevel = parseInt(m[1]);
    const currentGR = `[${m[2]},${m[3]}]`;
    const currentHR = `[${m[4]},${m[5]}]`;
    const correctGR = gradeRange(actualLevel);
    const correctHR = hskRange(actualLevel);

    if (currentGR !== correctGR || currentHR !== correctHR) {
      lines[i] = line.replace(
        `],level:${actualLevel},gradeRange:${currentGR},hskRange:${currentHR}`,
        `],level:${actualLevel},gradeRange:${correctGR},hskRange:${correctHR}`
      );
      fixCount++;
      console.log(`Fixed line ${i+1}: level=${actualLevel}, ${currentGR}→${correctGR}, ${currentHR}→${correctHR}`);
    }
  }
}

console.log(`\nFixed ${fixCount} grammar items.`);

// Write back
const output = lines.join('\n');
fs.writeFileSync(filePath, output, 'utf-8');
console.log('Done!');
