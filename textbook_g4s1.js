/**
 * 字道 ZiDao — 部编版四年级语文上册 教材数据
 * Grade 4 Semester 1 Textbook Data (PEP Edition)
 * Based on: 义务教育教科书 语文 四年级上册 (2019)
 */
var TB_G4S1 = {
grade: 4, semester: 1,
totalRecogChars: 250,
totalWriteChars: 250,
units: [
/* ═══════════════════════════════════════════ */
/*  UNIT 1 — 课文 Texts (Lessons 1-4)         */
/*  Theme: 自然之美 Beauty of Nature           */
/* ═══════════════════════════════════════════ */
{
  id: 1, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 1, title: "观潮", titleEn: "Watching the Tide",
      text: [
        "钱塘江大潮，自古以来被称为天下奇观。",
        "农历八月十八是一年中传统的观潮日。这一天早上，我们来到了海宁市的盐官镇，据说这里是观潮最好的地方。我们随着观潮的人群，登上了海塘大堤。宽阔的钱塘江横卧在眼前。江面很平静，越往东越宽，在雨后的阳光下，笼罩着一层蒙蒙的薄雾。镇海古塔、中山亭和观潮台屹立在江边。远处，几座小山在云雾中若隐若现。江潮还没有来，海塘大堤上早已人山人海。大家昂首东望，等着，盼着。",
        "午后一点左右，从远处传来隆隆的响声，好像闷雷滚动。顿时人声鼎沸，有人告诉我们，潮来了！我们踮着脚往东望去，江面还是风平浪静，看不出有什么变化。过了一会儿，响声越来越大，只见东边水天相接的地方出现了一条白线，人群又沸腾起来。",
        "那条白线很快地向我们移来，逐渐拉长，变粗，横贯江面。再近些，只见白浪翻滚，形成一堵两丈多高的水墙。浪潮越来越近，犹如千万匹白色战马齐头并进，浩浩荡荡地飞奔而来；那声音如同山崩地裂，好像大地都被震得颤动起来。",
        "霎时，潮头奔腾西去，可是余波还在漫天卷地般涌来，江面上依旧风号浪吼。过了好久，钱塘江才恢复了平静。看看堤下，江水已经涨了两丈来高了。"
      ],
      textEn: [
        "The great tidal bore of the Qiantang River has been called the greatest spectacle under heaven since ancient times.",
        "The 18th day of the 8th lunar month is the traditional tide-watching day. That morning, we arrived at Yanguan Town in Haining City \u2014 said to be the best spot for watching the tide. We followed the crowds and climbed the sea wall. The broad Qiantang River stretched before us. The surface was calm, growing wider toward the east, veiled in a thin mist under the post-rain sunshine. The Zhenhai Pagoda, Zhongshan Pavilion and the tide-watching platform stood by the river. In the distance, hills appeared and disappeared among the clouds. The tide had not arrived, but the sea wall was already packed with people. Everyone gazed eastward, waiting and hoping.",
        "Around one in the afternoon, a rumbling came from the distance, like muffled rolling thunder. Instantly the crowd was abuzz. Someone told us the tide was coming! We stood on tiptoe looking east, but the river surface was still calm with no visible change. After a while the sound grew louder, and a white line appeared where the water met the sky to the east. The crowd surged with excitement again.",
        "That white line moved toward us quickly, growing longer and thicker until it spanned the entire river. Closer still, white waves rolled up into a wall of water over two zhang high. The tide drew nearer, like millions of white war-horses charging abreast, surging forward mightily; the sound was like mountains crumbling and the earth splitting, as if the ground itself trembled.",
        "In an instant the crest rushed westward, yet the afterwaves kept surging in like a sky-filling flood, and the river still roared. Only after a long while did the Qiantang River return to calm. Looking below the wall, the water had risen about two zhang."
      ],
      recognizeChars: ["盐","薄","屹","昂","顿","鼎","沸","贯","浩","崩","震","霎","余"],
      writeChars: ["潮","据","堤","阔","盼","滚","顿","逐","渐","堵","犹","崩","震","霎","余"],
      exercises: [
        {type:"read",cn:"有感情地朗读课文。背诵第3～4自然段",en:"Read the text expressively. Recite paragraphs 3\u20134"},
        {type:"discuss",cn:"说说课文是按照什么顺序描写钱塘江大潮的，你的脑海中浮现出怎样的画面",en:"Describe the order in which the text portrays the tidal bore and the images that come to mind"},
        {type:"write",cn:"读下面这首诗，从课文中找出与诗的内容相关的句子：八月涛声吼地来，头高数丈触山回",en:"Read the poem below and find sentences in the text that correspond: \u2018The August tide roars to land, its crest several zhang high crashes back against the mountains\u2019"}
      ],
      teachingPoints: [
        {cn:"学习按照\u201C潮来前\u2014潮来时\u2014潮过后\u201D的时间顺序描写景物",en:"Learn to describe scenery in chronological order: before, during, and after the tide"},
        {cn:"体会比喻和夸张的修辞手法，如\u201C犹如千万匹白色战马齐头并进\u201D",en:"Appreciate simile and hyperbole, e.g. \u2018like millions of white war-horses charging abreast\u2019"},
        {cn:"边读边想象画面，调动视觉、听觉感受自然之美",en:"Visualize scenes while reading, engaging sight and sound to feel the beauty of nature"}
      ],
      parentTips: [
        {cn:"引导孩子有感情地朗读，体会潮来时由远及近的变化",en:"Guide your child to read expressively, noticing how the description moves from far to near"},
        {cn:"可以搜索钱塘江大潮的视频，帮助孩子理解课文描写",en:"Search for videos of the Qiantang tidal bore to help your child visualize the text"}
      ]
    },
    {
      id: 2, title: "走月亮", titleEn: "Walking Under the Moonlight",
      text: [
        "秋天的夜晚，月亮升起来了，从洱海那边升起来了。",
        "是在洱海里淘洗过吗？月盘是那样明亮，月光是那样柔和，照亮了高高的点苍山，照亮了村头的大青树，也照亮了，照亮了村间的大道和小路……",
        "这时候，阿妈喜欢牵着我，在洒满月光的小路上走着，走着……啊，我和阿妈走月亮！",
        "细细的溪水，流着山草和野花的香味，流着月光。灰白色的鹅卵石布满河床。哟，卵石间有多少可爱的小水塘啊，每个小水塘都抱着一个月亮！哦，阿妈，白天你在溪里洗衣裳，而我，用树叶做小船，运载许多新鲜的花瓣……哦，阿妈，我们到溪边去吧，去看看小水塘，看看水塘里的月亮，看看我采过野花的地方。",
        "啊，我和阿妈走月亮……",
        "村道已经修补过，坑坑洼洼的地方已经填上碎石和新土。就要收庄稼了，收庄稼前，要把道路修一修，补一补，这是村里的风俗。秋虫唱着，夜鸟拍打着翅膀，鱼儿跃出水面，泼剌声里银光一闪……从果园那边飘来果子的甜香，是雪梨，是火把梨，还是紫葡萄？都有。在坡头那片月光下的果园里，这些好吃的果子挂满枝头。沟水汩汩，很满意地响着。是啊，它旁边，是它浇灌过的稻田。哦，阿妈，这不就是我们家的地吗？春天，我们种的油菜开花了，我在田地里找兔草，我把蒲公英吹得飞啊飞……收了油菜，栽上水稻。看，稻谷就要成熟了，稻穗低垂着头，稻田像一块月光镀亮的银毯。哦，阿妈，我们到田埂上去吧，你不是说学校放假了，阿爸就要回来了吗？我们采哪一塘新谷招待阿爸呢？",
        "啊，我和阿妈走月亮……",
        "有时，阿妈给我讲月亮的故事，一个古老的传说；有时，却什么也不讲，只是静静地走着，走着。走过月光闪闪的溪岸，走过石拱桥，走过月影团团的果园，走过庄稼地和菜地……啊，在我仰起脸看阿妈的时候，我突然看见，美丽的月亮牵着那些闪闪烁烁的小星星，好像也在天上走着，走着……",
        "多么奇妙的夜晚啊，我和阿妈走月亮！"
      ],
      textEn: [
        "On an autumn evening, the moon rose \u2014 rose from beyond Erhai Lake.",
        "Had it been washed in Erhai? The moon disc was so bright, the moonlight so gentle, illuminating the tall Cangshan Mountains, the big banyan tree at the village entrance, and the roads and paths between the houses\u2026",
        "At this time, Mother liked to hold my hand and walk along the moonlit path\u2026 Ah, Mother and I were walking under the moonlight!",
        "The slender stream carried the fragrance of wild grass and flowers, carrying moonlight too. Grey-white pebbles covered the riverbed. Oh, how many lovely little pools lay among the pebbles, each holding a moon! Mother, during the day you washed clothes in the stream, and I made little boats from leaves carrying fresh petals\u2026 Mother, let us go to the stream to see the pools, the moons in the pools, and the place where I picked wildflowers.",
        "Ah, Mother and I walked under the moonlight\u2026",
        "The village road had been repaired, the potholes filled with gravel and fresh earth. Harvest time was near; before the harvest, the road had to be mended \u2014 that was the village custom. Autumn insects sang, night birds flapped their wings, a fish leaped from the water with a flash of silver\u2026 Sweet fragrance drifted from the orchard \u2014 snow pears, torch pears, or purple grapes? All of them. In the moonlit orchard on the hilltop, fruit hung heavy on the branches. The ditch water gurgled contentedly alongside the rice paddies it had irrigated. Mother, isn\u2019t this our family\u2019s field? In spring our rapeseed bloomed, I searched for rabbit grass, I blew dandelion seeds flying\u2026 After the rapeseed, we planted rice. Look, the grain is almost ripe, the heavy ears bowing down, the paddy like a silver carpet plated with moonlight. Mother, let us walk to the ridge \u2014 didn\u2019t you say that when school is out, Father will be coming home?",
        "Ah, Mother and I walked under the moonlight\u2026",
        "Sometimes Mother told me stories about the moon, an ancient legend; sometimes she said nothing at all, just walking quietly. Past the sparkling moonlit stream bank, over the stone arch bridge, through the moon-shadowed orchard, across the crop fields and vegetable plots\u2026 When I looked up at Mother, I suddenly saw the beautiful moon leading those twinkling little stars, as if they too were walking across the sky\u2026",
        "What a wondrous night \u2014 Mother and I, walking under the moonlight!"
      ],
      recognizeChars: ["鹅","卵","俗","跃","穗","镀","埂","烁"],
      writeChars: ["淘","牵","鹅","卵","坑","洼","填","庄","稼","俗","跃","葡","萄","稻","熟"],
      exercises: [
        {type:"read",cn:"有感情地朗读课文。背诵第4自然段",en:"Read the text expressively. Recite paragraph 4"},
        {type:"discuss",cn:"阿妈牵着\u201C我\u201D走过\u201C月光闪闪的溪岸\u201D，你的脑海中浮现出怎样的画面？课文中还有哪些画面给你留下了深刻的印象？",en:"When Mother leads \u2018me\u2019 past the \u2018sparkling moonlit stream bank\u2019, what images come to mind? Which other scenes in the text impressed you?"},
        {type:"write",cn:"读读课文第6自然段，说说\u201C我\u201D的所见所想。你还记得月下的某个情景吗？仿照着写一写",en:"Read paragraph 6 and discuss what \u2018I\u2019 sees and thinks. Do you remember a moonlit scene? Write something similar"}
      ],
      teachingPoints: [
        {cn:"体会课文中优美的意境和浓浓的亲情",en:"Appreciate the beautiful imagery and the deep parent-child bond in the text"},
        {cn:"学习\u201C边读边想象画面\u201D的阅读方法，调动多种感官",en:"Practice the reading strategy of \u2018imagining scenes while reading\u2019 using multiple senses"}
      ],
      parentTips: [
        {cn:"可以和孩子一起在月夜散步，模仿课文观察身边事物",en:"Take a moonlit walk with your child and observe surroundings like in the text"},
        {cn:"鼓励孩子写一段自己和家人在一起的温馨场景",en:"Encourage your child to write about a warm moment with family"}
      ]
    },
    {
      id: 3, title: "现代诗二首", titleEn: "Two Modern Poems",
      isSelfRead: true,
      text: [
        "秋晚的江上\n[现代] 刘大白\n\n归巢的鸟儿，\n尽管是倦了，\n还驮着斜阳回去。\n\n双翅一翻，\n把斜阳掉在江上；\n头白的芦苇，\n也妆成一瞬的红颜了。",
        "花牛歌\n[现代] 徐志摩\n\n花牛在草地里坐，\n压扁了一穗剪秋罗。\n\n花牛在草地里眠，\n白云霸占了半个天。\n\n花牛在草地里走，\n小尾巴甩得滴溜溜。\n\n花牛在草地里做梦，\n太阳偷渡了西山的青峰。"
      ],
      textEn: [
        "Evening on the River in Autumn\nby Liu Dabai\n\nThe birds returning to their nests,\ntired though they are,\nstill carry the setting sun on their backs.\n\nWith one flip of their wings,\nthey drop the sun onto the river;\nthe white-headed reeds\nare briefly rouged with color.",
        "The Spotted Cow\u2019s Song\nby Xu Zhimo\n\nThe spotted cow sits in the meadow,\ncrushing a stalk of ragged robin.\n\nThe spotted cow sleeps in the meadow,\nwhite clouds claim half the sky.\n\nThe spotted cow walks in the meadow,\nher little tail swishing round and round.\n\nThe spotted cow dreams in the meadow;\nthe sun has stolen across the western peak."
      ],
      recognizeChars: ["巢","苇","罗","眠","霸","占"],
      writeChars: [],
      exercises: [
        {type:"read",cn:"反复朗读这两首诗，说说诗中描绘了哪些景物，这些景物构成了怎样的画面",en:"Read both poems repeatedly and describe the scenes they paint"},
        {type:"discuss",cn:"体会两首诗不同的风格：一首是宁静的傍晚，一首是悠闲的田园",en:"Appreciate the different styles: one depicts a tranquil evening, the other a carefree pastoral scene"}
      ],
      teachingPoints: [
        {cn:"感受现代诗歌用简洁语言描绘画面的特点",en:"Experience how modern poetry uses concise language to paint vivid pictures"},
        {cn:"体会拟人手法的运用，如\u201C太阳偷渡了西山的青峰\u201D",en:"Appreciate personification, e.g. \u2018the sun stole across the western peak\u2019"}
      ],
      parentTips: [
        {cn:"鼓励孩子多读几遍，感受诗歌的韵律和节奏",en:"Encourage your child to read multiple times to feel the rhythm of the poems"},
        {cn:"让孩子试着描述一个自己观察到的自然场景，用诗歌的方式表达",en:"Have your child describe a natural scene they\u2019ve observed, using poetic expression"}
      ]
    },
    {
      id: 4, title: "繁星", titleEn: "Stars",
      isSelfRead: true,
      text: [
        "我爱月夜，但我也爱星天。从前在家乡七八月的夜晚，在庭院里纳凉的时候，我最爱看天上密密麻麻的星星。",
        "三年前，在南京我住的地方有一道后门，每晚我打开后门，便看见一个静寂的夜。下面是一片菜园，上面是星群密布的蓝天。星光在我们的肉眼里虽然微小，然而它使我们觉得光明无处不在。",
        "如今在海上，每晚和繁星相对，我把它们认得很熟了。我躺在舱面上，仰望天空。深蓝色的天空里，悬着无数半明半昧的星。船在动，星也在动，它们是这样低，真是摇摇欲坠呢！渐渐地我的眼睛模糊了，我好像看见无数萤火虫在我的周围飞舞。海上的夜是柔和的，是静寂的，是梦幻的。我望着那许多认识的星，我仿佛看见它们在对我眨眼，我仿佛听见它们在小声说话。这时候我忘记了一切。在星的怀抱中我微笑着，我沉睡着。我觉得自己是一个小孩子，现在睡在母亲的怀里了。"
      ],
      textEn: [
        "I love moonlit nights, but I also love starry skies. In the past, on July and August evenings in my hometown, when cooling off in the courtyard, I loved gazing at the dense stars above.",
        "Three years ago, in Nanjing, my home had a back door. Every night I opened it to a silent world \u2014 a vegetable garden below, a blue sky thick with stars above. Though starlight seems faint to our eyes, it makes us feel that brightness is everywhere.",
        "Now at sea, I meet the stars every night and know them well. I lie on deck, gazing upward. In the deep blue sky, countless half-bright, half-dim stars hang. The ship moves, the stars move; they hang so low they seem about to fall! Gradually my eyes blur \u2014 I seem to see countless fireflies dancing around me. The night at sea is gentle, silent, dreamlike. I watch those familiar stars; I fancy they blink at me, I fancy I hear them whispering. At that moment I forget everything. Cradled among the stars, I smile, I drift into sleep. I feel like a small child, sleeping in my mother\u2019s arms."
      ],
      recognizeChars: ["昧","坠","怀"],
      writeChars: [],
      exercises: [
        {type:"read",cn:"有感情地朗读课文，根据课文的描述想象繁星满天的画面",en:"Read expressively and imagine the sky full of stars as described"},
        {type:"discuss",cn:"你也看过夜晚的繁星吧？说说你当时的感受",en:"Have you watched the stars at night? Share how you felt"}
      ],
      teachingPoints: [
        {cn:"感受作者在三个不同时间、地点观察星天的不同心境",en:"Notice how the author\u2019s mood differs when watching stars at three different times and places"},
        {cn:"学习通过联想和想象来丰富对自然景物的感受",en:"Learn to enrich appreciation of nature through association and imagination"}
      ],
      parentTips: [
        {cn:"带孩子在晴朗夜晚看星星，让孩子用自己的语言描述看到的景象",en:"Take your child stargazing on a clear night and have them describe what they see"},
        {cn:"介绍巴金的其他作品，培养课外阅读兴趣",en:"Introduce other works by Ba Jin to foster interest in extra-curricular reading"}
      ]
    }
  ],
  oralComm: {title:"我们与环境",titleEn:"Us and the Environment",prompt:{cn:"围绕身边的环境问题展开讨论：我们身边存在哪些环境问题？为了保护环境，我们可以做些什么？",en:"Discuss environmental issues around us: What problems exist? What can we do to protect the environment?"}},
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"鹿柴\n[唐] 王维\n空山不见人，但闻人语响。\n返景入深林，复照青苔上。",en:"Deer Enclosure\nby Wang Wei (Tang)\nEmpty mountains \u2014 no one in sight,\nyet voices echo faintly.\nSunlight re-enters the deep forest,\nshining again on the green moss."}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"读下面的词语，你想到了什么画面？人声鼎沸、锣鼓喧天、震耳欲聋、响彻云霄、低声细语、窃窃私语、鸦雀无声、悄无声息",en:"Read these words and imagine the scenes: deafening clamour, drums thundering, ear-splitting noise, resounding to the skies, whispered voices, murmuring, silent as crows and sparrows, not a sound"}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"推荐一个好地方：你打算推荐什么地方？它有什么特别之处？写出推荐的理由，吸引大家去看看",en:"Recommend a good place: What place will you recommend? What makes it special? Write your reasons to entice others to visit"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 2 — 课文 Texts (Lessons 5-8)         */
/*  Theme: 科学探索 Scientific Exploration     */
/* ═══════════════════════════════════════════ */
{
  id: 2, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 5, title: "一个豆荚里的五粒豆", titleEn: "Five Peas in a Pod",
      text: [
        "有一个豆荚，里面有五粒豌豆。豆荚和豌豆都是绿的，豌豆就以为整个世界都是绿的。豆荚在生长，豌豆也在生长。豌豆按照它们在家庭里的地位，坐成一排。太阳在外面照着，把豆荚晒得暖洋洋的。这里既温暖，又舒适；白天明亮，夜间黑暗。豌豆坐在那儿越长越大，它们想，我们得做点儿事情啊。",
        "\u201C难道我永远就在这儿坐下去吗？\u201D它们中的一个问，\u201C老这样坐下去，我恐怕会变得僵硬起来。我觉得外面似乎发生了一些事情——我有这种预感！\u201D",
        "许多天过去了。豆荚变黄了，这几粒豌豆也变黄了。\u201C整个世界都变黄啦！\u201D它们说。忽然，它们觉得豆荚震动了一下。豆荚被摘下，跟许多别的丰满的豆荚在一起，溜到一个衣服口袋里去了。",
        "\u201C我们不久就要被打开了！\u201D豌豆们说。于是它们就等待这件事情的发生。\u201C我倒想要知道，我们之中谁会走得最远！\u201D最小的一粒豌豆说。啪！豆荚裂开来了。那五粒豌豆全都躺在一个孩子的手中。这个孩子紧紧地捏着它们，说可以当作玩具枪的子弹用。他马上把第一粒豌豆装进去，把它射了出去。",
        "第一粒说：\u201C现在我要飞到广阔的世界里去了！\u201D第二粒说：\u201C我将直接飞进太阳里去。\u201D接下来的两粒说：\u201C我们到了哪儿，就在哪儿住下来。\u201D最后的那一粒说：\u201C该怎么样就怎么样吧！\u201D它被射到空中，落到顶楼窗子下面的一块旧板子上，正好钻进一个长满了青苔的裂缝里。",
        "在这个小小的顶楼里住着一个穷苦的女人。她有一个女儿，身体非常虚弱，躺在床上一整年了。春天的一个早晨，小女孩望着最低的那块窗玻璃说：\u201C有个绿东西从窗玻璃旁边探出头来，它是什么呢？\u201D母亲把窗户打开一半。\u201C啊！\u201D她说，\u201C原来是一粒小豌豆在这里生了根，还长出小叶子来了。它是怎么钻进这个缝隙里去的？你现在有一个小花园了！\u201D",
        "\u201C妈妈，我觉得我好了一些！\u201D晚上，这个小女孩说。太阳在她身上照得怪暖和的。这粒豌豆长得好极了，她也会好起来的。母亲虽然不太相信，但还是仔细地用一根小棍子把这植物支起来。\u201C真的，它现在要开花了！\u201D这个母亲慢慢开始相信。一星期以后，小女孩第一次能够坐一整个钟头。她快乐地坐在温暖的太阳光里。窗子打开了，她面前是一朵盛开的、紫色的豌豆花。小女孩低下头来，轻轻地吻了一下它柔嫩的叶子。这一天简直像一个节日。",
        "其余的几粒豌豆呢？那本来想飞进太阳里去的豌豆，却落到了水沟里，在脏水里躺了好几个星期，而且涨得大大的。\u201C我又胖又美！\u201D这粒豌豆说。此刻，顶楼窗子旁那个小女孩——她的脸上洋溢着健康的光彩，她的眼睛发着亮光——正注视着豌豆花，快乐地微笑着，心里充满了感激。"
      ],
      textEn: [
        "There was a pod with five peas. Both the pod and the peas were green, so the peas believed the whole world was green. The pod grew and the peas grew. They sat in a row according to their family rank. The sun shone warmly on the pod. It was cozy \u2014 bright by day, dark at night. The peas grew bigger and thought they should do something.",
        "\u201CWill I just sit here forever?\u201D asked one pea. \u201CI\u2019ll stiffen up! I sense something is happening outside!\u201D",
        "Many days passed. The pod turned yellow, and so did the peas. \u201CThe whole world has turned yellow!\u201D they said. Suddenly the pod shook. It was picked and slipped into a pocket alongside many other plump pods.",
        "\u201CWe\u2019ll be opened soon!\u201D the peas said. \u201CI wonder who will travel farthest,\u201D said the smallest. Pop! The pod split open. All five peas lay in a boy\u2019s hand. He would use them as pellets for his toy gun. He loaded the first pea and shot it out.",
        "The first pea said: \u201CNow I fly into the wide world!\u201D The second: \u201CI\u2019ll fly straight into the sun.\u201D The next two: \u201CWherever we land, we\u2019ll stay.\u201D The last one said: \u201CWhatever will be, will be!\u201D It was shot into the air, landed on an old board below an attic window, and slipped into a mossy crack.",
        "In the tiny attic lived a poor woman with a sickly daughter who had been bedridden for a year. One spring morning the girl saw something green by the windowpane. The mother opened the window halfway: \u201CA little pea has taken root here and sprouted! You have a little garden now!\u201D",
        "\u201CMother, I feel better!\u201D the girl said that evening. The pea grew wonderfully and the mother began to believe. A week later the girl sat up for a whole hour in the warm sunshine. Before her bloomed a purple pea flower. She bent down and gently kissed its tender leaves. The day was like a holiday.",
        "And the other peas? The one that wanted to fly into the sun landed in a gutter and swelled up in dirty water. \u201CI\u2019m so plump and beautiful!\u201D it said. Meanwhile, the girl by the attic window \u2014 her face glowing with health, her eyes bright \u2014 gazed at the pea flower, smiling happily, her heart full of gratitude."
      ],
      recognizeChars: ["豌","按","僵","预","揭","苔","囚","框","溢"],
      writeChars: ["豌","按","舒","适","暗","恐","僵","硬","枪","耐","探","愉","曾","沟"],
      exercises: [
        {type:"read",cn:"读完课文，把你的问题写下来。小组交流，整理大家提出的问题",en:"After reading, write down your questions. Share and sort them in groups"},
        {type:"discuss",cn:"伴随着豌豆苗的成长，为什么小女孩的病就慢慢好了呢？",en:"Why did the girl gradually get better as the pea plant grew?"},
        {type:"discuss",cn:"掉到水沟里的那粒豌豆真的是最了不起的吗？",en:"Was the pea that fell in the gutter truly the most remarkable?"}
      ],
      teachingPoints: [
        {cn:"学习在阅读中提出问题，区分\u201C针对部分内容\u201D和\u201C针对全文\u201D的问题",en:"Learn to ask questions while reading, distinguishing between detail-focused and whole-text questions"},
        {cn:"理解最后一粒豌豆给小女孩带来希望和力量的主题",en:"Understand the theme: the last pea brings hope and strength to the girl"},
        {cn:"了解安徒生童话的特点：用故事传递人生哲理",en:"Appreciate Andersen\u2019s fairy tale style: conveying life lessons through story"}
      ],
      parentTips: [
        {cn:"和孩子讨论\u201C什么才是最了不起的\u201D——帮助他人、给人希望也是伟大的",en:"Discuss with your child what is truly \u2018remarkable\u2019 \u2014 helping others and giving hope is great too"},
        {cn:"鼓励孩子在阅读时主动提问，培养质疑精神",en:"Encourage your child to ask questions during reading, fostering a questioning spirit"}
      ]
    },
    {
      id: 6, title: "夜间飞行的秘密", titleEn: "The Secret of Night Flight",
      text: [
        "清朗的夜空出现两个亮点，越来越近，才看清楚是一红一绿的两盏灯。接着传来了隆隆声，这是一架飞机在夜航。在漆黑的夜里，飞机是怎么做到安全飞行的呢？要想了解其中的秘密，我们可以从蝙蝠说起。",
        "蝙蝠能在夜里飞行，还能捕捉飞蛾和蚊子；而且无论怎么飞，从来没见过它跟什么东西相撞，即使一根极细的电线，它也能灵巧地避开。难道它的眼睛特别敏锐，能在漆黑的夜里看清楚所有的东西吗？",
        "为了弄清楚这个问题，两百多年前，科学家做了一次实验。他们在一间屋子里横七竖八地拉了许多绳子，绳子上系了许多铃铛，然后把蝙蝠的眼睛蒙上，让它在屋子里飞。蝙蝠飞了几个钟头，铃铛一个也没响，那么多的绳子，它一根也没碰着。",
        "科学家又做了两次实验：一次把蝙蝠的耳朵塞上，一次把蝙蝠的嘴封住，让它在屋子里飞。蝙蝠就像没头苍蝇似的到处乱撞，挂在绳子上的铃铛响个不停。",
        "三次实验的结果证明，蝙蝠夜里飞行，靠的不是眼睛，而是靠嘴和耳朵配合起来探路的。后来，科学家经过反复研究，终于揭开了蝙蝠能在夜里飞行的秘密。它一边飞，一边从嘴里发出超声波。而这种声音，人的耳朵是听不见的，蝙蝠的耳朵却能听见。超声波向前传播时，遇到障碍物就反射回来，传到蝙蝠的耳朵里，蝙蝠就立刻改变飞行的方向。",
        "知道蝙蝠在夜里如何飞行，你猜到飞机夜间飞行的秘密了吗？现代飞机上安装了雷达，雷达的工作原理与蝙蝠探路类似。雷达通过天线发出无线电波，无线电波遇到障碍物就反射回来，被雷达接收到，显示在荧光屏上。从雷达的荧光屏上，驾驶员能够清楚地看到前方有没有障碍物，所以飞机飞行就更安全了。"
      ],
      textEn: [
        "Two bright dots appeared in the clear night sky, drawing closer until we could see they were one red and one green light. Then came a rumbling \u2014 an aircraft flying at night. How does a plane fly safely in pitch darkness? To understand this secret, we begin with bats.",
        "Bats fly at night, catch moths and mosquitoes, and never collide with anything \u2014 even a thin wire is deftly avoided. Are their eyes so sharp they see everything in the dark?",
        "To find out, over two hundred years ago scientists ran an experiment. They strung many ropes crisscross through a room with bells tied to them, blindfolded a bat, and let it fly. After hours of flight, not a single bell rang \u2014 it had not touched a single rope.",
        "Scientists ran two more experiments: one with the bat\u2019s ears plugged, another with its mouth sealed. The bat bumped around like a headless fly, and the bells rang non-stop.",
        "The three experiments proved that bats navigate at night not with their eyes, but by coordinating their mouths and ears. Further research revealed the secret: a bat emits ultrasound from its mouth as it flies. Humans cannot hear this sound, but bats can. When the ultrasound hits an obstacle it bounces back to the bat\u2019s ears, prompting an immediate course change.",
        "Now that you know how bats fly at night, can you guess the airplane\u2019s secret? Modern planes are equipped with radar, which works on a similar principle. Radar sends radio waves via an antenna; these bounce off obstacles and return to the radar receiver, appearing on a fluorescent screen. Pilots can clearly see whether obstacles lie ahead, making flight much safer."
      ],
      recognizeChars: ["蝙","蝠","即","锐","系","铛","蝇","证","障","碍","荧","屏"],
      writeChars: ["蚊","即","科","横","竖","绳","系","蝇","证","研","究","达","驾","驶"],
      exercises: [
        {type:"read",cn:"读课文，提出自己的问题，再试着把问题分分类",en:"Read the text, raise your own questions, then try to classify them"},
        {type:"discuss",cn:"蝙蝠是怎样用嘴和耳朵配合探路的？",en:"How do bats use their mouths and ears together to navigate?"},
        {type:"write",cn:"分小组整理问题清单，想一想可以从哪些角度提问",en:"Work in groups to organize a question list; think about what angles you can ask from"}
      ],
      teachingPoints: [
        {cn:"理解仿生学的基本概念：蝙蝠的超声波探路→雷达的工作原理",en:"Understand the basic concept of bionics: bat ultrasound navigation leads to radar design"},
        {cn:"学习从不同角度提问：针对内容、针对写法、联系生活",en:"Learn to ask questions from different angles: about content, writing technique, and real life"}
      ],
      parentTips: [
        {cn:"引导孩子思考还有哪些发明是受动物启发的（如潜水艇模仿鱼等）",en:"Guide your child to think of other animal-inspired inventions (e.g. submarines inspired by fish)"},
        {cn:"鼓励孩子在阅读时积极提问，不只是被动接受信息",en:"Encourage active questioning while reading, not just passive reception"}
      ]
    },
    {
      id: 7, title: "呼风唤雨的世纪", titleEn: "The Century of Commanding Wind and Rain",
      text: [
        "20世纪是一个呼风唤雨的世纪。",
        "是谁来呼风唤雨呢？当然是人类。靠什么呼风唤雨呢？靠的是现代科学技术。在20世纪100年的时间里，人类利用现代科学技术获得了那么多奇迹般的、出乎意料的发现和发明。正是这些发现和发明，使人类的生活大大改观，其改变的程度超过了人类历史上百万年的总和。",
        "人类在上百万年的历史中一直很依赖自然，生活在一个慢吞吞、静悄悄、一到夜里就黑暗无光的世界。那时没有电灯，没有电视，没有收音机，也没有汽车。人们只能在神话中用\u201C千里眼\u201D\u201C顺风耳\u201D和腾云驾雾的神仙，来寄托自己的美好愿望。我们的祖先大概谁也没有料到，他们的那么多幻想在现代纷纷变成了现实。20世纪的成就，真可以用\u201C忽如一夜春风来，千树万树梨花开\u201D来形容。",
        "20世纪，人类登上月球，潜入深海，洞察百亿光年外的天体，探索原子核世界的奥秘；20世纪，电视、程控电话、因特网以及民航飞机、高速火车、远洋船舶等，日益把人类居住的星球变成联系紧密的\u201C地球村\u201D。人类生活的舒适、方便，是连过去的王公贵族也不敢想的。科学在改变着人类的精神文化生活，也在改变着人类的物质生活。",
        "1923年，英国数学家、哲学家伯特兰\u00b7罗素说：\u201C归根到底，是科学使得我们这个时代不同于以往的任何时代。\u201D现在，这句话依然适用。回顾20世纪的百年历程，科学的确创造了一个又一个神话，为人类创造了比以往任何时代都要美好的生活。在新的世纪里，现代科学技术必将继续创造一个个奇迹，不断改善我们的生活。"
      ],
      textEn: [
        "The 20th century was a century that commanded wind and rain.",
        "Who did the commanding? Humanity. With what? Modern science and technology. In the 100 years of the 20th century, humanity made countless miraculous discoveries and inventions, transforming life to a degree exceeding the sum total of millions of years of human history.",
        "For millions of years, humans depended on nature, living in a slow, quiet world that went dark every night. There were no electric lights, no television, no radio, no cars. People could only project their hopes onto mythical figures with \u2018clairvoyant eyes\u2019 and \u2018wind-following ears\u2019 who rode on clouds. Our ancestors never imagined that so many fantasies would become reality. The 20th century\u2019s achievements can truly be described with the verse: \u2018As if a spring wind came overnight, and a thousand trees bloomed with pear blossoms.\u2019",
        "In the 20th century, humans landed on the moon, dived into the deep sea, observed celestial bodies billions of light-years away, and probed the mysteries of the atomic nucleus. Television, telephone networks, the Internet, civil aviation, high-speed trains, and ocean liners increasingly turned our planet into a tightly connected \u2018global village.\u2019 The comfort and convenience of modern life would astonish even ancient royalty. Science transforms our cultural life and our material life alike.",
        "In 1923, the British mathematician and philosopher Bertrand Russell said: \u2018Ultimately, it is science that makes our era different from every previous one.\u2019 This still holds true. Looking back on the 20th century, science indeed created miracle after miracle, giving humanity a finer life than any previous age. In the new century, modern science and technology will surely continue to work wonders and improve our lives."
      ],
      recognizeChars: ["唤","获","赖","潜","亿","索","奥","舶","质","哲","兰"],
      writeChars: ["唤","纪","技","改","程","超","亿","核","奥","益","联","质","哲","任","善"],
      exercises: [
        {type:"read",cn:"分小组整理问题清单，筛选出对理解课文最有帮助的问题",en:"Work in groups to sort questions and pick those most helpful for understanding"},
        {type:"discuss",cn:"\u201C现代科学技术必将继续创造一个个奇迹，不断改善我们的生活\u201D，联系生活实际，谈谈自己的理解",en:"\u2018Modern science will keep creating miracles\u2019 \u2014 relate this to real life and share your thoughts"},
        {type:"discuss",cn:"\u201C发现\u201D和\u201C发明\u201D有什么区别？",en:"What is the difference between \u2018discovery\u2019 and \u2018invention\u2019?"}
      ],
      teachingPoints: [
        {cn:"理解\u201C呼风唤雨\u201D在文中的含义：科学使人类掌握了改变世界的力量",en:"Understand the title metaphor: science gave humanity the power to transform the world"},
        {cn:"体会对比的写法：古代的幻想与现代的现实",en:"Appreciate the contrast technique: ancient fantasies vs. modern realities"}
      ],
      parentTips: [
        {cn:"和孩子一起讨论科学技术给生活带来的变化，激发孩子对科学的兴趣",en:"Discuss how technology has changed daily life to spark your child\u2019s interest in science"},
        {cn:"引导孩子思考科技发展也可能带来的问题（环境、隐私等）",en:"Guide your child to consider possible downsides of technological progress (environment, privacy)"}
      ]
    },
    {
      id: 8, title: "蝴蝶的家", titleEn: "The Butterfly\u2019s Home",
      isSelfRead: true,
      text: [
        "我常想，下大雨的时候，青鸟、麻雀这些鸟都要躲避起来，蝴蝶怎么办呢？天是那样低沉，云是那样黑，雷、电、雨、风，吼叫着，震撼着，雨点密集地喧嚷着，风将银色的雨幕斜挂起来，世界几乎都被冲洗遍了，就连树林里也黑压压的、水淋淋的，到处都是湿的。这不是难为蝴蝶吗？",
        "我一想起来就为蝴蝶着急，这样的天气它们能躲在哪里呢？它们的身体是那样轻盈，载不动一个水点；它们身上的彩粉是那样斑斓，一点儿水都不能沾；它们是那样柔弱，比一片树叶还无力，怎么禁得起这猛烈的风雨呢？",
        "但是，一位小朋友非常确定地说：\u201C它们和我们一样，肯定有家。下雨的时候，它们就会急忙飞回家里去哩！\u201D不过它们的家在哪里呢？人们的屋宇里从没有见过有蝴蝶来避雨。麦田里呢？也不能避雨。树林里呢？到处是水珠滚坠。园里的花朵是它们的家吗？花朵自己已经被雨点打得抖个不停了。蝴蝶的家到底在哪里呢？我真为蝴蝶着急了。",
        "一个女孩对我说：\u201C雨后，蝴蝶就会重新出来，在阳光里飞。它们是那么高兴，那么鲜艳。我想，它们一定是藏在一个秘密的家里。它们的家一定美丽而香甜，不像家雀儿似的，一下雨就飞到人们的屋檐下避雨。一定是这样的。\u201D",
        "她的话说得倒是不错，但我却从来没有见到过下雨时蝴蝶藏身的地方。谁要是能说给我听，我就不着急了。"
      ],
      textEn: [
        "I often wonder: when it pours, birds like kingfishers and sparrows take shelter, but what about butterflies? The sky is so low, the clouds so dark; thunder, lightning, rain and wind roar and shake everything. Raindrops drum noisily, the wind hangs a silver curtain of rain at an angle, the world is nearly washed clean, and even the woods are dark and dripping wet. Isn\u2019t this terribly hard on butterflies?",
        "Whenever I think of it, I worry. Where can they hide? Their bodies are so light they cannot carry a single raindrop; their colorful wing-powder is so delicate it cannot bear any moisture; they are so fragile, weaker than a leaf \u2014 how can they withstand the fierce storm?",
        "But a little friend said with certainty: \u201CThey must have a home, just like us. When it rains, they hurry home!\u201D Yet where is their home? No one ever sees butterflies sheltering in houses. Wheat fields can\u2019t block rain. Woods drip everywhere. Are the garden flowers their home? The flowers themselves tremble under the raindrops. Where on earth is the butterfly\u2019s home? I really worry about butterflies.",
        "A girl told me: \u201CAfter the rain, butterflies come out again, flying bright and happy in the sunshine. They must have a secret, beautiful, sweet-smelling home \u2014 not like house sparrows that hide under our eaves. It must be so.\u201D",
        "Her words make sense, but I have never discovered where butterflies hide in the rain. If anyone can tell me, I will stop worrying."
      ],
      recognizeChars: ["避","撼","喧","雀","檐"],
      writeChars: [],
      exercises: [
        {type:"read",cn:"读课文，提出自己的问题，再试着把问题分分类，选出你认为最值得思考的问题",en:"Read the text, raise questions, classify them, and choose the most thought-provoking ones"},
        {type:"discuss",cn:"作者为什么\u201C为蝴蝶着急\u201D？你从中感受到了什么？",en:"Why does the author \u2018worry about butterflies\u2019? What do you sense from this?"}
      ],
      teachingPoints: [
        {cn:"体会作者对弱小生命的关怀和温柔的情感",en:"Feel the author\u2019s tender concern for fragile living things"},
        {cn:"学习从不同角度提出问题并筛选有价值的问题",en:"Learn to raise questions from different angles and select the valuable ones"}
      ],
      parentTips: [
        {cn:"下雨天和孩子一起观察小动物的去向，培养观察和思考的习惯",en:"On rainy days, observe where small creatures go with your child, fostering observation habits"},
        {cn:"鼓励孩子对自然界保持好奇心和关爱之心",en:"Encourage your child to stay curious and caring about the natural world"}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"好问则裕，自用则小。——《尚书》\n博学之，审问之，慎思之，明辨之，笃行之。——《礼记》\n智能之士，不学不成，不问不知。——王充\n人非生而知之者，孰能无惑？——韩愈",en:"Those who ask questions prosper; those who rely only on themselves stay small. \u2014 Book of Documents\nStudy broadly, question thoroughly, think carefully, discern clearly, act earnestly. \u2014 Book of Rites\nEven the wisest cannot succeed without learning or know without asking. \u2014 Wang Chong\nNo one is born with all knowledge; who can be free of doubts? \u2014 Han Yu"}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"体会每组句子在表达上的不同：\u201C那时没有电灯，没有电视，没有收音机，也没有汽车\u201D与\u201C那时没有电灯、电视、收音机和汽车\u201D",en:"Compare the expressive differences: listing items with repeated negation vs. a simple list with one negation"}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"小小\u201C动物园\u201D：如果把自己的家想象成一个\u201C动物园\u201D，是不是很有趣？想想你的家人和哪些动物比较像？写下来",en:"My Little \u2018Zoo\u2019: Imagine your family as a \u2018zoo.\u2019 Which animals do your family members resemble? Write about it"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 3 — 课文 Texts (Lessons 9-11)        */
