/**
 * Enrich textbook_g8s1.js with vocabWords and grammarPoints
 * Grade 8 Semester 1 — All 26 lessons
 * Run: cd /e/chinese && node build/enrich_g8s1.js
 */
const fs = require('fs');
const { enrichByEn, saveAndValidate } = require('./enrich_lib');
let code = fs.readFileSync('textbook_g8s1.js', 'utf8');
const En = (t, v, g) => { code = enrichByEn(code, t, v, g); };

// ═══════════════════════════════════════════
// UNIT 1 — Activity & Exploration: Journalism (活动·探究)
// ═══════════════════════════════════════════

// Lesson 1: 消息二则 (Two News Dispatches)
En('Two News Dispatches', [
  ['溃退','kuì tuì','to retreat in disarray','国民党反动派经营了三个半月的长江防线，遇着人民解放军好似摧枯拉朽，军无斗志，纷纷溃退。','The Kuomintang defense line crumbled before the PLA; their troops lost the will to fight and retreated in disarray.'],
  ['摧枯拉朽','cuī kū lā xiǔ','to crush rotten wood; irresistible force','遇着人民解放军好似摧枯拉朽。','Encountering the PLA was like crushing rotten wood.'],
  ['锐不可当','ruì bù kě dāng','irresistible; unstoppable','我军锐不可当。','Our army was unstoppable.'],
  ['歼灭','jiān miè','to annihilate; to wipe out','我已歼灭及击溃一切抵抗之敌。','We annihilated and routed all resisting enemies.'],
  ['要塞','yào sài','fortress; stronghold','并控制江阴要塞，封锁长江。','And controlled the Jiangyin fortress, sealing off the Yangtze.']
], [
  ['消息结构','xiāo xi jié gòu','structure of a news dispatch','标题、电头、导语和主体构成消息的基本结构。','Headline, dateline, lead, and body form the basic structure of a news dispatch.','消息由标题（概括事件）、电头（交代来源）、导语（核心事实）和主体（详细报道）四部分组成。','A news dispatch consists of four parts: headline (summarizing the event), dateline (stating the source), lead (core facts), and body (detailed reporting).'],
  ['新闻六要素','xīn wén liù yào sù','six elements of news','何时、何地、何事、何人、何故、如何。','When, where, what, who, why, and how.','新闻报道应包含时间、地点、人物、事件、原因和经过六个基本要素，确保信息完整准确。','News reports should include time, place, people, event, cause, and process to ensure complete and accurate information.']
]);

// Lesson 2: 首届诺贝尔奖颁发 (First Nobel Prizes Awarded)
En('First Nobel Prizes Awarded', [
  ['颁发','bān fā','to award; to confer','瑞典国王和挪威诺贝尔基金会今天首次颁发了诺贝尔奖。','The Swedish King and the Norwegian Nobel Committee today awarded the Nobel Prize for the first time.'],
  ['遗嘱','yí zhǔ','will; testament','根据诺贝尔的遗嘱，诺贝尔奖每年发给做出最大贡献的人。','According to Nobel\u2019s will, the Nobel Prize is awarded annually to those who have made the greatest contributions.'],
  ['卓有成就','zhuó yǒu chéng jiù','to have remarkable achievements','他在血清疗法的研究方面卓有成就。','He had remarkable achievements in the research of serum therapy.'],
  ['建树','jiàn shù','contributions; accomplishments','他在诗歌创作方面颇有建树。','He had notable accomplishments in poetry.'],
  ['仲裁','zhòng cái','arbitration','他建立了促进国际仲裁的各国议会联盟。','He founded an inter-parliamentary union to promote international arbitration.']
], null);

// Lesson 3: "飞天"凌空 ("Flying Apsara" Soars)
En('\\"Flying Apsara\\" Soars', [
  ['凌空','líng kōng','to soar through the air','她在空中向前翻腾一周半，如飞天凌空。','She somersaulted one and a half times in the air, soaring like a flying apsara.'],
  ['翘首','qiáo shǒu','to crane one\u2019s neck; to look up eagerly','观众翘首而望。','The audience craned their necks to watch.'],
  ['酷似','kù sì','to closely resemble','她那优美的身姿酷似敦煌壁画上的飞天。','Her graceful figure closely resembled the flying apsaras in Dunhuang murals.'],
  ['屏息敛声','bǐng xī liǎn shēng','to hold one\u2019s breath in silence','全场屏息敛声，静待她入水的一刻。','The entire venue held its breath, awaiting the moment she entered the water.'],
  ['夺魁','duó kuí','to win first place','跳水姑娘吕伟夺魁。','Diver Lv Wei won the championship.']
], null);

