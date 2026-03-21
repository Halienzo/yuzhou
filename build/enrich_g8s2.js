/**
 * Enrich textbook_g8s2.js with vocabWords and grammarPoints
 * Grade 8 Semester 2 — All 24 lessons
 * Run: cd /e/chinese && node build/enrich_g8s2.js
 */
const fs = require('fs');
const { enrichByEn, saveAndValidate } = require('./enrich_lib');
let code = fs.readFileSync('textbook_g8s2.js', 'utf8');
const En = (t, v, g) => { code = enrichByEn(code, t, v, g); };

// ═══════════════════════════════════════════
// UNIT 1 — Folk Customs (民俗风情)
// ═══════════════════════════════════════════

// Lesson 1: 社戏
En('Village Opera', [
  ['消夏','xiāo xià','to spend the summer; to escape the heat','夏间便大抵回到母家去消夏。','In summer she would usually go back to her maiden home to escape the heat.'],
  ['撺掇','cuān duo','to urge; to egg on','十几个别的少年也大悟，立刻撺掇起来。','A dozen other boys understood at once and began egging everyone on.'],
  ['朦胧','méng lóng','hazy; dim','月色便朦胧在这水气里。','The moonlight became hazy in the mist over the water.'],
  ['踊跃','yǒng yuè','eager; enthusiastic','淡黑的起伏的连山，仿佛是踊跃的铁的兽脊似的。','The undulating dark hills looked like the leaping iron spines of beasts.'],
  ['皎洁','jiǎo jié','bright and clean (of moonlight)','一离赵庄，月光又显得格外的皎洁。','Once we left Zhaozhuang, the moonlight seemed especially bright and clean.']
], [
  ['多种表达方式','duō zhǒng biǎo dá fāng shì','multiple modes of expression','两岸的豆麦和河底的水草所发散出来的清香，夹杂在水气中扑面的吹来。','The fragrance of beans and wheat from both banks and waterweed from the river bottom mingled in the mist and blew into our faces.','综合运用叙述、描写、抒情等多种表达方式，使文章更加生动感人。','Combining narration, description, and lyrical expression makes writing more vivid and moving.'],
  ['侧面烘托','cè miàn hōng tuō','indirect portrayal','那航船，就像一条大白鱼背着一群孩子在浪花里蹿。','The boat was like a great white fish carrying a group of children and leaping through the spray.','通过比喻和侧面描写来衬托人物心情或环境氛围。','Using metaphor and indirect description to set off characters\u2019 moods or atmosphere.']
]);

// Lesson 2: 回延安
En('Return to Yan\\u2019an', [
  ['信天游','xìn tiān yóu','a folk song style of northern Shaanxi','全诗采用陕北民歌信天游的形式。','The entire poem uses the Shaanxi folk song form of xin tian you.'],
  ['糜子','méi zi','broomcorn millet','东山的糜子西山的谷。','Broomcorn millet on the eastern hills, grain on the western hills.'],
  ['满窑','mǎn yáo','a full cave dwelling','满窑里围得不透风。','The cave dwelling was packed so tight that no breeze could get through.'],
  ['脑畔','nǎo pàn','hillside; slope (Shaanxi dialect)','杨家岭的红旗啊高高地飘，革命万里起高潮。','The red flag at Yangjia Hill flies high, revolution surges across ten thousand miles.'],
  ['几回回','jǐ huí huí','time after time (dialect)','几回回梦里回延安，双手搂定宝塔山。','Time after time I dreamed of returning to Yan\u2019an, embracing Pagoda Hill with both arms.']
], null);

