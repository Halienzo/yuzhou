/**
 * Supplement enrich for G5S1 lessons 16-27 (Units 5-8)
 * Run: node build/enrich_g5s1_fix.js
 */
const fs = require('fs');
const { enrichByEn, saveAndValidate } = require('./enrich_lib');
let code = fs.readFileSync('textbook_g5s1.js', 'utf8');
const En = (t, v, g) => { code = enrichByEn(code, t, v, g); };

// Unit 5 — Expository Writing
En('The Sun', [
  ['太阳','tài yáng','sun','太阳离我们约有一亿五千万千米远。','The sun is about 150 million km away from us.'],
  ['温度','wēn dù','temperature','太阳的表面温度有五千多摄氏度。','The surface temperature of the sun is over 5,000 degrees Celsius.'],
  ['密切','mì qiè','closely related','太阳和我们的关系非常密切。','The sun is closely related to us.'],
  ['繁殖','fán zhí','reproduce','鸟兽虫鱼才能生存、繁殖。','Birds, beasts, insects and fish can survive and reproduce.'],
  ['杀菌','shā jūn','sterilize','太阳光有杀菌的作用。','Sunlight has a sterilizing effect.']
], [
  ['列数字','liè shù zì','using numbers','约一百三十万个地球的体积才能抵得上一个太阳。','About 1.3 million Earths could fit inside the sun.','用具体数字说明事物特点','Use specific numbers to illustrate features'],
  ['作比较','zuò bǐ jiào','making comparisons','太阳离我们约有一亿五千万千米远，步行要走三千五百年。','The sun is 150 million km away; walking would take 3,500 years.','通过比较让读者理解抽象概念','Help readers understand abstract concepts through comparison']
]);

En('Squirrels', [
  ['松鼠','sōng shǔ','squirrel','松鼠是一种漂亮的小动物。','Squirrels are beautiful little animals.'],
  ['乖巧','guāi qiǎo','clever and cute','松鼠乖巧、驯良，很讨人喜欢。','Squirrels are clever, tame, and lovable.'],
  ['矫健','jiǎo jiàn','agile','身体矫健，四肢轻快。','Agile body, nimble limbs.'],
  ['玲珑','líng lóng','exquisite','玲珑的小面孔。','An exquisite little face.'],
  ['敏捷','mǐn jié','agile; quick','松鼠动作十分敏捷。','Squirrels are very agile.']
], null);

// Unit 6 — Parental Love
En("A Mother\\u2019s Deep Love", [
  ['慈母','cí mǔ','loving mother','慈母情深。','A mother has deep love.'],
  ['情深','qíng shēn','deep affection','母亲对孩子的情意很深。','A mother has deep affection for her child.'],
  ['缝纫机','féng rèn jī','sewing machine','七八十台破缝纫机发出的噪声震耳欲聋。','The noise from seventy or eighty old sewing machines was deafening.'],
  ['疲惫','pí bèi','exhausted','一双眼神疲惫的眼睛吃惊地望着我。','A pair of exhausted eyes looked at me in surprise.'],
  ['龟裂','jūn liè','chapped; cracked','用龟裂的手指数着钱。','Counting money with chapped fingers.']
], [
  ['反复','fǎn fù','repetition','背直起来了，我的母亲。转过身来了，我的母亲。','Her back straightened up, my mother. She turned around, my mother.','重复相同结构强调情感','Repeat the same structure to emphasize emotion']
]);

En("The Boat of Father\\u2019s Love", [
  ['父爱','fù ài','fatherly love','父爱之舟承载着深沉的爱。','The boat of fatherly love carries deep affection.'],
  ['节省','jié shěng','save; economize','父亲平时节省到极点。','Father was extremely frugal.'],
  ['背影','bèi yǐng','rear view; back','父亲那弯腰低头缝补的背影。','The back of father bent over mending clothes.'],
  ['心酸','xīn suān','heartache','这是我第一次真正心酸的哭。','This was my first truly heartfelt cry.'],
  ['艰难','jiān nán','difficult; hard','我深深体会到父亲挣钱的艰难。','I deeply understood how hard it was for father to earn money.']
], [
  ['场景描写','chǎng jǐng miáo xiě','scene description','人山人海，卖小吃的挤得密密层层。','Crowds of people, snack sellers packed together.','通过具体场景传达情感','Convey emotion through specific scenes']
]);

En("\\u2018Wonderful!\\u2019 and \\u2018Terrible!\\u2019", [
  ['精彩','jīng cǎi','wonderful','多美的诗啊！精彩极了！','What a beautiful poem! Wonderful!'],
  ['糟糕','zāo gāo','terrible','我看这首诗糟糕透了。','I think this poem is terrible.'],
  ['赞扬','zàn yáng','praise','赞扬声雨点般落到我身上。','Praise rained down on me.'],
  ['严厉','yán lì','strict','父亲的批评是严厉的。','The criticism from father was strict.'],
  ['鼓舞','gǔ wǔ','encourage; inspire','在爱的鼓舞下，我努力地向前驶去。','Inspired by love, I pressed forward.']
], null);

// Unit 7 — The Beauty of Nature
En('Three Classical Poems', [
  ['山居秋暝','shān jū qiū míng','Autumn Evening in the Mountains','空山新雨后，天气晚来秋。','After fresh rain in empty mountains, autumn evening descends.'],
  ['枫桥夜泊','fēng qiáo yè bó','Mooring at Night by Maple Bridge','月落乌啼霜满天。','The moon sets, crows cry, frost fills the sky.'],
  ['长相思','cháng xiāng sī','Everlasting Longing','山一程，水一程。','Mountains stretch on, waters stretch on.'],
  ['动静结合','dòng jìng jié hé','combining movement and stillness','明月松间照，清泉石上流。','Bright moon shines through pines, clear spring flows over rocks.'],
  ['羁旅思乡','jī lǚ sī xiāng','homesickness while traveling','风一更，雪一更，聒碎乡心梦不成。','Wind howls, snow falls, shattering dreams of home.']
], null);