// Lesson 4: 一着惊海天 (One Landing Astonishes Sea and Sky)
En('One Landing Astonishes Sea and Sky', [
  ['着舰','zhuó jiàn','carrier landing','目击我国航母舰载战斗机首架次成功着舰。','Witnessing the first successful carrier landing of our fighter jet.'],
  ['咆哮','páo xiào','to roar; to howl','发动机发出震耳欲聋的咆哮。','The engine let out a deafening roar.'],
  ['镌刻','juān kè','to engrave; to inscribe','这一刻将永远镌刻在历史上。','This moment will be forever engraved in history.'],
  ['白手起家','bái shǒu qǐ jiā','to start from nothing','中国海军航空兵白手起家。','The Chinese naval aviation force started from nothing.'],
  ['殚精竭虑','dān jīng jié lǜ','to exhaust one\u2019s mind and energy','科研人员殚精竭虑攻克一个个技术难关。','Researchers exhausted their minds and energy to overcome technical challenges one by one.']
], [
  ['新闻特写','xīn wén tè xiě','news feature writing','本文用生动的现场描写记录历史性时刻。','This article uses vivid on-site description to record a historic moment.','新闻特写是截取新闻事件中最富有特征和表现力的片段进行放大描写的一种报道形式。','A news feature is a form of reporting that selects and magnifies the most characteristic and expressive moments of a news event.']
]);

// Lesson 5: 国行公祭，为佑世界和平 (National Memorial, for World Peace)
En('National Memorial, for World Peace', [
  ['公祭','gōng jì','national memorial ceremony','国行公祭，为佑世界和平。','The national memorial ceremony is held to safeguard world peace.'],
  ['铭记','míng jì','to engrave in memory; to always remember','铭记历史，不是为了延续仇恨。','Remembering history is not to perpetuate hatred.'],
  ['惨绝人寰','cǎn jué rén huán','the most tragic in the world','南京大屠杀是惨绝人寰的历史悲剧。','The Nanjing Massacre was the most tragic historical atrocity.'],
  ['篡改','cuàn gǎi','to tamper with; to falsify','日本右翼势力企图篡改历史。','Japanese right-wing forces attempted to falsify history.'],
  ['振聋发聩','zhèn lóng fā kuì','to enlighten the ignorant; earth-shaking','文章发出振聋发聩的呼吁。','The article issued an earth-shaking appeal.']
], [
  ['新闻评论','xīn wén píng lùn','news commentary','国行公祭，为佑世界和平。','The national memorial is held to safeguard world peace.','新闻评论是针对新闻事件发表看法和见解的文体，具有鲜明的观点和强烈的说服力。','News commentary is a genre that expresses opinions on news events, characterized by clear viewpoints and strong persuasion.']
]);

// ═══════════════════════════════════════════
// UNIT 2 — Memoirs & Biographies (回忆性散文·传记)
// ═══════════════════════════════════════════

// Lesson 6: 藤野先生 (Mr. Fujino)
En('Mr. Fujino', [
  ['绯红','fēi hóng','crimson; scarlet','上野的樱花烂熳的时节，望去确也像绯红的轻云。','During cherry blossom season in Ueno, the view indeed resembled light crimson clouds.'],
  ['油光可鉴','yóu guāng kě jiàn','so sleek it can serve as a mirror','除下帽来，油光可鉴。','Remove the cap, and the hair was sleek enough to serve as a mirror.'],
  ['抑扬顿挫','yì yáng dùn cuò','with cadence; rhythmic','藤野先生说话的声调抑扬顿挫。','Mr. Fujino spoke with a rhythmic cadence.'],
  ['深恶痛疾','shēn wù tòng jí','to detest deeply','他对不认真学习的学生深恶痛疾。','He deeply detested students who did not study earnestly.'],
  ['匿名','nì míng','anonymous','有人写了一封匿名信给我。','Someone wrote an anonymous letter to me.']
], [
  ['叙事线索','xù shì xiàn suǒ','narrative thread','明线是与藤野先生的交往，暗线是作者思想感情的变化。','The explicit thread is the relationship with Mr. Fujino; the implicit thread is the evolution of the author\u2019s thoughts and feelings.','叙事散文可以有多条线索：明线推动情节发展，暗线揭示主题思想。','Narrative prose can have multiple threads: the explicit one advances the plot, while the implicit one reveals the theme.'],
  ['欲扬先抑','yù yáng xiān yì','suppression before elevation','先写东京留学生的庸俗，反衬藤野先生的高尚品格。','First describing the vulgarity of Chinese students in Tokyo contrasts with Mr. Fujino\u2019s noble character.','先写不好的方面，再突出好的方面，通过对比形成强烈反差。','Writing about the negative aspects first, then highlighting the positive, creates a strong contrast through comparison.']
]);

