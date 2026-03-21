/**
 * Enrich textbook_g2s2.js with vocabWords
 * Run: node build/enrich_g2s2.js
 * SECURITY NOTE: Build-time data enrichment on trusted local files only.
 */
const fs = require('fs');
let code = fs.readFileSync('textbook_g2s2.js', 'utf8');

function enrichLesson(src, titleStr, vocabArr) {
  // Try literal match first, then try Unicode-escaped version
  let titleMarker = 'title: "' + titleStr + '"';
  let idx = src.indexOf(titleMarker);
  if (idx === -1) {
    // Convert to Unicode escape: e.g. "雷雨" → "\u96F7\u96E8"
    const escaped = titleStr.split('').map(c => {
      const code = c.charCodeAt(0);
      return code > 127 ? '\\u' + code.toString(16).toUpperCase().padStart(4, '0') : c;
    }).join('');
    titleMarker = 'title: "' + escaped + '"';
    idx = src.indexOf(titleMarker);
  }
  if (idx === -1) { console.log('NOT FOUND:', titleStr); return src; }
  const afterTitle = src.slice(idx);
  const exMatch = afterTitle.match(/\n(\s+)exercises:\s*\[/);
  if (!exMatch) { console.log('NO exercises:', titleStr); return src; }
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

function enrichByEn(src, titleEnStr, vocabArr) {
  const marker = 'titleEn: "' + titleEnStr + '"';
  const enIdx = src.indexOf(marker);
  if (enIdx === -1) { console.log('EN NOT FOUND:', titleEnStr); return src; }
  // Find the title: before this titleEn
  const titleIdx = src.lastIndexOf('title:', enIdx);
  if (titleIdx === -1 || enIdx - titleIdx > 200) { console.log('title: not near:', titleEnStr); return src; }
  const afterTitle = src.slice(titleIdx);
  const exMatch = afterTitle.match(/\n(\s+)exercises:\s*\[/);
  if (!exMatch) { console.log('NO exercises after EN:', titleEnStr); return src; }
  const exPos = titleIdx + afterTitle.indexOf(exMatch[0]);
  if (src.slice(titleIdx, exPos).includes('vocabWords:')) return src;
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

// [word, pinyin, english, sentence, sentenceEn]

// Unit 1
code = enrichLesson(code, '古诗二首', [
  ['村庄','cūn zhuāng','village','草长莺飞二月天。','Grass grows and orioles fly in February.'],
  ['堤岸','dī àn','embankment','拂堤杨柳醉春烟。','Willows brush the embankment in spring haze.'],
  ['纸鸢','zhǐ yuān','kite','忙趁东风放纸鸢。','Hurry to fly kites in the east wind.'],
  ['绝句','jué jù','quatrain','迟日江山丽。','Slow sun, beautiful land and river.'],
  ['春风','chūn fēng','spring breeze','春风花草香。','Spring wind, flowers and grass fragrant.']
]);

code = enrichLesson(code, '找春天', [
  ['春天','chūn tiān','spring','春天来了！我们去找春天。','Spring is here! Let us find spring.'],
  ['嫩芽','nèn yá','tender bud','小草从地下探出头来。','Little grass pokes out its head from underground.'],
  ['解冻','jiě dòng','thaw','小溪丁丁冬冬。','The brook goes ding-dong.'],
  ['野花','yě huā','wildflower','野花一朵两朵。','Wildflowers, one, two.'],
  ['探出','tàn chū','poke out','小草从地下探出头来。','Grass pokes its head above ground.']
]);

code = enrichLesson(code, '开满鲜花的小路', [
  ['邮递员','yóu dì yuán','postman','邮递员黄狗送来包裹。','Postman Yellow Dog delivered a package.'],
  ['包裹','bāo guǒ','package','一个包裹破了。','A package was torn.'],
  ['鲜花','xiān huā','fresh flowers','小路上开满了鲜花。','The path was full of fresh flowers.'],
  ['绚丽','xuàn lì','gorgeous','多么绚丽的花朵！','How gorgeous the flowers are!'],
  ['惊奇','jīng qí','surprised','大家都很惊奇。','Everyone was surprised.']
]);

code = enrichLesson(code, '邓小平爷爷植树', [
  ['植树','zhí shù','plant trees','邓爷爷去植树。','Grandpa Deng went to plant trees.'],
  ['碧绿','bì lǜ','emerald green','碧绿的小柏树。','An emerald green little cypress.'],
  ['挖坑','wā kēng','dig a hole','邓爷爷精心地挖坑。','Grandpa Deng carefully dug holes.'],
  ['培土','péi tǔ','add soil','培土、浇水。','Add soil and water.'],
  ['挺立','tǐng lì','stand tall','小柏树挺立在春风里。','The cypress stands tall in the spring wind.']
]);

// Unit 2
code = enrichLesson(code, '雷锋叔叔，你在哪里', [
  ['雷锋','léi fēng','Lei Feng','雷锋叔叔，你在哪里？','Uncle Lei Feng, where are you?'],
  ['足迹','zú jì','footprint','沿着长长的小溪寻找足迹。','Following footprints along the long brook.'],
  ['泥泞','ní nìng','muddy','踏着泥泞的道路。','Walking on the muddy road.'],
  ['年迈','nián mài','elderly','背着年迈的大娘。','Carrying an elderly woman on his back.'],
  ['温暖','wēn nuǎn','warm','哪里需要帮助，哪里就有温暖。','Where there is need, there is warmth.']
]);

code = enrichLesson(code, '千人糕', [
  ['米糕','mǐ gāo','rice cake','一块平平常常的米糕。','An ordinary rice cake.'],
  ['工人','gōng rén','worker','种稻子的农民，磨面的工人。','Farmers who grow rice, workers who grind flour.'],
  ['劳动','láo dòng','labor','需要很多人的劳动。','Needs the labor of many people.'],
  ['感谢','gǎn xiè','thank','要感谢大家的付出。','We should thank everyone for their effort.'],
  ['合作','hé zuò','cooperate','人们互相合作。','People cooperate with each other.']
]);

code = enrichLesson(code, '一匹出色的马', [
  ['郊外','jiāo wài','outskirts','一家人到郊外散步。','The family took a walk in the outskirts.'],
  ['柳枝','liǔ zhī','willow branch','妹妹拿到一根柳枝。','Sister got a willow branch.'],
  ['出色','chū sè','outstanding','这是一匹出色的马。','This is an outstanding horse.'],
  ['恋恋不舍','liàn liàn bù shě','reluctant to leave','妹妹恋恋不舍。','Sister was reluctant to leave.'],
  ['骑','qí','ride','妹妹骑着柳枝回家。','Sister rode the willow branch home.']
]);

// Unit 3: 识字
code = enrichLesson(code, '神州谣', [
  ['神州','shén zhōu','China (poetic)','神州大地多壮丽。','The land of China is majestic.'],
  ['长江','cháng jiāng','Yangtze River','长江黄河万里长。','The Yangtze and Yellow River stretch ten thousand miles.'],
  ['黄河','huáng hé','Yellow River','黄河是母亲河。','The Yellow River is the mother river.'],
  ['珠峰','zhū fēng','Mount Everest','珠穆朗玛峰最高。','Mount Everest is the highest.'],
  ['台湾','tái wān','Taiwan','台湾岛是祖国的宝岛。','Taiwan is a treasure island of the motherland.']
]);

code = enrichLesson(code, '传统节日', [
  ['春节','chūn jié','Spring Festival','春节到，放鞭炮。','Spring Festival comes, set off firecrackers.'],
  ['元宵节','yuán xiāo jié','Lantern Festival','元宵节看花灯。','Watch lanterns at the Lantern Festival.'],
  ['清明节','qīng míng jié','Tomb-Sweeping Day','清明节去扫墓。','Sweep tombs on Tomb-Sweeping Day.'],
  ['端午节','duān wǔ jié','Dragon Boat Festival','端午节赛龙舟。','Race dragon boats at Dragon Boat Festival.'],
  ['中秋节','zhōng qiū jié','Mid-Autumn Festival','中秋月儿明。','The Mid-Autumn moon is bright.'],
  ['重阳节','chóng yáng jié','Double Ninth Festival','重阳节要敬老。','Respect elders on Double Ninth Festival.']
]);

code = enrichByEn(code, 'The Story of \\u201CShell\\u201D', [
  ['贝壳','bèi ké','shell','古人用贝壳当钱币。','Ancients used shells as currency.'],
  ['珍贵','zhēn guì','precious','贝壳很珍贵。','Shells were precious.'],
  ['钱币','qián bì','money; currency','用贝壳做钱币。','Used shells as currency.'],
  ['偏旁','piān páng','radical','贝字旁的字和钱有关。','Characters with shell radical relate to money.'],
  ['财富','cái fù','wealth','贝代表财富。','Shell represents wealth.']
]);

code = enrichLesson(code, '中国美食', [
  ['凉拌','liáng bàn','cold-mixed (salad)','凉拌菠菜。','Cold-mixed spinach.'],
  ['红烧','hóng shāo','braised in soy sauce','红烧茄子。','Braised eggplant.'],
  ['清蒸','qīng zhēng','steamed','清蒸鱼。','Steamed fish.'],
  ['炒菜','chǎo cài','stir-fry','爆炒腰花。','Quick-fried kidney.'],
  ['美食','měi shí','delicious food','中国美食种类多。','Chinese cuisine has many varieties.']
]);

// Unit 4
code = enrichLesson(code, '彩色的梦', [
  ['彩色','cǎi sè','colorful','我有一大把彩色的梦。','I have a big handful of colorful dreams.'],
  ['铅笔','qiān bǐ','pencil','长长短短的铅笔。','Long and short pencils.'],
  ['草坪','cǎo píng','lawn','在草坪上画画。','Drawing on the lawn.'],
  ['葱郁','cōng yù','lush','大片的绿色葱郁。','Vast lush green.'],
  ['精灵','jīng líng','spirit; fairy','彩色的精灵在跳舞。','Colorful spirits dance.']
]);

code = enrichLesson(code, '枫树上的喜鹊', [
  ['枫树','fēng shù','maple tree','我喜欢站在枫树下看喜鹊。','I like standing under the maple watching magpies.'],
  ['喜鹊','xǐ què','magpie','枫树上有喜鹊的窝。','There is a magpie nest in the maple.'],
  ['阿姨','ā yí','aunt (familiar)','喜鹊阿姨在教小喜鹊唱歌。','Auntie Magpie teaches the little ones to sing.'],
  ['问号','wèn hào','question mark','我有好多问号。','I have so many questions.'],
  ['拼音','pīn yīn','pinyin','喜鹊在教拼音。','The magpie is teaching pinyin.']
]);

code = enrichLesson(code, '沙滩上的童话', [
  ['沙滩','shā tān','beach','我们在沙滩上玩。','We play on the beach.'],
  ['城堡','chéng bǎo','castle','我们建了一座城堡。','We built a castle.'],
  ['编','biān','weave; compose','编一个童话故事。','Make up a fairy tale.'],
  ['勇士','yǒng shì','warrior','我们是勇敢的勇士。','We are brave warriors.'],
  ['胜利','shèng lì','victory','最后胜利了！','Victory at last!']
]);

code = enrichLesson(code, '我是一只小虫子', [
  ['虫子','chóng zi','bug','我是一只小虫子。','I am a little bug.'],
  ['花瓣','huā bàn','petal','在花瓣上滑滑梯。','Sliding down on petals.'],
  ['草叶','cǎo yè','blade of grass','草叶上的露珠是饮水机。','Dew on grass blades is our water fountain.'],
  ['危险','wēi xiǎn','danger','有时候很危险。','Sometimes it is dangerous.'],
  ['毛茸茸','máo róng róng','fluffy','毛茸茸的小狗。','A fluffy puppy.']
]);

// Unit 5
code = enrichLesson(code, '寓言二则', [
  ['亡羊补牢','wáng yáng bǔ láo','mend the fold after losing sheep','亡羊补牢，为时不晚。','It is not too late to mend the fold.'],
  ['窟窿','kū long','hole','羊圈破了一个窟窿。','There is a hole in the sheep pen.'],
  ['街坊','jiē fang','neighbor','街坊劝他补上。','Neighbors advised him to fix it.'],
  ['揠苗助长','yà miáo zhù zhǎng','pull seedlings to help them grow','揠苗助长是寓言故事。','Pulling seedlings is a fable.'],
  ['筋疲力尽','jīn pí lì jìn','exhausted','他累得筋疲力尽。','He was totally exhausted.']
]);

code = enrichLesson(code, '画杨桃', [
  ['杨桃','yáng táo','star fruit','我画的杨桃像五角星。','My star fruit looks like a five-pointed star.'],
  ['嘲笑','cháo xiào','laugh at','同学们嘲笑我。','Classmates laughed at me.'],
  ['角度','jiǎo dù','angle','从不同角度看到不同形状。','Different angles show different shapes.'],
  ['叮嘱','dīng zhǔ','remind carefully','爸爸叮嘱我看到什么画什么。','Dad told me to draw what I see.'],
  ['老实','lǎo shi','honest','要做老实的人。','Be an honest person.']
]);

code = enrichLesson(code, '小马过河', [
  ['小马','xiǎo mǎ','little horse','小马要过河。','The little horse needs to cross the river.'],
  ['磨坊','mò fáng','mill','妈妈让小马去磨坊。','Mom sent the little horse to the mill.'],
  ['深浅','shēn qiǎn','depth','河水是深还是浅？','Is the river deep or shallow?'],
  ['尝试','cháng shì','try','你自己去试一试。','Try it yourself.'],
  ['动脑筋','dòng nǎo jīn','think hard','做事要自己动脑筋。','Think for yourself when doing things.']
]);

// Unit 6
code = enrichLesson(code, '雷雨', [
  ['雷雨','léi yǔ','thunderstorm','满天乌云，黑沉沉。','Dark clouds fill the sky.'],
  ['闪电','shǎn diàn','lightning','一道闪电划过天空。','A bolt of lightning streaks across the sky.'],
  ['蜘蛛','zhī zhū','spider','蜘蛛从网上垂下来。','The spider hangs down from its web.'],
  ['彩虹','cǎi hóng','rainbow','雨后出现一道彩虹。','A rainbow appears after the rain.'],
  ['蝉','chán','cicada','蝉叫了。','The cicadas sing.']
]);

code = enrichLesson(code, '要是你在野外迷了路', [
  ['指南针','zhǐ nán zhēn','compass','大自然有很多指南针。','Nature has many compasses.'],
  ['太阳','tài yáng','sun','中午太阳在南边。','The sun is in the south at noon.'],
  ['北极星','běi jí xīng','North Star','北极星指向北方。','The North Star points north.'],
  ['树影','shù yǐng','tree shadow','树影能辨别方向。','Tree shadows help identify direction.'],
  ['积雪','jī xuě','snow cover','积雪化得快的是南面。','Snow melts faster on the south side.']
]);

code = enrichLesson(code, '太空生活趣事多', [
  ['太空','tài kōng','space; outer space','太空生活很有趣。','Life in space is interesting.'],
  ['失重','shī zhòng','weightlessness','在太空中失重。','Weightlessness in space.'],
  ['飘浮','piāo fú','float','人会飘浮起来。','People float up.'],
  ['航天员','háng tiān yuán','astronaut','航天员在太空工作。','Astronauts work in space.'],
  ['地球','dì qiú','Earth','从太空看地球很美。','Earth looks beautiful from space.']
]);

// Unit 7
code = enrichLesson(code, '大象的耳朵', [
  ['大象','dà xiàng','elephant','大象有一对大耳朵。','The elephant has a pair of big ears.'],
  ['耳朵','ěr duo','ear','大象的耳朵耷拉着。','The elephant ears droop down.'],
  ['竖起','shù qǐ','perk up','别的动物耳朵都竖着。','Other animals have their ears perked up.'],
  ['烦恼','fán nǎo','worry','大象有了烦恼。','The elephant had a worry.'],
  ['人家','rén jia','others','人家是人家，我是我。','Others are others, I am me.']
]);

code = enrichByEn(code, 'Spider Opens a Shop', [
  ['蜘蛛','zhī zhū','spider','蜘蛛开了一家店。','The spider opened a shop.'],
  ['口罩','kǒu zhào','mask','帮河马织口罩。','Weaving a mask for the hippo.'],
  ['围巾','wéi jīn','scarf','帮长颈鹿织围巾。','Weaving a scarf for the giraffe.'],
  ['袜子','wà zi','sock','帮蜈蚣织袜子。','Weaving socks for the centipede.'],
  ['招牌','zhāo pái','signboard','蜘蛛换了招牌。','The spider changed the signboard.']
]);

code = enrichLesson(code, '青蛙卖泥塘', [
  ['泥塘','ní táng','mud pond','青蛙住在烂泥塘里。','The frog lived in a muddy pond.'],
  ['吆喝','yāo he','shout (to sell)','青蛙吆喝卖泥塘。','The frog shouted to sell the mud pond.'],
  ['种草','zhǒng cǎo','plant grass','青蛙种了草。','The frog planted grass.'],
  ['栽树','zāi shù','plant trees','又栽了树。','Then planted trees.'],
  ['舒服','shū fu','comfortable','泥塘变得很舒服。','The pond became very comfortable.']
]);

code = enrichLesson(code, '小毛虫', [
  ['毛虫','máo chóng','caterpillar','一只小毛虫趴在叶子上。','A caterpillar lies on a leaf.'],
  ['笨拙','bèn zhuō','clumsy','小毛虫很笨拙。','The caterpillar was very clumsy.'],
  ['尽力','jìn lì','do one best','小毛虫尽力做好每一件事。','The caterpillar did its best at everything.'],
  ['茧','jiǎn','cocoon','小毛虫吐丝结茧。','The caterpillar spun silk to make a cocoon.'],
  ['蝴蝶','hú dié','butterfly','小毛虫变成了蝴蝶！','The caterpillar became a butterfly!']
]);

// Unit 8
code = enrichLesson(code, '祖先的摇篮', [
  ['祖先','zǔ xiān','ancestor','原始森林是祖先的摇篮。','The primeval forest is the cradle of our ancestors.'],
  ['采摘','cǎi zhāi','pick; gather','祖先在森林里采摘。','Ancestors gathered in the forest.'],
  ['浓绿','nóng lǜ','deep green','浓绿的树荫。','Deep green shade of trees.'],
  ['回忆','huí yì','recall','那是多么有趣的回忆。','What interesting memories those are.'],
  ['原始森林','yuán shǐ sēn lín','primeval forest','原始森林多么大。','How vast the primeval forest is.']
]);

code = enrichLesson(code, '当世界年纪还小的时候', [
  ['世界','shì jiè','world','世界年纪还小的时候。','When the world was still young.'],
  ['学习','xué xí','learn','万物都在学习。','All things were learning.'],
  ['太阳','tài yáng','sun','太阳学会了发光。','The sun learned to shine.'],
  ['月亮','yuè liang','moon','月亮学会了变化。','The moon learned to change.'],
  ['秩序','zhì xù','order','世界慢慢有了秩序。','The world slowly found its order.']
]);

code = enrichByEn(code, 'Yi Shoots Down Nine Suns', [
  ['后羿','hòu yì','Hou Yi (myth hero)','后羿要射下九个太阳。','Hou Yi would shoot down nine suns.'],
  ['神箭手','shén jiàn shǒu','divine archer','后羿是神箭手。','Hou Yi was a divine archer.'],
  ['炎热','yán rè','scorching hot','十个太阳让大地炎热。','Ten suns made the earth scorching.'],
  ['枯萎','kū wěi','wither','禾苗都枯萎了。','The crops all withered.'],
  ['勇敢','yǒng gǎn','brave','后羿非常勇敢。','Hou Yi was very brave.']
]);

fs.writeFileSync('textbook_g2s2.js', code, 'utf8');
console.log('Done! G2S2 enriched.');

try {
  const testCode = code.replace('window.TB_G2S2', 'var TB_G2S2');
  require('vm').runInNewContext(testCode, {window: {}, console: console});
  console.log('Validation: syntax OK');
  console.log('vocabWords count:', (code.match(/vocabWords:/g) || []).length);
} catch (e) {
  console.log('Validation FAILED:', e.message);
}
