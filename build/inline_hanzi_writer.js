// Inline HanziWriter library into Chinese chars.html
const fs = require('fs');
const html = fs.readFileSync('../Chinese chars.html', 'utf8');
const hw = fs.readFileSync('../hanzi-writer.min.js', 'utf8');

// Extract just the JS code (skip comment lines and sourcemap)
const hwLines = hw.split('\n');
const jsCode = hwLines.filter(l => !l.startsWith('//') && l.trim()).join('\n');

const lines = html.split('\n');

// Find the broken script tag (line 7 starts with <script>/* HanziWriter)
// and the link tag that follows
let startIdx = -1, endIdx = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('HanziWriter') && lines[i].startsWith('<script')) {
    startIdx = i;
  }
  if (startIdx >= 0 && lines[i].includes('<link href=')) {
    endIdx = i;
    break;
  }
}

if (startIdx === -1) {
  console.log('Could not find HanziWriter script tag');
  process.exit(1);
}

console.log('Found broken script at lines', startIdx + 1, 'to', endIdx);
console.log('Replacing with inlined HanziWriter (' + jsCode.length + ' bytes)');

// Replace lines startIdx through endIdx-1 with the inlined script, keep the link tag
const newLines = [
  ...lines.slice(0, startIdx),
  '<script>/* HanziWriter v3.5.0 - inlined */',
  jsCode,
  '<\/script>',
  ...lines.slice(endIdx)
];

fs.writeFileSync('../Chinese chars.html', newLines.join('\n'), 'utf8');
console.log('Done. New file has', newLines.length, 'lines');
