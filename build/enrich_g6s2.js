/**
 * Enrich textbook_g6s2.js with vocabWords and grammarPoints
 * Grade 6 Semester 2 — All lessons
 * Run: cd /e/chinese && node build/enrich_g6s2.js
 */
const fs = require('fs');
const { enrichByEn, saveAndValidate } = require('./enrich_lib');
let code = fs.readFileSync('textbook_g6s2.js', 'utf8');
const En = (t, v, g) => { code = enrichByEn(code, t, v, g); };

// ═══════════════════════════════════════════
// UNIT 1 — Folk Customs (民风民俗)
// ═══════════════════════════════════════════

// Lesson 1: 北京的春节
En('Spring Festival in Beijing', [
  ['腊月','là yuè','twelfth lunar month','按照北京的老规矩，春节差不多在腊月的初旬就开始了。','Following old Beijing customs, Spring Festival preparations began around the first ten days of the twelfth lunar month.'],
  ['规矩','guī ju','rules; customs','按照北京的老规矩过春节。','Following the old customs of Beijing for Spring Festival.'],
  ['翡翠','fěi cuì','jade; emerald green','蒜泡得色如翡翠。','The garlic turned jade-green from soaking.'],
  ['万象更新','wàn xiàng gēng xīn','everything looks fresh and new','好在新年时显出万象更新的气象。','So that everything would look fresh and new for the New Year.'],
  ['截然不同','jié rán bù tóng','completely different','初一的光景与除夕截然不同。','New Year\u2019s Day was completely different from New Year\u2019s Eve.']
], [
  ['详略得当','xiáng lüè dé dàng','appropriate balance of detail and brevity','除夕、正月初一、正月十五写得详细，其他日子写得简略。','New Year\u2019s Eve, New Year\u2019s Day, and the Lantern Festival are described in detail while other days are brief.','按时间顺序写作时，重要部分详写，次要部分略写，使文章主次分明。','In chronological writing, describe important parts in detail and secondary parts briefly, making priorities clear.'],
  ['反问句','fǎn wèn jù','rhetorical question','世界上还有几个剧种是戴着面具演出的呢？','How many forms of drama in the world are performed wearing masks?','用反问句开头引起读者兴趣，增强表达效果。','Opening with rhetorical questions engages readers and strengthens expressive impact.']
]);

// Lesson 2: 腊八粥
En('Laba Porridge', [
  ['腻腻的','nì nì de','rich and thick','提到腊八粥，谁不是嘴里就立时生出一种甜甜的腻腻的感觉呢。','At the mention of Laba porridge, who would not immediately taste something sweet and rich?'],
  ['沸腾','fèi téng','boiling; bubbling','让它在锅中叹气似的沸腾着。','It bubbled away in the pot as if sighing.'],
  ['搅和','jiǎo huo','to stir; to mix','他妈妈正拿起一把锅铲在粥里搅和。','His mother was stirring the porridge with a spatula.'],
  ['浓稠','nóng chóu','thick; dense','锅里的粥也像是益发浓稠了。','The porridge in the pot seemed to be getting thicker.'],
  ['松劲','sōng jìn','discouraging; disheartening','八儿听了这种松劲的话，眼睛可急红了。','Hearing such discouraging words, Ba\u2019er\u2019s eyes turned red with impatience.']
], [
  ['拟人','nǐ rén','personification','让它在锅中叹气似的沸腾着。','It bubbled in the pot as if sighing.','把粥的沸腾比作叹气，赋予事物人的动作，使描写更加生动。','Comparing the porridge bubbling to sighing gives it human qualities, making the description more vivid.']
]);

// Lesson 3: 古诗三首 (Unit 1)
En('Three Ancient Poems', [
  ['寒食','hán shí','Cold Food Festival','春城无处不飞花，寒食东风御柳斜。','Spring fills the capital with flying blossoms on Cold Food Day.'],
  ['迢迢','tiáo tiáo','far, far away','迢迢牵牛星，皎皎河汉女。','Far, far away is the Cowherd Star, bright and fair is the Weaving Maiden.'],
  ['皎皎','jiǎo jiǎo','bright and clear','皎皎河汉女。','Bright and fair, the Weaving Maiden across the river.'],
  ['脉脉','mò mò','gazing silently with deep feeling','盈盈一水间，脉脉不得语。','With just one brimming river between them, they gaze and gaze but cannot speak.'],
  ['栖','qī','to roost; to perch','中庭地白树栖鸦。','The courtyard ground is white, crows roost in the trees.']
], null);

