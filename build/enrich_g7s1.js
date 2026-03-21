/**
 * Enrich textbook_g7s1.js with vocabWords and grammarPoints
 * Run: cd /e/chinese && node build/enrich_g7s1.js
 */
const fs = require('fs');
const { enrichByEn, saveAndValidate } = require('./enrich_lib');
let code = fs.readFileSync('textbook_g7s1.js', 'utf8');
const En = (t, v, g) => { code = enrichByEn(code, t, v, g); };

// ============================================================
// UNIT 1 — Seasons and Nature (4 lessons + 3 supplements)
// ============================================================

// Lesson 1: 春 (Spring) — Zhu Ziqing
En('Spring', [
  ['朗润','lǎng rùn','bright and moist','山朗润起来了，水涨起来了。','The mountains became bright and moist, the waters rose.'],
  ['酝酿','yùn niàng','brew; develop gradually','都在微微润湿的空气里酝酿。','All brewing in the slightly moist air.'],
  ['嫩绿','nèn lǜ','tender green','小草偷偷地从土里钻出来，嫩嫩的，绿绿的。','The grass secretly poked out of the earth, tender and green.'],
  ['抖擞','dǒu sǒu','invigorate','舒活舒活筋骨，抖擞抖擞精神。','Stretch the muscles and bones, invigorate the spirit.'],
  ['花枝招展','huā zhī zhāo zhǎn','gorgeously dressed','春天像小姑娘，花枝招展的，笑着，走着。','Spring is like a young girl, gorgeously dressed, smiling and walking.']
], [
  ['比喻','bǐ yù','simile and metaphor','春天像刚落地的娃娃，从头到脚都是新的。','Spring is like a newborn baby, new from head to toe.','用比喻修辞手法将春天具体化，增强形象感','Use simile to make spring concrete and vivid'],
  ['拟人','nǐ rén','personification','小草偷偷地从土里钻出来。','The grass secretly poked out of the earth.','赋予植物人的动作，表现春天的生机','Give plants human actions to show the vitality of spring']
]);

// Lesson 2: 济南的冬天 (Winter in Jinan) — Lao She
En('Winter in Jinan', [
  ['温晴','wēn qíng','warm and sunny','在北中国的冬天，而能有温晴的天气。','In the winter of north China, to have warm and sunny weather.'],
  ['响晴','xiǎng qíng','perfectly clear','济南的冬天是响晴的。','The winter in Jinan is perfectly clear.'],
  ['安适','ān shì','comfortable and cozy','全在蓝天下很暖和安适地睡着。','All sleeping warm and cozy under the blue sky.'],
  ['水墨画','shuǐ mò huà','ink wash painting','这是张小水墨画，也许是唐代的名手画的吧。','This is a small ink wash painting, perhaps by a master of the Tang dynasty.'],
  ['空灵','kōng líng','ethereal; crystalline','整个的是块空灵的蓝水晶。','The whole thing is an ethereal blue crystal.']
], [
  ['对比','duì bǐ','contrast','对于一个在北平住惯的人，像我，冬天要是不刮大风，便觉得是奇迹。','For someone used to living in Beiping, like me, it is a miracle if there is no strong wind in winter.','通过与北平、伦敦对比突出济南冬天的温暖','Highlight the warmth of Jinan winter by contrasting with Beiping and London']
]);

// Lesson 3: 雨的四季 (Rain in Four Seasons) — Liu Zhanchun
En('Rain in Four Seasons', [
  ['静谧','jìng mì','tranquil; serene','是使人静谧、使人怀想、使人动情的秋雨啊！','It is the autumn rain that makes people tranquil, nostalgic, and emotional!'],
  ['高邈','gāo miǎo','high and distant','你只会感到更高邈、深远。','You will only feel it more high and distant, profound.'],
  ['莅临','lì lín','arrive (of honored guests)','它经常变成美丽的雪花，飘然莅临人间。','It often turns into beautiful snowflakes, gracefully arriving in the human world.'],
  ['粗犷','cū guǎng','bold and uninhibited','夏天的雨也有夏天的性格，热烈而又粗犷。','Summer rain has the character of summer, passionate and bold.'],
  ['吝啬','lìn sè','stingy; sparing','它变得更吝啬了。','It becomes more sparing.']
], null);

// Lesson 4: 古代诗歌四首 (Four Ancient Poems)
En('Four Ancient Poems', [
  ['澹澹','dàn dàn','rippling','水何澹澹，山岛竦峙。','How the waters ripple, and the mountain isles stand tall.'],
  ['竦峙','sǒng zhì','stand tall','水何澹澹，山岛竦峙。','How the waters ripple, and the mountain isles stand tall.'],
  ['枯藤','kū téng','withered vines','枯藤老树昏鸦。','Withered vines, old trees, crows at dusk.'],
  ['断肠','duàn cháng','heartbroken','断肠人在天涯。','A heartbroken traveler at the edge of the world.'],
  ['残夜','cán yè','the last moments of night','海日生残夜，江春入旧年。','The sea sun rises from the last moments of night, river spring enters the old year.']
], [
  ['借景抒情','jiè jǐng shū qíng','express feelings through scenery','枯藤老树昏鸦，小桥流水人家，古道西风瘦马。','Withered vines, old trees, crows at dusk; a small bridge, flowing water, cottages; an ancient road, west wind, a lean horse.','通过罗列意象营造凄凉氛围，表达游子思乡之情','Create a desolate atmosphere by listing images to express the homesickness of a traveler']
]);

// Writing: 热爱生活，热爱写作 (Love Life, Love Writing)
En('Love Life, Love Writing', [
  ['写作','xiě zuò','writing','写作就是用笔来说话。','Writing is speaking with a pen.'],
  ['观察','guān chá','observe','养成细心观察、勤于思考的习惯。','Develop the habit of careful observation and diligent thinking.'],
  ['素材','sù cái','raw material','积累内容素材和语言材料。','Accumulate content material and language resources.'],
  ['表达','biǎo dá','express','写作是表达、交流的重要方式。','Writing is an important way to express and communicate.'],
  ['交流','jiāo liú','communicate; exchange','写作是生活中与人沟通、交流、分享信息的一种方式。','Writing is a way to communicate, exchange, and share information in life.']
], null);

