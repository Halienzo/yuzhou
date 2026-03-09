/**
 * 语宙 YuZhou — 部编版三年级语文上册 教材数据
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
  difficulty: 2,
  type: "kewen",
  lessons: [
    {
      id: 1, title: "大青树下的小学", titleEn: "A Primary School Under the Big Banyan Tree",
      difficulty: 2,
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
      vocabWords: [
        {word:'坪坝',pinyin:'píng bà',en:'flat ground',sentence:'早晨，从坪坝走来了许多小学生。',sentenceEn:'In the morning, many students came from the flat ground.'},
        {word:'穿戴',pinyin:'chuān dài',en:'dress up',sentence:'大家穿戴不同。',sentenceEn:'Everyone dressed differently.'},
        {word:'鲜艳',pinyin:'xiān yàn',en:'bright; vivid',sentence:'鲜艳的民族服装。',sentenceEn:'Bright ethnic costumes.'},
        {word:'好奇',pinyin:'hào qí',en:'curious',sentence:'小动物好奇地看着。',sentenceEn:'Little animals watched curiously.'},
        {word:'摇晃',pinyin:'yáo huàng',en:'sway',sentence:'古老的铜钟挂在大青树上。',sentenceEn:'An ancient bronze bell hangs on the banyan tree.'}
      ],
      grammarPoints: [
        {point:'有……有……还有……',pointEn:'there are...and...and also...',example:'有傣族的，有景颇族的，还有汉族的。',exampleEn:'There are Dai, Jingpo, and also Han.',explanation:'表示列举多个事物',explanationEn:'Lists multiple items in a series'}
      ],
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
      difficulty: 2,
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
        "I can surely guess to whom they raise both arms \u2014 they too have their own mother, just as I have my own mother."
      ],
      recognizeChars: ["荒","笛","罚","假","裳"],
      writeChars: ["落","荒","笛","舞","狂","罚","假","互","所","够","猜","扬","臂"],
      vocabWords: [
        {word:'润湿',pinyin:'rùn shī',en:'moist',sentence:'六月的阵雨落下来。',sentenceEn:'The June showers fall.'},
        {word:'狂欢',pinyin:'kuáng huān',en:'revel',sentence:'树枝在林中互相碰触，绿叶在狂欢。',sentenceEn:'Branches touch and leaves revel.'},
        {word:'急急忙忙',pinyin:'jí jí máng máng',en:'hurriedly',sentence:'花孩子们急急忙忙赶来。',sentenceEn:'The flower children hurry over.'},
        {word:'自然',pinyin:'zì rán',en:'nature',sentence:'花在绿草上跳舞。',sentenceEn:'Flowers dance on the green grass.'},
        {word:'罚站',pinyin:'fá zhàn',en:'stand as punishment',sentence:'关在屋子里被罚站。',sentenceEn:'Shut indoors, standing as punishment.'}
      ],
      grammarPoints: [
        {point:'一……就……',pointEn:'as soon as...then...',example:'一阵阵湿润的风一吹，花就跳舞了。',exampleEn:'As soon as the moist wind blows, flowers dance.',explanation:'表示紧接着发生',explanationEn:'Indicates immediate sequence of events'}
      ],
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
      difficulty: 2,
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
      vocabWords: [
        {word:'私塾',pinyin:'sī shú',en:'private school',sentence:'孙中山小时候在私塾读书。',sentenceEn:'Sun Yat-sen studied at a private school as a child.'},
        {word:'照例',pinyin:'zhào lì',en:'as usual',sentence:'先生照例让学生背书。',sentenceEn:'The teacher, as usual, had students recite.'},
        {word:'流利',pinyin:'liú lì',en:'fluent',sentence:'孙中山背得很流利。',sentenceEn:'Sun Yat-sen recited very fluently.'},
        {word:'糊里糊涂',pinyin:'hú li hú tu',en:'muddled; confused',sentence:'糊里糊涂地背有什么用？',sentenceEn:'What use is memorizing without understanding?'},
        {word:'鼓起勇气',pinyin:'gǔ qǐ yǒng qì',en:'summon courage',sentence:'他鼓起勇气问先生。',sentenceEn:'He summoned the courage to ask the teacher.'}
      ],
      grammarPoints: [
        {point:'先……再……',pointEn:'first...then...',example:'先背熟课文，再讲解意思。',exampleEn:'First memorize the text, then explain the meaning.',explanation:'表示动作的先后顺序',explanationEn:'Indicates sequential order of actions'}
      ],
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
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"猜猜他是谁——选择一个同学，用几句话或一段话写一写他，不出现名字但让别人能猜出来",en:"Guess Who — Choose a classmate and write a short description without using their name, so others can guess who it is"},modelEssays:[
      {title:"\u6211\u7684\u597D\u670B\u53CB",titleEn:"My Good Friend",level:"\u57FA\u7840",
      structure:[
        {cn:"\u5F00\u5934\uFF1A\u7528\u5916\u8C8C\u7279\u5F81\u5F15\u51FA\u4EBA\u7269",en:"Opening: Introduce the person through physical appearance"},
        {cn:"\u4E2D\u95F4\uFF1A\u5199\u6027\u683C\u548C\u7231\u597D",en:"Middle: Describe personality and hobbies"},
        {cn:"\u7ED3\u5C3E\uFF1A\u70B9\u660E\u53CB\u8C0A",en:"Ending: Highlight the friendship"}
      ],
      cn:"\u4ED6\u4E2A\u5B50\u4E0D\u9AD8\uFF0C\u5706\u5706\u7684\u8138\u4E0A\u6709\u4E00\u53CC\u5927\u5927\u7684\u773C\u775B\uFF0C\u7B11\u8D77\u6765\u7684\u65F6\u5019\u773C\u775B\u5F2F\u5F2F\u7684\uFF0C\u50CF\u4E24\u4E2A\u5C0F\u6708\u7259\u3002\u4ED6\u7684\u5934\u53D1\u77ED\u77ED\u7684\uFF0C\u8DD1\u8D77\u6765\u7684\u65F6\u5019\u4E00\u98A0\u4E00\u98A0\u7684\uFF0C\u7279\u522B\u53EF\u7231\u3002\u4ED6\u6700\u7231\u8E22\u8DB3\u7403\uFF0C\u6BCF\u5929\u4E0B\u8BFE\u90FD\u80FD\u770B\u89C1\u4ED6\u5728\u64CD\u573A\u4E0A\u98DE\u5954\u7684\u8EAB\u5F71\u3002\u6709\u4E00\u6B21\u6BD4\u8D5B\uFF0C\u4ED6\u8E22\u8FDB\u4E86\u4E24\u4E2A\u7403\uFF0C\u5168\u73ED\u540C\u5B66\u90FD\u4E3A\u4ED6\u6B22\u547C\u3002\u4ED6\u4E5F\u5F88\u4E50\u4E8E\u52A9\u4EBA\uFF0C\u8C01\u6709\u56F0\u96BE\u4ED6\u90FD\u4F1A\u4E3B\u52A8\u5E2E\u5FD9\u3002\u4F60\u731C\u51FA\u4ED6\u662F\u8C01\u4E86\u5417\uFF1F",
      en:"He is not very tall. His round face has a pair of big eyes that curve like two little crescent moons when he smiles. His hair is short and bobs up and down when he runs \u2014 very cute. He loves playing soccer, and after every class you can see him dashing around on the field. Once during a match, he scored two goals and the whole class cheered for him. He is also very helpful \u2014 whenever someone has trouble, he volunteers to help. Can you guess who he is?",
      notes:"\u8FD9\u7BC7\u8303\u6587\u4ECE\u5916\u8C8C\u5199\u5230\u7231\u597D\uFF0C\u518D\u5230\u6027\u683C\uFF0C\u5C42\u6B21\u5206\u660E\u3002\u7528\u4E86\u6BD4\u55BB\uFF08\u773C\u775B\u50CF\u5C0F\u6708\u7259\uFF09\uFF0C\u8BA9\u4EBA\u7269\u5F62\u8C61\u66F4\u751F\u52A8\u3002\u7ED3\u5C3E\u8BBE\u95EE\uFF0C\u7B26\u5408\u201C\u731C\u731C\u4ED6\u662F\u8C01\u201D\u7684\u4E3B\u9898\u3002",
      notesEn:"This essay moves from appearance to hobbies to personality in a clear structure. It uses a simile (eyes like crescent moons) to make the character vivid. The ending question matches the \u2018Guess Who\u2019 theme."},
      {title:"\u6211\u4EEC\u73ED\u7684\u201C\u5C0F\u4E66\u866B\u201D",titleEn:"Our Class Bookworm",level:"\u63D0\u9AD8",
      structure:[
        {cn:"\u5F00\u5934\uFF1A\u7528\u7ECF\u5178\u573A\u666F\u5F15\u5165",en:"Opening: Introduce with a classic scene"},
        {cn:"\u4E2D\u95F4\uFF1A\u901A\u8FC7\u4E24\u4E2A\u5177\u4F53\u4E8B\u4F8B\u5C55\u73B0\u7279\u70B9",en:"Middle: Show character traits through two specific examples"},
        {cn:"\u7ED3\u5C3E\uFF1A\u7559\u60AC\u5FF5\uFF0C\u5F15\u5BFC\u8BFB\u8005\u731C\u60F3",en:"Ending: Create suspense and invite the reader to guess"}
      ],
      cn:"\u8BFE\u95F4\u4F11\u606F\u7684\u65F6\u5019\uFF0C\u522B\u7684\u540C\u5B66\u90FD\u5728\u64CD\u573A\u4E0A\u73A9\u800D\uFF0C\u53EA\u6709\u4ED6\u5B89\u5B89\u9759\u9759\u5730\u5750\u5728\u5EA7\u4F4D\u4E0A\u770B\u4E66\u3002\u4ED6\u7684\u684C\u5B50\u4E0A\u603B\u662F\u6446\u7740\u4E00\u672C\u4E66\uFF0C\u6709\u65F6\u662F\u7AE5\u8BDD\u6545\u4E8B\uFF0C\u6709\u65F6\u662F\u79D1\u5B66\u767E\u79D1\u3002\u6709\u4E00\u6B21\u4E0A\u8BFE\u94C3\u54CD\u4E86\uFF0C\u4ED6\u8FD8\u57CB\u5934\u770B\u4E66\uFF0C\u8001\u5E08\u53EB\u4E86\u4ED6\u4E09\u6B21\u4ED6\u624D\u542C\u89C1\uFF0C\u5168\u73ED\u54C8\u54C8\u5927\u7B11\u3002\u8FD8\u6709\u4E00\u6B21\uFF0C\u8001\u5E08\u95EE\u4E86\u4E00\u4E2A\u5F88\u96BE\u7684\u95EE\u9898\uFF0C\u6CA1\u4EBA\u4F1A\u7B54\uFF0C\u4ED6\u5374\u4E3E\u8D77\u624B\uFF0C\u56DE\u7B54\u5F97\u53C8\u5BF9\u53C8\u597D\uFF0C\u8FDE\u8001\u5E08\u90FD\u5FFD\u4E0D\u4F4F\u593A\u4ED6\u3002\u8FD9\u5C31\u662F\u6211\u4EEC\u73ED\u7684\u201C\u5C0F\u4E66\u866B\u201D\uFF0C\u4F60\u77E5\u9053\u4ED6\u662F\u8C01\u5417\uFF1F",
      en:"During recess, while other classmates play on the playground, he sits quietly at his desk reading. There is always a book on his desk \u2014 sometimes fairy tales, sometimes science encyclopedias. Once the class bell rang and he was still buried in his book; the teacher called him three times before he heard, and the whole class burst out laughing. Another time, the teacher asked a very hard question that nobody could answer, but he raised his hand and gave a perfect answer. Even the teacher couldn\u2019t help praising him. This is our class\u2019s \u2018bookworm\u2019 \u2014 do you know who he is?",
      notes:"\u8FD9\u7BC7\u8303\u6587\u7528\u4E86\u4E24\u4E2A\u5177\u4F53\u4E8B\u4F8B\u6765\u8868\u73B0\u4EBA\u7269\u7279\u70B9\uFF0C\u6BD4\u7B2C\u4E00\u7BC7\u66F4\u6DF1\u5165\u3002\u201C\u5C0F\u4E66\u866B\u201D\u8FD9\u4E2A\u7ECB\u53F7\u8BA9\u4EBA\u7269\u66F4\u6709\u7279\u8272\u3002\u5BF9\u6BD4\u624B\u6CD5\uFF08\u522B\u4EBA\u73A9\u800D vs \u4ED6\u770B\u4E66\uFF09\u5F88\u51FA\u5F69\u3002",
      notesEn:"This essay uses two concrete examples to demonstrate the character\u2019s traits, going deeper than the basic level. The nickname \u2018bookworm\u2019 makes the character memorable. The contrast technique (others playing vs. him reading) is effective."},
      {title:"\u6211\u4EEC\u73ED\u7684\u5C0F\u753B\u5BB6",titleEn:"Our Class\u2019s Little Artist",level:"\u62D3\u5C55",
      structure:[
        {cn:"\u5F00\u5934\uFF1A\u8BBE\u7F6E\u60AC\u5FF5\uFF0C\u5148\u5199\u4F5C\u54C1\u518D\u5199\u4EBA",en:"Opening: Create suspense by describing artwork before the person"},
        {cn:"\u4E2D\u95F4\uFF1A\u591A\u89D2\u5EA6\u63CF\u5199\uFF08\u5916\u8C8C+\u4E60\u60EF+\u4E8B\u4F8B\uFF09",en:"Middle: Multi-angle description (appearance + habits + example)"},
        {cn:"\u8FC7\u6E21\uFF1A\u7528\u8F6C\u6298\u53E5\u589E\u52A0\u5C42\u6B21",en:"Transition: Use a turning sentence to add depth"},
        {cn:"\u7ED3\u5C3E\uFF1A\u70B9\u9898+\u8868\u8FBE\u4F69\u670D",en:"Ending: Echo the theme and express admiration"}
      ],
      cn:"\u6559\u5BA4\u540E\u9762\u7684\u5C55\u793A\u680F\u91CC\uFF0C\u6709\u4E00\u5E45\u753B\u7279\u522B\u5F15\u4EBA\u6CE8\u76EE\u3002\u753B\u4E0A\u662F\u4E00\u7247\u79CB\u5929\u7684\u68EE\u6797\uFF0C\u7EA2\u7684\u3001\u9EC4\u7684\u3001\u6A59\u7684\u53F6\u5B50\u5C42\u5C42\u53E0\u53E0\uFF0C\u7F8E\u6781\u4E86\u3002\u8FD9\u5E45\u753B\u7684\u4F5C\u8005\uFF0C\u5C31\u662F\u6211\u4EEC\u73ED\u4E0A\u7684\u4E00\u4F4D\u540C\u5B66\u3002\u5979\u7684\u8F6B\u5B50\u4E0A\u603B\u662F\u624E\u7740\u4E00\u4E2A\u9A6C\u5C3E\u8FA8\uFF0C\u8D70\u8DEF\u7684\u65F6\u5019\u4E00\u7538\u4E00\u7538\u7684\u3002\u5979\u7684\u624B\u6307\u4E0A\u5E38\u5E38\u6CBE\u7740\u989C\u6599\uFF0C\u6709\u65F6\u5403\u996D\u7684\u65F6\u5019\u8138\u4E0A\u8FD8\u6709\u4E00\u62B9\u84DD\u8272\uFF0C\u540C\u5B66\u4EEC\u90FD\u7B11\u5979\u662F\u201C\u5C0F\u82B1\u732B\u201D\u3002\u4E0D\u8FC7\uFF0C\u522B\u770B\u5979\u5E73\u65F6\u9A6C\u9A6C\u864E\u864E\u7684\uFF0C\u4E00\u62FF\u8D77\u753B\u7B14\u5C31\u53D8\u4E86\u4E00\u4E2A\u4EBA\u3002\u7F8E\u672F\u8BFE\u4E0A\uFF0C\u5979\u603B\u662F\u6700\u540E\u4E00\u4E2A\u4EA4\u4F5C\u4E1A\uFF0C\u56E0\u4E3A\u5979\u8981\u628A\u6BCF\u4E00\u4E2A\u7EC6\u8282\u90FD\u753B\u5F97\u5B8C\u7F8E\u3002\u6709\u4E00\u6B21\u5979\u7528\u4E86\u6574\u6574\u4E00\u8282\u8BFE\u53EA\u753B\u4E86\u4E00\u53EA\u5C0F\u9E1F\uFF0C\u4F46\u90A3\u53EA\u5C0F\u9E1F\u6813\u6813\u5982\u751F\uFF0C\u8FDE\u7FBD\u6BDB\u7684\u7EB9\u8DEF\u90FD\u770B\u5F97\u6E05\u6E05\u695A\u695A\u3002\u8FD9\u5C31\u662F\u6211\u4EEC\u73ED\u7684\u5C0F\u753B\u5BB6\uFF0C\u6211\u771F\u4F69\u670D\u5979\uFF01",
      en:"On the display board at the back of the classroom, one painting stands out. It shows an autumn forest with layers of red, yellow, and orange leaves \u2014 absolutely beautiful. The artist is a classmate of ours. She always wears her hair in a ponytail that swings as she walks. Her fingers are often stained with paint, and sometimes she even has a smudge of blue on her face at lunchtime \u2014 classmates call her \u2018little tabby cat.\u2019 But don\u2019t let her casual manner fool you \u2014 the moment she picks up a paintbrush, she becomes a different person. In art class, she is always the last to turn in her work because she wants every detail to be perfect. Once she spent an entire class painting just one bird, but that bird looked so lifelike that you could see every feather. This is our class\u2019s little artist \u2014 I truly admire her!",
      notes:"\u8FD9\u7BC7\u8303\u6587\u91C7\u7528\u201C\u5148\u5199\u4F5C\u54C1\u518D\u5199\u4EBA\u201D\u7684\u65B0\u9896\u5199\u6CD5\uFF0C\u7ED3\u6784\u66F4\u6709\u521B\u610F\u3002\u7528\u4E86\u201C\u4E0D\u8FC7\u201D\u8F6C\u6298\u8BCD\u589E\u52A0\u5C42\u6B21\u611F\uFF0C\u201C\u5C0F\u82B1\u732B\u201D\u7684\u7ECB\u53F7\u589E\u6DFB\u8DA3\u5473\uFF0C\u7EC6\u8282\u63CF\u5199\uFF08\u7FBD\u6BDB\u7EB9\u8DEF\uFF09\u4F53\u73B0\u4E86\u66F4\u9AD8\u7684\u5199\u4F5C\u6C34\u5E73\u3002",
      notesEn:"This essay uses the creative approach of describing the artwork before the person. The turning word \u2018but\u2019 adds depth, the nickname \u2018little tabby cat\u2019 adds fun, and the fine detail (feather patterns) shows a higher level of writing skill."}
    ]}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 2 — 课文 Texts (Lessons 4-7)         */
