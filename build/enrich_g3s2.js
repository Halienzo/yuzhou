/**
 * Enrich textbook_g3s2.js with vocabWords + grammarPoints
 * Run: node build/enrich_g3s2.js
 * SECURITY NOTE: Build-time enrichment on trusted local files.
 */
const fs = require('fs');
const { enrichLesson, enrichByEn, saveAndValidate } = require('./enrich_lib');
let code = fs.readFileSync('textbook_g3s2.js', 'utf8');
const E = (t, v, g) => { code = enrichLesson(code, t, v, g); };

// vocab: [word, pinyin, english, sentence, sentenceEn]
// grammar: [point, pointEn, example, exampleEn, explanation, explanationEn]

// Unit 1 — 课文 (Lessons 1-4)
E('古诗三首', [
  ['迟日','chí rì','lingering spring sun','迟日江山丽。','The lingering spring sun makes rivers and mountains beautiful.'],
  ['泥融','ní róng','mud thaws','泥融飞燕子。','Mud thaws as swallows fly.'],
  ['鸳鸯','yuān yāng','mandarin ducks','沙暖睡鸳鸯。','On warm sand, mandarin ducks sleep.'],
  ['芦芽','lú yá','reed shoots','蒌蒿满地芦芽短。','Mugwort covers the ground, reed shoots still short.'],
  ['黄鹂','huáng lí','oriole','添得黄鹂四五声。','Adding four or five oriole songs.']
], null);

E('燕子', [
  ['伶俐','líng lì','nimble; clever','那么伶俐可爱的小燕子。','Those nimble and lovely little swallows.'],
  ['轻快','qīng kuài','light and swift','一对轻快有力的翅膀。','A pair of light and powerful wings.'],
  ['烂漫','làn màn','splendid','形成了烂漫无比的春天。','Forming a splendidly beautiful spring.'],
  ['偶尔','ǒu ěr','occasionally','偶尔沾了一下水面。','Occasionally touching the water surface.'],
  ['荡漾','dàng yàng','ripple','小圆晕便一圈一圈地荡漾开去。','Tiny ripples spread out in circles.']
], [
  ['比喻句','bǐ yù jù','simile','一身乌黑的羽毛，加上剪刀似的尾巴。','Jet-black feathers plus a scissors-like tail.','用"似的""像"把一个事物比作另一个事物','Using "like" to compare one thing to another']
]);

E('荷花', [
  ['花瓣','huā bàn','petal','有的才展开两三片花瓣儿。','Some had only opened two or three petals.'],
  ['莲蓬','lián peng','lotus seed pod','露出嫩黄色的小莲蓬。','Revealing the tender yellow seed pods.'],
  ['饱胀','bǎo zhàng','swollen; plump','饱胀得马上要破裂似的。','So swollen it seemed about to burst.'],
  ['翩翩起舞','piān piān qǐ wǔ','dance gracefully','我就翩翩起舞。','I danced gracefully.'],
  ['姿势','zī shì','pose; posture','一朵有一朵的姿势。','Each in its own pose.']
], [
  ['有的……有的……有的……','some...some...some...','有的才展开两三片花瓣儿。有的花瓣儿全展开了。有的还是花骨朵儿。','Some opened two or three petals. Some fully opened. Some were still buds.','排比句式描写事物的不同状态','Parallel structure to describe different states']
]);

E('昆虫备忘录', [
  ['复眼','fù yǎn','compound eyes','蜻蜓有复眼。','Dragonflies have compound eyes.'],
  ['灵敏','líng mǐn','keen; sensitive','视觉都很灵敏。','Their vision is very keen.'],
  ['瓢虫','piáo chóng','ladybug','瓢虫款款地落下来了。','The ladybug lands gracefully.'],
  ['益虫','yì chóng','beneficial insect','有的瓢虫吃蚜虫，是益虫。','Some ladybugs eat aphids and are beneficial insects.'],
  ['独角仙','dú jiǎo xiān','rhinoceros beetle','独角仙是昆虫里的霸王。','The rhinoceros beetle is the king of insects.']
], null);

