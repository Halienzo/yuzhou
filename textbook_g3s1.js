/**
 * 字道 ZiDao — 部编版三年级语文上册 教材数据
 * Grade 3 Semester 1 Textbook Data (PEP Edition)
 * Based on: 义务教育教科书 语文 三年级上册 (2018)
 */
var TB_G3S1 = {
grade: 3, semester: 1,
totalRecogChars: 250,
totalWriteChars: 250,
units: [
/* ═══════════════════════════════════════════ */
/*  UNIT 1 — 课文 Texts (Lessons 1-3)         */
/* ═══════════════════════════════════════════ */
{
  id: 1, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 1, title: "大青树下的小学", titleEn: "A Primary School Under the Big Banyan Tree",
      text: [
        "早晨，从山坡上，从坪坝里，从一条条开着绒球花和太阳花的小路上，走来了许多小学生，有汉族的，有傣族的，有景颇族的，还有阿昌族和德昂族的。大家穿戴不同，来到学校，都成了好朋友。那鲜艳的服装，把学校打扮得绚丽多彩。同学们向在校园里欢唱的小鸟打招呼，向敬爱的老师问好，向高高飘扬的国旗敬礼。",
        "\u201C当，当当！当，当当！\u201D大青树上的铜钟敲响了。",
        "上课了，不同民族的小学生，在同一间教室里学习。大家一起朗读课文，那声音真好听！这时候，窗外十分安静，树枝不摇了，鸟儿不叫了，蝴蝶停在花朵上，好像都在听同学们读课文。最有趣的是，跑来了两只猴子。这些山林里的朋友，是那样好奇地听着。下课了，大家在大青树下跳孔雀舞，摔跤，做游戏，招引来许多小鸟，连松鼠也赶来看热闹。",
        "这就是我们可爱的小学，一所边疆的小学。古老的铜钟，挂在大青树粗壮的枝干上。凤尾竹的影子，在洁白的墙上摇晃\u2026\u2026"
      ],
      textEn: [
        "In the morning, from the hillside, from the flatland, from the little paths lined with velvet-ball flowers and sunflowers, many primary school students came walking. There were Han, Dai, Jingpo, Achang, and De\u2019ang children. Dressed differently, they all became friends at school. Their bright, colorful clothes made the school look splendid. The students greeted the singing birds in the schoolyard, said hello to their beloved teachers, and saluted the national flag flying high.",
        "\u201CDong, dong dong! Dong, dong dong!\u201D The bronze bell on the big banyan tree rang out.",
        "Class began. Students of different ethnic groups studied together in the same classroom. Everyone read the text aloud \u2014 what a beautiful sound! At that moment, it was perfectly quiet outside: the branches stopped swaying, the birds stopped singing, butterflies rested on flowers as if listening to the students read. Funniest of all, two monkeys came running. These friends from the mountain forest listened with great curiosity. When class ended, everyone danced the Peacock Dance under the big banyan tree, wrestled, played games, attracting many little birds \u2014 even squirrels came to watch the fun.",
        "This is our lovely school, a school on the frontier. The ancient bronze bell hangs on the big banyan tree\u2019s thick trunk. The shadows of the phoenix-tail bamboo sway on the white walls\u2026"
      ],
      recognizeChars: ["坝","汉","艳","扮","扬","读","摔","跤","凤","洁"],
      writeChars: ["晨","绒","球","汉","艳","服","装","扮","静","停","孔","雀","粗"],
      exercises: [
        {type:"read",cn:"朗读课文，一边读一边想象课文描写的画面",en:"Read the text aloud while imagining the scenes described"},
        {type:"discuss",cn:"这所学校有哪些特别的地方？用自己的话说一说",en:"What is special about this school? Describe it in your own words"},
        {type:"write",cn:"你的学校是什么样的？同学们在学校里做些什么？选择一个场景说一说",en:"What is your school like? What do students do there? Describe a scene"}
      ],
      teachingPoints: [
        {cn:"感受边疆小学的多民族特色，体会团结友爱的氛围",en:"Experience the multi-ethnic character of a frontier school and the atmosphere of unity"},
        {cn:"关注课文中有新鲜感的词语和句子，如\u201C绚丽多彩\u201D\u201C好奇地听着\u201D",en:"Notice fresh and vivid words and phrases such as \u2018colorful and splendid\u2019 and \u2018listening curiously\u2019"}
      ],
      parentTips: [
        {cn:"引导孩子了解中国多民族文化，培养民族团结意识",en:"Guide your child to learn about China\u2019s multi-ethnic culture and foster awareness of ethnic unity"},
        {cn:"和孩子一起找出文中有新鲜感的词句，并尝试用在日常对话中",en:"Find fresh expressions in the text together and try using them in daily conversation"}
      ]
    },
    {
      id: 2, title: "花的学校", titleEn: "The Flower School",
      text: [
        "当雷云在天上轰响，六月的阵雨落下的时候，湿润的东风走过荒野，在竹林中吹着口笛。",
        "于是，一群一群的花从无人知道的地方突然跑出来，在绿草上跳舞，狂欢。",
        "妈妈，我真的觉得那些花朵是在地下的学校里上学。他们关了门做功课。如果他们想在放学以前出来游戏，他们的老师是要罚他们站墙角的。",
        "雨一来，他们便放假了。",
        "树枝在林中互相碰触着，绿叶在狂风里簌簌地响，雷云拍着大手。这时，花孩子们便穿了紫的、黄的、白的衣裳，冲了出来。",
        "你可知道，妈妈，他们的家是在天上，在星星所住的地方。",
        "你没有看见他们怎样地急着要到那儿去吗？你不知道他们为什么那样急急忙忙吗？",
        "我自然能够猜得出他们是对谁扬起双臂来，他们也有他们的妈妈，就像我有我自己的妈妈一样。"
      ],
      textEn: [
        "When thunderclouds rumble in the sky and the June rain falls, the moist east wind passes over the wilderness, blowing whistles in the bamboo grove.",
        "Then, groups of flowers suddenly rush out from places no one knows, dancing on the green grass in a wild celebration.",
        "Mother, I truly believe those flowers go to school underground. They shut their doors and do their lessons. If they want to come out and play before school is over, their teacher makes them stand in the corner.",
        "When the rain comes, they have their holidays.",
        "Branches clash in the forest, green leaves rustle in the storm, and the thunderclouds clap their giant hands. Then the flower children rush out wearing purple, yellow, and white dresses.",
        "Do you know, Mother, their home is in the sky, where the stars live.",
        "Haven\u2019t you seen how eager they are to get there? Don\u2019t you know why they are in such a hurry?",
        "I can surely guess whom they raise their arms to \u2014 they too have their mother, just as I have mine."
      ],
      recognizeChars: ["荒","笛","罚","假","裳"],
      writeChars: ["落","荒","笛","舞","狂","罚","假","互","所","够","猜","扬","臂"],
      exercises: [
        {type:"read",cn:"朗读课文，想象花\u201C在绿草上跳舞，狂欢\u201D的情景",en:"Read aloud and imagine the flowers \u2018dancing on the green grass in celebration\u2019"},
        {type:"write",cn:"\u201C雨一来，他们便放假了。\u201D你喜欢这样的表达吗？照样子写一写",en:"\u2018When the rain comes, they have their holidays.\u2019 Do you like this expression? Write a similar one"},
        {type:"discuss",cn:"读课文时注意加点的部分，体会拟人化的表达",en:"Notice the personification in the text and appreciate the figurative language"}
      ],
      teachingPoints: [
        {cn:"体会泰戈尔散文诗中丰富的想象力和拟人手法",en:"Appreciate the rich imagination and personification in Tagore\u2019s prose poetry"},
        {cn:"学习用拟人手法描写自然事物",en:"Learn to describe natural things using personification"}
      ],
      parentTips: [
        {cn:"和孩子一起朗读，感受诗歌的韵律和想象力",en:"Read aloud together and feel the rhythm and imagination of the poem"},
        {cn:"鼓励孩子观察雨后的花朵，激发想象力",en:"Encourage your child to observe flowers after rain and spark imagination"}
      ]
    },
    {
      id: 3, title: "不懂就要问", titleEn: "If You Don\u2019t Understand, Ask",
      isSelfRead: true,
      text: [
        "孙中山小时候在私塾读书。那时候上课，先生念，学生跟着念，咿咿呀呀，像唱歌一样。学生读熟了，先生就让他们一个一个地背诵。至于书里的意思，先生从来不讲。",
        "一天，孙中山来到学校，照例把书放到先生面前，流利地背出昨天所学的功课。先生听了，连连点头。接着，先生在孙中山的书上又圈了一段，他念一句，叫孙中山念一句。孙中山会读了，就回到座位上练习背诵。孙中山读了几遍，就背下来了。可是，书里说的是什么意思，他一点儿也不懂。孙中山想：这样糊里糊涂地背，有什么用呢？于是，他壮着胆子站起来，问：\u201C先生，您刚才让我背的这段书是什么意思？请您给我讲讲吧！\u201D",
        "这一问，把正在摇头晃脑高声念书的同学们吓呆了，课堂里霎时变得鸦雀无声。",
        "先生拿着戒尺，走到孙中山跟前，厉声问道：\u201C你会背了吗？\u201D",
        "\u201C会背了。\u201D孙中山说着，就把那段书一字不漏地背了出来。",
        "先生收起戒尺，摆摆手让孙中山坐下，说：\u201C我原想，书中的道理，你们长大了自然会知道的。现在你们既然想听，我就讲讲吧！\u201D",
        "先生讲得很详细，大家听得很认真。",
        "后来，有个同学问孙中山：\u201C你向先生提出问题，不怕挨打吗？\u201D",
        "孙中山笑了笑，说：\u201C学问学问，不懂就要问。为了弄清楚道理，就是挨打也值得。\u201D"
      ],
      textEn: [
        "As a child, Sun Yat-sen studied in a private school. In class, the teacher would read and the students would repeat after him \u2014 it sounded like singing. Once students could read fluently, the teacher had them recite one by one. As for the meaning of the text, the teacher never explained.",
        "One day, Sun Yat-sen arrived at school and, as usual, placed his book before the teacher and fluently recited the previous day\u2019s lesson. The teacher nodded approvingly. Then the teacher circled a new passage in Sun Yat-sen\u2019s book and read it sentence by sentence for him to repeat. Once Sun Yat-sen could read it, he went back to his seat to practice reciting. After a few readings, he had it memorized. But he didn\u2019t understand a word of it. Sun Yat-sen thought: What\u2019s the use of memorizing in such confusion? So he gathered his courage, stood up, and asked: \u201CTeacher, what does this passage you just had me memorize mean? Please explain it to us!\u201D",
        "This question startled all the students who were bobbing their heads and reading aloud. The classroom fell silent instantly.",
        "The teacher took his ruler and walked up to Sun Yat-sen, asking sternly: \u201CCan you recite it?\u201D",
        "\u201CYes, I can,\u201D said Sun Yat-sen, and he recited the passage without missing a single word.",
        "The teacher put away his ruler, waved Sun Yat-sen to sit down, and said: \u201CI had thought you would understand the meaning when you grew up. Since you want to hear it now, let me explain.\u201D",
        "The teacher explained in great detail, and everyone listened attentively.",
        "Later, a classmate asked Sun Yat-sen: \u201CWeren\u2019t you afraid of being punished for asking the teacher?\u201D",
        "Sun Yat-sen smiled and said: \u201CLearning means asking. To understand the truth, even a punishment is worthwhile.\u201D"
      ],
      recognizeChars: ["背","诵","例","圈","段","练","糊","涂","呆","戒","厉","挨","楚"],
      exercises: [
        {type:"read",cn:"默读课文，想想课文讲了一件什么事",en:"Read silently and think about what story the text tells"},
        {type:"discuss",cn:"和同学交流你对孙中山\u201C不懂就要问\u201D这件事的看法",en:"Discuss with classmates your view on Sun Yat-sen\u2019s \u2018if you don\u2019t understand, ask\u2019 attitude"}
      ],
      teachingPoints: [
        {cn:"理解\u201C学问学问，不懂就要问\u201D的道理，培养勤学好问的精神",en:"Understand the lesson \u2018learning means asking\u2019 and develop a spirit of curiosity"},
        {cn:"这是一篇略读课文，了解大意即可",en:"This is a self-reading text; understanding the main idea is sufficient"}
      ],
      parentTips: [
        {cn:"鼓励孩子在学习中大胆提问，培养独立思考的习惯",en:"Encourage your child to ask questions boldly and develop independent thinking"},
        {cn:"和孩子聊聊孙中山的故事，了解历史人物",en:"Talk with your child about Sun Yat-sen and learn about historical figures"}
      ]
    }
  ],
  oralComm: {title:"我的暑假生活",titleEn:"My Summer Vacation",prompt:{cn:"暑假你是怎么度过的？经历了哪些新鲜事？和同学分享一下吧！",en:"How did you spend your summer vacation? What new things did you experience? Share with your classmates!"}},
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"所见\n[清] 袁枚\n牧童骑黄牛，歌声振林樾。\n意欲捕鸣蝉，忽然闭口立。",en:"What I Saw\n[Qing] Yuan Mei\nA shepherd boy rides a yellow ox, his song echoes through the forest shade.\nWanting to catch the singing cicada, he suddenly closes his mouth and stands still."}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"摇头晃脑、披头散发、张牙舞爪、提心吊胆、面红耳赤、手忙脚乱、眼疾手快、口干舌燥",en:"Body-part idioms: bobbing heads, hair disheveled, baring fangs, on edge, red-faced, flustered, quick-eyed and nimble, parched"}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"猜猜他是谁——选择一个同学，用几句话或一段话写一写他，不出现名字但让别人能猜出来",en:"Guess Who — Choose a classmate and write a short description without using their name, so others can guess who it is"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 2 — 课文 Texts (Lessons 4-7)         */
/* ═══════════════════════════════════════════ */
{
  id: 2, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 4, title: "古诗三首", titleEn: "Three Ancient Poems",
      text: [
        "山行\n[唐] 杜牧\n远上寒山石径斜，白云生处有人家。\n停车坐爱枫林晚，霜叶红于二月花。",
        "赠刘景文\n[宋] 苏轼\n荷尽已无擎雨盖，菊残犹有傲霜枝。\n一年好景君须记，最是橙黄橘绿时。",
        "夜书所见\n[宋] 叶绍翁\n萧萧梧叶送寒声，江上秋风动客情。\n知有儿童挑促织，夜深篱落一灯明。"
      ],
      textEn: [
        "Mountain Walk\n[Tang] Du Mu\nFar up the cold mountain, a stone path winds aslant; where white clouds rise, there are homes of men.\nI stop my carriage, enchanted by the maple woods at dusk \u2014 the frost-touched leaves are redder than February flowers.",
        "To Liu Jingwen\n[Song] Su Shi\nThe lotuses are gone, no more their rain-shield leaves; chrysanthemums wilt, yet proud branches brave the frost.\nRemember the finest scenery of the year \u2014 it is when oranges are gold and tangerines are green.",
        "Thoughts Written on an Autumn Night\n[Song] Ye Shaoweng\nRustling sycamore leaves send a chill; autumn wind on the river stirs a traveler\u2019s feelings.\nI know children are poking at crickets \u2014 deep in the night, a lamp glows by the wicker fence."
      ],
      recognizeChars: ["径","斜","赠","刘","残","犹","傲","君","橙","橘","挑"],
      writeChars: ["寒","径","斜","霜","赠","刘","盖","菊","残","君","橙","送","挑"],
      exercises: [
        {type:"read",cn:"有感情地朗读课文，背诵课文，默写《山行》",en:"Read with feeling, recite all three poems, and write \u2018Mountain Walk\u2019 from memory"},
        {type:"discuss",cn:"这三首诗写的是哪个季节的景色？你是从哪些地方发现的？",en:"What season do these poems describe? How can you tell?"},
        {type:"vocab",cn:"结合注释，用自己的话说说诗句的意思：\u201C停车坐爱枫林晚，霜叶红于二月花\u201D",en:"Using the notes, explain in your own words: \u2018I stop enchanted by the maple woods at dusk \u2014 frost leaves redder than spring flowers\u2019"}
      ],
      teachingPoints: [
        {cn:"三首古诗都描写秋天景色，体会不同诗人笔下的秋之美",en:"All three poems depict autumn; appreciate how different poets portray autumn\u2019s beauty"},
        {cn:"学习借助注释理解古诗的方法",en:"Learn to use annotations to understand classical poems"},
        {cn:"注意\u201C挑\u201D在\u201C挑促织\u201D中读tiǎo，表示拨弄",en:"Note that \u2018挑\u2019 in \u2018poking at crickets\u2019 is pronounced tiǎo, meaning to poke"}
      ],
      parentTips: [
        {cn:"和孩子一起背诵古诗，感受秋天的美景",en:"Recite the poems together and appreciate autumn scenery"},
        {cn:"带孩子观察秋天的枫叶、菊花等，结合诗句理解",en:"Take your child to observe autumn maple leaves and chrysanthemums, connecting to the poems"}
      ]
    },
    {
      id: 5, title: "铺满金色巴掌的水泥道", titleEn: "Cement Road Covered with Golden Palm Prints",
      text: [
        "一夜秋风，一夜秋雨。",
        "我背着书包去上学时，天开始放晴了。",
        "啊！多么明朗的天空。",
        "可是，地面还是潮湿的，不时还能看见一个亮晶晶的水洼，映着一角小小的蓝天。",
        "道路两旁的法国梧桐树，掉下了一片片金黄金黄的叶子。这一片片闪着雨珠的叶子，一掉下来，便紧紧地粘在湿漉漉的水泥道上了。",
        "我走在院墙外的水泥道上。水泥道像铺上了一块彩色的地毯。这是一块印着落叶图案的、闪闪发光的地毯，从脚下一直铺到很远很远的地方，一直到路的尽头\u2026\u2026",
        "每一片法国梧桐树的落叶，都像一个金色的小巴掌，熨帖地、平展地粘在水泥道上。它们排列得并不规则，甚至有些凌乱，然而，这更增添了水泥道的美。",
        "我一步一步小心地走着，一片一片仔细地数着。我穿着一双棕红色的小雨靴。你瞧，这多像两只棕红色的小鸟，在秋天金黄的叶丛间，愉快地蹦跳着，歌唱着\u2026\u2026",
        "要不是怕上课迟到，我会走得很慢很慢的。",
        "一夜秋风，一夜秋雨。",
        "当我背着书包去上学时，第一回觉得，门前的水泥道真美啊！"
      ],
      textEn: [
        "A night of autumn wind, a night of autumn rain.",
        "When I set off for school with my backpack, the sky began to clear.",
        "Ah! What a bright sky.",
        "But the ground was still damp, and here and there a glittering puddle reflected a small corner of blue sky.",
        "The plane trees along the road had dropped golden leaf after golden leaf. These rain-beaded leaves stuck fast to the wet cement road the moment they fell.",
        "I walked on the cement road outside the courtyard wall. The road looked like a colorful carpet \u2014 a carpet printed with leaf patterns, gleaming, stretching from my feet far, far away to the end of the road\u2026",
        "Every fallen plane-tree leaf looked like a little golden palm, pressed flat and smooth against the cement. They weren\u2019t arranged neatly \u2014 they were even a bit messy \u2014 but that made the road even more beautiful.",
        "I walked step by step, carefully counting each leaf. I wore a pair of reddish-brown rain boots. Look \u2014 they looked like two little reddish-brown birds, hopping and singing happily among the golden autumn leaves\u2026",
        "If I weren\u2019t afraid of being late for class, I would have walked much, much slower.",
        "A night of autumn wind, a night of autumn rain.",
        "When I set off for school with my backpack, for the first time I felt \u2014 the cement road in front of my door is truly beautiful!"
      ],
      recognizeChars: ["洼","印","凌","增","棕","靴"],
      writeChars: ["铺","泥","晶","院","墙","印","排","列","规","则","乱","棕","迟"],
      exercises: [
        {type:"read",cn:"朗读课文，把你喜欢的句子抄写下来",en:"Read aloud and copy down sentences you like"},
        {type:"vocab",cn:"下面加点的词语你是用什么方法理解的？\u201C明朗\u201D\u201C凌乱\u201D",en:"How did you figure out the meanings of \u2018bright and clear\u2019 and \u2018messy\u2019?"},
        {type:"write",cn:"\u201C铺满金色巴掌的水泥道\u201D，多美的发现啊！你在上学路上看到了什么样的景色？",en:"\u2018Cement road covered with golden palms\u2019 \u2014 what a beautiful discovery! What scenery have you seen on your way to school?"}
      ],
      teachingPoints: [
        {cn:"学习用比喻的手法描写日常景物，如\u201C落叶像金色的小巴掌\u201D",en:"Learn to use similes to describe everyday scenes, such as \u2018fallen leaves like golden palms\u2019"},
        {cn:"运用多种方法理解难懂的词语，如联系上下文、查字典",en:"Use various methods to understand difficult words: context clues, dictionary lookup, etc."}
      ],
      parentTips: [
        {cn:"带孩子观察上学路上的秋景，培养细致观察的习惯",en:"Observe autumn scenery on the way to school and develop careful observation habits"},
        {cn:"鼓励孩子用比喻描写身边的事物",en:"Encourage your child to use similes when describing everyday things"}
      ]
    },
    {
      id: 6, title: "秋天的雨", titleEn: "Autumn Rain",
      text: [
        "秋天的雨，是一把钥匙。它带着清凉和温柔，轻轻地，轻轻地，趁你没留意，把秋天的大门打开了。",
        "秋天的雨，有一盒五彩缤纷的颜料。你看，它把黄色给了银杏树，黄黄的叶子像一把把小扇子，扇哪扇哪，扇走了夏天的炎热。它把红色给了枫树，红红的枫叶像一枚枚邮票，飘哇飘哇，邮来了秋天的凉爽。金黄色是给田野的，看，田野像金色的海洋。橙红色是给果树的，橘子、柿子你挤我碰，争着要人们去摘呢！菊花仙子得到的颜色就更多了，紫红的、淡黄的、雪白的\u2026\u2026美丽的菊花在秋雨里频频点头。",
        "秋天的雨，藏着非常好闻的气味。梨香香的，菠萝甜甜的，还有苹果、橘子，好多好多香甜的气味，都躲在小雨滴里呢！小朋友的脚，常被那香味勾住。",
        "秋天的雨，吹起了金色的小喇叭。它告诉大家，冬天快要来了。小松鼠找来松果当粮食，小青蛙在加紧挖洞，准备舒舒服服地睡大觉。松柏穿上厚厚的、油亮亮的衣裳，杨树、柳树的叶子飘到树妈妈的脚下。它们都在准备过冬了。",
        "秋天的雨，带给大地的是一曲丰收的歌，带给小朋友的是一首欢乐的歌。"
      ],
      textEn: [
        "Autumn rain is a key. Gently, gently, with coolness and tenderness, while you aren\u2019t paying attention, it opens the door to autumn.",
        "Autumn rain has a box of colorful paints. Look \u2014 it gives yellow to the ginkgo trees; the golden leaves are like little fans, fanning away summer\u2019s heat. It gives red to the maples; the crimson leaves are like stamps, drifting and drifting, mailing in autumn\u2019s coolness. Golden yellow goes to the fields \u2014 the fields look like a golden ocean. Orange-red goes to the fruit trees \u2014 oranges and persimmons jostle each other, eager to be picked! The chrysanthemum fairies get the most colors: purple-red, pale yellow, snow white\u2026 Beautiful chrysanthemums nod in the autumn rain.",
        "Autumn rain holds wonderful fragrances. Pears smell sweet, pineapples smell sugary, and so many sweet scents from apples and oranges hide in the little raindrops! Children\u2019s feet are often caught by those tempting aromas.",
        "Autumn rain blows its golden trumpet. It tells everyone that winter is coming soon. Little squirrels gather pine cones for food, little frogs hurry to dig holes for a cozy winter sleep. Pines and cypresses put on thick, glossy coats, while poplar and willow leaves flutter down to their tree-mother\u2019s feet. They\u2019re all getting ready for winter.",
        "Autumn rain brings the earth a harvest song, and brings children a song of joy."
      ],
      recognizeChars: ["钥","匙","缤","枚","勾","喇","叭","厚","曲","丰"],
      writeChars: ["盒","颜","料","票","争","仙","闻","勾","紧","洞","油","曲","丰"],
      exercises: [
        {type:"read",cn:"有感情地朗读课文，背诵第2自然段",en:"Read with feeling and recite the second paragraph"},
        {type:"discuss",cn:"课文从哪几个方面写了秋天？和同学交流你感兴趣的内容",en:"From what aspects does the text describe autumn? Discuss what interests you"},
        {type:"write",cn:"想象一下，秋天的雨还会把颜色分给谁呢？照样子写一写",en:"Imagine: who else would autumn rain give colors to? Write a similar passage"}
      ],
      teachingPoints: [
        {cn:"学习课文\u201C总—分\u201D的结构方式，每段开头总写秋雨的特点",en:"Study the \u2018general-to-specific\u2019 structure: each paragraph begins with a general statement about autumn rain"},
        {cn:"体会拟人和比喻在描写秋天中的作用",en:"Appreciate how personification and simile bring autumn descriptions to life"}
      ],
      parentTips: [
        {cn:"和孩子一起在雨天观察秋景，感受课文中的画面",en:"Observe autumn scenes together on a rainy day, connecting to the text\u2019s imagery"},
        {cn:"引导孩子用\u201C秋天的雨是\u2026\u2026\u201D句式练习仿写",en:"Guide your child to practice writing using the pattern \u2018Autumn rain is...\u2019"}
      ]
    },
    {
      id: 7, title: "听听，秋的声音", titleEn: "Listen, the Sounds of Autumn",
      isSelfRead: true,
      text: [
        "听听，秋的声音，大树抖抖手臂，\u201C唰唰\u201D，是黄叶道别的话音。",
        "听听，秋的声音，蟋蟀振动翅膀，\u201C\u201D，是和阳台告别的歌韵。",
        "一排排大雁追上白云，撒下一阵暖暖的叮咛；一阵阵秋风掠过田野，送来一片丰收的歌吟。",
        "听听，走进秋，走进这辽阔透明的音乐厅，你好好地去听——秋的声音。",
        "秋的声音，在每一片叶子里，在每一朵小花上，在每一滴汗水里，在每一颗饱满的谷粒里。",
        "听听，秋的声音，从远方匆匆地来，向远方匆匆地去。听听，我们去听秋的声音。"
      ],
      textEn: [
        "Listen \u2014 the sounds of autumn. A big tree shakes its arms: \u201CSwoosh, swoosh\u201D \u2014 that\u2019s the yellow leaves saying goodbye.",
        "Listen \u2014 the sounds of autumn. A cricket vibrates its wings: \u201CChirp, chirp\u201D \u2014 that\u2019s a farewell song to the balcony.",
        "Rows of wild geese chase the white clouds, scattering warm reminders; gusts of autumn wind sweep across the fields, bringing songs of harvest.",
        "Listen \u2014 step into autumn, into this vast, transparent concert hall. Listen well \u2014 the sounds of autumn.",
        "The sounds of autumn are in every leaf, on every little flower, in every drop of sweat, in every plump grain.",
        "Listen \u2014 autumn\u2019s sounds hurry from afar and hurry away again. Listen \u2014 let us listen to the sounds of autumn."
      ],
      recognizeChars: ["抖","蟋","蟀","振","韵","掠","吟","辽","阔"],
      exercises: [
        {type:"read",cn:"有感情地朗读课文，一边读一边想象，你听到了秋天的哪些声音？",en:"Read with feeling while imagining: what autumn sounds can you hear?"},
        {type:"discuss",cn:"和同学交流：你在秋天还听到了哪些声音？",en:"Discuss with classmates: what other sounds have you heard in autumn?"}
      ],
      teachingPoints: [
        {cn:"体会诗歌中听觉描写的表现力",en:"Appreciate the expressive power of auditory description in poetry"},
        {cn:"感受排比句式的节奏美",en:"Feel the rhythmic beauty of parallel sentence structures"}
      ],
      parentTips: [
        {cn:"带孩子到户外倾听秋天的声音，培养感受力",en:"Take your child outdoors to listen to autumn sounds and develop sensory awareness"},
        {cn:"鼓励孩子仿照诗歌写\u201C听听，秋的声音\u201D的小诗",en:"Encourage your child to write a short poem imitating \u2018Listen, the sounds of autumn\u2019"}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"秋高气爽\u3000天高云淡\u3000秋风习习\n一叶知秋\u3000金桂飘香\u3000层林尽染\n五谷丰登\u3000果实累累\u3000春华秋实",en:"Clear autumn sky, high clouds and light breeze, gentle autumn wind\nOne leaf heralds autumn, osmanthus fragrance, forests dyed in color\nBountiful harvest, fruits in abundance, spring blossoms bring autumn fruit"}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"用描写季节的词语填空：春（暖和、春光明媚）夏（）秋（）冬（）",en:"Fill in seasonal vocabulary: Spring (warm, bright spring days), Summer (), Autumn (), Winter ()"}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"写日记——准备一个日记本，开始写日记吧！坚持写下去，你一定会大有收获",en:"Write a diary \u2014 Get a diary notebook and start writing! Keep it up and you\u2019ll gain a lot"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 3 — 童话 Fairy Tales (Lessons 8-11)   */
