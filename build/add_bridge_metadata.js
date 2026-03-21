/**
 * Build script: Add metadata fields to bridge_data.js items
 * Run: node build/add_bridge_metadata.js
 *
 * Adds gradeRange, hskRange, teacherTags, studentTags, and teachingPlan
 * to vocab.radicalRoots, grammar.comparisons, and other categories.
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'bridge_data.js');
let src = fs.readFileSync(filePath, 'utf-8');

// Helper: compute gradeRange/hskRange from level
function gradeRange(level) {
  if (level === 1) return '[1,3]';
  if (level === 2) return '[3,6]';
  return '[7,9]';
}
function hskRange(level) {
  if (level === 1) return '[1,2]';
  if (level === 2) return '[3,5]';
  return '[6,9]';
}

// =====================================================================
// 1. vocab.radicalRoots — 40 items: add all 5 fields
// =====================================================================

const radicalMeta = [
  // 1: 氵 water/aqua (level 1)
  {teacherTags:"['偏旁教学','词汇扩展','中英对比']",studentTags:"['偏旁认字','词根对比']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"氵"的字→提问共同点',enActivity:'Show chars with 氵→ask common pattern'},{phase:'对比',time:10,activity:'偏旁"氵"(水)→英文词根aqua/hydro',enActivity:'Compare radical 氵(water) vs root aqua/hydro'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测生词含义',enActivity:'Guess new word meanings from radical/root clues'},{phase:'拓展',time:5,activity:'找出更多含"氵"的字',enActivity:'Find more characters with 氵'},{phase:'作业',time:5,activity:'制作偏旁-词根对照卡片',enActivity:'Create radical-root comparison cards'}]}`},
  // 2: 火/灬 fire/pyro (level 1)
  {teacherTags:"['偏旁教学','形义关联']",studentTags:"['偏旁认字','词根记忆']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"火/灬"的字→讨论火的意象',enActivity:'Show chars with 火/灬→discuss fire imagery'},{phase:'对比',time:10,activity:'偏旁"火/灬"→英文词根pyro/ign',enActivity:'Compare radical 火/灬 vs root pyro/ign'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测含火义的词',enActivity:'Guess fire-related words from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"火"或"灬"的字',enActivity:'Find more characters with 火 or 灬'},{phase:'作业',time:5,activity:'制作火部偏旁-词根对照卡片',enActivity:'Create fire radical-root comparison cards'}]}`},
  // 3: 木 wood/dendro (level 1)
  {teacherTags:"['偏旁教学','自然类词汇']",studentTags:"['偏旁认字','自然词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"木"的字→提问树木相关联想',enActivity:'Show chars with 木→ask about tree associations'},{phase:'对比',time:10,activity:'偏旁"木"→英文词根dendro/arbor',enActivity:'Compare radical 木 vs root dendro/arbor'},{phase:'练习',time:10,activity:'用偏旁和词根推测植物相关词义',enActivity:'Guess plant-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"木"的字',enActivity:'Find more characters with 木'},{phase:'作业',time:5,activity:'制作木部偏旁知识卡',enActivity:'Create wood radical knowledge card'}]}`},
  // 4: 金/钅 metal/ferro (level 2)
  {teacherTags:"['偏旁教学','金属类词汇','进阶对比']",studentTags:"['偏旁认字','金属词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"钅"的字→猜测共同含义',enActivity:'Show chars with 钅→guess common meaning'},{phase:'对比',time:10,activity:'偏旁"金/钅"→英文词根metal/ferro',enActivity:'Compare radical 金/钅 vs root metal/ferro'},{phase:'练习',time:10,activity:'根据偏旁/词根辨别金属相关词',enActivity:'Identify metal-related words via radical/root'},{phase:'拓展',time:5,activity:'找出更多含"钅"的字',enActivity:'Find more characters with 钅'},{phase:'作业',time:5,activity:'整理金属类偏旁-词根对照表',enActivity:'Compile metal radical-root reference table'}]}`},
  // 5: 土 earth/geo (level 1)
  {teacherTags:"['偏旁教学','地理类词汇']",studentTags:"['偏旁认字','地理词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"土"的字→讨论大地意象',enActivity:'Show chars with 土→discuss earth imagery'},{phase:'对比',time:10,activity:'偏旁"土"→英文词根geo/terra',enActivity:'Compare radical 土 vs root geo/terra'},{phase:'练习',time:10,activity:'用偏旁和词根猜测地理相关词义',enActivity:'Guess geography-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"土"的字',enActivity:'Find more characters with 土'},{phase:'作业',time:5,activity:'制作土部偏旁-词根卡片',enActivity:'Create earth radical-root cards'}]}`},
  // 6: 日 sun/sol (level 1)
  {teacherTags:"['偏旁教学','天文类词汇']",studentTags:"['偏旁认字','天文词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"日"的字→讨论太阳相关联想',enActivity:'Show chars with 日→discuss sun associations'},{phase:'对比',time:10,activity:'偏旁"日"→英文词根sol/helio',enActivity:'Compare radical 日 vs root sol/helio'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测太阳相关词义',enActivity:'Guess sun-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"日"的字',enActivity:'Find more characters with 日'},{phase:'作业',time:5,activity:'制作日部偏旁-词根对照卡片',enActivity:'Create sun radical-root comparison cards'}]}`},
  // 7: 月 moon/luna (level 1)
  {teacherTags:"['偏旁教学','天文类词汇','多义偏旁']",studentTags:"['偏旁认字','一旁多义']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"月"的字→发现"月亮"和"肉体"两层含义',enActivity:'Show chars with 月→discover moon vs body meanings'},{phase:'对比',time:10,activity:'偏旁"月"(月/肉)→英文词根luna/lunar',enActivity:'Compare radical 月(moon/flesh) vs root luna/lunar'},{phase:'练习',time:10,activity:'区分月旁字中"月亮义"和"身体义"',enActivity:'Distinguish moon vs body meanings in 月-radical chars'},{phase:'拓展',time:5,activity:'找出更多含"月"的字并分类',enActivity:'Find more 月 characters and categorize them'},{phase:'作业',time:5,activity:'制作月部双义对照卡片',enActivity:'Create dual-meaning moon radical cards'}]}`},
  // 8: 口 mouth/oral (level 1)
  {teacherTags:"['偏旁教学','身体类词汇']",studentTags:"['偏旁认字','身体词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"口"的字→讨论嘴巴相关动作',enActivity:'Show chars with 口→discuss mouth-related actions'},{phase:'对比',time:10,activity:'偏旁"口"→英文词根oral/voc',enActivity:'Compare radical 口 vs root oral/voc'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测口部动作词',enActivity:'Guess mouth-action words from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"口"的字',enActivity:'Find more characters with 口'},{phase:'作业',time:5,activity:'制作口部偏旁-词根对照卡片',enActivity:'Create mouth radical-root comparison cards'}]}`},
  // 9: 心/忄 heart/cord (level 1)
  {teacherTags:"['偏旁教学','情感类词汇']",studentTags:"['偏旁认字','情感词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"心/忄"的字→讨论情感与思维',enActivity:'Show chars with 心/忄→discuss emotions and thought'},{phase:'对比',time:10,activity:'偏旁"心/忄"→英文词根cord/cardio',enActivity:'Compare radical 心/忄 vs root cord/cardio'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测情感词含义',enActivity:'Guess emotion word meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"心"或"忄"的字',enActivity:'Find more characters with 心 or 忄'},{phase:'作业',time:5,activity:'制作心部偏旁-词根对照卡片',enActivity:'Create heart radical-root comparison cards'}]}`},
  // 10: 手/扌 hand/manu (level 1)
  {teacherTags:"['偏旁教学','动作类词汇']",studentTags:"['偏旁认字','动作词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"扌"的字→讨论手部动作',enActivity:'Show chars with 扌→discuss hand actions'},{phase:'对比',time:10,activity:'偏旁"手/扌"→英文词根manu/chiro',enActivity:'Compare radical 手/扌 vs root manu/chiro'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测手部动作词',enActivity:'Guess hand-action words from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"扌"的字',enActivity:'Find more characters with 扌'},{phase:'作业',time:5,activity:'制作手部偏旁-词根对照卡片',enActivity:'Create hand radical-root comparison cards'}]}`},
  // 11: 目 eye/ocul (level 1)
  {teacherTags:"['偏旁教学','感官类词汇']",studentTags:"['偏旁认字','感官词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"目"的字→讨论视觉相关词',enActivity:'Show chars with 目→discuss vision-related words'},{phase:'对比',time:10,activity:'偏旁"目"→英文词根ocul/vis',enActivity:'Compare radical 目 vs root ocul/vis'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测视觉词含义',enActivity:'Guess vision word meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"目"的字',enActivity:'Find more characters with 目'},{phase:'作业',time:5,activity:'制作目部偏旁-词根对照卡片',enActivity:'Create eye radical-root comparison cards'}]}`},
  // 12: 耳 ear/audi (level 2)
  {teacherTags:"['偏旁教学','感官类词汇','进阶对比']",studentTags:"['偏旁认字','听觉词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"耳"的字→讨论听觉相关词',enActivity:'Show chars with 耳→discuss hearing-related words'},{phase:'对比',time:10,activity:'偏旁"耳"→英文词根audi/aur',enActivity:'Compare radical 耳 vs root audi/aur'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测听觉词含义',enActivity:'Guess hearing word meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"耳"的字',enActivity:'Find more characters with 耳'},{phase:'作业',time:5,activity:'制作耳部偏旁-词根对照卡片',enActivity:'Create ear radical-root comparison cards'}]}`},
  // 13: 足/⻊ foot/ped (level 1)
  {teacherTags:"['偏旁教学','身体类词汇']",studentTags:"['偏旁认字','动作词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"足/⻊"的字→讨论脚部动作',enActivity:'Show chars with 足/⻊→discuss foot actions'},{phase:'对比',time:10,activity:'偏旁"足/⻊"→英文词根ped/pod',enActivity:'Compare radical 足/⻊ vs root ped/pod'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测脚部动作词',enActivity:'Guess foot-action words from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"足"或"⻊"的字',enActivity:'Find more characters with 足 or ⻊'},{phase:'作业',time:5,activity:'制作足部偏旁-词根对照卡片',enActivity:'Create foot radical-root comparison cards'}]}`},
  // 14: 言/讠 speech/dict (level 1)
  {teacherTags:"['偏旁教学','语言类词汇']",studentTags:"['偏旁认字','语言词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"讠"的字→讨论说话相关词',enActivity:'Show chars with 讠→discuss speech-related words'},{phase:'对比',time:10,activity:'偏旁"言/讠"→英文词根dict/loqu',enActivity:'Compare radical 言/讠 vs root dict/loqu'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测语言类词义',enActivity:'Guess language word meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"讠"的字',enActivity:'Find more characters with 讠'},{phase:'作业',time:5,activity:'制作言部偏旁-词根对照卡片',enActivity:'Create speech radical-root comparison cards'}]}`},
  // 15: 人/亻 person/anthro (level 1)
  {teacherTags:"['偏旁教学','人类类词汇']",studentTags:"['偏旁认字','人物词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"亻"的字→讨论与人相关的词',enActivity:'Show chars with 亻→discuss person-related words'},{phase:'对比',time:10,activity:'偏旁"人/亻"→英文词根anthro/homo',enActivity:'Compare radical 人/亻 vs root anthro/homo'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测人类相关词义',enActivity:'Guess human-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"亻"的字',enActivity:'Find more characters with 亻'},{phase:'作业',time:5,activity:'制作人部偏旁-词根对照卡片',enActivity:'Create person radical-root comparison cards'}]}`},
  // 16: 女 female/gyn (level 1)
  {teacherTags:"['偏旁教学','性别类词汇']",studentTags:"['偏旁认字','家庭词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"女"的字→讨论女性相关词',enActivity:'Show chars with 女→discuss female-related words'},{phase:'对比',time:10,activity:'偏旁"女"→英文词根gyn/fem',enActivity:'Compare radical 女 vs root gyn/fem'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测女性相关词义',enActivity:'Guess female-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"女"的字',enActivity:'Find more characters with 女'},{phase:'作业',time:5,activity:'制作女部偏旁-词根对照卡片',enActivity:'Create female radical-root comparison cards'}]}`},
  // 17: 子 child/ped (level 1)
  {teacherTags:"['偏旁教学','家庭类词汇']",studentTags:"['偏旁认字','家庭词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"子"的字→讨论孩子相关词',enActivity:'Show chars with 子→discuss child-related words'},{phase:'对比',time:10,activity:'偏旁"子"→英文词根ped(儿科)/infant',enActivity:'Compare radical 子 vs root ped(pediatric)/infant'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测儿童相关词义',enActivity:'Guess child-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"子"的字',enActivity:'Find more characters with 子'},{phase:'作业',time:5,activity:'制作子部偏旁-词根对照卡片',enActivity:'Create child radical-root comparison cards'}]}`},
  // 18: 艹 grass/herb (level 1)
  {teacherTags:"['偏旁教学','植物类词汇']",studentTags:"['偏旁认字','植物词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"艹"的字→讨论植物相关词',enActivity:'Show chars with 艹→discuss plant-related words'},{phase:'对比',time:10,activity:'偏旁"艹"→英文词根herb/botan',enActivity:'Compare radical 艹 vs root herb/botan'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测植物相关词义',enActivity:'Guess plant-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"艹"的字',enActivity:'Find more characters with 艹'},{phase:'作业',time:5,activity:'制作草部偏旁-词根对照卡片',enActivity:'Create grass radical-root comparison cards'}]}`},
  // 19: 虫 insect/entomo (level 2)
  {teacherTags:"['偏旁教学','动物类词汇','进阶对比']",studentTags:"['偏旁认字','动物词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"虫"的字→讨论昆虫相关词',enActivity:'Show chars with 虫→discuss insect-related words'},{phase:'对比',time:10,activity:'偏旁"虫"→英文词根entomo/insect',enActivity:'Compare radical 虫 vs root entomo/insect'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测昆虫相关词义',enActivity:'Guess insect-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"虫"的字',enActivity:'Find more characters with 虫'},{phase:'作业',time:5,activity:'制作虫部偏旁-词根对照卡片',enActivity:'Create insect radical-root comparison cards'}]}`},
  // 20: 鱼 fish/pisc (level 2)
  {teacherTags:"['偏旁教学','动物类词汇']",studentTags:"['偏旁认字','动物词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"鱼"的字→讨论鱼类相关词',enActivity:'Show chars with 鱼→discuss fish-related words'},{phase:'对比',time:10,activity:'偏旁"鱼"→英文词根pisc/ichthy',enActivity:'Compare radical 鱼 vs root pisc/ichthy'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测鱼类相关词义',enActivity:'Guess fish-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"鱼"的字',enActivity:'Find more characters with 鱼'},{phase:'作业',time:5,activity:'制作鱼部偏旁-词根对照卡片',enActivity:'Create fish radical-root comparison cards'}]}`},
  // 21: 鸟 bird/avi (level 2)
  {teacherTags:"['偏旁教学','动物类词汇']",studentTags:"['偏旁认字','动物词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"鸟"的字→讨论鸟类相关词',enActivity:'Show chars with 鸟→discuss bird-related words'},{phase:'对比',time:10,activity:'偏旁"鸟"→英文词根avi/ornith',enActivity:'Compare radical 鸟 vs root avi/ornith'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测鸟类相关词义',enActivity:'Guess bird-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"鸟"的字',enActivity:'Find more characters with 鸟'},{phase:'作业',time:5,activity:'制作鸟部偏旁-词根对照卡片',enActivity:'Create bird radical-root comparison cards'}]}`},
  // 22: 马 horse/equ (level 2)
  {teacherTags:"['偏旁教学','动物类词汇']",studentTags:"['偏旁认字','动物词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"马"的字→讨论马相关词',enActivity:'Show chars with 马→discuss horse-related words'},{phase:'对比',time:10,activity:'偏旁"马"→英文词根equ/hippo',enActivity:'Compare radical 马 vs root equ/hippo'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测马相关词义',enActivity:'Guess horse-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"马"的字',enActivity:'Find more characters with 马'},{phase:'作业',time:5,activity:'制作马部偏旁-词根对照卡片',enActivity:'Create horse radical-root comparison cards'}]}`},
  // 23: 车 vehicle/auto (level 1)
  {teacherTags:"['偏旁教学','交通类词汇']",studentTags:"['偏旁认字','交通词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"车"的字→讨论交通相关词',enActivity:'Show chars with 车→discuss vehicle-related words'},{phase:'对比',time:10,activity:'偏旁"车"→英文词根auto/veh',enActivity:'Compare radical 车 vs root auto/veh'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测交通词义',enActivity:'Guess vehicle-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"车"的字',enActivity:'Find more characters with 车'},{phase:'作业',time:5,activity:'制作车部偏旁-词根对照卡片',enActivity:'Create vehicle radical-root comparison cards'}]}`},
  // 24: 门 door/port (level 1)
  {teacherTags:"['偏旁教学','建筑类词汇']",studentTags:"['偏旁认字','建筑词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"门"的字→讨论门户相关词',enActivity:'Show chars with 门→discuss door-related words'},{phase:'对比',time:10,activity:'偏旁"门"→英文词根port/jan',enActivity:'Compare radical 门 vs root port/jan'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测门户相关词义',enActivity:'Guess door-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"门"的字',enActivity:'Find more characters with 门'},{phase:'作业',time:5,activity:'制作门部偏旁-词根对照卡片',enActivity:'Create door radical-root comparison cards'}]}`},
  // 25: 饣 food/aliment (level 1)
  {teacherTags:"['偏旁教学','饮食类词汇']",studentTags:"['偏旁认字','饮食词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"饣"的字→讨论饮食相关词',enActivity:'Show chars with 饣→discuss food-related words'},{phase:'对比',time:10,activity:'偏旁"饣"→英文词根aliment/gastro',enActivity:'Compare radical 饣 vs root aliment/gastro'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测饮食词义',enActivity:'Guess food-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"饣"的字',enActivity:'Find more characters with 饣'},{phase:'作业',time:5,activity:'制作饣部偏旁-词根对照卡片',enActivity:'Create food radical-root comparison cards'}]}`},
  // 26: 衤 clothing/vest (level 2)
  {teacherTags:"['偏旁教学','服饰类词汇','进阶对比']",studentTags:"['偏旁认字','服饰词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"衤"的字→讨论衣服相关词',enActivity:'Show chars with 衤→discuss clothing-related words'},{phase:'对比',time:10,activity:'偏旁"衤"→英文词根vest/text',enActivity:'Compare radical 衤 vs root vest/textile'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测服饰词义',enActivity:'Guess clothing-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"衤"的字',enActivity:'Find more characters with 衤'},{phase:'作业',time:5,activity:'制作衤部偏旁-词根对照卡片',enActivity:'Create clothing radical-root comparison cards'}]}`},
  // 27: 石 stone/lith (level 2)
  {teacherTags:"['偏旁教学','矿物类词汇']",studentTags:"['偏旁认字','矿物词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"石"的字→讨论石头相关词',enActivity:'Show chars with 石→discuss stone-related words'},{phase:'对比',time:10,activity:'偏旁"石"→英文词根lith/petr',enActivity:'Compare radical 石 vs root lith/petr'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测矿物词义',enActivity:'Guess stone-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"石"的字',enActivity:'Find more characters with 石'},{phase:'作业',time:5,activity:'制作石部偏旁-词根对照卡片',enActivity:'Create stone radical-root comparison cards'}]}`},
  // 28: 田 field/agr (level 2)
  {teacherTags:"['偏旁教学','农业类词汇']",studentTags:"['偏旁认字','农业词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"田"的字→讨论田地相关词',enActivity:'Show chars with 田→discuss field-related words'},{phase:'对比',time:10,activity:'偏旁"田"→英文词根agr/agri',enActivity:'Compare radical 田 vs root agr/agri'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测农业词义',enActivity:'Guess farming-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"田"的字',enActivity:'Find more characters with 田'},{phase:'作业',time:5,activity:'制作田部偏旁-词根对照卡片',enActivity:'Create field radical-root comparison cards'}]}`},
  // 29: 山 mountain/mont (level 1)
  {teacherTags:"['偏旁教学','地理类词汇']",studentTags:"['偏旁认字','地理词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"山"的字→讨论山脉相关词',enActivity:'Show chars with 山→discuss mountain-related words'},{phase:'对比',time:10,activity:'偏旁"山"→英文词根mont/orog',enActivity:'Compare radical 山 vs root mont/orog'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测山地词义',enActivity:'Guess mountain-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"山"的字',enActivity:'Find more characters with 山'},{phase:'作业',time:5,activity:'制作山部偏旁-词根对照卡片',enActivity:'Create mountain radical-root comparison cards'}]}`},
  // 30: 雨 rain/pluv (level 1)
  {teacherTags:"['偏旁教学','天气类词汇']",studentTags:"['偏旁认字','天气词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"雨"的字→讨论天气相关词',enActivity:'Show chars with 雨→discuss weather-related words'},{phase:'对比',time:10,activity:'偏旁"雨"→英文词根pluv/hydro',enActivity:'Compare radical 雨 vs root pluv/hydro'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测天气词义',enActivity:'Guess weather-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"雨"的字',enActivity:'Find more characters with 雨'},{phase:'作业',time:5,activity:'制作雨部偏旁-词根对照卡片',enActivity:'Create rain radical-root comparison cards'}]}`},
  // 31: 风 wind/anem (level 2)
  {teacherTags:"['偏旁教学','天气类词汇']",studentTags:"['偏旁认字','天气词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"风"的字→讨论风相关词',enActivity:'Show chars with 风→discuss wind-related words'},{phase:'对比',time:10,activity:'偏旁"风"→英文词根anem/vent',enActivity:'Compare radical 风 vs root anem/vent'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测风相关词义',enActivity:'Guess wind-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"风"的字',enActivity:'Find more characters with 风'},{phase:'作业',time:5,activity:'制作风部偏旁-词根对照卡片',enActivity:'Create wind radical-root comparison cards'}]}`},
  // 32: 水/氺 water/aqua (level 1)
  {teacherTags:"['偏旁教学','自然类词汇','形体变化']",studentTags:"['偏旁认字','偏旁变形']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"水/氺"的字→对比"氵"与"水"底部形式',enActivity:'Show chars with 水/氺→compare 氵 vs bottom-water form'},{phase:'对比',time:10,activity:'偏旁"水/氺"→英文词根aqua',enActivity:'Compare radical 水/氺 vs root aqua'},{phase:'练习',time:10,activity:'区分"氵"在左和"水/氺"在底的字',enActivity:'Distinguish left-氵 chars from bottom-水 chars'},{phase:'拓展',time:5,activity:'找出更多含"水"底部形式的字',enActivity:'Find more characters with bottom-water radical'},{phase:'作业',time:5,activity:'制作水部变形偏旁对照卡片',enActivity:'Create water-radical variant comparison cards'}]}`},
  // 33: 力 strength/fort (level 2)
  {teacherTags:"['偏旁教学','抽象概念词汇']",studentTags:"['偏旁认字','力量词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"力"的字→讨论力量相关词',enActivity:'Show chars with 力→discuss strength-related words'},{phase:'对比',time:10,activity:'偏旁"力"→英文词根fort/dyn',enActivity:'Compare radical 力 vs root fort/dyn'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测力量词义',enActivity:'Guess strength-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"力"的字',enActivity:'Find more characters with 力'},{phase:'作业',time:5,activity:'制作力部偏旁-词根对照卡片',enActivity:'Create strength radical-root comparison cards'}]}`},
  // 34: 刀/刂 knife/sect (level 2)
  {teacherTags:"['偏旁教学','动作类词汇']",studentTags:"['偏旁认字','切割词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"刂"的字→讨论切割相关词',enActivity:'Show chars with 刂→discuss cutting-related words'},{phase:'对比',time:10,activity:'偏旁"刀/刂"→英文词根sect/cis',enActivity:'Compare radical 刀/刂 vs root sect/cis'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测切割词义',enActivity:'Guess cutting-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"刂"的字',enActivity:'Find more characters with 刂'},{phase:'作业',time:5,activity:'制作刀部偏旁-词根对照卡片',enActivity:'Create knife radical-root comparison cards'}]}`},
  // 35: 竹 bamboo/(no equivalent) (level 2)
  {teacherTags:"['偏旁教学','文化独特性','中文特色']",studentTags:"['偏旁认字','文化特色']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"竹"的字→讨论竹子在中国文化中的地位',enActivity:'Show chars with 竹→discuss bamboo in Chinese culture'},{phase:'对比',time:10,activity:'偏旁"竹"→英文无对应词根（文化独特性）',enActivity:'Radical 竹 has no English root equivalent — cultural uniqueness'},{phase:'练习',time:10,activity:'猜测竹字头的字与竹子的关系',enActivity:'Guess how bamboo-radical chars relate to bamboo'},{phase:'拓展',time:5,activity:'找出更多含"竹"的字',enActivity:'Find more characters with 竹'},{phase:'作业',time:5,activity:'研究竹子在中国文化中的象征意义',enActivity:'Research bamboo symbolism in Chinese culture'}]}`},
  // 36: 贝 shell→value/monet (level 3)
  {teacherTags:"['偏旁教学','文化历史','高阶词汇']",studentTags:"['偏旁认字','文化历史']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"贝"的字→讲述贝壳作为货币的历史',enActivity:'Show chars with 贝→tell history of shells as currency'},{phase:'对比',time:10,activity:'偏旁"贝"(贝壳→价值)→英文词根monet/econ',enActivity:'Compare radical 贝(shell→value) vs root monet/econ'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测钱财相关词义',enActivity:'Guess money-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"贝"的字',enActivity:'Find more characters with 贝'},{phase:'作业',time:5,activity:'研究古代货币与现代汉字的关联',enActivity:'Research the link between ancient currency and modern characters'}]}`},
  // 37: 页 page→head/capit (level 3)
  {teacherTags:"['偏旁教学','字义演变','高阶词汇']",studentTags:"['偏旁认字','字义演变']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"页"的字→揭示"页"原义为"头"',enActivity:'Show chars with 页→reveal original meaning "head"'},{phase:'对比',time:10,activity:'偏旁"页"(头部)→英文词根capit/ceph',enActivity:'Compare radical 页(head) vs root capit/ceph'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测头部相关词义',enActivity:'Guess head-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"页"的字',enActivity:'Find more characters with 页'},{phase:'作业',time:5,activity:'整理"页"部字的头部含义系统',enActivity:'Compile head-meaning system for 页 radical chars'}]}`},
  // 38: 走 walk/ambul (level 2)
  {teacherTags:"['偏旁教学','动作类词汇']",studentTags:"['偏旁认字','移动词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"走"的字→讨论行走移动词',enActivity:'Show chars with 走→discuss walking/movement words'},{phase:'对比',time:10,activity:'偏旁"走"→英文词根ambul/migr',enActivity:'Compare radical 走 vs root ambul/migr'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测移动词义',enActivity:'Guess movement-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"走"的字',enActivity:'Find more characters with 走'},{phase:'作业',time:5,activity:'制作走部偏旁-词根对照卡片',enActivity:'Create walk radical-root comparison cards'}]}`},
  // 39: 礻 ritual/sacr (level 3)
  {teacherTags:"['偏旁教学','文化历史','高阶词汇']",studentTags:"['偏旁认字','文化词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"礻"的字→讨论祭祀文化',enActivity:'Show chars with 礻→discuss ritual culture'},{phase:'对比',time:10,activity:'偏旁"礻"(祭祀)→英文词根sacr/div',enActivity:'Compare radical 礻(ritual) vs root sacr/div'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测祭祀相关词义',enActivity:'Guess ritual-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"礻"的字',enActivity:'Find more characters with 礻'},{phase:'作业',time:5,activity:'研究中国古代祭祀文化与汉字的关联',enActivity:'Research link between ancient rituals and Chinese characters'}]}`},
  // 40: 纟 silk/fil (level 2)
  {teacherTags:"['偏旁教学','纺织类词汇']",studentTags:"['偏旁认字','纺织词汇']",
   plan:`{duration:35,steps:[{phase:'导入',time:5,activity:'展示含"纟"的字→讨论丝线相关词',enActivity:'Show chars with 纟→discuss thread-related words'},{phase:'对比',time:10,activity:'偏旁"纟"(丝)→英文词根fil/text',enActivity:'Compare radical 纟(silk) vs root fil/textile'},{phase:'练习',time:10,activity:'根据偏旁/词根猜测纺织词义',enActivity:'Guess textile-related meanings from radical/root'},{phase:'拓展',time:5,activity:'找出更多含"纟"的字',enActivity:'Find more characters with 纟'},{phase:'作业',time:5,activity:'制作纟部偏旁-词根对照卡片',enActivity:'Create silk radical-root comparison cards'}]}`}
];

// =====================================================================
// 2. grammar.comparisons — 30 items: add all 5 fields
// =====================================================================

const grammarMeta = [
  // 1: word-order (level 1)
  {teacherTags:"['语序教学','中英对比']",studentTags:"['语序规则','造句练习']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比中英语序：我吃苹果 vs I eat apples',enActivity:'Compare CN-EN word order: 我吃苹果 vs I eat apples'},{phase:'讲解',time:15,activity:'系统讲解SVO共性和差异（时间状语位置）',enActivity:'Systematic SVO comparison with time adverb placement'},{phase:'陷阱',time:5,activity:'常见语序错误纠正练习',enActivity:'Common word order mistake correction exercise'},{phase:'练习',time:10,activity:'英译中/中译英语序转换练习',enActivity:'EN→CN / CN→EN word order conversion practice'},{phase:'总结',time:5,activity:'总结中英语序规则差异表',enActivity:'Summarize CN-EN word order rule differences'}]}`},
  // 2: tense (level 2)
  {teacherTags:"['时态教学','语法对比']",studentTags:"['时态学习','了/过/着辨析']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：我昨天去了学校 vs I went to school yesterday',enActivity:'Compare: 我昨天去了学校 vs I went to school yesterday'},{phase:'讲解',time:15,activity:'讲解中文无动词变形，用时间词+助词表时态',enActivity:'Explain Chinese uses time words + particles instead of verb conjugation'},{phase:'陷阱',time:5,activity:'纠正"了=past tense"的常见误解',enActivity:'Correct the common misconception that 了=past tense'},{phase:'练习',time:10,activity:'用了/过/着/在改写英文时态句',enActivity:'Rewrite English tense sentences using 了/过/着/在'},{phase:'总结',time:5,activity:'总结中英时态表达对照表',enActivity:'Summarize CN-EN tense expression comparison table'}]}`},
  // 3: classifier (level 1)
  {teacherTags:"['量词教学','名词分类']",studentTags:"['量词学习','量词搭配']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'展示：一个人、一条鱼、一本书→为什么量词不同？',enActivity:'Show: 一个人, 一条鱼, 一本书→why different classifiers?'},{phase:'讲解',time:15,activity:'系统讲解量词分类和英文冠词对比',enActivity:'Systematic classifier categories vs English articles'},{phase:'陷阱',time:5,activity:'纠正量词搭配错误：一个马→一匹马',enActivity:'Fix classifier errors: 一个马→一匹马'},{phase:'练习',time:10,activity:'根据名词特征选择正确量词',enActivity:'Choose correct classifier based on noun characteristics'},{phase:'总结',time:5,activity:'总结常用量词分类表',enActivity:'Summarize common classifier category chart'}]}`},
  // 4: passive (level 3)
  {teacherTags:"['被动语态','语法对比','高阶教学']",studentTags:"['被字句','语态转换']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：花瓶被猫打碎了 vs The vase was broken by the cat',enActivity:'Compare: 花瓶被猫打碎了 vs The vase was broken by the cat'},{phase:'讲解',time:15,activity:'讲解被字句结构及消极含义倾向',enActivity:'Explain 被-construction and its negative connotation tendency'},{phase:'陷阱',time:5,activity:'纠正被字句在积极场景中的误用',enActivity:'Address misuse of 被 in positive contexts'},{phase:'练习',time:10,activity:'主动句↔被动句中英双向转换',enActivity:'Active↔Passive voice conversion in both CN and EN'},{phase:'总结',time:5,activity:'总结中英被动语态核心差异',enActivity:'Summarize key CN-EN passive voice differences'}]}`},
  // 5: comparative (level 2)
  {teacherTags:"['比较句教学','语法对比']",studentTags:"['比字句','比较表达']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：他比我高 vs He is taller than me',enActivity:'Compare: 他比我高 vs He is taller than me'},{phase:'讲解',time:15,activity:'讲解A比B+形容词结构vs比较级/more结构',enActivity:'Explain A比B+adj vs comparative/more structure'},{phase:'陷阱',time:5,activity:'纠正"他比我更高两厘米"→他比我高两厘米',enActivity:'Fix degree complement placement errors'},{phase:'练习',time:10,activity:'中英比较句互译练习',enActivity:'CN-EN comparative sentence translation practice'},{phase:'总结',time:5,activity:'总结中英比较表达对照表',enActivity:'Summarize CN-EN comparison expression chart'}]}`},
  // 6: negation (level 1)
  {teacherTags:"['否定表达','基础语法']",studentTags:"['不/没区分','否定句']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：不喜欢/没来 vs don\'t like/didn\'t come',enActivity:'Compare: 不喜欢/没来 vs don\'t like/didn\'t come'},{phase:'讲解',time:15,activity:'讲解不(一般否定)和没(完成否定)的区分',enActivity:'Explain 不(general negation) vs 没(completion negation)'},{phase:'陷阱',time:5,activity:'纠正不/没混用错误',enActivity:'Fix 不/没 confusion errors'},{phase:'练习',time:10,activity:'选择不或没完成否定句',enActivity:'Choose 不 or 没 to complete negative sentences'},{phase:'总结',time:5,activity:'总结不/没用法对照表',enActivity:'Summarize 不/没 usage comparison chart'}]}`},
  // 7: question (level 1)
  {teacherTags:"['疑问句教学','语法对比']",studentTags:"['疑问句型','提问方式']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：你好吗？vs How are you?→语序有何不同？',enActivity:'Compare: 你好吗？vs How are you?→word order difference?'},{phase:'讲解',time:15,activity:'讲解吗/疑问词/A不A三种疑问句式',enActivity:'Explain 吗/question word/A不A question patterns'},{phase:'陷阱',time:5,activity:'纠正中文疑问句变语序的错误',enActivity:'Fix errors of changing word order in Chinese questions'},{phase:'练习',time:10,activity:'用三种方式把陈述句变疑问句',enActivity:'Convert statements to questions using three patterns'},{phase:'总结',time:5,activity:'总结中英疑问句构成对照表',enActivity:'Summarize CN-EN question formation comparison'}]}`},
  // 8: attributive (level 3)
  {teacherTags:"['定语教学','从句对比','高阶语法']",studentTags:"['定语位置','的字用法']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：我昨天买的那本书 vs the book I bought yesterday',enActivity:'Compare: 我昨天买的那本书 vs the book I bought yesterday'},{phase:'讲解',time:15,activity:'讲解中文定语全部前置vs英文关系从句后置',enActivity:'Explain Chinese pre-nominal modifiers vs English post-nominal relative clauses'},{phase:'陷阱',time:5,activity:'纠正长定语语序混乱的错误',enActivity:'Fix errors in ordering long attributive modifiers'},{phase:'练习',time:10,activity:'中英定语位置互译练习',enActivity:'CN-EN attributive position translation practice'},{phase:'总结',time:5,activity:'总结中英定语位置规则',enActivity:'Summarize CN-EN attributive position rules'}]}`},
  // 9: topic-comment (level 2)
  {teacherTags:"['主题句教学','语法对比']",studentTags:"['主题句','话题前置']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：这本书我看过了 vs I have read this book',enActivity:'Compare: 这本书我看过了 vs I have read this book'},{phase:'讲解',time:15,activity:'讲解中文话题优先vs英文主语优先',enActivity:'Explain Chinese topic-prominent vs English subject-prominent'},{phase:'陷阱',time:5,activity:'纠正英文中直译话题前置的错误',enActivity:'Fix direct translation of topic-fronting into English'},{phase:'练习',time:10,activity:'识别和构造主题-评述句',enActivity:'Identify and construct topic-comment sentences'},{phase:'总结',time:5,activity:'总结中英句式结构差异',enActivity:'Summarize CN-EN sentence structure differences'}]}`},
  // 10: aspect (level 2)
  {teacherTags:"['体态教学','助词辨析']",studentTags:"['了/着/过辨析','体态标记']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：他走了/门开着/我去过北京→三个助词有何不同？',enActivity:'Compare: 他走了/门开着/我去过北京→how do the three particles differ?'},{phase:'讲解',time:15,activity:'讲解了(完成)、着(持续)、过(经历)的区分',enActivity:'Explain 了(completion), 着(duration), 过(experience) distinctions'},{phase:'陷阱',time:5,activity:'纠正"着=-ing"的常见误解',enActivity:'Correct the misconception that 着=-ing'},{phase:'练习',time:10,activity:'根据语境选择了/着/过填空',enActivity:'Fill in 了/着/过 based on context'},{phase:'总结',time:5,activity:'总结中英体态系统对照表',enActivity:'Summarize CN-EN aspect system comparison'}]}`},
  // 11: ba-construction (level 3)
  {teacherTags:"['把字句教学','高阶语法','处置表达']",studentTags:"['把字句','宾语前置']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：把书放在桌上 vs Put the book on the table',enActivity:'Compare: 把书放在桌上 vs Put the book on the table'},{phase:'讲解',time:15,activity:'讲解把字句强调对宾语的处置',enActivity:'Explain 把 construction emphasizes disposal of object'},{phase:'陷阱',time:5,activity:'纠正把字句缺少补语的错误',enActivity:'Fix errors of missing complement in 把 sentences'},{phase:'练习',time:10,activity:'用把字句改写普通SVO句子',enActivity:'Rewrite regular SVO sentences using 把 construction'},{phase:'总结',time:5,activity:'总结把字句使用条件',enActivity:'Summarize conditions for using 把 construction'}]}`},
  // 12: serial-verb (level 2)
  {teacherTags:"['连动句教学','语法对比']",studentTags:"['连动句','动词连用']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：我去商店买东西 vs I go to the store to buy things',enActivity:'Compare: 我去商店买东西 vs I go to the store to buy things'},{phase:'讲解',time:15,activity:'讲解中文连动句无需连接词vs英文用to/and',enActivity:'Explain Chinese serial verbs need no connector vs English to/and'},{phase:'陷阱',time:5,activity:'纠正连动句中添加多余连接词的错误',enActivity:'Fix adding unnecessary connectors in serial verb sentences'},{phase:'练习',time:10,activity:'用连动句描述日常活动',enActivity:'Describe daily activities using serial verb construction'},{phase:'总结',time:5,activity:'总结中英连动表达对照',enActivity:'Summarize CN-EN serial verb expression comparison'}]}`},
  // 13: complement (level 3)
  {teacherTags:"['补语教学','高阶语法','得字句']",studentTags:"['得字补语','程度表达']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：他跑得很快 vs He runs very fast',enActivity:'Compare: 他跑得很快 vs He runs very fast'},{phase:'讲解',time:15,activity:'讲解得字补语结构：动+得+补语',enActivity:'Explain 得-complement structure: verb+得+complement'},{phase:'陷阱',time:5,activity:'纠正得/的/地混淆错误',enActivity:'Fix 得/的/地 confusion errors'},{phase:'练习',time:10,activity:'用得字补语描述动作程度',enActivity:'Use 得-complement to describe action degree'},{phase:'总结',time:5,activity:'总结得字补语与英文副词对应关系',enActivity:'Summarize 得-complement vs English adverb correspondence'}]}`},
  // 14: existential (level 2)
  {teacherTags:"['存在句教学','语法对比']",studentTags:"['有字句','存在表达']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：桌上有一本书 vs There is a book on the table',enActivity:'Compare: 桌上有一本书 vs There is a book on the table'},{phase:'讲解',time:15,activity:'讲解中文地点在前vs英文There be在前',enActivity:'Explain Chinese location-first vs English There-be first'},{phase:'陷阱',time:5,activity:'纠正存在句语序错误',enActivity:'Fix existential sentence word order errors'},{phase:'练习',time:10,activity:'用存在句描述房间布局',enActivity:'Describe room layout using existential sentences'},{phase:'总结',time:5,activity:'总结中英存在句结构对照',enActivity:'Summarize CN-EN existential sentence structure comparison'}]}`},
  // 15: de-particle (level 2)
  {teacherTags:"['的地得教学','助词辨析']",studentTags:"['的地得区分','助词用法']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'展示：漂亮的花/快乐地跳/跑得快→三个de有何不同？',enActivity:'Show: 漂亮的花/快乐地跳/跑得快→how do three "de" differ?'},{phase:'讲解',time:15,activity:'讲解的(定语)、地(状语)、得(补语)的功能区分',enActivity:'Explain 的(attributive), 地(adverbial), 得(complement) functions'},{phase:'陷阱',time:5,activity:'纠正的地得混用的常见错误',enActivity:'Fix common 的/地/得 confusion errors'},{phase:'练习',time:10,activity:'在句子中填入正确的de',enActivity:'Fill in the correct "de" particle in sentences'},{phase:'总结',time:5,activity:'总结的地得用法口诀',enActivity:'Summarize 的/地/得 usage mnemonic'}]}`},
  // 16: conjunction (level 2)
  {teacherTags:"['连词教学','语法对比']",studentTags:"['关联词语','复句结构']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：因为下雨所以带伞 vs Because it rains I bring an umbrella',enActivity:'Compare: 因为...所以... vs Because...'},{phase:'讲解',time:15,activity:'讲解中文成对连词vs英文单一连词',enActivity:'Explain Chinese paired conjunctions vs English single conjunctions'},{phase:'陷阱',time:5,activity:'纠正连词缺对或多余的错误',enActivity:'Fix errors of missing or redundant conjunction pairs'},{phase:'练习',time:10,activity:'用成对连词造复句',enActivity:'Create compound sentences using paired conjunctions'},{phase:'总结',time:5,activity:'总结中英连词对照表',enActivity:'Summarize CN-EN conjunction comparison chart'}]}`},
  // 17: modal-particle (level 1)
  {teacherTags:"['语气词教学','基础语法']",studentTags:"['语气词','句末助词']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：你好吗？/走吧/太好了啊！→语气词如何改变语气？',enActivity:'Compare: 你好吗？/走吧/太好了啊！→how do particles change tone?'},{phase:'讲解',time:15,activity:'讲解吗(疑问)、呢(追问)、啊(感叹)、吧(推测)的功能',enActivity:'Explain 吗(question), 呢(follow-up), 啊(exclamation), 吧(suggestion)'},{phase:'陷阱',time:5,activity:'纠正语气词使用不当导致的语气误解',enActivity:'Fix tone misunderstandings from wrong particle usage'},{phase:'练习',time:10,activity:'给句子添加合适的语气词',enActivity:'Add appropriate modal particles to sentences'},{phase:'总结',time:5,activity:'总结四大语气词用法表',enActivity:'Summarize four major modal particle usage chart'}]}`},
  // 18: resultative (level 3)
  {teacherTags:"['结果补语教学','高阶语法']",studentTags:"['结果补语','动词搭配']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：看见/听懂/学会 vs see/understand/master',enActivity:'Compare: 看见/听懂/学会 vs see/understand/master'},{phase:'讲解',time:15,activity:'讲解中文动词+结果→英文用不同词表达',enActivity:'Explain Chinese verb+result fusion vs English separate words'},{phase:'陷阱',time:5,activity:'纠正结果补语搭配错误',enActivity:'Fix resultative complement collocation errors'},{phase:'练习',time:10,activity:'用结果补语描述完成动作',enActivity:'Use resultative complements to describe completed actions'},{phase:'总结',time:5,activity:'总结常用结果补语搭配表',enActivity:'Summarize common resultative complement collocations'}]}`},
  // 19: pivot (level 3)
  {teacherTags:"['兼语句教学','高阶语法']",studentTags:"['兼语句','使役表达']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：妈妈让我做作业 vs Mom asks me to do homework',enActivity:'Compare: 妈妈让我做作业 vs Mom asks me to do homework'},{phase:'讲解',time:15,activity:'讲解兼语句中B的双重语法角色',enActivity:'Explain dual grammatical role of B in pivot construction'},{phase:'陷阱',time:5,activity:'纠正兼语句中动词顺序错误',enActivity:'Fix verb order errors in pivot constructions'},{phase:'练习',time:10,activity:'用让/叫/请构造兼语句',enActivity:'Construct pivot sentences using 让/叫/请'},{phase:'总结',time:5,activity:'总结兼语句结构公式',enActivity:'Summarize pivot construction structural formula'}]}`},
  // 20: conditional (level 2)
  {teacherTags:"['条件句教学','语法对比']",studentTags:"['如果句','条件表达']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：如果明天下雨我就不去 vs If it rains tomorrow I won\'t go',enActivity:'Compare: 如果明天下雨我就不去 vs If it rains I won\'t go'},{phase:'讲解',time:15,activity:'讲解中文条件句不变时态vs英文虚拟语气',enActivity:'Explain Chinese conditionals keep tense vs English subjunctive'},{phase:'陷阱',time:5,activity:'纠正条件句中添加时态变化的错误',enActivity:'Fix errors of adding tense changes in Chinese conditionals'},{phase:'练习',time:10,activity:'用如果...就.../只要...就...造句',enActivity:'Create sentences using 如果...就.../只要...就...'},{phase:'总结',time:5,activity:'总结中英条件句对照表',enActivity:'Summarize CN-EN conditional sentence comparison'}]}`},
  // 21: direction (level 2)
  {teacherTags:"['趋向补语教学','语法对比']",studentTags:"['趋向补语','方向表达']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：走过来/跑出去 vs Come over/Run out',enActivity:'Compare: 走过来/跑出去 vs Come over/Run out'},{phase:'讲解',time:15,activity:'讲解趋向补语可叠加vs英文短语动词',enActivity:'Explain stackable directional complements vs English phrasal verbs'},{phase:'陷阱',time:5,activity:'纠正趋向补语叠加顺序错误',enActivity:'Fix directional complement stacking order errors'},{phase:'练习',time:10,activity:'用趋向补语描述运动方向',enActivity:'Use directional complements to describe movement'},{phase:'总结',time:5,activity:'总结趋向补语组合规则',enActivity:'Summarize directional complement combination rules'}]}`},
  // 22: disposal (level 3)
  {teacherTags:"['处置式教学','高阶语法']",studentTags:"['处置式','把/将字句']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：把窗户打开/将任务完成 vs Open the window/Complete the task',enActivity:'Compare: 把窗户打开/将任务完成 vs Open the window/Complete the task'},{phase:'讲解',time:15,activity:'讲解处置式要求动词后有结果或方向补语',enActivity:'Explain disposal requires result/direction complement after verb'},{phase:'陷阱',time:5,activity:'纠正处置式缺少补语的错误',enActivity:'Fix errors of missing complement in disposal construction'},{phase:'练习',time:10,activity:'用把/将字句描述处理事物的过程',enActivity:'Describe handling processes using 把/将 construction'},{phase:'总结',time:5,activity:'总结处置式的使用条件和结构',enActivity:'Summarize disposal construction conditions and structure'}]}`},
  // 23: emphasis (level 2)
  {teacherTags:"['强调句教学','语法对比']",studentTags:"['是...的句型','强调表达']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：我是昨天来的 vs It was yesterday that I came',enActivity:'Compare: 我是昨天来的 vs It was yesterday that I came'},{phase:'讲解',time:15,activity:'讲解是...的结构强调已知事件的某方面',enActivity:'Explain 是...的 highlights a specific aspect of known events'},{phase:'陷阱',time:5,activity:'纠正是...的结构中"的"位置错误',enActivity:'Fix 的 placement errors in 是...的 construction'},{phase:'练习',time:10,activity:'用是...的结构强调不同信息',enActivity:'Use 是...的 to emphasize different information'},{phase:'总结',time:5,activity:'总结中英强调表达对照',enActivity:'Summarize CN-EN emphasis expression comparison'}]}`},
  // 24: plurality (level 1)
  {teacherTags:"['复数教学','基础语法']",studentTags:"['复数表达','们的用法']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：三本书/同学们 vs three books/students',enActivity:'Compare: 三本书/同学们 vs three books/students'},{phase:'讲解',time:15,activity:'讲解中文名词不变形vs英文加-s/-es',enActivity:'Explain Chinese nouns don\'t change form vs English -s/-es'},{phase:'陷阱',time:5,activity:'纠正"们"过度使用的错误',enActivity:'Fix overuse of 们 with non-human nouns'},{phase:'练习',time:10,activity:'中英复数表达互译练习',enActivity:'CN-EN plural expression translation practice'},{phase:'总结',time:5,activity:'总结中英复数规则对照表',enActivity:'Summarize CN-EN plurality rule comparison'}]}`},
  // 25: preposition (level 2)
  {teacherTags:"['介词教学','语法对比']",studentTags:"['介词位置','介词短语']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：我在学校学习 vs I study at school',enActivity:'Compare: 我在学校学习 vs I study at school'},{phase:'讲解',time:15,activity:'讲解中文介词短语在动词前vs英文在动词后',enActivity:'Explain Chinese PP precedes verb vs English PP follows verb'},{phase:'陷阱',time:5,activity:'纠正介词短语位置放错的错误',enActivity:'Fix prepositional phrase placement errors'},{phase:'练习',time:10,activity:'用在/从/到/给造句练习',enActivity:'Practice sentences using 在/从/到/给'},{phase:'总结',time:5,activity:'总结中英介词位置规则',enActivity:'Summarize CN-EN preposition placement rules'}]}`},
  // 26: copula (level 1)
  {teacherTags:"['系词教学','基础语法']",studentTags:"['是/很辨析','判断句']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：她是老师/花很漂亮 vs She is a teacher/The flower is beautiful',enActivity:'Compare: 她是老师/花很漂亮 vs She is a teacher/The flower is beautiful'},{phase:'讲解',time:15,activity:'讲解是(判断)vs很+形容词(描述)，不用"是"',enActivity:'Explain 是(identity) vs 很+adj(description), no 是 for adj'},{phase:'陷阱',time:5,activity:'纠正"花是漂亮"→"花很漂亮"的错误',enActivity:'Fix the error of 花是漂亮→花很漂亮'},{phase:'练习',time:10,activity:'选择是或很完成句子',enActivity:'Choose 是 or 很 to complete sentences'},{phase:'总结',time:5,activity:'总结中英系词用法差异',enActivity:'Summarize CN-EN copula usage differences'}]}`},
  // 27: pronoun (level 1)
  {teacherTags:"['代词教学','基础语法']",studentTags:"['代词用法','格的变化']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：我喜欢他/他喜欢我 vs I like him/He likes me',enActivity:'Compare: 我喜欢他/他喜欢我 vs I like him/He likes me'},{phase:'讲解',time:15,activity:'讲解中文代词无格变化vs英文主宾格区分',enActivity:'Explain Chinese pronouns have no case vs English case distinction'},{phase:'陷阱',time:5,activity:'纠正英译中时添加格变化的错误',enActivity:'Fix errors of adding case changes when translating to Chinese'},{phase:'练习',time:10,activity:'中英代词互译练习',enActivity:'CN-EN pronoun translation practice'},{phase:'总结',time:5,activity:'总结中英代词系统对照表',enActivity:'Summarize CN-EN pronoun system comparison'}]}`},
  // 28: adverb-position (level 2)
  {teacherTags:"['副词教学','语法对比']",studentTags:"['副词位置','状语顺序']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：他慢慢地走 vs He walks slowly',enActivity:'Compare: 他慢慢地走 vs He walks slowly'},{phase:'讲解',time:15,activity:'讲解中文副词固定在动词前vs英文位置灵活',enActivity:'Explain Chinese adverbs fixed pre-verbal vs English flexible position'},{phase:'陷阱',time:5,activity:'纠正副词放在动词后的错误',enActivity:'Fix errors of placing adverbs after verbs in Chinese'},{phase:'练习',time:10,activity:'在句子中正确放置副词',enActivity:'Place adverbs correctly in sentences'},{phase:'总结',time:5,activity:'总结中英副词位置规则',enActivity:'Summarize CN-EN adverb position rules'}]}`},
  // 29: sentence-final (level 1)
  {teacherTags:"['句末助词教学','基础语法']",studentTags:"['了/呢/吧','句末语气']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：下雨了/你在干嘛呢？/我们走吧→如何翻译？',enActivity:'Compare: 下雨了/你在干嘛呢？/我们走吧→how to translate?'},{phase:'讲解',time:15,activity:'讲解了(变化/完成)、呢(持续/疑问)、吧(建议)的用法',enActivity:'Explain 了(change), 呢(ongoing/question), 吧(suggestion)'},{phase:'陷阱',time:5,activity:'纠正句中"了"和句末"了"的混淆',enActivity:'Fix confusion between mid-sentence 了 and sentence-final 了'},{phase:'练习',time:10,activity:'给句子添加合适的句末助词',enActivity:'Add appropriate sentence-final particles to sentences'},{phase:'总结',time:5,activity:'总结三大句末助词用法',enActivity:'Summarize three major sentence-final particle usages'}]}`},
  // 30: double-object (level 2)
  {teacherTags:"['双宾语教学','语法对比']",studentTags:"['双宾语','给字句']",
   plan:`{duration:40,steps:[{phase:'导入',time:5,activity:'对比：给我一杯水 vs Give me a glass of water',enActivity:'Compare: 给我一杯水 vs Give me a glass of water'},{phase:'讲解',time:15,activity:'讲解中英双宾语结构相似性和"给"字句扩展',enActivity:'Explain CN-EN double object similarity and 给-construction extensions'},{phase:'陷阱',time:5,activity:'纠正双宾语语序错误',enActivity:'Fix double object word order errors'},{phase:'练习',time:10,activity:'用给/教/告诉造双宾语句',enActivity:'Create double object sentences using 给/教/告诉'},{phase:'总结',time:5,activity:'总结中英双宾语结构对照',enActivity:'Summarize CN-EN double object structure comparison'}]}`}
];

// =====================================================================
// 3. vocab.wordFormation — 20 items: gradeRange, hskRange, teacherTags, studentTags
// =====================================================================

const wordFormationMeta = [
  {teacherTags:"['构词法','偏正式复合']",studentTags:"['组合词','词汇扩展']"},     // compound/偏正 lv1
  {teacherTags:"['构词法','并列式复合']",studentTags:"['并列词','词义推测']"},     // compound/并列 lv2
  {teacherTags:"['构词法','前缀教学']",studentTags:"['前缀','词义推测']"},         // prefix lv1
  {teacherTags:"['构词法','后缀教学']",studentTags:"['后缀','词性转换']"},         // suffix lv1
  {teacherTags:"['构词法','重叠式教学']",studentTags:"['重叠词','亲切表达']"},     // reduplication lv1
  {teacherTags:"['构词法','动宾式复合']",studentTags:"['动宾词','动词搭配']"},     // verb-object lv2
  {teacherTags:"['构词法','主谓式复合']",studentTags:"['主谓词','句式理解']"},     // subject-predicate lv2
  {teacherTags:"['构词法','动补式复合']",studentTags:"['动补词','结果表达']"},     // verb-complement lv2
  {teacherTags:"['构词法','缩写教学']",studentTags:"['缩略语','名称简化']"},       // abbreviation lv3
  {teacherTags:"['构词法','外来词教学']",studentTags:"['外来词','文化交流']"},     // loanword lv2
  {teacherTags:"['构词法','拟声词教学']",studentTags:"['拟声词','声音模仿']"},     // onomatopoeia lv1
  {teacherTags:"['构词法','量词教学']",studentTags:"['量词系统','名词分类']"},     // classifier+noun lv1
  {teacherTags:"['构词法','成语教学','文化']",studentTags:"['四字成语','固定短语']"},// four-char idiom lv3
  {teacherTags:"['构词法','比喻教学']",studentTags:"['比喻词','抽象表达']"},       // metaphor lv3
  {teacherTags:"['构词法','词类转化']",studentTags:"['一词多用','词性转换']"},     // conversion lv2
  {teacherTags:"['构词法','合成词教学']",studentTags:"['合成词','新词创造']"},     // blending lv2
  {teacherTags:"['构词法','派生教学']",studentTags:"['派生词','词缀运用']"},       // derivation lv2
  {teacherTags:"['构词法','逆构词教学','高阶']",studentTags:"['逆构词','词源分析']"},// back-formation lv3
  {teacherTags:"['构词法','量词系统','特色']",studentTags:"['量词系统','中文特色']"},// measure-word lv1
  {teacherTags:"['构词法','趋向动词']",studentTags:"['趋向动词','方向表达']"}      // directional compound lv2
];

// =====================================================================
// Simple metadata for all other categories
// =====================================================================

// listening.toneVsStress (8 items)
const toneVsStressMeta = [
  {teacherTags:"['声调教学','入门']",studentTags:"['声调基础','四声']"},
  {teacherTags:"['声调教学','四声系统']",studentTags:"['四声练习','调型']"},
  {teacherTags:"['声调教学','变调规则']",studentTags:"['三声变调','自然连读']"},
  {teacherTags:"['声调教学','轻声']",studentTags:"['轻声识别','自然发音']"},
  {teacherTags:"['语音教学','方言特色']",studentTags:"['儿化音','北方话']"},
  {teacherTags:"['语调教学','句子语气']",studentTags:"['语调模式','语气辨别']"},
  {teacherTags:"['语音教学','高阶连读']",studentTags:"['连读规则','清晰发音']"},
  {teacherTags:"['语音教学','高阶弱读']",studentTags:"['弱读现象','自然语流']"}
];

// listening.soundPairs (10 items)
const soundPairsMeta = [
  {teacherTags:"['语音对比','翘舌平舌']",studentTags:"['翘舌音','发音区分']"},
  {teacherTags:"['语音对比','元音辨析']",studentTags:"['ü音','特殊元音']"},
  {teacherTags:"['语音对比','送气辨析']",studentTags:"['送气音','清浊辨别']"},
  {teacherTags:"['语音对比','鼻音辨析']",studentTags:"['前后鼻音','韵尾']"},
  {teacherTags:"['语音对比','卷舌音']",studentTags:"['r音对比','发音方法']"},
  {teacherTags:"['语音对比','擦音辨析']",studentTags:"['x/sh辨别','舌位']"},
  {teacherTags:"['语音对比','变调规则']",studentTags:"['一的变调','声调规则']"},
  {teacherTags:"['语音对比','变调规则']",studentTags:"['不的变调','声调规则']"},
  {teacherTags:"['语音对比','流音辨析']",studentTags:"['l/r辨别','发音技巧']"},
  {teacherTags:"['语音对比','喉音对比']",studentTags:"['h音对比','发音力度']"}
];

// listening.strategies (6 items)
const strategiesMeta = [
  {teacherTags:"['听力策略','关键词']",studentTags:"['抓关键词','大意理解']"},
  {teacherTags:"['听力策略','推测']",studentTags:"['上下文推测','猜词']"},
  {teacherTags:"['听力策略','预测']",studentTags:"['预测内容','理解准备']"},
  {teacherTags:"['听力策略','笔记']",studentTags:"['听力笔记','信息记录']"},
  {teacherTags:"['听力策略','语音识别']",studentTags:"['音素辨别','声调识别']"},
  {teacherTags:"['听力策略','篇章理解','高阶']",studentTags:"['篇章结构','逻辑理解']"}
];

// reading.strategies (8 items)
const readingStrategiesMeta = [
  {teacherTags:"['阅读策略','分词断句']",studentTags:"['意群阅读','速度提升']"},
  {teacherTags:"['阅读策略','猜词']",studentTags:"['上下文猜义','词汇策略']"},
  {teacherTags:"['阅读策略','预测']",studentTags:"['预测内容','阅读准备']"},
  {teacherTags:"['阅读策略','提问']",studentTags:"['自问自答','深层理解']"},
  {teacherTags:"['阅读策略','总结']",studentTags:"['归纳大意','概括能力']"},
  {teacherTags:"['阅读策略','推理','高阶']",studentTags:"['推理判断','深层含义']"},
  {teacherTags:"['阅读策略','结构分析','高阶']",studentTags:"['文章结构','逻辑分析']"},
  {teacherTags:"['阅读策略','批判性阅读','高阶']",studentTags:"['批判思维','观点评价']"}
];

// reading.passages (6 items)
const passagesMeta = [
  {teacherTags:"['阅读材料','家庭主题']",studentTags:"['家庭','基础阅读']"},
  {teacherTags:"['阅读材料','自然主题']",studentTags:"['春天','基础阅读']"},
  {teacherTags:"['阅读材料','学校主题']",studentTags:"['学校生活','中级阅读']"},
  {teacherTags:"['阅读材料','季节主题']",studentTags:"['四季','中级阅读']"},
  {teacherTags:"['阅读材料','读书主题','高阶']",studentTags:"['阅读兴趣','高级阅读']"},
  {teacherTags:"['阅读材料','文化主题','高阶']",studentTags:"['长城','文化阅读']"}
];

// writing.genres (5 items)
const genresMeta = [
  {teacherTags:"['写作教学','记叙文']",studentTags:"['记叙文','故事写作']"},
  {teacherTags:"['写作教学','说明文']",studentTags:"['说明文','信息传达']"},
  {teacherTags:"['写作教学','议论文','高阶']",studentTags:"['议论文','论证方法']"},
  {teacherTags:"['写作教学','应用文']",studentTags:"['应用文','格式写作']"},
  {teacherTags:"['写作教学','散文','高阶']",studentTags:"['散文','文学表达']"}
];

// writing.structures (4 items)
const structuresMeta = [
  {teacherTags:"['写作结构','起承转合']",studentTags:"['文章结构','开头结尾']"},
  {teacherTags:"['写作结构','总分总']",studentTags:"['总分总','段落组织']"},
  {teacherTags:"['写作结构','先叙后议','高阶']",studentTags:"['叙议结合','读后感']"},
  {teacherTags:"['写作结构','并列式','高阶']",studentTags:"['并列结构','排比']"}
];

// writing.punctuation (10 items — actually 8 per file, but let me check)
const punctuationMeta = [
  {teacherTags:"['标点教学','基础标点']",studentTags:"['句号','基础标点']"},
  {teacherTags:"['标点教学','基础标点']",studentTags:"['逗号','句内停顿']"},
  {teacherTags:"['标点教学','基础标点']",studentTags:"['引号','引用标记']"},
  {teacherTags:"['标点教学','基础标点']",studentTags:"['问号','疑问标记']"},
  {teacherTags:"['标点教学','基础标点']",studentTags:"['感叹号','情感标记']"},
  {teacherTags:"['标点教学','进阶标点']",studentTags:"['冒号','列举引出']"},
  {teacherTags:"['标点教学','进阶标点']",studentTags:"['分号','并列分句']"},
  {teacherTags:"['标点教学','中文特色标点']",studentTags:"['顿号','并列词语']"}
];

// speaking.pronunciation (10 items)
const pronunciationMeta = [
  {teacherTags:"['发音教学','送气辨析']",studentTags:"['b/p发音','送气练习']"},
  {teacherTags:"['发音教学','送气辨析']",studentTags:"['d/t发音','送气练习']"},
  {teacherTags:"['发音教学','翘舌音']",studentTags:"['zh/ch/sh','卷舌练习']"},
  {teacherTags:"['发音教学','舌面音']",studentTags:"['j/q/x','舌面前音']"},
  {teacherTags:"['发音教学','舌尖前音']",studentTags:"['z/c/s','齿音练习']"},
  {teacherTags:"['发音教学','特殊元音']",studentTags:"['ü音','圆唇练习']"},
  {teacherTags:"['发音教学','鼻音']",studentTags:"['后鼻音','鼻音练习']"},
  {teacherTags:"['发音教学','卷舌音']",studentTags:"['r音','卷舌练习']"},
  {teacherTags:"['发音教学','声调核心']",studentTags:"['声调','四声练习']"},
  {teacherTags:"['发音教学','儿化音']",studentTags:"['儿化音','北方发音']"}
];

// speaking.patterns (8 items)
const patternsMeta = [
  {teacherTags:"['会话教学','打招呼']",studentTags:"['问候语','日常交际']"},
  {teacherTags:"['会话教学','告别']",studentTags:"['告别语','礼貌用语']"},
  {teacherTags:"['会话教学','感谢']",studentTags:"['感谢语','谦虚回应']"},
  {teacherTags:"['会话教学','道歉']",studentTags:"['道歉语','礼貌程度']"},
  {teacherTags:"['会话教学','请求']",studentTags:"['请求语','礼貌表达']"},
  {teacherTags:"['会话教学','拒绝']",studentTags:"['拒绝语','委婉表达']"},
  {teacherTags:"['会话教学','赞美']",studentTags:"['赞美语','谦虚文化']"},
  {teacherTags:"['会话教学','邀请']",studentTags:"['邀请语','社交用语']"}
];

// culture.norms (8 items)
const normsMeta = [
  {teacherTags:"['文化教学','称谓系统']",studentTags:"['称呼','家族关系']"},
  {teacherTags:"['文化教学','谦虚文化']",studentTags:"['谦虚','赞美回应']"},
  {teacherTags:"['文化教学','送礼文化']",studentTags:"['送礼','礼仪规范']"},
  {teacherTags:"['文化教学','饮食文化']",studentTags:"['餐桌礼仪','饮食习惯']"},
  {teacherTags:"['文化教学','隐私观念']",studentTags:"['年龄话题','文化差异']"},
  {teacherTags:"['文化教学','面子文化','高阶']",studentTags:"['面子','社交规则']"},
  {teacherTags:"['文化教学','价值观','高阶']",studentTags:"['集体主义','个人主义']"},
  {teacherTags:"['文化教学','教育观','高阶']",studentTags:"['教育态度','尊师重教']"}
];

// culture.geography (6 items)
const geographyMeta = [
  {teacherTags:"['文化地理','行政区划']",studentTags:"['省份','行政区']"},
  {teacherTags:"['文化地理','江河文明']",studentTags:"['长江黄河','母亲河']"},
  {teacherTags:"['文化地理','气候带']",studentTags:"['气候','南北差异']"},
  {teacherTags:"['文化地理','首都文化']",studentTags:"['北京','首都']"},
  {teacherTags:"['文化地理','世界遗产','高阶']",studentTags:"['世界遗产','文化遗产']"},
  {teacherTags:"['文化地理','语言分布','高阶']",studentTags:"['方言','普通话']"}
];

// culture.festivals (6 items)
const festivalsMeta = [
  {teacherTags:"['节日文化','春节']",studentTags:"['春节','传统节日']"},
  {teacherTags:"['节日文化','中秋节']",studentTags:"['中秋节','团圆']"},
  {teacherTags:"['节日文化','端午节']",studentTags:"['端午节','赛龙舟']"},
  {teacherTags:"['节日文化','清明节']",studentTags:"['清明节','祭祖']"},
  {teacherTags:"['节日文化','元宵节']",studentTags:"['元宵节','花灯']"},
  {teacherTags:"['节日文化','重阳节','高阶']",studentTags:"['重阳节','敬老']"}
];

// =====================================================================
// NOW: Apply all edits
// =====================================================================

// Process the file line by line
let lines = src.split('\n');

// Helper: find lines matching a pattern in a range, return line indices
function findItemLines(startLine, endLine, pattern) {
  const indices = [];
  for (let i = startLine; i < endLine && i < lines.length; i++) {
    if (lines[i].match(pattern)) indices.push(i);
  }
  return indices;
}

// Helper: extract level from a line
function extractLevel(line) {
  const m = line.match(/level:(\d+)/);
  return m ? parseInt(m[1]) : 1;
}

// ---------------------------------------------------------------
// Process vocab.radicalRoots (lines 7-46, 0-indexed: 6-45)
// ---------------------------------------------------------------
let rrLines = findItemLines(6, 47, /cn:\{radical:/);
console.log(`Found ${rrLines.length} radicalRoots items`);

rrLines.forEach((lineIdx, i) => {
  const level = extractLevel(lines[lineIdx]);
  const meta = radicalMeta[i];
  const gr = gradeRange(level);
  const hr = hskRange(level);
  // Insert before the closing },  or }
  // Each line ends with ,level:N} or ,level:N},
  lines[lineIdx] = lines[lineIdx].replace(
    /,level:(\d+)(\}[,]?)$/,
    `,level:$1,gradeRange:${gr},hskRange:${hr},teacherTags:${meta.teacherTags},studentTags:${meta.studentTags},teachingPlan:${meta.plan}$2`
  );
});

// ---------------------------------------------------------------
// Process vocab.wordFormation (lines 49-68, 0-indexed: 48-67)
// ---------------------------------------------------------------
let wfLines = findItemLines(48, 69, /type:'/);
console.log(`Found ${wfLines.length} wordFormation items`);

wfLines.forEach((lineIdx, i) => {
  const level = extractLevel(lines[lineIdx]);
  const meta = wordFormationMeta[i];
  const gr = gradeRange(level);
  const hr = hskRange(level);
  lines[lineIdx] = lines[lineIdx].replace(
    /,level:(\d+)(\}[,]?)$/,
    `,level:$1,gradeRange:${gr},hskRange:${hr},teacherTags:${meta.teacherTags},studentTags:${meta.studentTags}$2`
  );
});

// ---------------------------------------------------------------
// Process grammar.comparisons (lines 77-106, 0-indexed: 76-105)
// ---------------------------------------------------------------
let gcLines = findItemLines(76, 107, /id:'/);
console.log(`Found ${gcLines.length} grammar.comparisons items`);

gcLines.forEach((lineIdx, i) => {
  const level = extractLevel(lines[lineIdx]);
  const meta = grammarMeta[i];
  const gr = gradeRange(level);
  const hr = hskRange(level);
  lines[lineIdx] = lines[lineIdx].replace(
    /,level:(\d+)(\}[,]?)$/,
    `,level:$1,gradeRange:${gr},hskRange:${hr},teacherTags:${meta.teacherTags},studentTags:${meta.studentTags},teachingPlan:${meta.plan}$2`
  );
});

// ---------------------------------------------------------------
// Generic processor for simpler categories
// ---------------------------------------------------------------
function processCategory(startLine, endLine, pattern, metaArray, label) {
  let itemLines = findItemLines(startLine, endLine, pattern);
  console.log(`Found ${itemLines.length} ${label} items`);

  itemLines.forEach((lineIdx, i) => {
    if (i >= metaArray.length) return;
    const level = extractLevel(lines[lineIdx]);
    const meta = metaArray[i];
    const gr = gradeRange(level);
    const hr = hskRange(level);
    lines[lineIdx] = lines[lineIdx].replace(
      /,level:(\d+)(\}[,]?)$/,
      `,level:$1,gradeRange:${gr},hskRange:${hr},teacherTags:${meta.teacherTags},studentTags:${meta.studentTags}$2`
    );
  });
}

// listening.toneVsStress (lines 115-122, 0-indexed: 114-121)
processCategory(114, 123, /cn:'/, toneVsStressMeta, 'listening.toneVsStress');

// listening.soundPairs (lines 125-134, 0-indexed: 124-133)
processCategory(124, 135, /cn:'/, soundPairsMeta, 'listening.soundPairs');

// listening.strategies (lines 137-142, 0-indexed: 136-141)
processCategory(136, 143, /cn:'/, strategiesMeta, 'listening.strategies');

// reading.strategies (lines 151-158, 0-indexed: 150-157)
processCategory(150, 159, /cn:'/, readingStrategiesMeta, 'reading.strategies');

// reading.passages (lines 161-166, 0-indexed: 160-165)
// Passages end with }] not just }, and they have complex structure
// Let me check: each passage line ends with }], }], etc.
// Actually, looking at the data, passages don't end with ,level:N} — they have nested structures
// Let me handle passages separately
let passageLines = findItemLines(160, 167, /title:'/);
console.log(`Found ${passageLines.length} reading.passages items`);

passageLines.forEach((lineIdx, i) => {
  if (i >= passagesMeta.length) return;
  const level = extractLevel(lines[lineIdx]);
  const meta = passagesMeta[i];
  const gr = gradeRange(level);
  const hr = hskRange(level);
  // Passages have a different structure — they end with }]} or }]},
  // The level is at the beginning: {title:..., level:N, ...}
  // Actually let me check the pattern — level is early in the line
  // We need to find the last closing } and insert before it
  // The passage lines end with ...answer:2}]}  or  ...answer:2}]},
  lines[lineIdx] = lines[lineIdx].replace(
    /,level:(\d+),/,
    `,level:$1,gradeRange:${gr},hskRange:${hr},teacherTags:${meta.teacherTags},studentTags:${meta.studentTags},`
  );
});

// writing.genres (lines 175-179, 0-indexed: 174-178)
processCategory(174, 180, /cn:'/, genresMeta, 'writing.genres');

// writing.structures (lines 182-185, 0-indexed: 181-184)
processCategory(181, 186, /cn:'/, structuresMeta, 'writing.structures');

// writing.punctuation (lines 188-195 → 8 items, 0-indexed: 187-195)
processCategory(187, 196, /cn:'/, punctuationMeta, 'writing.punctuation');

// speaking.pronunciation (lines 204-213, 0-indexed: 203-212)
processCategory(203, 214, /cn:'/, pronunciationMeta, 'speaking.pronunciation');

// speaking.patterns (lines 216-223, 0-indexed: 215-222)
processCategory(215, 224, /cn:'/, patternsMeta, 'speaking.patterns');

// culture.norms (lines 232-239, 0-indexed: 231-238)
processCategory(231, 240, /cn:'/, normsMeta, 'culture.norms');

// culture.geography (lines 242-247, 0-indexed: 241-246)
processCategory(241, 248, /cn:'/, geographyMeta, 'culture.geography');

// culture.festivals (lines 250-255, 0-indexed: 249-254)
processCategory(249, 256, /cn:'/, festivalsMeta, 'culture.festivals');

// =====================================================================
// Write back
// =====================================================================
const output = lines.join('\n');
fs.writeFileSync(filePath, output, 'utf-8');

console.log('\nDone! bridge_data.js has been updated with metadata fields.');
console.log(`File size: ${output.length} characters`);