// Knowledge: 比喻 (Simile and Metaphor)
En('Simile and Metaphor', [
  ['比喻','bǐ yù','simile; metaphor','句子运用了比喻的修辞手法。','The sentence uses the rhetorical device of simile.'],
  ['本体','běn tǐ','tenor (thing compared)','本体和喻体之间用比喻词连接。','The tenor and vehicle are connected by a comparison word.'],
  ['喻体','yù tǐ','vehicle (thing used for comparison)','用来做比喻的事物叫喻体。','The thing used for comparison is called the vehicle.'],
  ['明喻','míng yù','explicit simile','像、好像、仿佛等词连接的是明喻。','Comparisons using words like "like" or "as if" are explicit similes.'],
  ['借喻','jiè yù','implied metaphor','借用喻体直接代替本体是借喻。','Using the vehicle directly to replace the tenor is an implied metaphor.']
], null);

// Knowledge: 比拟 (Personification and Metaphorical Transfer)
En('Personification and Metaphorical Transfer', [
  ['拟人','nǐ rén','personification','把物当作人来写是拟人。','Writing about things as if they were people is personification.'],
  ['拟物','nǐ wù','objectification','把人当作物来写是拟物。','Writing about people as if they were things is objectification.'],
  ['修辞','xiū cí','rhetoric','比拟是一种修辞手法。','Personification is a rhetorical device.'],
  ['赋予','fù yǔ','endow with','赋予物以人的动作行为或思想感情。','Endow things with human actions or thoughts and feelings.'],
  ['共鸣','gòng míng','resonance','从而引起共鸣。','Thus arousing resonance.']
], null);

// Knowledge: 名词 (Nouns)
En('Nouns', [
  ['名词','míng cí','noun','名词很常见。','Nouns are very common.'],
  ['方位','fāng wèi','direction; location','表示方位的名词一般称为方位名词。','Nouns expressing direction are generally called directional nouns.'],
  ['抽象','chōu xiàng','abstract','有的表示抽象的事物，如精神、传统。','Some express abstract things, such as spirit and tradition.'],
  ['具体','jù tǐ','concrete','有的表示具体的事物，如绿萍、水藻。','Some express concrete things, such as duckweed and water plants.'],
  ['位置','wèi zhì','position','表示事物所在的位置或范围。','Express the position or scope of things.']
], null);

// ============================================================
// UNIT 2 — Family Love (4 lessons + 2 supplements)
// ============================================================

// Lesson 5: 秋天的怀念 (Autumn Memories) — Shi Tiesheng
En('Autumn Memories', [
  ['瘫痪','tān huàn','paralyzed','双腿瘫痪后，我的脾气变得暴怒无常。','After my legs became paralyzed, my temper became violently unpredictable.'],
  ['暴怒','bào nù','furious rage','我的脾气变得暴怒无常。','My temper became furiously unpredictable.'],
  ['憔悴','qiáo cuì','haggard; worn out','她憔悴的脸上现出央求般的神色。','Her haggard face showed a pleading expression.'],
  ['诀别','jué bié','final farewell','她出去了，就再也没回来。','She went out and never came back again.'],
  ['烂漫','làn màn','bright and colorful','北海的菊花开了，烂漫极了。','The chrysanthemums at Beihai bloomed, bright and colorful.']
], [
  ['反复','fǎn fù','repetition','她出去了，就再也没回来。','She went out and never came back again.','用简洁的语言表达深沉的母爱与永恒的遗憾','Use concise language to express deep maternal love and eternal regret'],
  ['象征','xiàng zhēng','symbolism','黄色的花淡雅、白色的花高洁、紫红色的花热烈而深沉。','Yellow flowers are elegant, white flowers are noble, purple-red flowers are passionate and deep.','用菊花象征生命的美好，暗示母亲的期望','Use chrysanthemums to symbolize the beauty of life, hinting at the mother expectations']
]);

// Lesson 6: 散步 (A Walk) — Mo Huaiqi
En('A Walk', [
  ['分歧','fēn qí','disagreement','后来发生了分歧。','Later a disagreement arose.'],
  ['霎时','shà shí','in an instant','那里有金色的菜花，两行整齐的桑树。','There were golden rapeseed flowers, two rows of neat mulberry trees.'],
  ['粼粼','lín lín','shimmering (of water)','水波粼粼的鱼塘。','A shimmering fish pond.'],
  ['嫩芽','nèn yá','tender buds','这南方初春的田野，大块小块的新绿随意地铺着。','In these fields of early spring in the south, patches of new green lay scattered freely.'],
  ['熬','áo','endure; pull through','她又熬过了一个严冬。','She endured through another harsh winter.']
], [
  ['以小见大','yǐ xiǎo jiàn dà','reveal the big through the small','好像我背上的同她背上的加起来，就是整个世界。','As if what was on my back and hers together was the whole world.','通过一次散步展现家庭的责任与爱','Reveal family responsibility and love through a simple walk']
]);

// Lesson 7: 散文诗二首 (Two Prose Poems)
En('Two Prose Poems', [
  ['金色花','jīn sè huā','golden flower','假如我变成了一朵金色花。','If I turned into a golden flower.'],
  ['荷叶','hé yè','lotus leaf','母亲呵！你是荷叶，我是红莲。','Mother! You are the lotus leaf, I am the red lotus.'],
  ['匿笑','nì xiào','snicker; laugh secretly','我暗暗地在那里匿笑。','I secretly snickered there.'],
  ['亭亭','tíng tíng','gracefully upright','亭亭的荷叶覆盖在红莲上面。','The gracefully upright lotus leaf covered the red lotus.'],
  ['慈怜','cí lián','tender compassion','心中的雨点来了，除了你，谁是我无遮拦天空下的荫蔽？','When the rain of my heart comes, except for you, who is my shelter under the open sky?']
], [
  ['象征','xiàng zhēng','symbolism','母亲呵！你是荷叶，我是红莲。','Mother! You are the lotus leaf, I am the red lotus.','以荷叶护红莲象征母爱的庇护','Use the lotus leaf protecting the red lotus to symbolize the shelter of maternal love']
]);

