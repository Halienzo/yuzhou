/**
 * auto_wt_annotate.js — Automatically generate writing technique annotations
 * by pattern-matching Chinese rhetorical devices in lesson texts.
 *
 * Usage: node build/auto_wt_annotate.js [g1s2] [--write]
 * Without --write, outputs to stdout for review.
 * With --write, writes directly to wt_g*s*.js files.
 */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const args = process.argv.slice(2);
const writeMode = args.includes('--write');
const targets = args.filter(a => a !== '--write');

function loadTB(g, s) {
  const f = path.join(__dirname, '..', `textbook_g${g}s${s}.js`);
  if (!fs.existsSync(f)) return null;
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(f, 'utf8'), ctx);
  return ctx[`TB_G${g}S${s}`] || ctx.window[`TB_G${g}S${s}`];
}

function flattenLessons(tb) {
  if (!tb || !tb.units) return [];
  const out = [];
  tb.units.forEach(u => { if (u.lessons) out.push(...u.lessons); });
  return out;
}

// ─── Pattern-based technique detectors ───
// Each returns array of {start, end, text, tech, cat, cn, en}

function findBiyu(text) {
  // 比喻: 像X, 如X, 似X, 仿佛X, 犹如X, 好像X, 宛如X, 好似X
  const results = [];
  const re = /(像|如同|犹如|好像|仿佛|宛如|好似)([^，。；！？、\n\u201d"]{2,12})/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const kw = m[1];
    // Avoid 像样, 像话, 像是
    if (kw === '像' && /^(样|话|是|往常|以前|平时|平常|过去|原来)/.test(m[2])) continue;
    // Avoid 好像 followed by verb of cognition (not a simile)
    if (kw === '好像' && /^(是|有|在|要|会|能|可以|应该|已经|没有|不|知道|明白|懂|记得|忘|看见|听见|觉得|想|认为|感到)/.test(m[2])) continue;
    // Must be in a descriptive context (has concrete imagery after keyword)
    if (/^(这样|那样|什么|怎样|一样|一般|以往)/.test(m[2])) continue;
    const start = m.index;
    const fullMatch = m[0];
    const end = start + fullMatch.length;
    results.push({
      start, end, text: fullMatch, tech: '比喻', cat: 'A',
      cn: `用"${kw}"引出比喻，使描写更加形象生动`,
      en: `Simile using "${kw}" makes the description vivid`
    });
  }
  return results;
}

function findNiren(text) {
  // 拟人: common verbs/adj applied to non-human subjects
  const results = [];
  const patterns = [
    { re: /([\u4e00-\u9fff]{1,4})(偷偷[地的])/g, cn: '赋予事物人的偷偷行为', en: 'Personifies with sneaky human behavior' },
    { re: /([\u4e00-\u9fff]{1,4})(害了羞|害羞)/g, cn: '赋予事物人的害羞情态', en: 'Personifies with human shyness' },
    { re: /([\u4e00-\u9fff]{1,6})(唱着歌|在歌唱|在欢笑|笑了|哭了|跳着舞)/g, cn: '赋予事物人的情感动作', en: 'Personifies with human emotional actions' },
    { re: /([\u4e00-\u9fff]{1,4})(卧着|睡着|醒来|苏醒|低着头|抬起头|点头|招手)/g, cn: '赋予事物人的动作姿态', en: 'Personifies with human postures' },
  ];
  for (const p of patterns) {
    let m;
    while ((m = p.re.exec(text)) !== null) {
      results.push({
        start: m.index, end: m.index + m[0].length, text: m[0],
        tech: '拟人', cat: 'A', cn: p.cn, en: p.en
      });
    }
  }
  return results;
}

function findPaibi(text) {
  // 排比: X了...X了...X了 / X的...X的...X的 / repeated sentence patterns
  const results = [];
  // Pattern: 三个或以上相同结构短句 with same ending
  const re3 = /([\u4e00-\u9fff]{2,8}[，,][\u4e00-\u9fff]{2,8}[，,][\u4e00-\u9fff]{2,8})/g;
  // Check for "那么X，那么X" pattern
  const reNm = /(那么[\u4e00-\u9fff]{1,3}[，,]那么[\u4e00-\u9fff]{1,3})/g;
  let m;
  while ((m = reNm.exec(text)) !== null) {
    results.push({
      start: m.index, end: m.index + m[0].length, text: m[0],
      tech: '排比', cat: 'A',
      cn: '"那么……那么……"并列结构，增强语势',
      en: 'Parallel "so...so..." structure intensifies expression'
    });
  }
  return results;
}

function findFanfu(text) {
  // 反复: repeated phrases like "X着，X着" or "一会儿X，一会儿X"
  const results = [];
  const re1 = /([\u4e00-\u9fff]{2,4}着[，,][\u4e00-\u9fff]{2,4}着)/g;
  let m;
  while ((m = re1.exec(text)) !== null) {
    // Check if the two parts before 着 are the same
    const parts = m[0].split(/[，,]/);
    if (parts.length === 2) {
      const a = parts[0].replace(/着$/, '');
      const b = parts[1].replace(/着$/, '');
      if (a === b) {
        results.push({
          start: m.index, end: m.index + m[0].length, text: m[0],
          tech: '反复', cat: 'A',
          cn: `"${a}"重复出现，强化表达效果`,
          en: `Repeating "${a}" intensifies the expression`
        });
      }
    }
  }
  // 一会儿X，一会儿X
  const re2 = /(一会儿[\u4e00-\u9fff]{2,10}[，,]一会儿[\u4e00-\u9fff]{2,10})/g;
  while ((m = re2.exec(text)) !== null) {
    results.push({
      start: m.index, end: m.index + m[0].length, text: m[0],
      tech: '反复', cat: 'A',
      cn: '"一会儿……一会儿……"反复句式，写出变化的灵动',
      en: '"Now...now..." repetition shows dynamic changes'
    });
  }
  return results;
}

function findKuazhang(text) {
  // 夸张: 千万X, 万X, 无数X, patterns with extreme numbers
  const results = [];
  const re = /(人山人海|地动山摇|山崩地裂|天翻地覆|惊天动地|排山倒海|翻天覆地|铺天盖地|气吞山河|一望无际|漫天卷地|震耳欲聋|浩浩荡荡)/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    results.push({
      start: m.index, end: m.index + m[0].length, text: m[0],
      tech: '夸张', cat: 'A',
      cn: `"${m[0]}"夸张手法，增强气势和感染力`,
      en: `Hyperbole "${m[0]}" amplifies momentum and impact`
    });
  }
  return results;
}

