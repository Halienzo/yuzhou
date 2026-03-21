/**
 * Enrich textbook_g2s1.js with vocabWords for all content lessons
 * Run: node build/enrich_g2s1.js
 *
 * SECURITY NOTE: Build-time data enrichment script operating on trusted local files.
 */
const fs = require('fs');
let code = fs.readFileSync('textbook_g2s1.js', 'utf8');

function enrichLesson(src, titleStr, vocabArr) {
  // G2+ uses spaced format: title: "..."
  const titleMarker = 'title: "' + titleStr + '"';
  const idx = src.indexOf(titleMarker);
  if (idx === -1) { console.log('NOT FOUND:', titleStr); return src; }

  const afterTitle = src.slice(idx);
  const exMatch = afterTitle.match(/\n(\s+)exercises:\s*\[/);
  if (!exMatch) { console.log('NO exercises after', titleStr); return src; }
  const exPos = idx + afterTitle.indexOf(exMatch[0]);

  if (src.slice(idx, exPos).includes('vocabWords:')) return src;

  const indent = exMatch[1];
  let vw = '\n' + indent + 'vocabWords: [\n';
  vocabArr.forEach((v, i) => {
    const e = v[2].replace(/'/g, '\u2019');
    const se = v[4].replace(/'/g, '\u2019');
    vw += indent + '  {word:\'' + v[0] + '\',pinyin:\'' + v[1] + '\',en:\'' + e + '\',sentence:\'' + v[3] + '\',sentenceEn:\'' + se + '\'}';
    vw += (i < vocabArr.length - 1 ? ',' : '') + '\n';
  });
  vw += indent + '],';
  return src.slice(0, exPos) + vw + src.slice(exPos);
}

// Compact format: [word, pinyin, english, sentence, sentenceEn]

// Unit 1: 课文
code = enrichLesson(code, '小蝌蚪找妈妈', [
  ['蝌蚪','kē dǒu','tadpole','池塘里有一群小蝌蚪。','There is a group of tadpoles in the pond.'],
  ['池塘','chí táng','pond','池塘里有一群小蝌蚪。','There is a group of tadpoles in the pond.'],
  ['脑袋','nǎo dai','head','大大的脑袋。','Big heads.'],
  ['披着','pī zhe','wear; drape','披着碧绿的衣裳。','Wearing emerald green clothes.'],
  ['捕食','bǔ shí','catch food','鲤鱼妈妈在教小鲤鱼捕食。','Mother Carp teaches baby carps to catch food.'],
  ['害虫','hài chóng','pest','天天去捉害虫。','Catch pests every day.']
]);

code = enrichLesson(code, '我是什么', [
  ['变成','biàn chéng','become','我会变成各种样子。','I can become various forms.'],
  ['云','yún','cloud','我变成了云。','I became a cloud.'],
  ['雨','yǔ','rain','我变成雨点落下来。','I became raindrops and fell down.'],
  ['冰雹','bīng báo','hail','有时候我变成冰雹。','Sometimes I become hail.'],
  ['庄稼','zhuāng jia','crops','我灌溉田地，帮助庄稼。','I irrigate fields and help crops.']
]);

code = enrichLesson(code, '植物妈妈有办法', [
  ['植物','zhí wù','plant','植物妈妈有办法。','Plant mothers have their ways.'],
  ['办法','bàn fǎ','method','它们有很多办法。','They have many methods.'],
  ['蒲公英','pú gōng yīng','dandelion','蒲公英靠风传播种子。','Dandelions spread seeds by wind.'],
  ['降落伞','jiàng luò sǎn','parachute','种子像降落伞一样飘。','Seeds float like parachutes.'],
  ['旅行','lǚ xíng','travel','种子也要去旅行。','Seeds also want to travel.']
]);

// Unit 2: 识字
code = enrichLesson(code, '场景歌', [
  ['海鸥','hǎi ōu','seagull','一只海鸥飞过来。','A seagull flies over.'],
  ['军舰','jūn jiàn','warship','一艘军舰停在港口。','A warship docks at the port.'],
  ['帆船','fān chuán','sailboat','一条帆船在海面上。','A sailboat on the sea.'],
  ['稻田','dào tián','rice paddy','一块稻田绿油油。','A rice paddy, lush and green.'],
  ['量词','liàng cí','measure word','学习不同的量词。','Learn different measure words.']
]);

code = enrichLesson(code, '树之歌', [
  ['杨树','yáng shù','poplar','杨树高。','The poplar is tall.'],
  ['榕树','róng shù','banyan','榕树壮。','The banyan is strong.'],
  ['梧桐','wú tóng','parasol tree','梧桐树叶像手掌。','Parasol tree leaves look like palms.'],
  ['枫树','fēng shù','maple','枫树秋天叶儿红。','Maple leaves turn red in autumn.'],
  ['松柏','sōng bǎi','pine and cypress','松柏四季披绿装。','Pines and cypresses stay green all year.'],
  ['银杏','yín xìng','ginkgo','银杏活了几千年。','Ginkgo trees have lived thousands of years.']
]);

code = enrichLesson(code, '拍手歌', [
  ['动物','dòng wù','animal','保护动物很重要。','Protecting animals is important.'],
  ['孔雀','kǒng què','peacock','孔雀开屏真好看。','The peacock spreading its tail is beautiful.'],
  ['锦鸡','jǐn jī','golden pheasant','锦鸡身上花纹多。','The golden pheasant has many patterns.'],
  ['雄鹰','xióng yīng','eagle','雄鹰飞翔在蓝天。','Eagles soar in the blue sky.'],
  ['保护','bǎo hù','protect','大家都来保护动物。','Everyone should protect animals.']
]);

code = enrichLesson(code, '田家四季歌', [
  ['播种','bō zhǒng','sow seeds','春季里，春风吹，花开草长播种忙。','In spring, wind blows, flowers bloom and seeds are sown.'],
  ['插秧','chā yāng','transplant rice','夏季里，农事忙，采了蚕桑又插秧。','In summer, farming is busy with silkworm and rice planting.'],
  ['丰收','fēng shōu','harvest','秋季里，稻上场，谷像黄金粒粒香。','In autumn, grain is harvested, golden and fragrant.'],
  ['棉衣','mián yī','cotton-padded clothes','冬季里，雪初晴，新制棉衣暖又轻。','In winter after snow, new cotton clothes are warm and light.'],
  ['农事','nóng shì','farming work','四季农事各不同。','Farming differs with each season.']
]);

// Unit 3: 课文
code = enrichLesson(code, '曹冲称象', [
  ['称象','chēng xiàng','weigh the elephant','曹冲称象。','Cao Chong weighs the elephant.'],
  ['官员','guān yuán','official','官员们都想不出办法。','The officials could not think of a way.'],
  ['石头','shí tou','stone','在船上装石头。','Load stones onto the boat.'],
  ['秤','chèng','scale','大象太重，秤称不了。','The elephant is too heavy for a scale.'],
  ['下沉','xià chén','sink','船下沉了一些。','The boat sank a little.']
]);

code = enrichLesson(code, '玲玲的画', [
  ['画','huà','painting; draw','玲玲画了一幅画。','Lingling drew a painting.'],
  ['满意','mǎn yì','satisfied','爸爸很满意。','Dad was very satisfied.'],
  ['弄脏','nòng zāng','make dirty','不小心弄脏了画。','Accidentally made the painting dirty.'],
  ['哭','kū','cry','玲玲伤心地哭了。','Lingling cried sadly.'],
  ['动脑筋','dòng nǎo jīn','use your brain','只要肯动脑筋，坏事也能变好事。','If you use your brain, bad things can become good.']
]);

code = enrichLesson(code, '一封信', [
  ['信','xìn','letter','露西写了一封信。','Lucy wrote a letter.'],
  ['想念','xiǎng niàn','miss','我很想念你。','I miss you very much.'],
  ['电灯','diàn dēng','electric lamp','我们家的电灯坏了。','Our lamp is broken.'],
  ['修理','xiū lǐ','repair','邻居帮忙修理。','The neighbor helped repair it.'],
  ['开心','kāi xīn','happy','我过得很开心。','I am very happy.']
]);

code = enrichLesson(code, '妈妈睡了', [
  ['睡着','shuì zháo','fall asleep','妈妈睡着了。','Mom fell asleep.'],
  ['明亮','míng liàng','bright','妈妈明亮的眼睛闭上了。','Mom closed her bright eyes.'],
  ['弯弯','wān wān','curved','弯弯的眉毛。','Curved eyebrows.'],
  ['红润','hóng rùn','rosy','红润的脸。','A rosy face.'],
  ['安静','ān jìng','quiet','妈妈睡了，房间很安静。','Mom is asleep, the room is quiet.']
]);

// Unit 4: 课文
code = enrichLesson(code, '古诗二首', [
  ['登高','dēng gāo','climb high','遥知兄弟登高处。','Knowing from afar brothers climb high.'],
  ['思念','sī niàn','miss','每逢佳节倍思亲。','At every festival, I miss family even more.'],
  ['佳节','jiā jié','festival','每逢佳节倍思亲。','At every festival, I miss family even more.'],
  ['异乡','yì xiāng','foreign land','独在异乡为异客。','Alone in a foreign land, a stranger.'],
  ['茱萸','zhū yú','cornel','遍插茱萸少一人。','With cornel sprigs pinned, one person is missing.']
]);

code = enrichLesson(code, '黄山奇石', [
  ['奇石','qí shí','strange rock','黄山奇石真奇妙。','The strange rocks of Huangshan are truly wonderful.'],
  ['风景区','fēng jǐng qū','scenic area','黄山是闻名中外的风景区。','Huangshan is a scenic area famous worldwide.'],
  ['仙人','xiān rén','immortal','仙人指路。','The Immortal Pointing the Way.'],
  ['陡峭','dǒu qiào','steep','陡峭的山峰上。','On the steep mountain peak.'],
  ['秀丽','xiù lì','beautiful','秀丽的风景。','Beautiful scenery.']
]);

code = enrichLesson(code, '日月潭', [
  ['日月潭','rì yuè tán','Sun Moon Lake','日月潭在台湾省。','Sun Moon Lake is in Taiwan.'],
  ['湖水','hú shuǐ','lake water','湖水碧绿碧绿的。','The lake water is emerald green.'],
  ['环绕','huán rào','surround','群山环绕。','Mountains surround it.'],
  ['隐隐约约','yǐn yǐn yuē yuē','faintly','晨星和灯光隐隐约约地倒映在湖面上。','Stars and lights faintly reflect on the lake.'],
  ['吸引','xī yǐn','attract','日月潭吸引了很多游客。','Sun Moon Lake attracts many tourists.']
]);

code = enrichLesson(code, '葡萄沟', [
  ['葡萄','pú tao','grape','葡萄沟出产葡萄。','Grape Valley produces grapes.'],
  ['维吾尔族','wéi wú ěr zú','Uyghur','维吾尔族老乡热情好客。','The Uyghur villagers are warm and hospitable.'],
  ['凉棚','liáng péng','shade pergola','茂密的枝叶搭起凉棚。','Dense vines form a shade pergola.'],
  ['五光十色','wǔ guāng shí sè','colorful','葡萄五光十色。','Grapes are brilliantly colorful.'],
  ['葡萄干','pú tao gān','raisin','阴房里晾葡萄干。','Raisins are dried in drying rooms.']
]);

// Unit 5: 课文
code = enrichLesson(code, '坐井观天', [
  ['井','jǐng','well','青蛙坐在井里。','The frog sits in the well.'],
  ['天','tiān','sky','天有多大？','How big is the sky?'],
  ['无边无际','wú biān wú jì','boundless','天无边无际。','The sky is boundless.'],
  ['弄错','nòng cuò','mistake','你弄错了。','You are mistaken.'],
  ['小鸟','xiǎo niǎo','bird','小鸟飞过来。','A little bird flies over.']
]);

code = enrichLesson(code, '寒号鸟', [
  ['寒号鸟','hán hào niǎo','shivering bird','寒号鸟不肯做窝。','The shivering bird refused to build a nest.'],
  ['懒惰','lǎn duò','lazy','寒号鸟很懒惰。','The shivering bird was very lazy.'],
  ['冻死','dòng sǐ','freeze to death','寒号鸟冻死了。','The shivering bird froze to death.'],
  ['喜鹊','xǐ què','magpie','喜鹊一早就忙着做窝。','The magpie was busy building a nest early on.'],
  ['温暖','wēn nuǎn','warm','喜鹊的窝又暖又舒服。','The magpie nest was warm and comfortable.']
]);

code = enrichLesson(code, '我要的是葫芦', [
  ['葫芦','hú lu','gourd','他种了一棵葫芦。','He planted a gourd vine.'],
  ['叶子','yè zi','leaf','叶子上有蚜虫。','There are aphids on the leaves.'],
  ['蚜虫','yá chóng','aphid','他不治蚜虫。','He did not treat the aphids.'],
  ['邻居','lín jū','neighbor','邻居劝他治虫。','The neighbor advised him to treat the pests.'],
  ['可惜','kě xī','pity','可惜葫芦都落了。','What a pity, all the gourds fell.']
]);

// Unit 6: 课文
code = enrichLesson(code, '八角楼上', [
  ['油灯','yóu dēng','oil lamp','一盏清油灯。','A clear oil lamp.'],
  ['夜深','yè shēn','late at night','每当夜深人静。','Whenever the night is deep and quiet.'],
  ['光辉','guāng huī','radiance','灯光照亮前方。','The lamp illuminates the path ahead.'],
  ['著作','zhù zuò','writings','写下了不朽的著作。','Wrote immortal works.'],
  ['井冈山','jǐng gāng shān','Jinggang Mountain','在井冈山上。','On Jinggang Mountain.']
]);

code = enrichLesson(code, '朱德的扁担', [
  ['扁担','biǎn dan','carrying pole','朱德的扁担。','Zhu De carrying pole.'],
  ['粮食','liáng shi','grain','战士们挑粮食上山。','Soldiers carried grain up the mountain.'],
  ['同志','tóng zhì','comrade','朱德同志和战士们一起劳动。','Comrade Zhu De worked alongside the soldiers.'],
  ['藏起来','cáng qǐ lái','hide','战士们把扁担藏起来。','The soldiers hid the carrying pole.'],
  ['敬爱','jìng ài','respect and love','大家都敬爱朱德同志。','Everyone respected and loved Comrade Zhu De.']
]);

code = enrichLesson(code, '难忘的泼水节', [
  ['泼水节','pō shuǐ jié','Water-Splashing Festival','泼水节到了。','The Water-Splashing Festival has come.'],
  ['傣族','dǎi zú','Dai ethnic group','傣族人民的泼水节。','The Dai people Water-Splashing Festival.'],
  ['总理','zǒng lǐ','premier','周总理来了。','Premier Zhou came.'],
  ['欢呼','huān hū','cheer','人们欢呼起来。','People cheered.'],
  ['象脚鼓','xiàng jiǎo gǔ','elephant-foot drum','敲响了象脚鼓。','Beat the elephant-foot drums.']
]);

code = enrichLesson(code, '刘胡兰', [
  ['英雄','yīng xióng','hero','刘胡兰是英雄。','Liu Hulan was a hero.'],
  ['敌人','dí rén','enemy','敌人来了。','The enemy came.'],
  ['勇敢','yǒng gǎn','brave','刘胡兰很勇敢。','Liu Hulan was very brave.'],
  ['牺牲','xī shēng','sacrifice','她英勇牺牲了。','She heroically sacrificed her life.'],
  ['伟大','wěi dà','great','伟大的生，光荣的死。','A great life, a glorious death.']
]);

// Unit 7: 课文
code = enrichLesson(code, '古诗二首', [
  ['瀑布','pù bù','waterfall','飞流直下三千尺。','Flying straight down three thousand feet.'],
  ['银河','yín hé','Milky Way','疑是银河落九天。','As if the Milky Way falls from the ninth heaven.'],
  ['庐山','lú shān','Mount Lu','日照香炉生紫烟。','Sunlight on Incense Burner creates purple mist.'],
  ['鹳雀楼','guàn què lóu','Stork Tower','登鹳雀楼。','Climbing the Stork Tower.'],
  ['目','mù','eye; gaze','欲穷千里目。','To see a thousand miles further.']
]);

code = enrichLesson(code, '黄山奇石', []);  // skip — already enriched above
code = enrichLesson(code, '雾在哪里', [
  ['雾','wù','fog','雾是个淘气的孩子。','Fog is a naughty child.'],
  ['淘气','táo qì','naughty','雾真淘气。','Fog is really naughty.'],
  ['躲藏','duǒ cáng','hide','大海躲藏起来了。','The sea hid itself.'],
  ['岸边','àn biān','shore','岸边的城市不见了。','The coastal city disappeared.'],
  ['连同','lián tóng','together with','连同大海一起藏起来。','Hidden together with the sea.']
]);

code = enrichLesson(code, '雪孩子', [
  ['雪人','xuě rén','snowman','兔妈妈堆了一个雪人。','Mother Rabbit built a snowman.'],
  ['柴火','chái huo','firewood','添了些柴火。','Added some firewood.'],
  ['着火','zháo huǒ','catch fire','房子着火了。','The house caught fire.'],
  ['救','jiù','save; rescue','雪孩子冲进去救了小白兔。','The snow child rushed in and saved the rabbit.'],
  ['化了','huà le','melted','雪孩子化了。','The snow child melted.']
]);

// Unit 8: 课文
code = enrichLesson(code, '狐假虎威', [
  ['狐狸','hú li','fox','狐狸被老虎抓住了。','The fox was caught by the tiger.'],
  ['老虎','lǎo hǔ','tiger','老虎在森林里找食物。','The tiger hunted for food in the forest.'],
  ['威风','wēi fēng','imposing','狐狸假装很威风。','The fox pretended to be imposing.'],
  ['害怕','hài pà','afraid','百兽都害怕了。','All the animals were afraid.'],
  ['狡猾','jiǎo huá','cunning','狐狸很狡猾。','The fox was very cunning.']
]);

code = enrichLesson(code, '狐狸分奶酪', [
  ['奶酪','nǎi lào','cheese','小熊找到一块奶酪。','The little bears found a piece of cheese.'],
  ['分','fēn','divide','狐狸帮他们分奶酪。','The fox helped them divide the cheese.'],
  ['公平','gōng píng','fair','这不公平！','This is not fair!'],
  ['吵架','chǎo jià','quarrel','两只小熊吵架了。','The two little bears quarreled.'],
  ['上当','shàng dàng','be tricked','小熊上当了。','The little bears were tricked.']
]);

code = enrichLesson(code, '纸船和风筝', [
  ['纸船','zhǐ chuán','paper boat','松鼠折了一只纸船。','Squirrel folded a paper boat.'],
  ['风筝','fēng zheng','kite','小熊放了一只风筝。','Little Bear flew a kite.'],
  ['友谊','yǒu yì','friendship','他们成了好朋友。','They became good friends.'],
  ['道歉','dào qiàn','apologize','他们想向对方道歉。','They wanted to apologize to each other.'],
  ['和好','hé hǎo','make up','他们又和好了。','They made up again.']
]);

code = enrichLesson(code, '风娃娃', [
  ['风娃娃','fēng wá wa','Wind Child','风娃娃来了。','Wind Child has come.'],
  ['帮忙','bāng máng','help','风娃娃想帮忙。','Wind Child wants to help.'],
  ['力气','lì qi','strength','他使劲吹。','He blew with all his might.'],
  ['好事','hǎo shì','good deed','做了好事和坏事。','Did good and bad things.'],
  ['伤心','shāng xīn','sad','风娃娃很伤心。','Wind Child was very sad.']
]);

fs.writeFileSync('textbook_g2s1.js', code, 'utf8');
console.log('Done! G2S1 enriched.');

// Validate
try {
  const testCode = code.replace('window.TB_G2S1', 'var TB_G2S1');
  require('vm').runInNewContext(testCode, {window: {}, console: console});
  console.log('Validation: syntax OK');
  console.log('vocabWords count:', (code.match(/vocabWords:/g) || []).length);
} catch (e) {
  console.log('Validation FAILED:', e.message);
}
