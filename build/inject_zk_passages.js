/**
 * inject_zk_passages.js
 *
 * Injects reading passages into readingGroup questions in zhongkao_data.js.
 *
 * Strategy:
 * 1. Extract passage text from stems where embedded (section header + passage pattern)
 * 2. Apply overrides from _batch_zk_data.json
 * 3. Copy passages from question sections to answer section duplicates
 * 4. Add English translations for all passages
 */
var fs = require('fs');
var path = require('path');

var ZK_PATH = path.join(__dirname, '..', 'zhongkao_data.js');

// Read and parse
var src = fs.readFileSync(ZK_PATH, 'utf8');
var commentMatch = src.match(/^(\/\*[\s\S]*?\*\/\s*)/);
var commentBlock = commentMatch ? commentMatch[1] : '';
var jsonStr = src.replace(/^\/\*[\s\S]*?\*\/\s*/, '').replace(/^window\.ZK_DATA\s*=\s*/, '').replace(/;\s*$/, '');
var data = JSON.parse(jsonStr);

// Load batch override data
var batchPath = path.join(__dirname, '_batch_zk_data.json');
var batch = {};
if (fs.existsSync(batchPath)) {
  batch = JSON.parse(fs.readFileSync(batchPath, 'utf8'));
}

// Load English translations
var enPath = path.join(__dirname, '_batch_zk_en.json');
var enData = {};
if (fs.existsSync(enPath)) {
  enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
}

var applied = 0;

data.papers.forEach(function(paper) {
  var paperId = paper.id;

  // Phase 1: Extract passages from stems and apply batch overrides
  paper.sections.forEach(function(sec) {
    sec.questions.forEach(function(q) {
      if (q.type !== 'readingGroup') return;
      if (q.passage && q.passage.length > 20) return; // Already has passage

      var key = String(q.num);

      // Check batch override first
      if (batch[paperId] && batch[paperId][key]) {
        var fix = batch[paperId][key];
        if (fix.passage && fix.passage.length > 10) {
          q.passage = fix.passage;
          if (fix.passageEn) q.passageEn = fix.passageEn;
          applied++;
          return;
        }
      }

      // Try to extract passage from stem
      var stem = q.stem || '';
      if (stem.length < 50) return; // Too short, skip

      var passage = extractPassageFromStem(stem);
      if (passage && passage.length > 30) {
        q.passage = passage;
        applied++;
      }
    });
  });

  // Phase 2: Copy passages from question sections to answer section duplicates
  // Build a map of num -> passage from sections that have them
  var passageMap = {};
  paper.sections.forEach(function(sec) {
    sec.questions.forEach(function(q) {
      if (q.type === 'readingGroup' && q.passage && q.passage.length > 20) {
        var key = String(q.num);
        if (!passageMap[key]) {
          passageMap[key] = { passage: q.passage, passageEn: q.passageEn || '' };
        }
      }
    });
  });

  // Apply to any readingGroup without passage
  paper.sections.forEach(function(sec) {
    sec.questions.forEach(function(q) {
      if (q.type === 'readingGroup' && !(q.passage && q.passage.length > 20)) {
        var key = String(q.num);
        if (passageMap[key]) {
          q.passage = passageMap[key].passage;
          if (passageMap[key].passageEn) q.passageEn = passageMap[key].passageEn;
          applied++;
        }
      }
    });
  });

  // Phase 3: Apply English translations from en data
  if (enData[paperId]) {
    paper.sections.forEach(function(sec) {
      sec.questions.forEach(function(q) {
        if (q.type === 'readingGroup' && q.passage && q.passage.length > 20) {
          var key = String(q.num);
          if (enData[paperId][key] && enData[paperId][key].passageEn) {
            q.passageEn = enData[paperId][key].passageEn;
          }
        }
      });
    });
  }
});

/**
 * Extract the passage text from a readingGroup stem.
 * The stem typically contains:
 * [question text]\n[section header like (二)阅读...]\n[passage text]
 */
function extractPassageFromStem(stem) {
  // Pattern 1: Section header like （二）阅读 or (二)阅读
  var match = stem.match(/\n\s*([\(\uff08][\u4e00-\u9fff\d]+[\)\uff09]\s*\u9605\u8bfb[\s\S]*)/);
  if (match) return match[1].trim();

  // Pattern 2: Section header + newline
  match = stem.match(/\n\s*([\(\uff08][\u4e00-\u9fff\d]+[\)\uff09]\n[\s\S]{20,})/);
  if (match) return match[1].trim();

  // Pattern 3: 阅读【甲】【乙】 or 阅读下面
  match = stem.match(/\n\s*(\u9605\u8bfb[\s\S]{10,})/);
  if (match) return match[1].trim();

  // Pattern 4: Content starts with 【 markers (link materials)
  match = stem.match(/\n\s*(\u3010[\u94fe\u63a5\u6750\u6599][\s\S]{20,})/);
  if (match) return match[1].trim();

  // Pattern 5: 【材料 patterns
  match = stem.match(/\n\s*(\u3010\u6750\u6599[\s\S]{20,})/);
  if (match) return match[1].trim();

  return null;
}

// Write back
var output = commentBlock + 'window.ZK_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync(ZK_PATH, output, 'utf8');
console.log('Applied ' + applied + ' passage updates total.');
console.log('Now run _check_zk_missing.js to verify.');