// Lesson 4: 藏戏
En('Tibetan Opera', [
  ['剧种','jù zhǒng','type of drama','世界上还有几个剧种是戴着面具演出的呢？','How many forms of drama in the world are performed wearing masks?'],
  ['面具','miàn jù','mask','身份相同的人物所戴的面具，其颜色和形状基本相同。','Characters of the same status wear masks of the same color and shape.'],
  ['僧人','sēng rén','monk','年轻的僧人唐东杰布许下宏愿。','The young monk Tang Dong Gyalpo made a solemn vow.'],
  ['雪域高原','xuě yù gāo yuán','snowy plateau','藏戏的种子随之撒遍了雪域高原。','The seeds of Tibetan Opera were scattered across the snowy plateau.'],
  ['随心所欲','suí xīn suǒ yù','as one pleases','双方随心所欲，优哉游哉。','Both sides did as they pleased, relaxed and unhurried.']
], null);

// ═══════════════════════════════════════════
// UNIT 2 — Foreign Classics (外国名著)
// ═══════════════════════════════════════════

// Lesson 5: 鲁滨逊漂流记
En('Robinson Crusoe (Excerpt)', [
  ['航海','háng hǎi','seafaring; navigation','他喜欢航海和冒险。','He loved seafaring and adventure.'],
  ['畏惧','wèi jù','to fear; to dread','他一点儿也不畏惧。','He was never afraid at all.'],
  ['荒岛','huāng dǎo','deserted island','这是一个无名的、没有人居住的荒岛。','This was an unnamed, uninhabited island.'],
  ['简陋','jiǎn lòu','crude; simple','用木头和船帆搭起一座简陋的帐篷。','He built a crude tent from wood and sails.'],
  ['宽慰','kuān wèi','to take comfort','其中也有一些值得宽慰的东西。','There were also things to take comfort in.']
], [
  ['对比','duì bǐ','contrast','鲁滨逊按照借方和贷方的格式记录幸与不幸。','Robinson recorded his fortunes and misfortunes using a debit and credit format.','通过好处和坏处的对比，表现主人公在困境中的乐观态度。','Contrasting good and bad shows the protagonist\u2019s optimism in adversity.']
]);

// Lesson 6: 骑鹅旅行记
En('The Wonderful Adventures of Nils (Excerpt)', [
  ['小狐仙','xiǎo hú xiān','little elf','男孩简直不敢相信他会变成小狐仙。','The boy could hardly believe he had been turned into an elf.'],
  ['讲和','jiǎng hé','to make peace','他觉得最聪明的做法就是去找小狐仙讲和。','He thought the smartest thing was to find the elf and make peace.'],
  ['无济于事','wú jì yú shì','to no avail','光那样站着等待是无济于事的。','Just standing and waiting was useless.'],
  ['九牛二虎之力','jiǔ niú èr hǔ zhī lì','tremendous effort','他费了九牛二虎之力总算爬了上去。','With tremendous effort he finally managed to climb up.'],
  ['候鸟','hòu niǎo','migratory birds','候鸟都回来了。','The migratory birds had returned.']
], null);

// Lesson 7: 汤姆·索亚历险记
En('The Adventures of Tom Sawyer (Excerpt)', [
  ['笼罩','lǒng zhào','to envelop; to shroud','圣彼得斯堡镇仍然笼罩在一片悲伤之中。','The town of St. Petersburg was still shrouded in sorrow.'],
  ['欣喜若狂','xīn xǐ ruò kuáng','ecstatic; wild with joy','街道上挤满了欣喜若狂的人。','The streets were filled with ecstatic people.'],
  ['辉煌','huī huáng','glorious; magnificent','这是这个小镇前所未有的最辉煌的一个夜晚。','It was the most glorious night the little town had ever known.'],
  ['吹嘘','chuī xū','to brag; to boast','他给他们讲着这次精彩的历险过程，同时还夸张地吹嘘了一番。','He told them about his adventure, embellishing it considerably.'],
  ['煞白','shà bái','deathly pale','汤姆的脸立刻变得煞白。','Tom\u2019s face went deathly pale.']
], null);

// ═══════════════════════════════════════════
// UNIT 3 — True Feelings (让真情流露)
// ═══════════════════════════════════════════