// Lesson 3: 安塞腰鼓
En('Ansai Waist Drum', [
  ['亢奋','kàng fèn','extremely excited; exhilarated','使困倦的世界立即变得亢奋了。','It immediately turned the weary world into a state of exhilaration.'],
  ['羁绊','jī bàn','fetters; restraints','容不得束缚，容不得羁绊，容不得闭塞。','It cannot stand confinement, cannot stand restraints, cannot stand isolation.'],
  ['蓦然','mò rán','suddenly; abruptly','山崖蓦然变成牛皮鼓面了。','The cliff suddenly became a cowhide drumhead.'],
  ['磅礴','páng bó','majestic; boundless','居然可以释放出那么奇伟磅礴的能量。','They could actually release such magnificent and boundless energy.'],
  ['戛然而止','jiá rán ér zhǐ','to come to an abrupt stop','当它戛然而止的时候，世界出奇地寂静。','When it came to an abrupt stop, the world was remarkably silent.']
], [
  ['排比','pái bǐ','parallelism','骤雨一样，是急促的鼓点；旋风一样，是飞扬的流苏。','Like a sudden rainstorm are the rapid drumbeats; like a whirlwind are the flying tassels.','连续使用排比句式，增强语言气势，营造出激昂奔放的节奏感。','Using successive parallel structures strengthens momentum and creates an intense, uninhibited sense of rhythm.'],
  ['反复','fǎn fù','repetition','好一个安塞腰鼓！','What a magnificent Ansai waist drum!','反复出现的感叹句贯穿全文，起到强调主题、深化情感的作用。','The exclamatory sentence repeated throughout the text emphasizes the theme and deepens emotional impact.']
]);

// Lesson 4: 灯笼
En('Lanterns', [
  ['斡旋','wò xuán','to mediate; to negotiate','祖父好，在路上轻易不提斡旋着的情事。','Grandfather was kind and would not easily mention the disputes he was mediating.'],
  ['怅惘','chàng wǎng','melancholy; wistful','深深感到怅惘。','I felt deeply wistful.'],
  ['熙熙然','xī xī rán','warm and peaceful','那种熙熙然庭院的静穆。','That warm and peaceful tranquility of the courtyard.'],
  ['锵然','qiāng rán','with a clear ringing sound','遍悬珠玉金银而风至锵然。','Hung all over with jewels and gold that rang clearly when the wind blew.'],
  ['燎原','liáo yuán','to spread like wildfire','正萧萧班马鸣也，我愿就是那灯笼下的马前卒。','As war horses neigh in farewell, I would be the foot soldier carrying a lantern.']
], null);

// ═══════════════════════════════════════════
// UNIT 2 — Science and Explanation (科学说明)
// ═══════════════════════════════════════════

// Lesson 5: 大自然的语言
En('The Language of Nature', [
  ['物候','wù hòu','phenology; seasonal phenomena','这些自然现象，我国古代劳动人民称它为物候。','Ancient Chinese working people called these natural phenomena phenology.'],
  ['翩然','piān rán','gracefully; lightly','再过两个月，燕子翩然归来。','Two more months later, the swallows gracefully return.'],
  ['销声匿迹','xiāo shēng nì jì','to vanish without a trace','活跃在田间草际的昆虫也都销声匿迹。','The insects active in the fields and grass all vanish without a trace.'],
  ['次第','cì dì','one after another; in order','各种花次第开放。','Various flowers bloom one after another.'],
  ['悬殊','xuán shū','vastly different; disparity','冬季南北温度悬殊。','In winter the temperature difference between north and south is vast.']
], [
  ['说明顺序','shuō míng shùn xù','order of explanation','首先是纬度。经度的差异是影响物候的第二个因素。影响物候的第三个因素是高下的差异。','First comes latitude. Longitude is the second factor. The third factor is altitude.','按照由主到次的逻辑顺序说明物候现象的决定因素，条理清晰。','Explaining the determining factors of phenological phenomena in order from primary to secondary makes the logic clear.'],
  ['举例子','jǔ lì zi','giving examples','北京的物候记录，1962年的山桃、杏花、苹果的花期比1961年迟十天左右。','Beijing phenological records show that the blooming of mountain peach, apricot, and apple in 1962 was about ten days later than in 1961.','用具体的数据和实例来支持说明，增强文章的说服力和可信度。','Using specific data and real examples to support explanations strengthens persuasiveness and credibility.']
]);