/*  Theme: 观察与发现 Observation & Discovery  */
/* ═══════════════════════════════════════════ */
{
  id: 3, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 9, title: "古诗三首", titleEn: "Three Ancient Poems",
      text: [
        "暮江吟\n[唐] 白居易\n一道残阳铺水中，\n半江瑟瑟半江红。\n可怜九月初三夜，\n露似真珠月似弓。",
        "题西林壁\n[宋] 苏轼\n横看成岭侧成峰，\n远近高低各不同。\n不识庐山真面目，\n只缘身在此山中。",
        "雪梅\n[宋] 卢钺\n梅雪争春未肯降，\n骚人阁笔费评章。\n梅须逊雪三分白，\n雪却输梅一段香。"
      ],
      textEn: [
        "Evening on the River\nby Bai Juyi (Tang)\nA strip of setting sun spreads on the water;\nhalf the river shimmers blue-green, half glows red.\nHow lovely the early third night of the ninth month \u2014\ndew like pearls, the moon like a bow.",
        "Written on the Wall of West Forest Temple\nby Su Shi (Song)\nViewed sideways it forms a ridge, head-on a peak;\nfar, near, high, low \u2014 each angle different.\nWe cannot see Lushan\u2019s true face\nbecause we stand within the mountain itself.",
        "Snow and Plum Blossom\nby Lu Yue (Song)\nSnow and plum contend for spring, neither yielding;\nthe poet sets down his brush, hard-pressed to judge.\nPlum must concede three shades of white to snow,\nyet snow falls short of plum by one measure of fragrance."
      ],
      recognizeChars: ["暮","瑟","缘","降","骚","逊","输"],
      writeChars: ["暮","吟","题","侧","峰","庐","缘","降","费","须","逊","输"],
      exercises: [
        {type:"read",cn:"有感情地朗读课文。背诵课文。默写《题西林壁》",en:"Read expressively. Recite all three poems. Write \u2018Written on the Wall of West Forest Temple\u2019 from memory"},
        {type:"discuss",cn:"想象\u201C一道残阳铺水中，半江瑟瑟半江红\u201D的景象，用自己的话说一说",en:"Imagine the scene of \u2018half the river blue-green, half red\u2019 and describe it in your own words"},
        {type:"discuss",cn:"说说你对\u201C不识庐山真面目，只缘身在此山中\u201D和\u201C梅须逊雪三分白，雪却输梅一段香\u201D的理解",en:"Explain your understanding of these famous lines about perspective and complementary strengths"}
      ],
      teachingPoints: [
        {cn:"理解\u201C题西林壁\u201D蕴含的哲理：\u201C当局者迷，旁观者清\u201D",en:"Understand the philosophical insight: \u2018The one inside the situation cannot see it clearly\u2019"},
        {cn:"体会\u201C雪梅\u201D中各有所长的道理：事物各有优缺点",en:"Appreciate the lesson of \u2018Snow and Plum\u2019: everything has its own strengths and weaknesses"},
        {cn:"学习古诗中的观察方法：不同角度、不同时间看同一事物",en:"Learn observation methods in classical poetry: viewing the same thing from different angles and times"}
      ],
      parentTips: [
        {cn:"鼓励孩子背诵并默写古诗，养成积累经典的习惯",en:"Encourage your child to recite and write poems from memory, building a habit of accumulating classics"},
        {cn:"和孩子讨论\u201C横看成岭侧成峰\u201D在生活中的应用：看问题要全面",en:"Discuss how \u2018different angles yield different views\u2019 applies to daily life: consider all perspectives"}
      ]
    },
    {
      id: 10, title: "爬山虎的脚", titleEn: "The Feet of Boston Ivy",
      text: [
        "学校操场北边墙上满是爬山虎。我家也有爬山虎，从小院的西墙爬上去，在房顶上占了一大片地方。",
        "爬山虎刚长出来的叶子是嫩红的，不几天叶子长大，就变成嫩绿的。爬山虎的嫩叶，不大引人注意，引人注意的是长大了的叶子。那些叶子绿得那么新鲜，看着非常舒服。叶尖一顺儿朝下，在墙上铺得那么均匀，没有重叠起来的，也不留一点儿空隙。一阵风拂过，一墙的叶子就漾起波纹，好看得很。",
        "以前，我只知道这种植物叫爬山虎，可不知道它怎么能爬。今年，我注意了，原来爬山虎是有脚的。爬山虎的脚长在茎上。茎上长叶柄的地方，反面伸出枝状的六七根细丝，这些细丝很像蜗牛的触角。细丝跟新叶子一样，也是嫩红的。这就是爬山虎的脚。",
        "爬山虎的脚触着墙的时候，六七根细丝的头上就变成小圆片，巴住墙。细丝原先是直的，现在弯曲了，把爬山虎的嫩茎拉一把，使它紧贴在墙上。爬山虎就是这样一脚一脚地往上爬。如果你仔细看那些细小的脚，你会想起图画上蛟龙的爪子。",
        "爬山虎的脚要是没触着墙，不几天就萎了，后来连痕迹也没有了。触着墙的，细丝和小圆片逐渐变成灰色。不要瞧不起那些灰色的脚，那些脚巴在墙上相当牢固，要是你的手指不费一点儿劲，休想拉下爬山虎的一根茎。"
      ],
      textEn: [
        "The north wall of the school playground was covered with Boston ivy. My home had it too \u2014 it climbed up the west wall of the small yard and spread across a large section of the roof.",
        "Newly grown Boston ivy leaves are tender red; in a few days they turn tender green. The young leaves draw little attention; it is the mature leaves that catch the eye. They are so freshly green, a pleasure to look at. The leaf tips all point downward, spread so evenly on the wall that none overlap and no gaps remain. When a breeze passes, the whole wall of leaves ripples like waves \u2014 beautiful indeed.",
        "I used to know only the plant\u2019s name, not how it climbed. This year I noticed: Boston ivy has feet! The feet grow on the stem. Where a leaf stalk joins the stem, six or seven twig-like tendrils extend from the opposite side, looking much like a snail\u2019s antennae. The tendrils are tender red, just like new leaves. These are the feet of Boston ivy.",
        "When a foot touches the wall, the tips of those tendrils turn into tiny discs that grip the surface. The originally straight tendrils curve, pulling the young stem tightly against the wall. This is how Boston ivy climbs, one \u2018step\u2019 at a time. If you look closely at those tiny feet, they remind you of a mythical dragon\u2019s claws.",
        "If a foot fails to touch the wall, it withers within days and eventually vanishes. Those that do grip gradually turn grey. Don\u2019t look down on those grey feet \u2014 they cling so firmly that without real effort you cannot pry a single stem loose."
      ],
      recognizeChars: ["均","柄","蜗","曲","萎"],
      writeChars: ["虎","操","占","嫩","顺","均","叠","隙","茎","柄","萎","瞧","固"],
      exercises: [
        {type:"read",cn:"朗读课文。说说从哪些地方可以看出作者观察得特别仔细",en:"Read aloud. Identify where you can see the author observed with great care"},
        {type:"discuss",cn:"根据课文内容，说一说爬山虎是怎样往上爬的",en:"Using the text, explain how Boston ivy climbs upward"},
        {type:"write",cn:"找出课文中你觉得写得准确、形象的句子，抄写下来",en:"Find sentences you think are particularly precise and vivid, and copy them"}
      ],
      teachingPoints: [
        {cn:"学习作者连续细致观察的方法：从整体到局部，从静态到动态",en:"Learn the author\u2019s method of continuous detailed observation: from whole to part, from still to moving"},
        {cn:"体会用词的准确性，如\u201C触\u201D\u201C巴\u201D\u201C拉\u201D\u201C贴\u201D等动词",en:"Appreciate precise word choice: verbs like \u2018touch,\u2019 \u2018grip,\u2019 \u2018pull,\u2019 and \u2018press\u2019"}
      ],
      parentTips: [
        {cn:"带孩子观察身边的植物，模仿课文做连续观察记录",en:"Take your child to observe plants nearby and keep a continuous observation log like the text"},
        {cn:"引导孩子关注课文中精确的动词，感受细致观察的重要性",en:"Draw attention to the precise verbs in the text and the importance of careful observation"}
      ]
    },
    {
      id: 11, title: "蟋蟀的住宅", titleEn: "The Cricket\u2019s Home",
      text: [
        "居住在草地上的蟋蟀，差不多和蝉一样有名。它的出名不光由于它的唱歌，还由于它的住宅。",
        "别的昆虫大多在临时的隐蔽所藏身。它们的隐蔽所得来不费功夫，弃去毫不可惜。蟋蟀和它们不同，不肯随遇而安。它常常慎重地选择住址，一定要排水优良，并且有温和的阳光。它不利用现成的洞穴。它的舒服的住宅是自己一点儿一点儿挖掘的，从大厅一直到卧室。",
        "蟋蟀怎么会有建筑住宅的才能呢？它有特别好的工具吗？没有。蟋蟀并不是挖掘技术的专家，它的工具是那样柔弱，所以人们对它的劳动成果感到惊奇。",
        "在朝着阳光的堤岸上，青草丛中隐藏着一条倾斜的隧道，即使有骤雨，这里也立刻就会干的。隧道顺着地势弯弯曲曲，最多九寸深，一指宽，这便是蟋蟀的住宅。出口的地方总有一丛草半掩着，就像一座门。蟋蟀出来吃周围的嫩草，绝不去碰这一丛草。那微斜的门口，经过仔细耙扫，收拾得很平坦。这就是蟋蟀的平台。当四周很安静的时候，蟋蟀就在这平台上弹琴。",
        "屋子的内部没什么布置，但是墙壁很光滑。主人有的是时间，把粗糙的地方修理平整。大体上讲，住所是很简朴的，清洁、干燥，很卫生。假使我们想到蟋蟀用来挖掘的工具是那样简单，这座住宅真可以算是伟大的工程了。",
        "蟋蟀盖房子大多是在十月，秋天初寒的时候。它用前足扒土，还用钳子似的大颚搬掉较大的土块。它用强有力的后足踏地。后腿上有两排锯，用它们将泥土推到后面，倾斜地铺开。工作做得很快。蟋蟀钻到土底下干活，如果感到疲劳，它就在未完工的家门口休息一会儿，头朝着外面，触须轻微地摆动。不大一会儿，它又进去继续工作。",
        "住宅的重要部分快完成了。洞已经挖了有两寸深，够宽敞的了。余下的是长时间的整修，今天做一点儿，明天做一点儿。这个洞可以随天气的变冷和它身体的增长而加深加阔。即使在冬天，只要天气温和，太阳晒到它住宅的门口，还可以看见蟋蟀从里面不断地抛出泥土来。"
      ],
      textEn: [
        "The cricket that lives in the grass is nearly as famous as the cicada \u2014 famous not only for its song, but also for its home.",
        "Most other insects take refuge in casual hiding places that cost no effort and are abandoned without regret. The cricket is different; it refuses to settle for just anywhere. It carefully chooses a site with good drainage and gentle sunlight. It never uses a ready-made hole. Its comfortable home is dug by itself, bit by bit, from the hall all the way to the bedroom.",
        "How can a cricket be so skilled at building? Does it have special tools? No. The cricket is no excavation expert \u2014 its tools are quite feeble, which makes its achievement all the more astonishing.",
        "On a sun-facing bank, hidden in the grass, there is a sloping tunnel that dries instantly even after a sudden shower. The tunnel follows the terrain\u2019s curves, at most nine inches deep and one finger wide \u2014 this is the cricket\u2019s home. A tuft of grass half-covers the exit like a door; the cricket eats surrounding tender grass but never touches this tuft. The slightly sloping entrance is carefully swept clean. This is the cricket\u2019s terrace. When all is quiet, the cricket plays its violin on this terrace.",
        "The interior has little furnishing, but the walls are smooth. The owner has plenty of time to polish every rough spot. Overall, the dwelling is simple, clean, dry, and hygienic. Considering that the cricket\u2019s digging tools are so rudimentary, this home is truly a grand engineering feat.",
        "Crickets build mostly in October, when autumn\u2019s first chill arrives. It scrapes soil with its front legs and moves larger chunks with its pincer-like jaws. Its powerful hind legs stamp the ground. Two rows of saw-teeth on the back legs push earth backward and spread it at an angle. Work proceeds quickly. The cricket digs underground; when tired, it rests at the unfinished doorway, head facing out, antennae quivering slightly. Soon it goes back inside to continue.",
        "The main part of the home is nearly done \u2014 the hole is two inches deep and roomy. What remains is long-term finishing, a little each day. The tunnel deepens and widens as winter approaches and the cricket grows. Even in winter, on warm sunny days, you can see the cricket throwing out fresh dirt from inside."
      ],
      recognizeChars: ["宅","隐","毫","慎","址","良","掘","搜","倾","骤","置","抛"],
      writeChars: ["宅","临","慎","选","择","址","良","穴","厅","卧","专","卫","较"],
      exercises: [
        {type:"read",cn:"默读课文，说说课文围绕蟋蟀的住宅讲了哪两方面的内容，作者是怎样观察的",en:"Read silently and identify the two main aspects discussed, and how the author observed"},
        {type:"discuss",cn:"用自己的话介绍蟋蟀住宅的修建过程，想想为什么蟋蟀的住宅可以算是\u201C伟大的工程\u201D",en:"Describe the building process in your own words; why is it a \u2018grand engineering feat\u2019?"},
        {type:"discuss",cn:"课文把蟋蟀比作人，把蟋蟀的巢穴比作人的住宅，说说这样写的好处",en:"The text personifies the cricket and calls its burrow a \u2018home.\u2019 Discuss the benefits of this approach"}
      ],
      teachingPoints: [
        {cn:"学习法布尔细致观察、拟人化描写昆虫的方法",en:"Learn Fabre\u2019s method of detailed observation and personified description of insects"},
        {cn:"体会用词的准确性：\u201C扒\u201D\u201C搬\u201D\u201C踏\u201D\u201C推\u201D\u201C铺\u201D等动作描写",en:"Appreciate precise verbs: \u2018scrape,\u2019 \u2018move,\u2019 \u2018stamp,\u2019 \u2018push,\u2019 \u2018spread\u2019 \u2014 action descriptions"}
      ],
      parentTips: [
        {cn:"和孩子一起观察蟋蟀或其他小动物，学习连续细致的观察方法",en:"Observe crickets or other small creatures with your child, learning continuous detailed observation"},
        {cn:"推荐阅读法布尔《昆虫记》中其他有趣的篇章",en:"Recommend other interesting chapters from Fabre\u2019s \u2018Souvenirs Entomologiques\u2019"}
      ]
    }
  ],
  oralComm: {title:"爱护眼睛，保护视力",titleEn:"Protect Your Eyes",prompt:{cn:"了解本班同学的视力情况，分析影响视力的原因，讨论怎样才能保护好视力",en:"Survey classmates\u2019 eyesight, analyze causes of poor vision, and discuss how to protect eyesight"}},
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"立了秋，把扇丢。\n二八月，乱穿衣。\n夏雨少，秋霜早。\n八月里来雁门开，雁儿脚上带霜来。\n一场秋雨一场寒，十场秋雨要穿棉。\n八月暖，九月温，十月还有小阳春。",en:"When autumn arrives, fans are put away.\nIn the 2nd and 8th months, clothing is unpredictable.\nLess summer rain means earlier autumn frost.\nIn the 8th month the wild geese fly, bringing frost on their feet.\nEach autumn rain brings more cold; after ten rains, wear cotton.\nThe 8th month is warm, the 9th mild; the 10th still has a mini-spring."}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"为下面的动物找到家：狗—窝 鼠—洞 鸟—巢 猪—圈 马—厩 鱼—塘 牛—棚 虎—穴",en:"Match each animal with its home: dog\u2013kennel, mouse\u2013hole, bird\u2013nest, pig\u2013pen, horse\u2013stable, fish\u2013pond, cow\u2013barn, tiger\u2013lair"}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"写观察日记：进行连续观察，用观察日记记录自己的收获，主要记录观察对象的变化",en:"Write observation diaries: observe continuously, record changes in your subject, and include your thoughts and feelings"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 4 — 课文 Texts (Lessons 12-15)       */
/*  Theme: 神话故事 Myths & Legends            */
/* ═══════════════════════════════════════════ */
{
  id: 4, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 12, title: "盘古开天地", titleEn: "Pangu Creates Heaven and Earth",
      text: [
        "很久很久以前，天和地还没有分开，宇宙混沌一片，像个大鸡蛋。有个叫盘古的巨人，在混沌之中睡了一万八千年。",
        "有一天，盘古醒来了，睁眼一看，周围黑乎乎一片，什么也看不见。他一使劲翻身坐了起来，只听咔嚓一声，\u201C大鸡蛋\u201D裂开了一条缝，一丝微光透了进来。巨人见身边有一把斧头，就拿起斧头，对着眼前的黑暗劈过去，只听见一声巨响，\u201C大鸡蛋\u201D碎了。轻而清的东西，缓缓上升，变成了天；重而浊的东西，慢慢下降，变成了地。",
        "天和地分开后，盘古怕它们还会合在一起，就头顶天，脚踏地，站在天地当中，随着它们的变化而变化。天每天升高一丈，地每天加厚一丈，盘古的身体也跟着长高。这样过了一万八千年，天升得高极了，地变得厚极了。盘古这个巍峨的巨人就像一根柱子，撑在天和地之间，不让它们重新合拢。又不知过了多少年，天和地终于成形了，盘古也精疲力竭，累得倒下了。",
        "盘古倒下以后，他的身体发生了巨大的变化。他呼出的气息变成了四季的风和飘动的云；他发出的声音化作了隆隆的雷声；他的左眼变成了太阳，照耀大地，他的右眼变成了月亮，给夜晚带来光明；他的四肢和躯干变成了大地的四极和五方的名山；他的血液变成了奔流不息的江河；他的汗毛变成了茂盛的花草树木；他的汗水变成了滋润万物的雨露……",
        "伟大的巨人盘古，用他的整个身体创造了美丽的世界。"
      ],
      textEn: [
        "Long, long ago, heaven and earth had not yet separated. The universe was a chaotic mass, like a great egg. A giant named Pangu slept inside this chaos for eighteen thousand years.",
        "One day Pangu awoke. He opened his eyes but saw only darkness. Straining, he sat up. Crack! \u2014 a fissure split the \u2018great egg,\u2019 and a sliver of light entered. Seeing an axe beside him, Pangu swung it into the darkness. With a tremendous boom, the egg shattered. Light, clear matter rose slowly and became the sky; heavy, turbid matter sank and became the earth.",
        "Fearing they might merge again, Pangu stood between them \u2014 head propping up the sky, feet pressing down the earth \u2014 growing as they grew. Each day the sky rose one zhang higher, the earth thickened one zhang more, and Pangu grew one zhang taller. After another eighteen thousand years the sky was infinitely high and the earth endlessly thick. Pangu, like a colossal pillar, held them apart. After untold ages, heaven and earth were finally formed, and Pangu, utterly exhausted, collapsed.",
        "After Pangu fell, his body underwent tremendous transformation. His breath became the wind and clouds of the four seasons; his voice became rolling thunder; his left eye became the sun and his right eye the moon; his limbs and torso became the extremities and great mountains of the earth; his blood became ever-flowing rivers; his body hair became lush vegetation; his sweat became nourishing rain and dew\u2026",
        "The great giant Pangu created the beautiful world with his entire body."
      ],
      recognizeChars: ["劈","缓","浊","丈","隆","肢","躯","液"],
      writeChars: ["睁","翻","斧","劈","缓","浊","丈","撑","竭","累","血","液","奔","茂","滋"],
      exercises: [
        {type:"read",cn:"边读边想象画面，说说你心目中的盘古是什么样的",en:"Imagine the scene as you read. Describe Pangu as you picture him"},
        {type:"discuss",cn:"从课文中找出你认为神奇的地方，说说盘古开天地的过程",en:"Find the parts you find magical and describe the process of Pangu creating heaven and earth"},
        {type:"write",cn:"课后收集中国的神话故事读一读，然后讲给同学听",en:"Collect and read Chinese myths, then retell one to your classmates"}
      ],
      teachingPoints: [
        {cn:"了解中国创世神话的特点：想象宏大、人物伟大",en:"Understand characteristics of Chinese creation myths: grand imagination, great characters"},
        {cn:"学习把握文章的起因、经过、结果",en:"Learn to identify the cause, process, and outcome of a story"}
      ],
      parentTips: [
        {cn:"和孩子一起讲述其他中国神话故事（如女娲造人、夸父逐日），扩大阅读面",en:"Tell other Chinese myths together (Nüwa creates humans, Kuafu chases the sun) to broaden reading"},
        {cn:"引导孩子感受神话中神奇的想象力和对自然的敬畏",en:"Guide your child to appreciate the wondrous imagination and awe of nature in myths"}
      ]
    },
    {
      id: 13, title: "精卫填海", titleEn: "Jingwei Fills the Sea",
      text: [
        "炎帝之少女，名曰女娃。女娃游于东海，溺而不返，故为精卫，常衔西山之木石，以堙于东海。"
      ],
      textEn: [
        "The youngest daughter of Emperor Yan was named Nüwa. Nüwa swam in the Eastern Sea, drowned and never returned. She therefore became the bird Jingwei, which ceaselessly carries twigs and stones from the Western Mountains to fill the Eastern Sea."
      ],
      recognizeChars: ["帝","少","曰","溺","返"],
      writeChars: ["帝","曰","溺","返","衔"],
      exercises: [
        {type:"read",cn:"正确、流利地朗读课文。背诵课文",en:"Read correctly and fluently. Recite the text"},
        {type:"discuss",cn:"结合注释，用自己的话讲讲精卫填海的故事",en:"Using the notes, retell the story of Jingwei Fills the Sea in your own words"},
        {type:"discuss",cn:"精卫给你留下了怎样的印象？和同学交流",en:"What impression does Jingwei leave on you? Discuss with classmates"}
      ],
      teachingPoints: [
        {cn:"这是一篇文言文（选自《山海经·北山经》）。理解关键字词：\u201C溺\u201D（溺水）、\u201C故\u201D（因此）、\u201C堙\u201D（填塞）",en:"This is classical Chinese (from Classic of Mountains and Seas). Key terms: \u2018drowned,\u2019 \u2018therefore,\u2019 \u2018fill\u2019"},
        {cn:"感受精卫坚韧不拔、不屈不挠的精神",en:"Appreciate Jingwei\u2019s tenacity and indomitable spirit"},
        {cn:"学习文言文的基本阅读方法：借助注释理解大意",en:"Learn the basic approach to classical Chinese: use annotations to grasp the gist"}
      ],
      parentTips: [
        {cn:"帮助孩子理解文言文，逐字逐句对照注释，培养文言文阅读能力",en:"Help your child understand each character with annotations, building classical Chinese skills"},
        {cn:"讨论精卫的精神在现实中的意义：坚持不懈、不畏困难",en:"Discuss the real-world meaning of Jingwei\u2019s spirit: perseverance in the face of difficulty"}
      ]
    },
    {
      id: 14, title: "普罗米修斯", titleEn: "Prometheus",
      text: [
        "很久很久以前，地面上没有火，人们只好吃生的东西，在无边的黑暗中度过一个又一个长夜。就在这时候，有一位名叫普罗米修斯的天神来到了人间，看到人类没有火的悲惨情景，决心冒着生命危险，到天上去\u201C盗\u201D取火种。",
        "有一天，当太阳车从天空驰过的时候，普罗米修斯跑到太阳车那里，从喷射着火焰的车轮上，拿了一颗火星，带到人间。自从有了火，人类就开始用它烧熟食物，驱寒取暖，并用火来驱赶危害人类安全的猛兽……",
        "得知普罗米修斯从天上取走火种的消息，众神的领袖宙斯气急败坏，决定给普罗米修斯以最严厉的惩罚，吩咐火神立即执行。火神赫淮斯托斯很敬佩普罗米修斯，悄悄对他说：\u201C只要你向宙斯承认错误，归还火种，我一定请求他饶恕你。\u201D普罗米修斯摇摇头，坚定地回答：\u201C为人类造福，有什么错？我可以忍受各种痛苦，但决不会承认错误，更不会归还火种！\u201D",
        "火神不敢违抗宙斯的命令，只好把普罗米修斯押到高加索山上。普罗米修斯的双手和双脚戴着铁环，被死死地锁在高高的悬崖上。他既不能动弹，也不能睡觉，日夜遭受着风吹雨淋的痛苦。尽管如此，普罗米修斯就是不向宙斯屈服。",
        "狠心的宙斯又派了一只凶恶的鹫鹰，每天站在普罗米修斯的双膝上，用它尖利的嘴巴，啄食他的肝脏。白天，他的肝脏被吃光了，可是一到晚上，肝脏又重新长了出来。这样，普罗米修斯所承受的痛苦，永远没有了尽头。",
        "许多年来，普罗米修斯一直被锁在那个可怕的悬崖上。有一天，著名的大力士赫拉克勒斯经过高加索山。他看到普罗米修斯被锁在悬崖上，心中愤愤不平，便挽弓搭箭，射死了那只鹫鹰，又用石头砸碎了锁链。普罗米修斯——这位敢于从天上\u201C盗\u201D取火种的英雄，终于获得了自由。"
      ],
      textEn: [
        "Long ago there was no fire on earth. People ate raw food and spent night after night in endless darkness. Then a god named Prometheus came to the human world. Seeing their miserable fireless existence, he resolved to risk his life to \u2018steal\u2019 fire from the heavens.",
        "One day, as the sun chariot raced across the sky, Prometheus ran to it and snatched a spark from the blazing wheel, bringing it to humankind. With fire, people could cook food, ward off cold, and drive away dangerous beasts\u2026",
        "When Zeus, king of the gods, learned that Prometheus had taken fire, he flew into a rage and ordered the harshest punishment, commanding the fire god to carry it out. Hephaestus admired Prometheus and whispered: \u201CJust admit your error and return the fire \u2014 I\u2019ll beg Zeus to forgive you.\u201D Prometheus shook his head firmly: \u201CWhat wrong is there in bringing blessings to humanity? I will endure any suffering, but I will never confess nor return the fire!\u201D",
        "Hephaestus dared not defy Zeus. Prometheus was taken to Mount Caucasus, his hands and feet clamped in iron rings, chained to a towering cliff. He could neither move nor sleep, enduring wind and rain day and night. Yet he never yielded to Zeus.",
        "Cruel Zeus then sent a savage vulture that perched on Prometheus\u2019 knees each day, tearing at his liver with its sharp beak. By evening the liver was consumed, but by dawn it had regrown. Thus Prometheus\u2019 torment was without end.",
        "For many years Prometheus remained chained to that terrible cliff. One day the renowned strongman Heracles passed by Mount Caucasus. Outraged at the sight, he drew his bow, slew the vulture, and smashed the chains with a stone. Prometheus \u2014 the hero who dared steal fire from heaven \u2014 was free at last."
      ],
      recognizeChars: ["斯","惨","盗","驰","还","恕","坚","押","锁","遭","恶","脏","愤"],
      writeChars: ["悲","惨","兽","佩","坚","违","抗","环","锁","既","狠","著","愤","获"],
      exercises: [
        {type:"read",cn:"朗读课文，注意读好众神的名字",en:"Read aloud, paying attention to the pronunciation of the gods\u2019 names"},
        {type:"discuss",cn:"按照起因、经过、结果的顺序，讲一讲普罗米修斯\u201C盗\u201D火的故事",en:"Retell the story of Prometheus stealing fire in order of cause, process, and result"},
        {type:"discuss",cn:"故事中哪个情节触动了你？和同学交流",en:"Which part of the story moved you? Discuss with classmates"}
      ],
      teachingPoints: [
        {cn:"了解古希腊神话的特点，感受普罗米修斯不畏强权、为民造福的精神",en:"Learn about Greek myth characteristics; feel Prometheus\u2019 courage against tyranny for human welfare"},
        {cn:"学习按照起因、经过、结果把握文章的主要内容",en:"Learn to grasp main content through cause, process, and result"}
      ],
      parentTips: [
        {cn:"和孩子比较中国神话和希腊神话的异同，拓宽文化视野",en:"Compare Chinese and Greek myths with your child, broadening cultural horizons"},
        {cn:"讨论普罗米修斯为什么宁愿受苦也不屈服，培养孩子的正义感",en:"Discuss why Prometheus endured suffering rather than submit, fostering a sense of justice"}
      ]
    },
    {
      id: 15, title: "女娲补天", titleEn: "N\u00fcwa Mends the Sky",
      isSelfRead: true,
      text: [
        "自从女娲创造了人类，大地上到处欢声笑语，人们过着快乐幸福的生活。",
        "不料有一年，天地忽然发生了一场大变动。天上露出一个大窟窿，地上也裂开了一道道黑黝黝的深沟，洪水从地下喷涌而出，各种野兽也从山林里跑出来残害人类。人们惊慌失措，四处奔逃，整个世界陷入了一片混乱和恐怖之中。",
        "女娲看到这情景，难过极了，决心把天和地修补起来，让人类重新过上幸福的生活。",
        "这可是一项巨大而又艰难的工作。女娲先从各地拣来赤、青、黄、白、黑五种颜色的石头，燃起神火熔炼。随着神火渐渐熄灭，五种颜色的石头被炼成了黏稠的石浆。女娲用这些石浆把天上的大窟窿修补好。从此，天上便有了五色的云霞。女娲担心补好的天再塌下来，于是又杀了一只大乌龟，斩下它的四条腿，竖立在大地的四方，把人类头顶上的天空撑起来，这样天就再没有了坍塌的危险。接着，她奋勇杀死了在中原一带作恶的黑龙，其他野兽见此情景，吓得纷纷逃回山林，再不敢到处流窜残害人类了。最后，女娲把芦苇烧成灰，撒到水中，芦灰越积越厚，把喷涌洪水的地缝也堵住了。",
        "天和地终于恢复了平静，人类获得了新生。人们世世代代怀念着女娲，传颂着她的伟大功绩。"
      ],
      textEn: [
        "After N\u00fcwa created humankind, the earth was filled with laughter and people lived happily.",
        "Unexpectedly, one year a great upheaval struck. A gaping hole appeared in the sky, and deep black crevices split the earth. Floodwaters gushed from below, and wild beasts charged out of the forests to harm people. Panic-stricken, people fled in every direction as the world plunged into chaos and terror.",
        "N\u00fcwa was heartbroken. She resolved to mend the sky and earth so humanity could live happily again.",
        "It was an enormous and arduous task. N\u00fcwa gathered stones of five colors \u2014 red, blue, yellow, white, and black \u2014 from around the land and kindled a divine fire to smelt them. As the fire died down, the stones melted into a thick, sticky paste. N\u00fcwa used this paste to seal the great hole in the sky, and five-colored clouds appeared. Fearing the patched sky might collapse again, she slew a great tortoise, cut off its four legs, and set them upright at the four corners of the earth to prop up the sky. Then she bravely killed a black dragon terrorizing the central plains; the other beasts fled back to the forests and dared not harm humans again. Finally, she burned reeds to ash and scattered it into the water; the ash accumulated and plugged the crevices spewing floodwater.",
        "At last heaven and earth returned to peace, and humanity was reborn. People honored N\u00fcwa through the generations, celebrating her great achievements."
      ],
      recognizeChars: ["措","混","项","熄","浆","塌","杀","颂","绩"],
      writeChars: [],
      exercises: [
        {type:"read",cn:"默读课文，说说故事的起因、经过和结果",en:"Read silently and summarize the story\u2019s cause, process, and result"},
        {type:"discuss",cn:"发挥自己的想象，试着把女娲从各地拣来五种颜色石头的过程说清楚、说生动",en:"Use your imagination to vividly describe how N\u00fcwa gathered the five-colored stones"}
      ],
      teachingPoints: [
        {cn:"感受神话中神奇的想象和女娲拯救人类的伟大形象",en:"Appreciate the magical imagination in the myth and N\u00fcwa\u2019s great heroic image"},
        {cn:"学习了解故事的起因、经过、结果，把握文章主要内容",en:"Practice identifying the cause, process, and result to grasp the main content"}
      ],
      parentTips: [
        {cn:"和孩子比较盘古开天地和女娲补天两个神话，找出共同点和不同点",en:"Compare Pangu Creates Heaven and Earth with N\u00fcwa Mends the Sky \u2014 find similarities and differences"},
        {cn:"鼓励孩子阅读更多中国神话，如后羿射日、嫦娥奔月",en:"Encourage reading more Chinese myths, such as Hou Yi Shoots the Suns and Chang\u2019e Flies to the Moon"}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"嫦娥\n[唐] 李商隐\n云母屏风烛影深，\n长河渐落晓星沉。\n嫦娥应悔偷灵药，\n碧海青天夜夜心。",en:"Chang\u2019e\nby Li Shangyin (Tang)\nBehind the mica screen, candle shadows deepen;\nthe Milky Way sinks, the dawn star fades.\nChang\u2019e must regret stealing the elixir \u2014\nblue sea, clear sky, lonely heart night after night."}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"说说下面的词语让你想到了哪些人物或故事：腾云驾雾、上天入地、神机妙算、各显神通、三头六臂、神通广大、未卜先知、刀枪不入",en:"Which characters or stories do these words bring to mind: cloud-riding, heaven-and-earth-spanning, divine strategy, each showing powers, three heads six arms, great magic, foresight, invulnerable"}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"我和____过一天：如果有机会和神话或童话人物中的某一位过上一天，你会选择谁？你们会一起去哪里？会做些什么？",en:"A Day with ____: If you could spend a day with any mythical or fairy tale character, who would you choose? Where would you go and what would you do?"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 5 — 习作单元 Writing Unit (16-17)    */
