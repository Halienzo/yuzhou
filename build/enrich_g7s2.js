/**
 * Enrich textbook_g7s2.js with vocabWords and grammarPoints
 * Grade 7 Semester 2 — All lessons (46 lesson-level entries)
 * Run: cd /e/chinese && node build/enrich_g7s2.js
 */
const fs = require('fs');
const { enrichByEn, saveAndValidate } = require('./enrich_lib');
let code = fs.readFileSync('textbook_g7s2.js', 'utf8');
const En = (t, v, g) => { code = enrichByEn(code, t, v, g); };

// ═══════════════════════════════════════════
// UNIT 1 — Outstanding Figures (杰出人物)
// ═══════════════════════════════════════════

// Lesson 1: 邓稼先 (Deng Jiaxian)
En('Deng Jiaxian', [
  ['元勋','yuán xūn','founding hero; person of great merit','邓稼先是中华民族核武器事业的奠基人和开拓者，张爱萍将军称他为"两弹"元勋。','Deng Jiaxian was the founder and pioneer of the Chinese nuclear weapons program; General Zhang Aiping called him the founding hero of the Two Bombs.'],
  ['鞠躬尽瘁','jū gōng jìn cuì','to devote oneself completely','鞠躬尽瘁，死而后已正好准确地描述了他的一生。','To devote oneself completely until death accurately describes his entire life.'],
  ['鲜为人知','xiǎn wéi rén zhī','rarely known to others','对这一转变做出了巨大贡献的，有一位长期以来鲜为人知的科学家。','A scientist who had long been rarely known to others made enormous contributions to this transformation.'],
  ['截然不同','jié rán bù tóng','completely different','他们的性格和为人却截然不同。','Their personalities and conduct were completely different.'],
  ['锋芒毕露','fēng máng bì lù','to show off talent aggressively','奥本海默是一个拔尖的人物，锋芒毕露。','Oppenheimer was an outstanding figure who showed off his talent aggressively.']
], [
  ['对比手法','duì bǐ shǒu fǎ','contrast technique','邓稼先与奥本海默的性格截然不同——甚至可以说他们走向了两个相反的极端。','The personalities of Deng Jiaxian and Oppenheimer were completely different — one could even say they went to two opposite extremes.','通过对比两个人物的性格差异，突出邓稼先忠厚朴实的品质。','By contrasting the character differences of two figures, the author highlights Deng Jiaxian\u2019s loyal and plain qualities.'],
  ['记叙与抒情结合','jì xù yǔ shū qíng jié hé','combining narration with lyrical expression','稼先为人忠诚纯正，是我最敬爱的挚友。他的无私的精神与巨大的贡献是你的也是我的永恒的骄傲。','Jiaxian was loyal and sincere, my most beloved close friend. His selfless spirit and great contributions are your and my eternal pride.','文章在叙述事实的基础上融入深沉的抒情，使读者感受到作者对邓稼先的敬仰与怀念。','The article weaves deep lyrical expression into factual narration, letting readers feel the author\u2019s admiration and longing for Deng Jiaxian.']
]);

// Lesson 2: 说和做——记闻一多先生言行片段
En('Words and Deeds \\u2014 Fragments of Mr. Wen Yiduo', [
  ['锲而不舍','qiè ér bù shě','to persevere without giving up','他正向古代典籍钻探，有如向地壳寻求宝藏，锲而不舍。','He was delving into ancient texts as if seeking treasure in the earth, persevering without giving up.'],
  ['沥尽心血','lì jìn xīn xuè','to exhaust every drop of effort','他沥尽心血，为民族文化事业做出了巨大贡献。','He exhausted every drop of effort and made enormous contributions to the national cultural cause.'],
  ['群蚁排衙','qún yǐ pái yá','ants lined up in formation (describing dense notes)','杂乱的书籍中到处是密密麻麻的小楷，如群蚁排衙。','Among the chaotic books were tiny characters packed tightly like ants lined up in formation.'],
  ['慷慨淋漓','kāng kǎi lín lí','impassioned and forceful','他慷慨淋漓地发表了演说。','He delivered an impassioned and forceful speech.'],
  ['气冲斗牛','qì chōng dǒu niú','anger or passion that reaches the heavens','闻一多先生大无畏地在群众大会上大骂特务，气冲斗牛。','Mr. Wen Yiduo fearlessly cursed the secret agents at a public rally, his passion reaching the heavens.']
], [
  ['夹叙夹议','jiā xù jiā yì','interweaving narration and commentary','文章夹叙夹议，在叙述闻一多先生言行的同时加入评论，使人物形象更加鲜明。','The article interweaves narration and commentary, adding evaluation while recounting Mr. Wen Yiduo\u2019s words and deeds, making the figure more vivid.','在记叙文中穿插议论，能深化主题，揭示人物精神品质。','Inserting commentary into narrative writing deepens the theme and reveals the spiritual qualities of a character.']
]);

// Lesson 3: 回忆鲁迅先生（节选）
En('Recollections of Mr. Lu Xun (Excerpt)', [
  ['轻捷','qīng jié','light and nimble','鲁迅先生走路很轻捷。','Mr. Lu Xun walked lightly and nimbly.'],
  ['草率','cǎo shuài','careless; sloppy','鲁迅先生不大注意人的衣裳，他说谁穿什么衣裳他看不见，但他看见了就不会草率地评论。','Mr. Lu Xun did not pay much attention to clothing, but once he noticed something he would not comment carelessly.'],
  ['深恶痛绝','shēn wù tòng jué','to detest utterly','鲁迅先生对剥削人民的行为深恶痛绝。','Mr. Lu Xun utterly detested behavior that exploited the people.'],
  ['不以为然','bù yǐ wéi rán','to disagree; to disapprove','鲁迅先生对此不以为然地笑了笑。','Mr. Lu Xun smiled with gentle disapproval.'],
  ['忧郁','yōu yù','melancholy; sorrowful','鲁迅先生有时会显出忧郁的神色。','Mr. Lu Xun sometimes displayed a melancholy expression.']
], null);

// Lesson 4: 孙权劝学
En('Sun Quan Urges Learning', [
  ['卿','qīng','a term of address used by rulers for ministers','卿今当涂掌事，不可不学。','You are now in charge of important affairs and must not neglect learning.'],
  ['涉猎','shè liè','to browse; to read widely','但当涉猎，见往事耳。','You need only browse widely and learn from past events.'],
  ['刮目相待','guā mù xiāng dài','to regard someone with new eyes','士别三日，即更刮目相待。','When a scholar has been away for three days, one should regard him with entirely new eyes.'],
  ['吴下阿蒙','wú xià ā méng','the simple-minded Ah Meng of Wu (used for someone who has not improved)','卿今者才略，非复吴下阿蒙。','Your talent and strategy now are no longer that of the simple Ah Meng of old.'],
  ['博士','bó shì','classical scholar; learned person','孤岂欲卿治经为博士邪。','Do I wish for you to study the classics and become a learned scholar?']
], [
  ['对话推动叙事','duì huà tuī dòng xù shì','dialogue-driven narration','全文主要通过孙权与吕蒙、鲁肃与吕蒙的对话展开叙事。','The entire text unfolds its narrative mainly through dialogues between Sun Quan and Lu Meng, and between Lu Su and Lu Meng.','以对话为主的叙事方式，言简意丰，既推动情节又展现人物性格。','Dialogue-driven narration is concise yet rich, advancing the plot while revealing character traits.']
]);

