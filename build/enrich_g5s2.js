/**
 * Enrich textbook_g5s2.js with vocabWords + grammarPoints
 * Run: node build/enrich_g5s2.js
 * SECURITY NOTE: Build-time enrichment on trusted local files.
 */
const fs = require('fs');
const { enrichByEn, saveAndValidate } = require('./enrich_lib');
let code = fs.readFileSync('textbook_g5s2.js', 'utf8');
const En = (t, v, g) => { code = enrichByEn(code, t, v, g); };

// Unit 1 — Childhood Memories
En('Three Ancient Poems', [
  ['耘田','yún tián','weed the fields','昼出耘田夜绩麻。','They weed the fields by day and spin hemp at night.'],
  ['稚子','zhì zǐ','young child','稚子金盆脱晓冰。','The young child lifts morning ice from a bronze basin.'],
  ['牧童','mù tóng','shepherd boy','牧童归去横牛背。','The shepherd boy rides home on the back of an ox.'],
  ['银钲','yín zhēng','silver gong','彩丝穿取当银钲。','Threading it with colored string as a silver gong.'],
  ['信口','xìn kǒu','casually','短笛无腔信口吹。','Playing the short flute casually without a tune.']
], [
  ['田园诗','tián yuán shī','pastoral poetry','昼出耘田夜绩麻，村庄儿女各当家。','They weed by day and spin at night; village children each do their part.','描写农村生活和自然风光的诗歌体裁','A poetry genre depicting rural life and natural scenery']
]);

En('Grandfather\\u2019s Garden', [
  ['蝴蝶','hú dié','butterfly','花园里蝴蝶有白蝴蝶、黄蝴蝶。','The garden had white butterflies and yellow butterflies.'],
  ['蜻蜓','qīng tíng','dragonfly','蜻蜓是金的，蚂蚱是绿的。','The dragonflies were golden, the grasshoppers green.'],
  ['榆树','yú shù','elm tree','园子里就有一棵大榆树。','The garden had a great elm tree.'],
  ['闪烁','shǎn shuò','shimmer','榆树的叶子闪烁得和蚌壳一样。','The elm leaves shimmered like clam shells.'],
  ['自由','zì yóu','free','花园里一切都是自由的。','Everything in the garden was free.']
], [
  ['借景抒情','jiè jǐng shū qíng','express feelings through scenery','花开了，就像睡醒了似的。鸟飞了，就像在天上逛似的。','Flowers bloomed as if waking up. Birds flew as if strolling in the sky.','通过描写祖父的园子表达童年自由快乐','Express childhood freedom and joy through describing the garden']
]);

En('The Moon Is Brightest Over Home', [
  ['故乡','gù xiāng','hometown','月是故乡明。','The moon is brightest over home.'],
  ['篝火','gōu huǒ','bonfire','在篝火旁边的场院上数星星。','Counting stars at the threshing ground beside the bonfire.'],
  ['澄澈','chéng chè','clear','大石头旁边的水面清澈澄澈。','The water near the big rocks was clear and limpid.'],
  ['思念','sī niàn','miss','思念故乡的月亮。','Missing the moon of the hometown.'],
  ['离乡','lí xiāng','leave hometown','离开故乡已经很多年了。','It has been many years since leaving the hometown.']
], null);

En('The Spirit of Plum Blossoms', [
  ['梅花','méi huā','plum blossom','梅花是中国最有名的花。','Plum blossom is the most famous flower in China.'],
  ['秉性','bǐng xìng','character; nature','梅花的秉性就是坚韧不拔。','The nature of plum blossoms is perseverance.'],
  ['眷恋','juàn liàn','attachment','外祖父眷恋祖国。','Grandfather was deeply attached to the motherland.'],
  ['凌寒','líng hán','brave the cold','梅花不怕凌寒独自开。','Plum blossoms bloom alone, braving the cold.'],
  ['气节','qì jié','integrity','梅花象征中国人的气节。','Plum blossoms symbolize the integrity of Chinese people.']
], [
  ['借物喻人','jiè wù yù rén','use objects to describe people','梅花的精神就是中华民族的精神。','The spirit of plum blossoms is the spirit of the Chinese nation.','用梅花的品格比喻中国人的气节','Use the character of plum blossoms to represent Chinese integrity']
]);