// Lesson 6: 阿西莫夫短文两篇
En('Two Short Essays by Asimov', [
  ['骨骼','gǔ gé','skeleton; bones','宣布在詹姆斯罗斯岛发现了一些骨骼化石。','They announced the discovery of some skeletal fossils on James Ross Island.'],
  ['漂移','piāo yí','to drift','是大陆在漂移而不是恐龙自己在迁移。','It was the continents that were drifting, not the dinosaurs migrating.'],
  ['褶皱','zhě zhòu','folds; creases (geological)','两个陆块在那里聚合并缓慢地褶皱变形。','The two landmasses converged there and slowly folded and deformed.'],
  ['致密','zhì mì','extremely dense; compact','如果二氧化硅处于超高压的状态，那么它的原子相距很近，从而变得极为致密。','If silicon dioxide is under extreme pressure, its atoms are so close together that it becomes extremely dense.'],
  ['衍射','yǎn shè','diffraction','利用核磁共振和X光衍射，他们确实检测到了斯石英中存在的一种原子排列。','Using NMR and X-ray diffraction, they did detect an atomic arrangement found in stishovite.']
], [
  ['逻辑推理','luó jí tuī lǐ','logical reasoning','恐龙不可能在每一块大陆上独立生存，那么它们是如何越过大洋到另一个大陆上去的呢？','Dinosaurs could not have evolved independently on each continent, so how did they cross the oceans?','通过提出问题并逐步推理得出结论，体现科学说明文的严密逻辑。','Posing questions and reasoning step by step to reach conclusions reflects the rigorous logic of scientific exposition.']
]);

// Lesson 7: 大雁归来
En('The Return of the Wild Geese', [
  ['缄默','jiān mò','silence; reticence','它还可以纠正自己的错误，继续保持它在冬季的缄默。','It can still correct its mistake and continue its winter silence.'],
  ['迁徙','qiān xǐ','to migrate','一只定期迁徙的大雁，下定了在黑夜飞行200英里的赌注。','A goose that migrates on schedule has staked its bet on flying 200 miles through the dark.'],
  ['凋零','diāo líng','withered; fallen','返回的雁群像凋零的枫叶一样摇晃着从空中落下来。','The returning geese fell from the sky like withered maple leaves.'],
  ['喧闹','xuān nào','noisy; clamorous','从早到晚，它们一群一群地喧闹着往收割后的玉米地飞去。','From dawn to dusk they fly in noisy groups to the harvested cornfields.'],
  ['弥漫','mí màn','to fill; to permeate','我们的沼泽便再次成为弥漫着青草气息的地方。','Our marsh once again becomes a place permeated with the scent of green grass.']
], null);

// Lesson 8: 时间的脚印
En('Footprints of Time', [
  ['踪迹','zōng jì','trace; track','人们却想出了许多法子记录下它的踪迹。','People have devised many ways to record its traces.'],
  ['腐蚀','fǔ shí','to corrode; to erode','空气和水中的酸类，腐蚀了岩石中的一部分物质。','Acids in air and water corroded some of the substances in the rock.'],
  ['胶结','jiāo jié','to cement together','有一些物质填充到泥沙中的孔隙里去，就使泥沙胶结得更紧密了。','Some substances filled the gaps in the sediment, cementing it more tightly.'],
  ['沉淀','chén diàn','to precipitate; to settle','有许多泥沙沉淀下来的结果。','The result of much sediment settling down.'],
  ['浑浊','hún zhuó','muddy; turbid','黄河中下游河水变得浑浊。','The water of the middle and lower Yellow River becomes turbid.']
], null);

// ═══════════════════════════════════════════
// UNIT 3 — Classical Prose and Poetry (古文诗词)
// ═══════════════════════════════════════════

