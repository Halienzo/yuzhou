/**
 * Enrich textbook data files with vocabWords, difficulty ratings
 * Run: node build/enrich_textbook.js
 */
const fs = require('fs');

// ─── G1S1 enrichment data ───
const G1S1_ENRICHMENT = {
  // Unit 1: 识字（一）
  '1-2': { // 金木水火土
    vocabWords: [
      {word:'一',pinyin:'yī',en:'one',sentence:'一二三四五。',sentenceEn:'One two three four five.'},
      {word:'二',pinyin:'èr',en:'two',sentence:'二月开学了。',sentenceEn:'School starts in February.'},
      {word:'三',pinyin:'sān',en:'three',sentence:'三只小鸟飞走了。',sentenceEn:'Three little birds flew away.'},
      {word:'四',pinyin:'sì',en:'four',sentence:'我有四本书。',sentenceEn:'I have four books.'},
      {word:'五',pinyin:'wǔ',en:'five',sentence:'五个小朋友一起玩。',sentenceEn:'Five children play together.'},
      {word:'上',pinyin:'shàng',en:'up; above; on',sentence:'小鸟在天上飞。',sentenceEn:'Birds fly in the sky.'},
      {word:'下',pinyin:'xià',en:'down; below; under',sentence:'树下有一只猫。',sentenceEn:'There is a cat under the tree.'}
    ]
  },
  '1-3': { // 口耳目
    vocabWords: [
      {word:'口',pinyin:'kǒu',en:'mouth',sentence:'口渴了喝水。',sentenceEn:'Drink water when thirsty.'},
      {word:'耳',pinyin:'ěr',en:'ear',sentence:'耳朵听声音。',sentenceEn:'Ears listen to sounds.'},
      {word:'目',pinyin:'mù',en:'eye',sentence:'目不转睛地看。',sentenceEn:'Watch without blinking.'},
      {word:'手',pinyin:'shǒu',en:'hand',sentence:'我用手写字。',sentenceEn:'I write with my hand.'},
      {word:'足',pinyin:'zú',en:'foot',sentence:'足球是圆的。',sentenceEn:'A football is round.'},
      {word:'站',pinyin:'zhàn',en:'stand',sentence:'站如松。',sentenceEn:'Stand like a pine tree.'},
      {word:'坐',pinyin:'zuò',en:'sit',sentence:'坐如钟。',sentenceEn:'Sit like a bell.'}
    ]
  },
  '1-4': { // 日月水火
    vocabWords: [
      {word:'日',pinyin:'rì',en:'sun; day',sentence:'日出东方。',sentenceEn:'The sun rises in the east.'},
      {word:'月',pinyin:'yuè',en:'moon; month',sentence:'月亮弯弯的。',sentenceEn:'The moon is curved.'},
      {word:'水',pinyin:'shuǐ',en:'water',sentence:'小河的水很清。',sentenceEn:'The river water is very clear.'},
      {word:'火',pinyin:'huǒ',en:'fire',sentence:'火红火红的太阳。',sentenceEn:'The fiery red sun.'},
      {word:'山',pinyin:'shān',en:'mountain',sentence:'远处有一座山。',sentenceEn:'There is a mountain in the distance.'},
      {word:'石',pinyin:'shí',en:'stone; rock',sentence:'石头又大又硬。',sentenceEn:'The stone is big and hard.'},
      {word:'田',pinyin:'tián',en:'field; farmland',sentence:'农民在田里干活。',sentenceEn:'Farmers work in the field.'},
      {word:'禾',pinyin:'hé',en:'grain; crop',sentence:'禾苗长高了。',sentenceEn:'The seedlings have grown tall.'}
    ]
  },
  '1-5': { // 对韵歌
    vocabWords: [
      {word:'云',pinyin:'yún',en:'cloud',sentence:'白云在天上飘。',sentenceEn:'White clouds float in the sky.'},
      {word:'雨',pinyin:'yǔ',en:'rain',sentence:'下雨了，打伞吧。',sentenceEn:'It is raining, take an umbrella.'},
      {word:'风',pinyin:'fēng',en:'wind',sentence:'风吹树叶沙沙响。',sentenceEn:'The wind makes leaves rustle.'},
      {word:'花',pinyin:'huā',en:'flower',sentence:'公园里的花开了。',sentenceEn:'The flowers in the park bloomed.'},
      {word:'鸟',pinyin:'niǎo',en:'bird',sentence:'小鸟在枝头唱歌。',sentenceEn:'Birds sing on the branches.'},
      {word:'虫',pinyin:'chóng',en:'insect; bug',sentence:'草地上有很多虫子。',sentenceEn:'There are many bugs on the grass.'}
    ]
  },
  // Unit 4: 课文（一）
  '4-1': { // 秋天
    difficulty: 1,
    vocabWords: [
      {word:'秋天',pinyin:'qiū tiān',en:'autumn; fall',sentence:'秋天来了！',sentenceEn:'Autumn has come!'},
      {word:'树叶',pinyin:'shù yè',en:'tree leaf',sentence:'树叶黄了。',sentenceEn:'The leaves turned yellow.'},
      {word:'天气',pinyin:'tiān qì',en:'weather',sentence:'天气凉了。',sentenceEn:'The weather is cool.'},
      {word:'一片片',pinyin:'yī piàn piàn',en:'piece by piece',sentence:'树叶一片片落下来。',sentenceEn:'Leaves fall one by one.'},
      {word:'大雁',pinyin:'dà yàn',en:'wild goose',sentence:'一群大雁往南飞。',sentenceEn:'A flock of geese fly south.'},
      {word:'一会儿',pinyin:'yī huìr',en:'a moment; a while',sentence:'一会儿排成"人"字。',sentenceEn:'Now forming a "人" shape.'}
    ]
  },
  '4-2': { // 小小的船
    difficulty: 1,
    vocabWords: [
      {word:'弯弯',pinyin:'wān wān',en:'curved',sentence:'弯弯的月儿小小的船。',sentenceEn:'The curved moon is like a little boat.'},
      {word:'小船',pinyin:'xiǎo chuán',en:'small boat',sentence:'小小的船儿两头尖。',sentenceEn:'The little boat is pointed at both ends.'},
      {word:'月儿',pinyin:'yuèr',en:'moon (affectionate)',sentence:'月儿弯弯像小船。',sentenceEn:'The moon is curved like a little boat.'},
      {word:'星星',pinyin:'xīng xing',en:'star',sentence:'我在小小的船里坐，只看见闪闪的星星。',sentenceEn:'Sitting in my little boat, I see only twinkling stars.'},
      {word:'蓝蓝',pinyin:'lán lán',en:'very blue',sentence:'蓝蓝的天。',sentenceEn:'The blue, blue sky.'},
      {word:'闪闪',pinyin:'shǎn shǎn',en:'twinkling; sparkling',sentence:'闪闪的星星。',sentenceEn:'Twinkling stars.'}
    ]
  },
  '4-3': { // 江南
    difficulty: 2,
    vocabWords: [
      {word:'江南',pinyin:'jiāng nán',en:'south of the river (Yangtze)',sentence:'江南可采莲。',sentenceEn:'In Jiangnan one can pick lotus.'},
      {word:'采莲',pinyin:'cǎi lián',en:'pick lotus seeds',sentence:'莲叶何田田。',sentenceEn:'How lush the lotus leaves are.'},
      {word:'莲叶',pinyin:'lián yè',en:'lotus leaf',sentence:'莲叶何田田。',sentenceEn:'How lush the lotus leaves are.'},
      {word:'东西南北',pinyin:'dōng xī nán běi',en:'east, west, south, north',sentence:'鱼戏莲叶东。',sentenceEn:'Fish play among the lotus leaves, east.'},
      {word:'鱼',pinyin:'yú',en:'fish',sentence:'鱼戏莲叶间。',sentenceEn:'Fish play among the lotus leaves.'}
    ]
  },
  '4-4': { // 四季
    difficulty: 1,
    vocabWords: [
      {word:'春天',pinyin:'chūn tiān',en:'spring',sentence:'草芽尖尖，他对小鸟说："我是春天。"',sentenceEn:'The grass sprout says to the bird: "I am spring."'},
      {word:'夏天',pinyin:'xià tiān',en:'summer',sentence:'荷叶圆圆，他对青蛙说："我是夏天。"',sentenceEn:'The lotus leaf says to the frog: "I am summer."'},
      {word:'秋天',pinyin:'qiū tiān',en:'autumn',sentence:'谷穗弯弯，他鞠着躬说："我是秋天。"',sentenceEn:'The grain ear says with a bow: "I am autumn."'},
      {word:'冬天',pinyin:'dōng tiān',en:'winter',sentence:'雪人大肚子一挺，他顽皮地说："我就是冬天。"',sentenceEn:'The snowman says playfully: "I am winter."'},
      {word:'草芽',pinyin:'cǎo yá',en:'grass sprout',sentence:'草芽尖尖。',sentenceEn:'Sharp little grass sprouts.'},
      {word:'荷叶',pinyin:'hé yè',en:'lotus leaf',sentence:'荷叶圆圆。',sentenceEn:'Round lotus leaves.'},
      {word:'谷穗',pinyin:'gǔ suì',en:'grain ear',sentence:'谷穗弯弯。',sentenceEn:'Bending grain ears.'},
      {word:'雪人',pinyin:'xuě rén',en:'snowman',sentence:'雪人大肚子一挺。',sentenceEn:'The snowman pushes out his big belly.'}
    ]
  },
  // Unit 5: 识字（二）
  '5-6': { // 画
    difficulty: 2,
    vocabWords: [
      {word:'远',pinyin:'yuǎn',en:'far; distant',sentence:'远看山有色。',sentenceEn:'From afar, the mountain has color.'},
      {word:'近',pinyin:'jìn',en:'near; close',sentence:'近听水无声。',sentenceEn:'Up close, the water has no sound.'},
      {word:'有',pinyin:'yǒu',en:'have; there is',sentence:'远看山有色。',sentenceEn:'From afar, the mountain has color.'},
      {word:'无',pinyin:'wú',en:'not have; without',sentence:'近听水无声。',sentenceEn:'Up close, the water has no sound.'},
      {word:'来',pinyin:'lái',en:'come',sentence:'春去花还在。',sentenceEn:'Spring goes but flowers remain.'},
      {word:'去',pinyin:'qù',en:'go',sentence:'人来鸟不惊。',sentenceEn:'People come but birds are not startled.'},
      {word:'色',pinyin:'sè',en:'color',sentence:'远看山有色。',sentenceEn:'From afar, the mountain has color.'},
      {word:'声',pinyin:'shēng',en:'sound; voice',sentence:'近听水无声。',sentenceEn:'Up close, the water has no sound.'}
    ]
  },
  '5-7': { // 大小多少
    difficulty: 1,
    vocabWords: [
      {word:'大',pinyin:'dà',en:'big; large',sentence:'黄牛大。',sentenceEn:'The ox is big.'},
      {word:'小',pinyin:'xiǎo',en:'small; little',sentence:'花猫小。',sentenceEn:'The kitten is small.'},
      {word:'多',pinyin:'duō',en:'many; much',sentence:'鸭子多。',sentenceEn:'There are many ducks.'},
      {word:'少',pinyin:'shǎo',en:'few; little',sentence:'小鸟少。',sentenceEn:'There are few birds.'},
      {word:'黄牛',pinyin:'huáng niú',en:'ox; cattle',sentence:'一个大，一个小，一头黄牛一只猫。',sentenceEn:'One big, one small — one ox, one cat.'},
      {word:'苹果',pinyin:'píng guǒ',en:'apple',sentence:'一边多，一边少，一群鸭子一只鸟。',sentenceEn:'Many on one side, few on the other.'},
      {word:'杏子',pinyin:'xìng zi',en:'apricot',sentence:'一个大，一个小，一个苹果一颗枣。',sentenceEn:'One big, one small — one apple, one date.'}
    ]
  },
  '5-8': { // 小书包
    difficulty: 1,
    vocabWords: [
      {word:'书包',pinyin:'shū bāo',en:'school bag',sentence:'我的小书包。',sentenceEn:'My little school bag.'},
      {word:'课本',pinyin:'kè běn',en:'textbook',sentence:'书包里有课本。',sentenceEn:'There are textbooks in the bag.'},
      {word:'铅笔',pinyin:'qiān bǐ',en:'pencil',sentence:'铅笔是我的好朋友。',sentenceEn:'The pencil is my good friend.'},
      {word:'转笔刀',pinyin:'zhuǎn bǐ dāo',en:'pencil sharpener',sentence:'转笔刀削铅笔。',sentenceEn:'The sharpener sharpens pencils.'},
      {word:'尺子',pinyin:'chǐ zi',en:'ruler',sentence:'尺子可以画直线。',sentenceEn:'A ruler can draw straight lines.'},
      {word:'橡皮',pinyin:'xiàng pí',en:'eraser',sentence:'橡皮擦掉写错的字。',sentenceEn:'The eraser erases wrong characters.'}
    ]
  },
  '5-9': { // 日月明
    difficulty: 2,
    vocabWords: [
      {word:'明',pinyin:'míng',en:'bright (日+月)',sentence:'日月明。',sentenceEn:'Sun and moon make bright.'},
      {word:'尖',pinyin:'jiān',en:'sharp; pointed (小+大)',sentence:'小大尖。',sentenceEn:'Small on big makes pointed.'},
      {word:'尘',pinyin:'chén',en:'dust (小+土)',sentence:'小土尘。',sentenceEn:'Small earth makes dust.'},
      {word:'从',pinyin:'cóng',en:'follow (人+人)',sentence:'人从众。',sentenceEn:'Person following person, then a crowd.'},
      {word:'众',pinyin:'zhòng',en:'crowd; many (人+人+人)',sentence:'三人为众。',sentenceEn:'Three people make a crowd.'},
      {word:'力',pinyin:'lì',en:'strength; power',sentence:'二人从，三人众。',sentenceEn:'Two people follow, three people make a crowd.'}
    ]
  },
  '5-10': { // 升国旗
    difficulty: 1,
    vocabWords: [
      {word:'国旗',pinyin:'guó qí',en:'national flag',sentence:'五星红旗是我们的国旗。',sentenceEn:'The five-star red flag is our national flag.'},
      {word:'升旗',pinyin:'shēng qí',en:'raise the flag',sentence:'五星红旗，我们的国旗。',sentenceEn:'The five-star red flag, our national flag.'},
      {word:'中国',pinyin:'zhōng guó',en:'China',sentence:'我是中国人。',sentenceEn:'I am Chinese.'},
      {word:'立正',pinyin:'lì zhèng',en:'stand at attention',sentence:'升国旗时要立正。',sentenceEn:'Stand at attention when raising the flag.'},
      {word:'敬礼',pinyin:'jìng lǐ',en:'salute',sentence:'我们立正，向国旗敬礼。',sentenceEn:'We stand at attention and salute the flag.'}
    ]
  },
  // Unit 6: 课文（二）
  '6-5': { // 影子
    difficulty: 1,
    vocabWords: [
      {word:'影子',pinyin:'yǐng zi',en:'shadow',sentence:'影子在前，影子在后。',sentenceEn:'Shadow in front, shadow behind.'},
      {word:'前',pinyin:'qián',en:'front; ahead',sentence:'影子在前。',sentenceEn:'The shadow is in front.'},
      {word:'后',pinyin:'hòu',en:'back; behind',sentence:'影子在后。',sentenceEn:'The shadow is behind.'},
      {word:'左',pinyin:'zuǒ',en:'left',sentence:'影子在左。',sentenceEn:'The shadow is on the left.'},
      {word:'右',pinyin:'yòu',en:'right',sentence:'影子在右。',sentenceEn:'The shadow is on the right.'},
      {word:'好朋友',pinyin:'hǎo péng you',en:'good friend',sentence:'影子是我的好朋友。',sentenceEn:'The shadow is my good friend.'}
    ]
  },
  '6-6': { // 比尾巴
    difficulty: 1,
    vocabWords: [
      {word:'尾巴',pinyin:'wěi ba',en:'tail',sentence:'谁的尾巴长？',sentenceEn:'Whose tail is long?'},
      {word:'长',pinyin:'cháng',en:'long',sentence:'猴子的尾巴长。',sentenceEn:'The monkey\\'s tail is long.'},
      {word:'短',pinyin:'duǎn',en:'short',sentence:'兔子的尾巴短。',sentenceEn:'The rabbit\\'s tail is short.'},
      {word:'猴子',pinyin:'hóu zi',en:'monkey',sentence:'猴子的尾巴长。',sentenceEn:'The monkey\\'s tail is long.'},
      {word:'兔子',pinyin:'tù zi',en:'rabbit',sentence:'兔子的尾巴短。',sentenceEn:'The rabbit\\'s tail is short.'},
      {word:'松鼠',pinyin:'sōng shǔ',en:'squirrel',sentence:'松鼠的尾巴好像一把伞。',sentenceEn:'The squirrel\\'s tail is like an umbrella.'},
      {word:'公鸡',pinyin:'gōng jī',en:'rooster',sentence:'公鸡的尾巴弯。',sentenceEn:'The rooster\\'s tail is curved.'},
      {word:'鸭子',pinyin:'yā zi',en:'duck',sentence:'鸭子的尾巴扁。',sentenceEn:'The duck\\'s tail is flat.'},
      {word:'孔雀',pinyin:'kǒng què',en:'peacock',sentence:'孔雀的尾巴最好看。',sentenceEn:'The peacock\\'s tail is the most beautiful.'}
    ]
  },
  '6-7': { // 青蛙写诗
    difficulty: 2,
    vocabWords: [
      {word:'青蛙',pinyin:'qīng wā',en:'frog',sentence:'下雨了，青蛙说："我要写诗。"',sentenceEn:'It\\'s raining. The frog says: "I want to write a poem."'},
      {word:'写诗',pinyin:'xiě shī',en:'write poetry',sentence:'青蛙写诗了。',sentenceEn:'The frog wrote a poem.'},
      {word:'蝌蚪',pinyin:'kē dǒu',en:'tadpole',sentence:'小蝌蚪说："我来当逗号。"',sentenceEn:'The tadpole says: "I\\'ll be a comma."'},
      {word:'水泡泡',pinyin:'shuǐ pào pao',en:'water bubble',sentence:'水泡泡说："我来当句号。"',sentenceEn:'The bubble says: "I\\'ll be a period."'},
      {word:'逗号',pinyin:'dòu hào',en:'comma',sentence:'小蝌蚪当逗号。',sentenceEn:'The tadpole is a comma.'},
      {word:'句号',pinyin:'jù hào',en:'period; full stop',sentence:'水泡泡当句号。',sentenceEn:'The bubble is a period.'}
    ]
  },
  '6-8': { // 雨点儿
    difficulty: 2,
    vocabWords: [
      {word:'雨点儿',pinyin:'yǔ diǎnr',en:'raindrops',sentence:'数不清的雨点儿从云彩里飘落下来。',sentenceEn:'Countless raindrops drift down from the clouds.'},
      {word:'数不清',pinyin:'shǔ bu qīng',en:'countless; too many to count',sentence:'数不清的雨点儿。',sentenceEn:'Countless raindrops.'},
      {word:'云彩',pinyin:'yún cai',en:'cloud',sentence:'雨点儿从云彩里飘落下来。',sentenceEn:'Raindrops drift down from the clouds.'},
      {word:'飘落',pinyin:'piāo luò',en:'float down; drift',sentence:'雨点儿飘落下来。',sentenceEn:'Raindrops drift down.'},
      {word:'长出',pinyin:'zhǎng chū',en:'grow out',sentence:'有花有草的地方，花更红了，草更绿了。',sentenceEn:'Where there are flowers and grass, they become more vibrant.'}
    ]
  },
  // Unit 7: 课文（三）
  '7-9': { // 明天要远足
    difficulty: 1,
    vocabWords: [
      {word:'远足',pinyin:'yuǎn zú',en:'field trip; hike',sentence:'明天要远足！',sentenceEn:'We\\'re going on a field trip tomorrow!'},
      {word:'明天',pinyin:'míng tiān',en:'tomorrow',sentence:'明天要远足。',sentenceEn:'Tomorrow is the field trip.'},
      {word:'睡不着',pinyin:'shuì bu zháo',en:'cannot fall asleep',sentence:'翻过来，翻过去，唉——睡不着。',sentenceEn:'Toss and turn — sigh, can\\'t sleep.'},
      {word:'大海',pinyin:'dà hǎi',en:'ocean; sea',sentence:'那地方的海真的像老师说的那么蓝吗？',sentenceEn:'Is the sea there really as blue as the teacher said?'},
      {word:'老师',pinyin:'lǎo shī',en:'teacher',sentence:'老师说大海是蓝色的。',sentenceEn:'The teacher says the sea is blue.'}
    ]
  },
  '7-10': { // 大还是小
    difficulty: 1,
    vocabWords: [
      {word:'觉得',pinyin:'jué de',en:'feel; think',sentence:'有时候，我觉得自己很大。',sentenceEn:'Sometimes I feel I am very big.'},
      {word:'有时候',pinyin:'yǒu shí hou',en:'sometimes',sentence:'有时候，我觉得自己很小。',sentenceEn:'Sometimes I feel I am very small.'},
      {word:'穿衣服',pinyin:'chuān yī fu',en:'put on clothes',sentence:'我自己穿衣服的时候，我觉得自己很大。',sentenceEn:'When I dress myself, I feel very big.'},
      {word:'系鞋带',pinyin:'jì xié dài',en:'tie shoelaces',sentence:'自己系鞋带的时候，我觉得自己很大。',sentenceEn:'When I tie my own shoelaces, I feel very big.'},
      {word:'快点儿',pinyin:'kuài diǎnr',en:'hurry up',sentence:'我盼着自己快点儿长大。',sentenceEn:'I wish I could grow up faster.'}
    ]
  },
  '7-11': { // 项链
    difficulty: 2,
    vocabWords: [
      {word:'项链',pinyin:'xiàng liàn',en:'necklace',sentence:'大海给沙滩送来了项链。',sentenceEn:'The sea brings the beach a necklace.'},
      {word:'沙滩',pinyin:'shā tān',en:'sandy beach',sentence:'金色的沙滩。',sentenceEn:'The golden sandy beach.'},
      {word:'浪花',pinyin:'làng huā',en:'waves; spray',sentence:'浪花哗哗地笑着。',sentenceEn:'The waves laugh with a splash.'},
      {word:'贝壳',pinyin:'bèi ké',en:'seashell',sentence:'小娃娃捡贝壳。',sentenceEn:'The little child picks up seashells.'},
      {word:'脚印',pinyin:'jiǎo yìn',en:'footprint',sentence:'沙滩上留下了小小的脚印。',sentenceEn:'Little footprints are left on the beach.'}
    ]
  },
  // Unit 8: 课文（四）
  '8-12': { // 雪地里的小画家
    difficulty: 1,
    vocabWords: [
      {word:'下雪',pinyin:'xià xuě',en:'to snow',sentence:'下雪啦，下雪啦！',sentenceEn:'It\\'s snowing, it\\'s snowing!'},
      {word:'画家',pinyin:'huà jiā',en:'painter; artist',sentence:'雪地里来了一群小画家。',sentenceEn:'A group of little artists came to the snow.'},
      {word:'竹叶',pinyin:'zhú yè',en:'bamboo leaf',sentence:'小鸡画竹叶。',sentenceEn:'The chick draws bamboo leaves.'},
      {word:'梅花',pinyin:'méi huā',en:'plum blossom',sentence:'小狗画梅花。',sentenceEn:'The puppy draws plum blossoms.'},
      {word:'枫叶',pinyin:'fēng yè',en:'maple leaf',sentence:'小鸭画枫叶。',sentenceEn:'The duckling draws maple leaves.'},
      {word:'月牙',pinyin:'yuè yá',en:'crescent moon',sentence:'小马画月牙。',sentenceEn:'The pony draws crescents.'},
      {word:'青蛙',pinyin:'qīng wā',en:'frog',sentence:'青蛙为什么没参加？他在洞里睡着啦。',sentenceEn:'Why didn\\'t the frog join? He\\'s sleeping in his cave.'}
    ]
  },
  '8-13': { // 乌鸦喝水
    difficulty: 2,
    vocabWords: [
      {word:'乌鸦',pinyin:'wū yā',en:'crow',sentence:'一只乌鸦口渴了，到处找水喝。',sentenceEn:'A crow was thirsty and looked everywhere for water.'},
      {word:'口渴',pinyin:'kǒu kě',en:'thirsty',sentence:'乌鸦口渴了。',sentenceEn:'The crow was thirsty.'},
      {word:'瓶子',pinyin:'píng zi',en:'bottle',sentence:'乌鸦看见一个瓶子，瓶子里有水。',sentenceEn:'The crow saw a bottle with water in it.'},
      {word:'办法',pinyin:'bàn fǎ',en:'method; way',sentence:'乌鸦想出了一个办法。',sentenceEn:'The crow thought of a way.'},
      {word:'石子',pinyin:'shí zi',en:'pebble',sentence:'乌鸦把小石子放进瓶子里。',sentenceEn:'The crow put pebbles into the bottle.'},
      {word:'渐渐',pinyin:'jiàn jiàn',en:'gradually',sentence:'水渐渐升高了。',sentenceEn:'The water gradually rose.'}
    ]
  },
  '8-14': { // 小蜗牛
    difficulty: 2,
    vocabWords: [
      {word:'蜗牛',pinyin:'wō niú',en:'snail',sentence:'小蜗牛爬呀爬。',sentenceEn:'The little snail crawled and crawled.'},
      {word:'妈妈',pinyin:'mā ma',en:'mom; mother',sentence:'蜗牛妈妈说。',sentenceEn:'Mother snail said.'},
      {word:'草莓',pinyin:'cǎo méi',en:'strawberry',sentence:'蜗牛妈妈说：去摘草莓。',sentenceEn:'Mother snail said: go pick strawberries.'},
      {word:'已经',pinyin:'yǐ jīng',en:'already',sentence:'已经是秋天了。',sentenceEn:'It\\'s already autumn.'}
    ]
  }
};

// ─── Apply enrichment to a textbook file ───
function enrichFile(filename, varName, enrichData) {
  let code = fs.readFileSync(filename, 'utf8');
  // Parse the data
  eval(code);
  const data = eval(varName);

  let modified = false;
  data.units.forEach(u => {
    if (!u.lessons) return;
    u.lessons.forEach(l => {
      const key = u.id + '-' + l.id;
      const enrich = enrichData[key];
      if (!enrich) return;

      // Add difficulty
      if (enrich.difficulty && !l.difficulty) {
        l.difficulty = enrich.difficulty;
        modified = true;
      }
      // Add vocabWords
      if (enrich.vocabWords && !l.vocabWords) {
        l.vocabWords = enrich.vocabWords;
        modified = true;
      }
      // Add grammarPoints
      if (enrich.grammarPoints && !l.grammarPoints) {
        l.grammarPoints = enrich.grammarPoints;
        modified = true;
      }
    });
  });

  if (modified) {
    // Re-serialize — use custom serializer to match existing format
    let out = code.split('\n')[0] + '\n'; // keep first comment line
    // Actually, let's just do targeted insertions instead of full rewrite
    // to preserve exact formatting
    console.log('  Would modify ' + filename + ' — using targeted approach instead');
  }
  return { data, modified };
}

// Since full rewrite would change formatting, let's generate patch instructions instead
function generatePatches(filename, varName, enrichData) {
  let code = fs.readFileSync(filename, 'utf8');
  const lines = code.split('\n');

  // Find each lesson by matching title lines
  eval(code);
  const data = eval(varName);
  let patches = [];

  data.units.forEach(u => {
    if (!u.lessons) return;
    u.lessons.forEach(l => {
      const key = u.id + '-' + l.id;
      const enrich = enrichData[key];
      if (!enrich) return;

      // Find the line with this lesson's title
      const titlePattern = 'title: "' + l.title + '"';
      const titleLine = lines.findIndex(line => line.includes(titlePattern));
      if (titleLine === -1) return;

      // Find the exercises line for this lesson (to insert vocabWords before it)
      let exerciseLine = -1;
      for (let i = titleLine; i < Math.min(titleLine + 30, lines.length); i++) {
        if (lines[i].includes('exercises:') || lines[i].includes('exercises:[')) {
          exerciseLine = i;
          break;
        }
      }

      patches.push({
        key,
        title: l.title,
        titleLine: titleLine + 1,
        exerciseLine: exerciseLine + 1,
        difficulty: enrich.difficulty,
        vocabWords: enrich.vocabWords,
        grammarPoints: enrich.grammarPoints
      });
    });
  });

  return patches;
}

// Generate output showing what needs to be added
const patches = generatePatches('textbook_g1s1.js', 'TB_G1S1', G1S1_ENRICHMENT);
console.log('G1S1 patches needed: ' + patches.length);
patches.forEach(p => {
  console.log('  ' + p.key + ' ' + p.title + ' (line ' + p.titleLine + '): ' +
    (p.difficulty ? 'diff=' + p.difficulty + ' ' : '') +
    (p.vocabWords ? 'vocab=' + p.vocabWords.length : ''));
});
