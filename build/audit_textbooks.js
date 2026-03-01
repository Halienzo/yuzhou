// Deep audit of all 18 textbook data files
// Checks: field completeness, content depth, cross-grade consistency, character counts

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const grades = [];
for (let g = 1; g <= 9; g++) {
  for (let s = 1; s <= 2; s++) {
    grades.push({ grade: g, sem: s, file: `textbook_g${g}s${s}.js` });
  }
}

function getBand(g) {
  if (g <= 2) return 'lower';
  if (g <= 4) return 'middle';
  if (g <= 6) return 'upper';
  return 'juniorHigh';
}

const results = [];
const issues = [];

for (const { grade, sem, file } of grades) {
  const fp = path.join(__dirname, '..', file);
  if (!fs.existsSync(fp)) {
    issues.push(`[MISSING] ${file} does not exist`);
    continue;
  }
  const code = fs.readFileSync(fp, 'utf8');
  const ctx = {};
  vm.createContext(ctx);
  try {
    vm.runInContext(code, ctx);
  } catch (e) {
    issues.push(`[ERROR] ${file}: ${e.message}`);
    continue;
  }

  const varName = `TB_G${grade}S${sem}`;
  const data = ctx[varName];
  if (!data) {
    issues.push(`[ERROR] ${file}: ${varName} not defined`);
    continue;
  }

  const band = getBand(grade);
  const units = data.units || [];
  let totalLessons = 0;
  let totalTextSegments = 0;
  let totalAnnotations = 0;
  let totalRecognize = 0;
  let totalWrite = 0;
  let lessonsWithText = 0;
  let lessonsWithTextEn = 0;
  let lessonsWithAnnotations = 0;
  let lessonsWithExercises = 0;
  let lessonsWithTeachingPoints = 0;
  let lessonsWithParentTips = 0;
  let lessonsWithThinkExplore = 0;
  let lessonsWithReadingTips = 0;
  let lessonsWithAccumExtend = 0;
  let lessonsWithReadWriteWords = 0;
  let lessonsWithAuthor = 0;
  let lessonsWithAuthorBio = 0;
  let selfReadCount = 0;
  let classicalCount = 0;
  let poetryCount = 0;
  let unitsWithWriting = 0;
  let unitsWithReadWrite = 0;
  let unitsWithGarden = 0;
  let unitsWithCompLearning = 0;
  let unitsWithClassicBook = 0;
  let unitsWithExtPoetry = 0;
  let emptyTextLessons = [];
  let emptyTextEnLessons = [];

  for (const u of units) {
    const lessons = u.lessons || [];
    totalLessons += lessons.length;

    if (u.writing) unitsWithWriting++;
    if (u.readWrite) unitsWithReadWrite++;
    if (u.garden) unitsWithGarden++;
    if (u.comprehensiveLearning) unitsWithCompLearning++;
    if (u.classicBookGuide) unitsWithClassicBook++;
    if (u.extracurricularPoetry && u.extracurricularPoetry.length > 0) unitsWithExtPoetry++;

    for (const l of lessons) {
      const text = l.text || [];
      const textEn = l.textEn || [];
      totalTextSegments += text.length;

      if (text.length > 0) lessonsWithText++;
      else emptyTextLessons.push(`${u.id || u.title}/${l.id || l.title}`);

      if (textEn.length > 0) lessonsWithTextEn++;
      else emptyTextEnLessons.push(`${u.id || u.title}/${l.id || l.title}`);

      const ann = l.annotations || [];
      totalAnnotations += ann.length;
      if (ann.length > 0) lessonsWithAnnotations++;

      if (l.exercises && l.exercises.length > 0) lessonsWithExercises++;
      if (l.teachingPoints && l.teachingPoints.length > 0) lessonsWithTeachingPoints++;
      if (l.parentTips && l.parentTips.length > 0) lessonsWithParentTips++;
      if (l.thinkExplore && l.thinkExplore.length > 0) lessonsWithThinkExplore++;
      if (l.readingTips && l.readingTips.length > 0) lessonsWithReadingTips++;
      if (l.accumExtend && l.accumExtend.length > 0) lessonsWithAccumExtend++;
      if (l.readWriteWords && l.readWriteWords.length > 0) lessonsWithReadWriteWords++;
      if (l.author) lessonsWithAuthor++;
      if (l.authorBio) lessonsWithAuthorBio++;
      if (l.isSelfRead) selfReadCount++;
      if (l.isClassical) classicalCount++;
      if (l.isPoetry) poetryCount++;

      const rc = l.recognizeChars || [];
      const wc = l.writeChars || [];
      totalRecognize += rc.length;
      totalWrite += wc.length;
    }
  }

  const lines = code.split('\n').length;
  const sizeKB = Math.round(fs.statSync(fp).size / 1024);

  const r = {
    file, grade, sem, band, lines, sizeKB,
    units: units.length,
    totalLessons,
    totalTextSegments,
    totalAnnotations,
    totalRecognize,
    totalWrite,
    lessonsWithText,
    lessonsWithTextEn,
    lessonsWithAnnotations,
    lessonsWithExercises,
    lessonsWithTeachingPoints,
    lessonsWithParentTips,
    lessonsWithThinkExplore,
    lessonsWithReadingTips,
    lessonsWithAccumExtend,
    lessonsWithReadWriteWords,
    lessonsWithAuthor,
    lessonsWithAuthorBio,
    selfReadCount,
    classicalCount,
    poetryCount,
    unitsWithWriting,
    unitsWithReadWrite,
    unitsWithGarden,
    unitsWithCompLearning,
    unitsWithClassicBook,
    unitsWithExtPoetry,
    emptyTextLessons,
    emptyTextEnLessons,
  };
  results.push(r);

  // Grade-band-specific checks
  if (band === 'lower' || band === 'middle') {
    if (totalRecognize === 0) issues.push(`[WARN] ${file}: No recognizeChars (expected for G${grade})`);
    if (totalWrite === 0) issues.push(`[WARN] ${file}: No writeChars (expected for G${grade})`);
  }
  if (band === 'juniorHigh') {
    if (lessonsWithAuthor < totalLessons * 0.5)
      issues.push(`[WARN] ${file}: Only ${lessonsWithAuthor}/${totalLessons} lessons have author field`);
    if (lessonsWithAuthorBio < totalLessons * 0.3)
      issues.push(`[WARN] ${file}: Only ${lessonsWithAuthorBio}/${totalLessons} lessons have authorBio`);
  }
  if (emptyTextLessons.length > 0) {
    issues.push(`[WARN] ${file}: ${emptyTextLessons.length} lesson(s) with empty text: ${emptyTextLessons.join(', ')}`);
  }
  if (emptyTextEnLessons.length > 0) {
    issues.push(`[INFO] ${file}: ${emptyTextEnLessons.length} lesson(s) missing textEn: ${emptyTextEnLessons.join(', ')}`);
  }
  if (lessonsWithTeachingPoints < totalLessons * 0.5) {
    issues.push(`[INFO] ${file}: Only ${lessonsWithTeachingPoints}/${totalLessons} lessons have teachingPoints`);
  }
  if (lessonsWithParentTips < totalLessons * 0.5) {
    issues.push(`[INFO] ${file}: Only ${lessonsWithParentTips}/${totalLessons} lessons have parentTips`);
  }
}

