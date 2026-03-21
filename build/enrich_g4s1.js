/**
 * Enrich textbook_g4s1.js with vocabWords + grammarPoints
 * Run: node build/enrich_g4s1.js
 * SECURITY NOTE: Build-time enrichment on trusted local files.
 */
const fs = require('fs');
const { enrichLesson, enrichByEn, saveAndValidate } = require('./enrich_lib');
let code = fs.readFileSync('textbook_g4s1.js', 'utf8');
const E = (t, v, g) => { code = enrichLesson(code, t, v, g); };

// vocab: [word, pinyin, english, sentence, sentenceEn]
// grammar: [point, pointEn, example, exampleEn, explanation, explanationEn]

// Unit 1
E('观潮', [
  ['奇观','qí guān','spectacle','钱塘江大潮被称为天下奇观。','The Qiantang tidal bore is called the greatest spectacle under heaven.'],
  ['屹立','yì lì','stand towering','镇海古塔屹立在江边。','The Zhenhai Pagoda stands towering by the river.'],
  ['人山人海','rén shān rén hǎi','huge crowds','海塘大堤上早已人山人海。','The sea wall was already packed with huge crowds.'],
  ['横贯','héng guàn','span across','白线横贯江面。','The white line spanned across the river.'],
  ['山崩地裂','shān bēng dì liè','earth-shattering','那声音如同山崩地裂。','The sound was earth-shattering.'],
  ['余波','yú bō','afterwave','霎时潮头奔腾西去，余波还在涌来。','The crest rushed west while afterwaves kept surging.']
], [
  ['按时间顺序写景','describe scenery in chronological order','潮来前……潮来时……潮过后……','Before the tide... during the tide... after the tide...','按照事物发展的先后顺序来描写，使文章条理清晰','Describe things in order of occurrence for clear organization']
]);

E('走月亮', [
  ['柔和','róu hé','gentle; soft','月光是那样柔和。','The moonlight was so gentle.'],
  ['洒满','sǎ mǎn','bathed in','在洒满月光的小路上走着。','Walking along the path bathed in moonlight.'],
  ['运载','yùn zài','carry; transport','用树叶做小船，运载许多花瓣。','Making leaf boats to carry flower petals.'],
  ['风俗','fēng sú','custom','收庄稼前修补道路，这是村里的风俗。','Repairing roads before harvest is the village custom.'],
  ['闪闪烁烁','shǎn shǎn shuò shuò','twinkling','闪闪烁烁的小星星。','Twinkling little stars.']
], [
  ['反复手法','repetition technique','啊，我和阿妈走月亮！','Ah, Mother and I walked under the moonlight!','通过反复出现的语句增强感情和节奏感','Repetition of phrases strengthens emotion and rhythm']
]);

E('现代诗二首', [
  ['归巢','guī cháo','return to nest','归巢的鸟儿尽管是倦了。','The birds returning to their nests, tired though they are.'],
  ['斜阳','xié yáng','setting sun','还驮着斜阳回去。','Still carrying the setting sun on their backs.'],
  ['霸占','bà zhàn','occupy; claim','白云霸占了半个天。','White clouds claimed half the sky.'],
  ['偷渡','tōu dù','sneak across','太阳偷渡了西山的青峰。','The sun sneaked across the western peak.']
], null);

E('繁星', [
  ['密密麻麻','mì mi má má','dense; countless','天上密密麻麻的星星。','Dense, countless stars in the sky.'],
  ['静寂','jìng jì','silent; still','便看见一个静寂的夜。','I saw a silent night.'],
  ['半明半昧','bàn míng bàn mèi','half-bright half-dim','悬着无数半明半昧的星。','Countless half-bright half-dim stars hung in the sky.'],
  ['摇摇欲坠','yáo yáo yù zhuì','tottering','它们是这样低，真是摇摇欲坠呢！','They hung so low they seemed about to fall!'],
  ['梦幻','mèng huàn','dreamlike','海上的夜是梦幻的。','The night at sea is dreamlike.']
], null);

