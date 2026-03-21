/**
 * Enrich textbook_g1s2.js with vocabWords for all 21 content lessons
 * Run: node build/enrich_g1s2.js
 *
 * SECURITY NOTE: This is a build-time data enrichment script, not a production
 * web application. It reads a trusted local file (textbook_g1s2.js), inserts
 * vocabulary data, writes it back, then validates the output by loading it as
 * a Node.js module. No user input is involved.
 */
const fs = require('fs');
let code = fs.readFileSync('textbook_g1s2.js', 'utf8');

function enrichLesson(src, titleStr, vocabArr) {
  const titleMarker = 'title:"' + titleStr + '"';
  const idx = src.indexOf(titleMarker);
  if (idx === -1) { console.log('Title not found:', titleStr); return src; }

  const afterTitle = src.slice(idx);
  const exMatch = afterTitle.match(/\n(\s+)exercises:\s*\[/);
  if (!exMatch) { console.log('exercises: not found after', titleStr); return src; }
  const exPos = idx + afterTitle.indexOf(exMatch[0]);

  const between = src.slice(idx, exPos);
  if (between.includes('vocabWords:')) { console.log('SKIP (has vocab):', titleStr); return src; }

  const indent = exMatch[1];
  let vw = '\n' + indent + 'vocabWords: [\n';
  vocabArr.forEach((v, i) => {
    vw += indent + '  {word:\'' + v.w + '\',pinyin:\'' + v.p + '\',en:\'' + v.e.replace(/'/g, "\u2019") + '\',sentence:\'' + v.s.replace(/'/g, "\u2019") + '\',sentenceEn:\'' + v.se.replace(/'/g, "\u2019") + '\'}';
    vw += (i < vocabArr.length - 1 ? ',' : '') + '\n';
  });
  vw += indent + '],';
  return src.slice(0, exPos) + vw + src.slice(exPos);
}

// Unit 1: 识字（一）
code = enrichLesson(code, '春夏秋冬', [
  {w:'春风',p:'chūn fēng',e:'spring breeze',s:'春风吹。',se:'Spring breeze blows.'},
  {w:'夏雨',p:'xià yǔ',e:'summer rain',s:'夏雨落。',se:'Summer rain falls.'},
  {w:'秋霜',p:'qiū shuāng',e:'autumn frost',s:'秋霜降。',se:'Autumn frost descends.'},
  {w:'冬雪',p:'dōng xuě',e:'winter snow',s:'冬雪飘。',se:'Winter snow drifts.'},
  {w:'青草',p:'qīng cǎo',e:'green grass',s:'池草青。',se:'The pond grass is green.'},
  {w:'红花',p:'hóng huā',e:'red flowers',s:'山花红。',se:'Mountain flowers are red.'}
]);

code = enrichLesson(code, '姓氏歌', [
  {w:'姓氏',p:'xìng shì',e:'surname',s:'中国姓氏有很多。',se:'China has many surnames.'},
  {w:'什么',p:'shén me',e:'what',s:'你姓什么？',se:'What is your surname?'},
  {w:'双人',p:'shuāng rén',e:'double-person radical',s:'双人徐。',se:'Double-person Xu.'},
  {w:'国',p:'guó',e:'country',s:'中国姓氏有很多。',se:'China has many surnames.'},
  {w:'方',p:'fāng',e:'direction; square',s:'东方。',se:'Dongfang (Eastern).'}
]);

code = enrichLesson(code, '小青蛙', [
  {w:'青蛙',p:'qīng wā',e:'frog',s:'小小青蛙大眼睛。',se:'A little frog with big eyes.'},
  {w:'保护',p:'bǎo hù',e:'protect',s:'保护禾苗吃害虫。',se:'Protect crops by eating pests.'},
  {w:'害虫',p:'hài chóng',e:'pest',s:'青蛙吃害虫。',se:'Frogs eat pests.'},
  {w:'事情',p:'shì qíng',e:'matter; deed',s:'做了不少好事情。',se:'Did many good deeds.'},
  {w:'爱护',p:'ài hù',e:'cherish; protect',s:'请你爱护小青蛙。',se:'Please protect the little frog.'}
]);

code = enrichLesson(code, '猜字谜', [
  {w:'字谜',p:'zì mí',e:'character riddle',s:'猜字谜。',se:'Guess character riddles.'},
  {w:'相遇',p:'xiāng yù',e:'meet',s:'左右相遇起凉风。',se:'When they meet, a cool wind rises.'},
  {w:'尊重',p:'zūn zhòng',e:'respect',s:'言来互相尊重。',se:'With speech comes mutual respect.'},
  {w:'感动',p:'gǎn dòng',e:'moved; touched',s:'心至令人感动。',se:'With heart comes something moving.'},
  {w:'纯净',p:'chún jìng',e:'pure; clean',s:'水到纯净透明。',se:'Water arrives pure and clear.'}
]);

// Unit 2: 课文（一）
code = enrichLesson(code, '吃水不忘挖井人', [
  {w:'村子',p:'cūn zi',e:'village',s:'瑞金城外有个村子。',se:'Outside Ruijin there is a village.'},
  {w:'井',p:'jǐng',e:'well',s:'毛主席带领战士挖了一口井。',se:'Chairman Mao led soldiers to dig a well.'},
  {w:'主席',p:'zhǔ xí',e:'chairman',s:'毛主席在这里住过。',se:'Chairman Mao lived here.'},
  {w:'忘记',p:'wàng jì',e:'forget',s:'吃水不忘挖井人。',se:'When drinking water, remember the well digger.'},
  {w:'战士',p:'zhàn shì',e:'soldier',s:'带领战士挖井。',se:'Led soldiers to dig wells.'}
]);

code = enrichLesson(code, '我多想去看看', [
  {w:'北京',p:'běi jīng',e:'Beijing',s:'北京是我国的首都。',se:'Beijing is our capital.'},
  {w:'天安门',p:'tiān ān mén',e:'Tiananmen',s:'天安门广场的升旗仪式。',se:'Flag-raising ceremony at Tiananmen.'},
  {w:'广场',p:'guǎng chǎng',e:'square; plaza',s:'天安门广场多壮观。',se:'How grand Tiananmen Square is.'},
  {w:'告诉',p:'gào su',e:'tell',s:'妈妈告诉我。',se:'Mom told me.'},
  {w:'壮观',p:'zhuàng guān',e:'spectacular',s:'升旗仪式非常壮观。',se:'The flag ceremony is spectacular.'}
]);

code = enrichLesson(code, '一个接一个', [
  {w:'月亮',p:'yuè liang',e:'moon',s:'月亮已经升起来了。',se:'The moon has already risen.'},
  {w:'各种各样',p:'gè zhǒng gè yàng',e:'all kinds',s:'做各种各样的梦。',se:'Dream all kinds of dreams.'},
  {w:'伙伴',p:'huǒ bàn',e:'companion',s:'和小伙伴一起玩。',se:'Play with friends.'},
  {w:'有趣',p:'yǒu qù',e:'interesting',s:'上课也很有趣呀。',se:'Classes are interesting too.'},
  {w:'操场',p:'cāo chǎng',e:'playground',s:'在操场上玩。',se:'Play on the playground.'}
]);

code = enrichLesson(code, '四个太阳', [
  {w:'太阳',p:'tài yáng',e:'sun',s:'我画了四个太阳。',se:'I drew four suns.'},
  {w:'清凉',p:'qīng liáng',e:'cool; refreshing',s:'绿绿的太阳送来清凉。',se:'The green sun brings coolness.'},
  {w:'温暖',p:'wēn nuǎn',e:'warm',s:'红红的太阳温暖大家。',se:'The red sun warms everyone.'},
  {w:'果园',p:'guǒ yuán',e:'orchard',s:'金黄的太阳照耀果园。',se:'The golden sun shines on the orchard.'},
  {w:'色彩',p:'sè cǎi',e:'color',s:'春天是多彩的季节。',se:'Spring is a colorful season.'}
]);

// Unit 3: 课文（二）
code = enrichLesson(code, '小公鸡和小鸭子', [
  {w:'一块儿',p:'yī kuàir',e:'together',s:'他们一块儿出去玩。',se:'They went out to play together.'},
  {w:'捉虫',p:'zhuō chóng',e:'catch bugs',s:'小公鸡捉虫子。',se:'The rooster catches bugs.'},
  {w:'急忙',p:'jí máng',e:'hurriedly',s:'小公鸡急忙跳下水。',se:'The rooster hurriedly jumped in.'},
  {w:'游泳',p:'yóu yǒng',e:'swim',s:'小鸭子会游泳。',se:'The duckling can swim.'},
  {w:'感谢',p:'gǎn xiè',e:'thank',s:'小鸭子感谢小公鸡。',se:'The duckling thanked the rooster.'}
]);

code = enrichLesson(code, '树和喜鹊', [
  {w:'孤单',p:'gū dān',e:'lonely',s:'一棵树很孤单。',se:'One tree is very lonely.'},
  {w:'邻居',p:'lín jū',e:'neighbor',s:'树有了邻居。',se:'The tree has neighbors.'},
  {w:'快乐',p:'kuài lè',e:'happy',s:'大家都很快乐。',se:'Everyone is happy.'},
  {w:'喜鹊',p:'xǐ què',e:'magpie',s:'喜鹊叽叽喳喳。',se:'Magpies chatter away.'}
]);

code = enrichLesson(code, '怎么都快乐', [
  {w:'独自',p:'dú zì',e:'alone',s:'一个人玩也很好。',se:'Playing alone is also good.'},
  {w:'跳绳',p:'tiào shéng',e:'jump rope',s:'两个人可以跳绳。',se:'Two people can jump rope.'},
  {w:'排球',p:'pái qiú',e:'volleyball',s:'大家一起打排球。',se:'Everyone plays volleyball together.'},
  {w:'篮球',p:'lán qiú',e:'basketball',s:'可以打篮球。',se:'Can play basketball.'},
  {w:'快乐',p:'kuài lè',e:'happy',s:'怎么都快乐！',se:'Happy no matter what!'}
]);

// Unit 4: 课文（三）
code = enrichLesson(code, '静夜思', [
  {w:'床前',p:'chuáng qián',e:'before the bed',s:'床前明月光。',se:'Bright moonlight before the bed.'},
  {w:'月光',p:'yuè guāng',e:'moonlight',s:'床前明月光。',se:'Bright moonlight before the bed.'},
  {w:'故乡',p:'gù xiāng',e:'hometown',s:'低头思故乡。',se:'Bowing my head, I think of home.'},
  {w:'举头',p:'jǔ tóu',e:'raise head',s:'举头望明月。',se:'Raising my head, I gaze at the moon.'},
  {w:'思念',p:'sī niàn',e:'miss; long for',s:'思念远方的故乡。',se:'Missing the faraway hometown.'}
]);

code = enrichLesson(code, '夜色', [
  {w:'胆子',p:'dǎn zi',e:'courage',s:'我的胆子很小。',se:'I am not very brave.'},
  {w:'窗户',p:'chuāng hu',e:'window',s:'从窗户往外看。',se:'Looking out the window.'},
  {w:'勇敢',p:'yǒng gǎn',e:'brave',s:'变得越来越勇敢。',se:'Becoming braver and braver.'},
  {w:'微笑',p:'wēi xiào',e:'smile',s:'花儿在微笑。',se:'Flowers are smiling.'},
  {w:'散步',p:'sàn bù',e:'take a walk',s:'和爸爸出去散步。',se:'Go for a walk with dad.'}
]);

code = enrichLesson(code, '端午粽', [
  {w:'端午节',p:'duān wǔ jié',e:'Dragon Boat Festival',s:'端午节吃粽子。',se:'Eat rice dumplings on Dragon Boat Festival.'},
  {w:'粽子',p:'zòng zi',e:'rice dumpling',s:'外婆包的粽子十分好吃。',se:'Grandma makes delicious dumplings.'},
  {w:'箬叶',p:'ruò yè',e:'bamboo leaf',s:'粽子用箬叶包的。',se:'Dumplings are wrapped in bamboo leaves.'},
  {w:'糯米',p:'nuò mǐ',e:'glutinous rice',s:'里面裹着糯米。',se:'Filled with glutinous rice inside.'},
  {w:'纪念',p:'jì niàn',e:'commemorate',s:'纪念爱国诗人屈原。',se:'Commemorating the patriotic poet Qu Yuan.'}
]);

code = enrichLesson(code, '彩虹', [
  {w:'彩虹',p:'cǎi hóng',e:'rainbow',s:'雨过天晴出现彩虹。',se:'After rain clears, a rainbow appears.'},
  {w:'浇花',p:'jiāo huā',e:'water flowers',s:'拿水壶去浇花。',se:'Take the watering can to water flowers.'},
  {w:'镜子',p:'jìng zi',e:'mirror',s:'彩虹像镜子。',se:'The rainbow is like a mirror.'},
  {w:'高兴',p:'gāo xìng',e:'happy',s:'你高兴吗？',se:'Are you happy?'},
  {w:'秋千',p:'qiū qiān',e:'swing',s:'彩虹像秋千。',se:'The rainbow is like a swing.'}
]);

// Unit 5: 识字（二）
code = enrichLesson(code, '动物儿歌', [
  {w:'蜻蜓',p:'qīng tíng',e:'dragonfly',s:'蜻蜓半空展翅飞。',se:'Dragonflies spread wings in mid-air.'},
  {w:'蝴蝶',p:'hú dié',e:'butterfly',s:'蝴蝶花间捉迷藏。',se:'Butterflies play hide-and-seek among flowers.'},
  {w:'蚯蚓',p:'qiū yǐn',e:'earthworm',s:'蚯蚓土里造宫殿。',se:'Earthworms build palaces in soil.'},
  {w:'蚂蚁',p:'mǎ yǐ',e:'ant',s:'蚂蚁地上运食粮。',se:'Ants transport food on the ground.'},
  {w:'蝌蚪',p:'kē dǒu',e:'tadpole',s:'蝌蚪池中游得欢。',se:'Tadpoles swim happily in the pond.'},
  {w:'蜘蛛',p:'zhī zhū',e:'spider',s:'蜘蛛房前结网忙。',se:'Spiders busily weave webs by the house.'}
]);

code = enrichLesson(code, '古对今', [
  {w:'古今',p:'gǔ jīn',e:'ancient and modern',s:'古对今。',se:'Ancient pairs with modern.'},
  {w:'朝霞',p:'zhāo xiá',e:'morning glow',s:'和风对细雨，朝霞对夕阳。',se:'Gentle wind pairs with fine rain, morning glow with sunset.'},
  {w:'严寒',p:'yán hán',e:'severe cold',s:'严寒对酷暑。',se:'Severe cold pairs with intense heat.'},
  {w:'酷暑',p:'kù shǔ',e:'intense heat',s:'严寒对酷暑。',se:'Severe cold pairs with intense heat.'},
  {w:'鸟语花香',p:'niǎo yǔ huā xiāng',e:'birds singing, flowers fragrant',s:'鸟语花香，春光明媚。',se:'Birds sing and flowers bloom in bright spring.'}
]);

code = enrichLesson(code, '操场上', [
  {w:'操场',p:'cāo chǎng',e:'playground',s:'下课了，操场上真热闹。',se:'Class is over, the playground is lively.'},
  {w:'打球',p:'dǎ qiú',e:'play ball',s:'打球、拔河、拍皮球。',se:'Play ball, tug-of-war, bounce a ball.'},
  {w:'拔河',p:'bá hé',e:'tug-of-war',s:'大家一起拔河。',se:'Everyone plays tug-of-war together.'},
  {w:'跑步',p:'pǎo bù',e:'run',s:'铃声响，回教室，跑步走。',se:'Bell rings, run back to class.'},
  {w:'锻炼',p:'duàn liàn',e:'exercise',s:'锻炼身体很重要。',se:'Exercise is very important.'}
]);

code = enrichLesson(code, '人之初', [
  {w:'性',p:'xìng',e:'nature; character',s:'人之初，性本善。',se:'At birth, human nature is good.'},
  {w:'善',p:'shàn',e:'good; kind',s:'性本善。',se:'Nature is inherently good.'},
  {w:'习',p:'xí',e:'practice; learn',s:'性相近，习相远。',se:'Nature is similar, habits make us different.'},
  {w:'教',p:'jiào',e:'teach',s:'苟不教，性乃迁。',se:'Without teaching, nature will stray.'},
  {w:'勤',p:'qín',e:'diligent',s:'幼不学，非所宜。',se:'Not studying when young is unwise.'}
]);

// Unit 6: 课文（四）
code = enrichLesson(code, '古诗二首', [
  {w:'池塘',p:'chí táng',e:'pond',s:'泉眼无声惜细流。',se:'The spring silently treasures its thin stream.'},
  {w:'荷花',p:'hé huā',e:'lotus flower',s:'小荷才露尖尖角。',se:'The young lotus just shows its pointed tip.'},
  {w:'蜻蜓',p:'qīng tíng',e:'dragonfly',s:'早有蜻蜓立上头。',se:'A dragonfly already stands upon it.'},
  {w:'首',p:'shǒu',e:'measure word for poems',s:'古诗二首。',se:'Two ancient poems.'}
]);

code = enrichLesson(code, '荷叶圆圆', [
  {w:'荷叶',p:'hé yè',e:'lotus leaf',s:'荷叶圆圆的，绿绿的。',se:'Lotus leaves are round and green.'},
  {w:'水珠',p:'shuǐ zhū',e:'water droplet',s:'水珠躺在荷叶上。',se:'Water droplets lie on lotus leaves.'},
  {w:'摇篮',p:'yáo lán',e:'cradle',s:'荷叶是小水珠的摇篮。',se:'The lotus leaf is a cradle for droplets.'},
  {w:'停机坪',p:'tíng jī píng',e:'landing pad',s:'荷叶是蜻蜓的停机坪。',se:'The lotus leaf is a landing pad for dragonflies.'},
  {w:'歌台',p:'gē tái',e:'singing stage',s:'荷叶是小青蛙的歌台。',se:'The lotus leaf is a singing stage for frogs.'}
]);

code = enrichLesson(code, '要下雨了', [
  {w:'下雨',p:'xià yǔ',e:'rain',s:'要下雨了。',se:'It is going to rain.'},
  {w:'燕子',p:'yàn zi',e:'swallow',s:'小燕子飞得很低。',se:'The swallow flies very low.'},
  {w:'虫子',p:'chóng zi',e:'bug',s:'虫子飞不高。',se:'Bugs cannot fly high.'},
  {w:'蚂蚁',p:'mǎ yǐ',e:'ant',s:'蚂蚁忙着搬家。',se:'Ants are busy moving house.'},
  {w:'消息',p:'xiāo xi',e:'news; message',s:'小鱼知道下雨的消息。',se:'The little fish knows the rain is coming.'}
]);

// Unit 7: 课文（五）
code = enrichLesson(code, '文具的家', [
  {w:'文具',p:'wén jù',e:'stationery',s:'文具有自己的家。',se:'Stationery has its own home.'},
  {w:'丢',p:'diū',e:'lose',s:'铅笔只用了一次就丢了。',se:'The pencil was lost after one use.'},
  {w:'仔细',p:'zǐ xì',e:'careful',s:'你要仔细一点儿。',se:'You need to be more careful.'},
  {w:'检查',p:'jiǎn chá',e:'check',s:'每天都要检查。',se:'Check every day.'},
  {w:'平平安安',p:'píng píng ān ān',e:'safe and sound',s:'让文具平平安安回家。',se:'Let stationery return home safely.'}
]);

code = enrichLesson(code, '一分钟', [
  {w:'闹钟',p:'nào zhōng',e:'alarm clock',s:'丁零零，闹钟响了。',se:'Ring ring, the alarm goes off.'},
  {w:'迟到',p:'chí dào',e:'be late',s:'元元迟到了。',se:'Yuanyuan was late.'},
  {w:'后悔',p:'hòu huǐ',e:'regret',s:'元元非常后悔。',se:'Yuanyuan deeply regretted it.'},
  {w:'叹气',p:'tàn qì',e:'sigh',s:'元元叹了口气。',se:'Yuanyuan sighed.'},
  {w:'决定',p:'jué dìng',e:'decide',s:'决定再睡一分钟。',se:'Decided to sleep one more minute.'}
]);

code = enrichLesson(code, '动物王国开大会', [
  {w:'通知',p:'tōng zhī',e:'notice; notify',s:'狗熊发通知。',se:'The bear issues a notice.'},
  {w:'大会',p:'dà huì',e:'big meeting',s:'动物王国开大会。',se:'The animal kingdom holds a meeting.'},
  {w:'遍',p:'biàn',e:'measure word for times',s:'一遍又一遍。',se:'Again and again.'},
  {w:'准时',p:'zhǔn shí',e:'on time',s:'请大家准时参加。',se:'Please attend on time.'},
  {w:'注意',p:'zhù yì',e:'pay attention',s:'注意通知的要素。',se:'Pay attention to notice elements.'}
]);

code = enrichLesson(code, '小猴子下山', [
  {w:'猴子',p:'hóu zi',e:'monkey',s:'小猴子下山来。',se:'The little monkey came down the mountain.'},
  {w:'玉米',p:'yù mǐ',e:'corn',s:'看见一片玉米地。',se:'Saw a cornfield.'},
  {w:'桃子',p:'táo zi',e:'peach',s:'他看见满树的桃子。',se:'He saw a tree full of peaches.'},
  {w:'西瓜',p:'xī guā',e:'watermelon',s:'他看见满地的西瓜。',se:'He saw watermelons everywhere.'},
  {w:'空着手',p:'kōng zhe shǒu',e:'empty-handed',s:'最后空着手回家。',se:'In the end, returned empty-handed.'}
]);

// Unit 8: 课文（六）
code = enrichLesson(code, '棉花姑娘', [
  {w:'棉花',p:'mián hua',e:'cotton',s:'棉花姑娘生病了。',se:'Miss Cotton is sick.'},
  {w:'蚜虫',p:'yá chóng',e:'aphid',s:'蚜虫吃棉花叶子。',se:'Aphids eat cotton leaves.'},
  {w:'治病',p:'zhì bìng',e:'cure illness',s:'请帮我治治病吧。',se:'Please help me get cured.'},
  {w:'七星瓢虫',p:'qī xīng piáo chóng',e:'ladybug',s:'七星瓢虫来了。',se:'The ladybug has come.'},
  {w:'碧绿',p:'bì lǜ',e:'emerald green',s:'棉花姑娘长出碧绿的叶子。',se:'Miss Cotton grew emerald green leaves.'}
]);

code = enrichLesson(code, '咕咚', [
  {w:'咕咚',p:'gū dōng',e:'thud; splash',s:'咕咚一声。',se:'A thud sound.'},
  {w:'木瓜',p:'mù guā',e:'papaya',s:'一个木瓜掉进湖里。',se:'A papaya fell into the lake.'},
  {w:'逃跑',p:'táo pǎo',e:'run away',s:'兔子拔腿就跑。',se:'The rabbit ran away at once.'},
  {w:'拦住',p:'lán zhù',e:'stop; block',s:'野牛拦住了大家。',se:'The buffalo stopped everyone.'},
  {w:'害怕',p:'hài pà',e:'afraid',s:'大家都害怕。',se:'Everyone was afraid.'}
]);

code = enrichLesson(code, '小壁虎借尾巴', [
  {w:'壁虎',p:'bì hǔ',e:'gecko',s:'小壁虎在墙上爬。',se:'The gecko crawls on the wall.'},
  {w:'尾巴',p:'wěi ba',e:'tail',s:'小壁虎的尾巴断了。',se:'The gecko broke its tail.'},
  {w:'借',p:'jiè',e:'borrow',s:'小壁虎去借尾巴。',se:'The gecko went to borrow a tail.'},
  {w:'摇',p:'yáo',e:'wag; shake',s:'小鱼摇着尾巴游。',se:'The fish swims wagging its tail.'},
  {w:'长出',p:'zhǎng chū',e:'grow out',s:'新尾巴长出来了！',se:'A new tail has grown!'}
]);

fs.writeFileSync('textbook_g1s2.js', code, 'utf8');
console.log('Done! G1S2 enriched.');

// Validate by loading as a module pattern
try {
  // Safe validation: replace window assignment with a local var check
  const testCode = code.replace('window.TB_G1S2', 'var TB_G1S2');
  require('vm').runInNewContext(testCode, {window: {}, console: console});
  console.log('Validation: syntax OK');
} catch (e) {
  console.log('Validation FAILED:', e.message);
}