// Writing: 写出人物的精神
En('Writing: Capturing a Person\\u2019s Spirit', [
  ['典型细节','diǎn xíng xì jié','typical details','通过典型细节展现人物精神。','Reveal a person\u2019s spirit through typical details.'],
  ['对比衬托','duì bǐ chèn tuō','contrast and foil','用对比衬托的手法使人物形象更加鲜明。','Use contrast and foil techniques to make the character image more vivid.'],
  ['侧面描写','cè miàn miáo xiě','indirect description','除了正面描写，还可以用侧面描写来表现人物精神。','Besides direct description, you can also use indirect description to convey a person\u2019s spirit.'],
  ['言行一致','yán xíng yī zhì','consistency between words and deeds','写人要抓住言行一致或言行矛盾的地方。','When writing about people, capture where words and deeds are consistent or contradictory.'],
  ['精神品质','jīng shén pǐn zhì','spiritual quality; moral character','作文要深入挖掘人物的精神品质。','Compositions should deeply explore the spiritual qualities of characters.']
], null);

// ReadWrite: 副词
En('Adverbs', [
  ['副词','fù cí','adverb','副词一般用在动词或形容词前边，起修饰、限制作用。','Adverbs are generally placed before verbs or adjectives to modify or limit them.'],
  ['程度副词','chéng dù fù cí','degree adverb','很、非常、十分、极其等都是常见的程度副词。','Very, extremely, greatly, and exceedingly are all common degree adverbs.'],
  ['否定副词','fǒu dìng fù cí','negative adverb','不、没、未等是否定副词。','Bu, mei, and wei are negative adverbs.'],
  ['频率副词','pín lǜ fù cí','frequency adverb','常常、经常、偶尔、从不等是频率副词。','Often, frequently, occasionally, and never are frequency adverbs.'],
  ['语气副词','yǔ qì fù cí','tone adverb','难道、究竟、到底等是语气副词。','Nandao, jiujing, and daodi are tone adverbs.']
], null);

// ═══════════════════════════════════════════
// UNIT 2 — Patriotic Sentiments (家国情怀)
// ═══════════════════════════════════════════

// Lesson 5: 黄河颂
En('Ode to the Yellow River', [
  ['气魄','qì pò','imposing manner; grandeur','黄河以它英雄的气魄，出现在亚洲的原野。','The Yellow River appears on the plains of Asia with its heroic grandeur.'],
  ['澎湃','péng pài','surging; roaring','惊涛澎湃，掀起万丈狂澜。','Surging waves raise towering billows.'],
  ['狂澜','kuáng lán','raging waves','掀起万丈狂澜。','Raising raging waves ten thousand feet high.'],
  ['屏障','píng zhàng','barrier; shield','用你那英雄的体魄筑成我们民族的屏障。','With your heroic body you form the barrier of our nation.'],
  ['哺育','bǔ yù','to nurture; to nourish','我们民族的伟大精神，将要在你的哺育下发扬滋长。','The great spirit of our nation will grow and flourish under your nurturing.']
], [
  ['反复与呼告','fǎn fù yǔ hū gào','repetition and apostrophe','啊！黄河！反复出现三次，营造出回环往复的韵律美。','Ah! Yellow River! appears three times, creating a rhythmic beauty of cyclical repetition.','反复使用相同的句式和呼告，能增强诗歌的气势和感染力。','Repeated use of the same sentence patterns and apostrophe strengthens the momentum and emotional impact of poetry.']
]);

// Lesson 6: 老山界
En('Laoshan Pass', [
  ['攀谈','pān tán','to chat; to make conversation','我们就跟瑶民攀谈起来。','We began chatting with the Yao villagers.'],
  ['苛捐杂税','kē juān zá shuì','excessive taxes and levies','我们谈到苛捐杂税。','We talked about the excessive taxes and levies.'],
  ['酣然入梦','hān rán rù mèng','to fall into a deep sleep','就在这山路上酣然入梦了。','They fell into a deep sleep right there on the mountain path.'],
  ['陡峭','dǒu qiào','steep; precipitous','这么陡峭的山，这么茂密的树林。','Such a steep mountain and such dense forests.'],
  ['矗立','chù lì','to stand upright; to tower','满天都是星光，火把也亮起来了，从山脚向上望，只见火把排成许多之字形。','Stars filled the sky and torches lit up; looking up from the foot of the mountain, the torches formed many zigzag shapes.']
], [
  ['时间顺序','shí jiān shùn xù','chronological order','文章按时间顺序叙述红军翻越老山界的经过，从下午出发到第二天下午翻过山顶。','The article narrates the Red Army crossing Laoshan Pass in chronological order, from departure in the afternoon to crossing the summit the next afternoon.','按时间顺序组织材料，能清晰地展现事件的发展过程。','Organizing material in chronological order clearly presents the development of events.']
]);

// Lesson 7: 谁是最可爱的人
En('Who Are the Most Beloved People', [
  ['淳朴','chún pǔ','simple and honest','他们的气质是那样地淳朴和谦逊。','Their temperament is so simple, honest, and modest.'],
  ['坚韧','jiān rèn','tenacious; resilient','他们的意志是那样地坚韧和刚强。','Their willpower is so tenacious and unyielding.'],
  ['覆灭','fù miè','to be destroyed; to perish','好使自己的主力不致覆灭。','So that their main forces would not be destroyed.'],
  ['豪迈','háo mài','bold and heroic','志愿军战士们有着豪迈的气概。','The volunteer soldiers possessed bold and heroic spirit.'],
  ['可歌可泣','kě gē kě qì','worthy of song and tears; deeply moving','这是许许多多可歌可泣的英雄人物创造出来的伟大胜利。','This was a great victory created by countless deeply moving heroes.']
], [
  ['排比','pái bǐ','parallelism','他们的品质是那样地纯洁和高尚，他们的意志是那样地坚韧和刚强，他们的气质是那样地淳朴和谦逊。','Their character is so pure and noble, their willpower so tenacious and unyielding, their temperament so simple and modest.','连续使用相同句式的排比，增强了语势，充分表达了作者对志愿军战士的赞美之情。','Consecutive parallel sentences with identical patterns strengthen the rhetorical force, fully expressing the author\u2019s praise for the volunteer soldiers.']
]);