/* ═══════════════════════════════════════════ */
{
  id: 3, title: "童话", titleEn: "Fairy Tales",
  type: "tonghua",
  lessons: [
    {
      id: 8, title: "卖火柴的小女孩", titleEn: "The Little Match Girl",
      text: [
        "天冷极了，下着雪，又快黑了。这是一年的最后一夜——大年夜。在这又冷又黑的晚上，一个穷苦的小女孩，没戴帽子，赤着脚在街上走着。她从家里出来的时候还穿着一双拖鞋，但是有什么用呢？那是一双很大的拖鞋——那么大，一向是她妈妈穿的。她穿过马路的时候，两辆马车飞快地冲过来，吓得她把鞋都跑掉了。一只怎么也找不着，另一只叫一个男孩捡起来拿着跑了。他说，将来他有了孩子可以用它当摇篮。",
        "小女孩只好赤着脚走，一双小脚冻得红一块青一块的。她的旧围裙里兜着许多火柴，手里还拿着一把。这一整天，谁也没买过她一根火柴，谁也没给过她一个硬币。",
        "可怜的小女孩！她又冷又饿，哆哆嗦嗦地向前走。雪花落在她金黄的长头发上，那头发打成卷披在肩上，看上去很美丽，不过她没注意这些。每个窗子里都透出灯光来，街上飘着一股烤鹅的香味，因为这是大年夜——她可忘不了这个。",
        "她在一座房子的墙角坐下来，蜷着腿缩成一团。她觉得更冷了。她不敢回家，因为她没卖掉一根火柴，没挣到一个钱，爸爸一定会打她的。再说，家里跟街上一样冷。他们头上只有个房顶，虽然最大的裂缝已经用草和破布堵住了，但风还是可以灌进来。",
        "她的一双小手几乎冻僵了。啊，哪怕一根小小的火柴，对她也是有好处的！她敢从成把的火柴里抽出一根，在墙上擦燃了，来暖和暖和自己的小手吗？她终于抽出了一根。哧！火柴燃起来了，冒出火焰来了！她把小手拢在火焰上。多么温暖多么明亮的火焰啊，简直像一支小小的蜡烛。这是一道奇异的火光！小女孩觉得自己好像坐在一个大火炉前面，火炉装着闪亮的铜脚和铜把手，烧得旺旺的，暖烘烘的，多么舒服啊！唉，这是怎么回事呢？她刚把脚伸出去，想让脚也暖和一下，火柴灭了，火炉不见了。她坐在那儿，手里只有一根烧过了的火柴梗。",
        "她又擦了一根。火柴燃起来了，发出亮光来了。亮光落在墙上，那儿忽然变得像薄纱那么透明，她可以一直看到屋里。桌上铺着雪白的台布，摆着精致的盘子和碗，肚子里填满了苹果和梅子的烤鹅正冒着香气。更妙的是这只鹅从盘子里跳下来，背上插着刀和叉，摇摇摆摆地在地板上走着，一直向这个穷苦的小女孩走来。这时候，火柴灭了，她面前只有一堵又厚又冷的墙。",
        "她又擦着了一根火柴。这一回，她坐在美丽的圣诞树下。这棵圣诞树，比她去年圣诞节透过富商家的玻璃门看到的还要大，还要美。翠绿的树枝上点着几千支明晃晃的蜡烛，许多幅美丽的彩色画片，跟挂在商店橱窗里的一个样，在向她眨眼睛。小女孩向画片伸出双手。这时候，火柴又灭了。只见圣诞树上的烛光越升越高，最后成了在天空中闪烁的星星。有一颗星星落了下来，在天空中划出了一道细长的红光。\u201C有一个什么人快要死了。\u201D小女孩说。唯一疼她的奶奶活着的时候告诉过她：一颗星星落下来，就有一个人要离去了。",
        "她在墙上又擦着了一根火柴。这一回，火柴把周围全照亮了。奶奶出现在亮光里，是那么温和，那么慈爱。\u201C奶奶！\u201D小女孩叫起来，\u201C啊！请把我带走吧！我知道，火柴一灭，您就会不见的，像那暖和的火炉，喷香的烤鹅，美丽的圣诞树一样，就会不见的！\u201D",
        "她赶紧擦着了一大把火柴，要把奶奶留住。一大把火柴发出强烈的光，照得跟白天一样明亮。奶奶从来没有像现在这样高大，这样美丽。奶奶把小女孩抱起来，搂在怀里。她俩在光明和快乐中飞走了，越飞越高，飞到那没有寒冷，没有饥饿，也没有痛苦的地方去了。",
        "第二天清晨，这个小女孩坐在墙角，两腮通红，嘴上带着微笑。她死了，在旧年的大年夜冻死了。新年的太阳升起来了，照在她小小的尸体上。小女孩坐在那儿，手里还捏着一把烧过了的火柴梗。",
        "\u201C她想给自己暖和一下\u2026\u2026\u201D人们说。谁也不知道她曾经看到过多么美丽的东西，她曾经多么幸福，跟着她奶奶一起向新年的幸福中走去。"
      ],
      textEn: [
        "It was terribly cold, snowing, and almost dark. It was the last evening of the year \u2014 New Year\u2019s Eve. In the cold and dark, a poor little girl walked barefoot through the streets. She had been wearing slippers when she left home, but what good were they? They were very large slippers \u2014 so large that her mother always wore them. As she crossed the street, two carriages dashed by so fast that she lost both slippers. One she couldn\u2019t find; a boy grabbed the other and ran off, saying he\u2019d use it as a cradle someday.",
        "The little girl had to walk on with bare feet, which were red and blue from the cold. In her old apron she carried bundles of matches, and she held one bunch in her hand. All day long, nobody had bought a single match; nobody had given her a single coin.",
        "Poor little girl! Cold and hungry, she trembled as she walked on. Snowflakes fell on her beautiful long golden hair, which hung in curls on her shoulders \u2014 but she paid no attention to that. Lights shone from every window, and the smell of roast goose drifted through the street, for it was New Year\u2019s Eve \u2014 she couldn\u2019t forget that.",
        "She sat down in a corner between two houses, drawing her little legs up under her. She felt even colder. She didn\u2019t dare go home \u2014 she hadn\u2019t sold a single match or earned a single penny, and her father would surely beat her. Besides, it was just as cold at home. They only had a roof overhead, and though the biggest cracks had been stuffed with straw and rags, the wind still blew through.",
        "Her little hands were almost frozen stiff. Oh, even one little match would help! Dare she pull one from the bundle and strike it against the wall to warm her hands? She finally pulled one out. Scratch! The match flared up! She cupped her hands over the flame. What a warm, bright flame \u2014 just like a little candle! It seemed to the girl that she was sitting before a great iron stove with shining brass feet and handles, burning so warmly, so comfortably. But when she stretched out her feet to warm them, the match went out, and the stove vanished. She sat there with just a burnt match-end in her hand.",
        "She struck another. The flame lit up the wall, which suddenly became as transparent as gauze. She could see right into a room with a snow-white tablecloth, fine china, and a roast goose stuffed with apples and prunes, steaming deliciously. Even more wonderful \u2014 the goose jumped off the dish with a knife and fork in its back, waddling across the floor straight toward the poor girl. Then the match went out, and there was nothing but the thick, cold wall.",
        "She lit another match. Now she sat under a beautiful Christmas tree, even bigger and more beautiful than the one she had seen last year through the rich merchant\u2019s glass door. Thousands of candles burned on its green branches, and colorful pictures like those in shop windows seemed to wink at her. She reached her hands toward them \u2014 and the match went out. The Christmas lights rose higher and higher until they became twinkling stars. One star fell, drawing a long streak of red light. \u201CSomeone is dying,\u201D the little girl said. Her dear grandmother, the only one who had been kind to her, had told her: when a star falls, a soul goes to God.",
        "She struck another match. This time, the light shone all around, and there stood her grandmother, so gentle, so loving. \u201CGrandmother!\u201D the girl cried. \u201COh, take me with you! I know you\u2019ll disappear when the match goes out \u2014 just like the warm stove, the delicious goose, and the beautiful Christmas tree!\u201D",
        "She quickly struck a whole bundle of matches to keep her grandmother there. They blazed so brightly it was like daylight. Grandmother had never looked so tall and beautiful. She lifted the little girl in her arms. Together they flew in brightness and joy, higher and higher, to a place where there is no cold, no hunger, and no pain.",
        "In the cold morning, the little girl sat in the corner, her cheeks red, a smile on her lips. She was dead \u2014 frozen to death on the last night of the old year. The New Year\u2019s sun rose and shone on the tiny body. She sat there, still holding a bundle of burnt matches.",
        "\u201CShe was trying to warm herself,\u201D people said. But no one knew what beautiful things she had seen, or how happily she had gone with her grandmother into the joy of the New Year."
      ],
      recognizeChars: ["旧","饿","卷","挣","几","燃","焰","蜡","烛","富","晃","划","喷","强","烈"],
      writeChars: ["柴","旧","裙","怜","饿","焰","蜡","烛","伸","忽","板","富","颗"],
      exercises: [
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"小女孩擦燃了几次火柴？每次擦燃后看到了什么，表达了她怎样的愿望？",en:"How many times did the girl light matches? What did she see each time, and what wishes did they express?"},
        {type:"discuss",cn:"和同学交流印象深刻的部分，说说你的感受",en:"Share the most memorable parts with classmates and discuss your feelings"}
      ],
      teachingPoints: [
        {cn:"体会安徒生童话中对比手法的运用——现实的寒冷与幻象的温暖",en:"Appreciate Andersen\u2019s use of contrast: the coldness of reality vs. the warmth of visions"},
        {cn:"感受小女孩的悲惨命运，培养同情心",en:"Feel the tragic fate of the little girl and develop empathy"},
        {cn:"学习通过反复（五次擦燃火柴）推进情节的写作手法",en:"Study how repetition (lighting matches five times) advances the plot"}
      ],
      parentTips: [
        {cn:"和孩子讨论故事结局，引导孩子珍惜幸福生活",en:"Discuss the ending with your child and help them appreciate their own blessings"},
        {cn:"介绍安徒生及其童话作品，拓展阅读视野",en:"Introduce Andersen and his fairy tales to broaden reading horizons"}
      ]
    },
    {
      id: 9, title: "那一定会很好", titleEn: "That Must Feel Great",
      isSelfRead: true,
      text: [
        "种子被泥土紧紧地包裹着，它不得不把身体缩成一团。",
        "\u201C这真难受。\u201D种子想，\u201C我一定要站起来，大口大口地呼吸空气，那一定会很好。\u201D",
        "种子一边想一边努力生长。过了些日子，它长出细细的根、茎和两片小叶子，钻出地面，站在阳光下。",
        "过了很多个日子，它长成了一棵高大的树。",
        "高大的树能看到很远的地方，它看见人和动物在山路上走来走去，跑来跑去。\u201C要是能做一棵会跑的树，那一定会很好。\u201D树这么想着。",
        "一天，一个农夫背了锯子和斧子来到树林里。这棵树的树叶向着农夫哗哗哗地拂动起来，农夫把树砍倒了。",
        "农夫把树拖到自家院子里，花了好些日子，做成了一辆手推车。",
        "农夫把谷子、土豆\u2026\u2026还有调皮的儿子，放在手推车上，推着车在山路上跑来跑去。跑起来的时候，手推车听到耳边呼呼的风声，真舒服。",
        "手推车为农夫服务了很多年，它慢慢变老了，跑起来的时候，骨头会吱吱嘎嘎地响。\u201C要是我能停下来，坐着休息一会儿，那一定会很好。\u201D手推车一边这么想着，一边费力地跑来跑去。",
        "过了些日子，农夫和儿子一起把手推车拆了，用拆下来的旧木料做了把椅子。",
        "椅子一用又是好多年。\u201C我真是老了。\u201D椅子想。它越来越觉得挺直腰背坐着很吃力，\u201C要是我能躺下，那一定会很好。\u201D",
        "现在，农夫的儿子也已经长成了真正的农夫。他把坐上去会吱呀摇晃的椅子拆了，锯成小木片，拼成美丽的木地板，铺在了阳台上。",
        "木地板满意地舒展着身子，躺在阳台上，阳光照在身上，暖洋洋的，舒服极了。它觉得自己又变成了一棵树。"
      ],
      textEn: [
        "The seed was tightly wrapped in soil and had to curl its body into a ball.",
        "\u201CThis is so uncomfortable,\u201D the seed thought. \u201CI must stand up and breathe deeply \u2014 that must feel great.\u201D",
        "The seed thought and grew. After some days, it sprouted thin roots, a stem, and two little leaves, broke through the ground, and stood in the sunlight.",
        "After many days, it grew into a tall tree.",
        "The tall tree could see far away. It watched people and animals walking and running on the mountain path. \u201CIf only I could be a tree that runs \u2014 that must feel great,\u201D the tree thought.",
        "One day, a farmer came to the forest with a saw and an axe. The tree\u2019s leaves rustled toward the farmer, and the farmer cut the tree down.",
        "The farmer dragged the tree to his yard and, over many days, made it into a handcart.",
        "The farmer loaded grain, potatoes, and even his mischievous son onto the handcart, pushing it up and down the mountain path. When it ran, the handcart heard the wind whooshing past \u2014 how comfortable!",
        "The handcart served the farmer for many years and slowly grew old. When it ran, its bones creaked and groaned. \u201CIf only I could stop and rest a while \u2014 that must feel great,\u201D the handcart thought as it struggled along.",
        "After a while, the farmer and his son took the handcart apart and made a chair from the old wood.",
        "The chair served for many more years. \u201CI\u2019m really getting old,\u201D the chair thought. It found sitting upright more and more tiring. \u201CIf only I could lie down \u2014 that must feel great.\u201D",
        "By now, the farmer\u2019s son had grown into a real farmer himself. He took the creaky old chair apart, sawed it into small pieces, and made them into a beautiful wooden floor for the balcony.",
        "The wooden floor stretched out contentedly, lying on the balcony in the warm sunshine, perfectly comfortable. It felt as though it had become a tree once more."
      ],
      recognizeChars: ["缩","努","茎","锯","斧","推","吱","拆"],
      exercises: [
        {type:"read",cn:"默读课文，想一想，从一粒种子到阳台上的木地板，它经过了怎样的历程？",en:"Read silently and think: what journey did it take from a tiny seed to a balcony floor?"},
        {type:"discuss",cn:"试着用自己的话说一说种子的变化历程",en:"Try retelling the seed\u2019s transformation journey in your own words"}
      ],
      teachingPoints: [
        {cn:"体会\u201C那一定会很好\u201D这句反复出现的话，理解不同阶段的愿望",en:"Appreciate the recurring phrase \u2018that must feel great\u2019 and understand the wishes at each stage"},
        {cn:"感受童话中赋予事物生命和情感的写法",en:"Feel how fairy tales give objects life and emotions"}
      ],
      parentTips: [
        {cn:"和孩子讨论\u201C知足常乐\u201D的道理",en:"Discuss the wisdom of contentment with your child"},
        {cn:"引导孩子思考：种子的每次变化都带来了新的体验",en:"Guide your child to reflect: each transformation brought new experiences"}
      ]
    },
    {
      id: 10, title: "在牛肚子里旅行", titleEn: "A Journey Inside a Cow\u2019s Stomach",
      text: [
        "有两只小蟋蟀，一只叫青头，另一只叫红头。它们是一对非常要好的朋友。有一天，吃过早饭，青头对红头说：\u201C咱们玩捉迷藏吧！\u201D",
        "\u201C那让我先藏，你来找。\u201D红头说。",
        "\u201C好吧！\u201D青头说完，转过身子闭上眼睛。",
        "红头向周围看了看，悄悄地躲在一个草堆里不作声了。",
        "\u201C藏好了吗？\u201D青头大声问。红头不说话，只露两只眼睛偷偷地看。它心想：我要是一答应，就会被青头发现。",
        "正在这时，一头大黄牛从红头后面慢慢走过来。红头做梦也没有想到，大黄牛突然低下头来吃草。可怜的红头还没有来得及跳开，就和草一起被大黄牛卷到嘴里了。",
        "\u201C救命啊！救命啊！\u201D红头拼命地叫起来。",
        "\u201C你在哪儿？\u201D青头急忙问。",
        "\u201C我被牛吃了\u2026\u2026正在它的嘴里\u2026\u2026救命啊！救命啊！\u201D",
        "青头大吃一惊，它一下子蹦到牛身上，可是那头牛用尾巴轻轻一扫，青头就给摔到地上了。青头不顾身上的疼痛，一骨碌爬起来大声喊：\u201C躲过它的牙齿，牛在这时候不会仔细嚼的，它会把你和草一起吞到肚子里去\u2026\u2026\u201D",
        "\u201C那我马上就会死掉。\u201D红头哭起来。它和草已经一起进了牛的肚子。",
        "青头又跳到牛身上，隔着肚皮和红头说话：\u201C红头！不要怕，你会出来的。我听说牛肚子里一共有四个胃，前三个胃是贮藏食物的，只有第四个胃才是管消化的！\u201D",
        "\u201C可是你说这些对我有什么用呢？\u201D红头悲哀地说。",
        "\u201C当然有用。等一会儿牛休息的时候，它要把刚才吞进去的草重新送回嘴里，然后细嚼慢咽\u2026\u2026你是勇敢的蟋蟀，你一定能出来的。\u201D",
        "\u201C谢谢你！\u201D红头的声音小得几乎听不见了。它咬着牙不让自己失去知觉。",
        "红头在牛肚子里随着草一起移动，从第一个胃到了第二个胃，又从第二个胃回到了牛嘴里。这一下，红头又看见了光亮。可是，它已经一动也不能动了。",
        "这时，青头爬到牛鼻子上，用它的身体在牛鼻孔里蹭来蹭去。",
        "\u201C阿嚏！\u201D牛打了一个喷嚏，红头随着一团草一下子给喷了出来。",
        "红头看见自己的朋友，高兴得流下了眼泪：\u201C谢谢你\u2026\u2026\u201D",
        "青头笑眯眯地说：\u201C不要哭，就算你在牛肚子里作了一次旅行吧！\u201D"
      ],
      textEn: [
        "There were two little crickets: one named Green Head and the other Red Head. They were the best of friends. One day, after breakfast, Green Head said: \u201CLet\u2019s play hide and seek!\u201D",
        "\u201CLet me hide first, and you find me,\u201D said Red Head.",
        "\u201CAll right!\u201D Green Head turned around and closed his eyes.",
        "Red Head looked around and quietly hid in a pile of grass.",
        "\u201CAre you hidden?\u201D Green Head called out. Red Head stayed silent, only peeking with two eyes. He thought: if I answer, Green Head will find me.",
        "Just then, a big yellow ox slowly walked up behind Red Head. Red Head never dreamed that the ox would suddenly lower its head to eat grass. Poor Red Head didn\u2019t have time to jump away and was scooped into the ox\u2019s mouth along with the grass.",
        "\u201CHelp! Help!\u201D Red Head screamed.",
        "\u201CWhere are you?\u201D Green Head asked urgently.",
        "\u201CI\u2019ve been eaten by the cow\u2026 I\u2019m in its mouth\u2026 Help! Help!\u201D",
        "Green Head was shocked. He jumped onto the ox, but the ox flicked its tail and knocked him to the ground. Ignoring the pain, Green Head scrambled up and shouted: \u201CAvoid its teeth! The cow won\u2019t chew carefully now \u2014 it\u2019ll swallow you with the grass into its stomach!\u201D",
        "\u201CThen I\u2019ll die right away!\u201D Red Head cried. He and the grass had entered the cow\u2019s stomach.",
        "Green Head jumped onto the ox again and spoke to Red Head through its belly: \u201CRed Head! Don\u2019t be afraid \u2014 you\u2019ll get out. I\u2019ve heard that a cow has four stomachs. The first three store food; only the fourth digests it!\u201D",
        "\u201CBut what good does that do me?\u201D Red Head said sadly.",
        "\u201COf course it helps! When the cow rests, it sends the grass back to its mouth to chew again slowly\u2026 You\u2019re a brave cricket \u2014 you\u2019ll definitely get out.\u201D",
        "\u201CThank you!\u201D Red Head\u2019s voice was barely audible. He gritted his teeth to stay conscious.",
        "Red Head traveled with the grass from the first stomach to the second, then back to the cow\u2019s mouth. He could see light again! But he couldn\u2019t move at all.",
        "Then Green Head crawled onto the cow\u2019s nose and rubbed his body inside the nostrils.",
        "\u201CAchoo!\u201D The cow sneezed, and Red Head was blasted out with a wad of grass.",
        "Seeing his friend, Red Head wept with joy: \u201CThank you\u2026\u201D",
        "Green Head smiled: \u201CDon\u2019t cry \u2014 think of it as a trip through a cow\u2019s stomach!\u201D"
      ],
      recognizeChars: ["咱","偷","答","应","骨","齿","嚼","吞","胃","悲","咽","泪","眯"],
      writeChars: ["旅","咱","偷","救","命","拼","扫","胃","管","乎","流","泪","算"],
      exercises: [
        {type:"read",cn:"分角色朗读课文，体会青头和红头对话时的心情",en:"Read with assigned roles and feel the emotions in Green Head and Red Head\u2019s dialogue"},
        {type:"discuss",cn:"从哪里可以看出青头和红头是\u201C非常要好的朋友\u201D？默读全文，至少找出三处",en:"Where can you see that they are \u2018the best of friends\u2019? Find at least three examples"},
        {type:"order",cn:"画出红头在牛肚子里旅行的路线，再把这个故事讲给别人听",en:"Trace Red Head\u2019s route through the cow\u2019s stomach and retell the story"}
      ],
      teachingPoints: [
        {cn:"通过童话故事了解牛的反刍消化过程（四个胃）",en:"Learn about a cow\u2019s rumination and digestion (four stomachs) through a fairy tale"},
        {cn:"体会友谊的力量——青头不顾危险帮助朋友",en:"Appreciate the power of friendship \u2014 Green Head risked danger to help his friend"}
      ],
      parentTips: [
        {cn:"和孩子一起了解牛的消化系统，将知识与故事结合",en:"Learn about the cow\u2019s digestive system together, connecting knowledge with the story"},
        {cn:"和孩子分角色朗读，注意不同情绪的语气变化",en:"Read with roles together, paying attention to different emotional tones"}
      ]
    },
    {
      id: 11, title: "一块奶酪", titleEn: "A Piece of Cheese",
      isSelfRead: true,
      text: [
        "蚂蚁队长集合好队伍，向大家宣布：\u201C今天搬运粮食，只许出力，不许偷嘴。谁偷嘴就要处罚谁。\u201D",
        "一只小蚂蚁在队列里嘀咕：\u201C要是偷嘴的是您呢？\u201D蚂蚁队长说：\u201C照样要受处罚。\u201D",
        "大家一听，都来劲了，争先恐后赶到运粮地点，抢着抬大的，搬重的，谁也不愿偷懒。",
        "就在这时，蚂蚁队长发现了一块大奶酪。那块奶酪实在太大了，它左抬抬不起，右搬搬不动，只好叫来七八只小蚂蚁当助手。",
        "奶酪多诱人啊！抬着它，不要说吃，单是闻闻，都要淌口水。小蚂蚁们嘴叼着它，要做到不趁机舔一下，那要有多大的毅力，多强的纪律性啊！",
        "蚂蚁队长叼着奶酪的一角往前拽着，也许是用力过猛，一下就把那个角拽掉了。盯着那一点儿掉在地上的奶酪渣，蚂蚁队长想：丢掉，实在太可惜；趁机吃掉它，又要犯不许偷嘴的禁令。怎么办呢？它的心七上八下，只好下令：\u201C休息一会儿！\u201D",
        "听到命令，大家放下奶酪，却不走开。",
        "\u201C大家分散开，哪里凉快就到哪里休息。\u201D",
        "大家依旧不动，眼睛望着别处，心却牵挂着那一点儿奶酪渣。",
        "蚂蚁队长生气了。它登上一块大石板，突然下令：\u201C注意啦，全体都有。稍息！立正！向后——转！齐步——走！\u201D等小蚂蚁们消失在草丛中，它才大叫：\u201C立——定！原地休息！\u201D",
        "这时，奶酪旁边只有蚂蚁队长，它要是偷嘴，谁也看不见。它低下头，嗅嗅那点儿奶酪渣，味道真香！可是，它犹豫了一会儿，终于一跺脚：\u201C注意啦，全体都有。稍息！立正！向后——转！齐步——走！\u201D",
        "小蚂蚁们从四面八方的草丛里走拢来了。当它们重新聚到奶酪旁边时，蚂蚁队长命令年龄最小的一只蚂蚁：\u201C这点儿奶酪渣是刚才弄掉的，丢了可惜，你吃掉它吧！\u201D",
        "大家又干起活来了，劲头比刚才更足，奶酪一会儿就被搬进洞里去了。"
      ],
      textEn: [
        "The ant captain assembled the troops and announced: \u201CToday we\u2019re transporting food. Everyone must work hard \u2014 no sneaking bites. Anyone who sneaks a bite will be punished.\u201D",
        "A little ant muttered in the ranks: \u201CWhat if you\u2019re the one who sneaks a bite?\u201D The captain replied: \u201CThen I\u2019ll be punished just the same.\u201D",
        "Hearing this, everyone got excited and rushed to the loading spot, competing to carry the biggest and heaviest loads. No one wanted to slack off.",
        "Just then, the ant captain discovered a huge piece of cheese. It was so large he couldn\u2019t lift it alone, so he called seven or eight ants to help.",
        "How tempting the cheese was! Just carrying it \u2014 never mind eating it \u2014 the smell alone was enough to make mouths water. For the little ants to carry it in their mouths without sneaking a lick required enormous willpower and discipline!",
        "The captain was tugging a corner of the cheese when he accidentally broke off a small piece. Staring at the crumb on the ground, he thought: throwing it away would be a waste; eating it would break the no-sneaking rule. What to do? His heart was torn, so he ordered: \u201CRest break!\u201D",
        "Everyone set down the cheese but didn\u2019t leave.",
        "\u201CSpread out \u2014 find a cool spot to rest.\u201D",
        "No one moved. Their eyes looked away, but their hearts were fixed on that little cheese crumb.",
        "The captain got angry. He climbed onto a big stone slab and barked: \u201CAttention! At ease! Attention! About face! Forward march!\u201D Once the little ants vanished into the grass, he shouted: \u201CHalt! Rest in place!\u201D",
        "Now only the captain stood by the cheese. He could sneak a bite and no one would know. He lowered his head and sniffed \u2014 it smelled wonderful! But after hesitating, he stomped his foot: \u201CAttention! At ease! Attention! About face! Forward march!\u201D",
        "The little ants came back from all directions. When they gathered around the cheese again, the captain ordered the youngest ant: \u201CThis little crumb broke off earlier. It would be a waste to throw it away \u2014 you eat it!\u201D",
        "Everyone got back to work with even more energy than before, and the cheese was carried into the hole in no time."
      ],
      recognizeChars: ["宣","处","诱","舔","毅","犯","禁","稍","豫","跺","聚"],
      exercises: [
        {type:"read",cn:"默读课文，想想课文围绕一块奶酪讲了一件什么事",en:"Read silently and think: what story does the text tell about a piece of cheese?"},
        {type:"discuss",cn:"说说你喜不喜欢文中的蚂蚁队长，理由是什么",en:"Do you like the ant captain? Explain why or why not"}
      ],
      teachingPoints: [
        {cn:"体会蚂蚁队长以身作则、遵守纪律的品质",en:"Appreciate the captain\u2019s quality of leading by example and respecting discipline"},
        {cn:"理解故事中\u201C心七上八下\u201D等心理描写的作用",en:"Understand the role of psychological descriptions like \u2018heart torn\u2019 in the story"}
      ],
      parentTips: [
        {cn:"和孩子讨论\u201C以身作则\u201D的意义",en:"Discuss the importance of \u2018leading by example\u2019 with your child"},
        {cn:"引导孩子理解遵守规则的重要性",en:"Help your child understand the importance of following rules"}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"灯不拨不亮，理不辩不明。\n有理走遍天下，无理寸步难行。\n一时强弱在于力，万古胜负在于理。",en:"A lamp won\u2019t shine without trimming; truth won\u2019t emerge without debate.\nWith reason you can go anywhere; without it, you can\u2019t take a single step.\nMomentary strength depends on force; eternal victory depends on justice."}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"用口字旁的字分类：叼、啃、含、咬、咽、吞、嚼（吃的动作）；嚷、喊、叫、吱、嘀、哗、呜、啪、嘟、嗡（声音）；唤、啼、吵、吼（叫喊）",en:"Classify mouth-radical characters by meaning: eating actions (bite, gnaw, hold, chew, swallow); sounds (yell, shout, screech, buzz); calling/crying"}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"我来编童话——发挥想象，从给定的角色和场景中选择，编一个童话故事",en:"Write Your Own Fairy Tale \u2014 Use your imagination, choose from the given characters and settings, and compose a fairy tale"}},
    happyReading: {title:"快乐读书吧",titleEn:"Happy Reading",prompt:{cn:"在那奇妙的王国里——推荐阅读《安徒生童话》《稻草人》《格林童话》",en:"In That Wonderful Kingdom \u2014 Recommended reading: Andersen\u2019s Fairy Tales, The Scarecrow, Grimm\u2019s Fairy Tales"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 4 — 预测 Prediction (Lessons 12-14)   */
/* ═══════════════════════════════════════════ */
{
  id: 4, title: "预测", titleEn: "Prediction",
  type: "yuce",
  lessons: [
    {
      id: 12, title: "总也倒不了的老屋", titleEn: "The Old House That Never Falls Down",
      text: [
        "老屋已经活了一百多岁了。它的窗户变成了黑窟窿，门板也破了洞。它很久很久没人住了。",
        "\u201C好了，我到了倒下的时候了！\u201D它自言自语着，准备往旁边倒去。",
        "\u201C等等，老屋！\u201D一个小小的声音在它门前响起，\u201C再过一个晚上，行吗？今天晚上有暴风雨，我找不到一个安心睡觉的地方。\u201D",
        "老屋低头看看，吃力地眯起眼睛：\u201C哦，是小猫啊。好吧，我就再站一个晚上。\u201D",
        "第二天，天晴了。小猫从破窗户里跳了出来：\u201C喵喵，谢谢！\u201D",
        "老屋说：\u201C再见！好了，我到了倒下的时候了！\u201D",
        "\u201C等等，老屋！\u201D一个小小的声音在它门前响起，\u201C再过二十几天，行吗？主人想拿走我的蛋，可是我想孵小鸡。我找不到一个安心孵蛋的地方。\u201D",
        "老屋低头看看，墙壁吱吱呀呀地响：\u201C哦，是老母鸡啊。好吧，我就再站二十几天。\u201D",
        "二十多天后，老母鸡从门上的破洞里走了出来，九只小鸡从门板下面叽叽叫着钻了出来：\u201C叽叽，谢谢！\u201D",
        "老屋说：\u201C再见！好了，我到了倒下的时候了！\u201D",
        "\u201C等等，老屋！\u201D一个小极了的声音在它门前响起，不注意根本听不到，\u201C请再站一会儿吧，我肚子好饿好饿，外面的树被砍光了，我找不到一个安心织网抓虫的地方。\u201D",
        "老屋低头看看，眼睛眯成一条缝：\u201C哦，是小蜘蛛啊。好吧，我就再站一会儿。\u201D",
        "小蜘蛛飞快地爬进屋子，在墙角织了一张又大又漂亮的网。偶尔有虫子撞到网上，小蜘蛛马上爬过去把虫子吃掉。",
        "\u201C小蜘蛛，你吃饱了吗？\u201D老屋问。",
        "\u201C没有，没有！\u201D小蜘蛛一边忙着补网，一边回答，\u201C老屋老屋，我给你讲个故事吧！\u201D",
        "老屋想，这倒很有意思。于是它就开始听小蜘蛛讲故事。",
        "小蜘蛛的故事一直没讲完，因此，老屋到现在还站在那儿，边晒太阳，边听小蜘蛛讲故事。"
      ],
      textEn: [
        "The old house was over a hundred years old. Its windows had become dark holes, and its door had broken through. It had been empty for a very long time.",
        "\u201CWell, it\u2019s time for me to fall down!\u201D it said to itself, getting ready to topple over.",
        "\u201CWait, Old House!\u201D A tiny voice spoke up at its door. \u201CJust one more night, please? There\u2019s a storm tonight, and I can\u2019t find a safe place to sleep.\u201D",
        "The old house looked down, squinting with effort: \u201COh, it\u2019s a kitten. All right, I\u2019ll stand one more night.\u201D",
        "The next day the sky was clear. The kitten jumped out through the broken window: \u201CMeow, meow \u2014 thank you!\u201D",
        "The old house said: \u201CGoodbye! Well, it\u2019s time for me to fall down!\u201D",
        "\u201CWait, Old House!\u201D Another small voice spoke up. \u201CJust twenty more days, please? My owner wants to take my eggs, but I want to hatch chicks. I can\u2019t find a safe place to sit on my eggs.\u201D",
        "The old house looked down, its walls creaking: \u201COh, it\u2019s an old hen. All right, I\u2019ll stand twenty more days.\u201D",
        "Twenty-odd days later, the hen walked out through the hole in the door, and nine chicks chirped their way out from under the door: \u201CCheep, cheep \u2014 thank you!\u201D",
        "The old house said: \u201CGoodbye! Well, it\u2019s time for me to fall down!\u201D",
        "\u201CWait, Old House!\u201D An extremely tiny voice spoke up \u2014 you\u2019d miss it if you weren\u2019t paying attention. \u201CPlease stand a little longer. I\u2019m so, so hungry. All the trees outside have been cut down, and I can\u2019t find a safe place to spin a web and catch bugs.\u201D",
        "The old house looked down, eyes narrowed to slits: \u201COh, it\u2019s a little spider. All right, I\u2019ll stand a little longer.\u201D",
        "The spider quickly crawled inside and spun a big, beautiful web in the corner. Occasionally a bug bumped into the web, and the spider hurried over to eat it.",
        "\u201CLittle spider, are you full yet?\u201D the old house asked.",
        "\u201CNo, no!\u201D the spider answered while mending its web. \u201COld House, Old House, let me tell you a story!\u201D",
        "The old house thought that sounded quite interesting. So it began listening to the spider\u2019s story.",
        "The spider\u2019s story has never ended. And so, the old house is still standing there today, basking in the sun and listening to the spider\u2019s story."
      ],
      recognizeChars: ["暴","喵","孵","叽","偶","尔"],
      writeChars: ["准","备","等","暴","睡","壁","砍","蜘","蛛","漂","撞","饱","晒"],
      exercises: [
        {type:"read",cn:"老屋给你留下了什么样的印象？联系插图和课文内容说一说",en:"What impression did the old house leave on you? Describe using the illustrations and text"},
        {type:"discuss",cn:"读课文的过程中，你有没有猜到后面会发生什么？和同学交流",en:"While reading, did you predict what would happen next? Discuss with classmates"},
        {type:"predict",cn:"文章的题目、插图和内容里的线索都可以帮助我们预测",en:"Titles, illustrations, and textual clues can all help us make predictions"}
      ],
      teachingPoints: [
        {cn:"学习\u201C预测\u201D的阅读策略——根据标题、插图、故事线索猜测后续情节",en:"Learn the \u2018prediction\u2019 reading strategy: guess what comes next using titles, illustrations, and story clues"},
        {cn:"体会反复结构在故事中的作用（三次请求）",en:"Appreciate how the repeated structure (three requests) works in the story"},
        {cn:"感受老屋善良、乐于助人的品质",en:"Feel the old house\u2019s kindness and willingness to help"}
      ],
      parentTips: [
        {cn:"和孩子一起读故事，在关键处停下来让孩子猜测后续发展",en:"Read together and pause at key moments to let your child predict what happens next"},
        {cn:"讨论\u201C为什么老屋总也倒不了\u201D，引导理解善良的力量",en:"Discuss \u2018why the old house never falls\u2019 and help your child understand the power of kindness"}
      ]
    },
    {
      id: 13, title: "胡萝卜先生的长胡子", titleEn: "Mr. Carrot\u2019s Long Beard",
      isSelfRead: true,
      text: [
        "胡萝卜先生常常为胡子发愁，因为他长着浓密的胡子，必须每天刮。",
        "有一天，胡萝卜先生匆匆忙忙刮了胡子，就吃着果酱面包上街去了。因为他近视，就没有发现漏刮了一根胡子。这根胡子长在下巴的右边，胡萝卜先生吃果酱面包的时候，胡子沾到了甜甜的果酱。对一根胡子来说，果酱是多么好的营养品啊！",
        "于是，胡萝卜先生一步一步走的时候，这根胡子就在一点儿一点儿地变长。只要看看胡萝卜先生走了多长的路，就可以知道他的这根胡子已经长了多长了。",
        "胡萝卜先生还在继续走，长胡子被风吹到了身体后面，他完全不知道。",
        "在很远的街口，有一个男孩正在放风筝。线实在太短了，他的风筝只能飞过屋顶。胡萝卜先生的胡子刚好在风里飘动着。\u201C这绳子够长了，就是不知道够不够牢固。\u201D小男孩说完就扯了扯胡子，他确定足够牢固，就剪了一段用来放风筝。",
        "胡萝卜先生继续往前走，当他走过鸟太太家的树底下，鸟太太正在找绳子晾小鸟的尿布。胡萝卜先生的胡子刚好在风里飘动着。\u2026\u2026"
      ],
      textEn: [
        "Mr. Carrot was always troubled by his beard, because he had a very thick beard that needed shaving every day.",
        "One day, Mr. Carrot hastily shaved and went out eating a jam sandwich. Being nearsighted, he didn\u2019t notice he had missed one whisker. This whisker was on the right side of his chin, and when he ate the jam sandwich, it got coated with sweet jam. For a whisker, jam is wonderful nourishment!",
        "So as Mr. Carrot walked step by step, the whisker grew bit by bit. You only had to see how far Mr. Carrot had walked to know how long his whisker had grown.",
        "Mr. Carrot kept walking, the long whisker blowing behind him in the wind, without him knowing at all.",
        "Far down the street, a boy was flying a kite. His string was too short \u2014 the kite could only fly above the rooftops. Mr. Carrot\u2019s whisker was fluttering in the wind nearby. \u201CThis rope is long enough \u2014 I just wonder if it\u2019s strong.\u201D The boy tugged on the whisker, decided it was strong enough, and snipped off a piece to fly his kite.",
        "Mr. Carrot continued walking. When he passed under Mrs. Bird\u2019s tree, Mrs. Bird was looking for a line to hang her baby birds\u2019 diapers. Mr. Carrot\u2019s whisker was fluttering in the wind\u2026"
      ],
      recognizeChars: ["萝","卜","愁","沾","晾"],
      exercises: [
        {type:"predict",cn:"故事还没有结束，你认为后来可能会发生什么事情？你为什么这样想？",en:"The story isn\u2019t over. What do you think happens next? Why?"},
        {type:"discuss",cn:"听老师把故事讲完，看看自己的预测和故事有哪些相同和不同",en:"Listen to the teacher finish the story and compare your predictions with the actual ending"}
      ],
      teachingPoints: [
        {cn:"练习预测策略：根据故事的模式（胡子的用处）预测新的情节",en:"Practice prediction strategy: predict new events based on the story pattern (uses of the beard)"},
        {cn:"理解\u201C依据\u201D在预测中的重要性",en:"Understand the importance of \u2018evidence\u2019 when making predictions"}
      ],
      parentTips: [
        {cn:"和孩子一起编更多\u201C胡子的用处\u201D，训练想象力和预测能力",en:"Invent more \u2018uses for the beard\u2019 together to develop imagination and prediction skills"},
        {cn:"鼓励孩子在阅读其他故事时也尝试预测",en:"Encourage your child to practice predicting in other stories too"}
      ]
    },
    {
      id: 14, title: "小狗学叫", titleEn: "The Little Dog Learns to Bark",
      isSelfRead: true,
      text: [
        "从前，有一条不会叫的狗。它不会像狗一样叫，不会像猫一样叫，也不会像牛那样哞哞叫，更不会像马那样嘶鸣。它是一只孤零零的小狗，不知道怎么到了一个没有狗的国家。",
        "\u201C你怎么不叫？\u201D",
        "\u201C我不会\u2026\u2026我是外来的\u2026\u2026\u201D",
        "\u201C这算什么回答啊。你难道不知道狗是会叫的？\u201D",
        "小狗不知道该怎么回答这些批评。它不会叫，也不知道怎么才能学会。",
        "\u201C你跟我学。\u201D有一次，一只同情它的小公鸡对它说。那只小公鸡喔喔喔地叫了几声。小狗试着照小公鸡的样子做，但嘴里只发出一种滑稽的咯咯声，吓得旁边的小母鸡都逃走了。",
        "从此，它天天都练习，从早到晚偷偷地练。一天早晨，它在树林里练习，发出的喔喔喔的叫声是那么逼真，那么好听，那么洪亮。一只狐狸听到了，心里寻思着：公鸡终于来找我了。狐狸真的去了，还没忘记带上刀叉和餐巾。可以想象，当它看见啼叫的是一只狗而不是小公鸡时，该是多么失望啊！",
        "后来一只杜鹃教它\u201C咕咕\u201D叫。小狗学得很好，可是猎人听到咕咕声就开枪射击。小狗吓得拔腿就跑。",
        "故事有三种结局。第一种：小狗遇到了一头小母牛，学\u201C哞哞\u201D叫\u2026\u2026第二种：小狗碰上了一个农民\u2026\u2026第三种：小狗听见了\u201C汪汪\u201D的叫声\u2026\u2026"
      ],
      textEn: [
        "Once upon a time, there was a dog that couldn\u2019t bark. It couldn\u2019t bark like a dog, meow like a cat, moo like a cow, or neigh like a horse. It was a lonely little dog that had somehow ended up in a country with no other dogs.",
        "\u201CWhy don\u2019t you bark?\u201D",
        "\u201CI can\u2019t\u2026 I\u2019m from somewhere else\u2026\u201D",
        "\u201CWhat kind of answer is that? Don\u2019t you know dogs are supposed to bark?\u201D",
        "The little dog didn\u2019t know how to respond to the criticism. It couldn\u2019t bark and didn\u2019t know how to learn.",
        "\u201CLearn from me,\u201D said a sympathetic rooster one day. The rooster crowed a few times. The dog tried to copy him but only made a funny clucking sound that scared the hens away.",
        "From then on, the dog practiced every day, secretly from dawn to dusk. One morning in the forest, its crowing was so lifelike, so beautiful, so loud that a fox heard it and thought: at last, a chicken has come to me! The fox came, bringing a knife, fork, and napkin. Imagine its disappointment when it found a dog crowing instead of a rooster!",
        "Later, a cuckoo taught the dog to say \u201Ccoo-coo.\u201D The dog learned well, but a hunter heard the cooing and fired his gun. The terrified dog ran for its life.",
        "The story has three endings. First: the dog meets a young cow and learns to \u201Cmoo\u201D\u2026 Second: the dog meets a farmer\u2026 Third: the dog hears \u201Cwoof, woof\u201D\u2026"
      ],
      recognizeChars: ["吗","讨","厌","怒","批","访","担","压","差","默","模","中","弹","疯","汪","搞"],
      exercises: [
        {type:"predict",cn:"故事的几种结局可能是怎样的？说说你的理由",en:"What might the different endings be? Explain your reasoning"},
        {type:"discuss",cn:"你喜欢故事的哪些内容？和同学交流",en:"What parts of the story do you like? Discuss with classmates"},
        {type:"read",cn:"选一本同学不熟悉的故事书，读给他们听，在某些地方停下来让他们猜后面的内容",en:"Choose a story book your classmates haven\u2019t read, read it to them, and pause to let them predict"}
      ],
      teachingPoints: [
        {cn:"通过开放式结局练习预测和想象力",en:"Practice prediction and imagination through an open-ended story"},
        {cn:"理解不同结局的可能性与合理性",en:"Understand the possibility and plausibility of different endings"}
      ],
      parentTips: [
        {cn:"和孩子一起讨论三种结局的可能发展，鼓励创造性思维",en:"Discuss the three possible endings together, encouraging creative thinking"},
        {cn:"读其他有悬念的故事，让孩子在关键处猜测结局",en:"Read other suspenseful stories and let your child guess at key moments"}
      ]
    }
  ],
  oralComm: {title:"名字里的故事",titleEn:"Stories in Names",prompt:{cn:"每个人都有名字，你知道自己名字的含义吗？和同学交流名字的含义或来历",en:"Everyone has a name. Do you know the meaning of yours? Share the meaning or story behind names with classmates"}},
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"人心齐，泰山移。\n二人同心，其利断金。\n三个臭皮匠，顶个诸葛亮。\n一个篱笆三个桩，一个好汉三个帮。",en:"When people are united, they can move Mount Tai.\nTwo hearts as one can cut through metal.\nThree cobblers are as wise as Zhuge Liang.\nEvery fence needs three stakes; every hero needs three helpers."}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"多音字辨析：假（假期jiǎ/假扮jiǎ/假装jiǎ/假日jià）；几（几乎jī/几百jǐ/茶几jī）；中（中毒zhòng/中奖zhòng/中间zhōng）；处（处罚chǔ/处分chǔ/到处chù）",en:"Distinguish polyphonic characters: 假 (vacation jiǎ / pretend jiǎ / holiday jià); 几 (almost jī / how many jǐ / table jī); 中 (hit zhòng / middle zhōng); 处 (punish chǔ / place chù)"}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"续写故事——看图想象，接下来可能发生什么？把故事写完",en:"Continue the Story \u2014 Look at the pictures, imagine what might happen next, and finish the story"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 5 — 习作单元 Writing Unit (15-16)     */
/* ═══════════════════════════════════════════ */
{
  id: 5, title: "习作单元", titleEn: "Writing Unit",
  type: "xiezuo",
  lessons: [
    {
      id: 15, title: "搭船的鸟", titleEn: "The Bird on the Boat",
      text: [
        "我和母亲坐着小船，到乡下外祖父家里去。我们坐在船舱里。天下着雨，雨点打在船篷上，沙啦沙啦地响。船夫披着蓑衣在船后用力地摇着橹。",
        "后来雨停了。我看见一只彩色的小鸟站在船头，多么美丽啊！它的羽毛是翠绿的，翅膀带着一些蓝色，比鹦鹉还漂亮。它还有一张红色的长嘴。",
        "它什么时候飞来的呢？它静悄悄地停在船头不知有多久了。它站在那里做什么呢？难道它要和我们一起坐船到外祖父家里去吗？",
        "我正想着，它一下子冲进水里，不见了。可是，没一会儿，它飞起来了，红色的长嘴衔着一条小鱼。它站在船头，一口把小鱼吞了下去。",
        "母亲告诉我，这是一只翠鸟。哦，这只翠鸟搭了我们的船，在捕鱼吃呢。"
      ],
      textEn: [
        "My mother and I were on a small boat, heading to Grandfather\u2019s home in the countryside. We sat in the cabin. It was raining \u2014 raindrops drummed on the boat canopy, making a pitter-patter sound. The boatman wore a straw raincoat and rowed hard at the stern.",
        "Then the rain stopped. I saw a colorful little bird standing on the bow \u2014 how beautiful! Its feathers were emerald green, its wings tinged with blue, even prettier than a parrot. It also had a long red beak.",
        "When had it flown here? It had been sitting quietly on the bow for who knows how long. What was it doing there? Could it be riding our boat to Grandfather\u2019s house?",
        "Just as I was wondering, it suddenly plunged into the water and vanished. But in a moment, it flew back up, a small fish in its long red beak. It perched on the bow and swallowed the fish in one gulp.",
        "Mother told me it was a kingfisher. Oh \u2014 the kingfisher had hitched a ride on our boat to catch fish!"
      ],
      recognizeChars: ["父","啦","鹦","鹉","悄"],
      writeChars: ["搭","亲","父","沙","啦","响","羽","翠","嘴","悄","吞","哦","捕"],
      exercises: [
        {type:"read",cn:"读课文，想想作者对哪些事物作了细致观察，说说你是从哪里看出来的",en:"Read and think about what the author observed carefully. How can you tell?"},
        {type:"vocab",cn:"读下面这段话，注意加点的词语，想象翠鸟捕鱼的情景",en:"Read the paragraph, note the highlighted verbs, and imagine the kingfisher catching fish"},
        {type:"discuss",cn:"作者通过细致观察，发现了翠鸟的美丽外表和捕鱼动作",en:"Through careful observation, the author discovered the kingfisher\u2019s beauty and fishing skills"}
      ],
      teachingPoints: [
        {cn:"体会作者细致观察的方法：颜色、形状、动作",en:"Learn the author\u2019s careful observation methods: color, shape, and movement"},
        {cn:"学习按观察顺序（由整体到局部）描写事物",en:"Learn to describe things in observation order (from whole to detail)"}
      ],
      parentTips: [
        {cn:"带孩子观察身边的鸟类或其他小动物，练习细致观察",en:"Take your child to observe birds or other small animals and practice careful observation"},
        {cn:"引导孩子描述观察到的事物，注意颜色、形状、动作等细节",en:"Guide your child to describe observations, focusing on color, shape, and movement details"}
      ]
    },
    {
      id: 16, title: "金色的草地", titleEn: "The Golden Meadow",
      text: [
        "我们住在乡下，窗前是一大片草地。草地上长满了蒲公英。当蒲公英盛开的时候，这片草地就变成金色的了。",
        "我和弟弟常常在草地上玩耍。有一次，弟弟跑在我前面，我装着一本正经的样子，喊：\u201C谢廖沙！\u201D他回过头来，我就使劲一吹，把蒲公英的绒毛吹到他的脸上。弟弟也假装打哈欠，把蒲公英的绒毛朝我脸上吹。就这样，这些并不引人注目的蒲公英，给我们带来了不少快乐。",
        "有一天，我起得很早去钓鱼，发现草地并不是金色的，而是绿色的。中午回家的时候，我看见草地是金色的。傍晚的时候，草地又变绿了。这是为什么呢？我来到草地上，仔细观察，发现蒲公英的花瓣是合拢的。原来，蒲公英的花就像我们的手掌，可以张开、合上。花朵张开时，花瓣是金色的，草地也是金色的；花朵合拢时，金色的花瓣被包住了，草地就变成绿色的了。",
        "多么可爱的草地！多么有趣的蒲公英！从那时起，蒲公英成了我们最喜爱的一种花。"
      ],
      textEn: [
        "We lived in the countryside. In front of our window was a large meadow full of dandelions. When the dandelions bloomed, the whole meadow turned golden.",
        "My brother and I often played on the meadow. Once, my brother ran ahead of me. I put on a serious face and called: \u201CSeryozha!\u201D When he turned around, I blew a dandelion puff right onto his face. He pretended to yawn and blew dandelion fluff right back at me. These unassuming dandelions brought us so much fun.",
        "One day, I got up very early to go fishing and discovered the meadow wasn\u2019t golden but green. At noon when I came home, the meadow was golden. In the evening, it turned green again. Why? I went to the meadow and observed carefully: the dandelion petals were closed. The dandelion flower is like our palm \u2014 it can open and close. When the flowers open, the golden petals show, and the meadow looks golden; when they close, the golden petals are hidden, and the meadow looks green.",
        "What a lovely meadow! What interesting dandelions! From then on, dandelions became our favorite flower."
      ],
      recognizeChars: ["蒲","英","耍","欠","钓","拢"],
      writeChars: ["蒲","英","盛","耍","喊","欠","钓","而","察","拢","掌","趣","喜"],
      exercises: [
        {type:"read",cn:"朗读课文，一边读一边想象课文描写的场景",en:"Read aloud while imagining the scenes described"},
        {type:"order",cn:"仔细读第3自然段，把下面的内容补充完整：早上草地____，因为蒲公英____；中午草地____；傍晚草地____",en:"Read paragraph 3 carefully and fill in: In the morning the meadow is ___ because dandelions ___; at noon ___; in the evening ___"},
        {type:"discuss",cn:"你留意过哪些事物的变化？和同学交流",en:"What changes in things have you noticed? Discuss with classmates"}
      ],
      teachingPoints: [
        {cn:"学习通过前后对比发现事物变化的观察方法",en:"Learn to discover changes through before-and-after comparison"},
        {cn:"体会细致观察带来的发现和乐趣",en:"Appreciate the discoveries and joy that careful observation brings"}
      ],
      parentTips: [
        {cn:"和孩子一起观察蒲公英或其他花草在不同时间的变化",en:"Observe dandelions or other plants at different times of day together"},
        {cn:"鼓励孩子写观察日记，记录身边事物的变化",en:"Encourage your child to keep an observation diary recording changes in everyday things"}
      ]
    }
  ],
  garden: {
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"我们眼中的缤纷世界——把最近观察时印象最深的一种事物或一处场景写下来",en:"Our Colorful World \u2014 Write about the most impressive thing or scene you observed recently"}},
    exampleEssays: {title:"习作例文",titleEn:"Model Essays",content:{cn:"我家的小狗（描写\u201C王子\u201D的淘气可爱）；我爱故乡的杨梅（描写杨梅的外形、颜色、味道）",en:"My Dog (describing \u2018Prince\u2019s\u2019 mischievous charm); I Love My Hometown\u2019s Bayberries (describing bayberry shape, color, and taste)"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 6 — 课文 Texts (Lessons 17-20)        */
/* ═══════════════════════════════════════════ */
{
  id: 6, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 17, title: "古诗三首", titleEn: "Three Ancient Poems",
      text: [
        "望天门山\n[唐] 李白\n天门中断楚江开，碧水东流至此回。\n两岸青山相对出，孤帆一片日边来。",
        "饮湖上初晴后雨\n[宋] 苏轼\n水光潋滟晴方好，山色空蒙雨亦奇。\n欲把西湖比西子，淡妆浓抹总相宜。",
        "望洞庭\n[唐] 刘禹锡\n湖光秋月两相和，潭面无风镜未磨。\n遥望洞庭山水翠，白银盘里一青螺。"
      ],
      textEn: [
        "Gazing at Tianmen Mountain\n[Tang] Li Bai\nTianmen Mountain splits open for the Chu River to rush through; the blue water flows east and turns back here.\nGreen mountains on both banks face each other; a lone sail comes from beside the sun.",
        "Drinking on the Lake, First Clear Then Rain\n[Song] Su Shi\nShimmering water is beautiful in sunshine; misty hills are wondrous in the rain.\nIf one were to compare West Lake to the beauty Xi Shi \u2014 whether lightly or heavily adorned, she\u2019s always lovely.",
        "Gazing at Dongting Lake\n[Tang] Liu Yuxi\nLake light and autumn moon blend in harmony; the still surface is an unpolished mirror.\nGazing far at Dongting\u2019s green mountains and water \u2014 a green snail on a silver platter."
      ],
      recognizeChars: ["亦","抹","宜","庭","未","磨","盘"],
      writeChars: ["断","楚","至","孤","帆","饮","初","镜","未","磨","遥","银","盘"],
      exercises: [
        {type:"read",cn:"有感情地朗读课文，想象诗中描绘的景色。背诵课文，默写《望天门山》",en:"Read with feeling, imagine the scenery. Recite all and write \u2018Gazing at Tianmen Mountain\u2019 from memory"},
        {type:"vocab",cn:"用自己的话说说诗句的意思：\u201C两岸青山相对出，孤帆一片日边来\u201D\u201C湖光秋月两相和，潭面无风镜未磨\u201D",en:"Explain in your own words: \u2018Green mountains face each other on both banks, a lone sail comes from the sun\u2019 and \u2018Lake light and moon blend; still surface like an unpolished mirror\u2019"}
      ],
      teachingPoints: [
        {cn:"三首诗分别描写天门山、西湖和洞庭湖，感受祖国山水之美",en:"The three poems describe Tianmen Mountain, West Lake, and Dongting Lake \u2014 appreciate China\u2019s natural beauty"},
        {cn:"学习比喻的运用：西湖比西子，洞庭似银盘",en:"Study the use of simile: West Lake compared to Xi Shi; Dongting like a silver platter"},
        {cn:"体会诗人不同的观察角度：李白从江上远望，苏轼在湖上饮酒，刘禹锡远眺",en:"Appreciate different perspectives: Li Bai viewing from the river, Su Shi drinking on the lake, Liu Yuxi gazing from afar"}
      ],
      parentTips: [
        {cn:"和孩子一起查找天门山、西湖、洞庭湖的图片，结合诗句欣赏",en:"Look up pictures of Tianmen Mountain, West Lake, and Dongting Lake together"},
        {cn:"引导孩子背诵并理解诗句的意思",en:"Guide your child to recite and understand the meanings of the verses"}
      ]
    },
    {
      id: 18, title: "富饶的西沙群岛", titleEn: "The Rich Xisha Islands",
      text: [
        "西沙群岛位于南海的西北部，是我国海南省三沙市的一部分。那里风景优美，物产丰富，是个可爱的地方。",
        "西沙群岛一带海水五光十色，瑰丽无比：有深蓝的，淡青的，浅绿的，杏黄的。一块块，一条条，相互交错着。因为海底高低不平，有山崖，有峡谷，海水有深有浅，从海面看，色彩就不同了。",
        "海底的岩石上生长着各种各样的珊瑚，有的像绽开的花朵，有的像分枝的鹿角。海参到处都是，在海底懒洋洋地蠕动。大龙虾全身披甲，划过来，划过去，样子挺威武。",
        "鱼成群结队地在珊瑚丛中穿来穿去，好看极了。有的全身布满彩色的条纹；有的头上长着一簇红缨；有的周身像插着好些扇子，游动的时候飘飘摇摇；有的眼睛圆溜溜的，身上长满了刺，鼓起气来像皮球一样圆。各种各样的鱼多得数不清。正像人们说的那样，西沙群岛的海里一半是水，一半是鱼。",
        "西沙群岛也是鸟的天下。岛上有一片片茂密的树林，树林里栖息着各种海鸟。遍地都是鸟蛋。树下堆积着一层厚厚的鸟粪，这是非常宝贵的肥料。",
        "富饶的西沙群岛，是我们祖祖辈辈生活的地方。随着祖国建设事业的发展，可爱的西沙群岛，必将变得更加美丽，更加富饶。"
      ],
      textEn: [
        "The Xisha Islands are located in the northwest of the South China Sea, part of Sansha City, Hainan Province. The scenery is beautiful, the products abundant \u2014 it is a lovely place.",
        "The sea around the Xisha Islands shimmers with dazzling colors: deep blue, pale turquoise, light green, apricot yellow \u2014 blocks and bands interweaving. Because the seabed is uneven, with cliffs and valleys, the water varies in depth, creating different colors when seen from above.",
        "On the rocky seabed grow all kinds of coral \u2014 some like blooming flowers, some like branching antlers. Sea cucumbers are everywhere, crawling lazily on the bottom. Great lobsters in full armor glide back and forth, looking quite imposing.",
        "Schools of fish weave through the coral in beautiful formations. Some are covered in colorful stripes; some have a tuft of red tassels on their heads; some look as if they have fans stuck all over them, swaying as they swim; some have perfectly round eyes and bodies covered in spines, puffing up like balls. The variety of fish is beyond counting. As people say, half of the Xisha sea is water, and half is fish.",
        "The Xisha Islands are also a paradise for birds. Dense forests cover the islands, sheltering many kinds of seabirds. Bird eggs are scattered everywhere. Thick layers of bird droppings pile under the trees \u2014 extremely valuable fertilizer.",
        "The rich Xisha Islands are where our families have lived for generations. As our nation develops, these lovely islands will become even more beautiful and bountiful."
      ],
      recognizeChars: ["饶","优","瑰","岩","参","武","栖","粪","辈","设"],
      writeChars: ["优","淡","浅","错","岩","虾","挺","刺","鼓","数","厚","宝","贵"],
      exercises: [
        {type:"read",cn:"有感情地朗读课文。说说从哪些地方可以看出西沙群岛风景优美、物产丰富",en:"Read with feeling. Where can you see that the islands have beautiful scenery and rich products?"},
        {type:"discuss",cn:"选择你喜欢的部分，向别人介绍西沙群岛",en:"Choose your favorite part and introduce the Xisha Islands to others"},
        {type:"write",cn:"小练笔：选一幅图，写几句话描写西沙群岛的某个场景",en:"Mini writing: choose a picture and write a few sentences describing a scene from the islands"}
      ],
      teachingPoints: [
        {cn:"学习\u201C总—分—总\u201D的写作结构",en:"Study the \u2018general-specific-general\u2019 writing structure"},
        {cn:"学习围绕关键句展开段落的写法",en:"Learn to develop paragraphs around a key sentence"},
        {cn:"体会比喻和排比在描写景物中的作用",en:"Appreciate how simile and parallelism enhance scenic descriptions"}
      ],
      parentTips: [
        {cn:"和孩子一起了解西沙群岛的地理位置和自然风光",en:"Learn about the Xisha Islands\u2019 location and natural beauty together"},
        {cn:"引导孩子学习围绕中心句写段落的方法",en:"Guide your child in writing paragraphs centered on a topic sentence"}
      ]
    },
    {
      id: 19, title: "海滨小城", titleEn: "The Seaside Town",
      text: [
        "我的家乡在广东，是一座海滨小城。人们走到街道尽头，就可以看见浩瀚的大海。天是蓝的，海也是蓝的。海天交界的水平线上，有棕色的机帆船和银白色的军舰来来往往。天空飞翔着白色的、灰色的海鸥，还飘着跟海鸥一样颜色的云朵。",
        "早晨，机帆船、军舰、海鸥、云朵，都被朝阳镀上了一层金黄色。帆船上的渔民，军舰上的战士，他们的脸和胳臂也镀上了一层金黄色。",
        "海边是一片沙滩，沙滩上遍地是各种颜色、各种花纹的贝壳。这里的孩子见得多了，都不去理睬这些贝壳，贝壳只好寂寞地躺在那里。远处响起了汽笛声，那是出海捕鱼的船队回来了。船上满载着银光闪闪的鱼，还有青色的虾和蟹，金黄色的海螺。船队一靠岸，海滩上就喧闹起来。",
        "小城里每一个庭院都栽了很多树。有桉树、椰子树、橄榄树、凤凰树，还有别的许多亚热带树木。初夏，桉树叶子散发出来的香味，飘得满街满院都是。凤凰树开了花，开得那么热闹，小城好像笼罩在一片片红云中。",
        "小城的公园更美。这里栽着许许多多榕树。一棵棵榕树就像一顶顶撑开的绿绒大伞，树叶密不透风，可以遮太阳，挡风雨。树下摆着石凳，每逢休息的日子，石凳上总是坐满了人。",
        "小城的街道也美。除了沥青的大路，都是用细沙铺成的，踩上去咯吱咯吱地响，好像踩在沙滩上一样。人们把街道打扫得十分干净，甚至连一片落叶都没有。",
        "这座海滨小城真是又美丽又整洁。"
      ],
      textEn: [
        "My hometown in Guangdong is a seaside town. Walking to the end of any street, you can see the vast ocean. The sky is blue; the sea is blue. On the horizon where sky meets sea, brown sailboats and silver warships come and go. White and gray seagulls fly overhead, along with clouds the same color as the gulls.",
        "In the morning, sailboats, warships, seagulls, and clouds are all gilded with golden sunlight. The fishermen on the boats and the sailors on the warships have golden faces and arms too.",
        "By the sea is a beach covered with shells of every color and pattern. The local children are so used to them that they ignore them, leaving the shells to lie lonely. In the distance, a whistle blows \u2014 the fishing fleet is back. The boats are loaded with gleaming silver fish, green shrimp and crabs, and golden conch shells. When the fleet docks, the beach comes alive.",
        "Every courtyard in town is full of trees: eucalyptus, coconut, olive, flame trees, and many other subtropical varieties. In early summer, the eucalyptus fragrance fills every street and yard. When the flame trees bloom, the town seems wrapped in billowing red clouds.",
        "The town\u2019s park is even more beautiful. It\u2019s planted with banyan after banyan, each like a giant green velvet umbrella, its dense leaves blocking sun, wind, and rain. Stone benches sit beneath them, always full of people on holidays.",
        "The town\u2019s streets are beautiful too. Aside from the asphalt main road, they\u2019re paved with fine sand that crunches underfoot, as if you\u2019re walking on a beach. The streets are swept so clean that not a single fallen leaf remains.",
        "This seaside town is truly beautiful and spotless."
      ],
      recognizeChars: ["滨","鸥","胳","臂","睬","载","凰","亚","榕","凳","逢","除"],
      writeChars: ["滨","灰","飘","渔","遍","躺","载","靠","亚","夏","除","踩","洁"],
      exercises: [
        {type:"read",cn:"朗读课文。说说课文写了海滨小城的哪些景象，这些景象是什么样的",en:"Read aloud. What scenes of the seaside town does the text describe? What are they like?"},
        {type:"discuss",cn:"有些句子很重要，可以帮助我们理解一段话的意思，你能从课文中找出来吗？",en:"Some sentences are key to understanding a paragraph\u2019s meaning. Can you find them in the text?"},
        {type:"write",cn:"在课文中画出你认为写得好的句子，抄写下来",en:"Find sentences you think are well-written, highlight them, and copy them down"}
      ],
      teachingPoints: [
        {cn:"学习借助关键语句理解一段话的意思",en:"Learn to understand paragraph meaning through key sentences"},
        {cn:"体会课文\u201C从海上到城里\u201D的空间顺序",en:"Appreciate the spatial order from \u2018sea to town\u2019 in the text"},
        {cn:"找到每段的中心句或关键句",en:"Identify the topic sentence or key sentence of each paragraph"}
      ],
      parentTips: [
        {cn:"引导孩子找出每段话的中心意思",en:"Guide your child to find the central idea of each paragraph"},
        {cn:"和孩子讨论家乡的美景，激发写作兴趣",en:"Discuss hometown scenery with your child to inspire writing interest"}
      ]
    },
    {
      id: 20, title: "美丽的小兴安岭", titleEn: "Beautiful Little Xing\u2019an Mountains",
      text: [
        "我国东北的小兴安岭，有数不清的红松、白桦、栎树\u2026\u2026几百里连成一片，就像绿色的海洋。",
        "春天，树木抽出新的枝条，长出嫩绿的叶子。山上的积雪融化了，雪水汇成小溪，淙淙地流着。溪里涨满了春水。小鹿在溪边散步，它们有的俯下身子喝水，有的侧着脑袋欣赏自己映在水里的影子。",
        "夏天，树木长得葱葱茏茏，密密层层的枝叶把森林封得严严实实的，挡住了人们的视线，遮住了蓝蓝的天空。早晨，雾从山谷里升起来，整个森林浸在乳白色的浓雾里。太阳出来了，千万缕耀眼的金光穿过树梢，照射在工人宿舍门前的草地上。草地上盛开着各种各样的野花，红的、白的、黄的、紫的，真像个美丽的大花坛。",
        "秋天，白桦和栎树的叶子变黄了，松柏显得更苍翠了。秋风吹来，落叶在林间飞舞。这时候，森林向人们献出了酸甜可口的山葡萄，又香又脆的榛子，鲜嫩的蘑菇和木耳，还有人参等名贵药材。",
        "冬天，雪花在空中飞舞。树上积满了白雪。地上的雪厚厚的，又松又软，常常没过膝盖。西北风呼呼地刮过树梢。黑熊躲进自己的洞里冬眠。紫貂捕捉野兔当美餐。松鼠靠秋天收藏在树洞里的松子过日子，有时候还到枝头散散步，看看春天是不是快要来临。",
        "小兴安岭一年四季景色诱人，是一座美丽的大花园，也是一座巨大的宝库。"
      ],
      textEn: [
        "In China\u2019s northeast, the Little Xing\u2019an Mountains are covered with countless red pines, white birches, and oaks, stretching for hundreds of miles like a green ocean.",
        "In spring, trees sprout new branches and grow tender green leaves. Mountain snow melts, forming babbling brooks brimming with spring water. Little deer stroll by the streams \u2014 some bend down to drink, others tilt their heads to admire their reflections.",
        "In summer, trees grow thick and lush. Dense layers of leaves seal the forest tight, blocking views and hiding the sky. In the morning, mist rises from the valleys and the entire forest is bathed in milky white fog. When the sun comes out, thousands of dazzling golden rays pierce through the treetops onto the meadow before the workers\u2019 quarters. Wildflowers of red, white, yellow, and purple bloom on the grass like a beautiful garden.",
        "In autumn, birch and oak leaves turn yellow, while pines and cypresses look even more verdant. Autumn wind sends fallen leaves dancing through the woods. The forest offers sweet mountain grapes, fragrant crisp hazelnuts, tender mushrooms and wood ear fungus, and precious ginseng and other medicinal herbs.",
        "In winter, snowflakes dance in the air. Trees are laden with snow. The ground is covered in thick, soft, fluffy snow that often reaches above the knees. The northwest wind howls through the treetops. Black bears hibernate in their dens. Sables catch wild rabbits for dinner. Squirrels survive on pine nuts stored in tree hollows in autumn, sometimes venturing out to the branches to check if spring is coming.",
        "The Little Xing\u2019an Mountains are enchanting in all four seasons \u2014 a beautiful great garden and a vast treasure house."
      ],
      recognizeChars: ["兴","融","侧","欣","浸","乳","梢","舍","显","材","膝","临","库"],
      writeChars: ["脑","袋","严","实","挡","视","线","坛","显","材","软","刮","库"],
      exercises: [
        {type:"read",cn:"有感情地朗读课文，注意读好文中的长句子",en:"Read with feeling, paying attention to long sentences"},
        {type:"vocab",cn:"读下面的句子，体会加点词语好在哪里：\u201C树木抽出新的枝条\u201D\u201C整个森林浸在乳白色的浓雾里\u201D",en:"Read the sentences and appreciate why the highlighted words work well: \u2018trees sprout new branches\u2019 \u2018the forest is bathed in milky fog\u2019"},
        {type:"discuss",cn:"如果到小兴安岭旅游，你会选择哪个季节去？结合课文内容说说理由",en:"If you could visit the Little Xing\u2019an Mountains, which season would you choose? Explain using the text"}
      ],
      teachingPoints: [
        {cn:"学习按时间（四季）顺序描写景物的方法",en:"Learn to describe scenery in chronological order (four seasons)"},
        {cn:"体会\u201C抽出\u201D\u201C浸\u201D等动词的生动效果",en:"Appreciate the vivid effect of verbs like \u2018sprout\u2019 and \u2018bathe\u2019"},
        {cn:"理解\u201C总—分—总\u201D结构在写景文章中的运用",en:"Understand the \u2018general-specific-general\u2019 structure in descriptive writing"}
      ],
      parentTips: [
        {cn:"和孩子一起了解小兴安岭的四季景色，感受自然之美",en:"Learn about the Little Xing\u2019an Mountains\u2019 seasonal beauty together"},
        {cn:"鼓励孩子用\u201C总—分—总\u201D结构写一段描写家乡某个季节的话",en:"Encourage your child to write about a hometown season using the general-specific-general structure"}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"早发白帝城\n[唐] 李白\n朝辞白帝彩云间，千里江陵一日还。\n两岸猿声啼不住，轻舟已过万重山。",en:"Early Departure from White Emperor City\n[Tang] Li Bai\nAt dawn I leave White Emperor City among colorful clouds;\nA thousand miles to Jiangling, done in a single day.\nApes cry on both banks without ceasing;\nMy light boat has already passed ten thousand mountains."}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"ABB式词语：懒洋洋、慢腾腾、颤巍巍、兴冲冲、静悄悄、空荡荡、乱糟糟、闹哄哄",en:"ABB-pattern words: lazily, slowly, shakily, excitedly, quietly, emptily, messily, noisily"}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"这儿真美——把身边的美景介绍给别人，试着围绕一个意思写",en:"This Place Is Beautiful \u2014 Introduce a beautiful place nearby, writing around one central idea"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 7 — 课文 Texts (Lessons 21-23)        */
/* ═══════════════════════════════════════════ */
{
  id: 7, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 21, title: "大自然的声音", titleEn: "Sounds of Nature",
      text: [
        "大自然有许多美妙的声音。",
        "风，是大自然的音乐家。他会在森林里演奏他的手风琴。当他翻动树叶，树叶便像歌手一样，唱出各种不同的歌曲。不一样的树叶，有不一样的声音；不一样的季节，有不一样的音乐。当微风拂过，那声音轻轻柔柔的，好像呢喃细语，让人感受到大自然的温柔；当狂风吹起，整座森林都激动起来，合奏出一首雄伟的乐曲，那声音充满力量，令人感受到大自然的威力。",
        "水，也是大自然的音乐家。下雨的时候，他喜欢玩打击乐器。小雨滴敲敲打打，一场热闹的音乐会便开始了。滴滴答答\u2026\u2026叮叮咚咚\u2026\u2026所有的树林，树林里的每片树叶；所有的房子，房子的屋顶和窗户，都发出不同的声音。当小雨滴汇聚起来，他们便一起唱着歌：小溪淙淙，流向河流；河流潺潺，流向大海；大海哗哗，汹涌澎湃。从一首轻快的山中小曲，唱到波澜壮阔的海洋大合唱。",
        "动物是大自然的歌手。走在公园里，听听树上叽叽喳喳的鸟叫；坐在一棵树下，听听唧哩哩唧哩哩的虫鸣；在水塘边散步，听听青蛙的歌唱。你知道他们唱的是什么吗？他们的歌声好像告诉我们：\u201C我在歌唱，我很快乐！\u201D"
      ],
      textEn: [
        "Nature has many wonderful sounds.",
        "Wind is nature\u2019s musician. He plays his accordion in the forest. When he turns the leaves, they sing different songs like singers. Different leaves make different sounds; different seasons bring different music. When a gentle breeze passes, the sound is soft and whispery, like murmured words, letting you feel nature\u2019s tenderness. When a gale blows, the whole forest stirs with excitement, playing a grand symphony full of power, letting you feel nature\u2019s might.",
        "Water is also nature\u2019s musician. When it rains, water loves playing percussion. Little raindrops tap and drum, and a lively concert begins. Drip-drop\u2026 ding-dong\u2026 Every tree, every leaf in the forest, every house, every rooftop and window \u2014 all produce different sounds. When raindrops come together, they sing: brooks babble toward rivers; rivers murmur toward the sea; the sea roars and surges. From a light mountain tune to a grand ocean chorus.",
        "Animals are nature\u2019s singers. Walk in a park and hear the birds chattering in the trees; sit under a tree and hear insects chirping; stroll by a pond and hear frogs singing. Do you know what they\u2019re singing about? Their songs seem to tell us: \u201CI\u2019m singing \u2014 I\u2019m happy!\u201D"
      ],
      recognizeChars: ["妙","奏","呢","喃","伟","击","汇","喳","唧","哩"],
      writeChars: ["妙","演","奏","琴","感","受","激","击","器","滴","敲","鸣","诉"],
      exercises: [
        {type:"read",cn:"朗读课文，体会大自然声音的美妙。背诵第2～3自然段",en:"Read aloud, appreciate nature\u2019s beautiful sounds. Recite paragraphs 2-3"},
        {type:"order",cn:"填一填，再说说课文写了大自然的哪些声音：大自然有许多美妙的声音→风，是大自然的音乐家→\u2026\u2026",en:"Fill in the outline: Nature has many wonderful sounds \u2192 Wind is nature\u2019s musician \u2192 ..."},
        {type:"write",cn:"小练笔：你听到过哪些\u201C美妙的声音\u201D？试着写几句话",en:"Mini writing: What \u2018wonderful sounds\u2019 have you heard? Write a few sentences"}
      ],
      teachingPoints: [
        {cn:"学习\u201C总—分\u201D结构：总写大自然声音美妙，分写风、水、动物",en:"Study the general-to-specific structure: general statement about nature\u2019s sounds, then wind, water, animals"},
        {cn:"体会拟人手法：风是\u201C音乐家\u201D，水是\u201C音乐家\u201D，动物是\u201C歌手\u201D",en:"Appreciate personification: wind as \u2018musician\u2019, water as \u2018musician\u2019, animals as \u2018singers\u2019"},
        {cn:"积累描写声音的词语：呢喃细语、滴滴答答、叮叮咚咚、淙淙、潺潺、汹涌澎湃",en:"Accumulate sound-description vocabulary: whisper, drip-drop, ding-dong, babble, murmur, surge"}
      ],
      parentTips: [
        {cn:"带孩子到公园、河边、树林里聆听大自然的声音",en:"Take your child to parks, riversides, and forests to listen to nature\u2019s sounds"},
        {cn:"引导孩子用拟人手法描写听到的声音",en:"Guide your child to describe sounds using personification"}
      ]
    },
    {
      id: 22, title: "读不完的大书", titleEn: "The Never-ending Big Book",
      text: [
        "我五六岁时，就喜欢到大自然中去寻找好玩的东西。高远的天空，广阔的大地，空中的浮云飞鸟，水里的虾蟹游鱼，地上的走兽昆虫、花草树木\u2026\u2026世界万物，不仅好玩，还让人沉思和遐想。",
        "小麻雀叽叽喳喳、蹦蹦跳跳的，叫人愉悦。老鹰在高空盘旋，展翅滑翔，突然猛扑而下，给人以雄健勇猛的感觉。蚂蚁搬家，井然有序，当两军对垒时，那勇敢忠贞的精神，真叫人敬佩。",
        "植物的开花、结籽，暑寒荣枯，有着不同的趣味。花儿有红的、黄的、紫的、蓝的，形状有单瓣的、重瓣的，千姿百态。草的叶子各不相同，有长有短，有宽有窄，有的还带着刺。",
        "我家房子前后栽有各种果树，有梨树、桃树、橘子树、柚子树，在不同的时间里，它们开不同的花，结不同的果。刚从树上摘下的果子，味道格外鲜美。",
        "我最喜爱的，是我家屋后的两丛竹子和一株棕榈。竹子长得快，雨后春笋，一天长几寸，没几天就长得和我一样高了。微风吹来，沙沙的竹叶声，如同温柔的细语。池塘边的棕榈树高大挺拔，大蒲扇似的叶子在风中摇摆，一副超凡脱俗的样子。在秋高气爽的日子里，它倒映在池塘的水中，小鱼在倒影间游玩，又是另一种境界。",
        "大自然是一本看不完的大画册，是一部永远读不完的大书，里面有无穷的奥秘，有无尽的乐趣。"
      ],
      textEn: [
        "When I was five or six, I loved exploring nature for interesting things. The high sky, the vast land, floating clouds and flying birds, shrimp, crabs, and fish in the water, animals, insects, flowers, and trees on the ground\u2026 Everything in the world was not only fun but also made me think and dream.",
        "Little sparrows chattered and hopped, bringing joy. Eagles circled high, gliding on spread wings, then swooped down \u2014 giving a sense of power and courage. Ants moving house, marching in perfect order; when two armies clashed, their brave and loyal spirit was truly admirable.",
        "Plants blooming, setting seed, thriving in summer and withering in winter \u2014 each had its own charm. Flowers came in red, yellow, purple, blue; single-petaled or double-petaled, in countless forms. Grass blades were all different \u2014 long, short, wide, narrow \u2014 some even had thorns.",
        "Various fruit trees grew around our house: pear, peach, tangerine, and pomelo trees, blooming and bearing fruit at different times. Fruit picked fresh from the tree tasted extraordinarily good.",
        "My favorites were the two clumps of bamboo and one palm tree behind our house. Bamboo grows fast \u2014 after spring rain, shoots grow several inches a day and soon stand as tall as me. A breeze rustles the bamboo leaves like gentle whispers. The tall, stately palm tree by the pond had fan-like leaves swaying in the wind, looking supremely elegant. On clear autumn days, it reflected in the pond while little fish played among the reflections \u2014 another realm entirely.",
        "Nature is an endless picture book, a never-ending great book, full of infinite mysteries and boundless joy."
      ],
      recognizeChars: ["仅","麻","旋","佩","姿","态","梨","笋","寸","副","爽"],
      writeChars: ["读","麻","勇","蚂","蚁","短","栽","梨","寸","柔","摇","册"],
      exercises: [
        {type:"read",cn:"朗读课文，感受大自然的乐趣",en:"Read aloud and feel the joy of nature"},
        {type:"vocab",cn:"课文描写了大自然中哪些\u201C好玩的东西\u201D？找出生动的语句读一读",en:"What \u2018interesting things\u2019 does the text describe? Find vivid sentences and read them"},
        {type:"write",cn:"在大自然这本\u201C读不完的大书\u201D中，你都读到了什么？仿照课文写一写",en:"What have you \u2018read\u2019 in nature\u2019s \u2018endless book\u2019? Write about it, imitating the text"}
      ],
      teachingPoints: [
        {cn:"体会作者对大自然的热爱和细致观察",en:"Appreciate the author\u2019s love for nature and careful observation"},
        {cn:"学习生动描写动物和植物的方法：动作、声音、形状、颜色",en:"Learn vivid ways to describe animals and plants: actions, sounds, shapes, colors"},
        {cn:"感受比喻\u201C大自然是一本读不完的大书\u201D的深意",en:"Understand the deeper meaning of the metaphor \u2018nature is a never-ending book\u2019"}
      ],
      parentTips: [
        {cn:"和孩子一起去大自然中寻找\u201C好玩的东西\u201D",en:"Go out into nature together to find \u2018interesting things\u2019"},
        {cn:"鼓励孩子仿照课文写几段关于自然观察的文字",en:"Encourage your child to write nature observations imitating the text"}
      ]
    },
    {
      id: 23, title: "父亲、树林和鸟", titleEn: "Father, Woods, and Birds",
      text: [
        "父亲一生最喜欢树林和歌唱的鸟。",
        "童年时，一个春天的黎明，父亲带着我从滹沱河岸的一片树林边走过。",
        "父亲突然站定，朝幽深的雾蒙蒙的树林，上上下下地望了又望，用鼻子闻了又闻。",
        "\u201C林子里有不少鸟。\u201D父亲喃喃着。",
        "并没有看见一只鸟飞，并没有听到一声鸟叫。",
        "我茫茫然地望着凝神静气的像树一般兀立的父亲。",
        "父亲指着一棵树的一根树枝对我说：\u201C看那里，没有风，叶子为什么在动？\u201D",
        "我仔细找，没有找到动着的那几片叶子。",
        "\u201C还有鸟味。\u201D父亲轻声说，他生怕惊动鸟。",
        "我只闻到浓浓的苦苦的草木气息，没有闻到什么鸟的气味。",
        "\u201C鸟也有气味？\u201D",
        "\u201C有。树林里过夜的鸟总是一群，羽毛焐得热腾腾的。\u201D",
        "\u201C黎明时，所有的鸟都抖动着羽毛，要抖净露水和湿气。\u201D",
        "\u201C每一个张开的喙都舒畅地呼吸着，深深地呼吸着。\u201D",
        "\u201C鸟要准备歌唱了。\u201D",
        "父亲和我坐在树林边，鸟真的唱了起来。",
        "\u201C这是树林和鸟最快活的时刻。\u201D父亲说。",
        "我知道父亲此时也最快活。",
        "过了几天，父亲对我说：\u201C鸟最快活的时刻，飞离树枝的那一瞬间，容易被猎人打中。\u201D",
        "\u201C为什么？\u201D我惊愕地问。",
        "父亲说：\u201C黎明时的鸟，翅膀潮湿，飞起来沉重。\u201D",
        "我真高兴，父亲不是猎人。"
      ],
      textEn: [
        "My father loved trees and singing birds his whole life.",
        "In my childhood, one spring dawn, Father took me past a grove of trees along the banks of the Hutuo River.",
        "Father suddenly stopped. He gazed up and down into the deep, misty forest, and sniffed the air again and again.",
        "\u201CThere are many birds in the woods,\u201D Father murmured.",
        "Not a single bird was flying, not a single bird was calling.",
        "I stared blankly at my father, who stood still and focused, as motionless as a tree.",
        "Father pointed to a branch and said: \u201CLook there \u2014 there\u2019s no wind, so why are the leaves moving?\u201D",
        "I looked carefully but couldn\u2019t find the moving leaves.",
        "\u201CAnd there\u2019s the smell of birds,\u201D Father whispered, afraid of startling them.",
        "I could only smell the strong, bitter scent of grass and trees \u2014 no bird smell at all.",
        "\u201CBirds have a smell?\u201D",
        "\u201CYes. Birds that sleep in the woods always gather in flocks; their feathers get warm and toasty overnight.\u201D",
        "\u201CAt dawn, all the birds shake their feathers to shake off the dew and dampness.\u201D",
        "\u201CEvery open beak breathes freely, taking deep, deep breaths.\u201D",
        "\u201CThe birds are getting ready to sing.\u201D",
        "Father and I sat at the edge of the woods, and the birds really did begin to sing.",
        "\u201CThis is the happiest moment for the woods and the birds,\u201D Father said.",
        "I knew Father was happiest at this moment too.",
        "A few days later, Father said to me: \u201CAt their happiest moment, the instant birds leave their branches, they\u2019re easiest for hunters to hit.\u201D",
        "\u201CWhy?\u201D I asked in surprise.",
        "Father said: \u201CAt dawn, birds\u2019 wings are damp \u2014 they fly heavily.\u201D",
        "I\u2019m so glad my father was not a hunter."
      ],
      recognizeChars: ["黎","凝","畅","瞬","猎"],
      writeChars: ["朝","雾","蒙","鼻","总","抖","露","湿","吸","猎","翅","膀","重"],
      exercises: [
        {type:"read",cn:"默读课文，想一想：为什么说\u201C我真高兴，父亲不是猎人\u201D？",en:"Read silently and think: why does the narrator say \u2018I\u2019m so glad Father was not a hunter\u2019?"},
        {type:"discuss",cn:"你同意下面这些对父亲的判断吗？说说理由：父亲一生最喜欢树林和鸟/父亲对鸟的习性十分了解/父亲很善于观察",en:"Do you agree with these judgments about Father? Explain: He loves trees and birds / He knows bird habits well / He is a keen observer"},
        {type:"vocab",cn:"读句子，说说加点部分给你什么感受：\u201C朝幽深的雾蒙蒙的树林\u201D\u201C凝神静气的像树一般兀立的父亲\u201D",en:"Read the sentences and describe your impressions of the highlighted phrases"}
      ],
      teachingPoints: [
        {cn:"体会父亲对大自然和鸟类的深厚感情",en:"Appreciate Father\u2019s deep feelings for nature and birds"},
        {cn:"学习通过对话展现人物性格的方法",en:"Learn how to reveal character through dialogue"},
        {cn:"感受课文结尾的深意——爱鸟的人不会伤害鸟",en:"Feel the deep meaning of the ending: someone who loves birds would never harm them"}
      ],
      parentTips: [
        {cn:"和孩子在清晨去树林里听鸟叫，体验课文中的场景",en:"Take your child to a forest at dawn to hear birdsong, experiencing the text\u2019s scene"},
        {cn:"引导孩子理解热爱自然、保护鸟类的意义",en:"Help your child understand the importance of loving nature and protecting birds"}
      ]
    }
  ],
  oralComm: {title:"身边的\u201C小事\u201D",titleEn:"Small Things Around Us",prompt:{cn:"你的身边有哪些令人感到温暖的行为或不文明的行为？和小组同学交流你的看法",en:"What warm or uncivilized behaviors have you noticed around you? Share your views with your group"}},
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"采莲曲\n[唐] 王昌龄\n荷叶罗裙一色裁，芙蓉向脸两边开。\n乱入池中看不见，闻歌始觉有人来。",en:"Lotus-picking Song\n[Tang] Wang Changling\nLotus leaves and silk skirts are the same green; lotus blooms on both sides frame her face.\nShe disappears among the lotus in the pond; only her song reveals someone is there."}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"顶针句式：小溪淙淙，流向河流；河流潺潺，流向大海；大海哗哗，汹涌澎湃。\n练习\u201C得\u201D字句：它的声音小得几乎听不见了/王老师急得直跺脚/他跑得像兔子一样快",en:"Chain sentences: brook babbles to river; river murmurs to sea; sea roars and surges.\nPractice \u2018de\u2019 complements: voice so soft it was barely audible / teacher stamped in frustration / he ran fast as a rabbit"}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"我有一个想法——生活中有哪些现象或问题引起了你的关注？把现象和你的想法写清楚",en:"I Have an Idea \u2014 What issues or phenomena in life have caught your attention? Write about them clearly with your thoughts"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 8 — 课文 Texts (Lessons 24-27)        */
/* ═══════════════════════════════════════════ */
{
  id: 8, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 24, title: "司马光", titleEn: "Sima Guang",
      text: [
        "群儿戏于庭，一儿登瓮，足跌没水中。众皆弃去，光持石击瓮破之，水迸，儿得活。"
      ],
      textEn: [
        "A group of children were playing in the courtyard. One child climbed onto a large water jar and slipped, falling into the water. All the others ran away in fright. Only Sima Guang picked up a stone and smashed the jar. Water gushed out, and the child was saved."
      ],
      recognizeChars: ["司","跌","皆","弃","持"],
      writeChars: ["司","庭","登","跌","众","弃","持"],
      exercises: [
        {type:"read",cn:"跟着老师朗读课文，注意词句间的停顿。背诵课文",en:"Read aloud with the teacher, noting pauses between phrases. Recite the text"},
        {type:"discuss",cn:"借助注释，用自己的话讲一讲这个故事",en:"Using the notes, retell this story in your own words"},
        {type:"discuss",cn:"这篇课文的语言和其他课文有什么不同？和同学交流",en:"How is this text\u2019s language different from other texts? Discuss with classmates"}
      ],
      teachingPoints: [
        {cn:"这是一篇文言文，语言简洁凝练，是三年级学生第一次接触文言文",en:"This is a classical Chinese text with concise language \u2014 the first classical text for Grade 3 students"},
        {cn:"借助注释理解文言文：庭=庭院，瓮=大缸，皆=都，迸=涌出",en:"Use notes to understand classical Chinese: 庭=courtyard, 瓮=jar, 皆=all, 迸=gush out"},
        {cn:"学习司马光沉着冷静、机智救人的品质",en:"Learn from Sima Guang\u2019s calm composure and quick-witted rescue"}
      ],
      parentTips: [
        {cn:"帮助孩子理解文言文与白话文的区别，这是学习古文的起点",en:"Help your child understand the difference between classical and modern Chinese \u2014 this is their first step in learning ancient texts"},
        {cn:"讲讲司马光的其他故事，激发孩子对历史人物的兴趣",en:"Tell other stories about Sima Guang to spark interest in historical figures"}
      ]
    },
    {
      id: 25, title: "灰雀", titleEn: "The Gray Sparrow",
      text: [
        "有一年冬天，列宁在郊外养病。他每天到公园散步。公园里有一棵高大的白桦树，树上有三只灰雀：两只胸脯是粉红的，一只胸脯是深红的。它们在树枝间来回跳动，婉转地歌唱，非常惹人喜爱。列宁每次走到白桦树下，都要停下来，仰望这三只欢快的灰雀，还经常给它们带来面包渣和谷粒。",
        "一天，列宁又来到公园，走到白桦树下，发现那只胸脯深红的灰雀不见了。他在周围的树林中找遍了，也没有找到。",
        "这时，列宁看见一个小男孩，就问：\u201C孩子，你看见过一只深红色胸脯的灰雀吗？\u201D",
        "男孩说：\u201C没\u2026\u2026我没看见。\u201D",
        "列宁说：\u201C一定是飞走了或者是冻死了。天气严寒，它怕冷。\u201D",
        "那个男孩本来想告诉列宁灰雀没有死，但又不敢讲。",
        "列宁自言自语地说：\u201C多好的灰雀呀，可惜再也飞不回来了。\u201D",
        "男孩看看列宁，说：\u201C会飞回来的，一定会飞回来的。它还活着。\u201D",
        "列宁问：\u201C会飞回来？\u201D",
        "\u201C一定会飞回来！\u201D男孩肯定地说。",
        "第二天，列宁来到白桦树下，果然又看到那只灰雀欢蹦乱跳地在枝头歌唱。那个男孩站在白桦树旁，低着头。",
        "列宁看看男孩，又看看灰雀，微笑着说：\u201C你好！灰雀，昨天你到哪儿去了？\u201D",
        "当然，灰雀没有告诉列宁昨天它去哪儿了。列宁也没再问那个男孩，因为他已经知道，男孩是诚实的。"
      ],
      textEn: [
        "One winter, Lenin was recuperating in the countryside. Every day he walked in the park. In the park stood a tall birch tree with three gray sparrows: two with pink breasts and one with a deep red breast. They hopped among the branches, singing sweetly, very endearing. Whenever Lenin passed the birch tree, he would stop to admire the three cheerful birds, often bringing them bread crumbs and grain.",
        "One day, Lenin came to the park and found the deep-red-breasted sparrow was gone. He searched the surrounding woods but couldn\u2019t find it.",
        "Then Lenin noticed a little boy and asked: \u201CChild, have you seen a sparrow with a deep red breast?\u201D",
        "The boy said: \u201CNo\u2026 I haven\u2019t seen one.\u201D",
        "Lenin said: \u201CIt must have flown away or frozen to death. It\u2019s bitterly cold \u2014 it wouldn\u2019t survive.\u201D",
        "The boy wanted to tell Lenin the sparrow hadn\u2019t died, but he didn\u2019t dare.",
        "Lenin said to himself: \u201CWhat a fine sparrow. What a pity it will never come back.\u201D",
        "The boy looked at Lenin and said: \u201CIt will come back. It will definitely come back. It\u2019s still alive.\u201D",
        "Lenin asked: \u201CIt will come back?\u201D",
        "\u201CIt will definitely come back!\u201D the boy said firmly.",
        "The next day, Lenin came to the birch tree and, sure enough, the sparrow was hopping and singing on the branch again. The boy stood by the tree, his head bowed.",
        "Lenin looked at the boy, then at the sparrow, and said with a smile: \u201CHello, sparrow! Where did you go yesterday?\u201D",
        "Of course, the sparrow didn\u2019t tell Lenin where it had been. And Lenin didn\u2019t ask the boy again \u2014 because he already knew the boy was honest."
      ],
      recognizeChars: ["宁","胸","脯","惹","仰","渣","或","者","惜","诚"],
      writeChars: ["郊","养","粉","谷","粒","男","或","者","冻","冷","惜","肯","诚"],
      exercises: [
        {type:"read",cn:"分角色朗读课文，读出对话的语气",en:"Read with assigned roles, expressing the right tone in the dialogue"},
        {type:"discuss",cn:"默读课文，想一想，列宁和小男孩在对话时各自心里想的是什么？",en:"Read silently and think: what were Lenin and the boy each thinking during their conversation?"},
        {type:"discuss",cn:"从哪里能看出列宁和小男孩喜爱灰雀？找出相关的语句",en:"Where can you tell that both Lenin and the boy loved the sparrows? Find the relevant sentences"}
      ],
      teachingPoints: [
        {cn:"通过人物对话理解人物内心：男孩的犹豫和诚实，列宁的智慧和善良",en:"Understand characters through dialogue: the boy\u2019s hesitation and honesty, Lenin\u2019s wisdom and kindness"},
        {cn:"体会列宁不直接追问的用意——给男孩改正的机会",en:"Appreciate why Lenin didn\u2019t press further \u2014 giving the boy a chance to do the right thing"},
        {cn:"学习带着问题默读，理解课文意思",en:"Learn to read silently with questions in mind to understand the text"}
      ],
      parentTips: [
        {cn:"和孩子讨论\u201C诚实\u201D的意义，结合故事理解",en:"Discuss the meaning of \u2018honesty\u2019 with your child, connecting it to the story"},
        {cn:"分角色朗读课文，注意不同人物的语气",en:"Read with roles, paying attention to each character\u2019s tone"}
      ]
    },
    {
      id: 26, title: "手术台就是阵地", titleEn: "The Operating Table Is the Battlefield",
      text: [
        "1939年春，齐会战斗打响了。气焰嚣张的日军刚刚到齐会镇就挨了当头一棒，被我军消灭了五百多人。",
        "敌人不断反扑，战斗非常激烈。我军的伤员陆续从火线上抬下来。在离火线不远的一座小庙里，白求恩大夫正在给伤员做手术。他已经两天两夜没休息了，眼球上布满了血丝。突然，几发炮弹落在小庙前的空地上。硝烟滚滚，弹片纷飞，小庙被烟雾淹没了。白求恩仍然镇定地站在手术台旁。他接过助手递过来的镊子，敏捷地从伤员的腹腔里取出一块弹片，丢在盘子里。",
        "敌机不断地在上空吼叫。炮弹不断地在周围爆炸。师卫生部长匆匆赶来，对白求恩说：\u201C师长决定让您和一部分伤员离开这里。\u201D白求恩沉思了一会儿，说：\u201C我同意撤走部分伤员。至于我个人，要和战士们在一起，不能离开。\u201D",
        "部长恳求说：\u201C白求恩同志，这儿危险，让您离开这里，是战斗形势的需要哇！\u201D白求恩说：\u201C谢谢师长的关心。可是，手术台是医生的阵地。战士们没有离开他们的阵地，我怎么能离开自己的阵地呢？部长同志，请您转告师长，我是一名八路军战士，不是你们的客人。\u201D白求恩低下头，继续给伤员做手术。",
        "一连几发炮弹落在小庙的周围。庙的一角落下了许多瓦片。挂在门口的布帘烧着了，火苗向手术台扑过来。助手们赶忙把火扑灭。担架队抬起做过手术的伤员，迅速向后方转移。白求恩仍然争分夺秒地给伤员做手术，做了一个又一个。",
        "齐会战斗进行了三天三夜，胜利结束了。白求恩大夫在手术台旁，连续工作了六十九个小时。"
      ],
      textEn: [
        "In the spring of 1939, the Battle of Qihui broke out. The arrogant Japanese troops had barely arrived at Qihui Town when our army dealt them a heavy blow, wiping out over five hundred soldiers.",
        "The enemy counterattacked relentlessly, and the battle was fierce. Wounded soldiers were being carried back from the front line. In a small temple not far from the front, Dr. Bethune was performing surgery. He hadn\u2019t slept for two days and nights; his eyes were bloodshot. Suddenly, shells exploded on the ground in front of the temple. Smoke billowed and shrapnel flew; the temple was engulfed in smoke. But Bethune remained calmly at his operating table. He took the tweezers from his assistant and deftly extracted a piece of shrapnel from a soldier\u2019s abdomen, dropping it into a tray.",
        "Enemy planes howled overhead. Shells exploded all around. The division\u2019s medical director rushed in and told Bethune: \u201CThe division commander wants you and some of the wounded to leave.\u201D Bethune thought for a moment and said: \u201CI agree to evacuate some wounded. As for myself, I must stay with the soldiers \u2014 I cannot leave.\u201D",
        "The director pleaded: \u201CComrade Bethune, it\u2019s dangerous here. The battle situation requires you to leave!\u201D Bethune replied: \u201CThank the commander for his concern. But the operating table is a doctor\u2019s battlefield. The soldiers haven\u2019t left their posts \u2014 how can I leave mine? Comrade Director, please tell the commander: I am an Eighth Route Army soldier, not a guest.\u201D Bethune bent his head and continued operating.",
        "Several more shells hit near the temple. Tiles fell from a corner. The cloth curtain at the door caught fire, flames leaping toward the operating table. Assistants quickly put out the fire. Stretcher-bearers carried away the operated-on soldiers to the rear. Bethune continued racing against time, performing one surgery after another.",
        "The Battle of Qihui lasted three days and nights and ended in victory. Dr. Bethune worked continuously at his operating table for sixty-nine hours."
      ],
      recognizeChars: ["斗","棒","恩","大","血","撤","险","瓦","帘","迅","速","夺","秒"],
      writeChars: ["术","斗","刚","烈","离","血","仍","取","匆","险"],
      exercises: [
        {type:"read",cn:"默读课文，找出描写战斗激烈的内容，说说你对\u201C手术台就是阵地\u201D这句话的理解",en:"Read silently, find passages describing the fierce battle, and explain your understanding of \u2018the operating table is the battlefield\u2019"},
        {type:"vocab",cn:"说说你是用什么方法理解加点词语的：\u201C镇定\u201D\u201C恳求\u201D\u201C争分夺秒\u201D",en:"How did you understand these words: \u2018calm\u2019, \u2018plead\u2019, \u2018race against time\u2019?"},
        {type:"discuss",cn:"找出描写白求恩的语句，说说白求恩给你留下了怎样的印象",en:"Find sentences describing Bethune and share the impression he made on you"}
      ],
      teachingPoints: [
        {cn:"理解\u201C手术台就是阵地\u201D的比喻含义——每个人都有自己的\u201C阵地\u201D",en:"Understand the metaphorical meaning of \u2018the operating table is the battlefield\u2019 \u2014 everyone has their own \u2018post\u2019"},
        {cn:"学习通过环境描写（战斗场面）衬托人物品质的方法",en:"Learn how setting descriptions (battle scenes) highlight character qualities"},
        {cn:"体会白求恩大夫国际主义精神和敬业精神",en:"Appreciate Dr. Bethune\u2019s internationalist spirit and professional dedication"}
      ],
      parentTips: [
        {cn:"和孩子了解白求恩的故事，学习他的奉献精神",en:"Learn about Bethune\u2019s story together and his spirit of dedication"},
        {cn:"引导孩子理解\u201C坚守岗位\u201D的意义",en:"Help your child understand the meaning of \u2018staying at your post\u2019"}
      ]
    },
    {
      id: 27, title: "一个粗瓷大碗", titleEn: "A Large Rough Porcelain Bowl",
      isSelfRead: true,
      text: [
        "中国人民革命军事博物馆里，陈列着一个粗瓷大碗，是赵一曼在东北抗日联军中担任团政治委员时用过的。这个碗，赵一曼仅仅用过一次，但是抗联的老战士都能认出来。因为这个碗有着一段令人感动的故事。",
        "有一回，一场袭击日寇的战斗刚刚结束，小通讯员给赵一曼送来一个鼓鼓的挂包。打开一看，是个粗瓷大碗。赵一曼吃饭用的搪瓷缸子早就送给一个新战士了，通讯员一直想给她另找一个碗，好不容易在这次战斗中找到了，就连忙给她送来。",
        "赵一曼看着这个碗，对通讯员说：\u201C哪里拿来的，请你还到哪里去！\u201D",
        "\u201C这\u2026\u2026这\u2026\u2026敌人都被消灭了，往哪里还啊！\u201D通讯员为难地说。",
        "开饭了。通讯员用这个大碗给赵一曼盛了满满一碗高粱米饭，他想：\u201C这回我们政委该吃顿饱饭了。\u201D",
        "赵一曼一看，就知道是从病号灶盛来的。那些日子非常艰苦，抗联部队几个月来都是靠野菜、草根、橡子面充饥。有时候乡亲们冒着危险给部队送来一点儿粮食，但得留给伤病员吃。团长、政委和战士们一样，嘴边有几个月没沾过粮食了。赵一曼看到这碗高粱米饭，不禁想起战士们的艰苦生活，想起同志之间的友爱，想起通讯员对她的关心\u2026\u2026",
        "赵一曼端着碗轻轻走进炊事棚，趁人不注意的时候，把碗里的饭倒进锅里，又从另一口锅里盛了半碗野菜粥。炊事员老李在旁边看得清楚，他没吭声，眼里却含着泪花。",
        "第二天开饭的时候，赵一曼又没有碗了。小通讯员急得直叫：\u201C我说政委同志啊，给你一百个碗也架不住你这么\u2018丢\u2019啊！\u201D",
        "赵一曼笑着说：\u201C是啊，什么时候才能不\u2018丢\u2019碗呢？\u201D",
        "据后来\u201C侦察\u201D，这个粗瓷大碗已经成了七班的菜盆了。"
      ],
      textEn: [
        "In the Military Museum of the Chinese People\u2019s Revolution, there is a large rough porcelain bowl on display. It was once used by Zhao Yiman when she served as a regiment political commissar in the Northeast Anti-Japanese United Army. She only used this bowl once, yet every veteran of the United Army could recognize it \u2014 because it has a moving story behind it.",
        "After a raid on the Japanese invaders, a young messenger brought Zhao Yiman a bulging satchel. Inside was a large porcelain bowl. Zhao Yiman\u2019s enamel cup had long been given to a new soldier. The messenger had been trying to find her a new bowl and finally found one during the battle.",
        "Zhao Yiman looked at the bowl and told the messenger: \u201CReturn it to where you found it!\u201D",
        "\u201CBut\u2026 but\u2026 the enemies have been wiped out \u2014 where would I return it?\u201D the messenger said awkwardly.",
        "At mealtime, the messenger filled the big bowl with sorghum rice for Zhao Yiman, thinking: \u201CFinally, our commissar will have a proper meal.\u201D",
        "But Zhao Yiman recognized it as food from the sick ward kitchen. Times were extremely hard. For months, the troops had survived on wild vegetables, grass roots, and acorn flour. Occasionally, villagers risked their lives to bring a little grain, but that had to be saved for the sick and wounded. The commander, commissar, and soldiers alike hadn\u2019t tasted grain in months. Looking at the bowl of sorghum rice, Zhao Yiman thought of the soldiers\u2019 hardships, the comradeship among them, and the messenger\u2019s care for her\u2026",
        "Zhao Yiman quietly carried the bowl to the cooking shed. When no one was watching, she poured the rice back into the pot and ladled half a bowl of vegetable porridge from another pot. Cook Li saw everything clearly. He said nothing, but his eyes glistened with tears.",
        "At the next meal, Zhao Yiman had no bowl again. The messenger cried out: \u201CComrade Commissar, even a hundred bowls wouldn\u2019t be enough for you to \u2018lose\u2019!\u201D",
        "Zhao Yiman smiled and said: \u201CYes indeed \u2014 when will I ever stop \u2018losing\u2019 bowls?\u201D",
        "According to later \u201Cinvestigation,\u201D the big porcelain bowl had become Squad Seven\u2019s vegetable basin."
      ],
      recognizeChars: ["陈","曼","联","缸","还","粱","顿","侦"],
      exercises: [
        {type:"read",cn:"默读课文，说说这个\u201C粗瓷大碗\u201D有什么感人的故事",en:"Read silently and describe the moving story behind this \u2018rough porcelain bowl\u2019"},
        {type:"discuss",cn:"你还可以查查资料，了解有关赵一曼的事迹",en:"Research more about Zhao Yiman\u2019s deeds"}
      ],
      teachingPoints: [
        {cn:"体会赵一曼与战士同甘共苦的高尚品质",en:"Appreciate Zhao Yiman\u2019s noble quality of sharing hardships with her soldiers"},
        {cn:"学习通过一件物品讲述人物故事的写法",en:"Learn the technique of telling a character\u2019s story through an object"}
      ],
      parentTips: [
        {cn:"和孩子了解赵一曼等抗日英雄的故事",en:"Learn about anti-Japanese heroes like Zhao Yiman with your child"},
        {cn:"引导孩子理解\u201C与民同苦\u201D的精神",en:"Help your child understand the spirit of sharing in people\u2019s hardships"}
      ]
    }
  ],
  oralComm: {title:"请教",titleEn:"Asking for Advice",prompt:{cn:"遇到不好解决的问题，向别人请教是个好办法。请教时要把问题说清楚，不管别人能否帮你都要表示感谢",en:"When you face a problem you can\u2019t solve, asking for advice is a good approach. State your problem clearly, and always thank the person whether or not they can help"}},
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"不迁怒，不贰过。——《论语》\n爱人若爱其身。——《墨子》\n仁者爱人，有礼者敬人。——《孟子》\n与人善言，暖于布帛；伤人以言，深于矛戟。——《荀子》",en:"Do not transfer anger; do not repeat mistakes. \u2014 Analerta\nLove others as you love yourself. \u2014 Mozi\nThe benevolent love others; the courteous respect others. \u2014 Mencius\nKind words warm like silk; hurtful words cut deeper than spears. \u2014 Xunzi"}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"辨析近义词：陆续/继续/连续。帮妈妈整理购物清单（分类列出要买的东西）",en:"Distinguish near-synonyms: one by one / continue / continuously. Help mom organize a shopping list (categorize items to buy)"}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"那次玩得真高兴——回忆一次特别开心的经历，把玩的过程像放电影一样回想一遍，写下来",en:"That Time Was So Much Fun \u2014 Recall an especially happy experience, replay the process like a movie in your mind, and write it down"}}
  }
}
]
};