// Lesson 7: 回忆我的母亲 (Remembering My Mother)
En('Remembering My Mother', [
  ['任劳任怨','rèn láo rèn yuàn','to bear hardships and complaints without resentment','母亲在家庭里极能任劳任怨。','Mother bore all hardships and complaints in the family without resentment.'],
  ['周济','zhōu jì','to give relief to; to help financially','还周济和照顾比自己更穷的亲戚。','She still helped and cared for even poorer relatives.'],
  ['为富不仁','wéi fù bù rén','the rich are heartless','地主为富不仁，压迫佃户。','The landlords were heartless and oppressed the tenants.'],
  ['不辍','bù chuò','without stopping; ceaselessly','母亲勤劳不辍。','Mother worked ceaselessly.'],
  ['聊叙','liáo xù','to briefly narrate','聊叙人伦之情。','To briefly narrate family bonds.']
], [
  ['夹叙夹议','jiā xù jiā yì','alternating narration and commentary','我应该感谢母亲，她教给我与困难做斗争的经验。','I should thank my mother for teaching me to struggle against difficulties.','在叙述事实的过程中穿插议论，既展现事迹又揭示意义。','Interspersing commentary within narration both presents facts and reveals their significance.']
]);

// Lesson 8: 列夫·托尔斯泰 (Leo Tolstoy)
En('Leo Tolstoy', [
  ['黝黑','yǒu hēi','swarthy; dark-skinned','遮住了皱似树皮的黝黑脸膛。','Concealing the dark, bark-like complexion.'],
  ['粗制滥造','cū zhì làn zào','crudely and carelessly made','这张脸仿佛是粗制滥造的。','This face seemed crudely fashioned.'],
  ['藏污纳垢','cáng wū nà gòu','to harbor filth','这副面孔似乎能藏污纳垢。','This countenance seemed capable of harboring every kind of ugliness.'],
  ['犀利','xī lì','sharp; incisive','那对灰色的眼睛射出犀利的目光。','Those gray eyes shot out an incisive gaze.'],
  ['锃亮','zèng liàng','shiny; gleaming','目光就像一把锃亮的钢刀刺了过来。','The gaze pierced like a gleaming steel blade.']
], [
  ['欲扬先抑','yù yáng xiān yì','suppression before elevation','先极力描写平庸的外貌，再突出眼睛的非凡。','First describing the ordinary appearance in great detail, then highlighting the extraordinary eyes.','先写不好的方面来形成铺垫，再突然转向好的方面，形成巨大的反差和强烈的震撼效果。','Writing about the negative first as a buildup, then suddenly turning to the positive, creates a dramatic contrast and powerful impact.']
]);

// Lesson 9: 美丽的颜色 (The Beautiful Color)
En('The Beautiful Color', [
  ['燥热','zào rè','sweltering','棚屋里面燥热得像温室。','The shed was as sweltering as a greenhouse.'],
  ['炽热','chì rè','scorching; blazing','那个炉子即使把它烧到炽热的程度。','Even when the stove was heated to a blazing degree.'],
  ['沥青','lì qīng','pitch; asphalt','在那混着铁屑和沥青的空气中工作。','Working in air mixed with iron filings and pitch.'],
  ['猝然','cù rán','suddenly; unexpectedly','猝然看见了那美丽的颜色。','Suddenly she saw that beautiful color.'],
  ['荧光','yíng guāng','fluorescence','镭射出的荧光在黑暗中闪烁。','The fluorescence emitted by radium glowed in the darkness.']
], null);

// ═══════════════════════════════════════════
// UNIT 3 — Landscapes in Classical Chinese (山水古文)
// ═══════════════════════════════════════════