// Lesson 8: 《世说新语》二则 (Two Tales from A New Account of the Tales of the World)
En('Two Tales from A New Account of the Tales of the World', [
  ['欣然','xīn rán','joyfully','公欣然曰：白雪纷纷何所似？','The lord joyfully said: What does the falling snow resemble?'],
  ['纷纷','fēn fēn','falling in profusion','白雪纷纷何所似？','What does the falling snow resemble?'],
  ['期行','qī xíng','make an appointment to travel together','陈太丘与友期行。','Chen Taiqiu made an appointment to travel with a friend.'],
  ['舍去','shě qù','leave and depart','过中不至，太丘舍去。','Past noon he had not arrived, so Taiqiu left.'],
  ['惭愧','cán kuì','ashamed','友人惭，下车引之。','The friend was ashamed and got off his carriage to greet him.']
], [
  ['文言虚词','wén yán xū cí','classical Chinese function words','太丘舍去，去后乃至。','Taiqiu left, and the friend arrived after he had gone.','理解乃、之、而等虚词在文言文中的用法','Understand the usage of function words like nai, zhi, and er in classical Chinese']
]);

// Writing: 学会记事 (Learning to Record Events)
En('Learning to Record Events', [
  ['记事','jì shì','record events','写作中学会记事很重要。','Learning to record events is important in writing.'],
  ['真实','zhēn shí','authentic; real','写事要真实，不能虚构。','Writing about events should be authentic, not fabricated.'],
  ['线索','xiàn suǒ','thread; clue','围绕一条线索把事情写清楚。','Write things clearly around a central thread.'],
  ['细节','xì jié','detail','注意描写事件中的细节。','Pay attention to describing details within events.'],
  ['完整','wán zhěng','complete','把事情的起因、经过、结果写完整。','Write the cause, process, and result of events completely.']
], null);

// Knowledge: 词义和语境 (Word Meaning and Context)
En('Word Meaning and Context', [
  ['词义','cí yì','word meaning','词的意义有多种层次。','Word meanings have multiple levels.'],
  ['语境','yǔ jìng','context','联系上下文理解词义。','Understand word meaning by connecting to context.'],
  ['引申','yǐn shēn','extended meaning','词语可以从本义引申出新义。','Words can develop new meanings extended from the original.'],
  ['本义','běn yì','original meaning','要区分词语的本义和引申义。','Distinguish the original meaning from extended meanings.'],
  ['比喻义','bǐ yù yì','figurative meaning','有些词在特定语境中有比喻义。','Some words have figurative meanings in specific contexts.']
], null);

// Activity: 有朋自远方来 (A Friend Comes from Afar)
En('A Friend Comes from Afar', [
  ['交友','jiāo yǒu','make friends','有朋自远方来，不亦乐乎？','Is it not a joy to have friends come from afar?'],
  ['真诚','zhēn chéng','sincere','交友需要真诚。','Making friends requires sincerity.'],
  ['信任','xìn rèn','trust','朋友之间最重要的是信任。','The most important thing between friends is trust.'],
  ['尊重','zūn zhòng','respect','与朋友交往要互相尊重。','Interacting with friends requires mutual respect.'],
  ['知己','zhī jǐ','close friend; soulmate','海内存知己，天涯若比邻。','If you have a soulmate within the four seas, even the distant horizon feels like a neighbor.']
], null);

// ============================================================
// UNIT 3 — Childhood and Learning (3 lessons + 5 supplements)
// ============================================================

// Lesson 9: 从百草园到三味书屋 (From Hundred-Herb Garden to Three-Flavour Study) — Lu Xun
En('From Hundred-Herb Garden to Three-Flavour Study', [
  ['确凿','què záo','definite; certain','确凿只有一些野草。','There were definitely only some wild grasses.'],
  ['攒','cuán','gather together','不必说碧绿的菜畦，光滑的石井栏。','No need to mention the emerald vegetable plots, the smooth stone well railing.'],
  ['渊博','yuān bó','profound and extensive (knowledge)','他是本城中极方正、质朴、博学的人。','He was the most upright, plain, and learned man in the city.'],
  ['人迹罕至','rén jì hǎn zhì','seldom visited by people','拍雪人和塑雪罗汉需要人迹罕至的地方。','Making snow figures and snow Buddhas requires a place seldom visited by people.'],
  ['拗','ǎo','bend','用力地拗开它的角。','Forcefully bend open its horns.']
], [
  ['对比','duì bǐ','contrast','百草园的自由快乐与三味书屋的枯燥对比。','Contrast between the freedom and joy of Hundred-Herb Garden and the dullness of Three-Flavour Study.','通过两个空间的对比表达作者对童年自由的怀念','Express the author nostalgia for childhood freedom through contrasting two spaces'],
  ['详略得当','xiáng lüè dé dàng','proper balance of detail','不必说碧绿的菜畦……单是周围的短短的泥墙根一带，就有无限趣味。','No need to mention the emerald vegetable plots... Just around the short mud wall base, there is infinite fun.','用不必说……单是……的句式突出重点','Use the pattern of no need to mention... just... to highlight key points']
]);

