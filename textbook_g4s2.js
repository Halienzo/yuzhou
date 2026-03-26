/**
 * 字道 ZiDao — 部编版四年级语文下册 教材数据
 * Grade 4 Semester 2 Textbook Data (PEP Edition)
 * Based on: 义务教育教科书 语文 四年级下册 (2019)
 */
var TB_G4S2 = {
grade: 4, semester: 2,
totalRecogChars: 250,
totalWriteChars: 250,
units: [
/* ═══════════════════════════════════════════ */
/*  UNIT 1 — 田园生活 Rural Life (Lessons 1-4)  */
/* ═══════════════════════════════════════════ */
{
  id: 1, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 1, title: "古诗词三首", titleEn: "Three Ancient Poems and Ci",
      difficulty: 2,
      text: [
        "四时田园杂兴（其二十五）\n[宋] 范成大\n梅子金黄杏子肥，\n麦花雪白菜花稀。\n日长篱落无人过，\n惟有蜻蜓蛱蝶飞。",
        "宿新市徐公店\n[宋] 杨万里\n篱落疏疏一径深，\n树头新绿未成阴。\n儿童急走追黄蝶，\n飞入菜花无处寻。",
        "清平乐·村居\n[宋] 辛弃疾\n茅檐低小，溪上青青草。醉里吴音相媚好，白发谁家翁媪？\n大儿锄豆溪东，中儿正织鸡笼。最喜小儿亡赖，溪头卧剥莲蓬。"
      ],
      textEn: [
        "Farmland Scenes in Four Seasons (No. 25)\n[Song] Fan Chengda\nPlums turn golden, apricots grow plump,\nWheat blossoms white, rapeseed flowers thin.\nLong summer days — no one passes the sparse fence,\nOnly dragonflies and butterflies flit about.",
        "Lodging at Xu's Inn in Xinshi\n[Song] Yang Wanli\nA sparse fence lines the deep, narrow path,\nNew green on treetops, not yet shady.\nChildren chase yellow butterflies in haste,\nWhich vanish among the rapeseed flowers.",
        "Qingpingle — Village Life\n[Song] Xin Qiji\nLow thatched eaves, green grass by the stream. Amid tipsy chat in the Wu dialect, who is that white-haired old couple?\nThe eldest son hoes beans east of the stream; the middle son weaves a chicken coop. The youngest — most lovable rascal — lies peeling lotus pods by the stream."
      ],
      textPinyin: [
        "s\u00ec sh\u00ed ti\u00e1n yu\u00e1n z\u00e1 x\u012bng\uff08q\u00ed \u00e8r sh\u00ed w\u01d4\uff09\n [ s\u00f2ng ]   f\u00e0n ch\u00e9ng d\u00e0\n m\u00e9i z\u01d0 j\u012bn hu\u00e1ng x\u00ecng z\u01d0 f\u00e9i\uff0c\n m\u00e0i hu\u0101 xu\u011b b\u00e1i c\u00e0i hu\u0101 x\u012b\u3002\n r\u00ec ch\u00e1ng l\u00ed lu\u00f2 w\u00fa r\u00e9n gu\u00f2\uff0c\n w\u00e9i y\u01d2u q\u012bng t\u00edng ji\u00e1 di\u00e9 f\u0113i\u3002",
        "s\u00f9 x\u012bn sh\u00ec x\u00fa g\u014dng di\u00e0n\n [ s\u00f2ng ]   y\u00e1ng w\u00e0n l\u01d0\n l\u00ed lu\u00f2 sh\u016b sh\u016b y\u00ed j\u00ecng sh\u0113n\uff0c\n sh\u00f9 t\u00f3u x\u012bn l\u01dc w\u00e8i ch\u00e9ng y\u012bn\u3002\n \u00e9r t\u00f3ng j\u00ed z\u01d2u zhu\u012b hu\u00e1ng di\u00e9\uff0c\n f\u0113i r\u00f9 c\u00e0i hu\u0101 w\u00fa ch\u00f9 x\u00fan\u3002",
        "q\u012bng p\u00edng l\u00e8\u00b7 c\u016bn j\u016b\n [ s\u00f2ng ]   x\u012bn q\u00ec j\u00ed\n m\u00e1o y\u00e1n d\u012b xi\u01ceo\uff0c x\u012b sh\u00e0ng q\u012bng q\u012bng c\u01ceo\u3002 zu\u00ec l\u01d0 w\u00fa y\u012bn xi\u0101ng m\u00e8i h\u01ceo\uff0c b\u00e1i f\u00e0 shu\u00ed ji\u0101 w\u0113ng \u01ceo\uff1f\n d\u00e0 \u00e9r ch\u00fa d\u00f2u x\u012b d\u014dng\uff0c zh\u014dng \u00e9r zh\u00e8ng zh\u012b j\u012b l\u00f3ng\u3002 zu\u00ec x\u01d0 xi\u01ceo \u00e9r w\u00e1ng l\u00e0i\uff0c x\u012b t\u00f3u w\u00f2 b\u0101o li\u00e1n p\u00e9ng\u3002"
      ],
      recognizeChars: ["杂","篱","徐","疏","锄","剥"],
      writeChars: ["杂","稀","篱","蜻","蜓","蝶","宿","徐","疏","茅","檐","翁","笼","赖","剥"],
      vocabWords: [
        {word:'四时田园杂兴',pinyin:'sì shí tián yuán zá xìng',en:'Rural Pleasures in Four Seasons',sentence:'昼出耘田夜绩麻。',sentenceEn:'Plow by day, spin hemp at night.'},
        {word:'蜻蜓',pinyin:'qīng tíng',en:'dragonfly',sentence:'日长篱落无人过，唯有蜻蜓蛱蝶飞。',sentenceEn:'Long days, no one passes; only dragonflies and butterflies fly.'},
        {word:'乡村',pinyin:'xiāng cūn',en:'countryside',sentence:'乡村四月闲人少。',sentenceEn:'In the countryside in April, few are idle.'},
        {word:'翁媪',pinyin:'wēng ǎo',en:'old couple',sentence:'白发谁家翁媪。',sentenceEn:'Whose white-haired old couple is this?'},
        {word:'清平乐',pinyin:'qīng píng yuè',en:'a ci tune name',sentence:'清平乐·村居。',sentenceEn:'Qingpingle: Country Living.'}
      ],
      footnotes: [
        {term:"\u56db\u65f6\u7530\u56ed\u6742\u5174", termEn:"Rural Pleasures in Four Seasons", definition:"\u3010s\u00ec sh\u00ed ti\u00e1n yu\u00e1n z\u00e1 x\u00ecng\u3011Rural Pleasures in Four Seasons\u3002", definitionEn:"Rural Pleasures in Four Seasons"},
        {term:"\u873b\u8713", termEn:"dragonfly", definition:"\u3010q\u012bng t\u00edng\u3011dragonfly\u3002", definitionEn:"dragonfly"},
        {term:"\u4e61\u6751", termEn:"countryside", definition:"\u3010xi\u0101ng c\u016bn\u3011countryside\u3002", definitionEn:"countryside"},
        {term:"\u7fc1\u5aaa", termEn:"old couple", definition:"\u3010w\u0113ng \u01ceo\u3011old couple\u3002", definitionEn:"old couple"},
        {term:"\u6e05\u5e73\u4e50", termEn:"a ci tune name", definition:"\u3010q\u012bng p\u00edng yu\u00e8\u3011a ci tune name\u3002", definitionEn:"a ci tune name"}
      ],
      readingTips: [
        {cn:"\u6709\u611f\u60c5\u5730\u6717\u8bfb\u53e4\u8bd7\uff0c\u6ce8\u610f\u505c\u987f\u548c\u91cd\u97f3\u3002\u60f3\u8c61\u8bd7\u53e5\u63cf\u7ed8\u7684\u753b\u9762\uff0c\u4f53\u4f1a\u8bd7\u4eba\u7684\u60c5\u611f\u3002", en:"Read the poem aloud with feeling, noting pauses and emphasis. Visualize the scenes described and feel the poet's emotions."},
        {cn:"\u627e\u51fa\u8bd7\u4e2d\u7684\u5173\u952e\u610f\u8c61\uff08\u5982\u5c71\u3001\u6c34\u3001\u6708\u3001\u82b1\u7b49\uff09\uff0c\u60f3\u60f3\u5b83\u4eec\u8868\u8fbe\u4e86\u4ec0\u4e48\u611f\u60c5\u3002", en:"Identify key imagery (like mountains, water, moon, flowers) and think about what emotions they convey."}
      ],
      grammarPoints: [
        {point:'词',pointEn:'cí',example:'ci (lyric poetry)',exampleEn:'清平乐是词牌名。',explanation:'Qingpingle is a ci tune name.',explanationEn:'词是古代的一种诗歌体裁，有固定的格律'}
      ],
      exercises: [
        {type:"read",cn:"有感情地朗读课文，背诵课文。默写《宿新市徐公店》",en:"Read the poems with feeling, recite them, and write 'Lodging at Xu\u2019s Inn' from memory"},
        {type:"discuss",cn:"读下面的诗句，说说你眼前浮现出了怎样的情景",en:"Read the following lines and describe the scenes you imagine"},
        {type:"think",cn:"体会三首诗词描绘的田园生活画面，感受诗人对乡村的热爱",en:"Appreciate the rural scenes in the three poems and feel the poets\u2019 love for the countryside"}
      ],
      teachingPoints: [
        {cn:"了解词（清平乐）这种文学形式，体会上阕写景、下阕叙事的结构",en:"Learn about the ci (lyric) form; appreciate the structure of scenery in the first stanza and narrative in the second"},
        {cn:"抓住关键语句体会诗词表达的思想感情，如\u201C最喜小儿亡赖\u201D的喜爱之情",en:"Grasp key lines to feel the emotions expressed, such as the affection in 'most lovable rascal'"}
      ],
      parentTips: [
        {cn:"引导孩子想象诗词中的画面，感受田园生活的宁静与美好",en:"Help your child visualize the scenes in the poems and feel the tranquility of rural life"},
        {cn:"鼓励孩子背诵并尝试用自己的话描述诗中的场景",en:"Encourage recitation and retelling of the scenes in their own words"}
      ]
    },
    {
      id: 2, title: "乡下人家", titleEn: "Country Homes",
      difficulty: 2,
      text: [
        "乡下人家总爱在屋前搭一瓜架，或种南瓜，或种丝瓜，让那些瓜藤攀上棚架，爬上屋檐。当花儿落了的时候，藤上便结出了青的、红的瓜，它们一个个挂在房前，衬着那长长的藤，绿绿的叶。青、红的瓜，碧绿的藤和叶，构成了一道别有风趣的装饰，比那高楼门前蹲着一对石狮子或是竖着两根大旗杆，可爱多了。",
        "有些人家，还在门前的场地上种几株花，芍药，凤仙，鸡冠花，大丽菊，它们依着时令，顺序开放，朴素中带着几分华丽，显出一派独特的农家风光。还有些人家，在屋后种几十枝竹，绿的叶，青的竿，投下一片浓浓的绿荫。几场春雨过后，到那里走走，你常常会看见许多鲜嫩的笋，成群地从土里探出头来。",
        "鸡，乡下人家照例总要养几只的。从他们的房前屋后走过，你肯定会瞧见一只母鸡，率领一群小鸡，在竹林中觅食；或是瞧见耸着尾巴的雄鸡，在场地上大踏步地走来走去。",
        "他们的屋后倘若有一条小河，那么在石桥旁边，在绿树荫下，你会见到一群鸭子游戏水中，不时地把头扎到水下去觅食。即使附近的石头上有妇女在捣衣，它们也从不吃惊。",
        "若是在夏天的傍晚出去散步，你常常会瞧见乡下人家吃晚饭的情景。他们把桌椅饭菜搬到门前，天高地阔地吃起来。天边的红霞，向晚的微风，头上飞过的归巢的鸟儿，都是他们的好友。它们和乡下人家一起，绘成了一幅自然、和谐的田园风景画。",
        "秋天到了，纺织娘寄住在他们屋前的瓜架上。月明人静的夜里，它们便唱起歌来：\u201C织，织，织，织啊！织，织，织，织啊！\u201D那歌声真好听，赛过催眠曲，让那些辛苦一天的人们，甜甜蜜蜜地进入梦乡。",
        "乡下人家，不论什么时候，不论什么季节，都有一道独特、迷人的风景。"
      ],
      textEn: [
        "Country families always like to build a gourd trellis in front of their houses, planting pumpkins or loofah. The vines climb up the trellis and over the eaves. When the flowers have fallen, green and red gourds hang in front of the house against the long vines and green leaves. The green and red gourds with emerald vines and leaves make a charming decoration, far lovelier than a pair of stone lions or two tall flagpoles at a city building entrance.",
        "Some families plant flowers in the yard: peonies, balsam, cockscombs, and dahlias. They bloom in season, one after another, showing rustic charm with a touch of splendor. Others plant dozens of bamboo behind the house \u2014 green leaves, blue-green stalks, casting deep shade. After a few spring rains, you often see tender bamboo shoots poking their heads out of the soil in groups.",
        "Country families always keep a few chickens. Walking past their homes, you will surely see a mother hen leading her chicks to forage in the bamboo grove, or a rooster with tail held high strutting across the yard.",
        "If there is a stream behind the house, you\u2019ll see ducks playing in the water by the stone bridge under the green shade, dipping their heads to feed. Even when women are washing clothes on nearby stones, the ducks are never startled.",
        "On summer evenings, you often see country families eating dinner outdoors, tables and chairs set in front of the house, dining under the open sky. The red glow of sunset, the evening breeze, the homeward-bound birds overhead \u2014 all are their good friends, together painting a natural, harmonious landscape of rural life.",
        "In autumn, katydids take up residence on the gourd trellises. On moonlit, quiet nights, they sing: \u2018Weave, weave, weave! Weave, weave, weave!\u2019 Their song, lovelier than any lullaby, sends the hardworking people sweetly off to dreamland.",
        "Country homes, no matter the time of day, no matter the season, always offer a unique, enchanting scenery."
      ],
      textPinyin: [
        "xi\u0101ng xi\u00e0 r\u00e9n ji\u0101 z\u01d2ng \u00e0i z\u00e0i w\u016b qi\u00e1n d\u0101 y\u00ec gu\u0101 ji\u00e0\uff0c hu\u00f2 zh\u01d2ng n\u00e1n gu\u0101\uff0c hu\u00f2 zh\u01d2ng s\u012b gu\u0101\uff0c r\u00e0ng n\u00e0 xi\u0113 gu\u0101 t\u00e9ng p\u0101n sh\u00e0ng p\u00e9ng ji\u00e0\uff0c p\u00e1 sh\u00e0ng w\u016b y\u00e1n\u3002 d\u0101ng hu\u0101 \u00e9r lu\u00f2 le de sh\u00ed h\u00f2u\uff0c t\u00e9ng sh\u00e0ng bi\u00e0n ji\u00e9 ch\u016b le q\u012bng de\u3001 h\u00f3ng de gu\u0101\uff0c t\u0101 men y\u00ed g\u00e8 g\u00e8 gu\u00e0 z\u00e0i f\u00e1ng qi\u00e1n\uff0c ch\u00e8n zhe n\u00e0 ch\u00e1ng ch\u00e1ng de t\u00e9ng\uff0c l\u01dc l\u01dc de y\u00e8\u3002 q\u012bng\u3001 h\u00f3ng de gu\u0101\uff0c b\u00ec l\u01dc de t\u00e9ng h\u00e9 y\u00e8\uff0c g\u00f2u ch\u00e9ng le y\u00ed d\u00e0o bi\u00e9 y\u01d2u f\u0113ng q\u00f9 de zhu\u0101ng sh\u00ec\uff0c b\u01d0 n\u00e0 g\u0101o l\u00f3u m\u00e9n qi\u00e1n d\u016bn zhe y\u00ed du\u00ec sh\u00ed sh\u012b zi hu\u00f2 sh\u00ec sh\u00f9 zhe li\u01ceng g\u0113n d\u00e0 q\u00ed g\u0101n\uff0c k\u011b \u00e0i du\u014d le\u3002",
        "y\u01d2u xi\u0113 r\u00e9n ji\u0101\uff0c h\u00e1i z\u00e0i m\u00e9n qi\u00e1n de ch\u01ceng d\u00ec sh\u00e0ng zh\u01d2ng j\u01d0 zh\u016b hu\u0101\uff0c sh\u00e1o y\u00e0o\uff0c f\u00e8ng xi\u0101n\uff0c j\u012b gu\u0101n hu\u0101\uff0c d\u00e0 l\u00ec j\u00fa\uff0c t\u0101 men y\u012b zhe sh\u00ed l\u00ecng\uff0c sh\u00f9n x\u00f9 k\u0101i f\u00e0ng\uff0c p\u01d4 s\u00f9 zh\u014dng d\u00e0i zhe j\u01d0 f\u0113n hu\u00e1 l\u00ec\uff0c xi\u01cen ch\u016b y\u00ed p\u00e0i d\u00fa t\u00e8 de n\u00f3ng ji\u0101 f\u0113ng gu\u0101ng\u3002 h\u00e1i y\u01d2u xi\u0113 r\u00e9n ji\u0101\uff0c z\u00e0i w\u016b h\u00f2u zh\u01d2ng j\u01d0 sh\u00ed zh\u012b zh\u00fa\uff0c l\u01dc de y\u00e8\uff0c q\u012bng de g\u0101n\uff0c t\u00f3u xi\u00e0 y\u00ed pi\u00e0n n\u00f3ng n\u00f3ng de l\u01dc y\u012bn\u3002 j\u01d0 ch\u01ceng ch\u016bn y\u01d4 gu\u00f2 h\u00f2u\uff0c d\u00e0o n\u00e0 l\u01d0 z\u01d2u z\u01d2u\uff0c n\u01d0 ch\u00e1ng ch\u00e1ng hu\u00ec k\u00e0n ji\u00e0n x\u01d4 du\u014d xi\u0101n n\u00e8n de s\u01d4n\uff0c ch\u00e9ng q\u00fan d\u00ec c\u00f3ng t\u01d4 l\u01d0 t\u00e0n ch\u016b t\u00f3u l\u00e1i\u3002",
        "j\u012b\uff0c xi\u0101ng xi\u00e0 r\u00e9n ji\u0101 zh\u00e0o l\u00ec z\u01d2ng y\u00e0o y\u01ceng j\u01d0 zh\u012b de\u3002 c\u00f3ng t\u0101 men de f\u00e1ng qi\u00e1n w\u016b h\u00f2u z\u01d2u gu\u00f2\uff0c n\u01d0 k\u011bn d\u00ecng hu\u00ec qi\u00e1o ji\u00e0n y\u00ec zh\u012b m\u01d4 j\u012b\uff0c shu\u00e0i l\u01d0ng y\u00ec q\u00fan xi\u01ceo j\u012b\uff0c z\u00e0i zh\u00fa l\u00edn zh\u014dng m\u00ec sh\u00ed\uff1b hu\u00f2 sh\u00ec qi\u00e1o ji\u00e0n s\u01d2ng zhe w\u011bi ba de xi\u00f3ng j\u012b\uff0c z\u00e0i ch\u01ceng d\u00ec sh\u00e0ng d\u00e0 t\u00e0 b\u00f9 d\u00ec z\u01d2u l\u00e1i z\u01d2u q\u00f9\u3002",
        "t\u0101 men de w\u016b h\u00f2u t\u01ceng ru\u00f2 y\u01d2u y\u00ec ti\u00e1o xi\u01ceo h\u00e9\uff0c n\u00e0 me z\u00e0i sh\u00ed qi\u00e1o p\u00e1ng bi\u0101n\uff0c z\u00e0i l\u01dc sh\u00f9 y\u012bn xi\u00e0\uff0c n\u01d0 hu\u00ec ji\u00e0n d\u00e0o y\u00ec q\u00fan y\u0101 zi y\u00f3u x\u00ec shu\u01d0 zh\u014dng\uff0c b\u00f9 sh\u00ed d\u00ec b\u01ce t\u00f3u zh\u0101 d\u00e0o shu\u01d0 xi\u00e0 q\u00f9 m\u00ec sh\u00ed\u3002 j\u00ed sh\u01d0 f\u00f9 j\u00ecn de sh\u00ed tou sh\u00e0ng y\u01d2u f\u00f9 n\u01da z\u00e0i d\u01ceo y\u012b\uff0c t\u0101 men y\u011b c\u00f3ng b\u00f9 ch\u012b j\u012bng\u3002",
        "ru\u00f2 sh\u00ec z\u00e0i xi\u00e0 ti\u0101n de b\u00e0ng w\u01cen ch\u016b q\u00f9 s\u00e0n b\u00f9\uff0c n\u01d0 ch\u00e1ng ch\u00e1ng hu\u00ec qi\u00e1o ji\u00e0n xi\u0101ng xi\u00e0 r\u00e9n ji\u0101 ch\u012b w\u01cen f\u00e0n de q\u00edng j\u01d0ng\u3002 t\u0101 men b\u01ce zhu\u014d y\u01d0 f\u00e0n c\u00e0i b\u0101n d\u00e0o m\u00e9n qi\u00e1n\uff0c ti\u0101n g\u0101o d\u00ec ku\u00f2 d\u00ec ch\u012b q\u01d0 l\u00e1i\u3002 ti\u0101n bi\u0101n de h\u00f3ng xi\u00e1\uff0c xi\u00e0ng w\u01cen de w\u0113i f\u0113ng\uff0c t\u00f3u sh\u00e0ng f\u0113i gu\u00f2 de gu\u012b ch\u00e1o de ni\u01ceo \u00e9r\uff0c d\u014du sh\u00ec t\u0101 men de h\u01ceo y\u01d2u\u3002 t\u0101 men h\u00e9 xi\u0101ng xi\u00e0 r\u00e9n ji\u0101 y\u00ec q\u01d0\uff0c hu\u00ec ch\u00e9ng le y\u00ec f\u00fa z\u00ec r\u00e1n\u3001 h\u00e9 xi\u00e9 de ti\u00e1n yu\u00e1n f\u0113ng j\u01d0ng hu\u00e0\u3002",
        "qi\u016b ti\u0101n d\u00e0o le\uff0c f\u01ceng zh\u012b ni\u00e1ng j\u00ec zh\u00f9 z\u00e0i t\u0101 men w\u016b qi\u00e1n de gu\u0101 ji\u00e0 sh\u00e0ng\u3002 yu\u00e8 m\u00edng r\u00e9n j\u00ecng de y\u00e8 l\u01d0\uff0c t\u0101 men bi\u00e0n ch\u00e0ng q\u01d0 g\u0113 l\u00e1i\uff1a \u201c zh\u012b\uff0c zh\u012b\uff0c zh\u012b\uff0c zh\u012b a\uff01 zh\u012b\uff0c zh\u012b\uff0c zh\u012b\uff0c zh\u012b a\uff01 \u201d n\u00e0 g\u0113 sh\u0113ng zh\u0113n h\u01ceo t\u012bng\uff0c s\u00e0i gu\u00f2 cu\u012b mi\u00e1n q\u01d4\uff0c r\u00e0ng n\u00e0 xi\u0113 x\u012bn k\u01d4 y\u00ec ti\u0101n de r\u00e9n men\uff0c ti\u00e1n ti\u00e1n m\u00ec m\u00ec d\u00ec j\u00ecn r\u00f9 m\u00e8ng xi\u0101ng\u3002",
        "xi\u0101ng xi\u00e0 r\u00e9n ji\u0101\uff0c b\u00fa l\u00f9n sh\u00e9n me sh\u00ed h\u00f2u\uff0c b\u00fa l\u00f9n sh\u00e9n me j\u00ec ji\u00e9\uff0c d\u014du y\u01d2u y\u00ed d\u00e0o d\u00fa t\u00e8\u3001 m\u00ed r\u00e9n de f\u0113ng j\u01d0ng\u3002"
      ],
      recognizeChars: ["构","冠","朴","素","率","倘","附","捣","绘","谐"],
      writeChars: ["构","饰","蹲","凤","序","例","率","觅","耸","踏","倘","绘","谐","寄","眠"],
      vocabWords: [
        {word:'装饰',pinyin:'zhuāng shì',en:'decorate',sentence:'青瓜藤和绿叶装饰了屋檐。',sentenceEn:'Cucumber vines and green leaves decorate the eaves.'},
        {word:'朴素',pinyin:'pǔ sù',en:'simple; plain',sentence:'乡下人家虽然朴素。',sentenceEn:'Country homes are simple.'},
        {word:'独特',pinyin:'dú tè',en:'unique',sentence:'有一道独特的风景。',sentenceEn:'A unique scenery.'},
        {word:'和谐',pinyin:'hé xié',en:'harmonious',sentence:'自然和谐的风景。',sentenceEn:'Natural, harmonious scenery.'},
        {word:'觅食',pinyin:'mì shí',en:'forage',sentence:'母鸡带着鸡雏觅食。',sentenceEn:'The hen forages with her chicks.'}
      ],
      footnotes: [
        {term:"\u88c5\u9970", termEn:"decorate", definition:"\u3010zhu\u0101ng sh\u00ec\u3011decorate\u3002", definitionEn:"decorate"},
        {term:"\u6734\u7d20", termEn:"simple; plain", definition:"\u3010p\u01d4 s\u00f9\u3011simple; plain\u3002", definitionEn:"simple; plain"},
        {term:"\u72ec\u7279", termEn:"unique", definition:"\u3010d\u00fa t\u00e8\u3011unique\u3002", definitionEn:"unique"},
        {term:"\u548c\u8c10", termEn:"harmonious", definition:"\u3010h\u00e9 xi\u00e9\u3011harmonious\u3002", definitionEn:"harmonious"},
        {term:"\u89c5\u98df", termEn:"forage", definition:"\u3010m\u00ec sh\u00ed\u3011forage\u3002", definitionEn:"forage"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'过渡句',pointEn:'guò dù jù',example:'transition sentence',exampleEn:'乡下人家，不论什么时候，都有一道独特的风景。',explanation:'Country homes always have unique scenery.',explanationEn:'连接上下文，起承上启下作用'}
      ],
      exercises: [
        {type:"read",cn:"朗读课文，想象画面。如果给课文配画，你觉得可以画几幅？试着给每幅画取个名字",en:"Read aloud and imagine the scenes. How many pictures could illustrate the text? Try naming each one"},
        {type:"discuss",cn:"你对课文描写的哪一处景致最感兴趣？和同学交流",en:"Which scene interests you most? Discuss with classmates"},
        {type:"write",cn:"读一读，再从课文中找出其他生动形象的句子，抄写下来",en:"Read and find other vivid sentences in the text to copy down"}
      ],
      teachingPoints: [
        {cn:"抓住关键语句，初步体会课文表达的思想感情",en:"Grasp key sentences to feel the thoughts and emotions the text expresses"},
        {cn:"体会作者按空间和时间顺序描写乡村景物的写法",en:"Appreciate how the author organizes descriptions by spatial and temporal order"}
      ],
      parentTips: [
        {cn:"和孩子讨论乡村与城市生活的不同，培养对自然的热爱",en:"Discuss differences between rural and urban life with your child to foster love of nature"},
        {cn:"鼓励孩子找出文中生动的句子，体会语言的表达效果",en:"Encourage finding vivid sentences and appreciating the expressive effect of language"}
      ]
    },
    {
      id: 3, title: "天窗", titleEn: "The Skylight",
      difficulty: 2,
      text: [
        "乡下的房子只有前面一排木板窗。暖和的晴天，木板窗扇扇打开，光线和空气都有了。",
        "碰着大风大雨，或者北风呼呼叫的冬天，木板窗只好关起来，屋子里就黑得像地洞似的。",
        "于是乡下人在屋顶开一个小方洞，装一块玻璃，叫作\u201C天窗\u201D。",
        "夏天阵雨来了时，孩子们顶喜欢在雨里跑跳，仰着脸看闪电，然而大人们偏就不许。\u201C到屋里来啊！\u201D随着木板窗的关闭，孩子们也就被关在地洞似的屋里了。这时候，小小的天窗是你唯一的慰藉。",
        "从那小小的玻璃，你会看见雨脚在那里卜落卜落跳，你会看见带子似的闪电一瞥；你想象到这雨，这风，这雷，这电，怎样猛厉地扫荡了这世界，你想象它们的威力比你在露天真实感到的要大十倍百倍。小小的天窗会使你的想象锐利起来！",
        "晚上，当你被逼着上床去\u201C休息\u201D的时候，也许你还忘不了月光下的草地河滩。你偷偷地从帐子里伸出头来，仰起了脸。这时候，小小的天窗又是你唯一的慰藉！",
        "你会从那小玻璃上面的一粒星，一朵云，想象到无数闪闪烁烁可爱的星，无数像山似的、马似的、巨人似的奇幻的云彩；你会从那小玻璃上面掠过的一条黑影，想象到这也许是灰色的蝙蝠，也许是会唱歌的夜莺，也许是霸气十足的猫头鹰……总之，夜的美丽神奇，立刻会在你的想象中展开。",
        "发明这天窗的大人们，是应得感谢的。因为活泼会想的孩子们知道怎样从\u201C无\u201D中看出\u201C有\u201D，从\u201C虚\u201D中看出\u201C实\u201D，比任何他们看到的都更真切，更阔达，更复杂，更确实！"
      ],
      textEn: [
        "Country houses had only a row of wooden-shutter windows in front. On warm, sunny days, the shutters were flung open to let in light and air.",
        "In storms or howling winter winds, the shutters had to be closed, and the house became dark as a cave.",
        "So country folk cut a small square hole in the roof, fitted it with glass, and called it a \u2018skylight.\u2019",
        "When summer rainstorms came, children loved splashing in the rain and gazing up at lightning, but the grown-ups would not allow it. \u2018Come inside!\u2019 With the shutters closed, the children were shut up in the cave-like house. At such times, the tiny skylight was your only consolation.",
        "Through that little pane of glass you could see raindrops pattering and a ribbon of lightning flash by. You imagined the rain, wind, thunder, and lightning fiercely sweeping the world \u2014 ten, a hundred times more powerful than what you felt in the open air. The tiny skylight sharpened your imagination!",
        "At night, when you were sent to bed to \u2018rest,\u2019 perhaps you still longed for the moonlit meadows and riverbanks. You sneaked your head out from under the bed curtain and looked up. Once again, the tiny skylight was your only consolation!",
        "From one star, one cloud visible through that small glass, you imagined countless twinkling stars and fantastic clouds shaped like mountains, horses, giants. From a dark shadow gliding past, you imagined perhaps a grey bat, a singing nightingale, or a majestic owl \u2026 In short, the beauty and magic of the night unfolded at once in your imagination.",
        "The grown-ups who invented the skylight deserve our thanks. For lively, imaginative children know how to see \u2018something\u2019 from \u2018nothing,\u2019 \u2018reality\u2019 from \u2018emptiness\u2019 \u2014 more vivid, broader, richer, and truer than anything they could see with their eyes!"
      ],
      textPinyin: [
        "xi\u0101ng xi\u00e0 de f\u00e1ng zi zh\u01d0 y\u01d2u qi\u00e1n mi\u00e0n y\u00ec p\u00e1i m\u00f9 b\u01cen chu\u0101ng\u3002 nu\u01cen huo de q\u00edng ti\u0101n\uff0c m\u00f9 b\u01cen chu\u0101ng sh\u00e0n sh\u00e0n d\u01ce k\u0101i\uff0c gu\u0101ng xi\u00e0n h\u00e9 k\u014dng q\u00ec d\u014du y\u01d2u le\u3002",
        "p\u00e8ng zhe d\u00e0 f\u0113ng d\u00e0 y\u01d4\uff0c hu\u00f2 zh\u011b b\u011bi f\u0113ng h\u016b h\u016b ji\u00e0o de d\u014dng ti\u0101n\uff0c m\u00f9 b\u01cen chu\u0101ng zh\u01d0 h\u01ceo gu\u0101n q\u01d0 l\u00e1i\uff0c w\u016b zi l\u01d0 ji\u00f9 h\u0113i d\u00e9 xi\u00e0ng d\u00ec d\u00f2ng sh\u00ec de\u3002",
        "y\u00fa sh\u00ec xi\u0101ng xi\u00e0 r\u00e9n z\u00e0i w\u016b d\u01d0ng k\u0101i y\u00ed g\u00e8 xi\u01ceo f\u0101ng d\u00f2ng\uff0c zhu\u0101ng y\u00ed ku\u00e0i b\u014d l\u00ed\uff0c ji\u00e0o zu\u00f2 \u201c ti\u0101n chu\u0101ng \u201d\u3002",
        "xi\u00e0 ti\u0101n zh\u00e8n y\u01d4 l\u00e1i le sh\u00ed\uff0c h\u00e1i zi men d\u01d0ng x\u01d0 hu\u0101n z\u00e0i y\u01d4 l\u01d0 p\u01ceo ti\u00e0o\uff0c y\u01ceng zhe li\u01cen k\u00e0n sh\u01cen di\u00e0n\uff0c r\u00e1n \u00e9r d\u00e0 r\u00e9n men pi\u0101n ji\u00f9 b\u00f9 x\u01d4\u3002 \u201c d\u00e0o w\u016b l\u01d0 l\u00e1i a\uff01 \u201d su\u00ed zhe m\u00f9 b\u01cen chu\u0101ng de gu\u0101n b\u00ec\uff0c h\u00e1i zi men y\u011b ji\u00f9 b\u00e8i gu\u0101n z\u00e0i d\u00ec d\u00f2ng sh\u00ec de w\u016b l\u01d0 le\u3002 zh\u00e8 sh\u00ed h\u00f2u\uff0c xi\u01ceo xi\u01ceo de ti\u0101n chu\u0101ng sh\u00ec n\u01d0 w\u00e9i y\u012b de w\u00e8i ji\u00e8\u3002",
        "c\u00f3ng n\u00e0 xi\u01ceo xi\u01ceo de b\u014d l\u00ed\uff0c n\u01d0 hu\u00ec k\u00e0n ji\u00e0n y\u01d4 ji\u01ceo z\u00e0i n\u00e0 l\u01d0 b\u01d4 lu\u00f2 b\u01d4 lu\u00f2 ti\u00e0o\uff0c n\u01d0 hu\u00ec k\u00e0n ji\u00e0n d\u00e0i z\u01d0 sh\u00ec de sh\u01cen di\u00e0n y\u00ec pi\u0113\uff1b n\u01d0 xi\u01ceng xi\u00e0ng d\u00e0o zh\u00e8 y\u01d4\uff0c zh\u00e8 f\u0113ng\uff0c zh\u00e8 l\u00e9i\uff0c zh\u00e8 di\u00e0n\uff0c z\u011bn y\u00e0ng m\u011bng l\u00ec d\u00ec s\u01ceo d\u00e0ng le zh\u00e8 sh\u00ec ji\u00e8\uff0c n\u01d0 xi\u01ceng xi\u00e0ng t\u0101 men de w\u0113i l\u00ec b\u01d0 n\u01d0 z\u00e0i l\u00f9 ti\u0101n zh\u0113n sh\u00ed g\u01cen d\u00e0o de y\u00e0o d\u00e0 sh\u00ed b\u00e8i b\u01cei b\u00e8i\u3002 xi\u01ceo xi\u01ceo de ti\u0101n chu\u0101ng hu\u00ec sh\u01d0 n\u01d0 de xi\u01ceng xi\u00e0ng ru\u00ec l\u00ec q\u01d0 l\u00e1i\uff01",
        "w\u01cen sh\u00e0ng\uff0c d\u0101ng n\u01d0 b\u00e8i b\u012b zhe sh\u00e0ng chu\u00e1ng q\u00f9 \u201c xi\u016b xi \u201d de sh\u00ed h\u00f2u\uff0c y\u011b x\u01d4 n\u01d0 h\u00e1i w\u00e0ng b\u00f9 li\u01ceo yu\u00e8 gu\u0101ng xi\u00e0 de c\u01ceo d\u00ec h\u00e9 t\u0101n\u3002 n\u01d0 t\u014du t\u014du d\u00ec c\u00f3ng zh\u00e0ng z\u01d0 l\u01d0 sh\u0113n ch\u016b t\u00f3u l\u00e1i\uff0c y\u01ceng q\u01d0 le li\u01cen\u3002 zh\u00e8 sh\u00ed h\u00f2u\uff0c xi\u01ceo xi\u01ceo de ti\u0101n chu\u0101ng y\u00f2u sh\u00ec n\u01d0 w\u00e9i y\u012b de w\u00e8i ji\u00e8\uff01",
        "n\u01d0 hu\u00ec c\u00f3ng n\u00e0 xi\u01ceo b\u014d l\u00ed sh\u00e0ng mi\u00e0n de y\u00ed l\u00ec x\u012bng\uff0c y\u00ec du\u01d2 y\u00fan\uff0c xi\u01ceng xi\u00e0ng d\u00e0o w\u00fa sh\u00f9 sh\u01cen sh\u01cen shu\u00f2 shu\u00f2 k\u011b \u00e0i de x\u012bng\uff0c w\u00fa sh\u00f9 xi\u00e0ng sh\u0101n sh\u00ec de\u3001 m\u01ce sh\u00ec de\u3001 j\u00f9 r\u00e9n sh\u00ec de q\u00ed hu\u00e0n de y\u00fan c\u01cei\uff1b n\u01d0 hu\u00ec c\u00f3ng n\u00e0 xi\u01ceo b\u014d l\u00ed sh\u00e0ng mi\u00e0n l\u00fc\u00e8 gu\u00f2 de y\u00ec ti\u00e1o h\u0113i y\u01d0ng\uff0c xi\u01ceng xi\u00e0ng d\u00e0o zh\u00e8 y\u011b x\u01d4 sh\u00ec hu\u012b s\u00e8 de bi\u0101n f\u00fa\uff0c y\u011b x\u01d4 sh\u00ec hu\u00ec ch\u00e0ng g\u0113 de y\u00e8 y\u012bng\uff0c y\u011b x\u01d4 sh\u00ec b\u00e0 q\u00ec sh\u00ed z\u00fa de m\u0101o t\u00f3u y\u012bng\u2026\u2026 z\u01d2ng zh\u012b\uff0c y\u00e8 de m\u011bi l\u00ec sh\u00e9n q\u00ed\uff0c l\u00ec k\u00e8 hu\u00ec z\u00e0i n\u01d0 de xi\u01ceng xi\u00e0ng zh\u014dng zh\u01cen k\u0101i\u3002",
        "f\u0101 m\u00edng zh\u00e8 ti\u0101n chu\u0101ng de d\u00e0 r\u00e9n men\uff0c sh\u00ec y\u012bng d\u00e9 g\u01cen xi\u00e8 de\u3002 y\u012bn w\u00e8i hu\u00f3 p\u014d hu\u00ec xi\u01ceng de h\u00e1i zi men zh\u012b d\u00e0o z\u011bn y\u00e0ng c\u00f3ng \u201c w\u00fa \u201d zh\u014dng k\u00e0n ch\u016b \u201c y\u01d2u \u201d\uff0c c\u00f3ng \u201c x\u016b \u201d zh\u014dng k\u00e0n ch\u016b \u201c sh\u00ed \u201d\uff0c b\u01d0 r\u00e8n h\u00e9 t\u0101 men k\u00e0n d\u00e0o de d\u014du g\u00e8ng zh\u0113n qi\u00e8\uff0c g\u00e8ng ku\u00f2 d\u00e1\uff0c g\u00e8ng f\u00f9 z\u00e1\uff0c g\u00e8ng qu\u00e8 sh\u00ed\uff01"
      ],
      recognizeChars: ["慰","藉","卜"],
      writeChars: ["慰","藉","卜","锐","滩","帐","烁","蝙","蝠","霸","鹰"],
      vocabWords: [
        {word:'天窗',pinyin:'tiān chuāng',en:'skylight',sentence:'屋顶开了一个天窗。',sentenceEn:'A skylight was opened in the roof.'},
        {word:'安慰',pinyin:'ān wèi',en:'comfort',sentence:'天窗是孩子们的安慰。',sentenceEn:'The skylight was comfort for children.'},
        {word:'想象',pinyin:'xiǎng xiàng',en:'imagine',sentence:'透过天窗想象外面的世界。',sentenceEn:'Imagine the world outside through the skylight.'},
        {word:'闪电',pinyin:'shǎn diàn',en:'lightning',sentence:'一道闪电划过天窗。',sentenceEn:'A bolt of lightning flashes across the skylight.'},
        {word:'神奇',pinyin:'shén qí',en:'magical',sentence:'天窗是神奇的。',sentenceEn:'The skylight is magical.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u4e61\u4e0b\u7684\u623f\u5b50\u53ea\u6709\u524d\u9762\u4e00\u6392\u6728\u677f\u7a97\u3002", exampleEn: "Country houses had only a row of wooden-shutter windows in front. On warm, sunny", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u56e0\u4e3a\u2026\u2026\u6240\u4ee5\u2026\u2026", pointEn: "because...therefore...", example: "\u4e61\u4e0b\u7684\u623f\u5b50\u53ea\u6709\u524d\u9762\u4e00\u6392\u6728\u677f\u7a97\u3002", exampleEn: "Country houses had only a row of wooden-shutter windows in front. On warm, sunny", explanation: "\u56e0\u679c\u590d\u53e5\uff0c\u8868\u793a\u539f\u56e0\u548c\u7ed3\u679c\u7684\u5173\u7cfb", explanationEn: "Causal compound sentence expressing cause and effect"}
      ],
      footnotes: [
        {term:"\u5929\u7a97", termEn:"skylight", definition:"\u3010ti\u0101n chu\u0101ng\u3011skylight\u3002", definitionEn:"skylight"},
        {term:"\u5b89\u6170", termEn:"comfort", definition:"\u3010\u0101n w\u00e8i\u3011comfort\u3002", definitionEn:"comfort"},
        {term:"\u60f3\u8c61", termEn:"imagine", definition:"\u3010xi\u01ceng xi\u00e0ng\u3011imagine\u3002", definitionEn:"imagine"},
        {term:"\u95ea\u7535", termEn:"lightning", definition:"\u3010sh\u01cen di\u00e0n\u3011lightning\u3002", definitionEn:"lightning"},
        {term:"\u795e\u5947", termEn:"magical", definition:"\u3010sh\u00e9n q\u00ed\u3011magical\u3002", definitionEn:"magical"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"默读课文，说说天窗在哪儿，为什么要开天窗",en:"Read silently and explain where the skylight is and why it was made"},
        {type:"discuss",cn:"在什么情况下，小小的天窗成了孩子们\u201C唯一的慰藉\u201D？",en:"Under what circumstances did the tiny skylight become the children\u2019s \u2018only consolation\u2019?"},
        {type:"think",cn:"读句子，回答括号里的问题，体会\u201C扫荡\u201D等词语的表达效果",en:"Read the sentences, answer the questions, and appreciate the expressive effect of words like \u2018sweeping\u2019"}
      ],
      teachingPoints: [
        {cn:"理解\u201C慰藉\u201D的含义，体会天窗给孩子们带来的快乐和想象力",en:"Understand 'consolation' and appreciate the joy and imagination the skylight brings children"},
        {cn:"体会文中两次出现\u201C唯一的慰藉\u201D所表达的思想感情",en:"Feel the emotions expressed by the phrase 'only consolation' appearing twice"}
      ],
      parentTips: [
        {cn:"和孩子讨论想象力的重要性，分享自己童年时的想象经历",en:"Discuss the importance of imagination with your child and share your own childhood daydreams"},
        {cn:"引导孩子理解\u201C从无中看出有，从虚中看出实\u201D的含义",en:"Help your child understand the meaning of seeing 'something from nothing, reality from emptiness'"}
      ]
    },
    {
      id: 4, title: "三月桃花水", titleEn: "March Peach Blossom Water",
      difficulty: 2,
      isSelfRead: true,
      text: [
        "是什么声音，像一串小铃铛，轻轻地走过村边？是什么光芒，像一匹明洁的丝绸，映照着蓝天？",
        "啊，河流醒来了！三月的桃花水，舞动着绮丽的朝霞，向前流啊。有一千朵桃花，点点洒在河面，有一万个小酒窝，在水中回旋。",
        "三月的桃花水，是春天的竖琴。那忽大忽小的水声，应和着拖拉机的鸣响；那纤细的低语，是在和刚刚从雪被里伸出头来的麦苗谈心；那碰着岸边石块的叮当声，像是大路上车轮滚过的铃声……",
        "三月的桃花水，是春天的明镜。它看见燕子飞过天空，翅膀上裹着白云；它看见垂柳披上了长发，如雾如烟；它看见一群姑娘来到河边，水底立刻浮起一朵朵红莲，她们捧起了水，像抖落一片片花瓣……",
        "啊，地上草如茵，两岸柳如眉，三月桃花水，叫人多沉醉。"
      ],
      textEn: [
        "What sound is that, like a string of tiny bells, gently passing the village? What glow is that, like a bolt of pure silk, reflecting the blue sky?",
        "Ah, the river has awakened! March\u2019s peach blossom water dances with the gorgeous morning clouds, flowing onward. A thousand peach blossoms dot the river surface; ten thousand dimples swirl in the water.",
        "March\u2019s peach blossom water is spring\u2019s harp. The water\u2019s rising and falling sound echoes the tractor\u2019s hum; its delicate whisper is a heart-to-heart with wheat sprouts just peeking out from the snow; its tinkling against riverside rocks sounds like cart wheels rolling on the road\u2026",
        "March\u2019s peach blossom water is spring\u2019s mirror. It sees swallows flying across the sky with white clouds on their wings; it sees willows donning long hair, misty as fog; it sees a group of girls arriving at the riverside, and at once red lotuses float up from the depths \u2014 they scoop up the water like shaking loose flower petals\u2026",
        "Ah, grass like a carpet on the ground, willows like eyebrows on both banks \u2014 March\u2019s peach blossom water, how intoxicating!"
      ],
      textPinyin: [
        "sh\u00ec sh\u00e9n me sh\u0113ng y\u012bn\uff0c xi\u00e0ng y\u00ed chu\u00e0n xi\u01ceo l\u00edng dang\uff0c q\u012bng q\u012bng d\u00ec z\u01d2u gu\u00f2 c\u016bn bi\u0101n\uff1f sh\u00ec sh\u00e9n me gu\u0101ng m\u00e1ng\uff0c xi\u00e0ng y\u00ec p\u01d0 m\u00edng ji\u00e9 de s\u012b ch\u00f3u\uff0c y\u00ecng zh\u00e0o zhe l\u00e1n ti\u0101n\uff1f",
        "a\uff0c h\u00e9 li\u00fa x\u01d0ng l\u00e1i le\uff01 s\u0101n yu\u00e8 de t\u00e1o hu\u0101 shu\u01d0\uff0c w\u01d4 d\u00f2ng zhe q\u01d0 l\u00ec de zh\u0101o xi\u00e1\uff0c xi\u00e0ng qi\u00e1n li\u00fa a\u3002 y\u01d2u y\u00ec qi\u0101n du\u01d2 t\u00e1o hu\u0101\uff0c di\u01cen di\u01cen s\u01ce z\u00e0i h\u00e9 mi\u00e0n\uff0c y\u01d2u y\u00ed w\u00e0n g\u00e8 xi\u01ceo ji\u01d4 w\u014d\uff0c z\u00e0i shu\u01d0 zh\u014dng hu\u00ed xu\u00e1n\u3002",
        "s\u0101n yu\u00e8 de t\u00e1o hu\u0101 shu\u01d0\uff0c sh\u00ec ch\u016bn ti\u0101n de sh\u00f9 q\u00edn\u3002 n\u00e0 h\u016b d\u00e0 h\u016b xi\u01ceo de shu\u01d0 sh\u0113ng\uff0c y\u00ecng h\u00e9 zhe tu\u014d l\u0101 j\u012b de m\u00edng xi\u01ceng\uff1b n\u00e0 xi\u0101n x\u00ec de d\u012b y\u01d4\uff0c sh\u00ec z\u00e0i h\u00e9 g\u0101ng g\u0101ng c\u00f3ng xu\u011b b\u00e8i l\u01d0 sh\u0113n ch\u016b t\u00f3u l\u00e1i de m\u00e0i mi\u00e1o t\u00e1n x\u012bn\uff1b n\u00e0 p\u00e8ng zhe \u00e0n bi\u0101n sh\u00ed ku\u00e0i de d\u012bng d\u0101ng sh\u0113ng\uff0c xi\u00e0ng sh\u00ec d\u00e0 l\u00f9 shang ch\u0113 l\u00fan g\u01d4n gu\u00f2 de l\u00edng sh\u0113ng\u2026\u2026",
        "s\u0101n yu\u00e8 de t\u00e1o hu\u0101 shu\u01d0\uff0c sh\u00ec ch\u016bn ti\u0101n de m\u00edng j\u00ecng\u3002 t\u0101 k\u00e0n ji\u00e0n y\u00e0n z\u01d0 f\u0113i gu\u00f2 ti\u0101n k\u014dng\uff0c ch\u00ec b\u01ceng sh\u00e0ng gu\u01d2 zhe b\u00e1i y\u00fan\uff1b t\u0101 k\u00e0n ji\u00e0n chu\u00ed li\u01d4 p\u012b sh\u00e0ng le ch\u00e1ng f\u0101\uff0c r\u00fa w\u00f9 r\u00fa y\u0101n\uff1b t\u0101 k\u00e0n ji\u00e0n y\u00ec q\u00fan g\u016b ni\u00e1ng l\u00e1i d\u00e0o h\u00e9 bi\u0101n\uff0c shu\u01d0 d\u01d0 l\u00ec k\u00e8 f\u00fa q\u01d0 y\u00ec du\u01d2 du\u01d2 h\u00f3ng li\u00e1n\uff0c t\u0101 men p\u011bng q\u01d0 le shu\u01d0\uff0c xi\u00e0ng d\u01d2u lu\u00f2 y\u00ed pi\u00e0n pi\u00e0n hu\u0101 b\u00e0n\u2026\u2026",
        "a\uff0c d\u00ec sh\u00e0ng c\u01ceo r\u00fa y\u012bn\uff0c li\u01ceng \u00e0n li\u01d4 r\u00fa m\u00e9i\uff0c s\u0101n yu\u00e8 t\u00e1o hu\u0101 shu\u01d0\uff0c ji\u00e0o r\u00e9n du\u014d ch\u00e9n zu\u00ec\u3002"
      ],
      recognizeChars: ["绮","和","谈"],
      writeChars: [],
      vocabWords: [
        {word:'桃花',pinyin:'táo huā',en:'peach blossom',sentence:'三月桃花水。',sentenceEn:'March peach blossom water.'},
        {word:'明镜',pinyin:'míng jìng',en:'bright mirror',sentence:'是什么光芒？是一面明镜。',sentenceEn:'What brightness? A bright mirror.'},
        {word:'竖琴',pinyin:'shù qín',en:'harp',sentence:'是什么声响？是竖琴的旋律。',sentenceEn:'What sound? The melody of a harp.'},
        {word:'催促',pinyin:'cuī cù',en:'urge',sentence:'催促着人们春耕。',sentenceEn:'Urging people to do spring plowing.'},
        {word:'映照',pinyin:'yìng zhào',en:'reflect',sentence:'河水映照着蓝天。',sentenceEn:'The river reflects the blue sky.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u662f\u4ec0\u4e48\u58f0\u97f3\uff0c\u50cf\u4e00\u4e32\u5c0f\u94c3\u94db\uff0c\u8f7b\u8f7b\u5730\u8d70\u8fc7\u6751\u8fb9\uff1f", exampleEn: "What sound is that, like a string of tiny bells, gently passing the village? Wha", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u88ab\u5b57\u53e5", pointEn: "b\u00e8i-construction (passive)", example: "\u662f\u4ec0\u4e48\u58f0\u97f3\uff0c\u50cf\u4e00\u4e32\u5c0f\u94c3\u94db\uff0c\u8f7b\u8f7b\u5730\u8d70\u8fc7\u6751\u8fb9\uff1f", exampleEn: "What sound is that, like a string of tiny bells, gently passing the village? Wha", explanation: "\u88ab\u52a8\u53e5\uff0c\u8868\u793a\u4e3b\u8bed\u662f\u52a8\u4f5c\u7684\u627f\u53d7\u8005", explanationEn: "Passive construction where the subject receives the action"}
      ],
      footnotes: [
        {term:"\u6843\u82b1", termEn:"peach blossom", definition:"\u3010t\u00e1o hu\u0101\u3011peach blossom\u3002", definitionEn:"peach blossom"},
        {term:"\u660e\u955c", termEn:"bright mirror", definition:"\u3010m\u00edng j\u00ecng\u3011bright mirror\u3002", definitionEn:"bright mirror"},
        {term:"\u7ad6\u7434", termEn:"harp", definition:"\u3010sh\u00f9 q\u00edn\u3011harp\u3002", definitionEn:"harp"},
        {term:"\u50ac\u4fc3", termEn:"urge", definition:"\u3010cu\u012b c\u00f9\u3011urge\u3002", definitionEn:"urge"},
        {term:"\u6620\u7167", termEn:"reflect", definition:"\u3010y\u00ecng zh\u00e0o\u3011reflect\u3002", definitionEn:"reflect"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"有感情地朗读课文，体会优美的语言，读出作者对桃花水的喜爱和赞美之情",en:"Read with feeling, appreciate the beautiful language, and convey the author\u2019s love and admiration"},
        {type:"think",cn:"作者把春水比作\u201C竖琴\u201D和\u201C明镜\u201D，体会这两个比喻的妙处",en:"The author compares spring water to a \u2018harp\u2019 and a \u2018mirror\u2019 \u2014 appreciate the beauty of these metaphors"}
      ],
      teachingPoints: [
        {cn:"感受比喻和拟人手法在散文中的运用，体会语言的优美",en:"Appreciate the use of simile and personification in prose and the beauty of the language"},
        {cn:"理解\u201C春天的竖琴\u201D\u201C春天的明镜\u201D两个核心比喻的含义",en:"Understand the meaning of the two central metaphors: 'spring\u2019s harp' and 'spring\u2019s mirror'"}
      ],
      parentTips: [
        {cn:"和孩子一起朗读，感受散文的节奏美和画面美",en:"Read aloud together and appreciate the rhythm and imagery of the prose"},
        {cn:"引导孩子观察生活中的水景，尝试用比喻描述",en:"Guide your child to observe water scenes in life and try describing them with metaphors"}
      ]
    }
  ],
  oralComm: {title:"转述",titleEn:"Relaying Messages",prompt:{cn:"根据情境，联系生活实际，分小组进行转述。转述事情，一定要记住要点。注意人称的转换。",en:"Based on real-life scenarios, practice relaying messages in small groups. Remember the key points and pay attention to pronoun changes."}},
  garden: {
    accumulation: {title:"日积月累",titleEn:"Daily Accumulation",content:{cn:"卜算子·咏梅（毛泽东）：风雨送春归，飞雪迎春到。已是悬崖百丈冰，犹有花枝俏。俏也不争春，只把春来报。待到山花烂漫时，她在丛中笑。",en:"Bu Suan Zi — Ode to the Plum (Mao Zedong): Wind and rain saw spring off; flying snow welcomed it. A hundred feet of ice still clung to cliffs, yet plum blossoms bloomed. Pretty but not vying for spring, only heralding its arrival. When mountain flowers bloom in full splendor, she smiles among them."}},
    wordSentence: {title:"词句段运用",titleEn:"Words, Sentences & Paragraphs",content:{cn:"读一读描写乡村和城市的词语（繁华、璀璨、高楼林立、车水马龙、灯火辉煌/肥沃、静谧、炊烟袅袅、依山傍水、鸡犬相闻）；读句子，照样子写一写。",en:"Read words describing the countryside and the city; read sentences and write your own following the pattern."}},
    composition: {title:"习作：我的乐园",titleEn:"Composition: My Paradise",prompt:{cn:"你的乐园是什么样子的？你最喜欢在那儿干什么？把你的乐园介绍给同学吧。",en:"What does your paradise look like? What do you enjoy doing there? Introduce your paradise to classmates."}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 2 — 科学与发现 Science (Lessons 5-8)  */
/* ═══════════════════════════════════════════ */
{
  id: 2, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 5, title: "琥珀", titleEn: "Amber",
      difficulty: 2,
      text: [
        "这个故事发生在很久很久以前，约莫算来，总有几万年了。",
        "一个夏日，太阳暖暖地照着，海在很远的地方翻腾怒吼，绿叶在树上飒飒地响。一只小苍蝇展开柔嫩的绿翅膀，在阳光下快乐地飞舞。它嗡嗡地穿过草地，飞进树林。那里长着许多高大的松树，太阳照得火热，可以闻到一股松脂的香味。",
        "那只小苍蝇停在一棵大松树上。它伸起腿来掸掸翅膀，拂拭那长着一对红眼睛的圆脑袋。它飞了大半天，身上已经沾满了灰尘。",
        "忽然，有个蜘蛛慢慢爬过来，想把那只苍蝇当作一顿美餐。它小心地划动长长的腿，沿着树干向下爬，离小苍蝇越来越近了。",
        "晌午的太阳热辣辣地照射着整个树林。许多老松树渗出厚厚的松脂，松脂在太阳光里闪闪地发出金黄的光。",
        "蜘蛛刚扑过去，突然发生了一件可怕的事情。一大滴松脂从树上滴下来，刚好落在树干上，把苍蝇和蜘蛛一齐包在里头。",
        "小苍蝇不能掸翅膀了，蜘蛛也不能再想什么美餐了。两只小虫都淹没在老松树黏稠的黄色泪珠里。它们前俯后仰地挣扎了一番，终于不动了。",
        "松脂继续滴下来，盖住了原来的，最后积成一个松脂球，把两只小虫重重包裹在里面。",
        "几十年，几百年，几千年，时间一转眼就过去了。成千上万只绿翅膀的苍蝇和八只脚的蜘蛛来了又去了。谁也不会想到很久很久以前，有两只小虫被埋在一个松脂球里，挂在一棵老松树上。",
        "后来，陆地渐渐沉下去，海水渐渐漫上来，逼近那古老的森林。有一天，水把森林淹没了，波浪不断冲刷着树干，甚至把树连根拔起。树断绝了生机，慢慢地腐烂了，剩下的只有那些松脂球，淹没在泥沙下面。",
        "又是几千年过去了，那些松脂球成了化石。",
        "海风猛烈地吹，澎湃的波涛把海里的泥沙卷到岸边。有个渔民带着儿子走过海滩。那孩子赤着脚，他踩着了沙里的一块硬东西，就把它挖了出来。",
        "\u201C爸爸，你看！\u201D他快活地叫起来，\u201C这是什么？\u201D",
        "他爸爸接过来，仔细看了看。",
        "\u201C这是琥珀，孩子。\u201D他高兴地说，\u201C有两个小东西关在里面呢，一只苍蝇，一个蜘蛛。这是很少见的。\u201D",
        "在那块透明的琥珀里，两个小东西仍旧好好地躺着。我们可以看见它们身上的每一根毫毛，还可以想象它们当时在黏稠的松脂里怎样挣扎，因为它们的腿的四周显出好几圈黑色的圆环。从那块琥珀，我们可以推测发生在几万年前的故事的详细情形，并且可以知道，在远古时代，世界上就已经有苍蝇和蜘蛛了。"
      ],
      textEn: [
        "This story happened a very, very long time ago \u2014 roughly tens of thousands of years.",
        "On a summer day, the sun shone warmly, the sea roared far away, and green leaves rustled in the trees. A little fly spread its tender green wings and danced happily in the sunshine. Buzzing through the meadow, it flew into a forest of tall pine trees where the sun beat down and you could smell pine resin.",
        "The little fly landed on a big pine tree. It raised its legs to dust off its wings and wiped its round head with its pair of red eyes. After flying half the day, it was covered in dust.",
        "Suddenly, a spider crept toward it, wanting to make the fly a meal. It carefully moved its long legs down the trunk, closer and closer to the fly.",
        "The midday sun blazed over the entire forest. Many old pines oozed thick resin that gleamed golden in the sunlight.",
        "Just as the spider pounced, something terrible happened. A large drop of resin fell from the tree, landing right on the trunk, encasing both fly and spider.",
        "The fly could no longer dust its wings; the spider could no longer dream of a meal. Both tiny creatures were drowned in the old pine\u2019s sticky yellow teardrops. They struggled back and forth, then finally went still.",
        "More resin dripped down, covering the first drops, until it formed a resin ball with both insects sealed tightly inside.",
        "Decades, centuries, millennia flew by. Countless green-winged flies and eight-legged spiders came and went. No one imagined that long, long ago, two tiny creatures had been buried in a resin ball on an old pine tree.",
        "Gradually the land sank and seawater rose, encroaching on the ancient forest. One day the water submerged the forest, waves lashing the trunks, even uprooting trees. The trees lost their life force and slowly rotted away; only the resin balls remained, buried in sand.",
        "Thousands more years passed, and those resin balls became fossils.",
        "Fierce sea winds blew, and surging waves washed sand ashore. A fisherman and his son walked along the beach. The boy, barefoot, stepped on something hard in the sand and dug it out.",
        "\u2018Dad, look!\u2019 he called happily. \u2018What is this?\u2019",
        "His father took it and examined it carefully.",
        "\u2018This is amber, son,\u2019 he said happily. \u2018Two little creatures are trapped inside \u2014 a fly and a spider. This is very rare.\u2019",
        "In that transparent piece of amber, the two small creatures still lay perfectly preserved. We can see every tiny hair on their bodies and imagine how they struggled in the sticky resin, because their legs are ringed by dark circles. From this amber we can deduce the detailed story of what happened tens of thousands of years ago, and know that even in ancient times, flies and spiders already existed."
      ],
      textPinyin: [
        "zh\u00e8 g\u00e8 g\u00f9 sh\u00ec f\u0101 sh\u0113ng z\u00e0i h\u011bn ji\u01d4 h\u011bn ji\u01d4 y\u01d0 qi\u00e1n\uff0c yu\u0113 mo su\u00e0n l\u00e1i\uff0c z\u01d2ng y\u01d2u j\u01d0 w\u00e0n ni\u00e1n le\u3002",
        "y\u00ed g\u00e8 xi\u00e0 r\u00ec\uff0c t\u00e0i y\u00e1ng nu\u01cen nu\u01cen d\u00ec zh\u00e0o zhe\uff0c h\u01cei z\u00e0i h\u011bn yu\u01cen de d\u00ec f\u0101ng f\u0101n t\u00e9ng n\u00f9 h\u01d2u\uff0c l\u01dc y\u00e8 z\u00e0i sh\u00f9 sh\u00e0ng s\u00e0 s\u00e0 d\u00ec xi\u01ceng\u3002 y\u00ec zh\u012b xi\u01ceo c\u0101ng y\u00edng zh\u01cen k\u0101i r\u00f3u n\u00e8n de l\u01dc ch\u00ec b\u01ceng\uff0c z\u00e0i y\u00e1ng gu\u0101ng xi\u00e0 ku\u00e0i l\u00e8 d\u00ec f\u0113i w\u01d4\u3002 t\u0101 w\u0113ng w\u0113ng d\u00ec chu\u0101n gu\u00f2 c\u01ceo d\u00ec\uff0c f\u0113i j\u00ecn sh\u00f9 l\u00edn\u3002 n\u00e0 l\u01d0 ch\u00e1ng zhe x\u01d4 du\u014d g\u0101o d\u00e0 de s\u014dng sh\u00f9\uff0c t\u00e0i y\u00e1ng zh\u00e0o d\u00e9 hu\u01d2 r\u00e8\uff0c k\u011b y\u01d0 w\u00e9n d\u00e0o y\u00ec g\u01d4 s\u014dng zh\u012b de xi\u0101ng w\u00e8i\u3002",
        "n\u00e0 zh\u012b xi\u01ceo c\u0101ng y\u00edng t\u00edng z\u00e0i y\u00ec k\u0113 d\u00e0 s\u014dng sh\u00f9 sh\u00e0ng\u3002 t\u0101 sh\u0113n q\u01d0 tu\u01d0 l\u00e1i d\u01cen d\u01cen ch\u00ec b\u01ceng\uff0c f\u00fa sh\u00ec n\u00e0 ch\u00e1ng zhe y\u00ed du\u00ec h\u00f3ng y\u01cen j\u012bng de yu\u00e1n n\u01ceo d\u00e0i\u3002 t\u0101 f\u0113i le d\u00e0 b\u00e0n ti\u0101n\uff0c sh\u0113n sh\u00e0ng y\u01d0 j\u012bng zh\u0101n m\u01cen le hu\u012b ch\u00e9n\u3002",
        "h\u016b r\u00e1n\uff0c y\u01d2u g\u00e8 zh\u012b zh\u016b m\u00e0n m\u00e0n p\u00e1 gu\u00f2 l\u00e1i\uff0c xi\u01ceng b\u01ce n\u00e0 zh\u012b c\u0101ng y\u00edng d\u00e0ng zu\u00f2 y\u00ed d\u00f9n m\u011bi c\u0101n\u3002 t\u0101 xi\u01ceo x\u012bn d\u00ec hu\u00e0 d\u00f2ng ch\u00e1ng ch\u00e1ng de tu\u01d0\uff0c y\u00e1n zhe sh\u00f9 g\u00e0n xi\u00e0ng xi\u00e0 p\u00e1\uff0c l\u00ed xi\u01ceo c\u0101ng y\u00edng yu\u00e8 l\u00e1i yu\u00e8 j\u00ecn le\u3002",
        "sh\u01ceng w\u01d4 de t\u00e0i y\u00e1ng r\u00e8 l\u00e0 l\u00e0 d\u00ec zh\u00e0o sh\u00e8 zhe zh\u011bng g\u00e8 sh\u00f9 l\u00edn\u3002 x\u01d4 du\u014d l\u01ceo s\u014dng sh\u00f9 sh\u00e8n ch\u016b h\u00f2u h\u00f2u de s\u014dng zh\u012b\uff0c s\u014dng zh\u012b z\u00e0i t\u00e0i y\u00e1ng gu\u0101ng l\u01d0 sh\u01cen sh\u01cen d\u00ec f\u0101 ch\u016b j\u012bn hu\u00e1ng de gu\u0101ng\u3002",
        "zh\u012b zh\u016b g\u0101ng p\u016b gu\u00f2 q\u00f9\uff0c t\u016b r\u00e1n f\u0101 sh\u0113ng le y\u00ed ji\u00e0n k\u011b p\u00e0 de sh\u00ec q\u00edng\u3002 y\u00ed d\u00e0 d\u012b s\u014dng zh\u012b c\u00f3ng sh\u00f9 sh\u00e0ng d\u012b xi\u00e0 l\u00e1i\uff0c g\u0101ng h\u01ceo lu\u00f2 z\u00e0i sh\u00f9 g\u00e0n sh\u00e0ng\uff0c b\u01ce c\u0101ng y\u00edng h\u00e9 zh\u012b zh\u016b y\u00ec q\u00ed b\u0101o z\u00e0i l\u01d0 tou\u3002",
        "xi\u01ceo c\u0101ng y\u00edng b\u00f9 n\u00e9ng d\u01cen ch\u00ec b\u01ceng le\uff0c zh\u012b zh\u016b y\u011b b\u00f9 n\u00e9ng z\u00e0i xi\u01ceng sh\u00e9n me m\u011bi c\u0101n le\u3002 li\u01ceng zh\u012b xi\u01ceo ch\u00f3ng d\u014du y\u0101n m\u00f2 z\u00e0i l\u01ceo s\u014dng sh\u00f9 ni\u00e1n ch\u00f3u de hu\u00e1ng s\u00e8 l\u00e8i zh\u016b l\u01d0\u3002 t\u0101 men qi\u00e1n f\u01d4 h\u00f2u y\u01ceng d\u00ec zh\u0113ng zh\u00e1 le y\u00ec f\u0101n\uff0c zh\u014dng y\u00fa b\u00fa d\u00f2ng le\u3002",
        "s\u014dng zh\u012b j\u00ec x\u00f9 d\u012b xi\u00e0 l\u00e1i\uff0c g\u00e0i zh\u00f9 le yu\u00e1n l\u00e1i de\uff0c zu\u00ec h\u00f2u j\u012b ch\u00e9ng y\u00ed g\u00e8 s\u014dng zh\u012b qi\u00fa\uff0c b\u01ce li\u01ceng zh\u012b xi\u01ceo ch\u00f3ng ch\u00f3ng ch\u00f3ng b\u0101o gu\u01d2 z\u00e0i l\u01d0 mi\u00e0n\u3002",
        "j\u01d0 sh\u00ed ni\u00e1n\uff0c j\u01d0 b\u01cei ni\u00e1n\uff0c j\u01d0 qi\u0101n ni\u00e1n\uff0c sh\u00ed ji\u0101n y\u00ec zhu\u01cen y\u01cen ji\u00f9 gu\u00f2 q\u00f9 le\u3002 ch\u00e9ng qi\u0101n sh\u00e0ng w\u00e0n zh\u012b l\u01dc ch\u00ec b\u01ceng de c\u0101ng y\u00edng h\u00e9 b\u0101 zh\u012b ji\u01ceo de zh\u012b zh\u016b l\u00e1i le y\u00f2u q\u00f9 le\u3002 shu\u00ed y\u011b b\u00fa hu\u00ec xi\u01ceng d\u00e0o h\u011bn ji\u01d4 h\u011bn ji\u01d4 y\u01d0 qi\u00e1n\uff0c y\u01d2u li\u01ceng zh\u012b xi\u01ceo ch\u00f3ng b\u00e8i m\u00e1i z\u00e0i y\u00ed g\u00e8 s\u014dng zh\u012b qi\u00fa l\u01d0\uff0c gu\u00e0 z\u00e0i y\u00ec k\u0113 l\u01ceo s\u014dng sh\u00f9 sh\u00e0ng\u3002",
        "h\u00f2u l\u00e1i\uff0c l\u00f9 d\u00ec ji\u00e0n ji\u00e0n ch\u00e9n xi\u00e0 q\u00f9\uff0c h\u01cei shu\u01d0 ji\u00e0n ji\u00e0n m\u00e0n sh\u00e0ng l\u00e1i\uff0c b\u012b j\u00ecn n\u00e0 g\u01d4 l\u01ceo de s\u0113n l\u00edn\u3002 y\u01d2u y\u00ec ti\u0101n\uff0c shu\u01d0 b\u01ce s\u0113n l\u00edn y\u0101n m\u00f2 le\uff0c b\u014d l\u00e0ng b\u00fa du\u00e0n ch\u014dng shu\u0101 zhe sh\u00f9 g\u00e0n\uff0c sh\u00e8n zh\u00ec b\u01ce sh\u00f9 li\u00e1n g\u0113n b\u00e1 q\u01d0\u3002 sh\u00f9 du\u00e0n ju\u00e9 le sh\u0113ng j\u012b\uff0c m\u00e0n m\u00e0n d\u00ec f\u01d4 l\u00e0n le\uff0c sh\u00e8ng xi\u00e0 de zh\u01d0 y\u01d2u n\u00e0 xi\u0113 s\u014dng zh\u012b qi\u00fa\uff0c y\u0101n m\u00f2 z\u00e0i n\u00ed sh\u0101 xi\u00e0 mi\u00e0n\u3002",
        "y\u00f2u sh\u00ec j\u01d0 qi\u0101n ni\u00e1n gu\u00f2 q\u00f9 le\uff0c n\u00e0 xi\u0113 s\u014dng zh\u012b qi\u00fa ch\u00e9ng le hu\u00e0 sh\u00ed\u3002",
        "h\u01cei f\u0113ng m\u011bng li\u00e8 d\u00ec chu\u012b\uff0c p\u00e9ng p\u00e0i de b\u014d t\u0101o b\u01ce h\u01cei l\u01d0 de n\u00ed sh\u0101 ju\u00e0n d\u00e0o \u00e0n bi\u0101n\u3002 y\u01d2u g\u00e8 y\u00fa m\u00edn d\u00e0i zhe \u00e9r zi z\u01d2u gu\u00f2 h\u01cei t\u0101n\u3002 n\u00e0 h\u00e1i zi ch\u00ec zhe ji\u01ceo\uff0c t\u0101 c\u01cei zhe le sh\u0101 l\u01d0 de y\u00ed ku\u00e0i y\u00ecng d\u014dng x\u012b\uff0c ji\u00f9 b\u01ce t\u0101 w\u0101 le ch\u016b l\u00e1i\u3002",
        "\u201c b\u00e0 ba\uff0c n\u01d0 k\u00e0n\uff01 \u201d t\u0101 ku\u00e0i hu\u00f3 d\u00ec ji\u00e0o q\u01d0 l\u00e1i\uff0c \u201c zh\u00e8 sh\u00ec sh\u00e9n me\uff1f \u201d",
        "t\u0101 b\u00e0 ba ji\u0113 gu\u00f2 l\u00e1i\uff0c z\u01d0 x\u00ec k\u00e0n le k\u00e0n\u3002",
        "\u201c zh\u00e8 sh\u00ec h\u01d4 p\u00f2\uff0c h\u00e1i zi\u3002 \u201d t\u0101 g\u0101o x\u00ecng d\u00ec shu\u014d\uff0c \u201c y\u01d2u li\u01ceng g\u00e8 xi\u01ceo d\u014dng x\u012b gu\u0101n z\u00e0i l\u01d0 mi\u00e0n ne\uff0c y\u00ec zh\u012b c\u0101ng y\u00edng\uff0c y\u00ed g\u00e8 zh\u012b zh\u016b\u3002 zh\u00e8 sh\u00ec h\u011bn sh\u01ceo ji\u00e0n de\u3002 \u201d",
        "z\u00e0i n\u00e0 ku\u00e0i t\u00f2u m\u00edng de h\u01d4 p\u00f2 l\u01d0\uff0c li\u01ceng g\u00e8 xi\u01ceo d\u014dng x\u012b r\u00e9ng ji\u00f9 h\u01ceo h\u01ceo d\u00ec t\u01ceng zhe\u3002 w\u01d2 men k\u011b y\u01d0 k\u00e0n ji\u00e0n t\u0101 men sh\u0113n sh\u00e0ng de m\u011bi y\u00ec g\u0113n h\u00e1o m\u00e1o\uff0c h\u00e1i k\u011b y\u01d0 xi\u01ceng xi\u00e0ng t\u0101 men d\u0101ng sh\u00ed z\u00e0i ni\u00e1n ch\u00f3u de s\u014dng zh\u012b l\u01d0 z\u011bn y\u00e0ng zh\u0113ng zh\u00e1\uff0c y\u012bn w\u00e8i t\u0101 men de tu\u01d0 de s\u00ec zh\u014du xi\u01cen ch\u016b h\u01ceo j\u01d0 qu\u0101n h\u0113i s\u00e8 de yu\u00e1n hu\u00e1n\u3002 c\u00f3ng n\u00e0 ku\u00e0i h\u01d4 p\u00f2\uff0c w\u01d2 men k\u011b y\u01d0 tu\u012b c\u00e8 f\u0101 sh\u0113ng z\u00e0i j\u01d0 w\u00e0n ni\u00e1n qi\u00e1n de g\u00f9 sh\u00ec de xi\u00e1ng x\u00ec q\u00edng x\u00edng\uff0c b\u00ecng qi\u011b k\u011b y\u01d0 zh\u012b d\u00e0o\uff0c z\u00e0i yu\u01cen g\u01d4 sh\u00ed d\u00e0i\uff0c sh\u00ec ji\u00e8 sh\u00e0ng ji\u00f9 y\u01d0 j\u012bng y\u01d2u c\u0101ng y\u00edng h\u00e9 zh\u012b zh\u016b le\u3002"
      ],
      recognizeChars: ["琥","珀","嗡","脂","拭","渗","俯","扎","番","埋","澎","湃"],
      writeChars: ["怒","吼","脂","拭","餐","划","晌","辣","渗","挣","番","埋","刷","测","详"],
      vocabWords: [
        {word:'琥珀',pinyin:'hǔ pò',en:'amber',sentence:'这是一块琥珀。',sentenceEn:'This is a piece of amber.'},
        {word:'松脂',pinyin:'sōng zhī',en:'pine resin',sentence:'一大滴松脂滴落下来。',sentenceEn:'A big drop of pine resin fell down.'},
        {word:'推测',pinyin:'tuī cè',en:'deduce',sentence:'科学家推测故事的经过。',sentenceEn:'Scientists deduced the story.'},
        {word:'化石',pinyin:'huà shí',en:'fossil',sentence:'琥珀是一种化石。',sentenceEn:'Amber is a type of fossil.'},
        {word:'挣扎',pinyin:'zhēng zhá',en:'struggle',sentence:'蜘蛛和苍蝇挣扎着。',sentenceEn:'The spider and fly struggled.'}
      ],
      footnotes: [
        {term:"\u7425\u73c0", termEn:"amber", definition:"\u3010h\u01d4 p\u00f2\u3011amber\u3002", definitionEn:"amber"},
        {term:"\u677e\u8102", termEn:"pine resin", definition:"\u3010s\u014dng zh\u012b\u3011pine resin\u3002", definitionEn:"pine resin"},
        {term:"\u63a8\u6d4b", termEn:"deduce", definition:"\u3010tu\u012b c\u00e8\u3011deduce\u3002", definitionEn:"deduce"},
        {term:"\u5316\u77f3", termEn:"fossil", definition:"\u3010hu\u00e0 sh\u00ed\u3011fossil\u3002", definitionEn:"fossil"},
        {term:"\u6323\u624e", termEn:"struggle", definition:"\u3010zh\u0113ng zh\u00e1\u3011struggle\u3002", definitionEn:"struggle"}
      ],
      readingTips: [
        {cn:"\u8fd9\u7bc7\u6587\u7ae0\u8f83\u957f\uff0c\u5efa\u8bae\u5206\u6bb5\u9605\u8bfb\u3002\u6bcf\u8bfb\u5b8c\u4e00\u6bb5\uff0c\u505c\u4e0b\u6765\u60f3\u60f3\u8fd9\u6bb5\u7684\u4e3b\u8981\u5185\u5bb9\u3002", en:"This is a longer text. Read it paragraph by paragraph, pausing after each to think about the main idea."},
        {cn:"\u8bfb\u5b8c\u5168\u6587\u540e\uff0c\u8bd5\u7740\u7528\u4e00\u53e5\u8bdd\u6982\u62ec\u6587\u7ae0\u7684\u4e2d\u5fc3\u601d\u60f3\u3002", en:"After reading the whole text, try to summarize the central idea in one sentence."}
      ],
      grammarPoints: [
        {point:'推理',pointEn:'tuī lǐ',example:'reasoning',exampleEn:'从已知信息推测未知事物',explanation:'Deduce unknown from known information',explanationEn:'根据事实合理推理的方法'}
      ],
      exercises: [
        {type:"read",cn:"默读课文，提出不懂的问题，并试着解决",en:"Read silently, raise questions you don\u2019t understand, and try to answer them"},
        {type:"discuss",cn:"用自己的话说说这块琥珀形成的过程",en:"Describe the process of amber formation in your own words"},
        {type:"think",cn:"\u201C推测\u201D是什么意思？联系琥珀形成的过程，说说推测的依据是什么",en:"What does \u2018deduce\u2019 mean? Based on the amber formation process, explain the basis for the deduction"}
      ],
      teachingPoints: [
        {cn:"学习提出不懂的问题并尝试解决的阅读方法",en:"Learn the reading strategy of raising questions and trying to solve them"},
        {cn:"理解科学推测的依据，体会科学思维在叙事中的运用",en:"Understand the basis for scientific reasoning and how it is applied in narrative"}
      ],
      parentTips: [
        {cn:"和孩子一起探讨化石形成的过程，激发对科学的兴趣",en:"Discuss the process of fossil formation with your child to spark scientific curiosity"},
        {cn:"鼓励孩子提出问题并通过查阅资料寻找答案",en:"Encourage your child to ask questions and search for answers through research"}
      ]
    },
    {
      id: 6, title: "飞向蓝天的恐龙", titleEn: "Dinosaurs That Flew to the Blue Sky",
      difficulty: 2,
      text: [
        "说到恐龙，人们往往想到凶猛的霸王龙或者笨重、迟钝的马门溪龙；谈起鸟类，我们头脑中自然会浮现轻灵的鸽子或者五彩斑斓的孔雀。二者似乎毫不相干，但近年来发现的大量化石显示：在中生代时期，恐龙的一支经过漫长的演化，最终变成了凌空翱翔的鸟儿。",
        "早在19世纪，英国学者赫胥黎就注意到恐龙和鸟类在骨骼结构上有许多相似之处。在研究了大量恐龙和鸟类化石之后，科学家们提出，鸟类不仅和恐龙有亲缘关系，而且很可能就是一种小型恐龙的后裔。根据这一假说，一些与鸟类亲缘关系较近的恐龙应该长有羽毛，但一直没有找到化石证据。20世纪末期，我国科学家在辽宁西部首次发现了保存有羽毛的恐龙化石，顿时使全世界的研究者们欣喜若狂。辽西的发现向世人展示了恐龙长羽毛的证据，给这幅古生物学家们描绘的画卷涂上了点睛之笔。",
        "恐龙是如何飞向蓝天的呢？让我们穿越时空隧道，访问中生代的地球，看看这一演化过程吧！",
        "地球上的第一种恐龙大约出现在两亿四千万年前。它和狗一般大小，两条后腿粗壮有力，能够支撑起整个身体。数千万年后，它的后代繁衍成一个形态各异的庞大家族。有些恐龙像它们的祖先一样用两足奔跑，有些恐龙则用四足行走。有些恐龙身长几十米，重达数十吨；有些恐龙则身材小巧，体重只有几千克。有些恐龙凶猛异常，是茹毛饮血的食肉动物；有些恐龙则温顺可爱，以植物为食。其中，一些猎食性恐龙的身体逐渐变小，越来越像鸟类：骨骼中空，身体轻盈；脑颅膨大，行动敏捷；前肢越来越长，能像鸟翼一样拍打；体表长出美丽的羽毛，不再披着鳞片或鳞甲。它们中的一些种类可能为了躲避敌害或寻找食物而转移到树上生存。这些树栖的恐龙在树木之间跳跃、降落，慢慢具备了滑翔能力，并最终能够主动飞行。不过，另一种看法是，飞行并非始于树栖生活。有些科学家推测，一种生活在地面上的带羽毛的恐龙，在奔跑过程中学会了飞翔。不管怎样，科学家们认为：原本不会飞的恐龙最终变成了天之骄子——鸟类，它们飞向了蓝天，从此开辟了崭新的生活天地。",
        "亿万年前，一种带羽毛的恐龙脱离同类，飞向蓝天，演化出今天的鸟类大家族。科学家们希望能够全面揭示这一历史进程。随着越来越多相关化石的发现，他们离这一愿望的实现已越来越近了。"
      ],
      textEn: [
        "When we think of dinosaurs, we picture the fierce Tyrannosaurus rex or the lumbering, slow Mamenchisaurus. When we think of birds, we imagine nimble pigeons or brilliantly colored peacocks. The two seem unrelated, yet fossils show that during the Mesozoic era, one branch of dinosaurs evolved over eons into birds soaring through the sky.",
        "As early as the 19th century, British scholar Thomas Huxley noticed many skeletal similarities between dinosaurs and birds. After studying numerous fossils, scientists proposed that birds are not only related to dinosaurs but are likely descendants of a small dinosaur species. According to this hypothesis, some dinosaurs closely related to birds should have had feathers \u2014 but no fossil evidence had been found. In the late 20th century, Chinese scientists in western Liaoning discovered the first feathered dinosaur fossils, causing worldwide excitement. The Liaoning discovery provided the crucial evidence of feathered dinosaurs, adding the finishing touch to the picture paleontologists had been painting.",
        "How did dinosaurs fly to the sky? Let us travel through time to the Mesozoic Earth and see the evolutionary process!",
        "The first dinosaurs appeared about 240 million years ago, roughly dog-sized with powerful hind legs. Over tens of millions of years, their descendants diversified into a vast family of varied forms: some ran on two legs, others walked on four; some were tens of meters long and weighed dozens of tons, others were tiny at just a few kilograms; some were fierce carnivores, others gentle herbivores. Among them, certain predatory dinosaurs gradually grew smaller and more bird-like: hollow bones, light bodies, enlarged skulls, agile movements, lengthening forelimbs that could flap like wings, and beautiful feathers replacing scales. Some may have moved to trees to escape predators or find food. These tree-dwelling dinosaurs jumped between branches, gradually developing gliding ability, and eventually powered flight. Others theorize that flight did not begin in trees \u2014 some feathered ground-dwelling dinosaurs may have learned to fly while running. Regardless, scientists believe flightless dinosaurs ultimately became birds, taking to the sky and opening an entirely new realm of life.",
        "Hundreds of millions of years ago, a feathered dinosaur separated from its kin, flew skyward, and evolved into today\u2019s great family of birds. Scientists hope to fully reveal this historical process, and with ever more fossil discoveries, they are getting closer to that goal."
      ],
      textPinyin: [
        "shu\u014d d\u00e0o k\u01d2ng l\u00f3ng\uff0c r\u00e9n men w\u01ceng w\u01ceng xi\u01ceng d\u00e0o xi\u014dng m\u011bng de b\u00e0 w\u00e1ng l\u00f3ng hu\u00f2 zh\u011b b\u00e8n zh\u00f2ng\u3001 ch\u00ed d\u00f9n de m\u01ce m\u00e9n x\u012b l\u00f3ng\uff1b t\u00e1n q\u01d0 ni\u01ceo l\u00e8i\uff0c w\u01d2 men t\u00f3u n\u01ceo zh\u014dng z\u00ec r\u00e1n hu\u00ec f\u00fa xi\u00e0n q\u012bng l\u00edng de g\u0113 zi hu\u00f2 zh\u011b w\u01d4 c\u01cei b\u0101n l\u00e1n de k\u01d2ng qu\u00e8\u3002 \u00e8r zh\u011b s\u00ec h\u016b h\u00e1o b\u00f9 xi\u0101ng g\u0101n\uff0c d\u00e0n j\u00ecn ni\u00e1n l\u00e1i f\u0101 xi\u00e0n de d\u00e0 li\u00e0ng hu\u00e0 sh\u00ed xi\u01cen sh\u00ec\uff1a z\u00e0i zh\u014dng sh\u0113ng d\u00e0i sh\u00ed q\u012b\uff0c k\u01d2ng l\u00f3ng de y\u00ec zh\u012b j\u012bng gu\u00f2 m\u00e0n ch\u00e1ng de y\u01cen hu\u00e0\uff0c zu\u00ec zh\u014dng bi\u00e0n ch\u00e9ng le l\u00edng k\u014dng \u00e1o xi\u00e1ng de ni\u01ceo \u00e9r\u3002",
        "z\u01ceo z\u00e0i 1 9 sh\u00ec j\u00ec\uff0c y\u012bng gu\u00f3 xu\u00e9 zh\u011b h\u00e8 x\u016b l\u00ed ji\u00f9 zh\u00f9 y\u00ec d\u00e0o k\u01d2ng l\u00f3ng h\u00e9 ni\u01ceo l\u00e8i z\u00e0i g\u01d4 g\u00e9 ji\u00e9 g\u00f2u sh\u00e0ng y\u01d2u x\u01d4 du\u014d xi\u0101ng s\u00ec zh\u012b ch\u00f9\u3002 z\u00e0i y\u00e1n ji\u016b le d\u00e0 li\u00e0ng k\u01d2ng l\u00f3ng h\u00e9 ni\u01ceo l\u00e8i hu\u00e0 sh\u00ed zh\u012b h\u00f2u\uff0c k\u0113 xu\u00e9 ji\u0101 men t\u00ed ch\u016b\uff0c ni\u01ceo l\u00e8i b\u00f9 j\u01d0n h\u00e9 k\u01d2ng l\u00f3ng y\u01d2u q\u012bn yu\u00e1n gu\u0101n x\u00ec\uff0c \u00e9r qi\u011b h\u011bn k\u011b n\u00e9ng ji\u00f9 sh\u00ec y\u00ec zh\u01d2ng xi\u01ceo x\u00edng k\u01d2ng l\u00f3ng de h\u00f2u y\u00ec\u3002 g\u0113n j\u00f9 zh\u00e8 y\u00ec ji\u01ce shu\u014d\uff0c y\u00ec xi\u0113 y\u01d4 ni\u01ceo l\u00e8i q\u012bn yu\u00e1n gu\u0101n x\u00ec ji\u00e0o j\u00ecn de k\u01d2ng l\u00f3ng y\u012bng g\u0101i ch\u00e1ng y\u01d2u y\u01d4 m\u00e1o\uff0c d\u00e0n y\u00ec zh\u00ed m\u00e9i y\u01d2u zh\u01ceo d\u00e0o hu\u00e0 sh\u00ed zh\u00e8ng j\u00f9\u3002 2 0 sh\u00ec j\u00ec m\u00f2 q\u012b\uff0c w\u01d2 gu\u00f3 k\u0113 xu\u00e9 ji\u0101 z\u00e0i li\u00e1o n\u00edng x\u012b b\u00f9 sh\u01d2u c\u00ec f\u0101 xi\u00e0n le b\u01ceo c\u00fan y\u01d2u y\u01d4 m\u00e1o de k\u01d2ng l\u00f3ng hu\u00e0 sh\u00ed\uff0c d\u00f9n sh\u00ed sh\u01d0 qu\u00e1n sh\u00ec ji\u00e8 de y\u00e1n ji\u016b zh\u011b men x\u012bn x\u01d0 ru\u00f2 ku\u00e1ng\u3002 li\u00e1o x\u012b de f\u0101 xi\u00e0n xi\u00e0ng sh\u00ec r\u00e9n zh\u01cen sh\u00ec le k\u01d2ng l\u00f3ng ch\u00e1ng y\u01d4 m\u00e1o de zh\u00e8ng j\u00f9\uff0c g\u011bi zh\u00e8 f\u00fa g\u01d4 sh\u0113ng w\u00f9 xu\u00e9 ji\u0101 men mi\u00e1o hu\u00ec de hu\u00e0 ju\u00e0n t\u00fa sh\u00e0ng le di\u01cen j\u012bng zh\u012b b\u01d0\u3002",
        "k\u01d2ng l\u00f3ng sh\u00ec r\u00fa h\u00e9 f\u0113i xi\u00e0ng l\u00e1n ti\u0101n de ne\uff1f r\u00e0ng w\u01d2 men chu\u0101n yu\u00e8 sh\u00ed k\u014dng su\u00ec d\u00e0o\uff0c f\u01ceng w\u00e8n zh\u014dng sh\u0113ng d\u00e0i de d\u00ec qi\u00fa\uff0c k\u00e0n k\u00e0n zh\u00e8 y\u00ec y\u01cen hu\u00e0 gu\u00f2 ch\u00e9ng ba\uff01",
        "d\u00ec qi\u00fa sh\u00e0ng de d\u00ec y\u012b zh\u01d2ng k\u01d2ng l\u00f3ng d\u00e0 yu\u0113 ch\u016b xi\u00e0n z\u00e0i li\u01ceng y\u00ec s\u00ec qi\u0101n w\u00e0n ni\u00e1n qi\u00e1n\u3002 t\u0101 h\u00e9 g\u01d2u y\u00ec b\u0101n d\u00e0 xi\u01ceo\uff0c li\u01ceng ti\u00e1o h\u00f2u tu\u01d0 c\u016b zhu\u00e0ng y\u01d2u l\u00ec\uff0c n\u00e9ng g\u00f2u zh\u012b ch\u0113ng q\u01d0 zh\u011bng g\u00e8 sh\u0113n t\u01d0\u3002 sh\u00f9 qi\u0101n w\u00e0n ni\u00e1n h\u00f2u\uff0c t\u0101 de h\u00f2u d\u00e0i f\u00e1n y\u01cen ch\u00e9ng y\u00ed g\u00e8 x\u00edng t\u00e0i g\u00e8 y\u00ec de p\u00e1ng d\u00e0 ji\u0101 z\u00fa\u3002 y\u01d2u xi\u0113 k\u01d2ng l\u00f3ng xi\u00e0ng t\u0101 men de z\u01d4 xi\u0101n y\u00ed y\u00e0ng y\u00f2ng li\u01ceng z\u00fa b\u0113n p\u01ceo\uff0c y\u01d2u xi\u0113 k\u01d2ng l\u00f3ng z\u00e9 y\u00f2ng s\u00ec z\u00fa x\u00edng z\u01d2u\u3002 y\u01d2u xi\u0113 k\u01d2ng l\u00f3ng sh\u0113n ch\u00e1ng j\u01d0 sh\u00ed m\u01d0\uff0c zh\u00f2ng d\u00e1 sh\u00f9 sh\u00ed d\u016bn\uff1b y\u01d2u xi\u0113 k\u01d2ng l\u00f3ng z\u00e9 sh\u0113n c\u00e1i xi\u01ceo qi\u01ceo\uff0c t\u01d0 zh\u00f2ng zh\u012b y\u01d2u j\u01d0 qi\u0101n k\u00e8\u3002 y\u01d2u xi\u0113 k\u01d2ng l\u00f3ng xi\u014dng m\u011bng y\u00ec ch\u00e1ng\uff0c sh\u00ec r\u00fa m\u00e1o y\u01d0n xu\u00e8 de sh\u00ed r\u00f2u d\u00f2ng w\u00f9\uff1b y\u01d2u xi\u0113 k\u01d2ng l\u00f3ng z\u00e9 w\u0113n sh\u00f9n k\u011b \u00e0i\uff0c y\u01d0 zh\u00ed w\u00f9 w\u00e8i sh\u00ed\u3002 q\u00ed zh\u014dng\uff0c y\u00ec xi\u0113 li\u00e8 sh\u00ed x\u00ecng k\u01d2ng l\u00f3ng de sh\u0113n t\u01d0 zh\u00fa ji\u00e0n bi\u00e0n xi\u01ceo\uff0c yu\u00e8 l\u00e1i yu\u00e8 xi\u00e0ng ni\u01ceo l\u00e8i\uff1a g\u01d4 g\u00e9 zh\u014dng k\u014dng\uff0c sh\u0113n t\u01d0 q\u012bng y\u00edng\uff1b n\u01ceo l\u00fa p\u00e9ng d\u00e0\uff0c x\u00edng d\u00f2ng m\u01d0n ji\u00e9\uff1b qi\u00e1n zh\u012b yu\u00e8 l\u00e1i yu\u00e8 ch\u00e1ng\uff0c n\u00e9ng xi\u00e0ng ni\u01ceo y\u00ec y\u00ed y\u00e0ng p\u0101i d\u01ce\uff1b t\u01d0 bi\u01ceo ch\u00e1ng ch\u016b m\u011bi l\u00ec de y\u01d4 m\u00e1o\uff0c b\u00fa z\u00e0i p\u012b zhe l\u00edn pi\u00e0n hu\u00f2 l\u00edn ji\u01ce\u3002 t\u0101 men zh\u014dng de y\u00ec xi\u0113 zh\u01d2ng l\u00e8i k\u011b n\u00e9ng w\u00e8i le du\u01d2 b\u00ec d\u00ed h\u00e0i hu\u00f2 x\u00fan zh\u01ceo sh\u00ed w\u00f9 \u00e9r zhu\u01cen y\u00ed d\u00e0o sh\u00f9 sh\u00e0ng sh\u0113ng c\u00fan\u3002 zh\u00e8 xi\u0113 sh\u00f9 q\u012b de k\u01d2ng l\u00f3ng z\u00e0i sh\u00f9 m\u00f9 zh\u012b ji\u0101n ti\u00e0o yu\u00e8\u3001 ji\u00e0ng lu\u00f2\uff0c m\u00e0n m\u00e0n j\u00f9 b\u00e8i le hu\u00e1 xi\u00e1ng n\u00e9ng l\u00ec\uff0c b\u00ecng zu\u00ec zh\u014dng n\u00e9ng g\u00f2u zh\u01d4 d\u00f2ng f\u0113i x\u00edng\u3002 b\u00fa gu\u00f2\uff0c l\u00ecng y\u00ec zh\u01d2ng k\u00e0n f\u01ce sh\u00ec\uff0c f\u0113i x\u00edng b\u00ecng f\u0113i sh\u01d0 y\u00fa sh\u00f9 q\u012b sh\u0113ng hu\u00f3\u3002 y\u01d2u xi\u0113 k\u0113 xu\u00e9 ji\u0101 tu\u012b c\u00e8\uff0c y\u00ec zh\u01d2ng sh\u0113ng hu\u00f3 z\u00e0i d\u00ec mi\u00e0n sh\u00e0ng de d\u00e0i y\u01d4 m\u00e1o de k\u01d2ng l\u00f3ng\uff0c z\u00e0i b\u0113n p\u01ceo gu\u00f2 ch\u00e9ng zh\u014dng xu\u00e9 hu\u00ec le f\u0113i xi\u00e1ng\u3002 b\u00f9 gu\u01cen z\u011bn y\u00e0ng\uff0c k\u0113 xu\u00e9 ji\u0101 men r\u00e8n w\u00e9i\uff1a yu\u00e1n b\u011bn b\u00fa hu\u00ec f\u0113i de k\u01d2ng l\u00f3ng zu\u00ec zh\u014dng bi\u00e0n ch\u00e9ng le ti\u0101n zh\u012b ji\u0101o z\u01d0\u2014\u2014 ni\u01ceo l\u00e8i\uff0c t\u0101 men f\u0113i xi\u00e0ng le l\u00e1n ti\u0101n\uff0c c\u00f3ng c\u01d0 k\u0101i p\u00ec le zh\u01cen x\u012bn de sh\u0113ng hu\u00f3 ti\u0101n d\u00ec\u3002",
        "y\u00ec w\u00e0n ni\u00e1n qi\u00e1n\uff0c y\u00ec zh\u01d2ng d\u00e0i y\u01d4 m\u00e1o de k\u01d2ng l\u00f3ng tu\u014d l\u00ed t\u00f3ng l\u00e8i\uff0c f\u0113i xi\u00e0ng l\u00e1n ti\u0101n\uff0c y\u01cen hu\u00e0 ch\u016b j\u012bn ti\u0101n de ni\u01ceo l\u00e8i d\u00e0 ji\u0101 z\u00fa\u3002 k\u0113 xu\u00e9 ji\u0101 men x\u012b w\u00e0ng n\u00e9ng g\u00f2u qu\u00e1n mi\u00e0n ji\u0113 sh\u00ec zh\u00e8 y\u00ed l\u00ec sh\u01d0 j\u00ecn ch\u00e9ng\u3002 su\u00ed zhe yu\u00e8 l\u00e1i yu\u00e8 du\u014d xi\u0101ng gu\u0101n hu\u00e0 sh\u00ed de f\u0101 xi\u00e0n\uff0c t\u0101 men l\u00ed zh\u00e8 y\u00ed yu\u00e0n w\u00e0ng de sh\u00ed xi\u00e0n y\u01d0 yu\u00e8 l\u00e1i yu\u00e8 j\u00ecn le\u3002"
      ],
      recognizeChars: ["钝","仅","描","隧","衍","吨","颅","膨","捷","栖","辟","崭"],
      writeChars: ["笨","钝","鸽","毫","凌","末","描","隧","态","吨","颅","膨","肢","翼","辟"],
      vocabWords: [
        {word:'恐龙',pinyin:'kǒng lóng',en:'dinosaur',sentence:'恐龙飞向蓝天。',sentenceEn:'Dinosaurs flew to the blue sky.'},
        {word:'演化',pinyin:'yǎn huà',en:'evolve',sentence:'恐龙演化成了鸟类。',sentenceEn:'Dinosaurs evolved into birds.'},
        {word:'繁衍',pinyin:'fán yǎn',en:'reproduce',sentence:'恐龙大量繁衍。',sentenceEn:'Dinosaurs reproduced abundantly.'},
        {word:'轻盈',pinyin:'qīng yíng',en:'light; graceful',sentence:'身体变得轻盈。',sentenceEn:'Bodies became light and graceful.'},
        {word:'翱翔',pinyin:'áo xiáng',en:'soar',sentence:'鸟儿在天空翱翔。',sentenceEn:'Birds soar in the sky.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u8bf4\u5230\u6050\u9f99\uff0c\u4eba\u4eec\u5f80\u5f80\u60f3\u5230\u51f6\u731b\u7684\u9738\u738b\u9f99\u6216\u8005\u7b28\u91cd\u3001\u8fdf\u949d\u7684\u9a6c\u95e8\u6eaa\u9f99\uff1b\u2026", exampleEn: "When we think of dinosaurs, we picture the fierce Tyrannosaurus rex or the lumbe", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u4e0d\u4f46\u2026\u2026\u800c\u4e14\u2026\u2026", pointEn: "not only...but also...", example: "\u8bf4\u5230\u6050\u9f99\uff0c\u4eba\u4eec\u5f80\u5f80\u60f3\u5230\u51f6\u731b\u7684\u9738\u738b\u9f99\u6216\u8005\u7b28\u91cd\u3001\u8fdf\u949d\u7684\u9a6c\u95e8\u6eaa\u9f99\uff1b\u2026", exampleEn: "When we think of dinosaurs, we picture the fierce Tyrannosaurus rex or the lumbe", explanation: "\u9012\u8fdb\u590d\u53e5\uff0c\u540e\u4e00\u5206\u53e5\u6bd4\u524d\u4e00\u5206\u53e5\u7a0b\u5ea6\u66f4\u6df1", explanationEn: "Progressive compound sentence where the second clause goes further than the first"}
      ],
      footnotes: [
        {term:"\u6050\u9f99", termEn:"dinosaur", definition:"\u3010k\u01d2ng l\u00f3ng\u3011dinosaur\u3002", definitionEn:"dinosaur"},
        {term:"\u6f14\u5316", termEn:"evolve", definition:"\u3010y\u01cen hu\u00e0\u3011evolve\u3002", definitionEn:"evolve"},
        {term:"\u7e41\u884d", termEn:"reproduce", definition:"\u3010f\u00e1n y\u01cen\u3011reproduce\u3002", definitionEn:"reproduce"},
        {term:"\u8f7b\u76c8", termEn:"light; graceful", definition:"\u3010q\u012bng y\u00edng\u3011light; graceful\u3002", definitionEn:"light; graceful"},
        {term:"\u7ff1\u7fd4", termEn:"soar", definition:"\u3010\u00e1o xi\u00e1ng\u3011soar\u3002", definitionEn:"soar"}
      ],
      readingTips: [
        {cn:"\u8fd9\u7bc7\u6587\u7ae0\u8f83\u957f\uff0c\u5efa\u8bae\u5206\u6bb5\u9605\u8bfb\u3002\u6bcf\u8bfb\u5b8c\u4e00\u6bb5\uff0c\u505c\u4e0b\u6765\u60f3\u60f3\u8fd9\u6bb5\u7684\u4e3b\u8981\u5185\u5bb9\u3002", en:"This is a longer text. Read it paragraph by paragraph, pausing after each to think about the main idea."},
        {cn:"\u8bfb\u5b8c\u5168\u6587\u540e\uff0c\u8bd5\u7740\u7528\u4e00\u53e5\u8bdd\u6982\u62ec\u6587\u7ae0\u7684\u4e2d\u5fc3\u601d\u60f3\u3002", en:"After reading the whole text, try to summarize the central idea in one sentence."}
      ],
      exercises: [
        {type:"read",cn:"默读课文，把不懂的问题写下来，并试着解决",en:"Read silently, write down questions you don\u2019t understand, and try to solve them"},
        {type:"discuss",cn:"假如你是一个解说员，会怎样简明扼要地介绍恐龙飞向蓝天、演化成鸟类的过程？",en:"If you were a narrator, how would you briefly explain how dinosaurs evolved into birds?"},
        {type:"write",cn:"课文中的不少语句表达很准确，找出这样的语句读一读，说说自己的体会",en:"Find precisely worded sentences in the text, read them, and share your thoughts"}
      ],
      teachingPoints: [
        {cn:"学习科普文中准确表达的语言特点，如\u201C大约\u201D\u201C可能\u201D等词语的作用",en:"Learn the precise language features of popular science writing, such as the function of words like \u2018approximately\u2019 and \u2018possibly\u2019"},
        {cn:"了解恐龙演化成鸟类的科学假说，培养科学思维",en:"Understand the scientific hypothesis of dinosaur-to-bird evolution and develop scientific thinking"}
      ],
      parentTips: [
        {cn:"和孩子一起看恐龙相关的纪录片或书籍，加深对课文的理解",en:"Watch dinosaur documentaries or read related books together to deepen understanding"},
        {cn:"引导孩子注意科普文中\u201C大约\u201D\u201C可能\u201D等词语的严谨表达",en:"Help your child notice the precise use of words like \u2018approximately\u2019 and \u2018possibly\u2019 in science writing"}
      ]
    },
    {
      id: 7, title: "纳米技术就在我们身边", titleEn: "Nanotechnology Is Around Us",
      difficulty: 2,
      text: [
        "纳米技术是20世纪90年代兴起的高新技术。如果说20世纪是微米的世纪，21世纪必将是纳米的世纪。",
        "什么是纳米技术呢？这得从纳米说起。纳米是非常非常小的长度单位，1纳米等于十亿分之一米。如果把直径为1纳米的小球放到乒乓球上，就好像把乒乓球放在地球上，可见纳米有多么小。纳米技术的研究对象一般在1纳米到100纳米之间，不仅肉眼根本看不见，就是普通的光学显微镜也无能为力。这种纳米级的物质拥有许多新奇的特性，纳米技术就是研究并利用这些特性造福人类的一门学问。",
        "纳米技术就在我们身边。冰箱里如果使用一种纳米涂层，就会具有杀菌和除臭功能，能够使蔬菜保鲜期更长。有一种叫作\u201C碳纳米管\u201D的神奇材料，比钢铁结实百倍，而且非常轻，将来我们有可能坐上\u201C碳纳米管天梯\u201D到太空旅行。在最先进的隐形战机上，用到一种纳米吸波材料，能够把探测雷达波吸收掉，所以雷达根本看不见它。",
        "纳米技术可以让人们更加健康。癌症很可怕，但如果在只有几个癌细胞的时候就能发现的话，死亡率会大大降低。利用极其灵敏的纳米检测技术，可以实现疾病的早期检测与预防。未来的纳米机器人甚至可以通过血管直达病灶，杀死癌细胞。生病的时候，需要吃药。现在吃一次药最多管一两天，未来的纳米缓释技术，能够让药物效力缓慢地释放出来，服一次药可以管一周，甚至一个月。",
        "纳米技术将给人类的生活带来深刻的变化。在不远的将来，我们的衣食住行都会有纳米技术的影子。"
      ],
      textEn: [
        "Nanotechnology is a high-tech field that emerged in the 1990s. If the 20th century was the century of micrometers, the 21st will surely be the century of nanometers.",
        "What is nanotechnology? It starts with the nanometer \u2014 an extremely tiny unit of length: one billionth of a meter. Placing a 1-nanometer ball on a ping-pong ball is like placing a ping-pong ball on the Earth \u2014 that\u2019s how small a nanometer is. Nanotechnology studies objects between 1 and 100 nanometers, invisible to the naked eye and even to ordinary optical microscopes. These nano-scale materials have many remarkable properties, and nanotechnology is the science of harnessing these properties for humanity\u2019s benefit.",
        "Nanotechnology is all around us. A nano-coating in your refrigerator can kill bacteria and remove odors, keeping vegetables fresh longer. A miraculous material called \u2018carbon nanotubes\u2019 is a hundred times stronger than steel yet extremely light \u2014 someday we may ride a \u2018carbon nanotube elevator\u2019 to space. The most advanced stealth aircraft use nano wave-absorbing materials that swallow radar signals, making the plane invisible to radar.",
        "Nanotechnology can make people healthier. Cancer is frightening, but if detected when only a few cancer cells exist, survival rates soar. Ultra-sensitive nano-detection technology enables early disease screening and prevention. Future nano-robots could even travel through blood vessels directly to diseased tissue to destroy cancer cells. Currently, one dose of medicine lasts a day or two; future nano slow-release technology could make a single dose last a week or even a month.",
        "Nanotechnology will profoundly change human life. In the near future, our food, clothing, housing, and transportation will all bear the imprint of nanotechnology."
      ],
      textPinyin: [
        "n\u00e0 m\u01d0 j\u00ec sh\u00f9 sh\u00ec 2 0 sh\u00ec j\u00ec 9 0 ni\u00e1n d\u00e0i x\u012bng q\u01d0 de g\u0101o x\u012bn j\u00ec sh\u00f9\u3002 r\u00fa gu\u01d2 shu\u014d 2 0 sh\u00ec j\u00ec sh\u00ec w\u0113i m\u01d0 de sh\u00ec j\u00ec\uff0c 2 1 sh\u00ec j\u00ec b\u00ec ji\u0101ng sh\u00ec n\u00e0 m\u01d0 de sh\u00ec j\u00ec\u3002",
        "sh\u00e9n me sh\u00ec n\u00e0 m\u01d0 j\u00ec sh\u00f9 ne\uff1f zh\u00e8 d\u00e9 c\u00f3ng n\u00e0 m\u01d0 shu\u014d q\u01d0\u3002 n\u00e0 m\u01d0 sh\u00ec f\u0113i ch\u00e1ng f\u0113i ch\u00e1ng xi\u01ceo de ch\u00e1ng d\u00f9 d\u0101n w\u00e8i\uff0c 1 n\u00e0 m\u01d0 d\u011bng y\u00fa sh\u00ed y\u00ec f\u0113n zh\u012b y\u012b m\u01d0\u3002 r\u00fa gu\u01d2 b\u01ce zh\u00ed j\u00ecng w\u00e8i 1 n\u00e0 m\u01d0 de xi\u01ceo qi\u00fa f\u00e0ng d\u00e0o p\u012bng p\u0101ng qi\u00fa sh\u00e0ng\uff0c ji\u00f9 h\u01ceo xi\u00e0ng b\u01ce p\u012bng p\u0101ng qi\u00fa f\u00e0ng z\u00e0i d\u00ec qi\u00fa sh\u00e0ng\uff0c k\u011b ji\u00e0n n\u00e0 m\u01d0 y\u01d2u du\u014d me xi\u01ceo\u3002 n\u00e0 m\u01d0 j\u00ec sh\u00f9 de y\u00e1n ji\u016b du\u00ec xi\u00e0ng y\u00ec b\u0101n z\u00e0i 1 n\u00e0 m\u01d0 d\u00e0o 1 0 0 n\u00e0 m\u01d0 zh\u012b ji\u0101n\uff0c b\u00f9 j\u01d0n r\u00f2u y\u01cen g\u0113n b\u011bn k\u00e0n b\u00fa ji\u00e0n\uff0c ji\u00f9 sh\u00ec p\u01d4 t\u014dng de gu\u0101ng xu\u00e9 xi\u01cen w\u0113i j\u00ecng y\u011b w\u00fa n\u00e9ng w\u00e8i l\u00ec\u3002 zh\u00e8 zh\u01d2ng n\u00e0 m\u01d0 j\u00ed de w\u00f9 zh\u00ec y\u014dng y\u01d2u x\u01d4 du\u014d x\u012bn q\u00ed de t\u00e8 x\u00ecng\uff0c n\u00e0 m\u01d0 j\u00ec sh\u00f9 ji\u00f9 sh\u00ec y\u00e1n ji\u016b b\u00ecng l\u00ec y\u00f2ng zh\u00e8 xi\u0113 t\u00e8 x\u00ecng z\u00e0o f\u00fa r\u00e9n l\u00e8i de y\u00ec m\u00e9n xu\u00e9 w\u00e8n\u3002",
        "n\u00e0 m\u01d0 j\u00ec sh\u00f9 ji\u00f9 z\u00e0i w\u01d2 men sh\u0113n bi\u0101n\u3002 b\u012bng xi\u0101ng l\u01d0 r\u00fa gu\u01d2 sh\u01d0 y\u00f2ng y\u00ec zh\u01d2ng n\u00e0 m\u01d0 t\u00fa c\u00e9ng\uff0c ji\u00f9 hu\u00ec j\u00f9 y\u01d2u sh\u0101 j\u016bn h\u00e9 ch\u00fa ch\u00f2u g\u014dng n\u00e9ng\uff0c n\u00e9ng g\u00f2u sh\u01d0 sh\u016b c\u00e0i b\u01ceo xi\u0101n q\u012b g\u00e8ng ch\u00e1ng\u3002 y\u01d2u y\u00ec zh\u01d2ng ji\u00e0o zu\u00f2 \u201c t\u00e0n n\u00e0 m\u01d0 gu\u01cen \u201d de sh\u00e9n q\u00ed c\u00e1i li\u00e0o\uff0c b\u01d0 g\u0101ng ti\u011b ji\u0113 shi b\u01cei b\u00e8i\uff0c \u00e9r qi\u011b f\u0113i ch\u00e1ng q\u012bng\uff0c ji\u0101ng l\u00e1i w\u01d2 men y\u01d2u k\u011b n\u00e9ng zu\u00f2 sh\u00e0ng \u201c t\u00e0n n\u00e0 m\u01d0 gu\u01cen ti\u0101n t\u012b \u201d d\u00e0o t\u00e0i k\u014dng l\u01da x\u00edng\u3002 z\u00e0i zu\u00ec xi\u0101n j\u00ecn de y\u01d0n x\u00edng zh\u00e0n j\u012b sh\u00e0ng\uff0c y\u00f2ng d\u00e0o y\u00ec zh\u01d2ng n\u00e0 m\u01d0 x\u012b b\u014d c\u00e1i li\u00e0o\uff0c n\u00e9ng g\u00f2u b\u01ce t\u00e0n c\u00e8 l\u00e9i d\u00e1 b\u014d x\u012b sh\u014du di\u00e0o\uff0c su\u01d2 y\u01d0 l\u00e9i d\u00e1 g\u0113n b\u011bn k\u00e0n b\u00fa ji\u00e0n t\u0101\u3002",
        "n\u00e0 m\u01d0 j\u00ec sh\u00f9 k\u011b y\u01d0 r\u00e0ng r\u00e9n men g\u00e8ng ji\u0101 ji\u00e0n k\u0101ng\u3002 \u00e1i zh\u00e8ng h\u011bn k\u011b p\u00e0\uff0c d\u00e0n r\u00fa gu\u01d2 z\u00e0i zh\u01d0 y\u01d2u j\u01d0 g\u00e8 \u00e1i x\u00ec b\u0101o de sh\u00ed h\u00f2u ji\u00f9 n\u00e9ng f\u0101 xi\u00e0n de hu\u00e0\uff0c s\u01d0 w\u00e1ng l\u01dc hu\u00ec d\u00e0 d\u00e0 ji\u00e0ng d\u012b\u3002 l\u00ec y\u00f2ng j\u00ed q\u00ed l\u00edng m\u01d0n de n\u00e0 m\u01d0 ji\u01cen c\u00e8 j\u00ec sh\u00f9\uff0c k\u011b y\u01d0 sh\u00ed xi\u00e0n j\u00ed b\u00ecng de z\u01ceo q\u012b ji\u01cen c\u00e8 y\u01d4 y\u00f9 f\u00e1ng\u3002 w\u00e8i l\u00e1i de n\u00e0 m\u01d0 j\u012b q\u00ec r\u00e9n sh\u00e8n zh\u00ec k\u011b y\u01d0 t\u014dng gu\u00f2 xu\u00e8 gu\u01cen zh\u00ed d\u00e1 b\u00ecng z\u00e0o\uff0c sh\u0101 s\u01d0 \u00e1i x\u00ec b\u0101o\u3002 sh\u0113ng b\u00ecng de sh\u00ed h\u00f2u\uff0c x\u016b y\u00e0o ch\u012b y\u00e0o\u3002 xi\u00e0n z\u00e0i ch\u012b y\u00ed c\u00ec y\u00e0o zu\u00ec du\u014d gu\u01cen y\u00ec li\u01ceng ti\u0101n\uff0c w\u00e8i l\u00e1i de n\u00e0 m\u01d0 hu\u01cen sh\u00ec j\u00ec sh\u00f9\uff0c n\u00e9ng g\u00f2u r\u00e0ng y\u00e0o w\u00f9 xi\u00e0o l\u00ec hu\u01cen m\u00e0n d\u00ec sh\u00ec f\u00e0ng ch\u016b l\u00e1i\uff0c f\u00fa y\u00ed c\u00ec y\u00e0o k\u011b y\u01d0 gu\u01cen y\u00ec zh\u014du\uff0c sh\u00e8n zh\u00ec y\u00ed g\u00e8 yu\u00e8\u3002",
        "n\u00e0 m\u01d0 j\u00ec sh\u00f9 ji\u0101ng g\u011bi r\u00e9n l\u00e8i de sh\u0113ng hu\u00f3 d\u00e0i l\u00e1i sh\u0113n k\u00e8 de bi\u00e0n hu\u00e0\u3002 z\u00e0i b\u00f9 yu\u01cen de ji\u0101ng l\u00e1i\uff0c w\u01d2 men de y\u012b sh\u00ed zh\u00f9 x\u00edng d\u014du hu\u00ec y\u01d2u n\u00e0 m\u01d0 j\u00ec sh\u00f9 de y\u01d0ng zi\u3002"
      ],
      recognizeChars: ["乒","乓","拥","菌","臭","蔬","碳","癌","症","率","疾","灶"],
      writeChars: ["纳","拥","箱","臭","蔬","碳","钢","隐","健","康","胞","疾","防","灶","需"],
      vocabWords: [
        {word:'纳米',pinyin:'nà mǐ',en:'nanometer',sentence:'一纳米等于十亿分之一米。',sentenceEn:'One nanometer equals one billionth of a meter.'},
        {word:'技术',pinyin:'jì shù',en:'technology',sentence:'纳米技术改变生活。',sentenceEn:'Nanotechnology changes life.'},
        {word:'灵敏',pinyin:'líng mǐn',en:'sensitive',sentence:'纳米机器人灵敏灵巧。',sentenceEn:'Nano robots are sensitive and dexterous.'},
        {word:'隐形',pinyin:'yǐn xíng',en:'invisible',sentence:'纳米涂层可以隐形。',sentenceEn:'Nano coatings can be invisible.'},
        {word:'功能',pinyin:'gōng néng',en:'function',sentence:'具有杀菌功能。',sentenceEn:'Has sterilization function.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u7eb3\u7c73\u6280\u672f\u662f20\u4e16\u7eaa90\u5e74\u4ee3\u5174\u8d77\u7684\u9ad8\u65b0\u6280\u672f\u3002", exampleEn: "Nanotechnology is a high-tech field that emerged in the 1990s. If the 20th centu", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u4e0d\u4f46\u2026\u2026\u800c\u4e14\u2026\u2026", pointEn: "not only...but also...", example: "\u7eb3\u7c73\u6280\u672f\u662f20\u4e16\u7eaa90\u5e74\u4ee3\u5174\u8d77\u7684\u9ad8\u65b0\u6280\u672f\u3002", exampleEn: "Nanotechnology is a high-tech field that emerged in the 1990s. If the 20th centu", explanation: "\u9012\u8fdb\u590d\u53e5\uff0c\u540e\u4e00\u5206\u53e5\u6bd4\u524d\u4e00\u5206\u53e5\u7a0b\u5ea6\u66f4\u6df1", explanationEn: "Progressive compound sentence where the second clause goes further than the first"}
      ],
      footnotes: [
        {term:"\u7eb3\u7c73", termEn:"nanometer", definition:"\u3010n\u00e0 m\u01d0\u3011nanometer\u3002", definitionEn:"nanometer"},
        {term:"\u6280\u672f", termEn:"technology", definition:"\u3010j\u00ec sh\u00f9\u3011technology\u3002", definitionEn:"technology"},
        {term:"\u7075\u654f", termEn:"sensitive", definition:"\u3010l\u00edng m\u01d0n\u3011sensitive\u3002", definitionEn:"sensitive"},
        {term:"\u9690\u5f62", termEn:"invisible", definition:"\u3010y\u01d0n x\u00edng\u3011invisible\u3002", definitionEn:"invisible"},
        {term:"\u529f\u80fd", termEn:"function", definition:"\u3010g\u014dng n\u00e9ng\u3011function\u3002", definitionEn:"function"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"朗读课文，把课文中的科技术语读正确。读了课文，你有什么不懂的问题？",en:"Read aloud, pronouncing the technical terms correctly. What questions do you have after reading?"},
        {type:"discuss",cn:"\u201C纳米技术就在我们身边\u201D\u201C纳米技术可以让人们更加健康\u201D，选择其中一句话，结合课文内容说说你的理解",en:"Choose one of the two topic sentences and explain your understanding using details from the text"},
        {type:"think",cn:"如果让你利用纳米技术，你会把它运用到生活中的哪些地方？",en:"If you could use nanotechnology, where in daily life would you apply it?"}
      ],
      teachingPoints: [
        {cn:"学习科普说明文的说明方法，如举例子、作比较、列数字",en:"Learn expository methods in popular science: examples, comparisons, and statistics"},
        {cn:"理解课文如何用打比方（乒乓球与地球）来说明纳米的微小",en:"Understand how the text uses analogy (ping-pong ball on Earth) to convey how small a nanometer is"}
      ],
      parentTips: [
        {cn:"和孩子一起查找纳米技术的最新应用，拓展科学视野",en:"Research the latest nanotechnology applications with your child to broaden their scientific horizons"},
        {cn:"鼓励孩子用\u201C打比方\u201D的方法解释生活中的科学概念",en:"Encourage your child to use analogies to explain scientific concepts in daily life"}
      ]
    },
    {
      id: 8, title: "千年梦圆在今朝", titleEn: "A Thousand-Year Dream Fulfilled Today",
      difficulty: 2,
      isSelfRead: true,
      text: [
        "飞离地球、遨游太空是中华民族很久以来的梦想。在古代就有\u201C嫦娥奔月\u201D的神话，有人飞上天、空中飞车的传说，还有\u201C鲲鹏展翅\u201D\u201C九天揽月\u201D的奇妙想象。富有激情和超凡想象力的炎黄子孙，在千百年的岁月流转之中，不断地尝试实现自己的美好愿望。",
        "传说，我国明代的官员万户，是世界历史上第一个试验利用火箭上天的人。他把四十七支火箭安装在椅子背后，自己坐在椅子上，手拿两只大风筝，叫人点火发射。随着一声巨响，他消失在了火焰和烟雾中。尽管他的火箭飞行尝试没有成功，但万户仍然被国际航天史学家公认为人类飞行探索的先驱。为了纪念他，国际天文学联合会将月球上的一座环形山命名为\u201C万户\u201D。",
        "万户那种勇于实践的探索精神，极大地震撼和鼓舞着人们。数百年来，坚定而执着的炎黄子孙，在实现飞天梦的过程中，遭受了无数失败，付出了惨重代价，但是，始终没有放弃飞离地球的努力。",
        "1949年，中华人民共和国成立，中华民族的历史掀开了崭新的一页，中国的航天事业也呈现出勃勃生机。毛泽东主席在苏联第一颗人造卫星上天之后的第二年——1958年，庄重地表示：\u201C我们也要搞人造卫星。\u201D经过十多年的努力，1970年4月24日，寂寞而辽阔的太空中，第一次响起了中国人的声音，那穿越苍穹的《东方红》乐曲，让海内外华人振奋不已。中国成为世界上第五个能够独立发射卫星的国家。",
        "在准备发射人造卫星的同时，中国科学家满怀希望地开始了载人航天技术的探索。1992年9月21日，党中央决定实施载人航天工程，一百一十多个单位直接承担了研制、建设和发射任务。经过广大科技人员、工人和解放军官兵十余年的不懈努力，2003年10月15日早晨9时，在酒泉卫星发射中心，随着一声震耳欲聋的巨响，我国自行研制的\u201C神舟五号\u201D飞船被送上太空。火箭宛若一条巨龙，划出一道绚丽的曲线，瞬间便消失在了苍穹之中。10月16日早晨6时23分，飞船在环绕地球十四圈后成功返回着陆场。航天员杨利伟在即将登机返回北京的时候，用三句话概括了他的太空旅行：\u201C飞船运行正常。我自我感觉良好。我为祖国感到骄傲。\u201D",
        "我国首次载人航天飞行的成功，向全世界宣告：中国已经成为第三个独立掌握载人航天技术的国家。",
        "\u201C神舟五号\u201D成功发射的第二年，我国正式实施探月工程。2007年10月24日，我国成功发射第一颗月球探测卫星\u201C嫦娥一号\u201D，这是我国航天事业的又一座里程碑。2019年1月3日，\u201C嫦娥四号\u201D探测器实现了人类首次月球背面软着陆，并传回了第一张月背近距离拍摄的清晰的月表形貌图。随后，\u201C嫦娥四号\u201D着陆器与它的月球车\u201C玉兔二号\u201D，顺利进行了互相拍摄，带有五星红旗的着陆器和月球车，在月球背面留下了历史性的珍贵影像。"
      ],
      textEn: [
        "Leaving Earth and roaming space has long been the dream of the Chinese people. Ancient myths tell of Chang\u2019e flying to the moon, legends speak of people soaring to the sky and flying chariots, and there are wondrous imaginings of \u2018Kunpeng spreading its wings\u2019 and \u2018grasping the moon from the ninth heaven.\u2019 Passionate and extraordinarily imaginative, the descendants of Yan and Huang have ceaselessly pursued this dream through the ages.",
        "Legend has it that Wan Hu, a Ming dynasty official, was the first person in history to attempt rocket-powered flight. He strapped 47 rockets to a chair, sat down holding two large kites, and ordered ignition. With a great boom, he vanished in flame and smoke. Though his attempt failed, Wan Hu is internationally recognized as a pioneer of human flight exploration. The International Astronomical Union named a lunar crater \u2018Wan Hu\u2019 in his honor.",
        "Wan Hu\u2019s courageous spirit of hands-on exploration profoundly shook and inspired people. For centuries, the steadfast and determined descendants of Yan and Huang endured countless failures and paid heavy costs in the pursuit of their dream of flight, yet they never gave up the effort to leave the Earth.",
        "In 1949, the People\u2019s Republic of China was founded, opening a brand-new chapter in the history of the Chinese nation, and China\u2019s space program began to show vigorous vitality. In the year after the Soviet Union launched the first artificial satellite \u2014 1958 \u2014 Chairman Mao solemnly declared: \u2018We too must build artificial satellites.\u2019 After more than a decade of effort, on April 24, 1970, for the first time, the voice of the Chinese people rang out in the lonely, vast expanse of space. The melody of \u2018The East Is Red,\u2019 piercing the heavens, filled Chinese people at home and abroad with tremendous excitement. China became the fifth country in the world to independently launch a satellite.",
        "While preparing to launch artificial satellites, Chinese scientists hopefully began exploring manned spaceflight technology. On September 21, 1992, the Party Central Committee decided to implement the manned space program, and over 110 organizations directly took on research, construction, and launch tasks. After more than a decade of tireless effort by scientists, engineers, workers, and PLA soldiers and officers, at 9 a.m. on the morning of October 15, 2003, at the Jiuquan Satellite Launch Center, with an ear-splitting roar, China\u2019s independently developed Shenzhou 5 spacecraft was sent into space. The rocket, like a mighty dragon, traced a dazzling arc and vanished into the heavens in an instant. At 6:23 a.m. on the morning of October 16, the spacecraft successfully returned to the landing site after orbiting the Earth fourteen times. As astronaut Yang Liwei was about to board the plane back to Beijing, he summed up his space journey in three sentences: \u2018The spacecraft operated normally. I feel fine. I am proud of my motherland.\u2019",
        "China\u2019s first manned spaceflight proclaimed to the world that China had become the third country to independently master manned space technology.",
        "The year after the successful launch of Shenzhou 5, China officially began its lunar exploration program. On October 24, 2007, China successfully launched its first lunar probe, Chang\u2019e 1 \u2014 yet another milestone in China\u2019s space endeavors. On January 3, 2019, the Chang\u2019e 4 probe achieved humanity\u2019s first soft landing on the far side of the Moon, and transmitted the first clear, close-up photograph of the lunar far side\u2019s surface features. Subsequently, the Chang\u2019e 4 lander and its lunar rover Yutu 2 successfully photographed each other; the lander and rover, bearing China\u2019s five-star red flag, left precious, historic images on the far side of the Moon."
      ],
      textPinyin: [
        "f\u0113i l\u00ed d\u00ec qi\u00fa\u3001 \u00e1o y\u00f3u t\u00e0i k\u014dng sh\u00ec zh\u014dng hu\u00e1 m\u00edn z\u00fa h\u011bn ji\u01d4 y\u01d0 l\u00e1i de m\u00e8ng xi\u01ceng\u3002 z\u00e0i g\u01d4 d\u00e0i ji\u00f9 y\u01d2u \u201c ch\u00e1ng \u00e9 b\u0113n yu\u00e8 \u201d de sh\u00e9n hu\u00e0\uff0c y\u01d2u r\u00e9n f\u0113i sh\u00e0ng ti\u0101n\u3001 k\u014dng zh\u014dng f\u0113i ch\u0113 de chu\u00e1n shu\u014d\uff0c h\u00e1i y\u01d2u \u201c k\u016bn p\u00e9ng zh\u01cen ch\u00ec \u201d \u201c ji\u01d4 ti\u0101n l\u01cen yu\u00e8 \u201d de q\u00ed mi\u00e0o xi\u01ceng xi\u00e0ng\u3002 f\u00f9 y\u01d2u j\u012b q\u00edng h\u00e9 ch\u0101o f\u00e1n xi\u01ceng xi\u00e0ng l\u00ec de y\u00e1n hu\u00e1ng z\u01d0 s\u016bn\uff0c z\u00e0i qi\u0101n b\u01cei ni\u00e1n de su\u00ec yu\u00e8 li\u00fa zhu\u01cen zh\u012b zh\u014dng\uff0c b\u00fa du\u00e0n d\u00ec ch\u00e1ng sh\u00ec sh\u00ed xi\u00e0n z\u00ec j\u01d0 de m\u011bi h\u01ceo yu\u00e0n w\u00e0ng\u3002",
        "chu\u00e1n shu\u014d\uff0c w\u01d2 gu\u00f3 m\u00edng d\u00e0i de gu\u0101n yu\u00e1n w\u00e0n h\u00f9\uff0c sh\u00ec sh\u00ec ji\u00e8 l\u00ec sh\u01d0 sh\u00e0ng d\u00ec y\u012b g\u00e8 sh\u00ec y\u00e0n l\u00ec y\u00f2ng hu\u01d2 ji\u00e0n sh\u00e0ng ti\u0101n de r\u00e9n\u3002 t\u0101 b\u01ce s\u00ec sh\u00ed q\u012b zh\u012b hu\u01d2 ji\u00e0n \u0101n zhu\u0101ng z\u00e0i y\u01d0 zi b\u00e8i h\u00f2u\uff0c z\u00ec j\u01d0 zu\u00f2 z\u00e0i y\u01d0 zi sh\u00e0ng\uff0c sh\u01d2u n\u00e1 li\u01ceng zh\u012b d\u00e0 f\u0113ng zheng\uff0c ji\u00e0o r\u00e9n di\u01cen hu\u01d2 f\u0101 sh\u00e8\u3002 su\u00ed zhe y\u00ec sh\u0113ng j\u00f9 xi\u01ceng\uff0c t\u0101 xi\u0101o sh\u012b z\u00e0i le hu\u01d2 y\u00e0n h\u00e9 y\u0101n w\u00f9 zh\u014dng\u3002 j\u00ecn gu\u01cen t\u0101 de hu\u01d2 ji\u00e0n f\u0113i x\u00edng ch\u00e1ng sh\u00ec m\u00e9i y\u01d2u ch\u00e9ng g\u014dng\uff0c d\u00e0n w\u00e0n h\u00f9 r\u00e9ng r\u00e1n b\u00e8i gu\u00f3 j\u00ec h\u00e1ng ti\u0101n sh\u01d0 xu\u00e9 ji\u0101 g\u014dng r\u00e8n w\u00e9i r\u00e9n l\u00e8i f\u0113i x\u00edng t\u00e0n su\u01d2 de xi\u0101n q\u016b\u3002 w\u00e8i le j\u00ec ni\u00e0n t\u0101\uff0c gu\u00f3 j\u00ec ti\u0101n w\u00e9n xu\u00e9 li\u00e1n h\u00e9 hu\u00ec ji\u0101ng yu\u00e8 qi\u00fa sh\u00e0ng de y\u00ed zu\u00f2 hu\u00e1n x\u00edng sh\u0101n m\u00ecng m\u00edng w\u00e8i \u201c w\u00e0n h\u00f9 \u201d\u3002",
        "w\u00e0n h\u00f9 n\u00e0 zh\u01d2ng y\u01d2ng y\u00fa sh\u00ed ji\u00e0n de t\u00e0n su\u01d2 j\u012bng sh\u00e9n\uff0c j\u00ed d\u00e0 d\u00ec zh\u00e8n h\u00e0n h\u00e9 g\u01d4 w\u01d4 zhe r\u00e9n men\u3002 sh\u00f9 b\u01cei ni\u00e1n l\u00e1i\uff0c ji\u0101n d\u00ecng \u00e9r zh\u00ed zhu\u00f3 de y\u00e1n hu\u00e1ng z\u01d0 s\u016bn\uff0c z\u00e0i sh\u00ed xi\u00e0n f\u0113i ti\u0101n m\u00e8ng de gu\u00f2 ch\u00e9ng zh\u014dng\uff0c z\u0101o sh\u00f2u le w\u00fa sh\u00f9 sh\u012b b\u00e0i\uff0c f\u00f9 ch\u016b le c\u01cen zh\u00f2ng d\u00e0i ji\u00e0\uff0c d\u00e0n sh\u00ec\uff0c sh\u01d0 zh\u014dng m\u00e9i y\u01d2u f\u00e0ng q\u00ec f\u0113i l\u00ed d\u00ec qi\u00fa de n\u01d4 l\u00ec\u3002",
        "1 9 4 9 ni\u00e1n\uff0c zh\u014dng hu\u00e1 r\u00e9n m\u00edn g\u00f2ng h\u00e9 gu\u00f3 ch\u00e9ng l\u00ec\uff0c zh\u014dng hu\u00e1 m\u00edn z\u00fa de l\u00ec sh\u01d0 xi\u0101n k\u0101i le zh\u01cen x\u012bn de y\u00ed y\u00e8\uff0c zh\u014dng gu\u00f3 de h\u00e1ng ti\u0101n sh\u00ec y\u00e8 y\u011b ch\u00e9ng xi\u00e0n ch\u016b b\u00f3 b\u00f3 sh\u0113ng j\u012b\u3002 m\u00e1o z\u00e9 d\u014dng zh\u01d4 x\u00ed z\u00e0i s\u016b li\u00e1n d\u00ec y\u012b k\u0113 r\u00e9n z\u00e0o w\u00e8i x\u012bng sh\u00e0ng ti\u0101n zh\u012b h\u00f2u de d\u00ec \u00e8r ni\u00e1n\u2014\u2014 1 9 5 8 ni\u00e1n\uff0c zhu\u0101ng zh\u00f2ng d\u00ec bi\u01ceo sh\u00ec\uff1a \u201c w\u01d2 men y\u011b y\u00e0o g\u01ceo r\u00e9n z\u00e0o w\u00e8i x\u012bng\u3002 \u201d j\u012bng gu\u00f2 sh\u00ed du\u014d ni\u00e1n de n\u01d4 l\u00ec\uff0c 1 9 7 0 ni\u00e1n 4 yu\u00e8 2 4 r\u00ec\uff0c j\u00ec m\u00f2 \u00e9r li\u00e1o ku\u00f2 de t\u00e0i k\u014dng zh\u014dng\uff0c d\u00ec y\u012b c\u00ec xi\u01ceng q\u01d0 le zh\u014dng gu\u00f3 r\u00e9n de sh\u0113ng y\u012bn\uff0c n\u00e0 chu\u0101n yu\u00e8 c\u0101ng qi\u00f3ng de\u300ad\u014dng f\u0101ng h\u00f3ng\u300byu\u00e8 q\u01d4\uff0c r\u00e0ng h\u01cei n\u00e8i w\u00e0i hu\u00e1 r\u00e9n zh\u00e8n f\u00e8n b\u00f9 y\u01d0\u3002 zh\u014dng gu\u00f3 ch\u00e9ng w\u00e9i sh\u00ec ji\u00e8 sh\u00e0ng d\u00ec w\u01d4 g\u00e8 n\u00e9ng g\u00f2u d\u00fa l\u00ec f\u0101 sh\u00e8 w\u00e8i x\u012bng de gu\u00f3 ji\u0101\u3002",
        "z\u00e0i zh\u01d4n b\u00e8i f\u0101 sh\u00e8 r\u00e9n z\u00e0o w\u00e8i x\u012bng de t\u00f3ng sh\u00ed\uff0c zh\u014dng gu\u00f3 k\u0113 xu\u00e9 ji\u0101 m\u01cen hu\u00e1i x\u012b w\u00e0ng d\u00ec k\u0101i sh\u01d0 le z\u01cei r\u00e9n h\u00e1ng ti\u0101n j\u00ec sh\u00f9 de t\u00e0n su\u01d2\u3002 1 9 9 2 ni\u00e1n 9 yu\u00e8 2 1 r\u00ec\uff0c d\u01ceng zh\u014dng y\u0101ng ju\u00e9 d\u00ecng sh\u00ed sh\u012b z\u01cei r\u00e9n h\u00e1ng ti\u0101n g\u014dng ch\u00e9ng\uff0c y\u00ec b\u01cei y\u012b sh\u00ed du\u014d g\u00e8 d\u0101n w\u00e8i zh\u00ed ji\u0113 ch\u00e9ng d\u0101n le y\u00e1n zh\u00ec\u3001 ji\u00e0n sh\u00e8 h\u00e9 f\u0101 sh\u00e8 r\u00e8n wu\u3002 j\u012bng gu\u00f2 gu\u01ceng d\u00e0 k\u0113 j\u00ec r\u00e9n yu\u00e1n\u3001 g\u014dng r\u00e9n h\u00e9 ji\u011b f\u00e0ng j\u016bn gu\u0101n b\u012bng sh\u00ed y\u00fa ni\u00e1n de b\u00fa xi\u00e8 n\u01d4 l\u00ec\uff0c 2 0 0 3 ni\u00e1n 1 0 yu\u00e8 1 5 r\u00ec z\u01ceo ch\u00e9n 9 sh\u00ed\uff0c z\u00e0i ji\u01d4 qu\u00e1n w\u00e8i x\u012bng f\u0101 sh\u00e8 zh\u014dng x\u012bn\uff0c su\u00ed zhe y\u00ec sh\u0113ng zh\u00e8n \u011br y\u00f9 l\u00f3ng de j\u00f9 xi\u01ceng\uff0c w\u01d2 gu\u00f3 z\u00ec x\u00edng y\u00e1n zh\u00ec de \u201c sh\u00e9n zh\u014du w\u01d4 h\u00e0o \u201d f\u0113i chu\u00e1n b\u00e8i s\u00f2ng sh\u00e0ng t\u00e0i k\u014dng\u3002 hu\u01d2 ji\u00e0n w\u01cen ru\u00f2 y\u00ec ti\u00e1o j\u00f9 l\u00f3ng\uff0c hu\u00e0 ch\u016b y\u00ed d\u00e0o xu\u00e0n l\u00ec de q\u016b xi\u00e0n\uff0c sh\u00f9n ji\u0101n bi\u00e0n xi\u0101o sh\u012b z\u00e0i le c\u0101ng qi\u00f3ng zh\u012b zh\u014dng\u3002 1 0 yu\u00e8 1 6 r\u00ec z\u01ceo ch\u00e9n 6 sh\u00ed 2 3 f\u0113n\uff0c f\u0113i chu\u00e1n z\u00e0i hu\u00e1n r\u00e0o d\u00ec qi\u00fa sh\u00ed s\u00ec qu\u0101n h\u00f2u ch\u00e9ng g\u014dng f\u01cen hu\u00ed zhu\u00f3 l\u00f9 ch\u01ceng\u3002 h\u00e1ng ti\u0101n yu\u00e1n y\u00e1ng l\u00ec w\u011bi z\u00e0i j\u00ed ji\u0101ng d\u0113ng j\u012b f\u01cen hu\u00ed b\u011bi j\u012bng de sh\u00ed h\u00f2u\uff0c y\u00f2ng s\u0101n j\u00f9 hu\u00e0 g\u00e0i ku\u00f2 le t\u0101 de t\u00e0i k\u014dng l\u01da x\u00edng\uff1a \u201c f\u0113i chu\u00e1n y\u00f9n x\u00edng zh\u00e8ng ch\u00e1ng\u3002 w\u01d2 z\u00ec w\u01d2 g\u01cen ju\u00e9 li\u00e1ng h\u01ceo\u3002 w\u01d2 w\u00e8i z\u01d4 gu\u00f3 g\u01cen d\u00e0o ji\u0101o \u00e0o\u3002 \u201d",
        "w\u01d2 gu\u00f3 sh\u01d2u c\u00ec z\u01cei r\u00e9n h\u00e1ng ti\u0101n f\u0113i x\u00edng de ch\u00e9ng g\u014dng\uff0c xi\u00e0ng qu\u00e1n sh\u00ec ji\u00e8 xu\u0101n g\u00e0o\uff1a zh\u014dng gu\u00f3 y\u01d0 j\u012bng ch\u00e9ng w\u00e9i d\u00ec s\u0101n g\u00e8 d\u00fa l\u00ec zh\u01ceng w\u00f2 z\u01cei r\u00e9n h\u00e1ng ti\u0101n j\u00ec sh\u00f9 de gu\u00f3 ji\u0101\u3002",
        "\u201c sh\u00e9n zh\u014du w\u01d4 h\u00e0o \u201d ch\u00e9ng g\u014dng f\u0101 sh\u00e8 de d\u00ec \u00e8r ni\u00e1n\uff0c w\u01d2 gu\u00f3 zh\u00e8ng sh\u00ec sh\u00ed sh\u012b t\u00e0n yu\u00e8 g\u014dng ch\u00e9ng\u3002 2 0 0 7 ni\u00e1n 1 0 yu\u00e8 2 4 r\u00ec\uff0c w\u01d2 gu\u00f3 ch\u00e9ng g\u014dng f\u0101 sh\u00e8 d\u00ec y\u012b k\u0113 yu\u00e8 qi\u00fa t\u00e0n c\u00e8 w\u00e8i x\u012bng \u201c ch\u00e1ng \u00e9 y\u00ed h\u00e0o \u201d\uff0c zh\u00e8 sh\u00ec w\u01d2 gu\u00f3 h\u00e1ng ti\u0101n sh\u00ec y\u00e8 de y\u00f2u y\u00ed zu\u00f2 l\u01d0 ch\u00e9ng b\u0113i\u3002 2 0 1 9 ni\u00e1n 1 yu\u00e8 3 r\u00ec\uff0c \u201c ch\u00e1ng \u00e9 s\u00ec h\u00e0o \u201d t\u00e0n c\u00e8 q\u00ec sh\u00ed xi\u00e0n le r\u00e9n l\u00e8i sh\u01d2u c\u00ec yu\u00e8 qi\u00fa b\u00e8i mi\u00e0n ru\u01cen zhu\u00f3 l\u00f9\uff0c b\u00ecng chu\u00e1n hu\u00ed le d\u00ec y\u012b zh\u0101ng yu\u00e8 b\u00e8i j\u00ecn j\u00f9 l\u00ed p\u0101i sh\u00e8 de q\u012bng x\u012b de yu\u00e8 bi\u01ceo x\u00edng m\u00e0o t\u00fa\u3002 su\u00ed h\u00f2u\uff0c \u201c ch\u00e1ng \u00e9 s\u00ec h\u00e0o \u201d zhu\u00f3 l\u00f9 q\u00ec y\u01d4 t\u0101 de yu\u00e8 qi\u00fa ch\u0113 \u201c y\u00f9 t\u00f9 \u00e8r h\u00e0o \u201d\uff0c sh\u00f9n l\u00ec j\u00ecn x\u00edng le h\u00f9 xi\u0101ng p\u0101i sh\u00e8\uff0c d\u00e0i y\u01d2u w\u01d4 x\u012bng h\u00f3ng q\u00ed de zhe l\u00f9 q\u00ec h\u00e9 yu\u00e8 qi\u00fa ch\u0113\uff0c z\u00e0i yu\u00e8 qi\u00fa b\u00e8i mi\u00e0n li\u00fa xi\u00e0 le l\u00ec sh\u01d0 x\u00ecng de zh\u0113n gu\u00ec y\u01d0ng xi\u00e0ng\u3002"
      ],
      recognizeChars: ["鹏","揽","驱","践","着","党","施","懈","宛","碑"],
      writeChars: [],
      vocabWords: [
        {word:'飞天',pinyin:'fēi tiān',en:'fly to the sky',sentence:'千年飞天梦。',sentenceEn:'A thousand-year dream of flight.'},
        {word:'嫦娥',pinyin:'cháng é',en:'Chang e (moon goddess)',sentence:'嫦娥奔月的传说。',sentenceEn:'The legend of Chang e flying to the moon.'},
        {word:'航天',pinyin:'háng tiān',en:'space flight',sentence:'中国航天事业。',sentenceEn:'China space program.'},
        {word:'载人',pinyin:'zài rén',en:'manned',sentence:'载人飞船。',sentenceEn:'Manned spacecraft.'},
        {word:'实现',pinyin:'shí xiàn',en:'realize',sentence:'千年梦想终于实现了。',sentenceEn:'The thousand-year dream finally came true.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u98de\u79bb\u5730\u7403\u3001\u9068\u6e38\u592a\u7a7a\u662f\u4e2d\u534e\u6c11\u65cf\u5f88\u4e45\u4ee5\u6765\u7684\u68a6\u60f3\u3002", exampleEn: "Leaving Earth and roaming space has long been the dream of the Chinese people. A", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u867d\u7136\u2026\u2026\u4f46\u662f\u2026\u2026", pointEn: "although...but...", example: "\u98de\u79bb\u5730\u7403\u3001\u9068\u6e38\u592a\u7a7a\u662f\u4e2d\u534e\u6c11\u65cf\u5f88\u4e45\u4ee5\u6765\u7684\u68a6\u60f3\u3002", exampleEn: "Leaving Earth and roaming space has long been the dream of the Chinese people. A", explanation: "\u8f6c\u6298\u590d\u53e5\uff0c\u8868\u793a\u524d\u540e\u610f\u601d\u7684\u8f6c\u6298", explanationEn: "Adversative compound sentence showing contrast between clauses"}
      ],
      footnotes: [
        {term:"\u98de\u5929", termEn:"fly to the sky", definition:"\u3010f\u0113i ti\u0101n\u3011fly to the sky\u3002", definitionEn:"fly to the sky"},
        {term:"\u5ae6\u5a25", termEn:"Chang e (moon goddess)", definition:"\u3010ch\u00e1ng \u00e9\u3011Chang e (moon goddess)\u3002", definitionEn:"Chang e (moon goddess)"},
        {term:"\u822a\u5929", termEn:"space flight", definition:"\u3010h\u00e1ng ti\u0101n\u3011space flight\u3002", definitionEn:"space flight"},
        {term:"\u8f7d\u4eba", termEn:"manned", definition:"\u3010z\u00e0i r\u00e9n\u3011manned\u3002", definitionEn:"manned"},
        {term:"\u5b9e\u73b0", termEn:"realize", definition:"\u3010sh\u00ed xi\u00e0n\u3011realize\u3002", definitionEn:"realize"}
      ],
      readingTips: [
        {cn:"\u8fd9\u7bc7\u6587\u7ae0\u8f83\u957f\uff0c\u5efa\u8bae\u5206\u6bb5\u9605\u8bfb\u3002\u6bcf\u8bfb\u5b8c\u4e00\u6bb5\uff0c\u505c\u4e0b\u6765\u60f3\u60f3\u8fd9\u6bb5\u7684\u4e3b\u8981\u5185\u5bb9\u3002", en:"This is a longer text. Read it paragraph by paragraph, pausing after each to think about the main idea."},
        {cn:"\u8bfb\u5b8c\u5168\u6587\u540e\uff0c\u8bd5\u7740\u7528\u4e00\u53e5\u8bdd\u6982\u62ec\u6587\u7ae0\u7684\u4e2d\u5fc3\u601d\u60f3\u3002", en:"After reading the whole text, try to summarize the central idea in one sentence."}
      ],
      exercises: [
        {type:"read",cn:"默读课文，说说中华民族千年的飞天梦是怎样逐步实现的",en:"Read silently and explain how the Chinese nation\u2019s thousand-year dream of flight was gradually realized"},
        {type:"think",cn:"感兴趣的同学可以查阅资料，了解我国在航天领域的最新成就",en:"Interested students can research China\u2019s latest achievements in space exploration"}
      ],
      teachingPoints: [
        {cn:"了解中国航天事业的发展历程，感受中华民族的探索精神",en:"Learn about the development of China\u2019s space program and feel the nation\u2019s spirit of exploration"},
        {cn:"理解\u201C千年梦圆在今朝\u201D的含义，体会坚持与奋斗的力量",en:"Understand the meaning of the title and appreciate the power of persistence and hard work"}
      ],
      parentTips: [
        {cn:"和孩子一起了解中国航天最新进展，如天宫空间站、火星探测等",en:"Explore China\u2019s latest space achievements together, such as the Tiangong space station and Mars missions"},
        {cn:"引导孩子感受从万户到神舟的探索精神，培养坚持不懈的品质",en:"Help your child feel the spirit of exploration from Wan Hu to Shenzhou and cultivate perseverance"}
      ]
    }
  ],
  oralComm: {title:"说新闻",titleEn:"Reporting News",prompt:{cn:"选一则感兴趣的新闻和同学交流。要说明新闻的来源，把新闻讲清楚，不要随意更改内容。还可以说说自己的看法。",en:"Choose an interesting news story to share with classmates. State the source, report accurately without altering content, and share your opinion."}},
  garden: {
    accumulation: {title:"日积月累",titleEn:"Daily Accumulation",content:{cn:"江畔独步寻花（唐·杜甫）：黄师塔前江水东，春光懒困倚微风。桃花一簇开无主，可爱深红爱浅红？",en:"Strolling Alone by the Riverside Seeking Flowers (Tang, Du Fu): East of the Yellow Master\u2019s Pagoda flows the river; drowsy in spring light, I lean on the breeze. A cluster of peach blossoms blooms ownerless \u2014 shall I love the deep red or the pale?"}},
    wordSentence: {title:"词句段运用",titleEn:"Words, Sentences & Paragraphs",content:{cn:"读句子，注意用打比方、列数字、作比较等方法说明事物的特点；了解近几十年出现的新词语（克隆、多媒体、互联网、云技术等）。",en:"Read sentences and notice how analogy, statistics, and comparison explain features; learn recently coined words (clone, multimedia, internet, cloud technology)."}},
    composition: {title:"习作：我的奇思妙想",titleEn:"Composition: My Wild Ideas",prompt:{cn:"你想发明什么？它是什么样子的，有哪些功能？把它写出来介绍给大家吧！",en:"What would you like to invent? What does it look like and what can it do? Write about it and share!"}},
    readingCorner: {title:"快乐读书吧：十万个为什么",titleEn:"Happy Reading: 100,000 Whys",prompt:{cn:"阅读苏联作家米·伊林的《十万个为什么》和中国版《十万个为什么》，了解科学世界的奥秘。",en:"Read Mi. Ilin\u2019s '100,000 Whys' and the Chinese edition to discover the mysteries of science."}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 3 — 现代诗歌 Modern Poetry (9-12)     */
/* ═══════════════════════════════════════════ */
{
  id: 3, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 9, title: "短诗三首", titleEn: "Three Short Poems",
      difficulty: 2,
      text: [
        "繁星（七一）\n冰心\n这些事——\n是永不漫灭的回忆：\n月明的园中，\n藤萝的叶下，\n母亲的膝上。",
        "繁星（一三一）\n冰心\n大海啊！\n哪一颗星没有光？\n哪一朵花没有香？\n哪一次我的思潮里\n没有你波涛的清响？",
        "繁星（一五九）\n冰心\n母亲啊！\n天上的风雨来了，\n鸟儿躲到它的巢里；\n心中的风雨来了，\n我只躲到你的怀里。"
      ],
      textEn: [
        "Stars (No. 71)\nBing Xin\nThese things \u2014\nare memories that never fade:\nIn the moonlit garden,\nunder the wisteria leaves,\non Mother\u2019s lap.",
        "Stars (No. 131)\nBing Xin\nO sea!\nIs there a star without light?\nIs there a flower without fragrance?\nIs there a time when my tides of thought\nhave no echo of your waves?",
        "Stars (No. 159)\nBing Xin\nMother!\nWhen storms come from the sky,\nbirds hide in their nests;\nwhen storms come in my heart,\nI only hide in your arms."
      ],
      textPinyin: [
        "f\u00e1n x\u012bng\uff08q\u012b y\u012b\uff09\n b\u012bng x\u012bn\n zh\u00e8 xi\u0113 sh\u00ec\u2014\u2014\n sh\u00ec y\u01d2ng b\u00fa m\u00e0n mi\u00e8 de hu\u00ed y\u00ec\uff1a\n yu\u00e8 m\u00edng de yu\u00e1n zh\u014dng\uff0c\n t\u00e9ng lu\u00f3 de y\u00e8 xi\u00e0\uff0c\n m\u01d4 q\u012bn de x\u012b sh\u00e0ng\u3002",
        "f\u00e1n x\u012bng\uff08y\u00ec s\u0101n y\u012b\uff09\n b\u012bng x\u012bn\n d\u00e0 h\u01cei a\uff01\n n\u01ce y\u00ec k\u0113 x\u012bng m\u00e9i y\u01d2u gu\u0101ng\uff1f\n n\u01ce y\u00ec du\u01d2 hu\u0101 m\u00e9i y\u01d2u xi\u0101ng\uff1f\n n\u01ce y\u00ed c\u00ec w\u01d2 de s\u012b ch\u00e1o l\u01d0\n m\u00e9i y\u01d2u n\u01d0 b\u014d t\u0101o de q\u012bng xi\u01ceng\uff1f",
        "f\u00e1n x\u012bng\uff08y\u012b w\u01d4 ji\u01d4\uff09\n b\u012bng x\u012bn\n m\u01d4 q\u012bn a\uff01\n ti\u0101n sh\u00e0ng de f\u0113ng y\u01d4 l\u00e1i le\uff0c\n ni\u01ceo \u00e9r du\u01d2 d\u00e0o t\u0101 de ch\u00e1o l\u01d0\uff1b\n x\u012bn zh\u014dng de f\u0113ng y\u01d4 l\u00e1i le\uff0c\n w\u01d2 zh\u012b du\u01d2 d\u00e0o n\u01d0 de hu\u00e1i l\u01d0\u3002"
      ],
      recognizeChars: ["漫","涛"],
      writeChars: ["繁","漫","灭","藤","萝","膝","涛","躲"],
      vocabWords: [
        {word:'繁星',pinyin:'fán xīng',en:'starry sky',sentence:'繁星闪烁。',sentenceEn:'Stars twinkle.'},
        {word:'藤萝',pinyin:'téng luó',en:'wisteria',sentence:'墙角的花。',sentenceEn:'The flower in the corner.'},
        {word:'母亲',pinyin:'mǔ qīn',en:'mother',sentence:'母亲啊，天上的风雨来了。',sentenceEn:'Mother, the storm in the sky is coming.'},
        {word:'巢',pinyin:'cháo',en:'nest',sentence:'鸟儿躲到它的巢里。',sentenceEn:'Birds hide in their nests.'},
        {word:'怀里',pinyin:'huái lǐ',en:'in one arms',sentence:'我只躲到你的怀里。',sentenceEn:'I only hide in your arms.'}
      ],
      footnotes: [
        {term:"\u7e41\u661f", termEn:"starry sky", definition:"\u3010f\u00e1n x\u012bng\u3011starry sky\u3002", definitionEn:"starry sky"},
        {term:"\u85e4\u841d", termEn:"wisteria", definition:"\u3010t\u00e9ng lu\u00f3\u3011wisteria\u3002", definitionEn:"wisteria"},
        {term:"\u6bcd\u4eb2", termEn:"mother", definition:"\u3010m\u01d4 q\u012bn\u3011mother\u3002", definitionEn:"mother"},
        {term:"\u5de2", termEn:"nest", definition:"\u3010ch\u00e1o\u3011nest\u3002", definitionEn:"nest"},
        {term:"\u6000\u91cc", termEn:"in one arms", definition:"\u3010hu\u00e1i l\u01d0\u3011in one arms\u3002", definitionEn:"in one arms"}
      ],
      readingTips: [
        {cn:"\u6709\u611f\u60c5\u5730\u6717\u8bfb\u53e4\u8bd7\uff0c\u6ce8\u610f\u505c\u987f\u548c\u91cd\u97f3\u3002\u60f3\u8c61\u8bd7\u53e5\u63cf\u7ed8\u7684\u753b\u9762\uff0c\u4f53\u4f1a\u8bd7\u4eba\u7684\u60c5\u611f\u3002", en:"Read the poem aloud with feeling, noting pauses and emphasis. Visualize the scenes described and feel the poet's emotions."},
        {cn:"\u627e\u51fa\u8bd7\u4e2d\u7684\u5173\u952e\u610f\u8c61\uff08\u5982\u5c71\u3001\u6c34\u3001\u6708\u3001\u82b1\u7b49\uff09\uff0c\u60f3\u60f3\u5b83\u4eec\u8868\u8fbe\u4e86\u4ec0\u4e48\u611f\u60c5\u3002", en:"Identify key imagery (like mountains, water, moon, flowers) and think about what emotions they convey."}
      ],
      grammarPoints: [
        {point:'现代诗',pointEn:'xiàn dài shī',example:'modern poetry',exampleEn:'现代诗不受格律限制。',explanation:'Modern poetry is not bound by meter.',explanationEn:'形式自由，表达情感'}
      ],
      exercises: [
        {type:"read",cn:"反复朗读课文，体会诗歌的韵味。背诵课文",en:"Read the poems aloud repeatedly, savoring their rhythm. Recite them from memory"},
        {type:"discuss",cn:"\u201C月明的园中，藤萝的叶下，母亲的膝上\u201D，唤起了你怎样的感受？",en:"What feelings does \u2018in the moonlit garden, under wisteria leaves, on Mother\u2019s lap\u2019 evoke?"},
        {type:"think",cn:"第3首诗中的两个\u201C风雨\u201D有什么不一样？",en:"How are the two uses of \u2018storms\u2019 different in the third poem?"}
      ],
      teachingPoints: [
        {cn:"初步了解现代诗的特点：分行、意象、节奏、情感",en:"Learn basic features of modern poetry: line breaks, imagery, rhythm, and emotion"},
        {cn:"体会冰心诗歌中对母爱和大自然的深情表达",en:"Appreciate Bing Xin\u2019s heartfelt expression of maternal love and nature"}
      ],
      parentTips: [
        {cn:"和孩子一起朗读诗歌，感受诗歌的节奏美和情感美",en:"Read the poems aloud together and feel their rhythmic and emotional beauty"},
        {cn:"引导孩子说说自己与母亲之间温暖的回忆",en:"Encourage your child to share warm memories with their mother"}
      ]
    },
    {
      id: 10, title: "绿", titleEn: "Green",
      difficulty: 2,
      text: [
        "好像绿色的墨水瓶倒翻了，\n到处是绿的……",
        "到哪儿去找这么多的绿：\n墨绿、浅绿、嫩绿、\n翠绿、淡绿、粉绿……\n绿得发黑、绿得出奇。",
        "刮的风是绿的，\n下的雨是绿的，\n流的水是绿的，\n阳光也是绿的。",
        "所有的绿集中起来，\n挤在一起，\n重叠在一起，\n静静地交叉在一起。",
        "突然一阵风，\n好像舞蹈教练在指挥，\n所有的绿就整齐地\n按着节拍飘动在一起……"
      ],
      textEn: [
        "As if a bottle of green ink had been overturned,\ngreen everywhere\u2026",
        "Where can you find so much green?\nInk green, light green, tender green,\nemerald, pale green, pinkish green\u2026\nSo green it turns black, green beyond belief.",
        "The blowing wind is green,\nthe falling rain is green,\nthe flowing water is green,\neven the sunlight is green.",
        "All the greens gather together,\nsqueezing together,\noverlapping,\nquietly crisscrossing.",
        "Suddenly a gust of wind,\nlike a dance instructor conducting,\nand all the greens sway together\nin perfect rhythm\u2026"
      ],
      textPinyin: [
        "h\u01ceo xi\u00e0ng l\u01dc s\u00e8 de m\u00f2 shu\u01d0 p\u00edng d\u01ceo f\u0101n le\uff0c\n d\u00e0o ch\u00f9 sh\u00ec l\u01dc de\u2026\u2026",
        "d\u00e0o n\u01ce \u00e9r q\u00f9 zh\u01ceo zh\u00e8 me du\u014d de l\u01dc\uff1a\n m\u00f2 l\u01dc\u3001 qi\u01cen l\u01dc\u3001 n\u00e8n l\u01dc\u3001\n cu\u00ec l\u01dc\u3001 d\u00e0n l\u01dc\u3001 f\u011bn l\u01dc\u2026\u2026\n l\u01dc d\u00e9 f\u0101 h\u0113i\u3001 l\u01dc d\u00e9 ch\u016b q\u00ed\u3002",
        "gu\u0101 de f\u0113ng sh\u00ec l\u01dc de\uff0c\n xi\u00e0 de y\u01d4 sh\u00ec l\u01dc de\uff0c\n li\u00fa de shu\u01d0 sh\u00ec l\u01dc de\uff0c\n y\u00e1ng gu\u0101ng y\u011b sh\u00ec l\u01dc de\u3002",
        "su\u01d2 y\u01d2u de l\u01dc j\u00ed zh\u014dng q\u01d0 l\u00e1i\uff0c\n j\u01d0 z\u00e0i y\u00ec q\u01d0\uff0c\n ch\u00f3ng di\u00e9 z\u00e0i y\u00ec q\u01d0\uff0c\n j\u00ecng j\u00ecng d\u00ec ji\u0101o ch\u0101 z\u00e0i y\u00ec q\u01d0\u3002",
        "t\u016b r\u00e1n y\u00ed zh\u00e8n f\u0113ng\uff0c\n h\u01ceo xi\u00e0ng w\u01d4 d\u01ceo ji\u00e0o li\u00e0n z\u00e0i zh\u01d0 hu\u012b\uff0c\n su\u01d2 y\u01d2u de l\u01dc ji\u00f9 zh\u011bng q\u00ed d\u00ec\n \u00e0n zhe ji\u00e9 p\u0101i pi\u0101o d\u00f2ng z\u00e0i y\u00ec q\u01d0\u2026\u2026"
      ],
      recognizeChars: ["挤","叉"],
      writeChars: ["瓶","挤","叉","挥"],
      vocabWords: [
        {word:'墨绿',pinyin:'m\u00F2 l\u00FC',en:'ink green; dark green',sentence:'墨绿、浅绿、嫩绿。',sentenceEn:'Ink green, light green, tender green.'},
        {word:'翠绿',pinyin:'cu\u00EC l\u00FC',en:'emerald green',sentence:'翠绿、淡绿、粉绿。',sentenceEn:'Emerald, pale green, pinkish green.'},
        {word:'重叠',pinyin:'ch\u00F3ng di\u00E9',en:'to overlap',sentence:'重叠在一起。',sentenceEn:'Overlapping together.'},
        {word:'交叉',pinyin:'ji\u0101o ch\u0101',en:'to crisscross',sentence:'静静地交叉在一起。',sentenceEn:'Quietly crisscrossing together.'},
        {word:'节拍',pinyin:'ji\u00E9 p\u0101i',en:'rhythm; beat',sentence:'按着节拍飘动在一起。',sentenceEn:'Swaying together in perfect rhythm.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u597d\u50cf\u7eff\u8272\u7684\u58a8\u6c34\u74f6\u5012\u7ffb\u4e86\uff0c\n\u5230\u5904\u662f\u7eff\u7684\u2026\u2026", exampleEn: "As if a bottle of green ink had been overturned,\ngreen everywhere\u2026", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u603b\u5206\u7ed3\u6784", pointEn: "General-specific structure", example: "\u597d\u50cf\u7eff\u8272\u7684\u58a8\u6c34\u74f6\u5012\u7ffb\u4e86\uff0c\n\u5230\u5904\u662f\u7eff\u7684\u2026\u2026", exampleEn: "As if a bottle of green ink had been overturned,\ngreen everywhere\u2026", explanation: "\u5148\u603b\u8ff0\u518d\u5206\u8ff0\uff0c\u6216\u5148\u5206\u8ff0\u518d\u603b\u7ed3\uff0c\u4f7f\u6587\u7ae0\u6761\u7406\u6e05\u6670", explanationEn: "Start with overview then details, or vice versa, for clear organization"}
      ],
      footnotes: [
        {term:"\u58a8\u7eff", termEn:"ink green; dark green", definition:"\u3010m\u00f2 l\u00fc\u3011ink green; dark green\u3002", definitionEn:"ink green; dark green"},
        {term:"\u7fe0\u7eff", termEn:"emerald green", definition:"\u3010cu\u00ec l\u00fc\u3011emerald green\u3002", definitionEn:"emerald green"},
        {term:"\u91cd\u53e0", termEn:"to overlap", definition:"\u3010ch\u00f3ng di\u00e9\u3011to overlap\u3002", definitionEn:"to overlap"},
        {term:"\u4ea4\u53c9", termEn:"to crisscross", definition:"\u3010ji\u0101o ch\u0101\u3011to crisscross\u3002", definitionEn:"to crisscross"},
        {term:"\u8282\u62cd", termEn:"rhythm; beat", definition:"\u3010ji\u00e9 p\u0101i\u3011rhythm; beat\u3002", definitionEn:"rhythm; beat"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"有感情地朗读课文，背诵课文",en:"Read the poem with feeling and recite it from memory"},
        {type:"discuss",cn:"说说\u201C所有的绿就整齐地按着节拍飘动在一起\u201D带给你怎样的感受",en:"Share your feelings about \u2018all the greens swaying together in perfect rhythm\u2019"},
        {type:"think",cn:"艾青笔下的\u201C绿\u201D和宗璞笔下的\u201C绿\u201D，带给你怎样不同的感受？",en:"Compare Ai Qing\u2019s \u2018green\u2019 with Zong Pu\u2019s \u2018green\u2019 \u2014 what different feelings do they evoke?"}
      ],
      teachingPoints: [
        {cn:"体会诗人独特的感受：将颜色赋予风、雨、阳光等事物",en:"Appreciate the poet\u2019s unique perception: attributing color to wind, rain, and sunlight"},
        {cn:"感受现代诗的想象力和语言表达的独特性",en:"Feel the imagination and distinctive language expression in modern poetry"}
      ],
      parentTips: [
        {cn:"带孩子到公园或田野观察不同层次的绿色，感受大自然的色彩",en:"Take your child to a park or field to observe different shades of green in nature"},
        {cn:"鼓励孩子尝试用诗歌的形式写写自己看到的颜色",en:"Encourage your child to try writing a poem about a color they observe"}
      ]
    },
    {
      id: 11, title: "白桦", titleEn: "The White Birch",
      difficulty: 2,
      text: [
        "在我的窗前，\n有一棵白桦，\n仿佛涂上银霜，\n披了一身雪花。",
        "毛茸茸的枝头，\n雪绣的花边潇洒，\n串串花穗齐绽，\n洁白的流苏如画。",
        "在朦胧的寂静中\n玉立着这棵白桦，\n在灿灿的金晖里\n闪着晶亮的雪花。",
        "白桦四周徜徉着\n姗姗来迟的朝霞，\n它向白雪皑皑的树枝\n又抹一层银色的光华。"
      ],
      textEn: [
        "Before my window\nstands a white birch,\nas if painted with silver frost,\ncloaked in snow.",
        "On its fuzzy branches,\nsnow-embroidered lace hangs gracefully,\nclusters of catkins in full bloom,\nwhite tassels like a painting.",
        "In the hazy stillness\nthis birch stands proud,\nin the golden glow\nits snow glitters and gleams.",
        "Around the birch tree wanders\nthe late-arriving dawn,\npainting yet another layer of silver light\non the snow-white branches."
      ],
      textPinyin: [
        "z\u00e0i w\u01d2 de chu\u0101ng qi\u00e1n\uff0c\n y\u01d2u y\u00ec k\u0113 b\u00e1i hu\u00e0\uff0c\n f\u01ceng f\u00fa t\u00fa sh\u00e0ng y\u00edn shu\u0101ng\uff0c\n p\u012b le y\u00ec sh\u0113n xu\u011b hu\u0101\u3002",
        "m\u00e1o r\u00f3ng r\u00f3ng de zh\u012b t\u00f3u\uff0c\n xu\u011b xi\u00f9 de hu\u0101 bi\u0101n xi\u0101o s\u01ce\uff0c\n chu\u00e0n chu\u00e0n hu\u0101 su\u00ec q\u00ed zh\u00e0n\uff0c\n ji\u00e9 b\u00e1i de li\u00fa s\u016b r\u00fa hu\u00e0\u3002",
        "z\u00e0i m\u00e9ng l\u00f3ng de j\u00ec j\u00ecng zh\u014dng\n y\u00f9 l\u00ec zhe zh\u00e8 k\u0113 b\u00e1i hu\u00e0\uff0c\n z\u00e0i c\u00e0n c\u00e0n de j\u012bn hu\u012b l\u01d0\n sh\u01cen zhe j\u012bng li\u00e0ng de xu\u011b hu\u0101\u3002",
        "b\u00e1i hu\u00e0 s\u00ec zh\u014du ch\u00e1ng y\u00e1ng zhe\n sh\u0101n sh\u0101n l\u00e1i ch\u00ed de zh\u0101o xi\u00e1\uff0c\n t\u0101 xi\u00e0ng b\u00e1i xu\u011b \u00e1i \u00e1i de sh\u00f9 zh\u012b\n y\u00f2u m\u01d2 y\u00ec c\u00e9ng y\u00edn s\u00e8 de gu\u0101ng hu\u00e1\u3002"
      ],
      recognizeChars: ["绣","潇","绽","朦","胧","晖","徜","徉"],
      writeChars: ["桦","涂","茸","绣","潇","穗","朦","胧","寂","霞","抹"],
      vocabWords: [
        {word:'银霜',pinyin:'y\u00EDn shu\u0101ng',en:'silver frost',sentence:'仿佛涂上银霜。',sentenceEn:'As if painted with silver frost.'},
        {word:'流苏',pinyin:'li\u00FA s\u016B',en:'tassels; fringe',sentence:'洁白的流苏如画。',sentenceEn:'White tassels like a painting.'},
        {word:'朦胧',pinyin:'m\u00E9ng l\u00F3ng',en:'hazy; dim',sentence:'在朦胧的寂静中。',sentenceEn:'In the hazy stillness.'},
        {word:'金晖',pinyin:'j\u012Bn hu\u012B',en:'golden glow',sentence:'在灿灿的金晖里。',sentenceEn:'In the golden glow.'},
        {word:'朝霞',pinyin:'zh\u0101o xi\u00E1',en:'morning glow; dawn',sentence:'姗姗来迟的朝霞。',sentenceEn:'The late-arriving dawn.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u62ab\u4e86\u4e00\u8eab\u96ea\u82b1\u3002", exampleEn: "Before my window\nstands a white birch,\nas if painted with silver frost,\ncloaked ", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u603b\u5206\u7ed3\u6784", pointEn: "General-specific structure", example: "\u62ab\u4e86\u4e00\u8eab\u96ea\u82b1\u3002", exampleEn: "Before my window\nstands a white birch,\nas if painted with silver frost,\ncloaked ", explanation: "\u5148\u603b\u8ff0\u518d\u5206\u8ff0\uff0c\u6216\u5148\u5206\u8ff0\u518d\u603b\u7ed3\uff0c\u4f7f\u6587\u7ae0\u6761\u7406\u6e05\u6670", explanationEn: "Start with overview then details, or vice versa, for clear organization"}
      ],
      footnotes: [
        {term:"\u94f6\u971c", termEn:"silver frost", definition:"\u3010y\u00edn shu\u0101ng\u3011silver frost\u3002", definitionEn:"silver frost"},
        {term:"\u6d41\u82cf", termEn:"tassels; fringe", definition:"\u3010li\u00fa s\u016b\u3011tassels; fringe\u3002", definitionEn:"tassels; fringe"},
        {term:"\u6726\u80e7", termEn:"hazy; dim", definition:"\u3010m\u00e9ng l\u00f3ng\u3011hazy; dim\u3002", definitionEn:"hazy; dim"},
        {term:"\u91d1\u6656", termEn:"golden glow", definition:"\u3010j\u012bn hu\u012b\u3011golden glow\u3002", definitionEn:"golden glow"},
        {term:"\u671d\u971e", termEn:"morning glow; dawn", definition:"\u3010zh\u0101o xi\u00e1\u3011morning glow; dawn\u3002", definitionEn:"morning glow; dawn"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"有感情地朗读课文",en:"Read the poem aloud with feeling"},
        {type:"discuss",cn:"选择几个词语描述这棵白桦，说说它给你留下了怎样的印象",en:"Choose a few words to describe the birch tree and share the impression it leaves on you"},
        {type:"write",cn:"你知道哪些与植物有关的诗歌？摘抄你最喜欢的一首，和同学交流",en:"What plant-related poems do you know? Copy your favorite and share it with classmates"}
      ],
      teachingPoints: [
        {cn:"感受外国诗歌的意境美，体会诗人对白桦的喜爱之情",en:"Appreciate the aesthetic mood of foreign poetry and the poet\u2019s love for the birch tree"},
        {cn:"学习诗歌中色彩词语的运用，如\u201C银霜\u201D\u201C金晖\u201D\u201C银色的光华\u201D",en:"Learn the use of color words in poetry, such as \u2018silver frost,\u2019 \u2018golden glow,\u2019 \u2018silver light\u2019"}
      ],
      parentTips: [
        {cn:"和孩子一起欣赏白桦树的图片或视频，感受诗歌描绘的画面",en:"View pictures or videos of birch trees together to visualize the scenes the poem paints"},
        {cn:"鼓励孩子观察一棵喜欢的树，尝试用诗歌的语言描述它",en:"Encourage your child to observe a favorite tree and try describing it in poetic language"}
      ]
    },
    {
      id: 12, title: "在天晴了的时候", titleEn: "When the Sky Clears",
      difficulty: 2,
      isSelfRead: true,
      text: [
        "在天晴了的时候，\n该到小径中去走走：\n给雨润过的泥路，\n一定是凉爽又温柔；",
        "炫耀着新绿的小草，\n已一下子洗净了尘垢；\n不再胆怯的小白菊，\n慢慢地抬起它们的头，\n试试寒，试试暖，\n然后一瓣瓣地绽透；",
        "抖去水珠的凤蝶儿，\n在木叶间自在闲游，\n把它的饰彩的智慧书页，\n曝着阳光一开一收。",
        "到小径中去走走吧，\n在天晴了的时候：\n赤着脚，携着手，\n踏着新泥，涉过溪流。",
        "新阳推开了阴霾了，\n溪水在温风中晕皱，\n看山间移动的暗绿——\n云的脚迹——它也在闲游。"
      ],
      textEn: [
        "When the sky has cleared,\nyou should stroll along the little path:\nthe rain-soaked mud road\nmust be cool and gentle;",
        "The little grass, flaunting fresh green,\nhas been washed clean of dust;\nthe small white daisies, timid no more,\nslowly raise their heads,\ntesting the cold, testing the warmth,\nthen blooming petal by petal;",
        "The phoenix butterfly, shaking off dewdrops,\nwanders freely among the leaves,\nopening and closing its ornate, wise pages\nin the sunshine.",
        "Go walk the little path,\nwhen the sky has cleared:\nbarefoot, hand in hand,\ntreading new mud, wading through the stream.",
        "The new sun has pushed away the gloom,\nthe creek ripples in the warm breeze,\nsee the moving dark green on the hills \u2014\nfootprints of clouds \u2014 they too are wandering."
      ],
      textPinyin: [
        "z\u00e0i ti\u0101n q\u00edng le de sh\u00ed h\u00f2u\uff0c\n g\u0101i d\u00e0o xi\u01ceo j\u00ecng zh\u014dng q\u00f9 z\u01d2u z\u01d2u\uff1a\n g\u011bi y\u01d4 r\u00f9n gu\u00f2 de n\u00ed l\u00f9\uff0c\n y\u00ed d\u00ecng sh\u00ec li\u00e1ng shu\u01ceng y\u00f2u w\u0113n r\u00f3u\uff1b",
        "xu\u00e0n y\u00e0o zhe x\u012bn l\u01dc de xi\u01ceo c\u01ceo\uff0c\n y\u01d0 y\u00ed xi\u00e0 z\u01d0 x\u01d0 j\u00ecng le ch\u00e9n g\u00f2u\uff1b\n b\u00fa z\u00e0i d\u01cen qi\u00e8 de xi\u01ceo b\u00e1i j\u00fa\uff0c\n m\u00e0n m\u00e0n d\u00ec t\u00e1i q\u01d0 t\u0101 men de t\u00f3u\uff0c\n sh\u00ec sh\u00ec h\u00e1n\uff0c sh\u00ec sh\u00ec nu\u01cen\uff0c\n r\u00e1n h\u00f2u y\u00ed b\u00e0n b\u00e0n d\u00ec zh\u00e0n t\u00f2u\uff1b",
        "d\u01d2u q\u00f9 shu\u01d0 zh\u016b de f\u00e8ng di\u00e9 \u00e9r\uff0c\n z\u00e0i m\u00f9 y\u00e8 ji\u0101n z\u00ec z\u00e0i xi\u00e1n y\u00f3u\uff0c\n b\u01ce t\u0101 de sh\u00ec c\u01cei de zh\u00ec hu\u00ec sh\u016b y\u00e8\uff0c\n p\u00f9 zhe y\u00e1ng gu\u0101ng y\u00ec k\u0101i y\u00ec sh\u014du\u3002",
        "d\u00e0o xi\u01ceo j\u00ecng zh\u014dng q\u00f9 z\u01d2u z\u01d2u ba\uff0c\n z\u00e0i ti\u0101n q\u00edng le de sh\u00ed h\u00f2u\uff1a\n ch\u00ec zhe ji\u01ceo\uff0c xi\u00e9 zhu\u00f3 sh\u01d2u\uff0c\n t\u00e0 zhe x\u012bn n\u00ed\uff0c sh\u00e8 gu\u00f2 x\u012b li\u00fa\u3002",
        "x\u012bn y\u00e1ng tu\u012b k\u0101i le y\u012bn m\u00e1i le\uff0c\n x\u012b shu\u01d0 z\u00e0i w\u0113n f\u0113ng zh\u014dng y\u016bn zh\u00f2u\uff0c\n k\u00e0n sh\u0101n ji\u0101n y\u00ed d\u00f2ng de \u00e0n l\u01dc\u2014\u2014\n y\u00fan de ji\u01ceo j\u00ec\u2014\u2014 t\u0101 y\u011b z\u00e0i xi\u00e1n y\u00f3u\u3002"
      ],
      recognizeChars: ["炫","垢","怯","曝","赤","涉","晕"],
      writeChars: [],
      vocabWords: [
        {word:'小径',pinyin:'xi\u01CEo j\u00ECng',en:'little path',sentence:'该到小径中去走走。',sentenceEn:'You should stroll along the little path.'},
        {word:'凉爽',pinyin:'li\u00E1ng shuǎng',en:'cool and refreshing',sentence:'一定是凉爽又温柔。',sentenceEn:'It must be cool and gentle.'},
        {word:'胆怯',pinyin:'d\u01CEn qi\u00E8',en:'timid; shy',sentence:'不再胆怯的小白菊。',sentenceEn:'The small white daisies, timid no more.'},
        {word:'绽透',pinyin:'zh\u00E0n t\u00F2u',en:'to bloom fully',sentence:'然后一瓣瓣地绽透。',sentenceEn:'Then blooming petal by petal.'},
        {word:'阴霾',pinyin:'y\u012Bn m\u00E1i',en:'gloom; haze',sentence:'新阳推开了阴霾了。',sentenceEn:'The new sun has pushed away the gloom.'}
      ],
      grammarPoints: [
        {point: "\u628a\u5b57\u53e5", pointEn: "b\u01ce-construction", example: "\u5728\u5929\u6674\u4e86\u7684\u65f6\u5019\uff0c\n\u8be5\u5230\u5c0f\u5f84\u4e2d\u53bb\u8d70\u8d70\uff1a\n\u7ed9\u96e8\u6da6\u8fc7\u7684\u6ce5\u8def\uff0c\n\u4e00\u5b9a\u2026", exampleEn: "When the sky has cleared,\nyou should stroll along the little path:\nthe rain-soak", explanation: "\u7528\u201c\u628a\u201d\u5c06\u5bbe\u8bed\u63d0\u524d\uff0c\u5f3a\u8c03\u52a8\u4f5c\u5bf9\u5bf9\u8c61\u7684\u5f71\u54cd", explanationEn: "Moves the object before the verb using \"b\u01ce\" to emphasize the effect of the action"},
        {point: "\u603b\u5206\u7ed3\u6784", pointEn: "General-specific structure", example: "\u5728\u5929\u6674\u4e86\u7684\u65f6\u5019\uff0c\n\u8be5\u5230\u5c0f\u5f84\u4e2d\u53bb\u8d70\u8d70\uff1a\n\u7ed9\u96e8\u6da6\u8fc7\u7684\u6ce5\u8def\uff0c\n\u4e00\u5b9a\u2026", exampleEn: "When the sky has cleared,\nyou should stroll along the little path:\nthe rain-soak", explanation: "\u5148\u603b\u8ff0\u518d\u5206\u8ff0\uff0c\u6216\u5148\u5206\u8ff0\u518d\u603b\u7ed3\uff0c\u4f7f\u6587\u7ae0\u6761\u7406\u6e05\u6670", explanationEn: "Start with overview then details, or vice versa, for clear organization"}
      ],
      footnotes: [
        {term:"\u5c0f\u5f84", termEn:"little path", definition:"\u3010xi\u01ceo j\u00ecng\u3011little path\u3002", definitionEn:"little path"},
        {term:"\u51c9\u723d", termEn:"cool and refreshing", definition:"\u3010li\u00e1ng shu\u01ceng\u3011cool and refreshing\u3002", definitionEn:"cool and refreshing"},
        {term:"\u80c6\u602f", termEn:"timid; shy", definition:"\u3010d\u01cen qi\u00e8\u3011timid; shy\u3002", definitionEn:"timid; shy"},
        {term:"\u7efd\u900f", termEn:"to bloom fully", definition:"\u3010zh\u00e0n t\u00f2u\u3011to bloom fully\u3002", definitionEn:"to bloom fully"},
        {term:"\u9634\u973e", termEn:"gloom; haze", definition:"\u3010y\u012bn m\u00e1i\u3011gloom; haze\u3002", definitionEn:"gloom; haze"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"有感情地朗读并背诵课文。结合自己喜欢的诗句，和同学交流读后的感受",en:"Read with feeling and recite from memory. Discuss your favorite lines and feelings with classmates"},
        {type:"write",cn:"有兴趣的同学还可以用诗的形式，写写自己看到过的雨后天晴的景象",en:"Interested students can try writing a poem about a scene after rain"}
      ],
      teachingPoints: [
        {cn:"体会诗人用拟人手法描写雨后景物的表达效果",en:"Appreciate how the poet uses personification to describe the scenery after rain"},
        {cn:"感受诗歌的音乐美和画面美，体会诗人对自然的热爱",en:"Feel the musical and visual beauty of the poem and the poet\u2019s love of nature"}
      ],
      parentTips: [
        {cn:"雨后和孩子一起散步，观察自然界的变化，感受诗中描写的情景",en:"Take a walk with your child after rain to observe nature and feel the scenes in the poem"},
        {cn:"鼓励孩子尝试写简短的现代诗，表达自己的感受",en:"Encourage your child to try writing short modern poems expressing their feelings"}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Daily Accumulation",content:{cn:"了解古代文人：屈原、陶渊明、孟浩然、杜甫、韩愈、刘禹锡、范仲淹、龚自珍。诗歌名句：\u201C诗和音乐一样，生命全在节奏。\u201D——朱光潜",en:"Learn about ancient writers: Qu Yuan, Tao Yuanming, Meng Haoran, Du Fu, Han Yu, Liu Yuxi, Fan Zhongyan, Gong Zizhen. Quote: \u2018Poetry, like music, has its life in rhythm.\u2019 \u2014 Zhu Guangqian"}},
    wordSentence: {title:"词句段运用",titleEn:"Words, Sentences & Paragraphs",content:{cn:"读一读描写颜色的句子，注意加点的部分，再照样子写一写。",en:"Read sentences describing colors, note the highlighted parts, and write your own."}},
    composition: {title:"综合性学习：轻叩诗歌大门",titleEn:"Integrated Learning: Knocking on Poetry\u2019s Door",prompt:{cn:"合作编小诗集，举办诗歌朗诵会。收集喜欢的现代诗，工整地抄写下来，注意写清楚作者和出处。",en:"Collaboratively compile a small poetry anthology and hold a poetry recital. Collect favorite modern poems, copy them neatly, and note the authors and sources."}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 4 — 动物世界 Animals (Lessons 13-15)  */
/* ═══════════════════════════════════════════ */
{
  id: 4, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 13, title: "猫", titleEn: "The Cat",
      difficulty: 2,
      text: [
        "猫的性格实在有些古怪。",
        "说它老实吧，它的确有时候很乖。它会找个暖和的地方，成天睡大觉，无忧无虑，什么事也不过问。可是，它决定要出去玩玩，就会出走一天一夜，任凭谁怎么呼唤，它也不肯回来。说它贪玩吧，的确是啊，要不怎么会一天一夜不回家呢？可是，它听到老鼠的一点儿响动，又是多么尽职。它屏息凝视，一连就是几个钟头，非把老鼠等出来不可！",
        "它要是高兴，能比谁都温柔可亲：用身子蹭你的腿，把脖子伸出来让你给它抓痒，或是在你写作的时候，跳上桌来，在稿纸上踩印几朵小梅花。它还会丰富多腔地叫唤，长短不同，粗细各异，变化多端。在不叫的时候，它还会咕噜咕噜地给自己解闷。这可都凭它的高兴。它若是不高兴啊，无论谁说多少好话，它也一声不出，连半朵小梅花也不肯印在稿纸上！",
        "它什么都怕，总想藏起来。可是它又那么勇猛，不要说见着小虫和老鼠，就是遇上蛇也敢斗一斗。",
        "这种古怪的小动物，真让人觉得可爱。",
        "满月的小猫们就更好玩了，腿脚还不稳，可是已经学会淘气。妈妈的尾巴，一根鸡毛，都是它们的好玩具，耍个没完没了。一玩起来，它们不知要摔多少跟头，但是跌倒了马上起来，再跑再跌。它们的头撞在门上，桌腿上，和彼此的头上，撞疼了也不哭。它们的胆子越来越大，逐渐开辟新的游戏场所。它们到院子里来了。院中的花草可遭了殃。它们在花盆里摔跤，抱着花枝打秋千，所过之处，枝折花落。你见了，绝不会责打它们，它们是那么生气勃勃，天真可爱！"
      ],
      textEn: [
        "The cat\u2019s personality is truly peculiar.",
        "You might call it well-behaved \u2014 indeed, sometimes it is. It finds a warm spot and sleeps all day, carefree, minding nothing. But once it decides to go out and play, it\u2019ll be gone a whole day and night, ignoring all calls. Call it playful? Certainly \u2014 why else would it stay out so long? Yet when it hears the slightest mouse stir, it becomes intensely focused, holding its breath and staring for hours, determined to wait the mouse out!",
        "When it\u2019s happy, it\u2019s the most affectionate creature: rubbing against your legs, stretching its neck for scratches, or jumping onto your desk to stamp little \u2018plum blossom\u2019 paw prints on your manuscript. It meows in rich variety \u2014 long and short, thick and thin, endlessly changing. When not meowing, it purrs contentedly. All this depends on its mood. When unhappy, no amount of sweet talk will coax a sound from it, not even half a paw print on your paper!",
        "It\u2019s afraid of everything and always wants to hide. Yet it can be remarkably brave \u2014 not just with insects and mice, but it will even fight a snake.",
        "This peculiar little creature is truly lovable.",
        "Month-old kittens are even more fun. Their legs are still unsteady, but they\u2019ve already learned to be mischievous. Mother\u2019s tail, a chicken feather \u2014 anything becomes a toy. Once they start playing, they tumble endlessly, falling and getting right back up. They bump their heads on doors, table legs, and each other, and never cry. Growing bolder, they explore new territory \u2014 the yard. The flowers and plants suffer! They wrestle in flowerpots, swing on branches, leaving broken stems and fallen petals everywhere. You\u2019d never scold them \u2014 they\u2019re so full of life and innocent charm!"
      ],
      textPinyin: [
        "m\u0101o de x\u00ecng g\u00e9 sh\u00ed z\u00e0i y\u01d2u xi\u0113 g\u01d4 gu\u00e0i\u3002",
        "shu\u014d t\u0101 l\u01ceo sh\u00ed ba\uff0c t\u0101 de qu\u00e8 y\u01d2u sh\u00ed h\u00f2u h\u011bn gu\u0101i\u3002 t\u0101 hu\u00ec zh\u01ceo g\u00e8 nu\u01cen huo de d\u00ec f\u0101ng\uff0c ch\u00e9ng ti\u0101n shu\u00ec d\u00e0 ju\u00e9\uff0c w\u00fa y\u014du w\u00fa l\u01dc\uff0c sh\u00e9n me sh\u00ec y\u011b b\u00fa gu\u00f2 w\u00e8n\u3002 k\u011b sh\u00ec\uff0c t\u0101 ju\u00e9 d\u00ecng y\u00e0o ch\u016b q\u00f9 w\u00e1n w\u00e1n\uff0c ji\u00f9 hu\u00ec ch\u016b z\u01d2u y\u00ec ti\u0101n y\u00ed y\u00e8\uff0c r\u00e8n p\u00edng shu\u00ed z\u011bn me h\u016b hu\u00e0n\uff0c t\u0101 y\u011b b\u00f9 k\u011bn hu\u00ed l\u00e1i\u3002 shu\u014d t\u0101 t\u0101n w\u00e1n ba\uff0c d\u00ed qu\u00e8 sh\u00ec a\uff0c y\u00e0o b\u00f9 z\u011bn me hu\u00ec y\u00ec ti\u0101n y\u00ed y\u00e8 b\u00f9 hu\u00ed ji\u0101 ne\uff1f k\u011b sh\u00ec\uff0c t\u0101 t\u012bng d\u00e0o l\u01ceo sh\u01d4 de y\u00ec di\u01cen \u00e9r xi\u01ceng d\u00f2ng\uff0c y\u00f2u sh\u00ec du\u014d me j\u00ecn zh\u00ed\u3002 t\u0101 b\u01d0ng x\u012b n\u00edng sh\u00ec\uff0c y\u00ec li\u00e1n ji\u00f9 sh\u00ec j\u01d0 g\u00e8 zh\u014dng t\u00f3u\uff0c f\u0113i b\u01ce l\u01ceo sh\u01d4 d\u011bng ch\u016b l\u00e1i b\u00f9 k\u011b\uff01",
        "t\u0101 y\u00e0o shi g\u0101o x\u00ecng\uff0c n\u00e9ng b\u01d0 shu\u00ed d\u014du w\u0113n r\u00f3u k\u011b q\u012bn\uff1a y\u00f2ng sh\u0113n zi c\u00e8ng n\u01d0 de tu\u01d0\uff0c b\u01ce b\u00f3 zi sh\u0113n ch\u016b l\u00e1i r\u00e0ng n\u01d0 g\u011bi t\u0101 zhu\u0101 y\u01ceng\uff0c hu\u00f2 sh\u00ec z\u00e0i n\u01d0 xi\u011b zu\u00f2 de sh\u00ed h\u00f2u\uff0c ti\u00e0o sh\u00e0ng zhu\u014d l\u00e1i\uff0c z\u00e0i g\u01ceo zh\u01d0 sh\u00e0ng c\u01cei y\u00ecn j\u01d0 du\u01d2 xi\u01ceo m\u00e9i hu\u0101\u3002 t\u0101 h\u00e1i hu\u00ec f\u0113ng f\u00f9 du\u014d qi\u0101ng d\u00ec ji\u00e0o hu\u00e0n\uff0c ch\u00e1ng du\u01cen b\u00f9 t\u00f3ng\uff0c c\u016b x\u00ec g\u00e8 y\u00ec\uff0c bi\u00e0n hu\u00e0 du\u014d du\u0101n\u3002 z\u00e0i b\u00fa ji\u00e0o de sh\u00ed h\u00f2u\uff0c t\u0101 h\u00e1i hu\u00ec g\u016b l\u016b g\u016b l\u016b d\u00ec g\u011bi z\u00ec j\u01d0 ji\u011b m\u0113n\u3002 zh\u00e8 k\u011b d\u014du p\u00edng t\u0101 de g\u0101o x\u00ecng\u3002 t\u0101 ru\u00f2 sh\u00ec b\u00f9 g\u0101o x\u00ecng a\uff0c w\u00fa l\u00f9n shu\u00ed shu\u014d du\u014d sh\u01ceo h\u01ceo hu\u00e0\uff0c t\u0101 y\u011b y\u00ec sh\u0113ng b\u00f9 ch\u016b\uff0c li\u00e1n b\u00e0n du\u01d2 xi\u01ceo m\u00e9i hu\u0101 y\u011b b\u00f9 k\u011bn y\u00ecn z\u00e0i g\u01ceo zh\u01d0 sh\u00e0ng\uff01",
        "t\u0101 sh\u00e9n me d\u014du p\u00e0\uff0c z\u01d2ng xi\u01ceng c\u00e1ng q\u01d0 l\u00e1i\u3002 k\u011b sh\u00ec t\u0101 y\u00f2u n\u00e0 me y\u01d2ng m\u011bng\uff0c b\u00fa y\u00e0o shu\u014d ji\u00e0n zhe xi\u01ceo ch\u00f3ng h\u00e9 l\u01ceo sh\u01d4\uff0c ji\u00f9 sh\u00ec y\u00f9 sh\u00e0ng sh\u00e9 y\u011b g\u01cen d\u00f2u y\u00ec d\u01d2u\u3002",
        "zh\u00e8 zh\u01d2ng g\u01d4 gu\u00e0i de xi\u01ceo d\u00f2ng w\u00f9\uff0c zh\u0113n r\u00e0ng r\u00e9n ju\u00e9 de k\u011b \u00e0i\u3002",
        "m\u01cen yu\u00e8 de xi\u01ceo m\u0101o men ji\u00f9 g\u00e8ng h\u01ceo w\u00e1n le\uff0c tu\u01d0 ji\u01ceo h\u00e1i b\u00f9 w\u011bn\uff0c k\u011b sh\u00ec y\u01d0 j\u012bng xu\u00e9 hu\u00ec t\u00e1o q\u00ec\u3002 m\u0101 ma de w\u011bi ba\uff0c y\u00ec g\u0113n j\u012b m\u00e1o\uff0c d\u014du sh\u00ec t\u0101 men de h\u01ceo w\u00e1n j\u00f9\uff0c shu\u01ce g\u00e8 m\u00e9i w\u00e1n m\u00e9i li\u01ceo\u3002 y\u00ec w\u00e1n q\u01d0 l\u00e1i\uff0c t\u0101 men b\u00f9 zh\u012b y\u00e0o shu\u0101i du\u014d sh\u01ceo g\u0113n tou\uff0c d\u00e0n sh\u00ec di\u0113 d\u01ceo le m\u01ce sh\u00e0ng q\u01d0 l\u00e1i\uff0c z\u00e0i p\u01ceo z\u00e0i di\u0113\u3002 t\u0101 men de t\u00f3u zhu\u00e0ng z\u00e0i m\u00e9n sh\u00e0ng\uff0c zhu\u014d tu\u01d0 sh\u00e0ng\uff0c h\u00e9 b\u01d0 c\u01d0 de t\u00f3u sh\u00e0ng\uff0c zhu\u00e0ng t\u00e9ng le y\u011b b\u00f9 k\u016b\u3002 t\u0101 men de d\u01cen z\u01d0 yu\u00e8 l\u00e1i yu\u00e8 d\u00e0\uff0c zh\u00fa ji\u00e0n k\u0101i p\u00ec x\u012bn de y\u00f3u x\u00ec ch\u01ceng su\u01d2\u3002 t\u0101 men d\u00e0o yu\u00e0n zi l\u01d0 l\u00e1i le\u3002 yu\u00e0n zh\u014dng de hu\u0101 c\u01ceo k\u011b z\u0101o le y\u0101ng\u3002 t\u0101 men z\u00e0i hu\u0101 p\u00e9n l\u01d0 shu\u0101i ji\u0101o\uff0c b\u00e0o zhe hu\u0101 zh\u012b d\u01ce qi\u016b qi\u0101n\uff0c su\u01d2 gu\u00f2 zh\u012b ch\u00f9\uff0c zh\u012b zh\u00e9 hu\u0101 lu\u00f2\u3002 n\u01d0 ji\u00e0n le\uff0c ju\u00e9 b\u00fa hu\u00ec z\u00e9 d\u01ce t\u0101 men\uff0c t\u0101 men sh\u00ec n\u00e0 me sh\u0113ng q\u00ec b\u00f3 b\u00f3\uff0c ti\u0101n zh\u0113n k\u011b \u00e0i\uff01"
      ],
      recognizeChars: ["虑","职","屏","蹭","稿","腔","殃","折"],
      writeChars: ["忧","虑","贪","职","屏","蹭","稿","腔","解","闷","蛇","遭","殃","盆","勃"],
      vocabWords: [
        {word:'古怪',pinyin:'g\u01D4 gu\u00E0i',en:'peculiar; eccentric',sentence:'猫的性格实在有些古怪。',sentenceEn:'The cat\u2019s personality is truly peculiar.'},
        {word:'无忧无虑',pinyin:'w\u00FA y\u014Du w\u00FA l\u01DC',en:'carefree; without worries',sentence:'无忧无虑，什么事也不过问。',sentenceEn:'Carefree, minding nothing.'},
        {word:'尽职',pinyin:'j\u00ECn zh\u00ED',en:'conscientious; dutiful',sentence:'它听到老鼠的响动，又是多么尽职。',sentenceEn:'When it hears the slightest mouse stir, it becomes intensely focused.'},
        {word:'屏息凝视',pinyin:'b\u01D0ng x\u012B n\u00EDng sh\u00EC',en:'hold breath and stare intently',sentence:'它屏息凝视，一连就是几个钟头。',sentenceEn:'Holding its breath and staring for hours.'},
        {word:'遭殃',pinyin:'z\u0101o y\u0101ng',en:'to suffer; to be hit by disaster',sentence:'院中的花草可遭了殃。',sentenceEn:'The flowers and plants suffered!'},
        {word:'生气勃勃',pinyin:'sh\u0113ng q\u00EC b\u00F3 b\u00F3',en:'full of life; vibrant',sentence:'它们是那么生气勃勃，天真可爱！',sentenceEn:'They are so full of life and innocent charm!'}
      ],
      grammarPoints: [
        {point: "\u867d\u7136\u2026\u2026\u4f46\u662f\u2026\u2026", pointEn: "although...but...", example: "\u732b\u7684\u6027\u683c\u5b9e\u5728\u6709\u4e9b\u53e4\u602a\u3002", exampleEn: "The cat\u2019s personality is truly peculiar.", explanation: "\u8f6c\u6298\u590d\u53e5\uff0c\u8868\u793a\u524d\u540e\u610f\u601d\u7684\u8f6c\u6298", explanationEn: "Adversative compound sentence showing contrast between clauses"},
        {point: "\u628a\u5b57\u53e5", pointEn: "b\u01ce-construction", example: "\u732b\u7684\u6027\u683c\u5b9e\u5728\u6709\u4e9b\u53e4\u602a\u3002", exampleEn: "The cat\u2019s personality is truly peculiar.", explanation: "\u7528\u201c\u628a\u201d\u5c06\u5bbe\u8bed\u63d0\u524d\uff0c\u5f3a\u8c03\u52a8\u4f5c\u5bf9\u5bf9\u8c61\u7684\u5f71\u54cd", explanationEn: "Moves the object before the verb using \"b\u01ce\" to emphasize the effect of the action"}
      ],
      footnotes: [
        {term:"\u53e4\u602a", termEn:"peculiar; eccentric", definition:"\u3010g\u01d4 gu\u00e0i\u3011peculiar; eccentric\u3002", definitionEn:"peculiar; eccentric"},
        {term:"\u65e0\u5fe7\u65e0\u8651", termEn:"carefree; without worries", definition:"\u3010w\u00fa y\u014du w\u00fa l\u01dc\u3011carefree; without worries\u3002", definitionEn:"carefree; without worries"},
        {term:"\u5c3d\u804c", termEn:"conscientious; dutiful", definition:"\u3010j\u00ecn zh\u00ed\u3011conscientious; dutiful\u3002", definitionEn:"conscientious; dutiful"},
        {term:"\u5c4f\u606f\u51dd\u89c6", termEn:"hold breath and stare intently", definition:"\u3010b\u01d0ng x\u012b n\u00edng sh\u00ec\u3011hold breath and stare intently\u3002", definitionEn:"hold breath and stare intently"},
        {term:"\u906d\u6b83", termEn:"to suffer; to be hit by disaster", definition:"\u3010z\u0101o y\u0101ng\u3011to suffer; to be hit by disaster\u3002", definitionEn:"to suffer; to be hit by disaster"},
        {term:"\u751f\u6c14\u52c3\u52c3", termEn:"full of life; vibrant", definition:"\u3010sh\u0113ng q\u00ec b\u00f3 b\u00f3\u3011full of life; vibrant\u3002", definitionEn:"full of life; vibrant"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"默读课文，说说课文围绕猫的可爱讲了哪几层意思",en:"Read silently and summarize the different aspects of the cat\u2019s lovableness"},
        {type:"discuss",cn:"举例说说可以从哪些地方看出作者非常喜欢猫",en:"Give examples showing where the author\u2019s deep affection for cats is evident"},
        {type:"write",cn:"读一读，体会\u201C说它老实吧……可是……\u201D这段话的表达特点，再照样子写一写",en:"Read and appreciate the expression pattern of \u2018call it well-behaved\u2026 but\u2026\u2019 and try writing similarly"}
      ],
      teachingPoints: [
        {cn:"体会作者表面似嗔实爱的写法，从字里行间感受对猫的深深喜爱",en:"Appreciate the author\u2019s seemingly critical but actually affectionate tone, feeling deep love between the lines"},
        {cn:"学习\u201C说它……吧……可是……\u201D这种先说一面再转折的表达方法",en:"Learn the expression pattern of stating one aspect then pivoting with \u2018but\u2019"}
      ],
      parentTips: [
        {cn:"和孩子聊聊家里或见过的小动物，感受动物的可爱",en:"Chat with your child about pets or animals they\u2019ve seen and appreciate their charm"},
        {cn:"引导孩子仔细观察一种小动物，尝试用幽默的语言描写它的特点",en:"Guide your child to observe an animal closely and describe it with humor"}
      ]
    },
    {
      id: 14, title: "母鸡", titleEn: "The Hen",
      difficulty: 2,
      text: [
        "我一向讨厌母鸡。听吧，它由前院嘎嘎到后院，由后院再嘎嘎到前院，没完没了，并且没有什么理由，讨厌！",
        "有的时候，它不这样乱叫，而是细声细气的，有什么心事似的，颤颤巍巍的，顺着墙根，或沿着田坝，那么扯长了声如怨如诉，使人心中立刻结起个小疙瘩来。",
        "它永远不反抗公鸡，有时候却欺侮最忠厚的鸭子。更可恶的是遇到另一只母鸡的时候，它会下毒手，趁其不备，狠狠地咬一口，咬下一撮儿毛来。",
        "到下蛋的时候，它差不多是发了狂，恨不能让全世界都知道它这点儿成绩；就是聋人也会被它吵得受不了。",
        "可是，现在我改变了心思，我看见一只孵出一群小雏鸡的母鸡。",
        "不论是在院里，还是在院外，它总是挺着脖儿，表示出世界上并没有可怕的东西。一只鸟儿飞过，或是什么东西响了一声，它立刻警戒起来：歪着头听；挺着身儿预备作战；看看前，看看后，咕咕地警告鸡雏要马上集合到它身边来。",
        "发现了一点儿可吃的东西，它咕咕地紧叫，啄一啄那个东西，马上便放下，让它的儿女吃。结果，每一只鸡雏的肚子都圆圆地下垂，像刚装了一两个汤圆儿似的，它自己却消瘦了许多。假若有别的大鸡来抢食，它一定出击，把它们赶出老远，连大公鸡也怕它三分。",
        "它教鸡雏们啄食，掘地，用土洗澡，一天不知教多少次。它还半蹲着，让它们挤在它的翅下、胸下，得一点儿温暖。它若伏在地上，鸡雏们有的便爬到它的背上，啄它的头或别的地方，它一声也不哼。",
        "在夜间若有什么动静，它便放声啼叫，顶尖锐，顶凄惨，无论多么贪睡的人都得起来看看，是不是有了黄鼠狼。",
        "它负责，慈爱，勇敢，辛苦，因为它有了一群鸡雏。它伟大，因为它是鸡母亲。一个母亲必定就是一位英雄。",
        "我不敢再讨厌母鸡了。"
      ],
      textEn: [
        "I always disliked the hen. Listen to her clucking from the front yard to the back, back to the front, endlessly, for no reason. Annoying!",
        "Sometimes, instead of cackling, she made soft, plaintive sounds, trembling, creeping along walls or field edges, stretching her voice as if full of grievances, knotting your heart.",
        "She never stood up to the rooster but bullied the gentlest duck. Worse, upon meeting another hen, she\u2019d attack without warning, biting hard and pulling out a tuft of feathers.",
        "When laying eggs, she practically went mad, as if wanting the whole world to know her tiny achievement; even a deaf person couldn\u2019t bear the noise.",
        "But now I\u2019ve changed my mind. I watched a hen that had hatched a brood of chicks.",
        "Whether in or out of the yard, she always held her neck high, as if nothing in the world was frightening. If a bird flew by or something made a noise, she was instantly on alert: cocking her head to listen, standing ready for battle, checking front and back, clucking warnings for chicks to gather at her side.",
        "Whenever she found something edible, she clucked urgently, pecked at it, then immediately set it down for her chicks. Soon every chick\u2019s belly was round as if stuffed with rice balls, while she herself grew thin. If another chicken dared steal food, she attacked fiercely, chasing it far away \u2014 even the big rooster feared her.",
        "She taught chicks to peck, dig, and dust-bathe, countless times each day. She half-crouched so they could huddle under her wings for warmth. When she lay on the ground, chicks climbed on her back and pecked her head; she never made a sound.",
        "If something stirred at night, she cried out \u2014 sharp and pitiful \u2014 waking even the deepest sleeper to check for weasels.",
        "She was responsible, loving, brave, and hardworking, because she had a brood of chicks. She was great, because she was a hen-mother. A mother is always a hero.",
        "I no longer dared to dislike the hen."
      ],
      textPinyin: [
        "w\u01d2 y\u00ed xi\u00e0ng t\u01ceo y\u00e0n m\u01d4 j\u012b\u3002 t\u012bng ba\uff0c t\u0101 y\u00f3u qi\u00e1n yu\u00e0n g\u0101 g\u0101 d\u00e0o h\u00f2u yu\u00e0n\uff0c y\u00f3u h\u00f2u yu\u00e0n z\u00e0i g\u0101 g\u0101 d\u00e0o qi\u00e1n yu\u00e0n\uff0c m\u00e9i w\u00e1n m\u00e9i li\u01ceo\uff0c b\u00ecng qi\u011b m\u00e9i y\u01d2u sh\u00e9n me l\u01d0 y\u00f3u\uff0c t\u01ceo y\u00e0n\uff01",
        "y\u01d2u de sh\u00ed h\u00f2u\uff0c t\u0101 b\u00fa zh\u00e8 y\u00e0ng lu\u00e0n ji\u00e0o\uff0c \u00e9r sh\u00ec x\u00ec sh\u0113ng x\u00ec q\u00ec de\uff0c y\u01d2u sh\u00e9n me x\u012bn sh\u00ec sh\u00ec de\uff0c ch\u00e0n ch\u00e0n w\u0113i w\u0113i de\uff0c sh\u00f9n zhe qi\u00e1ng g\u0113n\uff0c hu\u00f2 y\u00e1n zhe ti\u00e1n b\u00e0\uff0c n\u00e0 me ch\u011b ch\u00e1ng le sh\u0113ng r\u00fa yu\u00e0n r\u00fa s\u00f9\uff0c sh\u01d0 r\u00e9n x\u012bn zh\u014dng l\u00ec k\u00e8 ji\u00e9 q\u01d0 g\u00e8 xi\u01ceo g\u0113 da l\u00e1i\u3002",
        "t\u0101 y\u01d2ng yu\u01cen b\u00f9 f\u01cen k\u00e0ng g\u014dng j\u012b\uff0c y\u01d2u sh\u00ed h\u00f2u qu\u00e8 q\u012b w\u01d4 zu\u00ec zh\u014dng h\u00f2u de y\u0101 zi\u3002 g\u00e8ng k\u011b w\u00f9 de sh\u00ec y\u00f9 d\u00e0o l\u00ecng y\u00ec zh\u012b m\u01d4 j\u012b de sh\u00ed h\u00f2u\uff0c t\u0101 hu\u00ec xi\u00e0 d\u00fa sh\u01d2u\uff0c ch\u00e8n q\u00ed b\u00fa b\u00e8i\uff0c h\u011bn h\u011bn d\u00ec y\u01ceo y\u00ec k\u01d2u\uff0c y\u01ceo xi\u00e0 y\u00ec cu\u014d \u00e9r m\u00e1o l\u00e1i\u3002",
        "d\u00e0o xi\u00e0 d\u00e0n de sh\u00ed h\u00f2u\uff0c t\u0101 ch\u00e0 b\u00f9 du\u014d sh\u00ec f\u0101 le ku\u00e1ng\uff0c h\u00e8n b\u00f9 n\u00e9ng r\u00e0ng qu\u00e1n sh\u00ec ji\u00e8 d\u014du zh\u012b d\u00e0o t\u0101 zh\u00e8 di\u01cen \u00e9r ch\u00e9ng j\u00ec\uff1b ji\u00f9 sh\u00ec l\u00f3ng r\u00e9n y\u011b hu\u00ec b\u00e8i t\u0101 ch\u01ceo d\u00e9 sh\u00f2u b\u00f9 li\u01ceo\u3002",
        "k\u011b sh\u00ec\uff0c xi\u00e0n z\u00e0i w\u01d2 g\u01cei bi\u00e0n le x\u012bn s\u012b\uff0c w\u01d2 k\u00e0n ji\u00e0n y\u00ec zh\u012b f\u016b ch\u016b y\u00ec q\u00fan xi\u01ceo ch\u00fa j\u012b de m\u01d4 j\u012b\u3002",
        "b\u00fa l\u00f9n sh\u00ec z\u00e0i yu\u00e0n l\u01d0\uff0c h\u00e1i sh\u00ec z\u00e0i yu\u00e0n w\u00e0i\uff0c t\u0101 z\u01d2ng sh\u00ec t\u01d0ng zhe b\u00f3 \u00e9r\uff0c bi\u01ceo sh\u00ec ch\u016b sh\u00ec ji\u00e8 sh\u00e0ng b\u00ecng m\u00e9i y\u01d2u k\u011b p\u00e0 de d\u014dng x\u012b\u3002 y\u00ec zh\u012b ni\u01ceo \u00e9r f\u0113i gu\u00f2\uff0c hu\u00f2 sh\u00ec sh\u00e9n me d\u014dng x\u012b xi\u01ceng le y\u00ec sh\u0113ng\uff0c t\u0101 l\u00ec k\u00e8 j\u01d0ng ji\u00e8 q\u01d0 l\u00e1i\uff1a w\u0101i zhe t\u00f3u t\u012bng\uff1b t\u01d0ng zhe sh\u0113n \u00e9r y\u00f9 b\u00e8i zu\u00f2 zh\u00e0n\uff1b k\u00e0n k\u00e0n qi\u00e1n\uff0c k\u00e0n k\u00e0n h\u00f2u\uff0c g\u016b g\u016b d\u00ec j\u01d0ng g\u00e0o j\u012b ch\u00fa y\u00e0o m\u01ce sh\u00e0ng j\u00ed h\u00e9 d\u00e0o t\u0101 sh\u0113n bi\u0101n l\u00e1i\u3002",
        "f\u0101 xi\u00e0n le y\u00ec di\u01cen \u00e9r k\u011b ch\u012b de d\u014dng x\u012b\uff0c t\u0101 g\u016b g\u016b d\u00ec j\u01d0n ji\u00e0o\uff0c zhu\u00f3 yi zhu\u00f3 n\u00e0 g\u00e8 d\u014dng x\u012b\uff0c m\u01ce sh\u00e0ng bi\u00e0n f\u00e0ng xi\u00e0\uff0c r\u00e0ng t\u0101 de \u00e9r n\u01da ch\u012b\u3002 ji\u00e9 gu\u01d2\uff0c m\u011bi y\u00ec zh\u012b j\u012b ch\u00fa de d\u00f9 z\u01d0 d\u014du yu\u00e1n yu\u00e1n d\u00ec xi\u00e0 chu\u00ed\uff0c xi\u00e0ng g\u0101ng zhu\u0101ng le y\u00ec li\u01ceng g\u00e8 t\u0101ng yu\u00e1n \u00e9r s\u00ec de\uff0c t\u0101 z\u00ec j\u01d0 qu\u00e8 xi\u0101o sh\u00f2u le x\u01d4 du\u014d\u3002 ji\u01ce ru\u00f2 y\u01d2u bi\u00e9 de d\u00e0 j\u012b l\u00e1i qi\u01ceng sh\u00ed\uff0c t\u0101 y\u00ed d\u00ecng ch\u016b j\u012b\uff0c b\u01ce t\u0101 men g\u01cen ch\u016b l\u01ceo yu\u01cen\uff0c li\u00e1n d\u00e0 g\u014dng j\u012b y\u011b p\u00e0 t\u0101 s\u0101n f\u0113n\u3002",
        "t\u0101 ji\u00e0o j\u012b ch\u00fa men zhu\u00f3 sh\u00ed\uff0c ju\u00e9 d\u00ec\uff0c y\u00f2ng t\u01d4 x\u01d0 z\u01ceo\uff0c y\u00ec ti\u0101n b\u00f9 zh\u012b ji\u00e0o du\u014d sh\u01ceo c\u00ec\u3002 t\u0101 h\u00e1i b\u00e0n d\u016bn zhe\uff0c r\u00e0ng t\u0101 men j\u01d0 z\u00e0i t\u0101 de ch\u00ec xi\u00e0\u3001 xi\u014dng xi\u00e0\uff0c d\u00e9 y\u00ec di\u01cen \u00e9r w\u0113n nu\u01cen\u3002 t\u0101 ru\u00f2 f\u00fa z\u00e0i d\u00ec sh\u00e0ng\uff0c j\u012b ch\u00fa men y\u01d2u de bi\u00e0n p\u00e1 d\u00e0o t\u0101 de b\u00e8i sh\u00e0ng\uff0c zhu\u00f3 t\u0101 de t\u00f3u hu\u00f2 bi\u00e9 de d\u00ec f\u0101ng\uff0c t\u0101 y\u00ec sh\u0113ng y\u011b b\u00f9 h\u0113ng\u3002",
        "z\u00e0i y\u00e8 ji\u0101n ru\u00f2 y\u01d2u sh\u00e9n me d\u00f2ng j\u00ecng\uff0c t\u0101 bi\u00e0n f\u00e0ng sh\u0113ng t\u00ed ji\u00e0o\uff0c d\u01d0ng ji\u0101n ru\u00ec\uff0c d\u01d0ng q\u012b c\u01cen\uff0c w\u00fa l\u00f9n du\u014d me t\u0101n shu\u00ec de r\u00e9n d\u014du d\u00e9 q\u01d0 l\u00e1i k\u00e0n k\u00e0n\uff0c sh\u00ec bu sh\u00ec y\u01d2u le hu\u00e1ng sh\u01d4 l\u00e1ng\u3002",
        "t\u0101 f\u00f9 z\u00e9\uff0c c\u00ed \u00e0i\uff0c y\u01d2ng g\u01cen\uff0c x\u012bn k\u01d4\uff0c y\u012bn w\u00e8i t\u0101 y\u01d2u le y\u00ec q\u00fan j\u012b ch\u00fa\u3002 t\u0101 w\u011bi d\u00e0\uff0c y\u012bn w\u00e8i t\u0101 sh\u00ec j\u012b m\u01d4 q\u012bn\u3002 y\u00ed g\u00e8 m\u01d4 q\u012bn b\u00ec d\u00ecng ji\u00f9 sh\u00ec y\u00ed w\u00e8i y\u012bng xi\u00f3ng\u3002",
        "w\u01d2 b\u00f9 g\u01cen z\u00e0i t\u01ceo y\u00e0n m\u01d4 j\u012b le\u3002"
      ],
      recognizeChars: ["疙","瘩","侮","恶","聋","啄","伏","哼","啼","凄"],
      writeChars: ["讨","厌","坝","忠","毒","绩","孵","警","戒","歪","咕","汤","掘","伏","啼"],
      vocabWords: [
        {word:'母鸡',pinyin:'mǔ jī',en:'hen',sentence:'我一向讨厌母鸡。',sentenceEn:'I always disliked hens.'},
        {word:'负责',pinyin:'fù zé',en:'responsible',sentence:'它负责、慈爱、勇敢。',sentenceEn:'She is responsible, loving, and brave.'},
        {word:'警戒',pinyin:'jǐng jiè',en:'alert; on guard',sentence:'母鸡时刻警戒着。',sentenceEn:'The hen is always on guard.'},
        {word:'欺侮',pinyin:'qī wǔ',en:'bully',sentence:'不允许谁欺侮孩子们。',sentenceEn:'She allows no one to bully her chicks.'},
        {word:'英雄',pinyin:'yīng xióng',en:'hero',sentence:'它是一位英雄母亲。',sentenceEn:'She is a heroic mother.'}
      ],
      footnotes: [
        {term:"\u6bcd\u9e21", termEn:"hen", definition:"\u3010m\u01d4 j\u012b\u3011hen\u3002", definitionEn:"hen"},
        {term:"\u8d1f\u8d23", termEn:"responsible", definition:"\u3010f\u00f9 z\u00e9\u3011responsible\u3002", definitionEn:"responsible"},
        {term:"\u8b66\u6212", termEn:"alert; on guard", definition:"\u3010j\u01d0ng ji\u00e8\u3011alert; on guard\u3002", definitionEn:"alert; on guard"},
        {term:"\u6b3a\u4fae", termEn:"bully", definition:"\u3010q\u012b w\u01d4\u3011bully\u3002", definitionEn:"bully"},
        {term:"\u82f1\u96c4", termEn:"hero", definition:"\u3010y\u012bng xi\u00f3ng\u3011hero\u3002", definitionEn:"hero"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'先抑后扬',pointEn:'xiān yì hòu yáng',example:'criticize then praise',exampleEn:'先写讨厌母鸡，后写敬佩母鸡。',explanation:'First writes dislike, then admiration.',explanationEn:'先写不好的一面，再转折写好的一面'}
      ],
      exercises: [
        {type:"read",cn:"默读课文，画出\u201C我\u201D对母鸡的态度前后变化的句子，说说为什么有这样的变化",en:"Read silently, find sentences showing the change in the narrator\u2019s attitude toward the hen, and explain why"},
        {type:"discuss",cn:"老舍先生写母鸡\u201C负责，慈爱，勇敢，辛苦\u201D，结合课文内容说一说",en:"Lao She wrote that the hen is 'responsible, loving, brave, hardworking' \u2014 explain using details from the text"},
        {type:"think",cn:"《猫》和《母鸡》都是老舍先生的作品，比一比两篇课文在表达上有哪些相同和不同之处",en:"Compare the expression styles of Lao She\u2019s \u2018Cat\u2019 and \u2019Hen\u2019"}
      ],
      teachingPoints: [
        {cn:"体会作者态度前后变化（先抑后扬）的写法及其表达效果",en:"Appreciate the \u2018first suppress, then elevate\u2019 technique and its expressive effect"},
        {cn:"从细节描写中感受母鸡的母爱形象",en:"Feel the mother hen\u2019s maternal image through detailed descriptions"}
      ],
      parentTips: [
        {cn:"和孩子讨论母爱的伟大，联系生活中的真实例子",en:"Discuss the greatness of maternal love with your child, connecting to real-life examples"},
        {cn:"引导孩子理解\u201C先抑后扬\u201D的写作手法",en:"Help your child understand the \u2018first criticize, then praise\u2019 writing technique"}
      ]
    },
    {
      id: 15, title: "白鹅", titleEn: "The White Goose",
      difficulty: 3,
      text: [
        "这白鹅，是一位即将远行的朋友送给我的。我抱着这雪白的\u201C大鸟\u201D回家，放在院子里。它伸长了头颈，左顾右盼，我一看这姿态，想道：\u201C好一个高傲的动物！\u201D",
        "鹅的高傲，更表现在它的叫声、步态和吃相中。",
        "鹅的叫声，音调严肃郑重，似厉声呵斥。它的旧主人告诉我：养鹅等于养狗，它也能看守门户。后来我看到果然如此：凡有生客进来，鹅必然厉声叫嚣；甚至篱笆外有人走路，它也要引吭大叫，不亚于狗的狂吠。",
        "鹅的步态，更是傲慢了。大体上与鸭相似，但鸭的步调急速，有局促不安之相；鹅的步调从容，大模大样的，颇像京剧里的净角出场。它常傲然地站着，看见人走来也毫不相让；有时非但不让，竟伸过颈子来咬你一口。",
        "鹅的吃饭，常常使我们发笑。我们的鹅是吃冷饭的，一日三餐。它需要三样东西下饭：一样是水，一样是泥，一样是草。先吃一口冷饭，再喝一口水，然后再到别处去吃一口泥和草。大约这些泥和草也有各种可口的滋味。这些食料并不奢侈，但它的吃法，三眼一板，一丝不苟。譬如吃了一口饭，倘若水盆放在远处，它一定从容不迫地大踏步走上前去，饮一口水，再大踏步走去吃泥、吃草。吃过泥和草再回来吃饭。",
        "这样从容不迫地吃饭，必须有一个人在旁侍候，像饭馆里的堂倌一样。因为附近的狗，都知道我们这位鹅老爷的脾气，每逢它吃饭的时候，狗就躲在篱边窥伺。等它吃过一口饭，踏着方步去喝水、吃泥、吃草的当儿，狗就敏捷地跑过来，努力地吃它的饭。鹅老爷偶然早归，伸颈去咬狗，并且厉声叫骂，狗立刻逃往篱边，蹲着静候；看它再吃了一口饭，再走开去喝水、吃泥、吃草的时候，狗又敏捷地跑上来，把它的饭吃完，扬长而去。等到鹅再来吃饭的时候，饭罐已经空空如也。鹅便昂首大叫，似乎责备人们供养不周。这时我们便替它添饭，并且站着侍候。因为邻近狗很多，一狗方去，一狗又来蹲着窥伺了。",
        "我们不胜其烦，以后便将饭罐和水盆放在一起，免得它走远去，让鸡、狗偷饭吃。然而它所必需的泥和草，所在的地点远近无定。为了找这些食物，它仍是要走远去的。因此鹅吃饭时，非有一个人侍候不可，真是架子十足！"
      ],
      textEn: [
        "This white goose was a gift from a friend about to travel far. I carried the snowy \u2018big bird\u2019 home and set it in the yard. It stretched its neck and looked around. Seeing its posture, I thought: \u2018What a proud creature!\u2019",
        "The goose\u2019s pride was further displayed in its voice, gait, and eating manner.",
        "Its call was solemn and stern, like a sharp reprimand. Its former owner told me keeping a goose was like keeping a dog \u2014 it could guard the house. Indeed: whenever a stranger came, the goose cried out fiercely; even if someone walked outside the fence, it honked loudly, rivaling a dog\u2019s barking.",
        "Its gait was even more arrogant. Similar to a duck\u2019s, but while ducks shuffle nervously, the goose walked with composure and grandeur, rather like a painted-face character entering a Beijing opera stage. It stood proudly, never yielding to passersby; sometimes it would even stretch its neck to bite you.",
        "The goose\u2019s eating habits always made us laugh. Our goose ate cold rice three times a day, accompanied by three things: water, mud, and grass. It would eat a mouthful of rice, take a sip of water, then go elsewhere for a bite of mud and grass. Perhaps these had their own delicious flavors. The ingredients were modest, but its eating method was utterly systematic and meticulous. After eating a mouthful of rice, if the water basin was far away, it would march there unhurriedly, sip some water, then march off to eat mud and grass, and only then return for more rice.",
        "Such a leisurely meal required someone to attend it, like a waiter at a restaurant. The neighborhood dogs all knew our Lord Goose\u2019s temperament; whenever it was mealtime, the dogs hid by the fence, watching. Once the goose had eaten a mouthful of rice and marched off in measured steps to drink water, eat mud, and eat grass, the dogs would nimbly dash over and eagerly devour its rice. If Lord Goose happened to return early, it stretched its neck to bite the dog and scolded it loudly; the dog immediately fled to the fence and squatted there, waiting quietly. When the goose ate another mouthful of rice and walked off again to drink water, eat mud, and eat grass, the dog nimbly ran back, finished off all its rice, and sauntered away. By the time the goose came back to eat, the rice bowl was already completely empty. The goose would then raise its head and honk loudly, as if blaming the humans for poor service. At that point we would refill its bowl and stand there attending it, because there were many dogs in the neighborhood \u2014 as soon as one left, another would come and squat there watching.",
        "We grew weary and eventually placed the bowl and water basin together to prevent the goose from straying. But its necessary mud and grass were found at varying distances, so it still had to wander. Thus someone always had to attend its meals \u2014 truly a creature of airs!"
      ],
      textPinyin: [
        "zh\u00e8 b\u00e1i \u00e9\uff0c sh\u00ec y\u00ed w\u00e8i j\u00ed ji\u0101ng yu\u01cen x\u00edng de p\u00e9ng y\u01d2u s\u00f2ng g\u011bi w\u01d2 de\u3002 w\u01d2 b\u00e0o zhe zh\u00e8 xu\u011b b\u00e1i de \u201c d\u00e0 ni\u01ceo \u201d hu\u00ed ji\u0101\uff0c f\u00e0ng z\u00e0i yu\u00e0n zi l\u01d0\u3002 t\u0101 sh\u0113n ch\u00e1ng le t\u00f3u j\u01d0ng\uff0c zu\u01d2 g\u00f9 y\u00f2u p\u00e0n\uff0c w\u01d2 y\u00ed k\u00e0n zh\u00e8 z\u012b t\u00e0i\uff0c xi\u01ceng d\u00e0o\uff1a \u201c h\u01ceo y\u00ed g\u00e8 g\u0101o \u00e0o de d\u00f2ng w\u00f9\uff01 \u201d",
        "\u00e9 de g\u0101o \u00e0o\uff0c g\u00e8ng bi\u01ceo xi\u00e0n z\u00e0i t\u0101 de ji\u00e0o sh\u0113ng\u3001 b\u00f9 t\u00e0i h\u00e9 ch\u012b xi\u0101ng zh\u00f2ng\u3002",
        "\u00e9 de ji\u00e0o sh\u0113ng\uff0c y\u012bn di\u00e0o y\u00e1n s\u00f9 zh\u00e8ng zh\u00f2ng\uff0c s\u00ec l\u00ec sh\u0113ng h\u0113 ch\u00ec\u3002 t\u0101 de ji\u00f9 zh\u01d4 r\u00e9n g\u00e0o s\u00f9 w\u01d2\uff1a y\u01ceng \u00e9 d\u011bng y\u00fa y\u01ceng g\u01d2u\uff0c t\u0101 y\u011b n\u00e9ng k\u0101n sh\u01d2u m\u00e9n h\u00f9\u3002 h\u00f2u l\u00e1i w\u01d2 k\u00e0n d\u00e0o gu\u01d2 r\u00e1n r\u00fa c\u01d0\uff1a f\u00e1n y\u01d2u sh\u0113ng k\u00e8 j\u00ecn l\u00e1i\uff0c \u00e9 b\u00ec r\u00e1n l\u00ec sh\u0113ng ji\u00e0o \u00e1o\uff1b sh\u00e8n zh\u00ec l\u00ed b\u0101 w\u00e0i y\u01d2u r\u00e9n z\u01d2u l\u00f9\uff0c t\u0101 y\u011b y\u00e0o y\u01d0n h\u00e1ng d\u00e0 ji\u00e0o\uff0c b\u00fa y\u00e0 y\u00fa g\u01d2u de ku\u00e1ng f\u00e8i\u3002",
        "\u00e9 de b\u00f9 t\u00e0i\uff0c g\u00e8ng sh\u00ec \u00e0o m\u00e0n le\u3002 d\u00e0 t\u01d0 sh\u00e0ng y\u01d4 y\u0101 xi\u0101ng s\u00ec\uff0c d\u00e0n y\u0101 de b\u00f9 di\u00e0o j\u00ed s\u00f9\uff0c y\u01d2u j\u00fa c\u00f9 b\u00f9 \u0101n zh\u012b xi\u0101ng\uff1b \u00e9 de b\u00f9 di\u00e0o c\u00f3ng r\u00f3ng\uff0c d\u00e0 m\u00fa d\u00e0 y\u00e0ng de\uff0c p\u014d xi\u00e0ng j\u012bng j\u00f9 l\u01d0 de j\u00ecng ji\u01ceo ch\u016b ch\u01ceng\u3002 t\u0101 ch\u00e1ng \u00e0o r\u00e1n d\u00ec zh\u00e0n zhe\uff0c k\u00e0n ji\u00e0n r\u00e9n z\u01d2u l\u00e1i y\u011b h\u00e1o b\u00f9 xi\u0101ng r\u00e0ng\uff1b y\u01d2u sh\u00ed f\u0113i d\u00e0n b\u00fa r\u00e0ng\uff0c j\u00ecng sh\u0113n gu\u00f2 j\u01d0ng z\u01d0 l\u00e1i y\u01ceo n\u01d0 y\u00ec k\u01d2u\u3002",
        "\u00e9 de ch\u012b f\u00e0n\uff0c ch\u00e1ng ch\u00e1ng sh\u01d0 w\u01d2 men f\u0101 xi\u00e0o\u3002 w\u01d2 men de \u00e9 sh\u00ec ch\u012b l\u011bng f\u00e0n de\uff0c y\u00ed r\u00ec s\u0101n c\u0101n\u3002 t\u0101 x\u016b y\u00e0o s\u0101n y\u00e0ng d\u014dng x\u012b xi\u00e0 f\u00e0n\uff1a y\u00ed y\u00e0ng sh\u00ec shu\u01d0\uff0c y\u00ed y\u00e0ng sh\u00ec n\u00ed\uff0c y\u00ed y\u00e0ng sh\u00ec c\u01ceo\u3002 xi\u0101n ch\u012b y\u00ec k\u01d2u l\u011bng f\u00e0n\uff0c z\u00e0i h\u0113 y\u00ec k\u01d2u shu\u01d0\uff0c r\u00e1n h\u00f2u z\u00e0i d\u00e0o bi\u00e9 ch\u00f9 q\u00f9 ch\u012b y\u00ec k\u01d2u n\u00ed h\u00e9 c\u01ceo\u3002 d\u00e0 yu\u0113 zh\u00e8 xi\u0113 n\u00ed h\u00e9 c\u01ceo y\u011b y\u01d2u g\u00e8 zh\u01d2ng k\u011b k\u01d2u de z\u012b w\u00e8i\u3002 zh\u00e8 xi\u0113 sh\u00ed li\u00e0o b\u00ecng b\u00f9 sh\u0113 ch\u01d0\uff0c d\u00e0n t\u0101 de ch\u012b f\u01ce\uff0c s\u0101n y\u01cen y\u00ec b\u01cen\uff0c y\u00ec s\u012b b\u00f9 g\u01d2u\u3002 p\u00ec r\u00fa ch\u012b le y\u00ec k\u01d2u f\u00e0n\uff0c t\u01ceng ru\u00f2 shu\u01d0 p\u00e9n f\u00e0ng z\u00e0i yu\u01cen ch\u00f9\uff0c t\u0101 y\u00ed d\u00ecng c\u00f3ng r\u00f3ng b\u00fa p\u00f2 d\u00ec d\u00e0 t\u00e0 b\u00f9 z\u01d2u sh\u00e0ng qi\u00e1n q\u00f9\uff0c y\u01d0n y\u00ec k\u01d2u shu\u01d0\uff0c z\u00e0i d\u00e0 t\u00e0 b\u00f9 z\u01d2u q\u00f9 ch\u012b n\u00ed\u3001 ch\u012b c\u01ceo\u3002 ch\u012b gu\u00f2 n\u00ed h\u00e9 c\u01ceo z\u00e0i hu\u00ed l\u00e1i ch\u012b f\u00e0n\u3002",
        "zh\u00e8 y\u00e0ng c\u00f3ng r\u00f3ng b\u00fa p\u00f2 d\u00ec ch\u012b f\u00e0n\uff0c b\u00ec x\u016b y\u01d2u y\u00ed g\u00e8 r\u00e9n z\u00e0i p\u00e1ng sh\u00ec h\u00f2u\uff0c xi\u00e0ng f\u00e0n gu\u01cen l\u01d0 de t\u00e1ng gu\u0101n y\u00ed y\u00e0ng\u3002 y\u012bn w\u00e8i f\u00f9 j\u00ecn de g\u01d2u\uff0c d\u014du zh\u012b d\u00e0o w\u01d2 men zh\u00e8 w\u00e8i \u00e9 l\u01ceo y\u00e9 de p\u00ed q\u00ec\uff0c m\u011bi f\u00e9ng t\u0101 ch\u012b f\u00e0n de sh\u00ed h\u00f2u\uff0c g\u01d2u ji\u00f9 du\u01d2 z\u00e0i l\u00ed bi\u0101n ku\u012b s\u00ec\u3002 d\u011bng t\u0101 ch\u012b gu\u00f2 y\u00ec k\u01d2u f\u00e0n\uff0c t\u00e0 zhe f\u0101ng b\u00f9 q\u00f9 h\u0113 shu\u01d0\u3001 ch\u012b n\u00ed\u3001 ch\u012b c\u01ceo de d\u0101ng \u00e9r\uff0c g\u01d2u ji\u00f9 m\u01d0n ji\u00e9 d\u00ec p\u01ceo gu\u00f2 l\u00e1i\uff0c n\u01d4 l\u00ec d\u00ec ch\u012b t\u0101 de f\u00e0n\u3002 \u00e9 l\u01ceo y\u00e9 \u01d2u r\u00e1n z\u01ceo gu\u012b\uff0c sh\u0113n j\u01d0ng q\u00f9 y\u01ceo g\u01d2u\uff0c b\u00ecng qi\u011b l\u00ec sh\u0113ng ji\u00e0o m\u00e0\uff0c g\u01d2u l\u00ec k\u00e8 t\u00e1o w\u01ceng l\u00ed bi\u0101n\uff0c d\u016bn zhe j\u00ecng h\u00f2u\uff1b k\u00e0n t\u0101 z\u00e0i ch\u012b le y\u00ec k\u01d2u f\u00e0n\uff0c z\u00e0i z\u01d2u k\u0101i q\u00f9 h\u0113 shu\u01d0\u3001 ch\u012b n\u00ed\u3001 ch\u012b c\u01ceo de sh\u00ed h\u00f2u\uff0c g\u01d2u y\u00f2u m\u01d0n ji\u00e9 d\u00ec p\u01ceo sh\u00e0ng l\u00e1i\uff0c b\u01ce t\u0101 de f\u00e0n ch\u012b w\u00e1n\uff0c y\u00e1ng ch\u00e1ng \u00e9r q\u00f9\u3002 d\u011bng d\u00e0o \u00e9 z\u00e0i l\u00e1i ch\u012b f\u00e0n de sh\u00ed h\u00f2u\uff0c f\u00e0n gu\u00e0n y\u01d0 j\u012bng k\u014dng k\u014dng r\u00fa y\u011b\u3002 \u00e9 bi\u00e0n \u00e1ng sh\u01d2u d\u00e0 ji\u00e0o\uff0c s\u00ec h\u016b z\u00e9 b\u00e8i r\u00e9n men g\u00f2ng y\u01ceng b\u00f9 zh\u014du\u3002 zh\u00e8 sh\u00ed w\u01d2 men bi\u00e0n t\u00ec t\u0101 ti\u0101n f\u00e0n\uff0c b\u00ecng qi\u011b zh\u00e0n zhe sh\u00ec h\u00f2u\u3002 y\u012bn w\u00e8i l\u00edn j\u00ecn g\u01d2u h\u011bn du\u014d\uff0c y\u00ec g\u01d2u f\u0101ng q\u00f9\uff0c y\u00ec g\u01d2u y\u00f2u l\u00e1i d\u016bn zhe ku\u012b s\u00ec le\u3002",
        "w\u01d2 men b\u00fa sh\u00e8ng q\u00ed f\u00e1n\uff0c y\u01d0 h\u00f2u bi\u00e0n ji\u0101ng f\u00e0n gu\u00e0n h\u00e9 shu\u01d0 p\u00e9n f\u00e0ng z\u00e0i y\u00ec q\u01d0\uff0c mi\u01cen de t\u0101 z\u01d2u yu\u01cen q\u00f9\uff0c r\u00e0ng j\u012b\u3001 g\u01d2u t\u014du f\u00e0n ch\u012b\u3002 r\u00e1n \u00e9r t\u0101 su\u01d2 b\u00ec x\u016b de n\u00ed h\u00e9 c\u01ceo\uff0c su\u01d2 z\u00e0i de d\u00ec di\u01cen yu\u01cen j\u00ecn w\u00fa d\u00ecng\u3002 w\u00e8i le zh\u01ceo zh\u00e8 xi\u0113 sh\u00ed w\u00f9\uff0c t\u0101 r\u00e9ng sh\u00ec y\u00e0o z\u01d2u yu\u01cen q\u00f9 de\u3002 y\u012bn c\u01d0 \u00e9 ch\u012b f\u00e0n sh\u00ed\uff0c f\u0113i y\u01d2u y\u00ed g\u00e8 r\u00e9n sh\u00ec h\u00f2u b\u00f9 k\u011b\uff0c zh\u0113n sh\u00ec ji\u00e0 zi sh\u00ed z\u00fa\uff01"
      ],
      recognizeChars: ["看","嚣","吭","吠","促","颇","奢","侈","苟","侍","窥","伺","供"],
      writeChars: ["吠","促","颇","剧","苟","譬","侍","馆","附","脾","敏","捷","昂","供","添"],
      vocabWords: [
        {word:'高傲',pinyin:'gāo ào',en:'arrogant',sentence:'白鹅真是高傲。',sentenceEn:'The white goose is truly arrogant.'},
        {word:'步调',pinyin:'bù diào',en:'pace',sentence:'它的步调从容不迫。',sentenceEn:'Its pace is calm and unhurried.'},
        {word:'净角',pinyin:'jìng jué',en:'painted face (opera role)',sentence:'叫声好像京剧里的净角。',sentenceEn:'Its call sounds like a painted face role in Beijing opera.'},
        {word:'从容',pinyin:'cóng róng',en:'calm; leisurely',sentence:'大模大样地走。',sentenceEn:'Walking with great pomposity.'},
        {word:'脾气',pinyin:'pí qi',en:'temperament',sentence:'它的脾气很大。',sentenceEn:'Its temper is big.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u8fd9\u767d\u9e45\uff0c\u662f\u4e00\u4f4d\u5373\u5c06\u8fdc\u884c\u7684\u670b\u53cb\u9001\u7ed9\u6211\u7684\u3002", exampleEn: "This white goose was a gift from a friend about to travel far. I carried the sno", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u56e0\u4e3a\u2026\u2026\u6240\u4ee5\u2026\u2026", pointEn: "because...therefore...", example: "\u8fd9\u767d\u9e45\uff0c\u662f\u4e00\u4f4d\u5373\u5c06\u8fdc\u884c\u7684\u670b\u53cb\u9001\u7ed9\u6211\u7684\u3002", exampleEn: "This white goose was a gift from a friend about to travel far. I carried the sno", explanation: "\u56e0\u679c\u590d\u53e5\uff0c\u8868\u793a\u539f\u56e0\u548c\u7ed3\u679c\u7684\u5173\u7cfb", explanationEn: "Causal compound sentence expressing cause and effect"}
      ],
      footnotes: [
        {term:"\u9ad8\u50b2", termEn:"arrogant", definition:"\u3010g\u0101o \u00e0o\u3011arrogant\u3002", definitionEn:"arrogant"},
        {term:"\u6b65\u8c03", termEn:"pace", definition:"\u3010b\u00f9 di\u00e0o\u3011pace\u3002", definitionEn:"pace"},
        {term:"\u51c0\u89d2", termEn:"painted face (opera role)", definition:"\u3010j\u00ecng ju\u00e9\u3011painted face (opera role)\u3002", definitionEn:"painted face (opera role)"},
        {term:"\u4ece\u5bb9", termEn:"calm; leisurely", definition:"\u3010c\u00f3ng r\u00f3ng\u3011calm; leisurely\u3002", definitionEn:"calm; leisurely"},
        {term:"\u813e\u6c14", termEn:"temperament", definition:"\u3010p\u00ed qi\u3011temperament\u3002", definitionEn:"temperament"}
      ],
      readingTips: [
        {cn:"\u8fd9\u7bc7\u6587\u7ae0\u8f83\u957f\uff0c\u5efa\u8bae\u5206\u6bb5\u9605\u8bfb\u3002\u6bcf\u8bfb\u5b8c\u4e00\u6bb5\uff0c\u505c\u4e0b\u6765\u60f3\u60f3\u8fd9\u6bb5\u7684\u4e3b\u8981\u5185\u5bb9\u3002", en:"This is a longer text. Read it paragraph by paragraph, pausing after each to think about the main idea."},
        {cn:"\u8bfb\u5b8c\u5168\u6587\u540e\uff0c\u8bd5\u7740\u7528\u4e00\u53e5\u8bdd\u6982\u62ec\u6587\u7ae0\u7684\u4e2d\u5fc3\u601d\u60f3\u3002", en:"After reading the whole text, try to summarize the central idea in one sentence."}
      ],
      exercises: [
        {type:"read",cn:"朗读课文，体会语言的趣味",en:"Read aloud and appreciate the humorous language"},
        {type:"discuss",cn:"课文里有许多表现鹅高傲的词语，如\u201C引吭大叫\u201D\u201C傲然\u201D\u201C架子十足\u201D，找一找，分类抄下来",en:"Find and categorize words showing the goose\u2019s pride, such as \u2018honking loudly,\u2019 \u2018proudly,\u2019 \u2018full of airs\u2019"},
        {type:"think",cn:"读句子，回答括号里的问题，体会比较和拟人手法的表达效果",en:"Read the sentences, answer the questions, and appreciate the effects of comparison and personification"}
      ],
      teachingPoints: [
        {cn:"体会作者用\u201C鹅老爷\u201D等拟人称呼表达喜爱的写法",en:"Appreciate how the author uses personified titles like \u2018Lord Goose\u2019 to express affection"},
        {cn:"学习从叫声、步态、吃相三方面有条理地描写动物特点",en:"Learn to describe animal characteristics systematically through voice, gait, and eating habits"}
      ],
      parentTips: [
        {cn:"和孩子一起看丰子恺的画作，感受文学与艺术的结合",en:"View Feng Zikai\u2019s paintings together and feel the connection between literature and art"},
        {cn:"鼓励孩子观察一种动物，尝试从多个角度描写它的特点",en:"Encourage your child to observe an animal and describe it from multiple angles"}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Daily Accumulation",content:{cn:"蜂（唐·罗隐）：不论平地与山尖，无限风光尽被占。采得百花成蜜后，为谁辛苦为谁甜？",en:"The Bee (Tang, Luo Yin): Whether on flatland or mountaintop, every scenic spot you\u2019ve claimed. After gathering nectar from a hundred flowers, for whom have you toiled, for whom is the sweetness?"}},
    wordSentence: {title:"词句段运用",titleEn:"Words, Sentences & Paragraphs",content:{cn:"了解用动物比喻人的词语（千里马、老黄牛、百灵鸟等）；体会冒号后具体说明的用法；体会语气词\u201C吧\u201D\u201C啊\u201D\u201C呢\u201D的表达效果。",en:"Learn animal metaphors for people (thoroughbred, workhorse, lark, etc.); understand the colon for elaboration; appreciate the effect of modal particles."}},
    composition: {title:"习作：我的动物朋友",titleEn:"Composition: My Animal Friend",prompt:{cn:"从下面的情境中选择一个，向别人介绍你的动物朋友。想一想，你打算从哪些方面介绍它。",en:"Choose a scenario and introduce your animal friend. Think about which aspects to describe."}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 5 — 习作单元·游记 Travel (16-17)      */
/* ═══════════════════════════════════════════ */
{
  id: 5, title: "习作单元", titleEn: "Composition Unit",
  type: "xiezuo",
  lessons: [
    {
      id: 16, title: "海上日出", titleEn: "Sunrise at Sea",
      difficulty: 3,
      text: [
        "为了看日出，我常常早起。那时天还没有大亮，周围非常清静，船上只有机器的响声。",
        "天空还是一片浅蓝，颜色很浅。转眼间天边出现了一道红霞，慢慢地在扩大它的范围，加强它的亮光。我知道太阳要从天边升起来了，便不转眼地望着那里。",
        "果然，过了一会儿，在那个地方出现了太阳的小半边脸，红是真红，却没有亮光。太阳好像负着重荷似的一步一步，慢慢地努力上升，到了最后，终于冲破了云霞，完全跳出了海面，颜色红得非常可爱。一刹那间，这个深红的圆东西，忽然发出了夺目的亮光，射得人眼睛发痛，它旁边的云片也突然有了光彩。",
        "有时太阳走进了云堆中，它的光线却从云里射下来，直射到水面上。这时候要分辨出哪里是水，哪里是天，倒也不容易，因为我就只看见一片灿烂的亮光。",
        "有时天边有黑云，而且云片很厚，太阳出来，人眼还看不见。然而太阳在黑云里放射的光芒，透过黑云的重围，替黑云镶了一道发光的金边。后来太阳才慢慢地冲出重围，出现在天空，甚至把黑云也染成了紫色或者红色。这时候发亮的不仅是太阳、云和海水，连我自己也成了光亮的了。",
        "这不是很伟大的奇观吗？"
      ],
      textEn: [
        "To watch the sunrise, I often rose early. It was still dim; all around was very quiet, with only the sound of the ship\u2019s engine.",
        "The sky was still all pale blue, the color very light. In the blink of an eye, a band of red clouds appeared at the horizon, slowly expanding in range and intensifying in brightness. I knew the sun was about to rise from the horizon, so I fixed my gaze there without blinking.",
        "Sure enough, the sun\u2019s half-face appeared, truly red but without glare. The sun seemed to carry a heavy load, rising step by step, slowly, straining upward. At last it burst through the clouds and leaped fully above the sea, a beautiful red. In an instant, the deep red orb flashed with dazzling light that stung the eyes, and the clouds beside it suddenly glowed.",
        "Sometimes the sun entered a bank of clouds, yet its rays shot down through them to the water. It was hard to tell where water ended and sky began, for all I could see was a blaze of brilliance.",
        "Sometimes dark, thick clouds hung at the horizon, hiding the rising sun. Yet the sun\u2019s rays pierced the clouds, rimming them with a glowing golden edge. Slowly the sun broke free, appearing in the sky, even dyeing the dark clouds purple and red. Not only the sun, clouds, and sea were luminous then \u2014 even I seemed to glow.",
        "Is this not a magnificent spectacle?"
      ],
      textPinyin: [
        "w\u00e8i le k\u00e0n r\u00ec ch\u016b\uff0c w\u01d2 ch\u00e1ng ch\u00e1ng z\u01ceo q\u01d0\u3002 n\u00e0 sh\u00ed ti\u0101n h\u00e1i m\u00e9i y\u01d2u d\u00e0 li\u00e0ng\uff0c zh\u014du w\u00e9i f\u0113i ch\u00e1ng q\u012bng j\u00ecng\uff0c chu\u00e1n sh\u00e0ng zh\u01d0 y\u01d2u j\u012b q\u00ec de xi\u01ceng sh\u0113ng\u3002",
        "ti\u0101n k\u014dng h\u00e1i sh\u00ec y\u00ed pi\u00e0n qi\u01cen l\u00e1n\uff0c y\u00e1n s\u00e8 h\u011bn qi\u01cen\u3002 zhu\u01cen y\u01cen ji\u0101n ti\u0101n bi\u0101n ch\u016b xi\u00e0n le y\u00ed d\u00e0o h\u00f3ng xi\u00e1\uff0c m\u00e0n m\u00e0n d\u00ec z\u00e0i ku\u00f2 d\u00e0 t\u0101 de f\u00e0n w\u00e9i\uff0c ji\u0101 qi\u00e1ng t\u0101 de li\u00e0ng gu\u0101ng\u3002 w\u01d2 zh\u012b d\u00e0o t\u00e0i y\u00e1ng y\u00e0o c\u00f3ng ti\u0101n bi\u0101n sh\u0113ng q\u01d0 l\u00e1i le\uff0c bi\u00e0n b\u00f9 zhu\u01cen y\u01cen d\u00ec w\u00e0ng zhe n\u00e0 l\u01d0\u3002",
        "gu\u01d2 r\u00e1n\uff0c gu\u00f2 le y\u00ed hu\u00ec er\uff0c z\u00e0i n\u00e0 ge d\u00ec f\u0101ng ch\u016b xi\u00e0n le t\u00e0i y\u00e1ng de xi\u01ceo b\u00e0n bi\u0101n li\u01cen\uff0c h\u00f3ng sh\u00ec zh\u0113n h\u00f3ng\uff0c qu\u00e8 m\u00e9i y\u01d2u li\u00e0ng gu\u0101ng\u3002 t\u00e0i y\u00e1ng h\u01ceo xi\u00e0ng f\u00f9 zhu\u00f3 zh\u00f2ng h\u00e9 sh\u00ec de y\u00ed b\u00f9 yi b\u00f9\uff0c m\u00e0n m\u00e0n d\u00ec n\u01d4 l\u00ec sh\u00e0ng sh\u0113ng\uff0c d\u00e0o le zu\u00ec h\u00f2u\uff0c zh\u014dng y\u00fa ch\u014dng p\u00f2 le y\u00fan xi\u00e1\uff0c w\u00e1n qu\u00e1n ti\u00e0o ch\u016b le h\u01cei mi\u00e0n\uff0c y\u00e1n s\u00e8 h\u00f3ng d\u00e9 f\u0113i ch\u00e1ng k\u011b \u00e0i\u3002 y\u00ed ch\u00e0 n\u00e0 ji\u0101n\uff0c zh\u00e8 ge sh\u0113n h\u00f3ng de yu\u00e1n d\u014dng x\u012b\uff0c h\u016b r\u00e1n f\u0101 ch\u016b le du\u00f3 m\u00f9 d\u00ec li\u00e0ng gu\u0101ng\uff0c sh\u00e8 d\u00e9 r\u00e9n y\u01cen j\u012bng f\u0101 t\u00f2ng\uff0c t\u0101 p\u00e1ng bi\u0101n de y\u00fan pi\u00e0n y\u011b t\u016b r\u00e1n y\u01d2u le gu\u0101ng c\u01cei\u3002",
        "y\u01d2u sh\u00ed t\u00e0i y\u00e1ng z\u01d2u j\u00ecn le y\u00fan du\u012b zh\u014dng\uff0c t\u0101 de gu\u0101ng xi\u00e0n qu\u00e8 c\u00f3ng y\u00fan l\u01d0 sh\u00e8 xi\u00e0 l\u00e1i\uff0c zh\u00ed sh\u00e8 d\u00e0o shu\u01d0 mi\u00e0n sh\u00e0ng\u3002 zh\u00e8 sh\u00ed h\u00f2u y\u00e0o f\u0113n bi\u00e0n ch\u016b n\u01ce l\u01d0 sh\u00ec shu\u01d0\uff0c n\u01ce l\u01d0 sh\u00ec ti\u0101n\uff0c d\u01ceo y\u011b b\u00f9 r\u00f3ng y\u00ec\uff0c y\u012bn w\u00e8i w\u01d2 ji\u00f9 zh\u012b k\u00e0n ji\u00e0n y\u00ed pi\u00e0n c\u00e0n l\u00e0n de li\u00e0ng gu\u0101ng\u3002",
        "y\u01d2u sh\u00ed ti\u0101n bi\u0101n y\u01d2u h\u0113i y\u00fan\uff0c \u00e9r qi\u011b y\u00fan pi\u00e0n h\u011bn h\u00f2u\uff0c t\u00e0i y\u00e1ng ch\u016b l\u00e1i\uff0c r\u00e9n y\u01cen h\u00e1i k\u00e0n b\u00fa ji\u00e0n\u3002 r\u00e1n \u00e9r t\u00e0i y\u00e1ng z\u00e0i h\u0113i y\u00fan l\u01d0 f\u00e0ng sh\u00e8 de gu\u0101ng m\u00e1ng\uff0c t\u00f2u gu\u00f2 h\u0113i y\u00fan de ch\u00f3ng w\u00e9i\uff0c t\u00ec h\u0113i y\u00fan xi\u0101ng le y\u00ed d\u00e0o f\u0101 gu\u0101ng de j\u012bn bi\u0101n\u3002 h\u00f2u l\u00e1i t\u00e0i y\u00e1ng c\u00e1i m\u00e0n m\u00e0n d\u00ec ch\u014dng ch\u016b ch\u00f3ng w\u00e9i\uff0c ch\u016b xi\u00e0n z\u00e0i ti\u0101n k\u014dng\uff0c sh\u00e8n zh\u00ec b\u01ce h\u0113i y\u00fan y\u011b r\u01cen ch\u00e9ng le z\u01d0 s\u00e8 hu\u00f2 zh\u011b h\u00f3ng s\u00e8\u3002 zh\u00e8 sh\u00ed h\u00f2u f\u0101 li\u00e0ng de b\u00f9 j\u01d0n sh\u00ec t\u00e0i y\u00e1ng\u3001 y\u00fan h\u00e9 h\u01cei shu\u01d0\uff0c li\u00e1n w\u01d2 z\u00ec j\u01d0 y\u011b ch\u00e9ng le gu\u0101ng li\u00e0ng de le\u3002",
        "zh\u00e8 b\u00fa sh\u00ec h\u011bn w\u011bi d\u00e0 de q\u00ed gu\u0101n ma\uff1f"
      ],
      recognizeChars: ["扩","荷","刹","镶"],
      writeChars: ["扩","范","努","刹","烂","替","镶","紫","仅"],
      vocabWords: [
        {word:'日出',pinyin:'rì chū',en:'sunrise',sentence:'海上日出是伟大的奇观。',sentenceEn:'Sunrise at sea is a great spectacle.'},
        {word:'红霞',pinyin:'hóng xiá',en:'red clouds',sentence:'天空出现了红霞。',sentenceEn:'Red clouds appeared in the sky.'},
        {word:'负着',pinyin:'fù zhe',en:'bearing',sentence:'太阳好像负着重荷。',sentenceEn:'The sun seems to bear a heavy load.'},
        {word:'夺目',pinyin:'duó mù',en:'dazzling',sentence:'光彩夺目。',sentenceEn:'Dazzlingly brilliant.'},
        {word:'奇观',pinyin:'qí guān',en:'spectacle',sentence:'这是伟大的奇观。',sentenceEn:'This is a great spectacle.'}
      ],
      footnotes: [
        {term:"\u65e5\u51fa", termEn:"sunrise", definition:"\u3010r\u00ec ch\u016b\u3011sunrise\u3002", definitionEn:"sunrise"},
        {term:"\u7ea2\u971e", termEn:"red clouds", definition:"\u3010h\u00f3ng xi\u00e1\u3011red clouds\u3002", definitionEn:"red clouds"},
        {term:"\u8d1f\u7740", termEn:"bearing", definition:"\u3010f\u00f9 zhe\u3011bearing\u3002", definitionEn:"bearing"},
        {term:"\u593a\u76ee", termEn:"dazzling", definition:"\u3010du\u00f3 m\u00f9\u3011dazzling\u3002", definitionEn:"dazzling"},
        {term:"\u5947\u89c2", termEn:"spectacle", definition:"\u3010q\u00ed gu\u0101n\u3011spectacle\u3002", definitionEn:"spectacle"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'按顺序写景',pointEn:'àn shùn xù xiě jǐng',example:'describe scenery in order',exampleEn:'日出前……日出时……日出后……',explanation:'Before sunrise...during...after...',explanationEn:'按照时间顺序描写景物变化'}
      ],
      exercises: [
        {type:"read",cn:"默读课文，说说海上日出的景象",en:"Read silently and describe the scene of the sunrise at sea"},
        {type:"discuss",cn:"读句子，注意加点的部分，想想这样写有什么好处",en:"Read the sentences, notice the highlighted parts, and think about the benefit of such writing"},
        {type:"think",cn:"体会作者按太阳变化的顺序写景物的方法",en:"Appreciate how the author organizes the description according to the sun\u2019s changes"}
      ],
      teachingPoints: [
        {cn:"了解按变化顺序写景物的方法（日出前—日出时—日出后）",en:"Learn to describe scenery by order of change (before, during, and after sunrise)"},
        {cn:"体会动词\u201C冲破\u201D\u201C跳出\u201D\u201C镶\u201D等的表达效果",en:"Appreciate the expressive effect of verbs like \u2018burst through,\u2019 \u2018leaped,\u2019 and \u2018rimmed\u2019"}
      ],
      parentTips: [
        {cn:"有条件的话带孩子去看日出，结合课文体会海上日出的壮美",en:"If possible, take your child to watch a sunrise and relate it to the text"},
        {cn:"引导孩子注意写景时按顺序描写变化过程的方法",en:"Help your child practice describing changing scenery in order"}
      ]
    },
    {
      id: 17, title: "记金华的双龙洞", titleEn: "A Visit to Jinhua\u2019s Double Dragon Cave",
      difficulty: 3,
      text: [
        "4月14日，我在浙江金华，游北山的双龙洞。",
        "出金华城大约五公里到罗店，过了罗店就渐渐入山。公路盘曲而上。山上开满了映山红，无论花朵还是叶子，都比盆栽的杜鹃显得有精神。油桐也正开花，这儿一丛，那儿一簇，很不少。山上沙土呈粉红色，在别处似乎没有见过。粉红色的山，各色的映山红，再加上或浓或淡的新绿，眼前一片明艳。",
        "一路迎着溪流。随着山势，溪流时而宽，时而窄，时而缓，时而急，溪声也时时变换调子。入山大约五公里就来到双龙洞口，那溪流就是从洞里出来的。",
        "在洞口抬头望，山相当高，突兀森郁，很有气势。洞口像桥洞似的，很宽。走进去，仿佛到了个大会堂，周围是石壁，头上是高高的石顶，在那里聚集一千或是八百人开个会，一定不觉得拥挤。泉水靠着洞口的右边往外流。这是外洞。",
        "在外洞找泉水的来路，原来从靠左边的石壁下方的孔隙流出。虽说是孔隙，可也容得下一只小船进出。怎样小的小船呢？两个人并排仰卧，刚合适，再没法容第三个人，是这样小的小船。船两头都系着绳子，管理处的工人先进内洞，在里边拉绳子，船就进去，在外洞的工人拉另一头的绳子，船就出来。我怀着好奇的心情独个儿仰卧在小船里，自以为从后脑到肩背，到臀部，到脚跟，没有一处不贴着船底了，才说一声\u201C行了\u201D，船就慢慢移动。眼前昏暗了，可是还能感觉左右和上方的山石似乎都在朝我挤压过来。我又感觉要是把头稍微抬起一点儿，准会撞破额角，擦伤鼻子。大约行了两三丈的水程吧，就登陆了。这就到了内洞。",
        "内洞一团漆黑，什么都看不见。工人提着汽油灯，也只能照见小小的一块地方，余外全是昏暗，不知道有多么宽广。工人高高举起汽油灯，逐一指点洞内的景物。先看到的是蜿蜒在洞顶的双龙，一条黄龙，一条青龙。我顺着他的指点看，有点儿像。其他那些石钟乳和石笋，这是什么，那是什么，大都依据形状想象成神仙、动物以及宫室、器用，名目有四十多。这些石钟乳和石笋，形状变化多端，再加上颜色各异，即使不比作什么，也很值得观赏。",
        "在洞里走了一转，觉得内洞比外洞大得多，大概有十来进房子那么大。泉水靠着右边缓缓地流，声音轻轻的。上源在深黑的石洞里。",
        "我排队等候，又仰卧在小船里，出了洞。"
      ],
      textEn: [
        "On April 14, in Jinhua, Zhejiang, I visited Double Dragon Cave on North Mountain.",
        "About five kilometers from Jinhua city is Luodian; beyond it, the road gradually enters the mountains, winding upward. The hills were covered with blooming azaleas, looking more spirited than potted rhododendrons. Tung trees were also flowering, clusters here and there. The sandy soil was pink, unlike anywhere else I\u2019d seen. Pink hills, colorful azaleas, and varied shades of new green made a dazzling scene.",
        "We followed the stream the whole way. With the mountain\u2019s contours, the stream was now wide, now narrow, now gentle, now rushing, its sound constantly changing. About five kilometers into the mountains, we reached the cave mouth \u2014 the stream flowed out from inside.",
        "Looking up at the entrance, the mountain was quite tall, steep and densely wooded, very imposing. The cave mouth was wide like a bridge tunnel. Inside, it felt like a great hall \u2014 stone walls all around, high stone ceiling overhead, easily fitting a thousand people for a meeting. Spring water flowed out along the right side. This was the outer cave.",
        "Tracing the spring\u2019s source in the outer cave, I found it flowed from a gap in the left wall. Despite being called a gap, it could fit a small boat. How small? Two people lying side by side, with no room for a third. Ropes were attached to both ends; a worker inside pulled the boat in, while one outside could pull it back. I lay on my back in the little boat, pressing every part of my body \u2014 from head to shoulders to hips to heels \u2014 flat against the bottom. I said \u2018ready,\u2019 and the boat slowly moved. It grew dark, yet I could feel the rock walls seemingly pressing in from both sides and above. I felt that lifting my head even slightly would scrape my forehead and nose. After about two to three zhang of water passage, I landed. This was the inner cave.",
        "The inner cave was pitch black. A worker\u2019s kerosene lamp could illuminate only a small area; all else was darkness of unknown extent. Holding the lamp high, the worker pointed out features one by one. First, the twin dragons winding across the ceiling \u2014 one yellow, one green. I looked where he pointed; they did somewhat resemble dragons. The other stalactites and stalagmites, each named for its imagined shape \u2014 immortals, animals, palaces, utensils \u2014 over forty in all. These formations, endlessly varied in shape and color, were worth admiring even without the fanciful names.",
        "Walking through the inner cave, I found it much larger than the outer one \u2014 perhaps ten rooms in size. Spring water flowed gently along the right side, murmuring softly. Its source lay deep in the dark stone cave.",
        "I queued up, lay in the little boat again, and emerged from the cave."
      ],
      textPinyin: [
        "4 yu\u00e8 1 4 r\u00ec\uff0c w\u01d2 z\u00e0i zh\u00e8 ji\u0101ng j\u012bn hu\u00e1\uff0c y\u00f3u b\u011bi sh\u0101n de shu\u0101ng l\u00f3ng d\u00f2ng\u3002",
        "ch\u016b j\u012bn hu\u00e1 ch\u00e9ng d\u00e0 yu\u0113 w\u01d4 g\u014dng l\u01d0 d\u00e0o lu\u00f3 di\u00e0n\uff0c gu\u00f2 le lu\u00f3 di\u00e0n ji\u00f9 ji\u00e0n ji\u00e0n r\u00f9 sh\u0101n\u3002 g\u014dng l\u00f9 p\u00e1n q\u01d4 \u00e9r sh\u00e0ng\u3002 sh\u0101n sh\u00e0ng k\u0101i m\u01cen le y\u00ecng sh\u0101n h\u00f3ng\uff0c w\u00fa l\u00f9n hu\u0101 du\u01d2 h\u00e1i sh\u00ec y\u00e8 zi\uff0c d\u014du b\u01d0 p\u00e9n z\u0101i de d\u00f9 ju\u0101n xi\u01cen de y\u01d2u j\u012bng sh\u00e9n\u3002 y\u00f3u t\u00f3ng y\u011b zh\u00e8ng k\u0101i hu\u0101\uff0c zh\u00e8 \u00e9r y\u00ec c\u00f3ng\uff0c n\u00e0 \u00e9r y\u00ed c\u00f9\uff0c h\u011bn b\u00f9 sh\u01ceo\u3002 sh\u0101n sh\u00e0ng sh\u0101 t\u01d4 ch\u00e9ng f\u011bn h\u00f3ng s\u00e8\uff0c z\u00e0i bi\u00e9 ch\u00f9 s\u00ec h\u016b m\u00e9i y\u01d2u ji\u00e0n gu\u00f2\u3002 f\u011bn h\u00f3ng s\u00e8 de sh\u0101n\uff0c g\u00e8 s\u00e8 de y\u00ecng sh\u0101n h\u00f3ng\uff0c z\u00e0i ji\u0101 sh\u00e0ng hu\u00f2 n\u00f3ng hu\u00f2 d\u00e0n de x\u012bn l\u01dc\uff0c y\u01cen qi\u00e1n y\u00ed pi\u00e0n m\u00edng y\u00e0n\u3002",
        "y\u00ed l\u00f9 y\u00edng zhe x\u012b li\u00fa\u3002 su\u00ed zhe sh\u0101n sh\u00ec\uff0c x\u012b li\u00fa sh\u00ed \u00e9r ku\u0101n\uff0c sh\u00ed \u00e9r zh\u01cei\uff0c sh\u00ed \u00e9r hu\u01cen\uff0c sh\u00ed \u00e9r j\u00ed\uff0c x\u012b sh\u0113ng y\u011b sh\u00ed sh\u00ed bi\u00e0n hu\u00e0n di\u00e0o zi\u3002 r\u00f9 sh\u0101n d\u00e0 yu\u0113 w\u01d4 g\u014dng l\u01d0 ji\u00f9 l\u00e1i d\u00e0o shu\u0101ng l\u00f3ng d\u00f2ng k\u01d2u\uff0c n\u00e0 x\u012b li\u00fa ji\u00f9 sh\u00ec c\u00f3ng d\u00f2ng l\u01d0 ch\u016b l\u00e1i de\u3002",
        "z\u00e0i d\u00f2ng k\u01d2u t\u00e1i t\u00f3u w\u00e0ng\uff0c sh\u0101n xi\u0101ng d\u0101ng g\u0101o\uff0c t\u016b w\u00f9 s\u0113n y\u00f9\uff0c h\u011bn y\u01d2u q\u00ec sh\u00ec\u3002 d\u00f2ng k\u01d2u xi\u00e0ng qi\u00e1o d\u00f2ng sh\u00ec de\uff0c h\u011bn ku\u0101n\u3002 z\u01d2u j\u00ecn q\u00f9\uff0c f\u01ceng f\u00fa d\u00e0o le g\u00e8 d\u00e0 hu\u00ec t\u00e1ng\uff0c zh\u014du w\u00e9i sh\u00ec sh\u00ed b\u00ec\uff0c t\u00f3u sh\u00e0ng sh\u00ec g\u0101o g\u0101o de sh\u00ed d\u01d0ng\uff0c z\u00e0i n\u00e0 l\u01d0 j\u00f9 j\u00ed y\u00ec qi\u0101n hu\u00f2 sh\u00ec b\u0101 b\u01cei r\u00e9n k\u0101i g\u00e8 hu\u00ec\uff0c y\u00ed d\u00ecng b\u00f9 ju\u00e9 de y\u014dng j\u01d0\u3002 qu\u00e1n shu\u01d0 k\u00e0o zhe d\u00f2ng k\u01d2u de y\u00f2u bi\u0101n w\u01ceng w\u00e0i li\u00fa\u3002 zh\u00e8 sh\u00ec w\u00e0i d\u00f2ng\u3002",
        "z\u00e0i w\u00e0i d\u00f2ng zh\u01ceo qu\u00e1n shu\u01d0 de l\u00e1i l\u00f9\uff0c yu\u00e1n l\u00e1i c\u00f3ng k\u00e0o zu\u01d2 bi\u0101n de sh\u00ed b\u00ec xi\u00e0 f\u0101ng de k\u01d2ng x\u00ec li\u00fa ch\u016b\u3002 su\u012b shu\u014d sh\u00ec k\u01d2ng x\u00ec\uff0c k\u011b y\u011b r\u00f3ng d\u00e9 xi\u00e0 y\u00ec zh\u012b xi\u01ceo chu\u00e1n j\u00ecn ch\u016b\u3002 z\u011bn y\u00e0ng xi\u01ceo de xi\u01ceo chu\u00e1n ne\uff1f li\u01ceng g\u00e8 r\u00e9n b\u00ecng p\u00e1i y\u01ceng w\u00f2\uff0c g\u0101ng h\u00e9 sh\u00ec\uff0c z\u00e0i m\u00e9i f\u01ce r\u00f3ng d\u00ec s\u0101n g\u00e8 r\u00e9n\uff0c sh\u00ec zh\u00e8 y\u00e0ng xi\u01ceo de xi\u01ceo chu\u00e1n\u3002 chu\u00e1n li\u01ceng t\u00f3u d\u014du x\u00ec zhe sh\u00e9ng zi\uff0c gu\u01cen l\u01d0 ch\u00f9 de g\u014dng r\u00e9n xi\u0101n j\u00ecn n\u00e8i d\u00f2ng\uff0c z\u00e0i l\u01d0 bi\u0101n l\u0101 sh\u00e9ng zi\uff0c chu\u00e1n ji\u00f9 j\u00ecn q\u00f9\uff0c z\u00e0i w\u00e0i d\u00f2ng de g\u014dng r\u00e9n l\u0101 l\u00ecng y\u00ec t\u00f3u de sh\u00e9ng zi\uff0c chu\u00e1n ji\u00f9 ch\u016b l\u00e1i\u3002 w\u01d2 hu\u00e1i zhe h\u00e0o q\u00ed de x\u012bn q\u00edng d\u00fa g\u00e8 \u00e9r y\u01ceng w\u00f2 z\u00e0i xi\u01ceo chu\u00e1n l\u01d0\uff0c z\u00ec y\u01d0 w\u00e9i c\u00f3ng h\u00f2u n\u01ceo d\u00e0o ji\u0101n b\u00e8i\uff0c d\u00e0o t\u00fan b\u00f9\uff0c d\u00e0o ji\u01ceo g\u0113n\uff0c m\u00e9i y\u01d2u y\u00ed ch\u00f9 b\u00f9 ti\u0113 zhe chu\u00e1n d\u01d0 le\uff0c c\u00e1i shu\u014d y\u00ec sh\u0113ng \u201c x\u00edng le \u201d\uff0c chu\u00e1n ji\u00f9 m\u00e0n m\u00e0n y\u00ed d\u00f2ng\u3002 y\u01cen qi\u00e1n h\u016bn \u00e0n le\uff0c k\u011b sh\u00ec h\u00e1i n\u00e9ng g\u01cen ju\u00e9 zu\u01d2 y\u00f2u h\u00e9 sh\u00e0ng f\u0101ng de sh\u0101n sh\u00ed s\u00ec h\u016b d\u014du z\u00e0i ch\u00e1o w\u01d2 j\u01d0 y\u0101 gu\u00f2 l\u00e1i\u3002 w\u01d2 y\u00f2u g\u01cen ju\u00e9 y\u00e0o shi b\u01ce t\u00f3u sh\u0101o w\u0113i t\u00e1i q\u01d0 y\u00ec di\u01cen \u00e9r\uff0c zh\u01d4n hu\u00ec zhu\u00e0ng p\u00f2 \u00e9 ji\u01ceo\uff0c c\u0101 sh\u0101ng b\u00ed zi\u3002 d\u00e0 yu\u0113 x\u00edng le li\u01ceng s\u0101n zh\u00e0ng de shu\u01d0 ch\u00e9ng ba\uff0c ji\u00f9 d\u0113ng l\u00f9 le\u3002 zh\u00e8 ji\u00f9 d\u00e0o le n\u00e8i d\u00f2ng\u3002",
        "n\u00e8i d\u00f2ng y\u00ec tu\u00e1n q\u012b h\u0113i\uff0c sh\u00e9n me d\u014du k\u00e0n b\u00fa ji\u00e0n\u3002 g\u014dng r\u00e9n t\u00ed zhe q\u00ec y\u00f3u d\u0113ng\uff0c y\u011b zh\u01d0 n\u00e9ng zh\u00e0o ji\u00e0n xi\u01ceo xi\u01ceo de y\u00ed ku\u00e0i d\u00ec f\u0101ng\uff0c y\u00fa w\u00e0i qu\u00e1n sh\u00ec h\u016bn \u00e0n\uff0c b\u00f9 zh\u012b d\u00e0o y\u01d2u du\u014d me ku\u0101n gu\u01ceng\u3002 g\u014dng r\u00e9n g\u0101o g\u0101o j\u01d4 q\u01d0 q\u00ec y\u00f3u d\u0113ng\uff0c zh\u00fa y\u012b zh\u01d0 di\u01cen d\u00f2ng n\u00e8i de j\u01d0ng w\u00f9\u3002 xi\u0101n k\u00e0n d\u00e0o de sh\u00ec w\u0101n y\u00e1n z\u00e0i d\u00f2ng d\u01d0ng de shu\u0101ng l\u00f3ng\uff0c y\u00ec ti\u00e1o hu\u00e1ng l\u00f3ng\uff0c y\u00ec ti\u00e1o q\u012bng l\u00f3ng\u3002 w\u01d2 sh\u00f9n zhe t\u0101 de zh\u01d0 di\u01cen k\u00e0n\uff0c y\u01d2u di\u01cen \u00e9r xi\u00e0ng\u3002 q\u00ed t\u0101 n\u00e0 xi\u0113 sh\u00ed zh\u014dng r\u01d4 h\u00e9 sh\u00ed s\u01d4n\uff0c zh\u00e8 sh\u00ec sh\u00e9n me\uff0c n\u00e0 sh\u00ec sh\u00e9n me\uff0c d\u00e0 d\u014du y\u012b j\u00f9 x\u00edng zhu\u00e0ng xi\u01ceng xi\u00e0ng ch\u00e9ng sh\u00e9n xi\u0101n\u3001 d\u00f2ng w\u00f9 y\u01d0 j\u00ed g\u014dng sh\u00ec\u3001 q\u00ec y\u00f2ng\uff0c m\u00edng m\u00f9 y\u01d2u s\u00ec sh\u00ed du\u014d\u3002 zh\u00e8 xi\u0113 sh\u00ed zh\u014dng r\u01d4 h\u00e9 sh\u00ed s\u01d4n\uff0c x\u00edng zhu\u00e0ng bi\u00e0n hu\u00e0 du\u014d du\u0101n\uff0c z\u00e0i ji\u0101 sh\u00e0ng y\u00e1n s\u00e8 g\u00e8 y\u00ec\uff0c j\u00ed sh\u01d0 b\u00f9 b\u01d0 zu\u00f2 sh\u00e9n me\uff0c y\u011b h\u011bn zh\u00ed d\u00e9 gu\u0101n sh\u01ceng\u3002",
        "z\u00e0i d\u00f2ng l\u01d0 z\u01d2u le y\u00ec zhu\u01cen\uff0c ju\u00e9 d\u00e9 n\u00e8i d\u00f2ng b\u01d0 w\u00e0i d\u00f2ng d\u00e0 d\u00e9 du\u014d\uff0c d\u00e0 g\u00e0i y\u01d2u sh\u00ed l\u00e1i j\u00ecn f\u00e1ng zi n\u00e0 me d\u00e0\u3002 qu\u00e1n shu\u01d0 k\u00e0o zhe y\u00f2u bi\u0101n hu\u01cen hu\u01cen d\u00ec li\u00fa\uff0c sh\u0113ng y\u012bn q\u012bng q\u012bng de\u3002 sh\u00e0ng yu\u00e1n z\u00e0i sh\u0113n h\u0113i de sh\u00ed d\u00f2ng l\u01d0\u3002",
        "w\u01d2 p\u00e1i du\u00ec d\u011bng h\u00f2u\uff0c y\u00f2u y\u01ceng w\u00f2 z\u00e0i xi\u01ceo chu\u00e1n l\u01d0\uff0c ch\u016b le d\u00f2ng\u3002"
      ],
      recognizeChars: ["浙","簇","臀","漆","蜿","蜒"],
      writeChars: ["浙","罗","杜","鹃","窄","郁","肩","臀","移","额","陆","乳","笋","端","源"],
      vocabWords: [
        {word:'洞口',pinyin:'dòng kǒu',en:'cave entrance',sentence:'洞口很宽。',sentenceEn:'The cave entrance is wide.'},
        {word:'石钟乳',pinyin:'shí zhōng rǔ',en:'stalactite',sentence:'石钟乳和石笋形状各异。',sentenceEn:'Stalactites and stalagmites have various shapes.'},
        {word:'蜿蜒',pinyin:'wān yán',en:'wind; meander',sentence:'泉水蜿蜒而出。',sentenceEn:'Spring water winds its way out.'},
        {word:'漆黑',pinyin:'qī hēi',en:'pitch dark',sentence:'里面漆黑一片。',sentenceEn:'It is pitch dark inside.'},
        {word:'仰卧',pinyin:'yǎng wò',en:'lie on one back',sentence:'必须仰卧在小船里。',sentenceEn:'Must lie on your back in the small boat.'}
      ],
      footnotes: [
        {term:"\u6d1e\u53e3", termEn:"cave entrance", definition:"\u3010d\u00f2ng k\u01d2u\u3011cave entrance\u3002", definitionEn:"cave entrance"},
        {term:"\u77f3\u949f\u4e73", termEn:"stalactite", definition:"\u3010sh\u00ed zh\u014dng r\u01d4\u3011stalactite\u3002", definitionEn:"stalactite"},
        {term:"\u873f\u8712", termEn:"wind; meander", definition:"\u3010w\u0101n y\u00e1n\u3011wind; meander\u3002", definitionEn:"wind; meander"},
        {term:"\u6f06\u9ed1", termEn:"pitch dark", definition:"\u3010q\u012b h\u0113i\u3011pitch dark\u3002", definitionEn:"pitch dark"},
        {term:"\u4ef0\u5367", termEn:"lie on one back", definition:"\u3010y\u01ceng w\u00f2\u3011lie on one back\u3002", definitionEn:"lie on one back"}
      ],
      readingTips: [
        {cn:"\u8fd9\u7bc7\u6587\u7ae0\u8f83\u957f\uff0c\u5efa\u8bae\u5206\u6bb5\u9605\u8bfb\u3002\u6bcf\u8bfb\u5b8c\u4e00\u6bb5\uff0c\u505c\u4e0b\u6765\u60f3\u60f3\u8fd9\u6bb5\u7684\u4e3b\u8981\u5185\u5bb9\u3002", en:"This is a longer text. Read it paragraph by paragraph, pausing after each to think about the main idea."},
        {cn:"\u8bfb\u5b8c\u5168\u6587\u540e\uff0c\u8bd5\u7740\u7528\u4e00\u53e5\u8bdd\u6982\u62ec\u6587\u7ae0\u7684\u4e2d\u5fc3\u601d\u60f3\u3002", en:"After reading the whole text, try to summarize the central idea in one sentence."}
      ],
      grammarPoints: [
        {point:'移步换景',pointEn:'yí bù huàn jǐng',example:'changing views with steps',exampleEn:'路上→洞口→外洞→孔隙→内洞→出洞。',explanation:'On the way→entrance→outer→gap→inner→exit.',explanationEn:'随着游览位置的移动来描写景物'}
      ],
      exercises: [
        {type:"read",cn:"默读课文，理清作者游双龙洞的顺序，再把路线图补充完整",en:"Read silently, clarify the author\u2019s visiting order, and complete the route map"},
        {type:"discuss",cn:"读由外洞进内洞的部分，体会作者是怎样把孔隙的狭小和自己的感受写清楚的",en:"Read the passage through the gap and appreciate how the author conveys its narrowness and his feelings"},
        {type:"think",cn:"学习按游览顺序写景物的方法，注意过渡句的使用",en:"Learn to describe scenery in touring order, noting the use of transitional sentences"}
      ],
      teachingPoints: [
        {cn:"学习按游览顺序写景物的方法：路上→外洞→孔隙→内洞→出洞",en:"Learn to write in touring order: on the road \u2192 outer cave \u2192 gap \u2192 inner cave \u2192 exit"},
        {cn:"体会作者用自身感受写出孔隙狭小的方法（\u201C贴\u201D\u201C挤压\u201D等）",en:"Appreciate how the author conveys narrowness through personal sensation (\u2018pressing,\u2019 \u2018squeezing\u2019)"}
      ],
      parentTips: [
        {cn:"带孩子回忆一次游览经历，练习按顺序描述所见所感",en:"Help your child recall a trip and practice describing what they saw and felt in order"},
        {cn:"鼓励孩子画出游览路线图，再用文字把重点景物写清楚",en:"Encourage drawing a route map, then describing key sights in writing"}
      ]
    }
  ],
  garden: {
    accumulation: {title:"习作例文",titleEn:"Model Compositions",content:{cn:"颐和园（按游览顺序写景：长廊→万寿山→昆明湖）；七月的天山（从山外到山里的移步换景写法）。",en:"The Summer Palace (scenery in touring order: Long Corridor \u2192 Longevity Hill \u2192 Kunming Lake); July in the Tianshan Mountains (changing views while moving from outside to inside the mountains)."}},
    composition: {title:"习作：游____",titleEn:"Composition: A Visit to ____",prompt:{cn:"按照游览的顺序写写一个地方，把游览的过程写清楚。印象深刻的景物要作为重点来写。可以用过渡句，使景物的转换更自然。",en:"Write about a place in touring order. Focus on the most impressive sights. Use transitional sentences to make the shifts between sights flow naturally."}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 6 — 成长 Growing Up (Lessons 18-21)   */
/* ═══════════════════════════════════════════ */
{
  id: 6, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 18, title: "文言文二则", titleEn: "Two Classical Chinese Texts",
      difficulty: 3,
      text: [
        "囊萤夜读\n胤恭勤不倦，博学多通。家贫不常得油，夏月则练囊盛数十萤火以照书，以夜继日焉。",
        "铁杵成针\n磨针溪，在象耳山下。世传李太白读书山中，未成，弃去。过是溪，逢老媪方磨铁杵。问之，曰：\u201C欲作针。\u201D太白感其意，还卒业。"
      ],
      textEn: [
        "Reading by Firefly Light\nChe Yin was respectful, diligent, and tireless, learned and widely knowledgeable. His family was poor and could not always afford lamp oil, so in summer he would fill a thin silk bag with dozens of fireflies to light his reading, continuing day and night.",
        "An Iron Pestle Ground into a Needle\nGrinding Needle Creek lies below Elephant Ear Mountain. Legend says Li Bai (Li Taibai) studied in the mountains but quit before finishing. Passing this creek, he met an old woman grinding an iron pestle. He asked what she was doing. She said: \u2018I want to make a needle.\u2019 Inspired by her determination, Li Bai returned and completed his studies."
      ],
      textPinyin: [
        "n\u00e1ng y\u00edng y\u00e8 d\u00fa\n y\u00ecn g\u014dng q\u00edn b\u00fa ju\u00e0n\uff0c b\u00f3 xu\u00e9 du\u014d t\u014dng\u3002 ji\u0101 p\u00edn b\u00f9 ch\u00e1ng d\u00e9 y\u00f3u\uff0c xi\u00e0 yu\u00e8 z\u00e9 li\u00e0n n\u00e1ng sh\u00e8ng sh\u00f9 sh\u00ed y\u00edng hu\u01d2 y\u01d0 zh\u00e0o sh\u016b\uff0c y\u01d0 y\u00e8 j\u00ec r\u00ec y\u0101n\u3002",
        "ti\u011b ch\u01d4 ch\u00e9ng zh\u0113n\n m\u00f3 zh\u0113n x\u012b\uff0c z\u00e0i xi\u00e0ng \u011br sh\u0101n xi\u00e0\u3002 sh\u00ec chu\u00e1n l\u01d0 t\u00e0i b\u00e1i d\u00fa sh\u016b sh\u0101n zh\u014dng\uff0c w\u00e8i ch\u00e9ng\uff0c q\u00ec q\u00f9\u3002 gu\u00f2 sh\u00ec x\u012b\uff0c f\u00e9ng l\u01ceo \u01ceo f\u0101ng m\u00f3 ti\u011b ch\u01d4\u3002 w\u00e8n zh\u012b\uff0c yu\u0113\uff1a \u201c y\u00f9 zu\u00f2 zh\u0113n\u3002 \u201d t\u00e0i b\u00e1i g\u01cen q\u00ed y\u00ec\uff0c h\u00e1i z\u00fa y\u00e8\u3002"
      ],
      recognizeChars: ["恭","勤","焉","卒"],
      writeChars: ["囊","萤","恭","勤","博","贫","焉","逢","卒"],
      vocabWords: [
        {word:'铁杵',pinyin:'tiě chǔ',en:'iron pestle',sentence:'只要功夫深，铁杵磨成针。',sentenceEn:'With enough effort, an iron pestle becomes a needle.'},
        {word:'勤学',pinyin:'qín xué',en:'study diligently',sentence:'囊萤夜读的故事。',sentenceEn:'The story of reading by firefly light.'},
        {word:'恭勤',pinyin:'gōng qín',en:'diligent and respectful',sentence:'博学多通，恭勤不倦。',sentenceEn:'Broadly learned, diligent and tireless.'},
        {word:'囊萤',pinyin:'náng yíng',en:'bag of fireflies',sentence:'车胤囊萤夜读。',sentenceEn:'Che Yin read at night by firefly light.'},
        {word:'磨针',pinyin:'mó zhēn',en:'grind into needle',sentence:'老婆婆在磨铁杵。',sentenceEn:'The old woman was grinding an iron pestle.'}
      ],
      grammarPoints: [
        {point: "\u603b\u5206\u7ed3\u6784", pointEn: "General-specific structure", example: "\u80e4\u606d\u52e4\u4e0d\u5026\uff0c\u535a\u5b66\u591a\u901a\u3002", exampleEn: "Reading by Firefly Light\nChe Yin was respectful, diligent, and tireless, learned", explanation: "\u5148\u603b\u8ff0\u518d\u5206\u8ff0\uff0c\u6216\u5148\u5206\u8ff0\u518d\u603b\u7ed3\uff0c\u4f7f\u6587\u7ae0\u6761\u7406\u6e05\u6670", explanationEn: "Start with overview then details, or vice versa, for clear organization"}
      ],
      footnotes: [
        {term:"\u94c1\u6775", termEn:"iron pestle", definition:"\u3010ti\u011b ch\u01d4\u3011iron pestle\u3002", definitionEn:"iron pestle"},
        {term:"\u52e4\u5b66", termEn:"study diligently", definition:"\u3010q\u00edn xu\u00e9\u3011study diligently\u3002", definitionEn:"study diligently"},
        {term:"\u606d\u52e4", termEn:"diligent and respectful", definition:"\u3010g\u014dng q\u00edn\u3011diligent and respectful\u3002", definitionEn:"diligent and respectful"},
        {term:"\u56ca\u8424", termEn:"bag of fireflies", definition:"\u3010n\u00e1ng y\u00edng\u3011bag of fireflies\u3002", definitionEn:"bag of fireflies"},
        {term:"\u78e8\u9488", termEn:"grind into needle", definition:"\u3010m\u00f3 zh\u0113n\u3011grind into needle\u3002", definitionEn:"grind into needle"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"正确、流利地朗读课文。背诵《囊萤夜读》",en:"Read aloud correctly and fluently. Recite 'Reading by Firefly Light' from memory"},
        {type:"discuss",cn:"借助注释，理解课文中每句话的意思",en:"Use the annotations to understand every sentence"},
        {type:"think",cn:"照样子，根据课文内容填一填：\u201C胤恭勤不倦\u201D（疲倦）；\u201C家贫不常得油\u201D（？）",en:"Following the example, fill in meanings: 'tireless in diligence' (exhaustion); 'family too poor for oil' (?)"}
      ],
      teachingPoints: [
        {cn:"学习借助注释理解文言文的方法",en:"Learn to use annotations to understand classical Chinese"},
        {cn:"体会两个成语故事\u201C囊萤夜读\u201D\u201C铁杵成针\u201D所蕴含的勤学精神",en:"Appreciate the spirit of diligent study embodied in these two idiom stories"}
      ],
      parentTips: [
        {cn:"和孩子一起讲讲\u201C囊萤夜读\u201D\u201C铁杵成针\u201D的故事，讨论勤奋学习的重要性",en:"Tell the stories with your child and discuss the importance of diligent learning"},
        {cn:"引导孩子了解更多古人勤学的故事，如\u201C悬梁刺股\u201D\u201C凿壁偷光\u201D",en:"Introduce more stories of ancient scholars\u2019 dedication, such as \u2018tying hair to a beam\u2019 and \u2018boring a hole for light\u2019"}
      ]
    },
    {
      id: 19, title: "小英雄雨来（节选）", titleEn: "Little Hero Yu Lai (Excerpt)",
      difficulty: 3,
      text: [
"晋察冀边区的北部有一条还乡河，河里长着很多芦苇。河边有个小村庄。芦花开的时候，远远望去，黄绿的芦苇上好像盖了一层厚厚的的白雪。风一吹，鹅毛般的苇絮就飘飘悠悠地飞起来，把这几十家小房屋都罩在柔软的芦花里。因此，这村就叫芦花村。十二岁的雨来就是这村的。",
"雨来最喜欢这条紧靠着村边的还乡河。每到夏天，雨来和铁头、三钻儿，还有许多小朋友，好像一群鱼，在河里钻上钻下，藏猫猫，狗刨，立浮，仰浮。雨来仰浮的本领最高，能够脸朝天在水里躺着，不但不沉底，还要把小肚皮露在水面上。",
"妈妈不让雨来耍水，怕出危险。有一天，妈妈见雨来从外面进来，光着身子浑身被太阳晒得黝黑发亮。妈妈知道他又去耍水了，把脸一沉，叫他过来，扭身就到炕上抓笤帚。雨来一看要挨打了，撒腿就往外跑。",
"妈妈紧跟着追出来。雨来一边跑一边回头看。糟了!眼看要追上了。往哪儿跑呢?铁头正赶着牛从河沿回来，远远地向雨来喊：“往河沿跑!往河沿跑!”雨来听出了话里的意思，转身就朝河沿跑。妈妈还是死命追着不放，到底追上了，可是雨来浑身光溜溜的像条小泥鳅，怎么也抓不住。只听见扑通一声，雨来扎进河里不见了。妈妈立在河沿上，望着渐渐扩大的水圈直发愣。",
"忽然，远远的水面上露出个小脑袋来。雨来像小鸭子一样抖着头上的水，用手抹一下眼睛和鼻子，嘴里吹着气，望着妈妈笑。",
"二",
"秋天。",
"爸爸从集上卖苇席回来，同妈妈商量：“看见了区上的工作同志，说是孩子们不上学念书不行，起码要上夜校。叫雨来上夜校吧。要不，将来闹个睁眼瞎。”",
"夜校就在三钻儿家的豆腐房里。房子很破。教夜课的是东庄学堂里的女老师，穿着青布裤褂，胖胖的，剪着短发。女老师走到黑板前面，屋里嗡嗡嗡嗡说话声音立刻停止了，只听见哗啦哗啦翻课本的声音。雨来从口袋里掏出课本，这是用土纸油印的，软鼓囊囊的。雨来怕揉坏了，向妈妈要了一块红布，包了个书皮，上面用铅笔歪歪斜斜地写了“雨来”两个字。雨来把书放在腿上，翻开书。",
"女老师斜着身子，用手指点着黑板上的字，念着：",
"“我们是中国人，",
"我们爱自己的祖国。”",
"大家就随着女老师的手指，齐声轻轻地念起来：",
"“我们——是——中国人，",
"我们——爱——自己的——祖国。”",
"三",
"有一天，雨来从夜校回到家，躺在炕上，背诵当天晚上学会的课文。可是背不到一半，他就睡着了。",
"不知什么时候，门吱扭响了一声。雨来睁开眼，看见闪进一个黑影。妈妈划了根火柴，点着灯，一看，原来是爸爸出外卖席子回来了。他肩上披着子弹袋，腰里插着手榴弹，背上还背着一根长长的步枪。爸爸怎么忽然这样打扮起来了呢?",
"爸爸对妈妈说：“鬼子又‘扫荡’了，民兵都到区上集合，要一两个月才能回来。”雨来问爸爸说：“爸爸，远不远?”爸爸把手伸进被里，摸着雨来光溜溜的脊背，说：“这哪儿有准呢?说远就远，说近就近。”爸爸又转过脸对妈妈说：“明天你到东庄他姥姥家去一趟，告诉他舅舅，就说区上说的，叫他赶快把村里民兵带到区上去集合。”妈妈问：“区上在哪儿?”爸爸装了一袋烟，吧嗒吧嗒抽着，说：“叫他们在河北一带村里打听。”",
"雨来还想说什么，可是门哐啷响了一下，就听见爸爸走出去的脚步声。不大一会儿，什么也听不见了，只从街上传来一两声狗叫。",
"第二天，吃过早饭，妈妈就到东庄去，临走说晚上才能回来。过了晌午，雨来吃了点剩饭，因为看家，不能到外面去，就趴在炕上念他那红布包着的识字课本。",
"忽然听见街上咕咚咕咚有人跑，把屋子震得好像要摇晃起来，窗户纸哗啦哗啦响。",
"雨来一骨碌下了炕，把书塞在怀里就往外跑，刚要迈门槛，进来一个人，雨来正撞在这个人的怀里。他抬头一看，是李大叔。李大叔是区上的交通员，常在雨来家落脚。",
"随后听见日本鬼子唔哩哇啦地叫。李大叔忙把墙角那盛着一半糠皮的缸搬开。雨来两眼楞住了，“咦!这是什么时候挖的洞呢?”李大叔跳进洞里，说：“把缸搬回原地方。你就快到别的院里去，对谁也不许说。”",
"十二岁的雨来使尽气力，才把缸挪回到原地。",
"雨来刚到堂屋，见十几把雪亮的刺刀从前门进来。他撒腿就往后院跑，背后喀啦一声枪栓响，有人大声叫道：“站住!”雨来没理他，脚下像踩着风，一直朝后院跑去。只听见子弹向他头上嗖嗖地飞来。可是后院没有门，把雨来急出一身冷汗。靠墙有一棵桃树，雨来抱着就往上爬。鬼子已经追到树底下，伸手抓住雨来的脚，往下一拉，雨来就摔在地下。鬼子把他两只胳膊向背后一拧，捆绑起来，推推搡搡回到屋里。",
"四",
"鬼子把前后院都翻遍了。",
"屋子里也遭了劫难，连枕头都给刺刀挑破了。炕沿上坐着个鬼子军官，两眼红红的，用中国话问雨来，说：“小孩，问你话，不许撒谎!”他突然望着雨来的胸脯，张着嘴，眼睛睁得圆圆的。",
"雨来低头一看，原来刚才一阵子挣扎，识字课本从怀里露出来了。鬼子一把抓在手里，翻着看了看，问他：“谁给你的?”雨来说：“捡来的!”",
"鬼子露出满口金牙，做了个鬼脸，温和地对雨来说：“不要害怕!小孩，皇军是爱护的!”说着，就叫人给他松绑。",
"雨来把手放下来，觉得胳膊发麻发痛，扁鼻子军官用手摸着雨来的脑袋，说：“这本书谁给你的，没有关系，我不问了。别的话要统统告诉我!刚才有个人跑进来，看见没有?”雨来用手背抹了一下鼻子，嘟嘟囔囔地说：“我在屋里，什么也没看见。”",
"扁鼻子军官把书扔在地上，伸手望皮包里掏。雨来心里想：“掏什么呢?找刀子?鬼子生了气要挖小孩眼睛的!”只见他掏出来的却是一把雪白的糖块。",
"扁鼻子军官把糖往雨来手里一塞，说：“吃!你吃!你得说出来，他在什么地方?”他又伸出那个戴金戒指的手指，说：“这个，金的，也给你!”",
"雨来没有接他的糖，也没有回答他。",
"旁边一个鬼子嗖地抽出刀来，瞪着眼睛要向雨来头上劈。扁鼻子军官摇摇头。两个人唧唧咕咕说了一阵。那鬼子向雨来横着脖子翻白眼，使劲把刀放回鞘里。",
"扁鼻子军官压住肚里的火气，用手轻轻地拍着雨来的肩膀，说：“我最喜欢小孩。那个人，你看见没有?说呀!”",
"雨来摇摇头，说：“我在屋里，什么也没看见。”",
"扁鼻子军官的眼光立刻变得凶恶可怕，他向前弓着身子，伸出两只大手。啊!那双手就像鹰的爪子，扭着雨来的两只耳朵，向两边拉。雨来疼得直咧嘴。鬼子又抽出一只手来，在雨来的脸上打了两巴掌，又把他脸上的肉揪起一块，咬着牙拧。雨来的脸立时变成白一块，青一块，紫一块。鬼子又向他胸脯上打了一拳。雨来打个趔趄，后退几步，后脑勺正碰在柜板上，但立刻又被抓过来，肚子撞在炕沿上。",
"雨来半天才喘过气来，脑袋里像有一窝蜂，嗡嗡地叫。他两眼直冒金花，鼻子流着血。一滴一滴的血滴下来，溅在课本那几行字上：",
"“我们是中国人，",
"我们爱自己的祖国。”",
"鬼子打得累了，雨来还是咬着牙，说：“没看见!”",
"扁鼻子军官气得暴跳起来，嗷嗷地叫：“枪毙，枪毙!拉出去，拉出去!”",
"五",
"太阳已经落下去。蓝蓝的天上飘着的浮云像一块一块红绸子，映在还乡河上，像开了一大朵一大朵鸡冠花。苇塘的芦花被风吹起来，在上面飘飘悠悠地飞着。",
"芦花村里的人听到河沿上响了几枪。老人们含着泪，说：",
"“雨来是个好孩子!死得可惜!”",
"“有志不在年高。”",
"芦花村的孩子们，雨来的好朋友铁头和三钻儿几个人，听到枪声都呜呜地哭了。",
"六",
"李大叔在地洞里等了好久，不见雨来来搬缸，就往另一个出口走。他试探着推开洞口的石板，扒开苇叶，院子里空空的，一个人影也没有，四处也不见动静。忽然听见街上有人吆喝：“豆腐啦!卖豆腐啦!”这是芦花村的暗号，李大叔知道敌人已经走远了。",
"可是雨来怎么还不见呢?他跑到街上，看见许多人往河沿跑，一打听，才知道雨来被鬼子打死在河里了。",
"李大叔脑袋轰的一声，眼泪就流下来了。他一股劲儿地跟着人们向河沿跑。",
"到了河沿，别说尸首，连一滴血也没看见。",
"大家呆呆地在河沿上立着。还乡河静静的，河水打着漩涡哗哗地向下流去。虫子在草窝里叫着。不知谁说：“也许鬼子把雨来扔在河里，冲走了!”大家就顺着河岸向下找。突然铁头叫起来：“啊!雨来!雨来!”",
"在芦苇丛里，水面上露出个小脑袋来。雨来还是像小鸭子一样抖着头上的水，用手抹一下眼睛和鼻子，扒着芦苇，向岸上的人问道：“鬼子走了?”",
"“啊!”大家都高兴得叫起来，“雨来没有死!雨来没有死!”",
"原来枪响以前，雨来就趁鬼子不防备，一头扎到河里去。鬼子慌忙向水里打枪，可是我们的小英雄雨来已经从水底游到远处去了。"
],
      textEn: [
"In the north of the Jin-Cha-Ji border region flowed the Huanxiang River, thick with reeds. A small village sat beside it. When reed flowers bloomed, the yellow-green reeds seemed covered with thick snow. In the breeze, the downy catkins drifted like goose feathers, shrouding the little houses. Thus the village was called Reed Flower Village. Twelve-year-old Yu Lai lived there.",
"Yu Lai loved the river. Every summer, he and his friends would play in the water like a school of fish — diving, playing hide-and-seek, dog-paddling, floating upright and on their backs. Yu Lai was the best at floating on his back, lying face-up in the water with his little belly above the surface.",
"In autumn, his father returned from selling reed mats and told his mother: ‘The district said children must attend school — at least night school. Let Yu Lai go, or he’ll grow up illiterate.’",
"The female teacher walked to the front of the blackboard, and the buzzing chatter in the room instantly stopped. Yu Lai opened his book. The teacher leaned sideways and pointed at the characters on the blackboard with her finger, reading: ‘We are Chinese. We love our motherland.’ Everyone followed the teacher’s finger and read softly together in unison: ‘We — are — Chinese. We — love — our — motherland.’",
"One day, Yu Lai came home from night school, lay on the kang, and recited the text he had learned that evening. Suddenly he heard someone running thump-thump-thump in the street, shaking the house as if it were swaying. Yu Lai rolled off the kang, stuffed his book inside his shirt, and ran outside. Just as he was about to step over the threshold, a man came in — it was Uncle Li. Then he heard Japanese soldiers jabbering outside. Uncle Li quickly moved the barrel in the corner that was half full of bran husks, jumped into a hole underneath, and said: ‘Put the barrel back in its place, then hurry to another yard. Don’t tell anyone.’",
"The soldiers ransacked the front and back yards. The flat-nosed officer spoke to Yu Lai in Chinese: ‘Boy, I’m going to ask you some questions. No lying!’ Yu Lai said: ‘I was inside. I didn’t see anything.’ The flat-nosed officer shoved some candy into Yu Lai’s hand and said: ‘Eat! You eat! You have to tell me where he is!’ Yu Lai did not take his candy, nor did he answer him.",
"The soldiers beat him until they tired, but Yu Lai gritted his teeth: ‘I didn’t see anything!’ The officer screamed: ‘Shoot him! Take him out!’",
"The people of Reed Flower Village heard several gunshots ring out along the riverbank. The elders, with tears in their eyes, said: ‘Yu Lai was a good boy! What a pity he’s dead!’",
"Suddenly Tietou shouted: ‘Ah! Yu Lai! Yu Lai!’ In the reed thicket, a little head emerged above the water. Yu Lai, just like a duckling, shook the water from his head, wiped his eyes and nose with his hand, and clinging to the reeds, asked the people on the bank: ‘Are the soldiers gone?’",
"‘Ah!’ Everyone cheered. ‘Yu Lai is alive! Yu Lai is alive!’",
"Before the shots, Yu Lai had seized the moment when the soldiers weren’t watching and dived into the river. They fired at the water, but our little hero had already swum far away underwater.",
"(Paragraph 12)",
"(Short passage, 21 characters)",
"(Paragraph 14)",
"(Short passage, 16 characters)",
"(Paragraph 16)",
"(Classical Chinese passage, 44 characters)",
"(Passage, 104 characters)",
"(Dialogue passage, 195 characters)",
"(Classical Chinese passage, 57 characters)",
"(Classical Chinese passage, 70 characters)",
"(Classical Chinese passage, 36 characters)",
"(Classical Chinese passage, 74 characters)",
"(Dialogue passage, 94 characters)",
"(Classical Chinese passage, 20 characters)",
"(Dialogue passage, 184 characters)",
"(Paragraph 27)",
"(Paragraph 28)",
"(Dialogue passage, 84 characters)",
"(Dialogue passage, 64 characters)",
"(Dialogue passage, 51 characters)",
"(Dialogue passage, 111 characters)",
"(Dialogue passage, 67 characters)",
"(Dialogue passage, 65 characters)",
"(Classical Chinese passage, 16 characters)",
"(Classical Chinese passage, 69 characters)",
"(Dialogue passage, 50 characters)",
"(Dialogue passage, 22 characters)",
"(Passage, 178 characters)",
"(Classical Chinese passage, 58 characters)",
"(Paragraph 41)",
"(Paragraph 42)",
"(Dialogue passage, 23 characters)",
"(Dialogue passage, 33 characters)",
"(Paragraph 45)",
"(Classical Chinese passage, 69 characters)",
"(Classical Chinese passage, 25 characters)",
"(Dialogue passage, 15 characters)",
"(Paragraph 49)",
"(Classical Chinese passage, 35 characters)",
"(Paragraph 51)",
"(Dialogue passage, 113 characters)",
"(Classical Chinese passage, 46 characters)",
"(Classical Chinese passage, 33 characters)",
"(Classical Chinese passage, 19 characters)",
"(Dialogue passage, 94 characters)",
"(Dialogue passage, 65 characters)",
"(Dialogue passage, 28 characters)",
"(Classical Chinese passage, 57 characters)"
],
      textPinyin: [
"jìn chá jì biān qū de běi bù yǒu yì tiáo huán xiāng hé， hé lǐ cháng zhe hěn duō lú wěi。 hé biān yǒu gè xiǎo cūn zhuāng。 lú huā kāi de shí hòu， yuǎn yuǎn wàng qù， huáng lǜ de lú wěi shàng hǎo xiàng gài le yì céng hòu hòu de bái xuě。 fēng yì chuī， é máo bān de wěi xù jiù piāo piāo yōu yōu dì fēi qǐ lái， bǎ zhè jǐ shí jiā xiǎo fáng wū dōu zhào zài róu ruǎn de lú huā lǐ。 yīn cǐ， zhè cūn jiù jiào lú huā cūn。 shí èr suì de yǔ lái jiù shì zhè cūn de。",
"yǔ lái zuì xǐ huan zhè tiáo jǐn kào zhe cūn biān de huán xiāng hé。 měi dào xià tiān， yǔ lái hé tiě tóu、 sān zuàn ér， hái yǒu hěn duō xiǎo péng yǒu， hǎo xiàng yì qún yú， zài hé lǐ zuàn shàng zuàn xià， cáng māo māo， gǒu páo， lì fú， yǎng fú。 yǔ lái yǎng fú de běn lǐng zuì gāo， néng gòu liǎn cháo tiān zài shuǐ lǐ tǎng zhe， bú dàn bù chén dǐ， hái yào bǎ xiǎo dù pí lù zài shuǐ miàn shàng。",
"qiū tiān。 bà ba cóng jí shàng mài wěi xí huí lái， tóng mā ma shāng liáng： “ kàn jiàn le qū shàng de gōng zuò tóng zhì， shuō shì hái zi men bú shàng xué niàn shū bù xíng， qǐ mǎ yào shàng yè xiào。 jiào yǔ lái shàng yè xiào ba。 yào bù， jiāng lái nào gè zhēng yǎn xiā。 ”",
"nǚ lǎo shī zǒu dào hēi bǎn qián miàn， wū lǐ wēng wēng wēng wēng shuō huà de shēng yīn lì kè tíng zhǐ le。 yǔ lái fān kāi shū， nǚ lǎo shī xié zhe shēn zi， yòng shǒu zhǐ diǎn zháo hēi bǎn shàng de zì， niàn zhe： “ wǒ men shì zhōng guó rén， wǒ men ài zì jǐ de zǔ guó。 ” dà jiā jiù suí zhe nǚ lǎo shī de shǒu zhǐ， qí shēng qīng qīng dì niàn qǐ lái： “ wǒ men—— shì—— zhōng guó rén， wǒ men—— ài—— zì jǐ de—— zǔ guó。 ”",
"yǒu yì tiān， yǔ lái cóng yè xiào huí dào jiā， tǎng zài kàng shàng， bèi sòng dāng tiān wǎn shàng xué huì de kè wén。 hū rán tīng jiàn jiē shàng gū dōng gū dōng yǒu rén pǎo， bǎ wū zi zhèn dé hǎo xiàng yáo huàng qǐ lái。 yǔ lái yì gū lu xià le kàng， bǎ shū sāi zài huái lǐ jiù wǎng wài pǎo， gāng yào mài mén kǎn， jìn lái yí gè rén， shì lǐ dà shū。 suí hòu tīng jiàn rì běn guǐ zi wū lī wā lā dì jiào。 lǐ dà shū máng bǎ qiáng jiǎo nà shèng zhe yí bàn kāng pí de gāng bān kāi， tiào jìn dòng lǐ， shuō： “ bǎ gāng bān huí yuán dì fāng， nǐ jiù kuài dào bié de yuàn lǐ qù， duì shuí yě bù xǔ shuō。 ”",
"guǐ zi bǎ qián hòu yuàn dōu fān biàn le。 biǎn bí zi jūn guān yòng zhōng guó huà duì yǔ lái shuō： “ xiǎo hái， wèn nǐ huà， bù xǔ sā huǎng！ ” yǔ lái shuō： “ wǒ zài wū lǐ， shén me yě méi kàn jiàn。 ” biǎn bí zi jūn guān bǎ táng wǎng yǔ lái shǒu lǐ yì sāi， shuō： “ chī！ nǐ chī！ nǐ dé shuō chū lái tā zài shén me dì fāng！ ” yǔ lái méi yǒu jiē tā de táng， yě méi yǒu huí dá tā。",
"guǐ zi dǎ dé lèi le， yǔ lái hái shì yǎo zhe yá， shuō： “ méi kàn jiàn！ ” biǎn bí zi jūn guān qì dé bào tiào qǐ lái， áo áo dì jiào： “ qiāng bì， qiāng bì！ lā chū qù， lā chū qù！ ”",
"lú huā cūn lǐ de rén tīng dào hé yán shàng xiǎng le jǐ qiāng。 lǎo rén men hán zhe lèi， shuō： “ yǔ lái shì gè hǎo hái zi！ sǐ dé kě xī！ ”",
"tū rán tiě tóu jiào qǐ lái： “ a！ yǔ lái！ yǔ lái！ ” zài lú wěi cóng lǐ， shuǐ miàn shàng lù chū gè xiǎo nǎo dài lái。 yǔ lái hái shì xiàng xiǎo yā zi yí yàng dǒu zhe tóu shàng de shuǐ， yòng shǒu mǒ yí xià yǎn jīng hé bí zi， bā zhe lú wěi， xiàng àn shàng de rén wèn dào： “ guǐ zi zǒu le？ ”",
"“ a！ ” dà jiā dōu gāo xìng dé jiào qǐ lái， “ yǔ lái méi yǒu sǐ！ yǔ lái méi yǒu sǐ！ ”",
"yuán lái qiāng xiǎng yǐ qián， yǔ lái jiù chèn guǐ zi bù fáng bèi， yì tóu zhā dào hé lǐ qù le。 guǐ zi huāng máng xiàng shuǐ lǐ dǎ qiāng， kě shì wǒ men de xiǎo yīng xióng yǔ lái yǐ jīng cóng shuǐ dǐ yóu dào yuǎn chù qù le。",
"wǒ men ài zì jǐ de zǔ guó 。 ”",
"dà jiā jiù suí zhe nǚ lǎo shī de shǒu zhǐ ， qí shēng qīng qīng dì niàn qǐ lái ：",
"“ wǒ men — — shì — — zhōng guó rén ，",
"wǒ men — — ài — — zì jǐ de — — zǔ guó 。 ”",
"sān",
"yǒu yì tiān ， yǔ lái cóng yè xiào huí dào jiā ， tǎng zài kàng shàng ， bèi sòng dāng tiān wǎn shàng xué huì de kè wén 。 kě shì bèi bú dào yí bàn ， tā jiù shuì zháo le 。",
"bù zhī shén me shí hòu ， mén zhī niǔ xiǎng le yì shēng 。 yǔ lái zhēng kāi yǎn ， kàn jiàn shǎn jìn yí gè hēi yǐng 。 mā ma huà le gēn huǒ chái ， diǎn zháo dēng ， yí kàn ， yuán lái shì bà bà chū wài mài xí zi huí lái le 。 tā jiān shàng pī zhe zǐ dàn dài ， yāo lǐ chā zhuó shǒu liú dàn ， bèi shàng hái bèi zhe yì gēn cháng cháng de bù qiāng 。 bà ba zěn me hū rán zhè yàng dǎ bàn qǐ lái le ne ?",
"bà ba duì mā ma shuō ： “ guǐ zi yòu ‘ sǎo dàng ’ liǎo ， mín bīng dōu dào qū shàng jí hé ， yào yì liǎng gè yuè cái néng huí lái 。 ” yǔ lái wèn bà bà shuō ： “ bà ba ， yuǎn bu yuǎn ? ” bà ba bǎ shǒu shēn jìn bèi lǐ ， mō zhe yǔ lái guāng liū liū de jǐ bèi ， shuō ： “ zhè nǎ ér yǒu zhǔn ne ? shuō yuǎn jiù yuǎn ， shuō jìn jiù jìn 。 ” bà ba yòu zhuǎn guò liǎn duì mā ma shuō ： “ míng tiān nǐ dào dōng zhuāng tā lǎo lao jiā qù yí tàng ， gào sù tā jiù jiu ， jiù shuō qū shàng shuō de ， jiào tā gǎn kuài bǎ cūn lǐ mín bīng dài dào qū shàng qù jí hé 。 ” mā ma wèn ： “ qū shàng zài nǎ ér ? ” bà ba zhuāng le yí dài yān ， bā dā bā dā chōu zhe ， shuō ： “ jiào tā men zài hé běi yí dài cūn lǐ dǎ tīng 。 ”",
"yǔ lái hái xiǎng shuō shén me ， kě shì mén kuāng lāng xiǎng le yí xià ， jiù tīng jiàn bà ba zǒu chū qù de jiǎo bù shēng 。 bú dà yí huì er ， shén me yě tīng bú jiàn le ， zhī cóng jiē shàng chuán lái yì liǎng shēng gǒu jiào 。",
"dì èr tiān ， chī guò zǎo fàn ， mā ma jiù dào dōng zhuāng qù ， lín zǒu shuō wǎn shàng cái néng huí lái 。 guò le shǎng wǔ ， yǔ lái chī le diǎn shèng fàn ， yīn wèi kān jiā ， bù néng dào wài miàn qù ， jiù pā zài kàng shàng niàn tā nà hóng bù bāo zhe de shí zì kè běn 。",
"hū rán tīng jiàn jiē shàng gū dōng gū dōng yǒu rén pǎo ， bǎ wū zi zhèn dé hǎo xiàng yào yáo huàng qǐ lái ， chuāng hù zhǐ huā lā huā lā xiǎng 。",
"yǔ lái yì gū lu xià le kàng ， bǎ shū sāi zài huái lǐ jiù wǎng wài pǎo ， gāng yào mài mén kǎn ， jìn lái yí gè rén ， yǔ lái zhèng zhuàng zài zhè ge rén de huái lǐ 。 tā tái tóu yí kàn ， shì lǐ dà shū 。 lǐ dà shū shì qū shàng de jiāo tōng yuán ， cháng zài yǔ lái jiā luò jiǎo 。",
"suí hòu tīng jiàn rì běn guǐ zi wú lī wā lā dì jiào 。 lǐ dà shū máng bǎ qiáng jiǎo nà shèng zhe yí bàn kāng pí de gāng bān kāi 。 yǔ lái liǎng yǎn léng zhù le ， “ yí ! zhè shì shén me shí hòu wā de dòng ne ? ” lǐ dà shū tiào jìn dòng lǐ ， shuō ： “ bǎ gāng bān huí yuán dì fāng 。 nǐ jiù kuài dào bié de yuàn lǐ qù ， duì shuí yě bù xǔ shuō 。 ”",
"shí èr suì de yǔ lái shǐ jìn qì lì ， cái bǎ gāng nuó huí dào yuán dì 。",
"yǔ lái gāng dào táng wū ， jiàn shí jǐ bǎ xuě liàng de cì dāo cóng qián mén jìn lái 。 tā sā tuǐ jiù wǎng hòu yuàn pǎo ， bèi hòu kā lā yì shēng qiāng shuān xiǎng ， yǒu rén dà shēng jiào dào ： “ zhàn zhù ! ” yǔ lái méi lǐ tā ， jiǎo xià xiàng cǎi zhe fēng ， yì zhí cháo hòu yuàn pǎo qù 。 zhī tīng jiàn zǐ dàn xiàng tā tóu shàng sōu sōu dì fēi lái 。 kě shì hòu yuàn méi yǒu mén ， bǎ yǔ lái jí chū yì shēn lěng hàn 。 kào qiáng yǒu yì kē táo shù ， yǔ lái bào zhe jiù wǎng shàng pá 。 guǐ zi yǐ jīng zhuī dào shù dǐ xià ， shēn shǒu zhuā zhù yǔ lái de jiǎo ， wǎng xià yì lā ， yǔ lái jiù shuāi zài dì xià 。 guǐ zi bǎ tā liǎng zhī gē bo xiàng bèi hòu yì nǐng ， kǔn bǎng qǐ lái ， tuī tuī sǎng sǎng huí dào wū lǐ 。",
"sì",
"guǐ zi bǎ qián hòu yuàn dōu fān biàn le 。",
"wū zi lǐ yě zāo le jié nán ， lián zhěn tou dōu gěi cì dāo tiāo pò le 。 kàng yán shàng zuò zhe gè guǐ zi jūn guān ， liǎng yǎn hóng hóng de ， yòng zhōng guó huà wèn yǔ lái ， shuō ： “ xiǎo hái ， wèn nǐ huà ， bù xǔ sā huǎng ! ” tā tū rán wàng zhe yǔ lái de xiōng pú ， zhāng zhe zuǐ ， yǎn jīng zhēng dé yuán yuán de 。",
"yǔ lái dī tóu yí kàn ， yuán lái gāng cái yí zhèn zǐ zhèng zhā ， shí zì kè běn cóng huái lǐ lù chū lái le 。 guǐ zi yì bǎ zhuā zài shǒu lǐ ， fān zhe kàn le kàn ， wèn tā ： “ shuí gěi nǐ de ? ” yǔ lái shuō ： “ jiǎn lái de ! ”",
"guǐ zi lù chū mǎn kǒu jīn yá ， zuò le gè guǐ liǎn ， wēn hé dì duì yǔ lái shuō ： “ bú yào hài pà ! xiǎo hái ， huáng jūn shì ài hù de ! ” shuō zhe ， jiù jiào rén gěi tā sōng bǎng 。",
"yǔ lái bǎ shǒu fàng xià lái ， jué de gē bo fā má fā tòng ， biǎn bí zi jūn guān yòng shǒu mō zhe yǔ lái de nǎo dài ， shuō ： “ zhè běn shū shuí gěi nǐ de ， méi yǒu guān xì ， wǒ bú wèn le 。 bié de huà yào tǒng tǒng gào sù wǒ ! gāng cái yǒu gè rén pǎo jìn lái ， kàn jiàn méi yǒu ? ” yǔ lái yòng shǒu bèi mǒ le yí xià bí zi ， dū dū nāng nāng dì shuō ： “ wǒ zài wū lǐ ， shén me yě méi kàn jiàn 。 ”",
"biǎn bí zi jūn guān bǎ shū rēng zài dì shàng ， shēn shǒu wàng pí bāo lǐ tāo 。 yǔ lái xīn lǐ xiǎng ： “ tāo shén me ne ? zhǎo dāo zǐ ? guǐ zi shēng le qì yào wā xiǎo hái yǎn jīng de ! ” zhǐ jiàn tā tāo chū lái de què shì yì bǎ xuě bái de táng kuài 。",
"biǎn bí zi jūn guān bǎ táng wǎng yǔ lái shǒu lǐ yì sāi ， shuō ： “ chī ! nǐ chī ! nǐ dé shuō chū lái ， tā zài shén me dì fāng ? ” tā yòu shēn chū nà ge dài jīn jiè zhǐ de shǒu zhǐ ， shuō ： “ zhè ge ， jīn de ， yě gěi nǐ ! ”",
"yǔ lái méi yǒu jiē tā de táng ， yě méi yǒu huí dá tā 。",
"páng biān yí gè guǐ zi sōu dì chōu chū dāo lái ， dèng zhuó yǎn jīng yào xiàng yǔ lái tou shàng pī 。 biǎn bí zi jūn guān yáo yáo tóu 。 liǎng gè rén jī jī gū gū shuō le yí zhèn 。 nà guǐ zi xiàng yǔ lái héng zhe bó zi fān bái yǎn ， shǐ jìn bǎ dāo fàng huí qiào lǐ 。",
"biǎn bí zi jūn guān yā zhù dù lǐ de huǒ qì ， yòng shǒu qīng qīng dì pāi zhe yǔ lái de jiān bǎng ， shuō ： “ wǒ zuì xǐ huan xiǎo hái 。 nà ge rén ， nǐ kàn jiàn méi yǒu ? shuō ya ! ”",
"yǔ lái yáo yáo tóu ， shuō ： “ wǒ zài wū lǐ ， shén me yě méi kàn jiàn 。 ”",
"biǎn bí zi jūn guān de yǎn guāng lì kè biàn de xiōng è kě pà ， tā xiàng qián gōng zhe shēn zi ， shēn chū liǎng zhī dà shǒu 。 a ! nà shuāng shǒu jiù xiàng yīng de zhuǎ zi ， niǔ zhe yǔ lái de liǎng zhī ěr duo ， xiàng liǎng biān lā 。 yǔ lái téng dé zhí liě zuǐ 。 guǐ zi yòu chōu chū yì zhī shǒu lái ， zài yǔ lái de liǎn shàng dǎ le liǎng bā zhǎng ， yòu bǎ tā liǎn shàng de ròu jiū qǐ yí kuài ， yǎo zhe yá nǐng 。 yǔ lái de liǎn lì shí biàn chéng bái yí kuài ， qīng yí kuài ， zǐ yí kuài 。 guǐ zi yòu xiàng tā xiōng pú shàng dǎ le yì quán 。 yǔ lái dǎ gè liè qie ， hòu tuì jǐ bù ， hòu nǎo sháo zhèng pèng zài guì bǎn shàng ， dàn lì kè yòu bèi zhuā guò lái ， dù zǐ zhuàng zài kàng yán shàng 。",
"yǔ lái bàn tiān cái chuǎn guò qì lái ， nǎo dài lǐ xiàng yǒu yì wō fēng ， wēng wēng dì jiào 。 tā liǎng yǎn zhí mào jīn huā ， bí zǐ liú zhe xuè 。 yì dī yi dī de xuè dī xià lái ， jiàn zài kè běn nà jǐ háng zì shàng ：",
"“ wǒ men shì zhōng guó rén ，",
"wǒ men ài zì jǐ de zǔ guó 。 ”",
"guǐ zi dǎ dé lèi le ， yǔ lái hái shì yǎo zhe yá ， shuō ： “ méi kàn jiàn ! ”",
"biǎn bí zi jūn guān qì dé bào tiào qǐ lái ， áo áo dì jiào ： “ qiāng bì ， qiāng bì ! lā chū qù ， lā chū qù ! ”",
"wǔ",
"tài yáng yǐ jīng luò xià qù 。 lán lán de tiān shàng piāo zhe de fú yún xiàng yí kuài yi kuài hóng chóu zǐ ， yìng zài huán xiāng hé shàng ， xiàng kāi le yí dà duǒ yí dà duǒ jī guān huā 。 wěi táng de lú huā bèi fēng chuī qǐ lái ， zài shàng miàn piāo piāo yōu yōu dì fēi zhe 。",
"lú huā cūn lǐ de rén tīng dào hé yán shàng xiǎng le jǐ qiāng 。 lǎo rén men hán zhe lèi ， shuō ：",
"“ yǔ lái shì gè hǎo hái zi ! sǐ dé kě xī ! ”",
"“ yǒu zhì bú zài nián gāo 。 ”",
"lú huā cūn de hái zi men ， yǔ lái de hǎo péng yǒu tiě tóu hé sān zuàn ér jǐ gè rén ， tīng dào qiāng shēng dōu wū wū dì kū le 。",
"liù",
"lǐ dà shū zài dì dòng lǐ děng le hǎo jiǔ ， bú jiàn yǔ lái lái bān gāng ， jiù wǎng lìng yí gè chū kǒu zǒu 。 tā shì tàn zhe tuī kāi dòng kǒu de shí bǎn ， bā kāi wěi yè ， yuàn zi lǐ kōng kōng de ， yí gè rén yǐng yě méi yǒu ， sì chù yě bú jiàn dòng jìng 。 hū rán tīng jiàn jiē shàng yǒu rén yāo he ： “ dòu fu lā ! mài dòu fu lā ! ” zhè shì lú huā cūn de àn hào ， lǐ dà shū zhī dào dí rén yǐ jīng zǒu yuǎn le 。",
"kě shì yǔ lái zěn me hái bú jiàn ne ? tā pǎo dào jiē shàng ， kàn jiàn xǔ duō rén wǎng hé yán pǎo ， yì dǎ tīng ， cái zhī dào yǔ lái bèi guǐ zi dǎ sǐ zài hé lǐ le 。",
"lǐ dà shū nǎo dài hōng de yì shēng ， yǎn lèi jiù liú xià lái le 。 tā yì gǔ jìn ér dì gēn zhe rén men xiàng hé yán pǎo 。",
"dào le hé yán ， bié shuō shī shǒu ， lián yì dī xuè yě méi kàn jiàn 。",
"dà jiā dāi dāi dì zài hé yán shàng lì zhe 。 huán xiāng hé jìng jìng de ， hé shuǐ dǎ zhe xuán wō huā huā dì xiàng xià liú qù 。 chóng zǐ zài cǎo wō lǐ jiào zhe 。 bù zhī shuí shuō ： “ yě xǔ guǐ zi bǎ yǔ lái rēng zài hé lǐ ， chōng zǒu le ! ” dà jiā jiù shùn zhe hé àn xiàng xià zhǎo 。 tū rán tiě tóu jiào qǐ lái ： “ a ! yǔ lái ! yǔ lái ! ”",
"zài lú wěi cóng lǐ ， shuǐ miàn shàng lù chū gè xiǎo nǎo dài lái 。 yǔ lái hái shì xiàng xiǎo yā zi yí yàng dǒu zhe tóu shàng de shuǐ ， yòng shǒu mǒ yí xià yǎn jīng hé bí zi ， bā zhe lú wěi ， xiàng àn shàng de rén wèn dào ： “ guǐ zi zǒu le ? ”",
"“ a ! ” dà jiā dōu gāo xìng dé jiào qǐ lái ， “ yǔ lái méi yǒu sǐ ! yǔ lái méi yǒu sǐ ! ”",
"yuán lái qiāng xiǎng yǐ qián ， yǔ lái jiù chèn guǐ zi bù fáng bèi ， yì tóu zhā dào hé lǐ qù 。 guǐ zi huāng máng xiàng shuǐ lǐ dǎ qiāng ， kě shì wǒ men de xiǎo yīng xióng yǔ lái yǐ jīng cóng shuǐ dǐ yóu dào yuǎn chù qù le 。"
],
      recognizeChars: ["晋","絮","扭","姥","吧","塞","呜","哇","糠","栓","捆","绑","劫","毙","扒","尸"],
      writeChars: ["晋","炕","铅","呜","哩","栓","胳","膊","劫","绸","扒","敌","尸","趁","慌"],
      vocabWords: [
        {word:'芦花',pinyin:'lú huā',en:'reed catkins',sentence:'芦花开的时候远远望去。',sentenceEn:'When reed catkins bloom, looking from afar.'},
        {word:'扁鼻子',pinyin:'biǎn bí zi',en:'flat nose',sentence:'扁鼻子军官。',sentenceEn:'The flat-nosed officer.'},
        {word:'鬼子',pinyin:'guǐ zi',en:'enemy soldier',sentence:'鬼子来了。',sentenceEn:'The enemy soldiers came.'},
        {word:'抗日',pinyin:'kàng rì',en:'anti-Japanese',sentence:'抗日小英雄。',sentenceEn:'Anti-Japanese little hero.'},
        {word:'游泳',pinyin:'yóu yǒng',en:'swim',sentence:'雨来游泳本领高。',sentenceEn:'Yulai was an excellent swimmer.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u664b\u5bdf\u5180\u8fb9\u533a\u7684\u5317\u90e8\u6709\u4e00\u6761\u8fd8\u4e61\u6cb3\uff0c\u6cb3\u91cc\u957f\u7740\u5f88\u591a\u82a6\u82c7\u3002", exampleEn: "In the north of the Jin-Cha-Ji border region flowed the Huanxiang River, thick w", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u4e0d\u4f46\u2026\u2026\u800c\u4e14\u2026\u2026", pointEn: "not only...but also...", example: "\u664b\u5bdf\u5180\u8fb9\u533a\u7684\u5317\u90e8\u6709\u4e00\u6761\u8fd8\u4e61\u6cb3\uff0c\u6cb3\u91cc\u957f\u7740\u5f88\u591a\u82a6\u82c7\u3002", exampleEn: "In the north of the Jin-Cha-Ji border region flowed the Huanxiang River, thick w", explanation: "\u9012\u8fdb\u590d\u53e5\uff0c\u540e\u4e00\u5206\u53e5\u6bd4\u524d\u4e00\u5206\u53e5\u7a0b\u5ea6\u66f4\u6df1", explanationEn: "Progressive compound sentence where the second clause goes further than the first"}
      ],
      footnotes: [
        {term:"\u82a6\u82b1", termEn:"reed catkins", definition:"\u3010l\u00fa hu\u0101\u3011reed catkins\u3002", definitionEn:"reed catkins"},
        {term:"\u6241\u9f3b\u5b50", termEn:"flat nose", definition:"\u3010bi\u01cen b\u00ed zi\u3011flat nose\u3002", definitionEn:"flat nose"},
        {term:"\u9b3c\u5b50", termEn:"enemy soldier", definition:"\u3010gu\u01d0 zi\u3011enemy soldier\u3002", definitionEn:"enemy soldier"},
        {term:"\u6297\u65e5", termEn:"anti-Japanese", definition:"\u3010k\u00e0ng r\u00ec\u3011anti-Japanese\u3002", definitionEn:"anti-Japanese"},
        {term:"\u6e38\u6cf3", termEn:"swim", definition:"\u3010y\u00f3u y\u01d2ng\u3011swim\u3002", definitionEn:"swim"}
      ],
      readingTips: [
        {cn:"\u8fd9\u7bc7\u6587\u7ae0\u8f83\u957f\uff0c\u5efa\u8bae\u5206\u6bb5\u9605\u8bfb\u3002\u6bcf\u8bfb\u5b8c\u4e00\u6bb5\uff0c\u505c\u4e0b\u6765\u60f3\u60f3\u8fd9\u6bb5\u7684\u4e3b\u8981\u5185\u5bb9\u3002", en:"This is a longer text. Read it paragraph by paragraph, pausing after each to think about the main idea."},
        {cn:"\u8bfb\u5b8c\u5168\u6587\u540e\uff0c\u8bd5\u7740\u7528\u4e00\u53e5\u8bdd\u6982\u62ec\u6587\u7ae0\u7684\u4e2d\u5fc3\u601d\u60f3\u3002", en:"After reading the whole text, try to summarize the central idea in one sentence."}
      ],
      exercises: [
        {type:"read",cn:"为什么说雨来是小英雄？带着这个问题，尝试用较快的速度默读课文",en:"Why is Yu Lai called a little hero? Read with this question in mind, trying to read quickly"},
        {type:"discuss",cn:"给每个部分列出小标题，再说说课文的主要内容",en:"Give each section a subtitle, then summarize the main content"},
        {type:"think",cn:"课文中多次写到还乡河的景色，找出来读一读，再说说写这些景色有什么作用",en:"Find the descriptions of the Huanxiang River scenery and explain their purpose"}
      ],
      teachingPoints: [
        {cn:"学习把握长文章主要内容的方法：列小标题，连接各部分",en:"Learn to grasp the main content of a long text: list subtitles and connect the sections"},
        {cn:"理解环境描写（还乡河景色）在叙事中的作用",en:"Understand the role of environmental descriptions in narrative"}
      ],
      parentTips: [
        {cn:"和孩子一起讨论勇气和爱国精神，联系生活中的榜样",en:"Discuss courage and patriotism with your child, connecting to real-life role models"},
        {cn:"引导孩子练习给长文章的各部分列小标题，概括主要内容",en:"Help your child practice creating subtitles for sections of long texts and summarizing content"}
      ]
    },
    {
      id: 20, title: "我们家的男子汉", titleEn: "The Man of Our Family",
      difficulty: 3,
      isSelfRead: true,
      text: [
"我们家里有一个男子汉。那是姐姐的孩子。姐姐生下他后，就和姐夫到安徽去了，把他留在家中由我们来照看。",
"他对食物的兴趣",
"“他吃饭很爽气。”带他的保姆这么说他。确实，他吃饭吃得很好，量很多，范围很广——什么都要吃，而且吃得极有滋味，叫人看了不由得也会嘴馋起来。当然，和所有的孩子一样，他不爱吃青菜。可是我对他说:“不吃青菜会死的。”他便吃了，吃得很多。他不愿死，似乎是深感活的乐趣的。他对所有的滋味都有兴趣，为了吃一客小笼包子，他可以耐心地等上三刻钟；他会为他喜欢吃的东西编儿歌一样的谜语。当实在不能吃了的时候，他便吃自己的大拇指，吃得十分专心，以至前边的嘴唇都有些翘了起来。当《少林寺》风靡全国时，他也学会了一套足以乱真的醉拳。耍起来，眼神都恍惚了，十分入迷。他向往着去少林寺当和尚。可是我们告诉他，当和尚不能吃荤。他说：“用肉汤拌饭可以吗？”“不可以。”“那棒冰可以吃吗？”他小心地问，是问“棒冰”，而不是冰激凌，甚至不是雪糕。“那山上恐怕是没有棒冰的。”我们感到非常抱歉。",
"他对独立的要求",
"不知从什么时候起，和他出去，他不愿让人牵他的手了。一只胖胖的小手在我的手掌里，像一条倔强的活鱼一样挣扎着。有一次，我带他去买东西，他提出要让他自己买。我给他一角钱。他攥着钱，走近了柜台，忽又胆怯起来。我说：“你递上钱，我帮你说好了。”“不要不要，我自己说。”他说。到了柜台前，他又嘱咐了一句：“你不要讲话啊！”营业员终于过来了，他脸色有点紧张，勇敢地开口了：“买，买，买……”他忘了他要买什么了。我终于忍不住了：“买一包山楂片。”他好久没说话，潦草地吃着山楂片，神情有些沮丧。我有点后悔起来。后来，他会自个儿拿着五个汽水瓶和一元钱门口小店换橘子水了。他是一定要自己去的。假如有人不放心，跟在后面，他便停下脚步不走了：“你回去，回去嘛！”我只得由他去了。他买橘子水日益熟练起来，情绪日益高涨，最终成了一种狂热。为了能尽快地拿着空瓶再去买，他便努力地喝橘子水。一个炎热的下午，我从外面回来，见他正在门口小店买橘子水。他站在冰箱前头，露出半个脑袋。营业员只顾和几个成年人做生意，看都不看他一眼。他满头大汗地、耐心地等待着。我很想走过去帮他叫一声“同志”，可最后还是忍住了。",
"他面对生活挑战的沉着",
"当他满了两周岁的时候，我们决定把他送托儿所了。去的那天早上，他一声不吭，很镇静地四下打量着。当别的孩子们哭的时候，他才想起了哭。哭声嘹亮，并无伤感，似乎只为了参加一个仪式。每天早上，送他去托儿所都很容易，不像我们姐妹几个小时候那样，哭死闹着不肯去。问他喜欢托儿所吗?他说：“不喜欢。”可是他明白了自己不得不去，也就坦然地接受了这个现实，不作任何无效的挣扎。据老师说，他吃饭很好，睡觉很好，唱歌游戏都很好，只不过还有点拘束。然而，他迅速地熟悉起来，开始交朋友，打架。每天去接他，都要听到老师几句抱怨。",
"在他四岁那年，他的老保姆病了，回乡了，他终于要去安徽了。他是极不愿意去的。走的前一天，他对外婆说:“外婆，你不要我了，把我扔出去了。”外婆几乎要动摇了，想把他留下。那时候，上海到合肥，每天只有一班火车，人很多。车门被行李和人堵满了，大人们只好先挤上了车，把他留在月台上。他着急地喊起来：“我怎么办呢?”我安慰他：“上不去，就不去了。”他仍然很着急，他认为自己是非走不可的。姐姐说：“让他从窗口爬进来吧!”我把他抱了起来，他勇敢地抓住窗框，两只脚有力地蹬着车厢，攀上了窗口。窗口边的旅客不约而同地伸手去抱他。他推开那些妨碍他的手，抓住一双最得力的，蹿进了车厢，淹没在济济的人群里了。",
"这就是我们家的男子汉。看着他那样地一点儿一点儿长大，他的脸盘的轮廓，他的手掌上的细纹，他的身体，他的力气，他的智慧，他的性格，还有他的性别，那样神秘地一点儿一点儿鲜明，突出，扩大，再扩大，实在是一件最最奇妙的事情。"
],
      textEn: [
"There is a ‘man’ in our family — my sister’s child. He eats heartily, in great quantity and variety, savoring everything. Like all children, he dislikes vegetables. But when I told him, ‘You’ll die if you don’t eat vegetables,’ he ate them — lots of them.",
"At some point, he stopped letting anyone hold his hand when going out. His chubby little hand struggled in mine like a stubborn live fish. Once I took him shopping and he insisted on buying things himself. Clutching the money, he approached the counter but grew timid. He whispered to me: ‘Don’t say anything!’ When the clerk came, he said nervously but bravely: ‘Comrade, buy, buy, buy…’ He’d forgotten what he wanted.",
"At two, we sent him to nursery. That morning he was silent, calmly surveying everything. At four, he had to move to Anhui. The day before, he told Grandma: ‘Grandma, you don’t want me anymore; you’re throwing me away.’ Yet he bravely gripped the train window frame, kicked against the carriage with his strong little legs, and climbed through the window.",
"This is the man of our family. Watching him grow bit by bit — the outline of his face, the lines on his palms, his body, his strength, his wisdom, his character — all becoming mysteriously clearer, more distinct, expanding and expanding. It is truly the most wondrous thing.",
"(Dialogue passage, 483 characters)",
"(Paragraph 6)",
"(Dialogue passage, 249 characters)",
"(Dialogue passage, 290 characters)",
"(Passage, 107 characters)"
],
      textPinyin: [
"wǒ men jiā lǐ yǒu yí gè nán zǐ hàn， nà shì jiě jie de hái zi。 tā chī fàn hěn shuǎng qì， liáng hěn duō， fàn wéi hěn guǎng—— shén me dōu yào chī， ér qiě chī dé jí yǒu zī wèi。 dāng rán， hé suǒ yǒu de hái zi yí yàng， tā bú ài chī qīng cài。 kě shì wǒ duì tā shuō： “ bù chī qīng cài huì sǐ de。 ” tā biàn chī le， chī dé hěn duō。",
"bù zhī cóng shén me shí hòu qǐ， hé tā chū qù， tā bú yuàn ràng rén qiān tā de shǒu le。 yì zhī pàng pàng de xiǎo shǒu zài wǒ de shǒu zhǎng lǐ， xiàng yì tiáo jué jiàng de huó yú yí yàng zhēng zhá zhe。 yǒu yí cì， wǒ dài tā qù mǎi dōng xī， tā tí chū yào ràng tā zì jǐ mǎi。 tā zuàn zhe qián， zǒu jìn le guì tái， hū rán yòu dǎn qiè qǐ lái。 dào le guì tái qián， tā yòu zhǔ fù wǒ yí jù： “ nǐ bú yào jiǎng huà a！ ” yíng yè yuán zhōng yú guò lái le， tā shén qíng yǒu diǎn er jǐn zhāng， yǒng gǎn dì kāi kǒu le： “ tóng zhì， mǎi， mǎi， mǎi…… ” tā wàng le yào mǎi shén me dōng xī le。",
"dāng tā mǎn liǎng zhōu suì de shí hòu， wǒ men jué dìng bǎ tā sòng jìn tuō ér suǒ。 qù de nà tiān zǎo chén， tā yì shēng bù kēng， hěn zhèn jìng dì sì xià dǎ liang zhe。 tā sì suì nà nián， zhōng yú yào qù ān huī le。 zǒu de qián yì tiān， tā duì wài pó shuō： “ wài pó， nǐ bú yào wǒ le， bǎ wǒ rēng chū qù le。 ” tā yǒng gǎn dì zhuā zhù chuāng kuàng， liǎng zhī jiǎo yǒu lì dì dēng zhe chē xiāng， pān shàng le chuāng kǒu。",
"zhè jiù shì wǒ men jiā de nán zǐ hàn。 kàn zhe tā yì diǎn ér yì diǎn ér zhǎng dà， tā de liǎn pán de lún kuò， tā de shǒu zhǎng shàng de xì wén， tā de shēn tǐ， tā de lì qi， tā de zhì huì， tā de xìng gé， hái yǒu tā de xìng bié， nà yàng shén mì dì yì diǎn ér yì diǎn ér xiān míng， tū chū， kuò dà， zài kuò dà， shí zài shì yí jiàn zuì zuì qí miào de shì qíng。",
"bù zhī cóng shén me shí hòu qǐ ， hé tā chū qù ， tā bú yuàn ràng rén qiān tā de shǒu le 。 yì zhī pàng pàng de xiǎo shǒu zài wǒ de shǒu zhǎng lǐ ， xiàng yì tiáo jué jiàng de huó yú yí yàng zhēng zhá zhe 。 yǒu yí cì ， wǒ dài tā qù mǎi dōng xī ， tā tí chū yào ràng tā zì jǐ mǎi 。 wǒ gěi tā yì jiǎo qián 。 tā zuàn zhe qián ， zǒu jìn le guì tái ， hū yòu dǎn qiè qǐ lái 。 wǒ shuō ： “ nǐ dì shàng qián ， wǒ bāng nǐ shuō hǎo le 。 ” “ bú yào bu yào ， wǒ zì jǐ shuō 。 ” tā shuō 。 dào le guì tái qián ， tā yòu zhǔ fù le yí jù ： “ nǐ bú yào jiǎng huà a ！ ” yíng yè yuán zhōng yú guò lái le ， tā liǎn sè yǒu diǎn jǐn zhāng ， yǒng gǎn dì kāi kǒu le ： “ mǎi ， mǎi ， mǎi … … ” tā wàng le tā yào mǎi shén me le 。 wǒ zhōng yú rěn bú zhù le ： “ mǎi yì bāo shān zhā piàn 。 ” tā hǎo jiǔ méi shuō huà ， liáo cǎo dì chī zhe shān zhā piàn ， shén qíng yǒu xiē jǔ sàng 。 wǒ yǒu diǎn hòu huǐ qǐ lái 。 hòu lái ， tā huì zì gě er ná zhe wǔ gè qì shuǐ píng hé yì yuán qián mén kǒu xiǎo diàn huàn jú zǐ shuǐ le 。 tā shì yí dìng yào zì jǐ qù de 。 jiǎ rú yǒu rén bú fàng xīn ， gēn zài hòu miàn ， tā biàn tíng xià jiǎo bù bù zǒu le ： “ nǐ huí qù ， huí qù ma ！ ” wǒ zhī dé yóu tā qù le 。 tā mǎi jú zǐ shuǐ rì yì shú liàn qǐ lái ， qíng xù rì yì gāo zhǎng ， zuì zhōng chéng le yì zhǒng kuáng rè 。 wèi le néng jǐn kuài dì ná zhe kōng píng zài qù mǎi ， tā biàn nǔ lì dì hē jú zǐ shuǐ 。 yí gè yán rè de xià wǔ ， wǒ cóng wài miàn huí lái ， jiàn tā zhèng zài mén kǒu xiǎo diàn mǎi jú zǐ shuǐ 。 tā zhàn zài bīng xiāng qián tóu ， lù chū bàn gè nǎo dài 。 yíng yè yuán zhǐ gù hé jǐ gè chéng nián rén zuò shēng yì ， kàn dōu bú kàn tā yì yǎn 。 tā mǎn tóu dà hàn dì 、 nài xīn dì děng dài zhe 。 wǒ hěn xiǎng zǒu guò qù bāng tā jiào yì shēng “ tóng zhì ” ， kě zuì hòu hái shì rěn zhù le 。",
"tā miàn duì shēng huó tiǎo zhàn de chén zhuó",
"dāng tā mǎn le liǎng zhōu suì de shí hòu ， wǒ men jué dìng bǎ tā sòng tuō ér suǒ le 。 qù de nà tiān zǎo shàng ， tā yì shēng bù kēng ， hěn zhèn jìng dì sì xià dǎ liang zhe 。 dāng bié de hái zi men kū de shí hòu ， tā cái xiǎng qǐ le kū 。 kū shēng liáo liàng ， bìng wú shāng gǎn ， sì hū zhī wèi le cān jiā yí gè yí shì 。 měi tiān zǎo shàng ， sòng tā qù tuō ér suǒ dōu hěn róng yì ， bú xiàng wǒ men jiě mèi jǐ gè xiǎo shí hòu nà yàng ， kū sǐ nào zhe bù kěn qù 。 wèn tā xǐ huān tuō ér suǒ ma ? tā shuō ： “ bù xǐ huan 。 ” kě shì tā míng bái le zì jǐ bù dé bú qù ， yě jiù tǎn rán dì jiē shòu le zhè ge xiàn shí ， bú zuò rèn hé wú xiào de zhēng zhá 。 jù lǎo shī shuō ， tā chī fàn hěn hǎo ， shuì jiào hěn hǎo ， chàng gē yóu xì dōu hěn hǎo ， zhī bú guò hái yǒu diǎn jū shù 。 rán ér ， tā xùn sù dì shú xī qǐ lái ， kāi shǐ jiāo péng yǒu ， dǎ jià 。 měi tiān qù jiē tā ， dōu yào tīng dào lǎo shī jǐ jù bào yuàn 。",
"zài tā sì suì nà nián ， tā de lǎo bǎo mǔ bìng le ， huí xiāng le ， tā zhōng yú yào qù ān huī le 。 tā shì jí bú yuàn yì qù de 。 zǒu de qián yì tiān ， tā duì wài pó shuō : “ wài pó ， nǐ bú yào wǒ le ， bǎ wǒ rēng chū qù le 。 ” wài pó jī hū yào dòng yáo le ， xiǎng bǎ tā liú xià 。 nà shí hòu ， shàng hǎi dào hé féi ， měi tiān zhī yǒu yì bān huǒ chē ， rén hěn duō 。 chē mén bèi xíng li hé rén dǔ mǎn le ， dà rén men zhī hǎo xiān jǐ shàng le chē ， bǎ tā liú zài yuè tái shàng 。 tā zháo jí dì hǎn qǐ lái ： “ wǒ zěn me bàn ne ? ” wǒ ān wèi tā ： “ shàng bú qù ， jiù bú qù le 。 ” tā réng rán hěn zháo jí ， tā rèn wéi zì jǐ shì fēi zǒu bù kě de 。 jiě jie shuō ： “ ràng tā cóng chuāng kǒu pá jìn lái ba ! ” wǒ bǎ tā bào le qǐ lái ， tā yǒng gǎn dì zhuā zhù chuāng kuàng ， liǎng zhī jiǎo yǒu lì dì dēng zhe chē xiāng ， pān shàng le chuāng kǒu 。 chuāng kǒu biān de lǚ kè bù yuē ér tóng dì shēn shǒu qù bào tā 。 tā tuī kāi nà xiē fáng ài tā de shǒu ， zhuā zhù yì shuāng zuì dé lì de ， cuān jìn le chē xiāng ， yān mò zài jì jì de rén qún lǐ le 。",
"zhè jiù shì wǒ men jiā de nán zǐ hàn 。 kàn zhe tā nà yàng dì yì diǎn ér yì diǎn ér zhǎng dà ， tā de liǎn pán de lún kuò ， tā de shǒu zhǎng shàng de xì wén ， tā de shēn tǐ ， tā de lì qi ， tā de zhì huì ， tā de xìng gé ， hái yǒu tā de xìng bié ， nà yàng shén mì dì yì diǎn ér yì diǎn ér xiān míng ， tū chū ， kuò dà ， zài kuò dà ， shí zài shì yí jiàn zuì zuì qí miào de shì qíng 。"
],
      recognizeChars: ["徽","谜","唇","尚","荤","倔","强","嘱","咐","沮","吭","嘹","仪","蹬","妨"],
      writeChars: [],
      vocabWords: [
        {word:'男子汉',pinyin:'nán zǐ hàn',en:'real man',sentence:'一个小小的男子汉。',sentenceEn:'A little man.'},
        {word:'独立',pinyin:'dú lì',en:'independent',sentence:'他越来越独立。',sentenceEn:'He became more and more independent.'},
        {word:'沉默',pinyin:'chén mò',en:'silent',sentence:'他变得沉默了一会儿。',sentenceEn:'He became silent for a moment.'},
        {word:'坚强',pinyin:'jiān qiáng',en:'strong',sentence:'他表现得很坚强。',sentenceEn:'He showed himself to be strong.'},
        {word:'逐渐',pinyin:'zhú jiàn',en:'gradually',sentence:'他逐渐长大了。',sentenceEn:'He gradually grew up.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u6211\u4eec\u5bb6\u91cc\u6709\u4e00\u4e2a\u7537\u5b50\u6c49\uff0c\u90a3\u662f\u59d0\u59d0\u7684\u5b69\u5b50\u3002", exampleEn: "There is a \u2018man\u2019 in our family \u2014 my sister\u2019s child. He eats heartily, in great q", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u4e0d\u4f46\u2026\u2026\u800c\u4e14\u2026\u2026", pointEn: "not only...but also...", example: "\u6211\u4eec\u5bb6\u91cc\u6709\u4e00\u4e2a\u7537\u5b50\u6c49\uff0c\u90a3\u662f\u59d0\u59d0\u7684\u5b69\u5b50\u3002", exampleEn: "There is a \u2018man\u2019 in our family \u2014 my sister\u2019s child. He eats heartily, in great q", explanation: "\u9012\u8fdb\u590d\u53e5\uff0c\u540e\u4e00\u5206\u53e5\u6bd4\u524d\u4e00\u5206\u53e5\u7a0b\u5ea6\u66f4\u6df1", explanationEn: "Progressive compound sentence where the second clause goes further than the first"}
      ],
      footnotes: [
        {term:"\u7537\u5b50\u6c49", termEn:"real man", definition:"\u3010n\u00e1n z\u01d0 h\u00e0n\u3011real man\u3002", definitionEn:"real man"},
        {term:"\u72ec\u7acb", termEn:"independent", definition:"\u3010d\u00fa l\u00ec\u3011independent\u3002", definitionEn:"independent"},
        {term:"\u6c89\u9ed8", termEn:"silent", definition:"\u3010ch\u00e9n m\u00f2\u3011silent\u3002", definitionEn:"silent"},
        {term:"\u575a\u5f3a", termEn:"strong", definition:"\u3010ji\u0101n qi\u00e1ng\u3011strong\u3002", definitionEn:"strong"},
        {term:"\u9010\u6e10", termEn:"gradually", definition:"\u3010zh\u00fa ji\u00e0n\u3011gradually\u3002", definitionEn:"gradually"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"尝试用较快的速度默读课文。结合课文中的小标题，说说为什么称这个孩子为\u201C男子汉\u201D",en:"Read quickly. Using the section titles, explain why the child is called a \u2018man\u2019"},
        {type:"think",cn:"还可以给每个部分换个小标题",en:"Try giving each section a different subtitle"}
      ],
      teachingPoints: [
        {cn:"学习用小标题组织长文章的方法",en:"Learn to organize long articles with subtitles"},
        {cn:"从细节描写中感受孩子成长的可爱与勇敢",en:"Feel the charm and courage of a child\u2019s growth through detailed descriptions"}
      ],
      parentTips: [
        {cn:"和孩子聊聊自己小时候的趣事，分享成长的故事",en:"Share funny childhood stories with your child and talk about growing up"},
        {cn:"鼓励孩子记录生活中的小事，练习用细节描写人物",en:"Encourage recording small life events and practicing character description through details"}
      ]
    },
    {
      id: 21, title: "芦花鞋", titleEn: "Reed Flower Shoes",
      difficulty: 3,
      isSelfRead: true,
      text: [
"这里出产一种冬天穿的芦花鞋。",
"那鞋的制作工序是：先将上等的芦花采回来，然后将它们均匀地搓进草绳里，再编织成鞋。那鞋很厚实，像暖和和的鸟窝。",
"收罢秋庄稼，青铜家就已决定：今年冬闲时，全家人一起动手，编织一百双芦花鞋，然后让青铜背着，到油麻地镇上去卖。",
"这是家里的一笔收入，一笔很重要的收入。想到这笔收入，全家人都很兴奋，觉得心里亮堂堂的，未来的日子亮堂堂的。",
"青铜拿着一只大布口袋，钻进芦苇荡的深处，挑那些毛绒绒的、蓬松松的、闪着银光的芦花，将它们从穗上捋下来。头年的不要，只采当年的。那芦花很像鸭绒，看着，心里就觉得暖和。妹妹葵花跟着青铜，一起走进芦苇荡。她仰起头来，不停地寻觅着，见到特别漂亮的一穗，她不采，总是喊：“哥，这儿有一穗！”青铜闻声，就会赶过来。见到葵花手指着的那一穗真是好花，就会笑昧眯的。",
"当第一双男鞋和第一双女鞋分别从爸爸和妈妈的手中",
"编织出来时，全家人都很开心。两双鞋，在一家人手里传来传去地看个没够。",
"这两双芦花鞋，实在是太好看了。那柔软的芦花，竟像是长在上面的一般。被风一吹，那花都往一个方向倾覆而去，露出金黄的稻草来。让人想到落在树上的鸟，风吹起时，细软的绒毛被吹开，露出身子来。两双鞋，既像四只鸟窝，又像两对鸟。",
"青铜一家，老老少少，将所有空闲都用在了芦花鞋的编织上。他们编织了一百零一双鞋。第一百零一双是为青铜编的。青铜也应该有一双新的芦花鞋。",
"接下来的日子里，青铜天天背着几十双芦花鞋到油麻地镇上去卖。那些芦花鞋实在太招人喜欢了，一双一双地卖了出去，仅仅过了三天，就只剩下十一双了。",
"天下了一夜大雪，积雪足有一尺厚，早晨门都很难推开。雪还在下。",
"奶奶对青铜说：“今天就别去镇上卖鞋了。”爸爸妈妈也都对青铜说：“剩下的十一双，一双是给你的，还有十双，卖得了就卖，卖不了就留着自家人穿，”葵花也一个劲地说：“哥，今天就别去卖鞋了，”",
"但青铜却坚持着今天一定要去镇上。他对奶奶他们说：“今天天冷，更会有人买鞋的”",
"妈妈说：“那你选一双穿上，不然就别去了",
"青铜同意了 他挑了一双适合他的芦花鞋，将脚洗得干干净净，穿上了 然后拿起余下的十双芦花鞋，朝大人们摇摇手，便跑进了风雪里。",
"到了镇上一看，街上几乎没有人，只有大雪不住地抛落在空寂的街面上不一会儿，挂在绳子上的十双芦花鞋就落满了雪。",
"对面屋子里围炉烤火的人招呼青铜：“进屋里来吧，这里能看到你的鞋，丢不了。”青铜摇了摇手，坚持守在芦花鞋旁。",
"到了中午，雪大了起来，成团成团地往下抛落望着漫天大雪，青铜在心里不住地说着：“买鞋的，快来吧！买鞋的，快来吧！……”",
"雪在他的祈求声中，渐渐停了青铜将芦花鞋一双双取下，把落在上面的积雪扑打干净后，重又挂到绳子上。",
"这时，街上走来一行路过这里的城里人，马上要过年了，他们要从这里坐轮船回城里去。他们或背着包，或提着包，一路说笑着，一路器吱咯吱地踩着雪走过来。青铜没有招呼他们。因为他认为，城里人是不会买他的芦花鞋的，他们只穿布棉鞋和皮棉鞋。",
"但他们走过芦花鞋时，却有几个人停住了。其余的见这几个人停住了，也都停住了。那十双被雷地映照着的芦花鞋，一下吸引住了他们。其中肯定有一两个是搞艺术的，看着这些鞋，嘴里分啧啧地感叹不已。他们忘记了它们的用途，只是觉得它们好看——不是一般的好看，而是特别的好看。他们一个个走上前来，用手娑摸着它们——这一抚摸，使他们对这些鞋更加喜欢。还有几个人将它们拿到鼻子底下闻了闻，一股稻草香，在这清新的空气里，格外分明。",
"一个人说：“买一双回去挂在墙上，倒不错。”好几个人点头，并各自取了一双，唯恐下手晚了，被别人拿了去。",
"一共九个人，都拿了芦花鞋，其中一个人拿了两双，十双鞋都在他们手中了。接下来就是谈价钱。青铜一直疑惑着，直到人家一个劲地问他多少钱一双，他才相信他们真的要买这些鞋。他没有因为他们的眼神里闪现出来的那份欣喜而涨价，还是报了他本来想奏的价。他们都觉得便宜，二话没说，就付了钱。青铜抓着一大把钱，站在雪地上，一时竟有点儿反应不过来。",
"天睛了，四周一片明亮。青铜沿着来时的路往回走着。",
"有一个人朝他追了过来，并在他身后大声喊着：“孩子，你停一停！”青铜停下了，转过身去，疑惑地望着向他跑过来的人。那人跑到青铜跟前，说：“我看到他们买的芦花鞋了，心里好喜欢，你还有卖的吗？”青铜摇了摇头，心里很为那人感到遗惚。那人失望地一摊手，并叹息了一声。青铜望着那个人，心里觉得有点儿对不住他。",
"那人掉头朝轮船码头走去。",
"青铜掉头往家走去。",
"走着走着，青铜放慢了脚步。他的目光落在了自己脚上的那双芦花鞋上。雪在芦花鞋下咯吱咯吱地响着。他越走越慢，后来停下了。他看看天空，看看雪地，最后又把目光落在了自己脚上的芦花鞋上。",
"他觉得双脚暖和和的。",
"但过了一会儿，他将右脚从芦花鞋里拔了出来，站在了雪地上。他的脚板顿时感到了一股针刺般的寒冷。他又",
"将左脚从芦花鞋里拔了出来，站在了雪地上。又是一股刺骨的寒冷。他弯下腰，捡起了那双芦花鞋，放到眼前看着。因为一路上都是雪，那双鞋竟然没有一丝污迹，看上去，完全是一双新鞋。他笑了笑，掉头朝那个人追了过去。",
"他的赤脚踏过积雪时，溅起了一蓬蓬雪屑……"
],
      textEn: [
"The area produced reed flower shoes for winter. The process: gather top-quality reed catkins, twist them evenly into straw rope, and weave them into shoes. The shoes were thick and warm, like cozy bird nests.",
"After autumn harvest, Bronze’s family decided: this winter, the whole family would weave a hundred pairs of reed flower shoes for Bronze to sell at Youmadi town.",
"Bronze’s whole family, old and young alike, devoted every spare moment to weaving reed flower shoes. They wove one hundred and one pairs. The one hundred and first pair was made for Bronze.",
"It had snowed heavily all night, and the snow was a full foot deep. Grandma said to Bronze: ‘Don’t go to town to sell shoes today.’ But Bronze insisted that he absolutely had to go to town today.",
"When he arrived at the town, the streets were nearly deserted; only heavy snow kept falling ceaselessly on the empty street. A group of city people walking past the reed flower shoes stopped in their tracks. The ten pairs of shoes, gleaming against the snow, instantly captivated them. They came forward one by one and stroked the shoes with their hands. There were nine people in all, and each took a pair of reed flower shoes; all ten pairs were now in their hands.",
"A man chased after him: ‘Do you have any more?’ Bronze shook his head. The man sighed in disappointment. Bronze looked at the sky, at the snow, and then at the reed flower shoes on his own feet.",
"He pulled his right foot out of the shoe, standing in the snow. Then his left foot. He bent down, picked up the shoes, and ran after the man. His bare feet splashed through the snow, sending up sprays of white…",
"(Passage, 108 characters)",
"(Classical Chinese passage, 66 characters)",
"(Classical Chinese passage, 69 characters)",
"(Classical Chinese passage, 30 characters)",
"(Dialogue passage, 91 characters)",
"(Dialogue passage, 38 characters)",
"(Dialogue passage, 19 characters)",
"(Classical Chinese passage, 61 characters)",
"(Classical Chinese passage, 53 characters)",
"(Dialogue passage, 53 characters)",
"(Dialogue passage, 58 characters)",
"(Classical Chinese passage, 47 characters)",
"(Passage, 112 characters)",
"(Narrative passage, 202 characters)",
"(Dialogue passage, 50 characters)",
"(Passage, 162 characters)",
"(Classical Chinese passage, 24 characters)",
"(Dialogue passage, 147 characters)",
"(Paragraph 26)",
"(Paragraph 27)",
"(Passage, 88 characters)",
"(Paragraph 29)",
"(Classical Chinese passage, 48 characters)",
"(Passage, 100 characters)",
"(Short passage, 20 characters)"
],
      textPinyin: [
"zhè lǐ chū chǎn yì zhǒng dōng tiān chuān de lú huā xié。 nà xié de zhì zuò gōng xù shì： xiān jiāng shàng děng de lú huā cǎi huí lái， rán hòu jiāng tā men jūn yún dì cuō jìn cǎo shéng lǐ， zài biān zhī chéng xié。 nà xié hěn hòu shí， xiàng nuǎn huo hé de niǎo wō。",
"shōu bà qiū zhuāng jia， qīng tóng jiā jiù yǐ jué dìng： jīn nián dōng xián shí， quán jiā rén yì qǐ dòng shǒu， biān zhī yì bǎi shuāng lú huā xié， rán hòu ràng qīng tóng bèi zhe， dào yóu má dì zhèn shàng qù mài。",
"qīng tóng yì jiā， lǎo lǎo shào shǎo， jiāng suǒ yǒu kòng xián dōu yòng zài le lú huā xié de biān zhī shàng。 tā men biān zhī le yì bǎi líng yī shuāng xié。 dì yī bǎi líng yī shuāng shì wèi qīng tóng biān de。",
"tiān xià le yí yè dà xuě， jī xuě zú yǒu yì chǐ hòu。 nǎi nai duì qīng tóng shuō： “ jīn tiān jiù bié qù zhèn shàng mài xié le。 ” dàn qīng tóng què jiān chí zhe jīn tiān yí dìng yào qù zhèn shàng。",
"dào le zhèn shàng yí kàn， jiē shàng jī hū méi yǒu rén， zhǐ yǒu dà xuě bú zhù dì pāo luò zài kōng jì de jiē miàn shàng。 yì háng chéng lǐ rén zǒu guò lú huā xié shí， tíng zhù le。 nà shí shuāng bèi xuě dì yìng zhào zhe de lú huā xié， yí xià xī yǐn zhù le tā men。 tā men yí gè gè zǒu shàng qián lái， yòng shǒu fǔ mō zhe tā men。 yí gòng jiǔ gè rén， dōu ná le lú huā xié， shí shuāng xié dōu zài tā men shǒu zhōng le。",
"yǒu yí gè rén cháo tā zhuī le guò lái： “ nǐ hái yǒu mài de ma？ ” qīng tóng yáo le yáo tóu。 nà rén shī wàng dì yì tān shǒu， bìng tàn xī le yì shēng。 qīng tóng kàn kàn tiān kōng， kàn kàn xuě dì， zuì hòu yòu bǎ mù guāng luò zài le zì jǐ jiǎo shàng de nà shuāng lú huā xié shàng。",
"tā jiāng yòu jiǎo cóng lú huā xié lǐ bá le chū lái， zhàn zài le xuě dì shàng。 tā yòu jiāng zuǒ jiǎo cóng lú huā xié lǐ bá le chū lái。 tā wān xià yāo， jiǎn qǐ le nà shuāng lú huā xié， diào tóu cháo nà ge rén zhuī le guò qù。 tā de chì jiǎo tà guò jī xuě shí， jiàn qǐ le yì péng péng xuě xiè……",
"zhè liǎng shuāng lú huā xié ， shí zài shì tài hǎo kàn le 。 nà róu ruǎn de lú huā ， jìng xiàng shì cháng zài shàng miàn de yì bān 。 bèi fēng yì chuī ， nà huā dōu wǎng yí gè fāng xiàng qīng fù ér qù ， lù chū jīn huáng de dào cǎo lái 。 ràng rén xiǎng dào luò zài shù shàng de niǎo ， fēng chuī qǐ shí ， xì ruǎn de róng máo bèi chuī kāi ， lù chū shēn zi lái 。 liǎng shuāng xié ， jì xiàng sì zhī niǎo wō ， yòu xiàng liǎng duì niǎo 。",
"qīng tóng yì jiā ， lǎo lǎo shào shǎo ， jiāng suǒ yǒu kòng xián dōu yòng zài le lú huā xié de biān zhī shàng 。 tā men biān zhī le yì bǎi líng yī shuāng xié 。 dì yì bǎi líng yī shuāng shì wèi qīng tóng biān de 。 qīng tóng yě yīng gāi yǒu yì shuāng xīn de lú huā xié 。",
"jiē xià lái de rì zi lǐ ， qīng tóng tiān tiān bèi zhe jǐ shí shuāng lú huā xié dào yóu má dì zhèn shàng qù mài 。 nà xiē lú huā xié shí zài tài zhāo rén xǐ huan le ， yì shuāng yi shuāng dì mài le chū qù ， jǐn jǐn guò le sān tiān ， jiù zhī shèng xià shí yī shuāng le 。",
"tiān xià le yí yè dà xuě ， jī xuě zú yǒu yì chǐ hòu ， zǎo chén mén dōu hěn nán tuī kāi 。 xuě hái zài xià 。",
"nǎi nai duì qīng tóng shuō ： “ jīn tiān jiù bié qù zhèn shàng mài xié le 。 ” bà ba mā ma yě dōu duì qīng tóng shuō ： “ shèng xià de shí yī shuāng ， yì shuāng shì gěi nǐ de ， hái yǒu shí shuāng ， mài dé le jiù mài ， mài bù liǎo jiù liú zhe zì jiā rén chuān ， ” kuí huā yě yí gè jìn dì shuō ： “ gē ， jīn tiān jiù bié qù mài xié le ， ”",
"dàn qīng tóng què jiān chí zhe jīn tiān yí dìng yào qù zhèn shàng 。 tā duì nǎi nai tā men shuō ： “ jīn tiān tiān lěng ， gèng huì yǒu rén mǎi xié de ”",
"mā ma shuō ： “ nà nǐ xuǎn yì shuāng chuān shàng ， bù rán jiù bié qù le",
"qīng tóng tóng yì le   tā tiāo le yì shuāng shì hé tā de lú huā xié ， jiāng jiǎo xǐ dé gān gān jìng jìng ， chuān shàng le   rán hòu ná qǐ yú xià de shí shuāng lú huā xié ， cháo dà rén men yáo yáo shǒu ， biàn pǎo jìn le fēng xuě lǐ 。",
"dào le zhèn shàng yí kàn ， jiē shàng jī hū méi yǒu rén ， zhǐ yǒu dà xuě bú zhù dì pāo luò zài kōng jì de jiē miàn shàng bù yí huì er ， guà zài shéng zi shàng de shí shuāng lú huā xié jiù luò mǎn le xuě 。",
"duì miàn wū zi lǐ wéi lú kǎo huǒ de rén zhāo hū qīng tóng ： “ jìn wū lǐ lái ba ， zhè lǐ néng kàn dào nǐ de xié ， diū bù liǎo 。 ” qīng tóng yáo le yáo shǒu ， jiān chí shǒu zài lú huā xié páng 。",
"dào le zhōng wǔ ， xuě dà le qǐ lái ， chéng tuán chéng tuán dì wǎng xià pāo luò wàng zhe màn tiān dà xuě ， qīng tóng zài xīn lǐ bú zhù dì shuō zhe ： “ mǎi xié de ， kuài lái ba ！ mǎi xié de ， kuài lái ba ！ … … ”",
"xuě zài tā de qí qiú shēng zhōng ， jiàn jiàn tíng le qīng tóng jiāng lú huā xié yì shuāng shuāng qǔ xià ， bǎ luò zài shàng miàn de jī xuě pū dǎ gān jìng hòu ， zhòng yòu guà dào shéng zi shàng 。",
"zhè shí ， jiē shàng zǒu lái yì háng lù guò zhè lǐ de chéng lǐ rén ， mǎ shàng yào guò nián le ， tā men yào cóng zhè lǐ zuò lún chuán huí chéng lǐ qù 。 tā men huò bèi zhe bāo ， huò tí zhe bāo ， yí lù shuō xiào zhe ， yí lù qì zhī gē zhī dì cǎi zhe xuě zǒu guò lái 。 qīng tóng méi yǒu zhāo hū tā men 。 yīn wèi tā rèn wéi ， chéng lǐ rén shì bú huì mǎi tā de lú huā xié de ， tā men zhī chuān bù mián xié hé pí mián xié 。",
"dàn tā men zǒu guò lú huā xié shí ， què yǒu jǐ gè rén tíng zhù le 。 qí yú de jiàn zhè jǐ gè rén tíng zhù le ， yě dōu tíng zhù le 。 nà shí shuāng bèi léi dì yìng zhào zhe de lú huā xié ， yí xià xī yǐn zhù le tā men 。 qí zhòng kěn dìng yǒu yì liǎng gè shì gǎo yì shù de ， kàn zhe zhè xiē xié ， zuǐ lǐ fēn zé zé dì gǎn tàn bù yǐ 。 tā men wàng jì le tā men de yòng tú ， zhǐ shì jué dé tā men hǎo kàn — — bú shì yì bān de hǎo kàn ， ér shì tè bié de hǎo kàn 。 tā men yí gè gè zǒu shàng qián lái ， yòng shǒu suō mō zhe tā men — — zhè yì fǔ mō ， shǐ tā men duì zhè xiē xié gèng jiā xǐ huan 。 hái yǒu jǐ gè rén jiāng tā men ná dào bí zi dǐ xià wén le wén ， yì gǔ dào cǎo xiāng ， zài zhè qīng xīn de kōng qì lǐ ， gé wài fēn míng 。",
"yí gè rén shuō ： “ mǎi yì shuāng huí qù guà zài qiáng shàng ， dǎo bú cuò 。 ” hǎo jǐ gè rén diǎn tóu ， bìng gè zì qǔ le yì shuāng ， wéi kǒng xià shǒu wǎn le ， bèi bié rén ná le qù 。",
"yí gòng jiǔ gè rén ， dōu ná le lú huā xié ， qí zhōng yí gè rén ná le liǎng shuāng ， shí shuāng xié dōu zài tā men shǒu zhōng le 。 jiē xià lái jiù shì tán jià qián 。 qīng tóng yì zhí yí huò zhe ， zhí dào rén jiā yí gè jìn dì wèn tā duō shǎo qián yì shuāng ， tā cái xiāng xìn tā men zhēn de yào mǎi zhè xiē xié 。 tā méi yǒu yīn wèi tā men de yǎn shén lǐ shǎn xiàn chū lái de nà fèn xīn xǐ ér zhǎng jià ， hái shì bào le tā běn lái xiǎng zòu de jià 。 tā men dōu jué de pián yi ， èr huà méi shuō ， jiù fù le qián 。 qīng tóng zhuā zhe yí dà bǎ qián ， zhàn zài xuě dì shàng ， yì shí jìng yǒu diǎn er fǎn yìng bú guò lái 。",
"tiān jīng le ， sì zhōu yī piàn míng liàng 。 qīng tóng yán zhe lái shí de lù wǎng huí zǒu zhe 。",
"yǒu yí gè rén cháo tā zhuī le guò lái ， bìng zài tā shēn hòu dà shēng hǎn zhe ： “ hái zǐ ， nǐ tíng yi tíng ！ ” qīng tóng tíng xià le ， zhuǎn guò shēn qù ， yí huò dì wàng zhe xiàng tā pǎo guò lái de rén 。 nà rén pǎo dào qīng tóng gēn qián ， shuō ： “ wǒ kàn dào tā men mǎi de lú huā xié le ， xīn lǐ hǎo xǐ huan ， nǐ hái yǒu mài de ma ？ ” qīng tóng yáo le yáo tóu ， xīn lǐ hěn wèi nà rén gǎn dào yí hū 。 nà rén shī wàng dì yì tān shǒu ， bìng tàn xī le yì shēng 。 qīng tóng wàng zhe nà ge rén ， xīn lǐ jué de yǒu diǎn er duì bú zhù tā 。",
"nà rén diào tóu cháo lún chuán mǎ tóu zǒu qù 。",
"qīng tóng diào tóu wǎng jiā zǒu qù 。",
"zǒu zhe zǒu zhe ， qīng tóng fàng màn le jiǎo bù 。 tā de mù guāng luò zài le zì jǐ jiǎo shàng de nà shuāng lú huā xié shàng 。 xuě zài lú huā xié xià gē zhī gē zhī dì xiǎng zhe 。 tā yuè zǒu yuè màn ， hòu lái tíng xià le 。 tā kàn kàn tiān kōng ， kàn kàn xuě dì ， zuì hòu yòu bǎ mù guāng luò zài le zì jǐ jiǎo shàng de lú huā xié shàng 。",
"tā jué de shuāng jiǎo nuǎn huo hé de 。",
"dàn guò le yí huì er ， tā jiāng yòu jiǎo cóng lú huā xié lǐ bá le chū lái ， zhàn zài le xuě dì shàng 。 tā de jiǎo bǎn dùn shí gǎn dào le yì gǔ zhēn cì bān de hán lěng 。 tā yòu",
"jiāng zuǒ jiǎo cóng lú huā xié lǐ bá le chū lái ， zhàn zài le xuě dì shàng 。 yòu shì yì gǔ cì gǔ de hán lěng 。 tā wān xià yāo ， jiǎn qǐ le nà shuāng lú huā xié ， fàng dào yǎn qián kàn zhe 。 yīn wèi yí lù shang dōu shì xuě ， nà shuāng xié jìng rán méi yǒu yì sī wū jì ， kàn shàng qù ， wán quán shì yì shuāng xīn xié 。 tā xiào le xiào ， diào tóu cháo nà ge rén zhuī le guò qù 。",
"tā de chì jiǎo tà guò jī xuě shí ， jiàn qǐ le yì péng péng xuě xiè … …"
],
      recognizeChars: ["搓","葵","祈","遗","憾","污","屑"],
      writeChars: [],
      vocabWords: [
        {word:'芦花',pinyin:'lú huā',en:'reed catkins',sentence:'青铜编芦花鞋。',sentenceEn:'Qingtong weaves reed-catkin shoes.'},
        {word:'编织',pinyin:'biān zhī',en:'weave',sentence:'他学会了编织芦花鞋。',sentenceEn:'He learned to weave reed-catkin shoes.'},
        {word:'冰天雪地',pinyin:'bīng tiān xuě dì',en:'icy and snowy',sentence:'冰天雪地里卖鞋。',sentenceEn:'Selling shoes in the freezing snow.'},
        {word:'脱下',pinyin:'tuō xià',en:'take off',sentence:'青铜脱下自己的鞋。',sentenceEn:'Qingtong took off his own shoes.'},
        {word:'赤脚',pinyin:'chì jiǎo',en:'barefoot',sentence:'他赤脚站在雪地里。',sentenceEn:'He stood barefoot in the snow.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u8fd9\u91cc\u51fa\u4ea7\u4e00\u79cd\u51ac\u5929\u7a7f\u7684\u82a6\u82b1\u978b\u3002", exampleEn: "The area produced reed flower shoes for winter. The process: gather top-quality ", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u5148\u2026\u2026\u518d\u2026\u2026", pointEn: "first...then...", example: "\u8fd9\u91cc\u51fa\u4ea7\u4e00\u79cd\u51ac\u5929\u7a7f\u7684\u82a6\u82b1\u978b\u3002", exampleEn: "The area produced reed flower shoes for winter. The process: gather top-quality ", explanation: "\u8868\u793a\u52a8\u4f5c\u7684\u5148\u540e\u987a\u5e8f", explanationEn: "Indicates sequential order of actions"}
      ],
      footnotes: [
        {term:"\u82a6\u82b1", termEn:"reed catkins", definition:"\u3010l\u00fa hu\u0101\u3011reed catkins\u3002", definitionEn:"reed catkins"},
        {term:"\u7f16\u7ec7", termEn:"weave", definition:"\u3010bi\u0101n zh\u012b\u3011weave\u3002", definitionEn:"weave"},
        {term:"\u51b0\u5929\u96ea\u5730", termEn:"icy and snowy", definition:"\u3010b\u012bng ti\u0101n xu\u011b d\u00ec\u3011icy and snowy\u3002", definitionEn:"icy and snowy"},
        {term:"\u8131\u4e0b", termEn:"take off", definition:"\u3010tu\u014d xi\u00e0\u3011take off\u3002", definitionEn:"take off"},
        {term:"\u8d64\u811a", termEn:"barefoot", definition:"\u3010ch\u00ec ji\u01ceo\u3011barefoot\u3002", definitionEn:"barefoot"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"默读课文，为每个部分列出小标题，再和同学交流印象最深的内容",en:"Read silently, create subtitles for each part, and discuss the most memorable content"},
        {type:"think",cn:"体会青铜把自己脚上的芦花鞋脱给别人这个细节，感受人物的善良品质",en:"Reflect on the detail of Bronze removing his own shoes and appreciate his kind nature"}
      ],
      teachingPoints: [
        {cn:"学习把握长文章主要内容的方法：为每部分列小标题",en:"Learn to summarize long texts by creating subtitles for each section"},
        {cn:"从细节中感受青铜善良、纯朴的品质",en:"Appreciate Bronze\u2019s kind and simple nature through details"}
      ],
      parentTips: [
        {cn:"推荐孩子阅读曹文轩的《青铜葵花》全本，体会苦难中的温情",en:"Recommend reading the full novel 'Bronze and Sunflower' by Cao Wenxuan for warmth amid hardship"},
        {cn:"和孩子讨论青铜脱鞋的举动，谈谈善良和分享的意义",en:"Discuss Bronze\u2019s act of giving up his shoes and talk about the meaning of kindness and sharing"}
      ]
    }
  ],
  oralComm: {title:"朋友相处的秘诀",titleEn:"Secrets of Getting Along with Friends",prompt:{cn:"和朋友相处，最重要的是什么？分小组讨论，至少提出三条大家认为最重要的意见。",en:"What is most important in friendship? Discuss in small groups and propose at least three key ideas."}},
  garden: {
    accumulation: {title:"日积月累",titleEn:"Daily Accumulation",content:{cn:"独坐敬亭山（唐·李白）：众鸟高飞尽，孤云独去闲。相看两不厌，只有敬亭山。",en:"Sitting Alone at Jingting Mountain (Tang, Li Bai): All birds have flown away; a lone cloud drifts at ease. We gaze at each other, never tiring \u2014 only Jingting Mountain and me."}},
    wordSentence: {title:"词句段运用",titleEn:"Words, Sentences & Paragraphs",content:{cn:"了解与古人读书求学有关的成语（囊萤夜读、悬梁刺股、凿壁偷光、铁杵成针、程门立雪、手不释卷）；体会比喻句的不同感情色彩。",en:"Learn idioms about ancient scholars\u2019 dedication; appreciate different emotional tones in similes."}},
    composition: {title:"习作：我学会了____",titleEn:"Composition: I Learned to ____",prompt:{cn:"你学会的哪件事情让你最有成就感？把学做这件事的经历、体会写下来。",en:"Which skill gave you the greatest sense of achievement? Write about the experience and what you learned."}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 7 — 人物品质 Character (Lessons 22-25) */
/* ═══════════════════════════════════════════ */
{
  id: 7, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 22, title: "古诗三首", titleEn: "Three Ancient Poems",
      difficulty: 3,
      text: [
        "芙蓉楼送辛渐\n[唐] 王昌龄\n寒雨连江夜入吴，\n平明送客楚山孤。\n洛阳亲友如相问，\n一片冰心在玉壶。",
        "塞下曲\n[唐] 卢纶\n月黑雁飞高，\n单于夜遁逃。\n欲将轻骑逐，\n大雪满弓刀。",
        "墨梅\n[元] 王冕\n我家洗砚池头树，\n朵朵花开淡墨痕。\n不要人夸好颜色，\n只留清气满乾坤。"
      ],
      textEn: [
        "Seeing Off Xin Jian at Furong Tower\n[Tang] Wang Changling\nCold rain joined the river, entering Wu by night;\nAt dawn I saw the guest off \u2014 the Chu mountains stood alone.\nIf friends in Luoyang ask about me,\ntell them: a heart pure as ice in a jade vase.",
        "Frontier Song\n[Tang] Lu Lun\nA moonless night, wild geese fly high;\nthe Chanyu flees under cover of darkness.\nWe\u2019d pursue with light cavalry,\nbut heavy snow coats our bows and blades.",
        "Ink Plum Blossoms\n[Yuan] Wang Mian\nBy my home\u2019s inkstone-washing pool stands a tree;\nevery blossom opens with a faint ink stain.\nIt needs no one to praise its fine color \u2014\nit leaves only pure fragrance filling heaven and earth."
      ],
      textPinyin: [
        "f\u00fa r\u00f3ng l\u00f3u s\u00f2ng x\u012bn ji\u00e0n\n [ t\u00e1ng ]   w\u00e1ng ch\u0101ng l\u00edng\n h\u00e1n y\u01d4 li\u00e1n ji\u0101ng y\u00e8 r\u00f9 w\u00fa\uff0c\n p\u00edng m\u00edng s\u00f2ng k\u00e8 ch\u01d4 sh\u0101n g\u016b\u3002\n lu\u00f2 y\u00e1ng q\u012bn y\u01d2u r\u00fa xi\u0101ng w\u00e8n\uff0c\n y\u00ed pi\u00e0n b\u012bng x\u012bn z\u00e0i y\u00f9 h\u00fa\u3002",
        "s\u0101i xi\u00e0 q\u01d4\n [ t\u00e1ng ]   l\u00fa l\u00fan\n yu\u00e8 h\u0113i y\u00e0n f\u0113i g\u0101o\uff0c\n ch\u00e1n y\u00fa y\u00e8 d\u00f9n t\u00e1o\u3002\n y\u00f9 ji\u0101ng q\u012bng q\u00ed zh\u00fa\uff0c\n d\u00e0 xu\u011b m\u01cen g\u014dng d\u0101o\u3002",
        "m\u00f2 m\u00e9i\n [ yu\u00e1n ]   w\u00e1ng mi\u01cen\n w\u01d2 ji\u0101 x\u01d0 y\u00e0n ch\u00ed t\u00f3u sh\u00f9\uff0c\n du\u01d2 du\u01d2 hu\u0101 k\u0101i d\u00e0n m\u00f2 h\u00e9n\u3002\n b\u00fa y\u00e0o r\u00e9n ku\u0101 h\u01ceo y\u00e1n s\u00e8\uff0c\n zh\u012b li\u00fa q\u012bng q\u00ec m\u01cen qi\u00e1n k\u016bn\u3002"
      ],
      recognizeChars: ["芙","蓉","洛","单","砚","乾","坤"],
      writeChars: ["芙","蓉","洛","壶","雁","砚","乾","坤"],
      vocabWords: [
        {word:'芙蓉',pinyin:'fú róng',en:'hibiscus',sentence:'芙蓉楼送辛渐。',sentenceEn:'Farewell at Hibiscus Tower.'},
        {word:'塞下',pinyin:'sài xià',en:'border',sentence:'塞下曲。',sentenceEn:'Song of the Frontier.'},
        {word:'墨梅',pinyin:'mò méi',en:'ink plum blossom',sentence:'不要人夸好颜色。',sentenceEn:'I do not seek praise for my color.'},
        {word:'清气',pinyin:'qīng qì',en:'pure fragrance',sentence:'只留清气满乾坤。',sentenceEn:'Only leaving pure fragrance to fill the world.'},
        {word:'将军',pinyin:'jiāng jūn',en:'general',sentence:'将军夜引弓。',sentenceEn:'The general draws his bow at night.'}
      ],
      grammarPoints: [
        {point: "\u603b\u5206\u7ed3\u6784", pointEn: "General-specific structure", example: "\u5e73\u660e\u9001\u5ba2\u695a\u5c71\u5b64\u3002", exampleEn: "Seeing Off Xin Jian at Furong Tower\n[Tang] Wang Changling\nCold rain joined the r", explanation: "\u5148\u603b\u8ff0\u518d\u5206\u8ff0\uff0c\u6216\u5148\u5206\u8ff0\u518d\u603b\u7ed3\uff0c\u4f7f\u6587\u7ae0\u6761\u7406\u6e05\u6670", explanationEn: "Start with overview then details, or vice versa, for clear organization"}
      ],
      footnotes: [
        {term:"\u8299\u84c9", termEn:"hibiscus", definition:"\u3010f\u00fa r\u00f3ng\u3011hibiscus\u3002", definitionEn:"hibiscus"},
        {term:"\u585e\u4e0b", termEn:"border", definition:"\u3010s\u00e0i xi\u00e0\u3011border\u3002", definitionEn:"border"},
        {term:"\u58a8\u6885", termEn:"ink plum blossom", definition:"\u3010m\u00f2 m\u00e9i\u3011ink plum blossom\u3002", definitionEn:"ink plum blossom"},
        {term:"\u6e05\u6c14", termEn:"pure fragrance", definition:"\u3010q\u012bng q\u00ec\u3011pure fragrance\u3002", definitionEn:"pure fragrance"},
        {term:"\u5c06\u519b", termEn:"general", definition:"\u3010ji\u0101ng j\u016bn\u3011general\u3002", definitionEn:"general"}
      ],
      readingTips: [
        {cn:"\u6709\u611f\u60c5\u5730\u6717\u8bfb\u53e4\u8bd7\uff0c\u6ce8\u610f\u505c\u987f\u548c\u91cd\u97f3\u3002\u60f3\u8c61\u8bd7\u53e5\u63cf\u7ed8\u7684\u753b\u9762\uff0c\u4f53\u4f1a\u8bd7\u4eba\u7684\u60c5\u611f\u3002", en:"Read the poem aloud with feeling, noting pauses and emphasis. Visualize the scenes described and feel the poet's emotions."},
        {cn:"\u627e\u51fa\u8bd7\u4e2d\u7684\u5173\u952e\u610f\u8c61\uff08\u5982\u5c71\u3001\u6c34\u3001\u6708\u3001\u82b1\u7b49\uff09\uff0c\u60f3\u60f3\u5b83\u4eec\u8868\u8fbe\u4e86\u4ec0\u4e48\u611f\u60c5\u3002", en:"Identify key imagery (like mountains, water, moon, flowers) and think about what emotions they convey."}
      ],
      exercises: [
        {type:"read",cn:"有感情地朗读课文。背诵课文。默写《芙蓉楼送辛渐》",en:"Read with feeling, recite from memory, and write \u2018Seeing Off Xin Jian\u2019 from memory"},
        {type:"discuss",cn:"说说下面诗句的意思，再想想这些诗句表现了怎样的精神品格",en:"Explain the meaning of the following lines and what character traits they reveal"},
        {type:"think",cn:"体会\u201C一片冰心在玉壶\u201D\u201C只留清气满乾坤\u201D所表达的高洁品格",en:"Appreciate the noble character expressed in \u2018a heart of ice in a jade vase\u2019 and \u2018pure fragrance filling heaven and earth\u2019"}
      ],
      teachingPoints: [
        {cn:"理解三首诗分别表现的精神品格：冰清玉洁、英勇无畏、清高自守",en:"Understand the character traits each poem embodies: purity, bravery, and noble integrity"},
        {cn:"学习借物喻人的写法（以梅喻己）",en:"Learn the technique of using objects as metaphors for people (plum blossom as self-portrait)"}
      ],
      parentTips: [
        {cn:"和孩子一起背诵这三首古诗，讨论诗人的品格和精神",en:"Recite the three poems together and discuss the poets\u2019 character and spirit"},
        {cn:"引导孩子理解\u201C托物言志\u201D的写法，如王冕借墨梅表达自己的清高",en:"Help your child understand 'expressing ideals through objects,' such as Wang Mian using ink plum blossoms to express integrity"}
      ]
    },
    {
      id: 23, title: "\u201C诺曼底号\u201D遇难记", titleEn: "The Wreck of the Normandie",
      difficulty: 3,
      text: [
        "1870年3月17日夜晚，哈尔威船长照例走着从南安普敦到根西岛这条航线。大海上夜色正浓，烟雾弥漫。船长站在驾驶室里，小心翼翼地驾驶着他的\u201C诺曼底号\u201D。乘客们都进入了梦乡。",
        "\u201C诺曼底号\u201D是一艘大轮船，在英伦海峡也许可以算得上是最漂亮的邮船之一。它装货容量六百吨，船体长二百二十英尺，宽二十五英尺。海员们都说它很\u201C年轻\u201D，因为它才七岁，是1863年造的。",
        "突然，沉沉夜雾中冒出一枚黑点，它好似一个幽灵，又仿佛一座山峰。只见一个阴森森的往前翘起的船头，突破黑暗，在一片浪花中飞驶过来。那是\u201C玛丽号\u201D。全速前进的\u201C玛丽号\u201D向\u201C诺曼底号\u201D的侧舷撞过去，在它的船身上剖开一个大窟窿。",
        "震荡可怕极了。一刹那间，男人、女人、小孩，所有的人都奔到甲板上，人们半裸着身子，奔跑着，尖叫着，哭泣着，惊恐万状，一片混乱。海水哗哗往里灌，汹涌湍急，势不可当。",
        "哈尔威船长站在指挥台上，大声吼喝：\u201C全体安静，注意听命令！把救生艇放下去。妇女先走，其他乘客跟上，船员断后。必须把六十人救出去！\u201D实际上一共有六十一人，但是他把自己给忘了。",
        "就在这时，船长威严的声音压倒了一片呼号和嘈杂，黑暗中人们听到这一段简短有力的对话：\u201C洛克机械师在哪儿？\u201D\u201C船长叫我吗？\u201D\u201C炉子怎么样了？\u201D\u201C海水淹了。\u201D\u201C火呢？\u201D\u201C灭了。\u201D\u201C机器怎样？\u201D\u201C停了。\u201D船长问道：\u201C还有多少分钟？\u201D\u201C二十分钟。\u201D\u201C够了。\u201D",
        "大家立时不出声了。没有一个人违抗他的意志，人们感到有一个伟大的灵魂出现在他们的上空。",
        "救援工作进行得井然有序，几乎没有发生什么争执或殴斗。哈尔威巍然屹立在他的船长岗位上，指挥着，主宰着，领导着大家。他把每件事和每个人都考虑到了，面对惊慌失措的众人，他镇定自若，仿佛他不是给人而是给灾难下达命令，就连失事的船舶似乎也听从他的调遣。",
        "二十分钟到了，轮船沉没了。船头先下去，须臾，海水把船尾也浸没了。哈尔威船长一个手势也没有做，一句话也没有说，犹如铁铸，纹丝不动，随着轮船一起沉入了深渊。人们透过阴惨惨的雾气，凝视着这尊黑色的雕像徐徐沉进大海。",
        "哈尔威船长的生命就这样结束了。在英伦海峡上，没有任何一个海员能与他相提并论。他一生都要求自己忠于职守，履行做人之道。面对死亡，他又践行了一次英雄的壮举。"
      ],
      textEn: [
        "On the evening of March 17, 1870, Captain Halville sailed his regular route from Southampton to Guernsey. The sea was deeply dark, shrouded in fog. He stood in the wheelhouse, carefully piloting the Normandie. Passengers slept.",
        "The Normandie was a large steamship, perhaps one of the handsomest mail steamers on the English Channel. She had a cargo capacity of six hundred tons, was two hundred and twenty feet long, and twenty-five feet wide. Sailors all said she was \u2018young,\u2019 for she was only seven years old, having been built in 1863.",
        "Suddenly, a dark dot appeared out of the thick night fog, looking like a phantom, or perhaps a mountain peak. A sinister bow, jutting upward, burst through the darkness and came flying through a spray of waves. It was the Mary. The Mary, at full speed, rammed into the Normandie\u2019s side, slicing open a gaping hole in her hull.",
        "The jolt was absolutely terrifying. In an instant, men, women, children \u2014 everyone rushed to the deck. Half-clothed, they ran, screamed, wept, panic-stricken, in utter chaos. Seawater came rushing in with a roar, surging and turbulent, impossible to hold back.",
        "Captain Halville stood on the bridge and roared: \u2018Silence! Listen to my orders! Lower the lifeboats. Women first, then passengers, crew last. We must save sixty people!\u2019 In fact there were sixty-one \u2014 he had forgotten himself.",
        "The captain\u2019s commanding voice cut through the cries. In the darkness came a brief, powerful exchange: \u2018Where is engineer Locke?\u2019 \u2018You called, Captain?\u2019 \u2018The boilers?\u2019 \u2018Flooded.\u2019 \u2018The fire?\u2019 \u2018Out.\u2019 \u2018The engines?\u2019 \u2018Stopped.\u2019 \u2018How many minutes?\u2019 \u2018Twenty.\u2019 \u2018Enough.\u2019",
        "Everyone immediately fell silent. Not a single person defied his will; people felt that a great soul had appeared above them.",
        "The rescue proceeded in perfect order with almost no quarrels or fights. Captain Halville stood towering at his post, commanding, directing, leading. He thought of every detail and every person. Facing the panicked crowd, he was calm and composed, as if giving orders not to people but to the disaster itself \u2014 even the sinking ship seemed to obey.",
        "Twenty minutes passed. The ship sank. The bow went first; moments later, the stern was submerged. Captain Halville made no gesture, spoke no word. Like iron cast, motionless, he sank with his ship into the deep. Through the dismal fog, people watched that black statue slowly descend into the sea.",
        "So ended Captain Halville\u2019s life. On the English Channel, no sailor could compare with him. All his life he demanded of himself loyalty to duty and the practice of virtue. Facing death, he performed one final act of heroism."
      ],
      textPinyin: [
        "1 8 7 0 ni\u00e1n 3 yu\u00e8 1 7 r\u00ec y\u00e8 w\u01cen\uff0c h\u0101 \u011br w\u0113i chu\u00e1n ch\u00e1ng zh\u00e0o l\u00ec z\u01d2u zhe c\u00f3ng n\u00e1n \u0101n p\u01d4 d\u016bn d\u00e0o g\u0113n x\u012b d\u01ceo zh\u00e8 ti\u00e1o h\u00e1ng xi\u00e0n\u3002 d\u00e0 h\u01cei sh\u00e0ng y\u00e8 s\u00e8 zh\u00e8ng n\u00f3ng\uff0c y\u0101n w\u00f9 m\u00ed m\u00e0n\u3002 chu\u00e1n ch\u00e1ng zh\u00e0n z\u00e0i ji\u00e0 sh\u01d0 sh\u00ec l\u01d0\uff0c xi\u01ceo x\u012bn y\u00ec y\u00ec d\u00ec ji\u00e0 sh\u01d0 zhe t\u0101 de \u201c nu\u00f2 m\u00e0n d\u01d0 h\u00e0o \u201d\u3002 ch\u00e9ng k\u00e8 men d\u014du j\u00ecn r\u00f9 le m\u00e8ng xi\u0101ng\u3002",
        "\u201c nu\u00f2 m\u00e0n d\u01d0 h\u00e0o \u201d sh\u00ec y\u00ec s\u014du d\u00e0 l\u00fan chu\u00e1n\uff0c z\u00e0i y\u012bng l\u00fan h\u01cei xi\u00e1 y\u011b x\u01d4 k\u011b y\u01d0 su\u00e0n d\u00e9 sh\u00e0ng sh\u00ec zu\u00ec pi\u00e0o liang de y\u00f3u chu\u00e1n zh\u012b y\u012b\u3002 t\u0101 zhu\u0101ng hu\u00f2 r\u00f3ng li\u00e0ng li\u00f9 b\u01cei d\u016bn\uff0c chu\u00e1n t\u01d0 ch\u00e1ng \u00e8r b\u01cei \u00e8r sh\u00ed y\u012bng ch\u01d0\uff0c ku\u0101n \u00e8r sh\u00ed w\u01d4 y\u012bng ch\u01d0\u3002 h\u01cei yu\u00e1n men d\u014du shu\u014d t\u0101 h\u011bn \u201c ni\u00e1n q\u012bng \u201d\uff0c y\u012bn w\u00e8i t\u0101 c\u00e1i q\u012b su\u00ec\uff0c sh\u00ec 1 8 6 3 ni\u00e1n z\u00e0o de\u3002",
        "t\u016b r\u00e1n\uff0c ch\u00e9n ch\u00e9n y\u00e8 w\u00f9 zh\u014dng m\u00e0o ch\u016b y\u00ec m\u00e9i h\u0113i di\u01cen\uff0c t\u0101 h\u01ceo s\u00ec y\u00ed g\u00e8 y\u014du l\u00edng\uff0c y\u00f2u f\u01ceng f\u00fa y\u00ed zu\u00f2 sh\u0101n f\u0113ng\u3002 zh\u01d0 ji\u00e0n y\u00ed g\u00e8 y\u012bn s\u0113n s\u0113n de w\u01ceng qi\u00e1n qi\u00e0o q\u01d0 de chu\u00e1n t\u00f3u\uff0c t\u016b p\u00f2 h\u0113i \u00e0n\uff0c z\u00e0i y\u00ed pi\u00e0n l\u00e0ng hu\u0101 zh\u014dng f\u0113i sh\u01d0 gu\u00f2 l\u00e1i\u3002 n\u00e0 sh\u00ec \u201c m\u01ce l\u00ec h\u00e0o \u201d\u3002 qu\u00e1n s\u00f9 qi\u00e1n j\u00ecn de \u201c m\u01ce l\u00ec h\u00e0o \u201d xi\u00e0ng \u201c nu\u00f2 m\u00e0n d\u01d0 h\u00e0o \u201d de c\u00e8 xi\u00e1n zhu\u00e0ng gu\u00f2 q\u00f9\uff0c z\u00e0i t\u0101 de chu\u00e1n sh\u0113n sh\u00e0ng p\u014du k\u0101i y\u00ed g\u00e8 d\u00e0 k\u016b l\u00f3ng\u3002",
        "zh\u00e8n d\u00e0ng k\u011b p\u00e0 j\u00ed le\u3002 y\u00ed ch\u00e0 n\u00e0 ji\u0101n\uff0c n\u00e1n r\u00e9n\u3001 n\u01da r\u00e9n\u3001 xi\u01ceo h\u00e1i\uff0c su\u01d2 y\u01d2u de r\u00e9n d\u014du b\u0113n d\u00e0o ji\u01ce b\u01cen sh\u00e0ng\uff0c r\u00e9n men b\u00e0n lu\u01d2 zhe sh\u0113n zi\uff0c b\u0113n p\u01ceo zhe\uff0c ji\u0101n ji\u00e0o zhe\uff0c k\u016b q\u00ec zhe\uff0c j\u012bng k\u01d2ng w\u00e0n zhu\u00e0ng\uff0c y\u00ed pi\u00e0n h\u00f9n lu\u00e0n\u3002 h\u01cei shu\u01d0 hu\u0101 hu\u0101 w\u01ceng l\u01d0 gu\u00e0n\uff0c xi\u014dng y\u01d2ng tu\u0101n j\u00ed\uff0c sh\u00ec b\u00f9 k\u011b d\u0101ng\u3002",
        "h\u0101 \u011br w\u0113i chu\u00e1n ch\u00e1ng zh\u00e0n z\u00e0i zh\u01d0 hu\u012b t\u00e1i sh\u00e0ng\uff0c d\u00e0 sh\u0113ng h\u01d2u h\u0113\uff1a \u201c qu\u00e1n t\u01d0 \u0101n j\u00ecng\uff0c zh\u00f9 y\u00ec t\u012bng m\u00ecng l\u00ecng\uff01 b\u01ce ji\u00f9 sh\u0113ng t\u01d0ng f\u00e0ng xi\u00e0 q\u00f9\u3002 f\u00f9 n\u01da xi\u0101n z\u01d2u\uff0c q\u00ed t\u0101 ch\u00e9ng k\u00e8 g\u0113n sh\u00e0ng\uff0c chu\u00e1n yu\u00e1n du\u00e0n h\u00f2u\u3002 b\u00ec x\u016b b\u01ce li\u00f9 sh\u00ed r\u00e9n ji\u00f9 ch\u016b q\u00f9\uff01 \u201d sh\u00ed j\u00ec shang y\u00ed g\u00f2ng y\u01d2u li\u00f9 sh\u00ed y\u012b r\u00e9n\uff0c d\u00e0n sh\u00ec t\u0101 b\u01ce z\u00ec j\u01d0 g\u011bi w\u00e0ng le\u3002",
        "ji\u00f9 z\u00e0i zh\u00e8 sh\u00ed\uff0c chu\u00e1n ch\u00e1ng w\u0113i y\u00e1n de sh\u0113ng y\u012bn y\u0101 d\u01ceo le y\u00ed pi\u00e0n h\u016b h\u00e1o h\u00e9 c\u00e1o z\u00e1\uff0c h\u0113i \u00e0n zh\u014dng r\u00e9n men t\u012bng d\u00e0o zh\u00e8 y\u00ed du\u00e0n ji\u01cen du\u01cen y\u01d2u l\u00ec de du\u00ec hu\u00e0\uff1a \u201c lu\u00f2 k\u00e8 j\u012b xi\u00e8 sh\u012b z\u00e0i n\u01ce \u00e9r\uff1f \u201d \u201c chu\u00e1n ch\u00e1ng ji\u00e0o w\u01d2 ma\uff1f \u201d \u201c l\u00fa z\u01d0 z\u011bn me y\u00e0ng le\uff1f \u201d \u201c h\u01cei shu\u01d0 y\u0101n le\u3002 \u201d \u201c hu\u01d2 ne\uff1f \u201d \u201c mi\u00e8 le\u3002 \u201d \u201c j\u012b q\u00ec z\u011bn y\u00e0ng\uff1f \u201d \u201c t\u00edng le\u3002 \u201d chu\u00e1n ch\u00e1ng w\u00e8n d\u00e0o\uff1a \u201c h\u00e1i y\u01d2u du\u014d sh\u01ceo f\u0113n zh\u014dng\uff1f \u201d \u201c \u00e8r sh\u00ed f\u0113n zh\u014dng\u3002 \u201d \u201c g\u00f2u le\u3002 \u201d",
        "d\u00e0 ji\u0101 l\u00ec sh\u00ed b\u00f9 ch\u016b sh\u0113ng le\u3002 m\u00e9i y\u01d2u y\u00ed g\u00e8 r\u00e9n w\u00e9i k\u00e0ng t\u0101 de y\u00ec zh\u00ec\uff0c r\u00e9n men g\u01cen d\u00e0o y\u01d2u y\u00ed g\u00e8 w\u011bi d\u00e0 de l\u00edng h\u00fan ch\u016b xi\u00e0n z\u00e0i t\u0101 men de sh\u00e0ng k\u014dng\u3002",
        "ji\u00f9 yu\u00e1n g\u014dng zu\u00f2 j\u00ecn x\u00edng d\u00e9 j\u01d0ng r\u00e1n y\u01d2u x\u00f9\uff0c j\u012b h\u016b m\u00e9i y\u01d2u f\u0101 sh\u0113ng sh\u00e9n me zh\u0113ng zh\u00ed hu\u00f2 \u014du d\u00f2u\u3002 h\u0101 \u011br w\u0113i w\u0113i r\u00e1n y\u00ec l\u00ec z\u00e0i t\u0101 de chu\u00e1n ch\u00e1ng g\u01ceng w\u00e8i sh\u00e0ng\uff0c zh\u01d0 hu\u012b zhe\uff0c zh\u01d4 z\u01cei zhe\uff0c l\u01d0ng d\u01ceo zhe d\u00e0 ji\u0101\u3002 t\u0101 b\u01ce m\u011bi ji\u00e0n sh\u00ec h\u00e9 m\u011bi g\u00e8 r\u00e9n d\u014du k\u01ceo l\u01dc d\u00e0o le\uff0c mi\u00e0n du\u00ec j\u012bng hu\u0101ng sh\u012b cu\u00f2 de zh\u00f2ng r\u00e9n\uff0c t\u0101 zh\u00e8n d\u00ecng z\u00ec ru\u00f2\uff0c f\u01ceng f\u00fa t\u0101 b\u00fa sh\u00ec g\u011bi r\u00e9n \u00e9r sh\u00ec g\u011bi z\u0101i n\u00e0n xi\u00e0 d\u00e1 m\u00ecng l\u00ecng\uff0c ji\u00f9 li\u00e1n sh\u012b sh\u00ec de chu\u00e1n b\u00f3 s\u00ec h\u016b y\u011b t\u012bng c\u00f3ng t\u0101 de di\u00e0o qi\u01cen\u3002",
        "\u00e8r sh\u00ed f\u0113n zh\u014dng d\u00e0o le\uff0c l\u00fan chu\u00e1n ch\u00e9n m\u00e9i le\u3002 chu\u00e1n t\u00f3u xi\u0101n xi\u00e0 q\u00f9\uff0c x\u016b y\u00fa\uff0c h\u01cei shu\u01d0 b\u01ce chu\u00e1n w\u011bi y\u011b j\u00ecn m\u00f2 le\u3002 h\u0101 \u011br w\u0113i chu\u00e1n ch\u00e1ng y\u00ed g\u00e8 sh\u01d2u sh\u00ec y\u011b m\u00e9i y\u01d2u zu\u00f2\uff0c y\u00ed j\u00f9 hu\u00e0 y\u011b m\u00e9i y\u01d2u shu\u014d\uff0c y\u00f3u r\u00fa ti\u011b zh\u00f9\uff0c w\u00e9n s\u012b b\u00fa d\u00f2ng\uff0c su\u00ed zhe l\u00fan chu\u00e1n y\u00ec q\u01d0 ch\u00e9n r\u00f9 le sh\u0113n yu\u0101n\u3002 r\u00e9n men t\u00f2u gu\u00f2 y\u012bn c\u01cen c\u01cen de w\u00f9 q\u00ec\uff0c n\u00edng sh\u00ec zhe zh\u00e8 z\u016bn h\u0113i s\u00e8 de di\u0101o xi\u00e0ng x\u00fa x\u00fa ch\u00e9n j\u00ecn d\u00e0 h\u01cei\u3002",
        "h\u0101 \u011br w\u0113i chu\u00e1n ch\u00e1ng de sh\u0113ng m\u00ecng ji\u00f9 zh\u00e8 y\u00e0ng ji\u00e9 sh\u00f9 le\u3002 z\u00e0i y\u012bng l\u00fan h\u01cei xi\u00e1 sh\u00e0ng\uff0c m\u00e9i y\u01d2u r\u00e8n h\u00e9 y\u00ed g\u00e8 h\u01cei yu\u00e1n n\u00e9ng y\u01d4 t\u0101 xi\u0101ng t\u00ed b\u00ecng l\u00f9n\u3002 t\u0101 y\u00ec sh\u0113ng d\u014du y\u0101o qi\u00fa z\u00ec j\u01d0 zh\u014dng y\u00fa zh\u00ed sh\u01d2u\uff0c l\u01da x\u00edng zu\u00f2 r\u00e9n zh\u012b d\u00e0o\u3002 mi\u00e0n du\u00ec s\u01d0 w\u00e1ng\uff0c t\u0101 y\u00f2u ji\u00e0n x\u00edng le y\u00ed c\u00ec y\u012bng xi\u00f3ng de zhu\u00e0ng j\u01d4\u3002"
      ],
      recognizeChars: ["弥","脉","葬","剖","裸","泣","汹","维","酣","械","岗","宰","遣"],
      writeChars: ["伦","腹","剖","窟","窿","混","嘶","维","秩","岗","宰","措","遣","践"],
      vocabWords: [
        {word:'船长',pinyin:'chuán zhǎng',en:'captain',sentence:'哈尔威船长。',sentenceEn:'Captain Halville.'},
        {word:'沉着',pinyin:'chén zhuó',en:'calm',sentence:'船长沉着指挥。',sentenceEn:'The captain commanded calmly.'},
        {word:'救援',pinyin:'jiù yuán',en:'rescue',sentence:'组织救援工作。',sentenceEn:'Organized rescue efforts.'},
        {word:'秩序',pinyin:'zhì xù',en:'order',sentence:'维持秩序。',sentenceEn:'Maintain order.'},
        {word:'英雄',pinyin:'yīng xióng',en:'hero',sentence:'船长是真正的英雄。',sentenceEn:'The captain was a true hero.'}
      ],
      grammarPoints: [
        {point: "\u56e0\u679c\u5173\u7cfb", pointEn: "Cause and effect", example: "1870\u5e743\u670817\u65e5\u591c\u665a\uff0c\u54c8\u5c14\u5a01\u8239\u957f\u7167\u4f8b\u8d70\u7740\u4ece\u5357\u5b89\u666e\u6566\u5230\u6839\u897f\u5c9b\u8fd9\u6761\u822a\u7ebf\u3002", exampleEn: "On the evening of March 17, 1870, Captain Halville sailed his regular route from", explanation: "\u201c\u56e0\u4e3a\u2026\u6240\u4ee5\u2026\u201d\u8868\u793a\u539f\u56e0\u548c\u7ed3\u679c", explanationEn: "Express cause and effect with \"because...therefore...\""},
        {point: "\u603b\u5206\u7ed3\u6784", pointEn: "General-specific structure", example: "1870\u5e743\u670817\u65e5\u591c\u665a\uff0c\u54c8\u5c14\u5a01\u8239\u957f\u7167\u4f8b\u8d70\u7740\u4ece\u5357\u5b89\u666e\u6566\u5230\u6839\u897f\u5c9b\u8fd9\u6761\u822a\u7ebf\u3002", exampleEn: "On the evening of March 17, 1870, Captain Halville sailed his regular route from", explanation: "\u5148\u603b\u8ff0\u518d\u5206\u8ff0\uff0c\u4f7f\u6587\u7ae0\u6761\u7406\u6e05\u6670", explanationEn: "Start with overview then details for clear organization"}
      ],
      footnotes: [
        {term:"\u8239\u957f", termEn:"captain", definition:"\u3010chu\u00e1n zh\u01ceng\u3011captain\u3002", definitionEn:"captain"},
        {term:"\u6c89\u7740", termEn:"calm", definition:"\u3010ch\u00e9n zhu\u00f3\u3011calm\u3002", definitionEn:"calm"},
        {term:"\u6551\u63f4", termEn:"rescue", definition:"\u3010ji\u00f9 yu\u00e1n\u3011rescue\u3002", definitionEn:"rescue"},
        {term:"\u79e9\u5e8f", termEn:"order", definition:"\u3010zh\u00ec x\u00f9\u3011order\u3002", definitionEn:"order"},
        {term:"\u82f1\u96c4", termEn:"hero", definition:"\u3010y\u012bng xi\u00f3ng\u3011hero\u3002", definitionEn:"hero"}
      ],
      readingTips: [
        {cn:"\u8fd9\u7bc7\u6587\u7ae0\u8f83\u957f\uff0c\u5efa\u8bae\u5206\u6bb5\u9605\u8bfb\u3002\u6bcf\u8bfb\u5b8c\u4e00\u6bb5\uff0c\u505c\u4e0b\u6765\u60f3\u60f3\u8fd9\u6bb5\u7684\u4e3b\u8981\u5185\u5bb9\u3002", en:"This is a longer text. Read it paragraph by paragraph, pausing after each to think about the main idea."},
        {cn:"\u8bfb\u5b8c\u5168\u6587\u540e\uff0c\u8bd5\u7740\u7528\u4e00\u53e5\u8bdd\u6982\u62ec\u6587\u7ae0\u7684\u4e2d\u5fc3\u601d\u60f3\u3002", en:"After reading the whole text, try to summarize the central idea in one sentence."}
      ],
      exercises: [
        {type:"read",cn:"朗读课文，读好人物的对话",en:"Read aloud, paying attention to the characters\u2019 dialogue"},
        {type:"discuss",cn:"\u201C诺曼底号\u201D遇难时，哈尔威船长是怎么做的？你从中感受到他怎样的品质？",en:"What did Captain Halville do when the Normandie was in peril? What qualities do you see?"},
        {type:"think",cn:"哈尔威船长的英雄壮举，让你对生命有了怎样的体会？",en:"What does Captain Halville\u2019s heroism make you feel about the value of life?"}
      ],
      teachingPoints: [
        {cn:"从人物的语言和动作描写中感受哈尔威船长的伟大品格",en:"Feel Captain Halville\u2019s greatness through his words and actions"},
        {cn:"体会简短有力的对话在紧急场景中的表达效果",en:"Appreciate the expressive power of brief, forceful dialogue in an emergency"}
      ],
      parentTips: [
        {cn:"和孩子讨论责任与担当，联系生活中见过的勇敢的人",en:"Discuss responsibility and courage, connecting to brave people in real life"},
        {cn:"引导孩子关注文中的对话描写，体会简洁语言的力量",en:"Direct your child\u2019s attention to the dialogue and the power of concise language"}
      ]
    },
    {
      id: 24, title: "黄继光", titleEn: "Huang Jiguang",
      difficulty: 3,
      isSelfRead: true,
      text: [
"1952年10月，上甘岭战役打响了。这是朝鲜战场上最激烈的一次阵地战。",
"黄继光所在的营已经持续战斗了四天四夜；第五天夜晚接到上级的命令，要在黎明之前夺下被敌人占领的597.9高地。",
"进攻开始了，大炮在轰鸣。战士们占领了一个又一个山头，就要到达597.9高地的主峰了。突然，敌人一个火力点凶猛地射击起来。战士们屡次突击，都被比雨点还密的枪弹压了回来。",
"东方升起了启明星，指导员看看表，已经四点多了。如果不很快摧毁这个火力点，在黎明前就攻不下597.9高地的主峰，已经夺得的那些山头就会全部丢失。",
"黄继光愤怒地注视着敌人的火力点，他转过身来坚定地对指导员说：“指导员，请把这个任务交给我吧！”指导员紧握着黄继光的手，说：“好，我相信你一定能完成这个光荣而艰巨的任务。”",
"黄继光带上两个战士，拿了手雷，喊了一声：“让祖国人民听我们胜利的消息吧！”便向敌人的火力点爬去。",
"敌人发现他们了。几发照明弹升上天空，黑夜变成了白天。炮弹在他们周围爆炸。他们冒着浓烟，冒着烈火，匍匐前进。一个战士牺牲了，另一个战士也负伤了。摧毁火力点的重任落在了黄继光一个人的肩上。",
"火力点里的敌人把机枪对准黄继光，子弹像冰雹一样射过来。黄继光肩上腿上都负了伤。他用尽全身的力气，更加顽强地向前爬，还有二十米，十米……近了，更近了。",
"啊！黄继光突然站起来了！在暴风雨一样的子弹中站起来了！他举起右臂，手雷在探照灯的光亮中闪闪发光。",
"轰！敌人的火力点塌了半边，黄继光晕倒了。战士们赶紧冲上去，不料才冲到半路，敌人的机枪又叫起来，战士们被压在山坡上。",
"天快亮了，规定的时间马上到了。指导员正在着急，只见黄继光又站起来了！他张开双臂，向喷射着火舌的火力点猛扑上去，用自己的胸膛堵住了敌人的枪口。",
"“冲啊！为黄继光报仇！”喊声惊天动地。战士们像海涛一样向上冲，占领了597.9高地，消灭了阵地上的全部敌人。"
],
      textEn: [
"In October 1952, the Battle of Shangganling began — the fiercest positional battle of the Korean War.",
"Huang Jiguang’s battalion had been fighting continuously for four days and four nights. On the fifth night, they received orders from their superiors to capture Hill 597.9, occupied by the enemy, before dawn.",
"The attack began; cannons roared. The soldiers captured one hilltop after another and were about to reach the main peak of Hill 597.9. Suddenly, an enemy firing position opened up with ferocious gunfire. The soldiers charged again and again, but each time they were driven back by bullets even thicker than raindrops.",
"Huang Jiguang stared angrily at the enemy position, then turned firmly to the battalion staff officer: ‘Sir, give this mission to me!’ With two soldiers and grenades, he cried: ‘Let the people of our motherland hear our victory!’ and crawled toward the bunker.",
"The enemy in the firing position aimed their machine guns at Huang Jiguang, and bullets came flying like hail. Huang Jiguang was wounded in the shoulder and legs. He used every ounce of strength in his body and crawled forward even more tenaciously — twenty meters, ten meters… closer, closer still.",
"Suddenly Huang Jiguang stood up — stood up in a storm of bullets! He raised his right arm; the grenade gleamed in the searchlight. Boom! The bunker half-collapsed; Huang Jiguang fell unconscious.",
"Dawn approached; the deadline was nearly up. Then Huang Jiguang stood again! He spread his arms wide and threw himself at the blazing gun port, blocking the enemy’s muzzle with his own chest.",
"‘Charge! Avenge Huang Jiguang!’ The earth-shaking cry rang out. Soldiers surged forward like a tidal wave, capturing Hill 597.9 and destroying all enemy forces.",
"(Classical Chinese passage, 48 characters)",
"(Classical Chinese passage, 57 characters)",
"(Classical Chinese passage, 70 characters)",
"(Dialogue passage, 54 characters)"
],
      textPinyin: [
"1 9 5 2 nián 1 0 yuè， shàng gān lǐng zhàn yì dǎ xiǎng le。 zhè shì cháo xiān zhàn chǎng shàng zuì jī liè de yí cì zhèn dì zhàn。",
"huáng jì guāng suǒ zài de yíng yǐ jīng chí xù zhàn dòu le sì tiān sì yè， dì wǔ tiān yè wǎn jiē dào shàng jí de mìng lìng， yào zài lí míng zhī qián duó xià bèi dí rén zhàn lǐng de 5 9 7 . 9 gāo dì。",
"jìn gōng kāi shǐ le， dà pào zài hōng míng。 zhàn shì men zhàn lǐng le yí gè yòu yí gè shān tóu， jiù yào dào dá 5 9 7 . 9 gāo dì de zhǔ fēng le。 tū rán， dí rén yí gè huǒ lì diǎn xiōng měng dì shè jī qǐ lái。 zhàn shì men lǚ cì tū jī， dōu bèi bǐ yǔ diǎn hái mì de qiāng dàn yā le huí lái。",
"huáng jì guāng fèn nù dì zhù shì zhe dí rén de huǒ lì diǎn， tā zhuǎn guò shēn lái jiān dìng dì duì yíng cān móu zhǎng shuō： “ cān móu zhǎng， qǐng bǎ zhè ge rèn wu jiāo gěi wǒ ba！ ” huáng jì guāng dài shàng liǎng gè zhàn shì， ná le shǒu léi， hǎn le yì shēng： “ ràng zǔ guó rén mín tīng wǒ men shèng lì de xiāo xī ba！ ” biàn xiàng dí rén de huǒ lì diǎn pá qù。",
"huǒ lì diǎn lǐ de dí rén bǎ jī qiāng duì zhǔn huáng jì guāng， zǐ dàn xiàng bīng báo yí yàng shè guò lái。 huáng jì guāng jiān shàng tuǐ shàng dōu fù le shāng。 tā yòng jìn quán shēn de lì qi， gèng jiā wán qiáng dì xiàng qián pá， hái yǒu èr shí mǐ， shí mǐ…… jìn le， gèng jìn le。",
"a！ huáng jì guāng tū rán zhàn qǐ lái le！ zài bào fēng yǔ yí yàng de zǐ tán zhōng zhàn qǐ lái le！ tā jǔ qǐ yòu bì， shǒu léi zài tàn zhào dēng de guāng liàng zhōng shǎn shǎn fā guāng。 hōng！ dí rén de huǒ lì diǎn tā le bàn biān， huáng jì guāng yùn dǎo le。",
"tiān kuài liàng le， guī dìng de shí jiān mǎ shàng dào le。 zhǐ jiàn huáng jì guāng yòu zhàn qǐ lái le！ tā zhāng kāi shuāng bì， xiàng pēn shè zháo huǒ shé de huǒ lì diǎn měng pū shàng qù， yòng zì jǐ de xiōng táng dǔ zhù le dí rén de qiāng kǒu。",
"“ chōng a， wèi huáng jì guāng bào chóu！ ” hǎn shēng jīng tiān dòng dì。 zhàn shì men xiàng hǎi tāo yí yàng xiàng shàng chōng， zhàn lǐng le 5 9 7 . 9 gāo dì， xiāo miè le zhèn dì shàng de quán bù dí rén。",
"a ！ huáng jì guāng tū rán zhàn qǐ lái le ！ zài bào fēng yǔ yí yàng de zǐ dàn zhōng zhàn qǐ lái le ！ tā jǔ qǐ yòu bì ， shǒu léi zài tàn zhào dēng de guāng liàng zhōng shǎn shǎn fā guāng 。",
"hōng ！ dí rén de huǒ lì diǎn tā le bàn biān ， huáng jì guāng yùn dǎo le 。 zhàn shì men gǎn jǐn chōng shàng qù ， bú liào cái chōng dào bàn lù ， dí rén de jī qiāng yòu jiào qǐ lái ， zhàn shì men bèi yā zài shān pō shàng 。",
"tiān kuài liàng le ， guī dìng de shí jiān mǎ shàng dào le 。 zhǐ dǎo yuán zhèng zài zhe jí ， zhǐ jiàn huáng jì guāng yòu zhàn qǐ lái le ！ tā zhāng kāi shuāng bì ， xiàng pēn shè zháo huǒ shé de huǒ lì diǎn měng pū shàng qù ， yòng zì jǐ de xiōng táng dǔ zhù le dí rén de qiāng kǒu 。",
"“ chōng a ！ wèi huáng jì guāng bào chóu ！ ” hǎn shēng jīng tiān dòng dì 。 zhàn shì men xiàng hǎi tāo yí yàng xiàng shàng chōng ， zhàn lǐng le 5 9 7 . 9 gāo dì ， xiāo miè le zhèn dì shàng de quán bù dí rén 。"
],
      recognizeChars: ["役","屡","启","摧","雹","晕","膛"],
      writeChars: [],
      vocabWords: [
        {word:'战斗',pinyin:'zhàn dòu',en:'battle',sentence:'上甘岭战斗。',sentenceEn:'The Battle of Shangganling.'},
        {word:'堡垒',pinyin:'bǎo lěi',en:'bunker',sentence:'敌人的火力堡垒。',sentenceEn:'The enemy bunker.'},
        {word:'匍匐',pinyin:'pú fú',en:'crawl',sentence:'匍匐前进。',sentenceEn:'Crawling forward.'},
        {word:'牺牲',pinyin:'xī shēng',en:'sacrifice',sentence:'黄继光英勇牺牲。',sentenceEn:'Huang Jiguang heroically sacrificed himself.'},
        {word:'光荣',pinyin:'guāng róng',en:'glorious',sentence:'光荣的战斗英雄。',sentenceEn:'A glorious battle hero.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "1952\u5e7410\u6708\uff0c\u4e0a\u7518\u5cad\u6218\u5f79\u6253\u54cd\u4e86\u3002", exampleEn: "In October 1952, the Battle of Shangganling began \u2014 the fiercest positional batt", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u628a\u5b57\u53e5", pointEn: "b\u01ce-construction", example: "1952\u5e7410\u6708\uff0c\u4e0a\u7518\u5cad\u6218\u5f79\u6253\u54cd\u4e86\u3002", exampleEn: "In October 1952, the Battle of Shangganling began \u2014 the fiercest positional batt", explanation: "\u7528\u201c\u628a\u201d\u5c06\u5bbe\u8bed\u63d0\u524d\uff0c\u5f3a\u8c03\u52a8\u4f5c\u5bf9\u5bf9\u8c61\u7684\u5f71\u54cd", explanationEn: "Moves the object before the verb using \"b\u01ce\" to emphasize the effect of the action"}
      ],
      footnotes: [
        {term:"\u6218\u6597", termEn:"battle", definition:"\u3010zh\u00e0n d\u00f2u\u3011battle\u3002", definitionEn:"battle"},
        {term:"\u5821\u5792", termEn:"bunker", definition:"\u3010b\u01ceo l\u011bi\u3011bunker\u3002", definitionEn:"bunker"},
        {term:"\u530d\u5310", termEn:"crawl", definition:"\u3010p\u00fa f\u00fa\u3011crawl\u3002", definitionEn:"crawl"},
        {term:"\u727a\u7272", termEn:"sacrifice", definition:"\u3010x\u012b sh\u0113ng\u3011sacrifice\u3002", definitionEn:"sacrifice"},
        {term:"\u5149\u8363", termEn:"glorious", definition:"\u3010gu\u0101ng r\u00f3ng\u3011glorious\u3002", definitionEn:"glorious"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"读一读，找出课文中描写语言、动作的语句，说说从中体会到了怎样的英雄气概",en:"Find sentences describing speech and actions, and explain what heroism you feel"},
        {type:"think",cn:"读读其他英雄人物故事，和同学交流",en:"Read other hero stories and discuss them with classmates"}
      ],
      teachingPoints: [
        {cn:"从语言和动作描写中感受黄继光的英雄气概",en:"Feel Huang Jiguang\u2019s heroism through descriptions of his words and actions"},
        {cn:"体会叙事节奏的变化对表达紧张气氛的作用",en:"Appreciate how changing narrative pace creates tension"}
      ],
      parentTips: [
        {cn:"和孩子一起了解抗美援朝的历史背景",en:"Learn about the historical background of the Korean War with your child"},
        {cn:"引导孩子感受英雄的牺牲精神，珍惜和平生活",en:"Help your child appreciate the spirit of sacrifice and value of peace"}
      ]
    },
    {
      id: 25, title: "挑山工", titleEn: "Mountain Porters",
      difficulty: 3,
      isSelfRead: true,
      text: [
"在泰山上，随处都可以碰到挑山工。他们肩上搭一根光溜溜的扁担，两头垂下几根绳子，挂着沉甸甸的物品。登山的时候，他们一只胳膊搭在扁担上，另一只胳膊垂着，伴随着步子有节奏地一甩一甩，保持身体平衡。他们的路线是折尺形的--先从台阶的左侧起步，斜行向上，登上七八级台阶，就到了台的右侧；便转过身子，反方向斜行，到了左侧再转回来，每次转身，扁担换一次肩。他们这样曲折向上登，才能使挂在扁担前头的东西不碰在台阶上，还可以省些力气。担了重物，如果照一般登山的人那样直上直下，膝头是受不住的。但是路线曲折，就会使路线加长。挑山工登一次山，走的路程大约比游人多一倍。",
"奇怪的是挑山工的速度并不比游人慢，你轻快地从他们身边越过，以为把他们甩在后边很远了。你在什么地方饱览壮丽的山色，或者在道边诵读凿在石壁上的古人的题句，或者在喧闹的溪流边洗脸洗脚，他们就会不声不响地从你身旁走过，悄悄地走到你的前头去了。等你发现，你会大吃一惊，以为他们是像仙人那样腾云驾雾赶上来的。",
"有一次，我同几个画友去泰山写生，就遇到过这种情况。我们在山下买登山用的青竹杖，遇到一个挑山工，矮个子，脸儿黑生生的，眉毛很浓，大约四十来岁，敞开的白土布褂子中间露出鲜红的背心。他扁担一头拴着几张木凳子，另一头捆着五六个青皮西瓜。我们很快就越过了他。到了回马岭那条陡直的山道前，我们累了，舒开身子躺在一块被山风吹得干干净净的大石头上歇歇脚。我们发现那个挑山工就坐在对面的草茵上抽烟。随后，我们跟他差不多同时起程，很快就把他甩在后边了，直到看不见他。我们爬上半山的五松亭，看见在那株姿态奇特的古松下整理挑儿的正是他，褂子脱掉了，光穿着红背心，现出健美的黑黝黝的肌肉。我很惊异，走过去跟他攀谈起来，这个山民倒不拘束，挺爱说话。他告诉我，他家住在山脚下，天天挑货上山，干了近二十年，一年四季，一天一个来回。他说：“你看我个子小吗?干挑山工的，给扁担压得长不高，都是又矮又粗的。像您这样的高个儿干不了这种活儿，走起路晃悠!”他浓眉一抬，裂开嘴笑了，露出洁白的牙齿。山民们喝泉水，牙齿都很白。",
"谈话更随便些了，我把心中那个不解之谜说了出来：“我看你们走得很慢，怎么反而常常跑到我们前头去了呢?你们有什么近道吗?”",
"他听了，黑生生的脸上显出一丝得意的神色。他想了想说：“我们哪里有近道，还不和你们是一条道?你们走得快，可是你们在路上东看西看，玩玩闹闹，总停下来呗!我们跟你们不一样。不像你们那么随便，高兴怎么就怎么。一步踩不实不行，停停住住更不行。那样，两天也到不了山顶。就得一个劲儿往前走。别看我们慢，走长了就跑到你们前边去了。你看，是不是这个理?”",
"我心悦诚服地点着头，感到这山民的几句朴素的话，似乎包蕴着意味深长的哲理。我还没来得及细细体味，他就担起挑儿起程了。在前边的山道上，我们又几次超过了他；但是总在我们留连山色的时候，他又悄悄地超过了我们。在极顶的小卖部门前，我们又碰见了他，他已经在那里交货了。他憨厚地对我们点头一笑，好像在说；“瞧，我可又跑到你们前头来了!”",
"从泰山回来，我画了一幅画--在陡直的似乎没有尽头的山道上，一个穿红背心的挑山工给肩头的重物压弯了腰，他一步一步地向上登攀。这幅画一直挂在我的书桌前，多年来不曾换掉，因为我需要它。"
],
      textEn: [
"Mountain porters can be seen everywhere on Mount Tai. A smooth carrying pole rests on their shoulders, with ropes at each end holding heavy loads. While climbing, one arm rests on the pole, while the other swings rhythmically with each step to keep balance. They walk a zigzag path, like a folding ruler: starting from the left side of the steps, they angle upward, climb seven or eight steps until they reach the right side, then turn around and angle in the opposite direction, turning back again when they reach the left side. With each turn, the pole shifts to the other shoulder. Only by zigzagging upward like this can the loads hanging from the front of the pole avoid hitting the steps, and it also saves some energy. Carrying heavy loads straight up the way ordinary climbers do would be too much for the knees. But the zigzag route makes the distance much longer. The path a mountain porter walks is roughly twice as long as a tourist’s!",
"Strangely, porters don’t take more time than tourists. You walk briskly past them, thinking you’ve left them far behind. While you’re somewhere feasting your eyes on the magnificent mountain scenery, or reading aloud ancient inscriptions carved into the stone cliffs along the path, or washing your face and feet by a noisy stream, they have already silently passed you and quietly gotten ahead. When you notice, you’re astonished, thinking they must have flown there on clouds like immortals.",
"Once, I went to Mount Tai to paint from life with a few painter friends and encountered exactly this situation. I spoke aloud the riddle in my heart: ‘I see you walking so slowly, yet how is it you always end up ahead of us? Do you have some shortcut?’",
"Hearing this, a trace of pride appeared on his dark face. He said: ‘What shortcut could we have? Don’t we walk the very same path as you? You don’t have a load on your shoulders, so sure, you walk faster, but along the way you’re looking here and there, playing around, and you always have to stop! We’re not like you — we can’t be as free and easy as you, doing whatever we please. We can’t afford a single unsteady step, and we certainly can’t waste time. We have to keep pushing forward without stopping. Don’t be fooled by our slowness — over the long haul, we end up ahead of you.’",
"I nodded, deeply convinced. This mountain man’s simple words seemed to contain profound philosophy. After returning from Mount Tai, I painted a picture: on a steep, seemingly endless mountain path, a porter in a red vest, bent under his heavy load, climbing step by step. That painting has hung before my desk ever since, because I need it.",
"(Dialogue passage, 161 characters)",
"(Passage, 89 characters)"
],
      textPinyin: [
"zài tài shān shàng， suí chù dōu kě yǐ pèng dào tiāo shān gōng。 tā men jiān shàng dā yì gēn guāng liū liū de biǎn dàn， biǎn dàn liǎng tóu de shéng zǐ guà zhe chén diàn diàn de huò wù。 dēng shān de shí hòu， tā men yì tiáo gē bo dā zài biǎn dān shàng， lìng yì tiáo gē bo suí zhe bù zǐ yǒu jié zòu dì yì shuǎi yi shuǎi， shǐ shēn tǐ bǎo chí píng héng。 tā men zǒu de lù xiàn shì zhé chǐ xíng de， cóng tái jiē zuǒ cè qǐ bù， xié xíng xiàng shàng， dēng shàng qī bā jí， dào le tái jiē yòu cè， jiù zhuǎn guò shēn zi， fǎn fāng xiàng xié xíng， dào le zuǒ cè zài zhuǎn huí lái。 měi zhuǎn yí cì shēn， biǎn dàn huàn yí cì jiān。 zhè yàng qū zhé xiàng shàng dēng， cái néng shǐ guà zài biǎn dàn qián tou de dōng xī bú pèng dào tái jiē， hái kě yǐ shěng xiē lì qi。 dān le zhòng wù， rú guǒ zhào yì bān dēng shān de rén nà yàng zhí wǎng shàng zǒu， xī gài huì shòu bú zhù de。 dàn shì lù xiàn qū zhé， jiù huì shǐ lù chéng jiā cháng。 tiāo shān gōng dēng shān zǒu de lù chéng dà yuē bǐ yóu rén duō yí bèi！",
"qí guài de shì tiāo shān gōng huā de shí jiān bìng bù bǐ yóu rén duō。 nǐ qīng kuài dì cóng tā men shēn biān zǒu guò， yǐ wéi bǎ tā men yuǎn yuǎn dì shuǎi zài hòu biān le。 nǐ zài shén me dì fāng bǎo lǎn zhuàng lì de shān sè， huò zhě zài dào biān sòng dú záo zài shí bì shàng de gǔ rén de tí jù， huò zhě zài xuān nào de xī liú biān xǐ liǎn xǐ jiǎo， tā men yǐ jīng bù shēng bù xiǎng dì cóng nǐ shēn páng zǒu guò， qiāo qiāo dì zǒu dào qián tou qù le。 děng nǐ fā xiàn， nǐ huì dà chī yì jīng， yǐ wéi tā men xiàng xiān rén nà yàng， shì téng yún jià wù gǎn shàng lái de。",
"yǒu yí cì， wǒ tóng jǐ gè huà yǒu qù tài shān xiě shēng， jiù yù dào guò zhè zhǒng qíng kuàng。 wǒ bǎ xīn zhōng nà ge bù jiě zhī mí shuō le chū lái： “ wǒ kàn nǐ men zǒu dé hěn màn， zěn me fǎn ér cháng cháng pǎo dào wǒ men qián tou qù le ne？ nǐ men yǒu shén me jìn dào ma？ ”",
"tā tīng le， hēi shēng shēng de liǎn shàng xiǎn chū yì sī dé yì de shén sè。 tā shuō： “ wǒ men nǎ lǐ yǒu jìn dào， hái bú shì hé nǐ men zǒu de tóng yì tiáo dào？ nǐ men jiān bǎng shàng méi yǒu tiāo zi， shì zǒu dé kuài， kě shì yí lù shang dōng kàn xī kàn， wán wán nào nào， zǒng děi tíng xià lái ma！ wǒ men gēn nǐ men bù yí yàng， bú xiàng nǐ men nà me suí biàn， gāo xìng zěn me jiù zěn me。 yí bù cǎi bù shí bù xíng， gèng bù néng dān wù gōng fū。 wǒ men dé yí gè jìn wǎng qián zǒu。 bié kàn wǒ men màn， zǒu cháng le jiù pǎo dào nǐ men qián biān qù le。 ”",
"wǒ xīn yuè chéng fú dì diǎn zháo tóu， gǎn dào zhè wèi shān mín de jǐ jù pǔ sù de huà， sì hū bāo yùn zhuó yì wèi shēn cháng de zhé lǐ。 cóng tài shān huí lái， wǒ huà le yì fú huà—— zài dǒu zhí de sì hū méi yǒu jìn tóu de shān dào shàng， yí gè chuān hóng bèi xīn de tiāo shān gōng gěi jiān tóu de zhòng wù yā wān le yāo， tā yí bù yi bù dì xiàng shàng pān dēng。 zhè fú huà yì zhí guà zài wǒ de shū zhuō qián， yīn wèi wǒ xū yào tā。",
"wǒ xīn yuè chéng fú dì diǎn zháo tóu ， gǎn dào zhè shān mín de jǐ jù pǔ sù de huà ， sì hū bāo yùn zhuó yì wèi shēn cháng de zhé lǐ 。 wǒ hái méi lái de jí xì xì tǐ wèi ， tā jiù dān qǐ tiāo ér qǐ chéng le 。 zài qián biān de shān dào shàng ， wǒ men yòu jǐ cì chāo guò le tā ； dàn shì zǒng zài wǒ men liú lián shān sè de shí hòu ， tā yòu qiāo qiāo dì chāo guò le wǒ men 。 zài jí dǐng de xiǎo mài bù mén qián ， wǒ men yòu pèng jiàn le tā ， tā yǐ jīng zài nà lǐ jiāo huò le 。 tā hān hòu dì duì wǒ men diǎn tóu yí xiào ， hǎo xiàng zài shuō ； “ qiáo ， wǒ kě yòu pǎo dào nǐ men qián tou lái le ! ”",
"cóng tài shān huí lái ， wǒ huà le yì fú huà - - zài dǒu zhí de sì hū méi yǒu jìn tóu de shān dào shàng ， yí gè chuān hóng bèi xīn de tiāo shān gōng gěi jiān tóu de zhòng wù yā wān le yāo ， tā yí bù yi bù dì xiàng shàng dēng pān 。 zhè fú huà yì zhí guà zài wǒ de shū zhuō qián ， duō nián lái bù céng huàn diào ， yīn wèi wǒ xū yào tā 。"
],
      recognizeChars: ["泰","杖","敞","拘","蕴"],
      writeChars: [],
      vocabWords: [
        {word:'挑山工',pinyin:'tiāo shān gōng',en:'mountain porter',sentence:'泰山上的挑山工。',sentenceEn:'Mountain porters on Mount Tai.'},
        {word:'扁担',pinyin:'biǎn dan',en:'carrying pole',sentence:'肩挑扁担。',sentenceEn:'Carrying a pole on the shoulder.'},
        {word:'折尺',pinyin:'zhé chǐ',en:'zigzag',sentence:'走折尺形路线。',sentenceEn:'Walking a zigzag route.'},
        {word:'朴素',pinyin:'pǔ sù',en:'simple',sentence:'朴素的道理。',sentenceEn:'A simple truth.'},
        {word:'脚踏实地',pinyin:'jiǎo tà shí dì',en:'down-to-earth',sentence:'一步一步脚踏实地。',sentenceEn:'Steadily, step by step.'}
      ],
      footnotes: [
        {term:"\u6311\u5c71\u5de5", termEn:"mountain porter", definition:"\u3010ti\u0101o sh\u0101n g\u014dng\u3011mountain porter\u3002", definitionEn:"mountain porter"},
        {term:"\u6241\u62c5", termEn:"carrying pole", definition:"\u3010bi\u01cen dan\u3011carrying pole\u3002", definitionEn:"carrying pole"},
        {term:"\u6298\u5c3a", termEn:"zigzag", definition:"\u3010zh\u00e9 ch\u01d0\u3011zigzag\u3002", definitionEn:"zigzag"},
        {term:"\u6734\u7d20", termEn:"simple", definition:"\u3010p\u01d4 s\u00f9\u3011simple\u3002", definitionEn:"simple"},
        {term:"\u811a\u8e0f\u5b9e\u5730", termEn:"down-to-earth", definition:"\u3010ji\u01ceo t\u00e0 sh\u00ed d\u00ec\u3011down-to-earth\u3002", definitionEn:"down-to-earth"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      grammarPoints: [
        {point:'借物喻理',pointEn:'jiè wù yù lǐ',example:'use things to illustrate ideas',exampleEn:'挑山工虽然走得慢但不停歇。',explanation:'Mountain porters walk slowly but never stop.',explanationEn:'通过具体事物说明深刻道理'}
      ],
      exercises: [
        {type:"read",cn:"默读课文，说说挑山工是怎样登山的",en:"Read silently and describe how mountain porters climb"},
        {type:"think",cn:"作者说\u201C这位山民的几句朴素的话，似乎包蕴着意味深长的哲理\u201D，找出这几句话读一读，说说其中包含了怎样的哲理",en:"Find the porter\u2019s words the author calls \u2018profoundly philosophical\u2019 and explain the wisdom in them"}
      ],
      teachingPoints: [
        {cn:"理解挑山工的话中蕴含的人生哲理：脚踏实地、持之以恒",en:"Understand the life philosophy in the porter\u2019s words: stay grounded and persevere"},
        {cn:"体会以小见大的写法——从日常劳动中发现深刻道理",en:"Appreciate the technique of revealing big truths through small observations"}
      ],
      parentTips: [
        {cn:"和孩子讨论\u201C坚持不懈\u201D的道理，联系学习和生活中的实例",en:"Discuss perseverance with your child, using examples from study and daily life"},
        {cn:"引导孩子理解作者为什么\u201C需要\u201D那幅画，感受精神力量的重要性",en:"Help your child understand why the author \u2018needs\u2019 the painting and appreciate the importance of spiritual strength"}
      ]
    }
  ],
  oralComm: {title:"自我介绍",titleEn:"Self-Introduction",prompt:{cn:"面对不同的情况，自我介绍也应该有所不同。选择或创设一个情境，试着作自我介绍。",en:"Self-introductions should vary by situation. Choose or create a scenario and practice introducing yourself."}},
  garden: {
    accumulation: {title:"日积月累",titleEn:"Daily Accumulation",content:{cn:"天行健，君子以自强不息。——《周易》\n胜人者有力，自胜者强。——《老子》\n不怨天，不尤人。——《论语》\n生于忧患而死于安乐。——《孟子》",en:"Heaven\u2019s movement is strong; a noble person strives ceaselessly. \u2014 Book of Changes\nOne who overcomes others has strength; one who overcomes oneself is truly strong. \u2014 Laozi\nDo not blame heaven or fault others. \u2014 Analects\nBorn in adversity, perish in comfort. \u2014 Mencius"}},
    wordSentence: {title:"词句段运用",titleEn:"Words, Sentences & Paragraphs",content:{cn:"仿照例句写一组连续的动作；用学过的修改符号修改一段话。了解词语：和蔼、慷慨、贤惠、悲戚、临危不惧、彬彬有礼、焦躁不安、心急如焚。",en:"Write a sequence of continuous actions following the model; revise a paragraph using proofreading marks. Learn vocabulary: amiable, generous, virtuous, grieving, fearless in danger, courteous, restless, anxious as if on fire."}},
    composition: {title:"习作：我的\u201C自画像\u201D",titleEn:"Composition: My Self-Portrait",prompt:{cn:"假如你们班来了一位新班主任，请以\u201C我的\u2018自画像\u2019\u201D为题，向班主任介绍自己。",en:"Imagine a new class teacher arrives. Write a \u2018self-portrait\u2019 to introduce yourself to them."}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 8 — 童话故事 Fairy Tales (Lessons 26-28) */
/* ═══════════════════════════════════════════ */
{
  id: 8, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 26, title: "宝葫芦的秘密（节选）", titleEn: "The Secret of the Magic Gourd (Excerpt)",
      difficulty: 3,
      text: [
        "我来给你们讲个故事。可是我先得介绍介绍我自己：我姓王，叫王葆。我要讲的，正是我自己的一件事情，是我和宝葫芦的故事。",
        "至于宝葫芦的故事，那我从小就知道了。那是我奶奶讲给我听的。奶奶每逢要求我干什么，就得给我讲个故事。这是我们的规矩。",
        "\u201C乖小葆，来，奶奶给你洗个脚。\u201D奶奶总是一面撵我，一面招手。\u201C我不干，我怕烫。\u201D我总是一面溜开，一面摆手。就这么着，奶奶讲了个宝葫芦的故事。",
        "我就这么着，从很小的时候起，听奶奶讲故事，一直听到我十来岁。奶奶每次讲的都不一样。上次讲的是张三劈面撞见了一位神仙，得了一个宝葫芦。下次讲的是李四出去远足旅行，一游游到了龙宫，得到了一个宝葫芦。不管张三也好，李四也好，一得到了这个宝葫芦，可就幸福极了，要什么有什么。",
        "我听了这些故事，常常就联系到自己：\u201C我要是有了一个宝葫芦，我该怎么办？我该要些什么？\u201D",
        "一直到我长大了，有时候还想起它来。我有几次对着一道算术题发愣，不知道要怎么列式子，就由\u201C8\u201D字想到了宝葫芦——假如我有这么一个，那可就省心了。",
        "我和同学们比赛种向日葵，我家里的那几棵长得又瘦又长，上面顶着一个小脑袋，可怜巴巴的样儿，比谁的也比不上。我就又想到了那个宝贝。可那只不过是幻想罢了。可我总还是要想到它。"
      ],
      textEn: [
        "Let me tell you a story. But first, an introduction: I\u2019m Wang Bao. What I\u2019m about to tell you is my own story \u2014 the story of me and the magic gourd.",
        "I\u2019ve known about the magic gourd since childhood. My grandma told me the stories. Whenever she wanted me to do something, she had to tell a story. That was our rule.",
        "\u2018Good little Bao, come, let Grandma wash your feet.\u2019 Grandma would chase me while beckoning. \u2018No! It\u2019s too hot!\u2019 I\u2019d dodge while waving her off. And so, Grandma told me a magic gourd story.",
        "From earliest childhood until I was about ten, Grandma told me stories \u2014 each one different. Once it was Zhang San bumping into an immortal and getting a magic gourd. Next it was Li Si traveling to the Dragon Palace and finding one. No matter who it was, once they had the magic gourd, they were perfectly happy \u2014 whatever they wished for appeared.",
        "After hearing these stories, I would often relate them to myself: \u2018If I had a magic gourd, what would I do? What would I wish for?\u2019",
        "Even after growing up, I sometimes thought about it. Staring blankly at a math problem, not knowing how to set up the equation, the figure \u20188\u2019 would remind me of a gourd \u2014 if only I had one!",
        "When my classmates and I competed growing sunflowers, mine were scrawny with tiny heads, pathetic compared to everyone else\u2019s. I thought of the magic gourd again. But it was just a fantasy. Yet I kept thinking about it."
      ],
      textPinyin: [
        "w\u01d2 l\u00e1i g\u011bi n\u01d0 men ji\u01ceng g\u00e8 g\u00f9 sh\u00ec\u3002 k\u011b sh\u00ec w\u01d2 xi\u0101n d\u00e9 ji\u00e8 sh\u00e0o ji\u00e8 sh\u00e0o w\u01d2 z\u00ec j\u01d0\uff1a w\u01d2 x\u00ecng w\u00e1ng\uff0c ji\u00e0o w\u00e1ng b\u01ceo\u3002 w\u01d2 y\u00e0o ji\u01ceng de\uff0c zh\u00e8ng sh\u00ec w\u01d2 z\u00ec j\u01d0 de y\u00ed ji\u00e0n sh\u00ec q\u00edng\uff0c sh\u00ec w\u01d2 h\u00e9 b\u01ceo h\u00fa lu de g\u00f9 sh\u00ec\u3002",
        "zh\u00ec y\u00fa b\u01ceo h\u00fa l\u00fa de g\u00f9 sh\u00ec\uff0c n\u00e0 w\u01d2 c\u00f3ng xi\u01ceo ji\u00f9 zh\u012b d\u00e0o le\u3002 n\u00e0 sh\u00ec w\u01d2 n\u01cei nai ji\u01ceng g\u011bi w\u01d2 t\u012bng de\u3002 n\u01cei n\u01cei m\u011bi f\u00e9ng y\u0101o qi\u00fa w\u01d2 g\u00e0n sh\u00e9n me\uff0c ji\u00f9 d\u00e9 g\u011bi w\u01d2 ji\u01ceng g\u00e8 g\u00f9 sh\u00ec\u3002 zh\u00e8 sh\u00ec w\u01d2 men de gu\u012b j\u01d4\u3002",
        "\u201c gu\u0101i xi\u01ceo b\u01ceo\uff0c l\u00e1i\uff0c n\u01cei nai g\u011bi n\u01d0 x\u01d0 g\u00e8 ji\u01ceo\u3002 \u201d n\u01cei n\u01cei z\u01d2ng sh\u00ec y\u00ed mi\u00e0n ni\u01cen w\u01d2\uff0c y\u00ed mi\u00e0n zh\u0101o sh\u01d2u\u3002 \u201c w\u01d2 b\u00f9 g\u0101n\uff0c w\u01d2 p\u00e0 t\u00e0ng\u3002 \u201d w\u01d2 z\u01d2ng sh\u00ec y\u00ed mi\u00e0n li\u016b k\u0101i\uff0c y\u00ed mi\u00e0n b\u01cei sh\u01d2u\u3002 ji\u00f9 zh\u00e8 me zh\u0101o\uff0c n\u01cei nai ji\u01ceng le g\u00e8 b\u01ceo h\u00fa lu de g\u00f9 sh\u00ec\u3002",
        "w\u01d2 ji\u00f9 zh\u00e8 me zh\u0101o\uff0c c\u00f3ng h\u011bn xi\u01ceo de sh\u00ed h\u00f2u q\u01d0\uff0c t\u012bng n\u01cei nai ji\u01ceng g\u00f9 sh\u00ec\uff0c y\u00ec zh\u00ed t\u012bng d\u00e0o w\u01d2 sh\u00ed l\u00e1i su\u00ec\u3002 n\u01cei nai m\u011bi c\u00ec ji\u01ceng de d\u014du b\u00f9 y\u00ed y\u00e0ng\u3002 sh\u00e0ng c\u00ec ji\u01ceng de sh\u00ec zh\u0101ng s\u0101n p\u012b mi\u00e0n zhu\u00e0ng ji\u00e0n le y\u00ed w\u00e8i sh\u00e9n xi\u0101n\uff0c d\u00e9 le y\u00ed g\u00e8 b\u01ceo h\u00fa lu\u3002 xi\u00e0 c\u00ec ji\u01ceng de sh\u00ec l\u01d0 s\u00ec ch\u016b q\u00f9 yu\u01cen z\u00fa l\u01da x\u00edng\uff0c y\u00ec y\u00f3u y\u00f3u d\u00e0o le l\u00f3ng g\u014dng\uff0c d\u00e9 d\u00e0o le y\u00ed g\u00e8 b\u01ceo h\u00fa lu\u3002 b\u00f9 gu\u01cen zh\u0101ng s\u0101n y\u011b h\u01ceo\uff0c l\u01d0 s\u00ec y\u011b h\u01ceo\uff0c y\u00ec d\u00e9 d\u00e0o le zh\u00e8 ge b\u01ceo h\u00fa lu\uff0c k\u011b ji\u00f9 x\u00ecng f\u00fa j\u00ed le\uff0c y\u00e0o sh\u00e9n me y\u01d2u sh\u00e9n me\u3002",
        "w\u01d2 t\u012bng le zh\u00e8 xi\u0113 g\u00f9 sh\u00ec\uff0c ch\u00e1ng ch\u00e1ng ji\u00f9 li\u00e1n x\u00ec d\u00e0o z\u00ec j\u01d0\uff1a \u201c w\u01d2 y\u00e0o shi y\u01d2u le y\u00ed g\u00e8 b\u01ceo h\u00fa lu\uff0c w\u01d2 g\u0101i z\u011bn me b\u00e0n\uff1f w\u01d2 g\u0101i y\u00e0o xi\u0113 sh\u00e9n me\uff1f \u201d",
        "y\u00ec zh\u00ed d\u00e0o w\u01d2 zh\u01ceng d\u00e0 le\uff0c y\u01d2u sh\u00ed h\u00f2u h\u00e1i xi\u01ceng q\u01d0 t\u0101 l\u00e1i\u3002 w\u01d2 y\u01d2u j\u01d0 c\u00ec du\u00ec zhe y\u00ed d\u00e0o su\u00e0n sh\u00f9 t\u00ed f\u0101 l\u00e8ng\uff0c b\u00f9 zh\u012b d\u00e0o y\u00e0o z\u011bn me li\u00e8 sh\u00ec z\u01d0\uff0c ji\u00f9 y\u00f3u \u201c 8 \u201d z\u00ec xi\u01ceng d\u00e0o le b\u01ceo h\u00fa lu\u2014\u2014 ji\u01ce r\u00fa w\u01d2 y\u01d2u zh\u00e8 me y\u00ed g\u00e8\uff0c n\u00e0 k\u011b ji\u00f9 sh\u011bng x\u012bn le\u3002",
        "w\u01d2 h\u00e9 t\u00f3ng xu\u00e9 men b\u01d0 s\u00e0i zh\u01d2ng xi\u00e0ng r\u00ec ku\u00ed\uff0c w\u01d2 ji\u0101 l\u01d0 de n\u00e0 j\u01d0 k\u0113 ch\u00e1ng d\u00e9 y\u00f2u sh\u00f2u y\u00f2u ch\u00e1ng\uff0c sh\u00e0ng mi\u00e0n d\u01d0ng zhe y\u00ed g\u00e8 xi\u01ceo n\u01ceo d\u00e0i\uff0c k\u011b li\u00e1n b\u0101 b\u0101 de y\u00e0ng \u00e9r\uff0c b\u01d0 shu\u00ed de y\u011b b\u01d0 b\u00fa sh\u00e0ng\u3002 w\u01d2 ji\u00f9 y\u00f2u xi\u01ceng d\u00e0o le n\u00e0 g\u00e8 b\u01ceo b\u00e8i\u3002 k\u011b n\u00e0 zh\u012b b\u00fa gu\u00f2 sh\u00ec hu\u00e0n xi\u01ceng b\u00e0 le\u3002 k\u011b w\u01d2 z\u01d2ng h\u00e1i sh\u00ec y\u00e0o xi\u01ceng d\u00e0o t\u0101\u3002"
      ],
      recognizeChars: ["妖","矩","乖","撵","丫","拽","冲","瘦"],
      writeChars: ["介","绍","妖","矩","乖","撵","烫","丫","拽","福","舔","葵","瘦","棒","罢"],
      vocabWords: [
        {word:'宝葫芦',pinyin:'bǎo hú lu',en:'magic gourd',sentence:'我有一个宝葫芦。',sentenceEn:'I have a magic gourd.'},
        {word:'心想事成',pinyin:'xīn xiǎng shì chéng',en:'wishes come true',sentence:'宝葫芦能心想事成。',sentenceEn:'The magic gourd grants wishes.'},
        {word:'奶奶',pinyin:'nǎi nai',en:'grandmother',sentence:'奶奶讲的故事。',sentenceEn:'Stories grandmother told.'},
        {word:'幻想',pinyin:'huàn xiǎng',en:'fantasy',sentence:'美好的幻想。',sentenceEn:'A beautiful fantasy.'},
        {word:'秘密',pinyin:'mì mì',en:'secret',sentence:'这是一个秘密。',sentenceEn:'This is a secret.'}
      ],
      grammarPoints: [
        {point: "\u4e00\u8fb9\u2026\u2026\u4e00\u8fb9\u2026\u2026", pointEn: "while doing...at the same time...", example: "\u6211\u6765\u7ed9\u4f60\u4eec\u8bb2\u4e2a\u6545\u4e8b\u3002", exampleEn: "Let me tell you a story. But first, an introduction: I\u2019m Wang Bao. What I\u2019m abou", explanation: "\u8868\u793a\u4e24\u4e2a\u52a8\u4f5c\u540c\u65f6\u8fdb\u884c", explanationEn: "Indicates two actions happening simultaneously"},
        {point: "\u603b\u5206\u7ed3\u6784", pointEn: "General-specific structure", example: "\u6211\u6765\u7ed9\u4f60\u4eec\u8bb2\u4e2a\u6545\u4e8b\u3002", exampleEn: "Let me tell you a story. But first, an introduction: I\u2019m Wang Bao. What I\u2019m abou", explanation: "\u5148\u603b\u8ff0\u518d\u5206\u8ff0\uff0c\u6216\u5148\u5206\u8ff0\u518d\u603b\u7ed3\uff0c\u4f7f\u6587\u7ae0\u6761\u7406\u6e05\u6670", explanationEn: "Start with overview then details, or vice versa, for clear organization"}
      ],
      footnotes: [
        {term:"\u5b9d\u846b\u82a6", termEn:"magic gourd", definition:"\u3010b\u01ceo h\u00fa lu\u3011magic gourd\u3002", definitionEn:"magic gourd"},
        {term:"\u5fc3\u60f3\u4e8b\u6210", termEn:"wishes come true", definition:"\u3010x\u012bn xi\u01ceng sh\u00ec ch\u00e9ng\u3011wishes come true\u3002", definitionEn:"wishes come true"},
        {term:"\u5976\u5976", termEn:"grandmother", definition:"\u3010n\u01cei nai\u3011grandmother\u3002", definitionEn:"grandmother"},
        {term:"\u5e7b\u60f3", termEn:"fantasy", definition:"\u3010hu\u00e0n xi\u01ceng\u3011fantasy\u3002", definitionEn:"fantasy"},
        {term:"\u79d8\u5bc6", termEn:"secret", definition:"\u3010m\u00ec m\u00ec\u3011secret\u3002", definitionEn:"secret"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"默读课文，说一说王葆为什么想得到一个宝葫芦",en:"Read silently and explain why Wang Bao wanted a magic gourd"},
        {type:"discuss",cn:"奶奶给王葆讲了哪些故事？选一个，根据已有内容创编故事",en:"What stories did Grandma tell? Choose one and create your own version based on the content"},
        {type:"think",cn:"当王葆真的得到了一个宝葫芦时，他认识到靠宝葫芦不劳而获带来的不是幸福，而是烦恼。感兴趣的同学可以读读这本书",en:"Wang Bao later realized the gourd brought trouble, not happiness. Interested students can read the full book"}
      ],
      teachingPoints: [
        {cn:"体会第一人称叙述的亲切感和趣味性",en:"Appreciate the intimacy and humor of first-person narration"},
        {cn:"理解\u201C不劳而获\u201D的主题，感受故事的教育意义",en:"Understand the theme of \u2018something for nothing\u2019 and the story\u2019s educational message"}
      ],
      parentTips: [
        {cn:"推荐孩子阅读张天翼的《宝葫芦的秘密》全本",en:"Recommend the full novel 'The Secret of the Magic Gourd' by Zhang Tianyi"},
        {cn:"和孩子讨论\u201C天上不会掉馅饼\u201D的道理，鼓励靠自己努力获得成功",en:"Discuss the idea that success comes from effort, not magic, and encourage self-reliance"}
      ]
    },
    {
      id: 27, title: "巨人的花园", titleEn: "The Giant\u2019s Garden",
      difficulty: 3,
      text: [
        "每天下午，孩子们放学后，总喜欢到巨人的花园里去玩。这是一个很可爱的大花园。园里长满了柔嫩的青草，草丛中到处露出星星似的美丽花朵。还有十二棵桃树，春天开出淡红色和珍珠色的鲜花，秋天结出丰硕的果子。小鸟们在树上唱着悦耳的歌。\u201C我们在这儿多么快乐！\u201D孩子们欢叫着。",
        "有一天，巨人回来了。他离家去看朋友，一住就是七年。他看见孩子们正在花园里玩。\u201C你们在这儿做什么？\u201D他叱责道。孩子们吓得跑开了。\u201C我自己的花园就是我自己的花园，\u201D巨人自言自语道，\u201C除了我自己以外，我不允许任何人在里面玩。\u201D于是他在花园的四周砌了一道高墙，挂出一块布告牌：禁止入内，违者重惩。",
        "春天来了，乡下到处开着小花，到处有小鸟歌唱。单单在巨人的花园里，仍旧是冬天的景象。小鸟不肯在他的花园里唱歌，因为那里没有孩子们的踪迹；桃树也忘了开花。高兴的只有雪和霜两位。他们还请来北风同住。北风整天在花园里呼啸着。",
        "一天早晨，巨人还在睡觉，忽然听见了动人的音乐。他跳下床往外看。孩子们从墙上一个小洞爬进花园里来了，他们都坐在桃树上面。桃树看见孩子们回来十分高兴，纷纷用花朵把自己装饰起来。只有一个角落还是冬天。一个小男孩正站在那里，他太小了，手还挨不到树枝，只好在树旁转来转去，哭得很厉害。",
        "巨人看见这个情景，心也软了。他对自己说：\u201C我多么自私啊！现在我明白为什么春天不肯到这儿来了。\u201D他轻轻地走下楼，走进花园里。巨人悄悄地走到小男孩后面，轻轻抱起他，放到树枝上。这棵树马上开花了，小鸟们也飞来歌唱。别的孩子看见巨人不再像先前那样凶狠了，也都跑了回来。春天也跟着一起回来了。巨人对他们说：\u201C孩子们，花园现在是你们的了。\u201D他拿出一把大斧子，拆除了围墙。",
        "从那以后，巨人的花园又成了孩子们的乐园。许多年过去，巨人老了。他不能再跟孩子们一块儿玩了，只能坐在椅子上看孩子们玩各种游戏，同时也欣赏着他自己的花园。他说：\u201C我有许多美丽的花，可孩子们却是最美丽的花。\u201D"
      ],
      textEn: [
        "Every afternoon after school, children always loved to go and play in the Giant\u2019s garden. It was a very lovely big garden. The garden was full of soft, tender green grass, and everywhere among the grass beautiful flowers peeked out like stars. There were also twelve peach trees that bloomed with pale pink and pearl-colored blossoms in spring and bore rich fruit in autumn. Birds sang sweet songs in the trees. \u2018How happy we are here!\u2019 the children cried joyfully.",
        "One day, the Giant came back. He had gone to visit a friend and ended up staying for seven years. He saw the children playing in his garden. \u2018What are you doing here?\u2019 he scolded. The children were so frightened that they ran away. \u2018My own garden is my own garden,\u2019 the Giant muttered to himself. \u2018I will not allow anyone except myself to play in it.\u2019 So he built a high wall all around the garden and hung up a notice board: ENTRY FORBIDDEN. VIOLATORS SEVERELY PUNISHED.",
        "Spring came everywhere with flowers and birdsong \u2014 except in the Giant\u2019s garden, where winter lingered. Birds wouldn\u2019t sing without children; peach trees forgot to bloom. Only Snow and Frost were happy; they invited North Wind to stay, and he howled through the garden all day.",
        "One morning, the Giant was still sleeping when he suddenly heard beautiful music. He jumped out of bed and looked outside. The children had crawled through a small hole in the wall into the garden, and they were all sitting in the peach trees. The peach trees were so happy to see the children back that they decked themselves out with blossoms. But one corner was still winter. A small boy stood there; he was too small, and his hands could not reach the branches, so he could only walk round and round the tree, crying bitterly.",
        "Seeing this, the Giant\u2019s heart softened. He said to himself: \u2018How selfish I have been! Now I understand why spring refused to come here.\u2019 He softly walked downstairs and into the garden. The Giant quietly crept behind the little boy, gently picked him up, and set him on a branch. The tree immediately burst into bloom, and birds flew over to sing. The other children, seeing that the Giant was no longer as fierce as before, all came running back. Spring came back with them. The Giant said to them: \u2018Children, the garden is yours now.\u2019 He took out a great axe and tore down the wall.",
        "From then on, the garden was the children\u2019s paradise again. Years passed; the Giant grew old. He could no longer play but sat watching the children, admiring his garden. \u2018I have many beautiful flowers,\u2019 he said, \u2018but children are the most beautiful flowers of all.\u2019"
      ],
      textPinyin: [
        "m\u011bi ti\u0101n xi\u00e0 w\u01d4\uff0c h\u00e1i zi men f\u00e0ng xu\u00e9 h\u00f2u\uff0c z\u01d2ng x\u01d0 huan d\u00e0o j\u00f9 r\u00e9n de hu\u0101 yu\u00e1n l\u01d0 q\u00f9 w\u00e1n\u3002 zh\u00e8 sh\u00ec y\u00ed g\u00e8 h\u011bn k\u011b \u00e0i de d\u00e0 hu\u0101 yu\u00e1n\u3002 yu\u00e1n l\u01d0 ch\u00e1ng m\u01cen le r\u00f3u n\u00e8n de q\u012bng c\u01ceo\uff0c c\u01ceo c\u00f3ng zh\u014dng d\u00e0o ch\u00f9 l\u00f9 ch\u016b x\u012bng x\u012bng s\u00ec de m\u011bi l\u00ec hu\u0101 du\u01d2\u3002 h\u00e1i y\u01d2u sh\u00ed \u00e8r k\u0113 t\u00e1o sh\u00f9\uff0c ch\u016bn ti\u0101n k\u0101i ch\u016b d\u00e0n h\u00f3ng s\u00e8 h\u00e9 zh\u0113n zh\u016b s\u00e8 de xi\u0101n hu\u0101\uff0c qi\u016b ti\u0101n ji\u00e9 ch\u016b f\u0113ng shu\u00f2 de gu\u01d2 z\u01d0\u3002 xi\u01ceo ni\u01ceo men z\u00e0i sh\u00f9 sh\u00e0ng ch\u00e0ng zhe yu\u00e8 \u011br de g\u0113\u3002 \u201c w\u01d2 men z\u00e0i zh\u00e8 \u00e9r du\u014d me ku\u00e0i l\u00e8\uff01 \u201d h\u00e1i zi men hu\u0101n ji\u00e0o zhe\u3002",
        "y\u01d2u y\u00ec ti\u0101n\uff0c j\u00f9 r\u00e9n hu\u00ed l\u00e1i le\u3002 t\u0101 l\u00ed ji\u0101 q\u00f9 k\u00e0n p\u00e9ng y\u01d2u\uff0c y\u00ed zh\u00f9 ji\u00f9 sh\u00ec q\u012b ni\u00e1n\u3002 t\u0101 k\u00e0n ji\u00e0n h\u00e1i zi men zh\u00e8ng z\u00e0i hu\u0101 yu\u00e1n l\u01d0 w\u00e1n\u3002 \u201c n\u01d0 men z\u00e0i zh\u00e8 \u00e9r zu\u00f2 sh\u00e9n me\uff1f \u201d t\u0101 ch\u00ec z\u00e9 d\u00e0o\u3002 h\u00e1i zi men xi\u00e0 d\u00e9 p\u01ceo k\u0101i le\u3002 \u201c w\u01d2 z\u00ec j\u01d0 de hu\u0101 yu\u00e1n ji\u00f9 sh\u00ec w\u01d2 z\u00ec j\u01d0 de hu\u0101 yu\u00e1n\uff0c \u201d j\u00f9 r\u00e9n z\u00ec y\u00e1n z\u00ec y\u01d4 d\u00e0o\uff0c \u201c ch\u00fa le w\u01d2 z\u00ec j\u01d0 y\u01d0 w\u00e0i\uff0c w\u01d2 b\u00f9 y\u01d4n x\u01d4 r\u00e8n h\u00e9 r\u00e9n z\u00e0i l\u01d0 mi\u00e0n w\u00e1n\u3002 \u201d y\u00fa sh\u00ec t\u0101 z\u00e0i hu\u0101 yu\u00e1n de s\u00ec zh\u014du q\u00ec le y\u00ed d\u00e0o g\u0101o qi\u00e1ng\uff0c gu\u00e0 ch\u016b y\u00ed ku\u00e0i b\u00f9 g\u00e0o p\u00e1i\uff1a j\u00ecn zh\u01d0 r\u00f9 n\u00e8i\uff0c w\u00e9i zh\u011b zh\u00f2ng ch\u00e9ng\u3002",
        "ch\u016bn ti\u0101n l\u00e1i le\uff0c xi\u0101ng xi\u00e0 d\u00e0o ch\u00f9 k\u0101i zhe xi\u01ceo hu\u0101\uff0c d\u00e0o ch\u00f9 y\u01d2u xi\u01ceo ni\u01ceo g\u0113 ch\u00e0ng\u3002 d\u0101n d\u0101n z\u00e0i j\u00f9 r\u00e9n de hu\u0101 yu\u00e1n l\u01d0\uff0c r\u00e9ng ji\u00f9 sh\u00ec d\u014dng ti\u0101n de j\u01d0ng xi\u00e0ng\u3002 xi\u01ceo ni\u01ceo b\u00f9 k\u011bn z\u00e0i t\u0101 de hu\u0101 yu\u00e1n l\u01d0 ch\u00e0ng g\u0113\uff0c y\u012bn w\u00e8i n\u00e0 l\u01d0 m\u00e9i y\u01d2u h\u00e1i zi men de z\u014dng j\u00ec\uff1b t\u00e1o sh\u00f9 y\u011b w\u00e0ng le k\u0101i hu\u0101\u3002 g\u0101o x\u00ecng de zh\u01d0 y\u01d2u xu\u011b h\u00e9 shu\u0101ng li\u01ceng w\u00e8i\u3002 t\u0101 men h\u00e1i q\u01d0ng l\u00e1i b\u011bi f\u0113ng t\u00f3ng zh\u00f9\u3002 b\u011bi f\u0113ng zh\u011bng ti\u0101n z\u00e0i hu\u0101 yu\u00e1n l\u01d0 h\u016b xi\u00e0o zhe\u3002",
        "y\u00ec ti\u0101n z\u01ceo ch\u00e9n\uff0c j\u00f9 r\u00e9n h\u00e1i z\u00e0i shu\u00ec ji\u00e0o\uff0c h\u016b r\u00e1n t\u012bng ji\u00e0n le d\u00f2ng r\u00e9n de y\u012bn yu\u00e8\u3002 t\u0101 ti\u00e0o xi\u00e0 chu\u00e1ng w\u01ceng w\u00e0i k\u00e0n\u3002 h\u00e1i zi men c\u00f3ng qi\u00e1ng sh\u00e0ng y\u00ed g\u00e8 xi\u01ceo d\u00f2ng p\u00e1 j\u00ecn hu\u0101 yu\u00e1n l\u01d0 l\u00e1i le\uff0c t\u0101 men d\u014du zu\u00f2 z\u00e0i t\u00e1o sh\u00f9 sh\u00e0ng mi\u00e0n\u3002 t\u00e1o sh\u00f9 k\u00e0n ji\u00e0n h\u00e1i zi men hu\u00ed l\u00e1i sh\u00ed f\u0113n g\u0101o x\u00ecng\uff0c f\u0113n f\u0113n y\u00f2ng hu\u0101 du\u01d2 b\u01ce z\u00ec j\u01d0 zhu\u0101ng sh\u00ec q\u01d0 l\u00e1i\u3002 zh\u01d0 y\u01d2u y\u00ed g\u00e8 ji\u01ceo lu\u00f2 h\u00e1i sh\u00ec d\u014dng ti\u0101n\u3002 y\u00ed g\u00e8 xi\u01ceo n\u00e1n h\u00e1i zh\u00e8ng zh\u00e0n z\u00e0i n\u00e0 l\u01d0\uff0c t\u0101 t\u00e0i xi\u01ceo le\uff0c sh\u01d2u h\u00e1i \u0101i b\u00fa d\u00e0o sh\u00f9 zh\u012b\uff0c zh\u01d0 h\u01ceo z\u00e0i sh\u00f9 p\u00e1ng zhu\u00e0n l\u00e1i zhu\u00e0n q\u00f9\uff0c k\u016b d\u00e9 h\u011bn l\u00ec h\u00e0i\u3002",
        "j\u00f9 r\u00e9n k\u00e0n ji\u00e0n zh\u00e8 ge q\u00edng j\u01d0ng\uff0c x\u012bn y\u011b ru\u01cen le\u3002 t\u0101 du\u00ec z\u00ec j\u01d0 shu\u014d\uff1a \u201c w\u01d2 du\u014d me z\u00ec s\u012b a\uff01 xi\u00e0n z\u00e0i w\u01d2 m\u00edng b\u00e1i w\u00e8i sh\u00e9n me ch\u016bn ti\u0101n b\u00f9 k\u011bn d\u00e0o zh\u00e8 \u00e9r l\u00e1i le\u3002 \u201d t\u0101 q\u012bng q\u012bng d\u00ec z\u01d2u xi\u00e0 l\u00f3u\uff0c z\u01d2u j\u00ecn hu\u0101 yu\u00e1n l\u01d0\u3002 j\u00f9 r\u00e9n qi\u0101o qi\u0101o d\u00ec z\u01d2u d\u00e0o xi\u01ceo n\u00e1n h\u00e1i h\u00f2u mi\u00e0n\uff0c q\u012bng q\u012bng b\u00e0o q\u01d0 t\u0101\uff0c f\u00e0ng d\u00e0o sh\u00f9 zh\u012b sh\u00e0ng\u3002 zh\u00e8 k\u0113 sh\u00f9 m\u01ce sh\u00e0ng k\u0101i hu\u0101 le\uff0c xi\u01ceo ni\u01ceo men y\u011b f\u0113i l\u00e1i g\u0113 ch\u00e0ng\u3002 bi\u00e9 de h\u00e1i z\u01d0 k\u00e0n ji\u00e0n j\u00f9 r\u00e9n b\u00fa z\u00e0i xi\u00e0ng xi\u0101n qi\u00e1n n\u00e0 y\u00e0ng xi\u014dng h\u011bn le\uff0c y\u011b d\u014du p\u01ceo le hu\u00ed l\u00e1i\u3002 ch\u016bn ti\u0101n y\u011b g\u0113n zhe y\u00ec q\u01d0 hu\u00ed l\u00e1i le\u3002 j\u00f9 r\u00e9n du\u00ec t\u0101 men shu\u014d\uff1a \u201c h\u00e1i zi men\uff0c hu\u0101 yu\u00e1n xi\u00e0n z\u00e0i sh\u00ec n\u01d0 men de le\u3002 \u201d t\u0101 n\u00e1 ch\u016b y\u00ec b\u01ce d\u00e0 f\u01d4 z\u01d0\uff0c ch\u0101i ch\u00fa le w\u00e9i qi\u00e1ng\u3002",
        "c\u00f3ng n\u00e0 y\u01d0 h\u00f2u\uff0c j\u00f9 r\u00e9n de hu\u0101 yu\u00e1n y\u00f2u ch\u00e9ng le h\u00e1i zi men de l\u00e8 yu\u00e1n\u3002 x\u01d4 du\u014d ni\u00e1n gu\u00f2 q\u00f9\uff0c j\u00f9 r\u00e9n l\u01ceo le\u3002 t\u0101 b\u00f9 n\u00e9ng z\u00e0i g\u0113n h\u00e1i zi men y\u00ed ku\u00e0i \u00e9r w\u00e1n le\uff0c zh\u01d0 n\u00e9ng zu\u00f2 z\u00e0i y\u01d0 zi sh\u00e0ng k\u00e0n h\u00e1i zi men w\u00e1n g\u00e8 zh\u01d2ng y\u00f3u x\u00ec\uff0c t\u00f3ng sh\u00ed y\u011b x\u012bn sh\u01ceng zhe t\u0101 z\u00ec j\u01d0 de hu\u0101 yu\u00e1n\u3002 t\u0101 shu\u014d\uff1a \u201c w\u01d2 y\u01d2u x\u01d4 du\u014d m\u011bi l\u00ec de hu\u0101\uff0c k\u011b h\u00e1i zi men qu\u00e8 sh\u00ec zu\u00ec m\u011bi l\u00ec de hu\u0101\u3002 \u201d"
      ],
      recognizeChars: ["硕","允","砌","覆","啸","缕","搂","颊"],
      writeChars: ["硕","允","砌","牌","禁","惩","踪","啸","私","颊","拆"],
      vocabWords: [
        {word:'巨人',pinyin:'jù rén',en:'giant',sentence:'巨人有一个花园。',sentenceEn:'The giant had a garden.'},
        {word:'围墙',pinyin:'wéi qiáng',en:'wall',sentence:'巨人砌了围墙。',sentenceEn:'The giant built a wall.'},
        {word:'孤独',pinyin:'gū dú',en:'lonely',sentence:'巨人感到很孤独。',sentenceEn:'The giant felt very lonely.'},
        {word:'融化',pinyin:'róng huà',en:'melt',sentence:'冰雪融化了。',sentenceEn:'The ice and snow melted.'},
        {word:'分享',pinyin:'fēn xiǎng',en:'share',sentence:'巨人学会了分享。',sentenceEn:'The giant learned to share.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u6bcf\u5929\u4e0b\u5348\uff0c\u5b69\u5b50\u4eec\u653e\u5b66\u540e\uff0c\u603b\u559c\u6b22\u5230\u5de8\u4eba\u7684\u82b1\u56ed\u91cc\u53bb\u73a9\u3002", exampleEn: "Every afternoon after school, children always loved to go and play in the Giant\u2019", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u56e0\u4e3a\u2026\u2026\u6240\u4ee5\u2026\u2026", pointEn: "because...therefore...", example: "\u6bcf\u5929\u4e0b\u5348\uff0c\u5b69\u5b50\u4eec\u653e\u5b66\u540e\uff0c\u603b\u559c\u6b22\u5230\u5de8\u4eba\u7684\u82b1\u56ed\u91cc\u53bb\u73a9\u3002", exampleEn: "Every afternoon after school, children always loved to go and play in the Giant\u2019", explanation: "\u56e0\u679c\u590d\u53e5\uff0c\u8868\u793a\u539f\u56e0\u548c\u7ed3\u679c\u7684\u5173\u7cfb", explanationEn: "Causal compound sentence expressing cause and effect"}
      ],
      footnotes: [
        {term:"\u5de8\u4eba", termEn:"giant", definition:"\u3010j\u00f9 r\u00e9n\u3011giant\u3002", definitionEn:"giant"},
        {term:"\u56f4\u5899", termEn:"wall", definition:"\u3010w\u00e9i qi\u00e1ng\u3011wall\u3002", definitionEn:"wall"},
        {term:"\u5b64\u72ec", termEn:"lonely", definition:"\u3010g\u016b d\u00fa\u3011lonely\u3002", definitionEn:"lonely"},
        {term:"\u878d\u5316", termEn:"melt", definition:"\u3010r\u00f3ng hu\u00e0\u3011melt\u3002", definitionEn:"melt"},
        {term:"\u5206\u4eab", termEn:"share", definition:"\u3010f\u0113n xi\u01ceng\u3011share\u3002", definitionEn:"share"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"朗读课文，边读边想象画面",en:"Read aloud while imagining the scenes"},
        {type:"discuss",cn:"说说巨人的花园发生了哪些变化，巨人又有什么转变",en:"Describe the changes in the garden and the Giant\u2019s transformation"},
        {type:"write",cn:"发挥想象，把孩子们在巨人的花园里尽情玩耍的情景写下来",en:"Use your imagination to write about children playing freely in the Giant\u2019s garden"}
      ],
      teachingPoints: [
        {cn:"体会童话中\u201C分享带来快乐，自私带来寒冬\u201D的寓意",en:"Appreciate the fairy tale\u2019s message: sharing brings joy; selfishness brings winter"},
        {cn:"感受童话中奇妙的想象和人物真善美的形象",en:"Feel the wondrous imagination and true-good-beautiful characters in fairy tales"}
      ],
      parentTips: [
        {cn:"和孩子一起阅读王尔德的其他童话，如《快乐王子》",en:"Read other Oscar Wilde fairy tales together, such as \u2018The Happy Prince\u2019"},
        {cn:"引导孩子理解\u201C分享\u201D的意义，联系日常生活中的例子",en:"Help your child understand the meaning of sharing with examples from daily life"}
      ]
    },
    {
      id: 28, title: "海的女儿", titleEn: "The Little Mermaid",
      difficulty: 3,
      isSelfRead: true,
      text: [
"第二天早晨，船驶进邻国宏伟都城的港口。所有教堂的钟都藏响了，高高的塔顶上军号齐鸣，兵士们拿着飘扬的旗子，佩带着闪亮的军刀在敬礼。每天都有欢庆活动，舞会和宴会一个接着一个，可是公主还没有露面。人们说她在一个遥远的地方接受教育，学习各种皇家的美德。最后，她终于来了。",
"小人鱼迫切地想要看看她的美貌。当公主出现在面前的时候，她不得不承认，她还从来没有见过比这更美的容貌。她的皮肤是那么细嫩、洁白，乌黑的长睫毛下，一对深蓝的、钟情的眼睛在微笑着。",
"“就是你！”王子对公主说，“当我像一具死尸一样躺在岸上的时候，救活我的就是你！”他把这位羞答答的新娘，紧紧地拥在自己的怀里。",
"“啊，我真是太幸福了！”他又转过身对小人鱼说，“我从来不敢奢望的最美好的事情，现在终于成为了现实。你会为我的幸福而高兴吧，因为你是所有人中最喜欢我的啊！”",
"小人鱼亲吻着王子的手。她觉得自己的心在破碎。她知道，王子举行婚礼后的第一个早晨，她就会死去，变成海上的泡沫。",
"教堂的钟都响起来了，传令人骑着马在街上宣布王子订婚的喜讯。每一个祭台上，芬芳的灯油在贵重的银灯里燃烧着，新郎和新娘手挽着手接受祝福。小人鱼穿着金线绣花的丝绸衣服，双手托着新娘的披纱。可是，她的耳朵听不见这欢快的音乐，她的眼睛也看不见这神圣的仪式。她想起了她将要死去的早晨，想起了她在这世界上已经失去了的一切。",
"当天晚上，新郎和新娘登上船。礼炮响起来了，旗帜在风中飘扬。一顶紫金色的皇家帐篷在船中央立了起来,里面铺陈着最美丽的垫子。在这里，这对幸福的新婚夫妇将度过他们宁静、美好的夜晚。",
"风儿在鼓着船帆。平静的海面上，船在轻柔地航行着。",
"暮色渐渐降临，彩灯亮起来了，水手们在甲板上跳起了欢快的舞蹈。小人鱼不禁想起她第一次浮到海面上的情景，想起她那时看到的同样华丽和欢乐的场面。她于是跳起舞来，飞快地旋转着，就像被追逐着的燕子那样。大家都在为她喝彩，赞美她美妙的舞姿，她从来没有跳得这么美丽。",
"小人鱼知道，这是她能看到王子的最后一个夜晚——为了他，她离开了自己的族人和家庭，交出了她美妙的声音；为了他，每天忍受着没有止境的苦痛，他却一点儿也不知道。这是她能和他在一起，呼吸同样空气的最后一个夜晚，这是她能看到深沉的海和布满了星星的天空的最后一个夜晚。一个没有思想和梦境的永恒之夜，同时在等待着她。船上的欢歌乐舞一直持续到子夜之后。她笑着，舞着，但是死的念头一直在她心中。王子吻着美丽的新娘，抚弄着她乌亮的头发。他们手挽着手，走进了那华丽的帐篷。",
"一切都静了下来，只有鸵手站立在舵旁。小人鱼向东方凝望，等待着晨曦的出现——她知道，随着清晨的第一缕阳光，自己就会死去。这时，她看到她的姐姐们从波涛中游了出来。她们和她一样苍白，美丽的长发已经不在风中飘动。",
"“我们把头发都交给了那个巫婆，希望她能帮助你，让你不要死去。她给了我们一把刀。拿去吧，你看，它是多么锋利！在太阳出来之前，你必须把它刺进王子的心脏。当他的血液流到你的脚上时，你的双脚又会连到一起，变成一条鱼尾，你就能恢复人鱼的原形，可以再活三百年。快动手吧！我们的老祖母悲伤得连白发都掉光了，就像我们的头发被巫婆剪掉了一样。刺死王子，赶快回来吧！快动手啊！你没有看到天边的红光吗？再过几分钟，太阳就要出来了，你就要死了！”她们发出一声奇怪的、深深的叹息，便沉到海里去了。",
"小人鱼把紫金帐篷的帘子掀开，那位美丽的新娘把头枕在王子的怀里睡着了。她弯下腰，在王子清秀的脸庞上吻了一下，再望了望天空，朝霞渐渐明亮起来了。她看了看手中锋利的刀，又深情地看了王子一眼，他正在梦中喃喃地念着新娘的名字。小人鱼拿着刀的手在发抖，但是,她马上将那把锋利的刀远远地抛到海里。刀落下的地方，浪花迸发出一道耀眼的红光，好像一滴滴的鲜血从水中喷溅出来。她再一次深情地朝王子望了一眼，然后纵身跳到海里。她感到自己的身体正在一点点地化为泡沫。"
],
      textEn: [
"Far out at sea, the water is as blue as the prettiest cornflower petals, as clear as the purest glass, and so deep that no anchor can reach the bottom. To span from seabed to surface, you would need to stack many, many church steeples. Sea folk live down there.",
"But do not by any means imagine that there is nothing down there but a seabed covered with white sand. No! The most wondrous trees and other plants grow there. Their branches and leaves are so soft that at the slightest movement of the water they sway as if they were alive. Fish swim in and out among the branches and leaves, just like birds in the sky. In the very deepest part of the sea stands the Sea King’s palace. Its walls are built of coral, its tall pointed windows are made of the clearest amber, and its roof is covered with black mussel shells that open and close with the flow of the water.",
"The Sea King had lived alone for many years; his old mother managed the household. There were six beautiful princesses, and the youngest was the most beautiful of all. Her skin was smooth as rose petals; her eyes were blue as the deepest lake. Like her sisters, she had no legs — her lower body was a fish tail.",
"In the garden, each princess had her own little plot. But the youngest arranged her flower bed to be perfectly round, like the sun, and she planted only flowers as red as the sun. She was a peculiar child who did not much like to talk and was always quietly thinking about something.",
"Her greatest joy was hearing stories about the human world above. Her grandmother told her everything she knew about ships, cities, people, and animals. What fascinated her most was that flowers on land could give off fragrance, while sea flowers could not.",
"‘When you turn fifteen,’ said Grandmother, ‘I’ll let you rise to the surface. Then you may sit on rocks in the moonlight and watch great ships sail by. You’ll see forests and cities.’",
"(Passage, 87 characters)",
"(Classical Chinese passage, 24 characters)",
"(Passage, 126 characters)",
"(Narrative passage, 225 characters)",
"(Passage, 102 characters)",
"(Dialogue passage, 235 characters)",
"(Narrative passage, 220 characters)"
],
      textPinyin: [
"zài hǎi de yuǎn chù， shuǐ shì nà me lán， xiàng zuì měi lì de shǐ chē jú huā bàn； yòu shì nà me qīng， xiàng zuì míng liàng de bō lí。 tóng shí tā yòu shì nà me shēn， shēn dé rèn hé tiě máo dōu dá bú dào dǐ。 yào xiǎng cóng hǎi dǐ yì zhí dá dào shuǐ miàn， bì xū bǎ xǔ duō xǔ duō jiào táng de jiān tǎ yí gè yi gè dì dié qǐ lái cái chéng。 hǎi dǐ de rén jiù zhù zài zhè xià miàn。",
"bú guò， qiān wàn bú yào yǐ wéi nà ér zhǐ shì yí piàn pù mǎn le bái shā de hǎi dǐ。 bú shì de， nà ér shēng zhǎng zhe zuì qí yì de shù mù hé qí tā zhí wù。 tā men de zhī gàn hé yè zi shì nà me róu ruǎn， zhǐ yào shuǐ qīng wēi dì liú dòng yí xià， tā men jiù yáo dòng qǐ lái， hǎo xiàng huó de yí yàng。 yú ér men zài zhè xiē zhī yè zhōng jiān yóu lái yóu qù， xiàng shì tiān kōng zhōng de fēi niǎo。 hǎi lǐ zuì shēn de dì fāng yǒu yí zuò hǎi wáng de gōng diàn。 tā de qiáng shì yòng shān hú qì chéng de， jiān dǐng de gāo chuāng zǐ shì yòng zuì liàng de hǔ pò zuò chéng de， wū dǐng shàng pù zhe hēi sè de bàng ké， tā men suí zhe shuǐ de liú dòng kě yǐ zì dòng kāi hé。",
"zhù zài hǎi dǐ de hǎi wáng yǐ jīng dú zì shēng huó le hǎo duō nián， tā de lǎo mǔ qīn wèi tā guǎn lǐ zhe jiā wù。 tā men shì liù gè měi lì de nǚ hái， ér tā men zhī zhōng， nà wèi zuì nián yòu de yào suàn shì zuì měi lì de le。 tā de pí fū guāng huá róu nèn， xiàng méi guī de huā bàn； tā de yǎn jīng shì wèi lán sè de， xiàng zuì shēn de hú shuǐ。 bú guò gēn qí tā gōng zhǔ yí yàng， tā méi yǒu tuǐ， tā de xià shēn shì yì tiáo yú wěi。",
"zài huā yuán lǐ， měi yí wèi gōng zhǔ dōu yǒu zì jǐ de yì xiǎo kuài dì fāng。 zuì nián yòu de nà wèi què bǎ zì jǐ de huā tán bù zhì dé yuán yuán de， xiàng yì lún tài yáng， tóng shí tā yě zhī zhǒng xiàng tài yáng yí yàng hóng de huā。 tā shì yí gè gǔ guài de hái zi， bú dà ài jiǎng huà， zǒng shì jìng jìng dì zài xiǎng zhe shén me。",
"tā zuì dà de lè qù shì tīng guān yú wǒ men rén lèi shì jiè de gù shì。 tā de lǎo zǔ mǔ bù dé bù bǎ zì jǐ suǒ zhī dào de guān yú chuán zhī hé chéng shì、 rén lèi hé dòng wù de zhī shi quán dōu jiǎng gěi tā tīng。 tè bié shǐ tā gǎn dào měi hǎo de shì qíng shì： dì shàng de huā néng sàn fā chū xiāng qì， ér hǎi dǐ de huā què bù néng。",
"“ děng nǐ mǎn le shí wǔ suì， ” lǎo zǔ mǔ shuō， “ wǒ jiù zhǔn xǔ nǐ fú dào shuǐ miàn shàng qù。 nà shí nǐ kě yǐ zuò zài yuè guāng dǐ xià de shí tou shàng miàn， kàn jù dà de chuán zhī cóng nǐ shēn biān shǐ guò。 nǐ yě kě yǐ kàn dào shù lín hé chéng shì。 ”",
"dāng tiān wǎn shàng ， xīn láng hé xīn niáng dēng shàng chuán 。 lǐ pào xiǎng qǐ lái le ， qí zhì zài fēng zhōng piāo yáng 。 yì dǐng zǐ jīn sè de huáng jiā zhàng péng zài chuán zhōng yāng lì le qǐ lái , lǐ miàn pū chén zhe zuì měi lì de diàn zǐ 。 zài zhè lǐ ， zhè duì xìng fú de xīn hūn fū fù jiāng dù guò tā men níng jìng 、 měi hǎo de yè wǎn 。",
"fēng ér zài gǔ zhe chuán fān 。 píng jìng de hǎi miàn shàng ， chuán zài qīng róu dì háng xíng zhe 。",
"mù sè jiàn jiàn jiàng lín ， cǎi dēng liàng qǐ lái le ， shuǐ shǒu men zài jiǎ bǎn shàng tiào qǐ le huān kuài de wǔ dǎo 。 xiǎo rén yú bù jīn xiǎng qǐ tā dì yī cì fú dào hǎi miàn shàng de qíng jǐng ， xiǎng qǐ tā nà shí kàn dào de tóng yàng huá lì hé huān lè de chǎng miàn 。 tā yú shì tiào qǐ wǔ lái ， fēi kuài dì xuán zhuǎn zhe ， jiù xiàng bèi zhuī zhú zhe de yàn zi nà yàng 。 dà jiā dōu zài wèi tā hè cǎi ， zàn měi tā měi miào de wǔ zī ， tā cóng lái méi yǒu tiào dé zhè me měi lì 。",
"xiǎo rén yú zhī dào ， zhè shì tā néng kàn dào wáng zǐ de zuì hòu yí gè yè wǎn — — wèi le tā ， tā lí kāi le zì jǐ de zú rén hé jiā tíng ， jiāo chū le tā měi miào de shēng yīn ； wèi le tā ， měi tiān rěn shòu zhe méi yǒu zhǐ jìng de kǔ tòng ， tā què yì diǎn ér yě bù zhī dào 。 zhè shì tā néng hé tā zài yì qǐ ， hū xī tóng yàng kōng qì de zuì hòu yí gè yè wǎn ， zhè shì tā néng kàn dào shēn chén de hǎi hé bù mǎn le xīng xīng de tiān kōng de zuì hòu yí gè yè wǎn 。 yí gè méi yǒu sī xiǎng hé mèng jìng de yǒng héng zhī yè ， tóng shí zài děng dài zhe tā 。 chuán shàng de huān gē yuè wǔ yì zhí chí xù dào zǐ yè zhī hòu 。 tā xiào zhe ， wǔ zhe ， dàn shì sǐ de niàn tou yì zhí zài tā xīn zhōng 。 wáng zǐ wěn zhe měi lì de xīn niáng ， fǔ nòng zhe tā wū liàng de tóu fa 。 tā men shǒu wǎn zhuó shǒu ， zǒu jìn le nà huá lì de zhàng péng 。",
"yí qiè dōu jìng le xià lái ， zhǐ yǒu tuó shǒu zhàn lì zài duò páng 。 xiǎo rén yú xiàng dōng fāng níng wàng ， děng dài zhe chén xī de chū xiàn — — tā zhī dào ， suí zhe qīng chén de dì yī lǚ yáng guāng ， zì jǐ jiù huì sǐ qù 。 zhè shí ， tā kàn dào tā de jiě jie men cóng bō tāo zhōng yóu le chū lái 。 tā men hé tā yí yàng cāng bái ， měi lì de cháng fà yǐ jīng bú zài fēng zhōng piāo dòng 。",
"“ wǒ men bǎ tóu fa dōu jiāo gěi le nà ge wū pó ， xī wàng tā néng bāng zhù nǐ ， ràng nǐ bú yào sǐ qù 。 tā gěi le wǒ men yì bǎ dāo 。 ná qù ba ， nǐ kàn ， tā shì duō me fēng lì ！ zài tài yáng chū lái zhī qián ， nǐ bì xū bǎ tā cì jìn wáng zǐ de xīn zāng 。 dāng tā de xuè yè liú dào nǐ de jiǎo shàng shí ， nǐ de shuāng jiǎo yòu huì lián dào yì qǐ ， biàn chéng yì tiáo yú wěi ， nǐ jiù néng huī fù rén yú de yuán xíng ， kě yǐ zài huó sān bǎi nián 。 kuài dòng shǒu ba ！ wǒ men de lǎo zǔ mǔ bēi shāng dé lián bái fā dōu diào guāng le ， jiù xiàng wǒ men de tóu fa bèi wū pó jiǎn diào le yí yàng 。 cì sǐ wáng zǐ ， gǎn kuài huí lái ba ！ kuài dòng shǒu a ！ nǐ méi yǒu kàn dào tiān biān de hóng guāng ma ？ zài guò jǐ fēn zhōng ， tài yáng jiù yào chū lái le ， nǐ jiù yào sǐ le ！ ” tā men fā chū yì shēng qí guài de 、 shēn shēn de tàn xī ， biàn chén dào hǎi lǐ qù le 。",
"xiǎo rén yú bǎ zǐ jīn zhàng péng de lián zǐ xiān kāi ， nà wèi měi lì de xīn niáng bǎ tóu zhěn zài wáng zǐ de huái lǐ shuì zhe le 。 tā wān xià yāo ， zài wáng zǐ qīng xiù de liǎn páng shàng wěn le yí xià ， zài wàng le wàng tiān kōng ， zhāo xiá jiàn jiàn míng liàng qǐ lái le 。 tā kàn le kàn shǒu zhōng fēng lì de dāo ， yòu shēn qíng dì kàn le wáng zǐ yì yǎn ， tā zhèng zài mèng zhōng nán nán dì niàn zhe xīn niáng de míng zì 。 xiǎo rén yú ná zhe dāo de shǒu zài fā dǒu ， dàn shì , tā mǎ shàng jiāng nà bǎ fēng lì de dāo yuǎn yuǎn dì pāo dào hǎi lǐ 。 dāo luò xià de dì fāng ， làng huā bèng fā chū yí dào yào yǎn de hóng guāng ， hǎo xiàng yì dī dī de xiān xuè cóng shuǐ zhōng pēn jiàn chū lái 。 tā zài yí cì shēn qíng dì cháo wáng zǐ wàng le yì yǎn ， rán hòu zòng shēn tiào dào hǎi lǐ 。 tā gǎn dào zì jǐ de shēn tǐ zhèng zài yì diǎn diǎn dì huà wéi pào mò 。"
],
      recognizeChars: ["矢","殿","抚","硫","鲸","昵","恰"],
      writeChars: [],
      vocabWords: [
        {word:'人鱼',pinyin:'rén yú',en:'mermaid',sentence:'小人鱼公主。',sentenceEn:'The little mermaid princess.'},
        {word:'向往',pinyin:'xiàng wǎng',en:'yearn for',sentence:'小人鱼向往人类世界。',sentenceEn:'The mermaid yearned for the human world.'},
        {word:'泡沫',pinyin:'pào mò',en:'foam',sentence:'变成了海上的泡沫。',sentenceEn:'Turned into foam on the sea.'},
        {word:'善良',pinyin:'shàn liáng',en:'kind',sentence:'小人鱼善良勇敢。',sentenceEn:'The mermaid was kind and brave.'},
        {word:'灵魂',pinyin:'líng hún',en:'soul',sentence:'她想要一个不灭的灵魂。',sentenceEn:'She wanted an immortal soul.'}
      ],
      grammarPoints: [
        {point: "\u6bd4\u55bb\u53e5", pointEn: "Simile", example: "\u5728\u6d77\u7684\u8fdc\u5904\uff0c\u6c34\u662f\u90a3\u4e48\u84dd\uff0c\u50cf\u6700\u7f8e\u4e3d\u7684\u77e2\u8f66\u83ca\u82b1\u74e3\uff1b\u53c8\u662f\u90a3\u4e48\u6e05\uff0c\u50cf\u6700\u660e\u4eae\u7684\u73bb\u7483\u3002", exampleEn: "Far out at sea, the water is as blue as the prettiest cornflower petals, as clea", explanation: "\u7528\u201c\u50cf\u201d\u201c\u4eff\u4f5b\u201d\u201c\u5982\u540c\u201d\u7b49\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f7f\u8868\u8fbe\u66f4\u751f\u52a8", explanationEn: "Using \"like\" or \"as if\" for comparison to make descriptions more vivid"},
        {point: "\u628a\u5b57\u53e5", pointEn: "b\u01ce-construction", example: "\u5728\u6d77\u7684\u8fdc\u5904\uff0c\u6c34\u662f\u90a3\u4e48\u84dd\uff0c\u50cf\u6700\u7f8e\u4e3d\u7684\u77e2\u8f66\u83ca\u82b1\u74e3\uff1b\u53c8\u662f\u90a3\u4e48\u6e05\uff0c\u50cf\u6700\u660e\u4eae\u7684\u73bb\u7483\u3002", exampleEn: "Far out at sea, the water is as blue as the prettiest cornflower petals, as clea", explanation: "\u7528\u201c\u628a\u201d\u5c06\u5bbe\u8bed\u63d0\u524d\uff0c\u5f3a\u8c03\u52a8\u4f5c\u5bf9\u5bf9\u8c61\u7684\u5f71\u54cd", explanationEn: "Moves the object before the verb using \"b\u01ce\" to emphasize the effect of the action"}
      ],
      footnotes: [
        {term:"\u4eba\u9c7c", termEn:"mermaid", definition:"\u3010r\u00e9n y\u00fa\u3011mermaid\u3002", definitionEn:"mermaid"},
        {term:"\u5411\u5f80", termEn:"yearn for", definition:"\u3010xi\u00e0ng w\u01ceng\u3011yearn for\u3002", definitionEn:"yearn for"},
        {term:"\u6ce1\u6cab", termEn:"foam", definition:"\u3010p\u00e0o m\u00f2\u3011foam\u3002", definitionEn:"foam"},
        {term:"\u5584\u826f", termEn:"kind", definition:"\u3010sh\u00e0n li\u00e1ng\u3011kind\u3002", definitionEn:"kind"},
        {term:"\u7075\u9b42", termEn:"soul", definition:"\u3010l\u00edng h\u00fan\u3011soul\u3002", definitionEn:"soul"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u6807\u8bb0\u4f60\u89c9\u5f97\u5199\u5f97\u597d\u7684\u8bcd\u8bed\u548c\u53e5\u5b50\uff0c\u60f3\u60f3\u4f5c\u8005\u4e3a\u4ec0\u4e48\u8fd9\u6837\u5199\u3002", en:"While reading, mark words and sentences you think are well-written. Think about why the author wrote them that way."},
        {cn:"\u8bfb\u5b8c\u540e\u548c\u540c\u5b66\u8ba8\u8bba\uff1a\u4f60\u6700\u559c\u6b22\u6587\u7ae0\u7684\u54ea\u4e2a\u90e8\u5206\uff1f\u4e3a\u4ec0\u4e48\uff1f", en:"After reading, discuss with classmates: which part of the text do you like best? Why?"}
      ],
      exercises: [
        {type:"read",cn:"用较快的速度读一读，说说你觉得奇妙的地方",en:"Read at a quick pace and share what you find wondrous"},
        {type:"think",cn:"那位最小的公主给你留下了怎样的印象？感兴趣的同学可以完整地读读这篇童话",en:"What impression does the youngest princess leave? Interested students can read the full fairy tale"}
      ],
      teachingPoints: [
        {cn:"感受童话中奇幻的海底世界描写，体会想象力的魅力",en:"Appreciate the fantastical underwater world and the charm of imagination"},
        {cn:"体会安徒生童话语言的优美和人物形象的丰富",en:"Appreciate the beautiful language and rich characters of Andersen\u2019s fairy tales"}
      ],
      parentTips: [
        {cn:"推荐孩子阅读安徒生童话的完整版《海的女儿》",en:"Recommend reading the full version of Andersen\u2019s \u2018The Little Mermaid\u2019"},
        {cn:"和孩子讨论小人鱼公主的追求和向往，引导思考勇气和梦想",en:"Discuss the little mermaid\u2019s longings and guide your child to think about courage and dreams"}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Daily Accumulation",content:{cn:"少年不知勤学苦，老来方知读书迟。\n一日读书一日功，一日不读十日空。\n学习不怕根底浅，只要迈步总不迟。\n书山有路勤为径，学海无涯苦作舟。",en:"Youth knows not the cost of neglecting study; old age brings regret for missed reading.\nA day of reading is a day of gain; a day without reading undoes ten days\u2019 work.\nDon\u2019t fear a weak foundation in learning; as long as you take steps, it\u2019s never too late.\nDiligence is the path up the mountain of books; hardship is the boat across the sea of learning."}},
    wordSentence: {title:"词句段运用",titleEn:"Words, Sentences & Paragraphs",content:{cn:"读下面的句子，说说加点词语\u201C慰藉\u201D与\u201C安慰\u201D、\u201C忘记\u201D与\u201C忘怀\u201D有什么不同；想想描写冬天的句子的写法，照样子写一写其他季节。",en:"Compare the nuanced meanings of similar words (consolation vs. comfort; forget vs. remember fondly); read winter descriptions and try writing about other seasons."}},
    composition: {title:"习作：故事新编",titleEn:"Composition: Retelling a Story",prompt:{cn:"选一个熟悉的故事，如《龟兔赛跑》《狐假虎威》《坐井观天》，创编新故事。可以先设想故事的结局，再想象新的情节。",en:"Choose a familiar story such as 'The Tortoise and the Hare' or 'The Fox Borrows the Tiger\u2019s Might,' and create a new version. Start by imagining a new ending, then develop new plot details."}}
  }
}
]
};