En('The Beauty of the Four Seasons', [
  ['黎明','lí míng','dawn','春天最美是黎明。','Spring is most beautiful at dawn.'],
  ['夜幕','yè mù','nightfall','夏天最美是夜幕降临。','Summer is most beautiful when night falls.'],
  ['闲逸','xián yì','leisurely','秋天闲逸的心情。','The leisurely mood of autumn.'],
  ['凛冽','lǐn liè','piercing cold','冬天凛冽的早晨。','The piercing cold winter mornings.'],
  ['静态描写','jìng tài miáo xiě','static description','东方一点儿一点儿泛着鱼肚色的天空。','The eastern sky gradually turning the color of a fish belly.']
], [
  ['动静结合','dòng jìng jié hé','combining movement and stillness','明亮的月夜固然美，漆黑漆黑的暗夜也有萤火虫翩翩飞舞。','Bright moonlit nights are beautiful, but dark nights have fireflies dancing.','将动态与静态描写结合展现景色','Combine dynamic and static descriptions to show scenery']
]);

En("The Bird\\u2019s Paradise", [
  ['天堂','tiān táng','paradise','那是鸟的天堂。','That is the paradise of birds.'],
  ['榕树','róng shù','banyan tree','一株大榕树。','A great banyan tree.'],
  ['茂盛','mào shèng','luxuriant','榕树枝叶茂盛。','The banyan tree has luxuriant branches and leaves.'],
  ['应接不暇','yìng jiē bù xiá','too many to take in','群鸟纷飞，应接不暇。','Birds flew in all directions, too many to take in.'],
  ['不可计数','bù kě jì shù','countless','不可计数的枝叶。','Countless branches and leaves.']
], [
  ['点面结合','diǎn miàn jié hé','combining detail and overview','到处是鸟声，到处是鸟影……一只画眉鸟飞了出来。','Birdsong and bird shadows everywhere... A thrush flew out.','先写整体场面再聚焦个体','First describe the whole scene, then focus on an individual']
]);

En('Moon Traces', [
  ['月迹','yuè jì','moon traces','我们寻找月亮的痕迹。','We search for traces of the moon.'],
  ['穿衣镜','chuān yī jìng','dressing mirror','月亮出现在穿衣镜上。','The moon appeared on the dressing mirror.'],
  ['满盈','mǎn yíng','brimming','酒杯里有了一个小小的满盈的月亮。','In the wine cup there was a small, full moon.'],
  ['嫉妒','jí dù','jealous','月亮是属于我们每个人的。','The moon belongs to each of us.'],
  ['踪迹','zōng jì','trace','月亮的踪迹无处不在。','Traces of the moon are everywhere.']
], null);

// Unit 8 — The Joy of Reading
En('Ancients on Reading', [
  ['论语','lún yǔ','The Analerta','知之为知之，不知为不知，是知也。','To know what you know and know what you do not know — that is true knowledge.'],
  ['朱熹','zhū xī','Zhu Xi','读书有三到：心到、眼到、口到。','Reading requires three arrivals: mind, eyes, and mouth.'],
  ['好学','hào xué','love learning','敏而好学，不耻下问。','Quick to learn, not ashamed to ask those below.'],
  ['诵读','sòng dú','recite','漫浪诵读，决不能记。','Reading carelessly, one can never remember.'],
  ['专一','zhuān yī','focused','心眼既不专一，却只漫浪诵读。','If mind and eyes are not focused, one only reads carelessly.']
], [
  ['文言文阅读','wén yán wén yuè dú','classical Chinese reading','知之为知之，不知为不知，是知也。','To know what you know and not what you do not — that is wisdom.','借助注释理解文言文大意','Use annotations to understand classical Chinese']
]);

En('Remembering Reading', [
  ['读书','dú shū','reading','一谈到读书，我的话就多了！','When it comes to reading, I have so much to say!'],
  ['津津有味','jīn jīn yǒu wèi','with great relish','我听得津津有味。','I listened with great relish.'],
  ['一知半解','yī zhī bàn jiě','half understanding','自己一知半解地读了起来。','I started reading with only a half understanding.'],
  ['总而言之','zǒng ér yán zhī','in summary','总而言之，读书好。','In summary, reading is good.'],
  ['质朴','zhì pǔ','simple and natural','冰心的文字质朴而深刻。','Bing Xin writes simply yet profoundly.']
], null);

En("My \\u2018Elixir of Life\\u2019", [
  ['长生果','cháng shēng guǒ','elixir of life','书被称为我的长生果。','Books are called my elixir of life.'],
  ['如饥似渴','rú jī sì kě','thirstily; eagerly','我如饥似渴地读着每一本书。','I read every book eagerly.'],
  ['心扉','xīn fēi','heart','书打开了我的心扉。','Books opened my heart.'],
  ['馈赠','kuì zèng','gift','读书带给我丰厚的馈赠。','Reading brought me generous gifts.'],
  ['真情实感','zhēn qíng shí gǎn','true feelings','作文要写出真情实感。','Writing should express true feelings.']
], null);

saveAndValidate('textbook_g5s1.js', code, 'TB_G5S1');