// Lesson 8: 土地的誓言
En('Oath to the Land', [
  ['挚痛','zhì tòng','deeply sincere and painful','对于广大的关东原野，我心里怀着挚痛的热爱。','For the vast Guandong plains, I feel a deeply sincere and painful love in my heart.'],
  ['泛滥','fàn làn','to flood; to overflow','我常常感到它在泛滥着一种热情。','I often felt it overflowing with a kind of passion.'],
  ['亘古','gèn gǔ','since time immemorial','在那亘古的地层里，有着一股燃烧的洪流。','In those strata from time immemorial, there is a burning torrent.'],
  ['斑斓','bān lán','colorful; brilliant','我想起斑斓的山雕，奔驰的鹿群。','I recall the brilliant mountain eagles and galloping herds of deer.'],
  ['默契','mò qì','tacit understanding; unspoken agreement','在热情的默契里它们彼此呼唤着。','In their passionate tacit understanding they call to each other.']
], null);

// Lesson 9: 木兰诗
En('The Ballad of Mulan', [
  ['机杼','jī zhù','loom and shuttle','不闻机杼声，唯闻女叹息。','The sound of the loom was not heard, only the girl\u2019s sighs.'],
  ['戎机','róng jī','military affairs; warfare','万里赴戎机，关山度若飞。','She rode ten thousand li to join the war, crossing passes and mountains as if flying.'],
  ['朔气','shuò qì','cold air of the north','朔气传金柝，寒光照铁衣。','Northern cold air carried the sound of the watchman\u2019s clapper; cold light shone on iron armor.'],
  ['扑朔迷离','pū shuò mí lí','confusing and hard to distinguish','雄兔脚扑朔，雌兔眼迷离。','The male hare hops about, the female hare has misty eyes.'],
  ['策勋','cè xūn','to record meritorious deeds','策勋十二转，赏赐百千强。','Her meritorious deeds were recorded at the highest rank, and she was richly rewarded.']
], [
  ['互文','hù wén','mutual text (a rhetorical device where two clauses complete each other)','东市买骏马，西市买鞍鞯，南市买辔头，北市买长鞭。','At the east market she bought a fine horse, at the west market a saddle pad, at the south market a bridle, at the north market a long whip.','互文是古诗常用的修辞手法，上下句互相补充，合起来表达一个完整意思。','Mutual text is a common rhetorical device in classical poetry where clauses supplement each other to express a complete meaning.'],
  ['顶真','dǐng zhēn','anadiplosis (repeating the ending of one clause at the start of the next)','归来见天子，天子坐明堂。','She returned to see the emperor; the emperor sat in the bright hall.','前一句结尾的词语作为后一句的开头，使语句紧凑连贯，增强韵律感。','Using the ending word of one clause as the beginning of the next makes the language compact and coherent, enhancing rhythm.']
]);

// Writing: 学习抒情
En('Writing: Learning to Express Emotions', [
  ['直抒胸臆','zhí shū xiōng yì','to express feelings directly','直抒胸臆是最基本的抒情方式。','Expressing feelings directly is the most fundamental mode of emotional expression.'],
  ['借景抒情','jiè jǐng shū qíng','to express feelings through scenery','通过描写景物来间接表达内心情感。','Express inner feelings indirectly through describing scenery.'],
  ['融情于事','róng qíng yú shì','to blend emotion into narrative','在叙事中自然地融入情感。','Blend emotions naturally into the narrative.'],
  ['触景生情','chù jǐng shēng qíng','to be moved by what one sees','看到眼前的景物而引发内心的情感。','Inner feelings are stirred by seeing the scenery before one\u2019s eyes.'],
  ['含蓄','hán xù','implicit; restrained','好的抒情往往是含蓄的，不直接说破。','Good emotional expression is often implicit, not stated bluntly.']
], null);

// Comprehensive: 天下国家
En('Our Nation and Homeland', [
  ['天下兴亡','tiān xià xīng wáng','the rise and fall of a nation','天下兴亡，匹夫有责。','The rise and fall of a nation is the responsibility of every citizen.'],
  ['匹夫有责','pǐ fū yǒu zé','every common person has a responsibility','天下兴亡，匹夫有责。','The rise and fall of a nation is the responsibility of every common person.'],
  ['家国情怀','jiā guó qíng huái','patriotic sentiments','家国情怀是中华民族的优良传统。','Patriotic sentiments are a fine tradition of the Chinese nation.'],
  ['赤子之心','chì zǐ zhī xīn','a heart of pure devotion','爱国志士都怀着一颗赤子之心。','Patriots all harbor a heart of pure devotion.'],
  ['忧国忧民','yōu guó yōu mín','to worry about the country and the people','古代文人常怀忧国忧民之情。','Ancient scholars often harbored feelings of worry for the country and the people.']
], null);

// ReadWrite: 连词
En('Conjunctions', [
  ['连词','lián cí','conjunction','连词是用来连接词、短语或句子的虚词。','A conjunction is a function word used to connect words, phrases, or sentences.'],
  ['转折连词','zhuǎn zhé lián cí','adversative conjunction','虽然、但是、然而等是转折连词。','Although, but, and however are adversative conjunctions.'],
  ['因果连词','yīn guǒ lián cí','causal conjunction','因为、所以、因此等是因果连词。','Because, therefore, and hence are causal conjunctions.'],
  ['递进连词','dì jìn lián cí','progressive conjunction','不但、而且、甚至等是递进连词。','Not only, but also, and even are progressive conjunctions.'],
  ['并列连词','bìng liè lián cí','coordinate conjunction','和、跟、与、以及等是并列连词。','And, with, as well as are coordinate conjunctions.']
], null);

// ═══════════════════════════════════════════
// UNIT 3 — Ordinary People (凡人小事)
// ═══════════════════════════════════════════

// Lesson 10: 阿长与《山海经》
En('Ah Chang and the Classic of Mountains and Seas', [
  ['惶急','huáng jí','anxious and flustered','她惶急地看着四周。','She looked around anxiously and in a flustered manner.'],
  ['诘问','jié wèn','to question closely','大家诘问她取来的方法。','Everyone questioned her closely about how she obtained it.'],
  ['渴慕','kě mù','to long for; to yearn for','我渴慕着绘图的《山海经》。','I yearned for an illustrated edition of the Classic of Mountains and Seas.'],
  ['疏懒','shū lǎn','lazy and careless','她生得黄胖而矮，虽然也并不十分疏懒。','She was stout, yellow-skinned, and short, though not particularly lazy and careless.'],
  ['震悚','zhèn sǒng','to shudder with fear','这又使我发生新的敬意了，别人不肯做的事她却能够做成，这实在令人震悚。','This made me feel new respect for her; she could accomplish what others would not do, which was truly astonishing.']
], [
  ['欲扬先抑','yù yáng xiān yì','to praise by first criticizing','作者先写阿长的种种缺点和令人讨厌的习惯，再写她为我买来山海经的感人之举。','The author first writes about Ah Chang\u2019s various shortcomings and annoying habits, then describes her touching act of buying the Classic of Mountains and Seas for him.','先写不好的方面，再转折写好的方面，形成强烈对比，使人物形象更加丰满。','Writing negative aspects first, then turning to positive ones creates a strong contrast that makes the character more complete.']
]);

