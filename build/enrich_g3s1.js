/**
 * Enrich textbook_g3s1.js with vocabWords + grammarPoints
 * Run: node build/enrich_g3s1.js
 * SECURITY NOTE: Build-time enrichment on trusted local files.
 */
const fs = require('fs');
const { enrichLesson, enrichByEn, saveAndValidate } = require('./enrich_lib');
let code = fs.readFileSync('textbook_g3s1.js', 'utf8');
const E = (t, v, g) => { code = enrichLesson(code, t, v, g); };

// vocab: [word, pinyin, english, sentence, sentenceEn]
// grammar: [point, pointEn, example, exampleEn, explanation, explanationEn]

// Unit 1
E('大青树下的小学', [
  ['坪坝','píng bà','flat ground','早晨，从坪坝走来了许多小学生。','In the morning, many students came from the flat ground.'],
  ['穿戴','chuān dài','dress up','大家穿戴不同。','Everyone dressed differently.'],
  ['鲜艳','xiān yàn','bright; vivid','鲜艳的民族服装。','Bright ethnic costumes.'],
  ['好奇','hào qí','curious','小动物好奇地看着。','Little animals watched curiously.'],
  ['摇晃','yáo huàng','sway','古老的铜钟挂在大青树上。','An ancient bronze bell hangs on the banyan tree.']
], [
  ['有……有……还有……','there are...and...and also...','有傣族的，有景颇族的，还有汉族的。','There are Dai, Jingpo, and also Han.','表示列举多个事物','Lists multiple items in a series']
]);

E('花的学校', [
  ['润湿','rùn shī','moist','六月的阵雨落下来。','The June showers fall.'],
  ['狂欢','kuáng huān','revel','树枝在林中互相碰触，绿叶在狂欢。','Branches touch and leaves revel.'],
  ['急急忙忙','jí jí máng máng','hurriedly','花孩子们急急忙忙赶来。','The flower children hurry over.'],
  ['自然','zì rán','nature','花在绿草上跳舞。','Flowers dance on the green grass.'],
  ['罚站','fá zhàn','stand as punishment','关在屋子里被罚站。','Shut indoors, standing as punishment.']
], [
  ['一……就……','as soon as...then...','一阵阵湿润的风一吹，花就跳舞了。','As soon as the moist wind blows, flowers dance.','表示紧接着发生','Indicates immediate sequence of events']
]);

E('不懂就要问', [
  ['私塾','sī shú','private school','孙中山小时候在私塾读书。','Sun Yat-sen studied at a private school as a child.'],
  ['照例','zhào lì','as usual','先生照例让学生背书。','The teacher, as usual, had students recite.'],
  ['流利','liú lì','fluent','孙中山背得很流利。','Sun Yat-sen recited very fluently.'],
  ['糊里糊涂','hú li hú tu','muddled; confused','糊里糊涂地背有什么用？','What use is memorizing without understanding?'],
  ['鼓起勇气','gǔ qǐ yǒng qì','summon courage','他鼓起勇气问先生。','He summoned the courage to ask the teacher.']
], [
  ['先……再……','first...then...','先背熟课文，再讲解意思。','First memorize the text, then explain the meaning.','表示动作的先后顺序','Indicates sequential order of actions']
]);

// Unit 2
E('古诗三首', [
  ['夜书所见','yè shū suǒ jiàn','what I wrote seeing at night','夜书所见。','What I wrote seeing at night.'],
  ['萧萧','xiāo xiāo','rustling','萧萧梧叶送寒声。','Rustling parasol leaves bring cold sounds.'],
  ['篱落','lí luò','fence','知有儿童挑促织。','I know children chase crickets by the fence.'],
  ['赠刘景文','zèng liú jǐng wén','gift to Liu Jingwen','赠刘景文。','Gift to Liu Jingwen.'],
  ['残荷','cán hé','withered lotus','荷尽已无擎雨盖。','The lotus gone, no umbrella shields the rain.']
], null);