// Lesson 8: 匆匆
En('In a Hurry', [
  ['匆匆','cōng cōng','hurriedly; in a rush','在八千多日的匆匆里，除徘徊外，又剩些什么呢？','In these eight thousand hurried days, what is left besides lingering?'],
  ['空虚','kōng xū','empty; hollow','我的手确乎是渐渐空虚了。','My hands are growing emptier.'],
  ['徘徊','pái huái','to linger; to pace','只有徘徊罢了，只有匆匆罢了。','We can only linger, only hurry.'],
  ['挪移','nuó yí','to move; to shift','太阳他有脚啊，轻轻悄悄地挪移了。','The sun has feet and moves so softly.'],
  ['蒸融','zhēng róng','to evaporate; to dissolve','如薄雾，被初阳蒸融了。','Like thin mist, dissolved by the morning sun.']
], [
  ['排比','pái bǐ','parallelism','洗手的时候，日子从水盆里过去；吃饭的时候，日子从饭碗里过去。','When washing hands, days pass through the basin; when eating, days pass through the bowl.','用一连串相同结构的句子描写时间流逝，增强节奏感和表达力度。','A series of parallel sentences describing time passing enhances rhythm and expressive power.'],
  ['拟人','nǐ rén','personification','太阳他有脚啊，轻轻悄悄地挪移了。','The sun has feet and moves so softly.','把太阳拟人化，赋予人的动作，使抽象的时间变得具体可感。','Personifying the sun makes abstract time concrete and tangible.']
]);

// Lesson 9: 那个星期天
En('That Sunday', [
  ['盼望','pàn wàng','to long for; to look forward to','我还记得我的第一次盼望。','I still remember my first experience of longing.'],
  ['焦急','jiāo jí','anxious; impatient','等母亲回来，焦急又兴奋。','Waiting for Mother, anxious and excited.'],
  ['惆怅','chóu chàng','melancholy; wistful','孤独而惆怅的黄昏的到来。','The lonely, melancholy arrival of dusk.'],
  ['惊惶','jīng huáng','alarmed; panicked','我感到母亲惊惶地甩了甩手上的水。','I felt Mother shake the water from her hands in alarm.'],
  ['依偎','yī wēi','to nestle; to snuggle','男孩儿依偎在母亲怀里。','The boy nestled in his mother\u2019s arms.']
], [
  ['间接抒情','jiān jiē shū qíng','indirect emotional expression','光线正无可挽回地消逝，一派荒凉。','The light was fading irretrievably — desolation.','通过环境描写（光线变化）间接表达内心的失望和悲伤。','Express inner disappointment and sadness indirectly through environmental description (changing light).']
]);

// ═══════════════════════════════════════════
// UNIT 4 — Ideals and Beliefs (理想与信念)
// ═══════════════════════════════════════════

// Lesson 10: 古诗三首 (Unit 4) — titleEn is same as Lesson 3, need different approach
// This is the second "Three Ancient Poems" — use unit 4 context
// The titleEn match would find the first one, so we need to handle this carefully
// Looking at the file: both lessons have titleEn: "Three Ancient Poems"
// enrichByEn finds the FIRST match. We need to handle lesson 10 differently.
// We will do lesson 10 manually after the first pass.

// Lesson 11: 十六年前的回忆
En('Memories from Sixteen Years Ago', [
  ['被难日','bèi nàn rì','day of martyrdom','那是父亲的被难日，离现在已经十六年了。','It was the day my father was martyred, now sixteen years ago.'],
  ['严峻','yán jùn','grave; critical','局势越来越严峻。','The situation grew ever more critical.'],
  ['含糊','hán hu','vague; ambiguous','父亲竟这样含糊地回答我。','Father answered me so vaguely.'],
  ['沉着','chén zhuó','calm; composed','他的神情非常安定，非常沉着。','His expression was completely calm and composed.'],
  ['绞刑','jiǎo xíng','hanging; execution by hanging','李大钊等昨已执行绞刑。','Li Dazhao and others were executed by hanging yesterday.']
], [
  ['首尾呼应','shǒu wěi hū yìng','echoing between opening and closing','开头写1927年4月28日，结尾母亲让我记住这个日子。','The opening mentions April 28, 1927; the ending has Mother telling me to remember that date.','文章开头和结尾相互照应，使结构完整，加深读者印象。','The opening and closing echo each other, creating structural completeness and deepening the reader\u2019s impression.']
]);