// Lesson 10: 三峡 (The Three Gorges)
En('The Three Gorges', [
  ['重岩叠嶂','chóng yán dié zhàng','layers of cliffs and peaks','重岩叠嶂，隐天蔽日。','Layer upon layer of cliffs and peaks hid the sky and blocked the sun.'],
  ['沿溯阻绝','yán sù zǔ jué','both downstream and upstream travel blocked','至于夏水襄陵，沿溯阻绝。','When summer waters surged over the hills, passage in both directions was blocked.'],
  ['素湍','sù tuān','white rapids','春冬之时，则素湍绿潭。','In spring and winter, white rapids rushed over green pools.'],
  ['属引凄异','zhǔ yǐn qī yì','prolonged and eerily mournful','常有高猿长啸，属引凄异。','Often high-perched gibbons gave long cries, prolonged and eerily mournful.'],
  ['清荣峻茂','qīng róng jùn mào','water clear, trees lush, mountains steep, grasses thick','清荣峻茂，良多趣味。','Water clear, trees lush, mountains steep, grasses thick, truly full of charm.']
], [
  ['写景顺序','xiě jǐng shùn xù','order of landscape description','先写山，后写水；写水时先夏后春冬再秋。','First describing mountains, then water; for water, starting with summer, then spring-winter, and finally autumn.','按照由整体到局部、由主要到次要的顺序安排景物描写，层次分明。','Organizing landscape description from the whole to parts, from primary to secondary, creates clear layers.']
]);

// Lesson 11: 短文二篇 (Two Short Essays)
En('Two Short Essays', [
  ['交辉','jiāo huī','to shine upon each other','两岸石壁，五色交辉。','Stone cliffs on both banks shimmered in five colors.'],
  ['欲界之仙都','yù jiè zhī xiān dōu','fairyland in the mortal world','实是欲界之仙都。','It is truly a fairyland in the mortal world.'],
  ['积水空明','jī shuǐ kōng míng','clear as pooled water','庭下如积水空明。','The courtyard was clear as pooled water bathed in moonlight.'],
  ['藻荇交横','zǎo xìng jiāo héng','water plants crisscrossing','水中藻、荇交横，盖竹柏影也。','Water plants crisscrossed in the water — actually the shadows of bamboo and cypress.'],
  ['闲人','xián rén','a person of leisure','但少闲人如吾两人者耳。','Only there are few leisurely people like the two of us.']
], [
  ['借景抒情','jiè jǐng shū qíng','expressing emotion through scenery','庭下如积水空明，水中藻、荇交横。','The courtyard was clear as pooled water; plants seemed to crisscross within.','通过描写自然景物来表达作者内心的情感和志趣。','Expressing the author\u2019s inner emotions and aspirations through descriptions of natural scenery.']
]);

// Lesson 12: 与朱元思书 (Letter to Zhu Yuansi)
En('Letter to Zhu Yuansi', [
  ['缥碧','piǎo bì','pale blue-green','水皆缥碧，千丈见底。','The water was all pale blue-green, with the bottom visible at a thousand feet.'],
  ['急湍','jí tuān','swift rapids','急湍甚箭，猛浪若奔。','The rapids were swifter than arrows, the fierce waves like galloping horses.'],
  ['息心','xī xīn','to quiet one\u2019s ambitions','鸢飞戾天者，望峰息心。','Those who soar to the sky would quiet their ambitions upon seeing these peaks.'],
  ['经纶','jīng lún','statecraft; worldly affairs','经纶世务者，窥谷忘反。','Those immersed in worldly affairs would forget to return upon glimpsing this valley.'],
  ['轩邈','xuān miǎo','to reach high and far','负势竞上，互相轩邈。','They lean on the terrain to compete upward, each reaching higher and farther.']
], null);

// Lesson 13: 唐诗五首 (Five Tang Poems)
En('Five Tang Poems', [
  ['徙倚','xǐ yǐ','to pace; to linger','东皋薄暮望，徙倚欲何依。','At East Ridge I gaze at dusk, pacing, wondering where to turn.'],
  ['悠悠','yōu yōu','drifting idly; endless','白云千载空悠悠。','White clouds drift idly through a thousand years.'],
  ['征蓬','zhēng péng','tumbling tumbleweed (metaphor for a traveler)','征蓬出汉塞，归雁入胡天。','Tumbleweeds drift from Han borders; returning geese enter barbarian skies.'],
  ['萋萋','qī qī','lush and thick','芳草萋萋鹦鹉洲。','Fragrant grass grows lush and thick on Parrot Isle.'],
  ['乱花','luàn huā','scattered blossoms','乱花渐欲迷人眼，浅草才能没马蹄。','Scattered blossoms begin to dazzle the eye; shallow grass barely hides horse hooves.']
], null);