// Unit 2 — Chinese Classical Novels
En('Borrowing Arrows with Straw Boats', [
  ['妒忌','dù jì','jealous','周瑜看到诸葛亮挺有才干，心里很妒忌。','Zhou Yu saw that Zhuge Liang was talented and felt jealous.'],
  ['军令状','jūn lìng zhuàng','military pledge','诸葛亮立下了军令状。','Zhuge Liang signed a military pledge.'],
  ['神机妙算','shén jī miào suàn','brilliant strategy','诸葛亮神机妙算。','Zhuge Liang had brilliant strategies.'],
  ['擂鼓','léi gǔ','beat drums','船上的军士一边擂鼓一边呐喊。','The soldiers on board beat drums and shouted.'],
  ['弓弩手','gōng nǔ shǒu','archers','曹操调来六千名弓弩手。','Cao Cao dispatched six thousand archers.']
], [
  ['人物对比','rén wù duì bǐ','character contrast','周瑜长叹一声说诸葛亮神机妙算，他真比不上。','Zhou Yu sighed and said he was no match for Zhuge Liang.','通过周瑜与诸葛亮的对比突出人物特点','Highlight character traits through contrasting Zhou Yu and Zhuge Liang']
]);

En('Jingyang Ridge', [
  ['武松','wǔ sōng','Wu Song','武松走进酒店坐下。','Wu Song walked into the tavern and sat down.'],
  ['老虎','lǎo hǔ','tiger','忽然跳出一只老虎来。','Suddenly a tiger leaped out.'],
  ['哨棒','shào bàng','staff','武松拿起哨棒打老虎。','Wu Song grabbed the staff to fight the tiger.'],
  ['景阳冈','jǐng yáng gāng','Jingyang Ridge','景阳冈上有大虫。','There is a tiger on Jingyang Ridge.'],
  ['勇猛','yǒng měng','brave and fierce','武松十分勇猛。','Wu Song was extremely brave and fierce.']
], [
  ['动作描写','dòng zuò miáo xiě','action description','武松把半截棒丢在一边，两只手就势把大虫揪住。','Wu Song tossed aside the broken staff and seized the tiger with both hands.','通过连续的动作描写表现人物的英勇','Show bravery through continuous action descriptions']
]);

En('Birth of the Monkey King', [
  ['石猴','shí hóu','stone monkey','那座山上有一块仙石，化作一个石猴。','On that mountain a magic rock transformed into a stone monkey.'],
  ['瀑布','pù bù','waterfall','猴群发现一道瀑布。','The monkeys found a waterfall.'],
  ['水帘洞','shuǐ lián dòng','Water Curtain Cave','里面是一个水帘洞。','Inside was the Water Curtain Cave.'],
  ['拱伏','gǒng fú','bow down','众猴拱伏无违。','All the monkeys bowed down in obedience.'],
  ['花果山','huā guǒ shān','Mountain of Flowers and Fruit','花果山上的石猴成了美猴王。','The stone monkey of the Mountain of Flowers and Fruit became the Handsome Monkey King.']
], null);

En('Spring Fun in the Red Mansion', [
  ['风筝','fēng zhēng','kite','宝玉等人在园子里放风筝。','Baoyu and others flew kites in the garden.'],
  ['丫鬟','yā huan','maid servant','丫鬟们也来放风筝。','The maid servants also came to fly kites.'],
  ['蝴蝶风筝','hú dié fēng zhēng','butterfly kite','那是一个大蝴蝶风筝。','That was a large butterfly kite.'],
  ['剪断','jiǎn duàn','cut off','把线剪断，让风筝飞走。','Cut the string and let the kite fly away.'],
  ['大观园','dà guān yuán','Grand View Garden','大观园里春意盎然。','The Grand View Garden was full of spring atmosphere.']
], null);