// Lesson 9: 桃花源记
En('The Peach Blossom Spring', [
  ['缤纷','bīn fēn','in great abundance; profuse','芳草鲜美，落英缤纷。','The fragrant grass was fresh and beautiful, and fallen petals lay in profusion.'],
  ['豁然开朗','huò rán kāi lǎng','suddenly seeing the light; wide and open','复行数十步，豁然开朗。','Walking on a few dozen more steps, the view suddenly opened up wide.'],
  ['俨然','yǎn rán','neat and orderly','屋舍俨然。','The houses were neat and orderly.'],
  ['怡然自乐','yí rán zì lè','happy and content','黄发垂髫，并怡然自乐。','The old and the young were all happy and content.'],
  ['叹惋','tàn wǎn','to sigh with regret','此人一一为具言所闻，皆叹惋。','This man told them everything he had heard, and they all sighed with regret.']
], [
  ['虚实相映','xū shí xiāng yìng','interplay of reality and fantasy','寻向所志，遂迷，不复得路。','They looked for the marks he had made, but lost their way and never found the path again.','通过虚实结合，既描写了桃花源的美好，又暗示其不可复得，寄寓理想与现实的矛盾。','By blending reality and fantasy, the text both depicts the beauty of the Peach Blossom Spring and implies it can never be found again, embodying the tension between ideal and reality.'],
  ['古今异义','gǔ jīn yì yì','words with different ancient and modern meanings','率妻子邑人来此绝境。','He brought his wife, children, and townspeople to this isolated place.','文言文中"妻子"指妻子和儿女，"绝境"指与世隔绝的地方，与现代汉语含义不同。','In classical Chinese, "wife and children" means wife and children together, and "dead end" means a place cut off from the world, different from modern usage.']
]);

// Lesson 10: 小石潭记
En('Record of the Small Stone Pond', [
  ['清冽','qīng liè','clear and cool','水尤清冽。','The water was especially clear and cool.'],
  ['佁然','yǐ rán','still; motionless','佁然不动。','Motionless and still.'],
  ['翕忽','xī hū','swift and darting','往来翕忽，似与游者相乐。','Darting back and forth, as if playing with the visitors.'],
  ['悄怆','qiǎo chuàng','sad and desolate','凄神寒骨，悄怆幽邃。','It chilled the spirit and the bones, sad, desolate, and profoundly deep.'],
  ['犬牙差互','quǎn yá cī hù','jagged like dog teeth','其岸势犬牙差互。','The banks were jagged like dog teeth.']
], [
  ['情景交融','qíng jǐng jiāo róng','blending emotion with scenery','坐潭上，四面竹树环合，寂寥无人，凄神寒骨，悄怆幽邃。','Sitting beside the pond, bamboo and trees enclosed it on all sides, lonely and deserted, chilling the spirit and the bones, sad and profoundly deep.','先写景物之幽美，后转为凄清孤寂，借景抒发被贬后的抑郁之情。','First depicting the secluded beauty of the scene, then shifting to desolation, using scenery to express the melancholy of exile.']
]);

// Lesson 11: 核舟记
En('The Nuclear Boat', [
  ['罔不','wǎng bù','without exception; all','罔不因势象形，各具情态。','Without exception he carved to follow the natural shape, each figure with its own expression.'],
  ['峨冠','é guān','tall hat','中峨冠而多髯者为东坡。','The one in the center with the tall hat and abundant beard was Dongpo.'],
  ['矫首','jiǎo shǒu','to raise the head','矫首昂视。','He raised his head and gazed upward.'],
  ['历历','lì lì','clearly; distinctly','珠可历历数也。','The beads could be clearly counted one by one.'],
  ['叹为观止','tàn wéi guān zhǐ','to gasp in admiration','技亦灵怪矣哉！','What marvelous and wondrous skill!']
], null);

// Lesson 12: 《诗经》二首
En('Two Poems from the Book of Songs', [
  ['窈窕','yǎo tiǎo','graceful and beautiful','窈窕淑女，君子好逑。','A graceful and virtuous maiden is a fine match for a gentleman.'],
  ['辗转反侧','zhǎn zhuǎn fǎn cè','to toss and turn in bed','悠哉悠哉，辗转反侧。','Longing and longing, tossing and turning.'],
  ['蒹葭','jiān jiā','reeds','蒹葭苍苍，白露为霜。','The reeds grow thick and green, the white dew has turned to frost.'],
  ['溯洄','sù huí','to go against the current','溯洄从之，道阻且长。','I follow against the current, the road is difficult and long.'],
  ['伊人','yī rén','that person; the one I love','所谓伊人，在水一方。','The one I love is on the other side of the water.']
], [
  ['重章叠句','chóng zhāng dié jù','repeated stanzas with slight variations','蒹葭苍苍……蒹葭萋萋……蒹葭采采。','The reeds grow thick... the reeds grow lush... the reeds grow bright.','每章只更换少数词语，反复咏唱，形成回环往复的表达效果，深化思念之情。','Changing only a few words in each stanza and singing repeatedly creates a cyclical effect that deepens the feeling of longing.']
]);