function findYinyong(text) {
  // 引用: text in 「」or ""
  const results = [];
  // Proverb/quote patterns
  const re = /[\u201c"]([\u4e00-\u9fff]{4,20})[\u201d"]/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    // Only tag as 引用 if it looks like a known saying/poem
    const inner = m[1];
    if (/之计在于|不知则|温故而知新|学而不思|有朋自远方|三人行/.test(inner) ||
        /吹面不寒|春眠不觉|床前明月|举头望|锄禾日当午/.test(inner) ||
        inner.length >= 5 && /[，,]/.test(inner)) {
      results.push({
        start: m.index, end: m.index + m[0].length, text: m[0],
        tech: '引用', cat: 'A',
        cn: '引用名言或诗句，增强文章的文化底蕴',
        en: 'Quotes a well-known saying/poem, adding cultural depth'
      });
    }
  }
  return results;
}

function findShewen(text) {
  // 设问: self-answered question
  const results = [];
  const re = /([\u4e00-\u9fff]{3,20}[？?])([\u4e00-\u9fff]{2,20}[。！])/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    // Only if question is short and answer follows immediately
    if (m[1].length <= 20 && m[2].length <= 20) {
      results.push({
        start: m.index, end: m.index + m[0].length, text: m[0],
        tech: '设问', cat: 'A',
        cn: '自问自答，引起读者注意和思考',
        en: 'Rhetorical self-answered question engages the reader'
      });
    }
  }
  return results;
}

function findFanwen(text) {
  // 反问: rhetorical question (no answer, with 难道/不是/怎能/岂)
  const results = [];
  const re = /(难道|不是|怎能|怎么能|岂|何尝|哪里)([\u4e00-\u9fff，、]{3,25}[？?])/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    results.push({
      start: m.index, end: m.index + m[0].length, text: m[0],
      tech: '反问', cat: 'A',
      cn: '反问句加强语气，答案不言自明',
      en: 'Rhetorical question strengthens tone, answer is self-evident'
    });
  }
  return results;
}

function findDuibi(text) {
  // 对比: X却Y, X而Y with contrast
  // Too complex for simple regex, skip auto-detection
  return [];
}

function findHuanjing(text) {
  // 环境描写: descriptive passages about nature/setting
  const results = [];
  // Look for scenic keywords combinations
  const re = /(月光|阳光|微风|春风|秋风|细雨|大雨|暮色|晨光|夕阳|朝霞|晚霞|星光|夜色)([\u4e00-\u9fff]{4,20})/g;
  // Only tag long enough descriptive passages — skip for auto, too noisy
  return results;
}