// ═══════════════════════════════════════════
// UNIT 4 — Prose: Emotion & Philosophy (散文·情感与哲理)
// ═══════════════════════════════════════════

// Lesson 14: 背影 (The Silhouette / Back View)
En('The Silhouette (Back View)', [
  ['狼藉','láng jí','in a mess; in disarray','看见满院狼藉的东西。','Seeing the yard in complete disarray.'],
  ['蹒跚','pán shān','to stagger; to hobble','蹒跚地走到铁道边。','He staggered toward the railroad tracks.'],
  ['踌躇','chóu chú','to hesitate','他踌躇了一会，终于决定还是自己送我去。','He hesitated a while, then finally decided to see me off himself.'],
  ['颓唐','tuí táng','dejected; dispirited','哪知老境却如此颓唐！','Who would have thought his old age would be so dispirited!'],
  ['触目伤怀','chù mù shāng huái','the sight brings grief to the heart','他触目伤怀，情郁于中。','Every sight brought grief to his heart; emotions weighed heavily within him.']
], [
  ['背影的象征意义','bèi yǐng de xiàng zhēng yì yì','symbolic meaning of the silhouette','他用两手攀着上面，两脚再向上缩。','He gripped the top with both hands and drew his feet upward.','父亲买橘子时的背影是全文情感的凝聚点，象征着深沉而含蓄的父爱。','The father\u2019s back view while buying oranges is the emotional focal point of the text, symbolizing deep and understated paternal love.'],
  ['叙事散文的选材','xù shì sǎn wén de xuǎn cái','material selection in narrative prose','作者选取了送别一事中最动人的片段来表现父爱。','The author selects the most moving moment from the farewell scene to express fatherly love.','好的叙事散文善于从日常小事中选取最能打动人心的细节加以描写。','Good narrative prose excels at selecting the most touching details from everyday life for description.']
]);

// Lesson 15: 白杨礼赞 (Eulogy for the White Poplar)
En('Eulogy for the White Poplar', [
  ['坦荡如砥','tǎn dàng rú dǐ','flat and smooth as a whetstone','黄与绿主宰着，无边无垠，坦荡如砥。','Yellow and green dominate, boundless and flat as a whetstone.'],
  ['潜滋暗长','qián zī àn zhǎng','to grow silently and unseen','另一种的味儿在你心头潜滋暗长了。','Another feeling was growing silently in your heart.'],
  ['旁逸斜出','páng yì xié chū','to branch off sideways','绝不旁逸斜出。','The branches never stray sideways.'],
  ['伟岸','wěi àn','tall and sturdy; imposing','它伟岸，正直，朴质，严肃。','It is imposing, upright, plain, and solemn.'],
  ['不折不挠','bù zhé bù náo','unyielding; indomitable','不折不挠，对抗着西北风。','Unyielding, standing against the northwest wind.']
], [
  ['象征手法','xiàng zhēng shǒu fǎ','symbolism','白杨树象征了北方的农民和民族解放斗争的精神。','The white poplar symbolizes northern farmers and the spirit of national liberation.','用具体的事物来象征某种精神品质或社会力量，使抽象的概念形象化。','Using concrete objects to symbolize spiritual qualities or social forces, making abstract concepts vivid.'],
  ['排比反问','pái bǐ fǎn wèn','parallelism with rhetorical questions','难道你就觉得它只是树？难道你就不想到它的朴质？','Do you really think it is just a tree? Do you not think of its plainness?','连用排比反问句，层层递进，增强气势和说服力。','Using consecutive parallel rhetorical questions with escalating intensity to strengthen momentum and persuasion.']
]);

// Lesson 16: 散文二篇 (Two Essays)
En('Two Essays', [
  ['臼齿','jiù chǐ','molar tooth','一个人到了三十岁的边头就会发现丢失了一颗臼齿。','At around thirty, a person discovers the loss of a molar tooth.'],
  ['洗涤','xǐ dí','to wash; to cleanse','个人生命不像一件衬衣，可以脱下它来洗涤。','Individual life is not like a shirt that can be taken off and washed.'],
  ['卑微','bēi wēi','humble; lowly','地面上的小草，它们是那样卑微。','The little grasses on the ground are so humble.'],
  ['繁殖','fán zhí','to reproduce; to multiply','永不休止地繁殖着，蔓延着。','Reproducing and spreading without end.'],
  ['凋谢','diāo xiè','to wither; to fade','个体消逝了，它却永远存在。','Individual forms perish, but life itself endures forever.']
], null);