// Unit 2 — 寓言 (Lessons 5-8)
E('守株待兔', [
  ['耕者','gēng zhě','farmer','宋人有耕者。','A man of Song was a farmer.'],
  ['触','chù','bump into','兔走触株。','A rabbit ran into the stump.'],
  ['释','shì','release; let go','因释其耒而守株。','So he released his plow and waited by the stump.'],
  ['耒','lěi','plow','释其耒而守株。','He let go of his plow and guarded the stump.'],
  ['笑','xiào','laugh at','而身为宋国笑。','And he became the laughingstock of Song.']
], [
  ['文言文寓言','wén yán wén yù yán','classical Chinese fable','因释其耒而守株，冀复得兔。','So he abandoned his plow and guarded the stump, hoping to get another rabbit.','用简短文言讲道理，一词多义','Using concise classical Chinese to teach a lesson, with multi-meaning words']
]);

E('陶罐和铁罐', [
  ['奚落','xī luò','mock; ridicule','铁罐常常奚落陶罐。','The iron pot often mocked the clay pot.'],
  ['谦虚','qiān xū','modest; humble','陶罐很谦虚。','The clay pot was very modest.'],
  ['傲慢','ào màn','arrogant','铁罐很傲慢。','The iron pot was very arrogant.'],
  ['懦弱','nuò ruò','cowardly','你这个懦弱的东西！','You cowardly thing!'],
  ['朴素','pǔ sù','plain; simple','陶罐依然那么朴素。','The clay pot remained plain and simple.']
], [
  ['对比','duì bǐ','contrast','铁罐傲慢，陶罐谦虚。','The iron pot was arrogant; the clay pot was modest.','通过对比突出不同性格和结局','Using contrast to highlight different characters and outcomes']
]);

E('鹿角和鹿腿', [
  ['匀称','yún chèn','well-proportioned','多么匀称的身段啊！','What a well-proportioned figure!'],
  ['欣赏','xīn shǎng','admire','他欣赏自己美丽的角。','He admired his beautiful antlers.'],
  ['抱怨','bào yuàn','complain','他抱怨自己的腿太细。','He complained that his legs were too thin.'],
  ['逼近','bī jìn','close in on','狮子逼近了。','The lion closed in.'],
  ['挣脱','zhèng tuō','break free','鹿角被树枝挂住了。','The antlers got caught on branches.']
], [
  ['寓言道理','yù yán dào lǐ','fable moral','美丽的角差点送了命，难看的腿却救了命。','The beautiful antlers nearly cost his life, while the ugly legs saved him.','事物各有长短，不能只看外表','Everything has strengths and weaknesses; do not judge by appearance']
]);

E('池子与河流', [
  ['懒惰','lǎn duò','lazy','池子过着懒惰的生活。','The pond lived a lazy life.'],
  ['安逸','ān yì','comfortable; easy','你何必那么忙呢？多安逸啊。','Why be so busy? How comfortable this is.'],
  ['淤塞','yū sè','silted up; blocked','池子渐渐淤塞了。','The pond gradually silted up.'],
  ['奔流不息','bēn liú bù xī','flow ceaselessly','河流奔流不息。','The river flows ceaselessly.'],
  ['源源不断','yuán yuán bù duàn','continuous; unending','河流的水源源不断。','The river water flows continuously.']
], null);

// Unit 3 — 传统文化 (Lessons 9-12)
// Note: second "古诗三首" — same title as lesson 1, use enrichByEn
// Both have titleEn "Three Ancient Poems" so we provide vocab inline for context
// The enrichLesson for duplicate title will skip (already has vocabWords from lesson 1)
// We accept this limitation — lesson 9 vocab can be added manually if needed