// ═══════════════════════════════════════════
// UNIT 4 — Speeches (活动·探究: 演讲)
// ═══════════════════════════════════════════

// Lesson 13: 最后一次讲演
En('The Last Speech', [
  ['卑劣','bēi liè','despicable; contemptible','在昆明出现了历史上最卑劣最无耻的事情。','The most despicable and shameless event in history has occurred in Kunming.'],
  ['毒手','dú shǒu','murderous hand','李先生究竟犯了什么罪，竟遭此毒手？','What crime did Mr. Li commit to meet such a murderous hand?'],
  ['诬蔑','wū miè','to slander; to vilify','杀死了人，又不敢承认，还要诬蔑人。','They killed a person, dared not admit it, and even slandered the victim.'],
  ['赋予','fù yǔ','to bestow; to give','争取民主和平是要付出代价的，但历史赋予我们的任务是争取民主。','The struggle for democracy and peace comes at a cost, but history has bestowed on us the task of fighting for democracy.'],
  ['光明正大','guāng míng zhèng dà','open and aboveboard','为什么不敢光明正大地来打来杀？','Why do they not dare to act in the open?']
], [
  ['演讲技巧','yǎn jiǎng jì qiǎo','public speaking techniques','你站出来！是好汉的站出来！你出来讲！凭什么要杀死李先生？','You come out! If you are a real man, come out! Speak up! What justification was there to kill Mr. Li?','使用短句、感叹句、反问句，配合直接呼告，使演讲慷慨激昂、直击人心。','Using short sentences, exclamations, and rhetorical questions combined with direct address makes the speech passionate and deeply moving.']
]);

// Lesson 14: 应有格物致知精神
En('The Spirit of Investigation', [
  ['格物致知','gé wù zhì zhī','to investigate things and extend knowledge','应有格物致知精神。','One should have the spirit of investigating things to extend knowledge.'],
  ['彷徨','páng huáng','to hesitate; to waver','一个受中国传统教育长大的学生研究科学时往往感到彷徨。','A student raised under traditional Chinese education often feels at a loss when studying science.'],
  ['探索','tàn suǒ','to explore; to probe','科学需要的是实际的探索。','Science requires practical exploration.'],
  ['袖手旁观','xiù shǒu páng guān','to stand by with folded arms','传统的中国教育重视理论而忽视实验，让学生袖手旁观。','Traditional Chinese education values theory over experiment, letting students stand by passively.'],
  ['推究','tuī jiū','to investigate; to deduce','一切推究事物的道理都叫做格物。','All investigation into the principles of things is called the study of things.']
], [
  ['举例论证','jǔ lì lùn zhèng','argumentation by example','明朝大理论家王阳明要依照朱熹的方法来格物致知，结果他格了七天竹子也没有格出什么道理来。','The great Ming theorist Wang Yangming tried to study things following Zhu Xi\u2019s method, but after contemplating bamboo for seven days he found no principles.','用王阳明格竹的典型事例来论证纯粹内省不能获得科学知识，增强了说服力。','Using the classic example of Wang Yangming contemplating bamboo proves that pure introspection cannot yield scientific knowledge, strengthening persuasiveness.']
]);

// Lesson 15: 我一生中的重要抉择
En('Important Choices in My Life', [
  ['抉择','jué zé','choice; decision','我一生中的重要抉择。','The important choices in my life.'],
  ['阳关道','yáng guān dào','the broad highway; a promising path','跨越学科的独木桥，走上阳关道。','Crossing the narrow bridge between disciplines onto the broad highway.'],
  ['前沿','qián yán','forefront; cutting edge','在前沿课题上努力攻关。','Working hard on cutting-edge research topics.'],
  ['芯片','xīn piàn','microchip','发展汉字激光照排系统，用芯片存储字库。','Developing a Chinese laser typesetting system using microchips to store character libraries.'],
  ['权衡','quán héng','to weigh; to balance','抉择就是一种权衡。','Making a choice involves weighing alternatives.']
], null);