// Unit 2
E('一个豆荚里的五粒豆', [
  ['豌豆','wān dòu','pea','有一个豆荚，里面有五粒豌豆。','There was a pod with five peas.'],
  ['僵硬','jiāng yìng','stiff','老这样坐下去，我会变得僵硬。','Sitting like this forever, I will stiffen up.'],
  ['预感','yù gǎn','premonition','我有这种预感。','I have this premonition.'],
  ['虚弱','xū ruò','frail; weak','身体非常虚弱。','Her body was very frail.'],
  ['盛开','shèng kāi','bloom','她面前是一朵盛开的紫色豌豆花。','Before her bloomed a purple pea flower.'],
  ['洋溢','yáng yì','overflow; brim with','她的脸上洋溢着健康的光彩。','Her face brimmed with a healthy glow.']
], [
  ['在阅读中提问','asking questions while reading','伴随着豌豆苗的成长，为什么小女孩的病就慢慢好了呢？','Why did the girl get better as the pea plant grew?','学习在阅读中主动提出问题，加深理解','Learn to actively ask questions while reading to deepen comprehension']
]);

E('夜间飞行的秘密', [
  ['蝙蝠','biān fú','bat','蝙蝠能在夜里飞行。','Bats can fly at night.'],
  ['敏锐','mǐn ruì','sharp; keen','难道它的眼睛特别敏锐？','Are its eyes particularly sharp?'],
  ['超声波','chāo shēng bō','ultrasound','蝙蝠从嘴里发出超声波。','Bats emit ultrasound from their mouths.'],
  ['障碍物','zhàng ài wù','obstacle','超声波遇到障碍物就反射回来。','Ultrasound bounces back when it hits an obstacle.'],
  ['雷达','léi dá','radar','现代飞机上安装了雷达。','Modern planes are equipped with radar.']
], [
  ['科学说明文的结构','structure of scientific exposition','科学家做了一次实验……又做了两次实验……三次实验的结果证明……','Scientists ran one experiment... then two more... the three experiments proved...','通过实验→结论的逻辑顺序说明科学道理','Explain scientific principles through the logic of experiment then conclusion']
]);

E('呼风唤雨的世纪', [
  ['发现','fā xiàn','discovery','获得了那么多奇迹般的发现和发明。','Made so many miraculous discoveries and inventions.'],
  ['发明','fā míng','invention','正是这些发现和发明改变了生活。','These discoveries and inventions changed life.'],
  ['依赖','yī lài','depend on','人类一直很依赖自然。','Humans depended on nature.'],
  ['寄托','jì tuō','place hopes on','用神话来寄托美好愿望。','Using myths to place their hopes and dreams.'],
  ['改善','gǎi shàn','improve','科学技术不断改善我们的生活。','Science and technology constantly improve our lives.']
], [
  ['对比手法','contrast technique','过去没有电灯、电视……现在人类登上月球、潜入深海。','In the past there were no lights or TV... Now humans land on the moon and dive into the deep sea.','用古今对比突出科技带来的巨大变化','Use past-present contrast to highlight huge changes brought by technology']
]);

E('蝴蝶的家', [
  ['震撼','zhèn hàn','shake; shock','雷、电、雨、风，吼叫着，震撼着。','Thunder, lightning, rain, and wind, howling and shaking.'],
  ['素洁','sù jié','plain and clean','蝴蝶是那样素洁。','Butterflies are so delicate and clean.'],
  ['喧嚷','xuān rǎng','clamor','雨点密集地喧嚷着。','Raindrops clamored densely.'],
  ['避开','bì kāi','avoid','蝴蝶怎么避开风雨？','How do butterflies avoid the wind and rain?']
], null);

// Unit 3
// Note: Unit 3 has lesson 9 titled "古诗三首" — same as Unit 6 in G3S1.
// Use enrichByEn to avoid ambiguity with duplicate title
code = enrichByEn(code, 'Three Ancient Poems', [
  ['残阳','cán yáng','setting sun','一道残阳铺水中。','A strip of setting sun spreads on the water.'],
  ['瑟瑟','sè sè','shimmering blue-green','半江瑟瑟半江红。','Half the river shimmers blue-green, half glows red.'],
  ['庐山','lú shān','Lushan Mountain','不识庐山真面目。','We cannot see Lushan\u2019s true face.'],
  ['横看','héng kàn','view from the front','横看成岭侧成峰。','Viewed from the front it forms a ridge, from the side a peak.'],
  ['逊','xùn','inferior to','梅须逊雪三分白。','Plum must concede three shades of white to snow.']
], [
  ['借景喻理','use scenery to convey philosophy','不识庐山真面目，只缘身在此山中。','We cannot see Lushan\u2019s true face because we stand within the mountain.','通过描写景物来表达人生哲理','Express life philosophy through descriptions of scenery']
]);

