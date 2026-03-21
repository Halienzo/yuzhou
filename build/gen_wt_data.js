/**
 * gen_wt_data.js — Generate Writing Technique Annotation Data
 *
 * Reads textbook_g*s*.js files and produces wt_g*s*.js annotation files.
 *
 * Usage:
 *   node build/gen_wt_data.js [grade] [semester]
 *   e.g. node build/gen_wt_data.js 7 1
 *
 * Without arguments, generates a template for all grades/semesters.
 * The actual annotation content should be filled in by a human or AI reviewer.
 *
 * Output format (wt_g7s1.js):
 *   window.WT_G7S1 = [
 *     {
 *       lessonId: "春",
 *       annotations: [
 *         { para: 0, start: 0, end: 7, text: "盼望着，盼望着",
 *           tech: "反复", cat: "A",
 *           cn: "连用两个\"盼望着\"，强化期盼春天的急切心情",
 *           en: "Repeating \"longing\" intensifies anticipation" }
 *       ]
 *     }
 *   ];
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Technique taxonomy
const WT_TECH_MAP = {
  '比喻':'A','拟人':'A','夸张':'A','排比':'A','对偶':'A','反复':'A','设问':'A','反问':'A','引用':'A','反语':'A','通感':'A','双关':'A','借代':'A','互文':'A',
  '语言描写':'B','动作描写':'B','心理描写':'B','外貌描写':'B','神态描写':'B','环境描写':'B','细节描写':'B','感官描写':'B','白描':'B','正面描写':'B','侧面描写':'B',
  '对比':'C','衬托':'C','烘托':'C','象征':'C','借景抒情':'C','托物言志':'C','以小见大':'C','先抑后扬':'C','讽刺':'C','情景交融':'C',
  '铺垫':'D','照应':'D','承上启下':'D','悬念':'D','伏笔':'D','倒叙':'D','插叙':'D','首尾呼应':'D','层递':'D','线索':'D','点题':'D','总括':'D',
  '叙述':'E','描写':'E','说明':'E','议论':'E','抒情':'E',
  '动静结合':'F','虚实结合':'F','色彩描写':'F','移步换景':'F','远近结合':'F',
  '举例论证':'G','比喻论证':'G','对比论证':'G','引用论证':'G','类比论证':'G','举例子':'G','列数字':'G','作比较':'G','打比方':'G','下定义':'G',
  '用典':'H','炼字':'H','意象':'H','骈偶':'H'
};

function loadTextbook(g, s) {
  const filePath = path.join(__dirname, '..', `textbook_g${g}s${s}.js`);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return null;
  }
  const code = fs.readFileSync(filePath, 'utf8');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  // Textbook files use `var TB_G*S* = ...` (global in browser, local in vm)
  const varName = `TB_G${g}S${s}`;
  return ctx.window[varName] || ctx[varName] || null;
}

function flattenLessons(tbData) {
  if (!tbData || !tbData.units) return [];
  const lessons = [];
  tbData.units.forEach(u => {
    if (u.lessons) lessons.push(...u.lessons);
  });
  return lessons;
}

function generateTemplate(g, s) {
  const tb = loadTextbook(g, s);
  if (!tb) return null;
  const lessons = flattenLessons(tb);
  const result = lessons.map(l => ({
    lessonId: l.title || '',
    annotations: []  // To be filled with actual annotations
  }));
  return result;
}

function validateAnnotations(wtData, tbData) {
  if (!wtData || !tbData) return { valid: true, errors: [] };
  const lessons = flattenLessons(tbData);
  const errors = [];

  wtData.forEach(wt => {
    const lesson = lessons.find(l => l.title === wt.lessonId);
    if (!lesson) {
      errors.push(`Lesson "${wt.lessonId}" not found in textbook`);
      return;
    }
    (wt.annotations || []).forEach((ann, i) => {
      // Validate para index
      if (ann.para < 0 || ann.para >= lesson.text.length) {
        errors.push(`${wt.lessonId} ann[${i}]: para ${ann.para} out of range (0-${lesson.text.length - 1})`);
        return;
      }
      // Validate text match
      const actual = lesson.text[ann.para].substring(ann.start, ann.end);
      if (actual !== ann.text) {
        errors.push(`${wt.lessonId} ann[${i}]: text mismatch at para ${ann.para}[${ann.start}:${ann.end}] expected "${ann.text}" got "${actual}"`);
      }
      // Validate category
      if (!WT_TECH_MAP[ann.tech]) {
        errors.push(`${wt.lessonId} ann[${i}]: unknown technique "${ann.tech}"`);
      } else if (WT_TECH_MAP[ann.tech] !== ann.cat) {
        errors.push(`${wt.lessonId} ann[${i}]: cat should be "${WT_TECH_MAP[ann.tech]}" for "${ann.tech}", got "${ann.cat}"`);
      }
    });
  });

  return { valid: errors.length === 0, errors };
}

function writeWtFile(g, s, data) {
  const varName = `WT_G${g}S${s}`;
  const filePath = path.join(__dirname, '..', `wt_g${g}s${s}.js`);
  const content = `window.${varName} = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Written: ${filePath} (${data.length} lessons)`);
}

// Main
const args = process.argv.slice(2);
const grades = args[0] ? [parseInt(args[0])] : [1,2,3,4,5,6,7,8,9];
const semesters = args[1] ? [parseInt(args[1])] : [1,2];

let totalLessons = 0;
grades.forEach(g => {
  semesters.forEach(s => {
    const template = generateTemplate(g, s);
    if (!template) return;
    totalLessons += template.length;

    const outPath = path.join(__dirname, '..', `wt_g${g}s${s}.js`);
    if (fs.existsSync(outPath)) {
      // Validate existing file
      const code = fs.readFileSync(outPath, 'utf8');
      const ctx = { window: {} };
      vm.createContext(ctx);
      try {
        vm.runInContext(code, ctx);
        const existing = ctx.window[`WT_G${g}S${s}`];
        if (existing) {
          const tb = loadTextbook(g, s);
          const result = validateAnnotations(existing, tb);
          if (result.valid) {
            console.log(`G${g}S${s}: VALID (${existing.length} lessons, ${existing.reduce((n, l) => n + (l.annotations || []).length, 0)} annotations)`);
          } else {
            console.log(`G${g}S${s}: ${result.errors.length} ERRORS:`);
            result.errors.forEach(e => console.log(`  - ${e}`));
          }
          return;
        }
      } catch (e) {
        console.warn(`G${g}S${s}: Parse error in existing file: ${e.message}`);
      }
    }

    // Write template
    writeWtFile(g, s, template);
  });
});

console.log(`\nTotal: ${totalLessons} lessons across ${grades.length * semesters.length} files`);
console.log('Templates written. Fill in annotations[] for each lesson.');