// ── Summary Table ──
console.log('\n══════════════════════════════════════════════════════════════════════════');
console.log('  TEXTBOOK DATA COMPLETENESS AUDIT — ALL 18 FILES');
console.log('══════════════════════════════════════════════════════════════════════════\n');

console.log('┌────────────────────┬──────┬───────┬────────┬────────┬───────┬────────┬────────┬────────┬────────┐');
console.log('│ File               │ Band │ Units │Lessons │ Lines  │ KB    │ Text   │ TextEn │ Annot  │ Chars  │');
console.log('├────────────────────┼──────┼───────┼────────┼────────┼───────┼────────┼────────┼────────┼────────┤');
for (const r of results) {
  const charInfo = (r.band === 'lower' || r.band === 'middle' || r.band === 'upper')
    ? `R${r.totalRecognize}/W${r.totalWrite}`
    : 'N/A';
  console.log(`│ ${r.file.padEnd(18)} │ ${r.band.padEnd(4).substring(0,4)} │ ${String(r.units).padStart(5)} │ ${String(r.totalLessons).padStart(6)} │ ${String(r.lines).padStart(6)} │ ${String(r.sizeKB).padStart(5)} │ ${String(r.lessonsWithText + '/' + r.totalLessons).padStart(6)} │ ${String(r.lessonsWithTextEn + '/' + r.totalLessons).padStart(6)} │ ${String(r.totalAnnotations).padStart(6)} │ ${charInfo.padStart(6)} │`);
}
console.log('└────────────────────┴──────┴───────┴────────┴────────┴───────┴────────┴────────┴────────┴────────┘');

// ── Totals ──
const totals = results.reduce((acc, r) => {
  acc.units += r.units;
  acc.lessons += r.totalLessons;
  acc.lines += r.lines;
  acc.sizeKB += r.sizeKB;
  acc.textSegs += r.totalTextSegments;
  acc.annotations += r.totalAnnotations;
  acc.recognize += r.totalRecognize;
  acc.write += r.totalWrite;
  acc.selfRead += r.selfReadCount;
  acc.classical += r.classicalCount;
  acc.poetry += r.poetryCount;
  return acc;
}, { units:0, lessons:0, lines:0, sizeKB:0, textSegs:0, annotations:0, recognize:0, write:0, selfRead:0, classical:0, poetry:0 });