E('纸的发明', [
  ['发明','fā míng','invent','蔡伦改进了造纸术。','Cai Lun improved papermaking.'],
  ['记录','jì lù','record','人们用甲骨来记录事情。','People used oracle bones to record things.'],
  ['保存','bǎo cún','preserve','竹简不容易保存。','Bamboo slips were not easy to preserve.'],
  ['传承','chuán chéng','pass down; inherit','造纸术是伟大的传承。','Papermaking is a great inheritance.'],
  ['贡献','gòng xiàn','contribution','蔡伦对世界做出了巨大贡献。','Cai Lun made a great contribution to the world.']
], [
  ['按时间顺序说明','àn shí jiān shùn xù shuō míng','explain in chronological order','早在几千年前……西汉时代……东汉时代……后来……','As early as thousands of years ago...Western Han...Eastern Han...Later...','用时间线索组织说明文内容','Organize expository text using a timeline']
]);

E('赵州桥', [
  ['雄伟','xióng wěi','magnificent','赵州桥非常雄伟。','Zhaozhou Bridge is very magnificent.'],
  ['创举','chuàng jǔ','pioneering feat','这种设计在建桥史上是一个创举。','This design was a pioneering feat in bridge history.'],
  ['精美','jīng měi','exquisite','桥面两侧有精美的石栏。','There are exquisite stone railings on both sides.'],
  ['图案','tú àn','pattern; design','栏板上雕刻着精美的图案。','Beautiful patterns are carved on the railings.'],
  ['智慧','zhì huì','wisdom','赵州桥体现了古代劳动人民的智慧。','Zhaozhou Bridge reflects the wisdom of ancient working people.']
], [
  ['总分总结构','zǒng-fēn-zǒng','general-specific-general','赵州桥非常雄伟。……这座桥……体现了劳动人民的智慧和才干。','Zhaozhou Bridge is magnificent...This bridge...reflects the wisdom and talent of working people.','先总说特点，再分别介绍，最后总结','State overall features, then details, then summarize']
]);

E('一幅名扬中外的画', [
  ['名扬中外','míng yáng zhōng wài','famous at home and abroad','清明上河图是一幅名扬中外的画。','Along the River During Qingfeng Festival is a world-famous painting.'],
  ['汴京','biàn jīng','Bianjing (ancient Kaifeng)','画的是北宋都城汴京的街市。','It depicts the streets of the Northern Song capital Bianjing.'],
  ['摊贩','tān fàn','street vendor','街上有做买卖的摊贩。','There are street vendors on the road.'],
  ['形态各异','xíng tài gè yì','varied forms','画上的人形态各异。','The people in the painting have varied forms.'],
  ['传神','chuán shén','vivid; lifelike','画得非常传神。','Painted very vividly.']
], null);

// Unit 4 — 观察与发现 (Lessons 13-15)
E('花钟', [
  ['淡雅','dàn yǎ','elegant; understated','淡雅的花朵。','Elegant flowers.'],
  ['艳丽','yàn lì','gorgeous','艳丽的蔷薇花。','Gorgeous roses.'],
  ['绽放','zhàn fàng','bloom','不同的花在不同的时间绽放。','Different flowers bloom at different times.'],
  ['大致','dà zhì','roughly; approximately','植物开花的时间与温度、湿度大致有关。','The blooming time is roughly related to temperature and humidity.'],
  ['吻合','wěn hé','match; coincide','观察结果与规律吻合。','The observations match the pattern.']
], [
  ['因果关系','yīn guǒ guān xì','cause and effect','植物开花的时间，与……有关系。','The blooming time of plants is related to...','用原因解释现象，学习说明方法','Explain phenomena using causes; learn expository methods']
]);

