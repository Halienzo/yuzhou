/**
 * Enrich textbook_g9s2.js with vocabWords and grammarPoints
 * Grade 9 Semester 2 — All lessons (final semester of junior high)
 * Run: cd /e/chinese && node build/enrich_g9s2.js
 */
const fs = require('fs');
const { enrichByEn, saveAndValidate } = require('./enrich_lib');
let code = fs.readFileSync('textbook_g9s2.js', 'utf8');
const En = (t, v, g) => { code = enrichByEn(code, t, v, g); };

// ═══════════════════════════════════════════
// UNIT 1 — Poetry (诗歌)
// ═══════════════════════════════════════════

// Lesson 1: 祖国啊，我亲爱的祖国
En('O Motherland, My Dear Motherland', [
  ['疲惫','píng bèi','weary; exhausted','数百年来纺着疲惫的歌。','Spinning a weary song for hundreds of years.'],
  ['簇新','cù xīn','brand-new; fresh','我是你簇新的理想，刚从神话的蛛网里挣脱。','I am your brand-new ideal, just breaking free from the spider web of myth.'],
  ['蜗行','wō xíng','to crawl like a snail','照你在历史的隧洞里蜗行摸索。','Lighting your way as you grope through the tunnel of history.'],
  ['喷薄','pēn bó','to surge forth; to burst out','是绯红的黎明正在喷薄。','The crimson dawn is bursting forth.'],
  ['迷惘','mí wǎng','bewildered; confused','你以伤痕累累的乳房喂养了迷惘的我。','With your scarred breast you nourished the bewildered me.']
], [
  ['意象叠加','yì xiàng dié jiā','accumulation of imagery','我是你河边上破旧的老水车……我是你额上熏黑的矿灯……','I am your old, broken waterwheel by the river... I am the soot-blackened miner\u2019s lamp on your forehead...','诗人用一连串意象层层叠加，构成一组宏大的诗歌画面，将抽象的情感具体化。','The poet layers a series of images to form a grand poetic panorama, making abstract emotions concrete.'],
  ['抒情主人公','shū qíng zhǔ rén gōng','lyrical persona','我是你的十亿分之一，是你九百六十万平方的总和。','I am one ten-billionth of you, the sum of your 9.6 million square kilometers.','诗歌中的"我"既是诗人自己，也代表了全体中国人民，是个体与民族的统一。','The "I" in the poem is both the poet herself and a representative of all Chinese people, unifying individual and nation.']
]);

// Lesson 2: 梅岭三章
En('Three Poems at Meiling', [
  ['泉台','quán tái','the netherworld; the realm of the dead','此去泉台招旧部。','I shall go to the netherworld to rally my old comrades.'],
  ['旌旗','jīng qí','banners and flags; military forces','旌旗十万斩阎罗。','Leading a hundred thousand troops to slay the King of Hell.'],
  ['烽烟','fēng yān','beacon fire; war flames','南国烽烟正十年。','The war flames in the south have raged for exactly ten years.'],
  ['捷报','jié bào','news of victory','捷报飞来当纸钱。','Let news of victory fly in to serve as sacrificial paper money.'],
  ['血雨腥风','xuè yǔ xīng fēng','bloody storm; reign of terror','血雨腥风应有涯。','The bloody storm shall have its end.']
], [
  ['绝命诗的传统','jué mìng shī de chuán tǒng','the tradition of farewell-to-life poetry','断头今日意如何？创业艰难百战多。','What are my thoughts today as I face the blade? Establishing our cause has been hard through a hundred battles.','绝命诗是中国文学的特殊体裁，诗人在生死关头写下最后的心声，表达理想与信念。','Farewell-to-life poetry is a special genre in Chinese literature, where poets write their final thoughts at the brink of death, expressing ideals and convictions.']
]);

// Lesson 3: 短诗五首
En('Five Short Poems', [
  ['霜风','shuāng fēng','frosty wind','霜风呼呼的吹着。','The frosty wind blows with a howl.'],
  ['口占','kǒu zhàn','to compose a poem orally; impromptu verse','萧红墓畔口占。','An impromptu poem composed at the grave of Xiao Hong.'],
  ['装饰','zhuāng shì','to decorate; decoration','明月装饰了你的窗子。','The bright moon has decorated your window.'],
  ['卑微','bēi wēi','humble; lowly','我和一株顶高的树并排立着。','I stand side by side with the tallest tree.'],
  ['统一','tǒng yī','unity; unification','叶是不一样的，但是花是一样的。','The leaves are different, but the flowers are the same.']
], null);

// Lesson 4: 海燕
En('The Petrel', [
  ['咆哮','páo xiào','to roar; to howl','看吧，它飞舞着，像个精灵。','Look, it dances like a spirit.'],
  ['翡翠','fěi cuì','emerald; jade green','海浪是翡翠的。','The waves are emerald.'],
  ['号叫','háo jiào','to scream; to shriek','海鸥在暴风雨前头哼着。','The seagull moans before the storm.'],
  ['蠢笨','chǔn bèn','clumsy; stupid','蠢笨的企鹅，畏缩地躲藏着肥胖的身体。','The clumsy penguin timidly hides its fat body.'],
  ['预言者','yù yán zhě','prophet; foreteller','这胜利的预言者叫了。','This prophet of victory cries out.']
], [
  ['象征手法','xiàng zhēng shǒu fǎ','symbolism','让暴风雨来得厉害些吧！','Let the storm come harder!','海燕象征勇敢的革命先驱，暴风雨象征革命风暴，不同的鸟类象征不同阶层的人们。','The petrel symbolizes brave revolutionary pioneers, the storm symbolizes revolution, and different birds symbolize people of different social strata.']
]);