// Lesson 10: 再塑生命的人 (The One Who Remade My Life) — Helen Keller
En('The One Who Remade My Life', [
  ['截然不同','jié rán bù tóng','completely different','莎莉文老师的到来使我的世界截然不同。','The arrival of Miss Sullivan made my world completely different.'],
  ['感慨','gǎn kǎi','sigh with emotion','回想起这段经历，我感慨万千。','Looking back at this experience, I am filled with emotion.'],
  ['恍然大悟','huǎng rán dà wù','suddenly see the light','我恍然大悟，水就是从手上流过的那种清凉的东西。','I suddenly understood: water was that cool thing flowing over my hand.'],
  ['企盼','qǐ pàn','eagerly hope','我企盼着新的一天快些来到。','I eagerly hoped for a new day to come soon.'],
  ['唤醒','huàn xǐng','awaken','她唤醒了我的灵魂，给予我光明和希望。','She awakened my soul, giving me light and hope.']
], [
  ['细节描写','xì jié miáo xiě','detailed description','莎莉文老师把洋娃娃放在我的手中，然后在我手心里慢慢拼写。','Miss Sullivan put a doll in my hand, then slowly spelled in my palm.','通过感官细节展现海伦的内心世界','Show the inner world of Helen through sensory details']
]);

// Lesson 11: 《论语》十二章 (Twelve Chapters from The Analerta)
En('Twelve Chapters from The Analerta', [
  ['不亦乐乎','bù yì lè hū','is it not a joy','有朋自远方来，不亦乐乎？','Is it not a joy to have friends come from afar?'],
  ['三省','sān xǐng','examine oneself in three ways','吾日三省吾身。','I examine myself three times a day.'],
  ['温故知新','wēn gù zhī xīn','review the old to learn the new','温故而知新，可以为师矣。','Review the old and learn the new, and you can be a teacher.'],
  ['逾矩','yú jǔ','overstep the rules','七十而从心所欲，不逾矩。','At seventy I could follow my heart desire without overstepping the rules.'],
  ['博学','bó xué','broad learning','博学而笃志，切问而近思。','Learn broadly and hold firm to your aspirations, question earnestly and reflect on what is near.']
], [
  ['对偶','duì ǒu','parallelism','学而不思则罔，思而不学则殆。','Learning without thinking leads to confusion; thinking without learning leads to peril.','用对偶句式阐明学与思的辩证关系','Use parallel structure to illustrate the dialectical relationship between learning and thinking'],
  ['比喻论证','bǐ yù lùn zhèng','argument by analogy','逝者如斯夫，不舍昼夜。','Time flows on like this river, not ceasing day or night.','以河水比喻时间流逝，感叹光阴易逝','Compare time to flowing water, lamenting how quickly time passes']
]);

// Writing: 写人要抓住特点 (Capture Character Traits When Writing About People)
En('Capture Character Traits When Writing About People', [
  ['特点','tè diǎn','characteristic','写人要抓住人物的突出特点。','When writing about people, capture their outstanding characteristics.'],
  ['外貌','wài mào','appearance','描写人物可以从外貌入手。','Describing people can start from their appearance.'],
  ['神态','shén tài','expression; demeanor','注意捕捉人物的神态变化。','Pay attention to capturing changes in expressions.'],
  ['语言','yǔ yán','speech; language','人物的语言要符合身份和性格。','Character speech should match identity and personality.'],
  ['动作','dòng zuò','action; movement','通过动作描写展现人物性格。','Show character personality through action description.']
], null);

// Reading Guide: 朝花夕拾 (Dawn Blossoms Plucked at Dusk)
En('Dawn Blossoms Plucked at Dusk: Bridging the Gap with Classics', [
  ['朝花夕拾','zhāo huā xī shí','dawn blossoms plucked at dusk','鲁迅用朝花夕拾记录了童年往事。','Lu Xun used Dawn Blossoms Plucked at Dusk to record childhood memories.'],
  ['回忆','huí yì','reminisce; recall','这是一部回忆性散文集。','This is a collection of reminiscent essays.'],
  ['经典','jīng diǎn','classic','消除与经典的隔膜。','Bridge the gap with classics.'],
  ['散文','sǎn wén','prose; essay','鲁迅的散文充满了深情与幽默。','The prose of Lu Xun is full of deep feeling and humor.'],
  ['隔膜','gé mó','barrier; estrangement','消除与经典之间的隔膜需要耐心阅读。','Bridging the barrier with classics requires patient reading.']
], null);

// Ancient Poem: 峨眉山月歌 (Song of Mount Emei Moon)
En('Song of Mount Emei Moon', [
  ['峨眉','é méi','Mount Emei','峨眉山月半轮秋。','Above Mount Emei the moon is half a wheel in autumn.'],
  ['半轮','bàn lún','half wheel','峨眉山月半轮秋。','Above Mount Emei the moon is half a wheel in autumn.'],
  ['思君','sī jūn','miss you','思君不见下渝州。','Missing you but unable to see you, I go down to Yuzhou.'],
  ['平羌','píng qiāng','Pingqiang River','影入平羌江水流。','Its reflection enters the flowing Pingqiang River.'],
  ['渝州','yú zhōu','Yuzhou','思君不见下渝州。','Missing you but unable to see you, I go down to Yuzhou.']
], null);

// Ancient Poem: 江南逢李龟年 (Meeting Li Guinian South of the Yangtze)
En('Meeting Li Guinian South of the Yangtze', [
  ['寻常','xún cháng','ordinary; common','岐王宅里寻常见。','In Prince Qi residence, you were commonly seen.'],
  ['崔九','cuī jiǔ','Cui Jiu (a patron)','崔九堂前几度闻。','At Cui Jiu hall, several times heard.'],
  ['落花','luò huā','falling flowers','正是江南好风景，落花时节又逢君。','Just when the scenery of Jiangnan is finest, in the season of falling flowers, I meet you again.'],
  ['风景','fēng jǐng','scenery','正是江南好风景。','Just when the scenery of Jiangnan is finest.'],
  ['感慨','gǎn kǎi','sigh with emotion','诗人借重逢感慨世事沧桑。','The poet sighs about the changes of the world through their reunion.']
], null);