// Lesson 17: 昆明的雨 (Kunming Rain)
En('Kunming Rain', [
  ['青头菌','qīng tóu jùn','green-cap mushroom','青头菌比牛肝菌略贵。','Green-cap mushrooms are slightly more expensive than boletus.'],
  ['鲜腴','xiān yú','fresh and rich','昆明的菌子极多，且鲜腴。','Kunming had abundant mushrooms, all fresh and rich.'],
  ['缅桂','miǎn guì','Burmese osmanthus','缅桂花即白兰花，花香浓郁。','The Burmese osmanthus is white magnolia, with a rich fragrance.'],
  ['密匝匝','mì zā zā','densely packed','密匝匝的细碎的绿叶，数不清的半开的白花和饱涨的花骨朵。','Densely packed fine green leaves, countless half-open white flowers and swelling buds.'],
  ['情味','qíng wèi','emotional flavor; charm','我想念昆明的雨的情味。','I miss the emotional charm of Kunming rain.']
], null);

// ═══════════════════════════════════════════
// UNIT 5 — Expository Writing (说明文)
// ═══════════════════════════════════════════

// Lesson 18: 中国石拱桥 (China\u2019s Stone Arch Bridges)
En("China's Stone Arch Bridges", [
  ['雄跨','xióng kuà','to span grandly','能几十年几百年甚至上千年雄跨在江河之上。','They can span rivers grandly for decades, centuries, or even millennia.'],
  ['巧妙绝伦','qiǎo miào jué lún','extraordinarily ingenious','施工技术更是巧妙绝伦。','The construction techniques were extraordinarily ingenious.'],
  ['匀称','yún chèn','well-proportioned; symmetrical','全桥结构匀称，和四周景色配合得十分和谐。','The bridge is well-proportioned, harmonizing beautifully with surrounding scenery.'],
  ['惟妙惟肖','wéi miào wéi xiào','remarkably true to life','桥栏柱上的石刻狮子惟妙惟肖。','The stone lions on the bridge railing pillars are remarkably true to life.'],
  ['推崇','tuī chóng','to esteem highly','马可波罗十分推崇这座桥。','Marco Polo highly esteemed this bridge.']
], [
  ['举例子','jǔ lì zi','giving examples as explanation','以赵州桥和卢沟桥为例说明中国石拱桥的特点。','Using Zhaozhou Bridge and Lugou Bridge as examples to explain the features of Chinese stone arch bridges.','举例子是说明文中最常用的说明方法，通过具体实例使抽象概念清晰易懂。','Giving examples is the most common method in expository writing, making abstract concepts clear through concrete instances.'],
  ['列数字','liè shù zì','listing figures','全长50.82米，两端宽9.6米。','Total length 50.82 meters, width at both ends 9.6 meters.','用准确的数字来说明事物的特征，增强说明的科学性和可信度。','Using precise figures to explain characteristics enhances the scientific rigor and credibility of the explanation.']
]);

// Lesson 19: 苏州园林 (Suzhou Gardens)
En('Suzhou Gardens', [
  ['因地制宜','yīn dì zhì yí','to adapt to local conditions','设计者和匠师们因地制宜，自出心裁。','The designers and craftsmen adapted to local conditions and used their own ingenuity.'],
  ['自出心裁','zì chū xīn cái','to use one\u2019s own ingenuity','因地制宜，自出心裁。','Adapting to conditions and using their own ingenuity.'],
  ['嶙峋','lín xún','rugged; craggy','盘曲嶙峋的枝干就是一幅好画。','The rugged, twisting branches were a fine picture in themselves.'],
  ['丘壑','qiū hè','hills and valleys; a vision of landscape','胸中有丘壑。','Having a vision of landscapes in one\u2019s mind.'],
  ['镂空','lòu kōng','openwork; hollow carving','墙壁上有砖砌的各式镂空图案。','The walls had various openwork patterns in brick.']
], [
  ['总分结构','zǒng fēn jié gòu','general-to-specific structure','先总说苏州园林追求完美图画的特点，再分项具体说明。','First stating the overall principle that Suzhou Gardens pursue perfect pictures, then explaining each aspect in detail.','先提出总论点或总特征，再逐一展开具体论述，条理清晰，层次分明。','Stating the overall thesis or feature first, then elaborating point by point, creates clear organization and distinct layers.']
]);

