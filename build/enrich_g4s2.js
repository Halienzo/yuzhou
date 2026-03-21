/**
 * Enrich textbook_g4s2.js with vocabWords + grammarPoints
 * Run: node build/enrich_g4s2.js
 * SECURITY NOTE: Build-time enrichment on trusted local files.
 */
const fs = require('fs');
const { enrichLesson, enrichByEn, saveAndValidate } = require('./enrich_lib');
let code = fs.readFileSync('textbook_g4s2.js', 'utf8');
const E = (t, v, g) => { code = enrichLesson(code, t, v, g); };
const En = (t, v, g) => { code = enrichByEn(code, t, v, g); };

// Unit 1
E('古诗词三首', [
  ['四时田园杂兴','sì shí tián yuán zá xìng','Rural Pleasures in Four Seasons','昼出耘田夜绩麻。','Plow by day, spin hemp at night.'],
  ['蜻蜓','qīng tíng','dragonfly','日长篱落无人过，唯有蜻蜓蛱蝶飞。','Long days, no one passes; only dragonflies and butterflies fly.'],
  ['乡村','xiāng cūn','countryside','乡村四月闲人少。','In the countryside in April, few are idle.'],
  ['翁媪','wēng ǎo','old couple','白发谁家翁媪。','Whose white-haired old couple is this?'],
  ['清平乐','qīng píng yuè','a ci tune name','清平乐·村居。','Qingpingle: Country Living.']
], [
  ['词','cí','ci (lyric poetry)','清平乐是词牌名。','Qingpingle is a ci tune name.','词是古代的一种诗歌体裁，有固定的格律','Ci is a type of poetry with fixed meter and rhythm']
]);

E('乡下人家', [
  ['装饰','zhuāng shì','decorate','青瓜藤和绿叶装饰了屋檐。','Cucumber vines and green leaves decorate the eaves.'],
  ['朴素','pǔ sù','simple; plain','乡下人家虽然朴素。','Country homes are simple.'],
  ['独特','dú tè','unique','有一道独特的风景。','A unique scenery.'],
  ['和谐','hé xié','harmonious','自然和谐的风景。','Natural, harmonious scenery.'],
  ['觅食','mì shí','forage','母鸡带着鸡雏觅食。','The hen forages with her chicks.']
], [
  ['过渡句','guò dù jù','transition sentence','乡下人家，不论什么时候，都有一道独特的风景。','Country homes always have unique scenery.','连接上下文，起承上启下作用','Connects paragraphs, bridging from one to the next']
]);

E('天窗', [
  ['天窗','tiān chuāng','skylight','屋顶开了一个天窗。','A skylight was opened in the roof.'],
  ['安慰','ān wèi','comfort','天窗是孩子们的安慰。','The skylight was comfort for children.'],
  ['想象','xiǎng xiàng','imagine','透过天窗想象外面的世界。','Imagine the world outside through the skylight.'],
  ['闪电','shǎn diàn','lightning','一道闪电划过天窗。','A bolt of lightning flashes across the skylight.'],
  ['神奇','shén qí','magical','天窗是神奇的。','The skylight is magical.']
], null);

E('三月桃花水', [
  ['桃花','táo huā','peach blossom','三月桃花水。','March peach blossom water.'],
  ['明镜','míng jìng','bright mirror','是什么光芒？是一面明镜。','What brightness? A bright mirror.'],
  ['竖琴','shù qín','harp','是什么声响？是竖琴的旋律。','What sound? The melody of a harp.'],
  ['催促','cuī cù','urge','催促着人们春耕。','Urging people to do spring plowing.'],
  ['映照','yìng zhào','reflect','河水映照着蓝天。','The river reflects the blue sky.']
], null);

// Unit 2
E('琥珀', [
  ['琥珀','hǔ pò','amber','这是一块琥珀。','This is a piece of amber.'],
  ['松脂','sōng zhī','pine resin','一大滴松脂滴落下来。','A big drop of pine resin fell down.'],
  ['推测','tuī cè','deduce','科学家推测故事的经过。','Scientists deduced the story.'],
  ['化石','huà shí','fossil','琥珀是一种化石。','Amber is a type of fossil.'],
  ['挣扎','zhēng zhá','struggle','蜘蛛和苍蝇挣扎着。','The spider and fly struggled.']
], [
  ['推理','tuī lǐ','reasoning','从已知信息推测未知事物','Deduce unknown from known information','根据事实合理推理的方法','Method of logical reasoning from facts']
]);