// Writing: 学习扩写
En('Learning to Expand Writing', [
  ['扩写','kuò xiě','to expand (a text); expanded writing','扩写就是在保持原文中心思想的基础上加以扩展。','Expanded writing means developing a text while preserving its central idea.'],
  ['细节描写','xì jié miáo xiě','detailed description','扩写时要增加必要的细节描写。','When expanding, one should add necessary detailed descriptions.'],
  ['想象','xiǎng xiàng','imagination','合理的想象能使文章更加生动。','Reasonable imagination can make writing more vivid.'],
  ['原文','yuán wén','original text; source text','扩写不能改变原文的中心思想。','Expanded writing must not change the central idea of the original.'],
  ['丰富','fēng fù','rich; to enrich','通过扩写使内容更加丰富。','Enriching the content through expansion.']
], null);

// ═══════════════════════════════════════════
// UNIT 2 — Fiction (小说)
// ═══════════════════════════════════════════

// Lesson 5: 孔乙己
En('Kong Yiji', [
  ['阔绰','kuò chuò','lavish; extravagant','大抵没有这样阔绰。','Generally they were not that extravagant.'],
  ['颓唐','tuí táng','dejected; dispirited','孔乙己立刻显出颓唐不安模样。','Kong Yiji immediately looked dejected and uneasy.'],
  ['不屑','bù xiè','to disdain; to scorn','蹴尔而与之，乞人不屑也。','If you kick food toward a beggar, even a beggar will disdain it.'],
  ['绰号','chuò hào','nickname','替他取下一个绰号，叫作孔乙己。','They gave him a nickname: Kong Yiji.'],
  ['羼水','chàn shuǐ','to dilute with water; to adulterate','在这严重监督之下，羼水也很为难。','Under such strict supervision, even watering down the wine was difficult.']
], [
  ['第一人称旁观视角','dì yī rén chēng páng guān shì jiǎo','first-person observer perspective','我从十二岁起，便在镇口的咸亨酒店里当伙计。','From the age of twelve I worked as a helper at the Xianheng Tavern at the edge of town.','小说以酒店小伙计的视角叙述，既是参与者又是旁观者，增强了叙事的客观性和可信度。','The novel narrates from the perspective of a tavern boy who is both participant and observer, enhancing objectivity and credibility.'],
  ['笑声的讽刺功能','xiào shēng de fěng cì gōng néng','the satirical function of laughter','孔乙己一到店，所有喝酒的人便都看着他笑。','Whenever Kong Yiji arrived at the tavern, all the drinkers would look at him and laugh.','小说中反复出现的"笑"是冷漠社会的象征，以喜剧手法写悲剧，增强了讽刺力度。','The recurring "laughter" symbolizes a cold, indifferent society; using comedy to write tragedy strengthens the satirical impact.']
]);

// Lesson 6: 变色龙
En('The Chameleon', [
  ['无精打采','wú jīng dǎ cǎi','listless; lacking energy','商店和饭馆的门无精打采地敞着。','The doors of the shops and restaurants gaped listlessly.'],
  ['异想天开','yì xiǎng tiān kāi','to have a fantastic idea; absurd','简直是异想天开！','That is simply an absurd fantasy!'],
  ['惩处','chéng chǔ','to punish; to penalize','得好好惩处那个人。','That person must be properly punished.'],
  ['洋溢','yáng yì','to overflow; brimming with','他的脸上洋溢着含笑的温情。','His face was brimming with a warm, smiling tenderness.'],
  ['筛子','shāi zi','sieve','跟着一个火红色头发的巡警，端着一个筛子。','Following him was a red-haired policeman carrying a sieve.']
], [
  ['讽刺小说中的对比','fěng cì xiǎo shuō zhōng de duì bǐ','contrast in satirical fiction','好哇，你咬人？该死的东西！','Aha, you bite people? You cursed thing!','奥楚蔑洛夫对同一条狗态度的反复变化，形成鲜明对比，深刻揭示了见风使舵的丑态。','The inspector\u2019s repeated attitude changes toward the same dog form sharp contrasts, deeply exposing the ugly behavior of trimming one\u2019s sails to the wind.']
]);

// Lesson 7: 溜索
En('The Zip Line', [
  ['万丈绝壁','wàn zhàng jué bì','towering sheer cliff','万丈绝壁飞快垂下去。','The towering sheer cliff dropped away at dizzying speed.'],
  ['锱铢','zī zhū','a tiny amount; a trifle','仿佛再有锱铢之力加在上面。','As if the slightest additional force added upon it.'],
  ['盘桓','pán huán','to linger; to wind around','一直是在万丈之处盘桓。','They had been winding around at a height of ten thousand feet all along.'],
  ['涓涓','juān juān','trickling; flowing gently','怒江自西北天际亮亮而来，深远似涓涓细流。','The Nu River came shining from the northwest horizon, appearing deep and distant like a gentle trickle.'],
  ['俯望','fǔ wàng','to look down at; to gaze downward','俯望那江，蓦地心中一颤。','Looking down at the river, my heart suddenly trembled.']
], null);

// Lesson 8: 蒲柳人家（节选）
En('The Willow Family (Excerpt)', [
  ['一丈青','yī zhàng qīng','a tall, strong woman (nickname)','一丈青大娘骂人，就像雨打芭蕉。','Granny Yizhangqing scolding people was like rain beating on banana leaves.'],
  ['隐匿','yǐn nì','to hide; to conceal','何满子把脸隐匿在门后。','He Manzi hid his face behind the door.'],
  ['腌臜','ā zā','dirty; filthy','你这个腌臜泼才。','You filthy rascal.'],
  ['戏谑','xì xuè','to banter; to tease','他只顾嘻嘻哈哈地戏谑一番。','He just kept laughing and bantering.'],
  ['嘎咕','gā gu','to make noise; to squabble','何满子天不怕地不怕，却怕爷爷。','He Manzi feared nothing in heaven or earth, except his grandfather.']
], null);

