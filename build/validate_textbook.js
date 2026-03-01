#!/usr/bin/env node
/**
 * 字道 ZiDao — Textbook Data Validator
 * Validates textbook_gXsY.js files for schema correctness.
 *
 * Usage:
 *   node build/validate_textbook.js                         # Validate all
 *   node build/validate_textbook.js textbook_g2s1.js        # Validate one
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.dirname(__dirname);

/* Schema definitions per grade band */
const REQUIRED_TOP = ['grade', 'semester', 'units'];
const REQUIRED_UNIT = ['id', 'title', 'titleEn', 'type', 'lessons'];
const REQUIRED_LESSON_PRIMARY = ['id', 'title', 'titleEn', 'text', 'textEn'];
const REQUIRED_LESSON_JH = ['id', 'title', 'titleEn', 'text', 'textEn'];

function getGradeBand(grade) {
  if (grade <= 2) return 'lower';
  if (grade <= 4) return 'middle';
  if (grade <= 6) return 'upper';
  return 'juniorHigh';
}

function validateFile(filePath) {
  const filename = path.basename(filePath);
  const match = filename.match(/textbook_g(\d+)s(\d+)\.js/);
  if (!match) {
    console.error(`[SKIP] ${filename}: not a textbook data file`);
    return false;
  }

  const grade = parseInt(match[1]);
  const semester = parseInt(match[2]);
  const varName = `TB_G${grade}S${semester}`;
  const band = getGradeBand(grade);

  console.log(`\n[VALIDATE] ${filename} (Grade ${grade}, Sem ${semester}, Band: ${band})`);

  /* 1. Syntax check */
  const src = fs.readFileSync(filePath, 'utf8');
  try {
    vm.compileFunction(src, [], { filename });
    console.log('  [OK] JS syntax valid');
  } catch (e) {
    console.error(`  [FAIL] JS syntax error: ${e.message}`);
    return false;
  }

  /* 2. Load and evaluate */
  const sandbox = {};
  try {
    vm.runInNewContext(src, sandbox, { filename });
  } catch (e) {
    console.error(`  [FAIL] Execution error: ${e.message}`);
    return false;
  }

  const data = sandbox[varName];
  if (!data) {
    console.error(`  [FAIL] Variable ${varName} not defined`);
    return false;
  }
  console.log(`  [OK] ${varName} defined`);

  /* 3. Top-level fields */
  let errors = 0;
  for (const field of REQUIRED_TOP) {
    if (!(field in data)) {
      console.error(`  [FAIL] Missing top-level field: ${field}`);
      errors++;
    }
  }
  if (data.grade !== grade) {
    console.error(`  [FAIL] grade mismatch: ${data.grade} vs expected ${grade}`);
    errors++;
  }
  if (data.semester !== semester) {
    console.error(`  [FAIL] semester mismatch: ${data.semester} vs expected ${semester}`);
    errors++;
  }

  /* 4. Primary-specific fields */
  if (band !== 'juniorHigh') {
    if (!('totalRecogChars' in data)) console.warn('  [WARN] Missing totalRecogChars');
    if (!('totalWriteChars' in data)) console.warn('  [WARN] Missing totalWriteChars');
  }

  /* 5. Unit validation */
  if (!Array.isArray(data.units)) {
    console.error('  [FAIL] units is not an array');
    return false;
  }
  console.log(`  [OK] ${data.units.length} units found`);

  let totalLessons = 0;
  let totalRecog = 0;
  let totalWrite = 0;

  for (const unit of data.units) {
    for (const field of REQUIRED_UNIT) {
      if (!(field in unit)) {
        console.error(`  [FAIL] Unit ${unit.id || '?'}: missing ${field}`);
        errors++;
      }
    }

    if (!Array.isArray(unit.lessons)) {
      console.error(`  [FAIL] Unit ${unit.id}: lessons is not an array`);
      errors++;
      continue;
    }

    totalLessons += unit.lessons.length;

    for (const lesson of unit.lessons) {
      const reqFields = band === 'juniorHigh' ? REQUIRED_LESSON_JH : REQUIRED_LESSON_PRIMARY;
      for (const field of reqFields) {
        if (!(field in lesson)) {
          console.error(`  [FAIL] Unit ${unit.id}, Lesson ${lesson.id || '?'}: missing ${field}`);
          errors++;
        }
      }

      if (!Array.isArray(lesson.text)) {
        console.error(`  [FAIL] Unit ${unit.id}, Lesson ${lesson.id}: text is not an array`);
        errors++;
      }

      /* Count chars for primary grades */
      if (band !== 'juniorHigh') {
        if (lesson.recognizeChars) totalRecog += lesson.recognizeChars.length;
        if (lesson.writeChars) totalWrite += lesson.writeChars.length;
      }

      /* Check for Chinese quotation mark issues */
      const textStr = JSON.stringify(lesson.text || []);
      if (textStr.includes('"') && !textStr.includes('\u201C')) {
        console.warn(`  [WARN] Unit ${unit.id}, Lesson ${lesson.id}: may have ASCII quotes instead of Unicode \u201C\u201D`);
      }
    }
  }

  console.log(`  [OK] ${totalLessons} lessons total`);
  if (band !== 'juniorHigh') {
    console.log(`  [INFO] recognizeChars: ${totalRecog}, writeChars: ${totalWrite}`);
  }

  if (errors === 0) {
    console.log(`  [PASS] ${filename} is valid!`);
    return true;
  } else {
    console.error(`  [FAIL] ${errors} error(s) found`);
    return false;
  }
}

/* Main */
const args = process.argv.slice(2);
let files;

if (args.length > 0) {
  files = args.map(f => path.resolve(f));
} else {
  /* Find all textbook files in project root */
  files = fs.readdirSync(ROOT)
    .filter(f => /^textbook_g\d+s\d+\.js$/.test(f))
    .sort()
    .map(f => path.join(ROOT, f));
}

if (files.length === 0) {
  console.log('No textbook data files found.');
  process.exit(0);
}

console.log(`Validating ${files.length} textbook file(s)...\n`);
let passed = 0;
let failed = 0;

for (const f of files) {
  if (validateFile(f)) passed++;
  else failed++;
}

console.log(`\n${'='.repeat(40)}`);
console.log(`Results: ${passed} passed, ${failed} failed out of ${files.length}`);
process.exit(failed > 0 ? 1 : 0);