E('铺满金色巴掌的水泥道', [
  ['水泥道','shuǐ ní dào','cement road','门前的水泥道真美。','The cement road in front is beautiful.'],
  ['金色','jīn sè','golden','铺满金色巴掌。','Covered with golden palm prints.'],
  ['梧桐','wú tóng','parasol tree','梧桐树的叶子像手掌。','Parasol tree leaves look like palms.'],
  ['明朗','míng lǎng','bright and clear','天空明朗。','The sky is bright and clear.'],
  ['排列','pái liè','arrange in rows','落叶排列得很整齐。','The fallen leaves are neatly arranged.']
], [
  ['像……一样','like...','梧桐树的落叶像金色的巴掌一样。','Parasol tree leaves are like golden palms.','比喻句：用"像"来做比较','Simile: using "like" for comparison']
]);

E('秋天的雨', [
  ['钥匙','yào shi','key','秋天的雨是一把钥匙。','Autumn rain is a key.'],
  ['颜料','yán liào','paint; pigment','秋天的雨有一盒五彩缤纷的颜料。','Autumn rain has a box of colorful paints.'],
  ['丰收','fēng shōu','harvest','秋天的雨带来丰收的歌。','Autumn rain brings the song of harvest.'],
  ['频频','pín pín','repeatedly','菊花频频点头。','Chrysanthemums nod repeatedly.'],
  ['气味','qì wèi','scent; smell','梨香香的，菠萝甜甜的。','Pears are fragrant, pineapples are sweet.']
], [
  ['把……比作……','compare...to...','秋天的雨把颜色给了银杏树。','Autumn rain gave colors to the ginkgo tree.','拟人化表达：赋予事物人的动作','Personification: giving human actions to things']
]);

E('听听，秋的声音', [
  ['叮咛','dīng níng','urge gently','听听，秋的声音。','Listen, the sounds of autumn.'],
  ['掠过','lüè guò','sweep past','大雁掠过田野。','Wild geese sweep past the fields.'],
  ['歌吟','gē yín','sing softly','秋的声音在歌吟。','The sounds of autumn are singing.'],
  ['道别','dào bié','say goodbye','黄叶道别。','Yellow leaves say goodbye.'],
  ['辽阔','liáo kuò','vast','辽阔的田野。','The vast fields.']
], null);

// Unit 3
E('卖火柴的小女孩', [
  ['火柴','huǒ chái','match','卖火柴的小女孩。','The little match girl.'],
  ['哆嗦','duō suo','shiver','她冷得直哆嗦。','She shivered with cold.'],
  ['奇异','qí yì','wondrous','她看到了奇异的景象。','She saw wondrous sights.'],
  ['温暖','wēn nuǎn','warm','火炉多么温暖。','How warm the stove was.'],
  ['火焰','huǒ yàn','flame','火柴发出明亮的火焰。','The match gave off a bright flame.']
], [
  ['一……就……','as soon as','她一擦着火柴，就看到了奇异的景象。','As soon as she struck a match, she saw wondrous sights.','前一动作引发后一结果','First action triggers the second result']
]);

E('那一定会很好', [
  ['种子','zhǒng zi','seed','一粒种子被泥土盖住了。','A seed was covered by soil.'],
  ['努力','nǔ lì','strive','种子努力生长。','The seed strived to grow.'],
  ['手推车','shǒu tuī chē','pushcart','被做成了手推车。','Was made into a pushcart.'],
  ['阳台','yáng tái','balcony','坐在阳台上晒太阳。','Sitting on the balcony in the sun.'],
  ['舒服','shū fu','comfortable','那一定会很舒服。','That must feel very comfortable.']
], null);

E('在牛肚子里旅行', [
  ['旅行','lǚ xíng','travel','在牛肚子里旅行。','Traveling inside a cow stomach.'],
  ['蟋蟀','xī shuài','cricket','红头和青头是蟋蟀。','Red-head and Green-head are crickets.'],
  ['反刍','fǎn chú','ruminate','牛有反刍的习惯。','Cows have the habit of ruminating.'],
  ['贮藏','zhù cáng','store','牛的胃能贮藏食物。','A cow stomach stores food.'],
  ['悲哀','bēi āi','sorrowful','红头悲哀地哭了。','Red-head cried sorrowfully.']
], [
  ['虽然……但是……','although...but...','虽然被吃进了肚子里，但是还有机会出来。','Although swallowed, there is still a chance to get out.','转折复句','Adversative compound sentence']
]);