// Unit 3 — Comprehensive Learning: Chinese Characters
En('Comprehensive Learning: Exploring the Kingdom of Chinese Characters', [
  ['汉字','hàn zì','Chinese characters','汉字已经有几千年的历史了。','Chinese characters have a history of several thousand years.'],
  ['谐音','xié yīn','homophone','汉字中有很多有趣的谐音现象。','There are many interesting homophone phenomena in Chinese characters.'],
  ['甲骨文','jiǎ gǔ wén','oracle bone script','甲骨文是最早的汉字。','Oracle bone script is the earliest form of Chinese characters.'],
  ['造字','zào zì','character creation','汉字有多种造字方法。','Chinese characters have multiple methods of creation.'],
  ['演变','yǎn biàn','evolution','汉字经历了漫长的演变过程。','Chinese characters went through a long evolution.']
], [
  ['象形字','xiàng xíng zì','pictographic characters','日、月、水、火都是象形字。','Sun, moon, water, and fire are all pictographic characters.','根据事物形状创造的文字','Characters created based on the shapes of things']
]);

// Unit 4 — Patriotism and Revolutionary Heroes
En('Three Ancient Poems', [
  ['从军行','cóng jūn xíng','marching song','黄沙百战穿金甲，不破楼兰终不还。','Through a hundred battles in yellow sand the golden armor is worn, vowing never to return until the enemy is defeated.'],
  ['遗民','yí mín','remaining subjects','遗民泪尽胡尘里，南望王师又一年。','The remaining subjects shed all their tears in foreign dust, looking south for the royal army another year.'],
  ['涕泪','tì lèi','tears of joy','初闻涕泪满衣裳。','Upon first hearing the news, tears of joy soaked the clothes.'],
  ['放歌','fàng gē','sing aloud','白日放歌须纵酒。','In broad daylight one must sing aloud and drink freely.'],
  ['收复','shōu fù','recover (territory)','闻官军收河南河北。','Hearing that the imperial army recovered Henan and Hebei.']
], [
  ['爱国情怀','ài guó qíng huái','patriotic sentiment','黄沙百战穿金甲，不破楼兰终不还。','Golden armor worn through a hundred battles, vowing never to return without victory.','三首诗从不同角度表达爱国之情','Three poems express patriotism from different angles']
]);

En('Green Mountains Everywhere Bury Loyal Bones', [
  ['志愿军','zhì yuàn jūn','volunteer army','朝鲜前线志愿军司令部发来电报。','A telegram arrived from the volunteer army headquarters at the Korean front.'],
  ['牺牲','xī shēng','sacrifice','毛岸英同志壮烈牺牲。','Comrade Mao Anying sacrificed his life heroically.'],
  ['遗骨','yí gǔ','remains','是否将岸英的遗骨运回国内。','Whether to bring Anying remains back to the homeland.'],
  ['忠骨','zhōng gǔ','loyal bones','青山处处埋忠骨。','Green mountains everywhere bury loyal bones.'],
  ['电报','diàn bào','telegram','毛主席签了字，把电报放下了。','Chairman Mao signed and set down the telegram.']
], [
  ['细节描写','xì jié miáo xiě','detail description','毛主席用食指按着紧锁的眉头，情不自禁地喃喃着。','Chairman Mao pressed his tightly furrowed brow with his index finger, murmuring involuntarily.','通过细节展现人物内心的悲痛','Show inner grief through detailed descriptions']
]);