// Lesson 12: 为人民服务
En('Serve the People', [
  ['彻底','chè dǐ','thoroughly; completely','彻底地为人民的利益工作的。','Working thoroughly for the interests of the people.'],
  ['鸿毛','hóng máo','goose feather (something insignificant)','或轻于鸿毛。','Or lighter than a goose feather.'],
  ['批评','pī píng','criticism','我们如果有缺点，就不怕别人批评指出。','If we have shortcomings, we welcome criticism.'],
  ['五湖四海','wǔ hú sì hǎi','all corners of the land','我们都是来自五湖四海。','We come from all corners of the land.'],
  ['追悼会','zhuī dào huì','memorial meeting','我们都要给他送葬，开追悼会。','We shall hold a funeral and a memorial meeting.']
], [
  ['引用论证','yǐn yòng lùn zhèng','argument by quotation','司马迁说过：人固有一死，或重于泰山，或轻于鸿毛。','Sima Qian said: Everyone must die; some deaths weigh more than Mount Tai, others less than a feather.','引用名人名言来证明观点，使论证更有说服力。','Quoting famous sayings to support arguments makes the reasoning more persuasive.']
]);

// Lesson 13: 董存瑞舍身炸暗堡
En('Dong Cunrui Sacrifices to Destroy the Bunker', [
  ['暗堡','àn bǎo','bunker; hidden fortress','狡猾的敌人在桥的两侧筑了墙，构成了一座暗堡。','The cunning enemy built walls on both sides of the bridge, forming a hidden bunker.'],
  ['仇恨','chóu hèn','hatred','两眼迸射出仇恨的火花。','His eyes blazed with hatred.'],
  ['匍匐','pú fú','to crawl; to creep','董存瑞一会儿匍匐前进。','Dong Cunrui sometimes crawled forward.'],
  ['导火索','dǎo huǒ suǒ','fuse','右手猛地一拉导火索。','He pulled the fuse with his right hand.'],
  ['坚毅','jiān yì','firm; resolute','两眼放射着坚毅的光芒。','His eyes shone with determination.']
], null);

// ═══════════════════════════════════════════
// UNIT 5 — Scientific Spirit (科学精神)
// ═══════════════════════════════════════════

// Lesson 14: 文言文二则
En('Two Classical Chinese Texts', [
  ['专心致志','zhuān xīn zhì zhì','wholeheartedly focused','其一人专心致志，惟弈秋之为听。','One student focused intently, listening only to Yi Qiu.'],
  ['弈','yì','to play chess','弈秋，通国之善弈者也。','Yi Qiu was the best chess player in the country.'],
  ['鸿鹄','hóng hú','swan; great ambition','一心以为有鸿鹄将至。','He kept thinking a swan was about to fly by.'],
  ['辩日','biàn rì','debating about the sun','孔子东游，见两小儿辩斗。','Confucius was traveling east when he saw two children arguing.'],
  ['探汤','tàn tāng','like reaching into boiling water','及其日中如探汤。','At noon it is hot as boiling water.']
], [
  ['文言文阅读','wén yán wén yuè dú','reading classical Chinese','为是其智弗若与？曰：非然也。','Is this because his intelligence is inferior? The answer is: No.','借助注释理解文言文大意，掌握常见文言字词的古今义。','Use annotations to grasp the general meaning of classical Chinese and master common character meanings.']
]);

// Lesson 15: 真理诞生于一百个问号之后
En('Truth Is Born After a Hundred Question Marks', [
  ['真理','zhēn lǐ','truth','真理诞生于一百个问号之后。','Truth is born after a hundred question marks.'],
  ['司空见惯','sī kōng jiàn guàn','commonplace; taken for granted','善于从细微的、司空见惯的现象中发现问题。','Excelling at finding problems in common, seemingly trivial phenomena.'],
  ['追根求源','zhuī gēn qiú yuán','to trace to the root','不断发问，追根求源。','Constantly asking questions and tracing them to their source.'],
  ['见微知著','jiàn wēi zhī zhù','to see the big picture from small signs','只要你见微知著，善于发问并不断探索。','If you can see the big picture from small signs, ask questions, and keep exploring.'],
  ['锲而不舍','qiè ér bù shě','perseverance; relentless','这种偶然的机遇只会给那些具有锲而不舍精神的人。','Such lucky opportunities only come to those who persist with determination.']
], [
  ['举例论证','jǔ lì lùn zhèng','argument by example','波义耳发现紫罗兰变红，制成石蕊试纸；魏格纳提出大陆漂移学说。','Boyle discovered violets turning red and created litmus paper; Wegener proposed continental drift.','用具体事例说明观点，按照发现问题、研究问题、解决问题的顺序展开。','Use specific examples to illustrate a point, organized as discovering, researching, and solving problems.']
]);