E('一块奶酪', [
  ['奶酪','nǎi lào','cheese','蚂蚁队长发现了一块奶酪。','The ant captain found a piece of cheese.'],
  ['纪律','jì lǜ','discipline','要遵守纪律。','Must follow discipline.'],
  ['犹豫','yóu yù','hesitate','蚂蚁队长犹豫了一下。','The ant captain hesitated.'],
  ['分配','fēn pèi','distribute','公平地分配食物。','Distribute food fairly.'],
  ['以身作则','yǐ shēn zuò zé','lead by example','队长以身作则。','The captain leads by example.']
], null);

// Unit 4
E('总也倒不了的老屋', [
  ['老屋','lǎo wū','old house','老屋已经很久了。','The old house is very old.'],
  ['暴风雨','bào fēng yǔ','storm','暴风雨来了。','The storm came.'],
  ['安心','ān xīn','at ease','老屋让小动物安心。','The old house put animals at ease.'],
  ['准备','zhǔn bèi','prepare','我准备倒下去了。','I am about to collapse.'],
  ['等等','děng děng','wait','等等，再等一下。','Wait, wait a little longer.']
], [
  ['预测','yù cè','predict','读到这里你觉得后面会发生什么？','What do you think will happen next?','根据故事发展预测接下来的情节','Predict upcoming plot based on story development']
]);

E('胡萝卜先生的长胡子', [
  ['胡萝卜','hú luó bo','carrot','胡萝卜先生有浓密的胡子。','Mr. Carrot had a thick beard.'],
  ['发愁','fā chóu','worry','他常常为胡子发愁。','He often worried about his beard.'],
  ['匆匆忙忙','cōng cōng máng máng','in a hurry','他匆匆忙忙出门了。','He hurried out the door.'],
  ['风筝','fēng zheng','kite','胡子被当成了风筝线。','His beard was used as kite string.'],
  ['晾衣绳','liàng yī shéng','clothesline','胡子被用作晾衣绳。','His beard was used as a clothesline.']
], null);

E('小狗学叫', [
  ['同情','tóng qíng','sympathize','公鸡同情小狗。','The rooster sympathized with the dog.'],
  ['模仿','mó fǎng','imitate','小狗学习模仿。','The dog learned to imitate.'],
  ['嘲笑','cháo xiào','ridicule','有人嘲笑小狗。','Someone ridiculed the dog.'],
  ['尝试','cháng shì','try','小狗不断尝试。','The dog kept trying.'],
  ['自信','zì xìn','confident','最后小狗找到了自信。','Finally the dog found confidence.']
], null);

// Unit 5
E('搭船的鸟', [
  ['翠鸟','cuì niǎo','kingfisher','一只翠鸟搭上了我们的船。','A kingfisher boarded our boat.'],
  ['蓑衣','suō yī','straw raincoat','翠鸟披着翠绿的蓑衣。','The kingfisher wore an emerald green raincoat.'],
  ['捕鱼','bǔ yú','catch fish','翠鸟一头扎进水里捕鱼。','The kingfisher dived into water to catch fish.'],
  ['吞','tūn','swallow','一口吞了下去。','Swallowed it in one gulp.'],
  ['观察','guān chá','observe','留心观察身边的事物。','Pay attention to things around you.']
], [
  ['观察描写','guān chá miáo xiě','observe and describe','它的羽毛是翠绿的，翅膀带着一些蓝色。','Its feathers are emerald green, wings with some blue.','通过仔细观察写出事物的特点','Describe features through careful observation']
]);

E('金色的草地', [
  ['蒲公英','pú gōng yīng','dandelion','草地上长满了蒲公英。','The meadow is full of dandelions.'],
  ['绒毛','róng máo','fluff','蒲公英的绒毛飞起来。','Dandelion fluff floats up.'],
  ['合拢','hé lǒng','close up','花朵合拢了。','The flowers closed up.'],
  ['张开','zhāng kāi','open up','花朵张开了。','The flowers opened up.'],
  ['发现','fā xiàn','discover','我发现了草地变色的秘密。','I discovered the secret of the color-changing meadow.']
], null);

