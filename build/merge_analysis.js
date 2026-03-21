/**
 * Merge existing rich analysis entries with template-generated ones.
 * Keeps agent-crafted entries, fills gaps with gen_analysis templates.
 * Also fixes lessonId mismatches (e.g., "古诗三首1" → "古诗三首")
 *
 * Usage: node build/merge_analysis.js <grade> <semester>
 */
const vm = require('vm');
const fs = require('fs');

const grade = parseInt(process.argv[2]);
const semester = parseInt(process.argv[3]);
if (!grade || !semester) { console.error('Usage: node merge_analysis.js <grade> <semester>'); process.exit(1); }

const varName = `AN_G${grade}S${semester}`;
const tbFile = `textbook_g${grade}s${semester}.js`;
const anFile = `analysis_g${grade}s${semester}.js`;

// Load textbook to get canonical lesson titles
const tbCtx = vm.createContext({});
vm.runInContext(fs.readFileSync(tbFile, 'utf8'), tbCtx);
const tbKey = Object.keys(tbCtx).find(k => k.startsWith('TB_'));
const tb = tbCtx[tbKey];
const lessonTitles = [];
(tb.units || []).forEach(u => { (u.lessons || [u]).forEach(l => lessonTitles.push(l.title)); });

// Load existing analysis
const anCtx = vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(anFile, 'utf8'), anCtx);
const existing = anCtx.window[varName] || [];

// Build map of existing entries by lessonId (with fuzzy matching)
const existingMap = {};
existing.forEach(e => {
  // Try exact match first
  let id = e.lessonId || e.title;
  // Fuzzy: strip trailing numbers/suffixes
  const cleanId = id.replace(/_unit\d+$/, '').replace(/\d+$/, '');
  existingMap[id] = e;
  if (id !== cleanId) existingMap[cleanId] = e;
});

// Now generate template for missing entries using gen_analysis logic
// We need the gen_analysis module... let's just require it inline
// Actually, let's generate a fresh template file and load from it
const tmpFile = `_tmp_merge_${grade}${semester}.js`;

// Run gen_analysis for this grade/semester to get template
const { execSync } = require('child_process');
// First, temporarily rename the analysis file so gen_analysis regenerates it
fs.renameSync(anFile, anFile + '.bak');
execSync(`node build/gen_analysis.js ${grade} ${semester}`, { cwd: process.cwd() });

// Load template
const tmpCtx = vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(anFile, 'utf8'), tmpCtx);
const templates = tmpCtx.window[varName] || [];
const templateMap = {};
templates.forEach(t => { templateMap[t.lessonId] = t; });

// Restore backup
fs.renameSync(anFile + '.bak', anFile);

// Merge: for each canonical title, use existing rich entry or template
const merged = [];
let keptRich = 0, usedTemplate = 0;
const usedExisting = new Set();

lessonTitles.forEach((title, idx) => {
  // Try to find existing entry (exact or fuzzy)
  let found = null;
  if (existingMap[title]) {
    found = existingMap[title];
  } else {
    // Try fuzzy: existing entries might have suffix like "古诗三首1"
    for (const [key, entry] of Object.entries(existingMap)) {
      if (key.startsWith(title) || title.startsWith(key)) {
        if (!usedExisting.has(key)) {
          found = entry;
          usedExisting.add(key);
          break;
        }
      }
    }
  }

  if (found) {
    // Fix lessonId to match canonical title
    found.lessonId = title;
    delete found.title; // clean up old format field
    merged.push(found);
    keptRich++;
    usedExisting.add(title);
  } else if (templateMap[title]) {
    merged.push(templateMap[title]);
    usedTemplate++;
  } else {
    console.log(`  WARNING: No entry for "${title}"`);
  }
});

console.log(`Merged ${anFile}: ${keptRich} rich + ${usedTemplate} template = ${merged.length}/${lessonTitles.length} lessons`);

// Serialize back - for rich entries, we need to preserve their structure
// Use JSON-based serialization for simplicity
let js = `/**\n * \\u8BED\\u5B99 YuZhou \\u2014 Literary Analysis: Grade ${grade}, Semester ${semester}\n * ${merged.length} lessons (${keptRich} rich, ${usedTemplate} template)\n */\nwindow.${varName} = `;

// Custom JSON serializer that outputs valid JS
function toJS(obj, indent) {
  indent = indent || 0;
  const pad = '  '.repeat(indent);
  const pad1 = '  '.repeat(indent + 1);

  if (obj === null || obj === undefined) return 'null';
  if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj);
  if (typeof obj === 'string') {
    return "'" + obj.replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\n/g,'\\n')
      .replace(/\u201c/g,'\\u201c').replace(/\u201d/g,'\\u201d')
      .replace(/\u2018/g,'\\u2018').replace(/\u2019/g,'\\u2019') + "'";
  }
  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]';
    const items = obj.map(item => pad1 + toJS(item, indent + 1));
    return '[\n' + items.join(',\n') + '\n' + pad + ']';
  }
  if (typeof obj === 'object') {
    const keys = Object.keys(obj);
    if (keys.length === 0) return '{}';
    const pairs = keys.map(k => {
      const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : ("'" + k + "'");
      return pad1 + safeKey + ': ' + toJS(obj[k], indent + 1);
    });
    return '{\n' + pairs.join(',\n') + '\n' + pad + '}';
  }
  return String(obj);
}

js += toJS(merged, 0) + ';\n';

fs.writeFileSync(anFile, js, 'utf8');

// Verify
try {
  const vctx = vm.createContext({window:{}});
  vm.runInContext(fs.readFileSync(anFile, 'utf8'), vctx);
  const arr = vctx.window[varName];
  console.log(`✓ ${anFile}: ${arr.length} entries verified`);
} catch(e) {
  console.error(`✗ ${anFile}: syntax error!`, e.message);
}