// Lesson 16: 表里的生物
En('The Creature Inside the Watch', [
  ['秒针','miǎo zhēn','second hand (of a clock)','它的秒针会自己走动。','Its second hand moved by itself.'],
  ['清脆','qīng cuì','clear and crisp','坚硬的表盖里还会发出清脆的声音。','From within its hard case came a clear, crisp sound.'],
  ['神秘','shén mì','mysterious','他这么说，就更增加了表的神秘。','This made the watch even more mysterious.'],
  ['齿轮','chǐ lún','gear','几个金黄色的齿轮。','Several golden gears.'],
  ['猜测','cāi cè','to guess; to speculate','证实我的猜测没有错。','My guess was confirmed correct.']
], null);

// Lesson 17: 他们那时候多有趣啊
En('How Fun It Was Back Then', [
  ['荧光屏','yíng guāng píng','screen; display','不像他们通常在荧光屏上看到的那样顺序移动。','Unlike the moving text on their screens.'],
  ['鄙夷','bǐ yí','contemptuous; scornful','玛琪脸上露出鄙夷不屑的神情。','Margie looked contemptuous and scornful.'],
  ['憎恶','zēng wù','to detest; to loathe','现在她比以往任何时候都更憎恶它。','Now she detested it more than ever.'],
  ['机器老师','jī qì lǎo shī','mechanical teacher','那个机器老师一次又一次地给她做地理测验。','The mechanical teacher kept testing her on geography.'],
  ['老式学校','lǎo shì xué xiào','old-fashioned school','那是几百年前的那种老式学校。','That was the old kind of school from centuries ago.']
], null);

// ═══════════════════════════════════════════
// UNIT 6 — Unforgettable Primary School Life
// ═══════════════════════════════════════════

// Lesson U6-1: 难忘的启蒙
En('Unforgettable First Steps', [
  ['启蒙','qǐ méng','enlightenment; first lessons','我时常怀着深深的感激之情，思念着我的启蒙老师们。','I often think of my first teachers with deep gratitude.'],
  ['播下','bō xià','to sow; to plant','在我童年的心灵里播下美好的种子。','They planted beautiful seeds in my young heart.'],
  ['绞尽脑汁','jiǎo jìn nǎo zhī','to rack one\u2019s brain','我绞尽脑汁也只写了三行字。','I racked my brain but could only write three lines.'],
  ['评语','píng yǔ','comments; remarks','我都期待着看到刘老师的评语。','I looked forward to seeing Mrs. Liu\u2019s comments.'],
  ['扉页','fēi yè','flyleaf; title page','扉页上写着鼓励的话。','Words of encouragement were written on the flyleaf.']
], null);

// Lesson U6-2: 同窗之情
En('Bonds of Classmates', [
  ['同窗','tóng chuāng','classmates; schoolmates','六年的时光，说长不长，说短不短。','Six years of time, not long, not short.'],
  ['同桌','tóng zhuō','desk-mate','我们从一年级就同桌，整整坐了六年。','We have been desk-mates since first grade, a full six years.'],
  ['拼命','pīn mìng','with all one\u2019s might','我和几个同学在终点线旁边拼命喊。','A few of us screamed from the finish line with all our might.'],
  ['纸条','zhǐ tiáo','note; slip of paper','小宇悄悄在我桌上放了一张纸条。','Xiao Yu quietly slipped a note on my desk.'],
  ['闪亮','shǎn liàng','shining; brilliant','那些记忆都会是我小学生活中最闪亮的篇章。','Those memories will be the brightest chapters of my primary school years.']
], null);

// Lesson U6-3: 致母校的一封信
En('A Letter to My Alma Mater', [
  ['母校','mǔ xiào','alma mater','亲爱的母校，我在您的怀抱里度过了六年。','Dear Alma Mater, I spent six years in your embrace.'],
  ['梧桐','wú tóng','parasol tree','窗外的梧桐树又绿了。','The parasol trees outside have turned green again.'],
  ['枝繁叶茂','zhī fán yè mào','branches lush with leaves','如今它已经枝繁叶茂。','Now its branches are lush with leaves.'],
  ['黑板报','hēi bǎn bào','blackboard bulletin','每个月，我和宣传委员一起出黑板报。','Every month I helped design the blackboard bulletin.'],
  ['无忧无虑','wú yōu wú lǜ','carefree','我在您的怀抱里度过了人生中最无忧无虑的六年。','I spent the six most carefree years of my life in your embrace.']
], null);