// Lesson 11: 老王
En('Old Wang', [
  ['伛偻','yǔ lǚ','hunched; bent over','他伛偻着身子进来。','He came in with his body hunched over.'],
  ['惶恐','huáng kǒng','terrified; fearful','我看他那样子，心里只有同情和惶恐。','Seeing him like that, I felt only sympathy and unease.'],
  ['塌败','tā bài','dilapidated; run-down','他住在一个塌败的小屋里。','He lived in a dilapidated little house.'],
  ['愧怍','kuì zuò','ashamed; feeling guilty','几年过去了，我渐渐明白：那是一个幸运的人对一个不幸者的愧怍。','Years later, I gradually understood: it was the shame of a fortunate person toward an unfortunate one.'],
  ['滞笨','zhì bèn','clumsy; dull','他那直僵僵的身体好像不能坐，稍一弯曲就会散架似的，动作显得很滞笨。','His stiff body seemed unable to sit down, as if it would fall apart with the slightest bend, making his movements seem very clumsy.']
], null);

// Lesson 12: 台阶
En('The Steps', [
  ['凹凼','āo dàng','a hollow; a depression','门口有个凹凼，是父亲觉得台阶太低的证明。','There was a hollow at the doorstep, proof that father felt the steps were too low.'],
  ['尴尬','gān gà','awkward; embarrassed','新台阶砌好了，父亲却显得有些尴尬。','After the new steps were built, father seemed somewhat awkward.'],
  ['烦躁','fán zào','irritable; restless','父亲变得越来越烦躁。','Father became increasingly irritable.'],
  ['大庭广众','dà tíng guǎng zhòng','in public; before a large audience','父亲在大庭广众面前总觉得不自在。','Father always felt uneasy in public.'],
  ['微不足道','wēi bù zú dào','insignificant; negligible','在别人看来微不足道的台阶，却是父亲一生的追求。','The steps, negligible in the eyes of others, were the pursuit of father\u2019s entire life.']
], null);

// Lesson 13: 卖油翁
En('The Oil Seller', [
  ['自矜','zì jīn','to be proud of oneself','陈康肃公善射，当世无双，公亦以此自矜。','Lord Chen Kangsu was skilled in archery, unmatched in his time, and was proud of this himself.'],
  ['颔之','hàn zhī','to nod at it','但微颔之。','He merely nodded slightly at it.'],
  ['忿然','fèn rán','angrily; indignantly','康肃忿然曰：尔安敢轻吾射。','Kangsu said angrily: How dare you belittle my archery.'],
  ['酌油','zhuó yóu','to pour oil','乃取一葫芦置于地，以钱覆其口，徐以杓酌油沥之。','He took a gourd, placed it on the ground, covered the opening with a coin, and slowly poured oil through it.'],
  ['熟能生巧','shú néng shēng qiǎo','practice makes perfect','我亦无他，惟手熟尔。','I too have no special skill; it is merely that my hand is practiced.']
], [
  ['以小见大','yǐ xiǎo jiàn dà','illustrating a big principle through a small matter','卖油翁通过倒油这一小技巧说明了熟能生巧的道理。','The oil seller uses the small skill of pouring oil to illustrate the principle that practice makes perfect.','通过一件小事来揭示普遍道理，使文章说理深入浅出、生动有力。','Revealing a universal truth through a small matter makes the argument accessible, vivid, and powerful.']
]);

// Writing: 抓住细节
En('Writing: Capturing Details', [
  ['细节描写','xì jié miáo xiě','detail description','好的细节描写能使人物形象栩栩如生。','Good detail description can make characters come alive.'],
  ['动作细节','dòng zuò xì jié','action details','通过具体的动作细节展现人物性格。','Reveal character traits through specific action details.'],
  ['外貌细节','wài mào xì jié','appearance details','抓住人物最突出的外貌特征来描写。','Capture the most prominent appearance features of a character for description.'],
  ['语言细节','yǔ yán xì jié','speech details','人物的语言要符合其身份和性格特点。','A character\u2019s speech should match their identity and personality.'],
  ['环境细节','huán jìng xì jié','environmental details','环境细节能烘托人物心情和文章氛围。','Environmental details can set the mood and atmosphere of an article.']
], null);

// Minzhu: 骆驼祥子
En('Camel Xiangzi', [
  ['圈点','quān diǎn','to mark with circles and dots (annotation)','阅读名著要学会做圈点与批注。','When reading classic works, learn to annotate with circles, dots, and margin notes.'],
  ['批注','pī zhù','marginal notes; annotation','在关键处做批注可以加深理解。','Making marginal notes at key points deepens understanding.'],
  ['车夫','chē fū','rickshaw puller','祥子是北平城里一个普通的车夫。','Xiangzi was an ordinary rickshaw puller in Beiping.'],
  ['悲剧','bēi jù','tragedy','祥子的故事是一个城市底层劳动者的悲剧。','The story of Xiangzi is the tragedy of an urban laborer at the bottom of society.'],
  ['奋斗','fèn dòu','to struggle; to strive','祥子最大的梦想就是拥有一辆属于自己的车，为此不断奋斗。','Xiangzi\u2019s greatest dream was to own a rickshaw of his own, and he struggled ceaselessly for it.']
], null);

// ReadWrite: 介词
En('Prepositions', [
  ['介词','jiè cí','preposition','介词用在名词、代词或短语前面，组成介宾短语。','Prepositions are placed before nouns, pronouns, or phrases to form prepositional phrases.'],
  ['方向介词','fāng xiàng jiè cí','directional preposition','从、往、向、朝等表示方向。','Cong, wang, xiang, and chao indicate direction.'],
  ['时间介词','shí jiān jiè cí','temporal preposition','在、于、从、自等可以表示时间。','Zai, yu, cong, and zi can indicate time.'],
  ['对象介词','duì xiàng jiè cí','object preposition','对、向、给、跟等表示动作的对象。','Dui, xiang, gei, and gen indicate the object of an action.'],
  ['原因介词','yuán yīn jiè cí','causal preposition','因为、由于等表示原因。','Yinwei and youyu indicate cause.']
], null);

// ═══════════════════════════════════════════
// UNIT 4 — Cultivating Character (修身正己)
// ═══════════════════════════════════════════