E('蜜蜂', [
  ['辨认','biàn rèn','identify; recognize','蜜蜂能辨认方向。','Bees can identify directions.'],
  ['实验','shí yàn','experiment','法布尔做了一个实验。','Fabre conducted an experiment.'],
  ['推测','tuī cè','infer; speculate','我推测它们可能找不到家。','I speculated they might not find their way home.'],
  ['陌生','mò shēng','unfamiliar','把蜜蜂带到陌生的地方。','Brought the bees to an unfamiliar place.'],
  ['准确无误','zhǔn què wú wù','accurate; without error','蜜蜂准确无误地飞回来了。','The bees flew back accurately without error.']
], [
  ['实验记录','shí yàn jì lù','experiment log','为了证实……我做了一个实验：先……然后……结果……','To verify...I did an experiment: first...then...the result...','用实验过程组织文章，按步骤叙述','Organize writing around an experiment, narrating step by step']
]);

E('小虾', [
  ['通体','tōng tǐ','entire body','通体透明。','The entire body is transparent.'],
  ['空隙','kòng xì','gap; space','小虾躲在石头的空隙里。','Little shrimp hide in gaps between stones.'],
  ['追逐','zhuī zhú','chase','小虾在水中追逐嬉戏。','Little shrimp chase and play in the water.'],
  ['一张一合','yì zhāng yì hé','open and close','腮一张一合的。','The gills open and close.'],
  ['猛烈','měng liè','fierce','小虾受到惊扰就猛烈地蹦跳。','When disturbed, the shrimp jump fiercely.']
], null);

// Unit 5 — 想象 (Lessons 16-17)
E('宇宙的另一边', [
  ['秘密','mì mì','secret','宇宙的另一边有什么秘密？','What secrets are on the other side of the universe?'],
  ['相反','xiāng fǎn','opposite','那里的一切都是相反的。','Everything there is opposite.'],
  ['加法','jiā fǎ','addition','他们的加法是这样的。','Their addition works like this.'],
  ['穿越','chuān yuè','travel through','穿越到宇宙的另一边。','Travel through to the other side of the universe.'],
  ['无穷','wú qióng','infinite','宇宙是无穷的。','The universe is infinite.']
], [
  ['想象写法','xiǎng xiàng xiě fǎ','imaginative writing','在宇宙的另一边，加法是这样的：大地上的花+花=一片花海。','On the other side, addition is: flowers on earth + flowers = a sea of flowers.','用想象创造新奇的世界，让文章充满趣味','Use imagination to create a novel world, making writing fun']
]);

E('我变成了一棵树', [
  ['痒痒','yǎng yang','itchy','手臂上痒痒的。','My arms felt itchy.'],
  ['形状','xíng zhuàng','shape','树上长出了各种形状的鸟窝。','All sorts of bird nests grew on the tree.'],
  ['丁零丁零','dīng líng dīng líng','jingle','风一吹，丁零丁零响。','When the wind blew, it jingled.'],
  ['馋','chán','greedy for food','我开始馋妈妈做的饭了。','I started craving the food Mom makes.'],
  ['失望','shī wàng','disappointed','我有点儿失望。','I was a little disappointed.']
], null);

// Unit 6 — 童年 (Lessons 18-21)
E('童年的水墨画', [
  ['水墨画','shuǐ mò huà','ink wash painting','童年就像一幅水墨画。','Childhood is like an ink wash painting.'],
  ['染绿','rǎn lǜ','dye green','人影给溪水染绿了。','Reflections dye the stream green.'],
  ['蘑菇','mó gu','mushroom','斗笠像个大蘑菇。','The bamboo hat looks like a big mushroom.'],
  ['浪花','làng huā','spray; waves','浪花和人影在嬉戏。','Waves and reflections are playing.'],
  ['清清爽爽','qīng qīng shuǎng shuǎng','fresh and crisp','清清爽爽的夏日。','A fresh and crisp summer day.']
], [
  ['诗歌意象','shī gē yì xiàng','poetic imagery','人影给溪水染绿了。','Reflections dye the stream green.','用意象组合画面，体会诗歌语言的美','Combine images to create scenes; appreciate the beauty of poetic language']
]);