// Writing: 审题立意
En('Analyzing the Topic and Establishing the Theme', [
  ['审题','shěn tí','to analyze the topic; to examine the prompt','写作前必须认真审题。','Before writing, one must carefully analyze the topic.'],
  ['立意','lì yì','to establish the theme; to determine the main idea','立意要新颖、深刻。','The theme should be fresh and profound.'],
  ['切题','qiē tí','to be relevant to the topic','作文要紧扣题目，切题表达。','Compositions should stick closely to the topic and express ideas relevantly.'],
  ['偏题','piān tí','to stray from the topic','审题不仔细容易偏题。','Careless analysis of the topic easily leads to straying off topic.'],
  ['中心思想','zhōng xīn sī xiǎng','central idea; main theme','每篇文章都应有明确的中心思想。','Every article should have a clear central idea.']
], null);

// Activity: 岁月如歌——我们的初中生活
En('Time Flies Like a Song \\u2014 Our Junior High Life', [
  ['岁月','suì yuè','years; time','岁月如歌，初中三年转瞬即逝。','Time flies like a song; three years of junior high pass in a flash.'],
  ['回顾','huí gù','to look back; to review','回顾初中生活的点点滴滴。','Looking back on the bits and pieces of junior high life.'],
  ['毕业','bì yè','to graduate; graduation','即将毕业，依依不舍。','About to graduate, reluctant to part.'],
  ['师恩','shī ēn','the kindness of a teacher','师恩难忘，铭记于心。','The kindness of teachers is unforgettable, engraved in the heart.'],
  ['成长','chéng zhǎng','to grow up; growth','初中三年是成长的关键阶段。','The three years of junior high are a crucial stage of growth.']
], null);

// ═══════════════════════════════════════════
// UNIT 3 — Classical Chinese (文言经典)
// ═══════════════════════════════════════════

// Lesson 9: 鱼我所欲也
En('Fish Is What I Desire', [
  ['苟得','gǒu dé','to gain something by improper means; to scrape by','故不为苟得也。','Therefore I will not live by compromising my principles.'],
  ['蹴尔','cù ěr','to kick at someone contemptuously','蹴尔而与之，乞人不屑也。','If you kick food toward a beggar, even a beggar will disdain it.'],
  ['本心','běn xīn','original heart; innate moral sense','此之谓失其本心。','This is called losing one\u2019s innate moral sense.'],
  ['所欲','suǒ yù','what one desires','所欲有甚于生者。','There are things I desire more than life itself.'],
  ['万钟','wàn zhōng','a very generous salary','万钟则不辩礼义而受之。','For a generous salary one may accept without considering propriety and righteousness.']
], [
  ['类比论证','lèi bǐ lùn zhèng','argument by analogy','鱼，我所欲也；熊掌，亦我所欲也。二者不可得兼，舍鱼而取熊掌者也。','Fish is what I desire; bear paw is also what I desire. If I cannot have both, I will give up fish and take bear paw.','用生活中常见的取舍作类比，引出舍生取义的论点，使抽象道理变得浅显易懂。','Using a common choice in daily life as an analogy leads to the argument of sacrificing life for righteousness, making an abstract principle easy to understand.'],
  ['正反对比论证','zhèng fǎn duì bǐ lùn zhèng','positive-negative contrast argument','一箪食，一豆羹，得之则生，弗得则死。呼尔而与之，行道之人弗受。','A basket of rice, a bowl of broth: getting them means life, not getting them means death. Yet if offered with contempt, even a passerby will refuse.','通过对比"义"与"不义"的行为选择，强化了文章的说服力和道德感召力。','By contrasting choices of righteousness and unrighteousness, the persuasive power and moral appeal of the essay are strengthened.']
]);

// Lesson 10: 唐雎不辱使命
En('Tang Ju Fulfills His Mission', [
  ['布衣','bù yī','a commoner; plain-clothed person','大王尝闻布衣之怒乎？','Has Your Majesty heard of the wrath of a commoner?'],
  ['怫然','fú rán','furiously; in a rage','秦王怫然怒。','The King of Qin flew into a rage.'],
  ['免冠徒跣','miǎn guān tú xiǎn','to remove one\u2019s cap and go barefoot (sign of distress)','布衣之怒，亦免冠徒跣，以头抢地尔。','When a commoner is angry, he removes his cap, bares his feet, and bangs his head on the ground.'],
  ['色挠','sè náo','to look cowed; to lose composure','秦王色挠，长跪而谢之。','The King of Qin looked cowed and knelt on both knees to apologize.'],
  ['挺剑','tǐng jiàn','to draw one\u2019s sword','挺剑而起。','He drew his sword and rose.']
], [
  ['外交辞令','wài jiāo cí lìng','diplomatic language','安陵君受地于先王而守之，虽千里不敢易也，岂直五百里哉？','Anling\u2019s lord received this land from the former king and guards it; he would not dare exchange even a thousand li, let alone a mere five hundred.','唐雎的外交辞令有理有节，既坚守立场又不直接冒犯对方，体现了高超的论辩艺术。','Tang Ju\u2019s diplomatic language is principled yet measured, firmly holding his position without directly offending the other party, demonstrating superb rhetorical skill.']
]);