// Ancient Poem: 行军九日思长安故园 (Thinking of Home on the Ninth Day While Marching)
En('Thinking of Home on the Ninth Day While Marching', [
  ['强欲','qiǎng yù','force oneself to','强欲登高去。','Forcing oneself to climb high.'],
  ['登高','dēng gāo','climb to a height','强欲登高去，无人送酒来。','Forcing oneself to climb high, no one brings wine.'],
  ['故园','gù yuán','old homeland','遥怜故园菊。','From afar I feel tender for the chrysanthemums of my old homeland.'],
  ['战场','zhàn chǎng','battlefield','应傍战场开。','They must be blooming beside the battlefield.'],
  ['重阳','chóng yáng','Double Ninth Festival','九日是重阳节，有登高赏菊的习俗。','The ninth day is the Double Ninth Festival, with the custom of climbing high and admiring chrysanthemums.']
], null);

// Ancient Poem: 夜上受降城闻笛 (Hearing a Flute at Night atop Shoujiang City)
En('Hearing a Flute at Night atop Shoujiang City', [
  ['回乐烽','huí lè fēng','Huile beacon tower','回乐烽前沙似雪。','Before Huile beacon tower, the sand resembles snow.'],
  ['受降城','shòu jiàng chéng','Shoujiang City','受降城外月如霜。','Outside Shoujiang City, the moon is like frost.'],
  ['芦管','lú guǎn','reed pipe','不知何处吹芦管。','I know not where the reed pipe is blown.'],
  ['征人','zhēng rén','frontier soldier','一夜征人尽望乡。','All night the frontier soldiers gaze toward home.'],
  ['望乡','wàng xiāng','gaze toward home','一夜征人尽望乡。','All night the frontier soldiers gaze toward home.']
], null);

// ============================================================
// UNIT 4 — Ideals and Character (4 lessons + 2 supplements)
// ============================================================

// Lesson 12: 纪念白求恩 (In Memory of Norman Bethune) — Mao Zedong
En('In Memory of Norman Bethune', [
  ['国际主义','guó jì zhǔ yì','internationalism','白求恩同志是国际主义的典范。','Comrade Bethune was a model of internationalism.'],
  ['热忱','rè chén','enthusiasm; fervor','对同志对人民的极端的热忱。','Extreme enthusiasm toward comrades and the people.'],
  ['纯粹','chún cuì','pure; genuine','一个纯粹的人，一个有道德的人。','A pure person, a moral person.'],
  ['狭隘','xiá ài','narrow-minded','这就是我们用以反对狭隘民族主义的国际主义。','This is the internationalism we use to oppose narrow-minded nationalism.'],
  ['精益求精','jīng yì qiú jīng','strive for perfection','他的医术是精益求精的。','His medical skills were ever striving for perfection.']
], [
  ['对比论证','duì bǐ lùn zhèng','argument by contrast','白求恩毫不利己专门利人的精神与不少人对工作不负责任进行对比。','Contrast Bethune selfless spirit with many people being irresponsible.','通过正反对比突出白求恩精神的伟大','Highlight the greatness of Bethune spirit through positive-negative contrast'],
  ['排比','pái bǐ','parallelism','一个高尚的人，一个纯粹的人，一个有道德的人，一个脱离了低级趣味的人，一个有益于人民的人。','A noble person, a pure person, a moral person, a person free from vulgar tastes, a person beneficial to the people.','五个并列短语层层递进，增强论证力度','Five parallel phrases build progressively, strengthening the argument']
]);

// Lesson 13: 植树的牧羊人 (The Man Who Planted Trees) — Jean Giono
En('The Man Who Planted Trees', [
  ['慷慨','kāng kǎi','generous','如果他慷慨无私，不图回报。','If he is generous and selfless, seeking no reward.'],
  ['荒地','huāng dì','wasteland','到处是荒地。','Everywhere was wasteland.'],
  ['不毛之地','bù máo zhī dì','barren land','他就像这块不毛之地上涌出的神秘泉水。','He was like a mysterious spring welling up from this barren land.'],
  ['沉默寡言','chén mò guǎ yán','taciturn','他还是那么沉默寡言。','He was still as taciturn as ever.'],
  ['沃土','wò tǔ','fertile land','昔日的荒地如今生机勃勃，成为一片沃土。','The once barren land was now vibrant with life, becoming fertile land.']
], [
  ['以时间为线索','yǐ shí jiān wéi xiàn suǒ','using time as a thread','1913年、1920年、1945年，三次到访展现变化。','Visits in 1913, 1920, and 1945 show the transformation.','以三次访问为时间线索，展现荒地到绿洲的巨大变化','Use three visits as a timeline to show the huge transformation from wasteland to oasis']
]);

// Lesson 14: 走一步，再走一步 (One Step, Then Another) — Morton Hunt
En('One Step, Then Another', [
  ['灼人','zhuó rén','scorching','一个酷热的七月天，灼人的热浪。','A scorching July day, blazing heat waves.'],
  ['犹豫','yóu yù','hesitate','我犹豫了。','I hesitated.'],
  ['恍惚','huǎng hū','dazed; absent-minded','我趴在岩石上，神情恍惚。','I lay on the rock, dazed.'],
  ['小心翼翼','xiǎo xīn yì yì','extremely carefully','我小心翼翼地感觉着岩石。','I felt for the rock extremely carefully.'],
  ['成就感','chéng jiù gǎn','sense of achievement','我产生了一种巨大的成就感。','I felt an enormous sense of achievement.']
], [
  ['心理描写','xīn lǐ miáo xiě','psychological description','我趴在岩石上，神情恍惚，害怕和疲劳已经让我麻木。','I lay on the rock, dazed; fear and exhaustion had numbed me.','通过细腻的心理描写展现主人公的恐惧与成长','Show the protagonist fear and growth through delicate psychological description']
]);