En('The War God', [
  ['军神','jūn shén','war god','刘伯承被称为军神。','Liu Bocheng was called the War God.'],
  ['手术','shǒu shù','surgery','做手术不用麻醉剂。','Performing surgery without anesthesia.'],
  ['麻醉','má zuì','anesthesia','他拒绝使用麻醉剂。','He refused to use anesthesia.'],
  ['崭新','zhǎn xīn','brand new','刘伯承的伤口需要做崭新的手术方案。','A brand new surgical plan was needed for Liu Bocheng.'],
  ['坚毅','jiān yì','resolute','他的表情十分坚毅。','His expression was extremely resolute.']
], [
  ['侧面描写','cè miàn miáo xiě','indirect characterization','沃克医生惊呆了，大声嚷道：你是一个真正的男子汉，一块会说话的钢板！','Doctor Walker was stunned and exclaimed: You are a true man, a talking steel plate!','通过旁人反应衬托主要人物的品质','Highlight the main character through others reactions']
]);

En('Noble Poverty', [
  ['清贫','qīng pín','noble poverty','清贫是革命者的美德。','Noble poverty is a virtue of revolutionaries.'],
  ['矜持','jīn chí','composed','方志敏矜持不苟。','Fang Zhimin was composed and upright.'],
  ['俘虏','fú lǔ','capture','方志敏被敌人俘虏了。','Fang Zhimin was captured by the enemy.'],
  ['搜查','sōu chá','search','两个兵士搜查了方志敏全身。','Two soldiers searched Fang Zhimin thoroughly.'],
  ['威胁','wēi xié','threaten','敌人用手榴弹威胁他。','The enemy threatened him with a hand grenade.']
], null);

// Unit 5 — Character Descriptions
En('A Group of Character Descriptions', [
  ['嘎子','gǎ zǐ','Ga Zi (nickname)','小嘎子精神抖擞。','Little Ga Zi was full of energy.'],
  ['摔跤','shuāi jiāo','wrestle','两个人开始摔跤。','The two began to wrestle.'],
  ['挺脱','tǐng tuō','sturdy and upright','他像一棵挺脱的树。','He was like a sturdy, upright tree.'],
  ['灯草','dēng cǎo','lamp wick','严监生伸着两个指头指着两茎灯草。','Yan Jiansheng held up two fingers pointing at the two lamp wicks.'],
  ['破绽','pò zhàn','opening; flaw','小胖墩儿不露一点儿破绽。','Little Fatty did not show any opening.']
], [
  ['动作描写','dòng zuò miáo xiě','action description','小嘎子围着他猴儿似的蹦来蹦去，总想使巧招，下冷绊子。','Little Ga Zi bounced around him like a monkey, trying to use clever moves and trip him.','通过具体动作刻画人物性格','Portray character through specific actions'],
  ['细节刻画','xì jié kè huà','detail portrayal','严监生伸着两个指头，总不得断气。','Yan Jiansheng held up two fingers, unable to pass away.','用极简的细节揭示人物特征','Reveal character traits through minimal details']
]);

En('Master Painter Li', [
  ['刷子李','shuā zi lǐ','Master Painter Li','他就是刷子李。','He is Master Painter Li.'],
  ['规矩','guī jǔ','rule','刷子李有一个规矩。','Master Painter Li had a rule.'],
  ['黑衣','hēi yī','black clothes','他干活穿一身黑衣。','He wore all black while working.'],
  ['白点','bái diǎn','white spot','身上只要有一个白点，白刷不要钱。','If there was even one white spot on his clothes, the job would be free.'],
  ['绝活','jué huó','unique skill','刷子李的绝活闻名天下。','Master Painter Li was famous for his unique skill.']
], null);

// Unit 6 — Wisdom and Thinking
En('Self-Contradiction', [
  ['矛','máo','spear','楚人有鬻矛与盾者。','A man of Chu sold spears and shields.'],
  ['盾','dùn','shield','吾盾之坚，物莫能陷也。','My shield is so strong that nothing can pierce it.'],
  ['陷','xiàn','pierce','以子之矛陷子之盾，何如？','What happens if your spear strikes your shield?'],
  ['誉','yù','praise; boast','誉之曰：吾矛之利，于物无不陷也。','He boasted: My spear is so sharp it can pierce anything.'],
  ['弗能应','fú néng yìng','unable to answer','其人弗能应也。','The man was unable to answer.']
], [
  ['文言文寓言','wén yán wén yù yán','classical fable','以子之矛陷子之盾，何如？其人弗能应也。','What if your spear strikes your shield? The man could not answer.','通过简短的文言文故事说明逻辑矛盾','Use a brief classical story to illustrate logical contradiction']
]);