// Unit 6
E('古诗三首', [
  ['望天门山','wàng tiān mén shān','view Tianmen Mountain','天门中断楚江开。','Tianmen Mountain splits where the Chu River flows.'],
  ['饮湖上初晴后雨','yǐn hú shàng','drinking on West Lake','水光潋滟晴方好。','Sparkling waters are beautiful in sunshine.'],
  ['望洞庭','wàng dòng tíng','view Dongting Lake','湖光秋月两相和。','Lake light and autumn moon harmonize.'],
  ['碧水','bì shuǐ','jade-green water','碧水东流至此回。','Jade waters flowing east turn back here.'],
  ['银盘','yín pán','silver plate','遥望洞庭山水翠，白银盘里一青螺。','Dongting in the distance, a green snail in a silver plate.']
], null);

E('富饶的西沙群岛', [
  ['富饶','fù ráo','rich; fertile','西沙群岛是个富饶的地方。','The Xisha Islands are a rich place.'],
  ['海底','hǎi dǐ','seabed','海底的岩石上长着各种珊瑚。','Corals grow on the seabed rocks.'],
  ['珊瑚','shān hú','coral','珊瑚像分枝的鹿角。','Corals look like branching antlers.'],
  ['海参','hǎi shēn','sea cucumber','海参懒洋洋地蠕动。','Sea cucumbers sluggishly wiggle.'],
  ['海龟','hǎi guī','sea turtle','海龟在海里自由游泳。','Sea turtles swim freely in the ocean.']
], [
  ['总分总结构','zǒng-fēn-zǒng','general-specific-general','那里风景优美，物产丰富。','Beautiful scenery, abundant resources.','先总说再分说最后总结','State the main idea, then details, then conclude']
]);

E('海滨小城', [
  ['海滨','hǎi bīn','seaside','海滨小城真美丽。','The seaside town is beautiful.'],
  ['喧闹','xuān nào','noisy; bustling','大海不再喧闹。','The sea is no longer noisy.'],
  ['庭院','tíng yuàn','courtyard','庭院里种满了鲜花。','Courtyards are full of flowers.'],
  ['整洁','zhěng jié','tidy','小城的街道很整洁。','The town streets are very tidy.'],
  ['凤凰树','fèng huáng shù','phoenix tree','凤凰树开花了。','The phoenix tree is blooming.']
], null);

E('美丽的小兴安岭', [
  ['抽出','chōu chū','sprout','树木抽出新的枝条。','Trees sprout new branches.'],
  ['浸','jìn','soak; immerse','整个森林浸在乳白色的浓雾里。','The forest is soaked in milky white fog.'],
  ['葱葱茏茏','cōng cōng lóng lóng','lush and verdant','树木葱葱茏茏。','Trees are lush and verdant.'],
  ['宝库','bǎo kù','treasure trove','小兴安岭是巨大的宝库。','Little Xing an Mountains is a huge treasure trove.'],
  ['人参','rén shēn','ginseng','这里有珍贵的人参。','There is precious ginseng here.']
], [
  ['按时间顺序','àn shí jiān shùn xù','chronological order','春天……夏天……秋天……冬天……','Spring...Summer...Autumn...Winter...','按四季顺序描写景物变化','Describe landscape changes in seasonal order']
]);

// Unit 7
E('大自然的声音', [
  ['美妙','měi miào','wonderful','大自然有许多美妙的声音。','Nature has many wonderful sounds.'],
  ['演奏','yǎn zòu','perform (music)','风是大自然的音乐家。','Wind is nature musician.'],
  ['温柔','wēn róu','gentle','微风是温柔的。','The breeze is gentle.'],
  ['激动','jī dòng','excited','狂风令人激动。','Gale winds are exciting.'],
  ['汇聚','huì jù','converge','小溪汇聚成河流。','Brooks converge into rivers.']
], [
  ['拟人','nǐ rén','personification','风是大自然的音乐家。','Wind is nature musician.','把事物当作人来描写','Describe things as if they were people']
]);

