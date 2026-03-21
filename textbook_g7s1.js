/**
 * 字道 ZiDao — Grade 7 Semester 1 Textbook Data
 * 部编版语文七年级上册 (PEP Chinese Grade 7 Volume 1)
 * 6 units, 22 lessons
 */
var TB_G7S1 = {
  grade: 7,
  semester: 1,
  units: [
    /* ─── Unit 1 四季美景 ─── */
    {
      id: 1,
      title: "第一单元",
      titleEn: "Unit 1",
      theme: "四季美景",
      themeEn: "Beauty of Four Seasons",
      unitIntro: {
        cn: "日月经天，江河行地，春风夏雨，秋霜冬雪，大自然生生不息，四时景物美不胜收。本单元课文用优美的语言，描绘了多姿多彩的四季美景，抒发了亲近自然、热爱生活的情怀。学习本单元，要重视朗读课文，想象文中描绘的情景，领略景物之美；把握好重音和停连，感受汉语声韵之美。还要注意揣摩和品味语言，体会比喻和拟人等修辞手法的表达效果。",
        en: "The sun and moon traverse the sky, rivers flow across the land, spring breezes and summer rains, autumn frost and winter snow — nature is ever-renewing, and the scenery of the four seasons is endlessly beautiful. The texts in this unit use elegant language to depict the colorful beauty of the four seasons, expressing feelings of closeness to nature and love of life. When studying this unit, focus on reading aloud, imagining the scenes described, and appreciating the beauty of the landscape. Pay attention to stress and pauses to feel the charm of Chinese phonetics. Also note the use of figurative language such as simile and personification."
      },
      type: "kewen",
      lessons: [
        {
          id: 1,
          title: "春",
          titleEn: "Spring",
          difficulty: 3,
          author: "朱自清",
          authorEn: "Zhu Ziqing",
          source: "选自《朱自清全集》第四卷（江苏教育出版社1996年版）。略有改动。",
          sourceEn: "Selected from The Complete Works of Zhu Ziqing, Volume 4 (Jiangsu Education Press, 1996). Slightly adapted.",
          vocabWords: [
            {word:'朗润',pinyin:'lǎng rùn',en:'bright and moist',sentence:'山朗润起来了，水涨起来了。',sentenceEn:'The mountains became bright and moist, the waters rose.'},
            {word:'酝酿',pinyin:'yùn niàng',en:'brew; develop gradually',sentence:'都在微微润湿的空气里酝酿。',sentenceEn:'All brewing in the slightly moist air.'},
            {word:'嫩绿',pinyin:'nèn lǜ',en:'tender green',sentence:'小草偷偷地从土里钻出来，嫩嫩的，绿绿的。',sentenceEn:'The grass secretly poked out of the earth, tender and green.'},
            {word:'抖擞',pinyin:'dǒu sǒu',en:'invigorate',sentence:'舒活舒活筋骨，抖擞抖擞精神。',sentenceEn:'Stretch the muscles and bones, invigorate the spirit.'},
            {word:'花枝招展',pinyin:'huā zhī zhāo zhǎn',en:'gorgeously dressed',sentence:'春天像小姑娘，花枝招展的，笑着，走着。',sentenceEn:'Spring is like a young girl, gorgeously dressed, smiling and walking.'}
          ],
          footnotes: [
            {term:"\u6717\u6da6", termEn:"bright and moist", definition:"\u3010l\u01ceng r\u00f9n\u3011bright and moist\u3002", definitionEn:"bright and moist"},
            {term:"\u915d\u917f", termEn:"brew; develop gradually", definition:"\u3010y\u00f9n ni\u00e0ng\u3011brew; develop gradually\u3002", definitionEn:"brew; develop gradually"},
            {term:"\u5ae9\u7eff", termEn:"tender green", definition:"\u3010n\u00e8n l\u01dc\u3011tender green\u3002", definitionEn:"tender green"},
            {term:"\u6296\u64de", termEn:"invigorate", definition:"\u3010d\u01d2u s\u01d2u\u3011invigorate\u3002", definitionEn:"invigorate"},
            {term:"\u82b1\u679d\u62db\u5c55", termEn:"gorgeously dressed", definition:"\u3010hu\u0101 zh\u012b zh\u0101o zh\u01cen\u3011gorgeously dressed\u3002", definitionEn:"gorgeously dressed"}
          ],
          readingTips: [
            {cn:"\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f", en:"Pay attention to the author's narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?"},
            {cn:"\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f", en:"After reading, think: what theme does the author convey? How does the title relate to the content?"}
          ],
          grammarPoints: [
            {point:'比喻',pointEn:'bǐ yù',example:'simile and metaphor',exampleEn:'春天像刚落地的娃娃，从头到脚都是新的。',explanation:'Spring is like a newborn baby, new from head to toe.',explanationEn:'用比喻修辞手法将春天具体化，增强形象感'},
            {point:'拟人',pointEn:'nǐ rén',example:'personification',exampleEn:'小草偷偷地从土里钻出来。',explanation:'The grass secretly poked out of the earth.',explanationEn:'赋予植物人的动作，表现春天的生机'}
          ],
          authorBio: {
            cn: "朱自清（1898—1948），字佩弦，江苏扬州人，散文家、诗人、学者。著有诗文集《踪迹》，散文集《背影》《欧游杂记》《你我》等。",
            en: "Zhu Ziqing (1898–1948), courtesy name Peixian, was from Yangzhou, Jiangsu. He was an essayist, poet, and scholar. His works include the poetry and prose collection Traces, and essay collections such as The Back View, Notes on Travels in Europe, and You and I."
          },
          isSelfRead: false,
          preview: [
            { cn: "春天展现美丽的世界，春天带来崭新的希望。历来文人墨客都喜欢描绘春天，赞美春天。你读过哪些描写春天的诗文？这些诗文给你留下了怎样的印象？", en: "Spring reveals a beautiful world and brings fresh hope. Writers throughout history have loved to depict and praise spring. What poems and essays about spring have you read? What impressions did they leave?" },
            { cn: "这是一篇散文，又像一首诗。朗读课文，张开想象的翅膀，在头脑中再现文中描绘的春景，感受大自然的蓬勃生机。", en: "This is an essay that reads like a poem. Read it aloud, spread the wings of imagination, recreate the spring scenes in your mind, and feel the vigorous vitality of nature." }
          ],
          text: [
        "\u76fc\u671b\u7740\uff0c\u76fc\u671b\u7740\uff0c\u4e1c\u98ce\u6765\u4e86\uff0c\u6625\u5929\u7684\u811a\u6b65\u8fd1\u4e86\u3002",
        "\u4e00\u5207\u90fd\u50cf\u521a\u7761\u9192\u7684\u6837\u5b50\uff0c\u6b23\u6b23\u7136\u5f20\u5f00\u4e86\u773c\u3002\u5c71\u6717\u6da6\u8d77\u6765\u4e86\uff0c\u6c34\u6da8\u8d77\u6765\u4e86\uff0c\u592a\u9633\u7684\u8138\u7ea2\u8d77\u6765\u4e86\u3002",
        "\u5c0f\u8349\u5077\u5077\u5730\u4ece\u571f\u91cc\u94bb\u51fa\u6765\uff0c\u5ae9\u5ae9\u7684\uff0c\u7eff\u7eff\u7684\u3002\u56ed\u5b50\u91cc\uff0c\u7530\u91ce\u91cc\uff0c\u77a7\u53bb\uff0c\u4e00\u5927\u7247\u4e00\u5927\u7247\u6ee1\u662f\u7684\u3002\u5750\u7740\uff0c\u8eba\u7740\uff0c\u6253\u4e24\u4e2a\u6eda\uff0c\u8e22\u51e0\u811a\u7403\uff0c\u8d5b\u51e0\u8d9f\u8dd1\uff0c\u6349\u51e0\u56de\u8ff7\u85cf\u3002\u98ce\u8f7b\u6084\u6084\u7684\uff0c\u8349\u8f6f\u7ef5\u7ef5\u7684\u3002",
        "\u6843\u6811\u3001\u674f\u6811\u3001\u68a8\u6811\uff0c\u4f60\u4e0d\u8ba9\u6211\uff0c\u6211\u4e0d\u8ba9\u4f60\uff0c\u90fd\u5f00\u6ee1\u4e86\u82b1\u8d76\u8d9f\u513f\u3002\u7ea2\u7684\u50cf\u706b\uff0c\u7c89\u7684\u50cf\u971e\uff0c\u767d\u7684\u50cf\u96ea\u3002\u82b1\u91cc\u5e26\u7740\u751c\u5473\u513f\uff1b\u95ed\u4e86\u773c\uff0c\u6811\u4e0a\u4eff\u4f5b\u5df2\u7ecf\u6ee1\u662f\u6843\u513f\u3001\u674f\u513f\u3001\u68a8\u513f\u3002\u82b1\u4e0b\u6210\u5343\u6210\u767e\u7684\u871c\u8702\u55e1\u55e1\u5730\u95f9\u7740\uff0c\u5927\u5c0f\u7684\u8774\u8776\u98de\u6765\u98de\u53bb\u3002\u91ce\u82b1\u904d\u5730\u662f\uff1a\u6742\u6837\u513f\uff0c\u6709\u540d\u5b57\u7684\uff0c\u6ca1\u540d\u5b57\u7684\uff0c\u6563\u5728\u8349\u4e1b\u91cc\uff0c\u50cf\u773c\u775b\uff0c\u50cf\u661f\u661f\uff0c\u8fd8\u7728\u5440\u7728\u7684\u3002",
        "\u201c\u5439\u9762\u4e0d\u5bd2\u6768\u67f3\u98ce\u201d\uff0c\u4e0d\u9519\u7684\uff0c\u50cf\u6bcd\u4eb2\u7684\u624b\u629a\u6478\u7740\u4f60\u3002\u98ce\u91cc\u5e26\u6765\u4e9b\u65b0\u7ffb\u7684\u6ce5\u571f\u7684\u6c14\u606f\uff0c\u6df7\u7740\u9752\u8349\u5473\u513f\uff0c\u8fd8\u6709\u5404\u79cd\u82b1\u7684\u9999\uff0c\u90fd\u5728\u5fae\u5fae\u6da6\u6e7f\u7684\u7a7a\u6c14\u91cc\u915d\u917f\u3002\u9e1f\u513f\u5c06\u7aa0\u5de2\u5b89\u5728\u7e41\u82b1\u5ae9\u53f6\u5f53\u4e2d\uff0c\u9ad8\u5174\u8d77\u6765\u4e86\uff0c\u547c\u670b\u5f15\u4f34\u5730\u5356\u5f04\u6e05\u8106\u7684\u5589\u5499\uff0c\u5531\u51fa\u5b9b\u8f6c\u7684\u66f2\u5b50\uff0c\u4e0e\u8f7b\u98ce\u6d41\u6c34\u5e94\u548c\u7740\u3002\u725b\u80cc\u4e0a\u7267\u7ae5\u7684\u77ed\u7b1b\uff0c\u8fd9\u65f6\u5019\u4e5f\u6210\u5929\u5728\u5639\u4eae\u5730\u54cd\u3002",
        "\u96e8\u662f\u6700\u5bfb\u5e38\u7684\uff0c\u4e00\u4e0b\u5c31\u662f\u4e09\u4e24\u5929\u3002\u53ef\u522b\u607c\u3002\u770b\uff0c\u50cf\u725b\u6bdb\uff0c\u50cf\u82b1\u9488\uff0c\u50cf\u7ec6\u4e1d\uff0c\u5bc6\u5bc6\u5730\u659c\u7ec7\u7740\uff0c\u4eba\u5bb6\u5c4b\u9876\u4e0a\u5168\u7b3c\u7740\u4e00\u5c42\u8584\u70df\u3002\u6811\u53f6\u5b50\u5374\u7eff\u5f97\u53d1\u4eae\uff0c\u5c0f\u8349\u4e5f\u9752\u5f97\u903c\u4f60\u7684\u773c\u3002\u508d\u665a\u65f6\u5019\uff0c\u4e0a\u706f\u4e86\uff0c\u4e00\u70b9\u70b9\u9ec4\u6655\u7684\u5149\uff0c\u70d8\u6258\u51fa\u4e00\u7247\u5b89\u9759\u800c\u548c\u5e73\u7684\u591c\u3002\u4e61\u4e0b\u53bb\uff0c\u5c0f\u8def\u4e0a\uff0c\u77f3\u6865\u8fb9\uff0c\u6709\u6491\u8d77\u4f1e\u6162\u6162\u8d70\u7740\u7684\u4eba\uff1b\u8fd8\u6709\u5730\u91cc\u5de5\u4f5c\u7684\u519c\u592b\uff0c\u62ab\u7740\u84d1\uff0c\u6234\u7740\u7b20\u7684\u3002\u4ed6\u4eec\u7684\u8349\u5c4b\uff0c\u7a00\u7a00\u758f\u758f\u7684\uff0c\u5728\u96e8\u91cc\u9759\u9ed8\u7740\u3002",
        "\u5929\u4e0a\u98ce\u7b5d\u6e10\u6e10\u591a\u4e86\uff0c\u5730\u4e0a\u5b69\u5b50\u4e5f\u591a\u4e86\u3002\u57ce\u91cc\u4e61\u4e0b\uff0c\u5bb6\u5bb6\u6237\u6237\uff0c\u8001\u8001\u5c0f\u5c0f\uff0c\u4ed6\u4eec\u4e5f\u8d76\u8d9f\u513f\u4f3c\u7684\uff0c\u4e00\u4e2a\u4e2a\u90fd\u51fa\u6765\u4e86\u3002\u8212\u6d3b\u8212\u6d3b\u7b4b\u9aa8\uff0c\u6296\u64de\u6296\u64de\u7cbe\u795e\uff0c\u5404\u505a\u5404\u7684\u4e00\u4efd\u4e8b\u53bb\u3002\u201c\u4e00\u5e74\u4e4b\u8ba1\u5728\u4e8e\u6625\u201d\uff0c\u521a\u8d77\u5934\u513f\uff0c\u6709\u7684\u662f\u5de5\u592b\uff0c\u6709\u7684\u662f\u5e0c\u671b\u3002",
        "\u6625\u5929\u50cf\u521a\u843d\u5730\u7684\u5a03\u5a03\uff0c\u4ece\u5934\u5230\u811a\u90fd\u662f\u65b0\u7684\uff0c\u4ed6\u751f\u957f\u7740\u3002",
        "\u6625\u5929\u50cf\u5c0f\u59d1\u5a18\uff0c\u82b1\u679d\u62db\u5c55\u7684\uff0c\u7b11\u7740\uff0c\u8d70\u7740\u3002",
        "\u6625\u5929\u50cf\u5065\u58ee\u7684\u9752\u5e74\uff0c\u6709\u94c1\u4e00\u822c\u7684\u80f3\u818a\u548c\u8170\u811a\uff0c\u4ed6\u9886\u7740\u6211\u4eec\u4e0a\u524d\u53bb\u3002"
      ],
          textEn: [
        "Longing, longing — the east wind has come, spring’s footsteps draw near.",
        "Everything looks as if just awakened, stretching open its eyes with delight. The mountains grow bright and moist, the waters rise, the face of the sun turns rosy.",
        "Little grasses stealthily poke out of the soil, tender and green. In the gardens, in the fields — look, there they are, great stretches of them everywhere. Sitting, lying, rolling about, kicking a ball, racing, playing hide-and-seek. The breeze is soft and gentle, the grass tender and yielding.",
        "The peach trees, apricot trees, pear trees — not wanting to be outdone by one another, all burst into bloom. Red as fire, pink as rosy clouds, white as snow. The blossoms carry a sweet fragrance; close your eyes, and it seems the trees are already full of peaches, apricots, and pears. Beneath the flowers, hundreds and thousands of bees are buzzing busily, and butterflies of all sizes flit about. Wildflowers are everywhere: varied kinds, named and nameless, scattered in the grass, like eyes, like stars, still blinking.",
        "‘The willow wind blows without chill upon the face’ — indeed, like a mother’s hand caressing you. The wind carries the scent of freshly turned soil, mixed with the smell of green grass and the fragrance of all kinds of flowers, all brewing in the slightly moist air. Birds have nested among the lush blossoms and tender leaves, happily calling to their companions, showing off their clear voices, singing sweet melodies in harmony with the gentle breeze and flowing water. The shepherd boy’s short flute on the ox’s back rings bright all day long.",
        "Rain is the most ordinary thing, falling for two or three days at a stretch. Don’t be annoyed. Look — like ox hair, like flower needles, like fine silk, weaving densely at a slant; a thin layer of smoke covers every rooftop. But the tree leaves gleam with green, and the grass is so vividly blue-green it presses against your eyes. At dusk, when the lights come on, the faint yellowish glow sets off a quiet and peaceful night. Down in the countryside, on little paths, by stone bridges, people stroll slowly with open umbrellas; there are also farmers working in the fields, cloaked in straw capes, wearing bamboo hats. Their thatched cottages, sparse and scattered, stand silently in the rain.",
        "More kites appear in the sky, more children on the ground. In the cities and countryside, every household, old and young, they come out one after another as if in a rush. Stretch the muscles, shake off the sluggishness — everyone goes to attend to their share of work. ‘A year’s plan starts in spring’ — just beginning, there is plenty of time, plenty of hope.",
        "Spring is like a newborn baby — new from head to toe, growing.",
        "Spring is like a young girl, dressed in blossoming finery, smiling and walking.",
        "Spring is like a sturdy young man, with arms and legs of iron, leading us forward."
      ],
          textPinyin: [
            "p\u00e0n w\u00e0ng zhe\uff0c p\u00e0n w\u00e0ng zhe\uff0c d\u014dng f\u0113ng l\u00e1i le\uff0c ch\u016bn ti\u0101n de ji\u01ceo b\u00f9 j\u00ecn le\u3002",
            "y\u00ed qi\u00e8 d\u014du xi\u00e0ng g\u0101ng shu\u00ec x\u01d0ng de y\u00e0ng zi\uff0c x\u012bn x\u012bn r\u00e1n zh\u0101ng k\u0101i le y\u01cen\u3002 sh\u0101n l\u01ceng r\u00f9n q\u01d0 l\u00e1i le\uff0c shu\u01d0 zh\u01ceng q\u01d0 l\u00e1i le\uff0c t\u00e0i y\u00e1ng de li\u01cen h\u00f3ng q\u01d0 l\u00e1i le\u3002",
            "xi\u01ceo c\u01ceo t\u014du t\u014du d\u00ec c\u00f3ng t\u01d4 l\u01d0 zu\u00e0n ch\u016b l\u00e1i\uff0c n\u00e8n n\u00e8n de\uff0c l\u01dc l\u01dc de\u3002 yu\u00e1n z\u01d0 l\u01d0\uff0c ti\u00e1n y\u011b l\u01d0\uff0c qi\u00e1o q\u00f9\uff0c y\u00ed d\u00e0 pi\u00e0n y\u00ed d\u00e0 pi\u00e0n m\u01cen sh\u00ec de\u3002 zu\u00f2 zhe\uff0c t\u01ceng zhe\uff0c d\u01ce li\u01ceng g\u00e8 g\u01d4n\uff0c t\u012b j\u01d0 ji\u01ceo qi\u00fa\uff0c s\u00e0i j\u01d0 t\u00e0ng p\u01ceo\uff0c zhu\u014d j\u01d0 hu\u00ed m\u00ed c\u00e1ng\u3002 f\u0113ng q\u012bng qi\u0101o qi\u0101o de\uff0c c\u01ceo ru\u01cen mi\u00e1n mi\u00e1n de\u3002",
            "t\u00e1o sh\u00f9\u3001 x\u00ecng sh\u00f9\u3001 l\u00ed sh\u00f9\uff0c n\u01d0 b\u00fa r\u00e0ng w\u01d2\uff0c w\u01d2 b\u00fa r\u00e0ng n\u01d0\uff0c d\u014du k\u0101i m\u01cen le hu\u0101 g\u01cen t\u00e0ng \u00e9r\u3002 h\u00f3ng de xi\u00e0ng hu\u01d2\uff0c f\u011bn de xi\u00e0ng xi\u00e1\uff0c b\u00e1i de xi\u00e0ng xu\u011b\u3002 hu\u0101 l\u01d0 d\u00e0i zhe ti\u00e1n w\u00e8i \u00e9r\uff1b b\u00ec le y\u01cen\uff0c sh\u00f9 sh\u00e0ng f\u01ceng f\u00fa y\u01d0 j\u012bng m\u01cen sh\u00ec t\u00e1o \u00e9r\u3001 x\u00ecng \u00e9r\u3001 l\u00ed \u00e9r\u3002 hu\u0101 xi\u00e0 ch\u00e9ng qi\u0101n ch\u00e9ng b\u01cei de m\u00ec f\u0113ng w\u0113ng w\u0113ng d\u00ec n\u00e0o zhe\uff0c d\u00e0 xi\u01ceo de h\u00fa di\u00e9 f\u0113i l\u00e1i f\u0113i q\u00f9\u3002 y\u011b hu\u0101 bi\u00e0n d\u00ec sh\u00ec\uff1a z\u00e1 y\u00e0ng \u00e9r\uff0c y\u01d2u m\u00edng z\u00ec de\uff0c m\u00e9i m\u00edng z\u00ec de\uff0c s\u00e0n z\u00e0i c\u01ceo c\u00f3ng l\u01d0\uff0c xi\u00e0ng y\u01cen j\u012bng\uff0c xi\u00e0ng x\u012bng x\u012bng\uff0c h\u00e1i zh\u01ce ya zh\u01ce de\u3002",
            "\u201c chu\u012b mi\u00e0n b\u00f9 h\u00e1n y\u00e1ng li\u01d4 f\u0113ng \u201d\uff0c b\u00fa cu\u00f2 de\uff0c xi\u00e0ng m\u01d4 q\u012bn de sh\u01d2u f\u01d4 m\u014d zhe n\u01d0\u3002 f\u0113ng l\u01d0 d\u00e0i l\u00e1i xi\u0113 x\u012bn f\u0101n de n\u00ed t\u01d4 de q\u00ec x\u012b\uff0c h\u00f9n zhe q\u012bng c\u01ceo w\u00e8i \u00e9r\uff0c h\u00e1i y\u01d2u g\u00e8 zh\u01d2ng hu\u0101 de xi\u0101ng\uff0c d\u014du z\u00e0i w\u0113i w\u0113i r\u00f9n sh\u012b de k\u014dng q\u00ec l\u01d0 y\u00f9n ni\u00e0ng\u3002 ni\u01ceo \u00e9r ji\u0101ng k\u0113 ch\u00e1o \u0101n z\u00e0i f\u00e1n hu\u0101 n\u00e8n y\u00e8 d\u0101ng zh\u014dng\uff0c g\u0101o x\u00ecng q\u01d0 l\u00e1i le\uff0c h\u016b p\u00e9ng y\u01d0n b\u00e0n d\u00ec m\u00e0i n\u00f2ng q\u012bng cu\u00ec de h\u00f3u l\u00f3ng\uff0c ch\u00e0ng ch\u016b w\u01cen zhu\u01cen de q\u01d4 zi\uff0c y\u01d4 q\u012bng f\u0113ng li\u00fa shu\u01d0 y\u00ecng h\u00e9 zhe\u3002 ni\u00fa b\u00e8i sh\u00e0ng m\u00f9 t\u00f3ng de du\u01cen d\u00ed\uff0c zh\u00e8 sh\u00ed h\u00f2u y\u011b ch\u00e9ng ti\u0101n z\u00e0i li\u00e1o li\u00e0ng d\u00ec xi\u01ceng\u3002",
            "y\u01d4 sh\u00ec zu\u00ec x\u00fan ch\u00e1ng de\uff0c y\u00ed xi\u00e0 ji\u00f9 sh\u00ec s\u0101n li\u01ceng ti\u0101n\u3002 k\u011b bi\u00e9 n\u01ceo\u3002 k\u00e0n\uff0c xi\u00e0ng ni\u00fa m\u00e1o\uff0c xi\u00e0ng hu\u0101 zh\u0113n\uff0c xi\u00e0ng x\u00ec s\u012b\uff0c m\u00ec m\u00ec d\u00ec xi\u00e9 zh\u012b zhe\uff0c r\u00e9n ji\u0101 w\u016b d\u01d0ng sh\u00e0ng qu\u00e1n l\u00f3ng zhe y\u00ec c\u00e9ng b\u00e1o y\u0101n\u3002 sh\u00f9 y\u00e8 zi qu\u00e8 l\u01dc d\u00e9 f\u0101 li\u00e0ng\uff0c xi\u01ceo c\u01ceo y\u011b q\u012bng d\u00e9 b\u012b n\u01d0 de y\u01cen\u3002 b\u00e0ng w\u01cen sh\u00ed h\u00f2u\uff0c sh\u00e0ng d\u0113ng le\uff0c y\u00ec di\u01cen di\u01cen hu\u00e1ng y\u016bn de gu\u0101ng\uff0c h\u014dng tu\u014d ch\u016b y\u00ed pi\u00e0n \u0101n j\u00ecng \u00e9r h\u00e9 p\u00edng de y\u00e8\u3002 xi\u0101ng xi\u00e0 q\u00f9\uff0c xi\u01ceo l\u00f9 shang\uff0c sh\u00ed qi\u00e1o bi\u0101n\uff0c y\u01d2u ch\u0113ng q\u01d0 s\u01cen m\u00e0n m\u00e0n z\u01d2u zhe de r\u00e9n\uff1b h\u00e1i y\u01d2u d\u00ec l\u01d0 g\u014dng zu\u00f2 de n\u00f3ng f\u016b\uff0c p\u012b zhe su\u014d\uff0c d\u00e0i zhe l\u00ec de\u3002 t\u0101 men de c\u01ceo w\u016b\uff0c x\u012b x\u012b sh\u016b sh\u016b de\uff0c z\u00e0i y\u01d4 l\u01d0 j\u00ecng m\u00f2 zhe\u3002",
            "ti\u0101n sh\u00e0ng f\u0113ng zheng ji\u00e0n ji\u00e0n du\u014d le\uff0c d\u00ec sh\u00e0ng h\u00e1i zi y\u011b du\u014d le\u3002 ch\u00e9ng l\u01d0 xi\u0101ng xi\u00e0\uff0c ji\u0101 ji\u0101 h\u00f9 h\u00f9\uff0c l\u01ceo l\u01ceo xi\u01ceo xi\u01ceo\uff0c t\u0101 men y\u011b g\u01cen t\u00e0ng \u00e9r sh\u00ec de\uff0c y\u00ed g\u00e8 g\u00e8 d\u014du ch\u016b l\u00e1i le\u3002 sh\u016b hu\u00f3 sh\u016b hu\u00f3 j\u012bn g\u01d4\uff0c d\u01d2u s\u01d2u d\u01d2u s\u01d2u j\u012bng sh\u00e9n\uff0c g\u00e8 zu\u00f2 g\u00e8 de y\u00ed f\u00e8n sh\u00ec q\u00f9\u3002 \u201c y\u00ec ni\u00e1n zh\u012b j\u00ec z\u00e0i y\u00fa ch\u016bn \u201d\uff0c g\u0101ng q\u01d0 t\u00f3u er\uff0c y\u01d2u de sh\u00ec g\u014dng f\u016b\uff0c y\u01d2u de sh\u00ec x\u012b w\u00e0ng\u3002",
            "ch\u016bn ti\u0101n xi\u00e0ng g\u0101ng lu\u00f2 d\u00ec de w\u00e1 wa\uff0c c\u00f3ng t\u00f3u d\u00e0o ji\u01ceo d\u014du sh\u00ec x\u012bn de\uff0c t\u0101 sh\u0113ng zh\u01ceng zhe\u3002",
            "ch\u016bn ti\u0101n xi\u00e0ng xi\u01ceo g\u016b ni\u00e1ng\uff0c hu\u0101 zh\u012b zh\u0101o zh\u01cen de\uff0c xi\u00e0o zhe\uff0c z\u01d2u zhe\u3002",
            "ch\u016bn ti\u0101n xi\u00e0ng ji\u00e0n zhu\u00e0ng de q\u012bng ni\u00e1n\uff0c y\u01d2u ti\u011b y\u00ec b\u0101n de g\u0113 bo h\u00e9 y\u0101o ji\u01ceo\uff0c t\u0101 l\u01d0ng zhe w\u01d2 men sh\u00e0ng qi\u00e1n q\u00f9\u3002"
          ],
          annotations: [
            { id: 1, term: "朗润", pinyin: "lǎngrùn", definition: "明亮滋润。朗，明亮。润，滋润、润泽。", definitionEn: "Bright and moist. 朗 means bright; 润 means moist, dewy." },
            { id: 2, term: "赶趟儿", pinyin: "gǎntàngr", definition: "本义是时间赶得上，这里指众多果树争先恐后地开花。", definitionEn: "Originally means 'to be in time'; here it means the many fruit trees are competing to bloom." },
            { id: 3, term: "酝酿", pinyin: "yùnniàng", definition: "本义是造酒的发酵过程，这里指各种气息在空气里，像发酵似的，越来越浓。", definitionEn: "Originally refers to the fermentation process in brewing; here it describes various scents thickening in the air as if fermenting." },
            { id: 4, term: "窠巢", pinyin: "kēcháo", definition: "鸟兽昆虫的窝。", definitionEn: "Nests of birds, animals, and insects." },
            { id: 5, term: "宛转", pinyin: "wǎnzhuǎn", definition: "形容声音抑扬动听。现在多写作\u201C婉转\u201D。", definitionEn: "Describes sounds that are melodious and pleasant. Now often written as 婉转." },
            { id: 6, term: "黄晕", pinyin: "huángyùn", definition: "昏黄，不明亮。", definitionEn: "Dim yellow, not bright." },
            { id: 7, term: "花枝招展", pinyin: "huāzhīzhāozhǎn", definition: "形容女子打扮得十分艳丽。这里比喻姿态优美。", definitionEn: "Describes a woman dressed up beautifully; here it is a metaphor for an elegant posture." }
          ],
          thinkExplore: [
            { cn: "在作者笔下，春天就像一幅幅美丽的图画。有感情地朗读课文，看看课文描绘了哪些春日图景。你最喜欢哪一幅画面？说说你的理由。", en: "Under the author's pen, spring is like beautiful paintings. Read the text with feeling and see what spring scenes are depicted. Which picture do you like most? Give your reasons." },
            { cn: "课文读起来富有童趣，又带有诗的味道，清新，活泼，优美。你有没有这样的感觉？试找出一些段落细加品味，并跟同学、老师分享你的体会。", en: "The text feels childlike yet poetic — fresh, lively, and beautiful. Do you feel this way? Try to find some paragraphs to savor and share your thoughts with classmates and teachers." },
            { cn: "作者把春天比作\u201C刚落地的娃娃\u201D\u201C小姑娘\u201D\u201C健壮的青年\u201D，你怎样理解这些比喻？你还能发挥想象，另写一些比喻句来描绘春天吗？", en: "The author compares spring to 'a newborn baby,' 'a young girl,' and 'a sturdy young man.' How do you understand these metaphors? Can you use your imagination to write other metaphors describing spring?" }
          ],
          accumExtend: [
            { cn: "想象下列各句描绘的情景，说说加点语句的表达效果。", en: "Imagine the scenes depicted by the following sentences and discuss the expressive effect of the marked phrases." },
            { cn: "朗读并背诵全文。找出你喜欢的段落，标出语句中的重音和停连，在小组里朗读，互相评价。", en: "Read aloud and recite the entire text. Find your favorite paragraphs, mark the stress and pauses, and read aloud in groups for peer evaluation." }
          ],
          teachingPoints: [
            { cn: "体会比喻和拟人的修辞手法在描写景物中的表达效果。", en: "Appreciate the expressive effects of simile and personification in landscape description." },
            { cn: "学习\u201C不必说……也不必说……单是……\u201D等句式的运用。", en: "Learn to use sentence patterns like 'needless to mention... needless to mention... just...' " }
          ],
          parentTips: [
            { cn: "鼓励孩子朗读全文并尝试背诵，感受散文的韵律美。", en: "Encourage your child to read aloud and try to recite the full text, feeling the rhythmic beauty of the prose." },
            { cn: "可与孩子一起观察季节变化，讨论自然之美。", en: "Observe seasonal changes together with your child and discuss the beauty of nature." }
          ]
        },
        {
          id: 2,
          title: "济南的冬天",
          titleEn: "Winter in Jinan",
          difficulty: 3,
          author: "老舍",
          authorEn: "Lao She",
          source: "节选自《一些印象（四、五、六、七）》（《老舍全集》第十四卷，人民文学出版社1999年版）。题目是编者加的。略有改动。",
          sourceEn: "Excerpted from Some Impressions (IV, V, VI, VII) (Complete Works of Lao She, Vol. 14, People's Literature Publishing House, 1999). Title added by editors. Slightly adapted.",
          vocabWords: [
            {word:'温晴',pinyin:'wēn qíng',en:'warm and sunny',sentence:'在北中国的冬天，而能有温晴的天气。',sentenceEn:'In the winter of north China, to have warm and sunny weather.'},
            {word:'响晴',pinyin:'xiǎng qíng',en:'perfectly clear',sentence:'济南的冬天是响晴的。',sentenceEn:'The winter in Jinan is perfectly clear.'},
            {word:'安适',pinyin:'ān shì',en:'comfortable and cozy',sentence:'全在蓝天下很暖和安适地睡着。',sentenceEn:'All sleeping warm and cozy under the blue sky.'},
            {word:'水墨画',pinyin:'shuǐ mò huà',en:'ink wash painting',sentence:'这是张小水墨画，也许是唐代的名手画的吧。',sentenceEn:'This is a small ink wash painting, perhaps by a master of the Tang dynasty.'},
            {word:'空灵',pinyin:'kōng líng',en:'ethereal; crystalline',sentence:'整个的是块空灵的蓝水晶。',sentenceEn:'The whole thing is an ethereal blue crystal.'}
          ],
          footnotes: [
            {term:"\u6e29\u6674", termEn:"warm and sunny", definition:"\u3010w\u0113n q\u00edng\u3011warm and sunny\u3002", definitionEn:"warm and sunny"},
            {term:"\u54cd\u6674", termEn:"perfectly clear", definition:"\u3010xi\u01ceng q\u00edng\u3011perfectly clear\u3002", definitionEn:"perfectly clear"},
            {term:"\u5b89\u9002", termEn:"comfortable and cozy", definition:"\u3010\u0101n sh\u00ec\u3011comfortable and cozy\u3002", definitionEn:"comfortable and cozy"},
            {term:"\u6c34\u58a8\u753b", termEn:"ink wash painting", definition:"\u3010shu\u01d0 m\u00f2 hu\u00e0\u3011ink wash painting\u3002", definitionEn:"ink wash painting"},
            {term:"\u7a7a\u7075", termEn:"ethereal; crystalline", definition:"\u3010k\u014dng l\u00edng\u3011ethereal; crystalline\u3002", definitionEn:"ethereal; crystalline"}
          ],
          readingTips: [
            {cn:"\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f", en:"Pay attention to the author's narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?"},
            {cn:"\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f", en:"After reading, think: what theme does the author convey? How does the title relate to the content?"}
          ],
          grammarPoints: [
            {point:'对比',pointEn:'duì bǐ',example:'contrast',exampleEn:'对于一个在北平住惯的人，像我，冬天要是不刮大风，便觉得是奇迹。',explanation:'For someone used to living in Beiping, like me, it is a miracle if there is no strong wind in winter.',explanationEn:'通过与北平、伦敦对比突出济南冬天的温暖'}
          ],
          authorBio: {
            cn: "老舍（1899—1966），原名舒庆春，字舍予，北京人，满族，作家。主要作品有小说《骆驼祥子》《四世同堂》，话剧《茶馆》《龙须沟》等。",
            en: "Lao She (1899–1966), original name Shu Qingchun, courtesy name Sheyu, was a Manchu writer from Beijing. Major works include the novels Camel Xiangzi and Four Generations Under One Roof, and the plays Teahouse and Dragon Beard Ditch."
          },
          isSelfRead: false,
          preview: [
            { cn: "在你的印象中，冬天是怎样的，有哪些代表性的景物？朗读课文，看看作者笔下的济南的冬天与你印象中的冬天有什么不同。", en: "What is winter like in your impression, and what are its representative scenes? Read the text aloud and see how the author's Jinan winter differs from your idea of winter." },
            { cn: "课文中的许多景物描写细腻、生动，能唤起你对事物的细微感觉。阅读的时候，注意体会。", en: "Many landscape descriptions in the text are delicate and vivid, evoking subtle feelings about things. Pay attention to these while reading." }
          ],
          text: [
            "对于一个在北平住惯的人，像我，冬天要是不刮大风，便觉得是奇迹；济南的冬天是没有风声的。对于一个刚由伦敦回来的人，像我，冬天要能看得见日光，便觉得是怪事；济南的冬天是响晴的。自然，在热带的地方，日光是永远那么毒，响亮的天气反有点儿叫人害怕。可是，在北中国的冬天，而能有温晴的天气，济南真得算个宝地。",
            "设若单单是有阳光，那也算不了出奇。请闭上眼想：一个老城，有山有水，全在蓝天下很暖和安适地睡着，只等春风来把他们唤醒，这是不是个理想的境界？",
            "小山整把济南围了个圈儿，只有北边缺着点儿口儿。这一圈小山在冬天特别可爱，好像是把济南放在一个小摇篮里，他们全安静不动地低声地说：\u201C你们放心吧，这儿准保暖和。\u201D真的，济南的人们在冬天是面上含笑的。他们一看那些小山，心中便觉得有了着落，有了依靠。他们由天上看到山上，便不觉地想起：\u201C明天也许就是春天了吧？这样的温暖，今天夜里山草也许就绿起来了吧？\u201D就是这点儿幻想不能一时实现，他们也并不着急，因为有这样慈善的冬天，干啥还希望别的呢！",
            "最妙的是下点儿小雪呀。看吧，山上的矮松越发的青黑，树尖儿上顶着一髻儿白花，好像日本看护妇。山尖全白了，给蓝天镶上一道银边。山坡上有的地方雪厚点儿，有的地方草色还露着；这样，一道儿白，一道儿暗黄，给山们穿上一件带水纹的花衣；看着看着，这件花衣好像被风儿吹动，叫你希望看见一点儿更美的山的肌肤。等到快日落的时候，微黄的阳光斜射在山腰上，那点儿薄雪好像忽然害了羞，微微露出点儿粉色。就是下小雪吧，济南是受不住大雪的，那些小山太秀气！",
            "古老的济南，城内那么狭窄，城外又那么宽敞，山坡上卧着些小村庄，小村庄的房顶上卧着点儿雪，对，这是张小水墨画，也许是唐代的名手画的吧。",
            "那水呢，不但不结冰，反倒在绿萍上冒着点儿热气。水藻真绿，把终年贮蓄的绿色全拿出来了。天儿越晴，水藻越绿，就凭这些绿的精神，水也不忍得冻上；况且那长枝的垂柳还要在水里照个影儿呢。看吧，由澄清的河水慢慢往上看吧，空中，半空中，天上，自上而下全是那么清亮，那么蓝汪汪的，整个的是块空灵的蓝水晶。这块水晶里，包着红屋顶、黄草山，像地毯上的小团花的小灰色树影。",
            "这就是冬天的济南。"
          ],
          textEn: [
            "For someone accustomed to living in Beiping, like me, if winter didn't bring fierce winds, it would seem miraculous; Jinan's winter has no sound of wind. For someone just returned from London, like me, if one could see sunlight in winter, it would seem extraordinary; Jinan's winter is brilliantly clear. Naturally, in the tropics, the sunlight is always fierce, and bright weather can be somewhat frightening. But in northern China, to have warm and sunny weather in winter — Jinan truly deserves to be called a treasured place.",
            "If it were merely sunny, that wouldn't be remarkable. Close your eyes and imagine: an old city with mountains and water, all sleeping warmly and comfortably under the blue sky, just waiting for the spring breeze to wake them — isn't that an ideal scene?",
            "The small hills surround Jinan completely, with only a small gap to the north. This ring of little hills is especially lovely in winter, as if cradling Jinan in a small rocking cradle, all quietly and still, whispering softly: 'Rest assured, it will be warm here.' Indeed, people in Jinan smile throughout winter. When they look at those little hills, they feel grounded and supported. Looking from the sky to the mountains, they cannot help but think: 'Perhaps tomorrow will already be spring? With such warmth, maybe the mountain grass will turn green tonight?' Even if this bit of fantasy cannot be realized right away, they are not anxious at all, because with such a benevolent winter, why would they wish for anything else!",
            "The most wonderful thing is a light snowfall. Look — the squat pines on the mountains become even darker green, with a knot of white flowers perched on their tips, like Japanese nurses. The mountain peaks are all white, bordering the blue sky with a silver edge. On the slopes, some places have thicker snow while grass still shows through elsewhere — white patches and dark yellow patches, dressing the mountains in a patterned garment with water-like ripples. As you gaze, this patterned garment seems to flutter in the breeze, making you wish to see a bit more of the mountains' lovely skin beneath. Near sunset, the faintly yellow sunlight slants across the mountainside, and the thin snow seems suddenly shy, blushing with a hint of pink. Let it be just a light snow — Jinan cannot bear a heavy one; those little hills are too delicate!",
            "Ancient Jinan — the city so narrow within, and so spacious without. Little villages nestle on the hillsides, with a dusting of snow on their rooftops. Yes, this is a small ink-wash painting, perhaps by a Tang dynasty master.",
            "And the water? Not only doesn't it freeze, but it actually steams slightly above the green duckweed. The water weeds are truly green, bringing out all the green they've stored up all year. The clearer the sky, the greener the weeds — with such green spirit, even the water can't bear to freeze over. Besides, the long-branched willows still want to admire their reflections in the water. Look — from the clear river slowly upward, through the air, the mid-air, the sky — everything from top to bottom is so clear and bright, so deeply blue, the whole thing is an ethereal blue crystal.",
            "This is winter in Jinan."
          ],
          textPinyin: [
            "du\u00ec y\u00fa y\u00ed g\u00e8 z\u00e0i b\u011bi p\u00edng zh\u00f9 gu\u00e0n de r\u00e9n\uff0c xi\u00e0ng w\u01d2\uff0c d\u014dng ti\u0101n y\u00e0o shi b\u00f9 gu\u0101 d\u00e0 f\u0113ng\uff0c bi\u00e0n ju\u00e9 de sh\u00ec q\u00ed j\u00ec\uff1b j\u01d0 n\u00e1n de d\u014dng ti\u0101n sh\u00ec m\u00e9i y\u01d2u f\u0113ng sh\u0113ng de\u3002 du\u00ec y\u00fa y\u00ed g\u00e8 g\u0101ng y\u00f3u l\u00fan d\u016bn hu\u00ed l\u00e1i de r\u00e9n\uff0c xi\u00e0ng w\u01d2\uff0c d\u014dng ti\u0101n y\u00e0o n\u00e9ng k\u00e0n d\u00e9 ji\u00e0n r\u00ec gu\u0101ng\uff0c bi\u00e0n ju\u00e9 de sh\u00ec gu\u00e0i sh\u00ec\uff1b j\u01d0 n\u00e1n de d\u014dng ti\u0101n sh\u00ec xi\u01ceng q\u00edng de\u3002 z\u00ec r\u00e1n\uff0c z\u00e0i r\u00e8 d\u00e0i de d\u00ec f\u0101ng\uff0c r\u00ec gu\u0101ng sh\u00ec y\u01d2ng yu\u01cen n\u00e0 me d\u00fa\uff0c xi\u01ceng li\u00e0ng de ti\u0101n q\u00ec f\u01cen y\u01d2u di\u01cen er ji\u00e0o r\u00e9n h\u00e0i p\u00e0\u3002 k\u011b sh\u00ec\uff0c z\u00e0i b\u011bi zh\u014dng gu\u00f3 de d\u014dng ti\u0101n\uff0c \u00e9r n\u00e9ng y\u01d2u w\u0113n q\u00edng de ti\u0101n q\u00ec\uff0c j\u01d0 n\u00e1n zh\u0113n d\u00e9 su\u00e0n g\u00e8 b\u01ceo d\u00ec\u3002",
            "sh\u00e8 ru\u00f2 d\u0101n d\u0101n sh\u00ec y\u01d2u y\u00e1ng gu\u0101ng\uff0c n\u00e0 y\u011b su\u00e0n b\u00f9 li\u01ceo ch\u016b q\u00ed\u3002 q\u01d0ng b\u00ec sh\u00e0ng y\u01cen xi\u01ceng\uff1a y\u00ed g\u00e8 l\u01ceo ch\u00e9ng\uff0c y\u01d2u sh\u0101n y\u01d2u shu\u01d0\uff0c qu\u00e1n z\u00e0i l\u00e1n ti\u0101n xi\u00e0 h\u011bn nu\u01cen huo \u0101n sh\u00ec d\u00ec shu\u00ec zhe\uff0c zh\u012b d\u011bng ch\u016bn f\u0113ng l\u00e1i b\u01ce t\u0101 men hu\u00e0n x\u01d0ng\uff0c zh\u00e8 sh\u00ec bu sh\u00ec g\u00e8 l\u01d0 xi\u01ceng de j\u00ecng ji\u00e8\uff1f",
            "xi\u01ceo sh\u0101n zh\u011bng b\u01ce j\u01d0 n\u00e1n w\u00e9i le g\u00e8 qu\u0101n \u00e9r\uff0c zh\u01d0 y\u01d2u b\u011bi bi\u0101n qu\u0113 zhe di\u01cen \u00e9r k\u01d2u \u00e9r\u3002 zh\u00e8 y\u00ec qu\u0101n xi\u01ceo sh\u0101n z\u00e0i d\u014dng ti\u0101n t\u00e8 bi\u00e9 k\u011b \u00e0i\uff0c h\u01ceo xi\u00e0ng sh\u00ec b\u01ce j\u01d0 n\u00e1n f\u00e0ng z\u00e0i y\u00ed g\u00e8 xi\u01ceo y\u00e1o l\u00e1n l\u01d0\uff0c t\u0101 men qu\u00e1n \u0101n j\u00ecng b\u00fa d\u00f2ng d\u00ec d\u012b sh\u0113ng d\u00ec shu\u014d\uff1a \u201c n\u01d0 men f\u00e0ng x\u012bn ba\uff0c zh\u00e8 \u00e9r zh\u01d4n b\u01ceo nu\u01cen huo\u3002 \u201d zh\u0113n de\uff0c j\u01d0 n\u00e1n de r\u00e9n men z\u00e0i d\u014dng ti\u0101n sh\u00ec mi\u00e0n sh\u00e0ng h\u00e1n xi\u00e0o de\u3002 t\u0101 men y\u00ed k\u00e0n n\u00e0 xi\u0113 xi\u01ceo sh\u0101n\uff0c x\u012bn zh\u014dng bi\u00e0n ju\u00e9 de y\u01d2u le zhu\u00f3 lu\u00f2\uff0c y\u01d2u le y\u012b k\u00e0o\u3002 t\u0101 men y\u00f3u ti\u0101n sh\u00e0ng k\u00e0n d\u00e0o sh\u0101n sh\u00e0ng\uff0c bi\u00e0n b\u00f9 ju\u00e9 d\u00ec xi\u01ceng q\u01d0\uff1a \u201c m\u00edng ti\u0101n y\u011b x\u01d4 ji\u00f9 sh\u00ec ch\u016bn ti\u0101n le ba\uff1f zh\u00e8 y\u00e0ng de w\u0113n nu\u01cen\uff0c j\u012bn ti\u0101n y\u00e8 l\u01d0 sh\u0101n c\u01ceo y\u011b x\u01d4 ji\u00f9 l\u01dc q\u01d0 l\u00e1i le ba\uff1f \u201d ji\u00f9 sh\u00ec zh\u00e8 di\u01cen \u00e9r hu\u00e0n xi\u01ceng b\u00f9 n\u00e9ng y\u00ec sh\u00ed sh\u00ed xi\u00e0n\uff0c t\u0101 men y\u011b b\u00ecng b\u00f9 zh\u00e1o j\u00ed\uff0c y\u012bn w\u00e8i y\u01d2u zh\u00e8 y\u00e0ng c\u00ed sh\u00e0n de d\u014dng ti\u0101n\uff0c g\u0101n sh\u00e1 h\u00e1i x\u012b w\u00e0ng bi\u00e9 de ne\uff01",
            "zu\u00ec mi\u00e0o de sh\u00ec xi\u00e0 di\u01cen \u00e9r xi\u01ceo xu\u011b ya\u3002 k\u00e0n ba\uff0c sh\u0101n sh\u00e0ng de \u01cei s\u014dng yu\u00e8 f\u0101 de q\u012bng h\u0113i\uff0c sh\u00f9 ji\u0101n \u00e9r sh\u00e0ng d\u01d0ng zhe y\u00ed j\u00ec \u00e9r b\u00e1i hu\u0101\uff0c h\u01ceo xi\u00e0ng r\u00ec b\u011bn k\u0101n h\u00f9 f\u00f9\u3002 sh\u0101n ji\u0101n qu\u00e1n b\u00e1i le\uff0c g\u011bi l\u00e1n ti\u0101n xi\u0101ng sh\u00e0ng y\u00ed d\u00e0o y\u00edn bi\u0101n\u3002 sh\u0101n p\u014d sh\u00e0ng y\u01d2u de d\u00ec f\u0101ng xu\u011b h\u00f2u di\u01cen \u00e9r\uff0c y\u01d2u de d\u00ec f\u0101ng c\u01ceo s\u00e8 h\u00e1i l\u00f9 zhe\uff1b zh\u00e8 y\u00e0ng\uff0c y\u00ed d\u00e0o \u00e9r b\u00e1i\uff0c y\u00ed d\u00e0o \u00e9r \u00e0n hu\u00e1ng\uff0c g\u011bi sh\u0101n men chu\u0101n sh\u00e0ng y\u00ed ji\u00e0n d\u00e0i shu\u01d0 w\u00e9n de hu\u0101 y\u012b\uff1b k\u00e0n zhe k\u00e0n zhe\uff0c zh\u00e8 ji\u00e0n hu\u0101 y\u012b h\u01ceo xi\u00e0ng b\u00e8i f\u0113ng \u00e9r chu\u012b d\u00f2ng\uff0c ji\u00e0o n\u01d0 x\u012b w\u00e0ng k\u00e0n ji\u00e0n y\u00ec di\u01cen \u00e9r g\u00e8ng m\u011bi de sh\u0101n de j\u012b f\u016b\u3002 d\u011bng d\u00e0o ku\u00e0i r\u00ec lu\u00f2 de sh\u00ed h\u00f2u\uff0c w\u0113i hu\u00e1ng de y\u00e1ng gu\u0101ng xi\u00e9 sh\u00e8 z\u00e0i sh\u0101n y\u0101o sh\u00e0ng\uff0c n\u00e0 di\u01cen \u00e9r b\u00e1o xu\u011b h\u01ceo xi\u00e0ng h\u016b r\u00e1n h\u00e0i le xi\u016b\uff0c w\u0113i w\u0113i l\u00f9 ch\u016b di\u01cen \u00e9r f\u011bn s\u00e8\u3002 ji\u00f9 sh\u00ec xi\u00e0 xi\u01ceo xu\u011b ba\uff0c j\u01d0 n\u00e1n sh\u00ec sh\u00f2u b\u00fa zh\u00f9 d\u00e0 xu\u011b de\uff0c n\u00e0 xi\u0113 xi\u01ceo sh\u0101n t\u00e0i xi\u00f9 q\u00ec\uff01",
            "g\u01d4 l\u01ceo de j\u01d0 n\u00e1n\uff0c ch\u00e9ng n\u00e8i n\u00e0 me xi\u00e1 zh\u01cei\uff0c ch\u00e9ng w\u00e0i y\u00f2u n\u00e0 me ku\u0101n ch\u01ceng\uff0c sh\u0101n p\u014d sh\u00e0ng w\u00f2 zhe xi\u0113 xi\u01ceo c\u016bn zhu\u0101ng\uff0c xi\u01ceo c\u016bn zhu\u0101ng de f\u00e1ng d\u01d0ng sh\u00e0ng w\u00f2 zhe di\u01cen \u00e9r xu\u011b\uff0c du\u00ec\uff0c zh\u00e8 sh\u00ec zh\u0101ng xi\u01ceo shu\u01d0 m\u00f2 hu\u00e0\uff0c y\u011b x\u01d4 sh\u00ec t\u00e1ng d\u00e0i de m\u00edng sh\u01d2u hu\u00e0 de ba\u3002",
            "n\u00e0 shu\u01d0 ne\uff0c b\u00fa d\u00e0n b\u00f9 ji\u00e9 b\u012bng\uff0c f\u01cen d\u01ceo z\u00e0i l\u01dc p\u00edng sh\u00e0ng m\u00e0o zhe di\u01cen \u00e9r r\u00e8 q\u00ec\u3002 shu\u01d0 z\u01ceo zh\u0113n l\u01dc\uff0c b\u01ce zh\u014dng ni\u00e1n zh\u00f9 x\u00f9 de l\u01dc s\u00e8 qu\u00e1n n\u00e1 ch\u016b l\u00e1i le\u3002 ti\u0101n \u00e9r yu\u00e8 q\u00edng\uff0c shu\u01d0 z\u01ceo yu\u00e8 l\u01dc\uff0c ji\u00f9 p\u00edng zh\u00e8 xi\u0113 l\u01dc de j\u012bng sh\u00e9n\uff0c shu\u01d0 y\u011b b\u00f9 r\u011bn d\u00e9 d\u00f2ng sh\u00e0ng\uff1b ku\u00e0ng qi\u011b n\u00e0 ch\u00e1ng zh\u012b de chu\u00ed li\u01d4 h\u00e1i y\u00e0o z\u00e0i shu\u01d0 l\u01d0 zh\u00e0o g\u00e8 y\u01d0ng \u00e9r ne\u3002 k\u00e0n ba\uff0c y\u00f3u ch\u00e9ng q\u012bng de h\u00e9 shu\u01d0 m\u00e0n m\u00e0n w\u01ceng sh\u00e0ng k\u00e0n ba\uff0c k\u014dng zh\u014dng\uff0c b\u00e0n k\u014dng zh\u014dng\uff0c ti\u0101n sh\u00e0ng\uff0c z\u00ec sh\u00e0ng \u00e9r xi\u00e0 qu\u00e1n sh\u00ec n\u00e0 me q\u012bng li\u00e0ng\uff0c n\u00e0 me l\u00e1n w\u0101ng w\u0101ng de\uff0c zh\u011bng g\u00e8 de sh\u00ec ku\u00e0i k\u014dng l\u00edng de l\u00e1n shu\u01d0 j\u012bng\u3002 zh\u00e8 ku\u00e0i shu\u01d0 j\u012bng l\u01d0\uff0c b\u0101o zhe h\u00f3ng w\u016b d\u01d0ng\u3001 hu\u00e1ng c\u01ceo sh\u0101n\uff0c xi\u00e0ng d\u00ec t\u01cen sh\u00e0ng de xi\u01ceo tu\u00e1n hu\u0101 de xi\u01ceo hu\u012b s\u00e8 sh\u00f9 y\u01d0ng\u3002",
            "zh\u00e8 ji\u00f9 sh\u00ec d\u014dng ti\u0101n de j\u01d0 n\u00e1n\u3002"
          ],
          annotations: [
            { id: 1, term: "响晴", pinyin: "xiǎngqíng", definition: "晴朗无云。", definitionEn: "Clear and cloudless." },
            { id: 2, term: "髻", pinyin: "jì", definition: "原指在头顶或脑后盘成的各种形状的头发，这里比喻树尖上的积雪如发髻一般。", definitionEn: "Originally refers to hair arranged in various shapes on top of or behind the head; here it likens the snow on treetops to a hair bun." },
            { id: 3, term: "水墨画", pinyin: "shuǐmòhuà", definition: "纯用水墨不着彩色的国画。", definitionEn: "A traditional Chinese painting using only water and ink without color." },
            { id: 4, term: "绿萍", pinyin: "lǜpíng", definition: "植物名，又名\u201C满江红\u201D，叶子浮出水面，春季绿色，夏季红褐色。", definitionEn: "A plant also known as 'full river red' (Azolla); its leaves float on water, green in spring and reddish-brown in summer." }
          ],
          thinkExplore: [
            { cn: "作者所写的济南的冬天有着怎样的特点？他是通过哪些景物呈现这一特点的？", en: "What characteristics does the author ascribe to Jinan's winter? Through which scenes does he present these characteristics?" },
            { cn: "冬天的济南在作者的眼中是个\u201C理想的境界\u201D，他为什么会有这样的感受？", en: "In the author's eyes, winter in Jinan is an 'ideal realm.' Why does he feel this way?" }
          ],
          accumExtend: [
            { cn: "品味下列语句，体会句中拟人手法的表达效果。", en: "Savor the following sentences and appreciate the expressive effect of personification." },
            { cn: "借鉴课文的某些写法，就你家乡冬天的风景写一个片段。注意抓住特点来写，不少于200字。", en: "Using some of the writing techniques from the text, write a passage about winter scenery in your hometown. Focus on capturing distinctive features, at least 200 words." }
          ],
          teachingPoints: [
            { cn: "体会拟人修辞在景物描写中的独特效果。", en: "Appreciate the unique effect of personification in landscape description." },
            { cn: "学习对比手法（北平、伦敦与济南的对比）的运用。", en: "Learn the use of contrast (comparing Beiping, London with Jinan)." }
          ],
          parentTips: [
            { cn: "可与孩子讨论不同城市的冬天有何不同，培养观察与表达能力。", en: "Discuss with your child how winter differs in various cities to develop observation and expression skills." }
          ]
        },
        {
          id: 3,
          title: "雨的四季",
          titleEn: "Rain in Four Seasons",
          difficulty: 5,
          author: "刘湛秋",
          authorEn: "Liu Zhanqiu",
          source: "选自《散文》1989年第4期。略有改动。",
          sourceEn: "Selected from Prose magazine, Issue 4, 1989. Slightly adapted.",
          vocabWords: [
            {word:'静谧',pinyin:'jìng mì',en:'tranquil; serene',sentence:'是使人静谧、使人怀想、使人动情的秋雨啊！',sentenceEn:'It is the autumn rain that makes people tranquil, nostalgic, and emotional!'},
            {word:'高邈',pinyin:'gāo miǎo',en:'high and distant',sentence:'你只会感到更高邈、深远。',sentenceEn:'You will only feel it more high and distant, profound.'},
            {word:'莅临',pinyin:'lì lín',en:'arrive (of honored guests)',sentence:'它经常变成美丽的雪花，飘然莅临人间。',sentenceEn:'It often turns into beautiful snowflakes, gracefully arriving in the human world.'},
            {word:'粗犷',pinyin:'cū guǎng',en:'bold and uninhibited',sentence:'夏天的雨也有夏天的性格，热烈而又粗犷。',sentenceEn:'Summer rain has the character of summer, passionate and bold.'},
            {word:'吝啬',pinyin:'lìn sè',en:'stingy; sparing',sentence:'它变得更吝啬了。',sentenceEn:'It becomes more sparing.'}
          ],
          grammarPoints: [
            {point: "\u6bd4\u55bb", pointEn: "Simile/Metaphor", example: "\u6211\u559c\u6b22\u96e8\uff0c\u65e0\u8bba\u4ec0\u4e48\u5b63\u8282\u7684\u96e8\uff0c\u6211\u90fd\u559c\u6b22\u3002", exampleEn: "I love rain \u2014 rain of any season, I love it all. The image and memory she gives ", explanation: "\u901a\u8fc7\u6bd4\u55bb\u4f7f\u62bd\u8c61\u7684\u4e8b\u7269\u5177\u4f53\u5316\uff0c\u589e\u5f3a\u8868\u8fbe\u6548\u679c", explanationEn: "Using metaphor to make abstract things concrete and enhance expressive effect"},
            {point: "\u8868\u8fbe\u65b9\u5f0f", pointEn: "Modes of expression", example: "\u6211\u559c\u6b22\u96e8\uff0c\u65e0\u8bba\u4ec0\u4e48\u5b63\u8282\u7684\u96e8\uff0c\u6211\u90fd\u559c\u6b22\u3002", exampleEn: "I love rain \u2014 rain of any season, I love it all. The image and memory she gives ", explanation: "\u53d9\u8ff0\u3001\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\u4e94\u79cd\u57fa\u672c\u8868\u8fbe\u65b9\u5f0f", explanationEn: "Five basic modes: narration, description, argumentation, lyrical expression, and exposition"}
          ],
          footnotes: [
            {term:"\u9759\u8c27", termEn:"tranquil; serene", definition:"\u3010j\u00ecng m\u00ec\u3011tranquil; serene\u3002", definitionEn:"tranquil; serene"},
            {term:"\u9ad8\u9088", termEn:"high and distant", definition:"\u3010g\u0101o mi\u01ceo\u3011high and distant\u3002", definitionEn:"high and distant"},
            {term:"\u8385\u4e34", termEn:"arrive (of honored guests)", definition:"\u3010l\u00ec l\u00edn\u3011arrive (of honored guests)\u3002", definitionEn:"arrive (of honored guests)"},
            {term:"\u7c97\u72b7", termEn:"bold and uninhibited", definition:"\u3010c\u016b gu\u01ceng\u3011bold and uninhibited\u3002", definitionEn:"bold and uninhibited"},
            {term:"\u541d\u556c", termEn:"stingy; sparing", definition:"\u3010l\u00ecn s\u00e8\u3011stingy; sparing\u3002", definitionEn:"stingy; sparing"}
          ],
          readingTips: [
            {cn:"\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f", en:"Pay attention to the author's narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?"},
            {cn:"\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f", en:"After reading, think: what theme does the author convey? How does the title relate to the content?"}
          ],
          accumExtend: [
            {cn: "\u8bfe\u6587\u4e2d\u6709\u4e0d\u5c11\u597d\u8bcd\u4f73\u53e5\uff0c\u5982\u201c\u9759\u8c27\u3001\u9ad8\u9088\u3001\u8385\u4e34\u201d\u7b49\u3002\u8bf7\u6458\u5f55\u4f60\u559c\u6b22\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u5e76\u8bd5\u7740\u5728\u81ea\u5df1\u7684\u5199\u4f5c\u4e2d\u8fd0\u7528\u3002", en: "The text contains fine words and phrases such as \"\u9759\u8c27\u3001\u9ad8\u9088\u3001\u8385\u4e34\". Collect the words and sentences you like and try using them in your own writing."},
            {cn: "\u9009\u62e9\u8bfe\u6587\u4e2d\u4f60\u6700\u559c\u6b22\u7684\u4e00\u4e2a\u6bb5\u843d\uff0c\u6709\u611f\u60c5\u5730\u6717\u8bfb\uff0c\u6807\u51fa\u91cd\u97f3\u548c\u505c\u8fde\uff0c\u5728\u5c0f\u7ec4\u91cc\u4e92\u76f8\u8bc4\u4ef7\u3002", en: "Choose your favorite paragraph, read it with feeling, mark stress and pauses, and do peer evaluation in groups."},
            {cn: "\u8bfe\u5916\u9605\u8bfb\u5218\u6e5b\u79cb\u7684\u5176\u4ed6\u4f5c\u54c1\uff0c\u6bd4\u8f83\u4e0e\u672c\u6587\u7684\u5f02\u540c\uff0c\u5199\u4e00\u7bc7\u77ed\u6587\u5206\u4eab\u4f60\u7684\u53d1\u73b0\u3002", en: "Read other works by Liu Zhanqiu and compare them with this text. Write a short essay sharing your findings."}
          ],
          thinkExplore: [
            {cn: "\u6717\u8bfb\u8bfe\u6587\uff0c\u6982\u62ec\u6587\u7ae0\u7684\u4e3b\u8981\u5185\u5bb9\u3002\u4f5c\u8005\u60f3\u8981\u8868\u8fbe\u7684\u4e2d\u5fc3\u601d\u60f3\u662f\u4ec0\u4e48\uff1f", en: "Read the text aloud and summarize its main content. What central idea does the author wish to convey?"},
            {cn: "\u6587\u4e2d\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bed\u53e5\u6216\u6bb5\u843d\uff1f\u627e\u51fa\u6765\u54c1\u5473\u5176\u4e2d\u7684\u8868\u8fbe\u6548\u679c\uff0c\u5e76\u4e0e\u540c\u5b66\u5206\u4eab\u4f60\u7684\u611f\u53d7\u3002", en: "Which sentences or paragraphs are most impressive? Identify them, appreciate their expressive effects, and share your feelings with classmates."},
            {cn: "\u7ed3\u5408\u4f5c\u8005\u5218\u6e5b\u79cb\u7684\u5199\u4f5c\u80cc\u666f\uff0c\u8c08\u8c08\u4f60\u5bf9\u8fd9\u7bc7\u6587\u7ae0\u7684\u7406\u89e3\u3002\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8981\u5199\u8fd9\u7bc7\u6587\u7ae0\uff1f", en: "Considering the author Liu Zhanqiu's background, discuss your understanding. Why did the author write this?"}
          ],
          authorBio: {
            cn: "刘湛秋，当代诗人、散文家。",
            en: "Liu Zhanqiu is a contemporary poet and essayist."
          },
          isSelfRead: true,
          preview: [
            { cn: "自读课文，感受作者笔下四季之雨各自不同的特点与情韵。", en: "Read the text independently and feel the different characteristics and moods of rain in each season as depicted by the author." }
          ],
          text: [
            "我喜欢雨，无论什么季节的雨，我都喜欢。她给我的形象和记忆，永远是美的。",
            "春天，树叶开始闪出黄青，花苞轻轻地在风中摆动，似乎还带着一种冬天的昏黄。可是只要经过一场春雨的洗淋，那种颜色和神态是难以想象的。每一棵树仿佛都睁开特别明亮的眼睛，树枝的手臂也顿时柔软了，而那萌发的叶子，简直就像起伏着一层绿茵茵的波浪。水珠子从花苞里滴下来，比少女的眼泪还娇媚。半空中似乎总挂着透明的水雾的丝帘，牵动着阳光的彩棱镜。这时，整个大地是美丽的。小草似乎像复苏的蚯蚓一样翻动，发出一种春天才能听到的沙沙声。呼吸变得畅快，空气里像有无数芳甜的果子，在诱惑着鼻子和嘴唇。真的，只有这一场雨，才完全驱走了冬天，才使世界改变了姿容。",
            "而夏天，就更是别有一番风情了。夏天的雨也有夏天的性格，热烈而又粗犷。天上聚集几朵乌云，有时连一点儿雷的预告也没有，你还来不及思索，豆粒大的雨点就打来了。可这时雨并不可怕，因为你浑身的毛孔都热得张开了嘴，巴望着那清凉的甘露。打伞、戴斗笠固然能保持身上的干爽，可光头浇、洗个雨澡更有滋味。",
            "当田野染上一层金黄，各种各样的果实摇着铃铛的时候，雨，似乎也像出嫁生了孩子的妇人，显得端庄而又沉静了。这时候，雨不大出门。田野上几乎总是金黄的太阳。忽然，在一个夜晚，窗玻璃上发出了响声，那是雨，是使人静谧、使人怀想、使人动情的秋雨啊！",
            "也许，到冬天来临，人们会讨厌雨吧！但这时候，雨已经化了妆，它经常变成美丽的雪花，飘然莅临人间。但在南国，雨仍然偶尔造访大地，但它变得更吝啬了。它既不倾盆瓢泼，又不绵绵如丝，或淅淅沥沥，它显出一种自然、平静。",
            "啊，雨，我爱恋的雨啊，你一年四季常在我的眼前流动，你给我的生命带来活跃，你给我的感情带来滋润，你给我的思想带来流动。只有在雨中，我才真正感到这世界是活的，是有欢乐和泪水的。但在北方干燥的城市，我们的相逢是多么稀少！只希望日益增多的绿色，能把你请回我们的生活之中。",
            "啊，总是美丽而使人爱恋的雨啊！"
          ],
          textEn: [
            "I love rain — rain of any season, I love it all. The image and memory she gives me is always beautiful.",
            "In spring, leaves begin to flash yellow-green, flower buds gently sway in the wind, seemingly still carrying a wintry dimness. But after a spring rain washes over everything, the colors and expressions are beyond imagination. Every tree seems to open especially bright eyes, the arms of branches suddenly become supple, and the sprouting leaves undulate like a layer of green waves. Droplets fall from flower buds, more charming than a maiden's tears. In midair there seems always to hang a transparent curtain of misty silk, tugging at the prism of sunlight. At this moment, the whole earth is beautiful. The grass seems to turn and stir like earthworms awakening, making a rustling sound that can only be heard in spring. Breathing becomes easy and free; the air seems to hold countless sweet, fragrant fruits, tempting your nose and lips. Truly, only this rain can completely drive away winter and transform the face of the world.",
            "Summer has its own distinct charm. Summer rain has summer's personality — passionate and bold. A few dark clouds gather in the sky, sometimes without even a hint of thunder, and before you can think, bean-sized raindrops are upon you. But the rain isn't frightening then, because every pore on your body has opened its mouth from the heat, yearning for that cool nectar.",
            "When the fields are dyed golden and all kinds of fruits are shaking their bells, the rain seems like a married woman who has had children — dignified and calm. The rain doesn't go out much then. The fields are almost always golden with sunlight. Suddenly, one night, a sound comes from the window glass — it is rain, the autumn rain that brings tranquility, nostalgia, and emotion!",
            "Perhaps when winter comes, people will dislike rain! But by then, rain has changed its costume, often becoming beautiful snowflakes that gracefully descend upon the world. But in the south, rain still occasionally visits the earth, though it has become more sparing.",
            "Ah, rain — my beloved rain! You flow before my eyes through all four seasons, bringing vitality to my life, moisture to my feelings, fluidity to my thoughts. Only in rain do I truly feel this world is alive, with both joy and tears. But in the dry cities of the north, how rare our meetings are! I only hope that the ever-increasing greenery can invite you back into our lives.",
            "Ah, rain — always beautiful and beloved!"
          ],
          textPinyin: [
            "w\u01d2 x\u01d0 huan y\u01d4\uff0c w\u00fa l\u00f9n sh\u00e9n me j\u00ec ji\u00e9 de y\u01d4\uff0c w\u01d2 d\u014du x\u01d0 huan\u3002 t\u0101 g\u011bi w\u01d2 de x\u00edng xi\u00e0ng h\u00e9 j\u00ec y\u00ec\uff0c y\u01d2ng yu\u01cen sh\u00ec m\u011bi de\u3002",
            "ch\u016bn ti\u0101n\uff0c sh\u00f9 y\u00e8 k\u0101i sh\u01d0 sh\u01cen ch\u016b hu\u00e1ng q\u012bng\uff0c hu\u0101 b\u0101o q\u012bng q\u012bng d\u00ec z\u00e0i f\u0113ng zh\u014dng b\u01cei d\u00f2ng\uff0c s\u00ec h\u016b h\u00e1i d\u00e0i zhe y\u00ec zh\u01d2ng d\u014dng ti\u0101n de h\u016bn hu\u00e1ng\u3002 k\u011b sh\u00ec zh\u01d0 y\u00e0o j\u012bng gu\u00f2 y\u00ec ch\u01ceng ch\u016bn y\u01d4 de x\u01d0 l\u00edn\uff0c n\u00e0 zh\u01d2ng y\u00e1n s\u00e8 h\u00e9 sh\u00e9n t\u00e0i sh\u00ec n\u00e1n y\u01d0 xi\u01ceng xi\u00e0ng de\u3002 m\u011bi y\u00ec k\u0113 sh\u00f9 f\u01ceng f\u00fa d\u014du zh\u0113ng k\u0101i t\u00e8 bi\u00e9 m\u00edng li\u00e0ng de y\u01cen j\u012bng\uff0c sh\u00f9 zh\u012b de sh\u01d2u b\u00ec y\u011b d\u00f9n sh\u00ed r\u00f3u ru\u01cen le\uff0c \u00e9r n\u00e0 m\u00e9ng f\u0101 de y\u00e8 z\u01d0\uff0c ji\u01cen zh\u00ed ji\u00f9 xi\u00e0ng q\u01d0 f\u00fa zhe y\u00ec c\u00e9ng l\u01dc y\u012bn y\u012bn de b\u014d l\u00e0ng\u3002 shu\u01d0 zh\u016b z\u01d0 c\u00f3ng hu\u0101 b\u0101o l\u01d0 d\u012b xi\u00e0 l\u00e1i\uff0c b\u01d0 sh\u00e0o n\u01da de y\u01cen l\u00e8i h\u00e1i ji\u0101o m\u00e8i\u3002 b\u00e0n k\u014dng zh\u014dng s\u00ec h\u016b z\u01d2ng gu\u00e0 zhe t\u00f2u m\u00edng de shu\u01d0 w\u00f9 de s\u012b li\u00e1n\uff0c qi\u0101n d\u00f2ng zhe y\u00e1ng gu\u0101ng de c\u01cei l\u00e9ng j\u00ecng\u3002 zh\u00e8 sh\u00ed\uff0c zh\u011bng g\u00e8 d\u00e0 d\u00ec sh\u00ec m\u011bi l\u00ec de\u3002 xi\u01ceo c\u01ceo s\u00ec h\u016b xi\u00e0ng f\u00f9 s\u016b de qi\u016b y\u01d0n y\u00ed y\u00e0ng f\u0101n d\u00f2ng\uff0c f\u0101 ch\u016b y\u00ec zh\u01d2ng ch\u016bn ti\u0101n c\u00e1i n\u00e9ng t\u012bng d\u00e0o de sh\u0101 sh\u0101 sh\u0113ng\u3002 h\u016b x\u012b bi\u00e0n de ch\u00e0ng ku\u00e0i\uff0c k\u014dng q\u00ec l\u01d0 xi\u00e0ng y\u01d2u w\u00fa sh\u00f9 f\u0101ng ti\u00e1n de gu\u01d2 z\u01d0\uff0c z\u00e0i y\u00f2u hu\u00f2 zhe b\u00ed zi h\u00e9 zu\u01d0 ch\u00fan\u3002 zh\u0113n de\uff0c zh\u012b y\u01d2u zh\u00e8 y\u00ec ch\u01ceng y\u01d4\uff0c c\u00e1i w\u00e1n qu\u00e1n q\u016b z\u01d2u le d\u014dng ti\u0101n\uff0c c\u00e1i sh\u01d0 sh\u00ec ji\u00e8 g\u01cei bi\u00e0n le z\u012b r\u00f3ng\u3002",
            "\u00e9r xi\u00e0 ti\u0101n\uff0c ji\u00f9 g\u00e8ng sh\u00ec bi\u00e9 y\u01d2u y\u00ec f\u0101n f\u0113ng q\u00edng le\u3002 xi\u00e0 ti\u0101n de y\u01d4 y\u011b y\u01d2u xi\u00e0 ti\u0101n de x\u00ecng g\u00e9\uff0c r\u00e8 li\u00e8 \u00e9r y\u00f2u c\u016b gu\u01ceng\u3002 ti\u0101n sh\u00e0ng j\u00f9 j\u00ed j\u01d0 du\u01d2 w\u016b y\u00fan\uff0c y\u01d2u sh\u00ed li\u00e1n y\u00ec di\u01cen \u00e9r l\u00e9i de y\u00f9 g\u00e0o y\u011b m\u00e9i y\u01d2u\uff0c n\u01d0 h\u00e1i l\u00e1i b\u00f9 j\u00ed s\u012b su\u01d2\uff0c d\u00f2u l\u00ec d\u00e0 de y\u01d4 di\u01cen ji\u00f9 d\u01ce l\u00e1i le\u3002 k\u011b zh\u00e8 sh\u00ed y\u01d4 b\u00ecng b\u00f9 k\u011b p\u00e0\uff0c y\u012bn w\u00e8i n\u01d0 h\u00fan sh\u0113n de m\u00e1o k\u01d2ng d\u014du r\u00e8 d\u00e9 zh\u0101ng k\u0101i le zu\u01d0\uff0c b\u0101 w\u00e0ng zhe n\u00e0 q\u012bng li\u00e1ng de g\u0101n l\u00f9\u3002 d\u01ce s\u01cen\u3001 d\u00e0i d\u00f2u l\u00ec g\u00f9 r\u00e1n n\u00e9ng b\u01ceo ch\u00ed sh\u0113n sh\u00e0ng de g\u0101n shu\u01ceng\uff0c k\u011b gu\u0101ng t\u00f3u ji\u0101o\u3001 x\u01d0 g\u00e8 y\u01d4 z\u01ceo g\u00e8ng y\u01d2u z\u012b w\u00e8i\u3002",
            "d\u0101ng ti\u00e1n y\u011b r\u01cen sh\u00e0ng y\u00ec c\u00e9ng j\u012bn hu\u00e1ng\uff0c g\u00e8 zh\u01d2ng g\u00e8 y\u00e0ng de gu\u01d2 sh\u00ed y\u00e1o zhe l\u00edng d\u0101ng de sh\u00ed h\u00f2u\uff0c y\u01d4\uff0c s\u00ec h\u016b y\u011b xi\u00e0ng ch\u016b ji\u00e0 sh\u0113ng le h\u00e1i zi de f\u00f9 r\u00e9n\uff0c xi\u01cen de du\u0101n zhu\u0101ng \u00e9r y\u00f2u ch\u00e9n j\u00ecng le\u3002 zh\u00e8 sh\u00ed h\u00f2u\uff0c y\u01d4 b\u00fa d\u00e0 ch\u016b m\u00e9n\u3002 ti\u00e1n y\u011b sh\u00e0ng j\u012b h\u016b z\u01d2ng sh\u00ec j\u012bn hu\u00e1ng de t\u00e0i y\u00e1ng\u3002 h\u016b r\u00e1n\uff0c z\u00e0i y\u00ed g\u00e8 y\u00e8 w\u01cen\uff0c chu\u0101ng b\u014d l\u00ed sh\u00e0ng f\u0101 ch\u016b le xi\u01ceng sh\u0113ng\uff0c n\u00e0 sh\u00ec y\u01d4\uff0c sh\u00ec sh\u01d0 r\u00e9n j\u00ecng m\u00ec\u3001 sh\u01d0 r\u00e9n hu\u00e1i xi\u01ceng\u3001 sh\u01d0 r\u00e9n d\u00f2ng q\u00edng de qi\u016b y\u01d4 a\uff01",
            "y\u011b x\u01d4\uff0c d\u00e0o d\u014dng ti\u0101n l\u00e1i l\u00edn\uff0c r\u00e9n men hu\u00ec t\u01ceo y\u00e0n y\u01d4 ba\uff01 d\u00e0n zh\u00e8 sh\u00ed h\u00f2u\uff0c y\u01d4 y\u01d0 j\u012bng hu\u00e0 le zhu\u0101ng\uff0c t\u0101 j\u012bng ch\u00e1ng bi\u00e0n ch\u00e9ng m\u011bi l\u00ec de xu\u011b hu\u0101\uff0c pi\u0101o r\u00e1n l\u00ec l\u00edn r\u00e9n ji\u0101n\u3002 d\u00e0n z\u00e0i n\u00e1n gu\u00f3\uff0c y\u01d4 r\u00e9ng r\u00e1n \u01d2u \u011br z\u00e0o f\u01ceng d\u00e0 d\u00ec\uff0c d\u00e0n t\u0101 bi\u00e0n de g\u00e8ng l\u00ecn s\u00e8 le\u3002 t\u0101 j\u00ec b\u00f9 q\u012bng p\u00e9n pi\u00e1o p\u014d\uff0c y\u00f2u b\u00f9 mi\u00e1n mi\u00e1n r\u00fa s\u012b\uff0c hu\u00f2 x\u012b x\u012b l\u00ec l\u00ec\uff0c t\u0101 xi\u01cen ch\u016b y\u00ec zh\u01d2ng z\u00ec r\u00e1n\u3001 p\u00edng j\u00ecng\u3002",
            "a\uff0c y\u01d4\uff0c w\u01d2 \u00e0i li\u00e0n de y\u01d4 a\uff0c n\u01d0 y\u00ec ni\u00e1n s\u00ec j\u00ec ch\u00e1ng z\u00e0i w\u01d2 de y\u01cen qi\u00e1n li\u00fa d\u00f2ng\uff0c n\u01d0 g\u011bi w\u01d2 de sh\u0113ng m\u00ecng d\u00e0i l\u00e1i hu\u00f3 yu\u00e8\uff0c n\u01d0 g\u011bi w\u01d2 de g\u01cen q\u00edng d\u00e0i l\u00e1i z\u012b r\u00f9n\uff0c n\u01d0 g\u011bi w\u01d2 de s\u012b xi\u01ceng d\u00e0i l\u00e1i li\u00fa d\u00f2ng\u3002 zh\u01d0 y\u01d2u z\u00e0i y\u01d4 zh\u014dng\uff0c w\u01d2 c\u00e1i zh\u0113n zh\u00e8ng g\u01cen d\u00e0o zh\u00e8 sh\u00ec ji\u00e8 sh\u00ec hu\u00f3 de\uff0c sh\u00ec y\u01d2u hu\u0101n l\u00e8 h\u00e9 l\u00e8i shu\u01d0 de\u3002 d\u00e0n z\u00e0i b\u011bi f\u0101ng g\u0101n z\u00e0o de ch\u00e9ng sh\u00ec\uff0c w\u01d2 men de xi\u0101ng f\u00e9ng sh\u00ec du\u014d me x\u012b sh\u01ceo\uff01 zh\u012b x\u012b w\u00e0ng r\u00ec y\u00ec z\u0113ng du\u014d de l\u01dc s\u00e8\uff0c n\u00e9ng b\u01ce n\u01d0 q\u01d0ng hu\u00ed w\u01d2 men de sh\u0113ng hu\u00f3 zh\u012b zh\u014dng\u3002",
            "a\uff0c z\u01d2ng sh\u00ec m\u011bi l\u00ec \u00e9r sh\u01d0 r\u00e9n \u00e0i li\u00e0n de y\u01d4 a\uff01"
          ],
          annotations: [
            { id: 1, term: "花苞", pinyin: "huābāo", definition: "这里指没开放的花骨朵儿。", definitionEn: "Here it refers to unopened flower buds." },
            { id: 2, term: "彩棱镜", pinyin: "cǎiléngìng", definition: "以透明材料制成的多面体，能折射出不同颜色的光。", definitionEn: "A prism made of transparent material that refracts light into different colors." },
            { id: 3, term: "静谧", pinyin: "jìngmì", definition: "安静。谧，安宁、平静。", definitionEn: "Quiet, tranquil." },
            { id: 4, term: "莅临", pinyin: "lìlín", definition: "来到，来临（多指贵宾）。多用于书面。", definitionEn: "To arrive, to come (often referring to honored guests). Mostly used in written language." },
            { id: 5, term: "吝啬", pinyin: "lìnsè", definition: "过分爱惜自己的财物，不舍得给别人，也不舍得自己用。", definitionEn: "Excessively protective of one's possessions; stingy." },
            { id: 6, term: "淅淅沥沥", pinyin: "xīxīlìlì", definition: "形容轻微的风声、雨声、落叶声等。", definitionEn: "Describes the soft sounds of wind, rain, or falling leaves." }
          ],
          readingTips: [{
            cn: "优美的写景散文常常用饱含感情的、细腻生动的笔墨，把景物描写得分外美丽，分外灵动。文中的四季之雨，\u201C容貌\u201D有别，\u201C性情\u201D各异。作者用诗一般的语言，调动我们的各种感官，全面感受这四季之雨，让我们亲近雨，体会雨的不同情致与风韵。",
            en: "Beautiful landscape prose often uses emotionally charged, delicate and vivid writing to depict scenery with extraordinary beauty and spirit. The rain of four seasons in this text has different 'appearances' and 'temperaments.' The author uses poetic language to engage all our senses, letting us fully experience the rain of four seasons and appreciate its different moods and charms."
          }],
          teachingPoints: [
            { cn: "学习从视觉、听觉、嗅觉等多角度描写景物的方法。", en: "Learn methods of describing scenery from multiple sensory perspectives including visual, auditory, and olfactory." }
          ],
          parentTips: [
            { cn: "雨天时可与孩子一起感受不同季节雨的特点，讨论文中的描写。", en: "On rainy days, experience the characteristics of rain in different seasons together and discuss the descriptions in the text." }
          ]
        },
        {
          id: 4,
          title: "古代诗歌四首",
          titleEn: "Four Ancient Poems",
          difficulty: 3,
          author: "曹操、李白、王湾、马致远",
          authorEn: "Cao Cao, Li Bai, Wang Wan, Ma Zhiyuan",
          source: "分别选自《曹操集》《李白集校注》《全唐诗》《全元散曲》。",
          sourceEn: "Selected from various collections of these poets' works.",
          vocabWords: [
            {word:'澹澹',pinyin:'dàn dàn',en:'rippling',sentence:'水何澹澹，山岛竦峙。',sentenceEn:'How the waters ripple, and the mountain isles stand tall.'},
            {word:'竦峙',pinyin:'sǒng zhì',en:'stand tall',sentence:'水何澹澹，山岛竦峙。',sentenceEn:'How the waters ripple, and the mountain isles stand tall.'},
            {word:'枯藤',pinyin:'kū téng',en:'withered vines',sentence:'枯藤老树昏鸦。',sentenceEn:'Withered vines, old trees, crows at dusk.'},
            {word:'断肠',pinyin:'duàn cháng',en:'heartbroken',sentence:'断肠人在天涯。',sentenceEn:'A heartbroken traveler at the edge of the world.'},
            {word:'残夜',pinyin:'cán yè',en:'the last moments of night',sentence:'海日生残夜，江春入旧年。',sentenceEn:'The sea sun rises from the last moments of night, river spring enters the old year.'}
          ],
          footnotes: [
            {term:"\u6fb9\u6fb9", termEn:"rippling", definition:"\u3010d\u00e0n d\u00e0n\u3011rippling\u3002", definitionEn:"rippling"},
            {term:"\u7ae6\u5cd9", termEn:"stand tall", definition:"\u3010s\u01d2ng zh\u00ec\u3011stand tall\u3002", definitionEn:"stand tall"},
            {term:"\u67af\u85e4", termEn:"withered vines", definition:"\u3010k\u016b t\u00e9ng\u3011withered vines\u3002", definitionEn:"withered vines"},
            {term:"\u65ad\u80a0", termEn:"heartbroken", definition:"\u3010du\u00e0n ch\u00e1ng\u3011heartbroken\u3002", definitionEn:"heartbroken"},
            {term:"\u6b8b\u591c", termEn:"the last moments of night", definition:"\u3010c\u00e1n y\u00e8\u3011the last moments of night\u3002", definitionEn:"the last moments of night"}
          ],
          readingTips: [
            {cn:"\u53cd\u590d\u8bf5\u8bfb\uff0c\u4f53\u4f1a\u8bd7\u6b4c\u7684\u97f3\u97f5\u7f8e\u548c\u610f\u5883\u7f8e\u3002\u6ce8\u610f\u5206\u6790\u8bd7\u4e2d\u7684\u610f\u8c61\u548c\u4fee\u8f9e\u624b\u6cd5\u3002", en:"Read aloud repeatedly to appreciate the phonetic beauty and artistic conception. Analyze the imagery and rhetorical devices used."},
            {cn:"\u7ed3\u5408\u8bd7\u4eba\u7684\u751f\u5e73\u548c\u5199\u4f5c\u80cc\u666f\uff0c\u7406\u89e3\u8bd7\u6b4c\u4e2d\u8574\u542b\u7684\u601d\u60f3\u611f\u60c5\u3002", en:"Consider the poet's life and the context of writing to understand the deeper emotions expressed."}
          ],
          grammarPoints: [
            {point:'借景抒情',pointEn:'jiè jǐng shū qíng',example:'express feelings through scenery',exampleEn:'枯藤老树昏鸦，小桥流水人家，古道西风瘦马。',explanation:'Withered vines, old trees, crows at dusk; a small bridge, flowing water, cottages; an ancient road, west wind, a lean horse.',explanationEn:'通过罗列意象营造凄凉氛围，表达游子思乡之情'}
          ],
          authorBio: {
            cn: "曹操（155—220），字孟德，东汉末政治家、军事家、诗人。李白（701—762），字太白，号青莲居士，唐代诗人。王湾，洛阳人，唐代诗人。马致远（约1251—1321以后），号东篱，元代戏曲作家、散曲家。",
            en: "Cao Cao (155–220), courtesy name Mengde, was a politician, military strategist, and poet of the late Eastern Han. Li Bai (701–762), courtesy name Taibai, was a Tang dynasty poet. Wang Wan was a Tang dynasty poet from Luoyang. Ma Zhiyuan (c. 1251–after 1321) was a Yuan dynasty playwright and lyricist."
          },
          isSelfRead: false,
          preview: [
            { cn: "中国是诗的国度，中华文明史册上优秀的诗歌灿若繁星。诵读古代优秀诗歌，可以让我们心灵得到滋润和净化，情感变得丰富。朗读本课诗歌，想象诗中情景，体会诗人的情感。", en: "China is a land of poetry, with outstanding poems shining like stars throughout the history of Chinese civilization. Reciting excellent ancient poetry can nourish and purify our souls and enrich our emotions. Read these poems aloud, imagine the scenes, and feel the poets' emotions." }
          ],
          text: [
        "\u89c2\u6ca7\u6d77\n\u66f9\u64cd\n\u4e1c\u4e34\u78a3\u77f3\uff0c\u4ee5\u89c2\u6ca7\u6d77\u3002\n\u6c34\u4f55\u6fb9\u6fb9\uff0c\u5c71\u5c9b\u7ae6\u5cd9\u3002\n\u6811\u6728\u4e1b\u751f\uff0c\u767e\u8349\u4e30\u8302\u3002\n\u79cb\u98ce\u8427\u745f\uff0c\u6d2a\u6ce2\u6d8c\u8d77\u3002\n\u65e5\u6708\u4e4b\u884c\uff0c\u82e5\u51fa\u5176\u4e2d\uff1b\n\u661f\u6c49\u707f\u70c2\uff0c\u82e5\u51fa\u5176\u91cc\u3002\n\u5e78\u751a\u81f3\u54c9\uff0c\u6b4c\u4ee5\u548f\u5fd7\u3002",
        "\u95fb\u738b\u660c\u9f84\u5de6\u8fc1\u9f99\u6807\u9065\u6709\u6b64\u5bc4\n\u674e\u767d\n\u6768\u82b1\u843d\u5c3d\u5b50\u89c4\u557c\uff0c\u95fb\u9053\u9f99\u6807\u8fc7\u4e94\u6eaa\u3002\n\u6211\u5bc4\u6101\u5fc3\u4e0e\u660e\u6708\uff0c\u968f\u541b\u76f4\u5230\u591c\u90ce\u897f\u3002",
        "\u6b21\u5317\u56fa\u5c71\u4e0b\n\u738b\u6e7e\n\u5ba2\u8def\u9752\u5c71\u5916\uff0c\u884c\u821f\u7eff\u6c34\u524d\u3002\n\u6f6e\u5e73\u4e24\u5cb8\u9614\uff0c\u98ce\u6b63\u4e00\u5e06\u60ac\u3002\n\u6d77\u65e5\u751f\u6b8b\u591c\uff0c\u6c5f\u6625\u5165\u65e7\u5e74\u3002\n\u4e61\u4e66\u4f55\u5904\u8fbe\uff1f\u5f52\u96c1\u6d1b\u9633\u8fb9\u3002",
        "\u5929\u51c0\u6c99\u00b7\u79cb\u601d\n\u9a6c\u81f4\u8fdc\n\u67af\u85e4\u8001\u6811\u660f\u9e26\uff0c\u5c0f\u6865\u6d41\u6c34\u4eba\u5bb6\uff0c\u53e4\u9053\u897f\u98ce\u7626\u9a6c\u3002\u5915\u9633\u897f\u4e0b\uff0c\u65ad\u80a0\u4eba\u5728\u5929\u6daf\u3002"
      ],
          textEn: [
        "Viewing the Sea\nCao Cao\nEastward I climb Jieshi, to view the vast sea.\nHow boundless the waters, how towering the island peaks.\nTrees grow in clusters, grasses flourish lush.\nAutumn winds sigh, great waves surge and rise.\nThe sun and moon seem to emerge from within;\nThe Milky Way, brilliant, seems to rise from its depths.\nHow fortunate, how supreme! I sing to express my ambition.",
        "Hearing of Wang Changling’s Demotion, Sending This from Afar\nLi Bai\nWillow catkins have all fallen, the cuckoo cries;\nI hear you’ve passed Five Streams on the way to Longbiao.\nI send my heart of sorrow with the bright moon,\nFollowing you all the way to west of Yelang.",
        "Mooring at Beigu Mountain\nWang Wan\nThe traveler’s road beyond the green hills,\nThe boat before the green waters.\nThe tide is level, both banks wide;\nThe wind is fair, a single sail hangs.\nThe sea-sun is born in the dying night;\nThe river-spring enters the old year.\nWhere can a letter home reach?\nThe returning geese — toward Luoyang.",
        "Tianjingsha: Autumn Thoughts\nMa Zhiyuan\nWithered vines, old tree, evening crows;\nSmall bridge, flowing water, a few houses;\nAncient road, west wind, a thin horse.\nThe sun sets in the west —\nThe heartbroken one is at the edge of the world."
      ],
          textPinyin: [
            "gu\u0101n c\u0101ng h\u01cei\n c\u00e1o c\u0101o\n d\u014dng l\u00edn ji\u00e9 sh\u00ed\uff0c y\u01d0 gu\u0101n c\u0101ng h\u01cei\u3002\n shu\u01d0 h\u00e9 d\u00e0n d\u00e0n\uff0c sh\u0101n d\u01ceo s\u01d2ng zh\u00ec\u3002\n sh\u00f9 m\u00f9 c\u00f3ng sh\u0113ng\uff0c b\u01cei c\u01ceo f\u0113ng m\u00e0o\u3002\n qi\u016b f\u0113ng xi\u0101o s\u00e8\uff0c h\u00f3ng b\u014d y\u01d2ng q\u01d0\u3002\n r\u00ec yu\u00e8 zh\u012b x\u00edng\uff0c ru\u00f2 ch\u016b q\u00ed zh\u014dng\uff1b\n x\u012bng h\u00e0n c\u00e0n l\u00e0n\uff0c ru\u00f2 ch\u016b q\u00ed l\u01d0\u3002\n x\u00ecng sh\u00e8n zh\u00ec z\u0101i\uff0c g\u0113 y\u01d0 y\u01d2ng zh\u00ec\u3002",
            "w\u00e9n w\u00e1ng ch\u0101ng l\u00edng zu\u01d2 qi\u0101n l\u00f3ng bi\u0101o y\u00e1o y\u01d2u c\u01d0 j\u00ec\n l\u01d0 b\u00e1i\n y\u00e1ng hu\u0101 lu\u00f2 j\u00ecn z\u01d0 gu\u012b t\u00ed\uff0c w\u00e9n d\u00e0o l\u00f3ng bi\u0101o gu\u00f2 w\u01d4 x\u012b\u3002\n w\u01d2 j\u00ec ch\u00f3u x\u012bn y\u01d4 m\u00edng yu\u00e8\uff0c su\u00ed j\u016bn zh\u00ed d\u00e0o y\u00e8 l\u00e1ng x\u012b\u3002",
            "c\u00ec b\u011bi g\u00f9 sh\u0101n xi\u00e0\n w\u00e1ng w\u0101n\n k\u00e8 l\u00f9 q\u012bng sh\u0101n w\u00e0i\uff0c x\u00edng zh\u014du l\u01dc shu\u01d0 qi\u00e1n\u3002\n ch\u00e1o p\u00edng li\u01ceng \u00e0n ku\u00f2\uff0c f\u0113ng zh\u00e8ng y\u00ec f\u0101n xu\u00e1n\u3002\n h\u01cei r\u00ec sh\u0113ng c\u00e1n y\u00e8\uff0c ji\u0101ng ch\u016bn r\u00f9 ji\u00f9 ni\u00e1n\u3002\n xi\u0101ng sh\u016b h\u00e9 ch\u00f9 d\u00e1\uff1f gu\u012b y\u00e0n lu\u00f2 y\u00e1ng bi\u0101n\u3002",
            "ti\u0101n j\u00ecng sh\u0101\u00b7 qi\u016b s\u012b\n m\u01ce zh\u00ec yu\u01cen\n k\u016b t\u00e9ng l\u01ceo sh\u00f9 h\u016bn y\u0101\uff0c xi\u01ceo qi\u00e1o li\u00fa shu\u01d0 r\u00e9n ji\u0101\uff0c g\u01d4 d\u00e0o x\u012b f\u0113ng sh\u00f2u m\u01ce\u3002 x\u012b y\u00e1ng x\u012b xi\u00e0\uff0c du\u00e0n ch\u00e1ng r\u00e9n z\u00e0i ti\u0101n y\u00e1\u3002"
          ],
          annotations: [
            { id: 1, term: "碣石", pinyin: "jiéshí", definition: "山名，在今河北昌黎西北。", definitionEn: "A mountain in present-day northwest of Changli, Hebei." },
            { id: 2, term: "澹澹", pinyin: "dàndàn", definition: "水波荡漾的样子。", definitionEn: "The appearance of rippling water." },
            { id: 3, term: "竦峙", pinyin: "sǒngzhì", definition: "耸立。竦、峙，都是耸立的意思。", definitionEn: "Towering. Both characters mean 'to stand tall.'" },
            { id: 4, term: "星汉", pinyin: "xīnghàn", definition: "银河。", definitionEn: "The Milky Way." },
            { id: 5, term: "子规", pinyin: "zǐguī", definition: "即布谷鸟，又称\u201C杜鹃\u201D。", definitionEn: "The cuckoo, also called 'du juan.'" },
            { id: 6, term: "断肠", pinyin: "duàncháng", definition: "形容悲伤到极点。", definitionEn: "Describes extreme sorrow; heartbroken." },
            { id: 7, term: "天涯", pinyin: "tiānyá", definition: "天边，指远离家乡的地方。", definitionEn: "The edge of the sky; a place far from home." }
          ],
          thinkExplore: [
            { cn: "反复诵读《观沧海》，体会这首四言古诗质朴刚健、音调铿锵的特点，想象诗人登山临海的情景。", en: "Recite 'Viewing the Sea' repeatedly, appreciating its simple yet powerful style and resonant tones. Imagine the poet climbing the mountain and viewing the sea." },
            { cn: "《天净沙·秋思》中，诗人把富有特征的景物直接组合在一起，营造出特别的氛围。假如你身处其中，会有怎样的感受？", en: "In 'Tianjingsha: Autumn Thoughts,' the poet directly combines characteristic images to create a special atmosphere. If you were there, how would you feel?" }
          ],
          accumExtend: [
            { cn: "古诗词中多有借明月抒发思乡怀人之情的诗句。朗读课外搜集的相关诗句，体会诗人的情感。", en: "Many ancient poems use the bright moon to express longing for home and loved ones. Read aloud relevant verses you've collected and appreciate the poets' emotions." },
            { cn: "背诵和默写这四首诗歌。", en: "Recite and write these four poems from memory." }
          ],
          teachingPoints: [
            { cn: "学习古代诗歌的朗读方法：读准字音，读出节奏，感受声韵美。", en: "Learn methods of reading ancient poetry aloud: pronounce correctly, read with rhythm, and feel the beauty of sound." },
            { cn: "体会借景抒情的表达手法。", en: "Appreciate the technique of expressing emotions through describing scenery." }
          ],
          parentTips: [
            { cn: "鼓励孩子背诵这四首诗歌，并尝试理解其中蕴含的情感。", en: "Encourage your child to memorize these four poems and try to understand the emotions they contain." }
          ]
        }
      ],
      writing: {
        title: "热爱生活，热爱写作",
        titleEn: "Love Life, Love Writing",
        vocabWords: [
          {word:'写作',pinyin:'xiě zuò',en:'writing',sentence:'写作就是用笔来说话。',sentenceEn:'Writing is speaking with a pen.'},
          {word:'观察',pinyin:'guān chá',en:'observe',sentence:'养成细心观察、勤于思考的习惯。',sentenceEn:'Develop the habit of careful observation and diligent thinking.'},
          {word:'素材',pinyin:'sù cái',en:'raw material',sentence:'积累内容素材和语言材料。',sentenceEn:'Accumulate content material and language resources.'},
          {word:'表达',pinyin:'biǎo dá',en:'express',sentence:'写作是表达、交流的重要方式。',sentenceEn:'Writing is an important way to express and communicate.'},
          {word:'交流',pinyin:'jiāo liú',en:'communicate; exchange',sentence:'写作是生活中与人沟通、交流、分享信息的一种方式。',sentenceEn:'Writing is a way to communicate, exchange, and share information in life.'}
        ],
        content: {
          cn: "写作不是什么\u201C高难动作\u201D，而是生活中与人沟通、交流、分享信息的一种方式，就像我们平常说话一样。写作就是用笔来说话。平时养成细心观察、勤于思考的习惯，你就不会为写什么东西发愁了。",
          en: "Writing is not a 'difficult feat' — it is a way of communicating, exchanging, and sharing information in daily life, just like speaking. Writing is simply speaking with a pen. Develop habits of careful observation and diligent thinking, and you won't worry about what to write."
        }
      },
      readWrite: [
        {
          title: "比喻",
          titleEn: "Simile and Metaphor",
          vocabWords: [
            {word:'比喻',pinyin:'bǐ yù',en:'simile; metaphor',sentence:'句子运用了比喻的修辞手法。',sentenceEn:'The sentence uses the rhetorical device of simile.'},
            {word:'本体',pinyin:'běn tǐ',en:'tenor (thing compared)',sentence:'本体和喻体之间用比喻词连接。',sentenceEn:'The tenor and vehicle are connected by a comparison word.'},
            {word:'喻体',pinyin:'yù tǐ',en:'vehicle (thing used for comparison)',sentence:'用来做比喻的事物叫喻体。',sentenceEn:'The thing used for comparison is called the vehicle.'},
            {word:'明喻',pinyin:'míng yù',en:'explicit simile',sentence:'像、好像、仿佛等词连接的是明喻。',sentenceEn:'Comparisons using words like "like" or "as if" are explicit similes.'},
            {word:'借喻',pinyin:'jiè yù',en:'implied metaphor',sentence:'借用喻体直接代替本体是借喻。',sentenceEn:'Using the vehicle directly to replace the tenor is an implied metaphor.'}
          ],
          content: {
            cn: "比喻的修辞手法。本体和喻体之间用\u201C像\u201D\u201C好像\u201D\u201C仿佛\u201D等比喻词连接的是明喻；用\u201C是\u201D\u201C就是\u201D\u201C变成\u201D等词语连接的是暗喻；本体和比喻词都不出现，借用喻体直接代替本体的是借喻。",
            en: "The rhetorical device of metaphor and simile. Explicit simile uses words like 'like,' 'as if'; implicit metaphor uses words like 'is,' 'becomes'; and borrowed metaphor replaces the subject directly with the vehicle, omitting both subject and comparison words."
          }
        },
        {
          title: "比拟",
          titleEn: "Personification and Metaphorical Transfer",
          vocabWords: [
            {word:'拟人',pinyin:'nǐ rén',en:'personification',sentence:'把物当作人来写是拟人。',sentenceEn:'Writing about things as if they were people is personification.'},
            {word:'拟物',pinyin:'nǐ wù',en:'objectification',sentence:'把人当作物来写是拟物。',sentenceEn:'Writing about people as if they were things is objectification.'},
            {word:'修辞',pinyin:'xiū cí',en:'rhetoric',sentence:'比拟是一种修辞手法。',sentenceEn:'Personification is a rhetorical device.'},
            {word:'赋予',pinyin:'fù yǔ',en:'endow with',sentence:'赋予物以人的动作行为或思想感情。',sentenceEn:'Endow things with human actions or thoughts and feelings.'},
            {word:'共鸣',pinyin:'gòng míng',en:'resonance',sentence:'从而引起共鸣。',sentenceEn:'Thus arousing resonance.'}
          ],
          content: {
            cn: "把物当作人来写，赋予物以人的动作行为或思想感情，称为拟人。把人当作物来写，或把甲物当乙物来写，称为拟物。恰当运用比拟，能让读者对所描绘的事物产生鲜明的印象。",
            en: "Writing about objects as if they were people, giving them human actions or emotions, is personification. Writing about people as if they were objects, or treating one thing as another, is metaphorical transfer. Proper use of these techniques creates vivid impressions."
          }
        },
        {
          title: "名词",
          titleEn: "Nouns",
          vocabWords: [
            {word:'名词',pinyin:'míng cí',en:'noun',sentence:'名词很常见。',sentenceEn:'Nouns are very common.'},
            {word:'方位',pinyin:'fāng wèi',en:'direction; location',sentence:'表示方位的名词一般称为方位名词。',sentenceEn:'Nouns expressing direction are generally called directional nouns.'},
            {word:'抽象',pinyin:'chōu xiàng',en:'abstract',sentence:'有的表示抽象的事物，如精神、传统。',sentenceEn:'Some express abstract things, such as spirit and tradition.'},
            {word:'具体',pinyin:'jù tǐ',en:'concrete',sentence:'有的表示具体的事物，如绿萍、水藻。',sentenceEn:'Some express concrete things, such as duckweed and water plants.'},
            {word:'位置',pinyin:'wèi zhì',en:'position',sentence:'表示事物所在的位置或范围。',sentenceEn:'Express the position or scope of things.'}
          ],
          content: {
            cn: "名词有的表示人，有的表示具体的事物，有的表示抽象的事物，还有的表示时间。需要注意的是另一类表示方位的名词，一般称为方位名词。",
            en: "Some nouns denote people, some denote concrete things, some denote abstract concepts, and some denote time. A special category to note is directional nouns (nouns of location/direction)."
          }
        }
      ],
      comprehensiveLearning: null,
      classicBookGuide: null,
      extracurricularPoetry: null
    },
    /* ─── Unit 2 至爱亲情 ─── */
    {
      id: 2,
      title: "第二单元",
      titleEn: "Unit 2",
      theme: "至爱亲情",
      themeEn: "Family Love",
      unitIntro: {
        cn: "亲情，是人世间最普遍、最美好的情感之一。本单元课文，从不同角度抒写了亲人之间真挚动人的感情。阅读这些课文，可以加深我们对亲情的感受和理解，丰富自己的情感体验。学习本单元，要继续重视朗读，把握文章的感情基调，注意语气、节奏的变化。在整体感知全文内容的基础上，体会作者的思想感情。",
        en: "Family love is one of the most universal and beautiful emotions in the world. The texts in this unit express sincere and touching feelings between family members from different perspectives. Reading these texts can deepen our understanding of family love and enrich our emotional experience. Continue to emphasize reading aloud, grasping the emotional tone, and noting changes in voice and rhythm."
      },
      type: "kewen",
      lessons: [
        {
          id: 5,
          title: "秋天的怀念",
          titleEn: "Autumn Memories",
          difficulty: 3,
          author: "史铁生",
          authorEn: "Shi Tiesheng",
          source: "选自《史铁生散文选》（人民文学出版社2005年版）。",
          sourceEn: "Selected from Selected Essays of Shi Tiesheng (People's Literature Publishing House, 2005).",
          vocabWords: [
            {word:'瘫痪',pinyin:'tān huàn',en:'paralyzed',sentence:'双腿瘫痪后，我的脾气变得暴怒无常。',sentenceEn:'After my legs became paralyzed, my temper became violently unpredictable.'},
            {word:'暴怒',pinyin:'bào nù',en:'furious rage',sentence:'我的脾气变得暴怒无常。',sentenceEn:'My temper became furiously unpredictable.'},
            {word:'憔悴',pinyin:'qiáo cuì',en:'haggard; worn out',sentence:'她憔悴的脸上现出央求般的神色。',sentenceEn:'Her haggard face showed a pleading expression.'},
            {word:'诀别',pinyin:'jué bié',en:'final farewell',sentence:'她出去了，就再也没回来。',sentenceEn:'She went out and never came back again.'},
            {word:'烂漫',pinyin:'làn màn',en:'bright and colorful',sentence:'北海的菊花开了，烂漫极了。',sentenceEn:'The chrysanthemums at Beihai bloomed, bright and colorful.'}
          ],
          footnotes: [
            {term:"\u762b\u75ea", termEn:"paralyzed", definition:"\u3010t\u0101n hu\u00e0n\u3011paralyzed\u3002", definitionEn:"paralyzed"},
            {term:"\u66b4\u6012", termEn:"furious rage", definition:"\u3010b\u00e0o n\u00f9\u3011furious rage\u3002", definitionEn:"furious rage"},
            {term:"\u6194\u60b4", termEn:"haggard; worn out", definition:"\u3010qi\u00e1o cu\u00ec\u3011haggard; worn out\u3002", definitionEn:"haggard; worn out"},
            {term:"\u8bc0\u522b", termEn:"final farewell", definition:"\u3010ju\u00e9 bi\u00e9\u3011final farewell\u3002", definitionEn:"final farewell"},
            {term:"\u70c2\u6f2b", termEn:"bright and colorful", definition:"\u3010l\u00e0n m\u00e0n\u3011bright and colorful\u3002", definitionEn:"bright and colorful"}
          ],
          readingTips: [
            {cn:"\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f", en:"Pay attention to the author's narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?"},
            {cn:"\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f", en:"After reading, think: what theme does the author convey? How does the title relate to the content?"}
          ],
          grammarPoints: [
            {point:'反复',pointEn:'fǎn fù',example:'repetition',exampleEn:'她出去了，就再也没回来。',explanation:'She went out and never came back again.',explanationEn:'用简洁的语言表达深沉的母爱与永恒的遗憾'},
            {point:'象征',pointEn:'xiàng zhēng',example:'symbolism',exampleEn:'黄色的花淡雅、白色的花高洁、紫红色的花热烈而深沉。',explanation:'Yellow flowers are elegant, white flowers are noble, purple-red flowers are passionate and deep.',explanationEn:'用菊花象征生命的美好，暗示母亲的期望'}
          ],
          authorBio: {
            cn: "史铁生（1951—2010），生于北京，作家。代表作有小说《我的遥远的清平湾》《命若琴弦》《务虚笔记》，散文《我与地坛》《合欢树》《病隙碎笔》等。",
            en: "Shi Tiesheng (1951–2010) was a writer born in Beijing. His representative works include the novels My Distant Qingping Bay and Fate Like a Stringed Instrument, and essays such as Me and the Altar of Earth and The Acacia Tree."
          },
          isSelfRead: false,
          preview: [
            { cn: "史铁生双腿瘫痪，又长年患病，却一直在和病魔抗争。体会文中流露的情绪，反思一下：沐浴在亲情中，我们是否只知接受，不会感动，也不懂回报呢？", en: "Shi Tiesheng was paralyzed and chronically ill, yet he kept fighting his illness. Reflect on the emotions revealed in the text: immersed in family love, do we only know how to receive without being moved or giving back?" }
          ],
          text: [
            "双腿瘫痪后，我的脾气变得暴怒无常。望着望着天上北归的雁阵，我会突然把面前的玻璃砸碎；听着听着李谷一甜美的歌声，我会猛地把手边的东西摔向四周的墙壁。母亲就悄悄地躲出去，在我看不见的地方偷偷地听着我的动静。当一切恢复沉寂，她又悄悄地进来，眼边儿红红的，看着我。\u201C听说北海的花都开了，我推着你去走走。\u201D她总是这么说。母亲喜欢花，可自从我的腿瘫痪后，她侍弄的那些花都死了。\u201C不，我不去！\u201D我狠命地捶打这两条可恨的腿，喊着，\u201C我可活什么劲儿！\u201D母亲扑过来抓住我的手，忍住哭声说：\u201C咱娘儿俩在一块儿，好好儿活，好好儿活……\u201D",
            "可我却一直都不知道，她的病已经到了那步田地。后来妹妹告诉我，她常常肝疼得整宿整宿翻来覆去地睡不了觉。",
            "那天我又独自坐在屋里，看着窗外的树叶\u201C唰唰啦啦\u201D地飘落。母亲进来了，挡在窗前：\u201C北海的菊花开了，我推着你去看看吧。\u201D她憔悴的脸上现出央求般的神色。\u201C什么时候？\u201D\u201C你要是愿意，就明天？\u201D她说。我的回答已经让她喜出望外了。\u201C好吧，就明天。\u201D我说。她高兴得一会儿坐下，一会儿站起：\u201C那就赶紧准备准备。\u201D\u201C哎呀，烦不烦？几步路，有什么好准备的！\u201D她也笑了，坐在我身边，絮絮叨叨地说着：\u201C看完菊花，咱们就去'仿膳'，你小时候最爱吃那儿的豌豆黄儿。还记得那回我带你去北海吗？你偏说那杨树花是毛毛虫，跑着，一脚踩扁一个……\u201D她忽然不说了。对于\u201C跑\u201D和\u201C踩\u201D一类的字眼儿，她比我还敏感。她又悄悄地出去了。",
            "她出去了，就再也没回来。",
            "邻居们把她抬上车时，她还在大口大口地吐着鲜血。我没想到她已经病成那样。看着三轮车远去，也绝没有想到那竟是永远的诀别。",
            "邻居的小伙子背着我去看她的时候，她正艰难地呼吸着，像她那一生艰难的生活。别人告诉我，她昏迷前的最后一句话是：\u201C我那个有病的儿子和我那个还未成年的女儿……\u201D",
            "又是秋天，妹妹推我去北海看了菊花。黄色的花淡雅，白色的花高洁，紫红色的花热烈而深沉，泼泼洒洒，秋风中正开得烂漫。我懂得母亲没有说完的话。妹妹也懂。我俩在一块儿，要好好儿活……"
          ],
          textEn: [
            "After I became paralyzed, my temper became violent and unpredictable. While watching flocks of wild geese returning north, I would suddenly smash the glass before me; while listening to Li Guyi's sweet singing, I would fling things at the surrounding walls. Mother would quietly slip away, secretly listening to my movements from where I couldn't see her. When all was silent again, she would quietly come back in, the rims of her eyes red, watching me. 'I hear the flowers at Beihai are all blooming. Let me take you for a walk,' she always said. Mother loved flowers, but ever since my legs became paralyzed, all the flowers she had tended died. 'No, I won't go!' I pounded fiercely at these hateful legs of mine, shouting, 'What's the point of living!' Mother rushed over and seized my hands, holding back her sobs: 'The two of us, mother and son, together — we must live well, live well...'",
            "But I never knew her illness had progressed that far. My sister later told me that she often couldn't sleep all night, tossing and turning from liver pain.",
            "That day I was sitting alone in my room again, watching leaves rustle and flutter down outside the window. Mother came in and stood in front of the window: 'The chrysanthemums at Beihai are blooming. Let me take you to see them.' A pleading look appeared on her haggard face. 'When?' 'If you're willing, how about tomorrow?' she said. My answer had already made her overjoyed. 'All right, tomorrow then,' I said. She was so happy she kept sitting down and standing up again: 'Then let's hurry and get ready.' 'Oh, stop fussing! It's just a few steps — what is there to prepare!' She laughed too, sat beside me, and chattered on: 'After seeing the chrysanthemums, we'll go to Fangshan. You loved the pea-cake there when you were little. Remember that time I took you to Beihai? You insisted the poplar catkins were caterpillars, running along, stomping one flat with each step...' She suddenly stopped. She was even more sensitive than I was to words like 'running' and 'stomping.' She quietly slipped out again.",
            "She went out, and never came back.",
            "When the neighbors carried her onto the cart, she was still coughing up blood. I had no idea she was that ill. Watching the tricycle pull away, I never imagined that would be our final farewell.",
            "When a young neighbor carried me on his back to see her, she was breathing with difficulty, like her whole difficult life. Someone told me her last words before losing consciousness were: 'My sick son and my daughter who hasn't grown up yet...'",
            "Another autumn came. My sister pushed me to Beihai to see the chrysanthemums. Yellow ones, elegant; white ones, pure; purple-red ones, passionate and deep — splashing and spilling, blooming magnificently in the autumn wind. I understood what Mother had left unsaid. My sister understood too. Together, we must live well..."
          ],
          textPinyin: [
            "shu\u0101ng tu\u01d0 t\u0101n hu\u00e0n h\u00f2u\uff0c w\u01d2 de p\u00ed q\u00ec bi\u00e0n de b\u00e0o n\u00f9 w\u00fa ch\u00e1ng\u3002 w\u00e0ng zhe w\u00e0ng zhe ti\u0101n sh\u00e0ng b\u011bi gu\u012b de y\u00e0n zh\u00e8n\uff0c w\u01d2 hu\u00ec t\u016b r\u00e1n b\u01ce mi\u00e0n qi\u00e1n de b\u014d l\u00ed z\u00e1 su\u00ec\uff1b t\u012bng zhe t\u012bng zhe l\u01d0 g\u01d4 y\u00ec ti\u00e1n m\u011bi de g\u0113 sh\u0113ng\uff0c w\u01d2 hu\u00ec m\u011bng d\u00ec b\u01ce sh\u01d2u bi\u0101n de d\u014dng x\u012b shu\u0101i xi\u00e0ng s\u00ec zh\u014du de qi\u00e1ng b\u00ec\u3002 m\u01d4 q\u012bn ji\u00f9 qi\u0101o qi\u0101o d\u00ec du\u01d2 ch\u016b q\u00f9\uff0c z\u00e0i w\u01d2 k\u00e0n b\u00fa ji\u00e0n de d\u00ec f\u0101ng t\u014du t\u014du d\u00ec t\u012bng zhe w\u01d2 de d\u00f2ng j\u00ecng\u3002 d\u0101ng y\u00ed qi\u00e8 hu\u012b f\u00f9 ch\u00e9n j\u00ec\uff0c t\u0101 y\u00f2u qi\u0101o qi\u0101o d\u00ec j\u00ecn l\u00e1i\uff0c y\u01cen bi\u0101n \u00e9r h\u00f3ng h\u00f3ng de\uff0c k\u00e0n zhe w\u01d2\u3002 \u201c t\u012bng shu\u014d b\u011bi h\u01cei de hu\u0101 d\u014du k\u0101i le\uff0c w\u01d2 tu\u012b zhe n\u01d0 q\u00f9 z\u01d2u z\u01d2u\u3002 \u201d t\u0101 z\u01d2ng sh\u00ec zh\u00e8 me shu\u014d\u3002 m\u01d4 q\u012bn x\u01d0 hu\u0101n hu\u0101\uff0c k\u011b z\u00ec c\u00f3ng w\u01d2 de tu\u01d0 t\u0101n hu\u00e0n h\u00f2u\uff0c t\u0101 sh\u00ec n\u00f2ng de n\u00e0 xi\u0113 hu\u0101 d\u014du s\u01d0 le\u3002 \u201c b\u00f9\uff0c w\u01d2 b\u00fa q\u00f9\uff01 \u201d w\u01d2 h\u011bn m\u00ecng d\u00ec chu\u00ed d\u01ce zh\u00e8 li\u01ceng ti\u00e1o k\u011b h\u00e8n de tu\u01d0\uff0c h\u01cen zhe\uff0c \u201c w\u01d2 k\u011b hu\u00f3 sh\u00e9n me j\u00ecn \u00e9r\uff01 \u201d m\u01d4 q\u012bn p\u016b gu\u00f2 l\u00e1i zhu\u0101 zh\u00f9 w\u01d2 de sh\u01d2u\uff0c r\u011bn zh\u00f9 k\u016b sh\u0113ng shu\u014d\uff1a \u201c z\u00e1n ni\u00e1ng \u00e9r li\u01ce z\u00e0i y\u00ed ku\u00e0i \u00e9r\uff0c h\u01ceo h\u0101o er hu\u00f3\uff0c h\u01ceo h\u0101o er hu\u00f3\u2026\u2026 \u201d",
            "k\u011b w\u01d2 qu\u00e8 y\u00ec zh\u00ed d\u014du b\u00f9 zh\u012b d\u00e0o\uff0c t\u0101 de b\u00ecng y\u01d0 j\u012bng d\u00e0o le n\u00e0 b\u00f9 ti\u00e1n d\u00ec\u3002 h\u00f2u l\u00e1i m\u00e8i m\u00e8i g\u00e0o s\u00f9 w\u01d2\uff0c t\u0101 ch\u00e1ng ch\u00e1ng g\u0101n t\u00e9ng d\u00e9 zh\u011bng s\u00f9 zh\u011bng s\u00f9 f\u0101n l\u00e1i f\u00f9 q\u00f9 d\u00ec shu\u00ec b\u00f9 li\u01ceo ju\u00e9\u3002",
            "n\u00e0 ti\u0101n w\u01d2 y\u00f2u d\u00fa z\u00ec zu\u00f2 z\u00e0i w\u016b l\u01d0\uff0c k\u00e0n zhe chu\u0101ng w\u00e0i de sh\u00f9 y\u00e8 \u201c shu\u0101 shu\u0101 l\u0101 l\u0101 \u201d d\u00ec pi\u0101o lu\u00f2\u3002 m\u01d4 q\u012bn j\u00ecn l\u00e1i le\uff0c d\u01ceng z\u00e0i chu\u0101ng qi\u00e1n\uff1a \u201c b\u011bi h\u01cei de j\u00fa hu\u0101 k\u0101i le\uff0c w\u01d2 tu\u012b zhe n\u01d0 q\u00f9 k\u00e0n k\u00e0n ba\u3002 \u201d t\u0101 qi\u00e1o cu\u00ec de li\u01cen sh\u00e0ng xi\u00e0n ch\u016b y\u0101ng qi\u00fa b\u0101n de sh\u00e9n s\u00e8\u3002 \u201c sh\u00e9n me sh\u00ed h\u00f2u\uff1f \u201d \u201c n\u01d0 y\u00e0o shi yu\u00e0n y\u00ec\uff0c ji\u00f9 m\u00edng ti\u0101n\uff1f \u201d t\u0101 shu\u014d\u3002 w\u01d2 de hu\u00ed d\u00e1 y\u01d0 j\u012bng r\u00e0ng t\u0101 x\u01d0 ch\u016b w\u00e0ng w\u00e0i le\u3002 \u201c h\u01ceo ba\uff0c ji\u00f9 m\u00edng ti\u0101n\u3002 \u201d w\u01d2 shu\u014d\u3002 t\u0101 g\u0101o x\u012bng d\u00e9 y\u00ed hu\u00ec er zu\u00f2 xi\u00e0\uff0c y\u00ed hu\u00ec er zh\u00e0n q\u01d0\uff1a \u201c n\u00e0 ji\u00f9 g\u01cen j\u01d0n zh\u01d4n b\u00e8i zh\u01d4n b\u00e8i\u3002 \u201d \u201c \u0101i ya\uff0c f\u00e1n bu f\u00e1n\uff1f j\u01d0 b\u00f9 l\u00f9\uff0c y\u01d2u sh\u00e9n me h\u01ceo zh\u01d4n b\u00e8i de\uff01 \u201d t\u0101 y\u011b xi\u00e0o le\uff0c zu\u00f2 z\u00e0i w\u01d2 sh\u0113n bi\u0101n\uff0c x\u00f9 x\u00f9 d\u0101o d\u0101o d\u00ec shu\u014d zhe\uff1a \u201c k\u00e0n w\u00e1n j\u00fa hu\u0101\uff0c z\u00e1n men ji\u00f9 q\u00f9'f\u01ceng sh\u00e0n'\uff0c n\u01d0 xi\u01ceo sh\u00ed h\u00f2u zu\u00ec \u00e0i ch\u012b n\u00e0 \u00e9r de w\u0101n d\u00f2u hu\u00e1ng \u00e9r\u3002 h\u00e1i j\u00ec de n\u00e0 hu\u00ed w\u01d2 d\u00e0i n\u01d0 q\u00f9 b\u011bi h\u01cei ma\uff1f n\u01d0 pi\u0101n shu\u014d n\u00e0 y\u00e1ng sh\u00f9 hu\u0101 sh\u00ec m\u00e1o m\u00e1o ch\u00f3ng\uff0c p\u01ceo zhe\uff0c y\u00ec ji\u01ceo c\u01cei bi\u01cen y\u00ed g\u00e8\u2026\u2026 \u201d t\u0101 h\u016b r\u00e1n b\u00f9 shu\u014d le\u3002 du\u00ec y\u00fa \u201c p\u01ceo \u201d h\u00e9 \u201c c\u01cei \u201d y\u00ed l\u00e8i de z\u00ec y\u01cen \u00e9r\uff0c t\u0101 b\u01d0 w\u01d2 h\u00e1i m\u01d0n g\u01cen\u3002 t\u0101 y\u00f2u qi\u0101o qi\u0101o d\u00ec ch\u016b q\u00f9 le\u3002",
            "t\u0101 ch\u016b q\u00f9 le\uff0c ji\u00f9 z\u00e0i y\u011b m\u00e9i hu\u00ed l\u00e1i\u3002",
            "l\u00edn j\u016b men b\u01ce t\u0101 t\u00e1i sh\u00e0ng ch\u0113 sh\u00ed\uff0c t\u0101 h\u00e1i z\u00e0i d\u00e0 k\u01d2u d\u00e0 k\u01d2u d\u00ec t\u01d4 zhe xi\u0101n xu\u00e8\u3002 w\u01d2 m\u00e9i xi\u01ceng d\u00e0o t\u0101 y\u01d0 j\u012bng b\u00ecng ch\u00e9ng n\u00e0 y\u00e0ng\u3002 k\u00e0n zhe s\u0101n l\u00fan ch\u0113 yu\u01cen q\u00f9\uff0c y\u011b ju\u00e9 m\u00e9i y\u01d2u xi\u01ceng d\u00e0o n\u00e0 j\u00ecng sh\u00ec y\u01d2ng yu\u01cen de ju\u00e9 bi\u00e9\u3002",
            "l\u00edn j\u016b de xi\u01ceo hu\u01d2 z\u01d0 b\u00e8i zhe w\u01d2 q\u00f9 k\u00e0n t\u0101 de sh\u00ed h\u00f2u\uff0c t\u0101 zh\u00e8ng ji\u0101n n\u00e1n d\u00ec h\u016b x\u012b zhe\uff0c xi\u00e0ng t\u0101 n\u00e0 y\u00ec sh\u0113ng ji\u0101n n\u00e1n de sh\u0113ng hu\u00f3\u3002 bi\u00e9 r\u00e9n g\u00e0o s\u00f9 w\u01d2\uff0c t\u0101 h\u016bn m\u00ed qi\u00e1n de zu\u00ec h\u00f2u y\u00ed j\u00f9 hu\u00e0 sh\u00ec\uff1a \u201c w\u01d2 n\u00e0 ge y\u01d2u b\u00ecng de \u00e9r zi h\u00e9 w\u01d2 n\u00e0 ge h\u00e1i w\u00e8i ch\u00e9ng ni\u00e1n de n\u01da \u00e9r\u2026\u2026 \u201d",
            "y\u00f2u sh\u00ec qi\u016b ti\u0101n\uff0c m\u00e8i mei tu\u012b w\u01d2 q\u00f9 b\u011bi h\u01cei k\u00e0n le j\u00fa hu\u0101\u3002 hu\u00e1ng s\u00e8 de hu\u0101 d\u00e0n y\u01ce\uff0c b\u00e1i s\u00e8 de hu\u0101 g\u0101o ji\u00e9\uff0c z\u01d0 h\u00f3ng s\u00e8 de hu\u0101 r\u00e8 li\u00e8 \u00e9r sh\u0113n ch\u00e9n\uff0c p\u014d p\u014d s\u01ce s\u01ce\uff0c qi\u016b f\u0113ng zh\u014dng zh\u00e8ng k\u0101i d\u00e9 l\u00e0n m\u00e0n\u3002 w\u01d2 d\u01d2ng de m\u01d4 q\u012bn m\u00e9i y\u01d2u shu\u014d w\u00e1n de hu\u00e0\u3002 m\u00e8i mei y\u011b d\u01d2ng\u3002 w\u01d2 li\u01ce z\u00e0i y\u00ed ku\u00e0i \u00e9r\uff0c y\u00e0o h\u01ceo h\u0101o er hu\u00f3\u2026\u2026"
          ],
          annotations: [
            { id: 1, term: "北海", pinyin: "Běihǎi", definition: "这里指北京的北海公园。", definitionEn: "Here it refers to Beihai Park in Beijing." },
            { id: 2, term: "憔悴", pinyin: "qiáocuì", definition: "形容人瘦弱，面色不好。", definitionEn: "Describes someone who is thin and wan, with a poor complexion." },
            { id: 3, term: "仿膳", pinyin: "fǎngshàn", definition: "这里指北海公园内的一个饭庄，以制作宫廷菜而闻名。", definitionEn: "A restaurant in Beihai Park famous for its imperial-style cuisine." }
          ],
          thinkExplore: [
            { cn: "朗读课文，体会作者的情感，说说文章为什么取题为《秋天的怀念》。", en: "Read aloud, feel the author's emotions, and explain why the article is titled 'Autumn Memories.'" },
            { cn: "课文平静的叙述中蕴含着感人的力量，这主要体现在一些细节中。文中哪些细节最让你感动？", en: "The calm narration contains moving power, mainly embodied in details. Which details moved you most?" }
          ],
          accumExtend: [
            { cn: "品味文中加点词蕴含的情感。", en: "Savor the emotions contained in the highlighted words in the text." }
          ],
          teachingPoints: [
            { cn: "学习通过细节描写传达深沉感情的手法。", en: "Learn the technique of conveying deep emotions through detailed description." },
            { cn: "理解\u201C好好儿活\u201D这一关键语句在文中的深层含义。", en: "Understand the deeper meaning of the key phrase 'live well' in the text." }
          ],
          parentTips: [
            { cn: "这篇课文感情深沉，可与孩子一起讨论亲情的可贵与感恩之心。", en: "This text has deep emotions. Discuss the preciousness of family love and gratitude together with your child." }
          ]
        },
        {
          id: 6,
          title: "散步",
          titleEn: "A Walk",
          difficulty: 3,
          author: "莫怀戚",
          authorEn: "Mo Huaiqi",
          source: "选自1985年8月2日《中国青年报》。略有改动。",
          sourceEn: "Selected from China Youth Daily, August 2, 1985. Slightly adapted.",
          vocabWords: [
            {word:'分歧',pinyin:'fēn qí',en:'disagreement',sentence:'后来发生了分歧。',sentenceEn:'Later a disagreement arose.'},
            {word:'霎时',pinyin:'shà shí',en:'in an instant',sentence:'那里有金色的菜花，两行整齐的桑树。',sentenceEn:'There were golden rapeseed flowers, two rows of neat mulberry trees.'},
            {word:'粼粼',pinyin:'lín lín',en:'shimmering (of water)',sentence:'水波粼粼的鱼塘。',sentenceEn:'A shimmering fish pond.'},
            {word:'嫩芽',pinyin:'nèn yá',en:'tender buds',sentence:'这南方初春的田野，大块小块的新绿随意地铺着。',sentenceEn:'In these fields of early spring in the south, patches of new green lay scattered freely.'},
            {word:'熬',pinyin:'áo',en:'endure; pull through',sentence:'她又熬过了一个严冬。',sentenceEn:'She endured through another harsh winter.'}
          ],
          footnotes: [
            {term:"\u5206\u6b67", termEn:"disagreement", definition:"\u3010f\u0113n q\u00ed\u3011disagreement\u3002", definitionEn:"disagreement"},
            {term:"\u970e\u65f6", termEn:"in an instant", definition:"\u3010sh\u00e0 sh\u00ed\u3011in an instant\u3002", definitionEn:"in an instant"},
            {term:"\u7cbc\u7cbc", termEn:"shimmering (of water)", definition:"\u3010l\u00edn l\u00edn\u3011shimmering (of water)\u3002", definitionEn:"shimmering (of water)"},
            {term:"\u5ae9\u82bd", termEn:"tender buds", definition:"\u3010n\u00e8n y\u00e1\u3011tender buds\u3002", definitionEn:"tender buds"},
            {term:"\u71ac", termEn:"endure; pull through", definition:"\u3010\u00e1o\u3011endure; pull through\u3002", definitionEn:"endure; pull through"}
          ],
          readingTips: [
            {cn:"\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f", en:"Pay attention to the author's narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?"},
            {cn:"\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f", en:"After reading, think: what theme does the author convey? How does the title relate to the content?"}
          ],
          grammarPoints: [
            {point:'以小见大',pointEn:'yǐ xiǎo jiàn dà',example:'reveal the big through the small',exampleEn:'好像我背上的同她背上的加起来，就是整个世界。',explanation:'As if what was on my back and hers together was the whole world.',explanationEn:'通过一次散步展现家庭的责任与爱'}
          ],
          authorBio: {
            cn: "莫怀戚（1951—2014），重庆人，作家。",
            en: "Mo Huaiqi (1951–2014) was a writer from Chongqing."
          },
          isSelfRead: false,
          preview: [
            { cn: "课文说的是一家人散步的琐事，但仔细品味，会感觉到平常生活中流淌着的亲情，滋润着家人的心灵，承托起一个温暖的家。", en: "The text talks about a family's ordinary walk, but upon careful reflection, you can feel the family love flowing through daily life, nourishing hearts and sustaining a warm home." }
          ],
          text: [
        "\u6211\u4eec\u5728\u7530\u91ce\u4e0a\u6563\u6b65\uff1a\u6211\uff0c\u6211\u7684\u6bcd\u4eb2\uff0c\u6211\u7684\u59bb\u5b50\u548c\u513f\u5b50\u3002",
        "\u6bcd\u4eb2\u672c\u4e0d\u613f\u51fa\u6765\u7684\uff1b\u5979\u8001\u4e86\uff0c\u8eab\u4f53\u4e0d\u597d\uff0c\u8d70\u8fdc\u4e00\u70b9\u513f\u5c31\u89c9\u5f97\u7d2f\u3002\u6211\u8bf4\uff0c\u6b63\u56e0\u4e3a\u5982\u6b64\uff0c\u624d\u5e94\u8be5\u591a\u8d70\u8d70\u3002\u6bcd\u4eb2\u4fe1\u670d\u5730\u70b9\u70b9\u5934\uff0c\u4fbf\u53bb\u62ff\u5916\u5957\u3002\u5979\u73b0\u5728\u5f88\u542c\u6211\u7684\u8bdd\uff0c\u5c31\u50cf\u6211\u5c0f\u65f6\u5019\u5f88\u542c\u5979\u7684\u8bdd\u4e00\u6837\u3002",
        "\u5929\u6c14\u5f88\u597d\u3002\u4eca\u5e74\u7684\u6625\u5929\u6765\u5f97\u592a\u8fdf\uff0c\u592a\u8fdf\u4e86\uff0c\u6709\u4e00\u4e9b\u8001\u4eba\u633a\u4e0d\u4f4f\uff0c\u5728\u6e05\u660e\u5c06\u5230\u7684\u65f6\u5019\u53bb\u4e16\u4e86\u3002\u4f46\u662f\u6625\u5929\u603b\u7b97\u6765\u4e86\u3002\u6211\u7684\u6bcd\u4eb2\u53c8\u71ac\u8fc7\u4e86\u4e00\u4e2a\u4e25\u51ac\u3002",
        "\u8fd9\u5357\u65b9\u7684\u521d\u6625\u7684\u7530\u91ce\uff01\u5927\u5757\u513f\u5c0f\u5757\u513f\u7684\u65b0\u7eff\u968f\u610f\u5730\u94fa\u7740\uff0c\u6709\u7684\u6d53\uff0c\u6709\u7684\u6de1\uff1b\u6811\u679d\u4e0a\u7684\u5ae9\u82bd\u513f\u4e5f\u5bc6\u4e86\uff1b\u7530\u91cc\u7684\u51ac\u6c34\u4e5f\u5495\u5495\u5730\u8d77\u7740\u6c34\u6ce1\u513f\u2026\u2026\u8fd9\u4e00\u5207\u90fd\u4f7f\u4eba\u60f3\u7740\u4e00\u6837\u4e1c\u897f\u2014\u2014\u751f\u547d\u3002",
        "\u540e\u6765\u53d1\u751f\u4e86\u5206\u6b67\uff1a\u6211\u7684\u6bcd\u4eb2\u8981\u8d70\u5927\u8def\uff0c\u5927\u8def\u5e73\u987a\uff1b\u6211\u7684\u513f\u5b50\u8981\u8d70\u5c0f\u8def\uff0c\u5c0f\u8def\u6709\u610f\u601d\u2026\u2026\u4e0d\u8fc7\uff0c\u4e00\u5207\u90fd\u53d6\u51b3\u4e8e\u6211\u3002\u6211\u7684\u6bcd\u4eb2\u8001\u4e86\uff0c\u5979\u65e9\u5df2\u4e60\u60ef\u542c\u4ece\u5979\u5f3a\u58ee\u7684\u513f\u5b50\uff1b\u6211\u7684\u513f\u5b50\u8fd8\u5c0f\uff0c\u4ed6\u8fd8\u4e60\u60ef\u542c\u4ece\u4ed6\u9ad8\u5927\u7684\u7236\u4eb2\uff1b\u59bb\u5b50\u5462\uff0c\u5728\u5916\u9762\uff0c\u5979\u603b\u662f\u542c\u6211\u7684\u3002\u4e00\u970e\u65f6\uff0c\u6211\u611f\u5230\u4e86\u8d23\u4efb\u7684\u91cd\u5927\uff0c\u5c31\u50cf\u6c11\u65cf\u9886\u8896\u5728\u4e25\u91cd\u5173\u5934\u65f6\u90a3\u6837\u3002\u6211\u60f3\u627e\u4e00\u4e2a\u4e24\u5168\u7684\u529e\u6cd5\uff0c\u627e\u4e0d\u51fa\uff1b\u6211\u60f3\u62c6\u6563\u4e00\u5bb6\u4eba\uff0c\u5206\u6210\u4e24\u8def\uff0c\u5404\u5f97\u5176\u6240\uff0c\u7ec8\u4e0d\u613f\u610f\u3002\u6211\u51b3\u5b9a\u59d4\u5c48\u513f\u5b50\u4e86\uff0c\u56e0\u4e3a\u6211\u4f34\u540c\u4ed6\u7684\u65f6\u65e5\u8fd8\u957f\uff0c\u6211\u4f34\u540c\u6bcd\u4eb2\u7684\u65f6\u65e5\u5df2\u77ed\u3002\u6211\u8bf4\uff1a\u201c\u8d70\u5927\u8def\u3002\u201d",
        "\u4f46\u662f\u6bcd\u4eb2\u6478\u6478\u5b59\u513f\u7684\u5c0f\u8111\u74dc\uff0c\u53d8\u4e86\u4e3b\u610f\uff1a\u201c\u8fd8\u662f\u8d70\u5c0f\u8def\u5427\uff01\u201d\u5979\u7684\u773c\u775b\u987a\u5c0f\u8def\u671b\u8fc7\u53bb\uff1a\u90a3\u91cc\u6709\u91d1\u8272\u7684\u83dc\u82b1\u3001\u4e24\u884c\u6574\u9f50\u7684\u6851\u6811\uff0c\u5c3d\u5934\u4e00\u53e3\u6c34\u6ce2\u7cbc\u7cbc\u7684\u9c7c\u5858\u3002\u201c\u6211\u8d70\u4e0d\u8fc7\u53bb\u7684\u5730\u65b9\uff0c\u4f60\u5c31\u80cc\u7740\u6211\u3002\u201d\u6bcd\u4eb2\u8bf4\u3002",
        "\u8fd9\u6837\uff0c\u6211\u4eec\u5c31\u5728\u9633\u5149\u4e0b\uff0c\u5411\u7740\u90a3\u83dc\u82b1\u3001\u6851\u6811\u548c\u9c7c\u5858\u8d70\u53bb\u4e86\u3002\u5230\u4e86\u4e00\u5904\uff0c\u6211\u8e72\u4e0b\u6765\uff0c\u80cc\u8d77\u4e86\u6211\u7684\u6bcd\u4eb2\uff0c\u59bb\u5b50\u4e5f\u8e72\u4e0b\u6765\uff0c\u80cc\u8d77\u4e86\u6211\u4eec\u7684\u513f\u5b50\u3002\u6211\u7684\u6bcd\u4eb2\u867d\u7136\u9ad8\u5927\uff0c\u7136\u800c\u5f88\u7626\uff0c\u81ea\u7136\u4e0d\u7b97\u91cd\uff1b\u513f\u5b50\u867d\u7136\u5f88\u80d6\uff0c\u6bd5\u7adf\u5e7c\u5c0f\uff0c\u81ea\u7136\u4e5f\u5f88\u8f7b\u3002\u4f46\u6211\u548c\u59bb\u5b50\u90fd\u662f\u6162\u6162\u5730\uff0c\u7a33\u7a33\u5730\uff0c\u8d70\u5f97\u5f88\u4ed4\u7ec6\uff0c\u597d\u50cf\u6211\u80cc\u4e0a\u7684\u540c\u5979\u80cc\u4e0a\u7684\u52a0\u8d77\u6765\uff0c\u5c31\u662f\u6574\u4e2a\u4e16\u754c\u3002"
      ],
          textEn: [
        "We are walking in the fields: I, my mother, my wife, and my son.",
        "Mother didn’t want to come out at first; she’s old and not well, feeling tired after walking just a short distance. I said, precisely because of this, she should walk more. Mother nodded in agreement and went to get her coat. She listens to me now, just as I listened to her when I was small.",
        "The weather was beautiful. Spring came too late this year — too late — and some elderly people couldn’t hold on and passed away around Qingming Festival. But spring did finally come. My mother survived another harsh winter.",
        "The fields of early spring in the South! Patches of new green spread carelessly about, some thick, some light; buds on the branches had thickened too; the winter water in the paddy fields gurgled with bubbles... All of this made one think of one thing — life.",
        "Later a disagreement arose: my mother wanted the main road — smooth and easy; my son wanted the small path — more interesting... But everything depended on me. My mother is old; she had long been accustomed to following her strong son. My son is still small; he is still used to following his tall father. As for my wife, outside the home she always defers to me. For a moment I felt the weight of great responsibility, like a national leader at a critical juncture. I tried to find a solution that would satisfy both, but couldn’t; I thought of splitting the family into two groups, each going their own way, but couldn’t bear to do so. I decided to let my son down, because I still have a long time ahead with him, but my time with my mother is already short. I said: ‘Let’s take the main road.’",
        "But Mother patted her grandson’s little head and changed her mind: ‘Let’s take the small path after all!’ Her eyes followed the small path: golden rapeseed flowers, two neat rows of mulberry trees, and at the end, a fish pond with rippling water. ‘Where I can’t walk, you’ll carry me,’ Mother said.",
        "So we walked toward the rapeseed flowers, mulberry trees, and fish pond in the sunlight. At one point, I squatted down and took my mother on my back, and my wife squatted down and took our son on her back. Although my mother is tall, she is very thin, naturally not heavy; although my son is chubby, he is after all small, naturally light too. But my wife and I both walked slowly, steadily, very carefully — as if what I carried on my back and what she carried on hers, together, was the entire world."
      ],
          textPinyin: [
            "w\u01d2 men z\u00e0i ti\u00e1n y\u011b sh\u00e0ng s\u00e0n b\u00f9\uff1a w\u01d2\uff0c w\u01d2 de m\u01d4 q\u012bn\uff0c w\u01d2 de q\u012b z\u01d0 h\u00e9 \u00e9r zi\u3002",
            "m\u01d4 q\u012bn b\u011bn b\u00fa yu\u00e0n ch\u016b l\u00e1i de\uff1b t\u0101 l\u01ceo le\uff0c sh\u0113n t\u01d0 b\u00f9 h\u01ceo\uff0c z\u01d2u yu\u01cen y\u00ec di\u01cen \u00e9r ji\u00f9 ju\u00e9 de l\u00e8i\u3002 w\u01d2 shu\u014d\uff0c zh\u00e8ng y\u012bn w\u00e8i r\u00fa c\u01d0\uff0c c\u00e1i y\u012bng g\u0101i du\u014d z\u01d2u z\u01d2u\u3002 m\u01d4 q\u012bn x\u00ecn f\u00fa d\u00ec di\u01cen di\u01cen t\u00f3u\uff0c bi\u00e0n q\u00f9 n\u00e1 w\u00e0i t\u00e0o\u3002 t\u0101 xi\u00e0n z\u00e0i h\u011bn t\u012bng w\u01d2 de hu\u00e0\uff0c ji\u00f9 xi\u00e0ng w\u01d2 xi\u01ceo sh\u00ed h\u00f2u h\u011bn t\u012bng t\u0101 de hu\u00e0 y\u00ed y\u00e0ng\u3002",
            "ti\u0101n q\u00ec h\u011bn h\u01ceo\u3002 j\u012bn ni\u00e1n de ch\u016bn ti\u0101n l\u00e1i de t\u00e0i ch\u00ed\uff0c t\u00e0i ch\u00ed le\uff0c y\u01d2u y\u00ec xi\u0113 l\u01ceo r\u00e9n t\u01d0ng b\u00fa zh\u00f9\uff0c z\u00e0i q\u012bng m\u00edng ji\u0101ng d\u00e0o de sh\u00ed h\u00f2u q\u00f9 sh\u00ec le\u3002 d\u00e0n sh\u00ec ch\u016bn ti\u0101n z\u01d2ng su\u00e0n l\u00e1i le\u3002 w\u01d2 de m\u01d4 q\u012bn y\u00f2u \u00e1o gu\u00f2 le y\u00ed g\u00e8 y\u00e1n d\u014dng\u3002",
            "zh\u00e8 n\u00e1n f\u0101ng de ch\u016b ch\u016bn de ti\u00e1n y\u011b\uff01 d\u00e0 ku\u00e0i \u00e9r xi\u01ceo ku\u00e0i \u00e9r de x\u012bn l\u01dc su\u00ed y\u00ec d\u00ec p\u00f9 zhe\uff0c y\u01d2u de n\u00f3ng\uff0c y\u01d2u de d\u00e0n\uff1b sh\u00f9 zh\u012b sh\u00e0ng de n\u00e8n y\u00e1 \u00e9r y\u011b m\u00ec le\uff1b ti\u00e1n l\u01d0 de d\u014dng shu\u01d0 y\u011b g\u016b g\u016b d\u00ec q\u01d0 zhe shu\u01d0 p\u00e0o \u00e9r\u2026\u2026 zh\u00e8 y\u00ed qi\u00e8 d\u014du sh\u01d0 r\u00e9n xi\u01ceng zhe y\u00ed y\u00e0ng d\u014dng x\u012b\u2014\u2014 sh\u0113ng m\u00ecng\u3002",
            "h\u00f2u l\u00e1i f\u0101 sh\u0113ng le f\u0113n q\u00ed\uff1a w\u01d2 de m\u01d4 q\u012bn y\u00e0o z\u01d2u d\u00e0 l\u00f9\uff0c d\u00e0 l\u00f9 p\u00edng sh\u00f9n\uff1b w\u01d2 de \u00e9r zi y\u00e0o z\u01d2u xi\u01ceo l\u00f9\uff0c xi\u01ceo l\u00f9 y\u01d2u y\u00ec s\u012b\u2026\u2026 b\u00fa gu\u00f2\uff0c y\u00ed qi\u00e8 d\u014du q\u01d4 ju\u00e9 y\u00fa w\u01d2\u3002 w\u01d2 de m\u01d4 q\u012bn l\u01ceo le\uff0c t\u0101 z\u01ceo y\u01d0 x\u00ed gu\u00e0n t\u012bng c\u00f3ng t\u0101 qi\u00e1ng zhu\u00e0ng de \u00e9r zi\uff1b w\u01d2 de \u00e9r zi h\u00e1i xi\u01ceo\uff0c t\u0101 h\u00e1i x\u00ed gu\u00e0n t\u012bng c\u00f3ng t\u0101 g\u0101o d\u00e0 de f\u00f9 q\u012bn\uff1b q\u012b z\u01d0 ne\uff0c z\u00e0i w\u00e0i mi\u00e0n\uff0c t\u0101 z\u01d2ng sh\u00ec t\u012bng w\u01d2 de\u3002 y\u00ed sh\u00e0 sh\u00ed\uff0c w\u01d2 g\u01cen d\u00e0o le z\u00e9 r\u00e8n de zh\u00f2ng d\u00e0\uff0c ji\u00f9 xi\u00e0ng m\u00edn z\u00fa l\u01d0ng xi\u00f9 z\u00e0i y\u00e1n zh\u00f2ng gu\u0101n t\u00f3u sh\u00ed n\u00e0 y\u00e0ng\u3002 w\u01d2 xi\u01ceng zh\u01ceo y\u00ed g\u00e8 li\u01ceng qu\u00e1n de b\u00e0n f\u01ce\uff0c zh\u01ceo b\u00f9 ch\u016b\uff1b w\u01d2 xi\u01ceng ch\u0101i s\u00e0n y\u00ec ji\u0101 r\u00e9n\uff0c f\u0113n ch\u00e9ng li\u01ceng l\u00f9\uff0c g\u00e8 d\u00e9 q\u00ed su\u01d2\uff0c zh\u014dng b\u00fa yu\u00e0n y\u00ec\u3002 w\u01d2 ju\u00e9 d\u00ecng w\u011bi qu \u00e9r zi le\uff0c y\u012bn w\u00e8i w\u01d2 b\u00e0n t\u00f3ng t\u0101 de sh\u00ed r\u00ec h\u00e1i ch\u00e1ng\uff0c w\u01d2 b\u00e0n t\u00f3ng m\u01d4 q\u012bn de sh\u00ed r\u00ec y\u01d0 du\u01cen\u3002 w\u01d2 shu\u014d\uff1a \u201c z\u01d2u d\u00e0 l\u00f9\u3002 \u201d",
            "d\u00e0n sh\u00ec m\u01d4 q\u012bn m\u014d m\u014d s\u016bn \u00e9r de xi\u01ceo n\u01ceo gu\u0101\uff0c bi\u00e0n le zh\u01d4 y\u00ec\uff1a \u201c h\u00e1i sh\u00ec z\u01d2u xi\u01ceo l\u00f9 ba\uff01 \u201d t\u0101 de y\u01cen j\u012bng sh\u00f9n xi\u01ceo l\u00f9 w\u00e0ng gu\u00f2 q\u00f9\uff1a n\u00e0 l\u01d0 y\u01d2u j\u012bn s\u00e8 de c\u00e0i hu\u0101\u3001 li\u01ceng h\u00e1ng zh\u011bng q\u00ed de s\u0101ng sh\u00f9\uff0c j\u00ecn t\u00f3u y\u00ec k\u01d2u shu\u01d0 b\u014d l\u00edn l\u00edn de y\u00fa t\u00e1ng\u3002 \u201c w\u01d2 z\u01d2u b\u00fa gu\u00f2 q\u00f9 de d\u00ec f\u0101ng\uff0c n\u01d0 ji\u00f9 b\u00e8i zhe w\u01d2\u3002 \u201d m\u01d4 q\u012bn shu\u014d\u3002",
            "zh\u00e8 y\u00e0ng\uff0c w\u01d2 men ji\u00f9 z\u00e0i y\u00e1ng gu\u0101ng xi\u00e0\uff0c xi\u00e0ng zhe n\u00e0 c\u00e0i hu\u0101\u3001 s\u0101ng sh\u00f9 h\u00e9 y\u00fa t\u00e1ng z\u01d2u q\u00f9 le\u3002 d\u00e0o le y\u00ed ch\u00f9\uff0c w\u01d2 d\u016bn xi\u00e0 l\u00e1i\uff0c b\u00e8i q\u01d0 le w\u01d2 de m\u01d4 q\u012bn\uff0c q\u012b z\u01d0 y\u011b d\u016bn xi\u00e0 l\u00e1i\uff0c b\u00e8i q\u01d0 le w\u01d2 men de \u00e9r zi\u3002 w\u01d2 de m\u01d4 q\u012bn su\u012b r\u00e1n g\u0101o d\u00e0\uff0c r\u00e1n \u00e9r h\u011bn sh\u00f2u\uff0c z\u00ec r\u00e1n b\u00fa su\u00e0n zh\u00f2ng\uff1b \u00e9r zi su\u012b r\u00e1n h\u011bn p\u00e0ng\uff0c b\u00ec j\u00ecng y\u00f2u xi\u01ceo\uff0c z\u00ec r\u00e1n y\u011b h\u011bn q\u012bng\u3002 d\u00e0n w\u01d2 h\u00e9 q\u012b z\u01d0 d\u014du sh\u00ec m\u00e0n m\u00e0n d\u00ec\uff0c w\u011bn w\u011bn d\u00ec\uff0c z\u01d2u d\u00e9 h\u011bn z\u01cei x\u00ec\uff0c h\u01ceo xi\u00e0ng w\u01d2 b\u00e8i sh\u00e0ng de t\u00f3ng t\u0101 b\u00e8i sh\u00e0ng de ji\u0101 q\u01d0 l\u00e1i\uff0c ji\u00f9 sh\u00ec zh\u011bng g\u00e8 sh\u00ec ji\u00e8\u3002"
          ],
          annotations: [
            {term: "\u5206\u6b67", termEn: "disagreement", pinyin: "f\u0113n q\u00ed", definition: "\u540e\u6765\u53d1\u751f\u4e86\u5206\u6b67\u3002", definitionEn: "Later a disagreement arose."},
            {term: "\u970e\u65f6", termEn: "in an instant", pinyin: "sh\u00e0 sh\u00ed", definition: "\u90a3\u91cc\u6709\u91d1\u8272\u7684\u83dc\u82b1\uff0c\u4e24\u884c\u6574\u9f50\u7684\u6851\u6811\u3002", definitionEn: "There were golden rapeseed flowers, two rows of neat mulberry trees."},
            {term: "\u7cbc\u7cbc", termEn: "shimmering (of water)", pinyin: "l\u00edn l\u00edn", definition: "\u6c34\u6ce2\u7cbc\u7cbc\u7684\u9c7c\u5858\u3002", definitionEn: "A shimmering fish pond."},
            {term: "\u5ae9\u82bd", termEn: "tender buds", pinyin: "n\u00e8n y\u00e1", definition: "\u8fd9\u5357\u65b9\u521d\u6625\u7684\u7530\u91ce\uff0c\u5927\u5757\u5c0f\u5757\u7684\u65b0\u7eff\u968f\u610f\u5730\u94fa\u7740\u3002", definitionEn: "In these fields of early spring in the south, patches of new green lay scattered freely."},
            {term: "\u71ac", termEn: "endure; pull through", pinyin: "\u00e1o", definition: "\u5979\u53c8\u71ac\u8fc7\u4e86\u4e00\u4e2a\u4e25\u51ac\u3002", definitionEn: "She endured through another harsh winter."}
          ],
          thinkExplore: [
            { cn: "朗读课文，说说文章为什么取题为《散步》。如果换个角度另拟一个题目，你会以什么为题？", en: "Read aloud and explain why the article is titled 'A Walk.' If you could give it another title from a different angle, what would it be?" },
            { cn: "品味结尾语句，结合全文，说说你对课文深层意蕴的理解。", en: "Savor the concluding sentences and discuss your understanding of the text's deeper meaning." }
          ],
          accumExtend: [
            { cn: "课文多处运用对称的句子。画出这些句子，说说这样写的好处。", en: "The text uses many symmetrical sentences. Identify them and discuss the benefits of this writing technique." }
          ],
          teachingPoints: [
            { cn: "体会以小见大的写法——通过平凡小事表达深刻主题。", en: "Appreciate the technique of 'seeing the great in the small' — expressing profound themes through ordinary events." },
            { cn: "学习对称句式的运用及其表达效果。", en: "Learn the use of symmetrical sentence structures and their expressive effects." }
          ],
          parentTips: [
            { cn: "全家人可以一起散步，在日常生活中体会亲情的温暖。", en: "The whole family can take walks together, experiencing the warmth of family love in daily life." }
          ]
        },
        {
          id: 7,
          title: "散文诗二首",
          titleEn: "Two Prose Poems",
          difficulty: 3,
          author: "泰戈尔、冰心",
          authorEn: "Rabindranath Tagore, Bing Xin",
          source: "《金色花》选自《泰戈尔诗选》（人民文学出版社2002年版），郑振铎译。《荷叶·母亲》节选自《往事（一）》（《冰心全集》第一册），题目是编者加的。",
          sourceEn: "The Golden Flower from Selected Poems of Tagore (People's Literature Publishing House, 2002), translated by Zheng Zhenduo. Lotus Leaf and Mother excerpted from Past Events (I) (Complete Works of Bing Xin, Vol. 1), title added by editors.",
          vocabWords: [
            {word:'金色花',pinyin:'jīn sè huā',en:'golden flower',sentence:'假如我变成了一朵金色花。',sentenceEn:'If I turned into a golden flower.'},
            {word:'荷叶',pinyin:'hé yè',en:'lotus leaf',sentence:'母亲呵！你是荷叶，我是红莲。',sentenceEn:'Mother! You are the lotus leaf, I am the red lotus.'},
            {word:'匿笑',pinyin:'nì xiào',en:'snicker; laugh secretly',sentence:'我暗暗地在那里匿笑。',sentenceEn:'I secretly snickered there.'},
            {word:'亭亭',pinyin:'tíng tíng',en:'gracefully upright',sentence:'亭亭的荷叶覆盖在红莲上面。',sentenceEn:'The gracefully upright lotus leaf covered the red lotus.'},
            {word:'慈怜',pinyin:'cí lián',en:'tender compassion',sentence:'心中的雨点来了，除了你，谁是我无遮拦天空下的荫蔽？',sentenceEn:'When the rain of my heart comes, except for you, who is my shelter under the open sky?'}
          ],
          footnotes: [
            {term:"\u91d1\u8272\u82b1", termEn:"golden flower", definition:"\u3010j\u012bn s\u00e8 hu\u0101\u3011golden flower\u3002", definitionEn:"golden flower"},
            {term:"\u8377\u53f6", termEn:"lotus leaf", definition:"\u3010h\u00e9 y\u00e8\u3011lotus leaf\u3002", definitionEn:"lotus leaf"},
            {term:"\u533f\u7b11", termEn:"snicker; laugh secretly", definition:"\u3010n\u00ec xi\u00e0o\u3011snicker; laugh secretly\u3002", definitionEn:"snicker; laugh secretly"},
            {term:"\u4ead\u4ead", termEn:"gracefully upright", definition:"\u3010t\u00edng t\u00edng\u3011gracefully upright\u3002", definitionEn:"gracefully upright"},
            {term:"\u6148\u601c", termEn:"tender compassion", definition:"\u3010c\u00ed li\u00e1n\u3011tender compassion\u3002", definitionEn:"tender compassion"}
          ],
          readingTips: [
            {cn:"\u53cd\u590d\u8bf5\u8bfb\uff0c\u4f53\u4f1a\u8bd7\u6b4c\u7684\u97f3\u97f5\u7f8e\u548c\u610f\u5883\u7f8e\u3002\u6ce8\u610f\u5206\u6790\u8bd7\u4e2d\u7684\u610f\u8c61\u548c\u4fee\u8f9e\u624b\u6cd5\u3002", en:"Read aloud repeatedly to appreciate the phonetic beauty and artistic conception. Analyze the imagery and rhetorical devices used."},
            {cn:"\u7ed3\u5408\u8bd7\u4eba\u7684\u751f\u5e73\u548c\u5199\u4f5c\u80cc\u666f\uff0c\u7406\u89e3\u8bd7\u6b4c\u4e2d\u8574\u542b\u7684\u601d\u60f3\u611f\u60c5\u3002", en:"Consider the poet's life and the context of writing to understand the deeper emotions expressed."}
          ],
          accumExtend: [
            {cn: "\u8bfe\u6587\u4e2d\u6709\u4e0d\u5c11\u597d\u8bcd\u4f73\u53e5\uff0c\u5982\u201c\u91d1\u8272\u82b1\u3001\u8377\u53f6\u3001\u533f\u7b11\u201d\u7b49\u3002\u8bf7\u6458\u5f55\u4f60\u559c\u6b22\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u5e76\u8bd5\u7740\u5728\u81ea\u5df1\u7684\u5199\u4f5c\u4e2d\u8fd0\u7528\u3002", en: "The text contains fine words and phrases such as \"\u91d1\u8272\u82b1\u3001\u8377\u53f6\u3001\u533f\u7b11\". Collect the words and sentences you like and try using them in your own writing."},
            {cn: "\u5c1d\u8bd5\u80cc\u8bf5\u8fd9\u9996\u8bd7\u3002\u53ef\u4ee5\u914d\u4e0a\u97f3\u4e50\u6216\u56fe\u753b\uff0c\u8fdb\u884c\u521b\u610f\u6717\u8bf5\u3002", en: "Try to recite this poem. You can pair it with music or illustrations for a creative reading."},
            {cn: "\u4eff\u7167\u8fd9\u9996\u8bd7\u7684\u98ce\u683c\uff0c\u8bd5\u7740\u5199\u4e00\u9996\u5c0f\u8bd7\uff0c\u8868\u8fbe\u4f60\u5bf9\u67d0\u4e2a\u4e3b\u9898\u7684\u611f\u60f3\u3002", en: "Following the style of this poem, try writing a short poem expressing your thoughts on a topic."}
          ],
          thinkExplore: [
            {cn: "\u6709\u611f\u60c5\u5730\u6717\u8bfb\u8fd9\u9996\u8bd7\uff0c\u6ce8\u610f\u8282\u594f\u548c\u97f5\u5f8b\u3002\u8bd7\u4e2d\u8425\u9020\u4e86\u600e\u6837\u7684\u610f\u5883\uff1f\u8bd7\u4eba\u8868\u8fbe\u4e86\u600e\u6837\u7684\u60c5\u611f\uff1f", en: "Read the poem aloud with feeling, paying attention to rhythm and rhyme. What atmosphere does it create? What emotions does the poet express?"},
            {cn: "\u627e\u51fa\u8bd7\u4e2d\u7684\u610f\u8c61\u548c\u5173\u952e\u8bcd\u8bed\uff0c\u5206\u6790\u5b83\u4eec\u5982\u4f55\u5851\u9020\u8bd7\u6b4c\u7684\u4e3b\u9898\u548c\u60c5\u611f\u57fa\u8c03\u3002", en: "Identify the imagery and key phrases. Analyze how they shape the poem's theme and emotional tone."},
            {cn: "\u6bd4\u8f83\u8fd9\u9996\u8bd7\u4e0e\u4f60\u8bfb\u8fc7\u7684\u5176\u4ed6\u540c\u4e3b\u9898\u8bd7\u6b4c\uff0c\u8bf4\u8bf4\u5b83\u4eec\u5728\u8868\u8fbe\u65b9\u5f0f\u4e0a\u6709\u4ec0\u4e48\u5f02\u540c\u3002", en: "Compare this poem with other poems of similar themes you've read. How do they differ in expression?"}
          ],
          grammarPoints: [
            {point:'象征',pointEn:'xiàng zhēng',example:'symbolism',exampleEn:'母亲呵！你是荷叶，我是红莲。',explanation:'Mother! You are the lotus leaf, I am the red lotus.',explanationEn:'以荷叶护红莲象征母爱的庇护'}
          ],
          authorBio: {
            cn: "泰戈尔（1861—1941），印度作家、诗人，获1913年诺贝尔文学奖。冰心（1900—1999），原名谢婉莹，福建长乐人，作家、诗人。",
            en: "Tagore (1861–1941) was an Indian writer and poet who won the 1913 Nobel Prize in Literature. Bing Xin (1900–1999), original name Xie Wanying, was a writer and poet from Changle, Fujian."
          },
          isSelfRead: true,
          preview: [
            { cn: "自读这两首散文诗，体会其中的母子深情。", en: "Read these two prose poems independently and feel the deep love between mother and child." }
          ],
          text: [
        "\u91d1\u8272\u82b1\n\u6cf0\u6208\u5c14\n\u5047\u5982\u6211\u53d8\u6210\u4e86\u4e00\u6735\u91d1\u8272\u82b1\uff0c\u53ea\u662f\u4e3a\u4e86\u597d\u73a9\uff0c\u957f\u5728\u90a3\u68f5\u6811\u7684\u9ad8\u679d\u4e0a\uff0c\u7b11\u563b\u563b\u5730\u5728\u98ce\u4e2d\u6447\u6446\uff0c\u53c8\u5728\u65b0\u53f6\u4e0a\u8df3\u821e\uff0c\u5988\u5988\uff0c\u4f60\u4f1a\u8ba4\u8bc6\u6211\u5417\uff1f\n\u4f60\u8981\u662f\u53eb\u9053\uff1a\u201c\u5b69\u5b50\uff0c\u4f60\u5728\u54ea\u91cc\u5440\uff1f\u201d\u6211\u6697\u6697\u5730\u5728\u90a3\u91cc\u533f\u7b11\uff0c\u5374\u4e00\u58f0\u513f\u4e0d\u54cd\u3002\n\u6211\u8981\u6084\u6084\u5730\u5f00\u653e\u82b1\u74e3\u513f\uff0c\u770b\u7740\u4f60\u5de5\u4f5c\u3002\n\u5f53\u4f60\u6c90\u6d74\u540e\uff0c\u6e7f\u53d1\u62ab\u5728\u4e24\u80a9\uff0c\u7a7f\u8fc7\u91d1\u8272\u82b1\u7684\u6797\u836b\uff0c\u8d70\u5230\u4f60\u505a\u7977\u544a\u7684\u5c0f\u5ead\u9662\u65f6\uff0c\u4f60\u4f1a\u55c5\u5230\u8fd9\u82b1\u9999\uff0c\u5374\u4e0d\u77e5\u9053\u8fd9\u9999\u6c14\u662f\u4ece\u6211\u8eab\u4e0a\u6765\u7684\u3002\n\u5f53\u4f60\u5403\u8fc7\u4e2d\u996d\uff0c\u5750\u5728\u7a97\u524d\u8bfb\u300a\u7f57\u6469\u884d\u90a3\u300b\uff0c\u90a3\u68f5\u6811\u7684\u9634\u5f71\u843d\u5728\u4f60\u7684\u5934\u53d1\u4e0e\u819d\u4e0a\u65f6\uff0c\u6211\u4fbf\u8981\u6295\u6211\u7684\u5c0f\u5c0f\u7684\u5f71\u5b50\u5728\u4f60\u7684\u4e66\u9875\u4e0a\uff0c\u6b63\u6295\u5728\u4f60\u6240\u8bfb\u7684\u5730\u65b9\u3002\n\u4f46\u662f\u4f60\u4f1a\u731c\u5f97\u51fa\u8fd9\u5c31\u662f\u4f60\u7684\u5b69\u5b50\u7684\u5c0f\u5c0f\u5f71\u5b50\u5417\uff1f\n\u5f53\u4f60\u9ec4\u660f\u65f6\u62ff\u4e86\u706f\u5230\u725b\u68da\u91cc\u53bb\uff0c\u6211\u4fbf\u8981\u7a81\u7136\u5730\u518d\u843d\u5230\u5730\u4e0a\u6765\uff0c\u53c8\u6210\u4e86\u4f60\u7684\u5b69\u5b50\uff0c\u6c42\u4f60\u8bb2\u4e2a\u6545\u4e8b\u7ed9\u6211\u542c\u3002\n\u201c\u4f60\u5230\u54ea\u91cc\u53bb\u4e86\uff0c\u4f60\u8fd9\u574f\u5b69\u5b50\uff1f\u201d\n\u201c\u6211\u4e0d\u544a\u8bc9\u4f60\uff0c\u5988\u5988\u3002\u201d\u8fd9\u5c31\u662f\u4f60\u540c\u6211\u90a3\u65f6\u6240\u8981\u8bf4\u7684\u8bdd\u4e86\u3002",
        "\u8377\u53f6\u00b7\u6bcd\u4eb2\n\u51b0\u5fc3\n\u7236\u4eb2\u7684\u670b\u53cb\u9001\u7ed9\u6211\u4eec\u4e24\u7f38\u83b2\u82b1\uff0c\u4e00\u7f38\u662f\u7ea2\u7684\uff0c\u4e00\u7f38\u662f\u767d\u7684\uff0c\u90fd\u6446\u5728\u9662\u5b50\u91cc\u3002\n\u516b\u5e74\u4e4b\u4e45\uff0c\u6211\u6ca1\u6709\u5728\u9662\u5b50\u91cc\u770b\u83b2\u82b1\u4e86\u2014\u2014\u4f46\u6545\u4e61\u7684\u56ed\u9662\u91cc\uff0c\u5374\u6709\u8bb8\u591a\uff1b\u4e0d\u4f46\u6709\u5e76\u8482\u7684\uff0c\u8fd8\u6709\u4e09\u8482\u7684\uff0c\u56db\u8482\u7684\uff0c\u90fd\u662f\u7ea2\u83b2\u3002\n\u4e5d\u5e74\u524d\u7684\u4e00\u4e2a\u6708\u591c\uff0c\u7956\u7236\u548c\u6211\u5728\u56ed\u91cc\u4e58\u51c9\u3002\u7956\u7236\u7b11\u7740\u548c\u6211\u8bf4\uff1a\u201c\u6211\u4eec\u56ed\u91cc\u6700\u521d\u5f00\u4e09\u8482\u83b2\u7684\u65f6\u5019\uff0c\u6b63\u597d\u6211\u4eec\u5927\u5bb6\u5ead\u4e2d\u6dfb\u4e86\u4f60\u4eec\u4e09\u4e2a\u59ca\u59b9\u3002\u5927\u5bb6\u90fd\u6b22\u559c\uff0c\u8bf4\u662f\u5e94\u4e86\u82b1\u745e\u3002\u201d\n\u534a\u591c\u91cc\u542c\u89c1\u7e41\u6742\u7684\u96e8\u58f0\uff0c\u65e9\u8d77\u662f\u6d53\u9634\u7684\u5929\uff0c\u6211\u89c9\u5f97\u6709\u4e9b\u70e6\u95f7\u3002\u4ece\u7a97\u5185\u5f80\u5916\u770b\u65f6\uff0c\u90a3\u4e00\u6735\u767d\u83b2\u5df2\u7ecf\u8c22\u4e86\uff0c\u767d\u74e3\u513f\u5c0f\u8239\u822c\u6563\u6f02\u5728\u6c34\u9762\u3002\u6897\u4e0a\u53ea\u7559\u4e2a\u5c0f\u5c0f\u7684\u83b2\u84ec\u548c\u51e0\u6839\u6de1\u9ec4\u8272\u7684\u82b1\u987b\u3002\u90a3\u4e00\u6735\u7ea2\u83b2\uff0c\u6628\u591c\u8fd8\u662f\u83e1\u840f\u7684\uff0c\u4eca\u6668\u5374\u5f00\u6ee1\u4e86\uff0c\u4ead\u4ead\u5730\u5728\u7eff\u53f6\u4e2d\u95f4\u7acb\u7740\u3002\n\u4ecd\u662f\u4e0d\u9002\u610f\uff01\u2014\u2014\u5f98\u5f8a\u4e86\u4e00\u4f1a\u5b50\uff0c\u7a97\u5916\u96f7\u58f0\u4f5c\u4e86\uff0c\u5927\u96e8\u63a5\u7740\u5c31\u6765\uff0c\u6108\u4e0b\u6108\u5927\u3002\u90a3\u6735\u7ea2\u83b2\uff0c\u88ab\u90a3\u7e41\u5bc6\u7684\u96e8\u70b9\uff0c\u6253\u5f97\u5de6\u53f3\u6532\u659c\u3002\u5728\u65e0\u906e\u853d\u7684\u5929\u7a7a\u4e4b\u4e0b\uff0c\u6211\u4e0d\u6562\u4e0b\u9636\u53bb\uff0c\u4e5f\u65e0\u6cd5\u53ef\u60f3\u3002\n\u5bf9\u5c4b\u91cc\u6bcd\u4eb2\u5524\u7740\uff0c\u6211\u8fde\u5fd9\u8d70\u8fc7\u53bb\uff0c\u5750\u5728\u6bcd\u4eb2\u65c1\u8fb9\u2014\u2014\u4e00\u56de\u5934\u5ffd\u7136\u770b\u89c1\u7ea2\u83b2\u65c1\u8fb9\u7684\u4e00\u4e2a\u5927\u8377\u53f6\uff0c\u6162\u6162\u5730\u503e\u4fa7\u4e86\u6765\uff0c\u6b63\u8986\u76d6\u5728\u7ea2\u83b2\u4e0a\u9762\u2026\u2026\u6211\u4e0d\u5b81\u7684\u5fc3\u7eea\u6563\u5c3d\u4e86\uff01\n\u96e8\u52bf\u5e76\u4e0d\u51cf\u9000\uff0c\u7ea2\u83b2\u5374\u4e0d\u6447\u52a8\u4e86\u3002\u96e8\u70b9\u4e0d\u4f4f\u5730\u6253\u7740\uff0c\u53ea\u80fd\u5728\u90a3\u52c7\u6562\u6148\u601c\u7684\u8377\u53f6\u4e0a\u9762\uff0c\u805a\u4e86\u4e9b\u6d41\u8f6c\u65e0\u529b\u7684\u6c34\u73e0\u3002\n\u6211\u5fc3\u4e2d\u6df1\u6df1\u5730\u53d7\u4e86\u611f\u52a8\u2014\u2014\n\u6bcd\u4eb2\u554a\uff01\u4f60\u662f\u8377\u53f6\uff0c\u6211\u662f\u7ea2\u83b2\u3002\u5fc3\u4e2d\u7684\u96e8\u70b9\u6765\u4e86\uff0c\u9664\u4e86\u4f60\uff0c\u8c01\u662f\u6211\u5728\u65e0\u906e\u62e6\u5929\u7a7a\u4e0b\u7684\u836b\u853d\uff1f"
      ],
          textEn: [
        "The Golden Flower\nTagore\nIf I turned into a golden flower, just for fun, growing on a high branch of that tree, swaying happily in the wind, dancing upon the new leaves — Mama, would you recognize me?\nIf you called: ‘Child, where are you?’ I would laugh to myself in secret, not making a sound.\nI would quietly open my petals and watch you work.\nWhen you walked through the shade of the golden flowers to your little prayer courtyard after bathing, wet hair draped over your shoulders, you would catch the fragrance but never know it came from me.\nWhen you sat by the window after lunch reading the Ramayana, and the shadow of that tree fell across your hair and your lap, I would cast my own tiny shadow upon your page — right where you were reading.\nBut would you guess that the little shadow was your child’s?\nAt dusk, when you carried a lamp to the cowshed, I would suddenly tumble back to the ground, a child once more, begging you to tell me a story.\n‘Where have you been, you naughty child?’\n‘I won’t tell you, Mama.’ That is what you and I would say to each other.",
        "Lotus Leaf and Mother\nBing Xin\nA friend of Father’s gave us two jars of lotus — one red, one white — both placed in the courtyard.\nFor eight years I had not seen lotus in the courtyard — but in the garden back home there were many; not only twin-stemmed ones, but triple and even quadruple-stemmed ones, all red lotus.\nOne moonlit night nine years ago, Grandfather and I sat cooling off in the garden. He smiled and said: ‘When the first triple-stemmed lotus bloomed in our garden, it was just when you three sisters were added to our big family. Everyone was delighted, saying it was an auspicious sign from the flowers.’\nIn the deep of night I heard the tangled sound of rain. Morning came overcast, and I felt somewhat restless. Looking out from the window, the white lotus had already withered, its petals scattered across the water like little boats drifting. Only a small seed pod and a few pale yellow stamens remained on the stem. But the red lotus — still a bud just last night — had bloomed fully this morning, standing tall and graceful among the green leaves.\nStill I felt uneasy! — After pacing about for a while, thunder rumbled outside the window and heavy rain came pouring down, harder and harder. That red lotus was beaten left and right by the dense raindrops, tilting this way and that. Under the unsheltered sky, I dared not go down the steps, nor could I think of what to do.\nFrom the room across the way, Mother called to me. I hurried over and sat beside her — then, turning my head, I suddenly saw a large lotus leaf beside the red lotus slowly tilting over until it covered the red lotus completely... My restless heart was stilled at once!\nThe rain did not relent, yet the red lotus swayed no more. The drops fell ceaselessly, but could only gather into listless beads upon that brave, compassionate leaf.\nI was moved to the depths of my heart —\nMother! You are the lotus leaf; I am the red lotus. When the rain of my heart begins to fall, who but you is my shelter beneath the unsheltered sky?"
      ],
          textPinyin: [
            "j\u012bn s\u00e8 hu\u0101\n t\u00e0i g\u0113 \u011br\n ji\u01ce r\u00fa w\u01d2 bi\u00e0n ch\u00e9ng le y\u00ec du\u01d2 j\u012bn s\u00e8 hu\u0101\uff0c zh\u01d0 sh\u00ec w\u00e8i le h\u01ceo w\u00e1n\uff0c ch\u00e1ng z\u00e0i n\u00e0 k\u0113 sh\u00f9 de g\u0101o zh\u012b sh\u00e0ng\uff0c xi\u00e0o x\u012b x\u012b d\u00ec z\u00e0i f\u0113ng zh\u014dng y\u00e1o b\u01cei\uff0c y\u00f2u z\u00e0i x\u012bn y\u00e8 sh\u00e0ng ti\u00e0o w\u01d4\uff0c m\u0101 ma\uff0c n\u01d0 hu\u00ec r\u00e8n sh\u00ed w\u01d2 ma\uff1f\n n\u01d0 y\u00e0o shi ji\u00e0o d\u00e0o\uff1a \u201c h\u00e1i zi\uff0c n\u01d0 z\u00e0i n\u01ce l\u01d0 ya\uff1f \u201d w\u01d2 \u00e0n \u00e0n d\u00ec z\u00e0i n\u00e0 l\u01d0 n\u00ec xi\u00e0o\uff0c qu\u00e8 y\u00ec sh\u0113ng \u00e9r b\u00f9 xi\u01ceng\u3002\n w\u01d2 y\u00e0o qi\u0101o qi\u0101o d\u00ec k\u0101i f\u00e0ng hu\u0101 b\u00e0n \u00e9r\uff0c k\u00e0n zhe n\u01d0 g\u014dng zu\u00f2\u3002\n d\u0101ng n\u01d0 m\u00f9 y\u00f9 h\u00f2u\uff0c sh\u012b f\u0101 p\u012b z\u00e0i li\u01ceng ji\u0101n\uff0c chu\u0101n gu\u00f2 j\u012bn s\u00e8 hu\u0101 de l\u00edn y\u00ecn\uff0c z\u01d2u d\u00e0o n\u01d0 zu\u00f2 d\u01ceo g\u00e0o de xi\u01ceo t\u00edng yu\u00e0n sh\u00ed\uff0c n\u01d0 hu\u00ec xi\u00f9 d\u00e0o zh\u00e8 hu\u0101 xi\u0101ng\uff0c qu\u00e8 b\u00f9 zh\u012b d\u00e0o zh\u00e8 xi\u0101ng q\u00ec sh\u00ec c\u00f3ng w\u01d2 sh\u0113n sh\u00e0ng l\u00e1i de\u3002\n d\u0101ng n\u01d0 ch\u012b gu\u00f2 zh\u014dng f\u00e0n\uff0c zu\u00f2 z\u00e0i chu\u0101ng qi\u00e1n d\u00fa\u300alu\u00f3 m\u00f3 y\u01cen n\u00e0\u300b\uff0c n\u00e0 k\u0113 sh\u00f9 de y\u012bn y\u01d0ng lu\u00f2 z\u00e0i n\u01d0 de t\u00f3u fa y\u01d4 x\u012b sh\u00e0ng sh\u00ed\uff0c w\u01d2 bi\u00e0n y\u00e0o t\u00f3u w\u01d2 de xi\u01ceo xi\u01ceo de y\u01d0ng zi z\u00e0i n\u01d0 de sh\u016b y\u00e8 sh\u00e0ng\uff0c zh\u00e8ng t\u00f3u z\u00e0i n\u01d0 su\u01d2 d\u00fa de d\u00ec f\u0101ng\u3002\n d\u00e0n sh\u00ec n\u01d0 hu\u00ec c\u0101i d\u00e9 ch\u016b zh\u00e8 ji\u00f9 sh\u00ec n\u01d0 de h\u00e1i zi de xi\u01ceo xi\u01ceo y\u01d0ng zi ma\uff1f\n d\u0101ng n\u01d0 hu\u00e1ng h\u016bn sh\u00ed n\u00e1 le d\u0113ng d\u00e0o ni\u00fa p\u00e9ng l\u01d0 q\u00f9\uff0c w\u01d2 bi\u00e0n y\u00e0o t\u016b r\u00e1n d\u00ec z\u00e0i lu\u00f2 d\u00e0o d\u00ec sh\u00e0ng l\u00e1i\uff0c y\u00f2u ch\u00e9ng le n\u01d0 de h\u00e1i zi\uff0c qi\u00fa n\u01d0 ji\u01ceng g\u00e8 g\u00f9 sh\u00ec g\u011bi w\u01d2 t\u012bng\u3002\n \u201c n\u01d0 d\u00e0o n\u01ce l\u01d0 q\u00f9 le\uff0c n\u01d0 zh\u00e8 hu\u00e0i h\u00e1i zi\uff1f \u201d\n \u201c w\u01d2 b\u00fa g\u00e0o s\u00f9 n\u01d0\uff0c m\u0101 ma\u3002 \u201d zh\u00e8 ji\u00f9 sh\u00ec n\u01d0 t\u00f3ng w\u01d2 n\u00e0 sh\u00ed su\u01d2 y\u00e0o shu\u014d de hu\u00e0 le\u3002",
            "h\u00e9 y\u00e8\u00b7 m\u01d4 q\u012bn\n b\u012bng x\u012bn\n f\u00f9 q\u012bn de p\u00e9ng y\u01d2u s\u00f2ng g\u011bi w\u01d2 men li\u01ceng g\u0101ng li\u00e1n hu\u0101\uff0c y\u00ec g\u0101ng sh\u00ec h\u00f3ng de\uff0c y\u00ec g\u0101ng sh\u00ec b\u00e1i de\uff0c d\u014du b\u01cei z\u00e0i yu\u00e0n zi l\u01d0\u3002\n b\u0101 ni\u00e1n zh\u012b ji\u01d4\uff0c w\u01d2 m\u00e9i y\u01d2u z\u00e0i yu\u00e0n zi l\u01d0 k\u00e0n li\u00e1n hu\u0101 le\u2014\u2014 d\u00e0n g\u00f9 xi\u0101ng de yu\u00e1n yu\u00e0n l\u01d0\uff0c qu\u00e8 y\u01d2u x\u01d4 du\u014d\uff1b b\u00fa d\u00e0n y\u01d2u b\u00ecng d\u00ec de\uff0c h\u00e1i y\u01d2u s\u0101n d\u00ec de\uff0c s\u00ec d\u00ec de\uff0c d\u014du sh\u00ec h\u00f3ng li\u00e1n\u3002\n ji\u01d4 ni\u00e1n qi\u00e1n de y\u00ed g\u00e8 yu\u00e8 y\u00e8\uff0c z\u01d4 f\u00f9 h\u00e9 w\u01d2 z\u00e0i yu\u00e1n l\u01d0 ch\u00e9ng li\u00e1ng\u3002 z\u01d4 f\u00f9 xi\u00e0o zhe h\u00e9 w\u01d2 shu\u014d\uff1a \u201c w\u01d2 men yu\u00e1n l\u01d0 zu\u00ec ch\u016b k\u0101i s\u0101n d\u00ec li\u00e1n de sh\u00ed h\u00f2u\uff0c zh\u00e8ng h\u01ceo w\u01d2 men d\u00e0 ji\u0101 t\u00edng zh\u014dng ti\u0101n le n\u01d0 men s\u0101n g\u00e8 z\u01d0 m\u00e8i\u3002 d\u00e0 ji\u0101 d\u014du hu\u0101n x\u01d0\uff0c shu\u014d sh\u00ec y\u00ecng le hu\u0101 ru\u00ec\u3002 \u201d\n b\u00e0n y\u00e8 l\u01d0 t\u012bng ji\u00e0n f\u00e1n z\u00e1 de y\u01d4 sh\u0113ng\uff0c z\u01ceo q\u01d0 sh\u00ec n\u00f3ng y\u012bn de ti\u0101n\uff0c w\u01d2 ju\u00e9 de y\u01d2u xi\u0113 f\u00e1n m\u00e8n\u3002 c\u00f3ng chu\u0101ng n\u00e8i w\u01ceng w\u00e0i k\u00e0n sh\u00ed\uff0c n\u00e0 y\u00ec du\u01d2 b\u00e1i li\u00e1n y\u01d0 j\u012bng xi\u00e8 le\uff0c b\u00e1i b\u00e0n \u00e9r xi\u01ceo chu\u00e1n b\u0101n s\u00e0n pi\u0101o z\u00e0i shu\u01d0 mi\u00e0n\u3002 g\u011bng sh\u00e0ng zh\u012b li\u00fa g\u00e8 xi\u01ceo xi\u01ceo de li\u00e1n p\u00e9ng h\u00e9 j\u01d0 g\u0113n d\u00e0n hu\u00e1ng s\u00e8 de hu\u0101 x\u016b\u3002 n\u00e0 y\u00ec du\u01d2 h\u00f3ng li\u00e1n\uff0c zu\u00f3 y\u00e8 h\u00e1i sh\u00ec h\u00e0n d\u00e0n de\uff0c j\u012bn ch\u00e9n qu\u00e8 k\u0101i m\u01cen le\uff0c t\u00edng t\u00edng d\u00ec z\u00e0i l\u01dc y\u00e8 zh\u014dng ji\u0101n l\u00ec zhe\u3002\n r\u00e9ng sh\u00ec b\u00fa sh\u00ec y\u00ec\uff01\u2014\u2014 p\u00e1i hu\u00e1i le y\u00ed hu\u00ec z\u01d0\uff0c chu\u0101ng w\u00e0i l\u00e9i sh\u0113ng zu\u00f2 le\uff0c d\u00e0 y\u01d4 ji\u0113 zhe ji\u00f9 l\u00e1i\uff0c y\u00f9 xi\u00e0 y\u00f9 d\u00e0\u3002 n\u00e0 du\u01d2 h\u00f3ng li\u00e1n\uff0c b\u00e8i n\u00e0 f\u00e1n m\u00ec de y\u01d4 di\u01cen\uff0c d\u01ce d\u00e9 zu\u01d2 y\u00f2u j\u012b xi\u00e9\u3002 z\u00e0i w\u00fa zh\u0113 b\u00ec de ti\u0101n k\u014dng zh\u012b xi\u00e0\uff0c w\u01d2 b\u00f9 g\u01cen xi\u00e0 ji\u0113 q\u00f9\uff0c y\u011b w\u00fa f\u01ce k\u011b xi\u01ceng\u3002\n du\u00ec w\u016b l\u01d0 m\u01d4 q\u012bn hu\u00e0n zhe\uff0c w\u01d2 li\u00e1n m\u00e1ng z\u01d2u gu\u00f2 q\u00f9\uff0c zu\u00f2 z\u00e0i m\u01d4 q\u012bn p\u00e1ng bi\u0101n\u2014\u2014 y\u00ec hu\u00ed t\u00f3u h\u016b r\u00e1n k\u00e0n ji\u00e0n h\u00f3ng li\u00e1n p\u00e1ng bi\u0101n de y\u00ed g\u00e8 d\u00e0 h\u00e9 y\u00e8\uff0c m\u00e0n m\u00e0n d\u00ec q\u012bng c\u00e8 le l\u00e1i\uff0c zh\u00e8ng f\u00f9 g\u00e0i z\u00e0i h\u00f3ng li\u00e1n sh\u00e0ng mi\u00e0n\u2026\u2026 w\u01d2 b\u00f9 n\u00edng de x\u012bn x\u00f9 s\u00e0n j\u00ecn le\uff01\n y\u01d4 sh\u00ec b\u00ecng b\u00f9 ji\u01cen tu\u00ec\uff0c h\u00f3ng li\u00e1n qu\u00e8 b\u00f9 y\u00e1o d\u00f2ng le\u3002 y\u01d4 di\u01cen b\u00fa zh\u00f9 d\u00ec d\u01ce zhe\uff0c zh\u01d0 n\u00e9ng z\u00e0i n\u00e0 y\u01d2ng g\u01cen c\u00ed li\u00e1n de h\u00e9 y\u00e8 sh\u00e0ng mi\u00e0n\uff0c j\u00f9 le xi\u0113 li\u00fa zhu\u01cen w\u00fa l\u00ec de shu\u01d0 zh\u016b\u3002\n w\u01d2 x\u012bn zh\u014dng sh\u0113n sh\u0113n d\u00ec sh\u00f2u le g\u01cen d\u00f2ng\u2014\u2014\n m\u01d4 q\u012bn a\uff01 n\u01d0 sh\u00ec h\u00e9 y\u00e8\uff0c w\u01d2 sh\u00ec h\u00f3ng li\u00e1n\u3002 x\u012bn zh\u014dng de y\u01d4 di\u01cen l\u00e1i le\uff0c ch\u00fa le n\u01d0\uff0c shu\u00ed sh\u00ec w\u01d2 z\u00e0i w\u00fa zh\u0113 l\u00e1n ti\u0101n k\u014dng xi\u00e0 de y\u012bn b\u00ec\uff1f"
          ],
          annotations: [
            { id: 1, term: "匿笑", pinyin: "nìxiào", definition: "偷偷地笑。", definitionEn: "To laugh secretly." },
            { id: 2, term: "菡萏", pinyin: "hàndàn", definition: "荷花的别称，这里指红莲含苞未放。", definitionEn: "Another name for lotus; here referring to an unopened red lotus bud." },
            { id: 3, term: "攲斜", pinyin: "qīxié", definition: "倾斜，歪斜。", definitionEn: "Tilted, leaning." }
          ],
          readingTips: [{
            cn: "散文诗有诗的情绪与想象，像诗一样精粹、凝练，但不像诗歌那样分行与押韵，而是以散文形式呈现。《金色花》写想象之事，以儿童的视角表达对母亲的依恋；而《荷叶·母亲》则写现实与联想，以荷叶比喻母亲，赞颂伟大的母爱。",
            en: "Prose poems have the emotion and imagination of poetry and are as refined and concentrated, but they don't use line breaks or rhyme like poetry — they are presented in prose form. The Golden Flower uses imagination from a child's perspective to express attachment to a mother; Lotus Leaf and Mother uses reality and association, comparing a mother to a lotus leaf to praise great maternal love."
          }],
          teachingPoints: [
            { cn: "理解散文诗的文体特点：兼具诗的情感与散文的形式。", en: "Understand the genre characteristics of prose poetry: combining poetic emotion with prose form." }
          ],
          parentTips: [
            { cn: "可以和孩子一起朗读这两首散文诗，讨论母爱的不同表达方式。", en: "Read these two prose poems aloud together and discuss different ways of expressing maternal love." }
          ]
        },
        {
          id: 8,
          title: "《世说新语》二则",
          titleEn: "Two Tales from A New Account of the Tales of the World",
          difficulty: 3,
          author: "刘义庆",
          authorEn: "Liu Yiqing",
          source: "选自《世说新语笺疏》（中华书局1983年版）。题目是编者加的。",
          sourceEn: "Selected from Annotated Edition of A New Account of the Tales of the World (Zhonghua Book Company, 1983). Titles added by editors.",
          vocabWords: [
            {word:'欣然',pinyin:'xīn rán',en:'joyfully',sentence:'公欣然曰：白雪纷纷何所似？',sentenceEn:'The lord joyfully said: What does the falling snow resemble?'},
            {word:'纷纷',pinyin:'fēn fēn',en:'falling in profusion',sentence:'白雪纷纷何所似？',sentenceEn:'What does the falling snow resemble?'},
            {word:'期行',pinyin:'qī xíng',en:'make an appointment to travel together',sentence:'陈太丘与友期行。',sentenceEn:'Chen Taiqiu made an appointment to travel with a friend.'},
            {word:'舍去',pinyin:'shě qù',en:'leave and depart',sentence:'过中不至，太丘舍去。',sentenceEn:'Past noon he had not arrived, so Taiqiu left.'},
            {word:'惭愧',pinyin:'cán kuì',en:'ashamed',sentence:'友人惭，下车引之。',sentenceEn:'The friend was ashamed and got off his carriage to greet him.'}
          ],
          footnotes: [
            {term:"\u6b23\u7136", termEn:"joyfully", definition:"\u3010x\u012bn r\u00e1n\u3011joyfully\u3002", definitionEn:"joyfully"},
            {term:"\u7eb7\u7eb7", termEn:"falling in profusion", definition:"\u3010f\u0113n f\u0113n\u3011falling in profusion\u3002", definitionEn:"falling in profusion"},
            {term:"\u671f\u884c", termEn:"make an appointment to travel together", definition:"\u3010q\u012b x\u00edng\u3011make an appointment to travel together\u3002", definitionEn:"make an appointment to travel together"},
            {term:"\u820d\u53bb", termEn:"leave and depart", definition:"\u3010sh\u011b q\u00f9\u3011leave and depart\u3002", definitionEn:"leave and depart"},
            {term:"\u60ed\u6127", termEn:"ashamed", definition:"\u3010c\u00e1n ku\u00ec\u3011ashamed\u3002", definitionEn:"ashamed"}
          ],
          readingTips: [
            {cn:"\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f", en:"Pay attention to the author's narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?"},
            {cn:"\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f", en:"After reading, think: what theme does the author convey? How does the title relate to the content?"}
          ],
          grammarPoints: [
            {point:'文言虚词',pointEn:'wén yán xū cí',example:'classical Chinese function words',exampleEn:'太丘舍去，去后乃至。',explanation:'Taiqiu left, and the friend arrived after he had gone.',explanationEn:'理解乃、之、而等虚词在文言文中的用法'}
          ],
          authorBio: {
            cn: "《世说新语》，南朝宋临川王刘义庆（403—444）组织编写的一部志人小说集，主要记载汉末至东晋士大夫的言谈、逸事。",
            en: "A New Account of the Tales of the World was compiled under the direction of Liu Yiqing (403–444), Prince of Linchuan during the Liu Song dynasty. It mainly records the conversations and anecdotes of scholars from the late Han to the Eastern Jin dynasty."
          },
          isSelfRead: false,
          preview: [
            { cn: "借助注释，把握课文大意。感受古代儿童的聪慧机敏和良好的家庭教养。", en: "Use the notes to grasp the general meaning. Feel the wisdom and good upbringing of ancient children." }
          ],
          text: [
        "\u548f\u96ea\n\u8c22\u592a\u5085\u5bd2\u96ea\u65e5\u5185\u96c6\uff0c\u4e0e\u513f\u5973\u8bb2\u8bba\u6587\u4e49\u3002\u4fc4\u800c\u96ea\u9aa4\uff0c\u516c\u6b23\u7136\u66f0\uff1a\u201c\u767d\u96ea\u7eb7\u7eb7\u4f55\u6240\u4f3c\uff1f\u201d\u5144\u5b50\u80e1\u513f\u66f0\uff1a\u201c\u6492\u76d0\u7a7a\u4e2d\u5dee\u53ef\u62df\u3002\u201d\u5144\u5973\u66f0\uff1a\u201c\u672a\u82e5\u67f3\u7d6e\u56e0\u98ce\u8d77\u3002\u201d\u516c\u5927\u7b11\u4e50\u3002\u5373\u516c\u5927\u5144\u65e0\u5955\u5973\uff0c\u5de6\u5c06\u519b\u738b\u51dd\u4e4b\u59bb\u4e5f\u3002",
        "\u9648\u592a\u4e18\u4e0e\u53cb\u671f\u884c\n\u9648\u592a\u4e18\u4e0e\u53cb\u671f\u884c\uff0c\u671f\u65e5\u4e2d\u3002\u8fc7\u4e2d\u4e0d\u81f3\uff0c\u592a\u4e18\u820d\u53bb\uff0c\u53bb\u540e\u4e43\u81f3\u3002\u5143\u65b9\u65f6\u5e74\u4e03\u5c81\uff0c\u95e8\u5916\u620f\u3002\u5ba2\u95ee\u5143\u65b9\uff1a\u201c\u5c0a\u541b\u5728\u4e0d\uff1f\u201d\u7b54\u66f0\uff1a\u201c\u5f85\u541b\u4e45\u4e0d\u81f3\uff0c\u5df2\u53bb\u3002\u201d\u53cb\u4eba\u4fbf\u6012\u66f0\uff1a\u201c\u975e\u4eba\u54c9\uff01\u4e0e\u4eba\u671f\u884c\uff0c\u76f8\u59d4\u800c\u53bb\u3002\u201d\u5143\u65b9\u66f0\uff1a\u201c\u541b\u4e0e\u5bb6\u541b\u671f\u65e5\u4e2d\u3002\u65e5\u4e2d\u4e0d\u81f3\uff0c\u5219\u662f\u65e0\u4fe1\uff1b\u5bf9\u5b50\u9a82\u7236\uff0c\u5219\u662f\u65e0\u793c\u3002\u201d\u53cb\u4eba\u60ed\uff0c\u4e0b\u8f66\u5f15\u4e4b\u3002\u5143\u65b9\u5165\u95e8\u4e0d\u987e\u3002"
      ],
          textEn: [
        "Chanting About Snow\nOn a cold snowy day, Grand Tutor Xie gathered his family and discussed literature with the young ones. Suddenly the snow fell more heavily. He said happily: ‘What does this swirling white snow resemble?’ His nephew Hu’er said: ‘Scattering salt in the air is roughly comparable.’ His niece said: ‘It is more like willow catkins rising on the wind.’ The Grand Tutor laughed with delight. She was the daughter of his eldest brother Wu Yi, and the wife of General Wang Ningzhi.",
        "Chen Taiqiu and His Friend’s Appointment\nChen Taiqiu had arranged to travel with a friend, agreeing to meet at noon. When noon passed and the friend hadn’t come, Taiqiu left. After he left, the friend arrived. Taiqiu’s son Yuanfang, then seven years old, was playing outside the gate. The guest asked: ‘Is your father home?’ He replied: ‘He waited for you a long time but you didn’t come, so he left.’ The friend angrily said: ‘What an inhuman fellow! He made an appointment to travel with someone, then abandoned him and left!’ Yuanfang said: ‘You arranged to meet my father at noon. Not coming at noon shows a lack of trustworthiness; insulting a father in front of his son shows a lack of propriety.’ The friend was ashamed and stepped down from his carriage to greet him. Yuanfang entered the gate without looking back."
      ],
          textPinyin: [
            "y\u01d2ng xu\u011b\n xi\u00e8 t\u00e0i f\u00f9 h\u00e1n xu\u011b r\u00ec n\u00e8i j\u00ed\uff0c y\u01d4 \u00e9r n\u01da ji\u01ceng l\u00f9n w\u00e9n y\u00ec\u3002 \u00e9 \u00e9r xu\u011b zh\u00f2u\uff0c g\u014dng x\u012bn r\u00e1n yu\u0113\uff1a \u201c b\u00e1i xu\u011b f\u0113n f\u0113n h\u00e9 su\u01d2 s\u00ec\uff1f \u201d xi\u014dng z\u01d0 h\u00fa \u00e9r yu\u0113\uff1a \u201c s\u0101 y\u00e1n k\u014dng zh\u014dng ch\u00e0 k\u011b n\u01d0\u3002 \u201d xi\u014dng n\u01da yu\u0113\uff1a \u201c w\u00e8i ru\u00f2 li\u01d4 x\u00f9 y\u012bn f\u0113ng q\u01d0\u3002 \u201d g\u014dng d\u00e0 xi\u00e0o l\u00e8\u3002 j\u00ed g\u014dng d\u00e0 xi\u014dng w\u00fa y\u00ec n\u01da\uff0c zu\u01d2 ji\u0101ng j\u016bn w\u00e1ng n\u00edng zh\u012b q\u012b y\u011b\u3002",
            "ch\u00e9n t\u00e0i qi\u016b y\u01d4 y\u01d2u q\u012b x\u00edng\n ch\u00e9n t\u00e0i qi\u016b y\u01d4 y\u01d2u q\u012b x\u00edng\uff0c q\u012b r\u00ec zh\u014dng\u3002 gu\u00f2 zh\u014dng b\u00fa zh\u00ec\uff0c t\u00e0i qi\u016b sh\u00e8 q\u00f9\uff0c q\u00f9 h\u00f2u n\u01cei zh\u00ec\u3002 yu\u00e1n f\u0101ng sh\u00ed ni\u00e1n q\u012b su\u00ec\uff0c m\u00e9n w\u00e0i x\u00ec\u3002 k\u00e8 w\u00e8n yu\u00e1n f\u0101ng\uff1a \u201c z\u016bn j\u016bn z\u00e0i b\u00f9\uff1f \u201d d\u00e1 yu\u0113\uff1a \u201c d\u00e0i j\u016bn ji\u01d4 b\u00fa zh\u00ec\uff0c y\u01d0 q\u00f9\u3002 \u201d y\u01d2u r\u00e9n bi\u00e0n n\u00f9 yu\u0113\uff1a \u201c f\u0113i r\u00e9n z\u0101i\uff01 y\u01d4 r\u00e9n q\u012b x\u00edng\uff0c xi\u0101ng w\u011bi \u00e9r q\u00f9\u3002 \u201d yu\u00e1n f\u0101ng yu\u0113\uff1a \u201c j\u016bn y\u01d4 ji\u0101 j\u016bn q\u012b r\u00ec zh\u014dng\u3002 r\u00ec zh\u014dng b\u00fa zh\u00ec\uff0c z\u00e9 sh\u00ec w\u00fa x\u00ecn\uff1b du\u00ec zi m\u00e0 f\u00f9\uff0c z\u00e9 sh\u00ec w\u00fa l\u01d0\u3002 \u201d y\u01d2u r\u00e9n c\u00e1n\uff0c xi\u00e0 ch\u0113 y\u01d0n zh\u012b\u3002 yu\u00e1n f\u0101ng r\u00f9 m\u00e9n b\u00fa g\u00f9\u3002"
          ],
          annotations: [
            { id: 1, term: "内集", pinyin: "nèijí", definition: "把家里人聚集在一起。", definitionEn: "To gather the family together." },
            { id: 2, term: "俄而", pinyin: "éér", definition: "不久，一会儿。", definitionEn: "Shortly, in a moment." },
            { id: 3, term: "差可拟", pinyin: "chākěnǐ", definition: "大体可以相比。差，大体。拟，相比。", definitionEn: "Roughly comparable. 差 means roughly; 拟 means to compare." },
            { id: 4, term: "期行", pinyin: "qīxíng", definition: "相约同行。期，约定。", definitionEn: "To arrange to travel together. 期 means to arrange." },
            { id: 5, term: "舍去", pinyin: "shěqù", definition: "丢下（他）而离开。舍，舍弃。去，离开。", definitionEn: "To leave (him) behind and depart." },
            { id: 6, term: "尊君", pinyin: "zūnjūn", definition: "对别人父亲的尊称。", definitionEn: "An honorific term for someone else's father." },
            { id: 7, term: "家君", pinyin: "jiājūn", definition: "对人谦称自己的父亲。", definitionEn: "A humble term for one's own father when speaking to others." }
          ],
          thinkExplore: [
            { cn: "朗读课文，用自己的话讲述这两个故事。", en: "Read aloud and retell these two stories in your own words." },
            { cn: "《陈太丘与友期行》中哪些地方能够体现出陈元方的\u201C方正\u201D？", en: "Where in 'Chen Taiqiu and His Friend's Appointment' can you see Yuanfang's 'uprightness'?" }
          ],
          accumExtend: [
            { cn: "古人称谓有谦称和尊称的区别。了解一些常见的敬辞与谦辞。", en: "Ancient forms of address distinguish between humble and honorific terms. Learn some common polite and humble expressions." }
          ],
          teachingPoints: [
            { cn: "初步学习文言文的阅读方法：借助注释理解大意。", en: "Begin learning methods for reading classical Chinese: use annotations to understand the general meaning." },
            { cn: "了解古代谦称与尊称的文化知识。", en: "Learn about the cultural knowledge of humble and honorific forms of address in ancient times." }
          ],
          parentTips: [
            { cn: "可与孩子讨论\u201C诚信\u201D与\u201C礼貌\u201D的重要性，联系生活实际。", en: "Discuss the importance of honesty and politeness with your child, connecting to real-life situations." }
          ]
        }
      ],
      writing: {
        title: "学会记事",
        titleEn: "Learning to Record Events",
        vocabWords: [
          {word:'记事',pinyin:'jì shì',en:'record events',sentence:'写作中学会记事很重要。',sentenceEn:'Learning to record events is important in writing.'},
          {word:'真实',pinyin:'zhēn shí',en:'authentic; real',sentence:'写事要真实，不能虚构。',sentenceEn:'Writing about events should be authentic, not fabricated.'},
          {word:'线索',pinyin:'xiàn suǒ',en:'thread; clue',sentence:'围绕一条线索把事情写清楚。',sentenceEn:'Write things clearly around a central thread.'},
          {word:'细节',pinyin:'xì jié',en:'detail',sentence:'注意描写事件中的细节。',sentenceEn:'Pay attention to describing details within events.'},
          {word:'完整',pinyin:'wán zhěng',en:'complete',sentence:'把事情的起因、经过、结果写完整。',sentenceEn:'Write the cause, process, and result of events completely.'}
        ],
        content: {
          cn: "记事能力是最基本的写作能力。写清楚是记事的基本要求，一般要写出事情的起因、经过和结果。还要学会写得有感情，关键是要写自己亲身经历的、有真切感受的事，说发自内心的话。",
          en: "The ability to record events is the most basic writing skill. Writing clearly is the fundamental requirement: generally include the cause, process, and result. Also learn to write with emotion — the key is to write about personal experiences with genuine feelings and speak from the heart."
        }
      },
      readWrite: {
        title: "词义和语境",
        titleEn: "Word Meaning and Context",
        vocabWords: [
          {word:'词义',pinyin:'cí yì',en:'word meaning',sentence:'词的意义有多种层次。',sentenceEn:'Word meanings have multiple levels.'},
          {word:'语境',pinyin:'yǔ jìng',en:'context',sentence:'联系上下文理解词义。',sentenceEn:'Understand word meaning by connecting to context.'},
          {word:'引申',pinyin:'yǐn shēn',en:'extended meaning',sentence:'词语可以从本义引申出新义。',sentenceEn:'Words can develop new meanings extended from the original.'},
          {word:'本义',pinyin:'běn yì',en:'original meaning',sentence:'要区分词语的本义和引申义。',sentenceEn:'Distinguish the original meaning from extended meanings.'},
          {word:'比喻义',pinyin:'bǐ yù yì',en:'figurative meaning',sentence:'有些词在特定语境中有比喻义。',sentenceEn:'Some words have figurative meanings in specific contexts.'}
        ],
        content: {
          cn: "很多词有两个以上的意义，称为多义词。在实际语言运用中，词总是出现在一定的上下文中，称其为语境。语境对于词的意义起限制作用，阅读时要根据上下文确定多义词在文中的具体意义。",
          en: "Many words have two or more meanings, called polysemous words. In actual language use, words always appear in a certain context. Context limits the meaning of words, so when reading, determine the specific meaning of polysemous words based on context."
        }
      },
      comprehensiveLearning: {
        title: "有朋自远方来",
        titleEn: "A Friend Comes from Afar",
        vocabWords: [
          {word:'交友',pinyin:'jiāo yǒu',en:'make friends',sentence:'有朋自远方来，不亦乐乎？',sentenceEn:'Is it not a joy to have friends come from afar?'},
          {word:'真诚',pinyin:'zhēn chéng',en:'sincere',sentence:'交友需要真诚。',sentenceEn:'Making friends requires sincerity.'},
          {word:'信任',pinyin:'xìn rèn',en:'trust',sentence:'朋友之间最重要的是信任。',sentenceEn:'The most important thing between friends is trust.'},
          {word:'尊重',pinyin:'zūn zhòng',en:'respect',sentence:'与朋友交往要互相尊重。',sentenceEn:'Interacting with friends requires mutual respect.'},
          {word:'知己',pinyin:'zhī jǐ',en:'close friend; soulmate',sentence:'海内存知己，天涯若比邻。',sentenceEn:'If you have a soulmate within the four seas, even the distant horizon feels like a neighbor.'}
        ],
        content: {
          cn: "围绕\u201C交友之道\u201D，搜集有关交友的名言、警句、成语典故和故事，开展学习活动。通过自我介绍展示自我，与新同学交流认识。",
          en: "Around the theme of 'the way of friendship,' collect famous sayings, aphorisms, idiom stories and tales about friendship, and conduct learning activities. Introduce yourself and get to know new classmates."
        }
      },
      classicBookGuide: null,
      extracurricularPoetry: null
    },
    /* ─── Unit 3 学习生活 ─── */
    {
      id: 3,
      title: "第三单元",
      titleEn: "Unit 3",
      theme: "学习生活",
      themeEn: "Learning Life",
      unitIntro: {
        cn: "本单元课文主要是写学习生活的，从中我们可以了解不同时代少年儿童的学习状况和成长经历，感受到永恒的童真、童趣、友谊和爱。这一切都值得即将告别童年的同学们好好体会、领悟。本单元重点学习默读。不出声，不动唇，不指读，不回看，一气读完全文，以保证阅读感知的完整性和一定的阅读速度。还要学会在阅读中把握基本内容，了解文章大意。",
        en: "The texts in this unit mainly depict learning life, through which we can understand the learning situations and growth experiences of children in different eras, and feel the eternal innocence, childhood joys, friendship, and love. All of this is worth experiencing and reflecting on for students about to bid farewell to childhood. This unit focuses on silent reading: no voicing, no lip movement, no finger-pointing, no re-reading — read through the entire text at once to maintain the completeness of reading comprehension and a certain reading speed."
      },
      type: "kewen",
      lessons: [
        {
          id: 9,
          title: "从百草园到三味书屋",
          titleEn: "From Hundred-Herb Garden to Three-Flavour Study",
          difficulty: 5,
          author: "鲁迅",
          authorEn: "Lu Xun",
          source: "选自《朝花夕拾》（《鲁迅全集》第二卷，人民文学出版社2005年版）。",
          sourceEn: "Selected from Dawn Blossoms Plucked at Dusk (Complete Works of Lu Xun, Vol. 2, People's Literature Publishing House, 2005).",
          vocabWords: [
            {word:'确凿',pinyin:'què záo',en:'definite; certain',sentence:'确凿只有一些野草。',sentenceEn:'There were definitely only some wild grasses.'},
            {word:'攒',pinyin:'cuán',en:'gather together',sentence:'不必说碧绿的菜畦，光滑的石井栏。',sentenceEn:'No need to mention the emerald vegetable plots, the smooth stone well railing.'},
            {word:'渊博',pinyin:'yuān bó',en:'profound and extensive (knowledge)',sentence:'他是本城中极方正、质朴、博学的人。',sentenceEn:'He was the most upright, plain, and learned man in the city.'},
            {word:'人迹罕至',pinyin:'rén jì hǎn zhì',en:'seldom visited by people',sentence:'拍雪人和塑雪罗汉需要人迹罕至的地方。',sentenceEn:'Making snow figures and snow Buddhas requires a place seldom visited by people.'},
            {word:'拗',pinyin:'ǎo',en:'bend',sentence:'用力地拗开它的角。',sentenceEn:'Forcefully bend open its horns.'}
          ],
          footnotes: [
            {term:"\u786e\u51ff", termEn:"definite; certain", definition:"\u3010qu\u00e8 z\u00e1o\u3011definite; certain\u3002", definitionEn:"definite; certain"},
            {term:"\u6512", termEn:"gather together", definition:"\u3010cu\u00e1n\u3011gather together\u3002", definitionEn:"gather together"},
            {term:"\u6e0a\u535a", termEn:"profound and extensive (knowledge)", definition:"\u3010yu\u0101n b\u00f3\u3011profound and extensive (knowledge)\u3002", definitionEn:"profound and extensive (knowledge)"},
            {term:"\u4eba\u8ff9\u7f55\u81f3", termEn:"seldom visited by people", definition:"\u3010r\u00e9n j\u00ec h\u01cen zh\u00ec\u3011seldom visited by people\u3002", definitionEn:"seldom visited by people"},
            {term:"\u62d7", termEn:"bend", definition:"\u3010\u01ceo\u3011bend\u3002", definitionEn:"bend"}
          ],
          readingTips: [
            {cn:"\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f", en:"Pay attention to the author's narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?"},
            {cn:"\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f", en:"After reading, think: what theme does the author convey? How does the title relate to the content?"}
          ],
          grammarPoints: [
            {point:'对比',pointEn:'duì bǐ',example:'contrast',exampleEn:'百草园的自由快乐与三味书屋的枯燥对比。',explanation:'Contrast between the freedom and joy of Hundred-Herb Garden and the dullness of Three-Flavour Study.',explanationEn:'通过两个空间的对比表达作者对童年自由的怀念'},
            {point:'详略得当',pointEn:'xiáng lüè dé dàng',example:'proper balance of detail',exampleEn:'不必说碧绿的菜畦……单是周围的短短的泥墙根一带，就有无限趣味。',explanation:'No need to mention the emerald vegetable plots... Just around the short mud wall base, there is infinite fun.',explanationEn:'用不必说……单是……的句式突出重点'}
          ],
          authorBio: {
            cn: "鲁迅（1881—1936），原名周树人，字豫才，浙江绍兴人，文学家、思想家、革命家。代表作有小说集《呐喊》《彷徨》《故事新编》，散文集《朝花夕拾》，散文诗集《野草》和杂文集《坟》《热风》《且介亭杂文》等。",
            en: "Lu Xun (1881–1936), original name Zhou Shuren, courtesy name Yucai, was from Shaoxing, Zhejiang. He was a writer, thinker, and revolutionary. His major works include the story collections Call to Arms, Wandering, and Old Tales Retold, the essay collection Dawn Blossoms Plucked at Dusk, the prose poem collection Wild Grass, and various essay collections."
          },
          isSelfRead: false,
          preview: [
            { cn: "被誉为\u201C民族魂\u201D的鲁迅有过怎样的童年时光？阅读课文，看看小时候的他玩些什么，学些什么，想些什么。和你有相似的地方吗？", en: "What was the childhood of Lu Xun, hailed as the 'Soul of the Nation,' like? Read the text to see what he played, studied, and thought about as a child. Are there similarities with your own experiences?" },
            { cn: "默读可以提高阅读速度，有利于较快把握文章大意。试着采用默读的方式，不分心，不停顿，一气读完全文，了解课文大意。", en: "Silent reading can increase reading speed and help you grasp the main idea more quickly. Try reading silently — without distraction, without pausing — read through the entire text at once." }
          ],
          text: [
            "我家的后面有一个很大的园，相传叫作百草园。现在是早已并屋子一起卖给朱文公的子孙了，连那最末次的相见也已经隔了七八年，其中似乎确凿只有一些野草；但那时却是我的乐园。",
            "不必说碧绿的菜畦，光滑的石井栏，高大的皂荚树，紫红的桑椹；也不必说鸣蝉在树叶里长吟，肥胖的黄蜂伏在菜花上，轻捷的叫天子（云雀）忽然从草间直窜向云霄里去了。单是周围的短短的泥墙根一带，就有无限趣味。油蛉在这里低唱，蟋蟀们在这里弹琴。翻开断砖来，有时会遇见蜈蚣；还有斑蝥，倘若用手指按住它的脊梁，便会拍的一声，从后窍喷出一阵烟雾。何首乌藤和木莲藤缠络着，木莲有莲房一般的果实，何首乌有拥肿的根。有人说，何首乌根是有像人形的，吃了便可以成仙，我于是常常拔它起来，牵连不断地拔起来，也曾因此弄坏了泥墙，却从来没有见过有一块根像人样。如果不怕刺，还可以摘到覆盆子，像小珊瑚珠攒成的小球，又酸又甜，色味都比桑椹要好得远。",
            "长的草里是不去的，因为相传这园里有一条很大的赤练蛇。",
            "长妈妈曾经讲给我一个故事听：先前，有一个读书人住在古庙里用功，晚间，在院子里纳凉的时候，突然听到有人在叫他。答应着，四面看时，却见一个美女的脸露在墙头上，向他一笑，隐去了。他很高兴；但竟给那走来夜谈的老和尚识破了机关。说他脸上有些妖气，一定遇见\u201C美女蛇\u201D了；这是人首蛇身的怪物，能唤人名，倘一答应，夜间便要来吃这人的肉的。他自然吓得要死，而那老和尚却道无妨，给他一个小盒子，说只要放在枕边，便可高枕而卧。他虽然照样办，却总是睡不着，——当然睡不着的。到半夜，果然来了，沙沙沙！门外像是风雨声。他正抖作一团时，却听得豁的一声，一道金光从枕边飞出，外面便什么声音也没有了，那金光也就飞回来，敛在盒子里。后来呢？后来，老和尚说，这是飞蜈蚣，它能吸蛇的脑髓，美女蛇就被它治死了。",
            "结末的教训是：所以倘有陌生的声音叫你的名字，你万不可答应他。",
            "这故事很使我觉得做人之险，夏夜乘凉，往往有些担心，不敢去看墙上，而且极想得到一盒老和尚那样的飞蜈蚣。走到百草园的草丛旁边时，也常常这样想。但直到现在，总还是没有得到，但也没有遇见过赤练蛇和美女蛇。叫我名字的陌生声音自然是常有的，然而都不是美女蛇。",
            "冬天的百草园比较的无味；雪一下，可就两样了。拍雪人（将自己的全形印在雪上）和塑雪罗汉需要人们鉴赏，这是荒园，人迹罕至，所以不相宜，只好来捕鸟。薄薄的雪，是不行的；总须积雪盖了地面一两天，鸟雀们久已无处觅食的时候才好。扫开一块雪，露出地面，用一枝短棒支起一面大的竹筛来，下面撒些秕谷，棒上系一条长绳，人远远地牵着，看鸟雀下来啄食，走到竹筛底下的时候，将绳子一拉，便罩住了。但所得的是麻雀居多，也有白颊的\u201C张飞鸟\u201D，性子很躁，养不过夜的。",
            "我不知道为什么家里的人要将我送进书塾里去了，而且还是全城中称为最严厉的书塾。也许是因为拔何首乌毁了泥墙罢，也许是因为将砖头抛到间壁的梁家去了罢，也许是因为站在石井栏上跳了下来罢，……都无从知道。总而言之：我将不能常到百草园了。Ade，我的蟋蟀们！Ade，我的覆盆子们和木莲们！……",
            "出门向东，不上半里，走过一道石桥，便是我的先生的家了。从一扇黑油的竹门进去，第三间是书房。中间挂着一块扁道：三味书屋；扁下面是一幅画，画着一只很肥大的梅花鹿伏在古树下。没有孔子牌位，我们便对着那扁和鹿行礼。第一次算是拜孔子，第二次算是拜先生。",
            "第二次行礼时，先生便和蔼地在一旁答礼。他是一个高而瘦的老人，须发都花白了，还戴着大眼镜。我对他很恭敬，因为我早听到，他是本城中极方正，质朴，博学的人。",
            "我就只读书，正午习字，晚上对课。先生最初这几天对我很严厉，后来却好起来了，不过给我读的书渐渐加多，对课也渐渐地加上字去，从三言到五言，终于到七言。",
            "三味书屋后面也有一个园，虽然小，但在那里也可以爬上花坛去折蜡梅花，在地上或桂花树上寻蝉蜕。最好的工作是捉了苍蝇喂蚂蚁，静悄悄地没有声音。然而同窗们到园里的太多，太久，可就不行了，先生在书房里便大叫起来：\u201C人都到那里去了？！\u201D",
            "于是大家放开喉咙读一阵书，真是人声鼎沸。有念\u201C仁远乎哉我欲仁斯仁至矣\u201D的，有念\u201C笑人齿缺曰狗窦大开\u201D的，有念\u201C上九潜龙勿用\u201D的，有念\u201C厥土下上上错厥贡苞茅橘柚\u201D的……。先生自己也念书。后来，我们的声音便低下去，静下去了，只有他还大声朗读着：\u201C铁如意，指挥倜傥，一座皆惊呢；金叵罗，颠倒淋漓噫，千杯未醉嗬……。\u201D",
            "我疑心这是极好的文章，因为读到这里，他总是微笑起来，而且将头仰起，摇着，向后面拗过去，拗过去。",
            "先生读书入神的时候，于我们是很相宜的。有几个便用纸糊的盔甲套在指甲上做戏。我是画画儿，用一种叫作\u201C荆川纸\u201D的，蒙在小说的绣像上一个个描下来，像习字时候的影写一样。读的书多起来，画的画儿也多起来；书没有读成，画儿的成绩却不少了，最成片段的是《荡寇志》和《西游记》的绣像，都有一大本。后来，因为要钱用，卖给一个有钱的同窗了。"
          ],
          textEn: [
            "Behind my house there was a very large garden, traditionally called the Hundred-Herb Garden. It had long since been sold together with the house to a descendant of Zhu Wengong. Even the last time I saw it was seven or eight years ago. There seemed to be nothing but some wild grass there — but at that time, it was my paradise.",
            "Needless to mention the emerald vegetable beds, the smooth stone well-curb, the tall honey-locust tree, the purple mulberries; needless to mention the cicadas singing long notes among the leaves, the fat yellow bees crouching on the rapeseed flowers, or the nimble skylarks suddenly darting from the grass straight into the clouds. Just the short mud wall around the garden alone held endless delights. Oil-bugs sang softly here, crickets played their instruments here. Turn over a broken brick, and sometimes you would find centipedes; there were also blister beetles — if you pressed a finger on their backs, they would pop and spray a puff of smoke from their rear opening. He-shou-wu vines and magnolia vines tangled together; the magnolia bore fruit shaped like lotus pods, while the he-shou-wu had swollen roots. Some said the he-shou-wu root sometimes took human form, and eating it could make you immortal, so I often pulled them up, pulling and pulling in an endless chain. I even damaged the mud wall because of this, yet I never found a single root that looked like a person. If you weren't afraid of thorns, you could also pick raspberries — little balls clustered like tiny coral beads, tart and sweet, far better than mulberries in both color and taste.",
            "One would not go into the tall grass, for it was said that a large scarlet snake lived in the garden.",
            "Mama Chang had once told me a story: long ago, a scholar was studying in an ancient temple. One evening while enjoying the cool air in the courtyard, he suddenly heard someone calling his name. He answered, looked around, and saw a beautiful woman's face appearing over the wall, smiling at him before vanishing. He was delighted, but the old monk who came to chat that night saw through the trick. He said there was something demonic about the scholar's face — he must have encountered a 'beauty-snake,' a monster with a human head and snake body that could call people by name; if you answered, it would come to devour your flesh at night. Naturally the scholar was frightened half to death, but the old monk said there was no need to worry and gave him a small box, saying he only needed to place it by his pillow and he could sleep in peace. Although the scholar did as told, he couldn't fall asleep — of course he couldn't. At midnight, it came indeed — swish, swish, swish! Outside the door came sounds like wind and rain. Just as he was trembling all over, he heard a whoosh, and a golden light flew out from beside the pillow. Then all sound outside ceased, and the golden light flew back and settled into the box. And then what? The old monk explained that it was a flying centipede, which could suck out a snake's brain. The beauty-snake was killed by it.",
            "The moral of the story was: if a strange voice calls your name, you must never answer.",
            "This story made me keenly aware of the dangers of being human. On summer nights while enjoying the cool air, I often worried and dared not look at the wall, and desperately wished to obtain a flying centipede box like the old monk's. Walking past the grass in the Hundred-Herb Garden, I often thought the same. But to this day I have never obtained one — though I have also never encountered a scarlet banded snake or a beauty-snake. Strange voices calling my name were common enough, but they were never beauty-snakes.",
            "Winter in the Hundred-Herb Garden was rather dull, but once it snowed, things were different. Making snow-prints — pressing one's whole body shape into the snow — and building snow Buddhas required an audience to appreciate them, but this was a deserted garden, rarely visited, so the only option was to catch birds. A thin layer of snow wouldn't do; the snow had to have covered the ground for a day or two, when the birds could no longer find food anywhere. You would sweep clear a patch of snow, exposing the bare ground, and prop up a large bamboo sieve with a short stick, scatter some chaff underneath, tie a long string to the stick, and hold the other end from far away. When the birds came down to peck at the chaff and wandered under the sieve, you would pull the string and trap them. But what you mostly caught were sparrows; sometimes you got 'Zhang Fei birds' with white cheeks, but they were too temperamental and wouldn't survive the night.",
            "I don't know why my family sent me to a private school — and the strictest one in the whole city at that. Perhaps it was because I had ruined the mud wall pulling up he-shou-wu roots, or perhaps because I threw bricks into the Liang family's compound next door, or because I jumped down from the stone well-curb... All in all: I would no longer be able to visit the Hundred-Herb Garden often. Ade, my crickets! Ade, my raspberries and lotus vines!",
            "Going east from the door, less than half a li, across a stone bridge, was my teacher's house. Through a black-lacquered bamboo door, the third room was the study. In the middle hung a plaque reading: Three-Flavour Study; below it was a painting of a very plump plum-blossom deer resting under an ancient tree.",
            "The teacher was a tall, thin old man with white hair and beard, still wearing large spectacles. I respected him greatly, for I had long heard he was the most upright, simple, and learned man in the city.",
            "I just read books, practiced calligraphy at noon, and did couplet exercises in the evening. The teacher was very strict with me at first but later became kinder, though the books he gave me to read gradually increased.",
            "Behind the Three-Flavour Study there was also a garden, small though it was. There one could climb the flower beds to pick wintersweet blossoms, or search for cicada shells on the ground or in the osmanthus tree. The best activity was catching flies to feed the ants — quiet, without a sound. But when too many classmates went to the garden and stayed too long, it wouldn't do. The teacher would shout from the study: 'Where has everyone gone?!'",
            "Then everyone would raise their voices and read aloud for a while — truly a din of voices. Some chanted 'Is benevolence far away? When I desire benevolence, benevolence is at hand'; some chanted 'Laugh at a man with missing teeth, saying the dog-hole is wide open'; some chanted 'Top nine: the hidden dragon, do not act'; some chanted 'Its soil is of the lower-upper-upper grade, its tribute includes bundled thatch, tangerines, and pomelos'... The teacher himself also read aloud. Later, our voices would die down and grow quiet, while he alone continued reading loudly: 'The iron ruyi scepter, commanding with such flair, the whole audience amazed; the golden drinking cup, pouring without restraint, a thousand cups and still not drunk...'",
            "I suspected this was an excellent piece of writing, for whenever he read to this point, he would always smile, raise his head, sway, and lean back further and further.",
            "When the teacher was absorbed in his reading, it was most convenient for us. Some would put paper armor on their fingernails and play-act. I drew pictures, using a kind of thin paper called 'Jingchuan paper' to trace over the illustrations in novels one by one, just like shadow-copying when practicing calligraphy. As the books I read increased, so did the pictures I drew. The books were never mastered, but the drawings were quite an achievement — the most complete sets were the illustrations from The Water Margin Sequel and Journey to the West, each filling a whole volume. Later, because I needed money, I sold them to a wealthy classmate."
          ],
          textPinyin: [
            "w\u01d2 ji\u0101 de h\u00f2u mi\u00e0n y\u01d2u y\u00ed g\u00e8 h\u011bn d\u00e0 de yu\u00e1n\uff0c xi\u0101ng chu\u00e1n ji\u00e0o zu\u00f2 b\u01cei c\u01ceo yu\u00e1n\u3002 xi\u00e0n z\u00e0i sh\u00ec z\u01ceo y\u01d0 b\u00ecng w\u016b zi y\u00ec q\u01d0 m\u00e0i g\u011bi zh\u016b w\u00e9n g\u014dng de z\u01d0 s\u016bn le\uff0c li\u00e1n n\u00e0 zu\u00ec m\u00f2 c\u00ec de xi\u0101ng ji\u00e0n y\u011b y\u01d0 j\u012bng g\u00e9 le q\u012b b\u0101 ni\u00e1n\uff0c q\u00ed zh\u014dng s\u00ec h\u016b qu\u00e8 z\u00e1o zh\u01d0 y\u01d2u y\u00ec xi\u0113 y\u011b c\u01ceo\uff1b d\u00e0n n\u00e0 sh\u00ed qu\u00e8 sh\u00ec w\u01d2 de l\u00e8 yu\u00e1n\u3002",
            "b\u00fa b\u00ec shu\u014d b\u00ec l\u01dc de c\u00e0i q\u00ed\uff0c gu\u0101ng hu\u00e1 de sh\u00ed j\u01d0ng l\u00e1n\uff0c g\u0101o d\u00e0 de z\u00e0o ji\u00e1 sh\u00f9\uff0c z\u01d0 h\u00f3ng de s\u0101ng sh\u00e8n\uff1b y\u011b b\u00fa b\u00ec shu\u014d m\u00edng ch\u00e1n z\u00e0i sh\u00f9 y\u00e8 l\u01d0 ch\u00e1ng y\u00edn\uff0c f\u00e9i p\u00e0ng de hu\u00e1ng f\u0113ng f\u00fa z\u00e0i c\u00e0i hu\u0101 sh\u00e0ng\uff0c q\u012bng ji\u00e9 de ji\u00e0o ti\u0101n z\u01d0\uff08y\u00fan qu\u00e8\uff09 h\u016b r\u00e1n c\u00f3ng c\u01ceo ji\u0101n zh\u00ed cu\u00e0n xi\u00e0ng y\u00fan xi\u0101o l\u01d0 q\u00f9 le\u3002 d\u0101n sh\u00ec zh\u014du w\u00e9i de du\u01cen du\u01cen de n\u00ed qi\u00e1ng g\u0113n y\u00ed d\u00e0i\uff0c ji\u00f9 y\u01d2u w\u00fa xi\u00e0n q\u00f9 w\u00e8i\u3002 y\u00f3u l\u00edng z\u00e0i zh\u00e8 l\u01d0 d\u012b ch\u00e0ng\uff0c x\u012b shu\u00e0i men z\u00e0i zh\u00e8 l\u01d0 t\u00e1n q\u00edn\u3002 f\u0101n k\u0101i du\u00e0n zhu\u0101n l\u00e1i\uff0c y\u01d2u sh\u00ed hu\u00ec y\u00f9 ji\u00e0n w\u00fa g\u014dng\uff1b h\u00e1i y\u01d2u b\u0101n m\u00e1o\uff0c t\u01ceng ru\u00f2 y\u00f2ng sh\u01d2u zh\u01d0 \u00e0n zh\u00f9 t\u0101 de j\u01d0 li\u00e1ng\uff0c bi\u00e0n hu\u00ec p\u0101i de y\u00ec sh\u0113ng\uff0c c\u00f3ng h\u00f2u qi\u00e0o p\u0113n ch\u016b y\u00ed zh\u00e8n y\u0101n w\u00f9\u3002 h\u00e9 sh\u01d2u w\u016b t\u00e9ng h\u00e9 m\u00f9 li\u00e1n t\u00e9ng ch\u00e1n lu\u00f2 zhe\uff0c m\u00f9 li\u00e1n y\u01d2u li\u00e1n f\u00e1ng y\u00ec b\u0101n de gu\u01d2 sh\u00ed\uff0c h\u00e9 sh\u01d2u w\u016b y\u01d2u y\u014dng zh\u01d2ng de g\u0113n\u3002 y\u01d2u r\u00e9n shu\u014d\uff0c h\u00e9 sh\u01d2u w\u016b g\u0113n sh\u00ec y\u01d2u xi\u00e0ng r\u00e9n x\u00edng de\uff0c ch\u012b le bi\u00e0n k\u011b y\u01d0 ch\u00e9ng xi\u0101n\uff0c w\u01d2 y\u00fa sh\u00ec ch\u00e1ng ch\u00e1ng b\u00e1 t\u0101 q\u01d0 l\u00e1i\uff0c qi\u0101n li\u00e1n b\u00fa du\u00e0n d\u00ec b\u00e1 q\u01d0 l\u00e1i\uff0c y\u011b c\u00e9ng y\u012bn c\u01d0 n\u00f2ng hu\u00e0i le n\u00ed qi\u00e1ng\uff0c qu\u00e8 c\u00f3ng l\u00e1i m\u00e9i y\u01d2u ji\u00e0n gu\u00f2 y\u01d2u y\u00ed ku\u00e0i g\u0113n xi\u00e0ng r\u00e9n y\u00e0ng\u3002 r\u00fa gu\u01d2 b\u00fa p\u00e0 c\u00ec\uff0c h\u00e1i k\u011b y\u01d0 zh\u0101i d\u00e0o f\u00f9 p\u00e9n z\u01d0\uff0c xi\u00e0ng xi\u01ceo sh\u0101n h\u00fa zh\u016b z\u01cen ch\u00e9ng de xi\u01ceo qi\u00fa\uff0c y\u00f2u su\u0101n y\u00f2u ti\u00e1n\uff0c s\u00e8 w\u00e8i d\u014du b\u01d0 s\u0101ng sh\u00e8n y\u00e0o h\u01ceo d\u00e9 yu\u01cen\u3002",
            "ch\u00e1ng de c\u01ceo l\u01d0 sh\u00ec b\u00fa q\u00f9 de\uff0c y\u012bn w\u00e8i xi\u0101ng chu\u00e1n zh\u00e8 yu\u00e1n l\u01d0 y\u01d2u y\u00ec ti\u00e1o h\u011bn d\u00e0 de ch\u00ec li\u00e0n sh\u00e9\u3002",
            "ch\u00e1ng m\u0101 m\u0101 c\u00e9ng j\u012bng ji\u01ceng g\u011bi w\u01d2 y\u00ed g\u00e8 g\u00f9 sh\u00ec t\u012bng\uff1a xi\u0101n qi\u00e1n\uff0c y\u01d2u y\u00ed g\u00e8 d\u00fa sh\u016b r\u00e9n zh\u00f9 z\u00e0i g\u01d4 mi\u00e0o l\u01d0 y\u00f2ng g\u014dng\uff0c w\u01cen ji\u0101n\uff0c z\u00e0i yu\u00e0n zi l\u01d0 n\u00e0 li\u00e1ng de sh\u00ed h\u00f2u\uff0c t\u016b r\u00e1n t\u012bng d\u00e0o y\u01d2u r\u00e9n z\u00e0i ji\u00e0o t\u0101\u3002 d\u0101 ying zhe\uff0c s\u00ec mi\u00e0n k\u00e0n sh\u00ed\uff0c qu\u00e8 ji\u00e0n y\u00ed g\u00e8 m\u011bi n\u01da de li\u01cen l\u00f9 z\u00e0i qi\u00e1ng t\u00f3u sh\u00e0ng\uff0c xi\u00e0ng t\u0101 y\u00ed xi\u00e0o\uff0c y\u01d0n q\u00f9 le\u3002 t\u0101 h\u011bn g\u0101o x\u00ecng\uff1b d\u00e0n j\u00ecng g\u011bi n\u00e0 z\u01d2u l\u00e1i y\u00e8 t\u00e1n de l\u01ceo h\u00e9 sh\u00e0ng sh\u00ed p\u00f2 le j\u012b gu\u0101n\u3002 shu\u014d t\u0101 li\u01cen sh\u00e0ng y\u01d2u xi\u0113 y\u0101o q\u00ec\uff0c y\u00ed d\u00ecng y\u00f9 ji\u00e0n \u201c m\u011bi n\u01da sh\u00e9 \u201d li\u01ceo\uff1b zh\u00e8 sh\u00ec r\u00e9n sh\u01d2u sh\u00e9 sh\u0113n de gu\u00e0i w\u00f9\uff0c n\u00e9ng hu\u00e0n r\u00e9n m\u00edng\uff0c t\u01ceng y\u00ec d\u0101 ying\uff0c y\u00e8 ji\u0101n bi\u00e0n y\u00e0o l\u00e1i ch\u012b zh\u00e8 r\u00e9n de r\u00f2u de\u3002 t\u0101 z\u00ec r\u00e1n xi\u00e0 d\u00e9 y\u00e0o s\u01d0\uff0c \u00e9r n\u00e0 l\u01ceo h\u00e9 sh\u00e0ng qu\u00e8 d\u00e0o w\u00fa f\u00e1ng\uff0c g\u011bi t\u0101 y\u00ed g\u00e8 xi\u01ceo h\u00e9 zi\uff0c shu\u014d zh\u01d0 y\u00e0o f\u00e0ng z\u00e0i zh\u011bn bi\u0101n\uff0c bi\u00e0n k\u011b g\u0101o zh\u011bn \u00e9r w\u00f2\u3002 t\u0101 su\u012b r\u00e1n zh\u00e0o y\u00e0ng b\u00e0n\uff0c qu\u00e8 z\u01d2ng sh\u00ec shu\u00ec b\u00f9 zhe\uff0c\u2014\u2014 d\u0101ng r\u00e1n shu\u00ec b\u00f9 zhe de\u3002 d\u00e0o b\u00e0n y\u00e8\uff0c gu\u01d2 r\u00e1n l\u00e1i le\uff0c sh\u0101 sh\u0101 sh\u0101\uff01 m\u00e9n w\u00e0i xi\u00e0ng sh\u00ec f\u0113ng y\u01d4 sh\u0113ng\u3002 t\u0101 zh\u00e8ng d\u01d2u zu\u00f2 y\u00ec tu\u00e1n sh\u00ed\uff0c qu\u00e8 t\u012bng d\u00e9 hu\u014d de y\u00ec sh\u0113ng\uff0c y\u00ed d\u00e0o j\u012bn gu\u0101ng c\u00f3ng zh\u011bn bi\u0101n f\u0113i ch\u016b\uff0c w\u00e0i mi\u00e0n bi\u00e0n sh\u00e9n me sh\u0113ng y\u012bn y\u011b m\u00e9i y\u01d2u le\uff0c n\u00e0 j\u012bn gu\u0101ng y\u011b ji\u00f9 f\u0113i hu\u00ed l\u00e1i\uff0c li\u01cen z\u00e0i h\u00e9 zi l\u01d0\u3002 h\u00f2u l\u00e1i ne\uff1f h\u00f2u l\u00e1i\uff0c l\u01ceo h\u00e9 sh\u00e0ng shu\u014d\uff0c zh\u00e8 sh\u00ec f\u0113i w\u00fa g\u014dng\uff0c t\u0101 n\u00e9ng x\u012b sh\u00e9 de n\u01ceo su\u01d0\uff0c m\u011bi n\u01da sh\u00e9 ji\u00f9 b\u00e8i t\u0101 zh\u00ec s\u01d0 le\u3002",
            "ji\u00e9 m\u00f2 de ji\u00e0o x\u00f9n sh\u00ec\uff1a su\u01d2 y\u01d0 t\u01ceng y\u01d2u m\u00f2 sh\u0113ng de sh\u0113ng y\u012bn ji\u00e0o n\u01d0 de m\u00edng z\u00ec\uff0c n\u01d0 w\u00e0n b\u00f9 k\u011b d\u0101 ying t\u0101\u3002",
            "zh\u00e8 g\u00f9 sh\u00ec h\u011bn sh\u01d0 w\u01d2 ju\u00e9 d\u00e9 zu\u00f2 r\u00e9n zh\u012b xi\u01cen\uff0c xi\u00e0 y\u00e8 ch\u00e9ng li\u00e1ng\uff0c w\u01ceng w\u01ceng y\u01d2u xi\u0113 d\u0101n x\u012bn\uff0c b\u00f9 g\u01cen q\u00f9 k\u00e0n qi\u00e1ng sh\u00e0ng\uff0c \u00e9r qi\u011b j\u00ed xi\u01ceng d\u00e9 d\u00e0o y\u00ec h\u00e9 l\u01ceo h\u00e9 sh\u00e0ng n\u00e0 y\u00e0ng de f\u0113i w\u00fa g\u014dng\u3002 z\u01d2u d\u00e0o b\u01cei c\u01ceo yu\u00e1n de c\u01ceo c\u00f3ng p\u00e1ng bi\u0101n sh\u00ed\uff0c y\u011b ch\u00e1ng ch\u00e1ng zh\u00e8 y\u00e0ng xi\u01ceng\u3002 d\u00e0n zh\u00ed d\u00e0o xi\u00e0n z\u00e0i\uff0c z\u01d2ng h\u00e1i sh\u00ec m\u00e9i y\u01d2u d\u00e9 d\u00e0o\uff0c d\u00e0n y\u011b m\u00e9i y\u01d2u y\u00f9 ji\u00e0n gu\u00f2 ch\u00ec li\u00e0n sh\u00e9 h\u00e9 m\u011bi n\u01da sh\u00e9\u3002 ji\u00e0o w\u01d2 m\u00edng z\u00ec de m\u00f2 sh\u0113ng sh\u0113ng y\u012bn z\u00ec r\u00e1n sh\u00ec ch\u00e1ng y\u01d2u de\uff0c r\u00e1n \u00e9r d\u014du b\u00fa sh\u00ec m\u011bi n\u01da sh\u00e9\u3002",
            "d\u014dng ti\u0101n de b\u01cei c\u01ceo yu\u00e1n b\u01d0 ji\u00e0o de w\u00fa w\u00e8i\uff1b xu\u011b y\u00ed xi\u00e0\uff0c k\u011b ji\u00f9 li\u01ceng y\u00e0ng le\u3002 p\u0101i xu\u011b r\u00e9n\uff08ji\u0101ng z\u00ec j\u01d0 de qu\u00e1n x\u00edng y\u00ecn z\u00e0i xu\u011b sh\u00e0ng\uff09 h\u00e9 s\u00f9 xu\u011b lu\u00f3 h\u00e0n x\u016b y\u00e0o r\u00e9n men ji\u00e0n sh\u01ceng\uff0c zh\u00e8 sh\u00ec hu\u0101ng yu\u00e1n\uff0c r\u00e9n j\u00ec h\u01cen zh\u00ec\uff0c su\u01d2 y\u01d0 b\u00f9 xi\u0101ng y\u00ed\uff0c zh\u01d0 h\u01ceo l\u00e1i b\u01d4 ni\u01ceo\u3002 b\u00e1o b\u00e1o de xu\u011b\uff0c sh\u00ec b\u00f9 x\u00edng de\uff1b z\u01d2ng x\u016b j\u012b xu\u011b g\u00e0i le d\u00ec mi\u00e0n y\u00ec li\u01ceng ti\u0101n\uff0c ni\u01ceo qu\u00e8 men ji\u01d4 y\u01d0 w\u00fa ch\u00f9 m\u00ec sh\u00ed de sh\u00ed h\u00f2u c\u00e1i h\u01ceo\u3002 s\u01ceo k\u0101i y\u00ed ku\u00e0i xu\u011b\uff0c l\u00f9 ch\u016b d\u00ec mi\u00e0n\uff0c y\u00f2ng y\u00ec zh\u012b du\u01cen b\u00e0ng zh\u012b q\u01d0 y\u00ed mi\u00e0n d\u00e0 de zh\u00fa sh\u0101i l\u00e1i\uff0c xi\u00e0 mi\u00e0n s\u0101 xi\u0113 b\u01d0 g\u01d4\uff0c b\u00e0ng sh\u00e0ng x\u00ec y\u00ec ti\u00e1o ch\u00e1ng sh\u00e9ng\uff0c r\u00e9n yu\u01cen yu\u01cen d\u00ec qi\u0101n zhe\uff0c k\u00e0n ni\u01ceo qu\u00e8 xi\u00e0 l\u00e1i zhu\u00f3 sh\u00ed\uff0c z\u01d2u d\u00e0o zh\u00fa sh\u0101i d\u01d0 xi\u00e0 de sh\u00ed h\u00f2u\uff0c ji\u0101ng sh\u00e9ng zi y\u00ec l\u0101\uff0c bi\u00e0n zh\u00e0o zh\u00f9 le\u3002 d\u00e0n su\u01d2 d\u00e9 de sh\u00ec m\u00e1 qu\u00e8 j\u016b du\u014d\uff0c y\u011b y\u01d2u b\u00e1i ji\u00e1 de \u201c zh\u0101ng f\u0113i ni\u01ceo \u201d\uff0c x\u00ecng z\u01d0 h\u011bn z\u00e0o\uff0c y\u01ceng b\u00fa gu\u00f2 y\u00e8 de\u3002",
            "w\u01d2 b\u00f9 zh\u012b d\u00e0o w\u00e8i sh\u00e9n me ji\u0101 l\u01d0 de r\u00e9n y\u00e0o ji\u0101ng w\u01d2 s\u00f2ng j\u00ecn sh\u016b sh\u00fa l\u01d0 q\u00f9 le\uff0c \u00e9r qi\u011b h\u00e1i sh\u00ec qu\u00e1n ch\u00e9ng zh\u014dng ch\u0113ng w\u00e9i zu\u00ec y\u00e1n l\u00ec de sh\u016b sh\u00fa\u3002 y\u011b x\u01d4 sh\u00ec y\u012bn w\u00e8i b\u00e1 h\u00e9 sh\u01d2u w\u016b hu\u01d0 le n\u00ed qi\u00e1ng b\u00e0\uff0c y\u011b x\u01d4 sh\u00ec y\u012bn w\u00e8i ji\u0101ng zhu\u0101n t\u00f3u p\u0101o d\u00e0o ji\u0101n b\u00ec de li\u00e1ng ji\u0101 q\u00f9 le b\u00e0\uff0c y\u011b x\u01d4 sh\u00ec y\u012bn w\u00e8i zh\u00e0n z\u00e0i sh\u00ed j\u01d0ng l\u00e1n sh\u00e0ng ti\u00e0o le xi\u00e0 l\u00e1i b\u00e0\uff0c\u2026\u2026 d\u014du w\u00fa c\u00f3ng zh\u012b d\u00e0o\u3002 z\u01d2ng \u00e9r y\u00e1n zh\u012b\uff1a w\u01d2 ji\u0101ng b\u00f9 n\u00e9ng ch\u00e1ng d\u00e0o b\u01cei c\u01ceo yu\u00e1n le\u3002 A d e\uff0c w\u01d2 de x\u012b shu\u00e0i men\uff01 A d e\uff0c w\u01d2 de f\u00f9 p\u00e9n z\u01d0 men h\u00e9 m\u00f9 li\u00e1n men\uff01\u2026\u2026",
            "ch\u016b m\u00e9n xi\u00e0ng d\u014dng\uff0c b\u00fa sh\u00e0ng b\u00e0n l\u01d0\uff0c z\u01d2u gu\u00f2 y\u00ed d\u00e0o sh\u00ed qi\u00e1o\uff0c bi\u00e0n sh\u00ec w\u01d2 de xi\u0101n sh\u0113ng de ji\u0101 le\u3002 c\u00f3ng y\u00ed sh\u00e0n h\u0113i y\u00f3u de zh\u00fa m\u00e9n j\u00ecn q\u00f9\uff0c d\u00ec s\u0101n ji\u0101n sh\u00ec sh\u016b f\u00e1ng\u3002 zh\u014dng ji\u0101n gu\u00e0 zhe y\u00ed ku\u00e0i bi\u01cen d\u00e0o\uff1a s\u0101n w\u00e8i sh\u016b w\u016b\uff1b bi\u01cen xi\u00e0 mi\u00e0n sh\u00ec y\u00ec f\u00fa hu\u00e0\uff0c hu\u00e0 zhe y\u00ec zh\u012b h\u011bn f\u00e9i d\u00e0 de m\u00e9i hu\u0101 l\u00f9 f\u00fa z\u00e0i g\u01d4 sh\u00f9 xi\u00e0\u3002 m\u00e9i y\u01d2u k\u01d2ng z\u01d0 p\u00e1i w\u00e8i\uff0c w\u01d2 men bi\u00e0n du\u00ec zhe n\u00e0 bi\u01cen h\u00e9 l\u00f9 x\u00edng l\u01d0\u3002 d\u00ec y\u012b c\u00ec su\u00e0n sh\u00ec b\u00e0i k\u01d2ng z\u01d0\uff0c d\u00ec \u00e8r c\u00ec su\u00e0n sh\u00ec b\u00e0i xi\u0101n sh\u0113ng\u3002",
            "d\u00ec \u00e8r c\u00ec x\u00edng l\u01d0 sh\u00ed\uff0c xi\u0101n sh\u0113ng bi\u00e0n h\u00e9 \u01cei d\u00ec z\u00e0i y\u00ec p\u00e1ng d\u00e1 l\u01d0\u3002 t\u0101 sh\u00ec y\u00ed g\u00e8 g\u0101o \u00e9r sh\u00f2u de l\u01ceo r\u00e9n\uff0c x\u016b f\u00e0 d\u014du hu\u0101 b\u00e1i le\uff0c h\u00e1i d\u00e0i zhe d\u00e0 y\u01cen j\u00ecng\u3002 w\u01d2 du\u00ec t\u0101 h\u011bn g\u014dng j\u00ecng\uff0c y\u012bn w\u00e8i w\u01d2 z\u01ceo t\u012bng d\u00e0o\uff0c t\u0101 sh\u00ec b\u011bn ch\u00e9ng zh\u014dng j\u00ed f\u0101ng zh\u00e8ng\uff0c zh\u00ec p\u01d4\uff0c b\u00f3 xu\u00e9 de r\u00e9n\u3002",
            "w\u01d2 ji\u00f9 zh\u012b d\u00fa sh\u016b\uff0c zh\u00e8ng w\u01d4 x\u00ed z\u00ec\uff0c w\u01cen sh\u00e0ng du\u00ec k\u00e8\u3002 xi\u0101n sh\u0113ng zu\u00ec ch\u016b zh\u00e8 j\u01d0 ti\u0101n du\u00ec w\u01d2 h\u011bn y\u00e1n l\u00ec\uff0c h\u00f2u l\u00e1i qu\u00e8 h\u01ceo q\u01d0 l\u00e1i le\uff0c b\u00fa gu\u00f2 g\u011bi w\u01d2 d\u00fa de sh\u016b ji\u00e0n ji\u00e0n ji\u0101 du\u014d\uff0c du\u00ec k\u00e8 y\u011b ji\u00e0n ji\u00e0n d\u00ec ji\u0101 sh\u00e0ng z\u00ec q\u00f9\uff0c c\u00f3ng s\u0101n y\u00e1n d\u00e0o w\u01d4 y\u00e1n\uff0c zh\u014dng y\u00fa d\u00e0o q\u012b y\u00e1n\u3002",
            "s\u0101n w\u00e8i sh\u016b w\u016b h\u00f2u mi\u00e0n y\u011b y\u01d2u y\u00ed g\u00e8 yu\u00e1n\uff0c su\u012b r\u00e1n xi\u01ceo\uff0c d\u00e0n z\u00e0i n\u00e0 l\u01d0 y\u011b k\u011b y\u01d0 p\u00e1 sh\u00e0ng hu\u0101 t\u00e1n q\u00f9 zh\u00e9 l\u00e0 m\u00e9i hu\u0101\uff0c z\u00e0i d\u00ec sh\u00e0ng hu\u00f2 gu\u00ec hu\u0101 sh\u00f9 sh\u00e0ng x\u00fan ch\u00e1n tu\u00ec\u3002 zu\u00ec h\u01ceo de g\u014dng zu\u00f2 sh\u00ec zhu\u014d le c\u0101ng y\u00edng w\u00e8i m\u01ce y\u01d0\uff0c j\u00ecng qi\u0101o qi\u0101o d\u00ec m\u00e9i y\u01d2u sh\u0113ng y\u012bn\u3002 r\u00e1n \u00e9r t\u00f3ng chu\u0101ng men d\u00e0o yu\u00e1n l\u01d0 de t\u00e0i du\u014d\uff0c t\u00e0i ji\u01d4\uff0c k\u011b ji\u00f9 b\u00f9 x\u00edng le\uff0c xi\u0101n sh\u0113ng z\u00e0i sh\u016b f\u00e1ng l\u01d0 bi\u00e0n d\u00e0 ji\u00e0o q\u01d0 l\u00e1i\uff1a \u201c r\u00e9n d\u014du d\u00e0o n\u00e0 l\u01d0 q\u00f9 le\uff1f\uff01 \u201d",
            "y\u00fa sh\u00ec d\u00e0 ji\u0101 f\u00e0ng k\u0101i h\u00f3u l\u00f3ng d\u00fa y\u00ed zh\u00e8n sh\u016b\uff0c zh\u0113n sh\u00ec r\u00e9n sh\u0113ng d\u01d0ng f\u00e8i\u3002 y\u01d2u ni\u00e0n \u201c r\u00e9n yu\u01cen h\u016b z\u0101i w\u01d2 y\u00f9 r\u00e9n s\u012b r\u00e9n zh\u00ec y\u01d0 \u201d de\uff0c y\u01d2u ni\u00e0n \u201c xi\u00e0o r\u00e9n ch\u01d0 qu\u0113 yu\u0113 g\u01d2u d\u00f2u d\u00e0 k\u0101i \u201d de\uff0c y\u01d2u ni\u00e0n \u201c sh\u00e0ng ji\u01d4 qi\u00e1n l\u00f3ng w\u00f9 y\u00f2ng \u201d de\uff0c y\u01d2u ni\u00e0n \u201c ju\u00e9 t\u01d4 xi\u00e0 sh\u00e0ng sh\u00e0ng cu\u00f2 ju\u00e9 g\u00f2ng b\u0101o m\u00e1o j\u00fa y\u00f2u \u201d de\u2026\u2026\u3002 xi\u0101n sh\u0113ng z\u00ec j\u01d0 y\u011b ni\u00e0n sh\u016b\u3002 h\u00f2u l\u00e1i\uff0c w\u01d2 men de sh\u0113ng y\u012bn bi\u00e0n d\u012b xi\u00e0 q\u00f9\uff0c j\u00ecng xi\u00e0 q\u00f9 le\uff0c zh\u01d0 y\u01d2u t\u0101 h\u00e1i d\u00e0 sh\u0113ng l\u01ceng d\u00fa zhe\uff1a \u201c ti\u011b r\u00fa y\u00ec\uff0c zh\u01d0 hu\u012b t\u00ec t\u01ceng\uff0c y\u00ed zu\u00f2 ji\u0113 j\u012bng ne\uff1b j\u012bn p\u01d2 lu\u00f3\uff0c di\u0101n d\u01ceo l\u00edn l\u00ed y\u012b\uff0c qi\u0101n b\u0113i w\u00e8i zu\u00ec h\u0113\u2026\u2026\u3002 \u201d",
            "w\u01d2 y\u00ed x\u012bn zh\u00e8 sh\u00ec j\u00ed h\u01ceo de w\u00e9n zh\u0101ng\uff0c y\u012bn w\u00e8i d\u00fa d\u00e0o zh\u00e8 l\u01d0\uff0c t\u0101 z\u01d2ng sh\u00ec w\u0113i xi\u00e0o q\u01d0 l\u00e1i\uff0c \u00e9r qi\u011b ji\u0101ng t\u00f3u y\u01ceng q\u01d0\uff0c y\u00e1o zhe\uff0c xi\u00e0ng h\u00f2u mi\u00e0n \u00e0o gu\u00f2 q\u00f9\uff0c \u00e0o gu\u00f2 q\u00f9\u3002",
            "xi\u0101n sh\u0113ng d\u00fa sh\u016b r\u00f9 sh\u00e9n de sh\u00ed h\u00f2u\uff0c y\u00fa w\u01d2 men sh\u00ec h\u011bn xi\u0101ng y\u00ed de\u3002 y\u01d2u j\u01d0 g\u00e8 bi\u00e0n y\u00f2ng zh\u01d0 h\u00fa de ku\u012b ji\u01ce t\u00e0o z\u00e0i zh\u01d0 ji\u01ce sh\u00e0ng zu\u00f2 x\u00ec\u3002 w\u01d2 sh\u00ec hu\u00e0 hu\u00e0 \u00e9r\uff0c y\u00f2ng y\u00ec zh\u01d2ng ji\u00e0o zu\u00f2 \u201c j\u012bng chu\u0101n zh\u01d0 \u201d de\uff0c m\u00e9ng z\u00e0i xi\u01ceo shu\u014d de xi\u00f9 xi\u00e0ng sh\u00e0ng y\u00ed g\u00e8 g\u00e8 mi\u00e1o xi\u00e0 l\u00e1i\uff0c xi\u00e0ng x\u00ed z\u00ec sh\u00ed h\u00f2u de y\u01d0ng xi\u011b y\u00ed y\u00e0ng\u3002 d\u00fa de sh\u016b du\u014d q\u01d0 l\u00e1i\uff0c hu\u00e0 de hu\u00e0 \u00e9r y\u011b du\u014d q\u01d0 l\u00e1i\uff1b sh\u016b m\u00e9i y\u01d2u d\u00fa ch\u00e9ng\uff0c hu\u00e0 \u00e9r de ch\u00e9ng j\u00ec qu\u00e8 b\u00f9 sh\u01ceo le\uff0c zu\u00ec ch\u00e9ng pi\u00e0n du\u00e0n de sh\u00ec\u300ad\u00e0ng k\u00f2u zh\u00ec\u300bh\u00e9\u300ax\u012b y\u00f3u j\u00ec\u300bde xi\u00f9 xi\u00e0ng\uff0c d\u014du y\u01d2u y\u00ed d\u00e0 b\u011bn\u3002 h\u00f2u l\u00e1i\uff0c y\u012bn w\u00e8i y\u00e0o qi\u00e1n y\u00f2ng\uff0c m\u00e0i g\u011bi y\u00ed g\u00e8 y\u01d2u qi\u00e1n de t\u00f3ng chu\u0101ng le\u3002"
          ],
          annotations: [
            { id: 1, term: "确凿", pinyin: "quèzáo", definition: "确实。", definitionEn: "Indeed, certainly." },
            { id: 2, term: "皂荚树", pinyin: "zàojiáshù", definition: "也叫\u201C皂角树\u201D，一种乔木，果实像扁豆。", definitionEn: "Also called 'soap-pod tree,' a type of deciduous tree with bean-like pods." },
            { id: 3, term: "轻捷", pinyin: "qīngjié", definition: "轻快敏捷。", definitionEn: "Quick and nimble." },
            { id: 4, term: "人迹罕至", pinyin: "rénjìhǎnzhì", definition: "少有人来。迹，足迹、脚印。罕，稀少。", definitionEn: "Rarely visited by people. 迹 means footprint; 罕 means rare." },
            { id: 5, term: "人声鼎沸", pinyin: "rénshēngdǐngfèi", definition: "形容人声喧闹，像水在鼎中沸腾一样。", definitionEn: "Describes a clamor of voices, like water boiling in a cauldron." },
            { id: 6, term: "宿儒", pinyin: "sùrú", definition: "老成博学的读书人。", definitionEn: "An experienced and erudite scholar." }
          ],
          thinkExplore: [
            { cn: "默读课文，讨论问题。分别找出写百草园和三味书屋两部分的起止语句，想一想，这两部分是怎样连接起来的？", en: "Read silently and discuss: identify the beginning and ending sentences of the Hundred-Herb Garden and Three-Flavour Study sections. How are these two parts connected?" },
            { cn: "文中说，百草园\u201C其中似乎确凿只有一些野草；但那时却是我的乐园\u201D，\u201C乐园\u201D之\u201C乐\u201D表现在哪些方面？", en: "The text says the garden 'seemed to have nothing but wild grass, but at that time it was my paradise.' In what ways was it a 'paradise'?" },
            { cn: "有人认为美女蛇的故事是赘笔，没必要写。你是否同意？简要说明理由。", en: "Some think the story of the beauty-snake is unnecessary. Do you agree? Briefly explain your reasoning." }
          ],
          accumExtend: [
            { cn: "朗读并背诵第2段描写百草园的文字。\u201C不必说……也不必说……单是……\u201D中，哪个内容是强调的重点？", en: "Read aloud and recite the second paragraph describing the garden. In the pattern 'needless to mention... needless to mention... just...,' which part is the emphasis?" },
            { cn: "仿照这段文字，描写一处景物，用上\u201C不必说……也不必说……单是……\u201D这个句式。200字左右。", en: "Imitate this paragraph to describe a place using the pattern 'needless to mention... needless to mention... just...' About 200 words." }
          ],
          teachingPoints: [
            { cn: "学习默读的方法：不出声、不动唇、不指读、不回看，一气读完。", en: "Learn silent reading methods: no voicing, no lip movement, no finger-pointing, no re-reading — read through at once." },
            { cn: "体会\u201C不必说……也不必说……单是……\u201D这一句式的写作技巧。", en: "Appreciate the writing technique of the 'needless to mention... needless to mention... just...' pattern." }
          ],
          parentTips: [
            { cn: "鼓励孩子在生活中留心观察，像鲁迅描写百草园那样，细致地记录童年的快乐时光。", en: "Encourage your child to observe carefully in daily life, and record childhood joys in detail as Lu Xun described the Hundred-Herb Garden." }
          ]
        },
        {
          id: 10,
          title: "再塑生命的人",
          titleEn: "The One Who Remade My Life",
          difficulty: 5,
          author: "海伦·凯勒",
          authorEn: "Helen Keller",
          source: "选自《假如给我三天光明》（华文出版社2002年版）。李汉昭译。",
          sourceEn: "Selected from Three Days to See (Huawen Publishing House, 2002). Translated by Li Hanzhao.",
          vocabWords: [
            {word:'截然不同',pinyin:'jié rán bù tóng',en:'completely different',sentence:'莎莉文老师的到来使我的世界截然不同。',sentenceEn:'The arrival of Miss Sullivan made my world completely different.'},
            {word:'感慨',pinyin:'gǎn kǎi',en:'sigh with emotion',sentence:'回想起这段经历，我感慨万千。',sentenceEn:'Looking back at this experience, I am filled with emotion.'},
            {word:'恍然大悟',pinyin:'huǎng rán dà wù',en:'suddenly see the light',sentence:'我恍然大悟，水就是从手上流过的那种清凉的东西。',sentenceEn:'I suddenly understood: water was that cool thing flowing over my hand.'},
            {word:'企盼',pinyin:'qǐ pàn',en:'eagerly hope',sentence:'我企盼着新的一天快些来到。',sentenceEn:'I eagerly hoped for a new day to come soon.'},
            {word:'唤醒',pinyin:'huàn xǐng',en:'awaken',sentence:'她唤醒了我的灵魂，给予我光明和希望。',sentenceEn:'She awakened my soul, giving me light and hope.'}
          ],
          footnotes: [
            {term:"\u622a\u7136\u4e0d\u540c", termEn:"completely different", definition:"\u3010ji\u00e9 r\u00e1n b\u00f9 t\u00f3ng\u3011completely different\u3002", definitionEn:"completely different"},
            {term:"\u611f\u6168", termEn:"sigh with emotion", definition:"\u3010g\u01cen k\u01cei\u3011sigh with emotion\u3002", definitionEn:"sigh with emotion"},
            {term:"\u604d\u7136\u5927\u609f", termEn:"suddenly see the light", definition:"\u3010hu\u01ceng r\u00e1n d\u00e0 w\u00f9\u3011suddenly see the light\u3002", definitionEn:"suddenly see the light"},
            {term:"\u4f01\u76fc", termEn:"eagerly hope", definition:"\u3010q\u01d0 p\u00e0n\u3011eagerly hope\u3002", definitionEn:"eagerly hope"},
            {term:"\u5524\u9192", termEn:"awaken", definition:"\u3010hu\u00e0n x\u01d0ng\u3011awaken\u3002", definitionEn:"awaken"}
          ],
          readingTips: [
            {cn:"\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f", en:"Pay attention to the author's narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?"},
            {cn:"\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f", en:"After reading, think: what theme does the author convey? How does the title relate to the content?"}
          ],
          accumExtend: [
            {cn: "\u8bfe\u6587\u4e2d\u6709\u4e0d\u5c11\u597d\u8bcd\u4f73\u53e5\uff0c\u5982\u201c\u622a\u7136\u4e0d\u540c\u3001\u611f\u6168\u3001\u604d\u7136\u5927\u609f\u201d\u7b49\u3002\u8bf7\u6458\u5f55\u4f60\u559c\u6b22\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u5e76\u8bd5\u7740\u5728\u81ea\u5df1\u7684\u5199\u4f5c\u4e2d\u8fd0\u7528\u3002", en: "The text contains fine words and phrases such as \"\u622a\u7136\u4e0d\u540c\u3001\u611f\u6168\u3001\u604d\u7136\u5927\u609f\". Collect the words and sentences you like and try using them in your own writing."},
            {cn: "\u9009\u62e9\u8bfe\u6587\u4e2d\u4f60\u6700\u559c\u6b22\u7684\u4e00\u4e2a\u6bb5\u843d\uff0c\u6709\u611f\u60c5\u5730\u6717\u8bfb\uff0c\u6807\u51fa\u91cd\u97f3\u548c\u505c\u8fde\uff0c\u5728\u5c0f\u7ec4\u91cc\u4e92\u76f8\u8bc4\u4ef7\u3002", en: "Choose your favorite paragraph, read it with feeling, mark stress and pauses, and do peer evaluation in groups."},
            {cn: "\u8bfe\u5916\u9605\u8bfb\u6d77\u4f26\u00b7\u51ef\u52d2\u7684\u5176\u4ed6\u4f5c\u54c1\uff0c\u6bd4\u8f83\u4e0e\u672c\u6587\u7684\u5f02\u540c\uff0c\u5199\u4e00\u7bc7\u77ed\u6587\u5206\u4eab\u4f60\u7684\u53d1\u73b0\u3002", en: "Read other works by Helen Keller and compare them with this text. Write a short essay sharing your findings."}
          ],
          thinkExplore: [
            {cn: "\u6717\u8bfb\u8bfe\u6587\uff0c\u6982\u62ec\u6587\u7ae0\u7684\u4e3b\u8981\u5185\u5bb9\u3002\u4f5c\u8005\u60f3\u8981\u8868\u8fbe\u7684\u4e2d\u5fc3\u601d\u60f3\u662f\u4ec0\u4e48\uff1f", en: "Read the text aloud and summarize its main content. What central idea does the author wish to convey?"},
            {cn: "\u6587\u4e2d\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bed\u53e5\u6216\u6bb5\u843d\uff1f\u627e\u51fa\u6765\u54c1\u5473\u5176\u4e2d\u7684\u8868\u8fbe\u6548\u679c\uff0c\u5e76\u4e0e\u540c\u5b66\u5206\u4eab\u4f60\u7684\u611f\u53d7\u3002", en: "Which sentences or paragraphs are most impressive? Identify them, appreciate their expressive effects, and share your feelings with classmates."},
            {cn: "\u7ed3\u5408\u4f5c\u8005\u6d77\u4f26\u00b7\u51ef\u52d2\u7684\u5199\u4f5c\u80cc\u666f\uff0c\u8c08\u8c08\u4f60\u5bf9\u8fd9\u7bc7\u6587\u7ae0\u7684\u7406\u89e3\u3002\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8981\u5199\u8fd9\u7bc7\u6587\u7ae0\uff1f", en: "Considering the author Helen Keller's background, discuss your understanding. Why did the author write this?"}
          ],
          grammarPoints: [
            {point:'细节描写',pointEn:'xì jié miáo xiě',example:'detailed description',exampleEn:'莎莉文老师把洋娃娃放在我的手中，然后在我手心里慢慢拼写。',explanation:'Miss Sullivan put a doll in my hand, then slowly spelled in my palm.',explanationEn:'通过感官细节展现海伦的内心世界'}
          ],
          authorBio: {
            cn: "海伦·凯勒（1880—1968），美国盲聋女作家，教育家、慈善家。",
            en: "Helen Keller (1880–1968), an American blind and deaf writer, educator, and philanthropist."
          },
          isSelfRead: true,
          preview: [
            { cn: "老师安妮·莎莉文来到海伦·凯勒家的那一天，是她一生中最重要的一天。莎莉文老师用爱和耐心，让一个盲聋女孩重新认识了世界。", en: "The day teacher Anne Sullivan arrived at Helen Keller's home was the most important day of her life. With love and patience, Sullivan helped a blind and deaf girl rediscover the world." }
          ],
          text: [
            "老师安妮·莎莉文来到我家的这一天，是我一生中最重要的一天。那是1887年3月3日，当时我才六岁零九个月。回想此前和此后截然不同的生活，我不能不感慨万分。",
            "那天下午，我默默地站在走廊上。从母亲的手势以及家人的来去匆忙中，我猜想一定有什么不寻常的事要发生。因此，我安静地走到门口，站在台阶上等待着。",
            "下午的阳光穿透遮满阳台的金银花叶子，照射到我仰着的脸上。我的手指搓捻着花叶，抚弄着那些为迎接南方春天而绽开的花朵。我不知道未来将有什么奇迹发生，当时的我，经过数个星期的愤怒、苦恼，已经疲倦不堪了。",
            "朋友，你可曾在茫茫大雾中航行过，在雾中神情紧张地驾驶着一条大船，小心翼翼地缓慢地向对岸驶去？你的心怦怦直跳，唯恐意外发生。在接受教育之前，我正像大雾中的航船，既没有指南针也没有探测仪，无从知道海港已经临近。我心里无声地呼喊着：\u201C光明！光明！快给我光明！\u201D恰恰在此时，爱的光明照到了我的身上。",
            "我觉得有脚步向我走来，以为是母亲，立刻伸出双手。一个人握住了我的手，把我紧紧地抱在怀中。我似乎能感觉得到，她就是那个来对我启示世间的真理、给我深切的爱的人——安妮·莎莉文老师。",
            "第二天早晨，莎莉文老师带我到她的房间，给了我一个布娃娃。我玩了一会儿布娃娃，莎莉文小姐拉起我的手，在手掌上慢慢地拼写\u201Cdoll\u201D这个词，这个举动让我对手指游戏产生了兴趣，并且模仿着在她手上画。",
            "有一天，莎莉文小姐给我一个更大的新布娃娃，同时也把原来那个布娃娃拿来放在我的膝上，然后在我手上拼写\u201Cdoll\u201D这个词，用意在于告诉我这个大的布娃娃和小布娃娃一样都叫作\u201Cdoll\u201D。",
            "我们沿着小路散步到井房，房顶上盛开的金银花芬芳扑鼻。莎莉文老师把我的一只手放在喷水口下，一股清凉的水在我手上流过。她在我的另一只手上拼写\u201Cwater\u201D——\u201C水\u201D，起先写得很慢，第二遍就写得快一些。我静静地站着，注意她手指的动作。突然间，我恍然大悟，有一种神奇的感觉在我脑中激荡，我一下子理解了语言文字的奥秘了，知道了\u201C水\u201D这个词就是指正在我手上流过的这种清凉而奇妙的东西。",
            "水唤醒了我的灵魂，并给予我光明、希望、快乐和自由。",
            "井房的经历使我求知的欲望油然而生。啊！原来宇宙万物都各有名称，每个名称都能启发我新的思想。我开始以好奇的眼光看待每一样东西。回到屋里，碰到的东西似乎都有了生命。我想起了那个被我摔碎的布娃娃，摸索着来到炉子跟前，捡起碎片，想把它们拼凑起来，但怎么也拼不好。想起刚才的所作所为，我悔恨莫及，两眼浸满了泪水，这是生平第一次。",
            "那一天，我学会了不少词，譬如\u201C父亲\u201D（father）、\u201C母亲\u201D（mother）、\u201C妹妹\u201D（sister）、\u201C老师\u201D（teacher）等。这些词使整个世界在我面前变得花团锦簇，美不胜收。记得那个美好的夜晚，我独自躺在床上，心中充满了喜悦，企盼着新的一天快些来到。啊！世界上还有比我更幸福的孩子吗？"
          ],
          textEn: [
            "The most important day I remember in all my life is the one on which my teacher, Anne Mansfield Sullivan, came to me. It was the third of March 1887, three months before I was seven years old. Looking back at the utterly different life before and after that day, I cannot help but be deeply moved.",
            "That afternoon I stood silently on the porch. From my mother's gestures and the hurrying to and fro of the household, I guessed that something unusual was about to happen. So I walked quietly to the door and stood on the steps, waiting.",
            "The afternoon sun penetrated the honeysuckle leaves that covered the porch, falling upon my upturned face. My fingers lingered over the leaves, touching the flowers that had opened to greet the Southern spring. I did not know what miracle the future held; after weeks of anger and frustration, I was utterly exhausted.",
            "Have you ever been at sea in a dense fog, nervously steering a great ship, inching cautiously toward the far shore, your heart pounding for fear of disaster? I was like that ship before my education began, only I had no compass or sounding-line, and no way of knowing how near the harbor was. 'Light! Give me light!' was the wordless cry of my soul — and just at that moment, the light of love shone upon me.",
            "I felt approaching footsteps. I stretched out my hand, thinking it was my mother. Someone took it, and I was caught up and held close. I seemed to feel that she was the one who was to reveal all things to me — my teacher, Anne Sullivan.",
            "The next morning, Miss Sullivan took me to her room and gave me a doll. After I had played with the doll for a while, Miss Sullivan took my hand and slowly spelled the word 'd-o-l-l' into my palm. This action sparked my interest in the finger game, and I imitated the motions on her hand.",
            "One day Miss Sullivan gave me a new, bigger doll, and at the same time brought the old doll and placed it on my lap. Then she spelled 'd-o-l-l' into my hand, meaning to tell me that the big doll and the small doll were both called 'doll.'",
            "We walked along the path to the well-house, where the honeysuckle on the roof was in full bloom and wonderfully fragrant. Miss Sullivan placed one of my hands under the spout, and a stream of cool water flowed over it. She spelled 'water' into my other hand — first slowly, then faster the second time. I stood still, focusing on the movements of her fingers. Suddenly, I had a flash of understanding — a miraculous feeling surged through my mind. All at once I grasped the mystery of language: I knew that 'water' meant the cool, wonderful something flowing over my hand.",
            "That living word awakened my soul, gave it light, hope, joy, set it free!",
            "The experience at the well-house filled me with an eager desire to learn. Ah, so everything in the universe has a name, and each name can inspire a new thought! I began to look at everything with curious eyes. Back in the house, every object I touched seemed to have come alive. I remembered the doll I had smashed, groped my way to the stove, picked up the pieces, and tried to put them back together, but I could not. Remembering what I had just done, I was filled with regret and remorse, and my eyes brimmed with tears — for the first time in my life.",
            "That day I learned a great many words, such as 'father,' 'mother,' 'sister,' 'teacher,' and others. These words made the whole world before me burst into splendid bloom, too beautiful to take in. I remember that wonderful evening, lying alone in bed, my heart brimming with joy, eagerly looking forward to the new day. Ah, could there be a happier child in the world than I?"
          ],
          textPinyin: [
            "l\u01ceo sh\u012b \u0101n n\u012b\u00b7 sh\u0101 l\u00ec w\u00e9n l\u00e1i d\u00e0o w\u01d2 ji\u0101 de zh\u00e8 y\u00ec ti\u0101n\uff0c sh\u00ec w\u01d2 y\u00ec sh\u0113ng zh\u014dng zu\u00ec zh\u00f2ng y\u00e0o de y\u00ec ti\u0101n\u3002 n\u00e0 sh\u00ec 1 8 8 7 ni\u00e1n 3 yu\u00e8 3 r\u00ec\uff0c d\u0101ng sh\u00ed w\u01d2 c\u00e1i li\u00f9 su\u00ec l\u00edng ji\u01d4 g\u00e8 yu\u00e8\u3002 hu\u00ed xi\u01ceng c\u01d0 qi\u00e1n h\u00e9 c\u01d0 h\u00f2u ji\u00e9 r\u00e1n b\u00f9 t\u00f3ng de sh\u0113ng hu\u00f3\uff0c w\u01d2 b\u00f9 n\u00e9ng b\u00f9 g\u01cen k\u01cei w\u00e0n f\u0113n\u3002",
            "n\u00e0 ti\u0101n xi\u00e0 w\u01d4\uff0c w\u01d2 m\u00f2 m\u00f2 d\u00ec zh\u00e0n z\u00e0i z\u01d2u l\u00e1ng sh\u00e0ng\u3002 c\u00f3ng m\u01d4 q\u012bn de sh\u01d2u sh\u00ec y\u01d0 j\u00ed ji\u0101 r\u00e9n de l\u00e1i q\u00f9 c\u014dng m\u00e1ng zh\u014dng\uff0c w\u01d2 c\u0101i xi\u01ceng y\u00ed d\u00ecng y\u01d2u sh\u00e9n me b\u00f9 x\u00fan ch\u00e1ng de sh\u00ec y\u00e0o f\u0101 sh\u0113ng\u3002 y\u012bn c\u01d0\uff0c w\u01d2 \u0101n j\u00ecng d\u00ec z\u01d2u d\u00e0o m\u00e9n k\u01d2u\uff0c zh\u00e0n z\u00e0i t\u00e1i ji\u0113 sh\u00e0ng d\u011bng d\u00e0i zhe\u3002",
            "xi\u00e0 w\u01d4 de y\u00e1ng gu\u0101ng chu\u0101n t\u00f2u zh\u0113 m\u01cen y\u00e1ng t\u00e1i de j\u012bn y\u00edn hu\u0101 y\u00e8 zi\uff0c zh\u00e0o sh\u00e8 d\u00e0o w\u01d2 y\u01ceng zhe de li\u01cen sh\u00e0ng\u3002 w\u01d2 de sh\u01d2u zh\u01d0 cu\u014d ni\u01cen zhe hu\u0101 y\u00e8\uff0c f\u01d4 n\u00f2ng zhe n\u00e0 xi\u0113 w\u00e8i y\u00edng ji\u0113 n\u00e1n f\u0101ng ch\u016bn ti\u0101n \u00e9r zh\u00e0n k\u0101i de hu\u0101 du\u01d2\u3002 w\u01d2 b\u00f9 zh\u012b d\u00e0o w\u00e8i l\u00e1i ji\u0101ng y\u01d2u sh\u00e9n me q\u00ed j\u00ec f\u0101 sh\u0113ng\uff0c d\u0101ng sh\u00ed de w\u01d2\uff0c j\u012bng gu\u00f2 sh\u00f9 g\u00e8 x\u012bng q\u012b de f\u00e8n n\u00f9\u3001 k\u01d4 n\u01ceo\uff0c y\u01d0 j\u012bng p\u00ed ju\u00e0n b\u00f9 k\u0101n le\u3002",
            "p\u00e9ng y\u01d2u\uff0c n\u01d0 k\u011b c\u00e9ng z\u00e0i m\u00e1ng m\u00e1ng d\u00e0 w\u00f9 zh\u014dng h\u00e1ng x\u00edng gu\u00f2\uff0c z\u00e0i w\u00f9 zh\u014dng sh\u00e9n q\u00edng j\u01d0n zh\u0101ng d\u00ec ji\u00e0 sh\u01d0 zhe y\u00ec ti\u00e1o d\u00e0 chu\u00e1n\uff0c xi\u01ceo x\u012bn y\u00ec y\u00ec d\u00ec hu\u01cen m\u00e0n d\u00ec xi\u00e0ng du\u00ec \u00e0n sh\u01d0 q\u00f9\uff1f n\u01d0 de x\u012bn p\u0113ng p\u0113ng zh\u00ed ti\u00e0o\uff0c w\u00e9i k\u01d2ng y\u00ec w\u00e0i f\u0101 sh\u0113ng\u3002 z\u00e0i ji\u0113 sh\u00f2u ji\u00e0o y\u00f9 zh\u012b qi\u00e1n\uff0c w\u01d2 zh\u00e8ng xi\u00e0ng d\u00e0 w\u00f9 zh\u014dng de h\u00e1ng chu\u00e1n\uff0c j\u00ec m\u00e9i y\u01d2u zh\u01d0 n\u00e1n zh\u0113n y\u011b m\u00e9i y\u01d2u t\u00e0n c\u00e8 y\u00ed\uff0c w\u00fa c\u00f3ng zh\u012b d\u00e0o h\u01cei g\u01ceng y\u01d0 j\u012bng l\u00edn j\u00ecn\u3002 w\u01d2 x\u012bn l\u01d0 w\u00fa sh\u0113ng d\u00ec h\u016b h\u01cen zhe\uff1a \u201c gu\u0101ng m\u00edng\uff01 gu\u0101ng m\u00edng\uff01 ku\u00e0i g\u011bi w\u01d2 gu\u0101ng m\u00edng\uff01 \u201d qi\u00e0 qi\u00e0 z\u00e0i c\u01d0 sh\u00ed\uff0c \u00e0i de gu\u0101ng m\u00edng zh\u00e0o d\u00e0o le w\u01d2 de sh\u0113n sh\u00e0ng\u3002",
            "w\u01d2 ju\u00e9 de y\u01d2u ji\u01ceo b\u00f9 xi\u00e0ng w\u01d2 z\u01d2u l\u00e1i\uff0c y\u01d0 w\u00e9i sh\u00ec m\u01d4 q\u012bn\uff0c l\u00ec k\u00e8 sh\u0113n ch\u016b shu\u0101ng sh\u01d2u\u3002 y\u00ed g\u00e8 r\u00e9n w\u00f2 zh\u00f9 le w\u01d2 de sh\u01d2u\uff0c b\u01ce w\u01d2 j\u01d0n j\u01d0n d\u00ec b\u00e0o z\u00e0i hu\u00e1i zh\u014dng\u3002 w\u01d2 s\u00ec h\u016b n\u00e9ng g\u01cen ju\u00e9 de d\u00e0o\uff0c t\u0101 ji\u00f9 sh\u00ec n\u00e0 ge l\u00e1i du\u00ec w\u01d2 q\u01d0 sh\u00ec sh\u00ec ji\u0101n de zh\u0113n l\u01d0\u3001 g\u011bi w\u01d2 sh\u0113n qi\u00e8 de \u00e0i de r\u00e9n\u2014\u2014 \u0101n n\u012b\u00b7 sh\u0101 l\u00ec w\u00e9n l\u01ceo sh\u012b\u3002",
            "d\u00ec \u00e8r ti\u0101n z\u01ceo ch\u00e9n\uff0c sh\u0101 l\u00ec w\u00e9n l\u01ceo sh\u012b d\u00e0i w\u01d2 d\u00e0o t\u0101 de f\u00e1ng ji\u0101n\uff0c g\u011bi le w\u01d2 y\u00ed g\u00e8 b\u00f9 w\u00e1 wa\u3002 w\u01d2 w\u00e1n le y\u00ed hu\u00ec er b\u00f9 w\u00e1 wa\uff0c sh\u0101 l\u00ec w\u00e9n xi\u01ceo ji\u011b l\u0101 q\u01d0 w\u01d2 de sh\u01d2u\uff0c z\u00e0i sh\u01d2u zh\u01ceng sh\u00e0ng m\u00e0n m\u00e0n d\u00ec p\u012bn xi\u011b \u201c d o l l \u201d zh\u00e8 ge c\u00ed\uff0c zh\u00e8 ge j\u01d4 d\u00f2ng r\u00e0ng w\u01d2 du\u00ec sh\u01d2u zh\u01d0 y\u00f3u x\u00ec ch\u01cen sh\u0113ng le x\u00ecng q\u00f9\uff0c b\u00ecng qi\u011b m\u00f3 f\u01ceng zhe z\u00e0i t\u0101 sh\u01d2u sh\u00e0ng hu\u00e0\u3002",
            "y\u01d2u y\u00ec ti\u0101n\uff0c sh\u0101 l\u00ec w\u00e9n xi\u01ceo ji\u011b g\u011bi w\u01d2 y\u00ed g\u00e8 g\u00e8ng d\u00e0 de x\u012bn b\u00f9 w\u00e1 wa\uff0c t\u00f3ng sh\u00ed y\u011b b\u01ce yu\u00e1n l\u00e1i n\u00e0 ge b\u00f9 w\u00e1 wa n\u00e1 l\u00e1i f\u00e0ng z\u00e0i w\u01d2 de x\u012b sh\u00e0ng\uff0c r\u00e1n h\u00f2u z\u00e0i w\u01d2 sh\u01d2u sh\u00e0ng p\u012bn xi\u011b \u201c d o l l \u201d zh\u00e8 ge c\u00ed\uff0c y\u00f2ng y\u00ec z\u00e0i y\u00fa g\u00e0o s\u00f9 w\u01d2 zh\u00e8 ge d\u00e0 de b\u00f9 w\u00e1 wa h\u00e9 xi\u01ceo b\u00f9 w\u00e1 wa y\u00ed y\u00e0ng d\u014du ji\u00e0o zu\u00f2 \u201c d o l l \u201d\u3002",
            "w\u01d2 men y\u00e1n zhe xi\u01ceo l\u00f9 s\u00e0n b\u00f9 d\u00e0o j\u01d0ng f\u00e1ng\uff0c f\u00e1ng d\u01d0ng sh\u00e0ng sh\u00e8ng k\u0101i de j\u012bn y\u00edn hu\u0101 f\u0113n f\u0101ng p\u016b b\u00ed\u3002 sh\u0101 l\u00ec w\u00e9n l\u01ceo sh\u012b b\u01ce w\u01d2 de y\u00ec zh\u012b sh\u01d2u f\u00e0ng z\u00e0i p\u0113n shu\u01d0 k\u01d2u xi\u00e0\uff0c y\u00ec g\u01d4 q\u012bng li\u00e1ng de shu\u01d0 z\u00e0i w\u01d2 sh\u01d2u sh\u00e0ng li\u00fa gu\u00f2\u3002 t\u0101 z\u00e0i w\u01d2 de l\u00ecng y\u00ec zh\u012b sh\u01d2u sh\u00e0ng p\u012bn xi\u011b \u201c w a t e r \u201d\u2014\u2014 \u201c shu\u01d0 \u201d\uff0c q\u01d0 xi\u0101n xi\u011b d\u00e9 h\u011bn m\u00e0n\uff0c d\u00ec \u00e8r bi\u00e0n ji\u00f9 xi\u011b d\u00e9 ku\u00e0i y\u00ec xi\u0113\u3002 w\u01d2 j\u00ecng j\u00ecng d\u00ec zh\u00e0n zhe\uff0c zh\u00f9 y\u00ec t\u0101 sh\u01d2u zh\u01d0 de d\u00f2ng zu\u00f2\u3002 t\u016b r\u00e1n ji\u0101n\uff0c w\u01d2 hu\u01ceng r\u00e1n d\u00e0 w\u00f9\uff0c y\u01d2u y\u00ec zh\u01d2ng sh\u00e9n q\u00ed de g\u01cen ju\u00e9 z\u00e0i w\u01d2 n\u01ceo zh\u014dng j\u012b d\u00e0ng\uff0c w\u01d2 y\u00ed xi\u00e0 z\u01d0 l\u01d0 ji\u011b le y\u01d4 y\u00e1n w\u00e9n z\u00ec de \u00e0o m\u00ec le\uff0c zh\u012b d\u00e0o le \u201c shu\u01d0 \u201d zh\u00e8 g\u00e8 c\u00ed ji\u00f9 sh\u00ec zh\u01d0 zh\u00e8ng z\u00e0i w\u01d2 sh\u01d2u sh\u00e0ng li\u00fa gu\u00f2 de zh\u00e8 zh\u01d2ng q\u012bng li\u00e1ng \u00e9r q\u00ed mi\u00e0o de d\u014dng x\u012b\u3002",
            "shu\u01d0 hu\u00e0n x\u01d0ng le w\u01d2 de l\u00edng h\u00fan\uff0c b\u00ecng j\u01d0 y\u01d4 w\u01d2 gu\u0101ng m\u00edng\u3001 x\u012b w\u00e0ng\u3001 ku\u00e0i l\u00e8 h\u00e9 z\u00ec y\u00f3u\u3002",
            "j\u01d0ng f\u00e1ng de j\u012bng l\u00ec sh\u01d0 w\u01d2 qi\u00fa zh\u012b de y\u00f9 w\u00e0ng y\u00f3u r\u00e1n \u00e9r sh\u0113ng\u3002 a\uff01 yu\u00e1n l\u00e1i y\u01d4 zh\u00f2u w\u00e0n w\u00f9 d\u014du g\u00e8 y\u01d2u m\u00edng ch\u0113ng\uff0c m\u011bi g\u00e8 m\u00edng ch\u0113ng d\u014du n\u00e9ng q\u01d0 f\u0101 w\u01d2 x\u012bn de s\u012b xi\u01ceng\u3002 w\u01d2 k\u0101i sh\u01d0 y\u01d0 h\u00e0o q\u00ed de y\u01cen gu\u0101ng k\u00e0n d\u00e0i m\u011bi y\u00ed y\u00e0ng d\u014dng x\u012b\u3002 hu\u00ed d\u00e0o w\u016b l\u01d0\uff0c p\u00e8ng d\u00e0o de d\u014dng x\u012b s\u00ec h\u016b d\u014du y\u01d2u le sh\u0113ng m\u00ecng\u3002 w\u01d2 xi\u01ceng q\u01d0 le n\u00e0 g\u00e8 b\u00e8i w\u01d2 shu\u0101i su\u00ec de b\u00f9 w\u00e1 wa\uff0c m\u014d su\u01d2 zhe l\u00e1i d\u00e0o l\u00fa z\u01d0 g\u0113n qi\u00e1n\uff0c ji\u01cen q\u01d0 su\u00ec pi\u00e0n\uff0c xi\u01ceng b\u01ce t\u0101 men p\u012bn c\u00f2u q\u01d0 l\u00e1i\uff0c d\u00e0n z\u011bn me y\u011b p\u012bn b\u00f9 h\u01ceo\u3002 xi\u01ceng q\u01d0 g\u0101ng c\u00e1i de su\u01d2 zu\u00f2 su\u01d2 w\u00e8i\uff0c w\u01d2 hu\u01d0 h\u00e8n m\u00f2 j\u00ed\uff0c li\u01ceng y\u01cen j\u00ecn m\u01cen le l\u00e8i shu\u01d0\uff0c zh\u00e8 sh\u00ec sh\u0113ng p\u00edng d\u00ec y\u012b c\u00ec\u3002",
            "n\u00e0 y\u00ec ti\u0101n\uff0c w\u01d2 xu\u00e9 hu\u00ec le b\u00f9 sh\u01ceo c\u00ed\uff0c p\u00ec r\u00fa \u201c f\u00f9 q\u012bn \u201d\uff08f a t h e r\uff09\u3001 \u201c m\u01d4 q\u012bn \u201d\uff08m o t h e r\uff09\u3001 \u201c m\u00e8i mei \u201d\uff08s i s t e r\uff09\u3001 \u201c l\u01ceo sh\u012b \u201d\uff08t e a c h e r\uff09 d\u011bng\u3002 zh\u00e8 xi\u0113 c\u00ed sh\u01d0 zh\u011bng g\u00e8 sh\u00ec ji\u00e8 z\u00e0i w\u01d2 mi\u00e0n qi\u00e1n bi\u00e0n de hu\u0101 tu\u00e1n j\u01d0n c\u00f9\uff0c m\u011bi b\u00fa sh\u00e8ng sh\u014du\u3002 j\u00ec de n\u00e0 ge m\u011bi h\u01ceo de y\u00e8 w\u01cen\uff0c w\u01d2 d\u00fa z\u00ec t\u01ceng z\u00e0i chu\u00e1ng sh\u00e0ng\uff0c x\u012bn zh\u014dng ch\u014dng m\u01cen le x\u01d0 yu\u00e8\uff0c q\u01d0 p\u00e0n zhe x\u012bn de y\u00ec ti\u0101n ku\u00e0i xi\u0113 l\u00e1i d\u00e0o\u3002 a\uff01 sh\u00ec ji\u00e8 sh\u00e0ng h\u00e1i y\u01d2u b\u01d0 w\u01d2 g\u00e8ng x\u00ecng f\u00fa de h\u00e1i zi ma\uff1f"
          ],
          annotations: [
            { id: 1, term: "花团锦簇", pinyin: "huātuánjǐncù", definition: "形容五彩缤纷、十分华丽的景象。簇，丛集、聚集。", definitionEn: "Describes a colorful, gorgeous scene. 簇 means clustered together." },
            { id: 2, term: "美不胜收", pinyin: "měibùshèngshōu", definition: "美好的东西太多，一时接受不完。胜，完、尽。", definitionEn: "So many beautiful things that one cannot take them all in. 胜 means to exhaust." },
            { id: 3, term: "不求甚解", pinyin: "bùqiúshènjiě", definition: "原指领会大意。现在多指读书学习只求懂得大概，不求深刻了解。", definitionEn: "Originally meant to grasp the general meaning. Now often means only seeking a rough understanding without deep comprehension." }
          ],
          readingTips: [{
            cn: "阅读文章，要关注标题，尤其是那些能揭示主旨的标题。本文题为《再塑生命的人》，为什么生命要\u201C再塑\u201D呢？谁来\u201C再塑\u201D生命？如何做到的？带着这些问题阅读课文，你就会注意到一些与标题照应的语句。文章在叙事之中常常穿插一些抒情或议论，从中可以了解到\u201C再塑生命\u201D过程中\u201C我\u201D的心理感受。",
            en: "When reading, pay attention to the title, especially those that reveal the theme. This text is titled 'The One Who Remade My Life' — why does life need 'remaking'? Who 'remakes' it? How? Reading with these questions, you'll notice sentences that echo the title. The text often interweaves narration with lyrical or reflective passages, revealing the narrator's psychological experience during the 'remaking' process."
          }],
          teachingPoints: [
            { cn: "学习在叙事中穿插抒情和议论的写法。", en: "Learn the technique of interweaving narration with lyrical and reflective passages." },
            { cn: "理解\u201C再塑生命\u201D的含义——莎莉文老师对海伦的教育不仅传授知识，更唤醒了她的灵魂。", en: "Understand the meaning of 'remaking life' — Sullivan's education not only imparted knowledge but also awakened Helen's soul." }
          ],
          parentTips: [
            { cn: "可以和孩子一起阅读《假如给我三天光明》全书，讨论面对困难时应有的勇气和毅力。", en: "Read Three Days to See together with your child and discuss the courage and perseverance needed when facing difficulties." }
          ]
        },
        {
          id: 11,
          title: "《论语》十二章",
          titleEn: "Twelve Chapters from The Analects",
          difficulty: 3,
          author: "孔子及其弟子",
          authorEn: "Confucius and His Disciples",
          source: "选自《论语译注》（中华书局1980年版）。《论语》，儒家经典著作，记录孔子及其弟子言行的一部书。共20篇。",
          sourceEn: "Selected from Annotated Translation of The Analects (Zhonghua Book Company, 1980). The Analects is a Confucian classic recording the words and deeds of Confucius and his disciples, in 20 chapters.",
          vocabWords: [
            {word:'不亦乐乎',pinyin:'bù yì lè hū',en:'is it not a joy',sentence:'有朋自远方来，不亦乐乎？',sentenceEn:'Is it not a joy to have friends come from afar?'},
            {word:'三省',pinyin:'sān xǐng',en:'examine oneself in three ways',sentence:'吾日三省吾身。',sentenceEn:'I examine myself three times a day.'},
            {word:'温故知新',pinyin:'wēn gù zhī xīn',en:'review the old to learn the new',sentence:'温故而知新，可以为师矣。',sentenceEn:'Review the old and learn the new, and you can be a teacher.'},
            {word:'逾矩',pinyin:'yú jǔ',en:'overstep the rules',sentence:'七十而从心所欲，不逾矩。',sentenceEn:'At seventy I could follow my heart desire without overstepping the rules.'},
            {word:'博学',pinyin:'bó xué',en:'broad learning',sentence:'博学而笃志，切问而近思。',sentenceEn:'Learn broadly and hold firm to your aspirations, question earnestly and reflect on what is near.'}
          ],
          footnotes: [
            {term:"\u4e0d\u4ea6\u4e50\u4e4e", termEn:"is it not a joy", definition:"\u3010b\u00f9 y\u00ec l\u00e8 h\u016b\u3011is it not a joy\u3002", definitionEn:"is it not a joy"},
            {term:"\u4e09\u7701", termEn:"examine oneself in three ways", definition:"\u3010s\u0101n x\u01d0ng\u3011examine oneself in three ways\u3002", definitionEn:"examine oneself in three ways"},
            {term:"\u6e29\u6545\u77e5\u65b0", termEn:"review the old to learn the new", definition:"\u3010w\u0113n g\u00f9 zh\u012b x\u012bn\u3011review the old to learn the new\u3002", definitionEn:"review the old to learn the new"},
            {term:"\u903e\u77e9", termEn:"overstep the rules", definition:"\u3010y\u00fa j\u01d4\u3011overstep the rules\u3002", definitionEn:"overstep the rules"},
            {term:"\u535a\u5b66", termEn:"broad learning", definition:"\u3010b\u00f3 xu\u00e9\u3011broad learning\u3002", definitionEn:"broad learning"}
          ],
          readingTips: [
            {cn:"\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f", en:"Pay attention to the author's narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?"},
            {cn:"\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f", en:"After reading, think: what theme does the author convey? How does the title relate to the content?"}
          ],
          grammarPoints: [
            {point:'对偶',pointEn:'duì ǒu',example:'parallelism',exampleEn:'学而不思则罔，思而不学则殆。',explanation:'Learning without thinking leads to confusion; thinking without learning leads to peril.',explanationEn:'用对偶句式阐明学与思的辩证关系'},
            {point:'比喻论证',pointEn:'bǐ yù lùn zhèng',example:'argument by analogy',exampleEn:'逝者如斯夫，不舍昼夜。',explanation:'Time flows on like this river, not ceasing day or night.',explanationEn:'以河水比喻时间流逝，感叹光阴易逝'}
          ],
          authorBio: {
            cn: "孔子（前551—前479），名丘，字仲尼，鲁国陬邑（今山东曲阜东南）人，春秋末期思想家、政治家、教育家。",
            en: "Confucius (551–479 BC), named Qiu, courtesy name Zhongni, was from Zou in the State of Lu (now southeast of Qufu, Shandong). He was a thinker, statesman, and educator of the late Spring and Autumn period."
          },
          isSelfRead: false,
          preview: [
            { cn: "孔子是儒家学说的创始人，被后人尊称为\u201C圣人\u201D\u201C至圣先师\u201D。关于孔子，你知道他的哪些故事呢？", en: "Confucius is the founder of Confucianism, revered as 'the Sage' and 'the Supreme Teacher.' What stories about Confucius do you know?" }
          ],
          text: [
        "\u5b50\u66f0\uff1a\u201c\u5b66\u800c\u65f6\u4e60\u4e4b\uff0c\u4e0d\u4ea6\u8bf4\u4e4e\uff1f\u6709\u670b\u81ea\u8fdc\u65b9\u6765\uff0c\u4e0d\u4ea6\u4e50\u4e4e\uff1f\u4eba\u4e0d\u77e5\u800c\u4e0d\u6120\uff0c\u4e0d\u4ea6\u541b\u5b50\u4e4e\uff1f\u201d\uff08\u300a\u5b66\u800c\u300b\uff09",
        "\u66fe\u5b50\u66f0\uff1a\u201c\u543e\u65e5\u4e09\u7701\u543e\u8eab\uff1a\u4e3a\u4eba\u8c0b\u800c\u4e0d\u5fe0\u4e4e\uff1f\u4e0e\u670b\u53cb\u4ea4\u800c\u4e0d\u4fe1\u4e4e\uff1f\u4f20\u4e0d\u4e60\u4e4e\uff1f\u201d\uff08\u300a\u5b66\u800c\u300b\uff09",
        "\u5b50\u66f0\uff1a\u201c\u543e\u5341\u6709\u4e94\u800c\u5fd7\u4e8e\u5b66\uff0c\u4e09\u5341\u800c\u7acb\uff0c\u56db\u5341\u800c\u4e0d\u60d1\uff0c\u4e94\u5341\u800c\u77e5\u5929\u547d\uff0c\u516d\u5341\u800c\u8033\u987a\uff0c\u4e03\u5341\u800c\u4ece\u5fc3\u6240\u6b32\uff0c\u4e0d\u903e\u77e9\u3002\u201d\uff08\u300a\u4e3a\u653f\u300b\uff09",
        "\u5b50\u66f0\uff1a\u201c\u6e29\u6545\u800c\u77e5\u65b0\uff0c\u53ef\u4ee5\u4e3a\u5e08\u77e3\u3002\u201d\uff08\u300a\u4e3a\u653f\u300b\uff09",
        "\u5b50\u66f0\uff1a\u201c\u5b66\u800c\u4e0d\u601d\u5219\u7f54\uff0c\u601d\u800c\u4e0d\u5b66\u5219\u6b86\u3002\u201d\uff08\u300a\u4e3a\u653f\u300b\uff09",
        "\u5b50\u66f0\uff1a\u201c\u8d24\u54c9\uff0c\u56de\u4e5f\uff01\u4e00\u7baa\u98df\uff0c\u4e00\u74e2\u996e\uff0c\u5728\u964b\u5df7\uff0c\u4eba\u4e0d\u582a\u5176\u5fe7\uff0c\u56de\u4e5f\u4e0d\u6539\u5176\u4e50\u3002\u8d24\u54c9\uff0c\u56de\u4e5f\uff01\u201d\uff08\u300a\u96cd\u4e5f\u300b\uff09",
        "\u5b50\u66f0\uff1a\u201c\u77e5\u4e4b\u8005\u4e0d\u5982\u597d\u4e4b\u8005\uff0c\u597d\u4e4b\u8005\u4e0d\u5982\u4e50\u4e4b\u8005\u3002\u201d\uff08\u300a\u96cd\u4e5f\u300b\uff09",
        "\u5b50\u66f0\uff1a\u201c\u996d\u758f\u98df\uff0c\u996e\u6c34\uff0c\u66f2\u80b1\u800c\u6795\u4e4b\uff0c\u4e50\u4ea6\u5728\u5176\u4e2d\u77e3\u3002\u4e0d\u4e49\u800c\u5bcc\u4e14\u8d35\uff0c\u4e8e\u6211\u5982\u6d6e\u4e91\u3002\u201d\uff08\u300a\u8ff0\u800c\u300b\uff09",
        "\u5b50\u66f0\uff1a\u201c\u4e09\u4eba\u884c\uff0c\u5fc5\u6709\u6211\u5e08\u7109\u3002\u62e9\u5176\u5584\u8005\u800c\u4ece\u4e4b\uff0c\u5176\u4e0d\u5584\u8005\u800c\u6539\u4e4b\u3002\u201d\uff08\u300a\u8ff0\u800c\u300b\uff09",
        "\u5b50\u5728\u5ddd\u4e0a\u66f0\uff1a\u201c\u901d\u8005\u5982\u65af\u592b\uff0c\u4e0d\u820d\u663c\u591c\u3002\u201d\uff08\u300a\u5b50\u7f55\u300b\uff09",
        "\u5b50\u66f0\uff1a\u201c\u4e09\u519b\u53ef\u593a\u5e05\u4e5f\uff0c\u5339\u592b\u4e0d\u53ef\u593a\u5fd7\u4e5f\u3002\u201d\uff08\u300a\u5b50\u7f55\u300b\uff09",
        "\u5b50\u590f\u66f0\uff1a\u201c\u535a\u5b66\u800c\u7b03\u5fd7\uff0c\u5207\u95ee\u800c\u8fd1\u601d\uff0c\u4ec1\u5728\u5176\u4e2d\u77e3\u3002\u201d\uff08\u300a\u5b50\u5f20\u300b\uff09"
      ],
          textEn: [
        "The Master said: ‘Is it not a pleasure to learn and practice what you have learned in due time? Is it not a delight when friends come from afar? Is it not the mark of a gentleman to feel no resentment when others do not recognize you?’ (Xue Er)",
        "Zeng Zi said: ‘Each day I examine myself on three counts: Have I been faithful in my dealings with others? Have I been trustworthy with my friends? Have I practiced what has been taught to me?’ (Xue Er)",
        "The Master said: ‘At fifteen I set my heart on learning; at thirty I stood firm; at forty I had no doubts; at fifty I knew Heaven’s decree; at sixty my ear was attuned; at seventy I could follow my heart’s desire without overstepping the bounds.’ (Wei Zheng)",
        "The Master said: ‘One who reviews the old and learns the new may serve as a teacher.’ (Wei Zheng)",
        "The Master said: ‘Learning without thought is confusion; thought without learning is perilous.’ (Wei Zheng)",
        "The Master said: ‘How admirable is Hui! A single bowl of rice, a single gourd of water, living in a narrow lane — others could not endure such hardship, yet Hui did not change his cheerfulness. How admirable is Hui!’ (Yong Ye)",
        "The Master said: ‘Those who know it are not as good as those who love it; those who love it are not as good as those who delight in it.’ (Yong Ye)",
        "The Master said: ‘Eating coarse grain, drinking water, bending one’s arm for a pillow — joy lies in these things too. Riches and honors obtained through unrighteousness are to me like floating clouds.’ (Shu Er)",
        "The Master said: ‘When three walk together, I am sure to find a teacher among them. I choose what is good and follow it, and change what is not good.’ (Shu Er)",
        "Standing by a river, the Master said: ‘What passes is like this — it does not stop day or night!’ (Zi Han)",
        "The Master said: ‘An army can be deprived of its commander, but a common man cannot be deprived of his purpose.’ (Zi Han)",
        "Zi Xia said: ‘Broad learning with firm resolve, earnest questioning with close reflection — benevolence lies within these.’ (Zi Zhang)"
      ],
          textPinyin: [
            "z\u01d0 yu\u0113\uff1a \u201c xu\u00e9 \u00e9r sh\u00ed x\u00ed zh\u012b\uff0c b\u00fa y\u00ec shu\u014d h\u016b\uff1f y\u01d2u p\u00e9ng z\u00ec yu\u01cen f\u0101ng l\u00e1i\uff0c b\u00fa y\u00ec l\u00e8 h\u016b\uff1f r\u00e9n b\u00f9 zh\u012b \u00e9r b\u00fa y\u00f9n\uff0c b\u00fa y\u00ec j\u016bn z\u01d0 h\u016b\uff1f \u201d\uff08\u300axu\u00e9 \u00e9r\u300b\uff09",
            "c\u00e9ng z\u01d0 yu\u0113\uff1a \u201c w\u00fa r\u00ec s\u0101n sh\u011bng w\u00fa sh\u0113n\uff1a w\u00e8i r\u00e9n m\u00f3u \u00e9r b\u00f9 zh\u014dng h\u016b\uff1f y\u01d4 p\u00e9ng y\u01d2u ji\u0101o \u00e9r b\u00fa x\u00ecn h\u016b\uff1f chu\u00e1n b\u00f9 x\u00ed h\u016b\uff1f \u201d\uff08\u300axu\u00e9 \u00e9r\u300b\uff09",
            "z\u01d0 yu\u0113\uff1a \u201c w\u00fa sh\u00ed y\u01d2u w\u01d4 \u00e9r zh\u00ec y\u00fa xu\u00e9\uff0c s\u0101n sh\u00ed \u00e9r l\u00ec\uff0c s\u00ec sh\u00ed \u00e9r b\u00fa hu\u00f2\uff0c w\u01d4 sh\u00ed \u00e9r zh\u012b ti\u0101n m\u00ecng\uff0c li\u00f9 sh\u00ed \u00e9r \u011br sh\u00f9n\uff0c q\u012b sh\u00ed \u00e9r c\u00f3ng x\u012bn su\u01d2 y\u00f9\uff0c b\u00f9 y\u00fa j\u01d4\u3002 \u201d\uff08\u300aw\u00e9i zh\u00e8ng\u300b\uff09",
            "z\u01d0 yu\u0113\uff1a \u201c w\u0113n g\u00f9 \u00e9r zh\u012b x\u012bn\uff0c k\u011b y\u01d0 w\u00e9i sh\u012b y\u01d0\u3002 \u201d\uff08\u300aw\u00e9i zh\u00e8ng\u300b\uff09",
            "z\u01d0 yu\u0113\uff1a \u201c xu\u00e9 \u00e9r b\u00f9 s\u012b z\u00e9 w\u01ceng\uff0c s\u012b \u00e9r b\u00f9 xu\u00e9 z\u00e9 d\u00e0i\u3002 \u201d\uff08\u300aw\u00e9i zh\u00e8ng\u300b\uff09",
            "z\u01d0 yu\u0113\uff1a \u201c xi\u00e1n z\u0101i\uff0c hu\u00ed y\u011b\uff01 y\u00ec d\u0101n sh\u00ed\uff0c y\u00ec pi\u00e1o y\u01d0n\uff0c z\u00e0i l\u00f2u xi\u00e0ng\uff0c r\u00e9n b\u00f9 k\u0101n q\u00ed y\u014du\uff0c hu\u00ed y\u011b b\u00f9 g\u01cei q\u00ed l\u00e8\u3002 xi\u00e1n z\u0101i\uff0c hu\u00ed y\u011b\uff01 \u201d\uff08\u300ay\u014dng y\u011b\u300b\uff09",
            "z\u01d0 yu\u0113\uff1a \u201c zh\u012b zh\u012b zh\u011b b\u00f9 r\u00fa h\u01ceo zh\u012b zh\u011b\uff0c h\u01ceo zh\u012b zh\u011b b\u00f9 r\u00fa l\u00e8 zh\u012b zh\u011b\u3002 \u201d\uff08\u300ay\u014dng y\u011b\u300b\uff09",
            "z\u01d0 yu\u0113\uff1a \u201c f\u00e0n sh\u016b sh\u00ed\uff0c y\u01d0n shu\u01d0\uff0c q\u016b g\u014dng \u00e9r zh\u011bn zh\u012b\uff0c l\u00e8 y\u00ec z\u00e0i q\u00ed zh\u014dng y\u01d0\u3002 b\u00fa y\u00ec \u00e9r f\u00f9 qi\u011b gu\u00ec\uff0c y\u00fa w\u01d2 r\u00fa f\u00fa y\u00fan\u3002 \u201d\uff08\u300ash\u00f9 \u00e9r\u300b\uff09",
            "z\u01d0 yu\u0113\uff1a \u201c s\u0101n r\u00e9n x\u00edng\uff0c b\u00ec y\u01d2u w\u01d2 sh\u012b y\u0101n\u3002 z\u00e9 q\u00ed sh\u00e0n zh\u011b \u00e9r c\u00f3ng zh\u012b\uff0c q\u00ed b\u00fa sh\u00e0n zh\u011b \u00e9r g\u01cei zh\u012b\u3002 \u201d\uff08\u300ash\u00f9 \u00e9r\u300b\uff09",
            "z\u01d0 z\u00e0i chu\u0101n sh\u00e0ng yu\u0113\uff1a \u201c sh\u00ec zh\u011b r\u00fa s\u012b f\u016b\uff0c b\u00fa sh\u00e8 zh\u00f2u y\u00e8\u3002 \u201d\uff08\u300az\u01d0 h\u01cen\u300b\uff09",
            "z\u01d0 yu\u0113\uff1a \u201c s\u0101n j\u016bn k\u011b du\u00f3 shu\u00e0i y\u011b\uff0c p\u01d0 f\u016b b\u00f9 k\u011b du\u00f3 zh\u00ec y\u011b\u3002 \u201d\uff08\u300az\u01d0 h\u01cen\u300b\uff09",
            "z\u01d0 xi\u00e0 yu\u0113\uff1a \u201c b\u00f3 xu\u00e9 \u00e9r d\u01d4 zh\u00ec\uff0c qi\u00e8 w\u00e8n \u00e9r j\u00ecn s\u012b\uff0c r\u00e9n z\u00e0i q\u00ed zh\u014dng y\u01d0\u3002 \u201d\uff08\u300az\u01d0 zh\u0101ng\u300b\uff09"
          ],
          annotations: [
            { id: 1, term: "说", pinyin: "yuè", definition: "同\u201C悦\u201D，愉快。", definitionEn: "Same as 悦, meaning pleased, happy." },
            { id: 2, term: "愠", pinyin: "yùn", definition: "生气，恼怒。", definitionEn: "Angry, resentful." },
            { id: 3, term: "三省", pinyin: "sānxǐng", definition: "多次进行自我检查。三，泛指多次。省，自我检查、反省。", definitionEn: "To examine oneself multiple times. 三 broadly means multiple times; 省 means self-examination." },
            { id: 4, term: "罔", pinyin: "wǎng", definition: "迷惑，感到迷茫而无所适从。", definitionEn: "Confused, bewildered and directionless." },
            { id: 5, term: "殆", pinyin: "dài", definition: "疑惑。", definitionEn: "Doubtful, uncertain." },
            { id: 6, term: "逾矩", pinyin: "yújǔ", definition: "越过法度。逾，越过。矩，法度。", definitionEn: "To overstep the bounds. 逾 means to exceed; 矩 means rules or norms." },
            { id: 7, term: "笃志", pinyin: "dǔzhì", definition: "坚定志向。笃，坚定。", definitionEn: "To hold firm resolve. 笃 means firm, steadfast." }
          ],
          thinkExplore: [
            { cn: "下列句子都是关于修身的，参考课文注释，理解其意思。", en: "The following sentences are all about self-cultivation. Using the notes, understand their meanings." },
            { cn: "孔子及其弟子在学习态度和学习方法上有哪些观点？选择其中一点谈谈你的体会。", en: "What views did Confucius and his disciples hold on learning attitudes and methods? Choose one and share your thoughts." }
          ],
          accumExtend: [
            { cn: "背诵全文。", en: "Recite the entire text from memory." },
            { cn: "《论语》中有不少语句逐渐演化并固定为成语，如\u201C温故知新\u201D\u201C不耻下问\u201D\u201C诲人不倦\u201D等。你还知道哪些？", en: "Many phrases from The Analects have evolved into idiomatic expressions, such as 'review the old to know the new,' 'not ashamed to learn from inferiors,' 'tireless in teaching.' What others do you know?" }
          ],
          teachingPoints: [
            { cn: "初步学习文言文的阅读方法：借助注释理解大意。", en: "Begin learning methods for reading classical Chinese: use annotations to understand the general meaning." },
            { cn: "理解孔子关于学习与修身的思想精华。", en: "Understand the essence of Confucius's thought on learning and self-cultivation." }
          ],
          parentTips: [
            { cn: "与孩子一起背诵《论语》名句，讨论其在日常生活中的实际意义。", en: "Memorize famous Analects passages together and discuss their practical significance in daily life." }
          ]
        }
      ],
      writing: {
        title: "写人要抓住特点",
        titleEn: "Capture Character Traits When Writing About People",
        vocabWords: [
          {word:'特点',pinyin:'tè diǎn',en:'characteristic',sentence:'写人要抓住人物的突出特点。',sentenceEn:'When writing about people, capture their outstanding characteristics.'},
          {word:'外貌',pinyin:'wài mào',en:'appearance',sentence:'描写人物可以从外貌入手。',sentenceEn:'Describing people can start from their appearance.'},
          {word:'神态',pinyin:'shén tài',en:'expression; demeanor',sentence:'注意捕捉人物的神态变化。',sentenceEn:'Pay attention to capturing changes in expressions.'},
          {word:'语言',pinyin:'yǔ yán',en:'speech; language',sentence:'人物的语言要符合身份和性格。',sentenceEn:'Character speech should match identity and personality.'},
          {word:'动作',pinyin:'dòng zuò',en:'action; movement',sentence:'通过动作描写展现人物性格。',sentenceEn:'Show character personality through action description.'}
        ],
        content: {
          cn: "记叙文写作除了记事，也常常写人。每个人都有不同的特点。要写好一个人物，首先要学会细心观察，抓住人物的特点。描写外貌，可写人物的五官、头发与胡须，也可写脸色、神情。\u201C人\u201D从来都不是孤立存在的，要把人放在事件中写，写他富有个性的语言、动作行为和心理活动。",
          en: "Narrative writing involves not only recording events but also portraying people. Everyone has unique characteristics. To write a good character, first learn to observe carefully and capture their distinctive traits. For appearance, describe facial features, hair, complexion, and expressions. People never exist in isolation — place them in events and write their distinctive language, actions, and inner thoughts."
        }
      },
      readWrite: null,
      comprehensiveLearning: null,
      classicBookGuide: {
        title: "《朝花夕拾》消除与经典的隔膜",
        titleEn: "Dawn Blossoms Plucked at Dusk: Bridging the Gap with Classics",
        vocabWords: [
          {word:'朝花夕拾',pinyin:'zhāo huā xī shí',en:'dawn blossoms plucked at dusk',sentence:'鲁迅用朝花夕拾记录了童年往事。',sentenceEn:'Lu Xun used Dawn Blossoms Plucked at Dusk to record childhood memories.'},
          {word:'回忆',pinyin:'huí yì',en:'reminisce; recall',sentence:'这是一部回忆性散文集。',sentenceEn:'This is a collection of reminiscent essays.'},
          {word:'经典',pinyin:'jīng diǎn',en:'classic',sentence:'消除与经典的隔膜。',sentenceEn:'Bridge the gap with classics.'},
          {word:'散文',pinyin:'sǎn wén',en:'prose; essay',sentence:'鲁迅的散文充满了深情与幽默。',sentenceEn:'The prose of Lu Xun is full of deep feeling and humor.'},
          {word:'隔膜',pinyin:'gé mó',en:'barrier; estrangement',sentence:'消除与经典之间的隔膜需要耐心阅读。',sentenceEn:'Bridging the barrier with classics requires patient reading.'}
        ],
        content: {
          cn: "《朝花夕拾》是鲁迅1926年撰写的十篇回忆性散文的结集。这组散文是鲁迅作品中最富生活情趣的篇章，可借此了解鲁迅从幼年到青年时期的生活道路和心路历程。读经典作品，会丰富我们的人生感受和经验，可以帮助我们思考许多人生问题。",
          en: "Dawn Blossoms Plucked at Dusk is a collection of ten reminiscent essays written by Lu Xun in 1926. These essays are the most life-rich chapters among Lu Xun's works, through which we can understand his life path and inner journey from childhood to youth. Reading classics enriches our life experiences and helps us think about many life questions."
        }
      },
      extracurricularPoetry: [
        {
          title: "峨眉山月歌",
          titleEn: "Song of Mount Emei Moon",
          author: "李白",
          authorEn: "Li Bai",
          vocabWords: [
            {word:'峨眉',pinyin:'é méi',en:'Mount Emei',sentence:'峨眉山月半轮秋。',sentenceEn:'Above Mount Emei the moon is half a wheel in autumn.'},
            {word:'半轮',pinyin:'bàn lún',en:'half wheel',sentence:'峨眉山月半轮秋。',sentenceEn:'Above Mount Emei the moon is half a wheel in autumn.'},
            {word:'思君',pinyin:'sī jūn',en:'miss you',sentence:'思君不见下渝州。',sentenceEn:'Missing you but unable to see you, I go down to Yuzhou.'},
            {word:'平羌',pinyin:'píng qiāng',en:'Pingqiang River',sentence:'影入平羌江水流。',sentenceEn:'Its reflection enters the flowing Pingqiang River.'},
            {word:'渝州',pinyin:'yú zhōu',en:'Yuzhou',sentence:'思君不见下渝州。',sentenceEn:'Missing you but unable to see you, I go down to Yuzhou.'}
          ],
          text: "峨眉山月半轮秋，影入平羌江水流。\n夜发清溪向三峡，思君不见下渝州。",
          textEn: "A half-moon of autumn hangs over Mount Emei, / Its reflection enters the Pingqiang River and flows away. / Setting out by night from Qingxi toward the Three Gorges, / I think of you, unseen, as I descend toward Yuzhou."
        },
        {
          title: "江南逢李龟年",
          titleEn: "Meeting Li Guinian South of the Yangtze",
          author: "杜甫",
          authorEn: "Du Fu",
          vocabWords: [
            {word:'寻常',pinyin:'xún cháng',en:'ordinary; common',sentence:'岐王宅里寻常见。',sentenceEn:'In Prince Qi residence, you were commonly seen.'},
            {word:'崔九',pinyin:'cuī jiǔ',en:'Cui Jiu (a patron)',sentence:'崔九堂前几度闻。',sentenceEn:'At Cui Jiu hall, several times heard.'},
            {word:'落花',pinyin:'luò huā',en:'falling flowers',sentence:'正是江南好风景，落花时节又逢君。',sentenceEn:'Just when the scenery of Jiangnan is finest, in the season of falling flowers, I meet you again.'},
            {word:'风景',pinyin:'fēng jǐng',en:'scenery',sentence:'正是江南好风景。',sentenceEn:'Just when the scenery of Jiangnan is finest.'},
            {word:'感慨',pinyin:'gǎn kǎi',en:'sigh with emotion',sentence:'诗人借重逢感慨世事沧桑。',sentenceEn:'The poet sighs about the changes of the world through their reunion.'}
          ],
          text: "岐王宅里寻常见，崔九堂前几度闻。\n正是江南好风景，落花时节又逢君。",
          textEn: "In Prince Qi's mansion we often met, / Before Cui Jiu's hall I heard you many times. / Now in the fine scenery south of the river, / In the season of falling flowers, we meet again."
        },
        {
          title: "行军九日思长安故园",
          titleEn: "Thinking of Home on the Ninth Day While Marching",
          author: "岑参",
          authorEn: "Cen Shen",
          vocabWords: [
            {word:'强欲',pinyin:'qiǎng yù',en:'force oneself to',sentence:'强欲登高去。',sentenceEn:'Forcing oneself to climb high.'},
            {word:'登高',pinyin:'dēng gāo',en:'climb to a height',sentence:'强欲登高去，无人送酒来。',sentenceEn:'Forcing oneself to climb high, no one brings wine.'},
            {word:'故园',pinyin:'gù yuán',en:'old homeland',sentence:'遥怜故园菊。',sentenceEn:'From afar I feel tender for the chrysanthemums of my old homeland.'},
            {word:'战场',pinyin:'zhàn chǎng',en:'battlefield',sentence:'应傍战场开。',sentenceEn:'They must be blooming beside the battlefield.'},
            {word:'重阳',pinyin:'chóng yáng',en:'Double Ninth Festival',sentence:'九日是重阳节，有登高赏菊的习俗。',sentenceEn:'The ninth day is the Double Ninth Festival, with the custom of climbing high and admiring chrysanthemums.'}
          ],
          text: "强欲登高去，无人送酒来。\n遥怜故园菊，应傍战场开。",
          textEn: "I force myself to climb the height, but no one brings me wine. / Far away I pity my garden's chrysanthemums — / They must be blooming beside the battlefield."
        },
        {
          title: "夜上受降城闻笛",
          titleEn: "Hearing a Flute at Night atop Shoujiang City",
          author: "李益",
          authorEn: "Li Yi",
          vocabWords: [
            {word:'回乐烽',pinyin:'huí lè fēng',en:'Huile beacon tower',sentence:'回乐烽前沙似雪。',sentenceEn:'Before Huile beacon tower, the sand resembles snow.'},
            {word:'受降城',pinyin:'shòu jiàng chéng',en:'Shoujiang City',sentence:'受降城外月如霜。',sentenceEn:'Outside Shoujiang City, the moon is like frost.'},
            {word:'芦管',pinyin:'lú guǎn',en:'reed pipe',sentence:'不知何处吹芦管。',sentenceEn:'I know not where the reed pipe is blown.'},
            {word:'征人',pinyin:'zhēng rén',en:'frontier soldier',sentence:'一夜征人尽望乡。',sentenceEn:'All night the frontier soldiers gaze toward home.'},
            {word:'望乡',pinyin:'wàng xiāng',en:'gaze toward home',sentence:'一夜征人尽望乡。',sentenceEn:'All night the frontier soldiers gaze toward home.'}
          ],
          text: "回乐烽前沙似雪，受降城外月如霜。\n不知何处吹芦管，一夜征人尽望乡。",
          textEn: "Before Huile Beacon the sand is like snow, / Outside Shoujiang City the moon is like frost. / I don't know where the reed flute is playing — / All night, the soldiers gaze toward home."
        }
      ]
    },
    /* ─── Unit 4 人生之舟 ─── */
    {
      id: 4,
      title: "第四单元",
      titleEn: "Unit 4",
      theme: "人生之舟",
      themeEn: "Life's Journey",
      unitIntro: {
        cn: "拥有美好而充实的人生，是我们共同的心愿。本单元课文，从不同方面诠释了人生的意义和价值，有对人物美好品行的礼赞，有对人生经验的总结和思考，还有关于修身养德的谆谆教诲。令我们感动的，是其中彰显的理想光辉和人格力量。本单元继续学习默读。在课本上勾画出关键语句，并在你喜欢的或有疑惑的地方做标注。在整体把握文意的基础上，学会通过划分段落层次、抓关键语句等方法，理清作者思路。",
        en: "Having a beautiful and fulfilling life is our common wish. The texts in this unit interpret the meaning and value of life from different perspectives — praising noble character, summarizing life experiences, and offering earnest teachings on self-cultivation and moral development. What moves us is the shining idealism and strength of character displayed. Continue learning silent reading: mark key sentences and annotate where you like or have questions. Learn to organize the author's train of thought by dividing paragraphs and identifying key sentences."
      },
      type: "kewen",
      lessons: [
        {
          id: 12,
          title: "纪念白求恩",
          titleEn: "In Memory of Norman Bethune",
          difficulty: 3,
          author: "毛泽东",
          authorEn: "Mao Zedong",
          source: "选自《毛泽东选集》第二卷（人民出版社1991年版）。",
          sourceEn: "Selected from Selected Works of Mao Zedong, Vol. 2 (People's Publishing House, 1991).",
          vocabWords: [
            {word:'国际主义',pinyin:'guó jì zhǔ yì',en:'internationalism',sentence:'白求恩同志是国际主义的典范。',sentenceEn:'Comrade Bethune was a model of internationalism.'},
            {word:'热忱',pinyin:'rè chén',en:'enthusiasm; fervor',sentence:'对同志对人民的极端的热忱。',sentenceEn:'Extreme enthusiasm toward comrades and the people.'},
            {word:'纯粹',pinyin:'chún cuì',en:'pure; genuine',sentence:'一个纯粹的人，一个有道德的人。',sentenceEn:'A pure person, a moral person.'},
            {word:'狭隘',pinyin:'xiá ài',en:'narrow-minded',sentence:'这就是我们用以反对狭隘民族主义的国际主义。',sentenceEn:'This is the internationalism we use to oppose narrow-minded nationalism.'},
            {word:'精益求精',pinyin:'jīng yì qiú jīng',en:'strive for perfection',sentence:'他的医术是精益求精的。',sentenceEn:'His medical skills were ever striving for perfection.'}
          ],
          footnotes: [
            {term:"\u56fd\u9645\u4e3b\u4e49", termEn:"internationalism", definition:"\u3010gu\u00f3 j\u00ec zh\u01d4 y\u00ec\u3011internationalism\u3002", definitionEn:"internationalism"},
            {term:"\u70ed\u5ff1", termEn:"enthusiasm; fervor", definition:"\u3010r\u00e8 ch\u00e9n\u3011enthusiasm; fervor\u3002", definitionEn:"enthusiasm; fervor"},
            {term:"\u7eaf\u7cb9", termEn:"pure; genuine", definition:"\u3010ch\u00fan cu\u00ec\u3011pure; genuine\u3002", definitionEn:"pure; genuine"},
            {term:"\u72ed\u9698", termEn:"narrow-minded", definition:"\u3010xi\u00e1 \u00e0i\u3011narrow-minded\u3002", definitionEn:"narrow-minded"},
            {term:"\u7cbe\u76ca\u6c42\u7cbe", termEn:"strive for perfection", definition:"\u3010j\u012bng y\u00ec qi\u00fa j\u012bng\u3011strive for perfection\u3002", definitionEn:"strive for perfection"}
          ],
          readingTips: [
            {cn:"\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f", en:"Pay attention to the author's narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?"},
            {cn:"\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f", en:"After reading, think: what theme does the author convey? How does the title relate to the content?"}
          ],
          grammarPoints: [
            {point:'对比论证',pointEn:'duì bǐ lùn zhèng',example:'argument by contrast',exampleEn:'白求恩毫不利己专门利人的精神与不少人对工作不负责任进行对比。',explanation:'Contrast Bethune selfless spirit with many people being irresponsible.',explanationEn:'通过正反对比突出白求恩精神的伟大'},
            {point:'排比',pointEn:'pái bǐ',example:'parallelism',exampleEn:'一个高尚的人，一个纯粹的人，一个有道德的人，一个脱离了低级趣味的人，一个有益于人民的人。',explanation:'A noble person, a pure person, a moral person, a person free from vulgar tastes, a person beneficial to the people.',explanationEn:'五个并列短语层层递进，增强论证力度'}
          ],
          authorBio: {
            cn: "毛泽东（1893—1976），伟大的马克思主义者，无产阶级革命家、战略家和理论家。",
            en: "Mao Zedong (1893–1976) was a great Marxist, proletarian revolutionary, strategist, and theorist."
          },
          isSelfRead: false,
          preview: [
            { cn: "默读全文，参考题注，并搜集相关资料，了解白求恩其人其事。", en: "Read silently, refer to the notes, and collect relevant materials to learn about Bethune and his deeds." },
            { cn: "这是一篇在中国产生过极大影响的文章，很长一段时间内曾家喻户晓。", en: "This article has had enormous influence in China and was once known to every household." }
          ],
          text: [
        "\u767d\u6c42\u6069\u540c\u5fd7\u662f\u52a0\u62ff\u5927\u5171\u4ea7\u515a\u5458\uff0c\u4e94\u5341\u591a\u5c81\u4e86\uff0c\u4e3a\u4e86\u5e2e\u52a9\u4e2d\u56fd\u7684\u6297\u65e5\u6218\u4e89\uff0c\u53d7\u52a0\u62ff\u5927\u5171\u4ea7\u515a\u548c\u7f8e\u56fd\u5171\u4ea7\u515a\u7684\u6d3e\u9063\uff0c\u4e0d\u8fdc\u4e07\u91cc\uff0c\u6765\u5230\u4e2d\u56fd\u3002\u53bb\u5e74\u6625\u4e0a\u5230\u5ef6\u5b89\uff0c\u540e\u6765\u5230\u4e94\u53f0\u5c71\u5de5\u4f5c\uff0c\u4e0d\u5e78\u4ee5\u8eab\u6b89\u804c\u3002\u4e00\u4e2a\u5916\u56fd\u4eba\uff0c\u6beb\u65e0\u5229\u5df1\u7684\u52a8\u673a\uff0c\u628a\u4e2d\u56fd\u4eba\u6c11\u7684\u89e3\u653e\u4e8b\u4e1a\u5f53\u4f5c\u4ed6\u81ea\u5df1\u7684\u4e8b\u4e1a\uff0c\u8fd9\u662f\u4ec0\u4e48\u7cbe\u795e\uff1f\u8fd9\u662f\u56fd\u9645\u4e3b\u4e49\u7684\u7cbe\u795e\uff0c\u8fd9\u662f\u5171\u4ea7\u4e3b\u4e49\u7684\u7cbe\u795e\uff0c\u6bcf\u4e00\u4e2a\u4e2d\u56fd\u5171\u4ea7\u515a\u5458\u90fd\u8981\u5b66\u4e60\u8fd9\u79cd\u7cbe\u795e\u3002\u5217\u5b81\u4e3b\u4e49\u8ba4\u4e3a\uff1a\u8d44\u672c\u4e3b\u4e49\u56fd\u5bb6\u7684\u65e0\u4ea7\u9636\u7ea7\u8981\u62e5\u62a4\u6b96\u6c11\u5730\u534a\u6b96\u6c11\u5730\u4eba\u6c11\u7684\u89e3\u653e\u6597\u4e89\uff0c\u6b96\u6c11\u5730\u534a\u6b96\u6c11\u5730\u7684\u65e0\u4ea7\u9636\u7ea7\u8981\u62e5\u62a4\u8d44\u672c\u4e3b\u4e49\u56fd\u5bb6\u7684\u65e0\u4ea7\u9636\u7ea7\u7684\u89e3\u653e\u6597\u4e89\uff0c\u4e16\u754c\u9769\u547d\u624d\u80fd\u80dc\u5229\u3002\u767d\u6c42\u6069\u540c\u5fd7\u662f\u5b9e\u8df5\u4e86\u8fd9\u4e00\u6761\u5217\u5b81\u4e3b\u4e49\u8def\u7ebf\u7684\u3002\u6211\u4eec\u4e2d\u56fd\u5171\u4ea7\u515a\u5458\u4e5f\u8981\u5b9e\u8df5\u8fd9\u4e00\u6761\u8def\u7ebf\u3002\u6211\u4eec\u8981\u548c\u4e00\u5207\u8d44\u672c\u4e3b\u4e49\u56fd\u5bb6\u7684\u65e0\u4ea7\u9636\u7ea7\u8054\u5408\u8d77\u6765\uff0c\u8981\u548c\u65e5\u672c\u7684\u3001\u82f1\u56fd\u7684\u3001\u7f8e\u56fd\u7684\u3001\u5fb7\u56fd\u7684\u3001\u610f\u5927\u5229\u7684\u4ee5\u53ca\u4e00\u5207\u8d44\u672c\u4e3b\u4e49\u56fd\u5bb6\u7684\u65e0\u4ea7\u9636\u7ea7\u8054\u5408\u8d77\u6765\uff0c\u624d\u80fd\u6253\u5012\u5e1d\u56fd\u4e3b\u4e49\uff0c\u89e3\u653e\u6211\u4eec\u7684\u6c11\u65cf\u548c\u4eba\u6c11\uff0c\u89e3\u653e\u4e16\u754c\u7684\u6c11\u65cf\u548c\u4eba\u6c11\u3002\u8fd9\u5c31\u662f\u6211\u4eec\u7684\u56fd\u9645\u4e3b\u4e49\uff0c\u8fd9\u5c31\u662f\u6211\u4eec\u7528\u4ee5\u53cd\u5bf9\u72ed\u9698\u6c11\u65cf\u4e3b\u4e49\u548c\u72ed\u9698\u7231\u56fd\u4e3b\u4e49\u7684\u56fd\u9645\u4e3b\u4e49\u3002",
        "\u767d\u6c42\u6069\u540c\u5fd7\u6beb\u4e0d\u5229\u5df1\u4e13\u95e8\u5229\u4eba\u7684\u7cbe\u795e\uff0c\u8868\u73b0\u5728\u4ed6\u5bf9\u5de5\u4f5c\u7684\u6781\u7aef\u7684\u8d1f\u8d23\u4efb\uff0c\u5bf9\u540c\u5fd7\u5bf9\u4eba\u6c11\u7684\u6781\u7aef\u7684\u70ed\u5ff1\u3002\u6bcf\u4e2a\u5171\u4ea7\u515a\u5458\u90fd\u8981\u5b66\u4e60\u4ed6\u3002\u4e0d\u5c11\u7684\u4eba\u5bf9\u5de5\u4f5c\u4e0d\u8d1f\u8d23\u4efb\uff0c\u62c8\u8f7b\u6015\u91cd\uff0c\u628a\u91cd\u62c5\u5b50\u63a8\u7ed9\u4eba\u5bb6\uff0c\u81ea\u5df1\u6311\u8f7b\u7684\u3002\u4e00\u4e8b\u5f53\u524d\uff0c\u5148\u66ff\u81ea\u5df1\u6253\u7b97\uff0c\u7136\u540e\u518d\u66ff\u522b\u4eba\u6253\u7b97\u3002\u51fa\u4e86\u4e00\u70b9\u529b\u5c31\u89c9\u5f97\u4e86\u4e0d\u8d77\uff0c\u559c\u6b22\u81ea\u5439\uff0c\u751f\u6015\u4eba\u5bb6\u4e0d\u77e5\u9053\u3002\u5bf9\u540c\u5fd7\u5bf9\u4eba\u6c11\u4e0d\u662f\u6ee1\u8154\u70ed\u5ff1\uff0c\u800c\u662f\u51b7\u51b7\u6e05\u6e05\uff0c\u6f20\u4e0d\u5173\u5fc3\uff0c\u9ebb\u6728\u4e0d\u4ec1\u3002\u8fd9\u79cd\u4eba\u5176\u5b9e\u4e0d\u662f\u5171\u4ea7\u515a\u5458\uff0c\u81f3\u5c11\u4e0d\u80fd\u7b97\u4e00\u4e2a\u7eaf\u7cb9\u7684\u5171\u4ea7\u515a\u5458\u3002\u4ece\u524d\u7ebf\u56de\u6765\u7684\u4eba\u8bf4\u5230\u767d\u6c42\u6069\uff0c\u6ca1\u6709\u4e00\u4e2a\u4e0d\u4f69\u670d\uff0c\u6ca1\u6709\u4e00\u4e2a\u4e0d\u4e3a\u4ed6\u7684\u7cbe\u795e\u6240\u611f\u52a8\u3002\u664b\u5bdf\u5180\u8fb9\u533a\u7684\u519b\u6c11\uff0c\u51e1\u4eb2\u8eab\u53d7\u8fc7\u767d\u6c42\u6069\u533b\u751f\u7684\u6cbb\u7597\u548c\u4eb2\u773c\u770b\u8fc7\u767d\u6c42\u6069\u533b\u751f\u7684\u5de5\u4f5c\u7684\uff0c\u65e0\u4e0d\u4e3a\u4e4b\u611f\u52a8\u3002\u6bcf\u4e00\u4e2a\u5171\u4ea7\u515a\u5458\uff0c\u4e00\u5b9a\u8981\u5b66\u4e60\u767d\u6c42\u6069\u540c\u5fd7\u7684\u8fd9\u79cd\u771f\u6b63\u5171\u4ea7\u4e3b\u4e49\u8005\u7684\u7cbe\u795e\u3002",
        "\u767d\u6c42\u6069\u540c\u5fd7\u662f\u4e2a\u533b\u751f\uff0c\u4ed6\u4ee5\u533b\u7597\u4e3a\u804c\u4e1a\uff0c\u5bf9\u6280\u672f\u7cbe\u76ca\u6c42\u7cbe\uff1b\u5728\u6574\u4e2a\u516b\u8def\u519b\u533b\u52a1\u7cfb\u7edf\u4e2d\uff0c\u4ed6\u7684\u533b\u672f\u662f\u5f88\u9ad8\u660e\u7684\u3002\u8fd9\u5bf9\u4e8e\u4e00\u73ed\u89c1\u5f02\u601d\u8fc1\u7684\u4eba\uff0c\u5bf9\u4e8e\u4e00\u73ed\u9119\u8584\u6280\u672f\u5de5\u4f5c\u4ee5\u4e3a\u4e0d\u8db3\u9053\u3001\u4ee5\u4e3a\u65e0\u51fa\u8def\u7684\u4eba\uff0c\u4e5f\u662f\u4e00\u4e2a\u6781\u597d\u7684\u6559\u8bad\u3002",
        "\u6211\u548c\u767d\u6c42\u6069\u540c\u5fd7\u53ea\u89c1\u8fc7\u4e00\u9762\u3002\u540e\u6765\u4ed6\u7ed9\u6211\u6765\u8fc7\u8bb8\u591a\u4fe1\u3002\u53ef\u662f\u56e0\u4e3a\u5fd9\uff0c\u4ec5\u56de\u8fc7\u4ed6\u4e00\u5c01\u4fe1\uff0c\u8fd8\u4e0d\u77e5\u4ed6\u6536\u5230\u6ca1\u6709\u3002\u5bf9\u4e8e\u4ed6\u7684\u6b7b\uff0c\u6211\u662f\u5f88\u60b2\u75db\u7684\u3002\u73b0\u5728\u5927\u5bb6\u7eaa\u5ff5\u4ed6\uff0c\u53ef\u89c1\u4ed6\u7684\u7cbe\u795e\u611f\u4eba\u4e4b\u6df1\u3002\u6211\u4eec\u5927\u5bb6\u8981\u5b66\u4e60\u4ed6\u6beb\u65e0\u81ea\u79c1\u81ea\u5229\u4e4b\u5fc3\u7684\u7cbe\u795e\u3002\u4ece\u8fd9\u70b9\u51fa\u53d1\uff0c\u5c31\u53ef\u4ee5\u53d8\u4e3a\u5927\u6709\u5229\u4e8e\u4eba\u6c11\u7684\u4eba\u3002\u4e00\u4e2a\u4eba\u80fd\u529b\u6709\u5927\u5c0f\uff0c\u4f46\u53ea\u8981\u6709\u8fd9\u70b9\u7cbe\u795e\uff0c\u5c31\u662f\u4e00\u4e2a\u9ad8\u5c1a\u7684\u4eba\uff0c\u4e00\u4e2a\u7eaf\u7cb9\u7684\u4eba\uff0c\u4e00\u4e2a\u6709\u9053\u5fb7\u7684\u4eba\uff0c\u4e00\u4e2a\u8131\u79bb\u4e86\u4f4e\u7ea7\u8da3\u5473\u7684\u4eba\uff0c\u4e00\u4e2a\u6709\u76ca\u4e8e\u4eba\u6c11\u7684\u4eba\u3002"
      ],
          textEn: [
        "Comrade Bethune, a member of the Communist Party of Canada, was around fifty years old. Sent by the Communist Parties of Canada and the United States, he traveled thousands of miles to help China in the War of Resistance Against Japan. He came to Yan’an last spring, then went to work in the Wutai Mountains, where he unfortunately gave his life in the line of duty. A foreigner, with no selfish motives whatsoever, devoted himself to China’s liberation cause as if it were his own — what spirit is this? This is the spirit of internationalism, the spirit of communism, and every member of the Chinese Communist Party must learn from this spirit. Leninism holds that the proletariat of capitalist countries must support the liberation struggles of colonial and semi-colonial peoples, and the proletariat of colonial and semi-colonial countries must support the liberation struggles of the proletariat in capitalist countries — only then can the world revolution succeed. Comrade Bethune put this Leninist line into practice. We Chinese Communists must also put this line into practice. We must unite with the proletariat of all capitalist countries — with the proletariat of Japan, Britain, the United States, Germany, Italy, and every capitalist country — to overthrow imperialism, to liberate our nation and our people, and to liberate the nations and peoples of the world. This is our internationalism, the internationalism with which we oppose narrow nationalism and narrow patriotism.",
        "Comrade Bethune’s spirit of utter devotion to others without any thought of self was shown in his extreme sense of responsibility in his work and his boundless warmth toward all comrades and the people. Every Communist must learn from him. Not a few people are irresponsible in their work, preferring the light to the heavy, shifting the burden onto others while choosing the easy tasks themselves. At every turn they think of themselves first, then of others. After the slightest effort they swell with self-importance, boasting for fear others won’t notice. Toward comrades and the people they are not warm but cold, indifferent, numb. Such people are in fact not Communists, or at least cannot be considered pure Communists. Everyone who came back from the front spoke of Bethune with admiration; not one was unmoved by his spirit. Among the soldiers and civilians of the Jin-Cha-Ji Border Region, all who had been personally treated by Dr. Bethune or had seen him at work were deeply moved. Every Communist Party member must learn from Comrade Bethune this spirit of a true Communist.",
        "Comrade Bethune was a doctor; he took healing as his profession, and he was constantly perfecting his skill. His medical expertise was among the finest in the entire Eighth Route Army medical system. This is an excellent lesson for those who are fickle and change direction at every new sight, and for those who look down on technical work as beneath them or as a dead end.",
        "I met Comrade Bethune only once. Later he wrote me many letters, but I was too busy and replied to only one — I don’t even know if he received it. I am deeply grieved by his death. Now that we all commemorate him, we can see how profoundly his spirit has moved people. We must all learn from his spirit of absolute selflessness. Starting from this point, one can become a person of great benefit to the people. A person’s ability may be great or small, but if he has this spirit, he is already a noble person, a pure person, a moral person, a person free of vulgar interests, a person who is of benefit to the people."
      ],
          textPinyin: [
            "b\u00e1i qi\u00fa \u0113n t\u00f3ng zh\u00ec sh\u00ec ji\u0101 n\u00e1 d\u00e0 g\u00f2ng ch\u01cen d\u01ceng yu\u00e1n\uff0c w\u01d4 sh\u00ed du\u014d su\u00ec le\uff0c w\u00e8i le b\u0101ng zh\u00f9 zh\u014dng gu\u00f3 de k\u00e0ng r\u00ec zh\u00e0n zh\u0113ng\uff0c sh\u00f2u ji\u0101 n\u00e1 d\u00e0 g\u00f2ng ch\u01cen d\u01ceng h\u00e9 m\u011bi gu\u00f3 g\u00f2ng ch\u01cen d\u01ceng de p\u00e0i qi\u01cen\uff0c b\u00f9 yu\u01cen w\u00e0n l\u01d0\uff0c l\u00e1i d\u00e0o zh\u014dng gu\u00f3\u3002 q\u00f9 ni\u00e1n ch\u016bn sh\u00e0ng d\u00e0o y\u00e1n \u0101n\uff0c h\u00f2u l\u00e1i d\u00e0o w\u01d4 t\u00e1i sh\u0101n g\u014dng zu\u00f2\uff0c b\u00fa x\u00ecng y\u01d0 sh\u0113n x\u00f9n zh\u00ed\u3002 y\u00ed g\u00e8 w\u00e0i gu\u00f3 r\u00e9n\uff0c h\u00e1o w\u00fa l\u00ec j\u01d0 de d\u00f2ng j\u012b\uff0c b\u01ce zh\u014dng gu\u00f3 r\u00e9n m\u00edn de ji\u011b f\u00e0ng sh\u00ec y\u00e8 d\u0101ng zu\u00f2 t\u0101 z\u00ec j\u01d0 de sh\u00ec y\u00e8\uff0c zh\u00e8 sh\u00ec sh\u00e9n me j\u012bng sh\u00e9n\uff1f zh\u00e8 sh\u00ec gu\u00f3 j\u00ec zh\u01d4 y\u00ec de j\u012bng sh\u00e9n\uff0c zh\u00e8 sh\u00ec g\u00f2ng ch\u01cen zh\u01d4 y\u00ec de j\u012bng sh\u00e9n\uff0c m\u011bi y\u00ed g\u00e8 zh\u014dng gu\u00f3 g\u00f2ng ch\u01cen d\u01ceng yu\u00e1n d\u014du y\u00e0o xu\u00e9 x\u00ed zh\u00e8 zh\u01d2ng j\u012bng sh\u00e9n\u3002 li\u00e8 n\u00edng zh\u01d4 y\u00ec r\u00e8n w\u00e9i\uff1a z\u012b b\u011bn zh\u01d4 y\u00ec gu\u00f3 ji\u0101 de w\u00fa ch\u01cen ji\u0113 j\u00ed y\u00e0o y\u014dng h\u00f9 zh\u00ed m\u00edn d\u00ec b\u00e0n zh\u00ed m\u00edn d\u00ec r\u00e9n m\u00edn de ji\u011b f\u00e0ng d\u00f2u zh\u0113ng\uff0c zh\u00ed m\u00edn d\u00ec b\u00e0n zh\u00ed m\u00edn d\u00ec de w\u00fa ch\u01cen ji\u0113 j\u00ed y\u00e0o y\u014dng h\u00f9 z\u012b b\u011bn zh\u01d4 y\u00ec gu\u00f3 ji\u0101 de w\u00fa ch\u01cen ji\u0113 j\u00ed de ji\u011b f\u00e0ng d\u00f2u zh\u0113ng\uff0c sh\u00ec ji\u00e8 g\u00e9 m\u00ecng c\u00e1i n\u00e9ng sh\u00e8ng l\u00ec\u3002 b\u00e1i qi\u00fa \u0113n t\u00f3ng zh\u00ec sh\u00ec sh\u00ed ji\u00e0n le zh\u00e8 y\u00ec ti\u00e1o li\u00e8 n\u00edng zh\u01d4 y\u00ec l\u00f9 xi\u00e0n de\u3002 w\u01d2 men zh\u014dng gu\u00f3 g\u00f2ng ch\u01cen d\u01ceng yu\u00e1n y\u011b y\u00e0o sh\u00ed ji\u00e0n zh\u00e8 y\u00ec ti\u00e1o l\u00f9 xi\u00e0n\u3002 w\u01d2 men y\u00e0o h\u00e9 y\u00ed qi\u00e8 z\u012b b\u011bn zh\u01d4 y\u00ec gu\u00f3 ji\u0101 de w\u00fa ch\u01cen ji\u0113 j\u00ed li\u00e1n h\u00e9 q\u01d0 l\u00e1i\uff0c y\u00e0o h\u00e9 r\u00ec b\u011bn de\u3001 y\u012bng gu\u00f3 de\u3001 m\u011bi gu\u00f3 de\u3001 d\u00e9 gu\u00f3 de\u3001 y\u00ec d\u00e0 l\u00ec de y\u01d0 j\u00ed y\u00ed qi\u00e8 z\u012b b\u011bn zh\u01d4 y\u00ec gu\u00f3 ji\u0101 de w\u00fa ch\u01cen ji\u0113 j\u00ed li\u00e1n h\u00e9 q\u01d0 l\u00e1i\uff0c c\u00e1i n\u00e9ng d\u01ce d\u01ceo d\u00ec gu\u00f3 zh\u01d4 y\u00ec\uff0c ji\u011b f\u00e0ng w\u01d2 men de m\u00edn z\u00fa h\u00e9 r\u00e9n m\u00edn\uff0c ji\u011b f\u00e0ng sh\u00ec ji\u00e8 de m\u00edn z\u00fa h\u00e9 r\u00e9n m\u00edn\u3002 zh\u00e8 ji\u00f9 sh\u00ec w\u01d2 men de gu\u00f3 j\u00ec zh\u01d4 y\u00ec\uff0c zh\u00e8 ji\u00f9 sh\u00ec w\u01d2 men y\u00f2ng y\u01d0 f\u01cen du\u00ec xi\u00e1 \u00e0i m\u00edn z\u00fa zh\u01d4 y\u00ec h\u00e9 xi\u00e1 \u00e0i \u00e0i gu\u00f3 zh\u01d4 y\u00ec de gu\u00f3 j\u00ec zh\u01d4 y\u00ec\u3002",
            "b\u00e1i qi\u00fa \u0113n t\u00f3ng zh\u00ec h\u00e1o b\u00fa l\u00ec j\u01d0 zhu\u0101n m\u00e9n l\u00ec r\u00e9n de j\u012bng sh\u00e9n\uff0c bi\u01ceo xi\u00e0n z\u00e0i t\u0101 du\u00ec g\u014dng zu\u00f2 de j\u00ed du\u0101n de f\u00f9 z\u00e9 r\u00e8n\uff0c du\u00ec t\u00f3ng zh\u00ec du\u00ec r\u00e9n m\u00edn de j\u00ed du\u0101n de r\u00e8 ch\u00e9n\u3002 m\u011bi g\u00e8 g\u00f2ng ch\u01cen d\u01ceng yu\u00e1n d\u014du y\u00e0o xu\u00e9 x\u00ed t\u0101\u3002 b\u00f9 sh\u01ceo de r\u00e9n du\u00ec g\u014dng zu\u00f2 b\u00fa f\u00f9 z\u00e9 r\u00e8n\uff0c ni\u0101n q\u012bng p\u00e0 zh\u00f2ng\uff0c b\u01ce zh\u00f2ng d\u00e0n zi tu\u012b g\u011bi r\u00e9n ji\u0101\uff0c z\u00ec j\u01d0 ti\u0101o q\u012bng de\u3002 y\u00ed sh\u00ec d\u0101ng qi\u00e1n\uff0c xi\u0101n t\u00ec z\u00ec j\u01d0 d\u01ce su\u00e0n\uff0c r\u00e1n h\u00f2u z\u00e0i t\u00ec bi\u00e9 r\u00e9n d\u01ce su\u00e0n\u3002 ch\u016b le y\u00ec di\u01cen l\u00ec ji\u00f9 ju\u00e9 de li\u01ceo b\u00f9 q\u01d0\uff0c x\u01d0 huan z\u00ec chu\u012b\uff0c sh\u0113ng p\u00e0 r\u00e9n ji\u0101 b\u00f9 zh\u012b d\u00e0o\u3002 du\u00ec t\u00f3ng zh\u00ec du\u00ec r\u00e9n m\u00edn b\u00fa sh\u00ec m\u01cen qi\u0101ng r\u00e8 ch\u00e9n\uff0c \u00e9r sh\u00ec l\u011bng l\u011bng q\u012bng q\u012bng\uff0c m\u00f2 b\u00f9 gu\u0101n x\u012bn\uff0c m\u00e1 m\u00f9 b\u00f9 r\u00e9n\u3002 zh\u00e8 zh\u01d2ng r\u00e9n q\u00ed sh\u00ed b\u00fa sh\u00ec g\u00f2ng ch\u01cen d\u01ceng yu\u00e1n\uff0c zh\u00ec sh\u01ceo b\u00f9 n\u00e9ng su\u00e0n y\u00ed g\u00e8 ch\u00fan cu\u00ec de g\u00f2ng ch\u01cen d\u01ceng yu\u00e1n\u3002 c\u00f3ng qi\u00e1n xi\u00e0n hu\u00ed l\u00e1i de r\u00e9n shu\u014d d\u00e0o b\u00e1i qi\u00fa \u0113n\uff0c m\u00e9i y\u01d2u y\u00ed g\u00e8 b\u00fa p\u00e8i f\u00fa\uff0c m\u00e9i y\u01d2u y\u00ed g\u00e8 b\u00fa w\u00e8i t\u0101 de j\u012bng sh\u00e9n su\u01d2 g\u01cen d\u00f2ng\u3002 j\u00ecn ch\u00e1 j\u00ec bi\u0101n q\u016b de j\u016bn m\u00edn\uff0c f\u00e1n q\u012bn sh\u0113n sh\u00f2u gu\u00f2 b\u00e1i qi\u00fa \u0113n y\u012b sh\u0113ng de zh\u00ec li\u00e1o h\u00e9 q\u012bn y\u01cen k\u00e0n gu\u00f2 b\u00e1i qi\u00fa \u0113n y\u012b sh\u0113ng de g\u014dng zu\u00f2 de\uff0c w\u00fa b\u00fa w\u00e8i zh\u012b g\u01cen d\u00f2ng\u3002 m\u011bi y\u00ed g\u00e8 g\u00f2ng ch\u01cen d\u01ceng yu\u00e1n\uff0c y\u00ed d\u00ecng y\u00e0o xu\u00e9 x\u00ed b\u00e1i qi\u00fa \u0113n t\u00f3ng zh\u00ec de zh\u00e8 zh\u01d2ng zh\u0113n zh\u00e8ng g\u00f2ng ch\u01cen zh\u01d4 y\u00ec zh\u011b de j\u012bng sh\u00e9n\u3002",
            "b\u00e1i qi\u00fa \u0113n t\u00f3ng zh\u00ec sh\u00ec g\u00e8 y\u012b sh\u0113ng\uff0c t\u0101 y\u01d0 y\u012b li\u00e1o w\u00e8i zh\u00ed y\u00e8\uff0c du\u00ec j\u00ec sh\u00f9 j\u012bng y\u00ec qi\u00fa j\u012bng\uff1b z\u00e0i zh\u011bng g\u00e8 b\u0101 l\u00f9 j\u016bn y\u012b w\u00f9 x\u00ec t\u01d2ng zh\u014dng\uff0c t\u0101 de y\u012b sh\u00f9 sh\u00ec h\u011bn g\u0101o m\u00edng de\u3002 zh\u00e8 du\u00ec y\u00fa y\u00ec b\u0101n ji\u00e0n y\u00ec s\u012b qi\u0101n de r\u00e9n\uff0c du\u00ec y\u00fa y\u00ec b\u0101n b\u01d0 b\u00f3 j\u00ec sh\u00f9 g\u014dng zu\u00f2 y\u01d0 w\u00e9i b\u00f9 z\u00fa d\u00e0o\u3001 y\u01d0 w\u00e9i w\u00fa ch\u016b l\u00f9 de r\u00e9n\uff0c y\u011b sh\u00ec y\u00ed g\u00e8 j\u00ed h\u01ceo de ji\u00e0o x\u00f9n\u3002",
            "w\u01d2 h\u00e9 b\u00e1i qi\u00fa \u0113n t\u00f3ng zh\u00ec zh\u01d0 ji\u00e0n gu\u00f2 y\u00ed mi\u00e0n\u3002 h\u00f2u l\u00e1i t\u0101 g\u011bi w\u01d2 l\u00e1i gu\u00f2 x\u01d4 du\u014d x\u00ecn\u3002 k\u011b sh\u00ec y\u012bn w\u00e8i m\u00e1ng\uff0c j\u01d0n hu\u00ed gu\u00f2 t\u0101 y\u00ec f\u0113ng x\u00ecn\uff0c h\u00e1i b\u00f9 zh\u012b t\u0101 sh\u014du d\u00e0o m\u00e9i y\u01d2u\u3002 du\u00ec y\u00fa t\u0101 de s\u01d0\uff0c w\u01d2 sh\u00ec h\u011bn b\u0113i t\u00f2ng de\u3002 xi\u00e0n z\u00e0i d\u00e0 ji\u0101 j\u00ec ni\u00e0n t\u0101\uff0c k\u011b ji\u00e0n t\u0101 de j\u012bng sh\u00e9n g\u01cen r\u00e9n zh\u012b sh\u0113n\u3002 w\u01d2 men d\u00e0 ji\u0101 y\u00e0o xu\u00e9 x\u00ed t\u0101 h\u00e1o w\u00fa z\u00ec s\u012b z\u00ec l\u00ec zh\u012b x\u012bn de j\u012bng sh\u00e9n\u3002 c\u00f3ng zh\u00e8 di\u01cen ch\u016b f\u0101\uff0c ji\u00f9 k\u011b y\u01d0 bi\u00e0n w\u00e8i d\u00e0 y\u01d2u l\u00ec y\u00fa r\u00e9n m\u00edn de r\u00e9n\u3002 y\u00ed g\u00e8 r\u00e9n n\u00e9ng l\u00ec y\u01d2u d\u00e0 xi\u01ceo\uff0c d\u00e0n zh\u01d0 y\u00e0o y\u01d2u zh\u00e8 di\u01cen j\u012bng sh\u00e9n\uff0c ji\u00f9 sh\u00ec y\u00ed g\u00e8 g\u0101o sh\u00e0ng de r\u00e9n\uff0c y\u00ed g\u00e8 ch\u00fan cu\u00ec de r\u00e9n\uff0c y\u00ed g\u00e8 y\u01d2u d\u00e0o d\u00e9 de r\u00e9n\uff0c y\u00ed g\u00e8 tu\u014d l\u00ed le d\u012b j\u00ed q\u00f9 w\u00e8i de r\u00e9n\uff0c y\u00ed g\u00e8 y\u01d2u y\u00ec y\u00fa r\u00e9n m\u00edn de r\u00e9n\u3002"
          ],
          annotations: [
            { id: 1, term: "殉职", pinyin: "xùnzhí", definition: "为公务而牺牲生命。", definitionEn: "To die in the line of duty." },
            { id: 2, term: "热忱", pinyin: "rèchén", definition: "热情。忱，情意。", definitionEn: "Enthusiasm, fervor. 忱 means sincere feelings." },
            { id: 3, term: "拈轻怕重", pinyin: "niānqīngpàzhòng", definition: "接受工作时挑拣轻松的，害怕繁重的。", definitionEn: "To pick the easy tasks and avoid the hard ones." },
            { id: 4, term: "麻木不仁", pinyin: "mámùbùrén", definition: "本义是肢体麻木，没有感觉。这里指缺乏热情，对集体和人民的利益不关心。", definitionEn: "Originally means physical numbness; here it means lacking enthusiasm, indifferent to collective and people's interests." },
            { id: 5, term: "精益求精", pinyin: "jīngyìqiújīng", definition: "已经好了还要求更好。", definitionEn: "To strive for ever greater perfection." },
            { id: 6, term: "见异思迁", pinyin: "jiànyìsīqiān", definition: "看到别的事物就改变原来的主意。", definitionEn: "To change one's mind upon seeing something different; to be fickle." }
          ],
          thinkExplore: [
            { cn: "默读课文，归纳各段内容要点，说说课文段落之间的关系。", en: "Read silently, summarize the main points of each paragraph, and explain the relationships between paragraphs." },
            { cn: "课文第2、3段通过对比手法，突出了白求恩同志的高贵品质。", en: "Paragraphs 2 and 3 use contrast to highlight Comrade Bethune's noble qualities." }
          ],
          accumExtend: [
            { cn: "背诵课文第4段。将这一段划分为两个层次，并说说两个层次之间是如何过渡的。", en: "Recite paragraph 4. Divide it into two levels and explain how they transition." }
          ],
          teachingPoints: [
            { cn: "学习夹叙夹议的写法和对比手法的表达效果。", en: "Learn the technique of combining narration with commentary and the expressive effects of contrast." },
            { cn: "理解排比句式\u201C一个……的人\u201D的修辞力量。", en: "Understand the rhetorical power of the parallel structure 'a person who is...' " }
          ],
          parentTips: [
            { cn: "可与孩子讨论白求恩的国际主义精神，以及在日常生活中如何做一个对社会有益的人。", en: "Discuss Bethune's internationalist spirit with your child, and how to be a person of benefit to society in daily life." }
          ]
        },
        {
          id: 13,
          title: "植树的牧羊人",
          titleEn: "The Man Who Planted Trees",
          difficulty: 4,
          author: "让·乔诺",
          authorEn: "Jean Giono",
          source: "节选自绘本《植树的男人》（二十一世纪出版社2011年版）。武娟译，崔维燕校译。有删改。",
          sourceEn: "Excerpted from the picture book The Man Who Planted Trees (21st Century Publishing House, 2011). Translated by Wu Juan, reviewed by Cui Weiyan. Abridged.",
          vocabWords: [
            {word:'慷慨',pinyin:'kāng kǎi',en:'generous',sentence:'如果他慷慨无私，不图回报。',sentenceEn:'If he is generous and selfless, seeking no reward.'},
            {word:'荒地',pinyin:'huāng dì',en:'wasteland',sentence:'到处是荒地。',sentenceEn:'Everywhere was wasteland.'},
            {word:'不毛之地',pinyin:'bù máo zhī dì',en:'barren land',sentence:'他就像这块不毛之地上涌出的神秘泉水。',sentenceEn:'He was like a mysterious spring welling up from this barren land.'},
            {word:'沉默寡言',pinyin:'chén mò guǎ yán',en:'taciturn',sentence:'他还是那么沉默寡言。',sentenceEn:'He was still as taciturn as ever.'},
            {word:'沃土',pinyin:'wò tǔ',en:'fertile land',sentence:'昔日的荒地如今生机勃勃，成为一片沃土。',sentenceEn:'The once barren land was now vibrant with life, becoming fertile land.'}
          ],
          footnotes: [
            {term:"\u6177\u6168", termEn:"generous", definition:"\u3010k\u0101ng k\u01cei\u3011generous\u3002", definitionEn:"generous"},
            {term:"\u8352\u5730", termEn:"wasteland", definition:"\u3010hu\u0101ng d\u00ec\u3011wasteland\u3002", definitionEn:"wasteland"},
            {term:"\u4e0d\u6bdb\u4e4b\u5730", termEn:"barren land", definition:"\u3010b\u00f9 m\u00e1o zh\u012b d\u00ec\u3011barren land\u3002", definitionEn:"barren land"},
            {term:"\u6c89\u9ed8\u5be1\u8a00", termEn:"taciturn", definition:"\u3010ch\u00e9n m\u00f2 gu\u01ce y\u00e1n\u3011taciturn\u3002", definitionEn:"taciturn"},
            {term:"\u6c83\u571f", termEn:"fertile land", definition:"\u3010w\u00f2 t\u01d4\u3011fertile land\u3002", definitionEn:"fertile land"}
          ],
          readingTips: [
            {cn:"\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f", en:"Pay attention to the author's narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?"},
            {cn:"\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f", en:"After reading, think: what theme does the author convey? How does the title relate to the content?"}
          ],
          grammarPoints: [
            {point:'以时间为线索',pointEn:'yǐ shí jiān wéi xiàn suǒ',example:'using time as a thread',exampleEn:'1913年、1920年、1945年，三次到访展现变化。',explanation:'Visits in 1913, 1920, and 1945 show the transformation.',explanationEn:'以三次访问为时间线索，展现荒地到绿洲的巨大变化'}
          ],
          authorBio: {
            cn: "让·乔诺（1895—1970），法国作家、电影编剧。",
            en: "Jean Giono (1895–1970) was a French writer and screenwriter."
          },
          isSelfRead: false,
          preview: [
            { cn: "一个孤独的农夫，数十年如一日，在荒原上种植着树木。最终，靠自己的体力与毅力，把荒凉的土地变成了美丽富饶的田园。边读课文边思考：是什么精神在支撑着他？", en: "A solitary farmer, year after year for decades, planted trees on a barren wasteland. Eventually, through his own strength and perseverance, he transformed the desolate land into beautiful, fertile countryside. While reading, think: what spirit sustained him?" }
          ],
          text: [
            "想真正了解一个人，要长期观察他所做的事。如果他慷慨无私，不图回报，还给这世界留下了许多，那就可以肯定地说，这是一个难得的好人。",
            "那是在1913年，我走进法国普罗旺斯地区，在游人稀少的阿尔卑斯山地，做了一次旅行。这里海拔一千二三百米，一眼望去，到处是荒地。光秃秃的山上，稀稀拉拉地长着一些野生的薰衣草。在无边无际的荒野中，我走了三天，终于来到一个废弃的村庄前。",
            "牧羊人让我喝了水壶里的水，又带我去了他山上的小屋。他从一口深井里给我打了一些水，井水甜丝丝的。这个男人不太爱说话，独自生活的人往往这样。不过，他显得自信、平和。在我眼里，他就像这块不毛之地上涌出的神秘泉水。",
            "牧羊人拿出一个袋子，从里面倒出一堆橡子，散在桌上。接着，一颗一颗仔细地挑选起来。他要把好的橡子和坏的橡子分开。最后，挑出了一百颗又大又好的橡子，他停下手来，我们就去睡了。",
            "三年来，他一直这样，一个人种着树。他已经种下了十万颗橡子。在这十万颗橡子中，有两万颗发了芽。而这两万棵树苗中，有将近一半，可能会被动物咬坏，或是因为其他原因死掉。剩下的一万棵树苗，会在这光秃秃的土地上扎根，长成大树。",
            "1910年种的橡树，已经长得比我都高，真让人不敢相信。我吃惊得说不出话来，他还是那么沉默寡言。我们就这样静静地，在他种的树林里，转悠了一整天。这片树林分为三块，最大的一块，有11公里宽。当我想到，眼前的一切，不是靠什么先进的技术，而是靠一个人的双手和毅力造就的，我才明白，人类除了毁灭，还可以像上天一样创造。",
            "1945年6月，我最后一次见到植树的老人。那年，他已经87岁了。昔日的荒地如今生机勃勃，成为一片沃土。树林留住了雨水和雪水，干涸已久的地里又冒出了泉水。那些废弃的村子一点点重建起来。一万多口人的幸福生活，都源于这位叫艾力泽·布菲的老人。",
            "每当我想到这位老人，他靠一个人的体力与毅力，把这片荒漠变成了绿洲，我就觉得，人的力量是多么伟大啊！可是，想到要做成这样一件事，需要怎样的毅力，怎样的无私，我就从心底里，对这位没有受过什么教育的普通农民，感到无限的敬佩。他做到了只有上天才能做到的事。"
          ],
          textEn: [
            "To truly know someone, you must observe what he does over a long period. If he is generous and selfless, seeking no reward, and leaves much to the world, then you can say with certainty: this is a rare good person.",
            "It was in 1913, and I was on a walking tour through the sparsely visited Alps of Provence, France. At an altitude of 1,200 to 1,300 meters, barren land stretched in every direction. On the bare mountains, a few wild lavender plants grew here and there. In the boundless wilderness, I walked for three days before finally arriving at an abandoned village.",
            "The shepherd gave me water from his canteen and took me to his hut in the mountains. He drew sweet water from a deep well. He was a man of few words — those who live alone often are. But he seemed confident and serene. In my eyes, he was like a mysterious spring welling up from this barren land.",
            "The shepherd took out a bag, poured a pile of acorns onto the table, and began sorting them one by one, separating the good acorns from the bad. Finally, he selected a hundred large, perfect acorns, then stopped, and we went to sleep.",
            "For three years, he had been planting trees alone. He had planted a hundred thousand acorns; twenty thousand had sprouted; nearly half of those would be damaged by animals or die from other causes. The remaining ten thousand saplings would take root and grow into great trees on this barren land.",
            "The oaks he had planted in 1910 were now taller than me — truly unbelievable. I was so astonished I couldn't speak, and he remained as taciturn as ever. We spent the whole day silently wandering through the forest he had planted. This forest was divided into three sections; the largest stretched eleven kilometers wide. When I realized that all of this was not the work of any advanced technology but of one man's hands and perseverance, I understood that humans, besides destruction, can also create like God.",
            "In June 1945, I saw the old tree-planter for the last time. He was 87 years old. The former wasteland was now vibrant and fertile. The forests had retained rainwater and snowwater; springs had reappeared. The abandoned villages were being rebuilt. The happiness of more than ten thousand people all came from this old man named Elzéard Bouffier.",
            "Whenever I think of this old man — how, with only his physical strength and willpower, he transformed this desert into an oasis — I am awed by the greatness of human power. And when I think of the perseverance and selflessness it required, I feel boundless admiration for this uneducated, ordinary farmer. He accomplished what only God could do."
          ],
          textPinyin: [
            "xi\u01ceng zh\u0113n zh\u00e8ng li\u01ceo ji\u011b y\u00ed g\u00e8 r\u00e9n\uff0c y\u00e0o ch\u00e1ng q\u012b gu\u0101n ch\u00e1 t\u0101 su\u01d2 zu\u00f2 de sh\u00ec\u3002 r\u00fa gu\u01d2 t\u0101 k\u0101ng k\u01cei w\u00fa s\u012b\uff0c b\u00f9 t\u00fa hu\u00ed b\u00e0o\uff0c h\u00e1i g\u011bi zh\u00e8 sh\u00ec ji\u00e8 li\u00fa xi\u00e0 le x\u01d4 du\u014d\uff0c n\u00e0 ji\u00f9 k\u011b y\u01d0 k\u011bn d\u00ecng d\u00ec shu\u014d\uff0c zh\u00e8 sh\u00ec y\u00ed g\u00e8 n\u00e1n d\u00e9 de h\u01ceo r\u00e9n\u3002",
            "n\u00e0 sh\u00ec z\u00e0i 1 9 1 3 ni\u00e1n\uff0c w\u01d2 z\u01d2u j\u00ecn f\u01ce gu\u00f3 p\u01d4 lu\u00f3 w\u00e0ng s\u012b d\u00ec q\u016b\uff0c z\u00e0i y\u00f3u r\u00e9n x\u012b sh\u01ceo de \u0101 \u011br b\u0113i s\u012b sh\u0101n d\u00ec\uff0c zu\u00f2 le y\u00ed c\u00ec l\u01da x\u00edng\u3002 zh\u00e8 l\u01d0 h\u01cei b\u00e1 y\u00ec qi\u0101n \u00e8r s\u0101n b\u01cei m\u01d0\uff0c y\u00ec y\u01cen w\u00e0ng q\u00f9\uff0c d\u00e0o ch\u00f9 sh\u00ec hu\u0101ng d\u00ec\u3002 gu\u0101ng t\u016b t\u016b de sh\u0101n sh\u00e0ng\uff0c x\u012b x\u012b l\u0101 l\u0101 d\u00ec ch\u00e1ng zhe y\u00ec xi\u0113 y\u011b sh\u0113ng de x\u016bn y\u012b c\u01ceo\u3002 z\u00e0i w\u00fa bi\u0101n w\u00fa j\u00ec de hu\u0101ng y\u011b zh\u014dng\uff0c w\u01d2 z\u01d2u le s\u0101n ti\u0101n\uff0c zh\u014dng y\u00fa l\u00e1i d\u00e0o y\u00ed g\u00e8 f\u00e8i q\u00ec de c\u016bn zhu\u0101ng qi\u00e1n\u3002",
            "m\u00f9 y\u00e1ng r\u00e9n r\u00e0ng w\u01d2 h\u0113 le shu\u01d0 h\u00fa l\u01d0 de shu\u01d0\uff0c y\u00f2u d\u00e0i w\u01d2 q\u00f9 le t\u0101 sh\u0101n sh\u00e0ng de xi\u01ceo w\u016b\u3002 t\u0101 c\u00f3ng y\u00ec k\u01d2u sh\u0113n j\u01d0ng l\u01d0 g\u011bi w\u01d2 d\u01ce le y\u00ec xi\u0113 shu\u01d0\uff0c j\u01d0ng shu\u01d0 ti\u00e1n s\u012b s\u012b de\u3002 zh\u00e8 ge n\u00e1n r\u00e9n b\u00fa t\u00e0i \u00e0i shu\u014d hu\u00e0\uff0c d\u00fa z\u00ec sh\u0113ng hu\u00f3 de r\u00e9n w\u01ceng w\u01ceng zh\u00e8 y\u00e0ng\u3002 b\u00fa gu\u00f2\uff0c t\u0101 xi\u01cen de z\u00ec x\u00ecn\u3001 p\u00edng h\u00e9\u3002 z\u00e0i w\u01d2 y\u01cen l\u01d0\uff0c t\u0101 ji\u00f9 xi\u00e0ng zh\u00e8 ku\u00e0i b\u00f9 m\u00e1o zh\u012b d\u00ec sh\u00e0ng y\u01d2ng ch\u016b de sh\u00e9n m\u00ec qu\u00e1n shu\u01d0\u3002",
            "m\u00f9 y\u00e1ng r\u00e9n n\u00e1 ch\u016b y\u00ed g\u00e8 d\u00e0i z\u01d0\uff0c c\u00f3ng l\u01d0 mi\u00e0n d\u01ceo ch\u016b y\u00ec du\u012b xi\u00e0ng z\u01d0\uff0c s\u00e0n z\u00e0i zhu\u014d sh\u00e0ng\u3002 ji\u0113 zhe\uff0c y\u00ec k\u0113 yi k\u0113 z\u01d0 x\u00ec d\u00ec ti\u0101o xu\u01cen q\u01d0 l\u00e1i\u3002 t\u0101 y\u00e0o b\u01ce h\u01ceo de xi\u00e0ng z\u01d0 h\u00e9 hu\u00e0i de xi\u00e0ng z\u01d0 f\u0113n k\u0101i\u3002 zu\u00ec h\u00f2u\uff0c ti\u0101o ch\u016b le y\u00ec b\u01cei k\u0113 y\u00f2u d\u00e0 y\u00f2u h\u01ceo de xi\u00e0ng z\u01d0\uff0c t\u0101 t\u00edng xi\u00e0 sh\u01d2u l\u00e1i\uff0c w\u01d2 men ji\u00f9 q\u00f9 shu\u00ec le\u3002",
            "s\u0101n ni\u00e1n l\u00e1i\uff0c t\u0101 y\u00ec zh\u00ed zh\u00e8 y\u00e0ng\uff0c y\u00ed g\u00e8 r\u00e9n zh\u01d2ng zhe sh\u00f9\u3002 t\u0101 y\u01d0 j\u012bng zh\u01d2ng xi\u00e0 le sh\u00ed w\u00e0n k\u0113 xi\u00e0ng z\u01d0\u3002 z\u00e0i zh\u00e8 sh\u00ed w\u00e0n k\u0113 xi\u00e0ng z\u01d0 zh\u014dng\uff0c y\u01d2u li\u01ceng w\u00e0n k\u0113 f\u0101 le y\u00e1\u3002 \u00e9r zh\u00e8 li\u01ceng w\u00e0n k\u0113 sh\u00f9 mi\u00e1o zh\u014dng\uff0c y\u01d2u ji\u0101ng j\u00ecn y\u00ed b\u00e0n\uff0c k\u011b n\u00e9ng hu\u00ec b\u00e8i d\u00f2ng w\u00f9 y\u01ceo hu\u00e0i\uff0c hu\u00f2 sh\u00ec y\u012bn w\u00e8i q\u00ed t\u0101 yu\u00e1n y\u012bn s\u01d0 di\u00e0o\u3002 sh\u00e8ng xi\u00e0 de y\u00ed w\u00e0n k\u0113 sh\u00f9 mi\u00e1o\uff0c hu\u00ec z\u00e0i zh\u00e8 gu\u0101ng t\u016b t\u016b de t\u01d4 d\u00ec sh\u00e0ng zh\u0101 g\u0113n\uff0c ch\u00e1ng ch\u00e9ng d\u00e0 sh\u00f9\u3002",
            "1 9 1 0 ni\u00e1n zh\u01d2ng de xi\u00e0ng sh\u00f9\uff0c y\u01d0 j\u012bng ch\u00e1ng d\u00e9 b\u01d0 w\u01d2 d\u014du g\u0101o\uff0c zh\u0113n r\u00e0ng r\u00e9n b\u00f9 g\u01cen xi\u0101ng x\u00ecn\u3002 w\u01d2 ch\u012b j\u012bng d\u00e9 shu\u014d b\u00f9 ch\u016b hu\u00e0 l\u00e1i\uff0c t\u0101 h\u00e1i sh\u00ec n\u00e0 me ch\u00e9n m\u00f2 gu\u01ce y\u00e1n\u3002 w\u01d2 men ji\u00f9 zh\u00e8 y\u00e0ng j\u00ecng j\u00ecng d\u00ec\uff0c z\u00e0i t\u0101 zh\u01d2ng de sh\u00f9 l\u00edn l\u01d0\uff0c zhu\u00e0n you le y\u00ec zh\u011bng ti\u0101n\u3002 zh\u00e8 pi\u00e0n sh\u00f9 l\u00edn f\u0113n w\u00e9i s\u0101n ku\u00e0i\uff0c zu\u00ec d\u00e0 de y\u00ed ku\u00e0i\uff0c y\u01d2u 1 1 g\u014dng l\u01d0 ku\u0101n\u3002 d\u0101ng w\u01d2 xi\u01ceng d\u00e0o\uff0c y\u01cen qi\u00e1n de y\u00ed qi\u00e8\uff0c b\u00fa sh\u00ec k\u00e0o sh\u00e9n me xi\u0101n j\u00ecn de j\u00ec sh\u00f9\uff0c \u00e9r sh\u00ec k\u00e0o y\u00ed g\u00e8 r\u00e9n de shu\u0101ng sh\u01d2u h\u00e9 y\u00ec l\u00ec z\u00e0o ji\u00f9 de\uff0c w\u01d2 c\u00e1i m\u00edng b\u00e1i\uff0c r\u00e9n l\u00e8i ch\u00fa le hu\u01d0 mi\u00e8\uff0c h\u00e1i k\u011b y\u01d0 xi\u00e0ng sh\u00e0ng ti\u0101n y\u00ed y\u00e0ng chu\u00e0ng z\u00e0o\u3002",
            "1 9 4 5 ni\u00e1n 6 yu\u00e8\uff0c w\u01d2 zu\u00ec h\u00f2u y\u00ed c\u00ec ji\u00e0n d\u00e0o zh\u00ed sh\u00f9 de l\u01ceo r\u00e9n\u3002 n\u00e0 ni\u00e1n\uff0c t\u0101 y\u01d0 j\u012bng 8 7 su\u00ec le\u3002 x\u012b r\u00ec de hu\u0101ng d\u00ec r\u00fa j\u012bn sh\u0113ng j\u012b b\u00f3 b\u00f3\uff0c ch\u00e9ng w\u00e9i y\u00ed pi\u00e0n w\u00f2 t\u01d4\u3002 sh\u00f9 l\u00edn li\u00fa zh\u00f9 le y\u01d4 shu\u01d0 h\u00e9 xu\u011b shu\u01d0\uff0c g\u0101n h\u00e9 y\u01d0 ji\u01d4 de d\u00ec l\u01d0 y\u00f2u m\u00e0o ch\u016b le qu\u00e1n shu\u01d0\u3002 n\u00e0 xi\u0113 f\u00e8i q\u00ec de c\u016bn z\u01d0 y\u00ec di\u01cen di\u01cen ch\u00f3ng ji\u00e0n q\u01d0 l\u00e1i\u3002 y\u00ed w\u00e0n du\u014d k\u01d2u r\u00e9n de x\u00ecng f\u00fa sh\u0113ng hu\u00f3\uff0c d\u014du yu\u00e1n y\u00fa zh\u00e8 w\u00e8i ji\u00e0o \u00e0i l\u00ec z\u00e9\u00b7 b\u00f9 f\u0113i de l\u01ceo r\u00e9n\u3002",
            "m\u011bi d\u0101ng w\u01d2 xi\u01ceng d\u00e0o zh\u00e8 w\u00e8i l\u01ceo r\u00e9n\uff0c t\u0101 k\u00e0o y\u00ed g\u00e8 r\u00e9n de t\u01d0 l\u00ec y\u01d4 y\u00ec l\u00ec\uff0c b\u01ce zh\u00e8 pi\u00e0n hu\u0101ng m\u00f2 bi\u00e0n ch\u00e9ng le l\u01dc zh\u014du\uff0c w\u01d2 ji\u00f9 ju\u00e9 de\uff0c r\u00e9n de l\u00ec li\u00e0ng sh\u00ec du\u014d me w\u011bi d\u00e0 a\uff01 k\u011b sh\u00ec\uff0c xi\u01ceng d\u00e0o y\u00e0o zu\u00f2 ch\u00e9ng zh\u00e8 y\u00e0ng y\u00ed ji\u00e0n sh\u00ec\uff0c x\u016b y\u00e0o z\u011bn y\u00e0ng de y\u00ec l\u00ec\uff0c z\u011bn y\u00e0ng de w\u00fa s\u012b\uff0c w\u01d2 ji\u00f9 c\u00f3ng x\u012bn d\u01d0 l\u01d0\uff0c du\u00ec zh\u00e8 w\u00e8i m\u00e9i y\u01d2u sh\u00f2u gu\u00f2 sh\u00e9n me ji\u00e0o y\u00f9 de p\u01d4 t\u014dng n\u00f3ng m\u00edn\uff0c g\u01cen d\u00e0o w\u00fa xi\u00e0n de j\u00ecng p\u00e8i\u3002 t\u0101 zu\u00f2 d\u00e0o le zh\u01d0 y\u01d2u sh\u00e0ng ti\u0101n c\u00e1i n\u00e9ng zu\u00f2 d\u00e0o de sh\u00ec\u3002"
          ],
          annotations: [
            { id: 1, term: "不毛之地", pinyin: "bùmáozhīdì", definition: "不长庄稼的地方。泛指荒凉、贫瘠的土地。", definitionEn: "Land where nothing grows; generally refers to barren, infertile land." },
            { id: 2, term: "干涸", pinyin: "gānhé", definition: "干枯，没有水。", definitionEn: "Dried up, waterless." },
            { id: 3, term: "坍塌", pinyin: "tāntā", definition: "建筑物或堆积物倒下来。", definitionEn: "The collapse of buildings or piled structures." }
          ],
          thinkExplore: [
            { cn: "课文按时间顺序，重点叙述了\u201C我\u201D和牧羊人三次见面的情形以及高原上的变化。", en: "The text follows chronological order, focusing on the narrator's three meetings with the shepherd and the changes on the plateau." },
            { cn: "参照示例，以\u201C他是一个　　　的人\u201D的形式说说你对牧羊人的认识。", en: "Following the example, describe your understanding of the shepherd in the form: 'He is a person who is ___.' " }
          ],
          accumExtend: [
            { cn: "我们所处的社会中也有很多默默\u201C种树\u201D的人。你认识或听说过这样的人吗？试为他写一段文字。", en: "In our society there are also many people who quietly 'plant trees.' Do you know or have you heard of such a person? Try writing a passage about them." }
          ],
          teachingPoints: [
            { cn: "学习以时间为序组织材料、首尾呼应的写作手法。", en: "Learn the writing technique of organizing material chronologically with the beginning and ending echoing each other." },
            { cn: "体会细节描写在塑造人物形象中的作用。", en: "Appreciate the role of detailed description in character portrayal." }
          ],
          parentTips: [
            { cn: "可与孩子一起讨论\u201C坚持\u201D的力量，鼓励孩子为长远目标持之以恒。", en: "Discuss the power of persistence with your child and encourage them to persevere toward long-term goals." }
          ]
        },
        {
          id: 14,
          title: "走一步，再走一步",
          titleEn: "One Step, Then Another",
          difficulty: 4,
          author: "莫顿·亨特",
          authorEn: "Morton Hunt",
          source: "选自《心理学与成长》（世界图书出版公司2009年版）。田文慧译。原题为《悬崖上的一课》。",
          sourceEn: "Selected from Psychology and Growth (World Book Publishing Company, 2009). Translated by Tian Wenhui. Original title: 'The Lesson on the Cliff.'",
          vocabWords: [
            {word:'灼人',pinyin:'zhuó rén',en:'scorching',sentence:'一个酷热的七月天，灼人的热浪。',sentenceEn:'A scorching July day, blazing heat waves.'},
            {word:'犹豫',pinyin:'yóu yù',en:'hesitate',sentence:'我犹豫了。',sentenceEn:'I hesitated.'},
            {word:'恍惚',pinyin:'huǎng hū',en:'dazed; absent-minded',sentence:'我趴在岩石上，神情恍惚。',sentenceEn:'I lay on the rock, dazed.'},
            {word:'小心翼翼',pinyin:'xiǎo xīn yì yì',en:'extremely carefully',sentence:'我小心翼翼地感觉着岩石。',sentenceEn:'I felt for the rock extremely carefully.'},
            {word:'成就感',pinyin:'chéng jiù gǎn',en:'sense of achievement',sentence:'我产生了一种巨大的成就感。',sentenceEn:'I felt an enormous sense of achievement.'}
          ],
          footnotes: [
            {term:"\u707c\u4eba", termEn:"scorching", definition:"\u3010zhu\u00f3 r\u00e9n\u3011scorching\u3002", definitionEn:"scorching"},
            {term:"\u72b9\u8c6b", termEn:"hesitate", definition:"\u3010y\u00f3u y\u00f9\u3011hesitate\u3002", definitionEn:"hesitate"},
            {term:"\u604d\u60da", termEn:"dazed; absent-minded", definition:"\u3010hu\u01ceng h\u016b\u3011dazed; absent-minded\u3002", definitionEn:"dazed; absent-minded"},
            {term:"\u5c0f\u5fc3\u7ffc\u7ffc", termEn:"extremely carefully", definition:"\u3010xi\u01ceo x\u012bn y\u00ec y\u00ec\u3011extremely carefully\u3002", definitionEn:"extremely carefully"},
            {term:"\u6210\u5c31\u611f", termEn:"sense of achievement", definition:"\u3010ch\u00e9ng ji\u00f9 g\u01cen\u3011sense of achievement\u3002", definitionEn:"sense of achievement"}
          ],
          readingTips: [
            {cn:"\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f", en:"Pay attention to the author's narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?"},
            {cn:"\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f", en:"After reading, think: what theme does the author convey? How does the title relate to the content?"}
          ],
          accumExtend: [
            {cn: "\u8bfe\u6587\u4e2d\u6709\u4e0d\u5c11\u597d\u8bcd\u4f73\u53e5\uff0c\u5982\u201c\u707c\u4eba\u3001\u72b9\u8c6b\u3001\u604d\u60da\u201d\u7b49\u3002\u8bf7\u6458\u5f55\u4f60\u559c\u6b22\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u5e76\u8bd5\u7740\u5728\u81ea\u5df1\u7684\u5199\u4f5c\u4e2d\u8fd0\u7528\u3002", en: "The text contains fine words and phrases such as \"\u707c\u4eba\u3001\u72b9\u8c6b\u3001\u604d\u60da\". Collect the words and sentences you like and try using them in your own writing."},
            {cn: "\u9009\u62e9\u8bfe\u6587\u4e2d\u4f60\u6700\u559c\u6b22\u7684\u4e00\u4e2a\u6bb5\u843d\uff0c\u6709\u611f\u60c5\u5730\u6717\u8bfb\uff0c\u6807\u51fa\u91cd\u97f3\u548c\u505c\u8fde\uff0c\u5728\u5c0f\u7ec4\u91cc\u4e92\u76f8\u8bc4\u4ef7\u3002", en: "Choose your favorite paragraph, read it with feeling, mark stress and pauses, and do peer evaluation in groups."},
            {cn: "\u8bfe\u5916\u9605\u8bfb\u83ab\u987f\u00b7\u4ea8\u7279\u7684\u5176\u4ed6\u4f5c\u54c1\uff0c\u6bd4\u8f83\u4e0e\u672c\u6587\u7684\u5f02\u540c\uff0c\u5199\u4e00\u7bc7\u77ed\u6587\u5206\u4eab\u4f60\u7684\u53d1\u73b0\u3002", en: "Read other works by Morton Hunt and compare them with this text. Write a short essay sharing your findings."}
          ],
          thinkExplore: [
            {cn: "\u6717\u8bfb\u8bfe\u6587\uff0c\u6982\u62ec\u6587\u7ae0\u7684\u4e3b\u8981\u5185\u5bb9\u3002\u4f5c\u8005\u60f3\u8981\u8868\u8fbe\u7684\u4e2d\u5fc3\u601d\u60f3\u662f\u4ec0\u4e48\uff1f", en: "Read the text aloud and summarize its main content. What central idea does the author wish to convey?"},
            {cn: "\u6587\u4e2d\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bed\u53e5\u6216\u6bb5\u843d\uff1f\u627e\u51fa\u6765\u54c1\u5473\u5176\u4e2d\u7684\u8868\u8fbe\u6548\u679c\uff0c\u5e76\u4e0e\u540c\u5b66\u5206\u4eab\u4f60\u7684\u611f\u53d7\u3002", en: "Which sentences or paragraphs are most impressive? Identify them, appreciate their expressive effects, and share your feelings with classmates."},
            {cn: "\u7ed3\u5408\u4f5c\u8005\u83ab\u987f\u00b7\u4ea8\u7279\u7684\u5199\u4f5c\u80cc\u666f\uff0c\u8c08\u8c08\u4f60\u5bf9\u8fd9\u7bc7\u6587\u7ae0\u7684\u7406\u89e3\u3002\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8981\u5199\u8fd9\u7bc7\u6587\u7ae0\uff1f", en: "Considering the author Morton Hunt's background, discuss your understanding. Why did the author write this?"}
          ],
          grammarPoints: [
            {point:'心理描写',pointEn:'xīn lǐ miáo xiě',example:'psychological description',exampleEn:'我趴在岩石上，神情恍惚，害怕和疲劳已经让我麻木。',explanation:'I lay on the rock, dazed; fear and exhaustion had numbed me.',explanationEn:'通过细腻的心理描写展现主人公的恐惧与成长'}
          ],
          authorBio: {
            cn: "莫顿·亨特（1920—2016），美国作家、心理学家。",
            en: "Morton Hunt (1920–2016), American writer and psychologist."
          },
          isSelfRead: true,
          preview: [
            { cn: "一个体弱的孩子被困在悬崖上，在父亲的引导下，一步一步走下来。这件小事给了他一生的启示：面对困难，只需走好眼前的一小步。", en: "A frail child trapped on a cliff, guided by his father, comes down step by step. This small incident gave him a lifelong lesson: when facing difficulties, just take one small step at a time." }
          ],
          text: [
        "\u90a3\u662f\u5728\u8d39\u57ce\uff0c\u4e00\u4e2a\u9177\u70ed\u7684\u4e03\u6708\u5929\u2014\u2014\u76f4\u523056\u5e74\u540e\u7684\u4eca\u5929\uff0c\u6211\u4ecd\u80fd\u611f\u53d7\u5230\u5f53\u5e74\u90a3\u80a1\u707c\u4eba\u7684\u70ed\u6d6a\u3002\u548c\u6211\u5728\u4e00\u8d77\u7684\u4e94\u4e2a\u7537\u5b69\u5b50\u5df2\u7ecf\u538c\u5026\u4e86\u73a9\u5f39\u73e0\uff0c\u4ee5\u53ca\u7528\u900f\u955c\u5728\u5e72\u6811\u53f6\u4e0a\u70e7\u6d1e\u7684\u6e38\u620f\uff0c\u6b63\u5728\u5bfb\u89c5\u5176\u4ed6\u597d\u73a9\u7684\u4e8b\u3002",
        "\u201c\u55e8\uff0c\u6211\u6709\u4e3b\u610f\u4e86\uff01\u201d\u5185\u5fb7\u8bf4\uff0c\u201c\u6211\u4eec\u722c\u60ac\u5d16\u53bb\uff01\u201d",
        "\u6211\u72b9\u8c6b\u4e86\u3002\u6211\u6e34\u671b\u50cf\u4ed6\u4eec\u4e00\u6837\u52c7\u6562\u548c\u6d3b\u8dc3\uff0c\u4f46\u662f\u5728\u8fc7\u53bb\u7684\u516b\u5e74\u5c81\u6708\u4e2d\uff0c\u6211\u7edd\u5927\u90e8\u5206\u65f6\u95f4\u90fd\u662f\u4e00\u4e2a\u75c5\u5f31\u7684\u5b69\u5b50\uff0c\u5e76\u5c06\u5988\u5988\u7684\u8b66\u544a\u7262\u8bb0\u5728\u5fc3\u2014\u2014\u6211\u4e0d\u50cf\u5176\u4ed6\u5b69\u5b50\u90a3\u6837\u5f3a\u58ee\uff0c\u800c\u4e14\u4e0d\u80fd\u5192\u9669\u3002",
        "\u6211\u4eec\u6765\u5230\u4e00\u5757\u7a7a\u5730\u4e0a\u3002\u5728\u5f88\u8fdc\u7684\u53e6\u4e00\u8fb9\uff0c\u6709\u4e00\u9053\u60ac\u5d16\uff0c\u50cf\u4e00\u9762\u51e0\u8fd1\u5782\u76f4\u7684\u5899\u7a81\u5140\u5730\u8038\u7acb\u5728\u5ca9\u77f3\u4e2d\u3002\u4ece\u5e95\u90e8\u6742\u4e71\u7684\u5ca9\u77f3\u5230\u9876\u90e8\u8349\u76ae\u7684\u8fb9\u7f18\uff0c\u53ea\u670960\u82f1\u5c3a\u5de6\u53f3\uff0c\u4f46\u662f\u5bf9\u6211\u6765\u8bf4\uff0c\u8fd9\u662f\u4e25\u7981\u548c\u4e0d\u53ef\u80fd\u7684\u5316\u8eab\u3002",
        "\u5176\u4ed6\u7537\u5b69\u5b50\u4e00\u4e2a\u63a5\u4e00\u4e2a\u5730\u5411\u4e0a\u6500\u767b\u7740\u3002\u4ed6\u4eec\u7684\u8eab\u5f71\u8d8a\u6765\u8d8a\u5c0f\u3002\u6211\u843d\u5728\u6700\u540e\uff0c\u6c14\u5598\u5401\u5401\u3001\u6d51\u8eab\u53d1\u6296\u5730\u5411\u4e0a\u722c\u3002\u6211\u624b\u6252\u7684\u77f3\u5934\u51c9\u51c9\u7684\uff0c\u5fc3\u4e2d\u5374\u5f88\u6050\u60e7\u3002",
        "\u4e0d\u77e5\u4f55\u65f6\uff0c\u6211\u56de\u5934\u5411\u4e0b\u770b\u4e86\u4e00\u773c\uff0c\u7136\u540e\u5413\u574f\u4e86\uff1a\u60ac\u5d16\u5e95\u4e0b\u7684\u5730\u9762\u770b\u8d77\u6765\u975e\u5e38\u9065\u8fdc\uff1b\u53ea\u8981\u6ed1\u4e00\u4e0b\uff0c\u6211\u5c31\u4f1a\u6389\u4e0b\u53bb\uff0c\u649e\u4e0a\u5d16\u58c1\uff0c\u7136\u540e\u6454\u5230\u5ca9\u77f3\u4e0a\uff0c\u6454\u4e2a\u7c89\u788e\u3002\u4f46\u662f\u5176\u4ed6\u7684\u5b69\u5b50\u5df2\u7ecf\u5230\u4e86\u5d16\u9876\u3002",
        "\u201c\u6765\u5440\uff0c\u80c6\u5c0f\u9b3c\uff01\u201d\u4ed6\u4eec\u4e2d\u6709\u4e00\u4e2a\u5728\u4e0a\u9762\u53eb\u9053\u3002\u4f46\u6211\u542c\u4e0d\u8fdb\u53bb\u3002\u6211\u542c\u5230\u6709\u4eba\u7b11\uff0c\u7136\u540e\u4ed6\u4eec\u7ee7\u7eed\u5f80\u4e0a\u8d70\uff0c\u8d8a\u6765\u8d8a\u8fdc\uff0c\u6700\u540e\u90fd\u6d88\u5931\u4e86\u3002",
        "\u65f6\u95f4\u5728\u6162\u6162\u5730\u8fc7\u53bb\u3002\u5f71\u5b50\u5728\u6162\u6162\u62c9\u957f\uff0c\u592a\u9633\u5df2\u7ecf\u6ca1\u5728\u897f\u8fb9\u4f4e\u77ee\u7684\u6811\u68a2\u4e0b\uff0c\u591c\u5e55\u5f00\u59cb\u964d\u4e34\u3002\u6211\u8db4\u5728\u5ca9\u77f3\u4e0a\uff0c\u795e\u60c5\u604d\u60da\uff0c\u5bb3\u6015\u548c\u75b2\u52b3\u5df2\u7ecf\u8ba9\u6211\u9ebb\u6728\u3002\u6211\u4e0d\u80fd\u52a8\u2014\u2014\u52a8\u5c31\u4f1a\u6389\u4e0b\u6765\u3002\u6211\u542c\u5230\u4e86\u67d0\u4e2a\u4eba\u54ed\u6ce3\u7684\u58f0\u97f3\uff0c\u7136\u540e\u610f\u8bc6\u5230\u54ed\u6ce3\u7684\u5c31\u662f\u6211\u81ea\u5df1\u3002",
        "\u66ae\u8272\u4e2d\uff0c\u7b2c\u4e00\u9897\u661f\u661f\u51fa\u73b0\u5728\u5929\u7a7a\u4e2d\u3002\u6811\u6797\u4e2d\u95ea\u70c1\u7740\u4e00\u9053\u624b\u7535\u7b52\u53d1\u51fa\u7684\u5149\uff0c\u7136\u540e\u6211\u542c\u5230\u4e86\u6770\u91cc\u548c\u7238\u7238\u7684\u558a\u58f0\u3002\u7238\u7238\u7684\u624b\u7535\u7b52\u7167\u7740\u6211\u3002\u201c\u4e0b\u6765\u5427\uff0c\u5b69\u5b50\uff0c\u201d\u4ed6\u5e26\u7740\u5b89\u6170\u7684\u53e3\u6c14\u8bf4\uff0c\u201c\u665a\u996d\u505a\u597d\u4e86\u3002\u201d",
        "\u201c\u6211\u4e0b\u4e0d\u53bb\uff01\u201d\u6211\u54ed\u7740\u8bf4\uff0c\u201c\u6211\u4f1a\u6389\u4e0b\u53bb\u7684\uff01\u6211\u4f1a\u6454\u6b7b\u7684\uff01\u201d",
        "\u201c\u542c\u6211\u8bf4\uff0c\u201d\u7238\u7238\u7ee7\u7eed\u8bf4\uff0c\u201c\u4e0d\u8981\u60f3\u6709\u591a\u8fdc\uff0c\u6709\u591a\u56f0\u96be\uff0c\u4f60\u9700\u8981\u60f3\u7684\u662f\u8fc8\u4e00\u5c0f\u6b65\uff0c\u8fd9\u4e2a\u4f60\u80fd\u505a\u5230\u3002\u770b\u7740\u624b\u7535\u5149\u6307\u7684\u5730\u65b9\uff0c\u770b\u5230\u90a3\u5757\u77f3\u5934\u6ca1\u6709\uff1f\u201d",
        "\u6211\u770b\u5230\u4e86\u3002\u201c\u73b0\u5728\uff0c\u628a\u5de6\u811a\u8e0f\u5230\u90a3\u5757\u77f3\u5934\u4e0a\uff0c\u4e0d\u8981\u62c5\u5fc3\u4e0b\u4e00\u6b65\u3002\u542c\u6211\u7684\u3002\u201d\u8fd9\u4f3c\u4e4e\u80fd\u529e\u5230\u3002\u6211\u5c0f\u5fc3\u7ffc\u7ffc\u5730\u4f38\u51fa\u5de6\u811a\u53bb\u63a2\u90a3\u5757\u5ca9\u77f3\uff0c\u800c\u4e14\u8e29\u5230\u4e86\u3002\u6211\u987f\u65f6\u6709\u4e86\u4fe1\u5fc3\u3002",
        "\u201c\u5f88\u597d\uff0c\u201d\u7238\u7238\u8bf4\uff0c\u201c\u73b0\u5728\u79fb\u53f3\u811a\uff0c\u5f80\u4e0b\u4e00\u70b9\uff0c\u90a3\u513f\u6709\u53e6\u4e00\u4e2a\u843d\u811a\u70b9\u3002\u201d\u6211\u53c8\u7167\u505a\u4e86\u3002",
        "\u5c31\u8fd9\u6837\uff0c\u4e00\u6b21\u4e00\u6b65\uff0c\u4e00\u6b21\u6362\u4e00\u4e2a\u5730\u65b9\u843d\u811a\uff0c\u6309\u7167\u4ed6\u8bf4\u7684\u5f80\u4e0b\u722c\uff0c\u7238\u7238\u5f3a\u8c03\u6bcf\u6b21\u6211\u53ea\u9700\u8981\u505a\u4e00\u4e2a\u7b80\u5355\u7684\u52a8\u4f5c\uff0c\u4ece\u6765\u4e0d\u8ba9\u6211\u6709\u673a\u4f1a\u505c\u4e0b\u6765\u601d\u8003\u4e0b\u9762\u7684\u8def\u8fd8\u5f88\u957f\u3002",
        "\u7a81\u7136\uff0c\u6211\u5411\u4e0b\u8fc8\u51fa\u4e86\u6700\u540e\u4e00\u6b65\uff0c\u7136\u540e\u8e29\u5230\u4e86\u5e95\u90e8\u51cc\u4e71\u7684\u5ca9\u77f3\uff0c\u6251\u8fdb\u4e86\u7238\u7238\u5f3a\u58ee\u7684\u81c2\u5f2f\u91cc\uff0c\u62bd\u564e\u4e86\u4e00\u4e0b\uff0c\u7136\u540e\u4ee4\u4eba\u60ca\u8bb6\u7684\u662f\uff0c\u6211\u6709\u4e86\u4e00\u79cd\u5de8\u5927\u7684\u6210\u5c31\u611f\u548c\u7c7b\u4f3c\u9a84\u50b2\u7684\u611f\u89c9\u3002",
        "\u6b64\u540e\uff0c\u6211\u751f\u547d\u4e2d\u6709\u5f88\u591a\u65f6\u523b\uff0c\u9762\u5bf9\u4e00\u4e2a\u9065\u4e0d\u53ef\u53ca\u7684\u76ee\u6807\uff0c\u6216\u8005\u4e00\u4e2a\u4ee4\u4eba\u754f\u60e7\u7684\u60c5\u5883\uff0c\u5f53\u6211\u611f\u5230\u60ca\u614c\u5931\u63aa\u65f6\uff0c\u6211\u90fd\u80fd\u591f\u8f7b\u677e\u5e94\u5bf9\u2014\u2014\u56e0\u4e3a\u6211\u56de\u60f3\u8d77\u4e86\u5f88\u4e45\u4ee5\u524d\u60ac\u5d16\u4e0a\u7684\u90a3\u4e00\u8bfe\u3002\u6211\u63d0\u9192\u81ea\u5df1\u4e0d\u8981\u770b\u4e0b\u9762\u9065\u8fdc\u7684\u5ca9\u77f3\uff0c\u800c\u662f\u6ce8\u610f\u76f8\u5bf9\u8f7b\u677e\u3001\u5bb9\u6613\u7684\u7b2c\u4e00\u5c0f\u6b65\uff0c\u8fc8\u51fa\u4e00\u5c0f\u6b65\uff0c\u518d\u4e00\u5c0f\u6b65\uff0c\u5c31\u8fd9\u6837\u4f53\u4f1a\u6bcf\u4e00\u6b65\u5e26\u6765\u7684\u6210\u5c31\u611f\uff0c\u76f4\u5230\u8fbe\u6210\u4e86\u81ea\u5df1\u7684\u76ee\u6807\u3002\u8fd9\u65f6\u6211\u4fbf\u53ef\u4ee5\u56de\u5934\u770b\u770b\u81ea\u5df1\u5df2\u7ecf\u8d70\u4e86\u591a\u8fdc\uff0c\u518d\u5bf9\u81ea\u5df1\u8bf4\uff0c\u6211\u505a\u5230\u4e86\u3002"
      ],
          textEn: [
        "It was in Philadelphia, on a blistering July day — even 56 years later, I can still feel that scorching heat wave. The five boys I was with had grown tired of playing marbles and burning holes in dry leaves with a magnifying glass, and were looking for something else to do.",
        "‘Hey, I have an idea!’ said Ned. ‘Let’s climb the cliff!’",
        "I hesitated. I longed to be as brave and active as the other boys, but for most of my eight years I had been a sickly child, and I kept my mother’s warning firmly in mind — I was not as strong as other children and must not take risks.",
        "We came to an open field. Far on the other side was a cliff, jutting out like a nearly vertical wall. From the jumbled rocks at the bottom to the grassy edge at the top was only about 60 feet, but to me it represented everything forbidden and impossible.",
        "The other boys climbed up one after another. Their figures grew smaller and smaller. I brought up the rear, panting, trembling, climbing upward. The rocks I gripped were cool, but my heart was full of fear.",
        "At some point I looked down and was terrified: the ground at the base of the cliff seemed impossibly far away. One slip and I would fall, crash against the cliff wall, and smash onto the rocks below, shattering to pieces. But the other boys had already reached the top.",
        "‘Come on, coward!’ one of them called from above. But I couldn’t listen. I heard laughter, then they moved on, farther and farther away, until they all disappeared.",
        "Time passed slowly. Shadows lengthened, the sun sank below the treetops, and darkness began to fall. I lay on the rock, dazed, numb with fear and exhaustion. I couldn’t move — if I moved, I would fall. I heard someone crying, then realized it was me.",
        "In the dusk, the first star appeared. Through the trees came a flashlight beam, then the voices of Jerry and my father. Dad’s flashlight found me. ‘Come down, son,’ he said in a comforting voice. ‘Dinner’s ready.’",
        "‘I can’t get down!’ I cried. ‘I’ll fall! I’ll die!’",
        "‘Listen,’ Dad continued, ‘don’t think about how far it is or how difficult it is. All you need to think about is taking one small step — you can do that. Look where the flashlight is pointing. Do you see that rock?’",
        "I saw it. ‘Now put your left foot on that rock. Don’t worry about the next step. Trust me.’ That seemed doable. I carefully stretched my left foot down to the rock and found it. My confidence surged.",
        "‘Good,’ Dad said. ‘Now move your right foot down a little — there’s another foothold.’ I did as he said.",
        "And so, one step at a time, one foothold at a time, I climbed down as he directed. Dad made sure I only had to make one simple move each time, never giving me a chance to think about how far I still had to go.",
        "Suddenly I took the last step down, stepped onto the jumbled rocks at the bottom, and fell into my father’s strong arms with a sob — then, surprisingly, I felt an enormous sense of accomplishment and something like pride.",
        "In many moments of my life since then, when facing a seemingly unreachable goal or a frightening situation, whenever I felt panicked and overwhelmed, I have been able to cope with ease — because I remembered that lesson on the cliff long ago. I remind myself not to look at the distant rocks below, but to focus on the relatively easy first small step. Take one small step, then another, savoring the sense of accomplishment each step brings, until I reach my goal. Then I can look back at how far I have come, and say to myself: I made it."
      ],
          textPinyin: [
            "n\u00e0 sh\u00ec z\u00e0i f\u00e8i ch\u00e9ng\uff0c y\u00ed g\u00e8 k\u00f9 r\u00e8 de q\u012b yu\u00e8 ti\u0101n\u2014\u2014 zh\u00ed d\u00e0o 5 6 ni\u00e1n h\u00f2u de j\u012bn ti\u0101n\uff0c w\u01d2 r\u00e9ng n\u00e9ng g\u01cen sh\u00f2u d\u00e0o d\u0101ng ni\u00e1n n\u00e0 g\u01d4 zhu\u00f3 r\u00e9n de r\u00e8 l\u00e0ng\u3002 h\u00e9 w\u01d2 z\u00e0i y\u00ec q\u01d0 de w\u01d4 g\u00e8 n\u00e1n h\u00e1i zi y\u01d0 j\u012bng y\u00e0n ju\u00e0n le w\u00e1n t\u00e1n zh\u016b\uff0c y\u01d0 j\u00ed y\u00f2ng t\u00f2u j\u00ecng z\u00e0i g\u0101n sh\u00f9 y\u00e8 sh\u00e0ng sh\u0101o d\u00f2ng de y\u00f3u x\u00ec\uff0c zh\u00e8ng z\u00e0i x\u00fan m\u00ec q\u00ed t\u0101 h\u01ceo w\u00e1n de sh\u00ec\u3002",
            "\u201c h\u0113i\uff0c w\u01d2 y\u01d2u zh\u01d4 y\u00ec le\uff01 \u201d n\u00e8i d\u00e9 shu\u014d\uff0c \u201c w\u01d2 men p\u00e1 xu\u00e1n y\u00e1 q\u00f9\uff01 \u201d",
            "w\u01d2 y\u00f3u y\u00f9 le\u3002 w\u01d2 k\u011b w\u00e0ng xi\u00e0ng t\u0101 men y\u00ed y\u00e0ng y\u01d2ng g\u01cen h\u00e9 hu\u00f3 yu\u00e8\uff0c d\u00e0n sh\u00ec z\u00e0i gu\u00f2 q\u00f9 de b\u0101 ni\u00e1n su\u00ec yu\u00e8 zh\u014dng\uff0c w\u01d2 ju\u00e9 d\u00e0 b\u00f9 fen sh\u00ed ji\u0101n d\u014du sh\u00ec y\u00ed g\u00e8 b\u00ecng ru\u00f2 de h\u00e1i zi\uff0c b\u00ecng ji\u0101ng m\u0101 ma de j\u01d0ng g\u00e0o l\u00e1o j\u00ec z\u00e0i x\u012bn\u2014\u2014 w\u01d2 b\u00fa xi\u00e0ng q\u00ed t\u0101 h\u00e1i zi n\u00e0 y\u00e0ng qi\u00e1ng zhu\u00e0ng\uff0c \u00e9r qi\u011b b\u00f9 n\u00e9ng m\u00e0o xi\u01cen\u3002",
            "w\u01d2 men l\u00e1i d\u00e0o y\u00ed ku\u00e0i k\u00f2ng d\u00ec sh\u00e0ng\u3002 z\u00e0i h\u011bn yu\u01cen de l\u00ecng y\u00ec bi\u0101n\uff0c y\u01d2u y\u00ed d\u00e0o xu\u00e1n y\u00e1\uff0c xi\u00e0ng y\u00ed mi\u00e0n j\u01d0 j\u00ecn chu\u00ed zh\u00ed de qi\u00e1ng t\u016b w\u00f9 d\u00ec s\u01d2ng l\u00ec z\u00e0i y\u00e1n sh\u00ed zh\u014dng\u3002 c\u00f3ng d\u01d0 b\u00f9 z\u00e1 lu\u00e0n de y\u00e1n sh\u00ed d\u00e0o d\u01d0ng b\u00f9 c\u01ceo p\u00ed de bi\u0101n yu\u00e1n\uff0c zh\u01d0 y\u01d2u 6 0 y\u012bng ch\u01d0 zu\u01d2 y\u00f2u\uff0c d\u00e0n sh\u00ec du\u00ec w\u01d2 l\u00e1i shu\u014d\uff0c zh\u00e8 sh\u00ec y\u00e1n j\u00ecn h\u00e9 b\u00f9 k\u011b n\u00e9ng de hu\u00e0 sh\u0113n\u3002",
            "q\u00ed t\u0101 n\u00e1n h\u00e1i zi y\u00ed g\u00e8 ji\u0113 y\u00ed g\u00e8 d\u00ec xi\u00e0ng sh\u00e0ng p\u0101n d\u0113ng zhe\u3002 t\u0101 men de sh\u0113n y\u01d0ng yu\u00e8 l\u00e1i yu\u00e8 xi\u01ceo\u3002 w\u01d2 lu\u00f2 z\u00e0i zu\u00ec h\u00f2u\uff0c q\u00ec chu\u01cen x\u016b x\u016b\u3001 h\u00fan sh\u0113n f\u0101 d\u01d2u d\u00ec xi\u00e0ng sh\u00e0ng p\u00e1\u3002 w\u01d2 sh\u01d2u b\u0101 de sh\u00ed tou li\u00e1ng li\u00e1ng de\uff0c x\u012bn zh\u014dng qu\u00e8 h\u011bn k\u01d2ng j\u00f9\u3002",
            "b\u00f9 zh\u012b h\u00e9 sh\u00ed\uff0c w\u01d2 hu\u00ed t\u00f3u xi\u00e0ng xi\u00e0 k\u00e0n le y\u00ec y\u01cen\uff0c r\u00e1n h\u00f2u xi\u00e0 hu\u00e0i le\uff1a xu\u00e1n y\u00e1 d\u01d0 xi\u00e0 de d\u00ec mi\u00e0n k\u00e0n q\u01d0 l\u00e1i f\u0113i ch\u00e1ng y\u00e1o yu\u01cen\uff1b zh\u01d0 y\u00e0o hu\u00e1 y\u00ed xi\u00e0\uff0c w\u01d2 ji\u00f9 hu\u00ec di\u00e0o xi\u00e0 q\u00f9\uff0c zhu\u00e0ng sh\u00e0ng y\u00e1 b\u00ec\uff0c r\u00e1n h\u00f2u shu\u0101i d\u00e0o y\u00e1n sh\u00ed sh\u00e0ng\uff0c shu\u0101i g\u00e8 f\u011bn su\u00ec\u3002 d\u00e0n sh\u00ec q\u00ed t\u0101 de h\u00e1i zi y\u01d0 j\u012bng d\u00e0o le y\u00e1 d\u01d0ng\u3002",
            "\u201c l\u00e1i ya\uff0c d\u01cen xi\u01ceo gu\u01d0\uff01 \u201d t\u0101 men zh\u014dng y\u01d2u y\u00ed g\u00e8 z\u00e0i sh\u00e0ng mi\u00e0n ji\u00e0o d\u00e0o\u3002 d\u00e0n w\u01d2 t\u012bng b\u00fa j\u00ecn q\u00f9\u3002 w\u01d2 t\u012bng d\u00e0o y\u01d2u r\u00e9n xi\u00e0o\uff0c r\u00e1n h\u00f2u t\u0101 men j\u00ec x\u00f9 w\u01ceng sh\u00e0ng z\u01d2u\uff0c yu\u00e8 l\u00e1i yu\u00e8 yu\u01cen\uff0c zu\u00ec h\u00f2u d\u014du xi\u0101o sh\u012b le\u3002",
            "sh\u00ed ji\u0101n z\u00e0i m\u00e0n m\u00e0n d\u00ec gu\u00f2 q\u00f9\u3002 y\u01d0ng z\u01d0 z\u00e0i m\u00e0n m\u00e0n l\u0101 ch\u00e1ng\uff0c t\u00e0i y\u00e1ng y\u01d0 j\u012bng m\u00e9i z\u00e0i x\u012b bi\u0101n d\u012b \u01cei de sh\u00f9 sh\u0101o xi\u00e0\uff0c y\u00e8 m\u00f9 k\u0101i sh\u01d0 ji\u00e0ng l\u00edn\u3002 w\u01d2 p\u0101 z\u00e0i y\u00e1n sh\u00ed sh\u00e0ng\uff0c sh\u00e9n q\u00edng hu\u01ceng h\u016b\uff0c h\u00e0i p\u00e0 h\u00e9 p\u00ed l\u00e1o y\u01d0 j\u012bng r\u00e0ng w\u01d2 m\u00e1 m\u00f9\u3002 w\u01d2 b\u00f9 n\u00e9ng d\u00f2ng\u2014\u2014 d\u00f2ng ji\u00f9 hu\u00ec di\u00e0o xi\u00e0 l\u00e1i\u3002 w\u01d2 t\u012bng d\u00e0o le m\u01d2u g\u00e8 r\u00e9n k\u016b q\u00ec de sh\u0113ng y\u012bn\uff0c r\u00e1n h\u00f2u y\u00ec sh\u00ed d\u00e0o k\u016b q\u00ec de ji\u00f9 sh\u00ec w\u01d2 z\u00ec j\u01d0\u3002",
            "m\u00f9 s\u00e8 zh\u014dng\uff0c d\u00ec y\u012b k\u0113 x\u012bng x\u012bng ch\u016b xi\u00e0n z\u00e0i ti\u0101n k\u014dng zh\u014dng\u3002 sh\u00f9 l\u00edn zh\u014dng sh\u01cen shu\u00f2 zhe y\u00ed d\u00e0o sh\u01d2u di\u00e0n t\u01d2ng f\u0101 ch\u016b de gu\u0101ng\uff0c r\u00e1n h\u00f2u w\u01d2 t\u012bng d\u00e0o le ji\u00e9 l\u01d0 h\u00e9 b\u00e0 ba de h\u01cen sh\u0113ng\u3002 b\u00e0 ba de sh\u01d2u di\u00e0n t\u01d2ng zh\u00e0o zhe w\u01d2\u3002 \u201c xi\u00e0 l\u00e1i ba\uff0c h\u00e1i zi\uff0c \u201d t\u0101 d\u00e0i zhe \u0101n w\u00e8i de k\u01d2u q\u00ec shu\u014d\uff0c \u201c w\u01cen f\u00e0n zu\u00f2 h\u01ceo le\u3002 \u201d",
            "\u201c w\u01d2 xi\u00e0 b\u00fa q\u00f9\uff01 \u201d w\u01d2 k\u016b zhe shu\u014d\uff0c \u201c w\u01d2 hu\u00ec di\u00e0o xi\u00e0 q\u00f9 de\uff01 w\u01d2 hu\u00ec shu\u0101i s\u01d0 de\uff01 \u201d",
            "\u201c t\u012bng w\u01d2 shu\u014d\uff0c \u201d b\u00e0 ba j\u00ec x\u00f9 shu\u014d\uff0c \u201c b\u00fa y\u00e0o xi\u01ceng y\u01d2u du\u014d yu\u01cen\uff0c y\u01d2u du\u014d k\u00f9n n\u00e1n\uff0c n\u01d0 x\u016b y\u00e0o xi\u01ceng de sh\u00ec m\u00e0i y\u00ec xi\u01ceo b\u00f9\uff0c zh\u00e8 g\u00e8 n\u01d0 n\u00e9ng zu\u00f2 d\u00e0o\u3002 k\u00e0n zhu\u00f3 sh\u01d2u di\u00e0n gu\u0101ng zh\u01d0 de d\u00ec f\u0101ng\uff0c k\u00e0n d\u00e0o n\u00e0 ku\u00e0i sh\u00ed tou m\u00e9i y\u01d2u\uff1f \u201d",
            "w\u01d2 k\u00e0n d\u00e0o le\u3002 \u201c xi\u00e0n z\u00e0i\uff0c b\u01ce zu\u01d2 ji\u01ceo t\u00e0 d\u00e0o n\u00e0 ku\u00e0i sh\u00ed tou sh\u00e0ng\uff0c b\u00fa y\u00e0o d\u0101n x\u012bn xi\u00e0 y\u00ed b\u00f9\u3002 t\u012bng w\u01d2 de\u3002 \u201d zh\u00e8 s\u00ec h\u016b n\u00e9ng b\u00e0n d\u00e0o\u3002 w\u01d2 xi\u01ceo x\u012bn y\u00ec y\u00ec d\u00ec sh\u0113n ch\u016b zu\u01d2 ji\u01ceo q\u00f9 t\u00e0n n\u00e0 ku\u00e0i y\u00e1n sh\u00ed\uff0c \u00e9r qi\u011b c\u01cei d\u00e0o le\u3002 w\u01d2 d\u00f9n sh\u00ed y\u01d2u le x\u00ecn x\u012bn\u3002",
            "\u201c h\u011bn h\u01ceo\uff0c \u201d b\u00e0 ba shu\u014d\uff0c \u201c xi\u00e0n z\u00e0i y\u00ed y\u00f2u ji\u01ceo\uff0c w\u01ceng xi\u00e0 y\u00ec di\u01cen\uff0c n\u00e0 \u00e9r y\u01d2u l\u00ecng y\u00ed g\u00e8 lu\u00f2 ji\u01ceo di\u01cen\u3002 \u201d w\u01d2 y\u00f2u zh\u00e0o zu\u00f2 le\u3002",
            "ji\u00f9 zh\u00e8 y\u00e0ng\uff0c y\u00ed c\u00ec y\u00ed b\u00f9\uff0c y\u00ed c\u00ec hu\u00e0n y\u00ed g\u00e8 d\u00ec f\u0101ng lu\u00f2 ji\u01ceo\uff0c \u00e0n zh\u00e0o t\u0101 shu\u014d de w\u01ceng xi\u00e0 p\u00e1\uff0c b\u00e0 ba qi\u00e1ng di\u00e0o m\u011bi c\u00ec w\u01d2 zh\u012b x\u016b y\u00e0o zu\u00f2 y\u00ed g\u00e8 ji\u01cen d\u0101n de d\u00f2ng zu\u00f2\uff0c c\u00f3ng l\u00e1i b\u00fa r\u00e0ng w\u01d2 y\u01d2u j\u012b hu\u00ec t\u00edng xi\u00e0 l\u00e1i s\u012b k\u01ceo xi\u00e0 mi\u00e0n de l\u00f9 h\u00e1i h\u011bn ch\u00e1ng\u3002",
            "t\u016b r\u00e1n\uff0c w\u01d2 xi\u00e0ng xi\u00e0 m\u00e0i ch\u016b le zu\u00ec h\u00f2u y\u00ed b\u00f9\uff0c r\u00e1n h\u00f2u c\u01cei d\u00e0o le d\u01d0 b\u00f9 l\u00edng lu\u00e0n de y\u00e1n sh\u00ed\uff0c p\u016b j\u00ecn le b\u00e0 ba qi\u00e1ng zhu\u00e0ng de b\u00ec w\u0101n l\u01d0\uff0c ch\u014du y\u0113 le y\u00ed xi\u00e0\uff0c r\u00e1n h\u00f2u l\u00ecng r\u00e9n j\u012bng y\u00e0 de sh\u00ec\uff0c w\u01d2 y\u01d2u le y\u00ec zh\u01d2ng j\u00f9 d\u00e0 de ch\u00e9ng ji\u00f9 g\u01cen h\u00e9 l\u00e8i s\u00ec ji\u0101o \u00e0o de g\u01cen ju\u00e9\u3002",
            "c\u01d0 h\u00f2u\uff0c w\u01d2 sh\u0113ng m\u00ecng zh\u00f2ng y\u01d2u h\u011bn du\u014d sh\u00ed k\u00e8\uff0c mi\u00e0n du\u00ec y\u00ed g\u00e8 y\u00e1o b\u00f9 k\u011b j\u00ed de m\u00f9 bi\u0101o\uff0c hu\u00f2 zh\u011b y\u00ed g\u00e8 l\u00ecng r\u00e9n w\u00e8i j\u00f9 de q\u00edng j\u00ecng\uff0c d\u0101ng w\u01d2 g\u01cen d\u00e0o j\u012bng hu\u0101ng sh\u012b cu\u00f2 sh\u00ed\uff0c w\u01d2 d\u014du n\u00e9ng g\u00f2u q\u012bng s\u014dng y\u00ecng du\u00ec\u2014\u2014 y\u012bn w\u00e8i w\u01d2 hu\u00ed xi\u01ceng q\u01d0 le h\u011bn ji\u01d4 y\u01d0 qi\u00e1n xu\u00e1n y\u00e1 sh\u00e0ng de n\u00e0 y\u00ed k\u00e8\u3002 w\u01d2 t\u00ed x\u01d0ng z\u00ec j\u01d0 b\u00fa y\u00e0o k\u00e0n xi\u00e0 mi\u00e0n y\u00e1o yu\u01cen de y\u00e1n sh\u00ed\uff0c \u00e9r sh\u00ec zh\u00f9 y\u00ec xi\u0101ng du\u00ec q\u012bng s\u014dng\u3001 r\u00f3ng y\u00ec de d\u00ec y\u00ec xi\u01ceo b\u00f9\uff0c m\u00e0i ch\u016b y\u00ec xi\u01ceo b\u00f9\uff0c z\u00e0i y\u00ec xi\u01ceo b\u00f9\uff0c ji\u00f9 zh\u00e8 y\u00e0ng t\u01d0 hu\u00ec m\u011bi y\u00ed b\u00f9 d\u00e0i l\u00e1i de ch\u00e9ng ji\u00f9 g\u01cen\uff0c zh\u00ed d\u00e0o d\u00e1 ch\u00e9ng le z\u00ec j\u01d0 de m\u00f9 bi\u0101o\u3002 zh\u00e8 sh\u00ed w\u01d2 bi\u00e0n k\u011b y\u01d0 hu\u00ed t\u00f3u k\u00e0n k\u00e0n z\u00ec j\u01d0 y\u01d0 j\u012bng z\u01d2u le du\u014d yu\u01cen\uff0c z\u00e0i du\u00ec z\u00ec j\u01d0 shu\u014d\uff0c w\u01d2 zu\u00f2 d\u00e0o le\u3002"
          ],
          annotations: [
            { id: 1, term: "灼", pinyin: "zhuó", definition: "烧，烫。", definitionEn: "To burn, to scorch." },
            { id: 2, term: "恍惚", pinyin: "huǎnghū", definition: "神志不清，精神不集中。", definitionEn: "Dazed, absent-minded." },
            { id: 3, term: "抽噎", pinyin: "chōuyē", definition: "一吸一顿地哭泣。", definitionEn: "To sob with hiccupping breaths." }
          ],
          readingTips: [{
            cn: "本文是作者对自己童年时代一件往事的回忆。文章按照时间顺序，讲述了自己从冒险到遇险，再到脱险的全过程。这个过程，其实也是\u201C我\u201D从胆怯、恐惧到克服心理障碍，收获自信，甚至有了一种成就感的心路历程。默读课文，勾画出文中标志事件发展和描写\u201C我\u201D不同阶段心理活动的语句，试着复述这个故事。",
            en: "This text is the author's recollection of a childhood experience. Following chronological order, it tells the entire process from taking a risk to being in danger to being rescued. This is also the narrator's psychological journey from timidity and fear to overcoming mental barriers and gaining confidence. While reading silently, mark the sentences that signal plot development and describe the narrator's changing psychology."
          }],
          teachingPoints: [
            { cn: "学习心理描写的方法——通过内心独白和环境烘托表现人物心理。", en: "Learn methods of psychological description — expressing a character's psychology through inner monologue and environmental atmosphere." },
            { cn: "理解\u201C走一步，再走一步\u201D的深层含义：面对大困难时，将其分解为小步骤。", en: "Understand the deeper meaning of 'one step, then another': when facing great difficulties, break them into small steps." }
          ],
          parentTips: [
            { cn: "当孩子遇到困难时，可以引导他们运用\u201C走一步，再走一步\u201D的方法，将大目标分解为可实现的小步骤。", en: "When your child faces difficulties, guide them to use the 'one step at a time' method, breaking big goals into achievable small steps." }
          ]
        },
        {
          id: 15,
          title: "诫子书",
          titleEn: "Letter of Admonition to His Son",
          difficulty: 4,
          author: "诸葛亮",
          authorEn: "Zhuge Liang",
          source: "选自《诸葛亮集·文集》卷一（中华书局2012年版）。",
          sourceEn: "Selected from Collected Works of Zhuge Liang, Literary Works, Vol. 1 (Zhonghua Book Company, 2012).",
          vocabWords: [
            {word:'淡泊',pinyin:'dàn bó',en:'indifferent to fame and fortune',sentence:'非淡泊无以明志。',sentenceEn:'Without indifference to fame and fortune, one cannot make clear one aspirations.'},
            {word:'宁静',pinyin:'níng jìng',en:'tranquil',sentence:'非宁静无以致远。',sentenceEn:'Without tranquility, one cannot reach far.'},
            {word:'志',pinyin:'zhì',en:'aspiration; ambition',sentence:'非学无以广才，非志无以成学。',sentenceEn:'Without learning, one cannot broaden talent; without ambition, one cannot achieve learning.'},
            {word:'淫慢',pinyin:'yín màn',en:'indulgent and slack',sentence:'淫慢则不能励精。',sentenceEn:'Indulgence and slackness prevent one from cultivating spirit.'},
            {word:'险躁',pinyin:'xiǎn zào',en:'reckless and impatient',sentence:'险躁则不能治性。',sentenceEn:'Recklessness and impatience prevent one from cultivating character.'}
          ],
          footnotes: [
            {term:"\u6de1\u6cca", termEn:"indifferent to fame and fortune", definition:"\u3010d\u00e0n b\u00f3\u3011indifferent to fame and fortune\u3002", definitionEn:"indifferent to fame and fortune"},
            {term:"\u5b81\u9759", termEn:"tranquil", definition:"\u3010n\u00edng j\u00ecng\u3011tranquil\u3002", definitionEn:"tranquil"},
            {term:"\u5fd7", termEn:"aspiration; ambition", definition:"\u3010zh\u00ec\u3011aspiration; ambition\u3002", definitionEn:"aspiration; ambition"},
            {term:"\u6deb\u6162", termEn:"indulgent and slack", definition:"\u3010y\u00edn m\u00e0n\u3011indulgent and slack\u3002", definitionEn:"indulgent and slack"},
            {term:"\u9669\u8e81", termEn:"reckless and impatient", definition:"\u3010xi\u01cen z\u00e0o\u3011reckless and impatient\u3002", definitionEn:"reckless and impatient"}
          ],
          readingTips: [
            {cn:"\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f", en:"Pay attention to the author's narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?"},
            {cn:"\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f", en:"After reading, think: what theme does the author convey? How does the title relate to the content?"}
          ],
          grammarPoints: [
            {point:'正反论证',pointEn:'zhèng fǎn lùn zhèng',example:'argument from both sides',exampleEn:'非淡泊无以明志，非宁静无以致远。',explanation:'Without indifference, no clear aspiration; without tranquility, no far-reaching goals.',explanationEn:'用双重否定从正反两面论证修身治学的道理'}
          ],
          authorBio: {
            cn: "诸葛亮（181—234），字孔明，琅玡阳都（今山东沂南南）人，三国时蜀汉政治家、军事家。",
            en: "Zhuge Liang (181–234), courtesy name Kongming, was from Langya Yangdu (now southern Yinan, Shandong). He was a statesman and military strategist of Shu Han during the Three Kingdoms period."
          },
          isSelfRead: false,
          preview: [
            { cn: "古人往往在家信中寄语子女弟侄，予以教诲与劝勉。课文是诸葛亮写给儿子的一封家书，殷殷教诲中蕴含着深切的期望。", en: "The ancients often used family letters to instruct and encourage their children and nephews. This text is a letter Zhuge Liang wrote to his son, containing earnest teachings and deep expectations." }
          ],
          text: [
        "\u592b\u541b\u5b50\u4e4b\u884c\uff0c\u9759\u4ee5\u4fee\u8eab\uff0c\u4fed\u4ee5\u517b\u5fb7\u3002\u975e\u6de1\u6cca\u65e0\u4ee5\u660e\u5fd7\uff0c\u975e\u5b81\u9759\u65e0\u4ee5\u81f4\u8fdc\u3002\u592b\u5b66\u987b\u9759\u4e5f\uff0c\u624d\u987b\u5b66\u4e5f\uff0c\u975e\u5b66\u65e0\u4ee5\u5e7f\u624d\uff0c\u975e\u5fd7\u65e0\u4ee5\u6210\u5b66\u3002\u6deb\u6162\u5219\u4e0d\u80fd\u52b1\u7cbe\uff0c\u9669\u8e81\u5219\u4e0d\u80fd\u6cbb\u6027\u3002\u5e74\u4e0e\u65f6\u9a70\uff0c\u610f\u4e0e\u65e5\u53bb\uff0c\u9042\u6210\u67af\u843d\uff0c\u591a\u4e0d\u63a5\u4e16\uff0c\u60b2\u5b88\u7a77\u5e90\uff0c\u5c06\u590d\u4f55\u53ca\uff01"
      ],
          textEn: [
        "The conduct of a gentleman requires tranquility to cultivate the self and frugality to nurture virtue. Without serenity, one cannot clarify one’s aspirations; without tranquility, one cannot reach far. Study requires tranquility, talent requires study; without study, one cannot broaden one’s talent; without aspiration, one cannot accomplish one’s study. Indulgence and sloth cannot invigorate the spirit; rashness and impatience cannot cultivate one’s nature. Years race along with time, willpower fades with the days — one withers and decays, mostly unable to contribute to the world, sadly guarding a humble hut. What use is regret then?"
      ],
          textPinyin: [
            "f\u016b j\u016bn z\u01d0 zh\u012b x\u00edng\uff0c j\u00ecng y\u01d0 xi\u016b sh\u0113n\uff0c ji\u01cen y\u01d0 y\u01ceng d\u00e9\u3002 f\u0113i d\u00e0n b\u00f3 w\u00fa y\u01d0 m\u00edng zh\u00ec\uff0c f\u0113i n\u00edng j\u00ecng w\u00fa y\u01d0 zh\u00ec yu\u01cen\u3002 f\u016b xu\u00e9 x\u016b j\u00ecng y\u011b\uff0c c\u00e1i x\u016b xu\u00e9 y\u011b\uff0c f\u0113i xu\u00e9 w\u00fa y\u01d0 gu\u01ceng c\u00e1i\uff0c f\u0113i zh\u00ec w\u00fa y\u01d0 ch\u00e9ng xu\u00e9\u3002 y\u00edn m\u00e0n z\u00e9 b\u00f9 n\u00e9ng l\u00ec j\u012bng\uff0c xi\u01cen z\u00e0o z\u00e9 b\u00f9 n\u00e9ng zh\u00ec x\u00ecng\u3002 ni\u00e1n y\u01d4 sh\u00ed ch\u00ed\uff0c y\u00ec y\u01d4 r\u00ec q\u00f9\uff0c su\u00ec ch\u00e9ng k\u016b lu\u00f2\uff0c du\u014d b\u00f9 ji\u0113 sh\u00ec\uff0c b\u0113i sh\u01d2u qi\u00f3ng l\u00fa\uff0c ji\u0101ng f\u00f9 h\u00e9 j\u00ed\uff01"
          ],
          annotations: [
            { id: 1, term: "淡泊", pinyin: "dànbó", definition: "内心恬淡，不慕名利。", definitionEn: "Inner tranquility, not craving fame or gain." },
            { id: 2, term: "致远", pinyin: "zhìyuǎn", definition: "达到远大目标。致，达到。", definitionEn: "To achieve far-reaching goals. 致 means to reach." },
            { id: 3, term: "淫慢", pinyin: "yínmàn", definition: "放纵懈怠。淫，放纵。慢，懈怠。", definitionEn: "Indulgent and slack. 淫 means indulgent; 慢 means lax." },
            { id: 4, term: "险躁", pinyin: "xiǎnzào", definition: "轻薄浮躁。与上文\u201C宁静\u201D相对而言。", definitionEn: "Rash and impetuous, contrasting with 'tranquility' above." },
            { id: 5, term: "枯落", pinyin: "kūluò", definition: "凋落，衰残。比喻人年老志衰，没有用处。", definitionEn: "To wither and decay; a metaphor for growing old and losing one's ambition." }
          ],
          thinkExplore: [
            { cn: "说说你对以下两句话的理解。1. 静以修身，俭以养德。2. 非淡泊无以明志，非宁静无以致远。", en: "Share your understanding of: 1. Cultivate the self through tranquility, nurture virtue through frugality. 2. Without serenity, one cannot clarify aspirations; without tranquility, one cannot reach far." },
            { cn: "画出文中提到\u201C志\u201D的语句，联系上下文，说说你对文中\u201C志\u201D与\u201C学\u201D的关系是如何理解的。", en: "Identify sentences mentioning 'aspiration' and discuss how you understand the relationship between 'aspiration' and 'learning' in the text." }
          ],
          accumExtend: [
            { cn: "背诵全文。", en: "Recite the entire text from memory." }
          ],
          teachingPoints: [
            { cn: "学习文言文中对偶句式的运用及其表达效果。", en: "Learn the use of parallel sentence structures in classical Chinese and their expressive effects." },
            { cn: "理解\u201C静\u201D\u201C俭\u201D\u201C淡泊\u201D\u201C宁静\u201D等修身概念。", en: "Understand self-cultivation concepts such as 'tranquility,' 'frugality,' 'serenity,' and 'peace.' " }
          ],
          parentTips: [
            { cn: "可与孩子一起背诵这篇短文，讨论\u201C志\u201D与\u201C学\u201D的关系，帮助孩子树立远大志向。", en: "Recite this short text together and discuss the relationship between aspiration and learning, helping your child set lofty goals." }
          ]
        }
      ],
      writing: {
        title: "思路要清晰",
        titleEn: "Keep Your Train of Thought Clear",
        vocabWords: [
          {word:'思路',pinyin:'sī lù',en:'train of thought',sentence:'写文章要思路清晰。',sentenceEn:'Writing articles requires a clear train of thought.'},
          {word:'层次',pinyin:'céng cì',en:'layers; structure',sentence:'文章要有清晰的层次。',sentenceEn:'An article must have clear structural layers.'},
          {word:'过渡',pinyin:'guò dù',en:'transition',sentence:'段落之间要有自然的过渡。',sentenceEn:'There should be natural transitions between paragraphs.'},
          {word:'总结',pinyin:'zǒng jié',en:'summarize',sentence:'文章结尾要有简洁的总结。',sentenceEn:'An article ending should have a concise summary.'},
          {word:'条理',pinyin:'tiáo lǐ',en:'orderliness',sentence:'叙事要有条理。',sentenceEn:'Narration should be orderly.'}
        ],
        content: {
          cn: "\u201C思路，是个比喻的说法，把一番话、一篇文章比作思想走的一条路。\u201D具体要求就是条理清楚，层次分明。要做到思路清晰，可以从整体构思、确定写作顺序和列提纲三个方面入手。",
          en: "'Train of thought' is a metaphor, comparing a passage or article to a path that thought follows. The specific requirement is clear organization and distinct levels. To achieve clear thinking, start with overall conception, determine the writing order, and create an outline."
        }
      },
      readWrite: null,
      comprehensiveLearning: {
        title: "少年正是读书时",
        titleEn: "Youth Is the Time for Reading",
        vocabWords: [
          {word:'读书',pinyin:'dú shū',en:'reading',sentence:'少年正是读书时。',sentenceEn:'Youth is the time for reading.'},
          {word:'阅读',pinyin:'yuè dú',en:'read',sentence:'培养良好的阅读习惯。',sentenceEn:'Develop good reading habits.'},
          {word:'经典',pinyin:'jīng diǎn',en:'classic',sentence:'多读经典名著。',sentenceEn:'Read more classic masterpieces.'},
          {word:'积累',pinyin:'jī lěi',en:'accumulate',sentence:'读书要注重积累。',sentenceEn:'Reading should focus on accumulation.'},
          {word:'视野',pinyin:'shì yě',en:'horizon; vision',sentence:'读书能开阔视野。',sentenceEn:'Reading broadens horizons.'}
        ],
        content: {
          cn: "语文学习，得法于课内，得益于课外。课外阅读是课内阅读的延伸和补充。每天拿出一定的时间读一点儿好书，不仅可以开阔眼界，增长知识，启迪思维，还可以塑造良好的精神气质。让我们一起想办法，激发阅读的兴趣，养成阅读的习惯，营造一个良好的读书环境吧！",
          en: "Language learning benefits from in-class methods and out-of-class practice. Extracurricular reading extends and supplements classroom reading. Setting aside time each day to read good books broadens horizons, increases knowledge, inspires thinking, and shapes good character. Let's find ways to spark reading interest, develop reading habits, and create a good reading environment!"
        }
      },
      classicBookGuide: null,
      extracurricularPoetry: null
    },
    /* ─── Unit 5 动物与人 ─── */
    {
      id: 5,
      title: "第五单元",
      titleEn: "Unit 5",
      theme: "动物与人",
      themeEn: "Animals and Humans",
      unitIntro: {
        cn: "人与动物都是大自然的\u201C成员\u201D，人类始终面对着如何与动物相处共存的问题。本单元课文描绘了人与动物相处的种种情形，有的表达了对动物的欣赏、对其命运的关注，有的表现了人与动物的矛盾冲突。阅读这些文章，可以增进对人与大自然关系的理解，加强对人类自我的理解和反思，形成尊重动物、善待生命的意识。本单元继续学习默读。边读边思考，勾画出重要语句或段落，并学做摘录。还要在把握段落大意、理清思路的基础上，学会概括文章的中心思想。",
        en: "Humans and animals are both 'members' of nature, and humanity has always faced the question of how to coexist with animals. The texts in this unit depict various situations of human-animal interaction: some express admiration for animals and concern for their fate, while others present conflicts between humans and animals. Reading these articles can deepen understanding of the human-nature relationship, strengthen self-reflection, and cultivate respect for animals and life. This unit continues to practice silent reading. Read while thinking, underline important sentences or paragraphs, and learn to take notes. Build on grasping paragraph meanings and clarifying the train of thought to learn how to summarize the central idea of an article."
      },
      type: "kewen",
      lessons: [
        {
          id: 16,
          title: "猫",
          titleEn: "Cats",
          difficulty: 4,
          author: "郑振铎",
          authorEn: "Zheng Zhenduo",
          source: "选自《郑振铎选集》上册（福建人民出版社1984年版）。",
          sourceEn: "Selected from Selected Works of Zheng Zhenduo, Vol. 1 (Fujian People's Publishing House, 1984).",
          vocabWords: [
            {word:'污涩',pinyin:'wū sè',en:'dirty and rough',sentence:'毛色花白，并不好看，又很瘦。',sentenceEn:'Its coat was patchy white, not pretty, and very thin.'},
            {word:'怂恿',pinyin:'sǒng yǒng',en:'urge; egg on',sentence:'三妹便怂恿着她去拿一只来。',sentenceEn:'The third sister urged her to go get one.'},
            {word:'怅然',pinyin:'chàng rán',en:'melancholy',sentence:'我也怅然地，愤恨地。',sentenceEn:'I was also melancholy and indignant.'},
            {word:'蜷伏',pinyin:'quán fú',en:'curl up',sentence:'冬天的早晨，门口蜷伏着一只很可怜的小猫。',sentenceEn:'On a winter morning, a pitiful kitten was curled up at the door.'},
            {word:'冤枉',pinyin:'yuān wǎng',en:'falsely accuse',sentence:'我没有判断明白，便妄下断语，冤枉了一只不能说话辩诉的动物。',sentenceEn:'Without judging clearly, I rashly made a verdict and falsely accused an animal that could not speak in its own defense.'}
          ],
          footnotes: [
            {term:"\u6c61\u6da9", termEn:"dirty and rough", definition:"\u3010w\u016b s\u00e8\u3011dirty and rough\u3002", definitionEn:"dirty and rough"},
            {term:"\u6002\u607f", termEn:"urge; egg on", definition:"\u3010s\u01d2ng y\u01d2ng\u3011urge; egg on\u3002", definitionEn:"urge; egg on"},
            {term:"\u6005\u7136", termEn:"melancholy", definition:"\u3010ch\u00e0ng r\u00e1n\u3011melancholy\u3002", definitionEn:"melancholy"},
            {term:"\u8737\u4f0f", termEn:"curl up", definition:"\u3010qu\u00e1n f\u00fa\u3011curl up\u3002", definitionEn:"curl up"},
            {term:"\u51a4\u6789", termEn:"falsely accuse", definition:"\u3010yu\u0101n w\u01ceng\u3011falsely accuse\u3002", definitionEn:"falsely accuse"}
          ],
          readingTips: [
            {cn:"\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f", en:"Pay attention to the author's narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?"},
            {cn:"\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f", en:"After reading, think: what theme does the author convey? How does the title relate to the content?"}
          ],
          grammarPoints: [
            {point:'首尾呼应',pointEn:'shǒu wěi hū yìng',example:'beginning and end echo each other',exampleEn:'自此，我家永不养猫。',explanation:'From then on, my family never kept cats again.',explanationEn:'三次养猫经历层层递进，最后的永不养猫呼应全文主题'},
            {point:'对比',pointEn:'duì bǐ',example:'contrast',exampleEn:'三只猫的不同命运形成鲜明对比。',explanation:'The different fates of the three cats form a sharp contrast.',explanationEn:'通过三只猫的对比深化主题——不要妄下结论'}
          ],
          authorBio: {
            cn: "郑振铎（1898—1958），笔名西谛，福建长乐人，作家、翻译家、文学史家。",
            en: "Zheng Zhenduo (1898–1958), pen name Xidi, was from Changle, Fujian. He was a writer, translator, and literary historian."
          },
          isSelfRead: false,
          preview: [
            { cn: "一个爱猫的家庭最终\u201C永不养猫\u201D，其间发生了什么事情？带着这个问题去读课文，注意梳理文章的思路，特别是\u201C我\u201D思想、情感的前后变化。", en: "A cat-loving family ultimately decided to 'never keep cats again.' What happened? Read the text with this question in mind, paying attention to the author's train of thought, especially the changes in 'my' feelings." },
            { cn: "郑振铎善于写\u201C平平淡淡的家庭琐事与脉脉温情中轻笼的哀愁\u201D，主张文学作品要\u201C质朴\u201D\u201C真率\u201D。阅读课文时，要注意这个特点。", en: "Zheng Zhenduo excelled at writing 'ordinary family trivia with gentle sorrow shrouded in warm affection,' advocating that literature should be 'simple' and 'sincere.' Pay attention to this characteristic while reading." }
          ],
          text: [
        "\u6211\u5bb6\u517b\u4e86\u597d\u51e0\u6b21\u7684\u732b\uff0c\u7ed3\u5c40\u603b\u662f\u5931\u8e2a\u6216\u6b7b\u4ea1\u3002\u4e09\u59b9\u662f\u6700\u559c\u6b22\u732b\u7684\uff0c\u5979\u5e38\u5728\u8bfe\u540e\u56de\u5bb6\u65f6\uff0c\u9017\u7740\u732b\u73a9\u3002",
        "\u6709\u4e00\u6b21\uff0c\u4ece\u9694\u58c1\u8981\u4e86\u4e00\u53ea\u65b0\u751f\u7684\u732b\u6765\u3002\u82b1\u767d\u7684\u6bdb\uff0c\u5f88\u6d3b\u6cfc\uff0c\u5e38\u5982\u5e26\u7740\u6ce5\u571f\u7684\u767d\u96ea\u7403\u4f3c\u7684\uff0c\u5728\u5eca\u524d\u592a\u9633\u5149\u91cc\u6eda\u6765\u6eda\u53bb\u3002\u4e09\u59b9\u5e38\u5e38\u5730\uff0c\u53d6\u4e86\u4e00\u6761\u7ea2\u5e26\uff0c\u6216\u4e00\u6839\u7ef3\u5b50\uff0c\u5728\u5b83\u9762\u524d\u6765\u56de\u5730\u62d6\u6447\u7740\uff0c\u5b83\u4fbf\u6251\u8fc7\u6765\u62a2\uff0c\u53c8\u6251\u8fc7\u53bb\u62a2\u3002\u6211\u5750\u5728\u85e4\u6905\u4e0a\u770b\u7740\u5979\u4eec\uff0c\u53ef\u4ee5\u5fae\u7b11\u7740\u6d88\u8017\u8fc7\u4e00\u4e8c\u5c0f\u65f6\u7684\u5149\u9634\u3002",
        "\u540e\u6765\u8fd9\u53ea\u732b\u4e0d\u77e5\u600e\u5730\u5ffd\u7136\u6d88\u7626\u4e86\uff0c\u4e5f\u4e0d\u80af\u5403\u4e1c\u897f\uff0c\u5149\u6cfd\u7684\u6bdb\u4e5f\u6c61\u6da9\u4e86\uff0c\u7ec8\u65e5\u8eba\u5728\u5385\u4e0a\u7684\u6905\u4e0b\uff0c\u4e0d\u80af\u51fa\u6765\u3002\u4e09\u59b9\u60f3\u7740\u79cd\u79cd\u65b9\u6cd5\u53bb\u9017\u5b83\uff0c\u5b83\u90fd\u4e0d\u7406\u4f1a\u3002\u6211\u4eec\u90fd\u5f88\u66ff\u5b83\u5fe7\u90c1\u3002\u4e09\u59b9\u7279\u5730\u4e70\u4e86\u4e00\u4e2a\u5f88\u7cbe\u81f4\u7684\u94dc\u94c3\uff0c\u7528\u7ea2\u7eeb\u5e26\u7a7f\u4e86\uff0c\u6302\u5728\u5b83\u9888\u4e0b\uff0c\u4f46\u53ea\u663e\u5f97\u4e0d\u76f8\u79f0\uff0c\u5b83\u53ea\u662f\u6beb\u65e0\u751f\u610f\u5730\u3001\u61d2\u61d2\u5730\u3001\u90c1\u90c1\u5730\u8eba\u7740\u3002\u6709\u4e00\u5929\u4e2d\u5348\uff0c\u6211\u4ece\u7f16\u8bd1\u6240\u56de\u6765\uff0c\u4e09\u59b9\u5f88\u96be\u8fc7\u5730\u8bf4\u9053\uff1a\u201c\u54e5\u54e5\uff0c\u5c0f\u732b\u6b7b\u4e86\uff01\u201d",
        "\u9694\u4e86\u51e0\u5929\uff0c\u4e8c\u59b9\u4ece\u8679\u53e3\u8205\u8205\u5bb6\u91cc\u56de\u6765\uff0c\u5374\u5e26\u4e86\u4e00\u53ea\u6d51\u8eab\u9ec4\u8272\u7684\u5c0f\u732b\u540c\u6765\u3002\u8fd9\u53ea\u5c0f\u732b\u8f83\u7b2c\u4e00\u53ea\u66f4\u6709\u8da3\uff0c\u66f4\u6d3b\u6cfc\u3002\u5b83\u5728\u56ed\u4e2d\u4e71\u8dd1\uff0c\u53c8\u4f1a\u722c\u6811\uff0c\u6709\u65f6\u8774\u8776\u5b89\u8be6\u5730\u98de\u8fc7\u65f6\uff0c\u5b83\u4e5f\u4f1a\u6251\u8fc7\u53bb\u6349\u3002\u5b83\u4f3c\u4e4e\u592a\u6d3b\u6cfc\u4e86\uff0c\u4e00\u70b9\u4e5f\u4e0d\u6015\u751f\u4eba\uff0c\u6709\u65f6\u7531\u6811\u4e0a\u8dc3\u5230\u5899\u4e0a\uff0c\u53c8\u8dd1\u5230\u8857\u4e0a\uff0c\u5728\u90a3\u91cc\u6652\u592a\u9633\u3002\u6211\u4eec\u90fd\u5f88\u4e3a\u5b83\u63d0\u5fc3\u540a\u80c6\uff0c\u4e00\u5929\u90fd\u8981\u201c\u5c0f\u732b\u5462\uff1f\u5c0f\u732b\u5462\uff1f\u201d\u67e5\u95ee\u4e2a\u597d\u51e0\u6b21\u3002",
        "\u67d0\u4e00\u65e5\u6e05\u6668\uff0c\u6211\u8d77\u5e8a\u6765\uff0c\u6ca1\u6709\u770b\u89c1\u5c0f\u732b\u3002\u5f53\u65f6\u53ea\u662f\u4ee5\u4e3a\u5b83\u53c8\u8dd1\u5230\u8857\u4e0a\u53bb\u6652\u592a\u9633\u4e86\u3002\u5230\u4e86\u65e9\u996d\u65f6\u95f4\uff0c\u5b83\u8fd8\u6ca1\u6709\u56de\u6765\u3002\u5f20\u5988\u5230\u5904\u53bb\u5bfb\u627e\uff0c\u90fd\u4e0d\u89c1\u8e2a\u5f71\u3002\u5f20\u5988\u8bc9\u8bf4\u9053\uff1a\u201c\u65e9\u4e0a\u770b\u89c1\u6211\u5bb6\u7684\u5c0f\u732b\u5728\u95e8\u5916\uff0c\u88ab\u4e00\u4e2a\u8fc7\u8def\u7684\u4eba\u6349\u53bb\u4e86\u3002\u201d\u5927\u5bb6\u90fd\u4e0d\u9ad8\u5174\uff0c\u597d\u50cf\u4ea1\u5931\u4e86\u4e00\u4e2a\u4eb2\u7231\u7684\u540c\u4f34\u3002\u4e09\u59b9\u6700\u4e0d\u9ad8\u5174\u7684\u4e86\uff0c\u5495\u561f\u7740\u5634\uff0c\u534a\u5929\u4e0d\u8bf4\u4e00\u53e5\u8bdd\u3002\u81ea\u6b64\uff0c\u6211\u5bb6\u597d\u4e45\u4e0d\u517b\u732b\u3002",
        "\u51ac\u5929\u7684\u65e9\u6668\uff0c\u95e8\u53e3\u8737\u4f0f\u7740\u4e00\u53ea\u5f88\u53ef\u601c\u7684\u5c0f\u732b\uff0c\u6bdb\u8272\u662f\u82b1\u767d\u7684\uff0c\u4f46\u5e76\u4e0d\u597d\u770b\uff0c\u53c8\u5f88\u7626\u3002\u5f20\u5988\u628a\u5b83\u62fe\u4e86\u8fdb\u6765\uff0c\u6bcf\u5929\u7ed9\u5b83\u996d\u5403\u3002\u4f46\u5927\u5bb6\u90fd\u4e0d\u559c\u6b22\u5b83\uff0c\u5b83\u4e0d\u6d3b\u6cfc\uff0c\u4e5f\u4e0d\u50cf\u522b\u7684\u5c0f\u732b\u4e4b\u559c\u6b22\u73a9\u6e38\u3002\u597d\u50cf\u662f\u5177\u7740\u5929\u751f\u7684\u5fe7\u90c1\u6027\u4f3c\u7684\uff0c\u8fde\u4e09\u59b9\u90a3\u6837\u7231\u732b\u7684\uff0c\u5bf9\u4e8e\u5b83\u4e5f\u4e0d\u52a0\u6ce8\u610f\u3002\u6709\u4e00\u5929\uff0c\u5b83\u56e0\u591c\u91cc\u51b7\uff0c\u94bb\u5230\u706b\u7089\u5e95\u4e0b\u53bb\uff0c\u6bdb\u88ab\u70e7\u8131\u597d\u51e0\u5757\uff0c\u66f4\u89c9\u5f97\u96be\u770b\u4e86\u3002",
        "\u6625\u5929\u6765\u4e86\uff0c\u5b83\u6210\u4e86\u4e00\u53ea\u58ee\u732b\u4e86\uff0c\u5374\u4ecd\u4e0d\u6539\u5b83\u7684\u5fe7\u90c1\u6027\uff0c\u4e5f\u4e0d\u53bb\u6349\u9f20\uff0c\u7ec8\u65e5\u61d2\u61d2\u5730\u4f0f\u7740\uff0c\u5403\u5f97\u80d6\u80d6\u7684\u3002",
        "\u8fd9\u65f6\uff0c\u59bb\u4e70\u4e86\u4e00\u5bf9\u9ec4\u8272\u7684\u8299\u84c9\u9e1f\u6765\uff0c\u6302\u5728\u5eca\u524d\uff0c\u53eb\u5f97\u5f88\u597d\u542c\u3002\u59bb\u5e38\u5e38\u53ee\u5631\u7740\u5f20\u5988\u6362\u6c34\u3001\u52a0\u9e1f\u98df\u3001\u6d17\u5237\u7b3c\u5b50\u3002\u90a3\u53ea\u82b1\u767d\u732b\u5bf9\u4e8e\u8fd9\u4e00\u5bf9\u9ec4\u9e1f\uff0c\u4f3c\u4e4e\u4e5f\u7279\u522b\u6ce8\u610f\uff0c\u5e38\u5e38\u8df3\u5728\u684c\u4e0a\uff0c\u5bf9\u9e1f\u7b3c\u51dd\u671b\u7740\u3002",
        "\u59bb\u9053\uff1a\u201c\u5f20\u5988\uff0c\u7559\u5fc3\u732b\uff0c\u5b83\u4f1a\u5403\u9e1f\u5462\u3002\u201d\u5f20\u5988\u4fbf\u8dd1\u6765\u628a\u732b\u6349\u4e86\u53bb\u3002\u6709\u4e00\u5929\uff0c\u6211\u4e0b\u697c\u65f6\uff0c\u542c\u89c1\u5f20\u5988\u5728\u53eb\u9053\uff1a\u201c\u9e1f\u6b7b\u4e86\u4e00\u53ea\uff0c\u4e00\u6761\u817f\u88ab\u54ac\u53bb\u4e86\uff0c\u7b3c\u677f\u4e0a\u90fd\u662f\u8840\u3002\u201d\u6211\u5f88\u6124\u6012\uff0c\u53eb\u9053\uff1a\u201c\u4e00\u5b9a\u662f\u732b\uff0c\u4e00\u5b9a\u662f\u732b\uff01\u201d\u4e8e\u662f\u7acb\u523b\u4fbf\u53bb\u627e\u5b83\u3002\u59bb\u542c\u89c1\u4e86\uff0c\u4e5f\u5e2e\u7740\u627e\u3002\u627e\u4e86\u534a\u5929\uff0c\u5728\u5b83\u9690\u50fb\u7684\u5730\u65b9\u627e\u5230\u4e86\u3002\u6211\u5fc3\u91cc\u5341\u5206\u6c14\u6124\uff0c\u62ff\u8d77\u697c\u95e8\u65c1\u501a\u7740\u7684\u4e00\u6839\u6728\u68d2\uff0c\u8ffd\u8fc7\u53bb\u6253\u4e86\u4e00\u4e0b\u3002\u5b83\u5f88\u60b2\u695a\u5730\u53eb\u4e86\u4e00\u58f0\u201c\u54aa\u545c\u201d\uff0c\u4fbf\u9003\u5230\u5c4b\u74e6\u4e0a\u4e86\u3002",
        "\u6211\u5fc3\u91cc\u8fd8\u6124\u6124\u7684\uff0c\u4ee5\u4e3a\u60e9\u6212\u5f97\u8fd8\u6ca1\u6709\u5feb\u610f\u3002\u9694\u4e86\u51e0\u5929\uff0c\u674e\u5988\u5728\u697c\u4e0b\u53eb\u9053\uff1a\u201c\u732b\uff0c\u732b\uff01\u53c8\u6765\u5403\u9e1f\u4e86\uff01\u201d\u540c\u65f6\u6211\u770b\u89c1\u4e00\u53ea\u9ed1\u732b\u98de\u5feb\u5730\u9003\u8fc7\u9732\u53f0\uff0c\u5634\u91cc\u8854\u7740\u4e00\u53ea\u9ec4\u9e1f\u3002\u6211\u5f00\u59cb\u89c9\u5f97\u6211\u662f\u9519\u4e86\uff01",
        "\u6211\u5fc3\u91cc\u5341\u5206\u5730\u96be\u8fc7\uff0c\u771f\u7684\uff0c\u6211\u7684\u826f\u5fc3\u53d7\u4f24\u4e86\uff0c\u6211\u6ca1\u6709\u5224\u65ad\u660e\u767d\uff0c\u4fbf\u5984\u4e0b\u65ad\u8bed\uff0c\u51a4\u6789\u4e86\u4e00\u53ea\u4e0d\u80fd\u8bf4\u8bdd\u8fa9\u8bc9\u7684\u52a8\u7269\u3002\u60f3\u5230\u5b83\u7684\u65e0\u62b5\u6297\u7684\u9003\u907f\uff0c\u76ca\u4f7f\u6211\u611f\u5230\u6211\u7684\u66b4\u6012\u3001\u6211\u7684\u8650\u5f85\uff0c\u90fd\u662f\u9488\uff0c\u523a\u6211\u826f\u5fc3\u7684\u9488\uff01",
        "\u4e24\u4e2a\u6708\u540e\uff0c\u6211\u4eec\u7684\u732b\u5ffd\u7136\u6b7b\u5728\u90bb\u5bb6\u7684\u5c4b\u810a\u4e0a\uff0c\u6211\u5bf9\u4e8e\u5b83\u7684\u4ea1\u5931\uff0c\u6bd4\u4ee5\u524d\u7684\u4e24\u53ea\u732b\u7684\u4ea1\u5931\uff0c\u66f4\u96be\u8fc7\u5f97\u591a\u3002\u6211\u6c38\u65e0\u6539\u6b63\u6211\u7684\u8fc7\u5931\u7684\u673a\u4f1a\u4e86\uff01\u81ea\u6b64\uff0c\u6211\u5bb6\u6c38\u4e0d\u517b\u732b\u3002"
      ],
          textEn: [
        "Our family kept cats several times, and they always ended up missing or dead. Third Sister loved cats the most and often played with them after school.",
        "Once, we got a newborn kitten from the neighbors. It had white and spotted fur, very lively, rolling around like a muddy snowball in the sunlight on the porch. Third Sister would often take a red ribbon or a piece of string and drag it back and forth in front of the kitten, which would pounce and grab at it. I would sit in the rattan chair watching them, smiling away an hour or two.",
        "Later, the cat suddenly grew thin, refused to eat, its sleek fur became dull and dirty, and it lay under the living room chair all day, refusing to come out. Third Sister tried every way to amuse it, but it paid no attention. We all felt anxious for it. Third Sister specially bought a delicate little bronze bell, threaded it on a red silk ribbon, and hung it around its neck, but it looked out of place — the cat just lay there listlessly, lazily, gloomily. One afternoon, when I came back from the translation office, Third Sister said sadly: ‘Brother, the little cat is dead!’",
        "A few days later, Second Sister came back from our uncle’s house in Hongkou, bringing a little yellow kitten. This kitten was even more fun and lively than the first. It ran around the garden and could climb trees; when butterflies floated by serenely, it would pounce after them. It seemed too lively, not at all afraid of strangers, sometimes leaping from a tree to the wall and running into the street to bask in the sun. We were all worried about it, asking ‘Where is the kitten? Where is the kitten?’ several times a day.",
        "One morning, I got up and couldn’t find the kitten. At first I just thought it had gone to the street to sun itself again. By breakfast time it still hadn’t come back. Zhang Ma searched everywhere but found no trace. Zhang Ma reported: ‘This morning the kitten was outside the door and was taken by a passerby.’ Everyone was unhappy, as if we had lost a beloved companion. Third Sister was the most upset, pouting and not saying a word for a long time. From then on, our family didn’t keep cats for a long time.",
        "One winter morning, a pitiful little cat was crouching at our door, with spotted white fur, not pretty, and very thin. Zhang Ma brought it in and fed it every day. But nobody liked it. It wasn’t lively, nor did it enjoy playing like other kittens. It seemed to possess an innate melancholy — even Third Sister, who loved cats so, paid it no attention. One day, because it was cold at night, it crept under the stove and singed off several patches of fur, making it look even more unsightly.",
        "When spring came, it had grown into a sturdy cat, yet still retained its melancholy disposition. It didn’t catch mice either, just lay about lazily all day, eating until it was plump.",
        "Then my wife bought a pair of yellow canary birds and hung them on the porch; they sang beautifully. My wife constantly reminded Zhang Ma to change the water, add birdseed, and clean the cage. The spotted white cat seemed particularly interested in the birds, often jumping on the table and staring at the birdcage.",
        "My wife said: ‘Zhang Ma, watch the cat — it will eat the birds.’ Zhang Ma ran over and took the cat away. One day, coming downstairs, I heard Zhang Ma shouting: ‘A bird is dead, one leg has been bitten off, and there’s blood all over the cage floor!’ I was furious and shouted: ‘It must be the cat! It must be the cat!’ and went to find it immediately. My wife heard and helped search. After a long search, we found it in a hidden corner. Seething with anger, I grabbed a wooden stick leaning by the door, chased it, and struck it once. It let out a mournful ‘meow’ and fled onto the roof tiles.",
        "I was still fuming, feeling my punishment hadn’t been satisfying enough. A few days later, Li Ma shouted downstairs: ‘The cat! The cat is eating the birds again!’ I saw a black cat darting across the balcony with a yellow bird in its mouth. I began to realize I was wrong!",
        "I felt terribly sorry. Truly, my conscience was wounded. Without proper judgment, I had rashly condemned an animal that couldn’t speak in its own defense. Thinking of its helpless flight, I felt all the more that my fury, my cruelty, were needles — needles piercing my conscience!",
        "Two months later, our cat died on a neighbor’s rooftop. I felt more sorrow over its loss than over the previous two cats. I would never have the chance to correct my mistake! From then on, our family never kept cats again."
      ],
          textPinyin: [
            "w\u01d2 ji\u0101 y\u01ceng le h\u01ceo j\u01d0 c\u00ec de m\u0101o\uff0c ji\u00e9 j\u00fa z\u01d2ng sh\u00ec sh\u012b z\u014dng hu\u00f2 s\u01d0 w\u00e1ng\u3002 s\u0101n m\u00e8i sh\u00ec zu\u00ec x\u01d0 huan m\u0101o de\uff0c t\u0101 ch\u00e1ng z\u00e0i k\u00e8 h\u00f2u hu\u00ed ji\u0101 sh\u00ed\uff0c d\u00f2u zhe m\u0101o w\u00e1n\u3002",
            "y\u01d2u y\u00ed c\u00ec\uff0c c\u00f3ng g\u00e9 b\u00ec y\u00e0o le y\u00ec zh\u012b x\u012bn sh\u0113ng de m\u0101o l\u00e1i\u3002 hu\u0101 b\u00e1i de m\u00e1o\uff0c h\u011bn hu\u00f3 p\u014d\uff0c ch\u00e1ng r\u00fa d\u00e0i zhe n\u00ed t\u01d4 de b\u00e1i xu\u011b qi\u00fa sh\u00ec de\uff0c z\u00e0i l\u00e1ng qi\u00e1n t\u00e0i y\u00e1ng gu\u0101ng l\u01d0 g\u01d4n l\u00e1i g\u01d4n q\u00f9\u3002 s\u0101n m\u00e8i ch\u00e1ng ch\u00e1ng d\u00ec\uff0c q\u01d4 le y\u00ec ti\u00e1o h\u00f3ng d\u00e0i\uff0c hu\u00f2 y\u00ec g\u0113n sh\u00e9ng zi\uff0c z\u00e0i t\u0101 mi\u00e0n qi\u00e1n l\u00e1i hu\u00ed d\u00ec tu\u014d y\u00e1o zhe\uff0c t\u0101 bi\u00e0n p\u016b gu\u00f2 l\u00e1i qi\u01ceng\uff0c y\u00f2u p\u016b gu\u00f2 q\u00f9 qi\u01ceng\u3002 w\u01d2 zu\u00f2 z\u00e0i t\u00e9ng y\u01d0 sh\u00e0ng k\u00e0n zhe t\u0101 men\uff0c k\u011b y\u01d0 w\u0113i xi\u00e0o zhe xi\u0101o h\u00e0o gu\u00f2 y\u012b \u00e8r xi\u01ceo sh\u00ed de gu\u0101ng y\u012bn\u3002",
            "h\u00f2u l\u00e1i zh\u00e8 zh\u012b m\u0101o b\u00f9 zh\u012b z\u011bn d\u00ec h\u016b r\u00e1n xi\u0101o sh\u00f2u le\uff0c y\u011b b\u00f9 k\u011bn ch\u012b d\u014dng x\u012b\uff0c gu\u0101ng z\u00e9 de m\u00e1o y\u011b w\u016b s\u00e8 le\uff0c zh\u014dng r\u00ec t\u01ceng z\u00e0i t\u012bng sh\u00e0ng de y\u01d0 xi\u00e0\uff0c b\u00f9 k\u011bn ch\u016b l\u00e1i\u3002 s\u0101n m\u00e8i xi\u01ceng zhe zh\u01d2ng zh\u01d2ng f\u0101ng f\u01ce q\u00f9 d\u00f2u t\u0101\uff0c t\u0101 d\u014du b\u00f9 l\u01d0 hu\u00ec\u3002 w\u01d2 men d\u014du h\u011bn t\u00ec t\u0101 y\u014du y\u00f9\u3002 s\u0101n m\u00e8i t\u00e8 d\u00ec m\u01cei le y\u00ed g\u00e8 h\u011bn j\u012bng zh\u00ec de t\u00f3ng l\u00edng\uff0c y\u00f2ng h\u00f3ng l\u00edng d\u00e0i chu\u0101n le\uff0c gu\u00e0 z\u00e0i t\u0101 j\u01d0ng xi\u00e0\uff0c d\u00e0n zh\u012b xi\u01cen de b\u00f9 xi\u0101ng ch\u00e8n\uff0c t\u0101 zh\u01d0 sh\u00ec h\u00e1o w\u00fa sh\u0113ng y\u00ec d\u00ec\u3001 l\u01cen l\u01cen d\u00ec\u3001 y\u00f9 y\u00f9 d\u00ec t\u01ceng zhe\u3002 y\u01d2u y\u00ec ti\u0101n zh\u014dng w\u01d4\uff0c w\u01d2 c\u00f3ng bi\u0101n y\u00ec su\u01d2 hu\u00ed l\u00e1i\uff0c s\u0101n m\u00e8i h\u011bn n\u00e1n gu\u00f2 d\u00ec shu\u014d d\u00e0o\uff1a \u201c g\u0113 ge\uff0c xi\u01ceo m\u0101o s\u01d0 le\uff01 \u201d",
            "g\u00e9 le j\u01d0 ti\u0101n\uff0c \u00e8r m\u00e8i c\u00f3ng h\u00f3ng k\u01d2u ji\u00f9 jiu ji\u0101 l\u01d0 hu\u00ed l\u00e1i\uff0c qu\u00e8 d\u00e0i le y\u00ec zh\u012b h\u00fan sh\u0113n hu\u00e1ng s\u00e8 de xi\u01ceo m\u0101o t\u00f3ng l\u00e1i\u3002 zh\u00e8 zh\u012b xi\u01ceo m\u0101o ji\u00e0o d\u00ec y\u012b zh\u012b g\u00e8ng y\u01d2u q\u00f9\uff0c g\u00e8ng hu\u00f3 p\u014d\u3002 t\u0101 z\u00e0i yu\u00e1n zh\u014dng lu\u00e0n p\u01ceo\uff0c y\u00f2u hu\u00ec p\u00e1 sh\u00f9\uff0c y\u01d2u sh\u00ed h\u00fa di\u00e9 \u0101n xi\u00e1ng d\u00ec f\u0113i gu\u00f2 sh\u00ed\uff0c t\u0101 y\u011b hu\u00ec p\u016b gu\u00f2 q\u00f9 zhu\u014d\u3002 t\u0101 s\u00ec h\u016b t\u00e0i hu\u00f3 p\u014d le\uff0c y\u00ec di\u01cen y\u011b b\u00fa p\u00e0 sh\u0113ng r\u00e9n\uff0c y\u01d2u sh\u00ed y\u00f3u sh\u00f9 sh\u00e0ng yu\u00e8 d\u00e0o qi\u00e1ng sh\u00e0ng\uff0c y\u00f2u p\u01ceo d\u00e0o ji\u0113 sh\u00e0ng\uff0c z\u00e0i n\u00e0 l\u01d0 sh\u00e0i t\u00e0i y\u00e1ng\u3002 w\u01d2 men d\u014du h\u011bn w\u00e8i t\u0101 t\u00ed x\u012bn di\u00e0o d\u01cen\uff0c y\u00ec ti\u0101n d\u014du y\u00e0o \u201c xi\u01ceo m\u0101o ne\uff1f xi\u01ceo m\u0101o ne\uff1f \u201d ch\u00e1 w\u00e8n g\u00e8 h\u01ceo j\u01d0 c\u00ec\u3002",
            "m\u01d2u y\u00ed r\u00ec q\u012bng ch\u00e9n\uff0c w\u01d2 q\u01d0 chu\u00e1ng l\u00e1i\uff0c m\u00e9i y\u01d2u k\u00e0n ji\u00e0n xi\u01ceo m\u0101o\u3002 d\u0101ng sh\u00ed zh\u01d0 sh\u00ec y\u01d0 w\u00e9i t\u0101 y\u00f2u p\u01ceo d\u00e0o ji\u0113 sh\u00e0ng q\u00f9 sh\u00e0i t\u00e0i y\u00e1ng le\u3002 d\u00e0o le z\u01ceo f\u00e0n sh\u00ed ji\u0101n\uff0c t\u0101 h\u00e1i m\u00e9i y\u01d2u hu\u00ed l\u00e1i\u3002 zh\u0101ng m\u0101 d\u00e0o ch\u00f9 q\u00f9 x\u00fan zh\u01ceo\uff0c d\u014du b\u00fa ji\u00e0n z\u014dng y\u01d0ng\u3002 zh\u0101ng m\u0101 s\u00f9 shu\u014d d\u00e0o\uff1a \u201c z\u01ceo sh\u00e0ng k\u00e0n ji\u00e0n w\u01d2 ji\u0101 de xi\u01ceo m\u0101o z\u00e0i m\u00e9n w\u00e0i\uff0c b\u00e8i y\u00ed g\u00e8 gu\u00f2 l\u00f9 de r\u00e9n zhu\u014d q\u00f9 le\u3002 \u201d d\u00e0 ji\u0101 d\u014du b\u00f9 g\u0101o x\u012bng\uff0c h\u01ceo xi\u00e0ng w\u00e1ng sh\u012b le y\u00ed g\u00e8 q\u012bn \u00e0i de t\u00f3ng b\u00e0n\u3002 s\u0101n m\u00e8i zu\u00ec b\u00f9 g\u0101o x\u00ecng de le\uff0c g\u016b d\u016b zhe zu\u01d0\uff0c b\u00e0n ti\u0101n b\u00f9 shu\u014d y\u00ed j\u00f9 hu\u00e0\u3002 z\u00ec c\u01d0\uff0c w\u01d2 ji\u0101 h\u01ceo ji\u01d4 b\u00f9 y\u01ceng m\u0101o\u3002",
            "d\u014dng ti\u0101n de z\u01ceo ch\u00e9n\uff0c m\u00e9n k\u01d2u qu\u00e1n f\u00fa zhe y\u00ec zh\u012b h\u011bn k\u011b li\u00e1n de xi\u01ceo m\u0101o\uff0c m\u00e1o s\u00e8 sh\u00ec hu\u0101 b\u00e1i de\uff0c d\u00e0n b\u00ecng b\u00f9 h\u01ceo k\u00e0n\uff0c y\u00f2u h\u011bn sh\u00f2u\u3002 zh\u0101ng m\u0101 b\u01ce t\u0101 sh\u00ed le j\u00ecn l\u00e1i\uff0c m\u011bi ti\u0101n g\u011bi t\u0101 f\u00e0n ch\u012b\u3002 d\u00e0n d\u00e0 ji\u0101 d\u014du b\u00f9 x\u01d0 huan t\u0101\uff0c t\u0101 b\u00f9 hu\u00f3 p\u014d\uff0c y\u011b b\u00fa xi\u00e0ng bi\u00e9 de xi\u01ceo m\u0101o zh\u012b x\u01d0 huan w\u00e1n y\u00f3u\u3002 h\u01ceo xi\u00e0ng sh\u00ec j\u00f9 zhe ti\u0101n sh\u0113ng de y\u014du y\u00f9 x\u00ecng sh\u00ec de\uff0c li\u00e1n s\u0101n m\u00e8i n\u00e0 y\u00e0ng \u00e0i m\u0101o de\uff0c du\u00ec y\u00fa t\u0101 y\u011b b\u00f9 ji\u0101 zh\u00f9 y\u00ec\u3002 y\u01d2u y\u00ec ti\u0101n\uff0c t\u0101 y\u012bn y\u00e8 l\u01d0 l\u011bng\uff0c zu\u00e0n d\u00e0o hu\u01d2 l\u00fa d\u01d0 xi\u00e0 q\u00f9\uff0c m\u00e1o b\u00e8i sh\u0101o tu\u014d h\u01ceo j\u01d0 ku\u00e0i\uff0c g\u00e8ng ju\u00e9 de n\u00e1n k\u00e0n le\u3002",
            "ch\u016bn ti\u0101n l\u00e1i le\uff0c t\u0101 ch\u00e9ng le y\u00ec zh\u012b zhu\u00e0ng m\u0101o le\uff0c qu\u00e8 r\u00e9ng b\u00f9 g\u01cei t\u0101 de y\u014du y\u00f9 x\u00ecng\uff0c y\u011b b\u00fa q\u00f9 zhu\u014d sh\u01d4\uff0c zh\u014dng r\u00ec l\u01cen l\u01cen d\u00ec f\u00fa zhe\uff0c ch\u012b d\u00e9 p\u00e0ng p\u00e0ng de\u3002",
            "zh\u00e8 sh\u00ed\uff0c q\u012b m\u01cei le y\u00ed du\u00ec hu\u00e1ng s\u00e8 de f\u00fa r\u00f3ng ni\u01ceo l\u00e1i\uff0c gu\u00e0 z\u00e0i l\u00e1ng qi\u00e1n\uff0c ji\u00e0o d\u00e9 h\u011bn h\u01ceo t\u012bng\u3002 q\u012b ch\u00e1ng ch\u00e1ng d\u012bng zh\u01d4 zhe zh\u0101ng m\u0101 hu\u00e0n shu\u01d0\u3001 ji\u0101 ni\u01ceo sh\u00ed\u3001 x\u01d0 shu\u0101 l\u00f3ng zi\u3002 n\u00e0 zh\u012b hu\u0101 b\u00e1i m\u0101o du\u00ec y\u00fa zh\u00e8 y\u00ed du\u00ec hu\u00e1ng ni\u01ceo\uff0c s\u00ec h\u016b y\u011b t\u00e8 bi\u00e9 zh\u00f9 y\u00ec\uff0c ch\u00e1ng ch\u00e1ng ti\u00e0o z\u00e0i zhu\u014d sh\u00e0ng\uff0c du\u00ec ni\u01ceo l\u00f3ng n\u00edng w\u00e0ng zhe\u3002",
            "q\u012b d\u00e0o\uff1a \u201c zh\u0101ng m\u0101\uff0c li\u00fa x\u012bn m\u0101o\uff0c t\u0101 hu\u00ec ch\u012b ni\u01ceo ne\u3002 \u201d zh\u0101ng m\u0101 bi\u00e0n p\u01ceo l\u00e1i b\u01ce m\u0101o zhu\u014d le q\u00f9\u3002 y\u01d2u y\u00ec ti\u0101n\uff0c w\u01d2 xi\u00e0 l\u00f3u sh\u00ed\uff0c t\u012bng ji\u00e0n zh\u0101ng m\u0101 z\u00e0i ji\u00e0o d\u00e0o\uff1a \u201c ni\u01ceo s\u01d0 le y\u00ec zh\u012b\uff0c y\u00ec ti\u00e1o tu\u01d0 b\u00e8i y\u01ceo q\u00f9 le\uff0c l\u00f3ng b\u01cen sh\u00e0ng d\u014du sh\u00ec xu\u00e8\u3002 \u201d w\u01d2 h\u011bn f\u00e8n n\u00f9\uff0c ji\u00e0o d\u00e0o\uff1a \u201c y\u00ed d\u00ecng sh\u00ec m\u0101o\uff0c y\u00ed d\u00ecng sh\u00ec m\u0101o\uff01 \u201d y\u00fa sh\u00ec l\u00ec k\u00e8 bi\u00e0n q\u00f9 zh\u01ceo t\u0101\u3002 q\u012b t\u012bng ji\u00e0n le\uff0c y\u011b b\u0101ng zhe zh\u01ceo\u3002 zh\u01ceo le b\u00e0n ti\u0101n\uff0c z\u00e0i t\u0101 y\u01d0n p\u00ec de d\u00ec f\u0101ng zh\u01ceo d\u00e0o le\u3002 w\u01d2 x\u012bn l\u01d0 sh\u00ed f\u0113n q\u00ec f\u00e8n\uff0c n\u00e1 q\u01d0 l\u00f3u m\u00e9n p\u00e1ng y\u01d0 zhe de y\u00ec g\u0113n m\u00f9 b\u00e0ng\uff0c zhu\u012b gu\u00f2 q\u00f9 d\u01ce le y\u00ed xi\u00e0\u3002 t\u0101 h\u011bn b\u0113i ch\u01d4 d\u00ec ji\u00e0o le y\u00ec sh\u0113ng \u201c m\u012b w\u016b \u201d\uff0c bi\u00e0n t\u00e1o d\u00e0o w\u016b w\u01ce sh\u00e0ng le\u3002",
            "w\u01d2 x\u012bn l\u01d0 h\u00e1i f\u00e8n f\u00e8n de\uff0c y\u01d0 w\u00e8i ch\u00e9ng ji\u00e8 d\u00e9 h\u00e1i m\u00e9i y\u01d2u ku\u00e0i y\u00ec\u3002 g\u00e9 le j\u01d0 ti\u0101n\uff0c l\u01d0 m\u0101 z\u00e0i l\u00f3u xi\u00e0 ji\u00e0o d\u00e0o\uff1a \u201c m\u0101o\uff0c m\u0101o\uff01 y\u00f2u l\u00e1i ch\u012b ni\u01ceo le\uff01 \u201d t\u00f3ng sh\u00ed w\u01d2 k\u00e0n ji\u00e0n y\u00ec zh\u012b h\u0113i m\u0101o f\u0113i ku\u00e0i d\u00ec t\u00e1o gu\u00f2 l\u00f9 t\u00e1i\uff0c zu\u01d0 l\u01d0 xi\u00e1n zhe y\u00ec zh\u012b hu\u00e1ng ni\u01ceo\u3002 w\u01d2 k\u0101i sh\u01d0 ju\u00e9 de w\u01d2 sh\u00ec cu\u00f2 le\uff01",
            "w\u01d2 x\u012bn l\u01d0 sh\u00ed f\u0113n d\u00ec n\u00e1n gu\u00f2\uff0c zh\u0113n de\uff0c w\u01d2 de li\u00e1ng x\u012bn sh\u00f2u sh\u0101ng le\uff0c w\u01d2 m\u00e9i y\u01d2u p\u00e0n du\u00e0n m\u00edng b\u00e1i\uff0c bi\u00e0n w\u00e0ng xi\u00e0 du\u00e0n y\u01d4\uff0c yu\u0101n w\u01ceng le y\u00ec zh\u012b b\u00f9 n\u00e9ng shu\u014d hu\u00e0 bi\u00e0n s\u00f9 de d\u00f2ng w\u00f9\u3002 xi\u01ceng d\u00e0o t\u0101 de w\u00fa d\u01d0 k\u00e0ng de t\u00e1o b\u00ec\uff0c y\u00ec sh\u01d0 w\u01d2 g\u01cen d\u00e0o w\u01d2 de b\u00e0o n\u00f9\u3001 w\u01d2 de n\u00fc\u00e8 d\u00e0i\uff0c d\u014du sh\u00ec zh\u0113n\uff0c c\u00ec w\u01d2 li\u00e1ng x\u012bn de zh\u0113n\uff01",
            "li\u01ceng g\u00e8 yu\u00e8 h\u00f2u\uff0c w\u01d2 men de m\u0101o h\u016b r\u00e1n s\u01d0 z\u00e0i l\u00edn ji\u0101 de w\u016b j\u01d0 sh\u00e0ng\uff0c w\u01d2 du\u00ec y\u00fa t\u0101 de w\u00e1ng sh\u012b\uff0c b\u01d0 y\u01d0 qi\u00e1n de li\u01ceng zh\u012b m\u0101o de w\u00e1ng sh\u012b\uff0c g\u00e8ng n\u00e1n gu\u00f2 d\u00e9 du\u014d\u3002 w\u01d2 y\u01d2ng w\u00fa g\u01cei zh\u00e8ng w\u01d2 de gu\u00f2 sh\u012b de j\u012b hu\u00ec le\uff01 z\u00ec c\u01d0\uff0c w\u01d2 ji\u0101 y\u01d2ng b\u00f9 y\u01ceng m\u0101o\u3002"
          ],
          annotations: [
            { id: 1, term: "污涩", pinyin: "wūsè", definition: "肮脏且不光滑。", definitionEn: "Dirty and rough." },
            { id: 2, term: "怂恿", pinyin: "sǒngyǒng", definition: "鼓动别人去做某事。", definitionEn: "To urge or instigate someone to do something." },
            { id: 3, term: "蜷伏", pinyin: "quánfú", definition: "弯着身体卧着。", definitionEn: "To curl up and lie down." },
            { id: 4, term: "怅然", pinyin: "chàngrán", definition: "因不如意而感到不痛快。", definitionEn: "Feeling displeased due to disappointment." }
          ],
          thinkExplore: [
            { cn: "作者笔下的三只猫，特点不同，命运各异。默读课文，概括相关内容填写表格。", en: "The three cats have different characteristics and fates. Read silently and summarize to fill in a comparison table." },
            { cn: "第三只猫\u201C大家都不喜欢它\u201D，但它亡失之后，\u201C我\u201D却\u201C更难过得多\u201D。你觉得原因是什么？", en: "'Nobody liked it,' but after its death, 'I' felt 'much more sorrowful.' Why do you think that is?" },
            { cn: "三句结尾语\u201C小猫死了\u201D\u201C自此，我家好久不养猫\u201D\u201C自此，我家永不养猫\u201D在文章结构上起什么作用？", en: "What structural role do the three ending sentences play in the article?" }
          ],
          accumExtend: [
            { cn: "品味下列语句，说说各句的表达效果。", en: "Savor the following sentences and discuss the expressive effect of each." }
          ],
          teachingPoints: [
            { cn: "学习\u201C总—分—总\u201D的文章结构，体会三次养猫经历的详略安排。", en: "Learn the 'general-specific-general' structure; appreciate the balance of detail across the three cat-keeping experiences." },
            { cn: "理解\u201C妄下断语\u201D带来的后悔与反思。", en: "Understand the regret and reflection caused by 'hasty judgment.'" }
          ],
          parentTips: [
            { cn: "引导孩子讨论\u201C冤枉\u201D与\u201C偏见\u201D的话题，联系生活中的类似经历。", en: "Guide your child to discuss 'injustice' and 'prejudice,' connecting to similar life experiences." }
          ]
        },
        {
          id: 17,
          title: "动物笑谈",
          titleEn: "Animal Anecdotes",
          difficulty: 4,
          author: "康拉德·劳伦兹",
          authorEn: "Konrad Lorenz",
          source: "节选自《所罗门王的指环》第五章（中国和平出版社1998年版）。游复熙、季光容译。",
          sourceEn: "Excerpted from Chapter 5 of King Solomon's Ring (China Peace Publishing House, 1998). Translated by You Fuxi and Ji Guangrong.",
          vocabWords: [
            {word:'嗔怪',pinyin:'chēn guài',en:'reproach',sentence:'别人对他的嗔怪是可以理解的。',sentenceEn:'The reproach from others was understandable.'},
            {word:'怪诞不经',pinyin:'guài dàn bù jīng',en:'absurd and preposterous',sentence:'在研究中常常发生怪诞不经的趣事。',sentenceEn:'Absurd and preposterous amusing things often happen during research.'},
            {word:'大相径庭',pinyin:'dà xiāng jìng tíng',en:'vastly different',sentence:'从外表看来和真正的水鸭大相径庭。',sentenceEn:'In appearance, vastly different from a real wild duck.'},
            {word:'禁锢',pinyin:'jìn gù',en:'imprison; confine',sentence:'从长期被禁锢所受的精神虐待中恢复过来。',sentenceEn:'Recovering from the mental abuse of long-term confinement.'},
            {word:'蹒跚',pinyin:'pán shān',en:'stagger; hobble',sentence:'老先生弯着身子，蹒跚地走过来。',sentenceEn:'The old man bent over and staggered toward me.'}
          ],
          grammarPoints: [
            {point: "\u6bd4\u55bb", pointEn: "Simile/Metaphor", example: "\u5728\u7814\u7a76\u9ad8\u7b49\u52a8\u7269\u7684\u884c\u4e3a\u65f6\uff0c\u5e38\u5e38\u4f1a\u53d1\u751f\u4e00\u4e9b\u8da3\u4e8b\uff0c\u4e0d\u8fc7\u9017\u7b11\u7684\u4e3b\u89d2\u5e38\u2026", exampleEn: "When studying the behavior of higher animals, funny things often happen, but the", explanation: "\u901a\u8fc7\u6bd4\u55bb\u4f7f\u62bd\u8c61\u7684\u4e8b\u7269\u5177\u4f53\u5316\uff0c\u589e\u5f3a\u8868\u8fbe\u6548\u679c", explanationEn: "Using metaphor to make abstract things concrete and enhance expressive effect"},
            {point: "\u5bf9\u6bd4\u624b\u6cd5", pointEn: "Contrast", example: "\u5728\u7814\u7a76\u9ad8\u7b49\u52a8\u7269\u7684\u884c\u4e3a\u65f6\uff0c\u5e38\u5e38\u4f1a\u53d1\u751f\u4e00\u4e9b\u8da3\u4e8b\uff0c\u4e0d\u8fc7\u9017\u7b11\u7684\u4e3b\u89d2\u5e38\u2026", exampleEn: "When studying the behavior of higher animals, funny things often happen, but the", explanation: "\u901a\u8fc7\u5bf9\u6bd4\u7a81\u51fa\u4e8b\u7269\u7684\u7279\u5f81\uff0c\u4f7f\u8868\u8fbe\u66f4\u9c9c\u660e", explanationEn: "Using contrast to highlight characteristics and sharpen the expression"}
          ],
          footnotes: [
            {term:"\u55d4\u602a", termEn:"reproach", definition:"\u3010ch\u0113n gu\u00e0i\u3011reproach\u3002", definitionEn:"reproach"},
            {term:"\u602a\u8bde\u4e0d\u7ecf", termEn:"absurd and preposterous", definition:"\u3010gu\u00e0i d\u00e0n b\u00f9 j\u012bng\u3011absurd and preposterous\u3002", definitionEn:"absurd and preposterous"},
            {term:"\u5927\u76f8\u5f84\u5ead", termEn:"vastly different", definition:"\u3010d\u00e0 xi\u0101ng j\u00ecng t\u00edng\u3011vastly different\u3002", definitionEn:"vastly different"},
            {term:"\u7981\u9522", termEn:"imprison; confine", definition:"\u3010j\u00ecn g\u00f9\u3011imprison; confine\u3002", definitionEn:"imprison; confine"},
            {term:"\u8e52\u8dda", termEn:"stagger; hobble", definition:"\u3010p\u00e1n sh\u0101n\u3011stagger; hobble\u3002", definitionEn:"stagger; hobble"}
          ],
          readingTips: [
            {cn:"\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f", en:"Pay attention to the author's narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?"},
            {cn:"\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f", en:"After reading, think: what theme does the author convey? How does the title relate to the content?"}
          ],
          preview: [
            {cn: "\u901a\u8bfb\u8bfe\u6587\uff0c\u521d\u6b65\u4e86\u89e3\u6587\u7ae0\u7684\u4e3b\u8981\u5185\u5bb9\u3002\u6807\u8bb0\u51fa\u4f60\u8ba4\u4e3a\u91cd\u8981\u7684\u8bcd\u8bed\u548c\u4e0d\u7406\u89e3\u7684\u5730\u65b9\u3002", en: "Read through the text for an initial understanding of the main content. Mark important vocabulary and parts you don't understand."},
            {cn: "\u67e5\u627e\u4f5c\u8005\u5eb7\u62c9\u5fb7\u00b7\u52b3\u4f26\u5179\u7684\u76f8\u5173\u8d44\u6599\uff0c\u4e86\u89e3\u5176\u5199\u4f5c\u98ce\u683c\u548c\u672c\u6587\u7684\u5199\u4f5c\u80cc\u666f\u3002", en: "Research the author Konrad Lorenz to understand their writing style and the context of this text."}
          ],
          accumExtend: [
            {cn: "\u8bfe\u6587\u4e2d\u6709\u4e0d\u5c11\u597d\u8bcd\u4f73\u53e5\uff0c\u5982\u201c\u55d4\u602a\u3001\u602a\u8bde\u4e0d\u7ecf\u3001\u5927\u76f8\u5f84\u5ead\u201d\u7b49\u3002\u8bf7\u6458\u5f55\u4f60\u559c\u6b22\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u5e76\u8bd5\u7740\u5728\u81ea\u5df1\u7684\u5199\u4f5c\u4e2d\u8fd0\u7528\u3002", en: "The text contains fine words and phrases such as \"\u55d4\u602a\u3001\u602a\u8bde\u4e0d\u7ecf\u3001\u5927\u76f8\u5f84\u5ead\". Collect the words and sentences you like and try using them in your own writing."},
            {cn: "\u9009\u62e9\u8bfe\u6587\u4e2d\u4f60\u6700\u559c\u6b22\u7684\u4e00\u4e2a\u6bb5\u843d\uff0c\u6709\u611f\u60c5\u5730\u6717\u8bfb\uff0c\u6807\u51fa\u91cd\u97f3\u548c\u505c\u8fde\uff0c\u5728\u5c0f\u7ec4\u91cc\u4e92\u76f8\u8bc4\u4ef7\u3002", en: "Choose your favorite paragraph, read it with feeling, mark stress and pauses, and do peer evaluation in groups."},
            {cn: "\u8bfe\u5916\u9605\u8bfb\u5eb7\u62c9\u5fb7\u00b7\u52b3\u4f26\u5179\u7684\u5176\u4ed6\u4f5c\u54c1\uff0c\u6bd4\u8f83\u4e0e\u672c\u6587\u7684\u5f02\u540c\uff0c\u5199\u4e00\u7bc7\u77ed\u6587\u5206\u4eab\u4f60\u7684\u53d1\u73b0\u3002", en: "Read other works by Konrad Lorenz and compare them with this text. Write a short essay sharing your findings."}
          ],
          thinkExplore: [
            {cn: "\u6717\u8bfb\u8bfe\u6587\uff0c\u6982\u62ec\u6587\u7ae0\u7684\u4e3b\u8981\u5185\u5bb9\u3002\u4f5c\u8005\u60f3\u8981\u8868\u8fbe\u7684\u4e2d\u5fc3\u601d\u60f3\u662f\u4ec0\u4e48\uff1f", en: "Read the text aloud and summarize its main content. What central idea does the author wish to convey?"},
            {cn: "\u6587\u4e2d\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bed\u53e5\u6216\u6bb5\u843d\uff1f\u627e\u51fa\u6765\u54c1\u5473\u5176\u4e2d\u7684\u8868\u8fbe\u6548\u679c\uff0c\u5e76\u4e0e\u540c\u5b66\u5206\u4eab\u4f60\u7684\u611f\u53d7\u3002", en: "Which sentences or paragraphs are most impressive? Identify them, appreciate their expressive effects, and share your feelings with classmates."},
            {cn: "\u7ed3\u5408\u4f5c\u8005\u5eb7\u62c9\u5fb7\u00b7\u52b3\u4f26\u5179\u7684\u5199\u4f5c\u80cc\u666f\uff0c\u8c08\u8c08\u4f60\u5bf9\u8fd9\u7bc7\u6587\u7ae0\u7684\u7406\u89e3\u3002\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8981\u5199\u8fd9\u7bc7\u6587\u7ae0\uff1f", en: "Considering the author Konrad Lorenz's background, discuss your understanding. Why did the author write this?"}
          ],
          authorBio: {
            cn: "康拉德·劳伦兹（1903—1989），奥地利动物行为学家、科普作家。获1973年诺贝尔生理学或医学奖。",
            en: "Konrad Lorenz (1903–1989) was an Austrian animal behaviorist and science writer. He received the 1973 Nobel Prize in Physiology or Medicine."
          },
          isSelfRead: true,
          readingTips: [{
            cn: "\u201C动物笑谈\u201D意思是谈论和动物有关的趣事、笑话。作者专注于动物行为研究，为了探求科学真理，\u201C常常需要不顾自己的尊严\u201D，与动物们打成一片。作者的语言诙谐风趣，透过课文风趣的文字，可以感受到科学工作者专注忘我的精神和极高的专业素养。",
            en: "'Animal Anecdotes' means talking about funny stories related to animals. The author, dedicated to studying animal behavior, 'often had to disregard his own dignity' to bond with animals. Through the text's witty words, we can feel the scientist's devoted, selfless spirit and high professional quality."
          }],
          text: [
        "\u5728\u7814\u7a76\u9ad8\u7b49\u52a8\u7269\u7684\u884c\u4e3a\u65f6\uff0c\u5e38\u5e38\u4f1a\u53d1\u751f\u4e00\u4e9b\u8da3\u4e8b\uff0c\u4e0d\u8fc7\u9017\u7b11\u7684\u4e3b\u89d2\u5e38\u5e38\u4e0d\u662f\u52a8\u7269\uff0c\u800c\u662f\u89c2\u5bdf\u8005\u81ea\u5df1\u3002\u4ed6\u4e0d\u5f97\u4e0d\u4f7f\u51fa\u6d51\u8eab\u89e3\u6570\u624d\u80fd\u4e0d\u88ab\u4ed6\u7684\u7814\u7a76\u5bf9\u8c61\u53d1\u73b0\u3002\u4f60\u5982\u679c\u4ece\u65c1\u770b\u5230\u4ed6\u7684\u8fd9\u4e9b\u602a\u6a21\u6837\uff0c\u8bf4\u4e0d\u5b9a\u4f1a\u7591\u5fc3\u4ed6\u53d1\u4e86\u75af\u5462\u3002",
        "\u6709\u4e00\u6bb5\u65f6\u95f4\u6211\u81f4\u529b\u4e8e\u6c34\u9e2d\u5b50\u7684\u7814\u7a76\uff0c\u6211\u5f97\u51fa\u7684\u7ed3\u8bba\u662f\uff1a\u8981\u5c0f\u51eb\u8ddf\u7740\u6211\u8d70\uff0c\u6211\u5f97\u8e72\u4e0b\u6765\u5b66\u6bcd\u51eb\u90a3\u6837\u53eb\u624d\u884c\u3002\u679c\u7136\uff0c\u8fd9\u4e00\u6b21\u8fd9\u4e9b\u5c0f\u9e2d\u5b50\u4e00\u70b9\u513f\u4e5f\u4e0d\u6015\u6211\uff0c\u5b83\u4eec\u4fe1\u4efb\u5730\u671b\u7740\u6211\uff0c\u6324\u6210\u4e00\u5806\uff0c\u542c\u5019\u6211\u7684\u53f7\u4ee4\u3002\u6211\u5e26\u7740\u90a3\u7fa4\u5c0f\u51eb\u5230\u9644\u8fd1\u7684\u591a\u7459\u6cb3\u53bb\u6e38\u6cf3\u3002",
        "\u4e0d\u8fc7\uff0c\u4e3a\u4e86\u8981\u5b83\u4eec\u8ddf\u7740\u6211\uff0c\u6211\u4e0d\u5f97\u4e0d\u8e72\u7740\u8d70\uff0c\u8fd8\u5f97\u4e0d\u505c\u5730\u560e\u560e\u53eb\u3002\u90a3\u4e2a\u661f\u671f\u5929\uff0c\u5f53\u6211\u5e26\u7740\u90a3\u7fa4\u5c0f\u9e2d\u5b50\u5728\u8349\u576a\u4e0a\u8e72\u7740\u722c\u7740\u53eb\u7740\u8d70\u7684\u65f6\u5019\uff0c\u731b\u4e00\u62ac\u5934\uff0c\u5374\u770b\u89c1\u56ed\u5b50\u7684\u680f\u6746\u8fb9\u6392\u7740\u4e00\u6392\u4eba\uff0c\u4ed6\u4eec\u5168\u90fd\u8138\u8272\u715e\u767d\uff0c\u4e00\u526f\u89c1\u4e86\u9b3c\u7684\u8868\u60c5\u3002\u56e0\u4e3a\u4ed6\u4eec\u53ea\u770b\u5230\u4e86\u6211\u2014\u2014\u800c\u770b\u4e0d\u5230\u90a3\u4e9b\u5c0f\u9e2d\u5b50\u3002\u6211\u60f3\u4ed6\u4eec\u4e00\u5b9a\u4ee5\u4e3a\u6211\u662f\u4e00\u4e2a\u75af\u5b50\u3002",
        "\u53e6\u4e00\u6b21\u6211\u5dee\u70b9\u513f\u88ab\u9001\u8fdb\u75af\u4eba\u9662\u91cc\uff0c\u8fd9\u5f97\u602a\u6211\u517b\u7684\u90a3\u53ea\u9ec4\u51a0\u5927\u9e66\u9e49\u201c\u53ef\u53ef\u201d\u4e86\u3002\u201c\u53ef\u53ef\u201d\u662f\u6211\u6240\u517b\u8fc7\u7684\u6700\u6f02\u4eae\u7684\u3001\u4e5f\u662f\u6700\u806a\u660e\u7684\u9e1f\u3002\u5b83\u5bf9\u6211\u604b\u604b\u4e0d\u820d\u3002\u6709\u4e00\u6b21\u6211\u8d70\u5f97\u592a\u8fdc\u4e86\uff0c\u5b83\u770b\u4e0d\u89c1\u6211\u7684\u8e2a\u5f71\u4e86\u3002\u5b83\u4fbf\u5f00\u59cb\u53eb\u5524\u4e86\u8d77\u6765\uff0c\u800c\u4e14\u53eb\u58f0\u8d8a\u6765\u8d8a\u51c4\u5389\u3002\u5982\u679c\u4f60\u542c\u4e86\u8fd9\u79cd\u53eb\u58f0\uff0c\u4f60\u4e00\u5b9a\u4f1a\u4ee5\u4e3a\u5b83\u662f\u88ab\u4ec0\u4e48\u4eba\u6d3b\u6d3b\u5730\u5265\u4e86\u76ae\u3002\u8fd9\u79cd\u53eb\u58f0\u4e00\u822c\u662f\u9e66\u9e49\u5728\u6781\u7aef\u6050\u60e7\u548c\u75db\u82e6\u4e2d\u624d\u53d1\u51fa\u6765\u7684\u3002",
        "\u6211\u5230\u5e95\u8fd8\u662f\u53eb\u4e86\u3002\u53ef\u53ef\u4f38\u5f00\u4e86\u7fc5\u8180\u8fdf\u7591\u4e86\u4e00\u4f1a\u513f\uff0c\u7136\u540e\u655b\u7ffc\u4fef\u51b2\u800c\u4e0b\uff0c\u53ea\u4e00\u4e0b\u5c31\u505c\u5728\u6211\u4f38\u51fa\u7684\u624b\u81c2\u4e0a\u4e86\u3002\u65c1\u8fb9\u7684\u4eba\u90fd\u76ee\u77aa\u53e3\u5446\u2014\u2014\u4e00\u4e2a\u4eba\u7adf\u7136\u7528\u9e66\u9e49\u7684\u58f0\u97f3\u628a\u4e00\u53ea\u9e1f\u4ece\u8001\u8fdc\u7684\u7a7a\u4e2d\u53eb\u4e86\u4e0b\u6765\u3002",
        "\u8fd9\u53ea\u9e66\u9e49\u8fd8\u6709\u4e00\u6837\u597d\u628a\u620f\uff1a\u5b83\u4f1a\u628a\u59bb\u7684\u6bdb\u7ebf\u56e2\u5f04\u5f97\u4e71\u4e03\u516b\u7cdf\u3002\u5b83\u603b\u662f\u4e00\u53e3\u54ac\u4f4f\u9732\u5728\u5916\u9762\u7684\u6d3b\u7ebf\u5934\uff0c\u5f88\u5feb\u5730\u98de\u5230\u7a7a\u4e2d\uff0c\u628a\u4e00\u6574\u56e2\u7ebf\u90fd\u6253\u5f00\u6765\uff0c\u5c31\u50cf\u4e00\u4e2a\u7eb8\u98ce\u7b5d\u62d6\u7740\u4e00\u6761\u6781\u957f\u7684\u5c3e\u5df4\u3002\u6211\u7684\u59bb\u5b50\u5df2\u7ecf\u4e0d\u518d\u7ec7\u6bdb\u8863\u4e86\uff0c\u5979\u8bf4\u5979\u5b9e\u5728\u4e0d\u662f\u53ef\u53ef\u7684\u5bf9\u624b\u3002"
      ],
          textEn: [
        "When studying the behavior of higher animals, funny things often happen, but the amusing protagonist is usually not the animal, but the observer himself. He has to resort to all manner of tricks to avoid being detected by his research subjects. If you happened to see his strange behavior, you might well suspect he had gone mad.",
        "For a time I devoted myself to studying mallard ducks. I reached the conclusion that if I wanted the ducklings to follow me, I had to squat down and quack like a mother duck. Sure enough, this time the little ducks weren’t afraid of me at all. They looked at me trustingly, huddled together, awaiting my commands. I led the group of ducklings to swim in the nearby Danube River.",
        "But to make them follow me, I had to walk crouching and keep quacking non-stop. That Sunday, as I was crouching, crawling, and quacking across the lawn with the little ducks, I suddenly looked up to see a row of people along the garden railing, all white-faced with expressions of utter horror. Because they could only see me — and not the ducklings. I’m sure they thought I was a madman.",
        "Another time I was nearly committed to an asylum, all because of my yellow-crested cockatoo ‘Coco.’ Coco was the most beautiful and cleverest bird I had ever kept. It was deeply attached to me. Once I walked too far and it lost sight of me. It began to call out, its cries growing ever more piercing. If you heard these cries, you would have thought someone was flaying it alive. Such cries are normally only produced by parrots in extreme fear and pain.",
        "But I called after all. Coco spread its wings, hesitated for a moment, then folded them and dived down, landing in one swoop on my outstretched arm. The people standing nearby were utterly dumbfounded — that a man could summon a bird from high in the sky using a parrot’s voice.",
        "This parrot had another fine trick: it would make a complete mess of my wife’s yarn. It would grab the loose end of yarn, fly rapidly into the air, unraveling the entire ball of wool like a kite trailing an extremely long tail. My wife had given up knitting altogether; she said she was simply no match for Coco."
      ],
          textPinyin: [
            "z\u00e0i y\u00e1n ji\u016b g\u0101o d\u011bng d\u00f2ng w\u00f9 de x\u00edng w\u00e9i sh\u00ed\uff0c ch\u00e1ng ch\u00e1ng hu\u00ec f\u0101 sh\u0113ng y\u00ec xi\u0113 q\u00f9 sh\u00ec\uff0c b\u00fa gu\u00f2 d\u00f2u xi\u00e0o de zh\u01d4 ju\u00e9 ch\u00e1ng ch\u00e1ng b\u00fa sh\u00ec d\u00f2ng w\u00f9\uff0c \u00e9r sh\u00ec gu\u0101n ch\u00e1 zh\u011b z\u00ec j\u01d0\u3002 t\u0101 b\u00f9 d\u00e9 b\u00f9 sh\u01d0 ch\u016b h\u00fan sh\u0113n xi\u00e8 sh\u00f9 c\u00e1i n\u00e9ng b\u00fa b\u00e8i t\u0101 de y\u00e1n ji\u016b du\u00ec xi\u00e0ng f\u0101 xi\u00e0n\u3002 n\u01d0 r\u00fa gu\u01d2 c\u00f3ng p\u00e1ng k\u00e0n d\u00e0o t\u0101 de zh\u00e8 xi\u0113 gu\u00e0i m\u00fa y\u00e0ng\uff0c shu\u014d b\u00fa d\u00ecng hu\u00ec y\u00ed x\u012bn t\u0101 f\u0101 le f\u0113ng ne\u3002",
            "y\u01d2u y\u00ed du\u00e0n sh\u00ed ji\u0101n w\u01d2 zh\u00ec l\u00ec y\u00fa shu\u01d0 y\u0101 z\u01d0 de y\u00e1n ji\u016b\uff0c w\u01d2 d\u00e9 ch\u016b de ji\u00e9 l\u00f9n sh\u00ec\uff1a y\u00e0o xi\u01ceo f\u00fa g\u0113n zhe w\u01d2 z\u01d2u\uff0c w\u01d2 d\u00e9 d\u016bn xi\u00e0 l\u00e1i xu\u00e9 m\u01d4 f\u00fa n\u00e0 y\u00e0ng ji\u00e0o c\u00e1i x\u00edng\u3002 gu\u01d2 r\u00e1n\uff0c zh\u00e8 y\u00ed c\u00ec zh\u00e8 xi\u0113 xi\u01ceo y\u0101 z\u01d0 y\u00ec di\u01cen \u00e9r y\u011b b\u00fa p\u00e0 w\u01d2\uff0c t\u0101 men x\u00ecn r\u00e8n d\u00ec w\u00e0ng zhe w\u01d2\uff0c j\u01d0 ch\u00e9ng y\u00ec du\u012b\uff0c t\u012bng h\u00f2u w\u01d2 de h\u00e0o l\u00ecng\u3002 w\u01d2 d\u00e0i zhe n\u00e0 q\u00fan xi\u01ceo f\u00fa d\u00e0o f\u00f9 j\u00ecn de du\u014d n\u01ceo h\u00e9 q\u00f9 y\u00f3u y\u01d2ng\u3002",
            "b\u00fa gu\u00f2\uff0c w\u00e8i le y\u00e0o t\u0101 men g\u0113n zhe w\u01d2\uff0c w\u01d2 b\u00f9 d\u00e9 b\u00f9 d\u016bn zhe z\u01d2u\uff0c h\u00e1i d\u00e9 b\u00f9 t\u00edng d\u00ec g\u0101 g\u0101 ji\u00e0o\u3002 n\u00e0 ge x\u012bng q\u012b ti\u0101n\uff0c d\u0101ng w\u01d2 d\u00e0i zhe n\u00e0 q\u00fan xi\u01ceo y\u0101 zi z\u00e0i c\u01ceo p\u00edng sh\u00e0ng d\u016bn zhe p\u00e1 zhe ji\u00e0o zhe z\u01d2u de sh\u00ed h\u00f2u\uff0c m\u011bng y\u00ec t\u00e1i t\u00f3u\uff0c qu\u00e8 k\u00e0n ji\u00e0n yu\u00e1n z\u01d0 de l\u00e1n g\u0101n bi\u0101n p\u00e1i zhe y\u00ec p\u00e1i r\u00e9n\uff0c t\u0101 men qu\u00e1n d\u014du li\u01cen s\u00e8 sh\u00e0 b\u00e1i\uff0c y\u00ed f\u00f9 ji\u00e0n le gu\u01d0 de bi\u01ceo q\u00edng\u3002 y\u012bn w\u00e8i t\u0101 men zh\u012b k\u00e0n d\u00e0o le w\u01d2\u2014\u2014 \u00e9r k\u00e0n b\u00fa d\u00e0o n\u00e0 xi\u0113 xi\u01ceo y\u0101 zi\u3002 w\u01d2 xi\u01ceng t\u0101 men y\u00ed d\u00ecng y\u01d0 w\u00e9i w\u01d2 sh\u00ec y\u00ed g\u00e8 f\u0113ng z\u01d0\u3002",
            "l\u00ecng y\u00ed c\u00ec w\u01d2 ch\u00e0 di\u01cen \u00e9r b\u00e8i s\u00f2ng j\u00ecn f\u0113ng r\u00e9n yu\u00e0n l\u01d0\uff0c zh\u00e8 d\u00e9 gu\u00e0i w\u01d2 y\u01ceng de n\u00e0 zh\u012b hu\u00e1ng gu\u0101n d\u00e0 y\u012bng w\u01d4 \u201c k\u011b k\u011b \u201d li\u01ceo\u3002 \u201c k\u011b k\u011b \u201d sh\u00ec w\u01d2 su\u01d2 y\u01ceng gu\u00f2 de zu\u00ec pi\u00e0o liang de\u3001 y\u011b sh\u00ec zu\u00ec c\u014dng ming de ni\u01ceo\u3002 t\u0101 du\u00ec w\u01d2 li\u00e0n li\u00e0n b\u00fa sh\u00e8\u3002 y\u01d2u y\u00ed c\u00ec w\u01d2 z\u01d2u d\u00e9 t\u00e0i yu\u01cen le\uff0c t\u0101 k\u00e0n b\u00fa ji\u00e0n w\u01d2 de z\u014dng y\u01d0ng le\u3002 t\u0101 bi\u00e0n k\u0101i sh\u01d0 ji\u00e0o hu\u00e0n le q\u01d0 l\u00e1i\uff0c \u00e9r qi\u011b ji\u00e0o sh\u0113ng yu\u00e8 l\u00e1i yu\u00e8 q\u012b l\u00ec\u3002 r\u00fa gu\u01d2 n\u01d0 t\u012bng le zh\u00e8 zh\u01d2ng ji\u00e0o sh\u0113ng\uff0c n\u01d0 y\u00ed d\u00ecng hu\u00ec y\u01d0 w\u00e9i t\u0101 sh\u00ec b\u00e8i sh\u00e9n me r\u00e9n hu\u00f3 hu\u00f3 d\u00ec b\u0101o le p\u00ed\u3002 zh\u00e8 zh\u01d2ng ji\u00e0o sh\u0113ng y\u00ec b\u0101n sh\u00ec y\u012bng w\u01d4 z\u00e0i j\u00ed du\u0101n k\u01d2ng j\u00f9 h\u00e9 t\u00f2ng k\u01d4 zh\u014dng c\u00e1i f\u0101 ch\u016b l\u00e1i de\u3002",
            "w\u01d2 d\u00e0o d\u01d0 h\u00e1i sh\u00ec ji\u00e0o le\u3002 k\u011b k\u011b sh\u0113n k\u0101i le ch\u00ec b\u01ceng ch\u00ed y\u00ed le y\u00ed hu\u00ec er\uff0c r\u00e1n h\u00f2u li\u01cen y\u00ec f\u01d4 ch\u014dng \u00e9r xi\u00e0\uff0c zh\u012b y\u00ed xi\u00e0 ji\u00f9 t\u00edng z\u00e0i w\u01d2 sh\u0113n ch\u016b de sh\u01d2u b\u00ec sh\u00e0ng le\u3002 p\u00e1ng bi\u0101n de r\u00e9n d\u014du m\u00f9 d\u00e8ng k\u01d2u d\u0101i\u2014\u2014 y\u00ed g\u00e8 r\u00e9n j\u00ecng r\u00e1n y\u00f2ng y\u012bng w\u01d4 de sh\u0113ng y\u012bn b\u01ce y\u00ec zh\u012b ni\u01ceo c\u00f3ng l\u01ceo yu\u01cen de k\u014dng zh\u014dng ji\u00e0o le xi\u00e0 l\u00e1i\u3002",
            "zh\u00e8 zh\u012b y\u012bng w\u01d4 h\u00e1i y\u01d2u y\u00ed y\u00e0ng h\u01ceo b\u01ce x\u00ec\uff1a t\u0101 hu\u00ec b\u01ce q\u012b de m\u00e1o xi\u00e0n tu\u00e1n n\u00f2ng d\u00e9 lu\u00e0n q\u012b b\u0101 z\u0101o\u3002 t\u0101 z\u01d2ng sh\u00ec y\u00ec k\u01d2u y\u01ceo zh\u00f9 l\u00f9 z\u00e0i w\u00e0i mi\u00e0n de hu\u00f3 xi\u00e0n t\u00f3u\uff0c h\u011bn ku\u00e0i d\u00ec f\u0113i d\u00e0o k\u014dng zh\u014dng\uff0c b\u01ce y\u00ec zh\u011bng tu\u00e1n xi\u00e0n d\u014du d\u01ce k\u0101i l\u00e1i\uff0c ji\u00f9 xi\u00e0ng y\u00ed g\u00e8 zh\u01d0 f\u0113ng zheng tu\u014d zhe y\u00ec ti\u00e1o j\u00ed ch\u00e1ng de w\u011bi ba\u3002 w\u01d2 de q\u012b z\u01d0 y\u01d0 j\u012bng b\u00fa z\u00e0i zh\u012b m\u00e1o y\u012b le\uff0c t\u0101 shu\u014d t\u0101 sh\u00ed z\u00e0i b\u00fa sh\u00ec k\u011b k\u011b de du\u00ec sh\u01d2u\u3002"
          ],
          annotations: [
            { id: 1, term: "嗔怪", pinyin: "chēnguài", definition: "对人表示不满。", definitionEn: "To show displeasure toward someone." },
            { id: 2, term: "怪诞不经", pinyin: "guàidànbùjīng", definition: "离奇古怪，不合常理。", definitionEn: "Bizarre, absurd, against common sense." },
            { id: 3, term: "大相径庭", pinyin: "dàxiāngjìngtíng", definition: "形容彼此相差很远。", definitionEn: "Vastly different from each other." },
            { id: 4, term: "神采奕奕", pinyin: "shéncǎiyìyì", definition: "形容精神饱满，容光焕发。", definitionEn: "Full of spirit and radiant." }
          ],
          teachingPoints: [
            { cn: "体会科普文章的幽默语言风格。", en: "Appreciate the humorous language style of popular science writing." }
          ],
          parentTips: [
            { cn: "鼓励孩子阅读《所罗门王的指环》全书。", en: "Encourage reading the full King Solomon's Ring." }
          ]
        },
        {
          id: 18,
          title: "狼",
          titleEn: "The Wolves",
          difficulty: 4,
          author: "蒲松龄",
          authorEn: "Pu Songling",
          source: "选自《聊斋志异》卷六（上海古籍出版社1986年版）。此题下共有三则故事，这里选的是第二则。",
          sourceEn: "Selected from Chapter 6 of Strange Tales from a Chinese Studio (Shanghai Classics Publishing House, 1986). This is the second of three stories under this title.",
          vocabWords: [
            {word:'缀行',pinyin:'zhuì xíng',en:'follow closely',sentence:'缀行甚远。',sentenceEn:'Followed closely for a very long distance.'},
            {word:'屠',pinyin:'tú',en:'butcher',sentence:'一屠晚归，担中肉尽。',sentenceEn:'A butcher returning late, the meat in his load all gone.'},
            {word:'窘',pinyin:'jiǒng',en:'desperate; cornered',sentence:'屠大窘，恐前后受其敌。',sentenceEn:'The butcher was desperate, fearing attack from front and back.'},
            {word:'假寐',pinyin:'jiǎ mèi',en:'pretend to sleep',sentence:'一狼径去，其一犬坐于前，目似瞑，意暇甚。',sentenceEn:'One wolf left, the other sat like a dog in front, eyes seemingly closed, looking very relaxed.'},
            {word:'黠',pinyin:'xiá',en:'cunning',sentence:'狼亦黠矣，而顷刻两毙。',sentenceEn:'The wolves were indeed cunning, yet both were killed in a moment.'}
          ],
          footnotes: [
            {term:"\u7f00\u884c", termEn:"follow closely", definition:"\u3010zhu\u00ec x\u00edng\u3011follow closely\u3002", definitionEn:"follow closely"},
            {term:"\u5c60", termEn:"butcher", definition:"\u3010t\u00fa\u3011butcher\u3002", definitionEn:"butcher"},
            {term:"\u7a98", termEn:"desperate; cornered", definition:"\u3010ji\u01d2ng\u3011desperate; cornered\u3002", definitionEn:"desperate; cornered"},
            {term:"\u5047\u5bd0", termEn:"pretend to sleep", definition:"\u3010ji\u01ce m\u00e8i\u3011pretend to sleep\u3002", definitionEn:"pretend to sleep"},
            {term:"\u9ee0", termEn:"cunning", definition:"\u3010xi\u00e1\u3011cunning\u3002", definitionEn:"cunning"}
          ],
          readingTips: [
            {cn:"\u5148\u7ed3\u5408\u6ce8\u91ca\u7586\u901a\u6587\u610f\uff0c\u518d\u53cd\u590d\u8bf5\u8bfb\uff0c\u4f53\u4f1a\u6587\u8a00\u6587\u7684\u7b80\u7ec3\u4e0e\u97f5\u5f8b\u3002\u6ce8\u610f\u79ef\u7d2f\u5e38\u89c1\u7684\u6587\u8a00\u5b9e\u8bcd\u548c\u865a\u8bcd\u3002", en:"First understand the text with annotations, then read aloud repeatedly to appreciate the conciseness and rhythm of classical Chinese. Note common content and function words."},
            {cn:"\u601d\u8003\u6587\u7ae0\u7684\u5199\u4f5c\u80cc\u666f\u548c\u4f5c\u8005\u7684\u601d\u60f3\u611f\u60c5\u3002\u6587\u8a00\u6587\u4e2d\u7684\u54ea\u4e9b\u601d\u60f3\u5bf9\u4eca\u5929\u4ecd\u6709\u542f\u53d1\uff1f", en:"Consider the historical context and the author's thoughts and feelings. Which ideas from this classical text still resonate today?"}
          ],
          grammarPoints: [
            {point:'文言叙事',pointEn:'wén yán xù shì',example:'classical narrative',exampleEn:'一屠晚归，担中肉尽，止有剩骨。',explanation:'A butcher returning late, the meat all gone, only leftover bones remained.',explanationEn:'文言文用简练的语言叙述紧张的故事情节'}
          ],
          authorBio: {
            cn: "蒲松龄（1640—1715），字留仙，世称聊斋先生，淄川（今属山东淄博）人，清代文学家。著有文言小说集《聊斋志异》等。",
            en: "Pu Songling (1640–1715), courtesy name Liuxian, known as Master Liaozhai, was from Zichuan (modern Zibo, Shandong), a Qing dynasty writer. Author of Strange Tales from a Chinese Studio."
          },
          isSelfRead: false,
          isClassical: true,
          preview: [
            { cn: "先不看注释，看看能否大致读懂课文。然后借助注释，再读一遍。", en: "Try reading without annotations first. Then read again with annotations." },
            { cn: "本文的落脚点在什么地方？", en: "What is the main point of this text?" }
          ],
          text: [
        "\u4e00\u5c60\u665a\u5f52\uff0c\u62c5\u4e2d\u8089\u5c3d\uff0c\u6b62\u6709\u5269\u9aa8\u3002\u9014\u4e2d\u4e24\u72fc\uff0c\u7f00\u884c\u751a\u8fdc\u3002",
        "\u5c60\u60e7\uff0c\u6295\u4ee5\u9aa8\u3002\u4e00\u72fc\u5f97\u9aa8\u6b62\uff0c\u4e00\u72fc\u4ecd\u4ece\u3002\u590d\u6295\u4e4b\uff0c\u540e\u72fc\u6b62\u800c\u524d\u72fc\u53c8\u81f3\u3002\u9aa8\u5df2\u5c3d\u77e3\uff0c\u800c\u4e24\u72fc\u4e4b\u5e76\u9a71\u5982\u6545\u3002",
        "\u5c60\u5927\u7a98\uff0c\u6050\u524d\u540e\u53d7\u5176\u654c\u3002\u987e\u91ce\u6709\u9ea6\u573a\uff0c\u573a\u4e3b\u79ef\u85aa\u5176\u4e2d\uff0c\u82eb\u853d\u6210\u4e18\u3002\u5c60\u4e43\u5954\u501a\u5176\u4e0b\uff0c\u5f1b\u62c5\u6301\u5200\u3002\u72fc\u4e0d\u6562\u524d\uff0c\u7708\u7708\u76f8\u5411\u3002",
        "\u5c11\u65f6\uff0c\u4e00\u72fc\u5f84\u53bb\uff0c\u5176\u4e00\u72ac\u5750\u4e8e\u524d\u3002\u4e45\u4e4b\uff0c\u76ee\u4f3c\u7791\uff0c\u610f\u6687\u751a\u3002\u5c60\u66b4\u8d77\uff0c\u4ee5\u5200\u5288\u72fc\u9996\uff0c\u53c8\u6570\u5200\u6bd9\u4e4b\u3002\u65b9\u6b32\u884c\uff0c\u8f6c\u89c6\u79ef\u85aa\u540e\uff0c\u4e00\u72fc\u6d1e\u5176\u4e2d\uff0c\u610f\u5c06\u96a7\u5165\u4ee5\u653b\u5176\u540e\u4e5f\u3002\u8eab\u5df2\u534a\u5165\uff0c\u6b62\u9732\u5c3b\u5c3e\u3002\u5c60\u81ea\u540e\u65ad\u5176\u80a1\uff0c\u4ea6\u6bd9\u4e4b\u3002\u4e43\u609f\u524d\u72fc\u5047\u5bd0\uff0c\u76d6\u4ee5\u8bf1\u654c\u3002",
        "\u72fc\u4ea6\u9ee0\u77e3\uff0c\u800c\u9877\u523b\u4e24\u6bd9\uff0c\u79bd\u517d\u4e4b\u53d8\u8bc8\u51e0\u4f55\u54c9\uff1f\u6b62\u589e\u7b11\u8033\u3002"
      ],
          textEn: [
        "A butcher was returning home one evening. The meat in his basket was gone; only bones remained. On the road, two wolves followed him for a long distance.",
        "Frightened, he threw them a bone. One wolf stopped for the bone, but the other kept following. He threw another; the second wolf stopped, but the first came again. The bones were all gone, yet both wolves still pursued as before.",
        "Greatly distressed, fearing attack from both front and rear, he noticed a wheat field nearby where the owner had stacked firewood, covered into a mound. He ran to lean against it, set down his load, and took up his knife. The wolves dared not advance but glared menacingly.",
        "After a while, one wolf left directly, while the other sat like a dog in front. After a long time, its eyes seemed to close, looking very relaxed. The butcher sprang up, split the wolf’s head with his knife, and killed it with several blows. As he was about to leave, he turned and looked behind the woodpile — the other wolf had been digging a tunnel through it, intending to burrow in and attack from behind. Its body was half inside, only hindquarters and tail exposed. He cut its thigh from behind and killed it too. Then he realized the first wolf had been pretending to sleep to lure him.",
        "The wolves were cunning indeed, but both died in a moment. How much deception can beasts manage? It only adds to the laughter."
      ],
          textPinyin: [
            "y\u00ec t\u00fa w\u01cen gu\u012b\uff0c d\u0101n zh\u014dng r\u00f2u j\u00ecn\uff0c zh\u01d0 y\u01d2u sh\u00e8ng g\u01d4\u3002 t\u00fa zh\u014dng li\u01ceng l\u00e1ng\uff0c zhu\u00ec x\u00edng sh\u00e8n yu\u01cen\u3002",
            "t\u00fa j\u00f9\uff0c t\u00f3u y\u01d0 g\u01d4\u3002 y\u00ec l\u00e1ng d\u00e9 g\u01d4 zh\u01d0\uff0c y\u00ec l\u00e1ng r\u00e9ng c\u00f3ng\u3002 f\u00f9 t\u00f3u zh\u012b\uff0c h\u00f2u l\u00e1ng zh\u01d0 \u00e9r qi\u00e1n l\u00e1ng y\u00f2u zh\u00ec\u3002 g\u01d4 y\u01d0 j\u00ecn y\u01d0\uff0c \u00e9r li\u01ceng l\u00e1ng zh\u012b b\u00ecng q\u016b r\u00fa g\u00f9\u3002",
            "t\u00fa d\u00e0 ji\u01d2ng\uff0c k\u01d2ng qi\u00e1n h\u00f2u sh\u00f2u q\u00ed d\u00ed\u3002 g\u00f9 y\u011b y\u01d2u m\u00e0i ch\u01ceng\uff0c ch\u01ceng zh\u01d4 j\u012b x\u012bn q\u00ed zh\u014dng\uff0c sh\u0101n b\u00ec ch\u00e9ng qi\u016b\u3002 t\u00fa n\u01cei b\u0113n y\u01d0 q\u00ed xi\u00e0\uff0c ch\u00ed d\u0101n ch\u00ed d\u0101o\u3002 l\u00e1ng b\u00f9 g\u01cen qi\u00e1n\uff0c d\u0101n d\u0101n xi\u0101ng xi\u00e0ng\u3002",
            "sh\u01ceo sh\u00ed\uff0c y\u00ec l\u00e1ng j\u00ecng q\u00f9\uff0c q\u00ed y\u012b qu\u01cen zu\u00f2 y\u00fa qi\u00e1n\u3002 ji\u01d4 zh\u012b\uff0c m\u00f9 s\u00ec m\u00edng\uff0c y\u00ec xi\u00e1 sh\u00e8n\u3002 t\u00fa b\u00e0o q\u01d0\uff0c y\u01d0 d\u0101o p\u012b l\u00e1ng sh\u01d2u\uff0c y\u00f2u sh\u00f9 d\u0101o b\u00ec zh\u012b\u3002 f\u0101ng y\u00f9 x\u00edng\uff0c zhu\u01cen sh\u00ec j\u012b x\u012bn h\u00f2u\uff0c y\u00ec l\u00e1ng d\u00f2ng q\u00ed zh\u014dng\uff0c y\u00ec ji\u0101ng su\u00ec r\u00f9 y\u01d0 g\u014dng q\u00ed h\u00f2u y\u011b\u3002 sh\u0113n y\u01d0 b\u00e0n r\u00f9\uff0c zh\u01d0 l\u00f9 k\u0101o w\u011bi\u3002 t\u00fa z\u00ec h\u00f2u du\u00e0n q\u00ed g\u01d4\uff0c y\u00ec b\u00ec zh\u012b\u3002 n\u01cei w\u00f9 qi\u00e1n l\u00e1ng ji\u01ce m\u00e8i\uff0c g\u00e0i y\u01d0 y\u00f2u d\u00ed\u3002",
            "l\u00e1ng y\u00ec xi\u00e1 y\u01d0\uff0c \u00e9r q\u01d0ng k\u00e8 li\u01ceng b\u00ec\uff0c q\u00edn sh\u00f2u zh\u012b bi\u00e0n zh\u00e0 j\u01d0 h\u00e9 z\u0101i\uff1f zh\u01d0 z\u0113ng xi\u00e0o \u011br\u3002"
          ],
          annotations: [
            { id: 1, term: "缀行", pinyin: "zhuìxíng", definition: "紧跟着走。", definitionEn: "To follow closely." },
            { id: 2, term: "窘", pinyin: "jiǒng", definition: "处境困迫。", definitionEn: "In a difficult situation." },
            { id: 3, term: "苫蔽", pinyin: "shànbì", definition: "覆盖、遮盖。", definitionEn: "To cover, to shield." },
            { id: 4, term: "眈眈", pinyin: "dāndān", definition: "凶狠注视的样子。", definitionEn: "Staring fiercely." },
            { id: 5, term: "黠", pinyin: "xiá", definition: "狡猾。", definitionEn: "Cunning, crafty." },
            { id: 6, term: "假寐", pinyin: "jiǎmèi", definition: "假装睡觉。", definitionEn: "To pretend to sleep." }
          ],
          thinkExplore: [
            { cn: "课文主要写了屠户与狼斗智斗勇的经过。说说其间经历了哪几次交锋。", en: "The text mainly describes the butcher's battle of wits with the wolves. Describe the stages of confrontation." },
            { cn: "找出能够概括文章中心的语句，说说这个故事告诉我们什么道理。", en: "Find the sentence summarizing the central idea and explain the lesson." }
          ],
          accumExtend: [
            { cn: "解释\u201C犬坐\u201D\u201C洞其中\u201D\u201C隧入\u201D中的词类活用现象。", en: "Explain the flexible word usage in '犬坐' (sat like a dog), '洞其中' (tunneled through), '隧入' (entered via tunnel)." },
            { cn: "发挥想象，将本文改写成一则白话故事。", en: "Use imagination to rewrite this as a modern Chinese story." }
          ],
          teachingPoints: [
            { cn: "学习文言文中词类活用现象。", en: "Learn about flexible word usage in classical Chinese." },
            { cn: "理解寓言式结尾议论的作用。", en: "Understand the function of fable-style concluding commentary." }
          ],
          parentTips: [
            { cn: "帮助孩子朗读文言文，逐句对照注释理解原文。", en: "Help your child read classical Chinese aloud with annotations." }
          ]
        }
      ],
      writing: {
        title: "如何突出中心",
        titleEn: "How to Highlight the Central Theme",
        vocabWords: [
          {word:'中心',pinyin:'zhōng xīn',en:'central theme',sentence:'写文章要突出中心。',sentenceEn:'Writing articles should highlight the central theme.'},
          {word:'选材',pinyin:'xuǎn cái',en:'select material',sentence:'选材要围绕中心。',sentenceEn:'Material selection should revolve around the theme.'},
          {word:'详略',pinyin:'xiáng lüè',en:'detailed and brief',sentence:'安排好详略。',sentenceEn:'Arrange the balance of detail and brevity well.'},
          {word:'主题',pinyin:'zhǔ tí',en:'theme; subject',sentence:'主题要鲜明、集中。',sentenceEn:'The theme should be clear and focused.'},
          {word:'深化',pinyin:'shēn huà',en:'deepen',sentence:'通过细节深化中心。',sentenceEn:'Deepen the central theme through details.'}
        ],
        content: {
          cn: "中心是文章传达的作者基本观点、态度、情感和意图。围绕中心写作是作文的基本要求。为了突出中心，可以设置贯穿全文的线索，注意安排内容的主次和详略，还可以采用开门见山、卒章显志、前后呼应、抑扬对比等技巧。",
          en: "The central theme conveys the author's basic viewpoint, attitude, emotion, and intent. Writing around a central theme is a basic requirement. To highlight it, set a thread through the text, arrange content by importance and detail, and use techniques like getting straight to the point, revealing the theme at the end, echoing, and contrast."
        }
      },
      readWrite: [{
        title: "数词和量词",
        titleEn: "Numerals and Measure Words",
        vocabWords: [
          {word:'数词',pinyin:'shù cí',en:'numeral',sentence:'数词是表示数量的词。',sentenceEn:'Numerals are words that express quantity.'},
          {word:'量词',pinyin:'liàng cí',en:'measure word',sentence:'量词是表示单位的词。',sentenceEn:'Measure words express units of measurement.'},
          {word:'确数',pinyin:'què shù',en:'exact number',sentence:'一、七千、六万九千表示确数。',sentenceEn:'One, seven thousand, sixty-nine thousand are exact numbers.'},
          {word:'概数',pinyin:'gài shù',en:'approximate number',sentence:'十来个、二十几只表示概数。',sentenceEn:'About ten, twenty-something are approximate numbers.'},
          {word:'序数',pinyin:'xù shù',en:'ordinal number',sentence:'第一、老三、初五表示序数。',sentenceEn:'First, third eldest, fifth day are ordinal numbers.'}
        ],
        content: {
          cn: "数词表示确数、概数或序数。量词表示单位：\u201C个\u201D\u201C条\u201D\u201C只\u201D等表示事物单位，\u201C次\u201D\u201C回\u201D\u201C遍\u201D等表示动作单位。数词与量词结合使用表示数量。",
          en: "Numerals express exact, approximate, or ordinal numbers. Measure words express units: 个, 条, 只 for things; 次, 回, 遍 for actions. Numerals and measure words combine to express quantities."
        }
      }],
      comprehensiveLearning: null,
      classicBookGuide: null,
      extracurricularPoetry: null
    },
    /* ─── Unit 6 想象之翼 ─── */
    {
      id: 6,
      title: "第六单元",
      titleEn: "Unit 6",
      theme: "想象之翼",
      themeEn: "Wings of Imagination",
      unitIntro: {
        cn: "想象是人类与生俱来的一种能力。借着想象的翅膀，我们可以超越自身局限，体验更广大的世界。本单元课文有童话、诗歌、神话和寓言等，都富于想象力，引人遐思，能引导我们换一种眼光来看世界。本单元学习快速阅读，力争每分钟不少于400字。阅读时尽量扩大一次性进入视野的文字数量，寻找关键词语以带动整体阅读，提高阅读速度。",
        en: "Imagination is an innate human ability. On the wings of imagination, we can transcend our limitations and experience a broader world. This unit includes fairy tales, poetry, myths, and fables — all rich in imagination, guiding us to see the world from new perspectives. This unit focuses on fast reading, aiming for at least 400 characters per minute. While reading, expand the text your eyes take in at once and look for keywords to drive overall comprehension."
      },
      type: "kewen",
      lessons: [
        {
          id: 19,
          title: "皇帝的新装",
          titleEn: "The Emperor's New Clothes",
          difficulty: 4,
          author: "安徒生",
          authorEn: "Hans Christian Andersen",
          source: "选自《安徒生童话和故事选》（人民文学出版社1956年版）。叶君健译。有改动。",
          sourceEn: "Selected from Selected Andersen's Fairy Tales (People's Literature Publishing House, 1956). Translated by Ye Junjian. Adapted.",
          vocabWords: [
            {word:'炫耀',pinyin:'xuàn yào',en:'show off',sentence:'除非是为了去炫耀一下他的新衣服。',sentenceEn:'Unless it was to show off his new clothes.'},
            {word:'愚蠢',pinyin:'yú chǔn',en:'foolish; stupid',sentence:'凡是愚蠢或不称职的人就看不见这布。',sentenceEn:'Anyone who was foolish or incompetent could not see the cloth.'},
            {word:'骗子',pinyin:'piàn zi',en:'swindler',sentence:'两个骗子装作在工作的样子。',sentenceEn:'The two swindlers pretended to be working.'},
            {word:'称职',pinyin:'chèn zhí',en:'competent',sentence:'不称职的人看不见这布。',sentenceEn:'Incompetent people could not see the cloth.'},
            {word:'赤裸',pinyin:'chì luǒ',en:'naked; bare',sentence:'他实在没有穿什么衣服啊！',sentenceEn:'He really has nothing on at all!'}
          ],
          footnotes: [
            {term:"\u70ab\u8000", termEn:"show off", definition:"\u3010xu\u00e0n y\u00e0o\u3011show off\u3002", definitionEn:"show off"},
            {term:"\u611a\u8822", termEn:"foolish; stupid", definition:"\u3010y\u00fa ch\u01d4n\u3011foolish; stupid\u3002", definitionEn:"foolish; stupid"},
            {term:"\u9a97\u5b50", termEn:"swindler", definition:"\u3010pi\u00e0n zi\u3011swindler\u3002", definitionEn:"swindler"},
            {term:"\u79f0\u804c", termEn:"competent", definition:"\u3010ch\u00e8n zh\u00ed\u3011competent\u3002", definitionEn:"competent"},
            {term:"\u8d64\u88f8", termEn:"naked; bare", definition:"\u3010ch\u00ec lu\u01d2\u3011naked; bare\u3002", definitionEn:"naked; bare"}
          ],
          readingTips: [
            {cn:"\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f", en:"Pay attention to the author's narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?"},
            {cn:"\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f", en:"After reading, think: what theme does the author convey? How does the title relate to the content?"}
          ],
          grammarPoints: [
            {point:'讽刺',pointEn:'fěng cì',example:'satire',exampleEn:'通过一个荒诞的故事讽刺了虚伪和愚蠢。',explanation:'Through an absurd story, it satirizes hypocrisy and foolishness.',explanationEn:'用儿童视角戳穿成人世界的虚伪'},
            {point:'夸张',pointEn:'kuā zhāng',example:'exaggeration',exampleEn:'他每一天每一点钟都要换一套衣服。',explanation:'He changed his clothes every hour of every day.',explanationEn:'用夸张手法突出皇帝爱虚荣的性格'}
          ],
          authorBio: {
            cn: "安徒生（1805—1875），丹麦作家。代表作有童话《卖火柴的小女孩》《海的女儿》《丑小鸭》等。",
            en: "Hans Christian Andersen (1805–1875) was a Danish author. His representative works include The Little Match Girl, The Little Mermaid, and The Ugly Duckling."
          },
          isSelfRead: false,
          preview: [
            { cn: "我们从小就听过或读过不少童话。有哪些童话作品给你留下了深刻印象？", en: "We've heard or read many fairy tales since childhood. Which left a deep impression?" },
            { cn: "快速阅读课文，把握主要的故事情节。记录下读完全文的时间。", en: "Read quickly, grasp the main plot, and record the time it takes to finish." }
          ],
          text: [
        "\u8bb8\u591a\u5e74\u4ee5\u524d\uff0c\u6709\u4e00\u4f4d\u7687\u5e1d\uff0c\u4ed6\u975e\u5e38\u559c\u6b22\u597d\u770b\u7684\u65b0\u8863\u670d\u3002\u4e3a\u4e86\u8981\u7a7f\u5f97\u6f02\u4eae\uff0c\u4ed6\u4e0d\u60dc\u628a\u4ed6\u6240\u6709\u7684\u94b1\u90fd\u82b1\u6389\u3002\u4ed6\u65e2\u4e0d\u5173\u5fc3\u4ed6\u7684\u519b\u961f\uff0c\u4e5f\u4e0d\u559c\u6b22\u53bb\u770b\u620f\uff0c\u4e5f\u4e0d\u559c\u6b22\u5750\u7740\u9a6c\u8f66\u53bb\u6e38\u516c\u56ed\u2014\u2014\u9664\u975e\u662f\u4e3a\u4e86\u53bb\u70ab\u8000\u4e00\u4e0b\u4ed6\u7684\u65b0\u8863\u670d\u3002\u4ed6\u6bcf\u4e00\u5929\u6bcf\u4e00\u70b9\u949f\u90fd\u8981\u6362\u4e00\u5957\u8863\u670d\u3002\u4eba\u4eec\u63d0\u5230\u4ed6\uff0c\u603b\u662f\u8bf4\uff1a\u201c\u7687\u4e0a\u5728\u66f4\u8863\u5ba4\u91cc\u3002\u201d",
        "\u6709\u4e00\u5929\uff0c\u4ed6\u7684\u4eac\u57ce\u6765\u4e86\u4e24\u4e2a\u9a97\u5b50\uff0c\u81ea\u79f0\u662f\u7ec7\u5de5\uff0c\u8bf4\u80fd\u7ec7\u51fa\u4eba\u7c7b\u6240\u80fd\u60f3\u5230\u7684\u6700\u7f8e\u4e3d\u7684\u5e03\u3002\u8fd9\u79cd\u5e03\u4e0d\u4ec5\u8272\u5f69\u548c\u56fe\u6848\u90fd\u5206\u5916\u7f8e\u89c2\uff0c\u800c\u4e14\u7f1d\u51fa\u6765\u7684\u8863\u670d\u8fd8\u6709\u4e00\u79cd\u5947\u602a\u7684\u7279\u6027\uff1a\u4efb\u4f55\u4e0d\u79f0\u804c\u7684\u6216\u8005\u611a\u8822\u5f97\u4e0d\u53ef\u6551\u836f\u7684\u4eba\uff0c\u90fd\u770b\u4e0d\u89c1\u8fd9\u8863\u670d\u3002",
        "\u201c\u90a3\u771f\u662f\u7406\u60f3\u7684\u8863\u670d\uff01\u201d\u7687\u5e1d\u5fc3\u91cc\u60f3\uff0c\u201c\u6211\u7a7f\u4e86\u8fd9\u6837\u7684\u8863\u670d\uff0c\u5c31\u53ef\u4ee5\u770b\u51fa\u5728\u6211\u7684\u738b\u56fd\u91cc\u54ea\u4e9b\u4eba\u662f\u4e0d\u79f0\u804c\u7684\uff1b\u6211\u5c31\u53ef\u4ee5\u8fa8\u522b\u51fa\u54ea\u4e9b\u662f\u806a\u660e\u4eba\uff0c\u54ea\u4e9b\u662f\u50bb\u5b50\u3002\u201d\u4e8e\u662f\u4ed6\u4ed8\u4e86\u8bb8\u591a\u94b1\u7ed9\u8fd9\u4e24\u4e2a\u9a97\u5b50\uff0c\u597d\u8ba9\u4ed6\u4eec\u9a6c\u4e0a\u5f00\u59cb\u5de5\u4f5c\u3002\u4ed6\u4eec\u6446\u51fa\u4e24\u67b6\u7ec7\u5e03\u673a\uff0c\u88c5\u4f5c\u662f\u5728\u5de5\u4f5c\u7684\u6837\u5b50\uff0c\u53ef\u662f\u4ed6\u4eec\u7684\u7ec7\u5e03\u673a\u4e0a\u8fde\u4e00\u70b9\u4e1c\u897f\u7684\u5f71\u5b50\u4e5f\u6ca1\u6709\u3002",
        "\u8fd9\u4f4d\u5584\u826f\u7684\u8001\u5927\u81e3\u6765\u5230\u90a3\u4e24\u4e2a\u9a97\u5b50\u7684\u5c4b\u5b50\u91cc\u3002\u4ed6\u4eec\u6b63\u5728\u7a7a\u7ec7\u5e03\u673a\u4e0a\u5fd9\u788c\u5730\u5de5\u4f5c\u3002\u201c\u613f\u4e0a\u5e1d\u53ef\u601c\u6211\u5427\uff01\u201d\u8001\u5927\u81e3\u60f3\uff0c\u4ed6\u628a\u773c\u775b\u7741\u5f97\u7279\u522b\u5927\uff0c\u201c\u6211\u4ec0\u4e48\u4e1c\u897f\u4e5f\u6ca1\u6709\u770b\u89c1\uff01\u201d\u4f46\u662f\u4ed6\u6ca1\u6562\u628a\u8fd9\u53e5\u8bdd\u8bf4\u51fa\u53e3\u6765\u3002\u90a3\u4e24\u4e2a\u9a97\u5b50\u8bf7\u4ed6\u8d70\u8fd1\u4e00\u70b9\uff0c\u95ee\u4ed6\u82b1\u7eb9\u662f\u4e0d\u662f\u5f88\u7f8e\u4e3d\uff0c\u8272\u5f69\u662f\u4e0d\u662f\u5f88\u6f02\u4eae\u3002\u4ed6\u4eec\u6307\u7740\u90a3\u67b6\u7a7a\u7ec7\u5e03\u673a\uff0c\u8001\u5927\u81e3\u7684\u773c\u775b\u8d8a\u7741\u8d8a\u5927\uff0c\u53ef\u662f\u4ed6\u4ecd\u7136\u4ec0\u4e48\u4e5f\u770b\u4e0d\u89c1\u3002\u201c\u6211\u7684\u8001\u5929\u7237\uff01\u201d\u4ed6\u60f3\uff0c\u201c\u96be\u9053\u6211\u662f\u611a\u8822\u7684\u5417\uff1f\u8fd9\u53ef\u7edd\u4e0d\u80fd\u8ba9\u4efb\u4f55\u4eba\u77e5\u9053\u3002\u201d",
        "\u201c\u8fd9\u662f\u600e\u4e48\u4e00\u56de\u4e8b\u5462\uff1f\u201d\u7687\u5e1d\u5fc3\u91cc\u60f3\uff0c\u201c\u6211\u4ec0\u4e48\u4e5f\u6ca1\u6709\u770b\u89c1\uff01\u8fd9\u53ef\u9a87\u4eba\u542c\u95fb\u4e86\u3002\u96be\u9053\u6211\u662f\u4e00\u4e2a\u611a\u8822\u7684\u4eba\u5417\uff1f\u96be\u9053\u6211\u4e0d\u591f\u8d44\u683c\u5f53\u7687\u5e1d\u5417\uff1f\u8fd9\u53ef\u662f\u6211\u9047\u89c1\u7684\u4e00\u4ef6\u6700\u53ef\u6015\u7684\u4e8b\u60c5\u3002\u201d\u201c\u54e6\uff0c\u5b83\u662f\u7f8e\u4e3d\u7684\uff01\u5b83\u662f\u7f8e\u4e3d\u7684\uff01\u201d\u7687\u5e1d\u8bf4\u3002\u4ed6\u70b9\u5934\u8868\u793a\u6ee1\u610f\u3002\u4ed6\u88c5\u7740\u4ed4\u7ec6\u770b\u9762\u6599\u7684\u6837\u5b50\u3002\u4ed6\u4e0d\u613f\u610f\u8bf4\u51fa\u4ed6\u4ec0\u4e48\u4e5f\u6ca1\u6709\u770b\u5230\u3002",
        "\u8fd9\u6837\uff0c\u7687\u5e1d\u5c31\u5728\u90a3\u4e2a\u5bcc\u4e3d\u7684\u534e\u76d6\u4e0b\u6e38\u884c\u8d77\u6765\u4e86\u3002\u7ad9\u5728\u8857\u4e0a\u548c\u7a97\u5b50\u91cc\u7684\u4eba\u90fd\u8bf4\uff1a\u201c\u4e56\u4e56\uff01\u7687\u4e0a\u7684\u65b0\u88c5\u771f\u662f\u6f02\u4eae\uff01\u4ed6\u4e0a\u8863\u4e0b\u9762\u7684\u540e\u88d9\u662f\u591a\u4e48\u7f8e\u4e3d\uff01\u8fd9\u4ef6\u8863\u670d\u771f\u5408\u4ed6\u7684\u8eab\u6750\uff01\u201d\u8c01\u4e5f\u4e0d\u613f\u610f\u8ba9\u4eba\u77e5\u9053\u81ea\u5df1\u4ec0\u4e48\u4e5f\u770b\u4e0d\u89c1\uff0c\u56e0\u4e3a\u8fd9\u6837\u5c31\u4f1a\u663e\u51fa\u81ea\u5df1\u4e0d\u79f0\u804c\uff0c\u6216\u662f\u592a\u611a\u8822\u3002\u7687\u5e1d\u6240\u6709\u7684\u8863\u670d\u4ece\u6765\u6ca1\u6709\u83b7\u5f97\u8fc7\u8fd9\u6837\u7684\u79f0\u8d5e\u3002",
        "\u201c\u53ef\u662f\u4ed6\u4ec0\u4e48\u8863\u670d\u4e5f\u6ca1\u6709\u7a7f\u554a\uff01\u201d\u4e00\u4e2a\u5c0f\u5b69\u5b50\u6700\u540e\u53eb\u4e86\u51fa\u6765\u3002\u201c\u4e0a\u5e1d\u54df\uff0c\u4f60\u542c\u8fd9\u4e2a\u5929\u771f\u7684\u58f0\u97f3\uff01\u201d\u7238\u7238\u8bf4\u3002\u4e8e\u662f\u5927\u5bb6\u628a\u8fd9\u5b69\u5b50\u8bb2\u7684\u8bdd\u79c1\u4e0b\u91cc\u4f4e\u58f0\u5730\u4f20\u64ad\u5f00\u6765\u3002",
        "\u201c\u4ed6\u5b9e\u5728\u6ca1\u6709\u7a7f\u4ec0\u4e48\u8863\u670d\u554a\uff01\u201d\u6700\u540e\u6240\u6709\u7684\u8001\u767e\u59d3\u90fd\u8bf4\u3002\u7687\u5e1d\u6709\u70b9\u513f\u53d1\u6296\uff0c\u56e0\u4e3a\u4ed6\u4f3c\u4e4e\u89c9\u5f97\u8001\u767e\u59d3\u4eec\u6240\u8bb2\u7684\u8bdd\u662f\u771f\u7684\u3002\u4e0d\u8fc7\u4ed6\u81ea\u5df1\u5fc3\u91cc\u5374\u8fd9\u6837\u60f3\uff1a\u201c\u6211\u5fc5\u987b\u628a\u8fd9\u6e38\u884c\u5927\u5178\u4e3e\u884c\u5b8c\u6bd5\u3002\u201d\u56e0\u6b64\u4ed6\u6446\u51fa\u4e00\u526f\u66f4\u9a84\u50b2\u7684\u795e\u6c14\u3002\u4ed6\u7684\u5185\u81e3\u4eec\u8ddf\u5728\u4ed6\u540e\u9762\u8d70\uff0c\u624b\u4e2d\u6258\u7740\u4e00\u6761\u5e76\u4e0d\u5b58\u5728\u7684\u540e\u88d9\u3002"
      ],
          textEn: [
        "Many years ago there was an Emperor who was so exceedingly fond of beautiful new clothes that he spent all his money on them. He cared nothing about his soldiers, nor about the theater, nor about riding through the park in his carriage — except to show off his new clothes. He had a coat for every hour of the day. Where one might say of another king, ‘He is in his council chamber,’ one always said of him, ‘The Emperor is in his dressing room.’",
        "One day two swindlers came to his city. They said they were weavers and could weave the most magnificent fabric. Not only were the colors and patterns extraordinarily beautiful, but clothes made from this cloth had a wonderful property: they were invisible to anyone who was unfit for his position or who was hopelessly stupid.",
        "‘That would be ideal clothes!’ thought the Emperor. ‘If I wore them, I could tell which men in my kingdom are unfit for their posts; I could distinguish the wise from the fools.’ So he paid the two swindlers a large sum of money to start work at once. They set up two looms and pretended to weave, but there was nothing at all on the looms.",
        "The good old minister went to the room where the two swindlers sat working at the empty looms. ‘God have mercy on me!’ the old minister thought, opening his eyes very wide. ‘I can’t see a thing!’ But he did not dare say so aloud. The two swindlers invited him to come closer and asked whether the design was not very beautiful and the colors magnificent. They pointed at the empty loom, and the poor old minister stared as hard as he could, but he still couldn’t see anything. ‘Heavens above!’ he thought. ‘Am I really stupid? This must never be known to anyone.’",
        "‘What’s going on?’ thought the Emperor. ‘I can see nothing at all! This is absolutely appalling. Am I a fool? Am I unfit to be Emperor? This is the most terrible thing that has ever happened to me.’ ‘Oh, it is beautiful! It is beautiful!’ said the Emperor, nodding his approval. He examined the fabric carefully, pretending to see it. He would not say that he could see nothing.",
        "And so the Emperor walked in procession under the magnificent canopy. Everyone in the streets and at the windows said: ‘How splendid the Emperor’s new clothes are! What a magnificent train! How perfectly they fit!’ Nobody would admit that they could see nothing, for that would have shown them unfit for their position or hopelessly stupid. Never before had the Emperor’s clothes been such a success.",
        "‘But he hasn’t got anything on!’ a little child called out at last. ‘Good heavens, listen to the voice of the innocent child!’ said the father. And one person whispered to the other what the child had said.",
        "‘He really hasn’t got anything on!’ all the people finally said. The Emperor shivered slightly, for he felt that what the people were saying seemed to be true. But he thought to himself: ‘I must go through with this procession to the end.’ So he walked even more proudly, and his chamberlains walked behind him, carrying a train that wasn’t there at all."
      ],
          textPinyin: [
            "x\u01d4 du\u014d ni\u00e1n y\u01d0 qi\u00e1n\uff0c y\u01d2u y\u00ed w\u00e8i hu\u00e1ng d\u00ec\uff0c t\u0101 f\u0113i ch\u00e1ng x\u01d0 huan h\u01ceo k\u00e0n de x\u012bn y\u012b fu\u3002 w\u00e8i le y\u00e0o chu\u0101n d\u00e9 pi\u00e0o liang\uff0c t\u0101 b\u00f9 x\u012b b\u01ce t\u0101 su\u01d2 y\u01d2u de qi\u00e1n d\u014du hu\u0101 di\u00e0o\u3002 t\u0101 j\u00ec b\u00f9 gu\u0101n x\u012bn t\u0101 de j\u016bn du\u00ec\uff0c y\u011b b\u00f9 x\u01d0 huan q\u00f9 k\u00e0n x\u00ec\uff0c y\u011b b\u00f9 x\u01d0 huan zu\u00f2 zhe m\u01ce ch\u0113 q\u00f9 y\u00f3u g\u014dng yu\u00e1n\u2014\u2014 ch\u00fa f\u0113i sh\u00ec w\u00e8i le q\u00f9 xu\u00e0n y\u00e0o y\u00ed xi\u00e0 t\u0101 de x\u012bn y\u012b fu\u3002 t\u0101 m\u011bi y\u00ec ti\u0101n m\u011bi y\u00ec di\u01cen zh\u014dng d\u014du y\u00e0o hu\u00e0n y\u00ed t\u00e0o y\u012b fu\u3002 r\u00e9n men t\u00ed d\u00e0o t\u0101\uff0c z\u01d2ng sh\u00ec shu\u014d\uff1a \u201c hu\u00e1ng shang z\u00e0i g\u0113ng y\u012b sh\u00ec l\u01d0\u3002 \u201d",
            "y\u01d2u y\u00ec ti\u0101n\uff0c t\u0101 de j\u012bng ch\u00e9ng l\u00e1i le li\u01ceng g\u00e8 pi\u00e0n zi\uff0c z\u00ec ch\u0113ng sh\u00ec zh\u012b g\u014dng\uff0c shu\u014d n\u00e9ng zh\u012b ch\u016b r\u00e9n l\u00e8i su\u01d2 n\u00e9ng xi\u01ceng d\u00e0o de zu\u00ec m\u011bi l\u00ec de b\u00f9\u3002 zh\u00e8 zh\u01d2ng b\u00f9 b\u00f9 j\u01d0n s\u00e8 c\u01cei h\u00e9 t\u00fa \u00e0n d\u014du f\u00e8n w\u00e0i m\u011bi gu\u0101n\uff0c \u00e9r qi\u011b f\u00e8ng ch\u016b l\u00e1i de y\u012b fu h\u00e1i y\u01d2u y\u00ec zh\u01d2ng q\u00ed gu\u00e0i de t\u00e8 x\u00ecng\uff1a r\u00e8n h\u00e9 b\u00f9 ch\u00e8n zh\u00ed de hu\u00f2 zh\u011b y\u00fa ch\u01d4n d\u00e9 b\u00f9 k\u011b ji\u00f9 y\u00e0o de r\u00e9n\uff0c d\u014du k\u00e0n b\u00fa ji\u00e0n zh\u00e8 y\u012b fu\u3002",
            "\u201c n\u00e0 zh\u0113n sh\u00ec l\u01d0 xi\u01ceng de y\u012b fu\uff01 \u201d hu\u00e1ng d\u00ec x\u012bn l\u01d0 xi\u01ceng\uff0c \u201c w\u01d2 chu\u0101n le zh\u00e8 y\u00e0ng de y\u012b fu\uff0c ji\u00f9 k\u011b y\u01d0 k\u00e0n ch\u016b z\u00e0i w\u01d2 de w\u00e1ng gu\u00f3 l\u01d0 n\u01ce xi\u0113 r\u00e9n sh\u00ec b\u00f9 ch\u00e8n zh\u00ed de\uff1b w\u01d2 ji\u00f9 k\u011b y\u01d0 bi\u00e0n bi\u00e9 ch\u016b n\u01ce xi\u0113 sh\u00ec c\u014dng ming r\u00e9n\uff0c n\u01ce xi\u0113 sh\u00ec sh\u01ce z\u01d0\u3002 \u201d y\u00fa sh\u00ec t\u0101 f\u00f9 le x\u01d4 du\u014d qi\u00e1n g\u011bi zh\u00e8 li\u01ceng g\u00e8 pi\u00e0n zi\uff0c h\u01ceo r\u00e0ng t\u0101 men m\u01ce sh\u00e0ng k\u0101i sh\u01d0 g\u014dng zu\u00f2\u3002 t\u0101 men b\u01cei ch\u016b li\u01ceng ji\u00e0 zh\u012b b\u00f9 j\u012b\uff0c zhu\u0101ng zu\u00f2 sh\u00ec z\u00e0i g\u014dng zu\u00f2 de y\u00e0ng zi\uff0c k\u011b sh\u00ec t\u0101 men de zh\u012b b\u00f9 j\u012b sh\u00e0ng li\u00e1n y\u00ec di\u01cen d\u014dng x\u012b de y\u01d0ng zi y\u011b m\u00e9i y\u01d2u\u3002",
            "zh\u00e8 w\u00e8i sh\u00e0n li\u00e1ng de l\u01ceo d\u00e0 ch\u00e9n l\u00e1i d\u00e0o n\u00e0 li\u01ceng g\u00e8 pi\u00e0n zi de w\u016b zi l\u01d0\u3002 t\u0101 men zh\u00e8ng z\u00e0i k\u014dng zh\u012b b\u00f9 j\u012b sh\u00e0ng m\u00e1ng l\u00f9 d\u00ec g\u014dng zu\u00f2\u3002 \u201c yu\u00e0n sh\u00e0ng d\u00ec k\u011b li\u00e1n w\u01d2 ba\uff01 \u201d l\u01ceo d\u00e0 ch\u00e9n xi\u01ceng\uff0c t\u0101 b\u01ce y\u01cen j\u012bng zh\u0113ng d\u00e9 t\u00e8 bi\u00e9 d\u00e0\uff0c \u201c w\u01d2 sh\u00e9n me d\u014dng x\u012b y\u011b m\u00e9i y\u01d2u k\u00e0n ji\u00e0n\uff01 \u201d d\u00e0n sh\u00ec t\u0101 m\u00e9i g\u01cen b\u01ce zh\u00e8 j\u00f9 hu\u00e0 shu\u014d ch\u016b k\u01d2u l\u00e1i\u3002 n\u00e0 li\u01ceng g\u00e8 pi\u00e0n zi q\u01d0ng t\u0101 z\u01d2u j\u00ecn y\u00ec di\u01cen\uff0c w\u00e8n t\u0101 hu\u0101 w\u00e9n sh\u00ec bu sh\u00ec h\u011bn m\u011bi l\u00ec\uff0c s\u00e8 c\u01cei sh\u00ec bu sh\u00ec h\u011bn pi\u0101o li\u00e0ng\u3002 t\u0101 men zh\u01d0 zhe n\u00e0 ji\u00e0 k\u014dng zh\u012b b\u00f9 j\u012b\uff0c l\u01ceo d\u00e0 ch\u00e9n de y\u01cen j\u012bng yu\u00e8 zh\u0113ng yu\u00e8 d\u00e0\uff0c k\u011b sh\u00ec t\u0101 r\u00e9ng r\u00e1n sh\u00e9n me y\u011b k\u00e0n b\u00fa ji\u00e0n\u3002 \u201c w\u01d2 de l\u01ceo ti\u0101n y\u00e9\uff01 \u201d t\u0101 xi\u01ceng\uff0c \u201c n\u00e1n d\u00e0o w\u01d2 sh\u00ec y\u00fa ch\u01d4n de ma\uff1f zh\u00e8 k\u011b ju\u00e9 b\u00f9 n\u00e9ng r\u00e0ng r\u00e8n h\u00e9 r\u00e9n zh\u012b d\u00e0o\u3002 \u201d",
            "\u201c zh\u00e8 sh\u00ec z\u011bn me y\u00ec hu\u00ed sh\u00ec ne\uff1f \u201d hu\u00e1ng d\u00ec x\u012bn l\u01d0 xi\u01ceng\uff0c \u201c w\u01d2 sh\u00e9n me y\u011b m\u00e9i y\u01d2u k\u00e0n ji\u00e0n\uff01 zh\u00e8 k\u011b h\u00e0i r\u00e9n t\u012bng w\u00e9n le\u3002 n\u00e1n d\u00e0o w\u01d2 sh\u00ec y\u00ed g\u00e8 y\u00fa ch\u01d4n de r\u00e9n ma\uff1f n\u00e1n d\u00e0o w\u01d2 b\u00fa g\u00f2u z\u012b g\u00e9 d\u0101ng hu\u00e1ng d\u00ec ma\uff1f zh\u00e8 k\u011b sh\u00ec w\u01d2 y\u00f9 ji\u00e0n de y\u00ed ji\u00e0n zu\u00ec k\u011b p\u00e0 de sh\u00ec q\u00edng\u3002 \u201d \u201c \u00f2\uff0c t\u0101 sh\u00ec m\u011bi l\u00ec de\uff01 t\u0101 sh\u00ec m\u011bi l\u00ec de\uff01 \u201d hu\u00e1ng d\u00ec shu\u014d\u3002 t\u0101 di\u01cen t\u00f3u bi\u01ceo sh\u00ec m\u01cen y\u00ec\u3002 t\u0101 zhu\u0101ng zhe z\u01d0 x\u00ec k\u00e0n mi\u00e0n li\u00e0o de y\u00e0ng zi\u3002 t\u0101 b\u00fa yu\u00e0n y\u00ec shu\u014d ch\u016b t\u0101 sh\u00e9n me y\u011b m\u00e9i y\u01d2u k\u00e0n d\u00e0o\u3002",
            "zh\u00e8 y\u00e0ng\uff0c hu\u00e1ng d\u00ec ji\u00f9 z\u00e0i n\u00e0 g\u00e8 f\u00f9 l\u00ec de hu\u00e1 g\u00e0i xi\u00e0 y\u00f3u x\u00edng q\u01d0 l\u00e1i le\u3002 zh\u00e0n z\u00e0i ji\u0113 sh\u00e0ng h\u00e9 chu\u0101ng z\u01d0 l\u01d0 de r\u00e9n d\u014du shu\u014d\uff1a \u201c gu\u0101i gu\u0101i\uff01 hu\u00e1ng shang de x\u012bn zhu\u0101ng zh\u0113n sh\u00ec pi\u00e0o liang\uff01 t\u0101 sh\u00e0ng y\u012b xi\u00e0 mi\u00e0n de h\u00f2u q\u00fan sh\u00ec du\u014d me m\u011bi l\u00ec\uff01 zh\u00e8 ji\u00e0n y\u012b fu zh\u0113n h\u00e9 t\u0101 de sh\u0113n c\u00e1i\uff01 \u201d shu\u00ed y\u011b b\u00fa yu\u00e0n y\u00ec r\u00e0ng r\u00e9n zh\u012b d\u00e0o z\u00ec j\u01d0 sh\u00e9n me y\u011b k\u00e0n b\u00fa ji\u00e0n\uff0c y\u012bn w\u00e8i zh\u00e8 y\u00e0ng ji\u00f9 hu\u00ec xi\u01cen ch\u016b z\u00ec j\u01d0 b\u00f9 ch\u00e8n zh\u00ed\uff0c hu\u00f2 sh\u00ec t\u00e0i y\u00fa ch\u01d4n\u3002 hu\u00e1ng d\u00ec su\u01d2 y\u01d2u de y\u012b fu c\u00f3ng l\u00e1i m\u00e9i y\u01d2u hu\u00f2 d\u00e9 gu\u00f2 zh\u00e8 y\u00e0ng de ch\u0113ng z\u00e0n\u3002",
            "\u201c k\u011b sh\u00ec t\u0101 sh\u00e9n me y\u012b fu y\u011b m\u00e9i y\u01d2u chu\u0101n a\uff01 \u201d y\u00ed g\u00e8 xi\u01ceo h\u00e1i z\u01d0 zu\u00ec h\u00f2u ji\u00e0o le ch\u016b l\u00e1i\u3002 \u201c sh\u00e0ng d\u00ec y\u014d\uff0c n\u01d0 t\u012bng zh\u00e8 ge ti\u0101n zh\u0113n de sh\u0113ng y\u012bn\uff01 \u201d b\u00e0 b\u00e0 shu\u014d\u3002 y\u00fa sh\u00ec d\u00e0 ji\u0101 b\u01ce zh\u00e8 h\u00e1i zi ji\u01ceng de hu\u00e0 s\u012b xi\u00e0 l\u01d0 d\u012b sh\u0113ng d\u00ec chu\u00e1n b\u014d k\u0101i l\u00e1i\u3002",
            "\u201c t\u0101 sh\u00ed z\u00e0i m\u00e9i y\u01d2u chu\u0101n sh\u00e9n me y\u012b fu a\uff01 \u201d zu\u00ec h\u00f2u su\u01d2 y\u01d2u de l\u01ceo b\u01cei x\u00ecng d\u014du shu\u014d\u3002 hu\u00e1ng d\u00ec y\u01d2u di\u01cen er f\u0101 d\u01d2u\uff0c y\u012bn w\u00e8i t\u0101 s\u00ec h\u016b ju\u00e9 de l\u01ceo b\u01cei x\u00ecng men su\u01d2 ji\u01ceng de hu\u00e0 sh\u00ec zh\u0113n de\u3002 b\u00fa gu\u00f2 t\u0101 z\u00ec j\u01d0 x\u012bn l\u01d0 qu\u00e8 zh\u00e8 y\u00e0ng xi\u01ceng\uff1a \u201c w\u01d2 b\u00ec x\u016b b\u01ce zh\u00e8 y\u00f3u x\u00edng d\u00e0 di\u01cen j\u01d4 x\u00edng w\u00e1n b\u00ec\u3002 \u201d y\u012bn c\u01d0 t\u0101 b\u01cei ch\u016b y\u00ed f\u00f9 g\u00e8ng ji\u0101o \u00e0o de sh\u00e9n q\u00ec\u3002 t\u0101 de n\u00e8i ch\u00e9n men g\u0113n z\u00e0i t\u0101 h\u00f2u mi\u00e0n z\u01d2u\uff0c sh\u01d2u zh\u014dng tu\u014d zhe y\u00ec ti\u00e1o b\u00ecng b\u00f9 c\u00fan z\u00e0i de h\u00f2u q\u00fan\u3002"
          ],
          annotations: [
            { id: 1, term: "称职", pinyin: "chènzhí", definition: "能力与所担任的职务相称。", definitionEn: "Competent for one's position." },
            { id: 2, term: "骇人听闻", pinyin: "hàiréntīngwén", definition: "使人听了非常吃惊。", definitionEn: "Shocking, appalling." },
            { id: 3, term: "随声附和", pinyin: "suíshēngfùhè", definition: "别人说什么，自己跟着说什么。", definitionEn: "To echo others' words without thinking." }
          ],
          thinkExplore: [
            { cn: "快速阅读全文，把握故事情节，用自己的话简要复述。", en: "Read quickly, grasp the plot, and briefly retell it in your own words." },
            { cn: "所谓的\u201C新装\u201D根本不存在，但人们都不敢说看不见。一个小孩子最先说出了真相。作者这样写，有什么用意？", en: "The 'new clothes' don't exist, yet nobody dares say so. A child speaks the truth first. What is the author's intent?" }
          ],
          accumExtend: [
            { cn: "说真话需要勇气。如果你当时也在游行现场，会怎样做？", en: "Speaking the truth requires courage. If you were at the parade, what would you do?" }
          ],
          teachingPoints: [
            { cn: "理解童话通过夸张和想象揭示社会现实的手法。", en: "Understand how fairy tales use exaggeration and imagination to reveal social realities." },
            { cn: "分析不同人物面对\u201C新装\u201D时的心理活动。", en: "Analyze characters' psychological activities when facing the 'new clothes.'" }
          ],
          parentTips: [
            { cn: "与孩子讨论\u201C说真话\u201D的重要性。", en: "Discuss the importance of 'telling the truth' with your child." }
          ]
        },
        {
          id: 20,
          title: "天上的街市",
          titleEn: "The Street in the Sky",
          difficulty: 3,
          author: "郭沫若",
          authorEn: "Guo Moruo",
          source: "选自《郭沫若全集·文学编》第一卷（人民文学出版社1982年版）。略有改动。",
          sourceEn: "Selected from Complete Works of Guo Moruo, Literature Vol. 1 (People's Literature Publishing House, 1982). Slightly adapted.",
          vocabWords: [
            {word:'缥缈',pinyin:'piāo miǎo',en:'ethereal; illusory',sentence:'我想那缥缈的空中。',sentenceEn:'I imagine that ethereal sky.'},
            {word:'珍奇',pinyin:'zhēn qí',en:'rare and precious',sentence:'定然是世上没有的珍奇。',sentenceEn:'They must be rare treasures unseen in this world.'},
            {word:'街灯',pinyin:'jiē dēng',en:'street lights',sentence:'远远的街灯明了。',sentenceEn:'The distant street lights are lit.'},
            {word:'明星',pinyin:'míng xīng',en:'bright stars',sentence:'好像闪着无数的明星。',sentenceEn:'Like countless bright stars twinkling.'},
            {word:'闲游',pinyin:'xián yóu',en:'stroll leisurely',sentence:'定然在天街闲游。',sentenceEn:'Surely strolling leisurely on the heavenly street.'}
          ],
          footnotes: [
            {term:"\u7f25\u7f08", termEn:"ethereal; illusory", definition:"\u3010pi\u0101o mi\u01ceo\u3011ethereal; illusory\u3002", definitionEn:"ethereal; illusory"},
            {term:"\u73cd\u5947", termEn:"rare and precious", definition:"\u3010zh\u0113n q\u00ed\u3011rare and precious\u3002", definitionEn:"rare and precious"},
            {term:"\u8857\u706f", termEn:"street lights", definition:"\u3010ji\u0113 d\u0113ng\u3011street lights\u3002", definitionEn:"street lights"},
            {term:"\u660e\u661f", termEn:"bright stars", definition:"\u3010m\u00edng x\u012bng\u3011bright stars\u3002", definitionEn:"bright stars"},
            {term:"\u95f2\u6e38", termEn:"stroll leisurely", definition:"\u3010xi\u00e1n y\u00f3u\u3011stroll leisurely\u3002", definitionEn:"stroll leisurely"}
          ],
          readingTips: [
            {cn:"\u53cd\u590d\u8bf5\u8bfb\uff0c\u4f53\u4f1a\u8bd7\u6b4c\u7684\u97f3\u97f5\u7f8e\u548c\u610f\u5883\u7f8e\u3002\u6ce8\u610f\u5206\u6790\u8bd7\u4e2d\u7684\u610f\u8c61\u548c\u4fee\u8f9e\u624b\u6cd5\u3002", en:"Read aloud repeatedly to appreciate the phonetic beauty and artistic conception. Analyze the imagery and rhetorical devices used."},
            {cn:"\u7ed3\u5408\u8bd7\u4eba\u7684\u751f\u5e73\u548c\u5199\u4f5c\u80cc\u666f\uff0c\u7406\u89e3\u8bd7\u6b4c\u4e2d\u8574\u542b\u7684\u601d\u60f3\u611f\u60c5\u3002", en:"Consider the poet's life and the context of writing to understand the deeper emotions expressed."}
          ],
          grammarPoints: [
            {point:'联想与想象',pointEn:'lián xiǎng yǔ xiǎng xiàng',example:'association and imagination',exampleEn:'远远的街灯明了，好像闪着无数的明星。',explanation:'The distant street lights lit up, like countless bright stars twinkling.',explanationEn:'从街灯联想到星星，从星星想象到天上的街市'}
          ],
          authorBio: {
            cn: "郭沫若（1892—1978），原名郭开贞，四川乐山人，作家、诗人、历史学家、古文字学家。代表作有诗集《女神》《星空》，历史剧《屈原》等。",
            en: "Guo Moruo (1892–1978), original name Guo Kaizhen, from Leshan, Sichuan. Writer, poet, historian, and paleographer. Works include poetry collections The Goddesses and Starry Sky, and the historical drama Qu Yuan."
          },
          isSelfRead: false,
          isPoetry: true,
          preview: [
            { cn: "朗读这首诗，借着诗人的想象，漫游诗中所描绘的世界。", en: "Read this poem aloud and wander through the world it describes via the poet's imagination." },
            { cn: "你知道牛郎织女的故事吗？读完课文，看看诗人的想象与你的有什么不同。", en: "Do you know the Cowherd and Weaver Girl story? After reading, compare the poet's imagination with yours." }
          ],
          text: [
            "\u90ed\u6cab\u82e5\u8fdc\u8fdc\u7684\u8857\u706f\u660e\u4e86\uff0c\u597d\u50cf\u95ea\u7740\u65e0\u6570\u7684\u660e\u661f\u3002\u5929\u4e0a\u7684\u660e\u661f\u73b0\u4e86\uff0c\u597d\u50cf\u70b9\u7740\u65e0\u6570\u7684\u8857\u706f\u3002\u6211\u60f3\u90a3\u7f25\u7f08\u7684\u7a7a\u4e2d\uff0c\u5b9a\u7136\u6709\u7f8e\u4e3d\u7684\u8857\u5e02\u3002\u8857\u5e02\u4e0a\u9648\u5217\u7684\u4e00\u4e9b\u7269\u54c1\uff0c\u5b9a\u7136\u662f\u4e16\u4e0a\u6ca1\u6709\u7684\u73cd\u5947\u3002\u4f60\u770b\uff0c\u90a3\u6d45\u6d45\u7684\u5929\u6cb3\uff0c\u5b9a\u7136\u662f\u4e0d\u751a\u5bbd\u5e7f\u3002\u90a3\u9694\u7740\u6cb3\u7684\u725b\u90ce\u7ec7\u5973\uff0c\u5b9a\u80fd\u591f\u9a91\u7740\u725b\u513f\u6765\u5f80\u3002\u6211\u60f3\u4ed6\u4eec\u6b64\u523b\uff0c\u5b9a\u7136\u5728\u5929\u8857\u95f2\u6e38\u3002\u4e0d\u4fe1\uff0c\u8bf7\u770b\u90a3\u6735\u6d41\u661f\uff0c\u662f\u4ed6\u4eec\u63d0\u7740\u706f\u7b3c\u5728\u8d70\u3002\u8881\u73c2\u5929\u5730\u5f00\u8f9f\u4ee5\u540e\uff0c\u5929\u4e0a\u6709\u4e86\u592a\u9633\u3001\u6708\u4eae\u548c\u661f\u661f\uff0c\u5730\u4e0a\u6709\u4e86\u5c71\u5ddd\u8349\u6728\uff0c\u751a\u81f3\u6709\u4e86\u9e1f\u517d\u866b\u9c7c\u4e86\uff0c\u53ef\u662f\u5355\u5355\u6ca1\u6709\u4eba\u7c7b\u3002\u8fd9\u4e16\u95f4\uff0c\u65e0\u8bba\u600e\u6837\u8bf4\u5427\uff0c\u603b\u4e0d\u514d\u663e\u5f97\u6709\u4e9b\u8352\u51c9\u5bc2\u5bde\u3002\u4e0d\u77e5\u9053\u5728\u4ec0\u4e48\u65f6\u5019\uff0c\u51fa\u73b0\u4e86\u4e00\u4e2a\u795e\u901a\u5e7f\u5927\u7684\u5973\u795e\uff0c\u53eb\u4f5c\u5973\u5a32\u3002\u636e\u8bf4\uff0c\u5979\u4e00\u5929\u5f53\u4e2d\u80fd\u591f\u53d8\u5316\u4e03\u5341\u6b21\u3002\u6709\u4e00\u5929\uff0c\u5927\u795e\u5973\u5a32\u884c\u8d70\u5728\u8fd9\u7247\u83bd\u83bd\u699b\u699b\u7684\u539f\u91ce\u4e0a\uff0c\u770b\u770b\u5468\u56f4\u7684\u666f\u8c61\uff0c\u611f\u5230\u975e\u5e38\u5b64\u72ec\u3002\u5979\u89c9\u5f97\u5728\u8fd9\u5929\u5730\u4e4b\u95f4\uff0c\u5e94\u8be5\u6dfb\u4e00\u70b9\u513f\u4ec0\u4e48\u4e1c\u897f\u8fdb\u53bb\uff0c\u8ba9\u5b83\u751f\u6c14\u84ec\u52c3\u8d77\u6765\u624d\u597d\u3002\u6dfb\u4e00\u70b9\u513f\u4ec0\u4e48\u4e1c\u897f\u8fdb\u53bb\u5462\uff1f\u8d70\u5440\u8d70\u7684\uff0c\u5979\u8d70\u5f97\u6709\u4e9b\u75b2\u5026\u4e86\uff0c\u5076\u7136\u5728\u4e00\u4e2a\u6c60\u5b50\u65c1\u8fb9\u8e72\u4e0b\u6765\u3002\u6f84\u6f88\u7684\u6c60\u6c34\u7167\u89c1\u4e86\u5979\u7684\u9762\u5bb9\u548c\u8eab\u5f71\uff1a\u5979\u7b11\uff0c\u6c60\u6c34\u91cc\u7684\u5f71\u5b50\u4e5f\u5411\u7740\u5979\u7b11\uff1b\u5979\u5047\u88c5\u751f\u6c14\uff0c\u6c60\u6c34\u91cc\u7684\u5f71\u5b50\u4e5f\u5411\u7740\u5979\u751f\u6c14\u3002\u5979\u5ffd\u7136\u7075\u673a\u4e00\u52a8\uff1a\u4e16\u95f4\u5404\u79cd\u5404\u6837\u7684\u751f\u7269\u90fd\u6709\u4e86\uff0c\u5355\u5355\u6ca1\u6709\u50cf\u81ea\u5df1\u4e00\u6837\u7684\u751f\u7269\uff0c\u90a3\u4e3a\u4ec0\u4e48\u4e0d\u521b\u9020\u4e00\u79cd\u50cf\u81ea\u5df1\u7684\u751f\u7269\u6765\u52a0\u5165\u5230\u4e16\u95f4\u5462\uff1f\u60f3\u7740\uff0c\u5979\u5c31\u987a\u624b\u4ece\u6c60\u8fb9\u6398\u8d77\u4e00\u56e2\u9ec4\u6ce5\uff0c\u63ba\u548c\u4e86\u6c34\uff0c\u5728\u624b\u91cc\u63c9\u56e2\u7740\uff0c\u63c9\u56e2\u7740\uff0c\u63c9\u56e2\u6210\u4e86\u7b2c\u4e00\u4e2a\u5a03\u5a03\u6837\u7684\u5c0f\u4e1c\u897f\u3002\u5979\u628a\u8fd9\u4e2a\u5c0f\u4e1c\u897f\u653e\u5230\u5730\u9762\u4e0a\u3002\u8bf4\u4e5f\u5947\u602a\uff0c\u8fd9\u4e2a\u6ce5\u634f\u7684\u5c0f\u5bb6\u4f19\uff0c\u521a\u4e00\u63a5\u89e6\u5230\u5730\u9762\uff0c\u9a6c\u4e0a\u5c31\u6d3b\u4e86\u8d77\u6765\uff0c\u5e76\u4e14\u4e00\u5f00\u53e3\u5c31\u558a\uff1a",
            "\u201c\u5988\u5988\uff01\u201d\u63a5\u7740\u4e00\u9635\u5174\u9ad8\u91c7\u70c8\u7684\u8df3\u8dc3\u548c\u6b22\u547c\uff0c\u8868\u793a\u4ed6\u83b7\u5f97\u751f\u547d\u7684\u6b22\u4e50\u3002\u5973\u5a32\u770b\u7740\u5979\u4eb2\u624b\u521b\u9020\u7684\u8fd9\u4e2a\u806a\u660e\u7f8e\u4e3d\u7684\u751f\u7269\uff0c\u53c8\u542c\u89c1\u201c\u5988\u5988\u201d\u7684\u558a\u58f0\uff0c\u4e0d\u7531\u5f97\u6ee1\u5fc3\u6b22\u559c\uff0c\u7709\u5f00\u773c\u7b11\u3002\u5979\u7ed9\u5979\u5fc3\u7231\u7684\u5b69\u5b50\u53d6\u4e86\u4e00\u4e2a\u540d\u5b57\uff0c\u53eb\u4f5c\u201c\u4eba\u201d\u3002\u4eba\u7684\u8eab\u4f53\u867d\u7136\u5c0f\uff0c\u4f46\u636e\u8bf4\u56e0\u4e3a\u662f\u795e\u521b\u9020\u7684\uff0c\u76f8\u8c8c\u548c\u4e3e\u52a8\u4e5f\u6709\u4e9b\u50cf\u795e\uff0c\u548c\u98de\u7684\u9e1f\u3001\u722c\u7684\u517d\u90fd\u4e0d\u76f8\u540c\uff0c\u770b\u8d77\u6765\u4f3c\u4e4e\u4fbf\u6709\u4e00\u79cd\u7ba1\u7406\u5b87\u5b99\u7684\u975e\u51e1\u7684\u6c14\u6982\u3002\u5973\u5a32\u5bf9\u4e8e\u5979\u8fd9\u4f18\u7f8e\u7684\u4f5c\u54c1\uff0c\u611f\u5230\u5f88\u6ee1\u610f\u3002\u4e8e\u662f\uff0c\u5979\u53c8\u7ee7\u7eed\u52a8\u624b\u505a\u5979\u7684\u5de5\u4f5c\uff0c\u5979\u7528\u9ec4\u6ce5\u505a\u4e86\u8bb8\u591a\u80fd\u8bf4\u4f1a\u8d70\u7684\u53ef\u7231\u7684\u5c0f\u4eba\u513f\u3002\u8fd9\u4e9b\u5c0f\u4eba\u513f\u5728\u5979\u7684\u5468\u56f4\u8df3\u8dc3\u6b22\u547c\uff0c\u4f7f\u5979\u7cbe\u795e\u4e0a\u6709\u8bf4\u4e0d\u51fa\u7684\u9ad8\u5174\u548c\u5b89\u6170\u3002\u4ece\u6b64\uff0c\u5979\u518d\u4e5f\u4e0d\u611f\u89c9\u5230\u5b64\u72ec\u3001\u5bc2\u5bde\u4e86\u3002\u5979\u5de5\u4f5c\u7740\uff0c\u5de5\u4f5c\u7740\uff0c\u4e00\u76f4\u5de5\u4f5c\u5230\u665a\u971e\u5e03\u6ee1\u5929\u7a7a\uff0c\u661f\u661f\u548c\u6708\u4eae\u5c04\u51fa\u5e7d\u5149\u3002\u591c\u6df1\u4e86\uff0c\u5979\u53ea\u628a\u5934\u6795\u5728\u5c71\u5d16\u4e0a\uff0c\u7565\u7761\u4e00\u7761\u3002\u7b2c\u4e8c\u5929\uff0c\u5929\u521a\u5fae\u660e\uff0c\u5979\u53c8\u8d76\u7d27\u8d77\u6765\u7ee7\u7eed\u5de5\u4f5c\u3002\u5979\u4e00\u5fc3\u60f3\u628a\u8fd9\u4e9b\u7075\u654f\u7684\u5c0f\u751f\u7269\u5e03\u6ee1\u5927\u5730\u3002\u4f46\u662f\uff0c\u5927\u5730\u6bd5\u7adf\u592a\u5927\u4e86\uff0c\u5979\u5de5\u4f5c\u4e86\u8bb8\u4e45\uff0c\u8fd8\u6ca1\u6709\u8fbe\u5230\u5979\u7684\u5fd7\u613f\uff0c\u800c\u5979\u672c\u4eba\u5df2\u7ecf\u75b2\u5026\u4e0d\u582a\u4e86\u3002\u6700\u540e\uff0c\u5979\u60f3\u51fa\u4e86\u4e00\u4e2a\u7edd\u5999\u7684\u521b\u9020\u4eba\u7c7b\u7684\u65b9\u6cd5\u3002\u5979\u4ece\u5d16\u58c1\u4e0a\u62c9\u4e0b\u4e00\u6761\u67af\u85e4\uff0c\u4f38\u5165\u4e00\u4e2a\u6ce5\u6f6d\u91cc\uff0c\u6405\u6df7\u4e86\u6d51\u9ec4\u7684\u6ce5\u6d46\uff0c\u5411\u5730\u9762\u4e0a\u8fd9\u4e48\u4e00\u6325\u6d12\uff0c\u6ce5\u70b9\u513f\u6e85\u843d\u7684\u5730\u65b9\uff0c\u5c31\u51fa\u73b0\u4e86\u8bb8\u591a\u5c0f\u5c0f\u7684\u53eb\u7740\u8df3\u7740\u7684\u4eba\u513f\uff0c\u548c\u5148\u524d\u7528\u9ec4\u6ce5\u634f\u6210\u7684\u5c0f\u4eba\u513f\u4e00\u822c\u65e0\u4e8c\u3002\u201c\u5988\u5988\uff0c\u5988\u5988\u201d\u7684\u558a\u58f0\uff0c\u9707\u54cd\u5728\u5468\u56f4\u3002\u7528\u8fd9\u79cd\u65b9\u6cd5\u6765\u8fdb\u884c\u5de5\u4f5c\uff0c\u679c\u7136\u7b80\u5355\u7701\u4e8b\u3002\u85e4\u6761\u4e00\u6325\uff0c\u5c31\u6709\u597d\u4e9b\u6d3b\u7684\u4eba\u51fa\u73b0\uff0c\u5927\u5730\u4e0a\u4e0d\u4e45\u5c31\u5e03\u6ee1\u4e86\u4eba\u7c7b\u7684\u8e2a\u8ff9\u3002\u5927\u5730\u4e0a\u867d\u7136\u6709\u4e86\u4eba\u7c7b\uff0c\u5973\u5a32\u7684\u5de5\u4f5c\u5374\u8fd8\u6ca1\u6709\u7ec8\u6b62\u3002\u5979\u53c8\u8003\u8651\u7740\uff1a\u4eba\u603b\u662f\u8981\u6b7b\u4ea1\u7684\uff0c\u6b7b\u4ea1\u4e86\u4e00",
            "\u6279\u518d\u521b\u9020\u4e00\u6279\u5417\uff1f\u672a\u514d\u592a\u9ebb\u70e6\u4e86\u3002\u600e\u6837\u80fd\u4f7f\u4ed6\u4eec\u7ee7\u7eed\u751f\u5b58\u4e0b\u53bb\u5462\uff1f\u8fd9\u5374\u662f\u4e00\u4e2a\u96be\u9898\u3002\u540e\u6765\u5979\u7ec8\u4e8e\u60f3\u51fa\u4e86\u4e00\u4e2a\u529e\u6cd5\uff0c\u5c31\u662f\u628a\u90a3\u4e9b\u5c0f\u4eba\u513f\u5206\u4e3a\u7537\u5973\uff0c\u8ba9\u7537\u4eba\u548c\u5973\u4eba\u914d\u5408\u8d77\u6765\uff0c\u53eb\u4ed6\u4eec\u81ea\u5df1\u53bb\u521b\u9020\u540e\u4ee3\uff0c\u62c5\u8d1f\u8d77\u517b\u80b2\u5a74\u513f\u7684\u8d23\u4efb\u3002\u8fd9\u6837\uff0c\u4eba\u7c7b\u5c31\u4e16\u4e16\u4ee3\u4ee3\u7ef5\u5ef6\u4e0b\u6765\uff0c\u5e76\u4e14\u4e00\u5929\u6bd4\u4e00\u5929\u52a0\u591a\u4e86\u3002\u300a\u4f0a\u7d22\u5bd3\u8a00\u300b\u8d6b\u8033\u58a8\u65af\u60f3\u77e5\u9053\u4ed6\u5728\u4eba\u95f4\u53d7\u5230\u591a\u5927\u7684\u5c0a\u91cd\uff0c\u5c31\u5316\u4f5c\u51e1\u4eba\uff0c\u6765\u5230\u4e00\u4e2a\u96d5\u50cf\u8005\u7684\u5e97\u91cc\u3002\u4ed6\u770b\u89c1\u5b99\u65af\u7684\u96d5\u50cf\uff0c\u95ee\u9053\uff1a\u201c\u503c\u591a\u5c11\u94b1\uff1f\u201d\u96d5\u50cf\u8005\u8bf4\uff1a\u201c\u4e00\u4e2a\u94f6\u5143\u3002\u201d\u8d6b\u8033\u58a8\u65af\u53c8\u7b11\u7740\u95ee\u9053\uff1a\u201c\u8d6b\u62c9\u7684\u96d5\u50cf\u503c\u591a\u5c11\u94b1\uff1f\u201d\u96d5\u50cf\u8005\u8bf4\uff1a\u201c\u8fd8\u8981\u8d35\u4e00\u70b9\u513f\u3002\u201d\u540e\u6765\uff0c\u8d6b\u8033\u58a8\u65af\u770b\u89c1\u81ea\u5df1\u7684\u96d5\u50cf\uff0c\u5fc3\u60f3\u4ed6\u8eab\u4e3a\u795e\u4f7f\uff0c\u53c8\u662f\u5546\u4eba\u7684\u5e87\u62a4\u795e\uff0c\u4eba\u4eec\u5bf9\u4ed6\u4f1a\u66f4\u5c0a\u91cd\u4e9b\uff0c\u4e8e\u662f\u95ee\u9053\uff1a\u201c\u8fd9\u4e2a\u503c\u591a\u5c11\u94b1\uff1f\u201d\u96d5\u50cf\u8005\u56de\u7b54\u8bf4\uff1a\u201c\u5047\u5982\u4f60\u4e70\u4e86\u90a3\u4e24\u4e2a\uff0c\u8fd9\u4e2a\u7b97\u6dfb\u5934\uff0c\u767d\u9001\u3002\u201d\u8fd9\u6545\u4e8b\u9002\u7528\u4e8e\u90a3\u4e9b\u7231\u6155\u865a\u8363\u800c\u4e0d\u88ab\u4eba\u91cd\u89c6\u7684\u4eba\u3002",
            "\u300a\u4f0a\u7d22\u5bd3\u8a00\u300b\u868a\u5b50\u98de\u5230\u72ee\u5b50\u9762\u524d\uff0c\u5bf9\u4ed6\u8bf4\uff1a\u201c\u6211\u4e0d\u6015\u4f60\uff0c\u4f60\u5e76\u4e0d\u6bd4\u6211\u5f3a\u3002\u82e5\u8bf4\u4e0d\u662f\u8fd9\u6837\uff0c\u4f60\u5230\u5e95\u6709\u4ec0\u4e48\u529b\u91cf\u5462\uff1f\u662f\u7528\u722a\u5b50\u6293\uff0c\u7259\u9f7f\u54ac\u5417\uff1f\u5973\u4eba\u540c\u7537\u4eba\u6253\u67b6\uff0c\u4e5f\u4f1a\u8fd9\u4e48\u5e72\u3002\u6211\u6bd4\u4f60\u5f3a\u5f97\u591a\u3002\u4f60\u8981\u662f\u613f\u610f\uff0c\u6211\u4eec\u6765\u8f83\u91cf\u8f83\u91cf\u5427\uff01\u201d\u868a\u5b50\u5439\u7740\u5587\u53ed\u51b2\u8fc7\u53bb\uff0c\u4e13\u54ac\u72ee\u5b50\u9f3b\u5b50\u5468\u56f4\u6ca1\u6709\u6bdb\u7684\u5730\u65b9\u3002\u72ee\u5b50\u6c14\u5f97\u7528\u722a\u5b50\u628a\u81ea\u5df1\u7684\u8138\u90fd\u6293\u7834\u4e86\u3002\u868a\u5b50\u6218\u80dc\u4e86\u72ee\u5b50\uff0c\u53c8\u5439\u8d77\u5587\u53ed\uff0c\u5531\u7740\u51ef\u6b4c\u98de\u8d70\uff0c\u5374\u88ab\u8718\u86db\u7f51\u7c98\u4f4f\u4e86\u3002\u868a\u5b50\u5c06\u8981\u88ab\u5403\u6389\u65f6\uff0c\u53f9\u606f\u8bf4\uff0c\u81ea\u5df1\u540c\u6700\u5f3a\u5927\u7684\u52a8\u7269\u90fd\u8f83\u91cf\u8fc7\uff0c\u4e0d\u6599\u88ab\u8fd9\u5c0f\u5c0f\u7684\u8718\u86db\u6d88\u706d\u4e86\u3002\u8fd9\u6545\u4e8b\u9002\u7528\u4e8e\u90a3\u4e9b\u6253\u8d25\u8fc7\u5927\u4eba\u7269\uff0c\u5374\u88ab\u5c0f\u4eba\u7269\u6253\u8d25\u7684\u4eba\u3002\u300a\u5415\u6c0f\u6625\u79cb\u300b\u5b8b\u4e4b\u4e01\u6c0f\uff0c\u5bb6\u65e0\u4e95\u800c\u51fa\u6e89\u6c72\uff0c\u5e38\u4e00\u4eba\u5c45\u5916\u3002\u53ca\u5176\u5bb6\u7a7f\u4e95\uff0c\u544a\u4eba\u66f0\uff1a\u201c\u543e\u7a7f\u4e95\u5f97\u4e00\u4eba\u3002\u201d\u6709\u95fb\u800c\u4f20\u4e4b\u8005\uff1a\u201c\u4e01\u6c0f\u7a7f\u4e95\u5f97\u4e00\u4eba\u3002\u201d\u56fd\u4eba\u9053\u4e4b\uff0c\u95fb\u4e4b\u4e8e\u5b8b\u541b\u3002\u5b8b\u541b\u4ee4\u4eba\u95ee\u4e4b\u4e8e\u4e01\u6c0f\uff0c\u4e01\u6c0f\u5bf9\u66f0\uff1a\u201c\u5f97\u4e00\u4eba\u4e4b\u4f7f\uff0c\u975e\u5f97\u4e00\u4eba\u4e8e\u4e95\u4e2d\u4e5f\u3002\u201d\u6c42\u95fb\u4e4b\u82e5\u6b64\uff0c\u4e0d\u82e5\u65e0\u95fb\u4e5f\u3002\u300a\u5217\u5b50\u300b\u675e\u56fd\u6709\u4eba\u5fe7\u5929\u5730\u5d29\u5760\uff0c\u8eab\u4ea1\u6240\u5bc4\uff0c\u5e9f\u5bdd\u98df\u8005\u3002\u53c8\u6709\u5fe7\u5f7c\u4e4b\u6240\u5fe7\u8005\uff0c\u56e0\u5f80\u6653\u4e4b\uff0c\u66f0\uff1a\u201c\u5929\uff0c\u79ef\u6c14\u8033\uff0c\u4ea1\u5904\u4ea1\u6c14\u3002\u82e5\u5c48\u4f38\u547c\u5438\uff0c\u7ec8\u65e5\u5728\u5929\u4e2d\u884c\u6b62\uff0c\u5948\u4f55\u5fe7\u5d29\u5760\u4e4e\uff1f\u201d\u5176\u4eba\u66f0\uff1a\u201c\u5929\u679c\u79ef\u6c14\uff0c\u65e5\u6708\u661f\u5bbf\uff0c\u4e0d\u5f53\u5760\u8036\uff1f\u201d\u6653\u4e4b\u8005\u66f0\uff1a\u201c\u65e5\u6708\u661f\u5bbf\uff0c\u4ea6\u79ef\u6c14\u4e2d\u4e4b\u6709\u5149\u8000\u8005\uff0c\u53ea\u4f7f\u5760\uff0c\u4ea6\u4e0d\u80fd\u6709\u6240\u4e2d\u4f24\u3002\u201d\u5176\u4eba\u66f0\uff1a\u201c\u5948\u5730\u574f\u4f55\uff1f\u201d\u6653\u4e4b\u8005\u66f0\uff1a\u201c\u5730\uff0c\u79ef\u5757\u8033\uff0c\u5145\u585e\u56db\u865a\uff0c\u4ea1\u5904\u4ea1\u5757\u3002\u82e5\u8e87\u6b65\u8dd0\u8e48\uff0c\u7ec8\u65e5\u5728\u5730\u4e0a\u884c\u6b62\uff0c\u5948\u4f55\u5fe7\u5176\u574f\uff1f\u201d\u5176\u4eba\u820d\u7136\u5927\u559c\uff0c\u6653\u4e4b\u8005\u4ea6\u820d\u7136\u5927\u559c\u3002"
          ],
          textEn: [
        "Guo Moruo\nFar away, the streetlights have lit up, as if countless bright stars are shining. The bright stars in the sky have appeared, as if countless streetlights have been lit. I imagine that in the misty sky above, there must be beautiful streets. The goods displayed in those streets must be rare treasures unseen in this world. Look -- that shallow Milky Way must not be very wide at all. The Cowherd and Weaving Maid, separated by the river, must surely be able to ride their ox back and forth to visit each other. I imagine that at this very moment, they must be strolling leisurely along the heavenly street. If you don't believe me, just look at that shooting star -- it is their lantern as they walk.\nYuan Ke\nAfter heaven and earth were separated, the sky had the sun, moon, and stars, and the land had mountains, rivers, grass, and trees, and even birds, beasts, insects, and fish -- but there were simply no human beings. This world, no matter how you looked at it, could not help but seem somewhat desolate and lonely. Nobody knows exactly when, but there appeared an extraordinarily powerful goddess called Nuwa. It was said that she could transform herself seventy times in a single day. One day, the great goddess Nuwa was walking across this vast, wild, overgrown wilderness. Looking at the scenery around her, she felt extremely lonely. She felt that something ought to be added to this space between heaven and earth, something to bring it to life. But what should she add? She walked and walked until she grew somewhat tired, and happened to crouch down beside a pond. The clear water of the pond reflected her face and figure: she smiled, and the reflection in the water smiled back at her; she pretended to be angry, and the reflection in the water looked angry too. A flash of inspiration struck her: the world already had all kinds of living creatures, but none that looked like her -- so why not create a being in her own likeness to join the world? With this thought, she scooped up a lump of yellow clay from the edge of the pond, mixed it with water, and kneaded it in her hands, kneading and kneading until she had shaped a little figure that looked like a baby. She set this little thing down on the ground. Strangely enough, this little clay creature, the moment it touched the ground, immediately came to life and opened its mouth to cry out:",
        "\"Mama!\" Then came a burst of jubilant leaping and cheering, expressing its joy at having received life. Nuwa looked at this clever, beautiful creature she had made with her own hands, and hearing the cry of \"Mama,\" she was filled with delight and her face broke into a beaming smile. She gave her beloved child a name, calling it \"human.\" A human's body may be small, but it was said that because humans were created by a goddess, their appearance and movements somewhat resembled those of a god, quite different from the birds that fly and the beasts that crawl. They seemed to possess a certain extraordinary bearing, as if meant to govern the universe. Nuwa was very pleased with her fine creation. So she continued her work, using yellow clay to make many more lovable little people who could speak and walk. These little people leaped and cheered around her, bringing her indescribable joy and comfort. From then on, she never felt lonely or desolate again. She worked and worked, working on until the evening glow filled the sky and the stars and moon shone with their gentle light. When night grew deep, she simply rested her head against a cliff and slept briefly. The next day, at the first light of dawn, she hurried to resume her work. She was determined to fill the whole earth with these nimble little creatures. But the earth was simply too vast. She had worked for a long time yet still had not fulfilled her wish, and she herself was utterly exhausted. Finally, she thought of an ingenious method for creating humans. She pulled a trailing vine from a cliff face, dipped it into a muddy pool, stirred up the murky yellow mud, and flung it across the ground. Wherever the drops of mud splattered, there appeared many tiny people, jumping and shouting, exactly the same as the little people she had molded from yellow clay before. Cries of \"Mama! Mama!\" resounded all around. Working by this method was indeed simpler and more efficient. With each flick of the vine, a whole batch of living people appeared, and before long the earth was covered with the traces of humankind. Though the earth now had humans, Nuwa's work was not yet finished. She pondered further: people will always die eventually -- should she create a new batch every time a batch dies off?",
        "That would be far too troublesome. How could she enable them to continue surviving on their own? This was a difficult problem. In the end, she finally thought of a solution: she divided the little people into male and female, paired men and women together, and let them create their own offspring and take on the responsibility of raising their children. In this way, the human race continued generation after generation, growing more numerous with each passing day.\nAesop's Fables -- Hermes and the Sculptor\nHermes wanted to know how much respect he enjoyed among mortals, so he disguised himself as a man and went into a sculptor's shop. He saw a statue of Zeus and asked, \"How much is it?\" The sculptor said, \"One silver coin.\" Hermes laughed and asked, \"How much is the statue of Hera worth?\" The sculptor said, \"A bit more than that.\" Then Hermes noticed his own statue, and thinking that since he was the messenger of the gods and the patron of merchants, people would surely respect him even more, he asked, \"How much is this one worth?\" The sculptor replied, \"Well, if you buy those other two, I will throw this one in for free.\" This fable applies to those who are vain and full of self-importance but are not valued by others.",
        "Aesop's Fables -- The Mosquito and the Lion\nA mosquito flew up to a lion and said to him, \"I am not afraid of you. You are no stronger than I am. If you doubt it, what power do you really have? You scratch with your claws and bite with your teeth? A woman fighting a man does the same thing. I am far stronger than you. If you like, let us fight it out!\" The mosquito sounded its trumpet and charged, biting the lion right on the bare skin around his nose. The lion was so furious that he scratched his own face to pieces with his claws. The mosquito, having defeated the lion, sounded its trumpet again and flew off singing a victory song -- only to get caught in a spider's web. As the mosquito was about to be devoured, it sighed that it had fought against the mightiest of animals, only to be destroyed by this tiny spider. This fable applies to those who have defeated great adversaries only to be brought down by insignificant ones.\nLushi Chunqiu -- Getting a Man by Digging a Well\nThere was a family named Ding in the state of Song who had no well, so they had to send someone out to fetch water for irrigation, requiring one person to always be away from home. When the family finally dug a well, they told people, \"By digging a well, we have gained one person.\" Someone who heard this passed it along, saying, \"The Ding family dug a well and found a person inside it.\" People throughout the state repeated this story until it reached the ears of the Duke of Song. The Duke sent someone to ask the Ding family about it. Mr. Ding replied, \"What we meant was that we gained the labor of one person -- not that we found a person in the well.\" If one seeks hearsay like this, it would be better not to have heard it at all.\nLiezi -- The Man of Qi Who Worried About the Sky\nIn the state of Qi, there was a man who worried that the sky and earth would collapse, leaving him nowhere to live, and he could neither sleep nor eat. Another man who worried about the first man's worrying went to enlighten him, saying, \"The sky is nothing but an accumulation of air. There is nowhere that is without air. When you bend and stretch, breathe in and breathe out, you are moving about within the sky all day long -- why worry about it collapsing?\" The man said, \"If the sky is indeed just accumulated air, then would the sun, moon, and stars not fall down?\" The one who was enlightening him said, \"The sun, moon, and stars are merely bright objects within that accumulated air. Even if they were to fall, they could not strike or harm anyone.\" The man said, \"But what if the earth crumbles?\" The one who was enlightening him said, \"The earth is nothing but an accumulation of solid matter, filling up all four directions. There is nowhere without solid matter. You stamp and tread upon it, moving about on the earth all day long -- why worry about it crumbling?\" The man was greatly relieved and overjoyed, and the one who had enlightened him was also greatly relieved and overjoyed."
      ],
          textPinyin: [
            "gu\u014d m\u00f2 ru\u00f2 yu\u01cen yu\u01cen de ji\u0113 d\u0113ng m\u00edng le\uff0c h\u01ceo xi\u00e0ng sh\u01cen zhe w\u00fa sh\u00f9 de m\u00edng x\u012bng\u3002 ti\u0101n sh\u00e0ng de m\u00edng x\u012bng xi\u00e0n le\uff0c h\u01ceo xi\u00e0ng di\u01cen zhe w\u00fa sh\u00f9 de ji\u0113 d\u0113ng\u3002 w\u01d2 xi\u01ceng n\u00e0 pi\u0101o mi\u01ceo de k\u014dng zh\u014dng\uff0c d\u00ecng r\u00e1n y\u01d2u m\u011bi l\u00ec de ji\u0113 sh\u00ec\u3002 ji\u0113 sh\u00ec sh\u00e0ng ch\u00e9n li\u00e8 de y\u00ec xi\u0113 w\u00f9 p\u01d0n\uff0c d\u00ecng r\u00e1n sh\u00ec sh\u00ec sh\u00e0ng m\u00e9i y\u01d2u de zh\u0113n q\u00ed\u3002 n\u01d0 k\u00e0n\uff0c n\u00e0 qi\u01cen qi\u01cen de ti\u0101n h\u00e9\uff0c d\u00ecng r\u00e1n sh\u00ec b\u00fa sh\u00e8n ku\u0101n gu\u01ceng\u3002 n\u00e0 g\u00e9 zhe h\u00e9 de ni\u00fa l\u00e1ng zh\u012b n\u01da\uff0c d\u00ecng n\u00e9ng g\u00f2u q\u00ed zhe ni\u00fa \u00e9r l\u00e1i w\u01ceng\u3002 w\u01d2 xi\u01ceng t\u0101 men c\u01d0 k\u00e8\uff0c d\u00ecng r\u00e1n z\u00e0i ti\u0101n ji\u0113 xi\u00e1n y\u00f3u\u3002 b\u00fa x\u00ecn\uff0c q\u01d0ng k\u00e0n n\u00e0 du\u01d2 li\u00fa x\u012bng\uff0c sh\u00ec t\u0101 men t\u00ed zhe d\u0113ng long z\u00e0i z\u01d2u\u3002 yu\u00e1n k\u0113 ti\u0101n d\u00ec k\u0101i p\u00ec y\u01d0 h\u00f2u\uff0c ti\u0101n sh\u00e0ng y\u01d2u le t\u00e0i y\u00e1ng\u3001 yu\u00e8 li\u00e0ng h\u00e9 x\u012bng x\u012bng\uff0c d\u00ec sh\u00e0ng y\u01d2u le sh\u0101n chu\u0101n c\u01ceo m\u00f9\uff0c sh\u00e8n zh\u00ec y\u01d2u le ni\u01ceo sh\u00f2u ch\u00f3ng y\u00fa le\uff0c k\u011b sh\u00ec d\u0101n d\u0101n m\u00e9i y\u01d2u r\u00e9n l\u00e8i\u3002 zh\u00e8 sh\u00ec ji\u0101n\uff0c w\u00fa l\u00f9n z\u011bn y\u00e0ng shu\u014d ba\uff0c z\u01d2ng b\u00f9 mi\u01cen xi\u01cen de y\u01d2u xi\u0113 hu\u0101ng li\u00e1ng j\u00ec m\u00f2\u3002 b\u00f9 zh\u012b d\u00e0o z\u00e0i sh\u00e9n me sh\u00ed h\u00f2u\uff0c ch\u016b xi\u00e0n le y\u00ed g\u00e8 sh\u00e9n t\u014dng gu\u01ceng d\u00e0 de n\u01da sh\u00e9n\uff0c ji\u00e0o zu\u00f2 n\u01da w\u0101\u3002 j\u00f9 shu\u014d\uff0c t\u0101 y\u00ec ti\u0101n d\u0101ng zh\u014dng n\u00e9ng g\u00f2u bi\u00e0n hu\u00e0 q\u012b sh\u00ed c\u00ec\u3002 y\u01d2u y\u00ec ti\u0101n\uff0c d\u00e0 sh\u00e9n n\u01da w\u0101 x\u00edng z\u01d2u z\u00e0i zh\u00e8 pi\u00e0n m\u01ceng m\u01ceng zh\u0113n zh\u0113n de yu\u00e1n y\u011b sh\u00e0ng\uff0c k\u00e0n k\u00e0n zh\u014du w\u00e9i de j\u01d0ng xi\u00e0ng\uff0c g\u01cen d\u00e0o f\u0113i ch\u00e1ng g\u016b d\u00fa\u3002 t\u0101 ju\u00e9 de z\u00e0i zh\u00e8 ti\u0101n d\u00ec zh\u012b ji\u0101n\uff0c y\u00ecng g\u0101i ti\u0101n y\u00ec di\u01cen \u00e9r sh\u00e9n me d\u014dng x\u012b j\u00ecn q\u00f9\uff0c r\u00e0ng t\u0101 sh\u0113ng q\u00ec p\u00e9ng b\u00f3 q\u01d0 l\u00e1i c\u00e1i h\u01ceo\u3002 ti\u0101n y\u00ec di\u01cen \u00e9r sh\u00e9n me d\u014dng x\u012b j\u00ecn q\u00f9 ne\uff1f z\u01d2u ya z\u01d2u de\uff0c t\u0101 z\u01d2u d\u00e9 y\u01d2u xi\u0113 p\u00ed ju\u00e0n le\uff0c \u01d2u r\u00e1n z\u00e0i y\u00ed g\u00e8 ch\u00ed z\u01d0 p\u00e1ng bi\u0101n d\u016bn xi\u00e0 l\u00e1i\u3002 ch\u00e9ng ch\u00e8 de ch\u00ed shu\u01d0 zh\u00e0o ji\u00e0n le t\u0101 de mi\u00e0n r\u00f3ng h\u00e9 sh\u0113n y\u01d0ng\uff1a t\u0101 xi\u00e0o\uff0c ch\u00ed shu\u01d0 l\u01d0 de y\u01d0ng zi y\u011b xi\u00e0ng zhe t\u0101 xi\u00e0o\uff1b t\u0101 ji\u01ce zhu\u0101ng sh\u0113ng q\u00ec\uff0c ch\u00ed shu\u01d0 l\u01d0 de y\u01d0ng zi y\u011b xi\u00e0ng zhe t\u0101 sh\u0113ng q\u00ec\u3002 t\u0101 h\u016b r\u00e1n l\u00edng j\u012b y\u00ed d\u00f2ng\uff1a sh\u00ec ji\u0101n g\u00e8 zh\u01d2ng g\u00e8 y\u00e0ng de sh\u0113ng w\u00f9 d\u014du y\u01d2u le\uff0c d\u0101n d\u0101n m\u00e9i y\u01d2u xi\u00e0ng z\u00ec j\u01d0 y\u00ed y\u00e0ng de sh\u0113ng w\u00f9\uff0c n\u00e0 w\u00e8i sh\u00e9n me b\u00fa chu\u00e0ng z\u00e0o y\u00ec zh\u01d2ng xi\u00e0ng z\u00ec j\u01d0 de sh\u0113ng w\u00f9 l\u00e1i ji\u0101 r\u00f9 d\u00e0o sh\u00ec ji\u0101n ne\uff1f xi\u01ceng zhe\uff0c t\u0101 ji\u00f9 sh\u00f9n sh\u01d2u c\u00f3ng ch\u00ed bi\u0101n ju\u00e9 q\u01d0 y\u00ec tu\u00e1n hu\u00e1ng n\u00ed\uff0c ch\u0101n huo le shu\u01d0\uff0c z\u00e0i sh\u01d2u l\u01d0 r\u00f3u tu\u00e1n zhe\uff0c r\u00f3u tu\u00e1n zhe\uff0c r\u00f3u tu\u00e1n ch\u00e9ng le d\u00ec y\u012b g\u00e8 w\u00e1 wa y\u00e0ng de xi\u01ceo d\u014dng x\u012b\u3002 t\u0101 b\u01ce zh\u00e8 ge xi\u01ceo d\u014dng x\u012b f\u00e0ng d\u00e0o d\u00ec mi\u00e0n sh\u00e0ng\u3002 shu\u014d y\u011b q\u00ed gu\u00e0i\uff0c zh\u00e8 ge n\u00ed ni\u0113 de xi\u01ceo ji\u0101 huo\uff0c g\u0101ng y\u00ec ji\u0113 ch\u00f9 d\u00e0o d\u00ec mi\u00e0n\uff0c m\u01ce sh\u00e0ng ji\u00f9 hu\u00f3 le q\u01d0 l\u00e1i\uff0c b\u00ecng qi\u011b y\u00ec k\u0101i k\u01d2u ji\u00f9 h\u01cen\uff1a",
            "\u201c m\u0101 ma\uff01 \u201d ji\u0113 zhe y\u00ed zh\u00e8n x\u00ecng g\u0101o c\u01cei li\u00e8 de ti\u00e0o yu\u00e8 h\u00e9 hu\u0101n h\u016b\uff0c bi\u01ceo sh\u00ec t\u0101 hu\u00f2 d\u00e9 sh\u0113ng m\u00ecng de hu\u0101n l\u00e8\u3002 n\u01da w\u0101 k\u00e0n zhe t\u0101 q\u012bn sh\u01d2u chu\u00e0ng z\u00e0o de zh\u00e8 ge c\u014dng ming m\u011bi l\u00ec de sh\u0113ng w\u00f9\uff0c y\u00f2u t\u012bng ji\u00e0n \u201c m\u0101 m\u0101 \u201d de h\u01cen sh\u0113ng\uff0c b\u00f9 y\u00f3u d\u00e9 m\u01cen x\u012bn hu\u0101n x\u01d0\uff0c m\u00e9i k\u0101i y\u01cen xi\u00e0o\u3002 t\u0101 g\u011bi t\u0101 x\u012bn \u00e0i de h\u00e1i zi q\u01d4 le y\u00ed g\u00e8 m\u00edng z\u00ec\uff0c ji\u00e0o zu\u00f2 \u201c r\u00e9n \u201d\u3002 r\u00e9n de sh\u0113n t\u01d0 su\u012b r\u00e1n xi\u01ceo\uff0c d\u00e0n j\u00f9 shu\u014d y\u012bn w\u00e8i sh\u00ec sh\u00e9n chu\u00e0ng z\u00e0o de\uff0c xi\u00e0ng m\u00e0o h\u00e9 j\u01d4 d\u00f2ng y\u011b y\u01d2u xi\u0113 xi\u00e0ng sh\u00e9n\uff0c h\u00e9 f\u0113i de ni\u01ceo\u3001 p\u00e1 de sh\u00f2u d\u014du b\u00f9 xi\u0101ng t\u00f3ng\uff0c k\u00e0n q\u01d0 l\u00e1i s\u00ec h\u016b bi\u00e0n y\u01d2u y\u00ec zh\u01d2ng gu\u01cen l\u01d0 y\u01d4 zh\u00f2u de f\u0113i f\u00e1n de q\u00ec g\u00e0i\u3002 n\u01da w\u0101 du\u00ec y\u00fa t\u0101 zh\u00e8 y\u014du m\u011bi de zu\u00f2 p\u01d0n\uff0c g\u01cen d\u00e0o h\u011bn m\u01cen y\u00ec\u3002 y\u00fa sh\u00ec\uff0c t\u0101 y\u00f2u j\u00ec x\u00f9 d\u00f2ng sh\u01d2u zu\u00f2 t\u0101 de g\u014dng zu\u00f2\uff0c t\u0101 y\u00f2ng hu\u00e1ng n\u00ed zu\u00f2 le x\u01d4 du\u014d n\u00e9ng shu\u014d hu\u00ec z\u01d2u de k\u011b \u00e0i de xi\u01ceo r\u00e9n \u00e9r\u3002 zh\u00e8 xi\u0113 xi\u01ceo r\u00e9n \u00e9r z\u00e0i t\u0101 de zh\u014du w\u00e9i ti\u00e0o yu\u00e8 hu\u0101n h\u016b\uff0c sh\u01d0 t\u0101 j\u012bng sh\u00e9n sh\u00e0ng y\u01d2u shu\u014d b\u00f9 ch\u016b de g\u0101o x\u00ecng h\u00e9 \u0101n w\u00e8i\u3002 c\u00f3ng c\u01d0\uff0c t\u0101 z\u00e0i y\u011b b\u00f9 g\u01cen ju\u00e9 d\u00e0o g\u016b d\u00fa\u3001 j\u00ec m\u00f2 le\u3002 t\u0101 g\u014dng zu\u00f2 zhe\uff0c g\u014dng zu\u00f2 zhe\uff0c y\u00ec zh\u00ed g\u014dng zu\u00f2 d\u00e0o w\u01cen xi\u00e1 b\u00f9 m\u01cen ti\u0101n k\u014dng\uff0c x\u012bng x\u012bng h\u00e9 yu\u00e8 li\u00e0ng sh\u00e8 ch\u016b y\u014du gu\u0101ng\u3002 y\u00e8 sh\u0113n le\uff0c t\u0101 zh\u012b b\u01ce t\u00f3u zh\u011bn z\u00e0i sh\u0101n y\u00e1 sh\u00e0ng\uff0c l\u00fc\u00e8 shu\u00ec yi shu\u00ec\u3002 d\u00ec \u00e8r ti\u0101n\uff0c ti\u0101n g\u0101ng w\u0113i m\u00edng\uff0c t\u0101 y\u00f2u g\u01cen j\u01d0n q\u01d0 l\u00e1i j\u00ec x\u00f9 g\u014dng zu\u00f2\u3002 t\u0101 y\u00ec x\u012bn xi\u01ceng b\u01ce zh\u00e8 xi\u0113 l\u00edng m\u01d0n de xi\u01ceo sh\u0113ng w\u00f9 b\u00f9 m\u01cen d\u00e0 d\u00ec\u3002 d\u00e0n sh\u00ec\uff0c d\u00e0 d\u00ec b\u00ec j\u00ecng t\u00e0i d\u00e0 le\uff0c t\u0101 g\u014dng zu\u00f2 le x\u01d4 ji\u01d4\uff0c h\u00e1i m\u00e9i y\u01d2u d\u00e1 d\u00e0o t\u0101 de zh\u00ec yu\u00e0n\uff0c \u00e9r t\u0101 b\u011bn r\u00e9n y\u01d0 j\u012bng p\u00ed ju\u00e0n b\u00f9 k\u0101n le\u3002 zu\u00ec h\u00f2u\uff0c t\u0101 xi\u01ceng ch\u016b le y\u00ed g\u00e8 ju\u00e9 mi\u00e0o de chu\u00e0ng z\u00e0o r\u00e9n l\u00e8i de f\u0101ng f\u01ce\u3002 t\u0101 c\u00f3ng y\u00e1 b\u00ec sh\u00e0ng l\u0101 xi\u00e0 y\u00ec ti\u00e1o k\u016b t\u00e9ng\uff0c sh\u0113n r\u00f9 y\u00ed g\u00e8 n\u00ed t\u00e1n l\u01d0\uff0c ji\u01ceo h\u00f9n le h\u00fan hu\u00e1ng de n\u00ed ji\u0101ng\uff0c xi\u00e0ng d\u00ec mi\u00e0n sh\u00e0ng zh\u00e8 me y\u00ec hu\u012b s\u01ce\uff0c n\u00ed di\u01cen \u00e9r ji\u00e0n lu\u00f2 de d\u00ec f\u0101ng\uff0c ji\u00f9 ch\u016b xi\u00e0n le x\u01d4 du\u014d xi\u01ceo xi\u01ceo de ji\u00e0o zhe ti\u00e0o zhe de r\u00e9n \u00e9r\uff0c h\u00e9 xi\u0101n qi\u00e1n y\u00f2ng hu\u00e1ng n\u00ed ni\u0113 ch\u00e9ng de xi\u01ceo r\u00e9n \u00e9r y\u00ec b\u0101n w\u00fa \u00e8r\u3002 \u201c m\u0101 ma\uff0c m\u0101 ma \u201d de h\u01cen sh\u0113ng\uff0c zh\u00e8n xi\u01ceng z\u00e0i zh\u014du w\u00e9i\u3002 y\u00f2ng zh\u00e8 zh\u01d2ng f\u0101ng f\u01ce l\u00e1i j\u00ecn x\u00edng g\u014dng zu\u00f2\uff0c gu\u01d2 r\u00e1n ji\u01cen d\u0101n sh\u011bng sh\u00ec\u3002 t\u00e9ng ti\u00e1o y\u00ec hu\u012b\uff0c ji\u00f9 y\u01d2u h\u01ceo xi\u0113 hu\u00f3 de r\u00e9n ch\u016b xi\u00e0n\uff0c d\u00e0 d\u00ec sh\u00e0ng b\u00f9 ji\u01d4 ji\u00f9 b\u00f9 m\u01cen le r\u00e9n l\u00e8i de z\u014dng j\u00ec\u3002 d\u00e0 d\u00ec sh\u00e0ng su\u012b r\u00e1n y\u01d2u le r\u00e9n l\u00e8i\uff0c n\u01da w\u0101 de g\u014dng zu\u00f2 qu\u00e8 h\u00e1i m\u00e9i y\u01d2u zh\u014dng zh\u01d0\u3002 t\u0101 y\u00f2u k\u01ceo l\u01dc zhe\uff1a r\u00e9n z\u01d2ng sh\u00ec y\u00e0o s\u01d0 w\u00e1ng de\uff0c s\u01d0 w\u00e1ng le y\u012b",
            "p\u012b z\u00e0i chu\u00e0ng z\u00e0o y\u00ec p\u012b ma\uff1f w\u00e8i mi\u01cen t\u00e0i m\u00e1 f\u00e1n le\u3002 z\u011bn y\u00e0ng n\u00e9ng sh\u01d0 t\u0101 men j\u00ec x\u00f9 sh\u0113ng c\u00fan xi\u00e0 q\u00f9 ne\uff1f zh\u00e8 qu\u00e8 sh\u00ec y\u00ed g\u00e8 n\u00e1n t\u00ed\u3002 h\u00f2u l\u00e1i t\u0101 zh\u014dng y\u00fa xi\u01ceng ch\u016b le y\u00ed g\u00e8 b\u00e0n f\u01ce\uff0c ji\u00f9 sh\u00ec b\u01ce n\u00e0 xi\u0113 xi\u01ceo r\u00e9n \u00e9r f\u0113n w\u00e9i n\u00e1n n\u01da\uff0c r\u00e0ng n\u00e1n r\u00e9n h\u00e9 n\u01da r\u00e9n p\u00e8i h\u00e9 q\u01d0 l\u00e1i\uff0c ji\u00e0o t\u0101 men z\u00ec j\u01d0 q\u00f9 chu\u00e0ng z\u00e0o h\u00f2u d\u00e0i\uff0c d\u0101n f\u00f9 q\u01d0 y\u01ceng y\u00f9 y\u012bng \u00e9r de z\u00e9 r\u00e8n\u3002 zh\u00e8 y\u00e0ng\uff0c r\u00e9n l\u00e8i ji\u00f9 sh\u00ec sh\u00ec d\u00e0i d\u00e0i mi\u00e1n y\u00e1n xi\u00e0 l\u00e1i\uff0c b\u00ecng qi\u011b y\u00ec ti\u0101n b\u01d0 y\u00ec ti\u0101n ji\u0101 du\u014d le\u3002\u300ay\u012b su\u01d2 y\u00f9 y\u00e1n\u300bh\u00e8 \u011br m\u00f2 s\u012b xi\u01ceng zh\u012b d\u00e0o t\u0101 z\u00e0i r\u00e9n ji\u0101n sh\u00f2u d\u00e0o du\u014d d\u00e0 de z\u016bn zh\u00f2ng\uff0c ji\u00f9 hu\u00e0 zu\u00f2 f\u00e1n r\u00e9n\uff0c l\u00e1i d\u00e0o y\u00ed g\u00e8 di\u0101o xi\u00e0ng zh\u011b de di\u00e0n l\u01d0\u3002 t\u0101 k\u00e0n ji\u00e0n zh\u00f2u s\u012b de di\u0101o xi\u00e0ng\uff0c w\u00e8n d\u00e0o\uff1a \u201c zh\u00ed du\u014d sh\u01ceo qi\u00e1n\uff1f \u201d di\u0101o xi\u00e0ng zh\u011b shu\u014d\uff1a \u201c y\u00ed g\u00e8 y\u00edn yu\u00e1n\u3002 \u201d h\u00e8 \u011br m\u00f2 s\u012b y\u00f2u xi\u00e0o zhe w\u00e8n d\u00e0o\uff1a \u201c h\u00e8 l\u0101 de di\u0101o xi\u00e0ng zh\u00ed du\u014d sh\u01ceo qi\u00e1n\uff1f \u201d di\u0101o xi\u00e0ng zh\u011b shu\u014d\uff1a \u201c h\u00e1i y\u00e0o gu\u00ec y\u00ec di\u01cen \u00e9r\u3002 \u201d h\u00f2u l\u00e1i\uff0c h\u00e8 \u011br m\u00f2 s\u012b k\u00e0n ji\u00e0n z\u00ec j\u01d0 de di\u0101o xi\u00e0ng\uff0c x\u012bn xi\u01ceng t\u0101 sh\u0113n w\u00e8i sh\u00e9n sh\u01d0\uff0c y\u00f2u sh\u00ec sh\u0101ng r\u00e9n de b\u00ec h\u00f9 sh\u00e9n\uff0c r\u00e9n men du\u00ec t\u0101 hu\u00ec g\u00e8ng z\u016bn zh\u00f2ng xi\u0113\uff0c y\u00fa sh\u00ec w\u00e8n d\u00e0o\uff1a \u201c zh\u00e8 ge zh\u00ed du\u014d sh\u01ceo qi\u00e1n\uff1f \u201d di\u0101o xi\u00e0ng zh\u011b hu\u00ed d\u00e1 shu\u014d\uff1a \u201c ji\u01ce r\u00fa n\u01d0 m\u01cei le n\u00e0 li\u01ceng g\u00e8\uff0c zh\u00e8 ge su\u00e0n ti\u0101n t\u00f3u\uff0c b\u00e1i s\u00f2ng\u3002 \u201d zh\u00e8 g\u00f9 sh\u00ec sh\u00ec y\u00f2ng y\u00fa n\u00e0 xi\u0113 \u00e0i m\u00f9 x\u016b r\u00f3ng \u00e9r b\u00fa b\u00e8i r\u00e9n zh\u00f2ng sh\u00ec de r\u00e9n\u3002",
            "\u300ay\u012b su\u01d2 y\u00f9 y\u00e1n\u300bw\u00e9n z\u01d0 f\u0113i d\u00e0o sh\u012b zi mi\u00e0n qi\u00e1n\uff0c du\u00ec t\u0101 shu\u014d\uff1a \u201c w\u01d2 b\u00fa p\u00e0 n\u01d0\uff0c n\u01d0 b\u00ecng b\u00f9 b\u01d0 w\u01d2 qi\u00e1ng\u3002 ru\u00f2 shu\u014d b\u00fa sh\u00ec zh\u00e8 y\u00e0ng\uff0c n\u01d0 d\u00e0o d\u01d0 y\u01d2u sh\u00e9n me l\u00ec li\u00e0ng ne\uff1f sh\u00ec y\u00f2ng zhu\u01ce zi zhu\u0101\uff0c y\u00e1 ch\u01d0 y\u01ceo ma\uff1f n\u01da r\u00e9n t\u00f3ng n\u00e1n r\u00e9n d\u01ce ji\u00e0\uff0c y\u011b hu\u00ec zh\u00e8 me g\u0101n\u3002 w\u01d2 b\u01d0 n\u01d0 qi\u00e1ng d\u00e9 du\u014d\u3002 n\u01d0 y\u00e0o shi yu\u00e0n y\u00ec\uff0c w\u01d2 men l\u00e1i ji\u00e0o li\u00e0ng ji\u00e0o li\u00e1ng ba\uff01 \u201d w\u00e9n z\u01d0 chu\u012b zhe l\u01ce ba ch\u014dng gu\u00f2 q\u00f9\uff0c zhu\u0101n y\u01ceo sh\u012b zi b\u00ed zi zh\u014du w\u00e9i m\u00e9i y\u01d2u m\u00e1o de d\u00ec f\u0101ng\u3002 sh\u012b zi q\u00ec d\u00e9 y\u00f2ng zhu\u01ce zi b\u01ce z\u00ec j\u01d0 de li\u01cen d\u014du zhu\u0101 p\u00f2 le\u3002 w\u00e9n z\u01d0 zh\u00e0n sh\u00e8ng le sh\u012b zi\uff0c y\u00f2u chu\u012b q\u01d0 l\u01ce ba\uff0c ch\u00e0ng zhe k\u01cei g\u0113 f\u0113i z\u01d2u\uff0c qu\u00e8 b\u00e8i zh\u012b zh\u016b w\u01ceng ni\u00e1n zh\u00f9 le\u3002 w\u00e9n z\u01d0 ji\u0101ng y\u00e0o b\u00e8i ch\u012b di\u00e0o sh\u00ed\uff0c t\u00e0n x\u012b shu\u014d\uff0c z\u00ec j\u01d0 t\u00f3ng zu\u00ec qi\u00e1ng d\u00e0 de d\u00f2ng w\u00f9 d\u014du ji\u00e0o li\u00e0ng gu\u00f2\uff0c b\u00fa li\u00e0o b\u00e8i zh\u00e8 xi\u01ceo xi\u01ceo de zh\u012b zh\u016b xi\u0101o mi\u00e8 le\u3002 zh\u00e8 g\u00f9 sh\u00ec sh\u00ec y\u00f2ng y\u00fa n\u00e0 xi\u0113 d\u01ce b\u00e0i gu\u00f2 d\u00e0 r\u00e9n w\u00f9\uff0c qu\u00e8 b\u00e8i xi\u01ceo r\u00e9n w\u00f9 d\u01ce b\u00e0i de r\u00e9n\u3002\u300al\u01da sh\u00ec ch\u016bn qi\u016b\u300bs\u00f2ng zh\u012b d\u012bng sh\u00ec\uff0c ji\u0101 w\u00fa j\u01d0ng \u00e9r ch\u016b g\u00e0i j\u00ed\uff0c ch\u00e1ng y\u00ec r\u00e9n j\u016b w\u00e0i\u3002 j\u00ed q\u00ed ji\u0101 chu\u0101n j\u01d0ng\uff0c g\u00e0o r\u00e9n yu\u0113\uff1a \u201c w\u00fa chu\u0101n j\u01d0ng d\u00e9 y\u00ec r\u00e9n\u3002 \u201d y\u01d2u w\u00e9n \u00e9r chu\u00e1n zh\u012b zh\u011b\uff1a \u201c d\u012bng sh\u00ec chu\u0101n j\u01d0ng d\u00e9 y\u00ec r\u00e9n\u3002 \u201d gu\u00f3 r\u00e9n d\u00e0o zh\u012b\uff0c w\u00e9n zh\u012b y\u00fa s\u00f2ng j\u016bn\u3002 s\u00f2ng j\u016bn l\u00ecng r\u00e9n w\u00e8n zh\u012b y\u00fa d\u012bng sh\u00ec\uff0c d\u012bng sh\u00ec du\u00ec yu\u0113\uff1a \u201c d\u00e9 y\u00ec r\u00e9n zh\u012b sh\u01d0\uff0c f\u0113i d\u011bi y\u00ec r\u00e9n y\u00fa j\u01d0ng zh\u014dng y\u011b\u3002 \u201d qi\u00fa w\u00e9n zh\u012b ru\u00f2 c\u01d0\uff0c b\u00fa ru\u00f2 w\u00fa w\u00e9n y\u011b\u3002\u300ali\u00e8 z\u01d0\u300bq\u01d0 gu\u00f3 y\u01d2u r\u00e9n y\u014du ti\u0101n d\u00ec b\u0113ng zhu\u00ec\uff0c sh\u0113n w\u00e1ng su\u01d2 j\u00ec\uff0c f\u00e8i q\u01d0n sh\u00ed zh\u011b\u3002 y\u00f2u y\u01d2u y\u014du b\u01d0 zh\u012b su\u01d2 y\u014du zh\u011b\uff0c y\u012bn w\u01ceng xi\u01ceo zh\u012b\uff0c yu\u0113\uff1a \u201c ti\u0101n\uff0c j\u012b q\u00ec \u011br\uff0c w\u00e1ng ch\u00f9 w\u00e1ng q\u00ec\u3002 ru\u00f2 q\u016b sh\u0113n h\u016b x\u012b\uff0c zh\u014dng r\u00ec z\u00e0i ti\u0101n zh\u014dng h\u00e1ng zh\u01d0\uff0c n\u00e0i h\u00e9 y\u014du b\u0113ng zhu\u00ec h\u016b\uff1f \u201d q\u00ed r\u00e9n yu\u0113\uff1a \u201c ti\u0101n gu\u01d2 j\u012b q\u00ec\uff0c r\u00ec yu\u00e8 x\u012bng xi\u00f9\uff0c b\u00f9 d\u0101ng zhu\u00ec y\u0113\uff1f \u201d xi\u01ceo zh\u012b zh\u011b yu\u0113\uff1a \u201c r\u00ec yu\u00e8 x\u012bng s\u00f9\uff0c y\u00ec j\u012b q\u00ec zh\u014dng zh\u012b y\u01d2u gu\u0101ng y\u00e0o zh\u011b\uff0c zh\u012b sh\u01d0 zhu\u00ec\uff0c y\u00ec b\u00f9 n\u00e9ng y\u01d2u su\u01d2 zh\u014dng sh\u0101ng\u3002 \u201d q\u00ed r\u00e9n yu\u0113\uff1a \u201c n\u00e0i d\u00ec hu\u00e0i h\u00e9\uff1f \u201d xi\u01ceo zh\u012b zh\u011b yu\u0113\uff1a \u201c d\u00ec\uff0c j\u012b ku\u00e0i \u011br\uff0c ch\u014dng s\u00e8 s\u00ec x\u016b\uff0c w\u00e1ng ch\u00f9 w\u00e1ng ku\u00e0i\u3002 ru\u00f2 ch\u00fa b\u00f9 c\u012b d\u01ceo\uff0c zh\u014dng r\u00ec z\u00e0i d\u00ec sh\u00e0ng x\u00edng zh\u01d0\uff0c n\u00e0i h\u00e9 y\u014du q\u00ed hu\u00e0i\uff1f \u201d q\u00ed r\u00e9n sh\u00e8 r\u00e1n d\u00e0 x\u01d0\uff0c xi\u01ceo zh\u012b zh\u011b y\u00ec sh\u00e8 r\u00e1n d\u00e0 x\u01d0\u3002"
          ],
          annotations: [
            { id: 1, term: "缥缈", pinyin: "piāomiǎo", definition: "形容隐隐约约，若有若无。", definitionEn: "Vague and ethereal, as if there yet not there." }
          ],
          thinkExplore: [
            { cn: "朗读并背诵这首诗，用自己的话描述诗中的想象世界。", en: "Read aloud, memorize, and describe the imaginary world in your own words." },
            { cn: "诗中牛郎织女过着自由自在的生活，与神话传说中的悲剧结局不同，表达了诗人怎样的思想感情？", en: "The Cowherd and Weaver Girl live freely, unlike the tragic myth. What feelings does this express?" }
          ],
          accumExtend: [
            { cn: "仰望星空，选择一个天体，发挥联想和想象，写一首小诗。", en: "Look up at the sky, choose a celestial body, and write a short poem using imagination." }
          ],
          teachingPoints: [
            { cn: "体会\u201C联想\u201D与\u201C想象\u201D的区别与联系。", en: "Appreciate the difference and connection between 'association' and 'imagination.'" }
          ],
          parentTips: [
            { cn: "和孩子一起仰望星空，分享关于星星的想象。", en: "Gaze at the starry sky with your child and share imaginative stories." }
          ]
        },
        {
          id: 21,
          title: "女娲造人",
          titleEn: "Nüwa Creates Humans",
          difficulty: 4,
          author: "袁珂",
          authorEn: "Yuan Ke",
          source: "选自《神话故事新编》（中国青年出版社1963年版）。原题为《女娲创造人类》。",
          sourceEn: "Selected from Myths Retold (China Youth Press, 1963). Originally titled 'Nüwa Creates Humanity.'",
          vocabWords: [
            {word:'神通广大',pinyin:'shén tōng guǎng dà',en:'infinitely powerful',sentence:'出现了一个神通广大的女神。',sentenceEn:'There appeared an infinitely powerful goddess.'},
            {word:'莽莽榛榛',pinyin:'mǎng mǎng zhēn zhēn',en:'thick and wild vegetation',sentence:'行走在这片莽莽榛榛的原野上。',sentenceEn:'Walking across this wildly overgrown plain.'},
            {word:'眉开眼笑',pinyin:'méi kāi yǎn xiào',en:'beaming with joy',sentence:'不由得满心欢喜，眉开眼笑。',sentenceEn:'Could not help but feel overjoyed, beaming with delight.'},
            {word:'绵延',pinyin:'mián yán',en:'extend continuously',sentence:'人类就世世代代绵延下来。',sentenceEn:'Humanity extended continuously from generation to generation.'},
            {word:'孤独',pinyin:'gū dú',en:'lonely',sentence:'感到非常孤独。',sentenceEn:'Felt very lonely.'}
          ],
          grammarPoints: [
            {point: "\u6bd4\u55bb", pointEn: "Simile/Metaphor", example: "\u5929\u5730\u5f00\u8f9f\u4ee5\u540e\uff0c\u5929\u4e0a\u6709\u4e86\u592a\u9633\u3001\u6708\u4eae\u548c\u661f\u661f\uff0c\u5730\u4e0a\u6709\u4e86\u5c71\u5ddd\u8349\u6728\uff0c\u751a\u2026", exampleEn: "After heaven and earth were created, the sky had sun, moon, and stars; the earth", explanation: "\u901a\u8fc7\u6bd4\u55bb\u4f7f\u62bd\u8c61\u7684\u4e8b\u7269\u5177\u4f53\u5316\uff0c\u589e\u5f3a\u8868\u8fbe\u6548\u679c", explanationEn: "Using metaphor to make abstract things concrete and enhance expressive effect"},
            {point: "\u8868\u8fbe\u65b9\u5f0f", pointEn: "Modes of expression", example: "\u5929\u5730\u5f00\u8f9f\u4ee5\u540e\uff0c\u5929\u4e0a\u6709\u4e86\u592a\u9633\u3001\u6708\u4eae\u548c\u661f\u661f\uff0c\u5730\u4e0a\u6709\u4e86\u5c71\u5ddd\u8349\u6728\uff0c\u751a\u2026", exampleEn: "After heaven and earth were created, the sky had sun, moon, and stars; the earth", explanation: "\u53d9\u8ff0\u3001\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\u4e94\u79cd\u57fa\u672c\u8868\u8fbe\u65b9\u5f0f", explanationEn: "Five basic modes: narration, description, argumentation, lyrical expression, and exposition"}
          ],
          footnotes: [
            {term:"\u795e\u901a\u5e7f\u5927", termEn:"infinitely powerful", definition:"\u3010sh\u00e9n t\u014dng gu\u01ceng d\u00e0\u3011infinitely powerful\u3002", definitionEn:"infinitely powerful"},
            {term:"\u83bd\u83bd\u699b\u699b", termEn:"thick and wild vegetation", definition:"\u3010m\u01ceng m\u01ceng zh\u0113n zh\u0113n\u3011thick and wild vegetation\u3002", definitionEn:"thick and wild vegetation"},
            {term:"\u7709\u5f00\u773c\u7b11", termEn:"beaming with joy", definition:"\u3010m\u00e9i k\u0101i y\u01cen xi\u00e0o\u3011beaming with joy\u3002", definitionEn:"beaming with joy"},
            {term:"\u7ef5\u5ef6", termEn:"extend continuously", definition:"\u3010mi\u00e1n y\u00e1n\u3011extend continuously\u3002", definitionEn:"extend continuously"},
            {term:"\u5b64\u72ec", termEn:"lonely", definition:"\u3010g\u016b d\u00fa\u3011lonely\u3002", definitionEn:"lonely"}
          ],
          readingTips: [
            {cn:"\u6ce8\u610f\u4f5c\u8005\u7684\u53d9\u8ff0\u89c6\u89d2\u548c\u8868\u8fbe\u65b9\u5f0f\u3002\u6587\u7ae0\u4f7f\u7528\u4e86\u54ea\u4e9b\u5199\u4f5c\u624b\u6cd5\uff08\u5982\u63cf\u5199\u3001\u8bae\u8bba\u3001\u6292\u60c5\u3001\u8bf4\u660e\uff09\uff1f", en:"Pay attention to the author's narrative perspective and expression. What writing techniques are used (description, argument, lyricism, exposition)?"},
            {cn:"\u8bfb\u5b8c\u540e\u601d\u8003\uff1a\u4f5c\u8005\u60f3\u8868\u8fbe\u4ec0\u4e48\u4e3b\u9898\uff1f\u6587\u7ae0\u7684\u6807\u9898\u4e0e\u5185\u5bb9\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f", en:"After reading, think: what theme does the author convey? How does the title relate to the content?"}
          ],
          preview: [
            {cn: "\u901a\u8bfb\u8bfe\u6587\uff0c\u521d\u6b65\u4e86\u89e3\u6587\u7ae0\u7684\u4e3b\u8981\u5185\u5bb9\u3002\u6807\u8bb0\u51fa\u4f60\u8ba4\u4e3a\u91cd\u8981\u7684\u8bcd\u8bed\u548c\u4e0d\u7406\u89e3\u7684\u5730\u65b9\u3002", en: "Read through the text for an initial understanding of the main content. Mark important vocabulary and parts you don't understand."},
            {cn: "\u67e5\u627e\u4f5c\u8005\u8881\u73c2\u7684\u76f8\u5173\u8d44\u6599\uff0c\u4e86\u89e3\u5176\u5199\u4f5c\u98ce\u683c\u548c\u672c\u6587\u7684\u5199\u4f5c\u80cc\u666f\u3002", en: "Research the author Yuan Ke to understand their writing style and the context of this text."}
          ],
          accumExtend: [
            {cn: "\u8bfe\u6587\u4e2d\u6709\u4e0d\u5c11\u597d\u8bcd\u4f73\u53e5\uff0c\u5982\u201c\u795e\u901a\u5e7f\u5927\u3001\u83bd\u83bd\u699b\u699b\u3001\u7709\u5f00\u773c\u7b11\u201d\u7b49\u3002\u8bf7\u6458\u5f55\u4f60\u559c\u6b22\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u5e76\u8bd5\u7740\u5728\u81ea\u5df1\u7684\u5199\u4f5c\u4e2d\u8fd0\u7528\u3002", en: "The text contains fine words and phrases such as \"\u795e\u901a\u5e7f\u5927\u3001\u83bd\u83bd\u699b\u699b\u3001\u7709\u5f00\u773c\u7b11\". Collect the words and sentences you like and try using them in your own writing."},
            {cn: "\u9009\u62e9\u8bfe\u6587\u4e2d\u4f60\u6700\u559c\u6b22\u7684\u4e00\u4e2a\u6bb5\u843d\uff0c\u6709\u611f\u60c5\u5730\u6717\u8bfb\uff0c\u6807\u51fa\u91cd\u97f3\u548c\u505c\u8fde\uff0c\u5728\u5c0f\u7ec4\u91cc\u4e92\u76f8\u8bc4\u4ef7\u3002", en: "Choose your favorite paragraph, read it with feeling, mark stress and pauses, and do peer evaluation in groups."},
            {cn: "\u8bfe\u5916\u9605\u8bfb\u8881\u73c2\u7684\u5176\u4ed6\u4f5c\u54c1\uff0c\u6bd4\u8f83\u4e0e\u672c\u6587\u7684\u5f02\u540c\uff0c\u5199\u4e00\u7bc7\u77ed\u6587\u5206\u4eab\u4f60\u7684\u53d1\u73b0\u3002", en: "Read other works by Yuan Ke and compare them with this text. Write a short essay sharing your findings."}
          ],
          thinkExplore: [
            {cn: "\u6717\u8bfb\u8bfe\u6587\uff0c\u6982\u62ec\u6587\u7ae0\u7684\u4e3b\u8981\u5185\u5bb9\u3002\u4f5c\u8005\u60f3\u8981\u8868\u8fbe\u7684\u4e2d\u5fc3\u601d\u60f3\u662f\u4ec0\u4e48\uff1f", en: "Read the text aloud and summarize its main content. What central idea does the author wish to convey?"},
            {cn: "\u6587\u4e2d\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bed\u53e5\u6216\u6bb5\u843d\uff1f\u627e\u51fa\u6765\u54c1\u5473\u5176\u4e2d\u7684\u8868\u8fbe\u6548\u679c\uff0c\u5e76\u4e0e\u540c\u5b66\u5206\u4eab\u4f60\u7684\u611f\u53d7\u3002", en: "Which sentences or paragraphs are most impressive? Identify them, appreciate their expressive effects, and share your feelings with classmates."},
            {cn: "\u7ed3\u5408\u4f5c\u8005\u8881\u73c2\u7684\u5199\u4f5c\u80cc\u666f\uff0c\u8c08\u8c08\u4f60\u5bf9\u8fd9\u7bc7\u6587\u7ae0\u7684\u7406\u89e3\u3002\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8981\u5199\u8fd9\u7bc7\u6587\u7ae0\uff1f", en: "Considering the author Yuan Ke's background, discuss your understanding. Why did the author write this?"}
          ],
          authorBio: {
            cn: "袁珂（1916—2001），四川新都人，神话学家。著有《中国古代神话》《山海经校注》等。",
            en: "Yuan Ke (1916–2001) was from Xindu, Sichuan. Mythologist and author of Ancient Chinese Myths and Annotated Classic of Mountains and Seas."
          },
          isSelfRead: true,
          readingTips: [{
            cn: "人类童年时期，对自然界许多现象缺乏科学的认识，就想象出各种解释，由此产生了神话。女娲造人的故事，是汉民族先祖对人类起源的神奇想象。本文是根据古代记述改写的，对照《风俗通》里的记载，看看课文增添了哪些内容。",
            en: "In humanity's childhood, lacking scientific understanding, people imagined explanations — thus myths were born. The story of Nüwa creating humans is the Han people's marvelous imagination about human origins. Compare with the Fengsu Tong records to see what content was added."
          }],
          text: [
        "\u5929\u5730\u5f00\u8f9f\u4ee5\u540e\uff0c\u5929\u4e0a\u6709\u4e86\u592a\u9633\u3001\u6708\u4eae\u548c\u661f\u661f\uff0c\u5730\u4e0a\u6709\u4e86\u5c71\u5ddd\u8349\u6728\uff0c\u751a\u81f3\u6709\u4e86\u9e1f\u517d\u866b\u9c7c\u4e86\uff0c\u53ef\u662f\u5355\u5355\u6ca1\u6709\u4eba\u7c7b\u3002\u8fd9\u4e16\u95f4\uff0c\u65e0\u8bba\u600e\u6837\u8bf4\u5427\uff0c\u603b\u4e0d\u514d\u663e\u5f97\u6709\u4e9b\u8352\u51c9\u5bc2\u5bde\u3002",
        "\u4e0d\u77e5\u9053\u5728\u4ec0\u4e48\u65f6\u5019\uff0c\u51fa\u73b0\u4e86\u4e00\u4e2a\u795e\u901a\u5e7f\u5927\u7684\u5973\u795e\uff0c\u53eb\u4f5c\u5973\u5a32\u3002\u636e\u8bf4\uff0c\u5979\u4e00\u5929\u5f53\u4e2d\u80fd\u591f\u53d8\u5316\u4e03\u5341\u6b21\u3002\u6709\u4e00\u5929\uff0c\u5927\u795e\u5973\u5a32\u884c\u8d70\u5728\u8fd9\u7247\u83bd\u83bd\u699b\u699b\u7684\u539f\u91ce\u4e0a\uff0c\u770b\u770b\u5468\u56f4\u7684\u666f\u8c61\uff0c\u611f\u5230\u975e\u5e38\u5b64\u72ec\u3002\u5979\u89c9\u5f97\u5728\u8fd9\u5929\u5730\u4e4b\u95f4\uff0c\u5e94\u8be5\u6dfb\u4e00\u70b9\u4ec0\u4e48\u4e1c\u897f\u8fdb\u53bb\uff0c\u8ba9\u5b83\u751f\u6c14\u84ec\u52c3\u8d77\u6765\u624d\u597d\u3002",
        "\u5979\u8d70\u5440\u8d70\u5440\uff0c\u8d70\u5f97\u6709\u4e9b\u75b2\u5026\u4e86\uff0c\u5076\u7136\u5728\u4e00\u4e2a\u6c60\u5b50\u65c1\u8fb9\u8e72\u4e0b\u6765\u3002\u6f84\u6f88\u7684\u6c60\u6c34\u7167\u89c1\u4e86\u5979\u7684\u9762\u5bb9\u548c\u8eab\u5f71\uff1b\u5979\u7b11\uff0c\u6c60\u6c34\u91cc\u7684\u5f71\u5b50\u4e5f\u5411\u7740\u5979\u7b11\uff1b\u5979\u5047\u88c5\u751f\u6c14\uff0c\u6c60\u6c34\u91cc\u7684\u5f71\u5b50\u4e5f\u5411\u7740\u5979\u751f\u6c14\u3002\u5979\u5ffd\u7136\u7075\u673a\u4e00\u52a8\uff1a\u4e16\u95f4\u5404\u79cd\u5404\u6837\u7684\u751f\u7269\u90fd\u6709\u4e86\uff0c\u5355\u5355\u6ca1\u6709\u50cf\u81ea\u5df1\u4e00\u6837\u7684\u751f\u7269\uff0c\u90a3\u4e3a\u4ec0\u4e48\u4e0d\u521b\u9020\u4e00\u79cd\u50cf\u81ea\u5df1\u4e00\u6837\u7684\u751f\u7269\u52a0\u5165\u5230\u4e16\u95f4\u5462\uff1f",
        "\u8fd9\u6837\u60f3\u7740\uff0c\u5979\u5c31\u987a\u624b\u4ece\u6c60\u8fb9\u6398\u8d77\u4e00\u56e2\u9ec4\u6ce5\uff0c\u63ba\u548c\u4e86\u6c34\uff0c\u5728\u624b\u91cc\u63c9\u56e2\u7740\uff0c\u634f\u56e2\u7740\uff0c\u634f\u6210\u4e86\u7b2c\u4e00\u4e2a\u5a03\u5a03\u6a21\u6837\u7684\u5c0f\u4e1c\u897f\u3002\u5979\u628a\u8fd9\u4e2a\u5c0f\u4e1c\u897f\u653e\u5230\u5730\u9762\u4e0a\u3002\u8bf4\u4e5f\u5947\u602a\uff0c\u8fd9\u4e2a\u6ce5\u634f\u7684\u5c0f\u5bb6\u4f19\uff0c\u521a\u4e00\u63a5\u89e6\u5230\u5730\u9762\uff0c\u9a6c\u4e0a\u5c31\u6d3b\u4e86\u8d77\u6765\uff0c\u5e76\u4e14\u4e00\u5f00\u53e3\u5c31\u558a\uff1a\u201c\u5988\u5988\uff01\u201d\u63a5\u7740\u4e00\u9635\u5174\u9ad8\u91c7\u70c8\u7684\u8df3\u8dc3\u548c\u6b22\u547c\uff0c\u8868\u793a\u4ed6\u83b7\u5f97\u751f\u547d\u7684\u6b22\u4e50\u3002",
        "\u5973\u5a32\u770b\u7740\u5979\u4eb2\u624b\u521b\u9020\u7684\u8fd9\u4e2a\u806a\u660e\u7f8e\u4e3d\u7684\u751f\u7269\uff0c\u53c8\u542c\u89c1\u201c\u5988\u5988\u201d\u7684\u558a\u58f0\uff0c\u4e0d\u7531\u5f97\u6ee1\u5fc3\u6b22\u559c\uff0c\u7709\u5f00\u773c\u7b11\u3002\u5979\u7ed9\u5979\u5fc3\u7231\u7684\u5b69\u5b50\u53d6\u4e86\u4e00\u4e2a\u540d\u5b57\uff0c\u53eb\u4f5c\u201c\u4eba\u201d\u3002",
        "\u4eba\u7684\u8eab\u4f53\u867d\u7136\u5c0f\uff0c\u4f46\u636e\u8bf4\u56e0\u4e3a\u662f\u795e\u521b\u9020\u7684\uff0c\u76f8\u8c8c\u548c\u4e3e\u52a8\u4e5f\u6709\u4e9b\u50cf\u795e\uff0c\u548c\u98de\u7684\u9e1f\u3001\u722c\u7684\u517d\u90fd\u4e0d\u540c\uff0c\u770b\u8d77\u6765\u4f3c\u4e4e\u4fbf\u6709\u4e00\u79cd\u7ba1\u7406\u5b87\u5b99\u7684\u975e\u51e1\u7684\u6c14\u6982\u3002",
        "\u5973\u5a32\u5bf9\u5979\u7684\u4f5c\u54c1\u611f\u5230\u5f88\u6ee1\u610f\uff0c\u4e8e\u662f\u7ee7\u7eed\u52a8\u624b\u505a\u5979\u7684\u5de5\u4f5c\uff0c\u5979\u7528\u9ec4\u6ce5\u505a\u4e86\u8bb8\u8bb8\u591a\u591a\u80fd\u8bf4\u4f1a\u8d70\u7684\u53ef\u7231\u7684\u5c0f\u4eba\u513f\u3002\u8fd9\u4e9b\u5c0f\u4eba\u513f\u5728\u5979\u7684\u5468\u56f4\u8df3\u8dc3\u6b22\u547c\uff0c\u4f7f\u5979\u7cbe\u795e\u4e0a\u6709\u8bf4\u4e0d\u51fa\u7684\u9ad8\u5174\u548c\u5b89\u6170\u3002\u4ece\u6b64\uff0c\u5979\u518d\u4e5f\u4e0d\u611f\u5230\u5b64\u72ec\u3001\u5bc2\u5bde\u4e86\u3002",
        "\u5979\u4e00\u5fc3\u60f3\u628a\u8fd9\u4e9b\u7075\u654f\u7684\u5c0f\u751f\u7269\u5e03\u6ee1\u5927\u5730\u3002\u4f46\u662f\u5927\u5730\u6bd5\u7adf\u592a\u5927\u4e86\uff0c\u5979\u5de5\u4f5c\u4e86\u8bb8\u4e45\uff0c\u8fd8\u6ca1\u6709\u8fbe\u5230\u5979\u7684\u610f\u613f\uff0c\u800c\u5979\u672c\u4eba\u5df2\u7ecf\u75b2\u5026\u4e0d\u582a\u4e86\u3002\u6700\u540e\u5979\u60f3\u51fa\u4e86\u4e00\u4e2a\u7edd\u5999\u7684\u521b\u9020\u4eba\u7c7b\u7684\u65b9\u6cd5\u2014\u2014\u4ece\u5d16\u58c1\u4e0a\u62c9\u4e0b\u4e00\u6761\u67af\u85e4\uff0c\u4f38\u5165\u6ce5\u6f6d\u91cc\uff0c\u6405\u6df7\u4e86\u6d51\u9ec4\u7684\u6ce5\u6d46\uff0c\u5411\u5730\u9762\u4e0a\u4e00\u6325\u6d12\uff0c\u6ce5\u70b9\u513f\u6e85\u843d\u7684\u5730\u65b9\uff0c\u5c31\u51fa\u73b0\u4e86\u8bb8\u591a\u53eb\u7740\u8df3\u7740\u7684\u5c0f\u4eba\u513f\uff0c\u548c\u5148\u524d\u7528\u9ec4\u6ce5\u634f\u6210\u7684\u5c0f\u4eba\u513f\u4e00\u822c\u65e0\u4e8c\u3002",
        "\u540e\u6765\u5979\u7ec8\u4e8e\u60f3\u51fa\u4e86\u4e00\u4e2a\u529e\u6cd5\uff0c\u5c31\u662f\u628a\u90a3\u4e9b\u5c0f\u4eba\u513f\u5206\u4e3a\u7537\u5973\uff0c\u8ba9\u7537\u4eba\u548c\u5973\u4eba\u914d\u5408\u8d77\u6765\uff0c\u53eb\u4ed6\u4eec\u81ea\u5df1\u53bb\u521b\u9020\u540e\u4ee3\u3002\u8fd9\u6837\uff0c\u4eba\u7c7b\u5c31\u4e16\u4e16\u4ee3\u4ee3\u7ef5\u5ef6\u4e0b\u6765\uff0c\u5e76\u4e14\u4e00\u5929\u6bd4\u4e00\u5929\u52a0\u591a\u4e86\u3002"
      ],
          textEn: [
        "After heaven and earth were created, the sky had sun, moon, and stars; the earth had mountains, rivers, plants, and even birds, beasts, insects, and fish — but no humans. No matter how you look at it, this world couldn’t help but seem somewhat desolate and lonely.",
        "At some unknown time, a powerful goddess named Nüwa appeared. It was said she could transform seventy times in a single day. One day, the great goddess Nüwa walked across the thick, wild wilderness. Looking at the scenery around her, she felt terribly lonely. She felt that something should be added between heaven and earth to make it burst with vitality.",
        "She walked and walked until she felt somewhat tired, and happened to squat down beside a pool. The clear water reflected her face and figure; she smiled, and the reflection smiled back; she pretended to be angry, and the reflection looked angry too. Suddenly an idea struck her: all kinds of living things existed in the world, but there was nothing that looked like herself — so why not create a being in her own likeness to add to the world?",
        "Thinking this, she scooped up a lump of yellow earth from the pool’s edge, mixed it with water, and kneaded it in her hands, shaping it into a little doll-like figure. She placed this little thing on the ground. Amazingly, the moment this clay figure touched the ground, it came alive, and its first cry was: ‘Mama!’ Then came a burst of joyful jumping and cheering, expressing its delight at receiving life.",
        "Nüwa looked at this clever, beautiful creature she had made with her own hands, and hearing the cry of ‘Mama,’ her heart filled with joy, her face beaming with happiness. She gave her beloved child a name — ‘Human.’",
        "Though the body of a human is small, it is said that because it was created by a goddess, its appearance and movements somewhat resemble a god’s. Unlike the birds that fly or the beasts that crawl, it seems to possess an extraordinary air of authority over the universe.",
        "Nüwa was very satisfied with her creation, so she continued her work, making many, many lovely little people from yellow earth who could speak and walk. These little people jumped and cheered around her, giving her an indescribable joy and comfort. From then on, she never felt lonely or desolate again.",
        "She was determined to populate the entire earth with these lively little creatures. But the earth was simply too vast. She worked for a long time without fulfilling her wish, and she herself had become utterly exhausted. Finally she devised a brilliant method for creating humans — she pulled a vine from a cliff, dipped it in a muddy pool, stirred up the thick yellow mud, and flung it onto the ground. Wherever the mud droplets fell, little people appeared, jumping and calling, exactly like the ones she had shaped from yellow earth by hand.",
        "At last she thought of another solution: she divided the little people into male and female, paired men and women together, and let them create their own offspring. Thus humanity continued from generation to generation, growing more numerous with each passing day."
      ],
          textPinyin: [
            "ti\u0101n d\u00ec k\u0101i p\u00ec y\u01d0 h\u00f2u\uff0c ti\u0101n sh\u00e0ng y\u01d2u le t\u00e0i y\u00e1ng\u3001 yu\u00e8 li\u00e0ng h\u00e9 x\u012bng x\u012bng\uff0c d\u00ec sh\u00e0ng y\u01d2u le sh\u0101n chu\u0101n c\u01ceo m\u00f9\uff0c sh\u00e8n zh\u00ec y\u01d2u le ni\u01ceo sh\u00f2u ch\u00f3ng y\u00fa le\uff0c k\u011b sh\u00ec d\u0101n d\u0101n m\u00e9i y\u01d2u r\u00e9n l\u00e8i\u3002 zh\u00e8 sh\u00ec ji\u0101n\uff0c w\u00fa l\u00f9n z\u011bn y\u00e0ng shu\u014d ba\uff0c z\u01d2ng b\u00f9 mi\u01cen xi\u01cen de y\u01d2u xi\u0113 hu\u0101ng li\u00e1ng j\u00ec m\u00f2\u3002",
            "b\u00f9 zh\u012b d\u00e0o z\u00e0i sh\u00e9n me sh\u00ed h\u00f2u\uff0c ch\u016b xi\u00e0n le y\u00ed g\u00e8 sh\u00e9n t\u014dng gu\u01ceng d\u00e0 de n\u01da sh\u00e9n\uff0c ji\u00e0o zu\u00f2 n\u01da w\u0101\u3002 j\u00f9 shu\u014d\uff0c t\u0101 y\u00ec ti\u0101n d\u0101ng zh\u014dng n\u00e9ng g\u00f2u bi\u00e0n hu\u00e0 q\u012b sh\u00ed c\u00ec\u3002 y\u01d2u y\u00ec ti\u0101n\uff0c d\u00e0 sh\u00e9n n\u01da w\u0101 x\u00edng z\u01d2u z\u00e0i zh\u00e8 pi\u00e0n m\u01ceng m\u01ceng zh\u0113n zh\u0113n de yu\u00e1n y\u011b sh\u00e0ng\uff0c k\u00e0n k\u00e0n zh\u014du w\u00e9i de j\u01d0ng xi\u00e0ng\uff0c g\u01cen d\u00e0o f\u0113i ch\u00e1ng g\u016b d\u00fa\u3002 t\u0101 ju\u00e9 de z\u00e0i zh\u00e8 ti\u0101n d\u00ec zh\u012b ji\u0101n\uff0c y\u012bng g\u0101i ti\u0101n y\u00ec di\u01cen sh\u00e9n me d\u014dng x\u012b j\u00ecn q\u00f9\uff0c r\u00e0ng t\u0101 sh\u0113ng q\u00ec p\u00e9ng b\u00f3 q\u01d0 l\u00e1i c\u00e1i h\u01ceo\u3002",
            "t\u0101 z\u01d2u ya z\u01d2u ya\uff0c z\u01d2u d\u00e9 y\u01d2u xi\u0113 p\u00ed ju\u00e0n le\uff0c \u01d2u r\u00e1n z\u00e0i y\u00ed g\u00e8 ch\u00ed z\u01d0 p\u00e1ng bi\u0101n d\u016bn xi\u00e0 l\u00e1i\u3002 ch\u00e9ng ch\u00e8 de ch\u00ed shu\u01d0 zh\u00e0o ji\u00e0n le t\u0101 de mi\u00e0n r\u00f3ng h\u00e9 sh\u0113n y\u01d0ng\uff1b t\u0101 xi\u00e0o\uff0c ch\u00ed shu\u01d0 l\u01d0 de y\u01d0ng zi y\u011b xi\u00e0ng zhe t\u0101 xi\u00e0o\uff1b t\u0101 ji\u01ce zhu\u0101ng sh\u0113ng q\u00ec\uff0c ch\u00ed shu\u01d0 l\u01d0 de y\u01d0ng zi y\u011b xi\u00e0ng zhe t\u0101 sh\u0113ng q\u00ec\u3002 t\u0101 h\u016b r\u00e1n l\u00edng j\u012b y\u00ed d\u00f2ng\uff1a sh\u00ec ji\u0101n g\u00e8 zh\u01d2ng g\u00e8 y\u00e0ng de sh\u0113ng w\u00f9 d\u014du y\u01d2u le\uff0c d\u0101n d\u0101n m\u00e9i y\u01d2u xi\u00e0ng z\u00ec j\u01d0 y\u00ed y\u00e0ng de sh\u0113ng w\u00f9\uff0c n\u00e0 w\u00e8i sh\u00e9n me b\u00fa chu\u00e0ng z\u00e0o y\u00ec zh\u01d2ng xi\u00e0ng z\u00ec j\u01d0 y\u00ed y\u00e0ng de sh\u0113ng w\u00f9 ji\u0101 r\u00f9 d\u00e0o sh\u00ec ji\u0101n ne\uff1f",
            "zh\u00e8 y\u00e0ng xi\u01ceng zhe\uff0c t\u0101 ji\u00f9 sh\u00f9n sh\u01d2u c\u00f3ng ch\u00ed bi\u0101n ju\u00e9 q\u01d0 y\u00ec tu\u00e1n hu\u00e1ng n\u00ed\uff0c ch\u0101n huo le shu\u01d0\uff0c z\u00e0i sh\u01d2u l\u01d0 r\u00f3u tu\u00e1n zhe\uff0c ni\u0113 tu\u00e1n zhe\uff0c ni\u0113 ch\u00e9ng le d\u00ec y\u012b g\u00e8 w\u00e1 wa m\u00fa y\u00e0ng de xi\u01ceo d\u014dng x\u012b\u3002 t\u0101 b\u01ce zh\u00e8 ge xi\u01ceo d\u014dng x\u012b f\u00e0ng d\u00e0o d\u00ec mi\u00e0n sh\u00e0ng\u3002 shu\u014d y\u011b q\u00ed gu\u00e0i\uff0c zh\u00e8 ge n\u00ed ni\u0113 de xi\u01ceo ji\u0101 huo\uff0c g\u0101ng y\u00ec ji\u0113 ch\u00f9 d\u00e0o d\u00ec mi\u00e0n\uff0c m\u01ce sh\u00e0ng ji\u00f9 hu\u00f3 le q\u01d0 l\u00e1i\uff0c b\u00ecng qi\u011b y\u00ec k\u0101i k\u01d2u ji\u00f9 h\u01cen\uff1a \u201c m\u0101 ma\uff01 \u201d ji\u0113 zhe y\u00ed zh\u00e8n x\u00ecng g\u0101o c\u01cei li\u00e8 de ti\u00e0o yu\u00e8 h\u00e9 hu\u0101n h\u016b\uff0c bi\u01ceo sh\u00ec t\u0101 hu\u00f2 d\u00e9 sh\u0113ng m\u00ecng de hu\u0101n l\u00e8\u3002",
            "n\u01da w\u0101 k\u00e0n zhe t\u0101 q\u012bn sh\u01d2u chu\u00e0ng z\u00e0o de zh\u00e8 ge c\u014dng ming m\u011bi l\u00ec de sh\u0113ng w\u00f9\uff0c y\u00f2u t\u012bng ji\u00e0n \u201c m\u0101 ma \u201d de h\u01cen sh\u0113ng\uff0c b\u00f9 y\u00f3u d\u00e9 m\u01cen x\u012bn hu\u0101n x\u01d0\uff0c m\u00e9i k\u0101i y\u01cen xi\u00e0o\u3002 t\u0101 g\u011bi t\u0101 x\u012bn \u00e0i de h\u00e1i zi q\u01d4 le y\u00ed g\u00e8 m\u00edng z\u00ec\uff0c ji\u00e0o zu\u00f2 \u201c r\u00e9n \u201d\u3002",
            "r\u00e9n de sh\u0113n t\u01d0 su\u012b r\u00e1n xi\u01ceo\uff0c d\u00e0n j\u00f9 shu\u014d y\u012bn w\u00e8i sh\u00ec sh\u00e9n chu\u00e0ng z\u00e0o de\uff0c xi\u00e0ng m\u00e0o h\u00e9 j\u01d4 d\u00f2ng y\u011b y\u01d2u xi\u0113 xi\u00e0ng sh\u00e9n\uff0c h\u00e9 f\u0113i de ni\u01ceo\u3001 p\u00e1 de sh\u00f2u d\u014du b\u00f9 t\u00f3ng\uff0c k\u00e0n q\u01d0 l\u00e1i s\u00ec h\u016b bi\u00e0n y\u01d2u y\u00ec zh\u01d2ng gu\u01cen l\u01d0 y\u01d4 zh\u00f2u de f\u0113i f\u00e1n de q\u00ec g\u00e0i\u3002",
            "n\u01da w\u0101 du\u00ec t\u0101 de zu\u00f2 p\u01d0n g\u01cen d\u00e0o h\u011bn m\u01cen y\u00ec\uff0c y\u00fa sh\u00ec j\u00ec x\u00f9 d\u00f2ng sh\u01d2u zu\u00f2 t\u0101 de g\u014dng zu\u00f2\uff0c t\u0101 y\u00f2ng hu\u00e1ng n\u00ed zu\u00f2 le x\u01d4 x\u01d4 du\u014d du\u014d n\u00e9ng shu\u014d hu\u00ec z\u01d2u de k\u011b \u00e0i de xi\u01ceo r\u00e9n \u00e9r\u3002 zh\u00e8 xi\u0113 xi\u01ceo r\u00e9n \u00e9r z\u00e0i t\u0101 de zh\u014du w\u00e9i ti\u00e0o yu\u00e8 hu\u0101n h\u016b\uff0c sh\u01d0 t\u0101 j\u012bng sh\u00e9n sh\u00e0ng y\u01d2u shu\u014d b\u00f9 ch\u016b de g\u0101o x\u00ecng h\u00e9 \u0101n w\u00e8i\u3002 c\u00f3ng c\u01d0\uff0c t\u0101 z\u00e0i y\u011b b\u00f9 g\u01cen d\u00e0o g\u016b d\u00fa\u3001 j\u00ec m\u00f2 le\u3002",
            "t\u0101 y\u00ec x\u012bn xi\u01ceng b\u01ce zh\u00e8 xi\u0113 l\u00edng m\u01d0n de xi\u01ceo sh\u0113ng w\u00f9 b\u00f9 m\u01cen d\u00e0 d\u00ec\u3002 d\u00e0n sh\u00ec d\u00e0 d\u00ec b\u00ec j\u00ecng t\u00e0i d\u00e0 le\uff0c t\u0101 g\u014dng zu\u00f2 le x\u01d4 ji\u01d4\uff0c h\u00e1i m\u00e9i y\u01d2u d\u00e1 d\u00e0o t\u0101 de y\u00ec yu\u00e0n\uff0c \u00e9r t\u0101 b\u011bn r\u00e9n y\u01d0 j\u012bng p\u00ed ju\u00e0n b\u00f9 k\u0101n le\u3002 zu\u00ec h\u00f2u t\u0101 xi\u01ceng ch\u016b le y\u00ed g\u00e8 ju\u00e9 mi\u00e0o de chu\u00e0ng z\u00e0o r\u00e9n l\u00e8i de f\u0101ng f\u01ce\u2014\u2014 c\u00f3ng y\u00e1 b\u00ec sh\u00e0ng l\u0101 xi\u00e0 y\u00ec ti\u00e1o k\u016b t\u00e9ng\uff0c sh\u0113n r\u00f9 n\u00ed t\u00e1n l\u01d0\uff0c ji\u01ceo h\u00fan le h\u00fan hu\u00e1ng de n\u00ed ji\u0101ng\uff0c xi\u00e0ng d\u00ec mi\u00e0n sh\u00e0ng y\u00ec hu\u012b s\u01ce\uff0c n\u00ed di\u01cen \u00e9r ji\u00e0n lu\u00f2 de d\u00ec f\u0101ng\uff0c ji\u00f9 ch\u016b xi\u00e0n le x\u01d4 du\u014d ji\u00e0o zhe ti\u00e0o zhe de xi\u01ceo r\u00e9n \u00e9r\uff0c h\u00e9 xi\u0101n qi\u00e1n y\u00f2ng hu\u00e1ng n\u00ed ni\u0113 ch\u00e9ng de xi\u01ceo r\u00e9n \u00e9r y\u00ec b\u0101n w\u00fa \u00e8r\u3002",
            "h\u00f2u l\u00e1i t\u0101 zh\u014dng y\u00fa xi\u01ceng ch\u016b le y\u00ed g\u00e8 b\u00e0n f\u01ce\uff0c ji\u00f9 sh\u00ec b\u01ce n\u00e0 xi\u0113 xi\u01ceo r\u00e9n \u00e9r f\u0113n w\u00e9i n\u00e1n n\u01da\uff0c r\u00e0ng n\u00e1n r\u00e9n h\u00e9 n\u01da r\u00e9n p\u00e8i h\u00e9 q\u01d0 l\u00e1i\uff0c ji\u00e0o t\u0101 men z\u00ec j\u01d0 q\u00f9 chu\u00e0ng z\u00e0o h\u00f2u d\u00e0i\u3002 zh\u00e8 y\u00e0ng\uff0c r\u00e9n l\u00e8i ji\u00f9 sh\u00ec sh\u00ec d\u00e0i d\u00e0i mi\u00e1n y\u00e1n xi\u00e0 l\u00e1i\uff0c b\u00ecng qi\u011b y\u00ec ti\u0101n b\u01d0 y\u00ec ti\u0101n ji\u0101 du\u014d le\u3002"
          ],
          annotations: [
            { id: 1, term: "莽莽榛榛", pinyin: "mǎngmǎngzhēnzhēn", definition: "草木丛生的样子。", definitionEn: "Dense, overgrown vegetation." },
            { id: 2, term: "神通广大", pinyin: "shéntōngguǎngdà", definition: "本领高强，无所不能。", definitionEn: "Of great power, capable of anything." }
          ],
          teachingPoints: [
            { cn: "理解神话的特点：用想象解释自然现象和人类起源。", en: "Understand myths: using imagination to explain nature and human origins." }
          ],
          parentTips: [
            { cn: "和孩子讨论不同文化中关于人类起源的神话故事。", en: "Discuss myths about human origins from different cultures." }
          ]
        },
        {
          id: 22,
          title: "寓言四则",
          titleEn: "Four Fables",
          difficulty: 5,
          author: "《伊索寓言》/《吕氏春秋》/《列子》",
          authorEn: "Aesop's Fables / Lüshi Chunqiu / Liezi",
          source: "分别选自《伊索寓言》《吕氏春秋·慎行论·察传》和《列子·天瑞》。",
          sourceEn: "Selected from Aesop's Fables, Lüshi Chunqiu, and Liezi.",
          vocabWords: [
            {word:'雕像',pinyin:'diāo xiàng',en:'sculpture; statue',sentence:'赫耳墨斯来到一个雕像者的店里。',sentenceEn:'Hermes came to a sculptor shop.'},
            {word:'虚荣',pinyin:'xū róng',en:'vanity',sentence:'赫耳墨斯的虚荣心使他自取其辱。',sentenceEn:'The vanity of Hermes brought him humiliation.'},
            {word:'杞人忧天',pinyin:'qǐ rén yōu tiān',en:'needless anxiety',sentence:'杞国有人忧天地崩坠。',sentenceEn:'In the state of Qi, someone worried the sky would collapse.'},
            {word:'穿井得一人',pinyin:'chuān jǐng dé yī rén',en:'digging a well yields a person',sentence:'宋之丁氏，家无井而出溉汲。',sentenceEn:'The Ding family of Song had no well and went out to draw water.'},
            {word:'道听途说',pinyin:'dào tīng tú shuō',en:'hearsay',sentence:'求闻之若此，不若无闻也。',sentenceEn:'Seeking news like this is worse than hearing nothing at all.'}
          ],
          footnotes: [
            {term:"\u96d5\u50cf", termEn:"sculpture; statue", definition:"\u3010di\u0101o xi\u00e0ng\u3011sculpture; statue\u3002", definitionEn:"sculpture; statue"},
            {term:"\u865a\u8363", termEn:"vanity", definition:"\u3010x\u016b r\u00f3ng\u3011vanity\u3002", definitionEn:"vanity"},
            {term:"\u675e\u4eba\u5fe7\u5929", termEn:"needless anxiety", definition:"\u3010q\u01d0 r\u00e9n y\u014du ti\u0101n\u3011needless anxiety\u3002", definitionEn:"needless anxiety"},
            {term:"\u7a7f\u4e95\u5f97\u4e00\u4eba", termEn:"digging a well yields a person", definition:"\u3010chu\u0101n j\u01d0ng d\u00e9 y\u012b r\u00e9n\u3011digging a well yields a person\u3002", definitionEn:"digging a well yields a person"},
            {term:"\u9053\u542c\u9014\u8bf4", termEn:"hearsay", definition:"\u3010d\u00e0o t\u012bng t\u00fa shu\u014d\u3011hearsay\u3002", definitionEn:"hearsay"}
          ],
          readingTips: [
            {cn:"\u5148\u7ed3\u5408\u6ce8\u91ca\u7586\u901a\u6587\u610f\uff0c\u518d\u53cd\u590d\u8bf5\u8bfb\uff0c\u4f53\u4f1a\u6587\u8a00\u6587\u7684\u7b80\u7ec3\u4e0e\u97f5\u5f8b\u3002\u6ce8\u610f\u79ef\u7d2f\u5e38\u89c1\u7684\u6587\u8a00\u5b9e\u8bcd\u548c\u865a\u8bcd\u3002", en:"First understand the text with annotations, then read aloud repeatedly to appreciate the conciseness and rhythm of classical Chinese. Note common content and function words."},
            {cn:"\u601d\u8003\u6587\u7ae0\u7684\u5199\u4f5c\u80cc\u666f\u548c\u4f5c\u8005\u7684\u601d\u60f3\u611f\u60c5\u3002\u6587\u8a00\u6587\u4e2d\u7684\u54ea\u4e9b\u601d\u60f3\u5bf9\u4eca\u5929\u4ecd\u6709\u542f\u53d1\uff1f", en:"Consider the historical context and the author's thoughts and feelings. Which ideas from this classical text still resonate today?"}
          ],
          grammarPoints: [
            {point:'寓言寓意',pointEn:'yù yán yù yì',example:'fable and its moral',exampleEn:'蚊子打败了狮子，却被蜘蛛网粘住了。',explanation:'The mosquito defeated the lion but got stuck in a spider web.',explanationEn:'通过简短的故事传达深刻的道理'}
          ],
          authorBio: {
            cn: "伊索（约公元前6世纪），古希腊作家。《吕氏春秋》为先秦杂家代表著作。《列子》旧题列御寇著，今本八篇。",
            en: "Aesop (c. 6th century BCE) was an ancient Greek writer. Lüshi Chunqiu is a pre-Qin miscellaneous school work. Liezi is attributed to Lie Yukou and contains eight chapters."
          },
          isSelfRead: false,
          isClassical: true,
          preview: [
            { cn: "寓言一般比较短小，常常用假托的故事寄寓意味深长的道理，给人以启示。", en: "Fables are generally short, using fictional stories to convey profound truths and provide enlightenment." }
          ],
          text: [
        "\u8d6b\u8033\u58a8\u65af\u548c\u96d5\u50cf\u8005\n\u8d6b\u8033\u58a8\u65af\u60f3\u77e5\u9053\u4ed6\u5728\u4eba\u95f4\u53d7\u5230\u591a\u5927\u7684\u5c0a\u91cd\uff0c\u5c31\u5316\u4f5c\u51e1\u4eba\uff0c\u6765\u5230\u4e00\u4e2a\u96d5\u50cf\u8005\u7684\u5e97\u91cc\u3002\u4ed6\u770b\u89c1\u5b99\u65af\u7684\u96d5\u50cf\uff0c\u95ee\u9053\uff1a\u201c\u503c\u591a\u5c11\u94b1\uff1f\u201d\u96d5\u50cf\u8005\u8bf4\uff1a\u201c\u4e00\u4e2a\u94f6\u5143\u3002\u201d\u8d6b\u8033\u58a8\u65af\u53c8\u7b11\u7740\u95ee\u9053\uff1a\u201c\u8d6b\u62c9\u7684\u96d5\u50cf\u503c\u591a\u5c11\u94b1\uff1f\u201d\u96d5\u50cf\u8005\u8bf4\uff1a\u201c\u8fd8\u8981\u8d35\u4e00\u70b9\u513f\u3002\u201d\u540e\u6765\uff0c\u8d6b\u8033\u58a8\u65af\u770b\u89c1\u81ea\u5df1\u7684\u96d5\u50cf\uff0c\u5fc3\u60f3\u4ed6\u8eab\u4e3a\u795e\u4f7f\uff0c\u53c8\u662f\u5546\u4eba\u7684\u5e87\u62a4\u795e\uff0c\u4eba\u4eec\u4f1a\u5bf9\u4ed6\u66f4\u5c0a\u91cd\u4e9b\uff0c\u4e8e\u662f\u95ee\u9053\uff1a\u201c\u8fd9\u4e2a\u503c\u591a\u5c11\u94b1\uff1f\u201d\u96d5\u50cf\u8005\u56de\u7b54\u8bf4\uff1a\u201c\u5047\u5982\u4f60\u4e70\u4e86\u90a3\u4e24\u4e2a\uff0c\u8fd9\u4e2a\u7b97\u6dfb\u5934\uff0c\u767d\u9001\u3002\u201d\n\u8fd9\u6545\u4e8b\u9002\u7528\u4e8e\u90a3\u4e9b\u7231\u6155\u865a\u8363\u800c\u4e0d\u88ab\u4eba\u91cd\u89c6\u7684\u4eba\u3002",
        "\u868a\u5b50\u548c\u72ee\u5b50\n\u868a\u5b50\u98de\u5230\u72ee\u5b50\u9762\u524d\uff0c\u5bf9\u4ed6\u8bf4\uff1a\u201c\u6211\u4e0d\u6015\u4f60\uff0c\u4f60\u5e76\u4e0d\u6bd4\u6211\u5f3a\u3002\u8981\u8bf4\u4e0d\u662f\u8fd9\u6837\uff0c\u4f60\u5230\u5e95\u6709\u4ec0\u4e48\u529b\u91cf\u5462\uff1f\u662f\u7528\u722a\u5b50\u6293\uff0c\u7259\u9f7f\u54ac\u5417\uff1f\u5973\u4eba\u540c\u7537\u4eba\u6253\u67b6\uff0c\u4e5f\u4f1a\u8fd9\u4e48\u5e72\u3002\u6211\u6bd4\u4f60\u5f3a\u5f97\u591a\u3002\u4f60\u8981\u662f\u613f\u610f\uff0c\u6211\u4eec\u6765\u8f83\u91cf\u8f83\u91cf\u5427\uff01\u201d\u868a\u5b50\u5439\u7740\u5587\u53ed\u51b2\u8fc7\u53bb\uff0c\u4e13\u54ac\u72ee\u5b50\u9f3b\u5b50\u5468\u56f4\u6ca1\u6709\u6bdb\u7684\u5730\u65b9\u3002\u72ee\u5b50\u6c14\u5f97\u7528\u722a\u5b50\u628a\u81ea\u5df1\u7684\u8138\u90fd\u6293\u7834\u4e86\u3002\u868a\u5b50\u6218\u80dc\u4e86\u72ee\u5b50\uff0c\u53c8\u5439\u8d77\u5587\u53ed\uff0c\u5531\u7740\u51ef\u6b4c\u98de\u8d70\u4e86\uff0c\u5374\u88ab\u8718\u86db\u7f51\u7c98\u4f4f\u4e86\u3002\u868a\u5b50\u5c06\u8981\u88ab\u5403\u6389\u7684\u65f6\u5019\uff0c\u53f9\u606f\u8bf4\uff1a\u201c\u6211\u540c\u6700\u5f3a\u5927\u7684\u52a8\u7269\u90fd\u8f83\u91cf\u8fc7\uff0c\u4e0d\u6599\u88ab\u8fd9\u5c0f\u5c0f\u7684\u8718\u86db\u6d88\u706d\u4e86\u3002\u201d\n\u8fd9\u6545\u4e8b\u9002\u7528\u4e8e\u90a3\u4e9b\u6253\u8d25\u8fc7\u5927\u4eba\u7269\uff0c\u5374\u88ab\u5c0f\u4eba\u7269\u6253\u8d25\u7684\u4eba\u3002",
        "\u7a7f\u4e95\u5f97\u4e00\u4eba\n\u5b8b\u4e4b\u4e01\u6c0f\uff0c\u5bb6\u65e0\u4e95\u800c\u51fa\u6e89\u6c72\uff0c\u5e38\u4e00\u4eba\u5c45\u5916\u3002\u53ca\u5176\u5bb6\u7a7f\u4e95\uff0c\u544a\u4eba\u66f0\uff1a\u201c\u543e\u7a7f\u4e95\u5f97\u4e00\u4eba\u3002\u201d\u6709\u95fb\u800c\u4f20\u4e4b\u8005\uff1a\u201c\u4e01\u6c0f\u7a7f\u4e95\u5f97\u4e00\u4eba\u3002\u201d\u56fd\u4eba\u9053\u4e4b\uff0c\u95fb\u4e4b\u4e8e\u5b8b\u541b\u3002\u5b8b\u541b\u4ee4\u4eba\u95ee\u4e4b\u4e8e\u4e01\u6c0f\uff0c\u4e01\u6c0f\u5bf9\u66f0\uff1a\u201c\u5f97\u4e00\u4eba\u4e4b\u4f7f\uff0c\u975e\u5f97\u4e00\u4eba\u4e8e\u4e95\u4e2d\u4e5f\u3002\u201d\u6c42\u95fb\u4e4b\u82e5\u6b64\uff0c\u4e0d\u82e5\u65e0\u95fb\u4e5f\u3002",
        "\u675e\u4eba\u5fe7\u5929\n\u675e\u56fd\u6709\u4eba\u5fe7\u5929\u5730\u5d29\u5760\uff0c\u8eab\u4ea1\u6240\u5bc4\uff0c\u5e9f\u5bdd\u98df\u8005\u3002\u53c8\u6709\u5fe7\u5f7c\u4e4b\u6240\u5fe7\u8005\uff0c\u56e0\u5f80\u6653\u4e4b\uff0c\u66f0\uff1a\u201c\u5929\uff0c\u79ef\u6c14\u8033\uff0c\u4ea1\u5904\u4ea1\u6c14\u3002\u82e5\u5c48\u4f38\u547c\u5438\uff0c\u7ec8\u65e5\u5728\u5929\u4e2d\u884c\u6b62\uff0c\u5948\u4f55\u5fe7\u5d29\u5760\u4e4e\uff1f\u201d\u5176\u4eba\u66f0\uff1a\u201c\u5929\u679c\u79ef\u6c14\uff0c\u65e5\u6708\u661f\u5bbf\uff0c\u4e0d\u5f53\u5760\u8036\uff1f\u201d\u6653\u4e4b\u8005\u66f0\uff1a\u201c\u65e5\u6708\u661f\u5bbf\uff0c\u4ea6\u79ef\u6c14\u4e2d\u4e4b\u6709\u5149\u8000\u8005\uff0c\u53ea\u4f7f\u5760\uff0c\u4ea6\u4e0d\u80fd\u6709\u6240\u4e2d\u4f24\u3002\u201d\u5176\u4eba\u66f0\uff1a\u201c\u5948\u5730\u574f\u4f55\uff1f\u201d\u6653\u4e4b\u8005\u66f0\uff1a\u201c\u5730\uff0c\u79ef\u5757\u8033\uff0c\u5145\u585e\u56db\u865a\uff0c\u4ea1\u5904\u4ea1\u5757\u3002\u82e5\u8e87\u6b65\u8dd0\u8e48\uff0c\u7ec8\u65e5\u5728\u5730\u4e0a\u884c\u6b62\uff0c\u5948\u4f55\u5fe7\u5176\u574f\uff1f\u201d\u5176\u4eba\u820d\u7136\u5927\u559c\uff0c\u6653\u4e4b\u8005\u4ea6\u820d\u7136\u5927\u559c\u3002"
      ],
          textEn: [
        "Hermes and the Sculptor\nHermes wanted to know how much he was esteemed among mortals, so he disguised himself and came to a sculptor’s shop. He saw a statue of Zeus and asked: ‘How much is it worth?’ The sculptor said: ‘One silver coin.’ Hermes smiled and asked: ‘How much is the statue of Hera worth?’ The sculptor said: ‘A bit more.’ Then Hermes saw a statue of himself. Thinking that as the messenger of the gods and the patron of merchants, he would be held in even greater esteem, he asked: ‘How much is this one?’ The sculptor replied: ‘If you buy those two, this one comes free as a bonus.’\nThis story applies to those who are vain but not respected by others.",
        "The Mosquito and the Lion\nA mosquito flew to a lion and said: ‘I’m not afraid of you. You are no stronger than I am. If you think otherwise, what power do you really have? You scratch with your claws and bite with your teeth? A woman fighting a man does the same. I am far stronger than you. If you wish, let us fight!’ The mosquito charged, trumpeting, and bit the lion around his nose where there was no hair. The lion clawed at his own face in fury until it was torn and bleeding. The mosquito, having defeated the lion, trumpeted again and flew off singing in triumph — only to be caught in a spider’s web. As the mosquito was about to be devoured, it sighed: ‘I fought the mightiest of animals and won, only to be destroyed by this little spider.’\nThis story applies to those who defeat the great but are beaten by the small.",
        "Getting a Person by Digging a Well\nThe Ding family of Song had no well, so they sent someone outside to draw water, always keeping one person away from home. When the family dug a well, Ding told people: ‘By digging a well, I gained a person.’ Someone who heard this spread the story as: ‘The Dings found a person in their well.’ The people of the state talked about it until it reached the Duke of Song. The Duke sent someone to inquire of the Ding family. Ding explained: ‘I gained the labor of one person — I did not find a person inside the well.’ Seeking information in this manner is worse than having no information at all.",
        "The Man of Qi Who Worried About the Sky\nIn the state of Qi, a man worried that heaven and earth would collapse, leaving him nowhere to live, and he lost sleep and appetite over it. Another man who worried about this worrier’s distress went to enlighten him, saying: ‘The sky is merely accumulated air — there is no place without air. You breathe and move about, spending all day within the sky. Why worry about it collapsing?’ The man said: ‘If the sky is really just accumulated air, won’t the sun, moon, and stars fall down?’ The explainer said: ‘The sun, moon, and stars are merely bright objects within the accumulated air. Even if they fell, they could not cause harm.’ The man asked: ‘What about the earth breaking apart?’ The explainer said: ‘The earth is merely accumulated matter, filling all the space around. There is no place without it. You stamp and tread upon it, spending all day on the earth. Why worry about it breaking apart?’ The man was greatly relieved and overjoyed, and the explainer was also greatly relieved and overjoyed."
      ],
          textPinyin: [
            "h\u00e8 \u011br m\u00f2 s\u012b h\u00e9 di\u0101o xi\u00e0ng zh\u011b\n h\u00e8 \u011br m\u00f2 s\u012b xi\u01ceng zh\u012b d\u00e0o t\u0101 z\u00e0i r\u00e9n ji\u0101n sh\u00f2u d\u00e0o du\u014d d\u00e0 de z\u016bn zh\u00f2ng\uff0c ji\u00f9 hu\u00e0 zu\u00f2 f\u00e1n r\u00e9n\uff0c l\u00e1i d\u00e0o y\u00ed g\u00e8 di\u0101o xi\u00e0ng zh\u011b de di\u00e0n l\u01d0\u3002 t\u0101 k\u00e0n ji\u00e0n zh\u00f2u s\u012b de di\u0101o xi\u00e0ng\uff0c w\u00e8n d\u00e0o\uff1a \u201c zh\u00ed du\u014d sh\u01ceo qi\u00e1n\uff1f \u201d di\u0101o xi\u00e0ng zh\u011b shu\u014d\uff1a \u201c y\u00ed g\u00e8 y\u00edn yu\u00e1n\u3002 \u201d h\u00e8 \u011br m\u00f2 s\u012b y\u00f2u xi\u00e0o zhe w\u00e8n d\u00e0o\uff1a \u201c h\u00e8 l\u0101 de di\u0101o xi\u00e0ng zh\u00ed du\u014d sh\u01ceo qi\u00e1n\uff1f \u201d di\u0101o xi\u00e0ng zh\u011b shu\u014d\uff1a \u201c h\u00e1i y\u00e0o gu\u00ec y\u00ec di\u01cen \u00e9r\u3002 \u201d h\u00f2u l\u00e1i\uff0c h\u00e8 \u011br m\u00f2 s\u012b k\u00e0n ji\u00e0n z\u00ec j\u01d0 de di\u0101o xi\u00e0ng\uff0c x\u012bn xi\u01ceng t\u0101 sh\u0113n w\u00e8i sh\u00e9n sh\u01d0\uff0c y\u00f2u sh\u00ec sh\u0101ng r\u00e9n de b\u00ec h\u00f9 sh\u00e9n\uff0c r\u00e9n men hu\u00ec du\u00ec t\u0101 g\u00e8ng z\u016bn zh\u00f2ng xi\u0113\uff0c y\u00fa sh\u00ec w\u00e8n d\u00e0o\uff1a \u201c zh\u00e8 ge zh\u00ed du\u014d sh\u01ceo qi\u00e1n\uff1f \u201d di\u0101o xi\u00e0ng zh\u011b hu\u00ed d\u00e1 shu\u014d\uff1a \u201c ji\u01ce r\u00fa n\u01d0 m\u01cei le n\u00e0 li\u01ceng g\u00e8\uff0c zh\u00e8 ge su\u00e0n ti\u0101n t\u00f3u\uff0c b\u00e1i s\u00f2ng\u3002 \u201d\n zh\u00e8 g\u00f9 sh\u00ec sh\u00ec y\u00f2ng y\u00fa n\u00e0 xi\u0113 \u00e0i m\u00f9 x\u016b r\u00f3ng \u00e9r b\u00fa b\u00e8i r\u00e9n zh\u00f2ng sh\u00ec de r\u00e9n\u3002",
            "w\u00e9n z\u01d0 h\u00e9 sh\u012b zi\n w\u00e9n z\u01d0 f\u0113i d\u00e0o sh\u012b zi mi\u00e0n qi\u00e1n\uff0c du\u00ec t\u0101 shu\u014d\uff1a \u201c w\u01d2 b\u00fa p\u00e0 n\u01d0\uff0c n\u01d0 b\u00ecng b\u00f9 b\u01d0 w\u01d2 qi\u00e1ng\u3002 y\u00e0o shu\u014d b\u00fa sh\u00ec zh\u00e8 y\u00e0ng\uff0c n\u01d0 d\u00e0o d\u01d0 y\u01d2u sh\u00e9n me l\u00ec li\u00e0ng ne\uff1f sh\u00ec y\u00f2ng zhu\u01ce zi zhu\u0101\uff0c y\u00e1 ch\u01d0 y\u01ceo ma\uff1f n\u01da r\u00e9n t\u00f3ng n\u00e1n r\u00e9n d\u01ce ji\u00e0\uff0c y\u011b hu\u00ec zh\u00e8 me g\u0101n\u3002 w\u01d2 b\u01d0 n\u01d0 qi\u00e1ng d\u00e9 du\u014d\u3002 n\u01d0 y\u00e0o shi yu\u00e0n y\u00ec\uff0c w\u01d2 men l\u00e1i ji\u00e0o li\u00e0ng ji\u00e0o li\u00e0ng ba\uff01 \u201d w\u00e9n z\u01d0 chu\u012b zhe l\u01ce ba ch\u014dng gu\u00f2 q\u00f9\uff0c zhu\u0101n y\u01ceo sh\u012b zi b\u00ed zi zh\u014du w\u00e9i m\u00e9i y\u01d2u m\u00e1o de d\u00ec f\u0101ng\u3002 sh\u012b zi q\u00ec d\u00e9 y\u00f2ng zhu\u01ce zi b\u01ce z\u00ec j\u01d0 de li\u01cen d\u014du zhu\u0101 p\u00f2 le\u3002 w\u00e9n z\u01d0 zh\u00e0n sh\u00e8ng le sh\u012b zi\uff0c y\u00f2u chu\u012b q\u01d0 l\u01ce ba\uff0c ch\u00e0ng zhe k\u01cei g\u0113 f\u0113i z\u01d2u le\uff0c qu\u00e8 b\u00e8i zh\u012b zh\u016b w\u01ceng ni\u00e1n zh\u00f9 le\u3002 w\u00e9n z\u01d0 ji\u0101ng y\u00e0o b\u00e8i ch\u012b di\u00e0o de sh\u00ed h\u00f2u\uff0c t\u00e0n x\u012b shu\u014d\uff1a \u201c w\u01d2 t\u00f3ng zu\u00ec qi\u00e1ng d\u00e0 de d\u00f2ng w\u00f9 d\u014du ji\u00e0o li\u00e0ng gu\u00f2\uff0c b\u00fa li\u00e0o b\u00e8i zh\u00e8 xi\u01ceo xi\u01ceo de zh\u012b zh\u016b xi\u0101o mi\u00e8 le\u3002 \u201d\n zh\u00e8 g\u00f9 sh\u00ec sh\u00ec y\u00f2ng y\u00fa n\u00e0 xi\u0113 d\u01ce b\u00e0i gu\u00f2 d\u00e0 r\u00e9n w\u00f9\uff0c qu\u00e8 b\u00e8i xi\u01ceo r\u00e9n w\u00f9 d\u01ce b\u00e0i de r\u00e9n\u3002",
            "chu\u0101n j\u01d0ng d\u00e9 y\u00ec r\u00e9n\n s\u00f2ng zh\u012b d\u012bng sh\u00ec\uff0c ji\u0101 w\u00fa j\u01d0ng \u00e9r ch\u016b g\u00e0i j\u00ed\uff0c ch\u00e1ng y\u00ec r\u00e9n j\u016b w\u00e0i\u3002 j\u00ed q\u00ed ji\u0101 chu\u0101n j\u01d0ng\uff0c g\u00e0o r\u00e9n yu\u0113\uff1a \u201c w\u00fa chu\u0101n j\u01d0ng d\u00e9 y\u00ec r\u00e9n\u3002 \u201d y\u01d2u w\u00e9n \u00e9r chu\u00e1n zh\u012b zh\u011b\uff1a \u201c d\u012bng sh\u00ec chu\u0101n j\u01d0ng d\u00e9 y\u00ec r\u00e9n\u3002 \u201d gu\u00f3 r\u00e9n d\u00e0o zh\u012b\uff0c w\u00e9n zh\u012b y\u00fa s\u00f2ng j\u016bn\u3002 s\u00f2ng j\u016bn l\u00ecng r\u00e9n w\u00e8n zh\u012b y\u00fa d\u012bng sh\u00ec\uff0c d\u012bng sh\u00ec du\u00ec yu\u0113\uff1a \u201c d\u00e9 y\u00ec r\u00e9n zh\u012b sh\u01d0\uff0c f\u0113i d\u011bi y\u00ec r\u00e9n y\u00fa j\u01d0ng zh\u014dng y\u011b\u3002 \u201d qi\u00fa w\u00e9n zh\u012b ru\u00f2 c\u01d0\uff0c b\u00fa ru\u00f2 w\u00fa w\u00e9n y\u011b\u3002",
            "q\u01d0 r\u00e9n y\u014du ti\u0101n\n q\u01d0 gu\u00f3 y\u01d2u r\u00e9n y\u014du ti\u0101n d\u00ec b\u0113ng zhu\u00ec\uff0c sh\u0113n w\u00e1ng su\u01d2 j\u00ec\uff0c f\u00e8i q\u01d0n sh\u00ed zh\u011b\u3002 y\u00f2u y\u01d2u y\u014du b\u01d0 zh\u012b su\u01d2 y\u014du zh\u011b\uff0c y\u012bn w\u01ceng xi\u01ceo zh\u012b\uff0c yu\u0113\uff1a \u201c ti\u0101n\uff0c j\u012b q\u00ec \u011br\uff0c w\u00e1ng ch\u00f9 w\u00e1ng q\u00ec\u3002 ru\u00f2 q\u016b sh\u0113n h\u016b x\u012b\uff0c zh\u014dng r\u00ec z\u00e0i ti\u0101n zh\u014dng h\u00e1ng zh\u01d0\uff0c n\u00e0i h\u00e9 y\u014du b\u0113ng zhu\u00ec h\u016b\uff1f \u201d q\u00ed r\u00e9n yu\u0113\uff1a \u201c ti\u0101n gu\u01d2 j\u012b q\u00ec\uff0c r\u00ec yu\u00e8 x\u012bng xi\u00f9\uff0c b\u00f9 d\u0101ng zhu\u00ec y\u0113\uff1f \u201d xi\u01ceo zh\u012b zh\u011b yu\u0113\uff1a \u201c r\u00ec yu\u00e8 x\u012bng s\u00f9\uff0c y\u00ec j\u012b q\u00ec zh\u014dng zh\u012b y\u01d2u gu\u0101ng y\u00e0o zh\u011b\uff0c zh\u012b sh\u01d0 zhu\u00ec\uff0c y\u00ec b\u00f9 n\u00e9ng y\u01d2u su\u01d2 zh\u014dng sh\u0101ng\u3002 \u201d q\u00ed r\u00e9n yu\u0113\uff1a \u201c n\u00e0i d\u00ec hu\u00e0i h\u00e9\uff1f \u201d xi\u01ceo zh\u012b zh\u011b yu\u0113\uff1a \u201c d\u00ec\uff0c j\u012b ku\u00e0i \u011br\uff0c ch\u014dng s\u00e8 s\u00ec x\u016b\uff0c w\u00e1ng ch\u00f9 w\u00e1ng ku\u00e0i\u3002 ru\u00f2 ch\u00fa b\u00f9 c\u012b d\u01ceo\uff0c zh\u014dng r\u00ec z\u00e0i d\u00ec sh\u00e0ng x\u00edng zh\u01d0\uff0c n\u00e0i h\u00e9 y\u014du q\u00ed hu\u00e0i\uff1f \u201d q\u00ed r\u00e9n sh\u00e8 r\u00e1n d\u00e0 x\u01d0\uff0c xi\u01ceo zh\u012b zh\u011b y\u00ec sh\u00e8 r\u00e1n d\u00e0 x\u01d0\u3002"
          ],
          annotations: [
            { id: 1, term: "溉汲", pinyin: "gàijí", definition: "打水浇田。", definitionEn: "To draw water for irrigation." },
            { id: 2, term: "晓", pinyin: "xiǎo", definition: "告知，开导。", definitionEn: "To inform, enlighten." },
            { id: 3, term: "舍然", pinyin: "shìrán", definition: "消除疑虑的样子。", definitionEn: "Relieved from doubt." }
          ],
          thinkExplore: [
            { cn: "从《穿井得一人》中，你获得了怎样的启示？", en: "What insight do you gain from 'Getting a Person by Digging a Well'?" },
            { cn: "人们常用\u201C杞人忧天\u201D讽刺不必要的担忧。你同意这种理解吗？", en: "People use 'the man of Qi' to mock unnecessary worry. Do you agree?" }
          ],
          accumExtend: [
            { cn: "任选一则寓言，重新设计情节，赋予新的寓意，改写成新寓言。", en: "Choose one fable, redesign the plot with a new moral, and rewrite it." }
          ],
          teachingPoints: [
            { cn: "对比中西寓言的异同。", en: "Compare Chinese and Western fables." },
            { cn: "学习文言文中\u201C闻\u201D的不同用法。", en: "Learn different usages of 闻 in classical Chinese." }
          ],
          parentTips: [
            { cn: "和孩子分享更多寓言故事，讨论人生道理。", en: "Share more fables and discuss life lessons." }
          ]
        }
      ],
      writing: {
        title: "发挥联想和想象",
        titleEn: "Use Association and Imagination",
        vocabWords: [
          {word:'联想',pinyin:'lián xiǎng',en:'association',sentence:'联想是由一事物想到另一事物。',sentenceEn:'Association is thinking of one thing from another.'},
          {word:'想象',pinyin:'xiǎng xiàng',en:'imagination',sentence:'想象是在头脑中创造新的形象。',sentenceEn:'Imagination is creating new images in the mind.'},
          {word:'触景生情',pinyin:'chù jǐng shēng qíng',en:'scenery stirs feelings',sentence:'触景生情是常用的写法。',sentenceEn:'Being moved by scenery is a common writing technique.'},
          {word:'新颖',pinyin:'xīn yǐng',en:'novel; fresh',sentence:'联想和想象要有新意。',sentenceEn:'Association and imagination should be novel.'},
          {word:'创造',pinyin:'chuàng zào',en:'create',sentence:'想象力是创造性思维的重要源泉。',sentenceEn:'Imagination is an important source of creative thinking.'}
        ],
        content: {
          cn: "联想是由一事物想到与之相关的另一事物，想象则是在头脑中创造出未曾有过的新形象。写作时善于运用联想和想象，可以思接千载，视通万里。注意联想要自然恰切，想象要合情合理，并且要有新意。",
          en: "Association means connecting related things; imagination creates entirely new images. Using both in writing connects across millennia and distances. Association should be natural, imagination reasonable, and both should be fresh and original."
        }
      },
      readWrite: [{
        title: "代词",
        titleEn: "Pronouns",
        vocabWords: [
          {word:'代词',pinyin:'dài cí',en:'pronoun',sentence:'代词是用来代替其他词语的词。',sentenceEn:'Pronouns are words used to replace other words.'},
          {word:'人称代词',pinyin:'rén chēng dài cí',en:'personal pronoun',sentence:'我、你、他、她是人称代词。',sentenceEn:'I, you, he, she are personal pronouns.'},
          {word:'指示代词',pinyin:'zhǐ shì dài cí',en:'demonstrative pronoun',sentence:'这、那、这里、那里是指示代词。',sentenceEn:'This, that, here, there are demonstrative pronouns.'},
          {word:'疑问代词',pinyin:'yí wèn dài cí',en:'interrogative pronoun',sentence:'谁、什么、怎样是疑问代词。',sentenceEn:'Who, what, how are interrogative pronouns.'},
          {word:'指代',pinyin:'zhǐ dài',en:'refer to',sentence:'代词可以指代人、事物或位置。',sentenceEn:'Pronouns can refer to people, things, or locations.'}
        ],
        content: {
          cn: "代词包括人称代词（我、你、他、她等）、指示代词（这、那、这样、那样等）和疑问代词（谁、什么、怎样、哪等）。",
          en: "Pronouns include personal (I, you, he, she), demonstrative (this, that), and interrogative (who, what, how, which) pronouns."
        }
      }],
      comprehensiveLearning: {
        title: "文学部落",
        titleEn: "Literary Colony",
        vocabWords: [
          {word:'文学',pinyin:'wén xué',en:'literature',sentence:'文学是语言的艺术。',sentenceEn:'Literature is the art of language.'},
          {word:'部落',pinyin:'bù luò',en:'colony; community',sentence:'组建属于我们的文学部落。',sentenceEn:'Build a literary community that belongs to us.'},
          {word:'创作',pinyin:'chuàng zuò',en:'create; write',sentence:'鼓励学生进行文学创作。',sentenceEn:'Encourage students to engage in literary creation.'},
          {word:'分享',pinyin:'fēn xiǎng',en:'share',sentence:'分享文学带来的诗意与美。',sentenceEn:'Share the poetry and beauty that literature brings.'},
          {word:'审美',pinyin:'shěn měi',en:'aesthetic appreciation',sentence:'提高审美品位。',sentenceEn:'Improve aesthetic taste.'}
        ],
        content: {
          cn: "文学是语言的艺术，以其独特的美感形式，陶冶性情，滋润心灵。与班级同学共同组建文学兴趣小组，分成小说、戏剧、诗歌、散文等组别，开展读书写作交流会、布置文学角、创立班刊等活动。",
          en: "Literature is the art of language, cultivating character and nourishing the soul. Form literary interest groups with classmates in fiction, drama, poetry, and prose. Hold reading exchanges, set up a literary corner, and create a class journal."
        }
      },
      classicBookGuide: {
        title: "名著导读",
        titleEn: "Classic Reading Guide",
        subtitle: "《西游记》——精读和跳读",
        subtitleEn: "Journey to the West — Close Reading and Skimming",
        vocabWords: [
          {word:'名著',pinyin:'míng zhù',en:'masterpiece',sentence:'阅读经典名著能开阔视野。',sentenceEn:'Reading classic masterpieces broadens horizons.'},
          {word:'导读',pinyin:'dǎo dú',en:'guided reading',sentence:'名著导读帮助理解作品。',sentenceEn:'Guided reading helps understand works.'},
          {word:'鉴赏',pinyin:'jiàn shǎng',en:'appreciate; appraise',sentence:'学会鉴赏文学作品。',sentenceEn:'Learn to appreciate literary works.'},
          {word:'阅读方法',pinyin:'yuè dú fāng fǎ',en:'reading method',sentence:'掌握不同的阅读方法很重要。',sentenceEn:'Mastering different reading methods is important.'},
          {word:'理解',pinyin:'lǐ jiě',en:'understand',sentence:'深入理解作品的思想内涵。',sentenceEn:'Deeply understand the intellectual content of works.'}
        ],
        content: {
          cn: "《西游记》是中国古典文学中最富有想象力的作品之一。小说围绕唐僧师徒四人前往西天取经的主线，写了许多降妖除魔的故事。读此书适合\u201C精读\u201D与\u201C跳读\u201D并用：精读即细读、精思、鉴赏精彩段落；跳读即跳过无关或不精彩的内容以提高效率。",
          en: "Journey to the West is one of the most imaginative works in Chinese classical literature. It follows the monk Tripitaka and his three disciples on their westward journey, encountering many demons. Reading it is best done with both 'close reading' and 'skimming': close reading means careful appreciation of brilliant passages; skimming means skipping irrelevant or unexciting content for efficiency."
        }
      },
      extracurricularPoetry: [
        {
          title: "秋词（其一）",
          titleEn: "Autumn Verse (I)",
          author: "刘禹锡",
          authorEn: "Liu Yuxi",
          dynasty: "唐",
          dynastyEn: "Tang",
          vocabWords: [
            {word:'秋日',pinyin:'qiū rì',en:'autumn day',sentence:'我言秋日胜春朝。',sentenceEn:'I say autumn days surpass spring mornings.'},
            {word:'寂寥',pinyin:'jì liáo',en:'desolate; lonely',sentence:'自古逢秋悲寂寥。',sentenceEn:'Since ancient times, encountering autumn brings sadness and desolation.'},
            {word:'一鹤',pinyin:'yī hè',en:'a single crane',sentence:'晴空一鹤排云上。',sentenceEn:'A single crane soars through the clouds into the clear sky.'},
            {word:'碧霄',pinyin:'bì xiāo',en:'azure sky',sentence:'便引诗情到碧霄。',sentenceEn:'Drawing poetic feeling up to the azure sky.'},
            {word:'乐观',pinyin:'lè guān',en:'optimistic',sentence:'诗人以乐观的态度赞美秋天。',sentenceEn:'The poet praises autumn with an optimistic attitude.'}
          ],
          text: "自古逢秋悲寂寥，我言秋日胜春朝。\n晴空一鹤排云上，便引诗情到碧霄。",
          textEn: "Since ancient times, autumn has evoked sorrow,\nBut I say autumn surpasses spring mornings.\nA single crane soars through clouds in the clear sky,\nDrawing poetic inspiration to the azure heavens."
        },
        {
          title: "夜雨寄北",
          titleEn: "Night Rain, Letter to the North",
          author: "李商隐",
          authorEn: "Li Shangyin",
          dynasty: "唐",
          dynastyEn: "Tang",
          vocabWords: [
            {word:'巴山',pinyin:'bā shān',en:'Ba Mountains',sentence:'君问归期未有期，巴山夜雨涨秋池。',sentenceEn:'You ask when I return, but there is no set date; the night rain on Ba Mountains swells the autumn pools.'},
            {word:'归期',pinyin:'guī qī',en:'date of return',sentence:'君问归期未有期。',sentenceEn:'You ask when I return, but there is no set date.'},
            {word:'秋池',pinyin:'qiū chí',en:'autumn pool',sentence:'巴山夜雨涨秋池。',sentenceEn:'Night rain on Ba Mountains swells the autumn pools.'},
            {word:'西窗',pinyin:'xī chuāng',en:'west window',sentence:'何当共剪西窗烛。',sentenceEn:'When can we trim the candles at the west window together?'},
            {word:'却话',pinyin:'què huà',en:'then talk about',sentence:'却话巴山夜雨时。',sentenceEn:'And then talk about this night of rain on Ba Mountains.'}
          ],
          text: "君问归期未有期，巴山夜雨涨秋池。\n何当共剪西窗烛，却话巴山夜雨时。",
          textEn: "You ask when I'll return — no date is set;\nNight rain on Ba Mountain fills the autumn pool.\nWhen shall we trim candles by the western window,\nAnd talk of this night of rain on Ba Mountain?"
        },
        {
          title: "十一月四日风雨大作（其二）",
          titleEn: "A Great Storm on the Fourth of the Eleventh Month (II)",
          author: "陆游",
          authorEn: "Lu You",
          dynasty: "宋",
          dynastyEn: "Song",
          vocabWords: [
            {word:'僵卧',pinyin:'jiāng wò',en:'lying stiff in bed',sentence:'僵卧孤村不自哀。',sentenceEn:'Lying stiff in a lonely village, I do not feel sorry for myself.'},
            {word:'戍轮台',pinyin:'shù lún tái',en:'guard the frontier',sentence:'尚思为国戍轮台。',sentenceEn:'I still think of guarding the frontier for my country.'},
            {word:'铁马',pinyin:'tiě mǎ',en:'armored horses',sentence:'夜阑卧听风吹雨，铁马冰河入梦来。',sentenceEn:'Late at night, lying and listening to wind and rain, armored horses and frozen rivers enter my dreams.'},
            {word:'夜阑',pinyin:'yè lán',en:'deep in the night',sentence:'夜阑卧听风吹雨。',sentenceEn:'Late at night, lying and listening to wind and rain.'},
            {word:'爱国',pinyin:'ài guó',en:'patriotic',sentence:'诗人在风雨之夜抒发爱国之情。',sentenceEn:'The poet expresses patriotic feelings on a stormy night.'}
          ],
          text: "僵卧孤村不自哀，尚思为国戍轮台。\n夜阑卧听风吹雨，铁马冰河入梦来。",
          textEn: "Lying stiff in a lonely village, I do not grieve,\nStill dreaming of guarding the frontier for my country.\nDeep in the night, listening to wind and rain,\nArmored horses crossing frozen rivers enter my dreams."
        },
        {
          title: "潼关",
          titleEn: "Tongguan Pass",
          author: "谭嗣同",
          authorEn: "Tan Sitong",
          dynasty: "清",
          dynastyEn: "Qing",
          vocabWords: [
            {word:'潼关',pinyin:'tóng guān',en:'Tongguan Pass',sentence:'终古高云簇此城。',sentenceEn:'Since ancient times, lofty clouds cluster around this fortress.'},
            {word:'秋风',pinyin:'qiū fēng',en:'autumn wind',sentence:'秋风吹散马蹄声。',sentenceEn:'The autumn wind scatters the sound of hoofbeats.'},
            {word:'河流',pinyin:'hé liú',en:'river',sentence:'河流大野犹嫌束。',sentenceEn:'The river across the great plain still finds it confining.'},
            {word:'山势',pinyin:'shān shì',en:'mountain terrain',sentence:'山入潼关不解平。',sentenceEn:'Mountains entering Tongguan do not know how to be flat.'},
            {word:'豪情',pinyin:'háo qíng',en:'heroic spirit',sentence:'少年诗人的豪情壮志。',sentenceEn:'The heroic spirit and great ambition of the young poet.'}
          ],
          text: "终古高云簇此城，秋风吹散马蹄声。\n河流大野犹嫌束，山入潼关不解平。",
          textEn: "Since ancient times, high clouds cluster around this city;\nAutumn wind scatters the sound of hoofbeats.\nThe river through vast plains still feels constrained;\nMountains entering Tongguan know not how to be level."
        }
      ]
    }
  ]
};