/*  Theme: 写事 Writing About Events           */
/* ═══════════════════════════════════════════ */
{
  id: 5, title: "习作单元", titleEn: "Writing Unit",
  type: "xiezuo",
  lessons: [
    {
      id: 16, title: "麻雀", titleEn: "The Sparrow",
      text: [
        "我打猎回来，走在林荫路上。猎狗跑在我的前面。",
        "突然，我的猎狗放慢脚步，悄悄地向前走，好像嗅到了前面有什么野物。",
        "风猛烈地摇撼着路旁的白桦树。我顺着林荫路望去，看见一只小麻雀呆呆地站在地上，无可奈何地拍打着小翅膀。它嘴角嫩黄，头上长着绒毛，分明是刚出生不久，从巢里掉下来的。",
        "猎狗慢慢地走近小麻雀，嗅了嗅，张开大嘴，露出锋利的牙齿。突然，一只老麻雀从一棵树上飞下来，像一块石头似的落在猎狗面前。它挓挲起全身的羽毛，绝望地尖叫着。",
        "老麻雀用自己的身躯掩护着小麻雀，想拯救自己的幼儿。它准备着一场搏斗，可是因为紧张，它浑身发抖，发出嘶哑的声音。在它看来，猎狗是个多么庞大的怪物啊！可是它不能安然地站在高高的没有危险的树枝上，一种强大的力量使它飞了下来。",
        "猎狗愣住了，它可能没料到老麻雀会有这么大的勇气，慢慢地，慢慢地向后退。",
        "我急忙唤回我的猎狗，带着它走开了。"
      ],
      textEn: [
        "I was returning from hunting, walking along the tree-lined path. My hound ran ahead of me.",
        "Suddenly the hound slowed down and crept forward, as if it had caught the scent of something.",
        "Wind shook the birch trees violently. I looked down the path and saw a baby sparrow standing helplessly on the ground, flapping its tiny wings. Its beak was tender yellow, its head covered in down \u2014 clearly it had just hatched and fallen from the nest.",
        "The hound approached slowly, sniffed, opened its jaws, and bared its sharp teeth. Suddenly an old sparrow swooped down from a tree, landing like a stone right in front of the hound. It ruffled every feather and shrieked in desperation.",
        "The old sparrow shielded the baby with its body, ready to fight. Trembling with fear, it let out a hoarse cry. To this tiny bird, the hound was an enormous monster! Yet it could not remain safe on a high branch \u2014 a powerful force drove it down.",
        "The hound froze. Perhaps it never expected such courage from the old sparrow. Slowly, slowly, it backed away.",
        "I quickly called my hound back and walked away."
      ],
      recognizeChars: ["嗅","奈","拯","嘶","哑","庞"],
      writeChars: ["嗅","呆","奈","巢","齿","躯","掩","护","幼","搏","庞","量","愣"],
      exercises: [
        {type:"read",cn:"朗读课文。说说课文围绕麻雀写了一件什么事，这件事的起因、经过和结果是怎样的",en:"Read aloud. Summarize what happened with the sparrow \u2014 the cause, process, and result"},
        {type:"discuss",cn:"课文是怎样把下面的内容写清楚的？老麻雀的无畏；猎狗的攻击与退缩",en:"How does the text clearly portray the old sparrow\u2019s fearlessness and the hound\u2019s attack and retreat?"},
        {type:"write",cn:"作者把看到的、听到的、想到的都写了下来。学习这种方法来描写一个场景",en:"The author wrote what he saw, heard, and thought. Try this method to describe a scene"}
      ],
      teachingPoints: [
        {cn:"学习把事情写清楚的方法：交代起因、经过、结果",en:"Learn to write clearly about an event: state the cause, process, and result"},
        {cn:"体会作者将所见、所闻、所想结合的写法",en:"Appreciate how the author combines what he sees, hears, and thinks"}
      ],
      parentTips: [
        {cn:"引导孩子理解\u201C一种强大的力量\u201D指的是母爱的力量",en:"Help your child understand that the \u2018powerful force\u2019 is the power of parental love"},
        {cn:"鼓励孩子练习写一件小事，注意写清楚起因、经过、结果",en:"Encourage your child to write about a small event, clearly stating cause, process, and result"}
      ]
    },
    {
      id: 17, title: "爬天都峰", titleEn: "Climbing Tiandu Peak",
      text: [
        "假日里，爸爸带我去黄山，爬天都峰。",
        "我站在天都峰脚下抬头望：啊，峰顶这么高，在云彩上面哩！我爬得上去吗？再看看笔陡的石级，石级边上的铁链，似乎是从天上挂下来的，真叫人发颤！",
        "忽然听到背后有人叫我：\u201C小朋友，你也来爬天都峰？\u201D我回头一看，是一位白发苍苍的老爷爷，年纪比我爷爷还大哩！我点点头，仰起脸，问：\u201C老爷爷，您也来爬天都峰？\u201D老爷爷也点点头，说：\u201C对，咱们一起爬吧！\u201D",
        "我奋力向峰顶爬去，一会儿攀着铁链上，一会儿手脚并用向上爬，像小猴子一样……",
        "爬呀爬，我和老爷爷，还有爸爸，终于都爬上了天都峰顶。",
        "在鲫鱼背前，爸爸给我和老爷爷照了一张相，留作纪念。老爷爷拉拉我的小辫子，笑呵呵地说：\u201C谢谢你啦，小朋友。要不是你的勇气鼓舞我，我还下不了决心哩！现在居然爬上来了！\u201D\u201C不，老爷爷，我是看您也要爬天都峰，才有勇气向上爬的！我应该谢谢您！\u201D",
        "爸爸听了，笑着说：\u201C你们这一老一小真有意思，都会从别人身上汲取力量！\u201D"
      ],
      textEn: [
        "During the holiday, Dad took me to climb Tiandu Peak at Huangshan.",
        "Standing at the foot of the peak and looking up: goodness, the summit is so high, above the clouds! Can I make it? The steep stone steps and iron chains beside them seemed to hang from the sky \u2014 it made me tremble!",
        "Suddenly a voice called from behind: \u201CLittle one, you\u2019re climbing Tiandu Peak too?\u201D I turned to see a white-haired grandfather, even older than my own. I nodded and looked up: \u201CGrandfather, are you climbing too?\u201D He nodded: \u201CYes, let\u2019s climb together!\u201D",
        "I climbed with all my might, sometimes gripping the iron chains, sometimes scrambling on all fours like a little monkey\u2026",
        "Climb and climb \u2014 the old man, Dad, and I finally all reached the summit of Tiandu Peak.",
        "At the \u2018Crucian\u2019s Back\u2019 ridge, Dad took a photo of me and the grandfather as a keepsake. The old man tugged my braid, chuckling: \u201CThank you, child. Without your courage to inspire me, I\u2019d never have decided to climb! Yet here I am!\u201D \u201CNo, Grandfather \u2014 seeing you willing to climb gave me the courage to try! I should thank you!\u201D",
        "Dad laughed: \u201CYou two are wonderful \u2014 both drawing strength from each other!\u201D"
      ],
      recognizeChars: ["级","链","攀","相","辫","呵"],
      writeChars: ["级","链","颤","攀","猴","念","辫","呵"],
      exercises: [
        {type:"read",cn:"这篇课文写了一件什么事？是按照什么顺序写的？",en:"What event does this text describe? In what order is it written?"},
        {type:"discuss",cn:"\u201C我\u201D开始不敢爬，最后爬上去了。课文是怎么把\u201C我\u201D爬山的过程写清楚的？",en:"\u2018I\u2019 was afraid at first but made it. How does the text clearly describe the climbing process?"},
        {type:"write",cn:"观察家人做家务的过程，用一段话把这个过程写下来，注意用上表示动作的词语",en:"Observe a family member doing chores and write about the process, using action verbs"}
      ],
      teachingPoints: [
        {cn:"学习按照事情发展的先后顺序写清楚一件事",en:"Learn to write about an event in chronological order"},
        {cn:"体会\u201C从别人身上汲取力量\u201D的主题——互相鼓励、克服困难",en:"Appreciate the theme of \u2018drawing strength from others\u2019 \u2014 mutual encouragement overcomes difficulty"}
      ],
      parentTips: [
        {cn:"和孩子聊聊生活中\u201C从别人身上汲取力量\u201D的经历",en:"Share real-life experiences of drawing strength from others with your child"},
        {cn:"鼓励孩子练习写一件自己经历的事情，注意按顺序写清楚",en:"Encourage writing about a personal experience, keeping events in order"}
      ]
    }
  ],
  garden: {
    accumulation: {title:"习作例文",titleEn:"Model Compositions",content:{cn:"习作例文：《我家的杏熟了》——按事情发展的顺序写\u201C分杏\u201D的过程；《小木船》——围绕\u201C小木船\u201D写友谊破裂和和好的过程",en:"Model texts: \u2018Our Apricots Are Ripe\u2019 \u2014 tells the process of sharing apricots in chronological order; \u2018The Little Wooden Boat\u2019 \u2014 centers on a boat to show friendship\u2019s breakup and reconciliation"}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"生活万花筒：选一件你印象深的事，按一定的顺序把这件事情写清楚。写之前，仔细想想这件事的起因、经过、结果",en:"Life Kaleidoscope: Choose an event that impressed you. Write it clearly in order. Think about its cause, process, and result beforehand"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 6 — 课文 Texts (Lessons 18-20)       */
/*  Theme: 成长故事 Growing-Up Stories         */
/* ═══════════════════════════════════════════ */
{
  id: 6, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 18, title: "牛和鹅", titleEn: "The Ox and the Goose",
      text: [
        "大家都说：牛的眼睛看人，觉得人比牛大，所以牛是怕人的；鹅的眼睛看人，觉得人比鹅小，所以鹅不怕人。",
        "我们都很相信这句话。所以我们看到牛，一点儿不害怕，敢用手拍它的背，摸它的肚子，甚至敢用树枝去触它的屁股呢！可是牛像是无所谓似的，只是眨眨眼，把尾巴甩几甩。有的孩子还敢扳牛角，叫它跪下来，然后骑到牛背上去。我那时虽然不敢这样，可是用拳头捶捶牛背还是敢的。",
        "我们看到鹅，那就完全两样了：总是远远地站在安全的地方，才敢看它。要是在路上碰到鹅，就得绕个大圈子才敢走过去。",
        "有一次，我们放学回家，走过池塘边，看见有四只大白鹅在靠近岸边的水里游。我们马上都不说话了，贴着墙壁，悄悄地走过去。这时，有一个顽皮的孩子故意要引它们来，就吁哩哩哩地叫了一声。鹅听见了，就竖起头来，侧着眼睛看了看，竟爬到岸上，一摇一摆地、神气地朝我们走过来；还伸长脖子，嘎嘎地叫着，扑打着大翅膀，好像在它们眼里根本没有我们这些人似的。",
        "孩子们惊呼起来，急急逃跑，鹅追得更快了。我吓得脚也软了，更跑不快。这时，带头的那只老公鹅就啪嗒啪嗒地跑了过来，嘎嘎，它赶上了我，嘎嘎，它张开嘴，一口就咬住了我当胸的衣襟，拉住我不放。在忙乱中，我的书包掉了，鞋子也弄脱了。我想，它一定要把我咬死了。也许是我的哭叫更惹怒了这只老公鹅。它用全身的力量来拖我，啄我，扇动翅膀来扑打我。",
        "就在这时候，池塘里划来了一只小船，捉鱼的金奎叔从船里跳上岸，飞快地走了过来。金奎叔是个结实的汉子，他一把握住了鹅的长脖子。鹅用脚爪划他，用嘴啄他。可是金奎叔的力气是那么大，他轻轻地把鹅提了起来，然后就像摔一个酒瓶似的，呼的一下，把这只老公鹅甩到了半空中。它张开翅膀，啪啪啪地落到了池塘中。这一下，其余三只鹅也怕了，纷纷张开翅膀，跳进池塘里，向远处游去。",
        "金奎叔帮我穿上鞋，拾起书包，用大手摸摸我的头，说：\u201C鹅有什么可怕的！看把你吓成这样。\u201D我说：\u201C因为鹅把我们看得比它小哇！\u201D金奎叔说：\u201C让它这样看好了！可是，它要是凭这点来欺负人，那咱们可不答应，就得掐住它的脖子，把它摔到池塘里去。记着，霖哥儿，下次可别怕它们。\u201D",
        "我记住金奎叔的话，从此不再怕鹅了。有什么可怕的！它虽然把我们看得比它小，可我们实在比它强啊！看到牛，我也不再无缘无故欺负它了，我觉得它虽然把我们看得比它大，可我们平白地去欺负它干吗？"
      ],
      textEn: [
        "Everyone said: a cow\u2019s eyes make people look bigger than the cow, so cows fear people; a goose\u2019s eyes make people look smaller, so geese don\u2019t fear people.",
        "We totally believed this. We were not at all afraid of cows \u2014 we dared to pat their backs, rub their bellies, even poke them with sticks! The cow just blinked and flicked its tail. Some kids even grabbed the horns, made the cow kneel, and rode its back. I wasn\u2019t that brave, but I dared to thump the cow\u2019s back with my fist.",
        "Geese were a completely different story. We\u2019d stand far away before daring to look at one. If we met geese on the road, we had to make a big detour.",
        "One day after school, we passed a pond where four big white geese swam near shore. We fell silent and crept along the wall. A mischievous boy called out to lure them. The geese heard, raised their heads, peered at us, then actually climbed ashore and swaggered toward us, stretching their necks, honking, flapping their wings as if we didn\u2019t exist.",
        "The children screamed and fled. The geese chased even faster. My legs went weak. The lead gander caught up, grabbed my shirt front with its beak and held fast. My schoolbag dropped, my shoes came off. I was sure it would kill me. My crying seemed to enrage it further \u2014 it dragged me, pecked me, and beat me with its wings.",
        "Just then, fisherman Uncle Jinkui jumped from a boat onto the bank and strode over. He was a strong man. He grabbed the goose\u2019s long neck with one hand. The goose scratched and pecked, but Uncle Jinkui was far stronger. He lifted it lightly and flung it like a bottle \u2014 whoosh \u2014 into the air. It spread its wings and plopped into the pond. The other three geese panicked, flapped into the pond, and swam away.",
        "Uncle Jinkui helped me with my shoes, picked up my bag, ruffled my hair, and said: \u201CWhat\u2019s scary about a goose? Look at you!\u201D I said: \u201CBecause the goose sees us as smaller!\u201D He said: \u201CLet it think so! But if it tries to bully us, we won\u2019t stand for it \u2014 grab its neck and toss it in the pond. Remember, Lin-ge, don\u2019t be afraid of geese.\u201D",
        "I remembered his words and was never afraid of geese again. What\u2019s there to fear? Even if they see us as small, we\u2019re actually stronger! And I stopped picking on cows for no reason either \u2014 just because they see us as big, why should we bully them?"
      ],
      recognizeChars: ["谓","拳","捶","顽","吁","襟","膊","瓶","怖","凭","欺","掐"],
      writeChars: ["摸","甚","跪","捶","绕","顽","脖","脱","概","惹","昏","握","摔","凭","掐"],
      exercises: [
        {type:"read",cn:"结合课文中的批注，想想可以从哪些角度给文章作批注",en:"Using the annotations in the text, think about the angles from which you can annotate articles"},
        {type:"discuss",cn:"一边默读一边画出相关词句，体会\u201C我\u201D见到鹅和被鹅袭击时的心情",en:"While reading, underline relevant words and experience \u2018my\u2019 feelings when seeing and being attacked by geese"},
        {type:"discuss",cn:"说说为什么\u201C直到现在，我还记着金奎叔的话\u201D",en:"Explain why \u2018even now, I still remember Uncle Jinkui\u2019s words\u2019"}
      ],
      teachingPoints: [
        {cn:"学习用批注的方法阅读：在写得好的地方、有疑问的地方、有启发的地方作批注",en:"Learn the annotation method: annotate where writing is good, where you have questions, or where you\u2019re inspired"},
        {cn:"理解故事蕴含的道理：不能仗势欺人，也不能因为害怕就不敢面对",en:"Understand the moral: don\u2019t bully the weak, and don\u2019t let fear stop you from standing up"}
      ],
      parentTips: [
        {cn:"和孩子讨论课文中的道理，联系生活实际谈谈",en:"Discuss the story\u2019s lessons with your child, connecting them to real life"},
        {cn:"鼓励孩子在阅读时尝试做批注，培养主动思考的阅读习惯",en:"Encourage your child to annotate while reading, fostering active thinking"}
      ]
    },
    {
      id: 19, title: "一只窝囊的大老虎", titleEn: "A Useless Big Tiger",
      text: [
        "我念的那所小学每星期六下午全校开周会，会上总有文艺表演。我一直没在台上露过面，看着同班的小朋友在台上又唱又跳，我真个羡慕得要死。",
        "有一回又轮到我们班表演，班主任在分派角色的时候，我殷切期待的目光可能引起了她的注意。分派到最后，她看了我半晌才下决心说：\u201C就这样吧，你扮老虎。\u201D这一回我们班演的是《兄妹历险记》，中间有这么一段情节：兄妹俩在森林里迷了路，碰上一只大老虎。我就扮这只大老虎，用不着说话。",
        "于是开始排练。我套上老虎皮，那是一件画着黑道道的黄布连衣裤，背后拖着一条硬邦邦的尾巴，还得套上个纸糊的老虎头。那个演哥哥的小朋友还故意逗我：\u201C你会豁虎跳吗？\u201D\u201C不会。\u201D\u201C不会豁虎跳算什么老虎。\u201D他撇了撇嘴。",
        "老师真是个通情达理的好老师。她说：\u201C不要紧，扮老虎不一定要豁虎跳。你先四脚着地爬上台，见了他们兄妹俩就站起来，啊呜啊呜叫着，向他们扑过去，他们逃，你就追。等到猎人上场，对你连开两枪，你就躺下来——死掉。记住了吗？\u201D",
        "终于到了星期六，到了下午，到了我们班演出的那个时刻。我穿上老虎皮，套上老虎头，紧张地等候在后台的上场口。忽然背后有人轻轻推了我一把。我知道推我的是老师，立刻弯下身子爬上场去，嘴里啊呜啊呜直叫。只听见台下一阵哄堂大笑，笑得我脸上一阵热。",
        "我总算一直演到了躺下来死掉。到底怎么演完的，我一点儿也记不起来，只记得耳边的笑声接连不断。等到幕布拉下，我站起来摘下老虎头，满头满脸都是汗珠。",
        "后来呢？后来我发誓，今后决不再扮演老虎。可是每回上动物园，我总要去看看老虎，想看看老虎是怎么豁虎跳的。可是老虎在笼子里不是打瞌睡，就是垂头丧气地踱来踱去，从没见过它们豁过什么虎跳。",
        "为什么不会豁虎跳就不能扮老虎呢？为什么没豁虎跳就会惹起哄堂大笑呢？我至今还不明白。"
      ],
      textEn: [
        "At my primary school, every Saturday afternoon there was an assembly with performances. I had never been on stage. Watching classmates sing and dance, I was green with envy.",
        "When our class\u2019s turn came, the teacher noticed my eager eyes. At the very end she said: \u201CYou\u2019ll play the tiger.\u201D Our play was \u2018The Brother-Sister Adventure\u2019 \u2014 siblings lost in a forest encounter a big tiger. I was that tiger, no lines needed.",
        "Rehearsals began. I pulled on the tiger suit \u2014 a yellow cloth jumpsuit with black stripes, a stiff tail, and a papier-m\u00e2ch\u00e9 tiger head. The boy playing the brother teased me: \u201CCan you do a tiger leap?\u201D \u201CNo.\u201D \u201CWhat kind of tiger can\u2019t leap?\u201D He curled his lip.",
        "The teacher was wonderfully understanding. She said: \u201CDon\u2019t worry. You don\u2019t need a tiger leap. Crawl on all fours onto the stage, stand up when you see the siblings, roar \u2018ow-woo,\u2019 charge at them, chase them when they run. When the hunter appears and fires two shots, just lie down \u2014 dead. Got it?\u201D",
        "Finally it was Saturday, the afternoon, our moment. In the tiger costume, I waited nervously at the stage entrance. Someone gently pushed me from behind. I knew it was the teacher. I bent down and crawled onstage, roaring \u2018ow-woo.\u2019 The audience erupted in laughter. My face burned.",
        "I managed to act all the way until I lay down dead. How I finished, I cannot recall \u2014 I only remember continuous laughter. When the curtain dropped and I pulled off the tiger head, my face was drenched in sweat.",
        "Later? I swore never to play a tiger again. But every zoo visit, I went to see the tigers, hoping to watch them leap. They were always either napping or pacing miserably \u2014 I never once saw them leap.",
        "Why couldn\u2019t I play a tiger without the leap? Why did the lack of it cause such laughter? To this day, I don\u2019t understand."
      ],
      recognizeChars: ["囊","露","羡","角","殷","撇","啊","霉","亏","哄","拙","唉","砸"],
      writeChars: ["殷","段","俩","练","套","裤","逃","亏","挖","撤","堂","砸","锅"],
      exercises: [
        {type:"read",cn:"默读课文，在你不理解的地方作批注，和同学交流",en:"Read silently, annotate what you don\u2019t understand, and discuss with classmates"},
        {type:"discuss",cn:"从开始期待到最后疑惑，\u201C我\u201D的心情有怎样的变化？为什么会有那样的变化？",en:"How did \u2018my\u2019 feelings change from initial excitement to final confusion? Why?"},
        {type:"discuss",cn:"结合生活经验说一说：\u201C我\u201D的演出窝囊吗？可以怎么开导\u201C我\u201D？",en:"From your own experience: was the performance really \u2018useless\u2019? How might you comfort \u2018me\u2019?"}
      ],
      teachingPoints: [
        {cn:"通过人物的动作、语言、神态体会人物的心情变化",en:"Understand a character\u2019s changing mood through actions, words, and expressions"},
        {cn:"学习批注的方法：在精彩处、疑惑处、有感触处做标记",en:"Practice annotating: mark brilliant passages, confusing spots, and moving moments"}
      ],
      parentTips: [
        {cn:"和孩子聊聊类似的经历——第一次做某事紧张又好笑的感受",en:"Share a similar experience \u2014 the nervousness and humor of trying something new for the first time"},
        {cn:"安慰孩子：勇敢尝试就是成功，不必纠结结果是否完美",en:"Reassure your child: bravely trying is itself a success; the result need not be perfect"}
      ]
    },
    {
      id: 20, title: "陀螺", titleEn: "The Top",
      text: [
        "在我的故乡，陀螺不叫陀螺，叫作\u201C冰尜儿\u201D，顾名思义，就是冰上的小家伙。做冰尜儿用的是木头，柳木、榆木、松木、枣木、梨木都可以。抽打冰尜儿，当然是在冬季的冰天雪地里，最好的场所是冰面。好的冰尜儿尖部嵌一颗滚珠，转起来能增加许多妩媚。",
        "抽冰尜儿的小伙伴们，都爱比个高下。他们往往各站一角，奋力抽转自己的冰尜儿，让它朝对方撞去。两只旋转的陀螺奋勇搏斗，旋风般撞向对手，刚一接触，又各自闪向一边，然后重整旗鼓再战——直到其中一方被撞翻才告一段落。赛陀螺每次都是体重个大的一方占上风。因此，只有小陀螺的大多在自家院子里玩，不拿到马路上去应战。",
        "我从小就不甘人后，更不愿自己的陀螺像金兵见到岳家军，一战即败。于是四处寻找木头，为削出得心应手的陀螺，就差没把椅子腿拿来\u201C废物利用\u201D了。然而一个孩子无论如何是削不出高质量的陀螺的，因此，曾有很长一段时间我的世界堆满乌云，快乐像过冬的燕子一般，飞到一个谁也看不到的地方去了。",
        "这种懊恼终于引起了长辈的注意。我的叔叔，一位很有童心的年轻民警，答应在我生日那天送我一只陀螺。这消息曾使我一整天处于恍惚的状态，老想象着那只陀螺英武的风姿。叔叔的礼物不错！这只陀螺不是人工削出来的，而是一位木工在旋床上旋出来的，圆且光滑，如同一枚鸭蛋。虽然它远不如我想象中的那么漂亮，但我极高兴地接受了它。尤其当我看到这枚\u201C鸭蛋\u201D的下端已嵌上一粒大滚珠时，更是手舞足蹈，恨不得马上在马路上一显身手！",
        "我的陀螺刚一露面，就招来了一顿嘲笑。的确，在各色帅气的陀螺面前，它长得不伦不类，看不出一丝一毫与同伴相斗的能力。然而世间许多事都是不可预料的，一个大陀螺的主人开始傲慢地向我挑衅。大陀螺摇头晃脑，挺着肚皮一次次冲过来，我的\u201C鸭蛋\u201D则不动声色地闪躲。终于无法避开，它们狠狠地撞上了！",
        "奇怪的是，我的陀螺个头小，却顽强得出奇！明明被撞翻在一边，一扭身又照样旋转起来。它圆头圆脑，好像上下左右都能找到支撑点似的。结果呢，大陀螺在这个始终立于不败之地的对手面前，彻底溃败了。",
        "这真是个辉煌的时刻！我尝到了胜利的滋味，品到了幸运的甜头。无意中获得的\u201C荣誉\u201D，虽然小如微尘，对好胜的孩子来说，也足以陶醉许久了。这真应了一句古话：人不可貌相，海水不可斗量。"
      ],
      textEn: [
        "In my hometown, spinning tops were called \u2018ice nitwits\u2019 \u2014 little fellows for the ice. They were made of wood \u2014 willow, elm, pine, jujube, pear. You spun them on frozen ground in winter, best on an icy surface. A good top had a ball bearing embedded in its tip for extra grace.",
        "Kids loved to compete. Standing at corners, they whipped their tops into furious spins, sending them crashing into opponents. The two whirling tops battled like storms, colliding, bouncing apart, regrouping until one toppled. Big, heavy tops always won. Owners of small ones stayed in their yards, never daring to challenge on the street.",
        "I was never content to lag behind. I didn\u2019t want my top to crumble like Jin soldiers before Yue Fei\u2019s army. I searched everywhere for wood and nearly turned chair legs into raw material. But a child simply cannot carve a quality top. For a long time, my world was clouded; happiness had flown away like a swallow in winter.",
        "My frustration finally caught the attention of an elder. My uncle, a young policeman with a boyish heart, promised me a top for my birthday. The news left me in a daze all day, imagining a magnificent top. Uncle\u2019s gift was indeed fine! Not hand-carved, but lathe-turned by a carpenter \u2014 round and smooth, like a duck\u2019s egg. Though not as grand as I\u2019d imagined, I was thrilled. Especially when I saw a large ball bearing already set in the bottom, I danced with joy, eager to show off on the street!",
        "The moment my top appeared, it drew mockery. Among all the handsome tops, it looked odd and unpromising. Yet the unpredictable happened: the owner of a big top arrogantly challenged me. His top swaggered forward, charging again and again; my \u2018egg\u2019 dodged coolly. At last they could not avoid each other and crashed head-on!",
        "Amazingly, my small top was incredibly tenacious! Knocked aside, it twisted right back into a spin. Its round shape seemed to find a balance point in every direction. The big top, facing this unbeatable opponent, suffered total defeat.",
        "What a glorious moment! I tasted victory and the sweetness of luck. This small, accidental \u2018honor\u2019 \u2014 tiny as a speck of dust \u2014 was enough to make a competitive child glow for a long time. It truly confirmed the old saying: never judge by appearances."
      ],
      recognizeChars: ["钉","兵","败","恨","帅","彻","溃","誉","丑","豪"],
      writeChars: ["否","旋","况","兵","败","椅","仍","尤","恨","帅","预","溃","品","丑","豪"],
      exercises: [
        {type:"read",cn:"默读课文，在你体会比较深的地方作批注",en:"Read silently and annotate passages that move you most"},
        {type:"discuss",cn:"读课文中描写\u201C我\u201D心情变化的句子，体会变化的过程：沮丧→期待→兴奋→被嘲笑→意外获胜→自豪",en:"Read the sentences about mood changes and trace the journey: dejection \u2192 anticipation \u2192 excitement \u2192 mockery \u2192 unexpected victory \u2192 pride"},
        {type:"discuss",cn:"\u201C人不可貌相，海水不可斗量\u201D，说说你对这句话的理解",en:"Explain your understanding of \u2018never judge by appearances\u2019"}
      ],
      teachingPoints: [
        {cn:"通过动作、语言、神态描写体会人物心情的变化过程",en:"Trace the character\u2019s emotional arc through descriptions of action, speech, and expression"},
        {cn:"理解\u201C人不可貌相\u201D的道理：不能以外表判断事物的价值",en:"Understand the lesson: never judge worth by outward appearance"}
      ],
      parentTips: [
        {cn:"和孩子分享小时候的类似经历，增进亲子沟通",en:"Share a similar childhood experience with your child to strengthen your bond"},
        {cn:"引导孩子体会：虽然陀螺故事很小，但蕴含人生哲理",en:"Help your child see that even a small story about a top can contain life wisdom"}
      ]
    }
  ],
  oralComm: {title:"安慰",titleEn:"Comforting Others",prompt:{cn:"如果你的朋友遇到了不顺心的事（如比赛失利、丢了心爱的东西、要搬家离开好朋友），你会怎样安慰他？选一种情况，和同学模拟练习",en:"If a friend faces setbacks (lost a race, lost a cherished item, moving away), how would you comfort them? Choose one scenario and role-play with classmates"}},
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"尺有所短，寸有所长。\n机不可失，时不再来。\n差之毫厘，谬以千里。\n病从口入，祸从口出。\n一言既出，驷马难追。\n比上不足，比下有余。",en:"A foot has its shortness; an inch has its length.\nOpportunity knocks but once; time waits for no one.\nAn error of a hair leads to a miss of a thousand miles.\nIllness enters through the mouth; disaster exits from the mouth.\nOnce a word is spoken, even four horses cannot retrieve it.\nNot as good as the best, yet better than the rest."}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"用动作描写来表现一种心情（害怕、生气、自豪、快乐、着急、伤心），选一个词语仿照例子写",en:"Use action descriptions to convey a mood (fear, anger, pride, joy, anxiety, sadness). Choose one and write following the model"}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"记一次游戏：写之前想想游戏前你作过哪些准备，游戏中印象比较深的是什么，游戏结束后你有什么感受",en:"Describe a Game: Think about your preparations, what impressed you most during the game, and how you felt afterward"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 7 — 课文 Texts (Lessons 21-24)       */
/*  Theme: 家国情怀 Patriotism & Ideals        */
/* ═══════════════════════════════════════════ */
{
  id: 7, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 21, title: "古诗三首", titleEn: "Three Ancient Poems",
      text: [
        "出塞\n[唐] 王昌龄\n秦时明月汉时关，\n万里长征人未还。\n但使龙城飞将在，\n不教胡马度阴山。",
        "凉州词\n[唐] 王翰\n葡萄美酒夜光杯，\n欲饮琵琶马上催。\n醉卧沙场君莫笑，\n古来征战几人回？",
        "夏日绝句\n[宋] 李清照\n生当作人杰，\n死亦为鬼雄。\n至今思项羽，\n不肯过江东。"
      ],
      textEn: [
        "Beyond the Border\nby Wang Changling (Tang)\nThe same moon of Qin, the same passes of Han;\nsoldiers marched a thousand miles and never came home.\nIf only the Flying General of Dragon City were here,\nhe would not let the barbarian horses cross Yin Mountain.",
        "Song of Liangzhou\nby Wang Han (Tang)\nFine grape wine in luminous jade cups \u2014\nwe would drink, but the lute on horseback urges us to march.\nDon\u2019t laugh if we lie drunk on the battlefield;\nsince ancient times, how many warriors have returned?",
        "A Summer Quatrain\nby Li Qingzhao (Song)\nIn life, be an outstanding person;\nin death, be a heroic spirit.\nEven now we think of Xiang Yu,\nwho refused to cross the river east."
      ],
      recognizeChars: ["塞","秦","征","将","杰"],
      writeChars: ["塞","秦","征","词","催","醉","杰","亦","雄","项"],
      exercises: [
        {type:"read",cn:"有感情地朗读课文。背诵课文。默写《出塞》《夏日绝句》",en:"Read expressively. Recite all poems. Write \u2018Beyond the Border\u2019 and \u2018A Summer Quatrain\u2019 from memory"},
        {type:"discuss",cn:"结合注释，说说\u201C但使龙城飞将在，不教胡马度阴山\u201D\u201C醉卧沙场君莫笑，古来征战几人回\u201D\u201C生当作人杰，死亦为鬼雄\u201D的意思，你从中体会到了什么",en:"Using the notes, explain these famous lines and share what you understand from them"},
        {type:"write",cn:"选择一首诗，说说它表达了怎样的情感",en:"Choose one poem and describe the emotion it conveys"}
      ],
      teachingPoints: [
        {cn:"理解三首诗不同的家国情怀：保家卫国的豪情、战争的悲壮、做人的气节",en:"Understand three different patriotic sentiments: defending the homeland, war\u2019s tragedy, personal integrity"},
        {cn:"了解边塞诗的特点：雄浑壮阔，表达对战争与和平的思考",en:"Learn about frontier poetry: grand and expansive, reflecting on war and peace"}
      ],
      parentTips: [
        {cn:"帮助孩子了解诗歌的历史背景（边塞诗人、项羽的故事等）",en:"Help your child learn the historical background (frontier poets, the story of Xiang Yu, etc.)"},
        {cn:"引导孩子思考\u201C人杰\u201D\u201C鬼雄\u201D的含义，树立正确的价值观",en:"Guide reflection on what it means to be \u2018outstanding in life and heroic in death\u2019 \u2014 build strong values"}
      ]
    },
    {
      id: 22, title: "为中华之崛起而读书", titleEn: "Study for China\u2019s Rise",
      text: [
        "新学年开始了，修身课上，奉天东关模范学校的魏校长向学生们提出了一个严肃的问题：\u201C你们为什么而读书？\u201D\u201C为家父而读书。\u201D\u201C为明理而读书。\u201D\u201C为光耀门楣而读书。\u201D有人干脆这样回答。",
        "有位同学一直默默地坐在那里，若有所思。魏校长注意到了，他打手势让大家安静下来，点名让那位同学回答。那位同学站了起来，清晰而坚定地回答道：\u201C为中华之崛起而读书！\u201D",
        "魏校长听了为之一振！他怎么也没想到，一个十二三岁的孩子，竟然有如此的抱负和胸怀！他睁大眼睛又追问了一句：\u201C你再说一遍，为什么而读书？\u201D\u201C为中华之崛起而读书！\u201D魏校长听了，连声赞叹：\u201C好哇！为中华之崛起，有志者当效此生！\u201D这位同学是谁呢？他就是周恩来，后来成为了中华人民共和国的第一任总理。",
        "周恩来出生于1898年。十二岁那年，他离开家乡江苏淮安，随回家探亲的伯父来到了东北。在奉天上学的时候，伯父告诉他，奉天有些地方被外国人占据了，不要随便去玩，有事也要绕着走，免得惹出麻烦没有地方说理。少年周恩来疑惑不解，问道：\u201C被外国人占据？为什么呢？\u201D\u201C中华不振哪！\u201D伯父叹了口气，没有再说什么。",
        "十二岁的周恩来当然不能完全明白伯父的话，但是\u201C中华不振\u201D四个字和伯父沉郁的表情却让他难以忘怀。一个星期天，周恩来背着伯父，约了一个同学来到了被外国人占据的地方。这一带果真和别处大不相同：街道上热闹非凡，往来的大多是外国人。",
        "周恩来和同学一路上左顾右盼，忽然发现巡警局门前围着一群人。他们凑了过去，只见人群中有个女人正在哭诉着什么。一问才知道，这个女人的亲人被外国人的汽车轧死了，她原本指望巡警局给她撑腰，惩处这个外国人，谁知中国巡警不但不惩处肇事的外国人，反而训斥她。围观的中国人都紧握着拳头，但这是在被外国人占据的地盘里，谁又敢怎么样呢？",
        "此时的周恩来才真正体会到\u201C中华不振\u201D这四个字的沉重分量。怎么把祖国和人民从苦难和屈辱中拯救出来呢？这个问题像一团烈火一直燃烧在周恩来心中。所以，当修身课上魏校长提出为什么而读书这个问题时，就有了\u201C为中华之崛起而读书\u201D的响亮回答。"
      ],
      textEn: [
        "A new school year began. During a moral-cultivation class, Principal Wei at the Fengtian Dongguan Model School posed a solemn question: \u201CWhy do you study?\u201D \u201CFor my father.\u201D \u201CTo understand principles.\u201D \u201CTo bring glory to the family.\u201D came various answers.",
        "One student sat silently, deep in thought. Principal Wei noticed and called on him. The student stood and answered, clearly and firmly: \u201CTo study for the rise of China!\u201D",
        "Principal Wei was electrified! He never expected such ambition from a twelve-year-old. \u201CSay it again \u2014 why do you study?\u201D \u201CTo study for the rise of China!\u201D The principal exclaimed: \u201CWonderful! All who have aspirations should follow this boy!\u201D That student was Zhou Enlai, who would become the first Premier of the People\u2019s Republic of China.",
        "Zhou Enlai was born in 1898. At twelve, he left his hometown Huai\u2019an in Jiangsu and came to the northeast with his uncle. His uncle warned him that parts of Fengtian were controlled by foreigners \u2014 stay away, or trouble would find him with no one to help. Puzzled, young Zhou asked: \u201CControlled by foreigners? Why?\u201D \u201CBecause China is weak!\u201D his uncle sighed.",
        "The twelve-year-old could not fully grasp these words, but \u2018China is weak\u2019 and his uncle\u2019s somber expression left a lasting mark. One Sunday, Zhou secretly visited the foreign-controlled area with a classmate. The streets were strikingly different \u2014 bustling, mostly with foreigners.",
        "Zhou noticed a crowd at the police station. A woman was weeping \u2014 her relative had been killed by a foreigner\u2019s car. She had hoped the police would bring the foreigner to justice, but instead the Chinese police scolded her. Onlookers clenched their fists, but in foreign-controlled territory, who dared protest?",
        "Now Zhou truly felt the weight of \u2018China is weak.\u2019 How could the motherland and its people be rescued from suffering and humiliation? This question burned like fire in his heart. So when Principal Wei asked why they studied, Zhou\u2019s resounding answer was: \u2018To study for the rise of China!\u2019"
      ],
      recognizeChars: ["崛","范","魏","晰","效","淮","惑","惩","斥"],
      writeChars: ["肃","晰","振","胸","怀","赞","效","凡","顾","训","斥"],
      exercises: [
        {type:"read",cn:"默读课文，想想课文讲了哪几件事，再连起来说说课文的主要内容",en:"Read silently, identify the separate events, and summarize the main content"},
        {type:"discuss",cn:"课文多次出现\u201C中华不振\u201D这个词语，查阅资料了解当时的社会状况，理解周恩来立下如此志向的原因",en:"The phrase \u2018China is weak\u2019 appears repeatedly. Research the era\u2019s conditions and understand why Zhou set such an ambition"},
        {type:"write",cn:"如果有人问你为什么而读书，你的回答是什么？想一想，写下来，注意写清楚理由",en:"If someone asked why you study, what would you say? Write your answer with clear reasons"}
      ],
      teachingPoints: [
        {cn:"理解文章写了三件事：听伯父叹息、亲见\u201C中华不振\u201D、立志读书，学习把几件事连起来把握主要内容",en:"The text tells three events: hearing uncle\u2019s sigh, witnessing \u2018China\u2019s weakness,\u2019 vowing to study \u2014 learn to connect events for main content"},
        {cn:"感受少年周恩来的远大志向和强烈的爱国情怀",en:"Feel young Zhou Enlai\u2019s grand ambition and intense patriotism"}
      ],
      parentTips: [
        {cn:"和孩子讨论\u201C为什么读书\u201D，引导孩子树立远大理想",en:"Discuss \u2018why we study\u2019 with your child and guide them toward big aspirations"},
        {cn:"可以给孩子讲讲周恩来总理的其他故事，培养爱国主义精神",en:"Share more stories about Premier Zhou Enlai to nurture patriotism"}
      ]
    },
    {
      id: 23, title: "梅兰芳蓄须", titleEn: "Mei Lanfang Grows a Beard",
      isSelfRead: true,
      text: [
        "梅兰芳先生是闻名世界的京剧表演艺术家。他在舞台上唱旦角，为了演出的需要，总是把胡须剃得干干净净的。但他的一生中，有几年却是留着胡须的。",
        "1937年，日军占领上海，梅兰芳被迫藏身租界。1938年底，有人邀请他去香港演戏。演出结束后，梅兰芳在香港住了下来，深居简出，不再登台。对于一个视舞台为生活、视艺术为生命的人来说，不能演出，不能创作，无异于虚度生命。到了深夜，梅兰芳关紧门窗，拉上特制的厚窗帘，才能在寓所悄悄地细声吟唱。",
        "1941年12月香港沦陷。日本驻港司令官亲自出马，多次逼迫梅兰芳演戏。梅兰芳可以忍受生活的困顿，直面战争的危险，但他难以抵抗来自侵略者随时随地的骚扰。拒绝的借口都用尽了，梅兰芳最后只能蓄须明志，表示对日本帝国主义的抗议，表明不给侵略者演戏的决心。",
        "长期不演戏，没有了经济来源，又要养家，梅兰芳准备卖掉北京的房子。很多戏园子老板找上门来说：\u201C梅先生，您何必卖房子，只要您把胡子一剃，一登台，还愁没钱花？\u201D但是，无论条件多么优厚，梅兰芳全部拒绝了。他宁可卖房度日，也决不在日本侵略者的统治下登台演出。",
        "一次，日本侵略军要庆祝\u201C大东亚圣战\u201D，要求他必须上台演出。梅兰芳斩钉截铁地说：\u201C普通的演出我都不参加，这样的庆祝会当然更不会去了。\u201D梅兰芳找到一位当医生的好朋友，请朋友给他打了伤寒预防针，使自己连日发高烧。日本军医来检查，看到他滚烫的额头，只好认定他得了重病。",
        "当抗日战争取得胜利的消息传来时，梅兰芳当即剃了胡须，高兴地向大家宣布：\u201C胜利了，我该登台演出了！\u201D前来看他演出的人太多了，很多人没有座位就站着看。作为艺术家，梅兰芳先生高超的表演艺术让人喜爱，他的民族气节更令人敬佩！"
      ],
      textEn: [
        "Mei Lanfang was a world-renowned Peking opera artist. On stage he played female roles and always kept his face clean-shaven. Yet for several years of his life, he wore a beard.",
        "In 1937, Japan occupied Shanghai and Mei Lanfang hid in the foreign concession. In late 1938, he went to Hong Kong for performances and stayed on, living quietly and never performing again. For someone who lived for the stage and art, the inability to perform was like wasting one\u2019s life. Late at night, behind tightly shut windows and thick curtains, he would softly practice his singing.",
        "In December 1941, Hong Kong fell. The Japanese commander personally pressed Mei Lanfang to perform. He could endure hardship and face danger, but the relentless harassment wore him down. With all excuses exhausted, Mei Lanfang finally grew a beard as a statement \u2014 a protest against Japanese imperialism and a declaration that he would never perform for the invaders.",
        "Without performing, he had no income and needed to support his family. He prepared to sell his Beijing house. Theater owners urged: \u201CJust shave and perform \u2014 why sell your home?\u201D But he rejected all offers, choosing poverty over performing under Japanese rule.",
        "When the Japanese demanded he perform at a \u2018Greater East Asia\u2019 celebration, Mei Lanfang said adamantly: \u201CI don\u2019t even do ordinary shows; I certainly won\u2019t attend such a celebration.\u201D He asked a doctor friend to give him a typhoid vaccine, causing a genuine high fever. The Japanese military doctor, feeling his burning forehead, had to accept he was seriously ill.",
        "When news of victory over Japan came, Mei Lanfang immediately shaved his beard and announced joyfully: \u201CVictory! It\u2019s time to perform again!\u201D The audiences were so enormous that many stood throughout. As an artist, Mei Lanfang\u2019s superb skill won admiration; his national integrity won even greater respect!"
      ],
      recognizeChars: ["蓄","迫","租","纠","缠","邀","扰","拒","签","订","宁","要","妄"],
      writeChars: [],
      exercises: [
        {type:"read",cn:"默读课文，说说梅兰芳用了哪些办法拒绝为日本人演戏，在这个过程中经历了哪些危险和困难",en:"Read silently and list the methods Mei Lanfang used to refuse performing for Japan, and the dangers he faced"},
        {type:"discuss",cn:"你从梅兰芳身上感受到了什么精神？",en:"What spirit do you sense in Mei Lanfang?"}
      ],
      teachingPoints: [
        {cn:"理解\u201C蓄须明志\u201D的含义：以行动表明爱国立场",en:"Understand \u2018growing a beard to declare one\u2019s will\u2019: showing patriotism through action"},
        {cn:"学习关注主要人物和事件，把握文章的主要内容",en:"Learn to focus on the main character and events to grasp the article\u2019s main content"}
      ],
      parentTips: [
        {cn:"给孩子介绍梅兰芳的京剧艺术成就，拓展传统文化知识",en:"Introduce Mei Lanfang\u2019s Peking opera achievements to expand knowledge of traditional culture"},
        {cn:"讨论\u201C民族气节\u201D的含义，培养孩子的爱国精神",en:"Discuss the meaning of \u2018national integrity\u2019 and foster patriotism"}
      ]
    },
    {
      id: 24, title: "延安，我把你追寻", titleEn: "Yan\u2019an, I Pursue You",
      isSelfRead: true,
      text: [
        "像翩翩归来的燕子，\n在追寻昔日的春光；\n像茁壮成长的小树，\n在追寻雨露和太阳。",
        "追寻你，延河叮咚的流水，\n追寻你，枣园梨花的清香，\n追寻你，南泥湾开荒的镢头，\n追寻你，杨家岭讲话的会场。",
        "一排排高楼大厦像雨后春笋，\n一件件家用电器满目琳琅；\n我们永远告别了破旧的茅屋，\n却忘不了延安窑洞温热的土炕。",
        "宇宙飞船探索太空的奥秘，\n电子计算机奏出美妙的交响；\n我们毫不犹豫丢掉了老牛破车，\n却不能丢宝塔山顶天立地的脊梁。",
        "延安，你的精神灿烂辉煌！\n一旦失去了你啊，\n那就仿佛没有了灵魂，\n怎能向美好的未来展翅飞翔？",
        "啊！延安，我把你追寻，\n追寻信念，追寻金色的理想；\n追寻温暖，追寻明媚的春光；\n追寻光明，追寻火红的太阳！"
      ],
      textEn: [
        "Like swallows gracefully returning,\npursuing the springtime of old;\nlike saplings growing strong,\npursuing rain and sun.",
        "I pursue you, the murmuring Yan River;\nI pursue you, the pear-blossom fragrance of Zaoyuan;\nI pursue you, the hoes breaking ground at Nanniwan;\nI pursue you, the lecture hall of Yangjialing.",
        "Rows of skyscrapers rise like bamboo after rain;\nhousehold appliances dazzle the eye.\nWe have left behind tumbledown thatched huts,\nbut never forget the warm earthen kang of Yan\u2019an\u2019s cave dwellings.",
        "Spaceships probe the mysteries of the cosmos;\ncomputers play wonderful symphonies.\nWe tossed away the old ox and broken cart without hesitation,\nbut cannot discard the towering backbone of Pagoda Hill.",
        "Yan\u2019an, your spirit shines brilliantly!\nIf we ever lost you,\nit would be as if we lost our soul \u2014\nhow could we soar toward a beautiful future?",
        "Ah, Yan\u2019an, I pursue you!\nPursuing faith, pursuing golden ideals;\npursuing warmth, pursuing radiant spring;\npursuing light, pursuing the blazing red sun!"
      ],
      recognizeChars: ["延","昔","茅","炕","旦","媚"],
      writeChars: [],
      exercises: [
        {type:"read",cn:"有感情地朗读这首诗。想一想：诗中多次提到\u201C追寻\u201D，是在追寻什么？",en:"Read the poem expressively. Think: what is being \u2018pursued\u2019 through the repeated word?"},
        {type:"discuss",cn:"如果有不懂的内容，如\u201C南泥湾开荒\u201D\u201C杨家岭讲话\u201D，可以查找相关资料帮助理解",en:"If unfamiliar with \u2018Nanniwan reclamation\u2019 or \u2018Yangjialing speeches,\u2019 research them for better understanding"}
      ],
      teachingPoints: [
        {cn:"理解诗歌中\u201C追寻\u201D的深层含义：追寻延安精神——自力更生、艰苦奋斗的革命传统",en:"Understand the deeper meaning of \u2018pursuing\u2019: the Yan\u2019an spirit of self-reliance and hard struggle"},
        {cn:"体会诗歌中新旧对比的写法：现代文明与革命传统并不矛盾",en:"Appreciate the contrast technique: modern civilization and revolutionary tradition are complementary"}
      ],
      parentTips: [
        {cn:"帮助孩子了解延安的历史意义，查阅相关图片和资料",en:"Help your child learn about Yan\u2019an\u2019s historical significance with photos and resources"},
        {cn:"引导孩子理解：物质进步了，精神传统不能丢",en:"Guide understanding: even as material life improves, spiritual traditions must endure"}
      ]
    }
  ],
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"别董大\n[唐] 高适\n千里黄云白日曛，\n北风吹雁雪纷纷。\n莫愁前路无知己，\n天下谁人不识君？",en:"Farewell to Dong Da\nby Gao Shi (Tang)\nYellow clouds stretch a thousand miles, dimming the sun;\nnorth wind drives the geese through swirling snow.\nDo not worry that ahead no friend awaits \u2014\nunder heaven, who does not know you?"}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"读一读，想想这些词语一般用来形容哪些人：志存高远、精忠报国、大义凛然、英勇无畏、视死如归、铁面无私、秉公执法、刚正不阿",en:"Think about who these words typically describe: lofty ambitions, loyal patriotism, righteous and fearless, heroic and undaunted, facing death unflinchingly, impartial, upholding justice, upright and unyielding"}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"写信：给你的亲友或者其他人写一封信，可以通过邮局寄给对方，也可以通过电子邮件发给对方",en:"Write a Letter: Write a letter to a relative, friend, or someone else. You can mail it or send it by email"}}
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 8 — 课文 Texts (Lessons 25-27)       */
/*  Theme: 历史智慧 Historical Wisdom          */
/* ═══════════════════════════════════════════ */
{
  id: 8, title: "课文", titleEn: "Texts",
  type: "kewen",
  lessons: [
    {
      id: 25, title: "王戎不取道旁李", titleEn: "Wang Rong Doesn\u2019t Pick Roadside Plums",
      text: [
        "王戎七岁，尝与诸小儿游。看道边李树多子折枝，诸儿竞走取之，唯戎不动。人问之，答曰：\u201C树在道边而多子，此必苦李。\u201D取之，信然。"
      ],
      textEn: [
        "When Wang Rong was seven, he once played with other children. They saw a plum tree by the road, its branches bending under a heavy load of fruit. The other children raced to pick the plums; only Wang Rong did not move. When asked why, he replied: \u201CThe tree stands by the road yet is laden with fruit \u2014 these must be bitter plums.\u201D They tasted them, and indeed it was so."
      ],
      recognizeChars: ["戎","诸","竞","唯"],
      writeChars: ["戎","尝","诸","竞","唯"],
      exercises: [
        {type:"read",cn:"正确、流利地朗读课文。背诵课文",en:"Read correctly and fluently. Recite the text"},
        {type:"discuss",cn:"结合注释，用自己的话讲讲这个故事",en:"Using the annotations, retell this story in your own words"},
        {type:"discuss",cn:"说说为什么\u201C树在道边而多子，此必苦李\u201D",en:"Explain why \u2018a tree by the road laden with fruit must have bitter plums\u2019"}
      ],
      teachingPoints: [
        {cn:"这是一篇文言文（选自《世说新语·雅量》）。理解关键字词：\u201C尝\u201D（曾经）、\u201C竞走\u201D（争着跑）、\u201C唯\u201D（只有）、\u201C信然\u201D（的确如此）",en:"This is classical Chinese (from \u2018A New Account of Tales of the World\u2019). Key terms: \u2018once,\u2019 \u2018raced,\u2019 \u2018only,\u2019 \u2018indeed so\u2019"},
        {cn:"学习王戎善于观察、善于推理的品质",en:"Learn from Wang Rong\u2019s keen observation and logical reasoning"},
        {cn:"理解王戎的推理过程：路边→人人可摘→果实多→无人摘说明一定是苦的",en:"Understand the reasoning: by the road, accessible to all, yet full of fruit \u2014 no one picks them, so they must be bitter"}
      ],
      parentTips: [
        {cn:"帮助孩子逐字理解文言文，培养文言文阅读能力",en:"Help your child understand each character to build classical Chinese reading skills"},
        {cn:"鼓励孩子在生活中学习王戎的思维方式：观察现象、分析原因",en:"Encourage your child to think like Wang Rong: observe phenomena and analyze causes"}
      ]
    },
    {
      id: 26, title: "西门豹治邺", titleEn: "Ximen Bao Governs Ye",
      text: [
        "战国时期，魏国的国君派西门豹去管理漳河边上的邺县。西门豹到了那个地方，看到田地荒芜，人烟稀少，就找了位老大爷来，问他是怎么回事。",
        "老大爷说：\u201C都是河神娶媳妇给闹的。河神是漳河的神，每年要娶一个年轻漂亮的姑娘。要不给他送去，漳河就要发大水，把田地全淹了。\u201D西门豹问：\u201C这话是谁说的？\u201D老大爷说：\u201C巫婆说的。地方上的官绅每年出面给河神办喜事，硬逼着老百姓出钱。每闹一次，他们要收几百万钱，办喜事只花二三十万，多下来的就跟巫婆分了。\u201D",
        "西门豹问：\u201C新娘是哪儿来的？\u201D老大爷说：\u201C哪家有年轻的女孩，巫婆就带着人到哪家去选。有钱的人家花点儿钱就过去了，没钱的只好眼睁睁地看着女孩被他们拉走。有女孩的人家差不多都逃到外地去了，所以人口越来越少，这地方也越来越穷。\u201D西门豹问：\u201C那么漳河发过大水没有呢？\u201D老大爷说：\u201C没有发过。倒是夏天雨水少，年年干旱。\u201D西门豹说：\u201C这样说来，河神还真灵啊。下一回他娶媳妇，请告诉我一声，我也去送送新娘。\u201D",
        "到了河神娶媳妇的日子，漳河边上站满了老百姓。西门豹带着卫士，真的来了，巫婆和官绅急忙迎接。西门豹说：\u201C把新娘领来让我看看。\u201D巫婆叫徒弟把那个打扮好的姑娘领了来。西门豹一看，女孩满脸泪水。他回过头来对巫婆说：\u201C不行，这个姑娘不漂亮，河神不会满意的。麻烦你去跟河神说一声，说我要选个漂亮的，过几天就送去。\u201D说完，他叫卫士架起巫婆，把她投进了漳河。",
        "巫婆在河里扑腾了几下就沉下去了。等了一会儿，西门豹对官绅的头子说：\u201C巫婆怎么还不回来，麻烦你去催一催吧。\u201D说完，又叫卫士把官绅的头子投进了漳河。西门豹面对着漳河站了很久。那些官绅都提心吊胆，大气也不敢出。西门豹回过头来，看着他们说：\u201C怎么还不回来，请你们去催催吧！\u201D说着又要叫卫士把他们扔下漳河去。",
        "官绅一个个吓得面如土色，跪下来磕头求饶，把头都磕破了，直淌血。西门豹说：\u201C好吧，再等一会儿。\u201D过了一会儿，他才说：\u201C起来吧。看样子是河神把他们留下了。你们都回去吧。\u201D",
        "老百姓都明白了，巫婆和官绅都是骗钱害人的。从此，谁也不敢再提给河神娶媳妇，漳河也没有发大水。西门豹发动老百姓开凿了十二条渠道，把漳河的水引到田里。庄稼得到灌溉，年年都获得好收成。"
      ],
      textEn: [
        "During the Warring States period, the King of Wei sent Ximen Bao to govern Ye County on the Zhang River. Ximen Bao found the fields barren and the population sparse. He asked an old man what had happened.",
        "The old man explained: \u201CIt\u2019s all because of the River God\u2019s \u2018wedding.\u2019 Every year he demands a beautiful young bride. If she isn\u2019t sent, the river floods. The local witch and officials collect millions in cash, spend a fraction on the \u2018wedding,\u2019 and split the rest.\u201D",
        "Ximen Bao asked more. Families with daughters fled, depopulating the area. Yet the river had never actually flooded \u2014 in fact, summer droughts came every year. Ximen Bao said: \u201CHow effective this River God is! Next time he takes a bride, please let me know \u2014 I\u2019d like to see her off myself.\u201D",
        "On the appointed day, the riverbank was crowded. Ximen Bao arrived with guards. He inspected the \u2018bride\u2019 \u2014 a weeping girl. He told the witch: \u201CShe\u2019s not pretty enough. The River God won\u2019t be pleased. Go tell him I\u2019ll send a lovelier one in a few days.\u201D His guards seized the witch and threw her into the river.",
        "After she sank, Ximen Bao told the chief official to go hurry her along, and threw him in too. He then stood gazing at the river for a long time. The remaining officials trembled in terror. Ximen Bao turned: \u201CStill no answer? Perhaps you should go urge them.\u201D",
        "The officials turned ashen, fell to their knees, and kowtowed until their foreheads bled. Ximen Bao waited, then said: \u201CGet up. The River God must have kept them. Go home.\u201D",
        "The people understood at last: the witch and officials were swindlers. No one dared mention the River God\u2019s \u2018wedding\u2019 again. Ximen Bao organized the digging of twelve irrigation channels from the Zhang River, and crops received water every year, yielding good harvests."
      ],
      recognizeChars: ["豹","娶","媳","巫","绅","旱","徒","吊","磕","凿","溉"],
      writeChars: ["豹","派","娶","媳","妇","淹","逼","浮","旱","徒","扔","饶","骗","灌","溉"],
      exercises: [
        {type:"read",cn:"默读课文，根据课文内容填空（摸清底细→惩治巫婆和官绅→兴修水利），并简要复述课文",en:"Read silently, fill in the blanks for the three-part structure, and briefly retell the story"},
        {type:"discuss",cn:"找出第10～14自然段中描写西门豹言行的句子，说说西门豹惩治巫婆和官绅的办法好在哪里",en:"Find sentences about Ximen Bao\u2019s words and actions in paragraphs 10\u201314 and discuss why his method was clever"},
        {type:"write",cn:"在老师的指导下，试着根据剧本开头改编课文，并演一演这个故事",en:"With teacher guidance, try adapting the text into a play script and act it out"}
      ],
      teachingPoints: [
        {cn:"理解西门豹\u201C以其人之道还治其人之身\u201D的巧妙策略",en:"Understand Ximen Bao\u2019s clever strategy of \u2018using their own methods against them\u2019"},
        {cn:"学习简要复述课文：抓住主要内容，按事情发展顺序讲",en:"Learn to briefly retell: grasp the main content and follow the order of events"}
      ],
      parentTips: [
        {cn:"和孩子讨论西门豹的智慧：不用暴力，而是用巧妙的方法揭露骗局",en:"Discuss Ximen Bao\u2019s wisdom: exposing fraud through clever means rather than brute force"},
        {cn:"鼓励孩子尝试复述课文，锻炼口头表达能力",en:"Encourage retelling the story to practice oral expression skills"}
      ]
    },
    {
      id: 27, title: "故事二则", titleEn: "Two Stories",
      isSelfRead: true,
      text: [
        "扁鹊治病\n\n有一天，名医扁鹊去拜见蔡桓侯。扁鹊在蔡桓侯身边站了一会儿，说：\u201C据我看来，您皮肤上有点儿小病。要是不治，恐怕会向体内发展。\u201D蔡桓侯说：\u201C我的身体很好，什么病也没有。\u201D扁鹊走后，蔡桓侯对左右的人说：\u201C这些做医生的，总喜欢给没有病的人治病。医治没有病的人，才容易显示自己的高明！\u201D",
        "过了十天，扁鹊又来拜见蔡桓侯，说道：\u201C您的病已经发展到皮肉之间了，要是不治还会加深。\u201D蔡桓侯听了很不高兴，没有理睬他。扁鹊只好退了出去。",
        "十天后，扁鹊再一次来拜见，对蔡桓侯说：\u201C您的病已经发展到肠胃里，再不治会更加严重。\u201D蔡桓侯听了非常不高兴。扁鹊连忙退了出去。",
        "又过了十天，扁鹊老远望见蔡桓侯，只看了几眼，就掉头跑了。蔡桓侯觉得奇怪，派人去问他。扁鹊解释道：\u201C病在皮肤上，用热敷就能够治好；发展到皮肉之间，用扎针的方法可以治好；即使发展到肠胃里，服几剂汤药也还能治好；一旦深入骨髓，只能等死，医生再也无能为力了。现在病已经深入骨髓，所以我不再请求给他医治！\u201D五天之后，蔡桓侯浑身疼痛，派人去请扁鹊给他治病。扁鹊早知道蔡桓侯要来请他，几天前就跑到秦国去了。不久，蔡桓侯病死了。",
        "纪昌学射\n\n飞卫是一名射箭能手。有个叫纪昌的人，想学习射箭，就去向飞卫请教。开始练习的时候，飞卫对纪昌说：\u201C你要想学会射箭，首先应该下功夫练眼力。你要牢牢地盯住一个目标，不能眨眼！\u201D纪昌回家之后，就开始练习起来。妻子织布的时候，他躺在织布机下面，睁大眼睛，死死盯住织布机的踏板。两年以后，纪昌的本领练得相当到家了——就是锋利的锥尖要刺到眼角了，他的眼睛也不眨一下。",
        "纪昌对自己的成绩感到很满意，以为练得差不多了，就再次去拜见飞卫。飞卫对他说：\u201C虽然你已经取得了不小的成绩，但你的眼力还不够。你要练到把极小的东西看得很大，把模糊难辨的东西看得很清楚，那时候再来见我。\u201D纪昌记住了飞卫的话，回到家里，又开始练习起来。他用一根牛尾毛拴住一只虱子，把它吊在窗口，然后每天站在虱子旁边，聚精会神地盯着它。那只小虱子，在纪昌的眼里一天天大起来，练到后来，大得竟然像车轮一样。",
        "取得了这样大的进步，纪昌赶紧跑到飞卫那里，报告了这个好消息。飞卫高兴地说：\u201C你就要成功了！\u201D于是，飞卫开始教他怎样开弓，怎样放箭。后来，纪昌成了百发百中的射箭能手。"
      ],
      textEn: [
        "Bian Que Treats a Patient\n\nOne day, the famous doctor Bian Que visited Lord Huan of Cai. After standing beside him briefly, Bian Que said: \u201CI can see a slight ailment on your skin. If left untreated, it may spread inward.\u201D Lord Huan said: \u201CI am perfectly well.\u201D After Bian Que left, Lord Huan scoffed: \u201CDoctors love to treat people who aren\u2019t sick \u2014 it makes them look clever!\u201D",
        "Ten days later, Bian Que returned: \u201CYour illness has reached the flesh. Without treatment, it will worsen.\u201D Lord Huan was displeased and ignored him.",
        "Ten more days passed. Bian Que warned: \u201CThe disease has reached your stomach and intestines.\u201D Lord Huan was very annoyed. Bian Que hurried away.",
        "Another ten days later, Bian Que merely glanced at Lord Huan from afar and ran. Puzzled, Lord Huan sent someone to ask why. Bian Que explained: \u201COn the skin, a warm compress cures it; in the flesh, acupuncture works; in the stomach, medicine still helps; but once it enters the marrow, even a doctor is powerless. The disease is now in the marrow \u2014 I can do nothing.\u201D Five days later, Lord Huan fell gravely ill and sent for Bian Que, who had already fled to Qin. Soon after, Lord Huan died.",
        "Ji Chang Learns Archery\n\nFei Wei was a master archer. Ji Chang wanted to learn and sought his instruction. Fei Wei said: \u201CFirst, train your eyes. Stare at a target without blinking!\u201D Ji Chang lay under his wife\u2019s loom and stared at the treadle. After two years, even a needle point near his eye wouldn\u2019t make him blink.",
        "Satisfied, Ji Chang returned. Fei Wei said: \u201CGood, but not enough. You must learn to see the tiny as large and the blurry as clear.\u201D Ji Chang tied a louse to a strand of ox hair, hung it in the window, and stared at it day after day. The louse grew larger and larger in his eyes, until it appeared as big as a cartwheel.",
        "Ji Chang reported his progress. Fei Wei joyfully said: \u201CYou\u2019re about to succeed!\u201D He then taught Ji Chang how to draw the bow and release the arrow. Ji Chang became an archer who never missed."
      ],
      recognizeChars: ["拜","侯","肤","扎","剂","髓","纪","标"],
      writeChars: [],
      exercises: [
        {type:"read",cn:"默读课文，找出课文中表示故事发展先后顺序的词句，简要复述这两个故事",en:"Read silently, find words indicating chronological order, and briefly retell both stories"},
        {type:"discuss",cn:"说说你从这两个故事中明白的道理",en:"Share the lessons you learned from these two stories"}
      ],
      teachingPoints: [
        {cn:"从《扁鹊治病》中学到：要善于听取别人的意见，有病要及时治疗，不能讳疾忌医",en:"From Bian Que: listen to advice, treat problems early, don\u2019t avoid diagnosis out of pride"},
        {cn:"从《纪昌学射》中学到：学习任何技能都要打好基本功，循序渐进",en:"From Ji Chang: master the fundamentals of any skill and progress step by step"},
        {cn:"学习找出表示先后顺序的词句来帮助复述课文",en:"Learn to identify sequence markers to aid in retelling"}
      ],
      parentTips: [
        {cn:"和孩子讨论\u201C讳疾忌医\u201D在生活中的应用：发现问题要及时面对",en:"Discuss how \u2018avoiding the doctor out of fear\u2019 applies to life: face problems promptly"},
        {cn:"鼓励孩子在学习中像纪昌一样打好基本功，不急于求成",en:"Encourage your child to build solid foundations like Ji Chang, not rushing for quick results"}
      ]
    }
  ],
  oralComm: {title:"讲历史人物故事",titleEn:"Tell Historical Figure Stories",prompt:{cn:"选择一个你最喜欢的历史人物故事，讲给同学听。讲之前好好读一读这个故事，可以把重要信息写在小卡片上帮助记忆",en:"Choose your favorite historical figure story and tell it to classmates. Read it well first; write key information on cards to help you remember"}},
  garden: {
    accumulation: {title:"日积月累",titleEn:"Accumulation",content:{cn:"眉清目秀　亭亭玉立　明眸皓齿　文质彬彬\n相貌堂堂　威风凛凛　膀大腰圆　短小精悍\n容光焕发　鹤发童颜　慈眉善目　老态龙钟",en:"Bright eyes and fair brows; slender and graceful; luminous eyes and white teeth; refined and gentle.\nNoble-featured; majestic and imposing; broad-shouldered; small but formidable.\nRadiant; white-haired with a youthful face; kind-browed and gentle-eyed; tottering with age."}},
    wordSentence: {title:"词句段运用",titleEn:"Word & Sentence Practice",content:{cn:"体会两个句子在表达上的不同：详细描写与简要概括。如\u201C官绅一个个吓得面如土色，跪下来磕头求饶，把头都磕破了，直淌血\u201D与\u201C官绅跪地求饶\u201D",en:"Compare detailed description vs. brief summary. E.g. \u2018The officials turned ashen, knelt and kowtowed until their foreheads bled\u2019 vs. \u2018The officials knelt and begged.\u2019"}},
    composition: {title:"习作",titleEn:"Composition",prompt:{cn:"我的心儿怦怦跳：选一件令你心儿怦怦跳的事情写下来，写清楚事情的经过和当时的感受",en:"My Heart Was Pounding: Choose an event that made your heart pound. Write clearly about what happened and how you felt"}}
  }
}
]};