// Lesson 15: 诫子书 (Letter of Admonition to His Son) — Zhuge Liang
En('Letter of Admonition to His Son', [
  ['淡泊','dàn bó','indifferent to fame and fortune','非淡泊无以明志。','Without indifference to fame and fortune, one cannot make clear one aspirations.'],
  ['宁静','níng jìng','tranquil','非宁静无以致远。','Without tranquility, one cannot reach far.'],
  ['志','zhì','aspiration; ambition','非学无以广才，非志无以成学。','Without learning, one cannot broaden talent; without ambition, one cannot achieve learning.'],
  ['淫慢','yín màn','indulgent and slack','淫慢则不能励精。','Indulgence and slackness prevent one from cultivating spirit.'],
  ['险躁','xiǎn zào','reckless and impatient','险躁则不能治性。','Recklessness and impatience prevent one from cultivating character.']
], [
  ['正反论证','zhèng fǎn lùn zhèng','argument from both sides','非淡泊无以明志，非宁静无以致远。','Without indifference, no clear aspiration; without tranquility, no far-reaching goals.','用双重否定从正反两面论证修身治学的道理','Use double negatives to argue from both sides about self-cultivation and scholarship']
]);

// Writing: 思路要清晰 (Keep Your Train of Thought Clear)
En('Keep Your Train of Thought Clear', [
  ['思路','sī lù','train of thought','写文章要思路清晰。','Writing articles requires a clear train of thought.'],
  ['层次','céng cì','layers; structure','文章要有清晰的层次。','An article must have clear structural layers.'],
  ['过渡','guò dù','transition','段落之间要有自然的过渡。','There should be natural transitions between paragraphs.'],
  ['总结','zǒng jié','summarize','文章结尾要有简洁的总结。','An article ending should have a concise summary.'],
  ['条理','tiáo lǐ','orderliness','叙事要有条理。','Narration should be orderly.']
], null);

// Activity: 少年正是读书时 (Youth Is the Time for Reading)
En('Youth Is the Time for Reading', [
  ['读书','dú shū','reading','少年正是读书时。','Youth is the time for reading.'],
  ['阅读','yuè dú','read','培养良好的阅读习惯。','Develop good reading habits.'],
  ['经典','jīng diǎn','classic','多读经典名著。','Read more classic masterpieces.'],
  ['积累','jī lěi','accumulate','读书要注重积累。','Reading should focus on accumulation.'],
  ['视野','shì yě','horizon; vision','读书能开阔视野。','Reading broadens horizons.']
], null);

// ============================================================
// UNIT 5 — Animals and Nature (3 lessons + 2 supplements)
// ============================================================

// Lesson 16: 猫 (Cats) — Zheng Zhenduo
En('Cats', [
  ['污涩','wū sè','dirty and rough','毛色花白，并不好看，又很瘦。','Its coat was patchy white, not pretty, and very thin.'],
  ['怂恿','sǒng yǒng','urge; egg on','三妹便怂恿着她去拿一只来。','The third sister urged her to go get one.'],
  ['怅然','chàng rán','melancholy','我也怅然地，愤恨地。','I was also melancholy and indignant.'],
  ['蜷伏','quán fú','curl up','冬天的早晨，门口蜷伏着一只很可怜的小猫。','On a winter morning, a pitiful kitten was curled up at the door.'],
  ['冤枉','yuān wǎng','falsely accuse','我没有判断明白，便妄下断语，冤枉了一只不能说话辩诉的动物。','Without judging clearly, I rashly made a verdict and falsely accused an animal that could not speak in its own defense.']
], [
  ['首尾呼应','shǒu wěi hū yìng','beginning and end echo each other','自此，我家永不养猫。','From then on, my family never kept cats again.','三次养猫经历层层递进，最后的永不养猫呼应全文主题','Three cat-keeping experiences build progressively; the final resolution echoes the theme'],
  ['对比','duì bǐ','contrast','三只猫的不同命运形成鲜明对比。','The different fates of the three cats form a sharp contrast.','通过三只猫的对比深化主题——不要妄下结论','Deepen the theme through contrasting three cats — do not jump to conclusions']
]);

// Lesson 17: 动物笑谈 (Animal Anecdotes) — Konrad Lorenz
En('Animal Anecdotes', [
  ['嗔怪','chēn guài','reproach','别人对他的嗔怪是可以理解的。','The reproach from others was understandable.'],
  ['怪诞不经','guài dàn bù jīng','absurd and preposterous','在研究中常常发生怪诞不经的趣事。','Absurd and preposterous amusing things often happen during research.'],
  ['大相径庭','dà xiāng jìng tíng','vastly different','从外表看来和真正的水鸭大相径庭。','In appearance, vastly different from a real wild duck.'],
  ['禁锢','jìn gù','imprison; confine','从长期被禁锢所受的精神虐待中恢复过来。','Recovering from the mental abuse of long-term confinement.'],
  ['蹒跚','pán shān','stagger; hobble','老先生弯着身子，蹒跚地走过来。','The old man bent over and staggered toward me.']
], null);

// Lesson 18: 狼 (The Wolves) — Pu Songling
En('The Wolves', [
  ['缀行','zhuì xíng','follow closely','缀行甚远。','Followed closely for a very long distance.'],
  ['屠','tú','butcher','一屠晚归，担中肉尽。','A butcher returning late, the meat in his load all gone.'],
  ['窘','jiǒng','desperate; cornered','屠大窘，恐前后受其敌。','The butcher was desperate, fearing attack from front and back.'],
  ['假寐','jiǎ mèi','pretend to sleep','一狼径去，其一犬坐于前，目似瞑，意暇甚。','One wolf left, the other sat like a dog in front, eyes seemingly closed, looking very relaxed.'],
  ['黠','xiá','cunning','狼亦黠矣，而顷刻两毙。','The wolves were indeed cunning, yet both were killed in a moment.']
], [
  ['文言叙事','wén yán xù shì','classical narrative','一屠晚归，担中肉尽，止有剩骨。','A butcher returning late, the meat all gone, only leftover bones remained.','文言文用简练的语言叙述紧张的故事情节','Classical Chinese uses concise language to narrate a tense storyline']
]);

// Writing: 如何突出中心 (How to Highlight the Central Theme)
En('How to Highlight the Central Theme', [
  ['中心','zhōng xīn','central theme','写文章要突出中心。','Writing articles should highlight the central theme.'],
  ['选材','xuǎn cái','select material','选材要围绕中心。','Material selection should revolve around the theme.'],
  ['详略','xiáng lüè','detailed and brief','安排好详略。','Arrange the balance of detail and brevity well.'],
  ['主题','zhǔ tí','theme; subject','主题要鲜明、集中。','The theme should be clear and focused.'],
  ['深化','shēn huà','deepen','通过细节深化中心。','Deepen the central theme through details.']
], null);

