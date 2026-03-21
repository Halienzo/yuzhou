/**
 * gen_xcsc_explains.js
 * Generates missing explain + examPoint fields for xcsc_data.js
 * Run: node build/gen_xcsc_explains.js
 * Idempotent — won't overwrite existing fields.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const file = path.resolve(__dirname, '..', 'xcsc_data.js');
const src = fs.readFileSync(file, 'utf8');

// Load data via vm sandbox (handles mixed quote styles safely)
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(src, sandbox);
const DATA = sandbox.window.XCSC_DATA;
if (!DATA) { console.error('Could not load XCSC_DATA'); process.exit(1); }

let addedExplain = 0, addedExamPoint = 0, skippedExplain = 0;

// ExamPoint inference map
const EP_MAP = {
  choice: '选择题', readingChoice: '阅读选择', multiChoice: '多选题',
  judgement: '判断题', fillBlank: '填空题', pinyinWrite: '看拼音写词语',
  fillChar: '填字', poemFill: '古诗填空', translate: '翻译',
  matching: '连线题', matchPair: '搭配题', sentenceTransform: '句子改写',
  sentenceEdit: '修改病句', punctuation: '标点符号', wordExplain: '词语释义',
  readingQA: '阅读理解', readingGroup: '阅读理解', openEnded: '开放题',
  composition: '作文', oralExpr: '口语表达', kouyu: '口语交际'
};
const EP_EN_MAP = {
  choice: 'Choice', readingChoice: 'Reading Choice', multiChoice: 'Multi-choice',
  judgement: 'True/False', fillBlank: 'Fill in the Blank', pinyinWrite: 'Pinyin to Characters',
  fillChar: 'Fill Character', poemFill: 'Poem Fill', translate: 'Translation',
  matching: 'Matching', matchPair: 'Pair Matching', sentenceTransform: 'Sentence Transform',
  sentenceEdit: 'Sentence Correction', punctuation: 'Punctuation', wordExplain: 'Word Definition',
  readingQA: 'Reading Comprehension', readingGroup: 'Reading Comprehension', openEnded: 'Open-ended',
  composition: 'Composition', oralExpr: 'Oral Expression', kouyu: 'Oral Communication'
};

function genExplain(q) {
  const t = q.type;
  if ((t === 'choice' || t === 'readingChoice' || t === 'multiChoice') && q.options) {
    if (t === 'multiChoice' && Array.isArray(q.answer)) {
      return '正确答案为' + q.answer.map(i => String.fromCharCode(65 + i) + '.' + (q.options[i] || '')).join('、') + '。';
    }
    if (typeof q.answer === 'number' && q.options[q.answer]) {
      return '正确答案为' + String.fromCharCode(65 + q.answer) + '「' + q.options[q.answer] + '」。';
    }
  }
  if (t === 'judgement') {
    const cv = (q.answer === true || q.answer === 1 || q.answer === 'true' || q.answerText === '对' || q.answerText === '√');
    return cv ? '此题判断为"对"。' : '此题判断为"错"。';
  }
  if ((t === 'fillBlank' || t === 'fillChar') && q.answerText) return '参考答案：' + q.answerText + '。';
  if (t === 'poemFill' && q.answerText) return '应填写：' + q.answerText + '。注意古诗词的准确背诵。';
  if (t === 'translate' && q.answerText) return '参考译文：' + q.answerText;
  if (t === 'pinyinWrite' && q.answerText) return '正确写法：' + q.answerText + '。注意字形的准确书写。';
  if (t === 'sentenceTransform' && q.answerText) return '改写后：' + q.answerText;
  if (t === 'sentenceEdit' && q.answerText) return '修改后：' + q.answerText;
  if (t === 'wordExplain' && q.answerText) return '释义：' + q.answerText;
  if (t === 'punctuation' && q.answerText) return '正确标点：' + q.answerText;
  if (t === 'matching' && q.answerText) return '正确搭配：' + q.answerText;
  if (t === 'matchPair' && q.answerText) return '正确搭配：' + q.answerText;
  return null;
}

function genExplainEn(q) {
  const t = q.type;
  if ((t === 'choice' || t === 'readingChoice' || t === 'multiChoice') && q.options) {
    if (t === 'multiChoice' && Array.isArray(q.answer)) return 'Correct answers: ' + q.answer.map(i => String.fromCharCode(65 + i)).join(', ') + '.';
    if (typeof q.answer === 'number') {
      const en = (q.optionsEn || [])[q.answer] || '';
      return 'Correct answer: ' + String.fromCharCode(65 + q.answer) + (en ? ' "' + en + '"' : '') + '.';
    }
  }
  if (t === 'judgement') {
    const cv = (q.answer === true || q.answer === 1 || q.answer === 'true' || q.answerText === '对' || q.answerText === '√');
    return cv ? 'This statement is TRUE.' : 'This statement is FALSE.';
  }
  if (t === 'pinyinWrite') return 'Write the correct characters: ' + (q.answerTextEn || q.answerText || '') + '.';
  if (t === 'poemFill') return 'Fill in the poem: ' + (q.answerTextEn || q.answerText || '') + '.';
  if (t === 'translate') return 'Reference translation: ' + (q.answerTextEn || q.answerText || '') + '.';
  if ((t === 'fillBlank' || t === 'fillChar') && q.answerText) return 'Answer: ' + (q.answerTextEn || q.answerText) + '.';
  if (t === 'sentenceTransform') return 'Rewritten: ' + (q.answerTextEn || q.answerText || '') + '.';
  if (t === 'sentenceEdit') return 'Corrected: ' + (q.answerTextEn || q.answerText || '') + '.';
  if (t === 'wordExplain') return 'Definition: ' + (q.answerTextEn || q.answerText || '') + '.';
  if (t === 'punctuation') return 'Correct punctuation: ' + (q.answerTextEn || q.answerText || '') + '.';
  if (t === 'matching' || t === 'matchPair') return 'Correct match: ' + (q.answerTextEn || q.answerText || '') + '.';
  return null;
}

function processQuestion(q) {
  if (!q.examPoint) {
    q.examPoint = EP_MAP[q.type] || q.type;
    if (!q.examPointEn) q.examPointEn = EP_EN_MAP[q.type] || q.type;
    addedExamPoint++;
  }
  if (!q.explain) {
    const expl = genExplain(q);
    if (expl) {
      q.explain = expl;
      const en = genExplainEn(q);
      if (en && !q.explainEn) q.explainEn = en;
      addedExplain++;
    } else {
      skippedExplain++;
    }
  }
  if (q.type === 'readingGroup' && q.subQuestions) {
    q.subQuestions.forEach(sq => processQuestion(sq));
  }
}

DATA.papers.forEach(paper => {
  (paper.sections || []).forEach(sec => {
    (sec.questions || []).forEach(q => processQuestion(q));
  });
});

// Write back — preserve header comment
const headerEnd = src.indexOf('window.XCSC_DATA');
const header = headerEnd > 0 ? src.substring(0, headerEnd) : '';
const output = header + 'window.XCSC_DATA = ' + JSON.stringify(DATA, null, 2) + ';\n';
fs.writeFileSync(file, output, 'utf8');
console.log(`[gen-explains] Added ${addedExplain} explain fields, ${addedExamPoint} examPoint fields`);
console.log(`[gen-explains] Skipped ${skippedExplain} questions (non-gradeable / no answer)`);
console.log(`[gen-explains] File: ${file} (${(Buffer.byteLength(output)/1024).toFixed(1)} KB)`);