// Lesson 11: 送东阳马生序
En('Preface to Sending Off Ma Sheng of Dongyang', [
  ['嗜学','shì xué','to love learning; devoted to study','余幼时即嗜学。','From childhood I was devoted to learning.'],
  ['假借','jiǎ jiè','to borrow','每假借于藏书之家。','I would borrow from families that had book collections.'],
  ['逾约','yú yuē','to exceed the deadline','录毕，走送之，不敢稍逾约。','After copying, I would run to return them, never daring to exceed the deadline.'],
  ['叱咄','chì duō','to scold harshly; to berate','或遇其叱咄，色愈恭，礼愈至。','Sometimes meeting with harsh scolding, my manner became even more respectful, my courtesy even more thorough.'],
  ['缊袍敝衣','yùn páo bì yī','ragged clothes stuffed with old cotton','余则缊袍敝衣处其间。','I sat among them in ragged clothes stuffed with old cotton.']
], [
  ['对比手法','duì bǐ shǒu fǎ','contrast technique','同舍生皆被绮绣……余则缊袍敝衣处其间，略无慕艳意。','My fellow students all wore fine embroidered clothes... I sat among them in ragged clothing, without the slightest envy.','通过作者求学的艰苦条件与同舍生的优越条件进行对比，突出了作者以学为乐的精神。','By contrasting the author\u2019s harsh study conditions with his fellow students\u2019 comfortable circumstances, the text highlights the author\u2019s spirit of finding joy in learning.']
]);

// Lesson 12: 词四首
En('Four Ci Poems', [
  ['燕然未勒','yān rán wèi lè','the deed at Mount Yanran remains unaccomplished (military glory not yet achieved)','燕然未勒归无计。','With glory unachieved, there is no plan for return.'],
  ['千骑','qiān jì','a thousand riders','千骑卷平冈。','A thousand riders sweep across the flat ridge.'],
  ['挽雕弓','wǎn diāo gōng','to draw a carved bow','会挽雕弓如满月。','I shall draw the carved bow to its full like a round moon.'],
  ['了却','liǎo què','to accomplish; to settle','了却君王天下事。','To accomplish the affairs of the kingdom for the ruler.'],
  ['四面楚歌','sì miàn chǔ gē','to be besieged on all sides','四面歌残终破楚。','Songs dying on all four sides, Chu is finally broken.']
], [
  ['豪放词','háo fàng cí','bold and unconstrained ci poetry','老夫聊发少年狂，左牵黄，右擎苍。','Let this old man indulge once more in youthful fervor: holding a yellow hound on the left, a grey falcon on the right.','豪放词以气势磅礴、意境开阔为特征，抒发的多是报国壮志和英雄情怀。','Bold ci poetry is characterized by its grand momentum and expansive imagery, often expressing patriotic ambitions and heroic sentiments.']
]);

// Writing: 布局谋篇
En('Planning Structure and Layout', [
  ['布局','bù jú','layout; structure','写文章要先布局谋篇。','Before writing, one must first plan the structure and layout.'],
  ['谋篇','móu piān','to plan a composition','谋篇是写作的重要环节。','Planning the composition is a crucial step in writing.'],
  ['过渡','guò dù','transition','段落之间需要合理过渡。','Reasonable transitions are needed between paragraphs.'],
  ['照应','zhào yìng','to echo; to correspond','前后照应使文章结构严谨。','Front-to-back correspondence makes the structure of writing tight.'],
  ['线索','xiàn suǒ','clue; thread (of a story)','一条线索贯穿全文。','A single thread runs through the entire text.']
], null);

// Reading: 《儒林外史》
En('The Scholars \\u2014 Reading Satirical Works', [
  ['讽刺','fěng cì','satire; to satirize','《儒林外史》是一部杰出的讽刺小说。','The Scholars is an outstanding satirical novel.'],
  ['科举','kē jǔ','imperial civil examination system','科举制度是小说讽刺的主要对象。','The imperial examination system is the main target of the novel\u2019s satire.'],
  ['白描','bái miáo','plain sketch; unadorned description','小说善于通过白描揭示人物精神世界。','The novel excels at revealing characters\u2019 inner worlds through unadorned description.'],
  ['功名利禄','gōng míng lì lù','fame and fortune; official rank and salary','士人们追求功名利禄的丑态。','The ugly behavior of scholars pursuing fame and fortune.'],
  ['人情世态','rén qíng shì tài','human feelings and worldly conditions','折射出世态人情和时代风貌。','Reflecting worldly conditions, human feelings, and the characteristics of the era.']
], null);

// Extra poem: 定风波
En('Calming the Waves', [
  ['吟啸','yín xiào','to chant and whistle','何妨吟啸且徐行。','Why not chant and whistle while walking at a leisurely pace?'],
  ['竹杖','zhú zhàng','bamboo staff','竹杖芒鞋轻胜马。','A bamboo staff and straw sandals feel lighter than a horse.'],
  ['萧瑟','xiāo sè','desolate; rustling','回首向来萧瑟处。','Looking back at the desolate place I came from.'],
  ['料峭','liào qiào','chilly (spring cold)','料峭春风吹酒醒。','The chilly spring wind sobered me from my wine.'],
  ['蓑衣','suō yī','straw raincoat','一蓑烟雨任平生。','In a straw raincoat amid mist and rain, I shall live my life as I please.']
], null);