E('读不完的大书', [
  ['大自然','dà zì rán','nature','大自然就是一本读不完的大书。','Nature is a never-ending big book.'],
  ['蚂蚁','mǎ yǐ','ant','蚂蚁搬家。','Ants move house.'],
  ['高明','gāo míng','brilliant','蜘蛛织网真高明。','Spiders weaving webs is brilliant.'],
  ['花鸟虫鱼','huā niǎo chóng yú','flowers birds insects fish','花鸟虫鱼都是老师。','Flowers, birds, insects, fish are all teachers.'],
  ['奥秘','ào mì','mystery','大自然充满了奥秘。','Nature is full of mysteries.']
], null);

E('父亲、树林和鸟', [
  ['黎明','lí míng','dawn','黎明时分的树林。','The forest at dawn.'],
  ['雾蒙蒙','wù méng méng','misty','雾蒙蒙的树林。','The misty forest.'],
  ['热腾腾','rè téng téng','steaming','鸟的气味热腾腾的。','The scent of birds is steamy.'],
  ['舒畅','shū chàng','relaxed; happy','鸟唱歌最舒畅。','Birds are happiest when singing.'],
  ['猎人','liè rén','hunter','最怕的是猎人。','What they fear most is hunters.']
], null);

// Unit 8
E('司马光', [
  ['庭院','tíng yuàn','courtyard','群儿戏于庭。','Children played in the courtyard.'],
  ['跌落','diē luò','fall into','一儿登瓮，足跌没水中。','One child climbed the vat and fell in.'],
  ['击破','jī pò','smash','光持石击瓮破之。','Guang took a stone and smashed the vat.'],
  ['沉着','chén zhuó','calm','司马光很沉着。','Sima Guang was very calm.'],
  ['机智','jī zhì','clever; quick-witted','司马光机智救人。','Sima Guang cleverly saved the child.']
], [
  ['文言文','wén yán wén','classical Chinese','群儿戏于庭。','Children played in the courtyard.','古代书面语言，简洁精炼','Ancient written language, concise and refined']
]);

E('灰雀', [
  ['灰雀','huī què','gray sparrow','公园里有灰雀。','There are gray sparrows in the park.'],
  ['仰望','yǎng wàng','look up','列宁仰望灰雀。','Lenin looked up at the sparrows.'],
  ['诚实','chéng shí','honest','男孩是诚实的。','The boy was honest.'],
  ['果然','guǒ rán','as expected','灰雀果然飞回来了。','The sparrow returned, as expected.'],
  ['可惜','kě xī','pity','那只灰雀不见了，多可惜。','The sparrow is gone, what a pity.']
], null);

E('手术台就是阵地', [
  ['手术台','shǒu shù tái','operating table','手术台就是阵地。','The operating table is the battlefield.'],
  ['阵地','zhèn dì','battlefield','白求恩坚守阵地。','Bethune held his ground.'],
  ['撤退','chè tuì','retreat','其他人撤退了。','Others retreated.'],
  ['坚持','jiān chí','persist','白求恩坚持做手术。','Bethune persisted in operating.'],
  ['白求恩','bái qiú ēn','Norman Bethune','白求恩是加拿大医生。','Bethune was a Canadian doctor.']
], null);

E('一个粗瓷大碗', [
  ['粗瓷','cū cí','coarse porcelain','一个粗瓷大碗。','A large coarse porcelain bowl.'],
  ['丢掉','diū diào','throw away','赵一曼又丢掉了碗。','Zhao Yiman threw away the bowl again.'],
  ['战士','zhàn shì','soldier','战士们送给她碗。','Soldiers gave her a bowl.'],
  ['粮食','liáng shi','grain','粮食很紧张。','Grain was very scarce.'],
  ['关心','guān xīn','care about','她关心战士们的生活。','She cared about the soldiers lives.']
], null);

saveAndValidate('textbook_g3s1.js', code, 'TB_G3S1');
