/**
 * Enrich textbook_g1s1.js with vocabWords and difficulty
 * Run: node build/enrich_g1s1.js
 */
const fs = require('fs');
let code = fs.readFileSync('textbook_g1s1.js', 'utf8');

// Helper: insert text after a unique match
function insertAfter(src, marker, insertion) {
  const idx = src.indexOf(marker);
  if (idx === -1) { console.log('NOT FOUND:', marker.slice(0, 60)); return src; }
  return src.slice(0, idx + marker.length) + insertion + src.slice(idx + marker.length);
}

// Helper: insert difficulty and vocabWords for a lesson
function enrichLesson(src, titleStr, diff, vocabArr) {
  // Add difficulty after the title line
  if (diff && !src.includes('difficulty:') || true) {
    const titleMarker = 'title:"' + titleStr + '"';
    // Find the full line with titleEn
    const idx = src.indexOf(titleMarker);
    if (idx === -1) { console.log('Title not found:', titleStr); return src; }

    // Find the "text:" or "text: " line after the title (to insert difficulty before it)
    const afterTitle = src.slice(idx);
    const textMatch = afterTitle.match(/\n(\s+)text:\s*\[/);
    if (!textMatch) { console.log('text: not found after', titleStr); return src; }
    const textPos = idx + afterTitle.indexOf(textMatch[0]);

    // Check if difficulty already exists between title and text
    const between = src.slice(idx, textPos);
    if (diff && !between.includes('difficulty:')) {
      const indent = textMatch[1];
      src = src.slice(0, textPos) + '\n' + indent + 'difficulty: ' + diff + ',' + src.slice(textPos);
    }

    // Add vocabWords before exercises
    if (vocabArr && vocabArr.length) {
      const newIdx = src.indexOf(titleMarker); // re-find after insert
      const afterNew = src.slice(newIdx);
      const exMatch = afterNew.match(/\n(\s+)exercises:\s*\[/);
      if (!exMatch) { console.log('exercises: not found after', titleStr); return src; }
      const exPos = newIdx + afterNew.indexOf(exMatch[0]);

      // Check if vocabWords already there
      const betweenTE = src.slice(newIdx, exPos);
      if (!betweenTE.includes('vocabWords:')) {
        const indent = exMatch[1];
        let vw = '\n' + indent + 'vocabWords: [\n';
        vocabArr.forEach((v, i) => {
          vw += indent + '  {word:\'' + v.word + '\',pinyin:\'' + v.pinyin + '\',en:\'' + v.en.replace(/'/g, "\\'") + '\',sentence:\'' + v.sentence.replace(/'/g, "\\'") + '\',sentenceEn:\'' + v.sentenceEn.replace(/'/g, "\\'") + '\'}';
          vw += (i < vocabArr.length - 1 ? ',' : '') + '\n';
        });
        vw += indent + '],';
        src = src.slice(0, exPos) + vw + src.slice(exPos);
      }
    }
  }
  return src;
}

// ─── Unit 4: 课文（一）───
code = enrichLesson(code, '秋天', 1, [
  {word:'秋天',pinyin:'qiū tiān',en:'autumn',sentence:'秋天来了！',sentenceEn:'Autumn has come!'},
  {word:'树叶',pinyin:'shù yè',en:'leaf',sentence:'树叶黄了。',sentenceEn:'The leaves turned yellow.'},
  {word:'天气',pinyin:'tiān qì',en:'weather',sentence:'天气凉了。',sentenceEn:'The weather is cool.'},
  {word:'一片片',pinyin:'yī piàn piàn',en:'piece by piece',sentence:'树叶一片片落下来。',sentenceEn:'Leaves fall one by one.'},
  {word:'大雁',pinyin:'dà yàn',en:'wild goose',sentence:'一群大雁往南飞。',sentenceEn:'A flock of geese fly south.'},
  {word:'一会儿',pinyin:'yī huìr',en:'a moment',sentence:'一会儿排成"人"字。',sentenceEn:'Now forming a "人" shape.'}
]);

code = enrichLesson(code, '小小的船', 1, [
  {word:'弯弯',pinyin:'wān wān',en:'curved',sentence:'弯弯的月儿小小的船。',sentenceEn:'The curved moon is like a little boat.'},
  {word:'月儿',pinyin:'yuèr',en:'moon (affectionate)',sentence:'月儿弯弯像小船。',sentenceEn:'The moon is curved like a little boat.'},
  {word:'星星',pinyin:'xīng xing',en:'star',sentence:'只看见闪闪的星星蓝蓝的天。',sentenceEn:'I see only twinkling stars and blue sky.'},
  {word:'蓝蓝',pinyin:'lán lán',en:'very blue',sentence:'蓝蓝的天。',sentenceEn:'The blue, blue sky.'},
  {word:'闪闪',pinyin:'shǎn shǎn',en:'twinkling',sentence:'闪闪的星星。',sentenceEn:'Twinkling stars.'}
]);

code = enrichLesson(code, '江南', 2, [
  {word:'江南',pinyin:'jiāng nán',en:'south of Yangtze',sentence:'江南可采莲。',sentenceEn:'In Jiangnan one can pick lotus.'},
  {word:'莲叶',pinyin:'lián yè',en:'lotus leaf',sentence:'莲叶何田田。',sentenceEn:'How lush the lotus leaves are.'},
  {word:'鱼',pinyin:'yú',en:'fish',sentence:'鱼戏莲叶间。',sentenceEn:'Fish play among the lotus.'},
  {word:'东西南北',pinyin:'dōng xī nán běi',en:'east west south north',sentence:'鱼戏莲叶东，鱼戏莲叶西。',sentenceEn:'Fish play east, fish play west.'}
]);

code = enrichLesson(code, '四季', 1, [
  {word:'春天',pinyin:'chūn tiān',en:'spring',sentence:'草芽对小鸟说："我是春天。"',sentenceEn:'The sprout says to birds: "I am spring."'},
  {word:'夏天',pinyin:'xià tiān',en:'summer',sentence:'荷叶对青蛙说："我是夏天。"',sentenceEn:'The lotus leaf says: "I am summer."'},
  {word:'秋天',pinyin:'qiū tiān',en:'autumn',sentence:'谷穗鞠着躬说："我是秋天。"',sentenceEn:'Grain bows: "I am autumn."'},
  {word:'冬天',pinyin:'dōng tiān',en:'winter',sentence:'雪人说："我就是冬天。"',sentenceEn:'The snowman says: "I am winter."'},
  {word:'草芽',pinyin:'cǎo yá',en:'grass sprout',sentence:'草芽尖尖。',sentenceEn:'Sharp grass sprouts.'},
  {word:'荷叶',pinyin:'hé yè',en:'lotus leaf',sentence:'荷叶圆圆。',sentenceEn:'Round lotus leaves.'},
  {word:'谷穗',pinyin:'gǔ suì',en:'grain ear',sentence:'谷穗弯弯。',sentenceEn:'Bending grain ears.'},
  {word:'雪人',pinyin:'xuě rén',en:'snowman',sentence:'雪人大肚子一挺。',sentenceEn:'The snowman pushes out his belly.'}
]);

// ─── Unit 5: 识字（二）───
code = enrichLesson(code, '画', 2, [
  {word:'远',pinyin:'yuǎn',en:'far',sentence:'远看山有色。',sentenceEn:'From afar, mountains have color.'},
  {word:'近',pinyin:'jìn',en:'near',sentence:'近听水无声。',sentenceEn:'Up close, water has no sound.'},
  {word:'有',pinyin:'yǒu',en:'have',sentence:'远看山有色。',sentenceEn:'From afar, mountains have color.'},
  {word:'无',pinyin:'wú',en:'without',sentence:'近听水无声。',sentenceEn:'Up close, water has no sound.'},
  {word:'来',pinyin:'lái',en:'come',sentence:'人来鸟不惊。',sentenceEn:'People come but birds are not startled.'},
  {word:'去',pinyin:'qù',en:'go',sentence:'春去花还在。',sentenceEn:'Spring goes but flowers remain.'}
]);

code = enrichLesson(code, '大小多少', 1, [
  {word:'大',pinyin:'dà',en:'big',sentence:'黄牛大。',sentenceEn:'The ox is big.'},
  {word:'小',pinyin:'xiǎo',en:'small',sentence:'花猫小。',sentenceEn:'The kitten is small.'},
  {word:'多',pinyin:'duō',en:'many',sentence:'鸭子多。',sentenceEn:'Many ducks.'},
  {word:'少',pinyin:'shǎo',en:'few',sentence:'小鸟少。',sentenceEn:'Few birds.'},
  {word:'黄牛',pinyin:'huáng niú',en:'ox',sentence:'一头黄牛一只猫。',sentenceEn:'One ox, one cat.'},
  {word:'苹果',pinyin:'píng guǒ',en:'apple',sentence:'一个苹果一颗枣。',sentenceEn:'One apple, one date.'}
]);

code = enrichLesson(code, '小书包', 1, [
  {word:'书包',pinyin:'shū bāo',en:'school bag',sentence:'我的小书包。',sentenceEn:'My little school bag.'},
  {word:'课本',pinyin:'kè běn',en:'textbook',sentence:'书包里有课本。',sentenceEn:'Textbooks in the bag.'},
  {word:'铅笔',pinyin:'qiān bǐ',en:'pencil',sentence:'铅笔是好朋友。',sentenceEn:'The pencil is a friend.'},
  {word:'尺子',pinyin:'chǐ zi',en:'ruler',sentence:'尺子画直线。',sentenceEn:'Ruler draws straight lines.'},
  {word:'橡皮',pinyin:'xiàng pí',en:'eraser',sentence:'橡皮擦错字。',sentenceEn:'Eraser removes mistakes.'}
]);

code = enrichLesson(code, '日月明', 2, [
  {word:'明',pinyin:'míng',en:'bright (日+月)',sentence:'日月明。',sentenceEn:'Sun+moon=bright.'},
  {word:'尖',pinyin:'jiān',en:'sharp (小+大)',sentence:'小大尖。',sentenceEn:'Small+big=sharp.'},
  {word:'尘',pinyin:'chén',en:'dust (小+土)',sentence:'小土尘。',sentenceEn:'Small+earth=dust.'},
  {word:'从',pinyin:'cóng',en:'follow (人+人)',sentence:'二人从。',sentenceEn:'Two people=follow.'},
  {word:'众',pinyin:'zhòng',en:'crowd (人×3)',sentence:'三人众。',sentenceEn:'Three people=crowd.'},
  {word:'力',pinyin:'lì',en:'strength',sentence:'众人一条心，黄土变成金。',sentenceEn:'United hearts turn soil to gold.'}
]);

code = enrichLesson(code, '升国旗', 1, [
  {word:'国旗',pinyin:'guó qí',en:'national flag',sentence:'五星红旗是我们的国旗。',sentenceEn:'The five-star red flag is our national flag.'},
  {word:'升旗',pinyin:'shēng qí',en:'raise the flag',sentence:'国旗国旗真美丽。',sentenceEn:'The flag is truly beautiful.'},
  {word:'中国',pinyin:'zhōng guó',en:'China',sentence:'我是中国人。',sentenceEn:'I am Chinese.'},
  {word:'立正',pinyin:'lì zhèng',en:'stand at attention',sentence:'我们立正。',sentenceEn:'We stand at attention.'},
  {word:'敬礼',pinyin:'jìng lǐ',en:'salute',sentence:'向国旗敬礼。',sentenceEn:'Salute the flag.'}
]);

// ─── Unit 6: 课文（二）───
code = enrichLesson(code, '影子', 1, [
  {word:'影子',pinyin:'yǐng zi',en:'shadow',sentence:'影子在前，影子在后。',sentenceEn:'Shadow in front, shadow behind.'},
  {word:'前',pinyin:'qián',en:'front',sentence:'影子在前。',sentenceEn:'Shadow in front.'},
  {word:'后',pinyin:'hòu',en:'behind',sentence:'影子在后。',sentenceEn:'Shadow behind.'},
  {word:'左',pinyin:'zuǒ',en:'left',sentence:'影子在左。',sentenceEn:'Shadow on left.'},
  {word:'右',pinyin:'yòu',en:'right',sentence:'影子在右。',sentenceEn:'Shadow on right.'},
  {word:'好朋友',pinyin:'hǎo péng you',en:'good friend',sentence:'影子是我的好朋友。',sentenceEn:'Shadow is my good friend.'}
]);

code = enrichLesson(code, '比尾巴', 1, [
  {word:'尾巴',pinyin:'wěi ba',en:'tail',sentence:'谁的尾巴长？',sentenceEn:'Whose tail is long?'},
  {word:'长',pinyin:'cháng',en:'long',sentence:'猴子的尾巴长。',sentenceEn:'The monkey has a long tail.'},
  {word:'短',pinyin:'duǎn',en:'short',sentence:'兔子的尾巴短。',sentenceEn:'The rabbit has a short tail.'},
  {word:'猴子',pinyin:'hóu zi',en:'monkey',sentence:'猴子的尾巴长。',sentenceEn:'The monkey has a long tail.'},
  {word:'兔子',pinyin:'tù zi',en:'rabbit',sentence:'兔子的尾巴短。',sentenceEn:'The rabbit has a short tail.'},
  {word:'松鼠',pinyin:'sōng shǔ',en:'squirrel',sentence:'松鼠的尾巴好像一把伞。',sentenceEn:'The squirrel has a tail like an umbrella.'},
  {word:'孔雀',pinyin:'kǒng què',en:'peacock',sentence:'孔雀的尾巴最好看。',sentenceEn:'The peacock has the prettiest tail.'}
]);

code = enrichLesson(code, '青蛙写诗', 2, [
  {word:'青蛙',pinyin:'qīng wā',en:'frog',sentence:'青蛙说："我要写诗。"',sentenceEn:'The frog says: "I want to write a poem."'},
  {word:'写诗',pinyin:'xiě shī',en:'write poetry',sentence:'青蛙写诗了。',sentenceEn:'The frog wrote a poem.'},
  {word:'蝌蚪',pinyin:'kē dǒu',en:'tadpole',sentence:'小蝌蚪当逗号。',sentenceEn:'Tadpoles become commas.'},
  {word:'逗号',pinyin:'dòu hào',en:'comma',sentence:'小蝌蚪说："我来当逗号。"',sentenceEn:'The tadpole says: "I will be a comma."'},
  {word:'句号',pinyin:'jù hào',en:'period',sentence:'水泡泡说："我来当句号。"',sentenceEn:'Bubbles say: "I will be a period."'}
]);

code = enrichLesson(code, '雨点儿', 2, [
  {word:'雨点儿',pinyin:'yǔ diǎnr',en:'raindrop',sentence:'数不清的雨点儿。',sentenceEn:'Countless raindrops.'},
  {word:'数不清',pinyin:'shǔ bu qīng',en:'countless',sentence:'数不清的雨点儿从云彩里飘落下来。',sentenceEn:'Countless raindrops fall from clouds.'},
  {word:'云彩',pinyin:'yún cai',en:'cloud',sentence:'从云彩里飘落下来。',sentenceEn:'Drifting down from the clouds.'},
  {word:'飘落',pinyin:'piāo luò',en:'drift down',sentence:'雨点儿飘落下来。',sentenceEn:'Raindrops drift down.'}
]);

// ─── Unit 7: 课文（三）───
code = enrichLesson(code, '明天要远足', 1, [
  {word:'远足',pinyin:'yuǎn zú',en:'field trip',sentence:'明天要远足！',sentenceEn:'Field trip tomorrow!'},
  {word:'明天',pinyin:'míng tiān',en:'tomorrow',sentence:'明天要远足。',sentenceEn:'Tomorrow is the field trip.'},
  {word:'睡不着',pinyin:'shuì bu zháo',en:'cannot sleep',sentence:'翻过来，翻过去，睡不着。',sentenceEn:'Toss and turn, cannot sleep.'},
  {word:'大海',pinyin:'dà hǎi',en:'ocean',sentence:'那地方的海真的很蓝吗？',sentenceEn:'Is the sea there really blue?'},
  {word:'老师',pinyin:'lǎo shī',en:'teacher',sentence:'老师说海是蓝色的。',sentenceEn:'Teacher says the sea is blue.'}
]);

code = enrichLesson(code, '大还是小', 1, [
  {word:'觉得',pinyin:'jué de',en:'feel; think',sentence:'我觉得自己很大。',sentenceEn:'I feel I am very big.'},
  {word:'有时候',pinyin:'yǒu shí hou',en:'sometimes',sentence:'有时候觉得自己很小。',sentenceEn:'Sometimes I feel small.'},
  {word:'穿衣服',pinyin:'chuān yī fu',en:'get dressed',sentence:'自己穿衣服的时候。',sentenceEn:'When I dress myself.'},
  {word:'快点儿',pinyin:'kuài diǎnr',en:'hurry up',sentence:'我盼着快点儿长大。',sentenceEn:'I wish I could grow up fast.'}
]);

code = enrichLesson(code, '项链', 2, [
  {word:'项链',pinyin:'xiàng liàn',en:'necklace',sentence:'大海给沙滩送来了项链。',sentenceEn:'The sea brings the beach a necklace.'},
  {word:'沙滩',pinyin:'shā tān',en:'beach',sentence:'金色的沙滩。',sentenceEn:'The golden beach.'},
  {word:'浪花',pinyin:'làng huā',en:'wave',sentence:'浪花哗哗地笑着。',sentenceEn:'Waves laugh with a splash.'},
  {word:'贝壳',pinyin:'bèi ké',en:'seashell',sentence:'小娃娃捡贝壳。',sentenceEn:'The child picks up seashells.'},
  {word:'脚印',pinyin:'jiǎo yìn',en:'footprint',sentence:'沙滩上的小小的脚印。',sentenceEn:'Little footprints on the beach.'}
]);

// ─── Unit 8: 课文（四）───
code = enrichLesson(code, '雪地里的小画家', 1, [
  {word:'下雪',pinyin:'xià xuě',en:'to snow',sentence:'下雪啦！',sentenceEn:'It is snowing!'},
  {word:'画家',pinyin:'huà jiā',en:'artist',sentence:'一群小画家。',sentenceEn:'A group of little artists.'},
  {word:'竹叶',pinyin:'zhú yè',en:'bamboo leaf',sentence:'小鸡画竹叶。',sentenceEn:'Chick draws bamboo leaves.'},
  {word:'梅花',pinyin:'méi huā',en:'plum blossom',sentence:'小狗画梅花。',sentenceEn:'Puppy draws plum blossoms.'},
  {word:'枫叶',pinyin:'fēng yè',en:'maple leaf',sentence:'小鸭画枫叶。',sentenceEn:'Duckling draws maple leaves.'},
  {word:'月牙',pinyin:'yuè yá',en:'crescent',sentence:'小马画月牙。',sentenceEn:'Pony draws crescents.'}
]);

code = enrichLesson(code, '乌鸦喝水', 2, [
  {word:'乌鸦',pinyin:'wū yā',en:'crow',sentence:'一只乌鸦口渴了。',sentenceEn:'A crow was thirsty.'},
  {word:'口渴',pinyin:'kǒu kě',en:'thirsty',sentence:'乌鸦口渴了。',sentenceEn:'The crow was thirsty.'},
  {word:'瓶子',pinyin:'píng zi',en:'bottle',sentence:'瓶子里有水。',sentenceEn:'There is water in the bottle.'},
  {word:'办法',pinyin:'bàn fǎ',en:'method',sentence:'乌鸦想出了办法。',sentenceEn:'The crow thought of a way.'},
  {word:'石子',pinyin:'shí zi',en:'pebble',sentence:'把小石子放进瓶子里。',sentenceEn:'Put pebbles into the bottle.'},
  {word:'渐渐',pinyin:'jiàn jiàn',en:'gradually',sentence:'水渐渐升高了。',sentenceEn:'Water gradually rose.'}
]);

code = enrichLesson(code, '小蜗牛', 2, [
  {word:'蜗牛',pinyin:'wō niú',en:'snail',sentence:'小蜗牛爬呀爬。',sentenceEn:'The snail crawled and crawled.'},
  {word:'妈妈',pinyin:'mā ma',en:'mom',sentence:'蜗牛妈妈说。',sentenceEn:'Mother snail said.'},
  {word:'草莓',pinyin:'cǎo méi',en:'strawberry',sentence:'去摘草莓。',sentenceEn:'Go pick strawberries.'},
  {word:'已经',pinyin:'yǐ jīng',en:'already',sentence:'已经是秋天了。',sentenceEn:'It is already autumn.'}
]);

fs.writeFileSync('textbook_g1s1.js', code, 'utf8');
console.log('Done! G1S1 enriched.');

// Validate
try {
  eval(code);
  console.log('Validation: OK');
  console.log('Units:', TB_G1S1.units.length);
  let vocabCount = 0;
  TB_G1S1.units.forEach(u => {
    if (u.lessons) u.lessons.forEach(l => {
      if (l.vocabWords) vocabCount += l.vocabWords.length;
    });
  });
  console.log('Total vocabWords:', vocabCount);
} catch (e) {
  console.log('Validation FAILED:', e.message);
}