// Lesson 20: 人民英雄永垂不朽 (The People\u2019s Heroes Are Immortal)
En("The People's Heroes Are Immortal", [
  ['瞻仰','zhān yǎng','to pay respect to; to look up at with reverence','瞻仰首都人民英雄纪念碑。','Paying respect to the Monument to the People\u2019s Heroes in the capital.'],
  ['矗立','chù lì','to stand tall; to tower','纪念碑矗立在天安门广场中心。','The monument stands tall in the center of Tiananmen Square.'],
  ['浮雕','fú diāo','relief sculpture','碑身四周有十幅巨大的浮雕。','Around the monument are ten large relief sculptures.'],
  ['上溯','shàng sù','to trace back','从碑身的浮雕可以上溯到1840年鸦片战争。','From the relief sculptures, one can trace back to the Opium War of 1840.'],
  ['丰碑','fēng bēi','great monument; milestone','人民英雄永垂不朽的丰碑。','The great monument to the immortal people\u2019s heroes.']
], null);

// Lesson 21: 蝉 (Cicadas)
En('Cicadas', [
  ['隧道','suì dào','tunnel','蝉的幼虫从地下的隧道爬出来。','The cicada larva crawls out from its underground tunnel.'],
  ['涂墁','tú màn','to plaster','幼虫用一种黏液涂墁隧道的墙壁。','The larva plasters the tunnel walls with a sticky liquid.'],
  ['金蝉脱壳','jīn chán tuō qiào','the golden cicada sheds its shell','经过漫长的等待，幼虫终于金蝉脱壳。','After a long wait, the larva finally sheds its shell like a golden cicada.'],
  ['喧嚣','xuān xiāo','noisy; clamorous','蝉的喧嚣声充满了整个夏天。','The clamorous sound of cicadas filled the entire summer.'],
  ['蜕皮','tuì pí','to molt; to shed skin','蝉要经历多次蜕皮才能变为成虫。','Cicadas must molt multiple times before becoming adults.']
], null);

// Lesson 22: 梦回繁华 (Dreaming Back to Splendor)
En('Dreaming Back to Splendor', [
  ['汴京','Biàn jīng','Bianjing (ancient Kaifeng)','张择端画了汴京的繁华景象。','Zhang Zeduan depicted the splendor of Bianjing.'],
  ['绢本','juàn běn','silk scroll','这幅画为绢本设色长卷。','This painting is a colored long scroll on silk.'],
  ['摩肩接踵','mó jiān jiē zhǒng','shoulder to shoulder; extremely crowded','街上行人摩肩接踵。','Pedestrians on the street were shoulder to shoulder.'],
  ['络绎不绝','luò yì bù jué','in an endless stream','行人络绎不绝。','Pedestrians passed by in an endless stream.'],
  ['长卷','cháng juàn','long scroll','清明上河图是一幅长卷。','Along the River During Qingming Festival is a long scroll.']
], null);

// ═══════════════════════════════════════════
// UNIT 6 — Classical Chinese: Character & Aspiration (古文·品格与志向)
// ═══════════════════════════════════════════

// Lesson 23: 《孟子》三章 (Three Chapters from Mencius)
En('Three Chapters from Mencius', [
  ['天时','tiān shí','favorable timing','天时不如地利，地利不如人和。','Favorable timing is not as good as geographical advantage; geographical advantage is not as good as unity among people.'],
  ['畔','pàn','to betray (same as 叛)','寡助之至，亲戚畔之。','When one has minimal support, even relatives betray him.'],
  ['大丈夫','dà zhàng fu','a man of noble character','富贵不能淫，贫贱不能移，威武不能屈。此之谓大丈夫。','Wealth cannot corrupt him, poverty cannot sway him, power cannot subdue him. This is what it means to be a man of noble character.'],
  ['畎亩','quǎn mǔ','fields; farmland','舜发于畎亩之中。','Shun rose from the fields.'],
  ['曾益','zēng yì','to increase (曾 same as 增)','曾益其所不能。','To increase what he could not do before.']
], [
  ['排比论证','pái bǐ lùn zhèng','parallel argumentation','舜发于畎亩之中，傅说举于版筑之间，胶鬲举于鱼盐之中。','Shun rose from the fields, Fu Yue was raised from wall-building, Jiao Ge was raised from fish and salt trading.','用一连串排比句列举多个事例来论证观点，气势恢宏，说服力强。','Using a series of parallel sentences to present multiple examples strengthens argumentation with imposing momentum and persuasive power.'],
  ['论证方法','lùn zhèng fāng fǎ','methods of argumentation','先从反面论证，再从正面论证。','Arguing from the negative side first, then from the positive side.','先说如果没有忧患会导致灭亡，再说正是忧患使人生存，正反对比增强论证力度。','First stating that the absence of hardship leads to ruin, then showing that hardship enables survival — this positive-negative contrast strengthens the argument.']
]);