E('飞向蓝天的恐龙', [
  ['恐龙','kǒng lóng','dinosaur','恐龙飞向蓝天。','Dinosaurs flew to the blue sky.'],
  ['演化','yǎn huà','evolve','恐龙演化成了鸟类。','Dinosaurs evolved into birds.'],
  ['繁衍','fán yǎn','reproduce','恐龙大量繁衍。','Dinosaurs reproduced abundantly.'],
  ['轻盈','qīng yíng','light; graceful','身体变得轻盈。','Bodies became light and graceful.'],
  ['翱翔','áo xiáng','soar','鸟儿在天空翱翔。','Birds soar in the sky.']
], null);

E('纳米技术就在我们身边', [
  ['纳米','nà mǐ','nanometer','一纳米等于十亿分之一米。','One nanometer equals one billionth of a meter.'],
  ['技术','jì shù','technology','纳米技术改变生活。','Nanotechnology changes life.'],
  ['灵敏','líng mǐn','sensitive','纳米机器人灵敏灵巧。','Nano robots are sensitive and dexterous.'],
  ['隐形','yǐn xíng','invisible','纳米涂层可以隐形。','Nano coatings can be invisible.'],
  ['功能','gōng néng','function','具有杀菌功能。','Has sterilization function.']
], null);

E('千年梦圆在今朝', [
  ['飞天','fēi tiān','fly to the sky','千年飞天梦。','A thousand-year dream of flight.'],
  ['嫦娥','cháng é','Chang e (moon goddess)','嫦娥奔月的传说。','The legend of Chang e flying to the moon.'],
  ['航天','háng tiān','space flight','中国航天事业。','China space program.'],
  ['载人','zài rén','manned','载人飞船。','Manned spacecraft.'],
  ['实现','shí xiàn','realize','千年梦想终于实现了。','The thousand-year dream finally came true.']
], null);

// Unit 3
E('短诗三首', [
  ['繁星','fán xīng','starry sky','繁星闪烁。','Stars twinkle.'],
  ['藤萝','téng luó','wisteria','墙角的花。','The flower in the corner.'],
  ['母亲','mǔ qīn','mother','母亲啊，天上的风雨来了。','Mother, the storm in the sky is coming.'],
  ['巢','cháo','nest','鸟儿躲到它的巢里。','Birds hide in their nests.'],
  ['怀里','huái lǐ','in one arms','我只躲到你的怀里。','I only hide in your arms.']
], [
  ['现代诗','xiàn dài shī','modern poetry','现代诗不受格律限制。','Modern poetry is not bound by meter.','形式自由，表达情感','Free form, expressing emotions']
]);

En('The Hen', [
  ['母鸡','mǔ jī','hen','我一向讨厌母鸡。','I always disliked hens.'],
  ['负责','fù zé','responsible','它负责、慈爱、勇敢。','She is responsible, loving, and brave.'],
  ['警戒','jǐng jiè','alert; on guard','母鸡时刻警戒着。','The hen is always on guard.'],
  ['欺侮','qī wǔ','bully','不允许谁欺侮孩子们。','She allows no one to bully her chicks.'],
  ['英雄','yīng xióng','hero','它是一位英雄母亲。','She is a heroic mother.']
], [
  ['先抑后扬','xiān yì hòu yáng','criticize then praise','先写讨厌母鸡，后写敬佩母鸡。','First writes dislike, then admiration.','先写不好的一面，再转折写好的一面','First the negative side, then a turn to the positive']
]);

E('白鹅', [
  ['高傲','gāo ào','arrogant','白鹅真是高傲。','The white goose is truly arrogant.'],
  ['步调','bù diào','pace','它的步调从容不迫。','Its pace is calm and unhurried.'],
  ['净角','jìng jué','painted face (opera role)','叫声好像京剧里的净角。','Its call sounds like a painted face role in Beijing opera.'],
  ['从容','cóng róng','calm; leisurely','大模大样地走。','Walking with great pomposity.'],
  ['脾气','pí qi','temperament','它的脾气很大。','Its temper is big.']
], null);

