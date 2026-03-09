/**
 * 字道 ZiDao — 部编版二年级语文下册 教材数据
 * Grade 2 Semester 2 Textbook Data (PEP Edition)
 * Based on: 义务教育教科书 语文 二年级下册 (2017)
 */
var TB_G2S2 = {
grade: 2, semester: 2,
totalRecogChars: 450,
totalWriteChars: 250,
units: [
/* ═══════════════════════════════════════════ */
/*  UNIT 1 — 课文 Texts (Lessons 1-4)         */
/* ═══════════════════════════════════════════ */
{
  id: 1, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 1, title: "古诗二首", titleEn: "Two Ancient Poems",
      difficulty: 1,
      text: [
        "村居 [清]高鼎",
        "草长莺飞二月天，拂堤杨柳醉春烟。",
        "儿童散学归来早，忙趁东风放纸鸢。",
        "咏柳 [唐]贺知章",
        "碧玉妆成一树高，万条垂下绿丝绦。",
        "不知细叶谁裁出，二月春风似剪刀。"
      ],
      textEn: [
        "Village Life [Qing] Gao Ding",
        "Grass grows and orioles fly in the second month of spring; willows caress the embankment, drunk on spring haze.",
        "Children come home early from school, busy flying kites in the east wind.",
        "Ode to the Willow [Tang] He Zhizhang",
        "Like jade adorning a tall tree, ten thousand strands of green silk hang down.",
        "Who knows who cut the slender leaves? The February spring breeze is like scissors."
      ],
      textPinyin: [
        "cūn jū [qīng] gāo dǐng",
        "cǎo zhǎng yīng fēi èr yuè tiān, fú dī yáng liǔ zuì chūn yān.",
        "ér tóng sàn xué guī lái zǎo, máng chèn dōng fēng fàng zhǐ yuān.",
        "yǒng liǔ [táng] hè zhī zhāng",
        "bì yù zhuāng chéng yī shù gāo, wàn tiáo chuí xià lǜ sī tāo.",
        "bù zhī xì yè shuí cái chū, èr yuè chūn fēng sì jiǎn dāo."
      ],
      recognizeChars: ["莺","拂","堤","柳","醉","咏","妆","丝","绦","裁","剪"],
      writeChars: ["诗","童","趁","碧","妆","绿","丝","剪"],
      vocabWords: [
        {word:'村庄',pinyin:'cūn zhuāng',en:'village',sentence:'草长莺飞二月天。',sentenceEn:'Grass grows and orioles fly in February.'},
        {word:'堤岸',pinyin:'dī àn',en:'embankment',sentence:'拂堤杨柳醉春烟。',sentenceEn:'Willows brush the embankment in spring haze.'},
        {word:'纸鸢',pinyin:'zhǐ yuān',en:'kite',sentence:'忙趁东风放纸鸢。',sentenceEn:'Hurry to fly kites in the east wind.'},
        {word:'绝句',pinyin:'jué jù',en:'quatrain',sentence:'迟日江山丽。',sentenceEn:'Slow sun, beautiful land and river.'},
        {word:'春风',pinyin:'chūn fēng',en:'spring breeze',sentence:'春风花草香。',sentenceEn:'Spring wind, flowers and grass fragrant.'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文，背诵课文",en:"Read aloud and recite"},
        {type:"discuss",cn:"想象诗中描写的春天景象",en:"Imagine the spring scenes described in the poems"}
      ],
      teachingPoints: [
        {cn:"感受古诗中春天的美景",en:"Feel the beauty of spring in ancient poetry"},
        {cn:"理解\u201C二月春风似剪刀\u201D的比喻",en:"Understand the metaphor: spring breeze like scissors"},
        {cn:"了解诗人高鼎和贺知章",en:"Learn about poets Gao Ding and He Zhizhang"}
      ],
      parentTips: [
        {cn:"春天带孩子户外观察柳树发芽",en:"Take kids outdoors in spring to observe willow buds"},
        {cn:"帮助孩子背诵这两首古诗",en:"Help your child memorize both poems"}
      ]
    },
    {
      id: 2, title: "找春天", titleEn: "Finding Spring",
      difficulty: 1,
      text: [
        "春天来了！春天来了！",
        "我们几个孩子，脱掉棉袄，冲出家门，奔向田野，去寻找春天。",
        "春天像个害羞的小姑娘，遮遮掩掩，躲躲藏藏。我们仔细地找哇，找哇。",
        "小草从地下探出头来，那是春天的眉毛吧？",
        "早开的野花一朵两朵，那是春天的眼睛吧？",
        "树木吐出点点嫩芽，那是春天的音符吧？",
        "解冻的小溪丁丁冬冬，那是春天的琴声吧？",
        "春天来了！我们看到了她，我们听到了她，我们闻到了她，我们触到了她。她在柳枝上荡秋千，在风筝尾巴上摇哇摇；她在喜鹊、杜鹃嘴里叫，在桃花、杏花枝头笑……"
      ],
      textEn: [
        "Spring is here! Spring is here!",
        "A few of us children took off our coats, rushed out the door, and ran to the fields to find spring.",
        "Spring is like a shy little girl, hiding and peeking. We searched carefully, searching and searching.",
        "Little grass pokes its head out of the ground \u2014 are those spring\u2019s eyebrows?",
        "A wild flower or two blooms early \u2014 are those spring\u2019s eyes?",
        "Trees sprout tiny buds \u2014 are those spring\u2019s musical notes?",
        "The thawing stream tinkles \u2014 is that spring\u2019s music?",
        "Spring is here! We see her, hear her, smell her, touch her. She swings on willow branches, sways on kite tails; she calls from magpies and cuckoos, smiles on peach and apricot blossoms..."
      ],
      textPinyin: [
        "chūn tiān lái le! chūn tiān lái le!",
        "wǒ men jǐ gè hái zi, tuō diào mián ǎo, chōng chū jiā mén, bēn xiàng tián yě, qù xún zhǎo chūn tiān.",
        "chūn tiān xiàng gè hài xiū de xiǎo gū niang, zhē zhē yǎn yǎn, duǒ duǒ cáng cáng. wǒ men zǐ xì de zhǎo wa, zhǎo wa.",
        "xiǎo cǎo cóng dì xià tàn chū tóu lái, nà shì chūn tiān de méi mao ba?",
        "zǎo kāi de yě huā yī duǒ liǎng duǒ, nà shì chūn tiān de yǎn jīng ba?",
        "shù mù tǔ chū diǎn diǎn nèn yá, nà shì chūn tiān de yīn fú ba?",
        "jiě dòng de xiǎo xī dīng dīng dōng dōng, nà shì chūn tiān de qín shēng ba?",
        "chūn tiān lái le! wǒ men kàn dào le tā, wǒ men tīng dào le tā, wǒ men wén dào le tā, wǒ men chù dào le tā. tā zài liǔ zhī shàng dàng qiū qiān, zài fēng zhēng wěi ba shàng yáo wa yáo; tā zài xǐ què, dù juān zuǐ lǐ jiào, zài táo huā, xìng huā zhī tóu xiào..."
      ],
      recognizeChars: ["脱","袄","冲","寻","姑","娘","仔","吐","柳","荡","桃","杏"],
      writeChars: ["冲","寻","姑","娘","仔","吐","柳","荡","桃","杏"],
      vocabWords: [
        {word:'春天',pinyin:'chūn tiān',en:'spring',sentence:'春天来了！我们去找春天。',sentenceEn:'Spring is here! Let us find spring.'},
        {word:'嫩芽',pinyin:'nèn yá',en:'tender bud',sentence:'小草从地下探出头来。',sentenceEn:'Little grass pokes out its head from underground.'},
        {word:'解冻',pinyin:'jiě dòng',en:'thaw',sentence:'小溪丁丁冬冬。',sentenceEn:'The brook goes ding-dong.'},
        {word:'野花',pinyin:'yě huā',en:'wildflower',sentence:'野花一朵两朵。',sentenceEn:'Wildflowers, one, two.'},
        {word:'探出',pinyin:'tàn chū',en:'poke out',sentence:'小草从地下探出头来。',sentenceEn:'Grass pokes its head above ground.'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"说说你找到的春天是什么样的",en:"Describe the spring you\u2019ve found"}
      ],
      teachingPoints: [
        {cn:"学习用比喻描写春天",en:"Learn to describe spring using metaphors"},
        {cn:"体会排比句的节奏感",en:"Feel the rhythm of parallel sentences"},
        {cn:"培养观察自然的习惯",en:"Develop the habit of observing nature"}
      ],
      parentTips: [
        {cn:"带孩子到户外寻找春天的迹象",en:"Take kids outdoors to find signs of spring"},
        {cn:"鼓励孩子仿照课文说说自己发现的春天",en:"Encourage kids to describe spring they\u2019ve discovered, following the text\u2019s pattern"}
      ]
    },
    {
      id: 3, title: "开满鲜花的小路", titleEn: "The Path Full of Flowers",
      difficulty: 1,
      text: [
        "鼹鼠先生收到长颈鹿大叔寄来的包裹。他走到邮局去领包裹。",
        "他拿着包裹，往家走。走着走着，他看见包裹上有个洞。他赶紧堵住了洞。到了家，他打开包裹一看，里面空空的，什么也没有。",
        "他跑去问松鼠太太：\u201C你知道长颈鹿大叔给我寄了什么东西吗？\u201D",
        "松鼠太太说不知道。刺猬太太也不知道。",
        "春天来了。鼹鼠先生走出门一看，呀！门前的小路上，开满了鲜花，五颜六色的鲜花好看极了。",
        "\u201C多美啊！\u201D松鼠太太从小路走过来。",
        "\u201C这是谁在我家门前种的花？真美啊！\u201D鼹鼠先生也很奇怪。",
        "这时候，长颈鹿大叔寄来一封信：\u201C亲爱的鼹鼠先生，去年我给你寄了一包花籽。你收到了吗？祝你春天快乐！\u201D",
        "原来，去年包裹里的花籽，从破洞里漏了出来，春天到了就开花了。",
        "\u201C多么美好的礼物啊！\u201D鼹鼠先生高兴地说。"
      ],
      textEn: [
        "Mr. Mole received a package from Uncle Giraffe. He went to the post office to pick it up.",
        "He carried the package and headed home. As he walked along, he noticed a hole in the package. He quickly plugged the hole. When he got home, he opened the package and looked inside \u2014 it was completely empty, with nothing in it at all.",
        "He ran to ask Mrs. Squirrel: \u201CDo you know what Uncle Giraffe sent me?\u201D",
        "Mrs. Squirrel didn\u2019t know. Mrs. Hedgehog didn\u2019t know either.",
        "Spring came. Mr. Mole walked out and saw \u2014 oh! The little path was full of flowers, beautiful in all colors.",
        "\u201CHow beautiful!\u201D said Mrs. Squirrel, walking along the path.",
        "\u201CWho planted flowers at my door? How lovely!\u201D Mr. Mole was puzzled too.",
        "Then Uncle Giraffe sent a letter: \u201CDear Mr. Mole, last year I sent you a bag of flower seeds. Did you receive them? Happy spring!\u201D",
        "It turned out the seeds had leaked from the hole in the package, and bloomed when spring arrived.",
        "\u201CWhat a wonderful gift!\u201D said Mr. Mole happily."
      ],
      textPinyin: [
        "yǎn shǔ xiān sheng shōu dào cháng jǐng lù dà shū jì lái de bāo guǒ. tā zǒu dào yóu jú qù lǐng bāo guǒ.",
        "tā ná zhe bāo guǒ, wǎng jiā zǒu. zǒu zhe zǒu zhe, tā kàn jiàn bāo guǒ shàng yǒu gè dòng. tā gǎn jǐn dǔ zhù le dòng. dào le jiā, tā dǎ kāi bāo guǒ yī kàn, lǐ miàn kōng kōng de, shén me yě méi yǒu.",
        "tā pǎo qù wèn sōng shǔ tài tai: \u201Cnǐ zhī dào cháng jǐng lù dà shū gěi wǒ jì le shén me dōng xi ma?\u201D",
        "sōng shǔ tài tai shuō bù zhī dào. cì wei tài tai yě bù zhī dào.",
        "chūn tiān lái le. yǎn shǔ xiān sheng zǒu chū mén yī kàn, ya! mén qián de xiǎo lù shàng, kāi mǎn le xiān huā, wǔ yán liù sè de xiān huā hǎo kàn jí le.",
        "\u201Cduō měi a!\u201D sōng shǔ tài tai cóng xiǎo lù zǒu guò lái.",
        "\u201Czhè shì shuí zài wǒ jiā mén qián zhǒng de huā? zhēn měi a!\u201D yǎn shǔ xiān sheng yě hěn qí guài.",
        "zhè shí hou, cháng jǐng lù dà shū jì lái yī fēng xìn: \u201Cqīn ài de yǎn shǔ xiān sheng, qù nián wǒ gěi nǐ jì le yī bāo huā zǐ. nǐ shōu dào le ma? zhù nǐ chūn tiān kuài lè!\u201D",
        "yuán lái, qù nián bāo guǒ lǐ de huā zǐ, cóng pò dòng lǐ lòu le chū lái, chūn tiān dào le jiù kāi huā le.",
        "\u201Cduō me měi hǎo de lǐ wù a!\u201D yǎn shǔ xiān sheng gāo xìng de shuō."
      ],
      recognizeChars: ["鲜","邮","递","员","原","叔","局","堆","认","礼"],
      writeChars: ["鲜","邮","递","员","原","叔","局","堆","认","礼"],
      vocabWords: [
        {word:'邮递员',pinyin:'yóu dì yuán',en:'postman',sentence:'邮递员黄狗送来包裹。',sentenceEn:'Postman Yellow Dog delivered a package.'},
        {word:'包裹',pinyin:'bāo guǒ',en:'package',sentence:'一个包裹破了。',sentenceEn:'A package was torn.'},
        {word:'鲜花',pinyin:'xiān huā',en:'fresh flowers',sentence:'小路上开满了鲜花。',sentenceEn:'The path was full of fresh flowers.'},
        {word:'绚丽',pinyin:'xuàn lì',en:'gorgeous',sentence:'多么绚丽的花朵！',sentenceEn:'How gorgeous the flowers are!'},
        {word:'惊奇',pinyin:'jīng qí',en:'surprised',sentence:'大家都很惊奇。',sentenceEn:'Everyone was surprised.'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"鼹鼠先生门前为什么开满了鲜花？",en:"Why was Mr. Mole\u2019s path full of flowers?"}
      ],
      teachingPoints: [
        {cn:"理解故事中的意外之喜",en:"Understand the unexpected joy in the story"},
        {cn:"体会\u201C美好的礼物\u201D的含义",en:"Appreciate the meaning of \u201Ca wonderful gift\u201D"}
      ],
      parentTips: [
        {cn:"和孩子一起种花，体验种植的乐趣",en:"Plant flowers together to enjoy gardening"},
        {cn:"讨论什么是\u201C美好的礼物\u201D",en:"Discuss what makes a \u201Cwonderful gift\u201D"}
      ]
    },
    {
      id: 4, title: "邓小平爷爷植树", titleEn: "Grandpa Deng Xiaoping Plants Trees",
      difficulty: 1,
      text: [
        "1987年4月5日，是个令人难忘的日子。",
        "这天，万里无云，春风拂面。在天坛公园植树的人群里，83岁高龄的邓小平爷爷格外引人注目。只见他手握铁锹，兴致勃勃地挖着树坑。",
        "一个树坑挖好了。邓爷爷精心地挑选了一棵茁壮的柏树苗，小心地移入树坑，又挥锹填了几锹土。他站到几步远的地方仔细看看，觉得不很直，连声说：\u201C不行，不行！\u201D他又走上前把树苗扶正。",
        "一棵绿油油的小柏树栽好了，就像战士一样笔直地站在那里。邓爷爷的脸上露出了满意的笑容。",
        "今天，邓小平爷爷亲手栽种的柏树已经长大了，成了天坛公园一处美丽的风景。"
      ],
      textEn: [
        "April 5, 1987, was an unforgettable day.",
        "The sky was cloudless, spring breeze gentle. Among the people planting trees in the Temple of Heaven Park, 83-year-old Grandpa Deng Xiaoping stood out. He held a shovel, enthusiastically digging a hole.",
        "When the hole was ready, Grandpa Deng carefully selected a sturdy cypress sapling, gently placed it in the hole, and shoveled in some soil. He stepped back to check \u2014 it wasn\u2019t quite straight. \u201CNo, no!\u201D he said repeatedly, then went back to straighten the sapling.",
        "A green little cypress was planted, standing straight like a soldier. Grandpa Deng\u2019s face showed a satisfied smile.",
        "Today, the cypress that Grandpa Deng Xiaoping planted with his own hands has grown tall, becoming a beautiful sight in the Temple of Heaven Park."
      ],
      textPinyin: [
        "yī jiǔ bā qī nián sì yuè wǔ rì, shì gè lìng rén nán wàng de rì zi.",
        "zhè tiān, wàn lǐ wú yún, chūn fēng fú miàn. zài tiān tán gōng yuán zhí shù de rén qún lǐ, bā shí sān suì gāo líng de dèng xiǎo píng yé ye gé wài yǐn rén zhù mù. zhǐ jiàn tā shǒu wò tiě qiāo, xìng zhì bó bó de wā zhe shù kēng.",
        "yī gè shù kēng wā hǎo le. dèng yé ye jīng xīn de tiāo xuǎn le yī kē zhuó zhuàng de bǎi shù miáo, xiǎo xīn de yí rù shù kēng, yòu huī qiāo tián le jǐ qiāo tǔ. tā zhàn dào jǐ bù yuǎn de dì fang zǐ xì kàn kan, jué de bù hěn zhí, lián shēng shuō: \u201Cbù xíng, bù xíng!\u201D tā yòu zǒu shàng qián bǎ shù miáo fú zhèng.",
        "yī kē lǜ yóu yóu de xiǎo bǎi shù zāi hǎo le, jiù xiàng zhàn shì yī yàng bǐ zhí de zhàn zài nà lǐ. dèng yé ye de liǎn shàng lù chū le mǎn yì de xiào róng.",
        "jīn tiān, dèng xiǎo píng yé ye qīn shǒu zāi zhǒng de bǎi shù yǐ jīng zhǎng dà le, chéng le tiān tán gōng yuán yī chù měi lì de fēng jǐng."
      ],
      recognizeChars: ["邓","植","格","引","注","满","休","息"],
      writeChars: ["邓","植","格","引","注","满","休","息"],
      vocabWords: [
        {word:'植树',pinyin:'zhí shù',en:'plant trees',sentence:'邓爷爷去植树。',sentenceEn:'Grandpa Deng went to plant trees.'},
        {word:'碧绿',pinyin:'bì lǜ',en:'emerald green',sentence:'碧绿的小柏树。',sentenceEn:'An emerald green little cypress.'},
        {word:'挖坑',pinyin:'wā kēng',en:'dig a hole',sentence:'邓爷爷精心地挖坑。',sentenceEn:'Grandpa Deng carefully dug holes.'},
        {word:'培土',pinyin:'péi tǔ',en:'add soil',sentence:'培土、浇水。',sentenceEn:'Add soil and water.'},
        {word:'挺立',pinyin:'tǐng lì',en:'stand tall',sentence:'小柏树挺立在春风里。',sentenceEn:'The cypress stands tall in the spring wind.'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"邓爷爷植树时是怎么做的？",en:"How did Grandpa Deng plant the tree?"}
      ],
      teachingPoints: [
        {cn:"学习邓爷爷认真做事的精神",en:"Learn Grandpa Deng\u2019s spirit of doing things carefully"},
        {cn:"了解植树节的意义",en:"Understand the meaning of Arbor Day"},
        {cn:"体会\u201C格外引人注目\u201D\u201C兴致勃勃\u201D等词语",en:"Appreciate phrases like \u201Cespecially eye-catching\u201D and \u201Centhusiastic\u201D"}
      ],
      parentTips: [
        {cn:"和孩子一起参加植树活动",en:"Participate in tree-planting activities together"},
        {cn:"培养孩子认真做事的态度",en:"Cultivate a careful attitude in children"}
      ]
    }
  ],
  oralComm: {title:"注意说话的语气",titleEn:"Pay Attention to Tone of Voice",prompt:{cn:"同样的话用不同的语气说，效果不一样。注意说话的语气",en:"The same words sound different with different tones. Pay attention to how you speak"}},
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"赋得古原草送别 [唐]白居易（节选）\n离离原上草，一岁一枯荣。野火烧不尽，春风吹又生。",en:"Grass on the Ancient Plain [Tang] Bai Juyi (excerpt)\nLush grass on the plain, withering and flourishing year by year. Wildfire cannot burn it all; spring breeze blows and it grows again."}},
    funReading: {title:"快乐读书吧",titleEn:"Happy Reading Corner",content:{cn:"读读儿童故事",en:"Read children\u2019s stories"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 2 — 课文 Texts (Lessons 5-7)         */
/* ═══════════════════════════════════════════ */
{
  id: 2, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 5, title: "雷锋叔叔，你在哪里", titleEn: "Uncle Lei Feng, Where Are You?",
      difficulty: 1,
      text: [
        "沿着长长的小溪，寻找雷锋的足迹。雷锋叔叔，你在哪里，你在哪里？",
        "小溪说：昨天，他曾路过这里，抱着迷路的孩子，冒着蒙蒙的细雨。瞧，那泥泞路上的脚窝，就是他留下的足迹。",
        "顺着弯弯的小路，寻找雷锋的足迹。雷锋叔叔，你在哪里，你在哪里？",
        "小路说：昨天，他曾路过这里，背着年迈的大娘，踏着路上的荆棘。瞧，那花瓣上晶莹的露珠，就是他洒下的汗滴。",
        "乘着温暖的春风，我们四处寻觅。啊，终于找到了——哪里需要献出爱心，雷锋叔叔就出现在哪里。"
      ],
      textEn: [
        "Along the long creek, searching for Lei Feng\u2019s footprints. Uncle Lei Feng, where are you, where are you?",
        "The creek says: yesterday, he passed by here, carrying a lost child in the misty rain. Look, those footprints in the muddy road are the traces he left.",
        "Along the winding path, searching for Lei Feng\u2019s footprints. Uncle Lei Feng, where are you, where are you?",
        "The path says: yesterday, he passed by here, carrying an elderly grandmother on his back, stepping through thorns. Look, those crystal dewdrops on the petals are the sweat he shed.",
        "Riding the warm spring breeze, we search everywhere. Ah, we finally found him \u2014 wherever love is needed, Uncle Lei Feng appears."
      ],
      textPinyin: [
        "yán zhe cháng cháng de xiǎo xī, xún zhǎo léi fēng de zú jì. léi fēng shū shu, nǐ zài nǎ lǐ, nǐ zài nǎ lǐ?",
        "xiǎo xī shuō: zuó tiān, tā céng lù guò zhè lǐ, bào zhe mí lù de hái zi, mào zhe méng méng de xì yǔ. qiáo, nà ní nìng lù shàng de jiǎo wō, jiù shì tā liú xià de zú jì.",
        "shùn zhe wān wān de xiǎo lù, xún zhǎo léi fēng de zú jì. léi fēng shū shu, nǐ zài nǎ lǐ, nǐ zài nǎ lǐ?",
        "xiǎo lù shuō: zuó tiān, tā céng lù guò zhè lǐ, bēi zhe nián mài de dà niáng, tà zhe lù shàng de jīng jí. qiáo, nà huā bàn shàng jīng yíng de lù zhū, jiù shì tā sǎ xià de hàn dī.",
        "chéng zhe wēn nuǎn de chūn fēng, wǒ men sì chù xún mì. a, zhōng yú zhǎo dào le—nǎ lǐ xū yào xiàn chū ài xīn, léi fēng shū shu jiù chū xiàn zài nǎ lǐ."
      ],
      recognizeChars: ["锋","昨","冒","留","弯","背","洒","温","暖"],
      writeChars: ["锋","昨","冒","留","弯","背","洒","温","暖"],
      vocabWords: [
        {word:'雷锋',pinyin:'léi fēng',en:'Lei Feng',sentence:'雷锋叔叔，你在哪里？',sentenceEn:'Uncle Lei Feng, where are you?'},
        {word:'足迹',pinyin:'zú jì',en:'footprint',sentence:'沿着长长的小溪寻找足迹。',sentenceEn:'Following footprints along the long brook.'},
        {word:'泥泞',pinyin:'ní nìng',en:'muddy',sentence:'踏着泥泞的道路。',sentenceEn:'Walking on the muddy road.'},
        {word:'年迈',pinyin:'nián mài',en:'elderly',sentence:'背着年迈的大娘。',sentenceEn:'Carrying an elderly woman on his back.'},
        {word:'温暖',pinyin:'wēn nuǎn',en:'warm',sentence:'哪里需要帮助，哪里就有温暖。',sentenceEn:'Where there is need, there is warmth.'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"雷锋叔叔在哪里？他做了什么？",en:"Where is Uncle Lei Feng? What did he do?"}
      ],
      teachingPoints: [
        {cn:"了解雷锋的事迹和精神",en:"Learn about Lei Feng\u2019s deeds and spirit"},
        {cn:"体会诗歌的节奏和韵律",en:"Feel the rhythm and rhyme of the poem"}
      ],
      parentTips: [
        {cn:"和孩子聊聊身边助人为乐的事",en:"Talk about helpful deeds around you"},
        {cn:"鼓励孩子做力所能及的好事",en:"Encourage children to do good deeds within their ability"}
      ]
    },
    {
      id: 6, title: "千人糕", titleEn: "Thousand-People Cake",
      difficulty: 1,
      text: [
        "一天，孩子说：\u201C爸爸，这是什么糕？\u201D",
        "爸爸说：\u201C你尝尝，看能不能猜出来。\u201D",
        "孩子吃了一口，说：\u201C很好吃。这糕是怎么做的？\u201D",
        "\u201C你能猜到是什么糕吗？\u201D",
        "孩子想了想：\u201C是鸡蛋糕吗？\u201D",
        "\u201C不，是千人糕。\u201D",
        "\u201C千人糕？难道它是一千个人做的？\u201D",
        "爸爸说：\u201C是的，你想想看。一块平平常常的糕，要经过很多很多人的劳动，才能摆到我们面前。\u201D",
        "\u201C先得种稻子。光有种子不行，还得有人翻土、播种、施肥、浇水、收割，一直到成为大米。然后还需要磨面粉，加上糖。\u201D",
        "\u201C糖呢？要用甘蔗来做。甘蔗也要经过种植、收割、加工，才能变成糖。\u201D",
        "\u201C就算糕做好了，还需要包装、运输、销售……你看，一块糕，经过了多少人的劳动。是不是可以叫千人糕了？\u201D",
        "孩子听了爸爸的话，仔细想了想，说：\u201C爸爸，这糕的确应该叫千人糕啊！\u201D"
      ],
      textEn: [
        "One day, the child asked: \u201CDad, what kind of cake is this?\u201D",
        "Dad said: \u201CTaste it and see if you can guess.\u201D",
        "The child took a bite: \u201CIt\u2019s delicious. How is it made?\u201D",
        "\u201CCan you guess what it\u2019s called?\u201D",
        "The child thought: \u201CIs it egg cake?\u201D",
        "\u201CNo, it\u2019s thousand-people cake.\u201D",
        "\u201CThousand-people cake? Was it really made by a thousand people?\u201D",
        "Dad said: \u201CYes, think about it. An ordinary, plain cake must go through the labor of very, very many people before it can be placed in front of us.\u201D",
        "\u201CFirst, rice must be grown. Seeds alone aren\u2019t enough \u2014 people must plow, sow, fertilize, water, and harvest, all the way until it becomes rice. Then it needs to be ground into flour, with sugar added.\u201D",
        "\u201CAnd sugar? It\u2019s made from sugarcane. Sugarcane also needs planting, harvesting, and processing to become sugar.\u201D",
        "\u201CEven after the cake is made, it needs packaging, transportation, and selling... See how many people\u2019s labor goes into one cake. Can\u2019t we call it thousand-people cake?\u201D",
        "The child thought carefully and said: \u201CDad, this cake really should be called thousand-people cake!\u201D"
      ],
      textPinyin: [
        "yī tiān, hái zi shuō: \u201Cbà ba, zhè shì shén me gāo?\u201D",
        "bà ba shuō: \u201Cnǐ cháng cháng, kàn néng bù néng cāi chū lái.\u201D",
        "hái zi chī le yī kǒu, shuō: \u201Chěn hǎo chī. zhè gāo shì zěn me zuò de?\u201D",
        "\u201Cnǐ néng cāi dào shì shén me gāo ma?\u201D",
        "hái zi xiǎng le xiǎng: \u201Cshì jī dàn gāo ma?\u201D",
        "\u201Cbù, shì qiān rén gāo.\u201D",
        "\u201Cqiān rén gāo? nán dào tā shì yī qiān gè rén zuò de?\u201D",
        "bà ba shuō: \u201Cshì de, nǐ xiǎng xiǎng kàn. yī kuài píng píng cháng cháng de gāo, yào jīng guò hěn duō hěn duō rén de láo dòng, cái néng bǎi dào wǒ men miàn qián.\u201D",
        "\u201Cxiān děi zhǒng dào zi. guāng yǒu zhǒng zi bù xíng, hái děi yǒu rén fān tǔ, bō zhǒng, shī féi, jiāo shuǐ, shōu gē, yī zhí dào chéng wéi dà mǐ. rán hòu hái xū yào mó miàn fěn, jiā shàng táng.\u201D",
        "\u201Ctáng ne? yào yòng gān zhe lái zuò. gān zhe yě yào jīng guò zhǒng zhí, shōu gē, jiā gōng, cái néng biàn chéng táng.\u201D",
        "\u201Cjiù suàn gāo zuò hǎo le, hái xū yào bāo zhuāng, yùn shū, xiāo shòu... nǐ kàn, yī kuài gāo, jīng guò le duō shǎo rén de láo dòng. shì bú shì kě yǐ jiào qiān rén gāo le?\u201D",
        "hái zi tīng le bà ba de huà, zǐ xì xiǎng le xiǎng, shuō: \u201Cbà ba, zhè gāo dí què yīng gāi jiào qiān rén gāo a!\u201D"
      ],
      recognizeChars: ["能","桌","味","买","具","甘","甜","菜","劳","的","确","应"],
      writeChars: ["能","桌","味","买","具","甘","甜","菜","劳"],
      vocabWords: [
        {word:'米糕',pinyin:'mǐ gāo',en:'rice cake',sentence:'一块平平常常的米糕。',sentenceEn:'An ordinary rice cake.'},
        {word:'工人',pinyin:'gōng rén',en:'worker',sentence:'种稻子的农民，磨面的工人。',sentenceEn:'Farmers who grow rice, workers who grind flour.'},
        {word:'劳动',pinyin:'láo dòng',en:'labor',sentence:'需要很多人的劳动。',sentenceEn:'Needs the labor of many people.'},
        {word:'感谢',pinyin:'gǎn xiè',en:'thank',sentence:'要感谢大家的付出。',sentenceEn:'We should thank everyone for their effort.'},
        {word:'合作',pinyin:'hé zuò',en:'cooperate',sentence:'人们互相合作。',sentenceEn:'People cooperate with each other.'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"为什么叫\u201C千人糕\u201D？",en:"Why is it called \u201Cthousand-people cake\u201D?"}
      ],
      teachingPoints: [
        {cn:"理解劳动分工和社会合作",en:"Understand division of labor and social cooperation"},
        {cn:"珍惜劳动成果，尊重每一个劳动者",en:"Cherish the fruits of labor and respect every worker"}
      ],
      parentTips: [
        {cn:"和孩子一起想想一件物品需要多少人的劳动",en:"Think together about how many people\u2019s labor goes into making something"},
        {cn:"培养孩子珍惜食物的习惯",en:"Cultivate the habit of cherishing food"}
      ]
    },
    {
      id: 7, title: "一匹出色的马", titleEn: "An Excellent Horse",
      difficulty: 1,
      text: [
        "一个春天的傍晚，妈妈牵着妹妹，爸爸牵着我，一家人沿着弯弯的小路，到郊外去散步。",
        "路的一边是田野，葱葱绿绿的，非常可爱，像一片柔软的绿毯。",
        "路的另一边是小河。河水碧绿碧绿的，微风吹过，泛起层层波纹，好看得很。",
        "我们一边看，一边走，路已经走了不少，却还恋恋不舍，不想回去。",
        "当我们往回走的时候，妹妹求妈妈抱她：\u201C我很累，走不动了，抱抱我。\u201D",
        "妈妈摇摇头，说：\u201C不行啊，我也很累，抱不动你了。\u201D",
        "妹妹转过头来求爸爸。爸爸不作声，他在路旁的一株柳树下，拾起一根又长又细的枝条，把它递给了妹妹，说：\u201C这是一匹出色的马！你走不动了，就骑着它回家吧。\u201D",
        "妹妹高兴地跨上\u201C马\u201D，蹦蹦跳跳地奔向前去。等我们回到家时，她已经在门口迎接我们了。",
        "\u201C我的马真出色！\u201D妹妹高兴地说。"
      ],
      textEn: [
        "One spring evening, Mom held my little sister\u2019s hand, Dad held mine, and our family walked along a winding path to the countryside.",
        "On one side was a field, lush and green, lovely like a soft green carpet.",
        "On the other side was a small river, its water deep green. A breeze made ripples \u2014 so pretty.",
        "We walked and looked, having gone quite far, yet were reluctant to head back.",
        "On the way home, my sister asked Mom to carry her: \u201CI\u2019m tired, I can\u2019t walk. Carry me.\u201D",
        "Mom shook her head: \u201CI can\u2019t \u2014 I\u2019m tired too.\u201D",
        "My sister turned to ask Dad. Dad said nothing. He picked up a long, thin willow branch from under a tree and handed it to her: \u201CThis is an excellent horse! If you can\u2019t walk, ride it home.\u201D",
        "My sister happily straddled the \u201Chorse\u201D and bounced along ahead. By the time we got home, she was already at the door waiting for us.",
        "\u201CMy horse is really excellent!\u201D said my sister happily."
      ],
      textPinyin: [
        "yī gè chūn tiān de bàng wǎn, mā ma qiān zhe mèi mei, bà ba qiān zhe wǒ, yī jiā rén yán zhe wān wān de xiǎo lù, dào jiāo wài qù sàn bù.",
        "lù de yī biān shì tián yě, cōng cōng lǜ lǜ de, fēi cháng kě ài, xiàng yī piàn róu ruǎn de lǜ tǎn.",
        "lù de lìng yī biān shì xiǎo hé. hé shuǐ bì lǜ bì lǜ de, wēi fēng chuī guò, fàn qǐ céng céng bō wén, hǎo kàn de hěn.",
        "wǒ men yī biān kàn, yī biān zǒu, lù yǐ jīng zǒu le bù shǎo, què hái liàn liàn bù shě, bù xiǎng huí qù.",
        "dāng wǒ men wǎng huí zǒu de shí hou, mèi mei qiú mā ma bào tā: \u201Cwǒ hěn lèi, zǒu bú dòng le, bào bào wǒ.\u201D",
        "mā ma yáo yáo tóu, shuō: \u201Cbù xíng a, wǒ yě hěn lèi, bào bú dòng nǐ le.\u201D",
        "mèi mei zhuǎn guò tóu lái qiú bà ba. bà ba bù zuò shēng, tā zài lù páng de yī zhū liǔ shù xià, shí qǐ yī gēn yòu cháng yòu xì de zhī tiáo, bǎ tā dì gěi le mèi mei, shuō: \u201Czhè shì yī pǐ chū sè de mǎ! nǐ zǒu bú dòng le, jiù qí zhe tā huí jiā ba.\u201D",
        "mèi mei gāo xìng de kuà shàng \u201Cmǎ\u201D, bèng bèng tiào tiào de bēn xiàng qián qù. děng wǒ men huí dào jiā shí, tā yǐ jīng zài mén kǒu yíng jiē wǒ men le.",
        "\u201Cwǒ de mǎ zhēn chū sè!\u201D mèi mei gāo xìng de shuō."
      ],
      recognizeChars: ["郊","泛","波","纹","葱","软","毯","异","恋","舍","求","株","拾","骑","跨"],
      writeChars: ["匹","妹","波","纹","像","景","恋","舍","求"],
      vocabWords: [
        {word:'郊外',pinyin:'jiāo wài',en:'outskirts',sentence:'一家人到郊外散步。',sentenceEn:'The family took a walk in the outskirts.'},
        {word:'柳枝',pinyin:'liǔ zhī',en:'willow branch',sentence:'妹妹拿到一根柳枝。',sentenceEn:'Sister got a willow branch.'},
        {word:'出色',pinyin:'chū sè',en:'outstanding',sentence:'这是一匹出色的马。',sentenceEn:'This is an outstanding horse.'},
        {word:'恋恋不舍',pinyin:'liàn liàn bù shě',en:'reluctant to leave',sentence:'妹妹恋恋不舍。',sentenceEn:'Sister was reluctant to leave.'},
        {word:'骑',pinyin:'qí',en:'ride',sentence:'妹妹骑着柳枝回家。',sentenceEn:'Sister rode the willow branch home.'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"爸爸给妹妹的\u201C出色的马\u201D是什么？",en:"What was the \u201Cexcellent horse\u201D Dad gave to sister?"}
      ],
      teachingPoints: [
        {cn:"理解爸爸用智慧引导孩子自己走路",en:"Understand how Dad wisely guided the child to walk on her own"},
        {cn:"感受家庭散步的温馨画面",en:"Feel the warmth of a family walk"},
        {cn:"学习景色描写：田野和小河",en:"Learn scenery description: fields and river"}
      ],
      parentTips: [
        {cn:"和孩子一起散步，欣赏身边的风景",en:"Take walks together and appreciate the scenery"},
        {cn:"用积极的方式鼓励孩子克服困难",en:"Encourage children to overcome difficulties positively"}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"予人玫瑰，手有余香。平时肯帮人，急时有人帮。与其锦上添花，不如雪中送炭。",en:"Give someone roses and fragrance lingers on your hand. Help others in normal times, and others will help you in need. Better to send charcoal in snow than add flowers to brocade."}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 3 — 识字 Literacy (Lessons 1-4)      */
/* ═══════════════════════════════════════════ */
{
  id: 3, title: "识字", titleEn: "Literacy",
  type: "shizi",
  lessons: [
    {
      id: 1, title: "神州谣", titleEn: "Ode to the Divine Land",
      difficulty: 1,
      text: [
        "我神州，称中华，山川壮，风景佳。",
        "黄河奔，长江涌，长城长，珠峰耸。",
        "台湾岛，隔海峡，与大陆，是一家。",
        "各民族，情谊浓，齐奋发，共繁荣。"
      ],
      textEn: [
        "Our divine land is called China; its mountains and rivers are grand, its scenery splendid.",
        "The Yellow River rushes, the Yangtze surges, the Great Wall stretches long, Mount Everest towers high.",
        "Taiwan Island, across the strait, is one family with the mainland.",
        "All ethnic groups share deep friendship; striving together for shared prosperity."
      ],
      textPinyin: [
        "wǒ shén zhōu, chēng zhōng huá, shān chuān zhuàng, fēng jǐng jiā.",
        "huáng hé bēn, cháng jiāng yǒng, cháng chéng cháng, zhū fēng sǒng.",
        "tái wān dǎo, gé hǎi xiá, yǔ dà lù, shì yī jiā.",
        "gè mín zú, qíng yì nóng, qí fèn fā, gòng fán róng."
      ],
      recognizeChars: ["州","华","涌","峰","耸","隔","峡","与","陆","谊","浓","齐","奋","繁","荣"],
      writeChars: ["州","华","岛","峡","族","谊","齐","奋"],
      vocabWords: [
        {word:'神州',pinyin:'shén zhōu',en:'China (poetic)',sentence:'神州大地多壮丽。',sentenceEn:'The land of China is majestic.'},
        {word:'长江',pinyin:'cháng jiāng',en:'Yangtze River',sentence:'长江黄河万里长。',sentenceEn:'The Yangtze and Yellow River stretch ten thousand miles.'},
        {word:'黄河',pinyin:'huáng hé',en:'Yellow River',sentence:'黄河是母亲河。',sentenceEn:'The Yellow River is the mother river.'},
        {word:'珠峰',pinyin:'zhū fēng',en:'Mount Everest',sentence:'珠穆朗玛峰最高。',sentenceEn:'Mount Everest is the highest.'},
        {word:'台湾',pinyin:'tái wān',en:'Taiwan',sentence:'台湾岛是祖国的宝岛。',sentenceEn:'Taiwan is a treasure island of the motherland.'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文，背诵课文",en:"Read aloud and recite"},
        {type:"discuss",cn:"说说你知道的祖国山川",en:"Talk about the mountains and rivers of China you know"}
      ],
      teachingPoints: [
        {cn:"认识祖国的著名山川地理",en:"Learn about China\u2019s famous geography"},
        {cn:"理解民族团结的重要性",en:"Understand the importance of ethnic unity"}
      ],
      parentTips: [
        {cn:"和孩子一起看中国地图",en:"Look at a map of China together"},
        {cn:"聊聊不同民族的文化特色",en:"Talk about cultural features of different ethnic groups"}
      ]
    },
    {
      id: 2, title: "传统节日", titleEn: "Traditional Festivals",
      difficulty: 1,
      text: [
        "春节到，人欢笑，贴窗花，放鞭炮。",
        "元宵节，看花灯，大街小巷人如潮。",
        "清明节，雨纷纷，先人墓前去祭扫。",
        "过端午，赛龙舟，粽子艾香满堂飘。",
        "七月七，来乞巧，牛郎织女会鹊桥。",
        "过中秋，吃月饼，十五圆月当空照。",
        "重阳节，要敬老，踏秋赏菊登高台。",
        "转眼又是新春到，全家团圆真热闹。"
      ],
      textEn: [
        "Spring Festival arrives with joy, window decorations and firecrackers.",
        "Lantern Festival brings lanterns; streets are crowded like tides.",
        "Qingming Festival in drizzling rain; visiting ancestors\u2019 graves.",
        "Dragon Boat Festival has dragon boat races; zongzi and mugwort fragrance fills the hall.",
        "On Double Seventh, maidens pray for skill; Cowherd and Weaver Girl meet on the magpie bridge.",
        "Mid-Autumn Festival brings mooncakes; the full moon shines overhead.",
        "Double Ninth Festival means respecting elders, enjoying autumn and climbing heights.",
        "Before you know it, New Year returns; the whole family reunites with great joy."
      ],
      textPinyin: [
        "chūn jié dào, rén huān xiào, tiē chuāng huā, fàng biān pào.",
        "yuán xiāo jié, kàn huā dēng, dà jiē xiǎo xiàng rén rú cháo.",
        "qīng míng jié, yǔ fēn fēn, xiān rén mù qián qù jì sǎo.",
        "guò duān wǔ, sài lóng zhōu, zòng zi ài xiāng mǎn táng piāo.",
        "qī yuè qī, lái qǐ qiǎo, niú láng zhī nǚ huì què qiáo.",
        "guò zhōng qiū, chī yuè bǐng, shí wǔ yuán yuè dāng kōng zhào.",
        "chóng yáng jié, yào jìng lǎo, tà qiū shǎng jú dēng gāo tái.",
        "zhuǎn yǎn yòu shì xīn chūn dào, quán jiā tuán yuán zhēn rè nao."
      ],
      recognizeChars: ["传","统","贴","宵","巷","祭","舟","艾","堂","乞","巧","郎","饼","赏","菊"],
      writeChars: ["贴","街","舟","艾","敬","转","团","热","闹"],
      vocabWords: [
        {word:'春节',pinyin:'chūn jié',en:'Spring Festival',sentence:'春节到，放鞭炮。',sentenceEn:'Spring Festival comes, set off firecrackers.'},
        {word:'元宵节',pinyin:'yuán xiāo jié',en:'Lantern Festival',sentence:'元宵节看花灯。',sentenceEn:'Watch lanterns at the Lantern Festival.'},
        {word:'清明节',pinyin:'qīng míng jié',en:'Tomb-Sweeping Day',sentence:'清明节去扫墓。',sentenceEn:'Sweep tombs on Tomb-Sweeping Day.'},
        {word:'端午节',pinyin:'duān wǔ jié',en:'Dragon Boat Festival',sentence:'端午节赛龙舟。',sentenceEn:'Race dragon boats at Dragon Boat Festival.'},
        {word:'中秋节',pinyin:'zhōng qiū jié',en:'Mid-Autumn Festival',sentence:'中秋月儿明。',sentenceEn:'The Mid-Autumn moon is bright.'},
        {word:'重阳节',pinyin:'chóng yáng jié',en:'Double Ninth Festival',sentence:'重阳节要敬老。',sentenceEn:'Respect elders on Double Ninth Festival.'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文，背诵课文",en:"Read aloud and recite"},
        {type:"discuss",cn:"说说你最喜欢的传统节日",en:"Talk about your favorite traditional festival"}
      ],
      teachingPoints: [
        {cn:"了解中国主要传统节日及习俗",en:"Learn about major Chinese traditional festivals and customs"},
        {cn:"感受中华传统文化的魅力",en:"Feel the charm of Chinese traditional culture"}
      ],
      parentTips: [
        {cn:"每个节日时和孩子一起体验传统习俗",en:"Experience traditional customs together during each festival"},
        {cn:"帮助孩子了解节日背后的故事",en:"Help children learn the stories behind festivals"}
      ]
    },
    {
      id: 3, title: "\u201C贝\u201D的故事", titleEn: "The Story of \u201CShell\u201D",
      difficulty: 1,
      text: [
        "一些生活在水里的动物，用贝壳保护自己的身体。甲骨文中的\u201C贝\u201D字，画的就是贝壳的两扇壳张开的样子。",
        "古时候，人们觉得贝壳很漂亮，很珍贵，喜欢把它们当作饰品戴在身上。而且贝壳可以随身携带，不容易损坏，于是古人还把贝壳当作钱币使用。",
        "所以，用\u201C贝\u201D作偏旁的字，大多与钱财有关，比如，\u201C赚、赔、购、贫、货\u201D。"
      ],
      textEn: [
        "Some aquatic animals use shells to protect their bodies. The oracle bone character for \u201Cshell\u201D (贝) depicts two shell halves opening.",
        "In ancient times, people found shells beautiful and precious, wearing them as ornaments. Since shells were portable and durable, they were also used as currency.",
        "Therefore, characters with the \u201Cshell\u201D radical are mostly related to money and wealth, such as \u201Cearn, lose money, purchase, poor, goods.\u201D"
      ],
      textPinyin: [
        "yī xiē shēng huó zài shuǐ lǐ de dòng wù, yòng bèi ké bǎo hù zì jǐ de shēn tǐ. jiǎ gǔ wén zhōng de \u201Cbèi\u201D zì, huà de jiù shì bèi ké de liǎng shàn ké zhāng kāi de yàng zi.",
        "gǔ shí hou, rén men jué de bèi ké hěn piào liang, hěn zhēn guì, xǐ huan bǎ tā men dàng zuò shì pǐn dài zài shēn shàng. ér qiě bèi ké kě yǐ suí shēn xié dài, bù róng yì sǔn huài, yú shì gǔ rén hái bǎ bèi ké dàng zuò qián bì shǐ yòng.",
        "suǒ yǐ, yòng \u201Cbèi\u201D zuò piān páng de zì, dà duō yǔ qián cái yǒu guān, bǐ rú, \u201Czhuàn, péi, gòu, pín, huò\u201D."
      ],
      recognizeChars: ["甲","骨","漂","珍","饰","品","随","易","损","币","财","赚","赔","购","贫"],
      writeChars: ["贝","壳","甲","骨","钱","币","与","财","购"],
      vocabWords: [
        {word:'贝壳',pinyin:'bèi ké',en:'shell',sentence:'古人用贝壳当钱币。',sentenceEn:'Ancients used shells as currency.'},
        {word:'珍贵',pinyin:'zhēn guì',en:'precious',sentence:'贝壳很珍贵。',sentenceEn:'Shells were precious.'},
        {word:'钱币',pinyin:'qián bì',en:'money; currency',sentence:'用贝壳做钱币。',sentenceEn:'Used shells as currency.'},
        {word:'偏旁',pinyin:'piān páng',en:'radical',sentence:'贝字旁的字和钱有关。',sentenceEn:'Characters with shell radical relate to money.'},
        {word:'财富',pinyin:'cái fù',en:'wealth',sentence:'贝代表财富。',sentenceEn:'Shell represents wealth.'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"用\u201C贝\u201D做偏旁的字为什么大多与钱财有关？",en:"Why are characters with the shell radical mostly related to money?"}
      ],
      teachingPoints: [
        {cn:"了解汉字偏旁与字义的关系",en:"Understand the relationship between radicals and character meaning"},
        {cn:"认识甲骨文，了解汉字的演变",en:"Learn about oracle bone script and character evolution"}
      ],
      parentTips: [
        {cn:"和孩子一起找找其他带\u201C贝\u201D字旁的字",en:"Find other characters with the shell radical together"},
        {cn:"用实物贝壳帮助孩子理解",en:"Use real shells to help children understand"}
      ]
    },
    {
      id: 4, title: "中国美食", titleEn: "Chinese Cuisine",
      difficulty: 1,
      text: [
        "凉拌菠菜 香煎豆腐 红烧茄子",
        "烤鸭 水煮鱼 葱爆羊肉",
        "小鸡炖蘑菇 蒸饺 炸酱面",
        "小米粥 蛋炒饭"
      ],
      textEn: [
        "Cold spinach salad, pan-fried tofu, braised eggplant",
        "Roast duck, boiled fish in chili, stir-fried lamb with scallions",
        "Chicken stew with mushrooms, steamed dumplings, noodles with fried sauce",
        "Millet porridge, egg fried rice"
      ],
      textPinyin: [
        "liáng bàn bō cài, xiāng jiān dòu fu, hóng shāo qié zi",
        "kǎo yā, shuǐ zhǔ yú, cōng bào yáng ròu",
        "xiǎo jī dùn mó gu, zhēng jiǎo, zhá jiàng miàn",
        "xiǎo mǐ zhōu, dàn chǎo fàn"
      ],
      recognizeChars: ["菠","煎","腐","茄","烤","煮","爆","炖","蘑","菇","蒸","饺","炸","酱","粥","蛋"],
      writeChars: ["烧","茄","烤","鸭","肉","鸡","蛋","炒","饭"],
      vocabWords: [
        {word:'凉拌',pinyin:'liáng bàn',en:'cold-mixed (salad)',sentence:'凉拌菠菜。',sentenceEn:'Cold-mixed spinach.'},
        {word:'红烧',pinyin:'hóng shāo',en:'braised in soy sauce',sentence:'红烧茄子。',sentenceEn:'Braised eggplant.'},
        {word:'清蒸',pinyin:'qīng zhēng',en:'steamed',sentence:'清蒸鱼。',sentenceEn:'Steamed fish.'},
        {word:'炒菜',pinyin:'chǎo cài',en:'stir-fry',sentence:'爆炒腰花。',sentenceEn:'Quick-fried kidney.'},
        {word:'美食',pinyin:'měi shí',en:'delicious food',sentence:'中国美食种类多。',sentenceEn:'Chinese cuisine has many varieties.'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"你最喜欢吃什么中国美食？",en:"What\u2019s your favorite Chinese food?"},
        {type:"vocab",cn:"认识烹饪方式：拌、煎、烧、烤、煮、爆、炖、蒸、炸、炒",en:"Learn cooking methods: mix, pan-fry, braise, roast, boil, quick-fry, stew, steam, deep-fry, stir-fry"}
      ],
      teachingPoints: [
        {cn:"认识中国各种烹饪方式",en:"Learn various Chinese cooking methods"},
        {cn:"注意火字旁和四点底的字：烧、烤、煎、煮、蒸、炸、炒、炖",en:"Notice characters with fire radical and four-dots bottom"},
        {cn:"了解中国饮食文化",en:"Learn about Chinese food culture"}
      ],
      parentTips: [
        {cn:"和孩子一起做简单的中国菜",en:"Cook simple Chinese dishes together"},
        {cn:"带孩子认识不同的烹饪方式",en:"Help children learn different cooking methods"}
      ]
    }
  ],
  oralComm: {title:"长大以后做什么",titleEn:"What Do You Want to Be When You Grow Up?",prompt:{cn:"说说你长大以后想做什么？为什么？",en:"What do you want to be when you grow up? Why?"}},
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"识字加油站：甜津津、酸溜溜、辣乎乎、香喷喷、油腻腻、软绵绵、脆生生、硬邦邦",en:"Vocabulary: sweet, sour, spicy, fragrant, greasy, soft, crispy, hard (descriptive reduplicated words)"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 4 — 课文 Texts (Lessons 8-11)        */
/* ═══════════════════════════════════════════ */
{
  id: 4, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 8, title: "彩色的梦", titleEn: "Colorful Dreams",
      difficulty: 1,
      text: [
        "我有一大把彩色的梦，有的长，有的圆，有的硬。",
        "他们躺在铅笔盒里聊天，一打开，就在白纸上跳蹦。",
        "脚尖滑过的地方，大块的草坪，绿了；大朵的野花，红了；大片的天空，蓝了，蓝——得——透——明！",
        "在葱郁的森林里，雪松们拉着手，请小鸟留下歌声。小屋的烟囱上，结一个苹果般的太阳，又大——又红！",
        "我的彩色铅笔，是大森林的精灵。我的彩色梦境，有水果香，有季节风，还有紫葡萄的叮咛，在溪水里流动……"
      ],
      textEn: [
        "I have a big handful of colorful dreams \u2014 some long, some round, some hard.",
        "They lie in the pencil box chatting; once opened, they jump and bounce on white paper.",
        "Wherever their tips slide: big lawns turn green, big wildflowers turn red, the big sky turns blue \u2014 transparently blue!",
        "In the lush forest, pine trees hold hands, inviting birds to leave their songs. On the cottage chimney, an apple-like sun hangs, big and red!",
        "My colored pencils are forest sprites. My colorful dreamland has fruit fragrance, seasonal winds, and purple grapes\u2019 whispers flowing in the stream..."
      ],
      textPinyin: [
        "wǒ yǒu yī dà bǎ cǎi sè de mèng, yǒu de cháng, yǒu de yuán, yǒu de yìng.",
        "tā men tǎng zài qiān bǐ hé lǐ liáo tiān, yī dǎ kāi, jiù zài bái zhǐ shàng tiào bèng.",
        "jiǎo jiān huá guò de dì fang, dà kuài de cǎo píng, lǜ le; dà duǒ de yě huā, hóng le; dà piàn de tiān kōng, lán le, lán—de—tòu—míng!",
        "zài cōng yù de sēn lín lǐ, xuě sōng men lā zhe shǒu, qǐng xiǎo niǎo liú xià gē shēng. xiǎo wū de yān cōng shàng, jié yī gè píng guǒ bān de tài yáng, yòu dà—yòu hóng!",
        "wǒ de cǎi sè qiān bǐ, shì dà sēn lín de jīng líng. wǒ de cǎi sè mèng jìng, yǒu shuǐ guǒ xiāng, yǒu jì jié fēng, hái yǒu zǐ pú tao de dīng níng, zài xī shuǐ lǐ liú dòng..."
      ],
      recognizeChars: ["盒","聊","坪","郁","囱","般","精","叮","咛"],
      writeChars: ["彩","梦","森","拉","结","苹","般","精","灵"],
      vocabWords: [
        {word:'彩色',pinyin:'cǎi sè',en:'colorful',sentence:'我有一大把彩色的梦。',sentenceEn:'I have a big handful of colorful dreams.'},
        {word:'铅笔',pinyin:'qiān bǐ',en:'pencil',sentence:'长长短短的铅笔。',sentenceEn:'Long and short pencils.'},
        {word:'草坪',pinyin:'cǎo píng',en:'lawn',sentence:'在草坪上画画。',sentenceEn:'Drawing on the lawn.'},
        {word:'葱郁',pinyin:'cōng yù',en:'lush',sentence:'大片的绿色葱郁。',sentenceEn:'Vast lush green.'},
        {word:'精灵',pinyin:'jīng líng',en:'spirit; fairy',sentence:'彩色的精灵在跳舞。',sentenceEn:'Colorful spirits dance.'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"write",cn:"用彩色铅笔画一画你的梦",en:"Draw your dream with colored pencils"}
      ],
      teachingPoints: [
        {cn:"体会诗歌中的想象力和色彩描写",en:"Appreciate the imagination and color descriptions in the poem"},
        {cn:"学习用拟人手法写铅笔",en:"Learn to use personification to describe pencils"}
      ],
      parentTips: [
        {cn:"和孩子一起画画，聊聊他们的彩色梦",en:"Draw together and talk about their colorful dreams"},
        {cn:"鼓励孩子用想象力描写日常事物",en:"Encourage imaginative descriptions of everyday things"}
      ]
    },
    {
      id: 9, title: "枫树上的喜鹊", titleEn: "Magpies in the Maple Tree",
      difficulty: 1,
      text: [
        "我们村的渡口旁有一棵枫树，我很喜欢它。它好像一把很大又很高的绿色太阳伞，一直打开着。它的绿荫遮蔽了村里的渡口。枫树上有一个喜鹊的窝，我喜欢极了。",
        "是的，我喜欢站在枫树下，抬头看喜鹊的窝。我常常觉得喜鹊会跟我说话，我像童话书里那样，在心中称呼她喜鹊阿姨。",
        "我真是喜欢极了。上个星期天早上，我正在渡口边玩，便看见喜鹊阿姨站在窝边，一会儿教喜鹊弟弟唱歌，一会儿教他们拼读拼音字母。",
        "\u201C鹊！鹊！鹊！\u201D喜鹊阿姨教道。",
        "\u201C鹊，鹊，鹊……\u201D喜鹊弟弟们也跟着学。",
        "我知道，她是在教喜鹊弟弟学拼音字母呢。他们就像我和我的老师一样。",
        "我真高兴啊！"
      ],
      textEn: [
        "By the ferry crossing in our village stands a maple tree that I love. It\u2019s like a big, tall green sun umbrella, always open. Its shade covers the village ferry. In the maple tree is a magpie\u2019s nest \u2014 I love it so much.",
        "Yes, I love standing under the maple tree, looking up at the magpie\u2019s nest. I often feel the magpie talks to me. Like in a fairy tale, I call her Auntie Magpie in my heart.",
        "I really love it. Last Sunday morning, while playing by the ferry, I saw Auntie Magpie standing by the nest, sometimes teaching the little magpies to sing, sometimes teaching them to spell.",
        "\u201CQue! Que! Que!\u201D Auntie Magpie called.",
        "\u201CQue, que, que...\u201D The little magpies echoed.",
        "I know she was teaching them pinyin letters. They were just like me and my teacher.",
        "I was so happy!"
      ],
      textPinyin: [
        "wǒ men cūn de dù kǒu páng yǒu yī kē fēng shù, wǒ hěn xǐ huan tā. tā hǎo xiàng yī bǎ hěn dà yòu hěn gāo de lǜ sè tài yáng sǎn, yī zhí dǎ kāi zhe. tā de lǜ yīn zhē bì le cūn lǐ de dù kǒu. fēng shù shàng yǒu yī gè xǐ què de wō, wǒ xǐ huan jí le.",
        "shì de, wǒ xǐ huan zhàn zài fēng shù xià, tái tóu kàn xǐ què de wō. wǒ cháng cháng jué de xǐ què huì gēn wǒ shuō huà, wǒ xiàng tóng huà shū lǐ nà yàng, zài xīn zhōng chēng hū tā xǐ què ā yí.",
        "wǒ zhēn shì xǐ huan jí le. shàng gè xīng qī tiān zǎo shang, wǒ zhèng zài dù kǒu biān wán, biàn kàn jiàn xǐ què ā yí zhàn zài wō biān, yī huìr jiāo xǐ què dì di chàng gē, yī huìr jiāo tā men pīn dú pīn yīn zì mǔ.",
        "\u201Cquè! què! què!\u201D xǐ què ā yí jiāo dào.",
        "\u201Cquè, què, què...\u201D xǐ què dì di men yě gēn zhe xué.",
        "wǒ zhī dào, tā shì zài jiāo xǐ què dì di xué pīn yīn zì mǔ ne. tā men jiù xiàng wǒ hé wǒ de lǎo shī yī yàng.",
        "wǒ zhēn gāo xìng a!"
      ],
      recognizeChars: ["渡","荫","蔽","撑","便","拼","母","冈","懂","案"],
      writeChars: ["伞","姨","弟","便","教","游","戏","母"],
      vocabWords: [
        {word:'枫树',pinyin:'fēng shù',en:'maple tree',sentence:'我喜欢站在枫树下看喜鹊。',sentenceEn:'I like standing under the maple watching magpies.'},
        {word:'喜鹊',pinyin:'xǐ què',en:'magpie',sentence:'枫树上有喜鹊的窝。',sentenceEn:'There is a magpie nest in the maple.'},
        {word:'阿姨',pinyin:'ā yí',en:'aunt (familiar)',sentence:'喜鹊阿姨在教小喜鹊唱歌。',sentenceEn:'Auntie Magpie teaches the little ones to sing.'},
        {word:'问号',pinyin:'wèn hào',en:'question mark',sentence:'我有好多问号。',sentenceEn:'I have so many questions.'},
        {word:'拼音',pinyin:'pīn yīn',en:'pinyin',sentence:'喜鹊在教拼音。',sentenceEn:'The magpie is teaching pinyin.'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"你觉得喜鹊阿姨在教弟弟们什么？",en:"What do you think Auntie Magpie was teaching the little ones?"}
      ],
      teachingPoints: [
        {cn:"体会\u201C我\u201D的想象力和童趣",en:"Appreciate the narrator\u2019s imagination and childlike wonder"},
        {cn:"学习观察自然中的小动物",en:"Learn to observe small animals in nature"}
      ],
      parentTips: [
        {cn:"带孩子观察鸟窝，想象小鸟在做什么",en:"Take kids to observe bird nests and imagine what birds are doing"},
        {cn:"鼓励孩子的想象力",en:"Encourage children\u2019s imagination"}
      ]
    },
    {
      id: 10, title: "沙滩上的童话", titleEn: "Fairy Tales on the Beach",
      difficulty: 1,
      text: [
        "我们在沙滩上建造自己的乐园。",
        "首先，我们用沙子修了一座城堡。城堡周围插上了干树枝，那就是我们的树。",
        "\u201C城堡里住着一个凶狠的魔王。\u201D我们编着，我们还编下去：\u201C有一天，魔王从城堡里冲出来，他要抢走美丽的公主！\u201D",
        "\u201C我们怎么攻打城堡？\u201D有人问。",
        "大家商量了一阵，一个伙伴说：\u201C咱们驾着飞机去轰炸。\u201D",
        "\u201C轰！轰！\u201D那些发射出来的\u201C炮弹\u201D把城堡轰塌了，我们又在城堡的废墟上挖呀挖，终于找到了\u201C公主\u201D——一只装着药片的小瓶子。",
        "\u201C公主被救出来了！\u201D我们又补充了一段，决定把这个童话记下来。",
        "\u201C记在哪里呢？\u201D",
        "\u201C就记在沙滩上——写在我们的乐园里吧。\u201D",
        "然后，我们用贝壳赞美她——我们的公主，最合我们心意的公主。"
      ],
      textEn: [
        "We built our own paradise on the beach.",
        "First, we built a castle out of sand. We stuck dry tree branches all around the castle \u2014 those were our trees.",
        "\u201CA fierce demon king lives in the castle,\u201D we made up, and continued: \u201COne day, the demon king storms out to kidnap the beautiful princess!\u201D",
        "\u201CHow do we attack the castle?\u201D someone asked.",
        "After discussion, a friend said: \u201CLet\u2019s fly planes and bomb it.\u201D",
        "\u201CBoom! Boom!\u201D The launched \u201Ccannonballs\u201D blasted the castle to rubble. We dug and dug through the ruins of the castle, and finally found the \u201Cprincess\u201D \u2014 a small bottle filled with pills.",
        "\u201CThe princess is rescued!\u201D We added another part and decided to write this fairy tale down.",
        "\u201CWhere do we write it?\u201D",
        "\u201CRight on the beach \u2014 in our paradise.\u201D",
        "Then we used seashells to praise her \u2014 our princess, the princess of our dreams."
      ],
      textPinyin: [
        "wǒ men zài shā tān shàng jiàn zào zì jǐ de lè yuán.",
        "shǒu xiān, wǒ men yòng shā zi xiū le yī zuò chéng bǎo. chéng bǎo zhōu wéi chā shàng le gān shù zhī, nà jiù shì wǒ men de shù.",
        "\u201Cchéng bǎo lǐ zhù zhe yī gè xiōng hěn de mó wáng.\u201D wǒ men biān zhe, wǒ men hái biān xià qù: \u201Cyǒu yī tiān, mó wáng cóng chéng bǎo lǐ chōng chū lái, tā yào qiǎng zǒu měi lì de gōng zhǔ!\u201D",
        "\u201Cwǒ men zěn me gōng dǎ chéng bǎo?\u201D yǒu rén wèn.",
        "dà jiā shāng liáng le yī zhèn, yī gè huǒ bàn shuō: \u201Czán men jià zhe fēi jī qù hōng zhà.\u201D",
        "\u201Chōng! hōng!\u201D nà xiē fā shè chū lái de \u201Cpào dàn\u201D bǎ chéng bǎo hōng tā le, wǒ men yòu zài chéng bǎo de fèi xū shàng wā ya wā, zhōng yú zhǎo dào le \u201Cgōng zhǔ\u201D—yī zhī zhuāng zhe yào piàn de xiǎo píng zi.",
        "\u201Cgōng zhǔ bèi jiù chū lái le!\u201D wǒ men yòu bǔ chōng le yī duàn, jué dìng bǎ zhè gè tóng huà jì xià lái.",
        "\u201Cjì zài nǎ lǐ ne?\u201D",
        "\u201Cjiù jì zài shā tān shàng—xiě zài wǒ men de lè yuán lǐ ba.\u201D",
        "rán hòu, wǒ men yòng bèi ké zàn měi tā—wǒ men de gōng zhǔ, zuì hé wǒ men xīn yì de gōng zhǔ."
      ],
      recognizeChars: ["堡","插","凶","狠","补","充","攻","商","量","驾","轰","驳","药","赞","合","记"],
      writeChars: ["周","围","句","补","充","药","合","死","记"],
      vocabWords: [
        {word:'沙滩',pinyin:'shā tān',en:'beach',sentence:'我们在沙滩上玩。',sentenceEn:'We play on the beach.'},
        {word:'城堡',pinyin:'chéng bǎo',en:'castle',sentence:'我们建了一座城堡。',sentenceEn:'We built a castle.'},
        {word:'编',pinyin:'biān',en:'weave; compose',sentence:'编一个童话故事。',sentenceEn:'Make up a fairy tale.'},
        {word:'勇士',pinyin:'yǒng shì',en:'warrior',sentence:'我们是勇敢的勇士。',sentenceEn:'We are brave warriors.'},
        {word:'胜利',pinyin:'shèng lì',en:'victory',sentence:'最后胜利了！',sentenceEn:'Victory at last!'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"孩子们在沙滩上编了一个什么童话？",en:"What fairy tale did the children make up on the beach?"}
      ],
      teachingPoints: [
        {cn:"感受孩子们的想象力和创造力",en:"Feel children\u2019s imagination and creativity"},
        {cn:"学习\u201C编故事\u201D的乐趣",en:"Learn the fun of making up stories"}
      ],
      parentTips: [
        {cn:"和孩子一起编故事",en:"Make up stories together"},
        {cn:"带孩子去沙滩或沙坑玩耍",en:"Take children to the beach or sandbox to play"}
      ]
    },
    {
      id: 11, title: "我是一只小虫子", titleEn: "I Am a Little Bug",
      difficulty: 2,
      text: [
        "当一只小虫子好不好？我的伙伴们都说：\u201C当一只小虫子，一点儿都不好。\u201D",
        "我们蹦蹦跳跳的时候，一不小心就被屁股会喷火的屁甲虫烧到了。一觉醒来，我发现自己被小狗的一泡尿给冲走了。一不留神，我们会被人踩扁。",
        "不过，我觉得当一只小虫子还真不错。",
        "早上醒来，我在摇晃的草叶上伸懒腰，用一颗露珠把脸洗干净，把细长的触须擦得亮亮的。",
        "如果能跳到狗的身上，我们就可以到很远的地方去旅行。这可是免费的特快列车呀！",
        "我有很多小伙伴，每一个，都特有意思。",
        "屎壳郎贪吃，我们都叫他\u201C屎球球\u201D。螳螂很威风，但是我不喜欢他。他和蚂蚱一个脾气。",
        "我喜欢当一只小虫子。当我很快乐的时候，我会使劲叫。如果你在夜晚的草地上听到歌声，你就一定能找到我！"
      ],
      textEn: [
        "Is it good to be a little bug? My friends all say: \u201CBeing a little bug is not good at all.\u201D",
        "When we hop around, we might get burned by a bombardier beetle. Waking up, I find myself washed away by a dog\u2019s pee. If we\u2019re not careful, we get stepped on flat.",
        "But I think being a little bug is actually pretty nice.",
        "In the morning, I stretch on a swaying grass blade, wash my face with a dewdrop, and polish my long antennae until they shine.",
        "If we can jump onto a dog\u2019s body, we can travel to places very far away. Now that\u2019s a free express train!",
        "I have many friends, each one really interesting.",
        "The dung beetle is greedy \u2014 we call him \u201CDung Ball.\u201D The mantis looks fierce, but I don\u2019t like him. He has the same temper as the grasshopper.",
        "I like being a little bug. When I\u2019m really happy, I sing loudly. If you hear singing in the grass at night, you\u2019ll surely find me!"
      ],
      textPinyin: [
        "dāng yī zhī xiǎo chóng zi hǎo bu hǎo? wǒ de huǒ bàn men dōu shuō: \u201Cdāng yī zhī xiǎo chóng zi, yī diǎnr dōu bù hǎo.\u201D",
        "wǒ men bèng bèng tiào tiào de shí hou, yī bù xiǎo xīn jiù bèi pì gu huì pēn huǒ de pì jiǎ chóng shāo dào le. yī jiào xǐng lái, wǒ fā xiàn zì jǐ bèi xiǎo gǒu de yī pào niào gěi chōng zǒu le. yī bù liú shén, wǒ men huì bèi rén cǎi biǎn.",
        "bú guò, wǒ jué de dāng yī zhī xiǎo chóng zi hái zhēn bú cuò.",
        "zǎo shang xǐng lái, wǒ zài yáo huàng de cǎo yè shàng shēn lǎn yāo, yòng yī kē lù zhū bǎ liǎn xǐ gān jìng, bǎ xì cháng de chù xū cā de liàng liàng de.",
        "rú guǒ néng tiào dào gǒu de shēn shàng, wǒ men jiù kě yǐ dào hěn yuǎn de dì fang qù lǚ xíng. zhè kě shì miǎn fèi de tè kuài liè chē ya!",
        "wǒ yǒu hěn duō xiǎo huǒ bàn, měi yī gè, dōu tè yǒu yì si.",
        "shǐ ké láng tān chī, wǒ men dōu jiào tā \u201Cshǐ qiú qiú\u201D. táng láng hěn wēi fēng, dàn shì wǒ bù xǐ huan tā. tā hé mà zha yī gè pí qi.",
        "wǒ xǐ huan dāng yī zhī xiǎo chóng zi. dāng wǒ hěn kuài lè de shí hou, wǒ huì shǐ jìn jiào. rú guǒ nǐ zài yè wǎn de cǎo dì shàng tīng dào gē shēng, nǐ jiù yī dìng néng zhǎo dào wǒ!"
      ],
      recognizeChars: ["屁","股","昏","泡","尿","茸","醒","晃","免","费","列","屎","撞","贪","脾","婶"],
      writeChars: ["屁","股","尿","净","屎","幸","使","劲"],
      vocabWords: [
        {word:'虫子',pinyin:'chóng zi',en:'bug',sentence:'我是一只小虫子。',sentenceEn:'I am a little bug.'},
        {word:'花瓣',pinyin:'huā bàn',en:'petal',sentence:'在花瓣上滑滑梯。',sentenceEn:'Sliding down on petals.'},
        {word:'草叶',pinyin:'cǎo yè',en:'blade of grass',sentence:'草叶上的露珠是饮水机。',sentenceEn:'Dew on grass blades is our water fountain.'},
        {word:'危险',pinyin:'wēi xiǎn',en:'danger',sentence:'有时候很危险。',sentenceEn:'Sometimes it is dangerous.'},
        {word:'毛茸茸',pinyin:'máo róng róng',en:'fluffy',sentence:'毛茸茸的小狗。',sentenceEn:'A fluffy puppy.'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"小虫子觉得当虫子好不好？你觉得呢？",en:"Does the bug think being a bug is good? What do you think?"}
      ],
      teachingPoints: [
        {cn:"体会第一人称叙述的童趣",en:"Appreciate the childlike fun of first-person narration"},
        {cn:"学习从不同角度看待事物",en:"Learn to see things from different perspectives"}
      ],
      parentTips: [
        {cn:"和孩子一起观察小虫子的世界",en:"Observe the world of bugs together"},
        {cn:"鼓励孩子乐观地看待生活",en:"Encourage an optimistic outlook on life"}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"识字加油站：陀螺、毽子、不倒翁、玩具枪、橡皮泥、遥控坦克",en:"Vocabulary: spinning top, shuttlecock, roly-poly toy, toy gun, modeling clay, remote-control tank"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 5 — 课文 Texts (Lessons 12-14)       */
/* ═══════════════════════════════════════════ */
{
  id: 5, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 12, title: "寓言二则", titleEn: "Two Fables",
      difficulty: 2,
      text: [
        "亡羊补牢",
        "从前有个人，养了几只羊。一天早上，他去放羊，发现羊少了一只。原来羊圈破了个窟窿，夜里狼从窟窿钻进去，把羊叼走了。",
        "街坊劝他说：\u201C赶紧把羊圈修一修，堵上那个窟窿吧！\u201D",
        "他说：\u201C羊已经丢了，还修羊圈干什么？\u201D",
        "第二天早上，他去放羊，发现羊又少了一只。原来狼又从窟窿钻进去，把羊叼走了。",
        "他很后悔没有听街坊的劝告，心想，现在修还不晚。他赶紧堵上那个窟窿，把羊圈修得结结实实的。从此，他的羊再也没丢过。",
        "揠苗助长",
        "古时候有个人，他巴望自己田里的禾苗长得快些，天天到田边去看。可是，一天，两天，三天，禾苗好像一点儿也没有长高。他在田边焦急地转来转去。",
        "\u201C我得想个办法帮它们长。\u201D他说。",
        "他急忙跑到田里，把禾苗一棵一棵往高里拔。从中午一直忙到太阳落山，弄得筋疲力尽。",
        "他回到家里，一边喘气一边说：\u201C今天可把我累坏了！力气总算没白费，禾苗都长高了一大截。\u201D",
        "他的儿子不明白是怎么回事，第二天跑到田里一看，禾苗都枯死了。"
      ],
      textEn: [
        "Mending the Fold After Losing Sheep",
        "Once upon a time, there was a man who raised several sheep. One morning, he went to tend his sheep and found that one was missing. It turned out the sheep pen had a hole in it. During the night, a wolf had crept in through the hole and carried off a sheep.",
        "A neighbor advised: \u201CRepair the pen and plug that hole!\u201D",
        "He said: \u201CThe sheep is already lost. Why bother fixing the pen?\u201D",
        "The next morning, he went to tend his sheep and found that yet another one was missing. The wolf had once again crept in through the hole and carried off a sheep.",
        "He deeply regretted not listening. Thinking it wasn\u2019t too late, he quickly fixed the hole and repaired the pen solidly. From then on, he never lost another sheep.",
        "Pulling Up Seedlings to Help Them Grow",
        "Long ago, a man wished his rice seedlings would grow faster. He went to check every day. But after days, they seemed not to have grown at all. He paced anxiously at the field\u2019s edge.",
        "\u201CI must find a way to help them grow,\u201D he said.",
        "He rushed to the field and pulled each seedling higher, one by one. From noon till sunset, he worked until exhausted.",
        "He went back home, and said while panting: \u201CToday really wore me out! But my effort wasn\u2019t wasted after all \u2014 the seedlings have all grown a good deal taller!\u201D",
        "His son, puzzled, went to the field next day \u2014 all the seedlings had withered and died."
      ],
      textPinyin: [
        "wáng yáng bǔ láo",
        "cóng qián yǒu gè rén, yǎng le jǐ zhī yáng. yī tiān zǎo shang, tā qù fàng yáng, fā xiàn yáng shǎo le yī zhī. yuán lái yáng juàn pò le gè kū long, yè lǐ láng cóng kū long zuān jìn qù, bǎ yáng diāo zǒu le.",
        "jiē fang quàn tā shuō: \u201Cgǎn jǐn bǎ yáng juàn xiū yī xiū, dǔ shàng nà gè kū long ba!\u201D",
        "tā shuō: \u201Cyáng yǐ jīng diū le, hái xiū yáng juàn gàn shén me?\u201D",
        "dì èr tiān zǎo shang, tā qù fàng yáng, fā xiàn yáng yòu shǎo le yī zhī. yuán lái láng yòu cóng kū long zuān jìn qù, bǎ yáng diāo zǒu le.",
        "tā hěn hòu huǐ méi yǒu tīng jiē fang de quàn gào, xīn xiǎng, xiàn zài xiū hái bù wǎn. tā gǎn jǐn dǔ shàng nà gè kū long, bǎ yáng juàn xiū de jiē jiē shí shí de. cóng cǐ, tā de yáng zài yě méi diū guò.",
        "yà miáo zhù zhǎng",
        "gǔ shí hou yǒu gè rén, tā bā wàng zì jǐ tián lǐ de hé miáo zhǎng de kuài xiē, tiān tiān dào tián biān qù kàn. kě shì, yī tiān, liǎng tiān, sān tiān, hé miáo hǎo xiàng yī diǎnr yě méi yǒu zhǎng gāo. tā zài tián biān jiāo jí de zhuǎn lái zhuǎn qù.",
        "\u201Cwǒ děi xiǎng gè bàn fǎ bāng tā men zhǎng.\u201D tā shuō.",
        "tā jí máng pǎo dào tián lǐ, bǎ hé miáo yī kē yī kē wǎng gāo lǐ bá. cóng zhōng wǔ yī zhí máng dào tài yáng luò shān, nòng de jīn pí lì jìn.",
        "tā huí dào jiā lǐ, yī biān chuǎn qì yī biān shuō: \u201Cjīn tiān kě bǎ wǒ lèi huài le! lì qi zǒng suàn méi bái fèi, hé miáo dōu zhǎng gāo le yī dà jié.\u201D",
        "tā de ér zi bù míng bái shì zěn me huí shì, dì èr tiān pǎo dào tián lǐ yī kàn, hé miáo dōu kū sǐ le."
      ],
      recognizeChars: ["寓","则","亡","牢","圈","钻","叼","坊","悔","此","焦","筋","疲","喘","截"],
      writeChars: ["亡","牢","钻","劝","丢","告","筋","疲"],
      vocabWords: [
        {word:'亡羊补牢',pinyin:'wáng yáng bǔ láo',en:'mend the fold after losing sheep',sentence:'亡羊补牢，为时不晚。',sentenceEn:'It is not too late to mend the fold.'},
        {word:'窟窿',pinyin:'kū long',en:'hole',sentence:'羊圈破了一个窟窿。',sentenceEn:'There is a hole in the sheep pen.'},
        {word:'街坊',pinyin:'jiē fang',en:'neighbor',sentence:'街坊劝他补上。',sentenceEn:'Neighbors advised him to fix it.'},
        {word:'揠苗助长',pinyin:'yà miáo zhù zhǎng',en:'pull seedlings to help them grow',sentence:'揠苗助长是寓言故事。',sentenceEn:'Pulling seedlings is a fable.'},
        {word:'筋疲力尽',pinyin:'jīn pí lì jìn',en:'exhausted',sentence:'他累得筋疲力尽。',sentenceEn:'He was totally exhausted.'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"说说这两个寓言故事各告诉我们什么道理",en:"What lesson does each fable teach us?"}
      ],
      teachingPoints: [
        {cn:"理解\u201C亡羊补牢\u201D：出了问题及时补救，还不算晚",en:"Understand: it\u2019s not too late to fix things after a loss"},
        {cn:"理解\u201C揠苗助长\u201D：违反规律急于求成反而有害",en:"Understand: forcing growth against natural rules is harmful"},
        {cn:"认识寓言的特点：小故事大道理",en:"Learn the feature of fables: small stories with big lessons"}
      ],
      parentTips: [
        {cn:"和孩子讨论生活中\u201C亡羊补牢\u201D和\u201C揠苗助长\u201D的例子",en:"Discuss real-life examples of these two fable lessons"},
        {cn:"鼓励孩子做事要有耐心，尊重规律",en:"Encourage patience and respect for natural processes"}
      ]
    },
    {
      id: 13, title: "画杨桃", titleEn: "Drawing a Star Fruit",
      difficulty: 2,
      text: [
        "有一次学校上图画课，老师把两个杨桃摆在课桌上，要同学们画。",
        "我的座位在前排靠边的地方，我看到的杨桃根本不像平时看到的那样，而是像个五角星。",
        "我认认真真地看，老老实实地画，自己觉得画得很准确。",
        "当我把这幅画交出来的时候，有几个同学看了哈哈大笑。",
        "\u201C杨桃是这个样子的吗？\u201D",
        "\u201C倒不如说是五角星吧。\u201D",
        "老师看了看这幅画，到我的座位上坐了一下。然后审视了一下讲台上的杨桃，回到讲台，举起我的画问大家：",
        "\u201C画杨桃画成了五角星，好笑吗？\u201D",
        "\u201C好——笑！\u201D有几个同学抢着说。",
        "老师的神情变得严肃了。他沉默了一会儿，说：\u201C现在你们轮流坐到他的座位上看看。\u201D",
        "一个个同学坐到了我的座位上，看了看讲台上的杨桃。他们的神情变了，一个个脸上露出了惭愧的表情。",
        "老师让这几个同学回到自己的座位上，然后和颜悦色地说：\u201C同学们，提醒你们一下，看的角度不同，杨桃的样子也就不一样。当我们看见别人把杨桃画成五角星的时候，不要忙着发笑，要看看人家是从什么角度看的。我们应该相信自己的眼睛，看到是什么样的就画成什么样。\u201D",
        "老师的教诲让我终生难忘。"
      ],
      textEn: [
        "Once in art class, the teacher placed two star fruits on the desk for us to draw.",
        "My seat was in the front row to the side. The star fruit I saw didn\u2019t look like usual \u2014 it looked like a five-pointed star.",
        "I looked carefully and drew honestly, feeling my drawing was accurate.",
        "When I turned in my drawing, some classmates laughed loudly.",
        "\u201CIs that what a star fruit looks like?\u201D",
        "\u201CYou might as well call it a five-pointed star.\u201D",
        "The teacher looked at the drawing, sat in my seat for a moment, examined the star fruit on the podium, then held up my drawing and asked everyone:",
        "\u201CIs it funny that someone drew a star fruit as a five-pointed star?\u201D",
        "\u201CYes!\u201D several students rushed to say.",
        "The teacher\u2019s expression became serious. After a pause, he said: \u201CNow take turns sitting in his seat and look.\u201D",
        "One by one, classmates sat in my seat and looked at the star fruit. Their expressions changed \u2014 each face showed embarrassment.",
        "The teacher had these students return to their own seats, then said with a kind expression: \u201CStudents, let me remind you \u2014 when you look from different angles, the star fruit looks different. When we see someone draw a star fruit as a five-pointed star, don\u2019t rush to laugh. Instead, look at what angle that person is viewing from. We should trust our own eyes \u2014 draw it as whatever it looks like to us.\u201D",
        "The teacher\u2019s lesson stayed with me for life."
      ],
      textPinyin: [
        "yǒu yī cì xué xiào shàng tú huà kè, lǎo shī bǎ liǎng gè yáng táo bǎi zài kè zhuō shàng, yào tóng xué men huà.",
        "wǒ de zuò wèi zài qián pái kào biān de dì fang, wǒ kàn dào de yáng táo gēn běn bú xiàng píng shí kàn dào de nà yàng, ér shì xiàng gè wǔ jiǎo xīng.",
        "wǒ rèn rèn zhēn zhēn de kàn, lǎo lǎo shí shí de huà, zì jǐ jué de huà de hěn zhǔn què.",
        "dāng wǒ bǎ zhè fú huà jiāo chū lái de shí hou, yǒu jǐ gè tóng xué kàn le hā hā dà xiào.",
        "\u201Cyáng táo shì zhè gè yàng zi de ma?\u201D",
        "\u201Cdào bù rú shuō shì wǔ jiǎo xīng ba.\u201D",
        "lǎo shī kàn le kàn zhè fú huà, dào wǒ de zuò wèi shàng zuò le yī xià. rán hòu shěn shì le yī xià jiǎng tái shàng de yáng táo, huí dào jiǎng tái, jǔ qǐ wǒ de huà wèn dà jiā:",
        "\u201Chuà yáng táo huà chéng le wǔ jiǎo xīng, hǎo xiào ma?\u201D",
        "\u201Chǎo—xiào!\u201D yǒu jǐ gè tóng xué qiǎng zhe shuō.",
        "lǎo shī de shén qíng biàn de yán sù le. tā chén mò le yī huìr, shuō: \u201Cxiàn zài nǐ men lún liú zuò dào tā de zuò wèi shàng kàn kàn.\u201D",
        "yī gè gè tóng xué zuò dào le wǒ de zuò wèi shàng, kàn le kàn jiǎng tái shàng de yáng táo. tā men de shén qíng biàn le, yī gè gè liǎn shàng lù chū le cán kuì de biǎo qíng.",
        "lǎo shī ràng zhè jǐ gè tóng xué huí dào zì jǐ de zuò wèi shàng, rán hòu hé yán yuè sè de shuō: \u201Ctóng xué men, tí xǐng nǐ men yī xià, kàn de jiǎo dù bù tóng, yáng táo de yàng zi yě jiù bù yī yàng. dāng wǒ men kàn jiàn bié rén bǎ yáng táo huà chéng wǔ jiǎo xīng de shí hou, bú yào máng zhe fā xiào, yào kàn kan rén jiā shì cóng shén me jiǎo dù kàn de. wǒ men yīng gāi xiāng xìn zì jǐ de yǎn jīng, kàn dào shì shén me yàng de jiù huà chéng shén me yàng.\u201D",
        "lǎo shī de jiào huì ràng wǒ zhōng shēng nán wàng."
      ],
      recognizeChars: ["室","靠","而","班","哈","倒","审","页","肃","晌","抢","嘻","悦","诲"],
      writeChars: ["图","课","摆","座","室","交","哈","页","抢","嘻"],
      vocabWords: [
        {word:'杨桃',pinyin:'yáng táo',en:'star fruit',sentence:'我画的杨桃像五角星。',sentenceEn:'My star fruit looks like a five-pointed star.'},
        {word:'嘲笑',pinyin:'cháo xiào',en:'laugh at',sentence:'同学们嘲笑我。',sentenceEn:'Classmates laughed at me.'},
        {word:'角度',pinyin:'jiǎo dù',en:'angle',sentence:'从不同角度看到不同形状。',sentenceEn:'Different angles show different shapes.'},
        {word:'叮嘱',pinyin:'dīng zhǔ',en:'remind carefully',sentence:'爸爸叮嘱我看到什么画什么。',sentenceEn:'Dad told me to draw what I see.'},
        {word:'老实',pinyin:'lǎo shi',en:'honest',sentence:'要做老实的人。',sentenceEn:'Be an honest person.'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"老师的教诲是什么？你从中学到了什么？",en:"What was the teacher\u2019s lesson? What did you learn?"}
      ],
      teachingPoints: [
        {cn:"理解\u201C角度不同看法不同\u201D的道理",en:"Understand that different angles give different views"},
        {cn:"学习实事求是的态度",en:"Learn a seek-truth-from-facts attitude"},
        {cn:"不嘲笑别人的不同观点",en:"Don\u2019t mock others\u2019 different perspectives"}
      ],
      parentTips: [
        {cn:"和孩子做实验，从不同角度观察同一个物体",en:"Experiment: observe the same object from different angles"},
        {cn:"教育孩子尊重不同的观点",en:"Teach children to respect different viewpoints"}
      ]
    },
    {
      id: 14, title: "小马过河", titleEn: "The Little Horse Crosses the River",
      difficulty: 2,
      text: [
        "马棚里住着一匹老马和一匹小马。",
        "有一天，老马对小马说：\u201C你已经长大了，能帮妈妈做点事吗？\u201D小马连蹦带跳地说：\u201C怎么不能？我很愿意帮您做事。\u201D老马高兴地说：\u201C那好哇，你把这半口袋麦子驮到磨坊去吧。\u201D",
        "小马驮起麦子，飞快地往磨坊跑去。跑着跑着，一条小河挡住了去路。小马为难了，心想：我能不能过去呢？如果妈妈在身边，问问她该怎么办，那多好哇！",
        "他向四周望望，看见一头老牛在河边吃草。小马嗒嗒嗒跑过去，问道：\u201C牛伯伯，请您告诉我，这条河，我能蹚过去吗？\u201D老牛说：\u201C水很浅，刚没小腿，能蹚过去。\u201D",
        "小马听了老牛的话，立刻跑到河边，准备蹚过去。突然，从树上跳下一只松鼠，拦住他大叫：\u201C小马，别过河，别过河，河水会淹死你的！\u201D小马吃惊地问：\u201C水很深吗？\u201D松鼠认真地说：\u201C深得很呢！昨天，我的一个伙伴就是掉在这条河里淹死的！\u201D",
        "小马连忙收住脚步，不知道怎么办才好。他叹了口气，说：\u201C唉！还是回家问问妈妈吧！\u201D",
        "小马甩甩尾巴，跑回家去。妈妈问：\u201C怎么回来啦？\u201D小马难为情地说：\u201C一条河挡住了去路，我……我过不去。\u201D妈妈说：\u201C那条河不是很浅吗？\u201D小马说：\u201C是啊！牛伯伯也这么说。可是松鼠说河水很深，还淹死过他的伙伴呢！\u201D",
        "妈妈说：\u201C那么河水到底是深还是浅呢？你仔细想过他们的话吗？\u201D小马低下了头，说：\u201C没……没想过。\u201D妈妈亲切地对小马说：\u201C孩子，光听别人说，自己不动脑筋，不去试试，是不行的。河水是深是浅，你去试一试就知道了。\u201D",
        "小马跑到河边，刚刚抬起前蹄，松鼠又大叫起来：\u201C怎么，你不要命啦！\u201D小马说：\u201C让我试试吧。\u201D他下了河，小心地蹚到了对岸。",
        "原来河水既不像老牛说的那样浅，也不像松鼠说的那样深。"
      ],
      textEn: [
        "In a stable lived a mother horse and a little horse.",
        "One day, the old horse said to the little horse: \u201CYou\u2019ve grown up now. Can you help Mama with something?\u201D The little horse said, bouncing and hopping: \u201COf course I can! I\u2019d love to help you.\u201D The old horse said happily: \u201CWonderful \u2014 then take this half-bag of wheat to the mill.\u201D",
        "The little horse hoisted the wheat onto his back and galloped toward the mill. As he ran along, a small river blocked his path. The little horse was troubled, and thought to himself: Can I get across? If only Mama were here so I could ask her what to do \u2014 that would be wonderful!",
        "He looked around in all directions and saw an old ox eating grass by the river. The little horse clip-clopped over and asked: \u201CUncle Ox, please tell me \u2014 can I wade across this river?\u201D The old ox said: \u201CThe water is very shallow, just barely covering my lower legs. You can wade across.\u201D",
        "Hearing the old ox\u2019s words, the little horse immediately ran to the riverbank, ready to wade across. Suddenly, a squirrel jumped down from a tree and blocked his way, shouting: \u201CLittle horse, don\u2019t cross the river! Don\u2019t cross the river! The water will drown you!\u201D The little horse asked in surprise: \u201CIs the water very deep?\u201D The squirrel said earnestly: \u201CExtremely deep! Just yesterday, one of my companions fell into this very river and drowned!\u201D",
        "The little horse hurriedly halted his steps, not knowing what to do. He let out a sigh and said: \u201CAh! I\u2019d better go home and ask Mama!\u201D",
        "The little horse swished his tail and ran back home. Mama asked: \u201CWhy have you come back?\u201D The little horse said embarrassedly: \u201CA river blocked my way, and I... I couldn\u2019t get across.\u201D Mama said: \u201CIsn\u2019t that river quite shallow?\u201D The little horse said: \u201CYes! Uncle Ox said the same thing. But the squirrel said the river is very deep \u2014 it even drowned one of his companions!\u201D",
        "Mama said: \u201CSo is the river water actually deep or shallow? Did you think carefully about what they said?\u201D The little horse lowered his head and said: \u201CNo... I didn\u2019t think about it.\u201D Mama said affectionately to the little horse: \u201CChild, just listening to what others say without using your own brain and without trying it yourself simply won\u2019t do. Whether the water is deep or shallow \u2014 go try it and you\u2019ll find out.\u201D",
        "The little horse went to the river. As he raised his hoof, the squirrel cried out again. The horse said: \u201CLet me try.\u201D He waded in carefully and reached the other side.",
        "The water was neither as shallow as the ox said, nor as deep as the squirrel said."
      ],
      textPinyin: [
        "mǎ péng lǐ zhù zhe yī pǐ lǎo mǎ hé yī pǐ xiǎo mǎ.",
        "yǒu yī tiān, lǎo mǎ duì xiǎo mǎ shuō: \u201Cnǐ yǐ jīng zhǎng dà le, néng bāng mā ma zuò diǎn shì ma?\u201D xiǎo mǎ lián bèng dài tiào de shuō: \u201Czěn me bù néng? wǒ hěn yuàn yì bāng nín zuò shì.\u201D lǎo mǎ gāo xìng de shuō: \u201Cnà hǎo wa, nǐ bǎ zhè bàn kǒu dài mài zi tuó dào mò fáng qù ba.\u201D",
        "xiǎo mǎ tuó qǐ mài zi, fēi kuài de wǎng mò fáng pǎo qù. pǎo zhe pǎo zhe, yī tiáo xiǎo hé dǎng zhù le qù lù. xiǎo mǎ wéi nán le, xīn xiǎng: wǒ néng bù néng guò qù ne?",
        "tā kàn jiàn yī tóu lǎo niú zài hé biān chī cǎo. xiǎo mǎ pǎo guò qù, wèn dào: \u201Cniú bó bo, zhè tiáo hé, wǒ néng tāng guò qù ma?\u201D lǎo niú shuō: \u201Cshuǐ hěn qiǎn, gāng mò xiǎo tuǐ, néng tāng guò qù.\u201D",
        "xiǎo mǎ tīng le, lì kè pǎo dào hé biān. tū rán, cóng shù shàng tiào xià yī zhī sōng shǔ, lán zhù tā dà jiào: \u201Cxiǎo mǎ, bié guò hé! hé shuǐ huì yān sǐ nǐ de!\u201D xiǎo mǎ shuō: \u201Cshuǐ hěn shēn ma?\u201D sōng shǔ shuō: \u201Cshēn de hěn ne! zuó tiān, wǒ de yī gè huǒ bàn jiù shì diào zài zhè tiáo hé lǐ yān sǐ de!\u201D",
        "xiǎo mǎ lián máng shōu zhù jiǎo bù, tā tàn le kǒu qì, shuō: \u201Cāi! hái shì huí jiā wèn wen mā ma ba!\u201D",
        "xiǎo mǎ pǎo huí jiā qù. mā ma wèn: \u201Czěn me huí lái la?\u201D xiǎo mǎ shuō: \u201Cyī tiáo hé dǎng zhù le qù lù.\u201D mā ma shuō: \u201Cnà tiáo hé bú shì hěn qiǎn ma?\u201D xiǎo mǎ shuō: \u201Cshì a! niú bó bo yě zhè me shuō. kě shì sōng shǔ shuō hé shuǐ hěn shēn!\u201D",
        "mā ma shuō: \u201Cnà me hé shuǐ dào dǐ shì shēn hái shì qiǎn ne? nǐ zǐ xì xiǎng guò tā men de huà ma?\u201D xiǎo mǎ dī xià le tóu. mā ma qīn qiè de shuō: \u201Chái zi, guāng tīng bié rén shuō, zì jǐ bù dòng nǎo jīn, bú qù shì shi, shì bù xíng de. hé shuǐ shì shēn shì qiǎn, nǐ qù shì yī shì jiù zhī dào le.\u201D",
        "xiǎo mǎ pǎo dào hé biān, gāng gāng tái qǐ qián tí, sōng shǔ yòu dà jiào qǐ lái. xiǎo mǎ shuō: \u201Cràng wǒ shì shi ba.\u201D tā xià le hé, xiǎo xīn de tāng dào le duì àn.",
        "yuán lái hé shuǐ jì bú xiàng lǎo niú shuō de nà yàng qiǎn, yě bú xiàng sōng shǔ shuō de nà yàng shēn."
      ],
      recognizeChars: ["棚","驮","磨","坊","挡","伯","浅","刻","突","叹","唉","试","蹄","既"],
      writeChars: ["愿","意","麦","该","伯","刻","突","掉"],
      vocabWords: [
        {word:'小马',pinyin:'xiǎo mǎ',en:'little horse',sentence:'小马要过河。',sentenceEn:'The little horse needs to cross the river.'},
        {word:'磨坊',pinyin:'mò fáng',en:'mill',sentence:'妈妈让小马去磨坊。',sentenceEn:'Mom sent the little horse to the mill.'},
        {word:'深浅',pinyin:'shēn qiǎn',en:'depth',sentence:'河水是深还是浅？',sentenceEn:'Is the river deep or shallow?'},
        {word:'尝试',pinyin:'cháng shì',en:'try',sentence:'你自己去试一试。',sentenceEn:'Try it yourself.'},
        {word:'动脑筋',pinyin:'dòng nǎo jīn',en:'think hard',sentence:'做事要自己动脑筋。',sentenceEn:'Think for yourself when doing things.'}
      ],
      exercises: [
        {type:"read",cn:"分角色朗读课文",en:"Read aloud with assigned roles"},
        {type:"discuss",cn:"河水是深还是浅？为什么老牛和松鼠说的不一样？",en:"Was the river deep or shallow? Why did the ox and squirrel disagree?"}
      ],
      teachingPoints: [
        {cn:"理解同一事物不同角度有不同结论（牛高/松鼠小/马中等）",en:"Understand different perspectives yield different conclusions (ox is tall, squirrel is tiny, horse is medium)"},
        {cn:"学习独立思考和亲身实践的重要性",en:"Learn the importance of independent thinking and personal experience"},
        {cn:"体会妈妈教育方法的智慧",en:"Appreciate the wisdom of Mother\u2019s teaching method"}
      ],
      parentTips: [
        {cn:"鼓励孩子自己尝试，不要只听别人的",en:"Encourage children to try things themselves"},
        {cn:"引导孩子思考不同说法的原因",en:"Guide children to think about why people say different things"}
      ]
    }
  ],
  oralComm: {title:"图书借阅公约",titleEn:"Library Borrowing Rules",prompt:{cn:"和同学们一起制定班级图书借阅公约",en:"Work with classmates to create class library borrowing rules"}},
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"弟子规（节选）\n冠必正，纽必结，袜与履，俱紧切。置冠服，有定位，勿乱顿，致污秽。",en:"Standards for Being a Good Student (excerpt)\nHats must be straight, buttons fastened, socks and shoes both snug. Put hats and clothes in their place; don\u2019t toss them about and make them dirty."}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 6 — 课文 Texts (Lessons 15-18)       */
/* ═══════════════════════════════════════════ */
{
  id: 6, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 15, title: "古诗二首", titleEn: "Two Ancient Poems",
      difficulty: 2,
      text: [
        "晓出净慈寺送林子方 [宋]杨万里",
        "毕竟西湖六月中，风光不与四时同。",
        "接天莲叶无穷碧，映日荷花别样红。",
        "绝句 [唐]杜甫",
        "两个黄鹂鸣翠柳，一行白鹭上青天。",
        "窗含西岭千秋雪，门泊东吴万里船。"
      ],
      textEn: [
        "Seeing Off Lin Zifang at Dawn from Jingci Temple [Song] Yang Wanli",
        "After all, it is the West Lake in June\u2014the scenery differs from other seasons.",
        "Lotus leaves stretch to the horizon in endless green; lotus flowers glow an extraordinary red in the sun.",
        "Quatrain [Tang] Du Fu",
        "Two golden orioles sing amid the green willows; a line of white egrets soars into the blue sky.",
        "The window frames the western ridge\u2019s thousand-year snow; at the gate a boat is moored, bound for eastern Wu, ten thousand li away."
      ],
      textPinyin: [
        "xi\u01CEo ch\u016B j\u00ECng c\u00ED s\u00EC s\u00F2ng l\u00EDn z\u01D0 f\u0101ng [s\u00F2ng] y\u00E1ng w\u00E0n l\u01D0",
        "b\u00EC j\u00ECng x\u012B h\u00FA li\u00F9 yu\u00E8 zh\u014Dng, f\u0113ng gu\u0101ng b\u00F9 y\u01D4 s\u00EC sh\u00ED t\u00F3ng.",
        "ji\u0113 ti\u0101n li\u00E1n y\u00E8 w\u00FA qi\u00F3ng b\u00EC, y\u00ECng r\u00EC h\u00E9 hu\u0101 bi\u00E9 y\u00E0ng h\u00F3ng.",
        "ju\u00E9 j\u00F9 [t\u00E1ng] d\u00F9 f\u01D4",
        "li\u01CEng g\u00E8 hu\u00E1ng l\u00ED m\u00EDng cu\u00EC li\u01D4, y\u00EC h\u00E1ng b\u00E1i l\u00F9 sh\u00E0ng q\u012Bng ti\u0101n.",
        "chu\u0101ng h\u00E1n x\u012B l\u01D0ng qi\u0101n qi\u016B xu\u011B, m\u00E9n b\u00F3 d\u014Dng w\u00FA w\u00E0n l\u01D0 chu\u00E1n."
      ],
      recognizeChars: ["\u6653","\u6148","\u6BD5","\u7ADF","\u6620","\u7EDD","\u9E42","\u9E23","\u884C","\u542B","\u5CAD","\u6CCA"],
      writeChars: ["\u6E56","\u83B2","\u7A77","\u8377","\u7EDD","\u542B","\u5CAD","\u5434"],
      exercises: [
        {type:"recite",cn:"\u6709\u611F\u60C5\u5730\u6717\u8BFB\u8BFE\u6587\uFF0C\u80CC\u8BF5\u8BFE\u6587",en:"Read the text with feeling and recite it"},
        {type:"think",cn:"\u8BF4\u8BF4\u8BD7\u53E5\u7684\u610F\u601D",en:"Explain the meaning of the poem lines"}
      ],
      teachingPoints: [
        {cn:"\u5BF9\u4ED7\u7ED3\u6784\uFF1A\u4E24\u4E2A/\u4E00\u884C\uFF0C\u9EC4\u9E42/\u767D\u9E6D\uFF0C\u7FE0\u67F3/\u9752\u5929",en:"Parallel structure: two/a line, orioles/egrets, green willows/blue sky"},
        {cn:"\u201C\u6BD5\u7ADF\u201D\u201C\u522B\u6837\u201D\u7B49\u8BCD\u7684\u7406\u89E3",en:"Understanding words like \u2018after all\u2019 and \u2018extraordinary\u2019"},
        {cn:"\u53E4\u8BD7\u4E2D\u591A\u97F3\u5B57\u201C\u884C\u201D\u8BFB h\u00E1ng",en:"The polyphonic character \u884C reads h\u00E1ng in this poem (a row/line)"}
      ],
      parentTips: [
        {cn:"\u5E26\u5B69\u5B50\u8D4F\u8377\u82B1\u6216\u770B\u56FE\u7247\uFF0C\u8054\u7CFB\u8BD7\u53E5",en:"Take the child to see lotus flowers or pictures, connecting to the poem"},
        {cn:"\u5F15\u5BFC\u5B69\u5B50\u89C2\u5BDF\u4E0D\u540C\u5B63\u8282\u7684\u98CE\u666F\u53D8\u5316",en:"Guide children to observe scenery changes across seasons"}
      ]
    },
    {
      id: 16, title: "\u96F7\u96E8", titleEn: "Thunderstorm",
      difficulty: 2,
      text: [
        "\u6EE1\u5929\u7684\u4E4C\u4E91\uFF0C\u9ED1\u6C89\u6C89\u5730\u538B\u4E0B\u6765\u3002",
        "\u6811\u4E0A\u7684\u53F6\u5B50\u4E00\u52A8\u4E0D\u52A8\uFF0C\u8749\u4E00\u58F0\u4E5F\u4E0D\u53EB\u3002",
        "\u5FFD\u7136\u4E00\u9635\u5927\u98CE\uFF0C\u5439\u5F97\u6811\u679D\u4E71\u6446\u3002\u4E00\u53EA\u86DB\u86DB\u4ECE\u7F51\u4E0A\u5782\u4E0B\u6765\uFF0C\u9003\u8D70\u4E86\u3002",
        "\u95EA\u7535\u8D8A\u6765\u8D8A\u4EAE\uFF0C\u96F7\u58F0\u8D8A\u6765\u8D8A\u54CD\u3002",
        "\u54D7\uFF0C\u54D7\uFF0C\u54D7\uFF0C\u96E8\u4E0B\u8D77\u6765\u4E86\u3002",
        "\u96E8\u8D8A\u4E0B\u8D8A\u5927\u3002\u5F80\u7A97\u5916\u671B\u53BB\uFF0C\u6811\u554A\uFF0C\u623F\u5B50\u554A\uFF0C\u90FD\u770B\u4E0D\u6E05\u4E86\u3002",
        "\u6E10\u6E10\u5730\uFF0C\u6E10\u6E10\u5730\uFF0C\u96F7\u58F0\u5C0F\u4E86\uFF0C\u96E8\u58F0\u4E5F\u5C0F\u4E86\u3002",
        "\u5929\u4EAE\u8D77\u6765\u4E86\u3002\u6253\u5F00\u7A97\u6237\uFF0C\u6E05\u65B0\u7684\u7A7A\u6C14\u8FCE\u9762\u6251\u6765\u3002",
        "\u96E8\u505C\u4E86\u3002\u592A\u9633\u51FA\u6765\u4E86\u3002\u4E00\u6761\u5F69\u8679\u6302\u5728\u5929\u7A7A\u3002\u8749\u53EB\u4E86\u3002\u86DB\u86DB\u53C8\u5750\u5728\u7F51\u4E0A\u3002\u6C60\u5858\u91CC\u6C34\u6EE1\u4E86\uFF0C\u9752\u86D9\u4E5F\u53EB\u8D77\u6765\u4E86\u3002"
      ],
      textEn: [
        "Dark clouds filled the sky, pressing down heavily.",
        "The leaves on the trees didn\u2019t move at all; the cicadas made not a sound.",
        "Suddenly a gust of wind blew the branches into a wild sway. A spider dropped down from its web on a thread and scurried away.",
        "The lightning grew brighter and brighter; the thunder grew louder and louder.",
        "Splash, splash, splash\u2014the rain began to fall.",
        "The rain fell harder and harder. Looking out the window, the trees, the houses\u2014everything was blurred.",
        "Gradually, gradually, the thunder softened, and the rain quieted too.",
        "The sky brightened. Opening the window, fresh air rushed in.",
        "The rain stopped. The sun came out. A rainbow hung in the sky. The cicadas sang. The spider sat on its web again. The pond was brimming with water, and the frogs began to croak."
      ],
      textPinyin: [
        "m\u01CEn ti\u0101n de w\u016B y\u00FAn, h\u0113i ch\u00E9n ch\u00E9n de y\u0101 xi\u00E0 l\u00E1i.",
        "sh\u00F9 sh\u00E0ng de y\u00E8 zi y\u00ED d\u00F2ng b\u00F9 d\u00F2ng, ch\u00E1n y\u00EC sh\u0113ng y\u011B b\u00F9 ji\u00E0o.",
        "h\u016B r\u00E1n y\u00ED zh\u00E8n d\u00E0 f\u0113ng, chu\u012B de sh\u00F9 zh\u012B lu\u00E0n b\u01CEi. y\u00EC zh\u012B zh\u012B zh\u016B c\u00F3ng w\u01CEng sh\u00E0ng chu\u00ED xi\u00E0 l\u00E1i, t\u00E1o z\u01D2u le.",
        "sh\u01CEn di\u00E0n yu\u00E8 l\u00E1i yu\u00E8 li\u00E0ng, l\u00E9i sh\u0113ng yu\u00E8 l\u00E1i yu\u00E8 xi\u01CEng.",
        "hu\u0101, hu\u0101, hu\u0101, y\u01D4 xi\u00E0 qi l\u00E1i le.",
        "y\u01D4 yu\u00E8 xi\u00E0 yu\u00E8 d\u00E0. w\u01CEng chu\u0101ng w\u00E0i w\u00E0ng q\u00F9, sh\u00F9 a, f\u00E1ng zi a, d\u014Du k\u00E0n b\u00F9 q\u012Bng le.",
        "ji\u00E0n ji\u00E0n de, ji\u00E0n ji\u00E0n de, l\u00E9i sh\u0113ng xi\u01CEo le, y\u01D4 sh\u0113ng y\u011B xi\u01CEo le.",
        "ti\u0101n li\u00E0ng q\u01D0 l\u00E1i le. d\u01CE k\u0101i chu\u0101ng h\u00F9, q\u012Bng x\u012Bn de k\u014Dng q\u00EC y\u00EDng mi\u00E0n p\u016B l\u00E1i.",
        "y\u01D4 t\u00EDng le. t\u00E0i y\u00E1ng ch\u016B l\u00E1i le. y\u00EC ti\u00E1o c\u01CEi h\u00F3ng gu\u00E0 z\u00E0i ti\u0101n k\u014Dng. ch\u00E1n ji\u00E0o le. zh\u012B zh\u016B y\u00F2u zu\u00F2 z\u00E0i w\u01CEng sh\u00E0ng. ch\u00ED t\u00E1ng l\u01D0 shu\u01D0 m\u01CEn le, q\u012Bng w\u0101 y\u011B ji\u00E0o q\u01D0 l\u00E1i le."
      ],
      recognizeChars: ["\u538B","\u8749","\u5782","\u54D7","\u6237","\u6251"],
      writeChars: ["\u96F7","\u4E4C","\u9ED1","\u538B","\u5782","\u6237","\u65B0","\u8FCE","\u6251"],
      vocabWords: [
        {word:'雷雨',pinyin:'léi yǔ',en:'thunderstorm',sentence:'满天乌云，黑沉沉。',sentenceEn:'Dark clouds fill the sky.'},
        {word:'闪电',pinyin:'shǎn diàn',en:'lightning',sentence:'一道闪电划过天空。',sentenceEn:'A bolt of lightning streaks across the sky.'},
        {word:'蜘蛛',pinyin:'zhī zhū',en:'spider',sentence:'蜘蛛从网上垂下来。',sentenceEn:'The spider hangs down from its web.'},
        {word:'彩虹',pinyin:'cǎi hóng',en:'rainbow',sentence:'雨后出现一道彩虹。',sentenceEn:'A rainbow appears after the rain.'},
        {word:'蝉',pinyin:'chán',en:'cicada',sentence:'蝉叫了。',sentenceEn:'The cicadas sing.'}
      ],
      exercises: [
        {type:"read",cn:"\u6709\u611F\u60C5\u5730\u6717\u8BFB\u8BFE\u6587\uFF0C\u6CE8\u610F\u8BFB\u51FA\u96F7\u96E8\u524D\u540E\u7684\u53D8\u5316",en:"Read expressively, noting the changes before and after the storm"},
        {type:"think",cn:"\u8BF4\u8BF4\u96F7\u96E8\u524D\u3001\u96F7\u96E8\u4E2D\u3001\u96F7\u96E8\u540E\u7684\u666F\u8C61\u53D8\u5316",en:"Describe the scenery changes before, during, and after the thunderstorm"}
      ],
      teachingPoints: [
        {cn:"\u201C\u8D8A\u2026\u8D8A\u2026\u201D\u53E5\u5F0F\u8868\u793A\u7A0B\u5EA6\u52A0\u6DF1",en:"The pattern \u2018more and more\u2019 (\u8D8A\u2026\u8D8A\u2026) indicates increasing intensity"},
        {cn:"\u201C\u6E10\u6E10\u5730\u201D\u8868\u793A\u53D8\u5316\u662F\u6162\u6162\u53D1\u751F\u7684",en:"The word \u2018gradually\u2019 (\u6E10\u6E10\u5730) shows change happening slowly"},
        {cn:"\u65F6\u95F4\u987A\u5E8F\u5199\u4F5C\u65B9\u6CD5\uFF1A\u96F7\u96E8\u524D\u2192\u96F7\u96E8\u4E2D\u2192\u96F7\u96E8\u540E",en:"Chronological writing method: before storm \u2192 during storm \u2192 after storm"}
      ],
      parentTips: [
        {cn:"\u4E0B\u96E8\u65F6\u5E26\u5B69\u5B50\u89C2\u5BDF\u96E8\u524D\u96E8\u540E\u7684\u53D8\u5316",en:"Observe changes before and after rain with the child"},
        {cn:"\u7EC3\u4E60\u7528\u201C\u8D8A\u6765\u8D8A\u2026\u201D\u9020\u53E5",en:"Practice making sentences with \u2018more and more...\u2019"}
      ]
    },
    {
      id: 17, title: "\u8981\u662F\u4F60\u5728\u91CE\u5916\u8FF7\u4E86\u8DEF", titleEn: "If You Get Lost in the Wild",
      difficulty: 2,
      text: [
        "\u8981\u662F\u4F60\u5728\u91CE\u5916\u8FF7\u4E86\u8DEF\uFF0C\u53EF\u5343\u4E07\u522B\u6148\u614C\uFF0C",
        "\u5927\u81EA\u7136\u6709\u5F88\u591A\u5929\u7136\u7684\u6307\u5357\u9488\uFF0C\u4F1A\u5E2E\u52A9\u4F60\u8FA8\u522B\u65B9\u5411\u3002",
        "\u592A\u9633\u662F\u4E2A\u5FE0\u5B9E\u7684\u5411\u5BFC\uFF0C\u5B83\u5728\u5929\u7A7A\u7ED9\u4F60\u6307\u70B9\u65B9\u5411\uFF1A",
        "\u4E2D\u5348\u7684\u65F6\u5019\u5B83\u5728\u5357\u8FB9\uFF0C\u5730\u4E0A\u7684\u6811\u5F71\u6B63\u6307\u5317\u65B9\u3002",
        "\u5317\u6781\u661F\u662F\u76CF\u5FE0\u5B9E\u7684\u5411\u5BFC\uFF0C\u5B83\u6C38\u8FDC\u9AD8\u6302\u5728\u5317\u65B9\u3002",
        "\u8981\u662F\u4F60\u80FD\u8BA4\u51FA\u5B83\uFF0C\u5C31\u4E0D\u4F1A\u5728\u9ED1\u591C\u91CC\u4E71\u95EF\u3002",
        "\u8981\u662F\u78B0\u4E0A\u9634\u96E8\u5929\uFF0C\u5927\u6811\u4E5F\u4F1A\u6765\u5E2E\u5FD9\u3002",
        "\u679D\u53F6\u7A20\u7684\u4E00\u9762\u662F\u5357\u65B9\uFF0C\u679D\u53F6\u7A00\u7684\u4E00\u9762\u662F\u5317\u65B9\u3002",
        "\u96EA\u540E\u8981\u5206\u8FA8\u65B9\u5411\u4E5F\u4E0D\u96BE\uFF0C\u770B\u770B\u54EA\u8FB9\u7684\u96EA\u5316\u5F97\u5FEB\u54EA\u8FB9\u5316\u5F97\u6162\uFF0C",
        "\u5316\u5F97\u5FEB\u7684\u90A3\u8FB9\u662F\u5357\u65B9\uFF0C\u56E0\u4E3A\u5B83\u6709\u6E20\u7684\u592A\u9633\u7167\u5C04\u7684\u65F6\u95F4\u7A0D\u5FAE\u957F\u4E86\u4E00\u4E9B\u3002",
        "\u5927\u81EA\u7136\u7684\u6307\u5357\u9488\u5462\uFF0C\u5176\u5B9E\u4F55\u6B62\u8FD9\u56DB\u79CD\u3002",
        "\u53EA\u8981\u4F60\u7EC6\u7EC6\u89C2\u5BDF\uFF0C\u591A\u591A\u53BB\u60F3\uFF0C\u5C31\u80FD\u53D1\u73B0\u66F4\u591A\uFF0C\u5C31\u80FD\u627E\u5230\u66F4\u591A\u7684\u5929\u7136\u7684\u6307\u5357\u9488\uFF0C\u79EF\u7D2F\u66F4\u591A\u7684\u77E5\u8BC6\u3002"
      ],
      textEn: [
        "If you get lost in the wild, don\u2019t panic.",
        "Nature has many natural compasses that will help you find your way.",
        "The sun is a faithful guide; it points the way for you in the sky:",
        "At noon it is in the south, and tree shadows on the ground point north.",
        "The North Star is a faithful guide too; it always hangs high in the north.",
        "If you can spot it, you won\u2019t wander blindly in the dark night.",
        "On overcast rainy days, big trees will lend a hand.",
        "The dense leafy side faces south; the sparse side faces north.",
        "After snow, telling directions is not hard either\u2014see which side melts faster and which side melts slower.",
        "The faster-melting side is south, because it gets a bit more sunlight.",
        "Nature\u2019s compasses, in fact, number far more than these four.",
        "If you observe carefully and think hard, you\u2019ll discover many more\u2014and find more natural compasses and gain more knowledge."
      ],
      textPinyin: [
        "y\u00E0o shi n\u01D0 z\u00E0i y\u011B w\u00E0i m\u00ED le l\u00F9, k\u011B qi\u0101n w\u00E0n bi\u00E9 hu\u0101ng,",
        "d\u00E0 z\u00EC r\u00E1n y\u01D2u h\u011Bn du\u014D ti\u0101n r\u00E1n de zh\u01D0 n\u00E1n zh\u0113n, hu\u00EC b\u0101ng zh\u00F9 n\u01D0 bi\u00E0n bi\u00E9 f\u0101ng xi\u00E0ng.",
        "t\u00E0i y\u00E1ng sh\u00EC g\u00E8 zh\u014Dng sh\u00ED de xi\u00E0ng d\u01CEo, t\u0101 z\u00E0i ti\u0101n k\u014Dng g\u011Bi n\u01D0 zh\u01D0 di\u01CEn f\u0101ng xi\u00E0ng:",
        "zh\u014Dng w\u01D4 de sh\u00ED hou t\u0101 z\u00E0i n\u00E1n bi\u0101n, d\u00EC sh\u00E0ng de sh\u00F9 y\u01D0ng zh\u00E8ng zh\u01D0 b\u011Bi f\u0101ng.",
        "b\u011Bi j\u00ED x\u012Bng sh\u00EC zh\u01CEn zh\u014Dng sh\u00ED de xi\u00E0ng d\u01CEo, t\u0101 y\u01D2ng yu\u01CEn g\u0101o gu\u00E0 z\u00E0i b\u011Bi f\u0101ng.",
        "y\u00E0o shi n\u01D0 n\u00E9ng r\u00E8n ch\u016B t\u0101, ji\u00F9 b\u00F9 hu\u00EC z\u00E0i h\u0113i y\u00E8 l\u01D0 lu\u00E0n chu\u01CEng.",
        "y\u00E0o shi p\u00E8ng sh\u00E0ng y\u012Bn y\u01D4 ti\u0101n, d\u00E0 sh\u00F9 y\u011B hu\u00EC l\u00E1i b\u0101ng m\u00E1ng.",
        "zh\u012B y\u00E8 ch\u00F3u de y\u00EC mi\u00E0n sh\u00EC n\u00E1n f\u0101ng, zh\u012B y\u00E8 x\u012B de y\u00EC mi\u00E0n sh\u00EC b\u011Bi f\u0101ng.",
        "xu\u011B h\u00F2u y\u00E0o f\u0113n bi\u00E0n f\u0101ng xi\u00E0ng y\u011B b\u00F9 n\u00E1n, k\u00E0n kan n\u01CE bi\u0101n de xu\u011B hu\u00E0 de ku\u00E0i n\u01CE bi\u0101n hu\u00E0 de m\u00E0n,",
        "hu\u00E0 de ku\u00E0i de n\u00E0 bi\u0101n sh\u00EC n\u00E1n f\u0101ng, y\u012Bn w\u00E8i t\u0101 y\u01D2u q\u00FA de t\u00E0i y\u00E1ng zh\u00E0o sh\u00E8 de sh\u00ED ji\u0101n sh\u0101o w\u0113i ch\u00E1ng le y\u00EC xi\u0113.",
        "d\u00E0 z\u00EC r\u00E1n de zh\u01D0 n\u00E1n zh\u0113n ne, q\u00ED sh\u00ED h\u00E9 zh\u01D0 zh\u00E8 s\u00EC zh\u01D2ng.",
        "zh\u01D0 y\u00E0o n\u01D0 x\u00EC x\u00EC gu\u0101n ch\u00E1, du\u014D du\u014D q\u00F9 xi\u01CEng, ji\u00F9 n\u00E9ng f\u0101 xi\u00E0n g\u00E8ng du\u014D, ji\u00F9 n\u00E9ng zh\u01CEo d\u00E0o g\u00E8ng du\u014D de ti\u0101n r\u00E1n de zh\u01D0 n\u00E1n zh\u0113n, j\u012B l\u011Bi g\u00E8ng du\u014D de zh\u012B shi."
      ],
      recognizeChars: ["\u614C","\u8FA8","\u5FE0","\u5B9E","\u5BFC","\u76CF","\u6C38","\u95EF","\u78B0","\u7A20","\u7A00","\u6E20","\u79EF"],
      writeChars: ["\u6307","\u9488","\u5E2E","\u52A9","\u5BFC","\u6C38","\u78B0","\u7279","\u79EF"],
      vocabWords: [
        {word:'指南针',pinyin:'zhǐ nán zhēn',en:'compass',sentence:'大自然有很多指南针。',sentenceEn:'Nature has many compasses.'},
        {word:'太阳',pinyin:'tài yáng',en:'sun',sentence:'中午太阳在南边。',sentenceEn:'The sun is in the south at noon.'},
        {word:'北极星',pinyin:'běi jí xīng',en:'North Star',sentence:'北极星指向北方。',sentenceEn:'The North Star points north.'},
        {word:'树影',pinyin:'shù yǐng',en:'tree shadow',sentence:'树影能辨别方向。',sentenceEn:'Tree shadows help identify direction.'},
        {word:'积雪',pinyin:'jī xuě',en:'snow cover',sentence:'积雪化得快的是南面。',sentenceEn:'Snow melts faster on the south side.'}
      ],
      exercises: [
        {type:"recite",cn:"\u6709\u611F\u60C5\u5730\u6717\u8BFB\u8BFE\u6587",en:"Read the text with feeling"},
        {type:"think",cn:"\u8BFE\u6587\u4ECB\u7ECD\u4E86\u54EA\u51E0\u79CD\u5929\u7136\u7684\u6307\u5357\u9488\uFF1F",en:"What natural compasses does the text introduce?"}
      ],
      teachingPoints: [
        {cn:"\u56DB\u79CD\u5929\u7136\u6307\u5357\u9488\uFF1A\u592A\u9633\u3001\u5317\u6781\u661F\u3001\u5927\u6811\u3001\u96EA\u878D\u5316",en:"Four natural compasses: sun, North Star, trees, snowmelt"},
        {cn:"\u8BFE\u6587\u662F\u8BD7\u6B4C\u4F53\u88C1\uFF0C\u6709\u8282\u594F\u611F",en:"The text is in poem format with rhythmic flow"},
        {cn:"\u79D1\u5B66\u5E38\u8BC6\u4E0E\u8BED\u6587\u8BFE\u7ED3\u5408",en:"Combining scientific knowledge with language learning"}
      ],
      parentTips: [
        {cn:"\u5E26\u5B69\u5B50\u6237\u5916\u5B9E\u8DF5\uFF0C\u89C2\u5BDF\u6811\u53F6\u3001\u592A\u9633\u65B9\u5411",en:"Take the child outdoors to observe tree leaves and sun direction"},
        {cn:"\u591C\u665A\u5E26\u5B69\u5B50\u627E\u5317\u6781\u661F",en:"Help the child find the North Star at night"}
      ]
    },
    {
      id: 18, title: "\u592A\u7A7A\u751F\u6D3B\u8DA3\u4E8B\u591A", titleEn: "Fun Facts About Life in Space",
      difficulty: 2,
      text: [
        "\u4F60\u77E5\u9053\u5B87\u822A\u5458\u5728\u592A\u7A7A\u4E2D\u600E\u6837\u751F\u6D3B\u5417\uFF1F\u8BF4\u8D77\u6765\u8FD8\u5F88\u6709\u8DA3\u5462\uFF01",
        "\u5728\u5B87\u5B99\u98DE\u8239\u91CC\uFF0C\u7AD9\u7740\u7761\u89C9\u548C\u8EBA\u7740\u7761\u89C9\u4E00\u6837\u8212\u670D\u3002\u4E0D\u8FC7\uFF0C\u8981\u60F3\u7761\u4E0A\u4E00\u4E2A\u5B89\u7A33\u89C9\uFF0C\u5B87\u822A\u5458\u5FC5\u987B\u628A\u81EA\u5DF1\u7ED1\u5728\u7761\u888B\u91CC\u3002\u4E0D\u7136\uFF0C\u7FFB\u4E00\u4E2A\u8EAB\uFF0C\u5C31\u4F1A\u98D8\u5230\u522B\u5904\u53BB\u4E86\u3002",
        "\u5582\u5728\u592A\u7A7A\u4E2D\u4E5F\u5F88\u7279\u522B\u3002\u56E0\u4E3A\u5931\u91CD\uFF0C\u6C34\u53EA\u80FD\u88C5\u5728\u4E00\u79CD\u5E26\u5438\u7BA1\u7684\u996E\u6C34\u888B\u91CC\u3002\u4E0D\u7528\u5438\u7BA1\u5C31\u5582\u4E0D\u5230\u5634\u91CC\u3002",
        "\u5728\u5B87\u5B99\u98DE\u8239\u91CC\u6D17\u6FA1\u53EF\u4E0D\u662F\u4EF6\u5BB9\u6613\u4E8B\u3002\u4ECE\u6D74\u7F38\u91CC\u653E\u51FA\u7684\u6C34\uFF0C\u6027\u662F\u98D8\u6D6E\u5728\u7A7A\u4E2D\u3002\u4E3A\u4E86\u80FD\u6D17\u4E0A\u6FA1\uFF0C\u79D1\u5B66\u5BB6\u8BBE\u8BA1\u4E86\u4E00\u79CD\u7279\u6B8A\u7684\u6D74\u6876\uFF0C\u628A\u6D74\u6876\u7D27\u7D27\u5730\u5957\u5728\u8EAB\u4E0A\uFF0C\u56FA\u5B9A\u597D\u53CC\u811A\uFF0C\u624D\u80FD\u6D17\u6FA1\u3002",
        "\u4F60\u770B\uFF0C\u5728\u592A\u7A7A\u4E2D\u751F\u6D3B\uFF0C\u662F\u4E0D\u662F\u5F88\u6709\u8DA3\uFF1F"
      ],
      textEn: [
        "Do you know how astronauts live in space? It\u2019s actually quite interesting!",
        "In a spacecraft, sleeping standing up is just as comfortable as lying down. However, for a sound sleep, astronauts must strap themselves into sleeping bags. Otherwise, one turn and they\u2019d float away.",
        "Eating in space is also special. Because of weightlessness, water can only be stored in drinking bags with straws. Without a straw, you can\u2019t get water into your mouth.",
        "Taking a bath in a spacecraft is no easy task. Water released from the tub just floats in the air. To bathe, scientists designed a special tub that fits tightly around the body with feet secured in place.",
        "You see, isn\u2019t life in space fascinating?"
      ],
      textPinyin: [
        "n\u01D0 zh\u012B d\u00E0o y\u01D4 h\u00E1ng yu\u00E1n z\u00E0i t\u00E0i k\u014Dng zh\u014Dng z\u011Bn y\u00E0ng sh\u0113ng hu\u00F3 ma? shu\u014D q\u01D0 l\u00E1i h\u00E1i h\u011Bn y\u01D2u q\u00F9 ne!",
        "z\u00E0i y\u01D4 zh\u00F2u f\u0113i chu\u00E1n l\u01D0, zh\u00E0n zhe shu\u00EC ji\u00E0o h\u00E9 t\u01CEng zhe shu\u00EC ji\u00E0o y\u00ED y\u00E0ng sh\u016B fu. b\u00FA gu\u00F2, y\u00E0o xi\u01CEng shu\u00EC sh\u00E0ng y\u00ED g\u00E8 \u0101n w\u011Bn ji\u00E0o, y\u01D4 h\u00E1ng yu\u00E1n b\u00EC x\u016B b\u01CE z\u00EC j\u01D0 b\u01CEng z\u00E0i shu\u00EC d\u00E0i l\u01D0. b\u00F9 r\u00E1n, f\u0101n y\u00ED g\u00E8 sh\u0113n, ji\u00F9 hu\u00EC pi\u0101o d\u00E0o bi\u00E9 ch\u00F9 q\u00F9 le.",
        "w\u00E8i z\u00E0i t\u00E0i k\u014Dng zh\u014Dng y\u011B h\u011Bn t\u00E8 bi\u00E9. y\u012Bn w\u00E8i sh\u012B zh\u00F2ng, shu\u01D0 zh\u01D0 n\u00E9ng zhu\u0101ng z\u00E0i y\u00EC zh\u01D2ng d\u00E0i x\u012B gu\u01CEn de y\u01D0n shu\u01D0 d\u00E0i l\u01D0. b\u00F9 y\u00F2ng x\u012B gu\u01CEn ji\u00F9 w\u00E8i b\u00FA d\u00E0o zu\u01D0 l\u01D0.",
        "z\u00E0i y\u01D4 zh\u00F2u f\u0113i chu\u00E1n l\u01D0 x\u01D0 z\u01CEo k\u011B b\u00FA sh\u00EC ji\u00E0n r\u00F3ng y\u00EC sh\u00EC. c\u00F3ng y\u00F9 g\u0101ng l\u01D0 f\u00E0ng ch\u016B de shu\u01D0, z\u01D2ng sh\u00EC pi\u0101o f\u00FA z\u00E0i k\u014Dng zh\u014Dng. w\u00E8i le n\u00E9ng x\u01D0 sh\u00E0ng z\u01CEo, k\u0113 xu\u00E9 ji\u0101 sh\u00E8 j\u00EC le y\u00EC zh\u01D2ng t\u00E8 sh\u016B de y\u00F9 t\u01D2ng, b\u01CE y\u00F9 t\u01D2ng j\u01D0n j\u01D0n de t\u00E0o z\u00E0i sh\u0113n sh\u00E0ng, g\u00F9 d\u00ECng h\u01CEo shu\u0101ng ji\u01CEo, c\u00E1i n\u00E9ng x\u01D0 z\u01CEo.",
        "n\u01D0 k\u00E0n, z\u00E0i t\u00E0i k\u014Dng zh\u014Dng sh\u0113ng hu\u00F3, sh\u00EC b\u00FA sh\u00EC h\u011Bn y\u01D2u q\u00F9?"
      ],
      recognizeChars: ["\u822A","\u5B87","\u5B99","\u7A33","\u56FA","\u8231","\u676F","\u996E","\u4EF6","\u9898","\u5BC6","\u6D74","\u6876"],
      writeChars: ["\u676F","\u5931","\u6D17","\u6FA1","\u5BB9","\u6613","\u6D74","\u6876"],
      vocabWords: [
        {word:'太空',pinyin:'tài kōng',en:'space; outer space',sentence:'太空生活很有趣。',sentenceEn:'Life in space is interesting.'},
        {word:'失重',pinyin:'shī zhòng',en:'weightlessness',sentence:'在太空中失重。',sentenceEn:'Weightlessness in space.'},
        {word:'飘浮',pinyin:'piāo fú',en:'float',sentence:'人会飘浮起来。',sentenceEn:'People float up.'},
        {word:'航天员',pinyin:'háng tiān yuán',en:'astronaut',sentence:'航天员在太空工作。',sentenceEn:'Astronauts work in space.'},
        {word:'地球',pinyin:'dì qiú',en:'Earth',sentence:'从太空看地球很美。',sentenceEn:'Earth looks beautiful from space.'}
      ],
      exercises: [
        {type:"read",cn:"\u6717\u8BFB\u8BFE\u6587\uFF0C\u8BF4\u8BF4\u592A\u7A7A\u751F\u6D3B\u6709\u54EA\u4E9B\u8DA3\u4E8B",en:"Read aloud and tell what interesting things happen in space life"},
        {type:"write",cn:"\u7528\u81EA\u5DF1\u7684\u8BDD\u8BF4\u8BF4\u592A\u7A7A\u751F\u6D3B\u4E2D\u7684\u8DA3\u4E8B",en:"Describe interesting space events in your own words"}
      ],
      teachingPoints: [
        {cn:"\u201C\u56E0\u4E3A\u2026\u6240\u4EE5\u2026\u201D\u56E0\u679C\u5173\u7CFB",en:"Cause-and-effect pattern: \u2018because...so...\u2019"},
        {cn:"\u603B\u5206\u603B\u7ED3\u6784\uFF1A\u5F00\u5934\u63D0\u95EE\u2192\u5206\u8FF0\u4E09\u4EF6\u8DA3\u4E8B\u2192\u7ED3\u5C3E\u603B\u7ED3",en:"Structure: opening question \u2192 three fun facts \u2192 closing summary"},
        {cn:"\u8BF4\u660E\u6587\u7684\u8BED\u8A00\u7279\u70B9\uFF1A\u51C6\u786E\u3001\u751F\u52A8\u3001\u6709\u8DA3",en:"Features of expository writing: accurate, vivid, interesting"}
      ],
      parentTips: [
        {cn:"\u548C\u5B69\u5B50\u4E00\u8D77\u67E5\u627E\u66F4\u591A\u592A\u7A7A\u751F\u6D3B\u7684\u8D44\u6599",en:"Look up more information about space life together"},
        {cn:"\u8BA8\u8BBA\u5931\u91CD\u73AF\u5883\u5BF9\u65E5\u5E38\u751F\u6D3B\u7684\u5F71\u54CD",en:"Discuss how weightlessness affects daily life"}
      ]
    }
  ],
  oralComm: {title:"\u957F\u5927\u4EE5\u540E\u505A\u4EC0\u4E48",titleEn:"What to Be When You Grow Up",prompt:{cn:"\u548C\u540C\u5B66\u4EA4\u6D41\u81EA\u5DF1\u957F\u5927\u4EE5\u540E\u60F3\u505A\u4EC0\u4E48\uFF0C\u4E3A\u4EC0\u4E48",en:"Share with classmates what you want to be when you grow up and why"}},
  garden: {
    accumulation: {title:"\u65E5\u79EF\u6708\u7D2F",titleEn:"Accumulation",content:{cn:"\u5BD2\u5BF9\u6696\uFF0C\u6691\u5BF9\u51C9\u3002\u6674\u5BF9\u96E8\uFF0C\u6691\u5BF9\u51C9\u3002\n\u6843\u5BF9\u674E\uFF0C\u67F3\u5BF9\u6768\u3002\u83BA\u5BF9\u71D5\uFF0C\u72AC\u5BF9\u7F8A\u3002",en:"Cold pairs with warm, hot pairs with cool. Sunny pairs with rainy, hot pairs with cool.\nPeach pairs with plum, willow pairs with poplar. Oriole pairs with swallow, dog pairs with sheep."}},
    wordSentence: {title:"\u5B57\u8BCD\u53E5\u8FD0\u7528",titleEn:"Word & Sentence Practice",content:{cn:"\u5E7F\u5B57\u65CF\uFF1A\u5382\u5B57\u65C1\u2014\u2014\u53A8\u3001\u5395\u3001\u53A2\u3001\u53A6\uFF1B\u7A74\u5B57\u5934\u2014\u2014\u7A9F\u3001\u7ABF\u3001\u7A91\u3001\u7A84",en:"Character families: factory-side radical\u2014kitchen, toilet, wing, mansion; cave-top radical\u2014cave, hole, kiln, narrow"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 7 — 课文 Texts (Lessons 19-22)       */
/* ═══════════════════════════════════════════ */
{
  id: 7, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 19, title: "\u5927\u8C61\u7684\u8033\u6735", titleEn: "The Elephant\u2019s Ears",
      difficulty: 2,
      text: [
        "\u5927\u8C61\u6709\u4E00\u5BF9\u5927\u8033\u6735\uFF0C\u50CF\u6247\u5B50\u4F3C\u7684\u8037\u62C9\u7740\u3002",
        "\u5C0F\u5154\u5B50\u8BF4\uFF1A\u201C\u54A6\uFF0C\u5927\u8C61\u554A\uFF0C\u4F60\u7684\u8033\u6735\u600E\u4E48\u8037\u62C9\u4E0B\u6765\u4E86\uFF1F\u201D",
        "\u5927\u8C61\u542C\u4E86\uFF0C\u4E5F\u89C9\u5F97\u5947\u602A\uFF1A\u201C\u6211\u7684\u8033\u6735\u600E\u4E48\u662F\u8037\u62C9\u7740\u7684\u5462\uFF1F\u201D",
        "\u5C0F\u7F8A\u4E5F\u8BF4\uFF1A\u201C\u5927\u8C61\u554A\uFF0C\u4F60\u7684\u8033\u6735\u600E\u4E48\u662F\u8037\u62C9\u7740\u7684\u5462\uFF1F\u6211\u4EEC\u7684\u8033\u6735\u90FD\u662F\u7AD6\u7740\u7684\u5462\u3002\u201D",
        "\u5C0F\u9E7F\u3001\u5C0F\u9A6C\u3001\u5C0F\u8001\u9F20\u2026\u2026\u89C1\u5230\u5927\u8C61\uFF0C\u90FD\u8981\u8BF4\u4ED6\u7684\u8033\u6735\u3002",
        "\u5927\u8C61\u4E5F\u6148\u7740\u6025\u8D77\u6765\u3002\u4ED6\u60F3\uFF1A\u201C\u6211\u5F97\u8BA9\u6211\u7684\u8033\u6735\u7AD6\u8D77\u6765\u3002\u201D",
        "\u600E\u4E48\u529E\u5462\uFF1F\u5927\u8C61\u7528\u4E24\u6839\u7AF9\u7B06\u628A\u8033\u6735\u6491\u8D77\u6765\u3002",
        "\u53EF\u662F\uFF0C\u5230\u4E86\u665A\u4E0A\uFF0C\u5927\u8C61\u8033\u6735\u91CC\u561B\u561B\u5730\u54CD\uFF0C\u6709\u5C0F\u866B\u5B50\u5728\u8033\u6735\u91CC\u8DF3\u821E\u3002",
        "\u201C\u4E0D\u884C\uFF0C\u4E0D\u884C\uFF01\u201D\u5927\u8C61\u6447\u6447\u5934\uFF0C\u628A\u4E24\u6839\u7AF9\u7B06\u62D4\u4E86\u3002",
        "\u5927\u8C61\u8BF4\uFF1A\u201C\u6211\u8FD8\u662F\u8BA9\u8033\u6735\u8037\u7740\u5427\u3002\u4EBA\u5BB6\u662F\u4EBA\u5BB6\uFF0C\u6211\u662F\u6211\u3002\u201D"
      ],
      textEn: [
        "The elephant had a pair of large ears that drooped down like fans.",
        "The little rabbit said: \u201COh, Elephant, why do your ears droop down?\u201D",
        "The elephant heard this and felt puzzled too: \u201CWhy do my ears droop?\u201D",
        "The little sheep also said: \u201CElephant, why do your ears droop? Our ears all stand up straight.\u201D",
        "The little deer, little horse, little mouse... every animal that saw the elephant had something to say about his ears.",
        "The elephant grew anxious. He thought: \u201CI must make my ears stand up.\u201D",
        "What to do? The elephant propped his ears up with two bamboo poles.",
        "But at night, his ears buzzed and hummed\u2014little bugs were dancing inside his ears.",
        "\u201CNo, no!\u201D The elephant shook his head and pulled out both bamboo poles.",
        "The elephant said: \u201CI\u2019d better let my ears droop. Others are others; I am me.\u201D"
      ],
      textPinyin: [
        "d\u00E0 xi\u00E0ng y\u01D2u y\u00ED du\u00EC d\u00E0 \u011Br duo, xi\u00E0ng sh\u00E0n zi sh\u00EC de d\u0101 l\u0101 zhe.",
        "xi\u01CEo t\u00F9 zi shu\u014D: \u201Cy\u014D, d\u00E0 xi\u00E0ng a, n\u01D0 de \u011Br duo z\u011Bn me d\u0101 l\u0101 xi\u00E0 l\u00E1i le?\u201D",
        "d\u00E0 xi\u00E0ng t\u012Bng le, y\u011B ju\u00E9 de q\u00ED gu\u00E0i: \u201Cw\u01D2 de \u011Br duo z\u011Bn me sh\u00EC d\u0101 l\u0101 zhe de ne?\u201D",
        "xi\u01CEo y\u00E1ng y\u011B shu\u014D: \u201Cd\u00E0 xi\u00E0ng a, n\u01D0 de \u011Br duo z\u011Bn me sh\u00EC d\u0101 l\u0101 zhe de ne? w\u01D2 men de \u011Br duo d\u014Du sh\u00EC sh\u00F9 zhe de ne.\u201D",
        "xi\u01CEo l\u00F9, xi\u01CEo m\u01CE, xi\u01CEo l\u01CEo sh\u01D4... ji\u00E0n d\u00E0o d\u00E0 xi\u00E0ng, d\u014Du y\u00E0o shu\u014D t\u0101 de \u011Br duo.",
        "d\u00E0 xi\u00E0ng y\u011B hu\u0101ng zhe j\u00ED q\u01D0 l\u00E1i. t\u0101 xi\u01CEng: \u201Cw\u01D2 d\u011Bi r\u00E0ng w\u01D2 de \u011Br duo sh\u00F9 q\u01D0 l\u00E1i.\u201D",
        "z\u011Bn me b\u00E0n ne? d\u00E0 xi\u00E0ng y\u00F2ng li\u01CEng g\u0113n zh\u00FA g\u0101n b\u01CE \u011Br duo ch\u0113ng q\u01D0 l\u00E1i.",
        "k\u011B sh\u00EC, d\u00E0o le w\u01CEn shang, d\u00E0 xi\u00E0ng \u011Br duo l\u01D0 w\u0113ng w\u0113ng de xi\u01CEng, y\u01D2u xi\u01CEo ch\u00F3ng zi z\u00E0i \u011Br duo l\u01D0 ti\u00E0o w\u01D4.",
        "\u201Cb\u00F9 x\u00EDng, b\u00F9 x\u00EDng!\u201D d\u00E0 xi\u00E0ng y\u00E1o yao t\u00F3u, b\u01CE li\u01CEng g\u0113n zh\u00FA g\u0101n b\u00E1 le.",
        "d\u00E0 xi\u00E0ng shu\u014D: \u201Cw\u01D2 h\u00E1i shi r\u00E0ng \u011Br duo d\u0101 zhe ba. r\u00E9n ji\u0101 sh\u00EC r\u00E9n ji\u0101, w\u01D2 sh\u00EC w\u01D2.\u201D"
      ],
      recognizeChars: ["\u4F3C","\u8037","\u54A6","\u7AD6","\u7B06","\u821E","\u75DB","\u70E6","\u6247"],
      writeChars: ["\u6247","\u6162","\u9047","\u5154","\u5B89","\u6839","\u75DB","\u6700"],
      vocabWords: [
        {word:'大象',pinyin:'dà xiàng',en:'elephant',sentence:'大象有一对大耳朵。',sentenceEn:'The elephant has a pair of big ears.'},
        {word:'耳朵',pinyin:'ěr duo',en:'ear',sentence:'大象的耳朵耷拉着。',sentenceEn:'The elephant ears droop down.'},
        {word:'竖起',pinyin:'shù qǐ',en:'perk up',sentence:'别的动物耳朵都竖着。',sentenceEn:'Other animals have their ears perked up.'},
        {word:'烦恼',pinyin:'fán nǎo',en:'worry',sentence:'大象有了烦恼。',sentenceEn:'The elephant had a worry.'},
        {word:'人家',pinyin:'rén jia',en:'others',sentence:'人家是人家，我是我。',sentenceEn:'Others are others, I am me.'}
      ],
      exercises: [
        {type:"read",cn:"\u5206\u89D2\u8272\u6717\u8BFB\u8BFE\u6587",en:"Read the text in character roles"},
        {type:"think",cn:"\u5927\u8C61\u7684\u60F3\u6CD5\u662F\u600E\u4E48\u6539\u53D8\u7684\uFF1F",en:"How did the elephant\u2019s thinking change?"}
      ],
      teachingPoints: [
        {cn:"\u201C\u4EBA\u5BB6\u662F\u4EBA\u5BB6\uFF0C\u6211\u662F\u6211\u201D\u2014\u2014\u8981\u6709\u81EA\u5DF1\u7684\u4E3B\u89C1",en:"\u2018Others are others; I am me\u2019 \u2014 have your own opinions"},
        {cn:"\u53CD\u590D\u53E5\u5F0F\u7684\u8868\u8FBE\u6548\u679C\uFF08\u5C0F\u5154/\u5C0F\u7F8A/\u5C0F\u9E7F\u90FD\u8BF4\u2026\uFF09",en:"Effect of repetitive sentence patterns (rabbit, sheep, deer all say...)"},
        {cn:"\u591A\u97F3\u5B57\u201C\u4F3C\u201D\u8BFB sh\u00EC\uFF08\u4F3C\u7684\uFF09",en:"Polyphonic character \u4F3C reads sh\u00EC here (like/as if)"}
      ],
      parentTips: [
        {cn:"\u5F15\u5BFC\u5B69\u5B50\u7406\u89E3\u6BCF\u4E2A\u4EBA\u90FD\u6709\u81EA\u5DF1\u7684\u7279\u70B9",en:"Help children understand everyone has their own unique traits"},
        {cn:"\u4E0D\u8981\u76F2\u76EE\u8DDF\u98CE\uFF0C\u8981\u6709\u81EA\u5DF1\u7684\u5224\u65AD",en:"Don\u2019t blindly follow the crowd; have your own judgment"}
      ]
    },
    {
      id: 20, title: "\u86DB\u86DB\u5F00\u5E97", titleEn: "Spider Opens a Shop",
      difficulty: 2,
      text: [
        "\u6709\u4E00\u53EA\u86DB\u86DB\uFF0C\u6BCF\u5929\u8E72\u5728\u7F51\u4E0A\u7B49\u7740\u5C0F\u98DE\u866B\uFF0C\u5F88\u65E0\u804A\uFF0C\u5F88\u5BC2\u5BE5\u3002",
        "\u4ED6\u60F3\uFF1A\u201C\u6211\u8981\u5F00\u4E00\u5BB6\u5546\u5E97\u3002\u5356\u4EC0\u4E48\u5462\uFF1F\u5C31\u5356\u53E3\u7F69\u5427\uFF0C\u56E0\u4E3A\u53E3\u7F69\u7EC7\u8D77\u6765\u5F88\u7B80\u5355\u3002\u201D",
        "\u7B2C\u4E8C\u5929\uFF0C\u86DB\u86DB\u7684\u5546\u5E97\u5F00\u5F20\u4E86\uFF0C\u5E97\u91CC\u7684\u62DB\u724C\u4E0A\u5199\u7740\uFF1A\u201C\u53E3\u7F69\u7F16\u7EC7\u5E97\uFF0C\u6BCF\u4F4D\u987E\u5BA2\u53EA\u9700\u4ED8\u4E00\u5143\u94B1\u3002\u201D",
        "\u53EF\u662F\u6765\u4E86\u4E00\u53EA\u6CB3\u9A6C\u3002\u6CB3\u9A6C\u561E\u5DF4\u597D\u5927\u554A\uFF0C\u86DB\u86DB\u7528\u4E86\u4E00\u6574\u5929\u7684\u529F\u592B\uFF0C\u7EC8\u4E8E\u7EC7\u5B8C\u4E86\u3002",
        "\u6653\uFF0C\u8FD8\u662F\u5356\u522B\u7684\u5427\u3002\u86DB\u86DB\u60F3\uFF1A\u201C\u5356\u4EC0\u4E48\u5462\uFF1F\u5C31\u5356\u56F4\u5DFE\u5427\uFF0C\u56E0\u4E3A\u56F4\u5DFE\u7EC7\u8D77\u6765\u5F88\u7B80\u5355\u3002\u201D",
        "\u7B2C\u4E8C\u5929\uFF0C\u86DB\u86DB\u628A\u62DB\u724C\u6362\u4E86\uFF1A\u201C\u56F4\u5DFE\u7F16\u7EC7\u5E97\uFF0C\u6BCF\u4F4D\u987E\u5BA2\u53EA\u9700\u4ED8\u4E00\u5143\u94B1\u3002\u201D",
        "\u53EF\u662F\u6765\u4E86\u4E00\u53EA\u957F\u9888\u9E7F\u3002\u957F\u9888\u9E7F\u7684\u8116\u5B50\u592A\u957F\u4E86\uFF0C\u86DB\u86DB\u7EC7\u554A\u7EC7\uFF0C\u8DB3\u8DB3\u7EC7\u4E86\u4E00\u4E2A\u661F\u671F\u3002",
        "\u5530\uFF0C\u8FD8\u662F\u5356\u522B\u7684\u5427\u3002\u86DB\u86DB\u60F3\uFF1A\u201C\u5356\u4EC0\u4E48\u5462\uFF1F\u5C31\u5356\u888D\u5B50\u5427\uFF0C\u56E0\u4E3A\u888D\u5B50\u7EC7\u8D77\u6765\u5F88\u7B80\u5355\u3002\u201D",
        "\u7B2C\u4E8C\u5929\uFF0C\u86DB\u86DB\u53C8\u628A\u62DB\u724C\u6362\u4E86\uFF1A\u201C\u888D\u5B50\u7F16\u7EC7\u5E97\uFF0C\u6BCF\u4F4D\u987E\u5BA2\u53EA\u9700\u4ED8\u4E00\u5143\u94B1\u3002\u201D",
        "\u53EF\u662F\u6765\u7684\u662F\u4E00\u6761\u5DE8\u5927\u7684\u8717\u8693\uFF0C\u4ED6\u6709\u56DB\u5341\u4E8C\u53EA\u811A\u3002\u86DB\u86DB\u770B\u5230\u8717\u8693\u7684\u811A\uFF0C\u543E\uFF0C\u8FD8\u662F\u5356\u888D\u5B50\u5427\uFF0C\u56E0\u4E3A\u4ED6\u53EA\u6709\u4E00\u4E2A\u8EAB\u5B50\u3002\u53EF\u662F\u86DB\u86DB\u8F6C\u5FF5\u4E00\u60F3\uFF0C\u8717\u8693\u7684\u56DB\u5341\u4E8C\u53EA\u811A\u2026\u2026\u86DB\u86DB\u5413\u5F97\u5339\u5339\u7F51\u7EF4\u4E5F\u4E0D\u7EC7\u4E86\uFF0C\u8D76\u7D27\u5173\u95E8\u3002"
      ],
      textEn: [
        "There was a spider who sat on his web every day waiting for little flies. He was very bored and lonely.",
        "He thought: \u201CI should open a shop. What to sell? I\u2019ll sell face masks, because masks are easy to weave.\u201D",
        "The next day, the spider\u2019s shop opened for business. The sign in the shop read: \u201CMask Weaving Shop \u2014 each customer only needs to pay one yuan.\u201D",
        "But a hippopotamus came. The hippo\u2019s mouth was so big! The spider spent the whole day and finally finished.",
        "Sigh, I\u2019d better sell something else. The spider thought: \u201CWhat to sell? I\u2019ll sell scarves, because scarves are easy to weave.\u201D",
        "The next day, the spider changed the sign: \u201CScarf Weaving Shop \u2014 Only one yuan per customer.\u201D",
        "But a giraffe came. The giraffe\u2019s neck was so long! The spider wove and wove for a whole week.",
        "Sigh, I\u2019d better sell something else. The spider thought: \u201CWhat to sell? I\u2019ll sell robes, because robes are easy to weave.\u201D",
        "The next day, the spider changed the sign again: \u201CRobe Weaving Shop \u2014 Only one yuan per customer.\u201D",
        "But what came was a giant centipede with forty-two legs. The spider saw the centipede\u2019s feet and gasped\u2014still, robes should be fine since it has only one body. But then the spider realized: the centipede\u2019s forty-two feet... The spider was so scared that he stopped weaving even cobwebs and quickly shut the door."
      ],
      textPinyin: [
        "y\u01D2u y\u00EC zh\u012B zh\u012B zh\u016B, m\u011Bi ti\u0101n d\u016Bn z\u00E0i w\u01CEng sh\u00E0ng d\u011Bng zhe xi\u01CEo f\u0113i ch\u00F3ng, h\u011Bn w\u00FA li\u00E1o, h\u011Bn j\u00EC m\u00F2.",
        "t\u0101 xi\u01CEng: \u201Cw\u01D2 y\u00E0o k\u0101i y\u00EC ji\u0101 sh\u0101ng di\u00E0n. m\u00E0i sh\u00E9n me ne? ji\u00F9 m\u00E0i k\u01D2u zh\u00E0o ba, y\u012Bn w\u00E8i k\u01D2u zh\u00E0o zh\u012B q\u01D0 l\u00E1i h\u011Bn ji\u01CEn d\u0101n.\u201D",
        "d\u00EC \u00E8r ti\u0101n, zh\u012B zh\u016B de sh\u0101ng di\u00E0n k\u0101i zh\u0101ng le, di\u00E0n l\u01D0 de zh\u0101o p\u00E1i sh\u00E0ng xi\u011B zhe: \u201Ck\u01D2u zh\u00E0o bi\u0101n zh\u012B di\u00E0n, m\u011Bi w\u00E8i g\u00F9 k\u00E8 zh\u01D0 x\u016B f\u00F9 y\u00EC yu\u00E1n qi\u00E1n.\u201D",
        "k\u011B sh\u00EC l\u00E1i le y\u00EC zh\u012B h\u00E9 m\u01CE. h\u00E9 m\u01CE zu\u01D0 b\u0101 h\u01CEo d\u00E0 a, zh\u012B zh\u016B y\u00F2ng le y\u00EC zh\u011Bng ti\u0101n de g\u014Dng fu, zh\u014Dng y\u00FA zh\u012B w\u00E1n le.",
        "sh\u00EC, h\u00E1i shi m\u00E0i bi\u00E9 de ba. zh\u012B zh\u016B xi\u01CEng: \u201Cm\u00E0i sh\u00E9n me ne? ji\u00F9 m\u00E0i w\u00E9i j\u012Bn ba, y\u012Bn w\u00E8i w\u00E9i j\u012Bn zh\u012B q\u01D0 l\u00E1i h\u011Bn ji\u01CEn d\u0101n.\u201D",
        "d\u00EC \u00E8r ti\u0101n, zh\u012B zh\u016B b\u01CE zh\u0101o p\u00E1i hu\u00E0n le: \u201Cw\u00E9i j\u012Bn bi\u0101n zh\u012B di\u00E0n, m\u011Bi w\u00E8i g\u00F9 k\u00E8 zh\u01D0 x\u016B f\u00F9 y\u00EC yu\u00E1n qi\u00E1n.\u201D",
        "k\u011B sh\u00EC l\u00E1i le y\u00EC zh\u012B ch\u00E1ng j\u01D0ng l\u00F9. ch\u00E1ng j\u01D0ng l\u00F9 de b\u00F3 zi t\u00E0i ch\u00E1ng le, zh\u012B zh\u016B zh\u012B a zh\u012B, z\u00FA z\u00FA zh\u012B le y\u00EC g\u00E8 x\u012Bng q\u012B.",
        "sh\u00EC, h\u00E1i shi m\u00E0i bi\u00E9 de ba. zh\u012B zh\u016B xi\u01CEng: \u201Cm\u00E0i sh\u00E9n me ne? ji\u00F9 m\u00E0i p\u00E1o zi ba, y\u012Bn w\u00E8i p\u00E1o zi zh\u012B q\u01D0 l\u00E1i h\u011Bn ji\u01CEn d\u0101n.\u201D",
        "d\u00EC \u00E8r ti\u0101n, zh\u012B zh\u016B y\u00F2u b\u01CE zh\u0101o p\u00E1i hu\u00E0n le: \u201Cp\u00E1o zi bi\u0101n zh\u012B di\u00E0n, m\u011Bi w\u00E8i g\u00F9 k\u00E8 zh\u01D0 x\u016B f\u00F9 y\u00EC yu\u00E1n qi\u00E1n.\u201D",
        "k\u011B sh\u00EC l\u00E1i de sh\u00EC y\u00EC ti\u00E1o j\u00F9 d\u00E0 de w\u00FA g\u014Dng, t\u0101 y\u01D2u s\u00EC sh\u00ED \u00E8r zh\u012B ji\u01CEo. zh\u012B zh\u016B k\u00E0n d\u00E0o w\u00FA g\u014Dng de ji\u01CEo, \u00E9n, h\u00E1i shi m\u00E0i p\u00E1o zi ba, y\u012Bn w\u00E8i t\u0101 zh\u01D0 y\u01D2u y\u00ED g\u00E8 sh\u0113n zi. k\u011B sh\u00EC zh\u012B zh\u016B zhu\u01CEn ni\u00E0n y\u00EC xi\u01CEng, w\u00FA g\u014Dng de s\u00EC sh\u00ED \u00E8r zh\u012B ji\u01CEo... zh\u012B zh\u016B xi\u00E0 de p\u012B p\u012B w\u01CEng y\u011B b\u00F9 zh\u012B le, g\u01CEn j\u01D0n gu\u0101n m\u00E9n."
      ],
      recognizeChars: ["\u5E97","\u8E72","\u5BC2","\u5BE5","\u7F69","\u7F16","\u987E","\u4ED8","\u592B","\u6362","\u9888","\u889C","\u5306","\u8717","\u8693"],
      writeChars: ["\u5E97","\u51B3","\u5B9A","\u5546","\u592B","\u7EC8","\u5B8C","\u6362","\u671F"],
      vocabWords: [
        {word:'蜘蛛',pinyin:'zhī zhū',en:'spider',sentence:'蜘蛛开了一家店。',sentenceEn:'The spider opened a shop.'},
        {word:'口罩',pinyin:'kǒu zhào',en:'mask',sentence:'帮河马织口罩。',sentenceEn:'Weaving a mask for the hippo.'},
        {word:'围巾',pinyin:'wéi jīn',en:'scarf',sentence:'帮长颈鹿织围巾。',sentenceEn:'Weaving a scarf for the giraffe.'},
        {word:'袜子',pinyin:'wà zi',en:'sock',sentence:'帮蜈蚣织袜子。',sentenceEn:'Weaving socks for the centipede.'},
        {word:'招牌',pinyin:'zhāo pái',en:'signboard',sentence:'蜘蛛换了招牌。',sentenceEn:'The spider changed the signboard.'}
      ],
      exercises: [
        {type:"read",cn:"\u6545\u4E8B\u5F88\u6709\u8DA3\uFF0C\u8BFB\u4E00\u8BFB\uFF0C\u8BF4\u4E00\u8BF4",en:"The story is fun; read it and retell it"},
        {type:"think",cn:"\u86DB\u86DB\u4E3A\u4EC0\u4E48\u6700\u540E\u5173\u95E8\u4E86\uFF1F",en:"Why did the spider close the shop at the end?"}
      ],
      teachingPoints: [
        {cn:"\u53CD\u590D\u7ED3\u6784\uFF1A\u201C\u5356\u4EC0\u4E48\u5462\u2192\u5C31\u5356X\u2192\u6362\u62DB\u724C\u2192\u6765\u4E86Y\u201D\u4E09\u6B21\u91CD\u590D",en:"Repetitive structure: \u2018What to sell \u2192 sell X \u2192 change sign \u2192 Y comes\u2019 repeats three times"},
        {cn:"\u5BF9\u6BD4\u624B\u6CD5\uFF1A\u201C\u5F88\u7B80\u5355\u201D\u4E0E\u5B9E\u9645\u56F0\u96BE\u5F62\u6210\u53CD\u5DEE",en:"Contrast technique: \u2018easy to weave\u2019 vs. actual difficulty creates irony"},
        {cn:"\u8BA4\u8BC6\u201C\u56E0\u4E3A\u2026\u6240\u4EE5\u2026\u201D\u7684\u56E0\u679C\u5173\u7CFB",en:"Recognize \u2018because...therefore...\u2019 causal relationships"}
      ],
      parentTips: [
        {cn:"\u8BA9\u5B69\u5B50\u7EED\u7F16\u6545\u4E8B\uFF1A\u86DB\u86DB\u63A5\u4E0B\u6765\u4F1A\u600E\u6837\uFF1F",en:"Let children continue the story: what happens next?"},
        {cn:"\u8BA8\u8BBA\u505A\u4E8B\u60C5\u8981\u8003\u8651\u5468\u5168",en:"Discuss thinking things through before acting"}
      ]
    },
    {
      id: 21, title: "\u9752\u86D9\u5356\u6CE5\u5858", titleEn: "Frog Sells His Mud Pond",
      difficulty: 2,
      text: [
        "\u9752\u86D9\u4F4F\u5728\u70C2\u6CE5\u5858\u91CC\u3002\u4ED6\u89C9\u5F97\u8FD9\u513F\u4E0D\u600E\u4E48\u597D\uFF0C\u60F3\u628A\u6CE5\u5858\u5356\u6389\u3002",
        "\u201C\u5356\u6CE5\u5858\u5586\uFF0C\u5356\u6CE5\u5858\uFF01\u201D\u9752\u86D9\u7AD9\u5728\u7267\u573A\u65C1\u5480\u559D\u3002\u4E00\u5934\u8001\u725B\u8D70\u8FC7\u6765\u3002",
        "\u8001\u725B\u8BF4\uFF1A\u201C\u8FD9\u4E2A\u6C34\u5751\u5751\u561D\u561D\u7684\uFF0C\u5728\u5468\u56F4\u79CD\u4E9B\u8349\u5427\u3002\u201D",
        "\u9752\u86D9\u60F3\uFF1A\u201C\u5BF9\uFF0C\u5BF9\uFF01\u8981\u662F\u5468\u56F4\u957F\u6EE1\u9752\u8349\uFF0C\u5C31\u80FD\u5356\u51FA\u53BB\u4E86\u3002\u201D\u4E8E\u662F\u4ED6\u5C31\u79CD\u4E86\u8349\u3002",
        "\u201C\u5356\u6CE5\u5858\u5586\uFF0C\u5356\u6CE5\u5858\uFF01\u201D\u9752\u86D9\u53C8\u7AD9\u5728\u7267\u573A\u65C1\u5480\u559D\u3002\u4E00\u5339\u91CE\u9A6C\u8D70\u8FC7\u6765\u3002",
        "\u91CE\u9A6C\u8BF4\uFF1A\u201C\u4F60\u8FD9\u513F\u6CA1\u6709\u8DEF\uFF0C\u4F60\u5E94\u8BE5\u5728\u6CE5\u5858\u5468\u56F4\u79CD\u4E9B\u6811\u3002\u201D",
        "\u9752\u86D9\u542C\u4E86\u91CE\u9A6C\u7684\u8BDD\uFF0C\u5C31\u5728\u6CE5\u5858\u5468\u56F4\u79CD\u4E86\u6811\u3002",
        "\u5C0F\u9E1F\u8BF4\uFF1A\u201C\u5728\u6CE5\u5858\u65C1\u8FB9\u76D6\u4E9B\u623F\u5B50\u5427\uFF0C\u518D\u79CD\u4E9B\u82B1\u3002\u201D\u9752\u86D9\u542C\u4E86\uFF0C\u5C31\u7167\u7740\u5C0F\u9E1F\u7684\u8BDD\u505A\u4E86\u3002",
        "\u86C6\u86C4\u8BF4\uFF1A\u201C\u8FD9\u513F\u7F3A\u4E2A\u5C0F\u8DEF\u3002\u201D\u4E8E\u662F\u9752\u86D9\u5728\u6CE5\u5858\u5468\u56F4\u7802\u4E86\u5C0F\u8DEF\u3002",
        "\u5C0F\u7334\u5B50\u8BF4\uFF1A\u201C\u4F60\u5E94\u8BE5\u5728\u6CE5\u5858\u91CC\u79CD\u4E9B\u8377\u82B1\u3002\u201D\u9752\u86D9\u542C\u4E86\u5C0F\u7334\u5B50\u7684\u8BDD\uFF0C\u53C8\u79CD\u4E86\u8377\u82B1\u3002",
        "\u73B0\u5728\uFF0C\u6CE5\u5858\u53D8\u5F97\u5F88\u6F02\u4EAE\u4E86\uFF1A\u7EFF\u8309\u8309\u7684\u8349\u5730\u4E0A\u5F00\u6EE1\u4E86\u9C9C\u82B1\uFF0C\u82B1\u513F\u5F15\u6765\u4E86\u8774\u8776\u548C\u8702\u7FA4\u2026\u2026",
        "\u9752\u86D9\u5750\u5728\u6CE5\u5858\u91CC\uFF0C\u60F3\uFF1A\u201C\u8FD9\u513F\u591A\u597D\u554A\uFF01\u6709\u6811\uFF0C\u6709\u82B1\uFF0C\u6709\u8349\uFF0C\u6709\u5C0F\u8DEF\uFF0C\u8FD8\u6709\u597D\u670B\u53CB\u3002\u201D\u9752\u86D9\u4E0D\u518D\u5356\u6CE5\u5858\u4E86\u3002"
      ],
      textEn: [
        "A frog lived in a shabby mud pond. He thought it wasn\u2019t so great and wanted to sell it.",
        "\u201CMud pond for sale! Mud pond for sale!\u201D the frog called out by the pasture. An old ox walked over.",
        "The old ox said: \u201CThis muddy pit is too dreary. Plant some grass around it.\u201D",
        "The frog thought: \u201CRight, right! If the surroundings are covered in green grass, I can sell it.\u201D So he planted grass.",
        "\u201CMud pond for sale! Mud pond for sale!\u201D the frog called again. A wild horse came by.",
        "The wild horse said: \u201CThere\u2019s no path here. You should plant some trees around the pond.\u201D",
        "The frog listened and planted trees around the pond.",
        "A little bird said: \u201CBuild some houses by the pond and plant some flowers.\u201D The frog did as the bird suggested.",
        "A dragonfly said: \u201CThis place needs a little path.\u201D So the frog paved paths around the pond.",
        "A little monkey said: \u201CYou should plant lotus in the pond.\u201D The frog listened and planted lotus too.",
        "Now the mud pond was beautiful: lush green grass covered with flowers, flowers attracting butterflies and swarms of bees...",
        "The frog sat in the pond and thought: \u201CHow wonderful this place is! Trees, flowers, grass, paths, and good friends.\u201D The frog no longer wanted to sell his mud pond."
      ],
      textPinyin: [
        "q\u012Bng w\u0101 zh\u00F9 z\u00E0i l\u00E0n n\u00ED t\u00E1ng l\u01D0. t\u0101 ju\u00E9 de zh\u00E8r b\u00F9 z\u011Bn me h\u01CEo, xi\u01CEng b\u01CE n\u00ED t\u00E1ng m\u00E0i di\u00E0o.",
        "\u201Cm\u00E0i n\u00ED t\u00E1ng lo, m\u00E0i n\u00ED t\u00E1ng!\u201D q\u012Bng w\u0101 zh\u00E0n z\u00E0i m\u00F9 ch\u01CEng p\u00E1ng y\u0101o he. y\u00EC t\u00F3u l\u01CEo ni\u00FA z\u01D2u gu\u00F2 l\u00E1i.",
        "l\u01CEo ni\u00FA shu\u014D: \u201Czh\u00E8 ge shu\u01D0 k\u0113ng k\u0113ng k\u0113ng w\u0101 w\u0101 de, z\u00E0i zh\u014Du w\u00E9i zh\u01D2ng xi\u0113 c\u01CEo ba.\u201D",
        "q\u012Bng w\u0101 xi\u01CEng: \u201Cdu\u00EC, du\u00EC! y\u00E0o shi zh\u014Du w\u00E9i zh\u01CEng m\u01CEn q\u012Bng c\u01CEo, ji\u00F9 n\u00E9ng m\u00E0i ch\u016B q\u00F9 le.\u201D y\u00FA sh\u00EC t\u0101 ji\u00F9 zh\u01D2ng le c\u01CEo.",
        "\u201Cm\u00E0i n\u00ED t\u00E1ng lo, m\u00E0i n\u00ED t\u00E1ng!\u201D q\u012Bng w\u0101 y\u00F2u zh\u00E0n z\u00E0i m\u00F9 ch\u01CEng p\u00E1ng y\u0101o he. y\u00EC p\u01D0 y\u011B m\u01CE z\u01D2u gu\u00F2 l\u00E1i.",
        "y\u011B m\u01CE shu\u014D: \u201Cn\u01D0 zh\u00E8r m\u00E9i y\u01D2u l\u00F9, n\u01D0 y\u012Bng g\u0101i z\u00E0i n\u00ED t\u00E1ng zh\u014Du w\u00E9i zh\u01D2ng xi\u0113 sh\u00F9.\u201D",
        "q\u012Bng w\u0101 t\u012Bng le y\u011B m\u01CE de hu\u00E0, ji\u00F9 z\u00E0i n\u00ED t\u00E1ng zh\u014Du w\u00E9i zh\u01D2ng le sh\u00F9.",
        "xi\u01CEo ni\u01CEo shu\u014D: \u201Cz\u00E0i n\u00ED t\u00E1ng p\u00E1ng bi\u0101n g\u00E0i xi\u0113 f\u00E1ng zi ba, z\u00E0i zh\u01D2ng xi\u0113 hu\u0101.\u201D q\u012Bng w\u0101 t\u012Bng le, ji\u00F9 zh\u00E0o zhe xi\u01CEo ni\u01CEo de hu\u00E0 zu\u00F2 le.",
        "q\u012Bng t\u00EDng shu\u014D: \u201Czh\u00E8r qu\u0113 g\u00E8 xi\u01CEo l\u00F9.\u201D y\u00FA sh\u00EC q\u012Bng w\u0101 z\u00E0i n\u00ED t\u00E1ng zh\u014Du w\u00E9i p\u016B le xi\u01CEo l\u00F9.",
        "xi\u01CEo h\u00F3u zi shu\u014D: \u201Cn\u01D0 y\u012Bng g\u0101i z\u00E0i n\u00ED t\u00E1ng l\u01D0 zh\u01D2ng xi\u0113 h\u00E9 hu\u0101.\u201D q\u012Bng w\u0101 t\u012Bng le xi\u01CEo h\u00F3u zi de hu\u00E0, y\u00F2u zh\u01D2ng le h\u00E9 hu\u0101.",
        "xi\u00E0n z\u00E0i, n\u00ED t\u00E1ng bi\u00E0n de h\u011Bn pi\u00E0o liang le: l\u01DC m\u00E0o m\u00E0o de c\u01CEo d\u00EC sh\u00E0ng k\u0101i m\u01CEn le xi\u0101n hu\u0101, hu\u0101r y\u01D0n l\u00E1i le h\u00FA di\u00E9 h\u00E9 f\u0113ng q\u00FAn...",
        "q\u012Bng w\u0101 zu\u00F2 z\u00E0i n\u00ED t\u00E1ng l\u01D0, xi\u01CEng: \u201Czh\u00E8r du\u014D h\u01CEo a! y\u01D2u sh\u00F9, y\u01D2u hu\u0101, y\u01D2u c\u01CEo, y\u01D2u xi\u01CEo l\u00F9, h\u00E1i y\u01D2u h\u01CEo p\u00E9ng you.\u201D q\u012Bng w\u0101 b\u00F9 z\u00E0i m\u00E0i n\u00ED t\u00E1ng le."
      ],
      recognizeChars: ["\u5356","\u70C2","\u724C","\u559D","\u5751","\u8212","\u96C6","\u7C7D","\u64AD","\u6492","\u8335","\u704C","\u7F3A","\u6CF3","\u6123"],
      writeChars: ["\u86D9","\u5356","\u642C","\u5012","\u7C7D","\u6CC9","\u7834","\u5E94"],
      vocabWords: [
        {word:'泥塘',pinyin:'ní táng',en:'mud pond',sentence:'青蛙住在烂泥塘里。',sentenceEn:'The frog lived in a muddy pond.'},
        {word:'吆喝',pinyin:'yāo he',en:'shout (to sell)',sentence:'青蛙吆喝卖泥塘。',sentenceEn:'The frog shouted to sell the mud pond.'},
        {word:'种草',pinyin:'zhǒng cǎo',en:'plant grass',sentence:'青蛙种了草。',sentenceEn:'The frog planted grass.'},
        {word:'栽树',pinyin:'zāi shù',en:'plant trees',sentence:'又栽了树。',sentenceEn:'Then planted trees.'},
        {word:'舒服',pinyin:'shū fu',en:'comfortable',sentence:'泥塘变得很舒服。',sentenceEn:'The pond became very comfortable.'}
      ],
      exercises: [
        {type:"read",cn:"\u5206\u89D2\u8272\u6717\u8BFB\u8BFE\u6587",en:"Read the text in character roles"},
        {type:"think",cn:"\u9752\u86D9\u4E3A\u4EC0\u4E48\u4E0D\u5356\u6CE5\u5858\u4E86\uFF1F",en:"Why did the frog stop selling his pond?"}
      ],
      teachingPoints: [
        {cn:"\u52B3\u52A8\u521B\u9020\u7F8E\u597D\u751F\u6D3B\u7684\u9053\u7406",en:"The lesson: hard work creates a beautiful life"},
        {cn:"\u53CD\u590D\u53E5\u5F0F\u201C\u5356\u6CE5\u5858\u5586\u201D\u63A8\u52A8\u60C5\u8282\u53D1\u5C55",en:"Repetitive pattern \u2018Mud pond for sale!\u2019 drives the plot forward"},
        {cn:"\u542C\u53D6\u522B\u4EBA\u5EFA\u8BAE\u5E76\u4ED8\u8BF8\u884C\u52A8",en:"Listening to advice and taking action"}
      ],
      parentTips: [
        {cn:"\u8BA8\u8BBA\u52AA\u529B\u6539\u5584\u73AF\u5883\u7684\u91CD\u8981\u6027",en:"Discuss the importance of effort in improving one\u2019s surroundings"},
        {cn:"\u5F15\u5BFC\u5B69\u5B50\u5584\u4E8E\u542C\u53D6\u522B\u4EBA\u7684\u610F\u89C1",en:"Guide children to value others\u2019 suggestions"}
      ]
    },
    {
      id: 22, title: "\u5C0F\u6BDB\u866B", titleEn: "Little Caterpillar",
      difficulty: 2,
      text: [
        "\u4E00\u6761\u5C0F\u6BDB\u866B\u8D9F\u5728\u4E00\u7247\u53F6\u5B50\u4E0A\uFF0C\u5BF9\u9762\u7684\u5C0F\u6606\u866B\u90FD\u5728\u5FEB\u4E50\u5730\u98DE\u6765\u98DE\u53BB\u3002",
        "\u5C0F\u6BDB\u866B\u89C9\u5F97\u81EA\u5DF1\u53EF\u601C\u6781\u4E86\u3002\u4ED6\u65E2\u4E0D\u4F1A\u5531\uFF0C\u4E5F\u4E0D\u4F1A\u8DD1\uFF0C\u66F4\u4E0D\u4F1A\u98DE\u3002",
        "\u5C0F\u6BDB\u866B\u8D39\u4E86\u4E5D\u725B\u4E8C\u864E\u4E4B\u529B\uFF0C\u624D\u631A\u632A\u5230\u4E86\u4E00\u7247\u65B0\u53F6\u5B50\u4E0A\u3002",
        "\u201C\u4E0D\u8981\u60F3\u522B\u4EBA\u4E86\uFF0C\u6211\u8BE5\u5C3D\u81EA\u5DF1\u7684\u529B\u91CF\u3002\u201D\u5C0F\u6BDB\u866B\u8BF4\u7740\uFF0C\u5410\u51FA\u4E00\u6839\u4E1D\u3002",
        "\u4ECE\u6B64\u4EE5\u540E\uFF0C\u4ED6\u5C31\u4E0D\u505C\u5730\u5410\u554A\uFF0C\u7EC7\u554A\u2026\u2026",
        "\u7EC8\u4E8E\uFF0C\u4ED6\u628A\u81EA\u5DF1\u88F9\u5728\u4E86\u91CC\u9762\u3002",
        "\u201C\u4EE5\u540E\u4F1A\u600E\u6837\u5462\uFF1F\u201D\u4ED6\u60F3\u3002\u53CD\u6B63\u53EA\u8981\u5C3D\u529B\u5C31\u597D\u4E86\u3002",
        "\u8FC7\u4E86\u4E0D\u77E5\u591A\u5C11\u5929\uFF0C\u8309\u5B50\u91CC\u7684\u5C0F\u6BDB\u866B\u5F00\u59CB\u6CE8\u610F\u5230\u4E00\u4EF6\u4E8B\u60C5\u2014\u2014\u5916\u9762\u7684\u5149\u4EAE\u4E86\u3002\u8309\u5B50\u88C2\u5F00\u4E86\uFF01\u4E00\u53EA\u7F8E\u4E3D\u7684\u8774\u8776\u7AD9\u4E86\u51FA\u6765\u3002",
        "\u5979\u5F20\u5F00\u53CC\u7FC5\uFF0C\u98DE\u554A\u98DE\uFF0C\u5728\u9633\u5149\u4E0B\u7FE9\u7FE9\u8D77\u821E\u3002"
      ],
      textEn: [
        "A little caterpillar lay on a leaf. Insects all around were happily flying here and there.",
        "The caterpillar felt very pitiful. He could neither sing, nor run, and certainly couldn\u2019t fly.",
        "The caterpillar exerted tremendous effort just to crawl to a new leaf.",
        "\u201CI shouldn\u2019t think about others. I should do my best.\u201D The caterpillar said, and spun out a thread of silk.",
        "From then on, he kept spinning and weaving, spinning and weaving...",
        "Finally, he wrapped himself inside.",
        "\u201CWhat will happen next?\u201D he wondered. In any case, just try your best.",
        "After who knows how many days, the little caterpillar in the cocoon noticed something\u2014the light outside brightened. The cocoon split open! A beautiful butterfly stepped out.",
        "She spread her wings and flew, flew, dancing gracefully in the sunlight."
      ],
      textPinyin: [
        "y\u00EC ti\u00E1o xi\u01CEo m\u00E1o ch\u00F3ng qu\u0101n z\u00E0i y\u00EC pi\u00E0n y\u00E8 zi sh\u00E0ng, du\u00EC mi\u00E0n de xi\u01CEo k\u016Bn ch\u00F3ng d\u014Du z\u00E0i ku\u00E0i l\u00E8 de f\u0113i l\u00E1i f\u0113i q\u00F9.",
        "xi\u01CEo m\u00E1o ch\u00F3ng ju\u00E9 de z\u00EC j\u01D0 k\u011B li\u00E1n j\u00ED le. t\u0101 j\u00EC b\u00FA hu\u00EC ch\u00E0ng, y\u011B b\u00FA hu\u00EC p\u01CEo, g\u00E8ng b\u00FA hu\u00EC f\u0113i.",
        "xi\u01CEo m\u00E1o ch\u00F3ng f\u00E8i le ji\u01D4 ni\u00FA \u00E8r h\u01D4 zh\u012B l\u00EC, c\u00E1i ch\u012B nu\u00F3 d\u00E0o le y\u00EC pi\u00E0n x\u012Bn y\u00E8 zi sh\u00E0ng.",
        "\u201Cb\u00F9 y\u00E0o xi\u01CEng bi\u00E9 r\u00E9n le, w\u01D2 g\u0101i j\u00ECn z\u00EC j\u01D0 de l\u00EC liang.\u201D xi\u01CEo m\u00E1o ch\u00F3ng shu\u014D zhe, t\u01D4 ch\u016B y\u00EC g\u0113n s\u012B.",
        "c\u00F3ng c\u01D0 y\u01D0 h\u00F2u, t\u0101 ji\u00F9 b\u00F9 t\u00EDng de t\u01D4 a, zh\u012B a...",
        "zh\u014Dng y\u00FA, t\u0101 b\u01CE z\u00EC j\u01D0 gu\u01D2 z\u00E0i le l\u01D0 mi\u00E0n.",
        "\u201Cy\u01D0 h\u00F2u hu\u00EC z\u011Bn y\u00E0ng ne?\u201D t\u0101 xi\u01CEng. f\u01CEn zh\u00E8ng zh\u01D0 y\u00E0o j\u00ECn l\u00EC ji\u00F9 h\u01CEo le.",
        "gu\u00F2 le b\u00F9 zh\u012B du\u014D sh\u01CEo ti\u0101n, ji\u01CEn zi l\u01D0 de xi\u01CEo m\u00E1o ch\u00F3ng k\u0101i sh\u01D0 zh\u00F9 y\u00EC d\u00E0o y\u00EC ji\u00E0n sh\u00EC q\u00EDng\u2014\u2014w\u00E0i mi\u00E0n de gu\u0101ng li\u00E0ng le. ji\u01CEn zi li\u00E8 k\u0101i le! y\u00EC zh\u012B m\u011Bi l\u00EC de h\u00FA di\u00E9 zh\u00E0n le ch\u016B l\u00E1i.",
        "t\u0101 zh\u0101ng k\u0101i shu\u0101ng ch\u00EC, f\u0113i a f\u0113i, z\u00E0i y\u00E1ng gu\u0101ng xi\u00E0 pi\u0101n pi\u0101n q\u01D0 w\u01D4."
      ],
      recognizeChars: ["\u6606","\u601C","\u631A","\u4EFF","\u4F5B","\u5C3D","\u4EFB","\u4F55","\u7EBA","\u7AED","\u89C4","\u5F8B","\u5F85","\u632F","\u6109","\u7ED2"],
      writeChars: ["\u6574","\u62BD","\u7EBA","\u7EC7","\u7F16","\u600E","\u5E03","\u6D88"],
      vocabWords: [
        {word:'毛虫',pinyin:'máo chóng',en:'caterpillar',sentence:'一只小毛虫趴在叶子上。',sentenceEn:'A caterpillar lies on a leaf.'},
        {word:'笨拙',pinyin:'bèn zhuō',en:'clumsy',sentence:'小毛虫很笨拙。',sentenceEn:'The caterpillar was very clumsy.'},
        {word:'尽力',pinyin:'jìn lì',en:'do one best',sentence:'小毛虫尽力做好每一件事。',sentenceEn:'The caterpillar did its best at everything.'},
        {word:'茧',pinyin:'jiǎn',en:'cocoon',sentence:'小毛虫吐丝结茧。',sentenceEn:'The caterpillar spun silk to make a cocoon.'},
        {word:'蝴蝶',pinyin:'hú dié',en:'butterfly',sentence:'小毛虫变成了蝴蝶！',sentenceEn:'The caterpillar became a butterfly!'}
      ],
      exercises: [
        {type:"read",cn:"\u6709\u611F\u60C5\u5730\u6717\u8BFB\u8BFE\u6587",en:"Read the text with feeling"},
        {type:"think",cn:"\u5C0F\u6BDB\u866B\u7ECF\u5386\u4E86\u54EA\u4E9B\u53D8\u5316\uFF1F",en:"What changes did the caterpillar go through?"}
      ],
      teachingPoints: [
        {cn:"\u86F4\u53D8\u8776\u7684\u751F\u547D\u53D8\u5316\u8FC7\u7A0B",en:"The metamorphosis of caterpillar to butterfly"},
        {cn:"\u201C\u5C3D\u81EA\u5DF1\u7684\u529B\u91CF\u201D\u7684\u601D\u60F3\u542F\u8FEA",en:"The inspiring idea of \u2018doing your best\u2019"},
        {cn:"\u201C\u65E2\u4E0D\u4F1A\u2026\u4E5F\u4E0D\u4F1A\u2026\u66F4\u4E0D\u4F1A\u2026\u201D\u9012\u8FDB\u53E5\u5F0F",en:"Progressive pattern: \u2018neither can...nor can...and certainly can\u2019t...\u2019"}
      ],
      parentTips: [
        {cn:"\u5E26\u5B69\u5B50\u89C2\u5BDF\u6BDB\u6BDB\u866B/\u8774\u8776\uFF0C\u8054\u7CFB\u8BFE\u6587",en:"Observe caterpillars/butterflies with the child, connecting to the text"},
        {cn:"\u9F13\u52B1\u5B69\u5B50\u575A\u6301\u52AA\u529B\uFF0C\u4E0D\u653E\u5F03",en:"Encourage the child to persevere and not give up"}
      ]
    }
  ],
  oralComm: {title:"\u63A8\u8350\u4E00\u90E8\u52A8\u753B\u7247",titleEn:"Recommend an Animated Film",prompt:{cn:"\u5411\u540C\u5B66\u63A8\u8350\u4E00\u90E8\u4F60\u559C\u6B22\u7684\u52A8\u753B\u7247\uFF0C\u8BF4\u8BF4\u63A8\u8350\u7406\u7531",en:"Recommend a cartoon you like to classmates and explain why"}},
  garden: {
    accumulation: {title:"\u65E5\u79EF\u6708\u7D2F",titleEn:"Accumulation",content:{cn:"\u626B\u5E1A\u3001\u62B9\u5E03\u3001\u62D6\u628A\u3001\u7C38\u7B95\u3001\u73BB\u7483\u3001\u5783\u573E",en:"Broom, rag, mop, dustpan, glass, trash (household cleaning items)"}},
    wordSentence: {title:"\u5B57\u8BCD\u53E5\u8FD0\u7528",titleEn:"Word & Sentence Practice",content:{cn:"\u201C\u4E00\u2026\u4E0D\u2026\u201D\u53E5\u5F0F\u7EC3\u4E60\uFF1A\u4E00\u58F0\u4E0D\u54CD\u3001\u4E00\u52A8\u4E0D\u52A8",en:"Practice \u2018one...not...\u2019 pattern: not a sound, not a movement"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 8 — 课文 Texts (Lessons 23-25)       */
/* ═══════════════════════════════════════════ */
{
  id: 8, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 23, title: "\u7956\u5148\u7684\u6447\u7BEE", titleEn: "Cradle of Our Ancestors",
      difficulty: 2,
      text: [
        "\u7235\u7235\u8BF4\uFF0C\u90A3\u539F\u59CB\u68EE\u6797\uFF0C\u662F\u6211\u4EEC\u7956\u5148\u7684\u6447\u7BEE\u3002",
        "\u771F\u6709\u610F\u601D\uFF0C\u8FD9\u662F\u591A\u5927\u7684\u6447\u7BEE\u554A\uFF01",
        "\u90A3\u6D53\u7EFF\u7684\u6811\u836B\uFF0C\u4E00\u671B\u65E0\u8FB9\uFF0C\u906E\u4F4F\u4E86\u84DD\u5929\u3002",
        "\u6211\u60F3\u2014\u2014\u6211\u4EEC\u7684\u7956\u5148\uFF0C\u53EF\u66FE\u5728\u8FD9\u4E9B\u5927\u6811\u4E0A\u6458\u91CE\u679C\uFF0C\u6389\u677E\u679C\uFF1F",
        "\u53EF\u66FE\u5728\u90A3\u7247\u8349\u5730\u4E0A\u548C\u91CE\u5154\u8D5B\u8DD1\uFF0C\u770B\u868C\u706B\u866B\u63D0\u7740\u706F\u7B3C\u95F2\u901B\uFF1F",
        "\u90A3\u65F6\u5019\uFF0C\u5B69\u5B50\u4EEC\u4E5F\u5728\u8FD9\u91CC\u73A9\u800D\u5427\u2014\u2014",
        "\u4ED6\u4EEC\u4E5F\u66FE\u5728\u8FD9\u91CC\u6389\u9E21\u86CB\uFF0C\u9017\u5C0F\u677E\u9F20\uFF1F",
        "\u4E5F\u66FE\u5728\u8FD9\u91CC\u91C7\u8537\u8587\uFF0C\u9EE2\u86DB\u86DB\u7F51\u7F51\u5462\uFF1F",
        "\u98CE\u513F\u5439\u52A8\u6811\u53F6\u7684\u58F0\u97F3\uFF0C\u662F\u6447\u7BEE\u8FB9\u7684\u6447\u7BEE\u66F2\u5417\uFF1F",
        "\u5546\u738B\u7684\u60C5\u666F\uFF0C\u5982\u4ECA\u53D8\u4E86\u6837\u5B50\uFF0C\u4F46\u6211\u4EEC\u4E0D\u4F1A\u5FD8\u8BB0\u2014\u2014",
        "\u7956\u5148\u751F\u6D3B\u8FC7\u7684\u5730\u65B9\uFF0C\u662F\u6211\u4EEC\u5171\u540C\u7684\u6447\u7BEE\u3002"
      ],
      textEn: [
        "Grandpa says the primeval forest was the cradle of our ancestors.",
        "How interesting\u2014what a huge cradle it was!",
        "The thick green canopy stretches endlessly, blocking out the blue sky.",
        "I wonder\u2014did our ancestors once pick wild fruits and gather pine cones in those great trees?",
        "Did they once race with wild rabbits on the grass, watching fireflies carry their lanterns on evening strolls?",
        "In those days, children must have played here too\u2014",
        "Did they steal eggs from bird nests and tease little pine squirrels?",
        "Did they pick wild roses and swing on spider webs?",
        "Is the sound of wind rustling through the leaves a lullaby beside the cradle?",
        "The scenery of the past has changed, but we will never forget\u2014",
        "The place where our ancestors lived is our shared cradle."
      ],
      textPinyin: [
        "y\u00E9 ye shu\u014D, n\u00E0 yu\u00E1n sh\u01D0 s\u0113n l\u00EDn, sh\u00EC w\u01D2 men z\u01D4 xi\u0101n de y\u00E1o l\u00E1n.",
        "zh\u0113n y\u01D2u y\u00EC si, zh\u00E8 sh\u00EC du\u014D d\u00E0 de y\u00E1o l\u00E1n a!",
        "n\u00E0 n\u00F3ng l\u01DC de sh\u00F9 y\u012Bn, y\u00ED w\u00E0ng w\u00FA bi\u0101n, zh\u0113 zh\u00F9 le l\u00E1n ti\u0101n.",
        "w\u01D2 xi\u01CEng\u2014\u2014w\u01D2 men de z\u01D4 xi\u0101n, k\u011B c\u00E9ng z\u00E0i zh\u00E8 xi\u0113 d\u00E0 sh\u00F9 sh\u00E0ng zh\u0101i y\u011B gu\u01D2, di\u00E0o s\u014Dng gu\u01D2?",
        "k\u011B c\u00E9ng z\u00E0i n\u00E0 pi\u00E0n c\u01CEo d\u00EC sh\u00E0ng h\u00E9 y\u011B t\u00F9 s\u00E0i p\u01CEo, k\u00E0n y\u00EDng hu\u01D2 ch\u00F3ng t\u00ED zhe d\u0113ng l\u00F3ng xi\u00E1n gu\u00E0ng?",
        "n\u00E0 sh\u00ED hou, h\u00E1i zi men y\u011B z\u00E0i zh\u00E8 l\u01D0 w\u00E1n shu\u01CE ba\u2014\u2014",
        "t\u0101 men y\u011B c\u00E9ng z\u00E0i zh\u00E8 l\u01D0 di\u00E0o j\u012B d\u00E0n, d\u00F2u xi\u01CEo s\u014Dng sh\u01D4?",
        "y\u011B c\u00E9ng z\u00E0i zh\u00E8 l\u01D0 c\u01CEi qi\u00E1ng w\u0113i, d\u00E0i zh\u012B zh\u016B w\u01CEng w\u01CEng ne?",
        "f\u0113ng er chu\u012B d\u00F2ng sh\u00F9 y\u00E8 de sh\u0113ng y\u012Bn, sh\u00EC y\u00E1o l\u00E1n bi\u0101n de y\u00E1o l\u00E1n q\u01D4 ma?",
        "sh\u0101ng w\u00E1ng de q\u00EDng j\u01D0ng, r\u00FA j\u012Bn bi\u00E0n le y\u00E0ng zi, d\u00E0n w\u01D2 men b\u00FA hu\u00EC w\u00E0ng j\u00EC\u2014\u2014",
        "z\u01D4 xi\u0101n sh\u0113ng hu\u00F3 gu\u00F2 de d\u00EC f\u0101ng, sh\u00EC w\u01D2 men g\u00F2ng t\u00F3ng de y\u00E1o l\u00E1n."
      ],
      recognizeChars: ["\u7956","\u6398","\u9017","\u8537","\u8587","\u902E","\u5FC6"],
      writeChars: ["\u7956","\u554A","\u6D53","\u671B","\u84DD","\u6458","\u6398","\u8D5B","\u5FC6"],
      vocabWords: [
        {word:'祖先',pinyin:'zǔ xiān',en:'ancestor',sentence:'原始森林是祖先的摇篮。',sentenceEn:'The primeval forest is the cradle of our ancestors.'},
        {word:'采摘',pinyin:'cǎi zhāi',en:'pick; gather',sentence:'祖先在森林里采摘。',sentenceEn:'Ancestors gathered in the forest.'},
        {word:'浓绿',pinyin:'nóng lǜ',en:'deep green',sentence:'浓绿的树荫。',sentenceEn:'Deep green shade of trees.'},
        {word:'回忆',pinyin:'huí yì',en:'recall',sentence:'那是多么有趣的回忆。',sentenceEn:'What interesting memories those are.'},
        {word:'原始森林',pinyin:'yuán shǐ sēn lín',en:'primeval forest',sentence:'原始森林多么大。',sentenceEn:'How vast the primeval forest is.'}
      ],
      exercises: [
        {type:"recite",cn:"\u6709\u611F\u60C5\u5730\u6717\u8BFB\u8BFE\u6587\uFF0C\u80CC\u8BF5\u8BFE\u6587",en:"Read the text with feeling and recite it"},
        {type:"think",cn:"\u60F3\u8C61\u7956\u5148\u5728\u539F\u59CB\u68EE\u6797\u91CC\u505A\u4EC0\u4E48",en:"Imagine what ancestors did in the primeval forest"}
      ],
      teachingPoints: [
        {cn:"\u8BCD\u6587\u7684\u8282\u594F\u548C\u97F5\u5F8B\u7F8E",en:"Rhythm and rhyme beauty in the prose-poem"},
        {cn:"\u60F3\u8C61\u7684\u8868\u8FBE\uFF1A\u201C\u53EF\u66FE\u2026\u201D\u53CD\u590D\u63D0\u95EE\u7684\u5F62\u5F0F",en:"Imaginative expression: repeated \u2018could they have...\u2019 questioning pattern"},
        {cn:"\u6FC0\u53D1\u5BF9\u539F\u59CB\u68EE\u6797\u548C\u81EA\u7136\u7684\u5411\u5F80",en:"Inspiring longing for primeval forests and nature"}
      ],
      parentTips: [
        {cn:"\u5E26\u5B69\u5B50\u4E86\u89E3\u539F\u59CB\u4EBA\u7684\u751F\u6D3B\u65B9\u5F0F",en:"Help the child learn about how early humans lived"},
        {cn:"\u9F13\u52B1\u5B69\u5B50\u60F3\u8C61\u548C\u62D3\u5C55\u8BFE\u6587\u5185\u5BB9",en:"Encourage the child to imagine and expand on the text"}
      ]
    },
    {
      id: 24, title: "\u5F53\u4E16\u754C\u5E74\u7EAA\u8FD8\u5C0F\u7684\u65F6\u5019", titleEn: "When the World Was Young",
      difficulty: 2,
      text: [
        "\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\uFF0C\u5F53\u4E16\u754C\u5E74\u7EAA\u8FD8\u5C0F\u7684\u65F6\u5019\uFF0C\u6BCF\u6837\u4E1C\u897F\u90FD\u5FC5\u987B\u5B66\u4E60\u600E\u4E48\u751F\u6D3B\u3002",
        "\u592A\u9633\u5F00\u59CB\u5B66\u53D1\u5149\u3002\u5B83\u8BD5\u8FC7\u505A\u5F88\u591A\u4E8B\u60C5\uFF0C\u8B6C\u5982\u5531\u6B4C\u2014\u2014\u53EF\u662F\u5B83\u89C9\u5F97\u8FD8\u662F\u53D1\u5149\u597D\u3002",
        "\u6708\u4EAE\u4E0D\u77E5\u9053\u81EA\u5DF1\u8BE5\u5B66\u4EC0\u4E48\u3002\u5B66\u53D1\u5149\u5427\uFF0C\u5B83\u89C9\u5F97\u8FD9\u4E3B\u610F\u5F88\u597D\u3002\u5B83\u5C31\u5B66\u4E86\u3002\u5B83\u53D1\u5149\u53D1\u5F97\u5F88\u7C97\u7CD9\uFF0C\u4F46\u6BD4\u8D77\u592A\u9633\u5C0F\u5F97\u591A\u3002",
        "\u6C34\u5F00\u59CB\u5B66\u4E60\u6D41\u52A8\u3002\u5B83\u5F88\u5FEB\u5C31\u5B66\u4F1A\u4E86\u3002\u4ECE\u90A3\u65F6\u8D77\uFF0C\u5B83\u603B\u662F\u5F80\u4F4E\u5904\u6D41\uFF0C\u5F80\u4F4E\u5904\u6D41\u2026\u2026",
        "\u5F53\u8FD9\u4E00\u5207\u5B66\u4F1A\u4E86\u4EE5\u540E\uFF0C\u4E16\u754C\u5F00\u59CB\u53D8\u5F97\u5341\u5206\u6709\u79E9\u5E8F\u3002",
        "\u53EA\u8981\u4F60\u7761\u7740\u4E86\uFF0C\u4E07\u4E8B\u5E73\u5B89\u3002\u4E16\u754C\u5728\u81EA\u52A8\u5730\u8FD0\u8F6C\u3002",
        "\u54E6\uFF0C\u4E0D\u8FC7\uFF0C\u5F53\u4E16\u754C\u5E74\u7EAA\u8FD8\u5C0F\u7684\u65F6\u5019\uFF0C\u8C01\u4E5F\u4E0D\u77E5\u9053\u4E8B\u60C5\u5C06\u6765\u4F1A\u600E\u6837\u3002"
      ],
      textEn: [
        "Long, long ago, when the world was still young, everything had to learn how to live.",
        "The sun started learning to shine. It tried many things, like singing\u2014but it decided shining was best.",
        "The moon didn\u2019t know what to learn. Learning to shine seemed like a good idea. So it did. Its light was rather rough, and much smaller than the sun\u2019s.",
        "Water began learning to flow. It learned quickly. From then on, it always flowed downhill, downhill...",
        "When everything had learned its role, the world became very orderly.",
        "As long as you are asleep, all is well. The world runs by itself.",
        "Oh, but when the world was young, nobody knew how things would turn out."
      ],
      textPinyin: [
        "h\u011Bn ji\u01D4 h\u011Bn ji\u01D4 y\u01D0 qi\u00E1n, d\u0101ng sh\u00EC ji\u00E8 ni\u00E1n j\u00EC h\u00E1i xi\u01CEo de sh\u00ED hou, m\u011Bi y\u00E0ng d\u014Dng xi d\u014Du b\u00EC x\u016B xu\u00E9 x\u00ED z\u011Bn me sh\u0113ng hu\u00F3.",
        "t\u00E0i y\u00E1ng k\u0101i sh\u01D0 xu\u00E9 f\u0101 gu\u0101ng. t\u0101 sh\u00EC gu\u00F2 zu\u00F2 h\u011Bn du\u014D sh\u00EC q\u00EDng, p\u00EC r\u00FA ch\u00E0ng g\u0113\u2014\u2014k\u011B sh\u00EC t\u0101 ju\u00E9 de h\u00E1i shi f\u0101 gu\u0101ng h\u01CEo.",
        "yu\u00E8 liang b\u00F9 zh\u012B d\u00E0o z\u00EC j\u01D0 g\u0101i xu\u00E9 sh\u00E9n me. xu\u00E9 f\u0101 gu\u0101ng ba, t\u0101 ju\u00E9 de zh\u00E8 zh\u01D4 yi h\u011Bn h\u01CEo. t\u0101 ji\u00F9 xu\u00E9 le. t\u0101 f\u0101 gu\u0101ng f\u0101 de h\u011Bn c\u016B c\u0101o, d\u00E0n b\u01D0 q\u01D0 t\u00E0i y\u00E1ng xi\u01CEo de du\u014D.",
        "shu\u01D0 k\u0101i sh\u01D0 xu\u00E9 x\u00ED li\u00FA d\u00F2ng. t\u0101 h\u011Bn ku\u00E0i ji\u00F9 xu\u00E9 hu\u00EC le. c\u00F3ng n\u00E0 sh\u00ED q\u01D0, t\u0101 z\u01D2ng sh\u00EC w\u01CEng d\u012B ch\u00F9 li\u00FA, w\u01CEng d\u012B ch\u00F9 li\u00FA...",
        "d\u0101ng zh\u00E8 y\u00ED qi\u00E8 xu\u00E9 hu\u00EC le y\u01D0 h\u00F2u, sh\u00EC ji\u00E8 k\u0101i sh\u01D0 bi\u00E0n de sh\u00ED f\u0113n y\u01D2u zh\u00EC x\u00F9.",
        "zh\u01D0 y\u00E0o n\u01D0 shu\u00EC zh\u00E1o le, w\u00E0n sh\u00EC p\u00EDng \u0101n. sh\u00EC ji\u00E8 z\u00E0i z\u00EC d\u00F2ng de y\u00F9n zhu\u01CEn.",
        "\u00F3, b\u00FA gu\u00F2, d\u0101ng sh\u00EC ji\u00E8 ni\u00E1n j\u00EC h\u00E1i xi\u01CEo de sh\u00ED hou, sh\u00E9i y\u011B b\u00F9 zh\u012B d\u00E0o sh\u00EC q\u00EDng ji\u0101ng l\u00E1i hu\u00EC z\u011Bn y\u00E0ng."
      ],
      recognizeChars: ["\u7EAA","\u5FC5","\u987B","\u529F","\u8B6C","\u7CD9","\u654F","\u5F0F","\u7B80","\u7531","\u7741","\u79E9","\u5E8F","\u54E6"],
      writeChars: ["\u4E16","\u754C","\u529F","\u590D","\u5F0F","\u7B80","\u5F04","\u7531"],
      vocabWords: [
        {word:'世界',pinyin:'shì jiè',en:'world',sentence:'世界年纪还小的时候。',sentenceEn:'When the world was still young.'},
        {word:'学习',pinyin:'xué xí',en:'learn',sentence:'万物都在学习。',sentenceEn:'All things were learning.'},
        {word:'太阳',pinyin:'tài yáng',en:'sun',sentence:'太阳学会了发光。',sentenceEn:'The sun learned to shine.'},
        {word:'月亮',pinyin:'yuè liang',en:'moon',sentence:'月亮学会了变化。',sentenceEn:'The moon learned to change.'},
        {word:'秩序',pinyin:'zhì xù',en:'order',sentence:'世界慢慢有了秩序。',sentenceEn:'The world slowly found its order.'}
      ],
      exercises: [
        {type:"read",cn:"\u6717\u8BFB\u8BFE\u6587\uFF0C\u8BF4\u8BF4\u4E16\u754C\u662F\u600E\u6837\u53D8\u5F97\u6709\u79E9\u5E8F\u7684",en:"Read aloud and tell how the world became orderly"},
        {type:"think",cn:"\u4F60\u89C9\u5F97\u8FD8\u6709\u4EC0\u4E48\u4E1C\u897F\u4E5F\u5728\u5B66\u4E60\uFF1F",en:"What else do you think was learning?"}
      ],
      teachingPoints: [
        {cn:"\u62DF\u4EBA\u624B\u6CD5\uFF1A\u592A\u9633\u201C\u5B66\u201D\u53D1\u5149\uFF0C\u6C34\u201C\u5B66\u201D\u6D41\u52A8",en:"Personification: the sun \u2018learns\u2019 to shine, water \u2018learns\u2019 to flow"},
        {cn:"\u5145\u6EE1\u60F3\u8C61\u7684\u7AE5\u8BDD\u98CE\u683C",en:"Imaginative fairy-tale style"},
        {cn:"\u201C\u5FC5\u987B\u201D\u201C\u8B6C\u5982\u201D\u7B49\u8BCD\u8BED\u7684\u7406\u89E3",en:"Understanding words like \u2018must\u2019 and \u2018for example\u2019"}
      ],
      parentTips: [
        {cn:"\u9F13\u52B1\u5B69\u5B50\u60F3\u8C61\u5176\u4ED6\u4E8B\u7269\u201C\u5B66\u4E60\u201D\u7684\u8FC7\u7A0B",en:"Encourage the child to imagine other things \u2018learning\u2019"},
        {cn:"\u5F15\u5BFC\u5B69\u5B50\u611F\u53D7\u4E16\u754C\u7684\u79E9\u5E8F\u548C\u89C4\u5F8B",en:"Guide the child to appreciate order and patterns in the world"}
      ]
    },
    {
      id: 25, title: "\u7F9F\u5C04\u4E5D\u65E5", titleEn: "Yi Shoots Down Nine Suns",
      difficulty: 2,
      text: [
        "\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\uFF0C\u5929\u4E0A\u6709\u5341\u4E2A\u592A\u9633\u3002",
        "\u5341\u4E2A\u592A\u9633\u50CF\u5341\u4E2A\u5927\u706B\u7403\uFF0C\u7167\u5F97\u5927\u5730\u5149\u660E\uFF0C\u6E29\u6696\u3002",
        "\u5341\u4E2A\u592A\u9633\u6BCF\u5929\u8F6E\u6D41\u5347\u4E0A\u5929\u7A7A\uFF0C\u8BA9\u4EBA\u4EEC\u80FD\u8FA8\u8BA4\u767D\u5929\u548C\u9ED1\u591C\u3002",
        "\u53EF\u662F\u6709\u4E00\u5929\uFF0C\u5341\u4E2A\u592A\u9633\u89C9\u5F97\u8F6E\u6D41\u53BB\u5DE5\u4F5C\u592A\u6C89\u95F7\u4E86\u3002\u4ED6\u4EEC\u89C9\u5F97\u5728\u4E00\u8D77\u5F88\u597D\u73A9\uFF0C\u5C31\u4E00\u9F50\u8DD1\u5230\u5929\u4E0A\u3002",
        "\u5341\u4E2A\u592A\u9633\u4E00\u8D77\u5347\u4E0A\u5929\u7A7A\uFF0C\u5C71\u4E0A\u7684\u77F3\u5934\u90FD\u7194\u5316\u4E86\u3002\u65E0\u8BBA\u662F\u5E84\u7A3C\u8FD8\u662F\u6811\u6728\uFF0C\u90FD\u88AB\u70E4\u7126\u4E86\u3002",
        "\u6CB3\u91CC\u7684\u6C34\u88AB\u664B\u5E72\u4E86\uFF0C\u8FDE\u5927\u6D77\u4E5F\u5FEB\u8981\u6652\u5E72\u4E86\u3002\u4EBA\u7C7B\u7684\u65E5\u5B50\u975E\u5E38\u8270\u96BE\u3002",
        "\u6709\u4E2A\u53EB\u7F9F\u7684\u4EBA\uFF0C\u5584\u4E8E\u5C04\u7BAD\u3002\u4ED6\u770B\u5230\u4EBA\u4EEC\u7684\u82E6\u96BE\uFF0C\u51B3\u5FC3\u5E2E\u52A9\u4ED6\u4EEC\u3002",
        "\u7F9F\u7FFB\u8FC7\u4E5D\u5341\u4E5D\u5EA7\u9AD8\u5C71\uFF0C\u8E9A\u8FC7\u4E5D\u5341\u4E5D\u6761\u5927\u6CB3\uFF0C\u6765\u5230\u4E1C\u6D77\u8FB9\u3002\u4ED6\u767B\u4E0A\u4E00\u5EA7\u5927\u5C71\uFF0C\u62C9\u5F00\u5927\u5F13\uFF0C\u5C04\u4E0B\u4E86\u4E00\u4E2A\u53C8\u4E00\u4E2A\u592A\u9633\u3002",
        "\u5929\u4E0A\u53EA\u7559\u4E0B\u4E00\u4E2A\u592A\u9633\u3002",
        "\u571F\u5730\u6E10\u6E10\u6062\u590D\u4E86\u539F\u6765\u7684\u6837\u5B50\u3002\u5E84\u7A3C\u53C8\u7EFF\u6CB9\u6CB9\u5730\u751F\u957F\u4E86\u3002\u6CB3\u91CC\u53C8\u6EE1\u4E86\u6E05\u6F88\u6F88\u7684\u6C34\u3002\u4EBA\u7C7B\u7EC8\u4E8E\u53C8\u80FD\u5B89\u5C45\u4E50\u4E1A\u4E86\u3002",
        "\u4ECE\u6B64\uFF0C\u592A\u9633\u6BCF\u5929\u4ECE\u4E1C\u65B9\u5347\u8D77\uFF0C\u5230\u897F\u65B9\u843D\u4E0B\uFF0C\u5E74\u590D\u4E00\u5E74\uFF0C\u6C38\u4E0D\u505C\u606F\u3002"
      ],
      textEn: [
        "Long, long ago, there were ten suns in the sky.",
        "The ten suns were like ten great fireballs, making the earth bright and warm.",
        "The ten suns took turns rising into the sky each day, so people could tell day from night.",
        "But one day, the ten suns thought taking turns was too boring. They thought being together would be fun, so they all ran into the sky at once.",
        "When all ten suns rose together, rocks on the mountains melted. Crops and trees alike were scorched.",
        "Rivers dried up, and even the ocean was nearly parched. Life became extremely difficult for humankind.",
        "There was a man named Yi who was skilled at archery. Seeing the people\u2019s suffering, he was determined to help.",
        "Yi climbed over ninety-nine tall mountains and crossed ninety-nine great rivers to reach the eastern sea. He ascended a great mountain, drew his mighty bow, and shot down the suns one by one.",
        "Only one sun was left in the sky.",
        "The land gradually recovered. Crops grew green and lush again. Rivers refilled with clear, sparkling water. Humankind could live and work in peace once more.",
        "From then on, the sun rises in the east and sets in the west every day, year after year, never stopping."
      ],
      textPinyin: [
        "h\u011Bn ji\u01D4 h\u011Bn ji\u01D4 y\u01D0 qi\u00E1n, ti\u0101n sh\u00E0ng y\u01D2u sh\u00ED g\u00E8 t\u00E0i y\u00E1ng.",
        "sh\u00ED g\u00E8 t\u00E0i y\u00E1ng xi\u00E0ng sh\u00ED g\u00E8 d\u00E0 hu\u01D2 qi\u00FA, zh\u00E0o de d\u00E0 d\u00EC gu\u0101ng m\u00EDng, w\u0113n nu\u01CEn.",
        "sh\u00ED g\u00E8 t\u00E0i y\u00E1ng m\u011Bi ti\u0101n l\u00FAn li\u00FA sh\u0113ng sh\u00E0ng ti\u0101n k\u014Dng, r\u00E0ng r\u00E9n men n\u00E9ng bi\u00E0n r\u00E8n b\u00E1i ti\u0101n h\u00E9 h\u0113i y\u00E8.",
        "k\u011B sh\u00EC y\u01D2u y\u00EC ti\u0101n, sh\u00ED g\u00E8 t\u00E0i y\u00E1ng ju\u00E9 de l\u00FAn li\u00FA q\u00F9 g\u014Dng zu\u00F2 t\u00E0i ch\u00E9n m\u00E8n le. t\u0101 men ju\u00E9 de z\u00E0i y\u00EC q\u01D0 h\u011Bn h\u01CEo w\u00E1n, ji\u00F9 y\u00EC q\u00ED p\u01CEo d\u00E0o ti\u0101n sh\u00E0ng.",
        "sh\u00ED g\u00E8 t\u00E0i y\u00E1ng y\u00EC q\u01D0 sh\u0113ng sh\u00E0ng ti\u0101n k\u014Dng, sh\u0101n sh\u00E0ng de sh\u00ED tou d\u014Du r\u00F3ng hu\u00E0 le. w\u00FA l\u00F9n sh\u00EC zhu\u0101ng jia h\u00E1i sh\u00EC sh\u00F9 m\u00F9, d\u014Du b\u00E8i k\u01CEo ji\u0101o le.",
        "h\u00E9 l\u01D0 de shu\u01D0 b\u00E8i sh\u00E0i g\u0101n le, li\u00E1n d\u00E0 h\u01CEi y\u011B ku\u00E0i y\u00E0o sh\u00E0i g\u0101n le. r\u00E9n l\u00E8i de r\u00EC zi f\u0113i ch\u00E1ng ji\u0101n n\u00E1n.",
        "y\u01D2u g\u00E8 ji\u00E0o y\u00EC de r\u00E9n, sh\u00E0n y\u00FA sh\u00E8 ji\u00E0n. t\u0101 k\u00E0n d\u00E0o r\u00E9n men de k\u01D4 n\u00E0n, ju\u00E9 x\u012Bn b\u0101ng zh\u00F9 t\u0101 men.",
        "y\u00EC f\u0101n gu\u00F2 ji\u01D4 sh\u00ED ji\u01D4 zu\u00F2 g\u0101o sh\u0101n, t\u00E0ng gu\u00F2 ji\u01D4 sh\u00ED ji\u01D4 ti\u00E1o d\u00E0 h\u00E9, l\u00E1i d\u00E0o d\u014Dng h\u01CEi bi\u0101n. t\u0101 d\u0113ng sh\u00E0ng y\u00ED zu\u00F2 d\u00E0 sh\u0101n, l\u0101 k\u0101i d\u00E0 g\u014Dng, sh\u00E8 xi\u00E0 le y\u00ED g\u00E8 y\u00F2u y\u00ED g\u00E8 t\u00E0i y\u00E1ng.",
        "ti\u0101n sh\u00E0ng zh\u01D0 li\u00FA xi\u00E0 y\u00ED g\u00E8 t\u00E0i y\u00E1ng.",
        "t\u01D4 d\u00EC ji\u00E0n ji\u00E0n hu\u012B f\u00F9 le yu\u00E1n l\u00E1i de y\u00E0ng zi. zhu\u0101ng jia y\u00F2u l\u01DC y\u00F3u y\u00F3u de sh\u0113ng zh\u01CEng le. h\u00E9 l\u01D0 y\u00F2u m\u01CEn le q\u012Bng ch\u00E8ng ch\u00E8ng de shu\u01D0. r\u00E9n l\u00E8i zh\u014Dng y\u00FA y\u00F2u n\u00E9ng \u0101n j\u016B l\u00E8 y\u00E8 le.",
        "c\u00F3ng c\u01D0, t\u00E0i y\u00E1ng m\u011Bi ti\u0101n c\u00F3ng d\u014Dng f\u0101ng sh\u0113ng q\u01D0, d\u00E0o x\u012B f\u0101ng lu\u00F2 xi\u00E0, ni\u00E1n f\u00F9 y\u00EC ni\u00E1n, y\u01D2ng b\u00F9 t\u00EDng x\u012B."
      ],
      recognizeChars: ["\u5C04","\u503C","\u7194","\u7C7B","\u8270","\u7BAD","\u88C2","\u708E","\u9000","\u5E84","\u7A3C","\u6ECB","\u817E"],
      writeChars: ["\u89C9","\u503C","\u7C7B","\u8270","\u5F13","\u708E","\u5BB3","\u6B64"],
      vocabWords: [
        {word:'后羿',pinyin:'hòu yì',en:'Hou Yi (myth hero)',sentence:'后羿要射下九个太阳。',sentenceEn:'Hou Yi would shoot down nine suns.'},
        {word:'神箭手',pinyin:'shén jiàn shǒu',en:'divine archer',sentence:'后羿是神箭手。',sentenceEn:'Hou Yi was a divine archer.'},
        {word:'炎热',pinyin:'yán rè',en:'scorching hot',sentence:'十个太阳让大地炎热。',sentenceEn:'Ten suns made the earth scorching.'},
        {word:'枯萎',pinyin:'kū wěi',en:'wither',sentence:'禾苗都枯萎了。',sentenceEn:'The crops all withered.'},
        {word:'勇敢',pinyin:'yǒng gǎn',en:'brave',sentence:'后羿非常勇敢。',sentenceEn:'Hou Yi was very brave.'}
      ],
      exercises: [
        {type:"read",cn:"\u9ED8\u8BFB\u8BFE\u6587\uFF0C\u8BF4\u8BF4\u6545\u4E8B\u7684\u8D77\u56E0\u3001\u7ECF\u8FC7\u3001\u7ED3\u679C",en:"Read silently; tell the cause, events, and outcome of the story"},
        {type:"retell",cn:"\u6839\u636E\u63D0\u793A\u8BCD\u590D\u8FF0\u8BFE\u6587",en:"Retell the story using key words as prompts"}
      ],
      teachingPoints: [
        {cn:"\u795E\u8BDD\u6545\u4E8B\u7684\u7279\u70B9\uFF1A\u60F3\u8C61\u4E30\u5BCC\u3001\u5927\u80C6\u5938\u5F20",en:"Features of myths: rich imagination, bold exaggeration"},
        {cn:"\u8D77\u56E0\u2192\u7ECF\u8FC7\u2192\u7ED3\u679C\u7684\u53D9\u4E8B\u7ED3\u6784",en:"Narrative structure: cause \u2192 events \u2192 result"},
        {cn:"\u201C\u65E0\u8BBA\u2026\u90FD\u2026\u201D\u201C\u7EC8\u4E8E\u201D\u7B49\u5173\u8054\u8BCD",en:"Connectives like \u2018whether...all...\u2019 and \u2018finally\u2019"}
      ],
      parentTips: [
        {cn:"\u548C\u5B69\u5B50\u4E00\u8D77\u8BFB\u66F4\u591A\u4E2D\u56FD\u795E\u8BDD\u6545\u4E8B",en:"Read more Chinese mythology stories together"},
        {cn:"\u8BA8\u8BBA\u52C7\u6C14\u548C\u5E2E\u52A9\u522B\u4EBA\u7684\u54C1\u8D28",en:"Discuss the qualities of courage and helping others"}
      ]
    }
  ],
  oralComm: {title:"\u63A8\u8350\u4E00\u90E8\u52A8\u753B\u7247",titleEn:"Recommend an Animated Film",prompt:{cn:"\u5411\u540C\u5B66\u63A8\u8350\u4E00\u90E8\u4F60\u559C\u6B22\u7684\u52A8\u753B\u7247\uFF0C\u8BF4\u8BF4\u63A8\u8350\u7406\u7531",en:"Recommend a cartoon you like to classmates and explain why"}},
  garden: {
    accumulation: {title:"\u65E5\u79EF\u6708\u7D2F",titleEn:"Accumulation",content:{cn:"\u6709\u5FD7\u8005\u4E8B\u7ADF\u6210\u3002\u2014\u2014\u300A\u540E\u6C49\u4E66\u300B",en:"Where there\u2019s a will, there\u2019s a way. \u2014 Book of Later Han"}},
    wordSentence: {title:"\u5B57\u8BCD\u53E5\u8FD0\u7528",titleEn:"Word & Sentence Practice",content:{cn:"\u91D1\u5B57\u65C1\u8BA4\u5B57\uFF1A\u94A9\u3001\u94F2\u3001\u6885\u3001\u67FF\u3001\u6E90\u3001\u6DA8\u3001\u70AC\u3001\u7078\u3001\u57AE\u3001\u575F",en:"Recognize characters by radical groups: metal-radical, wood-radical, water-radical, fire-radical, earth-radical"}}
  }
}
]
};