En('Tian Ji\\u2019s Horse Race', [
  ['赛马','sài mǎ','horse race','齐威王和田忌赛马。','King Wei of Qi raced horses with Tian Ji.'],
  ['孙膑','sūn bìn','Sun Bin','孙膑给田忌出了一个主意。','Sun Bin gave Tian Ji an idea.'],
  ['上等马','shàng děng mǎ','top-class horse','齐威王的上等马比田忌的快。','King Wei top-class horse was faster than Tian Ji horse.'],
  ['策略','cè lüè','strategy','孙膑的策略非常巧妙。','Sun Bin strategy was very clever.'],
  ['胜负','shèng fù','victory or defeat','调换顺序就改变了胜负。','Changing the order changed the outcome.']
], [
  ['策略思维','cè lüè sī wéi','strategic thinking','用下等马对上等马，用上等马对中等马，用中等马对下等马。','Use the lowest horse against the best, the best against the middle, the middle against the lowest.','通过调换出场顺序以弱胜强','Achieve victory through strategic reordering']
]);

En('The Jump', [
  ['猴子','hóu zi','monkey','猴子抢走了水手的帽子。','The monkey snatched the sailor hat.'],
  ['桅杆','wéi gān','mast','猴子爬到了桅杆顶端。','The monkey climbed to the top of the mast.'],
  ['船长','chuán zhǎng','captain','船长命令儿子跳水。','The captain ordered his son to jump into the water.'],
  ['瞄准','miáo zhǔn','take aim','船长拿起枪瞄准儿子。','The captain raised his gun and aimed at his son.'],
  ['得救','dé jiù','be rescued','孩子跳入水中被水手们救起。','The child jumped into the water and was rescued by the sailors.']
], [
  ['情节转折','qíng jié zhuǎn zhé','plot twist','船长拿起枪瞄准儿子喊道：跳到水里，不然我就开枪了！','The captain aimed his gun at his son and shouted: Jump into the water, or I will shoot!','通过突然的情节转折展现人物的果断','Show decisiveness through a sudden plot twist']
]);

// Unit 7 — World Scenery
En('The Gondolas of Venice', [
  ['小艇','xiǎo tǐng','gondola','威尼斯的小艇有二三十英尺长。','The gondolas of Venice are twenty to thirty feet long.'],
  ['船夫','chuán fū','boatman','船夫的驾驶技术特别好。','The boatman driving skill is exceptional.'],
  ['纵横交叉','zòng héng jiāo chā','crisscross','河道纵横交叉。','The canals crisscross the city.'],
  ['簇拥','cù yōng','cluster','许多小艇簇拥在一起。','Many gondolas clustered together.'],
  ['静寂','jìng jì','silent','夜晚的威尼斯静寂无声。','Venice at night was silent.']
], [
  ['动静结合','dòng jìng jié hé','combining movement and stillness','水面上渐渐沉寂，只见月亮的影子在水中摇晃。','The water surface gradually fell silent, with only the reflection of the moon swaying in the water.','白天的喧闹与夜晚的静寂形成对比','Contrast the bustle of day with the silence of night']
]);