// Lesson U6-4: 毕业赠言
En('Graduation Farewell Words', [
  ['赠言','zèng yán','farewell words','毕业不是结束，而是新的开始。','Graduation is not an ending but a new beginning.'],
  ['万语千言','wàn yǔ qiān yán','thousands of words','我的心里有千言万语想说。','My heart overflows with thousands of words.'],
  ['洋洋洒洒','yáng yáng sǎ sǎ','writing freely and at length','到六年级能写出洋洋洒洒的作文。','By sixth grade we could write lengthy essays.'],
  ['灿烂','càn làn','brilliant; radiant','你们的笑容比我们还灿烂。','Your smiles were brighter than ours.'],
  ['迷茫','mí máng','bewildered; confused','也许我们会遇到困难，会感到迷茫。','We may face difficulties and feel bewildered.']
], [
  ['排比','pái bǐ','parallelism','我们一起笑过，一起哭过，一起吵过架，又很快和好。','We laughed together, cried together, argued, and quickly made up.','用排比句列举共同经历，增强情感的感染力。','Listing shared experiences through parallelism strengthens emotional impact.']
]);

// ═══════════════════════════════════════════
// UNIT 7 — Classic Poetry Recitation (古诗词诵读)
// ═══════════════════════════════════════════
// Note: These are in the "poems" array, not "lessons" array.
// enrichByEn searches for titleEn near "title:" and then looks for "exercises:["
// The poem entries have exercises, so this should work.

// Poem 1: 采薇
En('Gathering Thorn-fern (Excerpt)', [
  ['采薇','cǎi wēi','gathering thorn-fern','昔我往矣，杨柳依依。','When I left long ago, the willows swayed gently.'],
  ['依依','yī yī','gently swaying; reluctant to part','昔我往矣，杨柳依依。','When I left long ago, the willows swayed gently.'],
  ['霏霏','fēi fēi','falling thick and fast','今我来思，雨雪霏霏。','Now I return, snow falls thick and fast.'],
  ['迟迟','chí chí','slow; sluggish','行道迟迟，载渴载饥。','The road is long and slow, I am thirsty and hungry.'],
  ['伤悲','shāng bēi','grief; sorrow','我心伤悲，莫知我哀。','My heart is full of sorrow, no one knows my grief.']
], null);

// Poem 2: 送元二使安西
En('Seeing Yuan Er Off to Anxi', [
  ['渭城','wèi chéng','Weicheng (ancient city)','渭城朝雨浥轻尘。','Morning rain in Weicheng dampens the light dust.'],
  ['浥','yì','to moisten; to dampen','渭城朝雨浥轻尘。','Morning rain in Weicheng dampens the light dust.'],
  ['客舍','kè shè','inn; guesthouse','客舍青青柳色新。','The inn is fresh and green with new willow color.'],
  ['阳关','yáng guān','Yangguan Pass','西出阳关无故人。','West of Yangguan Pass there are no old companions.'],
  ['故人','gù rén','old friends','西出阳关无故人。','West of Yangguan Pass there are no old friends.']
], null);

// Poem 3: 春夜喜雨
En('Happy Rain on a Spring Night', [
  ['时节','shí jié','season','好雨知时节，当春乃发生。','Good rain knows the right season and comes when spring arrives.'],
  ['潜入','qián rù','to slip in secretly','随风潜入夜。','Slipping in with the wind at night.'],
  ['润物','rùn wù','to moisten all things','润物细无声。','It moistens all things silently.'],
  ['野径','yě jìng','country paths','野径云俱黑。','Country paths and clouds are all dark.'],
  ['锦官城','jǐn guān chéng','Chengdu (ancient name)','花重锦官城。','Flowers heavy with rain throughout Chengdu.']
], null);