// Lesson 16: 庆祝奥林匹克运动复兴25周年
En('Celebrating 25 Years of Olympic Revival', [
  ['浩劫','hào jié','catastrophe; great disaster','五年前人类的浩劫曾使奥林匹克理想蒙尘。','Five years ago the catastrophe of humanity had tarnished the Olympic ideal.'],
  ['萦绕','yíng rào','to linger; to hover','平和与自信重新萦绕在人们心头。','Peace and confidence once again lingered in people\u2019s hearts.'],
  ['拙劣','zhuō liè','clumsy; inferior','拙劣的作假行为是对奥林匹克精神的亵渎。','Clumsy acts of cheating are a desecration of the Olympic spirit.'],
  ['分崩离析','fēn bēng lí xī','to fall apart; to disintegrate','如果没有这种精神，人类社会将分崩离析。','Without this spirit, human society would fall apart.'],
  ['自圆其说','zì yuán qí shuō','to make a self-consistent argument','奥林匹克精神包含但又超越了竞技体育，这并非自圆其说。','The Olympic spirit encompasses but transcends competitive sports; this is not mere self-justification.']
], [
  ['演讲词结构','yǎn jiǎng cí jié gòu','structure of a speech','五年前，在美丽的巴黎……如今在这光辉的周年纪念日。','Five years ago, in beautiful Paris... now on this glorious anniversary.','演讲词以时间推进和层层深入的方式展开，从回顾历史到展望未来，结构严谨。','The speech unfolds chronologically and progressively, from reviewing history to looking ahead, with a rigorous structure.']
]);

// ═══════════════════════════════════════════
// UNIT 5 — Travel Writing (游记)
// ═══════════════════════════════════════════

// Lesson 17: 壶口瀑布
En('Hukou Waterfall', [
  ['震耳欲聋','zhèn ěr yù lóng','deafening','除了扑面而来的水汽，震耳欲聋的涛声。','Aside from the spray hitting our faces, the deafening roar of the torrent.'],
  ['推搡','tuī sǎng','to push and shove','河水从五百米宽的河道上排排涌来，互相挤着、撞着，推推搡搡。','The river water surged forward in rows from the 500-meter-wide channel, squeezing and pushing one another.'],
  ['驰骋','chí chěng','to gallop; to race freely','当河水正这般畅畅快快地驰骋着时。','Just as the river was galloping along so freely and joyfully.'],
  ['怒不可遏','nù bù kě è','to be unable to contain one\u2019s fury','至柔至和的水一旦被压迫竟会这样怒不可遏。','Water, the gentlest and most yielding of things, once pressed can become furious beyond restraint.'],
  ['漩涡','xuán wō','whirlpool; vortex','沟底飞转着一个个漩涡。','Whirlpools spun rapidly at the bottom of the gorge.']
], [
  ['移步换景','yí bù huàn jǐng','changing scenes with each step','第一次是雨季……第二次我专选了个枯水季节。','The first time was during rainy season... the second time I chose a dry season.','两次游览壶口呈现不同景象，体现了移步换景、时空对比的写作手法。','Two visits to Hukou present different scenes, demonstrating the technique of shifting perspectives and contrasting time and space.'],
  ['象征手法','xiàng zhēng shǒu fǎ','symbolism','这伟大只在冲过壶口的一刹那才闪现出来被我们看见。','This greatness only flashes into view the instant it surges through the Hukou.','以黄河之水的博大和壮美象征中华民族百折不挠的精神力量。','The grandeur and magnificence of the Yellow River waters symbolize the indomitable spiritual strength of the Chinese nation.']
]);

// Lesson 18: 在长江源头各拉丹冬
En('At the Source of the Yangtze: Geladandong', [
  ['接踵而至','jiē zhǒng ér zhì','to come one after another','各种高原反应接踵而至。','Various altitude sickness symptoms came one after another.'],
  ['砾石','lì shí','gravel; pebbles','冰河旁满是砾石。','The side of the glacier was full of gravel.'],
  ['消长','xiāo zhǎng','to ebb and flow; wax and wane','冰塔林的消长是大自然的杰作。','The waxing and waning of the ice tower forest is a masterpiece of nature.'],
  ['虔诚','qián chéng','devout; reverent','我以十分虔诚的目光注视着这片冰雪世界。','I gazed at this world of ice and snow with utterly reverent eyes.'],
  ['蜿蜒','wān yán','winding; meandering','远方是蜿蜒的冰河。','In the distance was a meandering glacier.']
], null);

