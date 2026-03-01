const fs = require('fs');
const vm = require('vm');
const html = fs.readFileSync('../Chinese chars.html', 'utf8');
const lines = html.split('\n');

// Check WORD_EN
const weLine = lines.find(l => l.startsWith('const WORD_EN='));
const weJson = weLine.replace('const WORD_EN=', '').replace(/;$/, '');
try {
  const obj = JSON.parse(weJson);
  console.log('WORD_EN: parsed OK, entries:', Object.keys(obj).length);
} catch(e) { console.log('WORD_EN parse error:', e.message); }

// Check CHAR_EN
const ceLine = lines.find(l => l.startsWith('const CHAR_EN='));
if (ceLine) {
  const ceJson = ceLine.replace('const CHAR_EN=', '').replace(/;$/, '');
  try {
    const obj = JSON.parse(ceJson);
    console.log('CHAR_EN: parsed OK, entries:', Object.keys(obj).length);
  } catch(e) { console.log('CHAR_EN parse error:', e.message); }
}

// Check CHAR_DETAIL
const cdLine = lines.find(l => l.startsWith('const CHAR_DETAIL='));
if (cdLine) {
  const cdJson = cdLine.replace('const CHAR_DETAIL=', '').replace(/;$/, '');
  try {
    const obj = JSON.parse(cdJson);
    console.log('CHAR_DETAIL: parsed OK, entries:', Object.keys(obj).length);
  } catch(e) { console.log('CHAR_DETAIL parse error:', e.message); }
}

// Check NAV_TREE
const ntLine = lines.find(l => l.startsWith('const NAV_TREE='));
if (ntLine) {
  const ntJson = ntLine.replace('const NAV_TREE=', '').replace(/;$/, '');
  try {
    const obj = JSON.parse(ntJson);
    console.log('NAV_TREE: parsed OK');
  } catch(e) { console.log('NAV_TREE parse error:', e.message); }
}

// Check entire script with vm.Script
const scriptMatch = html.match(/<script>([\s\S]+)<\/script>/);
if (scriptMatch) {
  try {
    new vm.Script(scriptMatch[1], { filename: 'inline.js' });
    console.log('Full inline script: vm.Script parse OK');
  } catch(e) {
    console.log('Full inline script error:', e.message);
    const jsLines = scriptMatch[1].split('\n');
    const lineMatch = e.stack.match(/inline\.js:(\d+)/);
    if (lineMatch) {
      const ln = parseInt(lineMatch[1]);
      console.log('Error near line', ln, 'of inline JS:');
      for (let i = Math.max(0, ln-3); i < Math.min(jsLines.length, ln+3); i++) {
        console.log((i === ln-1 ? '>>>' : '   '), 'L'+(i+1)+':', jsLines[i].substring(0, 200));
      }
    }
  }
} else {
  console.log('No inline script found!');
}

// Check for problematic characters in WORD_EN values
const weObj = JSON.parse(weJson);
let issues = 0;
for (const [k, v] of Object.entries(weObj)) {
  if (v.includes('<\/') || v.includes('<\/')) {
    console.log('DANGER: </ in WORD_EN value for', k, ':', v);
    issues++;
  }
}
console.log('WORD_EN value issues found:', issues);

// Check for </script pattern anywhere in the inline JS
const jsContent = scriptMatch[1];
let searchIdx = 0;
while (true) {
  const idx = jsContent.toLowerCase().indexOf('</script', searchIdx);
  if (idx === -1) break;
  const context = jsContent.substring(Math.max(0, idx - 50), idx + 20);
  console.log('DANGER: </script found at position', idx, 'context:', JSON.stringify(context));
  searchIdx = idx + 1;
}

// File structure check
console.log('\nFile structure:');
console.log('Total lines:', lines.length);
console.log('First line:', lines[0]);
console.log('Last line:', lines[lines.length - 1]);
console.log('File size:', html.length, 'bytes');
console.log('Line 7 (CDN):', lines[6]);

// Check for BOM or weird encoding at start
const buf = Buffer.from(html.substring(0, 20));
console.log('First bytes hex:', buf.toString('hex').match(/.{2}/g).join(' '));
