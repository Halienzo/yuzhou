// Build script - assembles final HTML from existing data + new enriched data
const fs = require('fs');
const path = require('path');

// 1. Read existing file and extract data lines
const oldFile = fs.readFileSync(path.join(__dirname, '..', 'Chinese chars.html'), 'utf8');
const lines = oldFile.split('\n');

let RAW_DATA_LINE = '', NAV_TREE_LINE = '', CHAR_EN_LINE = '', WORD_EN_LINE = '';
for (const line of lines) {
  const t = line.trim();
  if (t.startsWith('const RAW_DATA=')) RAW_DATA_LINE = t;
  else if (t.startsWith('const NAV_TREE=')) NAV_TREE_LINE = t;
  else if (t.startsWith('const CHAR_EN=')) CHAR_EN_LINE = t;
  else if (t.startsWith('const WORD_EN=')) WORD_EN_LINE = t;
}

// 2. Load new char detail data
const cd1 = require('./char_detail_g1s1a.js');
const cd2 = require('./char_detail_g1s1b.js');
const cd3 = require('./char_detail_g1s2a.js');
const cd4 = require('./char_detail_g1s2b.js');
const CHAR_DETAIL = Object.assign({}, cd1, cd2, cd3, cd4);

// 3. Generate WORD_PINYIN data
const WORD_PINYIN = {
"十个":"shí gè","十天":"shí tiān","十日":"shí rì","十人":"shí rén","十月一日":"shí yuè yī rì",
"木头":"mù tou","木耳":"mù ěr","木门":"mù mén","树木":"shù mù","木屋":"mù wū",
"禾苗":"hé miáo","上下":"shàng xià","天上":"tiān shàng","上车":"shàng chē","上山":"shàng shān","上去":"shàng qù","上来":"shàng lái",
"下面":"xià miàn","下车":"xià chē","天下":"tiān xià","下来":"xià lái","下山":"xià shān",
"土地":"tǔ dì","沙土":"shā tǔ","土里":"tǔ lǐ","大个":"dà gè","小个":"xiǎo gè","个子":"gè zi","八个":"bā gè","一个人":"yí gè rén",
"八天":"bā tiān","八人":"bā rén","八十":"bā shí","八月":"bā yuè",
"入口":"rù kǒu","出入":"chū rù","入门":"rù mén","入土":"rù tǔ",
"大米":"dà mǐ","大门":"dà mén","大人":"dà rén","大火":"dà huǒ","大小":"dà xiǎo",
"今天":"jīn tiān","白天":"bái tiān","天地":"tiān dì",
"工人":"gōng rén","人口":"rén kǒu","人们":"rén men","人生":"rén shēng","女人":"nǚ rén","好人":"hǎo rén",
"火车":"huǒ chē","火山":"huǒ shān","生火":"shēng huǒ","水火":"shuǐ huǒ","火苗":"huǒ miáo",
"中文":"zhōng wén","文学":"wén xué","语文":"yǔ wén","文中":"wén zhōng","文人":"wén rén",
"六天":"liù tiān","六月":"liù yuè","六个":"liù gè","六人":"liù rén","六年":"liù nián",
"七人":"qī rén","七天":"qī tiān","七个":"qī gè","七月":"qī yuè",
"儿子":"ér zi","月儿":"yuè ér","花儿":"huā er","儿女":"ér nǚ",
"九人":"jiǔ rén","九天":"jiǔ tiān","九个":"jiǔ gè","九月":"jiǔ yuè",
"无人":"wú rén","无力":"wú lì","无方":"wú fāng","无心":"wú xīn",
"门口":"mén kǒu","出口":"chū kǒu","开口":"kāi kǒu","口中":"kǒu zhōng",
"日子":"rì zi","日出":"rì chū","日月":"rì yuè","日光":"rì guāng","生日":"shēng rì",
"中国":"zhōng guó","中心":"zhōng xīn","中间":"zhōng jiān",
"大门":"dà mén","门前":"mén qián","开门":"kāi mén",
"月亮":"yuè liang","月光":"yuè guāng",
"不好":"bù hǎo","不行":"bù xíng","不对":"bú duì","不用":"bú yòng",
"开水":"kāi shuǐ","开心":"kāi xīn","开花":"kāi huā",
"四个":"sì gè","四天":"sì tiān","四月":"sì yuè","四方":"sì fāng",
"五个":"wǔ gè","五天":"wǔ tiān","五月":"wǔ yuè","五年":"wǔ nián",
"目光":"mù guāng","目中":"mù zhōng","耳目":"ěr mù",
"耳朵":"ěr duo","木耳":"mù ěr",
"头发":"tóu fa","石头":"shí tou","回头":"huí tóu",
"米饭":"mǐ fàn","玉米":"yù mǐ",
"看见":"kàn jiàn","再见":"zài jiàn","见面":"jiàn miàn",
"白云":"bái yún","白色":"bái sè",
"田地":"tián dì","水田":"shuǐ tián","田里":"tián lǐ",
"电话":"diàn huà","电车":"diàn chē","电视":"diàn shì",
"长大":"zhǎng dà","长短":"cháng duǎn","长江":"cháng jiāng",
"大山":"dà shān","山上":"shān shàng","山水":"shān shuǐ",
"出去":"chū qù","出来":"chū lái","出门":"chū mén",
"飞机":"fēi jī","飞鸟":"fēi niǎo","飞走":"fēi zǒu",
"马上":"mǎ shàng","小马":"xiǎo mǎ","马路":"mǎ lù",
"小鸟":"xiǎo niǎo","鸟儿":"niǎo ér",
"云朵":"yún duǒ","风云":"fēng yún",
"公园":"gōng yuán","公共":"gōng gòng","公主":"gōng zhǔ",
"上车":"shàng chē","下车":"xià chē",
"水牛":"shuǐ niú","牛奶":"niú nǎi","小牛":"xiǎo niú",
"山羊":"shān yáng","小羊":"xiǎo yáng","羊毛":"yáng máo",
"小鸟":"xiǎo niǎo","小心":"xiǎo xīn",
"多少":"duō shǎo","少年":"shào nián","不少":"bù shǎo",
"毛巾":"máo jīn","围巾":"wéi jīn","手巾":"shǒu jīn",
"牙齿":"yá chǐ","门牙":"mén yá","刷牙":"shuā yá",
"尺子":"chǐ zi","直尺":"zhí chǐ",
"羊毛":"yáng máo","毛笔":"máo bǐ",
"萝卜":"luó bo",
"又大又红":"yòu dà yòu hóng","又来了":"yòu lái le",
"小手":"xiǎo shǒu","手中":"shǒu zhōng","双手":"shuāng shǒu","手心":"shǒu xīn",
"风车":"fēng chē","春风":"chūn fēng","风雨":"fēng yǔ",
"力气":"lì qi","用力":"yòng lì",
"水果":"shuǐ guǒ","河水":"hé shuǐ",
"广大":"guǎng dà","广场":"guǎng chǎng","广东":"guǎng dōng",
"上升":"shàng shēng","升起":"shēng qǐ","升旗":"shēng qí",
"十足":"shí zú","不足":"bù zú","足球":"zú qiú",
"走路":"zǒu lù","走开":"zǒu kāi",
"方向":"fāng xiàng","地方":"dì fang",
"一半":"yí bàn","半天":"bàn tiān","半个":"bàn gè",
"下巴":"xià ba","嘴巴":"zuǐ ba","尾巴":"wěi ba",
"作业":"zuò yè","工业":"gōng yè",
"本子":"běn zi","课本":"kè běn","日本":"rì běn",
"平安":"píng ān","水平":"shuǐ píng","平时":"píng shí",
"书本":"shū běn","书包":"shū bāo","读书":"dú shū",
"自己":"zì jǐ","自然":"zì rán","自从":"zì cóng","己方":"jǐ fāng",
"东方":"dōng fāng","东西":"dōng xi",
"西方":"xī fāng","西瓜":"xī guā",
"回来":"huí lái","回家":"huí jiā",
"一片":"yí piàn","照片":"zhào piàn","片刻":"piàn kè",
"皮球":"pí qiú","皮肤":"pí fū","果皮":"guǒ pí",
"学生":"xué shēng","生活":"shēng huó","花生":"huā shēng",
"心里":"xīn lǐ","里面":"lǐ miàn",
"果皮":"guǒ pí","苹果":"píng guǒ","果汁":"guǒ zhī",
"几个":"jǐ gè","几天":"jǐ tiān","茶几":"chá jī",
"有用":"yǒu yòng",
"小鱼":"xiǎo yú","鱼儿":"yú ér","金鱼":"jīn yú",
"今年":"jīn nián","今后":"jīn hòu",
"正好":"zhèng hǎo","正在":"zhèng zài","正方":"zhèng fāng",
"下雨":"xià yǔ","雨水":"yǔ shuǐ","雨天":"yǔ tiān",
"两个":"liǎng gè","两天":"liǎng tiān","两人":"liǎng rén",
"瓜果":"guā guǒ","冬瓜":"dōng guā",
"衣服":"yī fu","上衣":"shàng yī","大衣":"dà yī",
"回来":"huí lái","上来":"shàng lái","出来":"chū lái",
"去年":"qù nián","过年":"guò nián",
"左右":"zuǒ yòu","左手":"zuǒ shǒu","左边":"zuǒ biān",
"右手":"yòu shǒu","右边":"yòu biān",
"石子":"shí zǐ","宝石":"bǎo shí",
"对不起":"duì bu qǐ","对面":"duì miàn",
"她们":"tā men","她的":"tā de",
// G1S2 words
"一个":"yī gè","一天":"yī tiān","一年":"yī nián","一起":"yī qǐ",
"万一":"wàn yī","千万":"qiān wàn","万里":"wàn lǐ","百万":"bǎi wàn",
"一百":"yī bǎi","百年":"bǎi nián","百花":"bǎi huā",
"说话":"shuō huà","听说":"tīng shuō","小说":"xiǎo shuō","说明":"shuō míng",
"朋友":"péng you","友好":"yǒu hǎo","友人":"yǒu rén",
"你好":"nǐ hǎo","你们":"nǐ men","你的":"nǐ de",
"绿色":"lǜ sè","绿地":"lǜ dì","绿叶":"lǜ yè",
"爷爷":"yé ye","大爷":"dà yé","老爷":"lǎo yé",
"亲人":"qīn rén","母亲":"mǔ qīn","父亲":"fù qīn","亲爱":"qīn ài",
"古代":"gǔ dài","古人":"gǔ rén","古老":"gǔ lǎo",
"到处":"dào chù","处理":"chǔ lǐ","好处":"hǎo chù",
"二月":"èr yuè","第二":"dì èr","二十":"èr shí",
"洗手":"xǐ shǒu","洗脸":"xǐ liǎn","洗衣":"xǐ yī",
"真好":"zhēn hǎo","认真":"rèn zhēn","真正":"zhēn zhèng",
"爸爸":"bà ba","爸妈":"bà mā",
"写字":"xiě zì","书写":"shū xiě","写作":"xiě zuò",
"好看":"hǎo kàn","看书":"kàn shū","看到":"kàn dào",
"笑话":"xiào hua","微笑":"wēi xiào","大笑":"dà xiào",
"妈妈":"mā ma","大妈":"dà mā",
"合作":"hé zuò","合同":"hé tóng","合力":"hé lì",
"女儿":"nǚ ér","女孩":"nǚ hái",
"早上":"zǎo shang","早安":"zǎo ān","早晨":"zǎo chén","早起":"zǎo qǐ",
"三个":"sān gè","三天":"sān tiān","三月":"sān yuè","三年":"sān nián",
"和平":"hé píng","和好":"hé hǎo","温和":"wēn hé",
"李子":"lǐ zi","姓李":"xìng lǐ","李花":"lǐ huā",
"听话":"tīng huà","好听":"hǎo tīng","听见":"tīng jiàn",
"远方":"yuǎn fāng","远处":"yuǎn chù","很远":"hěn yuǎn",
"以后":"yǐ hòu","以前":"yǐ qián","可以":"kě yǐ",
"主人":"zhǔ rén","主要":"zhǔ yào",
"先生":"xiān shēng","先后":"xiān hòu","先前":"xiān qián",
"起来":"qǐ lái","起床":"qǐ chuáng",
"同学":"tóng xué","一同":"yī tóng","同时":"tóng shí",
"人才":"rén cái","才能":"cái néng","刚才":"gāng cái",
"四季":"sì jì",
"蚂蚁":"mǎ yǐ",
"天空":"tiān kōng","空气":"kōng qì","空间":"kōng jiān",
"古诗":"gǔ shī","诗人":"shī rén","诗歌":"shī gē",
"黄色":"huáng sè","黄河":"huáng hé","金黄":"jīn huáng",
"是的":"shì de","不是":"bú shì","但是":"dàn shì",
"我们":"wǒ men","我的":"wǒ de","自我":"zì wǒ",
"过去":"guò qù","过来":"guò lái","过桥":"guò qiáo",
"往前":"wǎng qián","来往":"lái wǎng","以往":"yǐ wǎng",
"小河":"xiǎo hé","河边":"hé biān","黄河":"huáng hé",
"谁的":"shuí de","是谁":"shì shuí",
"凉快":"liáng kuai","凉水":"liáng shuǐ","着凉":"zháo liáng",
"花园":"huā yuán","园丁":"yuán dīng",
"笑脸":"xiào liǎn","脸上":"liǎn shàng",
"可是":"kě shì","可爱":"kě ài",
"办法":"bàn fǎ","方法":"fāng fǎ","法国":"fǎ guó",
"别人":"bié rén","分别":"fēn bié","特别":"tè bié",
"都是":"dōu shì","首都":"shǒu dū","都好":"dōu hǎo",
"再来":"zài lái","不再":"bù zài",
"做事":"zuò shì","做梦":"zuò mèng","做作业":"zuò zuò yè",
"沙子":"shā zi","沙发":"shā fā",
"竹子":"zhú zi","竹叶":"zhú yè","竹林":"zhú lín",
"水井":"shuǐ jǐng","井口":"jǐng kǒu","天井":"tiān jǐng",
"忘记":"wàng jì","难忘":"nán wàng","忘了":"wàng le",
"国王":"guó wáng","王子":"wáng zǐ","大王":"dà wáng",
"这个":"zhè gè","这里":"zhè lǐ","这样":"zhè yàng",
"宝贝":"bǎo bèi","贝壳":"bèi ké",
"爱心":"ài xīn","可爱":"kě ài","爱好":"ài hào",
"吹风":"chuī fēng","吹牛":"chuī niú",
"快乐":"kuài lè","音乐":"yīn yuè","欢乐":"huān lè",
"长短":"cháng duǎn","短小":"duǎn xiǎo","短文":"duǎn wén",
"平淡":"píng dàn","淡水":"dàn shuǐ","清淡":"qīng dàn",
"拉手":"lā shǒu","拉开":"lā kāi","拉车":"lā chē",
"活力":"huó lì","干活":"gàn huó",
"练习":"liàn xí","练字":"liàn zì","训练":"xùn liàn",
"学习":"xué xí","学校":"xué xiào",
"问好":"wèn hǎo","学问":"xué wèn","问题":"wèn tí",
"伙伴":"huǒ bàn","同伴":"tóng bàn","伴随":"bàn suí",
"分开":"fēn kāi","十分":"shí fēn",
"一位":"yī wèi","座位":"zuò wèi","各位":"gè wèi",
"北方":"běi fāng","北京":"běi jīng","东北":"dōng běi",
"湖水":"hú shuǐ","西湖":"xī hú","湖边":"hú biān",
"只有":"zhǐ yǒu","一只":"yī zhī","只是":"zhǐ shì",
"帮助":"bāng zhù","帮忙":"bāng máng",
"皮球":"pí qiú","地球":"dì qiú",
"桃子":"táo zi","桃花":"táo huā","桃树":"táo shù",
"兰花":"lán huā","玉兰":"yù lán",
"一座":"yī zuò","星座":"xīng zuò",
"名字":"míng zi","有名":"yǒu míng","名人":"míng rén",
"晚上":"wǎn shang","晚安":"wǎn ān","今晚":"jīn wǎn",
"有的":"yǒu de","没有":"méi yǒu","有名":"yǒu míng",
"什么":"shén me","怎么":"zěn me","多么":"duō me"
};

