/**
 * zhongkao_composition_data.js — 中考作文范文与写作指导数据
 * Bilingual (Chinese + English)
 * 18 techniques, 9 structures, 5-dimension rubric, 3 topics × 5 essays
 */
window.ZK_COMP_DATA = {
  version: 1,
  techniques: {
    shouWeiHuYing: {
      cn: '首尾呼应', en: 'Echo Opening & Closing',
      desc: '开头和结尾相互照应，使文章结构完整、主题深化',
      descEn: 'Opening and closing echo each other, creating structural unity and deepening the theme'
    },
    yiXiaoJianDa: {
      cn: '以小见大', en: 'Small Detail, Big Theme',
      desc: '通过小事件或细节揭示深刻主题',
      descEn: 'Reveal profound themes through small events or details'
    },
    xiJieMiaoXie: {
      cn: '细节描写', en: 'Vivid Details',
      desc: '对人物动作、神态、语言等进行细腻刻画',
      descEn: 'Delicate depiction of characters\' actions, expressions, and speech'
    },
    huanJingChenTuo: {
      cn: '环境衬托', en: 'Environmental Setting',
      desc: '用环境描写烘托人物心情或文章氛围',
      descEn: 'Use environmental description to set mood and atmosphere'
    },
    duiBi: {
      cn: '对比手法', en: 'Contrast',
      desc: '通过前后或正反对比突出主题',
      descEn: 'Highlight the theme through before/after or positive/negative contrasts'
    },
    daoXu: {
      cn: '倒叙', en: 'Flashback',
      desc: '先写结果或高潮，再回溯事件经过，制造悬念',
      descEn: 'Begin with the outcome or climax, then recount events to build suspense'
    },
    duiHuaQuDong: {
      cn: '对话驱动', en: 'Dialogue-Driven',
      desc: '用人物对话推动情节发展，展现性格',
      descEn: 'Use character dialogue to advance the plot and reveal personality'
    },
    xinLiMiaoXie: {
      cn: '心理描写', en: 'Inner Thoughts',
      desc: '描写人物内心活动，展现情感变化',
      descEn: 'Describe characters\' inner thoughts to show emotional changes'
    },
    biFangNiRen: {
      cn: '比喻拟人', en: 'Metaphor & Personification',
      desc: '用修辞手法使语言生动形象',
      descEn: 'Use figurative language to make expressions vivid and striking'
    },
    paiBI: {
      cn: '排比', en: 'Parallelism',
      desc: '用结构相似的句子增强语势和节奏感',
      descEn: 'Use parallel sentence structures to build momentum and rhythm'
    },
    jiaXuJiaYi: {
      cn: '夹叙夹议', en: 'Narration with Reflection',
      desc: '在叙事中穿插议论，深化文章内涵',
      descEn: 'Weave commentary into narration to deepen the piece\'s meaning'
    },
    wuGanMiaoXie: {
      cn: '五感描写', en: 'Five Senses',
      desc: '调动视觉、听觉、嗅觉、味觉、触觉丰富表达',
      descEn: 'Engage sight, sound, smell, taste, and touch for richer expression'
    },
    xuanNian: {
      cn: '设置悬念', en: 'Suspense',
      desc: '开头设疑，吸引读者继续阅读',
      descEn: 'Pose questions at the start to hook the reader\'s curiosity'
    },
    dianMianJieHe: {
      cn: '点面结合', en: 'Focus & Panorama',
      desc: '既有全景概述，又有重点细写',
      descEn: 'Combine panoramic overview with focused close-ups'
    },
    jieWuShuQing: {
      cn: '借物抒情', en: 'Symbolism',
      desc: '借助具体事物表达抽象情感',
      descEn: 'Express abstract emotions through concrete objects'
    },
    yiLunJuLi: {
      cn: '以论据支撑论点', en: 'Evidence-based Argument',
      desc: '用具体事实、数据或事例支撑中心论点，增强说服力',
      descEn: 'Support the thesis with concrete facts, data, or examples to enhance persuasiveness'
    },
    duiBiLunZheng: {
      cn: '对比论证', en: 'Contrastive Argument',
      desc: '通过正反两方面的对比来证明论点，使论证更有力',
      descEn: 'Prove the thesis by contrasting positive and negative aspects for stronger argumentation'
    },
    yinYongLunZheng: {
      cn: '引用论证', en: 'Citation-based Argument',
      desc: '引用名言、诗句、典故等增强文章的文化底蕴和说服力',
      descEn: 'Quote famous sayings, poetry, or allusions to enrich cultural depth and persuasiveness'
    }
  },
  structures: {
    zongFenZong: {
      cn: '总—分—总', en: 'General-Specific-General',
      desc: '开头总述→中间分述→结尾总结',
      descEn: 'Opening overview → detailed body → concluding summary',
      steps: ['开门见山点题','展开具体事例','总结升华主题'],
      stepsEn: ['Open with thesis statement','Develop with specific examples','Summarize and elevate the theme']
    },
    shiJianXian: {
      cn: '时间线', en: 'Chronological',
      desc: '按时间顺序叙述事件发展',
      descEn: 'Narrate events in time order',
      steps: ['交代时间背景','按序展开情节','结尾收束感悟'],
      stepsEn: ['Establish time and setting','Unfold events sequentially','End with reflection']
    },
    daoXuShi: {
      cn: '倒叙式', en: 'Flashback',
      desc: '先写结果→回忆经过→回到现实',
      descEn: 'Start with outcome → recall events → return to present',
      steps: ['设置悬念/结果','回溯事件经过','回到现实感悟'],
      stepsEn: ['Create suspense with the ending','Recount the journey','Return to present with insight']
    },
    diJinShi: {
      cn: '递进式', en: 'Progressive',
      desc: '层层深入，逐步升华',
      descEn: 'Layer by layer, gradually deepening',
      steps: ['引入初步认识','深入体验理解','升华到人生感悟'],
      stepsEn: ['Introduce initial understanding','Deepen through experience','Elevate to life insight']
    },
    bingLieShi: {
      cn: '并列式', en: 'Parallel',
      desc: '围绕主题列举多个事例',
      descEn: 'Present multiple examples around the theme',
      steps: ['开篇点题','事例一/二/三','归纳总结'],
      stepsEn: ['Open with thesis','Example 1 / 2 / 3','Summarize and conclude']
    },
    pianDuanZuHe: {
      cn: '片段组合', en: 'Montage',
      desc: '用多个独立片段组合成文',
      descEn: 'Combine independent vignettes into a whole',
      steps: ['总起引出主题','片段一→片段二→片段三','呼应开头收束'],
      stepsEn: ['Introduce the theme','Vignette 1 → 2 → 3','Echo opening to close']
    },
    qiChengZhuanHe: {
      cn: '起承转合', en: 'Four-Part Structure',
      desc: '传统四段式结构',
      descEn: 'Traditional intro-develop-turn-conclude',
      steps: ['起：引出话题','承：展开叙述','转：情节转折','合：总结感悟'],
      stepsEn: ['Introduce the topic','Develop the narrative','Plot twist','Conclude with insight']
    },
    lunDianLunJuJieLun: {
      cn: '论点—论据—结论', en: 'Thesis-Evidence-Conclusion',
      desc: '议论文经典结构，提出论点后用论据证明',
      descEn: 'Classic argumentative structure: state thesis, prove with evidence, conclude',
      steps: ['提出中心论点','列举事实/道理论据','得出结论，总结全文'],
      stepsEn: ['Present central thesis','List factual/logical evidence','Draw conclusion, summarize']
    },
    wenTiJieJue: {
      cn: '问题—分析—解决', en: 'Problem-Analysis-Solution',
      desc: '提出问题，分析原因，给出解决方案',
      descEn: 'Raise a problem, analyze causes, offer solutions',
      steps: ['提出问题/现象','分析原因/影响','提出解决方案/呼吁行动'],
      stepsEn: ['Raise the problem/phenomenon','Analyze causes/effects','Propose solutions/call to action']
    }
  },
  rubric: {
    dimensions: [
      {
        id: 'content', name: '内容', nameEn: 'Content', weight: 30,
        levels: [
          { score: 5, label: '优秀', labelEn: 'Excellent', desc: '选材新颖，内容具体充实，中心突出', descEn: 'Fresh topic, rich content, prominent theme' },
          { score: 4, label: '良好', labelEn: 'Good', desc: '内容较具体，中心明确', descEn: 'Specific content, clear theme' },
          { score: 3, label: '合格', labelEn: 'Adequate', desc: '内容基本完整，中心基本明确', descEn: 'Basically complete, generally clear' },
          { score: 2, label: '待提高', labelEn: 'Needs Work', desc: '内容空洞或偏题', descEn: 'Hollow or off-topic' },
          { score: 1, label: '不足', labelEn: 'Insufficient', desc: '严重偏题或内容极少', descEn: 'Severely off-topic or minimal' }
        ]
      },
      {
        id: 'structure', name: '结构', nameEn: 'Structure', weight: 20,
        levels: [
          { score: 5, label: '优秀', labelEn: 'Excellent', desc: '结构严谨，层次清晰，过渡自然', descEn: 'Rigorous structure, clear layers, natural transitions' },
          { score: 4, label: '良好', labelEn: 'Good', desc: '结构较完整，层次较清楚', descEn: 'Fairly complete structure' },
          { score: 3, label: '合格', labelEn: 'Adequate', desc: '有基本结构，层次尚可', descEn: 'Basic structure, passable layers' },
          { score: 2, label: '待提高', labelEn: 'Needs Work', desc: '结构混乱，缺少层次', descEn: 'Chaotic, lacking layers' },
          { score: 1, label: '不足', labelEn: 'Insufficient', desc: '无明显结构', descEn: 'No apparent structure' }
        ]
      },
      {
        id: 'language', name: '语言', nameEn: 'Language', weight: 25,
        levels: [
          { score: 5, label: '优秀', labelEn: 'Excellent', desc: '语句通顺优美，善用修辞，有文采', descEn: 'Smooth, elegant, skillful rhetoric' },
          { score: 4, label: '良好', labelEn: 'Good', desc: '语句通顺，偶有佳句', descEn: 'Smooth sentences, occasional gems' },
          { score: 3, label: '合格', labelEn: 'Adequate', desc: '语句基本通顺，较少病句', descEn: 'Generally smooth, few errors' },
          { score: 2, label: '待提高', labelEn: 'Needs Work', desc: '病句较多，表达不清', descEn: 'Many errors, unclear expression' },
          { score: 1, label: '不足', labelEn: 'Insufficient', desc: '语句不通，错误很多', descEn: 'Incoherent, numerous mistakes' }
        ]
      },
      {
        id: 'emotion', name: '情感', nameEn: 'Emotion', weight: 15,
        levels: [
          { score: 5, label: '优秀', labelEn: 'Excellent', desc: '真情实感，感人至深', descEn: 'Genuine feelings, deeply moving' },
          { score: 4, label: '良好', labelEn: 'Good', desc: '有真实情感流露', descEn: 'Authentic emotion' },
          { score: 3, label: '合格', labelEn: 'Adequate', desc: '有一定情感表达', descEn: 'Some emotional expression' },
          { score: 2, label: '待提高', labelEn: 'Needs Work', desc: '情感虚假或平淡', descEn: 'Fake or flat emotion' },
          { score: 1, label: '不足', labelEn: 'Insufficient', desc: '无情感表达', descEn: 'No emotional expression' }
        ]
      },
      {
        id: 'format', name: '卷面', nameEn: 'Formatting', weight: 10,
        levels: [
          { score: 5, label: '优秀', labelEn: 'Excellent', desc: '书写工整，标点规范，卷面整洁', descEn: 'Neat handwriting, correct punctuation, clean layout' },
          { score: 4, label: '良好', labelEn: 'Good', desc: '书写较工整，基本规范', descEn: 'Fairly neat, mostly correct' },
          { score: 3, label: '合格', labelEn: 'Adequate', desc: '书写尚可，有少量涂改', descEn: 'Passable, few corrections' },
          { score: 2, label: '待提高', labelEn: 'Needs Work', desc: '字迹潦草，涂改较多', descEn: 'Messy, many corrections' },
          { score: 1, label: '不足', labelEn: 'Insufficient', desc: '难以辨认', descEn: 'Illegible' }
        ]
      }
    ]
  },
  topics: [
    {
      id: 'yn2025_comp1',
      paperId: 'yn2025',
      year: 2025,
      region: '云南省',
      prompt: '请以"这是一个好问题"为题，写一篇不少于600字的作文。',
      promptEn: 'Write an essay titled "This Is a Good Question" (at least 600 words).',
      context: '"这是一个好问题"——这句话在课堂上、生活中经常被提到。一个好问题，可以引发思考，推动探索，甚至改变人生。请结合自己的经历或感悟，写一篇作文。',
      contextEn: '"This is a good question" — we often hear this in class and in life. A good question can spark thinking, drive exploration, and even change lives. Write about your experiences or reflections.',
      type: 'fullTitle',
      category: '命题记叙文',
      categoryEn: 'Full-title Narrative',
      wordCount: 600,
      guide: {
        analysis: '本题要求以"这是一个好问题"为题，重点在于：（1）"好问题"是什么——选材要具体，写一个真实的、有价值的问题；（2）"好"在哪里——问题引发了怎样的思考、探索或成长；（3）叙事中要体现思维的深度和成长的过程。可以写课堂上的提问、生活中的困惑、对社会现象的思考等。',
        analysisEn: 'This prompt requires writing about "a good question." Key points: (1) What is the "good question" — be specific, choose a real, valuable question; (2) Why is it "good" — what thinking, exploration, or growth did it spark; (3) The narrative should show depth of thought and process of growth. Possible angles: a classroom question, life puzzlement, or reflection on social phenomena.',
        keyPoints: ['选择一个具体的、真实的"好问题"作为核心', '展现问题引发的思考过程', '体现成长或认知的变化', '叙事与议论结合，有深度'],
        keyPointsEn: ['Choose a specific, real "good question" as the core', 'Show the thinking process the question triggered', 'Reflect growth or cognitive change', 'Combine narration with reflection for depth'],
        pitfalls: ['泛泛而谈，没有具体的"问题"', '只写问题不写思考过程', '流水账式叙事，缺少深度'],
        pitfallsEn: ['Being vague without a concrete "question"', 'Only describing the question without the thinking process', 'Chronological listing without depth']
      },
      essays: [
        {
          title: '这是一个好问题',
          titleEn: 'This Is a Good Question',
          score: 38,
          maxScore: 40,
          structure: 'qiChengZhuanHe',
          techniques: ['xiJieMiaoXie', 'xinLiMiaoXie', 'shouWeiHuYing', 'jiaXuJiaYi'],
          techniqueMarks: [
            { para: 0, text: '谁能告诉我，为什么冰块放在水里会浮起来？', technique: '场景开篇', techniqueEn: 'Scene Opening', effect: '教师提问直接入题，制造课堂紧张感', effectEn: 'Drops the reader into a live classroom moment — the teacher\'s question is simultaneously a plot device and a thematic preview' },
            { para: 1, text: '心里默默祈祷老师不要点到我的名字', technique: '心理描写', techniqueEn: 'Interior Monologue', effect: '祈祷式心理写出学生的恐惧，真实可感', effectEn: 'The prayer not to be called on — every student has lived this exact moment, creating instant empathy' },
            { para: 2, text: '所有的疑问都被我吞进了肚子里，像石子沉入水底', technique: '比喻', techniqueEn: 'Simile', effect: '石子沉水的意象将压抑好奇心具象化', effectEn: 'Swallowed pebbles — each unasked question adds invisible weight; the lake metaphor makes years of silence feel irreversible' },
            { para: 3, text: '冰明明是水变的，密度应该更大才对，为什么反而变轻了？', technique: '悬念', techniqueEn: 'Suspense', effect: '老师换角度提问激发好奇心，推动情节转折', effectEn: 'The teacher\'s rephrased question creates cognitive dissonance — "should be heavier but isn\'t" hooks the narrator and the reader simultaneously' },
            { para: 5, text: '一个声音突然从我嘴里冒了出来——是我自己举了手', technique: '细节描写', techniqueEn: 'Action Detail', effect: '手先于脑的动作写出勇气的不自觉迸发', effectEn: 'Body outpaces mind — the hand rises before conscious permission, making courage feel involuntary and therefore genuine' },
            { para: 6, text: '我的脸烫得像被火烤过一样', technique: '五感描写', techniqueEn: 'Sensory Detail', effect: '触觉描写强化说出答案后的紧张感', effectEn: 'Heat as shame made physical — the fire simile externalizes the internal burn of vulnerability' },
            { para: 7, text: '他先是愣了一下，然后露出了一个大大的笑容："这是一个好问题！"', technique: '转折', techniqueEn: 'Reversal', effect: '预期嘲笑变为肯定，情感反转推向高潮', effectEn: 'Expected ridicule transforms into affirmation — the teacher\'s pause amplifies the pivot from dread to validation' },
            { para: 8, text: '提问不是暴露无知，而是展现思考', technique: '夹叙夹议', techniqueEn: 'Narrative-Reflection Weave', effect: '一句话重新定义"提问"，核心思想自然呈现', effectEn: 'Reframes the entire essay\'s psychology: not "I might look stupid" but "I\'m showing I think" — a single sentence rewrites years of silence' },
            { para: 10, text: '这些问题像一把把钥匙，打开了一扇又一扇知识的大门', technique: '比喻', techniqueEn: 'Extended Metaphor', effect: '钥匙比喻延伸"打开"意象，写出提问的持续效应', effectEn: 'Keys multiplying doors — the metaphor extends to show that questioning is exponential: each answer reveals new locked rooms' },
            { para: 12, text: '每一个好问题的背后，都站着一个不愿停止思考的灵魂', technique: '首尾呼应', techniqueEn: 'Circular Echo', effect: '结尾从个人升华到普遍，与开头课堂场景形成闭环', effectEn: 'From one scared student in one physics class to a universal declaration about the human spirit — the essay\'s scope expands in its final breath to encompass all questioners' }
          ],
          approach: '以一堂物理课上老师的追问为切入点，通过"我"从不敢提问到主动思考的心理转变，展现"好问题"对思维成长的推动力。',
          approachEn: 'Uses a physics class where the teacher\'s probing questions serve as the entry point. Through the narrator\'s psychological shift from fearing questions to actively thinking, it shows how "good questions" propel intellectual growth.',
          architecture: '起：物理课上老师抛出问题，引出"好问题"的概念；承：回忆自己过去害怕提问的经历；转：一次课堂讨论中，自己的提问得到老师"这是一个好问题"的肯定；合：感悟好问题的力量，升华主题。',
          architectureEn: 'Introduction: Teacher poses a question in physics class, introducing the concept of "good questions." Development: Recall past fear of asking questions. Turn: During a class discussion, the narrator\'s question receives the teacher\'s affirmation "This is a good question." Conclusion: Reflect on the power of good questions, elevate the theme.',
          logic: '由"不敢问"到"尝试问"再到"善于问"，三层递进展现思维成长的逻辑线索。',
          logicEn: 'Three progressive layers: "afraid to ask" → "trying to ask" → "skilled at asking," showing the logical thread of intellectual growth.',
          skills: ['开头用场景描写迅速代入', '心理活动细腻真实', '结尾与开头形成呼应，首尾圆合', '议论点到为止，不说教'],
          skillsEn: ['Opening scene description for immediate immersion', 'Realistic and nuanced inner thoughts', 'Ending echoes the opening for structural closure', 'Commentary is restrained, never preachy'],
          fullText: '　　"同学们，谁能告诉我，为什么冰块放在水里会浮起来？"物理老师推了推眼镜，环视教室。\n\n　　教室里安静得只听见空调嗡嗡作响。我低下头，盯着课本上的插图，心里默默祈祷老师不要点到我的名字。\n\n　　说来惭愧，从小学到初中，我几乎没有在课堂上主动举过手。不是不好奇，而是害怕——害怕问出的问题太简单被同学嘲笑，害怕答案太明显显得自己愚笨。于是，所有的疑问都被我吞进了肚子里，像石子沉入水底，再也没有浮上来。\n\n　　"没人回答？那我换个问法——"老师在黑板上画了一个大大的问号，"你们有没有想过，冰明明是水变的，密度应该更大才对，为什么反而变轻了？"\n\n　　我的心微微一动。对呀，固体不是应该比液体更重吗？金属熔化后不就是液态金属吗？那为什么水这么特殊？\n\n　　"老师，"一个声音突然从我嘴里冒了出来——是我自己举了手，"是不是因为水在结冰的时候，分子排列方式变了，中间的空隙变大了，所以密度反而变小了？"\n\n　　话一出口，我就后悔了。教室里几十双眼睛齐刷刷地转向我，我的脸烫得像被火烤过一样。\n\n　　然而，老师的反应出乎我的意料。他先是愣了一下，然后露出了一个大大的笑容："这是一个好问题！"他走到我面前，"你不但回答了我的问题，还提出了一个更深层的思考——为什么水是例外？这正是科学思维的起点。"\n\n　　那一刻，我感觉心里有什么东西被点亮了。原来，提问不是暴露无知，而是展现思考；一个好问题，不是要有标准答案，而是要能打开新的视角。\n\n　　从那以后，我开始试着在课堂上提问。有时候问题确实幼稚，同学们会善意地笑笑；有时候问题刚好切中要害，老师会连连点头。渐渐地，我发现提问不仅帮助我理解了知识，更让我学会了用批判的眼光看待世界。\n\n　　"为什么鲁迅要用这个比喻？""这道数学题有没有更简便的解法？""历史上这个决策真的是最优选择吗？"——这些问题像一把把钥匙，打开了一扇又一扇知识的大门。\n\n　　我终于明白，"这是一个好问题"这句话的分量。它不仅是老师对学生的鼓励，更是对思维品质的肯定。一个好问题，是好奇心的表达，是思考力的体现，是成长的起点。\n\n　　如今，当我再听到有人说"这是一个好问题"时，我不再紧张，而是会心一笑。因为我知道，每一个好问题的背后，都站着一个不愿停止思考的灵魂。',
          fullTextEn: '　　"Class, who can tell me why ice cubes float in water?" The physics teacher pushed up his glasses and scanned the room.\n\n　　The classroom was so quiet you could only hear the air conditioner humming. I lowered my head, staring at the textbook illustration, silently praying the teacher wouldn\'t call my name.\n\n　　Frankly speaking, from elementary to middle school, I had almost never raised my hand in class. Not because I wasn\'t curious, but because I was afraid — afraid that my question would be too simple and classmates would laugh, afraid the answer would be too obvious and I\'d look foolish. So all my doubts were swallowed down like pebbles sinking to the bottom of a lake, never to resurface.\n\n　　"No one? Let me rephrase—" The teacher drew a large question mark on the blackboard. "Have you ever wondered: ice is made from water, so its density should be greater, right? Why does it actually become lighter?"\n\n　　My heart stirred slightly. Yes — shouldn\'t solids be heavier than liquids? When metal melts, it becomes liquid metal. So why is water so special?\n\n　　"Teacher," a voice suddenly escaped my mouth — I had raised my hand, "Is it because when water freezes, the molecular arrangement changes, the gaps between molecules increase, so the density actually decreases?"\n\n　　The moment the words left my mouth, I regretted it. Dozens of pairs of eyes swiveled toward me, and my face burned as if scorched by fire.\n\n　　However, the teacher\'s reaction surprised me. He paused for a moment, then broke into a wide smile: "This is a good question!" He walked over to me. "You didn\'t just answer my question — you raised a deeper one: why is water the exception? This is exactly where scientific thinking begins."\n\n　　In that moment, I felt something light up inside me. It turns out that asking questions doesn\'t expose ignorance — it demonstrates thinking. A good question doesn\'t need a standard answer; it needs to open new perspectives.\n\n　　After that, I began trying to ask questions in class. Sometimes the questions were indeed naive, and classmates would laugh kindly. Sometimes they hit right on target, and teachers would nod approvingly. Gradually, I discovered that asking questions not only helped me understand knowledge but taught me to view the world with a critical eye.\n\n　　"Why did Lu Xun use this metaphor?" "Is there a simpler solution to this math problem?" "Was this historical decision really the optimal choice?" — These questions were like keys, opening door after door of knowledge.\n\n　　I finally understood the weight of the phrase "This is a good question." It\'s not just a teacher\'s encouragement — it\'s an affirmation of thinking quality. A good question is an expression of curiosity, a demonstration of thinking ability, and the starting point of growth.\n\n　　Now, when I hear someone say "This is a good question," I no longer feel nervous but smile knowingly. Because I know that behind every good question stands a soul that refuses to stop thinking.',
          highlights: [
            { text: '所有的疑问都被我吞进了肚子里，像石子沉入水底，再也没有浮上来', textEn: 'All my doubts were swallowed down like pebbles sinking to the bottom of a lake, never to resurface', why: '比喻生动，将压抑好奇心的行为具象化', whyEn: 'Curiosity as drowned stones — the metaphor makes suppression feel permanent and physical, each swallowed question adding weight to the silence' },
            { text: '我感觉心里有什么东西被点亮了', textEn: 'I felt something light up inside me', why: '心理描写简洁有力，转折点的内心变化一语中的', whyEn: 'The simplest possible description of epiphany — "something lit up" — works precisely because it doesn\'t over-specify; the reader fills in the light with their own experience' },
            { text: '每一个好问题的背后，都站着一个不愿停止思考的灵魂', textEn: 'Behind every good question stands a soul that refuses to stop thinking', why: '结尾议论升华，与标题完美呼应', whyEn: 'Personifies the question as having someone "behind" it — transforms asking from a speech act into an identity, making the questioner and the question inseparable' }
          ],
          sections: [
            { type: '开头', fn: '场景代入', fnEn: 'Scene immersion', detail: '物理课提问场景，制造课堂氛围', detailEn: 'Physics class questioning scene creates classroom atmosphere' },
            { type: '承接', fn: '回忆铺垫', fnEn: 'Retrospective setup', detail: '回忆过去害怕提问的心理', detailEn: 'Recalls past fear of asking questions' },
            { type: '转折', fn: '核心事件', fnEn: 'Core event', detail: '鼓起勇气提问，获得肯定', detailEn: 'Musters courage to ask, receives affirmation' },
            { type: '结尾', fn: '感悟升华', fnEn: 'Reflective elevation', detail: '理解"好问题"的深层含义', detailEn: 'Understands the deeper meaning of "good questions"' }
          ]
        },
        {
          title: '这是一个好问题',
          titleEn: 'This Is a Good Question',
          score: 37,
          maxScore: 40,
          structure: 'diJinShi',
          techniques: ['duiBi', 'jiaXuJiaYi', 'yiXiaoJianDa', 'yinYongLunZheng'],
          techniqueMarks: [
            { para: 0, text: '好问题就是老师在考试中出的那些难题', technique: '对比', techniqueEn: 'Contrast', effect: '先给出"错误定义"，为后文三次纠正做铺垫', effectEn: 'Plants a false premise to knock down — the essay\'s entire arc is a progressive correction of this opening misconception' },
            { para: 1, text: '如果连接AC和BD的中点，是不是可以直接用中位线定理？', technique: '细节描写', techniqueEn: 'Technical Detail', effect: '具体的数学语言增强真实性和专业感', effectEn: 'Mathematical specificity authenticates the moment — the reader believes the narrator because the geometry is real' },
            { para: 1, text: '好问题不是提出疑惑，而是提出更优的可能性', technique: '夹叙夹议', techniqueEn: 'Narrative-Reflection Weave', effect: '叙事后精准提炼第一层定义', effectEn: 'First redefinition: doubt is passive, but "better possibility" is active — questioning becomes a creative act' },
            { para: 2, text: '你觉得呢？你观察过几次？每次都下雨了吗？', technique: '对话驱动', techniqueEn: 'Dialogue as Catalyst', effect: '爷爷的连续反问构成第二层"好问题"的示范', effectEn: 'Grandfather\'s triple counter-question is itself a masterclass — he answers by teaching the boy to answer himself' },
            { para: 2, text: '读书使人充实，讨论使人机智，笔记使人准确', technique: '引用论证', techniqueEn: 'Quotation', effect: '培根名言增添论据厚度，自然过渡到"提问使人深刻"', effectEn: 'Bacon\'s triad is extended with a fourth term — "good questioning makes one profound" — piggybacks established authority to land a new insight' },
            { para: 3, text: '你是谁？', technique: '引用', techniqueEn: 'Literary Allusion', effect: '《苏菲的世界》开篇问题直击存在主义核心', effectEn: 'Sophie\'s World\'s opening question strips away all social roles — the simplest question becomes the most impossible to answer' },
            { para: 3, text: '我是学生？是儿子？是朋友？还是一个独一无二的、正在思考"我是谁"的生命？', technique: '排比', techniqueEn: 'Parallelism', effect: '排比式自问层层深入，从社会角色到存在本质', effectEn: 'Each identity peels away like an onion layer — student, son, friend — until only the recursive mystery of self-awareness remains' },
            { para: 3, text: '它不需要标准答案，却能撬动整个思维的大厦', technique: '比喻', techniqueEn: 'Metaphor', effect: '将问题比作杠杆撬动大厦，力量感极强', effectEn: 'The lever metaphor — a question as Archimedean fulcrum, capable of moving the entire architecture of thought with minimal force' },
            { para: 4, text: '从数学课上的方法之问，到田埂上的求证之问，再到书本中的哲学之问', technique: '递进总结', techniqueEn: 'Progressive Summary', effect: '三层递进回收全文，逻辑清晰严密', effectEn: 'Three-tier recap compresses the essay\'s journey — method, evidence, philosophy — each layer deeper than the last' },
            { para: 5, text: '提出一个问题往往比解决一个问题更重要', technique: '引用论证', techniqueEn: 'Quotation', effect: '爱因斯坦名言收束全文，权威支撑主题', effectEn: 'Einstein\'s axiom arrives as capstone — the essay has earned the right to invoke the ultimate questioner because it has demonstrated, not just claimed, the thesis' }
          ],
          approach: '以三个不同场景中遇到的"好问题"为线索，层层递进，从学习中的疑问到生活中的反思再到对人生的追问，展现"好问题"的多维价值。',
          approachEn: 'Uses three "good questions" encountered in different scenarios as threads, progressively deepening from academic doubts to life reflections to existential inquiries, revealing the multi-dimensional value of good questions.',
          architecture: '第一层：数学课上的追问——学习层面；第二层：与爷爷对话中的发现——生活层面；第三层：阅读《苏菲的世界》后的哲学思考——精神层面。三层递进，逐步升华。',
          architectureEn: 'Layer 1: Probing question in math class — academic level. Layer 2: Discovery through conversation with grandfather — life level. Layer 3: Philosophical reflection after reading "Sophie\'s World" — spiritual level. Three progressive layers, gradually elevating.',
          logic: '从"学会提问"到"学会观察"再到"学会思考"，三个维度递进深化主题。',
          logicEn: 'From "learning to ask" to "learning to observe" to "learning to think" — three dimensions progressively deepen the theme.',
          skills: ['三个场景形成对比和递进', '引用增强文化厚度', '议论简洁有力，不拖沓', '结尾有格局感'],
          skillsEn: ['Three scenes create contrast and progression', 'Citations enhance cultural depth', 'Commentary is concise and powerful', 'Ending has a sense of scope'],
          fullText: '　　什么是好问题？我曾经以为，好问题就是老师在考试中出的那些难题。直到三次不同的经历，让我重新理解了这四个字的分量。\n\n　　第一次，是在初二的数学课上。老师讲完一道几何证明题后，照例问："还有没有其他方法？"教室里一片沉默。我翻看笔记，忽然发现如果从另一个角度作辅助线，步骤可以减少一半。我犹豫了一下，还是举了手："老师，如果连接AC和BD的中点，是不是可以直接用中位线定理？"老师眼睛一亮："这是一个好问题！你不仅在思考怎么解题，还在思考怎么更优地解题。"那一刻我明白，好问题不是提出疑惑，而是提出更优的可能性。\n\n　　第二次，是暑假在爷爷的小院里。爷爷种了一辈子庄稼，那天他蹲在田埂上看蚂蚁搬家，我凑过去问："爷爷，蚂蚁搬家真的是要下雨了吗？"爷爷笑着反问我："你觉得呢？你观察过几次？每次都下雨了吗？"我愣住了。回家后我认真记录了一个月，发现蚂蚁搬家和下雨的关联率其实不到一半。爷爷的反问，是一个好问题——它教会我不要轻信经验，要用观察验证。正如培根所说："读书使人充实，讨论使人机智，笔记使人准确。"而好的提问，使人深刻。\n\n　　第三次，是在读完《苏菲的世界》之后。书中一开篇就问："你是谁？"这个看似简单的问题，却让我整整想了一个晚上。我是学生？是儿子？是朋友？还是一个独一无二的、正在思考"我是谁"的生命？那个晚上，我第一次感受到问题的力量——它不需要标准答案，却能撬动整个思维的大厦。\n\n　　从数学课上的方法之问，到田埂上的求证之问，再到书本中的哲学之问，我逐渐领悟："好问题"的好，不在于问题本身有多高深，而在于它能引发多深的思考。\n\n　　爱因斯坦说过："提出一个问题往往比解决一个问题更重要。"如今，我养成了一个习惯：每天至少问自己一个"好问题"。也许答案暂时找不到，但提问本身，已经是思考的开始、成长的起点。\n\n　　这个世界不缺少答案，缺少的是好的问题。而每一个好问题，都是一扇通向未知的门。',
          fullTextEn: '　　What is a good question? I once thought good questions were just the difficult problems teachers put on exams. It took three different experiences to make me truly understand the weight of these four words.\n\n　　The first time was in my second-year math class. After the teacher finished explaining a geometry proof, she asked as usual: "Are there any other methods?" The classroom fell silent. Flipping through my notes, I suddenly realized that by drawing an auxiliary line from a different angle, the steps could be halved. I hesitated, then raised my hand: "Teacher, if we connect the midpoints of AC and BD, can we directly apply the midpoint theorem?" The teacher\'s eyes lit up: "This is a good question! You\'re not just thinking about how to solve the problem — you\'re thinking about how to solve it better." In that moment, I understood: a good question isn\'t about raising doubts — it\'s about proposing better possibilities.\n\n　　The second time was during summer vacation in my grandfather\'s courtyard. Grandfather had farmed his whole life. That day he squatted on the field ridge watching ants move. I leaned over and asked: "Grandpa, does ants moving really mean it\'s going to rain?" He smiled and asked me back: "What do you think? How many times have you observed? Did it rain every time?" I was stunned. After going home, I carefully recorded observations for a month and found that the correlation between ants moving and rain was actually less than half. Grandfather\'s counter-question was a good question — it taught me not to blindly trust experience but to verify through observation. As Francis Bacon said: "Reading makes a full man, discussion a ready man, and writing an exact man." And good questioning makes a profound one.\n\n　　The third time was after finishing "Sophie\'s World." The book opens with: "Who are you?" This seemingly simple question kept me thinking for an entire evening. Am I a student? A son? A friend? Or a unique being who is pondering "Who am I?" That night, I first felt the power of questions — they don\'t need standard answers, yet they can shake the entire edifice of thought.\n\n　　From the methodological question in math class, to the verification question on the field ridge, to the philosophical question in books, I gradually realized: what makes a "good question" good isn\'t how profound the question itself is, but how deep a thinking it can trigger.\n\n　　Einstein once said: "The formulation of a problem is often more essential than its solution." Now I\'ve developed a habit: asking myself at least one "good question" every day. Perhaps the answer can\'t be found immediately, but asking itself is the beginning of thinking and the starting point of growth.\n\n　　The world doesn\'t lack answers — it lacks good questions. And every good question is a door to the unknown.',
          highlights: [
            { text: '好问题不是提出疑惑，而是提出更优的可能性', textEn: 'A good question isn\'t about raising doubts — it\'s about proposing better possibilities', why: '精辟概括"好问题"的第一层含义', whyEn: 'Redefines questioning from a deficit ("I don\'t know") to a surplus ("I see further") — doubt becomes ambition' },
            { text: '它不需要标准答案，却能撬动整个思维的大厦', textEn: 'It doesn\'t need a standard answer, yet it can shake the entire edifice of thought', why: '比喻精妙，将问题的力量具象化', whyEn: 'A question as lever — the architectural metaphor reveals that thinking is a structure, and the right question applied at the right joint can topple or rebuild it' },
            { text: '这个世界不缺少答案，缺少的是好的问题', textEn: 'The world doesn\'t lack answers — it lacks good questions', why: '仿罗丹名言句式，结尾有力', whyEn: 'Mirrors Rodin\'s "the world lacks not beauty but eyes to see it" — the borrowed structure gives a teenage insight the gravitas of an aphorism' }
          ],
          sections: [
            { type: '开头', fn: '设问引入', fnEn: 'Rhetorical opening', detail: '以"什么是好问题"设问，引发读者思考', detailEn: 'Opens with "What is a good question" to engage readers' },
            { type: '第一层', fn: '学习层面', fnEn: 'Academic layer', detail: '数学课上的方法之问', detailEn: 'Methodological question in math class' },
            { type: '第二层', fn: '生活层面', fnEn: 'Life layer', detail: '与爷爷对话的求证之问', detailEn: 'Verification question with grandfather' },
            { type: '第三层', fn: '精神层面', fnEn: 'Spiritual layer', detail: '哲学阅读后的存在之问', detailEn: 'Existential question after philosophical reading' },
            { type: '结尾', fn: '总结升华', fnEn: 'Summary elevation', detail: '引用爱因斯坦名言，升华主题', detailEn: 'Quotes Einstein, elevates the theme' }
          ]
        },
        {
          title: '这是一个好问题',
          titleEn: 'This Is a Good Question',
          score: 36,
          maxScore: 40,
          structure: 'daoXuShi',
          techniques: ['daoXu', 'xuanNian', 'duiHuaQuDong', 'xiJieMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '如果人工智能真的能替代所有工作，那人存在的意义是什么？', technique: '倒叙', techniqueEn: 'In Medias Res', effect: '直接以赛场高潮开篇，制造强烈悬念', effectEn: 'Opens at the climax — the reader hears the question before knowing who asked it, why, or whether it worked' },
            { para: 1, text: '我的声音微微发颤', technique: '细节描写', techniqueEn: 'Physical Detail', effect: '声音发颤写出紧张，增强真实感', effectEn: 'A trembling voice humanizes the debate moment — intellectual bravery and physical nervousness coexist in a single breath' },
            { para: 3, text: '如果机器什么都做了，人还需要努力吗？', technique: '对话驱动', techniqueEn: 'Dialogue as Catalyst', effect: '学姐的反问成为叙事转折的触发点', effectEn: 'The senior\'s casual remark detonates the narrator\'s entire preparation strategy — one question demolishes weeks of research' },
            { para: 4, text: '辩论不只是回答问题，更是提出问题', technique: '夹叙夹议', techniqueEn: 'Narrative-Reflection Weave', effect: '队长的总结自然嵌入核心论点', effectEn: 'The team captain\'s insight reframes debate from defense to offense — answering is reactive, questioning is creative' },
            { para: 5, text: '如果我是反方，最担心被问到什么？', technique: '心理描写', techniqueEn: 'Interior Monologue', effect: '换位思考的过程展示"好问题"的诞生逻辑', effectEn: 'Empathy as weapon — the narrator discovers that the best questions come from inhabiting the opponent\'s fears' },
            { para: 7, text: '它能让对方不得不面对一个根本性的矛盾', technique: '逻辑推理', techniqueEn: 'Logical Reasoning', effect: '分析问题的"好"在何处，增强说服力', effectEn: 'Articulates the question\'s mechanism: not attacking the argument but exposing the contradiction at its foundation' },
            { para: 8, text: '全场沉默了三秒钟——那是我人生中最漫长也最骄傲的三秒钟', technique: '时间聚焦', techniqueEn: 'Temporal Close-Up', effect: '三秒放大为慢镜头，高潮感极强', effectEn: 'Three seconds dilated into an eternity — silence becomes the most dramatic response possible, louder than any rebuttal' },
            { para: 9, text: '它不是刁难，而是真诚的追问，是对人类命运的深度关切', technique: '引用权威', techniqueEn: 'Authority Endorsement', effect: '评委的话为"好问题"做外部认证', effectEn: 'The judge\'s commentary elevates a competition tactic into genuine philosophical inquiry — external validation of internal transformation' },
            { para: 10, text: '好问题是一面镜子，照见我们思维的盲区；好问题是一盏灯，照亮我们认知的暗角', technique: '排比+比喻', techniqueEn: 'Parallelism + Metaphor', effect: '双重修辞叠加，语言精美，升华主题', effectEn: 'Mirror for looking inward, lamp for looking outward — the dual metaphor captures the two directions a good question works simultaneously' },
            { para: 11, text: '"这是一个好问题"——这句话，从此成了我追求思考深度的座右铭', technique: '首尾呼应', techniqueEn: 'Circular Echo', effect: '回扣标题，从赛场回到人生，完成结构闭合', effectEn: 'The title phrase transforms from competition verdict to life motto — the essay\'s journey from debate hall to daily philosophy is complete' }
          ],
          approach: '用倒叙手法，以"我"参加辩论赛的经历为主线，从赛场上的一个关键提问回溯到准备过程中的困惑与突破。',
          approachEn: 'Uses flashback technique, with the narrator\'s debate competition experience as the main thread, tracing back from a key question at the competition to the confusion and breakthroughs during preparation.',
          architecture: '倒叙开头：辩论赛决赛上"我"提出的关键问题；回溯：准备过程中的迷茫和队友的引导；高潮：赛场上问题的提出和全场反响；结尾：回到当下，感悟好问题的意义。',
          architectureEn: 'Flashback opening: The key question posed during the debate final. Recall: Confusion during preparation and teammate\'s guidance. Climax: Posing the question and audience reaction. Ending: Return to present, reflecting on good questions\' significance.',
          logic: '从"结果"到"过程"再回到"结果"，倒叙结构制造悬念，读者跟随"我"的视角逐步理解"好问题"的诞生过程。',
          logicEn: 'From "result" to "process" back to "result" — the flashback structure creates suspense as readers follow the narrator\'s perspective to gradually understand how a "good question" is born.',
          skills: ['倒叙开头制造悬念吸引读者', '对话推动情节自然流畅', '细节描写增强画面感', '结构巧妙，首尾圆合'],
          skillsEn: ['Flashback opening creates suspense', 'Dialogue advances plot naturally', 'Vivid details enhance imagery', 'Clever structure with circular closure'],
          fullText: '　　"请问对方辩友，如果人工智能真的能替代所有工作，那人存在的意义是什么？"\n\n　　话筒前，我的声音微微发颤，但我看见对面三位辩手面面相觑，评委们纷纷点头，观众席响起一片低低的议论声。那一刻，我知道——这是一个好问题。\n\n　　时间回到两个月前。学校辩论赛的通知贴在公告栏上，辩题是"人工智能是否会让人类更幸福"。我和三位队友组成正方，主张人工智能会让人类更幸福。\n\n　　准备初期，我们查阅了大量资料，列出了效率提升、医疗进步、教育普及等论据。一切似乎万事俱备。然而，一次模拟赛中，反方一位学姐轻描淡写地说了一句："如果机器什么都做了，人还需要努力吗？"我们竟无言以对。\n\n　　"我们的论据够多了，但我们缺少一个好问题。"队长小林在复盘会上敲着桌子说，"辩论不只是回答问题，更是提出问题。一个好问题，能让对方的论点不攻自破。"\n\n　　这句话点醒了我。我开始换位思考：如果我是反方，最担心被问到什么？我翻阅了大量关于人工智能伦理的文章，渐渐找到了一个切入口——"存在的意义"。如果AI替代了工作，人类就不再被"需要"，那人的价值由什么来定义？\n\n　　"这个问题好在哪里？"队友小王问我。\n\n　　"好在它没有标准答案，"我说，"但它能让对方不得不面对一个根本性的矛盾：他们说AI让人更幸福，可如果人失去了存在感，幸福从何而来？"\n\n　　决赛那天，当我在自由辩论环节抛出这个问题时，全场沉默了三秒钟——那是我人生中最漫长也最骄傲的三秒钟。\n\n　　最终我们赢了比赛，评委在点评中特别提到："正方四辩提出的那个问题，是今天整场辩论最有价值的瞬间。它不是刁难，而是真诚的追问，是对人类命运的深度关切。"\n\n　　走出赛场，阳光洒在脸上，我忽然明白：一个好问题，不是为了赢，而是为了让所有人都停下来想一想。好问题是一面镜子，照见我们思维的盲区；好问题是一盏灯，照亮我们认知的暗角。\n\n　　"这是一个好问题"——这句话，从此成了我追求思考深度的座右铭。',
          fullTextEn: '　　"May I ask the opposing team: if AI truly could replace all jobs, what would be the meaning of human existence?"\n\n　　At the microphone, my voice trembled slightly, but I saw the three opposing debaters exchange bewildered glances, judges nodding one after another, and a ripple of discussion through the audience. In that moment, I knew — this was a good question.\n\n　　Rewind to two months ago. The school debate competition notice was posted on the bulletin board. The topic: "Will artificial intelligence make humanity happier?" My three teammates and I formed the affirmative side, arguing that AI would indeed make humans happier.\n\n　　In early preparation, we researched extensively, listing arguments about efficiency gains, medical advances, and educational access. Everything seemed ready. However, during a practice round, an opposing senior casually remarked: "If machines do everything, do people still need to try?" We were speechless.\n\n　　"We have enough arguments, but we lack a good question." Team captain Xiao Lin rapped the table during our debrief. "Debate isn\'t just about answering questions — it\'s about asking them. A good question can make the opponent\'s argument collapse on its own."\n\n　　Those words awakened me. I began thinking from the other side: if I were the opposition, what question would I most fear? I read extensively about AI ethics and gradually found an entry point — "the meaning of existence." If AI replaces all work and humans are no longer "needed," what defines human value?\n\n　　"What makes this question good?" teammate Xiao Wang asked me.\n\n　　"It has no standard answer," I said, "but it forces the opponent to face a fundamental contradiction: they say AI makes people happier, but if people lose their sense of purpose, where does happiness come from?"\n\n　　On the day of the finals, when I posed this question during the free debate segment, the entire hall fell silent for three seconds — the longest and proudest three seconds of my life.\n\n　　We won the competition. In their commentary, the judges specifically noted: "The question raised by the affirmative\'s fourth speaker was the most valuable moment of today\'s entire debate. It wasn\'t a trick question but a sincere inquiry — a deep concern for human destiny."\n\n　　Walking out of the venue, sunlight warming my face, I suddenly understood: a good question isn\'t about winning — it\'s about making everyone pause and think. A good question is a mirror, revealing the blind spots in our thinking; a good question is a lamp, illuminating the dark corners of our understanding.\n\n　　"This is a good question" — from that day forward, this phrase became my motto in pursuing depth of thought.',
          highlights: [
            { text: '全场沉默了三秒钟——那是我人生中最漫长也最骄傲的三秒钟', textEn: 'The entire hall fell silent for three seconds — the longest and proudest three seconds of my life', why: '细节描写精准，"三秒钟"的时间感极具画面力', whyEn: 'Three seconds stretched to fill an arena — the silence itself becomes the loudest applause, proving the question hit a nerve no argument could' },
            { text: '一个好问题，不是为了赢，而是为了让所有人都停下来想一想', textEn: 'A good question isn\'t about winning — it\'s about making everyone pause and think', why: '议论升华自然，揭示好问题的本质', whyEn: 'Detaches the question from the competition that birthed it — what began as debate strategy becomes a universal principle about the purpose of inquiry' },
            { text: '好问题是一面镜子……好问题是一盏灯', textEn: 'A good question is a mirror... a good question is a lamp', why: '排比+比喻双修辞叠加，语言优美有力', whyEn: 'Mirror reveals what you can\'t see in yourself; lamp reveals what you can\'t see ahead — together they define a question\'s dual power: introspection and illumination' }
          ],
          sections: [
            { type: '倒叙开头', fn: '悬念引入', fnEn: 'Suspenseful opening', detail: '直接呈现辩论赛高潮场景', detailEn: 'Directly presents the debate climax scene' },
            { type: '回溯', fn: '准备过程', fnEn: 'Preparation process', detail: '两个月的准备和关键发现', detailEn: 'Two months of preparation and key discovery' },
            { type: '高潮', fn: '赛场呈现', fnEn: 'Competition moment', detail: '提出问题的关键时刻', detailEn: 'The critical moment of posing the question' },
            { type: '结尾', fn: '感悟点题', fnEn: 'Reflective closing', detail: '理解好问题不是为赢而是为思考', detailEn: 'Understanding good questions aim for thought, not victory' }
          ]
        },
        {
          title: '这是一个好问题',
          titleEn: 'This Is a Good Question',
          score: 35,
          maxScore: 40,
          structure: 'shiJianXian',
          techniques: ['huanJingChenTuo', 'wuGanMiaoXie', 'jieWuShuQing', 'xinLiMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '空气里弥漫着泥土和青草的气息', technique: '五感描写', techniqueEn: 'Sensory Detail', effect: '嗅觉开篇，迅速将读者带入滇南山区', effectEn: 'Olfactory opening — earth and grass scent teleports the reader to rural Yunnan before the first event occurs' },
            { para: 1, text: '墙皮斑驳脱落，黑板上还留着上学期的板书', technique: '环境衬托', techniqueEn: 'Environmental Detail', effect: '破旧校舍细节暗示教育资源匮乏', effectEn: 'Peeling walls and lingering chalk marks silently testify to resource scarcity — the school tells its own story' },
            { para: 1, text: '粉笔灰混合着山风的味道——一种让人安静下来的味道', technique: '通感', techniqueEn: 'Synesthesia', effect: '将嗅觉转为心理感受，营造宁静氛围', effectEn: 'Chalk dust meets mountain wind — the smell becomes a mood, and the narrator\'s inner quiet mirrors the landscape\'s stillness' },
            { para: 2, text: '每一支铅笔都用到握不住为止，每一张纸都写得满满当当', technique: '细节描写', techniqueEn: 'Detail', effect: '两个细节写尽孩子们珍惜学习机会的态度', effectEn: 'Two devastating details — pencil stubs and edge-to-edge writing — compress an entire socioeconomic reality into observable behavior' },
            { para: 4, text: '她犹豫了一下，用轻得几乎听不见的声音问道', technique: '动作描写', techniqueEn: 'Action Detail', effect: '犹豫和轻声写出女孩的胆怯与问题的沉重', effectEn: 'Hesitation and near-whisper — the softer the voice, the heavier the question it carries' },
            { para: 6, text: '窗外的蝉鸣格外清晰，阳光透过破旧的窗户，在阿依的脸上投下斑驳的光影', technique: '环境衬托', techniqueEn: 'Pathetic Fallacy', effect: '以声衬静，光影烘托这一刻的庄严与凝重', effectEn: 'Cicadas amplify the silence; dappled light on Ayi\'s face turns a classroom moment into something almost sacred' },
            { para: 7, text: '这不是一道考试题，没有标准答案可以填写', technique: '心理描写', techniqueEn: 'Interior Monologue', effect: '内心独白展现"老师"面对真问题时的无力与震撼', effectEn: 'The narrator\'s helplessness before a real question exposes the gap between textbook teaching and lived truth' },
            { para: 8, text: '好在它的真实，好在它的迫切，好在它让我这个"老师"突然意识到', technique: '排比', techniqueEn: 'Parallelism', effect: '三个"好在"层层递进，定义"好问题"的三维含义', effectEn: 'Triple "good in" cascade — authenticity, urgency, awakening — each layer redefines what makes a question "good"' },
            { para: 10, text: '这是你用过的粉笔，我想留一半……另一半送给你', technique: '借物抒情', techniqueEn: 'Emotion Through Objects', effect: '半截粉笔承载双向的希望与承诺', effectEn: 'A broken piece of chalk becomes a bilateral contract — half for her study, half for his return — the smallest object carrying the largest promise' },
            { para: 12, text: '我不敢轻易回答，但我愿意用一生去证明', technique: '留白', techniqueEn: 'Open Ending', effect: '不给答案的结尾比任何答案更有力量', effectEn: 'Refuses closure — a lifetime of proof outweighs a moment\'s reassurance, turning the essay itself into an ongoing answer' }
          ],
          approach: '以一次乡村支教经历为背景，一个留守儿童的提问触动"我"重新审视教育的意义。通过自然环境的烘托和五感描写，营造真实动人的叙事氛围。',
          approachEn: 'Set against a rural teaching volunteer experience, a left-behind child\'s question moves the narrator to reexamine the meaning of education. Uses natural environment and five-senses descriptions to create an authentic, moving narrative atmosphere.',
          architecture: '时间线推进：出发前→到达村庄→上课→孩子提问→离别→回城后的思考。',
          architectureEn: 'Chronological progression: Before departure → Arriving at village → Teaching → Child\'s question → Farewell → Reflection after returning.',
          logic: '按时间推进，情感线由"新奇"到"投入"再到"震撼"最后到"深思"，层层推进。',
          logicEn: 'Chronological with emotional progression: "novelty" → "engagement" → "shock" → "deep reflection."',
          skills: ['环境描写营造氛围', '五感描写增强真实感', '以物寓情（粉笔）', '留白式结尾引人深思'],
          skillsEn: ['Environmental descriptions create atmosphere', 'Five-senses writing enhances realism', 'Object symbolism (chalk)', 'Open ending invites deep reflection'],
          fullText: '　　七月的滇南山区，空气里弥漫着泥土和青草的气息。沿着蜿蜒的山路，我们的支教队伍颠簸了三个小时，终于到达了那个只有二十多户人家的小村庄。\n\n　　村小学只有两间教室，墙皮斑驳脱落，黑板上还留着上学期的板书。操场是一块平整的泥地，角落里立着一副生锈的篮球架。我深吸一口气，闻到了粉笔灰混合着山风的味道——一种让人安静下来的味道。\n\n　　孩子们很快就来了。他们穿着洗得发白的校服，脸上带着羞涩而好奇的笑容。我教他们语文，从拼音到识字，从课文朗读到作文练习。他们认真得让我心疼——每一支铅笔都用到握不住为止，每一张纸都写得满满当当。\n\n　　第三天下午，我在讲"梦想"这个话题。我问孩子们长大后想做什么。有人说想当医生，有人说想当老师，有人说想去昆明看看。教室里叽叽喳喳，充满了童真的向往。\n\n　　这时，坐在最后一排的小女孩阿依站了起来。她是班上最安静的孩子，父母常年在外打工，她和奶奶相依为命。她犹豫了一下，用轻得几乎听不见的声音问道：\n\n　　"老师，读书真的可以走出大山吗？"\n\n　　教室里突然安静了。窗外的蝉鸣格外清晰，阳光透过破旧的窗户，在阿依的脸上投下斑驳的光影。\n\n　　我张了张嘴，一时竟不知如何作答。这不是一道考试题，没有标准答案可以填写；这也不是一个天真的幻想，而是一个十二岁女孩关于命运最真实、最沉重的追问。\n\n　　这是一个好问题。好在它的真实，好在它的迫切，好在它让我这个"老师"突然意识到——我带来的不应该只是知识，更应该是希望和方向。\n\n　　"可以的。"我蹲下来，平视着她的眼睛，"但不是因为读书能让你离开这里，而是因为读书能让你看见更大的世界，然后选择自己想去的地方。"\n\n　　阿依点了点头，眼眶微微泛红。\n\n　　支教结束那天，阿依送了我一截粉笔头。她说："老师，这是你用过的粉笔，我想留一半，提醒自己要好好读书。另一半送给你，提醒你以后还要来。"\n\n　　我把那截粉笔头放在书桌上，至今没有挪动。每当我懈怠或迷茫时，看到它，就会想起阿依的那个问题。\n\n　　"读书真的可以走出大山吗？"——这个问题，我不敢轻易回答，但我愿意用一生去证明。',
          fullTextEn: '　　In the mountains of southern Yunnan in July, the air was thick with the scent of earth and green grass. Along the winding mountain road, our teaching volunteer team bumped along for three hours before finally reaching the small village of just over twenty households.\n\n　　The village school had only two classrooms, with peeling walls and last semester\'s writings still on the blackboard. The playground was a patch of leveled dirt with a rusty basketball hoop standing in the corner. I took a deep breath, inhaling the smell of chalk dust mixed with mountain wind — a scent that calms the soul.\n\n　　The children arrived quickly. They wore school uniforms washed to near-whiteness, their faces bearing shy, curious smiles. I taught them Chinese — from pinyin to character recognition, from reading aloud to essay practice. Their earnestness was heartbreaking: every pencil was used until it couldn\'t be held, every page filled edge to edge.\n\n　　On the third afternoon, I was teaching about "dreams." I asked what they wanted to be when they grew up. Some said doctor, some said teacher, some said they wanted to visit Kunming. The classroom buzzed with childlike aspirations.\n\n　　Then Ayi, the quietest girl in class who sat in the last row, stood up. Her parents worked far away year-round; she lived with her grandmother. She hesitated, then asked in a voice almost too soft to hear:\n\n　　"Teacher, can studying really lead us out of these mountains?"\n\n　　The classroom fell instantly silent. The cicadas outside became extraordinarily clear, and sunlight filtered through the worn windows, casting dappled shadows on Ayi\'s face.\n\n　　I opened my mouth but couldn\'t find words. This wasn\'t an exam question with a standard answer to fill in. Nor was it a naive fantasy — it was a twelve-year-old girl\'s most real, most weighty question about her destiny.\n\n　　This was a good question. Good in its authenticity, good in its urgency, good in making me — the "teacher" — suddenly realize that I should bring not just knowledge, but hope and direction.\n\n　　"Yes, you can," I said, crouching down to look her in the eyes. "But not because studying lets you leave this place — because studying lets you see a bigger world, and then choose where you want to go."\n\n　　Ayi nodded, her eyes slightly reddening.\n\n　　On the last day of our volunteer teaching, Ayi gave me a piece of used chalk. She said: "Teacher, this is the chalk you used. I want to keep half to remind myself to study hard. The other half is for you — to remind you to come back."\n\n　　I placed that piece of chalk on my desk, where it remains to this day. Whenever I feel lazy or lost, I look at it and remember Ayi\'s question.\n\n　　"Can studying really lead us out of the mountains?" — I dare not answer this question lightly, but I\'m willing to spend a lifetime proving it.',
          highlights: [
            { text: '空气里弥漫着泥土和青草的气息', textEn: 'The air was thick with the scent of earth and green grass', why: '嗅觉描写开篇，迅速建立环境氛围', whyEn: 'Scent as portal — two earthy notes transport the reader to southern Yunnan before a single character of plot appears' },
            { text: '老师，读书真的可以走出大山吗？', textEn: 'Teacher, can studying really lead us out of these mountains?', why: '核心问题朴素而沉重，以小见大的典范', whyEn: 'Twelve-year-old Ayi compresses the entire debate about education, poverty, and destiny into fourteen characters — the question\'s weight comes from who asks it, not what it asks' },
            { text: '我不敢轻易回答，但我愿意用一生去证明', textEn: 'I dare not answer this question lightly, but I\'m willing to spend a lifetime proving it', why: '结尾留白有力，余韵悠长', whyEn: 'Refuses the easy "yes" — replaces a moment\'s reassurance with a lifetime\'s commitment, turning the essay into an open-ended promise rather than a closed narrative' }
          ],
          sections: [
            { type: '开头', fn: '环境铺设', fnEn: 'Environmental setup', detail: '五感描写滇南山区环境', detailEn: 'Five-senses description of southern Yunnan mountains' },
            { type: '发展', fn: '支教日常', fnEn: 'Teaching routine', detail: '上课、与孩子互动的细节', detailEn: 'Teaching and interaction details with children' },
            { type: '高潮', fn: '核心提问', fnEn: 'Core question', detail: '阿依提出关于命运的追问', detailEn: 'Ayi raises the question about destiny' },
            { type: '结尾', fn: '物件寄情', fnEn: 'Object symbolism', detail: '粉笔头承载情感和承诺', detailEn: 'Chalk piece carries emotion and commitment' }
          ]
        },
        {
          title: '这是一个好问题',
          titleEn: 'This Is a Good Question',
          score: 36,
          maxScore: 40,
          structure: 'zongFenZong',
          techniques: ['paiBI', 'biFangNiRen', 'duiBi', 'shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '不是一个个完美的答案，而是一个个勇敢的问题', technique: '对比', techniqueEn: 'Antithesis', effect: '答案与问题对比，颠覆常规认知，一句立论', effectEn: 'Inverts the conventional hierarchy — answers serve, but questions lead — establishing the thesis through a single structural reversal' },
            { para: 1, text: '牛顿问……哥白尼问……屈原问', technique: '排比', techniqueEn: 'Parallelism', effect: '三位提问者横跨中西古今，气势磅礴', effectEn: 'Three questioners spanning continents and millennia — the parallel structure turns individual curiosity into a universal human impulse' },
            { para: 1, text: '让真理的光芒穿透了愚昧的黑暗', technique: '比喻', techniqueEn: 'Metaphor', effect: '光暗对比将科学革命的意义具象化', effectEn: 'Light piercing darkness — the cliché is redeemed by its precision: Copernicus\'s question was literally about what shines and what doesn\'t' },
            { para: 2, text: '好问题是火种', technique: '比喻', techniqueEn: 'Metaphor', effect: '第一重比喻：火种——强调启发和点燃的力量', effectEn: 'First metaphor in the triad: a spark needs only to land once to set a mind ablaze — ignition, not illumination, is the point' },
            { para: 2, text: '他用一生证明：好问题比好答案更有价值', technique: '夹叙夹议', techniqueEn: 'Narrative-Reflection Weave', effect: '苏格拉底事例后一句议论收束，叙议结合自然', effectEn: 'The biographical sketch resolves into a single axiom — Socrates\'s entire philosophy compressed into one declarative sentence' },
            { para: 3, text: '好问题是钥匙', technique: '比喻', techniqueEn: 'Metaphor', effect: '第二重比喻：钥匙——强调打开认知之门', effectEn: 'Second triad metaphor: a key implies a locked door — the question doesn\'t create knowledge but reveals what was always behind the barrier' },
            { para: 3, text: '"强大"是否等于"侵略"', technique: '以小见大', techniqueEn: 'Microcosm', effect: '课堂小问题引出文明史大思考', effectEn: 'A seventh-grader\'s blurted question opens onto millennia of civilizational divergence — the classroom becomes a seminar on world history' },
            { para: 4, text: '好问题是镜子', technique: '比喻', techniqueEn: 'Metaphor', effect: '第三重比喻：镜子——强调自我审视', effectEn: 'Third triad metaphor: mirrors reflect the asker, not the asked — questions reveal the boundaries of the questioner\'s own courage' },
            { para: 5, text: '火种、钥匙、镜子——这就是好问题的三重面孔', technique: '排比总结', techniqueEn: 'Parallel Summary', effect: '三个比喻回收呼应，结构严密精美', effectEn: 'The triad returns in compressed form — three nouns do the work of three paragraphs, proving that good writing, like good questions, is about compression' },
            { para: 6, text: '如果你一时答不上来，别担心——这本身，就是一个好问题', technique: '首尾呼应', techniqueEn: 'Circular Echo', effect: '互动式结尾扣回标题，让读者成为"被问者"', effectEn: 'The essay performs its own thesis: by posing an unanswerable question to the reader, it demonstrates that the best questions are the ones that keep working after the text ends' }
          ],
          approach: '以议论性散文的笔法，围绕"好问题"的定义展开，将古今中外的提问者串联，探讨问题对人类文明进步的推动作用。',
          approachEn: 'Written in argumentative-lyrical essay style, exploring the definition of "good questions" by connecting questioners across time and cultures, discussing how questions drive civilization forward.',
          architecture: '总论点：好问题推动人类进步→分论一：科学领域的追问（牛顿）→分论二：哲学领域的追问（苏格拉底）→分论三：个人成长中的追问（自身经历）→回到总论，升华。',
          architectureEn: 'General thesis: Good questions drive human progress → Sub-thesis 1: Scientific inquiry (Newton) → Sub-thesis 2: Philosophical inquiry (Socrates) → Sub-thesis 3: Personal growth inquiry (own experience) → Return to thesis, elevate.',
          logic: '总—分—总结构，从宏大到个人再回到宏大，视野开阔，论证有力。',
          logicEn: 'General-Specific-General structure, from grand to personal back to grand — broad vision, strong argumentation.',
          skills: ['排比句增强气势', '古今中外典例丰富', '比喻生动贴切', '格局宏大不空洞'],
          skillsEn: ['Parallelism builds momentum', 'Rich examples from across time and cultures', 'Vivid and apt metaphors', 'Grand scope without being hollow'],
          fullText: '　　人类文明的长河中，真正推动历史车轮前进的，不是一个个完美的答案，而是一个个勇敢的问题。\n\n　　牛顿问："苹果为什么会落地？"这个问题打开了经典力学的大门，让人类第一次理解了天体运行的规律。哥白尼问："地球真的是宇宙的中心吗？"这个问题撕裂了千年的偏见，让真理的光芒穿透了愚昧的黑暗。屈原问："路漫漫其修远兮，吾将上下而求索"——这不仅是一个诗人的追问，更是一个民族求真求美的精神基因。\n\n　　好问题是火种。它不一定燃烧得轰轰烈烈，但一定能点燃沉睡的思想。苏格拉底一生没有写过一本书，却用一个又一个问题，让雅典城的公民们重新审视自己的信仰、道德和人生。他的"产婆术"——用提问引导对方自己找到答案——至今仍是最伟大的教育方法之一。他用一生证明：好问题比好答案更有价值。\n\n　　好问题是钥匙。我至今记得初一的一堂历史课，老师讲到郑和下西洋，我脱口而出："郑和的船队那么强大，为什么中国没有像西方一样开始殖民？"老师愣了一下，然后笑着说："这是一个好问题。"她没有直接回答，而是让全班用一节课的时间讨论。那堂课，我们讨论了农耕文明与海洋文明的差异、儒家"和为贵"的思想、以及"强大"是否等于"侵略"。一个问题，打开了一扇理解历史的全新窗户。\n\n　　好问题是镜子。它照见我们知识的边界，也照见我们勇气的边界。很多时候，我们不是想不到问题，而是不敢提出问题——怕显得无知，怕打破共识，怕面对没有答案的空白。但正是那些敢于说"我不懂"、敢于问"为什么"的人，推动了世界一步步向前。\n\n　　火种、钥匙、镜子——这就是好问题的三重面孔。它点燃思考，它打开认知，它照见真相。\n\n　　此刻，我想问你一个问题：你上一次提出一个好问题，是什么时候？\n\n　　如果你一时答不上来，别担心——这本身，就是一个好问题。',
          fullTextEn: '　　In the long river of human civilization, what truly drives the wheel of history forward is not one perfect answer after another, but one brave question after another.\n\n　　Newton asked: "Why does the apple fall?" This question opened the door to classical mechanics, allowing humanity to first understand the laws governing celestial motion. Copernicus asked: "Is the Earth really the center of the universe?" This question tore through a millennium of prejudice, letting truth\'s light pierce the darkness of ignorance. Qu Yuan asked: "The road ahead is long and winding; I shall search high and low" — this was not merely a poet\'s inquiry but the spiritual DNA of a nation seeking truth and beauty.\n\n　　Good questions are sparks. They may not burn spectacularly, but they can ignite dormant thoughts. Socrates never wrote a single book, yet with question after question, he made the citizens of Athens reexamine their beliefs, morals, and lives. His "Socratic method" — using questions to guide others to find answers themselves — remains one of the greatest educational approaches today. He proved with his life: good questions are more valuable than good answers.\n\n　　Good questions are keys. I still remember a history class in my first year of middle school. The teacher was discussing Zheng He\'s voyages, and I blurted out: "Zheng He\'s fleet was so powerful — why didn\'t China begin colonizing like the West?" The teacher paused, then smiled: "That\'s a good question." She didn\'t answer directly but had the entire class discuss it for the period. That class, we discussed differences between agrarian and maritime civilizations, Confucian ideals of "harmony as the highest virtue," and whether "power" equals "aggression." One question opened an entirely new window to understanding history.\n\n　　Good questions are mirrors. They reflect the boundaries of our knowledge and the boundaries of our courage. Often, we don\'t fail to think of questions — we\'re afraid to ask them. Afraid of appearing ignorant, afraid of breaking consensus, afraid of facing the blank space of no answers. But it\'s precisely those who dare to say "I don\'t understand" and dare to ask "why" who push the world forward, step by step.\n\n　　Sparks, keys, mirrors — these are the three faces of good questions. They ignite thinking, open understanding, and reveal truth.\n\n　　Right now, I want to ask you a question: When was the last time you asked a good question?\n\n　　If you can\'t answer right away, don\'t worry — that itself is a good question.',
          highlights: [
            { text: '真正推动历史车轮前进的，不是一个个完美的答案，而是一个个勇敢的问题', textEn: 'What truly drives the wheel of history forward is not one perfect answer after another, but one brave question after another', why: '开篇立论鲜明有力，对比手法突出主题', whyEn: 'The antithesis between "perfect answers" and "brave questions" inverts conventional wisdom — bravery, not correctness, becomes the engine of progress' },
            { text: '火种、钥匙、镜子——这就是好问题的三重面孔', textEn: 'Sparks, keys, mirrors — these are the three faces of good questions', why: '三个比喻形成排比，结构精美，概括全文', whyEn: 'Three single-word metaphors compress the essay\'s entire argument into a triad — each noun is a paragraph distilled to its essence' },
            { text: '如果你一时答不上来，别担心——这本身，就是一个好问题', textEn: 'If you can\'t answer right away, don\'t worry — that itself is a good question', why: '互动式结尾，巧妙扣题，令人回味', whyEn: 'The essay becomes its own proof: it poses a question to the reader, and the reader\'s inability to answer proves the thesis — good questions outlast good answers' }
          ],
          sections: [
            { type: '总论', fn: '立论', fnEn: 'Thesis statement', detail: '好问题推动人类进步', detailEn: 'Good questions drive human progress' },
            { type: '分论一', fn: '科学维度', fnEn: 'Scientific dimension', detail: '牛顿、哥白尼等科学追问', detailEn: 'Scientific inquiries by Newton, Copernicus, etc.' },
            { type: '分论二', fn: '哲学维度', fnEn: 'Philosophical dimension', detail: '苏格拉底的提问智慧', detailEn: 'Socrates\' questioning wisdom' },
            { type: '分论三', fn: '个人维度', fnEn: 'Personal dimension', detail: '历史课上的真实经历', detailEn: 'Real experience in history class' },
            { type: '总结', fn: '互动收束', fnEn: 'Interactive closing', detail: '三个比喻总结+互动式结尾', detailEn: 'Three-metaphor summary + interactive ending' }
          ]
        }
      ]
    },
    {
      id: 'yn2025_comp2',
      paperId: 'yn2025',
      year: 2025,
      region: '云南省',
      prompt: '请以"值得________的时刻"为题，在横线上填入恰当的词语，将题目补充完整，写一篇不少于600字的作文。',
      promptEn: 'Write an essay titled "A Moment Worth ________" (fill in the blank, at least 600 words).',
      context: '人生中有许多时刻值得铭记：值得珍惜的时刻、值得感动的时刻、值得反思的时刻……选择一个你认为"值得"的时刻，写出你的故事和感悟。',
      contextEn: 'Life has many moments worth remembering: moments worth cherishing, moments worth being moved by, moments worth reflecting on... Choose a moment you find "worthy" and write your story and reflections.',
      type: 'semiTitle',
      category: '半命题记叙文',
      categoryEn: 'Semi-title Narrative',
      wordCount: 600,
      guide: {
        analysis: '半命题作文的关键在于补题。"值得________的时刻"中，所填词语决定了文章方向。可填：珍惜、铭记、感动、骄傲、回味、反思等。选择有真实情感支撑的词语，写一个具体的"时刻"，避免泛泛而谈。',
        analysisEn: 'The key to semi-title essays is completing the title. The word filling "A Moment Worth ________" determines the direction. Options: cherishing, remembering, being moved, being proud, savoring, reflecting. Choose a word backed by genuine emotion, write about a specific "moment," avoid being vague.',
        keyPoints: ['补题要新颖但不刻意', '聚焦一个具体"时刻"', '展现真实情感', '有成长感悟'],
        keyPointsEn: ['Title completion should be fresh but natural', 'Focus on one specific "moment"', 'Show genuine emotion', 'Include growth insight'],
        pitfalls: ['补题太普通缺乏新意', '写多个时刻导致散乱', '缺少具体细节'],
        pitfallsEn: ['Too generic title completion', 'Writing multiple moments causing diffusion', 'Lacking specific details']
      },
      essays: [
        {
          title: '值得铭记的时刻',
          titleEn: 'A Moment Worth Remembering',
          score: 37, maxScore: 40,
          structure: 'qiChengZhuanHe',
          techniques: ['xiJieMiaoXie', 'xinLiMiaoXie', 'huanJingChenTuo', 'shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '风扇吱呀吱呀地转着，却吹不散弥漫在空气中的焦虑', technique: '环境衬托', techniqueEn: 'Pathetic Fallacy', effect: '风扇无力吹散焦虑，以声衬情', effectEn: 'The fan\'s futile rotation mirrors the classroom\'s futile calm — mechanical motion that cannot touch psychological weight' },
            { para: 0, text: '倒计时数字像一把悬在头顶的剑', technique: '比喻', techniqueEn: 'Simile', effect: '达摩克利斯之剑式比喻写出中考压力', effectEn: 'Damoclean countdown — each vanishing day sharpens the blade, and the metaphor makes temporal pressure spatial and lethal' },
            { para: 1, text: '数学卷子发下来的那一刻，我的手是凉的', technique: '五感描写', techniqueEn: 'Sensory Detail', effect: '一个触觉细节写出内心的恐惧', effectEn: 'Cold hands — the body reacts before the mind can process, and this involuntary detail is more honest than any stated emotion' },
            { para: 2, text: '眼泪无声地滴落在试卷上，把"89"浸成了一团模糊的红晕', technique: '细节描写', techniqueEn: 'Visual Detail', effect: '泪水浸纸的画面将心碎具象化', effectEn: 'Tears dissolving ink — the score literally blurs under grief, and the red haze becomes both the stain of failure and its dissolution' },
            { para: 3, text: '她没有问分数，也没有说"加油"之类的套话。她只是搬了把椅子，在我旁边坐下来', technique: '动作描写', techniqueEn: 'Action Detail', effect: '不问不说的沉默陪伴比任何话都温暖', effectEn: 'What the teacher doesn\'t do matters more than what she does — pulling up a chair is the physical grammar of "I\'m staying"' },
            { para: 6, text: '78分……但我后来读了师范，当了数学老师', technique: '对比', techniqueEn: 'Contrast', effect: '老师自揭"失败"经历，以亲身体验代替说教', effectEn: 'The teacher\'s 78 demolishes the tyranny of the number — a worse score led to the very career now saving this student' },
            { para: 7, text: '窗外的晚霞染红了半边天', technique: '环境衬托', techniqueEn: 'Pathetic Fallacy', effect: '晚霞与心境转变同步，由阴转晴', effectEn: 'The sky blushes at precisely the moment the student\'s darkness lifts — nature timing its beauty to match inner transformation' },
            { para: 7, text: '让我崩溃的不是89分本身，而是我把全部的自我价值都绑定在了一个数字上', technique: '心理描写', techniqueEn: 'Interior Monologue', effect: '精准的自我分析找到焦虑的根源', effectEn: 'The real diagnosis — not the score but the equation of score with self — turns a grade crisis into an identity revelation' },
            { para: 9, text: '风扇吱呀吱呀的声音……不再烦躁，反而像一首安静的歌', technique: '首尾呼应', techniqueEn: 'Circular Echo', effect: '同一个声音不同感受，暗示心态蜕变', effectEn: 'Same fan, different music — the sound hasn\'t changed but the listener has, proving that the transformation is internal' },
            { para: 12, text: '真正的勇敢，不是不害怕失败，而是害怕之后依然选择前行', technique: '点题升华', techniqueEn: 'Thematic Elevation', effect: '重新定义"勇敢"，将个人经历升华为普遍哲理', effectEn: 'Bravery redefined: fear is not the disqualifier but the prerequisite — the essay\'s entire arc from cold hands to steady steps is compressed into one sentence' }
          ],
          approach: '以中考前最后一次模拟考的经历为素材，写"我"从崩溃到重拾信心的心理转变过程。',
          approachEn: 'Uses the experience of the last mock exam before zhongkao, depicting the narrator\'s psychological transformation from breakdown to renewed confidence.',
          architecture: '起：考前压力→承：模拟考失利→转：班主任的鼓励→合：重新出发的决心。',
          architectureEn: 'Intro: Pre-exam pressure → Development: Mock exam failure → Turn: Teacher\'s encouragement → Conclusion: Resolve to start anew.',
          logic: '压力→失败→鼓励→重生，情感线完整有力。',
          logicEn: 'Pressure → failure → encouragement → rebirth — complete and powerful emotional arc.',
          skills: ['心理描写层次丰富', '环境衬托心情变化', '对话真实自然', '结尾首尾呼应'],
          skillsEn: ['Rich layers of psychological description', 'Environment mirrors mood changes', 'Natural authentic dialogue', 'Ending echoes opening'],
          fullText: '　　六月的教室里，风扇吱呀吱呀地转着，却吹不散弥漫在空气中的焦虑。距离中考还有三十天，黑板上的倒计时数字像一把悬在头顶的剑，每减少一天，就锋利一分。\n\n　　那天是最后一次模拟考。数学卷子发下来的那一刻，我的手是凉的。89分——对于目标是一级完中的我来说，这个分数意味着一切计划都可能落空。\n\n　　放学后，同学们三三两两地走了。我一个人坐在座位上，盯着卷子上那些红色的叉号，眼泪无声地滴落在试卷上，把"89"浸成了一团模糊的红晕。\n\n　　"还在啊？"班主任王老师不知什么时候站在了我身旁。她没有问分数，也没有说"加油"之类的套话。她只是搬了把椅子，在我旁边坐下来。\n\n　　"知道我当年中考数学考了多少分吗？"她突然问。\n\n　　我摇摇头。\n\n　　"78分。"她笑了，"但我后来读了师范，当了数学老师。人生不是一场考试定胜负的，但每一次跌倒后爬起来的时刻，都值得铭记。"\n\n　　窗外的晚霞染红了半边天。王老师的话像一束光，穿透了我心里厚厚的阴云。我忽然意识到，让我崩溃的不是89分本身，而是我把全部的自我价值都绑定在了一个数字上。\n\n　　"这张卷子，"王老师指着试卷，"错的每一道题都是你还能进步的空间。你看，这道题是粗心，这道题是知识点没巩固，这道题是时间分配不合理——都是可以解决的问题。"\n\n　　我抹了把眼泪，重新拿起红笔，一道一道地标注错因。那个黄昏，教室里只有我和王老师，还有风扇吱呀吱呀的声音。但那个声音不再烦躁，反而像一首安静的歌。\n\n　　后来的三十天，我每天都会看一眼那张89分的卷子。它不再是耻辱的标记，而是提醒我：跌倒不可怕，放弃才可怕。\n\n　　中考那天，走进考场前，我深吸一口气，心里默念：无论结果如何，那个黄昏教室里爬起来的时刻，值得铭记一辈子。\n\n　　因为那一刻，我学会了：真正的勇敢，不是不害怕失败，而是害怕之后依然选择前行。',
          fullTextEn: '　　In the June classroom, the ceiling fan creaked round and round, but couldn\'t dispel the anxiety filling the air. Thirty days until the zhongkao — the countdown on the blackboard hung like a sword overhead, growing sharper with each passing day.\n\n　　That day was the last mock exam. The moment the math paper was returned, my hands went cold. 89 points — for someone aiming for a top high school, this score meant all plans could collapse.\n\n　　After school, classmates left in small groups. I sat alone at my desk, staring at the red crosses on the paper, tears silently dripping onto the test sheet, blurring the "89" into a smudged red haze.\n\n　　"Still here?" Homeroom teacher Ms. Wang appeared beside me at some point. She didn\'t ask about the score or say platitudes like "keep going." She just pulled up a chair and sat beside me.\n\n　　"Do you know how much I scored on my zhongkao math?" she suddenly asked.\n\n　　I shook my head.\n\n　　"78 points." She smiled. "But I went on to study teaching and became a math teacher. Life isn\'t won or lost in a single exam, but every moment you stand up after falling — that\'s worth remembering."\n\n　　The evening glow outside painted half the sky red. Ms. Wang\'s words were like a beam of light piercing through the thick clouds in my heart. I suddenly realized it wasn\'t the 89 that broke me down — it was that I had tied my entire self-worth to a number.\n\n　　"This test paper," Ms. Wang pointed at it, "every wrong answer is room for improvement. See, this one was carelessness, this one was unconsolidated knowledge, this one was poor time management — all solvable problems."\n\n　　I wiped my tears, picked up the red pen again, and marked the cause of each error one by one. That evening, it was just me and Ms. Wang in the classroom, with the fan creaking away. But the sound was no longer irritating — it was like a quiet song.\n\n　　For the following thirty days, I looked at that 89-point paper every day. It was no longer a mark of shame but a reminder: falling isn\'t scary — giving up is.\n\n　　On the day of the zhongkao, before entering the exam hall, I took a deep breath and thought to myself: regardless of the result, that moment in the evening classroom when I stood back up — that\'s worth remembering for a lifetime.\n\n　　Because in that moment, I learned: true bravery isn\'t being unafraid of failure — it\'s choosing to keep going even after being afraid.',
          highlights: [
            { text: '眼泪无声地滴落在试卷上，把"89"浸成了一团模糊的红晕', textEn: 'Tears silently dripped onto the test sheet, blurring the "89" into a smudged red haze', why: '视觉细节精准，将心碎具象化', whyEn: 'Ink dissolving under tears — the number that defined failure is literally obliterated by grief, a visual metaphor the narrator didn\'t intend but the reader can\'t miss' },
            { text: '人生不是一场考试定胜负的，但每一次跌倒后爬起来的时刻，都值得铭记', textEn: 'Life isn\'t won or lost in a single exam, but every moment you stand up after falling — that\'s worth remembering', why: '点题自然，兼具哲理深度', whyEn: 'Ms. Wang\'s 78 points authenticate the wisdom — she speaks not from theory but from lived recovery, which is why the student can receive what a textbook platitude couldn\'t deliver' },
            { text: '真正的勇敢，不是不害怕失败，而是害怕之后依然选择前行', textEn: 'True bravery isn\'t being unafraid of failure — it\'s choosing to keep going even after being afraid', why: '结尾金句，对"铭记"赋予深层意义', whyEn: 'Redefines bravery from the absence of fear to the persistence through it — fear becomes not the obstacle but the qualification for courage' }
          ],
          sections: [
            { type: '开头', fn: '氛围渲染', fnEn: 'Atmosphere setting', detail: '考前焦虑的教室环境', detailEn: 'Pre-exam anxiety in classroom' },
            { type: '承接', fn: '挫折呈现', fnEn: 'Setback presentation', detail: '模拟考89分的打击', detailEn: 'Impact of 89-point mock exam' },
            { type: '转折', fn: '老师引导', fnEn: 'Teacher guidance', detail: '班主任的分享和鼓励', detailEn: 'Homeroom teacher\'s sharing and encouragement' },
            { type: '结尾', fn: '感悟升华', fnEn: 'Reflective elevation', detail: '理解真正的勇敢', detailEn: 'Understanding true bravery' }
          ]
        },
        {
          title: '值得珍惜的时刻',
          titleEn: 'A Moment Worth Cherishing',
          score: 36, maxScore: 40,
          structure: 'shiJianXian',
          techniques: ['wuGanMiaoXie', 'xiJieMiaoXie', 'jieWuShuQing', 'duiBi'],
          techniqueMarks: [
            { para: 0, text: '一粒粒饱满透亮，像珍珠一样温润', technique: '比喻', techniqueEn: 'Simile', effect: '糯米如珍珠的比喻提升日常食材的质感', effectEn: 'Rice as pearls — elevating the humble grain to something precious, foreshadowing the essay\'s thesis that ordinary moments deserve reverence' },
            { para: 0, text: '粽叶的清香混着红枣的甜味', technique: '五感描写', techniqueEn: 'Sensory Detail', effect: '嗅觉+味觉交融，瞬间唤起节日记忆', effectEn: 'Scent and sweetness intertwined — the reader smells the kitchen before seeing it, entering through the most memory-linked sense' },
            { para: 1, text: '两片粽叶交叠，折成漏斗形……整个过程行云流水', technique: '动作描写', techniqueEn: 'Action Sequence', effect: '流畅的动作链展现五十年的手艺传承', effectEn: 'The fluid motion sequence is the biography of fifty years compressed into one minute — each gesture carries half a century of repetition' },
            { para: 4, text: '粽叶在我手里像一个不听话的孩子', technique: '拟人', techniqueEn: 'Personification', effect: '笨手笨脚的幽默与奶奶的行云流水形成对比', effectEn: 'Clumsy learner vs. effortless master — the leaf\'s "disobedience" humanizes the narrator\'s incompetence with gentle comedy' },
            { para: 5, text: '小时候我在一旁捣乱……后来上了学……再后来功课越来越忙', technique: '时间对比', techniqueEn: 'Temporal Contrast', effect: '三段时间递进写出陪伴的减少，引发珍惜', effectEn: 'Time-lapse in three sentences — each era shorter, each presence thinner, building the guilty realization that arrival already happened' },
            { para: 6, text: '我什么时候开始，不再认真看奶奶包粽子了呢？', technique: '设问', techniqueEn: 'Rhetorical Question', effect: '自问句触发全文核心反思', effectEn: 'The question has no answer — which is the answer: the erosion was too gradual to notice, and that\'s precisely the tragedy' },
            { para: 7, text: '她的手指关节有些肿大，缠棉线的时候偶尔会停下来揉一揉', technique: '细节描写', techniqueEn: 'Detail', effect: '两个身体细节（矮弯、肿关节）含蓄写出衰老', effectEn: 'Swollen joints and paused winding — the body\'s quiet protests against time, noticed only when someone finally watches closely enough' },
            { para: 9, text: '笑得眼睛弯成了月牙', technique: '细节描写', techniqueEn: 'Detail', effect: '月牙般的笑眼写出奶奶的满足与慈爱', effectEn: 'Crescent-moon eyes — the most universal Chinese image of elderly warmth, here earned by the promise of continued togetherness' },
            { para: 10, text: '阳光正好，微风不燥，奶奶在我身旁，粽子在锅里咕嘟咕嘟地响', technique: '短句排比', techniqueEn: 'Staccato Parallelism', effect: '四个短句定格完美瞬间，是全文情感巅峰', effectEn: 'Four sensory coordinates — light, wind, grandmother, sound — each clause is a pillar holding up this single perfect moment against time\'s erosion' },
            { para: 11, text: '那些平凡的、琐碎的、不起眼的时刻，才格外值得珍惜', technique: '夹叙夹议', techniqueEn: 'Narrative-Reflection Weave', effect: '议论自然生发，将"珍惜"从节日扩展到所有日常', effectEn: 'Three adjectives — ordinary, trivial, unremarkable — each one a title the essay has spent its length overturning' }
          ],
          approach: '写奶奶最后一次包粽子的场景，通过食物的味道串联亲情记忆，表达对亲人相伴时光的珍惜。',
          approachEn: 'Depicts grandmother\'s last time making zongzi, using food flavors to connect family memories, expressing cherishing time with loved ones.',
          architecture: '端午前夕→奶奶包粽子的过程→与过去端午的对比→意识到陪伴的珍贵。',
          architectureEn: 'Eve of Dragon Boat Festival → Grandmother wrapping zongzi → Contrast with past festivals → Realizing the preciousness of companionship.',
          logic: '由日常场景引出情感，由对比引发珍惜之情，由具体到抽象的升华。',
          logicEn: 'Daily scene evokes emotion, contrast triggers cherishing, concrete to abstract elevation.',
          skills: ['五感描写营造烟火气', '食物细节承载情感', '对比突出时间流逝', '借物抒情自然不做作'],
          skillsEn: ['Five-senses description creates warmth of daily life', 'Food details carry emotion', 'Contrast highlights passage of time', 'Natural object symbolism'],
          fullText: '　　糯米泡在清水里，一粒粒饱满透亮，像珍珠一样温润。粽叶的清香混着红枣的甜味，在厨房里弥漫开来。奶奶坐在小板凳上，花白的头发用一根黑色发卡别在耳后，正专注地包着粽子。\n\n　　"来，看好了。"奶奶抬起头，冲我笑了笑，手上的动作却没有停。两片粽叶交叠，折成漏斗形，舀一勺糯米，放两颗红枣，再盖一层米，最后用棉线缠绕三圈，打一个漂亮的结。整个过程行云流水，不到一分钟。\n\n　　"奶奶，你包了多少年的粽子了？"我问。\n\n　　"从嫁到你爷爷家开始，快五十年了吧。"奶奶算了算，"那时候哪有红枣，放点白糖就是最好的了。"\n\n　　我学着她的样子包，可粽叶在我手里像一个不听话的孩子，怎么也折不出那个完美的漏斗。米从缝隙里漏出来，棉线也缠得歪歪扭扭。奶奶笑着摇摇头，接过我手里那个"四不像"，三两下就修补好了。\n\n　　记忆里，每年端午都是这样的场景。小时候我在一旁捣乱，把粽叶当扇子扇风；后来上了学，端午变成了"三天假期"的代名词；再后来功课越来越忙，常常端午到了才发现奶奶的粽子已经煮好放在桌上。\n\n　　我什么时候开始，不再认真看奶奶包粽子了呢？\n\n　　蒸锅上了灶，水汽氤氲中，奶奶的背影比我记忆中矮了一些、弯了一些。她的手指关节有些肿大，缠棉线的时候偶尔会停下来揉一揉。我的鼻子突然一酸。\n\n　　"奶奶，明年我来包，你在旁边教我。"我说。\n\n　　"好啊，"奶奶笑得眼睛弯成了月牙，"不过你得多练练，你包的那个，煮到锅里就散了。"\n\n　　我们都笑了。粽子的香气渐渐浓郁起来，飘出厨房，飘满了整个院子。那一刻，阳光正好，微风不燥，奶奶在我身旁，粽子在锅里咕嘟咕嘟地响。\n\n　　这个世界上没有什么是永恒的——青春会老去，容颜会改变，甚至最亲的人也终将离开。但正因如此，那些平凡的、琐碎的、不起眼的时刻，才格外值得珍惜。\n\n　　奶奶的粽子，一年只包一次。而我，不想再错过任何一次。',
          fullTextEn: '　　Glutinous rice soaked in clear water, each grain plump and translucent like warm pearls. The fragrance of bamboo leaves mixed with the sweetness of red dates spread through the kitchen. Grandmother sat on a small stool, her grey-streaked hair pinned behind her ear with a black clip, concentrating on wrapping zongzi.\n\n　　"Come, watch carefully." Grandma looked up and smiled at me, but her hands never paused. Two bamboo leaves overlapped, folded into a funnel shape, a spoonful of glutinous rice, two red dates, another layer of rice, then cotton string wound three times to tie a beautiful knot. The entire process flowed like water, taking less than a minute.\n\n　　"Grandma, how many years have you been making zongzi?" I asked.\n\n　　"Since I married into your grandfather\'s family, nearly fifty years." She calculated. "Back then we didn\'t even have red dates — a little white sugar was the best filling."\n\n　　I tried copying her method, but the bamboo leaf in my hands was like a disobedient child, refusing to fold into that perfect funnel. Rice leaked through the gaps, and the string wound crookedly. Grandma shook her head with a smile, took my misshapen creation, and fixed it in a few quick moves.\n\n　　In my memory, every Dragon Boat Festival looked like this. As a child, I\'d play nearby, using bamboo leaves as fans. Later in school, the festival became synonymous with "three-day holiday." Even later, as homework piled up, I\'d often realize the festival had arrived only when grandma\'s cooked zongzi already sat on the table.\n\n　　When did I stop watching grandma wrap zongzi with care?\n\n　　The steamer went on the stove. Through the rising steam, grandma\'s silhouette looked shorter and more bent than I remembered. Her finger joints were slightly swollen, and she\'d occasionally pause while winding the string to rub them. My nose suddenly stung.\n\n　　"Grandma, next year I\'ll do the wrapping. You can sit beside me and teach." I said.\n\n　　"Sure," grandma smiled, her eyes curving into crescent moons. "But you need more practice — yours would fall apart in the pot."\n\n　　We both laughed. The zongzi fragrance gradually intensified, drifting out of the kitchen and filling the entire courtyard. In that moment, the sunlight was just right, the breeze gentle, grandma was beside me, and the zongzi bubbled softly in the pot.\n\n　　Nothing in this world is eternal — youth fades, faces change, even our dearest ones will eventually leave. But precisely because of this, those ordinary, mundane, unremarkable moments are especially worth cherishing.\n\n　　Grandma\'s zongzi are made only once a year. And I don\'t want to miss a single one again.',
          highlights: [
            { text: '粽叶在我手里像一个不听话的孩子', textEn: 'The bamboo leaf in my hands was like a disobedient child', why: '拟人比喻生动有趣，增添生活气息', whyEn: 'The rebellious leaf personalizes the narrator\'s clumsiness — humor born from incompetence, making the grandmother\'s fifty-year mastery feel all the more remarkable' },
            { text: '奶奶的背影比我记忆中矮了一些、弯了一些', textEn: 'Grandma\'s silhouette looked shorter and more bent than I remembered', why: '对比含蓄写出时间流逝和衰老', whyEn: 'Memory vs. reality — the gap between the remembered and the present grandmother is measured in millimeters of stature and degrees of curvature, but the emotional distance is vast' },
            { text: '阳光正好，微风不燥，奶奶在我身旁', textEn: 'The sunlight was just right, the breeze gentle, grandma was beside me', why: '短句排列营造温馨画面，是全文情感高点', whyEn: 'Three coordinates of perfection — light, air, presence — each clause shorter and more essential than the last, building to the simplest and most precious: "grandma was beside me"' }
          ],
          sections: [
            { type: '开头', fn: '场景展开', fnEn: 'Scene unfolding', detail: '五感描写包粽子场景', detailEn: 'Five-senses zongzi-making scene' },
            { type: '发展', fn: '对比回忆', fnEn: 'Contrastive retrospect', detail: '过去与现在端午节的变化', detailEn: 'Changes in Dragon Boat Festivals past and present' },
            { type: '高潮', fn: '情感觉醒', fnEn: 'Emotional awakening', detail: '发现奶奶的衰老，决心珍惜', detailEn: 'Noticing grandmother\'s aging, resolving to cherish' },
            { type: '结尾', fn: '感悟点题', fnEn: 'Reflective closing', detail: '平凡时刻的珍贵', detailEn: 'The preciousness of ordinary moments' }
          ]
        },
        {
          title: '值得感动的时刻',
          titleEn: 'A Moment Worth Being Moved By',
          score: 35, maxScore: 40,
          structure: 'diJinShi',
          techniques: ['duiBi', 'xinLiMiaoXie', 'xiJieMiaoXie', 'dianMianJieHe'],
          techniqueMarks: [
            { para: 0, text: '我像一支离弦的箭冲了出去', technique: '比喻', techniqueEn: 'Simile', effect: '箭的意象写出起跑的速度与力量', effectEn: 'Arrow metaphor captures the explosive launch — speed, trajectory, and the irreversibility of release' },
            { para: 1, text: '脚踝猛地一扭，整个人重重地摔在了塑胶跑道上', technique: '动作描写', techniqueEn: 'Action Detail', effect: '短促的动词连写出摔倒的猛烈和突然', effectEn: 'Staccato verbs — twist, crash — compress a two-second disaster into a single jarring sentence' },
            { para: 2, text: '不是因为疼，而是因为我觉得自己拖累了全班', technique: '心理描写', techniqueEn: 'Interior Monologue', effect: '真实心理揭示少年的集体荣誉感', effectEn: 'Pain subordinated to shame — the teenager\'s emotional hierarchy places collective belonging above physical sensation' },
            { para: 5, text: '全班同学都站了起来。他们没有叹气，没有抱怨', technique: '对比', techniqueEn: 'Contrast', effect: '用排除法（没有叹气、抱怨）反衬团结', effectEn: 'Defining unity by what\'s absent — no sighs, no blame — the negatives make the positive response feel chosen, not automatic' },
            { para: 6, text: '小个子李雯举着班旗，喊得满脸通红；平时最安静的王铭也在用力鼓掌', technique: '点面结合', techniqueEn: 'Focus-Panorama', effect: '特写两位典型人物，以点代面展现全班', effectEn: 'Two spotlights within the panorama — the smallest girl and the quietest boy, both pushed beyond their defaults, prove the collective force is universal' },
            { para: 7, text: '像一股温暖的洪流，托举着我向前走', technique: '比喻', techniqueEn: 'Simile', effect: '将加油声比作洪流，写出集体力量的不可抗拒', effectEn: 'Cheering as warm flood — irresistible yet nurturing, the metaphor resolves the contradiction between force and gentleness' },
            { para: 8, text: '全班爆发出比得了第一名还要热烈的欢呼', technique: '对比', techniqueEn: 'Contrast', effect: '跨终点线的欢呼超过夺冠，重新定义"胜利"', effectEn: 'Louder than a first-place finish — the comparison redefines what victory means, from ranking to solidarity' },
            { para: 8, text: '这才叫体育精神', technique: '点题', techniqueEn: 'Thematic Anchor', effect: '班主任一句话为全文画龙点睛', effectEn: 'The teacher\'s four-word verdict gives official language to what the class has already demonstrated in action' },
            { para: 9, text: '比赛的名次会被遗忘，但那些在你跌倒时向你伸出手、为你呐喊的人', technique: '夹叙夹议', techniqueEn: 'Narrative-Reflection Weave', effect: '叙议结合自然升华，不空洞', effectEn: 'Rankings are abstract; hands extended and voices raised are concrete — the essay\'s logic proves its claim by its own structure' },
            { para: 10, text: '你永远不是一个人在跑', textEn: 'You\'re never running alone', technique: '双关', techniqueEn: 'Double Meaning', effect: '既指赛场也指人生，双关收束全文', effectEn: 'The race is over but the metaphor isn\'t — "running" expands to encompass every challenge ahead, with the same invisible relay team behind you' }
          ],
          approach: '写运动会上"我"受伤后同学们接力帮助的故事，从个人感动上升到集体温暖的主题。',
          approachEn: 'Tells the story of classmates helping the narrator after an injury during sports day, elevating from personal emotion to the theme of collective warmth.',
          architecture: '赛前准备→比赛受伤→同学伸援→集体温暖→升华感悟。',
          architectureEn: 'Pre-race preparation → Injury during race → Classmates\' help → Collective warmth → Elevated reflection.',
          logic: '从自我到他人，从个体感动到集体力量的递进。',
          logicEn: 'From self to others, progressing from individual emotion to collective strength.',
          skills: ['细节捕捉准确', '心理转变有层次', '点面结合展现班集体', '结尾升华不空洞'],
          skillsEn: ['Accurate detail capture', 'Layered psychological transformation', 'Focus-panorama combination shows class community', 'Non-hollow elevated ending'],
          fullText: '　　发令枪响的那一刻，我像一支离弦的箭冲了出去。800米——这是我最擅长的项目，也是班级接力赛的最后一棒。\n\n　　前400米一切顺利。风从耳边呼啸而过，我感觉自己的步伐稳健有力。但在弯道处，我的右脚踩到了跑道边缘的一块凸起，脚踝猛地一扭，整个人重重地摔在了塑胶跑道上。\n\n　　膝盖传来火辣辣的疼痛，手掌也磨破了皮。我趴在地上，看着其他选手从我身边跑过，眼泪涌了上来——不是因为疼，而是因为我觉得自己拖累了全班。\n\n　　"别动！"一个声音从身后传来。是体育委员张浩，他已经从终点跑了过来。他蹲下来，把我的手臂搭在他的肩膀上，"能站起来吗？"\n\n　　我点点头。就在这时，我看见了令我终生难忘的一幕——\n\n　　跑道旁边，全班同学都站了起来。他们没有叹气，没有抱怨，而是齐声喊着："加油！你可以的！"\n\n　　小个子李雯举着班旗，喊得满脸通红；平时最安静的王铭也在用力鼓掌；班长跑过来递给我一瓶水和一条毛巾。更让我意外的是，隔壁班的几个同学也为我鼓起了掌。\n\n　　我一瘸一拐地站起来，张浩扶着我，我们一起走向终点线。速度很慢，每一步都牵扯着脚踝的疼痛。但身后的加油声越来越响，像一股温暖的洪流，托举着我向前走。\n\n　　当我跨过终点线的那一刻，全班爆发出比得了第一名还要热烈的欢呼。几个女生跑过来，眼眶红红的。班主任拍了拍我的肩膀："这才叫体育精神。"\n\n　　那个下午，我们班的接力赛成绩是倒数第二。但在我心里，我们是第一名。因为那一刻我明白了：比赛的名次会被遗忘，但那些在你跌倒时向你伸出手、为你呐喊的人，值得你用一辈子去感动、去珍惜。\n\n　　我至今保存着那天同学们给我写的加油卡片。每一张都很短，但每一张都很温暖。它们提醒我：你永远不是一个人在跑。',
          fullTextEn: '　　The moment the starting gun fired, I shot out like an arrow released from a bow. 800 meters — my strongest event and the last leg of our class relay.\n\n　　The first 400 meters went smoothly. Wind whistled past my ears as I felt my stride strong and steady. But at the curve, my right foot caught a raised edge of the track, my ankle twisted sharply, and I crashed heavily onto the rubber surface.\n\n　　My knee burned with searing pain, and my palms were scraped raw. Lying on the ground, watching other runners pass me, tears welled up — not from pain, but because I felt I\'d let down my entire class.\n\n　　"Don\'t move!" a voice called from behind. It was Zhang Hao, our PE representative, who had run over from the finish line. He crouched down, draping my arm over his shoulder. "Can you stand?"\n\n　　I nodded. At that moment, I saw something I\'ll never forget—\n\n　　Along the track, my entire class was on their feet. No sighing, no complaining — just a unified cheer: "You can do it! Keep going!"\n\n　　Petite Li Wen waved our class flag, face flushed red from shouting. Wang Ming, usually the quietest, clapped with all his might. The class president ran over with water and a towel. Even more surprisingly, several students from the neighboring class applauded for me too.\n\n　　I stood up, limping, with Zhang Hao supporting me as we walked toward the finish line together. Very slowly, each step tugging at the ankle pain. But the cheering behind me grew louder, like a warm flood lifting me forward.\n\n　　When I crossed the finish line, our class erupted in cheers louder than if we\'d won first place. Several girls ran over, eyes rimmed red. Our homeroom teacher patted my shoulder: "This is what sportsmanship looks like."\n\n　　That afternoon, our class relay result was second to last. But in my heart, we were first. Because in that moment I understood: race rankings will be forgotten, but those who extend their hands when you fall and cheer for you — they are worth being moved by and cherishing for a lifetime.\n\n　　I still keep the encouragement cards my classmates wrote for me that day. Each one is short, but each one is warm. They remind me: you\'re never running alone.',
          highlights: [
            { text: '不是因为疼，而是因为我觉得自己拖累了全班', textEn: 'Not from pain, but because I felt I\'d let down my entire class', why: '心理描写真实，展现青少年的集体荣誉感', whyEn: 'The "not-but" structure reveals that physical pain registers less than social guilt — the teenager\'s deepest nerve is collective belonging' },
            { text: '像一股温暖的洪流，托举着我向前走', textEn: 'Like a warm flood lifting me forward', why: '比喻精准有力，将集体力量具象化', whyEn: 'Flood as metaphor for collective will — something too powerful to resist, yet warm rather than destructive, carrying rather than drowning' },
            { text: '你永远不是一个人在跑', textEn: 'You\'re never running alone', why: '结尾短句有力，双关意味深长', whyEn: 'Works on both the athletic and existential register — the race is literal, the "never alone" is forever; seven characters contain the entire essay\'s thesis' }
          ],
          sections: [
            { type: '开头', fn: '紧张开场', fnEn: 'Tense opening', detail: '比赛起跑，营造紧张感', detailEn: 'Race start, building tension' },
            { type: '发展', fn: '突发意外', fnEn: 'Unexpected incident', detail: '摔倒受伤，自责情绪', detailEn: 'Fall and injury, self-blame' },
            { type: '高潮', fn: '集体援助', fnEn: 'Collective support', detail: '全班同学的呐喊和帮助', detailEn: 'Entire class cheering and helping' },
            { type: '结尾', fn: '感悟升华', fnEn: 'Reflective elevation', detail: '理解真正的"第一名"', detailEn: 'Understanding true "first place"' }
          ]
        },
        {
          title: '值得反思的时刻',
          titleEn: 'A Moment Worth Reflecting On',
          score: 36, maxScore: 40,
          structure: 'zongFenZong',
          techniques: ['duiBi', 'jiaXuJiaYi', 'xinLiMiaoXie', 'yiXiaoJianDa'],
          techniqueMarks: [
            { para: 0, text: '有些话，一旦说出口，就再也收不回来了', technique: '设悬', techniqueEn: 'Foreshadowing', effect: '开篇制造悬念，暗示将要讲述的是一个遗憾', effectEn: 'The irreversibility warning creates anticipation — the reader knows words will wound before knowing which words or whom' },
            { para: 3, text: '头也不抬地说了一句："这画得也太丑了吧，鸟画得像鸡一样。"', technique: '对话描写', techniqueEn: 'Dialogue', effect: '"头也不抬"的动作写出漫不经心的伤害', effectEn: '"Without looking up" is the cruelest detail — the injury is compounded by the refusal to even witness what\'s being destroyed' },
            { para: 4, text: '小雨的笑容一点一点地消失', technique: '细节描写', techniqueEn: 'Slow-Motion Detail', effect: '笑容渐消的慢镜头比瞬间崩溃更令人心痛', effectEn: 'The gradual fade is worse than an instant collapse — smile erasing in slow motion forces the reader to watch what the narrator missed' },
            { para: 4, text: '她默默收起画纸，一句话也没说就走了', technique: '留白', techniqueEn: 'Deliberate Silence', effect: '沉默比争吵更有力量，暗示伤害之深', effectEn: 'Silence as the loudest response — no argument, no tears, just a quiet folding that says everything' },
            { para: 5, text: '良言一句三冬暖，恶语伤人六月寒', technique: '引用', techniqueEn: 'Proverb', effect: '古语触发自我反思的转折', effectEn: 'The proverb arrives as mirror — suddenly the narrator sees their own words from the receiving end' },
            { para: 6, text: '她没有生气，没有反驳，只是安静地把画折起来，放进了书包的最里层', technique: '动作描写', techniqueEn: 'Action Detail', effect: '折画放书包最里层的动作写出珍视与受伤的双重含义', effectEn: 'Folding into the deepest pocket — the drawing is simultaneously protected and hidden, precious enough to keep but too wounded to show' },
            { para: 7, text: '她把最珍贵的东西拿给我看，我却用一句话，把它碾碎了', technique: '对比', techniqueEn: 'Contrast', effect: '信任与碾碎的强烈对比，写出伤害的本质', effectEn: 'Trust offered vs. trust crushed — one sentence did what no criticism could: it attacked not the art but the vulnerability of sharing' },
            { para: 8, text: '你的画不丑，是我的话太丑了', technique: '对比金句', techniqueEn: 'Contrastive Epigram', effect: '巧妙移位"丑"的主体，道歉真诚动人', effectEn: 'Relocates ugliness from object to subject — the structural mirror makes the apology not just sincere but artistically satisfying' },
            { para: 9, text: '让我难过的不是你的评价，而是你根本没有认真看', technique: '以小见大', techniqueEn: 'Microcosm', effect: '好友的话将反思从"说了什么"推向"态度如何"，深化主题', effectEn: 'Reframes the entire injury: not the verdict but the absence of attention — the deepest hurt is discovering you weren\'t important enough to look at' },
            { para: 11, text: '真正的坦诚，不是口无遮拦，而是在真诚的前提下，用善意的方式表达', technique: '夹叙夹议', techniqueEn: 'Narrative-Reflection Weave', effect: '重新定义"坦诚"，避免说教感', effectEn: 'Redefines honesty from unfiltered output to filtered input — sincerity is the content, kindness is the delivery method' }
          ],
          approach: '写"我"因一句无心的话伤害了好友，从自以为是到反思悔悟的过程，探讨语言的力量和友情的珍贵。',
          approachEn: 'The narrator\'s careless remark hurts a friend, tracing the journey from self-righteousness to remorseful reflection, exploring the power of words and the preciousness of friendship.',
          architecture: '总：回想起那个值得反思的时刻→分：事件经过（说错话→冷战→反思→道歉）→总：语言与友情的感悟。',
          architectureEn: 'General: Recalling that moment worth reflecting on → Specific: Event (careless words → cold war → reflection → apology) → General: Insight about language and friendship.',
          logic: '由自我中心到换位思考的认知升级。',
          logicEn: 'Cognitive upgrade from self-centeredness to empathy.',
          skills: ['以小见大写日常冲突', '夹叙夹议深化主题', '心理变化有层次', '对比突出成长'],
          skillsEn: ['Small daily conflict reveals big theme', 'Narration-reflection deepens theme', 'Layered psychological change', 'Contrast highlights growth'],
          fullText: '　　如果时间可以倒流，我最想回到的，是初二那个秋天的午后。不是为了改变什么，而是为了提醒自己：有些话，一旦说出口，就再也收不回来了。\n\n　　事情的起因很小。课间休息时，好友小雨兴高采烈地给我看她画的一幅画——一只站在枝头的小鸟。她学画画才两个月，线条有些生涩，颜色也涂得不太均匀。\n\n　　"怎么样？"她满怀期待地看着我。\n\n　　我当时正在赶作业，头也不抬地说了一句："这画得也太丑了吧，鸟画得像鸡一样。"\n\n　　说完我就继续写作业了，完全没注意到小雨脸上的表情——后来同桌告诉我，小雨的笑容一点一点地消失，她默默收起画纸，一句话也没说就走了。\n\n　　那之后，小雨整整一个星期没有和我说话。我起初还觉得是她"玻璃心"，不就是说了一句实话吗？直到我在语文课上读到一句话："良言一句三冬暖，恶语伤人六月寒。"\n\n　　那一刻，我突然想起了小雨收起画纸时的样子。她没有生气，没有反驳，只是安静地把画折起来，放进了书包的最里层。那种安静，比任何争吵都让人心疼。\n\n　　我开始反思：我说的真的是"实话"吗？不，那只是我的粗心和冷漠。小雨分享的不是一幅画的水准，而是学画画的快乐和对我的信任。她把最珍贵的东西拿给我看，我却用一句话，把它碾碎了。\n\n　　第八天，我买了一盒画笔，写了一张纸条："对不起，你的画不丑，是我的话太丑了。希望你继续画下去，等你办画展那天，第一张门票留给我。"\n\n　　小雨看完纸条，沉默了几秒，然后笑了。她说："我也反思了，也许我确实需要练习。但你的话让我难过的不是你的评价，而是你根本没有认真看。"\n\n　　这句话像一根针，扎进了我心里最柔软的地方。\n\n　　从那以后，我学会了在开口之前先想一想：这句话，是在帮助对方，还是在伤害对方？真正的坦诚，不是口无遮拦，而是在真诚的前提下，用善意的方式表达。\n\n　　那个秋天的午后，是我最值得反思的时刻。它教会我一个简单但深刻的道理：语言是一把双刃剑，可以温暖人心，也可以刺穿灵魂。而我们，应该选择做那个递出温暖的人。',
          fullTextEn: '　　If time could flow backward, the moment I\'d most want to return to is that autumn afternoon in my second year. Not to change anything, but to remind myself: some words, once spoken, can never be taken back.\n\n　　It started over something small. During break, my good friend Xiao Yu excitedly showed me a drawing she\'d made — a small bird perched on a branch. She\'d only been learning to draw for two months; the lines were somewhat rough and the colors uneven.\n\n　　"What do you think?" She looked at me full of expectation.\n\n　　I was rushing through homework at the time and said without looking up: "That\'s way too ugly — the bird looks like a chicken."\n\n　　I went right back to my homework, completely oblivious to the expression on Xiao Yu\'s face. My deskmate later told me that Xiao Yu\'s smile faded bit by bit, and she silently put away her drawing and left without a word.\n\n　　After that, Xiao Yu didn\'t speak to me for an entire week. At first I thought she was being "oversensitive" — I just told the truth, didn\'t I? Until I read a line in Chinese class: "A kind word warms three winters; a cruel word chills in June."\n\n　　In that moment, I suddenly recalled how Xiao Yu looked when she put away her drawing. She wasn\'t angry, didn\'t argue back — just quietly folded the paper and placed it in the innermost pocket of her backpack. That quiet hurt more than any argument.\n\n　　I began to reflect: was what I said really "the truth"? No — it was just my carelessness and coldness. What Xiao Yu shared wasn\'t a painting\'s technical level, but the joy of learning to draw and her trust in me. She showed me her most precious thing, and I crushed it with one sentence.\n\n　　On the eighth day, I bought a box of colored pencils and wrote a note: "I\'m sorry. Your painting isn\'t ugly — my words were. Please keep drawing. When you have your exhibition someday, save me the first ticket."\n\n　　Xiao Yu read the note, was silent for a few seconds, then smiled. She said: "I reflected too — maybe I do need practice. But what hurt me about your words wasn\'t your critique — it was that you didn\'t even really look."\n\n　　That sentence was like a needle, piercing the softest part of my heart.\n\n　　From then on, I learned to think before speaking: is this word helping or hurting? True honesty isn\'t speaking without filter — it\'s expressing with kindness under the premise of sincerity.\n\n　　That autumn afternoon is my most worthy moment of reflection. It taught me a simple but profound truth: language is a double-edged sword — it can warm hearts or pierce souls. And we should choose to be the person who offers warmth.',
          highlights: [
            { text: '你的画不丑，是我的话太丑了', textEn: 'Your painting isn\'t ugly — my words were', why: '道歉金句，对比巧妙，真诚动人', whyEn: 'Relocates ugliness from canvas to speech — the reversal transforms an apology into a confession, and the symmetry makes it impossible to forget' },
            { text: '你根本没有认真看', textEn: 'You didn\'t even really look', why: '好友的回应直击要害，引发更深反思', whyEn: 'The deepest wound isn\'t the harsh critique but the absent attention — Xiao Yu reframes the injury from what was said to what was refused' },
            { text: '语言是一把双刃剑，可以温暖人心，也可以刺穿灵魂', textEn: 'Language is a double-edged sword — it can warm hearts or pierce souls', why: '结尾比喻精准，总结全文主旨', whyEn: 'The sword metaphor works because the essay has shown both edges: the piercing carelessness and the warming apology note — same instrument, opposite effects' }
          ],
          sections: [
            { type: '总起', fn: '悬念引入', fnEn: 'Suspenseful intro', detail: '想回到那个午后的愿望', detailEn: 'Wish to return to that afternoon' },
            { type: '事件', fn: '冲突展开', fnEn: 'Conflict unfolds', detail: '无心之话伤害好友', detailEn: 'Careless words hurt a friend' },
            { type: '反思', fn: '认知转变', fnEn: 'Cognitive shift', detail: '从自以为是到换位思考', detailEn: 'From self-righteousness to empathy' },
            { type: '总结', fn: '感悟升华', fnEn: 'Reflective elevation', detail: '语言的力量和善意表达', detailEn: 'Power of language and kind expression' }
          ]
        },
        {
          title: '值得骄傲的时刻',
          titleEn: 'A Moment Worth Being Proud Of',
          score: 35, maxScore: 40,
          structure: 'daoXuShi',
          techniques: ['daoXu', 'duiBi', 'xiJieMiaoXie', 'paiBI'],
          techniqueMarks: [
            { para: 0, text: '聚光灯打在脸上，有些晃眼', technique: '倒叙', techniqueEn: 'In Medias Res', effect: '以颁奖台的光鲜开篇，与后文失败形成强烈反差', effectEn: 'Opens under the spotlight — the dazzle is both literal and narrative, setting up the contrast with the mess that preceded it' },
            { para: 1, text: '浮现的却不是这个光鲜的画面，而是三个月前那个灰头土脸的下午', technique: '对比', techniqueEn: 'Contrast', effect: '"光鲜"与"灰头土脸"对比开启回忆线', effectEn: 'Glamour vs. grime — the narrator\'s memory refuses the podium\'s narrative, insisting on honoring the ugly truth of the process' },
            { para: 2, text: '把阳台上的花盆浇成了一片泽国', technique: '夸张', techniqueEn: 'Hyperbole', effect: '幽默夸张写出第一次失败的惨烈', effectEn: 'A flooded balcony as miniature disaster — humor softens the failure while making it vivid and unforgettable' },
            { para: 2, text: '觉得自己简直是个笑话', technique: '心理描写', techniqueEn: 'Interior Monologue', effect: '自嘲式心理真实可感，写出失败后的自我怀疑', effectEn: 'Self as joke — the harshest critic is always internal, and this admission of ridiculousness makes the later persistence more heroic' },
            { para: 4, text: '失败不丢人，放弃才丢人', technique: '点睛之笔', techniqueEn: 'Epiphany Line', effect: '老师一句话改变叙事走向，简洁有力', effectEn: 'Teacher\'s binary cuts through the narrator\'s spiral — shame is relocated from failure to abandonment' },
            { para: 5, text: '把代码重写了三遍，把水管接口从胶带密封改成了螺纹连接', technique: '细节描写', techniqueEn: 'Technical Detail', effect: '具体的技术改进增强真实感和专业性', effectEn: 'Tape to threaded fittings — the specificity is the proof; real innovation lives in these unglamorous upgrades' },
            { para: 5, text: '同学们打球的声音从窗外传来，我咽了咽口水，继续焊电路板', technique: '对比', techniqueEn: 'Contrast', effect: '同龄人玩耍与独自坚持的含蓄对比，写出代价', effectEn: 'Basketball sounds as temptation — the swallowed desire captures the precise cost of choosing a soldering iron over a ball' },
            { para: 7, text: '土壤湿度降到30%以下，水泵自动启动；达到60%时自动停止', technique: '数据描写', techniqueEn: 'Data Detail', effect: '精确参数写出系统的可靠性，为"骄傲"提供事实支撑', effectEn: 'Numbers as vindication — the 30%/60% thresholds prove the system works, and proof is what separates pride from delusion' },
            { para: 8, text: '不是"我赢了"，而是"那些失败的日子，值了"', technique: '心理描写', techniqueEn: 'Interior Monologue', effect: '内心独白重新定义胜利的含义', effectEn: 'The narrator\'s thought rewrites the trophy\'s inscription — it commemorates not the win but the worth of the losing days' },
            { para: 9, text: '那些弯着腰焊电路板的黄昏，那些反复重写代码的深夜，那些一次次失败后又一次次站起来的时刻', technique: '排比', techniqueEn: 'Parallelism', effect: '三重排比回收全文细节，构成真正的"骄傲清单"', effectEn: 'Triple parallel cascade inventories the real trophy — evenings, late nights, and recoveries, each clause a medal earned in solitude' }
          ],
          approach: '以科技创新比赛获奖为切入，倒叙回忆从失败到成功的过程，展现坚持与创新的价值。',
          approachEn: 'Opens with winning a tech innovation competition, then recalls the journey from failure to success through flashback, showing the value of persistence and innovation.',
          architecture: '倒叙：颁奖台上→回溯准备和失败→关键突破→回到颁奖台→感悟。',
          architectureEn: 'Flashback: On the podium → Recall preparation and failures → Key breakthrough → Return to podium → Reflection.',
          logic: '结果→过程→结果，形成环形叙事，突出"骄傲"不在于结果而在于过程。',
          logicEn: 'Result → process → result, creating circular narrative, highlighting pride lies in the process not the result.',
          skills: ['倒叙吸引读者兴趣', '失败与成功的对比', '技术细节增添真实感', '排比句式增强结尾力度'],
          skillsEn: ['Flashback hooks reader interest', 'Contrast between failure and success', 'Technical details add authenticity', 'Parallelism strengthens the ending'],
          fullText: '　　聚光灯打在脸上，有些晃眼。我站在昆明市青少年科技创新大赛的颁奖台上，手里捧着银色的奖杯，耳边回响着主持人的声音："一等奖——智能浇灌系统！"\n\n　　台下掌声雷动，妈妈在第三排使劲挥手，王老师笑得像个孩子。但此刻我的脑海里，浮现的却不是这个光鲜的画面，而是三个月前那个灰头土脸的下午。\n\n　　那天，我第一版的浇灌系统原型在测试中彻底失败了。水管接口漏水，传感器读数混乱，Arduino板上的代码逻辑错误导致水泵不停运转，把阳台上的花盆浇成了一片泽国。妈妈看着满地的水，欲言又止。我蹲在地上，看着那堆乱七八糟的电线和零件，觉得自己简直是个笑话。\n\n　　"要不……就算了吧？"我对自己说。\n\n　　但王老师的一句话改变了我："失败不丢人，放弃才丢人。你的想法很好，只是执行需要完善。"\n\n　　于是我重新开始。我在网上查阅了大量关于土壤湿度传感器的资料，把代码重写了三遍，把水管接口从胶带密封改成了螺纹连接。每天放学后，我都在阳台上调试到天黑。同学们打球的声音从窗外传来，我咽了咽口水，继续焊电路板。\n\n　　第二版比第一版好了很多，但传感器在潮湿环境下依然不稳定。我又花了一周时间研究防水方案，最终用热缩管把传感器探头包裹起来，问题才彻底解决。\n\n　　第三版终于成功了。系统能根据土壤湿度自动判断是否需要浇水，还能通过手机App远程监控。当花盆里的土壤湿度降到30%以下，水泵自动启动；达到60%时自动停止。精准、高效、节水。\n\n　　回到颁奖台上的这一刻，我紧紧握着奖杯，心里想的不是"我赢了"，而是"那些失败的日子，值了"。\n\n　　值得骄傲的不是这座奖杯，而是那些弯着腰焊电路板的黄昏，那些反复重写代码的深夜，那些一次次失败后又一次次站起来的时刻。\n\n　　骄傲，不是因为成功，而是因为我没有放弃。',
          fullTextEn: '　　The spotlight hit my face, somewhat dazzling. I stood on the podium of Kunming\'s Youth Science and Technology Innovation Competition, holding a silver trophy, the host\'s voice echoing: "First Prize — Smart Irrigation System!"\n\n　　The audience erupted in applause. Mom waved vigorously from the third row. Teacher Wang smiled like a child. But in my mind, what surfaced wasn\'t this glamorous scene, but that disheveled afternoon three months ago.\n\n　　That day, my first irrigation system prototype failed completely during testing. Pipe connections leaked, sensor readings were chaotic, and a logic error in the Arduino code kept the water pump running nonstop, flooding the balcony flower pots into a swamp. Mom looked at the water-covered floor, wanting to speak but holding back. I crouched on the ground, staring at the tangled mess of wires and components, feeling like an absolute joke.\n\n　　"Maybe… I should just quit?" I told myself.\n\n　　But Teacher Wang\'s words changed me: "Failure isn\'t shameful — giving up is. Your idea is great; the execution just needs refinement."\n\n　　So I started over. I researched soil moisture sensors extensively online, rewrote the code three times, and changed pipe connections from tape sealing to threaded fittings. Every day after school, I debugged on the balcony until dark. Classmates\' basketball sounds drifted through the window; I swallowed hard and continued soldering circuit boards.\n\n　　Version two was much better, but the sensor remained unstable in humid conditions. I spent another week researching waterproofing solutions, finally wrapping the sensor probe in heat-shrink tubing — that solved the problem completely.\n\n　　Version three finally worked. The system could automatically determine watering needs based on soil moisture, with remote monitoring via smartphone app. When soil moisture dropped below 30%, the pump started automatically; at 60%, it stopped. Precise, efficient, water-saving.\n\n　　Back on the podium in this moment, gripping the trophy tightly, I wasn\'t thinking "I won" but "those days of failure were worth it."\n\n　　What\'s worth being proud of isn\'t this trophy, but those evenings hunched over soldering circuit boards, those late nights rewriting code, those moments of standing up again after failing again and again.\n\n　　Pride comes not from success, but from not giving up.',
          highlights: [
            { text: '我蹲在地上，看着那堆乱七八糟的电线和零件，觉得自己简直是个笑话', textEn: 'I crouched on the ground, staring at the tangled mess of wires and components, feeling like an absolute joke', why: '自嘲式描写真实可感，拉近与读者距离', whyEn: 'The physical crouch mirrors the emotional collapse — surrounded by the debris of ambition, the narrator sees failure reflected in every loose wire' },
            { text: '同学们打球的声音从窗外传来，我咽了咽口水，继续焊电路板', textEn: 'Classmates\' basketball sounds drifted through the window; I swallowed hard and continued soldering circuit boards', why: '对比含蓄，用细节写坚持比口号更动人', whyEn: 'The swallowed longing is more eloquent than any motivational speech — one sensory detail captures the entire cost of dedication' },
            { text: '骄傲，不是因为成功，而是因为我没有放弃', textEn: 'Pride comes not from success, but from not giving up', why: '结尾短句有力，升华"骄傲"的定义', whyEn: 'Redefines pride from outcome to process — the trophy is just a prop; the real prize was earned across three failed prototypes' }
          ],
          sections: [
            { type: '倒叙开头', fn: '结果呈现', fnEn: 'Result presentation', detail: '颁奖台上的光鲜', detailEn: 'The glamour of the podium' },
            { type: '回溯', fn: '失败经历', fnEn: 'Failure experience', detail: '三次迭代的艰辛过程', detailEn: 'The arduous process of three iterations' },
            { type: '高潮', fn: '成功时刻', fnEn: 'Success moment', detail: '第三版系统成功运行', detailEn: 'Third version system successfully runs' },
            { type: '结尾', fn: '重新定义', fnEn: 'Redefinition', detail: '骄傲的真正含义', detailEn: 'True meaning of pride' }
          ]
        }
      ]
    },
    {
      id: 'yn2024_comp1',
      paperId: 'yn2024',
      year: 2024,
      region: '云南省',
      prompt: '山坡在山脚和山顶之间。行至山坡，身边有好友偕行，远方有烟岚可眺，峰顶有未知待探索，来路有满满的收获……请以"走在山坡上"为题写一篇作文。',
      promptEn: 'A hillside lies between the foot and the summit. On the slope, friends walk alongside you, misty mountains await in the distance, the peak holds unknowns to explore, and the path behind holds plentiful harvest... Write an essay titled "Walking on the Hillside."',
      context: '"山坡"是一个隐喻，既可实写登山经历，也可虚写人生旅途中"在路上"的状态——既非起点的稚嫩，也非终点的圆满，而是正在攀登的进行时。',
      contextEn: '"Hillside" is a metaphor — it can describe a literal hiking experience or figuratively represent being "on the journey" of life: neither the naivety of the starting point nor the completion of the destination, but the present tense of climbing.',
      type: 'fullTitle',
      category: '命题记叙文/散文',
      categoryEn: 'Full-title Narrative/Prose',
      wordCount: 600,
      guide: {
        analysis: '本题有较大的写作空间。"山坡"可实可虚：实写登山旅途的见闻感悟，虚写人生某个阶段的奋斗与成长。关键词是"走在……上"——强调过程、状态和正在进行的体验。可以写初三备考、青春成长、与朋友同行、面对未来的期待等。',
        analysisEn: 'This topic offers broad creative space. "Hillside" can be literal or figurative: literally about hiking observations, figuratively about striving and growing during a life stage. The key is "walking on" — emphasizing process, state, and ongoing experience.',
        keyPoints: ['理解"山坡"的隐喻义', '强调"正在路上"的过程感', '写出所见所思所感', '虚实结合更出彩'],
        keyPointsEn: ['Understand the metaphorical meaning of "hillside"', 'Emphasize the sense of being "on the way"', 'Write observations, thoughts, and feelings', 'Combining literal and figurative is more striking'],
        pitfalls: ['只写爬山流水账', '只谈大道理不写具体经历', '"山坡"意象脱节'],
        pitfallsEn: ['Only writing a chronological hiking log', 'Only discussing philosophy without specific experiences', 'Disconnected "hillside" imagery']
      },
      essays: [
        {
          title: '走在山坡上',
          titleEn: 'Walking on the Hillside',
          score: 38, maxScore: 40,
          structure: 'diJinShi',
          techniques: ['huanJingChenTuo', 'biFangNiRen', 'jiaXuJiaYi', 'shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '山坡是一段没有捷径的路', technique: '隐喻开篇', techniqueEn: 'Metaphorical Opening', effect: '一句话双关实虚两层，奠定全文基调', effectEn: 'A single sentence that reads as trail description and life philosophy simultaneously — the dual register is established before the story even begins' },
            { para: 1, text: '雾气还没散尽，石阶上凝着一层薄薄的露水', technique: '环境描写', techniqueEn: 'Setting Detail', effect: '晨雾露水营造清新开场氛围', effectEn: 'Morning mist and dew create a liminal atmosphere — the day hasn\'t fully committed to clarity, mirroring the narrator\'s journey from uncertainty to insight' },
            { para: 2, text: '就像初一刚入学那会儿，一切都是新鲜的、轻松的', technique: '虚实转换', techniqueEn: 'Literal-Figurative Shift', effect: '自然过渡从实景到回忆，开启双线叙事', effectEn: 'The pivot from stone steps to Grade 7 hallways is seamless — "just like" bridges two timelines without breaking stride' },
            { para: 3, text: '灌木变成了高大的松树，阳光被枝叶切割成碎片', technique: '环境衬托', techniqueEn: 'Pathetic Fallacy', effect: '植被变化暗示路途渐难，景随情移', effectEn: 'Vegetation shift from trimmed shrubs to towering pines — the landscape growing wilder as challenges intensify' },
            { para: 4, text: '压力像山坡上越来越稀薄的空气，让人喘不过气', technique: '比喻', techniqueEn: 'Simile', effect: '将学业压力比作高山稀薄空气，虚实合一', effectEn: 'Academic pressure as thinning altitude air — the literal hillside and metaphorical one share the same breathlessness' },
            { para: 4, text: '不是不累，而是累了也不停下', technique: '夹叙夹议', techniqueEn: 'Narrative-Reflection Weave', effect: '一句重新定义"坚持"，议论融入叙事毫不突兀', effectEn: 'Redefines perseverance from the absence of fatigue to the refusal to yield to it — philosophy distilled into a single breath' },
            { para: 5, text: '远处的滇池像一面银镜，映着蓝天白云', technique: '比喻', techniqueEn: 'Simile', effect: '银镜比喻写出半山腰豁然开朗的美景', effectEn: 'Dianchi as silver mirror — the sudden panorama rewards the climb and validates the father\'s coming words' },
            { para: 6, text: '不是在山顶才有好风景，在半路也有', technique: '点睛之笔', techniqueEn: 'Epiphany Line', effect: '爸爸的话自然点出主旨，既是登山感受也是人生哲理', effectEn: 'Dad\'s words arrive as scenic commentary but land as existential insight — the best philosophy doesn\'t announce itself' },
            { para: 7, text: '竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生', technique: '引用', techniqueEn: 'Literary Allusion', effect: '苏轼词与少年心境呼应，展现文化积淀', effectEn: 'Su Shi\'s defiant rain-walk echoes across nine centuries to validate a teenager\'s own hillside — literary allusion as emotional bridge between eras' },
            { para: 9, text: '山坡从来不是目的地，但它是旅程中最美的一段', technique: '首尾呼应', techniqueEn: 'Circular Echo', effect: '结尾回应开头"没有捷径"，升华为"最美一段"，意境深远', effectEn: 'Opening\'s "no shortcuts" transforms into "most beautiful stretch" — the constraint becomes the gift, completing the essay\'s philosophical arc' }
          ],
          approach: '虚实结合，以一次真实的登山经历为"面"，以初三备考的心路历程为"里"，层层递进，将自然山坡与人生山坡融为一体。',
          approachEn: 'Combines literal and figurative: a real hiking experience as the surface layer, with the inner journey of preparing for zhongkao as the deep layer, progressively merging natural and life hillsides into one.',
          architecture: '第一层：山脚出发（回忆初中开始）→第二层：山坡途中的风景与疲惫（初三的压力与收获）→第三层：向山顶仰望（对未来的期待）。',
          architectureEn: 'Layer 1: Departing from the base (recalling the start of middle school) → Layer 2: Scenery and fatigue on the slope (Grade 9 pressures and gains) → Layer 3: Looking up at the summit (expectations for the future).',
          logic: '自然描写与人生感悟交替呈现，由具体到抽象，实现虚实交融。',
          logicEn: 'Nature descriptions and life reflections alternate, moving from concrete to abstract, achieving literal-figurative fusion.',
          skills: ['虚实双线交织', '环境描写精美', '比喻贴切自然', '结尾首尾呼应，意境深远'],
          skillsEn: ['Dual literal-figurative interweaving', 'Beautiful environmental descriptions', 'Natural and apt metaphors', 'Echo ending with profound imagery'],
          fullText: '　　山坡是一段没有捷径的路。\n\n　　清晨六点，背着水壶和干粮，我和爸爸从西山脚下出发。雾气还没散尽，石阶上凝着一层薄薄的露水，走起来有些滑。爸爸在前面，步伐稳健；我跟在后面，呼吸渐渐急促。\n\n　　山脚的路最好走。两旁是修剪整齐的灌木，石阶宽阔平缓，游客三三两两，有说有笑。就像初一刚入学那会儿，一切都是新鲜的、轻松的。课程不难，老师温和，同学热情，每一天都像在平坦的路上散步。\n\n　　山坡开始变陡了。灌木变成了高大的松树，阳光被枝叶切割成碎片，洒在布满松针的土路上。我的腿开始发酸，额头上沁出了汗珠。"歇会儿吧？"爸爸回头看我。我摇摇头，咬着牙继续往上走。\n\n　　这让我想起了初二下学期。那时候物理和化学同时加入，作业像雪片一样飞来。每天晚上十一点才能放下笔，早上六点又要起床。压力像山坡上越来越稀薄的空气，让人喘不过气。但我也是在那段时间，第一次体会到了"坚持"二字的重量——不是不累，而是累了也不停下。\n\n　　走到半山腰，风景突然开阔了。回头望去，来时的路已经隐没在层层叠叠的绿意中，远处的滇池像一面银镜，映着蓝天白云。我深吸一口气，山风带着松脂的清香，灌满了胸腔。\n\n　　"好看吧？"爸爸站在一块巨石上，指着远方，"这就是山坡给你的奖赏——不是在山顶才有好风景，在半路也有。"\n\n　　是啊，走在山坡上的人，已经不再是山脚下那个犹豫要不要出发的人了。我想起了初三模拟考进步了三十名的那个傍晚，想起了课间和好友在操场上大笑的午后，想起了语文课上第一次读懂苏轼那句"竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生"时的激动。这些，都是山坡上的风景。\n\n　　山顶还在上方。我抬头望去，云雾缭绕中若隐若现。中考在前方等着我，高中在前方等着我，更远的未来在前方等着我。我不知道山顶是什么样子，但我知道，走在山坡上的每一步，都在让我变成更好的自己。\n\n　　我没有停下脚步。山风吹过来，像一双无形的手，推着我继续向上。\n\n　　山坡从来不是目的地，但它是旅程中最美的一段。因为在这里，你既能回望来路的成长，又能展望前路的希望。而我，正走在自己的山坡上。',
          fullTextEn: '　　A hillside is a path with no shortcuts.\n\n　　At six in the morning, carrying a water bottle and snacks, Dad and I set off from the foot of Xishan. The mist hadn\'t fully cleared, a thin layer of dew clung to the stone steps, making them slightly slippery. Dad walked ahead with steady steps; I followed behind, breath gradually quickening.\n\n　　The path at the base was easiest. Trimmed shrubs lined both sides, stone steps were wide and gentle, tourists chatted in small groups. Just like when I first entered Grade 7 — everything was fresh and easy. Courses weren\'t hard, teachers were gentle, classmates enthusiastic. Each day was like strolling on a flat road.\n\n　　The slope steepened. Shrubs gave way to tall pine trees; sunlight was cut into fragments by branches, scattered on the needle-covered dirt path. My legs began to ache, sweat beading on my forehead. "Want to rest?" Dad looked back. I shook my head and pressed on, teeth clenched.\n\n　　This reminded me of the second semester of Grade 8. Physics and chemistry joined the curriculum simultaneously, homework flew in like snowflakes. I couldn\'t put down my pen until eleven each night, then had to wake at six. The pressure was like the thinning air on the slope — suffocating. But it was during that time I first felt the weight of "perseverance" — not being tired isn\'t the point; continuing even when tired is.\n\n　　At the halfway point, the view suddenly opened up. Looking back, the path I\'d come was lost in layers upon layers of green. In the distance, Dianchi Lake lay like a silver mirror reflecting blue sky and white clouds. I took a deep breath; mountain wind carrying the clean scent of pine resin filled my chest.\n\n　　"Beautiful, right?" Dad stood on a boulder, pointing into the distance. "This is the hillside\'s reward — you don\'t need to reach the summit for great views; the journey offers them too."\n\n　　Indeed — the person walking on the hillside is no longer the one who hesitated at the base about whether to set out. I recalled that evening when my mock exam ranking improved by thirty places, those afternoons laughing with friends on the playground during breaks, that thrilling moment in Chinese class when I first understood Su Shi\'s line: "With bamboo staff and straw sandals, lighter than a horse — who\'s afraid? A raincoat in the misty rain, I live my life at ease." These were all scenery on the hillside.\n\n　　The summit was still above. I looked up at it, appearing and disappearing in swirling clouds. The zhongkao awaits ahead, high school awaits ahead, an even more distant future awaits ahead. I don\'t know what the summit looks like, but I know every step on this hillside is making me a better version of myself.\n\n　　I didn\'t stop. Mountain wind blew toward me like invisible hands, pushing me ever upward.\n\n　　A hillside is never the destination, but it\'s the most beautiful stretch of the journey. Because here, you can look back at the growth behind you and forward at the hope ahead. And I am walking on my own hillside.',
          highlights: [
            { text: '山坡是一段没有捷径的路', textEn: 'A hillside is a path with no shortcuts', why: '开篇一句定调，简洁有力，既是实写也是隐喻', whyEn: 'Nine characters that function as both trail marker and life thesis — the absence of shortcuts is not a complaint but a declaration of what makes the journey worthwhile' },
            { text: '不是在山顶才有好风景，在半路也有', textEn: 'You don\'t need to reach the summit for great views; the journey offers them too', why: '爸爸的话点出核心思想，自然不说教', whyEn: 'Dad speaks not as philosopher but as fellow hiker — the wisdom arrives disguised as casual observation, which is why it lands so deeply' },
            { text: '山坡从来不是目的地，但它是旅程中最美的一段', textEn: 'A hillside is never the destination, but it\'s the most beautiful stretch of the journey', why: '结尾哲理句升华全文，意境深远', whyEn: 'Reframes the entire essay: destination-thinking misses the point — the in-between, the becoming, the not-yet-arrived is where beauty concentrates' }
          ],
          sections: [
            { type: '第一层', fn: '山脚=起点', fnEn: 'Base=starting point', detail: '登山出发与初一入学对照', detailEn: 'Hiking departure parallels Grade 7 entry' },
            { type: '第二层', fn: '山坡=过程', fnEn: 'Slope=journey', detail: '攀登艰辛与初三压力对照', detailEn: 'Climbing difficulty parallels Grade 9 pressure' },
            { type: '第三层', fn: '半山腰=此刻', fnEn: 'Halfway=present', detail: '回望成长，展望未来', detailEn: 'Looking back at growth, forward at future' },
            { type: '结尾', fn: '继续前行', fnEn: 'Keep going', detail: '山坡是最美的旅程', detailEn: 'The hillside is the most beautiful journey' }
          ]
        },
        {
          title: '走在山坡上',
          titleEn: 'Walking on the Hillside',
          score: 37, maxScore: 40,
          structure: 'pianDuanZuHe',
          techniques: ['dianMianJieHe', 'wuGanMiaoXie', 'biFangNiRen', 'jieWuShuQing'],
          techniqueMarks: [
            { para: 0, text: '走过了春天的花、夏天的雨，正迈向秋天的果', technique: '排比', techniqueEn: 'Parallelism', effect: '三季总领全文框架，节奏明快', effectEn: 'Three-season synopsis blueprints the entire essay in a single breath, rhythm accelerating toward harvest' },
            { para: 1, text: '金黄的油菜花、粉红的樱花、紫色的不知名小花，像大自然打翻了调色盘', technique: '比喻', techniqueEn: 'Simile', effect: '调色盘比喻写出花的缤纷与春天的随意之美', effectEn: 'Nature as clumsy painter — an overturned palette suggests beauty that\'s accidental, abundant, and ungovernable' },
            { para: 1, text: '每一天都像山坡上那些小花，鲜艳而不设防', technique: '借物抒情', techniqueEn: 'Emotion Through Objects', effect: '以小花喻初中生活的天真无防备', effectEn: 'Wildflowers as emotional proxy — "bright and unguarded" captures adolescence before the world teaches wariness' },
            { para: 1, text: '花太多，反而看不清路', technique: '象征', techniqueEn: 'Symbolism', effect: '花多路隐的画面象征选择过多带来的迷茫', effectEn: 'Visual paradox becomes psychological truth — abundance of choices creates the same disorientation as a flower-choked path' },
            { para: 2, text: '雨点砸在脸上生疼，书包淋得透湿，运动鞋里全是水', technique: '五感描写', techniqueEn: 'Sensory Detail', effect: '触觉密集铺排，将暴雨之苦写实入骨', effectEn: 'Three tactile blows in rapid succession — face, backpack, shoes — make the reader feel every soaking step' },
            { para: 2, text: '爸妈的叹气声、老师办公室的谈话、同学异样的目光——这些都像暴雨一样，密集地砸向我', technique: '比喻+排比', techniqueEn: 'Simile + Parallelism', effect: '将社会压力比作暴雨，三重打击层层递进', effectEn: 'Social pressures as rainstorm — sighs, talks, and glances escalate like droplets building to a downpour' },
            { para: 2, text: '山坡上最难的那段路，往往离风景最近', technique: '点睛之笔', techniqueEn: 'Epiphany Line', effect: '爸爸一句话点亮"雨坡"段落的核心寓意', effectEn: 'Dad\'s one-liner illuminates the vignette\'s meaning — difficulty and beauty share the same altitude' },
            { para: 3, text: '它像极了山坡上的果树——不是一夜之间结满果实的', technique: '借物抒情', techniqueEn: 'Emotion Through Objects', effect: '银杏树比喻成长，自然意象与人生感悟对接', effectEn: 'Ginkgo as growth metaphor — fruit trees teach that harvest requires seasons, not shortcuts' },
            { para: 3, text: '在花坡上不迷路，在雨坡上不退缩，在果坡上不骄傲', technique: '排比', techniqueEn: 'Parallelism', effect: '三个"不"排比呼应三段山坡，结构严密', effectEn: 'Triple negation mirrors the three vignettes — each "not" is a lesson distilled from its corresponding slope' },
            { para: 4, text: '脚步不必最快，但一定要坚定。因为每一步，都算数', technique: '短句收束', techniqueEn: 'Staccato Closure', effect: '短句收尾斩截有力，三字"都算数"余味无穷', effectEn: 'Final sentence contracts to three characters — the brevity itself embodies the essay\'s lesson: every step, no matter how small, registers' }
          ],
          approach: '以三个"山坡片段"组合成文：春天的花坡、夏天的雨坡、秋天的果坡，对应成长的三个阶段：迷茫、挣扎、收获。',
          approachEn: 'Combines three "hillside vignettes": spring flower slope, summer rain slope, autumn fruit slope, corresponding to three growth stages: confusion, struggle, harvest.',
          architecture: '引子→片段一：花坡（迷茫中的美好）→片段二：雨坡（挫折中的坚持）→片段三：果坡（付出后的收获）→总结。',
          architectureEn: 'Prologue → Vignette 1: Flower slope (beauty in confusion) → Vignette 2: Rain slope (persistence in setbacks) → Vignette 3: Fruit slope (harvest after effort) → Summary.',
          logic: '三个季节的山坡片段形成并列递进，自然时序与成长阶段统一。',
          logicEn: 'Three seasonal slope vignettes form parallel progression, unifying natural sequence with growth stages.',
          skills: ['片段组合结构新颖', '季节与心境对应精妙', '五感描写充分', '象征手法运用自如'],
          skillsEn: ['Innovative montage structure', 'Exquisite season-mood correspondence', 'Rich five-senses descriptions', 'Fluid use of symbolism'],
          fullText: '　　走在山坡上，四季各有风景。而我的山坡，走过了春天的花、夏天的雨，正迈向秋天的果。\n\n　　【花坡】\n　　初一的春天，学校组织徒步去郊外的金殿。山坡上开满了野花——金黄的油菜花、粉红的樱花、紫色的不知名小花，像大自然打翻了调色盘。我和同学们一边走一边笑，完全不在意脚下的路有多远。\n　　那时候的山坡是轻快的。就像刚入初中的日子，一切都有新鲜感。第一次穿上新校服，第一次独自去食堂打饭，第一次在课堂上主动回答问题。每一天都像山坡上那些小花，鲜艳而不设防。\n　　但花坡也有迷茫的时候。面对突然增多的学科，面对比小学复杂得多的人际关系，我有时候不知道该往哪个方向走。花太多，反而看不清路。\n\n　　【雨坡】\n　　初二的夏天，一场暴雨中，我独自走在放学回家的山坡上。雨点砸在脸上生疼，书包淋得透湿，运动鞋里全是水。每一步都很重，像脚上绑了铅块。\n　　那个夏天，我的数学成绩从班级前十掉到了三十名开外。爸妈的叹气声、老师办公室的谈话、同学异样的目光——这些都像暴雨一样，密集地砸向我。我开始怀疑自己：是不是不够聪明？是不是不适合学习？\n　　但雨终究会停。一个周末，爸爸带我去爬西山。走到一个陡坡时，脚下打滑，我差点摔倒。爸爸拉住我说："山坡上最难的那段路，往往离风景最近。"我扶着湿滑的栏杆，一步一步地走上去。转过弯，满目苍翠，风吹云散，整个昆明城尽收眼底。\n　　从那以后，我不再怕雨坡了。我报了数学补习班，每天多做一小时练习题，一点一点地把成绩追了回来。\n\n　　【果坡】\n　　初三的秋天，窗外的银杏叶金黄一片。我坐在教室里，手里握着刚发下来的月考成绩单——班级第五名。\n　　这不是最好的名次，但这是我用两年时间，一步一步从山脚走到这里的证明。我看着窗外那棵银杏树，忽然觉得它像极了山坡上的果树——不是一夜之间结满果实的，而是经历了春天的萌芽、夏天的风雨，才迎来了秋天的丰收。\n　　我知道，山坡还没走完。中考还在前方，更大的挑战还在等着我。但我不再害怕，因为我已经学会了在花坡上不迷路，在雨坡上不退缩，在果坡上不骄傲。\n\n　　走在山坡上，脚步不必最快，但一定要坚定。因为每一步，都算数。',
          fullTextEn: '　　Walking on the hillside, each season has its scenery. And my hillside has passed through spring\'s flowers, summer\'s rain, and is now heading toward autumn\'s fruit.\n\n　　[Flower Slope]\n　　In the spring of Grade 7, our school organized a hike to the Golden Temple in the suburbs. The hillside was covered with wildflowers — golden rapeseed, pink cherry blossoms, purple unnamed blooms — as if nature had overturned its palette. My classmates and I walked and laughed, not caring how far the path stretched.\n　　The hillside back then was lighthearted. Just like the early days of middle school, everything felt fresh. The first time wearing a new uniform, the first time going to the cafeteria alone, the first time voluntarily answering in class. Every day was like those wildflowers on the slope — bright and unguarded.\n　　But the flower slope also had its confusion. Facing suddenly multiplied subjects, facing social relationships far more complex than in elementary school, sometimes I didn\'t know which direction to walk. Too many flowers made it hard to see the path.\n\n　　[Rain Slope]\n　　In the summer of Grade 8, during a downpour, I walked alone on the hillside going home from school. Raindrops stung my face, my backpack was soaked through, my sneakers filled with water. Every step was heavy, as if weights were tied to my feet.\n　　That summer, my math ranking dropped from the class top ten to beyond thirtieth. Parents\' sighs, office conversations with teachers, classmates\' strange looks — all pounded down like the storm. I began doubting myself: Was I not smart enough? Was I not suited for studying?\n　　But rain always stops. One weekend, Dad took me hiking up Xishan. At a steep section, I slipped and nearly fell. Dad caught me and said: "The hardest stretch on the hillside is often closest to the best view." Gripping the wet railing, I climbed step by step. Around the bend: lush green everywhere, wind scattering clouds, the entire city of Kunming spread below.\n　　After that, I no longer feared the rain slope. I signed up for math tutoring, practiced an extra hour daily, and clawed my grades back bit by bit.\n\n　　[Fruit Slope]\n　　In autumn of Grade 9, golden ginkgo leaves covered the view outside. I sat in the classroom holding the monthly exam results — fifth in class.\n　　Not the best ranking, but proof that over two years I\'d walked here step by step from the base. Looking at the ginkgo tree outside, I suddenly felt it resembled a fruit tree on a hillside — not bearing fruit overnight, but only after spring\'s sprouting and summer\'s storms does autumn\'s harvest arrive.\n　　I know the hillside isn\'t finished. The zhongkao lies ahead, and greater challenges await. But I\'m no longer afraid, because I\'ve learned not to get lost on the flower slope, not to retreat on the rain slope, and not to be arrogant on the fruit slope.\n\n　　Walking on the hillside, your steps needn\'t be the fastest, but they must be steady. Because every step counts.',
          highlights: [
            { text: '花太多，反而看不清路', textEn: 'Too many flowers made it hard to see the path', why: '简洁隐喻，用"花"写"迷茫"，以小见大', whyEn: 'Abundance as obstacle — the very beauty that makes the slope inviting also obscures direction, a perfect metaphor for the overwhelming options of early adolescence' },
            { text: '山坡上最难的那段路，往往离风景最近', textEn: 'The hardest stretch on the hillside is often closest to the best view', why: '爸爸的话画龙点睛，哲理与叙事完美融合', whyEn: 'Dad\'s climbing wisdom doubles as life philosophy — proximity to beauty and proximity to difficulty share the same coordinates' },
            { text: '每一步，都算数', textEn: 'Every step counts', why: '三字收尾，简洁有力，余味无穷', whyEn: 'Three Chinese characters carry the weight of the entire essay — a full stop that echoes like a starting gun' }
          ],
          sections: [
            { type: '引子', fn: '总起', fnEn: 'Prologue', detail: '交代三段山坡的框架', detailEn: 'Establishes the three-slope framework' },
            { type: '片段一', fn: '花坡=青涩', fnEn: 'Flower slope=youth', detail: '初一的新鲜与迷茫', detailEn: 'Grade 7 freshness and confusion' },
            { type: '片段二', fn: '雨坡=挫折', fnEn: 'Rain slope=setback', detail: '初二的困难与坚持', detailEn: 'Grade 8 difficulties and persistence' },
            { type: '片段三', fn: '果坡=收获', fnEn: 'Fruit slope=harvest', detail: '初三的努力与成果', detailEn: 'Grade 9 effort and results' },
            { type: '结尾', fn: '总结', fnEn: 'Summary', detail: '每一步都算数', detailEn: 'Every step counts' }
          ]
        },
        {
          title: '走在山坡上',
          titleEn: 'Walking on the Hillside',
          score: 36, maxScore: 40,
          structure: 'shiJianXian',
          techniques: ['duiHuaQuDong', 'xiJieMiaoXie', 'huanJingChenTuo', 'yiXiaoJianDa'],
          techniqueMarks: [
            { para: 0, text: '"我说走左边那条路！""我说走右边！"', technique: '对话开篇', techniqueEn: 'Dialogue Opening', effect: '以冲突对话直接入题，瞬间抓住读者', effectEn: 'Drops the reader straight into confrontation — no warm-up, no scene-setting, just two stubborn voices colliding' },
            { para: 2, text: '树越来越密，路越来越窄', technique: '环境衬托', techniqueEn: 'Pathetic Fallacy', effect: '外部环境收窄映射内心不安', effectEn: 'Narrowing landscape mirrors narrowing confidence — the forest closes in as guilt does' },
            { para: 2, text: '他迟到是因为去给我买了我最爱吃的鲜花饼，只是我当时太急了，根本没注意到他手里的袋子', technique: '补叙', techniqueEn: 'Delayed Revelation', effect: '迟到原因的揭露让读者重新审视前文，制造情感冲击', effectEn: 'Retroactive reframing — one sentence recasts the entire argument as tragic irony, turning anger into shame' },
            { para: 4, text: '"别动！我来了！"', technique: '对话描写', techniqueEn: 'Dialogue', effect: '危急时刻一句话写出朋友的果断和牵挂', effectEn: 'Four words in crisis — no hesitation, no reproach — distilling friendship\'s essence into pure action' },
            { para: 6, text: '已经压得有些变形了', technique: '细节描写', techniqueEn: 'Detail', effect: '变形的饼暗示朋友一路奔跑折返的辛苦', effectEn: 'The cake\'s deformation silently narrates Ahui\'s frantic return — physical damage as evidence of devotion' },
            { para: 7, text: '"早上给你买的，你都没看到。"他别过脸去', technique: '动作描写', techniqueEn: 'Action Detail', effect: '"别过脸"写出少年不善表达的含蓄情感', effectEn: 'Turning away says what words can\'t — adolescent boys who show love through averted faces and squished pastries' },
            { para: 9, text: '酥脆的饼皮混着玫瑰花的甜味在嘴里化开', technique: '五感描写', techniqueEn: 'Sensory Detail', effect: '味觉描写写出和解的甜蜜，以食物寄情', effectEn: 'Taste becomes the medium of reconciliation — crispy pastry and rose sweetness dissolving together like resentment' },
            { para: 10, text: '两个人走在一起，就不觉得冷了', technique: '以小见大', techniqueEn: 'Microcosm', effect: '简单一句写尽同行的温暖，呼应"山坡"主题', effectEn: 'Body warmth as metaphor for emotional warmth — companionship as the simplest antidote to the hillside\'s wind' },
            { para: 10, text: '什么也没说，但什么都说了', technique: '留白', techniqueEn: 'Deliberate Silence', effect: '无言胜有言，写尽友情默契的最高境界', effectEn: 'The ultimate paradox of intimacy — when silence communicates more than any confession could' },
            { para: 11, text: '身边有一个愿意为你折返的人', technique: '点题升华', techniqueEn: 'Thematic Elevation', effect: '将"山坡上最重要的事"定义为友情的折返，扣题精准', effectEn: 'Redefines the hillside\'s meaning: not the view from above but the person who gave up their own summit to come find you' }
          ],
          approach: '写与好友在昆明西山的一次登山经历，通过途中的对话、争执和互助，表达友情在"山坡"上的珍贵。',
          approachEn: 'Depicts a hiking experience with a best friend on Kunming\'s Xishan, expressing the preciousness of friendship "on the hillside" through dialogue, disagreement, and mutual help.',
          architecture: '出发→途中争执→各走各的→一方遇困→和好互助→登顶→感悟友情。',
          architectureEn: 'Departure → Argument on the way → Going separate ways → One encounters difficulty → Reconciliation → Reaching summit → Friendship insight.',
          logic: '叙事线（登山）与情感线（友情）同步推进，山坡的起伏对应友情的波折。',
          logicEn: 'Narrative line (hiking) and emotional line (friendship) progress in sync; the slope\'s ups and downs mirror friendship\'s twists.',
          skills: ['对话自然推进情节', '登山与友情双线并行', '细节写少年真实感情', '以小见大的主题提炼'],
          skillsEn: ['Natural dialogue advances plot', 'Dual hiking-friendship threads', 'Details capture authentic adolescent feelings', 'Big theme extracted from small events'],
          fullText: '　　"我说走左边那条路！""我说走右边！"\n\n　　西山半腰的岔路口，我和好友阿辉吵了起来。他倔，我也倔，谁也不让谁。最后，他朝右走了，我朝左走了。\n\n　　事情的起因其实很小。早上出发前，阿辉迟到了二十分钟，害得我们错过了第一班公交车。我嘟嘟囔囔了一路，阿辉的脸越来越沉。到了岔路口，压了一早上的火气终于爆发了。\n\n　　我一个人走在左边的小路上，越走越心虚。树越来越密，路越来越窄，有几段甚至要手脚并用地爬。我开始后悔了——不是后悔选了这条路，而是后悔对阿辉发了脾气。他迟到是因为去给我买了我最爱吃的鲜花饼，只是我当时太急了，根本没注意到他手里的袋子。\n\n　　正想着，前面的路被一块巨石挡住了。我试着绕过去，脚下一滑，差点跌下旁边的陡坡。我慌了，紧紧抱住旁边的树干，不敢动弹。\n\n　　"别动！我来了！"一个熟悉的声音从上方传来。\n\n　　我抬头一看——阿辉！他不知道什么时候折返了，正沿着上方的小路快步赶来。他蹲下来，伸出手："抓住我！"\n\n　　我紧紧抓住他的手，他用力把我拉了上去。我们俩坐在石头上，大口喘气。沉默了半分钟后，阿辉从背包里掏出了那袋鲜花饼——已经压得有些变形了。\n\n　　"早上给你买的，你都没看到。"他别过脸去。\n\n　　"对不起。"我说。\n\n　　"我也对不起，不该赌气。"他把鲜花饼递给我，"吃吧，压扁了也好吃。"\n\n　　我咬了一口，酥脆的饼皮混着玫瑰花的甜味在嘴里化开。那一刻，我觉得这是我吃过最好吃的鲜花饼。\n\n　　我们后来一起走完了剩下的路。山坡上风很大，但两个人走在一起，就不觉得冷了。到了山顶，整个昆明被金色的夕阳镀了一层暖光。我们并肩坐在崖边，看着远方的滇池，什么也没说，但什么都说了。\n\n　　走在山坡上，最重要的不是走多快、走多远，而是身边有一个愿意为你折返的人。',
          fullTextEn: '　　"I say we take the left path!" "I say right!"\n\n　　At the fork halfway up Xishan, my best friend Ahui and I got into a fight. He was stubborn; so was I. Neither would yield. In the end, he went right, I went left.\n\n　　The cause was really small. That morning, Ahui was twenty minutes late, causing us to miss the first bus. I grumbled the whole way; Ahui\'s face grew darker and darker. At the fork, the morning\'s suppressed frustration finally erupted.\n\n　　Walking alone on the left path, I grew increasingly uneasy. Trees grew denser, the path narrower; some sections required scrambling on all fours. I started regretting — not choosing this path, but losing my temper at Ahui. He was late because he\'d stopped to buy my favorite fresh flower cakes, but I was too rushed to notice the bag in his hand.\n\n　　Just then, a massive boulder blocked my way. Trying to get around it, my foot slipped, nearly sending me tumbling down the steep slope beside the path. Panicking, I hugged a nearby tree trunk, not daring to move.\n\n　　"Don\'t move! I\'m coming!" A familiar voice came from above.\n\n　　I looked up — Ahui! He\'d turned back at some point and was hurrying along the upper path. He crouched down and extended his hand: "Grab on!"\n\n　　I gripped his hand tightly; he pulled me up with all his strength. We sat on a rock, gasping heavily. After half a minute of silence, Ahui pulled out the bag of flower cakes from his backpack — somewhat squished by now.\n\n　　"Bought these for you this morning. You didn\'t even notice." He turned his face away.\n\n　　"I\'m sorry," I said.\n\n　　"I\'m sorry too — shouldn\'t have split off in anger." He handed me the flower cakes. "Eat up — they\'re still good even squished."\n\n　　I took a bite. The crispy pastry mixed with rose sweetness melted in my mouth. In that moment, I felt it was the best flower cake I\'d ever tasted.\n\n　　We walked the remaining path together. The wind was strong on the slope, but walking together, we didn\'t feel cold. At the summit, all of Kunming was gilded in golden sunset light. We sat shoulder to shoulder on the cliff edge, watching distant Dianchi Lake, saying nothing yet saying everything.\n\n　　Walking on the hillside, what matters most isn\'t how fast or how far you go, but having someone beside you willing to turn back for you.',
          highlights: [
            { text: '压扁了也好吃', textEn: 'They\'re still good even squished', why: '少年式表达，真实可爱，一句话化解矛盾', whyEn: 'Four syllables of teenage grace — the squished cake becomes the peace offering, and the casual tone says forgiveness louder than any apology' },
            { text: '什么也没说，但什么都说了', textEn: 'Saying nothing yet saying everything', why: '留白式表达，写尽友情的默契', whyEn: 'A paradox that only friendship can solve — silence as the most eloquent language between two people who no longer need words' },
            { text: '身边有一个愿意为你折返的人', textEn: 'Having someone beside you willing to turn back for you', why: '结尾定义"山坡上最重要的事"，点题深刻', whyEn: 'Redefines the hillside\'s value: not altitude gained but the presence of someone who would sacrifice their own progress to come back for you' }
          ],
          sections: [
            { type: '开头', fn: '冲突引入', fnEn: 'Conflict opening', detail: '岔路口的争吵', detailEn: 'Argument at the fork' },
            { type: '发展', fn: '独行困境', fnEn: 'Solo predicament', detail: '独自走错路遇险', detailEn: 'Walking alone, encountering danger' },
            { type: '转折', fn: '朋友折返', fnEn: 'Friend returns', detail: '阿辉折返救援和好', detailEn: 'Ahui turns back, rescue, reconciliation' },
            { type: '结尾', fn: '同行感悟', fnEn: 'Companionship insight', detail: '一起登顶的友情感悟', detailEn: 'Reaching summit together, friendship insight' }
          ]
        },
        {
          title: '走在山坡上',
          titleEn: 'Walking on the Hillside',
          score: 35, maxScore: 40,
          structure: 'qiChengZhuanHe',
          techniques: ['xinLiMiaoXie', 'duiBi', 'paiBI', 'jiaXuJiaYi'],
          techniqueMarks: [
            { para: 0, text: '那可是我唯一能睡懒觉的日子啊', technique: '心理描写', techniqueEn: 'Interior Monologue', effect: '少年式抱怨真实可爱，塑造前后反差', effectEn: 'Adolescent grumbling feels authentic and endearing, setting up the coming transformation' },
            { para: 1, text: '心里全是抱怨：为什么要来？为什么不能开车上去？为什么山路这么难走？', technique: '排比', techniqueEn: 'Parallelism', effect: '三个"为什么"排比强化不情愿心态', effectEn: 'Triple "why" barrage amplifies reluctance to a comic pitch, making the later reversal more dramatic' },
            { para: 2, text: '她的背弯得像一张弓', technique: '比喻', techniqueEn: 'Simile', effect: '一句勾勒老人形象，暗示生活的艰辛', effectEn: 'A bow bent by years — the simile carries both the shape of hardship and the tension of endurance' },
            { para: 2, text: '看到我们来，眼睛一下子亮了起来', technique: '细节描写', techniqueEn: 'Detail', effect: '眼神细节写出老人的孤独与惊喜，触动人心', effectEn: 'One physiological detail — eyes lighting up — condenses years of loneliness and the sudden joy of human contact' },
            { para: 3, text: '土豆没有放盐，味道寡淡，但我吃了一整个，觉得比任何山珍海味都好吃', technique: '对比', techniqueEn: 'Contrast', effect: '将寡淡土豆与山珍海味对比，突出"心意"的价值', effectEn: 'Saltless potato vs. the finest delicacies — material poverty eclipsed by emotional wealth' },
            { para: 4, text: '她矮小的身影在阳光下像一棵倔强的老树，独自站在山坡上', technique: '比喻', techniqueEn: 'Simile', effect: '收束画面定格为一帧长镜头，意象深远', effectEn: 'A freeze-frame long shot — the tree simile roots solitude, resilience, and belonging into a single image' },
            { para: 5, text: '下山的路，我走在了最前面', technique: '对比', techniqueEn: 'Contrast', effect: '与上山走在最后形成鲜明反差，暗示心态蜕变', effectEn: 'Mirrors the earlier "very back" position — spatial reversal externalizes inner transformation' },
            { para: 5, text: '山坡上的风景，不只是远处的山和天，还有那些需要你的人的笑容', technique: '夹叙夹议', techniqueEn: 'Narrative-Reflection Weave', effect: '在叙事中自然嵌入议论，深化"风景"含义', effectEn: 'Seamlessly embeds argument in narrative, expanding "scenery" from geography to human connection' },
            { para: 6, text: '走在山坡上，是为了去到别人需要你的地方；走在山坡上，是为了让自己成为一个有温度的人；走在山坡上，是为了在下山之后，心里依然住着一片阳光', technique: '排比', techniqueEn: 'Parallelism', effect: '三重排比收束全文，层层递进升华主题', effectEn: 'Triple parallel cascade — destination, identity, inner light — each clause deepens what "walking the hillside" means' },
            { para: 6, text: '我以为是我在帮助别人，到头来，是那位奶奶教会了我', technique: '反转', techniqueEn: 'Reversal', effect: '帮助者与被帮助者角色反转，深化主题', effectEn: 'Helper-helped role reversal — the expected direction of kindness flows backward, revealing that service educates the server' }
          ],
          approach: '以"我"参加学校志愿者活动——给山区老人送物资——为背景，在攀登山路的过程中感悟"服务他人"的意义。',
          approachEn: 'Set against a school volunteer activity — delivering supplies to elderly in mountain areas — the narrator discovers the meaning of "serving others" while climbing mountain paths.',
          architecture: '起：不情愿参加活动→承：攀山送物的辛苦→转：见到老人的笑容和感谢→合：理解"山坡"的另一层意义。',
          architectureEn: 'Intro: Reluctant participation → Development: Hardship of climbing to deliver supplies → Turn: Seeing the elders\' smiles and gratitude → Conclusion: Understanding another layer of "hillside" meaning.',
          logic: '由被动到主动的心态转变，展现"服务"带来的自我提升。',
          logicEn: 'Attitude shift from passive to active, showing self-improvement through service.',
          skills: ['心理变化真实细腻', '前后对比鲜明', '排比增强结尾力度', '夹叙夹议有深度'],
          skillsEn: ['Authentic psychological changes', 'Sharp before-after contrast', 'Parallelism strengthens ending', 'Narration-reflection adds depth'],
          fullText: '　　说实话，我一开始是不想去的。\n\n　　学校团委组织的"情暖山乡"志愿活动，要爬两个小时的山路给山上的独居老人送米送油。周六早上七点集合——那可是我唯一能睡懒觉的日子啊。\n\n　　"去吧，"班主任看着我说，"山坡上的风景，只有走过的人才知道。"\n\n　　我心想：什么山坡什么风景，不就是去搬东西嘛。但还是勉强报了名。\n\n　　清早出发，二十几个同学背着米面油盐，沿着村里的土路往山上走。路越来越陡，十斤重的米袋勒得肩膀生疼。阳光毒辣辣地晒在后背上，汗水糊住了眼睛。我走在队伍最后面，心里全是抱怨：为什么要来？为什么不能开车上去？为什么山路这么难走？\n\n　　走了将近两个小时，终于到了第一户人家。一位七十多岁的奶奶独自住在半山腰的石头房子里。她的背弯得像一张弓，头发全白了，但看到我们来，眼睛一下子亮了起来。\n\n　　"孩子们来啦！快进来坐！"她拉着我们的手，眼眶红红的，"你们走这么远的路来看我，我……我太高兴了。"\n\n　　她颤巍巍地端出一碗煮好的土豆，非要我们吃。土豆没有放盐，味道寡淡，但我吃了一整个，觉得比任何山珍海味都好吃。因为那个土豆里，有一个老人全部的心意。\n\n　　离开的时候，奶奶站在门口，一直挥手，直到我们走过弯道看不见她为止。我回头望去，她矮小的身影在阳光下像一棵倔强的老树，独自站在山坡上。\n\n　　下山的路，我走在了最前面。不是因为着急回去，而是因为我突然理解了班主任说的那句话——山坡上的风景，不只是远处的山和天，还有那些需要你的人的笑容。\n\n　　走在山坡上，我以为是我在帮助别人，到头来，是那位奶奶教会了我：人生最美的风景，不在脚下，而在心里。走在山坡上，是为了去到别人需要你的地方；走在山坡上，是为了让自己成为一个有温度的人；走在山坡上，是为了在下山之后，心里依然住着一片阳光。',
          fullTextEn: '　　To be honest, I didn\'t want to go at first.\n\n　　The school Youth League\'s "Warming Mountain Villages" volunteer activity required climbing a two-hour mountain path to deliver rice and cooking oil to elderly people living alone on the mountain. Gathering at 7 AM on Saturday — my only day to sleep in!\n\n　　"Go," my homeroom teacher said, looking at me. "The scenery on the hillside — only those who\'ve walked it truly know."\n\n　　I thought: What scenery on what hillside? It\'s just carrying stuff. But I reluctantly signed up.\n\n　　Early departure. Over twenty students carried bags of rice, flour, oil, and salt along the village dirt road up the mountain. The path grew steeper; the ten-jin rice bag dug painfully into my shoulder. Harsh sunlight beat on my back; sweat blurred my vision. I walked at the very back, my mind full of complaints: Why did I come? Why couldn\'t we drive up? Why is this road so hard?\n\n　　After nearly two hours, we finally reached the first household. A woman in her seventies lived alone in a stone house halfway up the mountain. Her back was bent like a bow, her hair completely white, but when she saw us arrive, her eyes instantly lit up.\n\n　　"The children are here! Come in, sit down!" She held our hands, eyes reddening. "You\'ve walked so far to see me... I\'m... I\'m so happy."\n\n　　She shakily brought out a bowl of boiled potatoes, insisting we eat. The potatoes had no salt, bland in taste, but I ate a whole one and felt it was better than any delicacy. Because in that potato was an old woman\'s entire heart.\n\n　　When we left, she stood at her doorway, waving continuously until we rounded the bend and she disappeared from view. I looked back — her small figure in the sunlight looked like a stubborn old tree, standing alone on the hillside.\n\n　　On the way down, I walked at the very front. Not because I was eager to return, but because I suddenly understood what my teacher meant — the scenery on the hillside isn\'t just distant mountains and sky, but also the smiles of people who need you.\n\n　　Walking on the hillside, I thought I was helping others. In the end, that grandmother taught me: life\'s most beautiful scenery isn\'t beneath your feet but in your heart. Walking on the hillside is about reaching places where someone needs you. Walking on the hillside is about becoming a person with warmth. Walking on the hillside is about keeping sunshine in your heart even after coming down.',
          highlights: [
            { text: '那个土豆里，有一个老人全部的心意', textEn: 'In that potato was an old woman\'s entire heart', why: '以小见大，普通食物承载深沉情感', whyEn: 'A saltless potato becomes the richest dish — because what seasons it is an entire life\'s gratitude compressed into a single offering' },
            { text: '她矮小的身影在阳光下像一棵倔强的老树', textEn: 'Her small figure in the sunlight looked like a stubborn old tree', why: '比喻精准感人，画面感极强', whyEn: 'Old tree simile collapses loneliness, resilience, and rootedness into one visual — she belongs to this hillside the way the tree does' },
            { text: '人生最美的风景，不在脚下，而在心里', textEn: 'Life\'s most beautiful scenery isn\'t beneath your feet but in your heart', why: '对"山坡风景"的重新定义，升华深刻', whyEn: 'Relocates "scenery" from external geography to internal landscape, transforming the entire essay\'s hillside from a place to a state of being' }
          ],
          sections: [
            { type: '起', fn: '不情愿出发', fnEn: 'Reluctant departure', detail: '被动参加志愿活动', detailEn: 'Passively joining volunteer activity' },
            { type: '承', fn: '攀山之苦', fnEn: 'Climbing hardship', detail: '山路的辛苦和抱怨', detailEn: 'Mountain path difficulty and complaints' },
            { type: '转', fn: '老人的笑容', fnEn: 'Elder\'s smile', detail: '见到老人后的心理转变', detailEn: 'Psychological shift after meeting the elder' },
            { type: '合', fn: '重新理解', fnEn: 'New understanding', detail: '"山坡风景"的另一层意义', detailEn: 'Another layer of "hillside scenery" meaning' }
          ]
        },
        {
          title: '走在山坡上',
          titleEn: 'Walking on the Hillside',
          score: 35, maxScore: 40,
          structure: 'bingLieShi',
          techniques: ['paiBI', 'biFangNiRen', 'yinYongLunZheng', 'jiaXuJiaYi'],
          techniqueMarks: [
            { para: 0, text: '山脚是童年的天真，山顶是暮年的通透', technique: '比喻', techniqueEn: 'Metaphor', effect: '以山的三段隐喻人生三阶，建立全文核心意象', effectEn: 'Maps mountain\'s three elevations onto life\'s three stages, establishing the essay\'s central conceit' },
            { para: 1, text: '走在山坡上，我学会了坚持', technique: '排比段首', techniqueEn: 'Parallel Opening', effect: '三段统一句式开头，结构整齐，节奏鲜明', effectEn: 'Three parallel sentence openings create architectural symmetry and rhythmic momentum' },
            { para: 1, text: '压力像背上越来越重的行囊', technique: '比喻', techniqueEn: 'Simile', effect: '将学业压力具象化为登山负重，虚实相通', effectEn: 'Materializes academic pressure as a literal climbing pack, fusing tenor and vehicle' },
            { para: 1, text: '没有比脚更长的路，没有比人更高的山', technique: '引用论证', techniqueEn: 'Quotation', effect: '汪国真名句增添文化底蕴，增强说服力', effectEn: 'Wang Guozhen\'s couplet anchors personal struggle in established literary authority' },
            { para: 1, text: '不是因为我比别人聪明，而是因为我比昨天的自己多走了一步', technique: '对比', techniqueEn: 'Contrast', effect: '横向比较转为纵向自比，重新定义"进步"', effectEn: 'Pivots from horizontal comparison to vertical self-measure, redefining what progress means' },
            { para: 2, text: '有的平坦但绕远，有的陡峭但直达', technique: '对偶', techniqueEn: 'Antithetical Parallelism', effect: '对仗工整，山路即人生选择的隐喻', effectEn: 'Balanced clauses make terrain choices mirror life decisions with epigrammatic precision' },
            { para: 2, text: '其实地上本没有路，走的人多了，也便成了路', technique: '引用论证', techniqueEn: 'Quotation', effect: '鲁迅名言深化"选择自己道路"的论点', effectEn: 'Lu Xun\'s iconic line elevates individual path-making into philosophical declaration' },
            { para: 3, text: '夕阳把操场染成了金色', technique: '拟人', techniqueEn: 'Personification', effect: '日常场景赋予诗意，呼应"欣赏"论点', effectEn: 'Sunset as painter transforms an ordinary schoolyard into a canvas worth pausing for' },
            { para: 3, text: '每一朵小花、每一阵微风、每一个与朋友相视而笑的瞬间', technique: '排比', techniqueEn: 'Parallelism', effect: '三个"每一"密集排列，将平凡之美逐层展开', effectEn: 'Triple "every" cascade unfurls ordinary beauty in escalating intimacy — nature, sensation, human connection' },
            { para: 4, text: '脚下是正在丈量的路，身后是逐渐长大的影子，面前是尚未抵达的远方', technique: '排比', techniqueEn: 'Parallelism', effect: '三维空间排比收束全文，过去-现在-未来一气呵成', effectEn: 'Three-axis spatial parallelism — ground, shadow, horizon — compresses past, present, and future into a single panoramic sentence' }
          ],
          approach: '以议论散文笔法，围绕"山坡"的意象，阐述青春就是"走在山坡上"的状态，用三个排比段落展开。',
          approachEn: 'In argumentative-lyrical style, uses the "hillside" image to argue that youth is the state of "walking on the hillside," developed through three parallel paragraphs.',
          architecture: '立论：青春就是山坡→并列一：山坡教我坚持→并列二：山坡教我选择→并列三：山坡教我欣赏→总结升华。',
          architectureEn: 'Thesis: Youth is the hillside → Parallel 1: Hillside teaches persistence → Parallel 2: Hillside teaches choice → Parallel 3: Hillside teaches appreciation → Summary elevation.',
          logic: '三个并列角度全面阐释"山坡"的人生隐喻。',
          logicEn: 'Three parallel angles comprehensively interpret the life metaphor of "hillside."',
          skills: ['排比结构整齐有力', '名言引用增强说服力', '比喻贯穿全文', '议论不空洞有实例'],
          skillsEn: ['Neat and powerful parallel structure', 'Quotes enhance persuasiveness', 'Metaphors thread through the essay', 'Arguments backed by real examples'],
          fullText: '　　人生是一座山。山脚是童年的天真，山顶是暮年的通透，而此刻的我们——十五岁的少年，正走在山坡上。\n\n　　走在山坡上，我学会了坚持。\n　　初三的日子，像一段永远走不完的上坡路。每天五点半起床，晚上十一点休息；每周的测验、每月的月考、每学期的排名……压力像背上越来越重的行囊。有无数次，我想停下来，想坐在路边不走了。但我的语文老师告诉我："没有比脚更长的路，没有比人更高的山。"——汪国真的这句话成了我的登山杖。我知道，只要不停下脚步，终会走到看得见风景的地方。去年期末考试进步了十五个名次，不是因为我比别人聪明，而是因为我比昨天的自己多走了一步。\n\n　　走在山坡上，我学会了选择。\n　　山坡上有很多条路，有的平坦但绕远，有的陡峭但直达。我曾经羡慕走"捷径"的人——有同学去补课机构刷题，成绩提升很快。但我后来发现，走过的每一步弯路，都不是白走的。我选择了自己整理错题本、自己总结知识框架的"笨方法"，虽然慢，但扎实。正如鲁迅所说："其实地上本没有路，走的人多了，也便成了路。"我不需要走别人的路，我需要走出自己的路。\n\n　　走在山坡上，我学会了欣赏。\n　　太多时候，我们低着头赶路，忘了抬头看风景。直到有一天下课后，我站在教学楼的走廊上，看到夕阳把操场染成了金色，几个低年级的孩子在追逐嬉闹，远处传来广播体操的音乐。那一刻，我忽然觉得这些平凡的日常，才是山坡上最动人的风景。不是只有山顶才有好景色——山坡上的每一朵小花、每一阵微风、每一个与朋友相视而笑的瞬间，都值得被看见、被记住。\n\n　　汪国真还写过："我不去想是否能够成功，既然选择了远方，便只顾风雨兼程。"此刻的我们，正走在山坡上。脚下是正在丈量的路，身后是逐渐长大的影子，面前是尚未抵达的远方。\n\n　　不必急，不必慌。山坡上的每一步，都是青春最好的注脚。',
          fullTextEn: '　　Life is a mountain. The base is childhood\'s innocence, the summit is old age\'s clarity, and we — fifteen-year-old teenagers — are right now walking on the hillside.\n\n　　Walking on the hillside, I learned persistence.\n　　Grade 9 days were like an endless uphill road. Waking at 5:30 AM, resting at 11 PM. Weekly quizzes, monthly exams, semester rankings... Pressure was like a pack growing heavier on my back. Countless times I wanted to stop, to sit roadside and go no further. But my Chinese teacher told me: "No road is longer than your feet can carry you; no mountain is higher than a person can climb." Wang Guozhen\'s words became my climbing staff. I know that as long as I don\'t stop, I\'ll eventually reach a place where the view opens up. Last semester\'s final exam, I improved fifteen rankings — not because I was smarter than others, but because I took one more step than yesterday\'s me.\n\n　　Walking on the hillside, I learned to choose.\n　　The hillside has many paths — some flat but roundabout, some steep but direct. I once envied those taking "shortcuts" — classmates who attended cram schools and drilled practice problems, improving scores quickly. But I later found that every detour taken isn\'t wasted. I chose the "slow method" of organizing my own error notebook and building my own knowledge framework. Slower, but solid. As Lu Xun said: "Actually there were no roads on the ground — when many people walk the same way, a road comes into being." I don\'t need to walk others\' paths; I need to forge my own.\n\n　　Walking on the hillside, I learned to appreciate.\n　　Too often, we walk with heads down, forgetting to look up at the scenery. Until one afternoon after class, I stood in the teaching building corridor and saw the sunset painting the playground gold, younger students chasing and playing, the broadcast exercise music drifting from afar. In that moment, I suddenly felt these ordinary daily scenes were the most moving scenery on the hillside. You don\'t need the summit for beautiful views — every small flower, every gentle breeze, every moment of sharing a smile with a friend on the hillside is worth seeing and remembering.\n\n　　Wang Guozhen also wrote: "I won\'t wonder whether I can succeed; since I chose the distant horizon, I\'ll brave all wind and rain." Right now, we are walking on the hillside. Beneath our feet is the road being measured, behind us is a gradually growing shadow, before us is the yet-unreached distance.\n\n　　No rush, no panic. Every step on the hillside is the best footnote to our youth.',
          highlights: [
            { text: '没有比脚更长的路，没有比人更高的山', textEn: 'No road is longer than your feet can carry you; no mountain is higher than a person can climb', why: '引用汪国真名句恰当有力，增添文化底蕴', whyEn: 'Wang Guozhen\'s couplet reframes impossibility as a failure of will, not of scale — the perfect climbing staff for a metaphorical hillside' },
            { text: '走过的每一步弯路，都不是白走的', textEn: 'Every detour taken is never wasted', why: '简洁有力的人生观，议论自然融入叙事', whyEn: 'A ten-character axiom that revalues every wrong turn as education — efficiency redefined as depth' },
            { text: '山坡上的每一步，都是青春最好的注脚', textEn: 'Every step on the hillside is the best footnote to our youth', why: '结尾金句扣题精准，收束有力', whyEn: 'Steps as footnotes — each one annotating the text of adolescence, giving meaning to what might otherwise seem like mere trudging' }
          ],
          sections: [
            { type: '立论', fn: '比喻开篇', fnEn: 'Metaphorical opening', detail: '青春是走在山坡上', detailEn: 'Youth is walking on the hillside' },
            { type: '并列一', fn: '坚持', fnEn: 'Persistence', detail: '初三学习的坚持', detailEn: 'Persistence in Grade 9 studies' },
            { type: '并列二', fn: '选择', fnEn: 'Choice', detail: '选择自己的方法和道路', detailEn: 'Choosing one\'s own methods and path' },
            { type: '并列三', fn: '欣赏', fnEn: 'Appreciation', detail: '欣赏过程中的平凡之美', detailEn: 'Appreciating ordinary beauty in the journey' },
            { type: '结尾', fn: '总结升华', fnEn: 'Summary elevation', detail: '不必急，每一步都是注脚', detailEn: 'No rush — every step is a footnote' }
          ]
        }
      ]
    },
    {
      id: 'yn2024_comp2',
      paperId: 'yn2024',
      year: 2024,
      region: '云南省',
      prompt: '请以"______长伴我左右"为题，在横线上填入恰当的词语，将题目补充完整，写一篇不少于600字的作文。',
      promptEn: 'Write an essay titled "______ Always by My Side" (fill in the blank, at least 600 words).',
      context: '成长路上，总有一些东西长伴左右：可以是一本书、一句话、一种精神、一个人、一份热爱……选择对你影响最深的，写出你的故事。',
      contextEn: 'On the road of growing up, something always stays by your side: a book, a saying, a spirit, a person, a passion... Choose what influences you most and tell your story.',
      type: 'semiTitle',
      category: '半命题记叙文',
      categoryEn: 'Semi-title Narrative',
      wordCount: 600,
      guide: {
        analysis: '半命题作文，关键在于补题新颖且有真情实感。可填"书香""母爱""坚持""音乐""勇气"等。要写出"长伴"的时间跨度和"左右"的陪伴感。',
        analysisEn: 'Semi-title essay where the key is a fresh yet emotionally genuine completion. Options: "books," "mother\'s love," "persistence," "music," "courage." Must convey the duration of "always" and the closeness of "by my side."',
        keyPoints: ['补题要有个人特色', '体现"长伴"的时间感', '写出具体的陪伴场景', '从陪伴中提炼成长感悟'],
        keyPointsEn: ['Title completion with personal character', 'Convey the temporal sense of "always"', 'Write specific companionship scenes', 'Extract growth insights from companionship'],
        pitfalls: ['补题太宽泛无法聚焦', '只有抽象感悟没有具体事例', '时间跨度不够体现不出"长伴"'],
        pitfallsEn: ['Too broad to focus', 'Only abstract reflections without concrete examples', 'Insufficient time span to show "always"']
      },
      essays: [
        {
          title: '书香长伴我左右',
          titleEn: 'The Fragrance of Books Always by My Side',
          score: 37, maxScore: 40,
          structure: 'shiJianXian',
          techniques: ['wuGanMiaoXie', 'diJinShi', 'jieWuShuQing', 'shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '有一种味道从未消散——那是书页翻动时飘散的墨香', technique: '嗅觉开篇', techniqueEn: 'Olfactory Opening', effect: '嗅觉引入制造独特感官体验', effectEn: 'Scent as entry point — the reader inhales before they read, making the essay an experience rather than a statement' },
            { para: 1, text: '油墨味，混着妈妈身上洗衣液的清香', technique: '嗅觉叠加', techniqueEn: 'Layered Scent', effect: '两种气味编织安全感', effectEn: 'Ink + detergent — two scents braided into a single memory of warmth and safety' },
            { para: 1, text: '书香，就这样悄悄住进了我的童年', technique: '拟人', techniqueEn: 'Personification', effect: '书香被赋予"住进"的动作', effectEn: '"Moved in quietly" — fragrance personified as a silent roommate who never left' },
            { para: 2, text: '无论遇到多少妖魔鬼怪，他从不改变方向', technique: '引述提炼', techniqueEn: 'Extracted Principle', effect: '唐僧的坚持成为自身的精神力量', effectEn: 'Tang Monk\'s unwavering direction becomes the narrator\'s own compass — fiction metabolised into resolution' },
            { para: 2, text: '呛几口水算什么', technique: '童真类比', techniqueEn: 'Childlike Analogy', effect: '用文学人物的经历激励自己', effectEn: 'Choking on pool water measured against desert demons — a child\'s proportional reasoning that is both funny and effective' },
            { para: 3, text: '一蓑烟雨任平生', technique: '经典引用', techniqueEn: 'Classical Quote', effect: '苏轼诗词增添文化底蕴', effectEn: 'Su Shi\'s raincoat line — three classical quotations in sequence proving the narrator reads deeply, not just widely' },
            { para: 3, text: '人生的逆境不是终点，而是另一段风景的起点', technique: '议论升华', techniqueEn: 'Reflective Elevation', effect: '从苏轼经历提炼人生智慧', effectEn: 'Adversity as landscape\'s starting point — a reframe learnt from Su Shi and applied to an exam failure' },
            { para: 4, text: '有正在读的、翻了很多遍的、写满了批注的', technique: '状态排比', techniqueEn: 'Status Parallelism', effect: '三种书的状态写出阅读的丰富', effectEn: 'Currently reading, much-reread, heavily annotated — three book states mapping three reading relationships' },
            { para: 5, text: '像一条无形的河，流过我的童年、少年', technique: '比喻', techniqueEn: 'River Metaphor', effect: '河流意象写出书香的连续性', effectEn: 'An invisible river flowing through childhood and adolescence — continuity rendered as liquid, unstoppable, life-giving' },
            { para: 6, text: '这是我十五年人生中，最确定的一件事', technique: '总结收束', techniqueEn: 'Emphatic Closure', effect: '以"最确定"回扣"长伴"的承诺', effectEn: 'The most certain thing in fifteen years — a one-line coda that elevates book-love to existential anchor' }
          ],
          approach: '以时间线串联不同阶段的阅读经历：童年的绘本→少年的名著→初中的哲学，展现书籍如何"长伴左右"。',
          approachEn: 'Uses a timeline to connect reading experiences across stages: childhood picture books → adolescent classics → middle school philosophy, showing how books are "always by my side."',
          architecture: '童年绘本（启蒙）→小学名著（陪伴）→初中哲理（引领）→总结：书香是最长情的陪伴。',
          architectureEn: 'Childhood picture books (enlightenment) → Elementary classics (companionship) → Middle school philosophy (guidance) → Summary: Books are the most enduring companionship.',
          logic: '三段式递进：从"看"到"读"再到"思"，阅读深度逐层提升。',
          logicEn: 'Three-stage progression: from "seeing" to "reading" to "thinking" — deepening reading engagement.',
          skills: ['嗅觉意象贯穿全文', '每阶段选材精准', '借物抒情自然', '结尾首尾呼应'],
          skillsEn: ['Olfactory imagery threads through the essay', 'Precise material selection for each stage', 'Natural object-based emotion', 'Opening-closing echo'],
          fullText: '　　我的世界里，有一种味道从未消散——那是书页翻动时飘散的墨香，从我记事起，就一直萦绕在身旁。\n\n　　五岁的时候，妈妈每晚都会给我读绘本。我最爱的是那本《猜猜我有多爱你》。小兔子说"我爱你一直到月亮那里"，大兔子说"我爱你一直到月亮那里，再从月亮上回来"。那时候我还不完全理解"爱"的含义，但翻开书本那一刻，闻到的油墨味，混着妈妈身上洗衣液的清香，让我觉得世界是温暖的、安全的。书香，就这样悄悄住进了我的童年。\n\n　　小学四年级，我读到了《西游记》。孙悟空的七十二变让我着迷，但真正打动我的是唐僧那句"贫僧自东土大唐而来，前往西天拜佛取经"。无论遇到多少妖魔鬼怪，他从不改变方向。那段时间我正在学游泳，呛了无数次水，想过放弃。但每次回家翻开《西游记》，看到唐僧师徒在沙漠中艰难前行的插图，我就觉得呛几口水算什么？于是第二天又跳进了泳池。\n\n　　初二暑假，我在旧书摊上偶然翻到了一本《苏东坡传》。林语堂笔下的苏轼，被贬黄州却写出"一蓑烟雨任平生"，贬到惠州还能"日啖荔枝三百颗"，流放海南依然"九死南荒吾不恨"。我读得热泪盈眶。那时候我刚经历了一次考试失利，觉得天都要塌了。但苏轼教会了我：人生的逆境不是终点，而是另一段风景的起点。\n\n　　此刻，我的书桌上摞着一摞书：有正在读的《平凡的世界》，有翻了很多遍的《朝花夕拾》，还有一本写满了批注的《唐诗三百首》。它们安静地立在那里，不说话，却一直在陪伴我。\n\n　　从绘本到名著，从故事到哲理，书香像一条无形的河，流过我的童年、少年，还将流向我看不见的远方。有人说，人生路上最好的伴侣是一个懂你的人。而我觉得，一本好书，也是懂你的。它不会在你失意时离开，不会在你骄傲时捧场，它只是安静地等在那里，等你翻开它的那一刻，给你恰好需要的力量。\n\n　　书香长伴我左右。这是我十五年人生中，最确定的一件事。',
          fullTextEn: '　　In my world, there\'s a scent that has never faded — the ink fragrance drifting from turning pages, lingering around me since my earliest memories.\n\n　　At five, Mom read picture books to me every night. My favorite was "Guess How Much I Love You." Little Rabbit says, "I love you all the way to the moon." Big Rabbit says, "I love you to the moon and back." I didn\'t fully understand "love" then, but the moment a book opened, the ink smell mixed with Mom\'s detergent fragrance made the world feel warm and safe. The fragrance of books quietly moved into my childhood.\n\n　　In fourth grade, I read "Journey to the West." Sun Wukong\'s seventy-two transformations fascinated me, but what truly moved me was Tang Monk\'s line: "This poor monk comes from the Eastern Tang Dynasty, traveling to the West to obtain Buddhist scriptures." No matter how many demons appeared, he never changed direction. At that time I was learning to swim, choking on water countless times, wanting to quit. But each time I came home and opened "Journey to the West," seeing the illustration of the pilgrims struggling through the desert, I thought: what\'s choking on a little water compared to that? The next day I jumped back into the pool.\n\n　　During summer break in Grade 8, I stumbled upon "The Gay Genius: The Life and Times of Su Dongpo" at a used book stall. Lin Yutang\'s Su Shi, exiled to Huangzhou yet writing "A raincoat in the misty rain, I live my life at ease," banished to Huizhou still "eating three hundred lychees a day," sent to Hainan yet declaring "Having nearly died in the southern wilds, I hold no regret." I read with tears streaming. I\'d just failed an exam and felt the sky was falling. But Su Shi taught me: life\'s adversity isn\'t an endpoint but the starting point of another landscape.\n\n　　Right now, books are piled on my desk: "Ordinary World" which I\'m currently reading, "Dawn Blossoms Plucked at Dusk" which I\'ve read many times, and a heavily annotated "Three Hundred Tang Poems." They stand there quietly, saying nothing, yet always keeping me company.\n\n　　From picture books to classics, from stories to philosophy, the fragrance of books is like an invisible river flowing through my childhood, adolescence, and onward to distances I cannot yet see. Some say the best companion in life is someone who understands you. I think a good book understands you too. It won\'t leave when you\'re down, won\'t flatter when you\'re proud — it just waits quietly, and the moment you open it, gives you exactly the strength you need.\n\n　　The fragrance of books — always by my side. This is the most certain thing in my fifteen years of life.',
          highlights: [
            { text: '书页翻动时飘散的墨香，从我记事起，就一直萦绕在身旁', textEn: 'The ink fragrance drifting from turning pages, lingering around me since my earliest memories', why: '嗅觉开头独特，"墨香"意象贯穿全文', whyEn: 'An olfactory thesis — scent as the essay\'s governing metaphor, making abstract companionship bodily and immediate' },
            { text: '呛几口水算什么', textEn: 'What\'s choking on a little water compared to that?', why: '童真视角的比较，真实可爱', whyEn: 'A child measuring personal hardship against Tang Monk\'s demons — endearing logic that is both naive and genuinely effective' },
            { text: '它只是安静地等在那里，等你翻开它的那一刻', textEn: 'It just waits quietly, and the moment you open it, gives you exactly the strength you need', why: '拟人手法写书的陪伴，温暖深情', whyEn: 'Books personified as patient friends who never leave — companionship that asks nothing and gives everything' }
          ],
          sections: [
            { type: '童年', fn: '绘本启蒙', fnEn: 'Picture book enlightenment', detail: '妈妈读绘本的温暖记忆', detailEn: 'Warm memories of Mom reading picture books' },
            { type: '少年', fn: '名著陪伴', fnEn: 'Classic companionship', detail: '《西游记》给予坚持的力量', detailEn: '"Journey to the West" gives strength to persist' },
            { type: '青春', fn: '哲理引领', fnEn: 'Philosophical guidance', detail: '《苏东坡传》教会面对逆境', detailEn: 'Su Dongpo biography teaches facing adversity' },
            { type: '结尾', fn: '升华总结', fnEn: 'Elevated summary', detail: '书是最懂你的伴侣', detailEn: 'Books are the companion that understands you best' }
          ]
        },
        {
          title: '勇气长伴我左右',
          titleEn: 'Courage Always by My Side',
          score: 36, maxScore: 40,
          structure: 'diJinShi',
          techniques: ['duiBi', 'xinLiMiaoXie', 'xiJieMiaoXie', 'paiBI'],
          techniqueMarks: [
            { para: 0, text: '勇气是什么？小时候我以为它是超人的披风', technique: '设问引入', techniqueEn: 'Question Opening', effect: '从误解开始制造反差', effectEn: 'Starting with a child\'s misunderstanding — superhero cape versus daily courage — sets up the essay\'s entire redefinition arc' },
            { para: 1, text: '全班哄堂大笑的声音至今还在耳边回响', technique: '听觉回忆', techniqueEn: 'Auditory Memory', effect: '声音记忆写出心理阴影', effectEn: 'Laughter echoing in the ears — a single auditory memory preserving the sting of humiliation years later' },
            { para: 1, text: '手臂像灌了铅一样缓缓举起', technique: '比喻', techniqueEn: 'Lead-Arm Simile', effect: '身体感受写出内心的挣扎', effectEn: 'An arm heavy with fear — the physical difficulty of a raised hand measuring the psychological weight behind it' },
            { para: 1, text: '感觉心里有一扇门被推开了', technique: '比喻', techniqueEn: 'Door Metaphor', effect: '门的意象写出突破', effectEn: 'A door swinging open inside — courage experienced not as achievement but as access to a previously locked space' },
            { para: 2, text: '犹豫了三秒钟，举起了手——然后立刻后悔了', technique: '心理节奏', techniqueEn: 'Psychological Tempo', effect: '三秒→举手→后悔的快节奏转换', effectEn: 'Three seconds of hesitation, a hand, instant regret — courage and doubt happening almost simultaneously' },
            { para: 2, text: '身体比大脑先行动了', technique: '认知对比', techniqueEn: 'Body-Mind Split', effect: '身体先于思维的真实感', effectEn: 'The body singing while the brain panics — courage as somatic intelligence overriding conscious fear' },
            { para: 2, text: '不是因为紧张，而是因为我做到了', technique: '反转揭示', techniqueEn: 'Reversal Reveal', effect: '泪水原因的反转', effectEn: 'Tears reattributed — not from nerves but from accomplishment, a reveal that reframes the entire scene' },
            { para: 3, text: '我不觉得自己勇敢——我只是不想让外公看到我哭', technique: '自谦叙事', techniqueEn: 'Humble Narration', effect: '否认勇敢反而更显勇敢', effectEn: 'Denying bravery while performing it — the deepest form of courage is the kind that doesn\'t recognise itself' },
            { para: 3, text: '握着我的手说："要勇敢。"', technique: '临终嘱托', techniqueEn: 'Deathbed Charge', effect: '两个字的遗言具有永恒力量', effectEn: 'Two words from a dying grandfather — the lightest utterance carrying the heaviest inheritance' },
            { para: 4, text: '它不是不害怕，而是害怕的时候依然选择面对', technique: '排比定义', techniqueEn: 'Parallel Redefinition', effect: '三组"不是…而是…"重新定义勇气', effectEn: 'Three parallel negations — courage coexisting with fear, sadness, and hesitation — a definition earned through three lived stories' }
          ],
          approach: '通过三次"鼓起勇气"的经历（课堂发言、舞台表演、面对离别），层层递进展现勇气如何陪伴成长。',
          approachEn: 'Through three experiences of "mustering courage" (classroom speaking, stage performance, facing farewell), progressively shows how courage accompanies growth.',
          architecture: '第一次勇气：小学课堂举手→第二次勇气：初中舞台独唱→第三次勇气：面对亲人离别→感悟勇气的意义。',
          architectureEn: 'First courage: raising hand in class → Second: solo singing on stage → Third: facing a loved one\'s departure → Reflecting on courage\'s meaning.',
          logic: '勇气的内涵逐层深化：从克服胆怯→到展示自我→到承受痛苦。',
          logicEn: 'Courage\'s meaning deepens progressively: overcoming timidity → showing yourself → bearing pain.',
          skills: ['三层递进结构清晰', '心理描写细腻', '细节增强说服力', '排比结尾有力量'],
          skillsEn: ['Clear three-layer progression', 'Nuanced psychological descriptions', 'Details enhance persuasiveness', 'Powerful parallel ending'],
          fullText: '　　勇气是什么？小时候我以为它是超人的披风，只属于英雄。长大后我才发现，勇气一直就在我身边，像影子一样，从未离开。\n\n　　第一次感受到勇气，是在小学三年级的数学课上。老师出了一道应用题，我在草稿纸上算了两遍，确定自己的答案是对的，但就是不敢举手。因为上一次我回答错了，全班哄堂大笑的声音至今还在耳边回响。\n　　我看了看四周，没有人举手。我深吸一口气，手臂像灌了铅一样缓缓举起。老师点了我的名字，我用颤抖的声音说出了答案。"完全正确！"老师笑着说。那一刻，我感觉心里有一扇门被推开了。原来，勇气就是害怕的时候还敢往前走一步。\n\n　　第二次感受到勇气，是在初一的元旦晚会上。班级节目是合唱，但领唱的同学临时生病了，班主任问谁能顶替。没有人应声。我犹豫了三秒钟，举起了手——然后立刻后悔了。\n　　接下来的一周，我每天对着镜子练习，在楼顶天台上反复唱，声音从抖得不成调到渐渐稳定。晚会当天，我站在舞台中央，灯光刺眼，台下黑压压一片人影。音乐响起的那一刻，我的脑子一片空白。但身体比大脑先行动了——嘴巴张开，歌声流出来了。一首歌唱完，台下掌声如潮。我的眼泪突然就掉了下来——不是因为紧张，而是因为我做到了。\n\n　　第三次感受到勇气，是去年夏天。外公被查出了重病，全家人都在强忍着悲伤。我每天放学后都去医院，给外公读报纸、讲学校的趣事。外公虚弱地笑着，说："我的小孙女真勇敢。"我不觉得自己勇敢——我只是不想让外公看到我哭。每次走出病房，我才让眼泪流出来。\n　　外公最终还是走了。但他走之前，握着我的手说："要勇敢。"这两个字，从此刻进了我的骨头里。\n\n　　勇气长伴我左右。它不是不害怕，而是害怕的时候依然选择面对；它不是不悲伤，而是悲伤的时候依然选择坚强；它不是不犹豫，而是犹豫之后依然选择行动。\n\n　　十五岁的我，还有很多未知的路要走。但我知道，只要勇气还在，我就不会停下。',
          fullTextEn: '　　What is courage? As a child, I thought it was a superhero\'s cape, belonging only to heroes. Growing up, I discovered courage had always been by my side, like a shadow, never leaving.\n\n　　The first time I felt courage was in third-grade math class. The teacher posed a word problem. I worked it twice on scratch paper, certain my answer was right, yet couldn\'t bring myself to raise my hand. The last time I answered wrong, the class\'s roaring laughter still echoed in my ears.\n　　I looked around — no one raised their hand. I took a deep breath. My arm rose slowly, as if filled with lead. The teacher called my name. I spoke the answer in a trembling voice. "Completely correct!" the teacher smiled. In that moment, I felt a door in my heart swing open. So courage is taking one more step forward even when you\'re afraid.\n\n　　The second time was at the Grade 7 New Year\'s Eve party. Our class act was a choir, but the lead singer fell ill last minute. The homeroom teacher asked who could fill in. No one responded. I hesitated three seconds, then raised my hand — and immediately regretted it.\n　　The following week, I practiced in front of the mirror daily, singing repeatedly on the rooftop terrace, my voice going from shaky and off-key to gradually steady. On the evening of the show, I stood center stage, lights glaring, a sea of dark figures below. When the music began, my mind went blank. But my body acted before my brain — my mouth opened, and the song flowed out. When the song ended, applause surged like waves. My tears suddenly fell — not from nerves, but because I did it.\n\n　　The third time was last summer. Grandfather was diagnosed with a serious illness. The whole family held back their grief. Every day after school, I went to the hospital, reading newspapers to him, sharing funny school stories. He smiled weakly and said, "My little granddaughter is so brave." I didn\'t feel brave — I just didn\'t want him to see me cry. Only after leaving the ward did I let the tears flow.\n　　Grandfather eventually passed. But before he left, he held my hand and said: "Be brave." Those two words have been carved into my bones ever since.\n\n　　Courage is always by my side. It\'s not being unafraid, but choosing to face things even when afraid. It\'s not being unsad, but choosing strength even in sadness. It\'s not being unhesitant, but choosing action even after hesitation.\n\n　　At fifteen, I still have many unknown roads to walk. But I know that as long as courage remains, I won\'t stop.',
          highlights: [
            { text: '手臂像灌了铅一样缓缓举起', textEn: 'My arm rose slowly, as if filled with lead', why: '比喻精准写出举手的艰难，画面感强', whyEn: 'Lead-filled arm — the weight of a raised hand measuring the exact gravity of childhood embarrassment' },
            { text: '身体比大脑先行动了', textEn: 'My body acted before my brain', why: '心理与生理反应的对比，真实而生动', whyEn: 'Body outruns brain — courage as muscle memory, bypassing the deliberation that would have produced paralysis' },
            { text: '它不是不害怕，而是害怕的时候依然选择面对', textEn: 'Not being unafraid, but choosing to face things even when afraid', why: '排比定义勇气，有力而深刻', whyEn: 'Three parallel negations — not un-afraid, not un-sad, not un-hesitant — redefining courage as action alongside fear, not in its absence' }
          ],
          sections: [
            { type: '第一层', fn: '克服胆怯', fnEn: 'Overcoming timidity', detail: '课堂举手的勇气', detailEn: 'Courage to raise hand in class' },
            { type: '第二层', fn: '展示自我', fnEn: 'Showing yourself', detail: '舞台独唱的勇气', detailEn: 'Courage to solo sing on stage' },
            { type: '第三层', fn: '承受痛苦', fnEn: 'Bearing pain', detail: '面对亲人离别的勇气', detailEn: 'Courage to face a loved one\'s departure' },
            { type: '结尾', fn: '排比升华', fnEn: 'Parallel elevation', detail: '重新定义勇气', detailEn: 'Redefining courage' }
          ]
        },
        {
          title: '音乐长伴我左右',
          titleEn: 'Music Always by My Side',
          score: 35, maxScore: 40,
          structure: 'bingLieShi',
          techniques: ['wuGanMiaoXie', 'huanJingChenTuo', 'biFangNiRen', 'duiBi'],
          techniqueMarks: [
            { para: 0, text: '如果人生有配乐', technique: '假设开篇', techniqueEn: 'Hypothetical Opening', effect: '电影配乐的概念拉近读者', effectEn: 'Life-as-film — the soundtrack metaphor instantly makes every reader a protagonist' },
            { para: 1, text: '想家，想妈妈做的番茄炒蛋，想自己房间里那盏小夜灯', technique: '排比细节', techniqueEn: 'Detail Parallelism', effect: '三个"想"写出具体的乡愁', effectEn: 'Three "missing" clauses — each more intimate, from home to food to lamp, mapping homesickness in descending scale' },
            { para: 1, text: '旋律像月光一样柔软地倾泻下来', technique: '通感', techniqueEn: 'Synesthesia', effect: '听觉到视觉的转化', effectEn: 'Melody as poured moonlight — hearing becomes seeing, and both become feeling' },
            { para: 1, text: '音乐是我的小夜灯', technique: '比喻', techniqueEn: 'Metaphor', effect: '音乐=安全感的具象化', effectEn: 'Music as night-lamp — the comparison bridges the literal lamp she misses and the metaphorical comfort she finds' },
            { para: 2, text: '节奏像鼓点一样敲在心上，血液一下子沸腾了', technique: '拟人+夸张', techniqueEn: 'Personification + Hyperbole', effect: '音乐转化为身体能量', effectEn: 'Drumbeats hitting the heart, blood boiling — sound metabolised into adrenaline' },
            { para: 2, text: '我感觉自己不是在跑步，而是在飞', technique: '夸张', techniqueEn: 'Hyperbole', effect: '飞的感觉写出音乐带来的超越', effectEn: 'Running becomes flying — music dissolving gravity, limits transcended through rhythm' },
            { para: 3, text: '一百年前李叔同写下的歌词，在这一刻竟如此贴切', technique: '时间跨越', techniqueEn: 'Temporal Bridge', effect: '百年前的歌词与当下共鸣', effectEn: 'A century-old lyric fitting a modern classroom — music proving that some emotions are timeless' },
            { para: 3, text: '笑着笑着就哭了', technique: '矛盾叙事', techniqueEn: 'Paradox Narration', effect: '六字写尽复杂情感', effectEn: 'Laughing into crying — an emotional phase transition captured in six characters' },
            { para: 3, text: '像一条河，带走了我们的少年时光', technique: '比喻', techniqueEn: 'River Metaphor', effect: '歌声如河流的意象写出离别', effectEn: 'Song as river — simultaneously carrying youth away and depositing permanent memories on its banks' },
            { para: 4, text: '在我孤独的时候，它说"我在"；在我害怕的时候，它说"你行"', technique: '拟人排比', techniqueEn: 'Personified Parallelism', effect: '三句拟人话语赋予音乐人格', effectEn: 'Three responses music "speaks" — I\'m here, you can, remember — personification that feels earned, not forced' }
          ],
          approach: '以三个与音乐相关的场景并列展开：安慰孤独的夜晚、激励拼搏的赛场、承载回忆的毕业典礼。',
          approachEn: 'Develops three music-related scenes in parallel: a lonely night comforted by music, a competition energized by music, a graduation ceremony with memory-laden music.',
          architecture: '引题→场景一：深夜的安慰曲→场景二：赛前的战歌→场景三：毕业的离别歌→总结。',
          architectureEn: 'Introduction → Scene 1: Late-night comfort song → Scene 2: Pre-competition battle song → Scene 3: Graduation farewell song → Summary.',
          logic: '三个并列场景展现音乐的不同功能：治愈、激励、铭记。',
          logicEn: 'Three parallel scenes show music\'s different functions: healing, inspiring, remembering.',
          skills: ['五感描写音乐感受', '环境与心情交融', '音乐的比喻恰切', '情感真实不矫揉'],
          skillsEn: ['Five-senses music descriptions', 'Environment-mood fusion', 'Apt music metaphors', 'Authentic unaffected emotion'],
          fullText: '　　如果人生有配乐，那么我的每一个重要时刻，都有音乐在场。\n\n　　深夜的安慰。初一住校的第一个晚上，我躲在被窝里偷偷哭。想家，想妈妈做的番茄炒蛋，想自己房间里那盏小夜灯。宿舍里其他同学已经睡着了，只有窗外的虫鸣和我压低的抽泣声。我戴上耳机，点开了妈妈临走前帮我下载的那首《夜空中最亮的星》。旋律像月光一样柔软地倾泻下来，歌词唱着"每当我找不到存在的意义，每当我迷失在黑夜里，夜空中最亮的星，请照亮我前行"。我不知不觉止住了眼泪。那个夜晚，音乐是我的小夜灯，驱散了陌生环境带来的所有不安。\n\n　　赛前的激励。初二运动会前，我作为班级800米选手，紧张得双腿发软。检录区里，选手们都在做热身运动，我却怎么也进入不了状态。这时候，队友递过来一只耳机："听听这个。"是一首摇滚版的《奔跑》——"随风奔跑自由是方向，追逐雷和闪电的力量"。节奏像鼓点一样敲在心上，血液一下子沸腾了。我站起来，活动筋骨，深吸一口气。发令枪响的那一刻，我感觉自己不是在跑步，而是在飞。最终我拿了第三名——不是最好的成绩，但那首歌给了我超越自己的勇气。\n\n　　毕业的铭记。初三最后一天，教室里放着《送别》："长亭外，古道边，芳草碧连天。"一百年前李叔同写下的歌词，在这一刻竟如此贴切。三年的同窗时光像走马灯一样在眼前闪过：一起在食堂抢最后一个鸡腿，一起在操场上淋雨奔跑，一起在考试前互相打气。我看着身边的同学，有人在笑，有人在哭，有人笑着笑着就哭了。歌声回荡在教室里，像一条河，带走了我们的少年时光，也留下了永远冲刷不掉的记忆。\n\n　　音乐不会说话，但它比任何语言都懂我。在我孤独的时候，它说"我在"；在我害怕的时候，它说"你行"；在我告别的时候，它说"记住"。\n\n　　音乐长伴我左右。从过去，到现在，到未来的每一个需要它的时刻。',
          fullTextEn: '　　If life had a soundtrack, music would be present at every important moment of mine.\n\n　　Late-night comfort. The first night of boarding school in Grade 7, I cried quietly under my blanket. Missing home, missing Mom\'s tomato egg stir-fry, missing my bedroom night lamp. Other roommates were asleep; only insects outside and my muffled sobs broke the silence. I put on earphones and played the song Mom had downloaded before leaving: "The Brightest Star in the Night Sky." The melody poured down softly like moonlight, lyrics singing "Whenever I can\'t find the meaning of existence, whenever I\'m lost in the dark night, brightest star in the sky, please light my way forward." Before I knew it, my tears stopped. That night, music was my night lamp, dispelling all the unease of unfamiliar surroundings.\n\n　　Pre-race inspiration. Before the Grade 8 sports day, as the class 800-meter runner, my legs were weak with nerves. In the check-in area, other runners were warming up while I couldn\'t get into the zone. A teammate handed me an earphone: "Listen to this." It was a rock version of "Run" — "Running with the wind, freedom is the direction, chasing the power of thunder and lightning." The rhythm hit my heart like drumbeats; my blood instantly boiled. I stood up, stretched, took a deep breath. When the starting gun fired, I felt like I wasn\'t running but flying. I finished third — not the best result, but that song gave me the courage to surpass myself.\n\n　　Graduation memories. The last day of Grade 9, the classroom played "Farewell": "Beyond the long pavilion, beside the ancient road, fragrant grass connects the green horizon." Li Shutong\'s century-old lyrics felt so fitting in that moment. Three years of school life flashed before my eyes: fighting for the last drumstick in the cafeteria, running in the rain on the playground, cheering each other on before exams. Looking at classmates around me — some laughing, some crying, some laughing until they cried. The song echoed through the classroom like a river, carrying away our youth while leaving memories that can never be washed away.\n\n　　Music doesn\'t speak, but it understands me better than any language. When I\'m lonely, it says "I\'m here." When I\'m afraid, it says "You can." When I\'m saying goodbye, it says "Remember."\n\n　　Music — always by my side. From past, to present, to every future moment I need it.',
          highlights: [
            { text: '旋律像月光一样柔软地倾泻下来', textEn: 'The melody poured down softly like moonlight', why: '通感手法精彩，音乐感受视觉化', whyEn: 'Sound rendered as poured light — two senses fusing to create the gentleness only a lonely night can hold' },
            { text: '笑着笑着就哭了', textEn: 'Laughing until they cried', why: '六个字写尽毕业的复杂情感', whyEn: 'Six characters that compress an entire graduation\'s emotional range — joy collapsing into grief without transition' },
            { text: '在我孤独的时候，它说"我在"', textEn: 'When I\'m lonely, it says "I\'m here"', why: '拟人排比精妙，为音乐赋予人格', whyEn: 'Music given three one-line speeches — "I\'m here," "you can," "remember" — a wordless medium granted the gift of words' }
          ],
          sections: [
            { type: '场景一', fn: '治愈孤独', fnEn: 'Healing loneliness', detail: '住校第一夜的安慰', detailEn: 'Comfort on first boarding school night' },
            { type: '场景二', fn: '激励勇气', fnEn: 'Inspiring courage', detail: '运动会前的战歌', detailEn: 'Battle song before sports day' },
            { type: '场景三', fn: '铭记离别', fnEn: 'Remembering farewell', detail: '毕业典礼的送别歌', detailEn: 'Farewell song at graduation' },
            { type: '结尾', fn: '拟人总结', fnEn: 'Personified summary', detail: '音乐是最懂我的朋友', detailEn: 'Music is the friend that understands me best' }
          ]
        },
        {
          title: '奶奶的叮嘱长伴我左右',
          titleEn: 'Grandma\'s Words Always by My Side',
          score: 36, maxScore: 40,
          structure: 'qiChengZhuanHe',
          techniques: ['duiHuaQuDong', 'xiJieMiaoXie', 'shouWeiHuYing', 'yiXiaoJianDa'],
          techniqueMarks: [
            { para: 0, text: '不会写字，不会用手机，不会说英语，但她有三句话', technique: '对比开篇', techniqueEn: 'Contrastive Opening', effect: '三个"不会"衬托三句话的珍贵', effectEn: 'Three deficiencies framing three treasures — the contrast makes Grandma\'s words glow brighter' },
            { para: 1, text: '把最大的鸡腿夹到我碗里', technique: '动作细节', techniqueEn: 'Action Detail', effect: '夹鸡腿写出最质朴的爱', effectEn: 'The biggest drumstick always goes to the child — love distilled into a single chopstick gesture' },
            { para: 1, text: '吹凉了再送到我嘴边', technique: '动作特写', techniqueEn: 'Close-Up Action', effect: '吹凉粥的耐心写出无微不至', effectEn: 'Blowing each spoonful cool before feeding — patience made visible at four in the morning' },
            { para: 2, text: '认识的字不超过一百个', technique: '数据说明', techniqueEn: 'Quantified Context', effect: '量化文盲程度反衬重视教育', effectEn: 'Fewer than a hundred characters — the number measures both the grandmother\'s sacrifice and her aspiration' },
            { para: 2, text: '安静地坐在旁边织毛衣，偶尔抬头看我一眼', technique: '留白描写', techniqueEn: 'Understated Presence', effect: '无声陪伴比说教更有力', effectEn: 'Knitting beside a studying child, glancing up — silence as the highest form of encouragement' },
            { para: 3, text: '风雨无阻，四季不变', technique: '概括叙事', techniqueEn: 'Compressive Summary', effect: '八字写尽年复一年的坚持', effectEn: 'Eight characters compress thousands of mornings into a single image of unwavering routine' },
            { para: 3, text: '不是刚出来，而是一直站在那里', technique: '转折揭示', techniqueEn: 'Revelatory Pivot', effect: '发现真相的冲击力极强', effectEn: 'The discovery that Grandma stood there all day — a reveal that hits with the force of accumulated love' },
            { para: 4, text: '我的眼泪猛地涌了上来', technique: '情感爆发', techniqueEn: 'Emotional Break', effect: '身体反应比语言更真实', effectEn: 'Tears surging — the body processing what the mind hasn\'t yet articulated: years of love finally seen' },
            { para: 5, text: '三句最朴素的话', technique: '总结回扣', techniqueEn: 'Callback Summary', effect: '呼应开头的三句话结构', effectEn: '"Three plainest phrases" echoes the opening triptych — structural symmetry mirrors emotional closure' },
            { para: 6, text: '永远是我心里最稳的锚', technique: '比喻收束', techniqueEn: 'Anchor Metaphor', effect: '锚的意象写出安定感', effectEn: 'An anchor in the heart — Grandma\'s words as the gravitational constant in a shifting adolescent world' }
          ],
          approach: '以奶奶反复叮嘱的三句话为线索，串联不同成长阶段的故事，展现长辈的爱如何通过简单的话语长久陪伴。',
          approachEn: 'Uses three of grandma\'s repeated reminders as threads, connecting stories from different growth stages, showing how an elder\'s love endures through simple words.',
          architecture: '起：奶奶总是重复三句话→承："多吃饭"背后的关爱→转："好好读书"背后的期望→"出门小心"背后的牵挂→合：这些话成为我心中的力量。',
          architectureEn: 'Intro: Grandma always repeats three phrases → Development: The care behind "eat more" → Turn: The expectation behind "study hard" → The concern behind "be careful outside" → Conclusion: These words become inner strength.',
          logic: '三句日常叮嘱背后的深层含义逐步揭示，由浅入深。',
          logicEn: 'Gradually revealing the deep meanings behind three daily reminders, from surface to depth.',
          skills: ['日常对话承载深情', '细节写出真实生活', '首尾呼应结构完整', '以小见大手法纯熟'],
          skillsEn: ['Daily dialogue carries deep emotion', 'Details convey authentic life', 'Opening-closing echo for structural unity', 'Masterful "small detail, big theme" technique'],
          fullText: '　　奶奶不会写字，不会用手机，不会说英语，但她有三句话，说了十五年，一句也没变过。\n\n　　第一句："多吃饭，长个子。"每次吃饭，奶奶都会把最大的鸡腿夹到我碗里，然后笑眯眯地看着我吃。小时候我嫌她唠叨："知道了知道了！"可现在想起来，那是世界上最简单也最真诚的关爱。有一年冬天我发烧，什么都不想吃。奶奶凌晨四点起来，熬了一锅小米粥，一勺一勺地喂我。粥很烫，她就吹凉了再送到我嘴边。那碗粥的温度，比任何药都管用。\n\n　　第二句："好好读书，将来有出息。"奶奶只上过两年学，认识的字不超过一百个。但她知道读书的重要。每次期末考试成绩出来，不管好坏，她都会问："考了多少分啊？"考好了，她乐得合不拢嘴；考差了，她摸摸我的头说："没关系，下次好好考。"她从不骂我，也不给我讲大道理，只是每天晚上在我写作业的时候，安静地坐在旁边织毛衣，偶尔抬头看我一眼，好像只要她在，我就能学得更好一样。\n\n　　第三句："出门小心，早点回来。"这是我每天出门上学时奶奶站在门口说的最后一句话。风雨无阻，四季不变。有时候我走得急，来不及回应，只远远地挥一下手。直到有一次放学回家，我看到奶奶还站在门口等我——不是刚出来，而是一直站在那里。她说："你早上走的时候没回头，我怕你路上不安全。"\n　　那一刻，我的眼泪猛地涌了上来。\n\n　　奶奶的叮嘱，不是什么名言警句，不是什么人生哲理，只是三句最朴素的话。但正是这三句话，在我考试失利的时候给我安慰，在我想偷懒的时候给我力量，在我离家远行的时候给我温暖。\n\n　　"多吃饭，好好读书，出门小心。"——这是一个不会写字的老人，能给孙女最好的人生指南。\n\n　　奶奶的叮嘱长伴我左右。不管我走多远，这三句话，永远是我心里最稳的锚。',
          fullTextEn: '　　Grandma can\'t write, can\'t use a smartphone, can\'t speak English. But she has three phrases she\'s said for fifteen years, never changing a single one.\n\n　　First: "Eat more, grow taller." Every meal, Grandma picks the biggest drumstick into my bowl, then watches me eat with a beaming smile. As a child I found her nagging: "I know, I know!" But looking back now, it was the world\'s simplest and most sincere care. One winter I had a fever and didn\'t want to eat anything. Grandma woke at 4 AM and simmered a pot of millet porridge, feeding me spoon by spoon. The porridge was too hot, so she blew it cool before bringing it to my lips. That bowl\'s warmth worked better than any medicine.\n\n　　Second: "Study hard, make something of yourself someday." Grandma only attended two years of school and knows fewer than a hundred characters. But she knows reading matters. Every semester when exam results came out, good or bad, she\'d ask: "What score did you get?" Good results made her smile ear to ear. Bad results, she\'d pat my head: "It\'s okay, do better next time." She never scolded me or lectured me — just sat quietly beside me every evening while I did homework, knitting, occasionally glancing up, as if her mere presence could help me learn better.\n\n　　Third: "Be careful outside, come home early." This is Grandma\'s last words every morning as I leave for school, standing at the door. Rain or shine, season after season. Sometimes I rush out, only managing a distant wave without responding. Until one day I came home from school to find Grandma still standing at the door — not just stepping out, but having stood there the whole time. She said: "You didn\'t look back this morning. I was worried about your safety."\n　　In that moment, tears surged up uncontrollably.\n\n　　Grandma\'s reminders aren\'t famous quotes or life philosophies — just three of the most ordinary phrases. But these three phrases comfort me when exams go badly, give me strength when I want to slack off, and warm me when I\'m far from home.\n\n　　"Eat more, study hard, be careful outside." — This is the best life guide an illiterate grandmother can give her granddaughter.\n\n　　Grandma\'s words — always by my side. No matter how far I go, these three phrases will forever be the steadiest anchor in my heart.',
          highlights: [
            { text: '奶奶不会写字，不会用手机，不会说英语，但她有三句话', textEn: 'Grandma can\'t write, can\'t use a smartphone, can\'t speak English — but she has three phrases', why: '对比开篇，以"不会"衬托"会"的珍贵', whyEn: 'Three "can\'ts" that frame what follows: the most powerful guidance needs no literacy, technology, or foreign language' },
            { text: '你早上走的时候没回头，我怕你路上不安全', textEn: 'You didn\'t look back this morning — I was worried about your safety on the road', why: '一句话写尽祖孙情，以小见大的极致', whyEn: 'One sentence revealing that Grandma stood at the door the entire school day — love measured in hours of silent vigil' },
            { text: '这是一个不会写字的老人，能给孙女最好的人生指南', textEn: 'This is the best life guide an illiterate grandmother can give her granddaughter', why: '回扣开头的对比，升华朴素之爱', whyEn: 'Circling back to the three "can\'ts" — illiteracy suddenly reframed not as limitation but as proof that love needs no words' }
          ],
          sections: [
            { type: '起', fn: '引出三句话', fnEn: 'Introduce three phrases', detail: '奶奶十五年不变的叮嘱', detailEn: 'Grandma\'s unchanging fifteen-year reminders' },
            { type: '承', fn: '多吃饭', fnEn: '"Eat more"', detail: '饮食关爱与生病熬粥', detailEn: 'Dietary care and making porridge during illness' },
            { type: '转', fn: '好好读书+出门小心', fnEn: '"Study hard" + "Be careful"', detail: '期望与牵挂的深层表达', detailEn: 'Deep expression of expectations and concern' },
            { type: '合', fn: '朴素之爱', fnEn: 'Simple love', detail: '最朴素的话是最好的人生指南', detailEn: 'The simplest words are the best life guide' }
          ]
        },
        {
          title: '坚持长伴我左右',
          titleEn: 'Persistence Always by My Side',
          score: 35, maxScore: 40,
          structure: 'zongFenZong',
          techniques: ['duiBi', 'jiaXuJiaYi', 'xiJieMiaoXie', 'yiLunJuLi'],
          techniqueMarks: [
            { para: 0, text: '最安静、最不起眼、却最有力量的', technique: '排比定义', techniqueEn: 'Triple-Superlative Definition', effect: '三个"最"重新评估被忽视的品质', effectEn: 'Three superlatives in a row rescue a mundane word from obscurity — persistence rebranded as power' },
            { para: 1, text: '不像"天赋"那样光芒万丈，不像"运气"那样令人艳羡', technique: '对比铺垫', techniqueEn: 'Contrastive Setup', effect: '对比衬托坚持的低调', effectEn: 'Talent dazzles, luck awes — persistence does neither, and the contrast is precisely the point' },
            { para: 2, text: '全班倒数第三', technique: '精确数据', techniqueEn: 'Exact Data', effect: '具体名次增强起点之低', effectEn: 'Third from last — the precision of the ranking makes the baseline undeniably low and the arc undeniably real' },
            { para: 3, text: '闹钟响了三次我才爬起来', technique: '细节描写', techniqueEn: 'Specific Detail', effect: '三次闹钟写出早起的艰难', effectEn: 'Three alarms before rising — morning resistance measured in snooze-button presses' },
            { para: 4, text: '但第四天，我还是去了', technique: '转折句', techniqueEn: 'Pivotal Sentence', effect: '简短有力写出关键转折', effectEn: 'Seven words that carry the entire moral: showing up on day four is where persistence begins' },
            { para: 4, text: '从倒数第三变成了中等偏上', technique: '数据对比', techniqueEn: 'Data Contrast', effect: '4:52→3:48的量化进步', effectEn: 'From 4:52 to 3:48, last to above-average — numbers that convert abstract virtue into concrete proof' },
            { para: 5, text: '堆积如山的复习资料', technique: '夸张', techniqueEn: 'Hyperbole', effect: '复习量的视觉化', effectEn: 'A mountain of study materials — the physical image of academic overwhelm' },
            { para: 5, text: '既然跑步都能坚持下来，复习为什么不能', technique: '类比反问', techniqueEn: 'Analogical Question', effect: '以运动经验激励学习', effectEn: 'The body\'s proven capacity becomes the mind\'s encouragement — a question that answers itself' },
            { para: 6, text: '年级排名前进了87名', technique: '数据佐证', techniqueEn: 'Data Evidence', effect: '87名的量化进步极具说服力', effectEn: 'Eighty-seven ranks — a number large enough to silence every sceptic of daily incremental effort' },
            { para: 7, text: '你不会因为跑了一天就变快，但如果你每天都跑', technique: '哲理总结', techniqueEn: 'Philosophical Summary', effect: '运动道理升华为人生智慧', effectEn: 'One day changes nothing; every day changes everything — the essay\'s thesis extracted from the runner\'s logbook' }
          ],
          approach: '以长跑训练为主线，穿插学习中的坚持，展现"坚持"作为一种品质如何贯穿日常生活。',
          approachEn: 'Uses long-distance running training as the main thread, interspersed with academic persistence, showing how "persistence" as a quality permeates daily life.',
          architecture: '总论：坚持是最沉默的力量→长跑训练的坚持→学习备考的坚持→日常小事的坚持→总结：坚持改变了我。',
          architectureEn: 'General: Persistence is the most silent strength → Running training persistence → Academic preparation persistence → Daily persistence → Summary: Persistence changed me.',
          logic: '由运动到学习到生活，展现"坚持"的普遍性和力量。',
          logicEn: 'From sports to study to life, showing persistence\'s universality and power.',
          skills: ['总分总结构清晰', '对比突出坚持前后', '细节增强可信度', '夹叙夹议有深度'],
          skillsEn: ['Clear general-specific-general structure', 'Contrast highlights before/after persistence', 'Details enhance credibility', 'Narration with reflection adds depth'],
          fullText: '　　坚持，是我认识的所有词语中，最安静、最不起眼、却最有力量的一个。\n\n　　它不像"天赋"那样光芒万丈，不像"运气"那样令人艳羡，它只是日复一日地重复同一件事，直到量变引起质变。\n\n　　我的坚持，始于一双跑鞋。初一体育课测800米，我跑了4分52秒——全班倒数第三。体育老师皱着眉说："你的体能太差了，每天早上来操场跑两圈吧。"\n\n　　两圈，800米。听起来不多，但对当时的我来说，那是一段折磨。第一天，我跑到一半就岔气了，弯着腰在跑道边喘了五分钟。第二天，腿酸得下楼梯都打颤。第三天，闹钟响了三次我才爬起来。\n\n　　但第四天，我还是去了。第五天，第六天，也去了。一个月后，我可以连续跑完两圈不用停下来喘气了。三个月后，800米成绩提高到了4分15秒。一学期后，3分48秒——从倒数第三变成了中等偏上。\n\n　　坚持跑步教会我的，远不只是跑步本身。初二期末复习的时候，面对堆积如山的复习资料，我曾经想过"随便看看就算了"。但我想起了跑步的经验——那些清晨五点半的操场、那些腿酸到发抖还在迈步的时刻。既然跑步都能坚持下来，复习为什么不能？\n\n　　于是我给自己定了计划：每天复习三个科目，每个科目一小时。不求快，不求多，只求每天都做。一天一天地执行，一页一页地翻过。期末考试出成绩的那天，班主任在全班面前念了我的进步幅度：年级排名前进了87名。\n\n　　现在回想起来，87名的进步，不是靠某一天的拼命，而是靠每一天的坚持。就像跑步一样，你不会因为跑了一天就变快，但如果你每天都跑，有一天你会发现自己已经跑在了前面。\n\n　　坚持长伴我左右。它不张扬，不炫耀，只是默默地、一步一步地，带我走到我曾经以为到不了的地方。',
          fullTextEn: '　　Persistence is the quietest, most unassuming, yet most powerful word I know.\n\n　　It doesn\'t shine like "talent," doesn\'t inspire envy like "luck." It simply repeats the same thing day after day until quantity breeds quality.\n\n　　My persistence began with a pair of running shoes. In Grade 7 PE, my 800-meter time was 4:52 — third from last in class. The PE teacher frowned: "Your fitness is too poor. Come run two laps on the track every morning."\n\n　　Two laps, 800 meters. Sounds like nothing, but for me then, it was torture. Day one, I got a side stitch halfway and bent over gasping for five minutes. Day two, my legs ached so much I trembled going downstairs. Day three, my alarm rang three times before I crawled out of bed.\n\n　　But day four, I still went. Day five, day six, I went too. After one month, I could run two complete laps without stopping to gasp. After three months, my 800-meter time improved to 4:15. After one semester, 3:48 — from third-to-last to above average.\n\n　　What running persistence taught me goes far beyond running itself. During Grade 8 final exam review, facing mountains of study materials, I once thought "just skim through and call it done." But I remembered the running experience — those 5:30 AM tracks, those moments when my legs trembled but I kept striding. If I could persist at running, why not reviewing?\n\n　　So I made a plan: review three subjects daily, one hour each. Not seeking speed or volume, just doing it every day. Executing day by day, turning page by page. When final exam results came out, the homeroom teacher read my improvement in front of the class: grade ranking advanced 87 places.\n\n　　Looking back, that 87-place improvement didn\'t come from one day of cramming but from daily persistence. Just like running — you won\'t get faster from running one day, but if you run every day, one day you\'ll find yourself running ahead.\n\n　　Persistence — always by my side. It doesn\'t boast or show off; it just quietly, step by step, carries me to places I once thought I could never reach.',
          highlights: [
            { text: '坚持，是最安静、最不起眼、却最有力量的', textEn: 'Persistence — the quietest, most unassuming, yet most powerful word I know', why: '开篇定义独特，三个"最"形成排比', whyEn: 'A triple superlative that rehabilitates an overlooked virtue — quiet, invisible, yet irresistible' },
            { text: '既然跑步都能坚持下来，复习为什么不能', textEn: 'If I could persist at running, why not at reviewing?', why: '自然过渡从运动到学习，逻辑通顺', whyEn: 'The body\'s proven endurance becomes the mind\'s argument — a seamless bridge from track to textbook' },
            { text: '默默地、一步一步地，带我走到我曾经以为到不了的地方', textEn: 'Quietly, step by step, carrying me to places I once thought I could never reach', why: '结尾与标题完美契合，收束有力', whyEn: 'The closing line mirrors both the running stride and the study routine — persistence as locomotion in every domain' }
          ],
          sections: [
            { type: '总起', fn: '定义坚持', fnEn: 'Define persistence', detail: '坚持是最安静的力量', detailEn: 'Persistence is the quietest strength' },
            { type: '分述一', fn: '跑步坚持', fnEn: 'Running persistence', detail: '800米从倒数到中等', detailEn: '800m from last to middle' },
            { type: '分述二', fn: '学习坚持', fnEn: 'Study persistence', detail: '期末进步87名', detailEn: 'Advancing 87 rankings at finals' },
            { type: '总结', fn: '升华', fnEn: 'Elevation', detail: '坚持带我到了到不了的地方', detailEn: 'Persistence takes me where I thought impossible' }
          ]
        }
      ]
    },
    {
      id: 'yn2023_comp1',
      paperId: 'yn2023',
      year: 2023,
      region: '云南省',
      prompt: '请以"那一刻，我长大了"为题，写一篇不少于600字的作文。',
      promptEn: 'Write an essay titled "In That Moment, I Grew Up" (at least 600 words).',
      context: '成长不是一天完成的，但总有某个瞬间让你突然意识到自己长大了。那一刻，也许是一次担当，也许是一次理解，也许是一次告别。请结合自己的经历，写一篇作文。',
      contextEn: 'Growing up doesn\'t happen in a day, but there is always a moment when you suddenly realize you\'ve matured. That moment might be an act of responsibility, an act of understanding, or a farewell. Write about your own experience.',
      type: 'fullTitle',
      category: '命题记叙文',
      categoryEn: 'Full-title Narrative',
      wordCount: 600,
      guide: {
        analysis: '本题要求以"那一刻，我长大了"为题，重点在于：（1）聚焦一个具体的"瞬间"，而非泛泛写成长过程；（2）"长大"的内涵不仅是年龄增长，更是心智的成熟、责任的承担或情感的蜕变；（3）叙事中要有转变的层次感，体现"那一刻"前后的对比。',
        analysisEn: 'This prompt requires focusing on a specific "moment" of growing up. Key points: (1) Zero in on a concrete instant, not a vague growth process; (2) "Growing up" means not just aging but mental maturity, responsibility, or emotional transformation; (3) The narrative needs layered transformation showing before/after contrast around "that moment."',
        keyPoints: ['选择一个具体的转折瞬间', '展现"那一刻"前后的心理变化', '体现对"长大"的深层理解', '细节描写要有画面感'],
        keyPointsEn: ['Choose a specific turning-point instant', 'Show psychological change before and after "that moment"', 'Reflect a deeper understanding of "growing up"', 'Vivid details with cinematic quality'],
        pitfalls: ['写成流水账式成长经历', '缺少具体的"那一刻"', '"长大"的理解停留在表面'],
        pitfallsEn: ['Writing a chronological growth account', 'Lacking a concrete "that moment"', 'Superficial understanding of "growing up"']
      },
      essays: [
        {
          title: '那一刻，我长大了',
          titleEn: 'In That Moment, I Grew Up',
          score: 38,
          maxScore: 40,
          structure: 'qiChengZhuanHe',
          techniques: ['xiJieMiaoXie', 'xinLiMiaoXie', 'duiBi', 'shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '豆大的雨点砸在教学楼的玻璃窗上', technique: '环境开篇', techniqueEn: 'Weather Opening', effect: '暴雨营造氛围，暗示情感风暴', effectEn: 'Fat raindrops pelting glass — the external storm foreshadows the internal one about to break' },
            { para: 2, text: '一手撑着伞，一手拎着我的雨靴，小跑着穿过积水的操场', technique: '动作描写', techniqueEn: 'Action Sequence', effect: '三个动作串联写出父爱的主动', effectEn: 'Umbrella, rain boots, jogging through puddles — three simultaneous actions paint a father\'s devotion in one stroke' },
            { para: 3, text: '我早已习以为常，甚至有些理所当然', technique: '心理铺垫', techniqueEn: 'Psychological Setup', effect: '为后文的顿悟制造反差', effectEn: 'Taking for granted — the setup that makes the coming shock proportional to years of blindness' },
            { para: 4, text: '像初冬的第一层薄霜，悄无声息地覆盖了原本乌黑的头发', technique: '比喻', techniqueEn: 'Frost Simile', effect: '白发如霜的意象诗意而震撼', effectEn: 'Grey hair as early frost — nature\'s quiet invasion of what was once youthfully black, noticed only by accident' },
            { para: 4, text: '我的手僵在半空中', technique: '定格描写', techniqueEn: 'Freeze Frame', effect: '身体僵住写出心理震动', effectEn: 'A hand frozen mid-air — the body\'s circuit-breaker tripping before the mind can process what the eyes have seen' },
            { para: 5, text: '什么时候开始，他的背不再那么挺直了？', technique: '排比追问', techniqueEn: 'Anaphoric Questions', effect: '三个追问层层加深自责', effectEn: 'Three "when did" questions — each one peeling back another layer of guilt the narrator didn\'t know they carried' },
            { para: 6, text: '像小时候他把我扛在肩头看烟花时一样温暖', technique: '记忆闪回', techniqueEn: 'Memory Flash', effect: '童年记忆强化父亲形象不变的温暖', effectEn: 'Fireworks on father\'s shoulders — a childhood flashback proving that the warmth hasn\'t changed, only the narrator\'s eyes have' },
            { para: 8, text: '第一次主动把伞倾向他那一边', technique: '动作转折', techniqueEn: 'Gestural Pivot', effect: '倾伞动作象征角色反转', effectEn: 'Tilting the umbrella toward the father — a single physical shift that enacts the entire essay\'s emotional arc' },
            { para: 9, text: '每一朵都映着路灯昏黄的光', technique: '环境呼应', techniqueEn: 'Environmental Echo', effect: '雨中水花映光写出心境变化', effectEn: 'Puddle-blossoms reflecting streetlight — rain that was irritating at the opening is now tender and luminous' },
            { para: 10, text: '长大不是生日蛋糕上多了一根蜡烛', technique: '议论升华', techniqueEn: 'Reflective Definition', effect: '重新定义"长大"的深层含义', effectEn: 'Candles versus outward gaze — the essay\'s thesis crystallised: maturity is not a number but a direction of attention' }
          ],
          approach: '以雨天父亲送伞为切入点，通过发现父亲鬓角白发的细节，引发"我"从被呵护者到理解父爱的心理转变，展现成长瞬间的触动。',
          approachEn: 'Uses the father delivering an umbrella on a rainy day as the entry point. Through the detail of discovering grey hair at father\'s temples, the narrator shifts from being sheltered to understanding paternal love, revealing the touching instant of growing up.',
          architecture: '起：雨天放学，父亲送伞的日常场景；承：回忆从小到大父亲的默默付出；转：接过伞时发现父亲的白发，内心震动；合：理解父爱，感悟长大的真正含义。',
          architectureEn: 'Introduction: Rainy after-school scene, father delivers umbrella. Development: Recall father\'s silent devotion over the years. Turn: Noticing father\'s grey hair when taking the umbrella, inner shock. Conclusion: Understanding paternal love, realizing the true meaning of growing up.',
          logic: '由"习以为常"到"突然发现"再到"深刻理解"，三层心理递进揭示成长的瞬间性。',
          logicEn: 'From "taking for granted" to "sudden discovery" to "deep understanding" — three psychological layers reveal the instantaneous nature of growing up.',
          skills: ['开头环境描写烘托氛围', '细节描写（白发）触发情感转折', '前后心理对比鲜明', '结尾与开头雨景呼应，首尾圆合'],
          skillsEn: ['Opening environmental description sets the atmosphere', 'Vivid detail (grey hair) triggers emotional turning point', 'Sharp before/after psychological contrast', 'Ending echoes the opening rain scene for circular closure'],
          fullText: '　　雨从放学铃响之前就开始下了。豆大的雨点砸在教学楼的玻璃窗上，发出噼里啪啦的声响。我站在走廊尽头，看着灰蒙蒙的天，心里有些烦躁——今天偏偏忘了带伞。\n\n　　"又没带伞？"同桌小杰撑着伞从我身边走过，"你爸肯定又会来接你的。"\n\n　　我没说话，只是望向校门口。果然，不到十分钟，一个熟悉的身影出现在雨幕中。是爸爸。他穿着那件洗得有些发白的灰色外套，一手撑着伞，一手拎着我的雨靴，小跑着穿过积水的操场。\n\n　　说来惭愧，这样的场景几乎每个雨天都会上演。我从小就丢三落四，忘带伞、忘带课本、忘带饭盒……每一次，都是爸爸从单位请假赶过来。我早已习以为常，甚至有些理所当然。\n\n　　"来，换上雨靴，别湿了脚。"爸爸把伞递给我，自己弯腰帮我整理鞋子。就在我低头接过伞柄的那一瞬间，我看见了他头顶的发旋——那里，不知什么时候，已经生出了一片灰白的发丝，像初冬的第一层薄霜，悄无声息地覆盖了原本乌黑的头发。\n\n　　我的手僵在半空中。\n\n　　爸爸今年才四十三岁。在我的印象里，他一直是那个精力充沛、无所不能的男人——能单手把我举过头顶，能修好家里所有坏掉的电器，能在暴雨中骑二十分钟电动车只为给我送一把伞。可是，什么时候开始，他的背不再那么挺直了？什么时候开始，他上楼梯会喘粗气了？什么时候开始，他的鬓角爬满了白发，而我竟然一次都没有注意到？\n\n　　"发什么呆呢？走吧，回家给你煮碗热面。"爸爸抬起头，笑着催促我。他的眼角有了细细的皱纹，但笑容还是那么温暖，像小时候他把我扛在肩头看烟花时一样温暖。\n\n　　那一刻，我的鼻子猛地一酸。我突然意识到，这些年来，我一直在理所当然地接受着他的付出，却从未想过他也会累，也会老，也需要被关心。我总觉得自己还是个孩子，可以肆无忌惮地依赖他。但那一片白发告诉我：时间不会等人，父亲也不会永远年轻。\n\n　　我接过伞，第一次主动把伞倾向他那一边。爸爸愣了一下，然后笑了："哟，什么时候学会照顾老爸了？"\n\n　　我没有回答，只是走得更靠近他一些。雨还在下，但我觉得那个傍晚的雨声格外温柔。脚下的积水溅起小小的水花，每一朵都映着路灯昏黄的光。\n\n　　从那以后，我开始留意很多以前忽略的事情：妈妈切菜时手上的创可贴，奶奶缝衣服时越凑越近的老花眼，爸爸揉腰时不经意的皱眉。原来，长大不是生日蛋糕上多了一根蜡烛，而是你终于学会了把目光从自己身上移开，看见身边那些一直在默默爱你的人。\n\n　　那个雨天，我没带伞，却带回了一份迟来的懂事。那一刻，我长大了。',
          fullTextEn: '　　The rain started before the dismissal bell rang. Fat raindrops pelted the classroom windows with a staccato clatter. I stood at the end of the corridor, gazing at the grey sky, feeling irritated — of all days, I had forgotten my umbrella.\n\n　　"Forgot your umbrella again?" My deskmate Xiao Jie walked past with his umbrella open. "Your dad will definitely come for you again."\n\n　　I said nothing, just stared toward the school gate. Sure enough, in less than ten minutes, a familiar figure appeared through the curtain of rain. It was Dad. He wore that grey jacket washed almost white, one hand holding an umbrella, the other carrying my rain boots, jogging across the puddle-covered playground.\n\n　　To be honest, this scene played out on almost every rainy day. I had been scatterbrained since childhood — forgetting my umbrella, my textbook, my lunchbox. Every time, it was Dad who took leave from work and rushed over. I had long grown accustomed to it, even taken it for granted.\n\n　　"Here, put on the rain boots so your feet don\'t get wet." Dad handed me the umbrella and bent down to help me with the shoes. At the very instant I lowered my head to take the umbrella handle, I saw the crown of his head — there, at some point I couldn\'t name, a patch of grey-white hair had appeared, like the first thin frost of early winter, silently covering what had once been jet-black hair.\n\n　　My hand froze in midair.\n\n　　Dad was only forty-three. In my mind, he had always been that energetic, omnipotent man — able to lift me overhead with one hand, able to fix every broken appliance in the house, able to ride his electric scooter through a downpour for twenty minutes just to deliver an umbrella. But when did his back stop being so straight? When did he start panting going up stairs? When did grey hair creep across his temples while I never noticed even once?\n\n　　"What are you spacing out about? Let\'s go, I\'ll cook you a bowl of hot noodles at home." Dad looked up, smiling and urging me on. Fine wrinkles had appeared at the corners of his eyes, but his smile was still as warm as when he carried me on his shoulders to watch fireworks as a child.\n\n　　In that moment, my nose stung fiercely. I suddenly realized that all these years, I had been taking his devotion for granted, never considering that he too could be tired, could age, could need care. I always thought I was still a child who could depend on him without restraint. But that patch of grey hair told me: time waits for no one, and fathers don\'t stay young forever.\n\n　　I took the umbrella and, for the first time, tilted it toward his side. Dad paused for a moment, then smiled: "Well, when did you learn to look after your old man?"\n\n　　I didn\'t answer, just walked a little closer to him. The rain kept falling, but that evening\'s rain sounded extraordinarily gentle. Puddles at our feet splashed into tiny blossoms, each reflecting the dim glow of the streetlamps.\n\n　　From that day on, I began noticing things I had overlooked before: the band-aid on Mom\'s hand when she chopped vegetables, Grandma\'s reading glasses sliding ever closer as she sewed, Dad\'s unconscious grimace when he rubbed his lower back. It turns out that growing up isn\'t another candle on the birthday cake — it\'s finally learning to shift your gaze from yourself and see the people who have been silently loving you all along.\n\n　　That rainy day, I forgot my umbrella but brought home a belated sense of maturity. In that moment, I grew up.',
          highlights: [
            { text: '像初冬的第一层薄霜，悄无声息地覆盖了原本乌黑的头发', textEn: 'Like the first thin frost of early winter, silently covering what had once been jet-black hair', why: '比喻精妙，将白发的出现写得既具象又富有诗意，触动读者', whyEn: 'Frost settling on black hair — ageing rewritten as a seasonal change, inevitable yet shocking when first noticed' },
            { text: '什么时候开始……而我竟然一次都没有注意到', textEn: 'When did it begin… and I had never noticed even once', why: '三个"什么时候开始"排比追问，心理描写层层深入', whyEn: 'Three unanswerable "when" questions — each one a confession of obliviousness, each deeper than the last' },
            { text: '长大不是生日蛋糕上多了一根蜡烛，而是你终于学会了把目光从自己身上移开', textEn: 'Growing up isn\'t another candle on the birthday cake — it\'s finally learning to shift your gaze from yourself and see others', why: '议论升华精准有力，对"长大"的定义独到', whyEn: 'Candles versus gaze-shifting — a concrete/abstract contrast that redefines maturity as outward attention rather than accumulated years' }
          ],
          sections: [
            { type: '起', fn: '场景代入', fnEn: 'Scene immersion', detail: '雨天放学，父亲送伞的日常场景', detailEn: 'Rainy after-school scene, father delivering umbrella' },
            { type: '承', fn: '习以为常', fnEn: 'Taking for granted', detail: '回忆从小到大父亲的默默付出', detailEn: 'Recalling father\'s silent devotion over the years' },
            { type: '转', fn: '发现白发', fnEn: 'Discovering grey hair', detail: '接伞时看见父亲头顶白发，内心震动', detailEn: 'Seeing father\'s grey hair when taking umbrella, inner shock' },
            { type: '合', fn: '感悟成长', fnEn: 'Growth insight', detail: '理解长大的真正含义，首尾呼应', detailEn: 'Understanding the true meaning of growing up, circular closure' }
          ]
        },
        {
          title: '那一刻，我长大了',
          titleEn: 'In That Moment, I Grew Up',
          score: 37,
          maxScore: 40,
          structure: 'diJinShi',
          techniques: ['duiBi', 'jiaXuJiaYi', 'xinLiMiaoXie', 'yiXiaoJianDa'],
          techniqueMarks: [
            { para: 0, text: '心里涌上一股说不清的情绪', technique: '心理模糊描写', techniqueEn: 'Ambiguous Emotion', effect: '模糊的情绪比清晰的定义更真实', effectEn: 'An unnamed emotion — refusing to label it makes the feeling more honest than any adjective could' },
            { para: 1, text: '像一个被遗忘的旁观者', technique: '比喻', techniqueEn: 'Simile', effect: '旁观者定位写出孤立感', effectEn: 'A forgotten bystander in a room of joy — isolation measured by contrast with surrounding happiness' },
            { para: 2, text: '没有人再关心我期中考试进步了十五名', technique: '对比细节', techniqueEn: 'Contrast Detail', effect: '具体数字强化被忽略的委屈', effectEn: 'Fifteen ranks of improvement invisible — the precise number sharpens the sting of being overlooked' },
            { para: 3, text: '像一只失去领地的小兽，用虚张声势来掩饰脆弱', technique: '自省比喻', techniqueEn: 'Self-Diagnostic Simile', effect: '以旁观视角审视自己的幼稚', effectEn: 'The narrator stepping outside to observe their own animal response — self-awareness as the first step toward growth' },
            { para: 4, text: '心不甘情不愿地坐在婴儿床边，翻着手机', technique: '动作心理', techniqueEn: 'Action-as-Psychology', effect: '翻手机的动作写出不情愿', effectEn: 'Phone-scrolling beside a crib — one posture that captures reluctance, boredom, and unreadiness simultaneously' },
            { para: 5, text: '来不及思考，我扔掉手机，一把伸手将他捞了回来', technique: '本能反应', techniqueEn: 'Instinctive Action', effect: '本能动作比语言更能证明爱', effectEn: 'Phone thrown, baby caught — instinct bypasses resentment, revealing a love the conscious mind hadn\'t yet acknowledged' },
            { para: 5, text: '没事没事，哥哥在呢', technique: '口语安慰', techniqueEn: 'Spontaneous Comforting', effect: '第一次自称"哥哥"意义深远', effectEn: 'The first time "big brother" leaves his lips — the role claimed not through ceremony but through crisis' },
            { para: 6, text: '那只手那么小，小到我的一根手指就能填满他整个掌心', technique: '触觉特写', techniqueEn: 'Tactile Close-Up', effect: '手的大小对比写出守护之情', effectEn: 'Finger-filling-a-palm — the size gap becomes a silent promise of protection' },
            { para: 7, text: '那个笑容毫无防备、毫无保留', technique: '表情描写', techniqueEn: 'Expression Detail', effect: '婴儿的信任彻底瓦解嫉妒', effectEn: 'A baby\'s utterly unguarded grin — trust so total it demolishes every wall the narrator has built' },
            { para: 8, text: '心里多了一份叫做"责任"的重量', technique: '议论点题', techniqueEn: 'Thematic Reflection', effect: '抽象"责任"被赋予"重量"的实感', effectEn: 'Responsibility given physical weight — the abstract concept made as tangible as a baby in one\'s arms' }
          ],
          approach: '以弟弟出生后"我"从嫉妒到产生保护本能的心理变化为主线，通过对比手法和以小见大的技巧展现成长蜕变。',
          approachEn: 'Traces the narrator\'s psychological shift from jealousy to protective instinct after a baby brother is born, using contrast and small-detail-big-theme technique to show the transformation of growing up.',
          architecture: '第一层：弟弟出生前的失落和嫉妒；第二层：弟弟出生后家庭重心转移的不适；第三层：一次意外中本能地保护弟弟，瞬间理解了"哥哥"的含义。递进深化成长主题。',
          architectureEn: 'Layer 1: Loss and jealousy before brother\'s birth. Layer 2: Discomfort as family attention shifts. Layer 3: Instinctively protecting brother during an accident, instantly understanding what "big brother" means. Progressive deepening of the growth theme.',
          logic: '从"排斥"到"接受"再到"守护"，三个阶段展现心理成长的递进逻辑。',
          logicEn: 'From "rejection" to "acceptance" to "protection" — three stages showing the progressive logic of psychological growth.',
          skills: ['前后对比突出心理转变', '夹叙夹议自然不生硬', '心理描写细腻真实', '以小见大揭示成长主题'],
          skillsEn: ['Before/after contrast highlights psychological shift', 'Narration interwoven with reflection feels natural', 'Nuanced and authentic psychological description', 'Small detail reveals the big growth theme'],
          fullText: '　　妈妈怀孕的消息传来时，我正在做初二的数学作业。她笑盈盈地走进我的房间："你要当哥哥了。"\n\n　　我放下笔，心里涌上一股说不清的情绪。不是开心，不是期待，而是一种隐隐的失落——我将不再是这个家唯一的孩子了。\n\n　　弟弟出生的那天，全家人围在产房外，每个人脸上都洋溢着喜悦。爷爷奶奶笑得合不拢嘴，爸爸激动得来回踱步。只有我，靠在走廊的墙上，觉得自己像一个被遗忘的旁观者。\n\n　　接下来的日子印证了我的担忧。妈妈整天抱着弟弟，连看我作业的时间都没有了。爸爸下班回来第一件事是逗弟弟，而不是像以前那样问我"今天学了什么"。亲戚们来家里，话题永远是"小宝宝真可爱"，没有人再关心我期中考试进步了十五名。\n\n　　我开始故意关上房门，把音乐声开得很大。我在日记本里写："我讨厌这个小东西，它抢走了原本属于我的一切。"现在想来，那时的我多么幼稚，像一只失去领地的小兽，用虚张声势来掩饰脆弱。\n\n　　转变发生在弟弟三个月大的一个午后。那天妈妈出门买菜，让我帮忙看一会儿弟弟。我心不甘情不愿地坐在婴儿床边，翻着手机。弟弟在床上咿咿呀呀地动着小手，我漫不经心地瞥了他一眼。\n\n　　突然，弟弟翻了个身，整个小身子滚向了婴儿床的边缘。我的心猛地一缩——来不及思考，我扔掉手机，一把伸手将他捞了回来。他被我突然的动作吓了一跳，小脸皱成一团，正要放声大哭。我慌忙把他抱在怀里，学着妈妈的样子轻轻拍他的后背："没事没事，哥哥在呢。"\n\n　　他的哭声渐渐小了，小手攥住了我的食指，攥得紧紧的。那只手那么小，小到我的一根手指就能填满他整个掌心。可就是这只小小的手，攥住的不只是我的手指，还攥住了我心里某个柔软的角落。\n\n　　我低头看着他。他已经不哭了，黑葡萄似的眼睛望着我，嘴角还挂着一颗泪珠，却咧开嘴笑了。那个笑容毫无防备、毫无保留，像是在说："哥哥，我信你。"\n\n　　那一刻，我的眼眶湿了。所有的嫉妒、委屈和不甘，在那个小小的笑容面前轰然瓦解。我突然明白，长大不是变得更强硬，而是心里多了一个想要守护的人。当你不再只想着自己，当你愿意为另一个生命挡在前面，你就真的长大了。\n\n　　妈妈回来时，看见我抱着弟弟坐在阳台上，阳光洒在我们身上。她靠在门框上，笑着说："我家大儿子，真的长大了。"\n\n　　是的，那一刻，我长大了。不是因为年龄，而是因为心里多了一份叫做"责任"的重量。',
          fullTextEn: '　　The news of Mom\'s pregnancy came while I was working on my eighth-grade math homework. She walked into my room with a beaming smile: "You\'re going to be a big brother."\n\n　　I set down my pen as an indescribable emotion welled up — not happiness, not anticipation, but a vague sense of loss. I would no longer be the only child in this family.\n\n　　The day my brother was born, the whole family gathered outside the delivery room, every face glowing with joy. Grandpa and Grandma couldn\'t stop grinning, and Dad paced back and forth with excitement. Only I leaned against the corridor wall, feeling like a forgotten bystander.\n\n　　The days that followed confirmed my fears. Mom held the baby all day, with no time even to check my homework. The first thing Dad did after work was play with the baby, instead of asking me "What did you learn today?" as before. When relatives visited, the conversation was always "The baby is so adorable" — no one cared that I had improved fifteen rankings on the midterm exam.\n\n　　I began deliberately shutting my door and turning the music up loud. In my diary I wrote: "I hate this little thing — it has stolen everything that belonged to me." Looking back, how childish I was then, like a small animal that had lost its territory, using bluster to mask vulnerability.\n\n　　The change happened one afternoon when my brother was three months old. Mom had gone out for groceries and asked me to watch him briefly. Reluctantly, I sat by the crib scrolling through my phone. The baby babbled and waved his tiny hands. I glanced at him absently.\n\n　　Suddenly, he rolled over, his small body tumbling toward the edge of the crib. My heart clenched — without thinking, I threw my phone aside and scooped him back with one hand. Startled by my sudden movement, his little face crumpled and he was about to wail. Panicking, I cradled him and patted his back the way Mom did: "It\'s okay, it\'s okay — big brother is here."\n\n　　His crying gradually subsided. His tiny hand gripped my index finger, gripped it tight. That hand was so small that my single finger filled his entire palm. Yet that tiny hand clutched not just my finger but some soft corner of my heart.\n\n　　I looked down at him. He had stopped crying. His eyes, black as grapes, gazed up at me; a single tear still clung to the corner of his mouth, yet he broke into a grin. That smile was utterly unguarded, utterly unreserved, as if to say: "Big brother, I trust you."\n\n　　In that moment, my eyes grew moist. All the jealousy, grievance, and resentment crumbled before that tiny smile. I suddenly understood: growing up isn\'t about becoming tougher — it\'s about having one more person in your heart that you want to protect. When you stop thinking only of yourself, when you\'re willing to stand in front of another life as a shield, you have truly grown up.\n\n　　When Mom came home, she found me holding my brother on the balcony, sunlight spilling over us. She leaned against the doorframe and smiled: "My eldest son has really grown up."\n\n　　Yes — in that moment, I grew up. Not because of age, but because my heart gained a new weight called "responsibility."',
          highlights: [
            { text: '像一只失去领地的小兽，用虚张声势来掩饰脆弱', textEn: 'Like a small animal that had lost its territory, using bluster to mask vulnerability', why: '比喻精准刻画青少年嫉妒心理，自省而不矫情', whyEn: 'A territorial-animal metaphor that is brutally self-aware — the narrator diagnoses their own immaturity without self-pity' },
            { text: '那只手那么小，小到我的一根手指就能填满他整个掌心', textEn: 'That hand was so small that a single finger of mine filled his entire palm', why: '细节描写触动人心，以小见大体现守护之情', whyEn: 'One finger filling one tiny palm — the size disparity becomes a physical contract of protection' },
            { text: '长大不是变得更强硬，而是心里多了一个想要守护的人', textEn: 'Growing up isn\'t about becoming tougher — it\'s about having one more person in your heart that you want to protect', why: '对"长大"的定义独到深刻，议论升华自然', whyEn: 'Toughness dismissed, tenderness installed — the definition reframes maturity as the capacity to shelter another life' }
          ],
          sections: [
            { type: '第一层', fn: '嫉妒失落', fnEn: 'Jealousy and loss', detail: '弟弟出生前后的心理落差', detailEn: 'Psychological gap before and after brother\'s birth' },
            { type: '第二层', fn: '冲突加剧', fnEn: 'Conflict escalation', detail: '家庭关注转移，自我封闭', detailEn: 'Family attention shifts, self-isolation' },
            { type: '第三层', fn: '转折觉醒', fnEn: 'Turning-point awakening', detail: '本能保护弟弟，理解责任', detailEn: 'Instinctively protecting brother, understanding responsibility' },
            { type: '结尾', fn: '升华点题', fnEn: 'Elevation and closure', detail: '长大是心里多了想守护的人', detailEn: 'Growing up is having someone to protect' }
          ]
        },
        {
          title: '那一刻，我长大了',
          titleEn: 'In That Moment, I Grew Up',
          score: 36,
          maxScore: 40,
          structure: 'daoXuShi',
          techniques: ['daoXu', 'huanJingChenTuo', 'duiHuaQuDong', 'xiJieMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '双手接过那座沉甸甸的奖杯', technique: '倒叙开头', techniqueEn: 'Flashback Opening', effect: '以结局制造悬念，引导好奇', effectEn: 'Starting with the trophy then rewinding — the reader knows the destination but craves the journey' },
            { para: 2, text: '故作镇定地说', technique: '心理暗示', techniqueEn: 'Psychological Tell', effect: '"故作"揭示内心的紧张', effectEn: '"Feigned composure" — two words that instantly expose the gap between the narrator\'s words and feelings' },
            { para: 2, text: '手心全是汗', technique: '生理反应', techniqueEn: 'Physiological Detail', effect: '身体反应比语言更诚实', effectEn: 'Sweaty palms — the body confessing the fear the mouth denies' },
            { para: 3, text: '没有回头。不是不想回头，是怕一回头就不敢走了', technique: '短句心理描写', techniqueEn: 'Staccato Inner Voice', effect: '紧凑节奏写出犹豫与决心', effectEn: 'Three sentences, each shorter and more honest — the rhythm of someone talking themselves into courage' },
            { para: 4, text: '心里像揣了一只兔子', technique: '比喻', techniqueEn: 'Simile', effect: '紧张感具象化', effectEn: 'A rabbit in the chest — folk-idiom imagery that every Chinese reader recognises as anxiety incarnate' },
            { para: 5, text: '行李箱被架在了头顶的行李架上，我怎么也够不到', technique: '困境细节', techniqueEn: 'Predicament Detail', effect: '独自出行的真实困难', effectEn: 'Can\'t reach the overhead rack — a small physical impossibility that symbolises the larger challenge of independence' },
            { para: 6, text: '第一次自己坐火车吧？我女儿第一次出门的时候也是这样', technique: '陌生人对话', techniqueEn: 'Stranger Dialogue', effect: '善意消解恐惧', effectEn: 'A stranger\'s "my daughter was the same" normalises the fear and dissolves isolation in two sentences' },
            { para: 7, text: '独自看窗外飞驰而过的风景，独自决定什么时候吃东西', technique: '排比', techniqueEn: 'Parallelism', effect: '三个"独自"写出独立的滋味', effectEn: 'Three "on my own" clauses — each one savouring a freedom the narrator has never tasted before' },
            { para: 8, text: '夕阳正好铺洒在广场上，金灿灿的光映得整座城市温暖而陌生', technique: '环境象征', techniqueEn: 'Symbolic Landscape', effect: '夕阳广场象征新世界的欢迎', effectEn: 'Golden sunset on an unfamiliar plaza — the city greeting the traveller with warmth despite its strangeness' },
            { para: 9, text: '传来妈妈带着鼻音的声音', technique: '听觉细节', techniqueEn: 'Auditory Detail', effect: '鼻音暗示妈妈一直在等和担心', effectEn: 'A sniffle on the line — two seconds of silence and a nasal voice reveal hours of waiting and worrying' }
          ],
          approach: '用倒叙手法，从比赛获奖的结果写起，回溯第一次独自乘火车参赛的经历，通过环境描写和对话推动情节，展现从依赖到独立的成长。',
          approachEn: 'Uses flashback, beginning with the competition award, then retracing the first solo train journey to the competition. Environmental description and dialogue drive the plot, showing growth from dependence to independence.',
          architecture: '倒叙开头：手握奖杯的"我"回想起那趟独自出发的列车；回溯：出发前的忐忑、车上的困难、陌生人的帮助；高潮：独自到达目的地的成就感；结尾：回到当下，理解独立即是长大。',
          architectureEn: 'Flashback opening: The narrator holding a trophy recalls that solo train journey. Retracing: Anxiety before departure, difficulties on the train, help from a stranger. Climax: Sense of achievement arriving alone. Ending: Return to present, understanding that independence is growing up.',
          logic: '从"结果"回到"过程"，再回到"结果"，倒叙结构让读者带着好奇心跟随叙事，最终理解"那一刻"的含义。',
          logicEn: 'From "result" back to "process" and back to "result" — the flashback structure engages readers\' curiosity throughout, ultimately revealing what "that moment" means.',
          skills: ['倒叙制造悬念，吸引阅读', '环境描写衬托心理变化', '对话自然推动情节', '细节描写增强真实感'],
          skillsEn: ['Flashback creates suspense and engagement', 'Environmental description mirrors psychological changes', 'Natural dialogue advances the plot', 'Vivid details enhance authenticity'],
          fullText: '　　当主持人念到我的名字，我走上领奖台，双手接过那座沉甸甸的奖杯时，掌声如潮水般涌来。但我的脑海里浮现的，不是备赛的日日夜夜，而是一个月前，那趟独自驶向昆明的绿皮火车。\n\n　　那是我人生中第一次独自出远门。\n\n　　"妈，我自己能行。"出发前一晚，我故作镇定地说。其实，当妈妈把车票、身份证和一沓零钱塞进我书包的时候，我的手心全是汗。十四岁，从小城到省城，八个小时的火车，独自一人——光是想想，膝盖就有些发软。\n\n　　清晨五点半，天还蒙蒙亮。妈妈把我送到火车站门口，欲言又止了好几次，最后只说了一句："到了给妈打个电话。"我点点头，拖着行李箱走进候车大厅，没有回头。不是不想回头，是怕一回头就不敢走了。\n\n　　火车缓缓驶出站台，窗外的城市渐渐远去，变成一片片绿色的田野。我紧紧攥着车票，坐在靠窗的位置，看着陌生的乘客来来往往，心里像揣了一只兔子。\n\n　　中午时分，列车员推着餐车经过。我想买一份盒饭，却发现妈妈给我准备的零钱被我塞进了行李箱的最底层，而行李箱被架在了头顶的行李架上，我怎么也够不到。\n\n　　"小同学，需要帮忙吗？"对面座位的一位阿姨看出了我的窘迫。她帮我取下行李箱，还递给我一盒饼干："第一次自己坐火车吧？我女儿第一次出门的时候也是这样，别紧张。"\n\n　　我接过饼干，小声说了句谢谢。那一刻我忽然觉得，世界虽然很大，但并不是所有的陌生都令人害怕。\n\n　　火车穿过隧道，穿过桥梁，穿过一个又一个小站。窗外的风景从平原变成了山地，从阴天变成了晴天。我渐渐放松下来，甚至开始享受这段旅程——独自看窗外飞驰而过的风景，独自决定什么时候吃东西、什么时候休息，独自面对未知的一切。这种感觉，新鲜而微妙。\n\n　　傍晚六点十二分，列车准时到达昆明站。我拖着行李箱走出出站口，夕阳正好铺洒在广场上，金灿灿的光映得整座城市温暖而陌生。我站在广场中央，深深吸了一口气，然后掏出手机，拨通了妈妈的电话。\n\n　　"妈，我到了。"\n\n　　电话那头沉默了两秒，然后传来妈妈带着鼻音的声音："好，妈知道了。我儿子长大了。"\n\n　　那一刻，站在异乡的夕阳下，我第一次清晰地感受到"长大"这两个字的分量。长大，就是学会一个人面对这个世界，不是不害怕，而是害怕了还能往前走。\n\n　　现在，奖杯握在手里，沉甸甸的。但我知道，比奖杯更重的，是那趟列车教会我的勇气。',
          fullTextEn: '　　When the host called my name and I walked onto the podium, receiving that heavy trophy with both hands, applause surged like a tide. But what filled my mind was not the days and nights of preparation — it was that green-skinned train bound for Kunming, one month ago.\n\n　　That was the first time in my life I had traveled far alone.\n\n　　"Mom, I can handle it myself." I said with feigned composure the night before departure. In truth, when Mom stuffed the ticket, ID card, and a wad of cash into my backpack, my palms were drenched with sweat. Fourteen years old, from a small town to the provincial capital, eight hours by train, all alone — just thinking about it made my knees go weak.\n\n　　At half past five in the morning, the sky was still a pale grey. Mom walked me to the station entrance, started to speak several times but stopped, and finally said just one thing: "Call me when you arrive." I nodded, dragged my suitcase into the waiting hall, and didn\'t look back. Not because I didn\'t want to — but because I was afraid that if I turned around, I wouldn\'t dare to go.\n\n　　The train pulled slowly out of the platform. The city outside the window receded and gave way to stretches of green fields. I clutched my ticket tightly, sitting by the window, watching unfamiliar passengers come and go, my heart pounding like a caged rabbit.\n\n　　Around noon, the attendant pushed the meal cart through. I wanted to buy a boxed lunch but realized that the cash Mom had prepared was stuffed at the very bottom of my suitcase, which sat on the overhead rack far beyond my reach.\n\n　　"Need some help, young student?" A woman in the seat opposite noticed my predicament. She helped me get the suitcase down and handed me a box of biscuits. "First time riding the train alone? My daughter was just the same on her first trip — don\'t be nervous."\n\n　　I took the biscuits and said a quiet thank-you. In that moment, I suddenly felt that although the world is vast, not all of its strangeness is frightening.\n\n　　The train passed through tunnels, over bridges, through one small station after another. The scenery outside shifted from plains to mountains, from overcast skies to sunshine. I gradually relaxed and even began to enjoy the journey — watching landscapes flash past the window on my own, deciding for myself when to eat and when to rest, facing the unknown entirely alone. The feeling was novel and subtle.\n\n　　At 6:12 in the evening, the train arrived at Kunming station on schedule. I dragged my suitcase out through the exit. The setting sun spilled across the plaza, its golden light making the entire city look warm and unfamiliar. I stood in the middle of the square, took a deep breath, then pulled out my phone and dialed Mom\'s number.\n\n　　"Mom, I\'m here."\n\n　　Two seconds of silence on the other end, then Mom\'s voice came through with a slight sniffle: "Good. Mom knows. My son has grown up."\n\n　　In that moment, standing beneath a sunset in a strange city, I felt the weight of the words "grown up" with perfect clarity for the first time. Growing up means learning to face this world on your own — not being unafraid, but walking forward even when you are.\n\n　　Now the trophy sits heavy in my hands. But I know that heavier than the trophy is the courage that train journey taught me.',
          highlights: [
            { text: '没有回头。不是不想回头，是怕一回头就不敢走了', textEn: 'I didn\'t look back. Not because I didn\'t want to — but because I was afraid that turning around would mean never leaving', why: '短句节奏紧凑，心理描写真实动人', whyEn: 'Three staccato sentences — each shorter, each more honest — laying bare the fear that hides inside bravery' },
            { text: '世界虽然很大，但并不是所有的陌生都令人害怕', textEn: 'The world is vast, but not all its strangeness is frightening', why: '感悟自然嵌入叙事，不说教', whyEn: 'A biscuit-box kindness rewrites the narrator\'s map of the world — strangeness redefined as potential warmth' },
            { text: '长大，就是学会一个人面对这个世界，不是不害怕，而是害怕了还能往前走', textEn: 'Growing up is learning to face this world alone — not being unafraid, but walking forward even when you are', why: '对"长大"的定义精辟有力，是全文的点睛之笔', whyEn: 'The defining line — courage as action despite fear, not the absence of it — distilled from eight hours on a train' }
          ],
          sections: [
            { type: '倒叙开头', fn: '悬念引入', fnEn: 'Suspenseful opening', detail: '领奖台上回忆那趟火车', detailEn: 'On the podium, recalling that train journey' },
            { type: '回溯', fn: '出发与旅途', fnEn: 'Departure and journey', detail: '独自出门的忐忑和成长', detailEn: 'Anxiety and growth of traveling alone' },
            { type: '高潮', fn: '到达昆明', fnEn: 'Arriving in Kunming', detail: '夕阳下打电话给妈妈', detailEn: 'Calling Mom under the sunset' },
            { type: '结尾', fn: '回到当下', fnEn: 'Return to present', detail: '奖杯不如勇气重', detailEn: 'Courage weighs more than the trophy' }
          ]
        },
        {
          title: '那一刻，我长大了',
          titleEn: 'In That Moment, I Grew Up',
          score: 35,
          maxScore: 40,
          structure: 'shiJianXian',
          techniques: ['xiJieMiaoXie', 'duiBi', 'jieWuShuQing', 'xinLiMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '两个西红柿、三个鸡蛋、半把挂面、一棵蔫了的小白菜', technique: '清单列举', techniqueEn: 'Inventory List', effect: '食材清单暗示新手的无措', effectEn: 'A fridge inventory of exactly four items — the specificity reveals both scarcity and total cluelessness' },
            { para: 1, text: '额头烫得像火炉，嗓子哑得说不出话', technique: '比喻', techniqueEn: 'Simile', effect: '妈妈病情严重写出紧迫感', effectEn: 'Forehead hot as a furnace — illness rendered as urgency that forces the narrator to act' },
            { para: 2, text: '那碗面，从我记事起就存在于每一个生病的日子', technique: '回忆嵌套', techniqueEn: 'Memory Embedding', effect: '面条被赋予了情感历史', effectEn: 'Noodles given a biographical timeline — the dish carries years of maternal care before a single ingredient is touched' },
            { para: 3, text: '有的薄如纸片，有的厚如砖头', technique: '夸张对比', techniqueEn: 'Comic Contrast', effect: '幽默展现刀工之差', effectEn: 'Paper vs. brick — slapstick contrast that makes the reader laugh and root for the fumbling chef' },
            { para: 3, text: '第一个打到碗外面去了一半', technique: '细节叙事', techniqueEn: 'Clumsy Detail', effect: '打蛋失败增强真实感', effectEn: 'Half the egg outside the bowl — a detail so specific it could only come from lived experience' },
            { para: 4, text: '"滋啦"一声，油星四溅，烫了我的手背', technique: '拟声+触觉', techniqueEn: 'Onomatopoeia + Touch', effect: '声音和疼痛让厨房场景立体', effectEn: 'Sizzle, splatter, burn — three sensory hits in one sentence that put the reader at the stove' },
            { para: 5, text: '而我呢，厨房已经像被炸过一样', technique: '夸张对比', techniqueEn: 'Hyperbolic Contrast', effect: '与妈妈的从容形成鲜明反差', effectEn: 'A bombed kitchen versus Mom\'s spotless routine — the gap measures the care the narrator never noticed' },
            { para: 8, text: '紧张地看着她的表情，像等待考试成绩一样忐忑', technique: '比喻', techniqueEn: 'Simile', effect: '考试比喻贴近学生生活', effectEn: 'Awaiting a verdict on noodles like awaiting exam results — a student-specific simile that nails the anxiety' },
            { para: 9, text: '两滴眼泪滑进了碗里', technique: '细节特写', techniqueEn: 'Close-Up Detail', effect: '泪入碗中的画面动人', effectEn: 'Two tears sliding into the bowl — the image fuses love, surprise, and noodles into one unforgettable frame' },
            { para: 10, text: '笑得像哭，又像是开了花', technique: '矛盾修辞', techniqueEn: 'Oxymoron', effect: '三重矛盾写尽复杂情感', effectEn: 'Crying, smiling, blooming — three contradictory states coexisting in one mother\'s face, capturing emotions words alone cannot' }
          ],
          approach: '以第一次为生病的妈妈做饭为时间线，通过笨拙的烹饪过程和内心独白，展现从"被照顾"到"照顾别人"的角色转变。',
          approachEn: 'Follows the timeline of cooking for a sick mother for the first time. Through the clumsy cooking process and inner monologue, it shows the role reversal from "being cared for" to "caring for others."',
          architecture: '发现妈妈生病→决定做饭→笨拙的烹饪过程→端碗给妈妈→妈妈的眼泪→感悟长大。',
          architectureEn: 'Discovering Mom is sick → Deciding to cook → Clumsy cooking process → Bringing the bowl to Mom → Mom\'s tears → Realizing growth.',
          logic: '沿时间线推进，从"发现问题"到"尝试解决"再到"获得感悟"，线性叙事清晰流畅。',
          logicEn: 'Advancing along the timeline from "discovering the problem" to "attempting a solution" to "gaining insight" — clear and smooth linear narrative.',
          skills: ['细节描写厨房场景真实有趣', '前后对比突出角色转换', '借物抒情（那碗面）升华情感', '心理描写展现内心成长'],
          skillsEn: ['Vivid and amusing kitchen scene details', 'Before/after contrast highlights role reversal', 'Object symbolism (the bowl of noodles) elevates emotion', 'Inner thoughts reveal psychological growth'],
          fullText: '　　冰箱门打开的一瞬间，冷气扑面而来。我站在厨房中央，手足无措地看着里面的食材——两个西红柿、三个鸡蛋、半把挂面、一棵蔫了的小白菜。这是我十四年来第一次认真打量冰箱里的东西，以前这些事，全是妈妈操心。\n\n　　今天妈妈病了。早晨起来她的额头烫得像火炉，嗓子哑得说不出话。爸爸出差在外地，奶奶在乡下。家里只剩我一个能动弹的人。\n\n　　"要不叫外卖吧……"我掏出手机，又默默放了回去。妈妈每次生病，最想喝的就是一碗热汤面。那碗面，从我记事起就存在于每一个生病的日子、每一个寒冷的冬夜。我想，今天该轮到我来煮了。\n\n　　打开燃气灶的时候，我的手微微发抖。蓝色的火苗跳跃着，锅里的油开始冒烟了，我还在手忙脚乱地切西红柿。刀工惨不忍睹——西红柿被我切成了大小不一的碎块，有的薄如纸片，有的厚如砖头。鸡蛋就更不用说了，第一个打到碗外面去了一半，第二个连壳都掉进了碗里。\n\n　　油烟呛得我直流眼泪，我手忙脚乱地把西红柿扔进锅里，"滋啦"一声，油星四溅，烫了我的手背。我"嘶"地吸了口凉气，赶紧把鸡蛋液倒进去。锅铲翻来翻去，西红柿和鸡蛋渐渐融在了一起，红黄相间，虽然卖相一般，但香味确实飘了出来。\n\n　　挂面下锅后，我盯着沸腾的水面，忽然想起妈妈煮面的样子——她总是不紧不慢，一边煮一边哼着小曲，顺手把灶台擦得干干净净。而我呢，厨房已经像被炸过一样，灶台上全是水渍和菜叶，地上还有半个碎鸡蛋壳。\n\n　　面煮好了。我把它盛在妈妈最喜欢的那只青花瓷碗里，小心翼翼地端进卧室。\n\n　　妈妈靠在床头，脸色苍白。看到我端着碗走进来，她先是一愣，然后嘴角弯了起来："你做的？"\n\n　　"嗯，西红柿鸡蛋面。可能不太好吃，我第一次做……"我有些心虚。\n\n　　妈妈接过碗，用筷子挑起面条，吹了吹，放进嘴里。我紧张地看着她的表情，像等待考试成绩一样忐忑。\n\n　　"好吃。"妈妈说。然后我看见，两滴眼泪滑进了碗里。\n\n　　"妈，太咸了吗？"我慌了。\n\n　　"不是，"妈妈擦了擦眼角，笑得像哭，又像是开了花，"是我儿子长大了。"\n\n　　那一刻，我站在卧室门口，看着妈妈一口一口地吃着那碗卖相很丑的面条，心里涌起一种从未有过的感觉。那不是骄傲，不是成就感，而是一种柔软的、沉甸甸的东西——我终于从一个只会张嘴等饭的孩子，变成了一个能为妈妈煮一碗面的人。\n\n　　原来长大，就是学会把别人给你的温暖，用自己的方式还回去。哪怕只是一碗简单的面，也盛满了我笨拙却真挚的爱。',
          fullTextEn: '　　The moment I opened the refrigerator, cold air rushed at my face. I stood in the middle of the kitchen, staring helplessly at the ingredients inside — two tomatoes, three eggs, half a bundle of dried noodles, and a wilted head of baby bok choy. This was the first time in my fourteen years that I had seriously examined the contents of the fridge. Before, all of this had been Mom\'s concern.\n\n　　Today Mom was sick. When she woke up that morning, her forehead was burning hot, and her throat was too hoarse to speak. Dad was away on a business trip and Grandma was in the countryside. I was the only able-bodied person left in the house.\n\n　　"Maybe I should just order takeout..." I pulled out my phone, then silently put it back. Whenever Mom was sick, what she wanted most was a bowl of hot soup noodles. That bowl of noodles had existed in every sick day and every cold winter night since I could remember. I thought: today it was my turn to cook it.\n\n　　When I turned on the gas stove, my hands trembled slightly. Blue flames flickered as the oil in the pan started smoking, while I was still fumbling to cut the tomatoes. My knife work was disastrous — the tomatoes were cut into pieces of wildly varying sizes, some thin as paper, others thick as bricks. The eggs were even worse: I cracked the first one and half of it ended up outside the bowl; the second one dropped shell and all into the bowl.\n\n　　Oil smoke made my eyes stream with tears. I frantically tossed the tomatoes into the pan — "sizzle!" — oil splattered everywhere, scalding the back of my hand. I sucked in a sharp breath and hurriedly poured in the egg mixture. Flipping the spatula back and forth, the tomatoes and eggs gradually merged, red and yellow intermingling. The appearance was mediocre at best, but a genuine aroma drifted out.\n\n　　After the noodles went into the boiling water, I stared at the bubbling surface and suddenly recalled how Mom looked when she cooked noodles — always unhurried, humming a little tune, wiping the stovetop spotless along the way. And me? The kitchen looked like a bomb had gone off — water stains and vegetable scraps everywhere on the counter, half an eggshell on the floor.\n\n　　The noodles were done. I ladled them into Mom\'s favorite blue-and-white porcelain bowl and carried it carefully to the bedroom.\n\n　　Mom was propped against the headboard, her face pale. Seeing me walk in carrying the bowl, she froze for a moment, then the corners of her mouth curved upward: "You made this?"\n\n　　"Yeah, tomato and egg noodles. It might not taste great — it\'s my first time..." I said, a bit sheepishly.\n\n　　Mom took the bowl, lifted some noodles with her chopsticks, blew on them, and put them in her mouth. I watched her expression anxiously, as nervous as waiting for exam results.\n\n　　"Delicious," Mom said. Then I saw two teardrops slide into the bowl.\n\n　　"Mom, is it too salty?" I panicked.\n\n　　"No," Mom wiped the corners of her eyes, smiling as if crying, as if blooming, "it\'s that my son has grown up."\n\n　　In that moment, standing in the bedroom doorway watching Mom eat that homely-looking bowl of noodles one bite at a time, an emotion I had never felt before welled up inside me. It wasn\'t pride or a sense of accomplishment, but something soft and weighty — I had finally gone from a child who only knew how to sit and wait for food to a person who could cook a bowl of noodles for his mother.\n\n　　It turns out that growing up is learning to return the warmth others have given you, in your own way. Even if it\'s just a simple bowl of noodles, it brims with my clumsy but sincere love.',
          highlights: [
            { text: '有的薄如纸片，有的厚如砖头', textEn: 'Some slices thin as paper, others thick as bricks', why: '夸张对比幽默生动，拉近读者距离', whyEn: 'Paper-thin beside brick-thick — comic exaggeration that endears the clumsy cook to the reader instantly' },
            { text: '笑得像哭，又像是开了花', textEn: 'Her smile looked like crying, yet also like a flower opening', why: '矛盾修辞精妙刻画妈妈复杂情感', whyEn: 'Crying-smiling-blooming — three impossible overlaps capture the complex joy of a mother surprised by her child\'s care' },
            { text: '原来长大，就是学会把别人给你的温暖，用自己的方式还回去', textEn: 'Growing up, it turns out, is learning to return the warmth others have given you — in your own way', why: '结尾点题，借物（面条）抒情，升华自然', whyEn: 'Warmth as a debt repaid "in your own way" — clumsy noodles count as currency because love doesn\'t require perfection' }
          ],
          sections: [
            { type: '开端', fn: '发现问题', fnEn: 'Discovering the problem', detail: '妈妈生病，家中无人做饭', detailEn: 'Mom is sick, no one to cook at home' },
            { type: '发展', fn: '笨拙烹饪', fnEn: 'Clumsy cooking', detail: '厨房里手忙脚乱的做饭过程', detailEn: 'Fumbling cooking process in the kitchen' },
            { type: '高潮', fn: '妈妈的泪', fnEn: 'Mom\'s tears', detail: '端面给妈妈，她的眼泪', detailEn: 'Bringing noodles to Mom, her tears' },
            { type: '结尾', fn: '感悟点题', fnEn: 'Reflective closure', detail: '长大是学会还回温暖', detailEn: 'Growing up is learning to return warmth' }
          ]
        },
        {
          title: '那一刻，我长大了',
          titleEn: 'In That Moment, I Grew Up',
          score: 36,
          maxScore: 40,
          structure: 'zongFenZong',
          techniques: ['paiBi', 'jiaXuJiaYi', 'xinLiMiaoXie', 'yinYongLunZheng'],
          techniqueMarks: [
            { para: 0, text: '是个子超过了门框上的刻度线？', technique: '排比设问', techniqueEn: 'Rhetorical Sequence', effect: '三个设问逐步深化"长大"的思考', effectEn: 'Three escalating questions — physical height, self-reliance, grades — each dismissed to make room for the real answer' },
            { para: 2, text: '我的初衷并不那么高尚', technique: '坦承', techniqueEn: 'Candid Admission', effect: '自嘲式坦白增强可信度', effectEn: 'Admitting vanity up front earns trust — the reader knows this narrator won\'t lie about the transformation either' },
            { para: 3, text: '我甚至提前想好了鞠躬致谢的角度', technique: '讽刺细节', techniqueEn: 'Ironic Detail', effect: '过度准备暗讽虚荣心', effectEn: 'Pre-planning the bow angle — a merciless self-portrait of performance anxiety mistaken for purpose' },
            { para: 5, text: '穿着一件明显偏大的棉袄，袖口卷了好几圈', technique: '外貌描写', techniqueEn: 'Appearance Detail', effect: '衣服细节暗示家庭困境', effectEn: 'An oversized coat with rolled sleeves — poverty made visible without a single explanatory word' },
            { para: 5, text: '我的梦想就是过年的时候爸爸妈妈能回来。这个梦想……算不算？', technique: '对话冲击', techniqueEn: 'Impact Dialogue', effect: '一个问题瓦解所有准备', effectEn: 'An eight-year-old\'s question dismantles an entire rehearsed speech — real life trumping rhetoric' },
            { para: 6, text: '精心准备的回答词全部卡在了喉咙里', technique: '身体反应', techniqueEn: 'Physical Response', effect: '喉咙卡住写出震撼', effectEn: 'Words stuck in the throat — the body registers truth before the mind can formulate a response' },
            { para: 7, text: '她的眼睛很亮，亮得像两颗星星，但星星下面藏着我读不懂的东西', technique: '比喻', techniqueEn: 'Layered Simile', effect: '明亮与深藏的对比写出复杂情感', effectEn: 'Bright stars with hidden depths — innocence and sorrow sharing the same pair of eyes' },
            { para: 8, text: '蹲下来说："算。这是最珍贵的梦想。"', technique: '动作转折', techniqueEn: 'Gestural Pivot', effect: '蹲下的姿态代替华丽演讲', effectEn: 'Crouching to eye-level replaces every planned rhetorical flourish — posture as the truest speech' },
            { para: 9, text: '我们把世界看错了，反说它欺骗我们', technique: '泰戈尔引用', techniqueEn: 'Tagore Allusion', effect: '哲学引用深化自我反思', effectEn: 'Tagore\'s aphorism reframes the narrator\'s prior vanity as a failure of perception, not of circumstance' },
            { para: 10, text: '不只有"我"，还有"我们"', technique: '代词升华', techniqueEn: 'Pronoun Elevation', effect: '从第一人称到集体人称的意识觉醒', effectEn: 'The shift from "I" to "we" — two letters that carry the entire essay\'s moral weight' }
          ],
          approach: '以一次公益演讲的经历为核心，展现"我"从关注自我到关注他人的视角转变。通过排比手法和引用增强文章的说服力和感染力。',
          approachEn: 'Centers on a public welfare speech experience, showing the narrator\'s shift from self-focus to others-focus. Uses parallelism and quotation to enhance persuasiveness and emotional impact.',
          architecture: '总起：提出"长大"的思考→分述：演讲前只想表现自己→演讲中被听众的故事触动→演讲后视角从"我"转向"我们"→总结：长大是视角的扩大。',
          architectureEn: 'General opening: Raising the question of "growing up" → Specific: Before the speech, only wanting to show off → During the speech, moved by the audience\'s stories → After the speech, perspective shifts from "I" to "we" → Summary: Growing up is expanding one\'s perspective.',
          logic: '由"自我中心"到"看见他人"再到"关怀世界"，视角逐层扩大的逻辑线索。',
          logicEn: 'From "self-centered" to "seeing others" to "caring about the world" — a logical thread of progressively expanding perspective.',
          skills: ['排比增强气势和节奏感', '夹叙夹议深化主题', '心理变化有层次', '引用名言增添深度'],
          skillsEn: ['Parallelism enhances momentum and rhythm', 'Narration interwoven with reflection deepens theme', 'Layered psychological change', 'Quotations add depth'],
          fullText: '　　什么时候算长大？是个子超过了门框上的刻度线？是学会了独自乘公交车上学？还是第一次拿到年级前十的成绩单？\n\n　　在很长一段时间里，我以为长大就是不断地证明"我能行"。直到那个冬天的下午，在社区活动中心的一场公益演讲，彻底改变了我对"长大"的理解。\n\n　　那是学校组织的"关爱留守儿童"主题演讲活动。作为学校演讲队的成员，我自告奋勇报了名。说实话，我的初衷并不那么高尚——我想的是，这是一个展示自己的好机会，可以在全校师生面前证明我的口才。\n\n　　备稿的时候，我精心准备了华丽的排比句和感人的修辞，反复练习了手势和语调。我对着镜子演练了无数遍，确保每一个停顿都恰到好处，每一次眼神交流都充满感染力。我甚至提前想好了鞠躬致谢的角度。\n\n　　演讲那天，台下坐着三十多个孩子——他们是社区里的留守儿童，父母常年在外打工。我站上讲台，按照排练好的节奏开始演讲。一切都很顺利，台下的大人们频频点头。\n\n　　然而，在互动环节，一个扎着马尾辫的小女孩举手站了起来。她大概八九岁，穿着一件明显偏大的棉袄，袖口卷了好几圈。她怯生生地问我："哥哥，你说要勇敢追求梦想。可是，我的梦想就是过年的时候爸爸妈妈能回来。这个梦想……算不算？"\n\n　　我愣住了。精心准备的回答词全部卡在了喉咙里。\n\n　　她的眼睛很亮，亮得像两颗星星，但星星下面藏着我读不懂的东西。我站在台上，手握话筒，忽然觉得自己之前准备的那些华丽辞藻，在这个问题面前轻飘飘的，没有任何分量。\n\n　　我放下了演讲稿，走到她面前，蹲下来说："算。这是最珍贵的梦想。"\n\n　　那天回家的路上，我一直在想那个小女孩的眼神。冬天的风很冷，可我心里更冷——我为自己之前的虚荣感到羞耻。我准备这场演讲，想的全是怎么让自己出彩，却从未真正想过台下那些孩子需要什么。\n\n　　泰戈尔说："我们把世界看错了，反说它欺骗我们。"那天之前，我看错了"长大"的含义。我以为长大是让自己变得更厉害，其实，长大是学会把目光从自己身上移开，看见别人的需要、别人的痛苦、别人的梦想。\n\n　　那一刻，在那个小女孩明亮的眼睛里，我看见了一个更大的世界。那个世界里，不只有"我"，还有"我们"。\n\n　　从那以后，我参加了更多的公益活动——不再是为了展示自己，而是为了那些需要被看见的人。每一次，我都会想起那个小女孩的问题。她教会了我：真正的长大，是心里装得下别人。',
          fullTextEn: '　　When can you be called grown up? When you outgrow the mark on the doorframe? When you learn to ride the bus to school alone? Or when you receive your first top-ten report card?\n\n　　For a long time, I believed growing up meant constantly proving "I can do it." Until that winter afternoon, a public welfare speech at the community center completely changed my understanding of "growing up."\n\n　　It was a "Caring for Left-Behind Children" speech event organized by our school. As a member of the school speech team, I eagerly signed up. Honestly, my motives were not so noble — I saw it as a great opportunity to showcase myself and prove my eloquence before the entire school.\n\n　　During preparation, I crafted elaborate parallel sentences and moving rhetoric, practicing gestures and intonation again and again. I rehearsed in front of the mirror countless times, making sure every pause was perfect, every moment of eye contact compelling. I even pre-planned the angle of my closing bow.\n\n　　On the day of the speech, the audience comprised over thirty children — left-behind children in the community whose parents worked far away year-round. I took the stage and began speaking with rehearsed rhythm. Everything went smoothly; the adults in the audience nodded approvingly.\n\n　　However, during the interactive segment, a little girl with a ponytail raised her hand and stood up. She was about eight or nine, wearing a padded coat clearly several sizes too large, its sleeves rolled up several times. Timidly she asked me: "Big brother, you said we should bravely pursue our dreams. But my dream is just for Mom and Dad to come home for the New Year. Does that... count?"\n\n　　I froze. Every polished response jammed in my throat.\n\n　　Her eyes were very bright — bright as two stars — but beneath those stars was something I couldn\'t decipher. Standing on stage, microphone in hand, I suddenly felt that all the ornate rhetoric I had prepared was weightless and hollow before this question.\n\n　　I set down my script, walked to her, crouched down, and said: "It counts. It\'s the most precious dream of all."\n\n　　On the walk home that day, I kept thinking about that little girl\'s eyes. The winter wind was biting, but I felt colder inside — ashamed of my earlier vanity. In preparing that speech, all I had thought about was how to make myself shine, never truly considering what those children in the audience needed.\n\n　　Tagore wrote: "We read the world wrong and say that it deceives us." Before that day, I had misread the meaning of "growing up." I thought growing up meant making yourself more impressive. In truth, growing up is learning to lift your gaze from yourself and see others\' needs, others\' pain, others\' dreams.\n\n　　In that moment, in that little girl\'s bright eyes, I saw a larger world. A world containing not just "I" but "we."\n\n　　Since then, I have joined more public welfare activities — no longer to showcase myself, but for those who need to be seen. Every time, I think of that little girl\'s question. She taught me: truly growing up is having room in your heart for others.',
          highlights: [
            { text: '她的眼睛很亮，亮得像两颗星星，但星星下面藏着我读不懂的东西', textEn: 'Her eyes were bright as two stars — but beneath those stars lay something I could not decipher', why: '比喻含蓄深情，既写出孩子的纯真又暗示其背后的苦涩', whyEn: 'Bright stars with hidden depths — innocence and pain coexist in one gaze, and the narrator\'s inability to read them is the point' },
            { text: '华丽辞藻，在这个问题面前轻飘飘的，没有任何分量', textEn: 'All my ornate rhetoric suddenly felt weightless and hollow before that question', why: '对比手法有力，突出真实问题对虚荣的冲击', whyEn: 'Polished prose collapsing before raw truth — the moment the narrator\'s ego meets an unscripted human need' },
            { text: '真正的长大，是心里装得下别人', textEn: 'Truly growing up is having room in your heart for others', why: '结尾点题简洁有力，对"长大"的理解从个人扩展到他人', whyEn: 'A definition that redraws the boundary of maturity — from "how much I can do" to "how much I can hold"' }
          ],
          sections: [
            { type: '总起', fn: '设问引入', fnEn: 'Rhetorical opening', detail: '排比设问引出对"长大"的思考', detailEn: 'Parallel rhetorical questions introduce reflection on "growing up"' },
            { type: '分述一', fn: '虚荣备稿', fnEn: 'Vain preparation', detail: '为展示自己精心准备演讲', detailEn: 'Meticulously preparing speech for self-display' },
            { type: '分述二', fn: '被触动', fnEn: 'Being moved', detail: '小女孩的提问击碎虚荣', detailEn: 'Little girl\'s question shatters vanity' },
            { type: '分述三', fn: '视角转变', fnEn: 'Perspective shift', detail: '从"我"到"我们"的觉醒', detailEn: 'Awakening from "I" to "we"' },
            { type: '总结', fn: '升华点题', fnEn: 'Elevation and closure', detail: '长大是心里装得下别人', detailEn: 'Growing up is having room for others' }
          ]
        }
      ]
    },
    {
      id: 'yn2023_comp2',
      paperId: 'yn2023',
      year: 2023,
      region: '云南省',
      prompt: '请以"________，让生活更美好"为题，补充完整题目后写一篇不少于600字的作文。',
      promptEn: 'Complete the title "________ Makes Life Better" and write an essay of at least 600 words.',
      context: '生活中有很多事物让我们的日子变得更加美好：阅读、运动、微笑、陪伴、感恩……请选择一个词语填入横线，补充完整题目，写一篇作文。',
      contextEn: 'Many things in life make our days better: reading, exercise, smiles, companionship, gratitude... Choose a word to fill in the blank, complete the title, and write an essay.',
      type: 'semiTitle',
      category: '半命题记叙文/散文',
      categoryEn: 'Semi-title Narrative/Essay',
      wordCount: 600,
      guide: {
        analysis: '本题为半命题作文，关键在于选词填空。选词要具体且有个人特色，避免过于宽泛。文章需要围绕所选事物，具体展现它如何让生活变得更美好，最好有真实事例支撑。',
        analysisEn: 'This is a semi-title essay. The key is choosing the right word to fill the blank. The word should be specific with personal character, avoiding vagueness. The essay should concretely show how the chosen thing makes life better, ideally supported by real examples.',
        keyPoints: ['选词要具体、有个人特色', '围绕选词展开具体事例', '体现"更美好"的变化过程', '叙议结合，有真情实感'],
        keyPointsEn: ['Choose a specific word with personal character', 'Develop concrete examples around the chosen word', 'Show the process of becoming "better"', 'Combine narration with reflection, with genuine emotion'],
        pitfalls: ['选词过于宽泛', '只有空洞议论没有具体事例', '缺少"让生活更美好"的变化过程'],
        pitfallsEn: ['Choosing too broad a word', 'Only hollow commentary without concrete examples', 'Missing the process of change toward "better"']
      },
      essays: [
        {
          title: '奔跑，让生活更美好',
          titleEn: 'Running Makes Life Better',
          score: 37,
          maxScore: 40,
          structure: 'diJinShi',
          techniques: ['xiJieMiaoXie', 'duiBi', 'xinLiMiaoXie', 'jiaXuJiaYi'],
          techniqueMarks: [
            { para: 0, text: '每天清晨五点四十分，闹钟准时响起', technique: '时间锚定', techniqueEn: 'Temporal Anchor', effect: '精确时间制造沉浸感', effectEn: '5:40 AM — an exact timestamp that drops the reader into the runner\'s discipline from the first line' },
            { para: 1, text: '体测八百米跑到一半就岔气，引体向上一个都拉不起来', technique: '对比铺垫', techniqueEn: 'Contrast Setup', effect: '过去的弱小反衬后来的蜕变', effectEn: 'Side stitches and zero pull-ups — a baseline of weakness that makes the coming transformation dramatic' },
            { para: 2, text: '七十三岁都能跑，我十四岁为什么不能', technique: '反问触发', techniqueEn: 'Rhetorical Trigger', effect: '对比激发行动', effectEn: 'A seventy-three-year-old\'s daily five kilometres shames fourteen-year-old excuses into silence' },
            { para: 3, text: '每天早起像是一场和被窝的战争', technique: '比喻', techniqueEn: 'Simile', effect: '幽默化展现意志力挑战', effectEn: 'A war against the blankets — humour normalises the daily struggle that discipline demands' },
            { para: 3, text: '第一个月结束，我能连续跑完两公里了', technique: '数据递进', techniqueEn: 'Data Progression', effect: '2km→3km→5km量化成长', effectEn: 'Two → three → five kilometres — numerical proof that consistency compounds into capability' },
            { para: 5, text: '焦虑像藤蔓一样缠绕着我', technique: '比喻', techniqueEn: 'Vine Simile', effect: '焦虑的具象化', effectEn: 'Anxiety as creeping vines — a claustrophobic image that makes the mental tangle physically palpable' },
            { para: 5, text: '那些纷乱的念头就像晨雾一样，被风一吹就散了', technique: '通感比喻', techniqueEn: 'Synesthetic Simile', effect: '运动对心理的净化作用', effectEn: 'Wind dispersing mist — the body\'s rhythm purging the mind\'s chaos, rendered in one breath of imagery' },
            { para: 6, text: '不必想终点有多远，只管跑好眼前这一步', technique: '哲理过渡', techniqueEn: 'Philosophical Bridge', effect: '从运动哲学到人生哲学', effectEn: 'Running advice that doubles as a life maxim — the transition works because both feet and thoughts follow the same logic' },
            { para: 7, text: '空气里有青草和泥土混合的气味', technique: '嗅觉描写', techniqueEn: 'Olfactory Detail', effect: '嗅觉让晨跑场景立体', effectEn: 'Grass and earth — scent grounds the morning run in full sensory reality' },
            { para: 9, text: '更健康、更从容、更勇敢', technique: '排比总结', techniqueEn: 'Triple Summary', effect: '三层变化对应三层主题', effectEn: 'Healthier, calmer, braver — three adjectives map to the essay\'s three layers: body, mind, attitude' }
          ],
          approach: '以晨跑习惯为线索，从身体的改变到心态的转变再到人生态度的升华，三层递进展现奔跑如何让生活更美好。',
          approachEn: 'Using the morning running habit as a thread, progressing from physical change to mental shift to life-attitude elevation, three layers show how running makes life better.',
          architecture: '第一层：身体层面——从体弱到健康；第二层：心态层面——从焦虑到从容；第三层：态度层面——从畏难到迎难而上。三层递进，逐步升华。',
          architectureEn: 'Layer 1: Physical — from frail to healthy. Layer 2: Mental — from anxious to composed. Layer 3: Attitudinal — from fearing difficulty to embracing challenges. Three progressive layers, gradually elevating.',
          logic: '由"身体"到"心灵"再到"人生"，从具体到抽象，递进深化主题。',
          logicEn: 'From "body" to "mind" to "life" — concrete to abstract, progressively deepening the theme.',
          skills: ['细节描写晨跑场景有画面感', '前后对比突出变化', '夹叙夹议层层深入', '心理描写真实细腻'],
          skillsEn: ['Vivid morning running scenes with cinematic quality', 'Before/after contrast highlights change', 'Narration and reflection deepen layer by layer', 'Authentic and nuanced psychological descriptions'],
          fullText: '　　每天清晨五点四十分，闹钟准时响起。窗外的天还没有完全亮透，空气里带着露水的凉意。我穿上跑鞋，推开家门，开始了一天中最安静、也最属于自己的时光。\n\n　　一年前的我，绝对想不到自己会爱上跑步。那时候我是班里出了名的"弱鸡"——体测八百米跑到一半就岔气，引体向上一个都拉不起来，运动会永远是看台上的观众。体育课是我最害怕的课，每次跑步我都跑在最后面，听着身后同学们善意却刺耳的鼓励，觉得自己的肺快要炸开了。\n\n　　转变始于一个偶然。暑假里百无聊赖，我陪爸爸去公园散步。清晨的公园里有很多晨跑的人，其中有一位白发苍苍的老爷爷，步伐稳健，呼吸均匀，一圈又一圈，不疾不徐。爸爸说："他七十三了，每天跑五公里，风雨无阻。"我心里一动——七十三岁都能跑，我十四岁为什么不能？\n\n　　第一周是最难的。每天早起像是一场和被窝的战争。跑了不到两百米就气喘吁吁，小腿像灌了铅一样沉重。可我咬着牙坚持下来了。第一个月结束，我能连续跑完两公里了。第三个月，三公里。半年后，我可以用七分钟的配速轻松跑完五公里，呼吸平稳，面不改色。\n\n　　身体的变化是最直观的：体重减了五公斤，精神状态好了很多，体育课不再是噩梦。但更深层的改变，在身体之外。\n\n　　初三的学业压力像一座山，压得人喘不过气。月考成绩波动、同桌的进步、父母的期望……焦虑像藤蔓一样缠绕着我，夜里常常失眠。然而奇妙的是，每当我清晨跑步时，那些纷乱的念头就像晨雾一样，被风一吹就散了。双脚有节奏地拍打着地面，心跳和呼吸渐渐同步，脑海里只剩下一个念头：下一步，再下一步。\n\n　　跑步教会我的，不只是坚持。它教会我一种面对困难的态度——不必想终点有多远，只管跑好眼前这一步。数学大题不会做？那就从第一小问开始。作文不知道怎么写？那就先写下第一句话。当你学会把大困难拆成小步伐，一切似乎都不那么可怕了。\n\n　　今天清晨，我又跑在那条熟悉的路线上。路灯还亮着，天边刚泛起鱼肚白。脚下的柏油路微微湿润，空气里有青草和泥土混合的气味。一公里、两公里、三公里……身体像一台运转流畅的机器，每一步都踏实有力。\n\n　　跑过街角的早餐店，老板娘冲我挥了挥手："小伙子，又在跑步啊！"我笑着点点头，没有停下脚步。\n\n　　奔跑，让我遇见了一个更好的自己——更健康、更从容、更勇敢。它不是生活的全部，但它让生活的每一天，都有了一个充满力量的开始。',
          fullTextEn: '　　Every morning at 5:40, the alarm goes off on time. The sky outside isn\'t fully light yet, and the air carries the coolness of dew. I lace up my running shoes, push open the door, and begin the quietest, most personal time of the day.\n\n　　A year ago, I would never have imagined falling in love with running. Back then I was the class\'s notorious "weakling" — getting side stitches halfway through the 800-meter fitness test, unable to do a single pull-up, forever a spectator in the bleachers at sports meets. PE was the class I dreaded most. Every time we ran, I trailed at the back, listening to classmates\' well-meaning but piercing encouragement, feeling as if my lungs were about to explode.\n\n　　The change began by chance. Bored during summer vacation, I accompanied Dad for a walk in the park. The early-morning park was full of joggers, among them a white-haired old grandfather whose stride was steady and breathing even, circling lap after lap, unhurried. Dad said: "He\'s seventy-three and runs five kilometers every day, rain or shine." Something stirred inside me — if a seventy-three-year-old could run, why couldn\'t I at fourteen?\n\n　　The first week was the hardest. Getting up early each morning was a war against the warmth of the blankets. Less than two hundred meters in, I was gasping, my calves heavy as if filled with lead. But I gritted my teeth and persisted. By the end of the first month, I could run two kilometers without stopping. By the third month, three. After half a year, I could comfortably run five kilometers at a seven-minute pace, breathing steady, face unchanged.\n\n　　The physical changes were the most obvious: five kilograms lighter, much better energy, PE class no longer a nightmare. But the deeper changes lay beyond the body.\n\n　　The academic pressure of ninth grade weighed like a mountain, leaving you gasping. Fluctuating monthly test scores, a deskmate\'s improvement, parents\' expectations — anxiety coiled around me like vines, keeping me awake at night. Yet remarkably, whenever I ran in the early morning, those tangled thoughts scattered like morning mist blown by the wind. Feet rhythmically striking the ground, heartbeat and breathing gradually synchronizing, my mind was left with a single thought: the next step, then the next.\n\n　　What running taught me wasn\'t just perseverance. It taught me an attitude toward difficulty — don\'t worry about how far the finish line is, just run the step right in front of you. Can\'t solve the big math problem? Start with the first sub-question. Don\'t know how to write the essay? Just write the first sentence. When you learn to break big difficulties into small steps, everything seems less frightening.\n\n　　This morning, I ran along the same familiar route again. Streetlights were still on, the horizon just turning the pale white of a fish belly. The asphalt underfoot was slightly damp, the air carrying a scent of grass and earth mingled together. One kilometer, two, three — my body moved like a smoothly running machine, every step solid and strong.\n\n　　Passing the breakfast shop on the corner, the owner waved at me: "Running again, young man!" I smiled, nodded, and kept going.\n\n　　Running has helped me meet a better version of myself — healthier, more composed, braver. It isn\'t everything in life, but it gives every single day a beginning filled with strength.',
          highlights: [
            { text: '那些纷乱的念头就像晨雾一样，被风一吹就散了', textEn: 'Tangled thoughts scattered like morning mist blown apart by the wind', why: '比喻精妙，将跑步对心理的治愈作用写得具体可感', whyEn: 'Running as wind, anxiety as mist — a physical metaphor for mental clearing that anyone who runs will recognise' },
            { text: '不必想终点有多远，只管跑好眼前这一步', textEn: 'Don\'t worry about how far the finish line is — just run the step right in front of you', why: '从跑步到人生的过渡自然有力，议论不空洞', whyEn: 'Running advice as life philosophy — the transition is seamless because the body already knows the lesson the mind resists' },
            { text: '让生活的每一天，都有了一个充满力量的开始', textEn: 'Giving every single day a beginning filled with strength', why: '结尾扣题，"力量的开始"与晨跑呼应，收束有力', whyEn: 'A powerful beginning each morning — the closing circles back to the opening 5:40 alarm, sealing the essay as a complete loop' }
          ],
          sections: [
            { type: '第一层', fn: '身体改变', fnEn: 'Physical change', detail: '从体弱到能跑五公里', detailEn: 'From frail to running five kilometers' },
            { type: '第二层', fn: '心态转变', fnEn: 'Mental shift', detail: '跑步驱散焦虑，带来从容', detailEn: 'Running dispels anxiety, brings composure' },
            { type: '第三层', fn: '态度升华', fnEn: 'Attitude elevation', detail: '学会把困难拆成小步伐', detailEn: 'Learning to break difficulties into small steps' },
            { type: '结尾', fn: '点题收束', fnEn: 'Closure', detail: '奔跑让每天有力量的开始', detailEn: 'Running gives every day a powerful beginning' }
          ]
        },
        {
          title: '微笑，让生活更美好',
          titleEn: 'Smiles Make Life Better',
          score: 36,
          maxScore: 40,
          structure: 'bingLieShi',
          techniques: ['paiBi', 'xiJieMiaoXie', 'duiBi', 'shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '不选财富，不选天赋，我选微笑', technique: '排比选择', techniqueEn: 'Selective Parallelism', effect: '两个否定衬托最终选择', effectEn: 'Rejecting wealth and talent heightens the surprise of choosing something free — the thesis announced through contrast' },
            { para: 2, text: '被夹在两个大人中间，书包带勒得肩膀生疼', technique: '触觉描写', techniqueEn: 'Tactile Detail', effect: '身体的不适强化心理的脆弱', effectEn: 'Physical discomfort — straps digging into shoulders — amplifies emotional vulnerability' },
            { para: 3, text: '那个微笑像一束光，穿过拥挤的人群，照在了我身上', technique: '比喻', techniqueEn: 'Light Metaphor', effect: '微笑的温暖从抽象变为可视', effectEn: 'A smile as a directed beam of light — warmth made visible, physical, and personal' },
            { para: 4, text: '做好了被批评的心理准备', technique: '心理描写', techniqueEn: 'Psychological Detail', effect: '期待与结果的反差铺垫', effectEn: 'Bracing for criticism sets up the surprise that follows — the teacher\'s smile lands harder for being unexpected' },
            { para: 5, text: '你不是不行，是还没找到方法', technique: '对话点睛', techniqueEn: 'Pivotal Dialogue', effect: '一句话重新定义失败', effectEn: 'Eight words dismantle "I\'m a bad student" and replace it with "I\'m a student in search of a method"' },
            { para: 5, text: '从倒数第十进步到了班级第十五', technique: '数据佐证', techniqueEn: 'Data Evidence', effect: '量化变化增强说服力', effectEn: 'Concrete ranking numbers prove the smile\'s real-world impact — encouragement measured in positions gained' },
            { para: 7, text: '嘴角生硬地上扬，像一个不太合格的微笑', technique: '动作描写', techniqueEn: 'Action Detail', effect: '笨拙的微笑写出自我和解的艰难', effectEn: 'A stiff, clumsy smile — the difficulty of the gesture measures the depth of the exhaustion' },
            { para: 7, text: '让镜子里那张疲惫的脸多了一点温度', technique: '视觉转化', techniqueEn: 'Visual Shift', effect: '微笑改变面部温度的通感', effectEn: 'Temperature rising in a mirror — a subtle synesthesia where warmth appears on a face that was cold' },
            { para: 9, text: '公交车上陌生人的微笑……老师的微笑……镜子里自己的微笑', technique: '排比总结', techniqueEn: 'Summary Parallelism', effect: '三种微笑递进排列', effectEn: 'Stranger → teacher → self — three smiles arranged in ascending intimacy, mapping the narrator\'s growth in self-reliance' },
            { para: 10, text: '像一粒种子，播撒在生活的每一个角落', technique: '比喻收束', techniqueEn: 'Seed Metaphor', effect: '种子意象写出微笑的持久生长力', effectEn: 'A seed scattered everywhere — small, quiet, yet capable of germinating anywhere given time' }
          ],
          approach: '用三个并列的微笑故事——陌生人的微笑、老师的微笑、自己对镜子的微笑——展现微笑在不同场景中的力量。',
          approachEn: 'Uses three parallel smile stories — a stranger\'s smile, a teacher\'s smile, and the narrator\'s smile at the mirror — to show the power of smiles in different settings.',
          architecture: '开篇点题→故事一：公交车上陌生人的微笑→故事二：考试失利后老师的微笑→故事三：对镜子微笑的自我和解→总结升华。',
          architectureEn: 'Opening thesis → Story 1: A stranger\'s smile on the bus → Story 2: Teacher\'s smile after exam failure → Story 3: Smiling at the mirror for self-reconciliation → Summary elevation.',
          logic: '三个故事从"接受微笑"到"被微笑治愈"再到"主动微笑"，形成递进。',
          logicEn: 'Three stories progress from "receiving a smile" to "being healed by a smile" to "actively smiling."',
          skills: ['三个并列故事结构清晰', '细节描写各有侧重', '首尾呼应结构完整', '排比句增强语言气势'],
          skillsEn: ['Three parallel stories with clear structure', 'Details with different emphases in each', 'Opening-closing echo for structural completeness', 'Parallelism enhances linguistic momentum'],
          fullText: '　　如果让我选一样东西让生活变得更美好，我不选财富，不选天赋，我选微笑。\n\n　　因为微笑，是这个世界上成本最低、却最有温度的礼物。\n\n　　第一次被微笑治愈，是在一辆拥挤的公交车上。那是初一开学的第一天，我背着沉重的书包独自坐公交去新学校。车厢里挤满了人，我被夹在两个大人中间，书包带勒得肩膀生疼，手够不到扶手，身体随着车身晃来晃去。我紧张极了，手心冒汗，眼眶微微发红。\n\n　　就在这时，旁边一位阿姨看了我一眼，侧了侧身子给我让出了一点空间，然后冲我笑了笑。那个微笑很普通，普通到如果不是我正处在最无助的时刻，可能根本不会注意到。但在那个早晨，在那辆摇摇晃晃的公交车上，那个微笑像一束光，穿过拥挤的人群，照在了我身上。我的紧张一下子消退了大半。\n\n　　第二次被微笑治愈，是在初二下学期的数学办公室里。那次月考我考了全班倒数第十，拿着卷子去找数学老师订正。我低着头，不敢看她的眼睛，做好了被批评的心理准备。\n\n　　然而老师看完我的卷子，没有皱眉，没有叹气，而是微微笑了一下："错的地方不少，但有一道题你的解法比标准答案还巧妙。你不是不行，是还没找到方法。"她的微笑不是敷衍的安慰，而是真诚的鼓励。那个微笑让我相信，我不是"差生"，只是需要更多时间。那个学期结束时，我的数学从倒数第十进步到了班级第十五。\n\n　　第三次，不再是别人给我的微笑，而是我给自己的。\n\n　　初三上学期，学业压力让我整个人像一根绷紧的弦。有一天晚上写作业写到十一点，抬头看见镜子里的自己——眼圈发黑，面无表情，像一台只会运转的机器。我突然觉得很心酸。\n\n　　我对着镜子，试着笑了一下。嘴角生硬地上扬，像一个不太合格的微笑。但就是这个笨拙的微笑，让镜子里那张疲惫的脸多了一点温度。我又笑了笑，这一次，是真的笑了。\n\n　　从那以后，我养成了一个小习惯：每天早上出门前，对着镜子笑一笑。不是为了给别人看，是为了告诉自己——不管今天有多难，至少此刻，你还能笑。\n\n　　公交车上陌生人的微笑，教会我善意可以无处不在；老师的微笑，教会我鼓励比批评更有力量；镜子里自己的微笑，教会我与自己和解。\n\n　　微笑不能解决所有问题，但它能让我们在面对问题的时候，多一份从容和勇气。它像一粒种子，播撒在生活的每一个角落，悄悄地、缓缓地，让一切变得更美好。',
          fullTextEn: '　　If I could choose one thing to make life better, I wouldn\'t choose wealth or talent — I\'d choose a smile.\n\n　　Because a smile is the lowest-cost yet warmest gift in this world.\n\n　　The first time I was healed by a smile was on a crowded bus. It was the first day of seventh grade. I rode the bus alone to my new school with a heavy backpack. The bus was packed. Wedged between two adults, the straps dug into my shoulders, I couldn\'t reach a handle, and my body swayed with every turn. I was extremely nervous, palms sweating, eyes stinging.\n\n　　Just then, a woman beside me glanced over, shifted slightly to give me a little space, and smiled at me. That smile was very ordinary — so ordinary that if I hadn\'t been at my most helpless, I probably wouldn\'t have noticed it at all. But that morning, on that swaying bus, that smile was like a beam of light piercing through the crowd and falling on me. My nervousness faded by more than half.\n\n　　The second time I was healed by a smile was in the math office during the second semester of eighth grade. On that monthly exam I ranked tenth from last in the class. I brought my paper to the math teacher for corrections, head down, not daring to meet her eyes, mentally prepared for a scolding.\n\n　　But after reviewing my paper, the teacher didn\'t frown or sigh. Instead, she smiled slightly: "You\'ve made quite a few mistakes, but on one problem, your approach was more elegant than the standard answer. You\'re not incapable — you just haven\'t found the right method yet." Her smile wasn\'t a perfunctory consolation but genuine encouragement. That smile made me believe I wasn\'t a "poor student," just one who needed more time. By the end of that semester, my math ranking had improved from tenth-to-last to fifteenth in the class.\n\n　　The third time, the smile was no longer from someone else but from myself.\n\n　　In the first semester of ninth grade, academic pressure had me wound tight as a string. One night after doing homework until eleven, I looked up and saw myself in the mirror — dark circles under my eyes, expressionless face, like a machine that only knew how to run. I suddenly felt a pang of sadness.\n\n　　I looked in the mirror and tried to smile. The corners of my mouth rose stiffly, like an inadequate attempt at a smile. But that clumsy smile added a touch of warmth to the tired face in the mirror. I smiled again — this time, it was real.\n\n　　Since then, I\'ve formed a small habit: every morning before heading out, I smile at the mirror. Not for anyone else to see, but to tell myself — no matter how hard today may be, at least right now, you can still smile.\n\n　　The stranger\'s smile on the bus taught me that kindness can be everywhere. The teacher\'s smile taught me that encouragement is more powerful than criticism. My own smile in the mirror taught me to make peace with myself.\n\n　　Smiles can\'t solve all problems, but they give us a little more composure and courage when facing them. Like a seed scattered into every corner of life, quietly and gently, a smile makes everything a little better.',
          highlights: [
            { text: '那个微笑像一束光，穿过拥挤的人群，照在了我身上', textEn: 'That smile was a beam of light, piercing through the crowd and falling on me', why: '比喻生动有力，将微笑的温暖具象化', whyEn: 'Light-through-crowd — a single smile isolated from noise, warmth made physical and directional' },
            { text: '你不是不行，是还没找到方法', textEn: 'You\'re not incapable — you just haven\'t found the right method yet', why: '老师的话简洁有力，体现鼓励式教育的智慧', whyEn: 'One sentence reframes failure as mislabelled potential — the smile that precedes it makes the words land' },
            { text: '不管今天有多难，至少此刻，你还能笑', textEn: 'No matter how hard today may be, at least right now, you can still smile', why: '自我和解的心理描写真实动人，引发共鸣', whyEn: 'A self-addressed affirmation that acknowledges difficulty while refusing defeat — resilience in miniature' }
          ],
          sections: [
            { type: '开头', fn: '点题', fnEn: 'State thesis', detail: '微笑是最有温度的礼物', detailEn: 'A smile is the warmest gift' },
            { type: '故事一', fn: '陌生人微笑', fnEn: 'Stranger\'s smile', detail: '公交车上被善意治愈', detailEn: 'Healed by kindness on the bus' },
            { type: '故事二', fn: '老师微笑', fnEn: 'Teacher\'s smile', detail: '考试失利后被鼓励治愈', detailEn: 'Healed by encouragement after exam failure' },
            { type: '故事三', fn: '自己微笑', fnEn: 'Own smile', detail: '对镜微笑的自我和解', detailEn: 'Self-reconciliation smiling at the mirror' },
            { type: '结尾', fn: '升华总结', fnEn: 'Elevated summary', detail: '微笑让一切更美好', detailEn: 'Smiles make everything better' }
          ]
        },
        {
          title: '阅读，让生活更美好',
          titleEn: 'Reading Makes Life Better',
          score: 36,
          maxScore: 40,
          structure: 'zongFenZong',
          techniques: ['paiBi', 'yinYongLunZheng', 'jiaXuJiaYi', 'biFangNiRen'],
          techniqueMarks: [
            { para: 0, text: '阅读是一场最安静的革命', technique: '矛盾修辞', techniqueEn: 'Oxymoron', effect: '"安静"与"革命"对撞，抓人眼球', effectEn: 'Quiet + revolution — the collision of opposites makes the opening irresistibly quotable' },
            { para: 1, text: '我们人类不过是漫长进化链条上最新的一环', technique: '知识叙事', techniqueEn: 'Knowledge Narrative', effect: '科学视角拓宽认知', effectEn: 'Zooming out to evolutionary time puts human life in humbling perspective — one book, one paradigm shift' },
            { para: 1, text: '天堂应该是图书馆的模样', technique: '引用', techniqueEn: 'Allusion', effect: '博尔赫斯名言增添文化厚度', effectEn: 'Borges\' paradise-as-library elevates the essay from personal anecdote to cultural conversation' },
            { para: 2, text: '一个比我苦一百倍的故事，却让我在阅读时获得了奇异的平静', technique: '反差叙事', techniqueEn: 'Paradox Narrative', effect: '苦难故事带来平静的反直觉效果', effectEn: 'A story a hundred times harder bringing calm — counter-intuitive catharsis that only reading can deliver' },
            { para: 2, text: '如果福贵都能活下去，我有什么理由不努力', technique: '日记引用', techniqueEn: 'Diary Quote', effect: '从阅读感悟到现实行动的桥梁', effectEn: 'A diary entry that bridges fiction and life — the reader watches literature become motivation in real time' },
            { para: 2, text: '第二天，我主动和同桌说了第一句话', technique: '行动转折', techniqueEn: 'Action Pivot', effect: '阅读到行动的即时转化', effectEn: 'One sentence of initiative — proof that a night\'s reading can trigger a morning\'s courage' },
            { para: 3, text: '以前我走过校园里的银杏大道，只觉得"叶子黄了"', technique: '前后对比', techniqueEn: 'Before-After Contrast', effect: '审美觉醒前后的差异', effectEn: 'Before: "leaves turned yellow." After: veins, wind-sounds, light-temperature. The contrast maps aesthetic awakening' },
            { para: 3, text: '江上之清风，与山间之明月', technique: '经典引用', techniqueEn: 'Classical Quote', effect: '苏轼名句增加文言韵味', effectEn: 'Su Shi\'s river-wind-and-mountain-moon connects a modern student to a thousand-year literary lineage' },
            { para: 4, text: '像一群安静的朋友，不喧哗、不争抢', technique: '拟人', techniqueEn: 'Personification', effect: '书籍人格化，温暖亲切', effectEn: 'Books as quiet friends who never demand — personification that captures the unobtrusive nature of reading' },
            { para: 5, text: '从无知走向丰盈，从脆弱走向坚韧，从粗糙走向细腻', technique: '排比升华', techniqueEn: 'Climactic Triple', effect: '三组排比总结阅读的三维改变', effectEn: 'Three parallel arcs — ignorance→richness, fragility→resilience, roughness→refinement — compress the entire essay into one crescendo' }
          ],
          approach: '以阅读在知识、心灵和审美三个维度的影响为线索，展现阅读如何全方位让生活变得更美好。',
          approachEn: 'Uses reading\'s impact on knowledge, spirit, and aesthetics as threads to show how reading improves life comprehensively.',
          architecture: '总起：阅读是最安静的革命→分述一：阅读拓宽视野（知识）→分述二：阅读治愈心灵（精神）→分述三：阅读提升审美（美感）→总结：阅读让人成为更好的自己。',
          architectureEn: 'General opening: Reading is the quietest revolution → Part 1: Reading broadens horizons (knowledge) → Part 2: Reading heals the soul (spirit) → Part 3: Reading refines aesthetics (beauty) → Summary: Reading makes you a better self.',
          logic: '从"知"到"情"再到"美"，三个维度层层深入，展现阅读的多元价值。',
          logicEn: 'From "knowledge" to "emotion" to "beauty" — three dimensions deepen progressively, revealing reading\'s multifaceted value.',
          skills: ['排比句式增强气势', '引用名言增添文化厚度', '叙议结合不空洞', '比喻拟人使语言生动'],
          skillsEn: ['Parallel structures enhance momentum', 'Quotations add cultural depth', 'Narration with reflection avoids hollowness', 'Metaphor and personification enliven language'],
          fullText: '　　有人说，阅读是一场最安静的革命。它不需要呐喊，不需要冲锋，只需要一盏灯、一本书、一颗愿意沉下来的心。而这场安静的革命，正一点一点地改变着我的生活。\n\n　　阅读首先给了我一双看世界的眼睛。初一之前，我的世界只有眼前的校园和家。《万物简史》让我第一次知道，地球上曾经有过五次生物大灭绝，而我们人类不过是漫长进化链条上最新的一环。《丝绸之路》让我看见，两千年前的驼铃声是如何连接起东方与西方。《海底两万里》让我跟着尼摩船长潜入深海，见识了珊瑚墓地和海底火山。每读完一本书，我就觉得自己的世界大了一圈。博尔赫斯说："我心里一直在暗暗设想，天堂应该是图书馆的模样。"我深以为然。如果天堂是图书馆，那每一本书都是一扇窗，推开它，就能看见一个从未见过的世界。\n\n　　阅读还给了我一颗更强大的心。初二下学期，我经历了一段很灰暗的日子——转学到新学校，没有朋友，成绩也从前几名掉到了中游。每天放学后我都一个人走很长的路回家，觉得整个世界都灰蒙蒙的。那段时间，是一本书救了我。余华的《活着》，一个比我苦一百倍的故事，却让我在阅读时获得了奇异的平静。福贵失去了一切，却依然活着，依然和那头老牛走在夕阳下的田埂上。读完那本书的那个晚上，我在日记里写："如果福贵都能活下去，我有什么理由不努力？"第二天，我主动和同桌说了第一句话。\n\n　　更深层的改变，是阅读让我学会了发现美。以前我走过校园里的银杏大道，只觉得"叶子黄了"。读了《瓦尔登湖》之后，我开始注意每一片叶子的纹路，开始听风穿过树梢的声音，开始感受清晨第一缕阳光落在脸上的温度。世界没有变，变的是我的眼睛。苏东坡说"江上之清风，与山间之明月"是造物者无尽的宝藏。阅读让我拥有了发现这些宝藏的能力。\n\n　　如今，我的书桌上总是摊着一本正在读的书。它有时是一本小说，有时是一本诗集，有时是一本科普读物。它们像一群安静的朋友，不喧哗、不争抢，只在我需要的时候，默默递上一把打开世界的钥匙。\n\n　　阅读，让我从无知走向丰盈，从脆弱走向坚韧，从粗糙走向细腻。它是最慢的捷径，最小的奢侈，也是让生活变得更美好的，最朴素的方式。',
          fullTextEn: '　　Some say reading is the quietest revolution. It requires no shouting, no charging — only a lamp, a book, and a heart willing to settle down. And this quiet revolution is changing my life, bit by bit.\n\n　　First, reading gave me eyes to see the world. Before seventh grade, my world was limited to the school and home in front of me. "A Short History of Nearly Everything" taught me that Earth has undergone five mass extinctions, and we humans are merely the latest link in a long evolutionary chain. "The Silk Road" showed me how camel bells two thousand years ago connected East and West. "Twenty Thousand Leagues Under the Sea" took me diving with Captain Nemo into the deep, witnessing coral graveyards and submarine volcanoes. After finishing each book, I felt my world had grown a little larger. Borges said: "I have always imagined that Paradise will be a kind of library." I couldn\'t agree more. If paradise is a library, then every book is a window — push it open, and you see a world you\'ve never seen before.\n\n　　Reading also gave me a stronger heart. In the second semester of eighth grade, I went through a dark period — transferring to a new school with no friends, my grades dropping from the top to the middle. Every day after school I walked a long way home alone, feeling as though the entire world was draped in grey. During that time, a book saved me. Yu Hua\'s "To Live" — a story a hundred times harder than mine — gave me a strange calm while reading. Fugui lost everything, yet he lived on, still walking along the field ridge at sunset with his old ox. The night I finished that book, I wrote in my diary: "If Fugui can go on living, what excuse do I have not to try?" The next day, I spoke the first words to my deskmate on my own initiative.\n\n　　The deeper change is that reading taught me to discover beauty. I used to walk past the ginkgo avenue on campus and think merely "the leaves have turned yellow." After reading "Walerta," I began noticing the veins of every leaf, listening to the sound of wind threading through treetops, feeling the temperature of the first morning sunbeam on my face. The world hadn\'t changed — my eyes had. Su Dongpo wrote that "the clear breeze on the river and the bright moon between the mountains" are the Creator\'s inexhaustible treasures. Reading gave me the ability to find these treasures.\n\n　　Now there is always an open book on my desk. Sometimes a novel, sometimes a poetry collection, sometimes a popular science book. They are like a group of quiet friends — never noisy, never pushy, silently offering a key to open the world whenever I need one.\n\n　　Reading has taken me from ignorance to richness, from fragility to resilience, from roughness to refinement. It is the slowest shortcut, the smallest luxury, and the most humble way to make life better.',
          highlights: [
            { text: '每读完一本书，我就觉得自己的世界大了一圈', textEn: 'After finishing each book, I felt my world had grown one ring wider', why: '朴素直白却真挚动人，高度概括阅读的力量', whyEn: 'Expanding by one ring at a time — growth as concentric circles, steady, organic, and impossible to reverse' },
            { text: '如果福贵都能活下去，我有什么理由不努力', textEn: 'If Fugui could go on living, what excuse do I have not to try?', why: '将阅读感悟转化为现实行动力，夹叙夹议自然', whyEn: 'Fiction becomes personal mandate — a character\'s endurance shames the narrator into action, literature proving its utility' },
            { text: '它是最慢的捷径，最小的奢侈', textEn: 'The slowest shortcut, the smallest luxury', why: '矛盾修辞精妙，结尾语言优美有力', whyEn: 'A double oxymoron — slow shortcut, small luxury — that captures reading\'s paradox: effortless and transformative at once' }
          ],
          sections: [
            { type: '总起', fn: '引出主题', fnEn: 'Introduce theme', detail: '阅读是最安静的革命', detailEn: 'Reading is the quietest revolution' },
            { type: '分述一', fn: '知识层面', fnEn: 'Knowledge dimension', detail: '阅读拓宽视野', detailEn: 'Reading broadens horizons' },
            { type: '分述二', fn: '心灵层面', fnEn: 'Spirit dimension', detail: '阅读治愈心灵', detailEn: 'Reading heals the soul' },
            { type: '分述三', fn: '审美层面', fnEn: 'Aesthetic dimension', detail: '阅读提升审美', detailEn: 'Reading refines aesthetics' },
            { type: '总结', fn: '升华点题', fnEn: 'Elevation and closure', detail: '阅读是让生活更美好的最朴素方式', detailEn: 'Reading is the most humble way to make life better' }
          ]
        },
        {
          title: '陪伴，让生活更美好',
          titleEn: 'Companionship Makes Life Better',
          score: 35,
          maxScore: 40,
          structure: 'pianDuanZuHe',
          techniques: ['xiJieMiaoXie', 'huanJingChenTuo', 'duiBi', 'shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '小时候我不懂这个词', technique: '设问开篇', techniqueEn: 'Opening Question', effect: '以不懂到懂的弧线搭建全文框架', effectEn: 'Starting from innocence guarantees an arc of discovery — the reader will grow alongside the narrator' },
            { para: 2, text: '手指捏着棋子在空中悬一会儿，才"啪"地落下', technique: '动作描写', techniqueEn: 'Action Detail', effect: '一"悬"一"啪"写出爷爷的从容', effectEn: 'Hovering, then clacking — two sounds capture a lifetime of patience in a single chess move' },
            { para: 3, text: '每个周末都把棋摆好，坐在阳台上等着', technique: '细节描写', techniqueEn: 'Habitual Detail', effect: '无言等候比语言更深情', effectEn: 'A board set up weekly for a grandchild who may not come — love expressed as ritual persistence' },
            { para: 3, text: '夕阳把他的影子拉得很长很长', technique: '环境渲染', techniqueEn: 'Atmospheric Detail', effect: '长影象征等待的漫长与孤独', effectEn: 'An elongated shadow becomes a visual metaphor for the long solitude of waiting' },
            { para: 5, text: '一把蓝色的伞伸到了我头顶', technique: '动作转折', techniqueEn: 'Action Pivot', effect: '无声举伞胜过千言万语', effectEn: 'An umbrella appearing overhead without a word — the entire reconciliation compressed into one gesture' },
            { para: 6, text: '伞柄上还带着他手掌的温度', technique: '触觉细节', techniqueEn: 'Tactile Detail', effect: '温度传递友情的真实感', effectEn: 'Residual warmth on a handle transforms an object into a vessel of living connection' },
            { para: 7, text: '有些东西，在那把蓝色雨伞撑开的瞬间，已经比从前更牢固了', technique: '议论点睛', techniqueEn: 'Reflective Epigram', effect: '含蓄揭示友情在考验后更深', effectEn: 'The umbrella opening marks a before-and-after — friendship tested and tempered into something stronger' },
            { para: 8, text: '尾巴轻轻摇了摇，好像在说："别急，我陪着你呢。"', technique: '拟人', techniqueEn: 'Personification', effect: '赋予小狗人性化的理解', effectEn: 'A dog\'s tail wag translated into human speech — imagined dialogue that feels emotionally true' },
            { para: 8, text: '毛茸茸的脑袋拱进我的掌心', technique: '触觉描写', techniqueEn: 'Tactile Comfort', effect: '身体接触写出无声安慰', effectEn: 'A furry head pressed into a palm — physical contact as the purest form of non-verbal consolation' },
            { para: 9, text: '陪伴，是最长情的告白', technique: '化用升华', techniqueEn: 'Adapted Aphorism', effect: '流行语升格为全文总结', effectEn: 'An internet catchphrase, earned by three vignettes, transforms from cliché into hard-won conclusion' }
          ],
          approach: '用三个片段组合——爷爷的棋盘陪伴、朋友的雨中陪伴、小狗的无声陪伴——展现不同形式的陪伴如何温暖生活。',
          approachEn: 'Combines three vignettes — grandfather\'s companionship over a chess board, a friend\'s companionship in the rain, and a dog\'s silent companionship — showing how different forms of companionship warm life.',
          architecture: '引子：陪伴是什么→片段一：爷爷下棋→片段二：朋友雨中等候→片段三：小狗守在书桌旁→结尾：陪伴的多种形式，让生活更美好。',
          architectureEn: 'Introduction: What is companionship → Vignette 1: Chess with grandfather → Vignette 2: Friend waiting in the rain → Vignette 3: Dog sitting by the desk → Ending: Many forms of companionship make life better.',
          logic: '三个片段从亲情到友情再到人与动物之间的情感，层层拓宽"陪伴"的内涵。',
          logicEn: 'Three vignettes expand the meaning of "companionship" from family to friendship to human-animal bond.',
          skills: ['片段组合结构清晰', '细节描写各有侧重', '环境描写烘托情感', '首尾呼应收束有力'],
          skillsEn: ['Clear montage structure', 'Details with different emphases', 'Environmental descriptions set the emotional tone', 'Opening-closing echo for powerful closure'],
          fullText: '　　陪伴是什么？\n\n　　小时候我不懂这个词，只觉得身边的人就应该一直在。长大后才明白，那些看似平常的"在一起"，是生活给我们最珍贵的礼物。\n\n　　【片段一：棋盘上的陪伴】\n\n　　爷爷教我下象棋的时候，我刚上小学三年级。每个周末下午，我们都坐在阳台上，中间摆一张小方桌，铺上那副用了二十年的木棋。阳光从玻璃窗外斜射进来，照得棋子上的红漆和黑漆闪闪发亮。\n\n　　爷爷下棋很慢，每走一步都要想很久，手指捏着棋子在空中悬一会儿，才"啪"地落下。我性子急，恨不得三步就把他将死。爷爷总是笑着摇头："急什么？下棋跟做人一样，得一步一步来。"\n\n　　后来我上了初中，功课越来越多，周末下棋的时间从一下午缩短到一小时，再到一个月一次。爷爷从不催我，只是每个周末都把棋摆好，坐在阳台上等着。有一次我推开阳台门，看见他一个人对着棋盘发呆，夕阳把他的影子拉得很长很长。我鼻子一酸，搬了凳子坐下来："爷爷，我们下一局。"\n\n　　那个下午的棋，我们下了整整两个小时。\n\n　　【片段二：雨中的陪伴】\n\n　　初二那年秋天，我和最好的朋友小陈吵了一架。原因已经记不清了，大概是什么鸡毛蒜皮的小事。我们冷战了整整一周，谁也不理谁。\n\n　　那周五放学，天下起了大雨。我站在教学楼门口，没带伞，进退两难。就在我准备冲进雨里跑回家的时候，一把蓝色的伞伸到了我头顶。\n\n　　是小陈。\n\n　　他没说话，只是把伞递给我，自己转身走进了雨里。我愣在原地，看着他的背影在雨幕中越来越模糊。伞柄上还带着他手掌的温度。\n\n　　第二天，我在他的课桌上放了一盒他最爱吃的巧克力。他看了一眼，嘴角弯了弯。我们谁也没提那场冷战，就像什么都没发生过一样。但我们都知道，有些东西，在那把蓝色雨伞撑开的瞬间，已经比从前更牢固了。\n\n　　【片段三：无声的陪伴】\n\n　　家里有一只叫团团的柴犬，是我十岁生日时养的。它不会说话，不会安慰人，但它有一个特别的本事——在我最需要的时候，默默待在我身边。\n\n　　初三备考的那些夜晚，我伏在书桌前做题，团团就趴在我脚边。有时候我写着写着，低头看一眼，它正用圆溜溜的眼睛望着我，尾巴轻轻摇了摇，好像在说："别急，我陪着你呢。"有时候我烦躁地把笔一摔，它就凑过来蹭蹭我的小腿，毛茸茸的脑袋拱进我的掌心。那种温暖没有言语，却比任何言语都管用。\n\n　　爷爷的棋盘、小陈的雨伞、团团的守候——陪伴不需要惊天动地的誓言，不需要轰轰烈烈的付出。它只是在你需要的时候，有人在身边；在你孤独的时候，有人不曾离开。\n\n　　陪伴，是最长情的告白，也是让生活变得更美好的，最温柔的力量。',
          fullTextEn: '　　What is companionship?\n\n　　As a child I didn\'t understand the word — I just assumed the people around me would always be there. Only when I grew older did I realize that those seemingly ordinary moments of "being together" are life\'s most precious gift.\n\n　　[Vignette 1: Companionship Over the Chessboard]\n\n　　Grandfather taught me to play Chinese chess when I was in third grade. Every weekend afternoon, we sat on the balcony with a small square table between us, laying out the wooden chess set he\'d used for twenty years. Sunlight slanted through the glass, making the red and black lacquer on the pieces gleam.\n\n　　Grandfather played slowly, pondering each move for a long time, holding a piece suspended in the air before placing it with a decisive "clack." I was impatient, wishing I could checkmate him in three moves. He would always shake his head with a smile: "What\'s the rush? Chess is like life — you take it step by step."\n\n　　Later I entered middle school, and homework piled up. Our weekend chess time shrank from an entire afternoon to one hour, then to once a month. Grandfather never pressed me; he simply set up the board every weekend and sat on the balcony waiting. One time I pushed open the balcony door and found him staring at the board alone, the setting sun stretching his shadow very long. My nose stung. I pulled up a stool and sat down: "Grandpa, let\'s play a game."\n\n　　That afternoon, our game lasted a full two hours.\n\n　　[Vignette 2: Companionship in the Rain]\n\n　　In the autumn of eighth grade, my best friend Xiao Chen and I had a fight. I can\'t even remember the reason anymore — probably some trivial thing. We gave each other the silent treatment for an entire week.\n\n　　That Friday after school, a downpour started. I stood at the entrance of the teaching building without an umbrella, stuck. Just as I was about to dash into the rain, a blue umbrella appeared above my head.\n\n　　It was Xiao Chen.\n\n　　He said nothing, just handed me the umbrella, turned, and walked into the rain himself. I stood frozen, watching his silhouette grow hazier through the curtain of rain. The umbrella handle still held the warmth of his palm.\n\n　　The next day, I placed a box of his favorite chocolate on his desk. He glanced at it, and the corner of his mouth curved slightly. Neither of us mentioned the cold war, as if nothing had happened. But we both knew that something, in the instant that blue umbrella opened, had become stronger than before.\n\n　　[Vignette 3: Silent Companionship]\n\n　　We have a Shiba Inu named Tuantuan, whom I got on my tenth birthday. He can\'t speak or offer comfort, but he has one special talent — silently staying by my side when I need it most.\n\n　　During those ninth-grade exam-prep nights, I\'d hunch over my desk doing problems while Tuantuan lay at my feet. Sometimes, mid-writing, I\'d glance down and find him gazing up at me with round eyes, tail wagging gently, as if saying: "Don\'t worry — I\'m right here with you." Sometimes when I slammed my pen down in frustration, he\'d nuzzle my calf, pushing his furry head into my palm. That warmth was wordless, yet more effective than any words.\n\n　　Grandfather\'s chessboard, Xiao Chen\'s umbrella, Tuantuan\'s vigil — companionship doesn\'t require grand vows or dramatic sacrifice. It simply means someone is there when you need them; someone hasn\'t left when you feel alone.\n\n　　Companionship is the most enduring declaration of love, and the gentlest force that makes life better.',
          highlights: [
            { text: '每个周末都把棋摆好，坐在阳台上等着', textEn: 'Every weekend he set up the board and sat on the balcony, waiting', why: '细节描写含蓄深情，不言爱却满是爱', whyEn: 'A ritual of silent waiting — Grandfather never asks, never complains, just sets up the pieces and hopes' },
            { text: '伞柄上还带着他手掌的温度', textEn: 'The umbrella handle still held the warmth of his palm', why: '细节精准，以"温度"传递友情的温暖', whyEn: 'Residual body heat on a handle — friendship made literally tangible through a single tactile detail' },
            { text: '陪伴，是最长情的告白', textEn: 'Companionship is the most enduring declaration of love', why: '化用流行语入文，结尾点题有力', whyEn: 'Repurposing a popular internet phrase elevates it from cliché to thesis — pop culture reclaimed as genuine wisdom' }
          ],
          sections: [
            { type: '引子', fn: '提出主题', fnEn: 'Introduce theme', detail: '陪伴是生活最珍贵的礼物', detailEn: 'Companionship is life\'s most precious gift' },
            { type: '片段一', fn: '亲情陪伴', fnEn: 'Family companionship', detail: '爷爷棋盘上的守候', detailEn: 'Grandfather\'s vigil at the chessboard' },
            { type: '片段二', fn: '友情陪伴', fnEn: 'Friendship companionship', detail: '朋友雨中递伞', detailEn: 'Friend handing umbrella in rain' },
            { type: '片段三', fn: '无声陪伴', fnEn: 'Silent companionship', detail: '小狗守在书桌旁', detailEn: 'Dog sitting by the desk' },
            { type: '结尾', fn: '总结升华', fnEn: 'Summary elevation', detail: '陪伴是最温柔的力量', detailEn: 'Companionship is the gentlest force' }
          ]
        },
        {
          title: '感恩，让生活更美好',
          titleEn: 'Gratitude Makes Life Better',
          score: 35,
          maxScore: 40,
          structure: 'qiChengZhuanHe',
          techniques: ['duiBi', 'xinLiMiaoXie', 'jiaXuJiaYi', 'xiJieMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '整个世界都在和我作对', technique: '主观夸张', techniqueEn: 'Subjective Hyperbole', effect: '写出青少年特有的极端化思维', effectEn: 'Adolescent all-or-nothing thinking expressed as cosmic conspiracy — immediately relatable' },
            { para: 1, text: '觉得生活灰蒙蒙的，像一张没有颜色的照片', technique: '比喻', techniqueEn: 'Simile', effect: '灰色滤镜比喻精准写出抑郁心态', effectEn: 'A colourless photograph — depression rendered as a visual filter over reality' },
            { para: 3, text: '硬着头皮写了三条', technique: '心理描写', techniqueEn: 'Psychological Detail', effect: '不情愿写感恩的真实状态', effectEn: 'Reluctant compliance — the authentic starting point makes the later transformation credible' },
            { para: 4, text: '今天没下雨，不用带伞', technique: '微小细节', techniqueEn: 'Micro-Detail', effect: '极小的感恩事项反衬心态之灰暗', effectEn: 'Gratitude so trivial it borders on absurd — yet this very triviality becomes the seed of change' },
            { para: 6, text: '煎蛋的边缘微微卷起，旁边放着一杯刚好不烫的牛奶', technique: '五感细节', techniqueEn: 'Sensory Detail', effect: '细节写出母爱的精心', effectEn: 'Curled egg-edges and milk at exact temperature — maternal precision previously invisible now glowing' },
            { para: 7, text: '像是蒙着一层灰色的滤镜', technique: '比喻回扣', techniqueEn: 'Callback Simile', effect: '与开头的灰色照片呼应', effectEn: 'The grey-filter echoes the colourless photograph — the narrator now names the distortion she once lived inside' },
            { para: 8, text: '九十多条"感恩清单"', technique: '数据说服', techniqueEn: 'Data Persuasion', effect: '量化展示坚持的效果', effectEn: 'Ninety entries in thirty days — quantity as proof that small daily acts accumulate into a worldview shift' },
            { para: 9, text: '不是生活变了，是我看生活的方式变了', technique: '议论点睛', techniqueEn: 'Reflective Pivot', effect: '一句话揭示感恩的本质', effectEn: 'The essay\'s philosophical centre — gratitude reframed as perceptual recalibration, not wishful thinking' },
            { para: 10, text: '至少我还在跑，没有放弃', technique: '排比反转', techniqueEn: 'Parallelism of Reframes', effect: '三个"至少"展现视角转变', effectEn: 'Three "at least" re-readings convert every defeat into evidence of endurance — cognitive alchemy in action' },
            { para: 11, text: '像一副新的眼镜，戴上之后，世界还是那个世界', technique: '比喻总结', techniqueEn: 'Summary Metaphor', effect: '眼镜比喻完美收束主题', effectEn: 'New glasses on the same world — the simplest possible metaphor for the essay\'s deepest claim' }
          ],
          approach: '以感恩日记的习惯为切入点，展现"我"从抱怨生活到感恩生活的视角转变，通过起承转合的传统结构完整呈现心态变化。',
          approachEn: 'Uses the gratitude journal habit as the entry point, showing the narrator\'s shift from complaining about life to being grateful for it, presenting the mindset change through the traditional four-part structure.',
          architecture: '起：抱怨一切的灰暗心态→承：偶然开始写感恩日记→转：渐渐发现被忽略的美好→合：感悟感恩的力量，生活因此变得更美好。',
          architectureEn: 'Introduction: A gloomy mindset of complaining about everything → Development: Accidentally starting a gratitude journal → Turn: Gradually discovering overlooked goodness → Conclusion: Understanding the power of gratitude, life becomes better.',
          logic: '由"抱怨"到"记录"再到"发现"，心态转变的逻辑线索贯穿全文。',
          logicEn: 'From "complaining" to "recording" to "discovering" — the mindset-shift thread runs through the entire essay.',
          skills: ['前后心态对比鲜明', '心理描写真实细腻', '叙议结合不空洞', '细节描写生活化'],
          skillsEn: ['Sharp before/after mindset contrast', 'Authentic and nuanced psychological descriptions', 'Narration with reflection avoids hollowness', 'Life-like vivid details'],
          fullText: '　　初二下学期的那个春天，我觉得整个世界都在和我作对。\n\n　　数学成绩从九十分滑到了七十分，跟最好的朋友因为一件小事闹翻了，体育课上跑步又是最后一名。妈妈让我多喝热水，我嫌她烦；爸爸说"考差了没关系"，我觉得他是在敷衍。每天写完作业，我就趴在桌上发呆，觉得生活灰蒙蒙的，像一张没有颜色的照片。\n\n　　转变始于一次偶然。语文老师布置了一个小任务：每天写三件让你感到感恩的事。她说："不需要多长，哪怕只是一句话。"\n\n　　第一天晚上，我对着日记本发愁了十分钟。感恩的事？我有什么好感恩的？生活这么糟糕。但作业总得完成，我硬着头皮写了三条：\n\n　　一、今天没下雨，不用带伞。二、食堂的红烧肉比昨天好吃一点。三、同桌借了我一支笔。\n\n　　写完之后，我觉得有些可笑——这也算值得感恩的事吗？但隐隐又觉得，好像写下来之后，那些小事变得没那么理所当然了。\n\n　　第二天，第三天……我继续写。慢慢地，我开始留意那些以前根本不会注意到的事情。比如早上出门时，妈妈已经把早餐摆好了，煎蛋的边缘微微卷起，旁边放着一杯刚好不烫的牛奶——她一定算好了时间。比如下午放学，夕阳把教学楼的影子拉得老长，那片金色的光洒在操场上，美得让人想停下脚步。比如上课走神被老师点名回答问题，答错了，老师没有批评，而是说"再想想"。\n\n　　这些事，一直都在发生。只是以前的我，像是蒙着一层灰色的滤镜，只看得见不好的，看不见好的。\n\n　　一个月后，我翻看日记本，已经记了九十多条"感恩清单"。有些很小：路边的花开了、外卖准时到了、作业比昨天少。有些很温暖：妈妈在我书包里偷偷塞了巧克力、爸爸开车绕远路送我到校门口、好朋友在我的课桌上贴了一张写着"加油"的便利贴。\n\n　　我发现，当我开始记录这些事情的时候，它们就像是被施了魔法一样，变得更加闪亮了。不是生活变了，是我看生活的方式变了。\n\n　　那个曾经觉得"世界在和我作对"的我，现在每天都能从普通的日子里找到三份小小的幸福。考试没考好？至少我知道了哪些知识点还没掌握。跟朋友吵架了？至少说明我们的关系值得在意。跑步又是最后一名？至少我还在跑，没有放弃。\n\n　　感恩不是粉饰太平，不是自我欺骗。它是一种选择——选择在灰暗中看见光，在不完美中找到值得珍惜的东西。它像一副新的眼镜，戴上之后，世界还是那个世界，但你看见的，从此不同。\n\n　　感恩，让生活更美好。不是因为生活变好了，而是因为你终于学会了看见那些一直存在的好。',
          fullTextEn: '　　In the spring of the second semester of eighth grade, I felt the entire world was working against me.\n\n　　My math scores slid from ninety to seventy. I had a falling-out with my best friend over something trivial. I was dead last again during the PE running test. When Mom told me to drink more hot water, I found her annoying. When Dad said "It\'s okay if you did poorly," I thought he was being dismissive. After finishing homework each evening, I slumped over my desk in a daze, feeling as though life were a colorless photograph shrouded in grey.\n\n　　The change began by chance. Our Chinese teacher assigned a small task: write three things you\'re grateful for every day. She said: "It doesn\'t need to be long — even one sentence is fine."\n\n　　The first evening, I stared at my journal for ten minutes, stumped. Things to be grateful for? What did I have to be grateful for? Life was awful. But homework had to be done, so I forced out three entries:\n\n　　1. It didn\'t rain today, so I didn\'t need an umbrella. 2. The braised pork in the cafeteria tasted slightly better than yesterday. 3. My deskmate lent me a pen.\n\n　　After writing them, I felt almost embarrassed — these counted as things worth being grateful for? But faintly, I sensed that once written down, those small things stopped seeming so taken-for-granted.\n\n　　Day two, day three... I continued writing. Gradually, I began noticing things I\'d never paid attention to before. For instance, when I left for school in the morning, Mom had already laid out breakfast — the edges of the fried egg curling slightly, a glass of milk beside it at just the right temperature; she must have timed it. After school, the setting sun stretched the teaching building\'s shadow across the playground, and that swath of golden light was beautiful enough to make you pause. When I was caught daydreaming in class and called on to answer, getting it wrong, the teacher didn\'t scold me but said "Think about it a bit more."\n\n　　These things had always been happening. But the old me, as if wearing a grey filter over my eyes, could only see what was bad and never what was good.\n\n　　A month later, I flipped through my journal — over ninety entries on my "gratitude list." Some were small: roadside flowers blooming, a delivery arriving on time, less homework than yesterday. Some were warm: Mom secretly slipping chocolate into my backpack, Dad driving a longer route to drop me at the school gate, my best friend sticking a post-it saying "You got this!" on my desk.\n\n　　I discovered that when I started recording these things, they seemed enchanted — becoming more radiant. Life hadn\'t changed; the way I looked at life had.\n\n　　The me who once thought "the world is against me" can now find three small happinesses in an ordinary day. Didn\'t do well on an exam? At least I know which concepts I haven\'t mastered. Had a fight with a friend? At least it means our relationship is worth caring about. Last place in running again? At least I\'m still running and haven\'t given up.\n\n　　Gratitude isn\'t whitewashing reality or self-deception. It\'s a choice — choosing to see light in the darkness, to find things worth cherishing amid imperfection. It\'s like a new pair of glasses: once you put them on, the world is still the same world, but what you see is forever different.\n\n　　Gratitude makes life better. Not because life has improved, but because you have finally learned to see the goodness that was always there.',
          highlights: [
            { text: '像一张没有颜色的照片', textEn: 'Like a photograph drained of all colour', why: '比喻简洁准确，写出了抑郁心态的质感', whyEn: 'A desaturated-photo simile makes the narrator\'s emotional state visually tangible — grey is not description but diagnosis' },
            { text: '不是生活变了，是我看生活的方式变了', textEn: 'Life hadn\'t changed — the way I looked at life had', why: '点题精准，揭示感恩的本质是视角转变', whyEn: 'The essay\'s thesis in a single pivot: gratitude is not about better circumstances but about better seeing' },
            { text: '你终于学会了看见那些一直存在的好', textEn: 'You have finally learned to see the goodness that was always there', why: '结尾句与标题完美扣合，余韵悠长', whyEn: 'The closing reframes the title\'s "better" — not a change in the world but an awakening of perception' }
          ],
          sections: [
            { type: '起', fn: '灰暗心态', fnEn: 'Gloomy mindset', detail: '对生活充满抱怨', detailEn: 'Full of complaints about life' },
            { type: '承', fn: '开始记录', fnEn: 'Start recording', detail: '偶然开始写感恩日记', detailEn: 'Accidentally starting a gratitude journal' },
            { type: '转', fn: '视角转变', fnEn: 'Perspective shift', detail: '发现被忽略的美好', detailEn: 'Discovering overlooked goodness' },
            { type: '合', fn: '感悟升华', fnEn: 'Insight elevation', detail: '感恩是看见一直存在的好', detailEn: 'Gratitude is seeing the goodness that was always there' }
          ]
        }
      ]
    },
    {
      id: 'yn2022_comp1',
      paperId: 'yn2022',
      year: 2022,
      region: '云南省',
      prompt: '请以"走在山坡上"为题写一篇作文。',
      promptEn: 'Write an essay titled "Walking on the Hillside."',
      context: '山坡在山脚和山顶之间。行至山坡，身边有好友偕行，远方有烟岚可眺，峰顶有未知待探索，来路有满满的收获……',
      contextEn: 'A hillside lies between the foot and the summit. On the slope, friends walk beside you, misty peaks beckon ahead, unknowns await at the top, and the path behind brims with harvest.',
      type: 'fullTitle',
      category: '命题记叙文',
      categoryEn: 'Full-title Narrative',
      wordCount: 600,
      guide: {
        analysis: '本题以"走在山坡上"为题，山坡是一个隐喻——人生的过渡阶段、成长的中间状态。关键在于：（1）"山坡"象征什么——青春、求学、努力的过程；（2）"走"的状态——不是已到山顶的成功，而是正在路上的坚持；（3）山坡上能看到什么——身边的人、远方的风景、来路的收获。可以写一段成长经历，表达在过程中感悟的道理。',
        analysisEn: 'The title uses "hillside" as a metaphor for transitional phases of life — adolescence, learning, the process of striving. Key points: (1) What does the "hillside" symbolize — youth, education, the journey of effort; (2) The state of "walking" — not yet at the summit of success, but persisting on the way; (3) What you see on the hillside — companions, distant scenery, past harvests.',
        keyPoints: ['以"山坡"为核心意象，赋予象征意义', '展现"在路上"的状态而非终点', '写出成长过程中的感悟与收获', '融入具体的人物和事件'],
        keyPointsEn: ['Use "hillside" as the core image with symbolic meaning', 'Show the state of "being on the way" not the destination', 'Express insights and gains during growth', 'Include specific characters and events'],
        pitfalls: ['只写爬山经历，缺乏深层含义', '空谈道理，没有具体事例', '写成功到达山顶，偏离"在山坡上"的状态'],
        pitfallsEn: ['Only describing a hiking experience without deeper meaning', 'Abstract moralizing without concrete examples', 'Writing about reaching the summit, deviating from the "on the hillside" state']
      },
      essays: [
        {
          title: '走在山坡上',
          titleEn: 'Walking on the Hillside',
          score: 38,
          maxScore: 40,
          structure: 'qiChengZhuanHe',
          techniques: ['huanJingChenTuo', 'xiJieMiaoXie', 'biFangNiRen', 'shouWeiHuYing'],
          techniqueMarks: [
            { para: 1, text: '晨光从枝叶的缝隙里漏下来，在地上洒出一片片碎金', technique: '光影描写', techniqueEn: 'Light-and-Shadow Detail', effect: '碎金意象让山坡晨景具象化', effectEn: 'Broken gold on the forest floor — sunlight rendered as treasure, priming the hillside as a place of hidden value' },
            { para: 2, text: '双腿像灌了铅一样沉重', technique: '比喻', techniqueEn: 'Simile', effect: '登山疲惫可感可触', effectEn: 'Lead-filled legs make exhaustion a weight the reader physically feels' },
            { para: 2, text: '初三，像一条永远走不到头的山坡', technique: '隐喻过渡', techniqueEn: 'Metaphorical Bridge', effect: '自然山坡与人生山坡的切换', effectEn: 'The transition from literal slope to figurative one — the essay\'s dual-thread structure clicks into place' },
            { para: 3, text: '模拟考的成绩忽上忽下', technique: '细节叙事', techniqueEn: 'Detail Narration', effect: '真实反映初三学生的焦虑', effectEn: 'Scores swinging up and down capture the emotional roller-coaster of exam season' },
            { para: 3, text: '我趴在桌上哭了很久', technique: '动作细节', techniqueEn: 'Action Detail', effect: '简短一句写尽崩溃', effectEn: 'One short sentence — face down, crying for a long time — condenses a breakdown into its purest physical form' },
            { para: 4, text: '不知名的野花，在石缝间悄悄绽放', technique: '环境映衬', techniqueEn: 'Environmental Mirroring', effect: '野花暗喻默默努力的自己', effectEn: 'Nameless flowers blooming in rock cracks — a quiet metaphor for resilience that needs no audience' },
            { para: 5, text: '只有山坡上，才能同时看到来路和远方', technique: '哲理对话', techniqueEn: 'Wisdom Dialogue', effect: '爸爸的话成为全文核心', effectEn: 'Dad\'s one observation becomes the thesis — the midpoint is the only position that holds perspective in both directions' },
            { para: 6, text: '那些早起的清晨，那些做不完的习题', technique: '排比回顾', techniqueEn: 'Anaphoric Recall', effect: '"那些"排比将碎片串成风景', effectEn: 'Repeated "those" gathers scattered hardships into a panorama — fragments assembled into a view' },
            { para: 7, text: '开始留意路边的每一棵树、每一朵花、每一块被磨得光滑的石头', technique: '排比描写', techniqueEn: 'Triple Observation', effect: '细微事物呼应心态转变', effectEn: 'Noticing tree, flower, and stone signals the inner shift — mindfulness replacing the earlier blind rush' },
            { para: 8, text: '最好的风景不在终点，而在路上', technique: '首尾呼应', techniqueEn: 'Echo Closure', effect: '呼应开头的登山，升华为人生感悟', effectEn: 'The opening hike meets the closing aphorism — physical journey and philosophical insight fuse in the final line' }
          ],
          approach: '以一次真实的登山经历为载体，将"山坡"与初三备考生活对应，在自然景观中映射成长感悟。',
          approachEn: 'Uses a real hiking experience as the vehicle, paralleling the "hillside" with the narrator\'s 9th-grade exam preparation, projecting growth insights onto natural scenery.',
          architecture: '起：清晨登山，描写山坡景色；承：回忆初三以来的辛苦与迷茫；转：在山坡上停歇时领悟"过程"的意义；合：继续前行，升华主题。',
          architectureEn: 'Intro: Morning hike, hillside scenery. Development: Recall hardships and confusion since 9th grade. Turn: While resting on the slope, realize the meaning of "the journey." Conclusion: Continue walking, elevate the theme.',
          logic: '从"自然山坡"到"人生山坡"的类比推进，由景入情，情景交融。',
          logicEn: 'Analogical progression from natural hillside to life\'s hillside, moving from scenery to emotion, blending the two.',
          skills: ['开头用环境描写营造氛围', '自然与人生双线交织', '细节真实可感', '结尾首尾呼应，余韵悠长'],
          skillsEn: ['Opening environmental description sets the mood', 'Nature and life intertwined as dual threads', 'Authentic, tangible details', 'Ending echoes the opening with lingering resonance'],
          fullText: '　　清晨六点，雾气还没散尽，我已经站在了山脚下。\n\n　　这是昆明郊外一座不算高的山，爸爸说，爬到山顶大约需要两个小时。我抬头望去，山路弯弯曲曲地延伸向上，两旁是密密的松林，晨光从枝叶的缝隙里漏下来，在地上洒出一片片碎金。\n\n　　开始的一段路很轻松。我大步流星地往上走，一边和爸爸聊天，一边听林间的鸟鸣。可渐渐地，坡度陡了起来，路也越来越窄，我的呼吸开始急促，双腿像灌了铅一样沉重。我不禁想到了这一年的生活——初三，像一条永远走不到头的山坡。\n\n　　从九月开学到现在，我每天早上六点起床，晚上十一点才放下笔。模拟考的成绩忽上忽下，有时候觉得自己离目标越来越近，有时候又觉得怎么努力都不够。上个月的月考，数学考砸了，我趴在桌上哭了很久。妈妈说："没关系，还有时间。"可我心里明白，时间正一天天减少。\n\n　　"歇一会儿吧。"爸爸在路边一块大石头上坐下来。我也坐下了，大口喘着气。这时我才发现，山坡上的风景竟然这么美——脚下是来时的路，蜿蜒在绿色的山林间；远处是城市的轮廓，在晨雾中若隐若现；身旁有不知名的野花，在石缝间悄悄绽放。\n\n　　"你看，"爸爸指着远方说，"山顶上什么都看不见，因为云太厚了。山脚下也看不远，因为被挡住了。只有山坡上，才能同时看到来路和远方。"\n\n　　我愣住了。是啊，山脚下的我只顾着害怕，山顶上的人只顾着庆祝，而走在山坡上的我，才能真正感受到这一路的风景。那些早起的清晨，那些做不完的习题，那些和同学一起背书的课间，那些被老师表扬后偷偷高兴的瞬间——这些不就是山坡上的风景吗？\n\n　　我站起来，继续往上走。坡度依然很陡，腿依然很酸，但我的心情不一样了。我开始留意路边的每一棵树、每一朵花、每一块被磨得光滑的石头。它们都是山坡的一部分，就像那些辛苦的日子，都是我青春的一部分。\n\n　　走在山坡上，我不急着到达山顶。因为我知道，最好的风景不在终点，而在路上。',
          fullTextEn: '　　At six in the morning, the mist had not yet cleared, but I was already standing at the foot of the mountain.\n\n　　It was a modest hill on the outskirts of Kunming. Dad said it would take about two hours to reach the top. I looked up — the path wound upward in curves, flanked by dense pine forests. Morning light leaked through gaps in the branches, scattering patches of broken gold on the ground.\n\n　　The first stretch was easy. I strode upward briskly, chatting with Dad and listening to birdsong in the woods. But gradually the slope steepened, the path narrowed, my breathing quickened, and my legs grew heavy as lead. I couldn\'t help but think of this past year — ninth grade felt like a hillside that never ended.\n\n　　Since September, I\'d been waking at six every morning and setting down my pen only at eleven at night. Mock exam scores swung up and down; sometimes I felt closer to my goal, other times it seemed no amount of effort was enough. Last month\'s math exam went terribly, and I buried my face in my desk and cried for a long time. Mom said, "It\'s okay, there\'s still time." But I knew time was slipping away day by day.\n\n　　"Let\'s rest a bit." Dad sat down on a large rock by the path. I sat too, gasping for breath. Only then did I notice how beautiful the hillside was — below lay the winding path through green forest; in the distance, the city\'s silhouette flickered in and out of morning mist; beside me, nameless wildflowers bloomed quietly in rock crevices.\n\n　　"Look," Dad pointed to the distance. "From the summit you can\'t see anything — the clouds are too thick. From the foot you can\'t see far either — everything is blocked. Only from the hillside can you see both the path behind and the road ahead."\n\n　　I was stunned. He was right. At the foot of the mountain, all I did was worry. At the top, people only celebrate. But walking on the hillside, I could truly take in the scenery of the journey. Those early mornings, those endless problem sets, those breaks spent reciting texts with classmates, those moments of secret joy after a teacher\'s praise — weren\'t these the hillside\'s scenery?\n\n　　I stood up and continued climbing. The slope was still steep, my legs still ached, but my mood had changed. I began noticing every tree, every flower, every stone worn smooth along the path. They were all part of the hillside, just as those hard days were all part of my youth.\n\n　　Walking on the hillside, I was no longer in a hurry to reach the summit. Because I knew: the best scenery is not at the destination, but along the way.',
          highlights: [
            { text: '只有山坡上，才能同时看到来路和远方', textEn: 'Only from the hillside can you see both the path behind and the road ahead', why: '爸爸的话点题精准，赋予"山坡"独特的视角价值', whyEn: 'Dad distils the entire essay into one spatial truth: the midpoint is the only vantage that holds past and future simultaneously' },
            { text: '那些辛苦的日子，都是我青春的一部分', textEn: 'Those hard days are all part of my youth', why: '将具体经历与主题融合，真切动人', whyEn: 'Reframing hardship as integral to youth rather than obstacle to it — pain as landscape, not detour' },
            { text: '最好的风景不在终点，而在路上', textEn: 'The best scenery is not at the destination, but along the way', why: '结尾议论简洁有力，升华主题', whyEn: 'A closing aphorism that reverses the usual climb-the-summit narrative — the view that matters is the one you walk through' }
          ],
          sections: [
            { type: '开头', fn: '场景代入', fnEn: 'Scene immersion', detail: '清晨登山，环境描写营造氛围', detailEn: 'Morning hike with environmental description setting the mood' },
            { type: '承接', fn: '困境回忆', fnEn: 'Recalling struggles', detail: '初三备考的辛苦与迷茫', detailEn: '9th-grade exam preparation hardships and confusion' },
            { type: '转折', fn: '领悟时刻', fnEn: 'Moment of insight', detail: '爸爸的话让"我"理解山坡的意义', detailEn: 'Dad\'s words help narrator understand the hillside\'s meaning' },
            { type: '结尾', fn: '升华前行', fnEn: 'Elevated continuation', detail: '不急着到终点，享受在路上', detailEn: 'No rush to the destination, enjoying the journey' }
          ]
        },
        {
          title: '走在山坡上',
          titleEn: 'Walking on the Hillside',
          score: 37,
          maxScore: 40,
          structure: 'pianDuanZuHe',
          techniques: ['dianMianJieHe', 'xinLiMiaoXie', 'duiBi', 'jiaXuJiaYi'],
          techniqueMarks: [
            { para: 0, text: '如果初中三年是一座山，那我现在正走在山坡上', technique: '比喻开头', techniqueEn: 'Metaphorical Opening', effect: '一句话建立核心隐喻', effectEn: 'A single conditional sentence establishes the governing metaphor — mountain as middle school' },
            { para: 1, text: '鲜红的"73分"', technique: '色彩细节', techniqueEn: 'Colour Detail', effect: '鲜红强化分数的冲击感', effectEn: 'Bright red ink makes the score physically jolting — colour as emotional amplifier' },
            { para: 2, text: '像站在山脚下仰望山顶的人，觉得一切都遥不可及', technique: '比喻呼应', techniqueEn: 'Echo Simile', effect: '山脚意象与核心隐喻一致', effectEn: 'Feeling tiny at the mountain\'s base — the governing metaphor proven through lived experience' },
            { para: 3, text: '物理只考了58分，我第一次不及格', technique: '精确叙事', techniqueEn: 'Precise Narration', effect: '具体分数增强真实感', effectEn: 'Exact score plus "first time failing" — specificity makes the setback viscerally real' },
            { para: 4, text: '上也上不去，下又不甘心', technique: '心理描写', techniqueEn: 'Inner Conflict', effect: '进退两难写出瓶颈感', effectEn: 'Stuck between ascent and retreat — the midslope dilemma captured in two balanced clauses' },
            { para: 4, text: '你不是不会，你只是不知道自己哪里不会', technique: '对话点睛', techniqueEn: 'Pivotal Dialogue', effect: '老师的话精准击中学习方法的核心', effectEn: 'The teacher\'s diagnostic reframing — ignorance of ignorance — becomes the intellectual turning point of the essay' },
            { para: 4, text: '走不动的时候，不是要加速，而是要停下来看看脚下的路', technique: '议论升华', techniqueEn: 'Reflective Elevation', effect: '将老师的方法论推广为人生哲学', effectEn: 'A physics lesson generalised into a life principle — stopping is not failing, it\'s recalibrating' },
            { para: 5, text: '每天的生活像精密的齿轮一样转动', technique: '比喻', techniqueEn: 'Mechanical Simile', effect: '齿轮意象写出初三的紧张规律', effectEn: 'Precision gears — ninth-grade life as a machine that never idles, each minute accounted for' },
            { para: 6, text: '没有人比我更清楚这个成绩背后有多少个清晨的练习', technique: '内心独白', techniqueEn: 'Inner Monologue', effect: '暗写付出，情感含蓄', effectEn: 'The narrator claims exclusive knowledge of the price — effort rendered as private memory, not public boast' },
            { para: 7, text: '走在山坡上，真好', technique: '点题收束', techniqueEn: 'Title Closure', effect: '三字结尾简洁有力，余韵悠长', effectEn: 'Three characters close the essay with the economy of a haiku — everything said, nothing wasted' }
          ],
          approach: '用片段组合式结构，撷取初中三年三个关键片段，对应"山脚—山腰—山坡高处"的攀登过程。',
          approachEn: 'Uses a montage structure, selecting three key moments from three years of middle school, corresponding to "foot—midslope—upper slope" stages of the climb.',
          architecture: '引子：初中三年如同爬山；片段一（山脚）：初一的迷茫与新奇；片段二（山腰）：初二的瓶颈与突破；片段三（山坡高处）：初三的坚持与成长；尾声：仍在山坡上，珍惜当下。',
          architectureEn: 'Prologue: Three years of middle school like climbing. Vignette 1 (foot): 7th-grade confusion and novelty. Vignette 2 (midslope): 8th-grade bottleneck and breakthrough. Vignette 3 (upper slope): 9th-grade persistence and growth. Coda: Still on the hillside, cherishing the present.',
          logic: '三个时间节点层层递进，从迷茫到坚定，展现成长弧线。',
          logicEn: 'Three time points progressively deepen, from confusion to determination, showing a growth arc.',
          skills: ['片段组合结构清晰有序', '三个片段形成对比与递进', '心理描写真实细腻', '结尾点题自然不生硬'],
          skillsEn: ['Montage structure is clear and orderly', 'Three vignettes create contrast and progression', 'Psychological descriptions are authentic and nuanced', 'Ending ties the title naturally without forcing'],
          fullText: '　　如果初中三年是一座山，那我现在正走在山坡上。\n\n　　【山脚】\n\n　　初一那年秋天，我第一次走进这所中学。教学楼比小学大了三倍，走廊里挤满了陌生的面孔。分班考试的卷子发下来，我看着上面鲜红的"73分"，心里一沉——在小学，我的语文从来没有低过90分。\n\n　　那段日子，我像站在山脚下仰望山顶的人，觉得一切都遥不可及。新的老师讲课节奏快，新的同学似乎个个都比我优秀，连食堂打饭都要学会排队抢位置。我常常在晚自习时偷偷发呆，想着：这座山，我真的能爬上去吗？\n\n　　【山腰】\n\n　　初二下学期，我的成绩终于稳定在班级前十。但新的烦恼来了——物理。那些电路图和受力分析像一团乱麻，怎么解都解不开。期中考试，物理只考了58分，我第一次不及格。\n\n　　我开始怀疑自己是不是到了极限。就像爬山爬到半山腰，体力耗尽，上也上不去，下又不甘心。直到有一天，物理老师把我叫到办公室，给我一张白纸，说："把你不懂的地方全写下来。"我写了满满一页。他看完笑了："你看，你不是不会，你只是不知道自己哪里不会。"从那天起，我学会了一个道理——走不动的时候，不是要加速，而是要停下来看看脚下的路。\n\n　　【山坡高处】\n\n　　现在是初三的春天。教室后面的倒计时牌上写着"距中考还有67天"。每天的生活像精密的齿轮一样转动：早读、上课、做题、考试、订正、再做题。有时候累得想放弃，但回头一看，来时的路已经很长了。\n\n　　上周体育模拟考，我的800米跑进了3分30秒。要知道，初一的时候我连4分钟都跑不下来。没有人比我更清楚这个成绩背后有多少个清晨的练习。跑完后我弯着腰喘气，好朋友小林拍着我的肩膀说："你真行！"我笑了，心里涌起一股暖流。\n\n　　走在山坡上，我看见了身后蜿蜒的来路，看见了身边一起攀登的伙伴，也看见了远处尚未清晰的山顶。我不知道最后能不能登顶，但我知道，此刻脚下的每一步，都算数。\n\n　　走在山坡上，真好。',
          fullTextEn: '　　If three years of middle school were a mountain, then I am walking on the hillside right now.\n\n　　[The Foot]\n\n　　In the autumn of seventh grade, I first walked into this middle school. The teaching building was three times larger than my elementary school, and the corridors were packed with unfamiliar faces. When the placement test papers came back, I stared at the bright red "73" — in elementary school, my Chinese score had never dropped below 90.\n\n　　During that time, I felt like someone standing at the foot of a mountain gazing up at the peak, everything seeming impossibly distant. The new teachers spoke faster, the new classmates all seemed more capable, and even getting food in the cafeteria required learning to jostle for a spot. I often stared blankly during evening study sessions, thinking: Can I really climb this mountain?\n\n　　[The Midslope]\n\n　　In the second semester of eighth grade, my grades had finally stabilized in the class top ten. But a new trouble arrived — physics. Those circuit diagrams and force analyses were like tangled knots I couldn\'t unravel. I scored 58 on the midterm — my first failing grade ever.\n\n　　I began to doubt whether I had hit my limit. Like a hiker stuck halfway up, energy spent, unable to go up, unwilling to go down. Then one day, the physics teacher called me to his office and handed me a blank sheet: "Write down everything you don\'t understand." I filled an entire page. He read it and smiled: "See? It\'s not that you can\'t learn — you just didn\'t know what you didn\'t know." From that day, I learned a truth: when you can\'t go on, the answer isn\'t to speed up, but to stop and look at the path beneath your feet.\n\n　　[The Upper Slope]\n\n　　Now it is spring of ninth grade. The countdown board at the back of the classroom reads "67 days until zhongkao." Daily life turns like precision gears: morning reading, classes, practice problems, tests, corrections, more problems. Sometimes I\'m so exhausted I want to give up, but when I look back, the road I\'ve traveled is already very long.\n\n　　Last week during the PE mock test, I ran the 800 meters in 3 minutes 30 seconds. In seventh grade, I couldn\'t even finish in under 4 minutes. No one knows better than I how many early morning practices lie behind that time. After finishing, I bent over gasping. My best friend Xiao Lin patted my shoulder: "You\'re amazing!" I smiled, a warm current rising in my heart.\n\n　　Walking on the hillside, I can see the winding path behind, the companions climbing beside me, and the still-unclear summit in the distance. I don\'t know if I\'ll reach the top in the end, but I know that every step I take right now counts.\n\n　　Walking on the hillside — it feels wonderful.',
          highlights: [
            { text: '走不动的时候，不是要加速，而是要停下来看看脚下的路', textEn: 'When you can\'t go on, the answer isn\'t to speed up — it\'s to stop and look at the path beneath your feet', why: '物理老师的启发转化为人生智慧，自然不说教', whyEn: 'A physics teacher\'s diagnostic method becomes a life maxim — pause and locate the problem before resuming the climb' },
            { text: '此刻脚下的每一步，都算数', textEn: 'Every step I take right now counts', why: '简洁有力地肯定过程的价值', whyEn: 'Five words that refuse to discount the present in favour of some imagined summit — radical affirmation of the now' },
            { text: '走在山坡上，真好', textEn: 'Walking on the hillside — it feels wonderful', why: '三字结尾干净利落，余韵悠长', whyEn: 'A three-word coda (真好) that says everything by saying almost nothing — simplicity as the highest form of closure' }
          ],
          sections: [
            { type: '引子', fn: '总起比喻', fnEn: 'Metaphorical prologue', detail: '初中三年如同爬山', detailEn: 'Three years of middle school as mountain climbing' },
            { type: '片段一', fn: '山脚迷茫', fnEn: 'Foot confusion', detail: '初一适应期的不安', detailEn: '7th-grade adjustment anxiety' },
            { type: '片段二', fn: '山腰突破', fnEn: 'Midslope breakthrough', detail: '初二物理瓶颈与老师的启发', detailEn: '8th-grade physics bottleneck and teacher\'s insight' },
            { type: '片段三', fn: '山坡坚持', fnEn: 'Upper slope persistence', detail: '初三的努力与友情', detailEn: '9th-grade effort and friendship' },
            { type: '尾声', fn: '点题收束', fnEn: 'Title echo', detail: '珍惜当下的每一步', detailEn: 'Cherishing every present step' }
          ]
        },
        {
          title: '走在山坡上',
          titleEn: 'Walking on the Hillside',
          score: 36,
          maxScore: 40,
          structure: 'diJinShi',
          techniques: ['jieWuShuQing', 'wuGanMiaoXie', 'jiaXuJiaYi', 'biFangNiRen'],
          techniqueMarks: [
            { para: 0, text: '山坡不高，却陪我走过了整个初中', technique: '总起点题', techniqueEn: 'Thematic Overture', effect: '"陪"字拟人化山坡', effectEn: '"Accompanied" quietly personifies the hillside, establishing it as a silent companion from the very first line' },
            { para: 1, text: '草刚冒出头，怯生生的，像我第一天站在新教室门口的样子', technique: '比喻移情', techniqueEn: 'Empathetic Simile', effect: '草的怯生映射自己的不安', effectEn: 'Shy grass becomes a mirror — the hillside reflects the narrator\'s own timidity back at them' },
            { para: 1, text: '山坡上的风带着泥土的气息', technique: '嗅觉描写', techniqueEn: 'Olfactory Detail', effect: '嗅觉让场景立体可感', effectEn: 'The smell of earth grounds an otherwise visual scene in bodily sensation' },
            { para: 2, text: '一场雷阵雨劈头盖脸地浇了下来', technique: '环境象征', techniqueEn: 'Symbolic Weather', effect: '暴雨象征人生挫折', effectEn: 'A sudden storm becomes a physical metaphor for life\'s blindsiding setbacks' },
            { para: 2, text: '雨停之后，空气清爽得像洗过一样', technique: '转折描写', techniqueEn: 'Pivot Description', effect: '雨后清新映射困难后的清醒', effectEn: 'Post-rain freshness mirrors post-crisis clarity — nature models resilience' },
            { para: 3, text: '一片红叶落在了翻开的书页上', technique: '物象特写', techniqueEn: 'Object Close-Up', effect: '红叶与书页交叠构成诗意画面', effectEn: 'A red leaf landing on an open page — nature literally inserting itself into study, fusing the two worlds' },
            { para: 3, text: '像被谁打翻了调色盘——金黄、橘红、深紫，层层叠叠', technique: '色彩描写', techniqueEn: 'Colour Cascade', effect: '多色渲染秋天山坡的丰盈', effectEn: 'A spilled palette of gold, orange, and purple — visual excess mirroring the richness of three years\' accumulation' },
            { para: 4, text: '路面结了薄冰，每一步都要小心翼翼', technique: '触觉暗喻', techniqueEn: 'Tactile Subtext', effect: '薄冰暗喻考前的谨慎心态', effectEn: 'Thin ice under careful feet doubles as the cautious mindset of exam-season — walking as metaphor for living' },
            { para: 4, text: '城市的灯火在薄雾中闪烁，像是远方的某种承诺', technique: '远景象征', techniqueEn: 'Distant-View Symbol', effect: '灯火象征未来的希望', effectEn: 'City lights through mist — distant, uncertain, yet undeniably present, like the future itself' },
            { para: 5, text: '春天教我期待，夏天教我坚韧，秋天教我珍惜，冬天教我沉着', technique: '排比总结', techniqueEn: 'Summary Parallelism', effect: '四季四悟高度凝炼', effectEn: 'Four seasons compressed into four lessons — the essay\'s structural skeleton exposed in a single sentence' }
          ],
          approach: '以"山坡上的四季"为线索，借物抒情，将四季变化与初中不同阶段的心境相对应。',
          approachEn: 'Uses "four seasons on the hillside" as the thread, expressing emotions through nature, paralleling seasonal changes with different stages of middle school.',
          architecture: '春：山坡上的新绿——初入中学的希望；夏：山坡上的暴雨——挫折中的磨炼；秋：山坡上的红叶——收获与沉淀；冬：山坡上的雪——冷静与坚定。',
          architectureEn: 'Spring: New green on the hillside — hope upon entering middle school. Summer: Storms on the hillside — tempering through setbacks. Autumn: Red leaves — harvest and reflection. Winter: Snow — calm and resolve.',
          logic: '四季递进，由外在景物到内在心境的深化。',
          logicEn: 'Four seasons progress, deepening from external scenery to inner state.',
          skills: ['五感描写丰富画面', '借景抒情自然流畅', '四季结构新颖', '议论穿插恰到好处'],
          skillsEn: ['Five-sense descriptions enrich imagery', 'Expressing emotion through scenery flows naturally', 'Four-season structure is fresh', 'Commentary is woven in at just the right moments'],
          fullText: '　　家门口有一条通往后山的小路，山坡不高，却陪我走过了整个初中。\n\n　　春天的山坡是嫩绿色的。刚上初一的那个三月，我第一次独自走上这条路。两旁的草刚冒出头，怯生生的，像我第一天站在新教室门口的样子。山坡上的风带着泥土的气息，我深吸一口，觉得一切都是新鲜的、充满可能的。那时候我想：初中会是什么样呢？会比小学更有趣吗？带着这份期待，我一步步向上走，心里装满了春天。\n\n　　夏天的山坡是浓绿色的，也是暴躁的。初二那年暑假，我被英语补习班折腾得精疲力竭。那天傍晚，我一个人跑到山坡上，坐在一棵老松树下生闷气。忽然，一场雷阵雨劈头盖脸地浇了下来。我来不及跑，只能蹲在树下，看着雨水在脚边汇成小溪，冲走了泥土和落叶。奇怪的是，雨停之后，空气清爽得像洗过一样，山坡上的绿更绿了，花更艳了。我忽然想通了：那些让我难受的事，不就是一场暴雨吗？淋过之后，反而更清醒了。\n\n　　秋天的山坡是彩色的。初三上学期的一个周末，我带着一本历史课本上山背书。走到半山腰，一片红叶落在了翻开的书页上。我抬头望去，整个山坡像被谁打翻了调色盘——金黄、橘红、深紫，层层叠叠。那一刻，我忘了背书，只是安静地站着，看着。三年来读过的书、做过的题、写过的作文，像这满坡的色彩一样，已经在不知不觉中积累成了一片丰盈的风景。\n\n　　冬天的山坡是灰白色的。中考前的最后一个冬天，我顶着寒风走上山坡。山上光秃秃的，只有几棵松树还保持着绿色。路面结了薄冰，每一步都要小心翼翼。但也正是这种安静和冷冽，让我的心沉了下来。我站在山坡上远眺——城市的灯火在薄雾中闪烁，像是远方的某种承诺。\n\n　　走在山坡上，我经历了四季，也经历了成长的四季。山坡没有变，变的是走在上面的我。每一个季节都教会了我一些东西：春天教我期待，夏天教我坚韧，秋天教我珍惜，冬天教我沉着。\n\n　　此刻，我仍走在山坡上。前方的路还很长，但我不再害怕。',
          fullTextEn: '　　Outside my door is a small path leading to the hill behind our house. The slope isn\'t high, but it accompanied me through all of middle school.\n\n　　The spring hillside is tender green. In March of seventh grade, I walked up this path alone for the first time. The grass on both sides had just poked through the soil, shy and tentative, much like me standing at the door of a new classroom on the first day. The wind on the hillside carried the scent of earth. I took a deep breath and felt everything was fresh, full of possibility. I thought: What will middle school be like? Will it be more interesting than elementary school? With that anticipation, I walked upward step by step, my heart brimming with spring.\n\n　　The summer hillside is deep green and temperamental. During the summer vacation of eighth grade, I was exhausted by English tutoring. One evening, I ran to the hillside alone and sat under an old pine tree, fuming silently. Suddenly, a thunderstorm poured down without warning. Too late to run, I crouched under the tree and watched rainwater gather into streams at my feet, sweeping away mud and fallen leaves. Strangely, after the rain stopped, the air felt as clean as if it had been washed. The green on the hillside was greener, the flowers more vivid. It hit me: weren\'t the things that upset me just like a storm? After getting drenched, I actually became clearer.\n\n　　The autumn hillside is multicolored. One weekend in the first semester of ninth grade, I brought a history textbook up the mountain to study. Halfway up, a red leaf landed on my open page. I looked up and saw the entire hillside as if someone had spilled a palette — golden, orange-red, deep purple, layer upon layer. In that moment, I forgot about studying and simply stood there, watching. The books I\'d read, the problems I\'d solved, the essays I\'d written over three years — like the colors covering the hillside, they had accumulated into a rich landscape without my noticing.\n\n　　The winter hillside is grey-white. In the last winter before zhongkao, I walked up the slope against the cold wind. The mountain was bare, with only a few pines retaining their green. Thin ice coated the path, and every step required caution. Yet it was precisely this quiet and crispness that settled my heart. I stood on the hillside gazing into the distance — the city\'s lights flickered in thin mist like some distant promise.\n\n　　Walking on the hillside, I experienced four seasons, and the four seasons of growing up. The hillside hasn\'t changed; what changed is me walking upon it. Each season taught me something: spring taught anticipation, summer taught resilience, autumn taught gratitude, winter taught composure.\n\n　　Right now, I am still walking on the hillside. The road ahead is long, but I am no longer afraid.',
          highlights: [
            { text: '像这满坡的色彩一样，已经在不知不觉中积累成了一片丰盈的风景', textEn: 'Like these colours covering the slope, three years of work had quietly accumulated into a rich landscape', why: '将学习积累比喻为秋天的色彩，新颖而贴切', whyEn: 'Academic effort mapped onto autumn foliage — invisible daily deposits revealed as sudden visual abundance' },
            { text: '山坡没有变，变的是走在上面的我', textEn: 'The hillside hasn\'t changed; what changed is the person walking upon it', why: '辩证思考，点题深刻', whyEn: 'A dialectical pivot that reframes the entire essay: the real subject was never the mountain but the walker' },
            { text: '春天教我期待，夏天教我坚韧，秋天教我珍惜，冬天教我沉着', textEn: 'Spring taught me to hope, summer to endure, autumn to cherish, winter to be still', why: '排比有力，四季感悟精炼概括', whyEn: 'Four seasons, four verbs, four lessons — a compression engine that distils the entire essay into one sentence' }
          ],
          sections: [
            { type: '春', fn: '希望与新奇', fnEn: 'Hope and novelty', detail: '初入中学的期待', detailEn: 'Anticipation of entering middle school' },
            { type: '夏', fn: '挫折与清醒', fnEn: 'Setback and clarity', detail: '暴雨洗礼后的领悟', detailEn: 'Insight after a storm\'s baptism' },
            { type: '秋', fn: '积累与收获', fnEn: 'Accumulation and harvest', detail: '三年积累化为风景', detailEn: 'Three years of accumulation become scenery' },
            { type: '冬', fn: '沉着与坚定', fnEn: 'Composure and resolve', detail: '中考前的冷静力量', detailEn: 'Calm strength before zhongkao' }
          ]
        },
        {
          title: '走在山坡上',
          titleEn: 'Walking on the Hillside',
          score: 35,
          maxScore: 40,
          structure: 'zongFenZong',
          techniques: ['duiHuaQuDong', 'xiJieMiaoXie', 'duiBi', 'yiXiaoJianDa'],
          techniqueMarks: [
            { para: 0, text: '奶奶背着竹篓，戴着草帽，脚步轻快得不像七十岁的人', technique: '外貌速写', techniqueEn: 'Quick-Sketch Portrait', effect: '竹篓草帽勾勒鲜活农妇形象', effectEn: 'Bamboo basket, straw hat, nimble stride — three strokes paint a vivid countrywoman defying her age' },
            { para: 2, text: '你看你，一直低着头赶路，脚步又大又乱', technique: '对话描写', techniqueEn: 'Characterising Dialogue', effect: '奶奶的观察暗含教育智慧', effectEn: 'Grandma observes before she teaches — her critique of the hurried stride is also a diagnosis of the narrator\'s life pace' },
            { para: 3, text: '上坡不是比谁步子大，而是比谁走得稳', technique: '以小见大', techniqueEn: 'Micro-to-Macro', effect: '走路哲学映射学习态度', effectEn: 'Hiking advice as learning philosophy — the hillside becomes a classroom for patience' },
            { para: 4, text: '嫩芽是竖着的，颜色浅，摸起来软。老叶是摊开的，颜色深，摸起来硬', technique: '五感对比', techniqueEn: 'Sensory Contrast', effect: '视觉+触觉双维度区分新老', effectEn: 'Sight and touch together distinguish young from old — precision that only hands-on experience can teach' },
            { para: 5, text: '你现在是嫩芽，该好好长', technique: '比喻', techniqueEn: 'Metaphor', effect: '把成长阶段比喻为茶叶生长', effectEn: 'A tea-leaf metaphor for adolescence — you don\'t rush a bud into becoming a branch' },
            { para: 5, text: '等你长成老叶，就该撑起整棵树了', technique: '延伸比喻', techniqueEn: 'Extended Metaphor', effect: '老叶撑树暗示成人的责任', effectEn: 'The old leaf holding up the tree maps exactly onto adult responsibility — the metaphor carries its own weight' },
            { para: 6, text: '我总羡慕那些已经"到达山顶"的人', technique: '心理描写', techniqueEn: 'Inner Monologue', effect: '呈现青少年的焦虑心理', effectEn: 'Adolescent anxiety laid bare — the compulsion to compare one\'s middle with someone else\'s finish line' },
            { para: 7, text: '炊烟袅袅，几只鸡在院子里悠闲地踱步', technique: '环境描写', techniqueEn: 'Rural Landscape', effect: '田园风光烘托山坡生活的安宁', effectEn: 'Wisps of smoke and strolling chickens compose a pastoral tableau — unhurried beauty as counter-argument to ambition' },
            { para: 8, text: '我在这个山坡上走了一辈子，从来没上过山顶', technique: '哲理对话', techniqueEn: 'Wisdom Dialogue', effect: '以朴素语言传达反功利主义', effectEn: 'A lifetime on the slope, no summit ever sought — peasant simplicity dismantling the cult of achievement' },
            { para: 9, text: '走在山坡上，不是为了到达山顶，而是为了认真走好脚下的每一步', technique: '点题升华', techniqueEn: 'Thematic Elevation', effect: '将全文感悟凝炼为一句话', effectEn: 'The entire essay distilled into one sentence — the journey is the destination, spoken without cliché' }
          ],
          approach: '以一次与奶奶上山采茶的经历为主线，通过祖孙对话揭示"走在山坡上"的人生哲理。',
          approachEn: 'Uses a tea-picking trip with grandmother as the main thread, revealing the life philosophy of "walking on the hillside" through their dialogue.',
          architecture: '总起：跟奶奶上山采茶；分述：采茶过程中的三段对话——关于快慢、关于选择、关于风景；总结：理解山坡的人生意义。',
          architectureEn: 'Overview: Going tea-picking with grandmother. Body: Three dialogues during picking — about pace, choices, and scenery. Summary: Understanding the life meaning of the hillside.',
          logic: '三段对话层层深入，从具体的采茶到抽象的人生智慧。',
          logicEn: 'Three dialogues progressively deepen, from concrete tea-picking to abstract life wisdom.',
          skills: ['对话驱动情节自然', '以小见大手法娴熟', '细节描写画面感强', '祖孙互动温暖动人'],
          skillsEn: ['Dialogue drives the plot naturally', 'Small-detail-big-theme technique is skillfully applied', 'Detailed descriptions create strong imagery', 'Grandparent-grandchild interaction is warm and moving'],
          fullText: '　　清明节前一天，奶奶叫我一起上山采茶。\n\n　　奶奶家在滇南的一个小村子里，屋后就是连绵的茶山。那天早上天刚亮，我们就出发了。奶奶背着竹篓，戴着草帽，脚步轻快得不像七十岁的人。我跟在后面，很快就气喘吁吁了。\n\n　　"奶奶，你怎么走这么快？"我弯着腰问。\n\n　　奶奶停下来等我，笑着说："我不是走得快，是你走得急。你看你，一直低着头赶路，脚步又大又乱。走山坡，要慢慢来，步子小一点，稳一点。"\n\n　　我试着放慢脚步，果然不那么累了。原来，上坡不是比谁步子大，而是比谁走得稳。我想起这学期的月考——我总想一口气把成绩提上去，每天熬夜刷题，结果反而越考越差。也许，学习也像走山坡，急不来。\n\n　　到了茶园，满坡的茶树翠绿欲滴。奶奶教我摘茶叶："只摘最嫩的一芽两叶，老叶子不要。"我看着满树的叶子，觉得都差不多。奶奶拉过一根枝条，指给我看："你看，嫩芽是竖着的，颜色浅，摸起来软。老叶是摊开的，颜色深，摸起来硬。"\n\n　　"那老叶子就没用了吗？"我随口问。\n\n　　"老叶子有老叶子的用处，留着让茶树长得更壮。"奶奶认真地说，"就像人一样，每个阶段都有每个阶段该做的事。你现在是嫩芽，该好好长；等你长成老叶，就该撑起整棵树了。"\n\n　　我低头采茶，心里却在想奶奶的话。是啊，我总羡慕那些已经"到达山顶"的人——考上好学校的学长、拿了奖的同学。可我忘了，我现在是嫩芽，最重要的事不是变成别人，而是好好地长。\n\n　　中午，我们坐在山坡上吃饭团。阳光暖暖的，风里有茶叶的清香。我看着山坡下的村子，炊烟袅袅，几只鸡在院子里悠闲地踱步。远处的山顶隐在云雾里，看不真切。\n\n　　"奶奶，山顶上有什么？"\n\n　　"我也不知道，"奶奶嚼着饭团说，"我在这个山坡上走了一辈子，从来没上过山顶。但我觉得，山坡上就挺好的。"\n\n　　那一刻，我忽然懂了。走在山坡上，不是为了到达山顶，而是为了认真走好脚下的每一步。',
          fullTextEn: '　　The day before Qingming Festival, Grandma asked me to pick tea with her on the mountain.\n\n　　Grandma\'s home is in a small village in southern Yunnan, with rolling tea hills right behind the house. We set out at dawn. Grandma carried a bamboo basket and wore a straw hat, her steps so nimble you\'d never guess she was seventy. I followed behind and was soon panting.\n\n　　"Grandma, how do you walk so fast?" I asked, bent over.\n\n　　She stopped and waited for me with a smile: "I\'m not walking fast — you\'re walking too hurriedly. Look at you, head down, rushing, with long messy strides. On a hillside, you should go slowly, with smaller, steadier steps."\n\n　　I tried slowing down and indeed felt less tired. It turns out climbing isn\'t about who takes the biggest steps, but who walks most steadily. I thought of this semester\'s monthly exams — I\'d been trying to boost my grades all at once, staying up late grinding problems, only to score worse and worse. Perhaps learning, like climbing a hillside, cannot be rushed.\n\n　　At the tea garden, the entire slope glistened with lush green tea bushes. Grandma taught me to pick: "Only the tenderest bud with two leaves. Leave the old leaves." I looked at the tree full of leaves — they all seemed the same. Grandma pulled a branch over and pointed: "See, the young buds stand upright, lighter in color, soft to touch. Old leaves spread flat, darker, and feel stiff."\n\n　　"So old leaves are useless?" I asked casually.\n\n　　"Old leaves have their own purpose — they stay to help the tea plant grow stronger," Grandma said seriously. "Just like people. Every stage has its own tasks. You\'re a young bud now — your job is to grow well. When you become an old leaf, it\'ll be your turn to support the whole tree."\n\n　　I lowered my head to pick tea, but my mind lingered on her words. She was right — I always envied people who\'d already "reached the summit" — seniors who got into good schools, classmates who won prizes. But I forgot that I\'m a young bud now, and the most important thing isn\'t becoming someone else, but growing well.\n\n　　At noon, we sat on the hillside eating rice balls. The sunshine was warm, and the breeze carried the fragrance of tea leaves. I looked down at the village below — wisps of cooking smoke, chickens strolling leisurely in courtyards. The distant summit hid in clouds, indistinct.\n\n　　"Grandma, what\'s at the top of the mountain?"\n\n　　"I don\'t know either," Grandma said, chewing her rice ball. "I\'ve walked on this hillside my whole life and never been to the top. But I think the hillside is pretty good."\n\n　　In that moment, I suddenly understood. Walking on the hillside isn\'t about reaching the summit — it\'s about walking each step beneath your feet with care.',
          highlights: [
            { text: '上坡不是比谁步子大，而是比谁走得稳', textEn: 'Climbing isn\'t about who takes the biggest steps — it\'s about who walks most steadily', why: '用采茶经验提炼人生道理，以小见大', whyEn: 'A tea-farmer\'s hiking advice doubles as a philosophy of learning: consistency outperforms ambition' },
            { text: '你现在是嫩芽，该好好长', textEn: 'You\'re a young bud right now — your one job is to grow well', why: '奶奶的比喻朴素而深刻，余味无穷', whyEn: 'Grandma\'s metaphor is breathtakingly simple yet carries a lifetime\'s wisdom: each stage has its own purpose' },
            { text: '我在这个山坡上走了一辈子，从来没上过山顶。但我觉得，山坡上就挺好的', textEn: 'I\'ve walked this hillside my whole life and never once reached the top. But I think the hillside is pretty good', why: '哲理性结尾，朴素中见大智慧', whyEn: 'A seventy-year-old who never sought the summit — quietly dismantling the cult of arrival with peasant serenity' }
          ],
          sections: [
            { type: '总起', fn: '引出场景', fnEn: 'Scene introduction', detail: '清明采茶，跟奶奶上山', detailEn: 'Qingming tea-picking, going up the mountain with Grandma' },
            { type: '对话一', fn: '快慢之道', fnEn: 'The way of pace', detail: '走稳比走快重要', detailEn: 'Walking steadily matters more than walking fast' },
            { type: '对话二', fn: '嫩芽之喻', fnEn: 'Bud metaphor', detail: '每个阶段有该做的事', detailEn: 'Every stage has its own tasks' },
            { type: '对话三', fn: '山坡之悟', fnEn: 'Hillside insight', detail: '不必执着于山顶', detailEn: 'No need to fixate on the summit' },
            { type: '总结', fn: '点题收束', fnEn: 'Title tie-in', detail: '走好脚下的每一步', detailEn: 'Walking each step with care' }
          ]
        },
        {
          title: '走在山坡上',
          titleEn: 'Walking on the Hillside',
          score: 36,
          maxScore: 40,
          structure: 'daoXuShi',
          techniques: ['daoXu', 'xinLiMiaoXie', 'huanJingChenTuo', 'shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '中考结束的第二天，我一个人又走上了那条山坡', technique: '倒叙', techniqueEn: 'Flashback Opening', effect: '"又"字暗示重访，制造悬念', effectEn: 'The word "again" signals a return visit, immediately seeding the question: what happened before?' },
            { para: 1, text: '只是今天身边少了一个人', technique: '悬念设置', techniqueEn: 'Suspense Planting', effect: '点出缺席，激发好奇', effectEn: 'Naming an absence rather than a presence turns the entire hillside into a space of longing' },
            { para: 2, text: '你也是来躲清静的？', technique: '对话引入', techniqueEn: 'Dialogue Hook', effect: '一句话建立两个性格', effectEn: 'A single question reveals two introverts finding each other — instant characterization through speech' },
            { para: 3, text: '夕阳把山坡染成了金色', technique: '环境渲染', techniqueEn: 'Atmospheric Colouring', effect: '金色夕阳烘托约定的神圣感', effectEn: 'Golden sunset bathes the pact in visual warmth, elevating a casual promise to something sacred' },
            { para: 3, text: '那个约定，被夕阳和风一起记住了', technique: '拟人', techniqueEn: 'Personification', effect: '自然成为约定的见证者', effectEn: 'Nature witnesses and stores the promise — giving it a permanence beyond human memory' },
            { para: 5, text: '忽然感觉肩膀上多了一件外套', technique: '触觉转折', techniqueEn: 'Tactile Pivot', effect: '无声动作取代语言和解', effectEn: 'A jacket draped on a shoulder says more than any apology — the body speaks what words cannot' },
            { para: 5, text: '雪花落在我们的头发上，轻轻的，像某种祝福', technique: '环境象征', techniqueEn: 'Symbolic Weather', effect: '雪花象征和解的纯洁与祝福', effectEn: 'Snowflakes as benediction — nature sealing the reconciliation with purity and gentleness' },
            { para: 6, text: '有时候什么都不说，就那么安静地并肩坐着', technique: '留白', techniqueEn: 'Narrative Silence', effect: '沉默比语言更能写出默契', effectEn: 'Shared silence communicates a depth of understanding that conversation could never match' },
            { para: 7, text: '等十年后我们再来挖', technique: '时间投射', techniqueEn: 'Temporal Projection', effect: '埋瓶子将友情延伸到未来', effectEn: 'Burying a bottle projects the friendship forward across a decade — hope crystallised in glass' },
            { para: 9, text: '走过的路不会消失', technique: '首尾呼应', techniqueEn: 'Echo Closure', effect: '呼应倒叙开头的"重走"', effectEn: 'The "roads never disappear" answers the opening "walked up again" — the hillside is both setting and thesis' }
          ],
          approach: '倒叙开头，以中考结束后重走那条山坡为起点，回忆初中三年和好友在山坡上的点点滴滴。',
          approachEn: 'Flashback opening: starts with revisiting the hillside after zhongkao, recalling moments with a close friend on the hillside over three years.',
          architecture: '倒叙：中考后独自重走山坡；回忆一：初一与好友在山坡上的约定；回忆二：初二吵架后在山坡上和好；回忆三：初三分别前在山坡上的最后一次散步；回到当下：山坡依旧，友情长存。',
          architectureEn: 'Flashback: Walking the hillside alone after zhongkao. Memory 1: Making a pact with a friend in 7th grade. Memory 2: Reconciling after a fight in 8th grade. Memory 3: Last walk together before parting in 9th grade. Return to present: The hillside remains, friendship endures.',
          logic: '从"现在"到"过去"再回到"现在"，三段回忆承载友情成长。',
          logicEn: 'From present to past and back, three memories carry the growth of a friendship.',
          skills: ['倒叙制造悬念和情感张力', '三段回忆形成完整弧线', '心理描写细腻动人', '环境衬托情感变化'],
          skillsEn: ['Flashback creates suspense and emotional tension', 'Three memories form a complete arc', 'Nuanced and moving psychological descriptions', 'Environment mirrors emotional changes'],
          fullText: '　　中考结束的第二天，我一个人又走上了那条山坡。\n\n　　七月的阳光很烈，山坡上的草长得比人还高。路还是那条路，弯弯曲曲地穿过松林，通向半山腰的那片空地。只是今天身边少了一个人——我最好的朋友，阿岚。\n\n　　三年前，也是在这条山坡上，我们第一次相遇。那天是初一的军训结束，我一个人偷偷跑出学校，想找个安静的地方待一会儿。没想到，半山腰的空地上已经坐着一个人。她抬头看了我一眼，说："你也是来躲清静的？"我们就这样认识了。\n\n　　那天傍晚，夕阳把山坡染成了金色。我们坐在草地上，聊了很久。她说她想考昆一中，我说我也想。我们拉了钩，约定三年后一起考上。那个约定，被夕阳和风一起记住了。\n\n　　可友情不是一帆风顺的。初二那年冬天，我们因为一件很小的事大吵了一架——我不小心弄丢了她借我的笔记本。她很生气，一个月不和我说话。那段日子，我每天放学都一个人走上山坡，坐在我们常坐的那个位置，心里又后悔又委屈。\n\n　　一个下雪天，我正在山坡上发呆，忽然感觉肩膀上多了一件外套。回头一看，是阿岚。她的眼圈红红的，递给我一封信。信上写着："对不起，一本笔记本不值得失去一个朋友。我们和好吧。"我没说话，只是抱了抱她。雪花落在我们的头发上，轻轻的，像某种祝福。\n\n　　初三的日子过得飞快。我们每个周末都会来山坡上走走，有时候背书，有时候聊天，有时候什么都不说，就那么安静地并肩坐着。中考前一周，我们最后一次一起走上山坡。她忽然停下来，从口袋里掏出一个小瓶子，里面装着一张纸条。\n\n　　"三年前我们在这儿许了愿，"她说，"今天，我想把新的愿望埋在这里。等十年后我们再来挖。"\n\n　　我也写了一张纸条，和她的一起放进瓶子里。我们在那棵最大的松树下挖了一个小坑，把瓶子埋了进去。\n\n　　此刻，我站在那棵松树旁边，山风吹过耳畔。阿岚去了另一个城市上高中，但这条山坡记得我们的一切——约定、争吵、和好、告别。\n\n　　走在山坡上，我知道，有些人可能会走散，但走过的路不会消失。',
          fullTextEn: '　　The day after zhongkao ended, I walked up that hillside alone again.\n\n　　July sunlight blazed. The grass on the hillside had grown taller than a person. The path was still the same — winding through the pine forest toward the clearing at the midpoint. Only today, the person who should have been beside me was missing — my best friend, A Lan.\n\n　　Three years ago, on this very hillside, we first met. It was after the seventh-grade military training ended. I had snuck out of school alone, looking for a quiet place to be. To my surprise, someone was already sitting in the clearing. She looked up and said, "You\'re here to escape the noise too?" And just like that, we became friends.\n\n　　That evening, the sunset dyed the hillside gold. We sat on the grass and talked for a long time. She said she wanted to get into Kunming No.1 High School. I said I did too. We pinky-swore, promising to make it in three years. That promise was remembered by the sunset and the wind together.\n\n　　But friendship isn\'t always smooth. In the winter of eighth grade, we had a huge fight over something trivial — I accidentally lost a notebook she\'d lent me. She was furious and didn\'t speak to me for a month. During that time, I walked up the hillside alone after school every day and sat in our usual spot, feeling both regretful and aggrieved.\n\n　　One snowy day, I was staring blankly on the hillside when I felt a jacket drape over my shoulders. I turned around — it was A Lan. Her eyes were red. She handed me a letter. It read: "I\'m sorry. A notebook isn\'t worth losing a friend. Let\'s make up." I said nothing, just hugged her. Snowflakes landed on our hair, light as a benediction.\n\n　　Ninth grade flew by. Every weekend we walked the hillside — sometimes studying, sometimes chatting, sometimes saying nothing at all, just sitting shoulder to shoulder in silence. A week before zhongkao, we walked up the hillside one last time. She suddenly stopped and pulled a small bottle from her pocket with a note inside.\n\n　　"We made a wish here three years ago," she said. "Today, I want to bury a new wish here. We\'ll come back and dig it up in ten years."\n\n　　I wrote a note too and placed it alongside hers. Beneath the largest pine tree, we dug a small hole and buried the bottle.\n\n　　Now I stand beside that pine tree, the mountain breeze brushing past my ears. A Lan has gone to another city for high school, but this hillside remembers everything — our promise, our fight, our reconciliation, our farewell.\n\n　　Walking on the hillside, I know that some people may drift apart, but the roads we\'ve walked together never disappear.',
          highlights: [
            { text: '那个约定，被夕阳和风一起记住了', textEn: 'That promise was witnessed by the sunset and the wind alike', why: '拟人化处理，赋予自然以记忆，浪漫而诗意', whyEn: 'Personifying nature as keeper of a promise lends the pact a permanence that mere words could never achieve' },
            { text: '雪花落在我们的头发上，轻轻的，像某种祝福', textEn: 'Snowflakes settled on our hair, light as a benediction', why: '环境衬托和好的温暖瞬间，细腻动人', whyEn: 'Snow becomes a silent blessing — nature consecrating the reconciliation with its gentlest gesture' },
            { text: '有些人可能会走散，但走过的路不会消失', textEn: 'Some people may drift apart, but the roads we walked together never disappear', why: '结尾升华友情主题，意蕴深长', whyEn: 'A quiet distinction between people (who move) and paths (which endure) — friendship outlives physical proximity' }
          ],
          sections: [
            { type: '倒叙', fn: '独自重走', fnEn: 'Solo revisit', detail: '中考后重返山坡', detailEn: 'Returning to the hillside after zhongkao' },
            { type: '回忆一', fn: '初遇约定', fnEn: 'First meeting pact', detail: '初一在山坡上认识阿岚', detailEn: 'Meeting A Lan on the hillside in 7th grade' },
            { type: '回忆二', fn: '争吵和好', fnEn: 'Fight and reconciliation', detail: '初二雪天和好', detailEn: 'Reconciling on a snowy day in 8th grade' },
            { type: '回忆三', fn: '离别埋愿', fnEn: 'Farewell wish-burying', detail: '中考前埋下时间胶囊', detailEn: 'Burying a time capsule before zhongkao' },
            { type: '回到当下', fn: '友情长存', fnEn: 'Enduring friendship', detail: '人会走散，路不会消失', detailEn: 'People may part, but paths never vanish' }
          ]
        }
      ]
    },
    {
      id: 'yn2022_comp2',
      paperId: 'yn2022',
      year: 2022,
      region: '云南省',
      prompt: '______长伴我左右',
      promptEn: '______ Has Always Been by My Side',
      context: '请将题目补充完整后写一篇作文。不少于600字。',
      contextEn: 'Complete the title and write an essay of at least 600 words.',
      type: 'halfTitle',
      category: '半命题记叙文',
      categoryEn: 'Half-title Narrative',
      wordCount: 600,
      guide: {
        analysis: '半命题"______长伴我左右"的关键在于填空。可以填具体事物（书香、音乐）、抽象概念（勇气、爱）、或某个人（妈妈、老师）。"长伴"强调持续性和陪伴感。',
        analysisEn: 'The key is filling the blank — concrete things (books, music), abstract concepts (courage, love), or people (mother, teacher). "Always" emphasizes continuity and companionship.',
        keyPoints: ['填入的词要有意义且能展开', '体现"长伴"的时间跨度', '写出陪伴对成长的影响', '选材要真实具体'],
        keyPointsEn: ['The filled word should be meaningful', 'Show the time span of "always"', 'Demonstrate impact on growth', 'Material should be authentic'],
        pitfalls: ['填入的词太大太空', '只写一个时间点', '写成感谢信'],
        pitfallsEn: ['Word too broad', 'Only one moment', 'Thank-you letter without narrative']
      },
      essays: [
        {
          title: '书香长伴我左右',
          titleEn: 'The Fragrance of Books Has Always Been by My Side',
          score: 37, maxScore: 40,
          structure: 'shiJianXian',
          techniques: ['wuGanMiaoXie', 'xiJieMiaoXie', 'diJinShi', 'shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '如果记忆有气味，我的一定是书香', technique: '通感', techniqueEn: 'Synesthesia', effect: '把记忆嗅觉化，开篇新颖', effectEn: 'Translating memory into scent creates an immediate sensory hook that transcends the visual' },
            { para: 1, text: '声音很轻，像夜风拂过窗帘', technique: '比喻', techniqueEn: 'Simile', effect: '母亲的声音可视可触', effectEn: 'Mom\'s voice becomes a night breeze — audible softness rendered in tactile imagery' },
            { para: 1, text: '在孙悟空的筋斗云上飞了一圈又一圈', technique: '想象', techniqueEn: 'Fantasy Imagery', effect: '童年阅读的沉浸感', effectEn: 'A child literally riding the Monkey King\'s cloud — imagination dissolving the boundary between book and life' },
            { para: 2, text: '只有两排铁架子，却是我的秘密乐园', technique: '对比', techniqueEn: 'Contrast', effect: '简陋与丰富的反差', effectEn: 'Two iron shelves versus a paradise — the contrast spotlights how imagination outweighs material conditions' },
            { para: 2, text: '让我第一次为一只蜘蛛流泪', technique: '细节描写', techniqueEn: 'Specific Detail', effect: '具体反应写出阅读的触动', effectEn: 'Crying for a spider is oddly specific — and precisely because of that, utterly convincing' },
            { para: 2, text: '那些角色像安静的朋友', technique: '拟人', techniqueEn: 'Personification', effect: '书中角色被赋予陪伴功能', effectEn: 'Characters become quiet friends — companionship that asks nothing in return' },
            { para: 3, text: '翻开一本落满灰尘的《老人与海》', technique: '物象细节', techniqueEn: 'Object Detail', effect: '灰尘暗示忽视阅读的状态', effectEn: 'Dust on the book is a physical measure of how long the narrator had abandoned reading' },
            { para: 3, text: '这句话像一束光，穿透了心里的灰暗', technique: '比喻', techniqueEn: 'Light Metaphor', effect: '名言的力量被具象化', effectEn: 'Literature\'s power rendered as a beam of light piercing interior darkness — abstract made visible' },
            { para: 4, text: '阅读不再只是消遣，而变成了思考的方式', technique: '议论升华', techniqueEn: 'Reflective Elevation', effect: '点明阅读层次的跃升', effectEn: 'A one-sentence thesis marks the qualitative leap: reading as entertainment → reading as cognition' },
            { para: 5, text: '书香已经融入了我的日常，像呼吸一样自然', technique: '首尾呼应', techniqueEn: 'Echo Closure', effect: '呼应开头的"气味"意象', effectEn: 'The breathing simile circles back to the opening scent — books are no longer held; they are inhaled' }
          ],
          approach: '以时间为线索，从童年到初中，写"书香"如何在不同阶段给予陪伴与力量。',
          approachEn: 'Chronological thread from childhood to middle school, showing how books provide companionship and strength at different stages.',
          architecture: '童年：妈妈的睡前故事；小学：独自阅读的快乐；初中：挫折中从书中获得力量；当下：书香已成为生命一部分。',
          architectureEn: 'Childhood: Mom\'s bedtime stories. Elementary: Joy of independent reading. Middle school: Finding strength in books during setback. Present: Books as part of life.',
          logic: '书香从"被动接受"到"主动追寻"到"内化为力量"。',
          logicEn: 'From passive reception to active pursuit to internalized strength.',
          skills: ['五感描写还原阅读场景', '三个阶段自然递进', '首尾呼应'],
          skillsEn: ['Five-sense descriptions recreate reading scenes', 'Three stages progress naturally', 'Opening-closing echo'],
          fullText: '　　如果记忆有气味，我的一定是书香。\n\n　　最早的书香来自妈妈。小时候每天睡前，妈妈都会靠在床头给我讲故事。她的声音很轻，像夜风拂过窗帘。我闭着眼睛，闻着书页间淡淡的油墨味，在孙悟空的筋斗云上飞了一圈又一圈，直到沉入梦乡。\n\n　　上了小学，我开始自己读书。学校图书馆只有两排铁架子，却是我的秘密乐园。每天午休，我都会抱一本书坐在角落。《夏洛的网》让我第一次为一只蜘蛛流泪；《草房子》让我知道了另一种童年；《小王子》让我明白"重要的东西用眼睛是看不见的"。那些角色像安静的朋友，陪我度过了整个小学。\n\n　　进入初中后，学业骤然加重。初二那年，我在全区作文比赛中连入围都没有，觉得多年的阅读全是白费。那个周末，我翻开一本落满灰尘的《老人与海》。读到"一个人可以被毁灭，但不能被打败"时，忽然愣住了。这句话像一束光，穿透了心里的灰暗。真正的失败不是没获奖，而是因为没获奖就放弃。\n\n　　从那天起，我重新拿起了笔，开始写读书笔记。渐渐地，阅读不再只是消遣，而变成了思考的方式。\n\n　　现在，我的书桌上永远堆着几本书。早上出门前翻几页，晚上写完作业后再翻几页。书香已经融入了我的日常，像呼吸一样自然。\n\n　　从妈妈的睡前故事到挫折后的《老人与海》——书香长伴我左右，它不喧哗、不张扬，却从未缺席。',
          fullTextEn: '　　If memories had a scent, mine would smell of books.\n\n　　The earliest book fragrance came from Mom. Every night before sleep, she\'d lean against the headboard and tell stories. Her voice was soft as a night breeze. Eyes closed, breathing in faint ink between pages, I rode Sun Wukong\'s cloud until drifting into dreams.\n\n　　In elementary school, I began reading alone. The library had just two metal shelves, yet it was my paradise. Every lunch, I\'d grab a book and sit in a corner. "Charlotte\'s Web" made me cry for a spider; "Grass House" showed me another childhood; "The Little Prince" taught me what\'s essential is invisible.\n\n　　After entering middle school, coursework intensified. In eighth grade, I didn\'t even place in the district essay competition, feeling all my reading was wasted. That weekend, I opened a dusty "Old Man and the Sea." At "a man can be destroyed but not defeated," I froze. That sentence pierced my dark clouds. True failure isn\'t losing a prize — it\'s giving up because you lost.\n\n　　From that day, I picked up my pen again, began keeping reading notes. Gradually, reading became a way of thinking, not just entertainment.\n\n　　Now, books always sit on my desk. A few pages before leaving, a few more after homework. Books have merged into daily life, as natural as breathing.\n\n　　From Mom\'s bedtime stories to "The Old Man and the Sea" after setback — books have always been by my side. Never loud, never showy, but never absent.',
          highlights: [
            { text: '如果记忆有气味，我的一定是书香', textEn: 'If memories had a scent, mine would smell of ink and paper', why: '通感开头新颖动人', whyEn: 'A synesthetic premise that makes the abstract (memory) tangible (scent) — hooking the reader with sensory surprise' },
            { text: '一个人可以被毁灭，但不能被打败', textEn: 'A man can be destroyed but not defeated', why: '引用恰当，转折有力', whyEn: 'Hemingway\'s line lands at the exact emotional nadir, turning literary wisdom into a personal turning point' },
            { text: '不喧哗、不张扬，却从未缺席', textEn: 'Never loud, never showy — yet never once absent', why: '拟人化结尾温暖有力', whyEn: 'Personifying books as a modest companion creates a warm, resonant closure that mirrors the quiet act of reading itself' }
          ],
          sections: [
            { type: '开头', fn: '通感引入', fnEn: 'Synesthetic opening', detail: '气味引出书香', detailEn: 'Scent introduces books' },
            { type: '童年', fn: '萌芽期', fnEn: 'Seedling', detail: '妈妈的故事', detailEn: 'Mom\'s stories' },
            { type: '小学', fn: '成长期', fnEn: 'Growth', detail: '独立阅读', detailEn: 'Independent reading' },
            { type: '初中', fn: '深化期', fnEn: 'Deepening', detail: '挫折中获力量', detailEn: 'Strength from setback' },
            { type: '结尾', fn: '呼应收束', fnEn: 'Echo close', detail: '从未缺席', detailEn: 'Never absent' }
          ]
        },
        {
          title: '妈妈的唠叨长伴我左右',
          titleEn: 'Mom\'s Nagging Has Always Been by My Side',
          score: 36, maxScore: 40,
          structure: 'qiChengZhuanHe',
          techniques: ['duiBi', 'xiJieMiaoXie', 'xinLiMiaoXie', 'yiXiaoJianDa'],
          techniqueMarks: [
            { para: 0, text: '"多喝水""早点睡""路上小心"', technique: '排比引入', techniqueEn: 'Triple-Phrase Opening', effect: '三连唠叨迅速建立场景', effectEn: 'Three stock phrases in rapid fire establish the nagging soundscape from sentence one' },
            { para: 1, text: '像一首单曲循环的歌', technique: '比喻', techniqueEn: 'Simile', effect: '把唠叨比作循环播放，暗含厌烦', effectEn: 'Nagging as a song stuck on repeat — the simile captures both monotony and inescapability' },
            { para: 2, text: '她刚开口，我直接摔门出去了', technique: '动作描写', techniqueEn: 'Action Detail', effect: '摔门动作写尽叛逆', effectEn: 'A slammed door condenses an entire adolescent rebellion into one sharp sound' },
            { para: 4, text: '被蚊子咬了十几个包——没带驱蚊水', technique: '因果对照', techniqueEn: 'Cause-Effect Contrast', effect: '后果与唠叨一一对应', effectEn: 'Each consequence maps exactly to a rejected nagging line — reality vindicates the mother' },
            { para: 4, text: '每一句都是此刻最需要的', technique: '顿悟转折', techniqueEn: 'Epiphany Turn', effect: '从嫌烦到顿悟的情感反转', effectEn: 'The pivot from irritation to recognition hits with the force of physical discomfort proving emotional truth' },
            { para: 5, text: '三秒后她回了一长串', technique: '细节特写', techniqueEn: 'Close-Up Detail', effect: '"三秒"暗写妈妈始终在等', effectEn: 'A three-second reply time betrays a mother who never stops watching her phone for her child\'s name' },
            { para: 5, text: '眼泪啪嗒掉下来', technique: '拟声细节', techniqueEn: 'Onomatopoeia', effect: '声响词让情感释放更真实', effectEn: 'The onomatopoeic drip makes the emotional break audible — readers hear the tears fall' },
            { para: 6, text: '她说"多喝水"，因为知道我上课忘喝', technique: '排比揭示', techniqueEn: 'Revelatory Parallelism', effect: '逐句揭秘唠叨背后的观察与爱', effectEn: 'Each "she says X because Y" peels back a layer, revealing surveillance born not of control but of love' },
            { para: 7, text: '不再摔门，而是回头笑笑', technique: '前后对比', techniqueEn: 'Before-After Contrast', effect: '与前文摔门形成鲜明反差', effectEn: 'The smile that replaces the slam measures the full distance the narrator has travelled emotionally' },
            { para: 8, text: '最不动听、却最动人的声音', technique: '矛盾修辞', techniqueEn: 'Oxymoron', effect: '精炼概括全文主题', effectEn: 'An elegant contradiction that resolves the entire essay into a single paradox of love' }
          ],
          approach: '态度变化为主线：厌烦→反抗→理解→感恩。',
          approachEn: 'Attitude change as main thread: annoyance → rebellion → understanding → gratitude.',
          architecture: '起：唠叨场景；承：叛逆期反抗；转：夏令营独处后顿悟；合：感恩唠叨是爱。',
          architectureEn: 'Intro: Nagging scenes. Dev: Adolescent rebellion. Turn: Camp solo epiphany. Close: Nagging is love.',
          logic: '从表面厌烦到内心理解的转变。',
          logicEn: 'Shift from surface annoyance to inner understanding.',
          skills: ['前后对比鲜明', '细节刻画妈妈形象', '心理转变真实', '以小见大'],
          skillsEn: ['Sharp before/after contrast', 'Detailed Mom characterization', 'Authentic psychological shift', 'Small details, big theme'],
          fullText: '　　"多喝水""早点睡""路上小心"——这些话，我听了不下一万遍。\n\n　　妈妈的唠叨像闹钟一样准时。早上六点："快起床！"出门前："水壶带了吗？"晚上十点："别看手机了！"这些话翻来覆去，像一首单曲循环的歌。\n\n　　初二那年，我进入叛逆期。妈妈每说一句，我就顶一句。"多穿件衣服"——"我不冷！"有一次她刚开口，我直接摔门出去了。\n\n　　暑假学校组织五天夏令营。出发前妈妈又开始念叨防晒霜、驱蚊水、换洗衣服。我不耐烦地打断："妈，我不是三岁小孩！"\n\n　　第一晚被蚊子咬了十几个包——没带驱蚊水。第二天暴晒头疼——忘了防晒霜。第三天降温冻得发抖——只穿了短袖。躺在硬板床上，我忽然想起妈妈说的每一句话，每一句都是此刻最需要的。\n\n　　我偷偷发消息："妈，驱蚊水该放哪个兜？"三秒后她回了一长串，末尾加了："想你了，注意身体。"我盯着屏幕，眼泪啪嗒掉下来。\n\n　　那之后，我对唠叨有了不同理解。她说"多喝水"，因为知道我上课忘喝；她说"早点睡"，因为看过我熬夜后的黑眼圈；她说"路上小心"，因为每次我晚归她都在阳台等。那些重复了一万遍的话，不是噪音，是最日常的爱。\n\n　　现在出门前，妈妈依然说"路上小心"。我不再摔门，而是回头笑笑："知道了，妈。"\n\n　　妈妈的唠叨长伴我左右——最不动听、却最动人的声音。',
          fullTextEn: '　　"Drink water." "Sleep early." "Be careful." These phrases — ten thousand times and counting.\n\n　　Mom\'s nagging is clockwork. 6 AM: "Get up!" Before leaving: "Water bottle?" 10 PM: "Put down your phone!" Like a song on repeat.\n\n　　In eighth grade, rebellion set in. For every sentence, I fired one back. Once she barely started speaking and I slammed the door.\n\n　　Summer camp — five days. Before departure, Mom listed sunscreen, repellent, clothes. I snapped: "I\'m not three!"\n\n　　Night one: dozen mosquito bites — no repellent. Day two: headache from sun — forgot sunscreen. Day three: shivering — only a t-shirt. On the hard bed, I recalled every nagging word. Each was exactly what I needed.\n\n　　I secretly texted: "Mom, which pocket for the repellent?" Three seconds later, a long reply, ending with: "Miss you. Take care." Tears fell on the screen.\n\n　　After that, my understanding changed. "Drink water" — she knows I forget in class. "Sleep early" — she\'s seen my dark circles. "Be careful" — she waits on the balcony when I\'m late. Those ten-thousand-times words aren\'t noise — they\'re the most everyday love.\n\n　　Now before leaving, Mom still says "be careful." I no longer slam the door: "Got it, Mom."\n\n　　Mom\'s nagging has always been by my side — the least melodious yet most moving sound.',
          highlights: [
            { text: '三秒后她回了一长串', textEn: 'Three seconds later — a wall of text', why: '"三秒"体现妈妈时刻等候', whyEn: 'The three-second reply reveals a mother who never truly puts her phone down — always watching, always ready' },
            { text: '不是噪音，是最日常的爱', textEn: 'Not noise — the most ordinary form of love', why: '重新定义唠叨', whyEn: 'A single pivot reframes ten thousand repetitions from annoyance into devotion' },
            { text: '最不动听、却最动人', textEn: 'The least melodious voice, yet the most moving', why: '矛盾修辞精炼概括', whyEn: 'An oxymoron that compresses the entire essay\'s arc into six characters' }
          ],
          sections: [
            { type: '起', fn: '唠叨日常', fnEn: 'Daily nagging', detail: '各种场景', detailEn: 'Various scenes' },
            { type: '承', fn: '叛逆反抗', fnEn: 'Rebellion', detail: '摔门出走', detailEn: 'Door-slamming' },
            { type: '转', fn: '夏令营顿悟', fnEn: 'Camp epiphany', detail: '独处后理解', detailEn: 'Understanding after solo experience' },
            { type: '合', fn: '感恩理解', fnEn: 'Gratitude', detail: '唠叨是爱', detailEn: 'Nagging is love' }
          ]
        },
        {
          title: '音乐长伴我左右',
          titleEn: 'Music Has Always Been by My Side',
          score: 35, maxScore: 40,
          structure: 'bingLieShi',
          techniques: ['wuGanMiaoXie', 'paiBI', 'jieWuShuQing', 'biFangNiRen'],
          techniqueMarks: [
            { para: 0, text: '也许是那个下雨的下午', technique: '悬念引入', techniqueEn: 'Suspense Hook', effect: '模糊记忆制造阅读期待', effectEn: 'A hazy memory and a rainy afternoon — just enough mystery to pull the reader forward' },
            { para: 1, text: '音符像水一样温柔地淌过耳朵', technique: '通感比喻', techniqueEn: 'Synesthetic Simile', effect: '听觉转化为触觉，音乐可触可感', effectEn: 'Sound becomes liquid flowing over skin — hearing and touch merge into one sensation' },
            { para: 1, text: '把心里尖锐的难过磨成了圆润的惆怅', technique: '触觉通感', techniqueEn: 'Tactile Synesthesia', effect: '将情绪变化具象化', effectEn: 'Emotional transformation rendered as physical erosion — sharp grief worn into smooth melancholy' },
            { para: 2, text: '肺像要炸开', technique: '夸张', techniqueEn: 'Hyperbole', effect: '运动的痛苦直观可感', effectEn: 'An exploding-lung image makes the reader gasp alongside the runner' },
            { para: 2, text: '那股不服输的劲儿随吉他声涌进身体', technique: '借物抒情', techniqueEn: 'Object-as-Emotion', effect: '音乐转化为身体的力量', effectEn: 'The guitar riff physically enters the body — music becomes adrenaline, not just sound' },
            { para: 2, text: '鼓点替我回答：别停，继续跑', technique: '拟人', techniqueEn: 'Personification', effect: '鼓点化身教练角色', effectEn: 'The drumbeat speaks as a coach — rhythm becomes willpower' },
            { para: 3, text: '教室渐渐安静，有人红了眼眶', technique: '环境渲染', techniqueEn: 'Atmospheric Build', effect: '由动到静烘托离别情绪', effectEn: 'The classroom falling silent amplifies the emotional weight of impending farewell' },
            { para: 3, text: '她们都老了吧，她们在哪里呀', technique: '歌词引用', techniqueEn: 'Lyric Quote', effect: '借经典歌词触发集体共鸣', effectEn: 'Pu Shu\'s iconic line triggers collective memory, binding personal story to cultural touchstone' },
            { para: 3, text: '开在同一个花园，终将各自飘散', technique: '比喻', techniqueEn: 'Metaphor', effect: '花的意象写尽青春离散', effectEn: 'Flowers sharing a garden then scattering — youth\'s togetherness and inevitable parting in one image' },
            { para: 4, text: '不会说话，却总能说出我说不出的', technique: '矛盾修辞', techniqueEn: 'Oxymoron', effect: '悖论式表达音乐的特殊力量', effectEn: 'A paradox that captures music\'s unique power: voiceless, yet more articulate than words' }
          ],
          approach: '三个片段对应三种音乐，展现音乐在不同情境下的陪伴。',
          approachEn: 'Three segments with three types of music, showing companionship across situations.',
          architecture: '引子：离不开音乐；片段一：失落时的钢琴；片段二：奔跑时的摇滚；片段三：离别时的民谣；总结：无声的朋友。',
          architectureEn: 'Prologue: Can\'t live without music. Segment 1: Piano in sadness. Segment 2: Rock while running. Segment 3: Folk at parting. Summary: Silent friend.',
          logic: '三个并列片段覆盖悲、奋、离三种情感。',
          logicEn: 'Three parallel segments cover sadness, struggle, and parting.',
          skills: ['五感描写丰富', '排比增强节奏', '借物抒情', '片段各有侧重'],
          skillsEn: ['Rich five-sense descriptions', 'Parallelism strengthens rhythm', 'Symbolism', 'Distinct segment focus'],
          fullText: '　　我不记得从何时离不开音乐了，也许是那个下雨的下午。\n\n　　初一期末成绩公布，我排第二十三名，离预期的前十很远。回到房间随手打开播放器，德彪西的《月光》流了出来。那些音符像水一样温柔地淌过耳朵，把心里尖锐的难过磨成了圆润的惆怅。等一曲终了，雨也停了，心平静了许多。\n\n　　初二备战体育考试的冬天，每天在操场跑十圈，肺像要炸开。我戴着耳机跑，放的是Beyond的《海阔天空》——"原谅我这一生不羁放纵爱自由"。那股不服输的劲儿随吉他声涌进身体，脚步不知不觉轻快了。每个想放弃的瞬间，鼓点替我回答：别停，继续跑。\n\n　　最难忘的是初三上学期末班会。老师让大家给即将分别的同学说一句话，教室渐渐安静，有人红了眼眶。班长打开手机放了朴树的《那些花儿》。"她们都老了吧，她们在哪里呀……"全班沉默。我看着窗外，听着身边的抽泣，忽然觉得我们就是那些花儿，开在同一个花园，终将各自飘散。\n\n　　从钢琴到摇滚到民谣，音乐从未离开我。它不会说话，却总能说出我说不出的；它不会拥抱，却总能在最需要时给我温暖。\n\n　　音乐长伴我左右，我愿一生与它同行。',
          fullTextEn: '　　I don\'t remember when I couldn\'t live without music. Perhaps that rainy afternoon.\n\n　　Seventh-grade finals: ranked 23rd, far from my expected top 10. Back in my room, I opened the player. Debussy\'s "Clair de Lune" flowed out, notes washing gently over my ears like water, grinding sharp sadness into smooth melancholy. When it ended, the rain stopped too. My heart calmed.\n\n　　Winter of eighth grade, training for PE exams, ten laps daily, lungs bursting. I ran with earphones — Beyond\'s "Boundless Oceans." That defiant energy surged in with the guitar, my steps lightening. Every moment I wanted to quit, drumbeats answered: don\'t stop.\n\n　　Most unforgettable: the class meeting at ninth grade\'s semester end. Teacher asked everyone to speak to parting classmates. Silence fell, eyes reddened. The monitor played Pu Shu\'s "Those Flowers." "They\'ve all grown old..." The whole class went quiet. Watching the sky through the window amid sobs, I felt we were those flowers — blooming together, destined to scatter.\n\n　　From piano to rock to folk, music never left. It can\'t speak but says what I cannot. It can\'t embrace but gives warmth when most needed.\n\n　　Music has always been by my side. I wish to walk with it for life.',
          highlights: [
            { text: '把心里尖锐的难过磨成了圆润的惆怅', textEn: 'Grinding the sharp edges of sorrow into the smooth contours of wistfulness', why: '触觉通感出色', whyEn: 'A tactile synesthesia that makes an emotional process physically palpable — edges worn smooth like river stones' },
            { text: '鼓点替我回答：别停', textEn: 'The drumbeat answered for me: don\'t stop', why: '拟人化生动', whyEn: 'Personifying the drumbeat as a coach turns music from background sound into an active companion' },
            { text: '我们就是那些花儿', textEn: 'We were those flowers — blooming in the same garden, destined to scatter', why: '比喻贴切动人', whyEn: 'Merging classmates with Pu Shu\'s lyric transforms a pop reference into a genuinely moving farewell image' }
          ],
          sections: [
            { type: '引子', fn: '引入', fnEn: 'Introduction', detail: '下雨的下午', detailEn: 'Rainy afternoon' },
            { type: '片段一', fn: '抚慰', fnEn: 'Comfort', detail: '钢琴平复心情', detailEn: 'Piano calms mood' },
            { type: '片段二', fn: '力量', fnEn: 'Strength', detail: '摇滚驱动跑步', detailEn: 'Rock powers running' },
            { type: '片段三', fn: '共鸣', fnEn: 'Resonance', detail: '民谣触动离别', detailEn: 'Folk stirs farewell' },
            { type: '总结', fn: '升华', fnEn: 'Elevation', detail: '无声陪伴', detailEn: 'Silent companionship' }
          ]
        },
        {
          title: '勇气长伴我左右',
          titleEn: 'Courage Has Always Been by My Side',
          score: 36, maxScore: 40,
          structure: 'diJinShi',
          techniques: ['xinLiMiaoXie', 'duiBi', 'jiaXuJiaYi', 'xiJieMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '我不是天生勇敢的人', technique: '坦承开头', techniqueEn: 'Candid Opening', effect: '以否定自我开篇，制造悬念', effectEn: 'Self-negation at the outset creates suspense — if not naturally brave, how did courage arrive?' },
            { para: 1, text: '吓得失眠三天', technique: '心理描写', techniqueEn: 'Psychological Detail', effect: '量化恐惧让读者感同身受', effectEn: 'Quantifying fear in sleepless nights makes the dread viscerally relatable' },
            { para: 1, text: '嘴唇无声地动："你可以的。"', technique: '细节特写', techniqueEn: 'Close-Up Detail', effect: '无声动作比语言更有力', effectEn: 'Soundless lip-movement conveys encouragement more powerfully than any shout' },
            { para: 1, text: '勇气不是不害怕，而是害怕了还敢往前走', technique: '哲理感悟', techniqueEn: 'Philosophical Insight', effect: '以对比句式重新定义勇气', effectEn: 'The parallel "not X but Y" structure redefines courage as action despite fear' },
            { para: 2, text: '我一直是默默坐在角落的人', technique: '自我画像', techniqueEn: 'Self-Portrait', effect: '反衬后面竞选的突破', effectEn: 'The quiet-corner image magnifies the leap that competitive candidacy represents' },
            { para: 2, text: '以两票之差落选', technique: '精确叙事', techniqueEn: 'Precise Narration', effect: '具体数字增强真实感', effectEn: 'A two-vote margin grounds the abstract idea of courage in concrete, believable stakes' },
            { para: 2, text: '站上去的那一刻，我已经赢了', technique: '议论点睛', techniqueEn: 'Reflective Epigram', effect: '重新定义"赢"的含义', effectEn: 'Redefines winning as the act of stepping up — outcome becomes irrelevant' },
            { para: 3, text: '模拟卷像雪片飞来', technique: '比喻', techniqueEn: 'Simile', effect: '考试压力可视化', effectEn: 'Mock papers falling like snowflakes transforms abstract pressure into a visible blizzard' },
            { para: 3, text: '怕什么真理无穷，进一寸有一寸的欢喜', technique: '引用', techniqueEn: 'Allusion', effect: '胡适名言增添文化厚度', effectEn: 'Hu Shi\'s famous line adds intellectual weight and a broader philosophical anchor' },
            { para: 4, text: '从老师的眼神里来，从朋友的鼓励里来，最终从自己的心里来', technique: '排比递进', techniqueEn: 'Climactic Parallelism', effect: '三个来源递进展现成长轨迹', effectEn: 'A three-source crescendo — teacher, friend, self — maps the entire arc of growing up' }
          ],
          approach: '三次"鼓起勇气"经历层层递进，从外在鼓励到内在力量。',
          approachEn: 'Three courage-summoning experiences, progressive from external encouragement to inner strength.',
          architecture: '层一：老师给的勇气（演讲赛）；层二：朋友给的勇气（竞选）；层三：自己给的勇气（中考）。',
          architectureEn: 'Layer 1: Courage from teacher (speech contest). Layer 2: From friends (election). Layer 3: Self-generated (zhongkao).',
          logic: '勇气来源从他人到自我，展现成长。',
          logicEn: 'Courage source shifts from others to self, showing growth.',
          skills: ['心理描写层次分明', '三次经历递进', '叙议结合', '主题深化'],
          skillsEn: ['Layered psychological descriptions', 'Progressive experiences', 'Narrative-reflection blend', 'Deepening theme'],
          fullText: '　　我不是天生勇敢的人。但回头看，勇气一直都在——有时来自别人，有时来自自己。\n\n　　第一次需要勇气是小学四年级演讲比赛。老师指定我参赛，我吓得失眠三天。比赛当天站在台上，脑子一片空白。快要逃跑时，我看见语文老师坐在第一排，冲我点头，嘴唇无声地动："你可以的。"那四个字像一只手稳稳托住了我。我深吸一口气，开始了演讲。没获奖，但完成了。我第一次知道：勇气不是不害怕，而是害怕了还敢往前走。\n\n　　第二次是初一竞选班长。我一直是默默坐在角落的人。好朋友小程鼓励我："你管理能力那么强，为什么不试？"犹豫很久，终于报名。竞选那天手心全是汗，但看到小程在台下竖大拇指，觉得自己不是一个人在战斗。最终以两票之差落选。奇怪的是我并不难过——站上去的那一刻，我已经赢了。\n\n　　第三次就是现在。中考倒计时六十天，模拟卷像雪片飞来。有时做完一套错十几道，会在夜里偷偷问自己：真的能考上吗？但这次，我不再等别人给力量。书桌玻璃板下压着一张纸条："怕什么真理无穷，进一寸有一寸的欢喜。"每次想放弃就低头看看它。\n\n　　从小学讲台到初中竞选台，再到此刻的书桌前，勇气长伴我左右。它从老师的眼神里来，从朋友的鼓励里来，最终从自己的心里来。\n\n　　这就是成长——学会成为自己的勇气。',
          fullTextEn: '　　I\'m not naturally brave. But looking back, courage was always there — sometimes from others, sometimes from within.\n\n　　First time: fourth-grade speech competition. Teacher assigned me; three sleepless nights followed. On stage, mind went blank. About to flee, I spotted my Chinese teacher in row one, nodding, lips moving silently: "You can do it." Those words caught my falling heart. Deep breath. I spoke. Didn\'t win, but finished. First lesson: courage isn\'t fearlessness — it\'s moving forward despite fear.\n\n　　Second: seventh-grade class president election. Always the quiet corner kid. Friend Xiao Cheng pushed me: "You\'re so organized — why not try?" After much hesitation, I signed up. Sweaty palms on speech day, but seeing Xiao Cheng\'s enthusiastic thumbs-up below, I felt not alone. Lost by two votes. Strangely, not upset — the moment I stepped up, I\'d already won.\n\n　　Third: right now. Sixty days to zhongkao, mock papers daily. Sometimes ten-plus wrong, secretly asking at night: can I make it? This time, I don\'t wait for others. Under my desk glass: "Fear not infinite truth; each inch forward brings an inch of joy." When tempted to quit, I look down.\n\n　　From elementary stage to middle school podium to this desk, courage has always been by my side. From a teacher\'s gaze, a friend\'s cheer, and finally from my own heart.\n\n　　This is growing up — learning to be your own courage.',
          highlights: [
            { text: '勇气不是不害怕，而是害怕了还敢往前走', textEn: 'Courage is not the absence of fear — it is walking forward while your knees still shake', why: '精辟定义', whyEn: 'A compact redefinition that reframes courage from superhuman trait to everyday human choice' },
            { text: '站上去的那一刻，我已经赢了', textEn: 'The moment I stepped onto that stage, I had already won', why: '重新定义"赢"', whyEn: 'Redefines victory as the act of trying rather than the outcome — a quiet philosophical pivot' },
            { text: '学会成为自己的勇气', textEn: 'Learning to become your own courage', why: '一语双关结尾', whyEn: 'A double-meaning close: both "generating courage from within" and "being the embodiment of courage itself"' }
          ],
          sections: [
            { type: '开头', fn: '坦承', fnEn: 'Honesty', detail: '不是天生勇敢', detailEn: 'Not naturally brave' },
            { type: '层一', fn: '他人给予', fnEn: 'From others', detail: '老师的眼神', detailEn: 'Teacher\'s gaze' },
            { type: '层二', fn: '朋友推动', fnEn: 'Friend push', detail: '竞选鼓励', detailEn: 'Election encouragement' },
            { type: '层三', fn: '自我生发', fnEn: 'Self-sourced', detail: '面对中考', detailEn: 'Facing zhongkao' },
            { type: '结尾', fn: '成长宣言', fnEn: 'Declaration', detail: '成为自己的勇气', detailEn: 'Be your own courage' }
          ]
        },
        {
          title: '奶奶的手艺长伴我左右',
          titleEn: 'Grandma\'s Cooking Has Always Been by My Side',
          score: 35, maxScore: 40,
          structure: 'zongFenZong',
          techniques: ['wuGanMiaoXie', 'xiJieMiaoXie', 'huanJingChenTuo', 'jieWuShuQing'],
          techniqueMarks: [
            { para: 0, text: '手上总沾着面粉，围裙上总有油渍', technique: '细节白描', techniqueEn: 'Detail Sketch', effect: '两个"总"字勾勒奶奶的厨房形象', effectEn: 'Two instances of "always" fix Grandma\'s kitchen silhouette in a single stroke' },
            { para: 1, text: '一揉一按，像做一件神圣的事', technique: '动作描写', techniqueEn: 'Action Detail', effect: '赋予和面以仪式感', effectEn: 'Transforms ordinary kneading into a sacred rite, revealing care beneath routine' },
            { para: 1, text: '面团在她粗糙的手掌下变得光滑柔韧', technique: '触觉描写', techniqueEn: 'Tactile Imagery', effect: '粗糙与光滑的对比暗写劳作与爱', effectEn: 'The contrast between rough palms and smooth dough encodes a lifetime of labour-as-love' },
            { para: 1, text: '长寿面不能咬断，一口气吃完才灵', technique: '口语引用', techniqueEn: 'Vernacular Quote', effect: '方言式叮嘱增添民俗温度', effectEn: 'Folksy instruction adds warmth and roots the scene in living tradition' },
            { para: 2, text: '金黄酥脆，咬一口，软糯的米饭裹着香菇和腊肉', technique: '五感描写', techniqueEn: 'Multi-Sense Detail', effect: '色、声、味多感官还原美食', effectEn: 'Colour, crunch, and flavour converge to make the dish almost tangible to the reader' },
            { para: 2, text: '考好考坏都没关系，奶奶的糯米鸡永远给你留着', technique: '朴素对话', techniqueEn: 'Plain Dialogue', effect: '最简单的话传递无条件的爱', effectEn: 'The simplest words carry the most unconditional promise — love independent of achievement' },
            { para: 2, text: '回家总有热腾腾的糯米鸡等着', technique: '借物抒情', techniqueEn: 'Object-as-Emotion', effect: '食物化身安全感的象征', effectEn: 'A steaming dish becomes the emblem of safety, no matter what the world delivers' },
            { para: 3, text: '泡萝卜、酸豆角、剁椒，层层码在罐里', technique: '排比列举', techniqueEn: 'Enumerative Parallelism', effect: '具体食材列举增强画面感', effectEn: 'Listing each pickle layer by layer turns a glass jar into a portrait of devotion' },
            { para: 3, text: '总觉得奶奶就坐在对面笑眯眯地看着我', technique: '虚实结合', techniqueEn: 'Real-Imagined Blend', effect: '味觉触发幻觉般的温暖画面', effectEn: 'Flavour triggers a phantom vision of Grandma — taste bridging physical distance' },
            { para: 4, text: '那些味道刻在舌尖，也刻在心里', technique: '双关升华', techniqueEn: 'Dual-Layer Metaphor', effect: '味道从生理到心理的双重刻写', effectEn: 'The verb "etched" works on two planes — tongue and heart — fusing body and memory' }
          ],
          approach: '三道菜为线索，借食物写亲情，表达手艺背后的爱与传承。',
          approachEn: 'Three dishes as thread, using food to express family love and heritage behind craft.',
          architecture: '总起：厨房记忆；分一：生日长寿面——祝福；分二：考前糯米鸡——鼓励；分三：离家坛子菜——牵挂；总结：味道是爱的载体。',
          architectureEn: 'Overview: Kitchen memory. Part 1: Birthday noodles — blessing. Part 2: Pre-exam chicken — encouragement. Part 3: Pickled vegetables — attachment. Summary: Flavor carries love.',
          logic: '三道菜对应三种情感，从具体到抽象升华。',
          logicEn: 'Three dishes for three emotions, from concrete to abstract.',
          skills: ['五感描写还原味道', '食物承载情感', '借物抒情深沉'],
          skillsEn: ['Five-sense flavor recreation', 'Food carries emotion', 'Deep symbolism'],
          fullText: '　　在我记忆里，奶奶的手上总沾着面粉，围裙上总有油渍，厨房里总弥漫着让人安心的香气。\n\n　　每年生日，奶奶亲手擀长寿面。她和面的动作很慢，一揉一按，像做一件神圣的事。面团在她粗糙的手掌下变得光滑柔韧，擀成薄饼，切成细丝。煮好后盛在碗里，上面卧着荷包蛋，旁边点缀葱花。"长寿面不能咬断，一口气吃完才灵。"我每次吃得满头大汗，她就在旁边乐呵呵地擦汗。\n\n　　初二期末考前一天，我紧张得吃不下饭。第二天一早奶奶端来糯米鸡。金黄酥脆，咬一口，软糯的米饭裹着香菇和腊肉，鲜香四溢。"吃饱了才有力气考试。考好考坏都没关系，奶奶的糯米鸡永远给你留着。"那天我出奇地平静——也许因为知道，不管结果如何，回家总有热腾腾的糯米鸡等着。\n\n　　上月去考前集训一周。临走那天，奶奶从厨房抱出一个玻璃罐——腌了半个月的坛子菜。泡萝卜、酸豆角、剁椒，层层码在罐里。"食堂菜不合口味就配这个吃。别舍不得，吃完奶奶再做。"集训一周，每顿饭我都掏出那罐坛子菜，酸辣咸鲜散开在嘴里，总觉得奶奶就坐在对面笑眯眯地看着我。\n\n　　长寿面的祝福、糯米鸡的鼓励、坛子菜的牵挂——奶奶的手艺里藏着说不出口的爱。那些味道刻在舌尖，也刻在心里。\n\n　　奶奶的手艺长伴我左右。无论走多远，总有一种味道在等我回家。',
          fullTextEn: '　　In memory, Grandma\'s hands always had flour, her apron oil stains, her kitchen a comforting aroma.\n\n　　Every birthday, she hand-rolls longevity noodles. Slow kneading, pressing — sacred work. Dough becomes smooth under rough palms, rolled thin, cut into strands. In the bowl with a poached egg and scallions. "Don\'t bite them — eat in one go for luck." I\'d eat sweating; she\'d happily dab my forehead.\n\n　　Day before eighth-grade finals, too nervous to eat. Next morning: sticky rice chicken. Golden crispy shell, inside soft rice with mushrooms and cured meat. "Eat well for energy. Good or bad, Grandma\'s chicken will always wait." That day I was remarkably calm — knowing a steaming plate waited no matter what.\n\n　　Last month, week-long training camp. Grandma brought a glass jar — half-month fermented pickles. Radish, sour beans, chili, layered bright. "If cafeteria food\'s bad, eat this. Don\'t save it — I\'ll make more." Every meal that week I pulled it out. Sour-spicy-salty spreading through my mouth, feeling Grandma\'s smiling eyes across from me.\n\n　　Birthday noodle blessings, exam-day chicken encouragement, farewell pickle attachment — Grandma\'s cooking holds unspoken love. Those flavors etched on tongue and heart.\n\n　　Grandma\'s cooking has always been by my side. No matter how far I go, a flavor waits for me to come home.',
          highlights: [
            { text: '一揉一按，像做一件神圣的事', textEn: 'Each press, each fold — as though performing something sacred', why: '赋予日常以仪式感', whyEn: 'Elevates routine kitchen work to ritual, revealing the reverence Grandma pours into every meal' },
            { text: '考好考坏都没关系', textEn: 'Pass or fail, it doesn\'t matter', why: '朴素中含无条件的爱', whyEn: 'The plainest possible words carry the deepest message: love is not contingent on results' },
            { text: '总有一种味道在等我回家', textEn: 'Some flavour, somewhere, is always waiting for me to come home', why: '味道升华为归属感', whyEn: 'Taste transcends the physical — it becomes the very definition of belonging and homecoming' }
          ],
          sections: [
            { type: '总起', fn: '厨房印象', fnEn: 'Kitchen image', detail: '奶奶的厨房', detailEn: 'Grandma\'s kitchen' },
            { type: '分一', fn: '祝福', fnEn: 'Blessing', detail: '长寿面', detailEn: 'Noodles' },
            { type: '分二', fn: '鼓励', fnEn: 'Encouragement', detail: '糯米鸡', detailEn: 'Sticky rice chicken' },
            { type: '分三', fn: '牵挂', fnEn: 'Attachment', detail: '坛子菜', detailEn: 'Pickled vegetables' },
            { type: '总结', fn: '爱的载体', fnEn: 'Love\'s vessel', detail: '味道等你回家', detailEn: 'Flavor waits for homecoming' }
          ]
        }
      ]
    },
    {
      id: 'yn2021_comp1',
      paperId: 'yn2021',
      year: 2021,
      region: '云南省',
      prompt: '以"那一刻，我长大了"为题写一篇作文。',
      promptEn: 'Write an essay titled "The Moment I Grew Up."',
      context: '不少于600字。立意自定，文体自选（诗歌除外）。',
      contextEn: 'At least 600 words. Any genre except poetry.',
      type: 'fullTitle',
      category: '命题记叙文',
      categoryEn: 'Full-title Narrative',
      wordCount: 600,
      guide: {
        analysis: '"那一刻"要求聚焦具体时刻，"长大了"指心理成熟——理解责任、学会体谅、克服恐惧等。关键是触发成长的事件和内心转变。',
        analysisEn: '"That moment" requires a specific instant. "Grew up" means psychological maturity. Key: triggering event and inner transformation.',
        keyPoints: ['聚焦一个"那一刻"', '写出成长前后的心理对比', '成长要有说服力', '结尾要有深度'],
        keyPointsEn: ['Focus on one moment', 'Show before/after contrast', 'Convincing growth', 'Deep ending'],
        pitfalls: ['写多个事件不聚焦', '"长大"太肤浅', '缺少心理变化'],
        pitfallsEn: ['Multiple events unfocused', 'Shallow growth', 'Missing psychological change']
      },
      essays: [
        {
          title: '那一刻，我长大了', titleEn: 'The Moment I Grew Up',
          score: 38, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['xiJieMiaoXie', 'xinLiMiaoXie', 'duiBi', 'shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '凌晨一点半', technique: '时间设定', techniqueEn: 'Temporal Setting', effect: '深夜时间制造意外发现的契机', effectEn: 'Late-night timing creates the window for an unexpected discovery' },
            { para: 1, text: '屏幕上是密密麻麻的表格，键盘旁是一杯凉透的茶', technique: '细节描写', techniqueEn: 'Telling Details', effect: '凉茶+表格——加班的辛苦在两个静物中凝固', effectEn: 'Cold tea plus spreadsheets — overtime hardship frozen in two still-life objects' },
            { para: 2, text: '白发像雪一样刺眼', technique: '比喻', techniqueEn: 'Stark Simile', effect: '雪的白+刺眼——视觉冲击等于心理冲击', effectEn: 'Snow-white and stinging — visual shock equals psychological shock' },
            { para: 2, text: '爸爸才四十三岁', technique: '补叙', techniqueEn: 'Age Reveal', effect: '年龄的补充让白发更加触目惊心', effectEn: 'Adding the age makes the grey hair even more startling' },
            { para: 3, text: '他下班后先去菜市场，再赶回家，比我到得还早', technique: '细节', techniqueEn: 'Logistics Detail', effect: '时间线还原——父亲的不容易藏在日常动线中', effectEn: 'Timeline reconstruction — a father\'s sacrifice hidden in daily routines' },
            { para: 3, text: '他看了一个小时教学视频', technique: '补叙细节', techniqueEn: 'Behind-the-Scenes Detail', effect: '妈妈转述的真相揭开日常表面下的用心', effectEn: 'Mom\'s revelation uncovers devotion beneath the everyday surface' },
            { para: 4, text: '从车间直接请假出来的', technique: '细节', techniqueEn: 'Sacrifice Detail', effect: '工作手套的油腻写出毫不犹豫的父爱', effectEn: 'Greasy work gloves reveal unhesitating fatherly love' },
            { para: 5, text: '那些瞬间当时觉得理所当然，此刻一一涌上心头', technique: '心理转折', techniqueEn: 'Psychological Turn', effect: '全篇最关键的承转句——从无感到顿悟', effectEn: 'The essay\'s pivotal transition — from obliviousness to epiphany' },
            { para: 6, text: '黑暗中屏幕余光映在他脸上，白发在微光中若隐若现', technique: '环境描写', techniqueEn: 'Chiaroscuro Detail', effect: '光与暗的画面——美感中带着心酸', effectEn: 'Light and shadow — beauty tinged with heartache' },
            { para: 8, text: '不是因为更强了，而是终于学会了心疼一个人', technique: '点题升华', techniqueEn: 'Thematic Elevation', effect: '心疼=成长——用最温柔的词定义最深刻的变化', effectEn: 'Aching for someone equals growth — the gentlest word defines the deepest change' }
          ],
          approach: '发现爸爸白发的瞬间，触发"学会心疼父母"的成长感悟。',
          approachEn: 'Discovering Dad\'s grey hair triggers the insight of learning to care for parents.',
          architecture: '起：深夜爸爸在书桌前睡着；承：回忆爸爸的默默付出；转：发现白发的震撼；合：学会心疼。',
          architectureEn: 'Intro: Dad asleep at desk. Dev: Recalling sacrifices. Turn: Grey hair shock. Close: Learning to care.',
          logic: '从"理所当然"到"恍然大悟"。', logicEn: 'From taking things for granted to sudden realization.',
          skills: ['细节精准', '前后对比', '转折有力', '结尾不说教'],
          skillsEn: ['Precise details', 'Sharp contrast', 'Powerful turn', 'No preaching'],
          fullText: '　　那天晚上，我被闹钟吵醒——凌晨一点半。\n\n　　从卧室出来喝水，路过书房发现灯还亮着。推开门，爸爸趴在电脑前睡着了。屏幕上是密密麻麻的表格，键盘旁是一杯凉透的茶。\n\n　　我轻手轻脚走过去想关电脑。弯腰时看见他的头顶——曾经浓密的黑发里，夹杂着一撮一撮的白色。台灯照上去，那些白发像雪一样刺眼。\n\n　　我愣在原地。爸爸才四十三岁。\n\n　　忽然想起很多事。小学时每天放学，饭菜总热腾腾地摆在桌上。我从不想那些菜怎么来的——他下班后先去菜市场，再赶回家，比我到得还早。上初中后我嫌他做的菜不好吃，说"能不能换个花样"。他笑笑没说话，第二天桌上多了道新菜——妈妈后来告诉我，他看了一个小时教学视频。\n\n　　初二冬天，我的自行车半路爆胎。打电话给他，二十分钟就赶到了，戴着油腻的工作手套——从车间直接请假出来的。蹲在路边修车，北风把他头发吹得乱七八糟。修好后把车推给我："骑慢点。"然后转身回厂继续上班。\n\n　　那些瞬间当时觉得理所当然，此刻一一涌上心头。\n\n　　我站在书房里看着他疲惫的睡脸，鼻子一酸。轻轻拿起毯子给他盖上，关掉台灯。走出去时回头——黑暗中屏幕余光映在他脸上，白发在微光中若隐若现。\n\n　　那一刻我明白了：长大不是十八岁的蛋糕蜡烛，不是个子超过爸爸的那天，而是终于看见那些一直在身边、却被忽略的爱。\n\n　　从那天起我开始帮爸爸做家务，加班回来时倒一杯热茶。他第一次接过茶杯愣了一下，然后笑了——那笑容里，好像也有一点心酸。\n\n　　那一刻，我长大了。不是因为更强了，而是终于学会了心疼一个人。',
          fullTextEn: '　　The alarm woke me at 1:30 AM.\n\n　　Going for water, I noticed the study light on. Dad was asleep at his computer — spreadsheets on screen, cold tea beside the keyboard.\n\n　　Tiptoeing over to shut down the computer, I bent down and saw his head — among once-thick black hair, clusters of white. Under the lamp, grey hairs gleamed like snow.\n\n　　I froze. Dad was only forty-three.\n\n　　Memories rushed in. Elementary school: dinner always steaming on the table. I never wondered how — he\'d hit the market after work, then rush home, arriving before me. In middle school, I complained his food was boring: "Try something new." He just smiled. Next day, a new dish — Mom later said he\'d watched tutorials for an hour.\n\n　　Eighth-grade winter: flat tire halfway home. Called Dad. Twenty minutes later he appeared on his old scooter, still wearing greasy work gloves — left the factory floor immediately. Squatting in the north wind fixing my bike, hair blown wild. "Ride slowly." Then back to his shift.\n\n　　Those moments I\'d taken for granted now surged through me.\n\n　　Standing before his tired sleeping face, nose stinging. I draped a blanket over him, turned off the lamp. Glancing back in darkness — screen glow on his face, grey hairs flickering faintly.\n\n　　That moment I understood: growing up isn\'t birthday candles at eighteen or standing taller than Dad. It\'s finally seeing the love that\'s always been there — the love you\'d overlooked.\n\n　　After that, I started helping with housework, pouring hot tea when he came home late. First time he took the cup, he paused, then smiled — a smile with perhaps a trace of bittersweet.\n\n　　That moment, I grew up. Not stronger — just finally learned to care for someone.',
          highlights: [
            { text: '白发像雪一样刺眼', textEn: 'Grey hairs gleamed like snow — startlingly stark', why: '"刺眼"写出心理震撼', whyEn: '"Stark" conveys psychological shock' },
            { text: '当时觉得理所当然，此刻一一涌上心头', textEn: 'Taken for granted then, surging through me now', why: '精妙承转', whyEn: 'Masterful transition' },
            { text: '终于学会了心疼一个人', textEn: 'Finally learned to ache for someone', why: '朴素定义成长', whyEn: 'Simply defines growth' }
          ],
          sections: [
            { type: '起', fn: '深夜发现', fnEn: 'Late discovery', detail: '爸爸书房睡着', detailEn: 'Dad asleep in study' },
            { type: '承', fn: '回忆付出', fnEn: 'Recalling sacrifices', detail: '做饭、修车', detailEn: 'Cooking, fixing bike' },
            { type: '转', fn: '白发震撼', fnEn: 'Grey hair shock', detail: '看到白发', detailEn: 'Seeing grey hair' },
            { type: '合', fn: '学会心疼', fnEn: 'Learning to care', detail: '倒茶、做家务', detailEn: 'Tea, housework' }
          ]
        },
        {
          title: '那一刻，我长大了', titleEn: 'The Moment I Grew Up',
          score: 37, maxScore: 40, structure: 'diJinShi',
          techniques: ['xinLiMiaoXie', 'duiBi', 'huanJingChenTuo', 'jiaXuJiaYi'],
          techniqueMarks: [
            { para: 0, text: '我在房间打游戏', technique: '反差铺垫', techniqueEn: 'Ironic Setup', effect: '游戏的轻松与即将到来的紧急形成反差', effectEn: 'Gaming\'s ease contrasts with the urgency about to hit' },
            { para: 1, text: '脸色苍白，额头全是汗', technique: '外貌描写', techniqueEn: 'Physical State', effect: '两个细节快速建立妈妈病情的严重性', effectEn: 'Two details rapidly establish the severity of Mom\'s condition' },
            { para: 2, text: '连退烧药在哪个柜子都不知道', technique: '细节心理', techniqueEn: 'Telling Ignorance', effect: '不知药在哪——一个细节暴露从未独立照顾过人', effectEn: 'Not knowing where medicine is — one detail exposes never having cared for anyone' },
            { para: 3, text: '深吸一口气，开始翻柜子', technique: '动作转折', techniqueEn: 'Action as Turning Point', effect: '深呼吸标志从慌乱到冷静的分界', effectEn: 'Deep breath marks the boundary between panic and composure' },
            { para: 3, text: '不能太烫也不能太凉，妈妈以前说过', technique: '回忆细节', techniqueEn: 'Memory Detail', effect: '妈妈教过的知识在此刻派上用场——爱的传承', effectEn: 'Mom\'s past teaching proves useful now — love\'s inheritance' },
            { para: 4, text: '这是她以前给我降温的法子', technique: '角色互换', techniqueEn: 'Role Reversal', effect: '复制妈妈的方法照顾妈妈——身份的对调在此完成', effectEn: 'Replicating Mom\'s method for Mom — the role swap crystallizes here' },
            { para: 4, text: '阳光从地板爬到墙上又爬到天花板', technique: '环境时间', techniqueEn: 'Time-Lapse Setting', effect: '光的移动压缩数小时守护为一句话——静默的陪伴', effectEn: 'Sunlight\'s journey compresses hours of vigil into one line — silent companionship' },
            { para: 5, text: '不用，你躺着。我来', technique: '语言描写', techniqueEn: 'Role-Reversal Dialog', effect: '五个字完成角色互换——从被照顾者到照顾者', effectEn: 'Five words complete the role reversal — from cared-for to caretaker' },
            { para: 6, text: '鸡蛋有点糊，番茄汤盐放多了，但妈妈全吃完了', technique: '细节对比', techniqueEn: 'Imperfect-Perfect Detail', effect: '不完美的饭+全部吃完——母爱的接纳让人鼻酸', effectEn: 'Imperfect meal eaten completely — maternal acceptance that brings tears' },
            { para: 7, text: '长大不是你能为自己做多少事，而是你愿意为爱的人做多少事', technique: '点题升华', techniqueEn: 'Thematic Elevation', effect: '从自利到利他——一句话重新定义成长', effectEn: 'From self-serving to selfless — one sentence redefines growing up' }
          ],
          approach: '独自照顾生病妈妈，从慌乱到冷静，角色互换中完成成长。',
          approachEn: 'Caring for sick Mom alone — from panic to composure, growing through role reversal.',
          architecture: '层一：发现妈妈发烧慌乱；层二：冷静照顾；层三：角色互换感悟。',
          architectureEn: 'Layer 1: Discovering fever, panicking. Layer 2: Calm caregiving. Layer 3: Role reversal insight.',
          logic: '从依赖者到照顾者。', logicEn: 'From dependent to caretaker.',
          skills: ['心理递进', '环境烘托', '对比深刻', '感悟真挚'],
          skillsEn: ['Psychological progression', 'Environment underscores mood', 'Deep contrast', 'Genuine insight'],
          fullText: '　　那个周六中午，爸爸出差不在家，我在房间打游戏。\n\n　　"妈，午饭吃什么？"朝客厅喊了一声，没人回答。\n\n　　走出去发现妈妈蜷在沙发上，脸色苍白，额头全是汗。摸她额头——烫得吓人。"妈！你怎么了？"声音发抖。\n\n　　她虚弱地睁眼："没事，可能中暑了……药在柜子里……"话没说完又闭上眼。\n\n　　我站在客厅中间手足无措。平时都是妈妈照顾我——我什么时候照顾过她？连退烧药在哪个柜子都不知道。\n\n　　但没人能帮了。爸爸外地，外婆老家。\n\n　　深吸一口气，开始翻柜子。三个抽屉后找到药箱，药太多不认识，一个个看说明书。找到退烧药，倒了温水——不能太烫也不能太凉，妈妈以前说过。\n\n　　喂了药，她又昏沉睡去。我去厨房泡湿毛巾放在她额头——这是她以前给我降温的法子。坐在沙发旁，每十分钟换一次。窗外阳光从地板爬到墙上又爬到天花板。不知过了多久，只知道一直守着。\n\n　　傍晚妈妈醒了，看见我守在旁边，愣了一下笑了——惊讶、欣慰、心疼都在那笑容里。\n\n　　"饿了吧？妈给你做饭。"她习惯性要起来。\n\n　　"不用，你躺着。我来。"我按住她肩膀。\n\n　　那晚我第一次独自做饭。鸡蛋有点糊，番茄汤盐放多了，但妈妈全吃完了："我儿子做的饭真好吃。"\n\n　　端着空碗回厨房时鼻子一酸。原来长大不是你能为自己做多少事，而是你愿意为爱的人做多少事。\n\n　　那一刻，我长大了。',
          fullTextEn: '　　Saturday noon, Dad away. I was gaming.\n\n　　"Mom, what\'s for lunch?" No answer. Found her curled on sofa, pale, sweating. Touched her forehead — terrifyingly hot. "Mom!" My voice trembled.\n\n　　"Just heatstroke... medicine in the cabinet..." Eyes closed again.\n\n　　Helpless in the living room. Mom always cared for me — when had I cared for her? Didn\'t even know which cabinet.\n\n　　But no one else could help. Deep breath. Searched three drawers, found medicine box, read instructions one by one. Found fever reducer, poured warm water — not too hot, not too cold.\n\n　　After medicine, she slept. Wet towel on forehead — her own method for my fevers. Sat beside her, changing it every ten minutes. Sunlight crawled from floor to wall to ceiling.\n\n　　Evening: she woke, saw me watching over her, paused, smiled — surprise, relief, tenderness.\n\n　　"Hungry? Let me cook." Instinctively rising. "No. Stay down. I\'ll do it." I pressed her shoulder.\n\n　　First solo dinner. Slightly burnt eggs, over-salted soup. She ate everything: "My son\'s cooking is delicious."\n\n　　Walking back with empty bowls, nose stung. Growing up isn\'t how much you do for yourself, but how much you\'ll do for the ones you love.\n\n　　That moment, I grew up.',
          highlights: [
            { text: '平时都是妈妈照顾我，我什么时候照顾过她', textEn: 'Mom always cared for me — when had I ever cared for her?', why: '反问引出成长主线', whyEn: 'Rhetorical question introduces growth theme' },
            { text: '阳光从地板爬到墙上又爬到天花板', textEn: 'Sunlight crawled from floor to wall to ceiling', why: '环境暗示时间与守护', whyEn: 'Environment implies time and vigil' },
            { text: '愿意为爱的人做多少事', textEn: 'How much you\'ll do for the ones you love', why: '朴素有力', whyEn: 'Simple and powerful' }
          ],
          sections: [
            { type: '层一', fn: '慌乱', fnEn: 'Panic', detail: '发现妈妈生病', detailEn: 'Discovering sick Mom' },
            { type: '层二', fn: '照顾', fnEn: 'Caregiving', detail: '找药喂药换毛巾', detailEn: 'Medicine and towels' },
            { type: '层三', fn: '角色互换', fnEn: 'Role swap', detail: '第一次做饭', detailEn: 'First solo dinner' },
            { type: '结尾', fn: '成长定义', fnEn: 'Growth defined', detail: '为爱付出', detailEn: 'Giving for love' }
          ]
        },
        {
          title: '那一刻，我长大了', titleEn: 'The Moment I Grew Up',
          score: 36, maxScore: 40, structure: 'daoXuShi',
          techniques: ['daoXu', 'duiHuaQuDong', 'xinLiMiaoXie', 'xuanNian'],
          techniqueMarks: [
            { para: 0, text: '爸妈，我不想转学', technique: '倒叙开篇', techniqueEn: 'In-Medias-Res', effect: '直接给出结论——悬念让读者追问经过', effectEn: 'Conclusion first — suspense makes readers chase the process' },
            { para: 0, text: '客厅安静了三秒——比一节课还长', technique: '夸张通感', techniqueEn: 'Temporal Hyperbole', effect: '三秒拉长为一节课——紧张的主观时间感', effectEn: 'Three seconds stretched to a class period — subjective time under tension' },
            { para: 1, text: '升学率比我们学校高很多', technique: '铺垫', techniqueEn: 'Temptation Setup', effect: '客观优势的陈述让拒绝更有戏剧张力', effectEn: 'Stating objective advantages makes the refusal more dramatically tense' },
            { para: 2, text: '我的成绩真是因为学校不好吗？', technique: '心理自问', techniqueEn: 'Self-Interrogation', effect: '内在归因的反问——成熟思考的起点', effectEn: 'Self-questioning about internal vs. external causes — maturity begins' },
            { para: 3, text: '转不转不重要，重要的是这个决定是谁做的', technique: '语言描写', techniqueEn: 'Wisdom Dialog', effect: '朋友的话切中问题核心——自主vs被安排', effectEn: 'Friend\'s words hit the core — autonomy versus being arranged' },
            { para: 3, text: '别人替你决定的，去了也不开心', technique: '哲理', techniqueEn: 'Philosophical Insight', effect: '简洁的逻辑揭示选择的本质', effectEn: 'Concise logic reveals the essence of choice' },
            { para: 4, text: '那晚日记本上写了两个字：留下', technique: '细节', techniqueEn: 'Diary Detail', effect: '两个字凝练决心——极简的表达极大的力量', effectEn: 'Two characters crystallize resolve — minimal expression, maximum force' },
            { para: 5, text: '爸爸表情从惊讶变成严肃再变成沉思', technique: '表情递进', techniqueEn: 'Expression Progression', effect: '三个表情追踪父亲的内心变化', effectEn: 'Three expressions trace the father\'s internal shift' },
            { para: 6, text: '这是我的选择，不管结果怎样，我不后悔', technique: '语言描写', techniqueEn: 'Declaration of Ownership', effect: '承担后果的宣言完成了从孩子到大人的跨越', effectEn: 'Declaring ownership of consequences completes the leap from child to adult' },
            { para: 7, text: '第一次为自己人生做了选择——并愿意承担所有后果', technique: '点题升华', techniqueEn: 'Thematic Elevation', effect: '成长=自主选择+承担后果——精准而深刻', effectEn: 'Growth equals autonomous choice plus accountability — precise and profound' }
          ],
          approach: '倒叙：从拒绝转学开始，回溯独立选择的过程。',
          approachEn: 'Flashback from refusing transfer, tracing the independent choice process.',
          architecture: '倒叙："我不转学"→父母安排→内心挣扎→好友启发→自主选择。',
          architectureEn: 'Flash: "I won\'t transfer" → parents\' plan → inner struggle → friend\'s insight → own choice.',
          logic: '从被动到主动选择。', logicEn: 'From passive to active choice.',
          skills: ['悬念开头', '对话推动', '心理真实', '哲理结尾'],
          skillsEn: ['Suspenseful opening', 'Dialogue-driven', 'Authentic psychology', 'Philosophical ending'],
          fullText: '　　"爸妈，我不想转学。"\n\n　　说出这句话时心跳很快，但声音出奇地平静。客厅安静了三秒——比一节课还长。\n\n　　一个月前，爸爸同事帮忙联系了市里重点中学，升学率比我们学校高很多。爸妈兴冲冲告诉我这"好消息"。\n\n　　"去重点中学，成绩至少能提高三四十分！"爸爸说。\n\n　　我没立刻回答。"重点中学"四个字确实让我心动。但另一种声音冒出来——我不想走。这里有教了两年的老师，一起奋斗的同学，约好中考后吃火锅的朋友。而且——我的成绩真是因为学校不好吗？\n\n　　纠结了很久。不想辜负爸妈苦心，又觉得不该逃避。好朋友小宇说了一句让我至今难忘的话："转不转不重要，重要的是这个决定是谁做的。如果是你自己想去，就去；别人替你决定的，去了也不开心。"\n\n　　那晚日记本上写了两个字：留下。\n\n　　然后就是开头那个场景。爸爸表情从惊讶变成严肃再变成沉思。\n\n　　我深吸一口气："我知道你们为我好。但我想用自己的努力证明在哪里都能考好。这是我的选择，不管结果怎样，我不后悔。"\n\n　　安静像被拉长了。然后爸爸点了点头。\n\n　　那一刻，我长大了。不是因为做了正确选择，而是第一次为自己人生做了选择——并愿意承担所有后果。',
          fullTextEn: '　　"Mom, Dad — I don\'t want to transfer."\n\n　　Heart racing, voice surprisingly calm. Three seconds of silence — longer than a class period.\n\n　　A month earlier, Dad\'s colleague arranged a spot at a prestigious school with far higher admission rates. Parents excitedly shared the "good news."\n\n　　"Your scores could jump 30-40 points!" Dad said.\n\n　　I didn\'t answer immediately. "Key school" stirred me too. But another voice: I didn\'t want to leave. Two years of teachers, struggling classmates, friends with hotpot plans. And — were my grades really the school\'s fault?\n\n　　Torn for weeks. Friend Xiao Yu said something unforgettable: "Transfer or not doesn\'t matter. What matters is who makes the decision. If you want to go, go. If someone else decides, you won\'t be happy there either."\n\n　　That night\'s diary: two characters — Stay.\n\n　　Then the opening scene. Dad\'s expression: surprise → seriousness → contemplation.\n\n　　Deep breath: "I know you mean well. But I want to prove I can succeed anywhere through my own effort. This is my choice. Whatever happens, no regrets."\n\n　　Stretched silence. Then Dad nodded.\n\n　　That moment, I grew up. Not because I chose right, but because I made my own life\'s choice for the first time — willing to bear all consequences.',
          highlights: [
            { text: '重要的是这个决定是谁做的', textEn: 'What matters is who makes the decision', why: '一语中的', whyEn: 'Hits the mark perfectly' },
            { text: '在哪里都能考好', textEn: 'I can succeed anywhere', why: '内在归因的成熟', whyEn: 'Mature internal attribution' },
            { text: '愿意承担所有后果', textEn: 'Willing to bear all consequences', why: '定义成长为有担当', whyEn: 'Defines growth as responsibility' }
          ],
          sections: [
            { type: '倒叙', fn: '表态', fnEn: 'Declaration', detail: '不转学', detailEn: 'Not transferring' },
            { type: '回溯', fn: '起因', fnEn: 'Cause', detail: '父母安排', detailEn: 'Parents\' plan' },
            { type: '挣扎', fn: '纠结', fnEn: 'Conflict', detail: '朋友启发', detailEn: 'Friend\'s insight' },
            { type: '结尾', fn: '自主', fnEn: 'Independence', detail: '为选择负责', detailEn: 'Own the choice' }
          ]
        },
        {
          title: '那一刻，我长大了', titleEn: 'The Moment I Grew Up',
          score: 35, maxScore: 40, structure: 'shiJianXian',
          techniques: ['xiJieMiaoXie', 'huanJingChenTuo', 'duiBi', 'yiXiaoJianDa'],
          techniqueMarks: [
            { para: 0, text: '天突然变了脸。乌云压下来，豆大雨点砸地上', technique: '环境描写', techniqueEn: 'Atmospheric Setup', effect: '拟人+通感——暴雨的压迫感为故事定调', effectEn: 'Personification plus sensory force — storm\'s oppression sets the story\'s tone' },
            { para: 1, text: '车上装满纸箱，被雨淋得软塌塌的', technique: '细节描写', techniqueEn: 'Material Detail', effect: '软塌的纸箱写出困境的具象——不止是重，更是脆弱', effectEn: 'Soggy cardboard makes the predicament concrete — not just heavy, but fragile' },
            { para: 2, text: '还赶着写作业呢，不认识这个人，管什么闲事', technique: '心理独白', techniqueEn: 'Interior Excuses', effect: '三个借口的真实还原展现犹豫的内心', effectEn: 'Three authentic excuses faithfully reproduce the hesitating mind' },
            { para: 3, text: '老人脚下一滑差点摔倒', technique: '动作描写', techniqueEn: 'Crisis Detail', effect: '滑倒的瞬间将困境推向临界点', effectEn: 'The slip pushes the predicament to its tipping point' },
            { para: 3, text: '他没喊谁帮忙，弯下腰继续推', technique: '对比', techniqueEn: 'Silent Resilience', effect: '不求助的坚持与周围冷漠形成无声的控诉', effectEn: 'Unaided persistence versus surrounding indifference — a silent accusation' },
            { para: 4, text: '脚像被钉住了，迈不出那绕行的一步', technique: '比喻心理', techniqueEn: 'Conscience Metaphor', effect: '被"钉住"——良知阻止了逃离', effectEn: '"Nailed" — conscience physically prevents escape' },
            { para: 5, text: '话脱口前，伞已塞进书包，人冲了过去', technique: '动作排比', techniqueEn: 'Action Cascade', effect: '三个连续动作——身体先于大脑做出了选择', effectEn: 'Three cascading actions — body chose before mind could deliberate' },
            { para: 6, text: '雨打在脸上睁不开眼，但感觉到轮子动了', technique: '通感对比', techniqueEn: 'Sensory Contrast', effect: '视觉失去但触觉感知——专注于行动本身', effectEn: 'Sight lost but touch felt — focus on the act itself' },
            { para: 7, text: '皱纹和雨水混在一起', technique: '细节', techniqueEn: 'Blended Detail', effect: '老人的笑容在雨水中——温暖与狼狈并存', effectEn: 'An old man\'s smile amid rainwater — warmth and dishevelment coexist' },
            { para: 8, text: '长大不是多考几分，不是长高几厘米，而是你开始愿意为别人淋一场雨', technique: '排比点题', techniqueEn: 'Parallel Redefinition', effect: '两个否定+一个肯定——排除法定义真正的成长', effectEn: 'Two negatives plus one positive — defining real growth by elimination' }
          ],
          approach: '暴雨中帮陌生老人推车，从旁观到行动的成长。',
          approachEn: 'Helping a stranger push a cart in a storm — growing from bystander to actor.',
          architecture: '暴雨放学→看到老人困难→犹豫→冲上去帮忙→感悟。',
          architectureEn: 'Storm after school → seeing elderly struggle → hesitation → rushing to help → insight.',
          logic: '从围观者到参与者。', logicEn: 'From bystander to participant.',
          skills: ['环境渲染', '犹豫真实', '行动畅快', '以小见大'],
          skillsEn: ['Atmosphere building', 'Authentic hesitation', 'Satisfying action', 'Big truth from small event'],
          fullText: '　　那天下午放学，天突然变了脸。乌云压下来，豆大雨点砸地上。我撑伞小跑回家，裤脚全湿了。\n\n　　拐过路口，看见老人在雨里推三轮车。车上装满纸箱，被雨淋得软塌塌的。老人佝偻着背使劲推，轮子陷在水坑里出不来。\n\n　　雨越来越大。行人都低头快步走过。我也犹豫——还赶着写作业呢，不认识这个人，管什么闲事？\n\n　　就要绕过去时，老人脚下一滑差点摔倒。扶住把手勉强站稳，雨水顺着花白头发流到脸上。他没喊谁帮忙，弯下腰继续推。\n\n　　不知为什么，我的脚像被钉住了，迈不出那绕行的一步。\n\n　　"爷爷，我来帮你推！"话脱口前，伞已塞进书包，人冲了过去。\n\n　　双手抵住车架使劲推。雨打在脸上睁不开眼，但感觉到轮子动了。他拉我推，三轮车晃晃悠悠爬出了水坑。\n\n　　"谢谢你啊小伙子！"老人回头笑，皱纹和雨水混在一起。\n\n　　浑身湿透，课本肯定遭殃。但一点不后悔。心里有说不出的畅快，像雨后初晴的清爽。\n\n　　回家后妈妈吓了一跳："怎么淋成落汤鸡了？"我笑着说了路上的事。她愣了一下，摸我头："我儿子长大了。"\n\n　　那一刻，我真觉得自己长大了。长大不是多考几分，不是长高几厘米，而是你开始愿意为别人淋一场雨。',
          fullTextEn: '　　After school, the sky turned. Dark clouds, fat raindrops. I jogged home under my umbrella, pant legs soaked.\n\n　　Around a corner: an old man pushing a loaded tricycle in the rain. Cardboard soggy, wheel stuck in a puddle. Hunched, pushing hard.\n\n　　Rain worsened. Pedestrians hurried past. I hesitated — homework, a stranger, why bother?\n\n　　About to walk around when he slipped, barely caught himself on the handlebar. Rain streaming down grey hair. He didn\'t ask for help — just bent down and kept pushing.\n\n　　Somehow my feet were nailed. Couldn\'t take that bypassing step.\n\n　　"Grandpa, let me help!" Umbrella stuffed in bag, I dashed over.\n\n　　Hands on the frame, pushing hard. Rain blinding, but the wheel moved. He pulled, I pushed. The cart wobbled free.\n\n　　"Thank you, young man!" Wrinkles and rainwater together in his smile.\n\n　　Soaking wet, textbooks ruined. But no regret. An indescribable lightness — like clearing skies.\n\n　　Mom at home: "How\'d you get so drenched?" Told her. She paused, touched my head: "My boy grew up."\n\n　　That moment, I truly grew up. Not more points or centimeters — but being willing to get rained on for someone else.',
          highlights: [
            { text: '脚像被钉住了', textEn: 'My feet were nailed to the ground', why: '良知牵引行动', whyEn: 'Conscience pulls toward action' },
            { text: '说不出的畅快', textEn: 'An indescribable lightness', why: '行动的心理奖励', whyEn: 'Psychological reward of action' },
            { text: '愿意为别人淋一场雨', textEn: 'Willing to get rained on for someone else', why: '精炼比喻', whyEn: 'Concise metaphor' }
          ],
          sections: [
            { type: '背景', fn: '暴雨', fnEn: 'Storm', detail: '环境渲染', detailEn: 'Atmosphere' },
            { type: '犹豫', fn: '挣扎', fnEn: 'Struggle', detail: '想绕行', detailEn: 'Wanting to bypass' },
            { type: '行动', fn: '帮忙', fnEn: 'Helping', detail: '推车', detailEn: 'Pushing cart' },
            { type: '结尾', fn: '成长', fnEn: 'Growth', detail: '为别人淋雨', detailEn: 'Rained on for others' }
          ]
        },
        {
          title: '那一刻，我长大了', titleEn: 'The Moment I Grew Up',
          score: 36, maxScore: 40, structure: 'zongFenZong',
          techniques: ['xinLiMiaoXie', 'xiJieMiaoXie', 'duiBi', 'jiaXuJiaYi'],
          techniqueMarks: [
            { para: 0, text: '第一次当着全班说"对不起"的那一刻', technique: '倒叙悬念', techniqueEn: 'Flashback Suspense', effect: '结果先行制造悬念——为什么要当众道歉？', effectEn: 'Result first creates suspense — why a public apology?' },
            { para: 1, text: '上面全是笔记，非常重要', technique: '铺垫', techniqueEn: 'Stakes Setup', effect: '强调书的重要性为后文的愤怒提供合理性', effectEn: 'Emphasizing the book\'s importance justifies the coming anger' },
            { para: 2, text: '是不是你拿了我的书？', technique: '语言描写', techniqueEn: 'Accusatory Dialog', effect: '当众质问的语言写出冲动的伤害力', effectEn: 'Public accusation shows how impulsive words wound' },
            { para: 2, text: '教室一下安静了。小杰低着头说不出话', technique: '环境+动作', techniqueEn: 'Silence & Gesture', effect: '安静和低头——两个细节写出冤屈的无声痛苦', effectEn: 'Silence and bowed head — two details capture the mute pain of being wronged' },
            { para: 3, text: '看到书那一瞬，脸像被抽了一巴掌', technique: '比喻通感', techniqueEn: 'Visceral Metaphor', effect: '自扇的巴掌——羞愧转化为物理痛感', effectEn: 'Self-inflicted slap — shame transformed into physical pain' },
            { para: 3, text: '他没做错任何事，却被我当众指控', technique: '心理反省', techniqueEn: 'Self-Reproach', effect: '简洁的事实陈述比任何修辞都更令人内疚', effectEn: 'Plain statement of fact cuts deeper than any rhetoric' },
            { para: 4, text: '道歉吧——当众认错太丢脸。不道歉吧——心像被针扎', technique: '心理对比', techniqueEn: 'Internal Conflict', effect: '面子vs良心的拉锯战真实呈现', effectEn: 'Tug-of-war between pride and conscience authentically presented' },
            { para: 5, text: '声音有点抖', technique: '细节描写', techniqueEn: 'Trembling Detail', effect: '颤抖的声音写出道歉的勇气成本', effectEn: 'Trembling voice captures the courage cost of apologizing' },
            { para: 6, text: '眼睛红红的，但嘴角慢慢弯了起来', technique: '细节对比', techniqueEn: 'Mixed-Emotion Detail', effect: '红眼+微笑——委屈与释然并存的复杂表情', effectEn: 'Red eyes plus rising smile — hurt and relief coexisting in one expression' },
            { para: 7, text: '长大不是永远正确，而是犯了错之后，有勇气站出来说：我错了', technique: '点题升华', techniqueEn: 'Thematic Elevation', effect: '重新定义"长大"——从完美主义到勇于担责', effectEn: 'Redefining "growing up" — from perfectionism to owning mistakes' }
          ],
          approach: '当众为冤枉同学道歉，从维护面子到承认错误的成长。',
          approachEn: 'Publicly apologizing for wrongly blaming a classmate — from protecting pride to admitting fault.',
          architecture: '总起：当众道歉那一刻；起因：书丢了冤枉同桌；真相：书在自己柜子里；挣扎：道歉还是沉默；行动：当众认错；结尾：长大是敢说"我错了"。',
          architectureEn: 'Overview: The public apology. Cause: Lost book, blamed deskmate. Truth: Book in own cabinet. Struggle: Apologize or stay silent. Action: Public admission. End: Growing up is saying "I was wrong."',
          logic: '从维护自尊到尊重真相。', logicEn: 'From protecting ego to respecting truth.',
          skills: ['心理挣扎深入', '道歉场景精彩', '前后对比', '议论克制'],
          skillsEn: ['Deep struggle', 'Vivid apology', 'Sharp contrast', 'Restrained commentary'],
          fullText: '　　如果问我什么时候觉得长大了，我会说：第一次当着全班说"对不起"的那一刻。\n\n　　初二上学期，期中考后我的英语参考书不见了——上面全是笔记，非常重要。找了一天没找到，我怀疑同桌小杰——他前几天说自己的书丢了，我的就在那之后不见的。\n\n　　越想越气，课间当着同学质问他："是不是你拿了我的书？"他涨红脸说不是。我不信："你自己的丢了就拿别人的？"\n\n　　教室一下安静了。小杰低着头说不出话。从那天起他不太跟我说话了。\n\n　　一周后，我在衣柜最底层找到了书——是自己周末整理书桌时顺手放的，完全忘了。\n\n　　看到书那一瞬，脸像被抽了一巴掌。想起小杰当时的表情——委屈、难堪、无助。他没做错任何事，却被我当众指控。\n\n　　那晚翻来覆去。道歉吧——当众认错太丢脸。不道歉吧——每次看他低头走过，心像被针扎。\n\n　　第二天早自习前，我站到讲台旁。教室渐渐安静。\n\n　　"同学们，我有件事要说。"声音有点抖，"之前我冤枉了小杰说他拿了我的书，其实是我自己放错了。小杰，对不起，是我错了。"\n\n　　安静两秒。然后小杰抬头看我，眼睛红红的，但嘴角慢慢弯了起来。\n\n　　下课他走过来："没事了。"三个字，把压了一周的石头彻底搬走。\n\n　　那一刻，我长大了。长大不是永远正确，而是犯了错之后，有勇气站出来说：我错了。',
          fullTextEn: '　　When did I grow up? The moment I said "I\'m sorry" to the entire class.\n\n　　Eighth grade: my important English reference book vanished. After a day of searching, I suspected deskmate Xiao Jie — his book had gone missing days before.\n\n　　Growing angrier, I confronted him publicly: "Did you take my book?" He reddened, denied it. "You lost yours so you took mine?"\n\n　　Silence. Xiao Jie hung his head. After that, he barely spoke to me.\n\n　　A week later: the book at the bottom of my wardrobe. I\'d put it there while tidying.\n\n　　Seeing it, my face burned like a slap. His expression: wronged, humiliated, helpless. Innocent, yet publicly accused.\n\n　　Tossing all night. Apologize = humiliation. Don\'t = needle-prick guilt every time he walked past.\n\n　　Next morning, I stood by the podium. Room fell quiet.\n\n　　"Everyone, I need to say something." Voice shaking. "I wrongly accused Xiao Jie. The book was misplaced by me. Xiao Jie — I\'m sorry. I was wrong."\n\n　　Two seconds of silence. He looked up, eyes red, but slowly smiling.\n\n　　After class: "It\'s okay." Three words, lifting a week\'s stone.\n\n　　That moment, I grew up. Not being always right — but having the courage to stand up after a mistake and say: I was wrong.',
          highlights: [
            { text: '脸像被抽了一巴掌', textEn: 'My face burned as if slapped', why: '生动写出羞愧', whyEn: 'Vividly captures shame' },
            { text: '心像被针扎', textEn: 'Heart pricked by needles', why: '精准比喻内疚', whyEn: 'Precise guilt metaphor' },
            { text: '有勇气说：我错了', textEn: 'Having the courage to say: I was wrong', why: '定义成长', whyEn: 'Defines growth' }
          ],
          sections: [
            { type: '总起', fn: '核心瞬间', fnEn: 'Core moment', detail: '当众道歉', detailEn: 'Public apology' },
            { type: '起因', fn: '冤枉', fnEn: 'False blame', detail: '误会同桌', detailEn: 'Blaming deskmate' },
            { type: '真相', fn: '发现', fnEn: 'Discovery', detail: '书在自己柜子', detailEn: 'Book in own cabinet' },
            { type: '行动', fn: '道歉', fnEn: 'Apology', detail: '当众认错', detailEn: 'Public admission' },
            { type: '结尾', fn: '定义', fnEn: 'Definition', detail: '敢说我错了', detailEn: 'Daring to say I was wrong' }
          ]
        }
      ]
    },
    {
      id: 'yn2021_comp2',
      paperId: 'yn2021',
      year: 2021,
      region: '云南省',
      prompt: '请以"______，让生活更美好"为题，写一篇作文。要求：不少于600字；立意自定，文体自选（诗歌除外）。',
      promptEn: 'Write on the topic "______ Makes Life Better." Requirements: 600+ words, any genre except poetry.',
      type: 'semiOpenTopic',
      category: '半命题作文',
      categoryEn: 'Semi-open Topic',
      wordCount: 600,
      guide: {
        analysis: '半命题作文，需先补充题目。可填具体事物（阅读、音乐、运动）或抽象概念（善良、坚持、微笑）。关键在于写出"让生活更美好"的过程和感悟。',
        analysisEn: 'Semi-open topic requiring completion. Fill with concrete items (reading, music, sports) or abstract concepts (kindness, perseverance, smiles). Focus on the process and insight of "making life better."',
        keyPoints: ['补题要小而具体', '写出变化过程', '结合真实生活场景', '升华主题'],
        keyPointsEn: ['Choose specific topic', 'Show transformation', 'Use real-life scenes', 'Elevate the theme'],
        pitfalls: ['补题太大太空', '只写好处不写过程', '缺少具体事例'],
        pitfallsEn: ['Topic too broad', 'Listing benefits without process', 'Lacking concrete examples']
      },
      essays: [
        {
          title: '阅读，让生活更美好', titleEn: 'Reading Makes Life Better',
          score: 38, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['xiJieMiaoXie', 'duiBi', 'shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '窗外大雨如注，雷声隆隆', technique: '环境描写', techniqueEn: 'Atmospheric Setting', effect: '暴雨+雷声反衬室内读书的温馨', effectEn: 'Storm and thunder contrast with the cozy interior of reading' },
            { para: 0, text: '台灯的光晕柔和而温暖，书页间散发着淡淡墨香', technique: '通感', techniqueEn: 'Synesthesia', effect: '光+香——视觉嗅觉交织营造沉浸感', effectEn: 'Light plus fragrance — sight and smell interweave for immersion' },
            { para: 1, text: '密密麻麻的文字像一群讨厌的蚂蚁', technique: '比喻', techniqueEn: 'Aversion Metaphor', effect: '蚂蚁比喻写出孩子对阅读的本能排斥', effectEn: 'Ant metaphor captures a child\'s instinctive rejection of reading' },
            { para: 2, text: '只想打发时间', technique: '心理描写', techniqueEn: 'Casual Intent', effect: '漫不经心的动机与后文的沉迷形成反差', effectEn: 'Casual motivation contrasts dramatically with the coming obsession' },
            { para: 3, text: '第一页就把我拽了进去', technique: '动作比喻', techniqueEn: 'Visceral Pull', effect: '被"拽"——阅读的吸引力写成物理的力', effectEn: '"Pulled in" — reading\'s attraction rendered as physical force' },
            { para: 3, text: '我的手不由得攥紧了书脊', technique: '细节描写', techniqueEn: 'Involuntary Detail', effect: '不自觉攥书——身体比头脑先做出反应', effectEn: 'Unconsciously gripping the spine — body reacts before mind' },
            { para: 4, text: '心里有什么东西被悄悄点燃了', technique: '比喻', techniqueEn: 'Ignition Metaphor', effect: '"点燃"的含蓄——不直说"爱上"但火已燃起', effectEn: 'Restraint of "ignited" — not saying "fell in love" but the fire is lit' },
            { para: 5, text: '失落时翻翻《苏东坡传》……焦虑时读读《瓦尔登湖》', technique: '排比', techniqueEn: 'Parallel Prescriptions', effect: '情绪+书目的对应——阅读成为精准的精神处方', effectEn: 'Emotion-book pairings — reading as precision spiritual prescriptions' },
            { para: 5, text: '是《钢铁是怎样炼成的》陪我度过最难熬的几个小时', technique: '拟人', techniqueEn: 'Personification', effect: '书"陪"人——阅读从行为升级为关系', effectEn: 'A book "accompanying" a person — reading elevated from activity to relationship' },
            { para: 6, text: '书架上那些被翻旧的书，是我最忠实的朋友', technique: '首尾呼应', techniqueEn: 'Echo & Personification', effect: '翻旧=深爱——物理磨损写出精神依恋，呼应开篇', effectEn: 'Worn pages equal deep love — physical wear reveals spiritual attachment, echoing the opening' }
          ],
          approach: '从不爱读书到沉迷阅读，书籍在不同时刻带来力量和温暖。',
          approachEn: 'From reluctant reader to book lover — books bring strength and warmth at different moments.',
          architecture: '起：暴雨夜翻开一本书；承：回忆从前不爱读书；转：一本《老人与海》改变态度；合：阅读已融入每一天。',
          architectureEn: 'Open: Rainy night, opening a book. Develop: Flashback to hating reading. Turn: "The Old Man and the Sea" changes everything. Close: Reading woven into daily life.',
          logic: '从排斥到接纳到热爱。', logicEn: 'From rejection to acceptance to love.',
          skills: ['雨夜氛围营造', '前后对比鲜明', '首尾呼应'],
          skillsEn: ['Rainy night atmosphere', 'Sharp before-after contrast', 'Echo structure'],
          fullText: '　　窗外大雨如注，雷声隆隆。我蜷在沙发角落，翻开那本读了无数遍的《老人与海》。台灯的光晕柔和而温暖，书页间散发着淡淡墨香。此刻我无比确信：阅读，让生活更美好。\n\n　　可曾经的我，对书本深恶痛绝。小学时妈妈逼我读《安徒生童话》，我翻两页就扔到一边，宁可盯着天花板发呆。那些密密麻麻的文字像一群讨厌的蚂蚁，让我头皮发麻。每次语文课要求写读后感，我都东拼西凑，敷衍了事。\n\n　　转变发生在初一那个暑假。表哥来家里住，随手带了一本《老人与海》。无聊至极的午后，我百无聊赖地翻开它——只想打发时间。\n\n　　没想到，第一页就把我拽了进去。圣地亚哥独自出海的画面在眼前铺展开来。我跟着他漂流在茫茫大海上，感受烈日灼烤皮肤，看鲨鱼一条条逼近。当老人说出"人可以被毁灭，但不能被打败"时，我的手不由得攥紧了书脊。\n\n　　那个下午，我一口气读完了整本书。合上最后一页时，窗外夕阳正把天空染成金红色。我呆坐了很久，心里有什么东西被悄悄点燃了。\n\n　　从那以后，阅读成了我生活的一部分。失落时翻翻《苏东坡传》，那个被贬谪到天涯的诗人教我豁达；焦虑时读读《瓦尔登湖》，梭罗的宁静让我平静。考试失利的那个夜晚，是《钢铁是怎样炼成的》陪我度过最难熬的几个小时。\n\n　　如今，窗外依旧大雨滂沱，可我心里阳光灿烂。书架上那些被翻旧的书，是我最忠实的朋友。阅读，让我在文字中找到力量，在故事里遇见更好的自己。它让平凡的日子有了光芒，让生活，真正变得美好。',
          fullTextEn: '　　Rain hammered the windows, thunder rolled. Curled in the sofa corner, I opened my well-worn "The Old Man and the Sea." Lamplight glowed soft and warm; pages breathed faint ink. At that moment I was certain: reading makes life better.\n\n　　Yet once, I loathed books. In primary school, Mom forced "Andersen\'s Fairy Tales" on me — I\'d flip two pages then toss it aside, preferring to stare at the ceiling. Dense text felt like swarming ants. Every book-report assignment got cobbled together.\n\n　　Change came the summer of seventh grade. My cousin visited, casually bringing "The Old Man and the Sea." On a boring afternoon, I opened it — just killing time.\n\n　　The first page pulled me in. Santiago sailing alone unfolded before my eyes. I drifted with him on vast seas, felt sun scorching skin, watched sharks close in. When the old man said "A man can be destroyed but not defeated," my hand clenched the spine.\n\n　　I finished it in one sitting. Closing the last page, sunset had painted the sky gold and crimson. I sat stunned — something inside quietly ignited.\n\n　　After that, reading became part of life. When discouraged, Su Dongpo\'s biography taught resilience. When anxious, Thoreau\'s "Walden" brought calm. The night after a failed exam, "How the Steel Was Tempered" carried me through the hardest hours.\n\n　　Now rain still pours outside, but sunshine fills my heart. Those worn books on my shelf are my most faithful friends. Reading lets me find strength in words, meet a better self in stories. It gives ordinary days a glow, making life truly better.',
          highlights: [
            { text: '密密麻麻的文字像一群讨厌的蚂蚁', textEn: 'Dense text felt like swarming ants', why: '生动写出厌恶感', whyEn: 'Vivid dislike metaphor' },
            { text: '心里有什么东西被悄悄点燃了', textEn: 'Something inside quietly ignited', why: '含蓄写出转变', whyEn: 'Subtle transformation' },
            { text: '书架上那些被翻旧的书', textEn: 'Those worn books on my shelf', why: '细节见深情', whyEn: 'Detail reveals devotion' }
          ],
          sections: [
            { type: '起', fn: '现在', fnEn: 'Present', detail: '雨夜读书', detailEn: 'Reading on rainy night' },
            { type: '承', fn: '过去', fnEn: 'Past', detail: '厌恶读书', detailEn: 'Hating books' },
            { type: '转', fn: '转变', fnEn: 'Turning point', detail: '《老人与海》', detailEn: 'The Old Man and the Sea' },
            { type: '合', fn: '升华', fnEn: 'Elevation', detail: '阅读融入生活', detailEn: 'Reading as life companion' }
          ]
        },
        {
          title: '微笑，让生活更美好', titleEn: 'Smiles Make Life Better',
          score: 37, maxScore: 40, structure: 'pianDuanZuHe',
          techniques: ['pianDuanZuHe', 'xiJieMiaoXie', 'yiXiaoJianDa'],
          techniqueMarks: [
            { para: 0, text: '如果生活是一首长诗，微笑就是其中最温柔的标点', technique: '比喻', techniqueEn: 'Poetic Metaphor', effect: '诗与标点的比喻——微笑虽小却不可或缺', effectEn: 'Poem-and-punctuation metaphor — smiles are small yet indispensable' },
            { para: 1, text: '一只手稳稳托住了我的胳膊', technique: '细节描写', techniqueEn: 'Anchoring Detail', effect: '一只手的稳定感与人潮的混乱形成对比', effectEn: 'One steadying hand contrasts with the surrounding chaos' },
            { para: 1, text: '那个微笑，像一颗种子，悄悄种在我心里', technique: '比喻', techniqueEn: 'Seed Metaphor', effect: '种子意象预示微笑将生根发芽——为后文铺路', effectEn: 'Seed image foreshadows a smile that will grow — paving the way forward' },
            { para: 2, text: '我恨不得把自己藏进墙里', technique: '夸张心理', techniqueEn: 'Hyperbolic Shame', effect: '极端逃避写出考砸后的羞耻', effectEn: 'Extreme avoidance captures post-failure shame' },
            { para: 2, text: '她只是看了看我，微微笑了。"下次会更好的。"', technique: '语言+动作', techniqueEn: 'Minimal Dialog & Gesture', effect: '极简的笑+一句话——信任不需要长篇大论', effectEn: 'Minimal smile plus one sentence — trust needs no elaborate speech' },
            { para: 2, text: '像在说一件确定无疑的事', technique: '心理感受', techniqueEn: 'Perceived Certainty', effect: '老师的笃定转化为学生的力量', effectEn: 'Teacher\'s certainty becomes the student\'s strength' },
            { para: 3, text: '笑得满脸皱纹都舒展开来', technique: '细节描写', techniqueEn: 'Expressive Detail', effect: '皱纹舒展——笑容的物理形态写出感激的纯度', effectEn: 'Wrinkles smoothing — the physical form of a smile captures the purity of gratitude' },
            { para: 3, text: '给予微笑和帮助，比接受更让人快乐', technique: '以小见大', techniqueEn: 'Small-to-Big Insight', effect: '从帮助老人的经历提炼出给予的哲学', effectEn: 'From helping an elderly stranger to a philosophy of giving' },
            { para: 4, text: '三个微笑，三段记忆', technique: '结构呼应', techniqueEn: 'Structural Echo', effect: '数字对称收束三个片段', effectEn: 'Numerical symmetry closes three vignettes' },
            { para: 4, text: '学会把温暖传递给下一个人', technique: '点题升华', techniqueEn: 'Thematic Chain', effect: '从接受到传递——完成微笑的"涟漪"主题', effectEn: 'From receiving to passing on — completing the smile\'s ripple theme' }
          ],
          approach: '三个片段展示微笑的力量：陌生人的微笑、老师的微笑、自己给别人的微笑。',
          approachEn: 'Three vignettes show the power of smiles: a stranger\'s, a teacher\'s, and one\'s own smile given to others.',
          architecture: '总起：微笑是最美的语言；片段一：公交车上陌生人的微笑；片段二：考试失利后老师的微笑；片段三：帮迷路老人后收获的微笑；总结：传递微笑让生活美好。',
          architectureEn: 'Overview: Smiles are the most beautiful language. Scene 1: Stranger on bus. Scene 2: Teacher after exam failure. Scene 3: Helping a lost elderly. Conclusion: Passing smiles forward.',
          logic: '从接受微笑到传递微笑。', logicEn: 'From receiving smiles to passing them on.',
          skills: ['片段组合结构', '细节丰富', '以小见大'],
          skillsEn: ['Vignette structure', 'Rich details', 'Small moments, big theme'],
          fullText: '　　如果生活是一首长诗，微笑就是其中最温柔的标点。\n\n　　（一）\n　　那年冬天，我独自坐公交车去医院看望住院的外婆。车上人很多，我被挤在角落，手指冻得发僵。到站时人潮涌动，我被挤得踉跄了一下。一只手稳稳托住了我的胳膊。\n\n　　我抬头，是一位穿棕色大衣的阿姨。她没有说话，只是冲我笑了笑——那笑容很淡，却让我在寒冬里感到一阵暖意。下车后回头看，她已淹没在人群中。可那个微笑，像一颗种子，悄悄种在我心里。\n\n　　（二）\n　　初二期末数学考砸了。我拿着那张布满红叉的试卷，不敢抬头。走廊上遇见数学老师，我恨不得把自己藏进墙里。\n\n　　"站住。"老师叫住我。我准备好了迎接暴风雨。\n\n　　可她只是看了看我，微微笑了。"下次会更好的。"语气平静，像在说一件确定无疑的事。那个微笑没有一丝嘲讽，满是信任。走回教室的路上，我的脚步轻了许多。后来那个寒假，我把数学从头学了一遍。\n\n　　（三）\n　　去年暑假，我在小区门口看到一位老奶奶站在路口张望，手里攥着一张纸条。我走上前问她需不需要帮忙。她说要找儿子家，可记不清楼号了。\n\n　　我帮她辨认纸条上的地址，带她找到了那栋楼。老奶奶拉着我的手说谢谢，笑得满脸皱纹都舒展开来。那一刻，我忽然明白——原来给予微笑和帮助，比接受更让人快乐。\n\n　　三个微笑，三段记忆。生活中不缺少美好，缺少的是一个愿意微笑的人。当我们学会微笑，学会把温暖传递给下一个人，生活便真正美好起来。',
          fullTextEn: '　　If life is a long poem, smiles are its gentlest punctuation.\n\n　　(1)\n　　That winter, I rode the bus alone to visit Grandma in hospital. Crowded, I was squeezed into a corner, fingers numb. At my stop the crowd surged; I stumbled. A steady hand caught my arm.\n\n　　Looking up: a woman in a brown coat. She said nothing, just smiled — faint, yet warm in winter\'s chill. After I stepped off, she vanished into the crowd. But that smile, like a seed, quietly planted itself in my heart.\n\n　　(2)\n　　Eighth grade: bombed the math final. Holding my red-crossed paper, I couldn\'t look up. In the hallway I met my math teacher — I wanted to melt into the wall.\n\n　　"Stop." She called me. I braced for the storm.\n\n　　But she just looked at me and smiled gently. "Next time will be better." Calm, as if stating a certainty. No mockery — only trust. Walking back, my steps felt lighter. That winter break, I re-learned math from scratch.\n\n　　(3)\n　　Last summer, an elderly lady stood at the neighborhood entrance, clutching a note, looking lost. I asked if she needed help. She was looking for her son\'s apartment but couldn\'t remember the building number.\n\n　　I helped read the address and walked her there. She held my hand, thanking me, her wrinkled face blooming into a smile. That moment I understood: giving warmth feels even better than receiving it.\n\n　　Three smiles, three memories. Life doesn\'t lack beauty — it lacks people willing to smile. When we learn to smile and pass warmth to the next person, life truly becomes better.',
          highlights: [
            { text: '那笑容很淡，却让我在寒冬里感到一阵暖意', textEn: 'That faint smile brought warmth in winter\'s chill', why: '对比冬寒与心暖', whyEn: 'Contrasts winter cold with heart warmth' },
            { text: '像在说一件确定无疑的事', textEn: 'As if stating a certainty', why: '写出老师的信任', whyEn: 'Captures teacher\'s trust' },
            { text: '笑得满脸皱纹都舒展开来', textEn: 'Smiling until every wrinkle on her face bloomed open', why: '细节传神', whyEn: 'Expressive detail' }
          ],
          sections: [
            { type: '总起', fn: '引入', fnEn: 'Introduction', detail: '微笑是温柔标点', detailEn: 'Smiles as gentle punctuation' },
            { type: '片段一', fn: '陌生人', fnEn: 'Stranger', detail: '公交车上的温暖', detailEn: 'Bus warmth' },
            { type: '片段二', fn: '老师', fnEn: 'Teacher', detail: '失败后的信任', detailEn: 'Trust after failure' },
            { type: '片段三', fn: '给予', fnEn: 'Giving', detail: '帮助老人', detailEn: 'Helping elderly' },
            { type: '总结', fn: '升华', fnEn: 'Elevation', detail: '传递微笑', detailEn: 'Passing smiles forward' }
          ]
        },
        {
          title: '运动，让生活更美好', titleEn: 'Exercise Makes Life Better',
          score: 36, maxScore: 40, structure: 'diJinShi',
          techniques: ['xiJieMiaoXie', 'duiBi', 'xinLiMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '800米跑了4分52秒，不及格', technique: '数字引入', techniqueEn: 'Numerical Hook', effect: '精确数字建立起点的低——为后文对比蓄势', effectEn: 'Precise number establishes the low starting point — priming the contrast' },
            { para: 0, text: '恨不得找个地缝钻进去', technique: '心理夸张', techniqueEn: 'Hyperbolic Shame', effect: '夸张的羞耻感让读者共情', effectEn: 'Exaggerated shame creates instant reader empathy' },
            { para: 1, text: '冷风像刀子一样割在脸上', technique: '比喻通感', techniqueEn: 'Sensory Metaphor', effect: '触觉+痛觉——晨跑的残酷在一个比喻中具象', effectEn: 'Touch plus pain — morning running\'s cruelty made concrete in one metaphor' },
            { para: 1, text: '肺像要炸开，腿像灌了铅', technique: '双重比喻', techniqueEn: 'Dual Metaphor', effect: '两个器官两种痛——身体极限的全景呈现', effectEn: 'Two organs, two pains — a panorama of physical limits' },
            { para: 2, text: '妈妈就站在门口，安静地等', technique: '动作描写', techniqueEn: 'Silent Presence', effect: '不说话只等待——母爱以沉默的方式施压', effectEn: 'Not speaking, just waiting — maternal love exerting pressure through silence' },
            { para: 2, text: '那份无声的坚持比任何话语都有力量', technique: '议论点睛', techniqueEn: 'Reflective Insight', effect: '对母亲行为的评价揭示了真正的推动力', effectEn: 'Evaluating the mother\'s behavior reveals the true driving force' },
            { para: 3, text: '一口气跑完五圈而不觉得累', technique: '对比', techniqueEn: 'Progress Contrast', effect: '与第一天"两圈就喘"形成鲜明进步对比', effectEn: 'Sharp contrast with day one\'s "two laps and gasping" — tangible progress' },
            { para: 4, text: '以前遇到难题就想逃避，现在会告诉自己"再坚持一下"', technique: '对比升华', techniqueEn: 'Before-After Elevation', effect: '从身体到心态的迁移——运动的更深层意义', effectEn: 'Transfer from body to mindset — exercise\'s deeper meaning' },
            { para: 5, text: '800米跑了3分28秒，满分', technique: '数字对比', techniqueEn: 'Numerical Payoff', effect: '4:52→3:28——数字本身就是最好的叙事', effectEn: '4:52 to 3:28 — the numbers themselves tell the whole story' },
            { para: 6, text: '每一步都让我觉得：运动，让生活变得更美好了', technique: '点题', techniqueEn: 'Theme Statement', effect: '日常感受自然嵌入标题——点题不突兀', effectEn: 'Daily sensation naturally echoes the title — theme statement feels organic' }
          ],
          approach: '从体育差生到爱上跑步，运动改变了身体和心态。',
          approachEn: 'From gym class failure to running enthusiast — exercise transforms body and mindset.',
          architecture: '体育课800米不及格→被迫晨跑→从痛苦到享受→体测满分+心态改变。',
          architectureEn: 'Failed 800m → forced morning runs → pain to enjoyment → perfect score + mindset shift.',
          logic: '递进式：身体变化→心态变化→人生态度变化。', logicEn: 'Progressive: body → mindset → life outlook.',
          skills: ['跑步场景生动', '心理描写细腻', '结尾升华自然'],
          skillsEn: ['Vivid running scenes', 'Delicate psychology', 'Natural elevation'],
          fullText: '　　初一体测，800米跑了4分52秒，不及格。体育老师念成绩时，我恨不得找个地缝钻进去。\n\n　　妈妈知道后，做了一个让我崩溃的决定：每天早起半小时，去小区跑步。"从明天开始。"她的语气不容商量。\n\n　　第一天早上五点半，闹钟把我从被窝里拽出来。十一月的清晨，冷风像刀子一样割在脸上。我裹着厚外套，哆哆嗦嗦地迈开步子。跑了不到两圈，肺像要炸开，腿像灌了铅。我弯着腰大口喘气，想放弃。\n\n　　可妈妈就站在楼下等我。我咬咬牙，又跑了一圈。\n\n　　第一周是最难的。每天醒来，浑身酸痛，下楼梯都要扶墙。好几次我赖在床上不想起来，妈妈就站在门口，安静地等。那份无声的坚持比任何话语都有力量。\n\n　　第二周开始，身体慢慢适应了。呼吸不再那么急促，脚步也稳了。一个月后，我惊讶地发现自己能一口气跑完五圈而不觉得累。\n\n　　更大的变化在心里。以前遇到难题就想逃避，现在会告诉自己"再坚持一下"。以前考试紧张到手抖，现在能平静地深呼吸。跑步教会我的不只是体能，还有面对困难的勇气。\n\n　　初二体测，800米跑了3分28秒，满分。冲过终点线那一刻，我弯腰撑着膝盖，笑了。\n\n　　现在，晨跑已经成了习惯。清晨的空气带着露水的清甜，脚步声在安静的小区里回响。每一步都让我觉得：运动，让生活变得更美好了。',
          fullTextEn: '　　Seventh grade fitness test: 800 meters in 4:52 — failed. When the PE teacher read the result, I wished the ground would swallow me.\n\n　　Mom\'s response made me despair: wake up 30 minutes early every day to run. "Starting tomorrow." Non-negotiable.\n\n　　Day one, 5:30 AM, alarm dragged me from warmth. November dawn, cold wind cutting like knives. Wrapped in a thick jacket, I shuffled forward. Less than two laps in, lungs about to burst, legs filled with lead. Bent over gasping, wanting to quit.\n\n　　But Mom stood downstairs waiting. I gritted my teeth — one more lap.\n\n　　Week one was brutal. Every morning, aching everywhere, gripping the wall going downstairs. Several times I refused to get up; Mom stood at the door, waiting silently. That wordless persistence was more powerful than any speech.\n\n　　Week two, my body adapted. Breathing eased, steps steadied. A month later, I was shocked: five laps without fatigue.\n\n　　The bigger change was internal. Before, I fled from hard problems; now I told myself "one more push." Before, exam anxiety made my hands shake; now I could breathe calmly. Running taught more than fitness — it taught courage.\n\n　　Eighth grade test: 800 meters in 3:28 — full marks. Crossing the finish line, I bent over my knees and smiled.\n\n　　Now morning runs are habit. Dawn air carries dewy sweetness, footsteps echo in the quiet neighborhood. Every step confirms: exercise makes life truly better.',
          highlights: [
            { text: '冷风像刀子一样割在脸上', textEn: 'Cold wind cutting like knives across my face', why: '感官描写强烈', whyEn: 'Intense sensory detail' },
            { text: '那份无声的坚持比任何话语都有力量', textEn: 'That wordless persistence was more powerful than any speech', why: '侧面写母爱', whyEn: 'Indirect mother\'s love' },
            { text: '跑步教会我的不只是体能', textEn: 'Running taught more than fitness', why: '由表及里的升华', whyEn: 'Surface-to-depth elevation' }
          ],
          sections: [
            { type: '起因', fn: '问题', fnEn: 'Problem', detail: '800米不及格', detailEn: '800m failure' },
            { type: '经过', fn: '挣扎', fnEn: 'Struggle', detail: '痛苦晨跑', detailEn: 'Painful morning runs' },
            { type: '变化', fn: '转变', fnEn: 'Change', detail: '身心双重变化', detailEn: 'Body and mind transform' },
            { type: '结果', fn: '收获', fnEn: 'Harvest', detail: '满分+勇气', detailEn: 'Full marks + courage' }
          ]
        },
        {
          title: '善良，让生活更美好', titleEn: 'Kindness Makes Life Better',
          score: 37, maxScore: 40, structure: 'zongFenZong',
          techniques: ['yiXiaoJianDa', 'xiJieMiaoXie', 'shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '善良是一颗石子，投进生活的湖面，荡开一圈圈涟漪', technique: '比喻总领', techniqueEn: 'Framing Metaphor', effect: '涟漪意象预告连锁传递的主线', effectEn: 'Ripple image previews the chain-reaction throughline' },
            { para: 1, text: '其实那天爸爸没来，我在传达室等了半小时', technique: '补叙', techniqueEn: 'Retrospective Correction', effect: '善意的谎言被揭开——善良是有代价的', effectEn: 'The white lie uncovered — kindness has a cost, quietly paid' },
            { para: 1, text: '我觉得那半小时的等待很值得', technique: '心理描写', techniqueEn: 'Evaluative Interior', effect: '主观评价让善举有了温度', effectEn: 'Subjective evaluation gives the kind act warmth' },
            { para: 2, text: '我没太在意，以为这件事就过去了', technique: '叙事铺垫', techniqueEn: 'Understated Setup', effect: '刻意轻描淡写为后文的连锁反应蓄势', effectEn: 'Deliberate understatement builds anticipation for the chain reaction' },
            { para: 3, text: '小林放下水杯跑过去："我帮你！"', technique: '动作语言', techniqueEn: 'Action-Dialog Combo', effect: '放下+跑过去——善意传递的第一个环节自然发生', effectEn: 'Setting down and running over — the first link of kindness chain happens naturally' },
            { para: 4, text: '这时小陈拿着扫帚出现在门口', technique: '细节', techniqueEn: 'Arrival Detail', effect: '不期而至的帮助——善意的回旋镖抵达', effectEn: 'Unexpected help arrives — the kindness boomerang lands' },
            { para: 4, text: '十分钟，教室干干净净', technique: '简洁叙述', techniqueEn: 'Concise Result', effect: '一句话收束——效率本身就是合作的证明', effectEn: 'One sentence wraps up — efficiency itself proves collaboration\'s power' },
            { para: 5, text: '夕阳把我们的影子拉得很长', technique: '环境描写', techniqueEn: 'Sunset Setting', effect: '夕阳长影——温暖的画面为反思提供空间', effectEn: 'Long sunset shadows — warm imagery creates space for reflection' },
            { para: 5, text: '这些小事像接力棒一样，在人与人之间传递', technique: '比喻串联', techniqueEn: 'Connecting Metaphor', effect: '接力棒意象将三个片段串成一条逻辑链', effectEn: 'Relay-baton image chains three vignettes into a single logical arc' },
            { para: 6, text: '那颗石子很小，涟漪却可以很远', technique: '首尾呼应', techniqueEn: 'Structural Echo', effect: '回扣开篇涟漪比喻，以最少的字完成最有力的收束', effectEn: 'Callbacks to opening ripple metaphor — maximum closure in minimum words' }
          ],
          approach: '一次善意的举动引发连锁反应，善良在人与人之间传递。',
          approachEn: 'One kind act triggers a chain reaction — kindness passes between people.',
          architecture: '总：善良像涟漪；分：雨天借伞给同学→同学帮了值日生→值日生帮了我；总：善良是最好的回旋镖。',
          architectureEn: 'Overview: Kindness like ripples. Detail: Lending umbrella → classmate helps duty student → duty student helps me. Summary: Kindness is the best boomerang.',
          logic: '善意的连锁传递。', logicEn: 'Chain of kindness.',
          skills: ['巧合中见必然', '首尾呼应', '以小见大'],
          skillsEn: ['Inevitability in coincidence', 'Echo structure', 'Small-big theme'],
          fullText: '　　善良是一颗石子，投进生活的湖面，荡开一圈圈涟漪。\n\n　　那是一个下雨的周三。放学时雨突然下大了，我带了伞，看见同桌小林站在走廊下发愁——她忘带伞了，家又远。我把伞递给她："你先用吧，我爸来接我。"其实那天爸爸没来，我在传达室等了半小时才等到雨小。但看到小林冲进雨里，打着我的伞跑远的背影，我觉得那半小时的等待很值得。\n\n　　第二天，小林把伞还给我，说了句"谢谢"。我没太在意，以为这件事就过去了。\n\n　　一周后，课间操时间，我注意到值日生小陈一个人搬六把椅子，累得满头大汗。小林放下水杯跑过去："我帮你！"两个人一趟就搬完了。小陈擦着汗笑了。\n\n　　又过了几天，轮到我扫地。扫到最后一间教室时已经快天黑了，我又累又急。这时小陈拿着扫帚出现在门口："一起扫吧，快点弄完回家。"十分钟，教室干干净净。\n\n　　走在回家的路上，夕阳把我们的影子拉得很长。我忽然想起那个雨天——一把伞，一次帮忙搬椅子，一次帮忙扫地。这些小事像接力棒一样，在人与人之间传递。\n\n　　善良不需要惊天动地。一把伞、一句话、一双帮忙的手，就够了。当善良在人群中流动，生活便在不知不觉中变得更美好。\n\n　　那颗石子很小，涟漪却可以很远。',
          fullTextEn: '　　Kindness is a pebble tossed into life\'s lake, sending ripples outward.\n\n　　A rainy Wednesday. Rain poured at dismissal. I had an umbrella; deskmate Xiao Lin stood worrying — she\'d forgotten hers, and home was far. I handed mine over: "Take it, my dad\'s picking me up." Actually, Dad didn\'t come. I waited 30 minutes in the guard booth. But watching Xiao Lin run into the rain under my umbrella, I felt the wait worthwhile.\n\n　　Next day, she returned it with a "thanks." I thought nothing more of it.\n\n　　A week later, during break, I noticed duty student Xiao Chen hauling six chairs alone, dripping sweat. Xiao Lin set down her water and ran over: "I\'ll help!" Two people, one trip, done. Xiao Chen smiled, wiping sweat.\n\n　　Days later, my turn to sweep. By the last classroom it was nearly dark — tired and anxious. Then Xiao Chen appeared with a broom: "Let\'s sweep together so we can go home." Ten minutes — spotless.\n\n　　Walking home, sunset stretched our shadows long. I recalled that rainy day — an umbrella, help with chairs, help sweeping. Small acts passed like a relay baton between people.\n\n　　Kindness needn\'t be earth-shaking. An umbrella, a word, a helping hand — enough. When kindness flows through a community, life quietly becomes better.\n\n　　The pebble is small, but ripples travel far.',
          highlights: [
            { text: '善良是一颗石子，投进生活的湖面', textEn: 'Kindness is a pebble tossed into life\'s lake', why: '比喻开篇点题', whyEn: 'Metaphor opens theme' },
            { text: '小事像接力棒一样', textEn: 'Small acts passed like a relay baton', why: '精妙比喻', whyEn: 'Apt metaphor for chain kindness' },
            { text: '那颗石子很小，涟漪却可以很远', textEn: 'The pebble is small, but ripples travel far', why: '首尾呼应升华', whyEn: 'Echo and elevation' }
          ],
          sections: [
            { type: '总起', fn: '比喻', fnEn: 'Metaphor', detail: '善良如涟漪', detailEn: 'Kindness as ripples' },
            { type: '分述一', fn: '借伞', fnEn: 'Umbrella', detail: '雨天善举', detailEn: 'Rainy day kindness' },
            { type: '分述二', fn: '传递', fnEn: 'Passing on', detail: '帮搬椅子', detailEn: 'Helping with chairs' },
            { type: '分述三', fn: '回旋', fnEn: 'Boomerang', detail: '帮我扫地', detailEn: 'Helping me sweep' },
            { type: '总结', fn: '升华', fnEn: 'Elevation', detail: '善良让生活美好', detailEn: 'Kindness beautifies life' }
          ]
        },
        {
          title: '音乐，让生活更美好', titleEn: 'Music Makes Life Better',
          score: 36, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['tongGan', 'xinLiMiaoXie', 'huanJingChenTuo'],
          techniqueMarks: [
            { para: 0, text: '音符像萤火虫一样飘散在夜色里', technique: '通感比喻', techniqueEn: 'Synesthetic Metaphor', effect: '听觉转化为视觉——音符有了形状和飞行轨迹', effectEn: 'Sound becomes sight — notes gain shape and flight paths' },
            { para: 0, text: '月光洒在吉他面板上，镀了一层银白', technique: '环境描写', techniqueEn: 'Moonlit Setting', effect: '月光+吉他的画面营造诗意氛围', effectEn: 'Moonlight on guitar creates a poetic atmosphere' },
            { para: 1, text: '手指按弦痛得要命，左手指尖很快磨出了水泡', technique: '生理细节', techniqueEn: 'Physical Detail', effect: '疼痛和水泡写出初学的真实代价', effectEn: 'Pain and blisters capture the real cost of beginning' },
            { para: 1, text: '难听的噪音让隔壁邻居敲了三次墙', technique: '细节夸张', techniqueEn: 'Humorous Detail', effect: '敲墙三次——自嘲中的幽默让失败可爱', effectEn: 'Three wall-knocks — self-deprecating humor makes failure endearing' },
            { para: 2, text: '鬼使神差地把它抱了出来', technique: '心理描写', techniqueEn: 'Inexplicable Impulse', effect: '"鬼使神差"写出潜意识的牵引——音乐一直在等', effectEn: '"Inexplicably" captures the subconscious pull — music was always waiting' },
            { para: 3, text: '弹得磕磕绊绊，甚至有几个音是错的', technique: '细节描写', techniqueEn: 'Imperfect Detail', effect: '不完美的演奏反而写出真实和触动', effectEn: 'Imperfect playing paradoxically conveys authenticity and emotional impact' },
            { para: 3, text: '心里那些乱七八糟的情绪居然慢慢平静了', technique: '心理描写', techniqueEn: 'Emotional Calming', effect: '音乐的治愈力在不经意间显现', effectEn: 'Music\'s healing power manifests unintentionally' },
            { para: 4, text: '音乐能说出嘴巴说不出的话', technique: '以小见大', techniqueEn: 'Essential Insight', effect: '一句话道出音乐存在的终极理由', effectEn: 'One sentence articulates the ultimate reason music exists' },
            { para: 4, text: '那些委屈、难过、想和好又拉不下面子的心情', technique: '排比心理', techniqueEn: 'Psychological Catalog', effect: '三种情绪的精确列举写出青春期的复杂', effectEn: 'Precise enumeration of three emotions captures adolescent complexity' },
            { para: 6, text: '它不会评判我，不会嫌我烦，只是安静地陪着我', technique: '拟人排比', techniqueEn: 'Personified Parallelism', effect: '音乐被赋予知己品格——不评判的陪伴', effectEn: 'Music granted the character of a confidante — companionship without judgment' }
          ],
          approach: '通过学吉他的经历，展现音乐如何成为生活中的光。',
          approachEn: 'Through learning guitar, showing how music becomes light in life.',
          architecture: '起：深夜弹吉他；承：初学的挫败；转：一首歌打动自己；合：音乐成为表达方式。',
          architectureEn: 'Open: Playing guitar at night. Develop: Early frustration. Turn: One song moves self. Close: Music becomes expression.',
          logic: '从技术到情感的跨越。', logicEn: 'From technique to emotion.',
          skills: ['通感运用', '心理刻画', '环境衬托'],
          skillsEn: ['Synesthesia', 'Psychological portrayal', 'Environmental setting'],
          fullText: '　　深夜，一个人坐在阳台上，指尖拨动琴弦，音符像萤火虫一样飘散在夜色里。月光洒在吉他面板上，镀了一层银白。这样的夜晚，因为音乐而格外美好。\n\n　　可学吉他的开始并不美好。初二生日，爸爸送了我一把吉他。兴冲冲地抱起来，却发现手指按弦痛得要命，左手指尖很快磨出了水泡。练了一周，连最简单的和弦都按不利索，难听的噪音让隔壁邻居敲了三次墙。\n\n　　我把吉他塞进角落，再也不想碰它。\n\n　　三个月后的一天，心情特别糟——和好朋友闹了矛盾，互相说了很多难听的话。回到家，坐在床边发呆。目光无意间扫到角落的吉他，鬼使神差地把它抱了出来。\n\n　　随便拨了几下，那些简单的音符在安静的房间里轻轻回荡。我开始试着弹那首只学了一半的《夜空中最亮的星》。弹得磕磕绊绊，甚至有几个音是错的。可当旋律断断续续地响起来时，心里那些乱七八糟的情绪居然慢慢平静了。\n\n　　那天晚上，我反复弹了十几遍。指尖的老茧不知什么时候已经长好了，按弦不再疼。更重要的是，我发现音乐能说出嘴巴说不出的话——那些委屈、难过、想和好又拉不下面子的心情，全都融进了琴声里。\n\n　　第二天，我主动找朋友道了歉。\n\n　　从那以后，高兴的时候弹欢快的曲子，难过的时候弹舒缓的旋律。音乐成了我最私密的日记本。它不会评判我，不会嫌我烦，只是安静地陪着我。\n\n　　音乐，让我学会了和自己相处，也让生活多了一份温柔的美好。',
          fullTextEn: '　　Late night, sitting on the balcony, fingers plucking strings, notes drifting like fireflies into darkness. Moonlight silvered the guitar\'s face. Nights like these, made beautiful by music.\n\n　　But starting guitar wasn\'t beautiful. For my eighth-grade birthday, Dad gave me a guitar. Excitedly picking it up — fingers screaming against strings, blisters forming within days. After a week, I couldn\'t even manage basic chords; ugly noise made neighbors bang the wall three times.\n\n　　I shoved the guitar into a corner, never wanting to touch it again.\n\n　　Three months later, an awful day — a fight with my best friend, harsh words exchanged. Home, sitting on the bed, staring blankly. Eyes wandered to the corner guitar. Inexplicably, I pulled it out.\n\n　　Random plucks — simple notes echoing in the quiet room. I tried the half-learned "Brightest Star in the Night Sky." Stumbling, some notes wrong. Yet as the broken melody emerged, the emotional chaos inside gradually calmed.\n\n　　That night, I played it a dozen times over. Calluses had formed — pressing strings no longer hurt. More importantly, I discovered music could say what mouths couldn\'t — the grievance, sadness, wanting to reconcile but too proud — all dissolved into the music.\n\n　　Next day, I apologized first.\n\n　　Since then, happy days get upbeat tunes, sad ones get gentle melodies. Music became my most private diary. It doesn\'t judge, doesn\'t tire of me, just quietly keeps me company.\n\n　　Music taught me to be at peace with myself, adding gentle beauty to life.',
          highlights: [
            { text: '音符像萤火虫一样飘散在夜色里', textEn: 'Notes drifting like fireflies into the darkness', why: '通感比喻优美', whyEn: 'Beautiful synesthetic metaphor' },
            { text: '音乐能说出嘴巴说不出的话', textEn: 'Music can say what mouths cannot', why: '精准概括音乐本质', whyEn: 'Captures music\'s essence' },
            { text: '音乐成了我最私密的日记本', textEn: 'Music became my most private diary', why: '比喻新颖贴切', whyEn: 'Fresh apt metaphor' }
          ],
          sections: [
            { type: '起', fn: '现在', fnEn: 'Present', detail: '深夜弹琴', detailEn: 'Night guitar' },
            { type: '承', fn: '挫败', fnEn: 'Frustration', detail: '学琴放弃', detailEn: 'Giving up guitar' },
            { type: '转', fn: '重拾', fnEn: 'Rediscovery', detail: '情绪低谷弹琴', detailEn: 'Playing at low point' },
            { type: '合', fn: '融入', fnEn: 'Integration', detail: '音乐成为伴侣', detailEn: 'Music as companion' }
          ]
        }
      ]
    },
    {
      id: 'yn2019_comp1',
      paperId: 'yn2019',
      year: 2019,
      region: '云南省',
      prompt: '请以"我______解决了这个问题"为题，写一篇文章。不少于600字。',
      promptEn: 'Write on "I ______ Solved This Problem." 600+ words.',
      type: 'semiOpenTopic',
      category: '半命题作文',
      categoryEn: 'Semi-open Topic',
      wordCount: 600,
      guide: {
        analysis: '横线上填写解决问题的方式（独立/合作/换个角度/鼓起勇气等），重点写解决问题的过程和收获。',
        analysisEn: 'Fill in the method of solving (independently/cooperatively/from a new angle/with courage). Focus on the process and what was gained.',
        keyPoints: ['问题要具体真实', '过程要曲折', '解决方式要呼应补题', '有成长感悟'],
        keyPointsEn: ['Specific real problem', 'Twisting process', 'Method matches the title', 'Growth insight'],
        pitfalls: ['问题太简单无张力', '解决过程一笔带过', '感悟空洞'],
        pitfallsEn: ['Problem too trivial', 'Process skimmed over', 'Empty reflection']
      },
      essays: [
        {
          title: '我鼓起勇气解决了这个问题', titleEn: 'I Mustered Courage to Solve This Problem',
          score: 38, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['xinLiMiaoXie', 'xiJieMiaoXie', 'duiBi'],
          techniqueMarks: [
            { para: 0, text: '你来吧，你写的稿子最好', technique: '语言描写', techniqueEn: 'Ironic Compliment', effect: '表扬变成负担——赞美反而制造恐惧', effectEn: 'Compliment becomes burden — praise ironically creates fear' },
            { para: 0, text: '我的心瞬间沉到了谷底', technique: '心理描写', techniqueEn: 'Visceral Reaction', effect: '心理下沉的体感写出瞬间的恐惧', effectEn: 'The sinking sensation makes instant fear physical' },
            { para: 1, text: '一千个借口在脑子里转', technique: '夸张', techniqueEn: 'Hyperbole', effect: '数字夸张写出逃避的疯狂', effectEn: 'Numerical exaggeration captures the desperation of evasion' },
            { para: 2, text: '全身的血液都在往头顶涌', technique: '生理描写', techniqueEn: 'Somatic Detail', effect: '血液上涌的感觉让紧张具体到身体层面', effectEn: 'Blood rushing to the head — anxiety rendered at the bodily level' },
            { para: 2, text: '从座位到讲台只有七八步，可我觉得走了一个世纪', technique: '夸张对比', techniqueEn: 'Temporal Hyperbole', effect: '时空扭曲写出恐惧中的每一步都是煎熬', effectEn: 'Time distortion — every step an agony under fear\'s magnification' },
            { para: 3, text: '手里的稿子被攥得皱巴巴的，腿在微微发抖', technique: '细节描写', techniqueEn: 'Physical Detail', effect: '皱稿+抖腿——双重细节写出极度紧张', effectEn: 'Crumpled paper plus trembling legs — dual details convey extreme anxiety' },
            { para: 3, text: '大脑一瞬间一片空白', technique: '心理描写', techniqueEn: 'Mental Blank', effect: '空白的瞬间是恐惧的顶峰', effectEn: 'The blank moment is fear\'s apex' },
            { para: 4, text: '声音小得像蚊子叫。但我发现——没人笑我', technique: '比喻+转折', techniqueEn: 'Simile & Turn', effect: '蚊子声的自嘲与"没人笑"的转折同时发生', effectEn: 'Self-deprecating whisper and the relief of no laughter arrive together' },
            { para: 5, text: '第二句话，声音大了一些。第三句话，我抬起了头', technique: '递进', techniqueEn: 'Gradual Build', effect: '逐句递进写出信心的恢复过程', effectEn: 'Sentence-by-sentence progression tracks the recovery of confidence' },
            { para: 6, text: '很多问题并不需要多高明的方法，只需要鼓起勇气，迈出第一步', technique: '点题升华', techniqueEn: 'Thematic Elevation', effect: '从讲台经验提炼为解决问题的通用法则', effectEn: 'Podium experience distilled into a universal problem-solving principle' }
          ],
          approach: '害怕当众发言的我，在课堂展示中鼓起勇气完成演讲。',
          approachEn: 'Terrified of public speaking, I muster courage for a class presentation.',
          architecture: '起：被老师点名做课堂展示；承：恐惧和逃避心理；转：深呼吸走上讲台；合：发现勇气能解决很多问题。',
          architectureEn: 'Open: Teacher assigns class presentation. Develop: Fear and avoidance. Turn: Deep breath, stepping up. Close: Courage solves many problems.',
          logic: '从恐惧到面对到突破。', logicEn: 'From fear to confrontation to breakthrough.',
          skills: ['心理描写层层推进', '讲台场景生动', '前后心态对比'],
          skillsEn: ['Layered psychology', 'Vivid podium scene', 'Before-after contrast'],
          fullText: '　　"下周一，请每组派代表做课堂展示。"语文老师话音刚落，组长就看向了我："你来吧，你写的稿子最好。"\n\n　　我的心瞬间沉到了谷底。写稿子我可以，但当着全班四十多人说话——光是想想，手心就开始冒汗。\n\n　　接下来几天，我一边准备稿子，一边想着怎么逃避。能不能说生病了？能不能让别人代替？一千个借口在脑子里转，可每一个都显得那么可笑。周日晚上，我对着镜子练了无数遍，可一想到明天要面对那么多双眼睛，声音就不由自主地发抖。\n\n　　周一上午第三节课。老师说："开始吧。"我感觉全身的血液都在往头顶涌。前面两组已经展示完了，轮到我了。\n\n　　从座位到讲台只有七八步，可我觉得走了一个世纪。手里的稿子被攥得皱巴巴的，腿在微微发抖。站在讲台上，四十多双眼睛齐刷刷看过来，大脑一瞬间一片空白。\n\n　　"深呼吸。"我听见自己在心里说。吸气，呼气。再吸气，再呼气。\n\n　　"大家好，我们组展示的主题是……"第一句话挤出来的时候，声音小得像蚊子叫。但我发现——没人笑我。同桌小杰朝我点了点头，眼神里满是鼓励。\n\n　　第二句话，声音大了一些。第三句话，我抬起了头。到第四句话的时候，我几乎忘了紧张。那些准备了无数遍的内容，像水一样自然地流了出来。\n\n　　五分钟后，掌声响起。我愣了一秒，然后笑了——不是因为展示完美，而是因为我真的站在这里做到了。\n\n　　回到座位上，手还在微微颤抖，但心里却前所未有地轻松。原来很多问题并不需要多高明的方法，只需要鼓起勇气，迈出第一步。',
          fullTextEn: '　　"Next Monday, each group sends a representative for class presentation." Before the teacher finished, my team leader turned to me: "You go — your draft is the best."\n\n　　My heart sank. Writing was fine, but speaking before forty-plus classmates — just imagining it made my palms sweat.\n\n　　The next few days: preparing the draft while plotting escape. Call in sick? Get a substitute? A thousand excuses spun in my head, each more ridiculous. Sunday night I practiced endlessly before the mirror, but imagining all those eyes made my voice shake.\n\n　　Monday, third period. "Let\'s begin." Blood rushed to my head. Two groups finished — my turn.\n\n　　Seven or eight steps from seat to podium felt like a century. My crumpled draft trembled in my hand; legs shook. On the podium, forty-plus pairs of eyes locked on me. Mind — blank.\n\n　　"Breathe." I heard myself say internally. In. Out. In. Out.\n\n　　"Hello everyone, our topic is..." The first sentence came out mosquito-quiet. But nobody laughed. Deskmate Xiao Jie nodded, eyes full of encouragement.\n\n　　Second sentence, louder. Third, I raised my head. By the fourth, I nearly forgot the nerves. The material I\'d rehearsed countless times flowed like water.\n\n　　Five minutes later: applause. I froze one second, then smiled — not because it was perfect, but because I actually stood here and did it.\n\n　　Back at my seat, hands still slightly trembling, yet my heart felt lighter than ever. Many problems don\'t need brilliant methods — just the courage to take the first step.',
          highlights: [
            { text: '从座位到讲台只有七八步，可我觉得走了一个世纪', textEn: 'Seven steps from seat to podium felt like a century', why: '夸张写出恐惧', whyEn: 'Hyperbole captures fear' },
            { text: '那些内容像水一样自然地流了出来', textEn: 'The material flowed like water', why: '比喻写出释然', whyEn: 'Metaphor for release' },
            { text: '鼓起勇气，迈出第一步', textEn: 'Mustering courage to take the first step', why: '点题升华', whyEn: 'Theme and elevation' }
          ],
          sections: [
            { type: '起', fn: '任务', fnEn: 'Task', detail: '被指派展示', detailEn: 'Assigned presentation' },
            { type: '承', fn: '恐惧', fnEn: 'Fear', detail: '逃避和焦虑', detailEn: 'Avoidance and anxiety' },
            { type: '转', fn: '突破', fnEn: 'Breakthrough', detail: '讲台上开口', detailEn: 'Speaking on podium' },
            { type: '合', fn: '感悟', fnEn: 'Insight', detail: '勇气是答案', detailEn: 'Courage is the answer' }
          ]
        },
        {
          title: '我换了个角度解决了这个问题', titleEn: 'I Changed My Perspective to Solve This Problem',
          score: 37, maxScore: 40, structure: 'zongFenZong',
          techniques: ['xiJieMiaoXie', 'biYu', 'jiaXuJiaYi'],
          techniqueMarks: [
            { para: 0, text: '墙推不倒，是因为我们一直在推同一面', technique: '哲理比喻', techniqueEn: 'Philosophical Metaphor', effect: '寓言式开篇建立全篇主旨——思维定式的墙', effectEn: 'Parable-style opening establishes the essay\'s thesis — the wall of fixed thinking' },
            { para: 1, text: '辅助线画了十几条，草稿纸用了五张', technique: '数字细节', techniqueEn: 'Quantified Effort', effect: '具体数字写出努力的徒劳', effectEn: 'Concrete numbers render futile effort tangible' },
            { para: 1, text: '脑子里的思路全部走进了死胡同', technique: '比喻', techniqueEn: 'Dead-End Metaphor', effect: '死胡同意象写出思维的封闭', effectEn: 'Dead-end image captures mental closure' },
            { para: 2, text: '烦躁地把笔一丢', technique: '动作描写', techniqueEn: 'Frustrated Action', effect: '一个摔笔的动作浓缩两小时的挫败', effectEn: 'One pen-slam distills two hours of frustration' },
            { para: 3, text: '她看了一眼我的草稿纸，笑了', technique: '细节描写', techniqueEn: 'Teacher\'s Reaction', effect: '一笑一看——老师的洞察在笑中', effectEn: 'A glance and a smile — the teacher\'s insight contained in one expression' },
            { para: 3, text: '你有没有试过反过来想？', technique: '语言描写', techniqueEn: 'Pivotal Dialog', effect: '全篇最关键的一句话——认知的转折点', effectEn: 'The essay\'s most crucial line — the cognitive turning point' },
            { para: 4, text: '假设结论成立，一步步往回推', technique: '过程描写', techniqueEn: 'Process Narration', effect: '逆向推导的思路清晰呈现，读者能跟随', effectEn: 'Reverse reasoning presented step by step — readers can follow along' },
            { para: 5, text: '一条思路像多米诺骨牌一样，啪啪啪地倒了下去', technique: '比喻拟声', techniqueEn: 'Metaphor with Onomatopoeia', effect: '多米诺+拟声——智力突破的畅快感跃然纸上', effectEn: 'Dominoes plus sound effects — the thrill of intellectual breakthrough leaps off the page' },
            { para: 5, text: '十五分钟，整道题证完了', technique: '时间对比', techniqueEn: 'Time Contrast', effect: '两小时vs十五分钟——角度改变效率的铁证', effectEn: 'Two hours versus fifteen minutes — irrefutable proof that perspective changes everything' },
            { para: 6, text: '很多解不开的结，换根手指一拉就开了', technique: '类比升华', techniqueEn: 'Analogical Elevation', effect: '从数学到人生——生活化比喻让道理可触可感', effectEn: 'Math to life — an everyday metaphor makes the lesson tangible' }
          ],
          approach: '数学难题百思不解，换个思路从逆向推导，最终豁然开朗。',
          approachEn: 'A math problem defies attempts until reverse-engineering provides the breakthrough.',
          architecture: '总：思维定式是最大的敌人；分：正面硬算失败→老师提示"换个角度"→逆向推导成功；总：解题如解生活。',
          architectureEn: 'Overview: Fixed thinking is the enemy. Detail: Direct approach fails → teacher hints "try another angle" → reverse engineering succeeds. Summary: Solving problems like solving life.',
          logic: '从正向到逆向的思维转换。', logicEn: 'From forward to reverse thinking.',
          skills: ['解题过程有层次', '类比升华', '叙议结合'],
          skillsEn: ['Layered problem-solving', 'Analogical elevation', 'Narrative-commentary blend'],
          fullText: '　　有时候，墙推不倒，是因为我们一直在推同一面。\n\n　　初三上学期的一个周末，我对着一道几何证明题坐了整整两个小时。辅助线画了十几条，草稿纸用了五张，脑子里的思路全部走进了死胡同。\n\n　　题目要求证明两条线段相等。我的思路一直是：先证三角形全等，再推出对应边相等。可无论怎么找条件，三角形全等的五个判定定理没有一个能用上。\n\n　　我把铅笔重重摔在桌上，烦躁地揉了揉太阳穴。\n\n　　周一数学课，老师讲到这道题。她看了一眼我的草稿纸，笑了："你的思路没错，但你有没有试过反过来想？"\n\n　　反过来？我愣住了。\n\n　　"如果这两条线段相等，那会产生什么结果？倒推回去，看看需要什么条件。"\n\n　　那天晚上，我重新打开作业本。这一次，我不是从已知条件出发，而是假设结论成立，一步步往回推。如果AB=CD，那么三角形ABE和三角形CDF就全等。全等需要什么？需要一组边和一组角相等。角相等怎么来？平行线的性质！\n\n　　一条思路像多米诺骨牌一样，啪啪啪地倒了下去。十五分钟，整道题证完了。我盯着自己写满的半页纸，愣了好一会儿，然后忍不住笑出了声。\n\n　　原来答案一直在那里。不是题目太难，是我太执着于一个方向。换个角度，路就通了。\n\n　　后来遇到生活中的难题，我总会想起那道几何题。和朋友闹矛盾，换个角度想想他的处境；考试没考好，换个角度看看自己的进步。很多解不开的结，换根手指一拉就开了。',
          fullTextEn: '　　Sometimes we can\'t push through a wall because we keep pushing the same side.\n\n　　A weekend in ninth grade: I sat before a geometry proof for two solid hours. Fifteen auxiliary lines, five sheets of scratch paper, every mental path a dead end.\n\n　　The problem: prove two line segments equal. My approach: prove triangles congruent, then derive corresponding sides. But none of the five congruence theorems applied.\n\n　　I slammed my pencil down, rubbing my temples in frustration.\n\n　　Monday math class, the teacher saw my scratch paper and smiled: "Your thinking isn\'t wrong — but have you tried working backwards?"\n\n　　Backwards? I froze.\n\n　　"If these segments are equal, what follows? Trace back to see what conditions you need."\n\n　　That evening, I reopened my notebook. This time, instead of starting from given conditions, I assumed the conclusion true and worked backward. If AB=CD, then triangles ABE and CDF are congruent. What\'s needed? One pair of sides and angles. Where do equal angles come from? Parallel line properties!\n\n　　A chain of reasoning fell like dominoes — click, click, click. Fifteen minutes: proof complete. I stared at the half-page, stunned, then burst out laughing.\n\n　　The answer was always there. Not the problem being too hard — I was too fixated on one direction. Change the angle, and the path opens.\n\n　　Later, facing life\'s problems, I remember that geometry proof. Conflict with friends? Consider their position. Bad exam? Look at my progress. Many unsolvable knots come loose with a different finger.',
          highlights: [
            { text: '墙推不倒，是因为我们一直在推同一面', textEn: 'We can\'t push through because we keep pushing the same side', why: '哲理开篇', whyEn: 'Philosophical opening' },
            { text: '思路像多米诺骨牌一样', textEn: 'A chain of reasoning fell like dominoes', why: '比喻贴切', whyEn: 'Apt metaphor for chain reasoning' },
            { text: '换根手指一拉就开了', textEn: 'Try a different finger and it comes loose', why: '生活化比喻', whyEn: 'Everyday metaphor for perspective shift' }
          ],
          sections: [
            { type: '总起', fn: '哲理', fnEn: 'Philosophy', detail: '推墙比喻', detailEn: 'Wall-pushing metaphor' },
            { type: '困境', fn: '正面', fnEn: 'Direct', detail: '硬算失败', detailEn: 'Brute force fails' },
            { type: '转机', fn: '提示', fnEn: 'Hint', detail: '老师点拨', detailEn: 'Teacher\'s guidance' },
            { type: '突破', fn: '逆向', fnEn: 'Reverse', detail: '倒推成功', detailEn: 'Reverse reasoning succeeds' },
            { type: '总结', fn: '类比', fnEn: 'Analogy', detail: '解题如解生活', detailEn: 'Problem-solving as life skill' }
          ]
        },
        {
          title: '我和同学一起解决了这个问题', titleEn: 'My Classmates and I Solved This Problem Together',
          score: 36, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['yuYanMiaoXie', 'xiJieMiaoXie', 'duiBi'],
          techniqueMarks: [
            { para: 0, text: '名单公布那天，我们组四个人就吵了起来', technique: '冲突引入', techniqueEn: 'Conflict Hook', effect: '开篇直入矛盾，紧张感立即建立', effectEn: 'Opens straight into conflict — tension established immediately' },
            { para: 1, text: '交接棒掉了三次', technique: '细节', techniqueEn: 'Concrete Detail', effect: '三次掉棒量化了内耗的代价', effectEn: 'Three baton drops quantify the cost of internal conflict' },
            { para: 1, text: '你太慢了！""你接棒手伸得不对！', technique: '语言描写', techniqueEn: 'Confrontational Dialog', effect: '对骂的语言直接呈现矛盾激化', effectEn: 'Trading accusations directly presents escalating conflict' },
            { para: 2, text: '不来就不来，没他我们照样跑', technique: '语言描写', techniqueEn: 'Stubborn Dialog', effect: '赌气的话暴露问题的根源——各自为政', effectEn: 'Spiteful words expose the root problem — individualism' },
            { para: 3, text: '你们的目标是什么——是证明谁跑得快，还是让班级拿好名次？', technique: '反问点醒', techniqueEn: 'Awakening Question', effect: '班主任一问切中要害，将个人竞争拉回集体目标', effectEn: 'Teacher\'s one question hits the core — redirecting from personal rivalry to collective purpose' },
            { para: 4, text: '第一次心平气和地讨论', technique: '对比', techniqueEn: 'Behavioral Contrast', effect: '与前文的争吵形成鲜明对比——态度转变已发生', effectEn: 'Sharp contrast with prior arguments — the attitude shift has already begun' },
            { para: 5, text: '从生疏到默契，从掉棒到行云流水', technique: '排比递进', techniqueEn: 'Progressive Parallelism', effect: '两组对比压缩三天训练为一句话——进步可感', effectEn: 'Two pairs compress three days of training into one sentence — progress palpable' },
            { para: 6, text: '小杰像箭一样冲出去', technique: '比喻', techniqueEn: 'Simile', effect: '赛场描写开始——速度感扑面而来', effectEn: 'Race scene launches — speed hits the reader head-on' },
            { para: 6, text: '交接——稳稳接住……交接——全力奔跑……交接——冲刺', technique: '排比节奏', techniqueEn: 'Rhythmic Relay', effect: '重复"交接"模拟接力棒的节奏感', effectEn: 'Repeated "handoff" mimics the relay\'s rhythm — readers feel each baton pass' },
            { para: 7, text: '解决问题的关键不是谁更强，而是大家愿不愿意放下自己', technique: '点题升华', techniqueEn: 'Thematic Elevation', effect: '从体育竞赛提炼为合作哲学', effectEn: 'Distilling athletic competition into a philosophy of collaboration' }
          ],
          approach: '运动会接力赛前团队矛盾，通过沟通和练习化解分歧。',
          approachEn: 'Team conflict before relay race, resolved through communication and practice.',
          architecture: '起：接力赛分组引发矛盾；承：互相指责训练失败；转：班主任引导沟通；合：比赛中默契配合。',
          architectureEn: 'Open: Relay grouping causes conflict. Develop: Blame and failed training. Turn: Teacher facilitates communication. Close: Race-day teamwork.',
          logic: '从各自为政到协作共赢。', logicEn: 'From individualism to collaboration.',
          skills: ['对话推动情节', '赛场描写紧张', '团队主题鲜明'],
          skillsEn: ['Dialogue drives plot', 'Tense race scene', 'Clear teamwork theme'],
          fullText: '　　运动会4×100米接力赛名单公布那天，我们组四个人就吵了起来。\n\n　　问题出在第二棒和第三棒的交接。小杰觉得自己速度快应该跑第二棒，可小雨也想跑第二棒——因为弯道是她的强项。两个人谁也不让，训练时互相别着劲，交接棒掉了三次。\n\n　　"你太慢了！""你接棒手伸得不对！"两个人在操场上吵得面红耳赤。我和第四棒的小陈站在旁边，不知道该帮谁。\n\n　　第二天训练，小杰干脆没来。小雨气呼呼地说："不来就不来，没他我们照样跑。"可三个人试了一下，少一棒根本没法练。\n\n　　班主任把我们四个叫到了办公室。她没有批评任何人，只问了一个问题："你们的目标是什么——是证明谁跑得快，还是让班级拿好名次？"\n\n　　教室里安静了好一会儿。\n\n　　"拿好名次。"我们几乎同时说。\n\n　　"那就想想，怎么安排才能让团队最快。"\n\n　　那天下午，我们四个坐在操场边，第一次心平气和地讨论。分析了每个人的优劣势后，大家一致同意：小杰直道爆发力强跑第一棒，小雨弯道技术好跑第二棒，我耐力好跑第三棒，小陈冲刺能力强跑最后一棒。\n\n　　之后三天，我们每天放学练一个小时，重点练交接棒。从生疏到默契，从掉棒到行云流水。\n\n　　比赛那天，发令枪一响，小杰像箭一样冲出去。交接——小雨稳稳接住，弯道漂亮超了一个人。交接——我攥紧接力棒全力奔跑。交接——小陈冲刺，第二个撞线！\n\n　　我们四个抱在一起欢呼。那一刻我明白了：解决问题的关键不是谁更强，而是大家愿不愿意放下自己，为同一个目标努力。',
          fullTextEn: '　　The day the 4×100m relay roster was posted, our four-person team erupted in argument.\n\n　　The problem: legs two and three handoff. Xiao Jie wanted leg two for his speed; Xiao Yu also wanted it — curves were her strength. Neither would yield. During practice they competed against each other; the baton dropped three times.\n\n　　"You\'re too slow!" "Your hand position is wrong!" They argued red-faced on the track. Xiao Chen and I stood watching, unsure whose side to take.\n\n　　Next day, Xiao Jie skipped practice. Xiao Yu huffed: "Fine, we\'ll run without him." But three people couldn\'t practice a four-person relay.\n\n　　Our teacher called all four of us in. No scolding — just one question: "What\'s your goal: proving who\'s fastest, or getting a good result for our class?"\n\n　　Long silence.\n\n　　"Good result." We said almost simultaneously.\n\n　　"Then figure out the arrangement that makes the team fastest."\n\n　　That afternoon, we sat by the track and calmly discussed for the first time. After analyzing everyone\'s strengths: Xiao Jie\'s explosive start — leg one. Xiao Yu\'s curve technique — leg two. My endurance — leg three. Xiao Chen\'s sprint — anchor.\n\n　　Three days of after-school practice, one hour each, focusing on handoffs. From clumsy to seamless, from drops to fluid motion.\n\n　　Race day: starting gun fires, Xiao Jie launches like an arrow. Handoff — Xiao Yu catches cleanly, overtakes one on the curve. Handoff — I grip the baton and run with everything. Handoff — Xiao Chen sprints, crossing the line second!\n\n　　We four hugged and cheered. That moment I understood: solving problems isn\'t about who\'s stronger — it\'s about everyone willing to set aside ego for a shared goal.',
          highlights: [
            { text: '你们的目标是什么', textEn: 'What\'s your goal?', why: '一问点醒全组', whyEn: 'One question awakens the team' },
            { text: '从生疏到默契，从掉棒到行云流水', textEn: 'From clumsy to seamless, from drops to fluid motion', why: '排比写出进步', whyEn: 'Parallelism shows progress' },
            { text: '放下自己，为同一个目标努力', textEn: 'Setting aside ego for a shared goal', why: '扣题升华', whyEn: 'Theme elevation' }
          ],
          sections: [
            { type: '起', fn: '矛盾', fnEn: 'Conflict', detail: '分组争执', detailEn: 'Grouping dispute' },
            { type: '承', fn: '恶化', fnEn: 'Worsening', detail: '训练失败', detailEn: 'Training collapse' },
            { type: '转', fn: '沟通', fnEn: 'Communication', detail: '班主任引导', detailEn: 'Teacher mediation' },
            { type: '合', fn: '成功', fnEn: 'Success', detail: '比赛配合', detailEn: 'Race-day teamwork' }
          ]
        },
        {
          title: '我用耐心解决了这个问题', titleEn: 'I Solved This Problem with Patience',
          score: 36, maxScore: 40, structure: 'diJinShi',
          techniques: ['xiJieMiaoXie', 'xinLiMiaoXie', 'huanJingChenTuo'],
          techniqueMarks: [
            { para: 0, text: '照顾奶奶的担子，落在了我一个人肩上', technique: '叙事铺垫', techniqueEn: 'Narrative Setup', effect: '一句话建立困境——独自面对，无人可依', effectEn: 'One sentence establishes the predicament — alone, with no one to rely on' },
            { para: 1, text: '火开太大把粥烧糊了……力气用猛了……烫了奶奶的嘴唇', technique: '排比细节', techniqueEn: 'Parallel Mishaps', effect: '三次失误连环展现手忙脚乱的真实', effectEn: 'Three consecutive mishaps authentically portray the chaos of inexperience' },
            { para: 1, text: '奶奶没说我一句，但我看到她眼里闪过一丝失望', technique: '细节心理', techniqueEn: 'Micro-Expression', effect: '不批评的失望比批评更令人内疚', effectEn: 'Disappointment without scolding stings worse than criticism' },
            { para: 2, text: '一个十五岁的人，连照顾老人都做不好', technique: '心理独白', techniqueEn: 'Self-Reproach', effect: '自我质疑推动改变的决心', effectEn: 'Self-doubt fuels the resolve to change' },
            { para: 3, text: '倒水先试温度，翻身前先打招呼，喂饭要小口慢喂', technique: '细节排比', techniqueEn: 'Procedural Detail', effect: '护士动作的精确记录展现从观察中学习', effectEn: 'Precise nurse observations show learning through watching' },
            { para: 4, text: '先轻声说"奶奶我帮你翻一下"', technique: '对比细节', techniqueEn: 'Contrastive Detail', effect: '与第一天的粗暴形成对比——细节中见成长', effectEn: 'Contrast with day one\'s roughness — growth visible in the details' },
            { para: 5, text: '我孙子长大了', technique: '语言描写', techniqueEn: 'Validating Dialog', effect: '奶奶一句话是最好的评价——简单却万钧', effectEn: 'Grandma\'s one line is the ultimate validation — simple yet weighty' },
            { para: 6, text: '知道她下午三点要吃药，知道她晚上腿会酸', technique: '递进细节', techniqueEn: 'Progressive Knowledge', effect: '一系列"知道"展现从陌生到了解的过程', effectEn: 'A series of "knowing" charts the journey from stranger to understanding' },
            { para: 7, text: '而奶奶照顾了我十五年，不知道付出了多少倍的耐心', technique: '反转视角', techniqueEn: 'Perspective Reversal', effect: '从自己的辛苦反推奶奶的付出——以小见大', effectEn: 'Extrapolating from own difficulty to grandma\'s years of patience — devastatingly effective' },
            { para: 8, text: '耐心不是天生的，是在一次次笨拙的尝试中慢慢长出来的', technique: '点题升华', techniqueEn: 'Thematic Elevation', effect: '有机的"长出来"——耐心是活的、生长的', effectEn: '"Growing" rather than "learned" — patience as something alive and organic' }
          ],
          approach: '照顾生病奶奶时从手忙脚乱到细心周到，用耐心化解困难。',
          approachEn: 'Caring for sick grandmother — from clumsy to attentive, patience overcomes difficulty.',
          architecture: '第一次照顾→手忙脚乱→观察奶奶习惯→找到方法→奶奶康复后的感动。',
          architectureEn: 'First attempt → chaos → observing habits → finding methods → grandmother\'s recovery gratitude.',
          logic: '从急躁到耐心的成长。', logicEn: 'Growth from impatience to patience.',
          skills: ['生活细节丰富', '心理变化自然', '情感真挚'],
          skillsEn: ['Rich daily details', 'Natural psychological change', 'Genuine emotion'],
          fullText: '　　奶奶摔伤腿住院那周，爸妈都出差了。照顾奶奶的担子，落在了我一个人肩上。\n\n　　第一天就手忙脚乱。中午给奶奶热粥，火开太大把粥烧糊了。帮奶奶翻身，力气用猛了，疼得她直皱眉。倒水的时候没试温度，烫了奶奶的嘴唇。奶奶没说我一句，但我看到她眼里闪过一丝失望。\n\n　　晚上回到家，我盯着天花板发呆。一个十五岁的人，连照顾老人都做不好。\n\n　　第二天，我决定不再毛毛躁躁。到医院后，我先观察护士怎么照顾病人——倒水先试温度，翻身前先打招呼，喂饭要小口慢喂。我把这些一一记在手机备忘录里。\n\n　　热粥时，我把火调到最小，守在旁边慢慢搅。帮奶奶翻身前，先轻声说"奶奶我帮你翻一下"，然后一只手托背一只手扶腿，慢慢来。倒水时，先在自己手背上试温度。\n\n　　奶奶看着我的变化，笑了："我孙子长大了。"\n\n　　第三天、第四天，我越来越熟练。知道奶奶喜欢粥稍微稠一点，知道她下午三点要吃药，知道她晚上腿会酸需要轻轻按摩。我甚至学会了跟奶奶聊天解闷——讲学校的事，讲同学的趣事，奶奶听着听着就笑了。\n\n　　一周后爸妈回来，奶奶拉着他们说："这孩子比你们照顾得还好。"\n\n　　我笑着摇头，心里却有点酸。原来照顾一个人需要这么多耐心。而奶奶照顾了我十五年，不知道付出了多少倍的耐心。\n\n　　那一周教会我：耐心不是天生的，是在一次次笨拙的尝试中慢慢长出来的。',
          fullTextEn: '　　Grandma broke her leg and was hospitalized. Mom and Dad both traveling. Caring for her fell on me alone.\n\n　　Day one: chaos. Reheating porridge — burnt it. Helping her turn — too rough, she winced. Pouring water — didn\'t check the temperature, scalded her lip. She didn\'t scold me, but I caught a flash of disappointment in her eyes.\n\n　　That night, staring at the ceiling. A fifteen-year-old who can\'t even care for an elderly person.\n\n　　Day two, I resolved to stop being careless. At the hospital, I watched nurses: test water temperature first, announce before turning patients, feed in small slow spoonfuls. I noted everything in my phone.\n\n　　Heating porridge: lowest flame, stirring patiently beside it. Before turning Grandma: "Grandma, I\'m going to help you turn," one hand on her back, one on her leg, slowly. Water: tested on my own hand first.\n\n　　Grandma watched the change and smiled: "My grandson has grown up."\n\n　　Days three, four — I became skilled. She liked porridge slightly thick. Medicine at 3 PM. Evening leg aches needed gentle massage. I even learned to chat — school stories, classmate antics — she\'d listen and laugh.\n\n　　A week later, my parents returned. Grandma told them: "This child took better care than you two."\n\n　　I smiled and shook my head, but felt a pang. Caring for one person takes so much patience. And Grandma cared for me for fifteen years — how much more patience that required.\n\n　　That week taught me: patience isn\'t innate. It grows slowly through one clumsy attempt after another.',
          highlights: [
            { text: '奶奶没说我一句，但我看到她眼里闪过一丝失望', textEn: 'Grandma didn\'t scold me, but I caught a flash of disappointment in her eyes', why: '细节写出内疚', whyEn: 'Detail conveys guilt' },
            { text: '奶奶照顾了我十五年', textEn: 'Grandma cared for me for fifteen years', why: '反转视角动人', whyEn: 'Perspective reversal, moving' },
            { text: '耐心是在笨拙的尝试中长出来的', textEn: 'Patience grows slowly through one clumsy attempt after another', why: '朴素深刻', whyEn: 'Simple yet profound' }
          ],
          sections: [
            { type: '起', fn: '困境', fnEn: 'Difficulty', detail: '独自照顾奶奶', detailEn: 'Caring alone' },
            { type: '承', fn: '失败', fnEn: 'Failure', detail: '手忙脚乱', detailEn: 'Clumsy attempts' },
            { type: '转', fn: '学习', fnEn: 'Learning', detail: '观察和改进', detailEn: 'Observing and improving' },
            { type: '合', fn: '感悟', fnEn: 'Insight', detail: '耐心是成长', detailEn: 'Patience is growth' }
          ]
        },
        {
          title: '我坚持不放弃解决了这个问题', titleEn: 'I Persevered and Solved This Problem',
          score: 37, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['xiJieMiaoXie', 'duiBi', 'biYu'],
          techniqueMarks: [
            { para: 0, text: '长跑没有捷径，唯一的方法就是不停地跑', technique: '语言描写', techniqueEn: 'Thesis Dialog', effect: '教练一句话预设全篇主题——简单即真理', effectEn: 'Coach\'s single line establishes the theme — simplicity is truth' },
            { para: 1, text: '别人跑了八圈我才跑了五圈，最后一圈几乎是走完的', technique: '数字对比', techniqueEn: 'Numerical Contrast', effect: '差距量化让弱者形象具体可感', effectEn: 'Quantified gap makes the underdog status tangible' },
            { para: 2, text: '肺像被火烧，腿像绑了沙袋', technique: '比喻通感', techniqueEn: 'Somatic Metaphor', effect: '双重比喻写出身体极限的痛感', effectEn: 'Dual metaphors render the body\'s limit as visceral pain' },
            { para: 2, text: '大脑不停地叫嚣："停下来！你不行的！"', technique: '心理独白', techniqueEn: 'Inner Voice', effect: '将放弃的冲动拟人化为叫嚣的声音', effectEn: 'The urge to quit personified as a screaming inner voice' },
            { para: 3, text: '凌晨的闹钟像催命符，温暖的被窝像牢笼', technique: '比喻对立', techniqueEn: 'Contradictory Metaphor', effect: '催命符vs牢笼——痛苦与诱惑的双重夹击', effectEn: 'Death summons versus prison — double siege of pain and temptation' },
            { para: 3, text: '下雨天练出来的才是真本事', technique: '引用', techniqueEn: 'Quoted Wisdom', effect: '教练的话成为冒雨出门的动力', effectEn: 'Coach\'s words become the fuel for braving the rain' },
            { para: 4, text: '别想距离，只看脚下。一步一步来', technique: '语言描写', techniqueEn: 'Mentoring Dialog', effect: '学长的建议成为全篇的认知转折', effectEn: 'Senior\'s advice becomes the essay\'s cognitive turning point' },
            { para: 5, text: '左脚，右脚，左脚，右脚', technique: '节奏模拟', techniqueEn: 'Rhythmic Mimicry', effect: '短句模拟脚步节奏，读者仿佛在跑', effectEn: 'Staccato phrases mimic footfall rhythm — the reader feels themselves running' },
            { para: 5, text: '当我不再想终点，脚步反而轻了', technique: '心理顿悟', techniqueEn: 'Epiphany', effect: '放下目标反而达成——悖论中的哲理', effectEn: 'Releasing the goal paradoxically achieves it — philosophy in paradox' },
            { para: 6, text: '你不需要跑得很快，只需要不停下来', technique: '点题升华', techniqueEn: 'Thematic Elevation', effect: '将长跑经验提炼为人生准则', effectEn: 'Distilling running experience into a life principle' }
          ],
          approach: '长跑训练中不断想放弃，最终坚持跑完全程，发现坚持本身就是答案。',
          approachEn: 'During long-distance training, repeatedly wanting to quit, ultimately finishing — discovering perseverance itself is the answer.',
          architecture: '起：被选入长跑队但体力差；承：训练中多次想放弃；转：教练的话+自我突破；合：坚持跑完第一个十公里。',
          architectureEn: 'Open: Selected for cross-country but weak. Develop: Wanting to quit repeatedly. Turn: Coach\'s words + self-breakthrough. Close: Finishing first 10K.',
          logic: '每次想放弃都再坚持一步。', logicEn: 'Each time wanting to quit, taking one more step.',
          skills: ['跑步节奏感强', '内心独白精彩', '比喻收束有力'],
          skillsEn: ['Strong running rhythm', 'Brilliant inner monologue', 'Powerful metaphorical close'],
          fullText: '　　教练说："长跑没有捷径，唯一的方法就是不停地跑。"\n\n　　我被选进学校长跑队时，是队里最弱的一个。第一次合练，别人跑了八圈我才跑了五圈，最后一圈几乎是走完的。\n\n　　训练计划贴在墙上：每天清晨6公里，周末加练到10公里。看到那个数字，我的第一反应是——这不可能。\n\n　　第一周，每天都想放弃。跑到第三公里，肺像被火烧，腿像绑了沙袋。大脑不停地叫嚣："停下来！你不行的！"好几次我真的停了下来，弯着腰喘气，看着队友的背影越来越远。\n\n　　第二周，身体勉强适应了，可心理的坎更难过。凌晨的闹钟像催命符，温暖的被窝像牢笼。有天早上下雨，我差点就没去。但想到教练说的"下雨天练出来的才是真本事"，还是咬牙出了门。\n\n　　第三周，发生了一件小事。跑到第四公里时，我又想停下。这时旁边的学长拍了拍我的肩："别想距离，只看脚下。一步一步来。"\n\n　　一步一步来。我试着不去想还有多远，只专注于每一步的落地。左脚，右脚，左脚，右脚。奇怪的是，当我不再想终点，脚步反而轻了。\n\n　　一个月后的周末，我跑完了人生第一个10公里。冲过终点时，趴在草地上大口喘气，汗水和泪水混在一起。不是因为累哭的，是因为——我真的做到了。\n\n　　那天我明白了一个道理：很多问题没有巧妙的解法，坚持本身就是答案。就像长跑，你不需要跑得很快，只需要不停下来。',
          fullTextEn: '　　Coach said: "There\'s no shortcut in long-distance running. The only way is to keep running."\n\n　　When selected for the school cross-country team, I was the weakest. First group session: others ran eight laps, I managed five — the last nearly walked.\n\n　　Training plan on the wall: 6K every dawn, 10K on weekends. Seeing those numbers, my first thought: impossible.\n\n　　Week one: wanting to quit every day. At kilometer three, lungs on fire, legs sandbag-heavy. Brain screaming: "Stop! You can\'t do this!" Several times I actually stopped, bent over gasping, watching teammates shrink into the distance.\n\n　　Week two: body barely adapted, but the mental barrier was harder. Dawn alarms felt like death notices, warm beds like prisons. A rainy morning, I nearly skipped. But remembering coach\'s words — "rainy training builds real strength" — I bit down and went.\n\n　　Week three: a small thing happened. At kilometer four, I wanted to stop again. A senior patted my shoulder: "Don\'t think about distance. Just watch your feet. One step at a time."\n\n　　One step at a time. I stopped thinking about how far was left, focusing only on each footfall. Left, right, left, right. Strangely, when I stopped fixating on the finish line, my feet felt lighter.\n\n　　A month later, weekend: I completed my first 10K. Crossing the line, I collapsed on the grass, gasping, sweat and tears mixing. Not from exhaustion — from the realization: I actually did it.\n\n　　That day I understood: many problems have no clever solution. Perseverance itself is the answer. Like long-distance running — you don\'t need to be fast, you just need to not stop.',
          highlights: [
            { text: '大脑不停地叫嚣："停下来！你不行的！"', textEn: 'My brain kept screaming: "Stop! You can\'t do this!"', why: '内心独白真实', whyEn: 'Authentic inner monologue' },
            { text: '当我不再想终点，脚步反而轻了', textEn: 'When I stopped fixating on the finish, my feet felt lighter', why: '富含哲理', whyEn: 'Philosophical insight' },
            { text: '坚持本身就是答案', textEn: 'Perseverance itself is the answer', why: '点题有力', whyEn: 'Powerful theme statement' }
          ],
          sections: [
            { type: '起', fn: '差距', fnEn: 'Gap', detail: '队里最弱', detailEn: 'Weakest on team' },
            { type: '承', fn: '挣扎', fnEn: 'Struggle', detail: '每天想放弃', detailEn: 'Wanting to quit daily' },
            { type: '转', fn: '领悟', fnEn: 'Epiphany', detail: '一步一步来', detailEn: 'One step at a time' },
            { type: '合', fn: '完成', fnEn: 'Achievement', detail: '第一个10公里', detailEn: 'First 10K' }
          ]
        }
      ]
    },
    {
      id: 'yn2018_comp1',
      paperId: 'yn2018',
      year: 2018,
      region: '云南省',
      prompt: '请以"______二三事"为题写一篇文章。不少于600字。',
      promptEn: 'Write on "A Few Things About ______." 600+ words.',
      type: 'semiOpenTopic',
      category: '半命题作文',
      categoryEn: 'Semi-open Topic',
      wordCount: 600,
      guide: {
        analysis: '补题填人物或地点（爷爷/老师/同桌/初中/教室等），选2-3件典型事件，展现人物性格或生活感悟。',
        analysisEn: 'Fill with a person or place. Choose 2-3 typical events to reveal character or life insight.',
        keyPoints: ['选材要典型有代表性', '2-3件事有内在联系', '详略得当', '人物形象鲜明'],
        keyPointsEn: ['Representative events', '2-3 connected events', 'Proper detail balance', 'Vivid characterization'],
        pitfalls: ['事件无关联流水账', '每件事篇幅相同', '人物形象单一'],
        pitfallsEn: ['Unconnected events', 'Equal-length sections', 'One-dimensional character']
      },
      essays: [
        {
          title: '外婆二三事', titleEn: 'A Few Things About Grandma',
          score: 38, maxScore: 40, structure: 'pianDuanZuHe',
          techniques: ['xiJieMiaoXie', 'yuYanMiaoXie', 'yiXiaoJianDa'],
          techniqueMarks: [
            { para: 0, text: '外婆的手很粗糙，像老树的皮', technique: '比喻线索', techniqueEn: 'Metaphor as Thread', effect: '"手"意象开篇——统领三个片段的物理线索', effectEn: 'The "hands" image opens — physical thread unifying all three vignettes' },
            { para: 1, text: '老花镜滑到鼻尖上，她眯着眼，一针一针地缝', technique: '细节描写', techniqueEn: 'Close-Up Detail', effect: '动作分解写出专注和艰难，老人形象鲜活', effectEn: 'Decomposed action captures concentration and difficulty — the elderly figure comes alive' },
            { para: 1, text: '明天你要背着去上学呀', technique: '语言描写', techniqueEn: 'Understated Dialog', effect: '朴素的一句话写尽"为你着想"的全部', effectEn: 'One plain sentence contains the entirety of "thinking of you"' },
            { para: 2, text: '城里的菜没味道。城里的楼太高。城里没有我的菜园子', technique: '排比语言', techniqueEn: 'Parallel Refusals', effect: '三个拒绝理由层层推进——从味觉到视觉到归属感', effectEn: 'Three refusals escalating — taste, sight, belonging' },
            { para: 2, text: '露出缺了一颗的门牙', technique: '细节描写', techniqueEn: 'Physical Detail', effect: '缺牙的笑——豁达和倔强同在', effectEn: 'A gap-toothed smile — resilience and stubbornness in one image' },
            { para: 3, text: '那片小菜园，是她的王国', technique: '比喻', techniqueEn: 'Metaphor', effect: '菜园=王国——赋予朴素生活以尊严', effectEn: 'Garden as kingdom — bestowing dignity upon a simple life' },
            { para: 4, text: '这是车前草，清热的', technique: '语言描写', techniqueEn: 'Knowledge Dialog', effect: '随口一说见一生积累的智慧', effectEn: 'Casual identification reveals a lifetime\'s accumulated wisdom' },
            { para: 4, text: '他走了二十年了，可这些草药还在', technique: '以小见大', techniqueEn: 'Small-to-Big', effect: '草药在人不在——朴素的话语写出二十年的怀念', effectEn: 'Herbs remain, the person doesn\'t — plain words carrying twenty years of longing' },
            { para: 4, text: '手却轻轻摩挲着那丛紫花', technique: '动作描写', techniqueEn: 'Subtext Gesture', effect: '平静的话语+抚摸的手——言语克制动作泄露', effectEn: 'Calm words versus caressing hands — speech restrained, gesture betraying true feeling' },
            { para: 5, text: '那双粗糙的手，握着我小时候最温暖的记忆', technique: '首尾呼应', techniqueEn: 'Structural Echo', effect: '回扣开篇"手"的意象，完成完整闭环', effectEn: 'Callbacks to the opening "hands" image, completing the circle' }
          ],
          approach: '三件小事展现外婆的温暖、倔强和智慧。',
          approachEn: 'Three small events reveal grandma\'s warmth, stubbornness, and wisdom.',
          architecture: '引子：外婆的手；事一：深夜缝书包（温暖）；事二：拒绝搬进城（倔强）；事三：教我认草药（智慧）；尾声：外婆的手什么都会。',
          architectureEn: 'Intro: Grandma\'s hands. Event 1: Sewing backpack at night (warmth). Event 2: Refusing to move to city (stubbornness). Event 3: Teaching herbs (wisdom). Ending: Those hands can do anything.',
          logic: '以"手"为线索串联三个片段。', logicEn: '"Hands" as thread connecting three vignettes.',
          skills: ['线索贯穿', '细节描写精准', '以小见大'],
          skillsEn: ['Connecting thread', 'Precise details', 'Small-big theme'],
          fullText: '　　外婆的手很粗糙，像老树的皮。可那双手做过的事，比我见过的星星还多。\n\n　　（一）\n　　小学三年级，书包带子断了。妈妈说明天买个新的，可我喜欢那个书包——上面印着我最爱的卡通人物。外婆什么也没说，晚饭后坐到灯下，翻出针线盒。\n\n　　我写作业写到九点多，抬头看见外婆还在缝。老花镜滑到鼻尖上，她眯着眼，一针一针地缝，把断掉的带子接上了一截新布。针脚细密整齐，比机器缝的还好看。\n\n　　"外婆你眼睛不好，明天再缝吧。""明天你要背着去上学呀。"她头也不抬。\n\n　　第二天早上，书包结结实实的，带子上多了一小段碎花布。同学问我，我说："我外婆缝的。"声音里全是骄傲。\n\n　　（二）\n　　初一那年，爸妈想把外婆接到城里住。外婆死活不同意。\n\n　　"城里的菜没味道。"她说。"城里的楼太高，看不见天。""城里没有我的菜园子。"\n\n　　妈妈急了："您一个人在村里，我们不放心啊！"外婆笑了，露出缺了一颗的门牙："我种了一辈子地，还怕种不动了？你们放心，我硬朗着呢。"\n\n　　后来每次视频通话，外婆都要给我看她新种的菜——番茄红了，黄瓜弯了，辣椒挂满了枝头。那片小菜园，是她的王国。\n\n　　（三）\n　　去年暑假回老家，外婆带我去山上认草药。她弯着腰在田埂上走，随手拔起一棵草："这是车前草，清热的。"又指着路边一丛紫花："这是益母草，你妈妈小时候肚子疼，我就煮这个给她喝。"\n\n　　我问她怎么认得这么多。她说："你外公教的。他走了二十年了，可这些草药还在。"\n\n　　她说得很平静，手却轻轻摩挲着那丛紫花。我忽然觉得，外婆比任何一本书都厚。\n\n　　外婆的手缝过书包，种过菜园，采过草药。那双粗糙的手，握着我小时候最温暖的记忆。',
          fullTextEn: '　　Grandma\'s hands are rough, like old tree bark. But those hands have done more things than stars I\'ve ever counted.\n\n　　(1)\n　　Third grade: my backpack strap broke. Mom said we\'d buy a new one tomorrow, but I loved that backpack — it had my favorite cartoon character. Grandma said nothing. After dinner, she sat under the lamp with her sewing box.\n\n　　I did homework until past nine. Looking up, she was still sewing. Reading glasses slipping to her nose tip, she squinted, stitching stitch by stitch, joining a piece of floral fabric to the broken strap. Neat, fine stitches — prettier than machine work.\n\n　　"Grandma, your eyes are bad, do it tomorrow." "You need it for school tomorrow morning." She didn\'t look up.\n\n　　Next morning: backpack solid, strap sporting a small floral patch. A classmate asked; I said: "My grandma sewed it." Pure pride in my voice.\n\n　　(2)\n　　Seventh grade: my parents wanted Grandma to move to the city. She absolutely refused.\n\n　　"City vegetables have no flavor." "Buildings too tall — can\'t see the sky." "No garden for me there."\n\n　　Mom pressed: "Alone in the village — we worry!" Grandma smiled, showing her gap tooth: "I\'ve farmed all my life. Think I can\'t manage? Don\'t worry, I\'m strong."\n\n　　Every video call after, she\'d show me her garden: tomatoes reddening, cucumbers curving, peppers dangling from branches. That small garden — her kingdom.\n\n　　(3)\n　　Last summer at her village, Grandma took me to identify herbs on the hillside. Bent-backed on the ridge, she pulled up a plant: "Plantain — for clearing heat." Pointing at purple flowers by the path: "Motherwort. When your mom had stomachaches as a girl, I\'d boil this for her."\n\n　　I asked how she knew so much. "Your grandpa taught me. He\'s been gone twenty years, but these herbs remain."\n\n　　She spoke calmly, but her hand gently stroked the purple flowers. I suddenly felt: Grandma is thicker than any book.\n\n　　Grandma\'s hands sewed backpacks, tended gardens, gathered herbs. Those rough hands hold my warmest childhood memories.',
          highlights: [
            { text: '针脚细密整齐，比机器缝的还好看', textEn: 'Stitches fine and even — prettier than machine work', why: '细节见功力', whyEn: 'Detail shows craftsmanship' },
            { text: '那片小菜园，是她的王国', textEn: 'That small garden — her kingdom', why: '比喻精妙', whyEn: 'Apt kingdom metaphor' },
            { text: '外婆比任何一本书都厚', textEn: 'Grandma is thicker than any book', why: '以小见大', whyEn: 'Small detail, big theme' }
          ],
          sections: [
            { type: '引子', fn: '总起', fnEn: 'Overview', detail: '外婆的手', detailEn: 'Grandma\'s hands' },
            { type: '片段一', fn: '温暖', fnEn: 'Warmth', detail: '深夜缝书包', detailEn: 'Sewing at night' },
            { type: '片段二', fn: '倔强', fnEn: 'Stubbornness', detail: '拒绝进城', detailEn: 'Refusing city life' },
            { type: '片段三', fn: '智慧', fnEn: 'Wisdom', detail: '教认草药', detailEn: 'Teaching herbs' },
            { type: '尾声', fn: '呼应', fnEn: 'Echo', detail: '手的记忆', detailEn: 'Memory in hands' }
          ]
        },
        {
          title: '同桌二三事', titleEn: 'A Few Things About My Deskmate',
          score: 37, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['yuYanMiaoXie', 'duiBi', 'xiJieMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '我觉得老天在惩罚我', technique: '夸张心理', techniqueEn: 'Hyperbolic Psychology', effect: '开篇夸张的厌恶为后文反转拉开最大落差', effectEn: 'Opening exaggerated dislike maximizes the gap for the coming reversal' },
            { para: 1, text: '一节课能问我八百个问题', technique: '夸张', techniqueEn: 'Hyperbole', effect: '数字夸张还原"烦人同桌"的典型印象', effectEn: 'Numerical exaggeration recreates the quintessential annoying deskmate' },
            { para: 2, text: '他真的掏出一支铅笔头，认认真真地答卷', technique: '细节对比', techniqueEn: 'Contrastive Detail', effect: '铅笔头vs完整笔袋——牺牲在细节中无声呈现', effectEn: 'Pencil stub versus full case — sacrifice revealed silently through detail' },
            { para: 3, text: '字歪歪扭扭的，但每一页都写了"重点"', technique: '细节描写', techniqueEn: 'Telling Detail', effect: '歪字+标注——笨拙中见真心', effectEn: 'Crooked writing plus careful annotations — sincerity shining through clumsiness' },
            { para: 3, text: '最后一页还画了个歪歪扭扭的笑脸', technique: '细节', techniqueEn: 'Endearing Detail', effect: '笑脸是笨拙温暖的极致——不会画但一定要画', effectEn: 'A wobbly smiley — peak clumsy warmth, drawn because it had to be' },
            { para: 4, text: '72分只是一次考试的分数，不是你的分数', technique: '语言描写', techniqueEn: 'Profound Dialog', effect: '一句话区分暂时和本质——超越年龄的智慧', effectEn: 'One sentence distinguishes temporary from essential — wisdom beyond his years' },
            { para: 4, text: '那张纸条我到现在还夹在课本里', technique: '补叙', techniqueEn: 'Retrospective Note', effect: '跨越时间的保存证明纸条的分量', effectEn: 'Preservation across time proves the note\'s weight' },
            { para: 5, text: '小宇没有像平时那样叽叽喳喳', technique: '对比', techniqueEn: 'Behavioral Contrast', effect: '话多的人突然安静——懂得什么时候不说', effectEn: 'The talkative one suddenly quiet — knowing when silence matters more' },
            { para: 6, text: '以后谁来问你借橡皮呢', technique: '语言描写', techniqueEn: 'Dialog as Farewell', effect: '用最初的"烦"作为告别——首尾呼应中的深情', effectEn: 'Using the original annoyance as farewell — depth hidden in structural echo' },
            { para: 6, text: '最好的友谊，藏在那些曾经让你觉得烦的日常琐碎里', technique: '点题升华', techniqueEn: 'Thematic Elevation', effect: '翻转开篇的厌恶，完成从"惩罚"到"珍贵"的认知弧', effectEn: 'Inverting the opening\'s annoyance — completing the arc from "punishment" to "precious"' }
          ],
          approach: '三件事展现同桌从"讨厌鬼"到"真朋友"的转变。',
          approachEn: 'Three events transform deskmate from "annoying" to "true friend."',
          architecture: '起：刚换座位觉得同桌很烦；承：他借笔/帮抄笔记的小事；转：考试失利他默默递纸条鼓励；合：离别时才知道珍贵。',
          architectureEn: 'Open: New seating, annoyed by deskmate. Develop: Small favors. Turn: Silent encouragement after exam failure. Close: Realizing value at parting.',
          logic: '从排斥到理解到珍惜。', logicEn: 'From rejection to understanding to cherishing.',
          skills: ['对话生动', '心理转变自然', '结尾温馨'],
          skillsEn: ['Vivid dialogue', 'Natural mindset shift', 'Warm ending'],
          fullText: '　　刚和小宇成为同桌时，我觉得老天在惩罚我。\n\n　　他话多，一节课能问我八百个问题。"这道题怎么做？""老师刚才说什么了？""你的橡皮能借我用吗？"最让我受不了的是，他笑起来声音特别大，经常把老师的目光引到我们这一排。\n\n　　第一件事发生在开学第三周。那天我忘带笔袋了，整个上午都在跟别人借笔。第四节课是数学考试，我正急得像热锅上的蚂蚁，小宇把他的笔袋推到我面前："你先用吧，我用铅笔就行。"我看了他一眼——他真的掏出一支铅笔头，认认真真地答卷。\n\n　　第二件事是期中考前。我生病请了三天假，回来后发现桌上放着一本厚厚的笔记本。翻开一看，是小宇帮我抄的三天笔记，字歪歪扭扭的，但每一页都写了"重点"和"这里老师说要考"的标注。最后一页还画了个歪歪扭扭的笑脸，旁边写着："欢迎回来！"\n\n　　第三件事最让我难忘。期末考试，我数学只考了72分，有史以来最低。下课后趴在桌上不想说话。小宇没有像平时那样叽叽喳喳，只是悄悄在我桌角放了一张纸条，上面写着："72分只是一次考试的分数，不是你的分数。下次我们一起复习。"\n\n　　那张纸条我到现在还夹在课本里。\n\n　　初三分班时，我和小宇被分到了不同班级。搬桌子那天，他拍了拍那张我们坐了两年的课桌："以后谁来问你借橡皮呢？"\n\n　　我笑了，鼻子却有点酸。原来最好的友谊，藏在那些曾经让你觉得烦的日常琐碎里。',
          fullTextEn: '　　When Xiao Yu became my deskmate, I thought heaven was punishing me.\n\n　　He talked nonstop — eight hundred questions per class. "How do you solve this?" "What did the teacher just say?" "Can I borrow your eraser?" Worst: his laugh was so loud it drew the teacher\'s gaze to our row.\n\n　　Event one: week three. I forgot my pencil case. Spent all morning borrowing pens. Fourth period was a math test — I was panicking. Xiao Yu pushed his pencil case over: "Use mine. I\'ll use a pencil." He really did pull out a pencil stub and answered seriously.\n\n　　Event two: before midterms. I was sick for three days. Returning, I found a thick notebook on my desk — Xiao Yu\'s three days of copied notes, crooked handwriting, but every page marked "KEY POINT" and "teacher says this will be on the test." The last page had a wobbly smiley face: "Welcome back!"\n\n　　Event three: most unforgettable. Finals: 72 in math — my all-time low. After class, I slumped on my desk, silent. Xiao Yu didn\'t chatter as usual. He quietly placed a note at my desk corner: "72 is one test\'s score, not YOUR score. Next time, let\'s review together."\n\n　　That note is still tucked in my textbook.\n\n　　When ninth grade split classes, we went to different ones. Moving desks that day, he patted our shared desk of two years: "Who\'ll ask to borrow your eraser now?"\n\n　　I laughed, nose stinging. The best friendships hide in the daily annoyances you once found bothersome.',
          highlights: [
            { text: '72分只是一次考试的分数，不是你的分数', textEn: '72 is one test\'s score, not YOUR score', why: '暖心又有力', whyEn: 'Warm yet powerful' },
            { text: '以后谁来问你借橡皮呢', textEn: 'Who\'ll ask to borrow your eraser now?', why: '轻松中见不舍', whyEn: 'Light tone, deep feeling' },
            { text: '最好的友谊，藏在日常琐碎里', textEn: 'The best friendships hide in daily annoyances', why: '升华自然', whyEn: 'Natural elevation' }
          ],
          sections: [
            { type: '起', fn: '排斥', fnEn: 'Rejection', detail: '觉得同桌烦', detailEn: 'Annoying deskmate' },
            { type: '承', fn: '小事', fnEn: 'Small acts', detail: '借笔抄笔记', detailEn: 'Lending pen, copying notes' },
            { type: '转', fn: '触动', fnEn: 'Touch', detail: '纸条鼓励', detailEn: 'Note of encouragement' },
            { type: '合', fn: '珍惜', fnEn: 'Cherish', detail: '分班不舍', detailEn: 'Parting reluctance' }
          ]
        },
        {
          title: '初中二三事', titleEn: 'A Few Things About Junior High',
          score: 36, maxScore: 40, structure: 'pianDuanZuHe',
          techniques: ['huanJingChenTuo', 'xiJieMiaoXie', 'shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '初中三年的画面像电影一样一帧帧浮现', technique: '比喻', techniqueEn: 'Cinematic Metaphor', effect: '电影帧的意象预告片段式结构', effectEn: 'The film-frame image previews the vignette structure to come' },
            { para: 1, text: '夕阳把影子拉得很长', technique: '环境衬托', techniqueEn: 'Scenic Atmosphere', effect: '夕阳长影暗示冷战中的沉默与尴尬', effectEn: 'Long sunset shadows evoke the silence and awkwardness of a standoff' },
            { para: 1, text: '从口袋里掏出一块巧克力掰成两半', technique: '细节描写', techniqueEn: 'Symbolic Detail', effect: '一块巧克力一掰——和好的仪式简单到只需一个动作', effectEn: 'One snap of chocolate — reconciliation reduced to a single gesture' },
            { para: 2, text: '十二岁的友谊，简单得像那块巧克力', technique: '比喻升华', techniqueEn: 'Metaphorical Elevation', effect: '巧克力从细节变为象征，写出少年友谊的纯粹', effectEn: 'Chocolate transforms from detail to symbol — youthful friendship\'s purity crystallized' },
            { para: 3, text: '窗外路灯亮了又灭了，蝉鸣声从聒噪到安静', technique: '环境衬托', techniqueEn: 'Time-Lapse Setting', effect: '灯灭蝉寂——时间流逝的环境描写压缩一夜奋战', effectEn: 'Lights out, cicadas silent — time compressed into an all-night study scene' },
            { para: 3, text: '我们击了个掌，声音在空荡荡的教室里回响', technique: '细节+环境', techniqueEn: 'Detail & Ambient Echo', effect: '空教室的回响放大了友谊的温度', effectEn: 'An empty classroom\'s echo amplifies the warmth of friendship' },
            { para: 4, text: '操场上的篮球架在夕阳里镀了一层金色', technique: '环境描写', techniqueEn: 'Golden-Hour Setting', effect: '金色夕阳赋予日常场景告别的庄严感', effectEn: 'Golden sunset lends everyday scenery the solemnity of farewell' },
            { para: 4, text: '别回头了，以后还会见面的', technique: '语言描写', techniqueEn: 'Dialog', effect: '朋友的话反衬下文"还是回了头"的深情', effectEn: 'Friend\'s words set up the emotional weight of "but I looked back anyway"' },
            { para: 4, text: '可我还是回了头。因为有些画面，回头看一眼，就多留一分在心里', technique: '心理描写', techniqueEn: 'Interior Wisdom', effect: '违背朋友建议的回头——动作本身就是最好的告白', effectEn: 'Looking back against the friend\'s advice — the act itself is the truest farewell' },
            { para: 5, text: '打开是懵懂的第一页，合上是成熟的最后一章', technique: '首尾呼应比喻', techniqueEn: 'Echo Metaphor', effect: '书的比喻收束三年时间线，呼应开篇的电影意象', effectEn: 'Book metaphor closes the three-year arc, echoing the opening film image' }
          ],
          approach: '三个初中场景：操场上的争吵、教室里的奋斗、毕业时的拥抱。',
          approachEn: 'Three junior high scenes: playground argument, classroom striving, graduation hugs.',
          architecture: '引：推开记忆的门；一：操场争执（初一的懵懂）；二：深夜做题（初二的拼搏）；三：毕业合影（初三的不舍）；结：初中像一本书。',
          architectureEn: 'Intro: Opening memory\'s door. 1: Playground dispute (7th grade innocence). 2: Late-night study (8th grade effort). 3: Graduation photo (9th grade farewell). Close: Junior high as a book.',
          logic: '三年时间线，三种成长。', logicEn: 'Three years, three kinds of growth.',
          skills: ['时间线清晰', '场景切换流畅', '首尾呼应'],
          skillsEn: ['Clear timeline', 'Smooth transitions', 'Echo structure'],
          fullText: '　　推开记忆的门，初中三年的画面像电影一样一帧帧浮现。\n\n　　（初一·操场）\n　　体育课上，我和小明为了一个篮球吵了起来。他说是他先拿到的，我说是我先看到的。两个人谁也不让，最后体育老师走过来，把球没收了。\n\n　　那天下午，我俩坐在操场台阶上，谁也不说话。夕阳把影子拉得很长。沉默了好久，小明从口袋里掏出一块巧克力掰成两半："吃不吃？""吃。"我接过来塞进嘴里。就这样和好了。\n\n　　后来我们成了最好的朋友。现在想想，十二岁的友谊，简单得像那块巧克力。\n\n　　（初二·教室）\n　　期中考试前的那个周末，教室里亮着灯。我、小明和几个同学围坐在一起刷题。窗外路灯亮了又灭了，蝉鸣声从聒噪到安静。\n\n　　有人趴在桌上睡着了，有人还在啃物理公式。我做到一道怎么也解不开的方程题，烦躁地把笔一丢。小明凑过来看了看："你这里符号搞反了。"他指了指第三步。\n\n　　改过来，答案一下就出来了。我们击了个掌，声音在空荡荡的教室里回响。那一刻觉得，有人一起奋斗，连辛苦都变得甘甜。\n\n　　（初三·校门口）\n　　最后一次走出校门时，我回头看了一眼。教学楼的墙上还挂着我们班的运动会横幅，操场上的篮球架在夕阳里镀了一层金色。\n\n　　小明拍了拍我的肩："别回头了，以后还会见面的。"\n\n　　可我还是回了头。因为有些画面，回头看一眼，就多留一分在心里。\n\n　　初中三年像一本书，打开是懵懂的第一页，合上是成熟的最后一章。那些嬉笑怒骂的日常，是最值得珍藏的二三事。',
          fullTextEn: '　　Pushing open memory\'s door, three years of junior high appear frame by frame like a film.\n\n　　(7th Grade · Playground)\n　　PE class: Xiao Ming and I argued over a basketball. He said he grabbed it first; I said I spotted it first. Neither yielding, the teacher confiscated it.\n\n　　That afternoon, we sat on the playground steps, silent. Sunset stretched our shadows long. After ages, Xiao Ming pulled out a chocolate bar and snapped it in half: "Want some?" "Yeah." I popped it in my mouth. Just like that — made up.\n\n　　We became best friends. Looking back, twelve-year-old friendship was as simple as that chocolate.\n\n　　(8th Grade · Classroom)\n　　Pre-midterm weekend: classroom lights on. Xiao Ming, several classmates, and I huddled over practice problems. Streetlights outside flickered; cicadas went from loud to silent.\n\n　　Someone dozed on their desk; someone still chewed physics formulas. I hit an impossible equation and tossed my pen in frustration. Xiao Ming leaned over: "You flipped the sign here." He pointed at step three.\n\n　　Fixed it — answer appeared instantly. We high-fived; the sound echoed in the empty classroom. That moment: having someone to struggle with makes even hardship sweet.\n\n　　(9th Grade · School Gate)\n　　Walking out the gate for the last time, I looked back. Our class sports banner still hung on the building; the basketball hoop glowed gold in the sunset.\n\n　　Xiao Ming patted my shoulder: "Don\'t look back. We\'ll meet again."\n\n　　But I looked back anyway. Because some scenes — one more glance means one more piece stored in the heart.\n\n　　Junior high is a book: the first page is innocent, the last chapter is matured. Those everyday laughs, quarrels, and tears are the most precious "few things" worth keeping.',
          highlights: [
            { text: '十二岁的友谊，简单得像那块巧克力', textEn: 'Twelve-year-old friendship, simple as that chocolate bar', why: '比喻温暖纯真', whyEn: 'Warm pure metaphor' },
            { text: '有人一起奋斗，连辛苦都变得甘甜', textEn: 'Having someone to struggle with makes even hardship sweet', why: '写出友谊本质', whyEn: 'Captures friendship essence' },
            { text: '回头看一眼，就多留一分在心里', textEn: 'One more glance back means one more piece stored in the heart', why: '离别中见深情', whyEn: 'Depth in farewell' }
          ],
          sections: [
            { type: '引', fn: '总起', fnEn: 'Overview', detail: '记忆的门', detailEn: 'Memory\'s door' },
            { type: '片段一', fn: '初一', fnEn: '7th grade', detail: '篮球和好', detailEn: 'Basketball reconciliation' },
            { type: '片段二', fn: '初二', fnEn: '8th grade', detail: '深夜刷题', detailEn: 'Late study session' },
            { type: '片段三', fn: '初三', fnEn: '9th grade', detail: '毕业回望', detailEn: 'Graduation lookback' },
            { type: '结', fn: '呼应', fnEn: 'Echo', detail: '初中像一本书', detailEn: 'Junior high as a book' }
          ]
        },
        {
          title: '爸爸二三事', titleEn: 'A Few Things About Dad',
          score: 37, maxScore: 40, structure: 'zongFenZong',
          techniques: ['xiJieMiaoXie', 'duiBi', 'yiXiaoJianDa'],
          techniqueMarks: [
            { para: 0, text: '爸爸的爱就是地下的暗河——看不见，却一直在流', technique: '比喻总领', techniqueEn: 'Framing Metaphor', effect: '暗河意象统领全篇——看不见但始终存在', effectEn: 'Underground river image governs the essay — invisible yet ever-flowing' },
            { para: 1, text: '永远只有一句："走吧。"', technique: '语言描写', techniqueEn: 'Minimalist Dialog', effect: '两个字写出父亲全部的表达方式', effectEn: 'Two words encapsulate the father\'s entire mode of expression' },
            { para: 1, text: '父子之间好像隔着一面透明的墙', technique: '比喻', techniqueEn: 'Metaphor', effect: '透明的墙——能看到彼此却无法触及，精准写出中国式父子关系', effectEn: 'A transparent wall — seeing but unable to touch — precisely captures the Chinese father-son dynamic' },
            { para: 2, text: '他假装没听见，低头扒饭。可我注意到他耳朵尖红了', technique: '细节对比', techniqueEn: 'Contradictory Detail', effect: '假装淡定vs耳朵泄密——一个微表情拆穿所有伪装', effectEn: 'Feigned indifference versus betraying ear tips — one micro-expression dismantles the facade' },
            { para: 3, text: '考得好他高兴一整天，考得不好他比你还难受', technique: '转述描写', techniqueEn: 'Reported Observation', effect: '通过母亲的视角揭开父亲的隐藏面', effectEn: 'Mother\'s perspective unveils the father\'s hidden side' },
            { para: 4, text: '筷子夹菜的动作快了几分', technique: '细节描写', techniqueEn: 'Behavioral Micro-Detail', effect: '被揭穿后的尴尬用动作而非语言表达——以小见大', effectEn: 'Post-exposure embarrassment expressed through gesture, not words — small detail, vast meaning' },
            { para: 5, text: '我在人群中找了一圈，没有爸爸的身影。心里有点酸', technique: '心理描写', techniqueEn: 'Interior Moment', effect: '失望的瞬间为后文发现父亲蓄势', effectEn: 'Moment of disappointment primes the reader for the discovery that follows' },
            { para: 6, text: '他没有像别的家长那样挤到校门口，只是安安静静地站在那里', technique: '对比', techniqueEn: 'Contrast', effect: '对街vs校门口——距离感本身就是父爱的表达方式', effectEn: 'Across the street versus at the gate — distance itself is how this father loves' },
            { para: 7, text: '走吧，我在这里；走吧，不用怕；走吧，有我呢', technique: '排比解读', techniqueEn: 'Parallel Decoding', effect: '将日常用语层层拆解为三重含义——朴素之中见深情', effectEn: 'Unpacking an everyday phrase into three layers of meaning — depth within simplicity' },
            { para: 8, text: '就像那条暗河，无声地流过生活的每一天', technique: '首尾呼应', techniqueEn: 'Structural Echo', effect: '回扣开篇暗河比喻，形成完美闭环', effectEn: 'Callbacks to the opening river metaphor, completing a perfect circle' }
          ],
          approach: '三个细节展现父爱的沉默与深沉：接我放学不说话、偷偷看我成绩单、雨中送伞却在对街等。',
          approachEn: 'Three details show silent fatherly love: wordless pickups, secretly checking grades, waiting across the street in rain.',
          architecture: '总：爸爸的爱像暗河；事一：每天接我放学只说一句"走吧"；事二：偷偷登录查我成绩；事三：下雨天在对街举着伞等我；总：沉默是最深的爱。',
          architectureEn: 'Overview: Dad\'s love is an underground river. 1: Wordless pickups. 2: Secretly checking grades. 3: Waiting across the street in rain. Summary: Silence is the deepest love.',
          logic: '从不理解到理解父爱。', logicEn: 'From misunderstanding to understanding fatherly love.',
          skills: ['沉默父爱写法典型', '细节以小见大', '对比有力'],
          skillsEn: ['Classic silent-father technique', 'Small details, big love', 'Powerful contrast'],
          fullText: '　　如果妈妈的爱是阳光，那爸爸的爱就是地下的暗河——看不见，却一直在流。\n\n　　爸爸话少。每天接我放学，永远只有一句："走吧。"然后沉默地开车回家。我坐在后座写作业，他看后视镜的时候偶尔瞄我一眼。有时我想跟他聊聊学校的事，可一开口就觉得别扭。父子之间好像隔着一面透明的墙。\n\n　　有一次，妈妈在饭桌上说："你爸昨晚又偷偷用我手机登你的成绩系统了。"我抬头看爸爸，他假装没听见，低头扒饭。可我注意到他耳朵尖红了。\n\n　　妈妈笑着说："每次你出成绩，他比你还紧张。考得好他高兴一整天，考得不好他比你还难受——就是不跟你说。"\n\n　　我看着爸爸，他依然低着头吃饭，筷子夹菜的动作快了几分。\n\n　　最让我触动的是那个雨天。放学时突然下起暴雨，同学们的爸妈都挤在校门口送伞。我在人群中找了一圈，没有爸爸的身影。心里有点酸——也许他忘了。\n\n　　打着书包遮头冲出校门，跑到马路对面时，我愣住了。爸爸站在对街的屋檐下，手里举着一把伞。他没有像别的家长那样挤到校门口，只是安安静静地站在那里，等我自己走过来。\n\n　　他看到我，伸手把伞递过来。还是那一句："走吧。"\n\n　　可那一刻，我忽然听懂了这两个字里藏了多少东西——走吧，我在这里；走吧，不用怕；走吧，有我呢。\n\n　　爸爸的爱从不大声说出来，可它一直在。就像那条暗河，无声地流过生活的每一天。',
          fullTextEn: '　　If Mom\'s love is sunlight, Dad\'s is an underground river — invisible, yet always flowing.\n\n　　Dad is quiet. Picking me up from school every day, always just: "Let\'s go." Then silent driving home. In the backseat doing homework, I\'d catch him glancing at me through the rearview mirror. Sometimes I\'d want to share school stories, but opening my mouth felt awkward. Between father and son — a transparent wall.\n\n　　One dinner, Mom said: "Your dad used my phone again last night to check your grades." I looked up; he pretended not to hear, head down, eating. But his ear tips reddened.\n\n　　Mom laughed: "Every time grades come out, he\'s more nervous than you. Good results make him happy all day; bad ones make him sadder than you — he just won\'t tell you."\n\n　　I watched Dad, still eating, chopsticks moving faster.\n\n　　Most touching: a rainy day. Sudden downpour at dismissal. Other parents crowded the school gate with umbrellas. I searched the crowd — no Dad. A pang — maybe he forgot.\n\n　　Using my backpack as a hood, I dashed across the road. And froze. Dad stood under an eave across the street, holding an umbrella. He hadn\'t squeezed to the gate like other parents — just stood there quietly, waiting for me to come to him.\n\n　　He saw me, extended the umbrella. Same words: "Let\'s go."\n\n　　But that moment, I finally heard everything hidden in those two words — "Let\'s go, I\'m here. Let\'s go, don\'t worry. Let\'s go, I\'ve got you."\n\n　　Dad\'s love never speaks loudly, yet it\'s always there. Like that underground river, silently flowing through every day.',
          highlights: [
            { text: '他耳朵尖红了', textEn: 'His ear tips reddened', why: '以小动作写深情', whyEn: 'Small gesture reveals deep feeling' },
            { text: '站在对街的屋檐下', textEn: 'Standing under an eave across the street', why: '父爱的距离感', whyEn: 'Fatherly love\'s respectful distance' },
            { text: '走吧——我在这里', textEn: 'Let\'s go — I\'m here', why: '解读日常语言的深意', whyEn: 'Decoding depth in everyday words' }
          ],
          sections: [
            { type: '总起', fn: '比喻', fnEn: 'Metaphor', detail: '爱如暗河', detailEn: 'Love as underground river' },
            { type: '事一', fn: '沉默', fnEn: 'Silence', detail: '只说"走吧"', detailEn: 'Only says "let\'s go"' },
            { type: '事二', fn: '偷看', fnEn: 'Secret', detail: '偷查成绩', detailEn: 'Secretly checking grades' },
            { type: '事三', fn: '等待', fnEn: 'Waiting', detail: '对街撑伞', detailEn: 'Umbrella across the street' },
            { type: '总结', fn: '呼应', fnEn: 'Echo', detail: '无声的流', detailEn: 'Silent flow' }
          ]
        },
        {
          title: '老师二三事', titleEn: 'A Few Things About My Teacher',
          score: 36, maxScore: 40, structure: 'diJinShi',
          techniques: ['yuYanMiaoXie', 'xiJieMiaoXie', 'duiBi'],
          techniqueMarks: [
            { para: 0, text: '她有三个面孔，我花了三年才全部看清', technique: '悬念结构', techniqueEn: 'Structural Suspense', effect: '三面孔预告统领全篇，引发好奇', effectEn: 'Three-face preview frames the entire essay and sparks curiosity' },
            { para: 1, text: '一篇600字的作文，她能用红笔写300字的批注', technique: '数字夸张', techniqueEn: 'Numerical Hyperbole', effect: '数字对比将严格具象化，印象鲜明', effectEn: 'Numerical contrast makes strictness vivid and unforgettable' },
            { para: 1, text: '通篇密密麻麻的红字，像被染了一场红色的雨', technique: '比喻', techniqueEn: 'Metaphor', effect: '红色的雨——视觉冲击写出批改的密度', effectEn: 'Red rain — visual impact conveys the density of corrections' },
            { para: 1, text: '思路好，但表达配不上你的思路。重写', technique: '语言描写', techniqueEn: 'Direct Dialog', effect: '评语简洁犀利，严师形象跃然纸上', effectEn: 'Terse, incisive comment — the strict teacher leaps off the page' },
            { para: 1, text: '那两个字比任何表扬都让我开心', technique: '对比', techniqueEn: 'Contrast', effect: '"不错"的分量因前文的严格而倍增', effectEn: '"Not bad" gains weight precisely because of the preceding strictness' },
            { para: 2, text: '李白要是活在今天，朋友圈一定天天发自拍', technique: '语言描写', techniqueEn: 'Humorous Dialog', effect: '穿越式幽默让古人鲜活，课堂气氛可感', effectEn: 'Time-travel humor brings ancients alive — classroom atmosphere palpable' },
            { para: 2, text: '一听到这三个字就自动紧张', technique: '细节', techniqueEn: 'Conditioned Response Detail', effect: '班级共有记忆的细节写出师生默契的反讽', effectEn: 'A shared classroom memory — ironic teacher-student rapport captured' },
            { para: 3, text: '也是——我最舍不得的一届', technique: '语言反转', techniqueEn: 'Dialog Reversal', effect: '破折号后的停顿+转折，情感冲击力极强', effectEn: 'The dash-pause then pivot delivers devastating emotional impact' },
            { para: 3, text: '她转过身，假装在黑板上写字', technique: '动作留白', techniqueEn: 'Action as Subtext', effect: '不写泪写动作——克制比直抒更动人', effectEn: 'Showing the gesture instead of tears — restraint moves more than directness' },
            { para: 3, text: '掌声响起来，经久不息', technique: '环境衬托', techniqueEn: 'Ambient Echo', effect: '无言的掌声替代所有话语，集体情感的爆发', effectEn: 'Wordless applause replaces all speech — collective emotion erupts' }
          ],
          approach: '语文老师的三个侧面：严厉批改作文、课堂幽默、毕业时的眼泪。',
          approachEn: 'Three sides of the Chinese teacher: strict grading, classroom humor, graduation tears.',
          architecture: '严：红笔批改密密麻麻；趣：课堂上的经典语录；柔：毕业典礼上哭了。递进展现老师多面形象。',
          architectureEn: 'Strict: Red pen markings. Fun: Classic classroom quotes. Soft: Tears at graduation. Progressive revelation of a multi-faceted teacher.',
          logic: '从表面到深层认识老师。', logicEn: 'Surface to deep understanding of teacher.',
          skills: ['语言描写鲜活', '递进式结构', '反转见真情'],
          skillsEn: ['Lively dialogue', 'Progressive structure', 'Reversal reveals emotion'],
          fullText: '　　张老师教我们语文。她有三个面孔，我花了三年才全部看清。\n\n　　第一个面孔：严。\n　　张老师批作文，堪称"红笔杀手"。一篇600字的作文，她能用红笔写300字的批注。错别字画圈，病句画横线，逻辑不通的地方打大大的问号。有一次我写了篇自认为不错的文章，拿回来一看——通篇密密麻麻的红字，像被染了一场红色的雨。最后一行她写道："思路好，但表达配不上你的思路。重写。"\n\n　　我气鼓鼓地重写了三遍。第三遍交上去，她终于在末尾画了一个大大的勾，旁边写了两个字："不错。"那两个字比任何表扬都让我开心。\n\n　　第二个面孔：趣。\n　　张老师上课特别有趣。讲到"高山流水觅知音"时，她说："你们现在觉得同桌烦，等毕业了就知道那是知音了。"讲到李白，她说："李白要是活在今天，朋友圈一定天天发自拍——他太自恋了。"全班笑得前仰后合。\n\n　　她还有句口头禅："同学们，这道题——送分的！"可每次她说"送分的"，那道题就格外难。后来我们一听到这三个字就自动紧张。\n\n　　第三个面孔：柔。\n　　毕业典礼上，张老师站在讲台上，说了最后一段话。她声音很稳："你们是我教过的最调皮的一届。"说到这里停了几秒，"也是——我最舍不得的一届。"然后她转过身，假装在黑板上写字。可我们都看到了——她在擦眼泪。\n\n　　教室里安静了好几秒，然后掌声响起来，经久不息。\n\n　　三年后的今天，我依然记得她红笔下的严格、课堂上的欢笑、和转身时的眼泪。张老师的二三事，是初中最珍贵的收藏。',
          fullTextEn: '　　Teacher Zhang taught us Chinese. She had three faces, and it took me three years to see them all.\n\n　　Face one: strict.\n　　Her essay grading earned her the title "Red Pen Killer." On a 600-word essay, she\'d write 300 words of comments. Typos circled, awkward sentences underlined, logical gaps marked with giant question marks. Once I submitted what I thought was decent — returned dripping in red, like caught in a red rain. Her last line: "Good thinking, but the expression doesn\'t match. Rewrite."\n\n　　I rewrote it three times, fuming. On the third submission, she finally drew a big checkmark and wrote two words: "Not bad." Those two words made me happier than any praise.\n\n　　Face two: funny.\n　　Her classes were hilarious. On "High Mountains, Flowing Water" (about soulmate friendship): "You find your deskmate annoying now. Wait till graduation — that\'s your soulmate." On Li Bai: "If Li Bai lived today, his social media would be all selfies — total narcissist." The class roared.\n\n　　Her catchphrase: "Students, this question — it\'s a freebie!" But whenever she said "freebie," the question was impossibly hard. We learned to tense up at those words.\n\n　　Face three: soft.\n　　Graduation ceremony: Teacher Zhang stood at the podium for her final words. Voice steady: "You are the naughtiest class I\'ve ever taught." A pause. "And the one — I can\'t bear to let go." She turned to the blackboard, pretending to write something. But we all saw — she was wiping tears.\n\n　　Silence for several seconds, then applause that wouldn\'t stop.\n\n　　Three years later, I still remember her strict red pen, classroom laughter, and those hidden tears. Teacher Zhang\'s "few things" are junior high\'s most precious collection.',
          highlights: [
            { text: '通篇密密麻麻的红字，像被染了一场红色的雨', textEn: 'The entire page dense with red — as if caught in a crimson rainstorm', why: '夸张生动', whyEn: 'Vivid exaggeration' },
            { text: '她转过身，假装在黑板上写字', textEn: 'She turned to the blackboard, pretending to write something', why: '动作见真情', whyEn: 'Action reveals emotion' },
            { text: '也是我最舍不得的一届', textEn: 'And the one I can\'t bear to let go', why: '反转动人', whyEn: 'Moving reversal' }
          ],
          sections: [
            { type: '引入', fn: '总起', fnEn: 'Overview', detail: '三个面孔', detailEn: 'Three faces' },
            { type: '严', fn: '严格', fnEn: 'Strict', detail: '红笔批改', detailEn: 'Red pen grading' },
            { type: '趣', fn: '幽默', fnEn: 'Humor', detail: '课堂语录', detailEn: 'Classroom quotes' },
            { type: '柔', fn: '深情', fnEn: 'Emotion', detail: '毕业眼泪', detailEn: 'Graduation tears' }
          ]
        }
      ]
    },
    {
      id: 'yn2017_comp1',
      paperId: 'yn2017',
      year: 2017,
      region: '云南省',
      prompt: '请以"老师写的评语______我"为题，写一篇文章。不少于600字。',
      promptEn: 'Write on "The Teacher\'s Comment ______ Me." 600+ words.',
      type: 'semiOpenTopic',
      category: '半命题作文',
      categoryEn: 'Semi-open Topic',
      wordCount: 600,
      guide: {
        analysis: '横线填动词（鼓励/激励/感动/改变/温暖等），聚焦一次评语带来的影响。写出评语内容、当时感受和后续变化。',
        analysisEn: 'Fill with a verb (encouraged/inspired/moved/changed/warmed). Focus on one comment\'s impact — content, reaction, and subsequent change.',
        keyPoints: ['评语内容要具体', '心理变化有层次', '前后对比突出', '感悟自然'],
        keyPointsEn: ['Specific comment content', 'Layered psychological change', 'Clear before-after contrast', 'Natural insight'],
        pitfalls: ['评语内容笼统', '缺少心理描写', '只叙不议'],
        pitfallsEn: ['Vague comment content', 'Missing psychology', 'Pure narrative, no reflection']
      },
      essays: [
        {
          title: '老师写的评语鼓励了我', titleEn: 'The Teacher\'s Comment Encouraged Me',
          score: 38, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['xinLiMiaoXie', 'xiJieMiaoXie', 'duiBi'],
          techniqueMarks: [
            { para: 0, text: '有一行红字刺痛了我很久——"全文记流水账，缺乏真情实感。"', technique: '细节引入', techniqueEn: 'Detail as Hook', effect: '具体评语直引——红字+刺痛的画面感立刻建立共情', effectEn: 'The exact comment quoted — red ink plus stinging pain builds instant empathy' },
            { para: 1, text: '连吃了什么菜、看了什么电视都写进去了', technique: '举例反讽', techniqueEn: 'Illustrative Irony', effect: '学生自以为详尽的内容恰恰是"流水账"的证据', effectEn: 'What the student thought was thorough is exactly the evidence for "bland diary"' },
            { para: 2, text: '日记是写给自己看的，作文是写给老师打叉的', technique: '语言描写', techniqueEn: 'Witty Dialog', effect: '一句话浓缩了对写作的逆反心理', effectEn: 'One line condenses an entire rebellious attitude toward writing' },
            { para: 3, text: '漫不经心地写了800字，主要是为了凑字数', technique: '心理描写', techniqueEn: 'Interior Monologue', effect: '敷衍态度为后文的惊喜拉开落差', effectEn: 'Perfunctory attitude creates the gap that makes the coming surprise dramatic' },
            { para: 4, text: '没有红叉，没有"流水账"', technique: '对比', techniqueEn: 'Contrast', effect: '与第一段的红字形成直接反差，新老师的不同立刻显现', effectEn: 'Direct contrast with the opening\'s red marks — the new teacher\'s difference is instant' },
            { para: 4, text: '"她把鱼头朝我这边转了转"这个细节让人觉得温暖', technique: '文中文', techniqueEn: 'Story-within-Story', effect: '评语引用学生自己的句子——示范与肯定同时完成', effectEn: 'The comment quotes the student\'s own sentence — demonstration and affirmation in one move' },
            { para: 5, text: '有人说我写得好？有人期待我的下一篇？', technique: '心理描写', techniqueEn: 'Interior Astonishment', effect: '两个反问写出被认可的惊喜与难以置信', effectEn: 'Two rhetorical questions capture the shock and disbelief of being recognized' },
            { para: 6, text: '不是华丽的辞藻，而是真实的观察', technique: '议论点题', techniqueEn: 'Reflective Theme', effect: '从评语中提炼出写作的核心——点明"真情实感"的含义', effectEn: 'Distilling writing\'s core from the comment — defining what "genuine emotion" truly means' },
            { para: 7, text: '妈妈炒菜时用袖子擦汗的动作，爸爸开车时偷偷调大暖风', technique: '排比细节', techniqueEn: 'Parallel Micro-Details', effect: '三个生活细节证明"留心观察"已内化为习惯', effectEn: 'Three life details prove that "observing carefully" has become internalized habit' },
            { para: 8, text: '不是它改变了我的写作技巧，而是它告诉我：你可以的', technique: '点题升华', techniqueEn: 'Thematic Elevation', effect: '区分技巧与信心——真正改变人的是被相信', effectEn: 'Distinguishing skill from confidence — what truly changes a person is being believed in' }
          ],
          approach: '作文被批"流水账"后想放弃写作，一句评语重燃信心。',
          approachEn: 'After being criticized for "flat writing," a comment reignites confidence.',
          architecture: '起：作文本上的"流水账"三个字；承：自暴自弃不愿再写；转：新老师的一句评语；合：重新爱上写作。',
          architectureEn: 'Open: "Flat writing" on essay. Develop: Giving up. Turn: New teacher\'s comment. Close: Loving writing again.',
          logic: '从打击到重建。', logicEn: 'From defeat to rebuilding.',
          skills: ['评语内容具体', '心理起伏真实', '转变有说服力'],
          skillsEn: ['Specific comment', 'Authentic emotional arc', 'Convincing change'],
          fullText: '　　初一下学期的作文本上，有一行红字刺痛了我很久——"全文记流水账，缺乏真情实感。"\n\n　　那篇作文我写了整整一个晚上。写的是暑假去外婆家的经历，我觉得自己写得挺好，连吃了什么菜、看了什么电视都写进去了。可老师就给了这么一句话和一个及格分。\n\n　　从那以后，我害怕写作文。每次布置作文，我就开始发愁，写出来的东西越来越短，越来越敷衍。妈妈说："你以前不是很爱写日记吗？"我说："日记是写给自己看的，作文是写给老师打叉的。"\n\n　　初二换了语文老师。王老师第一次布置作文的题目是"我最喜欢的一个人"。我漫不经心地写了800字，主要是为了凑字数。交上去的时候心想：又是及格分吧。\n\n　　两天后作文本发下来。翻开——没有红叉，没有"流水账"。评语写了满满一段：\n\n　　"你写外婆做酸菜鱼那一段特别好，\\u2018她把鱼头朝我这边转了转\\u2019这个细节让人觉得温暖。你有观察生活的能力，不要怕写，把你看到的、感受到的真实地写出来就好。期待你的下一篇。"\n\n　　我盯着那段评语看了很久。有人说我写得好？有人期待我的下一篇？\n\n　　那天晚上，我把那篇作文重新读了一遍，发现王老师在"鱼头朝我这边转了转"下面画了波浪线。原来这就是"真情实感"——不是华丽的辞藻，而是真实的观察。\n\n　　从那以后，我开始留心生活中的细节。妈妈炒菜时用袖子擦汗的动作，爸爸开车时偷偷调大暖风的习惯，同桌考砸后假装不在乎的表情。这些细节流到笔下，作文慢慢有了温度。\n\n　　初三时，我的作文第一次被当作范文在全班朗读。坐在座位上听自己的文字被念出来，心砰砰跳。那一刻我想起王老师那句评语——不是它改变了我的写作技巧，而是它告诉我：你可以的。',
          fullTextEn: '　　On my seventh-grade essay book, one red line stung for a long time: "Entire essay reads like a bland diary. Lacks genuine emotion."\n\n　　I\'d spent a whole evening writing it — my summer visit to Grandma\'s, including every dish eaten, every show watched. I thought it was decent. But the teacher gave that one sentence and a bare-pass grade.\n\n　　After that, I dreaded essays. Each assignment meant anxiety; my writing grew shorter, more perfunctory. Mom asked: "Didn\'t you used to love writing diaries?" I said: "Diaries are for myself. Essays are for teachers to cross out."\n\n　　Eighth grade brought a new Chinese teacher. Teacher Wang\'s first assignment: "A Person I Love Most." I wrote 800 careless words, mainly to meet the word count. Submitting, I thought: another bare pass.\n\n　　Two days later, the book returned. No red crosses. No "bland diary." Instead, a full paragraph of comment:\n\n　　"The part about Grandma making sour fish soup is wonderful. The detail \'she turned the fish head toward me\' feels warm. You have the ability to observe life. Don\'t be afraid to write — just put down what you see and feel honestly. Looking forward to your next one."\n\n　　I stared at that comment for a long time. Someone said I wrote well? Someone looked forward to my next piece?\n\n　　That night I re-read my essay. Teacher Wang had drawn a wavy line under "turned the fish head toward me." So this was "genuine emotion" — not fancy words, but real observation.\n\n　　From then on, I noticed life\'s details. Mom wiping sweat with her sleeve while cooking. Dad secretly turning up the heater while driving. My deskmate pretending not to care after a bad test. These details flowed onto paper; my writing gained warmth.\n\n　　Ninth grade: my essay was read aloud as a model for the whole class. Sitting there hearing my words spoken — heart pounding. That moment, I remembered Teacher Wang\'s comment. It didn\'t change my technique — it told me: you can do this.',
          highlights: [
            { text: '日记是写给自己看的，作文是写给老师打叉的', textEn: 'Diaries are for myself; essays are for teachers to cross out', why: '语言精妙写出逆反', whyEn: 'Witty line captures rebellious mindset' },
            { text: '她把鱼头朝我这边转了转', textEn: 'She turned the fish head toward me', why: '文中文的细节示范', whyEn: 'Embedded detail demonstrates the point' },
            { text: '它告诉我：你可以的', textEn: 'It told me: you can do this', why: '回扣主题', whyEn: 'Returns to theme' }
          ],
          sections: [
            { type: '起', fn: '打击', fnEn: 'Blow', detail: '"流水账"评语', detailEn: '"Bland diary" comment' },
            { type: '承', fn: '逃避', fnEn: 'Avoidance', detail: '害怕写作文', detailEn: 'Fearing essays' },
            { type: '转', fn: '转变', fnEn: 'Turning point', detail: '新老师的鼓励', detailEn: 'New teacher\'s encouragement' },
            { type: '合', fn: '成长', fnEn: 'Growth', detail: '爱上写作', detailEn: 'Loving writing' }
          ]
        },
        {
          title: '老师写的评语改变了我', titleEn: 'The Teacher\'s Comment Changed Me',
          score: 37, maxScore: 40, structure: 'diJinShi',
          techniques: ['duiBi', 'xinLiMiaoXie', 'xiJieMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '有一句，彻底改变了我', technique: '悬念', techniqueEn: 'Suspense', effect: '开篇制造期待——哪一句？怎么改变？', effectEn: 'Opening creates anticipation — which sentence? What change?' },
            { para: 1, text: '能写对答案就行，过程潦草也没关系', technique: '心理描写', techniqueEn: 'Interior Monologue', effect: '直接展现"差不多"态度的内心逻辑', effectEn: 'Directly exposes the inner logic of the "good enough" mentality' },
            { para: 1, text: '又不是考不及格', technique: '语言描写', techniqueEn: 'Dialog', effect: '顶嘴的语气将自我安慰推到极致', effectEn: 'The retort pushes self-consolation to its limit' },
            { para: 2, text: '大部分扣分不是因为不会，而是计算粗心', technique: '对比', techniqueEn: 'Contrast', effect: '"会而不对"比"不会"更刺痛——浪费天赋', effectEn: '"Knows but gets wrong" stings worse than ignorance — talent wasted' },
            { para: 3, text: '差不多是差很多', technique: '警句', techniqueEn: 'Aphoristic Punch', effect: '六个字颠覆一个态度，评语的核心冲击力', effectEn: 'Six characters topple an attitude — the comment\'s core impact' },
            { para: 3, text: '这句话像一根针，扎在了我心上', technique: '比喻通感', techniqueEn: 'Metaphor-Synesthesia', effect: '文字转化为身体痛感，触动的深度可感', effectEn: 'Words become physical pain — the depth of impact made tangible' },
            { para: 4, text: '一道一道慢慢做，把每一步过程写清楚', technique: '细节描写', techniqueEn: 'Process Detail', effect: '与此前的潦草形成鲜明对比，改变已在发生', effectEn: 'Stark contrast with earlier sloppiness — change already underway' },
            { para: 5, text: '这才是你', technique: '短句点睛', techniqueEn: 'Epiphanic Fragment', effect: '三个字的肯定比长篇表扬更有分量', effectEn: 'Three words of affirmation carry more weight than paragraphs of praise' },
            { para: 6, text: '语文作文多改一遍，英语作文多查一个单词，物理实验多记一个数据', technique: '排比递进', techniqueEn: 'Progressive Parallelism', effect: '态度改变如涟漪扩散到各科', effectEn: 'Attitude change ripples outward across every subject' },
            { para: 7, text: '从"差不多"到"更好"之间，隔的不是天赋，只是态度', technique: '点题升华', techniqueEn: 'Thematic Elevation', effect: '回扣全篇主线，将个人经验提炼为普适道理', effectEn: 'Echoing the essay\'s throughline, distilling personal experience into universal truth' }
          ],
          approach: '一句"你能做得更好"改变了我对自己的期待，从"差不多"到追求卓越。',
          approachEn: '"You can do better" changes self-expectations — from "good enough" to pursuing excellence.',
          architecture: '曾经的态度：差不多就行→评语触动→第一次认真重做→习惯改变→成绩提升。',
          architectureEn: 'Old attitude: good enough → comment strikes → first serious redo → habit change → improvement.',
          logic: '从敷衍到认真的态度转变。', logicEn: 'From perfunctory to earnest.',
          skills: ['对比鲜明', '细节递进', '结尾有力'],
          skillsEn: ['Sharp contrast', 'Progressive detail', 'Powerful ending'],
          fullText: '　　我的数学作业本上，李老师写过很多评语。但有一句，彻底改变了我。\n\n　　那时候我的口号是"差不多就行"。作业只求完成，不求完美。能写对答案就行，过程潦草也没关系。考试70多分，我觉得"还行"。妈妈着急，我无所谓："又不是考不及格。"\n\n　　有一次单元测验，我考了78分。试卷发下来，大部分扣分不是因为不会，而是计算粗心、过程不完整。我照例把试卷塞进书包，准备回家签字完事。\n\n　　翻开作业本时，我看到李老师在上一次作业的最后写了一行红字："你的思路都是对的，但过程总是\u2018差不多\u2019。差不多是差很多。你能做得更好。"\n\n　　"差不多是差很多。"这句话像一根针，扎在了我心上。\n\n　　那天晚上，我第一次把考试卷子上的错题全部重做了一遍。不是抄答案，是真的重新算。一道一道慢慢做，把每一步过程写清楚。做完后发现——其实都不难，只是以前懒得多写几步。\n\n　　第二天交作业，我破天荒地把过程写得工工整整。李老师批改时看了我好几眼，在作业本上画了一颗五角星，旁边写着："这才是你。"\n\n　　三个字，让我开心了一整天。\n\n　　从那以后，"差不多就行"变成了"能不能更好"。不只是数学，语文作文多改一遍，英语作文多查一个单词，物理实验多记一个数据。成绩像台阶一样一步步往上走。\n\n　　期末考试，数学95分。我看着那个分数，想起了李老师的评语。原来从"差不多"到"更好"之间，隔的不是天赋，只是态度。',
          fullTextEn: '　　Teacher Li wrote many comments on my math homework. But one sentence changed me completely.\n\n　　My motto: "Good enough." Homework: just complete it, no need for perfection. Right answer sufficed; messy process didn\'t matter. Tests at 70-something? "Fine by me." Mom worried; I shrugged: "At least I passed."\n\n　　A unit test: 78. Reviewing: most deductions weren\'t from ignorance but careless calculation and incomplete steps. I stuffed the test into my bag as usual.\n\n　　Opening my homework book, I found Teacher Li\'s red writing after the last assignment: "Your thinking is always correct, but the process is always \'good enough.\' Good enough is far from good. You can do better."\n\n　　"Good enough is far from good." Like a needle in my heart.\n\n　　That night, for the first time, I redid every test mistake. Not copying answers — actually recalculating. Problem by problem, writing every step clearly. Finished, I realized: none were hard. I\'d just been too lazy to write a few more steps.\n\n　　Next day, I submitted homework with meticulous steps — a first. Teacher Li glanced at me several times during grading, drew a star, and wrote: "This is you."\n\n　　Three words. Happy all day.\n\n　　After that, "good enough" became "can I do better?" Not just math: Chinese essays got an extra revision, English compositions an extra word check, physics labs an extra data point. Grades climbed like stairs.\n\n　　Final exam: math 95. Looking at that score, I remembered the comment. From "good enough" to "better" — the gap isn\'t talent, just attitude.',
          highlights: [
            { text: '差不多是差很多', textEn: 'Good enough is far from good', why: '简洁有力', whyEn: 'Concise and powerful' },
            { text: '这才是你', textEn: 'This is you', why: '三字千钧', whyEn: 'Three words, immense weight' },
            { text: '隔的不是天赋，只是态度', textEn: 'The gap isn\'t talent — just attitude', why: '点睛之笔', whyEn: 'Finishing stroke insight' }
          ],
          sections: [
            { type: '起', fn: '旧态', fnEn: 'Old habit', detail: '差不多就行', detailEn: 'Good enough attitude' },
            { type: '承', fn: '触动', fnEn: 'Trigger', detail: '评语刺痛', detailEn: 'Comment stings' },
            { type: '转', fn: '行动', fnEn: 'Action', detail: '认真重做', detailEn: 'Serious redo' },
            { type: '合', fn: '改变', fnEn: 'Change', detail: '态度和成绩提升', detailEn: 'Attitude and grades improve' }
          ]
        },
        {
          title: '老师写的评语温暖了我', titleEn: 'The Teacher\'s Comment Warmed Me',
          score: 37, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['huanJingChenTuo', 'xinLiMiaoXie', 'xiJieMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '觉得自己像一颗多余的棋子', technique: '比喻', techniqueEn: 'Metaphor', effect: '棋子意象精准写出"存在却无位置"的孤独', effectEn: 'The chess-piece image precisely captures the loneliness of existing yet having no place' },
            { para: 0, text: '几乎是逃一样走到了最后一排', technique: '动作心理', techniqueEn: 'Action as Psychology', effect: '一个"逃"字写尽社交恐惧', effectEn: 'The word "fled" distills an entire spectrum of social anxiety' },
            { para: 1, text: '同学们三五成群地聊天，我一个人坐在座位上翻书', technique: '对比', techniqueEn: 'Contrast', effect: '群体vs个体的画面对比突出孤立', effectEn: 'Group versus individual — visual contrast sharpens the isolation' },
            { para: 1, text: '有人叫错我的名字，也没人纠正', technique: '细节描写', techniqueEn: 'Telling Detail', effect: '一个细节写出被忽视的痛——连名字都不被在意', effectEn: 'One detail captures the pain of being overlooked — even your name doesn\'t matter' },
            { para: 2, text: '打了一大段字又全部删掉', technique: '心理描写', techniqueEn: 'Psychological Detail', effect: '想倾诉又咽回的矛盾写得真实入微', effectEn: 'The urge to confide, swallowed back — contradition rendered with delicate authenticity' },
            { para: 3, text: '以为不过是"学习认真，望继续努力"之类的套话', technique: '期待反转铺垫', techniqueEn: 'Expectation Setup', effect: '低期待为后文的惊喜蓄势', effectEn: 'Low expectations prime the surprise that follows' },
            { para: 4, text: '我看到你帮值日生捡了三次垃圾，看到你主动借笔给前排同学', technique: '排比细节', techniqueEn: 'Parallel Details', effect: '三个"看到"证明老师一直在默默关注', effectEn: 'Three instances of "I saw" prove the teacher was quietly watching all along' },
            { para: 4, text: '这个班的大门，一直为你开着', technique: '比喻点题', techniqueEn: 'Metaphor & Theme', effect: '大门意象给予归属感，温暖而有力', effectEn: 'The open-door image bestows belonging — warm and empowering' },
            { para: 5, text: '原来不是我被遗忘了，而是有人在安静地看着我', technique: '认知反转', techniqueEn: 'Cognitive Reversal', effect: '颠覆前文所有孤独叙述，一句话翻转全篇情感', effectEn: 'Overturns every prior moment of loneliness — one line reverses the essay\'s entire emotion' },
            { para: 6, text: '你终于跟我说话了！我等了一个学期呢！', technique: '语言描写', techniqueEn: 'Dialog', effect: '同学的一句话证明关注是双向的，温暖加倍', effectEn: 'A classmate\'s single line proves attention was mutual — warmth doubled' }
          ],
          approach: '转学后孤独无助，班主任的期末评语给了归属感。',
          approachEn: 'Lonely after transferring schools, the teacher\'s semester comment provides belonging.',
          architecture: '起：转学第一天的孤独；承：格格不入的日子；转：期末评语手册上的话；合：终于有了"家"的感觉。',
          architectureEn: 'Open: Lonely first day at new school. Develop: Not fitting in. Turn: Semester comment book. Close: Finally feeling "home."',
          logic: '从局外人到归属。', logicEn: 'From outsider to belonging.',
          skills: ['孤独感写得深入', '评语内容温暖', '前后对比动人'],
          skillsEn: ['Deep loneliness portrayal', 'Warm comment', 'Moving contrast'],
          fullText: '　　转学第一天，我站在教室门口，觉得自己像一颗多余的棋子。\n\n　　三十多张陌生的面孔转过来看我。班主任刘老师让我自我介绍，我结结巴巴说了自己的名字，然后几乎是逃一样走到了最后一排的空位。\n\n　　那学期很难熬。下课时同学们三五成群地聊天，我一个人坐在座位上翻书。体育课分组，总是最后被选中。有人叫错我的名字，也没人纠正。\n\n　　我开始怀疑转学是不是一个错误的决定。给老家的好朋友发消息，打了一大段字又全部删掉——说什么呢？说自己在新学校很孤独？太丢人了。\n\n　　学期结束时，刘老师发了评语手册。我随手翻开，以为不过是"学习认真，望继续努力"之类的套话。\n\n　　可映入眼帘的是满满一页手写的字：\n\n　　"你是这学期的新同学，我知道融入一个新集体需要勇气。你安静、内向，但你的安静不是冷漠——我看到你帮值日生捡了三次垃圾，看到你主动借笔给前排同学，看到你考试时认真到连橡皮掉了都顾不上捡。这些事没有人表扬你，但老师都看在眼里。下学期，试着打开自己——这个班的大门，一直为你开着。"\n\n　　读完，我的眼眶湿了。\n\n　　原来有人注意到了那些我以为无人在意的小事。原来不是我被遗忘了，而是有人在安静地看着我。\n\n　　下学期开学第一天，我鼓起勇气跟前排的同学说了句"早上好"。她笑了："你终于跟我说话了！我等了一个学期呢！"\n\n　　那一刻，我觉得教室温暖得像家。而这一切，始于评语手册上那些温暖的字。',
          fullTextEn: '　　First day after transferring: standing at the classroom door, feeling like a spare chess piece.\n\n　　Thirty-some strange faces turned toward me. Teacher Liu asked me to introduce myself. Stammering my name, I practically fled to the last-row empty seat.\n\n　　That semester was hard. Between classes, students chatted in groups while I sat alone flipping books. PE teams — always picked last. Someone kept getting my name wrong; nobody corrected them.\n\n　　I started doubting the transfer. Messaging my old best friend — typed a long paragraph, deleted it all. What would I say? That I\'m lonely at the new school? Too embarrassing.\n\n　　Semester end: Teacher Liu handed out comment booklets. I opened mine expecting boilerplate: "Studies diligently, keep it up."\n\n　　Instead: a full handwritten page.\n\n　　"You\'re this semester\'s new student. I know joining a new community takes courage. You\'re quiet, introverted — but your quietness isn\'t coldness. I saw you pick up trash for the duty students three times. I saw you lend a pen to the student in front. I saw you so focused during tests you didn\'t even pick up your dropped eraser. No one praised these things, but your teacher noticed every one. Next semester, try opening up — this classroom\'s door has always been open for you."\n\n　　My eyes stung.\n\n　　Someone noticed the small things I thought nobody cared about. I wasn\'t forgotten — someone was quietly watching.\n\n　　First day of the new semester, I mustered courage to say "good morning" to the girl in front. She beamed: "You\'re finally talking to me! I\'ve waited a whole semester!"\n\n　　That moment, the classroom felt warm as home. And it all started with those warm words in a comment booklet.',
          highlights: [
            { text: '觉得自己像一颗多余的棋子', textEn: 'I felt like a spare chess piece', why: '精准写出孤独', whyEn: 'Precisely captures loneliness' },
            { text: '你的安静不是冷漠', textEn: 'Your quietness isn\'t coldness', why: '评语见洞察', whyEn: 'Comment shows insight' },
            { text: '你终于跟我说话了', textEn: 'You\'re finally talking to me!', why: '反转温暖', whyEn: 'Warm reversal' }
          ],
          sections: [
            { type: '起', fn: '孤独', fnEn: 'Loneliness', detail: '转学第一天', detailEn: 'Transfer first day' },
            { type: '承', fn: '煎熬', fnEn: 'Suffering', detail: '格格不入', detailEn: 'Not fitting in' },
            { type: '转', fn: '温暖', fnEn: 'Warmth', detail: '评语手册', detailEn: 'Comment booklet' },
            { type: '合', fn: '归属', fnEn: 'Belonging', detail: '教室像家', detailEn: 'Classroom as home' }
          ]
        },
        {
          title: '老师写的评语感动了我', titleEn: 'The Teacher\'s Comment Moved Me',
          score: 36, maxScore: 40, structure: 'zongFenZong',
          techniques: ['xiJieMiaoXie', 'shouWeiHuYing', 'yiXiaoJianDa'],
          techniqueMarks: [
            { para: 0, text: '那本小学五年级的日记本，我一直留着', technique: '首尾呼应铺垫', techniqueEn: 'Echo Setup', effect: '开篇点明旧物留存，悬念感引读者追问"为什么"', effectEn: 'Opening reveals a kept object, suspense draws the reader to ask "why"' },
            { para: 1, text: '头发花白，走路慢悠悠的', technique: '外貌描写', techniqueEn: 'Physical Detail', effect: '几笔勾勒出临近退休老师的温厚形象', effectEn: 'A few strokes sketch a near-retirement teacher\'s gentle presence' },
            { para: 1, text: '她的评语总是针对你写的内容来回应', technique: '细节对比', techniqueEn: 'Contrastive Detail', effect: '与"盖章了事"的对比突出陈老师的用心', effectEn: 'Contrast with "stamp and move on" highlights Teacher Chen\'s devotion' },
            { para: 2, text: '像在和你聊天', technique: '比喻', techniqueEn: 'Simile', effect: '将师生批注关系比作对话，亲近感倍增', effectEn: 'Likening written comments to conversation multiplies intimacy' },
            { para: 3, text: '想带回家又怕妈妈不同意，最后把自己的牛奶倒在纸杯里', technique: '细节描写', techniqueEn: 'Telling Detail', effect: '犹豫与行动并存，写出孩子善良的自然与局限', effectEn: 'Hesitation alongside action — a child\'s kindness, natural yet bounded' },
            { para: 4, text: '善良不在于做了多大的事，而在于面对弱小时的那一念之间', technique: '以小见大', techniqueEn: 'Small-to-Big Wisdom', effect: '老师的评语将牛奶事件升华为品格定义', effectEn: 'The teacher\'s comment elevates a cup of milk into a definition of character' },
            { para: 5, text: '一个大人为我骄傲——这是我第一次体会到这种感觉', technique: '心理描写', techniqueEn: 'Psychological Revelation', effect: '写出被肯定的稀缺与珍贵，打动人心', effectEn: 'The scarcity and preciousness of being affirmed — deeply moving' },
            { para: 6, text: '搬了几次家，很多东西都丢了，但那本日记本一直在', technique: '对比', techniqueEn: 'Contrast', effect: '物品的取舍映射情感的轻重', effectEn: 'What\'s kept versus what\'s lost mirrors the weight of feeling' },
            { para: 6, text: '每次翻到那一页，都觉得那几行字还是热的', technique: '通感', techniqueEn: 'Synesthesia', effect: '墨迹化为温度，时间无法冷却的感动', effectEn: 'Ink transmuted to heat — feeling that time cannot cool' },
            { para: 7, text: '有些评语会褪色，有些感动不会', technique: '点题首尾呼应', techniqueEn: 'Thematic Echo', effect: '对仗句收束全文，余韵悠长', effectEn: 'Balanced closing line — the essay ends, but the resonance lingers' }
          ],
          approach: '临近退休的老师在我日记本上写下的评语，多年后重读依然感动。',
          approachEn: 'A retiring teacher\'s comment in my diary — still moving years later.',
          architecture: '总：那行字我保存至今；分：老师的日记批阅习惯→那次特别的评语→翻出旧日记重读；总：感动是经得起时间的。',
          architectureEn: 'Overview: That line preserved to this day. Detail: Teacher\'s diary review habit → the special comment → rereading years later. Summary: True feeling withstands time.',
          logic: '时间验证感动的真实。', logicEn: 'Time validates true emotion.',
          skills: ['旧物触发记忆', '评语真挚', '结尾余韵悠长'],
          skillsEn: ['Object triggers memory', 'Genuine comment', 'Lingering ending'],
          fullText: '　　那本小学五年级的日记本，我一直留着。不为别的，就为了里面陈老师写的那几行字。\n\n　　陈老师那时快退休了，头发花白，走路慢悠悠的。她有个习惯——每周收一次我们的日记本，认真读完每一篇，再写上评语。别的老师可能打个日期盖个章就完了，陈老师不一样，她的评语总是针对你写的内容来回应。\n\n　　你写今天不开心，她就写"明天会更好，老师相信你"。你写考试紧张，她就写"深呼吸，你准备得已经很充分了"。像在和你聊天。\n\n　　有一次，我在日记里写了一件很小的事：放学路上看到一只受伤的小猫，想带回家又怕妈妈不同意，最后把自己的牛奶倒在纸杯里留给了它。\n\n　　第二天日记本发下来，陈老师的评语比平时长了很多："你知道吗，一个人的善良不在于做了多大的事，而在于面对弱小时的那一念之间。你留下的不只是一杯牛奶，是你这个年纪最珍贵的品质。老师为你骄傲。"\n\n　　十一岁的我看完，眼眶就红了。我不知道"善良"是什么大词，只知道老师说她"为我骄傲"。一个大人为我骄傲——这是我第一次体会到这种感觉。\n\n　　后来陈老师退休了，我上了初中、高中。搬了几次家，很多东西都丢了，但那本日记本一直在。每次翻到那一页，都觉得那几行字还是热的。\n\n　　去年整理书柜，又翻到了它。陈老师的字迹工整秀丽，一笔一划都带着温度。我用手机拍了下来，设成了壁纸。\n\n　　有些评语会褪色，有些感动不会。',
          fullTextEn: '　　I still keep that fifth-grade diary. Not for the diary entries — for Teacher Chen\'s words inside.\n\n　　Teacher Chen was near retirement then — gray-haired, slow-walking. Her habit: collecting our diaries weekly, reading every entry, writing real comments. Other teachers might stamp a date and move on. Not her — she responded to what you actually wrote.\n\n　　If you wrote about a bad day: "Tomorrow will be better. I believe in you." If you wrote about test anxiety: "Take a deep breath. You\'re more prepared than you think." Like a conversation.\n\n　　Once, I wrote about something tiny: seeing an injured kitten on the way home. I wanted to bring it back but feared Mom would object. So I poured my milk into a paper cup and left it there.\n\n　　Next day, the diary returned. Her comment was longer than usual: "Do you know, a person\'s kindness isn\'t measured by grand gestures but by that split-second instinct when facing something vulnerable? What you left wasn\'t just a cup of milk — it was the most precious quality someone your age can have. I\'m proud of you."\n\n　　Eleven-year-old me read it with reddening eyes. I didn\'t know "kindness" as a big word. I just knew: the teacher said she was proud of me. An adult, proud of ME — the first time I\'d felt that.\n\n　　Teacher Chen retired. I went through junior high, high school. Moved several times; many things were lost. But that diary always stayed. Every time I turn to that page, the words still feel warm.\n\n　　Last year, reorganizing bookshelves, I found it again. Teacher Chen\'s handwriting — neat and graceful, every stroke carrying warmth. I photographed it and set it as my wallpaper.\n\n　　Some comments fade. Some feelings never do.',
          highlights: [
            { text: '面对弱小时的那一念之间', textEn: 'That split-second instinct when facing something vulnerable', why: '定义善良精准', whyEn: 'Precise definition of kindness' },
            { text: '每次翻到那一页，都觉得那几行字还是热的', textEn: 'Every time I turn to that page, the words still feel warm', why: '通感传递温度', whyEn: 'Synesthesia conveys warmth' },
            { text: '有些评语会褪色，有些感动不会', textEn: 'Some comments fade; some feelings never do', why: '结尾余韵', whyEn: 'Lingering ending' }
          ],
          sections: [
            { type: '总起', fn: '引入', fnEn: 'Introduction', detail: '保存至今的日记', detailEn: 'Diary kept to this day' },
            { type: '分述', fn: '习惯', fnEn: 'Habit', detail: '每周认真批改', detailEn: 'Weekly careful reviews' },
            { type: '核心', fn: '评语', fnEn: 'Comment', detail: '为你骄傲', detailEn: 'Proud of you' },
            { type: '总结', fn: '呼应', fnEn: 'Echo', detail: '感动不褪色', detailEn: 'Feelings don\'t fade' }
          ]
        },
        {
          title: '老师写的评语点醒了我', titleEn: 'The Teacher\'s Comment Awakened Me',
          score: 36, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['duiBi', 'xinLiMiaoXie', 'biYu'],
          techniqueMarks: [
            { para: 0, text: '手机游戏是我的全部世界', technique: '比喻', techniqueEn: 'Metaphor', effect: '开篇一句定调——游戏即世界，暗示沉迷之深', effectEn: 'Opening line sets the tone — game as entire world signals the depth of addiction' },
            { para: 1, text: '做作业时偷偷玩，吃饭时偷偷玩，甚至上厕所都在打排位赛', technique: '排比递进', techniqueEn: 'Escalating Parallelism', effect: '三个场景层层加码，沉迷程度步步升级', effectEn: 'Three scenes escalating — addiction intensifying with each beat' },
            { para: 1, text: '晚上躲在被窝里打到凌晨一两点', technique: '细节描写', techniqueEn: 'Specific Detail', effect: '被窝+凌晨的画面感让沉迷具体可触', effectEn: 'The blanket-and-midnight image makes addiction palpably concrete' },
            { para: 2, text: '像掉进了一个黑洞，越陷越深，却觉得自己挺快乐', technique: '比喻反讽', techniqueEn: 'Metaphor with Irony', effect: '黑洞中的"快乐"——自我欺骗写得精准', effectEn: '"Happiness" inside a black hole — self-deception captured with precision' },
            { para: 3, text: '准备像往常一样塞进抽屉，不想多看一眼', technique: '心理描写', techniqueEn: 'Psychological Detail', effect: '逃避行为暴露麻木的内心状态', effectEn: 'Avoidance behavior exposes a numbed inner state' },
            { para: 4, text: '从113到49。这64分去了哪里', technique: '数字对比', techniqueEn: 'Numerical Contrast', effect: '两个数字一个问号——无需修辞，事实本身就是控诉', effectEn: 'Two numbers and a question mark — facts need no rhetoric to devastate' },
            { para: 4, text: '你愿意记住现在的自己吗', technique: '灵魂拷问', techniqueEn: 'Rhetorical Soul-Question', effect: '不批评不说教，一个问题直击灵魂深处', effectEn: 'No criticism, no lecturing — one question strikes the soul\'s core' },
            { para: 4, text: '最后一个问号像一盆冷水浇下来', technique: '比喻通感', techniqueEn: 'Metaphor-Synesthesia', effect: '视觉符号转化为触觉冲击，清醒瞬间可感', effectEn: 'A visual symbol becomes a tactile shock — the moment of clarity made physical' },
            { para: 5, text: '玩了不到十分钟就退出来了', technique: '对比', techniqueEn: 'Contrast', effect: '与此前通宵打游戏形成强烈反差，觉醒已开始', effectEn: 'Sharp contrast with previous all-night sessions — awakening has begun' },
            { para: 6, text: '不是因为突然变得自律，而是因为——我突然看清了自己', technique: '心理辨析', techniqueEn: 'Psychological Distinction', effect: '区分外在约束与内在觉醒，写出改变的真正动力', effectEn: 'Distinguishing external discipline from inner awakening — the true engine of change' }
          ],
          approach: '沉迷手机游戏的我，被英语老师一句批注惊醒。',
          approachEn: 'Addicted to mobile games, awakened by an English teacher\'s annotation.',
          architecture: '起：沉迷游戏成绩下滑；承：不在意装满不在乎；转：英语试卷上的评语；合：放下手机重新开始。',
          architectureEn: 'Open: Gaming addiction, grades dropping. Develop: Pretending not to care. Turn: Comment on English test. Close: Putting down the phone.',
          logic: '从沉迷到清醒。', logicEn: 'From addiction to clarity.',
          skills: ['沉迷心理刻画', '评语直击要害', '转变干脆'],
          skillsEn: ['Addiction portrayal', 'Comment hits the mark', 'Clean turnaround'],
          fullText: '　　那段时间，手机游戏是我的全部世界。\n\n　　每天放学回家，书包一扔就摸手机。做作业时偷偷玩，吃饭时偷偷玩，甚至上厕所都在打排位赛。晚上躲在被窝里打到凌晨一两点，第二天上课昏昏欲睡。\n\n　　成绩从年级前50掉到200多名，我假装不在乎。妈妈没收手机，我就用旧平板偷偷玩。爸爸训斥我，我顶嘴说"学习有什么用"。那时候的我，像掉进了一个黑洞，越陷越深，却觉得自己挺快乐。\n\n　　直到那次月考。英语考了49分，有史以来第一次不及格。试卷发下来，我准备像往常一样塞进抽屉，不想多看一眼。\n\n　　可翻开试卷时，我看到英语老师在最后写了一段话。不是批评，也不是鼓励，只是很平静的几行字：\n\n　　"我翻了你初一的试卷，那时你英语考了113分。两年时间，从113到49。这64分去了哪里？你自己心里最清楚。我不想说教，只想问你一个问题——等你长大后回头看，你愿意记住现在的自己吗？"\n\n　　最后一个问号像一盆冷水浇下来。\n\n　　那天晚上我照常打开游戏，可玩了不到十分钟就退出来了。脑子里一直转着那句话：你愿意记住现在的自己吗？\n\n　　答案是不愿意。我不愿意记住一个躲在被窝里偷玩游戏、考49分还假装无所谓的自己。\n\n　　我把游戏卸载了。不是因为突然变得自律，而是因为——我突然看清了自己。\n\n　　后来的路很长，成绩恢复得很慢。但每次想偷懒时，我都会想起那个问号。它不是最严厉的批评，却是最有力的点醒。',
          fullTextEn: '　　During that period, mobile games were my entire world.\n\n　　Home from school: bag tossed, phone grabbed. Sneaking games during homework, during meals, even in the bathroom playing ranked matches. Under the covers until 1-2 AM, nodding off in class next day.\n\n　　Rank dropped from top 50 to 200+. I pretended not to care. Mom confiscated my phone; I secretly used an old tablet. Dad scolded; I retorted: "What\'s the point of studying?" I was sinking into a black hole — deeper every day, yet thinking I was happy.\n\n　　Then the monthly test. English: 49. First-ever failure. About to stuff the test in my drawer without looking.\n\n　　But opening it, I found the English teacher\'s note at the end. Not criticism, not encouragement — just calm lines:\n\n　　"I looked up your seventh-grade tests. You scored 113 in English then. In two years: 113 to 49. Where did those 64 points go? You know best. I won\'t lecture. Just one question: when you grow up and look back, will you want to remember who you are right now?"\n\n　　That question mark hit like a bucket of cold water.\n\n　　That night I opened the game as usual, but quit within ten minutes. The question kept spinning: will you want to remember who you are right now?\n\n　　The answer: no. I didn\'t want to remember someone hiding under covers gaming, scoring 49, pretending not to care.\n\n　　I uninstalled the game. Not from sudden discipline — but because I suddenly saw myself clearly.\n\n　　The road back was long, grades recovered slowly. But every time laziness tempted me, I remembered that question mark. Not the harshest criticism — but the most powerful awakening.',
          highlights: [
            { text: '这64分去了哪里', textEn: 'Where did those 64 points go?', why: '数字对比震撼', whyEn: 'Numerical contrast, shocking' },
            { text: '你愿意记住现在的自己吗', textEn: 'Will you want to remember who you are right now?', why: '灵魂拷问', whyEn: 'Soul-searching question' },
            { text: '不是最严厉的批评，却是最有力的点醒', textEn: 'Not the harshest criticism — but the most powerful awakening', why: '收束精准', whyEn: 'Precise closing' }
          ],
          sections: [
            { type: '起', fn: '沉迷', fnEn: 'Addiction', detail: '游戏成瘾', detailEn: 'Gaming addiction' },
            { type: '承', fn: '下滑', fnEn: 'Decline', detail: '成绩暴跌', detailEn: 'Grades plummet' },
            { type: '转', fn: '点醒', fnEn: 'Awakening', detail: '评语的问号', detailEn: 'The comment\'s question' },
            { type: '合', fn: '改变', fnEn: 'Change', detail: '卸载重新开始', detailEn: 'Uninstall and restart' }
          ]
        }
      ]
    },
    {
      id: 'yn2016_comp1',
      paperId: 'yn2016',
      year: 2016,
      region: '云南省',
      prompt: '请以"留只耳朵听______"为题，写一篇文章。不少于600字。',
      promptEn: 'Write on "Leave an Ear to Listen to ______." 600+ words.',
      type: 'semiOpenTopic',
      category: '半命题作文',
      categoryEn: 'Semi-open Topic',
      wordCount: 600,
      guide: {
        analysis: '补题可填具体声音（花开/雨声/鸟鸣）或抽象概念（建议/心声/自然）。写出"留只耳朵听"的原因和收获。',
        analysisEn: 'Fill with sounds (flowers blooming/rain/birds) or abstract (advice/inner voice/nature). Show why to listen and what was gained.',
        keyPoints: ['补题要有诗意', '写出忽视到倾听的转变', '有声音描写', '感悟深刻'],
        keyPointsEn: ['Poetic topic', 'Show change from ignoring to listening', 'Sound descriptions', 'Deep insight'],
        pitfalls: ['只写声音不写感悟', '补题太平淡', '缺少转变过程'],
        pitfallsEn: ['Only sounds, no insight', 'Bland topic', 'No transformation']
      },
      essays: [
        {
          title: '留只耳朵听花开', titleEn: 'Leave an Ear to Listen to Flowers Bloom',
          score: 38, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['tongGan', 'huanJingChenTuo', 'yiXiaoJianDa'],
          techniqueMarks: [
            { para: 0, text: '初三的日子像一列高速列车，从早到晚呼啸而过，不给你一秒钟下车看风景', technique: '比喻', techniqueEn: 'Extended Metaphor', effect: '列车意象将时间压迫感具象化，速度可感', effectEn: 'The bullet-train image makes time pressure tangible — speed you can feel' },
            { para: 1, text: '教室、食堂、宿舍，三点一线', technique: '排比', techniqueEn: 'Parallelism', effect: '三点一线的节奏本身就是单调的具象', effectEn: 'The three-stop rhythm itself embodies monotony' },
            { para: 1, text: '校园里的树绿了又黄了，我竟浑然不觉', technique: '对比', techniqueEn: 'Contrast', effect: '季节已轮转，自己却浑然不知——错失写得触目惊心', effectEn: 'Seasons turned without notice — the obliviousness is startling' },
            { para: 2, text: '我烦躁地靠在栏杆上，想着下一节课要考的内容', technique: '心理描写', techniqueEn: 'Interior State', effect: '焦虑的心理状态为后文的静写蓄势', effectEn: 'Anxious mindset builds tension before the coming stillness' },
            { para: 3, text: '花瓣上挂着水珠，在夕阳下闪着光', technique: '环境描写', techniqueEn: 'Scenic Detail', effect: '微观特写让一朵花成为整个春天的代言', effectEn: 'Close-up makes a single flower the spokesman for all of spring' },
            { para: 4, text: '花瓣舒展的声音，露珠滑落的声音，泥土呼吸的声音', technique: '通感排比', techniqueEn: 'Synesthetic Parallelism', effect: '听觉想象三连——无声之声正是通感的极致', effectEn: 'Triple auditory imagination — hearing silence is synesthesia at its purest' },
            { para: 4, text: '那一刻，世界突然慢了下来', technique: '节奏对比', techniqueEn: 'Tempo Contrast', effect: '与开篇的"呼啸而过"形成强烈速度反差', effectEn: 'Stark tempo reversal against the opening\'s "hurtling past"' },
            { para: 5, text: '杨柳吐了新芽，桃树开了满枝粉花，月季红得像火', technique: '环境铺排', techniqueEn: 'Scenic Cataloging', effect: '三种植物三种色彩——被忽视的美好一次性涌入视野', effectEn: 'Three plants, three colors — overlooked beauty flooding back in one moment' },
            { para: 6, text: '初三很忙，但不能忙到忘了抬头', technique: '以小见大', techniqueEn: 'Small-to-Big', effect: '日记体的一句话凝练全篇主旨', effectEn: 'A diary-entry sentence crystallizes the essay\'s entire theme' },
            { para: 7, text: '那些安静的美好，才是生活本来的模样', technique: '点题升华', techniqueEn: 'Thematic Elevation', effect: '从个人经验跃升到对生活本质的感悟', effectEn: 'Leaps from personal experience to an insight about life\'s essence' }
          ],
          approach: '埋头学习忽视了身边美好，一次偶然停下脚步听到了春天的声音。',
          approachEn: 'Buried in studies, ignoring beauty around — pausing to hear spring.',
          architecture: '起：每天两点一线；承：错过了校园的春天；转：雨后偶然驻足；合：学会在忙碌中留只耳朵。',
          architectureEn: 'Open: Daily routine. Develop: Missing campus spring. Turn: Pausing after rain. Close: Learning to listen amid busyness.',
          logic: '从忙碌盲目到留心美好。', logicEn: 'From blind busyness to appreciating beauty.',
          skills: ['通感精妙', '环境描写优美', '以小见大'],
          skillsEn: ['Synesthesia', 'Beautiful scenery', 'Small-big theme'],
          fullText: '　　初三的日子像一列高速列车，从早到晚呼啸而过，不给你一秒钟下车看风景。\n\n　　每天早上六点半出门，晚上九点半回家。教室、食堂、宿舍，三点一线。眼里只有试卷上的分数，耳朵里只有老师的讲解和闹钟的催促。校园里的树绿了又黄了，我竟浑然不觉。\n\n　　那天下午第二节课后，突降暴雨。我们被困在教学楼走廊里，哪儿也去不了。同学们有的抱怨，有的玩手机。我烦躁地靠在栏杆上，想着下一节课要考的内容。\n\n　　雨停了。空气里有一种说不出的清甜。我无意间低头，看见走廊旁的花坛里，一朵白色的栀子花正在雨后盛开。花瓣上挂着水珠，在夕阳下闪着光。\n\n　　我蹲下来，凑近它。安静。可就在那几秒钟的安静里，我仿佛听到了什么——花瓣舒展的声音，露珠滑落的声音，泥土呼吸的声音。当然，这些声音也许只存在于我的想象里。但那一刻，世界突然慢了下来。\n\n　　我抬头环顾四周——操场边的杨柳吐了新芽，教学楼后面的桃树开了满枝粉花，花坛里的月季红得像火。这些景色一直都在，只是我从来没有停下来看过。\n\n　　那天晚上写日记，我写了一句话："初三很忙，但不能忙到忘了抬头。"\n\n　　从那以后，我给自己定了一个小规矩：每天至少有五分钟，放下书本，去听一听——听风吹过走廊的声音，听鸟在屋檐下啁啾，听雨打在窗玻璃上的节奏。\n\n　　这五分钟不会让成绩下降，却让每一天都有了呼吸的缝隙。掌声雷动时别忘了留只耳朵听花开——因为那些安静的美好，才是生活本来的模样。',
          fullTextEn: '　　Ninth grade was a bullet train — dawn to dusk, no seconds to step off and see the view.\n\n　　Up at 6:30, home at 9:30. Classroom, cafeteria, dorm — three stops. Eyes saw only test scores; ears heard only lectures and alarms. Trees on campus turned green then yellow — I never noticed.\n\n　　One afternoon after second period: sudden downpour. Trapped in the corridor. Classmates complained or scrolled phones. I leaned on the railing, irritated, reviewing next period\'s material.\n\n　　Rain stopped. Air held an indescribable sweetness. Glancing down: in the flowerbed beside the corridor, a white gardenia blooming after rain. Petals bearing water drops, catching sunset light.\n\n　　I crouched close. Silence. But in those few seconds of quiet, I seemed to hear something — petals unfurling, dewdrops sliding, earth breathing. Perhaps only imagination. But the world suddenly slowed.\n\n　　Looking around: willows by the playground sprouting new buds, peach trees behind the building laden with pink blossoms, roses burning red. All these had always been there — I\'d just never stopped to see.\n\n　　That night\'s diary entry: "Ninth grade is busy, but not too busy to look up."\n\n　　After that, a small rule: at least five minutes daily, put down the books and listen — wind through the corridor, birds under eaves, rain tapping windowpanes.\n\n　　Those five minutes don\'t lower grades but give each day breathing room. When applause thunders, leave an ear for flowers blooming — that quiet beauty is life\'s true form.',
          highlights: [
            { text: '初三的日子像一列高速列车', textEn: 'Ninth grade was a bullet train', why: '比喻精准', whyEn: 'Precise metaphor' },
            { text: '我仿佛听到了花瓣舒展的声音', textEn: 'I seemed to hear petals unfurling', why: '通感优美', whyEn: 'Beautiful synesthesia' },
            { text: '不能忙到忘了抬头', textEn: 'Too busy is no excuse to forget looking up', why: '朴素有力', whyEn: 'Simple yet powerful' }
          ],
          sections: [
            { type: '起', fn: '忙碌', fnEn: 'Busyness', detail: '三点一线', detailEn: 'Three-point routine' },
            { type: '承', fn: '忽视', fnEn: 'Ignoring', detail: '错过春天', detailEn: 'Missing spring' },
            { type: '转', fn: '驻足', fnEn: 'Pausing', detail: '雨后栀子花', detailEn: 'Post-rain gardenia' },
            { type: '合', fn: '领悟', fnEn: 'Insight', detail: '留耳听美好', detailEn: 'Leave an ear for beauty' }
          ]
        },
        {
          title: '留只耳朵听妈妈的唠叨', titleEn: 'Leave an Ear for Mom\'s Nagging',
          score: 37, maxScore: 40, structure: 'diJinShi',
          techniques: ['yuYanMiaoXie', 'duiBi', 'xiJieMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '多穿点，别冻着。""作业写完了吗？""少看手机，伤眼睛。""吃饭别那么快', technique: '排比语言描写', techniqueEn: 'Parallel Dialog', effect: '四句连发还原唠叨的密度和节奏', effectEn: 'Four rapid-fire lines reproduce nagging\'s density and rhythm' },
            { para: 0, text: '妈妈的唠叨像背景音乐，从早到晚循环播放', technique: '比喻', techniqueEn: 'Metaphor', effect: '背景音乐的意象写出唠叨的无处不在', effectEn: 'Background-music image captures nagging\'s omnipresence' },
            { para: 1, text: '她站在门口至少说三遍"路上小心"', technique: '细节描写', techniqueEn: 'Specific Detail', effect: '数字量化使唠叨的重复感具体可感', effectEn: 'Quantifying repetitions makes the nagging tangible' },
            { para: 2, text: '妈你能不能别说了！我又不是三岁小孩', technique: '语言描写', techniqueEn: 'Dialog', effect: '叛逆期的典型对话真实而扎心', effectEn: 'Quintessential rebellious-age outburst — authentic and stinging' },
            { para: 2, text: '过不了十分钟，又端着一杯牛奶进来', technique: '细节对比', techniqueEn: 'Detail as Contrast', effect: '被怼后的沉默与牛奶的温柔形成无声的爱', effectEn: 'Silence after being snapped at, then milk — wordless love' },
            { para: 3, text: '我戴上耳机，假装没听见', technique: '动作描写', techniqueEn: 'Action Detail', effect: '一个动作写尽对母亲的逃避', effectEn: 'One gesture embodies complete evasion of a mother\'s care' },
            { para: 4, text: '没人叫我起床，没人催我喝水，没人问我冷不冷', technique: '排比', techniqueEn: 'Parallelism', effect: '三个"没人"反写思念，安静变成了空洞', effectEn: 'Three absences rewrite silence as emptiness — missing what was resented' },
            { para: 5, text: '瘦了！食堂饭菜不好吧？', technique: '语言描写', techniqueEn: 'Dialog', effect: '一句话浓缩一周的牵挂', effectEn: 'One sentence distills a week\'s worth of worry' },
            { para: 6, text: '汤很暖。她的话也很暖', technique: '双关', techniqueEn: 'Double Meaning', effect: '汤的温度与话语的温度合一，简洁有力', effectEn: 'Soup\'s warmth and words\' warmth merge — spare yet powerful' },
            { para: 6, text: '唠叨不是噪音，是她唯一会说的情话', technique: '反转点题', techniqueEn: 'Reversal & Theme', effect: '颠覆全篇前半的烦躁，一句话完成认知翻转', effectEn: 'Overturns the entire first half\'s irritation — one line achieves cognitive reversal' }
          ],
          approach: '从嫌妈妈唠叨到理解唠叨背后的爱。',
          approachEn: 'From annoyed by nagging to understanding the love behind it.',
          architecture: '嫌烦→离家住校→想念唠叨→理解母爱。',
          architectureEn: 'Annoyed → boarding school → missing the nagging → understanding mother\'s love.',
          logic: '距离产生理解。', logicEn: 'Distance breeds understanding.',
          skills: ['唠叨语言真实', '对比反差强', '结尾回扣'],
          skillsEn: ['Authentic nagging dialogue', 'Strong contrast', 'Closing callback'],
          fullText: '　　"多穿点，别冻着。""作业写完了吗？""少看手机，伤眼睛。""吃饭别那么快，对胃不好。"\n\n　　妈妈的唠叨像背景音乐，从早到晚循环播放。我烦透了。\n\n　　每天早上出门，她站在门口至少说三遍"路上小心"。每天晚上做作业，她端着水果进来至少五次，每次都要说一句"别熬太晚"。周末好不容易想睡个懒觉，七点准时叫醒："太阳都晒屁股了。"\n\n　　我跟她吵过好多次。"妈你能不能别说了！我又不是三岁小孩！"她愣一下，然后默默走开。过不了十分钟，又端着一杯牛奶进来："喝了吧，补补钙。"\n\n　　初三要住校了。离家那天，妈妈帮我整理行李，嘴里一刻不停："记得按时吃饭……被子要经常晒……跟同学好好相处……"我戴上耳机，假装没听见。\n\n　　住校第一周，世界安静得有些不习惯。没人叫我起床，没人催我喝水，没人问我冷不冷。早上自己醒来，穿什么衣服全靠猜。晚上做作业到十一点，没人来说"别熬太晚"。\n\n　　奇怪的是，我开始想念那些唠叨了。\n\n　　周五回家，打开门的瞬间妈妈迎上来："瘦了！食堂饭菜不好吧？来来来，我炖了排骨汤。"\n\n　　我没有像以前那样说"又来了"。我放下书包，坐到餐桌前，一边喝汤一边听她说："你走这周我在家都没习惯，做饭都不知道做几个人的份……"\n\n　　汤很暖。她的话也很暖。\n\n　　原来唠叨不是噪音，是她唯一会说的情话。留只耳朵听妈妈的唠叨吧——等你真的听不到了，才知道那是世界上最珍贵的声音。',
          fullTextEn: '　　"Wear more, don\'t catch cold." "Homework done?" "Less phone, bad for eyes." "Don\'t eat so fast, bad for stomach."\n\n　　Mom\'s nagging like background music, looping dawn to dusk. I was sick of it.\n\n　　Every morning at the door: "Be careful" at least three times. Every homework session: fruit delivered five times minimum, each with "don\'t stay up late." Weekend sleep-in? 7 AM sharp: "The sun\'s baking your behind."\n\n　　I argued many times. "Mom, can you just STOP? I\'m not three." She\'d freeze, then quietly leave. Ten minutes later: a glass of milk. "Drink up. Calcium."\n\n　　Ninth grade: boarding school. Packing day, her mouth running nonstop: "Remember to eat on time... air out the blankets... get along with classmates..." I put on headphones, pretending not to hear.\n\n　　First boarding week: eerily quiet. Nobody waking me, nobody reminding me to drink water, nobody asking if I was cold. Mornings: what to wear was pure guessing. Homework until eleven: nobody saying "don\'t stay up."\n\n　　Strangely, I started missing the nagging.\n\n　　Friday homecoming: opening the door, Mom rushed over: "You\'ve lost weight! Cafeteria food bad? Come, I made pork rib soup."\n\n　　I didn\'t say "here we go again." I put down my bag, sat at the table, and sipped soup while she talked: "This week without you I didn\'t know how many portions to cook..."\n\n　　The soup was warm. So were her words.\n\n　　Nagging isn\'t noise — it\'s the only love language she knows. Leave an ear for Mom\'s nagging — when you truly can\'t hear it anymore, you\'ll know it was the most precious sound in the world.',
          highlights: [
            { text: '妈妈的唠叨像背景音乐', textEn: 'Mom\'s nagging like background music', why: '比喻贴切', whyEn: 'Apt metaphor' },
            { text: '唠叨不是噪音，是她唯一会说的情话', textEn: 'Nagging isn\'t noise — it\'s the only love language she knows', why: '反转深刻', whyEn: 'Profound reversal' },
            { text: '世界安静得有些不习惯', textEn: 'The world was eerily quiet — uncomfortably so', why: '反写思念', whyEn: 'Silence as longing' }
          ],
          sections: [
            { type: '起', fn: '嫌烦', fnEn: 'Annoyed', detail: '唠叨不断', detailEn: 'Endless nagging' },
            { type: '承', fn: '离家', fnEn: 'Leaving', detail: '住校', detailEn: 'Boarding school' },
            { type: '转', fn: '想念', fnEn: 'Missing', detail: '安静不习惯', detailEn: 'Unaccustomed silence' },
            { type: '合', fn: '理解', fnEn: 'Understanding', detail: '唠叨是爱', detailEn: 'Nagging is love' }
          ]
        },
        {
          title: '留只耳朵听自己的心', titleEn: 'Leave an Ear for Your Own Heart',
          score: 37, maxScore: 40, structure: 'zongFenZong',
          techniques: ['xinLiMiaoXie', 'duiBi', 'biYu'],
          techniqueMarks: [
            { para: 0, text: '每个人都在告诉你应该怎么做，却很少有人问你想怎么做', technique: '对比', techniqueEn: 'Contrast', effect: '一句话点出全文矛盾核心：外界嘈杂vs内心沉默', effectEn: 'One sentence pins the essay\'s core conflict: external clamor versus inner silence' },
            { para: 1, text: '学了一年，练琴像坐牢', technique: '比喻', techniqueEn: 'Metaphor', effect: '将被动学习的压迫感浓缩为一个画面', effectEn: 'Compresses the oppression of forced learning into a single image' },
            { para: 2, text: '觉得自己像一台被人操控的机器', technique: '比喻', techniqueEn: 'Metaphor', effect: '从钢琴到补习班，机器意象将失控感升级', effectEn: 'From piano to tutoring — the machine image escalates the sense of lost autonomy' },
            { para: 3, text: '没有补习班，没有作业催促，没有手机消息', technique: '排比', techniqueEn: 'Parallelism', effect: '三个"没有"营造出久违的寂静空间', effectEn: 'Three absences carve out a long-forgotten space of stillness' },
            { para: 3, text: '什么也不做，只是看云', technique: '留白', techniqueEn: 'Narrative Pause', effect: '极简动作写出内心松绑的瞬间', effectEn: 'Minimal action captures the exact moment the mind unshackles' },
            { para: 4, text: '我到底喜欢什么？', technique: '心理独白', techniqueEn: 'Interior Monologue', effect: '全篇最关键的自问，转折由此开始', effectEn: 'The essay\'s pivotal self-question — the turning point begins here' },
            { para: 5, text: '不是别人觉得我应该喜欢什么，不是现在流行什么', technique: '排除式心理', techniqueEn: 'Eliminative Reflection', effect: '逐层剥离外界干扰，逼近真实自我', effectEn: 'Peeling away external noise layer by layer to approach the authentic self' },
            { para: 5, text: '答案清晰得吓了我一跳', technique: '心理描写', techniqueEn: 'Psychological Surprise', effect: '被压抑的真实破土而出的惊喜与震撼', effectEn: 'Suppressed truth breaking through the surface — surprise and shock' },
            { para: 6, text: '拿起画笔的那一刻，我听到了一个声音，很小，但很清晰', technique: '通感', techniqueEn: 'Synesthesia', effect: '将内心渴望转化为听觉体验，呼应标题', effectEn: 'Inner desire transformed into auditory experience, echoing the title' },
            { para: 6, text: '它说：终于', technique: '短句点睛', techniqueEn: 'Epiphanic Fragment', effect: '两字千钧，压抑后释放的力量全在这一个词', effectEn: 'Two words bearing immense weight — all the force of release after suppression' }
          ],
          approach: '被外界声音裹挟，迷失了方向，最终学会倾听内心。',
          approachEn: 'Overwhelmed by external voices, losing direction, finally learning to listen inward.',
          architecture: '总：世界太吵；分：随大流选了不喜欢的兴趣班→补课填满周末→一次放空找到真实想法；总：最该听的是自己的心。',
          architectureEn: 'Overview: World too noisy. Detail: Following crowd to unwanted classes → weekends packed → one moment of emptiness reveals true desires. Summary: The voice most worth hearing is your own.',
          logic: '从迷失到找到自己。', logicEn: 'From lost to self-discovery.',
          skills: ['心理描写细腻', '层次分明', '结尾有哲思'],
          skillsEn: ['Delicate psychology', 'Clear layers', 'Philosophical ending'],
          fullText: '　　这个世界太吵了。每个人都在告诉你应该怎么做，却很少有人问你想怎么做。\n\n　　小学五年级，班里流行学钢琴。妈妈问我要不要学，我说不想。可看到同学们一个个去琴行，我也跟着报了名。学了一年，练琴像坐牢，考了四级就再也不碰了。\n\n　　初一，大家都在上补习班。数学、英语、物理，周末排得满满当当。我不想上，可爸爸说"别人都上了你不上就落后了"。于是我也上了。坐在补习班教室里，盯着窗外的蓝天发呆，觉得自己像一台被人操控的机器。\n\n　　初二暑假的一个下午，家里难得安静。没有补习班，没有作业催促，没有手机消息。我躺在阳台的躺椅上，什么也不做，只是看云。\n\n　　云很慢，很安静。看着看着，脑子里忽然跳出一个念头：我到底喜欢什么？\n\n　　我闭上眼想了很久。不是别人觉得我应该喜欢什么，不是现在流行什么，而是——我自己真正想做的是什么。\n\n　　画画。答案清晰得吓了我一跳。我从小喜欢画画，课本上到处是我的涂鸦。可从来没有人问过我要不要学，包括我自己。\n\n　　那个暑假，我跟爸妈说想学画画。他们犹豫了——"画画能考上好学校吗？"但最终还是答应了。\n\n　　拿起画笔的那一刻，我听到了一个声音，很小，但很清晰——那是心里一直被淹没的声音，它说：终于。\n\n　　后来我常想，如果那个下午我没有安静下来，也许永远听不到自己的心。留只耳朵听自己吧。在众声喧哗中，你的心声才是最值得倾听的声音。',
          fullTextEn: '　　This world is too loud. Everyone tells you what to do; few ask what you want.\n\n　　Fifth grade: piano was trending. Mom asked; I said no. But watching classmates filing into music schools, I signed up too. A year later, practicing felt like prison. Passed level four, never touched it again.\n\n　　Seventh grade: everyone in tutoring. Math, English, physics — weekends packed. I didn\'t want to go, but Dad said "everyone else does, you\'ll fall behind." So I went. Sitting in tutoring, staring at blue sky through windows, feeling like a remote-controlled machine.\n\n　　One rare quiet afternoon, eighth-grade summer. No tutoring, no homework pressure, no phone notifications. I lay on the balcony lounger, doing nothing, just watching clouds.\n\n　　Clouds move slowly, quietly. Watching them, a thought surfaced: what do I actually like?\n\n　　Eyes closed, thinking for a long time. Not what others think I should like. Not what\'s trending. What I truly want to do.\n\n　　Drawing. The answer was so clear it startled me. I\'d always loved drawing — textbooks covered in my doodles. But nobody ever asked if I wanted to learn, including myself.\n\n　　That summer, I told my parents. They hesitated — "Can drawing get you into a good school?" But agreed.\n\n　　Picking up the brush: I heard a voice, small but clear — the voice always drowned out inside me, saying: finally.\n\n　　I often think: if I hadn\'t gone quiet that afternoon, I might never have heard my own heart. Leave an ear for yourself. Amid the world\'s clamor, your heart\'s voice is the one most worth hearing.',
          highlights: [
            { text: '觉得自己像一台被人操控的机器', textEn: 'I felt like a remote-controlled machine', why: '比喻写出被动', whyEn: 'Metaphor captures passivity' },
            { text: '答案清晰得吓了我一跳', textEn: 'The answer was so clear it startled me', why: '写出被压抑的真实', whyEn: 'Suppressed truth surfacing' },
            { text: '它说：终于', textEn: 'It said: finally', why: '两字千钧', whyEn: 'Two words, immense weight' }
          ],
          sections: [
            { type: '总起', fn: '嘈杂', fnEn: 'Noise', detail: '世界太吵', detailEn: 'World too loud' },
            { type: '分述一', fn: '随大流', fnEn: 'Following crowd', detail: '学钢琴', detailEn: 'Piano' },
            { type: '分述二', fn: '被安排', fnEn: 'Arranged', detail: '补习班', detailEn: 'Tutoring' },
            { type: '转', fn: '安静', fnEn: 'Quiet', detail: '看云思考', detailEn: 'Cloud-watching reflection' },
            { type: '总结', fn: '倾听', fnEn: 'Listening', detail: '心声最值得', detailEn: 'Heart most worth hearing' }
          ]
        },
        {
          title: '留只耳朵听雨', titleEn: 'Leave an Ear to Listen to Rain',
          score: 36, maxScore: 40, structure: 'pianDuanZuHe',
          techniques: ['tongGan', 'huanJingChenTuo', 'pianDuanZuHe'],
          techniqueMarks: [
            { para: 0, text: '不同的雨，说不同的话', technique: '拟人总领', techniqueEn: 'Personification as Thesis', effect: '赋予雨以言语能力，统领全篇三段结构', effectEn: 'Granting rain the power of speech anchors the entire three-part structure' },
            { para: 1, text: '雨点像拳头一样砸在窗户上', technique: '比喻通感', techniqueEn: 'Metaphor-Synesthesia', effect: '视听触三觉融合，暴雨的力量可感可触', effectEn: 'Sight, sound, and touch fuse — the storm\'s violence becomes tangible' },
            { para: 1, text: '暴雨在屋顶上敲鼓，急促，焦躁', technique: '环境衬托', techniqueEn: 'Pathetic Fallacy', effect: '雨声节奏外化内心焦虑', effectEn: 'The storm\'s rhythm externalizes inner anxiety' },
            { para: 1, text: '暴雨过后，还有晴天', technique: '象征', techniqueEn: 'Symbolic Turn', effect: '雨后天晴隐喻困境终将过去', effectEn: 'Clearing skies after storm — adversity is not permanent' },
            { para: 2, text: '细雨落在脸上，凉丝丝的，像在替我流眼泪', technique: '通感拟人', techniqueEn: 'Synesthetic Personification', effect: '雨滴化身代哭的知己', effectEn: 'Raindrops become a confidante weeping on your behalf' },
            { para: 2, text: '沙沙沙，像有人在耳边低语："没事的，会好的。"', technique: '拟声拟人', techniqueEn: 'Onomatopoeia & Personification', effect: '雨声转化为安慰的低语，听觉温暖可感', effectEn: 'Rain murmur becomes comforting whisper — warmth made audible' },
            { para: 2, text: '细雨像一双温柔的手，抚平了心上的褶皱', technique: '比喻通感', techniqueEn: 'Metaphor-Synesthesia', effect: '触觉意象写情感修复，诗意盎然', effectEn: 'Tactile imagery for emotional healing — pure poetry' },
            { para: 3, text: '相视一笑，冲进了雨里', technique: '动作描写', techniqueEn: 'Action Detail', effect: '短促的动作写出冲破束缚的畅快', effectEn: 'Staccato action captures the thrill of breaking free' },
            { para: 3, text: '雨声在耳边轰鸣，可我觉得那是世界上最好听的音乐', technique: '对比', techniqueEn: 'Contrast', effect: '轰鸣与最美音乐的反转写出释然的狂喜', effectEn: 'Roaring storm recast as the world\'s loveliest music — joy of release' },
            { para: 4, text: '每一场雨都在讲故事。留只耳朵听雨吧——它知道你需要什么样的声音', technique: '点题拟人', techniqueEn: 'Thematic Personification', effect: '赋予雨以全知的关怀，回扣标题升华主旨', effectEn: 'Rain granted omniscient tenderness, circling back to the title and elevating the theme' }
          ],
          approach: '三种雨声对应三种心境：考前焦虑的急雨、失落时的细雨、释然后的晴后骤雨。',
          approachEn: 'Three rain sounds matching three moods: anxious downpour, melancholic drizzle, cathartic storm.',
          architecture: '片段一：考前暴雨=焦躁；片段二：失落时细雨=安慰；片段三：和好后骤雨=畅快。尾声：雨声是生活的配乐。',
          architectureEn: 'Scene 1: Pre-exam storm = anxiety. Scene 2: Drizzle = comfort. Scene 3: Post-reconciliation shower = joy. Epilogue: Rain as life\'s soundtrack.',
          logic: '雨声映射心境。', logicEn: 'Rain mirrors mood.',
          skills: ['通感丰富', '三段结构', '环境衬托人心'],
          skillsEn: ['Rich synesthesia', 'Three-section structure', 'Setting mirrors heart'],
          fullText: '　　我喜欢听雨。不同的雨，说不同的话。\n\n　　（急雨）\n　　中考前一个月的那场暴雨，来得又急又猛。雨点像拳头一样砸在窗户上，噼里啪啦地响。教室里大家都在刷题，笔尖和雨声交织在一起。\n\n　　我写着写着，笔停了。心里像那场雨一样乱——成绩忽上忽下，模拟考又退步了。闭上眼，只听雨声。暴雨在屋顶上敲鼓，急促，焦躁，像我心里那些说不出口的不安。\n\n　　可雨终会停。二十分钟后，太阳从云缝里挤出来，操场上升腾起白色的水汽。我深吸一口气：暴雨过后，还有晴天。\n\n　　（细雨）\n　　和好朋友闹翻的那个傍晚，下着绵绵细雨。我一个人走在回家的路上，没打伞。细雨落在脸上，凉丝丝的，像在替我流眼泪。\n\n　　路灯亮了，雨丝在灯光下闪着银色的光。雨声很轻，沙沙沙，像有人在耳边低语："没事的，会好的。"我不知道这是雨在说，还是自己在安慰自己。\n\n　　但走到家门口时，心确实没那么疼了。细雨像一双温柔的手，抚平了心上的褶皱。\n\n　　（骤雨）\n　　那天和朋友和好了。放学时天突然黑了，一阵骤雨倾盆而下。我们没有跑，站在屋檐下看雨，然后相视一笑，冲进了雨里。\n\n　　雨水浇在头上，凉得畅快。我们在雨中大笑，踩着水坑奔跑。雨声在耳边轰鸣，可我觉得那是世界上最好听的音乐。\n\n　　衣服湿透了，鞋子灌满了水，可心里痛快极了。\n\n　　每一场雨都在讲故事。留只耳朵听雨吧——它知道你需要什么样的声音。',
          fullTextEn: '　　I love listening to rain. Different rains say different things.\n\n　　(Downpour)\n　　A month before zhongkao: a sudden violent storm. Raindrops like fists hammering windows. Classroom: everyone grinding problems, pen scratches weaving with rain noise.\n\n　　Writing, I stopped. Heart as chaotic as the storm — grades fluctuating, mock exam scores dropping. Eyes closed, just rain sounds. Storm drumming the roof: urgent, restless, like the unspoken anxiety inside me.\n\n　　But rain always stops. Twenty minutes later, sun squeezed through clouds, steam rising from the playground. Deep breath: after storms, there\'s sunshine.\n\n　　(Drizzle)\n　　The evening I fought with my best friend: fine, continuous rain. Walking home alone, no umbrella. Drizzle on my face — cool, like tears shed for me.\n\n　　Streetlights on, rain threads silver in the light. Sound: soft shushing, like someone whispering: "It\'s okay. It\'ll be fine." I don\'t know if rain said it or I told myself.\n\n　　But reaching my door, the ache had eased. Drizzle like gentle hands, smoothing heart\'s wrinkles.\n\n　　(Sudden shower)\n　　The day we made up. After school, sky suddenly dark, rain cascading. We didn\'t run — stood under eaves watching, exchanged a smile, then charged into the rain.\n\n　　Water pouring over our heads — refreshingly cool. We laughed in the rain, splashing through puddles. Rain roaring in our ears — yet it was the world\'s most beautiful music.\n\n　　Soaked through, shoes filled with water, but hearts felt incredible.\n\n　　Every rain tells a story. Leave an ear for rain — it knows what sound you need.',
          highlights: [
            { text: '雨点像拳头一样砸在窗户上', textEn: 'Raindrops hammered the windows like fists', why: '拟人写出急躁', whyEn: 'Personification captures urgency' },
            { text: '细雨像一双温柔的手', textEn: 'Drizzle like a pair of gentle hands', why: '比喻温暖', whyEn: 'Warm metaphor' },
            { text: '它知道你需要什么样的声音', textEn: 'It knows what sound you need', why: '拟人升华', whyEn: 'Personification elevates theme' }
          ],
          sections: [
            { type: '片段一', fn: '急雨', fnEn: 'Downpour', detail: '考前焦虑', detailEn: 'Pre-exam anxiety' },
            { type: '片段二', fn: '细雨', fnEn: 'Drizzle', detail: '失落安慰', detailEn: 'Comfort in loss' },
            { type: '片段三', fn: '骤雨', fnEn: 'Shower', detail: '和好畅快', detailEn: 'Reconciliation joy' },
            { type: '尾声', fn: '总结', fnEn: 'Summary', detail: '雨知道你需要', detailEn: 'Rain knows your need' }
          ]
        },
        {
          title: '留只耳朵听朋友的建议', titleEn: 'Leave an Ear for a Friend\'s Advice',
          score: 36, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['yuYanMiaoXie', 'xinLiMiaoXie', 'duiBi'],
          techniqueMarks: [
            { para: 0, text: '别抄了，真的会被发现的', technique: '语言描写', techniqueEn: 'Dialog', effect: '开篇对话直入冲突，紧张感扑面而来', effectEn: 'Opening dialogue plunges straight into conflict, tension immediate' },
            { para: 0, text: '我不以为然地笑了笑', technique: '心理描写', techniqueEn: 'Psychological Detail', effect: '轻蔑态度暗示后续悲剧', effectEn: 'Dismissive attitude foreshadows the coming fall' },
            { para: 1, text: '一开始只是偶尔看看答案，后来变成了整篇抄', technique: '递进', techniqueEn: 'Escalation', effect: '展现堕落的渐进过程，真实可信', effectEn: 'Gradual slide into cheating rendered believably step by step' },
            { para: 1, text: '"就这一次"——可"这一次"已经持续了半个学期', technique: '反讽', techniqueEn: 'Irony', effect: '引号中的自欺与事实的对比一针见血', effectEn: 'Quoted self-deception versus fact — devastatingly precise' },
            { para: 2, text: '考试我会自己做的', technique: '对比铺垫', techniqueEn: 'Ironic Setup', effect: '满不在乎的承诺与考场上的无助形成致命反差', effectEn: 'Careless promise sets up devastating contrast with exam-day helplessness' },
            { para: 3, text: '试卷上的题似曾相识，但就是不会做', technique: '对比', techniqueEn: 'Contrast', effect: '似曾相识却无能为力——抄袭代价具象化', effectEn: 'Familiar yet unsolvable — the cost of copying made visceral' },
            { para: 3, text: '连错别字都一样', technique: '细节描写', techniqueEn: 'Telling Detail', effect: '一个细节让东窗事发不可辩驳', effectEn: 'A single detail makes the exposure irrefutable' },
            { para: 4, text: '他没有说"我早告诉过你"，只是拍了拍我的肩膀', technique: '留白对比', techniqueEn: 'Restraint & Contrast', effect: '无声的宽容比指责更令人愧疚', effectEn: 'Silent forgiveness cuts deeper than any reproach' },
            { para: 4, text: '不是因为被罚，而是因为后悔', technique: '心理描写', techniqueEn: 'Psychological Distinction', effect: '区分两种痛苦，展现真正的成长', effectEn: 'Distinguishing two kinds of pain reveals genuine growth' },
            { para: 5, text: '最该听的不是掌声，而是那些真心为你好的声音', technique: '点题升华', techniqueEn: 'Thematic Elevation', effect: '回扣标题，将个人经历提升为普遍道理', effectEn: 'Callbacks to the prompt, elevating personal experience into universal truth' }
          ],
          approach: '不听朋友劝告犯了错，事后才懂得倾听的重要。',
          approachEn: 'Ignoring a friend\'s warning leads to a mistake; learning the value of listening.',
          architecture: '起：朋友劝我别抄作业；承：不听继续抄；转：被发现受处分；合：后悔没有听。',
          architectureEn: 'Open: Friend warns against copying. Develop: Ignoring, continuing. Turn: Caught and punished. Close: Regretting not listening.',
          logic: '从自以为是到虚心倾听。', logicEn: 'From arrogance to humility.',
          skills: ['对话推动', '后果写得真实', '反思有深度'],
          skillsEn: ['Dialogue-driven', 'Realistic consequences', 'Deep reflection'],
          fullText: '　　"别抄了，真的会被发现的。"小林压低声音对我说。\n\n　　我不以为然地笑了笑："放心吧，我又不是第一次了。"说着继续把他的数学作业本上的答案誊到自己本子上。\n\n　　那段时间数学太难了，每天的作业我都做不完。一开始只是偶尔看看答案，后来变成了整篇抄。小林每次都劝我自己做，我每次都说"就这一次"——可"这一次"已经持续了半个学期。\n\n　　"你这样下去，考试怎么办？"小林皱着眉头说。\n\n　　"考试我会自己做的。"我满不在乎。心里想的是：作业那么多，谁有空一道道写？抄完早点睡不好吗？\n\n　　可考试那天，坐在考场上，我傻了。试卷上的题似曾相识，但就是不会做——因为那些题我只抄过答案，从没自己算过。七十分的数学，我只做出了不到三十分。\n\n　　更糟的是，老师对比了我的作业和小林的作业，发现连错别字都一样。我被叫到办公室，通报批评，请了家长。\n\n　　走出办公室时，小林在走廊等我。他没有说"我早告诉过你"，只是拍了拍我的肩膀。我鼻子一酸，差点哭出来——不是因为被罚，而是因为后悔。\n\n　　如果我当初听了小林的话，至少不会连题目都不会做。如果我留只耳朵听他的建议，至少不会让他也跟着受牵连。\n\n　　从那以后，每当有人给我建议，我都会先认真听完，不急着反驳。因为我知道了：掌声雷动时，最该听的不是掌声，而是那些真心为你好的声音。',
          fullTextEn: '　　"Stop copying. You\'ll get caught." Xiao Lin whispered.\n\n　　I laughed it off: "Relax, it\'s not my first time." Kept transcribing his math answers into my book.\n\n　　Math had gotten too hard. Every night\'s homework unfinishable. Started by checking answers occasionally; escalated to full copying. Xiao Lin warned every time; I always said "just this once" — a "once" lasting half a semester.\n\n　　"What about exams?" he frowned.\n\n　　"I\'ll do those myself." Carelessly. Thinking: so much homework, who has time? Copy and sleep early, right?\n\n　　Exam day: sitting in the hall, stunned. Questions looked familiar but I couldn\'t solve them — I\'d only ever copied answers, never calculated. Out of 70 points, I managed barely 30.\n\n　　Worse: the teacher compared our homework. Even our typos matched. Office summons, public criticism, parents called in.\n\n　　Leaving the office, Xiao Lin waited in the corridor. He didn\'t say "I told you so." Just patted my shoulder. My nose stung — nearly cried. Not from punishment, but regret.\n\n　　If I\'d listened, I\'d at least know how to solve the problems. If I\'d left an ear for his advice, at least he wouldn\'t have been dragged down too.\n\n　　Since then, when someone offers advice, I listen fully before responding. Because I learned: when applause thunders, what you most need to hear isn\'t applause — it\'s the voices that truly care about you.',
          highlights: [
            { text: '就这一次', textEn: '"Just this once" — the lie we tell ourselves to make wrong feel temporary', why: '自欺欺人写得真实', whyEn: 'Authentic self-deception' },
            { text: '他没有说"我早告诉过你"', textEn: 'He didn\'t say "I told you so"', why: '真朋友的克制', whyEn: 'True friend\'s restraint' },
            { text: '最该听的不是掌声', textEn: 'What most deserves your attention isn\'t applause', why: '回扣题目点睛', whyEn: 'Callback to prompt, finishing touch' }
          ],
          sections: [
            { type: '起', fn: '忽视', fnEn: 'Ignoring', detail: '不听劝告', detailEn: 'Ignoring advice' },
            { type: '承', fn: '侥幸', fnEn: 'Complacency', detail: '继续抄作业', detailEn: 'Continuing to copy' },
            { type: '转', fn: '后果', fnEn: 'Consequence', detail: '被发现受罚', detailEn: 'Caught and punished' },
            { type: '合', fn: '反思', fnEn: 'Reflection', detail: '学会倾听', detailEn: 'Learning to listen' }
          ]
        }
      ]
    },
    {
      id: 'yn2015_comp1',
      paperId: 'yn2015',
      year: 2015,
      region: '云南省',
      prompt: '请以"语文课上"为题，写一篇文章。不少于600字。',
      promptEn: 'Write on "In Chinese Class." 600+ words.',
      type: 'fullTopic',
      category: '命题作文',
      categoryEn: 'Full Topic Composition',
      wordCount: 600,
      guide: {
        analysis: '命题作文，围绕语文课上发生的事写。可写一节特别的课、一次难忘的经历、课堂上的成长或触动。',
        analysisEn: 'Write about events in Chinese class. A special lesson, a memorable experience, classroom growth or touching moments.',
        keyPoints: ['选材要独特', '课堂细节生动', '有情感温度', '不要写成流水账'],
        keyPointsEn: ['Unique material', 'Vivid classroom details', 'Emotional warmth', 'Avoid flat diary style'],
        pitfalls: ['泛泛而谈', '只写上课过程', '缺少中心事件'],
        pitfallsEn: ['Too general', 'Only describing class process', 'No central event']
      },
      essays: [
        {
          title: '语文课上的泪水', titleEn: 'Tears in Chinese Class',
          score: 38, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['xiJieMiaoXie', 'huanJingChenTuo', 'xinLiMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '整个初中最安静的四十五分钟', technique: '反常定义', techniqueEn: 'Paradoxical Definition', effect: '最安静=最触动——用安静的程度衡量感动的深度', effectEn: 'The quietest class as the most moving — measuring emotional depth by the degree of silence' },
            { para: 1, text: '今天我给大家读一遍课文。你们什么也不用做，只用听', technique: '教师颠覆', techniqueEn: 'Teacher\'s Subversion', effect: '不分析不讲解只读——打破所有课堂惯例', effectEn: 'No analysis, no explanation, just reading — breaking every classroom convention at once' },
            { para: 2, text: '有几个同学还在偷偷传纸条', technique: '常态铺垫', techniqueEn: 'Normalcy Setup', effect: '传纸条=日常——用普通开头反衬后续的巨大转变', effectEn: 'Note-passing as business-as-usual — the ordinary setup amplifying the extraordinary transformation to come' },
            { para: 4, text: '他肥胖的身子向左微倾，显出努力的样子', technique: '经典引用', techniqueEn: 'Classic Citation', effect: '原文直接嵌入——朱自清的文字在这篇作文里再次发挥力量', effectEn: 'The original text embedded directly — Zhu Ziqing\'s words exerting their power once more inside this essay' },
            { para: 4, text: '王老师的声音微微颤抖', technique: '教师情感', techniqueEn: 'Teacher\'s Emotion', effect: '老师的颤抖=真情——教育者先被文本打动了', effectEn: 'The teacher\'s trembling voice — the educator moved first, proving the text\'s power is not performance but genuine' },
            { para: 5, text: '像传染一样，一个接一个，教室里响起了抽泣声', technique: '情感传染', techniqueEn: 'Emotional Contagion', effect: '泪水从一个人蔓延到全班——集体共鸣的物理呈现', effectEn: 'Tears spreading from one to all — collective resonance made audible in the spreading sobs' },
            { para: 6, text: '下雨天，他把唯一的雨衣让给我，自己淋得透湿', technique: '对照细节', techniqueEn: 'Parallel Detail', effect: '课文中的父亲→自己的父亲——同样的默默付出跨越了文本', effectEn: 'From the father in the text to the narrator\'s own father — the same silent sacrifice bridging literature and life' },
            { para: 7, text: '头发不知什么时候白了几根，腰好像也没以前那么直了', technique: '迟到的观察', techniqueEn: 'Belated Observation', effect: '不知什么时候=一直在发生但从未被注意——《背影》打开了他的眼睛', effectEn: 'White hairs that appeared "somehow" — changes always happening but never noticed until a text opens one\'s eyes' },
            { para: 8, text: '回家看看你们的爸爸妈妈。真的看看', technique: '教师嘱托', techniqueEn: 'Teacher\'s Charge', effect: '"真的看看"=用眼睛和用心的区别——全课最重的作业', effectEn: '"Really look" — the difference between seeing and truly seeing, the heaviest homework ever assigned' },
            { para: 10, text: '爸，谢谢', technique: '极简告白', techniqueEn: 'Minimalist Declaration', effect: '两个字=平时从不说的话——行动比语言更珍贵', effectEn: 'Two words never usually spoken — their rarity making them worth more than any elaborate speech' }
          ],
          approach: '老师朗读朱自清《背影》时全班沉默流泪，联想到自己的父亲。',
          approachEn: 'Teacher reads Zhu Ziqing\'s "Silhouette" aloud; the whole class falls silent and tearful, each thinking of their own father.',
          architecture: '起：平常的语文课；承：老师开始朗读《背影》；转：读到买橘子那段全班哭了；合：回家第一次认真看了爸爸的背影。',
          architectureEn: 'Open: Ordinary class. Develop: Teacher reads "Silhouette." Turn: The orange-buying passage — everyone cries. Close: Going home and truly seeing Dad\'s back.',
          logic: '从文本到生活的共鸣。', logicEn: 'Resonance from text to life.',
          skills: ['课堂氛围营造', '朗读场景感强', '由文及己自然'],
          skillsEn: ['Classroom atmosphere', 'Reading scene immersion', 'Natural text-to-life bridge'],
          fullText: '　　那节语文课，是我整个初中最安静的四十五分钟。\n\n　　那天讲朱自清的《背影》。王老师没有像平时那样先讲生字词，也没有分析写作手法。她说："今天我给大家读一遍课文。你们什么也不用做，只用听。"\n\n　　她清了清嗓子，开始读。声音不大，但每个字都清清楚楚。读到第一段"我与父亲不相见已二年余了"时，教室里有几个同学还在偷偷传纸条。\n\n　　可读到买橘子那段时，教室里渐渐安静了。\n\n　　"他用两手攀着上面，两脚再向上缩；他肥胖的身子向左微倾，显出努力的样子。"王老师的声音微微颤抖。我抬头看她，她的眼眶红了。\n\n　　不知道是谁先哽咽了一声。然后，像传染一样，一个接一个，教室里响起了抽泣声。坐在我旁边的小杰低着头，肩膀在轻轻抖。我也觉得鼻子发酸——我想起了我爸。\n\n　　我爸也是个不善言辞的人。每天骑电动车送我上学，从不说"路上小心"。下雨天，他把唯一的雨衣让给我，自己淋得透湿，到学校只说一句"进去吧"。我从来没觉得这有什么特别，甚至有点嫌他话少。\n\n　　可那天听老师读《背影》，我忽然想起他弯腰锁电动车的背影——头发不知什么时候白了几根，腰好像也没以前那么直了。\n\n　　下课铃响了，王老师合上课本，说了一句话："回家看看你们的爸爸妈妈。真的看看。"\n\n　　那天晚上回家，爸爸照例在门口等我。我第一次认认真真地看了他的脸——眼角多了几道皱纹，鬓角有了白发。他递给我一杯温水："渴了吧？"\n\n　　我接过水，说了句平时从不说的话："爸，谢谢。"\n\n　　他愣了一下，然后笑了。那个笑容，我到现在还记得。',
          fullTextEn: '　　That Chinese class was the quietest forty-five minutes of my entire junior high.\n\n　　The lesson: Zhu Ziqing\'s "Silhouette." Teacher Wang skipped the usual vocabulary and technique analysis. "Today I\'ll read the text aloud. You don\'t need to do anything. Just listen."\n\n　　She cleared her throat and began. Quiet voice, every word clear. At "My father and I have not seen each other for over two years," some students were still passing notes.\n\n　　But reaching the orange-buying passage, the room gradually stilled.\n\n　　"He gripped the edge with both hands, feet scrabbling upward; his heavy body leaned left, showing the strain." Teacher Wang\'s voice trembled slightly. I looked up — her eyes were red.\n\n　　Someone choked first. Then, like contagion, one by one — soft crying filling the classroom. Xiao Jie beside me, head down, shoulders shaking. My nose stung too — I thought of my dad.\n\n　　My dad is also a man of few words. Drives me to school on his electric bike every day, never says "be careful." On rainy days, he gives me the only raincoat, arrives at school soaked, just says "go in." I never thought it was special. Even found his silence annoying.\n\n　　But hearing "Silhouette" that day, I suddenly pictured his back bending to lock the bike — hair somehow gaining white strands, back not as straight as before.\n\n　　Bell rang. Teacher Wang closed the book: "Go home and look at your parents. Really look."\n\n　　That evening, Dad waited at the door as usual. For the first time, I truly looked at his face — new wrinkles at the eyes, gray at the temples. He handed me warm water: "Thirsty?"\n\n　　I took it and said something I never say: "Dad, thank you."\n\n　　He froze a moment, then smiled. That smile — I remember it still.',
          highlights: [
            { text: '最安静的四十五分钟', textEn: 'The quietest forty-five minutes of my entire junior high', why: '反常即高潮', whyEn: 'Abnormal silence signals climax' },
            { text: '像传染一样，一个接一个', textEn: 'Like contagion, one by one', why: '集体情感共鸣', whyEn: 'Collective emotional resonance' },
            { text: '爸，谢谢', textEn: 'Dad, thank you', why: '两字胜千言', whyEn: 'Two words worth a thousand' }
          ],
          sections: [
            { type: '起', fn: '日常', fnEn: 'Daily', detail: '普通语文课', detailEn: 'Ordinary class' },
            { type: '承', fn: '朗读', fnEn: 'Reading', detail: '老师读《背影》', detailEn: 'Teacher reads "Silhouette"' },
            { type: '转', fn: '共鸣', fnEn: 'Resonance', detail: '全班流泪', detailEn: 'Whole class cries' },
            { type: '合', fn: '行动', fnEn: 'Action', detail: '回家说谢谢', detailEn: 'Going home to say thanks' }
          ]
        },
        {
          title: '语文课上的意外', titleEn: 'A Surprise in Chinese Class',
          score: 37, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['yuYanMiaoXie', 'duiBi', 'xiJieMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '我的心还会砰砰跳', technique: '身体记忆', techniqueEn: 'Body Memory', effect: '心跳=记忆的生理残留——时间过了但身体还记得', effectEn: 'Heart still racing at the memory — the body retaining what the mind has processed' },
            { para: 1, text: '分组后就缩在角落，希望其他组员能搞定一切', technique: '逃避心理', techniqueEn: 'Avoidance Psychology', effect: '缩角落+希望别人搞定——内向者的典型防御姿态', effectEn: 'Shrinking into a corner, hoping others handle it — the introvert\'s classic defensive posture' },
            { para: 3, text: '所谓的选择，不过是经验主义的傲慢', technique: '刺激引爆', techniqueEn: 'Provocative Trigger', effect: '对方的"傲慢"一词刺痛了主角——愤怒替代了恐惧', effectEn: '"Arrogance of hindsight" — the opponent\'s word stinging enough to replace fear with anger' },
            { para: 4, text: '不知道哪来的勇气，我突然举手站了起来', technique: '突发勇气', techniqueEn: 'Sudden Courage', effect: '"不知道哪来的"=自己也惊讶——最真实的勇气往往没有来源', effectEn: '"From nowhere" — even the narrator is surprised, proving that real courage often arrives without explanation' },
            { para: 5, text: '你选了故事书而不是说明书，选了有趣的而不是枯燥的', technique: '以子之矛', techniqueEn: 'Turning the Tables', effect: '用对方的论据反驳对方——辩论的最高技巧', effectEn: 'Using the opponent\'s own argument against them — debate at its sharpest' },
            { para: 5, text: '选择不是傲慢，是对有限时间的尊重', technique: '定义反击', techniqueEn: 'Definitional Counter', effect: '直接回应"傲慢"——把贬义词翻转为褒义', effectEn: 'Directly answering "arrogance" by redefining selection as respect — flipping a pejorative into a virtue' },
            { para: 5, text: '一个人一辈子能读的书是有限的', technique: '逻辑基底', techniqueEn: 'Logical Foundation', effect: '有限性=选择的必然性——用最简单的事实支撑最有力的论点', effectEn: 'The finitude of a reading life — the simplest fact supporting the most powerful argument' },
            { para: 6, text: '连对方的同学也在鼓掌', technique: '侧面评价', techniqueEn: 'Indirect Evaluation', effect: '对手鼓掌=最高评价——比裁判宣布更有说服力', effectEn: 'Opponents clapping — a higher verdict than any judge\'s ruling' },
            { para: 7, text: '不只是读别人的文字，还要学会说自己的话', technique: '教师点题', techniqueEn: 'Teacher\'s Theme', effect: '老师用一句话连接了辩论和语文课的本质', effectEn: 'The teacher linking the debate to Chinese class\'s essence in a single sentence' },
            { para: 9, text: '沉默不一定是金', technique: '颠覆俗语', techniqueEn: 'Subverted Proverb', effect: '反用"沉默是金"——打破旧认知建立新态度', effectEn: 'Flipping "silence is golden" — dismantling an old wisdom to build a new one' }
          ],
          approach: '一次课堂辩论中，内向的我意外地站起来发言，获得了全班掌声。',
          approachEn: 'In a class debate, shy me unexpectedly speaks up and wins applause.',
          architecture: '起：辩论课分组；承：我不敢发言；转：被对方观点激怒站起来；合：发现表达的力量。',
          architectureEn: 'Open: Debate groups formed. Develop: Too shy to speak. Turn: Opposing view provokes me to stand. Close: Discovering the power of expression.',
          logic: '从沉默到表达。', logicEn: 'From silence to expression.',
          skills: ['辩论场景紧张', '心理转变真实', '结尾温暖'],
          skillsEn: ['Tense debate scene', 'Authentic mindset shift', 'Warm ending'],
          fullText: '　　语文课上的那次辩论赛，至今想起来，我的心还会砰砰跳。\n\n　　那天的辩题是"读书是否需要选择"。我被分到正方——"读书应当有选择"。可我最怕在课堂上发言，分组后就缩在角落，希望其他组员能搞定一切。\n\n　　辩论开始了。我们正方先说了几个观点，对方反方立刻反驳。来来回回几个回合，正方渐渐落了下风。我们组的主辩手小张被对方问住了，脸涨得通红，说不出话。\n\n　　对方的一个女生站起来说："如果读书要选择，那你们小时候怎么知道该选什么？不都是什么都读，然后才知道自己喜欢什么吗？所谓的选择，不过是经验主义的傲慢。"\n\n　　"经验主义的傲慢"——这个词刺到了我。不知道哪来的勇气，我突然举手站了起来。\n\n　　全班都看着我。我的声音有点抖，但我还是说了："读书当然需要选择。你说小时候什么都读，但其实你已经在选择了——你选了故事书而不是说明书，选了有趣的而不是枯燥的。选择不是傲慢，是对有限时间的尊重。一个人一辈子能读的书是有限的，把时间花在好书上，才不浪费生命。"\n\n　　说完，教室安静了两秒。然后掌声响起来——不只是我们正方，连对方的同学也在鼓掌。\n\n　　老师笑了："说得好！这就是语文课的意义——不只是读别人的文字，还要学会说自己的话。"\n\n　　那天放学，小张追上来说："你今天太厉害了！以后辩论你当主辩吧！"我摆摆手，但心里乐开了花。\n\n　　那堂语文课教会了我：沉默不一定是金，有时候站起来说出自己的想法，比什么都有力量。',
          fullTextEn: '　　That Chinese class debate — even now my heart races remembering it.\n\n　　Topic: "Should reading be selective?" I was assigned the affirmative. But I dreaded speaking in class, so I shrank into a corner hoping teammates would handle it.\n\n　　Debate began. Our side offered points; the opposition shot back. After several rounds, we were losing. Our lead debater Xiao Zhang got stumped, face flushed, speechless.\n\n　　An opposing girl stood: "If reading should be selective, how did you know what to choose as children? You read everything first, then discovered preferences. This so-called \'selection\' is just the arrogance of hindsight."\n\n　　"Arrogance of hindsight" — that stung. From nowhere, courage: I raised my hand and stood.\n\n　　All eyes on me. Voice shaking, but I spoke: "Of course reading requires selection. You say children read everything — but you were already choosing. You picked storybooks over manuals, fun over boring. Selection isn\'t arrogance; it\'s respecting limited time. A person can only read so many books in a lifetime. Spending time on good books means not wasting life."\n\n　　Two seconds of silence. Then applause — not just our side; even opponents clapped.\n\n　　Teacher smiled: "Well said! This is Chinese class\'s purpose — not just reading others\' words, but learning to speak your own."\n\n　　After school, Xiao Zhang caught up: "You were amazing! Be our lead debater next time!" I waved it off, but inside — blooming.\n\n　　That class taught me: silence isn\'t always golden. Sometimes standing up and speaking your mind is the most powerful thing.',
          highlights: [
            { text: '选择不是傲慢，是对有限时间的尊重', textEn: 'Selection isn\'t arrogance — it\'s respecting limited time', why: '论点有力', whyEn: 'Powerful argument' },
            { text: '不只是读别人的文字，还要说自己的话', textEn: 'Not just reading others\' words, but learning to speak your own', why: '点题精妙', whyEn: 'Brilliant theme statement' },
            { text: '连对方的同学也在鼓掌', textEn: 'Even opponents were clapping', why: '侧面写精彩', whyEn: 'Indirect excellence portrayal' }
          ],
          sections: [
            { type: '起', fn: '任务', fnEn: 'Task', detail: '辩论分组', detailEn: 'Debate groups' },
            { type: '承', fn: '被动', fnEn: 'Passive', detail: '缩在角落', detailEn: 'Hiding in corner' },
            { type: '转', fn: '爆发', fnEn: 'Outburst', detail: '站起来反驳', detailEn: 'Standing to rebut' },
            { type: '合', fn: '成长', fnEn: 'Growth', detail: '表达的力量', detailEn: 'Power of expression' }
          ]
        },
        {
          title: '语文课上，我学会了倾听', titleEn: 'In Chinese Class, I Learned to Listen',
          score: 36, maxScore: 40, structure: 'diJinShi',
          techniques: ['xiJieMiaoXie', 'xinLiMiaoXie', 'duiBi'],
          techniqueMarks: [
            { para: 0, text: '语文课曾经是我的午休时间', technique: '自嘲开篇', techniqueEn: 'Self-Deprecating Opening', effect: '午休=睡觉——坦诚的自嘲建立信任感', effectEn: 'Chinese class as nap time — honest self-mockery establishing reader trust from the start' },
            { para: 1, text: '那些"之乎者也"像催眠曲', technique: '比喻抵触', techniqueEn: 'Resistance Metaphor', effect: '古文=催眠曲——对传统文化的真实排斥（后文将反转）', effectEn: 'Classical Chinese as lullaby — genuine aversion to tradition that the essay will overturn' },
            { para: 3, text: '关了灯，拉上窗帘', technique: '教学场景', techniqueEn: 'Teaching Scene', effect: '暗教室+投影=沉浸式教学——打破常规的第一步', effectEn: 'Lights off, curtains drawn — immersive teaching that breaks all conventions as its first step' },
            { para: 5, text: '那你告诉我，它好在哪里', technique: '反问引导', techniqueEn: 'Socratic Question', effect: '所有人都会背但没人能说好在哪——暴露了"知道"和"理解"的差距', effectEn: 'Everyone can recite it but nobody can explain why it\'s good — exposing the gap between knowing and understanding' },
            { para: 7, text: '他没有打电话给家人——那时候没有电话', technique: '时代剥离', techniqueEn: 'Temporal Stripping', effect: '否定电话+手机——把现代人剥离回1200年前的孤独', effectEn: 'No phone, no internet — stripping modern listeners back to the raw solitude of 1200 years ago' },
            { para: 7, text: '他只有月亮', technique: '极简要害', techniqueEn: 'Minimalist Core', effect: '四个字=整首诗的灵魂——老师用最少的话说出最深的意', effectEn: 'Four words — the soul of the entire poem — the teacher saying the deepest thing in the fewest words' },
            { para: 8, text: '有多少次在外面想家，却只能看看天上的月亮', technique: '古今穿越', techniqueEn: 'Ancient-Modern Bridge', effect: '从李白到学生——一个问题把千年前的诗拉进今天的教室', effectEn: 'From Li Bai to the students — one question pulling a thousand-year-old poem into today\'s classroom' },
            { para: 9, text: '坐在我旁边的小王红了眼眶——他爸妈在外地打工', technique: '个体印证', techniqueEn: 'Individual Confirmation', effect: '留守儿童的真实处境=诗的当代回响——文学不是过去式', effectEn: 'A left-behind child\'s reality as the poem\'s contemporary echo — literature is never past tense' },
            { para: 10, text: '古诗不是课本上要背的句子，而是一个人的心事', technique: '认知颠覆', techniqueEn: 'Cognitive Overthrow', effect: '背诵→心事——对古诗的定义从技术层跳到情感层', effectEn: 'From sentences to memorize to someone\'s heartache — redefining poetry from technical to emotional' },
            { para: 11, text: '语文不是文字游戏，是人心和人心的连接', technique: '终极定义', techniqueEn: 'Ultimate Definition', effect: '语文=心的连接——一句话完成了从厌倦到敬畏的转变', effectEn: 'Chinese as hearts connecting — one sentence completing the arc from boredom to reverence' }
          ],
          approach: '从不认真听课到被老师的一堂古诗课打动，学会用心感受语文。',
          approachEn: 'From inattentive to moved by a classical poetry lesson, learning to truly feel language.',
          architecture: '以前：语文课=睡觉课→一次古诗鉴赏课→老师讲李白的月亮→我第一次被古诗感动→开始认真听课。',
          architectureEn: 'Before: Chinese class = nap time → a poetry appreciation lesson → teacher on Li Bai\'s moon → first time moved by classical poetry → starts paying attention.',
          logic: '从无感到有感。', logicEn: 'From indifference to feeling.',
          skills: ['古诗融入自然', '心理变化细腻', '对比有力'],
          skillsEn: ['Natural poetry integration', 'Nuanced psychological change', 'Strong contrast'],
          fullText: '　　说来惭愧，语文课曾经是我的午休时间。\n\n　　不是语文不重要，是我觉得语文课太无聊。老师讲修辞手法，我在下面画小人。老师分析段落大意，我趴在桌上打盹。古文更不用说了，那些"之乎者也"像催眠曲。\n\n　　直到刘老师调来教我们。\n\n　　刘老师上课不按常理出牌。有一天，她走进教室，关了灯，拉上窗帘。教室里暗下来，只剩投影仪的光。她放了一首古琴曲，然后在黑板上写了一行字：\n\n　　"举头望明月，低头思故乡。"\n\n　　"你们觉得这首诗好吗？"她问。\n\n　　"好啊，谁不知道这首诗。"有人笑着回答。\n\n　　"那你告诉我，它好在哪里？"\n\n　　教室沉默了。\n\n　　刘老师轻轻说："李白写这首诗的时候，二十六岁。一个人在外面漂泊，半夜睡不着，看到月光洒在床前。他没有打电话给家人——那时候没有电话。他没有发朋友圈——那时候没有手机。他只有月亮。而这轮月亮，也照着千里之外他的家乡。"\n\n　　她停了一下："想想你们，有多少次在外面想家，却只能看看天上的月亮？"\n\n　　教室里安静得能听到呼吸声。坐在我旁边的小王红了眼眶——他爸妈在外地打工，半年才回来一次。\n\n　　那天我第一次觉得，古诗不是课本上要背的句子，而是一个人的心事。李白想家的心情，和我想爸妈的心情，隔了一千多年，却一模一样。\n\n　　从那以后，语文课上我再也没睡过觉。因为刘老师让我明白了：语文不是文字游戏，是人心和人心的连接。而倾听这种连接，需要用心。',
          fullTextEn: '　　Embarrassingly, Chinese class used to be my nap time.\n\n　　Not that Chinese wasn\'t important — I just found it boring. Teacher explaining rhetoric: I drew stick figures. Analyzing paragraph meanings: I dozed on my desk. Classical Chinese? Those archaic particles were a lullaby.\n\n　　Until Teacher Liu transferred in.\n\n　　She didn\'t play by the rules. One day: lights off, curtains drawn. Dark room, only projector glow. She played a guqin piece, then wrote on the board:\n\n　　"Raise my head to gaze at the bright moon; bow my head and think of my hometown."\n\n　　"Do you think this poem is good?" she asked.\n\n　　"Sure, everyone knows it." Someone laughed.\n\n　　"Then tell me — what makes it good?"\n\n　　Silence.\n\n　　Teacher Liu spoke softly: "When Li Bai wrote this, he was twenty-six. Drifting alone, sleepless at midnight, moonlight spilling on his bed. He couldn\'t call home — no phones. Couldn\'t post online — no internet. He only had the moon. And that same moon shone on his hometown a thousand miles away."\n\n　　A pause: "Think: how many times have you missed home, with nothing to do but look at the moon?"\n\n　　Silence so deep you could hear breathing. Xiao Wang beside me — eyes reddening. His parents work in another city, coming home twice a year.\n\n　　That day I first felt: classical poetry isn\'t lines to memorize, but someone\'s heartache. Li Bai\'s homesickness and my missing my parents — separated by a thousand years, yet identical.\n\n　　After that, I never slept in Chinese class again. Because Teacher Liu showed me: Chinese isn\'t word games — it\'s hearts connecting across time. And hearing that connection requires truly listening.',
          highlights: [
            { text: '他只有月亮', textEn: 'He only had the moon', why: '三字道尽孤独', whyEn: 'Three words capture all loneliness' },
            { text: '隔了一千多年，却一模一样', textEn: 'Separated by a thousand years, yet identical', why: '跨越时空的共鸣', whyEn: 'Cross-millennium resonance' },
            { text: '语文是人心和人心的连接', textEn: 'Chinese is hearts connecting across time', why: '定义精准', whyEn: 'Precise definition' }
          ],
          sections: [
            { type: '起', fn: '旧态', fnEn: 'Old state', detail: '语文课睡觉', detailEn: 'Sleeping in class' },
            { type: '承', fn: '新课', fnEn: 'New lesson', detail: '刘老师讲月亮', detailEn: 'Teacher Liu on the moon' },
            { type: '转', fn: '触动', fnEn: 'Moved', detail: '感受到古诗的心', detailEn: 'Feeling poetry\'s heart' },
            { type: '合', fn: '改变', fnEn: 'Change', detail: '再不睡觉', detailEn: 'Never sleeping again' }
          ]
        },
        {
          title: '语文课上的掌声', titleEn: 'Applause in Chinese Class',
          score: 36, maxScore: 40, structure: 'zongFenZong',
          techniques: ['duiBi', 'xiJieMiaoXie', 'shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '最让我难忘的，是掌声', technique: '聚焦开篇', techniqueEn: 'Focused Opening', effect: '在多种声音中选出掌声——缩小范围增强悬念', effectEn: 'Selecting applause from all classroom sounds — narrowing focus to build anticipation' },
            { para: 1, text: '第一个字卡了三次才说出来', technique: '挣扎细节', techniqueEn: 'Struggle Detail', effect: '三次=具体到让人心疼——数字比形容词更有力', effectEn: 'Stuck three times on the first word — the number more powerful than any adjective of difficulty' },
            { para: 2, text: '教室里有人偷笑。老师轻轻摇了摇头', technique: '微反应对比', techniqueEn: 'Micro-Reaction Contrast', effect: '偷笑vs摇头——两种反应代表两种态度', effectEn: 'Snickers versus the teacher\'s quiet head-shake — two reactions representing two kinds of humanity' },
            { para: 3, text: '掌声不是因为他读得好，而是因为他没有放弃', technique: '重新定义', techniqueEn: 'Redefinition', effect: '掌声≠表扬优秀=鼓励坚持——全新的掌声含义', effectEn: 'Applause redefined — not celebrating excellence but honoring perseverance, a new meaning for clapping' },
            { para: 4, text: '安静得连呼吸声都能听见', technique: '极致安静', techniqueEn: 'Ultimate Silence', effect: '安静=最高评价——比任何赞美词都有说服力', effectEn: 'Silence so deep you hear breathing — a higher compliment than any adjective of praise' },
            { para: 5, text: '她像平时一样上课，讲了最后一篇课文', technique: '日常中的告别', techniqueEn: 'Farewell as Routine', effect: '"像平时一样"=反常的平静——越日常越让人心碎', effectEn: '"As usual" on the last day — the more ordinary the lesson, the more devastating the goodbye' },
            { para: 6, text: '没有人动', technique: '集体凝固', techniqueEn: 'Collective Freeze', effect: '三个字=40个人的不舍——没有人站起来说明没有人接受', effectEn: 'Three words — nobody moved — forty students\' refusal to accept the goodbye made physical' },
            { para: 6, text: '掌声持续了很久很久，久到张老师转过身去，久到前排的女生开始哭', technique: '时间延长', techniqueEn: 'Extended Time', effect: '两个"久到"——掌声的长度=不舍的深度', effectEn: 'Two "so long that" clauses — the applause\'s duration measuring the depth of reluctance to part' },
            { para: 7, text: '那次掌声里没有喜悦，只有感谢和不舍', technique: '掌声解构', techniqueEn: 'Applause Deconstruction', effect: '否定喜悦+肯定感谢和不舍——掌声的第三种温度', effectEn: 'Negating joy, affirming gratitude and reluctance — the third temperature of applause' },
            { para: 8, text: '一种不用文字就能表达的语言——它叫掌声', technique: '破折号揭示', techniqueEn: 'Dash Revelation', effect: '破折号后的答案=全文主题的命名仪式', effectEn: 'The answer after the dash — a naming ceremony for the essay\'s entire thesis: applause as language' }
          ],
          approach: '三次不同的掌声：给差生的鼓励、给好文的赞赏、给离别的老师。',
          approachEn: 'Three different rounds of applause: encouraging a struggling student, appreciating good writing, bidding farewell to a leaving teacher.',
          architecture: '总：语文课上的掌声最特别；分：给结巴同学的掌声（鼓励）→给一篇好作文的掌声（赞赏）→给调走老师的掌声（不舍）；总：掌声是语文课教给我的另一种语言。',
          architectureEn: 'Overview: Chinese class applause is special. Detail: Applause for a stuttering student (encouragement) → for a fine essay (appreciation) → for a departing teacher (farewell). Summary: Applause as another language Chinese class taught me.',
          logic: '掌声的三重含义。', logicEn: 'Three meanings of applause.',
          skills: ['三段对比', '首尾呼应', '感情递进'],
          skillsEn: ['Three-section contrast', 'Echo structure', 'Emotional progression'],
          fullText: '　　语文课上有很多声音——朗读声、讨论声、笑声。但最让我难忘的，是掌声。\n\n　　第一次是给小陈的。小陈说话结巴，每次课堂朗读都紧张得满头大汗。那天老师偏偏点了他的名。他站起来，脸涨得通红，第一个字卡了三次才说出来。\n\n　　教室里有人偷笑。老师轻轻摇了摇头。\n\n　　小陈深吸一口气，重新开始。这一次，虽然还是磕磕绊绊，但他咬着牙把一整段读完了。最后一个字落下时，教室里先是安静了两秒，然后爆发出掌声。那掌声不是因为他读得好，而是因为他没有放弃。\n\n　　第二次是给一篇作文的。期中考后，老师在课上读了一篇满分作文。读到最后一段时，整个教室安静得连呼吸声都能听见。读完，掌声自发响起。那是对好文字的由衷赞赏——原来文字真的可以打动人心。\n\n　　第三次是给老师的。学期末，张老师告诉我们她要调走了。最后一节课，她像平时一样上课，讲了最后一篇课文。下课铃响时，她合上课本，说："同学们，再见。"\n\n　　没有人动。然后不知道谁开始鼓掌，全班都跟着鼓起来。掌声持续了很久很久，久到张老师转过身去，久到前排的女生开始哭。\n\n　　那次掌声里没有喜悦，只有感谢和不舍。\n\n　　三次掌声，三种温度。语文课教给我的不只是修辞和作文，还有一种不用文字就能表达的语言——它叫掌声。',
          fullTextEn: '　　Chinese class has many sounds — reading, discussion, laughter. But the most unforgettable: applause.\n\n　　First time: for Xiao Chen. He stuttered; every reading assignment drenched him in sweat. That day, the teacher called his name. He stood, face crimson, first word stuck three times.\n\n　　Someone snickered. Teacher gently shook her head.\n\n　　Xiao Chen took a deep breath, restarted. Still stumbling, but gritting his teeth through the entire paragraph. Last word fell; two seconds of silence, then applause erupted. Not because he read well — because he didn\'t give up.\n\n　　Second time: for an essay. After midterms, teacher read a perfect-score essay aloud. At the final paragraph, the room was so quiet you could hear breathing. When she finished, applause broke out spontaneously. Heartfelt appreciation for good writing — words truly can move hearts.\n\n　　Third time: for our teacher. Semester end: Teacher Zhang announced her transfer. Last class, she taught as usual, covering the final text. Bell rang; she closed her book: "Students, goodbye."\n\n　　Nobody moved. Then someone started clapping; the whole class followed. Applause lasted long — so long Teacher Zhang turned away, so long front-row girls began crying.\n\n　　That applause held no joy — only gratitude and reluctance to part.\n\n　　Three rounds, three temperatures. Chinese class taught me more than rhetoric and composition — also a language needing no words. It\'s called applause.',
          highlights: [
            { text: '掌声不是因为他读得好，而是因为他没有放弃', textEn: 'The applause wasn\'t because he read well — it was because he didn\'t give up', why: '重新定义掌声', whyEn: 'Redefining applause' },
            { text: '掌声持续了很久很久', textEn: 'The applause lasted so long, so very long', why: '重复表达深情', whyEn: 'Repetition conveys depth' },
            { text: '不用文字就能表达的语言', textEn: 'A language needing no words', why: '升华精妙', whyEn: 'Elegant elevation' }
          ],
          sections: [
            { type: '总起', fn: '引入', fnEn: 'Introduction', detail: '语文课的声音', detailEn: 'Sounds of Chinese class' },
            { type: '掌声一', fn: '鼓励', fnEn: 'Encouragement', detail: '给结巴同学', detailEn: 'For stuttering student' },
            { type: '掌声二', fn: '赞赏', fnEn: 'Appreciation', detail: '给好作文', detailEn: 'For great essay' },
            { type: '掌声三', fn: '不舍', fnEn: 'Farewell', detail: '给离别老师', detailEn: 'For departing teacher' },
            { type: '总结', fn: '升华', fnEn: 'Elevation', detail: '掌声是语言', detailEn: 'Applause as language' }
          ]
        },
        {
          title: '语文课上的一封信', titleEn: 'A Letter in Chinese Class',
          score: 36, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['xiJieMiaoXie', 'xinLiMiaoXie', 'yiXiaoJianDa'],
          techniqueMarks: [
            { para: 0, text: '今天的作业有点特别', technique: '教师引入', techniqueEn: 'Teacher\'s Hook', effect: '"特别"=打破常规——学生和读者同时被吊起好奇心', effectEn: '"Special" breaking routine — students and readers equally hooked by curiosity' },
            { para: 2, text: '三年后的我是什么样子？考上了什么高中？长高了吗？', technique: '连续追问', techniqueEn: 'Serial Questions', effect: '一连串问号=对未来的茫然——12岁的不确定感', effectEn: 'A cascade of question marks — the fog of being twelve and facing an unknowable future' },
            { para: 3, text: '希望你考上好高中，希望你长到一米七五，希望你有很多朋友', technique: '套话揭示', techniqueEn: 'Boilerplate Exposure', effect: '三个"希望"=毫无个性——自己写给自己的话居然也是敷衍的', effectEn: 'Three hollow "hopes" — even a letter to oneself can be perfunctory, exposing the habit of inauthenticity' },
            { para: 4, text: '给自己写信，应该说点真话吧', technique: '自问转折', techniqueEn: 'Self-Question Turn', effect: '一个问句=从敷衍到认真的分水岭', effectEn: 'A single question as the watershed — the moment pretense gives way to honesty' },
            { para: 5, text: '我把那张纸揉掉，重新拿了一张', technique: '物理重启', techniqueEn: 'Physical Reset', effect: '揉纸=否定自己的假面——动作比语言更干脆', effectEn: 'Crumpling the paper — a physical rejection of the mask, more decisive than any words' },
            { para: 6, text: '说实话，我有点害怕长大', technique: '坦白入信', techniqueEn: 'Honest Confession', effect: '"说实话"三个字=打开心扉——信的语气从此不同', effectEn: '"Honestly" — three words opening the heart, the letter\'s tone irrevocably changed' },
            { para: 7, text: '我现在数学不好，但我在努力。我现在不够勇敢，但我在学', technique: '对称承认', techniqueEn: 'Parallel Admission', effect: '两个"不好/不够"+两个"在努力/在学"——缺点与行动同时呈现', effectEn: 'Two shortcomings paired with two efforts — flaws and striving presented side by side with equal honesty' },
            { para: 8, text: '不管三年后你是什么样子，我都会为你骄傲。因为你是我啊', technique: '自我接纳', techniqueEn: 'Self-Acceptance', effect: '无条件的自我肯定——12岁对15岁的提前原谅', effectEn: 'Unconditional self-affirmation — a twelve-year-old pre-emptively forgiving whoever they become' },
            { para: 9, text: '在封口舔了一下粘上', technique: '仪式感细节', techniqueEn: 'Ritual Detail', effect: '舔封口=庄重——一个微小动作赋予信件仪式意义', effectEn: 'Licking the envelope shut — a tiny action investing the letter with ceremony and solemnity' },
            { para: 10, text: '跟自己对话', technique: '主题提炼', techniqueEn: 'Theme Distillation', effect: '四个字=整堂课的收获——语文课教会的不是修辞而是自省', effectEn: 'Four words as the entire lesson\'s harvest — Chinese class teaching not rhetoric but self-reflection' }
          ],
          approach: '老师布置给未来自己写信，写的过程中意外审视了自己。',
          approachEn: 'Teacher assigns letters to future selves; the writing process triggers unexpected self-reflection.',
          architecture: '起：老师布置"给三年后的自己写信"；承：不知道写什么，敷衍几句；转：写着写着认真了起来；合：信封好后的期待。',
          architectureEn: 'Open: Assignment — write to your future self. Develop: Don\'t know what to write, perfunctory. Turn: Writing becomes serious. Close: Sealed letter, full of anticipation.',
          logic: '从敷衍到认真面对自己。', logicEn: 'From perfunctory to genuine self-confrontation.',
          skills: ['书信体自然', '心理刻画真实', '结尾留白'],
          skillsEn: ['Natural letter format', 'Authentic inner portrait', 'Open ending'],
          fullText: '　　"今天的作业有点特别。"语文课上，李老师拿出一沓信纸和信封，"请你们给三年后的自己写一封信。我会替你们保存，毕业那天发给你们。"\n\n　　教室里嗡地一声炸开了锅。给自己写信？写什么呢？\n\n　　我拿起笔，在信纸上写下"亲爱的三年后的我"几个字，然后就卡住了。三年后的我是什么样子？考上了什么高中？长高了吗？还和现在的朋友联系吗？什么都不确定。\n\n　　旁边的同学已经在奋笔疾书了。我胡乱写了几句——"希望你考上好高中，希望你长到一米七五，希望你有很多朋友"——全是套话，像在写新年祝福。\n\n　　写完这些，我停下来看了看信纸。觉得不对。给自己写信，应该说点真话吧？\n\n　　我把那张纸揉掉，重新拿了一张。\n\n　　"亲爱的三年后的我：你好。现在是初一，我刚刚12岁。说实话，我有点害怕长大。害怕考不上好学校，害怕让爸妈失望，害怕跟现在的好朋友渐渐不联系了。可我也有点期待——期待长大后不用被人管，期待可以一个人去旅行，期待变成一个很酷的人。\n\n　　我现在数学不好，但我在努力。我现在不够勇敢，但我在学。如果你看到这封信的时候变成了一个还不错的人，那就谢谢现在的我吧。如果你还有很多遗憾，也没关系——至少你知道，12岁的你曾经很努力地想变好。\n\n　　最后，不管三年后你是什么样子，我都会为你骄傲。因为你是我啊。"\n\n　　写完后，我把信折好装进信封，在封口舔了一下粘上。看着那个薄薄的信封，心里有一种说不出的郑重。\n\n　　那堂语文课，我学到了比课文更重要的东西——跟自己对话。',
          fullTextEn: '　　"Today\'s assignment is special." Teacher Li produced stationery and envelopes. "Write a letter to yourself three years from now. I\'ll keep them and return them on graduation day."\n\n　　Classroom erupted. Write to myself? About what?\n\n　　I wrote "Dear future me" and froze. What will I be like? Which high school? Taller? Still friends with everyone? All uncertain.\n\n　　Classmates were already scribbling. I jotted bland wishes: "Hope you get into a good school, grow to 175cm, have many friends." Boilerplate, like New Year\'s greetings.\n\n　　Pausing, I looked at the paper. Wrong. Writing to yourself should be honest.\n\n　　Crumpled it. Fresh sheet.\n\n　　"Dear future me: Hi. It\'s seventh grade. I\'m 12. Honestly, I\'m a little scared of growing up. Scared of bad schools, disappointing my parents, losing touch with current friends. But I\'m also excited — about independence, solo travel, becoming someone cool.\n\n　　My math is weak, but I\'m trying. I\'m not brave enough, but I\'m learning. If when you read this you\'ve become a decent person, thank present-me. If you still have regrets, that\'s okay — at least you know your 12-year-old self really tried to be better.\n\n　　Finally: no matter what you\'re like in three years, I\'ll be proud. Because you\'re me."\n\n　　Folding the letter, sealing the envelope — licking it shut. Looking at that thin envelope, an indescribable solemnity.\n\n　　That Chinese class taught me something more important than any text: how to talk to yourself.',
          highlights: [
            { text: '给自己写信，应该说点真话吧', textEn: 'Writing to yourself should be honest, right?', why: '转折自然', whyEn: 'Natural turning point' },
            { text: '不管你是什么样子，我都会为你骄傲', textEn: 'No matter what you\'re like, I\'ll be proud — because you\'re me', why: '对自己的温柔', whyEn: 'Self-compassion' },
            { text: '跟自己对话', textEn: 'Talking to yourself', why: '主题升华', whyEn: 'Theme elevation' }
          ],
          sections: [
            { type: '起', fn: '布置', fnEn: 'Assignment', detail: '写信给未来', detailEn: 'Letter to future self' },
            { type: '承', fn: '敷衍', fnEn: 'Perfunctory', detail: '套话', detailEn: 'Boilerplate' },
            { type: '转', fn: '认真', fnEn: 'Serious', detail: '重写真心话', detailEn: 'Rewriting honestly' },
            { type: '合', fn: '感悟', fnEn: 'Insight', detail: '跟自己对话', detailEn: 'Talking to yourself' }
          ]
        }
      ]
    },
    {
      id: 'yn2014_comp1',
      paperId: 'yn2014',
      year: 2014,
      region: '云南省',
      prompt: '请以"如果有一天"为题，写一篇作文。不少于600字。',
      promptEn: 'Write on "If One Day." 600+ words.',
      type: 'fullTopic',
      category: '命题作文',
      categoryEn: 'Full Topic Composition',
      wordCount: 600,
      guide: {
        analysis: '"如果有一天"是假设性命题，可写对未来的想象、对过去的假设、或对某种变化的畅想。关键在于假设之下的真情实感。',
        analysisEn: 'A hypothetical topic. Write about imagined futures, alternative pasts, or envisioned changes. Key: genuine emotion under the hypothesis.',
        keyPoints: ['假设要合理有意义', '虚中有实', '有情感支撑', '结尾回归现实'],
        keyPointsEn: ['Meaningful hypothesis', 'Reality within fiction', 'Emotional support', 'Return to reality at the end'],
        pitfalls: ['纯幻想无真情', '假设太荒诞', '空想不落地'],
        pitfallsEn: ['Fantasy without emotion', 'Absurd hypothesis', 'Ungrounded abstraction']
      },
      essays: [
        {
          title: '如果有一天', titleEn: 'If One Day',
          score: 38, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['xinLiMiaoXie', 'xiJieMiaoXie', 'huanJingChenTuo'],
          techniqueMarks: [
            { para: 0, text: '爸爸不再骑电动车送我上学了', technique: '假设切入', techniqueEn: 'Hypothetical Entry', effect: '日常场景+假设消失——用最熟悉的事件开启最不愿想象的未来', effectEn: 'A daily routine hypothetically erased — the most familiar scene opening the most dreaded future' },
            { para: 1, text: '不是因为我长大了不需要，而是因为他骑不动了', technique: '残酷澄清', techniqueEn: 'Cruel Clarification', effect: '否定"长大了"+肯定"骑不动了"——不是成长而是衰老', effectEn: 'Not outgrowing the ride but the rider failing — the distinction between growing up and growing old' },
            { para: 2, text: '他的腰发出"咔"的一声。他皱了一下眉，然后冲我笑了', technique: '声音细节', techniqueEn: 'Sound Detail', effect: '一声咔=身体在预告老去——皱眉→笑=掩饰', effectEn: 'A single crack announcing aging — wince then smile, hiding the body\'s warning behind a father\'s reflex' },
            { para: 3, text: '他的肩膀没有记忆里那么宽了', technique: '记忆对比', techniqueEn: 'Memory Contrast', effect: '现实的肩vs记忆的肩——变窄的不是肩膀而是时间的余量', effectEn: 'Shoulders narrower than memory — what shrank isn\'t the shoulders but the remaining time' },
            { para: 4, text: '灶台冷了，油烟机安静了', technique: '物件空白', techniqueEn: 'Object Absence', effect: '冷灶台+静油烟机——通过物件的"无"来写人的"无"', effectEn: 'Cold stove, silent range hood — writing a person\'s absence through the silence of their tools' },
            { para: 6, text: '没有妈妈的唠叨，没有爸爸的鼾声', technique: '消除法', techniqueEn: 'Subtraction Method', effect: '三个"没有"——把现在厌烦的声音变成未来最想听到的', effectEn: 'Three "no mores" — sounds currently annoying reimagined as the ones you\'d miss most' },
            { para: 6, text: '这份安静，不是清净，而是空', technique: '重新定义', techniqueEn: 'Redefinition', effect: '安静≠清净=空——一字之差=天壤之别', effectEn: 'Quiet redefined — not peace but emptiness, one word\'s difference separating comfort from desolation' },
            { para: 8, text: '像日历一页页被撕掉', technique: '时间比喻', techniqueEn: 'Time Metaphor', effect: '撕日历=不可逆的倒计时——每一天都在靠近那个"有一天"', effectEn: 'Calendar pages torn away — an irreversible countdown, each day bringing "one day" closer' },
            { para: 8, text: '把最差的脾气留给了最亲的人', technique: '自省痛击', techniqueEn: 'Self-Striking Reflection', effect: '最差给最亲——一句话揭示了最普遍也最痛苦的人性弱点', effectEn: 'Worst temper saved for closest people — one sentence exposing the most universal and painful human failing' },
            { para: 10, text: '我放下手机，走进厨房帮妈妈洗菜。她愣了一下，然后笑了', technique: '微行动结尾', techniqueEn: 'Micro-Action Ending', effect: '从"如果"到"今天"——全文的假设在一个洗菜的动作中兑现', effectEn: 'The entire essay\'s hypothesis redeemed by one small act — putting down the phone and washing vegetables' }
          ],
          approach: '假设有一天父母老了，反思现在是否珍惜了与他们相处的时光。',
          approachEn: 'Imagining parents growing old, reflecting on whether we cherish time with them now.',
          architecture: '起：如果有一天爸爸不再送我上学；承：想象那些"有一天"的场景；转：从假设中惊醒；合：珍惜当下。',
          architectureEn: 'Open: If Dad no longer drives me to school. Develop: Imagining those "one day" scenes. Turn: Awakening from the hypothesis. Close: Cherish the present.',
          logic: '从假设到珍惜。', logicEn: 'From hypothesis to cherishing.',
          skills: ['假设场景细腻', '由虚及实', '情感真挚'],
          skillsEn: ['Delicate hypothetical scenes', 'Fiction to reality', 'Genuine emotion'],
          fullText: '　　如果有一天，爸爸不再骑电动车送我上学了。\n\n　　不是因为我长大了不需要，而是因为他骑不动了。\n\n　　这个念头是昨天早上冒出来的。爸爸像往常一样在楼下等我，我下楼时看到他弯着腰在擦车座上的灰。他直起身的那一瞬间，我听到他的腰发出"咔"的一声。他皱了一下眉，然后冲我笑了："走吧。"\n\n　　坐在后座上，风从耳边呼啸而过。我盯着爸爸的后背——什么时候开始，他的肩膀没有记忆里那么宽了？什么时候开始，他骑车的速度没有以前那么快了？\n\n　　如果有一天，妈妈不再在厨房里忙碌了。灶台冷了，油烟机安静了，再也闻不到她做的红烧肉的香味。那个每天变着花样给我做早餐的人，有一天会做不动了。\n\n　　如果有一天，奶奶不再坐在门口的小板凳上等我放学了。那双布满老茧的手不再塞给我热乎乎的红薯，那个远远就开始挥手的身影不再出现在巷口。\n\n　　如果有一天，家里安静了。没有妈妈的唠叨，没有爸爸的鼾声，没有奶奶看电视的声音。这份安静，不是清净，而是空。\n\n　　想到这里，我的眼眶忽然湿了。\n\n　　这些"如果有一天"不是永远不会来。它们每一天都在靠近，像日历一页页被撕掉。而我呢？我每天抱怨作业太多、嫌妈妈唠叨、跟爸爸顶嘴，把最差的脾气留给了最亲的人。\n\n　　如果有一天真的来了，我不想带着遗憾。\n\n　　所以今天放学回家，我放下手机，走进厨房帮妈妈洗菜。她愣了一下，然后笑了。我跟爸爸说了句"今天辛苦了"，他也愣了一下，然后拍了拍我的头。\n\n　　如果有一天终会到来，至少让我在那一天到来之前，好好爱他们。',
          fullTextEn: '　　If one day, Dad no longer rides the electric bike to take me to school.\n\n　　Not because I outgrew it — because he can no longer manage.\n\n　　The thought came yesterday morning. Dad waited downstairs as usual. Coming down, I saw him bent over wiping the seat. Straightening up — his back cracked. He winced, then smiled at me: "Let\'s go."\n\n　　On the back seat, wind whistling past my ears. I stared at his back — when did his shoulders become narrower than I remembered? When did his riding slow?\n\n　　If one day, Mom no longer bustles in the kitchen. Stove cold, range hood silent, never again the scent of her braised pork. The person who invents a different breakfast daily — one day she won\'t be able to.\n\n　　If one day, Grandma no longer sits on her little stool at the door waiting for me. Those calloused hands no longer pressing warm sweet potatoes into mine, that waving figure no longer appearing at the alley\'s end.\n\n　　If one day, home goes quiet. No Mom nagging, no Dad snoring, no Grandma\'s TV. That silence wouldn\'t be peace — it would be emptiness.\n\n　　At this thought, my eyes stung.\n\n　　These "if one days" won\'t stay forever hypothetical. They approach daily, like calendar pages torn away. And me? Daily complaining about homework, annoyed by Mom\'s nagging, arguing with Dad — saving my worst temper for the closest people.\n\n　　When that day truly comes, I don\'t want regrets.\n\n　　So today after school, I put down my phone and helped Mom wash vegetables. She froze, then smiled. I told Dad "tough day today" — he froze too, then patted my head.\n\n　　If one day must come, at least let me love them well before it arrives.',
          highlights: [
            { text: '他的腰发出"咔"的一声', textEn: 'His back cracked', why: '细节震撼', whyEn: 'Shocking detail' },
            { text: '这份安静，不是清净，而是空', textEn: 'That silence wouldn\'t be peace — it would be emptiness', why: '对比深刻', whyEn: 'Profound contrast' },
            { text: '把最差的脾气留给了最亲的人', textEn: 'Saving my worst temper for the closest people', why: '自省有力', whyEn: 'Powerful self-reflection' }
          ],
          sections: [
            { type: '起', fn: '触发', fnEn: 'Trigger', detail: '看到爸爸老了', detailEn: 'Seeing Dad age' },
            { type: '承', fn: '假设', fnEn: 'Hypothesis', detail: '一系列"如果"', detailEn: 'Series of "if"s' },
            { type: '转', fn: '惊醒', fnEn: 'Awakening', detail: '反思自己', detailEn: 'Self-reflection' },
            { type: '合', fn: '行动', fnEn: 'Action', detail: '珍惜当下', detailEn: 'Cherish the present' }
          ]
        },
        {
          title: '如果有一天', titleEn: 'If One Day',
          score: 37, maxScore: 40, structure: 'zongFenZong',
          techniques: ['duiBi', 'biYu', 'xinLiMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '我想告诉他三件事', technique: '预告结构', techniqueEn: 'Structural Preview', effect: '三件事=全文骨架——读者带着期待进入', effectEn: 'Three things previewed — the reader enters with a numbered expectation' },
            { para: 1, text: '上台却紧张得忘了词，最后红着脸跑下台', technique: '失败特写', techniqueEn: 'Failure Close-up', effect: '忘词+红脸+跑——三个动作完整再现了12岁的崩溃', effectEn: 'Forgetting lines, face reddening, fleeing the stage — three actions reconstructing a twelve-year-old\'s collapse' },
            { para: 1, text: '不是因为能力不够，而是因为太怕再摔一次', technique: '根因分析', techniqueEn: 'Root Cause Analysis', effect: '能力≠问题，恐惧=问题——自我诊断精准', effectEn: 'Ability wasn\'t the issue, fear was — a precise self-diagnosis separating capability from courage' },
            { para: 2, text: '你跟最好的朋友说"暑假见"，可暑假过完你搬了家', technique: '承诺断裂', techniqueEn: 'Broken Promise', effect: '"暑假见"→搬家→再也没见——三步完成一段友情的永别', effectEn: 'A casual "see you this summer" undone by a move — three steps completing a friendship\'s permanent goodbye' },
            { para: 2, text: '很多再见，其实是再也不见', technique: '谐音哲理', techniqueEn: 'Homophonic Philosophy', effect: '再见vs再也不见——一字之差=人生的残酷真相', effectEn: 'Goodbye versus gone forever — the cruelty of life captured in a single added character' },
            { para: 3, text: '连对你好的人都推开了', technique: '自伤行为', techniqueEn: 'Self-Inflicted Harm', effect: '推开关心=伤害自己也伤害别人——灰暗时期的恶性循环', effectEn: 'Pushing away those who care — hurting others and self simultaneously, the vicious cycle of dark periods' },
            { para: 3, text: '阳光总会回来的', technique: '跨时空安慰', techniqueEn: 'Cross-Temporal Comfort', effect: '现在的我安慰过去的我——因为已经走过来了所以有资格说', effectEn: 'Present self comforting past self — the authority to say "it gets better" earned by having survived' },
            { para: 4, text: '那个犯了错的我、没好好说再见的我、忘了微笑的我', technique: '三重自我', techniqueEn: 'Triple Self', effect: '三个"我"=三段遗憾——在排比中完成自我告别', effectEn: 'Three versions of "me" — three regrets processed into farewell through parallel structure' },
            { para: 5, text: '不是如果，就是今天', technique: '假设消解', techniqueEn: 'Hypothesis Collapse', effect: '破折号后的四个字打破全文的假设前提——从幻想跳到现实', effectEn: 'Four words after a dash destroying the essay\'s entire hypothetical premise — from fantasy to now' },
            { para: 6, text: '过去改变不了，但未来可以', technique: '对称结尾', techniqueEn: 'Symmetric Closing', effect: '过去vs未来——最后一句话=全文的价值判断', effectEn: 'Past versus future in perfect balance — the final sentence as the essay\'s value judgment' }
          ],
          approach: '如果有一天可以回到过去，我会对曾经的自己说三句话。',
          approachEn: 'If I could go back, three things I\'d tell my younger self.',
          architecture: '总：如果有一天能给过去的自己写信；句一：别怕犯错；句二：好好说再见；句三：多笑一点；总：过去回不去，但未来可以改。',
          architectureEn: 'Overview: Letter to past self. 1: Don\'t fear mistakes. 2: Say proper goodbyes. 3: Smile more. Summary: Can\'t change the past, but can shape the future.',
          logic: '从遗憾到释然。', logicEn: 'From regret to peace.',
          skills: ['三段平行', '每段有具体事例', '结尾升华'],
          skillsEn: ['Three parallel sections', 'Specific example in each', 'Elevating ending'],
          fullText: '　　如果有一天，我能跟三年前的自己说说话，我想告诉他三件事。\n\n　　第一件：别怕犯错。\n　　初一那次英语演讲比赛，你明明准备好了，上台却紧张得忘了词，最后红着脸跑下台。你觉得丢人极了，之后再也不敢参加任何比赛。可你不知道的是，那些上台发挥得很好的人，台下也摔过无数次。犯错不可怕，怕的是因为一次犯错就再也不敢尝试。你后来错过了那么多机会，不是因为能力不够，而是因为太怕再摔一次。\n\n　　第二件：好好说再见。\n　　小学毕业那天，你跟最好的朋友说"暑假见"，可暑假过完你搬了家，再也没见过他。你连一张合照都没留，连电话号码都没记下来。后来你才知道，很多再见，其实是再也不见。如果有一天你能回去，请在每一次分别时认真地说再见——拥抱他，告诉他你很高兴认识他。\n\n　　第三件：多笑一点。\n　　初二那段时间你过得很辛苦，成绩下滑、跟家人吵架、觉得全世界都不理解你。你整天皱着眉头，连对你好的人都推开了。可后来你会发现，那段灰暗的日子终究会过去。阳光总会回来的。如果当时你能对自己笑一笑，说一句"没关系"，那段路会好走很多。\n\n　　可惜时光不能倒流。那个犯了错的我、没好好说再见的我、忘了微笑的我，都已经永远留在了过去。\n\n　　但如果有一天——不，不是如果，就是今天——我可以开始做这三件事。不怕犯错，好好告别，多笑一点。\n\n　　过去改变不了，但未来可以。',
          fullTextEn: '　　If one day I could talk to myself from three years ago, I\'d tell him three things.\n\n　　First: don\'t fear mistakes.\n　　That seventh-grade English speech contest — you\'d prepared, but on stage, nerves erased your lines. You fled, red-faced. Felt it was the worst shame. Never entered another contest. But you didn\'t know: those who performed well had failed countless times backstage. Mistakes aren\'t scary; what\'s scary is never trying again after one. All those missed opportunities — not from lack of ability, but from fear of falling again.\n\n　　Second: say proper goodbyes.\n　　Primary school graduation: you told your best friend "see you this summer." But you moved, and never saw him again. No photo together, no phone number saved. You later learned: many "see you laters" are actually "never agains." If you could go back: at every parting, say goodbye properly — hug them, tell them you\'re glad you met.\n\n　　Third: smile more.\n　　Eighth grade was rough. Falling grades, family fights, feeling universally misunderstood. Frowning all day, pushing away even those who cared. But later you\'d find: dark days eventually pass. Sunshine always returns. If you could\'ve smiled at yourself and said "it\'s okay," that road would\'ve been much easier.\n\n　　But time can\'t rewind. The mistake-making me, the goodbye-forgetting me, the smile-forgetting me — all permanently in the past.\n\n　　But if one day — no, not "if." Today — I can start these three things. Don\'t fear mistakes. Say proper goodbyes. Smile more.\n\n　　The past can\'t change, but the future can.',
          highlights: [
            { text: '很多再见，其实是再也不见', textEn: 'Many "see you laters" are actually "never agains"', why: '朴素扎心', whyEn: 'Simple yet piercing' },
            { text: '不是如果，就是今天', textEn: 'Not "if" — today', why: '打破假设回归行动', whyEn: 'Breaking hypothesis, returning to action' },
            { text: '太怕再摔一次', textEn: 'Too afraid of falling again', why: '精准写出心理', whyEn: 'Precise psychological capture' }
          ],
          sections: [
            { type: '总起', fn: '假设', fnEn: 'Hypothesis', detail: '对话三年前', detailEn: 'Talk to past self' },
            { type: '一', fn: '勇气', fnEn: 'Courage', detail: '别怕犯错', detailEn: 'Don\'t fear mistakes' },
            { type: '二', fn: '珍惜', fnEn: 'Cherish', detail: '好好说再见', detailEn: 'Proper goodbyes' },
            { type: '三', fn: '乐观', fnEn: 'Optimism', detail: '多笑一点', detailEn: 'Smile more' },
            { type: '总结', fn: '行动', fnEn: 'Action', detail: '从今天开始', detailEn: 'Starting today' }
          ]
        },
        {
          title: '如果有一天', titleEn: 'If One Day',
          score: 36, maxScore: 40, structure: 'diJinShi',
          techniques: ['xiJieMiaoXie', 'huanJingChenTuo', 'biYu'],
          techniqueMarks: [
            { para: 0, text: '如果有一天没有手机，你会怎样？', technique: '设问开篇', techniqueEn: 'Rhetorical Opening', effect: '直接提问=制造代入感——读者立刻想到自己', effectEn: 'A direct question creating immediate reader identification — everyone reaches for their pocket' },
            { para: 2, text: '像是被扔到了一座孤岛上', technique: '失联比喻', techniqueEn: 'Disconnection Simile', effect: '孤岛=无手机——揭示数字时代的心理依赖程度', effectEn: 'Phonelessness as island exile — revealing the depth of digital-age psychological dependence' },
            { para: 3, text: '手不知道该往哪放，隔几分钟就下意识地摸口袋', technique: '戒断反应', techniqueEn: 'Withdrawal Symptom', effect: '身体的不适比心理的更真实——手的无所适从=瘾的生理证据', effectEn: 'Physical discomfort more honest than mental — restless hands as physiological proof of addiction' },
            { para: 5, text: '一看就是三个小时，竟然比刷短视频过瘾多了', technique: '替代发现', techniqueEn: 'Substitute Discovery', effect: '三小时深度阅读>无数短视频——注意力重新聚焦后的惊喜', effectEn: 'Three hours of deep reading outpacing endless short videos — the surprise of refocused attention' },
            { para: 6, text: '夕阳正在西沉，云彩被染成了橘红色和紫色', technique: '被遮蔽的美', techniqueEn: 'Obscured Beauty', effect: '每天都有的夕阳今天才看到——手机遮住的不是屏幕而是世界', effectEn: 'A sunset that happens every day, seen for the first time — the phone wasn\'t blocking a screen but the world itself' },
            { para: 7, text: '我第一次认真地跟爸妈聊天', technique: '首次体验', techniqueEn: 'First-Time Experience', effect: '"第一次"=讽刺——和父母同住十几年却是第一次真正交流', effectEn: '"For the first time" — the irony of genuinely talking to parents after living with them for over a decade' },
            { para: 7, text: '原来他们这么有趣，只是我从来没有认真听过', technique: '自省发现', techniqueEn: 'Self-Reflective Discovery', effect: '有趣的人一直在身边——不是他们无趣而是我没有在听', effectEn: 'Interesting people were always there — not that they were boring but that listening had been replaced by scrolling' },
            { para: 8, text: '第一次在十点之前觉得困了', technique: '身体信号', techniqueEn: 'Body Signal', effect: '身体恢复自然节律——手机打乱的不只是时间而是身体', effectEn: 'The body recovering its natural rhythm — the phone disrupted not just schedule but biology' },
            { para: 9, text: '200多条消息涌进来。我一条条看——绝大多数都是无关紧要的', technique: '数据讽刺', techniqueEn: 'Data Irony', effect: '200条=几乎全无关紧要——恐惧的对象原来是空气', effectEn: '200 messages, almost all irrelevant — the object of all that anxiety turns out to be noise' },
            { para: 10, text: '天很蓝，饭很香，家人很有趣', technique: '三字排比', techniqueEn: 'Triple Short Phrase', effect: '三个"很"——极简语言描述被手机遮住的三样基本美好', effectEn: 'Three simple "verys" — minimal language naming the three basic beauties the phone had hidden' }
          ],
          approach: '如果有一天没有手机，我们的生活会怎样？一次断网经历引发的思考。',
          approachEn: 'If phones disappeared — a disconnection experience sparks reflection.',
          architecture: '手机坏了一天→最初焦虑→慢慢发现不一样的世界→反思依赖→找到平衡。',
          architectureEn: 'Phone breaks for a day → initial anxiety → discovering a different world → reflecting on dependence → finding balance.',
          logic: '从依赖到发现到平衡。', logicEn: 'From dependence to discovery to balance.',
          skills: ['断网体验真实', '发现美好细腻', '反思有深度'],
          skillsEn: ['Authentic disconnection', 'Delicate beauty discovery', 'Deep reflection'],
          fullText: '　　如果有一天没有手机，你会怎样？\n\n　　这个问题我从没想过，直到上个月手机掉进水里，修了整整一天。\n\n　　刚发现手机坏了的那一刻，我慌了。没有手机怎么看消息？怎么刷视频？怎么跟同学聊天？那种感觉像是被扔到了一座孤岛上。\n\n　　前两个小时是最难熬的。手不知道该往哪放，隔几分钟就下意识地摸口袋。坐在书桌前想写作业，可脑子里全是"有没有人找我""群里是不是在聊什么"。\n\n　　可慢慢地，焦虑淡了。\n\n　　下午无事可做，我翻出了书架上落灰的《三体》。一看就是三个小时，竟然比刷短视频过瘾多了。\n\n　　傍晚时分，我走到阳台上。夕阳正在西沉，云彩被染成了橘红色和紫色，好看得不像真的。我平时在阳台上只看手机，从没注意过这些。\n\n　　晚饭时，没有手机横在餐桌上，我第一次认真地跟爸妈聊天。妈妈说了工作上的趣事，爸爸讲了小时候在农村抓鱼的故事。原来他们这么有趣，只是我从来没有认真听过。\n\n　　晚上九点，我躺在床上，第一次在十点之前觉得困了。平时刷手机到十二点，第二天怎么都起不来。\n\n　　第二天手机修好了。拿到手机的一瞬间，200多条消息涌进来。我一条条看——绝大多数都是无关紧要的。\n\n　　如果有一天没有手机，生活不会垮掉。相反，你会发现：天很蓝，饭很香，家人很有趣，而你自己——比想象中更能享受安静。',
          fullTextEn: '　　If one day you had no phone — what then?\n\n　　I\'d never considered it until last month: phone fell in water, repairs took a full day.\n\n　　The moment I realized: panic. No messages? No videos? No chatting? Like being stranded on an island.\n\n　　First two hours: brutal. Hands didn\'t know where to go. Every few minutes, instinctively reaching for my pocket. At my desk for homework, but brain full of "is anyone looking for me?" "what\'s happening in the group chat?"\n\n　　Gradually, the anxiety faded.\n\n　　Afternoon, nothing to do: I pulled out the dusty "Three-Body Problem" from the shelf. Three hours gone — more satisfying than any short video binge.\n\n　　Evening: walked to the balcony. Sun setting, clouds dyed orange-red and purple — too beautiful to seem real. Usually on the balcony I only stare at my phone. Never noticed this.\n\n　　Dinner without a phone lying on the table: I genuinely chatted with my parents for the first time. Mom shared work stories. Dad told tales of catching fish in the countryside as a boy. They\'re so interesting — I\'d just never truly listened.\n\n　　9 PM: lying in bed, drowsy before ten for the first time. Usually scrolling until midnight, impossible to wake next morning.\n\n　　Next day: phone repaired. Picking it up — 200+ messages flooding in. Reading through: the vast majority — utterly unimportant.\n\n　　If one day without a phone, life won\'t collapse. Instead, you\'ll discover: sky is blue, food is delicious, family is fascinating, and you — more capable of enjoying quiet than you imagined.',
          highlights: [
            { text: '手不知道该往哪放', textEn: 'Hands didn\'t know where to go', why: '依赖症写得真实', whyEn: 'Authentic addiction portrayal' },
            { text: '好看得不像真的', textEn: 'Too beautiful to seem real', why: '发现日常之美', whyEn: 'Discovering everyday beauty' },
            { text: '绝大多数都是无关紧要的', textEn: 'The vast majority — utterly unimportant', why: '冷静的顿悟', whyEn: 'Calm epiphany' }
          ],
          sections: [
            { type: '起', fn: '失去', fnEn: 'Loss', detail: '手机坏了', detailEn: 'Phone breaks' },
            { type: '承', fn: '焦虑', fnEn: 'Anxiety', detail: '不知所措', detailEn: 'Lost without phone' },
            { type: '转', fn: '发现', fnEn: 'Discovery', detail: '世界很美', detailEn: 'World is beautiful' },
            { type: '合', fn: '反思', fnEn: 'Reflection', detail: '找到平衡', detailEn: 'Finding balance' }
          ]
        },
        {
          title: '如果有一天', titleEn: 'If One Day',
          score: 36, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['xiJieMiaoXie', 'duiBi', 'xinLiMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '我绝对不会当着全班的面骂学生', technique: '誓言开篇', techniqueEn: 'Vow Opening', effect: '绝对不会——开头即态度，读者想知道为什么', effectEn: 'An absolute vow opening the essay — the reader immediately wants to know why' },
            { para: 1, text: '在讲台上念了我的名字和分数', technique: '伤害场景', techniqueEn: 'Humiliation Scene', effect: '公开姓名+分数=公开处刑——具体到不需要形容词', effectEn: 'Name and score read aloud — a public execution so specific it needs no adjective to wound' },
            { para: 1, text: '恨不得把自己缩成一颗螺丝钉，钉进课桌里', technique: '夸张具象', techniqueEn: 'Concrete Hyperbole', effect: '螺丝钉=极致缩小+消失——比"找个地缝钻"更形象', effectEn: 'Shrinking into a screw — a more vivid and mechanical version of wanting to disappear' },
            { para: 2, text: '如果有一天我当了老师，我要保护每一个学生的自尊心', technique: '日记立志', techniqueEn: 'Diary Oath', effect: '写在日记里的誓言=12岁的价值观种子', effectEn: 'An oath written in a diary — a twelve-year-old planting a seed of values from pain' },
            { para: 3, text: '上她的课不举手，走廊里遇到她绕着走', technique: '回避行为', techniqueEn: 'Avoidance Behavior', effect: '不举手+绕着走——用行为建墙比用语言更深', effectEn: 'Never raising a hand, detours in hallways — behavioral walls deeper than any verbal complaint' },
            { para: 6, text: '一个身影从观众席冲出来，是张老师', technique: '意外救援', techniqueEn: 'Unexpected Rescue', effect: '"坏老师"冲出来救人——行为推翻了标签', effectEn: 'The "bad teacher" dashing from the stands — one action overturning an entire label' },
            { para: 6, text: '额头上全是汗，眼睛里全是着急', technique: '双重特写', techniqueEn: 'Double Close-up', effect: '汗+着急——身体在说她做不到口头表达的话', effectEn: 'Forehead soaked, eyes frantic — her body saying what her words could never manage' },
            { para: 7, text: '也许她当众念分数是因为着急', technique: '重新解读', techniqueEn: 'Reinterpretation', effect: '用同一个词"着急"连接两个场景——批评和关心源于同一种情感', effectEn: 'The same word "urgency" linking two scenes — criticism and care stemming from the same emotion' },
            { para: 8, text: '不是为考了58分道歉，而是为自己一直躲着她道歉', technique: '反向道歉', techniqueEn: 'Reverse Apology', effect: '道歉内容的反转——不为成绩而为偏见', effectEn: 'Apologizing not for the grade but for the avoidance — the reversal reframing who truly owed whom' },
            { para: 9, text: '批评要私下说，关心要让学生感受到。严厉和温柔，不是对立的', technique: '并列结论', techniqueEn: 'Parallel Conclusion', effect: '两条准则+一个洞见——从一段经历中提炼出教育哲学', effectEn: 'Two principles and one insight distilled from lived experience — a personal pedagogy born from pain and forgiveness' }
          ],
          approach: '如果有一天我成了老师，我会怎样对待学生？由一次被老师伤害的经历引发思考。',
          approachEn: 'If I became a teacher — reflecting on how I\'d treat students, sparked by being hurt by a teacher.',
          architecture: '起：被老师当众批评的痛；承：发誓以后当老师绝不这样；转：运动会上理解了那位老师；合：如果有一天我当老师。',
          architectureEn: 'Open: Pain of public criticism. Develop: Vowing never to do that as a teacher. Turn: Understanding the teacher at sports day. Close: If I become a teacher one day.',
          logic: '从怨恨到理解到立志。', logicEn: 'From resentment to understanding to aspiration.',
          skills: ['冲突真实', '转变有说服力', '结尾有温度'],
          skillsEn: ['Authentic conflict', 'Convincing change', 'Warm ending'],
          fullText: '　　如果有一天我当了老师，我绝对不会当着全班的面骂学生。\n\n　　这个想法来自初一那次被当众批评。那天数学考了58分，全班最低。张老师拿着我的试卷，在讲台上念了我的名字和分数。教室里有人偷笑，有人回头看我。我恨不得把自己缩成一颗螺丝钉，钉进课桌里。\n\n　　那天回家我哭了很久。不是因为分数，是因为觉得老师不尊重我。我在日记里写："如果有一天我当了老师，我要保护每一个学生的自尊心。"\n\n　　整个初一我都不喜欢张老师。上她的课不举手，走廊里遇到她绕着走。我把她归类为"坏老师"。\n\n　　直到初二运动会。\n\n　　那天我参加800米跑步，跑到第三圈腿抽筋了，疼得蹲在跑道上。周围的人都在往前跑，没人停下来。\n\n　　一个身影从观众席冲出来，是张老师。她蹲在我旁边，帮我按摩腿，嘴里说："慢慢来，不急。"然后搀着我走到终点。我看到她额头上全是汗，眼睛里全是着急。\n\n　　那一刻，我突然觉得她不是"坏老师"。也许她当众念分数是因为着急，就像她现在急着帮我按摩抽筋的腿。她的方式不对，但她的出发点不坏。\n\n　　后来我主动找她道了歉——不是为考了58分道歉，而是为自己一直躲着她道歉。她笑了："我也该跟你道歉。那次不该在课上念你的分数。"\n\n　　如果有一天我真的当了老师，我会记住两件事：批评要私下说，关心要让学生感受到。严厉和温柔，不是对立的。就像张老师教我的那样。',
          fullTextEn: '　　If I become a teacher one day, I\'ll never scold students publicly.\n\n　　This conviction came from being publicly shamed in seventh grade. Math: 58, class lowest. Teacher Zhang read my name and score from the podium. Snickers. Stares. I wanted to shrink into a screw and drill into the desk.\n\n　　Home, I cried for hours. Not the score — the disrespect. In my diary: "If I become a teacher, I\'ll protect every student\'s dignity."\n\n　　All of seventh grade, I disliked Teacher Zhang. No hand-raising in her class, detours in the hallway. Filed under: "bad teacher."\n\n　　Until eighth-grade sports day.\n\n　　800-meter run, third lap: leg cramped, crouching on the track in pain. Everyone running past. Nobody stopping.\n\n　　A figure dashed from the stands — Teacher Zhang. Kneeling beside me, massaging my leg: "Take it slow, no rush." Walking me to the finish. Her forehead drenched in sweat, eyes full of worry.\n\n　　That moment: she wasn\'t a "bad teacher." Maybe reading scores aloud came from urgency — like her urgency now, massaging my cramped leg. Her method was wrong, but her intentions weren\'t bad.\n\n　　Later, I approached her to apologize — not for scoring 58, but for avoiding her all along. She smiled: "I owe you an apology too. I shouldn\'t have read your score in class."\n\n　　If I truly become a teacher one day, I\'ll remember two things: criticism in private, care that students can feel. Strictness and gentleness aren\'t opposites. Just as Teacher Zhang taught me.',
          highlights: [
            { text: '恨不得把自己缩成一颗螺丝钉', textEn: 'I wanted to shrink into a screw and drill into the desk', why: '夸张写出难堪', whyEn: 'Hyperbole captures humiliation' },
            { text: '她的方式不对，但出发点不坏', textEn: 'Her method was wrong, but her intentions weren\'t bad', why: '客观理解', whyEn: 'Objective understanding' },
            { text: '严厉和温柔不是对立的', textEn: 'Strictness and gentleness aren\'t opposites', why: '升华深刻', whyEn: 'Deep elevation' }
          ],
          sections: [
            { type: '起', fn: '伤害', fnEn: 'Hurt', detail: '当众念分数', detailEn: 'Public score reading' },
            { type: '承', fn: '怨恨', fnEn: 'Resentment', detail: '躲避老师', detailEn: 'Avoiding teacher' },
            { type: '转', fn: '理解', fnEn: 'Understanding', detail: '运动会上的关心', detailEn: 'Sports day care' },
            { type: '合', fn: '立志', fnEn: 'Aspiration', detail: '当好老师', detailEn: 'Being a good teacher' }
          ]
        },
        {
          title: '如果有一天', titleEn: 'If One Day',
          score: 37, maxScore: 40, structure: 'pianDuanZuHe',
          techniques: ['pianDuanZuHe', 'biYu', 'shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '"如果有一天"是一扇门，推开它，背后是无限可能', technique: '比喻定义', techniqueEn: 'Metaphorical Definition', effect: '门=可能性的入口——开篇就把假设变成了空间', effectEn: 'A door as the threshold of possibility — turning a hypothetical into a physical space from the first line' },
            { para: 1, text: '看整个昆明的灯火像星河倒映在大地上', technique: '俯瞰想象', techniqueEn: 'Aerial Imagination', effect: '灯火=星河倒影——城市在飞行者眼中变成了天空的镜像', effectEn: 'City lights as a galaxy reflected on earth — the city becoming the sky\'s mirror when seen from above' },
            { para: 1, text: '跟鸟做邻居，听风给树叶讲故事', technique: '童话化', techniqueEn: 'Fairy-Tale Register', effect: '鸟为邻+风讲故事——飞翔的自由用童话语言呈现', effectEn: 'Birds as neighbors, wind as storyteller — the freedom of flight rendered in fairy-tale language' },
            { para: 2, text: '爷爷举着酒杯笑得眯起了眼', technique: '定格瞬间', techniqueEn: 'Frozen Frame', effect: '全家人各有动作——一帧画面装下所有人的幸福', effectEn: 'Each family member caught in a single gesture — one frame containing everyone\'s happiness' },
            { para: 2, text: '弟弟在桌子底下放鞭炮', technique: '童真插入', techniqueEn: 'Childish Interruption', effect: '桌下放鞭炮——调皮的弟弟让团圆画面更真实', effectEn: 'Firecrackers under the table — a mischievous brother making the reunion scene vividly real' },
            { para: 3, text: '想读懂妈妈笑着说"没事"时心里是不是真的没事', technique: '反语质疑', techniqueEn: 'Questioning the Unsaid', effect: '笑着说没事=可能有事——洞察日常谎言背后的真情', effectEn: 'Smiling "I\'m fine" that might not be fine — seeing through everyday white lies to the feelings beneath' },
            { para: 4, text: '如果有一天——就是今天', technique: '假设消解', techniqueEn: 'Hypothesis Collapse', effect: '破折号将"如果"变成"现在"——全文在这一刻从幻想着陆', effectEn: 'A dash collapsing "if one day" into "today" — the entire essay landing from fantasy to reality in one punctuation mark' },
            { para: 4, text: '只要放下手机认真吃一顿饭，那个瞬间就不会溜走', technique: '微行动', techniqueEn: 'Micro-Action', effect: '不需要超能力只需要放下手机——宏大假设的平凡答案', effectEn: 'No superpower needed, just putting down the phone — the grand hypothesis answered by the smallest action' },
            { para: 4, text: '只要多问一句"你还好吗"，就能走进另一个人的世界', technique: '极简方案', techniqueEn: 'Minimalist Solution', effect: '四个字替代读心术——理解他人的最简路径', effectEn: 'Four words replacing telepathy — the shortest path into another person\'s world' },
            { para: 5, text: '"如果有一天"不在远方。它藏在每一个用心过的今天里', technique: '首尾呼应', techniqueEn: 'Opening-Closing Echo', effect: '回应开篇的"门"——门不在远方而在脚下', effectEn: 'Echoing the opening door — the door isn\'t far away, it\'s under your feet, in every day lived with attention' }
          ],
          approach: '四个"如果有一天"串联对生活的珍惜和期待。',
          approachEn: 'Four "if one days" stringing together appreciation and anticipation for life.',
          architecture: '引：如果有一天是一扇门；一：如果有一天能飞（自由）；二：如果有一天时间停止（珍惜）；三：如果有一天能读懂所有人的心（理解）；四：如果有一天就是今天（行动）。',
          architectureEn: 'Intro: "If one day" as a door. 1: Flying (freedom). 2: Time stops (cherish). 3: Reading hearts (understanding). 4: That day is today (action).',
          logic: '从幻想到现实的落地。', logicEn: 'From fantasy to grounded reality.',
          skills: ['想象力丰富', '段落对称', '结尾回归现实'],
          skillsEn: ['Rich imagination', 'Symmetrical sections', 'Reality return at close'],
          fullText: '　　"如果有一天"是一扇门，推开它，背后是无限可能。\n\n　　如果有一天我能飞。\n　　我想飞过学校的围墙，看看外面的世界到底有多大。飞过城市的高楼，看整个昆明的灯火像星河倒映在大地上。飞到洱海上空，把手伸进云朵里，感受它是不是真的像棉花糖一样软。飞累了，就停在一棵大树的树梢上，跟鸟做邻居，听风给树叶讲故事。\n\n　　如果有一天时间能停下来。\n　　我想让它停在全家人一起吃年夜饭的那一刻。爷爷举着酒杯笑得眯起了眼，奶奶用筷子夹了一大块鱼放到我碗里说"年年有余"，爸爸和叔叔在拼酒，妈妈和姑姑在聊天，弟弟在桌子底下放鞭炮。如果时间能停在那一秒，我愿意永远待在那里。\n\n　　如果有一天我能读懂所有人的心。\n　　我想读懂妈妈笑着说"没事"时心里是不是真的没事。想读懂爸爸沉默时在想什么。想读懂同桌考砸后说"无所谓"时是不是真的无所谓。也许，当我们能听到彼此心里的话，这个世界的误解就会少很多。\n\n　　如果有一天——就是今天。\n　　其实不用飞，走出家门就能看到不一样的风景。不用停住时间，只要放下手机认真吃一顿饭，那个瞬间就不会溜走。不用读心术，只要多问一句"你还好吗"，就能走进另一个人的世界。\n\n　　"如果有一天"不在远方。它藏在每一个用心过的今天里。',
          fullTextEn: '　　"If one day" is a door. Push it open — behind it, infinite possibilities.\n\n　　If one day I could fly.\n　　Over the school walls to see how vast the world is. Over city towers, seeing Kunming\'s lights like a galaxy reflected on earth. Over Erhai Lake, reaching into clouds to feel if they\'re really cotton-candy soft. Tired, I\'d rest on a treetop, neighbor to birds, listening to wind telling stories to leaves.\n\n　　If one day time could stop.\n　　I\'d stop it at the moment our whole family eats New Year\'s Eve dinner. Grandpa raising his cup, eyes crinkled with laughter. Grandma chopsticking a huge fish piece into my bowl: "Abundance year after year." Dad and uncle competing drinks. Mom and aunt chatting. Little brother setting off firecrackers under the table. If time froze that second, I\'d stay forever.\n\n　　If one day I could read everyone\'s heart.\n　　I\'d read whether Mom truly means "I\'m fine" behind her smile. What Dad thinks during his silence. Whether my deskmate\'s "whatever" after a bad test is genuine. Perhaps when we hear each other\'s inner words, the world would have far fewer misunderstandings.\n\n　　If one day — is today.\n　　No need to fly; stepping outside reveals new scenery. No need to freeze time; just put down the phone for one genuine meal, and that moment won\'t escape. No need for telepathy; just asking "are you okay?" enters another person\'s world.\n\n　　"If one day" isn\'t far away. It hides in every today lived with heart.',
          highlights: [
            { text: '跟鸟做邻居，听风给树叶讲故事', textEn: 'Neighbor to birds, listening to wind telling stories to leaves', why: '想象力优美', whyEn: 'Beautiful imagination' },
            { text: '如果时间能停在那一秒', textEn: 'If time could freeze that second', why: '家庭温情', whyEn: 'Family warmth' },
            { text: '它藏在每一个用心过的今天里', textEn: 'It hides in every today lived with heart', why: '点题有力', whyEn: 'Powerful theme statement' }
          ],
          sections: [
            { type: '引', fn: '总起', fnEn: 'Overview', detail: '一扇门', detailEn: 'A door' },
            { type: '一', fn: '自由', fnEn: 'Freedom', detail: '飞翔', detailEn: 'Flying' },
            { type: '二', fn: '珍惜', fnEn: 'Cherish', detail: '时间停止', detailEn: 'Time stops' },
            { type: '三', fn: '理解', fnEn: 'Understanding', detail: '读心', detailEn: 'Reading hearts' },
            { type: '四', fn: '行动', fnEn: 'Action', detail: '就是今天', detailEn: 'Today is the day' }
          ]
        }
      ]
    },
    {
      id: 'yn2013_comp1',
      paperId: 'yn2013',
      year: 2013,
      region: '云南省',
      prompt: '请以"原来春天一直都在我身边"为题，写一篇文章。不少于600字。',
      promptEn: 'Write on "It Turns Out Spring Was Always by My Side." 600+ words.',
      type: 'fullTopic',
      category: '命题作文',
      categoryEn: 'Full Topic Composition',
      wordCount: 600,
      guide: {
        analysis: '"春天"可实可虚：自然的春天，也可象征温暖、希望、关爱。"一直都在"暗示之前没有发现。重点在"发现"这个转变。',
        analysisEn: '"Spring" can be literal or metaphorical (warmth, hope, love). "Always there" implies previous unawareness. Focus on the moment of discovery.',
        keyPoints: ['春天的象征义要明确', '之前的忽视要写出', '发现的瞬间要精彩', '感悟要深刻'],
        keyPointsEn: ['Clear symbolism of spring', 'Show prior neglect', 'Vivid discovery moment', 'Deep insight'],
        pitfalls: ['只写自然春天', '缺少发现过程', '象征太牵强'],
        pitfallsEn: ['Only literal spring', 'No discovery process', 'Forced symbolism']
      },
      essays: [
        {
          title: '原来春天一直都在我身边', titleEn: 'Spring Was Always by My Side',
          score: 38, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['huanJingChenTuo', 'xiJieMiaoXie', 'duiBi'],
          techniqueMarks: [
            { para: 0, text: '家是最冷的地方', technique: '悖论开篇', techniqueEn: 'Paradox Opening', effect: '家=冷——最应该温暖的地方被感受为最冷，预设反转', effectEn: 'Home as the coldest place — the warmest space felt as the coldest, setting up the essay\'s entire reversal' },
            { para: 1, text: '一个月打一次电话，每次不超过三分钟', technique: '数据化冷漠', techniqueEn: 'Quantified Coldness', effect: '频率+时长=爱的数学——数字越精确越让人觉得凄凉', effectEn: 'Once a month, under three minutes — love reduced to arithmetic, the precision making the loneliness sharper' },
            { para: 1, text: '回来只会问"作业写了没"', technique: '单一台词', techniqueEn: 'Single-Line Dialogue', effect: '永远只有一句话——母亲被缩减为一个功能', effectEn: 'Only ever one question — a mother reduced to a single function, or so the narrator believes' },
            { para: 3, text: '一双手——不太温柔，甚至有些笨拙——把一片退烧贴贴在我额头上', technique: '触感觉醒', techniqueEn: 'Tactile Awakening', effect: '不温柔+笨拙——破折号里的两个否定=最真实的爱', effectEn: 'Hands that are neither gentle nor graceful — two negatives inside dashes defining the realest love' },
            { para: 4, text: '用盘子倒扣着保温', technique: '笨拙的智慧', techniqueEn: 'Clumsy Ingenuity', effect: '倒扣盘子=没有保温盒的变通——条件有限但爱无限', effectEn: 'An inverted plate as a lid — improvised insulation proving that love adapts even when resources don\'t' },
            { para: 5, text: '粥在柜子上，醒了就喝。药在粥旁边', technique: '纸条叙事', techniqueEn: 'Note Narration', effect: '三句指令式短句——没有感叹号没有"爱你"但每个字都是安排', effectEn: 'Three terse instructions — no exclamation marks, no "love you," yet every word is an act of care made concrete' },
            { para: 7, text: '用手背试了试我的额头', technique: '经典动作', techniqueEn: 'Classic Gesture', effect: '手背试额温——最朴素的母爱动作，不需要语言', effectEn: 'Testing forehead temperature with the back of a hand — the most elemental gesture of maternal love' },
            { para: 7, text: '替我掖了掖被角，站了几秒钟，才转身离开', technique: '停顿特写', techniqueEn: 'Pause Close-up', effect: '站了几秒=不舍离开——那几秒钟装满了说不出口的话', effectEn: 'Standing a few seconds before leaving — those seconds holding everything she cannot say' },
            { para: 9, text: '几乎全是关于我的', technique: '证据翻转', techniqueEn: 'Evidence Reversal', effect: '聊天记录=铁证——父母不是不在乎而是在另一个渠道深深在乎', effectEn: 'Chat history as proof — parents didn\'t stop caring, they simply cared in a channel the child couldn\'t see' },
            { para: 11, text: '一碗粥、一张纸条、一个试额温的手背——安静的、笨拙的，却从未缺席', technique: '定义句收束', techniqueEn: 'Defining Sentence Closure', effect: '三个物件+三个形容词=春天的新定义——不热烈但从不缺席', effectEn: 'Three objects and three adjectives redefining spring — not blazing but never absent, not eloquent but always present' }
          ],
          approach: '觉得家里冷漠的我，在一次生病后发现家人的爱一直如春天般围绕着自己。',
          approachEn: 'Feeling family is cold, discovering their love — like spring — was always around, after falling ill.',
          architecture: '起：觉得家是最冷的地方；承：生病发烧的那一夜；转：发现枕边的退烧贴和桌上的粥；合：原来春天一直在。',
          architectureEn: 'Open: Home feels the coldest. Develop: Night of fever. Turn: Finding cooling patch and porridge. Close: Spring was always here.',
          logic: '从误解到发现。', logicEn: 'From misunderstanding to discovery.',
          skills: ['冷暖对比', '细节传情', '首尾呼应'],
          skillsEn: ['Cold-warm contrast', 'Details convey emotion', 'Echo structure'],
          fullText: '　　很长一段时间，我觉得家是最冷的地方。\n\n　　爸爸常年在外地工作，一个月打一次电话，每次不超过三分钟。妈妈在超市上班，早出晚归，回来只会问"作业写了没"。爷爷奶奶在老家，一年见一次。我觉得自己像住在一间空房子里，四面墙壁都是冰冷的。\n\n　　直到那次发烧。\n\n　　那是初二冬天的一个晚上，我烧到了39度。浑身发抖，头疼得像要裂开。迷迷糊糊中，我隐约听到开门声、脚步声、翻东西的声音。然后一双手——不太温柔，甚至有些笨拙——把一片退烧贴贴在我额头上。\n\n　　半夜醒来，烧退了一些。借着走廊漏进来的灯光，我看到床头柜上放着一碗粥，用盘子倒扣着保温。旁边是一杯水，水温刚好不烫。再旁边，是一张皱巴巴的纸条：\n\n　　"粥在柜子上，醒了就喝。药在粥旁边。妈妈明天早上六点上班，走之前会来看你。"\n\n　　字迹很潦草，像匆忙间写的。可那几行字，在那个冬夜里，暖得让我想哭。\n\n　　第二天早上，我假装还在睡。听到妈妈轻手轻脚推开门，走到床边，用手背试了试我的额头。然后她替我掖了掖被角，站了几秒钟，才转身离开。\n\n　　我睁开眼，盯着天花板。窗外是灰蒙蒙的冬日清晨。可我忽然觉得，有什么东西在心里融化了。\n\n　　那天下午，我翻开妈妈的手机，发现她和爸爸的聊天记录——几乎全是关于我的。"今天又考试了""最近瘦了""好像不太开心"。爸爸每条都回了很长的话。\n\n　　原来他们一直在关心我。只是爸爸不善表达，妈妈忙到顾不上温柔。\n\n　　原来春天一直都在我身边。不是花开满园的那种热烈，而是一碗粥、一张纸条、一个试额温的手背——安静的、笨拙的，却从未缺席。',
          fullTextEn: '　　For a long time, home felt like the coldest place.\n\n　　Dad worked away, calling once a month, never over three minutes. Mom worked at a supermarket, gone dawn to dusk, returning only to ask "homework done?" Grandparents in the village, seen once a year. I felt like I lived in an empty house — four walls of ice.\n\n　　Until the fever.\n\n　　An eighth-grade winter night: 39 degrees. Shaking, head splitting. Through haze I heard: door opening, footsteps, rummaging. Then hands — not gentle, even clumsy — pressing a cooling patch on my forehead.\n\n　　Waking at midnight, fever receding. By corridor light: a bowl of porridge on the nightstand, plate inverted to keep it warm. A cup of water — perfect temperature. Beside it, a crumpled note:\n\n　　"Porridge on the cabinet. Drink when you wake. Medicine next to it. Mom leaves for work at 6 AM — will check on you before leaving."\n\n　　Scrawled handwriting, clearly rushed. But those lines, on that winter night, were warm enough to make me cry.\n\n　　Next morning, I pretended sleep. Heard Mom tiptoe in, walk to the bed, test my forehead with the back of her hand. She tucked my blanket corners, stood a few seconds, then left.\n\n　　I opened my eyes, staring at the ceiling. Gray winter dawn outside. Yet something inside me was melting.\n\n　　That afternoon, I checked Mom\'s phone. Her chat with Dad — almost entirely about me. "Had another test today." "Looks thinner." "Seems unhappy." Dad replied at length to every message.\n\n　　They\'d been caring all along. Dad just couldn\'t express it. Mom was too busy for gentleness.\n\n　　Spring was always by my side. Not the blazing kind with gardens in bloom — but a bowl of porridge, a scribbled note, a hand testing my forehead. Quiet, clumsy, yet never absent.',
          highlights: [
            { text: '不太温柔，甚至有些笨拙', textEn: 'Not gentle, even clumsy', why: '真实的父母之爱', whyEn: 'Authentic parental love' },
            { text: '字迹很潦草，像匆忙间写的', textEn: 'Scrawled handwriting, clearly rushed', why: '细节见辛劳', whyEn: 'Detail reveals hard work' },
            { text: '安静的、笨拙的，却从未缺席', textEn: 'Quiet, clumsy, yet never absent', why: '定义春天', whyEn: 'Defining spring' }
          ],
          sections: [
            { type: '起', fn: '冷', fnEn: 'Cold', detail: '觉得家冷漠', detailEn: 'Home feels cold' },
            { type: '承', fn: '病', fnEn: 'Illness', detail: '发烧那夜', detailEn: 'Fever night' },
            { type: '转', fn: '发现', fnEn: 'Discovery', detail: '粥和纸条', detailEn: 'Porridge and note' },
            { type: '合', fn: '领悟', fnEn: 'Realization', detail: '春天一直在', detailEn: 'Spring was always here' }
          ]
        },
        {
          title: '原来春天一直都在我身边', titleEn: 'Spring Was Always by My Side',
          score: 37, maxScore: 40, structure: 'diJinShi',
          techniques: ['biYu', 'xiJieMiaoXie', 'duiBi'],
          techniqueMarks: [
            { para: 0, text: '灰蒙蒙的天，光秃秃的树，冷冷的风。跟这个陌生的学校一样', technique: '环境投射', techniqueEn: 'Environmental Projection', effect: '天气=心情——灰天+秃树+冷风就是转学生的内心', effectEn: 'Gray sky, bare trees, cold wind mirroring the inner landscape of a student arriving at a strange school' },
            { para: 1, text: '我像一块透明的玻璃', technique: '存在感比喻', techniqueEn: 'Presence Metaphor', effect: '透明=存在但不被看见——比"隐形人"更精确', effectEn: 'Transparent as glass — existing yet unseen, more precise than "invisible"' },
            { para: 1, text: '低头翻书假装不在乎', technique: '防御行为', techniqueEn: 'Defensive Behavior', effect: '假装不在乎=非常在乎——行为与内心的反差', effectEn: 'Pretending not to care — the gap between the performed indifference and the desperate wanting to belong' },
            { para: 3, text: '带我走了一段路，然后挥挥手就去了自己的座位。连名字都没问', technique: '轻量善意', techniqueEn: 'Weightless Kindness', effect: '帮完就走+不问名字——善意不需要仪式感', effectEn: 'Helped and left, never even asking a name — kindness requiring no ceremony or reciprocity' },
            { para: 4, text: '正发愁，桌上多了一把', technique: '无声出现', techniqueEn: 'Silent Appearance', effect: '圆规悄悄出现——善意连解释都省了', effectEn: 'A compass appearing without a word — kindness so quiet it skips even explanation' },
            { para: 5, text: '拼伞走吧', technique: '三字邀约', techniqueEn: 'Three-Word Invitation', effect: '三个字=打破孤独的最小语言单位', effectEn: 'Three words breaking the wall of loneliness — the minimum viable sentence for connection' },
            { para: 6, text: '我坐在教室里发呆，忽然把这些事串在了一起', technique: '串联顿悟', techniqueEn: 'Pattern Recognition', effect: '发呆→串联——分散的善意在回忆中连成画面', effectEn: 'Scattered kindnesses suddenly connecting in a daydream — isolated dots forming a constellation' },
            { para: 7, text: '一件一件，像一朵一朵小花，不知不觉开满了我的身边', technique: '花的比喻', techniqueEn: 'Flower Metaphor', effect: '善意=花朵——不知不觉开满=春天在悄然中到来', effectEn: 'Each kindness a small flower blooming unnoticed — spring arriving not in one dramatic burst but petal by petal' },
            { para: 8, text: '窗外的树不知什么时候冒了新芽', technique: '自然呼应', techniqueEn: 'Natural Correspondence', effect: '新芽=外在印证——自然界的春天与人情的春天同步到来', effectEn: 'New buds on the trees confirming what the heart already discovered — nature\'s spring and human spring arriving together' },
            { para: 9, text: '我光顾着孤独，忘了抬头看', technique: '自省结尾', techniqueEn: 'Self-Reflective Close', effect: '"光顾着孤独"=主动选择孤独——问题在自己而非世界', effectEn: '"Too busy being lonely" — loneliness reframed as a choice, the narrator\'s own attention rather than the world\'s neglect' }
          ],
          approach: '转学后觉得一切都是冬天，慢慢发现新同学的善意就是春天。',
          approachEn: 'After transferring, everything feels like winter — gradually discovering classmates\' kindness is spring.',
          architecture: '转学的冬天→孤独的日子→同学们细小的善意→积累的温暖→原来春天在这里。',
          architectureEn: 'Transfer winter → lonely days → classmates\' tiny kindnesses → accumulated warmth → spring is here.',
          logic: '从孤独到被温暖。', logicEn: 'From loneliness to warmth.',
          skills: ['递进式发现', '善意细节丰富', '比喻贯穿'],
          skillsEn: ['Progressive discovery', 'Rich kindness details', 'Running metaphor'],
          fullText: '　　转学那天正好是冬天。灰蒙蒙的天，光秃秃的树，冷冷的风。跟这个陌生的学校一样，让人提不起精神。\n\n　　第一周，我像一块透明的玻璃。没人跟我说话，我也不知道怎么开口。课间大家聊得热火朝天，我低头翻书假装不在乎。午饭一个人吃，放学一个人走。\n\n　　可细想起来，也不是完全没人在意我。\n\n　　第三天，我找不到音乐教室，在走廊里转来转去。一个戴眼镜的男生路过，停下来问："你是新来的吧？跟我走，我也上音乐课。"他带我走了一段路，然后挥挥手就去了自己的座位。连名字都没问。\n\n　　第二周，数学课上我没带圆规。正发愁，桌上多了一把。回头看，后座的女生冲我笑了笑，什么也没说。\n\n　　第三周下雨，我没带伞。犹豫要不要冲出去时，旁边一把伞伸了过来："拼伞走吧。"是同桌，一个平时话不多的男孩。\n\n　　这些事都很小，小到当时我都没太在意。可一个月后的某天，我坐在教室里发呆，忽然把这些事串在了一起——带路的眼镜男、借圆规的女生、拼伞的同桌，还有食堂打饭时给我让位的不认识的同学，还有体育课上喊我"一起打球"的声音。\n\n　　一件一件，像一朵一朵小花，不知不觉开满了我的身边。\n\n　　窗外的树不知什么时候冒了新芽。我忽然觉得，冬天早就结束了。\n\n　　原来春天不是一下子到来的。它是一个带路的微笑，一把无声的圆规，一把雨中伸来的伞。它一直在我身边，只是我光顾着孤独，忘了抬头看。',
          fullTextEn: '　　Transfer day: winter. Gray sky, bare trees, cold wind. Like this strange school — spiritless.\n\n　　Week one: invisible as glass. Nobody spoke to me; I didn\'t know how to start. During breaks, everyone chatting animatedly while I flipped pages pretending not to care. Lunch alone, walked home alone.\n\n　　But looking back, it wasn\'t that nobody cared.\n\n　　Day three: couldn\'t find the music room, wandering the corridor. A bespectacled boy stopped: "You\'re new, right? Follow me, I\'m going to music too." Led me there, waved, and sat down. Didn\'t even ask my name.\n\n　　Week two: forgot my compass in math. While worrying, one appeared on my desk. Turning around: the girl behind smiled wordlessly.\n\n　　Week three: rain, no umbrella. Hesitating whether to dash — an umbrella extended beside me: "Share mine." My deskmate, a quiet boy.\n\n　　Each thing tiny — at the time I barely noticed. But one day a month later, sitting in class daydreaming, I strung them together: the bespectacled guide, the compass girl, the umbrella deskmate, plus the unknown student who yielded their cafeteria spot, the voice during PE calling "come play with us."\n\n　　One by one, like small flowers, unknowingly blooming all around me.\n\n　　The trees outside had sprouted new buds sometime unnoticed. I suddenly felt: winter had ended long ago.\n\n　　Spring doesn\'t arrive all at once. It\'s a guiding smile, a silent compass, an umbrella offered in rain. It was always beside me — I was just too busy being lonely to look up.',
          highlights: [
            { text: '我像一块透明的玻璃', textEn: 'Invisible as glass', why: '比喻孤独精准', whyEn: 'Precise loneliness metaphor' },
            { text: '一朵一朵小花，不知不觉开满了', textEn: 'One by one, like small flowers, unknowingly blooming all around me', why: '比喻串联优美', whyEn: 'Beautiful connecting metaphor' },
            { text: '光顾着孤独，忘了抬头看', textEn: 'Too busy being lonely to look up', why: '自省有力', whyEn: 'Powerful self-reflection' }
          ],
          sections: [
            { type: '起', fn: '冬天', fnEn: 'Winter', detail: '转学孤独', detailEn: 'Transfer loneliness' },
            { type: '承', fn: '细节', fnEn: 'Details', detail: '小善意', detailEn: 'Small kindnesses' },
            { type: '转', fn: '串联', fnEn: 'Connecting', detail: '发现规律', detailEn: 'Seeing the pattern' },
            { type: '合', fn: '春天', fnEn: 'Spring', detail: '一直在身边', detailEn: 'Always there' }
          ]
        },
        {
          title: '原来春天一直都在我身边', titleEn: 'Spring Was Always by My Side',
          score: 36, maxScore: 40, structure: 'zongFenZong',
          techniques: ['yiXiaoJianDa', 'xiJieMiaoXie', 'shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '春天是别人家的事', technique: '错觉开篇', techniqueEn: 'Illusion Opening', effect: '春天属于别人=自怜的起点——后文将逐一推翻', effectEn: 'Spring as other people\'s property — a self-pitying premise the essay will methodically dismantle' },
            { para: 1, text: '灰扑扑的，像永远下不完的雨', technique: '色彩比喻', techniqueEn: 'Color Metaphor', effect: '灰色+无尽雨——与"春天"的色彩形成最大反差', effectEn: 'Dusty gray and endless rain — maximum contrast against the colors of spring to come' },
            { para: 3, text: '领口磨毛了，袖口也起球了，但冬天穿上它总是特别暖和', technique: '物件矛盾', techniqueEn: 'Object Paradox', effect: '旧=不好看但暖=不舍——说不清的感情预设了后文的揭示', effectEn: 'Old and worn yet inexplicably warm — an attachment the narrator can\'t explain until Grandma reveals its origin' },
            { para: 4, text: '用了最好的毛线，织了整整两个月', technique: '隐藏的付出', techniqueEn: 'Hidden Labor', effect: '最好的材料+最长的时间——奶奶用行动说了从未说出口的话', effectEn: 'Best yarn, two full months — Grandma speaking through labor what she never said in words' },
            { para: 5, text: '忽然明白了它为什么特别暖', technique: '顿悟时刻', techniqueEn: 'Epiphany', effect: '物理的暖+情感的暖——双重含义在这一刻合一', effectEn: 'Physical warmth and emotional warmth — two meanings converging in a single realization' },
            { para: 6, text: '字迹工整，重点用彩笔标注，最后一页写着"赶紧好起来！"', technique: '细节叙事', techniqueEn: 'Detail Narration', effect: '工整+彩笔+祝福——三个细节证明这不是随手之作而是用心之举', effectEn: 'Neat writing, color-coded highlights, a wish for recovery — three details proving care, not mere duty' },
            { para: 6, text: '我从没拜托过她帮我抄笔记，她自己默默做了', technique: '主动善意', techniqueEn: 'Unprompted Kindness', effect: '"从没拜托"强调善意是自发的——最珍贵的帮助无需请求', effectEn: 'Never asked — the kindness was spontaneous, the most precious help being the help that requires no asking' },
            { para: 7, text: '你书包比我的重多了', technique: '轻描淡写', techniqueEn: 'Understatement', effect: '用书包重量作为理由——把善意包装成逻辑', effectEn: 'Using backpack weight as justification — wrapping kindness in logic so it\'s easier to accept' },
            { para: 8, text: '我身边从来不缺春天。缺的，是发现春天的眼睛', technique: '视角反转', techniqueEn: 'Perspective Reversal', effect: '从"没有春天"到"没有看见"——问题不在世界而在自己', effectEn: 'From "no spring" to "no eyes to see it" — the problem wasn\'t the world but the narrator\'s blindness' },
            { para: 9, text: '不声不响的、一针一线的、默默无言的温暖', technique: '三重修饰', techniqueEn: 'Triple Qualification', effect: '三个形容词重新定义春天=不声不响+一针一线+默默无言', effectEn: 'Three adjectives redefining spring — quiet, stitch-by-stitch, wordless — not spectacular but constant' }
          ],
          approach: '三个被忽视的"春天"：奶奶的毛衣、同桌的笔记、陌生人的让座。',
          approachEn: 'Three overlooked "springs": Grandma\'s sweater, deskmate\'s notes, a stranger\'s offered seat.',
          architecture: '总：我曾以为自己身边没有春天；事一：穿了三年的毛衣是奶奶织的；事二：生病请假时桌上的笔记；事三：公交车上的让座；总：春天是被忽视的爱。',
          architectureEn: 'Overview: I thought there was no spring around me. 1: Three-year sweater knitted by Grandma. 2: Notes left during sick days. 3: Bus seat offered. Summary: Spring is overlooked love.',
          logic: '三个平行事例证明主题。', logicEn: 'Three parallel examples proving the theme.',
          skills: ['以小见大', '选材典型', '总结有力'],
          skillsEn: ['Small-big theme', 'Typical examples', 'Powerful summary'],
          fullText: '　　我曾以为，春天是别人家的事。\n\n　　看到同学被父母接送、被老师表扬、被朋友围绕，我觉得他们的生活充满阳光，而我的——灰扑扑的，像永远下不完的雨。\n\n　　直到有一天，我开始留意那些被我忽视的角落。\n\n　　那件深蓝色毛衣我穿了三年。领口磨毛了，袖口也起球了，但冬天穿上它总是特别暖和。有一次妈妈要扔掉它，我死活不让。我也说不清为什么舍不得，只觉得这件毛衣跟别的不一样。\n\n　　后来奶奶来家里住了几天，看到我穿着它，笑得眼睛眯成一条缝："还穿着呢？这是你上初中那年我织的，用了最好的毛线，织了整整两个月。"\n\n　　我低头看看那件旧毛衣，忽然明白了它为什么特别暖——因为每一针每一线里，都藏着奶奶的心。\n\n　　初二请了三天病假，回到学校时发现桌上放着厚厚一叠笔记。字迹工整，重点用彩笔标注，最后一页写着"赶紧好起来！"。是同桌写的。我从没拜托过她帮我抄笔记，她自己默默做了。\n\n　　还有那次坐公交车。车上人挤人，我背着沉重的书包被挤得东倒西歪。一个穿校服的姐姐站起来让座，我说不用，她笑了笑："你书包比我的重多了。"她站了五站路才下车。\n\n　　一件毛衣，一沓笔记，一个座位。都是小事。但当我把它们放在一起，才发现——我身边从来不缺春天。缺的，是发现春天的眼睛。\n\n　　原来春天一直都在我身边。它不是轰轰烈烈的感动，而是那些不声不响的、一针一线的、默默无言的温暖。',
          fullTextEn: '　　I once thought spring was for other people.\n\n　　Classmates picked up by parents, praised by teachers, surrounded by friends — their lives full of sunshine. Mine? Dusty gray, like endless rain.\n\n　　Until one day, I started noticing overlooked corners.\n\n　　That navy sweater I\'d worn three years. Collar frayed, cuffs pilling, but always especially warm in winter. Once Mom tried to throw it out; I refused. Couldn\'t explain why — just felt it was different.\n\n　　Later Grandma visited. Seeing me in it, her eyes crinkled into slits: "Still wearing it? I knitted that when you started junior high — best yarn, two full months."\n\n　　Looking down at the old sweater, I suddenly understood its special warmth — every stitch held Grandma\'s heart.\n\n　　Eighth grade: three sick days. Returning to find a thick stack of notes on my desk. Neat handwriting, highlights in color, last page: "Get better soon!" My deskmate had done it unprompted.\n\n　　And that bus ride. Packed, my heavy bag making me sway. A girl in school uniform stood, offering her seat. I said no need. She smiled: "Your bag\'s way heavier than mine." She stood five more stops.\n\n　　A sweater, notes, a seat. Small things. But placed together, I realized: spring was never missing from my life. What was missing — were eyes to see it.\n\n　　Spring was always by my side. Not dramatic emotion, but quiet, stitch-by-stitch, wordless warmth.',
          highlights: [
            { text: '每一针每一线里，都藏着奶奶的心', textEn: 'Every stitch held Grandma\'s heart', why: '实写虚情', whyEn: 'Physical object, intangible love' },
            { text: '缺的，是发现春天的眼睛', textEn: 'What was missing were eyes to see spring', why: '点题精准', whyEn: 'Precise theme statement' },
            { text: '不声不响的、一针一线的', textEn: 'Quiet, stitch-by-stitch, wordless warmth', why: '排比定义春天', whyEn: 'Parallel defining spring' }
          ],
          sections: [
            { type: '总起', fn: '误解', fnEn: 'Misunderstanding', detail: '觉得没有春天', detailEn: 'No spring around me' },
            { type: '事一', fn: '毛衣', fnEn: 'Sweater', detail: '奶奶织的', detailEn: 'Knitted by Grandma' },
            { type: '事二', fn: '笔记', fnEn: 'Notes', detail: '同桌默默抄', detailEn: 'Deskmate\'s silent notes' },
            { type: '事三', fn: '让座', fnEn: 'Seat', detail: '陌生人的善', detailEn: 'Stranger\'s kindness' },
            { type: '总结', fn: '发现', fnEn: 'Discovery', detail: '春天一直在', detailEn: 'Spring always here' }
          ]
        },
        {
          title: '原来春天一直都在我身边', titleEn: 'Spring Was Always by My Side',
          score: 36, maxScore: 40, structure: 'daoXuShi',
          techniques: ['daoXu', 'xiJieMiaoXie', 'huanJingChenTuo'],
          techniqueMarks: [
            { para: 0, text: '在教学楼后面的角落发现了一棵开满花的杏树', technique: '意外发现', techniqueEn: 'Unexpected Discovery', effect: '角落+满花——最不起眼的地方藏着最盛大的美', effectEn: 'Full bloom in a forgotten corner — the most spectacular beauty hiding in the least-visited place' },
            { para: 1, text: '满树粉白的花瓣在阳光下像一片小小的云', technique: '环境比喻', techniqueEn: 'Environmental Simile', effect: '花=云——在地面上造出一片天空', effectEn: 'Blossoms as a small cloud — creating a sky at ground level' },
            { para: 2, text: '它不是今天才开花的，每年三月都开', technique: '时间揭示', techniqueEn: 'Temporal Revelation', effect: '每年都开但从未被看见——错过的不是花而是三年的春天', effectEn: 'Blooming every March unseen — what was missed wasn\'t one tree but three years of springs' },
            { para: 3, text: '总是低着头赶路', technique: '姿态概括', techniqueEn: 'Posture Summary', effect: '低头=忽视世界——一个身体姿态浓缩了三年的生活状态', effectEn: 'Head down, rushing — one bodily posture condensing three years of living' },
            { para: 3, text: '校园里有多少棵树、开了什么花、天上的云是什么形状——我从来不知道', technique: '排比否定', techniqueEn: 'Negative Enumeration', effect: '三个"不知道"——忙碌的代价是对周围世界的完全失知', effectEn: 'Three unknowns — trees, flowers, cloud shapes — the cost of busyness is total blindness to the surrounding world' },
            { para: 5, text: '食堂阿姨每次给我打饭时都会多盛一勺', technique: '隐形善意', techniqueEn: 'Invisible Kindness', effect: '多一勺=无声的关心——每天都在发生却从未被意识到', effectEn: 'An extra scoop every day — kindness so routine it became invisible' },
            { para: 5, text: '班主任每周五在黑板角落写的"周末愉快"', technique: '微小仪式', techniqueEn: 'Tiny Ritual', effect: '周末愉快四个字=从不缺席的温暖——潦草但从不遗忘', effectEn: 'Four characters every Friday, never missed — a teacher\'s small ritual of care, hurried but never forgotten' },
            { para: 6, text: '像这棵杏树一样，一直都在', technique: '类比收束', techniqueEn: 'Analogical Closure', effect: '人=杏树——善意和花一样安静地绽放', effectEn: 'People like the apricot tree — kindness blooming as quietly as flowers' },
            { para: 7, text: '几片花瓣落在我肩上。我拿起一片放在掌心', technique: '触觉转化', techniqueEn: 'Tactile Transformation', effect: '花瓣在掌心=春天从视觉变为触觉——从"看到"到"拥有"', effectEn: 'A petal in the palm — spring shifting from sight to touch, from witnessing to possessing' },
            { para: 8, text: '不是它不够明亮，是我一直没有停下来看', technique: '自省结尾', techniqueEn: 'Self-Reflective Closing', effect: '否定+肯定——不是春天的问题而是自己的问题', effectEn: 'Not spring\'s failure but the narrator\'s — the blame shifted inward, completing the arc of self-discovery' }
          ],
          approach: '倒叙：从发现校园角落的花开始，回忆忙碌中忽视的美好，最终理解春天的含义。',
          approachEn: 'Flashback from discovering campus flowers, recalling overlooked beauty, understanding spring\'s meaning.',
          architecture: '现在：发现角落的花→回忆：一直赶路没注意→过去的"春天"浮现→回到现在：春天不用寻找。',
          architectureEn: 'Present: Finding flowers. Flashback: Always rushing. Past "springs" resurface. Return to present: Spring needs no searching.',
          logic: '倒叙揭示忽视的美好。', logicEn: 'Flashback reveals neglected beauty.',
          skills: ['倒叙制造悬念', '环境描写', '由景及情'],
          skillsEn: ['Flashback suspense', 'Environmental writing', 'Scenery to emotion'],
          fullText: '　　三月的一个下午，我在教学楼后面的角落发现了一棵开满花的杏树。\n\n　　满树粉白的花瓣在阳光下像一片小小的云。蜜蜂嗡嗡地飞来飞去，空气里弥漫着淡淡的甜香。我站在树下仰头看了很久，觉得美得不真实。\n\n　　可这棵树一直都在这里。它不是今天才开花的，每年三月都开。只是我从来没有走到这个角落来过。\n\n　　想想看，初中三年，我每天从教学楼到食堂、从食堂到宿舍、从宿舍到教室，总是低着头赶路。眼睛盯着手机或者书本，耳朵里塞着耳机或者背单词的声音。校园里有多少棵树、开了什么花、天上的云是什么形状——我从来不知道。\n\n　　不只是花。我忽然想起很多被我忽视的东西。\n\n　　食堂阿姨每次给我打饭时都会多盛一勺，笑着说"小伙子多吃点"。门卫大爷下雨天会把一把备用伞放在传达室门口。班主任每周五在黑板角落写的"周末愉快"四个字，字迹越来越潦草，但从没漏过。\n\n　　这些人和事，像这棵杏树一样，一直都在。只是我太忙了，忙到觉得世界只剩下试卷和分数。\n\n　　一阵风吹过，几片花瓣落在我肩上。我拿起一片放在掌心——薄薄的，轻轻的，带着一点点温度。\n\n　　原来春天一直都在我身边。不是它不够明亮，是我一直没有停下来看。',
          fullTextEn: '　　One March afternoon, I found an apricot tree in full bloom behind the teaching building.\n\n　　Pink-white petals like a small cloud in sunlight. Bees humming, air sweet with faint fragrance. I stood under the tree looking up for a long time — too beautiful to seem real.\n\n　　But this tree had always been here. Not blooming just today — every March. I\'d simply never walked to this corner.\n\n　　Think about it: three years of junior high, daily paths from building to cafeteria, cafeteria to dorm, dorm to classroom — always head down, rushing. Eyes on phone or textbook, ears plugged with music or vocabulary recordings. How many campus trees? What flowers? Cloud shapes? I never knew.\n\n　　Not just flowers. I suddenly recalled many overlooked things.\n\n　　The cafeteria auntie always served me an extra scoop: "Eat more, young man." The security guard placed a spare umbrella at the gatehouse on rainy days. My teacher wrote "Happy Weekend" in the board corner every Friday — handwriting increasingly rushed but never once missed.\n\n　　These people and moments, like this apricot tree — always there. I was just too busy, busy until the world shrank to tests and scores.\n\n　　A breeze blew; petals landed on my shoulder. I placed one in my palm — thin, light, carrying a trace of warmth.\n\n　　Spring was always by my side. Not that it wasn\'t bright enough — I just never stopped to look.',
          highlights: [
            { text: '它不是今天才开花的', textEn: 'It wasn\'t blooming just today', why: '点明"一直都在"', whyEn: 'Highlights "always there"' },
            { text: '字迹越来越潦草，但从没漏过', textEn: 'Handwriting increasingly rushed but never once missed', why: '细节见坚持', whyEn: 'Detail shows persistence' },
            { text: '不是它不够明亮，是我没有停下来', textEn: 'Not that spring wasn\'t bright enough — I just never stopped to look', why: '收束有力', whyEn: 'Powerful closing' }
          ],
          sections: [
            { type: '现在', fn: '发现', fnEn: 'Discovery', detail: '角落的花', detailEn: 'Corner flowers' },
            { type: '回忆', fn: '忙碌', fnEn: 'Busyness', detail: '低头赶路', detailEn: 'Head-down rushing' },
            { type: '联想', fn: '细节', fnEn: 'Details', detail: '被忽视的善意', detailEn: 'Overlooked kindnesses' },
            { type: '回到现在', fn: '领悟', fnEn: 'Insight', detail: '春天不用找', detailEn: 'Spring needs no searching' }
          ]
        },
        {
          title: '原来春天一直都在我身边', titleEn: 'Spring Was Always by My Side',
          score: 36, maxScore: 40, structure: 'qiChengZhuanHe',
          techniques: ['xinLiMiaoXie', 'biYu', 'duiBi'],
          techniqueMarks: [
            { para: 0, text: '初三的天空像一块洗不干净的灰布', technique: '比喻定调', techniqueEn: 'Tonal Metaphor', effect: '灰布=无法清洗的压抑——不是没有天空而是天空本身变灰', effectEn: 'A gray cloth that won\'t wash clean — not an absent sky but a sky that has itself turned gray' },
            { para: 1, text: '操场上的草绿了黄了又绿了，我只在上厕所经过走廊时瞄过几眼', technique: '时间压缩', techniqueEn: 'Time Compression', effect: '一句话=一个学年的季节轮回——"瞄几眼"道出错过的程度', effectEn: 'An entire year\'s seasonal cycle in one sentence — "glimpsed while passing the bathroom" measuring the depth of disconnection' },
            { para: 3, text: '娃子，忙不？', technique: '方言入文', techniqueEn: 'Dialect Entry', effect: '"娃子"=乡村语气——爷爷的声音自带泥土气息', effectEn: '"Hey kiddo" in country dialect — Grandpa\'s voice carrying the scent of soil and home' },
            { para: 5, text: '门口那棵桃树开花了，满树都是', technique: '远方春天', techniqueEn: 'Distant Spring', effect: '电话另一端的桃花=触不到的美好——声音传递风景', effectEn: 'Peach blossoms on the other end of the phone — beauty conveyed through voice alone, untouchable yet vivid' },
            { para: 5, text: '一瓣花掉到我头上。你小时候也喜欢坐在那棵树下', technique: '跨时空连接', techniqueEn: 'Cross-Temporal Link', effect: '花瓣+童年记忆——爷爷用一个细节把过去和现在连起来', effectEn: 'A petal and a childhood memory — Grandpa bridging past and present with a single detail' },
            { para: 7, text: '黄灿灿一片，好看得很。燕子也回来了', technique: '声音画面', techniqueEn: 'Audio-Visual', effect: '电话里的春天像一幅展开的画卷——听觉变成视觉', effectEn: 'Spring unfolding like a scroll through the phone — hearing transformed into seeing' },
            { para: 8, text: '我已经多久没看过花开了？多久没抬头看过天空了？', technique: '连续追问', techniqueEn: 'Serial Self-Questioning', effect: '两个"多久"=自我质问——忙碌遮蔽的不只是花而是整个世界', effectEn: 'Two "how long" questions — self-interrogation revealing that busyness hid not just flowers but the entire world' },
            { para: 9, text: '树枝上好像有什么东西在发亮——是新芽', technique: '发现时刻', techniqueEn: 'Moment of Discovery', effect: '破折号后的两个字"新芽"=在自己窗外找到了爷爷描述的春天', effectEn: 'A dash then two words — new buds — finding Grandpa\'s described spring right outside one\'s own window' },
            { para: 10, text: '爷爷那边有桃花和油菜花，我这边有新芽和路灯下的树影', technique: '远近对照', techniqueEn: 'Near-Far Pairing', effect: '两个"有"——远方和身边的春天对称呈现', effectEn: 'Grandpa has blossoms; I have buds — two springs, distant and near, presented in symmetry' },
            { para: 11, text: '我在日记本上画了一朵小花。然后继续写作业', technique: '轻笔结尾', techniqueEn: 'Light-Touch Ending', effect: '画花+继续写作业——生活没变但心境变了', effectEn: 'Drawing a flower then returning to homework — life unchanged but the heart quietly shifted' }
          ],
          approach: '学习压力下觉得生活没有色彩，一次和爷爷的通话让我重新发现生活中的春天。',
          approachEn: 'Under academic pressure, life feels colorless — a phone call with Grandpa helps rediscover spring.',
          architecture: '起：灰色的初三；承：爷爷打来电话；转：爷爷描述老家的春天；合：身边也有春天。',
          architectureEn: 'Open: Gray ninth grade. Develop: Grandpa calls. Turn: Grandpa describes hometown spring. Close: Spring is here too.',
          logic: '从他方春天到此处春天。', logicEn: 'From distant spring to spring right here.',
          skills: ['电话对话生动', '远近对比', '结尾温暖'],
          skillsEn: ['Vivid phone dialogue', 'Near-far contrast', 'Warm ending'],
          fullText: '　　初三的天空像一块洗不干净的灰布，怎么看都不透亮。\n\n　　每天六点起床，十一点睡觉，中间全是书本和试卷。操场上的草绿了黄了又绿了，我只在上厕所经过走廊时瞄过几眼。连周末都在补课，我觉得自己的生活没有颜色。\n\n　　那天晚上写作业写到头昏脑涨，手机响了。是爷爷。\n\n　　"娃子，忙不？"爷爷的声音像往常一样慢悠悠的。\n\n　　"忙，写作业呢。"我有点不耐烦。\n\n　　"跟你说个事。"爷爷好像没听出我的不耐烦，"门口那棵桃树开花了，满树都是。今天早上我搬了把椅子坐在树下晒太阳，一瓣花掉到我头上。你小时候也喜欢坐在那棵树下，还记不记得？"\n\n　　我记得。小时候每年春天去爷爷家，那棵桃树下铺满了粉色的花瓣。我在花瓣上打滚，爷爷在旁边笑。\n\n　　"还有，"爷爷接着说，"田里的油菜花也开了。黄灿灿一片，好看得很。燕子也回来了，在咱家屋檐下又垒了窝。"\n\n　　听着爷爷描述那些春天的画面，我心里忽然酸酸的。我已经多久没看过花开了？多久没抬头看过天空了？\n\n　　挂了电话，我走到窗前。夜色中，路灯把树影投在地上，风轻轻吹过，树枝上好像有什么东西在发亮——是新芽。\n\n　　我笑了。爷爷那边有桃花和油菜花，我这边有新芽和路灯下的树影。春天不在远方，也不只在老家。它一直在我身边，只是我被试卷遮住了眼睛。\n\n　　那天晚上，我在日记本上画了一朵小花。然后继续写作业。但心情好了很多。',
          fullTextEn: '　　Ninth grade\'s sky: a gray cloth that wouldn\'t wash clean.\n\n　　Up at six, asleep at eleven, everything between was books and tests. Playground grass turned green, yellow, green again — I only glimpsed it passing the corridor to the bathroom. Even weekends meant tutoring. My life had no color.\n\n　　One evening, homework frying my brain, my phone rang. Grandpa.\n\n　　"Hey kiddo, busy?" His voice slow and easy as always.\n\n　　"Busy. Homework." Slightly impatient.\n\n　　"Let me tell you something." He didn\'t seem to notice. "The peach tree by the door bloomed. Covered in blossoms. This morning I sat under it in the sun — a petal landed on my head. You used to love sitting under that tree. Remember?"\n\n　　I remembered. Every spring visiting Grandpa, that tree carpeted in pink petals. I\'d roll in them; Grandpa laughed nearby.\n\n　　"Also," he continued, "the rapeseed is blooming. Golden carpet, beautiful. Swallows returned too — nesting under our eaves again."\n\n　　Listening to his spring scenes, a sudden ache. How long since I watched flowers bloom? Since I looked up at the sky?\n\n　　Hanging up, I walked to the window. In the darkness, streetlights cast tree shadows on the ground. Wind rustled branches where something glinted — new buds.\n\n　　I smiled. Grandpa had peach blossoms and rapeseed. I had new buds and tree shadows under streetlights. Spring isn\'t far away or only in the village. It was always beside me — I\'d just let test papers cover my eyes.\n\n　　That night I drew a small flower in my diary. Then continued homework. But feeling much better.',
          highlights: [
            { text: '天空像一块洗不干净的灰布', textEn: 'A gray cloth that wouldn\'t wash clean', why: '比喻压抑精准', whyEn: 'Precise oppression metaphor' },
            { text: '一瓣花掉到我头上', textEn: 'A petal landed on my head', why: '电话里的春天跃然', whyEn: 'Spring leaping through the phone' },
            { text: '被试卷遮住了眼睛', textEn: 'Test papers covering my eyes', why: '扣题自然', whyEn: 'Natural theme connection' }
          ],
          sections: [
            { type: '起', fn: '灰色', fnEn: 'Gray', detail: '初三无色彩', detailEn: 'Colorless ninth grade' },
            { type: '承', fn: '电话', fnEn: 'Phone call', detail: '爷爷描述春天', detailEn: 'Grandpa describes spring' },
            { type: '转', fn: '触动', fnEn: 'Touched', detail: '想起花开', detailEn: 'Remembering blossoms' },
            { type: '合', fn: '发现', fnEn: 'Discovery', detail: '身边也有春天', detailEn: 'Spring is here too' }
          ]
        }
      ]
    },
    {
      id: 'yn2012_comp1',
      paperId: 'yn2012',
      year: 2012,
      region: '云南省',
      prompt: '请以"班里那点事"为题，写一篇文章。要求：立意自定，文体自选（诗歌除外）；说真话，抒真情，忌抄袭；文中不要使用真实的地名、校名、人名；书写工整，不少于600字。',
      promptEn: 'Write an essay titled "Those Little Things in Our Class". Requirements: choose your own theme and genre (except poetry); be sincere and authentic; do not use real names; at least 600 words.',
      type: 'narrative',
      category: '记叙文',
      categoryEn: 'Narrative',
      wordCount: 600,
      guide: {
        analysis: '"班里那点事"题目亲切自然，"那点事"暗示日常小事中蕴含深意。可写同学间的友情、师生情谊、班级趣事或成长故事。关键在于以小见大，从平凡中挖掘感动。',
        analysisEn: 'The title "Those Little Things in Our Class" is warm and natural. "Those little things" suggests finding deeper meaning in everyday events. Write about friendships, teacher-student bonds, class humor, or growth stories. The key is finding significance in the ordinary.',
        keyPoints: ['选材要真实，来自校园生活', '以小见大，从小事中悟出道理', '人物刻画要鲜明生动', '情感真挚，避免空洞叙述'],
        keyPointsEn: ['Choose authentic school life material', 'Find big meaning in small events', 'Create vivid character portrayals', 'Express genuine emotions, avoid hollow narration'],
        pitfalls: ['流水账式叙述无重点', '编造脱离校园实际的故事', '只叙事不抒情不议论'],
        pitfallsEn: ['Unfocused chronological listing', 'Fabricating unrealistic stories', 'Only narrating without reflection']
      },
      essays: [
        {
          title: '班里那点事', titleEn: 'Those Little Things in Our Class',
          score: 47, maxScore: 50,
          structure: 'pianDuanZuHe',
          techniques: ['xiJieMiaoXie','duiBi','yiWuShuQing'],
          techniqueMarks: [
            { para: 0, text: '日历一页页翻薄，我却总忍不住回头看', technique: '时间对比', techniqueEn: 'Temporal Contrast', effect: '日历向前翻vs人回头看——物理时间与心理时间背道而驰', effectEn: 'The calendar thins forward while the narrator keeps looking back — physical and emotional time moving in opposite directions' },
            { para: 0, text: '藏在课桌缝里的小事', technique: '空间隐喻', techniqueEn: 'Spatial Metaphor', effect: '课桌缝=记忆的夹层——小事像碎片藏在校园的物理空间里', effectEn: 'Desk cracks as memory\'s hiding place — little things lodged in the physical crevices of school life' },
            { para: 1, text: '一张折成三角形的纸条悄悄滑过来', technique: '动作细节', techniqueEn: 'Action Detail', effect: '三角形+悄悄滑——校园社交的独特仪式感', effectEn: 'A triangle-folded note sliding quietly across — the unique ritual of classroom-era communication' },
            { para: 1, text: '字迹歪歪扭扭，却让我鼻子一酸', technique: '缺陷温暖', techniqueEn: 'Warmth in Imperfection', effect: '歪扭字迹=真诚——写得不好反而更动人', effectEn: 'Crooked handwriting stirring tears — sincerity measured by the messiness of the script' },
            { para: 2, text: '声浪一波接一波', technique: '听觉推进', techniqueEn: 'Auditory Surge', effect: '声浪=波浪——声音变成了可以感受到的物理冲击', effectEn: 'Waves of sound — hearing transformed into physical force pushing the runner forward' },
            { para: 2, text: '所有人脸上的笑容比金牌还闪亮', technique: '价值反转', techniqueEn: 'Value Reversal', effect: '笑容>金牌——重新定义了"赢"', effectEn: 'Smiles outshining gold medals — redefining victory from placement to collective joy' },
            { para: 3, text: '平时最懒的张伟主动去擦窗户，爬上爬下满头是汗', technique: '反常行为', techniqueEn: 'Out-of-Character Action', effect: '最懒的人最积极——离别让人变了', effectEn: 'The laziest student volunteering first — impending farewell transforming character' },
            { para: 3, text: '有人在黑板上偷偷写下"三年二班，永远的家"，谁也没舍得擦掉', technique: '匿名留言', techniqueEn: 'Anonymous Message', effect: '偷偷写+没人擦——全班在沉默中达成共识', effectEn: 'Secretly written, never erased — an unspoken consensus among forty-three people' },
            { para: 3, text: '洒在干干净净的课桌上，也洒在每个人微红的眼眶里', technique: '双关阳光', techniqueEn: 'Sunlight Double Meaning', effect: '阳光同时照亮课桌和泪眼——实景与情感在一束光中合一', effectEn: 'Sunlight falling on clean desks and reddened eyes simultaneously — scene and sentiment unified in one beam of light' },
            { para: 4, text: '把四十三颗心拧成了一股绳', technique: '具象凝聚', techniqueEn: 'Concrete Cohesion', effect: '四十三颗心+一股绳——数字精确到让人心疼', effectEn: 'Forty-three hearts twisted into one rope — the precise number making the abstraction ache' }
          ],
          approach: '以三个片段组合展现班级温情：课间的纸条传递、运动会的集体呐喊、毕业前的大扫除。',
          approachEn: 'Three vignettes showing class warmth: passing notes between classes, cheering together at sports day, the final cleanup before graduation.',
          architecture: '开头：即将毕业的感慨→片段一：纸条事件→片段二：运动会→片段三：大扫除→结尾：这些小事最珍贵',
          architectureEn: 'Opening: pre-graduation sentiment → Vignette 1: note-passing → Vignette 2: sports day → Vignette 3: cleanup → Ending: these little things are most precious',
          logic: '以时间为暗线，串联三个场景，层层递进情感浓度，最终升华为对集体的珍惜。',
          logicEn: 'Time as a hidden thread connecting three scenes, building emotional intensity, culminating in cherishing the collective.',
          skills: ['片段组合结构紧凑', '细节描写传神', '结尾点题升华'],
          skillsEn: ['Compact vignette structure', 'Vivid detail writing', 'Ending elevates the theme'],
          fullText: '初三了，教室里的日历一页页翻薄，我却总忍不住回头看——看那些藏在课桌缝里的小事。\n\n那是初一的冬天。数学考砸了，我趴在桌上不想说话。一张折成三角形的纸条悄悄滑过来，打开一看：\u201c别难过，下次我们一起复习！——你的同桌\u201d字迹歪歪扭扭，却让我鼻子一酸。后来我们真的每天放学留下来互相讲题，期末她进步了二十名，我也稳住了成绩。那张纸条，我一直夹在日记本里。\n\n初二运动会，我们班的接力赛排在最后。前三棒落后了半圈，全班同学自发站到跑道边，喊得嗓子都哑了。\u201c加油！加油！\u201d声浪一波接一波。最后一棒的李明像是被声音推着跑，竟然在最后五十米超过了两个人。我们没拿第一，但那天所有人脸上的笑容比金牌还闪亮。\n\n最难忘的是上周的大扫除。毕业在即，班主任说\u201c把教室打扫干净，留给学弟学妹\u201d。平时最懒的张伟主动去擦窗户，爬上爬下满头是汗。小文蹲在地上一块砖一块砖地刷，膝盖上沾满了灰。有人在黑板上偷偷写下\u201c三年二班，永远的家\u201d，谁也没舍得擦掉。阳光照进来，洒在干干净净的课桌上，也洒在每个人微红的眼眶里。\n\n班里那点事，说起来都不大——一张纸条，几声呐喊，一次扫除。可正是这些芝麻绿豆的小事，把四十三颗心拧成了一股绳。多年以后，也许我会忘记课本上的公式，却一定忘不了这间教室里，那些微不足道又无比珍贵的\u201c那点事\u201d。',
          fullTextEn: 'In ninth grade, as the classroom calendar grows thinner page by page, I can\'t help looking back—at those little things hidden in the cracks of our desks.\n\nIt was winter of seventh grade. After bombing a math test, I slumped on my desk, not wanting to talk. A note folded into a triangle slid quietly toward me. Opening it, I read: "Don\'t be sad. Let\'s review together next time! —Your deskmate." The handwriting was crooked, but it made my nose sting. After that, we really did stay after school every day to explain problems to each other. By finals, she\'d jumped twenty places, and I\'d steadied my grades. That note is still tucked in my diary.\n\nAt the eighth-grade sports meet, our class relay was last. After three legs, we trailed by half a lap. Classmates spontaneously lined the track, shouting themselves hoarse. "Go! Go!" Waves of sound rolled on and on. Li Ming, running anchor, seemed propelled by the noise—he actually passed two runners in the final fifty meters. We didn\'t win gold, but everyone\'s smile that day shone brighter than any medal.\n\nMost unforgettable was last week\'s big cleanup. With graduation approaching, our homeroom teacher said, "Clean the classroom nicely for the younger students." Zhang Wei, usually the laziest, volunteered to wash windows, climbing up and down, dripping with sweat. Xiao Wen knelt on the floor scrubbing tile by tile, knees covered in dust. Someone secretly wrote "Class 2, Grade 3—forever our home" on the blackboard, and nobody could bear to erase it. Sunlight streamed in, falling on the spotless desks and on everyone\'s slightly reddened eyes.\n\nThose little things in our class were never big—a note, some cheering, one cleanup. Yet it was precisely these tiny matters that bound forty-three hearts into one rope. Years from now, I may forget textbook formulas, but I will never forget those insignificant yet infinitely precious "little things" in this classroom.',
          highlights: [
            { text: '把四十三颗心拧成了一股绳', textEn: 'Binding forty-three hearts into one rope', why: '比喻精妙，集体凝聚力跃然纸上', whyEn: 'Brilliant metaphor bringing collective unity to life' },
            { text: '洒在干干净净的课桌上，也洒在每个人微红的眼眶里', textEn: 'Falling on the spotless desks and on everyone\'s slightly reddened eyes', why: '一语双关，阳光既是实景也是情感', whyEn: 'Double meaning—sunlight as both scene and emotion' }
          ],
          sections: [
            { type: '起', fn: '引入', fnEn: 'Introduction', detail: '即将毕业回望', detailEn: 'Looking back before graduation' },
            { type: '片段一', fn: '纸条', fnEn: 'The note', detail: '互助友情', detailEn: 'Mutual-help friendship' },
            { type: '片段二', fn: '运动会', fnEn: 'Sports day', detail: '集体力量', detailEn: 'Collective strength' },
            { type: '片段三', fn: '大扫除', fnEn: 'Cleanup', detail: '离别温情', detailEn: 'Farewell warmth' },
            { type: '合', fn: '点题', fnEn: 'Theme', detail: '小事最珍贵', detailEn: 'Little things are most precious' }
          ]
        },
        {
          title: '班里那点事', titleEn: 'Those Little Things in Our Class',
          score: 45, maxScore: 50,
          structure: 'zongFenZong',
          techniques: ['yuYanMiaoXie','xinLiMiaoXie','xuanNian'],
          techniqueMarks: [
            { para: 1, text: '我被分到正方——"利大于弊"，可我心里其实觉得网络害处不少', technique: '立场矛盾', techniqueEn: 'Stance Contradiction', effect: '被分配到不同意的一方——内心冲突预设了后续的认知转变', effectEn: 'Assigned to argue a position he privately opposes — the inner conflict foreshadowing cognitive transformation' },
            { para: 2, text: '我渐渐发现，网络的好处比我想象的多得多', technique: '认知裂变', techniqueEn: 'Cognitive Shift', effect: '准备辩论的过程改变了偏见——手段（辩论）教育了目的（理解）', effectEn: 'Preparing arguments changed his own mind — the means (debate) educating the purpose (understanding)' },
            { para: 3, text: '请问对方辩友，你查资料是用百度还是翻字典？', technique: '反问利器', techniqueEn: 'Rhetorical Counter-Strike', effect: '用对手的行为反驳对手的观点——辩论术的精髓', effectEn: 'Using the opponent\'s own behavior to refute their argument — the essence of debate craft' },
            { para: 3, text: '反方的林晓慧突然站起来说了一段亲身经历——她表哥因为沉迷网络辍了学', technique: '真情突入', techniqueEn: 'Real-Life Irruption', effect: '个人故事打破辩论套路——真实比技巧更有力', effectEn: 'A personal story shattering debate formulas — authentic experience more powerful than any argument technique' },
            { para: 3, text: '教室安静了几秒，连我方都不忍心反驳', technique: '共情沉默', techniqueEn: 'Empathetic Silence', effect: '沉默=尊重——辩论在人性面前自动暂停', effectEn: 'Silence as respect — the debate automatically pausing before human pain' },
            { para: 4, text: '今天没有输赢，你们每个人都赢了', technique: '教师点评', techniqueEn: 'Teacher\'s Verdict', effect: '取消胜负——老师重新定义了"赢"的含义', effectEn: 'Abolishing winners and losers — the teacher redefining what "winning" means' },
            { para: 4, text: '赢在认真思考，赢在尊重对手', technique: '双重界定', techniqueEn: 'Dual Definition', effect: '两个"赢在"——思考和尊重才是真正的胜利', effectEn: 'Two kinds of winning — thinking seriously and respecting opponents as the true victory conditions' },
            { para: 4, text: '我看到林晓慧眼里有泪光，走过去拍了拍她的肩膀', technique: '跨阵营关怀', techniqueEn: 'Cross-Side Compassion', effect: '正方安慰反方——辩论结束后人与人的连接重建', effectEn: 'The affirmative side comforting the negative — human connection rebuilt once the debate ends' },
            { para: 5, text: '班里再也没有人因为观点不同就嘲笑别人', technique: '行为改变', techniqueEn: 'Behavioral Change', effect: '一场辩论改变了班风——"那点事"的长远影响', effectEn: 'One debate transforming class culture — the lasting impact of one "little thing"' },
            { para: 5, text: '比对错更重要的，是倾听和尊重', technique: '哲理总结', techniqueEn: 'Philosophical Summary', effect: '超越辩题本身——从网络利弊升华到人际智慧', effectEn: 'Transcending the debate topic — from internet pros and cons to interpersonal wisdom' }
          ],
          approach: '围绕一次班级辩论赛展开，通过赛前准备、赛中交锋、赛后反思三个阶段展现团队协作和思想碰撞。',
          approachEn: 'Centers on a class debate competition, showing teamwork and intellectual clash through preparation, the debate itself, and post-event reflection.',
          architecture: '总起：班里最热闹的事→分述：准备阶段的分歧→辩论的精彩→意外的结局→总结：辩论教会我们尊重',
          architectureEn: 'General opening: the liveliest class event → Detail: disagreements in preparation → Debate highlights → Unexpected ending → Summary: debate taught us respect',
          logic: '以一场辩论赛为线索，展现同学间从分歧到理解的过程，传达尊重不同观点的主题。',
          logicEn: 'Using a debate as the thread, showing classmates\' journey from disagreement to understanding, conveying the theme of respecting different viewpoints.',
          skills: ['对话推动情节', '心理描写细腻', '主题升华自然'],
          skillsEn: ['Dialogue drives plot', 'Nuanced psychological description', 'Natural theme elevation'],
          fullText: '要说班里最热闹的事，非那场辩论赛莫属。\n\n语文老师宣布要举行班级辩论赛，辩题是\u201c网络对中学生利大于弊还是弊大于利\u201d。全班炸开了锅，每个人都觉得自己有理。我被分到正方——\u201c利大于弊\u201d，可我心里其实觉得网络害处不少。\n\n准备阶段，我们组吵得不可开交。小陈说要从学习资源角度切入，小赵坚持要讲信息获取的便利。我烦躁地说：\u201c你们能不能统一一下？\u201d组长王芳拍了拍桌子：\u201c都别吵，把观点列出来，找最有说服力的。\u201d那天下午，我们围坐在一起，白纸上密密麻麻写满了论据。我渐渐发现，网络的好处比我想象的多得多。\n\n辩论那天，教室后排挤满了来\u201c看热闹\u201d的同学。反方一辩开门见山：\u201c网络游戏让多少青少年荒废学业！\u201d我方小陈不慌不忙站起来：\u201c请问对方辩友，你查资料是用百度还是翻字典？\u201d全场哄笑。辩论越来越激烈，双方你来我往，引经据典。反方的林晓慧突然站起来说了一段亲身经历——她表哥因为沉迷网络辍了学。教室安静了几秒，连我方都不忍心反驳。\n\n最后老师没有宣布胜负。她说：\u201c今天没有输赢，你们每个人都赢了——赢在认真思考，赢在尊重对手。\u201d我看到林晓慧眼里有泪光，走过去拍了拍她的肩膀：\u201c你说得真好。\u201d她笑了笑：\u201c你们也是。\u201d\n\n那场辩论赛之后，班里再也没有人因为观点不同就嘲笑别人。这大概就是班里那点事教给我们的——比对错更重要的，是倾听和尊重。',
          fullTextEn: 'If you ask about the liveliest event in our class, it was definitely that debate.\n\nOur Chinese teacher announced a class debate: "Does the internet benefit or harm middle school students more?" The class erupted—everyone thought they were right. I was assigned to the affirmative—"benefits outweigh harms"—though privately I felt the internet caused plenty of problems.\n\nDuring preparation, our group argued fiercely. Xiao Chen wanted to focus on learning resources; Xiao Zhao insisted on information accessibility. Frustrated, I said, "Can you please agree on something?" Team leader Wang Fang slapped the desk: "Stop arguing. List all points and find the most persuasive ones." That afternoon, we sat together, filling sheets of paper with arguments. Gradually, I discovered the internet\'s benefits far exceeded what I\'d imagined.\n\nOn debate day, students packed the back rows to "watch the show." The opposition\'s first speaker went straight to the point: "How many teenagers have wasted their studies because of online games!" Our Xiao Chen stood up calmly: "May I ask the opposing side—do you use Baidu or flip through a dictionary to look things up?" The whole room laughed. The debate grew increasingly intense, both sides quoting evidence. Then Lin Xiaohui from the opposition suddenly stood and shared a personal story—her cousin had dropped out of school due to internet addiction. The classroom fell silent for several seconds; even our side couldn\'t bring ourselves to rebut.\n\nIn the end, the teacher didn\'t declare a winner. She said: "There are no losers today. You all won—by thinking seriously and respecting your opponents." I saw tears glistening in Lin Xiaohui\'s eyes, walked over and patted her shoulder: "You spoke really well." She smiled: "So did you."\n\nAfter that debate, nobody in our class ever mocked someone for having a different opinion. That\'s perhaps what those little class things taught us—more important than being right or wrong is listening and respect.',
          highlights: [
            { text: '比对错更重要的，是倾听和尊重', textEn: 'More important than being right or wrong is listening and respect', why: '结尾哲理升华，点明主题', whyEn: 'Philosophical ending that crystallizes the theme' },
            { text: '请问对方辩友，你查资料是用百度还是翻字典', textEn: 'May I ask — do you use Baidu or flip through a dictionary to look things up?', why: '机智反问，体现辩论语言特色', whyEn: 'Witty retort showcasing debate-style language' }
          ],
          sections: [
            { type: '总起', fn: '引出', fnEn: 'Hook', detail: '最热闹的事', detailEn: 'The liveliest event' },
            { type: '分', fn: '准备', fnEn: 'Preparation', detail: '组内分歧到统一', detailEn: 'From disagreement to unity' },
            { type: '分', fn: '交锋', fnEn: 'Clash', detail: '激烈辩论', detailEn: 'Intense debate' },
            { type: '分', fn: '转折', fnEn: 'Turn', detail: '真实故事打动全场', detailEn: 'Real story moves everyone' },
            { type: '总结', fn: '升华', fnEn: 'Elevation', detail: '尊重比对错重要', detailEn: 'Respect matters more than being right' }
          ]
        },
        {
          title: '班里那点事', titleEn: 'Those Little Things in Our Class',
          score: 46, maxScore: 50,
          structure: 'qiChengZhuanHe',
          techniques: ['huanjingMiaoXie','dongZuoMiaoXie','shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '全班欢呼，只有我的心沉了下去', technique: '反向开篇', techniqueEn: 'Counter-Opening', effect: '欢呼vs下沉——一个人逆所有人的情绪', effectEn: 'The whole class cheers while one heart sinks — a single person swimming against the emotional current' },
            { para: 1, text: '被合唱团"请"出来的经历', technique: '讽刺引号', techniqueEn: 'Ironic Quotation Marks', effect: '"请"=赶走——一个引号装下全部屈辱', effectEn: 'Quotation marks around "excused" — one punctuation mark containing an entire childhood humiliation' },
            { para: 2, text: '我却只敢蠕动嘴唇做做样子', technique: '对比动作', techniqueEn: 'Contrasting Action', effect: '大家张口vs我蠕动嘴唇——融入与隔离的距离只差一个音量', effectEn: 'Everyone singing out versus lip-syncing — the distance between belonging and isolation measured in decibels' },
            { para: 2, text: '我的声音像被掐住的鸭子', technique: '自嘲比喻', techniqueEn: 'Self-Deprecating Simile', effect: '掐住的鸭子——自嘲中有辛酸', effectEn: 'A strangled duck — self-mockery laced with genuine hurt' },
            { para: 3, text: '刘洋忍住笑："没关系，这个音你小声唱，其他部分大声唱，保证听不出来"', technique: '实用智慧', techniqueEn: 'Practical Wisdom', effect: '不说"你能行"而给出具体方案——真正的帮助', effectEn: 'Not "you can do it" but a specific workaround — real help instead of empty encouragement' },
            { para: 3, text: '有人帮我纠正口型，有人帮我打节拍', technique: '集体托举', techniqueEn: 'Collective Support', effect: '从一个人帮→全班帮——善意扩散', effectEn: 'From one helper to the whole class joining in — kindness expanding organically' },
            { para: 4, text: '我被裹在温暖的和声里，不知不觉张开了嘴', technique: '被动解放', techniqueEn: 'Passive Liberation', effect: '"被裹"+"不知不觉"——不是主动克服恐惧而是被集体的温暖融化', effectEn: 'Wrapped in warm harmony, mouth opening without realizing — fear not conquered but dissolved by collective warmth' },
            { para: 4, text: '合唱的意义不在于每个人都唱得完美，而在于每个声音都不被落下', technique: '哲理领悟', techniqueEn: 'Philosophical Epiphany', effect: '合唱=集体——完美不是目标，包容才是', effectEn: 'Choir as metaphor for community — perfection isn\'t the point, inclusion is' },
            { para: 5, text: '听到没，这里面有我们班每一个人的声音！', technique: '群体宣言', techniqueEn: 'Group Declaration', effect: '刘洋的喊声=班级价值观的总结——每一个人都算数', effectEn: 'Liu Yang\'s shout as the class manifesto — every single person counts, every voice matters' },
            { para: 6, text: '不是让你变得完美，而是告诉你——你不完美，也没关系', technique: '否定句升华', techniqueEn: 'Negative-Clause Elevation', effect: '"不是…而是…"——否定完美主义，肯定包容', effectEn: 'Not perfection but acceptance — the final sentence negating one value to affirm a deeper one' }
          ],
          approach: '以一次班级合唱比赛为核心事件，通过五音不全的"我"从逃避到参与的心路历程，展现班级包容与个人成长。',
          approachEn: 'Centers on a class choir competition, tracing the tone-deaf narrator\'s journey from avoidance to participation, showing class inclusiveness and personal growth.',
          architecture: '起：宣布合唱比赛→承：我想逃避→转：同学们的包容鼓励→合：站上舞台的感动',
          architectureEn: 'Beginning: choir competition announced → Development: I want to escape → Turn: classmates\' inclusiveness → Resolution: moved by standing on stage',
          logic: '以\u201c我\u201d的心理变化为主线，从自卑逃避到被接纳，最终获得勇气，展现班集体的温暖。',
          logicEn: 'The narrator\'s psychological arc drives the story—from insecurity and avoidance to acceptance and courage, showing the warmth of the class collective.',
          skills: ['心理转变层次分明', '环境烘托情感', '首尾呼应完整'],
          skillsEn: ['Clear psychological progression', 'Environment reinforces emotion', 'Complete echo between opening and closing'],
          fullText: '音乐老师在黑板上写下\u201c校园合唱节\u201d五个大字时，全班欢呼，只有我的心沉了下去。\n\n我是出了名的五音不全。小学时被合唱团\u201c请\u201d出来的经历至今是我的阴影。我偷偷找到班长：\u201c我能不能负责搬道具？\u201d班长愣了一下：\u201c不行，全班参加，一个都不能少。\u201d\n\n排练开始了。音乐老师弹下第一个音，大家张口就唱，我却只敢蠕动嘴唇做做样子。站在我旁边的刘洋侧过头小声说：\u201c你出声啊，跟着我唱就行。\u201d我涨红了脸，小声跟了几句，果然跑调。身后传来几声笑，我恨不得找个地缝钻进去。\n\n放学后，刘洋拉住我：\u201c别走，我教你。\u201d他一句一句地教，我一句一句地跟。唱到高音部分，我的声音像被掐住的鸭子。刘洋忍住笑：\u201c没关系，这个音你小声唱，其他部分大声唱，保证听不出来。\u201d接下来一周，每天放学后教室里都有我俩的声音。渐渐地，其他同学也加入进来，有人帮我纠正口型，有人帮我打节拍。\n\n比赛那天，我们穿着统一的白衬衫站上舞台。灯光亮起的瞬间，我的腿在发抖。音乐响起，身边四十二个声音同时唱起来，我被裹在温暖的和声里，不知不觉张开了嘴。那一刻我突然明白，合唱的意义不在于每个人都唱得完美，而在于每个声音都不被落下。\n\n我们拿了二等奖。领奖台上，刘洋搂着我的肩膀喊：\u201c听到没，这里面有我们班每一个人的声音！\u201d台下掌声雷动。我的眼眶湿了——不是因为奖，是因为班里这帮人，让五音不全的我也有了开口唱歌的勇气。\n\n班里那点事，有时候就是这么简单：不是让你变得完美，而是告诉你——你不完美，也没关系。',
          fullTextEn: 'When the music teacher wrote "Campus Choir Festival" on the blackboard, the whole class cheered. Only my heart sank.\n\nI\'m famously tone-deaf. The memory of being "excused" from the choir in elementary school still haunts me. I secretly found the class monitor: "Can I just carry props?" He blinked: "No way. The whole class participates—no one left out."\n\nRehearsals began. When the music teacher played the first note and everyone sang, I only dared move my lips silently. Liu Yang beside me leaned over and whispered: "Sing out loud. Just follow me." My face burned red. I softly followed a few lines—and went off-key, as expected. A few laughs came from behind. I wanted to disappear into a crack in the floor.\n\nAfter school, Liu Yang stopped me: "Don\'t leave. Let me teach you." He taught phrase by phrase; I followed phrase by phrase. At the high notes, my voice sounded like a strangled duck. Liu Yang held back his laughter: "It\'s fine—sing those notes quietly, belt out the rest, and nobody will notice." For the next week, our voices echoed in the empty classroom every afternoon. Gradually, other classmates joined in—some correcting my mouth shape, others keeping the beat for me.\n\nOn competition day, we stood on stage in matching white shirts. The moment the lights came on, my legs trembled. The music started, and forty-two voices sang together around me. Wrapped in that warm harmony, I opened my mouth without realizing it. In that moment, I suddenly understood: the meaning of a choir isn\'t that everyone sings perfectly—it\'s that no voice gets left behind.\n\nWe won second place. On the podium, Liu Yang threw his arm around my shoulder and shouted: "Hear that? Every single person in our class is in there!" Thunderous applause. My eyes grew wet—not because of the prize, but because these classmates gave a tone-deaf kid like me the courage to sing.\n\nThose little things in our class are sometimes just that simple: not making you perfect, but telling you—it\'s okay that you\'re not.',
          highlights: [
            { text: '合唱的意义不在于每个人都唱得完美，而在于每个声音都不被落下', textEn: 'The meaning of a choir isn\'t that everyone sings perfectly — it\'s that no voice gets left behind', why: '哲理句直击主题，以合唱喻集体', whyEn: 'Philosophical line hitting the theme, using choir as metaphor for community' },
            { text: '不是让你变得完美，而是告诉你——你不完美，也没关系', textEn: 'Not making you perfect, but telling you — it\'s okay that you\'re not', why: '结尾金句，温暖有力', whyEn: 'Closing golden line—warm and powerful' }
          ],
          sections: [
            { type: '起', fn: '困境', fnEn: 'Dilemma', detail: '五音不全的恐惧', detailEn: 'Fear of being tone-deaf' },
            { type: '承', fn: '逃避', fnEn: 'Avoidance', detail: '想逃却被拒绝', detailEn: 'Wanting to escape but refused' },
            { type: '转', fn: '帮助', fnEn: 'Help', detail: '同学耐心教唱', detailEn: 'Classmates patiently teach' },
            { type: '合', fn: '领悟', fnEn: 'Epiphany', detail: '不完美也没关系', detailEn: 'Imperfection is okay' }
          ]
        },
        {
          title: '班里那点事', titleEn: 'Those Little Things in Our Class',
          score: 44, maxScore: 50,
          structure: 'diJinShi',
          techniques: ['xiJieMiaoXie','fanFuDianTi','duiBi'],
          techniqueMarks: [
            { para: 0, text: '初中三年，我换了三次座位，每一次都是一个故事', technique: '结构预告', techniqueEn: 'Structural Preview', effect: '三次=三个故事——开篇预设全文节奏', effectEn: 'Three changes, three stories — the opening sentence blueprints the entire essay\'s rhythm' },
            { para: 1, text: '我把书包堆在桌子中间当"楚河汉界"', technique: '典故活用', techniqueEn: 'Allusion Repurposed', effect: '楚河汉界=课桌上的疆界——历史典故降维到校园现实', effectEn: 'The Chu-Han boundary reduced to a backpack wall on a shared desk — grand allusion meeting petty prejudice' },
            { para: 1, text: '我在心里给他贴了个标签："差生"', technique: '自省暴露', techniqueEn: 'Self-Exposing Confession', effect: '承认自己的偏见——叙事者主动暴露缺点增强可信度', effectEn: 'Admitting his own prejudice — the narrator\'s self-exposure builds credibility and sets up later growth' },
            { para: 2, text: '漫画书不见了，取而代之的是一本厚厚的素描本', technique: '物件替换', techniqueEn: 'Object Substitution', effect: '漫画→素描本——一个替换暗示整个人的蜕变', effectEn: 'Comics replaced by a sketchbook — one object swap signaling an entire person\'s transformation' },
            { para: 2, text: '他画了我上课认真听讲的样子，侧脸，阳光正好打在脸上', technique: '画中发现', techniqueEn: 'Discovery in a Drawing', effect: '被"差生"画了肖像——视角反转，谁在观察谁？', effectEn: 'The "bad student" captured the narrator\'s profile in sunlight — who was really observing whom all along?' },
            { para: 2, text: '也许我从来没有真正了解过他', technique: '认知觉醒', techniqueEn: 'Cognitive Awakening', effect: '一句自省=标签撕裂的瞬间', effectEn: 'A moment of self-questioning — the instant the "bad student" label begins to tear' },
            { para: 3, text: '是我们俩并排坐在课桌前的背影，窗外阳光洒进来', technique: '画作告白', techniqueEn: 'Drawing as Farewell', effect: '背影+阳光——他用画保存了最日常也最珍贵的瞬间', effectEn: 'Two silhouettes at a shared desk, sunlight pouring in — his drawing preserving the most ordinary yet precious moment' },
            { para: 3, text: '谢谢你后来没有再垒书包', technique: '回声句', techniqueEn: 'Echo Sentence', effect: '回应第一次的书包墙——他一直都知道，也一直都在意', effectEn: 'Echoing the first backpack wall — he always knew, and always cared, but waited silently for it to come down' },
            { para: 4, text: '一堵书包的墙倒了，两颗心的距离就近了', technique: '物理→心理', techniqueEn: 'Physical-to-Psychological', effect: '书包墙=心墙——一个物理动作映射情感变化', effectEn: 'A backpack wall collapsing as a heart wall falling — physical action mirroring emotional shift' },
            { para: 4, text: '那个被你忽略的人，正在用自己的方式记住你', technique: '哲理反转', techniqueEn: 'Philosophical Reversal', effect: '忽略者被记住——打破"我看他"的单向叙事', effectEn: 'The one you overlooked was remembering you — shattering the one-directional narrative of observation' }
          ],
          approach: '以\u201c座位\u201d为线索，写三次调座位引发的故事，层层递进展现同学关系从陌生到深厚。',
          approachEn: 'Uses "seating arrangements" as the thread, writing about three seat changes that reveal deepening classmate relationships from strangers to close friends.',
          architecture: '第一次调座：陌生与不满→第二次调座：磨合与理解→第三次调座：不舍与珍惜→点题：座位变了，情谊不变',
          architectureEn: 'First change: strangers and displeasure → Second: adjustment and understanding → Third: reluctance and cherishing → Theme: seats change, bonds don\'t',
          logic: '以三次座位调整为节点，情感逐层加深，形成从排斥到不舍的递进弧线。',
          logicEn: 'Three seating changes as nodes, emotions deepening layer by layer, forming a progressive arc from rejection to reluctance to part.',
          skills: ['线索贯穿全文', '反复点题强化主旨', '对比手法突出变化'],
          skillsEn: ['Thread runs through entire text', 'Repeated theme reinforcement', 'Contrast highlights transformation'],
          fullText: '初中三年，我换了三次座位，每一次都是一个故事。\n\n第一次调座位是初一开学第二周。老师把我从靠窗的位置调到了中间，同桌变成了一个沉默寡言的男生。他桌上永远堆着一摞漫画书，上课爱走神，作业经常不交。我在心里给他贴了个标签：\u201c差生\u201d。那段时间，我把书包堆在桌子中间当\u201c楚河汉界\u201d，生怕他影响我学习。\n\n第二次是初二上学期。命运捉弄人，我和他又成了同桌。这次我没有垒书包，却发现他变了——漫画书不见了，取而代之的是一本厚厚的素描本。他在本子上画班里每个人的肖像，画得惟妙惟肖。我好奇地凑过去看，他腼腆地笑了笑：\u201c画着玩的。\u201d有一天我发现他画了我上课认真听讲的样子，侧脸，阳光正好打在脸上。我突然觉得，也许我从来没有真正了解过他。\n\n第三次调座位在初三。听说要分开坐，他递给我一张画——是我们俩并排坐在课桌前的背影，窗外阳光洒进来，画面温暖极了。画的背面写着：\u201c谢谢你后来没有再垒书包。\u201d我愣住了，原来他一直都记得。\n\n如今我坐在教室的另一头，偶尔转头，还能看见他埋头画画的身影。班里那点事说大不大，说小不小——一堵书包的墙倒了，两颗心的距离就近了。三次座位，教会了我一件事：别急着给任何人贴标签，因为你永远不知道，那个被你忽略的人，正在用自己的方式记住你。',
          fullTextEn: 'In three years of middle school, I changed seats three times. Each time was a story.\n\nThe first change came in the second week of seventh grade. The teacher moved me from the window to the middle, and my new deskmate was a quiet, taciturn boy. His desk was always piled with comic books; he daydreamed in class and rarely turned in homework. I mentally labeled him a "bad student." During that period, I stacked my backpack in the middle of our desk as a "border wall," afraid he\'d affect my studies.\n\nThe second change came in the fall of eighth grade. Fate was playing tricks—we were deskmates again. This time I didn\'t build a backpack wall, and I discovered he\'d changed. The comics were gone, replaced by a thick sketchbook. He drew portraits of every classmate, strikingly lifelike. I leaned over curiously; he smiled shyly: "Just drawing for fun." One day I found he\'d drawn me listening attentively in class—my profile, sunlight falling perfectly on my face. Suddenly I felt that perhaps I\'d never truly understood him.\n\nThe third seat change was in ninth grade. Hearing we\'d be separated, he handed me a drawing—the two of us sitting side by side at our desk, seen from behind, sunlight pouring through the window. It was incredibly warm. On the back he\'d written: "Thank you for not building the backpack wall again." I froze—he\'d remembered all along.\n\nNow I sit on the other side of the classroom. Occasionally I turn my head and can still see him bent over his sketching. Those little things in class are neither big nor small—when a wall of backpacks falls, two hearts draw closer. Three seating changes taught me one thing: don\'t rush to label anyone, because you never know—the person you overlooked might be remembering you in their own way.',
          highlights: [
            { text: '一堵书包的墙倒了，两颗心的距离就近了', textEn: 'When a wall of backpacks falls, two hearts draw closer', why: '以书包墙比喻心墙，形象深刻', whyEn: 'Backpack wall as metaphor for emotional wall—vivid and profound' },
            { text: '谢谢你后来没有再垒书包', textEn: 'Thank you for not building the backpack wall again', why: '简短一句话承载巨大情感', whyEn: 'A brief sentence carrying enormous emotion' }
          ],
          sections: [
            { type: '第一层', fn: '排斥', fnEn: 'Rejection', detail: '垒书包当界线', detailEn: 'Backpack wall as boundary' },
            { type: '第二层', fn: '发现', fnEn: 'Discovery', detail: '了解他的才华', detailEn: 'Discovering his talent' },
            { type: '第三层', fn: '珍惜', fnEn: 'Cherishing', detail: '一幅画的告白', detailEn: 'A drawing\'s confession' },
            { type: '点题', fn: '感悟', fnEn: 'Reflection', detail: '别急着贴标签', detailEn: 'Don\'t rush to label' }
          ]
        },
        {
          title: '班里那点事', titleEn: 'Those Little Things in Our Class',
          score: 45, maxScore: 50,
          structure: 'daoXuShi',
          techniques: ['xuanNian','duiHuaMiaoXie','yiWuShuQing'],
          techniqueMarks: [
            { para: 0, text: '封面已经卷了边，上面用记号笔写着四个字：班级悄悄话', technique: '物件悬念', techniqueEn: 'Object Suspense', effect: '卷边的旧本子=时间的重量——一个物件引出整段记忆', effectEn: 'A dog-eared notebook — its worn cover carrying the weight of years, one object unlocking an entire archive of memory' },
            { para: 1, text: '三天后本子上只有她自己写的一句"今天食堂的红烧肉真好吃"', technique: '反差喜剧', techniqueEn: 'Anticlimax Comedy', effect: '宏大倡议vs红烧肉——冷场的尴尬让后续升温更有力', effectEn: 'Grand initiative answered by a cafeteria review — the awkward silence makes the eventual warmth more powerful' },
            { para: 2, text: '坐在我后面的同学，谢谢你每次帮我捡笔', technique: '匿名善意', techniqueEn: 'Anonymous Kindness', effect: '不署名不指名——善意在匿名中反而更纯粹', effectEn: 'Unsigned gratitude for an unsigned kindness — anonymity distilling goodwill to its purest form' },
            { para: 2, text: '就像一颗石子投入平静的湖面，回应接踵而来', technique: '涟漪比喻', techniqueEn: 'Ripple Metaphor', effect: '石子→涟漪=一条留言→善意连锁——结构与比喻同步', effectEn: 'One pebble, widening circles — the metaphor mirrors the narrative structure of kindness cascading' },
            { para: 3, text: '有人在上面画漫画，有人抄歌词，有人写打油诗', technique: '排比多样化', techniqueEn: 'Enumeration of Diversity', effect: '三种表达=三种个性——本子成为班级万花筒', effectEn: 'Comics, lyrics, doggerel — three forms of expression showing the notebook as a kaleidoscope of personalities' },
            { para: 3, text: '隔壁班的同学，请你们声音小一点，我们要睡午觉', technique: '幽默插曲', techniqueEn: 'Humorous Interlude', effect: '温情中穿插搞笑——让全文基调不至于太甜', effectEn: 'Comic relief punctuating the tenderness — preventing the essay from becoming saccharine' },
            { para: 4, text: '教了十五年书，第一次被学生感动到偷偷抹眼泪', technique: '视角突转', techniqueEn: 'Perspective Shift', effect: '老师突然出现在学生的本子里——跨越身份的共鸣', effectEn: 'The teacher\'s handwriting suddenly appearing in the students\' notebook — a boundary-crossing moment of resonance' },
            { para: 4, text: '那一页，被同学们用彩笔画满了爱心', technique: '集体回应', techniqueEn: 'Collective Response', effect: '文字→彩色爱心——学生用画替代了文字，更胜千言', effectEn: 'Words answered with colored hearts — when language gives way to drawn love, more is said than words could manage' },
            { para: 5, text: '班里那点事，我一辈子都不会忘', technique: '直白告白', techniqueEn: 'Direct Declaration', effect: '不用比喻不用修辞——最简单的话=最真的情', effectEn: 'No metaphor, no rhetoric — the simplest sentence carrying the truest feeling' },
            { para: 5, text: '这是班里那点事留给我的，最好的毕业礼物', technique: '物件升华', techniqueEn: 'Object Elevation', effect: '旧本子=毕业礼物——物质价值为零，情感价值无限', effectEn: 'A worn notebook as the finest graduation gift — zero material value, infinite emotional worth' }
          ],
          approach: '以倒叙开头，从发现课桌上的留言本写起，回忆班级\u201c悄悄话本\u201d的故事。',
          approachEn: 'Opens with reverse chronology, starting from discovering a message book on the desk, recalling the story of the class "secret message notebook."',
          architecture: '倒叙：发现留言本→回忆：谁发起的→发展：本子传遍全班→高潮：老师也写了→回到现在：毕业前的最后一页',
          architectureEn: 'Flashback: finding the notebook → Memory: who started it → Development: notebook circulates → Climax: teacher writes too → Return to present: the last page before graduation',
          logic: '以留言本为核心意象，倒叙引发悬念，正叙展现温情，结尾回归当下，结构圆融。',
          logicEn: 'The message notebook as core image; reverse chronology creates suspense, forward narration reveals warmth, ending returns to the present—a complete circular structure.',
          skills: ['倒叙制造悬念', '物件承载情感', '结尾意味深长'],
          skillsEn: ['Reverse chronology creates suspense', 'Object carries emotion', 'Meaningful ending'],
          fullText: '整理课桌时，我在抽屉最里面摸到一个蓝色笔记本。封面已经卷了边，上面用记号笔写着四个字：\u201c班级悄悄话\u201d。翻开第一页，扑面而来的是几十种不同的笔迹，和一段段或搞笑或温暖的话。\n\n那是初一下学期的事了。有一天课间，小雨在黑板旁边放了一个本子，旁边贴了张纸条：\u201c想说又不好意思说的话，就写在这里吧。\u201d起初没人理，三天后本子上只有她自己写的一句\u201c今天食堂的红烧肉真好吃\u201d。\n\n转折发生在第四天。不知道谁写了一句：\u201c坐在我后面的同学，谢谢你每次帮我捡笔。\u201d就像一颗石子投入平静的湖面，回应接踵而来——\u201c前排的女生，你的马尾辫很好看\u201d\u201c数学课代表，谢谢你每次耐心给我讲题\u201d\u201c体育课分组的时候，谢谢你们没有落下我\u201d。\n\n本子越写越厚，从一个变成两个，又变成三个。有人在上面画漫画，有人抄歌词，有人写打油诗。最搞笑的一条是：\u201c隔壁班的同学，请你们声音小一点，我们要睡午觉。\u201d全班笑了一整天。\n\n直到有一天，翻到一页，是班主任的字迹：\u201c教了十五年书，第一次被学生感动到偷偷抹眼泪。你们是我带过的最好的一届。\u201d那一页，被同学们用彩笔画满了爱心。\n\n此刻，我在最后一页写下：\u201c感谢三年二班的每一个人。班里那点事，我一辈子都不会忘。\u201d合上本子，我轻轻把它放进了书包——这是班里那点事留给我的，最好的毕业礼物。',
          fullTextEn: 'While cleaning out my desk, I found a blue notebook deep in the drawer. Its cover was curled at the edges, with four characters written in marker: "Class Secret Messages." Opening the first page, dozens of different handwritings jumped out at me, along with lines both funny and warm.\n\nIt started in the spring of seventh grade. One day during break, Xiao Yu placed a notebook by the blackboard with a note: "Things you want to say but are too shy to—write them here." At first nobody bothered. Three days later, the only entry was her own: "The cafeteria\'s braised pork was really good today."\n\nThe turning point came on day four. Someone wrote: "To the classmate behind me—thank you for picking up my pen every time." Like a stone dropped into a still lake, responses followed in waves—"Girl in the front row, your ponytail looks great." "Math class rep, thank you for patiently explaining problems to me." "Thanks for not leaving me out when picking teams in PE."\n\nThe notebook grew thicker, from one to two to three volumes. People drew comics in it, copied song lyrics, wrote humorous poems. The funniest entry: "Students in the next class, please keep your voices down—we\'re trying to nap." The whole class laughed for an entire day.\n\nThen one day, turning a page, we found our homeroom teacher\'s handwriting: "In fifteen years of teaching, this is the first time students have moved me to secretly wipe away tears. You are the best class I\'ve ever taught." That page was covered in hearts drawn with colored pens by the students.\n\nNow, on the last page, I write: "Thank you to every person in Class 2, Grade 3. Those little things in our class—I\'ll never forget them for the rest of my life." Closing the notebook, I gently place it in my bag—this is the best graduation gift those class memories ever gave me.',
          highlights: [
            { text: '就像一颗石子投入平静的湖面，回应接踵而来', textEn: 'Like a stone dropped into a still lake, responses followed in waves', why: '比喻生动，展现善意的连锁反应', whyEn: 'Vivid metaphor showing chain reaction of kindness' },
            { text: '第一次被学生感动到偷偷抹眼泪', textEn: 'The first time students have moved me to secretly wipe away tears', why: '老师视角意外出现，情感高潮', whyEn: 'Teacher\'s unexpected perspective creates emotional climax' }
          ],
          sections: [
            { type: '倒叙', fn: '发现', fnEn: 'Discovery', detail: '找到留言本', detailEn: 'Finding the notebook' },
            { type: '回忆', fn: '起源', fnEn: 'Origin', detail: '小雨发起', detailEn: 'Xiao Yu starts it' },
            { type: '发展', fn: '传递', fnEn: 'Spread', detail: '善意蔓延', detailEn: 'Kindness spreads' },
            { type: '高潮', fn: '老师', fnEn: 'Teacher', detail: '班主任的感动', detailEn: 'Teacher\'s emotion' },
            { type: '回归', fn: '告别', fnEn: 'Farewell', detail: '最好的毕业礼物', detailEn: 'Best graduation gift' }
          ]
        }
      ]
    },
    {
      id: 'yn2011_comp1',
      paperId: 'yn2011',
      year: 2011,
      region: '云南省',
      prompt: '请以"美好的相遇"为题，写一篇文章。要求：立意自定，文体自选（诗歌除外）；说真话，抒真情，忌抄袭；文中不要使用真实的地名、校名、人名；书写工整，不少于600字。',
      promptEn: 'Write an essay titled "A Beautiful Encounter". Requirements: choose your own theme and genre (except poetry); be sincere and authentic; do not use real names; at least 600 words.',
      type: 'narrative',
      category: '记叙文',
      categoryEn: 'Narrative',
      wordCount: 600,
      guide: {
        analysis: '"美好的相遇"题眼在于"美好"，不仅仅是遇见某人，更要写出这次相遇带来的美好影响。可以是遇见一个人、一本书、一种爱好、一处风景，关键在于展现"相遇"如何改变了自己。',
        analysisEn: 'The key word is "beautiful"—not just meeting someone, but showing the positive impact. It can be meeting a person, a book, a hobby, or a landscape. The focus should be on how the encounter changed you.',
        keyPoints: ['相遇对象可多元化', '重点写"美好"的内涵', '展现相遇带来的成长或改变', '情感要有层次感'],
        keyPointsEn: ['Diverse encounter subjects', 'Focus on the meaning of "beautiful"', 'Show growth or change from the encounter', 'Layered emotional expression'],
        pitfalls: ['仅写认识过程不写影响', '相遇对象太泛泛', '缺乏具体细节'],
        pitfallsEn: ['Only describing meeting without impact', 'Too vague encounter subject', 'Lacking specific details']
      },
      essays: [
        {
          title: '美好的相遇', titleEn: 'A Beautiful Encounter',
          score: 47, maxScore: 50,
          structure: 'qiChengZhuanHe',
          techniques: ['huanjingMiaoXie','xinLiMiaoXie','xiJieMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '走过无数次，却从未注意过巷尾那缕甜丝丝的烟气', technique: '悬念开篇', techniqueEn: 'Suspense Opening', effect: '无数次忽略vs这一次发现——日常中的隐藏之美', effectEn: 'Countless passes without noticing versus this single discovery — beauty hidden in the everyday' },
            { para: 1, text: '青石板路被细雨打湿，两旁的老房子灰墙斑驳，几只猫蹲在屋檐下舔爪子', technique: '环境速写', techniqueEn: 'Environmental Sketch', effect: '青石板+灰墙+猫——三笔画出古巷氛围', effectEn: 'Wet flagstones, mottled walls, cats under eaves — three strokes painting an ancient alley\'s atmosphere' },
            { para: 2, text: '手腕一转一提，金色的糖丝在石板上游走', technique: '动作特写', techniqueEn: 'Action Close-up', effect: '转+提=两个动词——精准捕捉手艺人的核心动作', effectEn: 'Twist and lift — two verbs capturing the craftsman\'s essential motion with cinematic precision' },
            { para: 2, text: '一条龙，昂首翘尾，须髯飞扬。前后不过两分钟', technique: '时间压缩', techniqueEn: 'Time Compression', effect: '两分钟=一条龙——速度本身就是四十三年功力的证据', effectEn: 'A dragon in barely two minutes — the speed itself is evidence of forty-three years of mastery' },
            { para: 4, text: '四十三年。从你这么大的时候开始学的', technique: '时间震撼', techniqueEn: 'Temporal Shock', effect: '四十三年+从我这么大——时间跨度在对比中变得可感', effectEn: 'Forty-three years, starting at your age — time span made tangible through the comparison with the narrator' },
            { para: 4, text: '这门手艺要是我不做了，可能就真的没人做了', technique: '传承焦虑', techniqueEn: 'Legacy Anxiety', effect: '平淡语气说出残酷现实——手艺的消亡只差一个人的放弃', effectEn: 'A devastating truth delivered in casual tone — one person\'s quitting could erase an art form entirely' },
            { para: 5, text: '阳光穿过金色的糖凤凰，在石板上投下一片斑斓的光影', technique: '光影升华', techniqueEn: 'Light Elevation', effect: '阳光+糖凤凰+光影——手艺品在自然光中获得艺术生命', effectEn: 'Sunlight through golden sugar casting kaleidoscopic shadows — the craft transcending confection into art' },
            { para: 6, text: '舔一口，甜到了心底', technique: '味觉点题', techniqueEn: 'Taste as Theme', effect: '甜=糖+感动——味觉双关，身体与心灵同时被触动', effectEn: 'Sweetness reaching the heart — a taste pun where sugar and emotion meet on the tongue' },
            { para: 6, text: '青石板，白烟，花白的头发，专注的侧脸。这画面定格在我脑海里', technique: '定格回望', techniqueEn: 'Freeze-Frame Look-back', effect: '四个意象=一张永恒照片——离开后的回望完成情感升华', effectEn: 'Four images frozen into a permanent photograph — the backward glance sealing the encounter into memory' },
            { para: 7, text: '一个人愿意用一辈子的时间，把一件小事做到极致', technique: '哲理总结', techniqueEn: 'Philosophical Summary', effect: '一辈子+一件小事+极致——三个"一"定义了美好', effectEn: 'A lifetime, one small thing, perfection — three "ones" distilling the entire meaning of beauty' }
          ],
          approach: '写与一位老手艺人的偶然相遇，在古巷中看他做糖画，从中感悟匠心与坚守。',
          approachEn: 'An accidental encounter with an old craftsman making sugar paintings in an ancient alley, reflecting on craftsmanship and perseverance.',
          architecture: '起：古巷闲逛→承：发现糖画摊→转：了解老人坚守的故事→合：带走的不只是糖画',
          architectureEn: 'Beginning: wandering an old alley → Development: discovering the sugar art stall → Turn: learning the old man\'s story of perseverance → Resolution: taking away more than sugar art',
          logic: '以偶遇为起点，通过对话和观察逐步深入，最终从手艺人身上获得人生启示。',
          logicEn: 'Starting from a chance meeting, deepening through dialogue and observation, ultimately gaining life wisdom from the craftsman.',
          skills: ['环境描写营造氛围', '以小人物写大道理', '结尾余韵悠长'],
          skillsEn: ['Environmental description creates atmosphere', 'Big truths through small characters', 'Lingering resonance at the ending'],
          fullText: '那条巷子，我走过无数次，却从未注意过巷尾那缕甜丝丝的烟气。\n\n那是去年秋天的一个周末。补习班提前下课，我百无聊赖地拐进老城区的小巷。青石板路被细雨打湿，两旁的老房子灰墙斑驳，几只猫蹲在屋檐下舔爪子。巷子尽头，一缕白烟袅袅升起，空气里弥漫着焦糖的甜香。\n\n走近了才看清，是一位头发花白的老爷爷在做糖画。他面前支着一块磨得发亮的大理石板，旁边是一口小铜锅，锅里的糖浆冒着细密的泡泡。他手执铜勺，手腕一转一提，金色的糖丝在石板上游走——一条龙，昂首翘尾，须髯飞扬。前后不过两分钟，一幅栩栩如生的糖画就完成了。\n\n\u201c爷爷，这个多少钱？\u201d我蹲下来问。\n\u201c五块。\u201d他头也不抬，又开始画一只凤凰。\n\u201c您做了多少年了？\u201d\n\u201c四十三年。\u201d他终于抬头看了我一眼，皱纹里藏着笑意，\u201c从你这么大的时候开始学的。\u201d\n\n我惊讶地张大了嘴。四十三年，就做这一件事？他似乎看出了我的疑惑，慢悠悠地说：\u201c年轻的时候也想过不干了，去工厂上班挣大钱。后来想想，这门手艺要是我不做了，可能就真的没人做了。\u201d他用竹签挑起那只凤凰，在阳光下转了转，\u201c你看，它好看不？\u201d\n\n阳光穿过金色的糖凤凰，在石板上投下一片斑斓的光影。那一刻，我觉得这只凤凰美极了——不只是造型，而是四十三年的坚守凝结在每一丝糖线里。\n\n我买了那条龙。舔一口，甜到了心底。走出巷子的时候，我回头望了一眼——青石板，白烟，花白的头发，专注的侧脸。这画面定格在我脑海里，再也抹不去。\n\n那是我人生中最美好的相遇，遇见的不只是一位做糖画的老人，更是一种叫\u201c热爱\u201d的东西。它让我明白，所谓美好，不是轰轰烈烈，而是一个人愿意用一辈子的时间，把一件小事做到极致。',
          fullTextEn: 'I\'d walked through that alley countless times, yet never noticed the sweet wisp of smoke at its end.\n\nIt was a weekend last autumn. Tutoring class let out early, and I wandered aimlessly into an old-town alley. Flagstones glistened with drizzle; old houses on either side showed mottled gray walls; a few cats crouched under eaves, licking their paws. At the alley\'s end, a trail of white smoke curled upward, filling the air with the sweet scent of caramel.\n\nMoving closer, I saw a white-haired old man making sugar paintings. Before him stood a polished marble slab, beside it a small copper pot where syrup bubbled in fine beads. Holding a copper ladle, he flicked and lifted his wrist—golden sugar threads danced across the stone. A dragon: head raised, tail curved, whiskers flying. In barely two minutes, a lifelike sugar painting was complete.\n\n"Grandpa, how much is this?" I squatted down to ask.\n"Five yuan." Without looking up, he began drawing a phoenix.\n"How many years have you been doing this?"\n"Forty-three." He finally glanced at me, smile hidden in his wrinkles. "Started learning when I was about your age."\n\nMy jaw dropped. Forty-three years doing just this one thing? He seemed to read my confusion and said slowly: "When I was young, I thought about quitting too—going to a factory for better money. Then I thought, if I stop, maybe nobody will ever do this again." He lifted the phoenix on a bamboo stick and turned it in the sunlight. "Look—isn\'t it beautiful?"\n\nSunlight passed through the golden sugar phoenix, casting a kaleidoscope of light and shadow on the stone. In that moment, I thought the phoenix was breathtakingly beautiful—not just the shape, but forty-three years of devotion crystallized in every strand of sugar.\n\nI bought the dragon. One lick—sweetness reached my heart. Walking out of the alley, I looked back—flagstones, white smoke, silvered hair, a focused profile. That image is frozen in my mind, never to fade.\n\nIt was the most beautiful encounter of my life. I met not just an old sugar painter, but something called "passion." It taught me that beauty isn\'t about grand spectacles—it\'s one person willing to spend a lifetime perfecting one small thing.',
          highlights: [
            { text: '四十三年的坚守凝结在每一丝糖线里', textEn: 'Forty-three years of devotion crystallized in every strand of sugar', why: '将抽象的坚守具象化为糖线', whyEn: 'Abstracting perseverance into tangible sugar threads' },
            { text: '一个人愿意用一辈子的时间，把一件小事做到极致', textEn: 'One person willing to spend a lifetime perfecting one small thing', why: '结尾哲理金句，提炼主题', whyEn: 'Philosophical closing line distilling the theme' }
          ],
          sections: [
            { type: '起', fn: '悬念', fnEn: 'Suspense', detail: '从未注意的甜烟', detailEn: 'The sweet smoke never noticed' },
            { type: '承', fn: '描绘', fnEn: 'Depiction', detail: '糖画技艺精湛', detailEn: 'Exquisite sugar art craft' },
            { type: '转', fn: '对话', fnEn: 'Dialogue', detail: '四十三年的坚守', detailEn: 'Forty-three years of devotion' },
            { type: '合', fn: '升华', fnEn: 'Elevation', detail: '热爱就是美好', detailEn: 'Passion is beauty' }
          ]
        },
        {
          title: '美好的相遇', titleEn: 'A Beautiful Encounter',
          score: 45, maxScore: 50,
          structure: 'zongFenZong',
          techniques: ['duiBi','yiWuShuQing','shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '不一定是遇见一个人，也可能是遇见一本书', technique: '破题拓展', techniqueEn: 'Thesis Expansion', effect: '开篇即拓宽"相遇"的定义——从人→物', effectEn: 'The opening sentence widens "encounter" from person to book — expanding the essay\'s entire possibility' },
            { para: 1, text: '父母的叹息、老师的失望、同学异样的目光像三座大山压在我身上', technique: '排比比喻', techniqueEn: 'Parallel Metaphor', effect: '三种目光=三座大山——外界压力具象化', effectEn: 'Three gazes as three mountains — external pressure made visible and physical' },
            { para: 2, text: '书架间弥漫着纸张发黄的气味，暖暖的，像老人的怀抱', technique: '嗅觉通感', techniqueEn: 'Olfactory Synesthesia', effect: '旧书气味=温暖怀抱——书店成为避难所', effectEn: 'Yellowed-page scent compared to an elder\'s embrace — the bookstore as sanctuary before the book even opens' },
            { para: 3, text: '你对我来说是世界上独一无二的', technique: '引文触发', techniqueEn: 'Quote as Trigger', effect: '小王子的话→想起父母——书中角色代替作者说出真相', effectEn: 'The Little Prince\'s words triggering memories of parental love — fiction speaking truths the narrator couldn\'t see alone' },
            { para: 3, text: '爸爸深夜还亮着的台灯——他在帮我整理错题本', technique: '回忆细节', techniqueEn: 'Memory Detail', effect: '台灯+错题本——一个画面推翻"不关心"的误判', effectEn: 'A desk lamp and an error notebook — one image overturning the assumption of parental indifference' },
            { para: 4, text: '只有用心才能看得清。真正重要的东西，眼睛是看不见的', technique: '经典互文', techniqueEn: 'Classic Intertext', effect: '引用与现实完美对接——"用心看"正是主角需要学的', effectEn: 'A classic line landing precisely where the narrator\'s life needs it — seeing with the heart is the exact lesson required' },
            { para: 4, text: '觉得有什么东西在心里慢慢解冻', technique: '融化意象', techniqueEn: 'Thawing Imagery', effect: '解冻=情感复苏——冰冻的心在一本书的温度中融化', effectEn: 'A frozen heart thawing — the gradual warming of a spirit by words on a page' },
            { para: 4, text: '父母的爱、朋友的关心，还有我自己内心深处不甘放弃的倔强', technique: '三重发现', techniqueEn: 'Triple Discovery', effect: '被成绩遮住的三样东西——由外及内的层次', effectEn: 'Three things hidden behind grades — parents\' love, friends\' care, and inner stubbornness — discovered from outside in' },
            { para: 5, text: '书页已经翻得起了毛边', technique: '物件见证', techniqueEn: 'Object as Witness', effect: '毛边=反复阅读=持续治愈——磨损是爱的证据', effectEn: 'Pages worn fuzzy at the edges — physical damage as evidence of return visits, each reading a small act of healing' },
            { para: 6, text: '在那间弥漫着旧书气味的小店里，我遇见了一本书', technique: '首尾呼应', techniqueEn: 'Opening-Closing Echo', effect: '回到开篇的书店气味——结构闭合，情感完整', effectEn: 'Returning to the bookstore scent from the opening — the structure closes, the emotional circle completes' }
          ],
          approach: '写与一本书的相遇——在低谷时期偶然读到《小王子》，从中获得治愈和力量。',
          approachEn: 'Meeting a book—accidentally reading "The Little Prince" during a low period and finding healing and strength.',
          architecture: '总起：人生中有些相遇不是与人→分：低谷期→偶遇书店→读书体验→总结：书也是美好的相遇',
          architectureEn: 'Opening: some encounters aren\'t with people → Detail: low period → chance bookstore visit → reading experience → Conclusion: books are beautiful encounters too',
          logic: '以\u201c低谷—遇见—治愈\u201d为情感弧线，借书中哲理映照现实困境，双线交织。',
          logicEn: 'Emotional arc of "low point—encounter—healing," weaving book philosophy with real-life struggles.',
          skills: ['双线叙事巧妙', '引用恰到好处', '情感转变自然'],
          skillsEn: ['Clever dual-line narrative', 'Well-placed quotations', 'Natural emotional transformation'],
          fullText: '人生中最美好的相遇，不一定是遇见一个人，也可能是遇见一本书。\n\n初二下学期，我的成绩从年级前十滑到了五十开外。父母的叹息、老师的失望、同学异样的目光像三座大山压在我身上。那段日子，我觉得自己什么都做不好，连呼吸都是多余的。\n\n一个周末，我逃出家门漫无目的地走。不知怎么就走进了街角那家旧书店。书架间弥漫着纸张发黄的气味，暖暖的，像老人的怀抱。我随手抽出一本薄薄的书——封面上画着一个站在小星球上的金发男孩。《小王子》，我以前听说过，但从没读过。\n\n我坐在书架旁的地板上，一口气读完了。读到小王子对玫瑰花说\u201c你对我来说是世界上独一无二的\u201d时，我的眼泪突然掉了下来。我想起了妈妈每天早起给我做的早餐，爸爸深夜还亮着的台灯——他在帮我整理错题本。他们的失望，不是因为嫌弃，而是因为在乎。\n\n书里还有一句话：\u201c只有用心才能看得清。真正重要的东西，眼睛是看不见的。\u201d我捧着书，坐在那间旧书店的角落里，觉得有什么东西在心里慢慢解冻。那些所谓的\u201c大山\u201d——成绩、目光、叹息——突然变轻了。因为我终于看清了被成绩遮住的东西：父母的爱、朋友的关心，还有我自己内心深处不甘放弃的倔强。\n\n那天，我花八块钱买下了那本《小王子》。如今它就放在我床头，书页已经翻得起了毛边。每次觉得撑不下去的时候，我就翻开它，读那些简单却深刻的句子。\n\n后来我的成绩慢慢回来了，但这已经不是最重要的事了。最重要的是，在那个灰暗的下午，在那间弥漫着旧书气味的小店里，我遇见了一本书，它教会了我用心去看这个世界。这，就是我最美好的相遇。',
          fullTextEn: 'The most beautiful encounter in life may not be meeting a person—it can be meeting a book.\n\nIn the spring of eighth grade, my ranking slid from the top ten to beyond fiftieth. My parents\' sighs, teachers\' disappointment, classmates\' strange looks—three mountains on my shoulders. During those days, I felt I could do nothing right; even breathing seemed pointless.\n\nOne weekend, I fled home and walked aimlessly. Somehow I ended up in the old bookstore on the corner. The scent of yellowed pages drifted between shelves—warm, like an elder\'s embrace. I randomly pulled out a slim book—on its cover, a blond boy standing on a tiny planet. "The Little Prince." I\'d heard of it but never read it.\n\nI sat on the floor beside the shelf and read it in one breath. When the Little Prince told his rose, "You are unique in all the world to me," tears suddenly fell. I thought of Mom getting up early every day to make my breakfast, Dad\'s desk lamp still lit late at night—he was organizing my error correction notebook. Their disappointment wasn\'t rejection; it was caring.\n\nThe book also says: "It is only with the heart that one can see rightly. What is essential is invisible to the eye." Holding the book in that old bookstore corner, I felt something slowly thawing inside me. Those so-called "mountains"—grades, stares, sighs—suddenly grew lighter. Because I finally saw what grades had hidden: my parents\' love, friends\' concern, and deep within myself, a stubborn refusal to give up.\n\nThat day I bought "The Little Prince" for eight yuan. It sits on my nightstand now, pages worn fuzzy from turning. Whenever I feel I can\'t go on, I open it and read those simple yet profound sentences.\n\nLater my grades gradually recovered, but that\'s no longer what matters most. What matters is that on a gray afternoon, in a little shop smelling of old books, I met a book that taught me to see the world with my heart. That is my most beautiful encounter.',
          highlights: [
            { text: '觉得有什么东西在心里慢慢解冻', textEn: 'I felt something slowly thawing inside me', why: '用"解冻"比喻心理变化，形象精准', whyEn: '"Thawing" metaphor for psychological change—precise and vivid' },
            { text: '只有用心才能看得清', textEn: 'It is only with the heart that one can see rightly', why: '恰当引用经典，与个人经历完美融合', whyEn: 'Perfect integration of classic quote with personal experience' }
          ],
          sections: [
            { type: '总起', fn: '点题', fnEn: 'Theme', detail: '相遇不限于人', detailEn: 'Encounters aren\'t limited to people' },
            { type: '分', fn: '低谷', fnEn: 'Low point', detail: '成绩下滑的灰暗期', detailEn: 'Gray period of declining grades' },
            { type: '分', fn: '遇见', fnEn: 'Encounter', detail: '旧书店邂逅小王子', detailEn: 'Meeting The Little Prince in an old bookstore' },
            { type: '分', fn: '治愈', fnEn: 'Healing', detail: '心中解冻', detailEn: 'Inner thawing' },
            { type: '总结', fn: '升华', fnEn: 'Elevation', detail: '用心看世界', detailEn: 'Seeing the world with the heart' }
          ]
        },
        {
          title: '美好的相遇', titleEn: 'A Beautiful Encounter',
          score: 46, maxScore: 50,
          structure: 'daoXuShi',
          techniques: ['dongZuoMiaoXie','duiHuaMiaoXie','huanjingMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '一张照片滑了出来——东方明珠塔在夜色里亮着橙色的光', technique: '物件悬念', techniqueEn: 'Object Suspense', effect: '信→照片→夜景——三层打开制造好奇心', effectEn: 'Letter, photo, night skyline — three layers of unveiling building curiosity before the story even begins' },
            { para: 0, text: '还记得我答应你的吗？这就是大城市的夜晚', technique: '书信嵌入', techniqueEn: 'Embedded Letter', effect: '手写字变成叙事入口——承诺兑现的温暖', effectEn: 'Handwritten words on a photo becoming the narrative\'s entry point — a promise kept across years and distance' },
            { para: 2, text: '在地球的另一边，有一片大草原，斑马和长颈鹿在上面跑', technique: '世界展开', techniqueEn: 'World Unfolding', effect: '第一堂课不是课本而是世界地图——打破认知边界', effectEn: 'First lesson not from textbooks but a world map — a teacher shattering the children\'s cognitive borders' },
            { para: 2, text: '我们连县城都没去过，她说的那些地方，像神话一样遥远', technique: '认知落差', techniqueEn: 'Cognitive Gap', effect: '县城=极限，世界=神话——两个世界的距离在一句话里呈现', effectEn: 'The county seat as the horizon of experience, the world as myth — the gulf between two realities in a single sentence' },
            { para: 3, text: '她教我们用树叶做书签，用石头画画', technique: '就地取材', techniqueEn: 'Local Materials', effect: '树叶+石头=教具——用山村现有之物连通广阔世界', effectEn: 'Leaves as bookmarks, stones as canvases — connecting the vast world through the village\'s own materials' },
            { para: 4, text: '我指着东方明珠塔问：那个亮亮的是什么？', technique: '童真发问', techniqueEn: 'Child\'s Question', effect: '"亮亮的"=孩子语言——天真的提问预设了开篇的照片', effectEn: '"That shiny thing" — a child\'s language planting the seed that will bloom as the opening photograph' },
            { para: 5, text: '追了好远好远，直到车变成一个小黑点消失在山弯里', technique: '长镜头离别', techniqueEn: 'Long-Shot Farewell', effect: '追车→小黑点→消失——镜头逐渐拉远，时间在奔跑中拉长', effectEn: 'Chasing the van, watching it shrink to a dot, then vanish — a cinematic pull-back stretching departure into eternity' },
            { para: 5, text: '攥着她临走时塞给我的那支自动铅笔，哭得说不出话', technique: '物件寄情', techniqueEn: 'Emotion in Object', effect: '铅笔=离别的实体——手攥的力度=不舍的强度', effectEn: 'Clutching a mechanical pencil — the tightness of the grip measuring the depth of the loss' },
            { para: 6, text: '笔杆上的字已经磨得看不清了', technique: '时间刻痕', techniqueEn: 'Time\'s Inscription', effect: '字迹磨损=时间流逝——物件见证了两年的思念', effectEn: 'Words worn illegible on the pencil barrel — two years of use as two years of remembrance made tactile' },
            { para: 7, text: '山的那边，真的有一个发光的世界在等着我', technique: '呼应升华', techniqueEn: 'Echo and Elevation', effect: '发光的世界呼应东方明珠+大草原——从照片回到信念', effectEn: 'A luminous world echoing both the Pearl Tower and the grasslands — the photo becomes faith' }
          ],
          approach: '倒叙手法，从收到一封信写起，回忆与支教老师的短暂相遇。老师只待了一学期，却改变了山村孩子对世界的认知。',
          approachEn: 'Reverse chronology starting from receiving a letter, recalling a brief encounter with a volunteer teacher who stayed only one semester but changed village children\'s worldview.',
          architecture: '倒叙：收到老师来信→回忆：老师到来→相处：打开世界的窗→离别：车站送行→回到现在：信的内容',
          architectureEn: 'Flashback: receiving teacher\'s letter → Memory: teacher\'s arrival → Together: opening a window to the world → Farewell: station send-off → Present: letter\'s content',
          logic: '以一封信为线索，串联相遇—相知—离别的完整情感弧线。',
          logicEn: 'A letter as thread, connecting meeting—knowing—parting into a complete emotional arc.',
          skills: ['倒叙悬念感强', '细节真实感人', '书信体嵌套叙事'],
          skillsEn: ['Strong suspense from reverse chronology', 'Authentic touching details', 'Letter embedded in narrative'],
          fullText: '今天收到一封信，邮戳上写着\u201c上海\u201d。拆开信封，一张照片滑了出来——东方明珠塔在夜色里亮着橙色的光，背面用熟悉的字迹写着：\u201c还记得我答应你的吗？这就是大城市的夜晚。\u201d\n\n我当然记得。那是两年前的秋天。\n\n我们村小学来了一位支教老师，姓林，戴眼镜，皮肤白白的，一看就是城里人。同学们躲在教室门口偷偷看她，没人敢靠近。第一节课，她没有翻课本，而是在黑板上画了一幅世界地图：\u201c你们知道吗，在地球的另一边，有一片大草原，斑马和长颈鹿在上面跑。\u201d我们瞪大了眼睛——我们连县城都没去过，她说的那些地方，像神话一样遥远。\n\n林老师教我们读书，但不只是课本上的字。她带来了一箱子绘本和故事书，午休时间读给我们听。她教我们用树叶做书签，用石头画画。她说：\u201c世界很大，你们一定要走出去看看。\u201d\n\n最难忘的是那个冬天的晚上。我们几个学生围着火炉烤红薯，林老师坐在旁边，用手机给我们看城市的照片。高楼大厦、地铁、游乐场……我指着东方明珠塔问：\u201c那个亮亮的是什么？\u201d她笑着说：\u201c那叫东方明珠，在上海。等我回去了，给你寄一张它的照片。\u201d\n\n学期结束的那天，全班都哭了。我们跑到村口的土路上追她坐的那辆面包车，追了好远好远，直到车变成一个小黑点消失在山弯里。我站在路边喘着气，攥着她临走时塞给我的那支自动铅笔，哭得说不出话。\n\n现在，那支铅笔就插在我的笔袋里，笔杆上的字已经磨得看不清了。而这张照片，我要把它贴在床头。\n\n林老师，谢谢你。在我人生最初的十二年里，你是我遇到的最美好的相遇。你让我知道，山的那边，真的有一个发光的世界在等着我。',
          fullTextEn: 'Today I received a letter postmarked "Shanghai." Opening the envelope, a photo slid out—the Oriental Pearl Tower glowing orange against the night sky. On the back, in familiar handwriting: "Remember what I promised you? This is a big city at night."\n\nOf course I remember. It was autumn two years ago.\n\nA volunteer teacher came to our village school—Ms. Lin, bespectacled, fair-skinned, obviously from the city. Students hid behind the classroom door, peeking at her, nobody daring to approach. In her first class, she didn\'t open the textbook but drew a world map on the blackboard: "Did you know that on the other side of the earth, there\'s a vast grassland where zebras and giraffes run?" Our eyes went wide—we\'d never even been to the county seat. The places she described seemed as remote as myths.\n\nMs. Lin taught us to read, but not just textbook characters. She brought a box of picture books and storybooks, reading to us during lunch break. She taught us to make bookmarks from leaves and paint on stones. She said: "The world is so big—you must go out and see it someday."\n\nMost unforgettable was a winter evening. A few of us students gathered around the stove roasting sweet potatoes. Ms. Lin sat beside us, showing city photos on her phone. Skyscrapers, subways, amusement parks... I pointed at the Oriental Pearl Tower: "What\'s that shiny thing?" She smiled: "That\'s the Oriental Pearl, in Shanghai. When I go back, I\'ll send you a photo of it."\n\nThe day the semester ended, the whole class cried. We ran down the dirt road to the village entrance chasing her van, running and running until the vehicle became a tiny black dot disappearing around the mountain bend. I stood by the road gasping, clutching the mechanical pencil she\'d pressed into my hand before leaving, crying too hard to speak.\n\nNow that pencil sits in my pencil case, its printed words worn unreadable. And this photo—I\'m going to stick it by my bed.\n\nMs. Lin, thank you. In the first twelve years of my life, you are the most beautiful encounter I\'ve ever had. You showed me that beyond the mountains, there really is a luminous world waiting for me.',
          highlights: [
            { text: '追了好远好远，直到车变成一个小黑点消失在山弯里', textEn: 'Running and running until the vehicle became a tiny black dot disappearing around the mountain bend', why: '长镜头式描写，离别画面极具感染力', whyEn: 'Long-shot description—farewell scene with tremendous emotional power' },
            { text: '山的那边，真的有一个发光的世界在等着我', textEn: 'Beyond the mountains, there really is a luminous world waiting for me', why: '结尾呼应开头照片，意象优美', whyEn: 'Ending echoes the opening photo with beautiful imagery' }
          ],
          sections: [
            { type: '倒叙', fn: '悬念', fnEn: 'Suspense', detail: '收到一封信', detailEn: 'Receiving a letter' },
            { type: '回忆', fn: '相遇', fnEn: 'Meeting', detail: '支教老师到来', detailEn: 'Volunteer teacher arrives' },
            { type: '发展', fn: '相知', fnEn: 'Knowing', detail: '打开世界的窗', detailEn: 'Opening a window to the world' },
            { type: '高潮', fn: '离别', fnEn: 'Parting', detail: '追车送别', detailEn: 'Chasing the departing van' },
            { type: '回归', fn: '传承', fnEn: 'Legacy', detail: '照片与承诺', detailEn: 'Photo and promise' }
          ]
        },
        {
          title: '美好的相遇', titleEn: 'A Beautiful Encounter',
          score: 44, maxScore: 50,
          structure: 'pianDuanZuHe',
          techniques: ['wuGanMiaoXie','yiWuShuQing','fanFuDianTi'],
          techniqueMarks: [
            { para: 0, text: '还是会在某些时刻想起那个院子，想起住在隔壁的王奶奶，想起我们最初的相遇', technique: '排比回忆', techniqueEn: 'Parallel Remembrance', effect: '三个"想起"——思念层层递进，从地点到人到关系', effectEn: 'Three parallel "still think of" phrases — memory cascading from place to person to bond' },
            { para: 1, text: '夕阳把我们的影子拉得老长，她说：以后这些花也是你的', technique: '光影承诺', techniqueEn: 'Light and Promise', effect: '夕阳长影+一句承诺——画面与台词完美融合', effectEn: 'Sunset stretching their shadows long as she makes a quiet promise — image and dialogue fused into one tender moment' },
            { para: 2, text: '风穿过葡萄叶，把她的故事吹得又远又长', technique: '通感延伸', techniqueEn: 'Synesthetic Extension', effect: '故事像风一样有方向和距离——听觉变成了空间', effectEn: 'Stories given direction and distance like wind — hearing transformed into spatial experience' },
            { para: 2, text: '碗底沉着甜甜的冰糖', technique: '尾韵细节', techniqueEn: 'Lingering Detail', effect: '碗底的冰糖=被忽略的甜蜜——奶奶的爱也沉在日常底部', effectEn: 'Rock sugar at the bowl\'s bottom — overlooked sweetness mirroring grandma\'s love quietly settled beneath the everyday' },
            { para: 3, text: '掀开一看——金黄色的桂花糕，还温着热气', technique: '悬念揭示', techniqueEn: 'Unveiling', effect: '白布→桂花糕——先遮后揭，增添发现的惊喜感', effectEn: 'White cloth lifted to reveal warm golden cakes — concealment then revelation heightening the surprise' },
            { para: 3, text: '在纸条背面写了一句：谢谢奶奶，特别好吃', technique: '纸条对话', techniqueEn: 'Note Exchange', effect: '一来一回的纸条=无声的祖孙对话——质朴到极致', effectEn: 'A note exchanged back and forth — wordless grandparent-child conversation distilled to its purest form' },
            { para: 4, text: '织得不太均匀，有几针还漏了，但软乎乎的特别暖和', technique: '缺陷之美', techniqueEn: 'Beauty in Imperfection', effect: '不均匀+漏针=手作的温度——瑕疵比完美更动人', effectEn: 'Uneven stitches and missed loops — imperfections proving human warmth more touching than machine precision' },
            { para: 4, text: '我说：我奶奶。——虽然她不是，但在我心里，她就是', technique: '身份认同', techniqueEn: 'Identity Claim', effect: '一句话=情感的最高确认——血缘之外的亲情', effectEn: 'Claiming her as "my grandma" — a single lie that tells the deepest truth about bonds beyond blood' },
            { para: 5, text: '带着它，就跟奶奶在你身边一样', technique: '以物代人', techniqueEn: 'Object as Proxy', effect: '茉莉花=奶奶的分身——离别时把自己寄托在一盆花里', effectEn: 'A jasmine pot as the grandmother\'s surrogate — entrusting her presence to a living, blooming thing' },
            { para: 6, text: '每次闻到那股清香，我就回到了那个有花、有故事、有桂花糕的院子', technique: '嗅觉回溯', techniqueEn: 'Olfactory Flashback', effect: '茉莉花香=时光隧道——一种气味召回整个童年', effectEn: 'Jasmine fragrance as time portal — one scent summoning an entire courtyard childhood' }
          ],
          approach: '以春夏秋冬四个片段，写与邻居奶奶的日常相处，平淡中见真情。',
          approachEn: 'Four seasonal vignettes about daily interactions with a neighbor grandmother, finding true warmth in ordinary moments.',
          architecture: '春：院子里种花→夏：葡萄架下讲故事→秋：一碗桂花糕→冬：窗台上的围巾→尾声：搬家后的思念',
          architectureEn: 'Spring: planting flowers → Summer: stories under the grape arbor → Autumn: a bowl of osmanthus cake → Winter: a scarf on the windowsill → Coda: missing her after moving',
          logic: '以四季为结构，每个季节一个温暖细节，层层叠加情感。',
          logicEn: 'Structured by seasons, each with one warm detail, emotions layered gradually.',
          skills: ['四季结构工整', '五感描写丰富', '意象选取精准'],
          skillsEn: ['Neat seasonal structure', 'Rich sensory descriptions', 'Precisely chosen imagery'],
          fullText: '搬来新家已经三年了，可我还是会在某些时刻想起那个院子，想起住在隔壁的王奶奶，想起我们最初的相遇。\n\n【春】\n搬到那个院子的第一天是春天。我蹲在墙根下看蚂蚁，隔壁传来沙沙的声音。我踮起脚趴在矮墙上，看见一个白发老人在翻土种花。她抬头看见我，笑了：\u201c小家伙，喜欢花吗？来，帮奶奶浇水。\u201d那天下午，我捧着一只绿色的塑料水壶，在她的小花园里跑来跑去。夕阳把我们的影子拉得老长，她说：\u201c以后这些花也是你的。\u201d\n\n【夏】\n夏天最热的时候，王奶奶家的葡萄架是全院最凉快的地方。她搬出两把竹椅，递给我一碗绿豆汤，摇着蒲扇给我讲故事。她讲牛郎织女，讲嫦娥奔月，讲她年轻时在乡下插秧，讲她的孙子在很远的城市上班。风穿过葡萄叶，把她的故事吹得又远又长。我喝完绿豆汤，碗底沉着甜甜的冰糖。\n\n【秋】\n桂花开的那个下午，我放学回家，门口放着一只碗，上面盖着白布。掀开一看——金黄色的桂花糕，还温着热气。旁边压着一张纸条：\u201c刚做的，趁热吃。——王奶奶\u201d我端着碗坐在台阶上，一口一口地吃。空气里全是桂花的甜香，吃到最后一块，我把碗洗干净放回她家门口，在纸条背面写了一句：\u201c谢谢奶奶，特别好吃。\u201d\n\n【冬】\n最冷的那几天，我早上起来发现窗台上放着一条红色的手织围巾。织得不太均匀，有几针还漏了，但软乎乎的特别暖和。妈妈说是王奶奶昨晚送来的，说怕我上学路上冻着。我围着那条围巾去学校，红色在雪地里特别显眼。同学问我谁织的，我说：\u201c我奶奶。\u201d——虽然她不是，但在我心里，她就是。\n\n后来我们搬了家。搬家那天，王奶奶站在门口看了很久，最后塞给我一小盆她养的茉莉花：\u201c带着它，就跟奶奶在你身边一样。\u201d\n\n三年了，茉莉花还活着，每年夏天都开。每次闻到那股清香，我就回到了那个有花、有故事、有桂花糕的院子。那是我最美好的相遇——一段不是亲人、胜似亲人的缘分。',
          fullTextEn: 'It\'s been three years since we moved, but at certain moments I still think of that courtyard, of Grandma Wang next door, of our first meeting.\n\n[Spring]\nThe day we moved to that courtyard was in spring. I squatted by the wall watching ants when rustling sounds came from next door. Standing on tiptoe, I peered over the low wall and saw a white-haired old woman turning soil to plant flowers. She looked up, saw me, and smiled: "Little one, do you like flowers? Come help Grandma water them." That afternoon, I ran around her little garden holding a green plastic watering can. The setting sun stretched our shadows long, and she said: "From now on, these flowers are yours too."\n\n[Summer]\nDuring the hottest summer days, Grandma Wang\'s grape arbor was the coolest spot in the courtyard. She\'d bring out two bamboo chairs, hand me a bowl of mung bean soup, and wave a palm-leaf fan while telling stories. She told of the Cowherd and the Weaver Girl, of Chang\'e flying to the moon, of planting rice paddies in her youth, of her grandson working in a faraway city. Wind threading through grape leaves carried her stories far and long. When I finished the soup, rock sugar lingered sweet at the bottom.\n\n[Autumn]\nThe afternoon the osmanthus bloomed, I came home from school to find a bowl at my door, covered with white cloth. Lifting it—golden osmanthus cake, still warm. A note was tucked beneath: "Just made—eat it warm. —Grandma Wang." I sat on the steps eating, bite by bite. The air was saturated with osmanthus sweetness. After the last piece, I washed the bowl, returned it to her door, and wrote on the note\'s back: "Thank you, Grandma. It was especially delicious."\n\n[Winter]\nDuring the coldest days, I woke to find a red hand-knitted scarf on my windowsill. The stitching was uneven, a few loops missed, but it was wonderfully soft and warm. Mom said Grandma Wang had brought it last night, worried I\'d freeze on the way to school. I wore that scarf to school—red stood out vividly against the snow. When classmates asked who knitted it, I said: "My grandma."—She wasn\'t, really, but in my heart she was.\n\nLater we moved away. On moving day, Grandma Wang stood in her doorway watching for a long time, then pressed a small pot of jasmine into my hands: "Take it with you, and it\'ll be like Grandma is right beside you."\n\nThree years now, and the jasmine is still alive, blooming every summer. Whenever I catch that clean fragrance, I\'m back in that courtyard with its flowers, stories, and osmanthus cake. That is my most beautiful encounter—a bond not of blood, yet closer than family.',
          highlights: [
            { text: '风穿过葡萄叶，把她的故事吹得又远又长', textEn: 'Wind threading through grape leaves carried her stories far and long', why: '通感手法，故事与风融为一体', whyEn: 'Synesthesia—stories and wind merge together' },
            { text: '我说：我奶奶。——虽然她不是，但在我心里，她就是', textEn: '"My grandma." She wasn\'t, really, but in my heart she was', why: '朴素一句话蕴含深厚感情', whyEn: 'A simple sentence holding profound emotion' }
          ],
          sections: [
            { type: '春', fn: '相遇', fnEn: 'Meeting', detail: '浇花结缘', detailEn: 'Bond through watering flowers' },
            { type: '夏', fn: '相伴', fnEn: 'Companionship', detail: '葡萄架下的故事', detailEn: 'Stories under the grape arbor' },
            { type: '秋', fn: '温暖', fnEn: 'Warmth', detail: '桂花糕的味道', detailEn: 'The taste of osmanthus cake' },
            { type: '冬', fn: '关爱', fnEn: 'Care', detail: '红围巾的温度', detailEn: 'The warmth of a red scarf' },
            { type: '尾声', fn: '延续', fnEn: 'Continuation', detail: '茉莉花的陪伴', detailEn: 'The jasmine\'s companionship' }
          ]
        },
        {
          title: '美好的相遇', titleEn: 'A Beautiful Encounter',
          score: 45, maxScore: 50,
          structure: 'diJinShi',
          techniques: ['xuanNian','xinLiMiaoXie','duiBi'],
          techniqueMarks: [
            { para: 0, text: '柜子最上层的那把旧吉他，曾经是我最讨厌的东西', technique: '悬念反转', techniqueEn: 'Suspenseful Reversal', effect: '"最讨厌"开篇——暗示结局必然走向"最喜爱"', effectEn: 'Opening with "the thing I hated most" — foreshadowing an inevitable reversal toward love' },
            { para: 1, text: '第一天就把手指按出了血泡', technique: '痛感细节', techniqueEn: 'Pain Detail', effect: '血泡=身体拒绝——生理排斥强化心理排斥', effectEn: 'Blood blisters on day one — the body\'s rejection reinforcing the mind\'s resistance' },
            { para: 1, text: '弹出来的声音像锯木头', technique: '贬义比喻', techniqueEn: 'Derogatory Simile', effect: '锯木头=噪音——与后文"雨滴"形成极端对比', effectEn: 'Sound like sawing wood — noise that will later contrast sharply with raindrops in a pond' },
            { para: 2, text: '叮——咚——叮——几个简单的音符串在一起，竟然意外地好听', technique: '拟声转折', techniqueEn: 'Onomatopoeic Turn', effect: '三个拟声词=意外之美——无意中发现音乐的那一秒', effectEn: 'Three onomatopoeic notes strung together — the accidental second when noise becomes music' },
            { para: 2, text: '像雨滴落进水潭，一圈一圈荡开来', technique: '通感比喻', techniqueEn: 'Synesthetic Simile', effect: '声音→水波——听觉可视化，也暗喻音乐在心中荡开', effectEn: 'Sound rendered as ripples — hearing made visible, also the music\'s spreading resonance in his heart' },
            { para: 3, text: '没有教材，没有老师，只有我和琴弦之间的对话', technique: '排比否定', techniqueEn: 'Negative Parallelism', effect: '否定外在条件+肯定内在连接——真正的学习是对话', effectEn: 'Negating all external aids to affirm the one thing that matters — a private conversation with the strings' },
            { para: 3, text: '窗外的雨不知什么时候停了，天边露出一道彩虹', technique: '环境呼应', techniqueEn: 'Environmental Echo', effect: '雨停+彩虹——外景完美映射内心的雨过天晴', effectEn: 'Rain stopping, rainbow appearing — the outer landscape perfectly mirroring the inner clearing' },
            { para: 4, text: '它不会嘲笑我弹错音，不会催我赶作业，不会问我考了多少分', technique: '排比拟人', techniqueEn: 'Parallel Personification', effect: '三个"不会"——吉他被赋予人格，却比所有人都温柔', effectEn: 'Three things the guitar never does — personified yet gentler than every human in the narrator\'s life' },
            { para: 5, text: '那一刻，世界安静了', technique: '时间凝固', techniqueEn: 'Frozen Moment', effect: '短句独立——登台的紧张在一秒内化为宁静', effectEn: 'A short sentence standing alone — stage fright dissolving into stillness the instant fingers meet strings' },
            { para: 6, text: '那个曾经内向得不敢在课堂上回答问题的男生，站在舞台中央笑了', technique: '第三人称回望', techniqueEn: 'Third-Person Retrospective', effect: '跳出"我"用旁观视角——让蜕变的距离感更震撼', effectEn: 'Stepping outside "I" into an observer\'s gaze — the distance makes the transformation more striking' }
          ],
          approach: '写与音乐的相遇。从排斥到好奇到热爱，一把旧吉他改变了一个内向少年的整个世界。',
          approachEn: 'Meeting music. From rejection to curiosity to passion, an old guitar transforms an introverted teenager\'s entire world.',
          architecture: '第一层：被迫学琴的痛苦→第二层：偶然弹出旋律的惊喜→第三层：音乐打开心扉→升华：遇见音乐就是遇见自己',
          architectureEn: 'Layer 1: pain of forced learning → Layer 2: surprise of accidentally creating melody → Layer 3: music opens the heart → Elevation: meeting music means meeting yourself',
          logic: '以对吉他态度的三次转变为层次，展现与音乐相遇后的渐进式蜕变。',
          logicEn: 'Three attitude shifts toward the guitar as layers, showing gradual transformation through meeting music.',
          skills: ['递进层次鲜明', '心理变化细腻', '以物喻人生'],
          skillsEn: ['Clear progressive layers', 'Nuanced psychological shifts', 'Object as life metaphor'],
          fullText: '柜子最上层的那把旧吉他，曾经是我最讨厌的东西。\n\n那是爸爸年轻时弹过的琴，琴弦生了锈，音箱有一道裂缝。初一暑假，妈妈非要我学一门乐器：\u201c男孩子要有个特长。\u201d我不情不愿地把那把吉他从柜子里拖出来，第一天就把手指按出了血泡。和弦怎么也按不住，弹出来的声音像锯木头。我烦透了，把吉他往角落一扔，赌气不练了。\n\n转折发生在一个雨天的下午。停电了，写不了作业，手机也没电。我百无聊赖地坐在窗边，听雨敲打屋檐。不知道为什么，我走过去拿起了那把吉他。不想练和弦，就随便拨弄琴弦。叮——咚——叮——几个简单的音符串在一起，竟然意外地好听。像雨滴落进水潭，一圈一圈荡开来。\n\n那个下午，我抱着吉他坐了两个小时。没有教材，没有老师，只有我和琴弦之间的对话。我试着把听过的歌一个音一个音地找出来，找到一个对的音就高兴得不得了。窗外的雨不知什么时候停了，天边露出一道彩虹。\n\n从那天起，吉他成了我最亲密的伙伴。开心的时候弹一首欢快的，难过的时候弹一首忧伤的。它不会嘲笑我弹错音，不会催我赶作业，不会问我考了多少分。它只是安安静静地待在我怀里，等我把心里的话变成旋律。\n\n上个月的校园才艺展上，我抱着那把旧吉他站上了舞台。灯光刺眼，台下黑压压的人头。我深吸一口气，手指落在琴弦上——那一刻，世界安静了。一首《平凡之路》从指尖流淌出来，我看到台下有人闭上眼睛，有人跟着轻轻哼唱。弹完最后一个音，掌声雷动。\n\n那个曾经内向得不敢在课堂上回答问题的男生，站在舞台中央笑了。\n\n我想，人生中最美好的相遇，就是在一个不经意的瞬间，遇见了让你成为更好的自己的那个\u201c东西\u201d。对我来说，那个东西是一把旧吉他，一段旋律，和一个雨天的下午。',
          fullTextEn: 'That old guitar on the top shelf of the closet was once the thing I hated most.\n\nIt was my father\'s guitar from his youth—rusted strings, a crack in the soundbox. During the summer before eighth grade, Mom insisted I learn an instrument: "A boy needs a talent." Reluctantly, I dragged the guitar from the closet. By day one, my fingers had blood blisters. I couldn\'t hold down chords; the sounds I made resembled sawing wood. Thoroughly fed up, I threw it in the corner and refused to practice.\n\nThe turning point came on a rainy afternoon. The power went out, so I couldn\'t do homework, and my phone was dead. Bored, I sat by the window listening to rain drumming on the eaves. For some reason, I walked over and picked up the guitar. Not wanting to practice chords, I just plucked random strings. Ding—dong—ding—a few simple notes strung together sounded unexpectedly lovely. Like raindrops falling into a pond, rippling outward in circles.\n\nThat afternoon, I held the guitar for two hours. No textbook, no teacher—just a conversation between me and the strings. I tried finding songs note by note, thrilled at every correct one. The rain outside had stopped without my noticing, and a rainbow appeared at the edge of the sky.\n\nFrom that day on, the guitar became my closest companion. Happy times got an upbeat tune; sad times got a melancholy one. It never mocked my wrong notes, never rushed me to do homework, never asked my test scores. It just sat quietly in my arms, waiting for me to turn heart-whispers into melodies.\n\nLast month at the school talent show, I carried that old guitar onto the stage. Blinding lights, a sea of heads below. I took a deep breath, fingers touching the strings—in that moment, the world went quiet. "The Ordinary Road" flowed from my fingertips. I saw people below closing their eyes, others softly humming along. After the last note, thunderous applause.\n\nThat boy who used to be too introverted to answer questions in class stood at center stage and smiled.\n\nI think life\'s most beautiful encounter is finding, in an unplanned moment, that "thing" which makes you a better version of yourself. For me, it was an old guitar, a melody, and a rainy afternoon.',
          highlights: [
            { text: '像雨滴落进水潭，一圈一圈荡开来', textEn: 'Like raindrops falling into a pond, rippling outward in circles', why: '通感比喻，将声音可视化', whyEn: 'Synesthetic metaphor visualizing sound' },
            { text: '那个曾经内向得不敢在课堂上回答问题的男生，站在舞台中央笑了', textEn: 'That boy who was once too introverted to answer questions in class stood at center stage and smiled', why: '第三人称回望，前后对比强烈', whyEn: 'Third-person retrospective creating powerful before-and-after contrast' }
          ],
          sections: [
            { type: '第一层', fn: '排斥', fnEn: 'Rejection', detail: '被迫学琴', detailEn: 'Forced to learn' },
            { type: '第二层', fn: '转折', fnEn: 'Turning point', detail: '雨天的意外发现', detailEn: 'Rainy-day discovery' },
            { type: '第三层', fn: '热爱', fnEn: 'Passion', detail: '音乐成为伙伴', detailEn: 'Music becomes companion' },
            { type: '升华', fn: '蜕变', fnEn: 'Transformation', detail: '遇见更好的自己', detailEn: 'Meeting a better self' }
          ]
        }
      ]
    },
    {
      id: 'yn2010_comp1',
      paperId: 'yn2010',
      year: 2010,
      region: '云南省',
      prompt: '请以"属于自己的天空"为题，写一篇文章。要求：立意自定，文体自选（诗歌除外）；说真话，抒真情，忌抄袭；文中不要使用真实的地名、校名、人名；书写工整，不少于600字。',
      promptEn: 'Write an essay titled "A Sky of My Own". Requirements: choose your own theme and genre (except poetry); be sincere and authentic; do not use real names; at least 600 words.',
      type: 'narrative',
      category: '记叙文',
      categoryEn: 'Narrative',
      wordCount: 600,
      guide: {
        analysis: '"属于自己的天空"是一个比喻性题目。"天空"象征自由、梦想、个性空间。可以写寻找自我、追求梦想、突破束缚的故事。关键是写出"自己的"——独特的、个性化的、不随波逐流的。',
        analysisEn: 'This is a metaphorical title. "Sky" symbolizes freedom, dreams, and personal space. Write about finding oneself, pursuing dreams, or breaking free. The key is "my own"—unique, individualized, not following the crowd.',
        keyPoints: ['理解"天空"的象征义', '写出"属于自己"的独特性', '展现寻找或守护的过程', '有具体事件支撑主题'],
        keyPointsEn: ['Understand the symbolic meaning of "sky"', 'Show the uniqueness of "my own"', 'Present the process of seeking or guarding', 'Support theme with concrete events'],
        pitfalls: ['空谈理想不落实处', '把"天空"仅理解为字面意思', '缺乏个人经历的独特性'],
        pitfallsEn: ['Empty idealism without grounding', 'Taking "sky" only literally', 'Lacking uniqueness of personal experience']
      },
      essays: [
        {
          title: '属于自己的天空', titleEn: 'A Sky of My Own',
          score: 47, maxScore: 50,
          structure: 'qiChengZhuanHe',
          techniques: ['xinLiMiaoXie','duiBi','xiangZheng'],
          techniqueMarks: [
            { para: 0, text: '我的天空应该是黑白的——钢琴键的黑与白。可我知道，我的天空是彩色的', technique: '色彩对比', techniqueEn: 'Color Antithesis', effect: '黑白vs彩色——两个世界的对立在开篇一句中建立', effectEn: 'Black-and-white versus colorful — two worlds set in opposition within the opening sentence' },
            { para: 1, text: '弹出的曲子像是从别人嘴里借来的话——正确，但没有灵魂', technique: '比喻揭示', techniqueEn: 'Revealing Metaphor', effect: '借来的话=被动学习——技术正确但情感缺席', effectEn: 'Music like borrowed speech — technically correct yet emotionally absent, the essence of compelled learning' },
            { para: 1, text: '它们像一排排整齐的牢笼', technique: '象征深化', techniqueEn: 'Deepened Symbolism', effect: '琴键=牢笼——黑白色调从审美对比升级为自由vs囚禁', effectEn: 'Piano keys as rows of neat cages — the color contrast escalates from aesthetic to existential: freedom versus captivity' },
            { para: 2, text: '颜料沾在指甲缝里，铅笔灰蹭在鼻尖上，我却觉得那是最美的妆容', technique: '反义审美', techniqueEn: 'Inverted Aesthetics', effect: '脏=美——画画时"狼狈"的细节被赋予审美价值', effectEn: 'Paint under nails and graphite on her nose redefined as the most beautiful makeup — mess as artistry' },
            { para: 2, text: '那支画笔，就是我的翅膀', technique: '核心象征', techniqueEn: 'Core Symbol', effect: '画笔=翅膀——独立成句，点明画画=飞翔=自由', effectEn: 'The brush as wings — a single sentence crystallizing painting as flight, flight as freedom' },
            { para: 3, text: '她把我所有的画笔和颜料锁进了柜子', technique: '动作冲突', techniqueEn: 'Action Conflict', effect: '锁=剥夺自由——母亲以爱之名关上天空', effectEn: 'Locking brushes in a cabinet — the mother\'s love expressed as the confiscation of flight' },
            { para: 3, text: '觉得头顶那片彩色的天空被人生生撕碎了', technique: '心理描写', techniqueEn: 'Psychological Description', effect: '撕碎天空——内心世界的暴力崩塌', effectEn: 'Her colorful sky torn apart — an inner world violently collapsing' },
            { para: 4, text: '一个女孩坐在黑白的钢琴前，窗外却是漫天的彩色星辰', technique: '画中点题', techniqueEn: 'Theme in Painting', effect: '参展画=全文的缩影——黑白室内vs彩色窗外', effectEn: 'The exhibition painting mirrors the essay itself — a black-and-white interior and a colorful sky beyond the window' },
            { para: 6, text: '对不起，妈妈一直以为在帮你铺路，没想到堵了你的天空', technique: '母亲觉醒', techniqueEn: 'Mother\'s Awakening', effect: '铺路vs堵天空——两个动词的反转完成母女和解', effectEn: 'Paving a road versus blocking a sky — two verbs reversing the mother\'s entire understanding' },
            { para: 8, text: '弹琴的时候开始画旋律的颜色，画画的时候也能听到色彩的声音', technique: '通感融合', techniqueEn: 'Synesthetic Fusion', effect: '听色彩+画旋律——两个世界不再对立而是交融', effectEn: 'Painting the color of melody, hearing the sound of color — two worlds no longer opposed but fused into one' }
          ],
          approach: '写一个被父母安排学钢琴的女孩，偷偷坚持画画，最终在画展上获奖，找到属于自己的天空。',
          approachEn: 'A girl forced by parents to learn piano secretly persists in painting, eventually winning an art exhibition and finding her own sky.',
          architecture: '起：钢琴课的压抑→承：偷偷画画的快乐→转：被发现的冲突→合：画展获奖，父母理解',
          architectureEn: 'Beginning: oppression of piano lessons → Development: secret joy of painting → Turn: conflict when discovered → Resolution: exhibition win, parents understand',
          logic: '以兴趣与期望的冲突为主线，展现坚持自我最终获得认可的过程。',
          logicEn: 'The conflict between interest and expectation as the main line, showing how persisting in being yourself eventually gains recognition.',
          skills: ['象征手法贯穿全文', '心理描写层次丰富', '转折有力'],
          skillsEn: ['Symbolism throughout', 'Rich psychological layers', 'Powerful turning point'],
          fullText: '在别人眼里，我的天空应该是黑白的——钢琴键的黑与白。可我知道，我的天空是彩色的。\n\n从五岁起，妈妈就让我学钢琴。每天放学后雷打不动地练两个小时，周末还要去老师家上课。钢琴凳上坐得腰酸背痛，手指在琴键上机械地跑动，弹出的曲子像是从别人嘴里借来的话——正确，但没有灵魂。妈妈站在旁边，眉头紧锁：\u201c这一段再来一遍，节奏不对。\u201d我低头看着琴键，觉得它们像一排排整齐的牢笼。\n\n可是，每当我拿起画笔，整个世界就不一样了。我在草稿本上画小人，在课本空白处画风景，在卧室墙角偷偷画了一片星空。颜料沾在指甲缝里，铅笔灰蹭在鼻尖上，我却觉得那是最美的妆容。画画的时候，我不需要节拍器，不需要五线谱，不需要任何人告诉我\u201c对\u201d或\u201c错\u201d。那支画笔，就是我的翅膀。\n\n但这一切都是偷偷进行的。直到初二那个冬天，妈妈翻我书包找作业本，翻出了一沓画。她的脸色变了：\u201c你把画画的时间用来练琴，早就过八级了！\u201d那天晚上，她把我所有的画笔和颜料锁进了柜子。我趴在床上哭了很久，觉得头顶那片彩色的天空被人生生撕碎了。\n\n是美术老师救了我。她发现了我课本上的画，悄悄报名让我参加市里的青少年画展。参展作品的主题是\u201c我的世界\u201d。我偷偷用仅剩的一盒水彩，花了三个晚上画完——画面上，一个女孩坐在黑白的钢琴前，窗外却是漫天的彩色星辰。\n\n那幅画拿了一等奖。\n\n颁奖典礼上，妈妈坐在台下，手里攥着获奖证书，眼眶红红的。回家的路上，她沉默了很久，最后说了一句：\u201c对不起，妈妈一直以为在帮你铺路，没想到堵了你的天空。\u201d\n\n那天晚上，她打开了柜子，把画笔和颜料一样一样地递给我。我接过来，眼泪啪嗒啪嗒地掉。\n\n如今，我的书桌左边摆着画架，右边还是那架钢琴。不同的是，我弹琴的时候开始画旋律的颜色，画画的时候也能听到色彩的声音。我终于明白：属于自己的天空，不是用来逃离什么，而是在那片天空下，做最真实的自己。',
          fullTextEn: 'In others\' eyes, my sky should be black and white—the black and white of piano keys. But I know my sky is colorful.\n\nSince age five, Mom had me learn piano. Two hours of practice every day after school, rain or shine, plus weekend lessons at the teacher\'s house. My back ached from the piano bench; fingers ran mechanically across keys; the music I played felt like words borrowed from someone else\'s mouth—correct, but soulless. Mom stood beside me, brow furrowed: "Play that section again—the rhythm\'s wrong." I looked down at the keys and thought they resembled rows of neat little cages.\n\nBut whenever I picked up a paintbrush, the whole world transformed. I drew stick figures in my notebook, landscapes in textbook margins, and secretly painted a starry sky in my bedroom corner. Paint stuck under my fingernails, pencil dust smudged my nose tip, yet I felt it was the most beautiful makeup. When painting, I needed no metronome, no sheet music, no one telling me "right" or "wrong." That brush was my wings.\n\nBut all this was done in secret. Until that winter in eighth grade, when Mom searched my bag for homework and found a stack of paintings. Her expression changed: "If you\'d spent all that painting time practicing, you\'d have passed Grade 8 already!" That night, she locked all my brushes and paints in a cabinet. I cried on my bed for hours, feeling my colorful sky had been torn apart.\n\nMy art teacher saved me. She noticed my textbook sketches and quietly entered me in the city youth art exhibition. The theme was "My World." Using my last box of watercolors, I painted for three nights—a girl sitting before a black-and-white piano, but through the window, a sky full of colorful stars.\n\nThat painting won first prize.\n\nAt the awards ceremony, Mom sat in the audience clutching the certificate, eyes rimmed red. On the way home, she was silent for a long time, then said: "I\'m sorry. I always thought I was paving your road. I didn\'t realize I was blocking your sky."\n\nThat evening, she opened the cabinet and handed my brushes and paints back one by one. I took them, tears falling patter-patter.\n\nNow my desk has an easel on the left and that same piano on the right. The difference is: when I play piano, I\'ve started painting the colors of melody; when I paint, I can hear the sounds of color. I finally understand: a sky of your own isn\'t about escaping something—it\'s about being your truest self under that sky.',
          highlights: [
            { text: '弹出的曲子像是从别人嘴里借来的话——正确，但没有灵魂', textEn: 'The music I played felt like words borrowed from someone else\'s mouth — correct, but soulless', why: '比喻精准，道出被动学习的本质', whyEn: 'Precise metaphor capturing the essence of passive learning' },
            { text: '妈妈一直以为在帮你铺路，没想到堵了你的天空', textEn: 'I always thought I was paving your road — I didn\'t realize I was blocking your sky', why: '母亲的顿悟，语言质朴却震撼', whyEn: 'Mother\'s epiphany—plain language with powerful impact' }
          ],
          sections: [
            { type: '起', fn: '对比', fnEn: 'Contrast', detail: '黑白vs彩色的天空', detailEn: 'Black-white vs colorful sky' },
            { type: '承', fn: '秘密', fnEn: 'Secret', detail: '偷偷画画的快乐', detailEn: 'Secret joy of painting' },
            { type: '转', fn: '冲突', fnEn: 'Conflict', detail: '画笔被锁', detailEn: 'Brushes locked away' },
            { type: '合', fn: '和解', fnEn: 'Reconciliation', detail: '获奖后的理解', detailEn: 'Understanding after winning' }
          ]
        },
        {
          title: '属于自己的天空', titleEn: 'A Sky of My Own',
          score: 45, maxScore: 50,
          structure: 'diJinShi',
          techniques: ['huanjingMiaoXie','dongZuoMiaoXie','shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '我的天空，是四百米的跑道', technique: '定义式开篇', techniqueEn: 'Definitional Opening', effect: '一句话把天空=跑道——具体、有力、毫不犹豫', effectEn: 'One sentence equating sky with track — concrete, forceful, unhesitating' },
            { para: 1, text: '说话带口音，穿的衣服总是旧旧的', technique: '身份标记', techniqueEn: 'Identity Markers', effect: '口音+旧衣——两笔勾出城乡鸿沟', effectEn: 'Accent and worn clothes — two strokes sketching the urban-rural divide' },
            { para: 2, text: '前面的人开始减速、喘气、弯腰。我的腿没有累，呼吸也还平稳', technique: '动作对比', techniqueEn: 'Action Contrast', effect: '别人减速vs我不累——天赋在无声中显现', effectEn: 'Others slowing, gasping, bending while his legs stay fresh — talent revealing itself without fanfare' },
            { para: 2, text: '冲过终点线的时候，全班安静了三秒钟', technique: '以静写震撼', techniqueEn: 'Silence as Impact', effect: '三秒沉默——比欢呼更有戏剧力', effectEn: 'Three seconds of stunned silence — more dramatic than any cheering could be' },
            { para: 3, text: '两分二十一秒？你以前练过？', technique: '对话揭示', techniqueEn: 'Dialogue Revelation', effect: '老师的惊讶替读者说出感叹——成绩惊人', effectEn: 'The coach\'s astonishment voices the reader\'s own amazement — the time speaks for itself' },
            { para: 4, text: '天还没亮，跑道上的白线在路灯下泛着微光', technique: '环境烘托', techniqueEn: 'Environmental Atmosphere', effect: '路灯+白线微光——黎明前的孤独训练有了仪式感', effectEn: 'Track lines glowing under streetlamps before dawn — solitary training elevated to ritual' },
            { para: 4, text: '风从耳边呼啸而过，天地之间只有我和脚下的路', technique: '感官聚焦', techniqueEn: 'Sensory Focus', effect: '风声+天地间只有我——跑步时外界消失，只剩自我', effectEn: 'Wind howling past, only sky, earth, and road — the world falls away, leaving only the self in motion' },
            { para: 5, text: '我像一支离弦的箭射了出去', technique: '比喻加速', techniqueEn: 'Simile of Speed', effect: '箭=爆发力——呼应首段的天赋', effectEn: 'An arrow from a bow — the same explosive gift, now refined by months of training' },
            { para: 5, text: '是我们班的同学在喊我的名字。第一次，他们在为我喊加油', technique: '首尾呼应', techniqueEn: 'Opening-Closing Echo', effect: '从没人选我→全班为我喊名字——身份逆转在欢呼中完成', effectEn: 'From no one picking him to the whole class chanting his name — identity reversal completed in a single cheer' },
            { para: 7, text: '没有山里和城里的区别，没有旧衣服和新衣服的差距——只有起点、终点，和一颗不服输的心', technique: '排比点题', techniqueEn: 'Parallel Thematic Close', effect: '否定差距+肯定本质——跑道是唯一公平的天空', effectEn: 'Negating every divide, affirming only start, finish, and an unyielding heart — the track as the one fair sky' }
          ],
          approach: '写一个农村男孩通过跑步找到自信。从被嘲笑到在田径赛上夺冠，跑道就是他的天空。',
          approachEn: 'A rural boy finds confidence through running. From being mocked to winning track championships, the track is his sky.',
          architecture: '第一层：被嘲笑的自卑→第二层：发现跑步天赋→第三层：刻苦训练→冲刺：赛场夺冠→升华：跑道即天空',
          architectureEn: 'Layer 1: mocked insecurity → Layer 2: discovering running talent → Layer 3: rigorous training → Sprint: winning the race → Elevation: the track is my sky',
          logic: '以跑步为线索，递进展现从自卑到自信的成长过程。',
          logicEn: 'Running as the thread, progressively showing growth from insecurity to confidence.',
          skills: ['动作描写有力', '环境烘托心理', '首尾呼应'],
          skillsEn: ['Powerful action descriptions', 'Environment echoes psychology', 'Opening-closing echo'],
          fullText: '我的天空，是四百米的跑道。\n\n在那之前，我以为我没有天空。我来自山里，说话带口音，穿的衣服总是旧旧的。刚转到城里的学校时，同学们看我的眼神像在看一个异类。体育课分组，没人愿意和我一队。课间休息，我总是一个人坐在操场角落，看着别人打打闹闹。\n\n改变发生在初一下学期的体育课。老师让全班跑八百米测试。我穿着一双洗得发白的运动鞋，站在起跑线上。枪声一响，所有人冲了出去。前两百米我跟在人群后面，不紧不慢。四百米时，前面的人开始减速、喘气、弯腰。我的腿没有累，呼吸也还平稳。最后两百米，我开始加速，一个接一个地超过去。冲过终点线的时候，全班安静了三秒钟。\n\n体育老师看了看秒表，眼睛亮了：\u201c两分二十一秒？你以前练过？\u201d我摇摇头。他拍了拍我的肩膀：\u201c来田径队吧。\u201d\n\n从那天起，每天早上六点，操场上多了一个奔跑的身影。天还没亮，跑道上的白线在路灯下泛着微光。我一圈一圈地跑，汗水湿透了背心。冬天最冷的时候，呼出的气变成白雾，脚趾冻得没有知觉，但只要跑起来，整个身体就热了。跑步的时候，没有人嘲笑我的口音，没有人在意我穿什么。风从耳边呼啸而过，天地之间只有我和脚下的路。\n\n区运动会那天，八百米决赛。发令枪响的那一刻，我像一支离弦的箭射了出去。弯道上我咬紧牙关，直道上我拼命摆臂。最后一百米，两条腿像灌了铅，肺像要炸开，但我听到了看台上的声音——是我们班的同学在喊我的名字。第一次，他们在为我喊加油。\n\n我冲过终点，瘫倒在草地上，大口大口地喘气。天空湛蓝，白云悠悠。同学们跑过来把我扶起来，有人递水，有人拍我的背。那个从来不跟我说话的男生搂着我的肩膀：\u201c你太厉害了！\u201d\n\n那一刻我才明白，属于自己的天空不是别人给的，是自己跑出来的。四百米跑道很短，但它是我的整个世界。在这条跑道上，没有山里和城里的区别，没有旧衣服和新衣服的差距——只有起点、终点，和一颗不服输的心。',
          fullTextEn: 'My sky is a four-hundred-meter track.\n\nBefore that, I thought I had no sky. I came from the mountains—spoke with an accent, always wore old clothes. When I transferred to the city school, classmates looked at me like an alien. During PE team selection, no one wanted me. At break, I always sat alone in a corner of the playground, watching others roughhouse.\n\nThe change happened during a PE class in the spring of seventh grade. The teacher had the whole class run an 800-meter test. Wearing faded white sneakers, I stood at the starting line. The gun fired; everyone surged forward. For the first 200 meters, I followed the pack, unhurried. At 400 meters, those ahead began slowing, gasping, bending over. My legs weren\'t tired; my breathing was still steady. In the final 200 meters, I accelerated, passing one person after another. When I crossed the finish line, the class went silent for three seconds.\n\nThe PE teacher checked his stopwatch, eyes lighting up: "Two twenty-one? Have you trained before?" I shook my head. He patted my shoulder: "Join the track team."\n\nFrom that day, every morning at six, there was a new figure running on the field. Before dawn, the track\'s white lines glowed faintly under streetlamps. I ran lap after lap, sweat soaking through my vest. In the coldest winter, my breath turned to white fog, toes went numb, but as soon as I started running, my whole body warmed. While running, nobody mocked my accent; nobody cared what I wore. Wind howled past my ears—between sky and earth, there was only me and the road beneath my feet.\n\nDistrict sports meet, 800-meter final. The moment the starting gun fired, I shot out like an arrow from a bow. On the curves, I gritted my teeth; on the straights, I pumped my arms furiously. The last 100 meters—legs like lead, lungs about to burst—but I heard the stands: my classmates shouting my name. For the first time, they were cheering for me.\n\nI crossed the finish line and collapsed on the grass, gasping heavily. The sky was crystal blue, white clouds drifting slowly. Classmates ran over to help me up—someone passed water, someone patted my back. The boy who\'d never spoken to me threw an arm around my shoulder: "You\'re amazing!"\n\nIn that moment, I understood: a sky of your own isn\'t given by others—you run your way into it. A 400-meter track is short, but it\'s my entire world. On this track, there\'s no difference between mountain and city, old clothes and new—only the start, the finish, and a heart that refuses to quit.',
          highlights: [
            { text: '冲过终点线的时候，全班安静了三秒钟', textEn: 'When I crossed the finish line, the class went silent for three seconds', why: '用静写动，三秒沉默比欢呼更有力', whyEn: 'Silence as power—three seconds more impactful than cheering' },
            { text: '属于自己的天空不是别人给的，是自己跑出来的', textEn: 'A sky of your own isn\'t given by others — you run your way into it', why: '哲理金句，照应标题', whyEn: 'Philosophical line echoing the title' }
          ],
          sections: [
            { type: '第一层', fn: '困境', fnEn: 'Difficulty', detail: '被排斥的新生', detailEn: 'Excluded newcomer' },
            { type: '第二层', fn: '发现', fnEn: 'Discovery', detail: '体能测试惊人', detailEn: 'Stunning fitness test' },
            { type: '第三层', fn: '磨练', fnEn: 'Training', detail: '清晨的跑道', detailEn: 'Dawn track sessions' },
            { type: '冲刺', fn: '证明', fnEn: 'Proof', detail: '赛场夺冠', detailEn: 'Race victory' },
            { type: '升华', fn: '领悟', fnEn: 'Insight', detail: '跑道即天空', detailEn: 'The track is my sky' }
          ]
        },
        {
          title: '属于自己的天空', titleEn: 'A Sky of My Own',
          score: 46, maxScore: 50,
          structure: 'zongFenZong',
          techniques: ['xiJieMiaoXie','yiWuShuQing','duiBi'],
          techniqueMarks: [
            { para: 0, text: '只有两平方米——家里阳台上那片小小的花园', technique: '反差开篇', techniqueEn: 'Contrast Opening', effect: '"天空"=两平方米——极小空间承载极大意义', effectEn: 'A sky of only two square meters — the radical smallness subverts expectation and concentrates meaning' },
            { para: 1, text: '每个人都低着头刷题，像一台台不知疲倦的机器', technique: '比喻批判', techniqueEn: 'Critical Simile', effect: '学生=机器——不是夸张而是精确的荒诞', effectEn: 'Students as tireless machines — not exaggeration but precise absurdity of exam-driven education' },
            { para: 3, text: '不挑土，不挑光，给点水就疯长', technique: '借物写人', techniqueEn: 'Object as Self-Portrait', effect: '薄荷的生命力=对自由的渴望——不需要条件只需要空间', effectEn: 'Mint that thrives anywhere — mirroring the narrator\'s resilience, needing only the barest space to grow' },
            { para: 3, text: '掐一片叶子放在手心搓两下，清凉的气息在指尖绽开', technique: '感官细节', techniqueEn: 'Sensory Detail', effect: '触觉+嗅觉——一个动作连通两种感官', effectEn: 'Touch and smell in one gesture — plucking, rubbing, fragrance blooming at the fingertips' },
            { para: 4, text: '胖嘟嘟地蹲在土上，像一朵绿色的花', technique: '拟人化', techniqueEn: 'Personification', effect: '多肉"蹲"在土上——植物有了人的姿态和可爱', effectEn: 'A succulent "squatting" plumply — personification giving the plant endearing human posture' },
            { para: 4, text: '种子是我从乡下带回来的，发芽的时候歪歪扭扭，我用筷子绑了根小棍儿当支架', technique: '叙事细节链', techniqueEn: 'Detail Chain', effect: '乡下种子→歪扭发芽→筷子支架——三个细节串出一条感情线', effectEn: 'Seeds from the countryside, crooked sprout, chopstick splint — three details forming an emotional thread' },
            { para: 5, text: '城市的灯火在远处闪烁，偶尔能看到几颗星星', technique: '远近交织', techniqueEn: 'Near-Far Interplay', effect: '近处花草+远处灯火星星——两平方米连通整个夜空', effectEn: 'Nearby greenery and distant city lights and stars — the tiny balcony opens onto the entire night sky' },
            { para: 6, text: '眼泪滴进了多肉的花盆里', technique: '意外融合', techniqueEn: 'Accidental Fusion', effect: '泪水浇花——人的悲伤与植物的生长在一盆土里相遇', effectEn: 'Tears watering the succulent — human grief and plant growth meeting in the same pot of soil' },
            { para: 6, text: '那棵歪歪扭扭的向日葵在风里晃着脑袋，像在对我说', technique: '拟人对话', techniqueEn: 'Personified Dialogue', effect: '向日葵"说话"——自然成为精神导师', effectEn: 'The crooked sunflower speaks in the wind — nature becomes spiritual counselor' },
            { para: 7, text: '我不是那个被分数追着跑的学生，我只是一个喜欢种花的女孩', technique: '身份重构', techniqueEn: 'Identity Reclamation', effect: '否定"被分数追的学生"+肯定"种花女孩"——在花园里找回自我定义权', effectEn: 'Rejecting "student chased by scores," claiming "girl who loves flowers" — reclaiming self-definition in the garden' }
          ],
          approach: '以阳台上的小花园为\u201c自己的天空\u201d，写一个在高压学业中通过种花获得内心平静的故事。',
          approachEn: 'A balcony garden as "my own sky," about finding inner peace through planting flowers amid academic pressure.',
          architecture: '总起：每个人都需要一片天空→分：学业压力→阳台花园→种花治愈→总结：方寸之地也是天空',
          architectureEn: 'Opening: everyone needs a sky → Detail: academic pressure → balcony garden → healing through planting → Conclusion: even a small space can be a sky',
          logic: '以花园与教室的对比为张力，展现外在逼仄中寻找内心自由的主题。',
          logicEn: 'Tension between garden and classroom, showing the theme of finding inner freedom amid external pressure.',
          skills: ['意象选取独特', '细节丰富真实', '以小空间写大主题'],
          skillsEn: ['Unique imagery choice', 'Rich authentic details', 'Big theme in small space'],
          fullText: '属于我的天空，只有两平方米——家里阳台上那片小小的花园。\n\n初三以后，生活变成了一张密不透风的网：六点起床，晚上十一点才放下笔。试卷一张接一张，排名一次次刷新。教室里的空气闷得让人喘不过气，每个人都低着头刷题，像一台台不知疲倦的机器。\n\n我的喘息之地，是阳台上那六个花盆。\n\n最早种的是一棵薄荷。那是初二时从学校花坛边捡的一截枝条，随手插在土里，没想到活了。它的生命力让我惊讶——不挑土，不挑光，给点水就疯长。每天早上出门前，我都会掐一片叶子放在手心搓两下，清凉的气息在指尖绽开。上课犯困的时候，悄悄闻一闻手指，精神就回来了。\n\n后来，花盆越来越多。多肉是同桌送的生日礼物，胖嘟嘟地蹲在土上，像一朵绿色的花。茉莉是奶奶寄来的，夏天开花的时候满阳台都是香味。最特别的是那株向日葵——种子是我从乡下带回来的，发芽的时候歪歪扭扭，我用筷子绑了根小棍儿当支架。它长得比花盆高出好多，金灿灿的花盘永远朝着太阳。\n\n每天晚上写完作业，我都会到阳台上站十分钟。给花浇浇水，剪剪枯叶，看看薄荷又长高了没有。夜风吹过来，带着泥土和花草的气息。城市的灯火在远处闪烁，偶尔能看到几颗星星。那十分钟，是我一整天里最安静、最自由的时刻。\n\n有一次考砸了，我蹲在阳台上哭。眼泪滴进了多肉的花盆里。抹掉眼泪的时候，我看到那棵歪歪扭扭的向日葵在风里晃着脑袋，像在对我说：\u201c没事的，明天太阳还会升起来。\u201d我破涕为笑，觉得自己连一棵花都不如——它在两平方米的花盆里都能开出金灿灿的花，我有什么理由放弃？\n\n属于自己的天空，不需要很大。一个阳台，几盆花草，十分钟的安静——这就够了。在这片小小的天空下，我不是那个被分数追着跑的学生，我只是一个喜欢种花的女孩。这，就是我最珍贵的自由。',
          fullTextEn: 'My sky is only two square meters—the little garden on our family\'s balcony.\n\nAfter ninth grade began, life became an airtight net: up at six, pen down at eleven. Test papers one after another, rankings constantly refreshing. The classroom air was suffocatingly stuffy; everyone hunched over practice sheets like tireless machines.\n\nMy breathing space was those six flowerpots on the balcony.\n\nThe first thing I planted was mint. In eighth grade, I\'d picked up a broken stem from the school flowerbed and stuck it in soil on a whim—it survived. Its vitality amazed me: not picky about soil or light, give it some water and it grows wild. Every morning before leaving, I\'d pluck a leaf and rub it between my palms—cool fragrance blooming at my fingertips. When drowsy in class, I\'d secretly sniff my fingers and feel refreshed.\n\nLater, the pots multiplied. The succulent was a birthday gift from my deskmate—plump and squat on the soil like a green flower. The jasmine was sent by Grandma—when it bloomed in summer, the whole balcony smelled wonderful. Most special was the sunflower—seeds I\'d brought from the countryside. The sprout grew crooked; I tied a chopstick as a splint. It grew far taller than the pot, its golden face forever turned toward the sun.\n\nEvery night after homework, I\'d stand on the balcony for ten minutes. Water the flowers, trim dead leaves, check if the mint had grown taller. Night breeze carried the scent of soil and greenery. City lights glimmered in the distance; sometimes a few stars appeared. Those ten minutes were the quietest, freest moment of my entire day.\n\nOnce, after bombing a test, I crouched on the balcony crying. Tears dripped into the succulent\'s pot. Wiping my eyes, I saw the crooked sunflower nodding its head in the wind, as if saying: "It\'s okay—the sun will rise again tomorrow." I laughed through my tears, feeling I wasn\'t even as good as a plant—it could bloom golden flowers in a two-square-meter pot, so what right did I have to give up?\n\nA sky of your own doesn\'t need to be big. A balcony, a few flowerpots, ten minutes of quiet—that\'s enough. Under this small sky, I\'m not the student chased by scores; I\'m just a girl who likes growing flowers. This is my most precious freedom.',
          highlights: [
            { text: '它在两平方米的花盆里都能开出金灿灿的花，我有什么理由放弃', textEn: 'It blooms golden in a two-square-meter pot — what right do I have to give up?', why: '借物喻己，花的坚韧映射人的力量', whyEn: 'Object as self-metaphor—flower\'s resilience mirrors human strength' },
            { text: '那十分钟，是我一整天里最安静、最自由的时刻', textEn: 'Those ten minutes were the quietest, freest moment of my entire day', why: '平实语言写出深沉感受', whyEn: 'Plain language expressing profound feeling' }
          ],
          sections: [
            { type: '总起', fn: '定义', fnEn: 'Definition', detail: '两平方米的天空', detailEn: 'A two-square-meter sky' },
            { type: '分', fn: '对比', fnEn: 'Contrast', detail: '教室压力vs阳台自由', detailEn: 'Classroom pressure vs balcony freedom' },
            { type: '分', fn: '细节', fnEn: 'Details', detail: '每盆花的故事', detailEn: 'Each pot\'s story' },
            { type: '分', fn: '治愈', fnEn: 'Healing', detail: '向日葵的启示', detailEn: 'The sunflower\'s lesson' },
            { type: '总结', fn: '升华', fnEn: 'Elevation', detail: '小空间大自由', detailEn: 'Big freedom in small space' }
          ]
        },
        {
          title: '属于自己的天空', titleEn: 'A Sky of My Own',
          score: 44, maxScore: 50,
          structure: 'pianDuanZuHe',
          techniques: ['duiHuaMiaoXie','fanFuDianTi','xuanNian'],
          techniqueMarks: [
            { para: 0, text: '我冲出教室，在操场上疯跑', technique: '动作速写', techniqueEn: 'Action Sketch', effect: '冲+疯跑——八岁的自由是肢体的、不假思索的', effectEn: 'Dash and wild running — at eight, freedom is physical and unthinking' },
            { para: 0, text: '觉得天好蓝好大，大到可以装下全世界', technique: '儿童视角', techniqueEn: 'Child\'s Perspective', effect: '用孩子的口吻写天空——纯真中暗含后文的对比', effectEn: 'A child\'s naive wonder at the sky\'s vastness — innocence that will soon be contrasted' },
            { para: 1, text: '课程越来越多，作业越来越厚，操场变成了体育课才去的地方', technique: '递进压缩', techniqueEn: 'Progressive Compression', effect: '三个"越来越"+"才"——自由空间被层层挤压', effectEn: 'Escalating constraints — courses multiply, homework thickens, the playground shrinks to PE class only' },
            { para: 1, text: '那些密密麻麻的光点，像是无数个遥远的世界在对我眨眼睛', technique: '拟人化发现', techniqueEn: 'Personified Discovery', effect: '星星眨眼=遥远世界在召唤——被困的少年重新看到可能性', effectEn: 'Stars winking like distant worlds — a trapped teenager rediscovering possibility through an accidental glance upward' },
            { para: 2, text: '在书桌的玻璃板下面压了一张星空的明信片', technique: '物件象征', techniqueEn: 'Object Symbolism', effect: '明信片=微缩的天空——把天空"随身携带"', effectEn: 'A postcard under glass — the sky miniaturized and carried everywhere, a portable reminder of vastness' },
            { para: 2, text: '数学里有宇宙的密码，语文里有千年的回声，英语里有远方的声音', technique: '排比升华', techniqueEn: 'Parallel Elevation', effect: '三科=三个宇宙——书桌不是牢笼而是星际港', effectEn: 'Three subjects as three universes — math holds cosmic codes, Chinese echoes millennia, English carries distant voices' },
            { para: 2, text: '书桌上的每一本书，都是一扇通往星辰的窗', technique: '意象总结', techniqueEn: 'Image Summation', effect: '书=窗——一句话完成"书桌即天空"的论证', effectEn: 'Books as windows to stars — one sentence completing the argument that the desk is itself a sky' },
            { para: 3, text: '不再是某个具体的地方——不是操场，不是书桌——而是变成了一种看不见的东西', technique: '抽象跃迁', techniqueEn: 'Abstract Leap', effect: '天空从具象→抽象——成长的认知升级', effectEn: 'Sky evolves from concrete places to an invisible essence — the cognitive leap of growing up' },
            { para: 4, text: '八岁时它在操场上燃烧，十四岁时它在书桌前闪烁，十五岁时它在胸腔里安静地跳动', technique: '反复点题', techniqueEn: 'Iterative Thematic Echo', effect: '三个年龄+三种火焰状态——结构性回环，火苗从外到内', effectEn: 'Three ages, three flame states — burning, flickering, quietly beating — the fire migrates from playground to chest' },
            { para: 4, text: '只要那簇火还在——你就拥有属于自己的天空', technique: '条件句结尾', techniqueEn: 'Conditional Closing', effect: '用"只要…就…"句式收束——把主题浓缩为一个条件', effectEn: 'A single conditional distills the thesis: as long as the flame endures, the sky is yours' }
          ],
          approach: '以三个时空片段——小学、初中、未来——展现\u201c属于自己的天空\u201d的含义随成长而变化。',
          approachEn: 'Three time fragments—elementary, middle school, future—showing how "my own sky" evolves with growth.',
          architecture: '片段一：小学——天空是操场的自由→片段二：初中——天空是书桌上的星辰→片段三：未来——天空是无限可能→结尾：每个阶段都有自己的天空',
          architectureEn: 'Fragment 1: elementary—sky is playground freedom → Fragment 2: middle school—sky is stars on the desk → Fragment 3: future—sky is infinite possibility → Ending: every stage has its own sky',
          logic: '以时间为维度，展现\u201c天空\u201d意义的演变，传达成长中自我空间不断拓展的主题。',
          logicEn: 'Time as dimension, showing the evolution of "sky\'s" meaning, conveying the expanding self-space through growth.',
          skills: ['结构匀称整齐', '每段独立又统一', '时间跨度增添厚度'],
          skillsEn: ['Balanced symmetrical structure', 'Each segment independent yet unified', 'Time span adds depth'],
          fullText: '【八岁的天空】\n\n八岁那年，我的天空是学校操场。\n\n下课铃一响，我冲出教室，在操场上疯跑。单杠、沙坑、那棵歪脖子梧桐树——每一处都是我的领地。我爬到梧桐树的第三个枝丫上，坐在上面看天，觉得天好蓝好大，大到可以装下全世界。那时候的我，以为天空就是头顶那一片蓝，以为自由就是跑得比风还快。\n\n【十四岁的天空】\n\n十四岁，我的天空缩小到了书桌。\n\n课程越来越多，作业越来越厚，操场变成了体育课才去的地方。我的世界，只剩下一张一米二的书桌。可是某天晚上，写作业写到深夜，我趴在桌上休息，无意间抬头——窗外，满天星斗。我怔住了，多久没看过星星了？那些密密麻麻的光点，像是无数个遥远的世界在对我眨眼睛。\n\n从那天起，我在书桌的玻璃板下面压了一张星空的明信片。每次被公式和古文淹没的时候，我就低头看看那片星空。它提醒我：书桌虽小，但它通向的世界很大。数学里有宇宙的密码，语文里有千年的回声，英语里有远方的声音。书桌上的每一本书，都是一扇通往星辰的窗。\n\n【未来的天空】\n\n还有一年就中考了，所有人都在问我：\u201c以后想做什么？\u201d\n\n我不知道。但我知道，十五岁的我，天空又不一样了。它不再是某个具体的地方——不是操场，不是书桌——而是变成了一种看不见的东西。是我翻开一本新书时心跳加速的感觉，是我望着星空时心里涌起的好奇，是我每一次跌倒后还愿意站起来的那股倔劲儿。\n\n我现在终于明白了。属于自己的天空，不是一个地方，是一种状态。是你心里那个永远不肯熄灭的小火苗。八岁时它在操场上燃烧，十四岁时它在书桌前闪烁，十五岁时它在胸腔里安静地跳动。不管天空大还是小，亮还是暗，只要那簇火还在——你就拥有属于自己的天空。',
          fullTextEn: '[Age Eight\'s Sky]\n\nAt eight, my sky was the school playground.\n\nThe moment the bell rang, I\'d dash out and run wildly across the field. Monkey bars, sandpit, that crooked sycamore tree—every spot was my territory. I\'d climb to the tree\'s third branch, sit there watching the sky, thinking how blue and vast it was—big enough to hold the whole world. Back then, I thought the sky was just that blue canopy overhead, and freedom meant running faster than the wind.\n\n[Age Fourteen\'s Sky]\n\nAt fourteen, my sky shrank to a desk.\n\nMore classes, thicker homework, the playground reserved for PE only. My world had reduced to a 1.2-meter desk. But one night, studying late, I slumped on the desk to rest and glanced up accidentally—outside the window, a sky full of stars. I froze. How long since I\'d seen stars? Those dense points of light were like countless distant worlds winking at me.\n\nFrom that day, I slipped a starry-sky postcard under my desk\'s glass top. Whenever formulas and classical texts overwhelmed me, I\'d look down at that sky. It reminded me: the desk is small, but the world it leads to is vast. Math holds the universe\'s code, Chinese literature echoes a thousand years, English carries distant voices. Every book on the desk is a window to the stars.\n\n[Future\'s Sky]\n\nOne more year until the high school entrance exam, and everyone asks: "What do you want to be?"\n\nI don\'t know. But I know that at fifteen, my sky has changed again. It\'s no longer a specific place—not the playground, not the desk—but something invisible. It\'s the racing heartbeat when I open a new book, the curiosity surging when I gaze at stars, the stubborn grit that makes me stand up after every fall.\n\nNow I finally understand. A sky of your own isn\'t a place—it\'s a state of being. It\'s that little flame in your heart that refuses to die. At eight it burned on the playground, at fourteen it flickered at the desk, at fifteen it beats quietly in your chest. No matter whether the sky is big or small, bright or dim—as long as that flame endures, you have a sky of your own.',
          highlights: [
            { text: '书桌上的每一本书，都是一扇通往星辰的窗', textEn: 'Every book on the desk is a window to the stars', why: '意象优美，将知识与星辰关联', whyEn: 'Beautiful imagery linking knowledge to stars' },
            { text: '是你心里那个永远不肯熄灭的小火苗', textEn: 'That little flame in your heart that refuses to die', why: '火苗意象贯穿三个时空，统一全文', whyEn: 'Flame imagery unifying all three time fragments' }
          ],
          sections: [
            { type: '片段一', fn: '八岁', fnEn: 'Age 8', detail: '操场的自由', detailEn: 'Playground freedom' },
            { type: '片段二', fn: '十四岁', fnEn: 'Age 14', detail: '书桌上的星辰', detailEn: 'Stars on the desk' },
            { type: '片段三', fn: '十五岁', fnEn: 'Age 15', detail: '心中的火苗', detailEn: 'The flame within' },
            { type: '点题', fn: '领悟', fnEn: 'Insight', detail: '天空是一种状态', detailEn: 'Sky is a state of being' }
          ]
        },
        {
          title: '属于自己的天空', titleEn: 'A Sky of My Own',
          score: 45, maxScore: 50,
          structure: 'daoXuShi',
          techniques: ['huanjingMiaoXie','duiBi','yiWuShuQing'],
          techniqueMarks: [
            { para: 0, text: '满天的星星像碎钻一样撒在黑丝绒上', technique: '环境比喻', techniqueEn: 'Environmental Metaphor', effect: '碎钻+黑丝绒——华美意象奠定天台的精神价值', effectEn: 'Crushed diamonds on black velvet — opulent imagery establishing the rooftop as sacred space' },
            { para: 0, text: '风从四面八方吹来，吹散了一天的闷热和烦恼', technique: '通感过渡', techniqueEn: 'Synesthetic Transition', effect: '风既吹散热也吹散烦恼——物理与心理在一阵风中合一', effectEn: 'Wind disperses both heat and worry — physical and psychological relief merging in a single breeze' },
            { para: 2, text: '用平静到可怕的语气商量怎么分这个家', technique: '反常细节', techniqueEn: 'Uncanny Detail', effect: '平静=可怕——比吵架更令人恐惧的冷静', effectEn: 'Calm so terrifying — the eerie composure of parents dismantling a home is more frightening than any shouting' },
            { para: 2, text: '墙上还贴着我画的画，门框上还刻着我每年的身高线', technique: '物件叙事', techniqueEn: 'Object Narration', effect: '画+身高线——十三年的成长痕迹即将被抛下', effectEn: 'Drawings on walls, height marks on doorframes — thirteen years of growing up about to be left behind' },
            { para: 3, text: '只有钟表的嘀嗒声和我翻书的沙沙声', technique: '以声衬静', techniqueEn: 'Sound Amplifying Silence', effect: '两种细微声响反衬空荡——声音越小，孤独越大', effectEn: 'Two faint sounds — ticking clock, rustling pages — magnifying the emptiness of a half-broken home' },
            { para: 4, text: '她的星球很小，只有她一个人，但她把整颗星球都种满了花', technique: '嵌套叙事', techniqueEn: 'Nested Narrative', effect: '故事中的故事=作者的自画像——小星球种满花=在孤独中创造美', effectEn: 'A story within a story mirrors the author herself — planting flowers on a tiny planet is building beauty from solitude' },
            { para: 5, text: '把心事写成故事，把眼泪变成文字，把沉默酿成段落', technique: '排比转化', techniqueEn: 'Parallel Transformation', effect: '心事→故事，眼泪→文字，沉默→段落——三重炼金术', effectEn: 'Worries into stories, tears into text, silence into paragraphs — three acts of alchemical transformation' },
            { para: 6, text: '那篇文章的标题是《星星上的花园》', technique: '独立成段', techniqueEn: 'Stand-alone Paragraph', effect: '一句话独立成段——嵌套故事与现实在标题处合拢', effectEn: 'A single sentence as its own paragraph — the nested story and reality converge at the title' },
            { para: 7, text: '像是有人在很远很远的地方，为每一个夜里不睡觉的孩子留了一盏灯', technique: '诗意想象', techniqueEn: 'Poetic Imagination', effect: '星星=远方为失眠孩子留的灯——温柔到令人心碎', effectEn: 'Stars reimagined as lamps left by someone far away for every sleepless child — tenderness that aches' },
            { para: 8, text: '不是没有裂缝的天空，而是有了裂缝，依然选择仰望的那片天空', technique: '哲理对比', techniqueEn: 'Philosophical Antithesis', effect: '重新定义"天空"——不求完美，只求仰望的勇气', effectEn: 'Redefining "sky" — not flawless but chosen despite the fractures, courage measured in the gaze upward' }
          ],
          approach: '倒叙开头，从在天台看星星写起，回忆自己如何在父母离异后的灰暗日子里重新找到属于自己的天空。',
          approachEn: 'Reverse opening from stargazing on the rooftop, recalling how the narrator found their own sky again after parents\' divorce.',
          architecture: '倒叙：天台看星星→回忆：父母离异的灰暗→发展：在写作中找到出口→高潮：第一篇文章发表→回到现在：天台就是我的天空',
          architectureEn: 'Flashback: stargazing on rooftop → Memory: gray days after divorce → Development: finding outlet in writing → Climax: first article published → Return: the rooftop is my sky',
          logic: '以天台为空间锚点，从倒叙切入，展现在灰暗中自建精神天空的勇气。',
          logicEn: 'The rooftop as spatial anchor, entering via flashback, showing the courage to build a spiritual sky amid darkness.',
          skills: ['倒叙引人入胜', '环境映射内心', '物象升华自然'],
          skillsEn: ['Engaging reverse chronology', 'Environment mirrors inner world', 'Natural imagery elevation'],
          fullText: '每天晚上九点半，我都会偷偷爬上楼顶。\n\n我们住在六楼，天台上没有灯，只有几个水泥台子和两根晾衣绳。可抬头一看，满天的星星像碎钻一样撒在黑丝绒上。风从四面八方吹来，吹散了一天的闷热和烦恼。在那里，我觉得自己拥有整片天空。\n\n但一年前，我的天空是灰的。\n\n爸妈离婚的那天，我站在客厅，听他们用平静到可怕的语气商量怎么分这个家。妈妈说\u201c她跟我\u201d，爸爸沉默了很久，点了点头。搬家那天，我把最喜欢的布偶塞进箱子，回头看了一眼那个住了十三年的房间——墙上还贴着我画的画，门框上还刻着我每年的身高线。\n\n新家很小，妈妈每天加班到很晚。空荡荡的房间里只有钟表的嘀嗒声和我翻书的沙沙声。我不想跟任何人说话，在学校也总是沉着脸。班里同学不知道发生了什么，只觉得我突然变了一个人。\n\n一天晚上，写日记的时候，笔尖不知不觉就飞了起来。我写了一个故事，关于一个住在星星上的女孩——她的星球很小，只有她一个人，但她把整颗星球都种满了花。写完的时候已经凌晨一点，我手酸得抬不起来，可心里莫名其妙地轻松了。\n\n从那以后，写作成了我的天台。不，应该说，写作和天台合在一起，变成了属于我的天空。我把心事写成故事，把眼泪变成文字，把沉默酿成段落。语文老师看了我的作文，帮我投稿到校刊。三周后，她把一本薄薄的校刊放在我面前，翻到第三十二页：\u201c看，你的名字在上面。\u201d\n\n那篇文章的标题是《星星上的花园》。\n\n此刻，我又坐在天台上。风吹过来，带着楼下桂花的甜香。星星还是那么亮，一颗一颗，像是有人在很远很远的地方，为每一个夜里不睡觉的孩子留了一盏灯。\n\n我的天空也许不完美——它缺了一角，是爸爸不在身边留下的空缺。但我用文字一点一点地补上了那个缺口。属于自己的天空，不是没有裂缝的天空，而是有了裂缝，依然选择仰望的那片天空。',
          fullTextEn: 'Every night at 9:30, I secretly climb to the rooftop.\n\nWe live on the sixth floor. The rooftop has no lights—just a few concrete slabs and two clotheslines. But look up, and stars scatter across the black velvet like crushed diamonds. Wind blows from all directions, dispersing the day\'s heat and worries. Up there, I feel I own the entire sky.\n\nBut a year ago, my sky was gray.\n\nThe day my parents divorced, I stood in the living room listening to them discuss dividing our home in terrifyingly calm voices. Mom said, "She stays with me." Dad was silent for a long time, then nodded. On moving day, I stuffed my favorite stuffed animal into a box and looked back at the room I\'d lived in for thirteen years—my drawings still on the wall, my height marks still on the doorframe.\n\nThe new apartment was tiny. Mom worked overtime every night. In the empty room, only the clock\'s ticking and my pages\' rustling. I didn\'t want to talk to anyone; at school I always wore a stern face. Classmates didn\'t know what had happened—they just felt I\'d suddenly become a different person.\n\nOne night, while writing my diary, my pen took flight on its own. I wrote a story about a girl living on a star—her planet was tiny, she was its only inhabitant, but she\'d planted the entire planet with flowers. When I finished, it was 1 AM; my arm ached too much to lift, but my heart felt inexplicably lighter.\n\nAfter that, writing became my rooftop. No—writing and the rooftop together became my sky. I turned worries into stories, tears into words, silence into paragraphs. My Chinese teacher read my essay and submitted it to the school magazine. Three weeks later, she placed a slim magazine before me, open to page thirty-two: "Look—your name is on it."\n\nThe article was titled "The Garden on a Star."\n\nRight now, I\'m sitting on the rooftop again. Wind brings the sweet scent of osmanthus from downstairs. The stars are still bright, one by one, as if someone far, far away left a lamp burning for every child who stays awake at night.\n\nMy sky may not be perfect—it\'s missing a corner, the gap left by Dad\'s absence. But I\'ve been filling that gap with words, bit by bit. A sky of your own isn\'t a sky without cracks—it\'s a sky that, even with cracks, you still choose to gaze upon.',
          highlights: [
            { text: '有了裂缝，依然选择仰望的那片天空', textEn: 'A sky that, even with cracks, you still choose to gaze upon', why: '结尾哲理升华，裂缝意象独特', whyEn: 'Philosophical ending—unique "cracked sky" imagery' },
            { text: '像是有人在很远很远的地方，为每一个夜里不睡觉的孩子留了一盏灯', textEn: 'As if someone far, far away left a lamp burning for every child awake in the night', why: '诗意句式，温暖治愈', whyEn: 'Poetic construction—warm and healing' }
          ],
          sections: [
            { type: '倒叙', fn: '天台', fnEn: 'Rooftop', detail: '夜晚看星星', detailEn: 'Night stargazing' },
            { type: '回忆', fn: '灰暗', fnEn: 'Darkness', detail: '父母离异', detailEn: 'Parents\' divorce' },
            { type: '发展', fn: '出口', fnEn: 'Outlet', detail: '写作治愈', detailEn: 'Writing heals' },
            { type: '高潮', fn: '发表', fnEn: 'Published', detail: '校刊刊登', detailEn: 'School magazine' },
            { type: '回归', fn: '升华', fnEn: 'Elevation', detail: '有裂缝也仰望', detailEn: 'Gaze up despite the cracks' }
          ]
        }
      ]
    },
    {
      id: 'yn2009_comp1',
      paperId: 'yn2009',
      year: 2009,
      region: '云南省',
      prompt: '请以"我感受到了______"为题（将题目补充完整），写一篇文章。要求：立意自定，文体自选（诗歌除外）；说真话，抒真情，忌抄袭；文中不要使用真实的地名、校名、人名；书写工整，不少于600字。',
      promptEn: 'Write an essay titled "I Felt ______" (complete the title). Requirements: choose your own theme and genre (except poetry); be sincere and authentic; do not use real names; at least 600 words.',
      type: 'narrative',
      category: '记叙文',
      categoryEn: 'Narrative',
      wordCount: 600,
      guide: {
        analysis: '半命题作文，关键在于补题。"感受到了"强调的是内心的体验和领悟，补充的内容应该是抽象的情感或品质，如"温暖""坚强""成长的力量"等。不宜填具体事物，要填感悟。',
        analysisEn: 'Semi-open-ended title—completing it well is crucial. "I felt" emphasizes inner experience and realization. The fill-in should be abstract emotions or qualities like "warmth," "strength," "the power of growth." Avoid concrete objects; fill in insights.',
        keyPoints: ['补题要有深度和新意', '围绕"感受"展开', '要有具体事件触发感受', '感受要有层次和变化'],
        keyPointsEn: ['Title completion should have depth and originality', 'Center on "feeling"', 'Need concrete events triggering the feeling', 'Feeling should have layers and evolution'],
        pitfalls: ['补题太平淡（如"快乐"）', '只写事件不写感受', '感受流于表面'],
        pitfallsEn: ['Bland title completion (like "happiness")', 'Only narrating events without feelings', 'Superficial feelings']
      },
      essays: [
        {
          title: '我感受到了沉默的力量', titleEn: 'I Felt the Power of Silence',
          score: 47, maxScore: 50,
          structure: 'qiChengZhuanHe',
          techniques: ['xinLiMiaoXie','duiBi','xiJieMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '我的父亲，是一座沉默的山', technique: '比喻开头', techniqueEn: 'Opening Metaphor', effect: '山=沉默+坚实——一句话定义父亲形象', effectEn: 'A silent mountain — one metaphor establishing the father\'s character: massive, wordless, immovable' },
            { para: 1, text: '接我放学也只是默默地走在前面，从不牵我的手', technique: '细节铺垫（误解）', techniqueEn: 'Setup Detail (Misunderstanding)', effect: '不牵手=不关心——孩子的误读', effectEn: 'Walking ahead without holding hands — the child reads absence of gesture as absence of love' },
            { para: 2, text: '爸爸，坐在沙发上看电视，头都没转一下', technique: '对比（母亲vs父亲）', techniqueEn: 'Mother-Father Contrast', effect: '妈妈急了vs爸爸不转头——沉默被解读为冷漠', effectEn: 'Mom explodes while Dad doesn\'t even turn his head — silence misread as indifference' },
            { para: 4, text: '不是因为成绩，而是因为爸爸的漠不关心', technique: '心理误读', techniqueEn: 'Psychological Misreading', effect: '"连骂我一顿都不愿意"——误读推向极致', effectEn: 'He won\'t even scold me — the misunderstanding pushed to its painful extreme' },
            { para: 6, text: '他戴着老花镜，趴在茶几上，面前摊着我的试卷和课本', technique: '发现场景', techniqueEn: 'Discovery Scene', effect: '凌晨两点的台灯+老花镜+试卷——细节构成震撼画面', effectEn: 'Reading glasses, hunched over a coffee table at 2 AM — three details composing the essay\'s devastating revelation' },
            { para: 7, text: '他只有小学文化', technique: '独立成段', techniqueEn: 'Stand-alone Paragraph', effect: '五个字独立成段——全文最重的一句话', effectEn: 'Five words standing alone as a paragraph — the essay\'s heaviest sentence, recontextualizing everything' },
            { para: 8, text: '有些题他看不懂，就在旁边画了个问号', technique: '笨拙的爱', techniqueEn: 'Clumsy Love', effect: '看不懂画问号——能力的局限挡不住爱的行动', effectEn: 'Question marks beside problems he can\'t solve — love that acts even when ability falls short' },
            { para: 8, text: '一杯已经凉透了的茶，和一包拆开的头痛药', technique: '物件叙事', techniqueEn: 'Object Narration', effect: '凉茶+头痛药——暗示他已经工作了很久且身体不好', effectEn: 'Cold tea and opened headache pills — objects revealing hours of effort and physical cost' },
            { para: 10, text: '"错题我帮你抄了一些，看不懂的问老师。"就这一句话', technique: '极简表达', techniqueEn: 'Minimal Expression', effect: '没有加油没有爸爸爱你——一句话=一夜的付出', effectEn: 'No encouragement, no "I love you" — one functional sentence containing an entire night\'s labor' },
            { para: 11, text: '在你看不见的地方，默默地、笨拙地、拼尽全力地爱着你', technique: '点题三连', techniqueEn: 'Triple Adverb Closing', effect: '默默+笨拙+拼尽全力——三个词完美定义了沉默的爱', effectEn: 'Quietly, clumsily, with everything he has — three adverbs defining the power of wordless love' }
          ],
          approach: '写父亲从不善言辞到在关键时刻用沉默和行动表达爱，让"我"感受到沉默中蕴含的巨大力量。',
          approachEn: 'A father who is never eloquent expresses love through silence and action at a critical moment, making the narrator feel the immense power within silence.',
          architecture: '起：父亲是沉默的人→承：考试失败后的冷漠→转：深夜发现父亲的付出→合：沉默也是一种力量',
          architectureEn: 'Beginning: father is a silent man → Development: perceived coldness after exam failure → Turn: discovering father\'s late-night dedication → Resolution: silence is also a form of power',
          logic: '以对父亲"沉默"的误解为起点，通过事件逐步揭示沉默背后的深情。',
          logicEn: 'Starting from misunderstanding the father\'s "silence," gradually revealing the deep love behind it through events.',
          skills: ['误解到理解的弧线动人', '细节以小见大', '点题自然不刻意'],
          skillsEn: ['Moving arc from misunderstanding to understanding', 'Small details reveal big truths', 'Natural thematic connection'],
          fullText: '我的父亲，是一座沉默的山。\n\n在我的记忆里，父亲几乎不说话。别人家的爸爸会说\u201c宝贝加油\u201d\u201c爸爸爱你\u201d，我的爸爸只会点头、嗯一声，然后继续低头干活。家长会他从来不发言，接我放学也只是默默地走在前面，从不牵我的手。很长一段时间，我觉得他根本不关心我。\n\n初二期末考试，我考了全班倒数第十。拿到成绩单的那天，我忐忑不安地回到家，做好了被骂的准备。妈妈果然急了：\u201c你怎么搞的！上次还前二十名呢！\u201d而爸爸，坐在沙发上看电视，头都没转一下。\n\n\u201c你看你爸，连管都不管你！\u201d妈妈指着爸爸说。\n\n那天晚上我躲在被子里哭。不是因为成绩，而是因为爸爸的漠不关心。连骂我一顿都不愿意，说明在他心里，我根本不重要。\n\n凌晨两点，我起来上厕所，经过客厅，看到了让我一辈子都忘不了的一幕：\n\n客厅的台灯亮着，昏黄的光照在爸爸的背上。他戴着老花镜，趴在茶几上，面前摊着我的试卷和课本。他的手指笨拙地按着计算器，旁边放着一张纸，上面密密麻麻写着歪歪扭扭的字——他在帮我整理错题。\n\n他只有小学文化。\n\n那些字，他一定是一笔一画、查着字典写出来的。有些题他看不懂，就在旁边画了个问号，大概想着明天问问谁。茶几上还放着一杯已经凉透了的茶，和一包拆开的头痛药。\n\n我站在走廊的阴影里，眼泪无声地流下来。\n\n原来，他不是不关心。他只是不会说。他的爱不在嘴上，在凌晨两点的台灯下，在歪歪扭扭的字迹里，在那包头痛药和那杯凉茶里。\n\n第二天早上，桌上放着一张纸条：\u201c错题我帮你抄了一些，看不懂的问老师。\u201d就这一句话，没有\u201c加油\u201d，没有\u201c爸爸相信你\u201d。可就是这简简单单的一句话，比任何豪言壮语都有力。\n\n从那以后，我再也不觉得父亲冷漠了。我感受到了沉默的力量——它不张扬，不表演，不求回报。它只是在你看不见的地方，默默地、笨拙地、拼尽全力地爱着你。',
          fullTextEn: 'My father is a silent mountain.\n\nIn my memory, Father barely speaks. Other dads say "Go for it, baby" and "Daddy loves you"; mine just nods, grunts, then goes back to work. He never speaks at parent meetings; picking me up from school, he walks silently ahead, never holding my hand. For a long time, I thought he simply didn\'t care about me.\n\nAt the end of eighth grade, I ranked tenth from the bottom. Coming home with the report card, I braced for scolding. Mom exploded as expected: "What happened to you? You were in the top twenty last time!" Father sat on the sofa watching TV without even turning his head.\n\n"Look at your father—he doesn\'t even bother with you!" Mom pointed at him.\n\nThat night I cried under the covers. Not because of grades, but because of Father\'s indifference. He wouldn\'t even scold me—meaning I didn\'t matter to him at all.\n\nAt 2 AM, I got up for the bathroom. Passing the living room, I saw a scene I\'ll never forget:\n\nThe desk lamp was on, dim yellow light falling on Father\'s back. Wearing reading glasses, he was hunched over the coffee table, my test papers and textbooks spread before him. His clumsy fingers pressed a calculator; beside it lay a sheet covered in cramped, crooked characters—he was organizing my wrong answers.\n\nHe only had an elementary school education.\n\nThose characters—he must have written them stroke by stroke, consulting a dictionary. Some problems he couldn\'t understand; he\'d drawn question marks beside them, probably planning to ask someone tomorrow. On the table sat a cup of completely cold tea and an opened packet of headache medicine.\n\nI stood in the hallway\'s shadow, tears falling silently.\n\nSo he did care. He just couldn\'t say it. His love wasn\'t in words—it was under a desk lamp at 2 AM, in crooked handwriting, in headache pills and cold tea.\n\nNext morning, a note on the table: "I copied some of your wrong problems. Ask the teacher about ones you don\'t understand." Just that one line—no "hang in there," no "Dad believes in you." Yet this simple sentence was more powerful than any grand declaration.\n\nFrom then on, I never thought Father was cold again. I felt the power of silence—it doesn\'t show off, doesn\'t perform, doesn\'t ask for anything back. It simply loves you in places you can\'t see—quietly, clumsily, with everything it has.',
          highlights: [
            { text: '他只有小学文化', textEn: 'He only had an elementary school education', why: '独立成段，五个字重如千钧', whyEn: 'Five words standing alone — they recontextualize every crooked character on that sheet of paper' },
            { text: '在凌晨两点的台灯下，在歪歪扭扭的字迹里', textEn: 'Under a desk lamp at 2 AM, in crooked handwriting', why: '排比意象具体，无声的爱可触可感', whyEn: 'Parallel images making wordless love visible: lamplight, clumsy characters, cold tea, headache pills' }
          ],
          sections: [
            { type: '起', fn: '误解', fnEn: 'Misunderstanding', detail: '父亲的沉默=冷漠', detailEn: 'Father\'s silence = indifference' },
            { type: '承', fn: '失望', fnEn: 'Disappointment', detail: '考试后的漠然', detailEn: 'Apparent indifference after exam' },
            { type: '转', fn: '发现', fnEn: 'Discovery', detail: '凌晨两点的台灯', detailEn: 'The 2 AM desk lamp' },
            { type: '合', fn: '领悟', fnEn: 'Realization', detail: '沉默也是爱', detailEn: 'Silence is also love' }
          ]
        },
        {
          title: '我感受到了平凡的伟大', titleEn: 'I Felt the Greatness in the Ordinary',
          score: 45, maxScore: 50,
          structure: 'zongFenZong',
          techniques: ['huanjingMiaoXie','dongZuoMiaoXie','duiBi'],
          techniqueMarks: [
            { para: 0, text: '伟大是科学家的发明，是英雄的壮举，是站在领奖台上的荣光', technique: '铺垫（常规认知）', techniqueEn: 'Conventional Setup', effect: '列举了"伟大"的常规定义——为后面的颠覆做铺垫', effectEn: 'Listing standard definitions of greatness — setting them up to be overturned by one rainstorm' },
            { para: 1, text: '天空突然黑了下来，像是有人打翻了墨水瓶', technique: '比喻（暴雨天空）', techniqueEn: 'Overturned Ink Metaphor', effect: '墨水瓶比喻——暴雨前天色的突变', effectEn: 'Sky darkening like a spilled ink bottle — the storm\'s arrival rendered in one vivid image' },
            { para: 3, text: '用手一把一把地掏出堵塞物，浑浊的水溅了她一脸', technique: '动作描写（劳动之美）', techniqueEn: 'Action Detail (Labor\'s Beauty)', effect: '手掏+水溅脸——不回避的真实劳动场景', effectEn: 'Scooping blockage by hand, murky water splashing her face — labor depicted without sanitizing' },
            { para: 5, text: '整条街上空无一人，只有她橘红色的背影在灰蒙蒙的雨里移动', technique: '色彩对比', techniqueEn: 'Color Contrast', effect: '橘红vs灰色——空旷街道上唯一的亮色', effectEn: 'One orange silhouette against a gray curtain of rain — color isolation magnifying her solitary dedication' },
            { para: 6, text: '脸上全是水，分不清是雨水还是汗水', technique: '模糊手法', techniqueEn: 'Deliberate Ambiguity', effect: '分不清雨水汗水——劳动的付出与天气融为一体', effectEn: 'Rain and sweat indistinguishable on her face — her effort merging with the storm itself' },
            { para: 6, text: '"去年有一回没及时通，人家店里损失了好几千块，心疼啊。"', technique: '质朴对话', techniqueEn: 'Plain-spoken Dialogue', effect: '"心疼啊"三个字——不是为自己而是为别人心疼', effectEn: 'Her concern is for the shop owner\'s loss, not her own discomfort — selflessness in plain dialect' },
            { para: 7, text: '手指被泡得发白发皱，橡胶手套破了一个洞', technique: '细节收束', techniqueEn: 'Closing Detail', effect: '白皱的手+破手套——劳动者的尊严在细节里', effectEn: 'White wrinkled fingers, a hole in the rubber glove — dignity visible in the smallest details of wear' },
            { para: 8, text: '阳光打在湿漉漉的马路上，反射出耀眼的光', technique: '环境转换', techniqueEn: 'Environmental Turn', effect: '雨后阳光——呼应人物的"光芒"', effectEn: 'Sun on wet pavement — nature\'s spotlight illuminating the worker\'s departure' },
            { para: 8, text: '她的背影比任何超级英雄都高大', technique: '升华比较', techniqueEn: 'Elevating Comparison', effect: '环卫工人>超级英雄——颠覆了开头的"伟大"定义', effectEn: 'An orange vest towering over any superhero — the opening\'s definition of greatness overturned' },
            { para: 9, text: '只有一件湿透的橘红马甲和一双泡皱的手', technique: '物件总结', techniqueEn: 'Object Summary', effect: '两个物件总结全文——伟大不需要舞台只需要一件马甲', effectEn: 'A soaked vest and wrinkled hands — greatness stripped to its essential equipment' }
          ],
          approach: '写环卫工人的故事——暴雨中坚守岗位的环卫阿姨，让"我"感受到平凡岗位上的伟大。',
          approachEn: 'The story of a sanitation worker—an aunt who keeps working in a rainstorm, showing the narrator the greatness of ordinary positions.',
          architecture: '总起：伟大不一定轰轰烈烈→分：暴雨中的环卫阿姨→观察→对话→总结：平凡岗位上的坚守最伟大',
          architectureEn: 'Opening: greatness needn\'t be spectacular → Detail: sanitation worker in storm → observation → dialogue → Conclusion: perseverance in ordinary roles is the greatest',
          logic: '从一场暴雨中的偶遇切入，通过观察和对话逐步深化对"平凡伟大"的理解。',
          logicEn: 'A chance encounter in a rainstorm, deepening understanding of "ordinary greatness" through observation and dialogue.',
          skills: ['环境描写有力', '对比反衬鲜明', '主题提炼深刻'],
          skillsEn: ['Powerful environmental description', 'Sharp contrast and foil', 'Deep thematic extraction'],
          fullText: '什么是伟大？以前我觉得，伟大是科学家的发明，是英雄的壮举，是站在领奖台上的荣光。直到那个暴雨天，我遇见了一位环卫阿姨。\n\n那是暑假的一个下午。天空突然黑了下来，像是有人打翻了墨水瓶。雷声隆隆，豆大的雨点砸下来，几分钟之内街上的水就漫过了脚踝。我跑进路边的公交站台躲雨，看着行人东奔西跑，狼狈不堪。\n\n就在这时，我看到了她。\n\n一个穿着橘红色马甲的身影，在雨幕中弯着腰，正在疏通路边的下水道口。雨水混着落叶和垃圾堵住了排水口，路面积水越来越深。她蹲下去，用手一把一把地掏出堵塞物，浑浊的水溅了她一脸。雨帽早就被风吹歪了，头发湿漉漉地贴在脸上。\n\n我看得愣住了。\n\n排水口通了，积水开始哗哗地退去。她站起来，揉了揉腰，又推着清洁车走向下一个堵塞的路口。整条街上空无一人，只有她橘红色的背影在灰蒙蒙的雨里移动。\n\n雨小了一些，我追上去：\u201c阿姨，这么大的雨您怎么不躲一躲？\u201d她转过头，脸上全是水，分不清是雨水还是汗水。她笑了笑，露出有些发黄的牙齿：\u201c下雨天不通下水道，一会儿水就漫到店里面去了。\u201d她指了指旁边的小卖部，\u201c去年有一回没及时通，人家店里损失了好几千块，心疼啊。\u201d\n\n说完，她又弯下腰，继续清理。她的手指被泡得发白发皱，橡胶手套破了一个洞。\n\n雨停了，太阳从云缝里探出来，阳光打在湿漉漉的马路上，反射出耀眼的光。我站在干干净净的人行道上，看着那个橘红色的身影渐渐远去，忽然觉得她的背影比任何超级英雄都高大。\n\n回家的路上，我一直在想：真正的伟大是什么？不是惊天动地，不是万众瞩目。真正的伟大，是在暴雨中弯下腰的那一刻，是\u201c人家店里损失了好几千块，心疼啊\u201d那句朴素的话。是千千万万个这样的人，在我们看不见的角落里，撑起了这个世界日复一日的正常运转。\n\n那天，我真正感受到了平凡的伟大。它没有掌声，没有鲜花，只有一件湿透的橘红马甲和一双泡皱的手。',
          fullTextEn: 'What is greatness? I used to think it was scientists\' inventions, heroes\' feats, the glory of standing on a podium. Until that stormy day, when I met a sanitation worker.\n\nIt was a summer afternoon. The sky suddenly went dark, as if someone had knocked over an ink bottle. Thunder rumbled; rain the size of beans hammered down; within minutes, street water rose above ankles. I ducked into a bus shelter, watching pedestrians scatter in chaos.\n\nThen I saw her.\n\nA figure in an orange vest, bent over in the curtain of rain, unclogging a storm drain. Rainwater mixed with leaves and trash had blocked the drain; the road was flooding deeper. She squatted, scooping out blockages handful by handful, murky water splashing her face. Her rain hat had long been blown askew; wet hair plastered against her cheeks.\n\nI stood frozen, watching.\n\nThe drain cleared; floodwater began rushing away. She stood, rubbed her back, then pushed her cleaning cart toward the next blocked intersection. The entire street was empty—only her orange silhouette moving through the gray rain.\n\nWhen the rain eased, I caught up: "Auntie, why don\'t you take shelter in such heavy rain?" She turned—her face was all water, impossible to tell rain from sweat. She smiled, showing slightly yellowed teeth: "If you don\'t clear drains in the rain, water floods into the shops. Last year one time I wasn\'t fast enough—a shop lost several thousand yuan. That hurt."\n\nShe bent down again, continuing to clean. Her fingers were white and wrinkled from soaking; her rubber glove had a hole.\n\nThe rain stopped. Sun peeked through clouds, light bouncing off the wet road in dazzling flashes. Standing on the clean sidewalk, watching the orange figure recede, I suddenly felt her silhouette was taller than any superhero.\n\nWalking home, I kept thinking: what is true greatness? Not earth-shaking, not in the spotlight. True greatness is bending down in a rainstorm. It\'s the plain words "a shop lost several thousand yuan—that hurt." It\'s millions of such people, in corners we never see, keeping the world running day after day.\n\nThat day, I truly felt the greatness in the ordinary. It has no applause, no flowers—just a soaked orange vest and a pair of wrinkled hands.',
          highlights: [
            { text: '分不清是雨水还是汗水', textEn: 'Impossible to tell rain from sweat on her face', why: '模糊手法暗示双重付出', whyEn: 'The blurred boundary between storm and effort — her labor merging with the weather itself' },
            { text: '人家店里损失了好几千块，心疼啊', textEn: 'A shop lost several thousand yuan — that hurt', why: '质朴方言传达真诚关怀', whyEn: 'She aches not for herself but for a stranger\'s loss — selflessness expressed in the plainest dialect' }
          ],
          sections: [
            { type: '总起', fn: '设问', fnEn: 'Question', detail: '什么是伟大', detailEn: 'What is greatness' },
            { type: '分', fn: '场景', fnEn: 'Scene', detail: '暴雨中的身影', detailEn: 'Figure in the storm' },
            { type: '分', fn: '对话', fnEn: 'Dialogue', detail: '朴素的回答', detailEn: 'Simple answer' },
            { type: '分', fn: '细节', fnEn: 'Detail', detail: '泡皱的手', detailEn: 'Wrinkled hands' },
            { type: '总结', fn: '升华', fnEn: 'Elevation', detail: '平凡即伟大', detailEn: 'Ordinary is great' }
          ]
        },
        {
          title: '我感受到了文字的温度', titleEn: 'I Felt the Warmth of Words',
          score: 46, maxScore: 50,
          structure: 'qiChengZhuanHe',
          techniques: ['yiWuShuQing','xiJieMiaoXie','xuanNian'],
          techniqueMarks: [
            { para: 0, text: '灰尘扑了一脸，打了三个喷嚏', technique: '感官开头', techniqueEn: 'Sensory Opening', effect: '灰尘+喷嚏——阁楼的时间感通过身体感受', effectEn: 'Dust in the face, three sneezes — the attic\'s stored time felt physically before emotionally' },
            { para: 1, text: '一笔一画，端端正正，像她本人一样利落', technique: '字迹如人', techniqueEn: 'Handwriting as Person', effect: '字迹=人品——人走了字还在', effectEn: 'Neat, proper strokes — the handwriting embodying the grandmother\'s character beyond death' },
            { para: 2, text: '他只吃了一个，说另一个留给我', technique: '日记引用（童真）', techniqueEn: 'Diary Quote (Innocence)', effect: '六岁的体贴——通过奶奶视角重新发现自己', effectEn: 'A six-year-old saving an egg for grandma — rediscovering one\'s own childhood through another\'s eyes' },
            { para: 4, text: '长大要当科学家，给我造一个不会坏的膝盖', technique: '童言（科幻般的爱）', techniqueEn: 'Child\'s Promise', effect: '科学家+膝盖——孩子用自己的方式表达关爱', effectEn: 'Building grandma an unbreakable knee — a child\'s love expressed in the language of impossible promises' },
            { para: 5, text: '我偷偷在他书包里塞了一件毛衣', technique: '隐秘的关爱', techniqueEn: 'Secret Care', effect: '偷偷塞毛衣——不被注意的爱', effectEn: 'A sweater secretly stuffed into a backpack — love that does not announce itself' },
            { para: 6, text: '当时还觉得奶奶多管闲事，连谢谢都没说', technique: '后悔', techniqueEn: 'Belated Regret', effect: '当时不懂现在懂——最痛的遗憾', effectEn: 'Thought it was meddling, didn\'t even say thanks — regret that cannot be remedied' },
            { para: 7, text: '字迹明显颤抖了，写得歪歪斜斜', technique: '字迹变化（衰弱）', techniqueEn: 'Handwriting Deterioration', effect: '端正→颤抖→越来越淡——字迹记录了生命的消逝', effectEn: 'From neat to trembling to fading — the handwriting charts the body\'s decline' },
            { para: 7, text: '一千二百块钱，放在柜子第二个抽屉里', technique: '精确数字', techniqueEn: 'Precise Number', effect: '具体到金额和位置——真实感令人心碎', effectEn: '1,200 yuan in the second drawer — specificity that makes love concrete and grief unbearable' },
            { para: 7, text: '这孩子爱吃糖醋排骨……后面的字越来越淡', technique: '戛然而止', techniqueEn: 'Abrupt Fade', effect: '最后想到的是孙子爱吃的菜——然后笔迹消失', effectEn: 'Her last written thought was what the child likes to eat — then the ink fades to nothing' },
            { para: 9, text: '隔着时间和生死，再一次紧紧拥抱你', technique: '拟人（文字为拥抱）', techniqueEn: 'Words as Embrace', effect: '文字跨越了生死的界限——最温暖的结尾', effectEn: 'Across time and the boundary of death, words reach out and hold you — the warmest closing image' }
          ],
          approach: '以一本旧日记为线索，写发现去世奶奶留下的日记，从中感受到文字跨越生死的温度。',
          approachEn: 'Using an old diary as the thread, discovering deceased grandmother\'s diary and feeling the warmth of words that transcends life and death.',
          architecture: '起：整理旧物→承：发现奶奶的日记→转：读到关于自己的记录→合：文字让爱永不消逝',
          architectureEn: 'Beginning: sorting old belongings → Development: finding grandmother\'s diary → Turn: reading entries about oneself → Resolution: words make love eternal',
          logic: '以发现日记为契机，通过阅读日记内容，层层深入感受文字承载情感的力量。',
          logicEn: 'Using the diary\'s discovery as a catalyst, deepening through reading entries to feel the power of words carrying emotion.',
          skills: ['物件引入自然', '日记嵌套增加真实感', '情感克制更动人'],
          skillsEn: ['Natural object introduction', 'Diary nesting adds authenticity', 'Restrained emotion is more moving'],
          fullText: '搬家时，妈妈让我清理阁楼上的旧箱子。灰尘扑了一脸，打了三个喷嚏，我才打开那只棕色的皮箱。里面是一些旧衣服、几张发黄的照片，和一本黑色封面的笔记本。\n\n翻开第一页，我愣住了——是奶奶的字迹。奶奶走了已经四年了，她的声音、她的笑容在记忆里越来越模糊。但眼前这些字，一笔一画，端端正正，像她本人一样利落。\n\n第一篇的日期是2018年9月1日：\n\u201c小宝今天上小学了。早上给他煮了两个鸡蛋，他只吃了一个，说另一个留给我。这孩子，才六岁就知道心疼人了。\u201d\n\n我的眼眶瞬间红了。\n\n一页一页地翻。2019年春天：\u201c小宝说长大要当科学家，给我造一个不会坏的膝盖。我笑了半天，这孩子说话跟他爸一样，嘴甜。\u201d\n\n2020年冬天：\u201c今天降温了，小宝非要穿那件薄外套，说穿厚的不好看。我偷偷在他书包里塞了一件毛衣，不知道他发现了没有。\u201d\n\n我发现了。那天下午在教室里翻书包找课本，摸到了那件毛衣。当时还觉得奶奶多管闲事，连谢谢都没说。现在想起来，心像被什么东西狠狠攥了一下。\n\n最后一篇的日期是2021年3月。字迹明显颤抖了，写得歪歪斜斜：\n\u201c最近身体不太好，怕是拖不了多久了。最放心不下的就是小宝。他明年就上初中了，我怕看不到了。给他存了一千二百块钱，放在柜子第二个抽屉里，让他妈买些好吃的。这孩子爱吃糖醋排骨……\u201d\n\n后面的字越来越淡，最后几个字几乎看不清了。\n\n我捧着那本日记，蹲在阁楼的角落里哭了很久很久。阳光透过天窗照进来，照在发黄的纸页上，照在奶奶那些端正的、颤抖的、越来越淡的字上。\n\n那天我感受到了文字的温度。原来，人会离开，但文字不会。那些写在纸上的爱，不会随着岁月褪色，不会随着生命消逝。它安安静静地躺在那里，等着你在某个不经意的时刻打开它，然后——隔着时间和生死，再一次紧紧拥抱你。\n\n奶奶，我长大了。虽然没有当科学家，但我学会了用文字记住爱。这是你教我的。',
          fullTextEn: 'While moving, Mom asked me to clear old boxes in the attic. Dust hit my face—three sneezes before I pried open the brown leather case. Inside: old clothes, yellowed photos, and a notebook with a black cover.\n\nOpening the first page, I froze—Grandma\'s handwriting. Grandma had been gone four years; her voice and smile growing blurry in memory. But these characters before me, stroke by stroke, neat and proper, were sharp like she was.\n\nThe first entry was dated September 1, 2018:\n"Little Bao started elementary school today. Made him two boiled eggs this morning; he only ate one, said the other was for me. This child—only six and already so considerate."\n\nMy eyes instantly reddened.\n\nPage by page. Spring 2019: "Little Bao says he wants to be a scientist when he grows up and build me a knee that never breaks. I laughed for ages—this child talks just like his father, so sweet."\n\nWinter 2020: "Temperature dropped today. Little Bao insisted on wearing his thin jacket—said the thick one didn\'t look good. I secretly stuffed a sweater in his backpack. Wonder if he found it."\n\nI did find it. That afternoon in the classroom, searching my bag for a textbook, I felt the sweater. At the time, I thought Grandma was being nosy and didn\'t even say thank you. Remembering now, my heart clenched as if something gripped it hard.\n\nThe last entry was dated March 2021. The handwriting trembled noticeably, slanting and unsteady:\n"Haven\'t been feeling well lately—probably can\'t hold on much longer. What I worry about most is Little Bao. He\'ll start middle school next year—I\'m afraid I won\'t see it. Saved 1,200 yuan for him, in the second drawer of the cabinet. Let his mom buy some good food. This child loves sweet-and-sour ribs..."\n\nThe writing grew fainter and fainter; the last few characters were nearly illegible.\n\nI held that diary, crouching in the attic corner, crying for a very long time. Sunlight streamed through the skylight onto the yellowed pages, onto Grandma\'s neat, trembling, fading words.\n\nThat day I felt the warmth of words. It turns out people leave, but words don\'t. Love written on paper won\'t fade with years or vanish with life. It lies there quietly, waiting for you to open it at some unexpected moment—then, across time and the boundary of life and death, it embraces you tightly once more.\n\nGrandma, I\'ve grown up. I didn\'t become a scientist, but I learned to remember love through words. You taught me that.',
          highlights: [
            { text: '一千二百块钱，放在柜子第二个抽屉里', textEn: '1,200 yuan, in the second drawer of the cabinet', why: '具体到数字和位置，真实感极强', whyEn: 'Exact amount, exact drawer — specificity that makes the dying grandmother\'s love unbearably real' },
            { text: '隔着时间和生死，再一次紧紧拥抱你', textEn: 'Across time and the boundary of life and death, it embraces you tightly once more', why: '结尾将文字人格化，温暖深情', whyEn: 'Words personified as arms reaching across death — the essay\'s warmest and most devastating image' }
          ],
          sections: [
            { type: '起', fn: '发现', fnEn: 'Discovery', detail: '阁楼里的旧日记', detailEn: 'Old diary in the attic' },
            { type: '承', fn: '阅读', fnEn: 'Reading', detail: '日记中的生活细节', detailEn: 'Life details in the diary' },
            { type: '转', fn: '震动', fnEn: 'Shaken', detail: '最后一篇的颤抖', detailEn: 'The trembling last entry' },
            { type: '合', fn: '感悟', fnEn: 'Realization', detail: '文字让爱永恒', detailEn: 'Words make love eternal' }
          ]
        },
        {
          title: '我感受到了坚持的意义', titleEn: 'I Felt the Meaning of Perseverance',
          score: 44, maxScore: 50,
          structure: 'diJinShi',
          techniques: ['dongZuoMiaoXie','huanjingMiaoXie','fanFuDianTi'],
          techniqueMarks: [
            { para: 0, text: '第十七次从自行车上摔下来的时候', technique: '精确数字开头', techniqueEn: 'Precise Number Opening', effect: '"第十七次"——精确计数让坚持可量化', effectEn: 'The seventeenth fall — precision makes perseverance countable and therefore real' },
            { para: 1, text: '没错，第十七次。我数过', technique: '短句强调', techniqueEn: 'Short-sentence Emphasis', effect: '独立成段——倔强的语气', effectEn: 'A paragraph of six words confirming the count — stubbornness in miniature' },
            { para: 3, text: '双手紧紧攥住车把，腿僵得像两根木棍', technique: '动作+比喻', techniqueEn: 'Action + Simile', effect: '攥紧+木棍——恐惧通过身体表达', effectEn: 'White-knuckle grip, legs stiff as wooden sticks — fear expressed entirely through the body' },
            { para: 4, text: '膝盖上旧伤叠着新伤，青一块紫一块，像一幅抽象画', technique: '伤痕比喻', techniqueEn: 'Bruise as Art', effect: '抽象画比喻——用幽默消解疼痛', effectEn: 'Bruises as abstract painting — humor defusing pain, resilience disguised as self-deprecation' },
            { para: 5, text: '没说"加油"也没说"不学算了"，只是递给我一瓶水："喝口水，歇一歇。"', technique: '留白式陪伴', techniqueEn: 'Understated Companionship', effect: '不催不放弃——最好的支持是安静地递水', effectEn: 'No push, no surrender — a water bottle handed without commentary is the perfect parenting' },
            { para: 6, text: '不是不疼了，是习惯了', technique: '认知转变', techniqueEn: 'Cognitive Shift', effect: '疼痛没消失但关系变了——成长的标志', effectEn: 'Pain hasn\'t lessened, just normalized — the mark of genuine adaptation' },
            { para: 7, text: '爸爸偷偷放了手，我竟然独自骑了三十米才发现', technique: '关键时刻', techniqueEn: 'Breakthrough Moment', effect: '放手的瞬间——孩子不知道自己已经会了', effectEn: 'Dad lets go secretly and the child rides thirty meters unaware — the classic moment of invisible mastery' },
            { para: 7, text: '风从耳边呼呼地吹过，路边的树飞快地往后退', technique: '速度感描写', techniqueEn: 'Speed Sensation', effect: '风声+树后退——骑行的自由感', effectEn: 'Wind rushing past ears, trees flying backward — the sensation of freedom on two wheels' },
            { para: 9, text: '夕阳把整条路染成了金色，爸爸在远处朝我挥手', technique: '画面收束', techniqueEn: 'Scenic Resolution', effect: '金色夕阳+挥手——温暖的收尾画面', effectEn: 'A golden sunset road with Dad waving from afar — the image distills the entire father-child journey' },
            { para: 10, text: '坚持的意义不在终点，在路上。在每一次摔倒后重新站起来的那一秒', technique: '点题升华', techniqueEn: 'Thematic Elevation', effect: '不在终点在路上——超越了"成功"本身', effectEn: 'Not at the destination but on the road — perseverance redefined as the act of rising, not arriving' }
          ],
          approach: '写学骑自行车的经历，从反复摔倒到终于骑上公路，层层递进感受\u201c坚持\u201d从痛苦到释然到喜悦。',
          approachEn: 'Learning to ride a bicycle, from repeated falls to finally riding on the road, progressively feeling "perseverance" evolve from pain to release to joy.',
          architecture: '第一层：摔倒→第二层：放弃的念头→第三层：再次尝试→冲刺：终于学会→升华：坚持的意义不只是成功',
          architectureEn: 'Layer 1: falling → Layer 2: wanting to quit → Layer 3: trying again → Sprint: finally learning → Elevation: perseverance means more than success',
          logic: '以学骑车为载体，每一层递进加深对\u201c坚持\u201d的理解，最终超越\u201c成功\u201d本身。',
          logicEn: 'Using bicycle learning as vehicle, each layer deepening understanding of "perseverance," ultimately transcending "success" itself.',
          skills: ['层层递进有力', '动作描写生动', '主题超越事件'],
          skillsEn: ['Powerful progressive layers', 'Vivid action descriptions', 'Theme transcends the event'],
          fullText: '我感受到坚持的意义，是在第十七次从自行车上摔下来的时候。\n\n没错，第十七次。我数过。\n\n别的孩子七八岁就学会了骑车，我到了十三岁还不会。不是不想学，是怕。小时候摔过一次，膝盖缝了三针，从此看到自行车就腿软。但初二的秋天，同学们约好骑车去郊游，我不想再当那个被落下的人。\n\n第一天，爸爸扶着后座，我双手紧紧攥住车把，腿僵得像两根木棍。刚骑出去五米，车头一歪，我\u201c啪\u201d地摔在地上。手掌擦破了皮，渗出细密的血珠。爸爸说\u201c没事\u201d，我说\u201c不学了\u201d。\n\n第二天，不知道怎么又坐上了车。这次骑了十米，又摔了。第三天，十五米，摔了。第四天，拐弯的时候摔了。膝盖上旧伤叠着新伤，青一块紫一块，像一幅抽象画。\n\n第七次摔倒后，我坐在地上哭了。爸爸蹲在旁边，没说\u201c加油\u201d也没说\u201c不学算了\u201d，只是递给我一瓶水：\u201c喝口水，歇一歇。\u201d\n\n第十次，我发现自己摔倒后爬起来的速度越来越快了。不是不疼了，是习惯了。\n\n第十四次，爸爸偷偷放了手，我竟然独自骑了三十米才发现。那三十米，风从耳边呼呼地吹过，路边的树飞快地往后退，我的心砰砰跳得要跳出来——不是害怕，是激动。\n\n第十七次摔倒，是因为看到前面有个小坡，慌了。爬起来的时候，我看着那个小坡，深吸一口气，重新蹬了上去。车轮碾过碎石，颠簸了几下，然后——上去了。\n\n坡顶上，我停下来，回头望。夕阳把整条路染成了金色，爸爸在远处朝我挥手。风吹过来，凉凉的，舒服极了。\n\n那一刻我明白了：坚持的意义不是\u201c学会骑车\u201d。坚持的意义是，当你第十七次摔倒、浑身是伤、眼泪还没擦干的时候，你还是选择了再试一次。是那十七次摔倒，教会了我的身体如何平衡、我的心如何勇敢。\n\n后来骑车去郊游的那天，我骑得不算快，还摇摇晃晃的。但同学们等着我，我也终于跟上了。风灌进衣领，阳光铺在路上，我笑得像个傻子。\n\n我感受到了坚持的意义——它不在终点，在路上。在每一次摔倒后重新站起来的那一秒。',
          fullTextEn: 'I felt the meaning of perseverance the seventeenth time I fell off a bicycle.\n\nYes, the seventeenth time. I counted.\n\nOther kids learn to ride at seven or eight; I still couldn\'t at thirteen. Not for lack of wanting—I was afraid. A childhood fall had earned me three stitches on my knee, and since then, bicycles made my legs weak. But in the fall of eighth grade, classmates planned a cycling trip, and I didn\'t want to be left behind anymore.\n\nDay one, Dad held the back seat while I gripped the handlebars, legs stiff as wooden sticks. Five meters out, the front wheel veered—I crashed. Palms scraped raw, fine blood beads seeping through. Dad said "it\'s fine"; I said "I\'m done."\n\nDay two, somehow I was back on the bike. Ten meters—crashed. Day three, fifteen meters—crashed. Day four, crashed while turning. Old bruises layered with new ones, black and blue, like an abstract painting.\n\nAfter the seventh fall, I sat on the ground crying. Dad squatted beside me—no "keep going," no "forget it then"—just handed me a water bottle: "Have a drink. Rest a bit."\n\nBy the tenth fall, I noticed I was getting up faster each time. Not because it hurt less—because I\'d gotten used to it.\n\nThe fourteenth fall: Dad secretly let go, and I rode thirty meters solo before noticing. Those thirty meters—wind whooshing past my ears, roadside trees flying backward, my heart pounding out of my chest—not from fear, from excitement.\n\nThe seventeenth fall came because I panicked at a small hill ahead. Getting up, I stared at that hill, took a deep breath, and pedaled up again. Wheels crunched over gravel, bumped a few times, then—I made it.\n\nAt the hilltop, I stopped and looked back. Sunset had painted the entire road gold; Dad waved from far away. The breeze came cool—wonderfully comfortable.\n\nIn that moment I understood: the meaning of perseverance isn\'t "learning to ride." It\'s that when you\'ve fallen seventeen times, covered in bruises, tears not yet dry, you still choose to try once more. Those seventeen falls taught my body balance and my heart courage.\n\nOn the day of the cycling trip, I wasn\'t the fastest—still wobbling. But classmates waited for me, and I finally kept up. Wind filled my collar, sunlight paved the road, and I grinned like a fool.\n\nI felt the meaning of perseverance—it\'s not at the destination, but on the road. In the one second after each fall when you choose to stand again.',
          highlights: [
            { text: '第十七次。我数过', textEn: 'The seventeenth time. I counted.', why: '简洁有力的短句，强调坚持的量化痕迹', whyEn: 'Six syllables confirming the count — perseverance quantified with stubborn precision' },
            { text: '坚持的意义不在终点，在路上', textEn: 'The meaning of perseverance is not at the destination — it\'s on the road', why: '哲理金句，超越事件本身', whyEn: 'Not arriving but rising — the thesis redefines perseverance beyond success' }
          ],
          sections: [
            { type: '第一层', fn: '恐惧', fnEn: 'Fear', detail: '反复摔倒', detailEn: 'Repeated falls' },
            { type: '第二层', fn: '习惯', fnEn: 'Adaptation', detail: '爬起来越来越快', detailEn: 'Getting up faster' },
            { type: '第三层', fn: '突破', fnEn: 'Breakthrough', detail: '独自骑行', detailEn: 'Riding alone' },
            { type: '冲刺', fn: '上坡', fnEn: 'The hill', detail: '第十七次后的勇气', detailEn: 'Courage after the 17th fall' },
            { type: '升华', fn: '领悟', fnEn: 'Insight', detail: '意义在路上', detailEn: 'Meaning is on the road' }
          ]
        },
        {
          title: '我感受到了时间的珍贵', titleEn: 'I Felt How Precious Time Is',
          score: 45, maxScore: 50,
          structure: 'daoXuShi',
          techniques: ['wuGanMiaoXie','xinLiMiaoXie','shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '考场上的钟"嗒嗒嗒"地走着，像催命一样急', technique: '拟声+紧迫感', techniqueEn: 'Onomatopoeia + Urgency', effect: '"嗒嗒嗒"三个字立刻把读者拉进考场', effectEn: 'Tick tick tick — three syllables plunging the reader straight into exam-room panic' },
            { para: 1, text: '来不及了来不及了来不及了——这三个字像鼓点一样在脑子里敲', technique: '反复（焦虑具象化）', techniqueEn: 'Repetition as Anxiety', effect: '三次重复=心跳加速——读者感同身受', effectEn: 'Three repetitions mirroring a racing heartbeat — the reader\'s pulse rises with the narrator\'s' },
            { para: 3, text: '第三天就睡过了头', technique: '反转（计划vs现实）', techniqueEn: 'Plan vs. Reality', effect: '精心的计划三天就崩塌——真实的自嘲', effectEn: 'A meticulously posted schedule collapses on day three — self-mockery that every student recognizes' },
            { para: 4, text: '十分钟不知不觉变成一个小时；"就一局"变成了"再来一局"', technique: '时间流失描写', techniqueEn: 'Time Leaking Away', effect: '两个"变成"展现了时间被偷走的过程', effectEn: 'Ten minutes becoming an hour, one round becoming another — time stolen in plain sight' },
            { para: 5, text: '"等一下"和"明天再做"堆积起来，变成了考场上最后十分钟的兵荒马乱', technique: '因果链', techniqueEn: 'Causal Chain', effect: '日常的拖延→考场的崩溃——因果关系一目了然', effectEn: 'Daily "in a minute" accumulating into exam-room chaos — cause and consequence linked across months' },
            { para: 7, text: '"一眨眼，八十年就过去了。"', technique: '长辈视角', techniqueEn: 'Elder\'s Perspective', effect: '八十年=一眨眼——跨代视角的震撼力', effectEn: 'Eighty years reduced to a blink — the generational perspective makes time\'s speed visceral' },
            { para: 7, text: '他伸出满是皱纹和老茧的手……"你摸摸，这就是时间走过的痕迹。"', technique: '触觉哲学', techniqueEn: 'Tactile Philosophy', effect: '皱纹=时间的痕迹——抽象概念变成可触摸的真实', effectEn: 'Wrinkled, calloused hands as time\'s footprint — abstract philosophy made touchable' },
            { para: 8, text: '我低头看了看自己光滑的手指，再看看笔下写了一半的作文', technique: '对比（两双手）', techniqueEn: 'Two Hands Contrast', effect: '光滑vs皱纹——年轻不等于有时间', effectEn: 'Smooth young fingers versus weathered old ones — youth doesn\'t mean unlimited time' },
            { para: 9, text: '不是因为还来得及——而是因为我终于明白', technique: '认知转折', techniqueEn: 'Cognitive Turn', effect: '不是时间够了而是态度变了——领悟比成功重要', effectEn: 'Not because there\'s time left, but because understanding finally arrives — insight over outcome' },
            { para: 11, text: '从这一秒开始，不再浪费', technique: '首尾呼应', techniqueEn: 'Echo Closure', effect: '从"来不及了"到"从这一秒开始"——时间观的彻底转变', effectEn: 'From "not enough time" to "starting this second" — the narrator\'s relationship with time transformed' }
          ],
          approach: '倒叙手法，从考场上时间不够用的焦虑写起，回忆一年来浪费时间的种种，最终领悟时间的珍贵。',
          approachEn: 'Reverse chronology from exam-time anxiety about running out of time, recalling a year of wasted time, finally appreciating its preciousness.',
          architecture: '倒叙：考场最后十分钟→回忆：浪费时间的日常→转折：爷爷的话→回到考场：珍惜当下→结尾：每一秒都不再浪费',
          architectureEn: 'Flashback: last ten minutes in exam → Memory: daily time-wasting → Turn: grandpa\'s words → Return to exam: cherish the present → Ending: never waste another second',
          logic: '以考场时间紧迫为切入点，倒叙引出对时间的反思，最终回归当下。',
          logicEn: 'Exam time pressure as entry point, flashback triggering time reflection, ultimately returning to the present.',
          skills: ['倒叙紧迫感强', '五感描写增强代入', '首尾呼应圆融'],
          skillsEn: ['Strong urgency from reverse chronology', 'Sensory descriptions enhance immersion', 'Seamless opening-closing echo'],
          fullText: '考场上的钟\u201c嗒嗒嗒\u201d地走着，像催命一样急。\n\n最后十分钟。作文还差两段没写完。我的手在发抖，笔尖在纸上飞，字写得歪歪扭扭。额头上全是汗，心脏砰砰跳得像要从嗓子眼里蹦出来。来不及了来不及了来不及了——这三个字像鼓点一样在脑子里敲。\n\n如果时间能倒流，我一定不会把它浪费在那些无聊的事情上。\n\n初三开学的时候，我曾经信誓旦旦地列了一张计划表：每天六点起床，背二十个单词，做两页数学题。那张表被我工工整整地贴在书桌前。然后呢？第三天就睡过了头。\n\n我把大把大把的时间喂给了手机。刷短视频，十分钟不知不觉变成一个小时；打游戏，\u201c就一局\u201d变成了\u201c再来一局\u201d；聊天群里水消息，拇指刷屏的速度比写作业快十倍。每天晚上躺在床上，回想今天做了什么，脑子里一片空白。\n\n妈妈催我复习，我说\u201c等一下\u201d。老师布置的额外练习，我说\u201c明天再做\u201d。\u201c等一下\u201d和\u201c明天再做\u201d堆积起来，变成了考场上最后十分钟的兵荒马乱。\n\n想到这里，我的笔停了一秒。\n\n耳边忽然响起爷爷的话。去年清明节回老家，八十二岁的爷爷坐在院子里晒太阳。他眯着眼看天，慢慢地说：\u201c你们年轻人啊，总觉得时间多得很。我像你这么大的时候也这么想。一眨眼，八十年就过去了。\u201d他伸出满是皱纹和老茧的手，握了握我的手指，\u201c你摸摸，这就是时间走过的痕迹。\u201d\n\n我低头看了看自己光滑的手指，再看看笔下写了一半的作文。\n\n钟还在走。\u201c嗒嗒嗒\u201d，每一声都比上一声更重。\n\n我深吸一口气，握紧笔，继续写。不是因为还来得及——而是因为我终于明白：时间不等人，但如果你认真对待每一秒，每一秒都不会辜负你。\n\n交卷的铃声响了。我放下笔，看着窗外的天空。阳光正好，云在慢慢地飘。\n\n走出考场，我做的第一件事是深呼吸。然后我在心里对自己说：从这一秒开始，不再浪费。',
          fullTextEn: 'The exam room clock goes "tick tick tick," urgent as a death knell.\n\nTen minutes left. My essay still needs two more paragraphs. My hand trembles; the pen flies across paper; characters come out crooked. Forehead drenched in sweat, heart pounding as if about to leap from my throat. Not enough time not enough time not enough time—three words drumming in my brain.\n\nIf time could rewind, I would never have wasted it on those pointless things.\n\nAt the start of ninth grade, I\'d solemnly posted a schedule on my desk: wake at six, memorize twenty vocabulary words, do two pages of math. Neatly printed, carefully hung. Then what? By day three, I\'d overslept.\n\nI fed heaps and heaps of time to my phone. Short videos—ten minutes became an hour without noticing. Games—"just one round" became "one more round." Group chats—my thumb scrolled ten times faster than it did homework. Every night in bed, reviewing what I\'d done that day, my mind drew a blank.\n\nMom nagged me to review; I said "in a minute." Teacher assigned extra practice; I said "tomorrow." "In a minute" and "tomorrow" piled up into the final ten minutes of exam-room chaos.\n\nThinking this, my pen paused for one second.\n\nGrandpa\'s words suddenly echoed. Last Qingming Festival, visiting our hometown, eighty-two-year-old Grandpa sat in the yard sunbathing. Eyes squinting at the sky, he said slowly: "You young people always think you have plenty of time. I thought the same at your age. In a blink, eighty years passed." He extended a hand full of wrinkles and calluses, squeezed my fingers: "Feel that—those are the marks time left behind."\n\nI looked down at my smooth fingers, then at my half-written essay.\n\nThe clock keeps going. "Tick tick tick"—each tick heavier than the last.\n\nI took a deep breath, gripped the pen, and kept writing. Not because there was still time—but because I finally understood: time waits for no one, but if you take every second seriously, no second will let you down.\n\nThe bell rang. I set down my pen and looked out the window. The sunlight was just right; clouds drifted slowly.\n\nWalking out of the exam, the first thing I did was breathe deeply. Then I told myself: from this second on, no more wasting.',
          highlights: [
            { text: '来不及了来不及了来不及了', textEn: 'Not enough time not enough time not enough time', why: '反复强调制造紧迫感，读者感同身受', whyEn: 'Three repetitions drumming in the brain — the reader\'s own exam-anxiety memories ignite' },
            { text: '你摸摸，这就是时间走过的痕迹', textEn: 'Feel that — those are the marks time left behind', why: '将抽象时间具象化为手上的皱纹', whyEn: 'Grandpa makes time touchable — wrinkles and calluses as eighty years of proof' }
          ],
          sections: [
            { type: '倒叙', fn: '紧迫', fnEn: 'Urgency', detail: '考场最后十分钟', detailEn: 'Last 10 minutes in exam' },
            { type: '回忆', fn: '浪费', fnEn: 'Wasting', detail: '手机和拖延', detailEn: 'Phone and procrastination' },
            { type: '转折', fn: '触动', fnEn: 'Touch', detail: '爷爷的手', detailEn: 'Grandpa\'s hands' },
            { type: '回归', fn: '觉醒', fnEn: 'Awakening', detail: '认真对待每一秒', detailEn: 'Take every second seriously' }
          ]
        }
      ]
    },
    {
      id: 'yn2008_comp1',
      paperId: 'yn2008',
      year: 2008,
      region: '云南省',
      prompt: '请以"在我心里，______是______"为题（将题目补充完整），写一篇文章。要求：立意自定，文体自选（诗歌除外）；说真话，抒真情，忌抄袭；文中不要使用真实的地名、校名、人名；书写工整，不少于600字。',
      promptEn: 'Write an essay titled "In My Heart, ______ Is ______" (complete the title). Requirements: choose your own theme and genre (except poetry); be sincere and authentic; do not use real names; at least 600 words.',
      type: 'narrative',
      category: '记叙文',
      categoryEn: 'Narrative',
      wordCount: 600,
      guide: {
        analysis: '双空半命题，需补充两处。第一空填人/事/物，第二空填评价或感悟。如"妈妈是最温暖的太阳""失败是成功的阶梯"。关键在于两空之间形成出人意料又合乎情理的关系。',
        analysisEn: 'Double-blank semi-open-ended title. First blank: person/thing/event; second blank: evaluation or insight. Key is creating a surprising yet reasonable relationship between the two blanks.',
        keyPoints: ['两空搭配要有新意', '用具体事例支撑观点', '情感要真实深刻', '标题本身就是文眼'],
        keyPointsEn: ['Creative pairing of two blanks', 'Support with concrete examples', 'Genuine deep emotion', 'Title itself is the eye of the essay'],
        pitfalls: ['两空搭配太常见（如"妈妈是最好的人"）', '论述空泛缺乏事例', '感悟不够深入'],
        pitfallsEn: ['Too common a pairing', 'Vague argument lacking examples', 'Insufficient depth of insight']
      },
      essays: [
        {
          title: '在我心里，外婆的厨房是整个世界', titleEn: 'In My Heart, Grandma\'s Kitchen Is the Whole World',
          score: 47, maxScore: 50,
          structure: 'qiChengZhuanHe',
          techniques: ['wuGanMiaoXie','xiJieMiaoXie','shouWeiHuYing'],
          techniqueMarks: [
            { para: 0, text: '城市的街头有数不清的餐馆，可我找遍了每一条街，也找不到外婆厨房里的那种味道', technique: '对比开头', techniqueEn: 'Contrast Opening', effect: '无数餐馆vs一间厨房——数量输给了情感', effectEn: 'Countless restaurants cannot replace one kitchen — quantity surrenders to emotion' },
            { para: 1, text: '墙壁被熏得发黑，可那是我记忆中最温暖的颜色', technique: '逆转认知', techniqueEn: 'Cognitive Reversal', effect: '黑=温暖——打破常规审美，赋予情感色彩', effectEn: 'Smoke-blackened walls as the warmest color — defying conventional aesthetics with emotional truth' },
            { para: 2, text: '铁锅里油一热，"嗞啦"一声，满屋子都是春天的味道', technique: '拟声+通感', techniqueEn: 'Onomatopoeia + Synesthesia', effect: '"嗞啦"=春天——声音和季节融合', effectEn: 'One sizzle and the room fills with spring — sound, smell, and season fused in a single moment' },
            { para: 2, text: '我蹲在灶台边烧火，火苗舔着锅底，映红了我的小脸', technique: '画面描写', techniqueEn: 'Visual Tableau', effect: '火苗+小脸——温暖的光和童年的形象叠加', effectEn: 'Flames licking the wok, reddening a small face — warmth and childhood in one firelit frame' },
            { para: 3, text: '我端起来咕咚咕咚喝完，抹一抹嘴，觉得那是世界上最好喝的东西', technique: '动作+感受', techniqueEn: 'Action + Sensation', effect: '咕咚咕咚+抹嘴——童年的畅快饮用', effectEn: 'Gulping and wiping — the unselfconscious pleasure of childhood drinking, elevated to "best in the world"' },
            { para: 4, text: '白气腾腾，金色的桂花点缀在雪白的糕上，像一幅画', technique: '色彩描写', techniqueEn: 'Color Composition', effect: '白+金——蒸笼揭开的瞬间如艺术品', effectEn: 'White steam, golden osmanthus on snow-white cake — the steamer lid lifts like a gallery unveiling' },
            { para: 5, text: '一家人围着小方桌，吃得额头冒汗，窗外雪花飘飘', technique: '内外对比', techniqueEn: 'Interior-Exterior Contrast', effect: '桌内热汗vs窗外飘雪——冬日团圆的极致画面', effectEn: 'Sweating foreheads around the table while snow drifts outside — warmth and cold in perfect counterpoint' },
            { para: 6, text: '厨房里冷冷清清的，灶台上落了一层灰。大铁锅还在，可里面是空的', technique: '空间转换（失去）', techniqueEn: 'Spatial Shift (Loss)', effect: '从热闹到冷清——灰尘和空锅是失去的证据', effectEn: 'Dust on the stove, empty wok — the kitchen\'s silence speaks louder than any eulogy' },
            { para: 7, text: '味道不对——鸡蛋老了，香椿放多了，还忘了加盐。可外婆……笑得眼睛眯成一条缝', technique: '传承尝试', techniqueEn: 'Attempted Inheritance', effect: '做得不好但外婆开心——爱比手艺更重要', effectEn: 'Overdone eggs, too much toon, no salt — yet grandma smiles: love matters more than technique' },
            { para: 8, text: '一个用柴火和爱搭建起来的、永远不会倒塌的世界', technique: '结尾升华', techniqueEn: 'Closing Elevation', effect: '柴火+爱=永不倒塌——厨房成为精神故乡', effectEn: 'Built with firewood and love, a world that will never collapse — the kitchen as spiritual homeland' }
          ],
          approach: '以外婆厨房里的味道为线索，串联童年记忆，展现厨房作为情感空间的意义。',
          approachEn: 'Using the flavors of grandma\'s kitchen as thread, connecting childhood memories, showing the kitchen as an emotional space.',
          architecture: '起：城市里想念一种味道→承：外婆厨房的四季味道→转：外婆生病后厨房的沉默→合：厨房是爱的另一个名字',
          architectureEn: 'Beginning: missing a flavor in the city → Development: four seasons of kitchen flavors → Turn: kitchen silence after grandma falls ill → Resolution: kitchen is another name for love',
          logic: '以\u201c味道\u201d为情感载体，从怀念到回忆到失去，层层展开对外婆和童年的深情。',
          logicEn: 'Flavor as emotional vehicle, unfolding from longing to memory to loss, layer by layer revealing love for grandma and childhood.',
          skills: ['五感描写沉浸式体验', '细节选取精准', '首尾呼应温暖'],
          skillsEn: ['Immersive sensory experience', 'Precisely chosen details', 'Warm opening-closing echo'],
          fullText: '城市的街头有数不清的餐馆，可我找遍了每一条街，也找不到外婆厨房里的那种味道。\n\n外婆的厨房在乡下老屋的东边。不大，五六个平方，灶台是砖砌的，上面架着一口大铁锅，烟囱从墙壁穿出去，炊烟能飘出好远。厨房里常年弥漫着柴火和油烟混合的气息，墙壁被熏得发黑，可那是我记忆中最温暖的颜色。\n\n春天，外婆在厨房里炒香椿鸡蛋。门前香椿树刚冒出紫红的嫩芽，她踮着脚够下来一把，洗净切碎，打上两个土鸡蛋。铁锅里油一热，\u201c嗞啦\u201d一声，满屋子都是春天的味道。我蹲在灶台边烧火，火苗舔着锅底，映红了我的小脸。\n\n夏天是绿豆汤。外婆天不亮就起来熬，小火慢煮，豆子一颗颗炸开花。中午从田里回来，灶台上放着一碗凉好的绿豆汤，碗底沉着冰糖。我端起来咕咚咕咚喝完，抹一抹嘴，觉得那是世界上最好喝的东西。\n\n秋天有桂花糕。外婆把院子里的桂花一朵朵摘下来，晾干，拌进糯米粉里。蒸笼揭开的那一刻，白气腾腾，金色的桂花点缀在雪白的糕上，像一幅画。她总是先切一块递给我：\u201c尝尝，甜不甜？\u201d\n\n冬天最冷的时候，外婆炖腊肉萝卜汤。腊肉是秋天腌的，挂在灶台上方烟熏了两个月，切下来油汪汪、红彤彤。萝卜是地里刚拔的，白胖白胖。锅盖一掀，热气扑了满脸。一家人围着小方桌，吃得额头冒汗，窗外雪花飘飘。\n\n可是去年，外婆的腿不好了，走不了远路，也站不了灶台了。暑假回去，厨房里冷冷清清的，灶台上落了一层灰。大铁锅还在，可里面是空的。\n\n我系上外婆的围裙，学着她的样子炒了一盘香椿鸡蛋。味道不对——鸡蛋老了，香椿放多了，还忘了加盐。可外婆坐在门槛上，尝了一口，笑得眼睛眯成一条缝：\u201c好吃，比外婆做得好。\u201d\n\n我知道她在说谎。但那一刻，厨房里又有了烟火气，有了\u201c嗞啦\u201d的声响，有了柴火和油烟的味道。外婆笑着，我也笑着。\n\n在我心里，外婆的厨房不只是做饭的地方。它是一年四季的味道，是蹲在灶台边烧火的童年，是\u201c尝尝，甜不甜\u201d那句温柔的问话。它是我的整个世界——一个用柴火和爱搭建起来的、永远不会倒塌的世界。',
          fullTextEn: 'City streets have countless restaurants, but I\'ve searched every block and can\'t find the flavor of Grandma\'s kitchen.\n\nGrandma\'s kitchen was on the east side of the old country house. Small—five or six square meters—with a brick-built stove, a big iron wok on top, chimney poking through the wall, cooking smoke drifting far. The kitchen always smelled of firewood and cooking oil mixed together; walls blackened by smoke—yet in my memory, that\'s the warmest color.\n\nIn spring, Grandma fried toon-and-egg. The toon tree out front would just be sprouting purple-red buds; she\'d tiptoe to reach a handful, wash and chop them, crack two free-range eggs. Oil heated in the iron wok—"sizzle"—and the whole room smelled of spring. I\'d squat by the stove feeding the fire, flames licking the wok bottom, reddening my small face.\n\nSummer meant mung bean soup. Grandma would rise before dawn to simmer it—slow fire, beans bursting open one by one. Coming home from the fields at noon, a bowl sat on the stove cooling, rock sugar at the bottom. I\'d lift it and gulp it down, wipe my mouth, and think it was the best drink in the world.\n\nAutumn brought osmanthus cake. Grandma would pick blossoms from the yard tree one by one, dry them, mix them into glutinous rice flour. The moment the steamer lid lifted—billowing white steam, golden osmanthus dotting the snow-white cake like a painting. She\'d always cut the first piece for me: "Taste it—is it sweet enough?"\n\nIn the coldest winter, Grandma stewed cured pork and radish soup. The pork was salt-cured in fall, hung above the stove and smoked two months, sliced to reveal glistening red. Radishes, just pulled from the garden, plump and white. Lid lifted—hot steam hit your whole face. The family gathered around a small square table, eating until foreheads sweated, snowflakes drifting outside the window.\n\nBut last year, Grandma\'s legs weakened. She couldn\'t walk far or stand at the stove anymore. Visiting in summer, the kitchen was cold and deserted, dust covering the stove. The big iron wok was still there—but empty.\n\nI tied on Grandma\'s apron and tried frying toon-and-egg her way. The flavor was wrong—eggs overdone, too much toon, forgot the salt. But Grandma sat on the doorstep, tasted one bite, and smiled until her eyes squeezed shut: "Delicious—better than Grandma\'s."\n\nI knew she was lying. But in that moment, the kitchen had smoke and fire again, had "sizzle" sounds again, had the smell of firewood and oil. Grandma smiled; I smiled too.\n\nIn my heart, Grandma\'s kitchen isn\'t just a place for cooking. It\'s the flavors of all four seasons, the childhood of squatting by the stove feeding fire, the gentle question "taste it—is it sweet enough?" It\'s my whole world—one built with firewood and love, a world that will never collapse.',
          highlights: [
            { text: '城市的街头有数不清的餐馆，可我找遍了每一条街，也找不到外婆厨房里的那种味道', textEn: 'Countless restaurants line the city streets, but I\'ve searched every block and cannot find the flavor of Grandma\'s kitchen', why: '开篇对比，味道不可复制暗示情感独特', whyEn: 'A city of restaurants versus one kitchen — the irreplaceable cannot be replicated at any price' },
            { text: '好吃，比外婆做得好', textEn: 'Delicious — better than Grandma\'s', why: '明知是谎言却最动人的一句话', whyEn: 'The most tender lie in the collection — both know it\'s untrue, both smile anyway' }
          ],
          sections: [
            { type: '起', fn: '思念', fnEn: 'Longing', detail: '找不到的味道', detailEn: 'The unfindable flavor' },
            { type: '承', fn: '四季', fnEn: 'Seasons', detail: '春夏秋冬的厨房', detailEn: 'Kitchen through four seasons' },
            { type: '转', fn: '失去', fnEn: 'Loss', detail: '冷清的灶台', detailEn: 'The deserted stove' },
            { type: '合', fn: '传承', fnEn: 'Passing on', detail: '我来做饭', detailEn: 'My turn to cook' }
          ]
        },
        {
          title: '在我心里，那棵老树是一位老朋友', titleEn: 'In My Heart, That Old Tree Is an Old Friend',
          score: 45, maxScore: 50,
          structure: 'pianDuanZuHe',
          techniques: ['yiWuShuQing','huanjingMiaoXie','xiangZheng'],
          techniqueMarks: [
            { para: 0, text: '树干要三个人才能合抱', technique: '量化细节', techniqueEn: 'Quantified Detail', effect: '三人合抱——一个数字就传达了时间的重量', effectEn: 'Three people to embrace the trunk — one number conveying centuries of growth' },
            { para: 1, text: '九月的阳光穿过层层叠叠的扇形叶片，在地上铺了一层碎金', technique: '光影描写', techniqueEn: 'Light and Shadow', effect: '碎金比喻——银杏叶片滤光的视觉效果', effectEn: 'September sunlight through fan-shaped leaves scattered as flecks of gold — nature as artisan' },
            { para: 1, text: '这棵树见过多少人来了又走？此刻站在树下的我，将来也会成为它记忆里的一粒沙', technique: '哲思（时间感）', techniqueEn: 'Philosophical Reflection', effect: '一粒沙——人在时间面前的渺小，初遇即有告别感', effectEn: 'A grain of sand in the tree\'s memory — even at the first meeting, the narrator senses transience' },
            { para: 2, text: '树干粗糙的纹路硌着后背，可那种触感反而让人安心', technique: '触觉转化', techniqueEn: 'Tactile Transformation', effect: '粗糙=安心——痛感变成安慰', effectEn: 'Rough bark pressing into the back feels reassuring — physical discomfort converted to emotional anchor' },
            { para: 2, text: '连松鼠都在为明天做准备，我有什么资格放弃', technique: '借物自省', techniqueEn: 'Object-triggered Reflection', effect: '松鼠储食→自我激励——从自然中获得力量', effectEn: 'If a squirrel prepares for tomorrow, who am I to quit — nature as motivational mirror' },
            { para: 3, text: '课本可以扔掉，但那些书签一直在', technique: '对比（短暂vs永恒）', techniqueEn: 'Transient vs. Permanent', effect: '课本=知识的工具，书签=记忆的载体——后者更持久', effectEn: 'Textbooks disposable, leaf bookmarks eternal — the memory outlasts the knowledge' },
            { para: 3, text: '每一片叶子都记着一段日子，比任何日记都诚实', technique: '拟人（叶子记日记）', techniqueEn: 'Leaf as Diary', effect: '叶子比日记诚实——自然物不会美化不会遗忘', effectEn: 'Leaves as more honest records than diaries — nature neither embellishes nor forgets' },
            { para: 4, text: '嫩绿的，薄薄的，像婴儿的手掌', technique: '比喻（新生）', techniqueEn: 'Newborn Simile', effect: '新叶如婴儿手掌——树的循环暗示生命的延续', effectEn: 'New leaves like baby palms — the tree\'s renewal whispering that endings are also beginnings' },
            { para: 5, text: '它的年轮里又多了三圈，就像我的生命里多了三年', technique: '平行成长', techniqueEn: 'Parallel Growth', effect: '年轮=我的三年——人与树同步生长', effectEn: 'Three new rings, three new years — tree and teenager growing in parallel, measured differently' },
            { para: 6, text: '我来过，你还在', technique: '极简告别', techniqueEn: 'Minimalist Farewell', effect: '六个字=三年的全部感情——最简洁的刻字', effectEn: 'Six characters containing three years of companionship — the most economical inscription possible' }
          ],
          approach: '以学校里一棵老银杏树为对象，通过四个时刻展现\u201c我\u201d与树的情感联结。',
          approachEn: 'Using an old ginkgo tree at school, showing the emotional bond between narrator and tree through four moments.',
          architecture: '片段一：入学时仰望→片段二：考砸后树下哭泣→片段三：秋天捡银杏叶做书签→片段四：毕业前的告别→结尾：老树是时间的见证者',
          architectureEn: 'Fragment 1: looking up at enrollment → Fragment 2: crying under it after exam failure → Fragment 3: collecting leaves for bookmarks in autumn → Fragment 4: farewell before graduation → Ending: tree as witness of time',
          logic: '以四个时间节点串联三年校园生活，树成为陪伴和见证的象征。',
          logicEn: 'Four time points threading three years of school life; the tree becomes a symbol of companionship and witness.',
          skills: ['借物抒情含蓄深沉', '四段结构匀称', '象征手法自然'],
          skillsEn: ['Subtle depth through object-based emotion', 'Balanced four-part structure', 'Natural symbolism'],
          fullText: '学校操场东南角有一棵老银杏树。听说它比这所学校还老，树干要三个人才能合抱。在我心里，它不是一棵树，是一位沉默的老朋友。\n\n【仰望】\n初一报到那天，我跟着妈妈走进校门，一眼就看见了它。九月的阳光穿过层层叠叠的扇形叶片，在地上铺了一层碎金。树干上刻满了往届学生留下的字——名字、日期、心形，密密麻麻。我仰着头看，脖子酸了也不想低下来。那一刻我想：这棵树见过多少人来了又走？此刻站在树下的我，将来也会成为它记忆里的一粒沙。\n\n【依靠】\n初二那次月考，数学只考了五十八分。拿到卷子的瞬间，眼泪就在眼眶里打转。我不想让同学看到，拿着卷子冲出教室，一路跑到老银杏树下。我靠着它的树干坐下来，把脸埋进膝盖里哭。树干粗糙的纹路硌着后背，可那种触感反而让人安心。风吹过来，树叶沙沙响，像是有人在轻轻说：\u201c没事的。\u201d哭够了，我擦干眼泪，抬头看到一只松鼠在枝丫间蹦来蹦去，忙着储存过冬的食物。我看着它忙碌的样子，忍不住笑了——连松鼠都在为明天做准备，我有什么资格放弃？\n\n【收藏】\n每年深秋，银杏叶变成金黄色，风一吹就纷纷扬扬地落下来，整个操场像铺了一层黄金地毯。我喜欢捡最完整的那几片，夹在课本里当书签。时间一长，书页上浸出一圈淡淡的黄色印记。后来我发现，课本可以扔掉，但那些书签一直在——语文书里有一片，数学书里有一片，英语笔记本里也有一片。每一片叶子都记着一段日子，比任何日记都诚实。\n\n【告别】\n还有三个月就中考了。昨天下午放学，我又走到银杏树下。春天的新叶已经冒出来了，嫩绿的，薄薄的，像婴儿的手掌。我把手贴在树干上，感受到它粗糙的温度。三年了，我长高了十厘米，它好像没变——还是那么高，那么安静，那么不动声色地站在那里。\n\n可我知道，它其实一直在变。它的年轮里又多了三圈，就像我的生命里多了三年。\n\n\u201c再见了，老朋友。\u201d我轻声说。风吹过来，树叶沙沙响。\n\n在我心里，那棵老银杏树是一位老朋友。它不会说话，却听过我所有的心事。它什么都不做，却给了我最安静的陪伴。也许多年以后，我会回到这里，在它的树干上也刻下一行字：\u201c我来过，你还在。\u201d',
          fullTextEn: 'In the southeast corner of the school playground stands an old ginkgo tree. They say it\'s older than the school itself; three people can barely encircle its trunk. In my heart, it\'s not a tree—it\'s a silent old friend.\n\n[Looking Up]\nOn enrollment day in seventh grade, walking through the gate with Mom, I spotted it immediately. September sunlight filtered through layers of fan-shaped leaves, carpeting the ground in flecks of gold. The trunk was carved with generations of students\' marks—names, dates, hearts, densely packed. I gazed up until my neck ached. I thought: how many people has this tree watched come and go? Standing here now, someday I\'ll become just a grain of sand in its memory.\n\n[Leaning On]\nAfter an eighth-grade monthly exam, I scored fifty-eight in math. The moment I got the paper back, tears welled. Not wanting classmates to see, I grabbed the paper and ran to the old ginkgo. I sat against its trunk, face buried in my knees, crying. The rough bark texture pressed into my back, yet that touch felt reassuring. Wind blew; leaves rustled "sha sha," as if someone whispered: "It\'s okay." After crying myself out, I dried my tears and looked up to see a squirrel hopping between branches, busy storing food for winter. Watching its industriousness, I couldn\'t help laughing—even a squirrel prepares for tomorrow; what right do I have to give up?\n\n[Collecting]\nEvery late autumn, ginkgo leaves turn golden; wind sends them floating down, covering the playground like a golden carpet. I\'d pick the most perfect ones and press them in textbooks as bookmarks. Over time, faint yellow stains seeped into the pages. Later I discovered: textbooks could be thrown away, but those bookmarks endured—one in the Chinese book, one in math, one in the English notebook. Each leaf marked a stretch of days, more honest than any diary.\n\n[Farewell]\nThree months until the entrance exam. Yesterday after school, I walked to the ginkgo again. Spring\'s new leaves had emerged—tender green, paper-thin, like baby\'s palms. I pressed my hand against the trunk, feeling its rough warmth. Three years—I\'ve grown ten centimeters, but it seems unchanged: still that tall, still that quiet, still standing there without a word.\n\nBut I know it has been changing. Three more rings in its trunk, just as three more years in my life.\n\n"Goodbye, old friend," I whispered. Wind blew; leaves rustled.\n\nIn my heart, that old ginkgo is an old friend. It can\'t speak, yet has heard all my troubles. It does nothing, yet gave me the quietest companionship. Perhaps years from now, I\'ll return here and carve a line on its trunk: "I was here; you\'re still here."',
          highlights: [
            { text: '课本可以扔掉，但那些书签一直在', textEn: 'Textbooks can be thrown away, but those bookmarks endure', why: '对比手法，叶子成为比课本更长久的记忆', whyEn: 'Knowledge is disposable; the leaf-pressed memories outlast the lessons they mark' },
            { text: '我来过，你还在', textEn: 'I was here; you\'re still here', why: '结尾六个字，简洁到极致却意蕴深远', whyEn: 'Six characters containing an entire friendship — the human passes, the tree persists' }
          ],
          sections: [
            { type: '仰望', fn: '初遇', fnEn: 'First meeting', detail: '入学那天', detailEn: 'Enrollment day' },
            { type: '依靠', fn: '支撑', fnEn: 'Support', detail: '树下的眼泪', detailEn: 'Tears beneath the tree' },
            { type: '收藏', fn: '记忆', fnEn: 'Memory', detail: '银杏叶书签', detailEn: 'Ginkgo leaf bookmarks' },
            { type: '告别', fn: '珍重', fnEn: 'Farewell', detail: '三年的陪伴', detailEn: 'Three years of companionship' }
          ]
        },
        {
          title: '在我心里，失败是最好的老师', titleEn: 'In My Heart, Failure Is the Best Teacher',
          score: 44, maxScore: 50,
          structure: 'diJinShi',
          techniques: ['xinLiMiaoXie','duiBi','fanFuDianTi'],
          techniqueMarks: [
            { para: 0, text: '这句话，我用了三次失败才真正学会', technique: '开头定调', techniqueEn: 'Framing Statement', effect: '"三次"预告了文章结构——读者知道会有递进', effectEn: 'Three failures announced upfront — the reader knows a progression is coming' },
            { para: 1, text: '脑子"嗡"一声就白了', technique: '拟声+心理描写', techniqueEn: 'Onomatopoeia + Psychology', effect: '"嗡"一声——大脑宕机的瞬间感', effectEn: 'A single "buzz" and the brain blanks — the sound of panic rendered in one syllable' },
            { para: 1, text: '站在话筒前，嘴巴张了半天，一个字也说不出来', technique: '定格画面', techniqueEn: 'Freeze-frame', effect: '张嘴无声——全场最安静也最尴尬的瞬间', effectEn: 'Mouth open, nothing coming out — the silence of the stage is louder than any speech' },
            { para: 2, text: '害怕本身不可怕，逃避才可怕', technique: '感悟提炼（第一课）', techniqueEn: 'Lesson Distilled (First)', effect: '第一次失败的领悟——简洁有力', effectEn: 'Fear isn\'t frightening; fleeing is — the first lesson crystallized in one sentence' },
            { para: 3, text: '我把那张卷子贴在书桌前，每天盯着那道错题看', technique: '物件行为', techniqueEn: 'Object-driven Behavior', effect: '贴卷子=与失败共处——不逃避的具体行动', effectEn: 'Taping the failed test to the desk — coexisting with failure made into daily ritual' },
            { para: 4, text: '接受失败不是认输，是找到下次赢的方法', technique: '感悟提炼（第二课）', techniqueEn: 'Lesson Distilled (Second)', effect: '接受≠认输——层次比第一课更深', effectEn: 'Acceptance is not surrender but strategy — deeper than the first lesson' },
            { para: 5, text: '球弹了一下框，没进。"嘀——"哨声响了', technique: '声音叙事', techniqueEn: 'Sound Narration', effect: '弹框声+哨声——两个声音宣告失败', effectEn: 'Ball off rim, whistle blow — two sounds sealing the loss with cinematic precision' },
            { para: 6, text: '伸出手："打得好。"然后转身对自己的队友说："下次再来。"', technique: '行动展示成长', techniqueEn: 'Action Showing Growth', effect: '不躲不哭——用行动而非语言展示心理飞跃', effectEn: 'Handshake and "next time" — growth demonstrated through action, not declaration' },
            { para: 7, text: '想起两年前在厕所里哭的自己，忍不住笑了', technique: '时间对比', techniqueEn: 'Temporal Contrast', effect: '夕阳中回望两年前的自己——笑代替了哭', effectEn: 'Remembering the bathroom tears with a sunset smile — two years measured in emotional distance' },
            { para: 8, text: '它只是一遍一遍地把你推倒，然后安静地等', technique: '拟人（失败为教师）', techniqueEn: 'Personification (Failure as Teacher)', effect: '失败不说教只推倒——最严厉也最公平的老师', effectEn: 'Failure pushes you down and waits — the most demanding teacher who never lectures, only tests' }
          ],
          approach: '以三次失败为层次——演讲比赛忘词、数学竞赛落榜、篮球赛输球——层层递进展现对失败的认知转变。',
          approachEn: 'Three failures as layers—forgetting lines in a speech contest, failing a math competition, losing a basketball game—progressively showing transformed understanding of failure.',
          architecture: '第一层：害怕失败→第二层：接受失败→第三层：感谢失败→升华：失败是最好的老师',
          architectureEn: 'Layer 1: fearing failure → Layer 2: accepting failure → Layer 3: thanking failure → Elevation: failure is the best teacher',
          logic: '三次失败递进式改变\u201c我\u201d对失败的态度，从逃避到拥抱。',
          logicEn: 'Three failures progressively change the narrator\'s attitude toward failure, from avoidance to embrace.',
          skills: ['递进清晰有力', '心理变化细腻', '点题反复强化'],
          skillsEn: ['Clear powerful progression', 'Nuanced psychological change', 'Repeated theme reinforcement'],
          fullText: '在我心里，失败是最好的老师。这句话，我用了三次失败才真正学会。\n\n第一次是初一的演讲比赛。我准备了整整两周，稿子背得滚瓜烂熟。可上台的那一刻，看到台下黑压压的人头，脑子\u201c嗡\u201d一声就白了。站在话筒前，嘴巴张了半天，一个字也说不出来。最后是老师走上台，轻轻拍了拍我的肩膀，把我领下去。那天我躲在厕所里哭了半节课。\n\n那次失败教会我的第一课是：害怕本身不可怕，逃避才可怕。后来我报名参加了朗诵社，从在三个人面前读诗开始，一点一点练胆量。\n\n第二次是初二的数学竞赛。初赛过了，复赛差两分被淘汰。那两分丢在一道填空题上——明明会做，却因为粗心写错了一个符号。我把那张卷子贴在书桌前，每天盯着那道错题看。不是折磨自己，是提醒自己：实力不够时可以原谅，粗心大意不能原谅。\n\n那次失败教会我的第二课是：接受失败不是认输，是找到下次赢的方法。从那以后，我做完每道题都会检查三遍，养成了\u201c回头看\u201d的习惯。\n\n第三次是上个月的班级篮球赛。我是控球后卫，最后三十秒我们落后两分，我带球突破，在三分线外出手——球弹了一下框，没进。\u201c嘀——\u201d哨声响了。我站在球场中央，全班的目光像针一样扎过来。\n\n可这一次，我没有躲进厕所哭。我走到对面队长面前，伸出手：\u201c打得好。\u201d然后转身对自己的队友说：\u201c下次再来。\u201d\n\n回家的路上，夕阳把影子拉得很长。我想起两年前在厕所里哭的自己，忍不住笑了。从害怕失败，到接受失败，到感谢失败——这条路，我走了三年。\n\n在我心里，失败是最好的老师。它不温柔，不客气，从来不说\u201c你已经很棒了\u201d。它只是一遍一遍地把你推倒，然后安静地等——等你自己站起来，等你比上次站得更稳。\n\n每一次跌倒的泥土里，都藏着一颗叫\u201c成长\u201d的种子。',
          fullTextEn: 'In my heart, failure is the best teacher. This sentence took me three failures to truly learn.\n\nThe first was seventh grade\'s speech contest. I\'d prepared for two solid weeks, memorizing my script perfectly. But the moment I stepped on stage and saw the sea of faces, my brain went "buzz" and blanked. Standing before the microphone, mouth gaping, I couldn\'t produce a single word. Eventually the teacher walked up, gently patted my shoulder, and led me off. I hid in the bathroom crying for half a period.\n\nThat failure taught me lesson one: fear itself isn\'t scary—running away is. Later I joined the recitation club, starting by reading poems in front of three people, building courage bit by bit.\n\nThe second was eighth grade\'s math competition. Passed the preliminary round; eliminated in the semifinal by two points. Those two points were lost on a fill-in-the-blank—I knew how to solve it but carelessly wrote the wrong symbol. I taped that test paper to my desk, staring at the mistake daily. Not self-torture, but a reminder: lacking ability is forgivable; carelessness is not.\n\nThat failure taught me lesson two: accepting failure isn\'t surrendering—it\'s finding the way to win next time. Since then, I check every problem three times, developing the habit of "looking back."\n\nThe third was last month\'s class basketball game. As point guard, with thirty seconds left and down by two, I drove in and shot from beyond the three-point line—the ball bounced off the rim. Didn\'t go in. The whistle blew. I stood at center court, the whole class\'s stares piercing like needles.\n\nBut this time, I didn\'t hide in the bathroom crying. I walked to the opposing captain and extended my hand: "Good game." Then turned to my teammates: "Next time."\n\nWalking home, the sunset stretched my shadow long. Remembering myself crying in the bathroom two years ago, I couldn\'t help smiling. From fearing failure to accepting it to being grateful for it—this journey took me three years.\n\nIn my heart, failure is the best teacher. It isn\'t gentle or polite; it never says "you\'re doing great already." It just pushes you down again and again, then waits quietly—waits for you to stand up yourself, waits for you to stand steadier than last time.\n\nIn the soil of every fall, a seed called "growth" lies hidden.',
          highlights: [
            { text: '它只是一遍一遍地把你推倒，然后安静地等', textEn: 'It just pushes you down again and again, then waits quietly', why: '将失败拟人化，赋予教育者形象', whyEn: 'Failure personified as the sternest teacher — one who never lectures, only tests and waits' },
            { text: '打得好。下次再来', textEn: 'Good game. Next time.', why: '简短六字展现心理成长的飞跃', whyEn: 'Six characters spanning two years of growth — from bathroom tears to a handshake' }
          ],
          sections: [
            { type: '第一层', fn: '害怕', fnEn: 'Fear', detail: '演讲忘词', detailEn: 'Forgetting speech' },
            { type: '第二层', fn: '接受', fnEn: 'Acceptance', detail: '竞赛落败', detailEn: 'Competition elimination' },
            { type: '第三层', fn: '感谢', fnEn: 'Gratitude', detail: '赛场坦然', detailEn: 'Court composure' },
            { type: '升华', fn: '领悟', fnEn: 'Insight', detail: '失败是老师', detailEn: 'Failure is the teacher' }
          ]
        },
        {
          title: '在我心里，沉默是最深的理解', titleEn: 'In My Heart, Silence Is the Deepest Understanding',
          score: 46, maxScore: 50,
          structure: 'zongFenZong',
          techniques: ['duiBi','xinLiMiaoXie','yiWuShuQing'],
          techniqueMarks: [
            { para: 0, text: '他是全班话最少的人。可在我心里，他的沉默比任何话都温暖', technique: '开篇悖论', techniqueEn: 'Opening Paradox', effect: '话最少=最温暖——矛盾制造好奇', effectEn: 'The quietest person gives the warmest comfort — a paradox that demands explanation' },
            { para: 1, text: '我的世界像被人按下了静音键', technique: '比喻（静音键）', techniqueEn: 'Mute Button Metaphor', effect: '静音键比喻——世界的声音和意义同时消失', effectEn: 'Life on mute — not just silence but the disappearance of meaning itself' },
            { para: 2, text: '那些话像隔着一层玻璃飘过来，好听，但碰不到我', technique: '玻璃比喻', techniqueEn: 'Glass Wall Metaphor', effect: '安慰的话隔着玻璃——好听但到不了心里', effectEn: 'Kind words floating through glass — audible but unable to touch the wound' },
            { para: 3, text: '不说话，就走在我旁边，保持半步的距离', technique: '空间叙事', techniqueEn: 'Spatial Narration', effect: '"半步"的距离——不远不近，完美的陪伴尺度', effectEn: 'Half a step apart — the precise geometry of companionship that respects without abandoning' },
            { para: 3, text: '我走得快他就走快，我停下来他也停下来', technique: '镜像动作', techniqueEn: 'Mirrored Action', effect: '同步行走——不是引导不是跟随，是默契', effectEn: 'Matching pace without speaking — not leading, not following, just being in sync' },
            { para: 4, text: '没有递纸巾，没有拍我肩膀，没有说"别哭了"', technique: '三重否定', techniqueEn: 'Triple Negation', effect: '三个"没有"——列举了所有常规安慰方式然后全部否定', effectEn: 'No tissue, no shoulder-pat, no "don\'t cry" — listing every expected comfort only to reject them all' },
            { para: 4, text: '看着操场对面那棵光秃秃的树，安安静静地等', technique: '等待（极致的尊重）', techniqueEn: 'Quiet Waiting', effect: '不催不问不安慰——等是最高级的理解', effectEn: 'No rush, no question, no consolation — simply waiting is the highest form of understanding' },
            { para: 5, text: '他从口袋里掏出一颗糖——草莓味的', technique: '物件传情', techniqueEn: 'Object as Emotion', effect: '一颗草莓糖——全文最轻的动作承载最重的情感', effectEn: 'One strawberry candy — the lightest gesture carrying the heaviest love in the entire essay' },
            { para: 6, text: '每天都是。"万一他哪天需要呢"', technique: '揭示（迟到的真相）', techniqueEn: 'Delayed Revelation', effect: '每天揣一颗糖+一句话——友情的全部重量', effectEn: 'A candy in the pocket every single day, just in case — the entire weight of friendship in one habit' },
            { para: 7, text: '安安静静、不远不近、不多不少——而这，就够了', technique: '排比收束', techniqueEn: 'Parallel Closure', effect: '三组对称词——把沉默的陪伴定义得完美', effectEn: 'Quiet, neither too close nor too far, neither too much nor too little — the geometry of perfect companionship' }
          ],
          approach: '写与好友之间不需要言语的默契——在低谷时朋友不说安慰的话、只是默默陪伴，展现沉默中的深刻理解。',
          approachEn: 'Writing about wordless understanding between best friends—in low times, a friend offers no comforting words, just silent companionship, showing profound understanding in silence.',
          architecture: '总起：最好的朋友不多话→分：我的困境→朋友的沉默陪伴→一个无言的动作→总结：沉默是深懂之后的尊重',
          architectureEn: 'Opening: best friends aren\'t talkative → Detail: my predicament → friend\'s silent company → a wordless gesture → Conclusion: silence is respect born of deep understanding',
          logic: '以一段低谷期为背景，对比他人的言语安慰与好友的沉默陪伴，突出后者的力量。',
          logicEn: 'Against a low period, contrasting others\' verbal comfort with best friend\'s silent presence, highlighting the latter\'s power.',
          skills: ['对比手法精妙', '留白增添意蕴', '主题新颖深刻'],
          skillsEn: ['Masterful contrast technique', 'Blank space adds meaning', 'Novel and deep theme'],
          fullText: '我最好的朋友叫阿哲。他是全班话最少的人。可在我心里，他的沉默比任何话都温暖。\n\n初三那年冬天，我家出了点事。具体的不想细说，总之那段时间我的世界像被人按下了静音键——上课听不进去，下课不想说话，放学就一个人绕着操场走。\n\n身边的人都在安慰我。\n\n\u201c别难过了，一切都会好的。\u201d\u201c坚强一点，你可以的。\u201d\u201c有什么需要帮忙的随时说。\u201d——每一句都是好意，可每一句都让我觉得更累。因为他们不知道我在经历什么，那些话像隔着一层玻璃飘过来，好听，但碰不到我。\n\n只有阿哲，什么都没说。\n\n那段日子，他每天放学后会出现在操场上。不说话，就走在我旁边，保持半步的距离。我走得快他就走快，我停下来他也停下来。有时候走完十圈，我们一句话都没有说过。只有脚步声，和冬天的风。\n\n有一天走到第三圈的时候，我突然蹲下来，眼泪止不住地流。他也蹲下来，没有递纸巾，没有拍我肩膀，没有说\u201c别哭了\u201d。他只是蹲在我旁边，看着操场对面那棵光秃秃的树，安安静静地等。\n\n等了多久我不知道。也许五分钟，也许二十分钟。我哭完了，用袖子擦了擦脸，站起来。他也站起来。\n\n然后他做了一件事。他从口袋里掏出一颗糖——草莓味的，我从小就喜欢的那种——放在我手心里。没有解释，没有\u201c吃颗糖心情会好点\u201d之类的话。放完就继续往前走了。\n\n那颗糖在我手心里化了很久，因为我一直攥着没舍得吃。\n\n后来我才知道，那段时间阿哲每天出门前都会往口袋里揣一颗草莓糖。每天都是。\u201c万一他哪天需要呢\u201d——这是他后来被我追问时说的唯一一句话。\n\n在我心里，沉默是最深的理解。因为真正懂你的人，不会急着用话语填满你的伤口。他知道，有些痛不需要被说出来，有些陪伴不需要声音。他只是在那里——安安静静、不远不近、不多不少——而这，就够了。',
          fullTextEn: 'My best friend is Ah Zhe. He\'s the quietest person in class. But in my heart, his silence is warmer than any words.\n\nThat winter of ninth grade, something happened at home. I won\'t go into details—suffice to say, my world felt like someone hit the mute button. Couldn\'t focus in class, didn\'t want to talk during breaks, walked loops around the track alone after school.\n\nEveryone around me offered comfort.\n\n"Don\'t be sad—everything will be okay." "Be strong—you can do this." "Let me know if you need anything."—Every sentence meant well, yet each made me more exhausted. Because they didn\'t know what I was going through. Those words floated through a glass wall—pleasant to hear, but unable to reach me.\n\nOnly Ah Zhe said nothing.\n\nDuring those days, he\'d appear on the track after school every day. No words—just walking beside me, half a step apart. When I walked faster, he walked faster; when I stopped, he stopped. Sometimes we\'d complete ten laps without a single word. Just footsteps, and winter wind.\n\nOne day, on the third lap, I suddenly crouched down, tears flowing uncontrollably. He crouched too. No tissue offered, no shoulder pat, no "don\'t cry." He just squatted beside me, gazing at the bare tree across the field, quietly waiting.\n\nHow long? I don\'t know. Maybe five minutes, maybe twenty. When I finished crying, I wiped my face with my sleeve and stood up. He stood too.\n\nThen he did one thing. From his pocket, he pulled out a piece of candy—strawberry flavored, the kind I\'ve loved since childhood—and placed it in my palm. No explanation, no "eating candy might help your mood." Placed it and kept walking.\n\nThat candy stayed in my palm a long time, because I kept clutching it, not willing to eat it.\n\nLater I learned that during that entire period, Ah Zhe put a strawberry candy in his pocket every morning before leaving home. Every single day. "What if he needs one someday"—that was the only sentence he said when I later pressed him.\n\nIn my heart, silence is the deepest understanding. Because someone who truly knows you won\'t rush to fill your wounds with words. They know some pain doesn\'t need to be spoken, and some companionship needs no sound. They\'re simply there—quiet, neither too close nor too far, neither too much nor too little—and that is enough.',
          highlights: [
            { text: '万一他哪天需要呢', textEn: 'What if he needs one someday', why: '全文最短最质朴的一句话，却是最深的友情', whyEn: 'Seven plain syllables carrying a month of daily devotion — friendship distilled to its essence' },
            { text: '那些话像隔着一层玻璃飘过来，好听，但碰不到我', textEn: 'Those words floated through a glass wall — pleasant to hear, but unable to reach me', why: '比喻精准表达被安慰却更孤独的感受', whyEn: 'The loneliness of being comforted by people who don\'t understand — glass as the barrier of good intentions' }
          ],
          sections: [
            { type: '总起', fn: '定调', fnEn: 'Set tone', detail: '沉默的朋友', detailEn: 'The silent friend' },
            { type: '分', fn: '困境', fnEn: 'Difficulty', detail: '家里出事', detailEn: 'Family trouble' },
            { type: '分', fn: '对比', fnEn: 'Contrast', detail: '言语vs沉默', detailEn: 'Words vs silence' },
            { type: '分', fn: '高潮', fnEn: 'Climax', detail: '一颗草莓糖', detailEn: 'A strawberry candy' },
            { type: '总结', fn: '升华', fnEn: 'Elevation', detail: '沉默是最深的理解', detailEn: 'Silence is deepest understanding' }
          ]
        },
        {
          title: '在我心里，家乡的月亮是最圆的', titleEn: 'In My Heart, My Hometown\'s Moon Is the Roundest',
          score: 45, maxScore: 50,
          structure: 'daoXuShi',
          techniques: ['huanjingMiaoXie','duiBi','wuGanMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '月亮很亮，可被高楼切成了半个。霓虹灯闪来闪去，把月光洗得淡了', technique: '环境对比（城市月亮）', techniqueEn: 'Environmental Contrast (City Moon)', effect: '高楼切月+霓虹洗月——城市对月亮的"伤害"', effectEn: 'Buildings halve the moon, neon dilutes its glow — the city as an assault on natural beauty' },
            { para: 2, text: '芝麻、花生碾碎，拌上红糖和猪油，香得整条巷子都能闻到', technique: '嗅觉描写', techniqueEn: 'Olfactory Detail', effect: '月饼馅的香味扩散到整条巷子——味道=记忆的锚', effectEn: 'Mooncake filling fragrance reaching the whole alley — smell as the strongest anchor of memory' },
            { para: 2, text: '"馋猫！等晚上一起吃！"', technique: '对话（亲昵）', techniqueEn: 'Affectionate Dialogue', effect: '挨筷子+馋猫——奶奶的嗔怒里全是疼爱', effectEn: 'Chopstick-tap and "little cat" — scolding that is pure tenderness' },
            { para: 3, text: '比谁家的月饼大，比谁捉的萤火虫多', technique: '童趣细节', techniqueEn: 'Childhood Detail', effect: '比月饼+比萤火虫——乡村中秋的童年快乐', effectEn: 'Competing over mooncake sizes and firefly counts — childhood joy specific to rural Mid-Autumn' },
            { para: 4, text: '月亮从东山后面慢慢升起来，先是红红的，然后越升越高，变成银白色的一个大圆盘', technique: '月升过程描写', techniqueEn: 'Moonrise Progression', effect: '红→银白→大圆盘——月升的全过程像一场表演', effectEn: 'Red to silver-white to great disc — the moonrise choreographed like a celestial performance' },
            { para: 5, text: '那种亮……是柔软的、温润的、像牛奶一样的亮', technique: '通感比喻', techniqueEn: 'Synesthetic Simile', effect: '光线有质感——"牛奶一样"把视觉转化为触觉', effectEn: 'Moonlight given texture — "milky" transforms sight into touch, warmth into glow' },
            { para: 5, text: '洒在奶奶的白发上，每一根都在发光', technique: '月光人像', techniqueEn: 'Moonlit Portrait', effect: '月光+白发=发光——奶奶被月光"圣化"', effectEn: 'Moonlight on white hair, every strand glowing — grandma sanctified by the light she lives under' },
            { para: 6, text: '讲了十几年还是同一个版本，我们听了十几年也不觉得腻', technique: '重复即温暖', techniqueEn: 'Repetition as Comfort', effect: '同一个故事听十几年——重复本身就是幸福', effectEn: 'The same story for a dozen years, never tiring — repetition itself is the definition of home' },
            { para: 7, text: '奶奶走了两年了……家乡的院子锁了门，月饼是超市买的，萤火虫再也看不到了', technique: '失去清单', techniqueEn: 'Inventory of Loss', effect: '人走了、门锁了、月饼变了、萤火虫没了——四重失去', effectEn: 'Grandma gone, yard padlocked, mooncakes mass-produced, fireflies vanished — four losses in one paragraph' },
            { para: 9, text: '有我最想念的人，最回不去的时光，和一块永远吃不够的手工月饼', technique: '三重排比收束', techniqueEn: 'Triple Parallel Closing', effect: '人→时光→月饼——从抽象到具体，乡愁有了形状和味道', effectEn: 'People, time, mooncake — abstract longing given shape and taste in three parallel strokes' }
          ],
          approach: '倒叙开头，从城市的中秋夜看月亮写起，回忆家乡的中秋——奶奶做月饼、全家院子里赏月、稻田里的虫鸣——展现乡愁。',
          approachEn: 'Reverse chronology from watching the moon on Mid-Autumn night in the city, recalling hometown celebrations—grandma making mooncakes, family moon-gazing in the yard, cricket songs in rice paddies—expressing homesickness.',
          architecture: '倒叙：城市的中秋月→回忆：家乡的中秋→感官沉浸：味道/声音/画面→回到现在：月亮还是那个月亮→结尾：家乡的月最圆',
          architectureEn: 'Flashback: city Mid-Autumn moon → Memory: hometown celebrations → Sensory immersion: taste/sound/scene → Return: same moon → Ending: hometown moon is roundest',
          logic: '以两地中秋的对比为框架，通过五感描写唤起乡愁，传达\u201c月是故乡明\u201d的主题。',
          logicEn: 'Two-place Mid-Autumn contrast as framework, sensory descriptions evoking homesickness, conveying "the moon shines brightest at home."',
          skills: ['对比构思巧妙', '五感调动充分', '文化意象丰富'],
          skillsEn: ['Clever contrast construction', 'Full sensory engagement', 'Rich cultural imagery'],
          fullText: '中秋节的晚上，我站在城市的阳台上看月亮。月亮很亮，可被高楼切成了半个。霓虹灯闪来闪去，把月光洗得淡了。我盯着那半个月亮看了很久，心里想：家乡的月亮，一定是圆的。\n\n在家乡，中秋节从早上就开始了。\n\n奶奶天不亮就起来和面。月饼馅儿是自己调的——芝麻、花生碾碎，拌上红糖和猪油，香得整条巷子都能闻到。她把面团搓成圆球，按进木头月饼模子里，用力一磕，一个圆滚滚、花纹清晰的月饼就出来了。小时候我总是等不及烤熟，趁奶奶不注意偷一块生的尝，被逮到就挨一筷子打手背：\u201c馋猫！等晚上一起吃！\u201d\n\n白天大人们在厨房忙活，杀鸡、炖鱼、炒一桌子菜。小孩子满村子疯跑，比谁家的月饼大，比谁捉的萤火虫多。太阳落山的时候，空气里全是饭菜的香味和稻谷成熟的甜味。\n\n晚饭后，一家人搬着小板凳坐在院子里。桌上摆着月饼、石榴、柚子和一壶老爸泡的茶。月亮从东山后面慢慢升起来，先是红红的，然后越升越高，变成银白色的一个大圆盘，把整个院子照得亮堂堂的。\n\n那种亮，不是城市路灯的亮，是柔软的、温润的、像牛奶一样的亮。月光洒在稻田里，稻穗低着头，像是在鞠躬；洒在小河上，水面碎成一片银鳞；洒在奶奶的白发上，每一根都在发光。\n\n蛐蛐在墙角叫，蛙声从稻田那边传过来，此起彼伏。爸爸讲嫦娥奔月的故事，讲了十几年还是同一个版本，我们听了十几年也不觉得腻。奶奶摇着蒲扇，偶尔插一句：\u201c月亮里面住的是兔子，不是嫦娥。\u201d一家人就笑了。\n\n可是现在，奶奶走了两年了，爸爸在外地打工，我在城里上学。家乡的院子锁了门，月饼是超市买的，萤火虫再也看不到了。\n\n城市的月亮挂在高楼之间，冷冷清清的。可我知道，此刻同样的月亮也挂在家乡的天上——挂在稻田上方，挂在老院子的屋顶，挂在奶奶坟前的那棵柏树上。\n\n在我心里，家乡的月亮永远是最圆的。不是因为它真的比城里的圆，而是因为那个月亮下面，有我最想念的人，最回不去的时光，和一块永远吃不够的手工月饼。',
          fullTextEn: 'On Mid-Autumn evening, I stand on the city balcony watching the moon. It\'s bright, but buildings cut it in half. Neon lights flash, washing the moonlight pale. I stare at that half moon for a long time, thinking: my hometown\'s moon must be round.\n\nAt home, Mid-Autumn begins in the morning.\n\nGrandma rises before dawn to knead dough. The filling is homemade—sesame and peanuts ground fine, mixed with brown sugar and lard, fragrant enough for the whole alley to smell. She rolls dough into balls, presses them into wooden molds, gives a firm tap, and out comes a plump mooncake with crisp patterns. As a child, I\'d always sneak a raw one before baking—caught, I\'d get chopsticks on my hand: "Little cat! Wait for tonight!"\n\nDaytime, adults bustle in the kitchen—killing a chicken, stewing fish, frying a tableful of dishes. Children run wild through the village, competing whose mooncakes are biggest, who caught more fireflies. At sunset, the air is all dinner fragrance and the sweetness of ripening rice.\n\nAfter dinner, the family carries small stools into the yard. Table set with mooncakes, pomegranates, pomelos, and a pot of Dad\'s tea. The moon rises slowly behind the eastern hill—first red, then climbing higher, turning into a silver-white disc that lights the entire yard.\n\nThat brightness isn\'t like city streetlights. It\'s soft, gentle, milky. Moonlight falls on rice paddies—grain heads bowing as if in greeting; falls on the creek—surface shattering into silver scales; falls on Grandma\'s white hair—every strand glowing.\n\nCrickets chirp by the wall; frog songs rise from the paddies in waves. Dad tells the Chang\'e story—the same version for a dozen years, and we\'ve listened a dozen years without tiring. Grandma waves her palm fan, occasionally interjecting: "It\'s a rabbit living in the moon, not Chang\'e." The family laughs.\n\nBut now, Grandma has been gone two years. Dad works far away. I study in the city. The hometown yard is padlocked; mooncakes come from supermarkets; fireflies have vanished.\n\nThe city moon hangs between skyscrapers, lonely and cold. But I know the same moon hangs over my hometown right now—above the rice paddies, over the old yard\'s roof, over the cypress tree by Grandma\'s grave.\n\nIn my heart, my hometown\'s moon is forever the roundest. Not because it\'s literally rounder than the city\'s, but because beneath that moon are the people I miss most, the time I can never return to, and a handmade mooncake I can never eat enough of.',
          highlights: [
            { text: '那种亮，不是城市路灯的亮，是柔软的、温润的、像牛奶一样的亮', textEn: 'Not the brightness of city streetlights — soft, gentle, milky', why: '通感比喻将月光质感化', whyEn: 'Light you can almost feel on your skin — synesthesia turning vision into warmth' },
            { text: '有我最想念的人，最回不去的时光，和一块永远吃不够的手工月饼', textEn: 'The people I miss most, the time I can never return to, and a handmade mooncake I can never eat enough of', why: '三个排比，从人到时间到物，层层递进', whyEn: 'People, time, mooncake — homesickness given form through three parallel descending scales' }
          ],
          sections: [
            { type: '倒叙', fn: '城市', fnEn: 'City', detail: '半个月亮', detailEn: 'Half a moon' },
            { type: '回忆', fn: '家乡', fnEn: 'Hometown', detail: '中秋的热闹', detailEn: 'Mid-Autumn bustle' },
            { type: '沉浸', fn: '五感', fnEn: 'Senses', detail: '月光与蛙声', detailEn: 'Moonlight and frog songs' },
            { type: '对比', fn: '失去', fnEn: 'Loss', detail: '物是人非', detailEn: 'Things remain, people change' },
            { type: '回归', fn: '点题', fnEn: 'Theme', detail: '最圆的月亮', detailEn: 'The roundest moon' }
          ]
        }
      ]
    },
    {
      id: 'yn2007_comp1',
      paperId: 'yn2007',
      year: 2007,
      region: '云南省',
      prompt: '请以"我开心地笑了"为题，写一篇文章。要求：立意自定，文体自选（诗歌除外）；说真话，抒真情，忌抄袭；文中不要使用真实的地名、校名、人名；书写工整，不少于600字。',
      promptEn: 'Write an essay titled "I Smiled Happily". Requirements: choose your own theme and genre (except poetry); be sincere and authentic; do not use real names; at least 600 words.',
      type: 'narrative',
      category: '记叙文',
      categoryEn: 'Narrative',
      wordCount: 600,
      guide: {
        analysis: '"我开心地笑了"看似简单，但关键在于写出"笑"的深层原因。不是简单的快乐，而是经历了某种困难、挫折、误解之后的释然和幸福。要写出从"不开心"到"开心地笑"的转变过程。',
        analysisEn: 'The title seems simple, but the key is showing the deeper reason for the smile. Not mere happiness, but relief and joy after difficulty, setback, or misunderstanding. Show the transformation from "unhappy" to "smiling happily."',
        keyPoints: ['先抑后扬，铺垫充分', '笑的原因要有深度', '展现情感转变过程', '结尾的笑要发自内心'],
        keyPointsEn: ['Build tension before release', 'Depth in the reason for smiling', 'Show emotional transformation', 'The final smile must be heartfelt'],
        pitfalls: ['全文快乐无起伏', '笑的原因太浅（如得到礼物）', '缺乏转折和铺垫'],
        pitfallsEn: ['All happy, no tension', 'Shallow reason for smiling', 'Lacking turning points and setup']
      },
      essays: [
        {
          title: '我开心地笑了', titleEn: 'I Smiled Happily',
          score: 47, maxScore: 50,
          structure: 'qiChengZhuanHe',
          techniques: ['xinLiMiaoXie','duiBi','xiJieMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '不是因为自己，而是因为她', technique: '悬念引入', techniqueEn: 'Suspense Hook', effect: '开头就点明笑的原因不是自己——引发好奇', effectEn: 'The smile is not for myself but for her — immediately raises the question: who?' },
            { para: 1, text: '下课了别人三五成群，她趴在桌上假装睡觉', technique: '对比（群体vs个体）', techniqueEn: 'Group vs. Individual Contrast', effect: '"三五成群"vs"假装睡觉"——孤立的画面一目了然', effectEn: 'Clusters of classmates versus one girl pretending to sleep — isolation visible in a single frame' },
            { para: 1, text: '她端着餐盘找不到位置，最后坐在门口的台阶上吃', technique: '细节（孤立的极致）', techniqueEn: 'Detail (Isolation at its Extreme)', effect: '在台阶上吃饭——空间的排斥感比任何语言都强', effectEn: 'Eating on the doorstep with a tray — spatial exclusion more eloquent than any description of loneliness' },
            { para: 2, text: '所有人都找到了搭档，只有她站在原地，手里攥着球拍，眼睛看着地面', technique: '定格画面', techniqueEn: 'Freeze-frame', effect: '攥着球拍+看着地面——静态画面凝固了她的无助', effectEn: 'Clutching a racket, eyes on the ground — a still image freezing helplessness in place' },
            { para: 3, text: '眼神里有惊讶，有感激，还有一丝小心翼翼的防备', technique: '心理层次', techniqueEn: 'Layered Psychology', effect: '三种情绪并存——被伤害过的孩子的复杂反应', effectEn: 'Surprise, gratitude, and guarded wariness in one glance — the complexity of a wounded child\'s trust' },
            { para: 5, text: '很小的笑，嘴角微微翘起来，像一朵刚探出头的花', technique: '比喻（微笑如花）', techniqueEn: 'Simile (Smile as Budding Flower)', effect: '花朵比喻——脆弱、美丽、刚刚开始', effectEn: 'A smile like a flower barely peeking out — fragile, beautiful, just beginning to trust the sun' },
            { para: 6, text: '她给每个人画了一幅Q版肖像画，大家都抢着要', technique: '才华展现（转折）', techniqueEn: 'Talent Revealed (Turning Point)', effect: '从被排斥到被抢着要——画画成为她融入的桥梁', effectEn: 'From shunned to sought-after — her art becomes the bridge back into belonging' },
            { para: 7, text: '一边跑一边笑', technique: '四字高潮', techniqueEn: 'Four-character Climax', effect: '全文最凝练的情感爆发——跑步+笑=自由', effectEn: 'Running and smiling — four characters condensing the entire essay\'s emotional arc into one action' },
            { para: 8, text: '笑得像个太阳', technique: '比喻（太阳）', techniqueEn: 'Sun Simile', effect: '从"假装睡觉"到"笑得像太阳"——对比完成了人物的蜕变', effectEn: 'From pretending to sleep to shining like the sun — the character arc completed in one simile' },
            { para: 10, text: '最开心的笑，不是因为自己得到了什么，而是因为你帮助了一个人', technique: '主题升华', techniqueEn: 'Theme Elevation', effect: '点题——笑的最高境界是利他的快乐', effectEn: 'The deepest happiness comes not from receiving but from witnessing someone else bloom' }
          ],
          approach: '写帮助一个被孤立的同学重新融入班级的故事。从发现她被排挤到主动接近，最终看到她在运动会上开心奔跑时，\u201c我\u201d发自内心地笑了。',
          approachEn: 'Helping an isolated classmate reintegrate into the class. From noticing her exclusion to reaching out, finally watching her run happily at sports day—the narrator smiles from the heart.',
          architecture: '起：发现她总是一个人→承：了解原因→转：我的行动→合：她笑了，我也笑了',
          architectureEn: 'Beginning: noticing she\'s always alone → Development: learning why → Turn: my action → Resolution: she smiles, so do I',
          logic: '以\u201c她的笑\u201d引出\u201c我的笑\u201d，展现帮助他人带来的幸福感。',
          logicEn: 'Her smile leads to my smile, showing the happiness that comes from helping others.',
          skills: ['先抑后扬节奏好', '心理描写真实', '双重笑容深化主题'],
          skillsEn: ['Good tension-release rhythm', 'Authentic psychological description', 'Double smile deepens theme'],
          fullText: '我这个人不爱笑。同学们说我表情严肃得像个小老头。可那天，我真的开心地笑了——不是因为自己，而是因为她。\n\n她叫小雯，初二转学来的。她个子小小的，说话细声细气，总是一个人坐在教室最后一排的角落里。下课了别人三五成群，她趴在桌上假装睡觉。午饭时食堂里闹哄哄的，她端着餐盘找不到位置，最后坐在门口的台阶上吃。\n\n我注意到她，是因为有一次上体育课，老师让自由分组打羽毛球。所有人都找到了搭档，只有她站在原地，手里攥着球拍，眼睛看着地面。老师喊了两遍\u201c谁还没有搭档\u201d，没人回应。\n\n我走过去：\u201c我和你一组。\u201d她抬头看了我一眼，眼神里有惊讶，有感激，还有一丝小心翼翼的防备。\n\n后来我才知道，小雯转学是因为她在原来的学校被欺负。同学们嘲笑她的口音，藏她的课本，在她的桌上写难听的话。她不敢告诉老师，也不敢告诉家长，只能转学。来到新学校，她不敢跟任何人说话，怕再被欺负。\n\n我开始有意地靠近她。午饭时坐她旁边，帮她占个位置。课间聊几句，问她作业写完了没有。周末叫她一起去图书馆。起初她很拘束，问什么答什么，从不主动开口。但慢慢地，她开始在我面前笑了——很小的笑，嘴角微微翘起来，像一朵刚探出头的花。\n\n我把她介绍给我的朋友们。\u201c这是小雯，她画画特别好。\u201d小雯羞红了脸，但当同学们围过来看她的画时，她的眼睛亮了。她给每个人画了一幅Q版肖像画，大家都抢着要。\n\n转折发生在上个月的运动会。小雯报了八百米——我都不知道她会跑步。枪声一响，她冲了出去，马尾辫在风中飞舞。四百米的时候她还在前三，全班都站起来喊\u201c小雯加油！\u201d她跑过我面前的时候，我看到她的嘴角是翘着的——她在笑！一边跑一边笑！\n\n最后她拿了第四名，没有奖牌。可冲过终点线的那一刻，她被同学们团团围住，有人递水，有人搭肩膀，有人大喊\u201c你好厉害！\u201d她站在人群中间，满脸通红，大口喘着气，眼睛亮亮的，笑得像个太阳。\n\n我站在远处看着这一幕，嘴角不知道什么时候翘了起来。那是我第一次，真正开心地笑了。\n\n不是因为赢了什么，而是因为看到一个曾经蜷缩在角落里的女孩，终于敢站在人群中间笑了。那个笑容，比任何奖牌都耀眼。而我，有幸成为推了她一把的人。\n\n原来，最开心的笑，不是因为自己得到了什么，而是因为你帮助了一个人，看到她也笑了。',
          fullTextEn: 'I\'m not someone who smiles much. Classmates say my expression is as serious as a little old man. But that day, I truly smiled happily—not because of myself, but because of her.\n\nHer name was Xiao Wen, transferred in during eighth grade. Small-framed, soft-spoken, always sitting alone in the last row corner. When others clustered during breaks, she pretended to sleep on her desk. At lunch in the noisy cafeteria, she\'d carry her tray looking for a seat, finally eating on the doorstep.\n\nI noticed her because during PE, when the teacher said to form badminton pairs, everyone found partners except her. She stood alone, clutching a racket, eyes on the ground. The teacher called twice, "Who still needs a partner?" No response.\n\nI walked over: "I\'ll be your partner." She looked up—surprise in her eyes, gratitude, and a trace of careful wariness.\n\nLater I learned Xiao Wen transferred because she\'d been bullied at her old school. Classmates mocked her accent, hid her textbooks, wrote nasty things on her desk. She didn\'t dare tell teachers or parents—just transferred. At the new school, she was afraid to talk to anyone, fearing more bullying.\n\nI began deliberately approaching her. Sat beside her at lunch, saved her a seat. Chatted during breaks—asked about homework. Invited her to the library on weekends. Initially she was stiff, answering only what was asked, never speaking first. But gradually, she began smiling around me—tiny smiles, corners barely lifting, like a flower just peeking out.\n\nI introduced her to my friends. "This is Xiao Wen—she\'s an amazing artist." Xiao Wen blushed, but when classmates crowded around her drawings, her eyes lit up. She drew chibi portraits of everyone, and they all clamored for one.\n\nThe turning point was last month\'s sports meet. Xiao Wen signed up for the 800-meter—I didn\'t even know she ran. The gun fired; she burst forward, ponytail flying in the wind. At 400 meters she was still in the top three; the whole class stood shouting "Go Xiao Wen!" As she passed me, I saw her lips were curved upward—she was smiling! Running and smiling!\n\nShe finished fourth—no medal. But crossing the finish line, classmates swarmed her: someone passed water, someone threw an arm around her, someone shouted "You\'re amazing!" Standing in the center of the crowd, face flushed, gasping, eyes bright, she smiled like the sun.\n\nI watched from a distance. At some point, my own lips had curved upward. That was the first time I truly smiled happily.\n\nNot because I won anything, but because I saw a girl who once huddled in corners finally daring to stand in the center of a crowd and smile. That smile was more dazzling than any medal. And I was lucky enough to be the person who gave her a push.\n\nIt turns out the happiest smile isn\'t from getting something yourself—it\'s from helping someone and watching them smile too.',
          highlights: [
            { text: '一边跑一边笑', textEn: 'Running and smiling at the same time', why: '四个字浓缩了全文的情感爆发点', whyEn: 'Four characters condensing the entire emotional arc into one unforgettable image' },
            { text: '最开心的笑，不是因为自己得到了什么，而是因为你帮助了一个人', textEn: 'The happiest smile comes not from what you gain, but from helping someone else', why: '升华利他精神，超越自我层面', whyEn: 'The thesis: joy\'s highest form is witnessing someone you helped finally shine' }
          ],
          sections: [
            { type: '起', fn: '发现', fnEn: 'Noticing', detail: '孤立的女孩', detailEn: 'The isolated girl' },
            { type: '承', fn: '了解', fnEn: 'Understanding', detail: '她的遭遇', detailEn: 'Her story' },
            { type: '转', fn: '改变', fnEn: 'Change', detail: '融入与绽放', detailEn: 'Integration and blossoming' },
            { type: '合', fn: '双笑', fnEn: 'Double smile', detail: '她笑了我也笑了', detailEn: 'She smiles, I smile' }
          ]
        },
        {
          title: '我开心地笑了', titleEn: 'I Smiled Happily',
          score: 45, maxScore: 50,
          structure: 'diJinShi',
          techniques: ['dongZuoMiaoXie','huanjingMiaoXie','xuanNian'],
          techniqueMarks: [
            { para: 0, text: '我这辈子第一次开心地笑，是对着一碗卖相难看的番茄炒蛋', technique: '悬念开头', techniqueEn: 'Suspense Hook', effect: '"难看的番茄炒蛋"引出笑——矛盾感制造好奇', effectEn: 'An ugly plate of scrambled eggs with tomatoes triggers the happiest smile — the paradox hooks instantly' },
            { para: 1, text: '连方便面都是妈妈帮我泡的', technique: '细节铺垫', techniqueEn: 'Setup Detail', effect: '一句话定义了"我"的厨房零经验——为后面灾难做铺垫', effectEn: 'Can\'t even make instant noodles — one line establishing total helplessness, setting up the disasters ahead' },
            { para: 2, text: '面条粘成了一坨……加了盐，太咸。加了水，变成了一锅糊', technique: '动作连锁（灾难喜感）', techniqueEn: 'Chain-reaction Comedy', effect: '每个补救措施都让情况更糟——喜剧节奏精准', effectEn: 'Every fix makes it worse — salt, water, paste — comic timing that builds sympathy through laughter' },
            { para: 3, text: '妈妈喝了一口汤，沉默了三秒钟', technique: '留白（三秒）', techniqueEn: 'Three-second Silence', effect: '三秒的沉默比任何评价都有力', effectEn: 'Three seconds of silence say everything the mother\'s gentle lie will try to cover' },
            { para: 5, text: '打蛋的时候蛋壳掉进碗里……切番茄的时候刀滑了一下……油热了不知道该先放什么', technique: '三连失误', techniqueEn: 'Triple Fumble', effect: '三个失误节奏感强——手忙脚乱的画面跃然纸上', effectEn: 'Shell in bowl, knife on finger, panic at the wok — three fumbles building a vivid portrait of determination' },
            { para: 7, text: '先热油……看到蛋液膨起来赶紧翻面……番茄炒出红色的汁', technique: '步骤叙事', techniqueEn: 'Step-by-step Narration', effect: '写在纸上贴在灶台旁——按步骤做的认真感', effectEn: 'Written steps taped to the stove — following them one by one transforms chaos into careful ritual' },
            { para: 8, text: '红的红，黄的黄……它看起来……像一盘菜了', technique: '成就时刻', techniqueEn: 'Achievement Moment', effect: '破折号+省略号——连叙述者自己都不敢相信', effectEn: 'The narrator\'s own disbelief at seeing actual food — ellipsis and dash capturing the stunned pause' },
            { para: 9, text: '我围着她的碎花围裙，头发上沾着面粉，手上贴着创可贴', technique: '细节堆叠', techniqueEn: 'Detail Layering', effect: '围裙+面粉+创可贴——三个细节勾勒出新手做饭的全部狼狈和可爱', effectEn: 'Floral apron, flour in hair, Band-Aid on hand — three details composing a portrait of earnest incompetence' },
            { para: 10, text: '她的眼睛里有泪光', technique: '泪光vs沉默（对比前次）', techniqueEn: 'Tears vs. Silence (Contrast)', effect: '第一次"沉默三秒"+说谎 vs 这次"泪光"——真假立判', effectEn: 'First meal: three seconds of silence and a kind lie. This meal: tears. The contrast needs no explanation' },
            { para: 11, text: '不是考了一百分的快乐……而是"我做了一件事，让我最爱的人开心了"的快乐', technique: '对比升华', techniqueEn: 'Contrast Elevation', effect: '成绩的快乐vs为人的快乐——笑的意义从个人升华到利他', effectEn: 'Test scores versus cooking for someone you love — the smile\'s meaning elevates from achievement to devotion' }
          ],
          approach: '写学做饭的过程——从烧焦、切伤手指到终于做出一顿饭给妈妈吃，看到妈妈的表情时开心地笑了。',
          approachEn: 'Learning to cook—from burning food and cutting fingers to finally making a meal for Mom, smiling happily at Mom\'s reaction.',
          architecture: '第一层：烧焦的第一餐→第二层：手忙脚乱的进步→第三层：终于成功→升华：给别人做饭的快乐',
          architectureEn: 'Layer 1: first burned meal → Layer 2: chaotic improvement → Layer 3: final success → Elevation: the joy of cooking for others',
          logic: '以做饭的三次尝试为层次，递进展现从失败到成功、从自己到为他人的转变。',
          logicEn: 'Three cooking attempts as layers, progressing from failure to success, from self to others.',
          skills: ['层层递进节奏明快', '动作描写生动有趣', '结尾温情自然'],
          skillsEn: ['Lively progressive rhythm', 'Vivid entertaining action descriptions', 'Naturally warm ending'],
          fullText: '我这辈子第一次开心地笑，是对着一碗卖相难看的番茄炒蛋。\n\n事情要从妈妈生病说起。初二那年冬天，妈妈感冒发烧，躺在床上起不来。爸爸出差了，家里只剩我和一个空荡荡的厨房。从小到大，我的任务只有学习，连方便面都是妈妈帮我泡的。站在厨房门口，我第一次觉得锅碗瓢盆像是外星文明的产物。\n\n【第一次：灾难】\n我决定煮面条。烧水，我会。可水烧开以后呢？面条放了一大把，锅立刻被挤满了。我手忙脚乱地搅，面条粘成了一坨。加了盐，太咸。加了水，变成了一锅糊。最后端给妈妈的时候，那碗面黏糊糊、黑乎乎的，看起来像某种不明生物。\n\n妈妈喝了一口汤，沉默了三秒钟。\n\n\u201c……嗯，有点咸。但是是热的，挺好的。\u201d\n\n我知道她在说谎。\n\n【第二次：混乱】\n第二天我偷偷上网搜了\u201c最简单的菜谱\u201d。番茄炒蛋，只要三样材料。我信心满满地开始：打蛋的时候蛋壳掉进碗里，捞了五分钟；切番茄的时候刀滑了一下，在手指上划了一道口子；油热了不知道该先放什么，慌乱中把番茄和蛋同时倒了进去。\n\n结果：蛋是散的，番茄是生的，锅底还糊了一层黑的。\n\n但比第一次好了一点——至少颜色还是红黄相间的。\n\n【第三次：奇迹】\n第三天，我把步骤写在纸上，贴在灶台旁边，一步一步地做。先热油，油冒小泡泡了倒蛋液，看到蛋液膨起来赶紧翻面，盛出来放旁边。再放一点油炒番茄，番茄炒出红色的汁，加盐加糖，最后把蛋倒回去翻几下。\n\n出锅的时候，我愣住了——红的红，黄的黄，虽然蛋切得大了些、番茄块不均匀，但它看起来……像一盘菜了！\n\n我端着那盘番茄炒蛋走进妈妈的房间。她坐起来，看了一眼盘子，又看了一眼我——我围着她的碎花围裙，头发上沾着面粉，手上贴着创可贴。\n\n她夹了一口，嚼了嚼。\n\n\u201c好吃。\u201d这次，她的眼睛里有泪光。\n\n我知道这次她没有说谎。\n\n我站在床边，看着妈妈一口一口地吃完那盘番茄炒蛋，嘴角不知道什么时候翘了起来。那个笑，从嘴角蔓延到眼角，从眼角蔓延到心里。那是一种从来没有过的快乐——不是考了一百分的快乐，不是得到新书包的快乐，而是\u201c我做了一件事，让我最爱的人开心了\u201d的快乐。\n\n我开心地笑了。为一盘不完美的番茄炒蛋，为妈妈眼里的泪光，为我终于学会了一件除了学习以外的事。',
          fullTextEn: 'The first time in my life I truly smiled happily was facing a rather ugly plate of scrambled eggs with tomatoes.\n\nIt started when Mom got sick. That winter of eighth grade, she had a cold and fever, bedridden. Dad was away on business; only me and an empty kitchen. Growing up, my only job was studying—Mom even made my instant noodles. Standing at the kitchen doorway, pots and pans looked like alien artifacts.\n\n[First Try: Disaster]\nI decided to cook noodles. Boiling water—I could handle that. But then? I dumped in a huge handful; the pot overflowed immediately. I stirred frantically; noodles clumped into a blob. Added salt—too salty. Added water—turned into paste. When I brought it to Mom, the bowl was a sticky, blackish mass resembling some unidentified life form.\n\nMom sipped the broth. Three seconds of silence.\n\n"...Well, it\'s a bit salty. But it\'s hot. That\'s nice."\n\nI knew she was lying.\n\n[Second Try: Chaos]\nNext day, I secretly searched "simplest recipes." Scrambled eggs with tomatoes—only three ingredients. Confidently I began: cracking eggs, shell fell into the bowl—five minutes fishing it out; slicing tomatoes, the knife slipped, cutting my finger; oil was hot but I didn\'t know what to add first—panicking, I dumped tomatoes and eggs in together.\n\nResult: eggs scrambled, tomatoes raw, black crust on the pan bottom.\n\nBut better than the first time—at least the colors were red and yellow.\n\n[Third Try: Miracle]\nDay three, I wrote the steps on paper and taped it by the stove, following each one. Heat oil first; when tiny bubbles form, pour in the egg; when it puffs up, quickly flip; set aside. More oil, stir-fry tomatoes until red juices come out; add salt and sugar; pour eggs back in and toss.\n\nWhen I plated it, I froze—reds were red, yellows were yellow. The eggs were a bit large, tomato pieces uneven, but it looked... like actual food!\n\nI carried the plate to Mom\'s room. She sat up, glanced at the plate, then at me—wearing her floral apron, flour in my hair, Band-Aid on my hand.\n\nShe took a bite. Chewed.\n\n"Delicious." This time, tears glistened in her eyes.\n\nThis time I knew she wasn\'t lying.\n\nStanding by the bed, watching Mom eat that plate of scrambled eggs bite by bite, my lips curved up at some point. That smile spread from my lips to my eyes, from my eyes to my heart. It was a joy I\'d never felt before—not the joy of scoring 100, not the joy of getting a new backpack, but the joy of "I did something that made the person I love most happy."\n\nI smiled happily. For an imperfect plate of scrambled eggs with tomatoes, for the tears in Mom\'s eyes, for finally learning to do something besides studying.',
          highlights: [
            { text: '她的眼睛里有泪光', textEn: 'This time, tears glistened in her eyes', why: '与第一次"沉默三秒"对比，真假立判', whyEn: 'Silence and a lie the first time; tears the second — truth reveals itself without words' },
            { text: '头发上沾着面粉，手上贴着创可贴', textEn: 'Flour in my hair, Band-Aid on my hand', why: '细节堆叠出新手做饭的真实感', whyEn: 'Three details composing a portrait of earnest incompetence — the effort matters more than the result' }
          ],
          sections: [
            { type: '第一层', fn: '失败', fnEn: 'Failure', detail: '黑乎乎的面条', detailEn: 'Blackish noodles' },
            { type: '第二层', fn: '进步', fnEn: 'Progress', detail: '手忙脚乱的炒蛋', detailEn: 'Chaotic scrambled eggs' },
            { type: '第三层', fn: '成功', fnEn: 'Success', detail: '像样的一盘菜', detailEn: 'A proper dish' },
            { type: '升华', fn: '幸福', fnEn: 'Happiness', detail: '让爱的人开心', detailEn: 'Making loved ones happy' }
          ]
        },
        {
          title: '我开心地笑了', titleEn: 'I Smiled Happily',
          score: 46, maxScore: 50,
          structure: 'zongFenZong',
          techniques: ['duiBi','yiWuShuQing','xinLiMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '我已经很久没有开心地笑过了', technique: '先抑（情感基调）', techniqueEn: 'Emotional Suppression Opening', effect: '第一句就建立了压抑的基调——"久"字有力', effectEn: 'The first sentence establishes absence — "a long time" carries the weight of unresolved conflict' },
            { para: 1, text: '他拍了一下桌子……我摔门回了房间', technique: '对称动作（父子对峙）', techniqueEn: 'Mirrored Actions', effect: '拍桌子vs摔门——两个暴力动作对称，父子的固执如出一辙', effectEn: 'Table-slap and door-slam mirror each other — father and son are more alike than either admits' },
            { para: 1, text: '我听到门外他来回走了很久，但他没有敲门，我也没有开门', technique: '留白（沉默的爱）', techniqueEn: 'Silence as Subtext', effect: '门内门外——两个人都想和解但都不开口', effectEn: 'Pacing outside a closed door — love that cannot speak, on both sides of the barrier' },
            { para: 2, text: '电视遥控器放在茶几中间谁也不去拿', technique: '物件象征', techniqueEn: 'Object Symbolism', effect: '遥控器=中间地带，谁也不跨越——冷战的具象化', effectEn: 'The untouched remote in no-man\'s-land — the cold war made tangible in one household object' },
            { para: 4, text: '一个穿着灰色夹克的中年男人站在铁栏杆外面，踮着脚往操场里张望', technique: '发现场景', techniqueEn: 'Discovery Scene', effect: '灰夹克+踮脚+铁栏杆——细节堆叠出父爱的笨拙与深沉', effectEn: 'Gray jacket, tiptoe, iron fence — three details painting a father\'s clumsy, wordless devotion' },
            { para: 5, text: '他的鼻尖冻得发红，嘴里呼出白色的雾气', technique: '细节描写（寒冷中的守候）', techniqueEn: 'Cold-weather Detail', effect: '红鼻尖+白雾气——寒冷中的坚持让不言的爱可见', effectEn: 'Red nose-tip, white breath — the cold makes invisible devotion visible' },
            { para: 6, text: '每天早上都来，看完你们跑操就走。来了少说有一个月了', technique: '旁人揭示', techniqueEn: 'Third-party Revelation', effect: '门卫大爷不经意的话——信息量巨大，情感冲击突然', effectEn: 'The guard\'s casual remark delivers a month of hidden love in one sentence — devastating' },
            { para: 7, text: '零下五度的早晨，他站在校门外的风里，就为了看我跑四圈操', technique: '数字强化', techniqueEn: 'Numerical Emphasis', effect: '零下五度+四圈——用数字量化父爱的重量', effectEn: 'Minus five degrees, four laps — numbers measuring the weight of what words could not carry' },
            { para: 8, text: '拿起茶几上的遥控器，换了一个他喜欢看的频道', technique: '物件回响（和解）', techniqueEn: 'Object Callback (Reconciliation)', effect: '之前谁也不碰的遥控器，现在主动拿起——无声的和解', effectEn: 'The remote nobody touched now picked up and tuned to Dad\'s channel — reconciliation without words' },
            { para: 9, text: '两个不善表达的人，在一个冬天的晚上，用两个很小的笑完成了和解', technique: '极简结尾', techniqueEn: 'Minimalist Resolution', effect: '不善表达+很小的笑——越克制越有力', effectEn: 'Two people bad with words, two tiny smiles, one winter evening — restraint amplifying emotion' }
          ],
          approach: '写与父亲的和解——因叛逆期的冲突渐行渐远，直到看到父亲偷偷来学校看自己跑操的背影，一切冰释。',
          approachEn: 'Reconciliation with father—growing apart due to rebellious-age conflicts, until seeing Dad secretly watching school exercises, thawing all ice.',
          architecture: '总起：很久没有开心地笑过了→分：与父亲的冲突→冷战→偶然发现→总结：那个笑，是和解的开始',
          architectureEn: 'Opening: haven\'t smiled happily in a long time → Detail: conflict with Dad → cold war → accidental discovery → Conclusion: that smile was the beginning of reconciliation',
          logic: '以父子冷战为背景，一个偶然发现打破僵局，\u201c笑\u201d成为和解的象征。',
          logicEn: 'Father-son cold war as background; an accidental discovery breaks the deadlock; the "smile" becomes a symbol of reconciliation.',
          skills: ['情感节制更有力', '发现场景设计巧妙', '笑的含义多层次'],
          skillsEn: ['Emotional restraint adds power', 'Clever discovery scene design', 'Multi-layered meaning of the smile'],
          fullText: '我已经很久没有开心地笑过了。准确地说，是从和爸爸吵完那一架之后。\n\n那是三个月前的事。期中考试我没考好，爸爸看到成绩单，二话不说把我的篮球没收了。我急了：\u201c打篮球和成绩有什么关系！\u201d他拍了一下桌子：\u201c有时间打球没时间学习，怎么没关系！\u201d我摔门回了房间。那天晚上，我听到门外他来回走了很久，但他没有敲门，我也没有开门。\n\n从那以后，我们进入了冷战。住在同一个屋檐下，却像两个陌生人。吃饭时他坐北边我坐南边，电视遥控器放在茶几中间谁也不去拿。我和妈妈说话，他和妈妈说话，我们不直接对话。妈妈夹在中间，叹了无数次气。\n\n改变发生在一个早上。\n\n每天早上学校要跑操，全体学生绕操场跑四圈。那天跑到第三圈的时候，我无意间往校门口看了一眼——一个穿着灰色夹克的中年男人站在铁栏杆外面，踮着脚往操场里张望。\n\n是爸爸。\n\n他没有发现我在看他。他的手插在口袋里，领子竖起来挡风。初冬的早晨很冷，他的鼻尖冻得发红，嘴里呼出白色的雾气。他的目光一直跟着跑操的队伍移动，在人群中搜寻着什么——搜寻着我。\n\n我的脚步乱了一拍。\n\n跑完操回教室的路上，我偷偷回头看了一眼。他已经转身走了，灰色的背影在冬天的晨雾里越来越小。后来我问了门卫大爷：\u201c是不是经常有个穿灰夹克的中年人在校门口？\u201d大爷说：\u201c哦，那个人啊，每天早上都来，看完你们跑操就走。来了少说有一个月了。\u201d\n\n一个月。\n\n也就是说，从我们吵架后的第二周，他就开始每天来看我了。零下五度的早晨，他站在校门外的风里，就为了看我跑四圈操。\n\n那天晚上回到家，我看到他坐在沙发上看电视。我鬼使神差地走过去，在他旁边坐下来，拿起茶几上的遥控器，换了一个他喜欢看的频道。\n\n他愣了一下，转头看了我一眼。\n\n我没说话。他也没说话。但那一刻，三个月的冰川在沉默中裂开了。\n\n然后，我开心地笑了。很小很小的一个笑，嘴角弯了一下就收回来了。但我知道他看到了——因为他也笑了。也是很小很小的一个笑。\n\n两个不善表达的人，在一个冬天的晚上，用两个很小的笑完成了和解。\n\n那个笑，是我这辈子最开心的一次。',
          fullTextEn: 'I hadn\'t smiled happily for a long time. To be precise, not since the fight with Dad.\n\nThree months ago. After I did poorly on midterms, Dad saw the report card and confiscated my basketball without a word. I exploded: "What does basketball have to do with grades!" He slammed the table: "Time for basketball but no time for studying—how is that unrelated!" I slammed my door. That night, I heard him pacing outside for a long time, but he didn\'t knock, and I didn\'t open.\n\nAfter that, we entered a cold war. Living under the same roof like two strangers. Meals—he sat north, I sat south. The TV remote stayed on the coffee table; neither touched it. I talked to Mom, he talked to Mom, we never spoke directly. Mom was caught in the middle, sighing endlessly.\n\nThe change came one morning.\n\nEvery morning, school required running exercises—four laps around the track. On the third lap that day, I glanced toward the school gate—a middle-aged man in a gray jacket stood outside the iron fence, standing on tiptoe, peering toward the track.\n\nIt was Dad.\n\nHe hadn\'t noticed me looking. Hands in pockets, collar turned up against the wind. The early winter morning was cold; his nose tip was red, white breath puffing from his mouth. His gaze followed the running formation, searching the crowd for something—for me.\n\nMy stride stumbled.\n\nWalking back to class after exercises, I sneaked a backward glance. He\'d already turned to leave, gray silhouette shrinking in the morning mist. Later I asked the gate guard: "Does a middle-aged man in a gray jacket often stand at the gate?" The guard said: "Oh, him—he comes every morning, watches you run, then leaves. Been coming for at least a month."\n\nA month.\n\nMeaning two weeks after our fight, he\'d started coming to watch me every day. On minus-five-degree mornings, standing in the wind outside the gate, just to watch me run four laps.\n\nThat evening at home, I saw him on the sofa watching TV. Something possessed me to walk over and sit beside him. I picked up the remote from the coffee table and switched to a channel he liked.\n\nHe froze. Turned to look at me.\n\nI didn\'t speak. He didn\'t speak. But in that moment, three months of glacier cracked open in the silence.\n\nThen I smiled happily. The tiniest smile—lips curved once and retreated. But I knew he saw it—because he smiled too. Also the tiniest smile.\n\nTwo people who aren\'t good with words, on a winter evening, completed a reconciliation with two tiny smiles.\n\nThat smile was the happiest of my entire life.',
          highlights: [
            { text: '来了少说有一个月了', textEn: 'He\'s been coming for at least a month', why: '门卫大爷不经意的一句话，信息量巨大', whyEn: 'A gatekeeper\'s throwaway line delivering a month of secret devotion — the essay\'s emotional earthquake' },
            { text: '两个不善表达的人，用两个很小的笑完成了和解', textEn: 'Two people bad with words completed a reconciliation with two tiny smiles', why: '极简描写极深感情', whyEn: 'Minimalist prose carrying maximal emotion — the quietest resolution in the collection' }
          ],
          sections: [
            { type: '总起', fn: '铺垫', fnEn: 'Setup', detail: '很久没笑了', detailEn: 'Haven\'t smiled in a long time' },
            { type: '分', fn: '冲突', fnEn: 'Conflict', detail: '父子冷战', detailEn: 'Father-son cold war' },
            { type: '分', fn: '发现', fnEn: 'Discovery', detail: '校门口的背影', detailEn: 'The figure at the school gate' },
            { type: '分', fn: '破冰', fnEn: 'Ice-breaking', detail: '遥控器与频道', detailEn: 'Remote control and channel' },
            { type: '总结', fn: '和解', fnEn: 'Reconciliation', detail: '两个小小的笑', detailEn: 'Two tiny smiles' }
          ]
        },
        {
          title: '我开心地笑了', titleEn: 'I Smiled Happily',
          score: 44, maxScore: 50,
          structure: 'pianDuanZuHe',
          techniques: ['huanjingMiaoXie','xiJieMiaoXie','duiHuaMiaoXie'],
          techniqueMarks: [
            { para: 1, text: '台灯下堆着小山一样的试卷', technique: '比喻（压力具象化）', techniqueEn: 'Metaphor (Pressure Visualized)', effect: '试卷如山——备考压力的直观画面', effectEn: 'Papers piled mountain-high under a desk lamp — exam pressure made tangible in one image' },
            { para: 1, text: '嘴角带笑，眼睛里却是空的', technique: '苦笑的定义', techniqueEn: 'Defining the Bitter Smile', effect: '嘴角vs眼睛——身体在笑心不在', effectEn: 'Lips curved up, eyes hollow — the body smiles while the soul has checked out' },
            { para: 3, text: '笑容立刻从脸上褪去，像卸妆一样干净利落', technique: '比喻（假笑如妆）', techniqueEn: 'Simile (Smile as Makeup)', effect: '卸妆比喻——假笑是表演，关门后真面目', effectEn: 'A smile wiped off like makeup — the private face behind the public performance' },
            { para: 3, text: '压力像一块大石头堵在胸口，笑不动了', technique: '身体感受', techniqueEn: 'Physical Sensation', effect: '石头堵胸——压力从心理转化为身体体验', effectEn: 'Pressure as a boulder on the chest — emotional weight given physical mass' },
            { para: 4, text: '六月的阳光晃得人睁不开眼', technique: '环境转换', techniqueEn: 'Environmental Shift', effect: '从深夜台灯到六月阳光——光线的对比暗示心境的转变', effectEn: 'From 1 AM desk lamp to June sunlight — the light shift mirrors the emotional release' },
            { para: 4, text: '不是因为考得好或不好，是因为突然觉得：结束了', technique: '心理顿悟', techniqueEn: 'Psychological Epiphany', effect: '笑的原因不是成绩而是"结束"——意外而真实', effectEn: 'The smile comes not from results but from ending — unexpectedly authentic' },
            { para: 5, text: '这半年来，我的眼睛里只有试卷和课本，路边的花开了又谢了，我一次也没有看过', technique: '对比（失去与重获）', techniqueEn: 'Contrast (Lost and Found)', effect: '半年的视觉剥夺——花开花谢都错过了', effectEn: 'Half a year of tunnel vision — flowers bloomed and wilted unseen, measuring the cost of exam obsession' },
            { para: 6, text: '空气里有栀子花的甜、有阳光晒过的草坪的味道', technique: '五感描写', techniqueEn: 'Five-sense Description', effect: '嗅觉（栀子花）+触觉（阳光暖）+听觉（蝉鸣）——感官的全面回归', effectEn: 'Gardenia sweetness, sun-warmed grass, cicada chorus — all five senses flooding back at once' },
            { para: 7, text: '我终于又看到花了。我终于又有时间抬头看天了', technique: '排比（简单即深刻）', techniqueEn: 'Parallelism (Simple as Profound)', effect: '三个"终于又"——被剥夺的日常变成了最珍贵的事', effectEn: 'Three "finally again" statements — the most ordinary freedoms become the most precious recoveries' },
            { para: 8, text: '从心底涌上来的，像花开一样自然的笑', technique: '收束比喻', techniqueEn: 'Closing Simile', effect: '笑如花开——照应月季花坛的意象，首尾圆合', effectEn: 'A smile blooming like a flower — echoing the roses that triggered it, the essay comes full circle' }
          ],
          approach: '以\u201c三个笑\u201d为结构——苦笑、假笑、真笑——展现中考备考期间的心路历程，最终在考场外看到花开时真正开心地笑了。',
          approachEn: 'Three smiles as structure—bitter smile, fake smile, real smile—showing the emotional journey during exam prep, finally smiling genuinely at flowers blooming outside the exam hall.',
          architecture: '片段一：苦笑——深夜刷题的疲惫→片段二：假笑——安慰父母的伪装→片段三：真笑——考场外的花开→结尾：笑有很多种，最珍贵的是那种',
          architectureEn: 'Fragment 1: bitter smile—late-night study fatigue → Fragment 2: fake smile—pretending for parents → Fragment 3: real smile—flowers outside exam hall → Ending: many kinds of smiles, the most precious is that one',
          logic: '以三种笑的对比为结构，层层剥开伪装，最终回归最本真的快乐。',
          logicEn: 'Three contrasting smiles as structure, peeling away masks layer by layer, returning to the most genuine happiness.',
          skills: ['三段式对比鲜明', '真假笑对照深刻', '结尾意象清新'],
          skillsEn: ['Sharp three-part contrast', 'Deep true-vs-fake smile juxtaposition', 'Fresh concluding imagery'],
          fullText: '初三这一年，我笑过很多次。但真正开心地笑，只有一次。\n\n【苦笑】\n凌晨一点，台灯下堆着小山一样的试卷。我做完最后一道数学题，伸了个懒腰，骨头咔嚓响。揉揉酸涩的眼睛，看了一眼镜子——眼圈是黑的，脸是黄的，嘴唇干裂。我对着镜子扯了扯嘴角，那不是笑，是肌肉的痉挛。\n\n每天都是这样。六点起床，十二点睡觉。课间十分钟在刷题，午休时间在背书，连上厕所都带着一张小纸条背单词。同学们互相打气：\u201c加油，还有三个月！\u201d我也跟着喊\u201c加油\u201d，嘴角带笑，眼睛里却是空的。\n\n那是苦笑。身体在笑，心不在。\n\n【假笑】\n周末回家，妈妈做了一桌子好菜。\u201c考得怎么样？\u201d我说：\u201c还行。\u201d其实那次模考退了十五名。爸爸看我的眼神带着小心翼翼的期待，像在看一个随时可能碎掉的瓷器。我咧开嘴笑了笑：\u201c放心吧，没问题的。\u201d\n\n回到房间关上门，笑容立刻从脸上褪去，像卸妆一样干净利落。我趴在床上，盯着天花板发呆。压力像一块大石头堵在胸口，笑不动了。\n\n那是假笑。嘴在笑，眼睛没有。\n\n【真笑】\n中考最后一科交卷，走出考场。六月的阳光晃得人睁不开眼。我站在学校大门口，愣了几秒钟——不是因为考得好或不好，是因为突然觉得：结束了。真的结束了。\n\n然后我看到了校门口花坛里的那丛月季。\n\n它们不知道什么时候开的，一朵挨着一朵，红的粉的白的黄的，在阳光下亮得不像真的。我不记得上一次认真看花是什么时候了——这半年来，我的眼睛里只有试卷和课本，路边的花开了又谢了，我一次也没有看过。\n\n可此刻，风带着花香吹过来，阳光暖洋洋地铺在身上，蝉在树上叫得很大声。我深深地吸了一口气——空气里有栀子花的甜、有阳光晒过的草坪的味道、有刚考完试的轻松和自由。\n\n我开心地笑了。\n\n不是因为考得好，不是为了安慰谁，不是因为习惯性地扯嘴角。而是因为——我终于又看到花了。我终于又有时间抬头看天了。我终于可以站在阳光下，什么都不想，就只是笑。\n\n那是我这一整年里，唯一一次真正的笑。从心底涌上来的，像花开一样自然的笑。\n\n原来，最开心的笑不需要理由。它只需要你停下来，深呼吸，然后——看看身边那些一直在开的花。',
          fullTextEn: 'In my entire ninth-grade year, I smiled many times. But truly smiled happily? Only once.\n\n[Bitter Smile]\n1 AM, test papers piled mountain-high under the desk lamp. Finishing the last math problem, I stretched—bones cracking. Rubbing stinging eyes, I glanced in the mirror—dark circles, sallow face, cracked lips. I tugged my mouth corners at the reflection. That wasn\'t a smile—that was muscle spasm.\n\nEvery day the same. Up at six, bed at twelve. Ten-minute breaks spent on practice problems; lunch break memorizing texts; even bathroom trips with vocabulary flashcards. Classmates rallied: "Hang in there—three months left!" I joined the cheering, lips smiling, eyes empty.\n\nThat was a bitter smile. Body smiling, heart absent.\n\n[Fake Smile]\nWeekend home, Mom made a tableful of dishes. "How\'d you do?" "Fine." Actually I\'d dropped fifteen places. Dad watched me with cautious hopefulness, like eyeing porcelain that might shatter. I grinned: "Don\'t worry, I\'m fine."\n\nBack in my room, door closed, the smile wiped off my face—clean as removing makeup. I lay on the bed staring at the ceiling. Pressure like a boulder on my chest—couldn\'t smile anymore.\n\nThat was a fake smile. Mouth smiling, eyes not.\n\n[Real Smile]\nLast exam paper submitted. Walking out of the hall. June sunlight so bright I could barely open my eyes. Standing at the school gate, I paused for several seconds—not because the exam went well or poorly, but because suddenly I felt: it\'s over. Really over.\n\nThen I saw the cluster of roses in the flowerbed by the gate.\n\nI don\'t know when they\'d bloomed—flowers pressed against flowers, red, pink, white, yellow, glowing unreal in the sunlight. I couldn\'t remember the last time I\'d really looked at flowers—for half a year, my eyes saw only test papers and textbooks. Roadside flowers bloomed and faded; I\'d never once looked.\n\nBut now, wind carried flower fragrance; sunlight spread warm across my body; cicadas sang loudly in trees. I breathed deeply—the air held gardenia sweetness, sun-warmed grass, and the lightness and freedom of finished exams.\n\nI smiled happily.\n\nNot because the exam went well, not to comfort anyone, not from habitual mouth-tugging. But because—I could finally see flowers again. I could finally look up at the sky again. I could finally stand in sunlight, thinking nothing, just smiling.\n\nThat was my only genuine smile in the entire year. Rising from the heart\'s depths, natural as a flower blooming.\n\nIt turns out the happiest smile needs no reason. It only needs you to stop, breathe deeply, then—look at the flowers that have been blooming beside you all along.',
          highlights: [
            { text: '笑容立刻从脸上褪去，像卸妆一样干净利落', textEn: 'The smile wiped off my face — clean as removing makeup', why: '以卸妆比喻假笑，形象犀利', whyEn: 'Fake smile as cosmetic performance — the simile is devastatingly precise' },
            { text: '我终于又看到花了', textEn: 'I could finally see flowers again', why: '简单六个字概括半年压抑后的释放', whyEn: 'Six characters condensing half a year of sensory deprivation into one quiet revelation' }
          ],
          sections: [
            { type: '苦笑', fn: '疲惫', fnEn: 'Exhaustion', detail: '深夜刷题', detailEn: 'Late-night study' },
            { type: '假笑', fn: '伪装', fnEn: 'Pretense', detail: '安慰父母', detailEn: 'Comforting parents' },
            { type: '真笑', fn: '释放', fnEn: 'Release', detail: '考完看花', detailEn: 'Seeing flowers after exam' },
            { type: '点题', fn: '领悟', fnEn: 'Insight', detail: '最开心的笑不需要理由', detailEn: 'Happiest smile needs no reason' }
          ]
        },
        {
          title: '我开心地笑了', titleEn: 'I Smiled Happily',
          score: 45, maxScore: 50,
          structure: 'daoXuShi',
          techniques: ['xuanNian','duiBi','dongZuoMiaoXie'],
          techniqueMarks: [
            { para: 0, text: '照片里的我站在游泳池边，头发湿漉漉的贴在额头上，笑得眼睛都看不见了', technique: '倒叙（照片引入）', techniqueEn: 'Flashback via Photo', effect: '以照片中的笑容制造悬念——为什么笑得这么开心？', effectEn: 'A photo of a drenched, grinning teenager — the reader immediately wants to know the story behind that smile' },
            { para: 1, text: '洗澡的时候水不能淋到脸上，喝水不敢喝太急，下暴雨时看到路面积水都会心跳加速', technique: '排比（恐惧层次）', techniqueEn: 'Parallelism of Fear', effect: '三个递进的细节把"怕水"写到了极致', effectEn: 'Shower, drinking, puddles — three escalating details mapping the full geography of water-phobia' },
            { para: 1, text: '溺水的感觉被刻进了身体里，像一根拔不掉的刺', technique: '比喻', techniqueEn: 'Metaphor (Thorn)', effect: '刺的比喻为后文"碎掉"做铺垫', effectEn: 'Trauma as an irremovable thorn — planted here, shattered later, completing the arc' },
            { para: 3, text: '全班同学都已经扑通扑通跳下去了，只有我像一根钉子一样钉在岸边', technique: '对比+比喻', techniqueEn: 'Contrast with Simile', effect: '"钉子"的比喻——僵硬、无法移动，与同学的"扑通"形成鲜明对比', effectEn: 'Classmates splash in while the narrator stands nailed to the edge — paralysis made visible' },
            { para: 4, text: '你要让四岁时的那场意外控制你一辈子吗', technique: '关键对话', techniqueEn: 'Pivotal Dialogue', effect: '妈妈的话是全文的转折点——把选择权交还给孩子', effectEn: 'Mom\'s question reframes fear as a choice, not a condition — the essay\'s turning point' },
            { para: 5, text: '第二天……第三天……第四天……第五天', technique: '层层递进', techniqueEn: 'Day-by-day Progression', effect: '从手入水→脚入水→站在水中→趴在水面——节奏清晰的克服过程', effectEn: 'Hand, feet, standing, floating — each day one step deeper, the progression tangible and earned' },
            { para: 6, text: '水托着我，轻轻地，像一只大手', technique: '拟人（恐惧源转化）', techniqueEn: 'Personification (Fear Transformed)', effect: '曾经的恐惧源变成了温柔的托举——认知的逆转', effectEn: 'The water that once drowned now cradles — the same element, opposite meaning' },
            { para: 7, text: '一秒，两秒，三秒……五秒。阳光从天窗照下来，在水面上画出一道道金色的线', technique: '数字节奏+光线描写', techniqueEn: 'Counting Seconds + Light Imagery', effect: '数秒钟的漂浮像一个世纪那么长——配合金色光线，画面感极强', effectEn: 'Five seconds that feel eternal, painted in golden skylight lines on water — time suspended in beauty' },
            { para: 8, text: '四岁的池塘、呛水的恐惧、十年来的阴影——在水的温柔里，一点一点地溶解了', technique: '照应（刺的溶解）', techniqueEn: 'Callback (Thorn Dissolving)', effect: '与前文"拔不掉的刺"照应——恐惧没有被拔掉而是被溶解', effectEn: 'The irremovable thorn dissolves rather than being pulled — a gentler, truer model of healing' },
            { para: 10, text: '恐惧不会消失，但你可以选择带着恐惧往前走', technique: '点题感悟', techniqueEn: 'Thematic Epiphany', effect: '不是消除恐惧而是与恐惧共处——成熟的人生领悟', effectEn: 'Fear doesn\'t vanish; you carry it forward — a mature insight that transcends the swimming lesson' }
          ],
          approach: '倒叙开头，从照片上的笑容写起，回忆那是一次勇敢面对恐惧的经历——怕水的\u201c我\u201d终于学会了游泳。',
          approachEn: 'Reverse opening from a smile in a photo, recalling a brave encounter with fear—the narrator who feared water finally learns to swim.',
          architecture: '倒叙：看到照片里的笑→回忆：怕水的童年→经过：学游泳的挣扎→高潮：第一次浮起来→回到现在：那张照片的意义',
          architectureEn: 'Flashback: seeing the smile in the photo → Memory: water-fearing childhood → Process: swimming struggle → Climax: first time floating → Return: the photo\'s meaning',
          logic: '以照片为线索，倒叙引入，正叙展开从恐惧到勇气的完整心路历程。',
          logicEn: 'Photo as thread; reverse chronology opens, forward narration unfolds the complete journey from fear to courage.',
          skills: ['倒叙悬念自然', '克服恐惧过程真实', '照片前后呼应'],
          skillsEn: ['Natural reverse-chronology suspense', 'Authentic fear-overcoming process', 'Photo creates before-and-after echo'],
          fullText: '书桌上有一张照片。照片里的我站在游泳池边，头发湿漉漉的贴在额头上，笑得眼睛都看不见了。每次看到这张照片，我都会想起那个夏天——我终于战胜了自己的那个下午。\n\n我怕水。怕到什么程度呢？洗澡的时候水不能淋到脸上，喝水不敢喝太急，下暴雨时看到路面积水都会心跳加速。这一切都源于四岁那年——我不小心掉进了村口的池塘，呛了好几口水，是路过的叔叔把我捞上来的。那种溺水的感觉被刻进了身体里，像一根拔不掉的刺。\n\n可偏偏，初一体育课要游泳测试。\n\n第一次站在泳池边，我的腿在发抖。水蓝幽幽的，看起来很深。教练说\u201c下来\u201d，我的脚趾碰到水面的那一秒就缩了回去。全班同学都已经扑通扑通跳下去了，只有我像一根钉子一样钉在岸边。有人笑，有人催，教练走过来轻轻推了我一下——我差点哭出来。\n\n那天回家，我跟妈妈说不想学了。妈妈看着我，很认真地说：\u201c你可以不学。但如果你现在放弃，以后每次看到水都会害怕。你要让四岁时的那场意外控制你一辈子吗？\u201d\n\n我说不出话来。\n\n第二天，我又站在了泳池边。这一次，我没有下水。我只是蹲下来，把手伸进水里。凉凉的，滑滑的，没有想象中那么可怕。第三天，我坐在池边，把脚放进水里。第四天，我站到了水里——浅水区，水只到腰。我攥着泳池边缘的栏杆，指节发白。\n\n第五天，教练扶着我的肚子，让我趴在水面上。水托着我，轻轻地，像一只大手。我的身体在抖，但没有沉下去。\u201c放松，\u201d教练说，\u201c水不会伤害你。\u201d\n\n第十天，教练的手放开了。我浮在水面上，一秒，两秒，三秒……五秒。阳光从天窗照下来，在水面上画出一道道金色的线。水在耳边轻轻地响，像一首很远很远的歌。\n\n我浮住了。\n\n那一刻，我感觉到身体里有什么东西碎掉了——是那根刺。四岁的池塘、呛水的恐惧、十年来的阴影——在水的温柔里，一点一点地溶解了。\n\n我站起来，水珠从脸上往下淌。我看着泳池对面的玻璃墙，里面映出一个头发湿漉漉、嘴角翘起来的少年。那是我吗？我都快认不出自己了。\n\n教练拍了那张照片。镜头里的我笑得特别开心——不是因为学会了游泳，而是因为学会了一件更重要的事：恐惧不会消失，但你可以选择带着恐惧往前走。\n\n那张照片现在就放在我的书桌上。每次遇到害怕的事，我就看看它，然后告诉自己：\u201c连水都不怕了，还怕什么？\u201d\n\n然后，我又会开心地笑。',
          fullTextEn: 'On my desk sits a photo. In it, I stand by a swimming pool, wet hair plastered to my forehead, smiling so wide my eyes have disappeared. Every time I see this photo, I think of that summer—the afternoon I finally conquered myself.\n\nI feared water. How badly? Shower water couldn\'t touch my face; I didn\'t dare drink too fast; even seeing puddles during heavy rain made my heart race. It all traced to age four—I accidentally fell into the village pond, swallowed several mouthfuls of water, and was pulled out by a passing uncle. That drowning sensation was carved into my body like an irremovable thorn.\n\nYet seventh-grade PE required a swim test.\n\nFirst time at the pool\'s edge, my legs trembled. The water—pale blue, seemingly deep. The coach said "come in"; the second my toe touched the surface, I jerked back. Everyone else had splashed in; only I stood shore-side like a nail. Some laughed, some urged; the coach gently pushed me—I nearly burst into tears.\n\nHome that evening, I told Mom I wanted to quit. She looked at me seriously: "You can quit. But if you give up now, you\'ll fear water every time you see it for the rest of your life. Are you going to let that accident at age four control you forever?"\n\nI couldn\'t answer.\n\nNext day, I stood at the pool\'s edge again. This time, I didn\'t get in. I just crouched and put my hand in the water. Cool, smooth—not as terrifying as imagined. Day three, I sat on the edge, feet dangling in. Day four, I stood in the shallow end—water only waist-high. I gripped the pool railing, knuckles white.\n\nDay five, the coach held my belly while I lay face-down on the surface. Water supported me, gently, like a large hand. My body trembled but didn\'t sink. "Relax," the coach said. "Water won\'t hurt you."\n\nDay ten, the coach let go. I floated—one second, two seconds, three... five. Sunlight from the skylight drew golden lines on the water surface. Water murmured softly by my ears, like a very distant song.\n\nI stayed afloat.\n\nIn that moment, I felt something inside me shatter—the thorn. The four-year-old\'s pond, the terror of swallowed water, ten years of shadow—in water\'s gentleness, dissolving bit by bit.\n\nI stood up, water streaming down my face. I looked at the glass wall across the pool—reflected in it, a wet-haired teenager with upturned lips. Was that me? I barely recognized myself.\n\nThe coach took that photo. In the lens, I\'m smiling especially happily—not because I learned to swim, but because I learned something more important: fear doesn\'t disappear, but you can choose to walk forward carrying it.\n\nThat photo now sits on my desk. Whenever I face something scary, I look at it and tell myself: "If I\'m no longer afraid of water, what else is there to fear?"\n\nThen I smile happily again.',
          highlights: [
            { text: '水托着我，轻轻地，像一只大手', textEn: 'Water held me up, gently, like a large hand', why: '将恐惧源转化为温柔意象，逆转认知', whyEn: 'The element that once drowned now cradles — cognitive reversal in one image' },
            { text: '连水都不怕了，还怕什么', textEn: 'If I\'m no longer afraid of water, what else is there to fear?', why: '结尾金句照应全文主题', whyEn: 'The photo becomes a talisman — a smile that radiates courage beyond swimming' }
          ],
          sections: [
            { type: '倒叙', fn: '照片', fnEn: 'Photo', detail: '笑容的悬念', detailEn: 'Suspense of the smile' },
            { type: '回忆', fn: '恐惧', fnEn: 'Fear', detail: '四岁的阴影', detailEn: 'Age-four trauma' },
            { type: '过程', fn: '克服', fnEn: 'Overcoming', detail: '十天的突破', detailEn: 'Ten days of breakthrough' },
            { type: '高潮', fn: '浮起', fnEn: 'Floating', detail: '恐惧溶解', detailEn: 'Fear dissolves' },
            { type: '回归', fn: '力量', fnEn: 'Strength', detail: '照片的意义', detailEn: 'The photo\'s meaning' }
          ]
        }
      ]
    }
  ]
};