E('爬山虎的脚', [
  ['均匀','jūn yún','even; uniform','叶子在墙上铺得那么均匀。','The leaves spread so evenly on the wall.'],
  ['重叠','chóng dié','overlap','没有重叠起来的。','None overlap.'],
  ['触角','chù jiǎo','antenna; feeler','细丝很像蜗牛的触角。','The tendrils look like a snail\u2019s antennae.'],
  ['萎','wěi','wither','没触着墙的脚不几天就萎了。','Feet that fail to touch the wall wither within days.'],
  ['牢固','láo gù','firm; secure','那些脚巴在墙上相当牢固。','Those feet grip the wall quite firmly.']
], [
  ['连续细致观察','continuous detailed observation','爬山虎的脚触着墙的时候……变成小圆片……巴住墙。','When the feet touch the wall... turn into tiny discs... grip the wall.','通过长期连续的观察，写出事物细微的变化过程','Through long-term continuous observation, describe the subtle process of change']
]);

E('蟋蟀的住宅', [
  ['住宅','zhù zhái','residence; home','蟋蟀的住宅是自己一点一点挖掘的。','The cricket\u2019s home is dug by itself, bit by bit.'],
  ['隐蔽','yǐn bì','hidden; concealed','别的昆虫大多在临时的隐蔽所藏身。','Most other insects hide in makeshift shelters.'],
  ['慎重','shèn zhòng','cautious; careful','它常常慎重地选择住址。','It carefully chooses a building site.'],
  ['挖掘','wā jué','dig; excavate','蟋蟀并不是挖掘技术的专家。','The cricket is no excavation expert.'],
  ['简朴','jiǎn pǔ','simple; plain','住所是很简朴的，清洁、干燥。','The dwelling is simple, clean, and dry.']
], [
  ['拟人手法','personification','蟋蟀就在这平台上弹琴。','The cricket plays its violin on this terrace.','把动物当作人来描写，使文章生动有趣','Describe animals as if they were people, making the text vivid and interesting']
]);

// Unit 4
E('盘古开天地', [
  ['混沌','hùn dùn','chaos','宇宙混沌一片，像个大鸡蛋。','The universe was a chaotic mass, like a great egg.'],
  ['巍峨','wēi é','towering; majestic','盘古这个巍峨的巨人就像一根柱子。','The towering giant Pangu was like a pillar.'],
  ['精疲力竭','jīng pí lì jié','utterly exhausted','盘古精疲力竭，累得倒下了。','Pangu was utterly exhausted and collapsed.'],
  ['奔流不息','bēn liú bù xī','ever-flowing','他的血液变成了奔流不息的江河。','His blood became ever-flowing rivers.'],
  ['滋润','zī rùn','nourish; moisten','他的汗水变成了滋润万物的雨露。','His sweat became nourishing rain and dew.']
], [
  ['神话想象的特点','characteristics of mythical imagination','他的左眼变成了太阳……右眼变成了月亮。','His left eye became the sun... his right eye became the moon.','神话中用大胆的想象解释自然现象的起源','Myths use bold imagination to explain the origin of natural phenomena']
]);

E('精卫填海', [
  ['炎帝','yán dì','Emperor Yan','炎帝之少女，名曰女娃。','The youngest daughter of Emperor Yan was named Nuwa.'],
  ['溺','nì','drown','女娃游于东海，溺而不返。','Nuwa swam in the Eastern Sea and drowned, never returning.'],
  ['衔','xián','carry in mouth','常衔西山之木石。','She ceaselessly carried twigs and stones in her beak.'],
  ['堙','yīn','fill; block','以堙于东海。','To fill the Eastern Sea.']
], [
  ['文言文阅读方法','approach to classical Chinese','女娃游于东海，溺而不返，故为精卫。','Nuwa swam in the East Sea, drowned and never returned, thus became Jingwei.','借助注释，逐字逐句理解文言文的含义','Use annotations to understand classical Chinese word by word']
]);

E('普罗米修斯', [
  ['火种','huǒ zhǒng','fire seed; spark','冒着生命危险到天上盗取火种。','Risking his life to steal fire from the heavens.'],
  ['气急败坏','qì jí bài huài','furious; livid','宙斯气急败坏。','Zeus was furious.'],
  ['惩罚','chéng fá','punishment','给普罗米修斯以最严厉的惩罚。','Give Prometheus the harshest punishment.'],
  ['屈服','qū fú','yield; submit','普罗米修斯就是不向宙斯屈服。','Prometheus never yielded to Zeus.'],
  ['自由','zì yóu','freedom','这位英雄终于获得了自由。','The hero finally gained his freedom.']
], null);

