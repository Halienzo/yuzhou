const fs = require('fs');
const vm = require('vm');
const html = fs.readFileSync('../Chinese chars.html', 'utf8');
const m = html.match(/<script>([\s\S]+)<\/script>/);
if (!m) { console.log('No script found'); process.exit(1); }
const js = m[1];

// Count backticks
let ticks = 0;
for (let i = 0; i < js.length; i++) {
  if (js[i] === '`') ticks++;
}
console.log('Backtick count:', ticks, ticks % 2 === 0 ? '(balanced)' : '(UNBALANCED!)');

// Check balance of delimiters (simple string-aware check)
let parens = 0, brackets = 0, braces = 0;
let inString = false, strChar = '';
for (let i = 0; i < js.length; i++) {
  const c = js[i];
  if (inString) {
    if (c === strChar && js[i-1] !== '\\') inString = false;
    continue;
  }
  if (c === '"' || c === "'" || c === '`') { inString = true; strChar = c; continue; }
  if (c === '(') parens++;
  if (c === ')') parens--;
  if (c === '[') brackets++;
  if (c === ']') brackets--;
  if (c === '{') braces++;
  if (c === '}') braces--;
}
console.log('Parens balance:', parens, parens === 0 ? 'OK' : 'MISMATCH');
console.log('Brackets balance:', brackets, brackets === 0 ? 'OK' : 'MISMATCH');
console.log('Braces balance:', braces, braces === 0 ? 'OK' : 'MISMATCH');

// Use vm.Script to validate syntax
try {
  const script = new vm.Script(js, { filename: 'test.js' });
  console.log('vm.Script parse: OK');
} catch(e) {
  console.log('vm.Script error:', e.message);
  // Try to find the approximate location
  const lines = js.split('\n');
  if (e.stack) {
    const lineMatch = e.stack.match(/test\.js:(\d+)/);
    if (lineMatch) {
      const ln = parseInt(lineMatch[1]);
      console.log('Error near JS line', ln);
      for (let i = Math.max(0, ln-3); i < Math.min(lines.length, ln+3); i++) {
        console.log((i === ln-1 ? '>>>' : '   '), 'L'+(i+1)+':', lines[i].substring(0, 200));
      }
    }
  }
}
