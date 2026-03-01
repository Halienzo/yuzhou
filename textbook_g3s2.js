/**
 * 字道 ZiDao — 部编版三年级语文下册 教材数据
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
  type: "kewen",
  lessons: [
    {
      id: 1, title: "古诗三首", titleEn: "Three Ancient Poems",
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
      recognizeChars: ["鸳","鸯","惠","崇","豚","减"],
      writeChars: ["融","燕","鸳","鸯","惠","崇","芦","芽","梅","溪","泛","减"],
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
      recognizeChars: ["凑","伶","俐","翼","漾","倦","闲","散","纤","杆","痕"],
      writeChars: ["凑","拂","集","聚","形","掠","偶","尔","沾","倦","闲","纤","痕"],
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
      recognizeChars: ["挨","蓬","胀","势","翩","蹈"],
      writeChars: ["瓣","蓬","胀","裂","姿","势","仿","佛","随","蹈","止"],
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
      recognizeChars: ["录","凡","距","款","绸","膜","瞎","益","约","蚂","斑"],
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
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"我的植物朋友——选择一种植物，走近它，了解它。借助记录卡（名称、样子、颜色、气味），写一写你的植物朋友。",en:"My Plant Friend — Choose a plant, get to know it. Use a record card (name, appearance, color, smell) to write about your plant friend."}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 2 — 寓言 Fables (Lessons 5-8)        */
/* ═══════════════════════════════════════════ */
{
  id: 2, title: "寓言", titleEn: "Fables",
  type: "kewen",
  lessons: [
    {
      id: 5, title: "守株待兔", titleEn: "Waiting for a Rabbit by the Stump",
      text: [
        "宋人有耕者。田中有株。兔走触株，折颈而死。因释其耒而守株，冀复得兔。兔不可复得，而身为宋国笑。",
        "注释：本文选自《韩非子·五蠹》。株——树桩。走——跑。因——于是。释——放下。耒——古代用来耕田的一种农具。冀——希望。"
      ],
      textEn: [
        "A man of Song was plowing his field. In the field there was a tree stump. A rabbit ran into the stump, broke its neck, and died. The man then set aside his plow and waited by the stump, hoping to get another rabbit. But no more rabbits came, and he became the laughingstock of the state of Song.",
        "Notes: From 'Han Feizi'. Stump — tree stump. Ran — ran (classical Chinese). Thus — thereupon. Set aside — put down. Plow — an ancient farming tool. Hoped — wished."
      ],
      recognizeChars: ["宋","耕","释","冀"],
      writeChars: ["守","株","待","宋","耕","触","颈","释","其"],
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
      recognizeChars: ["陶","罐","骄","谦","虚","懦","弱","恼","讶","代","价"],
      writeChars: ["骄","傲","谦","虚","懦","弱","提","尘","讶","捧","代","价"],
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
      recognizeChars: ["称","禁","皱","配","怨","狮","逼","撒"],
      writeChars: ["鹿","塘","映","欣","赏","匀","致","配","传","哎","狮","追","叹"],
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
      recognizeChars: ["滔","涯","妇","碌","遵","循","尊","验"],
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
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"看图画，写一写——写一段话，把图画的内容介绍给大家。注意写清楚图画上有哪些人、他们在干什么、动作和可能说的话。",en:"Look at the picture and write — write a paragraph introducing the picture's content. Note who is in the picture, what they're doing, their actions, and possible dialogue."}},
    readingCorner: {title:"快乐读书吧",titleEn:"Happy Reading Corner",content:{cn:"小故事大道理——阅读中国古代寓言、伊索寓言、克雷洛夫寓言。寓言故事一般比较短小，但背后往往藏着深刻的道理。",en:"Little Stories, Big Lessons — Read Chinese ancient fables, Aesop's Fables, and Krylov's Fables. Fable stories are usually short, but they often contain profound truths."}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 3 — 传统文化 Traditional Culture (9-12) */
/* ═══════════════════════════════════════════ */
{
  id: 3, title: "传统文化", titleEn: "Traditional Culture",
  type: "kewen",
  lessons: [
    {
      id: 9, title: "古诗三首", titleEn: "Three Ancient Poems",
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
      recognizeChars: ["屠","苏","魂","酒","牧","兄","倍"],
      writeChars: ["符","欲","魂","借","酒","何","牧","兄","独","异","佳"],
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
      recognizeChars: ["创","存","普","制","蔡","伦","累","切","便","鲜","欧","洲","社"],
      writeChars: ["伟","录","保","存","约","验","捞","阿","欧","洲","社"],
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
      recognizeChars: ["县","拱","济","匠","计","横","史","爪","智","慧","历"],
      writeChars: ["赵","省","县","匠","设","计","史","创","举","且","智","慧","历"],
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
      recognizeChars: ["择","宫","摊","贩","吏","驴","乘","笼","栏","貌"],
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
    composition: {title:"综合性学习",titleEn:"Comprehensive Learning",prompt:{cn:"中华传统节日——选一个传统节日，写一篇习作。可以写自己家过节的过程，也可以写节日中发生的印象深刻的故事。",en:"Chinese Traditional Festivals — Choose a traditional festival and write about it. You can write about how your family celebrates or describe an impressive festival story."}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 4 — 观察与发现 Observation (13-15)    */
/* ═══════════════════════════════════════════ */
{
  id: 4, title: "观察与发现", titleEn: "Observation & Discovery",
  type: "kewen",
  lessons: [
    {
      id: 13, title: "花钟", titleEn: "The Flower Clock",
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
      recognizeChars: ["芬","芳","内","系","燥","适","雅","吻","组"],
      writeChars: ["芬","芳","内","醒","寿","苏","强","示","昆","修","建","组"],
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
        "So, out of about twenty bees, at least fifteen found their way back without error. Despite flying against the wind through unfamiliar scenery, they truly made it home.",
        "Bees rely not on exceptional memory, but on an instinct I cannot explain."
      ],
      recognizeChars: ["概","阻","测","括","误","逆","途","陌","超"],
      writeChars: ["蜜","蜂","辨","阻","跨","括","检","查","确","误","途","陌"],
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
      recognizeChars: ["隙","掀","稍","逐","末","搏","较","腹"],
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
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"我做了一项小实验——借助图表整理实验信息，用\u201C先……接着……然后……最后……\u201D把做实验的经过写清楚，还可以写写自己的心情和有趣发现。",en:"My Little Experiment — Use charts to organize experiment information. Write the process clearly using 'First...then...next...finally...' and include your feelings and interesting discoveries."}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 5 — 想象 Imagination (Lessons 16-17)  */
/* ═══════════════════════════════════════════ */
{
  id: 5, title: "想象", titleEn: "Imagination",
  type: "kewen",
  lessons: [
    {
      id: 16, title: "宇宙的另一边", titleEn: "The Other Side of the Universe",
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
      recognizeChars: ["淌","秘","栋","吁","绪","篇"],
      writeChars: ["宇","宙","淌","秘","密","栋","梯","铃","乘","绪","篇","越"],
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
      text: [
        "\u201C英英，吃饭了！\u201D",
        "我在树下玩得好好的，一点儿都不想吃饭。",
        "\u201C英英，吃饭了！\u201D妈妈的嗓门又大了许多。",
        "我真希望变成一棵树，这样就没人在你玩的时候叫你吃饭了。我心里想着，就觉得身上痒痒的，低头一看，发现许多小树枝正从我身上冒出来。呀，我真的变成了一棵树！",
        "你猜，我变的树上会长什么？当然不是苹果啦，梨也不对——对了，鸟窝！我变的树上长满了各种形状的鸟窝：三角形的、正方形的，还有长方形的、圆形的、椭圆形的、菱形的……风一吹，它们就在枝头跳起了舞。",
        "我会请小白兔、小刺猬、小松鼠、小鸭子、小鳄鱼、小狐狸住在里面，如果你喜欢也可以住进来。",
        "傍晚的时候，妈妈背着一个大包过来了，我的心嗵嗵地跳着，震得树上的鸟窝都一动一动的，发出丁零丁零的声音。\u201C你好！\u201D妈妈向我点了点头，\u201C请问我可以住在那个三角形的鸟窝里吗？\u201D她不知道我变成了树！我有点儿高兴，又有些失望。",
        "妈妈打开背包，从里面拿出好多东西：巧克力、香肠、面包、花生、牛奶……她把这些好吃的分给小动物们。他们一起在我的鸟窝里津津有味地吃了起来。",
        "\u201C咕噜噜……\u201D我的肚子里发出一种怪怪的声音，把他们吓了一跳。\u201C咕噜噜……\u201D我肚子里的声音越来越响了。这时候，我开始想念家里那些香喷喷的饭菜，好像还看见爸爸正在大口大口地啃着一块糖醋排骨。天哪，那可是我最喜欢吃的东西！",
        "\u201C小馋猫，肚子饿了，对吧？英英！\u201D妈妈说话了，还对我眨了一下眼睛。",
        "噢，最了解我的人到底还是妈妈。哎呀，她是怎么知道我的秘密的？"
      ],
      textEn: [
        "\u201CYingying, time for dinner!\u201D",
        "I was having so much fun under the tree, I didn't want to eat at all.",
        "\u201CYingying, time for dinner!\u201D Mom's voice got much louder.",
        "I really wished I could become a tree, so nobody would call me to eat while I was playing. As I thought this, I felt itchy all over. Looking down, I saw little branches sprouting from my body. Wow, I really turned into a tree!",
        "Guess what grew on my tree? Not apples, not pears — bird nests! My tree was covered with nests of all shapes: triangular, square, rectangular, circular, oval, diamond-shaped... When the wind blew, they danced on the branches.",
        "I'd invite Little Rabbit, Little Hedgehog, Little Squirrel, Little Duck, Little Crocodile, and Little Fox to live in them. If you'd like, you could move in too.",
        "In the evening, Mom came with a big backpack. My heart thumped so hard that the bird nests shook, making jingling sounds. \u201CHello!\u201D Mom nodded at me. \u201CMay I stay in that triangular nest?\u201D She didn't know I had become a tree! I was partly happy, partly disappointed.",
        "Mom opened her backpack and took out lots of things: chocolate, sausages, bread, peanuts, milk... She shared the treats with the little animals. They all ate happily together in my bird nests.",
        "\u201CGurgle...\u201D A strange sound came from my stomach, startling everyone. \u201CGurgle...\u201D The sound got louder and louder. I started missing the delicious food at home, and even seemed to see Dad happily gnawing on a piece of sweet-and-sour spare rib. Goodness, that's my favorite food!",
        "\u201CLittle greedy cat, you're hungry, aren't you? Yingying!\u201D Mom spoke up, winking at me.",
        "Oh, the person who knows me best is still Mom. But how did she discover my secret?"
      ],
      recognizeChars: ["希","痒","鳄","零","肠","醋","馋"],
      writeChars: ["状","狐","狸","腰","零","巧","克","肠","继","续","抬","烦"],
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
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"奇妙的想象——选一个题目写一个想象故事，如\u201C最好玩的国王\u201D\u201C一本有魔法的书\u201D\u201C小树的心思\u201D等。要大胆想象，创造出属于自己的想象世界。",en:"Wonderful Imagination — Choose a topic and write an imagination story, such as 'The Most Fun King', 'A Magic Book', 'The Little Tree's Thoughts'. Be bold and create your own imaginary world."}},
    exampleEssays: {title:"习作例文",titleEn:"Example Essays",content:{cn:"一支铅笔的梦想——铅笔想溜出教室，在山坡上萌芽开花；想跳进荷塘，为小鱼虾撑伞。\n尾巴它有一只猫——反方向想象，猫有尾巴，尾巴也能有猫。",en:"A Pencil's Dream — A pencil wants to escape the classroom, sprout and bloom on a hillside; jump into a lotus pond to hold an umbrella for little fish.\nA Tail Has a Cat — reverse imagination: cats have tails, so a tail can have a cat."}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 6 — 童年 Childhood (Lessons 18-21)   */
/* ═══════════════════════════════════════════ */
{
  id: 6, title: "童年", titleEn: "Childhood",
  type: "kewen",
  lessons: [
    {
      id: 18, title: "童年的水墨画", titleEn: "Childhood Ink Paintings",
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
      recognizeChars: ["墨","染","碎","浪","溅"],
      writeChars: ["墨","染","竿","腾","碎","拨","浪","葫","爽","蘑","菇"],
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
      recognizeChars: ["剃","执","否","骂","仇","惯","刑","替","厘","摸"],
      writeChars: ["表","胆","鬼","理","夺","骂","仇","差","付","倍","虽","泡","件"],
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
      recognizeChars: ["廊","和","悠","若","娇","薄","颤","巍","巅","婴"],
      writeChars: ["皂","廊","剩","碗","悠","若","透","娇","扯","仰","串","婴","希"],
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
        "\u201CI understand. Our Qingling is a child who keeps her word,\u201D Mom smiled. \u201CThen you stay home.\u201D",
        "After seeing her family off, Qingling returned to her room and waited patiently. She picked up a book for a while, then sat at the piano, but today she kept making mistakes on familiar pieces. Yet even when her family returned after lunch, Xiaozhen still hadn't come. Mom said with sympathy: \u201CMy girl home alone — how boring!\u201D Qingling looked up and answered: \u201CBeing home alone is pretty dull. But I don't regret it, because I kept my promise.\u201D"
      ],
      recognizeChars: ["耀","庆","盼","叠","歉"],
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
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"见善则迁，有过则改。——《周易》\n过而不改，是谓过矣。——《论语》\n人谁无过？过而能改，善莫大焉。——《左传》",en:"When you see good, aspire to it; when you have faults, correct them. — Book of Changes\nTo err and not correct is truly an error. — Analerta\nWho among people has no faults? To err and correct is the greatest good. — Zuo Zhuan"}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"读一读，说说两组加点词语意思的不同（\u201C熟\u201D\u201C味道\u201D的不同含义）。下面的例句围绕一个意思来写，选一个开头照样子写一写。",en:"Read and discuss different meanings of highlighted words ('cooked/familiar', 'taste/style'). The example sentences develop one central idea; choose an opening and write similarly."}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"身边那些有特点的人——你还想到了哪些有特点的人？如\u201C热心肠\u201D\u201C昆虫迷\u201D\u201C小书虫\u201D。围绕一个人的特点写一写。",en:"People with Distinctive Traits — Think of people with notable characteristics, like 'warm-hearted', 'insect fanatic', 'bookworm'. Write about one person's distinctive trait."}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 7 — 奇妙的世界 Wonderful World (22-24) */
/* ═══════════════════════════════════════════ */
{
  id: 7, title: "奇妙的世界", titleEn: "Our Wonderful World",
  type: "kewen",
  lessons: [
    {
      id: 22, title: "我们奇妙的世界", titleEn: "Our Wonderful World",
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
        "We see fruits in tempting colors: glossy red cherries, deep purple plums, pale yellow pears.",
        "In summer, resting under a big tree, we marvel at how much shade it provides.",
        "Autumn arrives magically with golden radiance, when roads seem bathed in light. Butterflies spread their beautiful wings and dance gracefully in the air.",
        "In winter, we see icicles hanging from eaves, glittering in the sunlight like sharp swords. When the snow melts, water drops from the eaves like pearls.",
        "If we observe and search carefully, we can find beauty in the most ordinary things — pebbles of all shapes, a model three-masted ship, feathers of every color.",
        "Yes, the wonderful things in this world are endless, if only we look for them."
      ],
      recognizeChars: ["呈","蔚","雕","幻","辉","芒","劲","剑","型"],
      writeChars: ["呈","幻","诱","润","芒","冰","剑","普","通","模","型"],
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
      recognizeChars: ["窃","私","警","肌","章","差","达","胞","煤","储","属"],
      writeChars: ["宁","官","汪","参","攻","推","迅","速","退","轮","煤","铁"],
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
      recognizeChars: ["喂","盈","彤","跪","庙","模","镇","揉"],
      writeChars: ["必","胡","灿","骑","秒","腿","凶","猛","接","庙","威","武","镇"],
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
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"国宝大熊猫——围绕大熊猫的相关问题（是猫吗？生活在哪里？为什么是国宝？），查找资料，介绍一下大熊猫。",en:"National Treasure: Giant Panda — Research and write about giant pandas: Are they cats? Where do they live? Why are they national treasures?"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 8 — 有趣的故事 Fun Stories (25-28)   */
/* ═══════════════════════════════════════════ */
{
  id: 8, title: "有趣的故事", titleEn: "Fun Stories",
  type: "kewen",
  lessons: [
    {
      id: 25, title: "慢性子裁缝和急性子顾客", titleEn: "The Slow Tailor and the Impatient Customer",
      text: [
        "故事发生在冬天。裁缝店里走进一位顾客。",
        "顾客把一卷布料放到桌上，对裁缝说：\u201C我想做件棉袄。我已经跑了三家裁缝店了。第一家说要到秋天才能做好。第二家问我有没有等到夏天的耐心。第三位师傅倒是强些，但他最早也要到开春才能交货。我可等不及，都没让他们做。告诉您，我和别的顾客不一样，我是个性子最急的顾客。请问师傅，您准备让我什么时候来取衣服——秋天？夏天？春天？……\u201D",
        "\u201C不，\u201D裁缝说，\u201C就在冬天。\u201D裁缝又补充一句：\u201C不过，我指的是明年冬天。\u201D",
        "顾客噌的一下子跳起来：\u201C这么慢啊！\u201D裁缝说：\u201C我和别的裁缝不一样，我是个性子最慢的裁缝啊。\u201D",
        "\u201C别走，\u201D裁缝把顾客叫住，\u201C我知道您是个急性子。依我看，我做的活儿最适合您这种性子的顾客啦。\u201D裁缝解释说，按照顾客的性子，他会一拿到衣服就穿上，而在不合时令的季节穿棉袄会被人笑话。裁缝保证让顾客在冬天穿上新棉袄，大家还会围着他直夸奖。",
        "这位顾客歪着头想了想，不得不承认裁缝说得有道理。于是，做衣服的事儿就算说定了。",
        "不料，这位顾客第二天又跑到裁缝店来，说：\u201C我不做棉袄了！把我那棉袄里的棉花拽掉，改成夹袄，让我提前在秋天就能穿上合时的新衣服吧。\u201D裁缝答应了。",
        "可是第三天他又来了。\u201C师傅，把我那夹袄的袖子剪去一截儿，改成夏天能穿的短袖衬衫吧，我实在等不及了。\u201D裁缝点点头：\u201C剪袖子，只要咔嚓咔嚓两剪子，好办得很，没问题。\u201D",
        "又过了一天，那顾客再来的时候，裁缝笑着问他：\u201C怎么，您那件短袖衬衫还能改成什么？\u201D顾客说：\u201C对不起，麻烦您再给我改成春装吧。袖子嘛，把上次剪下来的再接上去就是啦。\u201D",
        "裁缝说：\u201C亲爱的顾客，我要对您负责。我不会让您穿上这么难看的衣裳，这也坏了我的名声啊。\u201D顾客说：\u201C那您别管，只要能让我早些在春天穿上。\u201D",
        "裁缝又拍拍他的肩，说：\u201C您放心，凭我的手艺，不用接袖子也能给您做出一件最漂亮的春装。\u201D",
        "顾客感动极了：\u201C那太谢谢啦。您真的不用接袖子？\u201D\u201C根本不用。\u201D裁缝解释说，\u201C因为您的布在我的柜子里搁着，我还没开始裁料呢。\u201D",
        "顾客惊讶、恼怒地瞪大了眼睛！\u201C您可别忘了，\u201D裁缝提醒他说，\u201C我是个慢性子裁缝啊。\u201D"
      ],
      textEn: [
        "The story takes place in winter. A customer walks into a tailor's shop.",
        "The customer puts a roll of cloth on the table and says to the tailor: \u201CI want a padded jacket made. I've already been to three tailor shops. The first said it wouldn't be ready until autumn. The second asked if I had the patience to wait until summer. The third was a bit better, but the earliest he could deliver was spring. I couldn't wait, so I didn't let any of them do it. I'm different from other customers — I'm the most impatient customer there is. When can I pick up my clothes — autumn? Summer? Spring?...\u201D",
        "\u201CNo,\u201D the tailor said, \u201Cin winter.\u201D Then he added: \u201CThough I mean next winter.\u201D",
        "The customer leaped up: \u201CThat slow!\u201D The tailor replied: \u201CI'm different from other tailors — I'm the slowest tailor there is.\u201D",
        "\u201CDon't leave,\u201D the tailor called after the customer. \u201CI know you're impatient. The way I see it, my work is perfect for someone with your temperament.\u201D He explained that the customer would wear the jacket immediately upon receiving it, and wearing a padded jacket in the wrong season would invite ridicule. The tailor guaranteed the customer would wear the new jacket in winter, and everyone would compliment him.",
        "The customer tilted his head, thought it over, and had to admit the tailor had a point. So the deal was settled.",
        "But the next day, the customer returned: \u201CI don't want a padded jacket anymore! Pull out the cotton and make it a lined jacket so I can wear it in autumn.\u201D The tailor agreed.",
        "On the third day he came back again. \u201CTailor, cut off the sleeves and make it a short-sleeved shirt for summer — I simply can't wait.\u201D The tailor nodded: \u201CCutting sleeves just takes two snips — easy, no problem.\u201D",
        "The next day, the customer returned yet again. The tailor smiled: \u201CSo, what else can that short-sleeved shirt be changed into?\u201D The customer said: \u201CSorry, but could you change it to spring wear? Just reattach the sleeves you cut off.\u201D",
        "The tailor said: \u201CDear customer, I must take responsibility for you. I won't let you wear something so ugly — it would ruin my reputation.\u201D The customer insisted he didn't care, just wanting it ready for spring.",
        "The tailor patted his shoulder: \u201CDon't worry. With my skills, I can make you the most beautiful spring outfit without reattaching any sleeves.\u201D",
        "The customer was moved: \u201CThank you so much! You really don't need to reattach the sleeves?\u201D \u201CNot at all,\u201D the tailor explained, \u201Cbecause your cloth is still sitting in my cabinet — I haven't even started cutting.\u201D",
        "The customer's eyes widened in shock and anger! \u201CDon't forget,\u201D the tailor reminded him, \u201CI'm a slow tailor.\u201D"
      ],
      recognizeChars: ["缝","箱","夸","歪","承","夹","袖","衬","衫","负","泄","艺"],
      writeChars: ["性","卷","货","夹","夸","务","衬","衫","负","责","艺"],
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
      recognizeChars: ["橱","改","蕉","扣","嚷","溜","筒","董"],
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
        "Both trembled with fear. The thief slipped and fell through the roof hole, landing right on the tiger's back. The tiger thought: \u201COh no, 'the leak' has come for me!\u201D and bolted.",
        "The dazed thief felt something furry and thought: \u201COh no, 'the leak' is going to eat me!\u201D He clung to the tiger's neck for dear life.",
        "The tiger carried the thief, the thief rode the tiger — running and running until the tiger's legs nearly gave out and the thief's bones nearly fell apart. At a crooked old tree, the tiger tried to scrape off 'the leak', while the thief tried to jump into the tree. The tiger swerved, and the thief swung up into the branches.",
        "The rain grew heavier. The tiger, somewhat recovered, decided to go back for the donkey. The thief, also recovered, decided to go back to steal the donkey.",
        "The tiger approached the crooked tree just as the thief was climbing down. The thief saw something dark approaching — \u201C'The leak' again!\u201D He scrambled up, but crack — the branch broke, and he tumbled down the slope. The tiger saw something dark falling from above — \u201C'The leak' again!\u201D and fled, also tumbling down the slope.",
        "Tiger and thief rolled down the slope together, covered in mud. They looked at each other and screamed: \u201C'The leak'!\u201D — then both fainted from fright.",
        "Near dawn, the chubby little donkey was calmly eating hay in its pen. The old couple sat up in bed. Drip, drip — they looked up at the roof — sigh, they were afraid of a leak, and now the roof was leaking again!"
      ],
      recognizeChars: ["婆","脊","贼","哩","莫","颠","胶","旋","纵"],
      writeChars: ["漏","喂","胖","驴","贼","狼","莫","厉","抱","架","胶","粘","偏"],
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
        "Long ago, in a village at the foot of a mountain, a couple lived alone. They longed for a child, always sighing: \u201CIf only we could have a child, even one as small as a date pit!\u201D Before long, they indeed had a child the size of a date pit. Overjoyed, they named him \u201CDate Pit.\u201D",
        "Year after year, Date Pit didn't grow at all. His father said: \u201CDate Pit, you got my hopes up for nothing!\u201D His mother said: \u201CDate Pit, you're not growing at all — I'm so worried!\u201D Date Pit replied: \u201CMom, Dad, don't worry. I may be small, but I can do things just the same.\u201D",
        "Date Pit was very diligent, working every day and learning many skills. He could guide a plow, herd donkeys, and gather more firewood than anyone, because he could reach places others couldn't — he could bounce as high as a rooftop. The neighbors all praised Date Pit, and his parents were very proud.",
        "Date Pit was not only diligent but also clever. One drought year, crops failed, yet the county magistrate sent officers to collect grain taxes. When farmers couldn't pay, the officers confiscated their cattle and donkeys.",
        "Everyone was upset. Date Pit said: \u201CDon't worry, I have a plan!\u201D",
        "That night, Date Pit bounced into the magistrate's yard where the animals were tied. When the officers fell asleep, he untied the ropes, bounced into a donkey's ear, and shouted: \u201CHey-ho! Hey-ho!\u201D driving the donkeys out. The officers leaped up and searched everywhere but found no one.",
        "After half the night's commotion, the exhausted officers lay down again — only to hear the shouting again. Date Pit jumped out of the donkey's ear, opened the gate, and drove the animals back to the village.",
        "At dawn, the magistrate led his officers to make arrests. Date Pit bounced out: \u201CI took the animals. What are you going to do about it?\u201D They tried to chain him, but — pop — he slipped right through the chain links, laughing.",
        "The magistrate ordered him stuffed in a money bag and beaten in court. But wherever they struck, Date Pit bounced to the other side — they couldn't hit him at all.",
        "This time Date Pit bounced right onto the magistrate's beard, swinging like a pendulum. \u201CHit him! Hit him!\u201D the magistrate yelled. An officer swung his stick — missed Date Pit — and smashed the magistrate's jaw, knocking out his teeth. The whole court panicked, and Date Pit strolled away proudly."
      ],
      recognizeChars: ["枣","核","妻","爹","犁","聪","折","困","牲","府","罢","涨"],
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
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"这样想象真有趣——如果母鸡能在天空飞翔，如果蚂蚁的个头比树还大，如果蜗牛健步如飞……选一种动物作为主角，大胆想象，编一个童话故事。",en:"Imagination is Fun — What if hens could fly? What if ants were bigger than trees? What if snails could run fast? Choose an animal as the protagonist and boldly imagine a fairy tale."}}
  }
}
]
};