// Lesson 14: 叶圣陶先生二三事
En('Two or Three Things about Mr. Ye Shengtao', [
  ['修润','xiū rùn','to revise and polish','我同叶圣陶先生文墨方面的交往，从共同修润课本的文字开始。','My literary association with Mr. Ye Shengtao began with jointly revising and polishing textbook language.'],
  ['商酌','shāng zhuó','to discuss and consider','只提一些商酌性的意见。','I only offered some suggestions for discussion and consideration.'],
  ['恳切','kěn qiè','earnest; sincere','他谦虚而恳切地问我同意不同意恢复。','He asked me earnestly and modestly whether I agreed to restore the original wording.'],
  ['诲人不倦','huì rén bù juàn','to teach tirelessly','叶老既是躬行君子，又能学而不厌，诲人不倦。','Mr. Ye was both a principled gentleman and someone who studied without weariness and taught without fatigue.'],
  ['躬行君子','gōng xíng jūn zǐ','a gentleman who practices what he preaches','躬行君子，则吾未之有得。','To be a gentleman who practices what he preaches — that I have not yet achieved.']
], null);

// Lesson 15: 驿路梨花
En('Pear Blossoms Along the Post Road', [
  ['陡峭','dǒu qiào','steep; precipitous','这么陡峭的山，这么茂密的树林。','Such steep mountains, such dense forests.'],
  ['简陋','jiǎn lòu','crude; simple','一张简陋的大竹床铺着厚厚的稻草。','A crude bamboo bed was covered with thick straw.'],
  ['修葺','xiū qì','to repair; to renovate','解放军叔叔经常来修葺小茅屋。','The PLA soldiers often came to repair the little thatched hut.'],
  ['竹篾','zhú miè','bamboo strips','草顶、竹篾泥墙的小屋出现在梨树林边。','A hut with a grass roof and bamboo-strip-and-mud walls appeared at the edge of the pear grove.'],
  ['恍然','huǎng rán','suddenly realizing','我们恍然大悟，原来小茅屋的主人不是一个人。','We suddenly realized that the owner of the little thatched hut was not just one person.']
], [
  ['悬念设置','xuán niàn shè zhì','creating suspense','文章多次设置悬念：小茅屋的主人是谁？层层揭开，引人入胜。','The article creates suspense multiple times: Who is the owner of the hut? The answer is revealed layer by layer, drawing the reader in.','设置悬念能激发读者的阅读兴趣，增强文章的吸引力。','Creating suspense stimulates the reader\u2019s interest and strengthens the appeal of the writing.']
]);

// Lesson 16: 最苦与最乐
En('The Most Bitter and the Most Joyful', [
  ['契约','qì yuē','contract; agreement','便是现在的自己和将来的自己立了一种契约。','It is like making a contract between the present self and the future self.'],
  ['达观','dá guān','philosophical; broad-minded','达观的人看得很平常。','Philosophical people view these matters as quite ordinary.'],
  ['如释重负','rú shì zhòng fù','as if relieved of a heavy burden','责任完了，如释重负。','When responsibility is fulfilled, one feels as if relieved of a heavy burden.'],
  ['任重道远','rèn zhòng dào yuǎn','heavy responsibility and a long road ahead','任重而道远，死而后已。','The responsibility is heavy and the road ahead is long; only death brings rest.'],
  ['悲天悯人','bēi tiān mǐn rén','to feel sorrow for heaven and pity for humanity','那诸圣诸佛的悲天悯人。','The compassion of all the sages and Buddhas who feel sorrow for heaven and pity for humanity.']
], [
  ['举例论证','jǔ lì lùn zhèng','argument by example','答应人办一件事没有办，欠了人的钱没有还，受了人的恩惠没有报答。','Promising to do something for someone but not doing it, owing someone money but not repaying it, receiving someone\u2019s kindness but not returning it.','通过列举日常生活中的具体事例来证明论点，使抽象的道理变得具体可感。','By listing specific examples from daily life to prove the argument, abstract reasoning becomes concrete and tangible.']
]);

// Lesson 17: 短文两篇 (陋室铭 + 爱莲说)
En('Two Short Essays', [
  ['德馨','dé xīn','virtuous; of noble character','斯是陋室，惟吾德馨。','This is a humble room, but my virtue makes it fragrant.'],
  ['鸿儒','hóng rú','great scholar','谈笑有鸿儒，往来无白丁。','In conversation there are great scholars; among visitors there are no ignorant persons.'],
  ['案牍','àn dú','official documents','无案牍之劳形。','Without official documents to weary the body.'],
  ['淤泥','yū ní','mud; mire','予独爱莲之出淤泥而不染。','I alone love the lotus for emerging from the mud without being stained.'],
  ['亵玩','xiè wán','to treat disrespectfully; to toy with','可远观而不可亵玩焉。','It can be admired from afar but not treated disrespectfully.']
], [
  ['托物言志','tuō wù yán zhì','expressing aspirations through objects','刘禹锡借陋室表达安贫乐道的志趣；周敦颐借莲花比喻君子品格。','Liu Yuxi uses the humble room to express his aspiration for contentment in poverty; Zhou Dunyi compares the lotus to the character of a gentleman.','通过描写某一事物来表达作者的志向或品格，使抽象的品质借具体的事物得以呈现。','By describing a specific object to express the author\u2019s aspirations or character, abstract qualities are presented through concrete things.']
]);

// Writing: 怎样选材
En('Writing: How to Select Material', [
  ['选材','xuǎn cái','selecting material','写作的材料源自生活。','Writing materials come from life.'],
  ['详略得当','xiáng lüè dé dàng','proper balance of detail and brevity','文章的中心决定了材料的取舍以及详略的安排。','The central theme determines the selection of material and the arrangement of detail and brevity.'],
  ['真实','zhēn shí','authentic; real','选择的材料应该是自己亲历的事情。','Selected materials should be things one has personally experienced.'],
  ['新颖','xīn yǐng','fresh; novel','新颖的材料应该是别人未使用过的。','Novel materials should be those that others have not used before.'],
  ['中心','zhōng xīn','central theme','没有明确的中心，想到哪里写到哪里，像一本流水账。','Without a clear central theme, writing wherever one thinks of is like keeping a running account.']
], null);

// Comprehensive: 孝亲敬老
En('Filial Piety and Respect for Elders, Starting with Me', [
  ['孝亲','xiào qīn','filial piety toward parents','孝亲敬老是中华民族的传统美德。','Filial piety and respect for elders is a traditional virtue of the Chinese nation.'],
  ['敬老','jìng lǎo','respecting the elderly','老吾老以及人之老。','Respect my own elders and extend that respect to the elders of others.'],
  ['感恩','gǎn ēn','gratitude','懂得感恩是做人的基本品质。','Understanding gratitude is a fundamental quality of being human.'],
  ['反哺','fǎn bǔ','to repay kindness (literally: a crow feeding its parent)','乌鸦反哺，羊羔跪乳。','The crow feeds its parent; the lamb kneels to nurse — both symbolize repaying parental kindness.'],
  ['天伦之乐','tiān lún zhī lè','family happiness','一家人在一起享受天伦之乐。','The whole family enjoys the happiness of being together.']
], null);