// Knowledge: 数词和量词 (Numerals and Measure Words)
En('Numerals and Measure Words', [
  ['数词','shù cí','numeral','数词是表示数量的词。','Numerals are words that express quantity.'],
  ['量词','liàng cí','measure word','量词是表示单位的词。','Measure words express units of measurement.'],
  ['确数','què shù','exact number','一、七千、六万九千表示确数。','One, seven thousand, sixty-nine thousand are exact numbers.'],
  ['概数','gài shù','approximate number','十来个、二十几只表示概数。','About ten, twenty-something are approximate numbers.'],
  ['序数','xù shù','ordinal number','第一、老三、初五表示序数。','First, third eldest, fifth day are ordinal numbers.']
], null);

// ============================================================
// UNIT 6 — Imagination and Fantasy (4 lessons + 6 supplements)
// ============================================================

// Lesson 19: 皇帝的新装 (The Emperor's New Clothes) — Andersen
En("The Emperor's New Clothes", [
  ['炫耀','xuàn yào','show off','除非是为了去炫耀一下他的新衣服。','Unless it was to show off his new clothes.'],
  ['愚蠢','yú chǔn','foolish; stupid','凡是愚蠢或不称职的人就看不见这布。','Anyone who was foolish or incompetent could not see the cloth.'],
  ['骗子','piàn zi','swindler','两个骗子装作在工作的样子。','The two swindlers pretended to be working.'],
  ['称职','chèn zhí','competent','不称职的人看不见这布。','Incompetent people could not see the cloth.'],
  ['赤裸','chì luǒ','naked; bare','他实在没有穿什么衣服啊！','He really has nothing on at all!']
], [
  ['讽刺','fěng cì','satire','通过一个荒诞的故事讽刺了虚伪和愚蠢。','Through an absurd story, it satirizes hypocrisy and foolishness.','用儿童视角戳穿成人世界的虚伪','Use a child perspective to pierce the hypocrisy of the adult world'],
  ['夸张','kuā zhāng','exaggeration','他每一天每一点钟都要换一套衣服。','He changed his clothes every hour of every day.','用夸张手法突出皇帝爱虚荣的性格','Use exaggeration to highlight the emperor vain character']
]);

// Lesson 20: 天上的街市 (The Street in the Sky) — Guo Moruo
En('The Street in the Sky', [
  ['缥缈','piāo miǎo','ethereal; illusory','我想那缥缈的空中。','I imagine that ethereal sky.'],
  ['珍奇','zhēn qí','rare and precious','定然是世上没有的珍奇。','They must be rare treasures unseen in this world.'],
  ['街灯','jiē dēng','street lights','远远的街灯明了。','The distant street lights are lit.'],
  ['明星','míng xīng','bright stars','好像闪着无数的明星。','Like countless bright stars twinkling.'],
  ['闲游','xián yóu','stroll leisurely','定然在天街闲游。','Surely strolling leisurely on the heavenly street.']
], [
  ['联想与想象','lián xiǎng yǔ xiǎng xiàng','association and imagination','远远的街灯明了，好像闪着无数的明星。','The distant street lights lit up, like countless bright stars twinkling.','从街灯联想到星星，从星星想象到天上的街市','From street lights to stars by association, from stars to a heavenly street by imagination']
]);

// Lesson 21: 女娲造人 (Nüwa Creates Humans) — Yuan Ke
En('N\u00FCwa Creates Humans', [
  ['神通广大','shén tōng guǎng dà','infinitely powerful','出现了一个神通广大的女神。','There appeared an infinitely powerful goddess.'],
  ['莽莽榛榛','mǎng mǎng zhēn zhēn','thick and wild vegetation','行走在这片莽莽榛榛的原野上。','Walking across this wildly overgrown plain.'],
  ['眉开眼笑','méi kāi yǎn xiào','beaming with joy','不由得满心欢喜，眉开眼笑。','Could not help but feel overjoyed, beaming with delight.'],
  ['绵延','mián yán','extend continuously','人类就世世代代绵延下来。','Humanity extended continuously from generation to generation.'],
  ['孤独','gū dú','lonely','感到非常孤独。','Felt very lonely.']
], null);

// Lesson 22: 寓言四则 (Four Fables)
En('Four Fables', [
  ['雕像','diāo xiàng','sculpture; statue','赫耳墨斯来到一个雕像者的店里。','Hermes came to a sculptor shop.'],
  ['虚荣','xū róng','vanity','赫耳墨斯的虚荣心使他自取其辱。','The vanity of Hermes brought him humiliation.'],
  ['杞人忧天','qǐ rén yōu tiān','needless anxiety','杞国有人忧天地崩坠。','In the state of Qi, someone worried the sky would collapse.'],
  ['穿井得一人','chuān jǐng dé yī rén','digging a well yields a person','宋之丁氏，家无井而出溉汲。','The Ding family of Song had no well and went out to draw water.'],
  ['道听途说','dào tīng tú shuō','hearsay','求闻之若此，不若无闻也。','Seeking news like this is worse than hearing nothing at all.']
], [
  ['寓言寓意','yù yán yù yì','fable and its moral','蚊子打败了狮子，却被蜘蛛网粘住了。','The mosquito defeated the lion but got stuck in a spider web.','通过简短的故事传达深刻的道理','Convey profound truths through brief stories']
]);