// Lesson 19: 登勃朗峰
En('Climbing Mont Blanc', [
  ['翌日','yì rì','the next day','翌日我们便去登勃朗峰。','The next day we set off to climb Mont Blanc.'],
  ['络绎不绝','luò yì bù jué','in an endless stream','登山的人络绎不绝。','People climbing the mountain came in an endless stream.'],
  ['巉峻','chán jùn','steep and precipitous','这些巉峻的山峰在阳光下闪烁。','These steep peaks glittered in the sunlight.'],
  ['拾级','shè jí','to climb steps; to ascend','沿途拾级而上。','We ascended step by step along the way.'],
  ['纷至沓来','fēn zhì tà lái','to come in swarms','美景纷至沓来，让人目不暇接。','Beautiful scenery came in a flood, more than the eye could take in.']
], null);

// Lesson 20: 一滴水经过丽江
En('A Drop of Water Through Lijiang', [
  ['驿道','yì dào','post road; courier route','顺着驿道，我来到了丽江坝。','Following the post road, I arrived at the Lijiang plain.'],
  ['翡翠','fěi cuì','jade; emerald','玉龙雪山的冰川像一块翡翠。','The glacier of Jade Dragon Snow Mountain was like a piece of emerald.'],
  ['目眩神迷','mù xuàn shén mí','dazzled and mesmerized','那壮丽的雪山让人目眩神迷。','The magnificent snow mountain left people dazzled and mesmerized.'],
  ['苍劲','cāng jìng','bold and vigorous','纳西族的东巴文字苍劲有力。','The Dongba script of the Naxi people is bold and vigorous.'],
  ['喧哗','xuān huá','clamor; hubbub','不同民族的人使四方街一片喧哗。','People of different ethnic groups filled Sifang Street with a clamor.']
], null);

// ═══════════════════════════════════════════
// UNIT 6 — Classical Philosophy and Poetry (古文与诗歌)
// ═══════════════════════════════════════════

// Lesson 21: 《庄子》二则
En('Two Selections from Zhuangzi', [
  ['鲲鹏','kūn péng','the great Kun fish and Peng bird','鲲之大，不知其几千里也。','The Kun fish is so huge that no one knows how many thousands of miles it stretches.'],
  ['扶摇','fú yáo','whirlwind; rising wind','抟扶摇而上者九万里。','Riding the whirlwind, it spirals up to ninety thousand miles.'],
  ['从容','cóng róng','leisurely; unhurried','鲦鱼出游从容，是鱼之乐也。','The minnows swim about so leisurely; that is the joy of fish.'],
  ['濠梁','háo liáng','the bridge over the Hao River','庄子与惠子游于濠梁之上。','Zhuangzi and Huizi were strolling on the bridge over the Hao River.'],
  ['循其本','xún qí běn','to trace back to the origin','请循其本。','Please let us go back to the beginning of this argument.']
], [
  ['寓言说理','yù yán shuō lǐ','reasoning through fables','北冥有鱼，其名为鲲。鲲之大，不知其几千里也。','In the northern sea there is a fish called Kun. The Kun is so huge that no one knows how many thousands of miles it stretches.','庄子善于用寓言故事来表达哲学思想，鲲鹏的寓言寄托了对精神自由的向往。','Zhuangzi excels at using fables to express philosophical ideas; the Kun-Peng fable embodies the yearning for spiritual freedom.'],
  ['论辩技巧','lùn biàn jì qiǎo','debating technique','子非鱼，安知鱼之乐？子非我，安知我不知鱼之乐？','You are not a fish; how do you know the joy of fish? You are not me; how do you know I do not know the joy of fish?','庄子巧妙地用对方的逻辑来反驳对方，体现了高超的论辩技巧。','Zhuangzi cleverly uses the opponent\u2019s own logic to refute him, demonstrating superb debating skill.']
]);