// Extra poem: 临江仙·夜登小阁忆洛中旧游
En('Immortal by the River: Climbing the Little Tower at Night', [
  ['杏花疏影','xìng huā shū yǐng','sparse shadows of apricot blossoms','杏花疏影里，吹笛到天明。','Among the sparse shadows of apricot blossoms, we played the flute until dawn.'],
  ['旧游','jiù yóu','old travels; past excursions','二十余年如一梦，此身虽在堪惊。','Twenty-some years seem like a dream; though I am still alive, it is astonishing.'],
  ['闲登','xián dēng','to climb leisurely','闲登小阁看新晴。','Leisurely climbing the little tower to view the clearing sky.'],
  ['古今','gǔ jīn','past and present; ancient and modern','古今多少事，渔唱起三更。','How many events of past and present? The fisherman begins his song at the third watch.'],
  ['长沟','cháng gōu','long canal','长沟流月去无声。','The long canal carries the moon away without a sound.']
], null);

// Extra poem: 太常引·建康中秋夜为吕叔潜赋
En('Taichang Melody: Mid-Autumn Night at Jiankang', [
  ['金波','jīn bō','golden waves; moonlight on water','一轮秋影转金波。','A round autumn moon turns with golden waves.'],
  ['玉斧','yù fǔ','jade axe','斫去桂婆娑，人道是，清光更多。','If one chops away the dancing cassia tree, they say there would be even more clear light.'],
  ['婆娑','pó suō','dancing; swaying','斫去桂婆娑。','Chop away the dancing cassia tree.'],
  ['乘风','chéng fēng','to ride the wind','乘风好去，长空万里，直下看山河。','Riding the wind, traversing the vast sky, I look directly down upon the mountains and rivers.'],
  ['被白发','bèi bái fà','covered with white hair','被白发，欺人奈何。','Covered with white hair, how does aging torment a person?']
], null);

// Extra poem: 浣溪沙
En('Washing Creek Sand (Heading Toward the Clouded Mountains)', [
  ['西风','xī fēng','west wind; autumn wind','身向云山那畔行。','Heading toward the far side of the clouded mountains.'],
  ['薄暮','bó mù','dusk; twilight','一抹晚烟荒戍垒。','A wisp of evening smoke over a desolate garrison wall.'],
  ['聒碎','guō suì','to shatter (quiet) with noise','聒碎乡心梦不成。','The noise shatters my homesick heart, making dreams impossible.'],
  ['更灯','gēng dēng','night-watch lamp','夜深千帐灯。','Deep in the night, a thousand tents glow with lamplight.'],
  ['那畔','nà pàn','the other side; yonder','身向云山那畔行。','Heading toward the far side of the clouded mountains.']
], null);

// ═══════════════════════════════════════════
// UNIT 4 — Essays (议论散文)
// ═══════════════════════════════════════════

// Lesson 13: 短文两篇
En('Two Short Essays', [
  ['怡情','yí qíng','to delight the spirit; recreation','读书足以怡情，足以傅彩，足以长才。','Reading is sufficient for delight, for ornamentation, and for growing one\u2019s abilities.'],
  ['练达','liàn dá','worldly-wise; experienced','练达之士虽能分别处理细事。','Experienced people can handle small matters individually.'],
  ['味同嚼蜡','wèi tóng jiáo là','as tasteless as chewing wax','书经提炼犹如水经蒸馏，味同嚼蜡矣。','A condensed book is like distilled water, as tasteless as chewing wax.'],
  ['不求甚解','bù qiú shèn jiě','not to seek excessive detail; to accept general understanding','一般人以为不求甚解都是不好的。','Most people think that not seeking thorough understanding is always bad.'],
  ['咀嚼消化','jǔ jué xiāo huà','to chew and digest (metaphor for deep reading)','少数则须咀嚼消化。','A few must be chewed and digested.']
], [
  ['格言体议论文','gé yán tǐ yì lùn wén','aphoristic essay','读史使人明智，读诗使人灵秀。','Histories make men wise; poets make men witty.','培根的《谈读书》以格言式的精炼语言，高度概括读书的功用和方法，言简意赅。','Bacon\u2019s On Studies uses concise, aphoristic language to comprehensively summarize the functions and methods of reading, being brief yet thorough.'],
  ['驳论','bó lùn','refutational argument','盲目地反对不求甚解的态度同样没有充分的理由。','Blindly opposing the attitude of not seeking thorough understanding is equally without adequate reason.','先树立批驳目标，再逐步论证，提出自己的观点，是驳论文的基本思路。','First establishing the target for refutation, then arguing step by step, and presenting one\u2019s own viewpoint is the basic approach of a refutational essay.']
]);

// Lesson 14: 山水画的意境
En('The Artistic Conception of Landscape Painting', [
  ['意境','yì jìng','artistic conception; mood and atmosphere','意境是山水画的灵魂。','Artistic conception is the soul of landscape painting.'],
  ['情景交融','qíng jǐng jiāo róng','the blending of emotion and scenery','写景就是写情。','To depict scenery is to depict emotion.'],
  ['惆怅','chóu chàng','melancholy; wistful','这里包含着朋友惜别的惆怅。','This contains the melancholy of friends parting reluctantly.'],
  ['身临其境','shēn lín qí jìng','to be there in person; immersive','要深入全面地认识对象，必须身临其境。','To deeply and thoroughly understand the subject, one must be there in person.'],
  ['胸有丘壑','xiōng yǒu qiū hè','to have hills and valleys in one\u2019s breast (artistic vision)','画家必须胸有丘壑。','A painter must have an inner landscape in his mind.']
], [
  ['以诗论画','yǐ shī lùn huà','discussing painting through poetry','故人西辞黄鹤楼，烟花三月下扬州。','My old friend bids farewell west of Yellow Crane Tower, descending to Yangzhou amid the misty blossoms of March.','作者引用古诗来阐释绘画中的意境理论，实现了诗与画的相互印证。','The author cites classical poetry to explain the theory of artistic conception in painting, achieving mutual illustration between poetry and painting.']
]);