// Poem 4: 早春呈水部张十八员外
En('Early Spring, Presented to Zhang of the Water Bureau', [
  ['天街','tiān jiē','imperial street','天街小雨润如酥。','Light rain on the imperial street, smooth as butter.'],
  ['酥','sū','butter; smooth and moist','天街小雨润如酥。','Light rain on the imperial street, smooth as butter.'],
  ['遥看','yáo kàn','to look from afar','草色遥看近却无。','Grass color visible from afar, invisible up close.'],
  ['绝胜','jué shèng','far surpasses','绝胜烟柳满皇都。','Far surpassing the hazy willows that fill the capital.'],
  ['皇都','huáng dū','imperial capital','绝胜烟柳满皇都。','Far surpassing the hazy willows filling the imperial capital.']
], null);

// Poem 5: 江上渔者
En('Fisherman on the River', [
  ['渔者','yú zhě','fisherman','君看一叶舟，出没风波里。','Look at that little boat, tossing in the wind and waves.'],
  ['鲈鱼','lú yú','perch (fish)','但爱鲈鱼美。','Loving only the delicious perch.'],
  ['一叶舟','yí yè zhōu','a boat like a leaf','君看一叶舟。','Look at that little boat like a leaf.'],
  ['风波','fēng bō','wind and waves','出没风波里。','Tossing and turning in the wind and waves.'],
  ['往来','wǎng lái','coming and going','江上往来人。','People come and go along the river.']
], null);

// Poem 6: 泊船瓜洲
En('Mooring at Guazhou', [
  ['泊船','bó chuán','to moor a boat','泊船瓜洲。','Mooring the boat at Guazhou.'],
  ['京口','jīng kǒu','Jingkou (ancient Zhenjiang)','京口瓜洲一水间。','Jingkou and Guazhou, just a river apart.'],
  ['钟山','zhōng shān','Zhong Mountain (Nanjing)','钟山只隔数重山。','Zhong Mountain is only a few peaks away.'],
  ['春风','chūn fēng','spring wind','春风又绿江南岸。','Spring wind has greened the south bank again.'],
  ['明月','míng yuè','bright moon','明月何时照我还。','When will the bright moon light my way home?']
], null);

// Poem 7: 游园不值
En('Visiting a Garden, Finding No One Home', [
  ['屐齿','jī chǐ','teeth of wooden clogs','应怜屐齿印苍苔。','Perhaps pitying the clogs marks on the green moss.'],
  ['苍苔','cāng tái','green moss','应怜屐齿印苍苔。','Perhaps pitying the wooden clogs marks on the green moss.'],
  ['柴扉','chái fēi','simple wooden gate','小扣柴扉久不开。','I knock softly on the wooden gate but it stays closed.'],
  ['春色','chūn sè','spring scenery','春色满园关不住。','The spring scenery filling the garden cannot be confined.'],
  ['红杏','hóng xìng','red apricot blossom','一枝红杏出墙来。','A single branch of red apricot pokes over the wall.']
], null);

// Poem 8: 卜算子·送鲍浩然之浙东
En("Divination \u2014 Seeing Bao Haoran Off to Eastern Zhejiang", [
  ['眼波','yǎn bō','bright glance','水是眼波横。','Water is the glance of bright eyes.'],
  ['眉峰','méi fēng','brow peaks','山是眉峰聚。','Mountains are like furrowed brows.'],
  ['盈盈','yíng yíng','beautiful; brimming','眉眼盈盈处。','Where brows and eyes meet beautifully.'],
  ['送春归','sòng chūn guī','sending spring away','才始送春归，又送君归去。','I just sent spring away, and now I send you off too.'],
  ['和春住','hé chūn zhù','stay with spring','若到江南赶上春，千万和春住。','If you reach Jiangnan in time for spring, do stay with spring forever.']
], null);

// Poem 9: 浣溪沙
En('Silk-Washing Stream', [
  ['兰芽','lán yá','orchid shoots','山下兰芽短浸溪。','Short orchid shoots soak in the stream below the mountain.'],
  ['子规','zǐ guī','cuckoo bird','萧萧暮雨子规啼。','Evening rain patters, the cuckoo cries.'],
  ['再少','zài shào','to be young again','谁道人生无再少？','Who says life cannot be young again?'],
  ['白发','bái fà','white hair; old age','休将白发唱黄鸡。','Do not lament growing old and time passing.'],
  ['流水','liú shuǐ','flowing water','门前流水尚能西！','The stream before the gate still flows west!']
], null);

