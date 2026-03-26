/**
 * 语宙 YuZhou — 部编版三年级语文下册 教材数据
 * Grade 3 Semester 2 Textbook Data (PEP Edition)
 * Based on: 义务教育教科书 语文 三年级下册 (2018)
 */
var TB_G3S2 = {
grade: 3, semester: 2,
totalRecogChars: 250,
totalWriteChars: 250,
units: [
/* ═══════════════════════════════════════════ */
/*  UNIT 1 — 课文 Texts (Lessons 1-4)         */
/* ═══════════════════════════════════════════ */
{
  id: 1, title: "课文", titleEn: "Texts",
  difficulty: 2,
  type: "kewen",
  lessons: [
    {
      id: 1, title: "古诗三首", titleEn: "Three Ancient Poems",
      difficulty: 2,
      text: [
        "绝句\n[唐] 杜甫\n迟日江山丽，\n春风花草香。\n泥融飞燕子，\n沙暖睡鸳鸯。",
        "注释：迟日——春日。泥融——这里指泥土变湿软。",
        "惠崇春江晚景\n[宋] 苏轼\n竹外桃花三两枝，\n春江水暖鸭先知。\n蒌蒿满地芦芽短，\n正是河豚欲上时。",
        "注释：惠崇是北宋名僧，能诗善画。这首诗是苏轼为惠崇的画作《春江晚景》所写的题画诗。芦芽——芦苇的嫩芽。河豚——一种肉味鲜美的鱼，有毒性。",
        "三衢道中\n[宋] 曾几\n梅子黄时日日晴，\n小溪泛尽却山行。\n绿阴不减来时路，\n添得黄鹂四五声。",
        "注释：三衢——地名，在今浙江衢州一带。小溪泛尽——乘小船到小溪的尽头。却——再，又。阴——树荫。"
      ],
      textEn: [
        "Quatrain\n[Tang] Du Fu\nIn the lingering spring sun, rivers and mountains are beautiful,\nSpring breeze carries the fragrance of flowers and grass.\nMud thaws as swallows fly,\nOn warm sand, mandarin ducks sleep.",
        "Notes: 'Lingering sun' refers to the spring sun. 'Mud thaws' means the soil becomes soft and moist.",
        "Huichong's Spring River Evening Scene\n[Song] Su Shi\nBeyond the bamboo, two or three peach blossom branches,\nThe spring river warms — ducks are first to know.\nAster and mugwort cover the ground, reed shoots still short,\nJust when the river pufferfish begin to swim upstream.",
        "Notes: Huichong was a famous monk of the Northern Song, skilled in poetry and painting. Su Shi wrote this poem for Huichong's painting. 'Reed shoots' are young reed sprouts. 'Pufferfish' is a delicious but poisonous fish.",
        "On the Road to Sanqu\n[Song] Zeng Ji\nWhen plums turn yellow, every day is clear,\nThe little boat reaches the stream's end, then we walk the mountain road.\nThe green shade is no less than on the way here,\nAdding four or five oriole songs.",
        "Notes: Sanqu is a place name in modern Quzhou, Zhejiang. 'Stream's end' means riding a small boat to where the creek ends. 'Yet' means again."
      ],
      textPinyin: [
        "ju\u00e9 j\u00f9\n [ t\u00e1ng ]   d\u00f9 f\u01d4\n ch\u00ed r\u00ec ji\u0101ng sh\u0101n l\u00ec\uff0c\n ch\u016bn f\u0113ng hu\u0101 c\u01ceo xi\u0101ng\u3002\n n\u00ed r\u00f3ng f\u0113i y\u00e0n zi\uff0c\n sh\u0101 nu\u01cen shu\u00ec yu\u0101n y\u0101ng\u3002",
        "zh\u00f9 sh\u00ec\uff1a ch\u00ed r\u00ec\u2014\u2014 ch\u016bn r\u00ec\u3002 n\u00ed r\u00f3ng\u2014\u2014 zh\u00e8 l\u01d0 zh\u01d0 n\u00ed t\u01d4 bi\u00e0n sh\u012b ru\u01cen\u3002",
        "hu\u00ec ch\u00f3ng ch\u016bn ji\u0101ng w\u01cen j\u01d0ng\n [ s\u00f2ng ]   s\u016b sh\u00ec\n zh\u00fa w\u00e0i t\u00e1o hu\u0101 s\u0101n li\u01ceng zh\u012b\uff0c\n ch\u016bn ji\u0101ng shu\u01d0 nu\u01cen y\u0101 xi\u0101n zh\u012b\u3002\n l\u00f3u h\u0101o m\u01cen d\u00ec l\u00fa y\u00e1 du\u01cen\uff0c\n zh\u00e8ng sh\u00ec h\u00e9 t\u00fan y\u00f9 sh\u00e0ng sh\u00ed\u3002",
        "zh\u00f9 sh\u00ec\uff1a hu\u00ec ch\u00f3ng sh\u00ec b\u011bi s\u00f2ng m\u00edng s\u0113ng\uff0c n\u00e9ng sh\u012b sh\u00e0n hu\u00e0\u3002 zh\u00e8 sh\u01d2u sh\u012b sh\u00ec s\u016b sh\u00ec w\u00e8i hu\u00ec ch\u00f3ng de hu\u00e0 zu\u00f2\u300ach\u016bn ji\u0101ng w\u01cen j\u01d0ng\u300bsu\u01d2 xi\u011b de t\u00ed hu\u00e0 sh\u012b\u3002 l\u00fa y\u00e1\u2014\u2014 l\u00fa w\u011bi de n\u00e8n y\u00e1\u3002 h\u00e9 t\u00fan\u2014\u2014 y\u00ec zh\u01d2ng r\u00f2u w\u00e8i xi\u0101n m\u011bi de y\u00fa\uff0c y\u01d2u d\u00fa x\u00ecng\u3002",
        "s\u0101n q\u00fa d\u00e0o zh\u014dng\n [ s\u00f2ng ]   c\u00e9ng j\u01d0\n m\u00e9i z\u01d0 hu\u00e1ng sh\u00ed r\u00ec r\u00ec q\u00edng\uff0c\n xi\u01ceo x\u012b f\u00e0n j\u00ecn qu\u00e8 sh\u0101n x\u00edng\u3002\n l\u01dc y\u012bn b\u00f9 ji\u01cen l\u00e1i sh\u00ed l\u00f9\uff0c\n ti\u0101n d\u00e9 hu\u00e1ng l\u00ed s\u00ec w\u01d4 sh\u0113ng\u3002",
        "zh\u00f9 sh\u00ec\uff1a s\u0101n q\u00fa\u2014\u2014 d\u00ec m\u00edng\uff0c z\u00e0i j\u012bn zh\u00e8 ji\u0101ng q\u00fa zh\u014du y\u00ed d\u00e0i\u3002 xi\u01ceo x\u012b f\u00e0n j\u00ecn\u2014\u2014 ch\u00e9ng xi\u01ceo chu\u00e1n d\u00e0o xi\u01ceo x\u012b de j\u00ecn t\u00f3u\u3002 qu\u00e8\u2014\u2014 z\u00e0i\uff0c y\u00f2u\u3002 y\u012bn\u2014\u2014 sh\u00f9 y\u012bn\u3002"
      ],
      recognizeChars: ["鸳","鸯","惠","崇","豚","减"],
      writeChars: ["融","燕","鸳","鸯","惠","崇","芦","芽","梅","溪","泛","减"],
      vocabWords: [
        {word:'迟日',pinyin:'chí rì',en:'lingering spring sun',sentence:'迟日江山丽。',sentenceEn:'The lingering spring sun makes rivers and mountains beautiful.'},
        {word:'泥融',pinyin:'ní róng',en:'mud thaws',sentence:'泥融飞燕子。',sentenceEn:'Mud thaws as swallows fly.'},
        {word:'鸳鸯',pinyin:'yuān yāng',en:'mandarin ducks',sentence:'沙暖睡鸳鸯。',sentenceEn:'On warm sand, mandarin ducks sleep.'},
        {word:'芦芽',pinyin:'lú yá',en:'reed shoots',sentence:'蒌蒿满地芦芽短。',sentenceEn:'Mugwort covers the ground, reed shoots still short.'},
        {word:'黄鹂',pinyin:'huáng lí',en:'oriole',sentence:'添得黄鹂四五声。',sentenceEn:'Adding four or five oriole songs.'}
      ],
      grammarPoints: [
        {point: "\u5148\u2026\u2026\u518d\u2026\u2026", pointEn: "first...then...", example: "\u6625\u98ce\u82b1\u8349\u9999\u3002", exampleEn: "Quatrain\n[Tang] Du Fu\nIn the lingering spring sun, rivers and mountains are beau", explanation: "\u8868\u793a\u52a8\u4f5c\u7684\u5148\u540e\u987a\u5e8f", explanationEn: "Indicates sequential order of actions"},
        {point: "\u603b\u5206\u7ed3\u6784", pointEn: "General-specific structure", example: "\u6625\u98ce\u82b1\u8349\u9999\u3002", exampleEn: "Quatrain\n[Tang] Du Fu\nIn the lingering spring sun, rivers and mountains are beau", explanation: "\u5148\u603b\u8ff0\u518d\u5206\u8ff0\uff0c\u6216\u5148\u5206\u8ff0\u518d\u603b\u7ed3\uff0c\u4f7f\u6587\u7ae0\u6761\u7406\u6e05\u6670", explanationEn: "Start with overview then details, or vice versa, for clear organization"}
      ],
      footnotes: [
        {term:"\u8fdf\u65e5", termEn:"lingering spring sun", definition:"\u3010ch\u00ed r\u00ec\u3011lingering spring sun\u3002", definitionEn:"lingering spring sun"},
        {term:"\u6ce5\u878d", termEn:"mud thaws", definition:"\u3010n\u00ed r\u00f3ng\u3011mud thaws\u3002", definitionEn:"mud thaws"},
        {term:"\u9e33\u9e2f", termEn:"mandarin ducks", definition:"\u3010yu\u0101n y\u0101ng\u3011mandarin ducks\u3002", definitionEn:"mandarin ducks"},
        {term:"\u82a6\u82bd", termEn:"reed shoots", definition:"\u3010l\u00fa y\u00e1\u3011reed shoots\u3002", definitionEn:"reed shoots"},
        {term:"\u9ec4\u9e42", termEn:"oriole", definition:"\u3010hu\u00e1ng l\u00ed\u3011oriole\u3002", definitionEn:"oriole"}
      ],
      readingTips: [
        {cn:"\u6709\u611f\u60c5\u5730\u6717\u8bfb\u53e4\u8bd7\uff0c\u6ce8\u610f\u505c\u987f\u548c\u91cd\u97f3\u3002\u60f3\u8c61\u8bd7\u53e5\u63cf\u7ed8\u7684\u753b\u9762\uff0c\u4f53\u4f1a\u8bd7\u4eba\u7684\u60c5\u611f\u3002", en:"Read the poem aloud with feeling, noting pauses and emphasis. Visualize the scenes described and feel the poet's emotions."},
        {cn:"\u627e\u51fa\u8bd7\u4e2d\u7684\u5173\u952e\u610f\u8c61\uff08\u5982\u5c71\u3001\u6c34\u3001\u6708\u3001\u82b1\u7b49\uff09\uff0c\u60f3\u60f3\u5b83\u4eec\u8868\u8fbe\u4e86\u4ec0\u4e48\u611f\u60c5\u3002", en:"Identify key imagery (like mountains, water, moon, flowers) and think about what emotions they convey."}
      ],
      exercises: [
        {type:"read",cn:"有感情地朗读课文。背诵课文。默写《绝句》。",en:"Read the text with feeling. Recite all three poems. Write 'Quatrain' from memory."},
        {type:"think",cn:"结合诗句的意思，想象画面，说说三首诗分别写了怎样的景象。",en:"Based on the meaning of the verses, imagine the scenes and describe the scenery depicted in each poem."},
        {type:"practice",cn:"读一读，记一记：迟日、泥融、鸳鸯、惠崇、芦芽、河豚、三衢、黄鹂",en:"Read and memorize: lingering sun, mud thaws, mandarin ducks, Huichong, reed shoots, pufferfish, Sanqu, oriole"}
      ],
      teachingPoints: [
        {cn:"三首古诗都描写了春天的景色，注意体会诗人对春天的喜爱之情。",en:"All three ancient poems describe spring scenery; appreciate the poets' love for spring."},
        {cn:"学习通过具体景物（燕子、鸳鸯、桃花、鸭、蒌蒿等）来表现季节特征。",en:"Learn how specific images (swallows, ducks, peach blossoms, mugwort) convey seasonal features."},
        {cn:"了解题画诗的特点——苏轼的《惠崇春江晚景》是为画作所题。",en:"Understand 'painting poems' — Su Shi wrote his poem as an inscription for Huichong's painting."}
      ],
      parentTips: [
        {cn:"和孩子一起观察春天的景物变化，联系诗句理解诗意。",en:"Observe spring scenery changes together and connect them to the poem's meaning."},
        {cn:"引导孩子背诵并默写《绝句》，注意字形正确。",en:"Guide your child to recite and write 'Quatrain' from memory with correct character forms."}
      ]
    },
    {
      id: 2, title: "燕子", titleEn: "Swallows",
      difficulty: 2,
      text: [
        "一身乌黑的羽毛，一对轻快有力的翅膀，加上剪刀似的尾巴，凑成了那样可爱的活泼的小燕子。",
        "二三月的春日里，轻风微微地吹拂着，如毛的细雨由天上洒落着，千条万条的柔柳，红的白的黄的花，青的草，绿的叶，都像赶集似的聚拢来，形成了烂漫无比的春天。",
        "这时候，那些小燕子，那么伶俐可爱的小燕子，也由南方飞来，加入这光彩夺目的图画中，为春光平添了许多生趣。",
        "小燕子带了它的剪刀似的尾巴，在阳光满地时，斜飞于旷亮无比的天空，叽的一声，已由这里的稻田上，飞到那边的高柳下了。",
        "另有几只却在波光粼粼的湖面上横掠着，小燕子的翼尖或剪尾，偶尔沾了一下水面，那小圆晕便一圈一圈地荡漾开去。",
        "那边还有飞倦了的几对，闲散地在纤细的电线上休憩——嫩蓝的春天，几支木杆，几痕细线连于杆与杆之间，线上停着几个小黑点，那便是燕子。多么有趣的一幅图画呀！"
      ],
      textEn: [
        "A body of jet-black feathers, a pair of light and powerful wings, plus a scissors-like tail — together they make up those lovely, lively little swallows.",
        "In the spring days of February and March, a gentle breeze blows softly, fine rain like strands of hair falls from the sky. Thousands of supple willows, red, white and yellow flowers, green grass and leaves — all seem to gather together like people heading to a fair, forming a splendidly beautiful spring.",
        "At this time, those little swallows, those nimble and lovely little swallows, also fly in from the south, joining this dazzling picture, adding much life and fun to the spring scenery.",
        "The little swallow, with its scissors-like tail, swoops diagonally across the boundlessly bright sky in the sunshine. With a chirp, it has already flown from the rice paddy here to the tall willow over there.",
        "A few others skim across the sparkling lake surface. The swallow's wingtip or tail occasionally touches the water, and tiny ripples spread out in circles.",
        "Over there, a few tired pairs rest lazily on the slender wires — the tender blue spring, a few wooden poles, faint lines connecting pole to pole, and on the lines sit a few little black dots — those are the swallows. What a delightful picture!"
      ],
      textPinyin: [
        "y\u00ec sh\u0113n w\u016b h\u0113i de y\u01d4 m\u00e1o\uff0c y\u00ed du\u00ec q\u012bng ku\u00e0i y\u01d2u l\u00ec de ch\u00ec b\u01ceng\uff0c ji\u0101 sh\u00e0ng ji\u01cen d\u0101o sh\u00ec de w\u011bi ba\uff0c c\u00f2u ch\u00e9ng le n\u00e0 y\u00e0ng k\u011b \u00e0i de hu\u00f3 p\u014d de xi\u01ceo y\u00e0n zi\u3002",
        "\u00e8r s\u0101n yu\u00e8 de ch\u016bn r\u00ec l\u01d0\uff0c q\u012bng f\u0113ng w\u0113i w\u0113i d\u00ec chu\u012b f\u00fa zhe\uff0c r\u00fa m\u00e1o de x\u00ec y\u01d4 y\u00f3u ti\u0101n sh\u00e0ng s\u01ce lu\u00f2 zhe\uff0c qi\u0101n ti\u00e1o w\u00e0n ti\u00e1o de r\u00f3u li\u01d4\uff0c h\u00f3ng de b\u00e1i de hu\u00e1ng de hu\u0101\uff0c q\u012bng de c\u01ceo\uff0c l\u01dc de y\u00e8\uff0c d\u014du xi\u00e0ng g\u01cen j\u00ed sh\u00ec de j\u00f9 l\u01d2ng l\u00e1i\uff0c x\u00edng ch\u00e9ng le l\u00e0n m\u00e0n w\u00fa b\u01d0 de ch\u016bn ti\u0101n\u3002",
        "zh\u00e8 sh\u00ed h\u00f2u\uff0c n\u00e0 xi\u0113 xi\u01ceo y\u00e0n zi\uff0c n\u00e0 me l\u00edng l\u00ec k\u011b \u00e0i de xi\u01ceo y\u00e0n zi\uff0c y\u011b y\u00f3u n\u00e1n f\u0101ng f\u0113i l\u00e1i\uff0c ji\u0101 r\u00f9 zh\u00e8 gu\u0101ng c\u01cei du\u00f3 m\u00f9 d\u00ec t\u00fa hu\u00e0 zh\u014dng\uff0c w\u00e8i ch\u016bn gu\u0101ng p\u00edng ti\u0101n le x\u01d4 du\u014d sh\u0113ng q\u00f9\u3002",
        "xi\u01ceo y\u00e0n zi d\u00e0i le t\u0101 de ji\u01cen d\u0101o sh\u00ec de w\u011bi ba\uff0c z\u00e0i y\u00e1ng gu\u0101ng m\u01cen d\u00ec sh\u00ed\uff0c xi\u00e9 f\u0113i y\u00fa ku\u00e0ng li\u00e0ng w\u00fa b\u01d0 de ti\u0101n k\u014dng\uff0c j\u012b de y\u00ec sh\u0113ng\uff0c y\u01d0 y\u00f3u zh\u00e8 l\u01d0 de d\u00e0o ti\u00e1n sh\u00e0ng\uff0c f\u0113i d\u00e0o n\u00e0 bi\u0101n de g\u0101o li\u01d4 xi\u00e0 le\u3002",
        "l\u00ecng y\u01d2u j\u01d0 zh\u012b qu\u00e8 z\u00e0i b\u014d gu\u0101ng l\u00edn l\u00edn de h\u00fa mi\u00e0n sh\u00e0ng h\u00e9ng l\u00fc\u00e8 zhe\uff0c xi\u01ceo y\u00e0n zi de y\u00ec ji\u0101n hu\u00f2 ji\u01cen w\u011bi\uff0c \u01d2u \u011br zh\u0101n le y\u00ed xi\u00e0 shu\u01d0 mi\u00e0n\uff0c n\u00e0 xi\u01ceo yu\u00e1n y\u016bn bi\u00e0n y\u00ec qu\u0101n yi qu\u0101n d\u00ec d\u00e0ng y\u00e0ng k\u0101i q\u00f9\u3002",
        "n\u00e0 bi\u0101n h\u00e1i y\u01d2u f\u0113i ju\u00e0n le de j\u01d0 du\u00ec\uff0c xi\u00e1n s\u01cen d\u00ec z\u00e0i xi\u0101n x\u00ec de di\u00e0n xi\u00e0n sh\u00e0ng xi\u016b q\u00ec\u2014\u2014 n\u00e8n l\u00e1n de ch\u016bn ti\u0101n\uff0c j\u01d0 zh\u012b m\u00f9 g\u0101n\uff0c j\u01d0 h\u00e9n x\u00ec xi\u00e0n li\u00e1n y\u00fa g\u0101n y\u01d4 g\u0101n zh\u012b ji\u0101n\uff0c xi\u00e0n sh\u00e0ng t\u00edng zhe j\u01d0 g\u00e8 xi\u01ceo h\u0113i di\u01cen\uff0c n\u00e0 bi\u00e0n sh\u00ec y\u00e0n zi\u3002 du\u014d me y\u01d2u q\u00f9 de y\u00ec f\u00fa t\u00fa hu\u00e0 ya\uff01"
      ],
      recognizeChars: ["凑","伶","俐","翼","漾","倦","闲","散","纤","杆","痕"],
      writeChars: ["凑","拂","集","聚","形","掠","偶","尔","沾","倦","闲","纤","痕"],
      vocabWords: [
        {word:'伶俐',pinyin:'líng lì',en:'nimble; clever',sentence:'那么伶俐可爱的小燕子。',sentenceEn:'Those nimble and lovely little swallows.'},
        {word:'轻快',pinyin:'qīng kuài',en:'light and swift',sentence:'一对轻快有力的翅膀。',sentenceEn:'A pair of light and powerful wings.'},
        {word:'烂漫',pinyin:'làn màn',en:'splendid',sentence:'形成了烂漫无比的春天。',sentenceEn:'Forming a splendidly beautiful spring.'},
        {word:'偶尔',pinyin:'ǒu ěr',en:'occasionally',sentence:'偶尔沾了一下水面。',sentenceEn:'Occasionally touching the water surface.'},
        {word:'荡漾',pinyin:'dàng yàng',en:'ripple',sentence:'小圆晕便一圈一圈地荡漾开去。',sentenceEn:'Tiny ripples spread out in circles.'}
      ],
      footnotes: [
        {term:"\u4f36\u4fd0", termEn:"nimble; clever", definition:"\u3010l\u00edng l\u00ec\u3011nimble; clever\u3002", definitionEn:"nimble; clever"},
        {term:"\u8f7b\u5feb", termEn:"light and swift", definition:"\u3010q\u012bng ku\u00e0i\u3011light and swift\u3002", definitionEn:"light and swift"},
        {term:"\u70c2\u6f2b", termEn:"splendid", definition:"\u3010l\u00e0n m\u00e0n\u3011splendid\u3002", definitionEn:"splendid"},
        {term:"\u5076\u5c14", termEn:"occasionally", definition:"\u3010\u01d2u \u011br\u3011occasionally\u3002", definitionEn:"occasionally"},
        {term:"\u8361\u6f3e", termEn:"ripple", definition:"\u3010d\u00e0ng y\u00e0ng\u3011ripple\u3002", definitionEn:"ripple"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'比喻句',pointEn:'bǐ yù jù',example:'simile',exampleEn:'一身乌黑的羽毛，加上剪刀似的尾巴。',explanation:'Jet-black feathers plus a scissors-like tail.',explanationEn:'用"似的""像"把一个事物比作另一个事物'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文，边读边想象画面，并读出对燕子的喜爱之情。背诵第1～3自然段。",en:"Read aloud while imagining the scenes, expressing your love for swallows. Recite paragraphs 1-3."},
        {type:"vocab",cn:"读一读，记一记：剪刀似的尾巴、伶俐可爱的小燕子、光彩夺目的图画、旷亮无比的天空",en:"Read and remember: scissors-like tail, nimble and lovely swallows, dazzling picture, boundlessly bright sky"},
        {type:"write",cn:"找出课文中优美生动的语句，读一读，再抄写下来。",en:"Find beautiful and vivid sentences in the text, read them, and copy them down."}
      ],
      teachingPoints: [
        {cn:"学习作者抓住外形特点描写小动物的方法（羽毛、翅膀、尾巴）。",en:"Learn how the author describes animals by focusing on physical features (feathers, wings, tail)."},
        {cn:"体会\u201C赶集似的聚拢来\u201D等拟人化的写法，感受语言的生动。",en:"Appreciate personification like 'gathering like going to a fair' and feel the vividness of language."},
        {cn:"注意\u201C偶尔沾了一下水面\u201D中动作描写的精确。",en:"Notice the precision of action description in 'occasionally touching the water surface'."}
      ],
      parentTips: [
        {cn:"和孩子一起观察身边的燕子或其他鸟类，练习描写外形和动作。",en:"Observe swallows or other birds together and practice describing their appearance and movements."},
        {cn:"引导孩子积累文中优美词语，如\u201C波光粼粼\u201D\u201C光彩夺目\u201D等。",en:"Help your child accumulate beautiful phrases from the text, such as 'sparkling waves' and 'dazzling'."}
      ]
    },
    {
      id: 3, title: "荷花", titleEn: "Lotus Flowers",
      difficulty: 2,
      text: [
        "清早，我到公园去玩，一进门就闻到一阵清香。我赶紧往荷花池边跑去。",
        "荷花已经开了不少了。荷叶挨挨挤挤的，像一个个碧绿的大圆盘。白荷花在这些大圆盘之间冒出来。有的才展开两三片花瓣儿。有的花瓣儿全展开了，露出嫩黄色的小莲蓬。有的还是花骨朵儿，看起来饱胀得马上要破裂似的。",
        "这么多的白荷花，一朵有一朵的姿势。看看这一朵，很美；看看那一朵，也很美。如果把眼前的一池荷花看作一大幅活的画，那画家的本领可真了不起。",
        "我忽然觉得自己仿佛就是一朵荷花，穿着雪白的衣裳，站在阳光里。一阵微风吹过来，我就翩翩起舞，雪白的衣裳随风飘动。不光是我一朵，一池的荷花都在舞蹈。",
        "风过了，我停止了舞蹈，静静地站在那儿。蜻蜓飞过来，告诉我清早飞行的快乐。小鱼在脚下游过，告诉我昨夜做的好梦……",
        "过了好一会儿，我才记起我不是荷花，我是在看荷花呢。"
      ],
      textEn: [
        "Early in the morning, I went to the park to play. As soon as I entered, I smelled a wave of fresh fragrance. I hurried to the lotus pond.",
        "Quite a few lotus flowers had already bloomed. The lotus leaves crowded together, like big green discs. White lotus flowers poked up among these big discs. Some had only opened two or three petals. Some had fully opened, revealing the tender yellow seed pods. Some were still buds, looking so swollen they seemed about to burst.",
        "So many white lotus flowers, each in its own pose. This one is beautiful; that one is beautiful too. If you see this whole pond of lotus flowers as one big living painting, the painter's skill is truly remarkable.",
        "Suddenly I felt as if I were a lotus flower myself, wearing snow-white clothes, standing in the sunshine. A gentle breeze blew, and I danced gracefully, my white clothes swaying in the wind. Not just me alone — the whole pond of lotus flowers was dancing.",
        "When the wind stopped, I stopped dancing and stood quietly. A dragonfly flew over and told me the joy of flying in the early morning. Little fish swam by my feet and told me about their pleasant dreams last night...",
        "After quite a while, I remembered that I was not a lotus flower — I was watching the lotus flowers!"
      ],
      textPinyin: [
        "q\u012bng z\u01ceo\uff0c w\u01d2 d\u00e0o g\u014dng yu\u00e1n q\u00f9 w\u00e1n\uff0c y\u00ed j\u00ecn m\u00e9n ji\u00f9 w\u00e9n d\u00e0o y\u00ed zh\u00e8n q\u012bng xi\u0101ng\u3002 w\u01d2 g\u01cen j\u01d0n w\u01ceng h\u00e9 hu\u0101 ch\u00ed bi\u0101n p\u01ceo q\u00f9\u3002",
        "h\u00e9 hu\u0101 y\u01d0 j\u012bng k\u0101i le b\u00f9 sh\u01ceo le\u3002 h\u00e9 y\u00e8 \u0101i \u0101i j\u01d0 j\u01d0 de\uff0c xi\u00e0ng y\u00ed g\u00e8 g\u00e8 b\u00ec l\u01dc de d\u00e0 yu\u00e1n p\u00e1n\u3002 b\u00e1i h\u00e9 hu\u0101 z\u00e0i zh\u00e8 xi\u0113 d\u00e0 yu\u00e1n p\u00e1n zh\u012b ji\u0101n m\u00e0o ch\u016b l\u00e1i\u3002 y\u01d2u de c\u00e1i zh\u01cen k\u0101i li\u01ceng s\u0101n pi\u00e0n hu\u0101 b\u00e0n \u00e9r\u3002 y\u01d2u de hu\u0101 b\u00e0n \u00e9r qu\u00e1n zh\u01cen k\u0101i le\uff0c l\u00f9 ch\u016b n\u00e8n hu\u00e1ng s\u00e8 de xi\u01ceo li\u00e1n p\u00e9ng\u3002 y\u01d2u de h\u00e1i sh\u00ec hu\u0101 g\u016b du\u01d2 er\uff0c k\u00e0n q\u01d0 l\u00e1i b\u01ceo zh\u00e0ng d\u00e9 m\u01ce sh\u00e0ng y\u00e0o p\u00f2 li\u00e8 sh\u00ec de\u3002",
        "zh\u00e8 me du\u014d de b\u00e1i h\u00e9 hu\u0101\uff0c y\u00ec du\u01d2 y\u01d2u y\u00ec du\u01d2 de z\u012b sh\u00ec\u3002 k\u00e0n k\u00e0n zh\u00e8 y\u00ec du\u01d2\uff0c h\u011bn m\u011bi\uff1b k\u00e0n k\u00e0n n\u00e0 y\u00ec du\u01d2\uff0c y\u011b h\u011bn m\u011bi\u3002 r\u00fa gu\u01d2 b\u01ce y\u01cen qi\u00e1n de y\u00ec ch\u00ed h\u00e9 hu\u0101 k\u00e0n zu\u00f2 y\u00ed d\u00e0 f\u00fa hu\u00f3 de hu\u00e0\uff0c n\u00e0 hu\u00e0 ji\u0101 de b\u011bn l\u01d0ng k\u011b zh\u0113n li\u01ceo b\u00f9 q\u01d0\u3002",
        "w\u01d2 h\u016b r\u00e1n ju\u00e9 de z\u00ec j\u01d0 f\u01ceng f\u00fa ji\u00f9 sh\u00ec y\u00ec du\u01d2 h\u00e9 hu\u0101\uff0c chu\u0101n zhe xu\u011b b\u00e1i de y\u012b shang\uff0c zh\u00e0n z\u00e0i y\u00e1ng gu\u0101ng l\u01d0\u3002 y\u00ed zh\u00e8n w\u0113i f\u0113ng chu\u012b gu\u00f2 l\u00e1i\uff0c w\u01d2 ji\u00f9 pi\u0101n pi\u0101n q\u01d0 w\u01d4\uff0c xu\u011b b\u00e1i de y\u012b shang su\u00ed f\u0113ng pi\u0101o d\u00f2ng\u3002 b\u00f9 gu\u0101ng sh\u00ec w\u01d2 y\u00ec du\u01d2\uff0c y\u00ec ch\u00ed de h\u00e9 hu\u0101 d\u014du z\u00e0i w\u01d4 d\u01ceo\u3002",
        "f\u0113ng gu\u00f2 le\uff0c w\u01d2 t\u00edng zh\u01d0 le w\u01d4 d\u01ceo\uff0c j\u00ecng j\u00ecng d\u00ec zh\u00e0n z\u00e0i n\u00e0 \u00e9r\u3002 q\u012bng t\u00edng f\u0113i gu\u00f2 l\u00e1i\uff0c g\u00e0o s\u00f9 w\u01d2 q\u012bng z\u01ceo f\u0113i x\u00edng de ku\u00e0i l\u00e8\u3002 xi\u01ceo y\u00fa z\u00e0i ji\u01ceo xi\u00e0 y\u00f3u gu\u00f2\uff0c g\u00e0o s\u00f9 w\u01d2 zu\u00f3 y\u00e8 zu\u00f2 de h\u01ceo m\u00e8ng\u2026\u2026",
        "gu\u00f2 le h\u01ceo y\u00ed hu\u00ec er\uff0c w\u01d2 c\u00e1i j\u00ec q\u01d0 w\u01d2 b\u00fa sh\u00ec h\u00e9 hu\u0101\uff0c w\u01d2 sh\u00ec z\u00e0i k\u00e0n h\u00e9 hu\u0101 n\u00ed\u3002"
      ],
      recognizeChars: ["挨","蓬","胀","势","翩","蹈"],
      writeChars: ["瓣","蓬","胀","裂","姿","势","仿","佛","随","蹈","止"],
      vocabWords: [
        {word:'花瓣',pinyin:'huā bàn',en:'petal',sentence:'有的才展开两三片花瓣儿。',sentenceEn:'Some had only opened two or three petals.'},
        {word:'莲蓬',pinyin:'lián peng',en:'lotus seed pod',sentence:'露出嫩黄色的小莲蓬。',sentenceEn:'Revealing the tender yellow seed pods.'},
        {word:'饱胀',pinyin:'bǎo zhàng',en:'swollen; plump',sentence:'饱胀得马上要破裂似的。',sentenceEn:'So swollen it seemed about to burst.'},
        {word:'翩翩起舞',pinyin:'piān piān qǐ wǔ',en:'dance gracefully',sentence:'我就翩翩起舞。',sentenceEn:'I danced gracefully.'},
        {word:'姿势',pinyin:'zī shì',en:'pose; posture',sentence:'一朵有一朵的姿势。',sentenceEn:'Each in its own pose.'}
      ],
      footnotes: [
        {term:"\u82b1\u74e3", termEn:"petal", definition:"\u3010hu\u0101 b\u00e0n\u3011petal\u3002", definitionEn:"petal"},
        {term:"\u83b2\u84ec", termEn:"lotus seed pod", definition:"\u3010li\u00e1n peng\u3011lotus seed pod\u3002", definitionEn:"lotus seed pod"},
        {term:"\u9971\u80c0", termEn:"swollen; plump", definition:"\u3010b\u01ceo zh\u00e0ng\u3011swollen; plump\u3002", definitionEn:"swollen; plump"},
        {term:"\u7fe9\u7fe9\u8d77\u821e", termEn:"dance gracefully", definition:"\u3010pi\u0101n pi\u0101n q\u01d0 w\u01d4\u3011dance gracefully\u3002", definitionEn:"dance gracefully"},
        {term:"\u59ff\u52bf", termEn:"pose; posture", definition:"\u3010z\u012b sh\u00ec\u3011pose; posture\u3002", definitionEn:"pose; posture"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'有的……有的……有的……',pointEn:'some...some...some...',example:'有的才展开两三片花瓣儿。有的花瓣儿全展开了。有的还是花骨朵儿。',exampleEn:'Some opened two or three petals. Some fully opened. Some were still buds.',explanation:'排比句式描写事物的不同状态',explanationEn:'Parallel structure to describe different states'}
      ],
      exercises: [
        {type:"read",cn:"有感情地朗读课文，注意读好\u201C花瓣儿\u201D\u201C花骨朵儿\u201D\u201C莲蓬\u201D\u201C衣裳\u201D等词语。背诵第2～4自然段。",en:"Read with feeling, paying attention to words like 'petals', 'buds', 'seed pods', 'clothes'. Recite paragraphs 2-4."},
        {type:"think",cn:"默读课文，说说你从哪些地方体会到了这一池荷花是\u201C一大幅活的画\u201D。",en:"Read silently and explain where you can feel that this pond of lotus flowers is 'one big living painting'."},
        {type:"write",cn:"小练笔：第2自然段写出了荷花不同的样子，仿照着写一种你喜欢的植物。",en:"Mini writing: Paragraph 2 describes different lotus forms. Write about a plant you like in a similar way."}
      ],
      teachingPoints: [
        {cn:"学习\u201C有的……有的……有的……\u201D的排比句式来描写事物的不同状态。",en:"Learn the parallel structure 'some...some...some...' to describe different states of things."},
        {cn:"体会作者想象自己变成荷花的写法，感受人与自然融为一体的美好。",en:"Appreciate the author imagining becoming a lotus flower, feeling the beauty of unity with nature."},
        {cn:"注意\u201C挨挨挤挤\u201D\u201C冒\u201D等词的精确表达。",en:"Note the precise use of words like 'crowding' and 'poking up'."}
      ],
      parentTips: [
        {cn:"带孩子观察荷花或其他花卉，引导用\u201C有的……有的……\u201D句式练习说话。",en:"Take your child to observe lotus or other flowers and practice using 'some...some...' sentence patterns."},
        {cn:"鼓励孩子写仿写片段，重点练习描写植物不同形态。",en:"Encourage your child to write imitative paragraphs describing different forms of plants."}
      ]
    },
    {
      id: 4, title: "昆虫备忘录", titleEn: "Insect Memo",
      difficulty: 2,
      isSelfRead: true,
      text: [
        "复眼",
        "我从一本书上知道蜻蜓有复眼，从那以后，就一直在琢磨复眼是怎么回事。\u201C复眼\u201D，想必是好多小眼睛合成一个大眼睛。那它怎么看东西呢？是每个小眼睛都看到一个小形象，合成一个大形象？还是每个小眼睛看到形象的一部分，合成一个完整的形象？总是琢磨不出来。",
        "凡是有复眼的昆虫，视觉都很灵敏。蜻蜓就有复眼，苍蝇也有。你走近蜻蜓和苍蝇，还有一段距离，它们就发现了，噌——飞了。",
        "花大姐",
        "瓢虫款款地落下来了，折好它的黑绸衬裙——膜翅，顺顺溜溜；收拢硬翅，严丝合缝。",
        "北京人把瓢虫叫作\u201C花大姐\u201D，好名字！瓢虫，朱红的、瓷漆似的硬翅，上有小圆点，特别漂亮。圆点是有定数的，不能瞎点。小圆点，叫作\u201C星\u201D，有七星瓢虫、十四星瓢虫……星点不同。有的瓢虫吃蚜虫，是益虫；有的瓢虫吃马铃薯嫩叶，是害虫。",
        "独角仙",
        "独角仙，在甲虫里可能算是最大的，从头到脚，约有两寸。它的壳多为深色，挺硬的，头部尖端有一只犀牛一样的角。这家伙，是昆虫里的霸王。",
        "蚂蚱",
        "河北人把尖头绿蚂蚱叫作\u201C挂大扁儿\u201D。尖头蚂蚱是国画家很喜欢画的。蚂蚱飞起来会咯咯作响，不知道它是怎么弄出这种声音的。蚂蚱的膜翅是淡淡的桃红色的，非常好看。"
      ],
      textEn: [
        "Compound Eyes",
        "I learned from a book that dragonflies have compound eyes, and from then on I kept wondering what compound eyes are all about. 'Compound eyes' must be many small eyes combined into one big eye. But how does it see? Does each small eye see a small image that combines into a big one? Or does each small eye see part of an image, forming a complete one? I could never figure it out.",
        "All insects with compound eyes have very keen vision. Dragonflies have compound eyes, and so do flies. When you approach a dragonfly or fly, while still some distance away, they detect you and — whoosh — fly away.",
        "Flower Lady",
        "The ladybug lands gracefully, folding its black silk petticoat — the membrane wings — smooth and neat; closing its hard wings, fitting perfectly.",
        "In Beijing, people call ladybugs 'Flower Ladies' — what a nice name! Ladybugs have vermilion, lacquer-like hard wings with little round dots, very pretty. The dots have set numbers — they can't just be random. The dots are called 'stars': seven-star ladybug, fourteen-star ladybug... Different star patterns. Some ladybugs eat aphids and are beneficial; others eat potato leaves and are pests.",
        "Rhinoceros Beetle",
        "The rhinoceros beetle is probably the biggest among beetles, about two inches from head to toe. Its shell is mostly dark-colored and quite hard, with a rhinoceros-like horn at the tip of its head. This fellow is the king of the insect world.",
        "Grasshopper",
        "In Hebei, people call the pointed-head green grasshopper 'hanging flat one'. Artists who paint insects are fond of painting grasshoppers. When grasshoppers fly, they make a clicking sound — who knows how they produce it. The grasshopper's membrane wings are a light peach-pink, very beautiful."
      ],
      textPinyin: [
        "f\u00f9 y\u01cen",
        "w\u01d2 c\u00f3ng y\u00ec b\u011bn sh\u016b sh\u00e0ng zh\u012b d\u00e0o q\u012bng t\u00edng y\u01d2u f\u00f9 y\u01cen\uff0c c\u00f3ng n\u00e0 y\u01d0 h\u00f2u\uff0c ji\u00f9 y\u00ec zh\u00ed z\u00e0i zhu\u00f3 m\u00f3 f\u00f9 y\u01cen sh\u00ec z\u011bn me hu\u00ed sh\u00ec\u3002 \u201c f\u00f9 y\u01cen \u201d\uff0c xi\u01ceng b\u00ec sh\u00ec h\u01ceo du\u014d xi\u01ceo y\u01cen j\u012bng h\u00e9 ch\u00e9ng y\u00ed g\u00e8 d\u00e0 y\u01cen j\u012bng\u3002 n\u00e0 t\u0101 z\u011bn me k\u00e0n d\u014dng x\u012b ne\uff1f sh\u00ec m\u011bi g\u00e8 xi\u01ceo y\u01cen j\u012bng d\u014du k\u00e0n d\u00e0o y\u00ed g\u00e8 xi\u01ceo x\u00edng xi\u00e0ng\uff0c h\u00e9 ch\u00e9ng y\u00ed g\u00e8 d\u00e0 x\u00edng xi\u00e0ng\uff1f h\u00e1i sh\u00ec m\u011bi g\u00e8 xi\u01ceo y\u01cen j\u012bng k\u00e0n d\u00e0o x\u00edng xi\u00e0ng de y\u00ed b\u00f9 fen\uff0c h\u00e9 ch\u00e9ng y\u00ed g\u00e8 w\u00e1n zh\u011bng de x\u00edng xi\u00e0ng\uff1f z\u01d2ng sh\u00ec zhu\u00f3 m\u00f3 b\u00f9 ch\u016b l\u00e1i\u3002",
        "f\u00e1n sh\u00ec y\u01d2u f\u00f9 y\u01cen de k\u016bn ch\u00f3ng\uff0c sh\u00ec ju\u00e9 d\u014du h\u011bn l\u00edng m\u01d0n\u3002 q\u012bng t\u00edng ji\u00f9 y\u01d2u f\u00f9 y\u01cen\uff0c c\u0101ng y\u00edng y\u011b y\u01d2u\u3002 n\u01d0 z\u01d2u j\u00ecn q\u012bng t\u00edng h\u00e9 c\u0101ng y\u00edng\uff0c h\u00e1i y\u01d2u y\u00ed du\u00e0n j\u00f9 l\u00ed\uff0c t\u0101 men ji\u00f9 f\u0101 xi\u00e0n le\uff0c c\u0113ng\u2014\u2014 f\u0113i le\u3002",
        "hu\u0101 d\u00e0 ji\u011b",
        "pi\u00e1o ch\u00f3ng ku\u01cen ku\u01cen d\u00ec lu\u00f2 xi\u00e0 l\u00e1i le\uff0c zh\u00e9 h\u01ceo t\u0101 de h\u0113i ch\u00f3u ch\u00e8n q\u00fan\u2014\u2014 m\u00f3 ch\u00ec\uff0c sh\u00f9n sh\u00f9n li\u016b li\u016b\uff1b sh\u014du l\u01d2ng y\u00ecng ch\u00ec\uff0c y\u00e1n s\u012b h\u00e9 f\u00e8ng\u3002",
        "b\u011bi j\u012bng r\u00e9n b\u01ce pi\u00e1o ch\u00f3ng ji\u00e0o zu\u00f2 \u201c hu\u0101 d\u00e0 ji\u011b \u201d\uff0c h\u01ceo m\u00edng z\u00ec\uff01 pi\u00e1o ch\u00f3ng\uff0c zh\u016b h\u00f3ng de\u3001 c\u00ed q\u012b sh\u00ec de y\u00ecng ch\u00ec\uff0c sh\u00e0ng y\u01d2u xi\u01ceo yu\u00e1n di\u01cen\uff0c t\u00e8 bi\u00e9 pi\u0101o li\u00e0ng\u3002 yu\u00e1n di\u01cen sh\u00ec y\u01d2u d\u00ecng sh\u00f9 de\uff0c b\u00f9 n\u00e9ng xi\u0101 di\u01cen\u3002 xi\u01ceo yu\u00e1n di\u01cen\uff0c ji\u00e0o zu\u00f2 \u201c x\u012bng \u201d\uff0c y\u01d2u q\u012b x\u012bng pi\u00e1o ch\u00f3ng\u3001 sh\u00ed s\u00ec x\u012bng pi\u00e1o ch\u00f3ng\u2026\u2026 x\u012bng di\u01cen b\u00f9 t\u00f3ng\u3002 y\u01d2u de pi\u00e1o ch\u00f3ng ch\u012b y\u00e1 ch\u00f3ng\uff0c sh\u00ec y\u00ec ch\u00f3ng\uff1b y\u01d2u de pi\u00e1o ch\u00f3ng ch\u012b m\u01ce l\u00edng sh\u01d4 n\u00e8n y\u00e8\uff0c sh\u00ec h\u00e0i ch\u00f3ng\u3002",
        "d\u00fa ji\u01ceo xi\u0101n",
        "d\u00fa ji\u01ceo xi\u0101n\uff0c z\u00e0i ji\u01ce ch\u00f3ng l\u01d0 k\u011b n\u00e9ng su\u00e0n sh\u00ec zu\u00ec d\u00e0 de\uff0c c\u00f3ng t\u00f3u d\u00e0o ji\u01ceo\uff0c yu\u0113 y\u01d2u li\u01ceng c\u00f9n\u3002 t\u0101 de k\u00e9 du\u014d w\u00e8i sh\u0113n s\u00e8\uff0c t\u01d0ng y\u00ecng de\uff0c t\u00f3u b\u00f9 ji\u0101n du\u0101n y\u01d2u y\u00ec zh\u012b x\u012b ni\u00fa y\u00ed y\u00e0ng de ji\u01ceo\u3002 zh\u00e8 ji\u0101 huo\uff0c sh\u00ec k\u016bn ch\u00f3ng l\u01d0 de b\u00e0 w\u00e1ng\u3002",
        "m\u00e0 zha",
        "h\u00e9 b\u011bi r\u00e9n b\u01ce ji\u0101n t\u00f3u l\u01dc m\u00e0 zha ji\u00e0o zu\u00f2 \u201c gu\u00e0 d\u00e0 bi\u01cen \u00e9r \u201d\u3002 ji\u0101n t\u00f3u m\u00e0 zha sh\u00ec gu\u00f3 hu\u00e0 ji\u0101 h\u011bn x\u01d0 hu\u0101n hu\u00e0 de\u3002 m\u00e0 zha f\u0113i q\u01d0 l\u00e1i hu\u00ec g\u0113 g\u0113 zu\u00f2 xi\u01ceng\uff0c b\u00f9 zh\u012b d\u00e0o t\u0101 sh\u00ec z\u011bn me n\u00f2ng ch\u016b zh\u00e8 zh\u01d2ng sh\u0113ng y\u012bn de\u3002 m\u00e0 zha de m\u00f3 ch\u00ec sh\u00ec d\u00e0n d\u00e0n de t\u00e1o h\u00f3ng s\u00e8 de\uff0c f\u0113i ch\u00e1ng h\u01ceo k\u00e0n\u3002"
      ],
      recognizeChars: ["录","凡","距","款","绸","膜","瞎","益","约","蚂","斑"],
      vocabWords: [
        {word:'复眼',pinyin:'fù yǎn',en:'compound eyes',sentence:'蜻蜓有复眼。',sentenceEn:'Dragonflies have compound eyes.'},
        {word:'灵敏',pinyin:'líng mǐn',en:'keen; sensitive',sentence:'视觉都很灵敏。',sentenceEn:'Their vision is very keen.'},
        {word:'瓢虫',pinyin:'piáo chóng',en:'ladybug',sentence:'瓢虫款款地落下来了。',sentenceEn:'The ladybug lands gracefully.'},
        {word:'益虫',pinyin:'yì chóng',en:'beneficial insect',sentence:'有的瓢虫吃蚜虫，是益虫。',sentenceEn:'Some ladybugs eat aphids and are beneficial insects.'},
        {word:'独角仙',pinyin:'dú jiǎo xiān',en:'rhinoceros beetle',sentence:'独角仙是昆虫里的霸王。',sentenceEn:'The rhinoceros beetle is the king of insects.'}
      ],
      grammarPoints: [
        {point: "\u628a\u5b57\u53e5", pointEn: "b\u01ce-construction", example: "\u590d\u773c", exampleEn: "Compound Eyes", explanation: "\u7528\u201c\u628a\u201d\u5c06\u5bbe\u8bed\u63d0\u524d\uff0c\u5f3a\u8c03\u52a8\u4f5c\u5bf9\u5bf9\u8c61\u7684\u5f71\u54cd", explanationEn: "Moves the object before the verb using \"b\u01ce\" to emphasize the effect of the action"},
        {point: "\u603b\u5206\u7ed3\u6784", pointEn: "General-specific structure", example: "\u590d\u773c", exampleEn: "Compound Eyes", explanation: "\u5148\u603b\u8ff0\u518d\u5206\u8ff0\uff0c\u6216\u5148\u5206\u8ff0\u518d\u603b\u7ed3\uff0c\u4f7f\u6587\u7ae0\u6761\u7406\u6e05\u6670", explanationEn: "Start with overview then details, or vice versa, for clear organization"}
      ],
      footnotes: [
        {term:"\u590d\u773c", termEn:"compound eyes", definition:"\u3010f\u00f9 y\u01cen\u3011compound eyes\u3002", definitionEn:"compound eyes"},
        {term:"\u7075\u654f", termEn:"keen; sensitive", definition:"\u3010l\u00edng m\u01d0n\u3011keen; sensitive\u3002", definitionEn:"keen; sensitive"},
        {term:"\u74e2\u866b", termEn:"ladybug", definition:"\u3010pi\u00e1o ch\u00f3ng\u3011ladybug\u3002", definitionEn:"ladybug"},
        {term:"\u76ca\u866b", termEn:"beneficial insect", definition:"\u3010y\u00ec ch\u00f3ng\u3011beneficial insect\u3002", definitionEn:"beneficial insect"},
        {term:"\u72ec\u89d2\u4ed9", termEn:"rhinoceros beetle", definition:"\u3010d\u00fa ji\u01ceo xi\u0101n\u3011rhinoceros beetle\u3002", definitionEn:"rhinoceros beetle"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"默读课文，说说你最感兴趣的内容。",en:"Read silently and talk about the content that interests you most."},
        {type:"think",cn:"课文介绍了哪几种昆虫？它们各有什么特点？",en:"Which insects does the text introduce? What are their characteristics?"},
        {type:"extend",cn:"你还知道哪些有趣的昆虫？和同学交流。",en:"What other interesting insects do you know about? Share with classmates."}
      ],
      teachingPoints: [
        {cn:"学习作者用轻松幽默的语言介绍昆虫特点的写法。",en:"Learn how the author uses light, humorous language to introduce insect characteristics."},
        {cn:"注意文中\u201C严丝合缝\u201D\u201C款款地\u201D等生动的描写。",en:"Notice vivid descriptions like 'fitting perfectly' and 'gracefully' in the text."},
        {cn:"了解科普类课文的特点：用有趣的方式传达知识。",en:"Understand science writing features: conveying knowledge in interesting ways."}
      ],
      parentTips: [
        {cn:"带孩子到户外观察昆虫，鼓励做观察笔记。",en:"Take your child outdoors to observe insects and encourage keeping observation notes."},
        {cn:"推荐阅读法布尔的《昆虫记》，培养观察自然的兴趣。",en:"Recommend reading Fabre's 'Book of Insects' to cultivate interest in observing nature."}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"忆江南\n[唐] 白居易\n江南好，风景旧曾谙。日出江花红胜火，春来江水绿如蓝。能不忆江南？",en:"Remembering Jiangnan\n[Tang] Bai Juyi\nJiangnan is wonderful, its scenery I knew so well. At sunrise, river flowers redder than fire; in spring, river waters green as indigo. How can I not remember Jiangnan?"}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"读一读，说说括号中的哪个词语用在句子里更合适：荡漾/飘荡、轻巧/轻快、灵巧/灵敏。照样子写一种小动物的外形特点。",en:"Read and choose the more suitable word from the brackets. Write the physical features of a small animal following the example."}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"我的植物朋友——选择一种植物，走近它，了解它。借助记录卡（名称、样子、颜色、气味），写一写你的植物朋友。",en:"My Plant Friend — Choose a plant, get to know it. Use a record card (name, appearance, color, smell) to write about your plant friend."},modelEssays:[
      {title:"我的植物朋友——含羞草",titleEn:"My Plant Friend — Mimosa",level:"基础",
      structure:[
        {cn:"开头：介绍植物名称和在哪里见到的",en:"Opening: Introduce the plant name and where you found it"},
        {cn:"中间：描写样子、颜色、有趣特点",en:"Body: Describe appearance, color, and interesting features"},
        {cn:"结尾：表达喜爱之情",en:"Ending: Express your fondness"}
      ],
      cn:"我家阳台上有一盆含羞草，是妈妈从花市买回来的。\n含羞草的叶子小小的，一排排整齐地长在细细的茎上，像一把把小扇子。它的颜色是嫩绿色的，看起来很清新。最有趣的是，只要用手轻轻一碰，它的叶子就会慢慢合拢起来，像一个害羞的小姑娘把脸藏了起来。过一会儿，叶子又会慢慢张开。\n我非常喜欢我的含羞草，每天都要去看看它，和它打个招呼。",
      en:"On our balcony, there is a pot of mimosa that Mom bought from the flower market.\nThe mimosa's leaves are tiny, growing neatly in rows on thin stems, like little fans. They are tender green and look very fresh. The most interesting thing is that if you touch it gently, its leaves slowly fold together, like a shy little girl hiding her face. After a while, the leaves slowly open again.\nI really love my mimosa. Every day I go to see it and say hello.",
      notes:"这篇范文结构简单清晰：先写来源，再写外形特点，最后写感情。用了比喻（像小扇子、像害羞的小姑娘），让描写更生动。",
      notesEn:"This essay has a simple, clear structure: origin, appearance, then feelings. It uses similes (like little fans, like a shy girl) to make the description vivid."},
      {title:"我的植物朋友——向日葵",titleEn:"My Plant Friend — Sunflower",level:"提高",
      structure:[
        {cn:"开头：用问句引起兴趣",en:"Opening: Use a question to spark interest"},
        {cn:"中间：按生长过程描写，用多种感官",en:"Body: Describe the growth process using multiple senses"},
        {cn:"结尾：写从植物身上得到的启发",en:"Ending: Share the inspiration gained from the plant"}
      ],
      cn:"你见过向日葵吗？它可是我最好的植物朋友！\n春天的时候，奶奶在院子里种下了几颗向日葵种子。没过多久，嫩绿的小芽就从土里钻了出来。渐渐地，它长高了，茎又粗又壮，上面还有细细的绒毛，摸起来毛茸茸的。它的叶子像一把把大蒲扇，翠绿翠绿的。到了夏天，向日葵终于开花了！金灿灿的花瓣围成一圈，中间是密密麻麻的花盘，远远望去就像一个个小太阳。最神奇的是，它的花盘总是朝着太阳的方向，早上朝东，傍晚朝西。\n我喜欢向日葵，它教会我要像它一样，永远朝着光明的方向努力生长。",
      en:"Have you ever seen a sunflower? It's my best plant friend!\nIn spring, Grandma planted a few sunflower seeds in the yard. Before long, tender green sprouts poked through the soil. Gradually, they grew tall, with thick, sturdy stems covered in fine fuzz — fuzzy to the touch. The leaves were like big palm-leaf fans, bright green. In summer, the sunflowers finally bloomed! Golden petals formed a circle around the dense flower disk, looking like little suns from afar. The most amazing thing is that the flower disk always faces the sun — east in the morning, west in the evening.\nI love sunflowers. They taught me to always grow toward the light, just like them.",
      notes:"这篇范文按时间顺序（春天种→长高→夏天开花）描写，层次清晰。运用了多种感官：视觉（金灿灿）、触觉（毛茸茸），还用了比喻（像小太阳、像蒲扇）。结尾有启发，提升了主题。",
      notesEn:"This essay follows chronological order (planting in spring → growing → blooming in summer), with clear layers. It uses multiple senses: sight (golden), touch (fuzzy), and similes (like little suns, like fans). The ending offers insight, elevating the theme."},
      {title:"我的植物朋友——桂花树",titleEn:"My Plant Friend — Osmanthus Tree",level:"拓展",
      structure:[
        {cn:"开头：用优美的环境描写引出植物",en:"Opening: Introduce the plant through a beautiful setting"},
        {cn:"中间：分层描写外形和香味，穿插故事",en:"Body: Describe appearance and fragrance in layers, weaving in a story"},
        {cn:"过渡：用转折增加层次",en:"Transition: Use contrast to add depth"},
        {cn:"结尾：借物抒情，表达深层感受",en:"Ending: Express deeper feelings through the plant"}
      ],
      cn:"每年秋天，我们学校的操场旁边，总会飘来一阵阵甜甜的香味。循着香味走过去，就能看见那棵高大的桂花树。\n桂花树的树干粗壮有力，像一位挺拔的卫士守护着操场。它的叶子一年四季都是翠绿的，椭圆形的叶片密密层层，像给大树穿上了一件厚厚的绿衣裳。到了金秋十月，一簇簇米粒大小的桂花藏在叶子中间，金黄金黄的，不仔细看还真找不到呢。虽然花朵很小，可是香味却浓得很，整个校园都沉浸在这甜蜜的花香里。\n有一次下课后，我和好朋友在桂花树下玩。一阵风吹过，金色的桂花纷纷飘落，像下了一场\u201C桂花雨\u201D。我们张开双手去接，花瓣落在手心里，凉凉的、软软的。好朋友说：\u201C要是能把这些桂花做成桂花糕就好了！\u201D我们都笑了。\n我爱这棵桂花树，它虽然没有玫瑰的艳丽，没有牡丹的高贵，却用小小的花朵给我们带来了最美的秋天。",
      en:"Every autumn, a sweet fragrance drifts from beside our school playground. Following the scent, you find that tall osmanthus tree.\nThe osmanthus tree's trunk is thick and strong, standing like a stalwart guard protecting the playground. Its leaves stay green all year round — oval leaves layered densely, as if dressing the tree in a thick green coat. In golden October, clusters of tiny rice-grain-sized osmanthus blossoms hide among the leaves, bright golden, hard to spot unless you look carefully. Though the flowers are tiny, their fragrance is incredibly rich, bathing the entire campus in sweet perfume.\nOnce after class, my friend and I played under the osmanthus tree. A gust of wind blew, and golden osmanthus petals drifted down like a \u201Cosmanthus rain.\u201D We spread our hands to catch them — the petals felt cool and soft in our palms. My friend said, \u201CWouldn\u2019t it be wonderful to make osmanthus cake with these!\u201D We both laughed.\nI love this osmanthus tree. It may not have the rose\u2019s beauty or the peony\u2019s elegance, but with its tiny blossoms, it brings us the most beautiful autumn.",
      notes:"这篇范文综合运用了多种写作技巧：比喻（像卫士、像桂花雨）、拟人、对比（没有玫瑰的艳丽……却……）。穿插了一个小故事，让文章更有趣味。结尾用对比手法借物抒情，主题深刻。按\u201C远看→近看→特写→故事→感受\u201D的顺序，层次丰富。",
      notesEn:"This essay combines multiple writing techniques: simile (like a guard, like osmanthus rain), personification, and contrast (no rose's beauty...yet...). A short anecdote is woven in for interest. The ending uses contrast to express feelings through the plant, deepening the theme. The order of far view → close view → close-up → story → feelings creates rich layers."}
    ]}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 2 — 寓言 Fables (Lessons 5-8)        */
/* ═══════════════════════════════════════════ */
{
  id: 2, title: "寓言", titleEn: "Fables",
  difficulty: 2,
  type: "kewen",
  lessons: [
    {
      id: 5, title: "守株待兔", titleEn: "Waiting for a Rabbit by the Stump",
      difficulty: 2,
      text: [
        "宋人有耕者。田中有株。兔走触株，折颈而死。因释其耒而守株，冀复得兔。兔不可复得，而身为宋国笑。",
        "注释：本文选自《韩非子·五蠹》。株——树桩。走——跑。因——于是。释——放下。耒——古代用来耕田的一种农具。冀——希望。"
      ],
      textEn: [
        "A man of Song was plowing his field. In the field there was a tree stump. A rabbit ran into the stump, broke its neck, and died. The man then set aside his plow and waited by the stump, hoping to get another rabbit. But no more rabbits came, and he became the laughingstock of the state of Song.",
        "Notes: From 'Han Feizi'. Stump — tree stump. Ran — ran (classical Chinese). Thus — thereupon. Set aside — put down. Plow — an ancient farming tool. Hoped — wished."
      ],
      textPinyin: [
        "s\u00f2ng r\u00e9n y\u01d2u g\u0113ng zh\u011b\u3002 ti\u00e1n zh\u014dng y\u01d2u zh\u016b\u3002 t\u00f9 z\u01d2u ch\u00f9 zh\u016b\uff0c zh\u00e9 j\u01d0ng \u00e9r s\u01d0\u3002 y\u012bn sh\u00ec q\u00ed l\u011bi \u00e9r sh\u01d2u zh\u016b\uff0c j\u00ec f\u00f9 d\u00e9 t\u00f9\u3002 t\u00f9 b\u00f9 k\u011b f\u00f9 d\u00e9\uff0c \u00e9r sh\u0113n w\u00e8i s\u00f2ng gu\u00f3 xi\u00e0o\u3002",
        "zh\u00f9 sh\u00ec\uff1a b\u011bn w\u00e9n xu\u01cen z\u00ec\u300ah\u00e1n f\u0113i z\u01d0\u00b7 w\u01d4 d\u00f9\u300b\u3002 zh\u016b\u2014\u2014 sh\u00f9 zhu\u0101ng\u3002 z\u01d2u\u2014\u2014 p\u01ceo\u3002 y\u012bn\u2014\u2014 y\u00fa sh\u00ec\u3002 sh\u00ec\u2014\u2014 f\u00e0ng xi\u00e0\u3002 l\u011bi\u2014\u2014 g\u01d4 d\u00e0i y\u00f2ng l\u00e1i g\u0113ng ti\u00e1n de y\u00ec zh\u01d2ng n\u00f3ng j\u00f9\u3002 j\u00ec\u2014\u2014 x\u012b w\u00e0ng\u3002"
      ],
      recognizeChars: ["宋","耕","释","冀"],
      writeChars: ["守","株","待","宋","耕","触","颈","释","其"],
      vocabWords: [
        {word:'耕者',pinyin:'gēng zhě',en:'farmer',sentence:'宋人有耕者。',sentenceEn:'A man of Song was a farmer.'},
        {word:'触',pinyin:'chù',en:'bump into',sentence:'兔走触株。',sentenceEn:'A rabbit ran into the stump.'},
        {word:'释',pinyin:'shì',en:'release; let go',sentence:'因释其耒而守株。',sentenceEn:'So he released his plow and waited by the stump.'},
        {word:'耒',pinyin:'lěi',en:'plow',sentence:'释其耒而守株。',sentenceEn:'He let go of his plow and guarded the stump.'},
        {word:'笑',pinyin:'xiào',en:'laugh at',sentence:'而身为宋国笑。',sentenceEn:'And he became the laughingstock of Song.'}
      ],
      footnotes: [
        {term:"\u8015\u8005", termEn:"farmer", definition:"\u3010g\u0113ng zh\u011b\u3011farmer\u3002", definitionEn:"farmer"},
        {term:"\u89e6", termEn:"bump into", definition:"\u3010ch\u00f9\u3011bump into\u3002", definitionEn:"bump into"},
        {term:"\u91ca", termEn:"release; let go", definition:"\u3010sh\u00ec\u3011release; let go\u3002", definitionEn:"release; let go"},
        {term:"\u8012", termEn:"plow", definition:"\u3010l\u011bi\u3011plow\u3002", definitionEn:"plow"},
        {term:"\u7b11", termEn:"laugh at", definition:"\u3010xi\u00e0o\u3011laugh at\u3002", definitionEn:"laugh at"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'文言文寓言',pointEn:'wén yán wén yù yán',example:'classical Chinese fable',exampleEn:'因释其耒而守株，冀复得兔。',explanation:'So he abandoned his plow and guarded the stump, hoping to get another rabbit.',explanationEn:'用简短文言讲道理，一词多义'}
      ],
      exercises: [
        {type:"read",cn:"把课文读通顺，注意读好\u201C因释其耒而守株\u201D。背诵课文。",en:"Read the text smoothly, paying attention to 'thus he set aside his plow and waited by the stump'. Recite the text."},
        {type:"think",cn:"借助注释读懂课文，说说那个农夫为什么会被宋国人笑话。",en:"Use the notes to understand the text. Explain why the farmer was laughed at by the people of Song."},
        {type:"extend",cn:"读读\u201C阅读链接\u201D——《南辕北辙》，和同学交流：故事中的坐车人错在哪里？",en:"Read the linked text 'Going South by Driving North'. Discuss: What was wrong with the carriage rider?"}
      ],
      teachingPoints: [
        {cn:"这是一篇文言文寓言，注意理解每个字的含义，借助注释读懂原文。",en:"This is a classical Chinese fable. Understand each character's meaning using the annotations."},
        {cn:"寓言的道理：不能存有侥幸心理，不劳而获是不可能的。",en:"The moral: Don't rely on luck; getting something for nothing is impossible."},
        {cn:"学习文言文中的古今异义词：\u201C走\u201D古义是\u201C跑\u201D，今义是\u201C行走\u201D。",en:"Learn words with different ancient and modern meanings: 'zou' meant 'run' in classical Chinese, now means 'walk'."}
      ],
      parentTips: [
        {cn:"帮助孩子理解文言文，逐字翻译后再理解整体意思。",en:"Help your child understand classical Chinese by translating character by character, then grasping the overall meaning."},
        {cn:"引导孩子联系生活实际，说说\u201C守株待兔\u201D的道理。",en:"Guide your child to connect the moral of 'waiting by the stump' to real life."}
      ]
    },
    {
      id: 6, title: "陶罐和铁罐", titleEn: "The Clay Pot and the Iron Pot",
      difficulty: 2,
      text: [
        "国王的橱柜里有两个罐子，一个是陶的，一个是铁的。",
        "骄傲的铁罐看不起陶罐，常常奚落它。",
        "\u201C你敢碰我吗，陶罐子！\u201D铁罐傲慢地问。\u201C不敢，铁罐兄弟。\u201D陶罐谦虚地回答。",
        "\u201C我就知道你不敢，懦弱的东西！\u201D铁罐说，带着更加轻蔑的神气。",
        "\u201C我确实不敢碰你，但并不是懦弱。\u201D陶罐争辩说，\u201C我们生来就是盛东西的，并不是来互相碰撞的。说到盛东西，我不见得就比你差。再说……\u201D",
        "\u201C住嘴！\u201D铁罐恼怒了，\u201C你怎么敢和我相提并论！你等着吧，要不了几天，你就会破成碎片，我却永远在这里，什么也不怕。\u201D",
        "\u201C何必这样说呢？\u201D陶罐说，\u201C我们还是和睦相处吧，有什么可吵的呢！\u201D",
        "\u201C和你在一起，我感到羞耻，你算什么东西！\u201D铁罐说，\u201C走着瞧吧，总有一天，我要把你碰成碎片！\u201D陶罐不再理会铁罐。",
        "时间在流逝，世界上发生了许多事情。王朝覆灭了，宫殿倒塌了，两个罐子遗落在荒凉的废墟上，上面覆盖了厚厚的尘土。",
        "许多年过去了。有一天，人们来到这里，掘开厚厚的堆积物，发现了那个陶罐。",
        "\u201C哟，这里有一个罐子！\u201D一个人惊讶地说。\u201C真的，一个陶罐！\u201D其他的人都高兴地叫起来。",
        "捧起陶罐，倒掉里面的泥土，清理干净，它还是那样光洁，朴素，美观。",
        "\u201C多美的陶罐！\u201D一个人说，\u201C小心点儿，千万别把它碰坏了，这是古代的东西，很有价值的。\u201D",
        "\u201C谢谢你们！\u201D陶罐兴奋地说，\u201C我的兄弟铁罐就在我旁边，请你们把它也掘出来吧，它一定闷得不行了。\u201D",
        "人们立即动手，翻来覆去，把土都掘遍了，但是，连铁罐的影子也没见到。"
      ],
      textEn: [
        "In the king's cupboard there were two pots — one made of clay, one made of iron.",
        "The proud iron pot looked down on the clay pot and often mocked it.",
        "\u201CDo you dare bump into me, clay pot!\u201D the iron pot asked arrogantly. \u201CI wouldn't dare, brother iron pot,\u201D the clay pot replied modestly.",
        "\u201CI knew you wouldn't dare, you weakling!\u201D the iron pot said with even more contempt.",
        "\u201CI truly wouldn't dare bump into you, but that doesn't make me weak,\u201D the clay pot argued. \u201CWe were made to hold things, not to bump into each other. When it comes to holding things, I'm not necessarily worse than you. Besides...\u201D",
        "\u201CShut up!\u201D the iron pot raged. \u201CHow dare you compare yourself to me! Just wait — in a few days you'll break into pieces, but I'll be here forever, afraid of nothing.\u201D",
        "\u201CWhy talk like that?\u201D the clay pot said. \u201CLet's just live in harmony. What is there to argue about?\u201D",
        "\u201CBeing with you makes me feel ashamed. What kind of thing are you!\u201D the iron pot said. \u201CJust wait and see — someday I'll smash you to pieces!\u201D The clay pot paid no more attention to the iron pot.",
        "Time passed, and many things happened in the world. Dynasties fell, palaces crumbled, and the two pots were left on desolate ruins, covered by thick layers of dust.",
        "Many years later, people came to this place and dug through the thick deposits, discovering the clay pot.",
        "\u201COh, there's a pot here!\u201D one person exclaimed in surprise. \u201CReally, a clay pot!\u201D the others called out happily.",
        "They lifted the clay pot, poured out the dirt inside, and cleaned it. It was still just as smooth, simple, and beautiful as before.",
        "\u201CWhat a beautiful clay pot!\u201D someone said. \u201CBe careful — don't damage it. It's from ancient times, very valuable.\u201D",
        "\u201CThank you!\u201D the clay pot said excitedly. \u201CMy brother the iron pot is right beside me. Please dig it out too — it must be bored stiff.\u201D",
        "People immediately set to work, turning the soil over and over, digging everywhere, but they couldn't find even a trace of the iron pot."
      ],
      textPinyin: [
        "gu\u00f3 w\u00e1ng de ch\u00fa gu\u00ec l\u01d0 y\u01d2u li\u01ceng g\u00e8 gu\u00e0n z\u01d0\uff0c y\u00ed g\u00e8 sh\u00ec t\u00e1o de\uff0c y\u00ed g\u00e8 sh\u00ec ti\u011b de\u3002",
        "ji\u0101o \u00e0o de ti\u011b gu\u00e0n k\u00e0n b\u00f9 q\u01d0 t\u00e1o gu\u00e0n\uff0c ch\u00e1ng ch\u00e1ng x\u012b lu\u00f2 t\u0101\u3002",
        "\u201c n\u01d0 g\u01cen p\u00e8ng w\u01d2 ma\uff0c t\u00e1o gu\u00e0n z\u01d0\uff01 \u201d ti\u011b gu\u00e0n \u00e0o m\u00e0n d\u00ec w\u00e8n\u3002 \u201c b\u00f9 g\u01cen\uff0c ti\u011b gu\u00e0n xi\u014dng d\u00ec\u3002 \u201d t\u00e1o gu\u00e0n qi\u0101n x\u016b d\u00ec hu\u00ed d\u00e1\u3002",
        "\u201c w\u01d2 ji\u00f9 zh\u012b d\u00e0o n\u01d0 b\u00f9 g\u01cen\uff0c nu\u00f2 ru\u00f2 de d\u014dng x\u012b\uff01 \u201d ti\u011b gu\u00e0n shu\u014d\uff0c d\u00e0i zhe g\u00e8ng ji\u0101 q\u012bng mi\u00e8 de sh\u00e9n q\u00ec\u3002",
        "\u201c w\u01d2 qu\u00e8 sh\u00ed b\u00f9 g\u01cen p\u00e8ng n\u01d0\uff0c d\u00e0n b\u00ecng b\u00fa sh\u00ec nu\u00f2 ru\u00f2\u3002 \u201d t\u00e1o gu\u00e0n zh\u0113ng bi\u00e0n shu\u014d\uff0c \u201c w\u01d2 men sh\u0113ng l\u00e1i ji\u00f9 sh\u00ec sh\u00e8ng d\u014dng x\u012b de\uff0c b\u00ecng b\u00fa sh\u00ec l\u00e1i h\u00f9 xi\u0101ng p\u00e8ng zhu\u00e0ng de\u3002 shu\u014d d\u00e0o sh\u00e8ng d\u014dng x\u012b\uff0c w\u01d2 b\u00fa ji\u00e0n d\u00e9 ji\u00f9 b\u01d0 n\u01d0 ch\u00e0\u3002 z\u00e0i shu\u014d\u2026\u2026 \u201d",
        "\u201c zh\u00f9 zu\u01d0\uff01 \u201d ti\u011b gu\u00e0n n\u01ceo n\u00f9 le\uff0c \u201c n\u01d0 z\u011bn me g\u01cen h\u00e9 w\u01d2 xi\u0101ng t\u00ed b\u00ecng l\u00f9n\uff01 n\u01d0 d\u011bng zhe ba\uff0c y\u00e0o b\u00f9 li\u01ceo j\u01d0 ti\u0101n\uff0c n\u01d0 ji\u00f9 hu\u00ec p\u00f2 ch\u00e9ng su\u00ec pi\u00e0n\uff0c w\u01d2 qu\u00e8 y\u01d2ng yu\u01cen z\u00e0i zh\u00e8 l\u01d0\uff0c sh\u00e9n me y\u011b b\u00fa p\u00e0\u3002 \u201d",
        "\u201c h\u00e9 b\u00ec zh\u00e8 y\u00e0ng shu\u014d ne\uff1f \u201d t\u00e1o gu\u00e0n shu\u014d\uff0c \u201c w\u01d2 men h\u00e1i sh\u00ec h\u00e9 m\u00f9 xi\u0101ng ch\u01d4 ba\uff0c y\u01d2u sh\u00e9n me k\u011b ch\u01ceo de ne\uff01 \u201d",
        "\u201c h\u00e9 n\u01d0 z\u00e0i y\u00ec q\u01d0\uff0c w\u01d2 g\u01cen d\u00e0o xi\u016b ch\u01d0\uff0c n\u01d0 su\u00e0n sh\u00e9n me d\u014dng x\u012b\uff01 \u201d ti\u011b gu\u00e0n shu\u014d\uff0c \u201c z\u01d2u zhe qi\u00e1o ba\uff0c z\u01d2ng y\u01d2u y\u00ec ti\u0101n\uff0c w\u01d2 y\u00e0o b\u01ce n\u01d0 p\u00e8ng ch\u00e9ng su\u00ec pi\u00e0n\uff01 \u201d t\u00e1o gu\u00e0n b\u00fa z\u00e0i l\u01d0 hu\u00ec ti\u011b gu\u00e0n\u3002",
        "sh\u00ed ji\u0101n z\u00e0i li\u00fa sh\u00ec\uff0c sh\u00ec ji\u00e8 sh\u00e0ng f\u0101 sh\u0113ng le x\u01d4 du\u014d sh\u00ec q\u00edng\u3002 w\u00e1ng ch\u00e1o f\u00f9 mi\u00e8 le\uff0c g\u014dng di\u00e0n d\u01ceo t\u0101 le\uff0c li\u01ceng g\u00e8 gu\u00e0n z\u01d0 y\u00ed lu\u00f2 z\u00e0i hu\u0101ng li\u00e1ng de f\u00e8i x\u016b sh\u00e0ng\uff0c sh\u00e0ng mi\u00e0n f\u00f9 g\u00e0i le h\u00f2u h\u00f2u de ch\u00e9n t\u01d4\u3002",
        "x\u01d4 du\u014d ni\u00e1n gu\u00f2 q\u00f9 le\u3002 y\u01d2u y\u00ec ti\u0101n\uff0c r\u00e9n men l\u00e1i d\u00e0o zh\u00e8 l\u01d0\uff0c ju\u00e9 k\u0101i h\u00f2u h\u00f2u de du\u012b j\u012b w\u00f9\uff0c f\u0101 xi\u00e0n le n\u00e0 ge t\u00e1o gu\u00e0n\u3002",
        "\u201c y\u014d\uff0c zh\u00e8 l\u01d0 y\u01d2u y\u00ed g\u00e8 gu\u00e0n z\u01d0\uff01 \u201d y\u00ed g\u00e8 r\u00e9n j\u012bng y\u00e0 d\u00ec shu\u014d\u3002 \u201c zh\u0113n de\uff0c y\u00ed g\u00e8 t\u00e1o gu\u00e0n\uff01 \u201d q\u00ed t\u0101 de r\u00e9n d\u014du g\u0101o x\u00ecng d\u00ec ji\u00e0o q\u01d0 l\u00e1i\u3002",
        "p\u011bng q\u01d0 t\u00e1o gu\u00e0n\uff0c d\u01ceo di\u00e0o l\u01d0 mi\u00e0n de n\u00ed t\u01d4\uff0c q\u012bng l\u01d0 g\u0101n j\u00ecng\uff0c t\u0101 h\u00e1i sh\u00ec n\u00e0 y\u00e0ng gu\u0101ng ji\u00e9\uff0c p\u01d4 s\u00f9\uff0c m\u011bi gu\u0101n\u3002",
        "\u201c du\u014d m\u011bi de t\u00e1o gu\u00e0n\uff01 \u201d y\u00ed g\u00e8 r\u00e9n shu\u014d\uff0c \u201c xi\u01ceo x\u012bn di\u01cen \u00e9r\uff0c qi\u0101n w\u00e0n bi\u00e9 b\u01ce t\u0101 p\u00e8ng hu\u00e0i le\uff0c zh\u00e8 sh\u00ec g\u01d4 d\u00e0i de d\u014dng x\u012b\uff0c h\u011bn y\u01d2u ji\u00e0 zh\u00ed de\u3002 \u201d",
        "\u201c xi\u00e8 xi\u00e8 n\u01d0 men\uff01 \u201d t\u00e1o gu\u00e0n x\u012bng f\u00e8n d\u00ec shu\u014d\uff0c \u201c w\u01d2 de xi\u014dng d\u00ec ti\u011b gu\u00e0n ji\u00f9 z\u00e0i w\u01d2 p\u00e1ng bi\u0101n\uff0c q\u01d0ng n\u01d0 men b\u01ce t\u0101 y\u011b ju\u00e9 ch\u016b l\u00e1i ba\uff0c t\u0101 y\u00ed d\u00ecng m\u0113n d\u00e9 b\u00f9 x\u00edng le\u3002 \u201d",
        "r\u00e9n men l\u00ec j\u00ed d\u00f2ng sh\u01d2u\uff0c f\u0101n l\u00e1i f\u00f9 q\u00f9\uff0c b\u01ce t\u01d4 d\u014du ju\u00e9 bi\u00e0n le\uff0c d\u00e0n sh\u00ec\uff0c li\u00e1n ti\u011b gu\u00e0n de y\u01d0ng zi y\u011b m\u00e9i ji\u00e0n d\u00e0o\u3002"
      ],
      recognizeChars: ["陶","罐","骄","谦","虚","懦","弱","恼","讶","代","价"],
      writeChars: ["骄","傲","谦","虚","懦","弱","提","尘","讶","捧","代","价"],
      vocabWords: [
        {word:'奚落',pinyin:'xī luò',en:'mock; ridicule',sentence:'铁罐常常奚落陶罐。',sentenceEn:'The iron pot often mocked the clay pot.'},
        {word:'谦虚',pinyin:'qiān xū',en:'modest; humble',sentence:'陶罐很谦虚。',sentenceEn:'The clay pot was very modest.'},
        {word:'傲慢',pinyin:'ào màn',en:'arrogant',sentence:'铁罐很傲慢。',sentenceEn:'The iron pot was very arrogant.'},
        {word:'懦弱',pinyin:'nuò ruò',en:'cowardly',sentence:'你这个懦弱的东西！',sentenceEn:'You cowardly thing!'},
        {word:'朴素',pinyin:'pǔ sù',en:'plain; simple',sentence:'陶罐依然那么朴素。',sentenceEn:'The clay pot remained plain and simple.'}
      ],
      footnotes: [
        {term:"\u595a\u843d", termEn:"mock; ridicule", definition:"\u3010x\u012b lu\u00f2\u3011mock; ridicule\u3002", definitionEn:"mock; ridicule"},
        {term:"\u8c26\u865a", termEn:"modest; humble", definition:"\u3010qi\u0101n x\u016b\u3011modest; humble\u3002", definitionEn:"modest; humble"},
        {term:"\u50b2\u6162", termEn:"arrogant", definition:"\u3010\u00e0o m\u00e0n\u3011arrogant\u3002", definitionEn:"arrogant"},
        {term:"\u61e6\u5f31", termEn:"cowardly", definition:"\u3010nu\u00f2 ru\u00f2\u3011cowardly\u3002", definitionEn:"cowardly"},
        {term:"\u6734\u7d20", termEn:"plain; simple", definition:"\u3010p\u01d4 s\u00f9\u3011plain; simple\u3002", definitionEn:"plain; simple"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'对比',pointEn:'duì bǐ',example:'contrast',exampleEn:'铁罐傲慢，陶罐谦虚。',explanation:'The iron pot was arrogant; the clay pot was modest.',explanationEn:'通过对比突出不同性格和结局'}
      ],
      exercises: [
        {type:"read",cn:"默读课文，说说陶罐和铁罐之间发生了什么故事。",en:"Read silently and describe what happened between the clay pot and the iron pot."},
        {type:"think",cn:"结合描写陶罐、铁罐神态和语言的语句，说说它们的性格有什么不同，再分角色朗读。",en:"Based on descriptions of their expressions and language, compare their personalities, then read with assigned roles."},
        {type:"discuss",cn:"从陶罐和铁罐不同的结局中，你明白了什么道理？",en:"What lesson did you learn from the different endings of the clay pot and the iron pot?"}
      ],
      teachingPoints: [
        {cn:"通过对比铁罐的傲慢和陶罐的谦虚，体会不同性格带来的不同结果。",en:"Through the contrast between the iron pot's arrogance and the clay pot's modesty, understand how different characters lead to different outcomes."},
        {cn:"学习通过语言和神态描写来表现人物性格。",en:"Learn to reveal character personality through dialogue and expression descriptions."},
        {cn:"寓言道理：每个人都有长处和短处，不能只看到自己的长处而看不起别人。",en:"Moral: Everyone has strengths and weaknesses; don't only see your own strengths and look down on others."}
      ],
      parentTips: [
        {cn:"和孩子分角色朗读，注意读出铁罐的傲慢和陶罐的谦和。",en:"Read with assigned roles, noting the iron pot's arrogance and the clay pot's gentleness."},
        {cn:"引导孩子思考：生活中有没有像铁罐那样的人？应该怎样对待别人？",en:"Guide your child to think: Are there people like the iron pot in life? How should we treat others?"}
      ]
    },
    {
      id: 7, title: "鹿角和鹿腿", titleEn: "The Deer's Antlers and Legs",
      difficulty: 2,
      text: [
        "丛林中，住着一只漂亮的鹿。",
        "有一天，鹿口渴了，找到一个池塘，痛痛快快地喝起水来。池水清清的，像一面镜子。鹿忽然发现了自己倒映在水中的影子：\u201C咦，这是我吗？\u201D",
        "鹿摆摆身子，水中的倒影也跟着摆动起来。他从来没有注意到自己是这么漂亮！他不着急离开了，对着池水欣赏自己的美丽：\u201C啊！我的身段多么匀称，我的角多么精美别致，好像两束美丽的珊瑚！\u201D",
        "一阵清风吹过，池水泛起了层层波纹。鹿忽然看到了自己的腿，不禁噘起了嘴，皱起了眉头：\u201C唉，这四条腿太细了，怎么配得上这两只美丽的角呢！\u201D",
        "鹿开始抱怨起自己的腿来。就在他没精打采地准备离开的时候，忽然听到远处传来一阵脚步声。他机灵地支起耳朵，不错，正是脚步声！鹿猛一回头，哎呀，一头狮子正悄悄地向自己逼近。",
        "鹿不敢犹豫，撒开长腿就跑。有力的长腿在灌木丛中蹦来跳去，不一会儿，就把凶猛的狮子远远地甩在了后面。",
        "就在狮子灰心丧气不想再追的时候，鹿的角却被树枝挂住了。狮子赶紧抓住这个机会，猛扑过来。眼看就要追上了，鹿用尽全身力气，使劲一扯，才把两只角从树枝中挣脱出来，然后又拼命向前奔去。这次，狮子再也没有追上。",
        "鹿跑到一条小溪边，停下脚步，一边喘气，一边休息。他叹了口气，说：\u201C两只美丽的角差点儿让我送了命，可四条难看的腿却让我狮口逃生！\u201D"
      ],
      textEn: [
        "In the jungle lived a beautiful deer.",
        "One day, the deer was thirsty and found a pond, drinking water happily. The pond was clear as a mirror. The deer suddenly noticed his reflection in the water: \u201CHey, is that me?\u201D",
        "The deer swayed his body, and the reflection swayed too. He had never noticed how beautiful he was! He was in no hurry to leave, admiring his beauty in the water: \u201CAh! How well-proportioned my body is, how exquisite and elegant my antlers are — like two beautiful branches of coral!\u201D",
        "A breeze blew, rippling the pond. The deer suddenly noticed his legs and couldn't help pouting and frowning: \u201CUgh, these four legs are too thin. How can they match these two beautiful antlers!\u201D",
        "The deer began complaining about his legs. Just as he was listlessly preparing to leave, he suddenly heard footsteps from afar. He pricked up his ears alertly — yes, footsteps! The deer turned around sharply — oh no, a lion was quietly closing in!",
        "The deer didn't dare hesitate and broke into a run. His powerful long legs bounded through the bushes, and before long he had left the fierce lion far behind.",
        "Just when the lion was about to give up, the deer's antlers got caught in tree branches. The lion seized the chance and lunged forward. Just as it was about to catch up, the deer used all his strength and yanked his antlers free from the branches, then ran forward desperately. This time, the lion couldn't catch up.",
        "The deer ran to a stream, stopped, and rested while panting. He sighed and said: \u201CMy beautiful antlers nearly cost me my life, but my ugly legs saved me from the lion!\u201D"
      ],
      textPinyin: [
        "c\u00f3ng l\u00edn zh\u014dng\uff0c zh\u00f9 zhe y\u00ec zh\u012b pi\u00e0o liang de l\u00f9\u3002",
        "y\u01d2u y\u00ec ti\u0101n\uff0c l\u00f9 k\u01d2u k\u011b le\uff0c zh\u01ceo d\u00e0o y\u00ed g\u00e8 ch\u00ed t\u00e1ng\uff0c t\u00f2ng t\u00f2ng ku\u00e0i ku\u00e0i d\u00ec h\u0113 q\u01d0 shu\u01d0 l\u00e1i\u3002 ch\u00ed shu\u01d0 q\u012bng q\u012bng de\uff0c xi\u00e0ng y\u00ed mi\u00e0n j\u00ecng zi\u3002 l\u00f9 h\u016b r\u00e1n f\u0101 xi\u00e0n le z\u00ec j\u01d0 d\u01ceo y\u00ecng z\u00e0i shu\u01d0 zh\u014dng de y\u01d0ng zi\uff1a \u201c y\u00ed\uff0c zh\u00e8 sh\u00ec w\u01d2 ma\uff1f \u201d",
        "l\u00f9 b\u01cei b\u01cei sh\u0113n zi\uff0c shu\u01d0 zh\u014dng de d\u01ceo y\u01d0ng y\u011b g\u0113n zhe b\u01cei d\u00f2ng q\u01d0 l\u00e1i\u3002 t\u0101 c\u00f3ng l\u00e1i m\u00e9i y\u01d2u zh\u00f9 y\u00ec d\u00e0o z\u00ec j\u01d0 sh\u00ec zh\u00e8 me pi\u00e0o liang\uff01 t\u0101 b\u00f9 zh\u00e1o j\u00ed l\u00ed k\u0101i le\uff0c du\u00ec zhe ch\u00ed shu\u01d0 x\u012bn sh\u01ceng z\u00ec j\u01d0 de m\u011bi l\u00ec\uff1a \u201c a\uff01 w\u01d2 de sh\u0113n du\u00e0n du\u014d me y\u00fan ch\u00e8n\uff0c w\u01d2 de ji\u01ceo du\u014d me j\u012bng m\u011bi bi\u00e9 zh\u00ec\uff0c h\u01ceo xi\u00e0ng li\u01ceng sh\u00f9 m\u011bi l\u00ec de sh\u0101n h\u00fa\uff01 \u201d",
        "y\u00ed zh\u00e8n q\u012bng f\u0113ng chu\u012b gu\u00f2\uff0c ch\u00ed shu\u01d0 f\u00e0n q\u01d0 le c\u00e9ng c\u00e9ng b\u014d w\u00e9n\u3002 l\u00f9 h\u016b r\u00e1n k\u00e0n d\u00e0o le z\u00ec j\u01d0 de tu\u01d0\uff0c b\u00f9 j\u012bn ju\u0113 q\u01d0 le zu\u01d0\uff0c zh\u00f2u q\u01d0 le m\u00e9i t\u00f3u\uff1a \u201c \u00e0i\uff0c zh\u00e8 s\u00ec ti\u00e1o tu\u01d0 t\u00e0i x\u00ec le\uff0c z\u011bn me p\u00e8i d\u00e9 sh\u00e0ng zh\u00e8 li\u01ceng zh\u012b m\u011bi l\u00ec de ji\u01ceo ne\uff01 \u201d",
        "l\u00f9 k\u0101i sh\u01d0 b\u00e0o yu\u00e0n q\u01d0 z\u00ec j\u01d0 de tu\u01d0 l\u00e1i\u3002 ji\u00f9 z\u00e0i t\u0101 m\u00e9i j\u012bng d\u01ce c\u01cei d\u00ec zh\u01d4n b\u00e8i l\u00ed k\u0101i de sh\u00ed h\u00f2u\uff0c h\u016b r\u00e1n t\u012bng d\u00e0o yu\u01cen ch\u00f9 chu\u00e1n l\u00e1i y\u00ed zh\u00e8n ji\u01ceo b\u00f9 sh\u0113ng\u3002 t\u0101 j\u012b l\u00edng d\u00ec zh\u012b q\u01d0 \u011br duo\uff0c b\u00fa cu\u00f2\uff0c zh\u00e8ng sh\u00ec ji\u01ceo b\u00f9 sh\u0113ng\uff01 l\u00f9 m\u011bng y\u00ec hu\u00ed t\u00f3u\uff0c \u0101i y\u0101\uff0c y\u00ec t\u00f3u sh\u012b zi zh\u00e8ng qi\u0101o qi\u0101o d\u00ec xi\u00e0ng z\u00ec j\u01d0 b\u012b j\u00ecn\u3002",
        "l\u00f9 b\u00f9 g\u01cen y\u00f3u y\u00f9\uff0c s\u0101 k\u0101i ch\u00e1ng tu\u01d0 ji\u00f9 p\u01ceo\u3002 y\u01d2u l\u00ec de ch\u00e1ng tu\u01d0 z\u00e0i gu\u00e0n m\u00f9 c\u00f3ng zh\u014dng b\u00e8ng l\u00e1i ti\u00e0o q\u00f9\uff0c b\u00f9 y\u00ed hu\u00ec er\uff0c ji\u00f9 b\u01ce xi\u014dng m\u011bng de sh\u012b zi yu\u01cen yu\u01cen d\u00ec shu\u01cei z\u00e0i le h\u00f2u mi\u00e0n\u3002",
        "ji\u00f9 z\u00e0i sh\u012b zi hu\u012b x\u012bn s\u00e0ng q\u00ec b\u00f9 xi\u01ceng z\u00e0i zhu\u012b de sh\u00ed h\u00f2u\uff0c l\u00f9 de ji\u01ceo qu\u00e8 b\u00e8i sh\u00f9 zh\u012b gu\u00e0 zh\u00f9 le\u3002 sh\u012b zi g\u01cen j\u01d0n zhu\u0101 zh\u00f9 zh\u00e8 ge j\u012b hu\u00ec\uff0c m\u011bng p\u016b gu\u00f2 l\u00e1i\u3002 y\u01cen k\u00e0n ji\u00f9 y\u00e0o zhu\u012b sh\u00e0ng le\uff0c l\u00f9 y\u00f2ng j\u00ecn qu\u00e1n sh\u0113n l\u00ec qi\uff0c sh\u01d0 j\u00ecn y\u00ec ch\u011b\uff0c c\u00e1i b\u01ce li\u01ceng zh\u012b ji\u01ceo c\u00f3ng sh\u00f9 zh\u012b zh\u014dng zh\u00e8ng tu\u014d ch\u016b l\u00e1i\uff0c r\u00e1n h\u00f2u y\u00f2u p\u012bn m\u00ecng xi\u00e0ng qi\u00e1n b\u0113n q\u00f9\u3002 zh\u00e8 c\u00ec\uff0c sh\u012b zi z\u00e0i y\u011b m\u00e9i y\u01d2u zhu\u012b sh\u00e0ng\u3002",
        "l\u00f9 p\u01ceo d\u00e0o y\u00ec ti\u00e1o xi\u01ceo x\u012b bi\u0101n\uff0c t\u00edng xi\u00e0 ji\u01ceo b\u00f9\uff0c y\u00ec bi\u0101n chu\u01cen q\u00ec\uff0c y\u00ec bi\u0101n xi\u016b xi\u3002 t\u0101 t\u00e0n le k\u01d2u q\u00ec\uff0c shu\u014d\uff1a \u201c li\u01ceng zh\u012b m\u011bi l\u00ec de ji\u01ceo ch\u00e0 di\u01cen \u00e9r r\u00e0ng w\u01d2 s\u00f2ng le m\u00ecng\uff0c k\u011b s\u00ec ti\u00e1o n\u00e1n k\u00e0n de tu\u01d0 qu\u00e8 r\u00e0ng w\u01d2 sh\u012b k\u01d2u t\u00e1o sh\u0113ng\uff01 \u201d"
      ],
      recognizeChars: ["称","禁","皱","配","怨","狮","逼","撒"],
      writeChars: ["鹿","塘","映","欣","赏","匀","致","配","传","哎","狮","追","叹"],
      vocabWords: [
        {word:'匀称',pinyin:'yún chèn',en:'well-proportioned',sentence:'多么匀称的身段啊！',sentenceEn:'What a well-proportioned figure!'},
        {word:'欣赏',pinyin:'xīn shǎng',en:'admire',sentence:'他欣赏自己美丽的角。',sentenceEn:'He admired his beautiful antlers.'},
        {word:'抱怨',pinyin:'bào yuàn',en:'complain',sentence:'他抱怨自己的腿太细。',sentenceEn:'He complained that his legs were too thin.'},
        {word:'逼近',pinyin:'bī jìn',en:'close in on',sentence:'狮子逼近了。',sentenceEn:'The lion closed in.'},
        {word:'挣脱',pinyin:'zhèng tuō',en:'break free',sentence:'鹿角被树枝挂住了。',sentenceEn:'The antlers got caught on branches.'}
      ],
      footnotes: [
        {term:"\u5300\u79f0", termEn:"well-proportioned", definition:"\u3010y\u00fan ch\u00e8n\u3011well-proportioned\u3002", definitionEn:"well-proportioned"},
        {term:"\u6b23\u8d4f", termEn:"admire", definition:"\u3010x\u012bn sh\u01ceng\u3011admire\u3002", definitionEn:"admire"},
        {term:"\u62b1\u6028", termEn:"complain", definition:"\u3010b\u00e0o yu\u00e0n\u3011complain\u3002", definitionEn:"complain"},
        {term:"\u903c\u8fd1", termEn:"close in on", definition:"\u3010b\u012b j\u00ecn\u3011close in on\u3002", definitionEn:"close in on"},
        {term:"\u6323\u8131", termEn:"break free", definition:"\u3010zh\u00e8ng tu\u014d\u3011break free\u3002", definitionEn:"break free"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'寓言道理',pointEn:'yù yán dào lǐ',example:'fable moral',exampleEn:'美丽的角差点送了命，难看的腿却救了命。',explanation:'The beautiful antlers nearly cost his life, while the ugly legs saved him.',explanationEn:'事物各有长短，不能只看外表'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文，注意读出鹿的心情变化。",en:"Read aloud, paying attention to the changes in the deer's mood."},
        {type:"retell",cn:"根据提示，用自己的话讲讲这个故事：角——美丽/欣赏/差点儿送命；腿——难看/抱怨/狮口逃生。",en:"Use your own words to retell the story: antlers — beautiful/admired/nearly fatal; legs — ugly/complained/lifesaving."},
        {type:"discuss",cn:"你赞成哪种说法：美丽的鹿角不重要，实用的鹿腿才重要？还是鹿角和鹿腿都很重要，它们各有各的长处？",en:"Which view do you agree with: beautiful antlers don't matter, only practical legs do? Or both are important, each with their own strengths?"}
      ],
      teachingPoints: [
        {cn:"通过鹿的经历，理解\u201C尺有所短，寸有所长\u201D的道理。",en:"Through the deer's experience, understand that everything has strengths and weaknesses."},
        {cn:"注意故事中心情的转变：欣赏→抱怨→感悟。",en:"Notice the emotional shift in the story: admiration -> complaint -> realization."},
        {cn:"学习通过对比来揭示主题的写法。",en:"Learn how contrast is used to reveal the theme."}
      ],
      parentTips: [
        {cn:"引导孩子理解：每个人都有优点和不足，要正确认识自己。",en:"Help your child understand that everyone has strengths and weaknesses; see yourself accurately."},
        {cn:"让孩子用自己的话复述故事，锻炼表达能力。",en:"Have your child retell the story in their own words to practice expression."}
      ]
    },
    {
      id: 8, title: "池子与河流", titleEn: "The Pond and the River",
      difficulty: 2,
      isSelfRead: true,
      text: [
        "\u201C这是怎么回事？\u201D\n池子对她的邻居河流说道，\n\u201C我什么时候看见你，\n你总是滚滚滔滔！\n亲爱的姐姐，你难道不会疲劳？\u201D",
        "\u201C我总是看见，\n你一会儿背着沉重的货船，\n一会儿驮着长串的木筏，\n还有小划子啊小船，\n简直数也数不完。\u201D",
        "\u201C你几时才能抛开这样的生涯？\n要是换了我，说句老实话，\n我可真要愁死啦！\u201D",
        "\u201C固然，我并不出名，\n我没有出现在地图上，\n像你那样蜿蜒地贯穿全国。\n——这一切其实都是空的。\u201D",
        "\u201C可是，我安闲地躺在柔软的泥土里，\n像贵妇人躺在鸭绒垫上一样。\n这清闲的生活无忧无虑，\n还有什么能够代替？\u201D",
        "\u201C啊，你在推究哲理？\u201D\n河流说道，\n\u201C水要流动才能保持清洁，\n这个自然规律，难道你已经忘掉？\u201D",
        "\u201C我是一条伟大的河流，\n那是因为我遵循着这条规律，\n不顾自身的安逸。\n我用源源不断的清洁的水，\n年年给人们带来利益。\u201D",
        "河流的话果然应验。\n河流至今长流不断，\n而可怜的池子却一年年淤塞，\n整个让青苔铺满，\n又让芦苇遮掩，\n到头来完全枯干。",
        "才能不利用就要衰退，\n它会逐渐磨灭；\n才能一旦让懒惰支配，\n它就一无所为。"
      ],
      textEn: [
        "\u201CWhat's this about?\u201D\nThe pond said to her neighbor the river,\n\u201CWhenever I see you,\nYou're always rushing and surging!\nDear sister, don't you ever get tired?\u201D",
        "\u201CI always see you\nCarrying heavy cargo ships one moment,\nBearing long strings of rafts the next,\nAnd little boats and dinghies —\nToo many to count.\u201D",
        "\u201CWhen will you ever escape this way of life?\nIf I were you, to be honest,\nI'd be worried to death!\u201D",
        "\u201CTrue, I'm not famous,\nI don't appear on maps,\nWinding across the whole country like you do.\n— But all that is really nothing.\u201D",
        "\u201CBut I lie peacefully in soft earth,\nLike a noble lady on a feather cushion.\nThis carefree life, without worries —\nWhat could possibly replace it?\u201D",
        "\u201CAh, you're philosophizing?\u201D\nThe river said,\n\u201CWater must flow to stay clean —\nHave you already forgotten this law of nature?\u201D",
        "\u201CI am a great river\nBecause I follow this law,\nNever seeking my own comfort.\nWith an endless supply of clean water,\nYear after year I bring benefits to people.\u201D",
        "The river's words proved true.\nThe river flows on to this day,\nBut the poor pond silted up year after year,\nCovered entirely by moss,\nHidden by reeds,\nUntil it dried up completely.",
        "Talent left unused will decline\nAnd gradually fade away;\nOnce talent is ruled by laziness,\nIt accomplishes nothing."
      ],
      textPinyin: [
        "\u201c zh\u00e8 sh\u00ec z\u011bn me hu\u00ed sh\u00ec\uff1f \u201d\n ch\u00ed z\u01d0 du\u00ec t\u0101 de l\u00edn j\u016b h\u00e9 li\u00fa shu\u014d d\u00e0o\uff0c\n \u201c w\u01d2 sh\u00e9n me sh\u00ed h\u00f2u k\u00e0n ji\u00e0n n\u01d0\uff0c\n n\u01d0 z\u01d2ng sh\u00ec g\u01d4n g\u01d4n t\u0101o t\u0101o\uff01\n q\u012bn \u00e0i de ji\u011b jie\uff0c n\u01d0 n\u00e1n d\u00e0o b\u00fa hu\u00ec p\u00ed l\u00e1o\uff1f \u201d",
        "\u201c w\u01d2 z\u01d2ng sh\u00ec k\u00e0n ji\u00e0n\uff0c\n n\u01d0 y\u00ed hu\u00ec er b\u00e8i zhe ch\u00e9n zh\u00f2ng de hu\u00f2 chu\u00e1n\uff0c\n y\u00ed hu\u00ec er tu\u00f3 zhe ch\u00e1ng chu\u00e0n de m\u00f9 f\u00e1\uff0c\n h\u00e1i y\u01d2u xi\u01ceo hu\u00e0 z\u01d0 a xi\u01ceo chu\u00e1n\uff0c\n ji\u01cen zh\u00ed sh\u00f9 y\u011b sh\u00f9 b\u00f9 w\u00e1n\u3002 \u201d",
        "\u201c n\u01d0 j\u01d0 sh\u00ed c\u00e1i n\u00e9ng p\u0101o k\u0101i zh\u00e8 y\u00e0ng de sh\u0113ng y\u00e1\uff1f\n y\u00e0o shi hu\u00e0n le w\u01d2\uff0c shu\u014d j\u00f9 l\u01ceo sh\u00ed hu\u00e0\uff0c\n w\u01d2 k\u011b zh\u0113n y\u00e0o ch\u00f3u s\u01d0 l\u0101\uff01 \u201d",
        "\u201c g\u00f9 r\u00e1n\uff0c w\u01d2 b\u00ecng b\u00f9 ch\u016b m\u00edng\uff0c\n w\u01d2 m\u00e9i y\u01d2u ch\u016b xi\u00e0n z\u00e0i d\u00ec t\u00fa sh\u00e0ng\uff0c\n xi\u00e0ng n\u01d0 n\u00e0 y\u00e0ng w\u0101n y\u00e1n d\u00ec gu\u00e0n chu\u0101n qu\u00e1n gu\u00f3\u3002\n\u2014\u2014 zh\u00e8 y\u00ed qi\u00e8 q\u00ed sh\u00ed d\u014du sh\u00ec k\u014dng de\u3002 \u201d",
        "\u201c k\u011b sh\u00ec\uff0c w\u01d2 \u0101n xi\u00e1n d\u00ec t\u01ceng z\u00e0i r\u00f3u ru\u01cen de n\u00ed t\u01d4 l\u01d0\uff0c\n xi\u00e0ng gu\u00ec f\u00f9 r\u00e9n t\u01ceng z\u00e0i y\u0101 r\u00f3ng di\u00e0n sh\u00e0ng y\u00ed y\u00e0ng\u3002\n zh\u00e8 q\u012bng xi\u00e1n de sh\u0113ng hu\u00f3 w\u00fa y\u014du w\u00fa l\u01dc\uff0c\n h\u00e1i y\u01d2u sh\u00e9n me n\u00e9ng g\u00f2u d\u00e0i t\u00ec\uff1f \u201d",
        "\u201c a\uff0c n\u01d0 z\u00e0i tu\u012b ji\u016b zh\u00e9 l\u01d0\uff1f \u201d\n h\u00e9 li\u00fa shu\u014d d\u00e0o\uff0c\n \u201c shu\u01d0 y\u00e0o li\u00fa d\u00f2ng c\u00e1i n\u00e9ng b\u01ceo ch\u00ed q\u012bng ji\u00e9\uff0c\n zh\u00e8 ge z\u00ec r\u00e1n gu\u012b l\u01dc\uff0c n\u00e1n d\u00e0o n\u01d0 y\u01d0 j\u012bng w\u00e0ng di\u00e0o\uff1f \u201d",
        "\u201c w\u01d2 sh\u00ec y\u00ec ti\u00e1o w\u011bi d\u00e0 de h\u00e9 li\u00fa\uff0c\n n\u00e0 sh\u00ec y\u012bn w\u00e8i w\u01d2 z\u016bn x\u00fan zhe zh\u00e8 ti\u00e1o gu\u012b l\u01dc\uff0c\n b\u00fa g\u00f9 z\u00ec sh\u0113n de \u0101n y\u00ec\u3002\n w\u01d2 y\u00f2ng yu\u00e1n yu\u00e1n b\u00fa du\u00e0n de q\u012bng ji\u00e9 de shu\u01d0\uff0c\n ni\u00e1n ni\u00e1n g\u011bi r\u00e9n men d\u00e0i l\u00e1i l\u00ec y\u00ec\u3002 \u201d",
        "h\u00e9 li\u00fa de hu\u00e0 gu\u01d2 r\u00e1n y\u00ecng y\u00e0n\u3002\n h\u00e9 li\u00fa zh\u00ec j\u012bn ch\u00e1ng li\u00fa b\u00fa du\u00e0n\uff0c\n \u00e9r k\u011b li\u00e1n de ch\u00ed z\u01d0 qu\u00e8 y\u00ec ni\u00e1n ni\u00e1n y\u016b s\u00e8\uff0c\n zh\u011bng g\u00e8 r\u00e0ng q\u012bng t\u00e1i p\u00f9 m\u01cen\uff0c\n y\u00f2u r\u00e0ng l\u00fa w\u011bi zh\u0113 y\u01cen\uff0c\n d\u00e0o t\u00f3u l\u00e1i w\u00e1n qu\u00e1n k\u016b g\u0101n\u3002",
        "c\u00e1i n\u00e9ng b\u00fa l\u00ec y\u00f2ng ji\u00f9 y\u00e0o shu\u0101i tu\u00ec\uff0c\n t\u0101 hu\u00ec zh\u00fa ji\u00e0n m\u00f3 mi\u00e8\uff1b\n c\u00e1i n\u00e9ng y\u00ed d\u00e0n r\u00e0ng l\u01cen du\u00f2 zh\u012b p\u00e8i\uff0c\n t\u0101 ji\u00f9 y\u00ec w\u00fa su\u01d2 w\u00e8i\u3002"
      ],
      recognizeChars: ["滔","涯","妇","碌","遵","循","尊","验"],
      vocabWords: [
        {word:'懒惰',pinyin:'lǎn duò',en:'lazy',sentence:'池子过着懒惰的生活。',sentenceEn:'The pond lived a lazy life.'},
        {word:'安逸',pinyin:'ān yì',en:'comfortable; easy',sentence:'你何必那么忙呢？多安逸啊。',sentenceEn:'Why be so busy? How comfortable this is.'},
        {word:'淤塞',pinyin:'yū sè',en:'silted up; blocked',sentence:'池子渐渐淤塞了。',sentenceEn:'The pond gradually silted up.'},
        {word:'奔流不息',pinyin:'bēn liú bù xī',en:'flow ceaselessly',sentence:'河流奔流不息。',sentenceEn:'The river flows ceaselessly.'},
        {word:'源源不断',pinyin:'yuán yuán bù duàn',en:'continuous; unending',sentence:'河流的水源源不断。',sentenceEn:'The river water flows continuously.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u201c\u8fd9\u662f\u600e\u4e48\u56de\u4e8b\uff1f", exampleEn: "\u201cWhat's this about?\u201d\nThe pond said to her neighbor the river,\n\u201cWhenever I see yo", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u56e0\u4e3a\u2026\u2026\u6240\u4ee5\u2026\u2026", pointEn: "because...therefore...", example: "\u201c\u8fd9\u662f\u600e\u4e48\u56de\u4e8b\uff1f", exampleEn: "\u201cWhat's this about?\u201d\nThe pond said to her neighbor the river,\n\u201cWhenever I see yo", explanation: "\u56e0\u679c\u590d\u53e5\uff0c\u8868\u793a\u539f\u56e0\u548c\u7ed3\u679c\u7684\u5173\u7cfb", explanationEn: "Causal compound sentence expressing cause and effect"}
      ],
      footnotes: [
        {term:"\u61d2\u60f0", termEn:"lazy", definition:"\u3010l\u01cen du\u00f2\u3011lazy\u3002", definitionEn:"lazy"},
        {term:"\u5b89\u9038", termEn:"comfortable; easy", definition:"\u3010\u0101n y\u00ec\u3011comfortable; easy\u3002", definitionEn:"comfortable; easy"},
        {term:"\u6de4\u585e", termEn:"silted up; blocked", definition:"\u3010y\u016b s\u00e8\u3011silted up; blocked\u3002", definitionEn:"silted up; blocked"},
        {term:"\u5954\u6d41\u4e0d\u606f", termEn:"flow ceaselessly", definition:"\u3010b\u0113n li\u00fa b\u00f9 x\u012b\u3011flow ceaselessly\u3002", definitionEn:"flow ceaselessly"},
        {term:"\u6e90\u6e90\u4e0d\u65ad", termEn:"continuous; unending", definition:"\u3010yu\u00e1n yu\u00e1n b\u00f9 du\u00e0n\u3011continuous; unending\u3002", definitionEn:"continuous; unending"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"分角色朗读课文。",en:"Read the text with assigned roles."},
        {type:"think",cn:"结合生活实际说一说：池子与河流的观点，你更赞同哪一种？",en:"Based on real life, which view do you agree with more — the pond's or the river's?"},
        {type:"discuss",cn:"寓言最后的四行诗说明了什么道理？",en:"What truth do the final four lines of the fable illustrate?"}
      ],
      teachingPoints: [
        {cn:"这是一首寓言诗，用对话形式对比池子和河流的不同态度。",en:"This is a fable poem using dialogue to contrast the pond's and river's different attitudes."},
        {cn:"理解寓意：才能不利用就会衰退，人不能贪图安逸而放弃努力。",en:"Understand the moral: unused talent declines; don't pursue comfort at the expense of effort."},
        {cn:"注意诗歌形式的寓言与散文形式的寓言的区别。",en:"Notice the difference between fables in verse form and in prose form."}
      ],
      parentTips: [
        {cn:"和孩子讨论：在学习中，怎样才能不做\u201C池子\u201D而做\u201C河流\u201D？",en:"Discuss with your child: In studies, how can we be 'rivers' instead of 'ponds'?"},
        {cn:"鼓励孩子说说自己的想法，培养独立思考能力。",en:"Encourage your child to share their thoughts, developing independent thinking."}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"邯郸学步　滥竽充数　掩耳盗铃\n自相矛盾　刻舟求剑　画蛇添足\n杞人忧天　井底之蛙　杯弓蛇影",en:"Imitating the Handan walk; Pretending to play the bamboo flute; Plugging ears to steal a bell\nSelf-contradictory; Marking the boat to find the sword; Drawing legs on a snake\nWorrying like the man of Qi; A frog at the bottom of a well; Seeing a snake in a cup's shadow"}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"说说下面两组词语的特点，照样子写几个：源源不断、津津有味；无忧无虑、无边无际。注意加点的部分，照样子把句子补充完整。",en:"Describe the patterns in these word groups and write similar ones: endless stream, with relish; carefree, boundless. Notice the dotted parts and complete sentences similarly."}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"看图画，写一写——写一段话，把图画的内容介绍给大家。注意写清楚图画上有哪些人、他们在干什么、动作和可能说的话。",en:"Look at the picture and write — write a paragraph introducing the picture's content. Note who is in the picture, what they're doing, their actions, and possible dialogue."},modelEssays:[
      {title:"快乐的课间",titleEn:"Happy Recess",level:"基础",
      structure:[
        {cn:"开头：写时间和地点",en:"Opening: State the time and place"},
        {cn:"中间：写人物和动作",en:"Body: Describe the people and their actions"},
        {cn:"结尾：写整体感受",en:"Ending: Share the overall feeling"}
      ],
      cn:"下课了，同学们像小鸟一样飞出了教室，来到操场上玩耍。\n操场上真热闹啊！两个男同学正在踢足球，一个用力把球踢出去，另一个飞快地跑过去接住了。旁边有三个女同学在跳绳，她们一边跳一边数：\u201C一、二、三……\u201D还有一些同学坐在花坛边聊天，说说笑笑的。\n多么快乐的课间啊！大家的笑声在操场上回荡。",
      en:"Class is over! The students flew out of the classroom like little birds and came to the playground.\nThe playground was so lively! Two boys were playing soccer — one kicked the ball hard and the other ran quickly to catch it. Nearby, three girls were jumping rope, counting as they jumped: \u201COne, two, three...\u201D Some other students sat by the flower bed chatting and laughing.\nWhat a happy recess! Everyone\u2019s laughter echoed across the playground.",
      notes:"这篇范文结构清晰：先写时间地点，再分别写不同人物的活动，最后写整体感受。用了比喻（像小鸟一样），让文章更生动。",
      notesEn:"This essay has a clear structure: time and place first, then different people's activities, and finally the overall feeling. The simile (like little birds) makes it more vivid."},
      {title:"放风筝",titleEn:"Flying Kites",level:"提高",
      structure:[
        {cn:"开头：描写天气和场景",en:"Opening: Describe the weather and setting"},
        {cn:"中间：具体描写人物动作和对话",en:"Body: Describe specific actions and dialogue"},
        {cn:"结尾：描写画面整体美感",en:"Ending: Describe the overall beauty of the scene"}
      ],
      cn:"春天来了，碧蓝的天空飘着朵朵白云。公园的草地上，几个小朋友正在放风筝。\n一个穿红衣服的小男孩举着一只燕子风筝，一边跑一边喊：\u201C快放线，快放线！\u201D他的伙伴一手拿着线轴，一手拉着风筝线，使劲地放。风筝摇摇晃晃地飞了起来，越飞越高。\u201C飞起来了！飞起来了！\u201D两个人高兴得又蹦又跳。远处，一个小女孩抱着一只蝴蝶风筝，正着急地等着爸爸来帮忙呢。她的爸爸笑着走过来，蹲下身子对她说：\u201C别急，爸爸来了。\u201D\n天空中，燕子风筝、蝴蝶风筝，还有远处的老鹰风筝，在蓝天白云间自由地飞翔，就像一幅美丽的图画。",
      en:"Spring has come, with white clouds floating in the blue sky. On the park\u2019s lawn, several children are flying kites.\nA boy in a red jacket held a swallow kite, running and shouting, \u201CLet out more string, let out more string!\u201D His friend held the spool in one hand and pulled the string with the other, letting it out as hard as he could. The kite wobbled and rose higher and higher. \u201CIt\u2019s flying! It\u2019s flying!\u201D they cheered, jumping up and down. In the distance, a little girl clutched a butterfly kite, anxiously waiting for her dad to help. Her father walked over with a smile, knelt down and said, \u201CDon\u2019t worry, Daddy\u2019s here.\u201D\nIn the sky, the swallow kite, the butterfly kite, and a distant eagle kite soared freely among the blue sky and white clouds, like a beautiful painting.",
      notes:"这篇范文描写了两组人物的活动，有详有略。加入了人物对话，让场景更生动。注意动作描写很具体（举着、跑、喊、放线），结尾用比喻收束全文。",
      notesEn:"This essay describes two groups of people's activities with varying detail. Dialogue is added to bring the scene alive. The action descriptions are specific (holding, running, shouting, letting out string), and the ending uses a simile to wrap up."},
      {title:"热闹的运动会",titleEn:"The Exciting Sports Day",level:"拓展",
      structure:[
        {cn:"开头：用声音描写引入场景",en:"Opening: Use sounds to introduce the scene"},
        {cn:"中间：聚焦一个精彩瞬间，详细描写",en:"Body: Focus on one exciting moment with detailed description"},
        {cn:"过渡：加入旁观者的反应",en:"Transition: Include bystanders' reactions"},
        {cn:"结尾：点明感受和意义",en:"Ending: State the feeling and significance"}
      ],
      cn:"\u201C加油！加油！\u201D操场上传来一阵阵响亮的喊声。原来，我们学校正在举行一年一度的运动会。\n最精彩的要数接力赛了。只见第一棒的小明像箭一样冲了出去，他的双腿飞快地交替着，红色的接力棒在阳光下闪闪发光。跑到交接处，他把棒稳稳地递给了小华。小华接过棒，一刻也不停，使出全身力气往前冲。观众席上，同学们有的站起来挥手，有的扯着嗓子喊，还有的紧张得直跺脚。\n最后一棒是我们班的小刚。他咬紧牙关，拼命地跑。终于，他第一个冲过了终点线！\u201C赢了！赢了！\u201D同学们从座位上跳了起来，紧紧地抱在一起。我看到小刚的脸上满是汗水，可他笑得比谁都灿烂。\n那一刻，我明白了：胜利属于每一个努力拼搏的人。",
      en:"\u201CGo! Go!\u201D Loud cheers echoed across the playground. Our school was holding its annual sports day.\nThe most exciting event was the relay race. The first runner, Xiao Ming, shot out like an arrow, his legs alternating at top speed, the red baton glinting in the sunlight. At the handoff zone, he steadily passed the baton to Xiao Hua. Xiao Hua grabbed it without a pause and sprinted forward with all his might. In the stands, some classmates stood up waving, some shouted at the top of their lungs, and others stomped their feet nervously.\nThe anchor leg was our class\u2019s Xiao Gang. He gritted his teeth and ran with everything he had. Finally, he was the first to cross the finish line! \u201CWe won! We won!\u201D Classmates leaped from their seats and hugged each other tightly. I saw Xiao Gang\u2019s face covered in sweat, but he smiled more brightly than anyone.\nAt that moment, I understood: victory belongs to everyone who gives their all.",
      notes:"这篇范文用声音描写开头（加油声），迅速把读者带入场景。聚焦接力赛这一精彩瞬间，动作描写细腻（像箭一样、咬紧牙关）。用\u201C有的……有的……还有的……\u201D句式描写观众反应，画面感强。结尾由事及理，从比赛升华到人生道理，体现了拓展水平。",
      notesEn:"This essay opens with sound description (cheering), instantly drawing the reader in. It focuses on the relay race with detailed action descriptions (like an arrow, gritting teeth). The 'some...some...others...' pattern for crowd reactions creates a vivid picture. The ending elevates from the event to a life lesson, showing advanced writing skill."}
    ]},
    readingCorner: {title:"快乐读书吧",titleEn:"Happy Reading Corner",content:{cn:"小故事大道理——阅读中国古代寓言、伊索寓言、克雷洛夫寓言。寓言故事一般比较短小，但背后往往藏着深刻的道理。",en:"Little Stories, Big Lessons — Read Chinese ancient fables, Aesop's Fables, and Krylov's Fables. Fable stories are usually short, but they often contain profound truths."}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 3 — 传统文化 Traditional Culture (9-12) */
/* ═══════════════════════════════════════════ */
{
  id: 3, title: "传统文化", titleEn: "Traditional Culture",
  difficulty: 2,
  type: "kewen",
  lessons: [
    {
      id: 9, title: "古诗三首", titleEn: "Three Ancient Poems",
      difficulty: 2,
      text: [
        "元日\n[宋] 王安石\n爆竹声中一岁除，\n春风送暖入屠苏。\n千门万户曈曈日，\n总把新桃换旧符。",
        "注释：元日——指农历正月初一。屠苏——这里指一种酒，根据古代风俗，常在元日饮用。曈曈——形容太阳出来后天色渐亮的样子。新桃换旧符——用新桃符换下旧桃符。桃符是古代新年时悬挂于大门上的辟邪门饰，春联的前身。",
        "清明\n[唐] 杜牧\n清明时节雨纷纷，\n路上行人欲断魂。\n借问酒家何处有？\n牧童遥指杏花村。",
        "注释：清明——我国传统节日，有扫墓、踏青等习俗。",
        "九月九日忆山东兄弟\n[唐] 王维\n独在异乡为异客，\n每逢佳节倍思亲。\n遥知兄弟登高处，\n遍插茱萸少一人。",
        "注释：九月九日——指农历九月初九重阳节。山东——此处指华山以东。登高——重阳节有登高的习俗。茱萸——一种香气浓郁的植物，古人在重阳节有插戴茱萸的习俗。"
      ],
      textEn: [
        "New Year's Day\n[Song] Wang Anshi\nAmidst the sound of firecrackers, another year has passed,\nSpring breeze brings warmth into the tusu wine.\nA thousand doors and ten thousand households in the bright morning sun,\nAlways replace old peachwood charms with new ones.",
        "Notes: New Year's Day refers to the first day of the first lunar month. Tusu is a type of wine traditionally drunk on New Year's Day. 'Bright morning' describes the gradually brightening sky at sunrise. New peachwood charms replace old ones — peachwood charms were door ornaments hung to ward off evil, the precursor of Spring Festival couplets.",
        "Qingming Festival\n[Tang] Du Mu\nDuring the Qingming Festival, rain falls in drizzles,\nTravelers on the road feel as if their souls will break.\nMay I ask where a tavern can be found?\nA herding boy points far away to Apricot Blossom Village.",
        "Notes: Qingming is a traditional Chinese festival with customs of tomb-sweeping and spring outings.",
        "Thinking of My Brothers in Shandong on the Double Ninth Festival\n[Tang] Wang Wei\nAlone in a foreign land, I am a stranger,\nEvery festive season I miss my family twice as much.\nI know from afar my brothers are climbing high,\nEach wearing dogwood — but one person is missing.",
        "Notes: The ninth day of the ninth lunar month is the Double Ninth Festival. 'Shandong' here means east of Mount Hua. Climbing high is a Double Ninth Festival custom. Dogwood is a fragrant plant; ancients wore it on the Double Ninth Festival."
      ],
      textPinyin: [
        "yu\u00e1n r\u00ec\n [ s\u00f2ng ]   w\u00e1ng \u0101n sh\u00ed\n b\u00e0o zh\u00fa sh\u0113ng zh\u014dng y\u00ed su\u00ec ch\u00fa\uff0c\n ch\u016bn f\u0113ng s\u00f2ng nu\u01cen r\u00f9 t\u00fa s\u016b\u3002\n qi\u0101n m\u00e9n w\u00e0n h\u00f9 t\u00f3ng t\u00f3ng r\u00ec\uff0c\n z\u01d2ng b\u01ce x\u012bn t\u00e1o hu\u00e0n ji\u00f9 f\u00fa\u3002",
        "zh\u00f9 sh\u00ec\uff1a yu\u00e1n r\u00ec\u2014\u2014 zh\u01d0 n\u00f3ng l\u00ec zh\u0113ng yu\u00e8 ch\u016b y\u012b\u3002 t\u00fa s\u016b\u2014\u2014 zh\u00e8 l\u01d0 zh\u01d0 y\u00ec zh\u01d2ng ji\u01d4\uff0c g\u0113n j\u00f9 g\u01d4 d\u00e0i f\u0113ng s\u00fa\uff0c ch\u00e1ng z\u00e0i yu\u00e1n r\u00ec y\u01d0n y\u00f2ng\u3002 t\u00f3ng t\u00f3ng\u2014\u2014 x\u00edng r\u00f3ng t\u00e0i y\u00e1ng ch\u016b l\u00e1i h\u00f2u ti\u0101n s\u00e8 ji\u00e0n li\u00e0ng de y\u00e0ng zi\u3002 x\u012bn t\u00e1o hu\u00e0n ji\u00f9 f\u00fa\u2014\u2014 y\u00f2ng x\u012bn t\u00e1o f\u00fa hu\u00e0n xi\u00e0 ji\u00f9 t\u00e1o f\u00fa\u3002 t\u00e1o f\u00fa sh\u00ec g\u01d4 d\u00e0i x\u012bn ni\u00e1n sh\u00ed xu\u00e1n gu\u00e0 y\u00fa d\u00e0 m\u00e9n sh\u00e0ng de b\u00ec xi\u00e9 m\u00e9n sh\u00ec\uff0c ch\u016bn li\u00e1n de qi\u00e1n sh\u0113n\u3002",
        "q\u012bng m\u00edng\n [ t\u00e1ng ]   d\u00f9 m\u00f9\n q\u012bng m\u00edng sh\u00ed ji\u00e9 y\u01d4 f\u0113n f\u0113n\uff0c\n l\u00f9 sh\u00e0ng x\u00edng r\u00e9n y\u00f9 du\u00e0n h\u00fan\u3002\n ji\u00e8 w\u00e8n ji\u01d4 ji\u0101 h\u00e9 ch\u00f9 y\u01d2u\uff1f\n m\u00f9 t\u00f3ng y\u00e1o zh\u01d0 x\u00ecng hu\u0101 c\u016bn\u3002",
        "zh\u00f9 sh\u00ec\uff1a q\u012bng m\u00edng\u2014\u2014 w\u01d2 gu\u00f3 chu\u00e1n t\u01d2ng ji\u00e9 r\u00ec\uff0c y\u01d2u s\u01ceo m\u00f9\u3001 t\u00e0 q\u012bng d\u011bng x\u00ed s\u00fa\u3002",
        "ji\u01d4 yu\u00e8 ji\u01d4 r\u00ec y\u00ec sh\u0101n d\u014dng xi\u014dng d\u00ec\n [ t\u00e1ng ]   w\u00e1ng w\u00e9i\n d\u00fa z\u00e0i y\u00ec xi\u0101ng w\u00e8i y\u00ec k\u00e8\uff0c\n m\u011bi f\u00e9ng ji\u0101 ji\u00e9 b\u00e8i s\u012b q\u012bn\u3002\n y\u00e1o zh\u012b xi\u014dng d\u00ec d\u0113ng g\u0101o ch\u00f9\uff0c\n bi\u00e0n ch\u0101 zh\u016b y\u00fa sh\u01ceo y\u00ec r\u00e9n\u3002",
        "zh\u00f9 sh\u00ec\uff1a ji\u01d4 yu\u00e8 ji\u01d4 r\u00ec\u2014\u2014 zh\u01d0 n\u00f3ng l\u00ec ji\u01d4 yu\u00e8 ch\u016b ji\u01d4 ch\u00f3ng y\u00e1ng ji\u00e9\u3002 sh\u0101n d\u014dng\u2014\u2014 c\u01d0 ch\u00f9 zh\u01d0 hu\u00e0 sh\u0101n y\u01d0 d\u014dng\u3002 d\u0113ng g\u0101o\u2014\u2014 ch\u00f3ng y\u00e1ng ji\u00e9 y\u01d2u d\u0113ng g\u0101o de x\u00ed s\u00fa\u3002 zh\u016b y\u00fa\u2014\u2014 y\u00ec zh\u01d2ng xi\u0101ng q\u00ec n\u00f3ng y\u00f9 de zh\u00ed w\u00f9\uff0c g\u01d4 r\u00e9n z\u00e0i ch\u00f3ng y\u00e1ng ji\u00e9 y\u01d2u ch\u0101 d\u00e0i zh\u016b y\u00fa de x\u00ed s\u00fa\u3002"
      ],
      recognizeChars: ["屠","苏","魂","酒","牧","兄","倍"],
      writeChars: ["符","欲","魂","借","酒","何","牧","兄","独","异","佳"],
      vocabWords: [
        {word:'爆竹',pinyin:'b\u00E0o zh\u00FA',en:'firecrackers',sentence:'\u7206\u7AF9\u58F0\u4E2D\u4E00\u5C81\u9664\u3002',sentenceEn:'Amidst the sound of firecrackers, another year has passed.'},
        {word:'屠苏',pinyin:'t\u00FA s\u016B',en:'tusu wine (New Year wine)',sentence:'\u6625\u98CE\u9001\u6696\u5165\u5C60\u82CF\u3002',sentenceEn:'Spring breeze brings warmth into the tusu wine.'},
        {word:'断魂',pinyin:'du\u00E0n h\u00FAn',en:'heartbroken; grief-stricken',sentence:'\u8DEF\u4E0A\u884C\u4EBA\u6B32\u65AD\u9B42\u3002',sentenceEn:'Travelers on the road feel as if their souls will break.'},
        {word:'佳节',pinyin:'ji\u0101 ji\u00E9',en:'festival; holiday',sentence:'\u6BCF\u9022\u4F73\u8282\u500D\u601D\u4EB2\u3002',sentenceEn:'Every festive season I miss my family twice as much.'},
        {word:'茱萸',pinyin:'zh\u016B y\u00FA',en:'dogwood (plant)',sentence:'\u904D\u63D2\u8331\u8438\u5C11\u4E00\u4EBA\u3002',sentenceEn:'Each wearing dogwood \u2014 but one person is missing.'},
        {word:'异乡',pinyin:'y\u00EC xi\u0101ng',en:'foreign land',sentence:'\u72EC\u5728\u5F02\u4E61\u4E3A\u5F02\u5BA2\u3002',sentenceEn:'Alone in a foreign land, I am a stranger.'}
      ],
      grammarPoints: [
        {point: "\u628a\u5b57\u53e5", pointEn: "b\u01ce-construction", example: "\u6625\u98ce\u9001\u6696\u5165\u5c60\u82cf\u3002", exampleEn: "New Year's Day\n[Song] Wang Anshi\nAmidst the sound of firecrackers, another year ", explanation: "\u7528\u201c\u628a\u201d\u5c06\u5bbe\u8bed\u63d0\u524d\uff0c\u5f3a\u8c03\u52a8\u4f5c\u5bf9\u5bf9\u8c61\u7684\u5f71\u54cd", explanationEn: "Moves the object before the verb using \"b\u01ce\" to emphasize the effect of the action"},
        {point: "\u603b\u5206\u7ed3\u6784", pointEn: "General-specific structure", example: "\u6625\u98ce\u9001\u6696\u5165\u5c60\u82cf\u3002", exampleEn: "New Year's Day\n[Song] Wang Anshi\nAmidst the sound of firecrackers, another year ", explanation: "\u5148\u603b\u8ff0\u518d\u5206\u8ff0\uff0c\u6216\u5148\u5206\u8ff0\u518d\u603b\u7ed3\uff0c\u4f7f\u6587\u7ae0\u6761\u7406\u6e05\u6670", explanationEn: "Start with overview then details, or vice versa, for clear organization"}
      ],
      footnotes: [
        {term:"\u7206\u7af9", termEn:"firecrackers", definition:"\u3010b\u00e0o zh\u00fa\u3011firecrackers\u3002", definitionEn:"firecrackers"},
        {term:"\u5c60\u82cf", termEn:"tusu wine (New Year wine)", definition:"\u3010t\u00fa s\u016b\u3011tusu wine (New Year wine)\u3002", definitionEn:"tusu wine (New Year wine)"},
        {term:"\u65ad\u9b42", termEn:"heartbroken; grief-stricken", definition:"\u3010du\u00e0n h\u00fan\u3011heartbroken; grief-stricken\u3002", definitionEn:"heartbroken; grief-stricken"},
        {term:"\u4f73\u8282", termEn:"festival; holiday", definition:"\u3010ji\u0101 ji\u00e9\u3011festival; holiday\u3002", definitionEn:"festival; holiday"},
        {term:"\u8331\u8438", termEn:"dogwood (plant)", definition:"\u3010zh\u016b y\u00fa\u3011dogwood (plant)\u3002", definitionEn:"dogwood (plant)"},
        {term:"\u5f02\u4e61", termEn:"foreign land", definition:"\u3010y\u00ec xi\u0101ng\u3011foreign land\u3002", definitionEn:"foreign land"}
      ],
      readingTips: [
        {cn:"\u6709\u611f\u60c5\u5730\u6717\u8bfb\u53e4\u8bd7\uff0c\u6ce8\u610f\u505c\u987f\u548c\u91cd\u97f3\u3002\u60f3\u8c61\u8bd7\u53e5\u63cf\u7ed8\u7684\u753b\u9762\uff0c\u4f53\u4f1a\u8bd7\u4eba\u7684\u60c5\u611f\u3002", en:"Read the poem aloud with feeling, noting pauses and emphasis. Visualize the scenes described and feel the poet's emotions."},
        {cn:"\u627e\u51fa\u8bd7\u4e2d\u7684\u5173\u952e\u610f\u8c61\uff08\u5982\u5c71\u3001\u6c34\u3001\u6708\u3001\u82b1\u7b49\uff09\uff0c\u60f3\u60f3\u5b83\u4eec\u8868\u8fbe\u4e86\u4ec0\u4e48\u611f\u60c5\u3002", en:"Identify key imagery (like mountains, water, moon, flowers) and think about what emotions they convey."}
      ],
      exercises: [
        {type:"read",cn:"有感情地朗读课文。背诵课文。默写《清明》。",en:"Read with feeling. Recite all poems. Write 'Qingming' from memory."},
        {type:"think",cn:"这三首诗分别写的是哪个传统节日？写出了什么样的节日情景？",en:"Which traditional festival does each poem describe? What festival scenes do they depict?"},
        {type:"extend",cn:"你还知道哪些和传统节日有关的古诗？和同学交流。",en:"What other ancient poems about traditional festivals do you know? Share with classmates."}
      ],
      teachingPoints: [
        {cn:"三首古诗分别对应春节、清明节、重阳节三个传统节日。",en:"The three poems correspond to three traditional festivals: Spring Festival, Qingming, and Double Ninth."},
        {cn:"体会\u201C每逢佳节倍思亲\u201D的情感——节日里对家人的思念。",en:"Feel the emotion of 'missing family twice as much during festivals' — longing for family on holidays."},
        {cn:"了解中国传统节日的风俗：放爆竹、贴春联、扫墓、登高、插茱萸。",en:"Learn about traditional Chinese festival customs: firecrackers, couplets, tomb-sweeping, climbing high, wearing dogwood."}
      ],
      parentTips: [
        {cn:"结合节日实际体验，帮助孩子理解诗中描写的节日风俗。",en:"Connect real festival experiences to help your child understand the customs described in the poems."},
        {cn:"引导孩子默写《清明》，注意\u201C魂\u201D\u201C借\u201D\u201C牧\u201D等字的写法。",en:"Guide your child to write 'Qingming' from memory, paying attention to character forms."}
      ]
    },
    {
      id: 10, title: "纸的发明", titleEn: "The Invention of Paper",
      difficulty: 2,
      text: [
        "造纸术的发明，是中国对世界文明的伟大贡献之一。",
        "早在几千年前，我们的祖先就创造了文字。可那时候还没有纸，要记录一件事情，就用刀把文字刻在龟甲和兽骨上，或者把文字铸刻在青铜器上。后来，人们又把文字写在竹片和木片上。这些竹片、木片用绳子穿起来，就成了一册书。但是，这种书很笨重，阅读、携带、保存都很不方便。古时候用\u201C学富五车\u201D形容一个人学问高，是因为书多的时候需要用车来拉。再后来，有了蚕丝织成的帛，就可以在帛上写字了。帛比竹片、木片轻便，但是价钱太贵，只有少数人能用，不能普及。",
        "人们用蚕茧制作丝绵时发现，盛放蚕茧的篾席上，会留下一层薄片，可用于书写。考古学家发现，在两千多年前的西汉时代，人们已经懂得了用麻来造纸。但麻纸比较粗糙，不便书写。",
        "大约在一千九百年前的东汉时代，有个叫蔡伦的人，吸收了人们长期积累的经验，改进了造纸术。他把树皮、麻头、破布等原料剪碎或切断，浸在水里捣烂成浆；再把浆捞出来晒干，就成了一种既轻便又好用的纸。用这种方法造的纸，原料容易得到，可以大量制造，价格又便宜，能满足多数人的需要，所以这种造纸方法就传承下来了。",
        "我国的造纸术首先传到邻近的朝鲜半岛和日本，后来又传到阿拉伯世界和欧洲，极大地促进了人类社会的进步和文化的发展，影响了全世界。"
      ],
      textEn: [
        "The invention of papermaking is one of China's great contributions to world civilization.",
        "Thousands of years ago, our ancestors created writing. But there was no paper then — to record something, they carved characters on tortoise shells and animal bones, or cast them on bronze vessels. Later, people wrote on bamboo strips and wooden slips. These strips, threaded together with cord, became a book. But such books were bulky, inconvenient to read, carry, and store. The old saying 'five carts of knowledge' described a learned person because many books needed carts to transport. Later still, silk fabric from silkworms could be written on. Silk was lighter than bamboo and wood, but too expensive for most people.",
        "When making silk wadding from cocoons, people discovered that a thin layer left on the bamboo mat could be used for writing. Archaeologists found that over two thousand years ago, in the Western Han Dynasty, people already knew how to make paper from hemp. But hemp paper was rough and hard to write on.",
        "About nineteen hundred years ago, in the Eastern Han Dynasty, a man named Cai Lun absorbed people's accumulated experience and improved papermaking. He chopped tree bark, hemp, and rags into pieces, soaked them in water, and pounded them into pulp. Then he scooped out the pulp and dried it, creating a paper that was both light and useful. Paper made this way used readily available materials, could be mass-produced, was affordable, and met most people's needs, so this method was passed down.",
        "China's papermaking technique first spread to neighboring Korea and Japan, then to the Arab world and Europe, greatly advancing human civilization and cultural development, influencing the entire world."
      ],
      textPinyin: [
        "z\u00e0o zh\u01d0 sh\u00f9 de f\u0101 m\u00edng\uff0c sh\u00ec zh\u014dng gu\u00f3 du\u00ec sh\u00ec ji\u00e8 w\u00e9n m\u00edng de w\u011bi d\u00e0 g\u00f2ng xi\u00e0n zh\u012b y\u012b\u3002",
        "z\u01ceo z\u00e0i j\u01d0 qi\u0101n ni\u00e1n qi\u00e1n\uff0c w\u01d2 men de z\u01d4 xi\u0101n ji\u00f9 chu\u00e0ng z\u00e0o le w\u00e9n z\u00ec\u3002 k\u011b n\u00e0 sh\u00ed h\u00f2u h\u00e1i m\u00e9i y\u01d2u zh\u01d0\uff0c y\u00e0o j\u00ec l\u00f9 y\u00ed ji\u00e0n sh\u00ec q\u00edng\uff0c ji\u00f9 y\u00f2ng d\u0101o b\u00e0 w\u00e9n z\u00ec k\u00e8 z\u00e0i gu\u012b ji\u01ce h\u00e9 sh\u00f2u g\u01d4 sh\u00e0ng\uff0c hu\u00f2 zh\u011b b\u01ce w\u00e9n z\u00ec zh\u00f9 k\u00e8 z\u00e0i q\u012bng t\u00f3ng q\u00ec sh\u00e0ng\u3002 h\u00f2u l\u00e1i\uff0c r\u00e9n men y\u00f2u b\u01ce w\u00e9n z\u00ec xi\u011b z\u00e0i zh\u00fa pi\u00e0n h\u00e9 m\u00f9 pi\u00e0n sh\u00e0ng\u3002 zh\u00e8 xi\u0113 zh\u00fa pi\u00e0n\u3001 m\u00f9 pi\u00e0n y\u00f2ng sh\u00e9ng zi chu\u0101n q\u01d0 l\u00e1i\uff0c ji\u00f9 ch\u00e9ng le y\u00ed c\u00e8 sh\u016b\u3002 d\u00e0n sh\u00ec\uff0c zh\u00e8 zh\u01d2ng sh\u016b h\u011bn b\u00e8n zh\u00f2ng\uff0c yu\u00e8 d\u00fa\u3001 xi\u00e9 d\u00e0i\u3001 b\u01ceo c\u00fan d\u014du h\u011bn b\u00f9 f\u0101ng bi\u00e0n\u3002 g\u01d4 sh\u00ed h\u00f2u y\u00f2ng \u201c xu\u00e9 f\u00f9 w\u01d4 ch\u0113 \u201d x\u00edng r\u00f3ng y\u00ed g\u00e8 r\u00e9n xu\u00e9 w\u00e8n g\u0101o\uff0c sh\u00ec y\u012bn w\u00e8i sh\u016b du\u014d de sh\u00ed h\u00f2u x\u016b y\u00e0o y\u00f2ng ch\u0113 l\u00e1i l\u0101\u3002 z\u00e0i h\u00f2u l\u00e1i\uff0c y\u01d2u le c\u00e1n s\u012b zh\u012b ch\u00e9ng de b\u00f3\uff0c ji\u00f9 k\u011b y\u01d0 z\u00e0i b\u00f3 sh\u00e0ng xi\u011b z\u00ec le\u3002 b\u00f3 b\u01d0 zh\u00fa pi\u00e0n\u3001 m\u00f9 pi\u00e0n q\u012bng bi\u00e0n\uff0c d\u00e0n sh\u00ec ji\u00e0 qi\u00e1n t\u00e0i gu\u00ec\uff0c zh\u01d0 y\u01d2u sh\u01ceo sh\u00f9 r\u00e9n n\u00e9ng y\u00f2ng\uff0c b\u00f9 n\u00e9ng p\u01d4 j\u00ed\u3002",
        "r\u00e9n men y\u00f2ng c\u00e1n ji\u01cen zh\u00ec zu\u00f2 s\u012b mi\u00e1n sh\u00ed f\u0101 xi\u00e0n\uff0c sh\u00e8ng f\u00e0ng c\u00e1n ji\u01cen de mi\u00e8 x\u00ed sh\u00e0ng\uff0c hu\u00ec li\u00fa xi\u00e0 y\u00ec c\u00e9ng b\u00e1o pi\u00e0n\uff0c k\u011b y\u00f2ng y\u00fa sh\u016b xi\u011b\u3002 k\u01ceo g\u01d4 xu\u00e9 ji\u0101 f\u0101 xi\u00e0n\uff0c z\u00e0i li\u01ceng qi\u0101n du\u014d ni\u00e1n qi\u00e1n de x\u012b h\u00e0n sh\u00ed d\u00e0i\uff0c r\u00e9n men y\u01d0 j\u012bng d\u01d2ng de le y\u00f2ng m\u00e1 l\u00e1i z\u00e0o zh\u01d0\u3002 d\u00e0n m\u00e1 zh\u01d0 b\u01d0 ji\u00e0o c\u016b c\u0101o\uff0c b\u00fa bi\u00e0n sh\u016b xi\u011b\u3002",
        "d\u00e0 yu\u0113 z\u00e0i y\u00ec qi\u0101n ji\u01d4 b\u01cei ni\u00e1n qi\u00e1n de d\u014dng h\u00e0n sh\u00ed d\u00e0i\uff0c y\u01d2u g\u00e8 ji\u00e0o c\u00e0i l\u00fan de r\u00e9n\uff0c x\u012b sh\u014du le r\u00e9n men ch\u00e1ng q\u012b j\u012b l\u011bi de j\u012bng y\u00e0n\uff0c g\u01cei j\u00ecn le z\u00e0o zh\u01d0 sh\u00f9\u3002 t\u0101 b\u01ce sh\u00f9 p\u00ed\u3001 m\u00e1 t\u00f3u\u3001 p\u00f2 b\u00f9 d\u011bng yu\u00e1n li\u00e0o ji\u01cen su\u00ec hu\u00f2 qi\u0113 du\u00e0n\uff0c j\u00ecn z\u00e0i shu\u01d0 l\u01d0 d\u01ceo l\u00e0n ch\u00e9ng ji\u0101ng\uff1b z\u00e0i b\u01ce ji\u0101ng l\u0101o ch\u016b l\u00e1i sh\u00e0i g\u0101n\uff0c ji\u00f9 ch\u00e9ng le y\u00ec zh\u01d2ng j\u00ec q\u012bng bi\u00e0n y\u00f2u h\u01ceo y\u00f2ng de zh\u01d0\u3002 y\u00f2ng zh\u00e8 zh\u01d2ng f\u0101ng f\u01ce z\u00e0o de zh\u01d0\uff0c yu\u00e1n li\u00e0o r\u00f3ng y\u00ec d\u00e9 d\u00e0o\uff0c k\u011b y\u01d0 d\u00e0 li\u00e0ng zh\u00ec z\u00e0o\uff0c ji\u00e0 g\u00e9 y\u00f2u pi\u00e1n yi\uff0c n\u00e9ng m\u01cen z\u00fa du\u014d sh\u00f9 r\u00e9n de x\u016b y\u00e0o\uff0c su\u01d2 y\u01d0 zh\u00e8 zh\u01d2ng z\u00e0o zh\u01d0 f\u0101ng f\u01ce ji\u00f9 chu\u00e1n ch\u00e9ng xi\u00e0 l\u00e1i le\u3002",
        "w\u01d2 gu\u00f3 de z\u00e0o zh\u01d0 sh\u00f9 sh\u01d2u xi\u0101n chu\u00e1n d\u00e0o l\u00edn j\u00ecn de ch\u00e1o xi\u0101n b\u00e0n d\u01ceo h\u00e9 r\u00ec b\u011bn\uff0c h\u00f2u l\u00e1i y\u00f2u chu\u00e1n d\u00e0o \u0101 l\u0101 b\u00f3 sh\u00ec ji\u00e8 h\u00e9 \u014du zh\u014du\uff0c j\u00ed d\u00e0 d\u00ec c\u00f9 j\u00ecn le r\u00e9n l\u00e8i sh\u00e8 hu\u00ec de j\u00ecn b\u00f9 h\u00e9 w\u00e9n hu\u00e0 de f\u0101 zh\u01cen\uff0c y\u01d0ng xi\u01ceng le qu\u00e1n sh\u00ec ji\u00e8\u3002"
      ],
      recognizeChars: ["创","存","普","制","蔡","伦","累","切","便","鲜","欧","洲","社"],
      writeChars: ["伟","录","保","存","约","验","捞","阿","欧","洲","社"],
      vocabWords: [
        {word:'发明',pinyin:'fā míng',en:'invent',sentence:'蔡伦改进了造纸术。',sentenceEn:'Cai Lun improved papermaking.'},
        {word:'记录',pinyin:'jì lù',en:'record',sentence:'人们用甲骨来记录事情。',sentenceEn:'People used oracle bones to record things.'},
        {word:'保存',pinyin:'bǎo cún',en:'preserve',sentence:'竹简不容易保存。',sentenceEn:'Bamboo slips were not easy to preserve.'},
        {word:'传承',pinyin:'chuán chéng',en:'pass down; inherit',sentence:'造纸术是伟大的传承。',sentenceEn:'Papermaking is a great inheritance.'},
        {word:'贡献',pinyin:'gòng xiàn',en:'contribution',sentence:'蔡伦对世界做出了巨大贡献。',sentenceEn:'Cai Lun made a great contribution to the world.'}
      ],
      footnotes: [
        {term:"\u53d1\u660e", termEn:"invent", definition:"\u3010f\u0101 m\u00edng\u3011invent\u3002", definitionEn:"invent"},
        {term:"\u8bb0\u5f55", termEn:"record", definition:"\u3010j\u00ec l\u00f9\u3011record\u3002", definitionEn:"record"},
        {term:"\u4fdd\u5b58", termEn:"preserve", definition:"\u3010b\u01ceo c\u00fan\u3011preserve\u3002", definitionEn:"preserve"},
        {term:"\u4f20\u627f", termEn:"pass down; inherit", definition:"\u3010chu\u00e1n ch\u00e9ng\u3011pass down; inherit\u3002", definitionEn:"pass down; inherit"},
        {term:"\u8d21\u732e", termEn:"contribution", definition:"\u3010g\u00f2ng xi\u00e0n\u3011contribution\u3002", definitionEn:"contribution"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'按时间顺序说明',pointEn:'àn shí jiān shùn xù shuō míng',example:'explain in chronological order',exampleEn:'早在几千年前……西汉时代……东汉时代……后来……',explanation:'As early as thousands of years ago...Western Han...Eastern Han...Later...',explanationEn:'用时间线索组织说明文内容'}
      ],
      exercises: [
        {type:"read",cn:"默读课文，想想每个自然段的意思，按照时间顺序填写图表。",en:"Read silently, think about the main idea of each paragraph, and fill in a timeline chart."},
        {type:"think",cn:"结合课文中的相关语句，说说为什么只有蔡伦改进的造纸术传承下来了。",en:"Using relevant sentences from the text, explain why only Cai Lun's improved papermaking was passed down."},
        {type:"extend",cn:"我国古代在很多领域都取得了重要的科技成就，如张衡发明了地动仪。查找资料和同学交流。",en:"Ancient China achieved many scientific accomplishments, such as Zhang Heng's seismometer. Research and discuss with classmates."}
      ],
      teachingPoints: [
        {cn:"课文按时间顺序介绍了造纸术的发展过程，注意各阶段的特点。",en:"The text introduces papermaking development chronologically; note each stage's characteristics."},
        {cn:"学习\u201C围绕一个意思把一段话写清楚\u201D的方法。",en:"Learn the method of 'writing a paragraph clearly around one central idea'."},
        {cn:"了解\u201C四大发明\u201D之一——造纸术对人类文明的重大意义。",en:"Understand the great significance of papermaking — one of the 'Four Great Inventions' — to human civilization."}
      ],
      parentTips: [
        {cn:"和孩子一起了解造纸术的历史，可以观看相关纪录片或参观博物馆。",en:"Learn about the history of papermaking together; watch documentaries or visit museums."},
        {cn:"引导孩子用时间线整理课文内容，练习按时间顺序叙述。",en:"Guide your child to organize the text using a timeline and practice chronological narration."}
      ]
    },
    {
      id: 11, title: "赵州桥", titleEn: "Zhaozhou Bridge",
      difficulty: 2,
      text: [
        "河北省赵县的洨河上，有一座世界闻名的石拱桥，叫安济桥，又叫赵州桥。它是隋朝的石匠李春设计并参加建造的，到现在已经有一千四百多年了。",
        "赵州桥非常雄伟。桥长五十多米，有九米多宽，中间行车马，两旁走人。这么长的桥，全部用石头砌成，下面没有桥墩，只有一个拱形的大桥洞，横跨在三十七米多宽的河面上。大桥洞顶上的左右两边，还各有两个拱形的小桥洞。平时，河水从大桥洞流过，发大水的时候，河水还可以从四个小桥洞流过。这种设计，在建桥史上是一个创举，既减轻了流水对桥身的冲击力，使桥不容易被大水冲毁，又减轻了桥身的重量，节省了石料。",
        "这座桥不但坚固，而且美观。桥面两侧有石栏，栏板上雕刻着精美的图案：有的刻着两条相互缠绕的龙，嘴里吐出美丽的水花；有的刻着两条飞龙，前爪相互抵着，各自回首遥望；还有的刻着双龙戏珠。所有的龙似乎都在游动，真像活了一样。",
        "赵州桥体现了劳动人民的智慧和才干，是我国宝贵的历史文化遗产。"
      ],
      textEn: [
        "Over the Xiao River in Zhao County, Hebei Province, there is a world-famous stone arch bridge called Anji Bridge, also known as Zhaozhou Bridge. It was designed and built by Li Chun, a stone mason of the Sui Dynasty, over 1,400 years ago.",
        "Zhaozhou Bridge is very grand. It is over 50 meters long and more than 9 meters wide, with the middle for carriages and horses, and the sides for pedestrians. This long bridge is made entirely of stone, with no pillars below — just one large arched opening spanning the river, which is over 37 meters wide. At the top of the large arch, on both left and right sides, there are two smaller arched openings. Normally, water flows through the large arch; during floods, water can also flow through the four smaller arches. This design was a breakthrough in bridge-building history: it reduced the impact of water on the bridge body, making it harder to destroy in floods, and also reduced the bridge's weight, saving stone materials.",
        "This bridge is not only sturdy but also beautiful. Stone railings line both sides of the bridge deck, with exquisite carvings on the railing panels: some show two intertwined dragons with beautiful water sprays from their mouths; some show two flying dragons with front claws touching, each looking back over its shoulder; and others show two dragons playing with a pearl. All the dragons seem to be moving — they look truly alive.",
        "Zhaozhou Bridge embodies the wisdom and skill of the working people and is a precious historical and cultural heritage of our nation."
      ],
      textPinyin: [
        "h\u00e9 b\u011bi sh\u011bng zh\u00e0o xi\u00e0n de xi\u00e1o h\u00e9 sh\u00e0ng\uff0c y\u01d2u y\u00ed zu\u00f2 sh\u00ec ji\u00e8 w\u00e9n m\u00edng de sh\u00ed g\u01d2ng qi\u00e1o\uff0c ji\u00e0o \u0101n j\u00ec qi\u00e1o\uff0c y\u00f2u ji\u00e0o zh\u00e0o zh\u014du qi\u00e1o\u3002 t\u0101 sh\u00ec su\u00ed ch\u00e1o de sh\u00ed ji\u00e0ng l\u01d0 ch\u016bn sh\u00e8 j\u00ec b\u00ecng c\u0101n ji\u0101 ji\u00e0n z\u00e0o de\uff0c d\u00e0o xi\u00e0n z\u00e0i y\u01d0 j\u012bng y\u01d2u y\u00ec qi\u0101n s\u00ec b\u01cei du\u014d ni\u00e1n le\u3002",
        "zh\u00e0o zh\u014du qi\u00e1o f\u0113i ch\u00e1ng xi\u00f3ng w\u011bi\u3002 qi\u00e1o ch\u00e1ng w\u01d4 sh\u00ed du\u014d m\u01d0\uff0c y\u01d2u ji\u01d4 m\u01d0 du\u014d ku\u0101n\uff0c zh\u014dng ji\u0101n x\u00edng ch\u0113 m\u01ce\uff0c li\u01ceng p\u00e1ng z\u01d2u r\u00e9n\u3002 zh\u00e8 me ch\u00e1ng de qi\u00e1o\uff0c qu\u00e1n b\u00f9 y\u00f2ng sh\u00ed tou q\u00ec ch\u00e9ng\uff0c xi\u00e0 mi\u00e0n m\u00e9i y\u01d2u qi\u00e1o d\u016bn\uff0c zh\u01d0 y\u01d2u y\u00ed g\u00e8 g\u01d2ng x\u00edng de d\u00e0 qi\u00e1o d\u00f2ng\uff0c h\u00e9ng ku\u00e0 z\u00e0i s\u0101n sh\u00ed q\u012b m\u01d0 du\u014d ku\u0101n de h\u00e9 mi\u00e0n sh\u00e0ng\u3002 d\u00e0 qi\u00e1o d\u00f2ng d\u01d0ng sh\u00e0ng de zu\u01d2 y\u00f2u li\u01ceng bi\u0101n\uff0c h\u00e1i g\u00e8 y\u01d2u li\u01ceng g\u00e8 g\u01d2ng x\u00edng de xi\u01ceo qi\u00e1o d\u00f2ng\u3002 p\u00edng sh\u00ed\uff0c h\u00e9 shu\u01d0 c\u00f3ng d\u00e0 qi\u00e1o d\u00f2ng li\u00fa gu\u00f2\uff0c f\u0101 d\u00e0 shu\u01d0 de sh\u00ed h\u00f2u\uff0c h\u00e9 shu\u01d0 h\u00e1i k\u011b y\u01d0 c\u00f3ng s\u00ec g\u00e8 xi\u01ceo qi\u00e1o d\u00f2ng li\u00fa gu\u00f2\u3002 zh\u00e8 zh\u01d2ng sh\u00e8 j\u00ec\uff0c z\u00e0i ji\u00e0n qi\u00e1o sh\u01d0 sh\u00e0ng sh\u00ec y\u00ed g\u00e8 chu\u00e0ng j\u01d4\uff0c j\u00ec ji\u01cen q\u012bng le li\u00fa shu\u01d0 du\u00ec qi\u00e1o sh\u0113n de ch\u014dng j\u012b l\u00ec\uff0c sh\u01d0 qi\u00e1o b\u00f9 r\u00f3ng y\u00ec b\u00e8i d\u00e0 shu\u01d0 ch\u014dng hu\u01d0\uff0c y\u00f2u ji\u01cen q\u012bng le qi\u00e1o sh\u0113n de zh\u00f2ng li\u00e0ng\uff0c ji\u00e9 sh\u011bng le sh\u00ed li\u00e0o\u3002",
        "zh\u00e8 zu\u00f2 qi\u00e1o b\u00fa d\u00e0n ji\u0101n g\u00f9\uff0c \u00e9r qi\u011b m\u011bi gu\u0101n\u3002 qi\u00e1o mi\u00e0n li\u01ceng c\u00e8 y\u01d2u sh\u00ed l\u00e1n\uff0c l\u00e1n b\u01cen sh\u00e0ng di\u0101o k\u00e8 zhe j\u012bng m\u011bi de t\u00fa \u00e0n\uff1a y\u01d2u de k\u00e8 zhe li\u01ceng ti\u00e1o xi\u0101ng h\u00f9 ch\u00e1n r\u00e0o de l\u00f3ng\uff0c zu\u01d0 l\u01d0 t\u01d4 ch\u016b m\u011bi l\u00ec de shu\u01d0 hu\u0101\uff1b y\u01d2u de k\u00e8 zhe li\u01ceng ti\u00e1o f\u0113i l\u00f3ng\uff0c qi\u00e1n zhu\u01ce xi\u0101ng h\u00f9 d\u01d0 zhe\uff0c g\u00e8 z\u00ec hu\u00ed sh\u01d2u y\u00e1o w\u00e0ng\uff1b h\u00e1i y\u01d2u de k\u00e8 zhe shu\u0101ng l\u00f3ng x\u00ec zh\u016b\u3002 su\u01d2 y\u01d2u de l\u00f3ng s\u00ec h\u016b d\u014du z\u00e0i y\u00f3u d\u00f2ng\uff0c zh\u0113n xi\u00e0ng hu\u00f3 le y\u00ed y\u00e0ng\u3002",
        "zh\u00e0o zh\u014du qi\u00e1o t\u01d0 xi\u00e0n le l\u00e1o d\u00f2ng r\u00e9n m\u00edn de zh\u00ec hu\u00ec h\u00e9 c\u00e1i g\u00e0n\uff0c sh\u00ec w\u01d2 gu\u00f3 b\u01ceo gu\u00ec de l\u00ec sh\u01d0 w\u00e9n hu\u00e0 y\u00ed ch\u01cen\u3002"
      ],
      recognizeChars: ["县","拱","济","匠","计","横","史","爪","智","慧","历"],
      writeChars: ["赵","省","县","匠","设","计","史","创","举","且","智","慧","历"],
      vocabWords: [
        {word:'雄伟',pinyin:'xióng wěi',en:'magnificent',sentence:'赵州桥非常雄伟。',sentenceEn:'Zhaozhou Bridge is very magnificent.'},
        {word:'创举',pinyin:'chuàng jǔ',en:'pioneering feat',sentence:'这种设计在建桥史上是一个创举。',sentenceEn:'This design was a pioneering feat in bridge history.'},
        {word:'精美',pinyin:'jīng měi',en:'exquisite',sentence:'桥面两侧有精美的石栏。',sentenceEn:'There are exquisite stone railings on both sides.'},
        {word:'图案',pinyin:'tú àn',en:'pattern; design',sentence:'栏板上雕刻着精美的图案。',sentenceEn:'Beautiful patterns are carved on the railings.'},
        {word:'智慧',pinyin:'zhì huì',en:'wisdom',sentence:'赵州桥体现了古代劳动人民的智慧。',sentenceEn:'Zhaozhou Bridge reflects the wisdom of ancient working people.'}
      ],
      footnotes: [
        {term:"\u96c4\u4f1f", termEn:"magnificent", definition:"\u3010xi\u00f3ng w\u011bi\u3011magnificent\u3002", definitionEn:"magnificent"},
        {term:"\u521b\u4e3e", termEn:"pioneering feat", definition:"\u3010chu\u00e0ng j\u01d4\u3011pioneering feat\u3002", definitionEn:"pioneering feat"},
        {term:"\u7cbe\u7f8e", termEn:"exquisite", definition:"\u3010j\u012bng m\u011bi\u3011exquisite\u3002", definitionEn:"exquisite"},
        {term:"\u56fe\u6848", termEn:"pattern; design", definition:"\u3010t\u00fa \u00e0n\u3011pattern; design\u3002", definitionEn:"pattern; design"},
        {term:"\u667a\u6167", termEn:"wisdom", definition:"\u3010zh\u00ec hu\u00ec\u3011wisdom\u3002", definitionEn:"wisdom"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'总分总结构',pointEn:'zǒng-fēn-zǒng',example:'general-specific-general',exampleEn:'赵州桥非常雄伟。……这座桥……体现了劳动人民的智慧和才干。',explanation:'Zhaozhou Bridge is magnificent...This bridge...reflects the wisdom and talent of working people.',explanationEn:'先总说特点，再分别介绍，最后总结'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文。抄写第3自然段，体会这段话是怎样把赵州桥的\u201C美观\u201D写清楚的。",en:"Read aloud. Copy paragraph 3 and think about how it clearly describes Zhaozhou Bridge's 'beauty'."},
        {type:"think",cn:"假如你是导游，试着用\u201C世界闻名\u201D\u201C雄伟\u201D\u201C创举\u201D\u201C美观\u201D等词语，向游客介绍赵州桥。",en:"If you were a tour guide, use words like 'world-famous', 'grand', 'breakthrough', 'beautiful' to introduce Zhaozhou Bridge."},
        {type:"extend",cn:"你还知道哪些\u201C我国宝贵的历史文化遗产\u201D？和同学交流。",en:"What other 'precious historical and cultural heritages' of China do you know? Discuss with classmates."}
      ],
      teachingPoints: [
        {cn:"学习\u201C不但……而且……\u201D的递进关系，体会课文从\u201C坚固\u201D到\u201C美观\u201D的层次。",en:"Learn the progressive 'not only...but also...' structure, appreciating the text's layers from 'sturdy' to 'beautiful'."},
        {cn:"第3自然段\u201C有的……有的……还有的……\u201D围绕\u201C美观\u201D展开具体描写。",en:"Paragraph 3 uses 'some...some...and others...' to elaborate on 'beauty' with specific descriptions."},
        {cn:"了解赵州桥的设计特点：拱形桥洞、无桥墩、小桥洞减轻冲击力。",en:"Understand Zhaozhou Bridge's design features: arched openings, no pillars, smaller arches reducing water impact."}
      ],
      parentTips: [
        {cn:"和孩子一起查找赵州桥的图片或视频，直观感受它的雄伟和美观。",en:"Look up pictures or videos of Zhaozhou Bridge together to visually appreciate its grandeur and beauty."},
        {cn:"引导孩子学习\u201C围绕一个意思把一段话写清楚\u201D的方法。",en:"Guide your child to learn the method of writing a clear paragraph around one central idea."}
      ]
    },
    {
      id: 12, title: "一幅名扬中外的画", titleEn: "A World-Famous Painting",
      difficulty: 2,
      isSelfRead: true,
      text: [
        "北宋时候，有位画家叫张择端。他画了一幅著名的画——《清明上河图》，画的是北宋都城汴京热闹的场面。这幅画有八九百年的历史，早已名扬中外，现在保存在北京故宫博物院里。",
        "张择端画这幅画的时候，下了很大功夫。光是画上的人物，就有好几百个：有从乡下来的农民，有撑船的船工，有做各种买卖的生意人，有留着长胡子的道士，有走江湖的医生，有摆小摊的摊贩，有官吏和读书人……三百六十行，哪一行的人都画在上面了。",
        "画上的街市可热闹了。街上有挂着各种招牌的店铺。走在街上的，是来来往往、形态各异的人：有的骑着马，有的挑着担，有的赶着毛驴，有的推着独轮车，有的悠闲地在街上溜达。画面上的这些人，有的不到一寸，有的甚至只有黄豆那么大。别看画上的人小，每个人在干什么，都能看得清清楚楚。",
        "最有意思的是桥北头的情景：一个人骑着马，正往桥下走。因为人太多，眼看就要撞上对面来的一乘轿子。就在这个紧急时刻，马笼头被一下子拽住了，这才没让马撞上那乘轿子。旁边两头运货的小毛驴正在下坡，脚下不稳。站在桥栏杆边欣赏风景的人被惊扰了，连忙回过头来……",
        "你看，张择端画的画，是多么传神啊！",
        "《清明上河图》使我们看到了八九百年以前的古都风貌，看到了当时普通百姓的生活情景。"
      ],
      textEn: [
        "During the Northern Song Dynasty, there was a painter named Zhang Zeduan. He painted a famous painting — 'Along the River During the Qingming Festival', depicting the bustling scenes of Bianjing, the Northern Song capital. This painting is eight or nine hundred years old, long renowned both in China and abroad, and is now preserved in the Palace Museum in Beijing.",
        "Zhang Zeduan put tremendous effort into this painting. The figures alone number several hundred: farmers from the countryside, boatmen punting boats, merchants of all kinds, Taoist priests with long beards, traveling doctors, vendors at small stalls, officials and scholars... Every trade under the sun is represented.",
        "The street markets in the painting are so lively. Shops line the streets with various signboards. Walking on the streets are people of all types: some riding horses, some carrying loads on shoulder poles, some driving donkeys, some pushing wheelbarrows, and some strolling leisurely. Some figures are less than an inch tall, some even as small as a soybean. Yet despite their tiny size, you can clearly see what each person is doing.",
        "The most interesting scene is at the north end of the bridge: a man on horseback is heading down the bridge. With so many people, he's about to collide with a sedan chair coming from the opposite direction. At this critical moment, someone grabs the horse's bridle, just barely preventing the collision. Nearby, two small cargo donkeys are going downhill on unsteady feet. A person enjoying the scenery by the bridge railing is startled and quickly turns to look...",
        "See how lifelike Zhang Zeduan's painting is!",
        "'Along the River During the Qingming Festival' lets us see the appearance of the ancient capital eight or nine hundred years ago and the daily life of ordinary people at that time."
      ],
      textPinyin: [
        "b\u011bi s\u00f2ng sh\u00ed h\u00f2u\uff0c y\u01d2u w\u00e8i hu\u00e0 ji\u0101 ji\u00e0o zh\u0101ng z\u00e9 du\u0101n\u3002 t\u0101 hu\u00e0 le y\u00ec f\u00fa zh\u00f9 m\u00edng de hu\u00e0\u2014\u2014\u300aq\u012bng m\u00edng sh\u00e0ng h\u00e9 t\u00fa\u300b\uff0c hu\u00e0 de sh\u00ec b\u011bi s\u00f2ng d\u016b ch\u00e9ng bi\u00e0n j\u012bng r\u00e8 n\u00e0o de ch\u01ceng mi\u00e0n\u3002 zh\u00e8 f\u00fa hu\u00e0 y\u01d2u b\u0101 ji\u01d4 b\u01cei ni\u00e1n de l\u00ec sh\u01d0\uff0c z\u01ceo y\u01d0 m\u00edng y\u00e1ng zh\u014dng w\u00e0i\uff0c xi\u00e0n z\u00e0i b\u01ceo c\u00fan z\u00e0i b\u011bi j\u012bng g\u00f9 g\u014dng b\u00f3 w\u00f9 yu\u00e0n l\u01d0\u3002",
        "zh\u0101ng z\u00e9 du\u0101n hu\u00e0 zh\u00e8 f\u00fa hu\u00e0 de sh\u00ed h\u00f2u\uff0c xi\u00e0 le h\u011bn d\u00e0 g\u014dng f\u016b\u3002 gu\u0101ng sh\u00ec hu\u00e0 sh\u00e0ng de r\u00e9n w\u00f9\uff0c ji\u00f9 y\u01d2u h\u01ceo j\u01d0 b\u01cei g\u00e8\uff1a y\u01d2u c\u00f3ng xi\u0101ng xi\u00e0 l\u00e1i de n\u00f3ng m\u00edn\uff0c y\u01d2u ch\u0113ng chu\u00e1n de chu\u00e1n g\u014dng\uff0c y\u01d2u zu\u00f2 g\u00e8 zh\u01d2ng m\u01cei m\u00e0i de sh\u0113ng y\u00ec r\u00e9n\uff0c y\u01d2u li\u00fa zhe ch\u00e1ng h\u00fa zi de d\u00e0o sh\u00ec\uff0c y\u01d2u z\u01d2u ji\u0101ng h\u00fa de y\u012b sh\u0113ng\uff0c y\u01d2u b\u01cei xi\u01ceo t\u0101n de t\u0101n f\u00e0n\uff0c y\u01d2u gu\u0101n l\u00ec h\u00e9 d\u00fa sh\u016b r\u00e9n\u2026\u2026 s\u0101n b\u01cei li\u00f9 sh\u00ed h\u00e1ng\uff0c n\u01ce y\u00ec h\u00e1ng de r\u00e9n d\u014du hu\u00e0 z\u00e0i sh\u00e0ng mi\u00e0n le\u3002",
        "hu\u00e0 sh\u00e0ng de ji\u0113 sh\u00ec k\u011b r\u00e8 n\u00e0o le\u3002 ji\u0113 sh\u00e0ng y\u01d2u gu\u00e0 zhe g\u00e8 zh\u01d2ng zh\u0101o p\u00e1i de di\u00e0n p\u00f9\u3002 z\u01d2u z\u00e0i ji\u0113 sh\u00e0ng de\uff0c sh\u00ec l\u00e1i l\u00e1i w\u01ceng w\u01ceng\u3001 x\u00edng t\u00e0i g\u00e8 y\u00ec de r\u00e9n\uff1a y\u01d2u de q\u00ed zhe m\u01ce\uff0c y\u01d2u de ti\u0101o zhe d\u0101n\uff0c y\u01d2u de g\u01cen zhe m\u00e1o l\u01d8\uff0c y\u01d2u de tu\u012b zhe d\u00fa l\u00fan ch\u0113\uff0c y\u01d2u de y\u014du xi\u00e1n d\u00ec z\u00e0i ji\u0113 sh\u00e0ng li\u016b da\u3002 hu\u00e0 mi\u00e0n sh\u00e0ng de zh\u00e8 xi\u0113 r\u00e9n\uff0c y\u01d2u de b\u00fa d\u00e0o y\u00ed c\u00f9n\uff0c y\u01d2u de sh\u00e8n zh\u00ec zh\u01d0 y\u01d2u hu\u00e1ng d\u00f2u n\u00e0 me d\u00e0\u3002 bi\u00e9 k\u00e0n hu\u00e0 sh\u00e0ng de r\u00e9n xi\u01ceo\uff0c m\u011bi g\u00e8 r\u00e9n z\u00e0i g\u00e0n sh\u00e9n me\uff0c d\u014du n\u00e9ng k\u00e0n d\u00e9 q\u012bng q\u012bng ch\u01d4 ch\u01d4\u3002",
        "zu\u00ec y\u01d2u y\u00ec s\u012b de sh\u00ec qi\u00e1o b\u011bi t\u00f3u de q\u00edng j\u01d0ng\uff1a y\u00ed g\u00e8 r\u00e9n q\u00ed zhe m\u01ce\uff0c zh\u00e8ng w\u01ceng qi\u00e1o xi\u00e0 z\u01d2u\u3002 y\u012bn w\u00e8i r\u00e9n t\u00e0i du\u014d\uff0c y\u01cen k\u00e0n ji\u00f9 y\u00e0o zhu\u00e0ng sh\u00e0ng du\u00ec mi\u00e0n l\u00e1i de y\u00ec ch\u00e9ng ji\u00e0o z\u01d0\u3002 ji\u00f9 z\u00e0i zh\u00e8 ge j\u01d0n j\u00ed sh\u00ed k\u00e8\uff0c m\u01ce l\u00f3ng t\u00f3u b\u00e8i y\u00ed xi\u00e0 z\u01d0 zhu\u00e0i zh\u00f9 le\uff0c zh\u00e8 c\u00e1i m\u00e9i r\u00e0ng m\u01ce zhu\u00e0ng sh\u00e0ng n\u00e0 ch\u00e9ng ji\u00e0o z\u01d0\u3002 p\u00e1ng bi\u0101n li\u01ceng t\u00f3u y\u00f9n hu\u00f2 de xi\u01ceo m\u00e1o l\u01d8 zh\u00e8ng z\u00e0i xi\u00e0 p\u014d\uff0c ji\u01ceo xi\u00e0 b\u00f9 w\u011bn\u3002 zh\u00e0n z\u00e0i qi\u00e1o l\u00e1n g\u0101n bi\u0101n x\u012bn sh\u01ceng f\u0113ng j\u01d0ng de r\u00e9n b\u00e8i j\u012bng r\u01ceo le\uff0c li\u00e1n m\u00e1ng hu\u00ed gu\u00f2 t\u00f3u l\u00e1i\u2026\u2026",
        "n\u01d0 k\u00e0n\uff0c zh\u0101ng z\u00e9 du\u0101n hu\u00e0 de hu\u00e0\uff0c sh\u00ec du\u014d me chu\u00e1n sh\u00e9n a\uff01",
        "\u300aq\u012bng m\u00edng sh\u00e0ng h\u00e9 t\u00fa\u300bsh\u01d0 w\u01d2 men k\u00e0n d\u00e0o le b\u0101 ji\u01d4 b\u01cei ni\u00e1n y\u01d0 qi\u00e1n de g\u01d4 d\u014du f\u0113ng m\u00e0o\uff0c k\u00e0n d\u00e0o le d\u0101ng sh\u00ed p\u01d4 t\u014dng b\u01cei x\u00ecng de sh\u0113ng hu\u00f3 q\u00edng j\u01d0ng\u3002"
      ],
      recognizeChars: ["择","宫","摊","贩","吏","驴","乘","笼","栏","貌"],
      vocabWords: [
        {word:'名扬中外',pinyin:'míng yáng zhōng wài',en:'famous at home and abroad',sentence:'清明上河图是一幅名扬中外的画。',sentenceEn:'Along the River During Qingfeng Festival is a world-famous painting.'},
        {word:'汴京',pinyin:'biàn jīng',en:'Bianjing (ancient Kaifeng)',sentence:'画的是北宋都城汴京的街市。',sentenceEn:'It depicts the streets of the Northern Song capital Bianjing.'},
        {word:'摊贩',pinyin:'tān fàn',en:'street vendor',sentence:'街上有做买卖的摊贩。',sentenceEn:'There are street vendors on the road.'},
        {word:'形态各异',pinyin:'xíng tài gè yì',en:'varied forms',sentence:'画上的人形态各异。',sentenceEn:'The people in the painting have varied forms.'},
        {word:'传神',pinyin:'chuán shén',en:'vivid; lifelike',sentence:'画得非常传神。',sentenceEn:'Painted very vividly.'}
      ],
      grammarPoints: [
        {point: "\u56e0\u4e3a\u2026\u2026\u6240\u4ee5\u2026\u2026", pointEn: "because...therefore...", example: "\u5317\u5b8b\u65f6\u5019\uff0c\u6709\u4f4d\u753b\u5bb6\u53eb\u5f20\u62e9\u7aef\u3002", exampleEn: "During the Northern Song Dynasty, there was a painter named Zhang Zeduan. He pai", explanation: "\u56e0\u679c\u590d\u53e5\uff0c\u8868\u793a\u539f\u56e0\u548c\u7ed3\u679c\u7684\u5173\u7cfb", explanationEn: "Causal compound sentence expressing cause and effect"},
        {point: "\u88ab\u5b57\u53e5", pointEn: "b\u00e8i-construction (passive)", example: "\u5317\u5b8b\u65f6\u5019\uff0c\u6709\u4f4d\u753b\u5bb6\u53eb\u5f20\u62e9\u7aef\u3002", exampleEn: "During the Northern Song Dynasty, there was a painter named Zhang Zeduan. He pai", explanation: "\u88ab\u52a8\u53e5\uff0c\u8868\u793a\u4e3b\u8bed\u662f\u52a8\u4f5c\u7684\u627f\u53d7\u8005", explanationEn: "Passive construction where the subject receives the action"}
      ],
      footnotes: [
        {term:"\u540d\u626c\u4e2d\u5916", termEn:"famous at home and abroad", definition:"\u3010m\u00edng y\u00e1ng zh\u014dng w\u00e0i\u3011famous at home and abroad\u3002", definitionEn:"famous at home and abroad"},
        {term:"\u6c74\u4eac", termEn:"Bianjing (ancient Kaifeng)", definition:"\u3010bi\u00e0n j\u012bng\u3011Bianjing (ancient Kaifeng)\u3002", definitionEn:"Bianjing (ancient Kaifeng)"},
        {term:"\u644a\u8d29", termEn:"street vendor", definition:"\u3010t\u0101n f\u00e0n\u3011street vendor\u3002", definitionEn:"street vendor"},
        {term:"\u5f62\u6001\u5404\u5f02", termEn:"varied forms", definition:"\u3010x\u00edng t\u00e0i g\u00e8 y\u00ec\u3011varied forms\u3002", definitionEn:"varied forms"},
        {term:"\u4f20\u795e", termEn:"vivid; lifelike", definition:"\u3010chu\u00e1n sh\u00e9n\u3011vivid; lifelike\u3002", definitionEn:"vivid; lifelike"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"默读课文，说一说为什么《清明上河图》会名扬中外。",en:"Read silently and explain why 'Along the River During the Qingming Festival' is famous worldwide."},
        {type:"think",cn:"结合课文内容和图画，向别人介绍《清明上河图》。",en:"Using the text and illustrations, introduce 'Along the River During the Qingming Festival' to others."},
        {type:"practice",cn:"课文是怎样围绕\u201C名扬中外\u201D来写的？找出关键语句。",en:"How does the text develop around 'world-famous'? Find the key sentences."}
      ],
      teachingPoints: [
        {cn:"学习课文从\u201C人物\u201D\u201C街市\u201D\u201C桥头情景\u201D三个方面介绍名画的写法。",en:"Learn how the text introduces the famous painting from three aspects: figures, street markets, bridge scene."},
        {cn:"体会\u201C有的……有的……有的……\u201D的排比句式在展示画面内容中的作用。",en:"Appreciate how the parallel 'some...some...some...' structure presents the painting's content."},
        {cn:"了解《清明上河图》的历史价值和艺术价值。",en:"Understand the historical and artistic value of 'Along the River During the Qingming Festival'."}
      ],
      parentTips: [
        {cn:"和孩子一起在网上查看《清明上河图》的高清图片，对照课文欣赏画面细节。",en:"Look up high-resolution images of the painting online and appreciate details alongside the text."},
        {cn:"引导孩子用\u201C有的……有的……\u201D句式练习描写生活场景。",en:"Guide your child to practice describing life scenes using the 'some...some...' structure."}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"文房四宝：笔墨纸砚\n雅人四好：琴棋书画\n中医四诊：望闻问切",en:"Four Treasures of the Study: brush, ink, paper, inkstone\nFour Refined Pursuits: zither, chess, calligraphy, painting\nFour Methods of Chinese Medicine: observation, listening, inquiry, palpation"}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"对照流程图读一段话，照样子口头介绍一次手工活动的过程。读一读\u201C有的……有的……还有的……\u201D的句子，照样子写一写。",en:"Follow a flow chart to read a paragraph, then orally describe a handicraft process. Read 'some...some...and others...' sentences and write your own."}},
    composition: {title:"综合性学习",titleEn:"Comprehensive Learning",prompt:{cn:"中华传统节日——选一个传统节日，写一篇习作。可以写自己家过节的过程，也可以写节日中发生的印象深刻的故事。",en:"Chinese Traditional Festivals — Choose a traditional festival and write about it. You can write about how your family celebrates or describe an impressive festival story."},modelEssays:[
      {title:"快乐的春节",titleEn:"Happy Spring Festival",level:"基础",
      structure:[
        {cn:"开头：写春节到来的气氛",en:"Opening: Describe the festive atmosphere"},
        {cn:"中间：写过节的活动",en:"Body: Describe festival activities"},
        {cn:"结尾：写开心的心情",en:"Ending: Express happy feelings"}
      ],
      cn:"过年了！过年了！\n一大早，妈妈就忙着贴春联，爸爸在厨房里准备年夜饭。我和妹妹穿上了新衣服，高兴得跳来跳去。\n晚上，我们全家人围坐在一起吃年夜饭。桌子上摆满了好吃的菜，有红烧鱼、饺子、年糕，还有我最爱的糖醋排骨。爷爷举起杯子说：\u201C祝大家新年快乐！\u201D我们一起碰杯，都笑了。吃完饭，爷爷奶奶给我们发了红包。到了十二点，外面响起了\u201C噼里啪啦\u201D的鞭炮声，天空中绽放出五颜六色的烟花，美极了！\n春节真是一个快乐的节日，我盼望着下一个春节快点到来！",
      en:"It\u2019s New Year! It\u2019s New Year!\nEarly in the morning, Mom was busy putting up Spring Festival couplets, and Dad was preparing the New Year\u2019s Eve dinner in the kitchen. My sister and I put on our new clothes and jumped around happily.\nIn the evening, our whole family sat together for the New Year\u2019s Eve dinner. The table was full of delicious dishes: braised fish, dumplings, rice cakes, and my favorite sweet-and-sour ribs. Grandpa raised his glass and said, \u201CHappy New Year to everyone!\u201D We all clinked glasses and laughed. After dinner, Grandma and Grandpa gave us red envelopes. At midnight, firecrackers crackled outside, and colorful fireworks bloomed across the sky \u2014 so beautiful!\nSpring Festival is truly a joyful holiday. I can\u2019t wait for the next one!",
      notes:"这篇范文按时间顺序写过年：早上→晚上→十二点。写了贴春联、年夜饭、发红包、放鞭炮等活动，内容丰富。用了语言描写（爷爷的话）和声音描写（噼里啪啦）。",
      notesEn:"This essay follows chronological order: morning → evening → midnight. It covers couplets, dinner, red envelopes, and firecrackers — rich content. It includes dialogue (Grandpa's words) and sound descriptions (crackling)."},
      {title:"端午节的粽子",titleEn:"Dragon Boat Festival Zongzi",level:"提高",
      structure:[
        {cn:"开头：引出节日和习俗",en:"Opening: Introduce the festival and customs"},
        {cn:"中间：详细写包粽子的过程",en:"Body: Describe the zongzi-making process in detail"},
        {cn:"结尾：写品尝粽子的感受",en:"Ending: Share the experience of tasting zongzi"}
      ],
      cn:"农历五月初五是端午节。每年这个时候，奶奶都会包粽子。\n一大早，奶奶就把翠绿的粽叶泡在水里，又准备好了糯米、红枣和红豆。只见奶奶拿起两片粽叶，卷成一个小漏斗的形状，然后舀一勺糯米放进去，塞上两颗红枣，再铺一层糯米，最后把粽叶折过来，用细绳扎得紧紧的。奶奶的手又快又巧，不一会儿就包了一大盆。\n我也想学，可是粽叶在我手里怎么也卷不好，糯米还从缝里漏出来。奶奶笑着说：\u201C别急，慢慢来，多练几次就好了。\u201D在奶奶的帮助下，我终于包好了一个，虽然样子有点丑，但我心里美滋滋的。\n粽子煮好了，解开绳子，剥开粽叶，白白的糯米散发出清香，咬一口，又甜又糯。我觉得自己包的那个最好吃！",
      en:"The fifth day of the fifth lunar month is the Dragon Boat Festival. Every year, Grandma makes zongzi.\nEarly in the morning, Grandma soaked emerald-green bamboo leaves in water and prepared sticky rice, red dates, and red beans. She picked up two leaves, rolled them into a little funnel, spooned in sticky rice, tucked in two dates, added another layer of rice, then folded the leaves over and tied them tightly with string. Her hands were quick and skillful — before long, she had filled a whole basin.\nI wanted to learn too, but the leaves wouldn\u2019t roll properly in my hands, and rice kept leaking through the gaps. Grandma smiled and said, \u201CDon\u2019t rush. Take your time. You\u2019ll get it with practice.\u201D With her help, I finally wrapped one. It looked a bit ugly, but I felt so proud.\nWhen the zongzi were cooked, I untied the string and peeled back the leaves. The white sticky rice gave off a lovely fragrance. I took a bite — sweet and chewy. I thought the one I made tasted the best!",
      notes:"这篇范文围绕\u201C包粽子\u201D这件事展开，动作描写细致（卷、舀、塞、折、扎），体现了\u201C围绕一个意思写清楚\u201D的方法。\u201C我\u201D学包粽子的过程增加了趣味性，奶奶的话体现了温情。结尾的品尝描写调动了味觉和嗅觉。",
      notesEn:"This essay focuses on making zongzi with detailed action descriptions (rolling, scooping, tucking, folding, tying), demonstrating the 'write clearly around one idea' method. The attempt to learn adds fun, and Grandma's words show warmth. The tasting at the end engages taste and smell."},
      {title:"元宵节的花灯",titleEn:"Lantern Festival Lights",level:"拓展",
      structure:[
        {cn:"开头：用古诗或传说引入",en:"Opening: Introduce with a poem or legend"},
        {cn:"中间：多角度描写花灯和猜灯谜",en:"Body: Describe lanterns and riddle-guessing from multiple angles"},
        {cn:"过渡：穿插一个有趣的小故事",en:"Transition: Weave in an interesting anecdote"},
        {cn:"结尾：从节日联想到传统文化",en:"Ending: Connect the festival to traditional culture"}
      ],
      cn:"\u201C去年元夜时，花市灯如昼。\u201D每年农历正月十五元宵节，我们小区都会举办热闹的花灯会。\n今年的花灯会比往年更加精彩。一进门，就看到一条巨大的金色龙灯，龙身上的鳞片闪闪发亮，龙头高高昂起，威风极了。往里走，各种各样的花灯让人目不暇接：有憨态可掬的兔子灯，有含苞欲放的莲花灯，还有栩栩如生的鲤鱼灯。所有的灯笼都亮了起来，红的、黄的、紫的、绿的，把夜晚装扮得如同白昼。\n最有趣的是猜灯谜。每盏灯笼下面都挂着一张红纸条。我看到一个谜面：\u201C千条线，万条线，落到水里都不见。\u201D我想了想，高兴地喊道：\u201C是雨！是雨！\u201D工作人员笑着递给我一个小兔子玩偶作为奖品。妈妈猜中了三个，爸爸只猜中了一个，他不好意思地挠挠头说：\u201C看来我得多读书了！\u201D全家人都哈哈大笑。\n走在回家的路上，我回头望去，满天的灯火像漫天的星星。这一刻，我深深地感受到中华传统文化的美好。这些美丽的花灯，不仅照亮了夜空，也照亮了我们心中对美好生活的向往。",
      en:"\u201CLast year on the night of the Lantern Festival, the flower market was bright as day.\u201D Every year on the fifteenth of the first lunar month, our neighborhood holds a lively lantern festival.\nThis year\u2019s lantern display was more spectacular than ever. Right at the entrance stood a huge golden dragon lantern, its scales gleaming, its head raised high \u2014 truly majestic. Further in, all kinds of lanterns dazzled the eyes: adorable rabbit lanterns, lotus lanterns about to bloom, and lifelike carp lanterns. When all the lanterns lit up \u2014 red, yellow, purple, green \u2014 the night became as bright as day.\nThe most fun part was guessing lantern riddles. A red paper strip hung beneath each lantern. I saw one: \u201CThousands of threads, tens of thousands of threads, all vanish when they hit the water.\u201D I thought for a moment and shouted happily, \u201CIt\u2019s rain! It\u2019s rain!\u201D The staff member smiled and handed me a little rabbit plush as a prize. Mom guessed three correctly, but Dad only got one. He scratched his head sheepishly and said, \u201CGuess I need to read more!\u201D The whole family burst into laughter.\nWalking home, I looked back and saw the lantern lights like a sky full of stars. At that moment, I deeply felt the beauty of Chinese traditional culture. These beautiful lanterns not only lit up the night sky but also illuminated our hearts\u2019 longing for a wonderful life.",
      notes:"这篇范文以古诗开头，营造文化氛围。花灯描写用了排比句式（有……有……还有……），色彩丰富。猜灯谜的小故事增加了趣味性和真实感，爸爸的话让人会心一笑。结尾用比喻（灯火像星星）和\u201C不仅……也……\u201D的句式，从具体的节日升华到对传统文化的感悟，体现了较高的写作水平。",
      notesEn:"This essay opens with an ancient poem, creating a cultural atmosphere. The lantern descriptions use parallel structure (some...some...and...) with rich colors. The riddle-guessing anecdote adds fun and authenticity, and Dad's remark draws a smile. The ending uses simile (lights like stars) and the 'not only...but also...' pattern, elevating from a specific festival to appreciation of traditional culture, showing advanced writing skill."}
    ]}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 4 — 观察与发现 Observation (13-15)    */
/* ═══════════════════════════════════════════ */
{
  id: 4, title: "观察与发现", titleEn: "Observation & Discovery",
  difficulty: 2,
  type: "kewen",
  lessons: [
    {
      id: 13, title: "花钟", titleEn: "The Flower Clock",
      difficulty: 2,
      text: [
        "鲜花朵朵，争奇斗艳，芬芳迷人。要是我们留心观察，就会发现，一天之内，不同的花开放的时间是不同的。凌晨四点，牵牛花吹起了紫色的小喇叭；五点左右，艳丽的蔷薇绽开了笑脸；七点，睡莲从梦中醒来；中午十二点左右，午时花开花了；下午三点，万寿菊欣然怒放；下午五点，紫茉莉苏醒过来；月光花在七点左右舒展开自己的花瓣；夜来香在晚上八点开花；昙花却在九点左右含笑一现……",
        "不同的植物为什么开花的时间不同呢？有的植物开花的时间，与温度、湿度、光照有着密切的关系。比如，昙花的花瓣又大又娇嫩，白天阳光强，气温高，空气干燥，要是在白天开花，就有被灼伤的危险。深夜气温过低，开花也不适宜。长期以来，它适应了晚上九点左右的温度和湿度，到了那时，便悄悄绽开淡雅的花蕾，向人们展示美丽的笑脸。还有的花，需要昆虫传播花粉，才能结出种子，它们开花的时间往往跟昆虫活动的时间相吻合。",
        "一位植物学家曾有意把不同时间开放的花种在一起，把花圃修建得像钟面一样，组成花的\u201C时钟\u201D。这些花在二十四小时内依次开放。你只要看看什么花刚刚开放，就知道大致是几点钟，这是不是很有趣？"
      ],
      textEn: [
        "Flowers bloom in splendid variety, fragrant and enchanting. If we observe carefully, we'll find that different flowers open at different times of day. At 4 AM, morning glories sound their purple little trumpets; around 5 AM, gorgeous roses unfurl their smiling faces; at 7 AM, water lilies awaken from dreams; around noon, the noon flower blooms; at 3 PM, marigolds burst into full bloom; at 5 PM, four-o'clocks come alive; moonflowers spread their petals around 7 PM; night-blooming jasmine flowers at 8 PM; and the cereus briefly smiles around 9 PM...",
        "Why do different plants bloom at different times? For some plants, blooming time is closely related to temperature, humidity, and light. For example, the cereus has large, delicate petals. In daytime, with strong sunlight, high temperature, and dry air, blooming would risk sun damage. Late at night, it's too cold to bloom. Over time, the cereus adapted to the temperature and humidity around 9 PM, when it quietly opens its elegant buds, showing its beautiful face to people. Other flowers need insects to pollinate and produce seeds, so their blooming times often coincide with insect activity.",
        "A botanist once deliberately planted flowers that bloom at different times together, building a flower bed shaped like a clock face, creating a flower 'clock'. These flowers bloomed in sequence over 24 hours. Just by seeing which flower had just opened, you could tell roughly what time it was — isn't that fascinating?"
      ],
      textPinyin: [
        "xi\u0101n hu\u0101 du\u01d2 du\u01d2\uff0c zh\u0113ng q\u00ed d\u00f2u y\u00e0n\uff0c f\u0113n f\u0101ng m\u00ed r\u00e9n\u3002 y\u00e0o shi w\u01d2 men li\u00fa x\u012bn gu\u0101n ch\u00e1\uff0c ji\u00f9 hu\u00ec f\u0101 xi\u00e0n\uff0c y\u00ec ti\u0101n zh\u012b n\u00e8i\uff0c b\u00f9 t\u00f3ng de hu\u0101 k\u0101i f\u00e0ng de sh\u00ed ji\u0101n sh\u00ec b\u00f9 t\u00f3ng de\u3002 l\u00edng ch\u00e9n s\u00ec di\u01cen\uff0c qi\u0101n ni\u00fa hu\u0101 chu\u012b q\u01d0 le z\u01d0 s\u00e8 de xi\u01ceo l\u01ce ba\uff1b w\u01d4 di\u01cen zu\u01d2 y\u00f2u\uff0c y\u00e0n l\u00ec de qi\u00e1ng w\u0113i zh\u00e0n k\u0101i le xi\u00e0o li\u01cen\uff1b q\u012b di\u01cen\uff0c shu\u00ec li\u00e1n c\u00f3ng m\u00e8ng zh\u014dng x\u01d0ng l\u00e1i\uff1b zh\u014dng w\u01d4 sh\u00ed \u00e8r di\u01cen zu\u01d2 y\u00f2u\uff0c w\u01d4 sh\u00ed hu\u0101 k\u0101i hu\u0101 le\uff1b xi\u00e0 w\u01d4 s\u0101n di\u01cen\uff0c w\u00e0n sh\u00f2u j\u00fa x\u012bn r\u00e1n n\u00f9 f\u00e0ng\uff1b xi\u00e0 w\u01d4 w\u01d4 di\u01cen\uff0c z\u01d0 m\u00f2 l\u00ec s\u016b x\u01d0ng gu\u00f2 l\u00e1i\uff1b yu\u00e8 gu\u0101ng hu\u0101 z\u00e0i q\u012b di\u01cen zu\u01d2 y\u00f2u sh\u016b zh\u01cen k\u0101i z\u00ec j\u01d0 de hu\u0101 b\u00e0n\uff1b y\u00e8 l\u00e1i xi\u0101ng z\u00e0i w\u01cen sh\u00e0ng b\u0101 di\u01cen k\u0101i hu\u0101\uff1b t\u00e1n hu\u0101 qu\u00e8 z\u00e0i ji\u01d4 di\u01cen zu\u01d2 y\u00f2u h\u00e1n xi\u00e0o y\u00ed xi\u00e0n\u2026\u2026",
        "b\u00f9 t\u00f3ng de zh\u00ed w\u00f9 w\u00e8i sh\u00e9n me k\u0101i hu\u0101 de sh\u00ed ji\u0101n b\u00f9 t\u00f3ng ne\uff1f y\u01d2u de zh\u00ed w\u00f9 k\u0101i hu\u0101 de sh\u00ed ji\u0101n\uff0c y\u01d4 w\u0113n d\u00f9\u3001 sh\u012b d\u00f9\u3001 gu\u0101ng zh\u00e0o y\u01d2u zhe m\u00ec qi\u00e8 de gu\u0101n x\u00ec\u3002 b\u01d0 r\u00fa\uff0c t\u00e1n hu\u0101 de hu\u0101 b\u00e0n y\u00f2u d\u00e0 y\u00f2u ji\u0101o n\u00e8n\uff0c b\u00e1i ti\u0101n y\u00e1ng gu\u0101ng qi\u00e1ng\uff0c q\u00ec w\u0113n g\u0101o\uff0c k\u014dng q\u00ec g\u0101n z\u00e0o\uff0c y\u00e0o shi z\u00e0i b\u00e1i ti\u0101n k\u0101i hu\u0101\uff0c ji\u00f9 y\u01d2u b\u00e8i zhu\u00f3 sh\u0101ng de w\u0113i xi\u01cen\u3002 sh\u0113n y\u00e8 q\u00ec w\u0113n gu\u00f2 d\u012b\uff0c k\u0101i hu\u0101 y\u011b b\u00fa sh\u00ec y\u00ed\u3002 ch\u00e1ng q\u012b y\u01d0 l\u00e1i\uff0c t\u0101 sh\u00ec y\u00ecng le w\u01cen sh\u00e0ng ji\u01d4 di\u01cen zu\u01d2 y\u00f2u de w\u0113n d\u00f9 h\u00e9 sh\u012b d\u00f9\uff0c d\u00e0o le n\u00e0 sh\u00ed\uff0c bi\u00e0n qi\u0101o qi\u0101o zh\u00e0n k\u0101i d\u00e0n y\u01ce de hu\u0101 l\u011bi\uff0c xi\u00e0ng r\u00e9n men zh\u01cen sh\u00ec m\u011bi l\u00ec de xi\u00e0o li\u01cen\u3002 h\u00e1i y\u01d2u de hu\u0101\uff0c x\u016b y\u00e0o k\u016bn ch\u00f3ng chu\u00e1n b\u014d hu\u0101 f\u011bn\uff0c c\u00e1i n\u00e9ng ji\u00e9 ch\u016b zh\u01d2ng zi\uff0c t\u0101 men k\u0101i hu\u0101 de sh\u00ed ji\u0101n w\u01ceng w\u01ceng g\u0113n k\u016bn ch\u00f3ng hu\u00f3 d\u00f2ng de sh\u00ed ji\u0101n xi\u0101ng w\u011bn h\u00e9\u3002",
        "y\u00ed w\u00e8i zh\u00ed w\u00f9 xu\u00e9 ji\u0101 c\u00e9ng y\u01d2u y\u00ec b\u01ce b\u00f9 t\u00f3ng sh\u00ed ji\u0101n k\u0101i f\u00e0ng de hu\u0101 zh\u01d2ng z\u00e0i y\u00ec q\u01d0\uff0c b\u01ce hu\u0101 p\u01d4 xi\u016b ji\u00e0n d\u00e9 xi\u00e0ng zh\u014dng mi\u00e0n y\u00ed y\u00e0ng\uff0c z\u01d4 ch\u00e9ng hu\u0101 de \u201c sh\u00ed zh\u014dng \u201d\u3002 zh\u00e8 xi\u0113 hu\u0101 z\u00e0i \u00e8r sh\u00ed s\u00ec xi\u01ceo sh\u00ed n\u00e8i y\u012b c\u00ec k\u0101i f\u00e0ng\u3002 n\u01d0 zh\u01d0 y\u00e0o k\u00e0n k\u00e0n sh\u00e9n me hu\u0101 g\u0101ng g\u0101ng k\u0101i f\u00e0ng\uff0c ji\u00f9 zh\u012b d\u00e0o d\u00e0 zh\u00ec sh\u00ec j\u01d0 di\u01cen zh\u014dng\uff0c zh\u00e8 sh\u00ec bu sh\u00ec h\u011bn y\u01d2u q\u00f9\uff1f"
      ],
      recognizeChars: ["芬","芳","内","系","燥","适","雅","吻","组"],
      writeChars: ["芬","芳","内","醒","寿","苏","强","示","昆","修","建","组"],
      vocabWords: [
        {word:'淡雅',pinyin:'dàn yǎ',en:'elegant; understated',sentence:'淡雅的花朵。',sentenceEn:'Elegant flowers.'},
        {word:'艳丽',pinyin:'yàn lì',en:'gorgeous',sentence:'艳丽的蔷薇花。',sentenceEn:'Gorgeous roses.'},
        {word:'绽放',pinyin:'zhàn fàng',en:'bloom',sentence:'不同的花在不同的时间绽放。',sentenceEn:'Different flowers bloom at different times.'},
        {word:'大致',pinyin:'dà zhì',en:'roughly; approximately',sentence:'植物开花的时间与温度、湿度大致有关。',sentenceEn:'The blooming time is roughly related to temperature and humidity.'},
        {word:'吻合',pinyin:'wěn hé',en:'match; coincide',sentence:'观察结果与规律吻合。',sentenceEn:'The observations match the pattern.'}
      ],
      footnotes: [
        {term:"\u6de1\u96c5", termEn:"elegant; understated", definition:"\u3010d\u00e0n y\u01ce\u3011elegant; understated\u3002", definitionEn:"elegant; understated"},
        {term:"\u8273\u4e3d", termEn:"gorgeous", definition:"\u3010y\u00e0n l\u00ec\u3011gorgeous\u3002", definitionEn:"gorgeous"},
        {term:"\u7efd\u653e", termEn:"bloom", definition:"\u3010zh\u00e0n f\u00e0ng\u3011bloom\u3002", definitionEn:"bloom"},
        {term:"\u5927\u81f4", termEn:"roughly; approximately", definition:"\u3010d\u00e0 zh\u00ec\u3011roughly; approximately\u3002", definitionEn:"roughly; approximately"},
        {term:"\u543b\u5408", termEn:"match; coincide", definition:"\u3010w\u011bn h\u00e9\u3011match; coincide\u3002", definitionEn:"match; coincide"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'因果关系',pointEn:'yīn guǒ guān xì',example:'cause and effect',exampleEn:'植物开花的时间，与……有关系。',explanation:'The blooming time of plants is related to...',explanationEn:'用原因解释现象，学习说明方法'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文。背诵第1自然段。",en:"Read aloud. Recite paragraph 1."},
        {type:"think",cn:"默读第1～2自然段，分别说说这两段话的大意。",en:"Read paragraphs 1-2 silently and summarize each paragraph's main idea."},
        {type:"write",cn:"小练笔：仿照课文中表达鲜花开放的语句，写一写你喜欢的花。",en:"Mini writing: Imitate the text's descriptions of flowers blooming to write about a flower you like."}
      ],
      teachingPoints: [
        {cn:"学习借助关键语句概括段落大意的方法。",en:"Learn to summarize paragraph main ideas using key sentences."},
        {cn:"体会课文用不同的说法来表达鲜花开放的写法，如\u201C吹起小喇叭\u201D\u201C绽开笑脸\u201D\u201C从梦中醒来\u201D。",en:"Appreciate the varied expressions for flowers blooming: 'sounding trumpets', 'unfurling smiles', 'awakening from dreams'."},
        {cn:"了解花钟的科学原理：花的开放与温度、湿度、光照、昆虫活动有关。",en:"Understand the science of the flower clock: blooming relates to temperature, humidity, light, and insect activity."}
      ],
      parentTips: [
        {cn:"和孩子一起观察身边的花，看看不同的花在什么时间开放。",en:"Observe flowers together and see when different flowers bloom."},
        {cn:"引导孩子仿写\u201C花的开放\u201D片段，练习用不同表达描述同一类事物。",en:"Guide your child to write imitative paragraphs about flowers, practicing varied expressions for the same type of thing."}
      ]
    },
    {
      id: 14, title: "蜜蜂", titleEn: "The Bee",
      difficulty: 2,
      text: [
        "听说蜜蜂有辨认方向的能力，无论飞到哪里，它总是可以回到原处。我想做个实验。",
        "一天，我在我家草料棚的蜂窝里捉了一些蜜蜂，把它们放在纸袋里。我叫小女儿在蜂窝旁等着，自己带着蜜蜂，走了四公里路，打开纸袋，在它们身上做了白色记号，然后放了出来。二十只左右被闷了好久的蜜蜂向四面飞散，好像在寻找回家的方向。这时候刮起了狂风，蜜蜂飞得很低，几乎要触到地面，大概这样可以减少阻力。我想，它们飞得这么低，怎么能看到遥远的家呢？",
        "在回家的路上，我推测蜜蜂可能找不到家了。没等我跨进家门，小女儿就冲过来，脸红红的，看上去很激动。她高声喊道：\u201C有两只蜜蜂飞回来了！它们两点四十分回到蜂窝里，肚皮下面还沾着花粉呢。\u201D",
        "我放蜜蜂的时候是将近两点钟，也就是说，在大约三刻钟的时间里，那两只小蜜蜂飞了四公里路，这还包括了采花粉的时间。",
        "傍晚时，我亲眼看到另外三只飞了回来，身上也都带着花粉。",
        "第二天我检查蜂窝时，发现了十五只身上有白色记号的蜜蜂。",
        "这样，二十只左右的蜜蜂，至少有十五只没有迷失方向，准确无误地回到了家。尽管它们逆风而飞，沿途都是一些陌生的景物，但它们确确实实飞回来了。",
        "蜜蜂靠的不是超常的记忆力，而是一种我无法解释的本能。"
      ],
      textEn: [
        "I heard that bees have the ability to find their way, always returning home no matter where they fly. I wanted to do an experiment.",
        "One day, I caught some bees from the hive in our hay shed and put them in a paper bag. I asked my little daughter to wait by the hive while I carried the bees four kilometers away, opened the bag, marked them with white spots, and released them. About twenty bees that had been cooped up for a long time flew off in all directions, as if searching for the way home. At that moment, a strong wind kicked up, and the bees flew very low, almost touching the ground — probably to reduce air resistance. I thought, flying so low, how could they see their distant home?",
        "On the way home, I speculated the bees probably couldn't find their way back. Before I even stepped through the door, my little daughter rushed over, her face red, looking very excited. She shouted: \u201CTwo bees came back! They returned to the hive at 2:40, with pollen still on their bellies.\u201D",
        "I had released the bees at nearly 2 o'clock, meaning in about 45 minutes, those two little bees flew four kilometers — including time to gather pollen.",
        "By evening, I saw three more fly back, all carrying pollen.",
        "The next day when I checked the hive, I found fifteen bees with white markings.",
        "In this way, out of about twenty bees, at least fifteen did not lose their way and returned home accurately and without error. Even though they flew against the wind, and all along the route the scenery was unfamiliar, they truly and indeed flew back.",
        "Bees rely not on exceptional memory, but on an instinct I cannot explain."
      ],
      textPinyin: [
        "t\u012bng shu\u014d m\u00ec f\u0113ng y\u01d2u bi\u00e0n r\u00e8n f\u0101ng xi\u00e0ng de n\u00e9ng l\u00ec\uff0c w\u00fa l\u00f9n f\u0113i d\u00e0o n\u01ce l\u01d0\uff0c t\u0101 z\u01d2ng sh\u00ec k\u011b y\u01d0 hu\u00ed d\u00e0o yu\u00e1n ch\u00f9\u3002 w\u01d2 xi\u01ceng zu\u00f2 g\u00e8 sh\u00ed y\u00e0n\u3002",
        "y\u00ec ti\u0101n\uff0c w\u01d2 z\u00e0i w\u01d2 ji\u0101 c\u01ceo li\u00e0o p\u00e9ng de f\u0113ng w\u014d l\u01d0 zhu\u014d le y\u00ec xi\u0113 m\u00ec f\u0113ng\uff0c b\u01ce t\u0101 men f\u00e0ng z\u00e0i zh\u01d0 d\u00e0i l\u01d0\u3002 w\u01d2 ji\u00e0o xi\u01ceo n\u01da \u00e9r z\u00e0i f\u0113ng w\u014d p\u00e1ng d\u011bng zhe\uff0c z\u00ec j\u01d0 d\u00e0i zhe m\u00ec f\u0113ng\uff0c z\u01d2u le s\u00ec g\u014dng l\u01d0 l\u00f9\uff0c d\u01ce k\u0101i zh\u01d0 d\u00e0i\uff0c z\u00e0i t\u0101 men sh\u0113n sh\u00e0ng zu\u00f2 le b\u00e1i s\u00e8 j\u00ec h\u00e0o\uff0c r\u00e1n h\u00f2u f\u00e0ng le ch\u016b l\u00e1i\u3002 \u00e8r sh\u00ed zh\u012b zu\u01d2 y\u00f2u b\u00e8i m\u0113n le h\u01ceo ji\u01d4 de m\u00ec f\u0113ng xi\u00e0ng s\u00ec mi\u00e0n f\u0113i s\u00e0n\uff0c h\u01ceo xi\u00e0ng z\u00e0i x\u00fan zh\u01ceo hu\u00ed ji\u0101 de f\u0101ng xi\u00e0ng\u3002 zh\u00e8 sh\u00ed h\u00f2u gu\u0101 q\u01d0 le ku\u00e1ng f\u0113ng\uff0c m\u00ec f\u0113ng f\u0113i d\u00e9 h\u011bn d\u012b\uff0c j\u012b h\u016b y\u00e0o ch\u00f9 d\u00e0o d\u00ec mi\u00e0n\uff0c d\u00e0 g\u00e0i zh\u00e8 y\u00e0ng k\u011b y\u01d0 ji\u01cen sh\u01ceo z\u01d4 l\u00ec\u3002 w\u01d2 xi\u01ceng\uff0c t\u0101 men f\u0113i d\u00e9 zh\u00e8 me d\u012b\uff0c z\u011bn me n\u00e9ng k\u00e0n d\u00e0o y\u00e1o yu\u01cen de ji\u0101 ne\uff1f",
        "z\u00e0i hu\u00ed ji\u0101 de l\u00f9 shang\uff0c w\u01d2 tu\u012b c\u00e8 m\u00ec f\u0113ng k\u011b n\u00e9ng zh\u01ceo b\u00fa d\u00e0o ji\u0101 le\u3002 m\u00e9i d\u011bng w\u01d2 ku\u00e0 j\u00ecn ji\u0101 m\u00e9n\uff0c xi\u01ceo n\u01da \u00e9r ji\u00f9 ch\u014dng gu\u00f2 l\u00e1i\uff0c li\u01cen h\u00f3ng h\u00f3ng de\uff0c k\u00e0n sh\u00e0ng q\u00f9 h\u011bn j\u012b d\u00f2ng\u3002 t\u0101 g\u0101o sh\u0113ng h\u01cen d\u00e0o\uff1a \u201c y\u01d2u li\u01ceng zh\u012b m\u00ec f\u0113ng f\u0113i hu\u00ed l\u00e1i le\uff01 t\u0101 men li\u01ceng di\u01cen s\u00ec sh\u00ed f\u0113n hu\u00ed d\u00e0o f\u0113ng w\u014d l\u01d0\uff0c d\u00f9 p\u00ed xi\u00e0 mi\u00e0n h\u00e1i zh\u0101n zhe hu\u0101 f\u011bn ne\u3002 \u201d",
        "w\u01d2 f\u00e0ng m\u00ec f\u0113ng de sh\u00ed h\u00f2u sh\u00ec ji\u0101ng j\u00ecn li\u01ceng di\u01cen zh\u014dng\uff0c y\u011b ji\u00f9 sh\u00ec shu\u014d\uff0c z\u00e0i d\u00e0 yu\u0113 s\u0101n k\u00e8 zh\u014dng de sh\u00ed ji\u0101n l\u01d0\uff0c n\u00e0 li\u01ceng zh\u012b xi\u01ceo m\u00ec f\u0113ng f\u0113i le s\u00ec g\u014dng l\u01d0 l\u00f9\uff0c zh\u00e8 h\u00e1i b\u0101o ku\u00f2 le c\u01cei hu\u0101 f\u011bn de sh\u00ed ji\u0101n\u3002",
        "b\u00e0ng w\u01cen sh\u00ed\uff0c w\u01d2 q\u012bn y\u01cen k\u00e0n d\u00e0o l\u00ecng w\u00e0i s\u0101n zh\u012b f\u0113i le hu\u00ed l\u00e1i\uff0c sh\u0113n sh\u00e0ng y\u011b d\u014du d\u00e0i zhe hu\u0101 f\u011bn\u3002",
        "d\u00ec \u00e8r ti\u0101n w\u01d2 ji\u01cen ch\u00e1 f\u0113ng w\u014d sh\u00ed\uff0c f\u0101 xi\u00e0n le sh\u00ed w\u01d4 zh\u012b sh\u0113n sh\u00e0ng y\u01d2u b\u00e1i s\u00e8 j\u00ec h\u00e0o de m\u00ec f\u0113ng\u3002",
        "zh\u00e8 y\u00e0ng\uff0c \u00e8r sh\u00ed zh\u012b zu\u01d2 y\u00f2u de m\u00ec f\u0113ng\uff0c zh\u00ec sh\u01ceo y\u01d2u sh\u00ed w\u01d4 zh\u012b m\u00e9i y\u01d2u m\u00ed sh\u012b f\u0101ng xi\u00e0ng\uff0c zh\u01d4n qu\u00e8 w\u00fa w\u00f9 d\u00ec hu\u00ed d\u00e0o le ji\u0101\u3002 j\u01d0n gu\u01cen t\u0101 men n\u00ec f\u0113ng \u00e9r f\u0113i\uff0c y\u00e1n t\u00fa d\u014du sh\u00ec y\u00ec xi\u0113 m\u00f2 sh\u0113ng de j\u01d0ng w\u00f9\uff0c d\u00e0n t\u0101 men qu\u00e8 qu\u00e8 sh\u00ed sh\u00ed f\u0113i hu\u00ed l\u00e1i le\u3002",
        "m\u00ec f\u0113ng k\u00e0o de b\u00fa sh\u00ec ch\u0101o ch\u00e1ng de j\u00ec y\u00ec l\u00ec\uff0c \u00e9r sh\u00ec y\u00ec zh\u01d2ng w\u01d2 w\u00fa f\u01ce ji\u011b sh\u00ec de b\u011bn n\u00e9ng\u3002"
      ],
      recognizeChars: ["概","阻","测","括","误","逆","途","陌","超"],
      writeChars: ["蜜","蜂","辨","阻","跨","括","检","查","确","误","途","陌"],
      vocabWords: [
        {word:'辨认',pinyin:'biàn rèn',en:'identify; recognize',sentence:'蜜蜂能辨认方向。',sentenceEn:'Bees can identify directions.'},
        {word:'实验',pinyin:'shí yàn',en:'experiment',sentence:'法布尔做了一个实验。',sentenceEn:'Fabre conducted an experiment.'},
        {word:'推测',pinyin:'tuī cè',en:'infer; speculate',sentence:'我推测它们可能找不到家。',sentenceEn:'I speculated they might not find their way home.'},
        {word:'陌生',pinyin:'mò shēng',en:'unfamiliar',sentence:'把蜜蜂带到陌生的地方。',sentenceEn:'Brought the bees to an unfamiliar place.'},
        {word:'准确无误',pinyin:'zhǔn què wú wù',en:'accurate; without error',sentence:'蜜蜂准确无误地飞回来了。',sentenceEn:'The bees flew back accurately without error.'}
      ],
      footnotes: [
        {term:"\u8fa8\u8ba4", termEn:"identify; recognize", definition:"\u3010bi\u00e0n r\u00e8n\u3011identify; recognize\u3002", definitionEn:"identify; recognize"},
        {term:"\u5b9e\u9a8c", termEn:"experiment", definition:"\u3010sh\u00ed y\u00e0n\u3011experiment\u3002", definitionEn:"experiment"},
        {term:"\u63a8\u6d4b", termEn:"infer; speculate", definition:"\u3010tu\u012b c\u00e8\u3011infer; speculate\u3002", definitionEn:"infer; speculate"},
        {term:"\u964c\u751f", termEn:"unfamiliar", definition:"\u3010m\u00f2 sh\u0113ng\u3011unfamiliar\u3002", definitionEn:"unfamiliar"},
        {term:"\u51c6\u786e\u65e0\u8bef", termEn:"accurate; without error", definition:"\u3010zh\u01d4n qu\u00e8 w\u00fa w\u00f9\u3011accurate; without error\u3002", definitionEn:"accurate; without error"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'实验记录',pointEn:'shí yàn jì lù',example:'experiment log',exampleEn:'为了证实……我做了一个实验：先……然后……结果……',explanation:'To verify...I did an experiment: first...then...the result...',explanationEn:'用实验过程组织文章，按步骤叙述'}
      ],
      exercises: [
        {type:"read",cn:"默读课文，把实验过程的图表补充完整（实验目的、过程、结论）。",en:"Read silently and complete the experiment chart (purpose, process, conclusion)."},
        {type:"think",cn:"读一读加点的部分，说说你从中体会到了什么。再从课文中找出类似的语句。",en:"Read the dotted parts and share what you understand from them. Find similar sentences in the text."},
        {type:"discuss",cn:"课文中\u201C二十只左右\u201D\u201C大概\u201D\u201C几乎\u201D等词语说明了什么？",en:"What do words like 'about twenty', 'probably', 'almost' tell us about the writing style?"}
      ],
      teachingPoints: [
        {cn:"学习科学观察和实验的方法：提出问题→设计实验→观察记录→得出结论。",en:"Learn the scientific method: ask a question, design an experiment, observe and record, draw conclusions."},
        {cn:"注意课文中\u201C大概\u201D\u201C左右\u201D\u201C几乎\u201D等表示不确定的词语，体会科学写作的严谨。",en:"Notice uncertain words like 'probably', 'about', 'almost' — appreciate the rigor of scientific writing."},
        {cn:"了解法布尔——法国著名昆虫学家、文学家，《昆虫记》的作者。",en:"Learn about Fabre — the famous French entomologist and writer, author of 'Book of Insects'."}
      ],
      parentTips: [
        {cn:"鼓励孩子像法布尔一样仔细观察身边的小动物，做简单的观察记录。",en:"Encourage your child to carefully observe small animals like Fabre did and keep simple observation records."},
        {cn:"和孩子一起做一些简单的科学小实验，培养探究精神。",en:"Do simple science experiments together to cultivate a spirit of inquiry."}
      ]
    },
    {
      id: 15, title: "小虾", titleEn: "Little Shrimp",
      difficulty: 3,
      isSelfRead: true,
      text: [
        "院子里的葡萄架下，一口缸闲着。夏天，积了大半缸雨水。从葡萄架的空隙里漏下的阳光，洒落在水面上，像许多大大小小的圆镜。我想，这缸不正好用来养小鱼小虾吗？",
        "我和邻居阿成哥跑到村边小溪里，在竹荫下静水处，轻轻掀开小石块，或者把手伸到大石块下，捉了一些小虾，带回家养在缸里。这些小虾，有的通体透明，像玻璃似的，这是才长大的；有的稍带灰黑色，甚至背上、尾巴上还积着泥，长着青苔，这是老的，大家叫它千年虾。",
        "缸里的小虾十分有趣。它们有的独自荡来荡去，有的互相追逐，有的紧贴住缸壁。要是你用小竹枝去动动那些正在休息的小虾，它们会立即向别的安静的角落蹦去，一路上像生了气似的，不停地舞动着前面那双细长的腿，腿末端那副钳子一张一张的，胡须也一翘一翘地摆动着，连眼珠子也一突一突的。如果这时碰到正在闲游的同伴，说不定就要打起来。小虾的搏斗很激烈，蹦出水面是常有的事，有时还会蹦到缸外的地面上。",
        "我觉得该让它们在缸里生活得更快乐些。后来，我就和阿成哥到小溪里采了一些水草，捡了些石块放在缸里。",
        "有一天，我从缸里捉起几只较大的虾，发现它们的腹部藏着许多圆圆的卵。不久，缸里的小虾真的多了起来。"
      ],
      textEn: [
        "Under the grape trellis in the yard, a water vat sat idle. In summer, it filled with rainwater. Sunlight leaked through gaps in the grape vines, splashing on the water's surface like many round mirrors of various sizes. I thought, wouldn't this vat be perfect for raising little fish and shrimp?",
        "My neighbor Brother Acheng and I ran to the small stream at the village edge. In the still water under bamboo shade, we gently lifted small stones or reached under large ones, catching some small shrimp to bring home and raise in the vat. Some shrimp were entirely transparent like glass — these were newly grown. Others were slightly grayish-black, with mud and even moss on their backs and tails — these were old ones, called 'thousand-year shrimp'.",
        "The little shrimp in the vat were great fun. Some drifted about alone, some chased each other, and some clung to the vat walls. If you poked a resting shrimp with a small bamboo stick, it would immediately bounce to a quiet corner, looking angry the whole way, constantly waving its long front legs. Its pincers snapped open and shut, its whiskers bobbed up and down, and even its eyeballs popped in and out. If it bumped into a companion swimming by, a fight might break out. Shrimp fights were intense — leaping above the water was common, and sometimes they'd bounce right out of the vat onto the floor.",
        "I thought I should make their life in the vat happier. So Brother Acheng and I went back to the stream for some water plants and stones to put in the vat.",
        "One day, I picked up a few larger shrimp and found many round eggs hidden under their bellies. Soon, the number of shrimp in the vat truly increased."
      ],
      textPinyin: [
        "yu\u00e0n zi l\u01d0 de p\u00fa t\u00e1o ji\u00e0 xi\u00e0\uff0c y\u00ec k\u01d2u g\u0101ng xi\u00e1n zhe\u3002 xi\u00e0 ti\u0101n\uff0c j\u012b le d\u00e0 b\u00e0n g\u0101ng y\u01d4 shu\u01d0\u3002 c\u00f3ng p\u00fa t\u00e1o ji\u00e0 de k\u00f2ng x\u00ec l\u01d0 l\u00f2u xi\u00e0 de y\u00e1ng gu\u0101ng\uff0c s\u01ce lu\u00f2 z\u00e0i shu\u01d0 mi\u00e0n sh\u00e0ng\uff0c xi\u00e0ng x\u01d4 du\u014d d\u00e0 d\u00e0 xi\u01ceo xi\u01ceo de yu\u00e1n j\u00ecng\u3002 w\u01d2 xi\u01ceng\uff0c zh\u00e8 g\u0101ng b\u00fa zh\u00e8ng h\u01ceo y\u00f2ng l\u00e1i y\u01ceng xi\u01ceo y\u00fa xi\u01ceo xi\u0101 ma\uff1f",
        "w\u01d2 h\u00e9 l\u00edn j\u016b \u0101 ch\u00e9ng g\u0113 p\u01ceo d\u00e0o c\u016bn bi\u0101n xi\u01ceo x\u012b l\u01d0\uff0c z\u00e0i zh\u00fa y\u00ecn xi\u00e0 j\u00ecng shu\u01d0 ch\u00f9\uff0c q\u012bng q\u012bng xi\u0101n k\u0101i xi\u01ceo sh\u00ed ku\u00e0i\uff0c hu\u00f2 zh\u011b b\u01ce sh\u01d2u sh\u0113n d\u00e0o d\u00e0 sh\u00ed ku\u00e0i xi\u00e0\uff0c zhu\u014d le y\u00ec xi\u0113 xi\u01ceo xi\u0101\uff0c d\u00e0i hu\u00ed ji\u0101 y\u01ceng z\u00e0i g\u0101ng l\u01d0\u3002 zh\u00e8 xi\u0113 xi\u01ceo xi\u0101\uff0c y\u01d2u de t\u014dng t\u01d0 t\u00f2u m\u00edng\uff0c xi\u00e0ng b\u014d l\u00ed s\u00ec de\uff0c zh\u00e8 sh\u00ec c\u00e1i zh\u01ceng d\u00e0 de\uff1b y\u01d2u de sh\u0101o d\u00e0i hu\u012b h\u0113i s\u00e8\uff0c sh\u00e8n zh\u00ec b\u00e8i sh\u00e0ng\u3001 w\u011bi b\u0101 sh\u00e0ng h\u00e1i j\u012b zhe n\u00ed\uff0c ch\u00e1ng zhe q\u012bng t\u00e1i\uff0c zh\u00e8 sh\u00ec l\u01ceo de\uff0c d\u00e0 ji\u0101 ji\u00e0o t\u0101 qi\u0101n ni\u00e1n xi\u0101\u3002",
        "g\u0101ng l\u01d0 de xi\u01ceo xi\u0101 sh\u00ed f\u0113n y\u01d2u q\u00f9\u3002 t\u0101 men y\u01d2u de d\u00fa z\u00ec d\u00e0ng l\u00e1i d\u00e0ng q\u00f9\uff0c y\u01d2u de h\u00f9 xi\u0101ng zhu\u012b zh\u00fa\uff0c y\u01d2u de j\u01d0n ti\u0113 zh\u00f9 g\u0101ng b\u00ec\u3002 y\u00e0o shi n\u01d0 y\u00f2ng xi\u01ceo zh\u00fa zh\u012b q\u00f9 d\u00f2ng d\u00f2ng n\u00e0 xi\u0113 zh\u00e8ng z\u00e0i xi\u016b xi de xi\u01ceo xi\u0101\uff0c t\u0101 men hu\u00ec l\u00ec j\u00ed xi\u00e0ng bi\u00e9 de \u0101n j\u00ecng de ji\u01ceo lu\u00f2 b\u00e8ng q\u00f9\uff0c y\u00ed l\u00f9 shang xi\u00e0ng sh\u0113ng le q\u00ec sh\u00ec de\uff0c b\u00f9 t\u00edng d\u00ec w\u01d4 d\u00f2ng zhe qi\u00e1n mi\u00e0n n\u00e0 shu\u0101ng x\u00ec ch\u00e1ng de tu\u01d0\uff0c tu\u01d0 m\u00f2 du\u0101n n\u00e0 f\u00f9 qi\u00e1n zi y\u00ec zh\u0101ng yi zh\u0101ng de\uff0c h\u00fa x\u016b y\u011b y\u00ed qi\u00e0o yi qi\u00e0o d\u00ec b\u01cei d\u00f2ng zhe\uff0c li\u00e1n y\u01cen zh\u016b z\u01d0 y\u011b y\u00ec t\u016b yi t\u016b de\u3002 r\u00fa gu\u01d2 zh\u00e8 sh\u00ed p\u00e8ng d\u00e0o zh\u00e8ng z\u00e0i xi\u00e1n y\u00f3u de t\u00f3ng b\u00e0n\uff0c shu\u014d b\u00fa d\u00ecng ji\u00f9 y\u00e0o d\u01ce q\u01d0 l\u00e1i\u3002 xi\u01ceo xi\u0101 de b\u00f3 d\u00f2u h\u011bn j\u012b li\u00e8\uff0c b\u00e8ng ch\u016b shu\u01d0 mi\u00e0n sh\u00ec ch\u00e1ng y\u01d2u de sh\u00ec\uff0c y\u01d2u sh\u00ed h\u00e1i hu\u00ec b\u00e8ng d\u00e0o g\u0101ng w\u00e0i de d\u00ec mi\u00e0n sh\u00e0ng\u3002",
        "w\u01d2 ju\u00e9 de g\u0101i r\u00e0ng t\u0101 men z\u00e0i g\u0101ng l\u01d0 sh\u0113ng hu\u00f3 d\u00e9 g\u00e8ng ku\u00e0i l\u00e8 xi\u0113\u3002 h\u00f2u l\u00e1i\uff0c w\u01d2 ji\u00f9 h\u00e9 \u0101 ch\u00e9ng g\u0113 d\u00e0o xi\u01ceo x\u012b l\u01d0 c\u01cei le y\u00ec xi\u0113 shu\u01d0 c\u01ceo\uff0c ji\u01cen le xi\u0113 sh\u00ed ku\u00e0i f\u00e0ng z\u00e0i g\u0101ng l\u01d0\u3002",
        "y\u01d2u y\u00ec ti\u0101n\uff0c w\u01d2 c\u00f3ng g\u0101ng l\u01d0 zhu\u014d q\u01d0 j\u01d0 zh\u012b ji\u00e0o d\u00e0 de xi\u0101\uff0c f\u0101 xi\u00e0n t\u0101 men de f\u00f9 b\u00f9 c\u00e1ng zhe x\u01d4 du\u014d yu\u00e1n yu\u00e1n de lu\u01cen\u3002 b\u00f9 ji\u01d4\uff0c g\u0101ng l\u01d0 de xi\u01ceo xi\u0101 zh\u0113n de du\u014d le q\u01d0 l\u00e1i\u3002"
      ],
      recognizeChars: ["隙","掀","稍","逐","末","搏","较","腹"],
      vocabWords: [
        {word:'通体',pinyin:'tōng tǐ',en:'entire body',sentence:'通体透明。',sentenceEn:'The entire body is transparent.'},
        {word:'空隙',pinyin:'kòng xì',en:'gap; space',sentence:'小虾躲在石头的空隙里。',sentenceEn:'Little shrimp hide in gaps between stones.'},
        {word:'追逐',pinyin:'zhuī zhú',en:'chase',sentence:'小虾在水中追逐嬉戏。',sentenceEn:'Little shrimp chase and play in the water.'},
        {word:'一张一合',pinyin:'yì zhāng yì hé',en:'open and close',sentence:'腮一张一合的。',sentenceEn:'The gills open and close.'},
        {word:'猛烈',pinyin:'měng liè',en:'fierce',sentence:'小虾受到惊扰就猛烈地蹦跳。',sentenceEn:'When disturbed, the shrimp jump fiercely.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u9662\u5b50\u91cc\u7684\u8461\u8404\u67b6\u4e0b\uff0c\u4e00\u53e3\u7f38\u95f2\u7740\u3002", exampleEn: "Under the grape trellis in the yard, a water vat sat idle. In summer, it filled ", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u628a\u5b57\u53e5", pointEn: "b\u01ce-construction", example: "\u9662\u5b50\u91cc\u7684\u8461\u8404\u67b6\u4e0b\uff0c\u4e00\u53e3\u7f38\u95f2\u7740\u3002", exampleEn: "Under the grape trellis in the yard, a water vat sat idle. In summer, it filled ", explanation: "\u7528\u201c\u628a\u201d\u5c06\u5bbe\u8bed\u63d0\u524d\uff0c\u5f3a\u8c03\u52a8\u4f5c\u5bf9\u5bf9\u8c61\u7684\u5f71\u54cd", explanationEn: "Moves the object before the verb using \"b\u01ce\" to emphasize the effect of the action"}
      ],
      footnotes: [
        {term:"\u901a\u4f53", termEn:"entire body", definition:"\u3010t\u014dng t\u01d0\u3011entire body\u3002", definitionEn:"entire body"},
        {term:"\u7a7a\u9699", termEn:"gap; space", definition:"\u3010k\u00f2ng x\u00ec\u3011gap; space\u3002", definitionEn:"gap; space"},
        {term:"\u8ffd\u9010", termEn:"chase", definition:"\u3010zhu\u012b zh\u00fa\u3011chase\u3002", definitionEn:"chase"},
        {term:"\u4e00\u5f20\u4e00\u5408", termEn:"open and close", definition:"\u3010y\u00ec zh\u0101ng y\u00ec h\u00e9\u3011open and close\u3002", definitionEn:"open and close"},
        {term:"\u731b\u70c8", termEn:"fierce", definition:"\u3010m\u011bng li\u00e8\u3011fierce\u3002", definitionEn:"fierce"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"默读课文，说说第3自然段主要写了什么。",en:"Read silently and explain the main content of paragraph 3."},
        {type:"write",cn:"把课文中写得细致生动的语句抄写下来。",en:"Copy down the detailed and vivid sentences from the text."},
        {type:"think",cn:"作者是怎样把小虾的有趣写清楚的？找出关键语句。",en:"How does the author clearly describe the shrimp's interesting behavior? Find key sentences."}
      ],
      teachingPoints: [
        {cn:"第3自然段的关键句是第一句\u201C缸里的小虾十分有趣\u201D，后面围绕这个意思展开。",en:"Paragraph 3's key sentence is 'The shrimp in the vat were great fun', with the rest elaborating on this."},
        {cn:"学习通过细致的动作描写来表现动物的特点和趣味。",en:"Learn to reveal animal characteristics through detailed action descriptions."},
        {cn:"注意观察和描写的层次：外形→动作→习性→繁殖。",en:"Notice the layers of observation and description: appearance, actions, habits, reproduction."}
      ],
      parentTips: [
        {cn:"如果条件允许，和孩子一起养一些小动物，培养观察能力。",en:"If possible, raise small animals together to develop observation skills."},
        {cn:"引导孩子学习课文中\u201C围绕一个意思写清楚\u201D的方法，在自己的习作中运用。",en:"Guide your child to apply the 'write clearly around one idea' method in their own writing."}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"滁州西涧\n[唐] 韦应物\n独怜幽草涧边生，\n上有黄鹂深树鸣。\n春潮带雨晚来急，\n野渡无人舟自横。",en:"West Stream at Chuzhou\n[Tang] Wei Yingwu\nI love the secluded grass growing by the stream,\nAbove, orioles sing deep among the trees.\nThe spring tide, with evening rain, rushes fast,\nAt the wild ferry, with no one about, a boat drifts sideways."}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"观察时主动思考、提出问题是个好习惯。读句子，照样子写一写你的观察和思考。学习用修改符号修改自己的习作。",en:"Actively thinking and asking questions while observing is a good habit. Read example sentences and write your own observations and thoughts. Learn to use editing symbols to revise your writing."}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"我做了一项小实验——借助图表整理实验信息，用\u201C先……接着……然后……最后……\u201D把做实验的经过写清楚，还可以写写自己的心情和有趣发现。",en:"My Little Experiment — Use charts to organize experiment information. Write the process clearly using 'First...then...next...finally...' and include your feelings and interesting discoveries."},modelEssays:[
      {title:"神奇的浮鸡蛋",titleEn:"The Magical Floating Egg",level:"基础",
      structure:[
        {cn:"开头：写实验名称和准备的材料",en:"Opening: State the experiment name and materials"},
        {cn:"中间：按顺序写实验过程",en:"Body: Describe the experiment steps in order"},
        {cn:"结尾：写实验结果和感受",en:"Ending: State the result and feelings"}
      ],
      cn:"今天，我做了一个有趣的小实验——让鸡蛋浮起来。\n我准备了一个玻璃杯、一个鸡蛋、一袋盐和一根筷子。\n先，我在杯子里倒了大半杯水，然后把鸡蛋轻轻放进去。鸡蛋\u201C咕咚\u201D一声沉到了杯底。接着，我往水里加了一勺盐，用筷子搅了搅，鸡蛋没有动。然后，我又加了两勺盐，使劲搅拌。慢慢地，鸡蛋竟然晃了晃，离开了杯底！最后，我又加了一勺盐，鸡蛋真的浮上来了！\n我开心极了！原来盐水的密度比清水大，所以鸡蛋能浮起来。科学真有趣！",
      en:"Today I did a fun little experiment \u2014 making an egg float.\nI prepared a glass, an egg, a bag of salt, and a chopstick.\nFirst, I poured the glass about two-thirds full of water and gently placed the egg in. The egg sank to the bottom with a plop. Next, I added one spoon of salt and stirred with the chopstick \u2014 the egg didn\u2019t move. Then I added two more spoons and stirred hard. Slowly, the egg actually wobbled and left the bottom! Finally, I added one more spoon, and the egg really floated up!\nI was so excited! It turns out that salt water is denser than fresh water, so the egg can float. Science is really interesting!",
      notes:"这篇范文用\u201C先……接着……然后……最后……\u201D的顺序词把实验过程写得很清楚。准备材料列举完整，每一步写了动作和结果。用了声音描写（咕咚），结尾点出科学原理。",
      notesEn:"This essay uses sequence words (first, next, then, finally) to clearly describe the process. Materials are fully listed, and each step includes actions and results. It uses sound description (plop) and ends with the scientific principle."},
      {title:"会变色的紫甘蓝汁",titleEn:"Color-Changing Purple Cabbage Juice",level:"提高",
      structure:[
        {cn:"开头：写实验的来源（老师布置/自己发现）",en:"Opening: Explain the experiment's origin"},
        {cn:"中间：详细写实验步骤和观察到的现象",en:"Body: Detail the steps and observed phenomena"},
        {cn:"结尾：写有趣发现和想要继续探索的心情",en:"Ending: Share discoveries and the desire to explore more"}
      ],
      cn:"科学课上，老师让我们回家做一个小实验。我选了一个很酷的实验——用紫甘蓝汁变\u201C魔术\u201D。\n放学回家后，我迫不及待地开始了。先，我请妈妈帮我切了几片紫甘蓝，放进碗里，倒上热水泡了十分钟。紫甘蓝汁变成了漂亮的深紫色，像一杯葡萄汁。接着，我把紫甘蓝汁分别倒进三个杯子里。然后，我往第一个杯子里滴了几滴白醋，哇！紫色的液体马上变成了玫红色，就像变魔术一样！我又往第二个杯子里加了一点小苏打水，紫色变成了蓝绿色！第三个杯子我什么都没加，紫色没有变化。\n我把三个杯子排成一排，红色、紫色、蓝绿色，真像一道彩虹！我查了资料才知道，紫甘蓝汁遇到酸性物质会变红，遇到碱性物质会变绿。\n这个实验太神奇了！我还想试试用其他液体，看看会变出什么颜色。",
      en:"In science class, the teacher asked us to do a small experiment at home. I chose a really cool one \u2014 performing \u201Cmagic\u201D with purple cabbage juice.\nAfter school, I couldn\u2019t wait to start. First, I asked Mom to help me cut a few slices of purple cabbage, put them in a bowl, and poured hot water over them for ten minutes. The juice turned a beautiful deep purple, like grape juice. Next, I poured the juice into three cups. Then I dripped a few drops of white vinegar into the first cup \u2014 wow! The purple liquid instantly turned rosy red, just like magic! I added a little baking soda water to the second cup, and the purple turned blue-green! I left the third cup unchanged \u2014 the purple stayed the same.\nI lined up the three cups: red, purple, blue-green \u2014 like a rainbow! I looked it up and learned that purple cabbage juice turns red with acid and green with alkaline substances.\nThis experiment was amazing! I want to try other liquids to see what colors they produce.",
      notes:"这篇范文在实验过程中加入了\u201C心情描写\u201D（迫不及待、哇）和\u201C比喻\u201D（像葡萄汁、像变魔术、像彩虹），比基础版更有文学性。三个杯子的对比实验写得有条理，查资料说明了原理。结尾有继续探索的愿望，体现了好奇心。",
      notesEn:"This essay adds emotional descriptions (couldn't wait, wow) and similes (like grape juice, like magic, like a rainbow), making it more literary than the basic level. The three-cup comparison is well-organized, and research explains the principle. The ending shows curiosity and a desire to explore further."},
      {title:"自制小喷泉",titleEn:"Homemade Mini Fountain",level:"拓展",
      structure:[
        {cn:"开头：设置悬念，引起读者好奇",en:"Opening: Create suspense to spark curiosity"},
        {cn:"中间：实验过程+失败→调整→成功",en:"Body: Experiment process with failure → adjustment → success"},
        {cn:"过渡：加入思考和分析",en:"Transition: Add reflection and analysis"},
        {cn:"结尾：由实验联想到生活道理",en:"Ending: Connect the experiment to a life lesson"}
      ],
      cn:"你相信吗？不用电，不用水泵，我竟然做出了一个小喷泉！\n事情是这样的。上周我在一本科学书上看到一个实验：用可乐和薄荷糖就能做出\u201C喷泉\u201D。我半信半疑，决定亲自试一试。\n我准备了一瓶可乐和一颗薄荷糖。先，我把可乐瓶放在院子里的空地上，拧开瓶盖。接着，我小心翼翼地把薄荷糖对准瓶口，准备放进去。可是我的手一抖，糖掉在了地上。我只好捡起来重新来。这一次，我深吸一口气，稳稳地把薄荷糖投了进去，然后赶紧往后退。只听\u201C嗤——\u201D的一声，一股棕色的液体从瓶口喷了出来，像一根水柱直冲天空，足足有半米高！我惊喜地张大了嘴巴，旁边看热闹的妹妹吓得往后跳了一步。\n喷泉只持续了几秒钟就停了。我蹲下来一看，可乐已经少了大半瓶。爸爸告诉我，这是因为薄荷糖表面有很多小孔，能让可乐里的二氧化碳气体迅速释放出来，所以就形成了\u201C喷泉\u201D。\n这次实验虽然第一次没成功，但我没有放弃。我想，做实验就像学习一样，失败了不要紧，找到原因再试一次，就一定能成功。我已经在想下一个实验了——听说用醋和小苏打也能做喷泉，等周末我一定要试试！",
      en:"Would you believe it? Without electricity or a water pump, I actually made a little fountain!\nHere\u2019s what happened. Last week I saw an experiment in a science book: you can make a \u201Cfountain\u201D with cola and a mint candy. Half-believing, I decided to try it myself.\nI prepared a bottle of cola and a mint candy. First, I placed the cola bottle on the open ground in the yard and unscrewed the cap. Then I carefully aimed the candy at the bottle opening, ready to drop it in. But my hand trembled and the candy fell on the ground. I had to pick it up and start over. This time, I took a deep breath, steadily dropped the candy in, and quickly backed away. With a \u201Chissss,\u201D a column of brown liquid shot out of the bottle like a water pillar soaring into the sky, at least half a meter high! I gaped in amazement, while my little sister, who was watching, jumped back in fright.\nThe fountain lasted only a few seconds. I crouched down and saw that more than half the cola was gone. Dad told me it was because the mint candy\u2019s surface has many tiny pores that rapidly release the carbon dioxide in the cola, creating the \u201Cfountain.\u201D\nAlthough my first attempt failed, I didn\u2019t give up. I think doing experiments is like studying \u2014 failure is okay; find the reason, try again, and you\u2019ll surely succeed. I\u2019m already thinking about my next experiment \u2014 I heard you can make a fountain with vinegar and baking soda too. I\u2019ll definitely try it this weekend!",
      notes:"这篇范文采用\u201C设悬念→失败→成功\u201D的叙事结构，比平铺直叙更有吸引力。加入了失败的经历，让故事更真实。动作描写细腻（小心翼翼、深吸一口气），声音描写（嗤）和比喻（像水柱）增添了画面感。妹妹的反应增加了趣味。爸爸的解释自然地引入了科学原理。结尾从实验联想到人生道理（失败不要紧），并展望未来的实验，层次丰富，体现了高水平写作。",
      notesEn:"This essay uses a suspense → failure → success narrative structure, more engaging than a straightforward account. Including the failed attempt makes the story authentic. Detailed actions (carefully, deep breath), sound (hiss), and simile (like a water pillar) create vivid imagery. The sister's reaction adds humor. Dad's explanation naturally introduces the science. The ending connects to a life lesson (failure is okay) and looks ahead to future experiments, showing rich layering and advanced writing."}
    ]}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 5 — 想象 Imagination (Lessons 16-17)  */
/* ═══════════════════════════════════════════ */
{
  id: 5, title: "想象", titleEn: "Imagination",
  difficulty: 3,
  type: "kewen",
  lessons: [
    {
      id: 16, title: "宇宙的另一边", titleEn: "The Other Side of the Universe",
      difficulty: 3,
      text: [
        "我趴在窗台上，看着浩瀚的星空。",
        "星光洒进我的眼睛，在我身体里汩汩流淌，告诉我一个秘密：很远很远的地方，宇宙的另一边，是这一边的倒影。那里有座一样的城市，有条一样的街道，街角处有栋一样的房子，房子里有个一样的孩子。",
        "那个孩子是另一个我吗？当我从书包里拿出作业本的时候，他是不是正把作业本放回书包？当我气喘吁吁爬楼梯的时候，他是不是正下楼去？当我趴在窗台看着星空的时候，他会不会也趴在窗台，看着星空，想着我呢？我们的目光会在哪里相遇？",
        "在宇宙的这一边，雪是在冬天下的；那么，在宇宙的另一边，雪是在夏天下的吗？在宇宙的这一边，太阳从东边升起；那么，在宇宙的另一边，太阳是从西边升起的吗？",
        "在宇宙的这一边，石头是没有生命的；在宇宙的另一边，它会不会像花朵一样开放，或者像人一样行走？",
        "上课铃声响了，我们的第一节课是语文课。在宇宙的另一边，第一节是数学课吗？他们的数学课，会是什么样子的呢？",
        "在宇宙的另一边，加法是这样的：大地万物加上一场大雪等于一片白茫茫，那时，无数的孩子会从家里冲出来，打雪仗，堆雪人，滑雪……这样，大地万物加上一场大雪又等于无数孩子的节日。",
        "乘法是这样的：\u201C早春二月\u201D乘\u201C竹外桃花三两枝\u201D，再乘\u201C春雨贵如油\u201D，等于\u201C春风又绿江南岸\u201D，又等于\u201C碧玉妆成一树高，万条垂下绿丝绦\u201D，最后等于\u201C儿童散学归来早，忙趁东风放纸鸢\u201D。",
        "正当我的思绪在茫茫宇宙中穿梭时，突然，耳边响起了语文老师的声音：\u201C你在想什么呢？\u201D",
        "我有些尴尬。但在那一瞬间，我决定把我知道的告诉大家：在宇宙的另一边，如果想写一篇关于风的习作，就得闭上眼睛，想象风的样子，慢慢地让自己也变成风，在空中飞啊飞，飞得越高，习作的分数就越高……",
        "下课了，大家都围着我，想知道宇宙的另一边还有什么有趣的事情。是啊，关于宇宙的另一边，我们都想知道更多。到了晚上，我还要趴在窗台上，看着浩瀚的星空，穿越茫茫宇宙，飞到那个很远很远的地方，再去拜访宇宙另一边的那个\u201C我\u201D。"
      ],
      textEn: [
        "I leaned on the windowsill, gazing at the vast starry sky.",
        "Starlight poured into my eyes, flowing through my body, telling me a secret: far, far away, the other side of the universe is a mirror image of this side. There's an identical city, an identical street, an identical house on the corner, and an identical child in the house.",
        "Is that child another me? When I take my homework notebook out of my schoolbag, is he putting his back in? When I climb the stairs out of breath, is he going downstairs? When I lean on the windowsill looking at the stars, is he leaning on his windowsill too, looking at the stars, thinking of me? Where would our gazes meet?",
        "On this side of the universe, snow falls in winter; so on the other side, does it snow in summer? On this side, the sun rises in the east; so on the other side, does it rise in the west?",
        "On this side of the universe, stones have no life; on the other side, might they bloom like flowers or walk like people?",
        "The class bell rang — our first class is Chinese. On the other side of the universe, is the first class math? What would their math class be like?",
        "On the other side of the universe, addition works like this: all things on earth plus a heavy snowfall equals a vast white expanse. Then countless children rush out to have snowball fights, build snowmen, and ski... So all things on earth plus a heavy snowfall also equals a holiday for countless children.",
        "Multiplication works like this: 'early spring February' times 'two or three peach branches beyond the bamboo' times 'spring rain is precious as oil' equals 'the spring wind again greens the southern shore' which also equals 'jade-carved into a tall tree, ten thousand green silk threads hang down' which finally equals 'children return early from school, hurrying to fly kites in the east wind'.",
        "Just as my thoughts were shuttling through the vast universe, suddenly my Chinese teacher's voice rang in my ears: \u201CWhat are you thinking about?\u201D",
        "I was a bit embarrassed. But in that instant, I decided to tell everyone what I knew: on the other side of the universe, if you want to write an essay about wind, you must close your eyes, imagine what wind looks like, slowly let yourself become the wind, flying higher and higher in the sky — the higher you fly, the higher your essay score...",
        "Class was over, and everyone gathered around me, wanting to know what other interesting things exist on the other side of the universe. Yes, we all want to know more about the other side. At night, I'll lean on my windowsill again, gazing at the vast starry sky, crossing the endless universe, flying to that far, far away place, visiting the other 'me' on the other side of the universe."
      ],
      textPinyin: [
        "w\u01d2 p\u0101 z\u00e0i chu\u0101ng t\u00e1i sh\u00e0ng\uff0c k\u00e0n zhe h\u00e0o h\u00e0n de x\u012bng k\u014dng\u3002",
        "x\u012bng gu\u0101ng s\u01ce j\u00ecn w\u01d2 de y\u01cen j\u012bng\uff0c z\u00e0i w\u01d2 sh\u0113n t\u01d0 l\u01d0 g\u01d4 g\u01d4 li\u00fa t\u01ceng\uff0c g\u00e0o s\u00f9 w\u01d2 y\u00ed g\u00e8 m\u00ec m\u00ec\uff1a h\u011bn yu\u01cen h\u011bn yu\u01cen de d\u00ec f\u0101ng\uff0c y\u01d4 zh\u00f2u de l\u00ecng y\u00ec bi\u0101n\uff0c sh\u00ec zh\u00e8 y\u00ec bi\u0101n de d\u01ceo y\u01d0ng\u3002 n\u00e0 l\u01d0 y\u01d2u zu\u00f2 y\u00ed y\u00e0ng de ch\u00e9ng sh\u00ec\uff0c y\u01d2u ti\u00e1o y\u00ed y\u00e0ng de ji\u0113 d\u00e0o\uff0c ji\u0113 ji\u01ceo ch\u00f9 y\u01d2u d\u00f2ng y\u00ed y\u00e0ng de f\u00e1ng zi\uff0c f\u00e1ng zi l\u01d0 y\u01d2u g\u00e8 y\u00ed y\u00e0ng de h\u00e1i zi\u3002",
        "n\u00e0 ge h\u00e1i zi sh\u00ec l\u00ecng y\u00ed g\u00e8 w\u01d2 ma\uff1f d\u0101ng w\u01d2 c\u00f3ng sh\u016b b\u0101o l\u01d0 n\u00e1 ch\u016b zu\u00f2 y\u00e8 b\u011bn de sh\u00ed h\u00f2u\uff0c t\u0101 sh\u00ec bu sh\u00ec zh\u00e8ng b\u01ce zu\u00f2 y\u00e8 b\u011bn f\u00e0ng hu\u00ed sh\u016b b\u0101o\uff1f d\u0101ng w\u01d2 q\u00ec chu\u01cen x\u016b x\u016b p\u00e1 l\u00f3u t\u012b de sh\u00ed h\u00f2u\uff0c t\u0101 sh\u00ec bu sh\u00ec zh\u00e8ng xi\u00e0 l\u00f3u q\u00f9\uff1f d\u0101ng w\u01d2 p\u0101 z\u00e0i chu\u0101ng t\u00e1i k\u00e0n zhe x\u012bng k\u014dng de sh\u00ed h\u00f2u\uff0c t\u0101 hu\u00ec bu hu\u00ec y\u011b p\u0101 z\u00e0i chu\u0101ng t\u00e1i\uff0c k\u00e0n zhe x\u012bng k\u014dng\uff0c xi\u01ceng zhe w\u01d2 ne\uff1f w\u01d2 men de m\u00f9 gu\u0101ng hu\u00ec z\u00e0i n\u01ce l\u01d0 xi\u0101ng y\u00f9\uff1f",
        "z\u00e0i y\u01d4 zh\u00f2u de zh\u00e8 y\u00ec bi\u0101n\uff0c xu\u011b sh\u00ec z\u00e0i d\u014dng ti\u0101n xi\u00e0 de\uff1b n\u00e0 me\uff0c z\u00e0i y\u01d4 zh\u00f2u de l\u00ecng y\u00ec bi\u0101n\uff0c xu\u011b sh\u00ec z\u00e0i xi\u00e0 ti\u0101n xi\u00e0 de ma\uff1f z\u00e0i y\u01d4 zh\u00f2u de zh\u00e8 y\u00ec bi\u0101n\uff0c t\u00e0i y\u00e1ng c\u00f3ng d\u014dng bi\u0101n sh\u0113ng q\u01d0\uff1b n\u00e0 me\uff0c z\u00e0i y\u01d4 zh\u00f2u de l\u00ecng y\u00ec bi\u0101n\uff0c t\u00e0i y\u00e1ng sh\u00ec c\u00f3ng x\u012b bi\u0101n sh\u0113ng q\u01d0 de ma\uff1f",
        "z\u00e0i y\u01d4 zh\u00f2u de zh\u00e8 y\u00ec bi\u0101n\uff0c sh\u00ed tou sh\u00ec m\u00e9i y\u01d2u sh\u0113ng m\u00ecng de\uff1b z\u00e0i y\u01d4 zh\u00f2u de l\u00ecng y\u00ec bi\u0101n\uff0c t\u0101 hu\u00ec bu hu\u00ec xi\u00e0ng hu\u0101 du\u01d2 y\u00ed y\u00e0ng k\u0101i f\u00e0ng\uff0c hu\u00f2 zh\u011b xi\u00e0ng r\u00e9n y\u00ed y\u00e0ng x\u00edng z\u01d2u\uff1f",
        "sh\u00e0ng k\u00e8 l\u00edng sh\u0113ng xi\u01ceng le\uff0c w\u01d2 men de d\u00ec y\u012b ji\u00e9 k\u00e8 sh\u00ec y\u01d4 w\u00e9n k\u00e8\u3002 z\u00e0i y\u01d4 zh\u00f2u de l\u00ecng y\u00ec bi\u0101n\uff0c d\u00ec y\u012b ji\u00e9 sh\u00ec sh\u00f9 xu\u00e9 k\u00e8 ma\uff1f t\u0101 men de sh\u00f9 xu\u00e9 k\u00e8\uff0c hu\u00ec sh\u00ec sh\u00e9n me y\u00e0ng zi de ne\uff1f",
        "z\u00e0i y\u01d4 zh\u00f2u de l\u00ecng y\u00ec bi\u0101n\uff0c ji\u0101 f\u01ce sh\u00ec zh\u00e8 y\u00e0ng de\uff1a d\u00e0 d\u00ec w\u00e0n w\u00f9 ji\u0101 sh\u00e0ng y\u00ec ch\u01ceng d\u00e0 xu\u011b d\u011bng y\u00fa y\u00ed pi\u00e0n b\u00e1i m\u00e1ng m\u00e1ng\uff0c n\u00e0 sh\u00ed\uff0c w\u00fa sh\u00f9 de h\u00e1i zi hu\u00ec c\u00f3ng ji\u0101 l\u01d0 ch\u014dng ch\u016b l\u00e1i\uff0c d\u01ce xu\u011b zh\u00e0ng\uff0c du\u012b xu\u011b r\u00e9n\uff0c hu\u00e1 xu\u011b\u2026\u2026 zh\u00e8 y\u00e0ng\uff0c d\u00e0 d\u00ec w\u00e0n w\u00f9 ji\u0101 sh\u00e0ng y\u00ec ch\u01ceng d\u00e0 xu\u011b y\u00f2u d\u011bng y\u00fa w\u00fa sh\u00f9 h\u00e1i zi de ji\u00e9 r\u00ec\u3002",
        "ch\u00e9ng f\u01ce sh\u00ec zh\u00e8 y\u00e0ng de\uff1a \u201c z\u01ceo ch\u016bn \u00e8r yu\u00e8 \u201d ch\u00e9ng \u201c zh\u00fa w\u00e0i t\u00e1o hu\u0101 s\u0101n li\u01ceng zh\u012b \u201d\uff0c z\u00e0i ch\u00e9ng \u201c ch\u016bn y\u01d4 gu\u00ec r\u00fa y\u00f3u \u201d\uff0c d\u011bng y\u00fa \u201c ch\u016bn f\u0113ng y\u00f2u l\u01dc ji\u0101ng n\u00e1n \u00e0n \u201d\uff0c y\u00f2u d\u011bng y\u00fa \u201c b\u00ec y\u00f9 zhu\u0101ng ch\u00e9ng y\u00ed sh\u00f9 g\u0101o\uff0c w\u00e0n ti\u00e1o chu\u00ed xi\u00e0 l\u01dc s\u012b t\u0101o \u201d\uff0c zu\u00ec h\u00f2u d\u011bng y\u00fa \u201c \u00e9r t\u00f3ng s\u00e0n xu\u00e9 gu\u012b l\u00e1i z\u01ceo\uff0c m\u00e1ng ch\u00e8n d\u014dng f\u0113ng f\u00e0ng zh\u01d0 yu\u0101n \u201d\u3002",
        "zh\u00e8ng d\u0101ng w\u01d2 de s\u012b x\u00f9 z\u00e0i m\u00e1ng m\u00e1ng y\u01d4 zh\u00f2u zh\u014dng chu\u0101n su\u014d sh\u00ed\uff0c t\u016b r\u00e1n\uff0c \u011br bi\u0101n xi\u01ceng q\u01d0 le y\u01d4 w\u00e9n l\u01ceo sh\u012b de sh\u0113ng y\u012bn\uff1a \u201c n\u01d0 z\u00e0i xi\u01ceng sh\u00e9n me ne\uff1f \u201d",
        "w\u01d2 y\u01d2u xi\u0113 g\u0101n g\u00e0\u3002 d\u00e0n z\u00e0i n\u00e0 y\u00ed sh\u00f9n ji\u0101n\uff0c w\u01d2 ju\u00e9 d\u00ecng b\u01ce w\u01d2 zh\u012b d\u00e0o de g\u00e0o s\u00f9 d\u00e0 ji\u0101\uff1a z\u00e0i y\u01d4 zh\u00f2u de l\u00ecng y\u00ec bi\u0101n\uff0c r\u00fa gu\u01d2 xi\u01ceng xi\u011b y\u00ec pi\u0101n gu\u0101n y\u00fa f\u0113ng de x\u00ed zu\u00f2\uff0c ji\u00f9 d\u00e9 b\u00ec sh\u00e0ng y\u01cen j\u012bng\uff0c xi\u01ceng xi\u00e0ng f\u0113ng de y\u00e0ng zi\uff0c m\u00e0n m\u00e0n d\u00ec r\u00e0ng z\u00ec j\u01d0 y\u011b bi\u00e0n ch\u00e9ng f\u0113ng\uff0c z\u00e0i k\u014dng zh\u014dng f\u0113i a f\u0113i\uff0c f\u0113i d\u00e9 yu\u00e8 g\u0101o\uff0c x\u00ed zu\u00f2 de f\u0113n sh\u00f9 ji\u00f9 yu\u00e8 g\u0101o\u2026\u2026",
        "xi\u00e0 k\u00e8 le\uff0c d\u00e0 ji\u0101 d\u014du w\u00e9i zhe w\u01d2\uff0c xi\u01ceng zh\u012b d\u00e0o y\u01d4 zh\u00f2u de l\u00ecng y\u00ec bi\u0101n h\u00e1i y\u01d2u sh\u00e9n me y\u01d2u q\u00f9 de sh\u00ec q\u00edng\u3002 sh\u00ec a\uff0c gu\u0101n y\u00fa y\u01d4 zh\u00f2u de l\u00ecng y\u00ec bi\u0101n\uff0c w\u01d2 men d\u014du xi\u01ceng zh\u012b d\u00e0o g\u00e8ng du\u014d\u3002 d\u00e0o le w\u01cen sh\u00e0ng\uff0c w\u01d2 h\u00e1i y\u00e0o p\u0101 z\u00e0i chu\u0101ng t\u00e1i sh\u00e0ng\uff0c k\u00e0n zhe h\u00e0o h\u00e0n de x\u012bng k\u014dng\uff0c chu\u0101n yu\u00e8 m\u00e1ng m\u00e1ng y\u01d4 zh\u00f2u\uff0c f\u0113i d\u00e0o n\u00e0 g\u00e8 h\u011bn yu\u01cen h\u011bn yu\u01cen de d\u00ec f\u0101ng\uff0c z\u00e0i q\u00f9 b\u00e0i f\u01ceng y\u01d4 zh\u00f2u l\u00ecng y\u00ec bi\u0101n de n\u00e0 ge \u201c w\u01d2 \u201d\u3002"
      ],
      recognizeChars: ["淌","秘","栋","吁","绪","篇"],
      writeChars: ["宇","宙","淌","秘","密","栋","梯","铃","乘","绪","篇","越"],
      vocabWords: [
        {word:'秘密',pinyin:'mì mì',en:'secret',sentence:'宇宙的另一边有什么秘密？',sentenceEn:'What secrets are on the other side of the universe?'},
        {word:'相反',pinyin:'xiāng fǎn',en:'opposite',sentence:'那里的一切都是相反的。',sentenceEn:'Everything there is opposite.'},
        {word:'加法',pinyin:'jiā fǎ',en:'addition',sentence:'他们的加法是这样的。',sentenceEn:'Their addition works like this.'},
        {word:'穿越',pinyin:'chuān yuè',en:'travel through',sentence:'穿越到宇宙的另一边。',sentenceEn:'Travel through to the other side of the universe.'},
        {word:'无穷',pinyin:'wú qióng',en:'infinite',sentence:'宇宙是无穷的。',sentenceEn:'The universe is infinite.'}
      ],
      footnotes: [
        {term:"\u79d8\u5bc6", termEn:"secret", definition:"\u3010m\u00ec m\u00ec\u3011secret\u3002", definitionEn:"secret"},
        {term:"\u76f8\u53cd", termEn:"opposite", definition:"\u3010xi\u0101ng f\u01cen\u3011opposite\u3002", definitionEn:"opposite"},
        {term:"\u52a0\u6cd5", termEn:"addition", definition:"\u3010ji\u0101 f\u01ce\u3011addition\u3002", definitionEn:"addition"},
        {term:"\u7a7f\u8d8a", termEn:"travel through", definition:"\u3010chu\u0101n yu\u00e8\u3011travel through\u3002", definitionEn:"travel through"},
        {term:"\u65e0\u7a77", termEn:"infinite", definition:"\u3010w\u00fa qi\u00f3ng\u3011infinite\u3002", definitionEn:"infinite"}
      ],
      readingTips: [
        {cn:"\u8fd9\u7bc7\u6587\u7ae0\u8f83\u957f\uff0c\u5efa\u8bae\u5206\u6bb5\u9605\u8bfb\u3002\u6bcf\u8bfb\u5b8c\u4e00\u6bb5\uff0c\u505c\u4e0b\u6765\u60f3\u60f3\u8fd9\u6bb5\u7684\u4e3b\u8981\u5185\u5bb9\u3002", en:"This is a longer text. Read it paragraph by paragraph, pausing after each to think about the main idea."},
        {cn:"\u8bfb\u5b8c\u5168\u6587\u540e\uff0c\u8bd5\u7740\u7528\u4e00\u53e5\u8bdd\u6982\u62ec\u6587\u7ae0\u7684\u4e2d\u5fc3\u601d\u60f3\u3002", en:"After reading the whole text, try to summarize the central idea in one sentence."}
      ],
      grammarPoints: [
        {point:'想象写法',pointEn:'xiǎng xiàng xiě fǎ',example:'imaginative writing',exampleEn:'在宇宙的另一边，加法是这样的：大地上的花+花=一片花海。',explanation:'On the other side, addition is: flowers on earth + flowers = a sea of flowers.',explanationEn:'用想象创造新奇的世界，让文章充满趣味'}
      ],
      exercises: [
        {type:"think",cn:"课文中的\u201C宇宙的另一边\u201D有哪些秘密？用自己的话说一说。",en:"What secrets does 'the other side of the universe' hold? Describe them in your own words."},
        {type:"imagine",cn:"想象一下：\u201C宇宙的另一边\u201D还会有哪些秘密？和同学交流，看谁想得更奇妙。",en:"Imagine: What other secrets might 'the other side of the universe' have? Share and see who has the most amazing ideas."},
        {type:"discuss",cn:"课文中\u201C乘法\u201D的想象把古诗和数学结合起来，你觉得有趣吗？",en:"The text's imaginary 'multiplication' combines ancient poems with math. Do you find this interesting?"}
      ],
      teachingPoints: [
        {cn:"体会\u201C宇宙的另一边是这一边的倒影\u201D这个核心想象，所有内容都围绕\u201C相反\u201D展开。",en:"Appreciate the core imagination: 'the other side is a mirror image', with all content revolving around 'opposites'."},
        {cn:"学习从日常生活出发展开想象的方法：上学、上课、数学、写作等。",en:"Learn to expand imagination from everyday life: school, classes, math, writing, etc."},
        {cn:"感受想象类文章的特点：大胆、奇妙、自然合理。",en:"Feel the characteristics of imaginative writing: bold, wonderful, naturally logical."}
      ],
      parentTips: [
        {cn:"鼓励孩子大胆想象，不要用\u201C不可能\u201D限制孩子的创造力。",en:"Encourage bold imagination; don't limit creativity with 'impossible'."},
        {cn:"和孩子一起讨论\u201C宇宙的另一边\u201D还可能有什么有趣的事。",en:"Discuss with your child what other interesting things might exist on the other side of the universe."}
      ]
    },
    {
      id: 17, title: "我变成了一棵树", titleEn: "I Turned Into a Tree",
      difficulty: 3,
      text: [
"“英英，吃饭了!”",
"我在树下玩得好好的，点儿都不 想吃饭。",
"“英英，吃饭了!”妈妈的噪门又大了许多。",
"我真希望变成一棵树，这样就没人在你玩的时候叫你吃饭了。我心里想着，就觉得身上痒痒的，低头一看，发现许多小树枝正从我身上冒出来。呀，我真的变成了一棵树!",
"你猜，我变的树上会长什么?当然不是苹果啦，梨也不对一对了，鸟窝!",
"我变成了一棵长满各种形状的鸟窝的树:三角形、正方形、长方形、圆形、椭圆形、菱形....风一吹，它们就在枝头跳起了舞。",
"我会请小兔、小刺猬、小松鼠、小鸭子、小鳄鱼、小狐狸住在里面，如果你喜欢也可以住进来。",
"你怎么住进来?别担心，我会弯下腰，让鸟窝离你很近很近，你只需轻轻一跳或者轻轻一爬，就像平时上你的小床那么容易。",
"傍晚的时候，妈妈背着一个大包过来了，我的心嗵嗵地跳着，震得树上的鸟窝都一动一动的，发出丁零丁零的声音。",
"“你好!”妈妈向我点了点头，“请问我可以住在那个三角形的鸟窝里吗?”",
"她不知道我变成了树!我有点儿高兴，又有些失望。一些树枝轻轻地垂下， 妈妈顺着这些树枝爬了上来，坐在那个三角形的鸟窝里。",
"妈妈打开背包，从里面拿出好多东西:巧克力、香肠、面包、花生、牛奶...她把它们分给小动物们。他们一起在我的鸟窝里啧吧啧吧地吃了起来。",
"“咕噜噜....”我的肚子里发出一种怪怪的声音，把他们吓了一跳。他们也只是奇怪地互相望了一眼，又继续吃起来。",
"“咕噜噜....”我肚子里的声音越来越响了。这时候，我开始想念家里那些香喷喷的饭菜，好像还看见爸爸正在大口大口地啃着一块糖醋排骨。天哪，那可是我最喜欢吃的东西!",
"“咦，下雨了。”小狐狸抬头望了望，可天空中一丝乌云都没有。",
"“是你的牛奶打翻了吗?”小鳄鱼问小松鼠。",
"“你看，这不好好的嘛。”",
"“那么，可能是一只虫子撒的尿。”",
"“不对，是大树在哭。”小白兔发现了树干上不断往下滴的水珠。",
"唉，变成了树真麻烦。他们连水珠是从我的嘴巴里流出来的都不知道。",
"“小馋猫，肚子饿了，  对吧?英英!”妈妈说话了，还对我眨了一下眼睛。",
"噢，最了解我的人到底还是妈妈。",
"哎呀，她是怎么知道我的秘密的?"
],
      textEn: [
"“Yingying, time for dinner!”",
"I was having so much fun under the tree, I didn't want to eat at all.",
"“Yingying, time for dinner!” Mom's voice got much louder.",
"I really wished I could become a tree, so nobody would call me to eat while I was playing. As I thought this, I felt itchy all over. Looking down, I saw little branches sprouting from my body. Wow, I really turned into a tree!",
"You guess — what would grow on the tree I turned into? Of course not apples, and pears aren’t right either — that’s right, bird nests! The tree I turned into was covered with bird nests of all shapes: triangular ones, square ones, and also rectangular, circular, oval, and diamond-shaped ones… When the wind blew, they danced on the branches.",
"I'd invite Little Rabbit, Little Hedgehog, Little Squirrel, Little Duck, Little Crocodile, and Little Fox to live in them. If you'd like, you could move in too.",
"In the evening, Mom came over carrying a big bag on her back. My heart was thumping away, shaking the bird nests on the tree so they jiggled back and forth, making jingling sounds. “Hello!” Mom nodded to me. “Excuse me, may I stay in that triangular bird nest?” She didn’t know I had become a tree! I felt a bit happy, yet also somewhat disappointed.",
"Mom opened her backpack and took out lots of things: chocolate, sausages, bread, peanuts, milk... She shared the treats with the little animals. They all ate happily together in my bird nests.",
"“Gurgle...” A strange sound came from my stomach, startling everyone. “Gurgle...” The sound got louder and louder. I started missing the delicious food at home, and even seemed to see Dad happily gnawing on a piece of sweet-and-sour spare rib. Goodness, that's my favorite food!",
"“Little greedy cat, you're hungry, aren't you? Yingying!” Mom spoke up, winking at me.",
"Oh, the person who knows me best is still Mom. But how did she discover my secret?",
"(Passage, 66 characters)",
"(Passage, 54 characters)",
"(Passage, 80 characters)",
"(Short passage, 29 characters)",
"(Short passage, 20 characters)",
"(Short passage, 12 characters)",
"(Short passage, 16 characters)",
"(Short passage, 29 characters)",
"(Short passage, 31 characters)",
"(Short passage, 35 characters)",
"(Short passage, 15 characters)",
"(Short passage, 15 characters)"
],
      textPinyin: [
"“ yīng yīng， chī fàn le！ ”",
"wǒ zài shù xià wán dé hǎo hǎo de， yì diǎn ér dōu bù xiǎng chī fàn。",
"“ yīng yīng， chī fàn le！ ” mā ma de sǎng mén yòu dà le xǔ duō。",
"wǒ zhēn xī wàng biàn chéng yì kē shù， zhè yàng jiù méi rén zài nǐ wán de shí hòu jiào nǐ chī fàn le。 wǒ xīn lǐ xiǎng zhe， jiù jué de shēn shàng yǎng yǎng de， dī tóu yí kàn， fā xiàn xǔ duō xiǎo shù zhī zhèng cóng wǒ shēn shàng mào chū lái。 ya， wǒ zhēn de biàn chéng le yì kē shù！",
"nǐ cāi， wǒ biàn de shù shàng huì zhǎng shén me？ dāng rán bú shì píng guǒ lā， lí yě bú duì—— duì le， niǎo wō！ wǒ biàn de shù shàng cháng mǎn le gè zhǒng xíng zhuàng de niǎo wō： sān jiǎo xíng de、 zhèng fāng xíng de， hái yǒu cháng fāng xíng de、 yuán xíng de、 tuǒ yuán xíng de、 líng xíng de…… fēng yì chuī， tā men jiù zài zhī tóu tiào qǐ le wǔ。",
"wǒ huì qǐng xiǎo bái tù、 xiǎo cì wei、 xiǎo sōng shǔ、 xiǎo yā zǐ、 xiǎo è yú、 xiǎo hú li zhù zài lǐ miàn， rú guǒ nǐ xǐ huan yě kě yǐ zhù jìn lái。",
"bàng wǎn de shí hòu， mā ma bèi zhe yí gè dà bāo guò lái le， wǒ de xīn tōng tōng dì tiào zhe， zhèn dé shù shàng de niǎo wō dōu yí dòng yi dòng de， fā chū dīng líng dīng líng de shēng yīn。 “ nǐ hǎo！ ” mā ma xiàng wǒ diǎn le diǎn tóu， “ qǐng wèn wǒ kě yǐ zhù zài nà ge sān jiǎo xíng de niǎo wō lǐ ma？ ” tā bù zhī dào wǒ biàn chéng le shù！ wǒ yǒu diǎn er gāo xìng， yòu yǒu xiē shī wàng。",
"mā ma dǎ kāi bēi bāo， cóng lǐ miàn ná chū hǎo duō dōng xī： qiǎo kè lì、 xiāng cháng、 miàn bāo、 huā shēng、 niú nǎi…… tā bǎ zhè xiē hǎo chī de fēn gěi xiǎo dòng wù men。 tā men yì qǐ zài wǒ de niǎo wō lǐ jīn jīn yǒu wèi dì chī le qǐ lái。",
"“ gū lū lū…… ” wǒ de dù zǐ lǐ fā chū yì zhǒng guài guài de shēng yīn， bǎ tā men xià le yí tiào。 “ gū lū lū…… ” wǒ dù zǐ lǐ de shēng yīn yuè lái yuè xiǎng le。 zhè shí hòu， wǒ kāi shǐ xiǎng niàn jiā lǐ nà xiē xiāng pēn pēn de fàn cài， hǎo xiàng hái kàn jiàn bà ba zhèng zài dà kǒu dà kǒu dì kěn zhe yí kuài táng cù pái gǔ。 tiān nǎ， nà kě shì wǒ zuì xǐ huan chī de dōng xī！",
"“ xiǎo chán māo， dù zǐ è le， duì ba？ yīng yīng！ ” mā ma shuō huà le， hái duì wǒ zhǎ le yí xià yǎn jīng。",
"ō， zuì le jiě wǒ de rén dào dǐ hái shì mā ma。 āi yā， tā shì zěn me zhī dào wǒ de mì mì de？",
"mā ma dǎ kāi bēi bāo ， cóng lǐ miàn ná chū hǎo duō dōng xī : qiǎo kè lì 、 xiāng cháng 、 miàn bāo 、 huā shēng 、 niú nǎi . . . tā bǎ tā men fēn gěi xiǎo dòng wù men 。 tā men yì qǐ zài wǒ de niǎo wō lǐ zé ba zé ba dì chī le qǐ lái 。",
"“ gū lū lū . . . . ” wǒ de dù zǐ lǐ fā chū yì zhǒng guài guài de shēng yīn ， bǎ tā men xià le yí tiào 。 tā men yě zhǐ shì qí guài dì hù xiāng wàng le yì yǎn ， yòu jì xù chī qǐ lái 。",
"“ gū lū lū . . . . ” wǒ dù zǐ lǐ de shēng yīn yuè lái yuè xiǎng le 。 zhè shí hòu ， wǒ kāi shǐ xiǎng niàn jiā lǐ nà xiē xiāng pēn pēn de fàn cài ， hǎo xiàng hái kàn jiàn bà ba zhèng zài dà kǒu dà kǒu dì kěn zhe yí kuài táng cù pái gǔ 。 tiān nǎ ， nà kě shì wǒ zuì xǐ huan chī de dōng xī !",
"“ yí ， xià yǔ le 。 ” xiǎo hú li tái tóu wàng le wàng ， kě tiān kōng zhōng yì sī wū yún dōu méi yǒu 。",
"“ shì nǐ de niú nǎi dǎ fān le ma ? ” xiǎo è yú wèn xiǎo sōng shǔ 。",
"“ nǐ kàn ， zhè bù hǎo hǎo de ma 。 ”",
"“ nà me ， kě néng shì yì zhī chóng zǐ sā de niào 。 ”",
"“ bú duì ， shì dà shù zài kū 。 ” xiǎo bái tù fā xiàn le shù gàn shàng bú duàn wǎng xià dī de shuǐ zhū 。",
"ài ， biàn chéng le shù zhēn má fán 。 tā men lián shuǐ zhū shì cóng wǒ de zuǐ ba lǐ liú chū lái de dōu bù zhī dào 。",
"“ xiǎo chán māo ， dù zǐ è le ，     duì ba ? yīng yīng ! ” mā ma shuō huà le ， hái duì wǒ zhǎ le yí xià yǎn jīng 。",
"ō ， zuì liǎo jiě wǒ de rén dào dǐ hái shì mā ma 。",
"āi yā ， tā shì zěn me zhī dào wǒ de mì mì de ?"
],
      recognizeChars: ["希","痒","鳄","零","肠","醋","馋"],
      writeChars: ["状","狐","狸","腰","零","巧","克","肠","继","续","抬","烦"],
      vocabWords: [
        {word:'痒痒',pinyin:'yǎng yang',en:'itchy',sentence:'手臂上痒痒的。',sentenceEn:'My arms felt itchy.'},
        {word:'形状',pinyin:'xíng zhuàng',en:'shape',sentence:'树上长出了各种形状的鸟窝。',sentenceEn:'All sorts of bird nests grew on the tree.'},
        {word:'丁零丁零',pinyin:'dīng líng dīng líng',en:'jingle',sentence:'风一吹，丁零丁零响。',sentenceEn:'When the wind blew, it jingled.'},
        {word:'馋',pinyin:'chán',en:'greedy for food',sentence:'我开始馋妈妈做的饭了。',sentenceEn:'I started craving the food Mom makes.'},
        {word:'失望',pinyin:'shī wàng',en:'disappointed',sentence:'我有点儿失望。',sentenceEn:'I was a little disappointed.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u201c\u82f1\u82f1\uff0c\u5403\u996d\u4e86\uff01", exampleEn: "\u201cYingying, time for dinner!\u201d", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u628a\u5b57\u53e5", pointEn: "b\u01ce-construction", example: "\u201c\u82f1\u82f1\uff0c\u5403\u996d\u4e86\uff01", exampleEn: "\u201cYingying, time for dinner!\u201d", explanation: "\u7528\u201c\u628a\u201d\u5c06\u5bbe\u8bed\u63d0\u524d\uff0c\u5f3a\u8c03\u52a8\u4f5c\u5bf9\u5bf9\u8c61\u7684\u5f71\u54cd", explanationEn: "Moves the object before the verb using \"b\u01ce\" to emphasize the effect of the action"}
      ],
      footnotes: [
        {term:"\u75d2\u75d2", termEn:"itchy", definition:"\u3010y\u01ceng yang\u3011itchy\u3002", definitionEn:"itchy"},
        {term:"\u5f62\u72b6", termEn:"shape", definition:"\u3010x\u00edng zhu\u00e0ng\u3011shape\u3002", definitionEn:"shape"},
        {term:"\u4e01\u96f6\u4e01\u96f6", termEn:"jingle", definition:"\u3010d\u012bng l\u00edng d\u012bng l\u00edng\u3011jingle\u3002", definitionEn:"jingle"},
        {term:"\u998b", termEn:"greedy for food", definition:"\u3010ch\u00e1n\u3011greedy for food\u3002", definitionEn:"greedy for food"},
        {term:"\u5931\u671b", termEn:"disappointed", definition:"\u3010sh\u012b w\u00e0ng\u3011disappointed\u3002", definitionEn:"disappointed"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"默读课文，说说你觉得哪些想象有意思。",en:"Read silently and share which parts of the imagination you find interesting."},
        {type:"imagine",cn:"如果你也会变，你想变成什么？变了以后会发生什么奇妙的事？",en:"If you could transform, what would you become? What wonderful things would happen?"},
        {type:"discuss",cn:"妈妈是怎么知道\u201C我\u201D的秘密的？你怎么看？",en:"How did Mom know 'my' secret? What do you think?"}
      ],
      teachingPoints: [
        {cn:"体会想象的趣味性：变成树→长出鸟窝→小动物入住→妈妈来了→肚子饿了。",en:"Appreciate the fun of imagination: becoming a tree, growing nests, animals moving in, Mom arrives, getting hungry."},
        {cn:"故事的想象虽然大胆，但细节很真实（肚子饿、想吃糖醋排骨、妈妈最了解我）。",en:"Though the imagination is bold, details feel real (hunger, craving spare ribs, Mom knows best)."},
        {cn:"感受母爱的温暖——即使变成了树，妈妈依然能认出自己的孩子。",en:"Feel the warmth of maternal love — even when transformed into a tree, Mom still recognizes her child."}
      ],
      parentTips: [
        {cn:"和孩子一起讨论\u201C如果你会变，想变成什么\u201D，激发想象力。",en:"Discuss 'if you could transform, what would you become' to spark imagination."},
        {cn:"引导孩子感受故事中妈妈的爱：即使不被认出，妈妈也在默默关爱。",en:"Help your child feel the mother's love: even unrecognized, Mom quietly cares."}
      ]
    }
  ],
  garden: {
    wordSentence: {title:"交流平台",titleEn:"Discussion Platform",content:{cn:"大胆想象创造出了现实中不存在的事物和景象。在想象的世界里，什么都可能发生。大胆想象，可以让我们拥有奇异的经历。",en:"Bold imagination creates things and scenes that don't exist in reality. In the world of imagination, anything can happen. Bold imagination gives us extraordinary experiences."}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"奇妙的想象——选一个题目写一个想象故事，如\u201C最好玩的国王\u201D\u201C一本有魔法的书\u201D\u201C小树的心思\u201D等。要大胆想象，创造出属于自己的想象世界。",en:"Wonderful Imagination — Choose a topic and write an imagination story, such as 'The Most Fun King', 'A Magic Book', 'The Little Tree's Thoughts'. Be bold and create your own imaginary world."},modelEssays:[
      {title:"一本有魔法的书",titleEn:"A Magic Book",level:"基础",
      structure:[
        {cn:"开头：介绍怎么得到这本书",en:"Opening: Introduce how you got the book"},
        {cn:"中间：写书的魔法和发生的事",en:"Body: Describe the book's magic and what happened"},
        {cn:"结尾：写故事的结局",en:"Ending: Conclude the story"}
      ],
      cn:"有一天，我在书架上发现了一本奇怪的书。它的封面闪着金色的光，上面写着\u201C魔法之书\u201D四个字。\n我好奇地翻开第一页，上面写着：\u201C你想去哪里？请大声说出来。\u201D我试着喊了一声：\u201C我想去大海！\u201D话音刚落，一阵风吹来，我发现自己竟然站在沙滩上！蓝蓝的大海就在眼前，海浪轻轻地拍打着我的脚丫。我在沙滩上捡贝壳、堆沙堡，玩得开心极了。\n到了傍晚，我又翻开书说：\u201C我想回家。\u201D一眨眼，我就回到了自己的房间。\n我赶紧把书藏好。嘿嘿，明天我要去月球！",
      en:"One day, I found a strange book on the bookshelf. Its cover glowed golden, with the words \u201CBook of Magic\u201D on it.\nCuriously, I opened the first page. It read: \u201CWhere do you want to go? Say it aloud.\u201D I tried shouting, \u201CI want to go to the sea!\u201D The moment I finished speaking, a gust of wind blew, and I found myself standing on a beach! The blue ocean was right before me, waves gently lapping at my feet. I collected shells and built sandcastles on the beach, having a wonderful time.\nIn the evening, I opened the book again and said, \u201CI want to go home.\u201D In the blink of an eye, I was back in my room.\nI quickly hid the book. Hehe, tomorrow I\u2019m going to the moon!",
      notes:"这篇想象作文设定简单明确（一本能带你去任何地方的书），故事有起因、经过、结果。用了\u201C话音刚落\u201D\u201C一眨眼\u201D等词语让过渡自然。结尾留下悬念，让读者回味。",
      notesEn:"This imaginative essay has a simple, clear premise (a book that takes you anywhere), with beginning, middle, and end. Transition phrases like 'the moment I finished speaking' and 'in the blink of an eye' make it smooth. The ending leaves suspense for the reader."},
      {title:"小树的心思",titleEn:"The Little Tree's Thoughts",level:"提高",
      structure:[
        {cn:"开头：用拟人手法介绍小树",en:"Opening: Introduce the little tree using personification"},
        {cn:"中间：写小树四季的心思和愿望",en:"Body: Describe the tree's thoughts through the seasons"},
        {cn:"结尾：写小树的领悟",en:"Ending: Share the tree's realization"}
      ],
      cn:"路边有一棵小树，它每天看着来来往往的行人，心里有好多好多的心思。\n春天，小鸟在小树的枝头唱歌。小树好羡慕啊，它想：\u201C要是我也能唱歌就好了！\u201D它使劲摇晃着树枝，发出\u201C沙沙沙\u201D的声音。小鸟笑着说：\u201C小树，你唱的歌真好听！\u201D\n夏天，太阳火辣辣地照着大地。小树看见一个小男孩热得满头大汗，赶紧伸展开自己的枝叶，给他撑起一把绿色的大伞。男孩在树荫下凉快地说：\u201C谢谢你，小树！\u201D小树开心极了。\n秋天，小树的叶子变黄了，一片一片落下来。小树有点难过：\u201C我的头发都掉光了，好丑啊。\u201D可是一群小朋友跑过来，捡起落叶做书签、拼图画，笑得可开心了。\n冬天，北风呼呼地吹，小树冻得直打哆嗦。一个老爷爷走过来，给小树围了一圈稻草。小树感到暖暖的，它想：\u201C虽然我不能走路、不能说话，可是我能给别人带来快乐，这就够了。\u201D",
      en:"By the roadside stood a little tree, watching people pass by every day, its mind full of thoughts.\nIn spring, birds sang on its branches. The little tree was so envious. It thought, \u201CIf only I could sing too!\u201D It shook its branches hard, making a \u201Crushh, rushh\u201D sound. The bird laughed, \u201CLittle tree, your song sounds lovely!\u201D\nIn summer, the sun beat down fiercely. The little tree saw a boy dripping with sweat, so it quickly spread its branches and leaves to hold up a big green umbrella for him. The boy said from the shade, \u201CThank you, little tree!\u201D The little tree was overjoyed.\nIn autumn, the tree\u2019s leaves turned yellow and fell one by one. The little tree felt a bit sad: \u201CAll my hair has fallen off. I look so ugly.\u201D But a group of children ran over, picked up the fallen leaves to make bookmarks and leaf collages, laughing happily.\nIn winter, the north wind howled and the little tree shivered. An old grandpa came and wrapped straw around its trunk. The little tree felt warm inside. It thought, \u201CAlthough I can\u2019t walk or talk, I can bring joy to others \u2014 and that\u2019s enough.\u201D",
      notes:"这篇范文按四季顺序展开，每个季节写小树的一个心思。全文运用拟人手法，赋予小树人的思想和情感。每段都有与他人的互动，内容丰富有趣。结尾的领悟体现了\u201C奉献\u201D的主题，比较有深度。",
      notesEn:"This essay unfolds through the four seasons, with one thought per season. Personification is used throughout, giving the tree human thoughts and feelings. Each paragraph includes interaction with others, making it rich and engaging. The ending realization about 'giving' adds meaningful depth."},
      {title:"最好玩的国王",titleEn:"The Most Fun King",level:"拓展",
      structure:[
        {cn:"开头：用\u201C从前\u201D式童话开头引入角色",en:"Opening: Introduce the character with a fairy-tale beginning"},
        {cn:"中间：写国王颁布的有趣法令和后果",en:"Body: Describe the king's fun decrees and their consequences"},
        {cn:"转折：法令带来的意外问题",en:"Turning point: Unexpected problems from the decrees"},
        {cn:"结尾：国王的成长和领悟",en:"Ending: The king's growth and realization"}
      ],
      cn:"从前，有一个国王，他觉得当国王太无聊了，整天坐在宝座上批奏折，一点意思都没有。于是，他决定颁布三条最好玩的法令。\n第一条法令：全国人民每天必须讲一个笑话。\n这条法令刚颁布的时候，大家都很开心。大街上到处都是笑声，就连卖菜的老奶奶都一边卖菜一边讲笑话。可是过了一个星期，大家的笑话都讲完了，想不出新的，急得抓耳挠腮。\n第二条法令：所有的课本都换成漫画书。\n小朋友们高兴坏了，整天抱着漫画书看。可是到了考试的时候，谁也答不出题。老师们急得团团转，国王也傻眼了。\n第三条法令：每周三不用上班上学，全民玩游戏。\n头一个星期三，全国像过节一样热闹。可是面包店没人做面包，医院没有医生上班，公交车也停运了。国王自己想吃午饭的时候，才发现厨师也去玩了，只好饿着肚子。\n国王坐在空荡荡的餐桌前，终于明白了一个道理：快乐很重要，可是不能只有快乐。学习、工作和快乐，一个都不能少。于是他又颁布了一条新法令：\u201C快乐和努力，要像左脚和右脚一样，一起往前走！\u201D\n从此，这个王国变成了世界上最幸福的王国——人们努力工作，也快乐生活。而那位国王，成了世界上最聪明的国王。",
      en:"Once upon a time, there was a king who found being king terribly boring \u2014 sitting on his throne reviewing documents all day, not fun at all. So he decided to issue three of the most fun decrees.\nDecree One: Every citizen must tell one joke each day.\nAt first, everyone was delighted. Laughter filled the streets; even the vegetable-selling granny told jokes while selling cabbages. But after a week, everyone ran out of jokes and couldn\u2019t think of new ones, scratching their heads anxiously.\nDecree Two: All textbooks shall be replaced with comic books.\nChildren were thrilled, reading comics all day long. But when exams came, nobody could answer the questions. Teachers panicked, and even the king was dumbfounded.\nDecree Three: Every Wednesday, no work or school \u2014 everyone plays games.\nThe first Wednesday was as festive as a holiday. But the bakery had no one to bake bread, the hospital had no doctors, and buses stopped running. When the king wanted lunch, he discovered the chef had gone off to play too, and he had to go hungry.\nSitting at his empty dining table, the king finally understood: happiness is important, but you can\u2019t have only happiness. Study, work, and joy \u2014 you need all three. So he issued a new decree: \u201CHappiness and hard work should be like your left foot and right foot \u2014 they walk forward together!\u201D\nFrom then on, the kingdom became the happiest in the world \u2014 people worked hard and lived joyfully. And that king became the wisest king in the world.",
      notes:"这篇范文构思巧妙，用\u201C三条法令\u201D的结构组织故事，每条法令都有\u201C颁布→欢乐→问题\u201D的完整过程。想象大胆又合理，每个法令的后果都符合逻辑。语言幽默风趣（急得抓耳挠腮、傻眼了），符合童话风格。结尾的领悟水到渠成，\u201C左脚右脚\u201D的比喻非常形象。整篇文章体现了\u201C大胆想象\u201D和\u201C蕴含道理\u201D两个要求，是拓展水平的佳作。",
      notesEn:"This essay is cleverly structured with 'three decrees,' each following a decree → joy → problem arc. The imagination is bold yet logical, with realistic consequences. The language is humorous (scratching heads, dumbfounded), fitting the fairy-tale style. The ending realization flows naturally, and the 'left foot, right foot' simile is very vivid. The essay demonstrates both 'bold imagination' and 'embedded lesson' requirements, making it an excellent advanced-level piece."}
    ]},
    exampleEssays: {title:"习作例文",titleEn:"Example Essays",content:{cn:"一支铅笔的梦想——铅笔想溜出教室，在山坡上萌芽开花；想跳进荷塘，为小鱼虾撑伞。\n尾巴它有一只猫——反方向想象，猫有尾巴，尾巴也能有猫。",en:"A Pencil's Dream — A pencil wants to escape the classroom, sprout and bloom on a hillside; jump into a lotus pond to hold an umbrella for little fish.\nA Tail Has a Cat — reverse imagination: cats have tails, so a tail can have a cat."}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 6 — 童年 Childhood (Lessons 18-21)   */
/* ═══════════════════════════════════════════ */
{
  id: 6, title: "童年", titleEn: "Childhood",
  difficulty: 3,
  type: "kewen",
  lessons: [
    {
      id: 18, title: "童年的水墨画", titleEn: "Childhood Ink Paintings",
      difficulty: 3,
      text: [
        "溪边\n垂柳把溪水当作梳妆的镜子，\n山溪像绿玉带一样平静。\n人影给溪水染绿了，\n钓竿上立着一只红蜻蜓。\n忽然扑腾一声人影碎了，\n草地上蹦跳着鱼儿和笑声。",
        "江上\n像刚下水的鸭群，\n扇动翅膀拍水戏耍。\n一双双小手拨动着浪花，\n你拨我溅笑哈哈。\n是哪个\u201C水葫芦\u201D一下钻入水中，\n出水时只见一阵水花两排银牙。",
        "林中\n松树刚洗过澡一身清清爽爽，\n松针上一串串雨珠明明亮亮。\n小蘑菇钻出泥土戴一顶斗笠，\n像一朵朵山花在树下开放。\n是谁一声欢叫把雨珠抖落，\n只见松林里一个个斗笠像蘑菇一样。"
      ],
      textEn: [
        "By the Stream\nWeeping willows use the stream as a mirror for grooming,\nThe mountain stream is as calm as a green jade ribbon.\nPeople's reflections are dyed green by the water,\nA red dragonfly perches on the fishing rod.\nSuddenly, a splash — the reflection shatters,\nOn the grass, a fish bounces alongside laughter.",
        "On the River\nLike a flock of ducks just entering the water,\nFlapping wings and splashing playfully.\nPairs of little hands stir up the waves,\nYou splash, I splash, everyone laughing.\nWhich little 'water gourd' just dived under?\nComing up — just a burst of spray and two rows of white teeth.",
        "In the Forest\nPine trees, fresh from a bath, feel clean and refreshed,\nStrings of rain drops on pine needles, bright and sparkling.\nLittle mushrooms poke through the soil wearing little straw hats,\nLike mountain flowers blooming beneath the trees.\nWho gave a joyful shout that shook off the raindrops?\nIn the pine forest, little straw hats look just like mushrooms."
      ],
      textPinyin: [
        "x\u012b bi\u0101n\n chu\u00ed li\u01d4 b\u01ce x\u012b shu\u01d0 d\u00e0ng zu\u00f2 sh\u016b zhu\u0101ng de j\u00ecng zi\uff0c\n sh\u0101n x\u012b xi\u00e0ng l\u01dc y\u00f9 d\u00e0i y\u00ed y\u00e0ng p\u00edng j\u00ecng\u3002\n r\u00e9n y\u01d0ng g\u011bi x\u012b shu\u01d0 r\u01cen l\u01dc le\uff0c\n di\u00e0o g\u0101n sh\u00e0ng l\u00ec zhe y\u00ec zh\u012b h\u00f3ng q\u012bng t\u00edng\u3002\n h\u016b r\u00e1n p\u016b t\u00e9ng y\u00ec sh\u0113ng r\u00e9n y\u01d0ng su\u00ec le\uff0c\n c\u01ceo d\u00ec sh\u00e0ng b\u00e8ng ti\u00e0o zhe y\u00fa er h\u00e9 xi\u00e0o sh\u0113ng\u3002",
        "ji\u0101ng sh\u00e0ng\n xi\u00e0ng g\u0101ng xi\u00e0 shu\u01d0 de y\u0101 q\u00fan\uff0c\n sh\u0101n d\u00f2ng ch\u00ec b\u01ceng p\u0101i shu\u01d0 x\u00ec shu\u01ce\u3002\n y\u00ec shu\u0101ng shu\u0101ng xi\u01ceo sh\u01d2u b\u014d d\u00f2ng zhe l\u00e0ng hu\u0101\uff0c\n n\u01d0 b\u014d w\u01d2 ji\u00e0n xi\u00e0o h\u0101 h\u0101\u3002\n sh\u00ec n\u01ce g\u00e8 \u201c shu\u01d0 h\u00fa lu \u201d y\u00ed xi\u00e0 zu\u00e0n r\u00f9 shu\u01d0 zh\u014dng\uff0c\n ch\u016b shu\u01d0 sh\u00ed zh\u01d0 ji\u00e0n y\u00ed zh\u00e8n shu\u01d0 hu\u0101 li\u01ceng p\u00e1i y\u00edn y\u00e1\u3002",
        "l\u00edn zh\u014dng\n s\u014dng sh\u00f9 g\u0101ng x\u01d0 gu\u00f2 z\u01ceo y\u00ec sh\u0113n q\u012bng q\u012bng shu\u01ceng shu\u01ceng\uff0c\n s\u014dng zh\u0113n sh\u00e0ng y\u00ed chu\u00e0n chu\u00e0n y\u01d4 zh\u016b m\u00edng m\u00edng li\u00e0ng li\u00e0ng\u3002\n xi\u01ceo m\u00f3 gu zu\u00e0n ch\u016b n\u00ed t\u01d4 d\u00e0i y\u00ec d\u01d0ng d\u00f2u l\u00ec\uff0c\n xi\u00e0ng y\u00ec du\u01d2 du\u01d2 sh\u0101n hu\u0101 z\u00e0i sh\u00f9 xi\u00e0 k\u0101i f\u00e0ng\u3002\n sh\u00ec shu\u00ed y\u00ec sh\u0113ng hu\u0101n ji\u00e0o b\u01ce y\u01d4 zh\u016b d\u01d2u lu\u00f2\uff0c\n zh\u01d0 ji\u00e0n s\u014dng l\u00edn l\u01d0 y\u00ed g\u00e8 g\u00e8 d\u00f2u l\u00ec xi\u00e0ng m\u00f3 gu y\u00ed y\u00e0ng\u3002"
      ],
      recognizeChars: ["墨","染","碎","浪","溅"],
      writeChars: ["墨","染","竿","腾","碎","拨","浪","葫","爽","蘑","菇"],
      vocabWords: [
        {word:'水墨画',pinyin:'shuǐ mò huà',en:'ink wash painting',sentence:'童年就像一幅水墨画。',sentenceEn:'Childhood is like an ink wash painting.'},
        {word:'染绿',pinyin:'rǎn lǜ',en:'dye green',sentence:'人影给溪水染绿了。',sentenceEn:'Reflections dye the stream green.'},
        {word:'蘑菇',pinyin:'mó gu',en:'mushroom',sentence:'斗笠像个大蘑菇。',sentenceEn:'The bamboo hat looks like a big mushroom.'},
        {word:'浪花',pinyin:'làng huā',en:'spray; waves',sentence:'浪花和人影在嬉戏。',sentenceEn:'Waves and reflections are playing.'},
        {word:'清清爽爽',pinyin:'qīng qīng shuǎng shuǎng',en:'fresh and crisp',sentence:'清清爽爽的夏日。',sentenceEn:'A fresh and crisp summer day.'}
      ],
      footnotes: [
        {term:"\u6c34\u58a8\u753b", termEn:"ink wash painting", definition:"\u3010shu\u01d0 m\u00f2 hu\u00e0\u3011ink wash painting\u3002", definitionEn:"ink wash painting"},
        {term:"\u67d3\u7eff", termEn:"dye green", definition:"\u3010r\u01cen l\u01dc\u3011dye green\u3002", definitionEn:"dye green"},
        {term:"\u8611\u83c7", termEn:"mushroom", definition:"\u3010m\u00f3 gu\u3011mushroom\u3002", definitionEn:"mushroom"},
        {term:"\u6d6a\u82b1", termEn:"spray; waves", definition:"\u3010l\u00e0ng hu\u0101\u3011spray; waves\u3002", definitionEn:"spray; waves"},
        {term:"\u6e05\u6e05\u723d\u723d", termEn:"fresh and crisp", definition:"\u3010q\u012bng q\u012bng shu\u01ceng shu\u01ceng\u3011fresh and crisp\u3002", definitionEn:"fresh and crisp"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'诗歌意象',pointEn:'shī gē yì xiàng',example:'poetic imagery',exampleEn:'人影给溪水染绿了。',explanation:'Reflections dye the stream green.',explanationEn:'用意象组合画面，体会诗歌语言的美'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文。背诵《溪边》。",en:"Read aloud. Recite 'By the Stream'."},
        {type:"think",cn:"说说你在溪边、江上、林中分别看到了怎样的画面。",en:"Describe what scenes you see by the stream, on the river, and in the forest."},
        {type:"discuss",cn:"联系上下文，说说\u201C人影给溪水染绿了\u201D\u201C只见松林里一个个斗笠像蘑菇一样\u201D的意思。",en:"Using context, explain the meanings of 'reflections dyed green by the stream' and 'straw hats in the forest look like mushrooms'."}
      ],
      teachingPoints: [
        {cn:"三首诗分别描绘了溪边钓鱼、江上戏水、林中采蘑菇三个童年场景。",en:"The three poems depict three childhood scenes: fishing by a stream, playing in a river, picking mushrooms in a forest."},
        {cn:"体会诗中生动的比喻和拟人，如\u201C垂柳把溪水当作梳妆的镜子\u201D。",en:"Appreciate vivid metaphors and personification, like 'willows use the stream as a grooming mirror'."},
        {cn:"注意诗的画面感——像水墨画一样，有动有静，有色有声。",en:"Notice the poem's visual quality — like ink paintings, with movement and stillness, color and sound."}
      ],
      parentTips: [
        {cn:"和孩子回忆童年趣事，引导感受诗中的快乐氛围。",en:"Recall childhood fun memories together to help feel the poems' joyful atmosphere."},
        {cn:"鼓励孩子背诵《溪边》，体会诗歌的韵律美。",en:"Encourage your child to recite 'By the Stream' and appreciate the poem's rhythmic beauty."}
      ]
    },
    {
      id: 19, title: "剃头大师", titleEn: "The Master Barber",
      difficulty: 3,
      text: [
        "我的表弟小沙天生胆小，他怕鬼，怕喝中药，怕做噩梦，还怕剃头。",
        "小沙每次都是被姑父押进理发店的，而且，姑父还得执一把木尺在一旁监督，否则，小沙准会夺门而逃。",
        "店里的剃头师傅都不欢迎小沙这样的顾客，因为谁给他剃头，他就骂谁\u201C害人精\u201D，还用看仇人一样的目光怒视对方。",
        "总是一个老剃头师傅来做小沙的冤家。老师傅耳朵不好，听不清小沙的抗议，而且，他有一把磨得锃亮的剃刀，所以，小沙只得规规矩矩由老师傅摆布。",
        "最痛苦的是，老师傅习惯用一把老掉牙的推剪，它常常会咬住一绺头发不放，让小沙吃尽苦头。这还不算，老师傅眼神差了点儿，总把碎头发掉在小沙的脖子里，痒得小沙哧哧笑。你想想，这一会儿痛一会儿痒的，跟受刑一样。",
        "最让小沙耿耿于怀的是，每次剃完头，姑父还要付双倍的钱给\u201C害人精\u201D。",
        "这次，小沙的头发很长了。他央求我替他剪头发，并答应剪完后付给我五块钱。",
        "我先把姑父的大睡衣给他围上，再摆出剃头师傅的架势，嚓嚓两剪刀，就剪下一堆头发。我觉得自己像个剃头大师，剪刀所到之处，头发纷纷飘落，真比那老剃头师傅还熟练。",
        "很快，我就发现自己闯了祸。因为这样随意乱剪，头发长长短短，这儿翘起，那儿却短得不到一厘米。",
        "我想稳住小沙，告诉他这是最时髦的发式，可他一照镜子，大叫一声，像见了鬼一样。",
        "当然，我没得到那五块钱。最倒霉的是小沙父子：小沙被迫去理发店剃了个和电灯泡一样的光头；姑父呢，那件睡衣上的头发怎么也清除不干净，他每天夜里都要爬起来两三次，捉跳蚤一样找身上的碎头发。"
      ],
      textEn: [
        "My cousin Xiaosha was born timid — he was afraid of ghosts, Chinese medicine, nightmares, and haircuts.",
        "Xiaosha was always escorted to the barber shop by his father, who had to stand by with a wooden ruler to supervise. Otherwise, Xiaosha would bolt right out the door.",
        "None of the barbers welcomed a customer like Xiaosha, because whoever cut his hair, he'd curse as 'that torturer' and glare at them like an enemy.",
        "It was always one old barber who became Xiaosha's nemesis. The old man was hard of hearing and couldn't make out Xiaosha's protests. Plus, he had a gleaming razor, so Xiaosha had no choice but to sit obediently under the old barber's control.",
        "The worst part was the old barber's habit of using an ancient pair of electric clippers that would often grab onto a lock of hair and not let go, making Xiaosha suffer terribly. On top of that, the old barber's eyesight wasn't great, always dropping hair clippings down Xiaosha's neck, tickling him until he giggled. Imagine — pain one moment, itching the next — it was like torture.",
        "What bothered Xiaosha most was that after every haircut, his father would pay double to 'that torturer'.",
        "This time, Xiaosha's hair had gotten very long. He begged me to cut it for him, promising to pay me five yuan.",
        "I wrapped his father's big pajamas around him, struck a barber's pose, and with two snips of the scissors, cut off a pile of hair. I felt like a master barber — hair fell everywhere my scissors went, even more skillfully than the old barber.",
        "Soon, I realized I'd made a mess. My random cutting left hair at all different lengths — sticking up here, barely a centimeter there.",
        "I tried to reassure Xiaosha that this was the trendiest hairstyle, but when he looked in the mirror, he screamed as if he'd seen a ghost.",
        "Of course, I didn't get the five yuan. The worst off were Xiaosha and his father: Xiaosha had to go to the barber shop and get his head shaved as bald as a light bulb; and his father could never get all the hair out of his pajamas — every night he'd get up two or three times, hunting for stray hairs like catching fleas."
      ],
      textPinyin: [
        "w\u01d2 de bi\u01ceo d\u00ec xi\u01ceo sh\u0101 ti\u0101n sh\u0113ng d\u01cen xi\u01ceo\uff0c t\u0101 p\u00e0 gu\u01d0\uff0c p\u00e0 h\u0113 zh\u014dng y\u00e0o\uff0c p\u00e0 zu\u00f2 \u00e8 m\u00e8ng\uff0c h\u00e1i p\u00e0 t\u00ec t\u00f3u\u3002",
        "xi\u01ceo sh\u0101 m\u011bi c\u00ec d\u014du sh\u00ec b\u00e8i g\u016b fu y\u0101 j\u00ecn l\u01d0 f\u0101 di\u00e0n de\uff0c \u00e9r qi\u011b\uff0c g\u016b fu h\u00e1i d\u00e9 zh\u00ed y\u00ec b\u01ce m\u00f9 ch\u01d0 z\u00e0i y\u00ec p\u00e1ng ji\u0101n d\u016b\uff0c f\u01d2u z\u00e9\uff0c xi\u01ceo sh\u0101 zh\u01d4n hu\u00ec du\u00f3 m\u00e9n \u00e9r t\u00e1o\u3002",
        "di\u00e0n l\u01d0 de t\u00ec t\u00f3u sh\u012b fu d\u014du b\u00f9 hu\u0101n y\u00edng xi\u01ceo sh\u0101 zh\u00e8 y\u00e0ng de g\u00f9 k\u00e8\uff0c y\u012bn w\u00e8i shu\u00ed g\u011bi t\u0101 t\u00ec t\u00f3u\uff0c t\u0101 ji\u00f9 m\u00e0 shu\u00ed \u201c h\u00e0i r\u00e9n j\u012bng \u201d\uff0c h\u00e1i y\u00f2ng k\u00e0n ch\u00f3u r\u00e9n y\u00ed y\u00e0ng de m\u00f9 gu\u0101ng n\u00f9 sh\u00ec du\u00ec f\u0101ng\u3002",
        "z\u01d2ng sh\u00ec y\u00ed g\u00e8 l\u01ceo t\u00ec t\u00f3u sh\u012b fu l\u00e1i zu\u00f2 xi\u01ceo sh\u0101 de yu\u0101n ji\u0101\u3002 l\u01ceo sh\u012b fu \u011br duo b\u00f9 h\u01ceo\uff0c t\u012bng b\u00f9 q\u012bng xi\u01ceo sh\u0101 de k\u00e0ng y\u00ec\uff0c \u00e9r qi\u011b\uff0c t\u0101 y\u01d2u y\u00ec b\u01ce m\u00f3 d\u00e9 z\u00e8ng li\u00e0ng de t\u00ec d\u0101o\uff0c su\u01d2 y\u01d0\uff0c xi\u01ceo sh\u0101 zh\u012b d\u00e9 gu\u012b gu\u012b j\u01d4 j\u01d4 y\u00f3u l\u01ceo sh\u012b fu b\u01cei b\u00f9\u3002",
        "zu\u00ec t\u00f2ng k\u01d4 de sh\u00ec\uff0c l\u01ceo sh\u012b fu x\u00ed gu\u00e0n y\u00f2ng y\u00ec b\u01ce l\u01ceo di\u00e0o y\u00e1 de tu\u012b ji\u01cen\uff0c t\u0101 ch\u00e1ng ch\u00e1ng hu\u00ec y\u01ceo zh\u00f9 y\u00ec li\u01d4 t\u00f3u fa b\u00fa f\u00e0ng\uff0c r\u00e0ng xi\u01ceo sh\u0101 ch\u012b j\u00ecn k\u01d4 t\u00f3u\u3002 zh\u00e8 h\u00e1i b\u00fa su\u00e0n\uff0c l\u01ceo sh\u012b fu y\u01cen sh\u00e9n ch\u00e0 le di\u01cen \u00e9r\uff0c z\u01d2ng b\u01ce su\u00ec t\u00f3u fa di\u00e0o z\u00e0i xi\u01ceo sh\u0101 de b\u00f3 zi l\u01d0\uff0c y\u01ceng d\u00e9 xi\u01ceo sh\u0101 ch\u012b ch\u012b xi\u00e0o\u3002 n\u01d0 xi\u01ceng xi\u01ceng\uff0c zh\u00e8 y\u00ed hu\u00ec er t\u00f2ng y\u00ed hu\u00ec er y\u01ceng de\uff0c g\u0113n sh\u00f2u x\u00edng y\u00ed y\u00e0ng\u3002",
        "zu\u00ec r\u00e0ng xi\u01ceo sh\u0101 g\u011bng g\u011bng y\u00fa hu\u00e1i de sh\u00ec\uff0c m\u011bi c\u00ec t\u00ec w\u00e1n t\u00f3u\uff0c g\u016b fu h\u00e1i y\u00e0o f\u00f9 shu\u0101ng b\u00e8i de qi\u00e1n g\u011bi \u201c h\u00e0i r\u00e9n j\u012bng \u201d\u3002",
        "zh\u00e8 c\u00ec\uff0c xi\u01ceo sh\u0101 de t\u00f3u fa h\u011bn ch\u00e1ng le\u3002 t\u0101 y\u0101ng qi\u00fa w\u01d2 t\u00ec t\u0101 ji\u01cen t\u00f3u fa\uff0c b\u00ecng d\u0101 ying ji\u01cen w\u00e1n h\u00f2u f\u00f9 g\u011bi w\u01d2 w\u01d4 ku\u00e0i qi\u00e1n\u3002",
        "w\u01d2 xi\u0101n b\u01ce g\u016b fu de d\u00e0 shu\u00ec y\u012b g\u011bi t\u0101 w\u00e9i sh\u00e0ng\uff0c z\u00e0i b\u01cei ch\u016b t\u00ec t\u00f3u sh\u012b fu de ji\u00e0 sh\u00ec\uff0c ch\u0101 ch\u0101 li\u01ceng ji\u01cen d\u0101o\uff0c ji\u00f9 ji\u01cen xi\u00e0 y\u00ec du\u012b t\u00f3u fa\u3002 w\u01d2 ju\u00e9 de z\u00ec j\u01d0 xi\u00e0ng g\u00e8 t\u00ec t\u00f3u d\u00e0 sh\u012b\uff0c ji\u01cen d\u0101o su\u01d2 d\u00e0o zh\u012b ch\u00f9\uff0c t\u00f3u fa f\u0113n f\u0113n pi\u0101o lu\u00f2\uff0c zh\u0113n b\u01d0 n\u00e0 l\u01ceo t\u00ec t\u00f3u sh\u012b fu h\u00e1i sh\u00fa li\u00e0n\u3002",
        "h\u011bn ku\u00e0i\uff0c w\u01d2 ji\u00f9 f\u0101 xi\u00e0n z\u00ec j\u01d0 chu\u01ceng le hu\u00f2\u3002 y\u012bn w\u00e8i zh\u00e8 y\u00e0ng su\u00ed y\u00ec lu\u00e0n ji\u01cen\uff0c t\u00f3u fa ch\u00e1ng ch\u00e1ng du\u01cen du\u01cen\uff0c zh\u00e8 \u00e9r qi\u00e0o q\u01d0\uff0c n\u00e0 \u00e9r qu\u00e8 du\u01cen d\u00e9 b\u00fa d\u00e0o y\u00ec l\u00ed m\u01d0\u3002",
        "w\u01d2 xi\u01ceng w\u011bn zh\u00f9 xi\u01ceo sh\u0101\uff0c g\u00e0o s\u00f9 t\u0101 zh\u00e8 sh\u00ec zu\u00ec sh\u00ed m\u00e1o de f\u00e0 sh\u00ec\uff0c k\u011b t\u0101 y\u00ed zh\u00e0o j\u00ecng zi\uff0c d\u00e0 ji\u00e0o y\u00ec sh\u0113ng\uff0c xi\u00e0ng ji\u00e0n le gu\u01d0 y\u00ed y\u00e0ng\u3002",
        "d\u0101ng r\u00e1n\uff0c w\u01d2 m\u00e9i d\u00e9 d\u00e0o n\u00e0 w\u01d4 ku\u00e0i qi\u00e1n\u3002 zu\u00ec d\u01ceo m\u00e9i de sh\u00ec xi\u01ceo sh\u0101 f\u00f9 z\u01d0\uff1a xi\u01ceo sh\u0101 b\u00e8i p\u00f2 q\u00f9 l\u01d0 f\u0101 di\u00e0n t\u00ec le g\u00e8 h\u00e9 di\u00e0n d\u0113ng p\u00e0o y\u00ed y\u00e0ng de gu\u0101ng t\u00f3u\uff1b g\u016b fu ne\uff0c n\u00e0 ji\u00e0n shu\u00ec y\u012b sh\u00e0ng de t\u00f3u fa z\u011bn me y\u011b q\u012bng ch\u00fa b\u00f9 g\u0101n j\u00ecng\uff0c t\u0101 m\u011bi ti\u0101n y\u00e8 l\u01d0 d\u014du y\u00e0o p\u00e1 q\u01d0 l\u00e1i li\u01ceng s\u0101n c\u00ec\uff0c zhu\u014d ti\u00e0o zao y\u00ed y\u00e0ng zh\u01ceo sh\u0113n sh\u00e0ng de su\u00ec t\u00f3u fa\u3002"
      ],
      recognizeChars: ["剃","执","否","骂","仇","惯","刑","替","厘","摸"],
      writeChars: ["表","胆","鬼","理","夺","骂","仇","差","付","倍","虽","泡","件"],
      vocabWords: [
        {word:'剃头',pinyin:'tì tóu',en:'haircut',sentence:'小沙害怕剃头。',sentenceEn:'Little Sha was afraid of haircuts.'},
        {word:'胆小鬼',pinyin:'dǎn xiǎo guǐ',en:'coward',sentence:'小沙是个胆小鬼。',sentenceEn:'Little Sha was a coward.'},
        {word:'仇人',pinyin:'chóu rén',en:'enemy',sentence:'小沙把理发师当成仇人。',sentenceEn:'Little Sha treated the barber like an enemy.'},
        {word:'摆布',pinyin:'bǎi bu',en:'handle; manipulate',sentence:'随我怎么摆布。',sentenceEn:'Let me handle it however I want.'},
        {word:'耿耿于怀',pinyin:'gěng gěng yú huái',en:'brood over',sentence:'小沙对剃头耿耿于怀。',sentenceEn:'Little Sha brooded over haircuts.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u6211\u7684\u8868\u5f1f\u5c0f\u6c99\u5929\u751f\u80c6\u5c0f\uff0c\u4ed6\u6015\u9b3c\uff0c\u6015\u559d\u4e2d\u836f\uff0c\u6015\u505a\u5669\u68a6\uff0c\u8fd8\u6015\u5243\u5934\u3002", exampleEn: "My cousin Xiaosha was born timid \u2014 he was afraid of ghosts, Chinese medicine, ni", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u4e0d\u4f46\u2026\u2026\u800c\u4e14\u2026\u2026", pointEn: "not only...but also...", example: "\u6211\u7684\u8868\u5f1f\u5c0f\u6c99\u5929\u751f\u80c6\u5c0f\uff0c\u4ed6\u6015\u9b3c\uff0c\u6015\u559d\u4e2d\u836f\uff0c\u6015\u505a\u5669\u68a6\uff0c\u8fd8\u6015\u5243\u5934\u3002", exampleEn: "My cousin Xiaosha was born timid \u2014 he was afraid of ghosts, Chinese medicine, ni", explanation: "\u9012\u8fdb\u590d\u53e5\uff0c\u540e\u4e00\u5206\u53e5\u6bd4\u524d\u4e00\u5206\u53e5\u7a0b\u5ea6\u66f4\u6df1", explanationEn: "Progressive compound sentence where the second clause goes further than the first"}
      ],
      footnotes: [
        {term:"\u5243\u5934", termEn:"haircut", definition:"\u3010t\u00ec t\u00f3u\u3011haircut\u3002", definitionEn:"haircut"},
        {term:"\u80c6\u5c0f\u9b3c", termEn:"coward", definition:"\u3010d\u01cen xi\u01ceo gu\u01d0\u3011coward\u3002", definitionEn:"coward"},
        {term:"\u4ec7\u4eba", termEn:"enemy", definition:"\u3010ch\u00f3u r\u00e9n\u3011enemy\u3002", definitionEn:"enemy"},
        {term:"\u6446\u5e03", termEn:"handle; manipulate", definition:"\u3010b\u01cei bu\u3011handle; manipulate\u3002", definitionEn:"handle; manipulate"},
        {term:"\u803f\u803f\u4e8e\u6000", termEn:"brood over", definition:"\u3010g\u011bng g\u011bng y\u00fa hu\u00e1i\u3011brood over\u3002", definitionEn:"brood over"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"朗读课文。说说老剃头师傅和\u201C我\u201D给小沙剃头的过程有什么不同。",en:"Read aloud. Compare how the old barber and 'I' gave Xiaosha a haircut."},
        {type:"think",cn:"\u201C剃头大师\u201D和\u201C害人精\u201D分别指谁？为什么这样称呼他们？",en:"Who are the 'master barber' and the 'torturer'? Why are they called that?"},
        {type:"discuss",cn:"课文为什么用\u201C剃头大师\u201D作为题目？和同学交流你的看法。",en:"Why is the text titled 'The Master Barber'? Share your thoughts with classmates."}
      ],
      teachingPoints: [
        {cn:"体会课文幽默风趣的语言风格，如\u201C剪刀所到之处，头发纷纷飘落\u201D的夸张。",en:"Appreciate the text's humorous style, such as the exaggeration 'hair falling everywhere my scissors went'."},
        {cn:"理解标题\u201C剃头大师\u201D的反语效果——\u201C我\u201D其实是个\u201C剃头灾星\u201D。",en:"Understand the irony of the title 'Master Barber' — 'I' am actually a 'barber disaster'."},
        {cn:"学习运用多种方法理解难懂的句子：联系上下文、结合生活经验。",en:"Learn to understand difficult sentences using various methods: context clues and life experience."}
      ],
      parentTips: [
        {cn:"和孩子一起回忆有趣的童年经历，感受课文的幽默。",en:"Recall funny childhood experiences together and enjoy the text's humor."},
        {cn:"引导孩子体会\u201C反语\u201D的修辞手法——用\u201C大师\u201D称呼一个笨拙的理发者。",en:"Help your child appreciate irony — calling a clumsy hair-cutter a 'master'."}
      ]
    },
    {
      id: 20, title: "肥皂泡", titleEn: "Soap Bubbles",
      difficulty: 3,
      text: [
        "小的时候，游戏的种类很多，其中我最爱玩的是吹肥皂泡。",
        "下雨的时节，不能到山上海边去玩，母亲总教我们在廊子上吹肥皂泡。她说阴雨时节天气潮湿，肥皂泡不容易破裂。",
        "方法是把用剩的碎肥皂放在一只小木碗里，加上点儿水，和弄和弄，使它溶化，然后用一支竹笔套管，蘸上那黏稠的肥皂水，慢慢地吹起，吹成一个轻圆的网球大小的泡儿，再轻轻地一提，那轻圆的球儿便从管上落了下来，软悠悠地在空中飘游。若用扇子在下面轻轻地扇送，有时能飞得很高很高。",
        "这肥皂泡，吹起来很美丽，五色的浮光，在那轻清透明的球面上乱转。若是扇得好，一个大球会分裂成两三个玲珑娇软的小球，四散分飞。有时吹得太大了，扇得太急了，这脆薄的球，会扯成长圆的形式，颤巍巍的，光影零乱。这时大家都悬着心，仰着头，屏住呼吸，——不久，这光丽的薄球就无声地散裂了，肥皂水落了下来，洒到眼睛里，大家都忽然低了头，揉出了眼泪。",
        "那一个个轻清脆丽的小球，像一串美丽的梦，是我们自己小心地轻轻吹起的，吹了起来，又轻轻地飞起，是那么圆满，那么自由，那么透明，那么美丽。借着扇子的轻风，把她们一个个送上天去送过海去。到天上，轻轻地挨着明月，渡过天河跟着夕阳西去。或者轻悠悠地飘过大海，飞越山巅，又低低地落下，落到一个熟睡中的婴儿的头发上……目送着她们，我心里充满了快乐、骄傲与希望。"
      ],
      textEn: [
        "When I was little, there were many kinds of games, but my favorite was blowing soap bubbles.",
        "During rainy seasons, when we couldn't go to the mountains or the beach, Mother would teach us to blow soap bubbles on the veranda. She said the humid weather during rainy seasons kept the bubbles from bursting easily.",
        "The method: put leftover soap scraps in a small wooden bowl, add a little water, stir until dissolved, then dip a bamboo pen tube into the sticky soap water, blow slowly to form a light, round bubble about the size of a tennis ball, then gently lift — the round ball would slip off the tube and float softly through the air. If you gently fanned it from below, it could sometimes fly very, very high.",
        "These soap bubbles were beautiful when blown — iridescent light swirled across their light, clear, transparent surfaces. If fanned well, one large bubble would split into two or three delicate little bubbles, scattering in all directions. Sometimes, blown too large and fanned too vigorously, the fragile thin bubble would stretch into an elongated shape, trembling, its colors dancing wildly. Everyone would hold their breath, heads tilted up — and soon, the luminous thin ball would silently burst, soapy water dripping down into our eyes, making everyone suddenly lower their heads and rub away tears.",
        "Those light, clear, brilliant little bubbles, like a string of beautiful dreams, were carefully, gently blown by us. They rose and softly floated — so full, so free, so transparent, so beautiful. With the gentle breeze of a fan, we sent them up to the sky and across the sea. Up to the sky, gently touching the bright moon, crossing the Milky Way following the sunset westward. Or floating softly across the ocean, over mountain peaks, then drifting low, landing on a sleeping baby's hair... Watching them go, my heart was filled with joy, pride, and hope."
      ],
      textPinyin: [
        "xi\u01ceo de sh\u00ed h\u00f2u\uff0c y\u00f3u x\u00ec de zh\u01d2ng l\u00e8i h\u011bn du\u014d\uff0c q\u00ed zh\u014dng w\u01d2 zu\u00ec \u00e0i w\u00e1n de sh\u00ec chu\u012b f\u00e9i z\u00e0o p\u00e0o\u3002",
        "xi\u00e0 y\u01d4 de sh\u00ed ji\u00e9\uff0c b\u00f9 n\u00e9ng d\u00e0o sh\u0101n sh\u00e0ng h\u01cei bi\u0101n q\u00f9 w\u00e1n\uff0c m\u01d4 q\u012bn z\u01d2ng ji\u00e0o w\u01d2 men z\u00e0i l\u00e1ng z\u01d0 sh\u00e0ng chu\u012b f\u00e9i z\u00e0o p\u00e0o\u3002 t\u0101 shu\u014d y\u012bn y\u01d4 sh\u00ed ji\u00e9 ti\u0101n q\u00ec ch\u00e1o sh\u012b\uff0c f\u00e9i z\u00e0o p\u00e0o b\u00f9 r\u00f3ng y\u00ec p\u00f2 li\u00e8\u3002",
        "f\u0101ng f\u01ce sh\u00ec b\u01ce y\u00f2ng sh\u00e8ng de su\u00ec f\u00e9i z\u00e0o f\u00e0ng z\u00e0i y\u00ec zh\u012b xi\u01ceo m\u00f9 w\u01cen l\u01d0\uff0c ji\u0101 sh\u00e0ng di\u01cen \u00e9r shu\u01d0\uff0c h\u00e9 n\u00f2ng h\u00e9 n\u00f2ng\uff0c sh\u01d0 t\u0101 r\u00f3ng hu\u00e0\uff0c r\u00e1n h\u00f2u y\u00f2ng y\u00ec zh\u012b zh\u00fa b\u01d0 t\u00e0o gu\u01cen\uff0c zh\u00e0n sh\u00e0ng n\u00e0 ni\u00e1n ch\u00f3u de f\u00e9i z\u00e0o shu\u01d0\uff0c m\u00e0n m\u00e0n d\u00ec chu\u012b q\u01d0\uff0c chu\u012b ch\u00e9ng y\u00ed g\u00e8 q\u012bng yu\u00e1n de w\u01ceng qi\u00fa d\u00e0 xi\u01ceo de p\u00e0o \u00e9r\uff0c z\u00e0i q\u012bng q\u012bng d\u00ec y\u00ec t\u00ed\uff0c n\u00e0 q\u012bng yu\u00e1n de qi\u00fa \u00e9r bi\u00e0n c\u00f3ng gu\u01cen sh\u00e0ng lu\u00f2 le xi\u00e0 l\u00e1i\uff0c ru\u01cen y\u014du y\u014du d\u00ec z\u00e0i k\u014dng zh\u014dng pi\u0101o y\u00f3u\u3002 ru\u00f2 y\u00f2ng sh\u00e0n zi z\u00e0i xi\u00e0 mi\u00e0n q\u012bng q\u012bng d\u00ec sh\u00e0n s\u00f2ng\uff0c y\u01d2u sh\u00ed n\u00e9ng f\u0113i d\u00e9 h\u011bn g\u0101o h\u011bn g\u0101o\u3002",
        "zh\u00e8 f\u00e9i z\u00e0o p\u00e0o\uff0c chu\u012b q\u01d0 l\u00e1i h\u011bn m\u011bi l\u00ec\uff0c w\u01d4 s\u00e8 de f\u00fa gu\u0101ng\uff0c z\u00e0i n\u00e0 q\u012bng q\u012bng t\u00f2u m\u00edng de qi\u00fa mi\u00e0n sh\u00e0ng lu\u00e0n zhu\u01cen\u3002 ru\u00f2 sh\u00ec sh\u00e0n d\u00e9 h\u01ceo\uff0c y\u00ed g\u00e8 d\u00e0 qi\u00fa hu\u00ec f\u0113n li\u00e8 ch\u00e9ng li\u01ceng s\u0101n g\u00e8 l\u00edng l\u00f3ng ji\u0101o ru\u01cen de xi\u01ceo qi\u00fa\uff0c s\u00ec s\u00e0n f\u0113n f\u0113i\u3002 y\u01d2u sh\u00ed chu\u012b d\u00e9 t\u00e0i d\u00e0 le\uff0c sh\u00e0n d\u00e9 t\u00e0i j\u00ed le\uff0c zh\u00e8 cu\u00ec b\u00e1o de qi\u00fa\uff0c hu\u00ec ch\u011b ch\u00e9ng zh\u01ceng yu\u00e1n de x\u00edng sh\u00ec\uff0c ch\u00e0n w\u0113i w\u0113i de\uff0c gu\u0101ng y\u01d0ng l\u00edng lu\u00e0n\u3002 zh\u00e8 sh\u00ed d\u00e0 ji\u0101 d\u014du xu\u00e1n zhe x\u012bn\uff0c y\u01ceng zhe t\u00f3u\uff0c p\u00edng zh\u00f9 h\u016b x\u012b\uff0c\u2014\u2014 b\u00f9 ji\u01d4\uff0c zh\u00e8 gu\u0101ng l\u00ec de b\u00e1o qi\u00fa ji\u00f9 w\u00fa sh\u0113ng d\u00ec s\u00e0n li\u00e8 le\uff0c f\u00e9i z\u00e0o shu\u01d0 lu\u00f2 le xi\u00e0 l\u00e1i\uff0c s\u01ce d\u00e0o y\u01cen j\u012bng l\u01d0\uff0c d\u00e0 ji\u0101 d\u014du h\u016b r\u00e1n d\u012b le t\u00f3u\uff0c r\u00f3u ch\u016b le y\u01cen l\u00e8i\u3002",
        "n\u00e0 y\u00ed g\u00e8 g\u00e8 q\u012bng q\u012bng cu\u00ec l\u00ec de xi\u01ceo qi\u00fa\uff0c xi\u00e0ng y\u00ed chu\u00e0n m\u011bi l\u00ec de m\u00e8ng\uff0c sh\u00ec w\u01d2 men z\u00ec j\u01d0 xi\u01ceo x\u012bn d\u00ec q\u012bng q\u012bng chu\u012b q\u01d0 de\uff0c chu\u012b le q\u01d0 l\u00e1i\uff0c y\u00f2u q\u012bng q\u012bng d\u00ec f\u0113i q\u01d0\uff0c sh\u00ec n\u00e0 me yu\u00e1n m\u01cen\uff0c n\u00e0 me z\u00ec y\u00f3u\uff0c n\u00e0 me t\u00f2u m\u00edng\uff0c n\u00e0 me m\u011bi l\u00ec\u3002 ji\u00e8 zhe sh\u00e0n zi de q\u012bng f\u0113ng\uff0c b\u01ce t\u0101 men y\u00ed g\u00e8 g\u00e8 s\u00f2ng sh\u00e0ng ti\u0101n q\u00f9 s\u00f2ng gu\u00f2 h\u01cei q\u00f9\u3002 d\u00e0o ti\u0101n sh\u00e0ng\uff0c q\u012bng q\u012bng d\u00ec \u0101i zhe m\u00edng yu\u00e8\uff0c d\u00f9 gu\u00f2 ti\u0101n h\u00e9 g\u0113n zhe x\u012b y\u00e1ng x\u012b q\u00f9\u3002 hu\u00f2 zh\u011b q\u012bng y\u014du y\u014du d\u00ec pi\u0101o gu\u00f2 d\u00e0 h\u01cei\uff0c f\u0113i yu\u00e8 sh\u0101n di\u0101n\uff0c y\u00f2u d\u012b d\u012b d\u00ec lu\u00f2 xi\u00e0\uff0c lu\u00f2 d\u00e0o y\u00ed g\u00e8 sh\u00fa shu\u00ec zh\u014dng de y\u012bng \u00e9r de t\u00f3u f\u0101 sh\u00e0ng\u2026\u2026 m\u00f9 s\u00f2ng zhe t\u0101 men\uff0c w\u01d2 x\u012bn l\u01d0 ch\u014dng m\u01cen le ku\u00e0i l\u00e8\u3001 ji\u0101o \u00e0o y\u01d4 x\u012b w\u00e0ng\u3002"
      ],
      recognizeChars: ["廊","和","悠","若","娇","薄","颤","巍","巅","婴"],
      writeChars: ["皂","廊","剩","碗","悠","若","透","娇","扯","仰","串","婴","希"],
      vocabWords: [
        {word:'肥皂',pinyin:'féi zào',en:'soap',sentence:'我最爱吹肥皂泡。',sentenceEn:'I love blowing soap bubbles most.'},
        {word:'和弄',pinyin:'huò nong',en:'mix up; stir',sentence:'把碎肥皂放在小碗里和弄和弄。',sentenceEn:'Put soap bits in a small bowl and mix them up.'},
        {word:'透明',pinyin:'tòu míng',en:'transparent',sentence:'那轻圆的球儿透明的。',sentenceEn:'The light, round sphere is transparent.'},
        {word:'玲珑',pinyin:'líng lóng',en:'delicate; exquisite',sentence:'玲珑娇软的小球。',sentenceEn:'A delicate, soft little sphere.'},
        {word:'骄傲',pinyin:'jiāo ào',en:'proud',sentence:'这是多么骄傲的事啊。',sentenceEn:'What a proud thing this is.'}
      ],
      footnotes: [
        {term:"\u80a5\u7682", termEn:"soap", definition:"\u3010f\u00e9i z\u00e0o\u3011soap\u3002", definitionEn:"soap"},
        {term:"\u548c\u5f04", termEn:"mix up; stir", definition:"\u3010hu\u00f2 nong\u3011mix up; stir\u3002", definitionEn:"mix up; stir"},
        {term:"\u900f\u660e", termEn:"transparent", definition:"\u3010t\u00f2u m\u00edng\u3011transparent\u3002", definitionEn:"transparent"},
        {term:"\u73b2\u73d1", termEn:"delicate; exquisite", definition:"\u3010l\u00edng l\u00f3ng\u3011delicate; exquisite\u3002", definitionEn:"delicate; exquisite"},
        {term:"\u9a84\u50b2", termEn:"proud", definition:"\u3010ji\u0101o \u00e0o\u3011proud\u3002", definitionEn:"proud"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'拟人',pointEn:'nǐ rén',example:'personification',exampleEn:'那么透明，那么圆润，那么美丽。',explanation:'So transparent, so smooth, so beautiful.',explanationEn:'把肥皂泡当作有生命的东西来描写'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文。用自己的话说说吹肥皂泡的过程。",en:"Read aloud. Describe the process of blowing soap bubbles in your own words."},
        {type:"think",cn:"课文中有一些句子不容易读懂，如\u201C五色的浮光，在那轻清透明的球面上乱转\u201D。找一找，说说这些句子的意思。",en:"Some sentences are hard to understand, like 'iridescent light swirled across the transparent surface'. Find them and explain their meanings."},
        {type:"imagine",cn:"这些轻清脆丽的小球，还有哪些美丽的去处呢？",en:"Where else might these delicate beautiful little bubbles go?"}
      ],
      teachingPoints: [
        {cn:"学习按顺序描写一个过程：准备材料→吹泡泡→观察泡泡→想象泡泡的去处。",en:"Learn to describe a process in order: prepare materials, blow bubbles, observe, imagine where they go."},
        {cn:"体会冰心优美的语言：\u201C轻清透明\u201D\u201C颤巍巍\u201D\u201C轻悠悠\u201D等叠词的表现力。",en:"Appreciate Bing Xin's beautiful language: the expressiveness of words like 'light and clear', 'trembling', 'floating softly'."},
        {cn:"理解难懂句子的方法：结合生活经验、查资料、向别人请教。",en:"Methods for understanding difficult sentences: draw on life experience, look up information, ask others."}
      ],
      parentTips: [
        {cn:"和孩子一起吹肥皂泡，亲身体验课文描写的情景。",en:"Blow soap bubbles together to experience the scenes described in the text."},
        {cn:"引导孩子积累冰心作品中的优美词句，培养语感。",en:"Help your child accumulate beautiful phrases from Bing Xin's works to develop language sense."}
      ]
    },
    {
      id: 21, title: "我不能失信", titleEn: "I Cannot Break My Promise",
      difficulty: 3,
      isSelfRead: true,
      text: [
        "一个风和日丽的早晨，宋耀如一家用过早餐，准备到一位朋友家去做客。二女儿宋庆龄特别高兴，她早就盼着到这位伯伯家去了。伯伯家养的鸽子，尖尖的嘴巴，红红的眼睛，漂亮极啦！伯伯还说准备送她一只呢！",
        "她刚走到门口，突然停住了脚步，皱起了眉头。",
        "爸爸看见了，奇怪地问：\u201C庆龄，你怎么不走啦？\u201D",
        "\u201C爸爸，我不能去了！我昨天和小珍约好了，今天她来我们家，我教她叠花篮。\u201D庆龄说。",
        "\u201C你不是一直想去伯伯家吗？改天再教小珍吧。\u201D爸爸说完，拉起庆龄的手就要走。",
        "\u201C不行！不行！我走了，小珍来了会扑空的，那多不好啊！\u201D庆龄边说边把手抽回来。",
        "\u201C那……回来你去小珍家解释一下，表示歉意，改天再教她叠花篮，好不好？\u201D妈妈在一旁说。",
        "\u201C不，妈妈。您说过，做人要信守诺言。如果我忘记了这件事，见到她时向她道歉是可以的，但我已经想起来了，就不能失信了！\u201D庆龄坚定地说。",
        "\u201C我明白了，我们的庆龄是个守信用的孩子。\u201D妈妈望着庆龄笑了笑，说，\u201C那你就留下来吧！\u201D",
        "送家里人出门后，庆龄一个人回到房间里，耐心地等候着。她一会儿拿起一本书看，一会儿又坐到琴凳上弹钢琴，平时很熟的曲子，今天却总是弹不准。可是，直到家里人吃过午饭回来，小珍也没有来。妈妈心疼地说：\u201C我的女儿一个人在家，该多没意思啊！\u201D庆龄仰起脸回答道：\u201C一个人在家，是很没劲。可是，我并不后悔，因为我没有失信。\u201D"
      ],
      textEn: [
        "On a beautiful sunny morning, the Song Yaorou family finished breakfast and prepared to visit a friend's house. Their second daughter Song Qingling was especially excited — she had been looking forward to visiting the uncle's house. His pigeons had pointed beaks and red eyes, so beautiful! The uncle had even promised to give her one!",
        "She had just reached the door when she suddenly stopped, frowning.",
        "\u201CQingling, why aren't you going?\u201D her father asked curiously.",
        "\u201CDad, I can't go! Yesterday I made plans with Xiaozhen — she's coming to our house today, and I'm teaching her to fold paper baskets,\u201D Qingling said.",
        "\u201CDidn't you always want to visit uncle's house? You can teach Xiaozhen another day,\u201D Dad said, taking her hand to leave.",
        "\u201CNo! No! If I leave and Xiaozhen comes and finds nobody home, that would be terrible!\u201D Qingling pulled her hand back.",
        "\u201CWell... you could go to Xiaozhen's house later to explain and apologize, and teach her another day, okay?\u201D Mom suggested.",
        "\u201CNo, Mom. You've said we should keep our promises. If I had forgotten about this, I could apologize when I saw her. But since I've remembered, I can't break my promise!\u201D Qingling said firmly.",
        "\u201CI understand now. Our Qingling is a child who keeps her word.\u201D Mom looked at Qingling and smiled, then said, \u201CThen you just stay home!\u201D",
        "After seeing her family off, Qingling returned to her room and waited patiently. She picked up a book for a while, then sat at the piano, but today she kept making mistakes on familiar pieces. Yet even when her family returned after lunch, Xiaozhen still hadn't come. Mom said with sympathy: \u201CMy girl home alone — how boring!\u201D Qingling looked up and answered: \u201CBeing home alone is pretty dull. But I don't regret it, because I kept my promise.\u201D"
      ],
      textPinyin: [
        "y\u00ed g\u00e8 f\u0113ng h\u00e9 r\u00ec l\u00ec de z\u01ceo ch\u00e9n\uff0c s\u00f2ng y\u00e0o r\u00fa y\u00ec ji\u0101 y\u00f2ng gu\u00f2 z\u01ceo c\u0101n\uff0c zh\u01d4n b\u00e8i d\u00e0o y\u00ed w\u00e8i p\u00e9ng y\u01d2u ji\u0101 q\u00f9 zu\u00f2 k\u00e8\u3002 \u00e8r n\u01da \u00e9r s\u00f2ng q\u00ecng l\u00edng t\u00e8 bi\u00e9 g\u0101o x\u00ecng\uff0c t\u0101 z\u01ceo ji\u00f9 p\u00e0n zhe d\u00e0o zh\u00e8 w\u00e8i b\u00f3 bo ji\u0101 q\u00f9 le\u3002 b\u00f3 bo ji\u0101 y\u01ceng de g\u0113 zi\uff0c ji\u0101n ji\u0101n de zu\u01d0 ba\uff0c h\u00f3ng h\u00f3ng de y\u01cen j\u012bng\uff0c pi\u00e0o liang j\u00ed l\u0101\uff01 b\u00f3 bo h\u00e1i shu\u014d zh\u01d4n b\u00e8i s\u00f2ng t\u0101 y\u00ec zh\u012b ne\uff01",
        "t\u0101 g\u0101ng z\u01d2u d\u00e0o m\u00e9n k\u01d2u\uff0c t\u016b r\u00e1n t\u00edng zh\u00f9 le ji\u01ceo b\u00f9\uff0c zh\u00f2u q\u01d0 le m\u00e9i t\u00f3u\u3002",
        "b\u00e0 ba k\u00e0n ji\u00e0n le\uff0c q\u00ed gu\u00e0i d\u00ec w\u00e8n\uff1a \u201c q\u00ecng l\u00edng\uff0c n\u01d0 z\u011bn me b\u00f9 z\u01d2u l\u0101\uff1f \u201d",
        "\u201c b\u00e0 ba\uff0c w\u01d2 b\u00f9 n\u00e9ng q\u00f9 le\uff01 w\u01d2 zu\u00f3 ti\u0101n h\u00e9 xi\u01ceo zh\u0113n yu\u0113 h\u01ceo le\uff0c j\u012bn ti\u0101n t\u0101 l\u00e1i w\u01d2 men ji\u0101\uff0c w\u01d2 ji\u00e0o t\u0101 di\u00e9 hu\u0101 l\u00e1n\u3002 \u201d q\u00ecng l\u00edng shu\u014d\u3002",
        "\u201c n\u01d0 b\u00fa sh\u00ec y\u00ec zh\u00ed xi\u01ceng q\u00f9 b\u00f3 bo ji\u0101 ma\uff1f g\u01cei ti\u0101n z\u00e0i ji\u00e0o xi\u01ceo zh\u0113n ba\u3002 \u201d b\u00e0 ba shu\u014d w\u00e1n\uff0c l\u0101 q\u01d0 q\u00ecng l\u00edng de sh\u01d2u ji\u00f9 y\u00e0o z\u01d2u\u3002",
        "\u201c b\u00f9 x\u00edng\uff01 b\u00f9 x\u00edng\uff01 w\u01d2 z\u01d2u le\uff0c xi\u01ceo zh\u0113n l\u00e1i le hu\u00ec p\u016b k\u014dng de\uff0c n\u00e0 du\u014d b\u00f9 h\u01ceo a\uff01 \u201d q\u00ecng l\u00edng bi\u0101n shu\u014d bi\u0101n b\u01ce sh\u01d2u ch\u014du hu\u00ed l\u00e1i\u3002",
        "\u201c n\u00e0\u2026\u2026 hu\u00ed l\u00e1i n\u01d0 q\u00f9 xi\u01ceo zh\u0113n ji\u0101 ji\u011b sh\u00ec y\u00ed xi\u00e0\uff0c bi\u01ceo sh\u00ec qi\u00e0n y\u00ec\uff0c g\u01cei ti\u0101n z\u00e0i ji\u00e0o t\u0101 di\u00e9 hu\u0101 l\u00e1n\uff0c h\u01ceo bu h\u01ceo\uff1f \u201d m\u0101 ma z\u00e0i y\u00ec p\u00e1ng shu\u014d\u3002",
        "\u201c b\u00f9\uff0c m\u0101 ma\u3002 n\u00edn shu\u014d gu\u00f2\uff0c zu\u00f2 r\u00e9n y\u00e0o x\u00ecn sh\u01d2u nu\u00f2 y\u00e1n\u3002 r\u00fa gu\u01d2 w\u01d2 w\u00e0ng j\u00ec le zh\u00e8 ji\u00e0n sh\u00ec\uff0c ji\u00e0n d\u00e0o t\u0101 sh\u00ed xi\u00e0ng t\u0101 d\u00e0o qi\u00e0n sh\u00ec k\u011b y\u01d0 de\uff0c d\u00e0n w\u01d2 y\u01d0 j\u012bng xi\u01ceng q\u01d0 l\u00e1i le\uff0c ji\u00f9 b\u00f9 n\u00e9ng sh\u012b x\u00ecn le\uff01 \u201d q\u00ecng l\u00edng ji\u0101n d\u00ecng d\u00ec shu\u014d\u3002",
        "\u201c w\u01d2 m\u00edng b\u00e1i le\uff0c w\u01d2 men de q\u00ecng l\u00edng sh\u00ec g\u00e8 sh\u01d2u x\u00ecn y\u00f2ng de h\u00e1i z\u01d0\u3002 \u201d m\u0101 ma w\u00e0ng zhe q\u00ecng l\u00edng xi\u00e0o le xi\u00e0o\uff0c shu\u014d\uff0c \u201c n\u00e0 n\u01d0 ji\u00f9 li\u00fa xi\u00e0 l\u00e1i ba\uff01 \u201d",
        "s\u00f2ng ji\u0101 l\u01d0 r\u00e9n ch\u016b m\u00e9n h\u00f2u\uff0c q\u00ecng l\u00edng y\u00ed g\u00e8 r\u00e9n hu\u00ed d\u00e0o f\u00e1ng ji\u0101n l\u01d0\uff0c n\u00e0i x\u012bn d\u00ec d\u011bng h\u00f2u zhe\u3002 t\u0101 y\u00ed hu\u00ec er n\u00e1 q\u01d0 y\u00ec b\u011bn sh\u016b k\u00e0n\uff0c y\u00ed hu\u00ec er y\u00f2u zu\u00f2 d\u00e0o q\u00edn d\u00e8ng sh\u00e0ng t\u00e1n g\u0101ng q\u00edn\uff0c p\u00edng sh\u00ed h\u011bn sh\u00fa de q\u01d4 z\u01d0\uff0c j\u012bn ti\u0101n qu\u00e8 z\u01d2ng sh\u00ec t\u00e1n b\u00f9 zh\u01d4n\u3002 k\u011b sh\u00ec\uff0c zh\u00ed d\u00e0o ji\u0101 l\u01d0 r\u00e9n ch\u012b gu\u00f2 w\u01d4 f\u00e0n hu\u00ed l\u00e1i\uff0c xi\u01ceo zh\u0113n y\u011b m\u00e9i y\u01d2u l\u00e1i\u3002 m\u0101 ma x\u012bn t\u00e9ng d\u00ec shu\u014d\uff1a \u201c w\u01d2 de n\u01da \u00e9r y\u00ed g\u00e8 r\u00e9n z\u00e0i ji\u0101\uff0c g\u0101i du\u014d m\u00e9i y\u00ec si a\uff01 \u201d q\u00ecng l\u00edng y\u01ceng q\u01d0 li\u01cen hu\u00ed d\u00e1 d\u00e0o\uff1a \u201c y\u00ed g\u00e8 r\u00e9n z\u00e0i ji\u0101\uff0c sh\u00ec h\u011bn m\u00e9i j\u00ecn\u3002 k\u011b sh\u00ec\uff0c w\u01d2 b\u00ecng b\u00f9 h\u00f2u hu\u01d0\uff0c y\u012bn w\u00e8i w\u01d2 m\u00e9i y\u01d2u sh\u012b x\u00ecn\u3002 \u201d"
      ],
      recognizeChars: ["耀","庆","盼","叠","歉"],
      vocabWords: [
        {word:'失信',pinyin:'shī xìn',en:'break a promise',sentence:'我不能失信。',sentenceEn:'I cannot break my promise.'},
        {word:'解释',pinyin:'jiě shì',en:'explain',sentence:'宋庆龄向爸爸解释。',sentenceEn:'Song Qingling explained to her father.'},
        {word:'忘记',pinyin:'wàng jì',en:'forget',sentence:'我忘记了约好的事。',sentenceEn:'I forgot the appointment.'},
        {word:'道理',pinyin:'dào lǐ',en:'principle; truth',sentence:'守信用是做人的道理。',sentenceEn:'Keeping promises is a principle of being a good person.'},
        {word:'盼望',pinyin:'pàn wàng',en:'look forward to',sentence:'小珍盼望我去教她。',sentenceEn:'Little Zhen looked forward to me teaching her.'}
      ],
      grammarPoints: [
        {point: "\u56e0\u4e3a\u2026\u2026\u6240\u4ee5\u2026\u2026", pointEn: "because...therefore...", example: "\u4e00\u4e2a\u98ce\u548c\u65e5\u4e3d\u7684\u65e9\u6668\uff0c\u5b8b\u8000\u5982\u4e00\u5bb6\u7528\u8fc7\u65e9\u9910\uff0c\u51c6\u5907\u5230\u4e00\u4f4d\u670b\u53cb\u5bb6\u53bb\u505a\u5ba2\u3002", exampleEn: "On a beautiful sunny morning, the Song Yaorou family finished breakfast and prep", explanation: "\u56e0\u679c\u590d\u53e5\uff0c\u8868\u793a\u539f\u56e0\u548c\u7ed3\u679c\u7684\u5173\u7cfb", explanationEn: "Causal compound sentence expressing cause and effect"},
        {point: "\u628a\u5b57\u53e5", pointEn: "b\u01ce-construction", example: "\u4e00\u4e2a\u98ce\u548c\u65e5\u4e3d\u7684\u65e9\u6668\uff0c\u5b8b\u8000\u5982\u4e00\u5bb6\u7528\u8fc7\u65e9\u9910\uff0c\u51c6\u5907\u5230\u4e00\u4f4d\u670b\u53cb\u5bb6\u53bb\u505a\u5ba2\u3002", exampleEn: "On a beautiful sunny morning, the Song Yaorou family finished breakfast and prep", explanation: "\u7528\u201c\u628a\u201d\u5c06\u5bbe\u8bed\u63d0\u524d\uff0c\u5f3a\u8c03\u52a8\u4f5c\u5bf9\u5bf9\u8c61\u7684\u5f71\u54cd", explanationEn: "Moves the object before the verb using \"b\u01ce\" to emphasize the effect of the action"}
      ],
      footnotes: [
        {term:"\u5931\u4fe1", termEn:"break a promise", definition:"\u3010sh\u012b x\u00ecn\u3011break a promise\u3002", definitionEn:"break a promise"},
        {term:"\u89e3\u91ca", termEn:"explain", definition:"\u3010ji\u011b sh\u00ec\u3011explain\u3002", definitionEn:"explain"},
        {term:"\u5fd8\u8bb0", termEn:"forget", definition:"\u3010w\u00e0ng j\u00ec\u3011forget\u3002", definitionEn:"forget"},
        {term:"\u9053\u7406", termEn:"principle; truth", definition:"\u3010d\u00e0o l\u01d0\u3011principle; truth\u3002", definitionEn:"principle; truth"},
        {term:"\u76fc\u671b", termEn:"look forward to", definition:"\u3010p\u00e0n w\u00e0ng\u3011look forward to\u3002", definitionEn:"look forward to"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"默读课文，联系生活实际，说说你对\u201C一个人在家，是很没劲。可是，我并不后悔，因为我没有失信\u201D这句话的理解。",en:"Read silently. Connect to real life and explain your understanding of 'Being home alone is dull, but I don't regret it because I kept my promise.'"},
        {type:"think",cn:"宋庆龄为什么不听爸爸妈妈的建议？你觉得她做得对吗？",en:"Why didn't Song Qingling take her parents' suggestions? Do you think she was right?"},
        {type:"discuss",cn:"孔子说：\u201C人而无信，不知其可也。\u201D你怎样理解这句话？",en:"Confucius said: 'A person without trustworthiness — what can be done?' How do you understand this?"}
      ],
      teachingPoints: [
        {cn:"理解\u201C守信\u201D的含义：答应别人的事就要做到，不能因为自己的利益而失信。",en:"Understand 'keeping promises': what you promise others, you must do; don't break trust for personal gain."},
        {cn:"体会宋庆龄的品格：即使牺牲了自己想做的事，也要遵守诺言。",en:"Appreciate Song Qingling's character: she honors her promise even at personal cost."},
        {cn:"这是一个真实的人物故事，宋庆龄是中国近代伟大的女性。",en:"This is a true story; Song Qingling was a great woman in modern Chinese history."}
      ],
      parentTips: [
        {cn:"借此故事和孩子讨论守信的重要性，从小培养诚信品质。",en:"Use this story to discuss the importance of keeping promises and cultivate integrity from a young age."},
        {cn:"和孩子分享生活中守信或失信的例子，帮助理解课文主题。",en:"Share real-life examples of keeping or breaking promises to understand the theme."}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"见善则迁，有过则改。——《周易》\n过而不改，是谓过矣。——《论语》\n人谁无过？过而能改，善莫大焉。——《左传》",en:"When you see good, aspire to it; when you have faults, correct them. — Book of Changes\nTo err and not correct is truly an error. — Analects\nWho among people has no faults? To err and correct is the greatest good. — Zuo Zhuan"}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"读一读，说说两组加点词语意思的不同（\u201C熟\u201D\u201C味道\u201D的不同含义）。下面的例句围绕一个意思来写，选一个开头照样子写一写。",en:"Read and discuss different meanings of highlighted words ('cooked/familiar', 'taste/style'). The example sentences develop one central idea; choose an opening and write similarly."}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"身边那些有特点的人——你还想到了哪些有特点的人？如\u201C热心肠\u201D\u201C昆虫迷\u201D\u201C小书虫\u201D。围绕一个人的特点写一写。",en:"People with Distinctive Traits — Think of people with notable characteristics, like 'warm-hearted', 'insect fanatic', 'bookworm'. Write about one person's distinctive trait."},modelEssays:[
      {title:"热心肠的王阿姨",titleEn:"Warm-Hearted Auntie Wang",level:"基础",
      structure:[
        {cn:"开头：介绍人物和他的特点",en:"Opening: Introduce the person and their trait"},
        {cn:"中间：用一个事例表现特点",en:"Body: Show the trait through one example"},
        {cn:"结尾：表达对这个人的看法",en:"Ending: Express your opinion of the person"}
      ],
      cn:"我家隔壁住着一位王阿姨，大家都说她是个\u201C热心肠\u201D。\n有一次，楼下的李奶奶生病了，不能出门买菜。王阿姨知道后，每天早上都帮李奶奶买好新鲜的蔬菜和水果，送到她家门口。她还经常帮李奶奶打扫卫生、倒垃圾。李奶奶感动地说：\u201C小王啊，你比我亲闺女还好！\u201D王阿姨笑着说：\u201C都是邻居，应该的。\u201D\n不只是对李奶奶，谁家有困难，王阿姨都会主动帮忙。大家都喜欢她，我也要向她学习，做一个热心的人。",
      en:"Next door to us lives Auntie Wang. Everyone says she\u2019s truly \u201Cwarm-hearted.\u201D\nOnce, Granny Li downstairs got sick and couldn\u2019t go out to buy groceries. When Auntie Wang found out, she bought fresh vegetables and fruit for Granny Li every morning and delivered them to her door. She also often helped sweep and take out the trash. Granny Li said gratefully, \u201CXiao Wang, you\u2019re better than my own daughter!\u201D Auntie Wang just smiled and said, \u201CWe\u2019re neighbors \u2014 it\u2019s only natural.\u201D\nIt\u2019s not just Granny Li \u2014 whenever anyone has trouble, Auntie Wang volunteers to help. Everyone likes her, and I want to learn from her and become a warm-hearted person too.",
      notes:"这篇范文围绕\u201C热心肠\u201D这一个特点来写，事例具体。用了语言描写（李奶奶和王阿姨的对话），让人物更立体。结尾从他人写到自己，有真情实感。",
      notesEn:"This essay focuses on one trait — warm-heartedness — with a concrete example. Dialogue between Granny Li and Auntie Wang brings the characters to life. The ending connects from others to oneself, showing genuine feeling."},
      {title:"我们班的\u201C昆虫迷\u201D",titleEn:"Our Class's Insect Fanatic",level:"提高",
      structure:[
        {cn:"开头：用绰号引出人物",en:"Opening: Introduce the person through their nickname"},
        {cn:"中间：两个具体事例表现特点",en:"Body: Show the trait through two specific examples"},
        {cn:"结尾：写这个人对自己的影响",en:"Ending: Describe this person's influence on you"}
      ],
      cn:"我们班有个同学叫李小明，大家都叫他\u201C昆虫迷\u201D。为什么呢？因为他对昆虫简直着了迷。\n每次下课，别的同学都跑去操场玩，可是李小明总是蹲在花坛边，目不转睛地盯着地上看。有一次，我好奇地走过去问他在干什么。他兴奋地拉着我说：\u201C你快看！这只蚂蚁正在搬一块面包渣，它的力气可大了，能搬比自己重好几倍的东西！\u201D他的眼睛亮亮的，说起昆虫来滔滔不绝，就像一个小老师。\n还有一次春游，大家都在草地上吃零食，他却追着一只蝴蝶跑了好远。回来的时候，他拿出自己的\u201C昆虫观察本\u201D，上面画满了各种各样的昆虫，旁边还写着名字、特点和发现日期。老师看了都忍不住竖起了大拇指。\n李小明的\u201C昆虫观察本\u201D让我也对大自然产生了兴趣。现在，我也开始留意身边的小虫子了。",
      en:"In our class there\u2019s a boy named Li Xiaoming. Everyone calls him the \u201Cinsect fanatic.\u201D Why? Because he\u2019s absolutely obsessed with insects.\nEvery recess, while other classmates run off to the playground, Li Xiaoming squats by the flower bed, staring intently at the ground. Once I went over curiously and asked what he was doing. He grabbed my arm excitedly: \u201CLook! This ant is carrying a bread crumb. It\u2019s incredibly strong \u2014 it can carry things many times its own weight!\u201D His eyes sparkled, and once he started talking about insects, he went on and on, just like a little teacher.\nAnother time during a spring outing, everyone was snacking on the grass, but he chased a butterfly far away. When he came back, he pulled out his \u201CInsect Observation Notebook\u201D filled with drawings of all kinds of insects, with names, features, and discovery dates written beside each one. Even the teacher couldn\u2019t help giving him a thumbs-up.\nLi Xiaoming\u2019s insect notebook sparked my own interest in nature. Now I\u2019ve started paying attention to the little creatures around me too.",
      notes:"这篇范文用两个具体事例围绕\u201C昆虫迷\u201D这个特点来写。第一个事例有对话描写，第二个事例有细节描写（昆虫观察本）。用对比手法（别人玩/他看昆虫，别人吃零食/他追蝴蝶），特点更突出。结尾写对\u201C我\u201D的影响，有深度。",
      notesEn:"This essay uses two concrete examples centered on the 'insect fanatic' trait. The first includes dialogue, the second has detail (the observation notebook). Contrast (others play / he watches insects) highlights the trait. The ending about influence on 'me' adds depth."},
      {title:"爱\u201C管闲事\u201D的奶奶",titleEn:"Grandma the 'Busybody'",level:"拓展",
      structure:[
        {cn:"开头：先抑后扬，先写觉得奶奶爱管闲事",en:"Opening: Start with a negative view — Grandma as a busybody"},
        {cn:"中间：写几个\u201C管闲事\u201D的事例",en:"Body: Describe several 'busybody' incidents"},
        {cn:"转折：一件事让\u201C我\u201D改变了看法",en:"Turning point: One event changes your view"},
        {cn:"结尾：点出\u201C管闲事\u201D背后是热心和善良",en:"Ending: Reveal that 'busybody' means warmth and kindness"}
      ],
      cn:"我奶奶特别爱\u201C管闲事\u201D，我以前可烦她了。\n每天早上，她站在小区门口，看到谁家的小朋友衣服穿少了，就大声喊：\u201C多穿件衣服，别感冒了！\u201D看到有人乱扔垃圾，她就追上去说：\u201C垃圾桶在那边呢！\u201D连隔壁邻居吵架了，她也要跑过去劝和。我觉得她多管闲事，偷偷跟妈妈说：\u201C奶奶好烦啊，别人的事她干嘛要管？\u201D\n可是有一天，放学回家的路上下起了大雨。我没带伞，在学校门口急得团团转。这时候，一个声音传来：\u201C小朋友，没带伞吧？用奶奶的！\u201D回头一看，是一个不认识的老奶奶。她把自己唯一的伞塞给了我，自己顶着雨快步走了。我愣住了，心里热热的。\n回到家，我把这件事告诉了奶奶。奶奶笑了：\u201C你看，这不就是\u2018管闲事\u2019嘛！要是大家都不管别人，这个世界多冷啊。\u201D\n那一刻，我终于明白了：奶奶的\u201C管闲事\u201D，其实就是心里装着别人。她不是爱管闲事，她是善良。我要向奶奶学习，做一个心里有别人的人。\n现在，每当有人说\u201C你奶奶真爱管闲事\u201D，我都会骄傲地说：\u201C对啊，我奶奶就是这样好！\u201D",
      en:"My grandma loved to \u201Cmeddle in other people\u2019s business.\u201D I used to find her so annoying.\nEvery morning she stood at the neighborhood gate. If she saw a child wearing too little, she\u2019d call out, \u201CPut on more clothes! Don\u2019t catch a cold!\u201D If someone littered, she\u2019d chase after them: \u201CThe trash bin is right over there!\u201D Even when neighbors argued, she\u2019d rush over to make peace. I thought she was being nosy and whispered to Mom, \u201CGrandma is so annoying. Why does she have to meddle?\u201D\nBut one day, it started pouring on my way home from school. I had no umbrella and was anxiously pacing at the school gate. Then a voice came: \u201CChild, no umbrella? Take Grandma\u2019s!\u201D I turned to see an elderly lady I didn\u2019t know. She pressed her only umbrella into my hands and hurried off in the rain. I stood frozen, my heart warm.\nBack home, I told Grandma the story. She smiled: \u201CSee? That\u2019s \u2018meddling\u2019! If nobody cared about others, how cold the world would be.\u201D\nAt that moment, I finally understood: Grandma\u2019s \u201Cmeddling\u201D meant she carried others in her heart. She wasn\u2019t nosy \u2014 she was kind. I want to learn from Grandma and become a person who thinks of others.\nNow, whenever someone says, \u201CYour grandma sure loves to meddle,\u201D I proudly reply, \u201CYes! That\u2019s what makes her wonderful!\u201D",
      notes:"这篇范文采用\u201C先抑后扬\u201D的手法，先写对奶奶\u201C管闲事\u201D的不理解，再通过陌生老奶奶送伞的事转变看法，最后点明\u201C管闲事\u201D就是善良。结构巧妙，转折自然。用了多处语言描写，人物性格鲜明。\u201C心里装着别人\u201D这个总结非常到位。首尾呼应（从\u201C烦\u201D到\u201C骄傲\u201D），体现了情感变化的完整弧线。",
      notesEn:"This essay uses the 'start low, end high' technique — first showing misunderstanding of Grandma's meddling, then a stranger's umbrella shifts the perspective, and finally revealing that 'meddling' is kindness. The structure is clever with natural transitions. Multiple dialogue lines make characters vivid. The summary 'carrying others in her heart' is spot-on. The contrast from 'annoyed' to 'proud' shows a complete emotional arc."}
    ]}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 7 — 奇妙的世界 Wonderful World (22-24) */
/* ═══════════════════════════════════════════ */
{
  id: 7, title: "奇妙的世界", titleEn: "Our Wonderful World",
  difficulty: 3,
  type: "kewen",
  lessons: [
    {
      id: 22, title: "我们奇妙的世界", titleEn: "Our Wonderful World",
      difficulty: 3,
      text: [
        "这是一个奇妙的世界，一切看上去都是有生命的。",
        "你看天空的珍藏——",
        "清晨，太阳升起，带来新的一天。开始，天空呈粉红色，慢慢地变成了蔚蓝色，太阳就像一个大火球一样升起来了。",
        "有时，云彩在蓝色的天空中飞行，如同经过雕饰一样，呈现出各种奇妙的形状，告诉我们许多奇妙的故事……",
        "当云彩变得又黑又重时，雨点就会噼噼啪啪地降落到大地上。",
        "雨后，我们会看到地上有许多水洼，就像有趣的镜子，映射着我们的脸。",
        "一天结束了，落日的余晖不时变幻着颜色，好像有谁在天空涂上了金色、红色和紫色。",
        "黑夜降临了，我们看见夜空中群星闪烁，就像千千万万支极小的蜡烛在发光。",
        "再看大地的珍藏——",
        "我们能看到植物生长的奇迹——极小的一粒种子种到地里，生根，发芽，不久就开花了，花很漂亮。",
        "我们能看到各种颜色诱人的水果，圆润的鲜红色的樱桃，深紫色的李子，浅黄色的梨。",
        "夏日，在大树下乘凉，我们会感叹，大树带来这么多绿荫。",
        "秋天带着金黄色的光辉神奇地到来了，那时，道路上好像洒满了光芒。蝴蝶张开漂亮的翅膀在空中翩翩起舞。",
        "冬天，我们看到了房檐上垂下的冰柱，它们好像一把把锋利的刀剑在阳光下闪耀。等到积雪融化时，从房檐上落下的小水滴，就像一颗颗珍珠。",
        "只要我们仔细地观察，寻找，就能从极普通的事物中找到美——各种形状的卵石，三桅小船的模型，颜色各异的羽毛。",
        "是的，世界上存在的奇妙的事物是无穷的，只要我们去寻找。"
      ],
      textEn: [
        "This is a wonderful world — everything seems to be alive.",
        "Look at the sky's treasures —",
        "At dawn, the sun rises, bringing a new day. At first, the sky turns pink, then gradually becomes azure blue, and the sun rises like a great fireball.",
        "Sometimes clouds sail across the blue sky, carved into all kinds of wonderful shapes as if decorated, telling us many wonderful stories...",
        "When clouds turn dark and heavy, raindrops patter down onto the earth.",
        "After rain, we see many puddles on the ground, like fun mirrors reflecting our faces.",
        "As the day ends, the sunset's glow constantly changes color, as if someone painted gold, red, and purple across the sky.",
        "Night falls, and we see stars twinkling in the night sky, like thousands upon thousands of tiny candles glowing.",
        "Now look at the earth's treasures —",
        "We can see the miracle of plant growth — a tiny seed planted in the ground takes root, sprouts, and soon blooms beautifully.",
        "We can see fruits in all kinds of tempting colors: round, smooth, bright red cherries, deep purple plums, and pale yellow pears.",
        "In summer, resting under a big tree, we marvel at how much shade it provides.",
        "Autumn arrives magically with golden radiance, when roads seem bathed in light. Butterflies spread their beautiful wings and dance gracefully in the air.",
        "In winter, we see icicles hanging down from the eaves. They look like sharp swords, one after another, glittering in the sunlight. When the accumulated snow melts, the little water drops that fall from the eaves are just like pearls, one by one.",
        "If we observe and search carefully, we can find beauty in the most ordinary things — pebbles of all shapes, a model three-masted ship, feathers of every color.",
        "Yes, the wonderful things in this world are endless, if only we look for them."
      ],
      textPinyin: [
        "zh\u00e8 sh\u00ec y\u00ed g\u00e8 q\u00ed mi\u00e0o de sh\u00ec ji\u00e8\uff0c y\u00ed qi\u00e8 k\u00e0n sh\u00e0ng q\u00f9 d\u014du sh\u00ec y\u01d2u sh\u0113ng m\u00ecng de\u3002",
        "n\u01d0 k\u00e0n ti\u0101n k\u014dng de zh\u0113n c\u00e1ng\u2014\u2014",
        "q\u012bng ch\u00e9n\uff0c t\u00e0i y\u00e1ng sh\u0113ng q\u01d0\uff0c d\u00e0i l\u00e1i x\u012bn de y\u00ec ti\u0101n\u3002 k\u0101i sh\u01d0\uff0c ti\u0101n k\u014dng ch\u00e9ng f\u011bn h\u00f3ng s\u00e8\uff0c m\u00e0n m\u00e0n d\u00ec bi\u00e0n ch\u00e9ng le w\u00e8i l\u00e1n s\u00e8\uff0c t\u00e0i y\u00e1ng ji\u00f9 xi\u00e0ng y\u00ed g\u00e8 d\u00e0 hu\u01d2 qi\u00fa y\u00ed y\u00e0ng sh\u0113ng q\u01d0 l\u00e1i le\u3002",
        "y\u01d2u sh\u00ed\uff0c y\u00fan c\u01cei z\u00e0i l\u00e1n s\u00e8 de ti\u0101n k\u014dng zh\u014dng f\u0113i x\u00edng\uff0c r\u00fa t\u00f3ng j\u012bng gu\u00f2 di\u0101o sh\u00ec y\u00ed y\u00e0ng\uff0c ch\u00e9ng xi\u00e0n ch\u016b g\u00e8 zh\u01d2ng q\u00ed mi\u00e0o de x\u00edng zhu\u00e0ng\uff0c g\u00e0o s\u00f9 w\u01d2 men x\u01d4 du\u014d q\u00ed mi\u00e0o de g\u00f9 sh\u00ec\u2026\u2026",
        "d\u0101ng y\u00fan c\u01cei bi\u00e0n de y\u00f2u h\u0113i y\u00f2u zh\u00f2ng sh\u00ed\uff0c y\u01d4 di\u01cen ji\u00f9 hu\u00ec p\u012b p\u012b p\u0101 p\u0101 d\u00ec ji\u00e0ng lu\u00f2 d\u00e0o d\u00e0 d\u00ec sh\u00e0ng\u3002",
        "y\u01d4 h\u00f2u\uff0c w\u01d2 men hu\u00ec k\u00e0n d\u00e0o d\u00ec sh\u00e0ng y\u01d2u x\u01d4 du\u014d shu\u01d0 w\u0101\uff0c ji\u00f9 xi\u00e0ng y\u01d2u q\u00f9 de j\u00ecng zi\uff0c y\u00ecng sh\u00e8 zhe w\u01d2 men de li\u01cen\u3002",
        "y\u00ec ti\u0101n ji\u00e9 sh\u00f9 le\uff0c lu\u00f2 r\u00ec de y\u00fa hu\u012b b\u00f9 sh\u00ed bi\u00e0n hu\u00e0n zhe y\u00e1n s\u00e8\uff0c h\u01ceo xi\u00e0ng y\u01d2u shu\u00ed z\u00e0i ti\u0101n k\u014dng t\u00fa sh\u00e0ng le j\u012bn s\u00e8\u3001 h\u00f3ng s\u00e8 h\u00e9 z\u01d0 s\u00e8\u3002",
        "h\u0113i y\u00e8 ji\u00e0ng l\u00edn le\uff0c w\u01d2 men k\u00e0n ji\u00e0n y\u00e8 k\u014dng zh\u014dng q\u00fan x\u012bng sh\u01cen shu\u00f2\uff0c ji\u00f9 xi\u00e0ng qi\u0101n qi\u0101n w\u00e0n w\u00e0n zh\u012b j\u00ed xi\u01ceo de l\u00e0 zh\u00fa z\u00e0i f\u0101 gu\u0101ng\u3002",
        "z\u00e0i k\u00e0n d\u00e0 d\u00ec de zh\u0113n c\u00e1ng\u2014\u2014",
        "w\u01d2 men n\u00e9ng k\u00e0n d\u00e0o zh\u00ed w\u00f9 sh\u0113ng zh\u01ceng de q\u00ed j\u00ec\u2014\u2014 j\u00ed xi\u01ceo de y\u00ed l\u00ec zh\u01d2ng zi zh\u01d2ng d\u00e0o d\u00ec l\u01d0\uff0c sh\u0113ng g\u0113n\uff0c f\u0101 y\u00e1\uff0c b\u00f9 ji\u01d4 ji\u00f9 k\u0101i hu\u0101 le\uff0c hu\u0101 h\u011bn pi\u00e0o liang\u3002",
        "w\u01d2 men n\u00e9ng k\u00e0n d\u00e0o g\u00e8 zh\u01d2ng y\u00e1n s\u00e8 y\u00f2u r\u00e9n de shu\u01d0 gu\u01d2\uff0c yu\u00e1n r\u00f9n de xi\u0101n h\u00f3ng s\u00e8 de y\u012bng t\u00e1o\uff0c sh\u0113n z\u01d0 s\u00e8 de l\u01d0 z\u01d0\uff0c qi\u01cen hu\u00e1ng s\u00e8 de l\u00ed\u3002",
        "xi\u00e0 r\u00ec\uff0c z\u00e0i d\u00e0 sh\u00f9 xi\u00e0 ch\u00e9ng li\u00e1ng\uff0c w\u01d2 men hu\u00ec g\u01cen t\u00e0n\uff0c d\u00e0 sh\u00f9 d\u00e0i l\u00e1i zh\u00e8 me du\u014d l\u01dc y\u012bn\u3002",
        "qi\u016b ti\u0101n d\u00e0i zhe j\u012bn hu\u00e1ng s\u00e8 de gu\u0101ng hu\u012b sh\u00e9n q\u00ed d\u00ec d\u00e0o l\u00e1i le\uff0c n\u00e0 sh\u00ed\uff0c d\u00e0o l\u00f9 sh\u00e0ng h\u01ceo xi\u00e0ng s\u01ce m\u01cen le gu\u0101ng m\u00e1ng\u3002 h\u00fa di\u00e9 zh\u0101ng k\u0101i pi\u00e0o liang de ch\u00ec b\u01ceng z\u00e0i k\u014dng zh\u014dng pi\u0101n pi\u0101n q\u01d0 w\u01d4\u3002",
        "d\u014dng ti\u0101n\uff0c w\u01d2 men k\u00e0n d\u00e0o le f\u00e1ng y\u00e1n sh\u00e0ng chu\u00ed xi\u00e0 de b\u012bng zh\u00f9\uff0c t\u0101 men h\u01ceo xi\u00e0ng y\u00ec b\u01ce b\u01ce f\u0113ng l\u00ec de d\u0101o ji\u00e0n z\u00e0i y\u00e1ng gu\u0101ng xi\u00e0 sh\u01cen y\u00e0o\u3002 d\u011bng d\u00e0o j\u012b xu\u011b r\u00f3ng hu\u00e0 sh\u00ed\uff0c c\u00f3ng f\u00e1ng y\u00e1n sh\u00e0ng lu\u00f2 xi\u00e0 de xi\u01ceo shu\u01d0 d\u012b\uff0c ji\u00f9 xi\u00e0ng y\u00ec k\u0113 k\u0113 zh\u0113n zh\u016b\u3002",
        "zh\u01d0 y\u00e0o w\u01d2 men z\u01cei x\u00ec d\u00ec gu\u0101n ch\u00e1\uff0c x\u00fan zh\u01ceo\uff0c ji\u00f9 n\u00e9ng c\u00f3ng j\u00ed p\u01d4 t\u014dng de sh\u00ec w\u00f9 zh\u014dng zh\u01ceo d\u00e0o m\u011bi\u2014\u2014 g\u00e8 zh\u01d2ng x\u00edng zhu\u00e0ng de lu\u01cen sh\u00ed\uff0c s\u0101n w\u00e9i xi\u01ceo chu\u00e1n de m\u00f3 x\u00edng\uff0c y\u00e1n s\u00e8 g\u00e8 y\u00ec de y\u01d4 m\u00e1o\u3002",
        "sh\u00ec de\uff0c sh\u00ec ji\u00e8 sh\u00e0ng c\u00fan z\u00e0i de q\u00ed mi\u00e0o de sh\u00ec w\u00f9 sh\u00ec w\u00fa qi\u00f3ng de\uff0c zh\u01d0 y\u00e0o w\u01d2 men q\u00f9 x\u00fan zh\u01ceo\u3002"
      ],
      recognizeChars: ["呈","蔚","雕","幻","辉","芒","劲","剑","型"],
      writeChars: ["呈","幻","诱","润","芒","冰","剑","普","通","模","型"],
      vocabWords: [
        {word:'奇妙',pinyin:'qí miào',en:'wonderful; marvelous',sentence:'这是一个奇妙的世界。',sentenceEn:'This is a wonderful world.'},
        {word:'光芒',pinyin:'guāng máng',en:'radiance',sentence:'日出时天空布满光芒。',sentenceEn:'The sky is filled with radiance at sunrise.'},
        {word:'雕饰',pinyin:'diāo shì',en:'carve; adorn',sentence:'冬天雪花雕饰了窗户。',sentenceEn:'In winter, snowflakes adorn the windows.'},
        {word:'呈现',pinyin:'chéng xiàn',en:'display; present',sentence:'大自然呈现出各种色彩。',sentenceEn:'Nature displays all kinds of colors.'},
        {word:'模型',pinyin:'mó xíng',en:'model; shape',sentence:'水洼里的落叶像模型。',sentenceEn:'Fallen leaves in puddles look like models.'}
      ],
      footnotes: [
        {term:"\u5947\u5999", termEn:"wonderful; marvelous", definition:"\u3010q\u00ed mi\u00e0o\u3011wonderful; marvelous\u3002", definitionEn:"wonderful; marvelous"},
        {term:"\u5149\u8292", termEn:"radiance", definition:"\u3010gu\u0101ng m\u00e1ng\u3011radiance\u3002", definitionEn:"radiance"},
        {term:"\u96d5\u9970", termEn:"carve; adorn", definition:"\u3010di\u0101o sh\u00ec\u3011carve; adorn\u3002", definitionEn:"carve; adorn"},
        {term:"\u5448\u73b0", termEn:"display; present", definition:"\u3010ch\u00e9ng xi\u00e0n\u3011display; present\u3002", definitionEn:"display; present"},
        {term:"\u6a21\u578b", termEn:"model; shape", definition:"\u3010m\u00f3 x\u00edng\u3011model; shape\u3002", definitionEn:"model; shape"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'总分总结构',pointEn:'zǒng-fēn-zǒng',example:'general-specific-general',exampleEn:'天空是一个奇妙的世界。……大地也是。……只要你留心观察。',explanation:'The sky is a wonderful world...So is the earth...As long as you observe carefully.',explanationEn:'先总写奇妙，再分写天空和大地，最后总结'}
      ],
      exercises: [
        {type:"read",cn:"有感情地朗读课文。说说课文分别从哪几个方面写了天空和大地。",en:"Read with feeling. Describe from which aspects the text portrays the sky and the earth."},
        {type:"think",cn:"结合生活经验，说说你对\u201C一切看上去都是有生命的\u201D这句话的理解。",en:"Using life experience, explain your understanding of 'everything seems to be alive'."},
        {type:"write",cn:"小练笔：读一读描写普通而又美的事物的句子，你也来写一写吧。",en:"Mini writing: Read sentences describing ordinary but beautiful things, then write your own."}
      ],
      teachingPoints: [
        {cn:"课文分\u201C天空的珍藏\u201D和\u201C大地的珍藏\u201D两部分，从多个方面写出世界的奇妙。",en:"The text is divided into 'sky's treasures' and 'earth's treasures', describing the world's wonders from multiple angles."},
        {cn:"学习从几个方面把事物写清楚的方法。",en:"Learn to describe things clearly from several aspects."},
        {cn:"体会比喻的生动：\u201C就像千千万万支极小的蜡烛\u201D\u201C好像一把把锋利的刀剑\u201D。",en:"Appreciate vivid similes: 'like thousands of tiny candles', 'like sharp swords'."}
      ],
      parentTips: [
        {cn:"带孩子观察身边的自然现象，发现平凡事物中的美。",en:"Take your child to observe nature around them and find beauty in ordinary things."},
        {cn:"鼓励孩子用比喻写观察到的事物，如\u201C雨后的水洼像镜子\u201D。",en:"Encourage your child to use similes for things they observe, like 'puddles after rain are like mirrors'."}
      ]
    },
    {
      id: 23, title: "海底世界", titleEn: "The Undersea World",
      difficulty: 3,
      text: [
        "你可知道，大海的深处是怎样的？",
        "海面上波涛澎湃的时候，海底依然很宁静。最大的风浪，也只能影响到海面以下几十米深。阳光很难射进深海，水越深光线越暗，五百米以下就全黑了。在这一片黑暗的深海里，却有许多光点像闪烁的星星，那是有发光器官的深水鱼在游动。",
        "海底是否没有一点儿声音呢？不是的。海底的动物常常在窃窃私语。你用水中听音器一听，就能听见各种声音：有的像蜜蜂一样嗡嗡，有的像小鸟一样啾啾，有的像小狗一样汪汪，还有的好像在打鼾……它们吃东西的时候发出一种声音，行进的时候发出另一种声音，遇到危险还会发出警报。",
        "海里的动物，各有各的活动方法。海参靠肌肉伸缩爬行，每小时只能前进四米。有一种鱼身体像梭子，每小时能游几十千米，攻击其他动物的时候，比普通的火车还快。乌贼和章鱼能突然向前方喷水，利用水的反推力迅速后退。还有些贝类自己不动，却能巴在轮船底下作免费的长途旅行。",
        "海底的植物差异也很大。它们的色彩多种多样，有褐色的，有紫色的，还有红色的。最大的海藻长达二三百米。最小的单细胞海藻，要用显微镜才能看清楚。",
        "海底蕴藏着丰富的煤、铁、石油和天然气，还有陆地上储量很少的稀有金属。",
        "海底真是个景色奇异、物产丰富的世界。"
      ],
      textEn: [
        "Do you know what the depths of the ocean are like?",
        "When the sea surface is churning with waves, the ocean floor remains calm. Even the biggest storms only affect a few dozen meters below the surface. Sunlight barely reaches the deep sea — the deeper you go, the darker it gets; below 500 meters, it's completely dark. Yet in this dark deep sea, many light spots twinkle like stars — those are deep-sea fish with bioluminescent organs swimming about.",
        "Is the ocean floor completely silent? No. Sea creatures are often whispering to each other. Listen with an underwater microphone and you'll hear all kinds of sounds: some hum like bees, some chirp like birds, some bark like dogs, and some even seem to snore... They make one sound when eating, another when moving, and alarm sounds when in danger.",
        "Sea animals all have their own ways of moving. Sea cucumbers crawl by muscle contractions, advancing only four meters per hour. One type of shuttle-shaped fish can swim tens of kilometers per hour, faster than a regular train when attacking. Squid and octopuses can suddenly shoot water forward, using the reaction force to retreat rapidly. Some shellfish don't move themselves but cling to ship bottoms for free long-distance travel.",
        "Undersea plants also vary greatly. They come in many colors — brown, purple, and red. The largest seaweed can grow up to two or three hundred meters. The smallest single-celled algae can only be seen under a microscope.",
        "The ocean floor holds abundant coal, iron, petroleum, and natural gas, as well as rare metals scarce on land.",
        "The ocean floor is truly a world of wondrous scenery and abundant resources."
      ],
      textPinyin: [
        "n\u01d0 k\u011b zh\u012b d\u00e0o\uff0c d\u00e0 h\u01cei de sh\u0113n ch\u00f9 sh\u00ec z\u011bn y\u00e0ng de\uff1f",
        "h\u01cei mi\u00e0n sh\u00e0ng b\u014d t\u0101o p\u00e9ng p\u00e0i de sh\u00ed h\u00f2u\uff0c h\u01cei d\u01d0 y\u012b r\u00e1n h\u011bn n\u00edng j\u00ecng\u3002 zu\u00ec d\u00e0 de f\u0113ng l\u00e0ng\uff0c y\u011b zh\u01d0 n\u00e9ng y\u01d0ng xi\u01ceng d\u00e0o h\u01cei mi\u00e0n y\u01d0 xi\u00e0 j\u01d0 sh\u00ed m\u01d0 sh\u0113n\u3002 y\u00e1ng gu\u0101ng h\u011bn n\u00e1n sh\u00e8 j\u00ecn sh\u0113n h\u01cei\uff0c shu\u01d0 yu\u00e8 sh\u0113n gu\u0101ng xi\u00e0n yu\u00e8 \u00e0n\uff0c w\u01d4 b\u01cei m\u01d0 y\u01d0 xi\u00e0 ji\u00f9 qu\u00e1n h\u0113i le\u3002 z\u00e0i zh\u00e8 y\u00ed pi\u00e0n h\u0113i \u00e0n de sh\u0113n h\u01cei l\u01d0\uff0c qu\u00e8 y\u01d2u x\u01d4 du\u014d gu\u0101ng di\u01cen xi\u00e0ng sh\u01cen shu\u00f2 de x\u012bng x\u012bng\uff0c n\u00e0 sh\u00ec y\u01d2u f\u0101 gu\u0101ng q\u00ec gu\u0101n de sh\u0113n shu\u01d0 y\u00fa z\u00e0i y\u00f3u d\u00f2ng\u3002",
        "h\u01cei d\u01d0 sh\u00ec f\u01d2u m\u00e9i y\u01d2u y\u00ec di\u01cen \u00e9r sh\u0113ng y\u012bn ne\uff1f b\u00fa sh\u00ec de\u3002 h\u01cei d\u01d0 de d\u00f2ng w\u00f9 ch\u00e1ng ch\u00e1ng z\u00e0i qi\u00e8 qi\u00e8 s\u012b y\u01d4\u3002 n\u01d0 y\u00f2ng shu\u01d0 zh\u014dng t\u012bng y\u012bn q\u00ec y\u00ec t\u012bng\uff0c ji\u00f9 n\u00e9ng t\u012bng ji\u00e0n g\u00e8 zh\u01d2ng sh\u0113ng y\u012bn\uff1a y\u01d2u de xi\u00e0ng m\u00ec f\u0113ng y\u00ed y\u00e0ng w\u0113ng w\u0113ng\uff0c y\u01d2u de xi\u00e0ng xi\u01ceo ni\u01ceo y\u00ed y\u00e0ng ji\u016b ji\u016b\uff0c y\u01d2u de xi\u00e0ng xi\u01ceo g\u01d2u y\u00ed y\u00e0ng w\u0101ng w\u0101ng\uff0c h\u00e1i y\u01d2u de h\u01ceo xi\u00e0ng z\u00e0i d\u01ce h\u0101n\u2026\u2026 t\u0101 men ch\u012b d\u014dng x\u012b de sh\u00ed h\u00f2u f\u0101 ch\u016b y\u00ec zh\u01d2ng sh\u0113ng y\u012bn\uff0c x\u00edng j\u00ecn de sh\u00ed h\u00f2u f\u0101 ch\u016b l\u00ecng y\u00ec zh\u01d2ng sh\u0113ng y\u012bn\uff0c y\u00f9 d\u00e0o w\u0113i xi\u01cen h\u00e1i hu\u00ec f\u0101 ch\u016b j\u01d0ng b\u00e0o\u3002",
        "h\u01cei l\u01d0 de d\u00f2ng w\u00f9\uff0c g\u00e8 y\u01d2u g\u00e8 de hu\u00f3 d\u00f2ng f\u0101ng f\u01ce\u3002 h\u01cei sh\u0113n k\u00e0o j\u012b r\u00f2u sh\u0113n su\u014d p\u00e1 x\u00edng\uff0c m\u011bi xi\u01ceo sh\u00ed zh\u01d0 n\u00e9ng qi\u00e1n j\u00ecn s\u00ec m\u01d0\u3002 y\u01d2u y\u00ec zh\u01d2ng y\u00fa sh\u0113n t\u01d0 xi\u00e0ng su\u014d z\u01d0\uff0c m\u011bi xi\u01ceo sh\u00ed n\u00e9ng y\u00f3u j\u01d0 sh\u00ed qi\u0101n m\u01d0\uff0c g\u014dng j\u012b q\u00ed t\u0101 d\u00f2ng w\u00f9 de sh\u00ed h\u00f2u\uff0c b\u01d0 p\u01d4 t\u014dng de hu\u01d2 ch\u0113 h\u00e1i ku\u00e0i\u3002 w\u016b z\u00e9i h\u00e9 zh\u0101ng y\u00fa n\u00e9ng t\u016b r\u00e1n xi\u00e0ng qi\u00e1n f\u0101ng p\u0113n shu\u01d0\uff0c l\u00ec y\u00f2ng shu\u01d0 de f\u01cen tu\u012b l\u00ec x\u00f9n s\u00f9 h\u00f2u tu\u00ec\u3002 h\u00e1i y\u01d2u xi\u0113 b\u00e8i l\u00e8i z\u00ec j\u01d0 b\u00fa d\u00f2ng\uff0c qu\u00e8 n\u00e9ng b\u0101 z\u00e0i l\u00fan chu\u00e1n d\u01d0 xi\u00e0 zu\u00f2 mi\u01cen f\u00e8i de ch\u00e1ng t\u00fa l\u01da x\u00edng\u3002",
        "h\u01cei d\u01d0 de zh\u00ed w\u00f9 ch\u0101 y\u00ec y\u011b h\u011bn d\u00e0\u3002 t\u0101 men de s\u00e8 c\u01cei du\u014d zh\u01d2ng du\u014d y\u00e0ng\uff0c y\u01d2u h\u00e8 s\u00e8 de\uff0c y\u01d2u z\u01d0 s\u00e8 de\uff0c h\u00e1i y\u01d2u h\u00f3ng s\u00e8 de\u3002 zu\u00ec d\u00e0 de h\u01cei z\u01ceo ch\u00e1ng d\u00e1 \u00e8r s\u0101n b\u01cei m\u01d0\u3002 zu\u00ec xi\u01ceo de d\u0101n x\u00ec b\u0101o h\u01cei z\u01ceo\uff0c y\u00e0o y\u00f2ng xi\u01cen w\u0113i j\u00ecng c\u00e1i n\u00e9ng k\u00e0n q\u012bng ch\u01d4\u3002",
        "h\u01cei d\u01d0 y\u00f9n c\u00e1ng zhe f\u0113ng f\u00f9 de m\u00e9i\u3001 ti\u011b\u3001 sh\u00ed y\u00f3u h\u00e9 ti\u0101n r\u00e1n q\u00ec\uff0c h\u00e1i y\u01d2u l\u00f9 d\u00ec sh\u00e0ng ch\u01d4 li\u00e0ng h\u011bn sh\u01ceo de x\u012b y\u01d2u j\u012bn sh\u01d4\u3002",
        "h\u01cei d\u01d0 zh\u0113n sh\u00ec g\u00e8 j\u01d0ng s\u00e8 q\u00ed y\u00ec\u3001 w\u00f9 ch\u01cen f\u0113ng f\u00f9 de sh\u00ec ji\u00e8\u3002"
      ],
      recognizeChars: ["窃","私","警","肌","章","差","达","胞","煤","储","属"],
      writeChars: ["宁","官","汪","参","攻","推","迅","速","退","轮","煤","铁"],
      vocabWords: [
        {word:'波涛澎湃',pinyin:'bō tāo péng pài',en:'surging waves',sentence:'海面上波涛澎湃。',sentenceEn:'The sea surface has surging waves.'},
        {word:'窃窃私语',pinyin:'qiè qiè sī yǔ',en:'whisper',sentence:'海底的动物在窃窃私语。',sentenceEn:'Undersea animals are whispering.'},
        {word:'蕴藏',pinyin:'yùn cáng',en:'contain; hold',sentence:'海底蕴藏着丰富的矿产。',sentenceEn:'The seabed contains rich mineral resources.'},
        {word:'稀有',pinyin:'xī yǒu',en:'rare',sentence:'海底有很多稀有金属。',sentenceEn:'The seabed has many rare metals.'},
        {word:'景色奇异',pinyin:'jǐng sè qí yì',en:'wondrous scenery',sentence:'海底真是景色奇异。',sentenceEn:'The seabed truly has wondrous scenery.'}
      ],
      footnotes: [
        {term:"\u6ce2\u6d9b\u6f8e\u6e43", termEn:"surging waves", definition:"\u3010b\u014d t\u0101o p\u00e9ng p\u00e0i\u3011surging waves\u3002", definitionEn:"surging waves"},
        {term:"\u7a83\u7a83\u79c1\u8bed", termEn:"whisper", definition:"\u3010qi\u00e8 qi\u00e8 s\u012b y\u01d4\u3011whisper\u3002", definitionEn:"whisper"},
        {term:"\u8574\u85cf", termEn:"contain; hold", definition:"\u3010y\u00f9n c\u00e1ng\u3011contain; hold\u3002", definitionEn:"contain; hold"},
        {term:"\u7a00\u6709", termEn:"rare", definition:"\u3010x\u012b y\u01d2u\u3011rare\u3002", definitionEn:"rare"},
        {term:"\u666f\u8272\u5947\u5f02", termEn:"wondrous scenery", definition:"\u3010j\u01d0ng s\u00e8 q\u00ed y\u00ec\u3011wondrous scenery\u3002", definitionEn:"wondrous scenery"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'拟人手法',pointEn:'nǐ rén shǒu fǎ',example:'personification technique',exampleEn:'海底的动物常常在窃窃私语。',explanation:'Undersea animals often whisper to each other.',explanationEn:'把动物当作人来描写，使说明文更生动'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文。说说课文是从哪几个方面介绍海底世界的。",en:"Read aloud. Describe from which aspects the text introduces the undersea world."},
        {type:"think",cn:"在课文中找找关键句，说说那段话是怎样把这个意思写清楚的。",en:"Find key sentences in the text and explain how each paragraph develops its main idea."},
        {type:"vocab",cn:"读一读，注意加点的部分，体会这样写的好处：\u201C窃窃私语\u201D\u201C免费的长途旅行\u201D。",en:"Read and notice the highlighted parts, appreciating the benefits of such writing: 'whispering', 'free long-distance travel'."}
      ],
      teachingPoints: [
        {cn:"课文从光线、声音、动物活动、植物差异、矿物资源五个方面介绍海底世界。",en:"The text describes the undersea world from five aspects: light, sound, animal movement, plant diversity, mineral resources."},
        {cn:"学习\u201C总—分—总\u201D的结构：开头提问，中间分述，结尾总结。",en:"Learn the 'general-specific-general' structure: opening question, detailed description, concluding summary."},
        {cn:"体会拟人化表达的生动效果：\u201C窃窃私语\u201D\u201C免费的长途旅行\u201D。",en:"Appreciate the vivid effect of personification: 'whispering', 'free long-distance travel'."}
      ],
      parentTips: [
        {cn:"和孩子一起观看海底世界的纪录片，加深对课文内容的理解。",en:"Watch undersea world documentaries together to deepen understanding of the text."},
        {cn:"引导孩子学习\u201C从几个方面把事物写清楚\u201D的方法，用于自己的习作。",en:"Guide your child to apply 'describing things from several aspects' in their own writing."}
      ]
    },
    {
      id: 24, title: "火烧云", titleEn: "Fire Clouds",
      difficulty: 3,
      text: [
        "晚饭过后，火烧云上来了。霞光照得小孩子的脸红红的。大白狗变成红的了。红公鸡变成金的了。黑母鸡变成紫檀色的了。喂猪的老头儿在墙根靠着，笑盈盈地看着他的两头小白猪变成小金猪了。他刚想说\u201C你们也变了……\u201D，旁边走来个乘凉的人对他说：\u201C您老人家必要高寿，您老是金胡子了。\u201D",
        "天上的云从西边一直烧到东边，红彤彤的，好像是天空着了火。",
        "这地方的火烧云变化极多，一会儿红彤彤的，一会儿金灿灿的，一会儿半紫半黄，一会儿半灰半百合色。葡萄灰、梨黄、茄子紫，这些颜色天空都有。还有些说也说不出来、见也没见过的颜色。",
        "一会儿，天空出现一匹马，马头向南，马尾向西。马是跪着的，像等人骑上它的背，它才站起来似的。过了两三秒钟，那匹马大起来了，腿伸开了，脖子也长了，尾巴却不见了。看的人正在寻找马尾巴，那匹马变模糊了。",
        "忽然又来了一条大狗。那条狗十分凶猛，在向前跑，后边似乎还跟着好几条小狗。跑着跑着，小狗不知哪里去了，大狗也不见了。",
        "接着又来了一头大狮子，跟庙门前的石头狮子一模一样，也那么大，也那样蹲着，很威武很镇静地蹲着。可是一转眼就变了，再也找不着了。",
        "一时恍恍惚惚的，天空里又像这个又像那个，其实什么也不像，什么也看不清了。必须低下头，揉一揉眼睛，沉静一会儿再看。可是天空偏偏不等待那些爱好它的孩子。一会儿工夫，火烧云就下去了。"
      ],
      textEn: [
        "After dinner, the fire clouds appeared. The rosy glow turned children's faces red. The big white dog turned red. The red rooster turned golden. The black hen turned rosewood-colored. The old man feeding pigs leaned against the wall, smiling as he watched his two little white pigs turn into golden pigs. Just as he was about to say \u201CYou've changed too...\u201D someone cooling off nearby said to him: \u201CYou must live a long life, sir — you've got a golden beard now.\u201D",
        "Clouds stretched from west to east across the sky, bright red, as if the sky were on fire.",
        "The fire clouds here changed constantly — red one moment, golden the next, then half purple and half yellow, then half gray and half lily-white. Grape-gray, pear-yellow, eggplant-purple — the sky had all these colors. And some colors you couldn't name and had never seen before.",
        "Suddenly, a horse appeared in the sky, head facing south, tail to the west. It was kneeling, as if waiting for someone to mount before standing. After two or three seconds, the horse grew bigger, its legs stretched out, its neck grew longer, but the tail disappeared. Just as viewers were looking for the tail, the horse blurred away.",
        "Then suddenly a big dog appeared. It was very fierce, running forward with what seemed like several small dogs following behind. As it ran, the small dogs vanished, and then the big dog disappeared too.",
        "Next came a big lion, exactly like the stone lion in front of a temple — just as large, sitting just the same way, looking very majestic and composed. But in the blink of an eye it changed, and could never be found again.",
        "Everything became hazy — the sky looked like this and that, but actually looked like nothing, and nothing was clear anymore. You had to lower your head, rub your eyes, and wait a moment before looking again. But the sky wouldn't wait for the children who loved it. In no time at all, the fire clouds had gone."
      ],
      textPinyin: [
        "w\u01cen f\u00e0n gu\u00f2 h\u00f2u\uff0c hu\u01d2 sh\u0101o y\u00fan sh\u00e0ng l\u00e1i le\u3002 xi\u00e1 gu\u0101ng zh\u00e0o d\u00e9 xi\u01ceo h\u00e1i zi de li\u01cen h\u00f3ng h\u00f3ng de\u3002 d\u00e0 b\u00e1i g\u01d2u bi\u00e0n ch\u00e9ng h\u00f3ng de le\u3002 h\u00f3ng g\u014dng j\u012b bi\u00e0n ch\u00e9ng j\u012bn de le\u3002 h\u0113i m\u01d4 j\u012b bi\u00e0n ch\u00e9ng z\u01d0 t\u00e1n s\u00e8 de le\u3002 w\u00e8i zh\u016b de l\u01ceo t\u00f3u er z\u00e0i qi\u00e1ng g\u0113n k\u00e0o zhe\uff0c xi\u00e0o y\u00edng y\u00edng d\u00ec k\u00e0n zhe t\u0101 de li\u01ceng t\u00f3u xi\u01ceo b\u00e1i zh\u016b bi\u00e0n ch\u00e9ng xi\u01ceo j\u012bn zh\u016b le\u3002 t\u0101 g\u0101ng xi\u01ceng shu\u014d \u201c n\u01d0 men y\u011b bi\u00e0n le\u2026\u2026 \u201d\uff0c p\u00e1ng bi\u0101n z\u01d2u l\u00e1i g\u00e8 ch\u00e9ng li\u00e1ng de r\u00e9n du\u00ec t\u0101 shu\u014d\uff1a \u201c n\u00edn l\u01ceo r\u00e9n ji\u0101 b\u00ec y\u00e0o g\u0101o sh\u00f2u\uff0c n\u00edn l\u01ceo sh\u00ec j\u012bn h\u00fa zi le\u3002 \u201d",
        "ti\u0101n sh\u00e0ng de y\u00fan c\u00f3ng x\u012b bi\u0101n y\u00ec zh\u00ed sh\u0101o d\u00e0o d\u014dng bi\u0101n\uff0c h\u00f3ng t\u014dng t\u014dng de\uff0c h\u01ceo xi\u00e0ng sh\u00ec ti\u0101n k\u014dng zhe le hu\u01d2\u3002",
        "zh\u00e8 d\u00ec f\u0101ng de hu\u01d2 sh\u0101o y\u00fan bi\u00e0n hu\u00e0 j\u00ed du\u014d\uff0c y\u00ed hu\u00ec er h\u00f3ng t\u014dng t\u014dng de\uff0c y\u00ed hu\u00ec er j\u012bn c\u00e0n c\u00e0n de\uff0c y\u00ed hu\u00ec er b\u00e0n z\u01d0 b\u00e0n hu\u00e1ng\uff0c y\u00ed hu\u00ec er b\u00e0n hu\u012b b\u00e0n b\u01cei h\u00e9 s\u00e8\u3002 p\u00fa t\u00e1o hu\u012b\u3001 l\u00ed hu\u00e1ng\u3001 qi\u00e9 zi z\u01d0\uff0c zh\u00e8 xi\u0113 y\u00e1n s\u00e8 ti\u0101n k\u014dng d\u014du y\u01d2u\u3002 h\u00e1i y\u01d2u xi\u0113 shu\u014d y\u011b shu\u014d b\u00f9 ch\u016b l\u00e1i\u3001 ji\u00e0n y\u011b m\u00e9i ji\u00e0n gu\u00f2 de y\u00e1n s\u00e8\u3002",
        "y\u00ed hu\u00ec er\uff0c ti\u0101n k\u014dng ch\u016b xi\u00e0n y\u00ec p\u01d0 m\u01ce\uff0c m\u01ce t\u00f3u xi\u00e0ng n\u00e1n\uff0c m\u01ce w\u011bi xi\u00e0ng x\u012b\u3002 m\u01ce sh\u00ec gu\u00ec zhe de\uff0c xi\u00e0ng d\u011bng r\u00e9n q\u00ed sh\u00e0ng t\u0101 de b\u00e8i\uff0c t\u0101 c\u00e1i zh\u00e0n q\u01d0 l\u00e1i sh\u00ec de\u3002 gu\u00f2 le li\u01ceng s\u0101n mi\u01ceo zh\u014dng\uff0c n\u00e0 p\u01d0 m\u01ce d\u00e0 q\u01d0 l\u00e1i le\uff0c tu\u01d0 sh\u0113n k\u0101i le\uff0c b\u00f3 zi y\u011b ch\u00e1ng le\uff0c w\u011bi ba qu\u00e8 b\u00fa ji\u00e0n le\u3002 k\u00e0n de r\u00e9n zh\u00e8ng z\u00e0i x\u00fan zh\u01ceo m\u01ce w\u011bi ba\uff0c n\u00e0 p\u01d0 m\u01ce bi\u00e0n m\u00f3 hu le\u3002",
        "h\u016b r\u00e1n y\u00f2u l\u00e1i le y\u00ec ti\u00e1o d\u00e0 g\u01d2u\u3002 n\u00e0 ti\u00e1o g\u01d2u sh\u00ed f\u0113n xi\u014dng m\u011bng\uff0c z\u00e0i xi\u00e0ng qi\u00e1n p\u01ceo\uff0c h\u00f2u bi\u0101n s\u00ec h\u016b h\u00e1i g\u0113n zhe h\u01ceo j\u01d0 ti\u00e1o xi\u01ceo g\u01d2u\u3002 p\u01ceo zhe p\u01ceo zhe\uff0c xi\u01ceo g\u01d2u b\u00f9 zh\u012b n\u01ce l\u01d0 q\u00f9 le\uff0c d\u00e0 g\u01d2u y\u011b b\u00fa ji\u00e0n le\u3002",
        "ji\u0113 zhe y\u00f2u l\u00e1i le y\u00ec t\u00f3u d\u00e0 sh\u012b z\u01d0\uff0c g\u0113n mi\u00e0o m\u00e9n qi\u00e1n de sh\u00ed tou sh\u012b zi y\u00ec m\u00fa y\u00ed y\u00e0ng\uff0c y\u011b n\u00e0 me d\u00e0\uff0c y\u011b n\u00e0 y\u00e0ng d\u016bn zhe\uff0c h\u011bn w\u0113i w\u01d4 h\u011bn zh\u00e8n j\u00ecng d\u00ec d\u016bn zhe\u3002 k\u011b sh\u00ec y\u00ec zhu\u01cen y\u01cen ji\u00f9 bi\u00e0n le\uff0c z\u00e0i y\u011b zh\u01ceo b\u00f9 zhe le\u3002",
        "y\u00ec sh\u00ed hu\u01ceng hu\u01ceng h\u016b h\u016b de\uff0c ti\u0101n k\u014dng l\u01d0 y\u00f2u xi\u00e0ng zh\u00e8 ge y\u00f2u xi\u00e0ng n\u00e0 ge\uff0c q\u00ed sh\u00ed sh\u00e9n me y\u011b b\u00fa xi\u00e0ng\uff0c sh\u00e9n me y\u011b k\u00e0n b\u00f9 q\u012bng le\u3002 b\u00ec x\u016b d\u012b xi\u00e0 t\u00f3u\uff0c r\u00f3u yi r\u00f3u y\u01cen j\u012bng\uff0c ch\u00e9n j\u00ecng y\u00ed hu\u00ec er z\u00e0i k\u00e0n\u3002 k\u011b sh\u00ec ti\u0101n k\u014dng pi\u0101n pi\u0101n b\u00f9 d\u011bng d\u00e0i n\u00e0 xi\u0113 \u00e0i h\u00e0o t\u0101 de h\u00e1i zi\u3002 y\u00ed hu\u00ec er g\u014dng f\u016b\uff0c hu\u01d2 sh\u0101o y\u00fan ji\u00f9 xi\u00e0 q\u00f9 le\u3002"
      ],
      recognizeChars: ["喂","盈","彤","跪","庙","模","镇","揉"],
      writeChars: ["必","胡","灿","骑","秒","腿","凶","猛","接","庙","威","武","镇"],
      vocabWords: [
        {word:'火烧云',pinyin:'huǒ shāo yún',en:'fire clouds',sentence:'晚饭过后，火烧云上来了。',sentenceEn:'After dinner, the fire clouds appeared.'},
        {word:'笑盈盈',pinyin:'xiào yíng yíng',en:'beaming',sentence:'小孩子的脸笑盈盈的。',sentenceEn:'The child was beaming.'},
        {word:'恍恍惚惚',pinyin:'huǎng huǎng hū hū',en:'dazed; in a trance',sentence:'看得恍恍惚惚的。',sentenceEn:'Watching in a daze.'},
        {word:'威武',pinyin:'wēi wǔ',en:'mighty',sentence:'那匹马是威武的。',sentenceEn:'That horse was mighty.'},
        {word:'变化',pinyin:'biàn huà',en:'change',sentence:'火烧云的变化极多。',sentenceEn:'Fire clouds change in many ways.'}
      ],
      footnotes: [
        {term:"\u706b\u70e7\u4e91", termEn:"fire clouds", definition:"\u3010hu\u01d2 sh\u0101o y\u00fan\u3011fire clouds\u3002", definitionEn:"fire clouds"},
        {term:"\u7b11\u76c8\u76c8", termEn:"beaming", definition:"\u3010xi\u00e0o y\u00edng y\u00edng\u3011beaming\u3002", definitionEn:"beaming"},
        {term:"\u604d\u604d\u60da\u60da", termEn:"dazed; in a trance", definition:"\u3010hu\u01ceng hu\u01ceng h\u016b h\u016b\u3011dazed; in a trance\u3002", definitionEn:"dazed; in a trance"},
        {term:"\u5a01\u6b66", termEn:"mighty", definition:"\u3010w\u0113i w\u01d4\u3011mighty\u3002", definitionEn:"mighty"},
        {term:"\u53d8\u5316", termEn:"change", definition:"\u3010bi\u00e0n hu\u00e0\u3011change\u3002", definitionEn:"change"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'排比描写',pointEn:'pái bǐ miáo xiě',example:'parallel description',exampleEn:'一会儿红彤彤的，一会儿金灿灿的，一会儿半紫半黄。',explanation:'Now fiery red, now golden, now half purple and half yellow.',explanationEn:'用排比展现火烧云颜色和形状的丰富变化'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文。背诵第3～6自然段。",en:"Read aloud. Recite paragraphs 3-6."},
        {type:"think",cn:"说说课文写了火烧云的哪些特点，你是从哪些语句了解到的。",en:"Describe the fire clouds' characteristics and identify the sentences that reveal them."},
        {type:"vocab",cn:"读读下面这些表示颜色的词语，再说几个类似的：半紫半黄、葡萄灰、红彤彤。",en:"Read these color words and suggest similar ones: half-purple-half-yellow, grape-gray, bright red."}
      ],
      teachingPoints: [
        {cn:"课文先写火烧云的颜色变化，再写形状变化，最后写消失——按时间顺序展开。",en:"The text first describes color changes, then shape changes, then disappearance — in chronological order."},
        {cn:"学习描写颜色的多种方式：\u201C红彤彤\u201D\u201C金灿灿\u201D(ABB)、\u201C半紫半黄\u201D(半A半B)、\u201C葡萄灰\u201D(事物+色)。",en:"Learn multiple ways to describe colors: ABB patterns ('bright red'), half-A-half-B ('half purple half yellow'), object+color ('grape gray')."},
        {cn:"了解萧红——《呼兰河传》的作者，善于描写东北乡村生活。",en:"Learn about Xiao Hong — author of 'Tales of Hulan River', skilled at describing rural life in northeast China."}
      ],
      parentTips: [
        {cn:"有机会时和孩子一起观察傍晚的晚霞，对照课文体会火烧云的美。",en:"When possible, observe evening clouds together and appreciate fire clouds alongside the text."},
        {cn:"引导孩子积累颜色词语，练习ABB式、事物+色的表达方式。",en:"Help your child accumulate color vocabulary and practice ABB and object+color expression patterns."}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"兵来将挡，水来土掩。\n不入虎穴，焉得虎子。\n眼见为实，耳听为虚。\n近朱者赤，近墨者黑。",en:"When soldiers come, generals block them; when water comes, earth stops it.\nIf you don't enter the tiger's den, how can you catch a tiger cub?\nSeeing is believing, hearing is doubting.\nNear vermilion, one becomes red; near ink, one becomes black."}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"在习作中有意识地用上平时积累的语言。用\u201C你可知道……\u201D的开头向别人介绍一种事物。读读寻物启事，注意格式，照样子写一写。",en:"Consciously use accumulated language in your writing. Use 'Do you know...' openings to introduce things. Read a lost-and-found notice, note the format, and write your own."}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"国宝大熊猫——围绕大熊猫的相关问题（是猫吗？生活在哪里？为什么是国宝？），查找资料，介绍一下大熊猫。",en:"National Treasure: Giant Panda — Research and write about giant pandas: Are they cats? Where do they live? Why are they national treasures?"},modelEssays:[
      {title:"可爱的大熊猫",titleEn:"The Adorable Giant Panda",level:"基础",
      structure:[
        {cn:"开头：引出大熊猫的身份",en:"Opening: Introduce the giant panda's identity"},
        {cn:"中间：写外形、食物和生活地点",en:"Body: Describe appearance, diet, and habitat"},
        {cn:"结尾：写为什么是国宝",en:"Ending: Explain why it's a national treasure"}
      ],
      cn:"大熊猫是我国的国宝，别看名字里有个\u201C猫\u201D字，它可不是猫，而是熊科动物。\n大熊猫长得胖乎乎的，全身黑白两色。圆圆的脸上有两个大大的黑眼圈，像戴了一副墨镜，看起来特别可爱。它的四条腿短短的、粗粗的，走起路来一摇一摆的，非常有趣。\n大熊猫最爱吃竹子。它经常坐在地上，两只前爪抱着竹子，\u201C咔嚓咔嚓\u201D地啃，吃得津津有味。它主要生活在四川、陕西和甘肃的高山竹林里。\n大熊猫是中国特有的动物，数量非常稀少，全世界只有不到两千只。所以，大熊猫是我们中国的国宝，我们要好好保护它。",
      en:"The giant panda is China\u2019s national treasure. Despite having \u201Ccat\u201D in its Chinese name, it\u2019s not a cat at all \u2014 it belongs to the bear family.\nGiant pandas are plump, with black-and-white fur. Their round faces have two big dark circles around their eyes, as if wearing sunglasses \u2014 very cute. Their four legs are short and thick, and they waddle when they walk, which is quite funny.\nGiant pandas love to eat bamboo. They often sit on the ground, holding bamboo with both front paws, crunching away with great relish. They mainly live in the mountain bamboo forests of Sichuan, Shaanxi, and Gansu.\nGiant pandas are unique to China and extremely rare \u2014 fewer than two thousand remain in the world. That\u2019s why giant pandas are China\u2019s national treasure, and we must protect them well.",
      notes:"这篇范文围绕三个问题来写：是不是猫、吃什么住哪里、为什么是国宝。回答了习作要求的所有问题。外形描写用了比喻（像墨镜），声音描写（咔嚓咔嚓），语言活泼有趣。",
      notesEn:"This essay addresses three questions: Is it a cat? What does it eat and where does it live? Why is it a national treasure? It answers all the prompts. Appearance description uses simile (like sunglasses) and sound (crunching), keeping the language lively."},
      {title:"国宝大熊猫",titleEn:"The Giant Panda: China's Treasure",level:"提高",
      structure:[
        {cn:"开头：用问句引起兴趣",en:"Opening: Use questions to spark interest"},
        {cn:"中间：从多个方面介绍（外形、食物、习性、分布）",en:"Body: Introduce from multiple aspects (appearance, diet, habits, distribution)"},
        {cn:"结尾：写保护大熊猫的意义",en:"Ending: Discuss the significance of panda conservation"}
      ],
      cn:"你可知道，有一种动物被全世界的人都喜爱，它就是我们中国的国宝——大熊猫。\n大熊猫虽然叫\u201C猫\u201D，其实属于熊科。它的身体圆滚滚的，像一个黑白相间的大毛球。最有特色的是它的\u201C黑眼圈\u201D，好像熬了好几个通宵似的，模样十分逗趣。大熊猫的体重大约有一百公斤，可别被它憨厚的外表骗了，爬树的时候它可灵活了！\n大熊猫的主要食物是竹子，一只成年大熊猫每天要吃掉大约二十公斤的竹子。除了竹子，它偶尔也会吃些竹笋、水果，甚至还会抓小鱼吃呢。大熊猫大部分时间都在吃和睡，每天要睡十多个小时，真是个\u201C大懒虫\u201D。\n大熊猫生活在中国四川、陕西和甘肃省的山区，那里有茂密的竹林和凉爽的气候。因为它是中国独有的物种，而且数量非常稀少，被称为\u201C活化石\u201D，已经在地球上生活了至少八百万年。\n保护大熊猫就是保护大自然。希望每个人都能行动起来，让大熊猫在地球上永远幸福地生活下去。",
      en:"Did you know there\u2019s an animal loved by people all over the world? It\u2019s China\u2019s national treasure \u2014 the giant panda.\nAlthough called \u201Cpanda\u201D (literally \u201Cbig bear-cat\u201D in Chinese), the giant panda actually belongs to the bear family. Its body is round and roly-poly, like a big black-and-white furball. Its most distinctive feature is the dark circles around its eyes, as if it\u2019s pulled several all-nighters \u2014 very amusing. A giant panda weighs about 100 kilograms, but don\u2019t be fooled by its gentle appearance \u2014 it\u2019s quite agile when climbing trees!\nThe giant panda\u2019s main food is bamboo. An adult panda eats about 20 kilograms of bamboo per day. Besides bamboo, it occasionally eats bamboo shoots, fruit, and even catches small fish. Pandas spend most of their time eating and sleeping \u2014 over ten hours a day \u2014 truly big lazybones.\nGiant pandas live in the mountainous regions of Sichuan, Shaanxi, and Gansu provinces, where there are dense bamboo forests and cool climates. Because they are unique to China and very rare, they\u2019re called \u201Cliving fossils\u201D \u2014 they\u2019ve lived on Earth for at least eight million years.\nProtecting giant pandas means protecting nature. I hope everyone will take action so pandas can live happily on Earth forever.",
      notes:"这篇范文从多个方面介绍大熊猫：外形、食物、习性、分布、历史，内容充实。用了\u201C你可知道\u201D的开头吸引读者。加入了具体数据（100公斤、20公斤竹子、800万年），增强了说服力。\u201C大懒虫\u201D\u201C活化石\u201D等说法增添了趣味。结尾有呼吁，提升了主题。",
      notesEn:"This essay introduces pandas from multiple angles: appearance, diet, habits, distribution, and history. The 'Did you know' opening engages readers. Specific data (100 kg, 20 kg bamboo, 8 million years) adds credibility. Terms like 'lazybones' and 'living fossil' add fun. The ending appeal elevates the theme."},
      {title:"了不起的大熊猫",titleEn:"The Remarkable Giant Panda",level:"拓展",
      structure:[
        {cn:"开头：用有趣的事实吸引读者",en:"Opening: Hook the reader with a fascinating fact"},
        {cn:"中间：从科学角度分层介绍",en:"Body: Introduce from a scientific perspective in layers"},
        {cn:"过渡：讲一个大熊猫的感人故事",en:"Transition: Tell a touching panda story"},
        {cn:"结尾：从大熊猫联想到人与自然的关系",en:"Ending: Connect pandas to the relationship between humans and nature"}
      ],
      cn:"你知道吗？大熊猫的祖先其实是吃肉的！经过漫长的进化，它才变成了现在几乎只吃竹子的\u201C素食主义者\u201D。大熊猫身上藏着许多了不起的秘密，让我来给你一一揭开。\n大熊猫属于熊科，是世界上最珍贵的动物之一。它的皮毛看起来软绵绵的，其实又厚又硬，能帮助它抵御山区的严寒。别看它走路慢吞吞的，遇到危险时奔跑的速度可以达到每小时四十公里！更有趣的是，大熊猫的前爪上有一个特别的\u201C假拇指\u201D，这是一块突出的骨头，能帮助它灵活地抓住竹子。\n大熊猫的家在中国西部的高山竹林中，海拔一千五百到三千米。那里云雾缭绕，竹林幽深。它们通常独来独往，每只大熊猫都有自己的\u201C领地\u201D。每天除了吃就是睡，看起来无忧无虑。\n说起大熊猫，不得不提\u201C花花\u201D。她生活在成都大熊猫繁育研究基地，因为长着一张圆滚滚的脸、走路摇摇摆摆的萌态，成了全世界最受欢迎的大熊猫明星。每天都有成千上万的游客来看她，小朋友们隔着玻璃喊：\u201C花花！花花！\u201D她却不紧不慢地啃着竹子，好像在说：\u201C急什么，我吃完再说。\u201D\n大熊猫已经在地球上生活了至少八百万年，比人类的历史还要长得多。它们是大自然留给中国最珍贵的礼物。保护大熊猫，不仅是保护一个物种，更是保护我们赖以生存的自然环境。因为大熊猫的家园，也是许许多多其他动植物的家园。保护了大熊猫的竹林，就保护了整片森林的生态。\n我希望有一天，每一座山上都有大熊猫自由地生活。那时候，人类和大自然，一定是最好的朋友。",
      en:"Did you know? The giant panda\u2019s ancestors were actually meat-eaters! Through long evolution, it became the near-exclusive bamboo-eating \u201Cvegetarian\u201D it is today. The giant panda hides many remarkable secrets, and I\u2019ll reveal them one by one.\nThe giant panda belongs to the bear family and is one of the world\u2019s most precious animals. Its fur looks soft and fluffy, but it\u2019s actually thick and tough, helping it withstand mountain cold. Though it walks slowly, when threatened it can run up to 40 kilometers per hour! Even more fascinating, the panda\u2019s front paw has a special \u201Cfalse thumb\u201D \u2014 a protruding bone that helps it grip bamboo deftly.\nThe giant panda\u2019s home is in the high-altitude bamboo forests of western China, at 1,500 to 3,000 meters elevation, where clouds swirl and bamboo groves run deep. They are usually solitary, each having its own territory. They spend their days eating and sleeping, looking carefree.\nSpeaking of pandas, we must mention \u201CHuahua.\u201D She lives at the Chengdu Giant Panda Breeding Research Base. With her perfectly round face and waddling walk, she became the world\u2019s most popular panda celebrity. Thousands of visitors come to see her daily. Children press against the glass calling, \u201CHuahua! Huahua!\u201D But she just calmly munches her bamboo, as if saying, \u201CWhat\u2019s the rush? Let me finish eating first.\u201D\nGiant pandas have lived on Earth for at least eight million years \u2014 far longer than human history. They are nature\u2019s most precious gift to China. Protecting pandas isn\u2019t just about saving one species; it\u2019s about preserving the natural environment we all depend on. Because the panda\u2019s homeland is also home to countless other plants and animals. Protecting the panda\u2019s bamboo forests means protecting the entire forest ecosystem.\nI hope that one day, giant pandas will roam freely on every mountain. When that day comes, humans and nature will truly be the best of friends.",
      notes:"这篇范文综合运用了说明和叙事两种手法。开头用\u201C祖先吃肉\u201D的冷知识吸引读者，科学知识丰富（假拇指、时速40公里）。穿插了\u201C花花\u201D的故事，增加了亲切感和时代感。运用了拟人（好像在说……）和排比。结尾从\u201C保护大熊猫\u201D升华到\u201C保护整个生态\u201D再到\u201C人与自然和谐共处\u201D，层层递进，格局开阔。全文知识性与趣味性兼顾，说明文和记叙文的融合体现了拓展水平。",
      notesEn:"This essay combines expository and narrative techniques. The opening hooks readers with the fun fact about meat-eating ancestors. Scientific details are rich (false thumb, 40 km/h speed). Huahua's story adds warmth and relevance. It uses personification (as if saying...) and parallelism. The ending elevates from protecting pandas to protecting the ecosystem to human-nature harmony, building progressively with a broad perspective. The blend of knowledge and storytelling, combining exposition and narration, demonstrates advanced-level writing."}
    ]}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 8 — 有趣的故事 Fun Stories (25-28)   */
/* ═══════════════════════════════════════════ */
{
  id: 8, title: "有趣的故事", titleEn: "Fun Stories",
  difficulty: 3,
  type: "kewen",
  lessons: [
    {
      id: 25, title: "慢性子裁缝和急性子顾客", titleEn: "The Slow Tailor and the Impatient Customer",
      difficulty: 3,
      text: [
"故事发生在冬天，裁缝店里走进一位顾客。",
"顾客把一卷布料放到桌上，对裁缝说：“我想做件棉袄。我已经跑了三家裁缝店了。第一家说要到秋天才能做好。第二家问我有没有等到夏天的耐心。数第三位师傅强些，但他最早也要到开春交货。我可等不及，都没让他们做。告诉您，我和别的顾客不一样，我是个性子最急的顾客。请问师傅，您准备让我什么时候来取衣服———秋天？夏天？春天？”",
"“不，”裁缝说，“就在冬天。”",
"顾客好高兴！",
"裁缝又补充一句：“不过，我指的是明年冬天。”",
"顾客“噌”一下跳起来：“这么慢啊！”",
"裁缝说：“您要知道，我和别的裁缝不一样，我是个性子最慢的裁缝呀。”",
"“那就算啦，我还是去找刚才的师傅吧。”顾客夹起布料就要走。",
"“别走，”裁缝把顾客叫住，“我知道您是个急性子。依我看，我做的活儿最适合您这种性子的顾客啦。”",
"急性子顾客挺纳闷：“我不懂您的话。”",
"慢性子裁缝笑了：“照您的性子，您肯定会一拿到衣服就穿在身上，不是吗？”",
"顾客说：“那当然。我可不耐烦把新衣服藏在箱子里。”",
"裁缝说：“那么，您要是在别的季节拿到新棉袄，您也不得不由着性子穿上。可是您无论在秋天、夏天还是春天穿上棉袄，人家都会笑话你的。我呢，绝不会让人笑话您，非但如此，在您穿上我做的美观大方的新棉袄的时候，大家还会围着您直夸奖，甚至羡慕您呢。”",
"这位顾客歪着头想了想，不得不承认裁缝说得有道理。于是，做衣服的事儿就算说定了。",
"不料，这顾客第二天又跑到裁缝店来，说：“我不做棉袄了！”",
"裁缝问：“怎么啦？”",
"“等到明年冬天，时间实在太长啦。”顾客提出，“把我那棉袄里的棉花拽掉，改成夹袄，让我提前在秋天就能穿上合时的新衣服吧。”",
"“不要棉花了，行啊。”裁缝答应了，“为您服务，没说的！”",
"顾客满意地走了。可是第三天他又来了。",
"“师傅，把我那夹袄的袖子剪去一截，改成夏天能穿的短袖衬衫吧，我实在等不及了。”",
"裁缝点点头：“剪袖子，只要‘咔嚓’、‘咔嚓’两剪子，好办得很，没问题。”",
"又过了一天，那顾客再来的时候，裁缝笑着问他：“怎么，您那件短袖衬衫还能改成什么？”",
"顾客说：“对不起，麻烦您再给我改成春装吧。袖子嘛，把上次剪下来的再接上去就是啦。”",
"裁缝这回摇头了：“接上去的袖子多难看呀。”",
"顾客叫道：“那您别管，只要能让我早些儿在春天穿上。您别忘了，我可是个急性子顾客呀。”",
"裁缝说：“亲爱的顾客，我要对您负责。我不会让您穿上这样难看的衣裳，这也坏了我的名声呀。”",
"顾客泄气了。但裁缝又拍拍他的肩说：“您放心，凭我的手艺，不用接袖子也能给您做出一件最漂亮的春装。”",
"顾客感动极了：“那真太谢谢啦———您真的不用接袖子？”",
"“根本不用。”裁缝解释说，“因为您的布在我的柜子里搁着，我还没开始裁料呢。”",
"顾客惊讶、恼怒地瞪大了眼睛！",
"“您也别忘了，”裁缝提醒他说，“我是个慢性子裁缝呀。”"
],
      textEn: [
"The story takes place in winter. A customer walks into a tailor's shop.",
"The customer puts a roll of cloth on the table and says to the tailor: “I want a padded jacket made. I've already been to three tailor shops. The first said it wouldn't be ready until autumn. The second asked if I had the patience to wait until summer. The third was a bit better, but the earliest he could deliver was spring. I couldn't wait, so I didn't let any of them do it. I'm different from other customers — I'm the most impatient customer there is. When can I pick up my clothes — autumn? Summer? Spring?...”",
"“No,” the tailor said, “right in winter.” The tailor then added another remark: “However, I mean next winter.”",
"The customer leaped up: “That slow!” The tailor replied: “I'm different from other tailors — I'm the slowest tailor there is.”",
"“Don't leave,” the tailor called after the customer. “I know you're impatient. The way I see it, my work is perfect for someone with your temperament.” He explained that the customer would wear the jacket immediately upon receiving it, and wearing a padded jacket in the wrong season would invite ridicule. The tailor guaranteed the customer would wear the new jacket in winter, and everyone would compliment him.",
"The customer tilted his head, thought it over, and had to admit the tailor had a point. So the deal was settled.",
"Unexpectedly, this customer came running to the tailor’s shop again the very next day and said: “I don’t want a padded jacket anymore! Pull out the cotton from my padded jacket and change it into a lined jacket, so I can wear seasonably appropriate new clothes ahead of time in autumn.” The tailor agreed.",
"On the third day he came back again. “Tailor, cut off the sleeves and make it a short-sleeved shirt for summer — I simply can't wait.” The tailor nodded: “Cutting sleeves just takes two snips — easy, no problem.”",
"The next day, the customer returned yet again. The tailor smiled: “So, what else can that short-sleeved shirt be changed into?” The customer said: “Sorry, but could you change it to spring wear? Just reattach the sleeves you cut off.”",
"The tailor said: “Dear customer, I must take responsibility for you. I won't let you wear something so ugly — it would ruin my reputation.” The customer insisted he didn't care, just wanting it ready for spring.",
"The tailor patted his shoulder: “Don't worry. With my skills, I can make you the most beautiful spring outfit without reattaching any sleeves.”",
"The customer was moved: “Thank you so much! You really don't need to reattach the sleeves?” “Not at all,” the tailor explained, “because your cloth is still sitting in my cabinet — I haven't even started cutting.”",
"The customer's eyes widened in shock and anger! “Don't forget,” the tailor reminded him, “I'm a slow tailor.”",
"(Short passage, 39 characters)",
"(Short passage, 28 characters)",
"(Short passage, 10 characters)",
"(Passage, 60 characters)",
"(Short passage, 28 characters)",
"(Short passage, 18 characters)",
"(Short passage, 39 characters)",
"(Short passage, 36 characters)",
"(Short passage, 41 characters)",
"(Short passage, 41 characters)",
"(Short passage, 21 characters)",
"(Short passage, 42 characters)",
"(Short passage, 44 characters)",
"(Short passage, 49 characters)",
"(Short passage, 27 characters)",
"(Short passage, 38 characters)",
"(Short passage, 14 characters)",
"(Short passage, 27 characters)"
],
      textPinyin: [
"gù shì fā shēng zài dōng tiān。 cái feng diàn lǐ zǒu jìn yí wèi gù kè。",
"gù kè bǎ yí juàn bù liào fàng dào zhuō shàng， duì cái fèng shuō： “ wǒ xiǎng zuò jiàn mián ǎo。 wǒ yǐ jīng pǎo le sān jiā cái feng diàn le。 dì yī jiā shuō yào dào qiū tiān cái néng zuò hǎo。 dì èr jiā wèn wǒ yǒu méi yǒu děng dào xià tiān de nài xīn。 dì sān wèi shī fu dǎo shì qiáng xiē， dàn tā zuì zǎo yě yào dào kāi chūn cái néng jiāo huò。 wǒ kě děng bù jí， dōu méi ràng tā men zuò。 gào sù nín， wǒ hé bié de gù kè bù yí yàng， wǒ shì gè xìng zǐ zuì jí de gù kè。 qǐng wèn shī fu， nín zhǔn bèi ràng wǒ shén me shí hòu lái qǔ yī fu—— qiū tiān？ xià tiān？ chūn tiān？…… ”",
"“ bù， ” cái feng shuō， “ jiù zài dōng tiān。 ” cái feng yòu bǔ chōng yí jù： “ bú guò， wǒ zhǐ de shì míng nián dōng tiān。 ”",
"gù kè cēng de yí xià zǐ tiào qǐ lái： “ zhè me màn a！ ” cái fèng shuō： “ wǒ hé bié de cái feng bù yí yàng， wǒ shì gè xìng zǐ zuì màn de cái feng a。 ”",
"“ bié zǒu， ” cái feng bǎ gù kè jiào zhù， “ wǒ zhī dào nín shì gè jí xìng zǐ。 yī wǒ kàn， wǒ zuò de huó ér zuì shì hé nín zhè zhǒng xìng zǐ de gù kè lā。 ” cái feng jiě shì shuō， àn zhào gù kè de xìng zǐ， tā huì yì ná dào yī fu jiù chuān shàng， ér zài bù hé shí lìng de jì jié chuān mián ǎo huì bèi rén xiào huà。 cái feng bǎo zhèng ràng gù kè zài dōng tiān chuān shàng xīn mián ǎo， dà jiā hái huì wéi zhe tā zhí kuā jiǎng。",
"zhè wèi gù kè wāi zhe tóu xiǎng le xiǎng， bù dé bù chéng rèn cái feng shuō dé yǒu dào lǐ。 yú shì， zuò yī fu de shì ér jiù suàn shuō dìng le。",
"bú liào， zhè wèi gù kè dì èr tiān yòu pǎo dào cái feng diàn lái， shuō： “ wǒ bú zuò mián ǎo le！ bǎ wǒ nà mián ǎo lǐ de mián huā zhuài diào， gǎi chéng jiá ǎo， ràng wǒ tí qián zài qiū tiān jiù néng chuān shàng hé shí de xīn yī fu ba。 ” cái feng dā ying le。",
"kě shì dì sān tiān tā yòu lái le。 “ shī fu， bǎ wǒ nà jiá ǎo de xiù zǐ jiǎn qù yì jié ér， gǎi chéng xià tiān néng chuān de duǎn xiù chèn shān ba， wǒ shí zài děng bù jí le。 ” cái feng diǎn diǎn tóu： “ jiǎn xiù zǐ， zhǐ yào kā chā kā chā liǎng jiǎn zǐ， hǎo bàn dé hěn， méi wèn tí。 ”",
"yòu guò le yì tiān， nà gù kè zài lái de shí hòu， cái feng xiào zhe wèn tā： “ zěn me， nín nà jiàn duǎn xiù chèn shān hái néng gǎi chéng shén me？ ” gù kè shuō： “ duì bù qǐ， má fán nín zài gěi wǒ gǎi chéng chūn zhuāng ba。 xiù zǐ ma， bǎ shàng cì jiǎn xià lái de zài jiē shàng qù jiù shì lā。 ”",
"cái feng shuō： “ qīn ài de gù kè， wǒ yào duì nín fù zé。 wǒ bú huì ràng nín chuān shàng zhè me nán kàn de yī shang， zhè yě huài le wǒ de míng shēng a。 ” gù kè shuō： “ nà nín bié guǎn， zhǐ yào néng ràng wǒ zǎo xiē zài chūn tiān chuān shàng。 ”",
"cái feng yòu pāi pāi tā de jiān， shuō： “ nín fàng xīn， píng wǒ de shǒu yì， bú yòng jiē xiù zǐ yě néng gěi nín zuò chū yí jiàn zuì piào liang de chūn zhuāng。 ”",
"gù kè gǎn dòng jí le： “ nà tài xiè xiè lā。 nín zhēn de bú yòng jiē xiù zǐ？ ” “ gēn běn bú yòng。 ” cái feng jiě shì shuō， “ yīn wèi nín de bù zài wǒ de guì zi lǐ gē zhe， wǒ hái méi kāi shǐ cái liào ne。 ”",
"gù kè jīng yà、 nǎo nù dì dèng dà le yǎn jīng！ “ nín kě bié wàng le， ” cái feng tí xǐng tā shuō， “ wǒ shì gè màn xìng zǐ cái feng a。 ”",
"zhè wèi gù kè wāi zhe tóu xiǎng le xiǎng ， bù dé bù chéng rèn cái feng shuō dé yǒu dào lǐ 。 yú shì ， zuò yī fu de shì ér jiù suàn shuō dìng le 。",
"bú liào ， zhè gù kè dì èr tiān yòu pǎo dào cái feng diàn lái ， shuō ： “ wǒ bú zuò mián ǎo le ！ ”",
"cái feng wèn ： “ zěn me lā ？ ”",
"“ děng dào míng nián dōng tiān ， shí jiān shí zài tài cháng lā 。 ” gù kè tí chū ， “ bǎ wǒ nà mián ǎo lǐ de mián huā zhuài diào ， gǎi chéng jiá ǎo ， ràng wǒ tí qián zài qiū tiān jiù néng chuān shàng hé shí de xīn yī fu ba 。 ”",
"“ bú yào mián huā le ， xíng a 。 ” cái feng dā ying le ， “ wèi nín fú wù ， méi shuō de ！ ”",
"gù kè mǎn yì dì zǒu le 。 kě shì dì sān tiān tā yòu lái le 。",
"“ shī fu ， bǎ wǒ nà jiá ǎo de xiù zǐ jiǎn qù yì jié ， gǎi chéng xià tiān néng chuān de duǎn xiù chèn shān ba ， wǒ shí zài děng bù jí le 。 ”",
"cái feng diǎn diǎn tóu ： “ jiǎn xiù zǐ ， zhǐ yào ‘ kā chā ’ 、 ‘ kā chā ’ liǎng jiǎn zǐ ， hǎo bàn dé hěn ， méi wèn tí 。 ”",
"yòu guò le yì tiān ， nà gù kè zài lái de shí hòu ， cái fèng xiào zhe wèn tā ： “ zěn me ， nín nà jiàn duǎn xiù chèn shān hái néng gǎi chéng shén me ？ ”",
"gù kè shuō ： “ duì bù qǐ ， má fán nín zài gěi wǒ gǎi chéng chūn zhuāng ba 。 xiù zǐ ma ， bǎ shàng cì jiǎn xià lái de zài jiē shàng qù jiù shì lā 。 ”",
"cái feng zhè huí yáo tóu le ： “ jiē shàng qù de xiù zǐ duō nán kàn ya 。 ”",
"gù kè jiào dào ： “ nà nín bié guǎn ， zhǐ yào néng ràng wǒ zǎo xiē ér zài chūn tiān chuān shàng 。 nín bié wàng le ， wǒ kě shì gè jí xìng zǐ gù kè ya 。 ”",
"cái feng shuō ： “ qīn ài de gù kè ， wǒ yào duì nín fù zé 。 wǒ bú huì ràng nín chuān shàng zhè yàng nán kàn de yī shang ， zhè yě huài le wǒ de míng shēng ya 。 ”",
"gù kè xiè qì le 。 dàn cái feng yòu pāi pāi tā de jiān shuō ： “ nín fàng xīn ， píng wǒ de shǒu yì ， bú yòng jiē xiù zǐ yě néng gěi nín zuò chū yí jiàn zuì piào liang de chūn zhuāng 。 ”",
"gù kè gǎn dòng jí le ： “ nà zhēn tài xiè xiè lā — — — nín zhēn de bú yòng jiē xiù zǐ ？ ”",
"“ gēn běn bú yòng 。 ” cái feng jiě shì shuō ， “ yīn wèi nín de bù zài wǒ de guì zi lǐ gē zhe ， wǒ hái méi kāi shǐ cái liào ne 。 ”",
"gù kè jīng yà 、 nǎo nù dì dèng dà le yǎn jīng ！",
"“ nín yě bié wàng le ， ” cái feng tí xǐng tā shuō ， “ wǒ shì gè màn xìng zǐ cái feng ya 。 ”"
],
      recognizeChars: ["缝","箱","夸","歪","承","夹","袖","衬","衫","负","泄","艺"],
      writeChars: ["性","卷","货","夹","夸","务","衬","衫","负","责","艺"],
      vocabWords: [
        {word:'性子',pinyin:'xìng zi',en:'temperament',sentence:'一个慢性子，一个急性子。',sentenceEn:'One slow-tempered, one quick-tempered.'},
        {word:'裁缝',pinyin:'cái feng',en:'tailor',sentence:'裁缝做衣服。',sentenceEn:'The tailor makes clothes.'},
        {word:'布料',pinyin:'bù liào',en:'fabric',sentence:'顾客拿来一卷布料。',sentenceEn:'The customer brought a roll of fabric.'},
        {word:'交货',pinyin:'jiāo huò',en:'deliver goods',sentence:'什么时候交货？',sentenceEn:'When will you deliver?'},
        {word:'耐心',pinyin:'nài xīn',en:'patience',sentence:'裁缝很有耐心。',sentenceEn:'The tailor was very patient.'}
      ],
      grammarPoints: [
        {point: "\u56e0\u4e3a\u2026\u2026\u6240\u4ee5\u2026\u2026", pointEn: "because...therefore...", example: "\u6545\u4e8b\u53d1\u751f\u5728\u51ac\u5929\u3002", exampleEn: "The story takes place in winter. A customer walks into a tailor's shop.", explanation: "\u56e0\u679c\u590d\u53e5\uff0c\u8868\u793a\u539f\u56e0\u548c\u7ed3\u679c\u7684\u5173\u7cfb", explanationEn: "Causal compound sentence expressing cause and effect"},
        {point: "\u628a\u5b57\u53e5", pointEn: "b\u01ce-construction", example: "\u6545\u4e8b\u53d1\u751f\u5728\u51ac\u5929\u3002", exampleEn: "The story takes place in winter. A customer walks into a tailor's shop.", explanation: "\u7528\u201c\u628a\u201d\u5c06\u5bbe\u8bed\u63d0\u524d\uff0c\u5f3a\u8c03\u52a8\u4f5c\u5bf9\u5bf9\u8c61\u7684\u5f71\u54cd", explanationEn: "Moves the object before the verb using \"b\u01ce\" to emphasize the effect of the action"}
      ],
      footnotes: [
        {term:"\u6027\u5b50", termEn:"temperament", definition:"\u3010x\u00ecng zi\u3011temperament\u3002", definitionEn:"temperament"},
        {term:"\u88c1\u7f1d", termEn:"tailor", definition:"\u3010c\u00e1i feng\u3011tailor\u3002", definitionEn:"tailor"},
        {term:"\u5e03\u6599", termEn:"fabric", definition:"\u3010b\u00f9 li\u00e0o\u3011fabric\u3002", definitionEn:"fabric"},
        {term:"\u4ea4\u8d27", termEn:"deliver goods", definition:"\u3010ji\u0101o hu\u00f2\u3011deliver goods\u3002", definitionEn:"deliver goods"},
        {term:"\u8010\u5fc3", termEn:"patience", definition:"\u3010n\u00e0i x\u012bn\u3011patience\u3002", definitionEn:"patience"}
      ],
      readingTips: [
        {cn:"\u8fd9\u7bc7\u6587\u7ae0\u8f83\u957f\uff0c\u5efa\u8bae\u5206\u6bb5\u9605\u8bfb\u3002\u6bcf\u8bfb\u5b8c\u4e00\u6bb5\uff0c\u505c\u4e0b\u6765\u60f3\u60f3\u8fd9\u6bb5\u7684\u4e3b\u8981\u5185\u5bb9\u3002", en:"This is a longer text. Read it paragraph by paragraph, pausing after each to think about the main idea."},
        {cn:"\u8bfb\u5b8c\u5168\u6587\u540e\uff0c\u8bd5\u7740\u7528\u4e00\u53e5\u8bdd\u6982\u62ec\u6587\u7ae0\u7684\u4e2d\u5fc3\u601d\u60f3\u3002", en:"After reading the whole text, try to summarize the central idea in one sentence."}
      ],
      exercises: [
        {type:"read",cn:"分角色朗读课文，注意读出裁缝和顾客对话的语气。",en:"Read with assigned roles, paying attention to the tailor's and customer's tones of voice."},
        {type:"retell",cn:"默读课文，填写表格（时间/急性子顾客的要求/慢性子裁缝的反应），再借助表格复述故事。",en:"Read silently, fill in a chart (time/impatient customer's request/slow tailor's response), then use it to retell the story."},
        {type:"imagine",cn:"假如裁缝是急性子，顾客是慢性子，他们之间又会发生怎样的故事呢？",en:"What if the tailor were impatient and the customer were slow? What story might unfold?"}
      ],
      teachingPoints: [
        {cn:"课文通过对比\u201C急性子\u201D和\u201C慢性子\u201D制造了喜剧效果。",en:"The text creates comedic effect by contrasting 'impatient' and 'slow' personalities."},
        {cn:"学习复述故事的方法：借助表格梳理情节，按时间顺序讲述。",en:"Learn story retelling methods: organize the plot with a chart and narrate chronologically."},
        {cn:"注意故事的\u201C包袱\u201D——结尾揭示裁缝根本还没开始裁料。",en:"Notice the story's punchline — revealing the tailor hasn't even started cutting the cloth."}
      ],
      parentTips: [
        {cn:"和孩子分角色朗读，体会对话中的幽默。",en:"Read with assigned roles to feel the humor in the dialogue."},
        {cn:"鼓励孩子尝试续编\u201C急性子裁缝和慢性子顾客\u201D的故事。",en:"Encourage your child to try writing a story about 'an impatient tailor and a slow customer'."}
      ]
    },
    {
      id: 26, title: "方帽子店", titleEn: "The Square Hat Shop",
      difficulty: 3,
      isSelfRead: true,
      text: [
        "这家帽子店从来没有做过别的帽子。他们的橱窗里都是方帽子。第一顶是方的，第二顶是方的，第三顶还是方的……",
        "问他们为什么只做方帽子，他们总是这样回答：\u201C我们从来都是做方帽子，方帽子才是好帽子，不能改的。\u201D",
        "做帽子的人做方帽子，买帽子的人买方帽子。他们圆圆的脑袋藏在方帽子里，紧的地方太紧，宽的地方太宽，冬天戴着不太暖，夏天戴着却热得满头汗。舒服吗？真不舒服！",
        "小孩子们觉得方帽子又奇怪又不舒服，他们想，圆圆的头为什么戴方帽子呢？圆的不行吗？",
        "小孩子们用纸做出圆的、尖的、香蕉形的帽子，戴在头上，又舒服又漂亮。",
        "后来，小孩子们设法找到一些布，试着做了几顶圆帽子，像碗一样扣在头上，很舒服。",
        "街上人山人海。在密密麻麻的方帽子中，忽然出现了几顶圆帽子，方帽子店的主人大吃一惊。",
        "孩子们慢慢地长大了，想出了许多帽子的式样，碗形的、香蕉形的、圆筒形的……夏天戴宽边的香蕉形的草帽，冬天戴圆筒形的呢绒帽，春天和秋天戴碗形的布帽。",
        "后来，方帽子店对面，又开了一家帽子店，橱窗里放着各式各样的帽子，却没有一顶是方的。顾客们在两家店门前看了好久，最后还是进了新帽子店。",
        "日子一天天地过去，世界一天天在改变，那些不舒服的方帽子，慢慢地成为古董。"
      ],
      textEn: [
        "This hat shop had never made any other kind of hat. Their window displayed only square hats. The first was square, the second was square, the third was still square...",
        "Asked why they only made square hats, they always answered: \u201CWe've always made square hats. Square hats are good hats. That can't change.\u201D",
        "Hat makers made square hats; hat buyers bought square hats. People's round heads were stuffed into square hats — too tight in some places, too loose in others, not warm enough in winter, too hot in summer. Comfortable? Not at all!",
        "Children thought square hats were both strange and uncomfortable. They wondered: why put square hats on round heads? Wouldn't round ones work?",
        "The children made round, pointed, and banana-shaped paper hats — comfortable and pretty.",
        "Later, the children found some cloth and made a few round hats, fitting on their heads like bowls — very comfortable.",
        "The streets were crowded. Among the masses of square hats, a few round hats suddenly appeared, shocking the square hat shop owner.",
        "As the children grew up, they invented many hat styles — bowl-shaped, banana-shaped, cylindrical... Wide-brimmed banana-shaped straw hats for summer, cylindrical wool hats for winter, bowl-shaped cloth hats for spring and autumn.",
        "Eventually, a new hat shop opened across from the square hat shop, displaying all kinds of hats — not a single one square. Customers looked at both shops for a long time, but ultimately chose the new shop.",
        "Days passed, the world kept changing, and those uncomfortable square hats gradually became antiques."
      ],
      textPinyin: [
        "zh\u00e8 ji\u0101 m\u00e0o zi di\u00e0n c\u00f3ng l\u00e1i m\u00e9i y\u01d2u zu\u00f2 gu\u00f2 bi\u00e9 de m\u00e0o zi\u3002 t\u0101 men de ch\u00fa chu\u0101ng l\u01d0 d\u014du sh\u00ec f\u0101ng m\u00e0o z\u01d0\u3002 d\u00ec y\u012b d\u01d0ng sh\u00ec f\u0101ng de\uff0c d\u00ec \u00e8r d\u01d0ng sh\u00ec f\u0101ng de\uff0c d\u00ec s\u0101n d\u01d0ng h\u00e1i sh\u00ec f\u0101ng de\u2026\u2026",
        "w\u00e8n t\u0101 men w\u00e8i sh\u00e9n me zh\u012b zu\u00f2 f\u0101ng m\u00e0o zi\uff0c t\u0101 men z\u01d2ng sh\u00ec zh\u00e8 y\u00e0ng hu\u00ed d\u00e1\uff1a \u201c w\u01d2 men c\u00f3ng l\u00e1i d\u014du sh\u00ec zu\u00f2 f\u0101ng m\u00e0o zi\uff0c f\u0101ng m\u00e0o zi c\u00e1i sh\u00ec h\u01ceo m\u00e0o zi\uff0c b\u00f9 n\u00e9ng g\u01cei de\u3002 \u201d",
        "zu\u00f2 m\u00e0o zi de r\u00e9n zu\u00f2 f\u0101ng m\u00e0o zi\uff0c m\u01cei m\u00e0o zi de r\u00e9n m\u01cei f\u0101ng m\u00e0o zi\u3002 t\u0101 men yu\u00e1n yu\u00e1n de n\u01ceo d\u00e0i c\u00e1ng z\u00e0i f\u0101ng m\u00e0o zi l\u01d0\uff0c j\u01d0n de d\u00ec f\u0101ng t\u00e0i j\u01d0n\uff0c ku\u0101n de d\u00ec f\u0101ng t\u00e0i ku\u0101n\uff0c d\u014dng ti\u0101n d\u00e0i zhe b\u00fa t\u00e0i nu\u01cen\uff0c xi\u00e0 ti\u0101n d\u00e0i zhe qu\u00e8 r\u00e8 d\u00e9 m\u01cen t\u00f3u h\u00e0n\u3002 sh\u016b f\u00fa ma\uff1f zh\u0113n b\u00f9 sh\u016b f\u00fa\uff01",
        "xi\u01ceo h\u00e1i zi men ju\u00e9 de f\u0101ng m\u00e0o zi y\u00f2u q\u00ed gu\u00e0i y\u00f2u b\u00f9 sh\u016b f\u00fa\uff0c t\u0101 men xi\u01ceng\uff0c yu\u00e1n yu\u00e1n de t\u00f3u w\u00e8i sh\u00e9n me d\u00e0i f\u0101ng m\u00e0o zi ne\uff1f yu\u00e1n de b\u00f9 x\u00edng ma\uff1f",
        "xi\u01ceo h\u00e1i zi men y\u00f2ng zh\u01d0 zu\u00f2 ch\u016b yu\u00e1n de\u3001 ji\u0101n de\u3001 xi\u0101ng ji\u0101o x\u00edng de m\u00e0o zi\uff0c d\u00e0i z\u00e0i t\u00f3u sh\u00e0ng\uff0c y\u00f2u sh\u016b f\u00fa y\u00f2u pi\u00e0o liang\u3002",
        "h\u00f2u l\u00e1i\uff0c xi\u01ceo h\u00e1i zi men sh\u00e8 f\u01ce zh\u01ceo d\u00e0o y\u00ec xi\u0113 b\u00f9\uff0c sh\u00ec zhe zu\u00f2 le j\u01d0 d\u01d0ng yu\u00e1n m\u00e0o zi\uff0c xi\u00e0ng w\u01cen y\u00ed y\u00e0ng k\u00f2u z\u00e0i t\u00f3u sh\u00e0ng\uff0c h\u011bn sh\u016b f\u00fa\u3002",
        "ji\u0113 sh\u00e0ng r\u00e9n sh\u0101n r\u00e9n h\u01cei\u3002 z\u00e0i m\u00ec m\u00ec m\u00e1 m\u00e1 de f\u0101ng m\u00e0o z\u01d0 zh\u014dng\uff0c h\u016b r\u00e1n ch\u016b xi\u00e0n le j\u01d0 d\u01d0ng yu\u00e1n m\u00e0o zi\uff0c f\u0101ng m\u00e0o zi di\u00e0n de zh\u01d4 r\u00e9n d\u00e0 ch\u012b y\u00ec j\u012bng\u3002",
        "h\u00e1i zi men m\u00e0n m\u00e0n d\u00ec zh\u01ceng d\u00e0 le\uff0c xi\u01ceng ch\u016b le x\u01d4 du\u014d m\u00e0o zi de sh\u00ec y\u00e0ng\uff0c w\u01cen x\u00edng de\u3001 xi\u0101ng ji\u0101o x\u00edng de\u3001 yu\u00e1n t\u01d2ng x\u00edng de\u2026\u2026 xi\u00e0 ti\u0101n d\u00e0i ku\u0101n bi\u0101n de xi\u0101ng ji\u0101o x\u00edng de c\u01ceo m\u00e0o\uff0c d\u014dng ti\u0101n d\u00e0i yu\u00e1n t\u01d2ng x\u00edng de n\u00ed r\u00f3ng m\u00e0o\uff0c ch\u016bn ti\u0101n h\u00e9 qi\u016b ti\u0101n d\u00e0i w\u01cen x\u00edng de b\u00f9 m\u00e0o\u3002",
        "h\u00f2u l\u00e1i\uff0c f\u0101ng m\u00e0o zi di\u00e0n du\u00ec mi\u00e0n\uff0c y\u00f2u k\u0101i le y\u00ec ji\u0101 m\u00e0o z\u01d0 di\u00e0n\uff0c ch\u00fa chu\u0101ng l\u01d0 f\u00e0ng zhe g\u00e8 sh\u00ec g\u00e8 y\u00e0ng de m\u00e0o zi\uff0c qu\u00e8 m\u00e9i y\u01d2u y\u00ec d\u01d0ng sh\u00ec f\u0101ng de\u3002 g\u00f9 k\u00e8 men z\u00e0i li\u01ceng ji\u0101 di\u00e0n m\u00e9n qi\u00e1n k\u00e0n le h\u01ceo ji\u01d4\uff0c zu\u00ec h\u00f2u h\u00e1i sh\u00ec j\u00ecn le x\u012bn m\u00e0o zi di\u00e0n\u3002",
        "r\u00ec zi y\u00ec ti\u0101n ti\u0101n d\u00ec gu\u00f2 q\u00f9\uff0c sh\u00ec ji\u00e8 y\u00ec ti\u0101n ti\u0101n z\u00e0i g\u01cei bi\u00e0n\uff0c n\u00e0 xi\u0113 b\u00f9 sh\u016b f\u00fa de f\u0101ng m\u00e0o zi\uff0c m\u00e0n m\u00e0n d\u00ec ch\u00e9ng w\u00e9i g\u01d4 d\u01d2ng\u3002"
      ],
      recognizeChars: ["橱","改","蕉","扣","嚷","溜","筒","董"],
      vocabWords: [
        {word:'橱窗',pinyin:'chú chuāng',en:'shop window',sentence:'橱窗里放着方帽子。',sentenceEn:'Square hats were displayed in the shop window.'},
        {word:'规矩',pinyin:'guī ju',en:'rule; custom',sentence:'方帽子是老规矩。',sentenceEn:'Square hats were the old custom.'},
        {word:'舒服',pinyin:'shū fu',en:'comfortable',sentence:'圆帽子戴着舒服。',sentenceEn:'Round hats are comfortable to wear.'},
        {word:'密密麻麻',pinyin:'mì mi mā ma',en:'densely packed',sentence:'密密麻麻的人。',sentenceEn:'Densely packed crowds.'},
        {word:'新鲜',pinyin:'xīn xiān',en:'novel; fresh',sentence:'圆帽子是新鲜事物。',sentenceEn:'Round hats were a novelty.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u8fd9\u5bb6\u5e3d\u5b50\u5e97\u4ece\u6765\u6ca1\u6709\u505a\u8fc7\u522b\u7684\u5e3d\u5b50\u3002", exampleEn: "This hat shop had never made any other kind of hat. Their window displayed only ", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u603b\u5206\u7ed3\u6784", pointEn: "General-specific structure", example: "\u8fd9\u5bb6\u5e3d\u5b50\u5e97\u4ece\u6765\u6ca1\u6709\u505a\u8fc7\u522b\u7684\u5e3d\u5b50\u3002", exampleEn: "This hat shop had never made any other kind of hat. Their window displayed only ", explanation: "\u5148\u603b\u8ff0\u518d\u5206\u8ff0\uff0c\u6216\u5148\u5206\u8ff0\u518d\u603b\u7ed3\uff0c\u4f7f\u6587\u7ae0\u6761\u7406\u6e05\u6670", explanationEn: "Start with overview then details, or vice versa, for clear organization"}
      ],
      footnotes: [
        {term:"\u6a71\u7a97", termEn:"shop window", definition:"\u3010ch\u00fa chu\u0101ng\u3011shop window\u3002", definitionEn:"shop window"},
        {term:"\u89c4\u77e9", termEn:"rule; custom", definition:"\u3010gu\u012b ju\u3011rule; custom\u3002", definitionEn:"rule; custom"},
        {term:"\u8212\u670d", termEn:"comfortable", definition:"\u3010sh\u016b fu\u3011comfortable\u3002", definitionEn:"comfortable"},
        {term:"\u5bc6\u5bc6\u9ebb\u9ebb", termEn:"densely packed", definition:"\u3010m\u00ec mi m\u0101 ma\u3011densely packed\u3002", definitionEn:"densely packed"},
        {term:"\u65b0\u9c9c", termEn:"novel; fresh", definition:"\u3010x\u012bn xi\u0101n\u3011novel; fresh\u3002", definitionEn:"novel; fresh"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"默读课文，说说故事中的哪部分内容是你最意想不到的，再用自己的话复述这个部分。",en:"Read silently and describe which part surprised you most, then retell that part in your own words."},
        {type:"think",cn:"方帽子店的主人为什么只做方帽子？这说明了什么道理？",en:"Why did the shop owner only make square hats? What lesson does this teach?"},
        {type:"discuss",cn:"故事告诉我们什么？联系生活实际说一说。",en:"What does the story teach us? Connect it to real life."}
      ],
      teachingPoints: [
        {cn:"故事告诉我们：不能墨守成规，要勇于创新和改变。",en:"The story teaches: don't stick to old rules; be brave to innovate and change."},
        {cn:"注意对比手法：方帽子的不舒服vs圆帽子的舒服。",en:"Notice the contrast technique: square hats' discomfort vs round hats' comfort."},
        {cn:"体会童话的讽刺意味：固守旧规的方帽子店最终被淘汰。",en:"Appreciate the fairy tale's satire: the old-fashioned square hat shop is ultimately eliminated."}
      ],
      parentTips: [
        {cn:"引导孩子思考：生活中有没有像\u201C方帽子\u201D一样不合理但人们习以为常的事？",en:"Guide your child to think: are there unreasonable things in life that people take for granted, like 'square hats'?"},
        {cn:"鼓励孩子用自己的话复述故事中最意想不到的部分。",en:"Encourage your child to retell the most surprising part of the story in their own words."}
      ]
    },
    {
      id: 27, title: "漏", titleEn: "The Leak",
      difficulty: 3,
      text: [
        "从前，有一户人家：一个老公公，一个老婆婆，还喂着一头黑脊背、白胸脯的小胖驴。山上住着一只老虎，山下住着一个贼。老虎嘴馋，一心想着吃这头小胖驴；贼手痒，一心想着偷这头小胖驴。",
        "一天晚上，下着蒙蒙小雨。老虎来了，贼也来了。老虎用爪在墙壁上抓，贼用手在屋顶上挖。忽然，老公公和老婆婆在里屋说起话来，老虎和贼吓得大气都不敢出了。",
        "老公公说：\u201C好像有什么声音在响？\u201D老婆婆说：\u201C唉！管他狼哩，管他虎哩，我什么都不怕，就怕漏！\u201D",
        "老虎趴在驴圈里想：\u201C翻山越岭我什么都见过，就是没见过\u2018漏\u2019，莫非\u2018漏\u2019比我还厉害？\u201D贼蹲在屋顶上想：\u201C走南闯北我什么都听说过，就是没听说过\u2018漏\u2019，莫非\u2018漏\u2019比我还厉害？\u201D",
        "老虎吓得浑身发抖，贼听得腿脚发软。贼心里害怕，脚下一滑，扑通从屋顶的窟窿里跌下来，正巧摔到虎背上。老虎未料到房上会有东西掉下来，心想：\u201C坏事，\u2018漏\u2019捉我来了！\u201D撒腿就往外跑。",
        "贼栽得晕头转向，一摸是个毛乎乎的东西，心想：\u201C坏事，\u2018漏\u2019等着吃我哩！\u201D拼命抱住虎脖子不敢松手。",
        "老虎驮着贼，贼骑着老虎，跑哇，跑哇，累得老虎筋都快断了，颠得贼骨头架都快散了。到了歪脖老树跟前，老虎想把\u201C漏\u201D蹭下来好逃命，贼想蹿上树好逃命。老虎把身子一歪，贼顺势一纵，蹿到树上。",
        "雨越下越大。老虎清醒了许多，想想不甘心，还是要回去吃驴。贼也清醒了许多，想想不甘心，还是要回去偷驴。",
        "老虎走到歪脖老树跟前，贼在下树。贼看见走来一个黑乎乎的东西，心想：\u201C\u2018漏\u2019又来了！\u201D紧爬慢爬，咔嚓一声，树枝断了，一个倒栽葱摔了下来，顺着山坡往下滚。老虎见天上掉下个黑乎乎的东西，心想：\u201C\u2018漏\u2019又来了！\u201D赶紧逃跑，顺着山坡往下滚。",
        "老虎和贼一齐滚下了山坡，浑身沾满泥水，撞在了一块儿。他俩对看了一眼，同时惊恐地大喊：\u201C\u2018漏\u2019哇——\u201D然后都吓昏了过去。",
        "天快亮了，小胖驴在驴圈里安安稳稳地吃着干草。老公公和老婆婆从炕头上坐了起来。滴答，滴答——他们抬头看看屋顶——唉，说怕漏，偏就又漏雨了！"
      ],
      textEn: [
        "Once upon a time, there was a household: an old grandpa, an old grandma, and a chubby little donkey with a black back and white chest. A tiger lived up the mountain, and a thief lived below. The tiger craved the donkey; the thief itched to steal it.",
        "One rainy night, both the tiger and the thief came. The tiger clawed at the wall; the thief dug at the roof. Suddenly, the old couple started talking inside, and both the tiger and the thief held their breath.",
        "Grandpa said: \u201CSeems like something's making noise?\u201D Grandma said: \u201COh! I don't care about wolves or tigers — the only thing I fear is 'the leak'!\u201D",
        "The tiger thought in the donkey pen: \u201CI've crossed mountains and seen everything, but never 'the leak'. Could it be more fearsome than me?\u201D The thief thought on the roof: \u201CI've traveled far and heard of everything, but never 'the leak'. Could it be more fearsome than me?\u201D",
        "The tiger was so frightened that its whole body trembled; the thief heard this and his legs went weak. Terrified in his heart, the thief\u2019s foot slipped, and with a thud he fell down through the hole in the roof, landing right on the tiger\u2019s back. The tiger had not expected anything to drop down from above, and thought: \u201CThis is bad \u2014 \u2018the leak\u2019 has come to catch me!\u201D He took to his heels and bolted.",
        "The dazed thief felt something furry and thought: \u201COh no, 'the leak' is going to eat me!\u201D He clung to the tiger's neck for dear life.",
        "The tiger carried the thief, the thief rode the tiger — running and running until the tiger's legs nearly gave out and the thief's bones nearly fell apart. At a crooked old tree, the tiger tried to scrape off 'the leak', while the thief tried to jump into the tree. The tiger swerved, and the thief swung up into the branches.",
        "The rain grew heavier. The tiger, somewhat recovered, decided to go back for the donkey. The thief, also recovered, decided to go back to steal the donkey.",
        "The tiger approached the crooked tree just as the thief was climbing down. The thief saw something dark approaching — \u201C'The leak' again!\u201D He scrambled up, but crack — the branch broke, and he tumbled down the slope. The tiger saw something dark falling from above — \u201C'The leak' again!\u201D and fled, also tumbling down the slope.",
        "Tiger and thief rolled down the slope together, covered in mud. They looked at each other and screamed: \u201C'The leak'!\u201D — then both fainted from fright.",
        "Near dawn, the chubby little donkey was calmly eating hay in its pen. The old couple sat up in bed. Drip, drip — they looked up at the roof — sigh, they were afraid of a leak, and now the roof was leaking again!"
      ],
      textPinyin: [
        "c\u00f3ng qi\u00e1n\uff0c y\u01d2u y\u00ed h\u00f9 r\u00e9n ji\u0101\uff1a y\u00ed g\u00e8 l\u01ceo g\u014dng gong\uff0c y\u00ed g\u00e8 l\u01ceo p\u00f3 po\uff0c h\u00e1i w\u00e8i zhe y\u00ec t\u00f3u h\u0113i j\u01d0 b\u00e8i\u3001 b\u00e1i xi\u014dng p\u00fa de xi\u01ceo p\u00e0ng l\u01d8\u3002 sh\u0101n sh\u00e0ng zh\u00f9 zhe y\u00ec zh\u012b l\u01ceo h\u01d4\uff0c sh\u0101n xi\u00e0 zh\u00f9 zhe y\u00ed g\u00e8 z\u00e9i\u3002 l\u01ceo h\u01d4 zu\u01d0 ch\u00e1n\uff0c y\u00ec x\u012bn xi\u01ceng zhe ch\u012b zh\u00e8 t\u00f3u xi\u01ceo p\u00e0ng l\u01d8\uff1b z\u00e9i sh\u01d2u y\u01ceng\uff0c y\u00ec x\u012bn xi\u01ceng zhe t\u014du zh\u00e8 t\u00f3u xi\u01ceo p\u00e0ng l\u01d8\u3002",
        "y\u00ec ti\u0101n w\u01cen sh\u00e0ng\uff0c xi\u00e0 zhe m\u00e9ng m\u00e9ng xi\u01ceo y\u01d4\u3002 l\u01ceo h\u01d4 l\u00e1i le\uff0c z\u00e9i y\u011b l\u00e1i le\u3002 l\u01ceo h\u01d4 y\u00f2ng zhu\u01ce z\u00e0i qi\u00e1ng b\u00ec sh\u00e0ng zhu\u0101\uff0c z\u00e9i y\u00f2ng sh\u01d2u z\u00e0i w\u016b d\u01d0ng sh\u00e0ng w\u0101\u3002 h\u016b r\u00e1n\uff0c l\u01ceo g\u014dng gong h\u00e9 l\u01ceo p\u00f3 po z\u00e0i l\u01d0 w\u016b shu\u014d q\u01d0 hu\u00e0 l\u00e1i\uff0c l\u01ceo h\u01d4 h\u00e9 z\u00e9i xi\u00e0 d\u00e9 d\u00e0 q\u00ec d\u014du b\u00f9 g\u01cen ch\u016b le\u3002",
        "l\u01ceo g\u014dng gong shu\u014d\uff1a \u201c h\u01ceo xi\u00e0ng y\u01d2u sh\u00e9n me sh\u0113ng y\u012bn z\u00e0i xi\u01ceng\uff1f \u201d l\u01ceo p\u00f3 po shu\u014d\uff1a \u201c \u00e0i\uff01 gu\u01cen t\u0101 l\u00e1ng l\u012b\uff0c gu\u01cen t\u0101 h\u01d4 l\u012b\uff0c w\u01d2 sh\u00e9n me d\u014du b\u00fa p\u00e0\uff0c ji\u00f9 p\u00e0 l\u00f2u\uff01 \u201d",
        "l\u01ceo h\u01d4 p\u0101 z\u00e0i l\u01d8 qu\u0101n l\u01d0 xi\u01ceng\uff1a \u201c f\u0101n sh\u0101n yu\u00e8 l\u01d0ng w\u01d2 sh\u00e9n me d\u014du ji\u00e0n gu\u00f2\uff0c ji\u00f9 sh\u00ec m\u00e9i ji\u00e0n gu\u00f2 \u2018 l\u00f2u \u2019\uff0c m\u00f2 f\u0113i \u2018 l\u00f2u \u2019 b\u01d0 w\u01d2 h\u00e1i l\u00ec h\u00e0i\uff1f \u201d z\u00e9i d\u016bn z\u00e0i w\u016b d\u01d0ng sh\u00e0ng xi\u01ceng\uff1a \u201c z\u01d2u n\u00e1n chu\u01ceng b\u011bi w\u01d2 sh\u00e9n me d\u014du t\u012bng shu\u014d gu\u00f2\uff0c ji\u00f9 sh\u00ec m\u00e9i t\u012bng shu\u014d gu\u00f2 \u2018 l\u00f2u \u2019\uff0c m\u00f2 f\u0113i \u2018 l\u00f2u \u2019 b\u01d0 w\u01d2 h\u00e1i l\u00ec h\u00e0i\uff1f \u201d",
        "l\u01ceo h\u01d4 xi\u00e0 d\u00e9 h\u00fan sh\u0113n f\u0101 d\u01d2u\uff0c z\u00e9i t\u012bng d\u00e9 tu\u01d0 ji\u01ceo f\u0101 ru\u01cen\u3002 z\u00e9i x\u012bn l\u01d0 h\u00e0i p\u00e0\uff0c ji\u01ceo xi\u00e0 y\u00ec hu\u00e1\uff0c p\u016b t\u014dng c\u00f3ng w\u016b d\u01d0ng de k\u016b l\u00f3ng l\u01d0 di\u0113 xi\u00e0 l\u00e1i\uff0c zh\u00e8ng qi\u01ceo shu\u0101i d\u00e0o h\u01d4 b\u00e8i sh\u00e0ng\u3002 l\u01ceo h\u01d4 w\u00e8i li\u00e0o d\u00e0o f\u00e1ng sh\u00e0ng hu\u00ec y\u01d2u d\u014dng x\u012b di\u00e0o xi\u00e0 l\u00e1i\uff0c x\u012bn xi\u01ceng\uff1a \u201c hu\u00e0i sh\u00ec\uff0c \u2018 l\u00f2u \u2019 zhu\u014d w\u01d2 l\u00e1i le\uff01 \u201d s\u0101 tu\u01d0 ji\u00f9 w\u01ceng w\u00e0i p\u01ceo\u3002",
        "z\u00e9i z\u0101i d\u00e9 y\u016bn t\u00f3u zhu\u00e0n xi\u00e0ng\uff0c y\u00ec m\u014d sh\u00ec g\u00e8 m\u00e1o h\u016b h\u016b de d\u014dng x\u012b\uff0c x\u012bn xi\u01ceng\uff1a \u201c hu\u00e0i sh\u00ec\uff0c \u2018 l\u00f2u \u2019 d\u011bng zhe ch\u012b w\u01d2 l\u012b\uff01 \u201d p\u012bn m\u00ecng b\u00e0o zh\u00f9 h\u01d4 b\u00f3 zi b\u00f9 g\u01cen s\u014dng sh\u01d2u\u3002",
        "l\u01ceo h\u01d4 tu\u00f3 zhe z\u00e9i\uff0c z\u00e9i q\u00ed zhe l\u01ceo h\u01d4\uff0c p\u01ceo w\u0101\uff0c p\u01ceo w\u0101\uff0c l\u00e8i d\u00e9 l\u01ceo h\u01d4 j\u012bn d\u014du ku\u00e0i du\u00e0n le\uff0c di\u0101n d\u00e9 z\u00e9i g\u01d4 tou ji\u00e0 d\u014du ku\u00e0i s\u00e0n le\u3002 d\u00e0o le w\u0101i b\u00f3 l\u01ceo sh\u00f9 g\u0113n qi\u00e1n\uff0c l\u01ceo h\u01d4 xi\u01ceng b\u01ce \u201c l\u00f2u \u201d c\u00e8ng xi\u00e0 l\u00e1i h\u01ceo t\u00e1o m\u00ecng\uff0c z\u00e9i xi\u01ceng cu\u0101n sh\u00e0ng sh\u00f9 h\u01ceo t\u00e1o m\u00ecng\u3002 l\u01ceo h\u01d4 b\u01ce sh\u0113n zi y\u00ec w\u0101i\uff0c z\u00e9i sh\u00f9n sh\u00ec y\u00ed z\u00f2ng\uff0c cu\u0101n d\u00e0o sh\u00f9 sh\u00e0ng\u3002",
        "y\u01d4 yu\u00e8 xi\u00e0 yu\u00e8 d\u00e0\u3002 l\u01ceo h\u01d4 q\u012bng x\u01d0ng le x\u01d4 du\u014d\uff0c xi\u01ceng xi\u01ceng b\u00f9 g\u0101n x\u012bn\uff0c h\u00e1i sh\u00ec y\u00e0o hu\u00ed q\u00f9 ch\u012b l\u01d8\u3002 z\u00e9i y\u011b q\u012bng x\u01d0ng le x\u01d4 du\u014d\uff0c xi\u01ceng xi\u01ceng b\u00f9 g\u0101n x\u012bn\uff0c h\u00e1i sh\u00ec y\u00e0o hu\u00ed q\u00f9 t\u014du l\u01d8\u3002",
        "l\u01ceo h\u01d4 z\u01d2u d\u00e0o w\u0101i b\u00f3 l\u01ceo sh\u00f9 g\u0113n qi\u00e1n\uff0c z\u00e9i z\u00e0i xi\u00e0 sh\u00f9\u3002 z\u00e9i k\u00e0n ji\u00e0n z\u01d2u l\u00e1i y\u00ed g\u00e8 h\u0113i h\u016b h\u016b de d\u014dng x\u012b\uff0c x\u012bn xi\u01ceng\uff1a \u201c \u2018 l\u00f2u \u2019 y\u00f2u l\u00e1i le\uff01 \u201d j\u01d0n p\u00e1 m\u00e0n p\u00e1\uff0c k\u0101 ch\u0101 y\u00ec sh\u0113ng\uff0c sh\u00f9 zh\u012b du\u00e0n le\uff0c y\u00ed g\u00e8 d\u01ceo z\u0101i c\u014dng shu\u0101i le xi\u00e0 l\u00e1i\uff0c sh\u00f9n zhe sh\u0101n p\u014d w\u01ceng xi\u00e0 g\u01d4n\u3002 l\u01ceo h\u01d4 ji\u00e0n ti\u0101n sh\u00e0ng di\u00e0o xi\u00e0 g\u00e8 h\u0113i h\u016b h\u016b de d\u014dng x\u012b\uff0c x\u012bn xi\u01ceng\uff1a \u201c \u2018 l\u00f2u \u2019 y\u00f2u l\u00e1i le\uff01 \u201d g\u01cen j\u01d0n t\u00e1o p\u01ceo\uff0c sh\u00f9n zhe sh\u0101n p\u014d w\u01ceng xi\u00e0 g\u01d4n\u3002",
        "l\u01ceo h\u01d4 h\u00e9 z\u00e9i y\u00ec q\u00ed g\u01d4n xi\u00e0 le sh\u0101n p\u014d\uff0c h\u00fan sh\u0113n zh\u0101n m\u01cen n\u00ed shu\u01d0\uff0c zhu\u00e0ng z\u00e0i le y\u00ed ku\u00e0i \u00e9r\u3002 t\u0101 li\u01ce du\u00ec k\u00e0n le y\u00ec y\u01cen\uff0c t\u00f3ng sh\u00ed j\u012bng k\u01d2ng d\u00ec d\u00e0 h\u01cen\uff1a \u201c \u2018 l\u00f2u \u2019 w\u0101\u2014\u2014 \u201d r\u00e1n h\u00f2u d\u014du xi\u00e0 h\u016bn le gu\u00f2 q\u00f9\u3002",
        "ti\u0101n ku\u00e0i li\u00e0ng le\uff0c xi\u01ceo p\u00e0ng l\u01d8 z\u00e0i l\u01d8 qu\u0101n l\u01d0 \u0101n \u0101n w\u011bn w\u011bn d\u00ec ch\u012b zhe g\u0101n c\u01ceo\u3002 l\u01ceo g\u014dng gong h\u00e9 l\u01ceo p\u00f3 po c\u00f3ng k\u00e0ng t\u00f3u sh\u00e0ng zu\u00f2 le q\u01d0 l\u00e1i\u3002 d\u012b d\u00e1\uff0c d\u012b d\u00e1\u2014\u2014 t\u0101 men t\u00e1i t\u00f3u k\u00e0n k\u00e0n w\u016b d\u01d0ng\u2014\u2014 \u00e0i\uff0c shu\u014d p\u00e0 l\u00f2u\uff0c pi\u0101n ji\u00f9 y\u00f2u l\u00f2u y\u01d4 le\uff01"
      ],
      recognizeChars: ["婆","脊","贼","哩","莫","颠","胶","旋","纵"],
      writeChars: ["漏","喂","胖","驴","贼","狼","莫","厉","抱","架","胶","粘","偏"],
      vocabWords: [
        {word:'贼',pinyin:'zéi',en:'thief',sentence:'有个贼想偷驴。',sentenceEn:'A thief wanted to steal the donkey.'},
        {word:'颠簸',pinyin:'diān bǒ',en:'bump; jolt',sentence:'老虎驮着贼在山路上颠簸。',sentenceEn:'The tiger carried the thief bumping along the mountain road.'},
        {word:'粘胶',pinyin:'nián jiāo',en:'sticky',sentence:'被吓得浑身粘胶似的。',sentenceEn:'Scared until sticky all over.'},
        {word:'厉害',pinyin:'lì hai',en:'powerful; formidable',sentence:'漏比老虎还厉害。',sentenceEn:'The Leak is more formidable than a tiger.'},
        {word:'惊恐',pinyin:'jīng kǒng',en:'terrified',sentence:'贼和老虎都惊恐万分。',sentenceEn:'Both the thief and tiger were terrified.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u4ece\u524d\uff0c\u6709\u4e00\u6237\u4eba\u5bb6\uff1a\u4e00\u4e2a\u8001\u516c\u516c\uff0c\u4e00\u4e2a\u8001\u5a46\u5a46\uff0c\u8fd8\u5582\u7740\u4e00\u5934\u9ed1\u810a\u80cc\u3001\u767d\u80f8\u812f\u7684\u5c0f\u80d6\u9a74\u3002", exampleEn: "Once upon a time, there was a household: an old grandpa, an old grandma, and a c", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u628a\u5b57\u53e5", pointEn: "b\u01ce-construction", example: "\u4ece\u524d\uff0c\u6709\u4e00\u6237\u4eba\u5bb6\uff1a\u4e00\u4e2a\u8001\u516c\u516c\uff0c\u4e00\u4e2a\u8001\u5a46\u5a46\uff0c\u8fd8\u5582\u7740\u4e00\u5934\u9ed1\u810a\u80cc\u3001\u767d\u80f8\u812f\u7684\u5c0f\u80d6\u9a74\u3002", exampleEn: "Once upon a time, there was a household: an old grandpa, an old grandma, and a c", explanation: "\u7528\u201c\u628a\u201d\u5c06\u5bbe\u8bed\u63d0\u524d\uff0c\u5f3a\u8c03\u52a8\u4f5c\u5bf9\u5bf9\u8c61\u7684\u5f71\u54cd", explanationEn: "Moves the object before the verb using \"b\u01ce\" to emphasize the effect of the action"}
      ],
      footnotes: [
        {term:"\u8d3c", termEn:"thief", definition:"\u3010z\u00e9i\u3011thief\u3002", definitionEn:"thief"},
        {term:"\u98a0\u7c38", termEn:"bump; jolt", definition:"\u3010di\u0101n b\u01d2\u3011bump; jolt\u3002", definitionEn:"bump; jolt"},
        {term:"\u7c98\u80f6", termEn:"sticky", definition:"\u3010ni\u00e1n ji\u0101o\u3011sticky\u3002", definitionEn:"sticky"},
        {term:"\u5389\u5bb3", termEn:"powerful; formidable", definition:"\u3010l\u00ec hai\u3011powerful; formidable\u3002", definitionEn:"powerful; formidable"},
        {term:"\u60ca\u6050", termEn:"terrified", definition:"\u3010j\u012bng k\u01d2ng\u3011terrified\u3002", definitionEn:"terrified"}
      ],
      readingTips: [
        {cn:"\u8fd9\u7bc7\u6587\u7ae0\u8f83\u957f\uff0c\u5efa\u8bae\u5206\u6bb5\u9605\u8bfb\u3002\u6bcf\u8bfb\u5b8c\u4e00\u6bb5\uff0c\u505c\u4e0b\u6765\u60f3\u60f3\u8fd9\u6bb5\u7684\u4e3b\u8981\u5185\u5bb9\u3002", en:"This is a longer text. Read it paragraph by paragraph, pausing after each to think about the main idea."},
        {cn:"\u8bfb\u5b8c\u5168\u6587\u540e\uff0c\u8bd5\u7740\u7528\u4e00\u53e5\u8bdd\u6982\u62ec\u6587\u7ae0\u7684\u4e2d\u5fc3\u601d\u60f3\u3002", en:"After reading the whole text, try to summarize the central idea in one sentence."}
      ],
      exercises: [
        {type:"read",cn:"默读课文，说说故事中的哪些内容你觉得最有意思。",en:"Read silently and share which parts you find most interesting."},
        {type:"retell",cn:"借助示意图和文字提示，按照地点变化的顺序，复述这个故事。",en:"Using a diagram and text prompts, retell the story in order of location changes."},
        {type:"read",cn:"选择喜欢的部分，和同学分角色朗读，体会故事的趣味。",en:"Choose your favorite part and read with assigned roles to feel the story's humor."}
      ],
      teachingPoints: [
        {cn:"故事以\u201C漏\u201D这个双关词（漏雨/可怕的东西）制造了误会和笑料。",en:"The story creates misunderstanding and humor through the pun on 'leak' (roof leak / fearsome creature)."},
        {cn:"学习按地点变化复述故事：驴圈→歪脖老树→山坡→驴圈。",en:"Learn to retell stories by location changes: donkey pen, crooked tree, slope, donkey pen."},
        {cn:"这是一个民间故事，语言朴素幽默，充满智慧。",en:"This is a folk tale with simple, humorous language full of wisdom."}
      ],
      parentTips: [
        {cn:"和孩子一起朗读这个故事，体会民间故事的趣味和智慧。",en:"Read this story together to enjoy the humor and wisdom of folk tales."},
        {cn:"引导孩子用示意图帮助复述，锻炼叙事能力。",en:"Guide your child to use diagrams for retelling to develop narrative skills."}
      ]
    },
    {
      id: 28, title: "枣核", titleEn: "Date Pit",
      difficulty: 3,
      isSelfRead: true,
      text: [
        "古时候，在山脚下的一个村庄里有一户人家。家里只有夫妻两个人，他们成天盼着要个小孩，常常叹着气说：\u201C咱哪怕有个枣核那么大的孩子也好哇！\u201D没想到说了这个话不久，果然生了一个枣核那么大的孩子。夫妻俩欢喜得很，给孩子起了个名叫\u201C枣核\u201D。",
        "一年又一年，枣核一点儿也不见长。爹说：\u201C枣核呀，你真叫我白欢喜了一场！\u201D娘说：\u201C枣核呀，你一点儿不见长，我真为你愁得慌！\u201D枣核说：\u201C爹、娘，你们不用愁，别看我人小，一样能做事情。\u201D",
        "枣核很勤快，天天干活，学了很多的本领。他能扶犁，能赶驴，柴比别人打得多，因为别人上不去的地方他也能上去，他一蹦就能蹦到屋脊那么高。邻居们都夸枣核，枣核的爹娘非常高兴。",
        "枣核不光勤快，也很聪明。有一年大旱，庄稼没收成，县衙门还派衙役向庄稼人要官粮。庄稼人纳不上粮，衙役就把牛、驴都牵走了。",
        "牵走了牛、驴，大伙儿愁得很。枣核说：\u201C大家都不用愁，我有办法！\u201D",
        "到了晚上，枣核跑到县衙门拴牛、驴的院子外面，一蹦蹦进院子里。等衙役们睡着了，枣核解开缰绳，又一蹦蹦到驴耳朵里，\u201C哦喝！哦喝！\u201D大声吆喝着赶驴。衙役们从梦里跳了起来，到处搜人，什么也没搜着。",
        "折腾了大半夜，衙役们困得很，刚刚躺下，又听到了吆喝声。这时候枣核从驴耳朵里跳了出来，把门打开，赶着牲口回到了村子。",
        "天一亮，县官就带着衙役去捉人。枣核蹦出来说：\u201C牲口是我牵的，你们要怎么样？\u201D县官叫绑起来，衙役们拿出铁链来绑枣核，噗的一声，枣核从铁链缝里蹦了出来，站在那里哈哈大笑。",
        "县官说：\u201C把他塞进钱褡里，背到大堂去！给我打！\u201D衙役们打这面，枣核蹦到那面去，打那面，枣核蹦到这面来，怎么也打不着。",
        "枣核这次不往别处蹦，一蹦蹦到了县官的胡子上，抓着胡子荡秋千。县官直喊：\u201C快打！快打！\u201D衙役一棍子打下去，没打着枣核，却打着县官的下巴骨啦，把县官的牙都打了下来。满堂的人慌了起来，枣核大摇大摆地走了。"
      ],
      textEn: [
        "Long ago, in a village at the foot of a mountain, there was a family. There were only the husband and wife, just the two of them. All day long they wished for a child, and they would often sigh and say: \u201CIf only we could have a child, even one as small as a date pit, that would be wonderful!\u201D Unexpectedly, not long after they said this, they indeed gave birth to a child the size of a date pit. The couple was overjoyed, and they gave the child the name \u201CDate Pit.\u201D",
        "Year after year, Date Pit didn't grow at all. His father said: \u201CDate Pit, you got my hopes up for nothing!\u201D His mother said: \u201CDate Pit, you're not growing at all — I'm so worried!\u201D Date Pit replied: \u201CMom, Dad, don't worry. I may be small, but I can do things just the same.\u201D",
        "Date Pit was very diligent, working every day and learning many skills. He could guide a plow, herd donkeys, and gather more firewood than anyone, because he could reach places others couldn't — he could bounce as high as a rooftop. The neighbors all praised Date Pit, and his parents were very proud.",
        "Date Pit was not only diligent but also clever. One drought year, crops failed, yet the county magistrate sent officers to collect grain taxes. When farmers couldn't pay, the officers confiscated their cattle and donkeys.",
        "With the cattle and donkeys led away, everyone was terribly worried. Date Pit said: \u201CNone of you need to worry \u2014 I have a plan!\u201D",
        "That night, Date Pit bounced into the magistrate's yard where the animals were tied. When the officers fell asleep, he untied the ropes, bounced into a donkey's ear, and shouted: \u201CHey-ho! Hey-ho!\u201D driving the donkeys out. The officers leaped up and searched everywhere but found no one.",
        "After half the night's commotion, the exhausted officers lay down again — only to hear the shouting again. Date Pit jumped out of the donkey's ear, opened the gate, and drove the animals back to the village.",
        "At dawn, the magistrate led his officers to make arrests. Date Pit bounced out: \u201CI took the animals. What are you going to do about it?\u201D They tried to chain him, but — pop — he slipped right through the chain links, laughing.",
        "The magistrate ordered him stuffed in a money bag and beaten in court. But wherever they struck, Date Pit bounced to the other side — they couldn't hit him at all.",
        "This time Date Pit bounced right onto the magistrate's beard, swinging like a pendulum. \u201CHit him! Hit him!\u201D the magistrate yelled. An officer swung his stick — missed Date Pit — and smashed the magistrate's jaw, knocking out his teeth. The whole court panicked, and Date Pit strolled away proudly."
      ],
      textPinyin: [
        "g\u01d4 sh\u00ed h\u00f2u\uff0c z\u00e0i sh\u0101n ji\u01ceo xi\u00e0 de y\u00ed g\u00e8 c\u016bn zhu\u0101ng l\u01d0 y\u01d2u y\u00ed h\u00f9 r\u00e9n ji\u0101\u3002 ji\u0101 l\u01d0 zh\u01d0 y\u01d2u f\u016b q\u012b li\u01ceng g\u00e8 r\u00e9n\uff0c t\u0101 men ch\u00e9ng ti\u0101n p\u00e0n zhe y\u00e0o g\u00e8 xi\u01ceo h\u00e1i\uff0c ch\u00e1ng ch\u00e1ng t\u00e0n zhe q\u00ec shu\u014d\uff1a \u201c z\u00e1n n\u01ce p\u00e0 y\u01d2u g\u00e8 z\u01ceo h\u00e9 n\u00e0 me d\u00e0 de h\u00e1i zi y\u011b h\u01ceo w\u0101\uff01 \u201d m\u00e9i xi\u01ceng d\u00e0o shu\u014d le zh\u00e8 ge hu\u00e0 b\u00f9 ji\u01d4\uff0c gu\u01d2 r\u00e1n sh\u0113ng le y\u00ed g\u00e8 z\u01ceo h\u00e9 n\u00e0 me d\u00e0 de h\u00e1i zi\u3002 f\u016b q\u012b li\u01ce hu\u0101n x\u01d0 d\u00e9 h\u011bn\uff0c g\u011bi h\u00e1i zi q\u01d0 le g\u00e8 m\u00edng ji\u00e0o \u201c z\u01ceo h\u00e9 \u201d\u3002",
        "y\u00ec ni\u00e1n y\u00f2u y\u00ec ni\u00e1n\uff0c z\u01ceo h\u00e9 y\u00ec di\u01cen \u00e9r y\u011b b\u00fa ji\u00e0n ch\u00e1ng\u3002 di\u0113 shu\u014d\uff1a \u201c z\u01ceo h\u00e9 ya\uff0c n\u01d0 zh\u0113n ji\u00e0o w\u01d2 b\u00e1i hu\u0101n x\u01d0 le y\u00ec ch\u01ceng\uff01 \u201d ni\u00e1ng shu\u014d\uff1a \u201c z\u01ceo h\u00e9 ya\uff0c n\u01d0 y\u00ec di\u01cen \u00e9r b\u00fa ji\u00e0n ch\u00e1ng\uff0c w\u01d2 zh\u0113n w\u00e8i n\u01d0 ch\u00f3u d\u00e9 hu\u0101ng\uff01 \u201d z\u01ceo h\u00e9 shu\u014d\uff1a \u201c di\u0113\u3001 ni\u00e1ng\uff0c n\u01d0 men b\u00fa y\u00f2ng ch\u00f3u\uff0c bi\u00e9 k\u00e0n w\u01d2 r\u00e9n xi\u01ceo\uff0c y\u00ed y\u00e0ng n\u00e9ng zu\u00f2 sh\u00ec q\u00edng\u3002 \u201d",
        "z\u01ceo h\u00e9 h\u011bn q\u00edn ku\u00e0i\uff0c ti\u0101n ti\u0101n g\u00e0n hu\u00f3\uff0c xu\u00e9 le h\u011bn du\u014d de b\u011bn l\u01d0ng\u3002 t\u0101 n\u00e9ng f\u00fa l\u00ed\uff0c n\u00e9ng g\u01cen l\u01d8\uff0c ch\u00e1i b\u01d0 bi\u00e9 r\u00e9n d\u01ce d\u00e9 du\u014d\uff0c y\u012bn w\u00e8i bi\u00e9 r\u00e9n sh\u00e0ng b\u00fa q\u00f9 de d\u00ec f\u0101ng t\u0101 y\u011b n\u00e9ng sh\u00e0ng q\u00f9\uff0c t\u0101 y\u00ed b\u00e8ng ji\u00f9 n\u00e9ng b\u00e8ng d\u00e0o w\u016b j\u01d0 n\u00e0 me g\u0101o\u3002 l\u00edn j\u016b men d\u014du ku\u0101 z\u01ceo h\u00e9\uff0c z\u01ceo h\u00e9 de di\u0113 ni\u00e1ng f\u0113i ch\u00e1ng g\u0101o x\u00ecng\u3002",
        "z\u01ceo h\u00e9 b\u00f9 gu\u0101ng q\u00edn ku\u00e0i\uff0c y\u011b h\u011bn c\u014dng ming\u3002 y\u01d2u y\u00ec ni\u00e1n d\u00e0 h\u00e0n\uff0c zhu\u0101ng jia m\u00f2 sh\u014du ch\u00e9ng\uff0c xi\u00e0n y\u00e1 m\u00e9n h\u00e1i p\u00e0i y\u00e1 y\u00ec xi\u00e0ng zhu\u0101ng ji\u00e0 r\u00e9n y\u00e0o gu\u0101n li\u00e1ng\u3002 zhu\u0101ng jia r\u00e9n n\u00e0 b\u00fa sh\u00e0ng li\u00e1ng\uff0c y\u00e1 y\u00ec ji\u00f9 b\u01ce ni\u00fa\u3001 l\u01d8 d\u014du qi\u0101n z\u01d2u le\u3002",
        "qi\u0101n z\u01d2u le ni\u00fa\u3001 l\u01d8\uff0c d\u00e0 hu\u01d2 \u00e9r ch\u00f3u d\u00e9 h\u011bn\u3002 z\u01ceo h\u00e9 shu\u014d\uff1a \u201c d\u00e0 ji\u0101 d\u014du b\u00fa y\u00f2ng ch\u00f3u\uff0c w\u01d2 y\u01d2u b\u00e0n f\u01ce\uff01 \u201d",
        "d\u00e0o le w\u01cen sh\u00e0ng\uff0c z\u01ceo h\u00e9 p\u01ceo d\u00e0o xi\u00e0n y\u00e1 m\u00e9n shu\u0101n ni\u00fa\u3001 l\u01d8 de yu\u00e0n z\u01d0 w\u00e0i mi\u00e0n\uff0c y\u00ed b\u00e8ng b\u00e8ng j\u00ecn yu\u00e0n zi l\u01d0\u3002 d\u011bng y\u00e1 y\u00ec men shu\u00ec zh\u00e1o le\uff0c z\u01ceo h\u00e9 ji\u011b k\u0101i ji\u0101ng sh\u00e9ng\uff0c y\u00f2u y\u00ed b\u00e8ng b\u00e8ng d\u00e0o l\u01d8 \u011br duo l\u01d0\uff0c \u201c \u00f2 h\u0113\uff01 \u00f2 h\u0113\uff01 \u201d d\u00e0 sh\u0113ng y\u0101o he zhe g\u01cen l\u01d8\u3002 y\u00e1 y\u00ec men c\u00f3ng m\u00e8ng l\u01d0 ti\u00e0o le q\u01d0 l\u00e1i\uff0c d\u00e0o ch\u00f9 s\u014du r\u00e9n\uff0c sh\u00e9n me y\u011b m\u00e9i s\u014du zhe\u3002",
        "zh\u0113 teng le d\u00e0 b\u00e0n y\u00e8\uff0c y\u00e1 y\u00ec men k\u00f9n d\u00e9 h\u011bn\uff0c g\u0101ng g\u0101ng t\u01ceng xi\u00e0\uff0c y\u00f2u t\u012bng d\u00e0o le y\u0101o he sh\u0113ng\u3002 zh\u00e8 sh\u00ed h\u00f2u z\u01ceo h\u00e9 c\u00f3ng l\u01d8 \u011br duo l\u01d0 ti\u00e0o le ch\u016b l\u00e1i\uff0c b\u01ce m\u00e9n d\u01ce k\u0101i\uff0c g\u01cen zhe sh\u0113ng k\u01d2u hu\u00ed d\u00e0o le c\u016bn z\u01d0\u3002",
        "ti\u0101n y\u00ed li\u00e0ng\uff0c xi\u00e0n gu\u0101n ji\u00f9 d\u00e0i zhe y\u00e1 y\u00ec q\u00f9 zhu\u014d r\u00e9n\u3002 z\u01ceo h\u00e9 b\u00e8ng ch\u016b l\u00e1i shu\u014d\uff1a \u201c sh\u0113ng k\u01d2u sh\u00ec w\u01d2 qi\u0101n de\uff0c n\u01d0 men y\u00e0o z\u011bn me y\u00e0ng\uff1f \u201d xi\u00e0n gu\u0101n ji\u00e0o b\u01ceng q\u01d0 l\u00e1i\uff0c y\u00e1 y\u00ec men n\u00e1 ch\u016b ti\u011b li\u00e0n l\u00e1i b\u01ceng z\u01ceo h\u00e9\uff0c p\u016b de y\u00ec sh\u0113ng\uff0c z\u01ceo h\u00e9 c\u00f3ng ti\u011b li\u00e0n f\u00e8ng l\u01d0 b\u00e8ng le ch\u016b l\u00e1i\uff0c zh\u00e0n z\u00e0i n\u00e0 l\u01d0 h\u0101 h\u0101 d\u00e0 xi\u00e0o\u3002",
        "xi\u00e0n gu\u0101n shu\u014d\uff1a \u201c b\u01ce t\u0101 s\u0101i j\u00ecn qi\u00e1n d\u0101 l\u01d0\uff0c b\u00e8i d\u00e0o d\u00e0 t\u00e1ng q\u00f9\uff01 g\u011bi w\u01d2 d\u01ce\uff01 \u201d y\u00e1 y\u00ec men d\u01ce zh\u00e8 mi\u00e0n\uff0c z\u01ceo h\u00e9 b\u00e8ng d\u00e0o n\u00e0 mi\u00e0n q\u00f9\uff0c d\u01ce n\u00e0 mi\u00e0n\uff0c z\u01ceo h\u00e9 b\u00e8ng d\u00e0o zh\u00e8 mi\u00e0n l\u00e1i\uff0c z\u011bn me y\u011b d\u01ce b\u00f9 zhe\u3002",
        "z\u01ceo h\u00e9 zh\u00e8 c\u00ec b\u00f9 w\u01ceng bi\u00e9 ch\u00f9 b\u00e8ng\uff0c y\u00ed b\u00e8ng b\u00e8ng d\u00e0o le xi\u00e0n gu\u0101n de h\u00fa zi sh\u00e0ng\uff0c zhu\u0101 zhe h\u00fa z\u01d0 d\u00e0ng qi\u016b qi\u0101n\u3002 xi\u00e0n gu\u0101n zh\u00ed h\u01cen\uff1a \u201c ku\u00e0i d\u01ce\uff01 ku\u00e0i d\u01ce\uff01 \u201d y\u00e1 y\u00ec y\u00ed g\u00f9n zi d\u01ce xi\u00e0 q\u00f9\uff0c m\u00e9i d\u01ce zhe z\u01ceo h\u00e9\uff0c qu\u00e8 d\u01ce zhe xi\u00e0n gu\u0101n de xi\u00e0 b\u0101 g\u01d4 l\u0101\uff0c b\u01ce xi\u00e0n gu\u0101n de y\u00e1 d\u014du d\u01ce le xi\u00e0 l\u00e1i\u3002 m\u01cen t\u00e1ng de r\u00e9n hu\u0101ng le q\u01d0 l\u00e1i\uff0c z\u01ceo h\u00e9 d\u00e0 y\u00e1o d\u00e0 b\u01cei d\u00ec z\u01d2u le\u3002"
      ],
      recognizeChars: ["枣","核","妻","爹","犁","聪","折","困","牲","府","罢","涨"],
      vocabWords: [
        {word:'枣核',pinyin:'zǎo hé',en:'date pit',sentence:'那孩子长得只有枣核那么大。',sentenceEn:'The child was only as big as a date pit.'},
        {word:'勤快',pinyin:'qín kuài',en:'diligent; hardworking',sentence:'枣核非常勤快。',sentenceEn:'Date Pit was very diligent.'},
        {word:'本领',pinyin:'běn lǐng',en:'skill; ability',sentence:'枣核有大本领。',sentenceEn:'Date Pit had great skills.'},
        {word:'官府',pinyin:'guān fǔ',en:'government office',sentence:'县官派人来抢东西。',sentenceEn:'The county magistrate sent people to steal things.'},
        {word:'机灵',pinyin:'jī ling',en:'clever; quick-witted',sentence:'枣核非常机灵。',sentenceEn:'Date Pit was very clever.'}
      ],
      grammarPoints: [
        {point: "\u56e0\u4e3a\u2026\u2026\u6240\u4ee5\u2026\u2026", pointEn: "because...therefore...", example: "\u53e4\u65f6\u5019\uff0c\u5728\u5c71\u811a\u4e0b\u7684\u4e00\u4e2a\u6751\u5e84\u91cc\u6709\u4e00\u6237\u4eba\u5bb6\u3002", exampleEn: "Long ago, in a village at the foot of a mountain, there was a family. There were", explanation: "\u56e0\u679c\u590d\u53e5\uff0c\u8868\u793a\u539f\u56e0\u548c\u7ed3\u679c\u7684\u5173\u7cfb", explanationEn: "Causal compound sentence expressing cause and effect"},
        {point: "\u628a\u5b57\u53e5", pointEn: "b\u01ce-construction", example: "\u53e4\u65f6\u5019\uff0c\u5728\u5c71\u811a\u4e0b\u7684\u4e00\u4e2a\u6751\u5e84\u91cc\u6709\u4e00\u6237\u4eba\u5bb6\u3002", exampleEn: "Long ago, in a village at the foot of a mountain, there was a family. There were", explanation: "\u7528\u201c\u628a\u201d\u5c06\u5bbe\u8bed\u63d0\u524d\uff0c\u5f3a\u8c03\u52a8\u4f5c\u5bf9\u5bf9\u8c61\u7684\u5f71\u54cd", explanationEn: "Moves the object before the verb using \"b\u01ce\" to emphasize the effect of the action"}
      ],
      footnotes: [
        {term:"\u67a3\u6838", termEn:"date pit", definition:"\u3010z\u01ceo h\u00e9\u3011date pit\u3002", definitionEn:"date pit"},
        {term:"\u52e4\u5feb", termEn:"diligent; hardworking", definition:"\u3010q\u00edn ku\u00e0i\u3011diligent; hardworking\u3002", definitionEn:"diligent; hardworking"},
        {term:"\u672c\u9886", termEn:"skill; ability", definition:"\u3010b\u011bn l\u01d0ng\u3011skill; ability\u3002", definitionEn:"skill; ability"},
        {term:"\u5b98\u5e9c", termEn:"government office", definition:"\u3010gu\u0101n f\u01d4\u3011government office\u3002", definitionEn:"government office"},
        {term:"\u673a\u7075", termEn:"clever; quick-witted", definition:"\u3010j\u012b ling\u3011clever; quick-witted\u3002", definitionEn:"clever; quick-witted"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"默读课文，用自己的话复述这个故事。",en:"Read silently and retell the story in your own words."},
        {type:"think",cn:"枣核虽然很小，但有哪些了不起的本领？",en:"Though tiny, what remarkable abilities does Date Pit have?"},
        {type:"imagine",cn:"如果有兴趣，试着续编这个故事。",en:"If interested, try continuing this story."}
      ],
      teachingPoints: [
        {cn:"这是一个民间故事，表现了劳动人民的智慧和勇敢。",en:"This is a folk tale showcasing the wisdom and bravery of working people."},
        {cn:"枣核虽小但聪明能干——说明\u201C人不可貌相\u201D的道理。",en:"Though tiny, Date Pit is clever and capable — illustrating 'don't judge a book by its cover'."},
        {cn:"学习复述长篇故事的方法：抓住主要事件，按顺序讲述。",en:"Learn to retell long stories: grasp main events and narrate in order."}
      ],
      parentTips: [
        {cn:"这个故事很长，可以分段引导孩子复述，培养概括能力。",en:"This story is long; guide your child to retell it section by section, building summarization skills."},
        {cn:"和孩子讨论：枣核的故事告诉我们什么道理？",en:"Discuss: What lessons does Date Pit's story teach us?"}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"大林寺桃花\n[唐] 白居易\n人间四月芳菲尽，\n山寺桃花始盛开。\n长恨春归无觅处，\n不知转入此中来。",en:"Peach Blossoms at Dalin Temple\n[Tang] Bai Juyi\nBy April, all the flowers in the world have faded,\nBut the mountain temple's peach blossoms are just blooming.\nI always regretted that spring left with no place to find it,\nNot knowing it had simply moved up here."}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"读一读，体会句子中加点部分表现的情景（噌的一下子跳起来/扑通一声掉进水里）。照样子用自己的话转述别人说的话。",en:"Read and feel the scenes described by highlighted parts (jumped up with a whoosh / fell into the water with a splash). Practice retelling others' words in your own words."}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"这样想象真有趣——如果母鸡能在天空飞翔，如果蚂蚁的个头比树还大，如果蜗牛健步如飞……选一种动物作为主角，大胆想象，编一个童话故事。",en:"Imagination is Fun — What if hens could fly? What if ants were bigger than trees? What if snails could run fast? Choose an animal as the protagonist and boldly imagine a fairy tale."},modelEssays:[
      {title:"会飞的母鸡",titleEn:"The Hen That Could Fly",level:"基础",
      structure:[
        {cn:"开头：写母鸡获得飞行能力",en:"Opening: The hen gains the ability to fly"},
        {cn:"中间：写母鸡飞翔时看到的和做的事",en:"Body: What the hen sees and does while flying"},
        {cn:"结尾：写故事的结局",en:"Ending: Conclude the story"}
      ],
      cn:"从前，有一只母鸡叫花花，它最大的梦想就是像小鸟一样在天上飞。\n有一天早上，花花醒来后发现自己的翅膀变大了！它试着扇了扇翅膀，没想到真的飞了起来！\u201C我会飞了！我会飞了！\u201D花花高兴地大喊。\n花花飞过了绿绿的田野，田野好大好大啊！它飞过了弯弯的小河，看到了河里游来游去的小鱼。它还飞到了白云上面，白云软绵绵的，像棉花糖一样。花花忍不住在云朵上打了几个滚。\n飞了一整天，花花的肚子饿了。它飞回了农场，看到小鸡们正在等它。花花落在地上，给小鸡们讲天上的故事。小鸡们睁大眼睛听得入了迷。\n虽然天上很美，可是花花觉得还是家最温暖。",
      en:"Once upon a time, there was a hen named Huahua whose biggest dream was to fly in the sky like a bird.\nOne morning, Huahua woke up and found her wings had grown big! She tried flapping them and actually flew! \u201CI can fly! I can fly!\u201D she shouted happily.\nHuahua flew over green fields \u2014 they were so vast! She flew over a winding river and saw little fish swimming below. She even flew above the white clouds, which were soft and fluffy, like cotton candy. Huahua couldn\u2019t resist rolling around on them.\nAfter flying all day, Huahua was hungry. She flew back to the farm, where her chicks were waiting. Huahua landed and told them stories about the sky. The chicks listened wide-eyed, completely fascinated.\nAlthough the sky was beautiful, Huahua felt home was the warmest place of all.",
      notes:"这篇范文想象合理有趣：母鸡翅膀变大→学会飞→空中所见→回家。按飞行路线组织内容（田野→小河→白云），层次清晰。用了比喻（像棉花糖），结尾回归温暖的家，有童话的温馨感。",
      notesEn:"This essay has reasonable, fun imagination: wings grow → learns to fly → sky views → comes home. Content is organized by flight path (fields → river → clouds), with clear layers. Uses simile (like cotton candy), and the ending returns to a warm home, giving it fairy-tale warmth."},
      {title:"飞毛腿蜗牛",titleEn:"The Lightning-Fast Snail",level:"提高",
      structure:[
        {cn:"开头：写蜗牛的烦恼",en:"Opening: The snail's frustration"},
        {cn:"中间：获得超能力后参加比赛",en:"Body: Gains superspeed and enters a race"},
        {cn:"转折：比赛中发生意外",en:"Turning point: Something unexpected happens during the race"},
        {cn:"结尾：蜗牛的新认识",en:"Ending: The snail's new understanding"}
      ],
      cn:"小蜗牛慢慢最怕听到的一个字就是\u201C慢\u201D。每次走路，小兔子、小松鼠都嘲笑它：\u201C慢慢，你怎么这么慢呀？等你到了终点，太阳都下山了！\u201D慢慢总是低着头，伤心得快要哭了。\n有一天，一位路过的小仙女看到了伤心的慢慢，就送给它一颗闪闪发亮的星星糖：\u201C吃了它，你就能跑得飞快！\u201D慢慢半信半疑地吃了下去。突然，它感觉浑身充满了力量！它试着跑了几步——\u201C嗖\u201D的一声，它已经跑到了十米之外！\n慢慢高兴坏了。正好，森林里要举办一年一度的赛跑比赛。慢慢第一个报了名。比赛那天，大家看到慢慢站在起跑线上，都忍不住笑了。可是发令枪一响，慢慢像一阵风一样冲了出去，把所有人都甩在了后面。\n可是跑得太快了，慢慢根本停不下来。它\u201C嗖嗖嗖\u201D地冲过终点线，又冲出了赛道，撞翻了裁判的桌子，飞进了路边的池塘里。等大家七手八脚地把它捞上来的时候，慢慢浑身湿淋淋的，壳里还钻进了一条小鱼。全场都笑翻了。\n慢慢摸摸自己的壳，也忍不住笑了。它想：跑得快虽然很厉害，可是控制不住也不行啊。以后，还是慢慢走吧，反正路上的风景那么美，慢慢看才有意思呢。",
      en:"The little snail, Manman (meaning \u201Cslow\u201D), hated hearing the word \u201Cslow\u201D most of all. Every time it walked, the rabbit and squirrel would tease: \u201CManman, why are you so slow? By the time you reach the finish line, the sun will have set!\u201D Manman would hang its head, almost crying.\nOne day, a passing little fairy saw the sad snail and gave it a sparkling star candy: \u201CEat this and you\u2019ll run super fast!\u201D Manman ate it half-doubtfully. Suddenly, its whole body surged with energy! It tried a few steps \u2014 \u201Cwoosh!\u201D It was already ten meters away!\nManman was thrilled. It just so happened that the forest was holding its annual race. Manman was the first to sign up. On race day, everyone laughed seeing Manman at the starting line. But when the starting gun fired, Manman shot out like the wind, leaving everyone far behind.\nBut running too fast, Manman couldn\u2019t stop. It \u201Cwoosh-woosh-wooshed\u201D past the finish line, off the track, knocked over the judge\u2019s table, and splashed into the roadside pond. By the time everyone fished it out, Manman was soaking wet, with a little fish wriggling inside its shell. The whole crowd burst out laughing.\nManman patted its shell and couldn\u2019t help laughing too. It thought: being fast is impressive, but not being able to stop isn\u2019t great either. From now on, I\u2019ll just take my time. After all, the scenery along the way is so beautiful \u2014 it\u2019s more fun to enjoy it slowly.",
      notes:"这篇范文想象大胆又有趣：蜗牛变快→参加比赛→跑太快停不住。故事有波折，从被嘲笑→得到魔法→比赛获胜→意外翻车→领悟道理，情节完整。用了拟声词（嗖、嗖嗖嗖）和夸张手法。幽默的意外结局和蜗牛的领悟让故事既好笑又有道理。",
      notesEn:"This essay has bold, fun imagination: snail gets fast → enters race → can't stop. The story has twists: being teased → getting magic → winning → crashing → learning a lesson. Onomatopoeia (woosh) and exaggeration are used effectively. The humorous surprise ending and the snail's realization make the story both funny and meaningful."},
      {title:"巨人蚂蚁历险记",titleEn:"The Giant Ant's Adventure",level:"拓展",
      structure:[
        {cn:"开头：设定情境——蚂蚁变成巨人",en:"Opening: Set the scene — the ant becomes giant"},
        {cn:"中间：巨人蚂蚁的新生活和遇到的问题",en:"Body: The giant ant's new life and the problems it faces"},
        {cn:"高潮：用巨大的身体帮助他人",en:"Climax: Using its giant body to help others"},
        {cn:"结尾：蚂蚁的选择和感悟",en:"Ending: The ant's choice and insight"}
      ],
      cn:"一觉醒来，小蚂蚁丁丁发现自己变大了！不是变大了一点点，而是比树还大！它的触角碰到了天上的白云，一只脚就能踩住一整棵大树。\n\u201C太棒了！我再也不用怕被踩到了！\u201D丁丁开心极了。它大步走出了森林，每一步都让大地\u201C咚咚\u201D地震动。小动物们吓坏了，纷纷逃跑。\u201C别怕，是我呀！我是丁丁！\u201D丁丁连忙解释，可是它的声音像打雷一样响，小动物们跑得更快了。\n丁丁有些失落。它小心翼翼地走着，生怕踩到花草和小动物。可是它的脚太大了，走一步就踩坏了好几棵大树。它想回家，却发现蚂蚁洞口比它的小指甲还小。它想跟妈妈说话，可是妈妈根本看不见它的脸，只能看到一根巨大的触角。丁丁伤心地坐在山坡上，哇哇大哭起来。\n忽然，远处传来\u201C救命\u201D的喊声。丁丁抬头一看，原来是山洪暴发了！浑浊的洪水正向村庄涌来，村民们吓得乱成一团。丁丁想也没想，三步并作两步跑过去。它蹲下巨大的身体，用两只前腿像铲子一样在村庄前面挖了一条又宽又深的水沟。洪水顺着水沟流走了，村庄保住了！村民们欢呼起来：\u201C谢谢你，大蚂蚁！\u201D\n丁丁第一次觉得变大也有好处。可是到了晚上，它独自坐在山顶，看着远处蚂蚁洞口微弱的灯光，想起了妈妈温暖的怀抱、兄弟姐妹热闹的晚餐，还有大家一起搬食物时的快乐。\n\u201C我想变回去。\u201D丁丁闭上眼睛许了一个愿。\n第二天早上，丁丁在自己的小床上醒来了——它变回了一只小小的蚂蚁。妈妈在旁边笑着说：\u201C小懒虫，该起床了！\u201D丁丁一把抱住妈妈，开心地说：\u201C妈妈，做一只小蚂蚁真好！\u201D\n丁丁明白了：不管变大变小，最重要的是身边有爱你的人。",
      en:"When it woke up, little ant Dingding found it had grown enormous! Not just a little bigger \u2014 bigger than trees! Its antennae touched the clouds, and one foot could cover an entire tree.\n\u201CFantastic! I\u2019ll never be afraid of being stepped on again!\u201D Dingding was thrilled. It strode out of the forest, each step making the ground rumble. The small animals panicked and fled. \u201CDon\u2019t be afraid! It\u2019s me, Dingding!\u201D it explained hastily, but its voice boomed like thunder, and the animals ran even faster.\nDingding felt dejected. It walked carefully, terrified of stepping on plants or small creatures. But its feet were so huge that every step crushed several trees. It wanted to go home but found the anthill entrance was smaller than its pinky nail. It wanted to talk to Mama, but Mama could only see one enormous antenna, not its face. Dingding sat on a hillside and burst into tears.\nSuddenly, cries of \u201CHelp!\u201D came from the distance. Dingding looked up \u2014 a flash flood! Muddy water was surging toward a village, and the villagers were in chaos. Without a second thought, Dingding rushed over. It crouched its massive body and used its front legs like shovels to dig a wide, deep trench in front of the village. The floodwater flowed into the trench, and the village was saved! The villagers cheered: \u201CThank you, giant ant!\u201D\nFor the first time, Dingding felt being big had its benefits. But that night, sitting alone on the mountaintop, it gazed at the faint glow from the distant anthill. It remembered Mama\u2019s warm embrace, the bustling family dinners with siblings, and the joy of carrying food together.\n\u201CI want to change back,\u201D Dingding closed its eyes and made a wish.\nThe next morning, Dingding woke up in its own little bed \u2014 a tiny ant again. Mama smiled beside it: \u201CLazy little one, time to get up!\u201D Dingding threw its arms around Mama and said happily, \u201CMama, it\u2019s great being a little ant!\u201D\nDingding understood: no matter how big or small you are, what matters most is having people who love you nearby.",
      notes:"这篇范文是一个完整的童话故事，情节跌宕起伏：变大→开心→失落→救人→思念家人→变回。想象大胆但逻辑合理（变大后回不了家、声音像雷）。用了比喻（腿像铲子）、夸张（触角碰到白云）、拟声词（咚咚）等多种修辞。既有惊险的洪水救援，又有温馨的家庭亲情。结尾的感悟\u201C最重要的是身边有爱你的人\u201D点明主题，让故事有了深度。情感变化（开心→失落→自豪→思念→幸福）丰富而真实，体现了拓展水平的叙事能力。",
      notesEn:"This essay is a complete fairy tale with rising and falling action: growing big → excitement → loneliness → saving people → missing family → returning. The imagination is bold but logical (can't go home, voice like thunder). It uses simile (legs like shovels), exaggeration (antennae touching clouds), and onomatopoeia (rumbling). It combines an exciting flood rescue with warm family love. The ending insight — 'what matters most is having people who love you' — deepens the theme. The emotional arc (excitement → sadness → pride → longing → happiness) is rich and authentic, demonstrating advanced narrative skill."}
    ]}
  }
}
]
};