// Lesson 15: 无言之美
En('The Beauty of Silence', [
  ['意蕴','yì yùn','implied meaning; connotation','要想明了无言的意蕴。','To understand the connotation of silence.'],
  ['言不尽意','yán bù jìn yì','words cannot fully express meaning','意决不是完全可以言达的。','Meaning can never be completely conveyed through words.'],
  ['含蓄不露','hán xù bù lù','implicit and restrained','他所表现的悲哀是含蓄不露的。','The sorrow he expresses is implicit and restrained.'],
  ['铢两悉称','zhū liǎng xī chèn','to match exactly in every detail','笔之于书的和存之于心的铢两悉称。','What is written matches what is in the heart in every detail.'],
  ['尽善尽美','jìn shàn jìn měi','to be perfect in every way','尽美尽善的条件很多。','There are many conditions for achieving perfection.']
], null);

// Lesson 16: 驱遣我们的想象
En('Driving Our Imagination', [
  ['驱遣','qū qiǎn','to drive; to deploy','必须驱遣我们的想象。','We must deploy our imagination.'],
  ['拘泥','jū nì','to be rigid; to stick stubbornly to','不能够拘泥于文字。','One must not stick stubbornly to the literal text.'],
  ['鉴赏','jiàn shǎng','to appreciate; to appraise','鉴赏文艺，最大目的无非是接受美感的经验。','The greatest purpose of appreciating literature is to receive the experience of beauty.'],
  ['意境','yì jìng','artistic mood; conception','在想象中睁开眼睛来看这十个文字所构成的一幅图画。','Open your eyes in your imagination to see the picture formed by these ten characters.'],
  ['受用','shòu yòng','to benefit; to enjoy','得到人生的受用。','To gain enjoyment and benefit in life.']
], null);

// Writing: 修改润色
En('Revising and Polishing', [
  ['润色','rùn sè','to polish; to embellish','文章写成后要修改润色。','After finishing a composition, one should revise and polish it.'],
  ['推敲','tuī qiāo','to deliberate; to weigh words carefully','推敲用词，使之准确恰当。','Deliberate over word choice to make it precise and appropriate.'],
  ['增删','zēng shān','to add and delete; to revise','曹雪芹披阅十载，增删五次。','Cao Xueqin reviewed his work for ten years and revised it five times.'],
  ['炼字','liàn zì','to refine wording; to choose words carefully','适当炼字、炼句，可以使文章更加生动。','Careful word and sentence refinement can make writing more vivid.'],
  ['定稿','dìng gǎo','to finalize a manuscript','鲁迅先后改动九十多处才最终定稿。','Lu Xun made over ninety revisions before finalizing the manuscript.']
], null);

// Oral: 辩论
En('Debate', [
  ['辩论','biàn lùn','debate; to debate','辩论是一种常用的口语交际方式。','Debate is a commonly used form of oral communication.'],
  ['论据','lùn jù','argument; evidence','论据要充分有力。','Evidence should be sufficient and strong.'],
  ['反驳','fǎn bó','to refute; to rebut','辩驳对方的错误或疏漏之处。','Refuting the errors or oversights of the opposing side.'],
  ['总结陈词','zǒng jié chén cí','closing statement','四辩负责总结陈词。','The fourth debater is responsible for the closing statement.'],
  ['唇枪舌剑','chún qiāng shé jiàn','sharp verbal exchange; heated debate','站在辩论场上，进行唇枪舌剑之战。','Standing in the debate arena, engaging in a battle of sharp verbal exchanges.']
], null);

// ═══════════════════════════════════════════
// UNIT 5 — Drama (戏剧)
// ═══════════════════════════════════════════

// Lesson 17: 屈原（节选）
En('Erta \u2014 Qu Yuan (Excerpt)', [
  ['咆哮','páo xiào','to roar; to howl','风！你咆哮吧！咆哮吧！','Wind! Roar! Roar!'],
  ['伫立','zhù lì','to stand for a long time','时而伫立睥睨，目中含有怒火。','At times he stood and glared, his eyes containing angry fire.'],
  ['睥睨','pì nì','to look down upon with disdain','时而伫立睥睨。','At times he stood and glared disdainfully.'],
  ['犀利','xī lì','sharp; incisive','啊，电！你这宇宙中最犀利的剑呀！','Ah, lightning! You are the sharpest sword in the universe!'],
  ['炸裂','zhà liè','to burst; to explode','炸裂呀，我的身体！','Burst apart, my body!']
], [
  ['戏剧独白','xì jù dú bái','dramatic monologue','风！你咆哮吧！咆哮吧！尽力地咆哮吧！','Wind! Roar! Roar! Roar with all your might!','大段独白是表达人物内心世界的重要手段，屈原的独白借风雷电抒发了对黑暗的愤怒和对光明的渴望。','Extended monologues are an important means of expressing a character\u2019s inner world; Qu Yuan\u2019s monologue uses wind, thunder, and lightning to express rage against darkness and longing for light.'],
  ['象征与隐喻','xiàng zhēng yǔ yǐn yù','symbolism and metaphor','把这比铁还坚固的黑暗，劈开，劈开，劈开！','Split open this darkness harder than iron, split it, split it!','剧中的"风""雷""电"象征正义力量，"黑暗"象征反动势力，通过象征使抽象主题具象化。','In the play, "wind," "thunder," and "lightning" symbolize the forces of justice, while "darkness" symbolizes reactionary forces, using symbolism to make abstract themes concrete.']
]);