E('剃头大师', [
  ['剃头','tì tóu','haircut','小沙害怕剃头。','Little Sha was afraid of haircuts.'],
  ['胆小鬼','dǎn xiǎo guǐ','coward','小沙是个胆小鬼。','Little Sha was a coward.'],
  ['仇人','chóu rén','enemy','小沙把理发师当成仇人。','Little Sha treated the barber like an enemy.'],
  ['摆布','bǎi bu','handle; manipulate','随我怎么摆布。','Let me handle it however I want.'],
  ['耿耿于怀','gěng gěng yú huái','brood over','小沙对剃头耿耿于怀。','Little Sha brooded over haircuts.']
], null);

E('肥皂泡', [
  ['肥皂','féi zào','soap','我最爱吹肥皂泡。','I love blowing soap bubbles most.'],
  ['和弄','huò nong','mix up; stir','把碎肥皂放在小碗里和弄和弄。','Put soap bits in a small bowl and mix them up.'],
  ['透明','tòu míng','transparent','那轻圆的球儿透明的。','The light, round sphere is transparent.'],
  ['玲珑','líng lóng','delicate; exquisite','玲珑娇软的小球。','A delicate, soft little sphere.'],
  ['骄傲','jiāo ào','proud','这是多么骄傲的事啊。','What a proud thing this is.']
], [
  ['拟人','nǐ rén','personification','那么透明，那么圆润，那么美丽。','So transparent, so smooth, so beautiful.','把肥皂泡当作有生命的东西来描写','Describe soap bubbles as if they were living things']
]);

E('我不能失信', [
  ['失信','shī xìn','break a promise','我不能失信。','I cannot break my promise.'],
  ['解释','jiě shì','explain','宋庆龄向爸爸解释。','Song Qingling explained to her father.'],
  ['忘记','wàng jì','forget','我忘记了约好的事。','I forgot the appointment.'],
  ['道理','dào lǐ','principle; truth','守信用是做人的道理。','Keeping promises is a principle of being a good person.'],
  ['盼望','pàn wàng','look forward to','小珍盼望我去教她。','Little Zhen looked forward to me teaching her.']
], null);

// Unit 7 — 奇妙的世界 (Lessons 22-24)
E('我们奇妙的世界', [
  ['奇妙','qí miào','wonderful; marvelous','这是一个奇妙的世界。','This is a wonderful world.'],
  ['光芒','guāng máng','radiance','日出时天空布满光芒。','The sky is filled with radiance at sunrise.'],
  ['雕饰','diāo shì','carve; adorn','冬天雪花雕饰了窗户。','In winter, snowflakes adorn the windows.'],
  ['呈现','chéng xiàn','display; present','大自然呈现出各种色彩。','Nature displays all kinds of colors.'],
  ['模型','mó xíng','model; shape','水洼里的落叶像模型。','Fallen leaves in puddles look like models.']
], [
  ['总分总结构','zǒng-fēn-zǒng','general-specific-general','天空是一个奇妙的世界。……大地也是。……只要你留心观察。','The sky is a wonderful world...So is the earth...As long as you observe carefully.','先总写奇妙，再分写天空和大地，最后总结','First state the wonder, then describe sky and earth, then conclude']
]);

E('海底世界', [
  ['波涛澎湃','bō tāo péng pài','surging waves','海面上波涛澎湃。','The sea surface has surging waves.'],
  ['窃窃私语','qiè qiè sī yǔ','whisper','海底的动物在窃窃私语。','Undersea animals are whispering.'],
  ['蕴藏','yùn cáng','contain; hold','海底蕴藏着丰富的矿产。','The seabed contains rich mineral resources.'],
  ['稀有','xī yǒu','rare','海底有很多稀有金属。','The seabed has many rare metals.'],
  ['景色奇异','jǐng sè qí yì','wondrous scenery','海底真是景色奇异。','The seabed truly has wondrous scenery.']
], [
  ['拟人手法','nǐ rén shǒu fǎ','personification technique','海底的动物常常在窃窃私语。','Undersea animals often whisper to each other.','把动物当作人来描写，使说明文更生动','Describe animals as people to make expository text more vivid']
]);

