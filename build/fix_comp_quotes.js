// Fix Chinese single quotes that are ASCII inside JS single-quoted strings
const fs = require('fs');
let c = fs.readFileSync('zhongkao_composition_data.js', 'utf8');

const original = c;

// Replace ASCII single quotes used as Chinese quotation marks inside string content
// These break JS parsing when inside '...' delimited strings
c = c.replace(/总是'差不多'/g, '总是\\u2018差不多\\u2019');

if (c !== original) {
  fs.writeFileSync('zhongkao_composition_data.js', c, 'utf8');
  console.log('Fixed quotes');
} else {
  console.log('No changes needed');
}
