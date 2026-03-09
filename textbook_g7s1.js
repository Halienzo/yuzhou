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
            "盼望着，盼望着，东风来了，春天的脚步近了。",
            "一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水涨起来了，太阳的脸红起来了。",
            "小草偷偷地从土里钻出来，嫩嫩的，绿绿的。园子里，田野里，瞧去，一大片一大片满是的。坐着，躺着，打两个滚，踢几脚球，赛几趟跑，捉几回迷藏。风轻悄悄的，草软绵绵的。",
            "桃树、杏树、梨树，你不让我，我不让你，都开满了花赶趟儿。红的像火，粉的像霞，白的像雪。花里带着甜味儿；闭了眼，树上仿佛已经满是桃儿、杏儿、梨儿。花下成千成百的蜜蜂嗡嗡地闹着，大小的蝴蝶飞来飞去。野花遍地是：杂样儿，有名字的，没名字的，散在草丛里，像眼睛，像星星，还眨呀眨的。",
            "\u201C吹面不寒杨柳风\u201D，不错的，像母亲的手抚摸着你。风里带来些新翻的泥土的气息，混着青草味儿，还有各种花的香，都在微微润湿的空气里酝酿。鸟儿将窠巢安在繁花嫩叶当中，高兴起来了，呼朋引伴地卖弄清脆的喉咙，唱出宛转的曲子，与轻风流水应和着。牛背上牧童的短笛，这时候也成天在嘹亮地响。",
            "雨是最寻常的，一下就是三两天。可别恼。看，像牛毛，像花针，像细丝，密密地斜织着，人家屋顶上全笼着一层薄烟。树叶子却绿得发亮，小草也青得逼你的眼。傍晚时候，上灯了，一点点黄晕的光，烘托出一片安静而和平的夜。乡下去，小路上，石桥边，有撑起伞慢慢走着的人；还有地里工作的农夫，披着蓑，戴着笠的。他们的草屋，稀稀疏疏的，在雨里静默着。",
            "天上风筝渐渐多了，地上孩子也多了。城里乡下，家家户户，老老小小，他们也赶趟儿似的，一个个都出来了。舒活舒活筋骨，抖擞抖擞精神，各做各的一份事去。\u201C一年之计在于春\u201D，刚起头儿，有的是工夫，有的是希望。",
            "春天像刚落地的娃娃，从头到脚都是新的，他生长着。",
            "春天像小姑娘，花枝招展的，笑着，走着。",
            "春天像健壮的青年，有铁一般的胳膊和腰脚，他领着我们上前去。"
          ],
          textEn: [
            "Longing, longing — the east wind has come, spring's footsteps draw near.",
            "Everything looks as if just awakened, stretching open its eyes with delight. The mountains grow bright and moist, the waters rise, the face of the sun turns rosy.",
            "Little grasses stealthily poke out of the soil, tender and green. In the gardens, in the fields — look, there they are, great stretches of them everywhere. Sitting, lying, rolling about, kicking a ball, racing, playing hide-and-seek. The breeze is soft and gentle, the grass tender and yielding.",
            "The peach trees, apricot trees, pear trees — not wanting to be outdone by one another, all burst into bloom. Red as fire, pink as rosy clouds, white as snow. The blossoms carry a sweet fragrance; close your eyes, and it seems the trees are already full of peaches, apricots, and pears. Beneath the flowers, hundreds and thousands of bees are buzzing busily, and butterflies of all sizes flit about. Wildflowers are everywhere: varied kinds, named and nameless, scattered in the grass, like eyes, like stars, still blinking.",
            "'The willow wind blows without chill upon the face' — indeed, like a mother's hand caressing you. The wind carries the scent of freshly turned soil, mixed with the smell of green grass and the fragrance of all kinds of flowers, all brewing in the slightly moist air. Birds have nested among the lush blossoms and tender leaves, happily calling to their companions, showing off their clear voices, singing sweet melodies in harmony with the gentle breeze and flowing water. The shepherd boy's short flute on the ox's back rings bright all day long.",
            "Rain is the most ordinary thing, falling for two or three days at a stretch. Don't be annoyed. Look — like ox hair, like flower needles, like fine silk, weaving densely at a slant; a thin layer of smoke covers every rooftop. But the tree leaves gleam with green, and the grass is so vividly blue-green it presses against your eyes. At dusk, when the lights come on, the faint yellowish glow sets off a quiet and peaceful night. Down in the countryside, on little paths, by stone bridges, people stroll slowly with open umbrellas; there are also farmers working in the fields, cloaked in straw capes, wearing bamboo hats. Their thatched cottages, sparse and scattered, stand silently in the rain.",
            "More kites appear in the sky, more children on the ground. In the cities and countryside, every household, old and young, they come out one after another as if in a rush. Stretch the muscles, shake off the sluggishness — everyone goes to attend to their share of work. 'A year's plan starts in spring' — just beginning, there is plenty of time, plenty of hope.",
            "Spring is like a newborn baby — new from head to toe, growing.",
            "Spring is like a young girl, dressed in blossoming finery, smiling and walking.",
            "Spring is like a sturdy young man, with arms and legs of iron, leading us forward."
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
          annotations: [
            { id: 1, term: "花苞", pinyin: "huābāo", definition: "这里指没开放的花骨朵儿。", definitionEn: "Here it refers to unopened flower buds." },
            { id: 2, term: "彩棱镜", pinyin: "cǎiléngìng", definition: "以透明材料制成的多面体，能折射出不同颜色的光。", definitionEn: "A prism made of transparent material that refracts light into different colors." },
            { id: 3, term: "静谧", pinyin: "jìngmì", definition: "安静。谧，安宁、平静。", definitionEn: "Quiet, tranquil." },
            { id: 4, term: "莅临", pinyin: "lìlín", definition: "来到，来临（多指贵宾）。多用于书面。", definitionEn: "To arrive, to come (often referring to honored guests). Mostly used in written language." },
            { id: 5, term: "吝啬", pinyin: "lìnsè", definition: "过分爱惜自己的财物，不舍得给别人，也不舍得自己用。", definitionEn: "Excessively protective of one's possessions; stingy." },
            { id: 6, term: "淅淅沥沥", pinyin: "xīxīlìlì", definition: "形容轻微的风声、雨声、落叶声等。", definitionEn: "Describes the soft sounds of wind, rain, or falling leaves." }
          ],
          readingTips: {
            cn: "优美的写景散文常常用饱含感情的、细腻生动的笔墨，把景物描写得分外美丽，分外灵动。文中的四季之雨，\u201C容貌\u201D有别，\u201C性情\u201D各异。作者用诗一般的语言，调动我们的各种感官，全面感受这四季之雨，让我们亲近雨，体会雨的不同情致与风韵。",
            en: "Beautiful landscape prose often uses emotionally charged, delicate and vivid writing to depict scenery with extraordinary beauty and spirit. The rain of four seasons in this text has different 'appearances' and 'temperaments.' The author uses poetic language to engage all our senses, letting us fully experience the rain of four seasons and appreciate its different moods and charms."
          },
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
            "观沧海\n曹操\n东临碣石，以观沧海。\n水何澹澹，山岛竦峙。\n树木丛生，百草丰茂。\n秋风萧瑟，洪波涌起。\n日月之行，若出其中；\n星汉灿烂，若出其里。\n幸甚至哉，歌以咏志。",
            "闻王昌龄左迁龙标遥有此寄\n李白\n杨花落尽子规啼，闻道龙标过五溪。\n我寄愁心与明月，随君直到夜郎西。",
            "次北固山下\n王湾\n客路青山外，行舟绿水前。\n潮平两岸阔，风正一帆悬。\n海日生残夜，江春入旧年。\n乡书何处达？归雁洛阳边。",
            "天净沙·秋思\n马致远\n枯藤老树昏鸦，小桥流水人家，古道西风瘦马。夕阳西下，断肠人在天涯。"
          ],
          textEn: [
            "Viewing the Sea\nCao Cao\nEastward I climb Jieshi, to view the vast sea.\nHow boundless the waters, how towering the island peaks.\nTrees grow in clusters, grasses flourish lush.\nAutumn winds sigh, great waves surge and rise.\nThe sun and moon seem to emerge from within;\nThe Milky Way, brilliant, seems to rise from its depths.\nHow fortunate, how supreme! I sing to express my ambition.",
            "Hearing of Wang Changling's Demotion, Sending This from Afar\nLi Bai\nWillow catkins have all fallen, the cuckoo cries;\nI hear you've passed Five Streams on the way to Longbiao.\nI send my heart of sorrow with the bright moon,\nFollowing you all the way to west of Yelang.",
            "Mooring at Beigu Mountain\nWang Wan\nThe traveler's road beyond the green hills,\nThe boat before the green waters.\nThe tide is level, both banks wide;\nThe wind is fair, a single sail hangs.\nThe sea-sun is born in the dying night;\nThe river-spring enters the old year.\nWhere can a letter home reach?\nThe returning geese — toward Luoyang.",
            "Tianjingsha: Autumn Thoughts\nMa Zhiyuan\nWithered vines, old tree, evening crows;\nSmall bridge, flowing water, a few houses;\nAncient road, west wind, a thin horse.\nThe sun sets in the west —\nThe heartbroken one is at the edge of the world."
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
            "我们在田野上散步：我，我的母亲，我的妻子和儿子。",
            "母亲本不愿出来的；她老了，身体不好，走远一点儿就觉得累。我说，正因为如此，才应该多走走。母亲信服地点点头，便去拿外套。她现在很听我的话，就像我小时候很听她的话一样。",
            "天气很好。今年的春天来得太迟，太迟了，有一些老人挺不住，在清明将到的时候去世了。但是春天总算来了。我的母亲又熬过了一个严冬。",
            "后来发生了分歧：我的母亲要走大路，大路平顺；我的儿子要走小路，小路有意思……不过，一切都取决于我。我决定委屈儿子了，因为我伴同他的时日还长，我伴同母亲的时日已短。我说：\u201C走大路。\u201D",
            "但是母亲摸摸孙儿的小脑瓜，变了主意：\u201C还是走小路吧！\u201D她的眼睛顺小路望过去：那里有金色的菜花、两行整齐的桑树，尽头一口水波粼粼的鱼塘。\u201C我走不过去的地方，你就背着我。\u201D母亲说。",
            "这样，我们就在阳光下，向着那菜花、桑树和鱼塘走去了。到了一处，我蹲下来，背起了我的母亲，妻子也蹲下来，背起了我们的儿子。我的母亲虽然高大，然而很瘦，自然不算重；儿子虽然很胖，毕竟幼小，自然也很轻。但我和妻子都是慢慢地，稳稳地，走得很仔细，好像我背上的同她背上的加起来，就是整个世界。"
          ],
          textEn: [
            "We are walking in the fields: I, my mother, my wife, and my son.",
            "Mother didn't want to come out at first; she's old and not well, feeling tired after walking just a short distance. I said, precisely because of this, she should walk more. Mother nodded in agreement and went to get her coat. She listens to me now, just as I listened to her when I was small.",
            "The weather was beautiful. Spring came too late this year — too late — and some elderly people couldn't hold on and passed away around Qingming Festival. But spring did finally come. My mother survived another harsh winter.",
            "Later a disagreement arose: my mother wanted the main road — smooth and easy; my son wanted the small path — more interesting. But everything depended on me. I decided to compromise my son, because I still have a long time with him, but my time with my mother is already short. I said: 'Let's take the main road.'",
            "But Mother patted her grandson's little head and changed her mind: 'Let's take the small path after all!' Her eyes followed the small path: golden rapeseed flowers, two neat rows of mulberry trees, and at the end, a fish pond with rippling water. 'Where I can't walk, you'll carry me,' Mother said.",
            "So we walked toward the rapeseed flowers, mulberry trees, and fish pond in the sunlight. At one point, I squatted down and took my mother on my back, and my wife squatted down and took our son on her back. Although my mother is tall, she is very thin, naturally not heavy; although my son is chubby, he is after all small, naturally light too. But my wife and I both walked slowly, steadily, very carefully — as if what I carried on my back and what she carried on hers, together, was the entire world."
          ],
          annotations: [],
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
            "金色花\n泰戈尔\n假如我变成了一朵金色花，只是为了好玩，长在那棵树的高枝上，笑嘻嘻地在风中摇摆，又在新叶上跳舞，妈妈，你会认识我吗？\n你要是叫道：\u201C孩子，你在哪里呀？\u201D我暗暗地在那里匿笑，却一声儿不响。\n我要悄悄地开放花瓣儿，看着你工作。\n当你沐浴后，湿发披在两肩，穿过金色花的林荫，走到你做祷告的小庭院时，你会嗅到这花香，却不知道这香气是从我身上来的。\n当你吃过中饭，坐在窗前读《罗摩衍那》，那棵树的阴影落在你的头发与膝上时，我便要投我的小小的影子在你的书页上，正投在你所读的地方。\n但是你会猜得出这就是你的孩子的小小影子吗？\n当你黄昏时拿了灯到牛棚里去，我便要突然地再落到地上来，又成了你的孩子，求你讲个故事给我听。\n\u201C你到哪里去了，你这坏孩子？\u201D\n\u201C我不告诉你，妈妈。\u201D这就是你同我那时所要说的话了。",
            "荷叶·母亲\n冰心\n父亲的朋友送给我们两缸莲花，一缸是红的，一缸是白的，都摆在院子里。\n半夜里听见繁杂的雨声，早起是浓阴的天，我觉得有些烦闷。从窗内往外看时，那一朵白莲已经谢了，白瓣儿小船般散漂在水面。梗上只留个小小的莲蓬和几根淡黄色的花须。那一朵红莲，昨夜还是菡萏的，今晨却开满了，亭亭地在绿叶中间立着。\n对屋里母亲唤着，我连忙走过去，坐在母亲旁边——一回头忽然看见红莲旁边的一个大荷叶，慢慢地倾侧了来，正覆盖在红莲上面……我不宁的心绪散尽了！\n雨势并不减退，红莲却不摇动了。雨点不住地打着，只能在那勇敢慈怜的荷叶上面，聚了些流转无力的水珠。\n我心中深深地受了感动——\n母亲啊！你是荷叶，我是红莲。心中的雨点来了，除了你，谁是我在无遮拦天空下的荫蔽？"
          ],
          textEn: [
            "The Golden Flower\nTagore\nIf I turned into a golden flower, just for fun, growing on a high branch of that tree, swaying happily in the wind, dancing upon the new leaves — Mama, would you recognize me?\nIf you called: 'Child, where are you?' I would laugh to myself in secret, not making a sound.\nI would quietly open my petals and watch you work.\nWhen you walked through the shade of the golden flowers to your little prayer courtyard after bathing, wet hair draped over your shoulders, you would catch the fragrance but never know it came from me.\nWhen you sat by the window after lunch reading the Ramayana, and the shadow of that tree fell across your hair and your lap, I would cast my own tiny shadow upon your page — right where you were reading.\nBut would you guess that the little shadow was your child's?\nAt dusk, when you carried a lamp to the cowshed, I would suddenly tumble back to the ground, a child once more, begging you to tell me a story.\n'Where have you been, you naughty child?'\n'I won't tell you, Mama.' That is what you and I would say to each other.",
            "Lotus Leaf and Mother\nBing Xin\nA friend of Father's gave us two jars of lotus — one red, one white — both placed in the courtyard.\nIn the deep of night I heard the tangled sound of rain. Morning came overcast, and I felt somewhat restless. Looking out from the window, the white lotus had already withered, its petals scattered across the water like little boats drifting. Only a small seed pod and a few pale yellow stamens remained on the stem. But the red lotus — still a bud just last night — had bloomed fully this morning, standing tall and graceful among the green leaves.\nFrom the room across the way, Mother called to me. I hurried over and sat beside her — then, turning my head, I suddenly saw a large lotus leaf beside the red lotus slowly tilting over until it covered the red lotus completely... My restless heart was stilled at once!\nThe rain did not relent, yet the red lotus swayed no more. The drops fell ceaselessly, but could only gather into listless beads upon that brave, compassionate leaf.\nI was moved to the depths of my heart —\nMother! You are the lotus leaf; I am the red lotus. When the rain of my heart begins to fall, who but you is my shelter beneath the unsheltered sky?"
          ],
          annotations: [
            { id: 1, term: "匿笑", pinyin: "nìxiào", definition: "偷偷地笑。", definitionEn: "To laugh secretly." },
            { id: 2, term: "菡萏", pinyin: "hàndàn", definition: "荷花的别称，这里指红莲含苞未放。", definitionEn: "Another name for lotus; here referring to an unopened red lotus bud." },
            { id: 3, term: "攲斜", pinyin: "qīxié", definition: "倾斜，歪斜。", definitionEn: "Tilted, leaning." }
          ],
          readingTips: {
            cn: "散文诗有诗的情绪与想象，像诗一样精粹、凝练，但不像诗歌那样分行与押韵，而是以散文形式呈现。《金色花》写想象之事，以儿童的视角表达对母亲的依恋；而《荷叶·母亲》则写现实与联想，以荷叶比喻母亲，赞颂伟大的母爱。",
            en: "Prose poems have the emotion and imagination of poetry and are as refined and concentrated, but they don't use line breaks or rhyme like poetry — they are presented in prose form. The Golden Flower uses imagination from a child's perspective to express attachment to a mother; Lotus Leaf and Mother uses reality and association, comparing a mother to a lotus leaf to praise great maternal love."
          },
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
            "咏雪\n谢太傅寒雪日内集，与儿女讲论文义。俄而雪骤，公欣然曰：\u201C白雪纷纷何所似？\u201D兄子胡儿曰：\u201C撒盐空中差可拟。\u201D兄女曰：\u201C未若柳絮因风起。\u201D公大笑乐。即公大兄无奕女，左将军王凝之妻也。",
            "陈太丘与友期行\n陈太丘与友期行，期日中。过中不至，太丘舍去，去后乃至。元方时年七岁，门外戏。客问元方：\u201C尊君在不？\u201D答曰：\u201C待君久不至，已去。\u201D友人便怒曰：\u201C非人哉！与人期行，相委而去。\u201D元方曰：\u201C君与家君期日中。日中不至，则是无信；对子骂父，则是无礼。\u201D友人惭，下车引之。元方入门不顾。"
          ],
          textEn: [
            "Chanting About Snow\nOn a cold snowy day, Grand Tutor Xie gathered his family and discussed literature with the young ones. Suddenly the snow fell more heavily. He said happily: 'What does this swirling white snow resemble?' His nephew said: 'Scattering salt in the air is roughly comparable.' His niece said: 'It's more like willow catkins rising on the wind.' The Grand Tutor laughed with delight. She was the daughter of his eldest brother Wu Yi, and the wife of General Wang Ningzhi.",
            "Chen Taiqiu and His Friend's Appointment\nChen Taiqiu had arranged to travel with a friend, agreeing to meet at noon. When noon passed and the friend hadn't come, Taiqiu left. After he left, the friend arrived. Taiqiu's son Yuanfang, then seven years old, was playing outside the gate. The guest asked: 'Is your father home?' He replied: 'He waited for you a long time but you didn't come, so he left.' The friend angrily said: 'What an inhuman fellow! He made an appointment to travel with someone, then abandoned him and left!' Yuanfang said: 'You arranged to meet my father at noon. Not coming at noon shows a lack of trustworthiness; insulting a father in front of his son shows a lack of propriety.' The friend was ashamed and stepped down from his carriage to greet him. Yuanfang entered the gate without looking back."
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
          annotations: [
            { id: 1, term: "花团锦簇", pinyin: "huātuánjǐncù", definition: "形容五彩缤纷、十分华丽的景象。簇，丛集、聚集。", definitionEn: "Describes a colorful, gorgeous scene. 簇 means clustered together." },
            { id: 2, term: "美不胜收", pinyin: "měibùshèngshōu", definition: "美好的东西太多，一时接受不完。胜，完、尽。", definitionEn: "So many beautiful things that one cannot take them all in. 胜 means to exhaust." },
            { id: 3, term: "不求甚解", pinyin: "bùqiúshènjiě", definition: "原指领会大意。现在多指读书学习只求懂得大概，不求深刻了解。", definitionEn: "Originally meant to grasp the general meaning. Now often means only seeking a rough understanding without deep comprehension." }
          ],
          readingTips: {
            cn: "阅读文章，要关注标题，尤其是那些能揭示主旨的标题。本文题为《再塑生命的人》，为什么生命要\u201C再塑\u201D呢？谁来\u201C再塑\u201D生命？如何做到的？带着这些问题阅读课文，你就会注意到一些与标题照应的语句。文章在叙事之中常常穿插一些抒情或议论，从中可以了解到\u201C再塑生命\u201D过程中\u201C我\u201D的心理感受。",
            en: "When reading, pay attention to the title, especially those that reveal the theme. This text is titled 'The One Who Remade My Life' — why does life need 'remaking'? Who 'remakes' it? How? Reading with these questions, you'll notice sentences that echo the title. The text often interweaves narration with lyrical or reflective passages, revealing the narrator's psychological experience during the 'remaking' process."
          },
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
            "子曰：\u201C学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？\u201D（《学而》）",
            "曾子曰：\u201C吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？\u201D（《学而》）",
            "子曰：\u201C吾十有五而志于学，三十而立，四十而不惑，五十而知天命，六十而耳顺，七十而从心所欲，不逾矩。\u201D（《为政》）",
            "子曰：\u201C温故而知新，可以为师矣。\u201D（《为政》）",
            "子曰：\u201C学而不思则罔，思而不学则殆。\u201D（《为政》）",
            "子曰：\u201C贤哉，回也！一箪食，一瓢饮，在陋巷，人不堪其忧，回也不改其乐。贤哉，回也！\u201D（《雍也》）",
            "子曰：\u201C知之者不如好之者，好之者不如乐之者。\u201D（《雍也》）",
            "子曰：\u201C饭疏食，饮水，曲肱而枕之，乐亦在其中矣。不义而富且贵，于我如浮云。\u201D（《述而》）",
            "子曰：\u201C三人行，必有我师焉。择其善者而从之，其不善者而改之。\u201D（《述而》）",
            "子在川上曰：\u201C逝者如斯夫，不舍昼夜。\u201D（《子罕》）",
            "子曰：\u201C三军可夺帅也，匹夫不可夺志也。\u201D（《子罕》）",
            "子夏曰：\u201C博学而笃志，切问而近思，仁在其中矣。\u201D（《子张》）"
          ],
          textEn: [
            "The Master said: 'Is it not a pleasure to learn and practice what you have learned in due time? Is it not a delight when friends come from afar? Is it not the mark of a gentleman to feel no resentment when others do not recognize you?' (Xue Er)",
            "Zeng Zi said: 'Each day I examine myself on three counts: Have I been faithful in my dealings with others? Have I been trustworthy with my friends? Have I practiced what has been taught to me?' (Xue Er)",
            "The Master said: 'At fifteen I set my heart on learning; at thirty I stood firm; at forty I had no doubts; at fifty I knew Heaven's decree; at sixty my ear was attuned; at seventy I could follow my heart's desire without overstepping the bounds.' (Wei Zheng)",
            "The Master said: 'One who reviews the old and learns the new may serve as a teacher.' (Wei Zheng)",
            "The Master said: 'Learning without thought is confusion; thought without learning is perilous.' (Wei Zheng)",
            "The Master said: 'How admirable is Hui! A single bowl of rice, a single gourd of water, living in a narrow lane — others could not endure such hardship, yet Hui did not change his cheerfulness. How admirable is Hui!' (Yong Ye)",
            "The Master said: 'Those who know it are not as good as those who love it; those who love it are not as good as those who delight in it.' (Yong Ye)",
            "The Master said: 'Eating coarse grain, drinking water, bending one's arm for a pillow — joy lies in these things too. Riches and honors obtained through unrighteousness are to me like floating clouds.' (Shu Er)",
            "The Master said: 'When three walk together, I am sure to find a teacher among them. I choose what is good and follow it, and change what is not good.' (Shu Er)",
            "Standing by a river, the Master said: 'What passes is like this — it does not stop day or night!' (Zi Han)",
            "The Master said: 'An army can be deprived of its commander, but a common man cannot be deprived of his purpose.' (Zi Han)",
            "Zi Xia said: 'Broad learning with firm resolve, earnest questioning with close reflection — benevolence lies within these.' (Zi Zhang)"
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
            "白求恩同志是加拿大共产党员，五十多岁了，为了帮助中国的抗日战争，受加拿大共产党和美国共产党的派遣，不远万里，来到中国。去年春上到延安，后来到五台山工作，不幸以身殉职。一个外国人，毫无利己的动机，把中国人民的解放事业当作他自己的事业，这是什么精神？这是国际主义的精神，这是共产主义的精神，每一个中国共产党员都要学习这种精神。",
            "白求恩同志毫不利己专门利人的精神，表现在他对工作的极端的负责任，对同志对人民的极端的热忱。每个共产党员都要学习他。不少的人对工作不负责任，拈轻怕重，把重担子推给人家，自己挑轻的。一事当前，先替自己打算，然后再替别人打算。出了一点力就觉得了不起，喜欢自吹，生怕人家不知道。对同志对人民不是满腔热忱，而是冷冷清清，漠不关心，麻木不仁。这种人其实不是共产党员，至少不能算一个纯粹的共产党员。",
            "白求恩同志是个医生，他以医疗为职业，对技术精益求精；在整个八路军医务系统中，他的医术是很高明的。这对于一班见异思迁的人，对于一班鄙薄技术工作以为不足道、以为无出路的人，也是一个极好的教训。",
            "我和白求恩同志只见过一面。后来他给我来过许多信。可是因为忙，仅回过他一封信，还不知他收到没有。对于他的死，我是很悲痛的。现在大家纪念他，可见他的精神感人之深。我们大家要学习他毫无自私自利之心的精神。从这点出发，就可以变为大有利于人民的人。一个人能力有大小，但只要有这点精神，就是一个高尚的人，一个纯粹的人，一个有道德的人，一个脱离了低级趣味的人，一个有益于人民的人。"
          ],
          textEn: [
            "Comrade Bethune, a member of the Communist Party of Canada, was around fifty years old. Sent by the Communist Parties of Canada and the United States, he traveled thousands of miles to help China in the War of Resistance Against Japan. He came to Yan'an last spring, then went to work in the Wutai Mountains, where he unfortunately gave his life in the line of duty. A foreigner, with no selfish motives whatsoever, devoted himself to China's liberation cause as if it were his own — what spirit is this? This is the spirit of internationalism, the spirit of communism.",
            "Comrade Bethune's spirit of utter devotion to others without any thought of self was shown in his extreme sense of responsibility in his work and his boundless warmth toward all comrades and the people. Every Communist must learn from him. Not a few people are irresponsible in their work, preferring the light to the heavy, shifting the burden onto others while choosing the easy tasks themselves. At every turn they think of themselves first, then of others. After the slightest effort they swell with self-importance, boasting for fear others won't notice. Toward comrades and the people they are not warm but cold, indifferent, numb. Such people are in fact not Communists, or at least cannot be considered pure Communists.",
            "Comrade Bethune was a doctor; he took healing as his profession, and he was constantly perfecting his skill. His medical expertise was among the finest in the entire Eighth Route Army medical system. This is an excellent lesson for those who are fickle and change direction at every new sight, and for those who look down on technical work as beneath them or as a dead end.",
            "I met Comrade Bethune only once. Later he wrote me many letters, but I was too busy and replied to only one — I don't even know if he received it. I am deeply grieved by his death. Now that we all commemorate him, we can see how profoundly his spirit has moved people. We must all learn from his spirit of absolute selflessness. Starting from this point, one can become a person of great benefit to the people. A person's ability may be great or small, but if he has this spirit, he is already a noble person, a pure person, a moral person, a person free of vulgar interests, a person who is of benefit to the people."
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
            "那是在费城，一个酷热的七月天——直到56年后的今天，我仍能感受到当年那股灼人的热浪。和我在一起的五个男孩子已经厌倦了玩弹珠，以及用透镜在干树叶上烧洞的游戏，正在寻觅其他好玩的事。",
            "我犹豫了。我渴望像他们一样勇敢和活跃，但是在过去的八年岁月中，我绝大部分时间都是一个病弱的孩子，并将妈妈的警告牢记在心——我不像其他孩子那样强壮，而且不能冒险。",
            "我们来到一块空地上。在很远的另一边，有一道悬崖，像一面几近垂直的墙突兀地耸立在岩石中。从底部杂乱的岩石到顶部草皮的边缘，只有60英尺左右，但是对我来说，这是严禁和不可能的化身。",
            "不知何时，我回头向下看了一眼，然后吓坏了：悬崖底下的地面看起来非常遥远；只要滑一下，我就会掉下去，撞上崖壁，然后摔到岩石上，摔个粉碎。",
            "时间在慢慢地过去。影子在慢慢拉长，太阳已经没在西边低矮的树梢下，夜幕开始降临。我趴在岩石上，神情恍惚，害怕和疲劳已经让我麻木。",
            "暮色中，第一颗星星出现在天空中。树林中闪烁着一道手电筒发出的光，然后我听到了杰里和爸爸的喊声。",
            "\u201C听我说，\u201D爸爸继续说，\u201C不要想有多远，有多困难，你需要想的是迈一小步，这个你能做到。看着手电光指的地方，看到那块石头没有？\u201D",
            "就这样，一次一步，一次换一个地方落脚，按照他说的往下爬，爸爸强调每次我只需要做一个简单的动作，从来不让我有机会停下来思考下面的路还很长。",
            "突然，我向下迈出了最后一步，然后踩到了底部凌乱的岩石，扑进了爸爸强壮的臂弯里，抽噎了一下，然后令人惊讶的是，我有了一种巨大的成就感和类似骄傲的感觉。",
            "此后，我生命中有很多时刻，面对一个遥不可及的目标，或者一个令人畏惧的情境，当我感到惊慌失措时，我都能够轻松应对——因为我回想起了很久以前悬崖上的那一课。我提醒自己不要看下面遥远的岩石，而是注意相对轻松、容易的第一小步，迈出一小步，再一小步，就这样体会每一步带来的成就感，直到达成了自己的目标。"
          ],
          textEn: [
            "It was in Philadelphia, on a blistering July day — even 56 years later, I can still feel that scorching heat wave. The five boys I was with had grown tired of playing marbles and burning holes in dry leaves with a magnifying glass, and were looking for something else to do.",
            "I hesitated. I longed to be as brave and active as the other boys, but for most of my eight years I had been a sickly child, and I kept my mother's warning firmly in mind — I was not as strong as other children and must not take risks.",
            "We came to an open field. Far on the other side was a cliff, jutting out like a nearly vertical wall. From the jumbled rocks at the bottom to the grassy edge at the top was only about 60 feet, but to me it represented everything forbidden and impossible.",
            "At some point I looked down and was terrified: the ground at the base of the cliff seemed impossibly far away. One slip and I would fall, crash against the cliff wall, and smash onto the rocks below, shattering to pieces.",
            "Time passed slowly. Shadows lengthened, the sun sank below the treetops, and darkness began to fall. I lay on the rock, dazed, numb with fear and exhaustion.",
            "In the dusk, the first star appeared. Through the trees came a flashlight beam, then the voices of Jerry and my father.",
            "'Listen,' Dad continued, 'don't think about how far it is or how difficult it is. All you need to think about is taking one small step — you can do that. Look where the flashlight is pointing. Do you see that rock?'",
            "And so, one step at a time, one foothold at a time, I climbed down as he directed. Dad made sure I only had to make one simple move each time, never giving me a chance to think about how far I still had to go.",
            "Suddenly I took the last step down, stepped onto the jumbled rocks at the bottom, and fell into my father's strong arms with a sob — then, surprisingly, I felt an enormous sense of accomplishment and something like pride.",
            "In many moments of my life since then, when facing a seemingly unreachable goal or a frightening situation, whenever I felt panicked and overwhelmed, I have been able to cope with ease — because I remembered that lesson on the cliff long ago. I remind myself not to look at the distant rocks below, but to focus on the relatively easy first small step. Take one small step, then another, savoring the sense of accomplishment each step brings, until I reach my goal."
          ],
          annotations: [
            { id: 1, term: "灼", pinyin: "zhuó", definition: "烧，烫。", definitionEn: "To burn, to scorch." },
            { id: 2, term: "恍惚", pinyin: "huǎnghū", definition: "神志不清，精神不集中。", definitionEn: "Dazed, absent-minded." },
            { id: 3, term: "抽噎", pinyin: "chōuyē", definition: "一吸一顿地哭泣。", definitionEn: "To sob with hiccupping breaths." }
          ],
          readingTips: {
            cn: "本文是作者对自己童年时代一件往事的回忆。文章按照时间顺序，讲述了自己从冒险到遇险，再到脱险的全过程。这个过程，其实也是\u201C我\u201D从胆怯、恐惧到克服心理障碍，收获自信，甚至有了一种成就感的心路历程。默读课文，勾画出文中标志事件发展和描写\u201C我\u201D不同阶段心理活动的语句，试着复述这个故事。",
            en: "This text is the author's recollection of a childhood experience. Following chronological order, it tells the entire process from taking a risk to being in danger to being rescued. This is also the narrator's psychological journey from timidity and fear to overcoming mental barriers and gaining confidence. While reading silently, mark the sentences that signal plot development and describe the narrator's changing psychology."
          },
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
            "夫君子之行，静以修身，俭以养德。非淡泊无以明志，非宁静无以致远。夫学须静也，才须学也，非学无以广才，非志无以成学。淫慢则不能励精，险躁则不能治性。年与时驰，意与日去，遂成枯落，多不接世，悲守穷庐，将复何及！"
          ],
          textEn: [
            "The conduct of a gentleman requires tranquility to cultivate the self and frugality to nurture virtue. Without serenity, one cannot clarify one's aspirations; without tranquility, one cannot reach far. Study requires tranquility, talent requires study; without study, one cannot broaden one's talent; without aspiration, one cannot accomplish one's study. Indulgence and sloth cannot invigorate the spirit; rashness and impatience cannot cultivate one's nature. Years race along with time, willpower fades with the days — one withers and decays, mostly unable to contribute to the world, sadly guarding a humble hut. What use is regret then?"
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
            "我家养了好几次的猫，结局总是失踪或死亡。三妹是最喜欢猫的，她常在课后回家时，逗着猫玩。",
            "有一次，从隔壁要了一只新生的猫来。花白的毛，很活泼，常如带着泥土的白雪球似的，在廊前太阳光里滚来滚去。",
            "后来这只猫不知怎地忽然消瘦了，也不肯吃东西，光泽的毛也污涩了，终日躺在厅上的椅下，不肯出来。有一天中午，三妹很难过地说道：\u201C哥哥，小猫死了！\u201D",
            "隔了几天，二妹从虹口舅舅家里回来，却带了一只浑身黄色的小猫同来。这只小猫较第一只更有趣，更活泼。它在园中乱跑，又会爬树。",
            "某一日清晨，我起床来，没有看见小猫。张妈诉说道：\u201C早上看见我家的小猫在门外，被一个过路的人捉去了。\u201D自此，我家好久不养猫。",
            "冬天的早晨，门口蜷伏着一只很可怜的小猫，毛色是花白的，但并不好看，又很瘦。张妈把它拾了进来。但大家都不喜欢它。",
            "这时，妻买了一对黄色的芙蓉鸟来。那只花白猫对于这一对黄鸟，似乎也特别注意，常常跳在桌上，对鸟笼凝望着。",
            "一天，我下楼时，听见张妈在叫道：\u201C鸟死了一只，一条腿被咬去了。\u201D我很愤怒，叫道：\u201C一定是猫，一定是猫！\u201D于是立刻便去找它。",
            "隔了几天，李妈在楼下叫道：\u201C猫，猫！又来吃鸟了！\u201D同时我看见一只黑猫飞快地逃过露台，嘴里衔着一只黄鸟。我开始觉得我是错了！",
            "我心里十分地难过，真的，我的良心受伤了，我没有判断明白，便妄下断语，冤枉了一只不能说话辩诉的动物。",
            "两个月后，我们的猫忽然死在邻家的屋脊上，我对于它的亡失，比以前的两只猫的亡失，更难过得多。我永无改正我的过失的机会了！自此，我家永不养猫。"
          ],
          textEn: [
            "Our family kept cats several times, and they always ended up missing or dead. Third Sister loved cats the most and often played with them after school.",
            "Once, we got a newborn kitten from the neighbors. It had white and spotted fur, very lively, rolling around like a muddy snowball in the sunlight on the porch.",
            "Later, the cat suddenly grew thin, refused to eat, its sleek fur became dull and dirty, and it lay under the living room chair all day, refusing to come out. One afternoon, Third Sister said sadly: 'Brother, the little cat is dead!'",
            "A few days later, Second Sister came back from our uncle's house in Hongkou, bringing a little yellow kitten. This kitten was even more fun and lively than the first. It ran around the garden and could climb trees.",
            "One morning, I got up and couldn't find the kitten. Zhang Ma reported: 'This morning the kitten was outside the door and was taken by a passerby.' From then on, our family didn't keep cats for a long time.",
            "One winter morning, a pitiful little cat was crouching at our door, with spotted white fur, not pretty, and very thin. Zhang Ma brought it in. But nobody liked it.",
            "Then my wife bought a pair of yellow canary birds. The spotted white cat seemed particularly interested in the birds, often jumping on the table and staring at the birdcage.",
            "One day, coming downstairs, I heard Zhang Ma shouting: 'A bird is dead, one leg has been bitten off!' I was furious and shouted: 'It must be the cat! It must be the cat!' and went to find it immediately.",
            "A few days later, Li Ma shouted downstairs: 'The cat! The cat is eating the birds again!' I saw a black cat darting across the balcony with a yellow bird in its mouth. I began to realize I was wrong!",
            "I felt terribly sorry. Truly, my conscience was wounded. Without proper judgment, I had rashly condemned an animal that couldn't speak in its own defense.",
            "Two months later, our cat died on a neighbor's rooftop. I felt more sorrow over its loss than over the previous two cats. I would never have the chance to correct my mistake! From then on, our family never kept cats again."
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
          authorBio: {
            cn: "康拉德·劳伦兹（1903—1989），奥地利动物行为学家、科普作家。获1973年诺贝尔生理学或医学奖。",
            en: "Konrad Lorenz (1903–1989) was an Austrian animal behaviorist and science writer. He received the 1973 Nobel Prize in Physiology or Medicine."
          },
          isSelfRead: true,
          readingTips: {
            cn: "\u201C动物笑谈\u201D意思是谈论和动物有关的趣事、笑话。作者专注于动物行为研究，为了探求科学真理，\u201C常常需要不顾自己的尊严\u201D，与动物们打成一片。作者的语言诙谐风趣，透过课文风趣的文字，可以感受到科学工作者专注忘我的精神和极高的专业素养。",
            en: "'Animal Anecdotes' means talking about funny stories related to animals. The author, dedicated to studying animal behavior, 'often had to disregard his own dignity' to bond with animals. Through the text's witty words, we can feel the scientist's devoted, selfless spirit and high professional quality."
          },
          text: [
            "在研究高等动物的行为时，常常会发生一些趣事，不过逗笑的主角常常不是动物，而是观察者自己。",
            "我因此得出一个颇为清晰的结论：如果我要小凫跟着我走，我得学母凫一样叫才行。果然，这一次这些小鸭子一点儿也不怕我。",
            "不过，为了要它们跟着我，我不得不蹲着走。那个星期天，当我带着那群小鸭子又蹲又爬又叫地走着，猛一抬头，却看见园子的栏杆边排着一排人，他们全都脸色煞白。",
            "另一次我差点儿被送进疯人院里，这得怪我养的那只黄冠大鹦鹉\u201C可可\u201D了。它聪明得很，对我恋恋不舍。",
            "我到底还是叫了。可可伸开了翅膀迟疑了一会儿，然后敛翼俯冲而下，只一下就停在我伸出的手臂上了。",
            "这只鹦鹉还有一样好把戏：它总是一口咬住露在外面的活线头，很快地飞到空中，把一整团线都打开来，就像一个纸风筝拖着一条极长的尾巴。"
          ],
          textEn: [
            "When studying the behavior of higher animals, funny things often happen, but the amusing protagonist is usually not the animal, but the observer himself.",
            "I therefore reached a clear conclusion: if I wanted the ducklings to follow me, I had to quack like a mother duck. Sure enough, this time the little ducks weren't afraid of me at all.",
            "But to make them follow me, I had to walk crouching. That Sunday, as I was crouching, crawling, and quacking through the green grass with the little ducks, I suddenly looked up to see a row of people along the garden railing, all white-faced.",
            "Another time I was nearly committed to an asylum, all because of my yellow-crested cockatoo 'Coco.' It was very clever and deeply attached to me.",
            "But I called after all. Coco spread its wings, hesitated for a moment, then folded them and dived down, landing in one swoop on my outstretched arm.",
            "This parrot had another fine trick: it would grab the loose end of yarn, fly rapidly into the air, unraveling the entire ball of wool like a kite trailing an extremely long tail."
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
            "一屠晚归，担中肉尽，止有剩骨。途中两狼，缀行甚远。",
            "屠惧，投以骨。一狼得骨止，一狼仍从。复投之，后狼止而前狼又至。骨已尽矣，而两狼之并驱如故。",
            "屠大窘，恐前后受其敌。顾野有麦场，场主积薪其中，苫蔽成丘。屠乃奔倚其下，弛担持刀。狼不敢前，眈眈相向。",
            "少时，一狼径去，其一犬坐于前。久之，目似瞑，意暇甚。屠暴起，以刀劈狼首，又数刀毙之。",
            "方欲行，转视积薪后，一狼洞其中，意将隧入以攻其后也。身已半入，止露尻尾。屠自后断其股，亦毙之。乃悟前狼假寐，盖以诱敌。",
            "狼亦黠矣，而顷刻两毙，禽兽之变诈几何哉？止增笑耳。"
          ],
          textEn: [
            "A butcher was returning home one evening. The meat in his basket was gone; only bones remained. On the road, two wolves followed him for a long distance.",
            "Frightened, he threw them a bone. One wolf stopped, but the other kept following. He threw again; the second wolf stopped, but the first came again. The bones were gone, yet both wolves still pursued.",
            "Greatly distressed, fearing attack from both sides, he noticed a wheat field nearby with stacked firewood covered into a mound. He ran to lean against it, set down his load, and took up his knife. The wolves dared not advance but glared menacingly.",
            "After a while, one wolf left directly, while the other sat like a dog in front. After a long time, its eyes seemed to close, looking very relaxed. The butcher sprang up, split the wolf's head with his knife, and killed it.",
            "As he was about to leave, he found the other wolf had been digging through the woodpile, intending to tunnel in and attack from behind. Its body was half inside, only hindquarters and tail exposed. He cut its thigh from behind and killed it too. He realized the first wolf had been pretending to sleep to lure him.",
            "The wolves were cunning indeed, but both died in a moment. How much deception can beasts manage? It only adds to the laughter."
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
            "许多年以前，有一位皇帝，他非常喜欢好看的新衣服。为了要穿得漂亮，他不惜把他所有的钱都花掉。",
            "有一天来了两个骗子。他们自称是织工，说能织出人类所能想到的最美丽的布。这种布还有一种奇怪的特性：任何不称职的或者愚蠢得不可救药的人，都看不见这衣服。",
            "这位善良的老大臣到那两个骗子的屋子里去了。\u201C愿上帝可怜我吧！\u201D老大臣想，\u201C我什么东西也没有看见！\u201D但是他没有敢把这句话说出口来。",
            "\u201C这是怎么一回事呢？\u201D皇帝心里想，\u201C我什么也没有看见！这可骇人听闻了。难道我是一个愚蠢的人吗？\u201D",
            "这样，皇帝就在那个富丽的华盖下游行起来了。站在街上和窗子里的人都说：\u201C乖乖！皇上的新装真是漂亮！\u201D",
            "\u201C可是他什么衣服也没有穿啊！\u201D一个小孩子最后叫了出来。",
            "\u201C他实在没有穿什么衣服啊！\u201D最后所有的老百姓都说。皇帝有点儿发抖，因为他似乎觉得老百姓们所讲的话是真的。不过他自己心里却这样想：\u201C我必须把这游行大典举行完毕。\u201D"
          ],
          textEn: [
            "Many years ago there was an Emperor who was so exceedingly fond of beautiful new clothes that he spent all his money on them just to dress well.",
            "One day two swindlers came. They said they could weave the most magnificent fabric. Clothes made of this fabric had a wonderful property: they were invisible to anyone who was unfit for his position or hopelessly stupid.",
            "The good old minister went to the room where the two swindlers were working. 'God have mercy on me!' the old minister thought. 'I can't see a thing!' But he did not dare say so aloud.",
            "'What's going on?' thought the Emperor. 'I can see nothing at all! This is absolutely appalling. Am I a fool?'",
            "And so the Emperor walked in procession under the magnificent canopy. Everyone said: 'How splendid the Emperor's new clothes are!'",
            "'But he hasn't got anything on!' a little child called out at last.",
            "'He really hasn't got anything on!' all the people finally said. The Emperor shivered slightly, for he felt that what the people were saying seemed to be true. But he thought to himself: 'I must go through with this procession to the end.'"
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
            "远远的街灯明了，\n好像闪着无数的明星。\n天上的明星现了，\n好像点着无数的街灯。",
            "我想那缥缈的空中，\n定然有美丽的街市。\n街市上陈列的一些物品，\n定然是世上没有的珍奇。",
            "你看，那浅浅的天河，\n定然是不甚宽广。\n那隔着河的牛郎织女，\n定能够骑着牛儿来往。",
            "我想他们此刻，\n定然在天街闲游。\n不信，请看那朵流星，\n是他们提着灯笼在走。"
          ],
          textEn: [
            "Far away, the streetlights are lit,\nLike countless bright stars twinkling.\nThe bright stars in the sky appear,\nLike countless streetlights shining.",
            "I imagine in that misty sky above,\nThere must be beautiful streets.\nThe goods displayed in those streets\nMust be rare treasures not found on earth.",
            "Look at the shallow Milky Way —\nIt certainly isn't very wide.\nThe Cowherd and Weaver Girl, separated by the river,\nCan surely ride their ox back and forth.",
            "I imagine right now\nThey must be strolling on the heavenly streets.\nIf you don't believe it, look at that shooting star —\nIt's them walking with their lanterns."
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
          authorBio: {
            cn: "袁珂（1916—2001），四川新都人，神话学家。著有《中国古代神话》《山海经校注》等。",
            en: "Yuan Ke (1916–2001) was from Xindu, Sichuan. Mythologist and author of Ancient Chinese Myths and Annotated Classic of Mountains and Seas."
          },
          isSelfRead: true,
          readingTips: {
            cn: "人类童年时期，对自然界许多现象缺乏科学的认识，就想象出各种解释，由此产生了神话。女娲造人的故事，是汉民族先祖对人类起源的神奇想象。本文是根据古代记述改写的，对照《风俗通》里的记载，看看课文增添了哪些内容。",
            en: "In humanity's childhood, lacking scientific understanding, people imagined explanations — thus myths were born. The story of Nüwa creating humans is the Han people's marvelous imagination about human origins. Compare with the Fengsu Tong records to see what content was added."
          },
          text: [
            "天地开辟以后，天上有了太阳、月亮和星星，地上有了山川草木，甚至有了鸟兽虫鱼了，可是单单没有人类。",
            "不知道在什么时候，出现了一个神通广大的女神，叫作女娲。有一天，大神女娲行走在莽莽榛榛的原野上，感到非常孤独。她觉得应该添一点儿什么东西进去，让天地生气蓬勃起来。",
            "她顺手从池边掘起一团黄泥，掺和了水，揉团成了第一个娃娃样的小东西。她把这个小东西放到地面上。说也奇怪，这个泥捏的小家伙，刚一接触到地面，马上就活了起来，并且一开口就喊：\u201C妈妈！\u201D",
            "她一心想把这些灵敏的小生物布满大地。但大地太大了。最后她想出了一个绝妙的方法——从崖壁上拉下一条枯藤，伸入泥潭里，搅混了泥浆，向地面上一挥洒，泥点儿溅落的地方，就出现了许多叫着跳着的人儿。",
            "后来她把小人儿分为男女，让他们自己去创造后代。这样，人类就世世代代绵延下来。"
          ],
          textEn: [
            "After heaven and earth were created, the sky had sun, moon, and stars; the earth had mountains, rivers, and creatures — but no humans.",
            "At some unknown time, a powerful goddess named Nüwa appeared. One day, the great goddess Nüwa walked across the thick, wild wilderness and felt terribly lonely. She felt that something should be added to make heaven and earth burst with vitality.",
            "She scooped yellow earth from the pool's edge, mixed it with water, and kneaded a little doll-like figure. She placed it on the ground. Amazingly, the moment this clay figure touched the ground, it came alive and cried: 'Mama!'",
            "She wanted to fill the whole earth with these lively creatures. But the earth was too vast. Finally, she devised a brilliant method — she pulled a vine from a cliff, dipped it in muddy water, and flung it onto the ground. Wherever the mud droplets fell, little people appeared, jumping and calling.",
            "Later she divided them into male and female, letting them create their own offspring. Thus humanity continued from generation to generation."
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
            "赫耳墨斯和雕像者\n赫耳墨斯想知道他在人间受到多大的尊重，就化作凡人，来到一个雕像者的店里。他看见宙斯的雕像，问道：\u201C值多少钱？\u201D\u201C一个银元。\u201D赫耳墨斯又问赫拉的雕像值多少，\u201C还要贵一点儿。\u201D后来看见自己的雕像，问：\u201C这个值多少？\u201D\u201C假如你买了那两个，这个算添头，白送。\u201D\n这故事适用于那些爱慕虚荣而不被人重视的人。",
            "蚊子和狮子\n蚊子飞到狮子面前说：\u201C我不怕你，你并不比我强。\u201D蚊子吹着喇叭冲过去，专咬狮子鼻子周围没有毛的地方。狮子气得用爪子把自己的脸都抓破了。蚊子战胜了狮子，却被蜘蛛网粘住了。\n这故事适用于那些打败过大人物，却被小人物打败的人。",
            "穿井得一人\n宋之丁氏，家无井而出溉汲，常一人居外。及其家穿井，告人曰：\u201C吾穿井得一人。\u201D有闻而传之者：\u201C丁氏穿井得一人。\u201D国人道之，闻之于宋君。宋君令人问之于丁氏，丁氏对曰：\u201C得一人之使，非得一人于井中也。\u201D求闻之若此，不若无闻也。",
            "杞人忧天\n杞国有人忧天地崩坠，身亡所寄，废寝食者。又有忧彼之所忧者，因往晓之，曰：\u201C天，积气耳，亡处亡气。若屈伸呼吸，终日在天中行止，奈何忧崩坠乎？\u201D其人舍然大喜，晓之者亦舍然大喜。"
          ],
          textEn: [
            "Hermes and the Sculptor\nHermes wanted to know how much he was esteemed among mortals, so he disguised himself as a mortal and came to a sculptor's shop. He saw a statue of Zeus and asked: 'How much is it worth?' 'One silver coin.' Hermes then asked how much the statue of Hera was worth. 'A bit more,' was the reply. Later, seeing a statue of himself, he asked: 'How much is this one?' 'If you buy those two, this one comes free as a bonus.'\nThis story applies to those who are vain but not respected by others.",
            "The Mosquito and the Lion\nA mosquito told the lion: 'I'm not afraid of you.' It charged, biting the lion's hairless nose. The lion scratched his own face raw. The victorious mosquito flew away but got caught in a spider's web.\nThis applies to those who defeat the great but are beaten by the small.",
            "Getting a Person by Digging a Well\nThe Ding family of Song had no well and kept one person outside to draw water. When they dug a well, Ding said: 'By digging a well, I gained a person.' Someone passed it on as: 'The Dings found a person in their well.' The Duke of Song investigated, and Ding explained: 'I gained one person's labor, not a person from the well.' Seeking news like this is worse than having no news at all.",
            "The Man of Qi Who Worried About the Sky\nIn Qi, a man worried that heaven and earth would collapse, losing sleep and appetite. Someone went to explain: 'The sky is just accumulated air — why worry about it collapsing?' The man was greatly relieved, and the explainer was also greatly relieved."
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
