/**
 * Add difficulty ratings to G7-G9 textbook files that are missing them.
 * G7: difficulty 3-5, G8: difficulty 4-5, G9: difficulty 4-5
 * Run: node build/fix_g7g9_difficulty.js
 */
const fs = require('fs');

const files = [
  { file: 'textbook_g8s1.js', grade: 8 },
  { file: 'textbook_g8s2.js', grade: 8 },
  { file: 'textbook_g9s1.js', grade: 9 },
];

const diffRange = { 8: [4, 5], 9: [4, 5] };

files.forEach(({ file, grade }) => {
  let code = fs.readFileSync(file, 'utf8');
  const [lo, hi] = diffRange[grade];
  let count = 0;

  // G8-G9 have inline format: id: N, title: "...", titleEn: "...",
  // We need to find lines with id + titleEn and insert difficulty on next line
  const lines = code.split('\n');
  const result = [];

  for (let i = 0; i < lines.length; i++) {
    result.push(lines[i]);

    // Match inline pattern: id: N, title: "...", titleEn: "...",
    const inlineMatch = lines[i].match(/^(\s+)id:\s*(\d+),\s*title:\s*"[^"]*",\s*titleEn:\s*"([^"]+)"/);
    if (!inlineMatch) {
      // Also try titleEn on its own line
      const soloMatch = lines[i].match(/^(\s+)titleEn:\s*"([^"]+)"/);
      if (!soloMatch) continue;

      const indent = soloMatch[1];
      const title = soloMatch[2];
      // Skip non-lesson entries
      if (/^Unit|Exchange|Word &|Daily|Composition|Happy|Oral|Review|Making|Writing|Model|Narrat|News|Activity|task/i.test(title)) continue;
      // Check next line for difficulty
      if (i + 1 < lines.length && lines[i + 1].includes('difficulty:')) continue;
      // Check previous lines for id
      let hasId = false;
      for (let j = Math.max(0, i - 3); j < i; j++) {
        if (/id:\s*\d+/.test(lines[j])) { hasId = true; break; }
      }
      if (!hasId) continue;

      const detDiff = lo + (title.length % (hi - lo + 1));
      result.push(indent + 'difficulty: ' + detDiff + ',');
      count++;
      continue;
    }

    const indent = inlineMatch[1];
    const lessonId = parseInt(inlineMatch[2]);
    const title = inlineMatch[3];

    // Skip unit-level entries (id pattern for units is usually low and has "Unit" in title)
    if (/^Unit|Activity|Narration|Comprehensive/i.test(title)) continue;

    // Check next line for existing difficulty
    if (i + 1 < lines.length && lines[i + 1].includes('difficulty:')) continue;

    // Assign difficulty deterministically
    const detDiff = lo + (title.length % (hi - lo + 1));
    result.push(indent + 'difficulty: ' + detDiff + ',');
    count++;
  }

  code = result.join('\n');
  fs.writeFileSync(file, code, 'utf8');
  console.log(file + ': added ' + count + ' difficulty ratings');

  // Validate
  try {
    const varName = 'TB_' + file.replace('textbook_', '').replace('.js', '').toUpperCase();
    const testCode = code.replace('window.' + varName, 'var ' + varName);
    require('vm').runInNewContext(testCode, { window: {}, console: console });
    console.log('  Validation: OK');
  } catch (e) {
    console.log('  Validation FAILED: ' + e.message);
  }
});