// ReadWrite: 排比
En('Parallelism', [
  ['排比','pái bǐ','parallelism','排比是把三个或三个以上结构相似的句子排列在一起。','Parallelism is arranging three or more sentences with similar structure together.'],
  ['气势','qì shì','momentum; force','排比能增强语言的气势和表达效果。','Parallelism strengthens the momentum and expressive effect of language.'],
  ['节奏感','jié zòu gǎn','sense of rhythm','排比句读起来朗朗上口，富有节奏感。','Parallel sentences roll off the tongue with a strong sense of rhythm.'],
  ['层层递进','céng céng dì jìn','progressive layers','排比句常常层层递进，逐步深化主题。','Parallel sentences often progress layer by layer, gradually deepening the theme.'],
  ['感染力','gǎn rǎn lì','emotional appeal','排比增强了文章的感染力。','Parallelism enhances the emotional appeal of the writing.']
], null);

// ═══════════════════════════════════════════
// UNIT 5 — Expressing Aspirations Through Objects (托物言志)
// ═══════════════════════════════════════════

// Outside Poetry 1 (between Unit 4 and 5): 竹里馆、春夜洛城闻笛、逢入京使、晚春
// (These are handled under Unit 5 lessons below)

// Lesson 18: 紫藤萝瀑布
En('The Wisteria Waterfall', [
  ['迸溅','bèng jiàn','to splash; to burst forth','紫色的大条幅上，泛着点点银光，就像迸溅的水花。','Silver sparkles dotted the great purple banner, like splashing water.'],
  ['伫立','zhù lì','to stand for a long time','我只是伫立凝望。','I merely stood still and gazed intently.'],
  ['忍俊不禁','rěn jùn bù jīn','unable to hold back a smile','又像一个忍俊不禁的笑容，就要绽开似的。','Like a smile that could not be held back, about to burst open.'],
  ['伶仃','líng dīng','lonely; solitary','东一穗西一串伶仃地挂在树梢。','Solitary clusters hung here and there on the treetops.'],
  ['盘虬卧龙','pán qiú wò lóng','coiling like a dragon','紫色的瀑布遮住了粗壮的盘虬卧龙般的枝干。','The purple waterfall concealed the thick branches coiling like dragons.']
], [
  ['借物抒情','jiè wù shū qíng','expressing emotion through objects','作者借紫藤萝花的由衰到盛，表达了对生命的感悟。','The author uses the wisteria\u2019s transition from decline to flourishing to express an insight about life.','通过对具体事物的细致描写来表达作者的情感变化，使情感表达更加含蓄深沉。','Through detailed description of a concrete object, the author expresses emotional changes, making the expression more implicit and profound.']
]);

// Lesson 19: 一棵小桃树
En('A Little Peach Tree', [
  ['矜持','jīn chí','reserved; restrained','往日多么傲慢的我，多么矜持的我。','How arrogant I used to be, how reserved I was.'],
  ['猥琐','wěi suǒ','shabby; insignificant-looking','样子也极猥琐。','Its appearance was also extremely shabby.'],
  ['忏悔','chàn huǐ','to repent; to confess','我也不知道是什么怪缘故，只是常常自个儿忏悔。','I did not know the strange reason; I only often repented to myself.'],
  ['淅淅沥沥','xī xī lì lì','the patter of light rain','早晨起来，就淅淅沥沥的。','In the morning, a pattering rain had already begun.'],
  ['懊丧','ào sàng','dejected; frustrated','我深深懊丧对不起我的奶奶，对不起我的小桃树了。','I felt deeply dejected for letting down my grandmother and my little peach tree.']
], null);

// Lesson 20: 外国诗二首
En('Two Foreign Poems', [
  ['忧郁','yōu yù','melancholy; gloomy','忧郁的日子里须要镇静。','In melancholy days one must remain calm.'],
  ['瞬息','shùn xī','in an instant','一切都是瞬息，一切都将会过去。','Everything is fleeting, everything will pass.'],
  ['怀恋','huái liàn','nostalgic longing','而那过去了的，就会成为亲切的怀恋。','And what has passed will become a fond nostalgic memory.'],
  ['伫立','zhù lì','to stand for a long time','我在那路口久久伫立。','I stood for a long time at that fork in the road.'],
  ['荒草萋萋','huāng cǎo qī qī','overgrown with wild grass','它荒草萋萋，十分幽寂。','It was overgrown with wild grass, very quiet and secluded.']
], null);

// Lesson 21: 古代诗歌五首
En('Five Ancient Poems', [
  ['怆然','chuàng rán','sorrowful; desolate','独怆然而涕下。','Alone and desolate, tears fell.'],
  ['造化','zào huà','nature; creation','造化钟神秀，阴阳割昏晓。','Nature concentrates its beauty here; light and shadow divide dawn from dusk.'],
  ['凌绝顶','líng jué dǐng','to reach the highest peak','会当凌绝顶，一览众山小。','I shall ascend the highest peak and see all other mountains appear small below.'],
  ['落红','luò hóng','fallen flowers','落红不是无情物，化作春泥更护花。','Fallen flowers are not heartless things; they turn into spring mud to nurture more flowers.'],
  ['柳暗花明','liǔ àn huā míng','finding hope in a seemingly hopeless situation','山重水复疑无路，柳暗花明又一村。','With mountains layered and streams winding, one doubts there is any road; then willows are dark and flowers bright, and another village appears.']
], [
  ['借景抒情','jiè jǐng shū qíng','expressing feelings through scenery','会当凌绝顶，一览众山小。杜甫借泰山之景抒发远大志向。','I shall ascend the highest peak and see all other mountains appear small. Du Fu expresses his lofty ambitions through the scenery of Mount Tai.','诗人通过描写自然景物来寄托自己的情感和志向，情景交融。','The poet expresses emotions and aspirations through descriptions of natural scenery, blending feeling with scene.'],
  ['言外之意','yán wài zhī yì','implied meaning beyond the words','落红不是无情物，化作春泥更护花。诗人借落花表达虽辞官但仍心系国家的心志。','Fallen flowers are not heartless things; they turn into spring mud to nurture flowers. The poet uses fallen petals to express that though he resigned from office, he still cares about the nation.','古诗名句常有言外之意，表面写景，实则寄托深意。','Famous classical poetry lines often carry implied meanings; they describe scenery on the surface but convey deeper significance.']
]);

// Writing: 文从字顺
En('Writing: Clarity and Fluency', [
  ['文从字顺','wén cóng zì shùn','clear and fluent writing','写文章要做到文从字顺，语言通顺流畅。','Writing should achieve clarity and fluency with smooth, flowing language.'],
  ['语序','yǔ xù','word order','注意语序的合理安排。','Pay attention to the reasonable arrangement of word order.'],
  ['语病','yǔ bìng','language error; grammatical problem','修改文章要注意消除语病。','When revising, pay attention to eliminating language errors.'],
  ['连贯','lián guàn','coherent; connected','句与句之间要注意连贯。','Sentences should be coherent and connected to each other.'],
  ['推敲','tuī qiāo','to deliberate over word choice','好文章需要反复推敲字句。','Good writing requires repeatedly deliberating over words and sentences.']
], null);