En('A Country of Pastures', [
  ['牧场','mù chǎng','pasture','荷兰是牧场之国。','The Netherlands is a country of pastures.'],
  ['碧绿','bì lǜ','emerald green','丝绒般碧绿的草原。','Velvet-like emerald green grasslands.'],
  ['奶牛','nǎi niú','dairy cow','黑白花牛在低头吃草。','Black and white cows grazed with heads lowered.'],
  ['骏马','jùn mǎ','fine horse','成群的骏马在草原上飞驰。','Herds of fine horses galloped across the grassland.'],
  ['安闲','ān xián','leisurely; at ease','牛羊安闲地吃着草。','Cattle and sheep grazed leisurely.']
], null);

En('The Pyramids', [
  ['金字塔','jīn zì tǎ','pyramid','金字塔是古埃及法老的坟墓。','The pyramids are the tombs of ancient Egyptian pharaohs.'],
  ['巍然屹立','wēi rán yì lì','stand towering','金字塔巍然屹立在沙漠上。','The pyramids stand towering on the desert.'],
  ['精巧','jīng qiǎo','exquisite','金字塔的建造十分精巧。','The construction of the pyramids was exquisite.'],
  ['夕照','xī zhào','sunset glow','金字塔在夕照中显得更加壮丽。','The pyramids appeared more magnificent in the sunset glow.'],
  ['石块','shí kuài','stone block','每块石头大约有两吨半重。','Each stone block weighs about two and a half tons.']
], null);

// Unit 8 — Humor and Wit
En('The Son of the Yang Family', [
  ['杨氏之子','yáng shì zhī zǐ','the son of the Yang family','杨氏之子九岁，甚聪惠。','The son of the Yang family was nine years old and very clever.'],
  ['聪惠','cōng huì','clever','此子甚聪惠。','This child was very clever.'],
  ['果','guǒ','fruit','孔指以示儿曰：此是君家果。','Kong pointed to them and said: These are fruits of your family.'],
  ['禽','qín','bird','未闻孔雀是夫子家禽。','I have not heard that peacocks are birds of your family.'],
  ['设果','shè guǒ','set out fruit','为设果，果有杨梅。','Fruit was set out, including bayberries.']
], [
  ['文言文对话','wén yán wén duì huà','classical dialogue','未闻孔雀是夫子家禽。','I have not heard that peacocks belong to your family.','巧妙运用姓氏谐音进行机智应答','Use clever wordplay on family names for a witty reply']
]);

En('Fingers', [
  ['大拇指','dà mǔ zhǐ','thumb','大拇指最肯吃苦。','The thumb is most willing to endure hardship.'],
  ['食指','shí zhǐ','index finger','食指的工作复杂，常常受伤。','The index finger work is complicated and it often gets hurt.'],
  ['中指','zhōng zhǐ','middle finger','中指相貌最堂皇。','The middle finger has the most imposing appearance.'],
  ['无名指','wú míng zhǐ','ring finger','无名指和小指最秀丽。','The ring finger and little finger are the most elegant.'],
  ['团结','tuán jié','unity','五根手指团结起来就有力量。','When five fingers unite, they have strength.']
], [
  ['拟人手法','nǐ rén shǒu fǎ','personification','大拇指在五指中，形状实在算不上美。身体矮而胖，头大而肥。','Among the five fingers, the thumb is not beautiful. It is short and fat, with a big, plump head.','用拟人手法赋予手指人的性格特点','Use personification to give fingers human personality traits']
]);

En('A Childhood Discovery', [
  ['发现','fā xiàn','discovery','我在九岁的时候就发现了有关胚胎发育的规律。','At age nine I discovered a pattern about embryonic development.'],
  ['胚胎','pēi tāi','embryo','人是由细胞组成的胚胎发育而来。','Humans develop from embryos composed of cells.'],
  ['进化','jìn huà','evolution','我想到了人的进化过程。','I thought about the process of human evolution.'],
  ['梦境','mèng jìng','dreamland','每天夜里做梦我都会飞。','Every night in my dreams I would fly.'],
  ['驱逐','qū zhú','expel','我被老师驱逐出了教室。','I was expelled from the classroom by the teacher.']
], null);

saveAndValidate('textbook_g5s2.js', code, 'TB_G5S2');