/* ═══════════════════════════════════════════ */
{
  id: 2, title: "课文", titleEn: "Texts",
  difficulty: 2,
  type: "kewen",
  lessons: [
    {
      id: 4, title: "古诗三首", titleEn: "Three Ancient Poems",
      difficulty: 2,
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
      vocabWords: [
        {word:'夜书所见',pinyin:'yè shū suǒ jiàn',en:'what I wrote seeing at night',sentence:'夜书所见。',sentenceEn:'What I wrote seeing at night.'},
        {word:'萧萧',pinyin:'xiāo xiāo',en:'rustling',sentence:'萧萧梧叶送寒声。',sentenceEn:'Rustling parasol leaves bring cold sounds.'},
        {word:'篱落',pinyin:'lí luò',en:'fence',sentence:'知有儿童挑促织。',sentenceEn:'I know children chase crickets by the fence.'},
        {word:'赠刘景文',pinyin:'zèng liú jǐng wén',en:'gift to Liu Jingwen',sentence:'赠刘景文。',sentenceEn:'Gift to Liu Jingwen.'},
        {word:'残荷',pinyin:'cán hé',en:'withered lotus',sentence:'荷尽已无擎雨盖。',sentenceEn:'The lotus gone, no umbrella shields the rain.'}
      ],
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
      difficulty: 2,
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
      vocabWords: [
        {word:'水泥道',pinyin:'shuǐ ní dào',en:'cement road',sentence:'门前的水泥道真美。',sentenceEn:'The cement road in front is beautiful.'},
        {word:'金色',pinyin:'jīn sè',en:'golden',sentence:'铺满金色巴掌。',sentenceEn:'Covered with golden palm prints.'},
        {word:'梧桐',pinyin:'wú tóng',en:'parasol tree',sentence:'梧桐树的叶子像手掌。',sentenceEn:'Parasol tree leaves look like palms.'},
        {word:'明朗',pinyin:'míng lǎng',en:'bright and clear',sentence:'天空明朗。',sentenceEn:'The sky is bright and clear.'},
        {word:'排列',pinyin:'pái liè',en:'arrange in rows',sentence:'落叶排列得很整齐。',sentenceEn:'The fallen leaves are neatly arranged.'}
      ],
      grammarPoints: [
        {point:'像……一样',pointEn:'like...',example:'梧桐树的落叶像金色的巴掌一样。',exampleEn:'Parasol tree leaves are like golden palms.',explanation:'比喻句：用"像"来做比较',explanationEn:'Simile: using "like" for comparison'}
      ],
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
      difficulty: 2,
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
        "The autumn rain brings to the earth a song of harvest, and brings to the children a song of joy."
      ],
      recognizeChars: ["钥","匙","缤","枚","勾","喇","叭","厚","曲","丰"],
      writeChars: ["盒","颜","料","票","争","仙","闻","勾","紧","洞","油","曲","丰"],
      vocabWords: [
        {word:'钥匙',pinyin:'yào shi',en:'key',sentence:'秋天的雨是一把钥匙。',sentenceEn:'Autumn rain is a key.'},
        {word:'颜料',pinyin:'yán liào',en:'paint; pigment',sentence:'秋天的雨有一盒五彩缤纷的颜料。',sentenceEn:'Autumn rain has a box of colorful paints.'},
        {word:'丰收',pinyin:'fēng shōu',en:'harvest',sentence:'秋天的雨带来丰收的歌。',sentenceEn:'Autumn rain brings the song of harvest.'},
        {word:'频频',pinyin:'pín pín',en:'repeatedly',sentence:'菊花频频点头。',sentenceEn:'Chrysanthemums nod repeatedly.'},
        {word:'气味',pinyin:'qì wèi',en:'scent; smell',sentence:'梨香香的，菠萝甜甜的。',sentenceEn:'Pears are fragrant, pineapples are sweet.'}
      ],
      grammarPoints: [
        {point:'把……比作……',pointEn:'compare...to...',example:'秋天的雨把颜色给了银杏树。',exampleEn:'Autumn rain gave colors to the ginkgo tree.',explanation:'拟人化表达：赋予事物人的动作',explanationEn:'Personification: giving human actions to things'}
      ],
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
      difficulty: 2,
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
      vocabWords: [
        {word:'叮咛',pinyin:'dīng níng',en:'urge gently',sentence:'听听，秋的声音。',sentenceEn:'Listen, the sounds of autumn.'},
        {word:'掠过',pinyin:'lüè guò',en:'sweep past',sentence:'大雁掠过田野。',sentenceEn:'Wild geese sweep past the fields.'},
        {word:'歌吟',pinyin:'gē yín',en:'sing softly',sentence:'秋的声音在歌吟。',sentenceEn:'The sounds of autumn are singing.'},
        {word:'道别',pinyin:'dào bié',en:'say goodbye',sentence:'黄叶道别。',sentenceEn:'Yellow leaves say goodbye.'},
        {word:'辽阔',pinyin:'liáo kuò',en:'vast',sentence:'辽阔的田野。',sentenceEn:'The vast fields.'}
      ],
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
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"写日记——准备一个日记本，开始写日记吧！坚持写下去，你一定会大有收获",en:"Write a diary \u2014 Get a diary notebook and start writing! Keep it up and you\u2019ll gain a lot"},modelEssays:[
      {title:"今天的新发现",titleEn:"Today\u2019s New Discovery",level:"基础",
      structure:[
        {cn:"开头：写日期、天气、心情",en:"Opening: Date, weather, and mood"},
        {cn:"中间：记录一件印象深刻的事",en:"Middle: Record one memorable event"},
        {cn:"结尾：写感受或收获",en:"Ending: Write feelings or reflections"}
      ],
      cn:"9月18日\u3000星期三\u3000晴\n今天放学回家的路上，我发现路边的大树下有一窝小蚂蚁。它们排着长长的队伍，一只接一只，正在往窝里搬东西。我蹲下来仔细看，原来它们在搬一块饼干屑，比蚂蚁大好几倍呢！十几只小蚂蚁一起用力，终于把饼干屑搬到了洞口。我觉得蚂蚁真了不起，它们虽然很小，但是团结起来力量可大了！",
      en:"September 18, Wednesday, Sunny\nOn my way home from school today, I discovered a nest of little ants under the big tree by the road. They were lined up in a long column, one after another, carrying things into their nest. I squatted down to look closely and found they were moving a cookie crumb many times bigger than themselves! More than ten little ants pushed together, and finally they moved the crumb to the entrance of their hole. I think ants are truly amazing \u2014 even though they\u2019re tiny, when they work together their strength is enormous!",
      notes:"这篇日记格式规范（日期+天气），内容集中写一件事，观察细致，结尾有感想。适合初学日记的同学参考。",
      notesEn:"This diary entry has proper format (date + weather), focuses on one event, shows careful observation, and ends with a reflection. Good reference for beginners learning to write diary entries."},
      {title:"雨天的快乐",titleEn:"Joy on a Rainy Day",level:"提高",
      structure:[
        {cn:"开头：天气变化引出事件",en:"Opening: Weather change leads into the event"},
        {cn:"中间：详细描写玩耍过程",en:"Middle: Detailed description of playing"},
        {cn:"过渡：通过感官描写雨景",en:"Transition: Describe the rain through senses"},
        {cn:"结尾：表达快乐心情",en:"Ending: Express joyful feelings"}
      ],
      cn:"10月5日\u3000星期四\u3000雨\n今天下午突然下起了大雨，豆大的雨点打在窗户上\u201C啦啦啦\u201D地响。放学的时候，雨小了一些，我和同学小明一起撑着伞走在回家的路上。路边有很多小水洼，我们忍不住跳了进去，水花溅了一身，裤子都湿透了。我们笑得前仰后合。雨后的空气特别清新，树叶被洗得绿绿的，还挂着亮晶晶的水珠。我抬头一看，天边竟然出现了一道彩虹！今天虽然淹成了\u201C落汤鸡\u201D，但我觉得这是最快乐的一天。",
      en:"October 5, Thursday, Rainy\nThis afternoon it suddenly started pouring. Big raindrops hit the windows making a \u2018pitter-patter\u2019 sound. When school let out, the rain had lightened a bit. My classmate Xiao Ming and I shared an umbrella on the way home. There were many puddles by the road, and we couldn\u2019t resist jumping in \u2014 water splashed everywhere and our pants were soaked through. We laughed so hard we could barely stand. The air after the rain was especially fresh, the leaves were washed bright green, and glistening water droplets hung from them. I looked up and there was a rainbow in the sky! Even though I ended up looking like a \u2018drowned chicken,\u2019 I think this was the happiest day.",
      notes:"这篇日记使用了拟声词（\u201C啦啦啦\u201D）、比喻（\u201C落汤鸡\u201D）和多感官描写（视觉、听觉、触觉），让文章更加生动。彩虹的出现是亮点，让结尾有惊喜感。",
      notesEn:"This diary entry uses onomatopoeia (\u2018pitter-patter\u2019), a metaphor (\u2018drowned chicken\u2019), and multi-sensory description (sight, sound, touch) to make the writing vivid. The rainbow appearance is a highlight that adds a pleasant surprise at the end."},
      {title:"姥姥的花园",titleEn:"Grandma\u2019s Garden",level:"拓展",
      structure:[
        {cn:"开头：引入场景，设置期待",en:"Opening: Set the scene and create anticipation"},
        {cn:"中间：按时间顺序写观察和活动",en:"Middle: Describe observations and activities in time order"},
        {cn:"过渡：从做事转向内心感受",en:"Transition: Shift from action to inner feelings"},
        {cn:"结尾：升华主题，表达感情",en:"Ending: Elevate the theme and express emotion"}
      ],
      cn:"10月12日\u3000星期六\u3000晴\n今天我去姥姥家，一进门就闻到一阵花香。原来姥姥的小花园里桂花开了！金黄色的小花一簇一簇的，藏在绿叶里，像小星星一样。姥姥教我认识各种花：月季红得像火，菊花黄得耀眼，还有一盆多肉胖嘟嘟的，像小娃娃。姥姥让我帮忙浇水，我小心翼翼地端着水壶，一棵一棵地浇。姥姥说：\u201C浇花就像照顾朋友，要用心。\u201D我觉得姥姥的花园不只是花园，还装着姥姥对生活的热爱。我想，以后我也要像姥姥一样，用心去发现生活中的美好。",
      en:"October 12, Saturday, Sunny\nWhen I went to Grandma\u2019s house today, a wave of floral fragrance greeted me at the door. The osmanthus in Grandma\u2019s little garden was blooming! Clusters of tiny golden flowers hid among the green leaves like little stars. Grandma taught me to recognize different flowers: the roses were red as fire, the chrysanthemums dazzlingly yellow, and there was a pot of succulents, plump and round like little dolls. Grandma asked me to help water the plants. I carefully carried the watering can, watering them one by one. Grandma said, \u2018Watering flowers is like caring for friends \u2014 you must do it with your heart.\u2019 I realized Grandma\u2019s garden isn\u2019t just a garden \u2014 it holds her love for life. I want to be like Grandma and discover the beauty in everyday life with all my heart.",
      notes:"这篇日记层次丰富：从观察花园到动手浇花，再到引用姥姥的话升华主题。用了多个比喻（小星星、像火、小娃娃），语言生动。结尾从花园谈到\u201C生活的美好\u201D，体现了思考深度。",
      notesEn:"This diary entry is richly layered: from observing the garden to watering flowers, then quoting Grandma\u2019s words to elevate the theme. Multiple similes are used (little stars, red as fire, like dolls) for vivid language. The ending moves from the garden to \u2018beauty in life,\u2019 showing depth of thought."}
    ]}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 3 — 童话 Fairy Tales (Lessons 8-11)   */
