/**
 * Add difficulty ratings to ALL textbook lessons (G1-G9)
 * Run: node build/enrich_all_difficulty.js
 *
 * Difficulty scale: 1-5
 * - G1: 1-2, G2: 1-2, G3: 2-3, G4: 2-3
 * - G5: 3-4, G6: 3-4, G7: 3-5, G8: 4-5, G9: 4-5
 * Within each grade, increases slightly with unit position
 */
const fs = require('fs');

// Grade difficulty ranges [min, max]
const GRADE_DIFF = {
  1: [1, 2], 2: [1, 2], 3: [2, 3], 4: [2, 3],
  5: [3, 4], 6: [3, 4], 7: [3, 5], 8: [4, 5], 9: [4, 5]
};

function processFile(filename, grade, semester) {
  const filepath = filename;
  if (!fs.existsSync(filepath)) {
    console.log('SKIP (not found):', filepath);
    return;
  }
  let code = fs.readFileSync(filepath, 'utf8');

  const [minD, maxD] = GRADE_DIFF[grade];

  // Find all lesson titles — two patterns:
  // G1-G6: {id:N,title:"...",titleEn:"...",
  // G7-G9: title: "...",\n          titleEn: "...",

  // Match all title/titleEn patterns across all formats
  // G1-G2: title:"...",titleEn:"...",
  // G3-G6: id: N, title: "...", titleEn: "...",
  // G7-G9: title: "...",\n  titleEn: "...",
  const titlePat = /title:\s*"([^"]+)",\s*(?:\n\s+)?titleEn:\s*"[^"]+",/g;

  let matches = [];
  let m;
  while ((m = titlePat.exec(code)) !== null) {
    matches.push({ idx: m.index, full: m[0], title: m[1] });
  }

  // Sort by position in file
  matches.sort((a, b) => a.idx - b.idx);

  // Filter to only content lessons (skip unit headers, garden sections, etc.)
  // Content lessons have text: [...] before the next title: appears
  const contentLessons = matches.filter((mt, i) => {
    const start = mt.idx + mt.full.length;
    const end = i < matches.length - 1 ? matches[i + 1].idx : code.length;
    const between = code.slice(start, Math.min(end, start + 5000));
    return /text\s*:\s*\[/.test(between);
  });

  if (contentLessons.length === 0) {
    console.log('SKIP (no content lessons):', filepath);
    return;
  }

  // Assign difficulty — spread across min-max based on lesson position
  let insertCount = 0;
  // Process in reverse to not mess up indices
  for (let i = contentLessons.length - 1; i >= 0; i--) {
    const lesson = contentLessons[i];
    const progress = contentLessons.length > 1 ? i / (contentLessons.length - 1) : 0;
    const diff = Math.round(minD + progress * (maxD - minD));

    // Find where to insert — after the titleEn line
    const afterMatch = code.slice(lesson.idx + lesson.full.length);

    // For G1-G6: insert right after the titleEn match (which is part of the same line)
    // We need to insert before the next field (text:, author:, etc.)
    const nextFieldMatch = afterMatch.match(/\n(\s+)/);
    if (!nextFieldMatch) continue;

    const insertPos = lesson.idx + lesson.full.length;
    const indent = nextFieldMatch[1];

    // Check if difficulty already present nearby
    const nearbyText = code.slice(insertPos, insertPos + 100);
    if (nearbyText.includes('difficulty:')) continue;

    code = code.slice(0, insertPos) + '\n' + indent + 'difficulty: ' + diff + ',' + code.slice(insertPos);
    insertCount++;
  }

  fs.writeFileSync(filepath, code, 'utf8');
  console.log('OK:', filepath, '— added difficulty to', insertCount, 'lessons');
}

// Process all files
for (let g = 1; g <= 9; g++) {
  for (let s = 1; s <= 2; s++) {
    processFile('textbook_g' + g + 's' + s + '.js', g, s);
  }
}