// Unit 4 (Composition Unit)
E('海上日出', [
  ['日出','rì chū','sunrise','海上日出是伟大的奇观。','Sunrise at sea is a great spectacle.'],
  ['红霞','hóng xiá','red clouds','天空出现了红霞。','Red clouds appeared in the sky.'],
  ['负着','fù zhe','bearing','太阳好像负着重荷。','The sun seems to bear a heavy load.'],
  ['夺目','duó mù','dazzling','光彩夺目。','Dazzlingly brilliant.'],
  ['奇观','qí guān','spectacle','这是伟大的奇观。','This is a great spectacle.']
], [
  ['按顺序写景','àn shùn xù xiě jǐng','describe scenery in order','日出前……日出时……日出后……','Before sunrise...during...after...','按照时间顺序描写景物变化','Describe landscape changes in chronological order']
]);

En('A Visit to Jinhua\\u2019s Double Dragon Cave', [
  ['洞口','dòng kǒu','cave entrance','洞口很宽。','The cave entrance is wide.'],
  ['石钟乳','shí zhōng rǔ','stalactite','石钟乳和石笋形状各异。','Stalactites and stalagmites have various shapes.'],
  ['蜿蜒','wān yán','wind; meander','泉水蜿蜒而出。','Spring water winds its way out.'],
  ['漆黑','qī hēi','pitch dark','里面漆黑一片。','It is pitch dark inside.'],
  ['仰卧','yǎng wò','lie on one back','必须仰卧在小船里。','Must lie on your back in the small boat.']
], [
  ['移步换景','yí bù huàn jǐng','changing views with steps','路上→洞口→外洞→孔隙→内洞→出洞。','On the way→entrance→outer→gap→inner→exit.','随着游览位置的移动来描写景物','Describe scenery as the observer moves']
]);

// Unit 5
E('文言文二则', [
  ['铁杵','tiě chǔ','iron pestle','只要功夫深，铁杵磨成针。','With enough effort, an iron pestle becomes a needle.'],
  ['勤学','qín xué','study diligently','囊萤夜读的故事。','The story of reading by firefly light.'],
  ['恭勤','gōng qín','diligent and respectful','博学多通，恭勤不倦。','Broadly learned, diligent and tireless.'],
  ['囊萤','náng yíng','bag of fireflies','车胤囊萤夜读。','Che Yin read at night by firefly light.'],
  ['磨针','mó zhēn','grind into needle','老婆婆在磨铁杵。','The old woman was grinding an iron pestle.']
], null);

E('小英雄雨来（节选）', [
  ['芦花','lú huā','reed catkins','芦花开的时候远远望去。','When reed catkins bloom, looking from afar.'],
  ['扁鼻子','biǎn bí zi','flat nose','扁鼻子军官。','The flat-nosed officer.'],
  ['鬼子','guǐ zi','enemy soldier','鬼子来了。','The enemy soldiers came.'],
  ['抗日','kàng rì','anti-Japanese','抗日小英雄。','Anti-Japanese little hero.'],
  ['游泳','yóu yǒng','swim','雨来游泳本领高。','Yulai was an excellent swimmer.']
], null);

E('我们家的男子汉', [
  ['男子汉','nán zǐ hàn','real man','一个小小的男子汉。','A little man.'],
  ['独立','dú lì','independent','他越来越独立。','He became more and more independent.'],
  ['沉默','chén mò','silent','他变得沉默了一会儿。','He became silent for a moment.'],
  ['坚强','jiān qiáng','strong','他表现得很坚强。','He showed himself to be strong.'],
  ['逐渐','zhú jiàn','gradually','他逐渐长大了。','He gradually grew up.']
], null);

E('芦花鞋', [
  ['芦花','lú huā','reed catkins','青铜编芦花鞋。','Qingtong weaves reed-catkin shoes.'],
  ['编织','biān zhī','weave','他学会了编织芦花鞋。','He learned to weave reed-catkin shoes.'],
  ['冰天雪地','bīng tiān xuě dì','icy and snowy','冰天雪地里卖鞋。','Selling shoes in the freezing snow.'],
  ['脱下','tuō xià','take off','青铜脱下自己的鞋。','Qingtong took off his own shoes.'],
  ['赤脚','chì jiǎo','barefoot','他赤脚站在雪地里。','He stood barefoot in the snow.']
], null);