E('女娲补天', [
  ['窟窿','kū long','hole; gap','天上露出一个大窟窿。','A gaping hole appeared in the sky.'],
  ['惊慌失措','jīng huāng shī cuò','panic-stricken','人们惊慌失措，四处奔逃。','People were panic-stricken, fleeing in every direction.'],
  ['熔炼','róng liàn','smelt','燃起神火熔炼五色石头。','She kindled divine fire to smelt the five-colored stones.'],
  ['坍塌','tān tā','collapse','担心补好的天再坍塌下来。','Worried that the mended sky might collapse again.'],
  ['传颂','chuán sòng','celebrate; praise','人们世世代代传颂着她的伟大功绩。','People celebrated her great achievements through generations.']
], null);

// Unit 5
E('麻雀', [
  ['嗅','xiù','sniff; smell','猎狗嗅到了前面有什么野物。','The hound sniffed something ahead.'],
  ['无可奈何','wú kě nài hé','helpless','无可奈何地拍打着小翅膀。','Flapping its tiny wings helplessly.'],
  ['拯救','zhěng jiù','rescue','想拯救自己的幼儿。','Wanting to rescue its young.'],
  ['庞大','páng dà','enormous','猎狗是个多么庞大的怪物啊！','What an enormous monster the hound was!'],
  ['搏斗','bó dòu','fight; struggle','它准备着一场搏斗。','It was ready for a fight.']
], [
  ['所见所闻所想','what one sees, hears, and thinks','老麻雀用自己的身躯掩护着小麻雀。一种强大的力量使它飞了下来。','The old sparrow shielded the baby with its body. A powerful force drove it down.','把看到的、听到的、想到的都写下来，使叙述更完整','Write what you see, hear, and think to make narration more complete']
]);

E('爬天都峰', [
  ['石级','shí jí','stone steps','再看看笔陡的石级。','Looking at the steep stone steps.'],
  ['发颤','fā chàn','tremble','真叫人发颤！','It made one tremble!'],
  ['奋力','fèn lì','with all one\u2019s might','我奋力向峰顶爬去。','I climbed toward the summit with all my might.'],
  ['汲取','jí qǔ','draw; absorb','都会从别人身上汲取力量！','Both drew strength from each other!'],
  ['鼓舞','gǔ wǔ','inspire; encourage','要不是你的勇气鼓舞我。','If not for your courage inspiring me.']
], null);

// Unit 6
E('牛和鹅', [
  ['无所谓','wú suǒ wèi','indifferent','牛像是无所谓似的。','The cow seemed indifferent.'],
  ['顽皮','wán pí','mischievous','有一个顽皮的孩子故意引它们来。','A mischievous child deliberately lured them.'],
  ['惹怒','rě nù','anger; provoke','也许是我的哭叫更惹怒了老公鹅。','Perhaps my crying provoked the old gander further.'],
  ['凭','píng','rely on','它要是凭这点来欺负人。','If it relies on this to bully people.'],
  ['无缘无故','wú yuán wú gù','for no reason','我也不再无缘无故欺负它了。','I also stopped picking on it for no reason.']
], [
  ['批注式阅读','annotated reading','它虽然把我们看得比它小，可我们实在比它强啊！','Even if they see us as small, we are actually stronger!','在阅读时在精彩处、疑问处做标记和写感想','Annotate brilliant or puzzling passages with marks and reflections while reading']
]);

E('一只窝囊的大老虎', [
  ['羡慕','xiàn mù','envy','我真个羡慕得要死。','I was terribly envious.'],
  ['殷切','yīn qiè','earnest; eager','我殷切期待的目光。','My earnest, eager gaze.'],
  ['排练','pái liàn','rehearse','于是开始排练。','So rehearsals began.'],
  ['通情达理','tōng qíng dá lǐ','sensible; understanding','老师真是个通情达理的好老师。','The teacher was truly a sensible, understanding teacher.'],
  ['哄堂大笑','hōng táng dà xiào','burst into laughter','只听见台下一阵哄堂大笑。','The audience burst into laughter.']
], null);