// Lesson 18: 天下第一楼（节选）
En('The Best Restaurant Under Heaven (Excerpt)', [
  ['鼎盛','dǐng shèng','at the peak; flourishing','此时是福聚德的鼎盛时期。','This was the peak period of Fujude.'],
  ['名噪京师','míng zào jīng shī','famous throughout the capital','福聚德已是赫赫扬扬，名噪京师。','Fujude was illustrious and renowned throughout the capital.'],
  ['撂杆','liào gān','to put down one\u2019s tools (quit)','我一撂杆不干，福聚德就得关门。','If I put down my tools, Fujude will have to close.'],
  ['窝囊','wō nang','cowardly; weak','老爷子就这么窝囊死的。','The old man died so weak and humiliated.'],
  ['怯懦','qiè nuò','timid; cowardly','王子西怯懦地应声。','Wang Zixi timidly responded.']
], [
  ['戏剧冲突','xì jù chōng tū','dramatic conflict','一个人干，八个人拆。','One person builds, eight people tear down.','话剧通过多重矛盾冲突推动情节发展：东家与掌柜、师傅与徒弟、内部与外部的矛盾层层叠加。','The play drives the plot through multiple layers of conflict: between owner and manager, master and apprentice, internal and external struggles.']
]);

// Lesson 19: 枣儿
En('Dates (Zaor)', [
  ['喃喃自语','nán nán zì yǔ','to murmur to oneself','怎么没人来吃枣儿呢？','Why is no one coming to eat dates?'],
  ['蹑手蹑脚','niè shǒu niè jiǎo','on tiptoe; stealthily','男孩蹑手蹑脚地走过去捡枣儿。','The boy tiptoed over stealthily to pick up the date.'],
  ['喜出望外','xǐ chū wàng wài','overjoyed; pleasantly surprised','谢谢爷爷！枣儿真大。','Thank you, grandpa! The dates are really big.'],
  ['威严','wēi yán','stern; dignified','叫你过来就过来。','Come here when you are told to come.'],
  ['皱巴巴','zhòu bā bā','wrinkled; shriveled','和你脸一样，皱巴巴的。','Just like your face, all wrinkled.']
], [
  ['舞台象征','wǔ tái xiàng zhēng','stage symbolism','一棵挂满红枣的老树。','An old tree laden with red dates.','枣树象征故乡和传统，枣儿象征亲情与牵挂，整个舞台意象寄托了对乡土文化流失的感伤。','The date tree symbolizes hometown and tradition, the dates symbolize family bonds and longing, and the entire stage imagery conveys grief over the loss of rural culture.']
]);

// ═══════════════════════════════════════════
// UNIT 6 — Classical Chinese II (文言经典二)
// ═══════════════════════════════════════════

// Lesson 20: 曹刿论战
En('Cao Gui on the Battle', [
  ['肉食者','ròu shí zhě','meat-eaters (those in power)','肉食者谋之，又何间焉？','Those in power will plan it; why should you get involved?'],
  ['小惠','xiǎo huì','small favor','小惠未遍，民弗从也。','Small favors have not reached everyone; the people will not follow.'],
  ['一鼓作气','yī gǔ zuò qì','to succeed in one vigorous effort','一鼓作气，再而衰，三而竭。','The first drum rouses spirits, the second weakens them, the third exhausts them.'],
  ['辙乱旗靡','zhé luàn qí mǐ','wheel-tracks in disorder and banners fallen (signs of rout)','吾视其辙乱，望其旗靡，故逐之。','I saw their wheel-tracks in disorder and their banners fallen, so I pursued them.'],
  ['败绩','bài jì','to suffer a crushing defeat','齐师败绩。','The army of Qi was routed.']
], [
  ['详略得当','xiáng lüè dé dàng','appropriate balance of detail and brevity','公将鼓之。刿曰：未可。','The Duke was about to order the drums struck. Gui said: Not yet.','本文详写论战，略写战争过程，突出曹刿的军事才能和远见卓识。','The text elaborates on the discussion of strategy while briefly covering the battle itself, highlighting Cao Gui\u2019s military talent and foresight.']
]);

// Lesson 21: 邹忌讽齐王纳谏
En('Zou Ji Advises the King of Qi to Accept Counsel', [
  ['讽谏','fěng jiàn','to remonstrate through analogy; indirect admonishment','邹忌以自身经历讽谏齐王。','Zou Ji used his own experience to indirectly advise the King of Qi.'],
  ['昳丽','yì lì','handsome; beautiful','邹忌修八尺有余，而形貌昳丽。','Zou Ji was over eight chi tall and had a handsome appearance.'],
  ['门庭若市','mén tíng ruò shì','the courtyard was like a marketplace (crowded with visitors)','令初下，群臣进谏，门庭若市。','When the decree was first issued, ministers came to offer advice and the court was like a marketplace.'],
  ['面刺','miàn cì','to criticize face to face','群臣吏民能面刺寡人之过者。','Any minister, official, or citizen who can criticize my faults to my face.'],
  ['蔽','bì','to be deceived; to have one\u2019s vision obscured','王之蔽甚矣。','Your Majesty has been greatly deceived.']
], [
  ['设喻说理','shè yù shuō lǐ','reasoning through analogy','臣之妻私臣，臣之妾畏臣，臣之客欲有求于臣。','My wife favors me, my concubine fears me, and my guest wants something from me.','邹忌用自身比美的小事类比治国的大道理，由家及国，由小见大，委婉而有说服力。','Zou Ji uses his personal experience of comparing appearances as an analogy for governance, moving from family to state, from small to large, in a tactful and persuasive manner.'],
  ['三叠式结构','sān dié shì jié gòu','triple-layered structure','三问答——三类比——三赏赐——三变化。','Three questions and answers, three analogies, three levels of reward, three stages of change.','文章以"三"为结构框架，层层对照，整齐而富有变化，体现了先秦散文的艺术美。','The essay uses "three" as its structural framework, creating layer upon layer of parallels, orderly yet varied, embodying the artistic beauty of pre-Qin prose.']
]);