/* ═══════════════════════════════════════════ */
{
  id: 3, title: "童话", titleEn: "Fairy Tales",
  difficulty: 2,
  type: "tonghua",
  lessons: [
    {
      id: 8, title: "卖火柴的小女孩", titleEn: "The Little Match Girl",
      difficulty: 2,
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
        "Her pair of little hands were almost frozen stiff. Oh, even one little match would do her good! Dare she pull one from the bundle and strike it against the wall to warm her little hands? She finally pulled one out. Scratch! The match burst into flame, sending up a bright blaze! She cupped her little hands over the flame. What a warm, bright flame \u2014 just like a little candle! What a wondrous light it was! The little girl felt as if she were sitting before a great stove with shining brass feet and brass handles, burning vigorously, warm and toasty \u2014 how comfortable it was! Alas, what was happening? She had just stretched out her feet, wanting to warm them too, when the match went out and the stove vanished. She sat there with nothing but a burnt match-end in her hand.",
        "She struck another. The flame lit up the wall, which suddenly became as transparent as gauze. She could see right into a room with a snow-white tablecloth, fine china, and a roast goose stuffed with apples and prunes, steaming deliciously. Even more wonderful \u2014 the goose jumped off the dish with a knife and fork in its back, waddling across the floor straight toward the poor girl. Then the match went out, and there was nothing but the thick, cold wall.",
        "She lit another match. Now she sat under a beautiful Christmas tree, even bigger and more beautiful than the one she had seen last year through the rich merchant\u2019s glass door. Thousands of candles burned on its green branches, and colorful pictures like those in shop windows seemed to wink at her. She reached her hands toward them \u2014 and the match went out. The Christmas lights rose higher and higher until they became twinkling stars. One star fell, drawing a long streak of red light. \u201CSomeone is dying,\u201D the little girl said. Her dear grandmother, the only one who had been kind to her, had told her: when a star falls, a soul goes to God.",
        "She struck another match. This time, the light shone all around, and there stood her grandmother, so gentle, so loving. \u201CGrandmother!\u201D the girl cried. \u201COh, take me with you! I know you\u2019ll disappear when the match goes out \u2014 just like the warm stove, the delicious goose, and the beautiful Christmas tree!\u201D",
        "She quickly struck a whole bundle of matches to keep her grandmother there. They blazed so brightly it was like daylight. Grandmother had never looked so tall and beautiful. She lifted the little girl in her arms. Together they flew in brightness and joy, higher and higher, to a place where there is no cold, no hunger, and no pain.",
        "In the cold morning, the little girl sat in the corner, her cheeks red, a smile on her lips. She was dead \u2014 frozen to death on the last night of the old year. The New Year\u2019s sun rose and shone on the tiny body. She sat there, still holding a bundle of burnt matches.",
        "\u201CShe was trying to warm herself,\u201D people said. But no one knew what beautiful things she had seen, or how happily she had gone with her grandmother into the joy of the New Year."
      ],
      recognizeChars: ["旧","饿","卷","挣","几","燃","焰","蜡","烛","富","晃","划","喷","强","烈"],
      writeChars: ["柴","旧","裙","怜","饿","焰","蜡","烛","伸","忽","板","富","颗"],
      vocabWords: [
        {word:'火柴',pinyin:'huǒ chái',en:'match',sentence:'卖火柴的小女孩。',sentenceEn:'The little match girl.'},
        {word:'哆嗦',pinyin:'duō suo',en:'shiver',sentence:'她冷得直哆嗦。',sentenceEn:'She shivered with cold.'},
        {word:'奇异',pinyin:'qí yì',en:'wondrous',sentence:'她看到了奇异的景象。',sentenceEn:'She saw wondrous sights.'},
        {word:'温暖',pinyin:'wēn nuǎn',en:'warm',sentence:'火炉多么温暖。',sentenceEn:'How warm the stove was.'},
        {word:'火焰',pinyin:'huǒ yàn',en:'flame',sentence:'火柴发出明亮的火焰。',sentenceEn:'The match gave off a bright flame.'}
      ],
      grammarPoints: [
        {point:'一……就……',pointEn:'as soon as',example:'她一擦着火柴，就看到了奇异的景象。',exampleEn:'As soon as she struck a match, she saw wondrous sights.',explanation:'前一动作引发后一结果',explanationEn:'First action triggers the second result'}
      ],
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
      difficulty: 2,
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
      vocabWords: [
        {word:'种子',pinyin:'zhǒng zi',en:'seed',sentence:'一粒种子被泥土盖住了。',sentenceEn:'A seed was covered by soil.'},
        {word:'努力',pinyin:'nǔ lì',en:'strive',sentence:'种子努力生长。',sentenceEn:'The seed strived to grow.'},
        {word:'手推车',pinyin:'shǒu tuī chē',en:'pushcart',sentence:'被做成了手推车。',sentenceEn:'Was made into a pushcart.'},
        {word:'阳台',pinyin:'yáng tái',en:'balcony',sentence:'坐在阳台上晒太阳。',sentenceEn:'Sitting on the balcony in the sun.'},
        {word:'舒服',pinyin:'shū fu',en:'comfortable',sentence:'那一定会很舒服。',sentenceEn:'That must feel very comfortable.'}
      ],
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
      difficulty: 2,
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
        "Inside the cow\u2019s belly, Red Head moved along with the grass, from the first stomach to the second, and then from the second stomach back to the cow\u2019s mouth. Now Red Head could see light again. But he could no longer move at all.",
        "Then Green Head crawled onto the cow\u2019s nose and rubbed his body inside the nostrils.",
        "\u201CAchoo!\u201D The cow sneezed, and Red Head was blasted out with a wad of grass.",
        "Seeing his friend, Red Head wept with joy: \u201CThank you\u2026\u201D",
        "Green Head smiled: \u201CDon\u2019t cry \u2014 think of it as a trip through a cow\u2019s stomach!\u201D"
      ],
      recognizeChars: ["咱","偷","答","应","骨","齿","嚼","吞","胃","悲","咽","泪","眯"],
      writeChars: ["旅","咱","偷","救","命","拼","扫","胃","管","乎","流","泪","算"],
      vocabWords: [
        {word:'旅行',pinyin:'lǚ xíng',en:'travel',sentence:'在牛肚子里旅行。',sentenceEn:'Traveling inside a cow stomach.'},
        {word:'蟋蟀',pinyin:'xī shuài',en:'cricket',sentence:'红头和青头是蟋蟀。',sentenceEn:'Red-head and Green-head are crickets.'},
        {word:'反刍',pinyin:'fǎn chú',en:'ruminate',sentence:'牛有反刍的习惯。',sentenceEn:'Cows have the habit of ruminating.'},
        {word:'贮藏',pinyin:'zhù cáng',en:'store',sentence:'牛的胃能贮藏食物。',sentenceEn:'A cow stomach stores food.'},
        {word:'悲哀',pinyin:'bēi āi',en:'sorrowful',sentence:'红头悲哀地哭了。',sentenceEn:'Red-head cried sorrowfully.'}
      ],
      grammarPoints: [
        {point:'虽然……但是……',pointEn:'although...but...',example:'虽然被吃进了肚子里，但是还有机会出来。',exampleEn:'Although swallowed, there is still a chance to get out.',explanation:'转折复句',explanationEn:'Adversative compound sentence'}
      ],
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
      difficulty: 2,
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
      vocabWords: [
        {word:'奶酪',pinyin:'nǎi lào',en:'cheese',sentence:'蚂蚁队长发现了一块奶酪。',sentenceEn:'The ant captain found a piece of cheese.'},
        {word:'纪律',pinyin:'jì lǜ',en:'discipline',sentence:'要遵守纪律。',sentenceEn:'Must follow discipline.'},
        {word:'犹豫',pinyin:'yóu yù',en:'hesitate',sentence:'蚂蚁队长犹豫了一下。',sentenceEn:'The ant captain hesitated.'},
        {word:'分配',pinyin:'fēn pèi',en:'distribute',sentence:'公平地分配食物。',sentenceEn:'Distribute food fairly.'},
        {word:'以身作则',pinyin:'yǐ shēn zuò zé',en:'lead by example',sentence:'队长以身作则。',sentenceEn:'The captain leads by example.'}
      ],
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
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"我来编童话——发挥想象，从给定的角色和场景中选择，编一个童话故事",en:"Write Your Own Fairy Tale \u2014 Use your imagination, choose from the given characters and settings, and compose a fairy tale"},modelEssays:[
      {title:"小兔子开店",titleEn:"Little Rabbit Opens a Shop",level:"基础",
      structure:[
        {cn:"开头：介绍主角和背景",en:"Opening: Introduce the main character and setting"},
        {cn:"中间：遇到问题和解决过程",en:"Middle: Encounter a problem and solve it"},
        {cn:"结尾：揭示道理",en:"Ending: Reveal the moral"}
      ],
      cn:"森林里住着一只小白兔，她想开一家蛋糕店。小白兔每天早早起来，认认真真地做蛋糕。可是，开张的第一天，一个客人也没来。小白兔很伤心。小松鼠路过，闻到了香味，走进来尝了一口，高兴地说：\u201C真好吃！\u201D小松鼠把消息告诉了大家。第二天，小动物们排着队来买蛋糕。小熊说：\u201C草莓蛋糕最棒！\u201D小鹿说：\u201C巧克力蛋糕真甜！\u201D小白兔的店越来越热闹了。她明白了一个道理：只要用心做事，大家一定会看到的。",
      en:"A little white rabbit lived in the forest. She wanted to open a cake shop. Every day she got up early and carefully made cakes. But on opening day, not a single customer came. Little Rabbit was very sad. A squirrel passed by, smelled the fragrance, walked in and took a bite, and said happily, \u2018This is delicious!\u2019 The squirrel told everyone the news. The next day, animals lined up to buy cakes. Bear said, \u2018The strawberry cake is the best!\u2019 Deer said, \u2018The chocolate cake is so sweet!\u2019 Little Rabbit\u2019s shop became busier and busier. She understood a truth: as long as you put your heart into your work, everyone will notice.",
      notes:"这篇童话结构完整（起因—经过—结果），角色可爱，对话生动。道理简单明了：用心做事会有回报。适合初学写童话的同学。",
      notesEn:"This fairy tale has a complete structure (cause \u2014 process \u2014 result), cute characters, and lively dialogue. The moral is simple and clear: hard work is rewarded. Good for students learning to write fairy tales."},
      {title:"骄傲的玫瑰花",titleEn:"The Proud Rose",level:"提高",
      structure:[
        {cn:"开头：用对比引出角色性格",en:"Opening: Use contrast to show character traits"},
        {cn:"发展：骄傲导致困境",en:"Development: Pride leads to trouble"},
        {cn:"转折：得到帮助后反思",en:"Turning point: Reflection after receiving help"},
        {cn:"结尾：角色成长，点明主题",en:"Ending: Character growth and moral"}
      ],
      cn:"花园里有一朵美丽的玫瑰花，她总是昂着头，看不起身边的小草和野花。\u201C你们又矮又丑，怎么配和我站在一起？\u201D玫瑰花骄傲地说。小草和野花听了很难过，但是谁也不跟她争。\n夏天来了，太阳火辣辣地照着。玫瑰花的叶子开始发黄，花瓣也耷拉了下来。她渴极了，可是地面干得都裂开了。这时候，小草的根深深扎在泥土里，把周围的水分送到玫瑰花的根边。野花们也围在玫瑰花身边，帮她挡住了最毒的阳光。\n玫瑰花慢慢恢复了精神。她低下头，红着脸说：\u201C对不起，我以前太骄傲了。谢谢你们救了我。\u201D从那以后，玫瑰花再也不嘲笑别人了，花园里的花儿们都成了好朋友。",
      en:"In the garden there was a beautiful rose who always held her head high, looking down on the grass and wildflowers around her. \u2018You\u2019re so short and ugly \u2014 how can you stand next to me?\u2019 the rose said proudly. The grass and wildflowers felt sad, but no one argued with her.\nSummer came, and the sun blazed fiercely. The rose\u2019s leaves turned yellow and her petals drooped. She was terribly thirsty, but the ground was cracked and dry. Then, the grass, whose roots grew deep in the soil, sent moisture to the rose\u2019s roots. The wildflowers gathered around the rose and shielded her from the harshest sunlight.\nThe rose slowly recovered. She lowered her head and said with a blush, \u2018I\u2019m sorry \u2014 I was too proud before. Thank you for saving me.\u2019 From then on, the rose never mocked others again, and all the flowers in the garden became good friends.",
      notes:"这篇童话用了拟人手法，赋予花儿人的性格。\u201C骄傲—遭难—被帮助—醒悟\u201D的情节很完整。对比手法突出主题：真正的美在于内心。语言比基础篇更丰富，有环境描写。",
      notesEn:"This fairy tale uses personification, giving flowers human personalities. The plot arc \u2018pride \u2014 trouble \u2014 help \u2014 realization\u2019 is complete. Contrast highlights the theme: true beauty is inner beauty. The language is richer than the basic level, with environmental description."},
      {title:"星星的愿望",titleEn:"The Star\u2019s Wish",level:"拓展",
      structure:[
        {cn:"开头：用优美语言营造童话氛围",en:"Opening: Create a fairy-tale atmosphere with beautiful language"},
        {cn:"发展：主角离开舒适区去冒险",en:"Development: The protagonist leaves their comfort zone"},
        {cn:"高潮：经历考验，获得成长",en:"Climax: Face a challenge and grow"},
        {cn:"结尾：回归与升华，余韵悠长",en:"Ending: Return and transcend, leaving a lingering feeling"}
      ],
      cn:"夜空中有一颗最小的星星，她每天眨着眼睛看地上的世界。她看见小河在月光下闪闪发亮，看见孩子们在草地上追萤火虫，她好羡慕啊！\u201C我好想去地上看看。\u201D小星星对月亮妈妈说。月亮妈妈说：\u201C去吧，但记住，天亮之前你必须回来。\u201D\n小星星变成一颗亮闪闪的露珠，落在一朵荷花上。她看见了青蛙在唱歌，蜻蜓在跳舞，萤火虫提着小灯笼飞来飞去。\u201C原来地上这么热闹！\u201D小星星开心极了。一只迷路的小蚂蚁走过来，哭着说：\u201C我找不到家了。\u201D小星星说：\u201C别怕，我来帮你。\u201D她发出柔柔的光，照亮了小路。小蚂蚁顺着光找到了家，感激地说：\u201C谢谢你，小露珠！\u201D\n天快亮了，小星星依依不舍地飞回天空。她发现自己比以前更亮了。月亮妈妈笑着说：\u201C因为你帮助了别人，你的心里多了一份光。\u201D从此，每当夜晚来临，那颗最亮的星星总是温柔地照着大地，好像在守护着每一个需要帮助的小生命。",
      en:"In the night sky there was the tiniest star. She blinked every day, watching the world below. She saw the river sparkling under the moonlight, children chasing fireflies on the grass \u2014 how she envied them! \u2018I so wish I could visit the earth,\u2019 Little Star said to Mother Moon. Mother Moon replied, \u2018Go, but remember \u2014 you must return before dawn.\u2019\nLittle Star turned into a glittering dewdrop and landed on a lotus flower. She saw frogs singing, dragonflies dancing, and fireflies flying about with tiny lanterns. \u2018So this is how lively the earth is!\u2019 Little Star was overjoyed. A lost little ant came by, crying, \u2018I can\u2019t find my home.\u2019 Little Star said, \u2018Don\u2019t be afraid \u2014 I\u2019ll help you.\u2019 She shone a gentle light, illuminating the path. The ant followed the light home and said gratefully, \u2018Thank you, little dewdrop!\u2019\nAs dawn approached, Little Star flew reluctantly back to the sky. She discovered she was brighter than before. Mother Moon smiled and said, \u2018Because you helped someone, your heart gained an extra glow.\u2019 From then on, whenever night falls, the brightest star always shines gently over the earth, as if watching over every little creature that needs help.",
      notes:"这篇童话想象力丰富，语言优美（\u201C柔柔的光\u201D\u201C依依不舍\u201D），情节有起伏。用了\u201C变身\u201D这一经典童话手法，星星变露珠的设定很巧妙。结尾\u201C帮助别人让自己更亮\u201D的主题有深度，且有余韵。",
      notesEn:"This fairy tale is rich in imagination with beautiful language (\u2018gentle light,\u2019 \u2018reluctantly\u2019) and a well-paced plot. It uses the classic fairy-tale device of transformation \u2014 star becoming a dewdrop is clever. The ending theme \u2018helping others makes you shine brighter\u2019 has depth and a lingering resonance."}
    ]},
    happyReading: {title:"快乐读书吧",titleEn:"Happy Reading",prompt:{cn:"在那奇妙的王国里——推荐阅读《安徒生童话》《稻草人》《格林童话》",en:"In That Wonderful Kingdom \u2014 Recommended reading: Andersen\u2019s Fairy Tales, The Scarecrow, Grimm\u2019s Fairy Tales"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 4 — 预测 Prediction (Lessons 12-14)   */
/* ═══════════════════════════════════════════ */
{
  id: 4, title: "预测", titleEn: "Prediction",
  difficulty: 2,
  type: "yuce",
  lessons: [
    {
      id: 12, title: "总也倒不了的老屋", titleEn: "The Old House That Never Falls Down",
      difficulty: 2,
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
      vocabWords: [
        {word:'老屋',pinyin:'lǎo wū',en:'old house',sentence:'老屋已经很久了。',sentenceEn:'The old house is very old.'},
        {word:'暴风雨',pinyin:'bào fēng yǔ',en:'storm',sentence:'暴风雨来了。',sentenceEn:'The storm came.'},
        {word:'安心',pinyin:'ān xīn',en:'at ease',sentence:'老屋让小动物安心。',sentenceEn:'The old house put animals at ease.'},
        {word:'准备',pinyin:'zhǔn bèi',en:'prepare',sentence:'我准备倒下去了。',sentenceEn:'I am about to collapse.'},
        {word:'等等',pinyin:'děng děng',en:'wait',sentence:'等等，再等一下。',sentenceEn:'Wait, wait a little longer.'}
      ],
      grammarPoints: [
        {point:'预测',pointEn:'yù cè',example:'predict',exampleEn:'读到这里你觉得后面会发生什么？',explanation:'What do you think will happen next?',explanationEn:'根据故事发展预测接下来的情节'}
      ],
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
      difficulty: 2,
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
        "And so, as Mr. Carrot walked along step by step, this whisker kept growing longer little by little. You only had to look at how far Mr. Carrot had walked, and you could tell how long this whisker of his had already grown.",
        "Mr. Carrot kept walking, the long whisker blowing behind him in the wind, without him knowing at all.",
        "Far down the street, a boy was flying a kite. His string was too short \u2014 the kite could only fly above the rooftops. Mr. Carrot\u2019s whisker was fluttering in the wind nearby. \u201CThis rope is long enough \u2014 I just wonder if it\u2019s strong.\u201D The boy tugged on the whisker, decided it was strong enough, and snipped off a piece to fly his kite.",
        "Mr. Carrot continued walking. When he passed under Mrs. Bird\u2019s tree, Mrs. Bird was looking for a line to hang her baby birds\u2019 diapers. Mr. Carrot\u2019s whisker was fluttering in the wind\u2026"
      ],
      recognizeChars: ["萝","卜","愁","沾","晾"],
      vocabWords: [
        {word:'胡萝卜',pinyin:'hú luó bo',en:'carrot',sentence:'胡萝卜先生有浓密的胡子。',sentenceEn:'Mr. Carrot had a thick beard.'},
        {word:'发愁',pinyin:'fā chóu',en:'worry',sentence:'他常常为胡子发愁。',sentenceEn:'He often worried about his beard.'},
        {word:'匆匆忙忙',pinyin:'cōng cōng máng máng',en:'in a hurry',sentence:'他匆匆忙忙出门了。',sentenceEn:'He hurried out the door.'},
        {word:'风筝',pinyin:'fēng zheng',en:'kite',sentence:'胡子被当成了风筝线。',sentenceEn:'His beard was used as kite string.'},
        {word:'晾衣绳',pinyin:'liàng yī shéng',en:'clothesline',sentence:'胡子被用作晾衣绳。',sentenceEn:'His beard was used as a clothesline.'}
      ],
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
      difficulty: 3,
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
        "\u201CLearn from me,\u201D a sympathetic little rooster said to him once. The little rooster crowed \u201Ccock-a-doodle-doo\u201D a few times. The little dog tried to imitate the little rooster, but his mouth only produced a funny clucking sound that scared all the little hens nearby into running away.",
        "From then on, the dog practiced every day, secretly from dawn to dusk. One morning in the forest, its crowing was so lifelike, so beautiful, so loud that a fox heard it and thought: at last, a chicken has come to me! The fox came, bringing a knife, fork, and napkin. Imagine its disappointment when it found a dog crowing instead of a rooster!",
        "Later, a cuckoo taught the dog to say \u201Ccoo-coo.\u201D The dog learned well, but a hunter heard the cooing and fired his gun. The terrified dog ran for its life.",
        "The story has three kinds of endings. The first kind: the little dog encounters a young cow and learns to call \u201Cmoo, moo\u201D\u2026 The second kind: the little dog bumps into a farmer\u2026 The third kind: the little dog hears the barking sound of \u201Cwoof, woof\u201D\u2026"
      ],
      recognizeChars: ["吗","讨","厌","怒","批","访","担","压","差","默","模","中","弹","疯","汪","搞"],
      vocabWords: [
        {word:'同情',pinyin:'tóng qíng',en:'sympathize',sentence:'公鸡同情小狗。',sentenceEn:'The rooster sympathized with the dog.'},
        {word:'模仿',pinyin:'mó fǎng',en:'imitate',sentence:'小狗学习模仿。',sentenceEn:'The dog learned to imitate.'},
        {word:'嘲笑',pinyin:'cháo xiào',en:'ridicule',sentence:'有人嘲笑小狗。',sentenceEn:'Someone ridiculed the dog.'},
        {word:'尝试',pinyin:'cháng shì',en:'try',sentence:'小狗不断尝试。',sentenceEn:'The dog kept trying.'},
        {word:'自信',pinyin:'zì xìn',en:'confident',sentence:'最后小狗找到了自信。',sentenceEn:'Finally the dog found confidence.'}
      ],
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
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"续写故事——看图想象，接下来可能发生什么？把故事写完",en:"Continue the Story \u2014 Look at the pictures, imagine what might happen next, and finish the story"},modelEssays:[
      {title:"小狗找到了家",titleEn:"The Puppy Found a Home",level:"基础",
      structure:[
        {cn:"开头：简要交代前情",en:"Opening: Briefly set up the prior story"},
        {cn:"中间：按顺序写接下来发生的事",en:"Middle: Continue events in order"},
        {cn:"结尾：给故事一个圆满结局",en:"Ending: Give the story a happy conclusion"}
      ],
      cn:"李明在放学回家的路上，看见一只小狗蹲在路边，身上脏兮兮的，眼睛可怜巴巴地望着他。\n李明蹲下来，轻轻摸了摸小狗的头。小狗摇了摇尾巴，好像在说：\u201C带我回家吧。\u201D李明把小狗抱回了家，给它洗了个澡。小狗浑身雪白，原来是一只漂亮的小白狗。妈妈回来后，李明说：\u201C妈妈，我们能不能养它？\u201D妈妈看了看小狗，说：\u201C我们先贴个寻狗启事，如果没有人来领，就留下它吧。\u201D一个星期过去了，没有人来。小狗就这样成了李明家的新成员。李明给它起了个名字叫\u201C雪球\u201D，他们每天一起散步、一起玩耍，成了最好的伙伴。",
      en:"On his way home from school, Li Ming saw a puppy crouching by the roadside, dirty all over, gazing at him with pitiful eyes.\nLi Ming squatted down and gently patted the puppy\u2019s head. The puppy wagged its tail as if saying, \u2018Take me home.\u2019 Li Ming carried the puppy home and gave it a bath. The puppy turned out to be snow-white \u2014 a beautiful little white dog. When Mom came home, Li Ming asked, \u2018Mom, can we keep it?\u2019 Mom looked at the puppy and said, \u2018Let\u2019s put up a lost-dog notice first. If nobody comes to claim it, we\u2019ll keep it.\u2019 A week passed and nobody came. The puppy became a new member of Li Ming\u2019s family. Li Ming named it \u2018Snowball,\u2019 and they walked and played together every day, becoming the best of friends.",
      notes:"这篇续写情节简单顺畅，按时间顺序展开。对话自然，结局温暖。\u201C洗澡后发现是白狗\u201D的小反转增加了趣味性。适合初学续写的同学。",
      notesEn:"This continuation has a simple, smooth plot that unfolds chronologically. The dialogue is natural and the ending is warm. The small twist of discovering the dog is white after bathing adds interest. Good for students learning story continuation."},
      {title:"迷路的小鸟",titleEn:"The Lost Little Bird",level:"提高",
      structure:[
        {cn:"开头：承接前文，制造悬念",en:"Opening: Connect to the prior story and create suspense"},
        {cn:"发展：设置困难，尝试解决",en:"Development: Create difficulties and attempt solutions"},
        {cn:"转折：意外帮助推动情节",en:"Turning point: Unexpected help moves the plot"},
        {cn:"结尾：解决问题，收获友谊",en:"Ending: Problem solved, friendship gained"}
      ],
      cn:"一天早上，小美在阳台上发现了一只小鸟，它的翅膀受了伤，飞不起来了。\n小美小心翼翼地把小鸟捧在手心里，用棉花给它包扎了伤口。她每天给小鸟喂水和米粒，还用纸盒给它做了一个温暖的小窝。可是小鸟整天不吃不喝，只是望着窗外叫个不停。小美很担心，问爸爸：\u201C小鸟是不是想妈妈了？\u201D爸爸说：\u201C可能是吧，鸟儿最快乐的地方是天空。\u201D\n过了几天，小鸟的翅膀好了。小美虽然舍不得，但还是打开了窗户。小鸟在窗台上停了一会儿，回头看了看小美，好像在说\u201C谢谢\u201D，然后展开翅膀飞向了蓝天。让小美惊喜的是，从那以后，每天早上那只小鸟都会飞到她的窗台上唱一首歌，好像在问候她。小美觉得，这就是最美的礼物。",
      en:"One morning, Xiao Mei found a little bird on the balcony. Its wing was injured and it couldn\u2019t fly.\nXiao Mei carefully cradled the bird in her hands and bandaged its wound with cotton. Every day she fed the bird water and grains of rice and made it a cozy little nest from a paper box. But the bird wouldn\u2019t eat or drink; it just gazed out the window and chirped constantly. Worried, Xiao Mei asked her father, \u2018Does the bird miss its mother?\u2019 Dad said, \u2018Probably \u2014 the happiest place for a bird is the sky.\u2019\nAfter a few days, the bird\u2019s wing healed. Though reluctant, Xiao Mei opened the window. The bird paused on the windowsill, looked back at Xiao Mei as if saying \u2018thank you,\u2019 then spread its wings and flew into the blue sky. To Xiao Mei\u2019s delight, from that day on, the little bird flew to her windowsill every morning and sang a song, as if greeting her. Xiao Mei felt this was the most beautiful gift.",
      notes:"这篇续写有情感起伏：担心—照顾—不舍—放飞—惊喜。爸爸的话是点睛之笔。小鸟每天来唱歌的结尾既温馨又有想象力，比简单的\u201C快乐结局\u201D更有韵味。",
      notesEn:"This continuation has emotional ups and downs: worry \u2014 care \u2014 reluctance \u2014 release \u2014 surprise. The father\u2019s words are a masterstroke. The ending where the bird visits daily is both heartwarming and imaginative, with more flavor than a simple happy ending."},
      {title:"老树的秘密",titleEn:"The Old Tree\u2019s Secret",level:"拓展",
      structure:[
        {cn:"开头：营造神秘氛围",en:"Opening: Create a mysterious atmosphere"},
        {cn:"发展：层层深入，揭示秘密",en:"Development: Layer by layer, reveal the secret"},
        {cn:"高潮：关键发现带来转折",en:"Climax: A key discovery creates a turning point"},
        {cn:"结尾：点明主题，引发思考",en:"Ending: Highlight the theme and inspire reflection"}
      ],
      cn:"学校后面有一棵很老很老的大树，同学们都说它有一百岁了。有一天，小刚发现树洞里好像藏着什么东西。\n放学后，小刚叫上好朋友小丽一起去看。他们趴在树洞前，用手电筒往里照。\u201C是一个铁盒子！\u201D小丽惊讶地说。小刚伸手把铁盒子掏了出来，盒子已经生了锈，打开后，里面是一本旧旧的日记本和一张泛黄的照片。照片上是几个穿着白衬衫的少年，站在这棵大树前，笑得特别开心。日记本的第一页写着：\u201C1990年6月1日，今天我们在大树下埋了时间胶囊，约好二十年后一起打开。\u201D\n小刚和小丽把这件事告诉了校长。校长看了照片，笑了：\u201C这是我和我的同学们啊！那时候我们也是三年级。\u201D校长的眼眶红了，他说：\u201C没想到过了这么多年，大树还在，记忆也还在。\u201D小刚忽然觉得，这棵老树不只是一棵树，它是一本活着的故事书，记录着一代又一代人的童年。",
      en:"Behind the school stood a very, very old tree. Classmates said it was a hundred years old. One day, Xiao Gang noticed something seemed to be hidden inside the tree\u2019s hollow.\nAfter school, Xiao Gang called his good friend Xiao Li to check it out together. They crouched by the hollow and shone a flashlight inside. \u2018It\u2019s a tin box!\u2019 Xiao Li exclaimed. Xiao Gang reached in and pulled out a rusty tin box. Inside were an old diary and a yellowed photograph. The photo showed several teenagers in white shirts standing in front of this very tree, grinning broadly. The first page of the diary read: \u2018June 1, 1990 \u2014 Today we buried a time capsule under the tree, and we agreed to open it together in twenty years.\u2019\nXiao Gang and Xiao Li told the principal about their discovery. The principal looked at the photo and smiled: \u2018That\u2019s me and my classmates! We were also in third grade back then.\u2019 The principal\u2019s eyes reddened. He said, \u2018I never imagined that after so many years, the tree is still here, and so are the memories.\u2019 Xiao Gang suddenly felt that this old tree wasn\u2019t just a tree \u2014 it was a living storybook, recording the childhoods of generation after generation.",
      notes:"这篇续写构思巧妙：从树洞中的铁盒子到时间胶囊，再到校长就是当年的孩子，层层推进，令人惊喜。结尾\u201C活着的故事书\u201D这个比喻有深度，把个人故事和时间、记忆联系起来。对话推动情节，节奏紧凑。",
      notesEn:"This continuation is cleverly conceived: from the tin box in the tree hollow, to the time capsule, to the principal being one of the original children \u2014 each layer brings a surprise. The ending metaphor \u2018a living storybook\u2019 has depth, connecting personal stories with time and memory. Dialogue drives the plot and the pacing is tight."}
    ]}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 5 — 习作单元 Writing Unit (15-16)     */
/* ═══════════════════════════════════════════ */
{
  id: 5, title: "习作单元", titleEn: "Writing Unit",
  difficulty: 3,
  type: "xiezuo",
  lessons: [
    {
      id: 15, title: "搭船的鸟", titleEn: "The Bird on the Boat",
      difficulty: 3,
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
      vocabWords: [
        {word:'翠鸟',pinyin:'cuì niǎo',en:'kingfisher',sentence:'一只翠鸟搭上了我们的船。',sentenceEn:'A kingfisher boarded our boat.'},
        {word:'蓑衣',pinyin:'suō yī',en:'straw raincoat',sentence:'翠鸟披着翠绿的蓑衣。',sentenceEn:'The kingfisher wore an emerald green raincoat.'},
        {word:'捕鱼',pinyin:'bǔ yú',en:'catch fish',sentence:'翠鸟一头扎进水里捕鱼。',sentenceEn:'The kingfisher dived into water to catch fish.'},
        {word:'吞',pinyin:'tūn',en:'swallow',sentence:'一口吞了下去。',sentenceEn:'Swallowed it in one gulp.'},
        {word:'观察',pinyin:'guān chá',en:'observe',sentence:'留心观察身边的事物。',sentenceEn:'Pay attention to things around you.'}
      ],
      grammarPoints: [
        {point:'观察描写',pointEn:'guān chá miáo xiě',example:'observe and describe',exampleEn:'它的羽毛是翠绿的，翅膀带着一些蓝色。',explanation:'Its feathers are emerald green, wings with some blue.',explanationEn:'通过仔细观察写出事物的特点'}
      ],
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
      difficulty: 3,
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
      vocabWords: [
        {word:'蒲公英',pinyin:'pú gōng yīng',en:'dandelion',sentence:'草地上长满了蒲公英。',sentenceEn:'The meadow is full of dandelions.'},
        {word:'绒毛',pinyin:'róng máo',en:'fluff',sentence:'蒲公英的绒毛飞起来。',sentenceEn:'Dandelion fluff floats up.'},
        {word:'合拢',pinyin:'hé lǒng',en:'close up',sentence:'花朵合拢了。',sentenceEn:'The flowers closed up.'},
        {word:'张开',pinyin:'zhāng kāi',en:'open up',sentence:'花朵张开了。',sentenceEn:'The flowers opened up.'},
        {word:'发现',pinyin:'fā xiàn',en:'discover',sentence:'我发现了草地变色的秘密。',sentenceEn:'I discovered the secret of the color-changing meadow.'}
      ],
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
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"我们眼中的缤纷世界——把最近观察时印象最深的一种事物或一处场景写下来",en:"Our Colorful World \u2014 Write about the most impressive thing or scene you observed recently"},modelEssays:[
      {title:"我家的小猫",titleEn:"My Cat at Home",level:"基础",
      structure:[
        {cn:"开头：介绍观察对象",en:"Opening: Introduce the subject of observation"},
        {cn:"中间：抓住外形和动作特点",en:"Middle: Focus on appearance and behavior"},
        {cn:"结尾：表达喜爱之情",en:"Ending: Express affection"}
      ],
      cn:"我家有一只小花猫，我给它起名叫\u201C花花\u201D。花花的毛是橘色和白色相间的，摸起来软软的，像棉花一样。它的眼睛圆圆的，像两颗绿宝石。\n花花最爱做的事就是晒太阳。每天中午，它都会跳到窗台上，把身子蜷成一团，眯着眼睛，尾巴卷在身边，舒舒服服地睡觉。你要是轻轻摸它，它就会\u201C咕噜咕噜\u201D地叫，好像在说\u201C真舒服\u201D。花花吃东西的样子也很可爱，它会用小舌头一下一下地舔，吃得很仔细。\n我最喜欢花花了，它是我们家最可爱的小成员。",
      en:"Our family has a little tabby cat that I named \u2018Huahua.\u2019 Huahua\u2019s fur is a mix of orange and white, soft to the touch like cotton. Her eyes are round like two green gems.\nHuahua\u2019s favorite thing to do is sunbathe. Every noon, she jumps onto the windowsill, curls up into a ball, squints her eyes, tucks her tail alongside her body, and sleeps comfortably. If you gently pet her, she purrs as if saying \u2018so comfy.\u2019 Huahua is also cute when eating \u2014 she licks carefully with her little tongue, bite by bite.\nI love Huahua the most \u2014 she is the cutest little member of our family.",
      notes:"这篇文章围绕一个观察对象（小猫）来写，抓住了外貌、习惯两个特点。用了比喻（绿宝石、棉花）和拟声词（咕噜咕噜），描写细致。适合初学观察作文的同学。",
      notesEn:"This essay focuses on one subject (the cat) and captures two traits: appearance and habits. It uses similes (green gems, cotton) and onomatopoeia (purring) for detailed description. Good for students starting observational writing."},
      {title:"秋天的校园",titleEn:"The Campus in Autumn",level:"提高",
      structure:[
        {cn:"开头：总写秋天到来的变化",en:"Opening: Describe the overall changes of autumn\u2019s arrival"},
        {cn:"中间：按空间顺序写不同景物",en:"Middle: Describe different scenery in spatial order"},
        {cn:"过渡：加入感官细节",en:"Transition: Add sensory details"},
        {cn:"结尾：抒情，表达对校园秋色的喜爱",en:"Ending: Express love for the autumn campus"}
      ],
      cn:"秋天悄悄来到了我们的校园，把校园打扮得五彩缤纷。\n操场旁边的银杏树最先换上了新衣。一片片扇子形的叶子变成了金黄色，风一吹，它们就像金色的蝴蝶一样飘落下来。花坛里的菊花开了，有白的、黄的、紫的，一朵朵挨挨挤挤，好像在比谁最漂亮。走近一闻，一股淡淡的清香扑鼻而来。\n教学楼前的爬山虎更是一道亮丽的风景。原来绿绿的叶子变成了火红色，远远望去像一片红色的瀑布，铺满了整面墙壁。阳光照在上面，红得发亮，美极了。\n秋天的校园就像一幅五彩的画，每一个角落都有惊喜。我真想把这些美景画下来，永远留住这最美的秋天。",
      en:"Autumn quietly came to our campus, dressing it in a riot of colors.\nThe ginkgo trees beside the playground were the first to put on new outfits. Their fan-shaped leaves turned golden, and when the wind blew, they floated down like golden butterflies. Chrysanthemums bloomed in the flower bed \u2014 white, yellow, purple \u2014 crowded together as if competing for who was prettiest. Up close, a gentle fragrance wafted to the nose.\nThe Boston ivy on the teaching building was an even more splendid sight. Its once-green leaves had turned fiery red, looking like a red waterfall from a distance, covering the entire wall. Sunlight shone on it, making the red glow brilliantly \u2014 absolutely beautiful.\nThe autumn campus is like a colorful painting, with surprises in every corner. I truly wish I could paint these beautiful scenes and keep this loveliest autumn forever.",
      notes:"这篇观察作文按空间顺序（操场—花坛—教学楼）写了三处景物，条理清楚。用了比喻（金色蝴蝶、红色瀑布）和多感官描写（视觉+嗅觉），画面感很强。结尾的抒情自然流畅。",
      notesEn:"This observational essay describes three locations in spatial order (playground \u2014 flower bed \u2014 building), well-organized. It uses similes (golden butterflies, red waterfall) and multi-sensory description (sight + smell) for strong visual impact. The lyrical ending flows naturally."},
      {title:"菜市场的早晨",titleEn:"Morning at the Market",level:"拓展",
      structure:[
        {cn:"开头：点明时间地点，营造氛围",en:"Opening: State time and place, set the atmosphere"},
        {cn:"中间：按\u201C看—听—闻\u201D多感官描写",en:"Middle: Multi-sensory description (see \u2014 hear \u2014 smell)"},
        {cn:"过渡：聚焦一个有趣的细节",en:"Transition: Zoom in on an interesting detail"},
        {cn:"结尾：从场景升华到对生活的感受",en:"Ending: Elevate from the scene to feelings about life"}
      ],
      cn:"星期天早上，妈妈带我去菜市场买菜。还没走到门口，我就听到了热闹的叫卖声。\n走进菜市场，眼前一片五彩缤纷：红红的西红柿堆成小山，绿油油的黄瓜排着整齐的队伍，紫色的茄子胖乎乎的，好像一个个小胖墩。水果摊上更是诱人，橙子散发着甜甜的香气，草莓红艳艳的，像一颗颗小宝石。\n\u201C新鲜的大虾，便宜卖啦！\u201D卖鱼的叔叔大声吆喝着。旁边卖豆腐的阿姨笑着说：\u201C来块豆腐吧，早上刚做的！\u201D妈妈在一个摊位前停下来，挑了几个又大又红的苹果。卖苹果的爷爷笑呵呵地多给了我一个，说：\u201C小朋友，送你一个尝尝。\u201D我连忙说\u201C谢谢\u201D，咬一口，又脆又甜。\n菜市场虽然有点吵，有点挤，但我觉得这里充满了生活的气息。每个人脸上都带着笑容，每个角落都散发着食物的香味。原来，最平凡的地方也藏着最真实的快乐。",
      en:"On Sunday morning, Mom took me to the vegetable market. Before we even reached the entrance, I could hear the lively hawking sounds.\nInside the market, a colorful world unfolded: red tomatoes piled into little mountains, shiny green cucumbers lined up neatly, and plump purple eggplants looked like chubby little fellows. The fruit stall was even more tempting \u2014 oranges gave off a sweet fragrance, and strawberries were brilliantly red like tiny gems.\n\u2018Fresh prawns, selling cheap!\u2019 the fish seller shouted loudly. The tofu lady next to him smiled and said, \u2018Get some tofu \u2014 made fresh this morning!\u2019 Mom stopped at one stall and picked a few big, red apples. The apple-selling grandpa smiled and gave me an extra one, saying, \u2018Here, little one \u2014 try this.\u2019 I quickly said \u2018thank you\u2019 and took a bite \u2014 crisp and sweet.\nThe market is a bit noisy and crowded, but I think it\u2019s full of the flavor of life. Everyone has a smile on their face, and every corner radiates the aroma of food. It turns out that the most ordinary places hide the most genuine happiness.",
      notes:"这篇观察作文视角独特（菜市场），运用了视觉、听觉、嗅觉、味觉四种感官描写，画面生动立体。人物语言活泼，增添了生活气息。结尾\u201C最平凡的地方藏着最真实的快乐\u201D升华了主题，展示了思考深度。",
      notesEn:"This observational essay has a unique perspective (the market) and uses four senses \u2014 sight, hearing, smell, taste \u2014 for vivid, dimensional description. Character dialogue adds liveliness. The ending \u2018the most ordinary places hide the most genuine happiness\u2019 elevates the theme and shows depth of thought."}
    ]},
    exampleEssays: {title:"习作例文",titleEn:"Model Essays",content:{cn:"我家的小狗（描写\u201C王子\u201D的淘气可爱）；我爱故乡的杨梅（描写杨梅的外形、颜色、味道）",en:"My Dog (describing \u2018Prince\u2019s\u2019 mischievous charm); I Love My Hometown\u2019s Bayberries (describing bayberry shape, color, and taste)"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 6 — 课文 Texts (Lessons 17-20)        */
/* ═══════════════════════════════════════════ */
{
  id: 6, title: "课文", titleEn: "Texts",
  difficulty: 3,
  type: "kewen",
  lessons: [
    {
      id: 17, title: "古诗三首", titleEn: "Three Ancient Poems",
      difficulty: 3,
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
      difficulty: 3,
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
      vocabWords: [
        {word:'富饶',pinyin:'fù ráo',en:'rich; fertile',sentence:'西沙群岛是个富饶的地方。',sentenceEn:'The Xisha Islands are a rich place.'},
        {word:'海底',pinyin:'hǎi dǐ',en:'seabed',sentence:'海底的岩石上长着各种珊瑚。',sentenceEn:'Corals grow on the seabed rocks.'},
        {word:'珊瑚',pinyin:'shān hú',en:'coral',sentence:'珊瑚像分枝的鹿角。',sentenceEn:'Corals look like branching antlers.'},
        {word:'海参',pinyin:'hǎi shēn',en:'sea cucumber',sentence:'海参懒洋洋地蠕动。',sentenceEn:'Sea cucumbers sluggishly wiggle.'},
        {word:'海龟',pinyin:'hǎi guī',en:'sea turtle',sentence:'海龟在海里自由游泳。',sentenceEn:'Sea turtles swim freely in the ocean.'}
      ],
      grammarPoints: [
        {point:'总分总结构',pointEn:'zǒng-fēn-zǒng',example:'general-specific-general',exampleEn:'那里风景优美，物产丰富。',explanation:'Beautiful scenery, abundant resources.',explanationEn:'先总说再分说最后总结'}
      ],
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
      difficulty: 3,
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
      vocabWords: [
        {word:'海滨',pinyin:'hǎi bīn',en:'seaside',sentence:'海滨小城真美丽。',sentenceEn:'The seaside town is beautiful.'},
        {word:'喧闹',pinyin:'xuān nào',en:'noisy; bustling',sentence:'大海不再喧闹。',sentenceEn:'The sea is no longer noisy.'},
        {word:'庭院',pinyin:'tíng yuàn',en:'courtyard',sentence:'庭院里种满了鲜花。',sentenceEn:'Courtyards are full of flowers.'},
        {word:'整洁',pinyin:'zhěng jié',en:'tidy',sentence:'小城的街道很整洁。',sentenceEn:'The town streets are very tidy.'},
        {word:'凤凰树',pinyin:'fèng huáng shù',en:'phoenix tree',sentence:'凤凰树开花了。',sentenceEn:'The phoenix tree is blooming.'}
      ],
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
      difficulty: 3,
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
      vocabWords: [
        {word:'抽出',pinyin:'chōu chū',en:'sprout',sentence:'树木抽出新的枝条。',sentenceEn:'Trees sprout new branches.'},
        {word:'浸',pinyin:'jìn',en:'soak; immerse',sentence:'整个森林浸在乳白色的浓雾里。',sentenceEn:'The forest is soaked in milky white fog.'},
        {word:'葱葱茏茏',pinyin:'cōng cōng lóng lóng',en:'lush and verdant',sentence:'树木葱葱茏茏。',sentenceEn:'Trees are lush and verdant.'},
        {word:'宝库',pinyin:'bǎo kù',en:'treasure trove',sentence:'小兴安岭是巨大的宝库。',sentenceEn:'Little Xing an Mountains is a huge treasure trove.'},
        {word:'人参',pinyin:'rén shēn',en:'ginseng',sentence:'这里有珍贵的人参。',sentenceEn:'There is precious ginseng here.'}
      ],
      grammarPoints: [
        {point:'按时间顺序',pointEn:'àn shí jiān shùn xù',example:'chronological order',exampleEn:'春天……夏天……秋天……冬天……',explanation:'Spring...Summer...Autumn...Winter...',explanationEn:'按四季顺序描写景物变化'}
      ],
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
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"这儿真美——把身边的美景介绍给别人，试着围绕一个意思写",en:"This Place Is Beautiful \u2014 Introduce a beautiful place nearby, writing around one central idea"},modelEssays:[
      {title:"美丽的小公园",titleEn:"The Beautiful Little Park",level:"基础",
      structure:[
        {cn:"开头：总写这个地方很美",en:"Opening: Generally state the place is beautiful"},
        {cn:"中间：分别写几处景物",en:"Middle: Describe several specific sights"},
        {cn:"结尾：总结，表达喜爱",en:"Ending: Summarize and express love"}
      ],
      cn:"我家旁边有一个小公园，那儿真美。\n公园里有一个小湖，湖水清清的，能看见小鱼在水里游来游去。湖边种着一排柳树，长长的柳条垂到水面上，风一吹就轻轻摆动，像在跳舞。湖中间有一座小石桥，弯弯的，像一道彩虹。\n公园的草地上种着各种各样的花，春天有桃花，夏天有荷花，秋天有菊花，冬天有腊梅。一年四季都有花开，美丽极了。\n我最喜欢傍晚去公园散步，看夕阳把湖水染成金色，听鸟儿在枝头唱歌。这个小公园虽然不大，但它是我心中最美的地方。",
      en:"There is a little park next to my home \u2014 it\u2019s truly beautiful.\nThe park has a small lake with clear water where you can see fish swimming about. Along the shore stands a row of willow trees, their long branches draping to the water\u2019s surface, swaying gently in the breeze as if dancing. In the middle of the lake is a small stone bridge, curved like a rainbow.\nThe park\u2019s lawn is planted with all kinds of flowers: peach blossoms in spring, lotus in summer, chrysanthemums in autumn, and wintersweet in winter. Flowers bloom in every season \u2014 absolutely beautiful.\nI love taking evening walks in the park, watching the sunset turn the lake golden, listening to birds sing in the branches. Though this little park is small, it is the most beautiful place in my heart.",
      notes:"这篇作文围绕\u201C美\u201D这个中心来写，结构是\u201C总—分—总\u201D，条理清楚。写了湖水、柳树、石桥、花朵四处景物，四季变化增加了层次。比喻自然贴切。",
      notesEn:"This essay centers on \u2018beauty\u2019 with a \u2018general \u2014 specific \u2014 general\u2019 structure, well-organized. It describes four elements (lake, willows, bridge, flowers) and adds depth through seasonal changes. The similes are natural and fitting."},
      {title:"外婆家的小院",titleEn:"Grandma\u2019s Courtyard",level:"提高",
      structure:[
        {cn:"开头：引出地点，表达特殊感情",en:"Opening: Introduce the place with special feelings"},
        {cn:"中间：按空间顺序描写，加入活动",en:"Middle: Describe in spatial order with activities included"},
        {cn:"过渡：融入人物和故事",en:"Transition: Blend in people and stories"},
        {cn:"结尾：表达思念和感悟",en:"Ending: Express longing and reflection"}
      ],
      cn:"外婆家有一个小院子，那是我最喜欢的地方。\n一推开木门，首先映入眼帘的是一架葡萄藤。夏天的时候，绿油油的叶子搭成一个天然的凉棚，一串串紫色的葡萄挂在上面，像一颗颗紫色的珍珠。院子左边是外婆的菜园，里面种着西红柿、辣椒和黄瓜。西红柿红彤彤的，辣椒绿油油的，看着就让人高兴。\n院子右边有一棵大枣树，秋天的时候结满了又大又甜的红枣。我和表弟最喜欢拿竹竿打枣子，枣子掉下来，我们就抢着捡，笑声在院子里回荡。\n外婆常常坐在院子里的小凳子上，一边择菜一边给我讲故事。阳光洒在她的身上，暖暖的，那画面特别温馨。每次离开外婆家，我都会回头看看那个小院子。它不只是一个院子，更装满了我和外婆在一起的快乐时光。",
      en:"Grandma has a small courtyard at her home \u2014 it\u2019s my favorite place.\nAs soon as you push open the wooden gate, a grapevine greets your eyes. In summer, its lush green leaves form a natural shade canopy, with clusters of purple grapes hanging down like strings of purple pearls. On the left side of the courtyard is Grandma\u2019s vegetable garden, planted with tomatoes, peppers, and cucumbers. The tomatoes are bright red, the peppers glossy green \u2014 just looking at them makes you happy.\nOn the right side stands a big jujube tree. In autumn it\u2019s loaded with big, sweet red dates. My cousin and I love knocking dates down with a bamboo pole \u2014 when they fall, we scramble to pick them up, our laughter echoing through the courtyard.\nGrandma often sits on a little stool in the courtyard, sorting vegetables while telling me stories. Sunlight falls on her, warm and gentle \u2014 the scene is especially heartwarming. Every time I leave Grandma\u2019s house, I look back at that little courtyard. It\u2019s not just a yard \u2014 it\u2019s filled with the happy times I\u2019ve spent with Grandma.",
      notes:"这篇作文不只写景，还融入了人物活动（打枣、讲故事），让景物描写更有温度。按空间顺序（门口—左边—右边）写，条理清晰。结尾从写景上升到写情，主题更深刻。",
      notesEn:"This essay doesn\u2019t just describe scenery \u2014 it blends in human activities (knocking dates, telling stories), adding warmth to the description. Spatial order (entrance \u2014 left \u2014 right) provides clear organization. The ending rises from scenery to emotion, deepening the theme."},
      {title:"雨后的田野",titleEn:"The Fields After Rain",level:"拓展",
      structure:[
        {cn:"开头：用对比引出雨后美景",en:"Opening: Use contrast to introduce post-rain beauty"},
        {cn:"中间：远景到近景，动静结合",en:"Middle: From distant to close views, combining movement and stillness"},
        {cn:"高潮：发现细微之美",en:"Climax: Discover subtle beauty"},
        {cn:"结尾：感悟自然之美，回扣标题",en:"Ending: Reflect on nature\u2019s beauty, echo the title"}
      ],
      cn:"昨天下了一场大雨，今天一早，爸爸带我去田野里散步。推开门，一股清新的泥土气息扑面而来，我忍不住深深吸了一口气。\n远远望去，田野像是被洗过一样，绿得发亮。一块块稻田整整齐齐，稻苗上还挂着晶莹的水珠，在阳光下闪闪发光，像无数颗小钻石。远处的山被一层薄薄的雾纱笼罩着，若隐若现，像一幅水墨画。\n走近小溪边，溪水涨了不少，哗哗地流着，比平时更欢快了。几只白鹭从水面上飞过，翅膀掠过水面，溅起一串水花。我蹲下来看溪边的石头，发现上面长着绿绿的苔藓，一只小青蛙正蹲在荷叶上，鼓着大眼睛望着我，好像在说：\u201C你好啊！\u201D\n爸爸说：\u201C大自然就是最好的画家。\u201D我点点头。雨后的田野，空气是甜的，颜色是亮的，声音是清脆的。这儿真美，美得让人舍不得离开。",
      en:"It rained heavily yesterday. Early this morning, Dad took me for a walk in the fields. As we opened the door, a fresh earthy scent greeted us, and I couldn\u2019t help taking a deep breath.\nLooking into the distance, the fields seemed freshly washed, glistening green. Neat rows of rice paddies still held crystal water droplets on their seedlings, sparkling in the sunlight like countless tiny diamonds. The far-off mountains were veiled in a thin layer of mist, appearing and disappearing like an ink-wash painting.\nNear the stream, the water had risen and flowed with a cheerful gurgle, livelier than usual. Several egrets flew over the water\u2019s surface, their wings skimming it and splashing up a string of droplets. I crouched by the stream and saw green moss on the stones. A little frog sat on a lotus leaf, staring at me with bulging eyes as if saying, \u2018Hello there!\u2019\nDad said, \u2018Nature is the best painter.\u2019 I nodded. After the rain, the fields\u2019 air is sweet, their colors bright, their sounds crisp. This place is truly beautiful \u2014 so beautiful you can\u2019t bear to leave.",
      notes:"这篇作文写作技巧丰富：远景到近景的空间变化、动静结合（稻田的静vs溪水的动）、多感官描写（视觉+嗅觉+听觉）。\u201C水墨画\u201D\u201C小钻石\u201D等比喻生动。结尾三个排比句节奏感强，\u201C美得让人舍不得离开\u201D回扣标题\u201C这儿真美\u201D。",
      notesEn:"This essay is rich in technique: spatial shift from distant to close views, combining stillness (paddies) with movement (stream), and multi-sensory description (sight + smell + sound). Similes like \u2018ink-wash painting\u2019 and \u2018tiny diamonds\u2019 are vivid. The three parallel phrases at the ending create rhythm, and \u2018so beautiful you can\u2019t bear to leave\u2019 echoes the title \u2018This Place Is Beautiful.\u2019"}
    ]}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 7 — 课文 Texts (Lessons 21-23)        */
/* ═══════════════════════════════════════════ */
{
  id: 7, title: "课文", titleEn: "Texts",
  difficulty: 3,
  type: "kewen",
  lessons: [
    {
      id: 21, title: "大自然的声音", titleEn: "Sounds of Nature",
      difficulty: 3,
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
      vocabWords: [
        {word:'美妙',pinyin:'měi miào',en:'wonderful',sentence:'大自然有许多美妙的声音。',sentenceEn:'Nature has many wonderful sounds.'},
        {word:'演奏',pinyin:'yǎn zòu',en:'perform (music)',sentence:'风是大自然的音乐家。',sentenceEn:'Wind is nature musician.'},
        {word:'温柔',pinyin:'wēn róu',en:'gentle',sentence:'微风是温柔的。',sentenceEn:'The breeze is gentle.'},
        {word:'激动',pinyin:'jī dòng',en:'excited',sentence:'狂风令人激动。',sentenceEn:'Gale winds are exciting.'},
        {word:'汇聚',pinyin:'huì jù',en:'converge',sentence:'小溪汇聚成河流。',sentenceEn:'Brooks converge into rivers.'}
      ],
      grammarPoints: [
        {point:'拟人',pointEn:'nǐ rén',example:'personification',exampleEn:'风是大自然的音乐家。',explanation:'Wind is nature musician.',explanationEn:'把事物当作人来描写'}
      ],
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
      difficulty: 3,
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
      vocabWords: [
        {word:'大自然',pinyin:'dà zì rán',en:'nature',sentence:'大自然就是一本读不完的大书。',sentenceEn:'Nature is a never-ending big book.'},
        {word:'蚂蚁',pinyin:'mǎ yǐ',en:'ant',sentence:'蚂蚁搬家。',sentenceEn:'Ants move house.'},
        {word:'高明',pinyin:'gāo míng',en:'brilliant',sentence:'蜘蛛织网真高明。',sentenceEn:'Spiders weaving webs is brilliant.'},
        {word:'花鸟虫鱼',pinyin:'huā niǎo chóng yú',en:'flowers birds insects fish',sentence:'花鸟虫鱼都是老师。',sentenceEn:'Flowers, birds, insects, fish are all teachers.'},
        {word:'奥秘',pinyin:'ào mì',en:'mystery',sentence:'大自然充满了奥秘。',sentenceEn:'Nature is full of mysteries.'}
      ],
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
      difficulty: 3,
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
      vocabWords: [
        {word:'黎明',pinyin:'lí míng',en:'dawn',sentence:'黎明时分的树林。',sentenceEn:'The forest at dawn.'},
        {word:'雾蒙蒙',pinyin:'wù méng méng',en:'misty',sentence:'雾蒙蒙的树林。',sentenceEn:'The misty forest.'},
        {word:'热腾腾',pinyin:'rè téng téng',en:'steaming',sentence:'鸟的气味热腾腾的。',sentenceEn:'The scent of birds is steamy.'},
        {word:'舒畅',pinyin:'shū chàng',en:'relaxed; happy',sentence:'鸟唱歌最舒畅。',sentenceEn:'Birds are happiest when singing.'},
        {word:'猎人',pinyin:'liè rén',en:'hunter',sentence:'最怕的是猎人。',sentenceEn:'What they fear most is hunters.'}
      ],
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
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"我有一个想法——生活中有哪些现象或问题引起了你的关注？把现象和你的想法写清楚",en:"I Have an Idea \u2014 What issues or phenomena in life have caught your attention? Write about them clearly with your thoughts"},modelEssays:[
      {title:"不要浪费粮食",titleEn:"Don\u2019t Waste Food",level:"基础",
      structure:[
        {cn:"开头：说出观察到的现象",en:"Opening: Describe the observed phenomenon"},
        {cn:"中间：分析为什么这样不好",en:"Middle: Analyze why this is problematic"},
        {cn:"结尾：提出自己的想法和建议",en:"Ending: Present your own idea and suggestion"}
      ],
      cn:"最近我发现了一个现象：学校食堂里，每天都有很多同学把饭菜倒掉。有的同学米饭只吃了几口就不吃了，有的同学把不喜欢的菜全部倒掉。食堂的泔水桶每天都满满的。\n我觉得浪费粮食是不对的。我们学过\u201C谁知盘中餐，粒粒皆辛苦\u201D，每一粒米饭都是农民伯伯辛辛苦苦种出来的。而且，世界上还有很多人吃不饱饭呢。\n我有一个想法：学校可以让同学们打饭的时候，吃多少打多少，不要打太多。老师也可以给同学们讲一讲粮食是怎么来的，让大家知道粮食的来之不易。我自己也要做到不浪费，把碗里的饭菜都吃干净。",
      en:"Recently I noticed a phenomenon: every day in the school cafeteria, many students throw away food. Some students only take a few bites of rice before stopping; others dump all the dishes they don\u2019t like. The slop buckets are full every day.\nI think wasting food is wrong. We learned the poem \u2018who knows the food on our plate, every grain was hard-earned.\u2019 Every grain of rice was grown through farmers\u2019 hard work. Moreover, many people in the world still don\u2019t have enough to eat.\nI have an idea: the school could let students serve only as much as they can eat, not too much. Teachers could also explain to students where food comes from, so everyone understands how precious it is. I will also make sure not to waste food and eat everything in my bowl.",
      notes:"这篇作文结构清楚：现象—分析—建议。引用古诗\u201C谁知盘中餐\u201D增强了说服力。提出的建议具体可行。适合初学\u201C想法类\u201D作文的同学。",
      notesEn:"This essay has a clear structure: phenomenon \u2014 analysis \u2014 suggestion. Quoting the ancient poem \u2018who knows the food on our plate\u2019 adds persuasiveness. The suggestions are specific and practical. Good for students learning to write opinion pieces."},
      {title:"放下手机，多陪陪我",titleEn:"Put Down the Phone and Spend Time with Me",level:"提高",
      structure:[
        {cn:"开头：用具体场景引出问题",en:"Opening: Use a specific scene to introduce the problem"},
        {cn:"中间：多角度描写现象",en:"Middle: Describe the phenomenon from multiple angles"},
        {cn:"转折：表达自己的真实感受",en:"Turning point: Express genuine feelings"},
        {cn:"结尾：提出想法，语气真诚",en:"Ending: Present ideas with sincerity"}
      ],
      cn:"我有一个想法，想说给爸爸妈妈听。\n每天吃完晚饭，爸爸就坐在沙发上刷手机，妈妈也在旁边看短视频。我想让爸爸陪我下棋，爸爸说\u201C等一下\u201D，可是一等就是半个小时。我想让妈妈给我讲故事，妈妈说\u201C马上\u201D，可是她的眼睛还是盯着屏幕。\n周末去公园玩的时候，我看见很多家长都在低头看手机，小朋友们只好自己玩。有一个小妹妹摔倒了，哭了好一会儿，她的妈妈才发现。\n我心里有点难过。我知道爸爸妈妈工作很辛苦，手机也有很多有用的东西。但是我觉得，和家人在一起的时候，应该放下手机，好好聊聊天，一起做游戏。因为我们在一起的时间其实没有那么多，我希望每一分钟都是快乐的。\n爸爸妈妈，你们能不能每天抽出半小时，放下手机，陪我聊聊天、做做游戏呢？",
      en:"I have an idea that I want to share with Mom and Dad.\nEvery evening after dinner, Dad sits on the sofa scrolling through his phone, and Mom watches short videos next to him. I ask Dad to play chess with me, and he says \u2018in a moment\u2019 \u2014 but that moment lasts half an hour. I ask Mom to tell me a story, and she says \u2018right away\u2019 \u2014 but her eyes are still glued to the screen.\nAt the park on weekends, I see many parents looking down at their phones while children play alone. A little girl fell down and cried for a long time before her mother noticed.\nI feel a bit sad inside. I know Mom and Dad work very hard, and phones have many useful things. But I think when families are together, they should put down their phones, have a real conversation, and play games together. Because the time we have together isn\u2019t really that much \u2014 I hope every minute can be happy.\nMom and Dad, could you set aside half an hour every day to put down your phones and chat with me or play together?",
      notes:"这篇作文选题贴近生活，很有共鸣。先写家里的现象，再写公园看到的，从个人到社会，视野开阔。情感表达真挚（\u201C心里有点难过\u201D），不是批评而是商量的语气，让人感动。结尾的请求具体真诚。",
      notesEn:"This essay\u2019s topic resonates deeply with real life. It moves from the home scene to a park observation, broadening from personal to social perspective. The emotional expression is genuine (\u2018I feel a bit sad\u2019), using a negotiating tone rather than criticism, which is moving. The final request is specific and sincere."},
      {title:"保护我们的小河",titleEn:"Protect Our Little River",level:"拓展",
      structure:[
        {cn:"开头：用今昔对比引出问题",en:"Opening: Use past-present contrast to introduce the problem"},
        {cn:"中间：多角度描写污染现象",en:"Middle: Describe pollution from multiple angles"},
        {cn:"转折：分析原因",en:"Turning point: Analyze the causes"},
        {cn:"结尾：提出系统性建议，呼吁行动",en:"Ending: Propose systematic suggestions and call to action"}
      ],
      cn:"我家门前有一条小河。听爷爷说，他小时候，这条河清澈见底，夏天孩子们都在河里游泳捉鱼。可是现在，小河变了。\n河水变成了深绿色，还散发着一股难闻的气味。河面上漂着塑料袋、饮料瓶和各种垃圾。以前河里成群的小鱼不见了，连水草也枯黄了。有一次，我看见一位叔叔把一桶脏水直接倒进了河里，我心里特别难受。\n我想了想，小河变脏有几个原因：有人往河里扔垃圾，有人把污水排进河里，还有人在河边洗衣服倒洗衣水。大家觉得小河不重要，所以不爱护它。\n我有几个想法：第一，在河边立一些提示牌，提醒大家不要往河里扔垃圾。第二，居委会可以组织大家定期清理河道。第三，学校可以组织同学们去河边捡垃圾，让大家从小养成保护环境的习惯。\n我相信，只要每个人都行动起来，小河一定能变回爷爷记忆中的样子。我期待那一天，我也能在清清的河水里捉鱼、游泳。",
      en:"There is a little river in front of my home. Grandpa told me that when he was young, the river was crystal clear, and in summer children would swim and catch fish in it. But now, the little river has changed.\nThe water has turned dark green and gives off an unpleasant smell. Plastic bags, drink bottles, and all kinds of garbage float on the surface. The schools of fish that once filled the river are gone, and even the water plants have withered and turned yellow. Once I saw a man pour a bucket of dirty water straight into the river \u2014 I felt terrible inside.\nThinking about it, the river got dirty for several reasons: people throw trash into it, some dump sewage in, and others wash clothes by the river and pour the wash water in. People don\u2019t think the little river matters, so they don\u2019t take care of it.\nI have a few ideas: First, put up signs by the river reminding people not to dump trash. Second, the neighborhood committee could organize regular river cleanups. Third, schools could arrange for students to pick up litter by the river, helping everyone develop environmental habits from a young age.\nI believe that as long as everyone takes action, the little river can return to how it was in Grandpa\u2019s memories. I look forward to the day when I too can catch fish and swim in clear river water.",
      notes:"这篇作文视角宏大，从\u201C个人观察\u201D到\u201C原因分析\u201D再到\u201C系统建议\u201D，逻辑层层递进。今昔对比开头引人深思，多角度描写污染（颜色、气味、垃圾）很有感染力。提出三条建议具体可行，显示了较强的思维能力。结尾展望未来，回应开头，首尾呼应。",
      notesEn:"This essay has a broad perspective, progressing logically from personal observation to cause analysis to systematic suggestions. The past-present contrast opening provokes thought; multi-angle pollution description (color, smell, trash) is impactful. Three specific, practical suggestions show strong thinking. The ending looks to the future and echoes the opening, creating structural coherence."}
    ]}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 8 — 课文 Texts (Lessons 24-27)        */
/* ═══════════════════════════════════════════ */
{
  id: 8, title: "课文", titleEn: "Texts",
  difficulty: 3,
  type: "kewen",
  lessons: [
    {
      id: 24, title: "司马光", titleEn: "Sima Guang",
      difficulty: 3,
      text: [
        "群儿戏于庭，一儿登瓮，足跌没水中。众皆弃去，光持石击瓮破之，水迸，儿得活。"
      ],
      textEn: [
        "A group of children were playing in the courtyard. One child climbed onto a large water jar and slipped, falling into the water. All the others ran away in fright. Only Sima Guang picked up a stone and smashed the jar. Water gushed out, and the child was saved."
      ],
      recognizeChars: ["司","跌","皆","弃","持"],
      writeChars: ["司","庭","登","跌","众","弃","持"],
      vocabWords: [
        {word:'庭院',pinyin:'tíng yuàn',en:'courtyard',sentence:'群儿戏于庭。',sentenceEn:'Children played in the courtyard.'},
        {word:'跌落',pinyin:'diē luò',en:'fall into',sentence:'一儿登瓮，足跌没水中。',sentenceEn:'One child climbed the vat and fell in.'},
        {word:'击破',pinyin:'jī pò',en:'smash',sentence:'光持石击瓮破之。',sentenceEn:'Guang took a stone and smashed the vat.'},
        {word:'沉着',pinyin:'chén zhuó',en:'calm',sentence:'司马光很沉着。',sentenceEn:'Sima Guang was very calm.'},
        {word:'机智',pinyin:'jī zhì',en:'clever; quick-witted',sentence:'司马光机智救人。',sentenceEn:'Sima Guang cleverly saved the child.'}
      ],
      grammarPoints: [
        {point:'文言文',pointEn:'wén yán wén',example:'classical Chinese',exampleEn:'群儿戏于庭。',explanation:'Children played in the courtyard.',explanationEn:'古代书面语言，简洁精炼'}
      ],
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
      difficulty: 3,
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
      vocabWords: [
        {word:'灰雀',pinyin:'huī què',en:'gray sparrow',sentence:'公园里有灰雀。',sentenceEn:'There are gray sparrows in the park.'},
        {word:'仰望',pinyin:'yǎng wàng',en:'look up',sentence:'列宁仰望灰雀。',sentenceEn:'Lenin looked up at the sparrows.'},
        {word:'诚实',pinyin:'chéng shí',en:'honest',sentence:'男孩是诚实的。',sentenceEn:'The boy was honest.'},
        {word:'果然',pinyin:'guǒ rán',en:'as expected',sentence:'灰雀果然飞回来了。',sentenceEn:'The sparrow returned, as expected.'},
        {word:'可惜',pinyin:'kě xī',en:'pity',sentence:'那只灰雀不见了，多可惜。',sentenceEn:'The sparrow is gone, what a pity.'}
      ],
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
      difficulty: 3,
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
      vocabWords: [
        {word:'手术台',pinyin:'shǒu shù tái',en:'operating table',sentence:'手术台就是阵地。',sentenceEn:'The operating table is the battlefield.'},
        {word:'阵地',pinyin:'zhèn dì',en:'battlefield',sentence:'白求恩坚守阵地。',sentenceEn:'Bethune held his ground.'},
        {word:'撤退',pinyin:'chè tuì',en:'retreat',sentence:'其他人撤退了。',sentenceEn:'Others retreated.'},
        {word:'坚持',pinyin:'jiān chí',en:'persist',sentence:'白求恩坚持做手术。',sentenceEn:'Bethune persisted in operating.'},
        {word:'白求恩',pinyin:'bái qiú ēn',en:'Norman Bethune',sentence:'白求恩是加拿大医生。',sentenceEn:'Bethune was a Canadian doctor.'}
      ],
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
      difficulty: 3,
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
      vocabWords: [
        {word:'粗瓷',pinyin:'cū cí',en:'coarse porcelain',sentence:'一个粗瓷大碗。',sentenceEn:'A large coarse porcelain bowl.'},
        {word:'丢掉',pinyin:'diū diào',en:'throw away',sentence:'赵一曼又丢掉了碗。',sentenceEn:'Zhao Yiman threw away the bowl again.'},
        {word:'战士',pinyin:'zhàn shì',en:'soldier',sentence:'战士们送给她碗。',sentenceEn:'Soldiers gave her a bowl.'},
        {word:'粮食',pinyin:'liáng shi',en:'grain',sentence:'粮食很紧张。',sentenceEn:'Grain was very scarce.'},
        {word:'关心',pinyin:'guān xīn',en:'care about',sentence:'她关心战士们的生活。',sentenceEn:'She cared about the soldiers lives.'}
      ],
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
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"不迁怒，不贰过。——《论语》\n爱人若爱其身。——《墨子》\n仁者爱人，有礼者敬人。——《孟子》\n与人善言，暖于布帛；伤人以言，深于矛戟。——《荀子》",en:"Do not transfer anger; do not repeat mistakes. \u2014 Analects\nLove others as you love yourself. \u2014 Mozi\nThe benevolent love others; the courteous respect others. \u2014 Mencius\nKind words warm like silk; hurtful words cut deeper than spears. \u2014 Xunzi"}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"辨析近义词：陆续/继续/连续。帮妈妈整理购物清单（分类列出要买的东西）",en:"Distinguish near-synonyms: one by one / continue / continuously. Help mom organize a shopping list (categorize items to buy)"}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"那次玩得真高兴——回忆一次特别开心的经历，把玩的过程像放电影一样回想一遍，写下来",en:"That Time Was So Much Fun \u2014 Recall an especially happy experience, replay the process like a movie in your mind, and write it down"},modelEssays:[
      {title:"放风筝",titleEn:"Flying Kites",level:"基础",
      structure:[
        {cn:"开头：交代时间、地点、人物",en:"Opening: State time, place, and people"},
        {cn:"中间：按顺序写玩的过程",en:"Middle: Describe the activity step by step"},
        {cn:"结尾：表达快乐心情",en:"Ending: Express joyful feelings"}
      ],
      cn:"上个星期天，天气特别好，爸爸带我去广场上放风筝。\n广场上已经有好多人在放风筝了。天上飘着各种各样的风筝，有老鹰的，有蝴蝶的，还有长长的蜈蚣风筝。我的风筝是一只燕子，黑色的翅膀，红色的肚子，特别漂亮。\n爸爸帮我举着风筝，我拿着线轴。\u201C跑！\u201D爸爸一喊，我就使劲往前跑。可是风筝刚飞起来就掉下来了。我不灰心，又试了一次。这一次，风刚好吹过来，风筝一下子就飞起来了！我一边跑一边放线，风筝越飞越高。我高兴地喊：\u201C爸爸快看，我的燕子飞起来了！\u201D\n看着风筝在蓝天上自由自在地飞，我觉得自己也像在飞一样。那次玩得真高兴！",
      en:"Last Sunday the weather was especially nice, and Dad took me to the plaza to fly kites.\nThere were already many people flying kites in the plaza. All kinds of kites floated in the sky \u2014 eagles, butterflies, and even a long centipede kite. My kite was a swallow with black wings and a red belly \u2014 very pretty.\nDad held the kite up while I held the string reel. \u2018Run!\u2019 Dad shouted, and I ran as fast as I could. But the kite rose only to fall right back down. I didn\u2019t give up and tried again. This time, the wind blew just right and the kite soared up at once! I ran and let out the string, and the kite flew higher and higher. I shouted happily, \u2018Dad, look \u2014 my swallow is flying!\u2019\nWatching the kite fly freely in the blue sky, I felt as if I were flying too. That time was so much fun!",
      notes:"这篇作文按照\u201C准备—失败—成功\u201D的过程来写，有波折、有高潮。对话生动，动作描写具体（\u201C使劲跑\u201D\u201C放线\u201D）。结尾呼应标题，感受自然真实。",
      notesEn:"This essay follows a \u2018preparation \u2014 failure \u2014 success\u2019 sequence with twists and a climax. The dialogue is lively and the action descriptions are specific (\u2018ran hard,\u2019 \u2018let out the string\u2019). The ending echoes the title with natural, genuine feelings."},
      {title:"捉迷藏",titleEn:"Hide and Seek",level:"提高",
      structure:[
        {cn:"开头：交代背景，营造期待",en:"Opening: Set the background and build anticipation"},
        {cn:"发展：详写一次躲藏的过程",en:"Development: Detail one hiding experience"},
        {cn:"高潮：被发现时的紧张和惊喜",en:"Climax: Tension and surprise of being found"},
        {cn:"结尾：回味快乐，余味悠长",en:"Ending: Savor the joy with a lingering aftertaste"}
      ],
      cn:"去年暑假，我去乡下表哥家玩。一天傍晚，我和表哥还有邻居家的小朋友一起玩捉迷藏。\n表哥来找，我们去藏。我悄悄跑到后院，发现了一个绝妙的藏身之处——大水缸和墙壁之间有一条窄窄的缝。我侧着身子挤了进去，心砰砰直跳，又紧张又兴奋。\n\u201C找到你了！\u201D院子里传来表哥的喊声，有人被找到了。我大气不敢出，紧紧贴着水缸。一只蚂蚁爬到我手上，痒痒的，我差点叫出来，赶紧咬住嘴唇忍住了。\n过了好一会儿，表哥从我面前走过去了，居然没有发现我！我偷偷在缝隙里笑。最后，表哥怎么也找不到我，急得直喊：\u201C我认输了，你出来吧！\u201D我从缝隙里钻出来，表哥看见我藏的地方，哈哈大笑：\u201C你怎么钻到那儿去的！\u201D大家笑成一团，笑声在院子里飘了很远很远。\n那天晚上，我躺在床上还在笑。那次玩得可真高兴啊，我到现在都忘不了！",
      en:"Last summer vacation, I visited my cousin in the countryside. One evening, my cousin, neighbor kids, and I played hide and seek.\nMy cousin was the seeker and we hid. I sneaked to the backyard and found a perfect hiding spot \u2014 a narrow gap between the big water jar and the wall. I squeezed in sideways, my heart pounding, both nervous and excited.\n\u2018Found you!\u2019 My cousin\u2019s shout came from the yard \u2014 someone had been caught. I held my breath, pressing tightly against the water jar. An ant crawled onto my hand \u2014 it tickled so much I nearly cried out, but I quickly bit my lip and held it in.\nAfter a long while, my cousin walked right past me without noticing! I giggled secretly in the gap. Finally, my cousin couldn\u2019t find me no matter what and shouted in frustration, \u2018I give up \u2014 come out!\u2019 I squeezed out of the gap, and when my cousin saw where I\u2019d been hiding, he burst out laughing: \u2018How did you get in there!\u2019 Everyone collapsed in laughter, and the sound drifted far across the courtyard.\nThat night, lying in bed, I was still laughing. That time was truly so much fun \u2014 I\u2019ll never forget it!",
      notes:"这篇作文把捉迷藏的过程写得像电影一样，有\u201C找到别人\u201D\u201C蚂蚁捣乱\u201D\u201C表哥认输\u201D三个小高潮。心理描写细腻（\u201C心砰砰直跳\u201D\u201C大气不敢出\u201D），让读者也跟着紧张。结尾\u201C躺在床上还在笑\u201D很有感染力。",
      notesEn:"This essay unfolds hide and seek like a movie, with three mini-climaxes: someone found, the ant interruption, and the cousin giving up. Psychological descriptions are delicate (\u2018heart pounding,\u2019 \u2018held my breath\u2019), pulling readers into the tension. The ending \u2018still laughing in bed\u2019 is infectiously joyful."},
      {title:"第一次游泳",titleEn:"My First Time Swimming",level:"拓展",
      structure:[
        {cn:"开头：写期待和紧张交织的心情",en:"Opening: Describe mixed feelings of anticipation and nervousness"},
        {cn:"发展：详写学习和克服恐惧的过程",en:"Development: Detail the learning process and overcoming fear"},
        {cn:"高潮：突破自我的关键时刻",en:"Climax: The key moment of breaking through"},
        {cn:"结尾：成长感悟，升华主题",en:"Ending: Growth reflection, elevate the theme"}
      ],
      cn:"去年夏天，爸爸带我去游泳馆学游泳。这是我第一次下水，心里既期待又害怕。\n到了游泳馆，看见碧蓝的池水，我的腿有点发软。教练让我先在浅水区适应。水慢慢没过我的腰，凉凉的，我紧紧抓着池壁不敢松手。教练笑着说：\u201C别怕，水会托住你的。先学憋气。\u201D我深吸一口气，把头埋进水里。\u201C一、二、三\u2026\u2026\u201D刚数到三我就受不了了，猛地抬起头，呛了一口水，鼻子酸酸的，眼泪都快出来了。\n我想放弃，可是看见旁边比我小的小朋友都在认真练习，我又鼓起了勇气。第二次、第三次\u2026\u2026慢慢地，我能憋十秒了。然后教练教我蹬腿，\u201C像青蛙一样，收——翻——蹬——夹！\u201D我在水里笨笨地蹬着，喝了好几口水，但每一次都比上一次好一点。\n到了第五天，教练说：\u201C试试自己游。\u201D我松开了池壁，用力蹬腿，手划水\u2014\u2014我居然往前移动了！虽然只游了两三米，但那一刻，我觉得自己就像一条小鱼，自由极了！我兴奋地朝爸爸喊：\u201C爸爸，我会游了！\u201D爸爸在岸上使劲鼓掌。\n回家的路上，我的头发还是湿的，鼻子还有点酸，但我心里美滋滋的。我明白了一个道理：只要不放弃，再难的事也能学会。那次玩得真高兴，因为我不仅学会了游泳，还学会了勇敢。",
      en:"Last summer, Dad took me to the swimming pool to learn to swim. It was my first time in the water, and I felt both excited and scared.\nAt the pool, seeing the blue water made my legs go weak. The coach had me start in the shallow end. The water slowly rose past my waist \u2014 cool to the touch \u2014 and I gripped the pool wall, not daring to let go. The coach smiled and said, \u2018Don\u2019t be afraid \u2014 the water will support you. Let\u2019s start with holding your breath.\u2019 I took a deep breath and buried my head in the water. \u2018One, two, three\u2026\u2019 I could barely make it to three before I shot up, choked on water, my nose stinging, tears nearly flowing.\nI wanted to quit, but then I saw kids younger than me practicing earnestly, and I mustered my courage again. Second try, third try\u2026 gradually I could hold my breath for ten seconds. Then the coach taught me to kick: \u2018Like a frog \u2014 pull in, turn, kick, squeeze!\u2019 I kicked clumsily in the water, swallowing several mouthfuls, but each time was a little better than the last.\nOn the fifth day, the coach said, \u2018Try swimming on your own.\u2019 I let go of the wall, kicked hard, and paddled \u2014 I actually moved forward! It was only two or three meters, but in that moment I felt like a little fish, completely free! I shouted excitedly to Dad, \u2018Dad, I can swim!\u2019 Dad clapped enthusiastically from the poolside.\nOn the way home, my hair was still wet and my nose still stung a little, but my heart was brimming with joy. I understood something: as long as you don\u2019t give up, you can learn even the hardest things. That time was truly wonderful, because I didn\u2019t just learn to swim \u2014 I learned to be brave.",
      notes:"这篇作文细节丰富：从害怕到尝试、从失败到坚持再到成功，像电影一样有层次。心理描写细腻（\u201C腿发软\u201D\u201C不敢松手\u201D\u201C想放弃\u201D），动作描写具体（教练教蹬腿的口诀），让人身临其境。结尾不仅写了快乐，还上升到\u201C勇敢\u201D的成长主题，有深度。\u201C头发湿的，鼻子酸\u201D的细节让结尾更真实动人。",
      notesEn:"This essay is rich in detail: from fear to attempt, failure to persistence to success \u2014 it unfolds like a movie with layers. Psychological descriptions are delicate (\u2018legs went weak,\u2019 \u2018didn\u2019t dare let go,\u2019 \u2018wanted to quit\u2019); action descriptions are specific (the coach\u2019s kicking mantra). The ending goes beyond happiness to the growth theme of \u2018bravery,\u2019 adding depth. The detail of \u2018wet hair, stinging nose\u2019 makes the conclusion more authentic and touching."}
    ]}
  }
}
]
};