// 4. Serialize data
const CD_STR = 'const CHAR_DETAIL=' + JSON.stringify(CHAR_DETAIL) + ';';
const WP_STR = 'const WORD_PINYIN=' + JSON.stringify(WORD_PINYIN) + ';';

console.log('CHAR_DETAIL entries:', Object.keys(CHAR_DETAIL).length);
console.log('WORD_PINYIN entries:', Object.keys(WORD_PINYIN).length);

// 5. Build the HTML
const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>小学语文生字学习系统 Chinese Character Learning System</title>
<script src="https://cdn.jsdelivr.net/npm/hanzi-writer@3.5/dist/hanzi-writer.min.js"><\/script>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700;900&family=Noto+Sans+SC:wght@300;400;500;700&family=DM+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{
--ink:#1a1a2e;--ink2:#2d2d44;--ink3:#4a4a6a;--ink4:#8888a8;
--rice:#faf6f0;--rice2:#f0ebe3;--rice3:#e6dfd5;
--red:#c0392b;--red2:#e74c3c;--gold:#d4a017;--gold2:#f0c040;
--jade:#2e7d5e;--jade2:#3da87a;
--shadow:0 2px 12px rgba(0,0,0,0.08);--shadow2:0 4px 24px rgba(0,0,0,0.12);
--sidebar-w:290px;
--t1:#E30000;--t2:#02B31C;--t3:#1510F0;--t4:#8900BF;--t5:#808080}
html,body{height:100%;overflow:hidden;font-family:'Noto Sans SC','DM Sans',sans-serif;background:var(--rice);color:var(--ink)}
.en{font-family:'DM Sans','Noto Sans SC',sans-serif;color:var(--ink3);font-size:11px;font-weight:400;letter-spacing:0.3px}
.app{display:flex;height:100vh}
.sidebar{width:var(--sidebar-w);min-width:var(--sidebar-w);background:var(--ink);color:#fff;display:flex;flex-direction:column;overflow:hidden;z-index:10}
.sidebar-header{padding:18px 16px;background:rgba(0,0,0,0.25);border-bottom:2px solid var(--gold)}
.sidebar-header h1{font-family:'Noto Serif SC',serif;font-size:16px;font-weight:700;color:var(--gold2);letter-spacing:1px;line-height:1.4}
.sidebar-header .en{color:rgba(255,255,255,0.4);font-size:10px;display:block;margin-top:2px}
.grade-tabs{display:flex;flex-wrap:wrap;gap:3px;padding:10px 10px 6px;background:rgba(0,0,0,0.15)}
.grade-tab{font-size:11px;padding:4px 6px;border-radius:4px;cursor:pointer;background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.45);border:1px solid transparent;transition:all .2s;line-height:1.3;text-align:center}
.grade-tab .en{color:rgba(255,255,255,0.25);font-size:9px;display:block}
.grade-tab:hover{background:rgba(255,255,255,0.1);color:#fff}
.grade-tab.active{background:var(--red);color:#fff;border-color:var(--red2)}
.grade-tab.active .en{color:rgba(255,255,255,0.7)}
.sem-tabs{display:flex;gap:4px;padding:6px 10px;background:rgba(0,0,0,0.1)}
.sem-tab{flex:1;text-align:center;padding:5px;border-radius:4px;font-size:12px;cursor:pointer;color:rgba(255,255,255,0.4);transition:all .2s;line-height:1.3}
.sem-tab .en{color:rgba(255,255,255,0.2);font-size:9px;display:block}
.sem-tab:hover{color:#fff}
.sem-tab.active{background:var(--gold);color:var(--ink);font-weight:700}
.sem-tab.active .en{color:var(--ink3)}
.unit-list{flex:1;overflow-y:auto;padding:6px}
.unit-list::-webkit-scrollbar{width:3px}
.unit-list::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.12);border-radius:2px}
.unit-item{margin-bottom:2px}
.unit-name{font-size:11px;padding:7px 8px;border-radius:5px;cursor:pointer;color:rgba(255,255,255,0.55);transition:all .2s;display:flex;align-items:center;gap:5px;line-height:1.3}
.unit-name:hover{background:rgba(255,255,255,0.07);color:#fff}
.unit-name.active{background:rgba(192,57,43,0.3);color:var(--red2);font-weight:500}
.unit-name::before{content:'';width:3px;height:3px;border-radius:50%;background:currentColor;opacity:0.4;flex-shrink:0}
.unit-name.active::before{opacity:1;background:var(--red2)}
.unit-name .cnt{margin-left:auto;font-size:9px;opacity:0.4}
.unit-chars{display:none;flex-wrap:wrap;gap:3px;padding:3px 8px 6px 16px}
.unit-chars.open{display:flex}
.char-btn{width:34px;height:34px;border:1px solid rgba(255,255,255,0.08);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:17px;cursor:pointer;color:rgba(255,255,255,0.65);background:rgba(255,255,255,0.03);transition:all .2s;font-family:'Noto Serif SC',serif;position:relative}
.char-btn:hover{background:rgba(255,255,255,0.1);color:#fff;border-color:rgba(255,255,255,0.25)}
.char-btn.active{background:var(--red);color:#fff;border-color:var(--red2);font-weight:700;transform:scale(1.08)}
.char-btn.learned{border-color:rgba(61,168,122,0.5)}
.char-btn.learned::after{content:'\\2713';position:absolute;font-size:7px;bottom:0;right:1px;color:var(--jade2)}
.sidebar-stats{padding:10px 14px;background:rgba(0,0,0,0.2);border-top:1px solid rgba(255,255,255,0.05);font-size:10px;color:rgba(255,255,255,0.35);display:flex;justify-content:space-between}
.main{flex:1;display:flex;flex-direction:column;overflow:hidden}
.topbar{background:#fff;padding:10px 24px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--rice3);box-shadow:var(--shadow)}
.topbar-left{display:flex;align-items:center;gap:14px}
.breadcrumb{font-size:12px;color:var(--ink3);line-height:1.4}
.breadcrumb span{color:var(--red);font-weight:600}
.breadcrumb .en{display:block}
.topbar-right{display:flex;gap:6px}
.nav-btn{width:34px;height:34px;border:1px solid var(--rice3);border-radius:7px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:14px;background:#fff;color:var(--ink3);transition:all .2s}
.nav-btn:hover{background:var(--rice2);color:var(--ink)}
.content{flex:1;overflow-y:auto;padding:28px;display:flex;flex-direction:column;align-items:center}
.welcome{text-align:center;padding:60px 30px;max-width:600px}
.welcome h2{font-family:'Noto Serif SC',serif;font-size:28px;color:var(--ink);margin-bottom:4px}
.welcome .sub{font-family:'DM Sans',sans-serif;font-size:14px;color:var(--ink3);margin-bottom:20px;font-weight:300}
.welcome p{color:var(--ink3);line-height:1.8;font-size:13px}
.welcome .stats-row{display:flex;gap:20px;justify-content:center;margin-top:28px}
.stat-box{padding:14px 20px;background:#fff;border-radius:10px;box-shadow:var(--shadow);text-align:center;min-width:90px}
.stat-num{font-size:24px;font-weight:700;color:var(--red);font-family:'Noto Serif SC',serif}
.stat-lbl{font-size:10px;color:var(--ink3);margin-top:2px;line-height:1.3}
#charView{width:100%;max-width:860px}
.pinyin-display{text-align:center;margin-bottom:12px}
.pinyin-big{font-size:28px;font-weight:400;letter-spacing:3px}
.char-big{font-size:72px;font-family:'Noto Serif SC',serif;font-weight:900;color:var(--ink);line-height:1.1;margin:2px 0}
.char-meaning{font-family:'DM Sans',sans-serif;font-size:14px;color:var(--ink3);font-weight:400;font-style:italic;margin-top:4px}
.tts-btn{display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:12px;font-size:11px;cursor:pointer;background:var(--rice2);border:1px solid var(--rice3);color:var(--ink3);transition:all .2s;margin:2px}
.tts-btn:hover{background:var(--red);color:#fff;border-color:var(--red)}
.tts-btn:active{transform:scale(0.95)}
/* Tone colors */
.tone1{color:var(--t1)}.tone2{color:var(--t2)}.tone3{color:var(--t3)}.tone4{color:var(--t4)}.tone5{color:var(--t5)}
.pinyin-text{}
.pinyin-hidden .pinyin-text{visibility:hidden}
.pinyin-hidden .pinyin-text.revealed{visibility:visible}
/* Toolbar */
.toolbar{background:#fff;padding:6px 16px;display:flex;align-items:center;gap:6px;border-bottom:1px solid var(--rice3);flex-wrap:wrap}
.tool-btn{padding:5px 10px;border-radius:6px;font-size:11px;cursor:pointer;background:var(--rice);border:1px solid var(--rice3);color:var(--ink3);transition:all .2s;display:flex;align-items:center;gap:4px;white-space:nowrap}
.tool-btn:hover{background:var(--rice2);color:var(--ink)}
.tool-btn.active{background:var(--red);color:#fff;border-color:var(--red)}
.tool-sep{width:1px;height:20px;background:var(--rice3);margin:0 2px}
/* Search */
.search-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:200;justify-content:center;padding-top:80px}
.search-overlay.show{display:flex}
.search-box{background:#fff;border-radius:12px;width:90%;max-width:500px;height:fit-content;max-height:70vh;overflow:hidden;box-shadow:var(--shadow2);display:flex;flex-direction:column}
.search-input{padding:16px 20px;font-size:16px;border:none;border-bottom:1px solid var(--rice3);outline:none;font-family:'Noto Sans SC',sans-serif}
.search-results{overflow-y:auto;padding:8px;max-height:50vh}
.search-item{padding:10px 14px;border-radius:8px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:background .15s}
.search-item:hover{background:var(--rice2)}
.search-item .sc{font-size:28px;font-family:'Noto Serif SC',serif;font-weight:700;width:40px;text-align:center}
.search-item .si{flex:1}
.search-item .sp{font-size:12px;margin-bottom:2px}
.search-item .se{font-size:11px;color:var(--ink4)}
/* Info cards */
.char-info{margin-top:20px;width:100%}
.info-card{background:#fff;border-radius:10px;padding:18px 22px;box-shadow:var(--shadow);border:1px solid var(--rice3);margin-bottom:10px}
.info-section{margin-bottom:14px}
.info-section:last-child{margin-bottom:0}
.info-label{font-size:10px;text-transform:uppercase;letter-spacing:2px;color:var(--ink4);margin-bottom:8px;font-weight:500;display:flex;align-items:center;gap:5px}
.info-label::before{content:'';width:10px;height:2px;background:var(--red);border-radius:1px}
.info-label .en{text-transform:none;letter-spacing:0.5px}
/* Basic info grid */
.basic-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.basic-cell{text-align:center;padding:10px 8px;background:var(--rice);border-radius:8px;border:1px solid var(--rice3)}
.basic-cell .bc-val{font-size:18px;font-weight:700;color:var(--ink);font-family:'Noto Serif SC',serif}
.basic-cell .bc-label{font-size:9px;color:var(--ink4);margin-top:3px;line-height:1.3}
/* POS tags */
.pos-group{margin-bottom:8px}
.pos-tag{display:inline-block;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:600;background:var(--rice2);color:var(--ink3);margin-right:6px;font-family:'DM Sans',sans-serif}
.pos-en{font-size:13px;color:var(--ink2);margin-left:2px}
.pos-words{font-size:11px;color:var(--ink4);margin-top:3px;margin-left:4px}
/* Radical detail */
.radical-detail{padding:12px;background:var(--rice);border-radius:8px;border:1px solid var(--rice3)}
.radical-char{font-size:32px;font-family:'Noto Serif SC',serif;font-weight:700;color:var(--red)}
.radical-info{font-size:12px;color:var(--ink2);line-height:1.6;margin-top:4px}
.radical-chars{display:flex;flex-wrap:wrap;gap:4px;margin-top:8px}
.radical-chars .rc-chip{padding:4px 10px;background:#fff;border:1px solid var(--rice3);border-radius:5px;font-size:15px;font-family:'Noto Serif SC',serif;cursor:pointer;transition:all .15s}
.radical-chars .rc-chip:hover{border-color:var(--red);color:var(--red)}
.radical-chars .rc-chip.in-grade{border-color:var(--jade2);color:var(--jade)}
/* Etymology & mnemonics */
.etymology-box{padding:12px 14px;background:linear-gradient(135deg,#faf8f4,#f5f0e8);border-left:3px solid var(--gold);border-radius:0 8px 8px 0;margin-bottom:8px;line-height:1.7;font-size:13px;color:var(--ink2)}
.etymology-box .en{display:block;margin-top:2px}
.mnemonic-box{padding:12px 14px;background:linear-gradient(135deg,#f4f8fa,#e8f0f5);border-left:3px solid var(--jade);border-radius:0 8px 8px 0;line-height:1.7;font-size:13px;color:var(--ink2)}
.mnemonic-box .en{display:block;margin-top:2px}
/* Grids */
.char-display{display:flex;gap:28px;align-items:flex-start;flex-wrap:wrap;justify-content:center;margin-top:8px}
.grid-panel{display:flex;flex-direction:column;align-items:center;gap:8px}
.grid-label{font-size:12px;font-weight:500;color:var(--ink3);display:flex;flex-direction:column;align-items:center;gap:1px}
.grid-label .cn{display:flex;align-items:center;gap:5px}
.grid-label .icon{font-size:14px}
.grid-label .en{font-size:10px}
.mizi{position:relative;width:240px;height:240px;border:3px solid var(--red);background:#fff;box-shadow:var(--shadow2)}
.mizi-svg{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1}
.hw-target{position:absolute;top:0;left:0;width:100%;height:100%;z-index:2}
.grid-controls{display:flex;gap:5px;flex-wrap:wrap;justify-content:center}
.ctrl-btn{padding:6px 14px;border-radius:5px;font-size:11px;font-weight:500;cursor:pointer;border:1px solid var(--rice3);background:#fff;color:var(--ink2);transition:all .2s;line-height:1.3}
.ctrl-btn:hover{background:var(--rice2)}
.ctrl-btn:active{transform:scale(0.97)}
.ctrl-btn.primary{background:var(--red);color:#fff;border-color:var(--red)}
.ctrl-btn.primary:hover{background:var(--red2)}
.ctrl-btn.success{background:var(--jade);color:#fff;border-color:var(--jade)}
.ctrl-btn .en{font-size:9px;opacity:0.7}
.quiz-status{height:26px;display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;color:var(--ink3)}
.quiz-status .ok{font-weight:700;color:var(--jade)}
.quiz-status .err{color:var(--red)}
.stroke-dots{display:flex;gap:3px;align-items:center}
.stroke-dot{width:7px;height:7px;border-radius:50%;background:var(--rice3);transition:all .3s}
.stroke-dot.done{background:var(--jade2)}
.stroke-dot.fail{background:var(--red2)}
.stroke-dot.cur{background:var(--gold);transform:scale(1.3)}
.speed-ctrl{display:flex;align-items:center;gap:6px;font-size:10px;color:var(--ink4)}
.speed-ctrl input[type=range]{width:70px;accent-color:var(--red)}
/* Word chips */
.word-chips{display:flex;flex-wrap:wrap;gap:6px}
.word-chip{padding:8px 14px;background:var(--rice);border:1px solid var(--rice3);border-radius:7px;font-size:14px;color:var(--ink2);transition:all .2s;cursor:default;font-family:'Noto Serif SC',serif;line-height:1.4;text-align:center}
.word-chip .wp{font-size:10px;display:block;margin-top:1px}
.word-chip .we{font-family:'DM Sans',sans-serif;font-size:10px;color:var(--ink4);display:block;font-weight:400;margin-top:1px}
.word-chip:hover{background:var(--rice2);border-color:var(--gold)}
/* Sentences */
.sentence-box{padding:12px 16px;background:linear-gradient(135deg,#faf8f4,#f5f0e8);border-left:3px solid var(--gold);border-radius:0 7px 7px 0;line-height:1.8;margin-bottom:6px}
.sentence-box .cn-sent{font-size:14px;color:var(--ink2)}
.sentence-box .en-sent{font-family:'DM Sans',sans-serif;font-size:12px;color:var(--ink4);font-style:italic;margin-top:2px}
.sent-nav{display:flex;align-items:center;gap:8px;margin-top:6px;justify-content:center}
.sent-dot{width:8px;height:8px;border-radius:50%;background:var(--rice3);cursor:pointer;transition:all .2s}
.sent-dot.active{background:var(--gold)}
/* Confusables */
.confuse-pair{display:flex;gap:12px;padding:10px;background:var(--rice);border-radius:8px;border:1px solid var(--rice3);margin-bottom:6px;align-items:center}
.confuse-char{font-size:28px;font-family:'Noto Serif SC',serif;font-weight:700;text-align:center;min-width:44px}
.confuse-vs{font-size:16px;color:var(--ink4);font-weight:300}
.confuse-hint{font-size:12px;color:var(--ink2);line-height:1.5;flex:1}
.confuse-hint .en{display:block}
/* Related chars */
.related-chars{display:flex;flex-wrap:wrap;gap:5px}
.related-char{width:38px;height:38px;border:1px solid var(--rice3);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;background:#fff;color:var(--ink2);transition:all .2s;font-family:'Noto Serif SC',serif;box-shadow:0 1px 3px rgba(0,0,0,0.04)}
.related-char:hover{border-color:var(--red);color:var(--red);transform:translateY(-1px);box-shadow:var(--shadow)}
/* Quick nav */
.char-quick-nav{display:flex;flex-wrap:wrap;gap:5px;justify-content:center;margin-top:16px}
.qnav-btn{width:38px;height:38px;border:1px solid var(--rice3);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;background:#fff;color:var(--ink2);transition:all .2s;font-family:'Noto Serif SC',serif;box-shadow:0 1px 3px rgba(0,0,0,0.04)}
.qnav-btn:hover{border-color:var(--red);color:var(--red);transform:translateY(-1px);box-shadow:var(--shadow)}
.qnav-btn.active{background:var(--red);color:#fff;border-color:var(--red)}
/* Fav btn */
.fav-btn{font-size:20px;cursor:pointer;background:none;border:none;color:var(--rice3);transition:all .2s;padding:4px}
.fav-btn:hover,.fav-btn.faved{color:var(--gold2)}
/* Review banner */
.review-banner{display:none;padding:10px 20px;background:linear-gradient(135deg,#fff3cd,#ffeaa7);border-bottom:1px solid #f0d060;font-size:12px;color:#856404;align-items:center;gap:8px;cursor:pointer}
.review-banner:hover{background:linear-gradient(135deg,#ffeaa7,#ffd93d)}
.review-banner.show{display:flex}
/* Dark mode */
body.dark{--rice:#1a1a2e;--rice2:#252540;--rice3:#353560;--ink:#e8e8f0;--ink2:#d0d0e0;--ink3:#a0a0c0;--ink4:#707090;--shadow:0 2px 12px rgba(0,0,0,0.3);--shadow2:0 4px 24px rgba(0,0,0,0.4)}
body.dark .sidebar{background:#0d0d1a}
body.dark .topbar,body.dark .toolbar,body.dark .info-card,body.dark .search-box{background:#252540}
body.dark .mizi{background:#1e1e35;border-color:var(--red)}
body.dark .ctrl-btn{background:#252540;color:var(--ink2);border-color:var(--rice3)}
body.dark .word-chip{background:#252540}
body.dark .search-input{background:#252540;color:var(--ink)}
body.dark .basic-cell,.dark .radical-detail{background:#252540}
/* Mobile */
@media(max-width:900px){
.sidebar{position:fixed;left:-100%;width:85%;max-width:300px;transition:left .3s;z-index:100}
.sidebar.open{left:0}
.overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:99}
.overlay.show{display:block}
.char-display{gap:16px}
.mizi{width:200px;height:200px}
.content{padding:16px}
.menu-toggle{display:flex!important}
.toolbar{padding:4px 10px}
.basic-grid{grid-template-columns:repeat(3,1fr);gap:4px}
}
.menu-toggle{display:none;width:34px;height:34px;border:1px solid var(--rice3);border-radius:7px;align-items:center;justify-content:center;cursor:pointer;font-size:16px;background:#fff}
@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.fade-in{animation:fadeIn .35s ease}
@media print{.sidebar,.topbar,.toolbar,.grid-controls,.quiz-status,.stroke-dots,.speed-ctrl,.char-quick-nav,.search-overlay,.review-banner,.tts-btn,.fav-btn,.nav-btn,.menu-toggle,.overlay{display:none!important}.app{display:block}.main{overflow:visible}.content{overflow:visible;padding:20px}.mizi{border:2px solid #ccc;box-shadow:none}}
</style>
</head>
<body>
<div class="app">
<div class="overlay" id="overlay" onclick="toggleSidebar()"></div>
<aside class="sidebar" id="sidebar">
<div class="sidebar-header">
<h1>📖 小学语文生字<span class="en">Chinese Character Learning System · Grades 1-6</span></h1>
</div>
<div class="grade-tabs" id="gradeTabs"></div>
<div class="sem-tabs" id="semTabs"></div>
<div class="unit-list" id="unitList"></div>
<div class="sidebar-stats">
<span id="statsText">共 Total 2512 字 chars</span>
<span id="progressText">已学 Learned: 0</span>
</div>
</aside>
<div class="main">
<div class="topbar">
<div class="topbar-left">
<div class="menu-toggle" onclick="toggleSidebar()">☰</div>
<div class="breadcrumb" id="breadcrumb">请从左侧选择年级和课文<span class="en">Select grade and lesson from the left panel</span></div>
</div>
<div class="topbar-right">
<div class="nav-btn" onclick="prevChar()" title="上一字 Previous">◀</div>
<div class="nav-btn" onclick="nextChar()" title="下一字 Next">▶</div>
</div>
</div>
<div class="toolbar" id="toolbar">
<button class="tool-btn" onclick="toggleSearch()" title="搜索">🔍 搜索 <span class="en">Search</span></button>
<button class="tool-btn" id="pinyinToggle" onclick="togglePinyin()" title="拼音显隐">🔤 拼音 <span class="en">Pinyin</span></button>
<div class="tool-sep"></div>
<button class="tool-btn" id="ttsVoiceBtn" onclick="toggleTTSVoice()" title="切换声音">🔊 晶晶 <span class="en">JingJing</span></button>
<div class="tool-sep"></div>
<button class="tool-btn" id="darkBtn" onclick="toggleDark()" title="暗色模式">🌙 <span class="en">Dark</span></button>
</div>
<div class="review-banner" id="reviewBanner" onclick="startReview()">
<span>📚</span><span id="reviewText">今天有 <b>0</b> 个字需要复习 | You have <b>0</b> chars to review today</span>
</div>
<div class="content" id="content">
<div class="welcome" id="welcome">
<h2>小学语文生字学习系统</h2>
<div class="sub">Chinese Character Learning System</div>
<p>覆盖人教版小学一至六年级全部生字<br><span class="en">Complete character library for PEP Chinese textbook, Grades 1-6</span><br>笔顺演示 · 手写练习 · 拼音 · 组词 · 例句<br><span class="en">Stroke animation · Writing practice · Pinyin · Words · Sentences</span></p>
<div class="stats-row">
<div class="stat-box"><div class="stat-num">2512</div><div class="stat-lbl">生字<br><span class="en">Characters</span></div></div>
<div class="stat-box"><div class="stat-num">12</div><div class="stat-lbl">学期<br><span class="en">Semesters</span></div></div>
<div class="stat-box"><div class="stat-num">6</div><div class="stat-lbl">年级<br><span class="en">Grades</span></div></div>
</div>
</div>
<div id="charView" style="display:none">
<!-- Pinyin + Char + Meaning -->
<div class="pinyin-display">
<div class="pinyin-big pinyin-text" id="pinyinText"></div>
<div style="display:flex;align-items:center;justify-content:center;gap:8px">
<div class="char-big" id="charBig"></div>
<button class="fav-btn" id="favBtn" onclick="toggleFav()" title="收藏 Favorite">☆</button>
</div>
<div class="char-meaning" id="charMeaning"></div>
<div style="margin-top:6px" id="ttsButtons"></div>
</div>
<!-- POS Detail -->
<div class="info-card" id="posCard" style="display:none">
<div class="info-section">
<div class="info-label">词性与释义 <span class="en">Parts of Speech & Meaning</span></div>
<div id="posContent"></div>
</div>
</div>
<!-- Basic Info -->
<div class="info-card" id="basicCard" style="display:none">
<div class="info-section">
<div class="info-label">📋 基本信息 <span class="en">Basic Info</span></div>
<div class="basic-grid" id="basicGrid"></div>
</div>
</div>
<!-- Radical Detail -->
<div class="info-card" id="radicalCard" style="display:none">
<div class="info-section">
<div class="info-label">🔤 偏旁部首详解 <span class="en">Radical Details</span></div>
<div class="radical-detail" id="radicalDetail"></div>
</div>
</div>
<!-- Etymology & Mnemonics -->
<div class="info-card" id="etymCard" style="display:none">
<div class="info-section">
<div class="info-label">💡 字源记忆 <span class="en">Etymology & Memory Aid</span></div>
<div id="etymContent"></div>
</div>
</div>
<!-- Stroke Demo + Writing Practice -->
<div class="char-display">
<div class="grid-panel">
<div class="grid-label"><span class="cn"><span class="icon">🖊</span> 笔顺演示</span><span class="en">Stroke Order Demo</span></div>
<div class="mizi" id="demoC">
<svg class="mizi-svg" viewBox="0 0 240 240"><line x1="0" y1="120" x2="240" y2="120" stroke="rgba(180,50,50,0.15)" stroke-width="1" stroke-dasharray="6,4"/><line x1="120" y1="0" x2="120" y2="240" stroke="rgba(180,50,50,0.15)" stroke-width="1" stroke-dasharray="6,4"/><line x1="0" y1="0" x2="240" y2="240" stroke="rgba(180,50,50,0.08)" stroke-width="1" stroke-dasharray="6,4"/><line x1="240" y1="0" x2="0" y2="240" stroke="rgba(180,50,50,0.08)" stroke-width="1" stroke-dasharray="6,4"/></svg>
<div class="hw-target" id="demoT"></div>
</div>
<div class="grid-controls">
<button class="ctrl-btn primary" onclick="playAnim()">▶ 播放 <span class="en">Play</span></button>
<button class="ctrl-btn" onclick="playStep()">⏭ 逐笔 <span class="en">Step</span></button>
</div>
<div class="speed-ctrl"><span>速度 Speed</span><input type="range" id="speedSlider" min="0.3" max="3" step="0.1" value="1"><span id="speedLbl">1x</span></div>
</div>
<div class="grid-panel">
<div class="grid-label"><span class="cn"><span class="icon">✍</span> 手写练习</span><span class="en">Writing Practice</span></div>
<div class="mizi" id="quizC">
<svg class="mizi-svg" viewBox="0 0 240 240"><line x1="0" y1="120" x2="240" y2="120" stroke="rgba(180,50,50,0.15)" stroke-width="1" stroke-dasharray="6,4"/><line x1="120" y1="0" x2="120" y2="240" stroke="rgba(180,50,50,0.15)" stroke-width="1" stroke-dasharray="6,4"/><line x1="0" y1="0" x2="240" y2="240" stroke="rgba(180,50,50,0.08)" stroke-width="1" stroke-dasharray="6,4"/><line x1="240" y1="0" x2="0" y2="240" stroke="rgba(180,50,50,0.08)" stroke-width="1" stroke-dasharray="6,4"/></svg>
<div class="hw-target" id="quizT"></div>
</div>
<div class="grid-controls">
<button class="ctrl-btn success" onclick="startQuiz()">✍ 开始 <span class="en">Start</span></button>
<button class="ctrl-btn" onclick="resetQuiz()">↺ 重来 <span class="en">Reset</span></button>
</div>
<div class="quiz-status" id="quizStatus"><span>点击"开始"练习 <span class="en">Click Start to practice</span></span></div>
<div class="stroke-dots" id="strokeDots"></div>
</div>
</div>
<!-- Word Combinations -->
<div class="char-info">
<div class="info-card">
<div class="info-section">
<div class="info-label">📝 组词 <span class="en">Word Combinations</span></div>
<div class="word-chips" id="wordChips"></div>
</div>
</div>
<!-- Sentences -->
<div class="info-card" id="sentCard">
<div class="info-section" id="sentSec">
<div class="info-label">💬 例句 <span class="en">Example Sentences</span></div>
<div id="sentContainer"></div>
</div>
</div>
<!-- Confusables -->
<div class="info-card" id="confuseCard" style="display:none">
<div class="info-section">
<div class="info-label">⚠ 易混字 <span class="en">Confusable Characters</span></div>
<div id="confuseContent"></div>
</div>
</div>
<!-- Related chars -->
<div class="info-card" id="relatedCard" style="display:none">
<div class="info-section">
<div class="info-label">🔗 关联汉字 <span class="en">Related Characters</span></div>
<div class="related-chars" id="relatedChars"></div>
</div>
</div>
</div>
<div class="char-quick-nav" id="quickNav"></div>
</div>
</div>
</div>
</div>
<!-- Search overlay -->
<div class="search-overlay" id="searchOverlay" onclick="if(event.target===this)toggleSearch()">
<div class="search-box">
<input class="search-input" id="searchInput" placeholder="输入汉字、拼音或英文 Search by character, pinyin or English..." oninput="doSearch(this.value)">
<div class="search-results" id="searchResults"></div>
</div>
</div>

<script>
${RAW_DATA_LINE}
${NAV_TREE_LINE}
${CHAR_EN_LINE}
${WORD_EN_LINE}
${CD_STR}
${WP_STR}

const GRADE_CN={"1":"一","2":"二","3":"三","4":"四","5":"五","6":"六"};
const GRADE_LABELS={"1-1":"一年级上册","1-2":"一年级下册","2-1":"二年级上册","2-2":"二年级下册","3-1":"三年级上册","3-2":"三年级下册","4-1":"四年级上册","4-2":"四年级下册","5-1":"五年级上册","5-2":"五年级下册","6-1":"六年级上册","6-2":"六年级下册"};
const GRADE_LABELS_EN={"1-1":"Grade 1 Sem.1","1-2":"Grade 1 Sem.2","2-1":"Grade 2 Sem.1","2-2":"Grade 2 Sem.2","3-1":"Grade 3 Sem.1","3-2":"Grade 3 Sem.2","4-1":"Grade 4 Sem.1","4-2":"Grade 4 Sem.2","5-1":"Grade 5 Sem.1","5-2":"Grade 5 Sem.2","6-1":"Grade 6 Sem.1","6-2":"Grade 6 Sem.2"};

let S={g:1,s:1,cur:null,idx:-1,uChars:[],allC:[],
  learned:new Set(JSON.parse(localStorage.getItem('lcv2')||'[]')),
  favs:new Set(JSON.parse(localStorage.getItem('favs')||'[]')),
  srs:JSON.parse(localStorage.getItem('srs')||'{}'),
  pinyinVisible:true,ttsVoice:'female'};
let dW=null,qW=null,stI=0,stepMode=false;

/* TTS */
let ttsVoices=[];
function loadVoices(){ttsVoices=speechSynthesis.getVoices().filter(v=>v.lang.startsWith('zh'));}
speechSynthesis.onvoiceschanged=loadVoices;
loadVoices();
function speak(text,rate){
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);u.lang='zh-CN';u.rate=rate||0.8;
  if(ttsVoices.length>0){
    const pref=S.ttsVoice==='female'?['xiaoxiao','female','ting']:['yunyang','male','kangkang'];
    let v=ttsVoices.find(x=>pref.some(p=>x.name.toLowerCase().includes(p)))||ttsVoices[0];
    u.voice=v;
  }
  speechSynthesis.speak(u);
}
function toggleTTSVoice(){
  S.ttsVoice=S.ttsVoice==='female'?'male':'female';
  const btn=document.getElementById('ttsVoiceBtn');
  btn.innerHTML=S.ttsVoice==='female'?'🔊 晶晶 <span class="en">JingJing</span>':'🔊 亮亮 <span class="en">LiangLiang</span>';
}

/* Tone color */
function toneClass(t){return 'tone'+(t||5);}
function pinyinHTML(py,t){return '<span class="pinyin-text '+toneClass(t)+'">'+py+'</span>';}
function wordPinyinHTML(word){
  const py=WORD_PINYIN[word];if(!py)return '';
  return '<span class="pinyin-text wp">'+py+'</span>';
}

/* Init */
function init(){renderGT();selG(1);
document.getElementById('speedSlider').addEventListener('input',e=>{document.getElementById('speedLbl').textContent=parseFloat(e.target.value).toFixed(1)+'x'});
checkReview();}

function renderGT(){const c=document.getElementById('gradeTabs');c.innerHTML='';
[1,2,3,4,5,6].forEach(g=>{const t=document.createElement('div');t.className='grade-tab'+(g===S.g?' active':'');
t.innerHTML=GRADE_CN[g]+'年级<span class="en">Grade '+g+'</span>';
t.onclick=()=>selG(g);c.appendChild(t);});}

function selG(g){S.g=g;renderGT();renderST();selS(1);}

function renderST(){const c=document.getElementById('semTabs');c.innerHTML='';
[1,2].forEach(s=>{const t=document.createElement('div');t.className='sem-tab'+(s===S.s?' active':'');
t.innerHTML=(s===1?'上册':'下册')+'<span class="en">Sem. '+s+'</span>';
t.onclick=()=>selS(s);c.appendChild(t);});}

function selS(s){S.s=s;renderST();renderUL();
S.allC=RAW_DATA.filter(d=>d.g===S.g&&d.s===S.s);}

function renderUL(){const c=document.getElementById('unitList');c.innerHTML='';
const k=S.g+'-'+S.s;const units=NAV_TREE[k]||[];
units.forEach(u=>{const item=document.createElement('div');item.className='unit-item';
const nm=document.createElement('div');nm.className='unit-name';
let dn=u.name||'其他 Other';if(dn.length>18)dn=dn.substring(0,18)+'…';
nm.innerHTML=dn+'<span class="cnt">'+u.chars.length+'</span>';
nm.onclick=()=>togU(item,u);
const cg=document.createElement('div');cg.className='unit-chars';
u.chars.forEach((ch,ci)=>{const b=document.createElement('div');
b.className='char-btn'+(S.learned.has(ch)?' learned':'');
b.textContent=ch;b.onclick=e=>{e.stopPropagation();selCU(u,ci)};
cg.appendChild(b);});
item.appendChild(nm);item.appendChild(cg);c.appendChild(item);});}

function togU(item,u){const n=item.querySelector('.unit-name'),cg=item.querySelector('.unit-chars');
const w=cg.classList.contains('open');
document.querySelectorAll('.unit-chars').forEach(e=>e.classList.remove('open'));
document.querySelectorAll('.unit-name').forEach(e=>e.classList.remove('active'));
if(!w){cg.classList.add('open');n.classList.add('active');S.uChars=u.chars;}}

function selCU(u,i){S.uChars=u.chars;const ch=u.chars[i];
const cd=RAW_DATA.find(d=>d.c===ch&&d.g===S.g&&d.s===S.s&&d.u===u.name);
if(cd){S.idx=i;loadC(cd);}
document.querySelectorAll('.char-btn').forEach(b=>b.classList.toggle('active',b.textContent===ch));}

function loadC(cd){S.cur=cd;
document.getElementById('welcome').style.display='none';
const v=document.getElementById('charView');v.style.display='';
v.classList.remove('fade-in');void v.offsetWidth;v.classList.add('fade-in');
const k=cd.g+'-'+cd.s;
const gl=GRADE_LABELS[k]||'';const gle=GRADE_LABELS_EN[k]||'';
const un=cd.u?(cd.u.length>14?cd.u.substring(0,14)+'…':cd.u):'';
document.getElementById('breadcrumb').innerHTML=gl+' · '+un+' · <span>'+cd.c+'</span><span class="en">'+gle+'</span>';

const detail=CHAR_DETAIL[cd.c];
const py=detail?detail.p:(cd.p||'—');
const tone=detail?detail.t:5;
document.getElementById('pinyinText').innerHTML=pinyinHTML(py,tone);
document.getElementById('pinyinText').className='pinyin-big pinyin-text '+toneClass(tone);
document.getElementById('charBig').textContent=cd.c;
document.getElementById('charMeaning').textContent=CHAR_EN[cd.c]||'';

// Fav
document.getElementById('favBtn').textContent=S.favs.has(cd.c)?'★':'☆';
document.getElementById('favBtn').classList.toggle('faved',S.favs.has(cd.c));

// TTS buttons
const ttsDiv=document.getElementById('ttsButtons');
ttsDiv.innerHTML='<button class="tts-btn" onclick="speak(\\''+cd.c+'\\',0.6)">🔊 读字 <span class="en">Char</span></button>';
if(cd.w&&cd.w.length>0){ttsDiv.innerHTML+='<button class="tts-btn" onclick="speak(\\''+cd.w[0]+'\\',0.7)">🔊 读词 <span class="en">Word</span></button>';}

// Basic Info card
if(detail){
  document.getElementById('basicCard').style.display='';
  const stCn=detail.st?detail.st.c:'—';const stEn=detail.st?detail.st.e:'—';
  document.getElementById('basicGrid').innerHTML=
    '<div class="basic-cell"><div class="bc-val">'+detail.sk+'画</div><div class="bc-label">笔画数<br><span class="en">'+detail.sk+' strokes</span></div></div>'+
    '<div class="basic-cell"><div class="bc-val">'+detail.r+'</div><div class="bc-label">偏旁部首<br><span class="en pinyin-text '+toneClass(detail.t)+'">'+detail.rp+'</span></div></div>'+
    '<div class="basic-cell"><div class="bc-val" style="font-size:14px">'+stCn+'</div><div class="bc-label"><span class="en">'+stEn+'</span></div></div>';

  // Radical
  document.getElementById('radicalCard').style.display='';
  let radHtml='<div style="display:flex;align-items:center;gap:12px"><span class="radical-char">'+detail.r+'</span><div class="radical-info"><b>'+detail.r+'</b> ('+detail.rp+')<br>'+detail.rm.c+'<br><span class="en">'+detail.rm.e+'</span></div></div>';
  // Find same-radical chars
  const sameRad=Object.entries(CHAR_DETAIL).filter(([c,d])=>d.r===detail.r&&c!==cd.c).map(([c])=>c);
  if(sameRad.length>0){
    radHtml+='<div style="margin-top:8px;font-size:11px;color:var(--ink4)">同部首字 Same radical:</div><div class="radical-chars">';
    sameRad.forEach(c=>{radHtml+='<span class="rc-chip in-grade" onclick="jumpToChar(\\''+c+'\\')">'+c+'</span>';});
    radHtml+='</div>';
  }
  document.getElementById('radicalDetail').innerHTML=radHtml;

  // Etymology
  document.getElementById('etymCard').style.display='';
  document.getElementById('etymContent').innerHTML=
    '<div class="etymology-box">📖 '+detail.et.c+'<span class="en">'+detail.et.e+'</span></div>'+
    '<div class="mnemonic-box">🧠 '+detail.mn.c+'<span class="en">'+detail.mn.e+'</span></div>';

  // Confusables
  if(detail.cf&&detail.cf.length>0){
    document.getElementById('confuseCard').style.display='';
    let cfHtml='';
    detail.cf.forEach(cf=>{
      cfHtml+='<div class="confuse-pair"><span class="confuse-char">'+cd.c+'</span><span class="confuse-vs">vs</span><span class="confuse-char" style="cursor:pointer" onclick="jumpToChar(\\''+cf.v+'\\')">'+cf.v+'</span><div class="confuse-hint">'+cf.h.c+'<span class="en">'+cf.h.e+'</span></div></div>';
    });
    document.getElementById('confuseContent').innerHTML=cfHtml;
  } else {document.getElementById('confuseCard').style.display='none';}

  // Related
  if(detail.rc&&detail.rc.length>0){
    document.getElementById('relatedCard').style.display='';
    let rcHtml='';
    detail.rc.forEach(c=>{rcHtml+='<div class="related-char" onclick="jumpToChar(\\''+c+'\\')">'+c+'</div>';});
    document.getElementById('relatedChars').innerHTML=rcHtml;
  } else {document.getElementById('relatedCard').style.display='none';}

  // Sentences
  if(detail.ss&&detail.ss.length>0){
    document.getElementById('sentCard').style.display='';
    let sentHtml='';
    detail.ss.forEach((s,i)=>{
      sentHtml+='<div class="sentence-box"><div class="cn-sent">'+s.c+' <button class="tts-btn" onclick="speak(\\''+s.c.replace(/'/g,"\\\\'")+'\\')" style="font-size:10px;padding:2px 6px">🔊</button></div><div class="en-sent">'+s.e+'</div></div>';
    });
    document.getElementById('sentContainer').innerHTML=sentHtml;
  }
} else {
  document.getElementById('basicCard').style.display='none';
  document.getElementById('radicalCard').style.display='none';
  document.getElementById('etymCard').style.display='none';
  document.getElementById('confuseCard').style.display='none';
  document.getElementById('relatedCard').style.display='none';
  // Fallback sentences
  const ss=document.getElementById('sentCard'),sc=document.getElementById('sentContainer');
  if(cd.w&&cd.w.length>0){ss.style.display='';
    const s=genSent(cd.c,cd.w);sc.innerHTML='<div class="sentence-box"><div class="cn-sent">'+s.cn+'</div><div class="en-sent">'+s.en+'</div></div>';
  } else {ss.style.display='none';}
}

// POS card - show for detail chars
document.getElementById('posCard').style.display='none';
// (POS data to be added in future phases)

// Words
const wc=document.getElementById('wordChips');wc.innerHTML='';
(cd.w||[]).forEach(w=>{const ch=document.createElement('div');ch.className='word-chip';
const we=WORD_EN[w]||'';const wp=WORD_PINYIN[w]||'';
let inner=w;
if(wp)inner+='<span class="wp pinyin-text">'+wp+'</span>';
if(we)inner+='<span class="we">'+we+'</span>';
ch.innerHTML=inner;
ch.onclick=()=>speak(w,0.7);
wc.appendChild(ch);});

renderQN();initW(cd.c);
document.getElementById('quizStatus').innerHTML='<span>点击"开始"练习 <span class="en">Click Start to practice</span></span>';
document.getElementById('strokeDots').innerHTML='';

// SRS update
updateSRS(cd.c);
document.getElementById('content').scrollTo({top:0,behavior:'smooth'});
}

/* Fallback sentence generator for non-enriched chars */
function genSent(ch,ws){
const w=ws[0]||ch;const we=WORD_EN[w]||CHAR_EN[ch]||'';
const ce=CHAR_EN[ch]||'';
const pairs=[
{cn:'我学会了写"'+w+'"。',en:'I learned to write "'+w+'"'+(we?' ('+we+').':'.')},
{cn:'老师教我们"'+w+'"这个词。',en:'The teacher taught us the word "'+w+'"'+(we?' ('+we+').':'.')},
{cn:'请用"'+w+'"造一个句子。',en:'Please make a sentence with "'+w+'"'+(we?' ('+we+').':'.')},
{cn:'"'+w+'"是一个常用词语。',en:'"'+w+'"'+(we?' ('+we+')':'')+' is a common word.'},
];
const map={
'大':{cn:'大人们在公园里散步。',en:'Adults are walking in the park.'},
'小':{cn:'小鸟在树上唱歌。',en:'A little bird is singing in the tree.'},
'人':{cn:'人们在广场上跳舞。',en:'People are dancing in the square.'},
'天':{cn:'今天天气真好！',en:'The weather is so nice today!'},
'水':{cn:'河水清清的，缓缓地流着。',en:'The river water flows gently and clear.'},
'山':{cn:'远处的大山真壮观。',en:'The distant mountains are magnificent.'},
'花':{cn:'花朵在阳光下盛开。',en:'Flowers bloom under the sunshine.'},
'日':{cn:'今天是个好日子。',en:'Today is a good day.'},
'月':{cn:'月光洒在大地上。',en:'Moonlight shines upon the earth.'},
'火':{cn:'火车开走了。',en:'The train has left.'},
'木':{cn:'这棵大树是木头做的桥。',en:'This bridge is made of wood.'},
'云':{cn:'天上飘着白云。',en:'White clouds float in the sky.'},
'风':{cn:'春天的风很暖和。',en:'The spring wind is warm.'},
'雨':{cn:'下雨了，快回家！',en:"It's raining, let's go home!"},
'石':{cn:'路边有很多石头。',en:'There are many stones by the road.'},
'田':{cn:'农民在田里干活。',en:'Farmers work in the fields.'},
'鸟':{cn:'小鸟飞向蓝天。',en:'The bird flies toward the blue sky.'},
};
if(map[ch])return map[ch];
const i=Math.abs(ch.charCodeAt(0))%pairs.length;return pairs[i];}

/* Stroke animation */
function initW(ch){
document.getElementById('demoT').innerHTML='';document.getElementById('quizT').innerHTML='';
dW=null;qW=null;stI=0;stepMode=false;
try{dW=HanziWriter.create('demoT',ch,{width:240,height:240,padding:18,showOutline:true,showCharacter:true,strokeColor:'#1a1a2e',outlineColor:'#ddd8d0',strokeAnimationSpeed:1,delayBetweenStrokes:300,radicalColor:'#c0392b'});}catch(e){}
try{qW=HanziWriter.create('quizT',ch,{width:240,height:240,padding:18,showOutline:true,showCharacter:false,showHintAfterMisses:3,highlightOnComplete:true,strokeColor:'#2e7d5e',outlineColor:'#e6dfd5',highlightColor:'#d4a017',highlightCompleteColor:'#2e7d5e',drawingColor:'#2e7d5e',drawingWidth:14});}catch(e){}}

function playAnim(){if(!dW)return;const sp=parseFloat(document.getElementById('speedSlider').value);
dW.setCharacter(S.cur.c);
setTimeout(()=>{dW.hideCharacter();setTimeout(()=>{dW.animateCharacter({strokeAnimationSpeed:sp,delayBetweenStrokes:300/sp})},150)},80);}

/* Fixed step-by-step: click once per stroke */
function playStep(){if(!dW)return;
if(!stepMode){stepMode=true;stI=0;dW.hideCharacter();}
if(stI<100){
  const sp=parseFloat(document.getElementById('speedSlider').value);
  dW.animateStroke(stI,{strokeAnimationSpeed:sp*0.8,onComplete:()=>{stI++;
    if(stI>=dW._character?dW._character.strokes.length:99){stepMode=false;}}});
}}

/* Quiz */
function startQuiz(){if(!qW)return;
const st=document.getElementById('quizStatus'),dt=document.getElementById('strokeDots');
let mis=0;st.innerHTML='<span>请按正确笔顺书写… <span class="en">Write in correct stroke order…</span></span>';dt.innerHTML='';
qW.quiz({
onMistake:(d)=>{mis++;st.innerHTML='<span>笔画 Stroke '+(d.strokeNum+1)+': </span><span class="err">笔顺不对 Wrong order</span>';
const ds=dt.querySelectorAll('.stroke-dot');if(ds[d.strokeNum]){ds[d.strokeNum].classList.add('fail');setTimeout(()=>ds[d.strokeNum].classList.remove('fail'),500)}},
onCorrectStroke:(d)=>{st.innerHTML='<span>✓ 笔画 Stroke '+(d.strokeNum+1)+'/'+d.totalStrokes+'</span> <span class="ok">正确 Correct!</span>';
if(!dt.children.length||dt.querySelector('.en')){dt.innerHTML='';for(let i=0;i<d.totalStrokes;i++){const dot=document.createElement('div');dot.className='stroke-dot'+(i<=d.strokeNum?' done':'')+(i===d.strokeNum+1?' cur':'');dt.appendChild(dot)}}else{dt.querySelectorAll('.stroke-dot').forEach((x,i)=>{x.className='stroke-dot'+(i<=d.strokeNum?' done':'')+(i===d.strokeNum+1?' cur':'')})}},
onComplete:()=>{const p=mis===0;
st.innerHTML=p?'<span class="ok">🎉 完美 Perfect! 全部正确 All correct!</span>':'<span>完成 Done! 错误 Mistakes: <span class="err">'+mis+'</span></span>';
dt.querySelectorAll('.stroke-dot').forEach(d=>d.className='stroke-dot done');
if(S.cur){S.learned.add(S.cur.c);localStorage.setItem('lcv2',JSON.stringify([...S.learned]));updStats();
document.querySelectorAll('.char-btn').forEach(b=>{if(b.textContent===S.cur.c)b.classList.add('learned')})}}});
dt.innerHTML='<span class="en" style="font-size:10px;color:#aaa">Write first stroke to see progress</span>';}

function resetQuiz(){if(!qW||!S.cur)return;initW(S.cur.c);
document.getElementById('quizStatus').innerHTML='<span>已重置 Reset <span class="en">Click Start to practice</span></span>';
document.getElementById('strokeDots').innerHTML='';}

/* Navigation */
function prevChar(){if(!S.cur)return;const cs=S.allC;
const i=cs.findIndex(d=>d.c===S.cur.c&&d.u===S.cur.u);
if(i>0){const p=cs[i-1];S.uChars=cs.filter(d=>d.u===p.u).map(d=>d.c);loadC(p);hlSB(p.c);}}
function nextChar(){if(!S.cur)return;const cs=S.allC;
const i=cs.findIndex(d=>d.c===S.cur.c&&d.u===S.cur.u);
if(i<cs.length-1){const n=cs[i+1];S.uChars=cs.filter(d=>d.u===n.u).map(d=>d.c);loadC(n);hlSB(n.c);}}
function hlSB(ch){document.querySelectorAll('.char-btn').forEach(b=>b.classList.toggle('active',b.textContent===ch));}

function renderQN(){const c=document.getElementById('quickNav');c.innerHTML='';
const cs=S.uChars;if(!cs||cs.length<=1)return;
cs.forEach((ch,i)=>{const b=document.createElement('div');
b.className='qnav-btn'+(S.cur&&S.cur.c===ch?' active':'');
b.textContent=ch;b.onclick=()=>selCU({chars:cs,name:S.cur?S.cur.u:''},i);
c.appendChild(b);});}

document.addEventListener('keydown',e=>{if(e.key==='ArrowRight')nextChar();if(e.key==='ArrowLeft')prevChar();
if(e.key===' '&&S.cur){e.preventDefault();playStep();}
if(e.key==='/'&&!e.ctrlKey){e.preventDefault();toggleSearch();}});

/* Jump to char */
function jumpToChar(ch){
const cd=RAW_DATA.find(d=>d.c===ch);
if(cd){S.g=cd.g;S.s=cd.s;renderGT();renderST();renderUL();
S.allC=RAW_DATA.filter(d=>d.g===S.g&&d.s===S.s);
S.uChars=S.allC.filter(d=>d.u===cd.u).map(d=>d.c);
loadC(cd);hlSB(ch);}}

/* Search */
function toggleSearch(){
const o=document.getElementById('searchOverlay');o.classList.toggle('show');
if(o.classList.contains('show')){document.getElementById('searchInput').focus();document.getElementById('searchInput').value='';document.getElementById('searchResults').innerHTML='';}}
function doSearch(q){
const r=document.getElementById('searchResults');
if(!q||q.length<1){r.innerHTML='';return;}
q=q.toLowerCase();
const matches=RAW_DATA.filter(d=>{
  const cd=CHAR_DETAIL[d.c];
  const py=cd?cd.p:(d.p||'');
  const en=(CHAR_EN[d.c]||'').toLowerCase();
  return d.c===q||py.toLowerCase().includes(q)||py.replace(/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/g,c=>'aeiou'['āáǎàaēéěèeīíǐìiōóǒòoūúǔùu'.indexOf(c)%5]||c).includes(q)||en.includes(q);
}).slice(0,20);
const seen=new Set();
r.innerHTML=matches.filter(d=>{if(seen.has(d.c))return false;seen.add(d.c);return true;}).map(d=>{
  const cd=CHAR_DETAIL[d.c];const py=cd?cd.p:(d.p||'');
  return '<div class="search-item" onclick="jumpToChar(\\''+d.c+'\\');toggleSearch()"><span class="sc">'+d.c+'</span><div class="si"><div class="sp">'+py+'</div><div class="se">'+(CHAR_EN[d.c]||'')+'</div></div></div>';
}).join('');}

/* Pinyin toggle */
function togglePinyin(){
S.pinyinVisible=!S.pinyinVisible;
document.body.classList.toggle('pinyin-hidden',!S.pinyinVisible);
document.getElementById('pinyinToggle').classList.toggle('active',!S.pinyinVisible);}

/* Dark mode */
function toggleDark(){document.body.classList.toggle('dark');
document.getElementById('darkBtn').classList.toggle('active');}

/* Favorites */
function toggleFav(){if(!S.cur)return;
if(S.favs.has(S.cur.c)){S.favs.delete(S.cur.c);}else{S.favs.add(S.cur.c);}
localStorage.setItem('favs',JSON.stringify([...S.favs]));
document.getElementById('favBtn').textContent=S.favs.has(S.cur.c)?'★':'☆';
document.getElementById('favBtn').classList.toggle('faved',S.favs.has(S.cur.c));}

/* SRS - Simple spaced repetition */
function updateSRS(ch){
const now=Date.now();
if(!S.srs[ch])S.srs[ch]={next:now+86400000,interval:1,ef:2.5,reviews:0};
localStorage.setItem('srs',JSON.stringify(S.srs));}
function checkReview(){
const now=Date.now();let count=0;
for(const[ch,data]of Object.entries(S.srs)){if(data.next<=now)count++;}
const banner=document.getElementById('reviewBanner');
if(count>0){banner.classList.add('show');
document.getElementById('reviewText').innerHTML='今天有 <b>'+count+'</b> 个字需要复习 | You have <b>'+count+'</b> chars to review today';
}else{banner.classList.remove('show');}}
function startReview(){
const now=Date.now();
const due=Object.entries(S.srs).filter(([ch,d])=>d.next<=now).map(([ch])=>ch);
if(due.length>0){jumpToChar(due[0]);}}

function updStats(){document.getElementById('progressText').textContent='已学 Learned: '+S.learned.size;}
function toggleSidebar(){document.getElementById('sidebar').classList.toggle('open');document.getElementById('overlay').classList.toggle('show');}

init();
<\/script>
</body></html>`;

// Write output
const outPath = path.join(__dirname, '..', 'Chinese chars.html');
fs.writeFileSync(outPath, html, 'utf8');
const size = fs.statSync(outPath).size;
console.log('Written to:', outPath);
console.log('File size:', (size/1024).toFixed(1), 'KB');
console.log('Done!');