// Writing: 发挥联想和想象 (Use Association and Imagination)
En('Use Association and Imagination', [
  ['联想','lián xiǎng','association','联想是由一事物想到另一事物。','Association is thinking of one thing from another.'],
  ['想象','xiǎng xiàng','imagination','想象是在头脑中创造新的形象。','Imagination is creating new images in the mind.'],
  ['触景生情','chù jǐng shēng qíng','scenery stirs feelings','触景生情是常用的写法。','Being moved by scenery is a common writing technique.'],
  ['新颖','xīn yǐng','novel; fresh','联想和想象要有新意。','Association and imagination should be novel.'],
  ['创造','chuàng zào','create','想象力是创造性思维的重要源泉。','Imagination is an important source of creative thinking.']
], null);

// Knowledge: 代词 (Pronouns)
En('Pronouns', [
  ['代词','dài cí','pronoun','代词是用来代替其他词语的词。','Pronouns are words used to replace other words.'],
  ['人称代词','rén chēng dài cí','personal pronoun','我、你、他、她是人称代词。','I, you, he, she are personal pronouns.'],
  ['指示代词','zhǐ shì dài cí','demonstrative pronoun','这、那、这里、那里是指示代词。','This, that, here, there are demonstrative pronouns.'],
  ['疑问代词','yí wèn dài cí','interrogative pronoun','谁、什么、怎样是疑问代词。','Who, what, how are interrogative pronouns.'],
  ['指代','zhǐ dài','refer to','代词可以指代人、事物或位置。','Pronouns can refer to people, things, or locations.']
], null);

// Activity: 文学部落 (Literary Colony)
En('Literary Colony', [
  ['文学','wén xué','literature','文学是语言的艺术。','Literature is the art of language.'],
  ['部落','bù luò','colony; community','组建属于我们的文学部落。','Build a literary community that belongs to us.'],
  ['创作','chuàng zuò','create; write','鼓励学生进行文学创作。','Encourage students to engage in literary creation.'],
  ['分享','fēn xiǎng','share','分享文学带来的诗意与美。','Share the poetry and beauty that literature brings.'],
  ['审美','shěn měi','aesthetic appreciation','提高审美品位。','Improve aesthetic taste.']
], null);

// Reading Guide: Classic Reading Guide
En('Classic Reading Guide', [
  ['名著','míng zhù','masterpiece','阅读经典名著能开阔视野。','Reading classic masterpieces broadens horizons.'],
  ['导读','dǎo dú','guided reading','名著导读帮助理解作品。','Guided reading helps understand works.'],
  ['鉴赏','jiàn shǎng','appreciate; appraise','学会鉴赏文学作品。','Learn to appreciate literary works.'],
  ['阅读方法','yuè dú fāng fǎ','reading method','掌握不同的阅读方法很重要。','Mastering different reading methods is important.'],
  ['理解','lǐ jiě','understand','深入理解作品的思想内涵。','Deeply understand the intellectual content of works.']
], null);

// Ancient Poem: 秋词（其一）(Autumn Verse I)
En('Autumn Verse (I)', [
  ['秋日','qiū rì','autumn day','我言秋日胜春朝。','I say autumn days surpass spring mornings.'],
  ['寂寥','jì liáo','desolate; lonely','自古逢秋悲寂寥。','Since ancient times, encountering autumn brings sadness and desolation.'],
  ['一鹤','yī hè','a single crane','晴空一鹤排云上。','A single crane soars through the clouds into the clear sky.'],
  ['碧霄','bì xiāo','azure sky','便引诗情到碧霄。','Drawing poetic feeling up to the azure sky.'],
  ['乐观','lè guān','optimistic','诗人以乐观的态度赞美秋天。','The poet praises autumn with an optimistic attitude.']
], null);

// Ancient Poem: 夜雨寄北 (Night Rain, Letter to the North)
En('Night Rain, Letter to the North', [
  ['巴山','bā shān','Ba Mountains','君问归期未有期，巴山夜雨涨秋池。','You ask when I return, but there is no set date; the night rain on Ba Mountains swells the autumn pools.'],
  ['归期','guī qī','date of return','君问归期未有期。','You ask when I return, but there is no set date.'],
  ['秋池','qiū chí','autumn pool','巴山夜雨涨秋池。','Night rain on Ba Mountains swells the autumn pools.'],
  ['西窗','xī chuāng','west window','何当共剪西窗烛。','When can we trim the candles at the west window together?'],
  ['却话','què huà','then talk about','却话巴山夜雨时。','And then talk about this night of rain on Ba Mountains.']
], null);

// Ancient Poem: 十一月四日风雨大作 (A Great Storm on the Fourth of the Eleventh Month)
En('A Great Storm on the Fourth of the Eleventh Month (II)', [
  ['僵卧','jiāng wò','lying stiff in bed','僵卧孤村不自哀。','Lying stiff in a lonely village, I do not feel sorry for myself.'],
  ['戍轮台','shù lún tái','guard the frontier','尚思为国戍轮台。','I still think of guarding the frontier for my country.'],
  ['铁马','tiě mǎ','armored horses','夜阑卧听风吹雨，铁马冰河入梦来。','Late at night, lying and listening to wind and rain, armored horses and frozen rivers enter my dreams.'],
  ['夜阑','yè lán','deep in the night','夜阑卧听风吹雨。','Late at night, lying and listening to wind and rain.'],
  ['爱国','ài guó','patriotic','诗人在风雨之夜抒发爱国之情。','The poet expresses patriotic feelings on a stormy night.']
], null);

// Ancient Poem: 潼关 (Tongguan Pass)
En('Tongguan Pass', [
  ['潼关','tóng guān','Tongguan Pass','终古高云簇此城。','Since ancient times, lofty clouds cluster around this fortress.'],
  ['秋风','qiū fēng','autumn wind','秋风吹散马蹄声。','The autumn wind scatters the sound of hoofbeats.'],
  ['河流','hé liú','river','河流大野犹嫌束。','The river across the great plain still finds it confining.'],
  ['山势','shān shì','mountain terrain','山入潼关不解平。','Mountains entering Tongguan do not know how to be flat.'],
  ['豪情','háo qíng','heroic spirit','少年诗人的豪情壮志。','The heroic spirit and great ambition of the young poet.']
], null);

saveAndValidate('textbook_g7s1.js', code, 'TB_G7S1');