function findDuiou(text) {
  // 对偶: balanced parallel phrases
  const results = [];
  // X对Y pattern
  const re = /([\u4e00-\u9fff]{1,4})对([\u4e00-\u9fff]{1,4})/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m[1].length === m[2].length) {
      results.push({
        start: m.index, end: m.index + m[0].length, text: m[0],
        tech: '对偶', cat: 'A',
        cn: '对偶句式，音韵和谐，结构工整',
        en: 'Antithesis with balanced structure and harmony'
      });
    }
  }
  return results;
}

// ─── Main annotation pipeline ───

function annotatePara(text, paraIdx, grade) {
  const detectors = [
    findBiyu, findNiren, findFanfu, findKuazhang,
    findYinyong, findDuiou, findPaibi
  ];
  if (grade >= 3) {
    detectors.push(findShewen, findFanwen);
  }

  let allAnns = [];
  for (const detect of detectors) {
    const anns = detect(text);
    for (const a of anns) {
      a.para = paraIdx;
      // Verify text match
      if (text.substring(a.start, a.end) === a.text) {
        allAnns.push(a);
      }
    }
  }

  // Remove overlapping annotations (keep longer ones)
  allAnns.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));
  const filtered = [];
  let lastEnd = -1;
  for (const a of allAnns) {
    if (a.start >= lastEnd) {
      filtered.push(a);
      lastEnd = a.end;
    } else if (a.end - a.start > (filtered[filtered.length - 1].end - filtered[filtered.length - 1].start)) {
      // Replace shorter with longer
      filtered[filtered.length - 1] = a;
      lastEnd = a.end;
    }
  }
  return filtered;
}

function annotateLesson(lesson, grade) {
  if (!lesson.text || lesson.text.length === 0) return [];
  const anns = [];
  lesson.text.forEach((text, pi) => {
    if (text.length < 8) return; // skip trivial lines
    const paraAnns = annotatePara(text, pi, grade);
    anns.push(...paraAnns);
  });
  return anns;
}

function processFile(g, s) {
  const tb = loadTB(g, s);
  if (!tb) { console.error(`No textbook data for G${g}S${s}`); return null; }
  const lessons = flattenLessons(tb);

  // Check if existing file has manual annotations we should preserve
  const wtPath = path.join(__dirname, '..', `wt_g${g}s${s}.js`);
  let existing = null;
  if (fs.existsSync(wtPath)) {
    const ctx2 = { window: {} };
    vm.createContext(ctx2);
    try {
      vm.runInContext(fs.readFileSync(wtPath, 'utf8'), ctx2);
      existing = ctx2.window[`WT_G${g}S${s}`];
    } catch (e) {}
  }

  const result = lessons.map(l => {
    // Preserve existing manual annotations if any
    let manualAnns = [];
    if (existing) {
      const ex = existing.find(e => e.lessonId === l.title);
      if (ex && ex.annotations && ex.annotations.length > 0) {
        manualAnns = ex.annotations;
      }
    }

    if (manualAnns.length > 0) {
      return { lessonId: l.title, annotations: manualAnns };
    }

    // Auto-generate
    const autoAnns = annotateLesson(l, parseInt(g));
    return { lessonId: l.title, annotations: autoAnns };
  });

  return result;
}

// ─── Run ───
const allKeys = targets.length > 0
  ? targets
  : ['g1s2','g2s1','g2s2','g3s1','g3s2','g4s2','g5s1','g5s2','g6s1','g6s2','g7s2','g8s1','g8s2','g9s1','g9s2'];

let totalAnns = 0;
for (const key of allKeys) {
  const m = key.match(/g(\d)s(\d)/);
  if (!m) continue;
  const [, g, s] = m;
  const data = processFile(g, s);
  if (!data) continue;

  const count = data.reduce((n, l) => n + (l.annotations || []).length, 0);
  totalAnns += count;

  if (writeMode) {
    const varName = `WT_G${g}S${s}`;
    const outPath = path.join(__dirname, '..', `wt_${key}.js`);
    const content = `window.${varName} = ${JSON.stringify(data, null, 2)};\n`;
    fs.writeFileSync(outPath, content, 'utf8');
    console.log(`${key}: Written ${data.length} lessons, ${count} annotations`);
  } else {
    console.log(`${key}: ${data.length} lessons, ${count} auto-annotations`);
    // Show sample
    data.forEach(l => {
      if (l.annotations.length > 0) {
        console.log(`  ${l.lessonId}: ${l.annotations.length} annotations`);
      }
    });
  }
}

console.log(`\nTotal: ${totalAnns} annotations`);