// ReadWrite: 短语类型（并列、偏正、主谓）
En('Phrase Types: Coordinate, Modifier-Head, Subject-Predicate', [
  ['并列短语','bìng liè duǎn yǔ','coordinate phrase','报纸杂志、雄伟壮丽都是并列短语。','Newspapers-and-magazines and grand-and-magnificent are both coordinate phrases.'],
  ['偏正短语','piān zhèng duǎn yǔ','modifier-head phrase','淡淡的芳香是偏正短语，偏在前正在后。','A faint fragrance is a modifier-head phrase, with the modifier before the head.'],
  ['主谓短语','zhǔ wèi duǎn yǔ','subject-predicate phrase','春光明媚是主谓短语。','Bright spring scenery is a subject-predicate phrase.'],
  ['短语','duǎn yǔ','phrase; word group','词和词组合起来构成短语。','Words combine to form phrases.'],
  ['修饰','xiū shì','to modify','偏正短语中的偏是修饰成分。','In a modifier-head phrase, the modifier is the decorative component.']
], null);

// ═══════════════════════════════════════════
// UNIT 6 — Exploration and Science Fiction (科幻探险)
// ═══════════════════════════════════════════

// Lesson 22: 伟大的悲剧
En('A Great Tragedy', [
  ['毛骨悚然','máo gǔ sǒng rán','hair-raising; terrifying','在这严酷的事实面前也就不必再怀疑，这令人毛骨悚然。','In the face of this harsh reality there was no room for doubt; it was terrifying.'],
  ['怏怏不乐','yàng yàng bù lè','discontented and unhappy','他们怏怏不乐地在阿蒙森的胜利旗帜旁边插上英国国旗。','Discontented and unhappy, they planted the British flag beside Amundsen\u2019s victory banner.'],
  ['忧心忡忡','yōu xīn chōng chōng','deeply worried','他们每走一步都忧心忡忡。','They were deeply worried with every step they took.'],
  ['凛冽','lǐn liè','bitterly cold','在他们身后刮来凛冽的寒风。','Behind them blew a bitterly cold wind.'],
  ['吞噬','tūn shì','to devour; to engulf','刺骨的寒冷吞噬着他们已经疲惫不堪的躯体。','The bone-chilling cold devoured their exhausted bodies.']
], [
  ['传记文学','zhuàn jì wén xué','biographical literature','茨威格以文学的笔法记述斯科特探险队的悲壮故事，既有历史的真实又有文学的感染力。','Zweig recounts the heroic tragedy of Scott\u2019s expedition with literary technique, combining historical truth with literary emotional power.','传记文学将真实事件与文学手法结合，在尊重事实的基础上进行艺术加工。','Biographical literature combines real events with literary techniques, applying artistic treatment while respecting the facts.']
]);

// Lesson 23: 太空一日
En('A Day in Space', [
  ['共振','gòng zhèn','resonance; vibration','火箭和飞船开始急剧抖动，产生共振。','The rocket and spacecraft began to shake violently, producing resonance.'],
  ['屏息凝神','bǐng xī níng shén','to hold one\u2019s breath and concentrate','我怀抱着操作盒，屏息凝神地等待着。','I held the control panel, holding my breath and concentrating as I waited.'],
  ['俯瞰','fǔ kàn','to look down from above','我曾俯瞰我们的首都北京。','I once looked down upon our capital Beijing from above.'],
  ['耐人寻味','nài rén xún wèi','thought-provoking; intriguing','我甚至觉得这个过程很耐人寻味。','I even found this process quite thought-provoking.'],
  ['舷窗','xián chuāng','porthole','看到舷窗玻璃开始出现裂缝，我紧张了。','Seeing cracks begin to appear on the porthole glass, I became nervous.']
], [
  ['科学精神','kē xué jīng shén','scientific spirit','杨利伟详细描述了飞行中的每一个细节，体现了航天员严谨的科学精神。','Yang Liwei described every detail of the flight in detail, reflecting the rigorous scientific spirit of astronauts.','对航天员来说最基本的要求是严谨，文章处处体现了科学的严谨态度。','The most fundamental requirement for astronauts is rigor, and the article reflects a scientific attitude of rigor throughout.']
]);

// Lesson 24: 带上她的眼睛
En('Take Her Eyes Along', [
  ['传感','chuán gǎn','sensor; sensory transmission','所谓眼睛就是一副传感眼镜。','The so-called eyes were a pair of sensory transmission glasses.'],
  ['压抑','yā yì','oppressive; stifling','飞船上方那巨量的地层物质产生了一种压抑感。','The enormous mass of geological material above the spacecraft created a sense of oppression.'],
  ['蒙蒙','méng méng','misty; hazy','那个没有日出的细雨蒙蒙的草原早晨。','That misty, drizzling grassland morning without a sunrise.'],
  ['闷热','mēn rè','stuffy and hot','她在地心的世界是那个活动范围不到十立方米的闷热的控制舱。','Her world at the center of the earth was a stuffy, hot control cabin of less than ten cubic meters.'],
  ['迟钝','chí dùn','dull; slow to react','我对这个世界的美已感到有些迟钝了。','I had become somewhat dull to the beauty of this world.']
], null);

// Lesson 25: 活板
En('Movable Type Printing', [
  ['布衣','bù yī','commoner; person of humble origin','庆历中，有布衣毕昇，又为活板。','During the Qingli era, a commoner named Bi Sheng invented movable type printing.'],
  ['胶泥','jiāo ní','adhesive clay','其法：用胶泥刻字。','The method: carve characters from adhesive clay.'],
  ['更互','gēng hù','alternately; in turn','更互用之，瞬息可就。','Using them alternately, the work could be completed in an instant.'],
  ['神速','shén sù','amazingly fast','若印数十百千本，则极为神速。','If printing tens, hundreds, or thousands of copies, it was amazingly fast.'],
  ['宝藏','bǎo cáng','to treasure; to preserve as a treasure','昇死，其印为余群从所得，至今宝藏。','After Sheng died, his type was obtained by my nephews and cousins and has been treasured ever since.']
], [
  ['说明顺序','shuō míng shùn xù','expository order','文章按照制字、排版、印刷的程序逐层说明活字印刷术。','The article explains movable type printing layer by layer in the order of making type, typesetting, and printing.','说明文常按照逻辑顺序或工序流程来组织内容，使复杂事物条理清楚。','Expository texts often organize content in logical order or workflow sequence, making complex subjects clear and orderly.']
]);