E('陀螺', [
  ['不甘人后','bù gān rén hòu','refuse to lag behind','我从小就不甘人后。','I never wanted to lag behind from a young age.'],
  ['恍惚','huǎng hū','dazed; trance-like','这消息曾使我一整天处于恍惚的状态。','This news left me in a daze all day.'],
  ['手舞足蹈','shǒu wǔ zú dǎo','dance with joy','更是手舞足蹈。','I danced with joy even more.'],
  ['不动声色','bù dòng shēng sè','stay cool; unfazed','我的鸭蛋则不动声色地闪躲。','My egg coolly dodged.'],
  ['溃败','kuì bài','utterly defeated','大陀螺彻底溃败了。','The big top was utterly defeated.']
], [
  ['心情变化线索','tracing emotional changes','沮丧→期待→兴奋→被嘲笑→意外获胜→自豪','Dejection → anticipation → excitement → mockery → unexpected victory → pride','抓住人物心情变化的线索来理解文章','Trace the thread of emotional changes to understand the text']
]);

// Unit 7
// Second "古诗三首" — duplicate title, so locate by unique id:21 marker
(function() {
  const marker = 'id: 21, title: "\u53E4\u8BD7\u4E09\u9996"';
  const idx = code.indexOf(marker);
  if (idx === -1) { console.log('NOT FOUND: Unit7 古诗三首 (id:21)'); return; }
  const after = code.slice(idx);
  const exMatch = after.match(/\n(\s+)exercises:\s*\[/);
  if (!exMatch) { console.log('NO exercises: Unit7 古诗三首'); return; }
  const exPos = idx + after.indexOf(exMatch[0]);
  const between = code.slice(idx, exPos);
  const indent = exMatch[1];
  if (between.includes('vocabWords:')) return;
  let ins = '';
  const vocabArr = [
    ['征','zhēng','expedition; campaign','万里长征人未还。','Soldiers on a long campaign never returned.'],
    ['飞将','fēi jiàng','Flying General','但使龙城飞将在。','If only the Flying General of Dragon City were here.'],
    ['人杰','rén jié','outstanding person','生当作人杰。','In life, be an outstanding person.'],
    ['沙场','shā chǎng','battlefield','醉卧沙场君莫笑。','Don\u2019t laugh if we lie drunk on the battlefield.'],
    ['项羽','xiàng yǔ','Xiang Yu','至今思项羽，不肯过江东。','Even now we think of Xiang Yu, who refused to cross east.']
  ];
  ins += '\n' + indent + 'vocabWords: [\n';
  vocabArr.forEach((v, i) => {
    const e = v[2].replace(/'/g, '\u2019');
    const se = v[4].replace(/'/g, '\u2019');
    ins += indent + '  {word:\'' + v[0] + '\',pinyin:\'' + v[1] + '\',en:\'' + e + '\',sentence:\'' + v[3] + '\',sentenceEn:\'' + se + '\'}';
    ins += (i < vocabArr.length - 1 ? ',' : '') + '\n';
  });
  ins += indent + '],';
  code = code.slice(0, exPos) + ins + code.slice(exPos);
})();

E('为中华之崛起而读书', [
  ['崛起','jué qǐ','rise','为中华之崛起而读书！','Study for the rise of China!'],
  ['抱负','bào fù','ambition','一个十二三岁的孩子竟有如此的抱负。','A twelve-year-old with such ambition.'],
  ['占据','zhàn jù','occupy; control','有些地方被外国人占据了。','Some areas were controlled by foreigners.'],
  ['中华不振','zhōng huá bù zhèn','China is weak','中华不振哪！','China is weak!'],
  ['训斥','xùn chì','scold; rebuke','中国巡警反而训斥她。','The Chinese police scolded her instead.'],
  ['屈辱','qū rǔ','humiliation','把人民从苦难和屈辱中拯救出来。','Rescue the people from suffering and humiliation.']
], [
  ['多件事概括主要内容','summarizing main content from multiple events','听伯父叹息→亲见中华不振→立志为中华崛起而读书','Hearing uncle\u2019s sigh → witnessing China\u2019s weakness → vowing to study for China\u2019s rise','把文章中的几件事连起来，概括文章的主要内容','Connect multiple events in the text to summarize the main content']
]);

E('梅兰芳蓄须', [
  ['蓄须','xù xū','grow a beard','梅兰芳最后只能蓄须明志。','Mei Lanfang finally grew a beard to declare his will.'],
  ['深居简出','shēn jū jiǎn chū','live in seclusion','深居简出，不再登台。','He lived in seclusion and never performed again.'],
  ['骚扰','sāo rǎo','harass','来自侵略者随时随地的骚扰。','Constant harassment from the invaders.'],
  ['斩钉截铁','zhǎn dīng jié tiě','adamantly; firmly','梅兰芳斩钉截铁地说。','Mei Lanfang said adamantly.'],
  ['民族气节','mín zú qì jié','national integrity','他的民族气节更令人敬佩。','His national integrity won even greater respect.']
], null);

E('延安，我把你追寻', [
  ['追寻','zhuī xún','pursue','追寻信念，追寻金色的理想。','Pursuing faith, pursuing golden ideals.'],
  ['茁壮','zhuó zhuàng','sturdy; thriving','像茁壮成长的小树。','Like saplings growing strong.'],
  ['灿烂辉煌','càn làn huī huáng','brilliant; splendid','延安，你的精神灿烂辉煌！','Yan\u2019an, your spirit shines brilliantly!'],
  ['展翅飞翔','zhǎn chì fēi xiáng','soar; spread wings','怎能向美好的未来展翅飞翔？','How could we soar toward a beautiful future?']
], null);

// Unit 8
E('王戎不取道旁李', [
  ['诸','zhū','all; various','尝与诸小儿游。','He once played with other children.'],
  ['竞走','jìng zǒu','race to run','诸儿竞走取之。','The other children raced to pick them.'],
  ['唯','wéi','only','唯戎不动。','Only Wang Rong did not move.'],
  ['信然','xìn rán','indeed so','取之，信然。','They tasted them, and indeed it was so.']
], [
  ['文言文中的推理','logical reasoning in classical Chinese','树在道边而多子，此必苦李。','The tree stands by the road yet is laden with fruit — these must be bitter plums.','根据现象进行逻辑推理，得出结论','Draw conclusions through logical reasoning based on observable phenomena']
]);

E('西门豹治邺', [
  ['田地荒芜','tián dì huāng wú','barren fields','看到田地荒芜，人烟稀少。','He found the fields barren and the population sparse.'],
  ['巫婆','wū pó','witch','都是巫婆和官绅在骗钱害人。','The witch and officials were swindling and harming people.'],
  ['提心吊胆','tí xīn diào dǎn','on tenterhooks','那些官绅都提心吊胆。','The officials were all on tenterhooks.'],
  ['面如土色','miàn rú tǔ sè','ashen-faced','官绅一个个吓得面如土色。','The officials turned ashen-faced with fear.'],
  ['灌溉','guàn gài','irrigate','庄稼得到灌溉。','Crops received irrigation.']
], [
  ['以其人之道还治其人之身','using their own methods against them','把新娘领来让我看看……麻烦你去跟河神说一声。','Bring the bride for me to see... Go tell the River God.','用对方的逻辑反过来惩治对方，不用暴力揭露骗局','Use the opponents\u2019 own logic to punish them, exposing fraud without violence']
]);

E('故事二则', [
  ['拜见','bài jiàn','pay a formal visit','名医扁鹊去拜见蔡桓侯。','The famous doctor Bian Que visited Lord Huan.'],
  ['讳疾忌医','huì jí jì yī','avoid treatment out of fear','蔡桓侯讳疾忌医。','Lord Huan avoided diagnosis out of pride.'],
  ['骨髓','gǔ suǐ','marrow','一旦深入骨髓，只能等死。','Once it enters the marrow, one can only await death.'],
  ['百发百中','bǎi fā bǎi zhòng','never miss','纪昌成了百发百中的射箭能手。','Ji Chang became an archer who never missed.'],
  ['聚精会神','jù jīng huì shén','with full concentration','每天聚精会神地盯着虱子。','He stared at the louse with full concentration every day.']
], [
  ['寓言的道理','morals of fables','病在皮肤上用热敷就能治好……一旦深入骨髓，医生再也无能为力了。','On the skin, a warm compress cures it... in the marrow, even a doctor is powerless.','通过故事讲述道理：要善于听取意见，学习要打好基本功','Convey lessons through story: heed good advice, and master fundamentals in learning']
]);

saveAndValidate('textbook_g4s1.js', code, 'TB_G4S1');