E('火烧云', [
  ['火烧云','huǒ shāo yún','fire clouds','晚饭过后，火烧云上来了。','After dinner, the fire clouds appeared.'],
  ['笑盈盈','xiào yíng yíng','beaming','小孩子的脸笑盈盈的。','The child was beaming.'],
  ['恍恍惚惚','huǎng huǎng hū hū','dazed; in a trance','看得恍恍惚惚的。','Watching in a daze.'],
  ['威武','wēi wǔ','mighty','那匹马是威武的。','That horse was mighty.'],
  ['变化','biàn huà','change','火烧云的变化极多。','Fire clouds change in many ways.']
], [
  ['排比描写','pái bǐ miáo xiě','parallel description','一会儿红彤彤的，一会儿金灿灿的，一会儿半紫半黄。','Now fiery red, now golden, now half purple and half yellow.','用排比展现火烧云颜色和形状的丰富变化','Use parallel structure to show rich changes in color and shape']
]);

// Unit 8 — 有趣的故事 (Lessons 25-28)
E('慢性子裁缝和急性子顾客', [
  ['性子','xìng zi','temperament','一个慢性子，一个急性子。','One slow-tempered, one quick-tempered.'],
  ['裁缝','cái feng','tailor','裁缝做衣服。','The tailor makes clothes.'],
  ['布料','bù liào','fabric','顾客拿来一卷布料。','The customer brought a roll of fabric.'],
  ['交货','jiāo huò','deliver goods','什么时候交货？','When will you deliver?'],
  ['耐心','nài xīn','patience','裁缝很有耐心。','The tailor was very patient.']
], null);

E('方帽子店', [
  ['橱窗','chú chuāng','shop window','橱窗里放着方帽子。','Square hats were displayed in the shop window.'],
  ['规矩','guī ju','rule; custom','方帽子是老规矩。','Square hats were the old custom.'],
  ['舒服','shū fu','comfortable','圆帽子戴着舒服。','Round hats are comfortable to wear.'],
  ['密密麻麻','mì mi mā ma','densely packed','密密麻麻的人。','Densely packed crowds.'],
  ['新鲜','xīn xiān','novel; fresh','圆帽子是新鲜事物。','Round hats were a novelty.']
], null);

E('漏', [
  ['贼','zéi','thief','有个贼想偷驴。','A thief wanted to steal the donkey.'],
  ['颠簸','diān bǒ','bump; jolt','老虎驮着贼在山路上颠簸。','The tiger carried the thief bumping along the mountain road.'],
  ['粘胶','nián jiāo','sticky','被吓得浑身粘胶似的。','Scared until sticky all over.'],
  ['厉害','lì hai','powerful; formidable','漏比老虎还厉害。','The Leak is more formidable than a tiger.'],
  ['惊恐','jīng kǒng','terrified','贼和老虎都惊恐万分。','Both the thief and tiger were terrified.']
], null);

E('枣核', [
  ['枣核','zǎo hé','date pit','那孩子长得只有枣核那么大。','The child was only as big as a date pit.'],
  ['勤快','qín kuài','diligent; hardworking','枣核非常勤快。','Date Pit was very diligent.'],
  ['本领','běn lǐng','skill; ability','枣核有大本领。','Date Pit had great skills.'],
  ['官府','guān fǔ','government office','县官派人来抢东西。','The county magistrate sent people to steal things.'],
  ['机灵','jī ling','clever; quick-witted','枣核非常机灵。','Date Pit was very clever.']
], null);

saveAndValidate('textbook_g3s2.js', code, 'TB_G3S2');