// Writing: 语言简明
En('Writing: Concise Language', [
  ['简明','jiǎn míng','concise and clear','语言要做到简明，就是简要、明白。','To achieve concise language means to be brief and clear.'],
  ['累赘','léi zhui','redundant; verbose','删去累赘的词语可以使语言更加简洁。','Removing redundant words makes language more concise.'],
  ['精炼','jīng liàn','refined; succinct','好的文章语言精炼，字字有用。','Good writing has refined language where every word serves a purpose.'],
  ['歧义','qí yì','ambiguity','语言要明白，就要避免歧义。','For language to be clear, ambiguity must be avoided.'],
  ['赘述','zhuì shù','unnecessary repetition','不必要的赘述会影响表达效果。','Unnecessary repetition affects the effectiveness of expression.']
], null);

// Comprehensive: 我的语文生活
En('My Chinese Language Life', [
  ['语文生活','yǔ wén shēng huó','Chinese language life','语文学习不只在课堂上，生活处处都有语文。','Chinese language learning is not only in the classroom; language is everywhere in life.'],
  ['标语','biāo yǔ','slogan; banner','生活中随处可见各种标语。','Slogans can be seen everywhere in daily life.'],
  ['广告词','guǎng gào cí','advertising slogan','有些广告词巧妙地运用了修辞手法。','Some advertising slogans cleverly employ rhetorical techniques.'],
  ['对联','duì lián','couplet','对联是中国传统文化的瑰宝。','Couplets are a treasure of traditional Chinese culture.'],
  ['谐音','xié yīn','homophone; pun','有些广告利用谐音来吸引注意。','Some advertisements use homophones to attract attention.']
], null);

// Minzhu: 海底两万里
En('Twenty Thousand Leagues Under the Sea \\u2014 Speed Reading', [
  ['快速阅读','kuài sù yuè dú','speed reading','快速阅读要求在较短的时间内把握全书的内容。','Speed reading requires grasping the content of the entire book in a relatively short time.'],
  ['潜水艇','qián shuǐ tǐng','submarine','尼摩船长驾驶着神秘的潜水艇在海底航行。','Captain Nemo piloted the mysterious submarine through the ocean depths.'],
  ['情节','qíng jié','plot','快速阅读时要抓住主要情节。','When speed reading, grasp the main plot.'],
  ['科幻','kē huàn','science fiction','海底两万里是一部经典科幻小说。','Twenty Thousand Leagues Under the Sea is a classic science fiction novel.'],
  ['探险','tàn xiǎn','exploration; adventure','书中描述了一段惊心动魄的海底探险。','The book describes a thrilling undersea adventure.']
], null);

// ═══════════════════════════════════════════
// Outside Ancient Poetry (课外古诗词诵读) — Set 2
// ═══════════════════════════════════════════

// 泊秦淮
En('Mooring on the Qinhuai River', [
  ['笼','lǒng','to envelop; to shroud','烟笼寒水月笼沙。','Mist shrouds the cold water, moonlight shrouds the sand.'],
  ['商女','shāng nǚ','singing girl','商女不知亡国恨。','The singing girl does not know the sorrow of a fallen nation.'],
  ['犹唱','yóu chàng','still singing','隔江犹唱后庭花。','Across the river, she is still singing the song of the Rear Courtyard Flowers.'],
  ['亡国恨','wáng guó hèn','sorrow of national ruin','商女不知亡国恨。','The singing girl does not know the sorrow of national ruin.'],
  ['秦淮','qín huái','Qinhuai River','夜泊秦淮近酒家。','Mooring at night on the Qinhuai River near a tavern.']
], null);

// 贾生
En('On Jia Yi', [
  ['求贤','qiú xián','to seek the worthy','宣室求贤访逐臣。','In the Xuanshi Hall, seeking the worthy, he consulted the banished minister.'],
  ['才调','cái diào','talent; ability','贾生才调更无伦。','Jia Yi\u2019s talent was truly beyond compare.'],
  ['可怜','kě lián','pitiable; what a pity','可怜夜半虚前席。','What a pity that at midnight he moved forward on his seat in vain.'],
  ['苍生','cāng shēng','the common people','不问苍生问鬼神。','He did not ask about the common people but inquired about ghosts and spirits.'],
  ['前席','qián xí','to move forward in one\u2019s seat','可怜夜半虚前席。','What a pity that at midnight he leaned forward on his seat in vain.']
], null);

// 过松源晨炊漆公店（其五）
En('Passing Through Songyuan for Breakfast at Qigong\\u2019s Inn (No. 5)', [
  ['下岭','xià lǐng','going downhill','莫言下岭便无难。','Do not say that going downhill means there are no more difficulties.'],
  ['赚得','zuàn de','to trick; to deceive','赚得行人错喜欢。','It tricks travelers into false joy.'],
  ['围子','wéi zi','encirclement; ring','政入万山围子里。','You find yourself right in the encirclement of countless mountains.'],
  ['放出','fàng chū','to let pass','一山放出一山拦。','One mountain lets you pass only for another to block your way.'],
  ['万山','wàn shān','thousands of mountains','政入万山围子里。','Right in the midst of thousands of mountains.']
], null);

// 约客
En('Expecting a Guest', [
  ['黄梅时节','huáng méi shí jié','the rainy plum-ripening season','黄梅时节家家雨。','During the plum-ripening season, rain falls at every house.'],
  ['处处蛙','chù chù wā','frogs everywhere','青草池塘处处蛙。','Green grass, ponds, and frogs croaking everywhere.'],
  ['闲敲棋子','xián qiāo qí zǐ','idly tapping chess pieces','有约不来过夜半，闲敲棋子落灯花。','The expected guest has not come past midnight; idly tapping chess pieces, lamp wick ash falls.'],
  ['灯花','dēng huā','lamp wick ash','闲敲棋子落灯花。','Idly tapping chess pieces as lamp wick ash drops.'],
  ['有约','yǒu yuē','to have an appointment','有约不来过夜半。','The appointment has not been kept past midnight.']
], null);

// ReadWrite: 短语类型（动宾、补充）
En('Phrase Types: Verb-Object and Complement', [
  ['动宾短语','dòng bīn duǎn yǔ','verb-object phrase','写文章、学语文都是动宾短语。','Writing articles and studying Chinese are both verb-object phrases.'],
  ['补充短语','bǔ chōng duǎn yǔ','complement phrase','看得清楚是补充短语，得字后面是补语。','Seeing clearly is a complement phrase; the word after de is the complement.'],
  ['动词','dòng cí','verb','动宾短语以动词为中心。','Verb-object phrases center on the verb.'],
  ['宾语','bīn yǔ','object','动词后面的词语是宾语。','The word following the verb is the object.'],
  ['补语','bǔ yǔ','complement','补充短语中补语对动词或形容词进行补充说明。','In a complement phrase, the complement provides additional information about the verb or adjective.']
], null);

// ═══════════════════════════════════════════
// Final: save and validate
// ═══════════════════════════════════════════
saveAndValidate('textbook_g7s2.js', code, 'TB_G7S2');