// Unit 6
E('古诗三首', [
  ['芙蓉','fú róng','hibiscus','芙蓉楼送辛渐。','Farewell at Hibiscus Tower.'],
  ['塞下','sài xià','border','塞下曲。','Song of the Frontier.'],
  ['墨梅','mò méi','ink plum blossom','不要人夸好颜色。','I do not seek praise for my color.'],
  ['清气','qīng qì','pure fragrance','只留清气满乾坤。','Only leaving pure fragrance to fill the world.'],
  ['将军','jiāng jūn','general','将军夜引弓。','The general draws his bow at night.']
], null);

En('The Wreck of the Normandie', [
  ['船长','chuán zhǎng','captain','哈尔威船长。','Captain Harvey.'],
  ['沉着','chén zhuó','calm','船长沉着指挥。','The captain commanded calmly.'],
  ['救援','jiù yuán','rescue','组织救援工作。','Organized rescue efforts.'],
  ['秩序','zhì xù','order','维持秩序。','Maintain order.'],
  ['英雄','yīng xióng','hero','船长是真正的英雄。','The captain was a true hero.']
], null);

E('黄继光', [
  ['战斗','zhàn dòu','battle','上甘岭战斗。','The Battle of Shangganling.'],
  ['堡垒','bǎo lěi','bunker','敌人的火力堡垒。','The enemy bunker.'],
  ['匍匐','pú fú','crawl','匍匐前进。','Crawling forward.'],
  ['牺牲','xī shēng','sacrifice','黄继光英勇牺牲。','Huang Jiguang heroically sacrificed himself.'],
  ['光荣','guāng róng','glorious','光荣的战斗英雄。','A glorious battle hero.']
], null);

E('挑山工', [
  ['挑山工','tiāo shān gōng','mountain porter','泰山上的挑山工。','Mountain porters on Mount Tai.'],
  ['扁担','biǎn dan','carrying pole','肩挑扁担。','Carrying a pole on the shoulder.'],
  ['折尺','zhé chǐ','zigzag','走折尺形路线。','Walking a zigzag route.'],
  ['朴素','pǔ sù','simple','朴素的道理。','A simple truth.'],
  ['脚踏实地','jiǎo tà shí dì','down-to-earth','一步一步脚踏实地。','Steadily, step by step.']
], [
  ['借物喻理','jiè wù yù lǐ','use things to illustrate ideas','挑山工虽然走得慢但不停歇。','Mountain porters walk slowly but never stop.','通过具体事物说明深刻道理','Illustrate deep truths through concrete things']
]);

// Unit 7
E('宝葫芦的秘密（节选）', [
  ['宝葫芦','bǎo hú lu','magic gourd','我有一个宝葫芦。','I have a magic gourd.'],
  ['心想事成','xīn xiǎng shì chéng','wishes come true','宝葫芦能心想事成。','The magic gourd grants wishes.'],
  ['奶奶','nǎi nai','grandmother','奶奶讲的故事。','Stories grandmother told.'],
  ['幻想','huàn xiǎng','fantasy','美好的幻想。','A beautiful fantasy.'],
  ['秘密','mì mì','secret','这是一个秘密。','This is a secret.']
], null);

En('The Giant\\u2019s Garden', [
  ['巨人','jù rén','giant','巨人有一个花园。','The giant had a garden.'],
  ['围墙','wéi qiáng','wall','巨人砌了围墙。','The giant built a wall.'],
  ['孤独','gū dú','lonely','巨人感到很孤独。','The giant felt very lonely.'],
  ['融化','róng huà','melt','冰雪融化了。','The ice and snow melted.'],
  ['分享','fēn xiǎng','share','巨人学会了分享。','The giant learned to share.']
], null);

E('海的女儿', [
  ['人鱼','rén yú','mermaid','小人鱼公主。','The little mermaid princess.'],
  ['向往','xiàng wǎng','yearn for','小人鱼向往人类世界。','The mermaid yearned for the human world.'],
  ['泡沫','pào mò','foam','变成了海上的泡沫。','Turned into foam on the sea.'],
  ['善良','shàn liáng','kind','小人鱼善良勇敢。','The mermaid was kind and brave.'],
  ['灵魂','líng hún','soul','她想要一个不灭的灵魂。','She wanted an immortal soul.']
], null);

saveAndValidate('textbook_g4s2.js', code, 'TB_G4S2');