// Lesson 24: 愚公移山 (The Foolish Old Man Removes the Mountains)
En('The Foolish Old Man Removes the Mountains', [
  ['万仞','wàn rèn','ten thousand ren (extremely tall)','太行、王屋二山，方七百里，高万仞。','Mount Taihang and Mount Wangwu are seven hundred li across and ten thousand ren high.'],
  ['毕力平险','bì lì píng xiǎn','to exert all strength to level the terrain','吾与汝毕力平险。','I shall exert all strength together with you to level these mountains.'],
  ['箕畚','jī běn','dustpan and basket','箕畚运于渤海之尾。','Carrying earth in dustpans and baskets to the edge of the Bohai Sea.'],
  ['寒暑易节','hán shǔ yì jié','cold and heat alternate between seasons','寒暑易节，始一反焉。','After the seasons alternated between cold and heat, they made one return trip.'],
  ['穷匮','qióng kuì','exhausted; depleted','子子孙孙无穷匮也。','Descendants will continue without end.']
], [
  ['寓言寓意','yù yán yù yì','moral of the fable','愚公精神象征着坚持不懈、知难而进的意志。','The spirit of the Foolish Old Man symbolizes perseverance and the will to advance despite difficulty.','寓言通过简短的故事传达深刻的道理，让读者在故事情节中领悟人生哲理。','Fables convey profound truths through brief stories, allowing readers to grasp life wisdom within the narrative.']
]);

// Lesson 25: 周亚夫军细柳 (Zhou Yafu\u2019s Camp at Xiliu)
En("Zhou Yafu's Camp at Xiliu", [
  ['棘门','jí mén','Jimen (place name)','上自劳军。至霸上及棘门军。','The emperor personally visited the armies, arriving at Bashang and Jimen camps.'],
  ['介胄','jiè zhòu','wearing armor and helmet','将军约，军中不得驱驰。天子且至，介胄之士不拜。','The general ordered: no galloping in camp. When the emperor arrives, armored soldiers do not bow.'],
  ['按辔徐行','àn pèi xú xíng','to hold the reins and proceed slowly','于是天子乃按辔徐行。','So the emperor held his reins and proceeded slowly.'],
  ['持兵揖','chí bīng yī','to salute with weapons in hand','以军礼见，持兵揖。','Meeting with military protocol, saluting with weapons in hand.'],
  ['嗟乎','jiē hū','alas; oh','嗟乎，此真将军矣！','Alas, this is a true general indeed!']
], null);

// Lesson 26: 诗词五首 (Five Poems and Ci)
En('Five Poems and Ci', [
  ['结庐','jié lú','to build a hut','结庐在人境，而无车马喧。','I built my hut amid the world of men, yet hear no clamor of horse or carriage.'],
  ['烽火','fēng huǒ','beacon fires (signal of war)','烽火连三月，家书抵万金。','Beacon fires have burned for three months; a letter from home is worth ten thousand gold.'],
  ['折戟','zhé jǐ','a broken halberd','折戟沉沙铁未销。','A broken halberd sunk in sand, its iron not yet rusted away.'],
  ['金鳞','jīn lín','golden scales','甲光向日金鳞开。','Armor gleams toward the sun like golden scales.'],
  ['云涛','yún tāo','cloud waves','天接云涛连晓雾。','Sky meets cloud waves and morning mist.']
], null);

// ═══════════════════════════════════════════
// SAVE AND VALIDATE
// ═══════════════════════════════════════════
saveAndValidate('textbook_g8s1.js', code, 'TB_G8S1');
