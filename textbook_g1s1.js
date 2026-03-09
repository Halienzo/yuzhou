/**
 * 语宙 YuZhou — 部编版一年级语文上册 教材数据
 * Grade 1 Semester 1 Textbook Data (PEP Edition)
 * Based on: 义务教育教科书 语文 一年级上册 (2016)
 */
var TB_G1S1 = {
grade: 1, semester: 1,
totalRecogChars: 300,
totalWriteChars: 100,
units: [
/* ═══════════════════════════════════════════ */
/*  UNIT 0 — 入学教育 Entrance Education      */
/* ═══════════════════════════════════════════ */
{
  id: 0, title: "入学教育", titleEn: "Welcome to School",
  difficulty: 1,
  type: "intro",
  lessons: [
    {
      id: 1, title: "我上学了", titleEn: "I Go to School",
      difficulty: 1,
      text: ["我是中国人。","我是小学生。"],
      textEn: ["I am Chinese.","I am a primary school student."],
      textPinyin: ["wǒ shì zhōng guó rén。","wǒ shì xiǎo xué shēng。"],
      recognizeChars: [], writeChars: [],
      exercises: [
        {type:"read",cn:"认识国旗，了解祖国",en:"Recognize the national flag and learn about our country"},
        {type:"song",cn:"学唱《上学歌》：太阳当空照，花儿对我笑……",en:"Learn the School Song: The sun shines overhead, flowers smile at me..."}
      ],
      teachingPoints: [
        {cn:"帮助学生适应校园生活",en:"Help students adapt to school life"},
        {cn:"培养良好的读书写字姿势",en:"Develop good reading and writing posture"}
      ],
      parentTips: [
        {cn:"帮助孩子准备学习用品，建立上学的期待感",en:"Help prepare school supplies and build excitement for school"},
        {cn:"陪孩子一起唱《上学歌》",en:"Sing the School Song together"}
      ]
    }
  ]
},
/* ═══════════════════════════════════════════ */
/*  UNIT 1 — 识字（一）Literacy 1              */
/* ═══════════════════════════════════════════ */
{
  id: 1, title: "识字（一）", titleEn: "Literacy (I)",
  difficulty: 1,
  type: "shizi",
  lessons: [
    {
      id: 1, title: "天地人", titleEn: "Sky, Earth, People",
      difficulty: 1,
      text: ["天 地 人","你 我 他"],
      textEn: ["Sky  Earth  People","You  Me  He/She"],
      textPinyin: ["tiān dì rén","nǐ wǒ tā"],
      recognizeChars: ["天","地","人","你","我","他"],
      writeChars: [],
      vocabWords: [
        {word:'天',pinyin:'tiān',en:'sky; heaven; day',sentence:'今天天气好。',sentenceEn:'The weather is nice today.'},
        {word:'地',pinyin:'dì',en:'earth; ground',sentence:'小草从地里长出来。',sentenceEn:'Grass grows from the ground.'},
        {word:'人',pinyin:'rén',en:'person; people',sentence:'我是中国人。',sentenceEn:'I am Chinese.'},
        {word:'你',pinyin:'nǐ',en:'you',sentence:'你好！',sentenceEn:'Hello!'},
        {word:'我',pinyin:'wǒ',en:'I; me',sentence:'我是小学生。',sentenceEn:'I am a primary school student.'},
        {word:'他',pinyin:'tā',en:'he; him',sentence:'他是我的好朋友。',sentenceEn:'He is my good friend.'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"match",cn:"看图片，指出对应的字",en:"Look at pictures and point to the matching character"}
      ],
      teachingPoints: [
        {cn:"通过图画认识象形字，感知汉字与自然的关系",en:"Recognize pictographic characters through pictures; understand the relationship between characters and nature"},
        {cn:"正确朗读'天地人你我他'六个字",en:"Correctly read aloud the six characters"}
      ],
      parentTips: [
        {cn:"在日常生活中指认这些字（如门牌、书本封面）",en:"Point out these characters in daily life (door signs, book covers)"},
        {cn:"用卡片游戏帮助孩子识字",en:"Use flashcard games for character recognition"}
      ]
    },
    {
      id: 2, title: "金木水火土", titleEn: "Metal, Wood, Water, Fire, Earth",
      difficulty: 1,
      text: ["一二三四五，","金木水火土。","天地分上下，","日月照今古。"],
      textEn: ["One two three four five,","Metal wood water fire earth.","Heaven and earth divide above and below,","Sun and moon shine from ancient times to now."],
      textPinyin: ["yī èr sān sì wǔ，","jīn mù shuǐ huǒ tǔ。","tiān dì fēn shàng xià，","rì yuè zhào jīn gǔ。"],
      recognizeChars: ["一","二","三","四","五","上","下"],
      writeChars: ["一","二","三","上"],
      exercises: [
        {type:"read",cn:"朗读课文，背诵课文",en:"Read aloud and recite the text"},
        {type:"write",cn:"认识田字格，注意笔画在田字格中的位置",en:"Learn the writing grid; pay attention to stroke positions"}
      ],
      teachingPoints: [
        {cn:"学习数字一到五的汉字写法",en:"Learn Chinese characters for numbers one to five"},
        {cn:"认识田字格，学习'从上到下''先横后竖'的笔顺规则",en:"Learn the writing grid and stroke order rules: top to bottom, horizontal before vertical"},
        {cn:"配合傅抱石国画欣赏，感受传统文化",en:"Appreciate the traditional Chinese painting by Fu Baoshi"}
      ],
      parentTips: [
        {cn:"和孩子一起数数，用手指写'一二三'",en:"Count together and trace 一二三 with fingers"},
        {cn:"准备田字格本，陪孩子练习书写",en:"Prepare grid paper for writing practice"}
      ]
    },
    {
      id: 3, title: "口耳目", titleEn: "Mouth, Ear, Eye",
      difficulty: 1,
      text: ["口 耳 目","手 足","站如松，坐如钟。","行如风，卧如弓。"],
      textEn: ["Mouth  Ear  Eye","Hand  Foot","Stand like a pine, sit like a bell.","Walk like the wind, lie like a bow."],
      textPinyin: ["kǒu ěr mù","shǒu zú","zhàn rú sōng，zuò rú zhōng。","xíng rú fēng，wò rú gōng。"],
      recognizeChars: ["口","耳","目","手","足","站","坐"],
      writeChars: ["口","目","耳","手"],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"我们的口、耳、目、手、足能做哪些事？",en:"What can our mouth, ears, eyes, hands, and feet do?"}
      ],
      teachingPoints: [
        {cn:"认识人体部位相关的象形字",en:"Learn pictographic characters related to body parts"},
        {cn:"理解'站如松、坐如钟'等行为规范",en:"Understand posture guidelines: stand like a pine, sit like a bell"}
      ],
      parentTips: [
        {cn:"指着身体部位和孩子互动认字",en:"Point to body parts for interactive character learning"},
        {cn:"让孩子表演'站如松、坐如钟'",en:"Have the child act out the posture phrases"}
      ]
    },
    {
      id: 4, title: "日月水火", titleEn: "Sun, Moon, Water, Fire",
      difficulty: 1,
      text: ["日 月 水 火","山 石 田 禾"],
      textEn: ["Sun  Moon  Water  Fire","Mountain  Stone  Field  Grain"],
      textPinyin: ["rì yuè shuǐ huǒ","shān shí tián hé"],
      recognizeChars: ["日","月","水","火","山","石","田","禾"],
      writeChars: ["日","田","禾","火"],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"match",cn:"猜一猜，连一连（象形字与图片配对）",en:"Guess and match (match pictographic characters to pictures)"}
      ],
      teachingPoints: [
        {cn:"比较象形字与实物图画的相似性",en:"Compare pictographic characters with real objects"},
        {cn:"认识自然事物相关的8个汉字",en:"Learn 8 characters related to natural things"}
      ],
      parentTips: [
        {cn:"在户外指认日、月、山、水等自然景物",en:"Point out sun, moon, mountains, water outdoors"},
        {cn:"画简笔画，展示象形字的演变",en:"Draw simple pictures showing character evolution"}
      ]
    },
    {
      id: 5, title: "对韵歌", titleEn: "Rhyming Pairs Song",
      difficulty: 1,
      text: ["云对雨，雪对风。","花对树，鸟对虫。","山清对水秀，","柳绿对桃红。"],
      textEn: ["Clouds pair with rain, snow with wind.","Flowers pair with trees, birds with insects.","Clear mountains pair with beautiful waters,","Green willows pair with pink peach blossoms."],
      textPinyin: ["yún duì yǔ，xuě duì fēng。","huā duì shù，niǎo duì chóng。","shān qīng duì shuǐ xiù，","liǔ lǜ duì táo hóng。"],
      recognizeChars: ["对","云","雨","风","花","鸟","虫"],
      writeChars: ["虫","云","山"],
      exercises: [
        {type:"read",cn:"朗读课文，背诵课文",en:"Read aloud and recite"},
        {type:"extend",cn:"你还知道哪些对子？",en:"What other pairs do you know?"}
      ],
      teachingPoints: [
        {cn:"感受对韵的语言美，培养语感",en:"Appreciate the beauty of rhyming pairs; develop language sense"},
        {cn:"积累'山清水秀、柳绿桃红'等词语",en:"Accumulate phrases like 'clear mountains and beautiful waters'"}
      ],
      parentTips: [
        {cn:"和孩子玩对词语的游戏：大对__，高对__",en:"Play word pairing games: big vs __, tall vs __"},
        {cn:"读完后可以拓展到其他对韵内容",en:"Extend to other rhyming pairs after reading"}
      ]
    }
  ],
  garden: {
    shiziStation: {
      title:"识字加油站", titleEn:"Character Booster",
      items: [{chars:["六","七","八","九","十"],category:"数字 Numbers"}]
    },
    wordSentence: {
      title:"字词句运用", titleEn:"Words & Sentences",
      items: [
        {text:"日 目 / 人 天 / 口 田",textEn:"Compare similar characters",type:"compare"},
        {text:"一片两片三四片，五片六片七八片。九片十片无数片，飞入水中都不见。",textEn:"One piece, two pieces, three four pieces... What is it? (Riddle: snowflakes)",type:"riddle"}
      ]
    },
    writingHints: {
      title:"书写提示", titleEn:"Writing Tips",
      rules: [
        {cn:"从上到下",en:"Top to bottom",examples:"二、三"},
        {cn:"先横后竖",en:"Horizontal before vertical",examples:"十"}
      ]
    },
    accumulation: {
      title:"日积月累", titleEn:"Daily Accumulation",
      content: {
        title:"咏鹅", titleEn:"Ode to the Goose",
        author:"[唐] 骆宾王",authorEn:"[Tang] Luo Binwang",
        text:"鹅，鹅，鹅，\n曲项向天歌。\n白毛浮绿水，\n红掌拨清波。",
        textEn:"Goose, goose, goose,\nCurving neck singing toward the sky.\nWhite feathers floating on green water,\nRed feet paddling through clear waves.",
        pinyin:"é é é\nqǔ xiàng xiàng tiān gē\nbái máo fú lǜ shuǐ\nhóng zhǎng bō qīng bō"
      }
    },
    readWithAdults: {
      title:"和大人一起读", titleEn:"Read with Adults",
      content: {
        title:"小白兔和小灰兔", titleEn:"The White Rabbit and the Grey Rabbit",
        text:"老山羊在地里收白菜，小白兔和小灰兔来帮忙。收完白菜，老山羊把一车白菜送给小灰兔。小灰兔收下了，说：“谢谢您！”老山羊又把一车白菜送给小白兔。小白兔说：“我不要白菜，请您给我一些菜籽吧。”……小白兔说：“是我自己种的。只有自己种，才有吃不完的菜。”",
        textEn:"Old Goat was harvesting cabbages. White Rabbit and Grey Rabbit came to help. After the harvest, Old Goat gave Grey Rabbit a cart of cabbages. Grey Rabbit accepted: 'Thank you!' Old Goat offered White Rabbit cabbages too. White Rabbit said: 'I don't want cabbages — please give me some seeds instead.'... White Rabbit said: 'I grew them myself. Only by growing your own can you have endless cabbages.'"
      }
    }
  },
  oralComm: {
    title:"我说你做", titleEn:"I Say, You Do",
    objectives: [
      {cn:"大声说，让别人听得见",en:"Speak loudly so others can hear"},
      {cn:"注意听别人说话",en:"Listen carefully when others speak"}
    ],
    activities: [
      {cn:"一个人发指令，其他人做动作",en:"One person gives commands, others follow"},
      {cn:"把铅笔放到文具盒里，把书合上，然后坐端正",en:"Put the pencil in the case, close the book, then sit up straight"}
    ]
  },
  happyReading: {
    title:"快乐读书吧：读书真快乐", titleEn:"Happy Reading: Reading is Fun!",
    items: [
      {cn:"周末，我在书店看到了很多好看的图画书",en:"On weekends, I see many beautiful picture books at the bookstore"},
      {cn:"我经常和爸爸妈妈一起读有趣的故事书",en:"I often read interesting storybooks with mom and dad"},
      {cn:"学了拼音，我就可以认更多的字，读更多的书了",en:"After learning pinyin, I can recognize more characters and read more books"},
      {cn:"我读了很多书，会讲很多故事，同学们叫我'故事大王'",en:"I've read many books and can tell many stories — my classmates call me 'Story King'"}
    ]
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 2 — 汉语拼音（一）Pinyin 1           */
/* ═══════════════════════════════════════════ */
{
  id: 2, title: "汉语拼音（一）", titleEn: "Chinese Pinyin (I)",
  type: "pinyin",
  lessons: [
    {id:1,title:"a o e",titleEn:"Vowels a o e",
      difficulty: 1,
      text:["a o e"],textEn:["Learn the three simple vowels: a, o, e"],
      textPinyin:["ā á ǎ à / ō ó ǒ ò / ē é ě è"],
      recognizeChars:[],writeChars:[],
      exercises:[
        {type:"read",cn:"学会a o e的四声读法",en:"Learn the four tones of a, o, e"},
        {type:"write",cn:"在四线格中正确书写a o e",en:"Write a o e correctly on four-line grid"}
      ],
      teachingPoints:[
        {cn:"认识四线格，学会声调标记",en:"Learn the four-line grid and tone marks"},
        {cn:"张大嘴巴aaa，嘴巴圆圆ooo，嘴巴扁扁eee",en:"Open mouth wide for a, round mouth for o, flat mouth for e"}
      ],
      parentTips:[
        {cn:"用镜子让孩子观察口型变化",en:"Use a mirror to observe mouth shape changes"},
        {cn:"编口诀帮助记忆：张大嘴巴aaa",en:"Use mnemonics: open wide aaa"}
      ]
    },
    {id:2,title:"i u ü y w",titleEn:"Vowels i u ü & Initials y w",
      difficulty: 1,
      text:["i u ü","y w"],textEn:["Learn vowels i, u, ü and initials y, w"],
      textPinyin:["ī í ǐ ì / ū ú ǔ ù / ǖ ǘ ǚ ǜ"],
      recognizeChars:["文","数","学","音","乐"],writeChars:[],
      exercises:[
        {type:"read",cn:"学会i u ü的四声，认识声母y w",en:"Learn four tones of i u ü; learn initials y w"},
        {type:"write",cn:"在四线格中正确书写i u ü y w",en:"Write correctly on four-line grid"}
      ],
      teachingPoints:[
        {cn:"小i有礼貌，标调去掉点",en:"Little i is polite — remove the dot when adding tone marks"},
        {cn:"j q x遇到ü，去掉两点还念ü",en:"When j/q/x meet ü, remove the dots but still pronounce ü"}
      ],
      parentTips:[
        {cn:"用儿歌帮助记忆：牙齿对齐iii",en:"Use songs: teeth aligned iii"},
        {cn:"小ü见到j q x，脱帽行个礼",en:"Little ü meeting j/q/x takes off its hat (dots)"}
      ]
    },
    {id:3,title:"b p m f",titleEn:"Initials b p m f",
      difficulty: 1,
      text:["b p m f"],textEn:["Learn the four initial consonants: b, p, m, f"],
      textPinyin:["b p m f"],
      recognizeChars:["爸","妈"],writeChars:[],
      exercises:[
        {type:"read",cn:"准确拼读b p m f与韵母的组合",en:"Accurately spell combinations of b p m f with vowels"},
        {type:"spell",cn:"拼一拼：bà-mā（爸妈）",en:"Spell it out: bà-mā (Dad-Mom)"}
      ],
      teachingPoints:[
        {cn:"区分b和d（半圆方向不同）",en:"Distinguish b and d (different semicircle direction)"},
        {cn:"声母读得轻又短，韵母读得响又长",en:"Initials are light and short; finals are loud and long"}
      ],
      parentTips:[
        {cn:"帮助孩子分清b和d、p和q",en:"Help distinguish b/d and p/q"},
        {cn:"练习拼读简单音节如bā bà mā mà",en:"Practice simple syllables like bā bà mā mà"}
      ]
    },
    {id:4,title:"d t n l",titleEn:"Initials d t n l",
      difficulty: 1,
      text:["d t n l"],textEn:["Learn initial consonants: d, t, n, l"],
      textPinyin:["d t n l"],
      recognizeChars:["马","土","不"],writeChars:[],
      exercises:[
        {type:"read",cn:"学习d t n l的发音及与韵母的拼读",en:"Learn d t n l pronunciation and syllable spelling"},
        {type:"spell",cn:"拼读练习：dà（大）、tǔ（土）、nǚ（女）、lù（路）",en:"Practice: dà, tǔ, nǚ, lù"}
      ],
      teachingPoints:[
        {cn:"n和l的发音区别：n是鼻音，l是舌边音",en:"Difference between n and l: n is nasal, l is lateral"},
        {cn:"拼读练习时注意声调",en:"Pay attention to tones during spelling practice"}
      ],
      parentTips:[
        {cn:"n/l不分是方言常见问题，需要多练习",en:"n/l confusion is common in dialects — practice often"},
        {cn:"用词语帮助记忆：大地dàdì、兔子tùzi",en:"Use words to help: dàdì (earth), tùzi (rabbit)"}
      ]
    },
    {id:5,title:"g k h",titleEn:"Initials g k h",
      difficulty: 1,
      text:["g k h"],textEn:["Learn initial consonants: g, k, h"],
      textPinyin:["g k h"],
      recognizeChars:["画","打"],writeChars:[],
      exercises:[
        {type:"read",cn:"区分g k h的送气与不送气",en:"Distinguish aspirated and unaspirated sounds"},
        {type:"spell",cn:"三拼音节练习：guā（瓜）、kuā（夸）、huā（花）",en:"Three-component syllable practice: guā, kuā, huā"}
      ],
      teachingPoints:[
        {cn:"认识三拼音节：声母+介母+韵母",en:"Learn three-part syllables: initial + medial + final"},
        {cn:"哥哥的g，蝌蚪的k，喝水的h",en:"Mnemonics: brother's g, tadpole's k, drinking h"}
      ],
      parentTips:[
        {cn:"g和k的区别在于送气：k送气强",en:"Difference: k is aspirated (stronger puff of air)"},
        {cn:"练习三拼音节是难点，需要耐心",en:"Three-part syllables are difficult — be patient"}
      ]
    },
    {id:6,title:"j q x",titleEn:"Initials j q x",
      difficulty: 1,
      text:["j q x"],textEn:["Learn initial consonants: j, q, x"],
      textPinyin:["j q x"],
      recognizeChars:["棋","鸡"],writeChars:[],
      exercises:[
        {type:"read",cn:"j q x与ü相拼去两点的规则",en:"Rule: j q x + ü removes the two dots"},
        {type:"spell",cn:"拼读：jī（鸡）、qí（棋）、xī（西）",en:"Spell: jī (chicken), qí (chess), xī (west)"}
      ],
      teachingPoints:[
        {cn:"j q x只与i ü相拼，不与u相拼",en:"j q x only combine with i and ü, not u"},
        {cn:"小ü见j q x，去掉两点还念ü",en:"Little ü meeting j q x removes its dots but still sounds ü"}
      ],
      parentTips:[
        {cn:"ü上两点的去留规则是重点难点",en:"The ü dot rule is a key difficulty"},
        {cn:"编故事：小ü很有礼貌，见到j q x就脱帽",en:"Story: polite ü takes off its hat for j q x"}
      ]
    },
    {id:7,title:"z c s",titleEn:"Initials z c s",
      difficulty: 1,
      text:["z c s","zi ci si"],textEn:["Learn flat tongue initials: z, c, s","Learn whole-syllable recognition: zi, ci, si"],
      textPinyin:["z c s / zī cī sī"],
      recognizeChars:["字","词","语","句","子"],writeChars:[],
      exercises:[
        {type:"read",cn:"区分z c s的平舌发音",en:"Distinguish flat tongue sounds z c s"},
        {type:"spell",cn:"认识整体认读音节zi ci si",en:"Learn whole-syllable recognition: zi ci si"}
      ],
      teachingPoints:[
        {cn:"平舌音z c s：舌尖平伸抵住上齿背",en:"Flat tongue: tip of tongue against back of upper teeth"},
        {cn:"整体认读音节不拼读，直接读出",en:"Whole syllables are read directly, not spelled out"}
      ],
      parentTips:[
        {cn:"平舌翘舌不分是常见问题，对比练习很重要",en:"Flat/curled tongue confusion is common — compare and practice"},
        {cn:"zi ci si直接认读，不要拆开拼",en:"Read zi ci si as whole syllables, don't break apart"}
      ]
    },
    {id:8,title:"zh ch sh r",titleEn:"Initials zh ch sh r",
      difficulty: 1,
      text:["zh ch sh r","zhi chi shi ri"],textEn:["Learn curled tongue initials: zh, ch, sh, r","Learn whole-syllable recognition: zhi, chi, shi, ri"],
      textPinyin:["zh ch sh r / zhī chī shī rì"],
      recognizeChars:["桌","纸"],writeChars:[],
      exercises:[
        {type:"read",cn:"区分zh ch sh r的翘舌发音",en:"Distinguish curled tongue sounds zh ch sh r"},
        {type:"compare",cn:"对比平舌和翘舌：z-zh c-ch s-sh",en:"Compare flat and curled: z-zh c-ch s-sh"}
      ],
      teachingPoints:[
        {cn:"翘舌音zh ch sh r：舌尖翘起抵住硬腭",en:"Curled tongue: tip curls up to touch hard palate"},
        {cn:"r的发音特殊，像'日'的声母",en:"r has a special pronunciation, like the initial of 日"}
      ],
      parentTips:[
        {cn:"让孩子看口型区分平舌和翘舌",en:"Watch mouth shape to distinguish flat vs curled tongue"},
        {cn:"方言区的孩子需要特别注意zh ch sh",en:"Children from dialect areas need extra attention to zh ch sh"}
      ]
    }
  ],
  garden: {
    wordSentence: {
      title:"字词句运用", titleEn:"Words & Sentences",
      items: [
        {text:"拼一拼，连一连",textEn:"Spell and match: connect pinyin to pictures",type:"match"},
        {text:"读一读，比一比：b-d p-q",textEn:"Read and compare: b-d p-q",type:"compare"}
      ]
    },
    accumulation: {
      title:"日积月累", titleEn:"Daily Accumulation",
      content: {
        text:"小兔小兔轻轻跳，小狗小狗慢慢跑，要是踩疼小青草，我就不跟你们好。",
        textEn:"Little rabbit, hop lightly; little dog, run slowly. If you step on the little grass and hurt it, I won't be friends with you anymore.",
        pinyin:"xiǎo tù xiǎo tù qīng qīng tiào, xiǎo gǒu xiǎo gǒu màn man pǎo..."
      }
    }
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 3 — 汉语拼音（二）Pinyin 2           */
/* ═══════════════════════════════════════════ */
{
  id: 3, title: "汉语拼音（二）", titleEn: "Chinese Pinyin (II)",
  difficulty: 1,
  type: "pinyin",
  lessons: [
    {id:9,title:"ai ei ui",titleEn:"Compound Finals ai ei ui",
      difficulty: 1,
      text:["ai ei ui"],textEn:["Learn compound vowels: ai, ei, ui"],
      textPinyin:["āi ái ǎi ài / ēi éi ěi èi / uī uí uǐ uì"],
      recognizeChars:[],writeChars:[],
      exercises:[
        {type:"read",cn:"正确拼读ai ei ui与声母的组合",en:"Correctly spell ai ei ui with initials"},
        {type:"tone",cn:"注意声调标在哪个韵母上",en:"Notice which vowel gets the tone mark"}
      ],
      teachingPoints:[
        {cn:"复韵母由两个元音组合而成",en:"Compound finals combine two vowels"},
        {cn:"声调标调规则：有a标a，没a找o e，i u并列标在后",en:"Tone mark rule: mark a if present, else o/e; for i-u side by side, mark the second"}
      ],
      parentTips:[
        {cn:"标调规则口诀很重要，帮助孩子记忆",en:"The tone mark rule rhyme is important — help memorize it"},
        {cn:"ui的声调标在i上（后面的）",en:"ui's tone mark goes on i (the second one)"}
      ]
    },
    {id:10,title:"ao ou iu",titleEn:"Compound Finals ao ou iu",
      difficulty: 1,
      text:["ao ou iu"],textEn:["Learn compound vowels: ao, ou, iu"],
      textPinyin:["āo áo ǎo ào / ōu óu ǒu òu / iū iú iǔ iù"],
      recognizeChars:[],writeChars:[],
      exercises:[
        {type:"read",cn:"正确拼读ao ou iu",en:"Correctly spell ao ou iu"},
        {type:"spell",cn:"练习：māo（猫）、gǒu（狗）、niú（牛）",en:"Practice: māo (cat), gǒu (dog), niú (cow)"}
      ],
      teachingPoints:[
        {cn:"ao ou iu的发音要从前一个元音滑向后一个",en:"Pronounce by gliding from the first vowel to the second"},
        {cn:"iu的声调标在u上",en:"iu's tone mark goes on u"}
      ],
      parentTips:[
        {cn:"用动物名帮助记忆：猫māo 狗gǒu 牛niú",en:"Use animal names: cat māo, dog gǒu, cow niú"}
      ]
    },
    {id:11,title:"ie üe er",titleEn:"Compound Finals ie üe er",
      difficulty: 1,
      text:["ie üe er"],textEn:["Learn compound finals: ie, üe, er"],
      textPinyin:["iē ié iě iè / üē üé üě üè / ér"],
      recognizeChars:[],writeChars:[],
      exercises:[
        {type:"read",cn:"正确拼读ie üe er",en:"Correctly spell ie üe er"},
        {type:"spell",cn:"认识特殊韵母er（儿）",en:"Learn the special final er (child/suffix)"}
      ],
      teachingPoints:[
        {cn:"er是特殊韵母，可以独立成音节",en:"er is a special final that can form a syllable by itself"},
        {cn:"üe前加j q x时ü去两点",en:"When üe follows j q x, ü removes its dots"}
      ],
      parentTips:[
        {cn:"er在普通话中很常见（儿、耳、二）",en:"er is very common in Mandarin (child, ear, two)"}
      ]
    },
    {id:12,title:"an en in un ün",titleEn:"Nasal Finals an en in un ün",
      difficulty: 1,
      text:["an en in un ün"],textEn:["Learn front nasal finals: an, en, in, un, ün"],
      textPinyin:["ān án ǎn àn / ēn / īn / ūn / ǖn"],
      recognizeChars:[],writeChars:[],
      exercises:[
        {type:"read",cn:"正确发出前鼻音-n的音",en:"Correctly produce the front nasal -n sound"},
        {type:"spell",cn:"练习：shān（山）、rén（人）",en:"Practice: shān (mountain), rén (person)"}
      ],
      teachingPoints:[
        {cn:"前鼻音-n：舌尖抵住上齿龈",en:"Front nasal -n: tongue tip touches the gum ridge"},
        {cn:"ün只和j q x相拼",en:"ün only combines with j q x"}
      ],
      parentTips:[
        {cn:"前鼻音和后鼻音的区分是难点",en:"Distinguishing front and back nasals is a key difficulty"},
        {cn:"让孩子感受舌尖的位置",en:"Help the child feel where the tongue tip is"}
      ]
    },
    {id:13,title:"ang eng ing ong",titleEn:"Nasal Finals ang eng ing ong",
      difficulty: 1,
      text:["ang eng ing ong","ying"],textEn:["Learn back nasal finals: ang, eng, ing, ong","Learn whole syllable: ying"],
      textPinyin:["āng / ēng / īng / ōng"],
      recognizeChars:[],writeChars:[],
      exercises:[
        {type:"read",cn:"正确发出后鼻音-ng的音",en:"Correctly produce the back nasal -ng sound"},
        {type:"compare",cn:"对比前鼻音和后鼻音：an-ang en-eng in-ing",en:"Compare front vs back nasals: an-ang en-eng in-ing"}
      ],
      teachingPoints:[
        {cn:"后鼻音-ng：舌根抵住软腭",en:"Back nasal -ng: tongue root touches soft palate"},
        {cn:"认识整体认读音节ying",en:"Learn whole syllable ying"}
      ],
      parentTips:[
        {cn:"练习对比：天tian-汤tang 门men-猛meng",en:"Practice contrasts: tian-tang, men-meng"},
        {cn:"后鼻音嘴巴开大一些",en:"Back nasals need a more open mouth"}
      ]
    }
  ],
  garden: {
    wordSentence: {
      title:"字词句运用", titleEn:"Words & Sentences",
      items: [
        {text:"读一读，把音节读准：xiě zì dà lěi...",textEn:"Read and pronounce accurately",type:"read"},
        {text:"声母韵母总复习表",textEn:"Review chart of all initials and finals",type:"chart"},
        {text:"读一读说一说：马车 车站 坐车...",textEn:"Read and discuss: horse cart, bus stop, ride a bus...",type:"extend"}
      ]
    },
    accumulation: {
      title:"日积月累", titleEn:"Daily Accumulation",
      content: {
        text:"走路要学小花猫，脚步轻轻静悄悄。",
        textEn:"Walk like a little kitten — with light, quiet footsteps.",
        pinyin:"zǒu lù yào xué xiǎo huā māo, jiǎo bù qīng qīng jìng qiāo qiāo."
      }
    },
    readWithAdults: {
      title:"和大人一起读", titleEn:"Read with Adults",
      content: {
        title:"拼一拼，写一写", titleEn:"Spell and Write",
        text:"老师教大家读书。老师念一句，我们跟着念一句。窗外的风吹着，淅淅沙沙；窗外的鸟叫着，叽叽喳喳。……",
        textEn:"The teacher teaches us to read. The teacher reads a sentence, and we follow. Outside the wind blows — xīxī shāshā; outside the birds sing — jījī zhāzhā..."
      }
    }
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 4 — 课文（一）Texts 1                */
/* ═══════════════════════════════════════════ */
{
  id: 4, title: "课文（一）", titleEn: "Texts (I)",
  type: "kewen",
  lessons: [
    {id:1,title:"秋天",titleEn:"Autumn",
      difficulty: 1,
      text:["天气凉了，树叶黄了，一片片叶子从树上落下来。","天空那么蓝，那么高。一群大雁往南飞，一会儿排成个“人”字，一会儿排成个“一”字。","啊！秋天来了！"],
      textEn:["The weather has turned cool, the leaves have turned yellow, and one by one the leaves fall from the trees.","The sky is so blue, so high. A flock of wild geese fly south — sometimes in the shape of '人' (person), sometimes in the shape of '一' (one).","Ah! Autumn has come!"],
      textPinyin:["tiān qì liáng le, shù yè huáng le, yī piàn piàn yè zi cóng shù shàng luò xià lái.","tiān kōng nà me lán, nà me gāo. yī qún dà yàn wǎng nán fēi, yī huìr pái chéng gè 'rén' zì, yī huìr pái chéng gè 'yī' zì.","a! qiū tiān lái le!"],
      recognizeChars:["秋","气","了","树","叶","片","大","飞","会","个"],
      writeChars:["了","子","人","大"],
      vocabWords: [
        {word:'秋天',pinyin:'qiū tiān',en:'autumn',sentence:'秋天来了！',sentenceEn:'Autumn has come!'},
        {word:'树叶',pinyin:'shù yè',en:'leaf',sentence:'树叶黄了。',sentenceEn:'The leaves turned yellow.'},
        {word:'天气',pinyin:'tiān qì',en:'weather',sentence:'天气凉了。',sentenceEn:'The weather is cool.'},
        {word:'一片片',pinyin:'yī piàn piàn',en:'piece by piece',sentence:'树叶一片片落下来。',sentenceEn:'Leaves fall one by one.'},
        {word:'大雁',pinyin:'dà yàn',en:'wild goose',sentence:'一群大雁往南飞。',sentenceEn:'A flock of geese fly south.'},
        {word:'一会儿',pinyin:'yī huìr',en:'a moment',sentence:'一会儿排成"人"字。',sentenceEn:'Now forming a "人" shape.'}
      ],
      exercises:[
        {type:"read",cn:"朗读课文，背诵课文",en:"Read aloud and recite"},
        {type:"read",cn:"注意“一”的不同读音",en:"Notice the different tones of 一"},
        {type:"count",cn:"数一数，课文一共有几个自然段？",en:"Count: how many paragraphs in the text?"}
      ],
      teachingPoints:[
        {cn:"第一次接触带拼音的课文阅读",en:"First time reading a text with pinyin annotation"},
        {cn:"认识自然段：前面有两个空格",en:"Recognize paragraphs: indented by two spaces"},
        {cn:"'一'在不同位置读不同的声调",en:"'一' has different tones in different positions"}
      ],
      parentTips:[
        {cn:"带孩子观察秋天的景色，感受课文内容",en:"Take the child to observe autumn scenery and connect to the text"},
        {cn:"一起数自然段，培养阅读结构意识",en:"Count paragraphs together to build reading structure awareness"}
      ]
    },
    {id:2,title:"小小的船",titleEn:"The Little Boat",
      author:"叶圣陶",authorEn:"Ye Shengtao",
      difficulty: 1,
      text:["弯弯的月儿小小的船，","小小的船儿两头尖。","我在小小的船里坐，","只看见闪闪的星星蓝蓝的天。"],
      textEn:["The curved moon is like a little boat,","The little boat has two pointed ends.","I sit in the little boat,","And see only twinkling stars and a blue, blue sky."],
      textPinyin:["wān wān de yuè er xiǎo xiǎo de chuán,","xiǎo xiǎo de chuán er liǎng tóu jiān.","wǒ zài xiǎo xiǎo de chuán lǐ zuò,","zhǐ kàn jiàn shǎn shǎn de xīng xing lán lán de tiān."],
      recognizeChars:["的","船","两","头","在","里","看","见","闪","星"],
      writeChars:["月","儿","头","里"],
      vocabWords: [
        {word:'弯弯',pinyin:'wān wān',en:'curved',sentence:'弯弯的月儿小小的船。',sentenceEn:'The curved moon is like a little boat.'},
        {word:'月儿',pinyin:'yuèr',en:'moon (affectionate)',sentence:'月儿弯弯像小船。',sentenceEn:'The moon is curved like a little boat.'},
        {word:'星星',pinyin:'xīng xing',en:'star',sentence:'只看见闪闪的星星蓝蓝的天。',sentenceEn:'I see only twinkling stars and blue sky.'},
        {word:'蓝蓝',pinyin:'lán lán',en:'very blue',sentence:'蓝蓝的天。',sentenceEn:'The blue, blue sky.'},
        {word:'闪闪',pinyin:'shǎn shǎn',en:'twinkling',sentence:'闪闪的星星。',sentenceEn:'Twinkling stars.'}
      ],
      exercises:[
        {type:"read",cn:"朗读课文，背诵课文",en:"Read aloud and recite"},
        {type:"extend",cn:"读一读照样子说一说：弯弯的月儿→弯弯的小河",en:"Read and extend: curved moon → curved river, twinkling stars → twinkling..."}
      ],
      teachingPoints:[
        {cn:"学习叠词的运用：弯弯的、小小的、闪闪的、蓝蓝的",en:"Learn reduplication: wān wān (very curved), xiǎo xiǎo (tiny)"},
        {cn:"感受儿歌的韵律美",en:"Appreciate the rhythm and beauty of children's poetry"}
      ],
      parentTips:[
        {cn:"晚上看月亮时朗诵这首儿歌",en:"Recite this poem when looking at the moon at night"},
        {cn:"练习说'弯弯的__、闪闪的__'",en:"Practice saying 'curved __', 'twinkling __'"}
      ]
    },
    {id:3,title:"江南",titleEn:"South of the River",
      author:"汉乐府",authorEn:"Han Dynasty folk song",
      difficulty: 2,
      text:["江南可采莲，","莲叶何田田。","鱼戏莲叶间。","鱼戏莲叶东，","鱼戏莲叶西，","鱼戏莲叶南，","鱼戏莲叶北。"],
      textEn:["South of the river, lotus can be gathered,","How lush the lotus leaves grow.","Fish play among the lotus leaves.","Fish play east of the lotus leaves,","Fish play west of the lotus leaves,","Fish play south of the lotus leaves,","Fish play north of the lotus leaves."],
      textPinyin:["jiāng nán kě cǎi lián,","lián yè hé tián tián.","yú xì lián yè jiān.","yú xì lián yè dōng,","yú xì lián yè xī,","yú xì lián yè nán,","yú xì lián yè běi."],
      recognizeChars:["江","南","可","采","莲","鱼","东","西","北"],
      writeChars:["可","东","西"],
      vocabWords: [
        {word:'江南',pinyin:'jiāng nán',en:'south of Yangtze',sentence:'江南可采莲。',sentenceEn:'In Jiangnan one can pick lotus.'},
        {word:'莲叶',pinyin:'lián yè',en:'lotus leaf',sentence:'莲叶何田田。',sentenceEn:'How lush the lotus leaves are.'},
        {word:'鱼',pinyin:'yú',en:'fish',sentence:'鱼戏莲叶间。',sentenceEn:'Fish play among the lotus.'},
        {word:'东西南北',pinyin:'dōng xī nán běi',en:'east west south north',sentence:'鱼戏莲叶东，鱼戏莲叶西。',sentenceEn:'Fish play east, fish play west.'}
      ],
      exercises:[
        {type:"read",cn:"朗读课文，背诵课文",en:"Read aloud and recite"},
        {type:"discuss",cn:"想象鱼儿在莲叶间嬉戏的画面",en:"Imagine the scene of fish playing among lotus leaves"}
      ],
      teachingPoints:[
        {cn:"这是一首汉乐府民歌，感受古诗的韵律",en:"This is a Han Dynasty folk song — feel the rhythm of ancient poetry"},
        {cn:"学习方位词：东、西、南、北",en:"Learn direction words: east, west, south, north"}
      ],
      parentTips:[
        {cn:"配合图片或视频让孩子感受江南水乡",en:"Use pictures or videos to show Jiangnan water towns"},
        {cn:"教孩子用手指方向读'东西南北'",en:"Point in directions while reading east-west-south-north"}
      ]
    },
    {id:4,title:"四季",titleEn:"Four Seasons",
      difficulty: 1,
      text:["草芽尖尖，他对小鸟说：“我是春天。”","荷叶圆圆，他对青蛙说：“我是夏天。”","谷穗弯弯，他鞠着躬说：“我是秋天。”","雪人大肚子一挺，他顽皮地说：“我就是冬天。”"],
      textEn:["The pointy grass sprout says to the little bird: 'I am spring.'","The round lotus leaf says to the frog: 'I am summer.'","The bending grain ear bows and says: 'I am autumn.'","The snowman puffs out his big belly and says mischievously: 'I am winter.'"],
      textPinyin:["cǎo yá jiān jiān, tā duì xiǎo niǎo shuō: 'wǒ shì chūn tiān.'","hé yè yuán yuán, tā duì qīng wā shuō: 'wǒ shì xià tiān.'","gǔ suì wān wān, tā jū zhe gōng shuō: 'wǒ shì qiū tiān.'","xuě rén dà dù zi yī tǐng, tā wán pí de shuō: 'wǒ jiù shì dōng tiān.'"],
      recognizeChars:["尖","说","春","青","蛙","夏","弯","皮","地","冬"],
      writeChars:["天","四","是"],
      vocabWords: [
        {word:'春天',pinyin:'chūn tiān',en:'spring',sentence:'草芽对小鸟说："我是春天。"',sentenceEn:'The sprout says to birds: "I am spring."'},
        {word:'夏天',pinyin:'xià tiān',en:'summer',sentence:'荷叶对青蛙说："我是夏天。"',sentenceEn:'The lotus leaf says: "I am summer."'},
        {word:'秋天',pinyin:'qiū tiān',en:'autumn',sentence:'谷穗鞠着躬说："我是秋天。"',sentenceEn:'Grain bows: "I am autumn."'},
        {word:'冬天',pinyin:'dōng tiān',en:'winter',sentence:'雪人说："我就是冬天。"',sentenceEn:'The snowman says: "I am winter."'},
        {word:'草芽',pinyin:'cǎo yá',en:'grass sprout',sentence:'草芽尖尖。',sentenceEn:'Sharp grass sprouts.'},
        {word:'荷叶',pinyin:'hé yè',en:'lotus leaf',sentence:'荷叶圆圆。',sentenceEn:'Round lotus leaves.'},
        {word:'谷穗',pinyin:'gǔ suì',en:'grain ear',sentence:'谷穗弯弯。',sentenceEn:'Bending grain ears.'},
        {word:'雪人',pinyin:'xuě rén',en:'snowman',sentence:'雪人大肚子一挺。',sentenceEn:'The snowman pushes out his belly.'}
      ],
      exercises:[
        {type:"read",cn:"朗读课文，背诵课文",en:"Read aloud and recite"},
        {type:"create",cn:"你喜欢哪个季节？仿照课文说一说",en:"Which season do you like? Create your own verse like the text"}
      ],
      teachingPoints:[
        {cn:"学习拟人手法：草芽、荷叶、谷穗、雪人都会说话",en:"Learn personification: grass, lotus leaf, grain, snowman all speak"},
        {cn:"四季代表物：草芽-春、荷叶-夏、谷穗-秋、雪人-冬",en:"Season symbols: sprout-spring, lotus-summer, grain-autumn, snowman-winter"}
      ],
      parentTips:[
        {cn:"和孩子讨论每个季节的特征和喜欢的季节",en:"Discuss each season's features and favorite season"},
        {cn:"鼓励孩子仿照课文创编自己的四季小诗",en:"Encourage creating their own four-season poem"}
      ]
    }
  ],
  garden: {
    shiziStation: {
      title:"识字加油站", titleEn:"Character Booster",
      items: [{chars:["男","女","开","关","正","反"],category:"反义词 Antonyms"}]
    },
    wordSentence: {
      title:"字词句运用", titleEn:"Words & Sentences",
      items: [
        {text:"读一读：影子 太阳 月亮 星星",textEn:"Read: shadow, sun, moon, stars",type:"read"},
        {text:"看图写词语",textEn:"Look at pictures and write words",type:"write"}
      ]
    },
    accumulation: {
      title:"日积月累", titleEn:"Daily Accumulation",
      content: {
        text:"一年之计在于春，一日之计在于晨。一寸光阴一寸金，寸金难买寸光阴。",
        textEn:"A year's plan starts in spring; a day's plan starts at dawn. An inch of time is worth an inch of gold, but an inch of gold cannot buy an inch of time.",
        pinyin:"yī nián zhī jì zài yú chūn, yī rì zhī jì zài yú chén. yī cùn guāng yīn yī cùn jīn, cùn jīn nán mǎi cùn guāng yīn."
      }
    }
  },
  oralComm: {
    title:"我们做朋友", titleEn:"Let's Be Friends",
    objectives: [
      {cn:"说话的时候，看着对方的眼睛",en:"Look at the other person's eyes when speaking"},
      {cn:"做自我介绍，跟同学交朋友",en:"Introduce yourself and make friends with classmates"}
    ],
    activities: [
      {cn:"自我介绍：你好，我叫___，我喜欢___",en:"Self-introduction: Hello, my name is ___, I like ___"},
      {cn:"找到共同爱好的同学做朋友",en:"Find classmates with shared interests and become friends"}
    ]
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 5 — 识字（二）Literacy 2              */
/* ═══════════════════════════════════════════ */
{
  id: 5, title: "识字（二）", titleEn: "Literacy (II)",
  difficulty: 2,
  type: "shizi",
  lessons: [
    {id:6,title:"画",titleEn:"Painting",
      author:"王维",authorEn:"Wang Wei",
      difficulty: 2,
      text:["远看山有色，近听水无声。","春去花还在，人来鸟不惊。"],
      textEn:["From far, the mountains have color; up close, the water has no sound.","Spring passes, but the flowers remain; people come, but the birds aren't startled."],
      textPinyin:["yuǎn kàn shān yǒu sè, jìn tīng shuǐ wú shēng.","chūn qù huā hái zài, rén lái niǎo bù jīng."],
      recognizeChars:["远","有","色","近","听","无","声","去","还","来"],
      writeChars:["水","去","来","不"],
      vocabWords: [
        {word:'远',pinyin:'yuǎn',en:'far',sentence:'远看山有色。',sentenceEn:'From afar, mountains have color.'},
        {word:'近',pinyin:'jìn',en:'near',sentence:'近听水无声。',sentenceEn:'Up close, water has no sound.'},
        {word:'有',pinyin:'yǒu',en:'have',sentence:'远看山有色。',sentenceEn:'From afar, mountains have color.'},
        {word:'无',pinyin:'wú',en:'without',sentence:'近听水无声。',sentenceEn:'Up close, water has no sound.'},
        {word:'来',pinyin:'lái',en:'come',sentence:'人来鸟不惊。',sentenceEn:'People come but birds are not startled.'},
        {word:'去',pinyin:'qù',en:'go',sentence:'春去花还在。',sentenceEn:'Spring goes but flowers remain.'}
      ],
      exercises:[
        {type:"read",cn:"朗读课文，背诵课文",en:"Read aloud and recite"},
        {type:"discuss",cn:"为什么水无声、鸟不惊？（因为是一幅画）",en:"Why is the water silent and the birds unfrightened? (Because it's a painting)"}
      ],
      teachingPoints:[
        {cn:"这是一首谜语诗，谜底是“画”",en:"This is a riddle poem — the answer is 'painting'"},
        {cn:"学习反义词：远-近 有-无 来-去",en:"Learn antonyms: far-near, have-none, come-go"}
      ],
      parentTips:[
        {cn:"让孩子先猜谜底，再揭晓答案",en:"Let the child guess the riddle first, then reveal"},
        {cn:"一起找课文中的反义词",en:"Find the antonyms in the text together"}
      ]
    },
    {id:7,title:"大小多少",titleEn:"Big Small Many Few",
      difficulty: 1,
      text:["一个大，一个小，一头黄牛一只猫。","一边多，一边少，一群鸭子一只鸟。","一个大，一个小，一个苹果一颗枣。","一边多，一边少，一堆杏子一个桃。"],
      textEn:["One is big, one is small — a yellow ox and a cat.","One side has many, one side has few — a flock of ducks and a bird.","One is big, one is small — an apple and a jujube.","One side has many, one side has few — a pile of apricots and a peach."],
      textPinyin:["yī gè dà, yī gè xiǎo, yī tóu huáng niú yī zhī māo.","yī biān duō, yī biān shǎo, yī qún yā zi yī zhī niǎo.","yī gè dà, yī gè xiǎo, yī gè píng guǒ yī kē zǎo.","yī biān duō, yī biān shǎo, yī duī xìng zi yī gè táo."],
      recognizeChars:["多","少","黄","牛","只","猫","边","鸭","苹","果","杏","桃"],
      writeChars:["小","少","牛","果","鸟"],
      vocabWords: [
        {word:'大',pinyin:'dà',en:'big',sentence:'黄牛大。',sentenceEn:'The ox is big.'},
        {word:'小',pinyin:'xiǎo',en:'small',sentence:'花猫小。',sentenceEn:'The kitten is small.'},
        {word:'多',pinyin:'duō',en:'many',sentence:'鸭子多。',sentenceEn:'Many ducks.'},
        {word:'少',pinyin:'shǎo',en:'few',sentence:'小鸟少。',sentenceEn:'Few birds.'},
        {word:'黄牛',pinyin:'huáng niú',en:'ox',sentence:'一头黄牛一只猫。',sentenceEn:'One ox, one cat.'},
        {word:'苹果',pinyin:'píng guǒ',en:'apple',sentence:'一个苹果一颗枣。',sentenceEn:'One apple, one date.'}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"学习量词：头、只、群、个、颗、堆",en:"Learn measure words: tóu, zhī, qún, gè, kē, duī"}
      ],
      teachingPoints:[
        {cn:"学习常用量词及其搭配",en:"Learn common measure words and their collocations"},
        {cn:"感受对比写法：大-小、多-少",en:"Feel the contrast structure: big-small, many-few"}
      ],
      parentTips:[
        {cn:"在生活中练习量词：一头牛、一只猫、一群鸭",en:"Practice measure words in daily life"},
        {cn:"让孩子说说还有什么大的/小的、多的/少的",en:"Ask what else is big/small, many/few"}
      ]
    },
    {id:8,title:"小书包",titleEn:"Little Schoolbag",
      difficulty: 1,
      text:["我的小书包，宝贝真不少。","课本作业本，铅笔转笔刀。","上课静悄悄，下课不乱跑。","天天起得早，陪我去学校。"],
      textEn:["My little schoolbag has quite a few treasures.","Textbooks, exercise books, pencils, and a sharpener.","Quiet during class, no running after class.","Getting up early every day to go to school with me."],
      textPinyin:["wǒ de xiǎo shū bāo, bǎo bèi zhēn bù shǎo.","kè běn zuò yè běn, qiān bǐ zhuàn bǐ dāo.","shàng kè jìng qiāo qiāo, xià kè bù luàn pǎo.","tiān tiān qǐ de zǎo, péi wǒ qù xué xiào."],
      recognizeChars:["书","包","尺","作","业","本","笔","刀","课","早","校"],
      writeChars:["早","书","刀","尺","本"],
      vocabWords: [
        {word:'书包',pinyin:'shū bāo',en:'school bag',sentence:'我的小书包。',sentenceEn:'My little school bag.'},
        {word:'课本',pinyin:'kè běn',en:'textbook',sentence:'书包里有课本。',sentenceEn:'Textbooks in the bag.'},
        {word:'铅笔',pinyin:'qiān bǐ',en:'pencil',sentence:'铅笔是好朋友。',sentenceEn:'The pencil is a friend.'},
        {word:'尺子',pinyin:'chǐ zi',en:'ruler',sentence:'尺子画直线。',sentenceEn:'Ruler draws straight lines.'},
        {word:'橡皮',pinyin:'xiàng pí',en:'eraser',sentence:'橡皮擦错字。',sentenceEn:'Eraser removes mistakes.'}
      ],
      exercises:[
        {type:"read",cn:"朗读课文，说说你的书包里有哪些文具",en:"Read aloud; describe what's in your schoolbag"},
        {type:"do",cn:"我会自己整理书包",en:"I can organize my schoolbag by myself"}
      ],
      teachingPoints:[
        {cn:"认识学习用品相关的汉字",en:"Learn characters related to school supplies"},
        {cn:"培养整理书包的好习惯",en:"Develop good habits of organizing schoolbags"}
      ],
      parentTips:[
        {cn:"让孩子独立整理书包，说出每样文具的名字",en:"Have the child organize their bag independently, naming each item"},
        {cn:"用实物教学：指着文具说字",en:"Use real objects: point to supplies and say the characters"}
      ]
    },
    {id:9,title:"日月明",titleEn:"Sun + Moon = Bright",
      difficulty: 2,
      text:["日月明，田力男。","小大尖，小土尘。","二人从，三人众。","双木林，三木森。","一人不成众，独木不成林。","众人一条心，黄土变成金。"],
      textEn:["Sun + Moon = Bright; Field + Strength = Man.","Small + Big = Pointed; Small + Earth = Dust.","Two people = Follow; Three people = Crowd.","Two trees = Grove; Three trees = Forest.","One person can't make a crowd; one tree can't make a forest.","When everyone shares one heart, yellow earth turns to gold."],
      textPinyin:["rì yuè míng, tián lì nán.","xiǎo dà jiān, xiǎo tǔ chén.","èr rén cóng, sān rén zhòng.","shuāng mù lín, sān mù sēn.","yī rén bù chéng zhòng, dú mù bù chéng lín.","zhòng rén yī tiáo xīn, huáng tǔ biàn chéng jīn."],
      recognizeChars:["明","力","尘","从","众","双","木","林","森","条","心"],
      writeChars:["木","林","土","力","心"],
      vocabWords: [
        {word:'明',pinyin:'míng',en:'bright (日+月)',sentence:'日月明。',sentenceEn:'Sun+moon=bright.'},
        {word:'尖',pinyin:'jiān',en:'sharp (小+大)',sentence:'小大尖。',sentenceEn:'Small+big=sharp.'},
        {word:'尘',pinyin:'chén',en:'dust (小+土)',sentence:'小土尘。',sentenceEn:'Small+earth=dust.'},
        {word:'从',pinyin:'cóng',en:'follow (人+人)',sentence:'二人从。',sentenceEn:'Two people=follow.'},
        {word:'众',pinyin:'zhòng',en:'crowd (人×3)',sentence:'三人众。',sentenceEn:'Three people=crowd.'},
        {word:'力',pinyin:'lì',en:'strength',sentence:'众人一条心，黄土变成金。',sentenceEn:'United hearts turn soil to gold.'}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"guess",cn:"猜猜这些字的意思：鲜 歪 休 泪",en:"Guess the meanings: 鲜(fish+sheep=fresh) 歪(not+straight=crooked) 休(person+tree=rest) 泪(water+eye=tears)"}
      ],
      teachingPoints:[
        {cn:"学习会意字的构字规律：两个或多个字组合成新字",en:"Learn compound ideographs: combining two+ characters into new ones"},
        {cn:"理解团结合作的道理",en:"Understand the value of unity and cooperation"}
      ],
      parentTips:[
        {cn:"和孩子一起拆字游戏：明=日+月",en:"Play character-splitting games: 明 = 日 + 月"},
        {cn:"让孩子试着猜更多会意字",en:"Have the child guess more compound ideographs"}
      ]
    },
    {id:10,title:"升国旗",titleEn:"Raising the National Flag",
      difficulty: 1,
      text:["五星红旗，我们的国旗。","国歌声中，高高升起。","我们立正，向您敬礼。"],
      textEn:["The five-star red flag, our national flag.","In the sound of the national anthem, it rises high.","We stand at attention and salute you."],
      textPinyin:["wǔ xīng hóng qí, wǒ men de guó qí.","guó gē shēng zhōng, gāo gāo shēng qǐ.","wǒ men lì zhèng, xiàng nín jìng lǐ."],
      recognizeChars:["升","国","旗","中","红","歌","起","么","美","丽","立"],
      writeChars:["中","五","立","正"],
      vocabWords: [
        {word:'国旗',pinyin:'guó qí',en:'national flag',sentence:'五星红旗是我们的国旗。',sentenceEn:'The five-star red flag is our national flag.'},
        {word:'升旗',pinyin:'shēng qí',en:'raise the flag',sentence:'国旗国旗真美丽。',sentenceEn:'The flag is truly beautiful.'},
        {word:'中国',pinyin:'zhōng guó',en:'China',sentence:'我是中国人。',sentenceEn:'I am Chinese.'},
        {word:'立正',pinyin:'lì zhèng',en:'stand at attention',sentence:'我们立正。',sentenceEn:'We stand at attention.'},
        {word:'敬礼',pinyin:'jìng lǐ',en:'salute',sentence:'向国旗敬礼。',sentenceEn:'Salute the flag.'}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"do",cn:"做升旗仪式的动作：立正、敬礼",en:"Practice flag ceremony actions: attention, salute"}
      ],
      teachingPoints:[
        {cn:"培养爱国主义情感",en:"Cultivate patriotic feelings"},
        {cn:"了解升旗仪式的基本礼仪",en:"Learn basic flag ceremony etiquette"}
      ],
      parentTips:[
        {cn:"看升旗仪式视频，让孩子了解国旗的意义",en:"Watch flag-raising ceremony videos to understand its significance"},
        {cn:"教孩子唱国歌",en:"Teach the child to sing the national anthem"}
      ]
    }
  ],
  garden: {
    shiziStation: {
      title:"识字加油站", titleEn:"Character Booster",
      items: [{chars:["小桥","流水","垂柳","桃花"],category:"自然景物 Nature Scenes"}]
    },
    wordSentence: {
      title:"字词句运用", titleEn:"Words & Sentences",
      items: [
        {text:"读一读：明月 力气 尘土 众多 树林 森林 关心 开心",textEn:"Read: bright moon, strength, dust, many, woods, forest, care, happy",type:"read"},
        {text:"猜字：歪（不正=crooked）、尖（小大=pointed）",textEn:"Guess: 歪(not+straight), 尖(small+big=pointed)",type:"guess"}
      ]
    },
    writingHints: {
      title:"书写提示", titleEn:"Writing Tips",
      rules: [
        {cn:"先撇后捺",en:"Left-falling stroke before right-falling",examples:"人、大、八"},
        {cn:"先中间后两边",en:"Middle before sides",examples:"小、水"}
      ]
    },
    accumulation: {
      title:"日积月累", titleEn:"Daily Accumulation",
      content: {
        text:"前人栽树，后人乘凉。\n种瓜得瓜，种豆得豆。\n千里之行，始于足下。\n百尺竿头，更进一步。",
        textEn:"Predecessors plant trees; descendants enjoy the shade.\nPlant melons, get melons; plant beans, get beans.\nA journey of a thousand miles begins with a single step.\nAt the top of a hundred-foot pole, take one more step forward.",
        pinyin:"qián rén zāi shù, hòu rén chéng liáng.\nzhǒng guā dé guā, zhǒng dòu dé dòu.\nqiān lǐ zhī xíng, shǐ yú zú xià.\nbǎi chǐ gān tóu, gèng jìn yī bù."
      }
    }
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 6 — 课文（二）Texts 2                */
/* ═══════════════════════════════════════════ */
{
  id: 6, title: "课文（二）", titleEn: "Texts (II)",
  type: "kewen",
  lessons: [
    {id:5,title:"影子",titleEn:"Shadow",
      difficulty: 1,
      text:["影子在前，影子在后，影子常常跟着我，就像一条小黑狗。","影子在左，影子在右，影子常常陪着我，它是我的好朋友。"],
      textEn:["Shadow in front, shadow behind — shadow always follows me, just like a little black dog.","Shadow on the left, shadow on the right — shadow always keeps me company, it is my good friend."],
      textPinyin:["yǐng zi zài qián, yǐng zi zài hòu, yǐng zi cháng cháng gēn zhe wǒ, jiù xiàng yī tiáo xiǎo hēi gǒu.","yǐng zi zài zuǒ, yǐng zi zài yòu, yǐng zi cháng cháng péi zhe wǒ, tā shì wǒ de hǎo péng you."],
      recognizeChars:["影","前","后","黑","狗","左","右","它","好","朋","友"],
      writeChars:["在","后","我","好"],
      vocabWords: [
        {word:'影子',pinyin:'yǐng zi',en:'shadow',sentence:'影子在前，影子在后。',sentenceEn:'Shadow in front, shadow behind.'},
        {word:'前',pinyin:'qián',en:'front',sentence:'影子在前。',sentenceEn:'Shadow in front.'},
        {word:'后',pinyin:'hòu',en:'behind',sentence:'影子在后。',sentenceEn:'Shadow behind.'},
        {word:'左',pinyin:'zuǒ',en:'left',sentence:'影子在左。',sentenceEn:'Shadow on left.'},
        {word:'右',pinyin:'yòu',en:'right',sentence:'影子在右。',sentenceEn:'Shadow on right.'},
        {word:'好朋友',pinyin:'hǎo péng you',en:'good friend',sentence:'影子是我的好朋友。',sentenceEn:'Shadow is my good friend.'}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"do",cn:"到操场上找找你的影子",en:"Go to the playground and find your shadow"}
      ],
      teachingPoints:[
        {cn:"学习方位词：前、后、左、右",en:"Learn position words: front, behind, left, right"},
        {cn:"体会比喻：影子像小黑狗、像好朋友",en:"Understand simile: shadow is like a black dog, like a friend"}
      ],
      parentTips:[
        {cn:"阳光下带孩子玩影子游戏",en:"Play shadow games with the child in sunlight"},
        {cn:"练习方位词：前后左右",en:"Practice position words: front-behind-left-right"}
      ]
    },
    {id:6,title:"比尾巴",titleEn:"Comparing Tails",
      difficulty: 1,
      text:["谁的尾巴长？谁的尾巴短？谁的尾巴好像一把伞？","猴子的尾巴长，兔子的尾巴短，松鼠的尾巴好像一把伞。","谁的尾巴弯？谁的尾巴扁？谁的尾巴最好看？","公鸡的尾巴弯，鸭子的尾巴扁，孔雀的尾巴最好看。"],
      textEn:["Whose tail is long? Whose tail is short? Whose tail looks like an umbrella?","The monkey's tail is long, the rabbit's tail is short, the squirrel's tail looks like an umbrella.","Whose tail is curved? Whose tail is flat? Whose tail is the prettiest?","The rooster's tail is curved, the duck's tail is flat, the peacock's tail is the prettiest."],
      textPinyin:["shuí de wěi ba cháng? shuí de wěi ba duǎn? shuí de wěi ba hǎo xiàng yī bǎ sǎn?","hóu zi de wěi ba cháng, tù zi de wěi ba duǎn, sōng shǔ de wěi ba hǎo xiàng yī bǎ sǎn.","shuí de wěi ba wān? shuí de wěi ba biǎn? shuí de wěi ba zuì hǎo kàn?","gōng jī de wěi ba wān, yā zi de wěi ba biǎn, kǒng què de wěi ba zuì hǎo kàn."],
      recognizeChars:["比","尾","巴","谁","长","短","把","伞","兔","最","公"],
      writeChars:["长","比","巴","把"],
      vocabWords: [
        {word:'尾巴',pinyin:'wěi ba',en:'tail',sentence:'谁的尾巴长？',sentenceEn:'Whose tail is long?'},
        {word:'长',pinyin:'cháng',en:'long',sentence:'猴子的尾巴长。',sentenceEn:'The monkey has a long tail.'},
        {word:'短',pinyin:'duǎn',en:'short',sentence:'兔子的尾巴短。',sentenceEn:'The rabbit has a short tail.'},
        {word:'猴子',pinyin:'hóu zi',en:'monkey',sentence:'猴子的尾巴长。',sentenceEn:'The monkey has a long tail.'},
        {word:'兔子',pinyin:'tù zi',en:'rabbit',sentence:'兔子的尾巴短。',sentenceEn:'The rabbit has a short tail.'},
        {word:'松鼠',pinyin:'sōng shǔ',en:'squirrel',sentence:'松鼠的尾巴好像一把伞。',sentenceEn:'The squirrel has a tail like an umbrella.'},
        {word:'孔雀',pinyin:'kǒng què',en:'peacock',sentence:'孔雀的尾巴最好看。',sentenceEn:'The peacock has the prettiest tail.'}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"extend",cn:"你还知道哪些动物的尾巴有什么特点？",en:"What other animals' tails do you know about?"}
      ],
      teachingPoints:[
        {cn:"问答式的课文结构：先问后答",en:"Question-and-answer text structure"},
        {cn:"学习形容词：长、短、弯、扁",en:"Learn adjectives: long, short, curved, flat"}
      ],
      parentTips:[
        {cn:"和孩子一起看动物图片，说说尾巴的特点",en:"Look at animal pictures together and describe their tails"},
        {cn:"可以拓展：谁的耳朵长？谁的鼻子长？",en:"Extend: whose ears are long? Whose nose is long?"}
      ]
    },
    {id:7,title:"青蛙写诗",titleEn:"The Frog Writes a Poem",
      difficulty: 2,
      text:["下雨了，雨点儿淅沥沥，沙啦啦。","青蛙说：“我要写诗啦！”","小蝌蚪游过来说：“我要给你当个小逗号。”","池塘里的水泡泡说：“我能当个小句号。”","荷叶上的一串水珠说：“我们可以当省略号。”","青蛙的诗写成了：“呱呱，呱呱，呱呱呱。呱呱，呱呱，呱呱呱……”"],
      textEn:["It's raining — the raindrops go xīlìlì, shālālā.","The frog says: 'I want to write a poem!'","A tadpole swims over: 'I'll be a little comma for you.'","A water bubble in the pond says: 'I can be a little period.'","A string of water drops on the lotus leaf says: 'We can be an ellipsis.'","The frog's poem is done: 'Ribbit ribbit, ribbit ribbit, ribbit ribbit ribbit. Ribbit ribbit, ribbit ribbit, ribbit ribbit ribbit...'"],
      textPinyin:["xià yǔ le, yǔ diǎn er xī lì lì, shā lā lā.","qīng wā shuō: 'wǒ yào xiě shī la!'","xiǎo kē dǒu yóu guò lái shuō: 'wǒ yào gěi nǐ dāng gè xiǎo dòu hào.'","chí táng lǐ de shuǐ pào pao shuō: 'wǒ néng dāng gè xiǎo jù hào.'","hé yè shàng de yī chuàn shuǐ zhū shuō: 'wǒ men kě yǐ dāng shěng lüè hào.'","qīng wā de shī xiě chéng le: 'guā guā, guā guā, guā guā guā. guā guā, guā guā, guā guā guā……'"],
      recognizeChars:["写","诗","点","要","过","给","当","串","们","以","成"],
      writeChars:["下","个","雨","们"],
      vocabWords: [
        {word:'青蛙',pinyin:'qīng wā',en:'frog',sentence:'青蛙说："我要写诗。"',sentenceEn:'The frog says: "I want to write a poem."'},
        {word:'写诗',pinyin:'xiě shī',en:'write poetry',sentence:'青蛙写诗了。',sentenceEn:'The frog wrote a poem.'},
        {word:'蝌蚪',pinyin:'kē dǒu',en:'tadpole',sentence:'小蝌蚪当逗号。',sentenceEn:'Tadpoles become commas.'},
        {word:'逗号',pinyin:'dòu hào',en:'comma',sentence:'小蝌蚪说："我来当逗号。"',sentenceEn:'The tadpole says: "I will be a comma."'},
        {word:'句号',pinyin:'jù hào',en:'period',sentence:'水泡泡说："我来当句号。"',sentenceEn:'Bubbles say: "I will be a period."'}
      ],
      exercises:[
        {type:"read",cn:"分角色朗读课文",en:"Role-play reading"},
        {type:"learn",cn:"认识标点符号：逗号、句号、省略号",en:"Learn punctuation: comma, period, ellipsis"}
      ],
      teachingPoints:[
        {cn:"通过故事认识三种标点符号",en:"Learn three punctuation marks through a story"},
        {cn:"培养想象力：蝌蚪像逗号，水泡像句号",en:"Develop imagination: tadpoles look like commas, bubbles like periods"}
      ],
      parentTips:[
        {cn:"和孩子分角色朗读，增加趣味性",en:"Role-play reading with the child for fun"},
        {cn:"在书中找逗号、句号、省略号",en:"Find commas, periods, and ellipses in books"}
      ]
    },
    {id:8,title:"雨点儿",titleEn:"Raindrops",
      author:"金波",authorEn:"Jin Bo",
      difficulty: 2,
      text:["数不清的雨点儿，从云彩里飘落下来。","半空中，大雨点儿问小雨点儿：“你要到哪里去？”","小雨点儿回答：“我要去有花有草的地方。你呢？”","大雨点儿说：“我要去没有花没有草的地方。”","不久，有花有草的地方，花更红了，草更绿了。没有花没有草的地方，开出了红的花，长出了绿的草。"],
      textEn:["Countless raindrops float down from the clouds.","In mid-air, Big Raindrop asks Little Raindrop: 'Where are you going?'","Little Raindrop answers: 'I'm going where there are flowers and grass. And you?'","Big Raindrop says: 'I'm going where there are no flowers and no grass.'","Soon, where there were flowers and grass, the flowers became redder and the grass greener. Where there were no flowers and no grass, red flowers bloomed and green grass grew."],
      textPinyin:["shǔ bù qīng de yǔ diǎn er, cóng yún cai lǐ piāo luò xià lái.","bàn kōng zhōng, dà yǔ diǎn er wèn xiǎo yǔ diǎn er: 'nǐ yào dào nǎ lǐ qù?'","xiǎo yǔ diǎn er huí dá: 'wǒ yào qù yǒu huā yǒu cǎo de dì fāng. nǐ ne?'","dà yǔ diǎn er shuō: 'wǒ yào qù méi yǒu huā méi yǒu cǎo de dì fāng.'","bù jiǔ, yǒu huā yǒu cǎo de dì fāng, huā gèng hóng le, cǎo gèng lǜ le. méi yǒu huā méi yǒu cǎo de dì fāng, kāi chū le hóng de huā, zhǎng chū le lǜ de cǎo."],
      recognizeChars:["数","彩","半","空","问","到","方","没","更","绿","出","长"],
      writeChars:["问","有","半","从","你"],
      vocabWords: [
        {word:'雨点儿',pinyin:'yǔ diǎnr',en:'raindrop',sentence:'数不清的雨点儿。',sentenceEn:'Countless raindrops.'},
        {word:'数不清',pinyin:'shǔ bu qīng',en:'countless',sentence:'数不清的雨点儿从云彩里飘落下来。',sentenceEn:'Countless raindrops fall from clouds.'},
        {word:'云彩',pinyin:'yún cai',en:'cloud',sentence:'从云彩里飘落下来。',sentenceEn:'Drifting down from the clouds.'},
        {word:'飘落',pinyin:'piāo luò',en:'drift down',sentence:'雨点儿飘落下来。',sentenceEn:'Raindrops drift down.'}
      ],
      exercises:[
        {type:"read",cn:"分角色朗读课文",en:"Role-play reading"},
        {type:"read",cn:"注意读好停顿",en:"Pay attention to reading pauses"},
        {type:"discuss",cn:"大雨点儿去了没有花没有草的地方，后来怎样了？",en:"What happened after Big Raindrop went where there were no flowers?"}
      ],
      teachingPoints:[
        {cn:"理解对话的结构：谁说、说了什么",en:"Understand dialogue structure: who says what"},
        {cn:"体会大雨点儿和小雨点儿各自的作用",en:"Appreciate the different roles of big and small raindrops"}
      ],
      parentTips:[
        {cn:"下雨天带孩子观察雨点",en:"Watch raindrops with the child on a rainy day"},
        {cn:"讨论：大雨点儿为什么去没有花草的地方？",en:"Discuss: why does Big Raindrop go to the barren place?"}
      ]
    }
  ],
  garden: {
    wordSentence: {
      title:"字词句运用", titleEn:"Words & Sentences",
      items: [
        {text:"读一读：明天 昨天 今年 今天",textEn:"Read: tomorrow, yesterday, this year, today",type:"read"}
      ]
    },
    writingHints: {
      title:"书写提示", titleEn:"Writing Tips",
      rules: [
        {cn:"先外后内",en:"Outside before inside",examples:"问、月"},
        {cn:"先中间后两边",en:"Middle before sides",examples:"小、水"}
      ]
    },
    accumulation: {
      title:"日积月累", titleEn:"Daily Accumulation",
      content: {
        title:"风", titleEn:"Wind",
        author:"[唐] 李峤",authorEn:"[Tang] Li Qiao",
        text:"解落三秋叶，能开二月花。\n过江千尺浪，入竹万竿斜。",
        textEn:"It can blow down autumn leaves from three months of fall,\nIt can open flowers in the second month of spring.\nCrossing the river, it raises thousand-foot waves;\nEntering bamboo, it bends ten thousand poles askew.",
        pinyin:"jiě luò sān qiū yè, néng kāi èr yuè huā.\nguò jiāng qiān chǐ làng, rù zhú wàn gān xié."
      }
    }
  },
  oralComm: {
    title:"用多大的声音", titleEn:"How Loud Should I Speak?",
    objectives: [
      {cn:"在不同场合用合适的音量说话",en:"Use appropriate volume for different situations"},
      {cn:"什么时候要大声？什么时候要小声？",en:"When to speak loudly? When to speak softly?"}
    ],
    activities: [
      {cn:"在图书馆要小声说话",en:"Speak softly in the library"},
      {cn:"回答老师问题要大声说",en:"Answer teacher's questions loudly"},
      {cn:"讨论还有哪些场合需要注意音量",en:"Discuss other situations requiring volume awareness"}
    ]
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 7 — 课文（三）Texts 3                */
/* ═══════════════════════════════════════════ */
{
  id: 7, title: "课文（三）", titleEn: "Texts (III)",
  difficulty: 2,
  type: "kewen",
  lessons: [
    {id:9,title:"明天要远足",titleEn:"Tomorrow's Field Trip",
      difficulty: 1,
      text:["翻过来，翻过去，唉——睡不着。","那地方的海，真的像老师说的，那么多种颜色吗？","翻过来，翻过去，唉——睡不着。","那地方的云，真的像同学说的，那么洁白柔软吗？","翻过来，翻过去，唉——到底什么时候，才天亮呢？"],
      textEn:["Tossing and turning — sigh — I can't sleep.","Will the sea there really have as many colors as the teacher said?","Tossing and turning — sigh — I can't sleep.","Will the clouds there really be as white and soft as my classmate said?","Tossing and turning — sigh — when will it finally be morning?"],
      textPinyin:["fān guò lái, fān guò qù, āi—— shuì bù zháo.","nà dì fāng de hǎi, zhēn de xiàng lǎo shī shuō de, nà me duō zhǒng yán sè ma?","fān guò lái, fān guò qù, āi—— shuì bù zháo.","nà dì fāng de yún, zhēn de xiàng tóng xué shuō de, nà me jié bái róu ruǎn ma?","fān guò lái, fān guò qù, āi—— dào dǐ shén me shí hou, cái tiān liàng ne?"],
      recognizeChars:["睡","那","海","真","老","师","吗","同","什","才","亮"],
      writeChars:["明","学","才","同"],
      vocabWords: [
        {word:'远足',pinyin:'yuǎn zú',en:'field trip',sentence:'明天要远足！',sentenceEn:'Field trip tomorrow!'},
        {word:'明天',pinyin:'míng tiān',en:'tomorrow',sentence:'明天要远足。',sentenceEn:'Tomorrow is the field trip.'},
        {word:'睡不着',pinyin:'shuì bu zháo',en:'cannot sleep',sentence:'翻过来，翻过去，睡不着。',sentenceEn:'Toss and turn, cannot sleep.'},
        {word:'大海',pinyin:'dà hǎi',en:'ocean',sentence:'那地方的海真的很蓝吗？',sentenceEn:'Is the sea there really blue?'},
        {word:'老师',pinyin:'lǎo shī',en:'teacher',sentence:'老师说海是蓝色的。',sentenceEn:'Teacher says the sea is blue.'}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"你有过这样的心情吗？和同学说一说",en:"Have you ever felt this way? Tell your classmates"}
      ],
      teachingPoints:[
        {cn:"反复的写法：三次'翻过来翻过去'表达期待心情",en:"Repetition: three times 'tossing and turning' expresses anticipation"},
        {cn:"感受儿童对远足的期待和兴奋",en:"Feel the child's excitement and anticipation for the field trip"}
      ],
      parentTips:[
        {cn:"回忆孩子期待某件事时激动得睡不着的经历",en:"Recall times when the child was too excited to sleep"},
        {cn:"讨论出游前的期待心情",en:"Discuss the feeling of anticipation before a trip"}
      ]
    },
    {id:10,title:"大还是小",titleEn:"Big or Small?",
      author:"龚艺兵",authorEn:"Gong Yibing",
      difficulty: 1,
      text:["有时候，我觉得自己很大。","我自己穿衣服的时候，我自己系鞋带的时候，我觉得自己很大。","有时候，我觉得自己很小。","我够不到门铃的时候，我听到雷声喊妈妈的时候，我觉得自己很小。","有时候，我希望自己不要长大。","更多的时候，我盼着自己快点儿长大。"],
      textEn:["Sometimes, I feel I am very big.","When I dress myself, when I tie my own shoelaces, I feel I am very big.","Sometimes, I feel I am very small.","When I can't reach the doorbell, when I hear thunder and call for mama, I feel I am very small.","Sometimes, I wish I wouldn't grow up.","But most of the time, I wish I would grow up faster."],
      textPinyin:["yǒu shí hou, wǒ jué de zì jǐ hěn dà.","wǒ zì jǐ chuān yī fu de shí hou, wǒ zì jǐ jì xié dài de shí hou, wǒ jué de zì jǐ hěn dà.","yǒu shí hou, wǒ jué de zì jǐ hěn xiǎo.","wǒ gòu bù dào mén líng de shí hou, wǒ tīng dào léi shēng hǎn mā ma de shí hou, wǒ jué de zì jǐ hěn xiǎo.","yǒu shí hou, wǒ xī wàng zì jǐ bù yào zhǎng dà.","gèng duō de shí hou, wǒ pàn zhe zì jǐ kuài diǎnr zhǎng dà."],
      recognizeChars:["时","候","觉","得","自","己","很","穿","衣","服","门","快"],
      writeChars:["自","己","门","衣"],
      vocabWords: [
        {word:'觉得',pinyin:'jué de',en:'feel; think',sentence:'我觉得自己很大。',sentenceEn:'I feel I am very big.'},
        {word:'有时候',pinyin:'yǒu shí hou',en:'sometimes',sentence:'有时候觉得自己很小。',sentenceEn:'Sometimes I feel small.'},
        {word:'穿衣服',pinyin:'chuān yī fu',en:'get dressed',sentence:'自己穿衣服的时候。',sentenceEn:'When I dress myself.'},
        {word:'快点儿',pinyin:'kuài diǎnr',en:'hurry up',sentence:'我盼着快点儿长大。',sentenceEn:'I wish I could grow up fast.'}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"你什么时候觉得自己大？什么时候觉得自己小？",en:"When do you feel big? When do you feel small?"}
      ],
      teachingPoints:[
        {cn:"理解对比的写作手法",en:"Understand the contrast writing technique"},
        {cn:"引导学生体会成长的感受",en:"Guide students to reflect on growing up"}
      ],
      parentTips:[
        {cn:"和孩子聊聊他觉得自己'大'和'小'的时刻",en:"Talk about when the child feels 'big' and 'small'"},
        {cn:"鼓励独立做力所能及的事",en:"Encourage independence in manageable tasks"}
      ]
    },
    {id:11,title:"项链",titleEn:"Necklace",
      difficulty: 2,
      text:["大海，蓝蓝的，又宽又远。沙滩，黄黄的，又长又软。","雪白雪白的浪花，哗哗地笑着，涌上沙滩，悄悄撒下小小的海螺和贝壳。","小娃娃嘻嘻地笑着，迎上去，捡起小小的海螺和贝壳，穿成彩色的项链，挂在胸前。","快活的脚印落在沙滩上，穿成金色的项链，挂在大海的胸前。"],
      textEn:["The sea — blue, blue — so wide and far. The beach — golden, golden — so long and soft.","Snow-white waves, laughing with a splash, rush up the beach, quietly scattering tiny conch shells and seashells.","The little child laughs happily, runs to meet them, picks up the tiny shells, strings them into a colorful necklace worn on the chest.","Happy footprints fall on the beach, strung into a golden necklace worn on the sea's chest."],
      textPinyin:["dà hǎi, lán lán de, yòu kuān yòu yuǎn. shā tān, huáng huáng de, yòu cháng yòu ruǎn.","xuě bái xuě bái de làng huā, huā huā de xiào zhe, yǒng shàng shā tān, qiāo qiāo sā xià xiǎo xiǎo de hǎi luó hé bèi ké.","xiǎo wá wa xī xī de xiào zhe, yíng shàng qù, jiǎn qǐ xiǎo xiǎo de hǎi luó hé bèi ké, chuān chéng cǎi sè de xiàng liàn, guà zài xiōng qián.","kuài huo de jiǎo yìn luò zài shā tān shàng, chuān chéng jīn sè de xiàng liàn, guà zài dà hǎi de xiōng qián."],
      recognizeChars:["蓝","又","笑","着","向","和","贝","娃","挂","活","金"],
      writeChars:["白","的","又","和"],
      vocabWords: [
        {word:'项链',pinyin:'xiàng liàn',en:'necklace',sentence:'大海给沙滩送来了项链。',sentenceEn:'The sea brings the beach a necklace.'},
        {word:'沙滩',pinyin:'shā tān',en:'beach',sentence:'金色的沙滩。',sentenceEn:'The golden beach.'},
        {word:'浪花',pinyin:'làng huā',en:'wave',sentence:'浪花哗哗地笑着。',sentenceEn:'Waves laugh with a splash.'},
        {word:'贝壳',pinyin:'bèi ké',en:'seashell',sentence:'小娃娃捡贝壳。',sentenceEn:'The child picks up seashells.'},
        {word:'脚印',pinyin:'jiǎo yìn',en:'footprint',sentence:'沙滩上的小小的脚印。',sentenceEn:'Little footprints on the beach.'}
      ],
      exercises:[
        {type:"read",cn:"朗读课文，说说：大海的项链是什么？",en:"Read aloud; what is the sea's necklace?"},
        {type:"extend",cn:"读一读，说一说：快活的__、金色的__、雪白的__",en:"Read and extend: happy __, golden __, snow-white __"}
      ],
      teachingPoints:[
        {cn:"理解课文最后一句的含义：脚印是大海的项链",en:"Understand the last sentence: footprints are the sea's necklace"},
        {cn:"学习AABB式叠词：蓝蓝的、黄黄的",en:"Learn AABB reduplication: blue-blue, yellow-yellow"}
      ],
      parentTips:[
        {cn:"如果去过海边，回忆海边的景色",en:"If you've been to the beach, recall the scenery"},
        {cn:"练习AABB叠词：红红的、大大的",en:"Practice AABB words: red-red, big-big"}
      ]
    }
  ],
  garden: {
    shiziStation: {
      title:"识字加油站", titleEn:"Character Booster",
      items: [
        {chars:["哥哥","姐姐","弟弟","妹妹","爸爸","妈妈","伯伯","叔叔","爷爷","奶奶"],category:"家人称呼 Family Members"}
      ]
    },
    wordSentence: {
      title:"字词句运用", titleEn:"Words & Sentences",
      items: [
        {text:"日字旁的字和时间有关：明 晚 昨 时",textEn:"Characters with 日 radical relate to time: bright, evening, yesterday, hour",type:"discover"},
        {text:"女字旁的字：妈 奶 姐 妹",textEn:"Characters with 女 radical: mother, grandma, sister",type:"discover"}
      ]
    },
    writingHints: {
      title:"书写提示", titleEn:"Writing Tips",
      rules: [
        {cn:"先外后内",en:"Outside before inside",examples:"问、月"},
        {cn:"先中间后两边",en:"Middle before sides",examples:"小、水"}
      ]
    },
    accumulation: {
      title:"日积月累", titleEn:"Daily Accumulation",
      content: {
        text:"前人栽树，后人乘凉。\n种瓜得瓜，种豆得豆。\n千里之行，始于足下。\n百尺竿头，更进一步。",
        textEn:"Predecessors plant trees; descendants enjoy the shade.\nPlant melons, get melons; plant beans, get beans.\nA journey of a thousand miles begins with a single step.\nAt the top of a hundred-foot pole, take one more step forward.",
        pinyin:"qián rén zāi shù, hòu rén chéng liáng.\nzhǒng guā dé guā, zhǒng dòu dé dòu.\nqiān lǐ zhī xíng, shǐ yú zú xià.\nbǎi chǐ gān tóu, gèng jìn yī bù."
      }
    },
    readWithAdults: {
      title:"和大人一起读", titleEn:"Read with Adults",
      content: {
        title:"猴子捞月亮", titleEn:"Monkeys Fishing for the Moon",
        text:"有只小猴子在井边玩。他往井里一看，里面有个月亮。小猴子叫起来：“糟啦，糟啦！月亮掉在井里啦！”大猴子听见了，跑过来一看，跟着叫起来。老猴子听见了，也跟着叫起来。大家决定把月亮捞上来……老猴子抬头一看，月亮好好地挂在天上呢！",
        textEn:"A little monkey was playing by the well. He looked in and saw a moon. 'Oh no! The moon has fallen in the well!' The big monkey came, looked, and started shouting too. The old monkey heard and joined in. They decided to fish the moon out... Then the old monkey looked up — the moon was hanging perfectly fine in the sky!"
      }
    }
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 8 — 课文（四）Texts 4                */
/* ═══════════════════════════════════════════ */
{
  id: 8, title: "课文（四）", titleEn: "Texts (IV)",
  difficulty: 2,
  type: "kewen",
  lessons: [
    {id:12,title:"雪地里的小画家",titleEn:"Little Artists in the Snow",
      difficulty: 1,
      text:["下雪啦，下雪啦！","雪地里来了一群小画家。","小鸡画竹叶，小狗画梅花，小鸭画枫叶，小马画月牙。","不用颜料不用笔，几步就成一幅画。","青蛙为什么没参加？他在洞里睡着啦。"],
      textEn:["It's snowing, it's snowing!","A group of little artists has come to the snow.","The chick draws bamboo leaves, the puppy draws plum blossoms, the duckling draws maple leaves, the pony draws crescent moons.","No paint, no brushes needed — just a few steps and a picture is done.","Why didn't the frog join in? He's sleeping in his burrow!"],
      textPinyin:["xià xuě la, xià xuě la!","xuě dì lǐ lái le yī qún xiǎo huà jiā.","xiǎo jī huà zhú yè, xiǎo gǒu huà méi huā, xiǎo yā huà fēng yè, xiǎo mǎ huà yuè yá.","bù yòng yán liào bù yòng bǐ, jǐ bù jiù chéng yī fú huà.","qīng wā wèi shén me méi cān jiā? tā zài dòng lǐ shuì zháo la."],
      recognizeChars:["群","竹","牙","用","几","步","为","参","加","洞","着"],
      writeChars:["竹","牙","马","用","几"],
      vocabWords: [
        {word:'下雪',pinyin:'xià xuě',en:'to snow',sentence:'下雪啦！',sentenceEn:'It is snowing!'},
        {word:'画家',pinyin:'huà jiā',en:'artist',sentence:'一群小画家。',sentenceEn:'A group of little artists.'},
        {word:'竹叶',pinyin:'zhú yè',en:'bamboo leaf',sentence:'小鸡画竹叶。',sentenceEn:'Chick draws bamboo leaves.'},
        {word:'梅花',pinyin:'méi huā',en:'plum blossom',sentence:'小狗画梅花。',sentenceEn:'Puppy draws plum blossoms.'},
        {word:'枫叶',pinyin:'fēng yè',en:'maple leaf',sentence:'小鸭画枫叶。',sentenceEn:'Duckling draws maple leaves.'},
        {word:'月牙',pinyin:'yuè yá',en:'crescent',sentence:'小马画月牙。',sentenceEn:'Pony draws crescents.'}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"为什么小动物的脚印像这些图案？",en:"Why do the animals' footprints look like these patterns?"},
        {type:"discuss",cn:"青蛙为什么不来？（冬眠）",en:"Why doesn't the frog come? (Hibernation)"}
      ],
      teachingPoints:[
        {cn:"了解动物脚印的形状特点",en:"Learn about the shapes of animal footprints"},
        {cn:"初步了解冬眠的概念",en:"Introduction to the concept of hibernation"},
        {cn:"感受冬天下雪的乐趣",en:"Appreciate the fun of snow"}
      ],
      parentTips:[
        {cn:"如果下雪了，带孩子去看看动物或人的脚印",en:"If it snows, look at animal or human footprints"},
        {cn:"讨论哪些动物会冬眠",en:"Discuss which animals hibernate"}
      ]
    },
    {id:13,title:"乌鸦喝水",titleEn:"The Crow Drinks Water",
      difficulty: 2,
      text:["一只乌鸦口渴了，到处找水喝。","乌鸦看见一个瓶子，瓶子里有水。可是，瓶子里水不多，瓶口又小，乌鸦喝不着水。怎么办呢？","乌鸦看见旁边有许多小石子，想出办法来了。","乌鸦把小石子一颗一颗地放进瓶子里。瓶子里的水渐渐升高，乌鸦就喝着水了。"],
      textEn:["A crow was thirsty and searched everywhere for water.","The crow saw a bottle with water in it. But there wasn't much water, and the bottle's mouth was small — the crow couldn't reach the water. What to do?","The crow noticed many small pebbles nearby and thought of a plan.","The crow dropped the pebbles into the bottle one by one. The water level gradually rose, and the crow could finally drink!"],
      textPinyin:["yī zhī wū yā kǒu kě le, dào chù zhǎo shuǐ hē.","wū yā kàn jiàn yī gè píng zi, píng zi lǐ yǒu shuǐ. kě shì, píng zi lǐ shuǐ bù duō, píng kǒu yòu xiǎo, wū yā hē bù zháo shuǐ. zěn me bàn ne?","wū yā kàn jiàn páng biān yǒu xǔ duō xiǎo shí zi, xiǎng chū bàn fǎ lái le.","wū yā bǎ xiǎo shí zi yī kē yī kē de fàng jìn píng zi lǐ. píng zi lǐ de shuǐ jiàn jiàn shēng gāo, wū yā jiù hē zháo shuǐ le."],
      recognizeChars:["乌","鸦","处","找","办","旁","许","法","放","进","高"],
      writeChars:["只","石","出","见"],
      vocabWords: [
        {word:'乌鸦',pinyin:'wū yā',en:'crow',sentence:'一只乌鸦口渴了。',sentenceEn:'A crow was thirsty.'},
        {word:'口渴',pinyin:'kǒu kě',en:'thirsty',sentence:'乌鸦口渴了。',sentenceEn:'The crow was thirsty.'},
        {word:'瓶子',pinyin:'píng zi',en:'bottle',sentence:'瓶子里有水。',sentenceEn:'There is water in the bottle.'},
        {word:'办法',pinyin:'bàn fǎ',en:'method',sentence:'乌鸦想出了办法。',sentenceEn:'The crow thought of a way.'},
        {word:'石子',pinyin:'shí zi',en:'pebble',sentence:'把小石子放进瓶子里。',sentenceEn:'Put pebbles into the bottle.'},
        {word:'渐渐',pinyin:'jiàn jiàn',en:'gradually',sentence:'水渐渐升高了。',sentenceEn:'Water gradually rose.'}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"乌鸦是怎么喝到水的？",en:"How did the crow manage to drink the water?"},
        {type:"experiment",cn:"做实验验证：往瓶子里放石子，水会升高吗？",en:"Experiment: does adding pebbles to a bottle raise the water level?"}
      ],
      teachingPoints:[
        {cn:"按事情发展顺序理解故事",en:"Understand the story in chronological order"},
        {cn:"学习乌鸦善于观察和动脑的精神",en:"Learn from the crow's observation and problem-solving skills"}
      ],
      parentTips:[
        {cn:"和孩子一起做放石子升高水位的实验",en:"Do the pebble-water experiment together"},
        {cn:"鼓励孩子遇到困难时动脑筋想办法",en:"Encourage thinking creatively when facing problems"}
      ]
    },
    {id:14,title:"小蜗牛",titleEn:"The Little Snail",
      difficulty: 2,
      text:["小蜗牛的妈妈说：“孩子，到小树林里去玩吧，小树发芽了。”","小蜗牛爬呀，爬呀，好久才爬回来。它说：“妈妈，小树林里的小树长满了叶子，碧绿碧绿的，地上还长着许多草莓呢。”","蜗牛妈妈说：“哦，已经是夏天了！快去采几颗草莓回来。”","小蜗牛爬呀，爬呀，好久才爬回来。它说：“妈妈，草莓没有了，地上长着蘑菇，树叶全变黄了。”","蜗牛妈妈说：“哦，已经是秋天了！快去采几个蘑菇回来。”","小蜗牛爬呀，爬呀，好久才爬回来。它说：“妈妈，蘑菇没有了，地上盖着雪，树叶全掉了。”","蜗牛妈妈说：“哦，已经是冬天了！你就待在家里过冬吧。”"],
      textEn:["Mama Snail said: 'Dear child, go play in the grove — the little trees are sprouting.'","The little snail crawled and crawled, and after a long time finally came back. It said: 'Mama, the trees in the grove are full of leaves, lush green, and there are strawberries on the ground!'","Mama Snail said: 'Oh, it's already summer! Quick, go pick some strawberries and bring them back.'","The little snail crawled and crawled, and after a long time finally came back. It said: 'Mama, the strawberries are gone. There are mushrooms growing on the ground, and the leaves have all turned yellow.'","Mama Snail said: 'Oh, it's already autumn! Quick, go pick some mushrooms and bring them back.'","The little snail crawled and crawled, and after a long time finally came back. It said: 'Mama, the mushrooms are gone. The ground is covered in snow and all the leaves have fallen.'","Mama Snail said: 'Oh, it's already winter! Just stay home for the winter then.'"],
      textPinyin:["xiǎo wō niú de mā ma shuō: 'hái zi, dào xiǎo shù lín lǐ qù wán ba, xiǎo shù fā yá le.'","xiǎo wō niú pá ya, pá ya, hǎo jiǔ cái pá huí lái...","wō niú mā ma shuō: 'ó, yǐ jīng shì xià tiān le! kuài qù cǎi jǐ kē cǎo méi huí lái.'","xiǎo wō niú pá ya, pá ya...","wō niú mā ma shuō: 'ó, yǐ jīng shì qiū tiān le!'","xiǎo wō niú pá ya, pá ya...","wō niú mā ma shuō: 'ó, yǐ jīng shì dōng tiān le! nǐ jiù dāi zài jiā lǐ guò dōng ba.'"],
      recognizeChars:["对","妈","全","回"],
      writeChars:["对","妈","全","回"],
      vocabWords: [
        {word:'蜗牛',pinyin:'wō niú',en:'snail',sentence:'小蜗牛爬呀爬。',sentenceEn:'The snail crawled and crawled.'},
        {word:'妈妈',pinyin:'mā ma',en:'mom',sentence:'蜗牛妈妈说。',sentenceEn:'Mother snail said.'},
        {word:'草莓',pinyin:'cǎo méi',en:'strawberry',sentence:'去摘草莓。',sentenceEn:'Go pick strawberries.'},
        {word:'已经',pinyin:'yǐ jīng',en:'already',sentence:'已经是秋天了。',sentenceEn:'It is already autumn.'}
      ],
      exercises:[
        {type:"read",cn:"对照图画，读一读课文",en:"Read the text while looking at the pictures"},
        {type:"discuss",cn:"小蜗牛为什么总是赶不上季节？",en:"Why does the snail always miss the season?"},
        {type:"guess",cn:"在图画的帮助下，猜猜加点的字",en:"With picture help, guess the highlighted characters"}
      ],
      teachingPoints:[
        {cn:"通过蜗牛的慢速体会四季更替",en:"Experience the change of seasons through the snail's slowness"},
        {cn:"这是第一篇不全注拼音的课文，借助图画猜字",en:"This is the first text without full pinyin — use pictures to guess characters"},
        {cn:"感受故事的幽默和趣味",en:"Appreciate the humor in the story"}
      ],
      parentTips:[
        {cn:"让孩子复述故事：蜗牛去了几次？每次看到什么？",en:"Have the child retell: how many trips? What did snail see each time?"},
        {cn:"讨论四季的变化特征",en:"Discuss the characteristics of each season's changes"}
      ]
    }
  ],
  garden: {
    shiziStation: {
      title:"识字加油站", titleEn:"Character Booster",
      items: [
        {chars:["工厂","工人","医院","医生","军队","军人"],category:"职业 Occupations"},
        {chars:["学校","老师"],category:"学校 School"}
      ]
    },
    wordSentence: {
      title:"字词句运用", titleEn:"Words & Sentences",
      items: [
        {text:"读一读：果皮-树皮 加法-办法 旁边-两边 许多-不许 到处-四处 学生-生气",textEn:"Read pairs: fruit peel-tree bark, addition-method, beside-both sides, many-not allowed, everywhere-all over, student-angry",type:"pairs"},
        {text:"给家人或朋友写一句祝福的话",textEn:"Write a blessing for family or friends",type:"write"}
      ]
    },
    writingHints: {
      title:"书写提示", titleEn:"Writing Tips",
      rules: [
        {cn:"先外后内",en:"Outside before inside",examples:"问、月"},
        {cn:"先中间后两边",en:"Middle before sides",examples:"小、水"}
      ]
    },
    accumulation: {
      title:"日积月累", titleEn:"Daily Accumulation",
      content: {
        title:"风", titleEn:"Wind",
        author:"[唐] 李峤",authorEn:"[Tang] Li Qiao",
        text:"解落三秋叶，能开二月花。\n过江千尺浪，入竹万竿斜。",
        textEn:"It can blow down three months of autumn leaves,\nIt can open February's flowers.\nCrossing rivers, raising thousand-foot waves,\nEntering bamboo, bending ten thousand poles.",
        pinyin:"jiě luò sān qiū yè, néng kāi èr yuè huā.\nguò jiāng qiān chǐ làng, rù zhú wàn gān xié."
      }
    },
    readWithAdults: {
      title:"和大人一起读", titleEn:"Read with Adults",
      content: {
        title:"春节童谣", titleEn:"Spring Festival Children's Song",
        text:"小孩小孩你别馋，过了腊八就是年。\n腊八粥，喝几天，哩哩啦啦二十三。\n二十三，糖瓜粘。二十四，扫房子。\n二十五，磨豆腐。二十六，去买肉。\n二十七，宰公鸡。二十八，把面发。\n二十九，蒸馒头。三十晚上熬一宿，\n初一初二满街走。",
        textEn:"Little child, don't be greedy — after the Laba Festival it's New Year!\nDrink Laba porridge for a few days until the 23rd.\n23rd: sticky candy. 24th: sweep the house.\n25th: grind tofu. 26th: buy meat.\n27th: slaughter a chicken. 28th: make dough.\n29th: steam buns. Stay up all night on the 30th,\nWalk the streets on the 1st and 2nd!"
      }
    }
  },
  oralComm: {
    title:"小兔运南瓜", titleEn:"Little Rabbit Carries a Pumpkin",
    objectives: [
      {cn:"大胆说出自己的想法",en:"Boldly express your ideas"},
      {cn:"想出不同的方法解决问题",en:"Think of different ways to solve problems"}
    ],
    activities: [
      {cn:"小兔可以用哪些方法把南瓜运回家？",en:"What methods can the rabbit use to carry the pumpkin home?"},
      {cn:"你喜欢哪种方法？为什么？",en:"Which method do you prefer? Why?"},
      {cn:"还有没有其他更好的办法？",en:"Are there other, even better ideas?"}
    ]
  }
}
]
};