// Lesson 22: 《礼记》二则
En('Two Selections from the Book of Rites', [
  ['嘉肴','jiā yáo','fine delicacies','虽有嘉肴，弗食，不知其旨也。','Even with fine delicacies, if you do not eat them, you will not know their flavor.'],
  ['教学相长','jiào xué xiāng zhǎng','teaching and learning promote each other','故曰：教学相长也。','Therefore it is said: teaching and learning promote each other.'],
  ['天下为公','tiān xià wéi gōng','the world belongs to all','大道之行也，天下为公。','When the Great Way prevails, the world belongs to all.'],
  ['选贤与能','xuǎn xián jǔ néng','to select the virtuous and capable','选贤与能，讲信修睦。','Select the virtuous and capable, cultivate trust and harmony.'],
  ['大同','dà tóng','great unity; utopia','是谓大同。','This is called the Great Unity.']
], [
  ['类比论证','lèi bǐ lùn zhèng','argument by analogy','虽有嘉肴，弗食，不知其旨也；虽有至道，弗学，不知其善也。','Even with fine delicacies, without tasting you will not know the flavor; even with the best teachings, without studying you will not know their value.','用品尝美食来类比学习道理，深入浅出，使抽象道理变得具体易懂。','Comparing tasting fine food to learning principles makes the abstract concrete and easy to understand.']
]);

// Lesson 23: 马说
En('On the Horse', [
  ['伯乐','bó lè','Bole, a legendary judge of horses','世有伯乐，然后有千里马。','Only when there is a Bole in the world can there be a thousand-mile horse.'],
  ['骈死','pián sǐ','to die side by side (with common horses)','祗辱于奴隶人之手，骈死于槽枥之间。','It is merely humiliated at the hands of servants and dies side by side with common horses in the stable.'],
  ['千里马','qiān lǐ mǎ','a horse that can run a thousand miles; a person of great talent','千里马常有，而伯乐不常有。','Thousand-mile horses are common, but Boles are rare.'],
  ['策之','cè zhī','to whip it; to drive it','策之不以其道。','They whip it without using the proper method.'],
  ['食马者','sì mǎ zhě','the one who feeds the horse','食马者不知其能千里而食也。','The one who feeds it does not realize it can run a thousand miles.']
], [
  ['托物言志','tuō wù yán zhì','expressing aspirations through objects','其真无马邪？其真不知马也！','Is it really that there are no good horses? They simply do not recognize them!','借千里马不被赏识的命运，寄托作者怀才不遇的悲愤之情。','Through the fate of the unrecognized thousand-mile horse, the author expresses his indignation at being talented but unappreciated.']
]);

// Lesson 24: 唐诗三首
En('Three Tang Poems', [
  ['逾墙','yú qiáng','to climb over the wall','老翁逾墙走。','The old man climbed over the wall and fled.'],
  ['戍','shù','to garrison; to guard','三男邺城戍。','My three sons were sent to garrison Ye City.'],
  ['布衾','bù qīn','cloth quilt','布衾多年冷似铁。','The cloth quilt, old for many years, was cold as iron.'],
  ['广厦','guǎng shà','great mansions','安得广厦千万间，大庇天下寒士俱欢颜。','If only I could have great mansions by the thousands to shelter all the poor scholars of the world!'],
  ['翩翩','piān piān','dashing; graceful','翩翩两骑来是谁？','Who are the two dashing riders that come?']
], [
  ['叙事诗','xù shì shī','narrative poetry','暮投石壕村，有吏夜捉人。','At dusk I sought lodging at Shihao Village; an officer came at night to seize men.','《石壕吏》以叙事为主，通过客观记叙反映战乱中百姓的苦难。','The Shihao Officer is primarily narrative, reflecting the suffering of common people in wartime through objective recording.'],
  ['忧国忧民','yōu guó yōu mín','concern for the nation and the people','安得广厦千万间，大庇天下寒士俱欢颜！','If only I could have great mansions by the thousands to shelter all the poor scholars!','从个人困境升华到忧国忧民的博大情怀，体现了杜甫诗歌的核心精神。','Elevating personal hardship to concern for the nation and the people embodies the core spirit of Du Fu\u2019s poetry.']
]);

// ═══════════════════════════════════════════
// Save and validate
// ═══════════════════════════════════════════
saveAndValidate('textbook_g8s2.js', code, 'TB_G8S2');