// Poem 10: 清平乐
En('Pure Serene Music', [
  ['寂寞','jì mò','lonely; solitary','春归何处？寂寞无行路。','Where has spring gone? Lonely, it left no path.'],
  ['踪迹','zōng jì','traces; whereabouts','春无踪迹谁知？','Who knows spring\u2019s whereabouts?'],
  ['黄鹂','huáng lí','oriole','除非问取黄鹂。','Perhaps only the oriole knows.'],
  ['百啭','bǎi zhuàn','a hundred warbling songs','百啭无人能解。','A hundred warbling songs no one can understand.'],
  ['蔷薇','qiáng wēi','roses; climbing roses','因风飞过蔷薇。','Riding the wind, it flies past the roses.']
], null);

// ═══════════════════════════════════════════
// Handle Lesson 10 (second "Three Ancient Poems") manually
// Since enrichByEn would match the first occurrence, we do a manual insertion
// ═══════════════════════════════════════════
(function() {
  // Find the second "Three Ancient Poems" by looking for the one near "Horse Poem" / 马诗 content
  const marker = 'titleEn: "Three Ancient Poems",\n      difficulty: 4,';
  const idx = code.indexOf(marker);
  if (idx === -1) {
    console.log('MANUAL: Could not find Unit 4 Three Ancient Poems');
    return;
  }
  // Find the exercises block after this
  const afterTitle = code.slice(idx);
  const exMatch = afterTitle.match(/\n(\s+)exercises:\s*\[/);
  if (!exMatch) {
    console.log('MANUAL: No exercises found for Unit 4 Three Ancient Poems');
    return;
  }
  const exPos = idx + afterTitle.indexOf(exMatch[0]);
  const between = code.slice(idx, exPos);
  const indent = exMatch[1];

  if (between.includes('vocabWords:')) {
    console.log('MANUAL: Unit 4 Three Ancient Poems already has vocabWords');
    return;
  }

  const vocabArr = [
    ['大漠','dà mò','vast desert','大漠沙如雪，燕山月似钩。','Desert sands like snow, Yanshan moon like a hook.'],
    ['金络脑','jīn luò nǎo','golden bridle','何当金络脑，快走踏清秋。','When will I wear a golden bridle and gallop through the clear autumn?'],
    ['焚烧','fén shāo','to burn; to incinerate','烈火焚烧若等闲。','Fierce fire burns it as if nothing at all.'],
    ['清白','qīng bái','pure and upright','要留清白在人间。','To leave its pure whiteness in the world.'],
    ['坚劲','jiān jìng','strong and firm','千磨万击还坚劲。','After a thousand trials it remains strong and firm.']
  ];
  const grammarArr = [
    ['托物言志','tuō wù yán zhì','expressing aspirations through objects','千锤万凿出深山，烈火焚烧若等闲。','A thousand hammers carve it from the mountain; fierce fire burns it as nothing.','借马、石灰、竹石等具体事物表达诗人的品格和志向。','Through horses, lime, and bamboo, the poets express their character and ideals.']
  ];

  let insertion = '';
  // Build vocab
  insertion += '\n' + indent + 'vocabWords: [\n';
  vocabArr.forEach((v, i) => {
    const e = v[2].replace(/'/g, '\u2019');
    const se = v[4].replace(/'/g, '\u2019');
    insertion += indent + '  {word:\'' + v[0] + '\',pinyin:\'' + v[1] + '\',en:\'' + e + '\',sentence:\'' + v[3] + '\',sentenceEn:\'' + se + '\'}';
    insertion += (i < vocabArr.length - 1 ? ',' : '') + '\n';
  });
  insertion += indent + '],';

  // Build grammar
  insertion += '\n' + indent + 'grammarPoints: [\n';
  grammarArr.forEach((g, i) => {
    const fix = s => s.replace(/'/g, '\u2019');
    insertion += indent + '  {point:\'' + fix(g[0]) + '\',pointEn:\'' + fix(g[1]) + '\',example:\'' + fix(g[2]) + '\',exampleEn:\'' + fix(g[3]) + '\',explanation:\'' + fix(g[4]) + '\',explanationEn:\'' + fix(g[5]) + '\'}';
    insertion += (i < grammarArr.length - 1 ? ',' : '') + '\n';
  });
  insertion += indent + '],';

  code = code.slice(0, exPos) + insertion + code.slice(exPos);
  console.log('MANUAL: Unit 4 Three Ancient Poems enriched OK');
})();

saveAndValidate('textbook_g6s2.js', code, 'TB_G6S2');