// Writing: 有创意地表达
En('Creative Expression', [
  ['创意','chuàng yì','creativity; creative idea','写作要有自己独特的创意。','Writing should have one\u2019s own unique creativity.'],
  ['新颖','xīn yǐng','novel; fresh','选材要新颖独到。','The choice of material should be novel and distinctive.'],
  ['独到','dú dào','unique; original','表达方式要独到。','The mode of expression should be original.'],
  ['角度','jiǎo dù','angle; perspective','从不同角度切入主题。','Approach the theme from different angles.'],
  ['别出心裁','bié chū xīn cái','to come up with something original','文章贵在别出心裁。','The value of writing lies in originality.']
], null);

// Reading: 《简·爱》
En('Jane Eyre', [
  ['自尊','zì zūn','self-respect; self-esteem','简·爱是一个具有强烈自尊心的女性。','Jane Eyre is a woman with a strong sense of self-respect.'],
  ['独立','dú lì','independent; independence','她追求人格独立和精神自由。','She pursues personal independence and spiritual freedom.'],
  ['抗争','kàng zhēng','to resist; to struggle against','她不屈不挠地与命运抗争。','She struggles unyieldingly against fate.'],
  ['平等','píng děng','equal; equality','她渴望获得平等的对待。','She yearns to be treated with equality.'],
  ['坚韧','jiān rèn','tenacious; resilient','简·爱的坚韧品格令人敬佩。','Jane Eyre\u2019s tenacious character commands admiration.']
], null);

// Extra poem: 南安军
En('At Nan\\u2019an Garrison', [
  ['梅花','méi huā','plum blossom','梅花南北路，风雨湿征衣。','On the plum blossom road between north and south, wind and rain soak my traveling clothes.'],
  ['出岭','chū lǐng','to cross the mountain pass','出岭同谁出？归乡如此归！','Crossing the pass with whom? Returning home in such a manner!'],
  ['饥死','jī sǐ','to starve to death','饥死真吾志，梦中行采薇。','Starving to death is truly my resolve; in dreams I walk gathering ferns.'],
  ['征衣','zhēng yī','traveling clothes; military garments','风雨湿征衣。','Wind and rain soak my traveling clothes.'],
  ['采薇','cǎi wēi','to gather ferns (allusion to Boyi and Shuqi)','梦中行采薇。','In dreams I walk gathering ferns.']
], null);

// Extra poem: 别云间
En('Farewell to Yunjian', [
  ['毅魄','yì pò','resolute spirit','毅魄归来日，灵旗空际看。','On the day my resolute spirit returns, look for the spirit banner in the sky.'],
  ['无限山河泪','wú xiàn shān hé lèi','endless tears for the mountains and rivers','无限山河泪，谁言天地宽。','Endless tears for the mountains and rivers; who can say that heaven and earth are vast?'],
  ['已知泉路近','yǐ zhī quán lù jìn','knowing the road to the underworld is near','已知泉路近，欲别故乡难。','Knowing the road to the underworld is near, it is hard to bid farewell to my homeland.'],
  ['灵旗','líng qí','spirit banner','灵旗空际看。','Look for the spirit banner in the sky.'],
  ['俘虏','fú lǔ','captive; prisoner of war','三年羁旅客，今日又南冠。','Three years a traveling captive, today again wearing the southern prisoner\u2019s cap.']
], null);

// Extra poem: 山坡羊·骊山怀古
En('Shanpuyang: Meditating on the Past at Li Mountain', [
  ['骊山','lí shān','Li Mountain (near Xi\u2019an)','骊山四顾，阿房一炬。','Looking around from Li Mountain, Epang Palace burned in a single blaze.'],
  ['阿房','ē páng','Epang Palace','阿房一炬，当时奢侈今何处？','Epang Palace burned; where is that extravagance today?'],
  ['兴亡','xīng wáng','rise and fall (of dynasties)','赢，都变做了土；输，都变做了土。','Win or lose, all becomes dust.'],
  ['奢侈','shē chǐ','extravagant; luxurious','当时奢侈今何处？','Where is that extravagance today?'],
  ['怀古','huái gǔ','to meditate on the past; to reflect on history','只见草萧疏，水萦纡。','Only sparse grass and winding waters are seen.']
], null);

// Extra poem: 朝天子·咏喇叭
En('Chaotianzi: Ode to the Trumpet', [
  ['喇叭','lǎ ba','trumpet; horn','喇叭，唢呐，曲儿小腔儿大。','Trumpet, suona: small tunes but a big sound.'],
  ['唢呐','suǒ nà','suona (Chinese double-reed instrument)','喇叭，唢呐，曲儿小腔儿大。','Trumpet, suona: small tunes but a big sound.'],
  ['官船','guān chuán','official boat','官船来往乱如麻。','Official boats come and go, tangled like hemp.'],
  ['吹翻','chuī fān','to blow over; to topple','吹翻了这家，吹伤了那家。','Blowing over this family, blowing damage on that family.'],
  ['眼见','yǎn jiàn','to witness','眼见的吹翻了这家。','Witnessing this family being blown over.']
], null);

// ═══════════════════════════════════════════
// Save and validate
// ═══════════════════════════════════════════
saveAndValidate('textbook_g9s2.js', code, 'TB_G9S2');