console.log(`\n  TOTALS: ${totals.units} units, ${totals.lessons} lessons, ${totals.lines} lines, ${totals.sizeKB} KB`);
console.log(`  Text segments: ${totals.textSegs}  |  Annotations: ${totals.annotations}`);
console.log(`  Recognize chars: ${totals.recognize}  |  Write chars: ${totals.write}`);
console.log(`  Self-read lessons: ${totals.selfRead}  |  Classical: ${totals.classical}  |  Poetry: ${totals.poetry}`);

// ── Pedagogical Fields ──
console.log('\n── PEDAGOGICAL FIELD COVERAGE ──────────────────────────────────────────');
console.log('┌────────────────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┐');
console.log('│ File               │ Teaching │ Parent   │ Think/   │ Reading  │ Accum    │ ReadWrite│');
console.log('│                    │ Points   │ Tips     │ Explore  │ Tips     │ Extend   │ Words    │');
console.log('├────────────────────┼──────────┼──────────┼──────────┼──────────┼──────────┼──────────┤');
for (const r of results) {
  const tp = `${r.lessonsWithTeachingPoints}/${r.totalLessons}`;
  const pt = `${r.lessonsWithParentTips}/${r.totalLessons}`;
  const te = `${r.lessonsWithThinkExplore}/${r.totalLessons}`;
  const rt = `${r.lessonsWithReadingTips}/${r.totalLessons}`;
  const ae = `${r.lessonsWithAccumExtend}/${r.totalLessons}`;
  const rw = `${r.lessonsWithReadWriteWords}/${r.totalLessons}`;
  console.log(`│ ${r.file.padEnd(18)} │ ${tp.padStart(8)} │ ${pt.padStart(8)} │ ${te.padStart(8)} │ ${rt.padStart(8)} │ ${ae.padStart(8)} │ ${rw.padStart(8)} │`);
}
console.log('└────────────────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────┘');

// ── Unit-Level Sections ──
console.log('\n── UNIT-LEVEL SECTIONS ─────────────────────────────────────────────────');
console.log('┌────────────────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┐');
console.log('│ File               │ Writing  │ ReadWrt  │ Garden   │ CompLrn  │ Classic  │ ExtPoet  │');
console.log('├────────────────────┼──────────┼──────────┼──────────┼──────────┼──────────┼──────────┤');
for (const r of results) {
  const w = `${r.unitsWithWriting}/${r.units}`;
  const rw = `${r.unitsWithReadWrite}/${r.units}`;
  const g = `${r.unitsWithGarden}/${r.units}`;
  const cl = `${r.unitsWithCompLearning}/${r.units}`;
  const cb = `${r.unitsWithClassicBook}/${r.units}`;
  const ep = `${r.unitsWithExtPoetry}/${r.units}`;
  console.log(`│ ${r.file.padEnd(18)} │ ${w.padStart(8)} │ ${rw.padStart(8)} │ ${g.padStart(8)} │ ${cl.padStart(8)} │ ${cb.padStart(8)} │ ${ep.padStart(8)} │`);
}
console.log('└────────────────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────┘');

// ── JH-specific: Author coverage ──
console.log('\n── JUNIOR HIGH: AUTHOR & TYPE FLAGS ────────────────────────────────────');
const jhFiles = results.filter(r => r.band === 'juniorHigh');
if (jhFiles.length > 0) {
  console.log('┌────────────────────┬──────────┬──────────┬──────────┬──────────┬──────────┐');
  console.log('│ File               │ Author   │ AuthBio  │ SelfRead │Classical │ Poetry   │');
  console.log('├────────────────────┼──────────┼──────────┼──────────┼──────────┼──────────┤');
  for (const r of jhFiles) {
    console.log(`│ ${r.file.padEnd(18)} │ ${(r.lessonsWithAuthor+'/'+r.totalLessons).padStart(8)} │ ${(r.lessonsWithAuthorBio+'/'+r.totalLessons).padStart(8)} │ ${String(r.selfReadCount).padStart(8)} │ ${String(r.classicalCount).padStart(8)} │ ${String(r.poetryCount).padStart(8)} │`);
  }
  console.log('└────────────────────┴──────────┴──────────┴──────────┴──────────┴──────────┘');
}

// ── Issues ──
if (issues.length > 0) {
  console.log('\n── ISSUES & WARNINGS ───────────────────────────────────────────────────');
  for (const iss of issues) console.log('  ' + iss);
}

console.log('\n══════════════════════════════════════════════════════════════════════════');
console.log('  AUDIT COMPLETE');
console.log('══════════════════════════════════════════════════════════════════════════\n');
