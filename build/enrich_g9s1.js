/**
 * Enrich textbook_g9s1.js with vocabWords and grammarPoints
 * Grade 9 Semester 1 — All 25 lessons + writing/activity sections
 * Run: cd /e/chinese && node build/enrich_g9s1.js
 *
 * SECURITY NOTE: Build-time data enrichment script operating on trusted local files.
 */
const fs = require('fs');
const { enrichByEn, saveAndValidate } = require('./enrich_lib');
let code = fs.readFileSync('textbook_g9s1.js', 'utf8');
const En = (t, v, g) => { code = enrichByEn(code, t, v, g); };

// ═══════════════════════════════════════════
// UNIT 1 — Activity & Exploration: Poetry (活动·探究)
// ═══════════════════════════════════════════

// Lesson 1: 沁园春·雪 (Spring in a Pleasure Garden: Snow)
En('Spring in a Pleasure Garden: Snow', [
  ['莽莽','mǎng mǎng','vast and boundless','惟余莽莽。','Nothing remains but a vast expanse of white.'],
  ['妖娆','yāo ráo','enchanting; charming','须晴日，看红装素裹，分外妖娆。','On a sunny day, see the land in red and white, extraordinarily enchanting.'],
  ['折腰','zhé yāo','to bow down; to submit','引无数英雄竞折腰。','Inspiring countless heroes to bow in admiration.'],
  ['风骚','fēng sāo','literary talent; poetic grace','稍逊风骚。','Slightly lacking in literary talent.'],
  ['天骄','tiān jiāo','heaven-favored one; proud son of heaven','一代天骄，成吉思汗，只识弯弓射大雕。','The heaven-favored one, Genghis Khan, only knew how to bend the bow and shoot eagles.']
], [
  ['词的上下阕','cí de shàng xià què','upper and lower stanzas of ci poetry','上阕写北国雪景，下阕评古今英雄。','The upper stanza describes northern snowscapes; the lower stanza comments on heroes past and present.','词分上下阕，上阕多写景叙事，下阕多抒情议论，二者相互呼应，共同表达主题。','Ci poetry is divided into upper and lower stanzas: the upper typically describes scenery, the lower expresses feelings and commentary, echoing each other to convey the theme.'],
  ['借景抒情','jiè jǐng shū qíng','expressing emotion through scenery','望长城内外，惟余莽莽；大河上下，顿失滔滔。','Looking within and beyond the Great Wall, nothing but vastness; up and down the Yellow River, the surging torrents suddenly frozen.','通过描写壮丽的自然景观来表达内心豪迈的情感，实现情景交融。','Expressing bold inner emotions through descriptions of magnificent natural scenery, achieving a fusion of feeling and landscape.']
]);

// Lesson 2: 周总理，你在哪里 (Premier Zhou, Where Are You?)
En('Premier Zhou, Where Are You?', [
  ['篝火','gōu huǒ','bonfire; campfire','你永远居住在太阳升起的地方，你永远居住在人民心里。','You forever dwell where the sun rises, you forever live in the hearts of the people.'],
  ['宿营','sù yíng','to camp; to bivouac','想起你昨天的嘱咐，我们含着热泪宿营。','Remembering your words from yesterday, we camped with tears in our eyes.'],
  ['沉甸甸','chén diàn diàn','heavy; weighty','人民的心沉甸甸的。','The hearts of the people are heavy with grief.'],
  ['踪迹','zōng jì','trace; whereabouts','周总理，我们的好总理，你在哪里啊，你在哪里？','Premier Zhou, our beloved premier, where are you, where are you?'],
  ['嘱咐','zhǔ fù','to urge; to exhort','想起你昨天的嘱咐。','Remembering your exhortation from yesterday.']
], null);

// Lesson 3: 我爱这土地 (I Love This Land)
En('I Love This Land', [
  ['嘶哑','sī yǎ','hoarse','假如我是一只鸟，我也应该用嘶哑的喉咙歌唱。','If I were a bird, I would sing with my hoarse throat.'],
  ['汹涌','xiōng yǒng','surging; turbulent','这被暴风雨所打击着的土地，这永远汹涌着我们的悲愤的河流。','This land battered by storms, this river forever surging with our grief and indignation.'],
  ['悲愤','bēi fèn','grief and indignation','这永远汹涌着我们的悲愤的河流。','This river forever surging with our grief and indignation.'],
  ['黎明','lí míng','dawn','那来自林间的无比温柔的黎明。','That incomparably tender dawn coming from the woods.'],
  ['腐烂','fǔ làn','to decay; to rot','然后我死了，连羽毛也腐烂在土地里面。','Then I die, and even my feathers decay in the soil.']
], [
  ['象征手法','xiàng zhēng shǒu fǎ','symbolism','假如我是一只鸟。','If I were a bird.','诗人用鸟象征自己，用土地象征祖国，通过鸟对土地的深情来表达对祖国的热爱。','The poet uses the bird to symbolize himself and the land to symbolize the motherland, expressing patriotic love through the bird\u2019s devotion to the land.']
]);

// Lesson 4: 乡愁 (Nostalgia)
En('Nostalgia', [
  ['邮票','yóu piào','postage stamp','小时候，乡愁是一枚小小的邮票。','In childhood, nostalgia was a small postage stamp.'],
  ['海峡','hǎi xiá','strait; channel','而现在，乡愁是一湾浅浅的海峡。','And now, nostalgia is a shallow strait.'],
  ['坟墓','fén mù','grave; tomb','后来啊，乡愁是一方矮矮的坟墓。','Later, nostalgia was a low, low grave.'],
  ['窄窄','zhǎi zhǎi','narrow','长大后，乡愁是一张窄窄的船票。','After growing up, nostalgia was a narrow boat ticket.'],
  ['这头','zhè tóu','this end; this side','我在这头，大陆在那头。','I am on this side, the mainland is on that side.']
], [
  ['意象叠加','yì xiàng dié jiā','layering of imagery','邮票、船票、坟墓、海峡四个意象层层递进。','The four images — stamp, ticket, grave, strait — progress layer by layer.','诗歌通过四个具体意象的叠加，将个人乡愁从亲情思念升华为家国情怀。','Through layering four concrete images, the poem elevates personal nostalgia from family longing to patriotic sentiment.']
]);

// Lesson 5: 你是人间的四月天 (You Are April on Earth)
En('You Are April on Earth', [
  ['轻灵','qīng líng','light and graceful','我说你是人间的四月天，笑响点亮了四面风，轻灵在春的光艳中交舞着变。','I say you are April on earth; laughter lights the wind on all sides, light and graceful, dancing amid spring\u2019s brilliance.'],
  ['鲜妍','xiān yán','fresh and beautiful','你是四月早天里的云烟，黄昏吹着风的软，星子在无意中闪，细雨点洒在花前，那轻，那娉婷，你是，鲜妍。','You are the cloud and mist of an April morning, the softness of evening wind, stars that flash unknowingly, drizzle sprinkled before flowers — that lightness, that grace — you are freshness and beauty.'],
  ['娉婷','pīng tíng','graceful and slender','那轻，那娉婷。','That lightness, that grace.'],
  ['冠冕','guān miǎn','crown; coronet','你是一树一树的花开，是燕在梁间呢喃，你是爱，是暖，是希望，你是人间的四月天。','You are blossoms opening tree by tree, swallows murmuring between the beams; you are love, warmth, and hope; you are April on earth.'],
  ['呢喃','ní nán','to murmur; to whisper','是燕在梁间呢喃。','Swallows murmuring between the beams.']
], null);

// Lesson 6: 我看 (What I See)
En('What I See', [
  ['丰润','fēng rùn','rich and moist','我看一阵向晚的春风悄悄揉过丰润的青草。','I see a late spring breeze quietly caressing the rich, moist green grass.'],
  ['沉醉','chén zuì','intoxicated; deeply immersed','让我的呼吸与自然合流，让欢笑和哀愁洒向我心里，像季节燃起花朵又把它吹熄。','Let my breath merge with nature, let joy and sorrow sprinkle into my heart, like seasons igniting flowers then blowing them out.'],
  ['摇曳','yáo yè','to sway; to flutter','远远的土丘上闪着哀怜的翠光，一片蓬蒿在摇曳。','On distant hills gleams a pitiful emerald light; a patch of mugwort sways.'],
  ['蓬蒿','péng hāo','mugwort; wild grass','一片蓬蒿在摇曳。','A patch of mugwort sways.'],
  ['飘逸','piāo yì','graceful and flowing','那飘逸的云朵在天空中变幻。','The graceful clouds shift and change in the sky.']
], null);

// Poetry Recitation (task section) — same-line content:, manual insertion before 'content:'
{
  const mkrPR = 'titleEn: "Poetry Recitation", content:';
  const mPR = code.indexOf(mkrPR);
  if (mPR !== -1 && !code.slice(mPR, mPR + 500).includes('vocabWords:')) {
    const cIdx = code.indexOf('content:', mPR + 30);
    const indent = '      ';
    const vw = `vocabWords: [\n` +
      indent + `  {word:'\u6717\u8bf5',pinyin:'l\u01ceng s\u00f2ng',en:'to recite aloud',sentence:'\u6ce8\u610f\u91cd\u97f3\u3001\u505c\u8fde\u3001\u8282\u594f\uff0c\u628a\u63e1\u8bd7\u6b4c\u7684\u611f\u60c5\u57fa\u8c03\u3002',sentenceEn:'Pay attention to stress, pauses, and rhythm; grasp the emotional tone of the poem.'},\n` +
      indent + `  {word:'\u91cd\u97f3',pinyin:'zh\u00f2ng y\u012bn',en:'stress; emphasis',sentence:'\u6807\u51fa\u91cd\u97f3\u3001\u505c\u8fde\u3001\u8282\u594f\u3002',sentenceEn:'Mark the stress, pauses, and rhythm.'},\n` +
      indent + `  {word:'\u8282\u594f',pinyin:'ji\u00e9 z\u00f2u',en:'rhythm; tempo',sentence:'\u5728\u5199\u4f5c\u8fc7\u7a0b\u4e2d\uff0c\u6ce8\u610f\u53e5\u5f0f\u548c\u8282\u594f\u3002',sentenceEn:'In the writing process, pay attention to sentence patterns and rhythm.'},\n` +
      indent + `  {word:'\u97f5\u5f8b',pinyin:'y\u00f9n l\u01dc',en:'rhyme and meter',sentence:'\u8bfb\u51fa\u611f\u60c5\uff0c\u8bfb\u51fa\u97f5\u5f8b\u3002',sentenceEn:'Read with emotion, read with meter.'},\n` +
      indent + `  {word:'\u57fa\u8c03',pinyin:'j\u012b di\u00e0o',en:'keynote; tone',sentence:'\u628a\u63e1\u8bd7\u6b4c\u7684\u611f\u60c5\u57fa\u8c03\u3002',sentenceEn:'Grasp the emotional tone of the poem.'}\n` +
      indent + `], `;
    code = code.slice(0, cIdx) + vw + code.slice(cIdx);
  }
}

// Try Creating (task section) — same-line content:, manual insertion before 'content:'
{
  const mkrTC = 'titleEn: "Try Creating", content:';
  const mTC = code.indexOf(mkrTC);
  if (mTC !== -1 && !code.slice(mTC, mTC + 500).includes('vocabWords:')) {
    const cIdx = code.indexOf('content:', mTC + 20);
    const indent = '      ';
    const vw = `vocabWords: [\n` +
      indent + `  {word:'\u610f\u8c61',pinyin:'y\u00ec xi\u00e0ng',en:'imagery; poetic image',sentence:'\u53ef\u4ee5\u53d1\u6325\u60f3\u8c61\uff0c\u501f\u52a9\u4e00\u4e9b\u610f\u8c61\uff0c\u8868\u8fbe\u4f60\u7684\u60c5\u601d\u3002',sentenceEn:'Use imagination, employ imagery to convey your feelings.'},\n` +
      indent + `  {word:'\u6292\u53d1',pinyin:'sh\u016b f\u0101',en:'to express (emotion)',sentence:'\u9009\u62e9\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5199\u4e00\u9996\u5c0f\u8bd7\uff0c\u6292\u53d1\u81ea\u5df1\u7684\u60c5\u611f\u3002',sentenceEn:'Choose a subject and write a short poem expressing your emotions.'},\n` +
      indent + `  {word:'\u53e5\u5f0f',pinyin:'j\u00f9 sh\u00ec',en:'sentence pattern',sentence:'\u5728\u5199\u4f5c\u8fc7\u7a0b\u4e2d\uff0c\u6ce8\u610f\u53e5\u5f0f\u548c\u8282\u594f\u3002',sentenceEn:'In the writing process, pay attention to sentence patterns and rhythm.'},\n` +
      indent + `  {word:'\u60c5\u601d',pinyin:'q\u00edng s\u012b',en:'feelings and thoughts',sentence:'\u501f\u52a9\u4e00\u4e9b\u610f\u8c61\uff0c\u8868\u8fbe\u4f60\u7684\u60c5\u601d\u3002',sentenceEn:'Employ imagery to convey your feelings and thoughts.'},\n` +
      indent + `  {word:'\u521b\u4f5c',pinyin:'chu\u00e0ng zu\u00f2',en:'to create; creative writing',sentence:'\u5c1d\u8bd5\u521b\u4f5c\u4e00\u9996\u5c0f\u8bd7\u3002',sentenceEn:'Try creating a short poem.'}\n` +
      indent + `], `;
    code = code.slice(0, cIdx) + vw + code.slice(cIdx);
  }
}

// 名著导读: Selected Poems of Ai Qing — has content: on next line, insert before subtitle:
{
  const mkrAQ = 'titleEn: "Selected Poems of Ai Qing",';
  const mAQ = code.indexOf(mkrAQ);
  if (mAQ !== -1 && !code.slice(mAQ, mAQ + 500).includes('vocabWords:')) {
    const subIdx = code.indexOf('subtitle:', mAQ);
    const indent = '    ';
    const vw = `vocabWords: [\n` +
      indent + `  {word:'\u5fe7\u90c1',pinyin:'y\u014du y\u00f9',en:'melancholy; somber',sentence:'\u8bd7\u6b4c\u603b\u662f\u5145\u6ee1\u571f\u5730\u7684\u5fe7\u90c1\u3002',sentenceEn:'His poetry was always suffused with the melancholy of the land.'},\n` +
      indent + `  {word:'\u610f\u8574',pinyin:'y\u00ec y\u00f9n',en:'meaning; connotation',sentence:'\u6db5\u6cf3\u54c1\u5473\uff0c\u628a\u63e1\u8bd7\u6b4c\u610f\u8574\u3002',sentenceEn:'Savor and appreciate, grasping the meaning of the poetry.'},\n` +
      indent + `  {word:'\u82e6\u96be',pinyin:'k\u01d4 n\u00e0n',en:'suffering; hardship',sentence:'\u591a\u5199\u56fd\u5bb6\u6c11\u65cf\u7684\u82e6\u96be\u3001\u60b2\u4f24\u4e0e\u53cd\u6297\u3002',sentenceEn:'Frequently writing of national suffering, sorrow, and resistance.'},\n` +
      indent + `  {word:'\u9274\u8d4f',pinyin:'ji\u00e0n sh\u01ceng',en:'to appreciate; appreciation',sentence:'\u5b66\u4e60\u9274\u8d4f\u8fd9\u516d\u9996\u8bd7\u6b4c\u3002',sentenceEn:'Learn to appreciate these six poems.'},\n` +
      indent + `  {word:'\u5149\u8f89',pinyin:'gu\u0101ng hu\u012b',en:'radiance; glory',sentence:'\u827e\u9752\u662f\u4e2d\u56fd\u73b0\u5f53\u4ee3\u6587\u5b66\u53f2\u4e0a\u7684\u8457\u540d\u8bd7\u4eba\u3002',sentenceEn:'Ai Qing is one of the most renowned poets in modern Chinese literary history.'}\n` +
      indent + `],\n` + indent;
    code = code.slice(0, subIdx) + vw + code.slice(subIdx);
  }
}

// ═══════════════════════════════════════════
// UNIT 2 — Argumentative Writing (议论文)
// ═══════════════════════════════════════════

// Lesson 7: 敬业与乐业 (Devotion and Joy in Work)
En('Devotion and Joy in Work', [
  ['敬业','jìng yè','devotion to work; professionalism','敬业即是责任心，乐业即是趣味。','Devotion to work means a sense of responsibility; joy in work means finding interest.'],
  ['亵渎','xiè dú','to profane; to desecrate','凡职业没有不是神圣的，所以凡职业没有不是可敬的。亵渎职业就是亵渎自己。','Every profession is sacred, so every profession deserves respect. To profane your profession is to profane yourself.'],
  ['断章取义','duàn zhāng qǔ yì','to quote out of context','我确信"敬业乐业"四个字，是人类生活的不二法门。断章取义只会歪曲原意。','I firmly believe the four words "devotion and joy in work" are the sole path to human life. Quoting out of context only distorts the original meaning.'],
  ['强聒不舍','qiáng guō bù shě','to keep chattering','但我确信这话是对的，虽然强聒不舍。','But I firmly believe this is correct, even if I keep insisting.'],
  ['旁骛','páng wù','to be distracted; to pursue other things','坐这山，望那山，一事无成。专心致志不可旁骛。','Sitting on this mountain, gazing at that one, accomplishing nothing. One must focus and not be distracted.']
], [
  ['举例论证','jǔ lì lùn zhèng','argumentation by example','百丈禅师每日必做事，否则不吃饭。','Master Baizhang insisted on doing work every day, or else he would not eat.','通过引用百丈禅师、佝偻丈人等具体事例来支持敬业乐业的观点，增强说服力。','By citing specific examples such as Master Baizhang and the hunchbacked old man, the author supports the viewpoint of devotion and joy in work, enhancing persuasiveness.'],
  ['引用论证','yǐn yòng lùn zhèng','argumentation by quotation','主一无适便是敬。——朱熹','To focus on one thing without distraction is devotion. — Zhu Xi','文章大量引用儒家经典和名人名言，如孔子、朱熹、曾国藩等人的话，增加论证的权威性。','The essay extensively quotes Confucian classics and famous sayings from Confucius, Zhu Xi, and Zeng Guofan, adding authority to the argumentation.']
]);

// Lesson 8: 就英法联军远征中国致巴特勒上尉的信 (Letter to Captain Butler on the Anglo-French Expedition to China)
En('Letter to Captain Butler on the Anglo-French Expedition to China', [
  ['赞誉','zàn yù','praise; acclaim','圆明园是东方艺术的奇迹，请您想象一个令人神往的建筑。','The Old Summer Palace was a miracle of Eastern art; please imagine a building that inspires wonder.'],
  ['典范','diǎn fàn','exemplar; model','这是某种令人惊骇而不知名的杰作，在不可名状的晨曦中依稀可见，宛如在欧洲文明的地平线上瞥见的亚洲文明的剪影。','This was a stunning, nameless masterpiece, faintly visible in an indescribable dawn, like a silhouette of Asian civilization glimpsed on the horizon of European civilization.'],
  ['瞥见','piē jiàn','to catch a glimpse','宛如在欧洲文明的地平线上瞥见的亚洲文明的剪影。','Like a silhouette of Asian civilization glimpsed on the horizon of European civilization.'],
  ['赃物','zāng wù','stolen goods; loot','将受到历史制裁的这两个强盗，一个叫法兰西，一个叫英吉利。','The two bandits who will face the judgment of history: one is called France, the other is called England.'],
  ['制裁','zhì cái','to sanction; judgment','将受到历史制裁的这两个强盗。','These two bandits will face the judgment of history.']
], [
  ['反语讽刺','fǎn yǔ fěng cì','verbal irony and sarcasm','丰功伟绩！收获巨大！两个胜利者装满了口袋。','What a great achievement! What enormous gains! Two victors with pockets stuffed full.','雨果用反语将侵略者的所谓"胜利"写成"丰功伟绩"，强烈讽刺了英法联军的强盗行为。','Hugo uses irony to describe the invaders\u2019 so-called victory as a great achievement, strongly satirizing the Anglo-French forces\u2019 banditry.']
]);

// Lesson 9: 论教养 (On Good Manners)
En('On Good Manners', [
  ['涵养','hán yǎng','self-cultivation; inner refinement','教养不仅仅是外表的礼貌，更是一种内在的涵养。','Good manners are not merely outward politeness but a form of inner refinement.'],
  ['恪守','kè shǒu','to strictly observe','一个有教养的人恪守社会公德。','A well-mannered person strictly observes social ethics.'],
  ['矫揉造作','jiǎo róu zào zuò','affected; artificial','真正有教养的人从不矫揉造作。','A truly well-mannered person is never affected or artificial.'],
  ['絮絮叨叨','xù xù dāo dāo','to prattle on and on','请原谅我絮絮叨叨说了这么多。','Please forgive me for prattling on so much.'],
  ['彬彬有礼','bīn bīn yǒu lǐ','refined and courteous','彬彬有礼的人在社会交往中如鱼得水。','A refined and courteous person navigates social interactions with ease.']
], null);

// Lesson 10: 精神的三间小屋 (Three Small Houses of the Spirit)
En('Three Small Houses of the Spirit', [
  ['宽宥','kuān yòu','to forgive; to pardon','给爱留下足够的空间，学会宽宥。','Leave enough space for love, and learn to forgive.'],
  ['鸠占鹊巢','jiū zhàn què cháo','a dove occupying the magpie\u2019s nest; usurping another\u2019s place','如果悲伤占据了整间小屋，快乐将无处安身，如同鸠占鹊巢。','If sorrow occupies the entire small house, happiness will have nowhere to rest, like a dove usurping the magpie\u2019s nest.'],
  ['坍塌','tān tā','to collapse','精神的小屋一旦坍塌，人的灵魂就无所依归。','Once the small houses of the spirit collapse, the soul has nowhere to belong.'],
  ['自惭形秽','zì cán xíng huì','to feel ashamed of one\u2019s inadequacy','面对伟大的心灵，不必自惭形秽。','Facing great souls, one need not feel ashamed of inadequacy.'],
  ['襟怀','jīn huái','breadth of mind; bosom','拥有宽广的襟怀才能建好精神的房屋。','Only with a broad mind can one build the houses of the spirit well.']
], [
  ['比喻论证','bǐ yù lùn zhèng','argumentation by analogy','人的精神需要三间小屋来安放：情感、事业和自身。','The human spirit needs three small houses for its dwelling: emotion, career, and the self.','用三间小屋比喻精神世界的三个维度，将抽象的精神追求具象化，使论述更加生动形象。','Using three small houses as a metaphor for three dimensions of spiritual life, this turns abstract spiritual pursuits into vivid, concrete images, making the argument more engaging.']
]);

// Writing: Make Your Viewpoint Clear
En('Make Your Viewpoint Clear', [
  ['论述','lùn shù','to discuss; to expound','围绕观点展开论述，注意选取适当的材料。','Develop your argument around the viewpoint, selecting appropriate materials.'],
  ['鲜明','xiān míng','distinct; clear-cut','主张什么，反对什么，都要清清楚楚，态度鲜明。','What you advocate and what you oppose must be crystal clear, with a distinct stance.'],
  ['模棱两可','mó léng liǎng kě','ambiguous; equivocal','不能含含糊糊，模棱两可。','One must not be vague or equivocal.'],
  ['旗帜','qí zhì','banner; flag (metaphor for stance)','形成一个旗帜鲜明的观点。','Form a clear-cut viewpoint.'],
  ['凸显','tū xiǎn','to highlight; to make prominent','有了明确的观点，还要在文章中把它凸显出来。','With a clear viewpoint, one must also highlight it in the essay.']
], null);

// Comprehensive Activity: The Gentleman Strives Ceaselessly
En('The Gentleman Strives Ceaselessly', [
  ['自强不息','zì qiáng bù xī','to strive ceaselessly; unremitting self-improvement','天行健，君子以自强不息。','Heaven moves with vigor; the gentleman strives ceaselessly for self-improvement.'],
  ['刚毅','gāng yì','resolute; firm','君子处世，刚毅坚韧，持之以恒。','The gentleman conducts himself with resoluteness and perseverance.'],
  ['坚韧','jiān rèn','tenacious; resilient','刚毅坚韧，持之以恒，努力奋进。','Resolute and tenacious, persevering, striving forward.'],
  ['精髓','jīng suǐ','essence; quintessence','这是我国传统文化的精髓。','This is the quintessence of our traditional culture.'],
  ['弘毅','hóng yì','broad-minded and resolute','士不可以不弘毅，任重而道远。','A scholar must be broad-minded and resolute, for the burden is heavy and the road is long.']
], null);

// ═══════════════════════════════════════════
// UNIT 3 — Classical Chinese Prose (古文)
// ═══════════════════════════════════════════

// Lesson 11: 岳阳楼记 (Record of Yueyang Tower)
En('Record of Yueyang Tower', [
  ['谪守','zhé shǒu','to be demoted and sent as a governor','滕子京谪守巴陵郡。','Teng Zijing was demoted and sent to govern Baling Prefecture.'],
  ['浩浩汤汤','hào hào shāng shāng','vast and mighty (of water)','衔远山，吞长江，浩浩汤汤，横无际涯。','Embracing distant mountains, swallowing the Yangtze, vast and mighty, stretching boundlessly.'],
  ['忧谗畏讥','yōu chán wèi jī','worried about slander and fearful of criticism','登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。','Climbing this tower, one feels homesick for the capital, worried about slander and criticism, seeing desolation everywhere, filled with extreme sorrow.'],
  ['心旷神怡','xīn kuàng shén yí','carefree and happy','登斯楼也，则有心旷神怡，宠辱偕忘。','Climbing this tower, one feels carefree and happy, forgetting both favor and disgrace.'],
  ['先忧后乐','xiān yōu hòu lè','to worry before others and rejoice after them','先天下之忧而忧，后天下之乐而乐。','Worry before all under heaven worry; rejoice after all under heaven rejoice.']
], [
  ['骈散结合','pián sàn jié hé','combining parallel and free prose','衔远山，吞长江，浩浩汤汤，横无际涯。','Embracing distant mountains, swallowing the Yangtze, vast and mighty, stretching boundlessly.','文章骈散结合，既有整齐对仗的骈句增强气势，又有自由灵活的散句使行文流畅。','The essay combines parallel and free prose: balanced parallel sentences enhance momentum, while flexible free sentences keep the writing fluent.'],
  ['对比手法','duì bǐ shǒu fǎ','contrast technique','悲观者见阴雨则忧，乐观者见晴明则喜。','Pessimists feel sorrow in rain; optimists feel joy in sunshine.','通过"悲"与"喜"两种心境的对比，引出"不以物喜，不以己悲"的人生境界。','By contrasting two states of mind — sorrow and joy — the author introduces the ideal of being unmoved by external things or personal fortunes.']
]);

// Lesson 12: 醉翁亭记 (Record of the Old Drunkard's Pavilion)
En('Record of the Old Drunkard' + '\\' + 'u2019s Pavilion', [
  ['翼然','yì rán','like wings spread open','有亭翼然临于泉上者，醉翁亭也。','There is a pavilion with eaves spread like wings, overlooking the spring — that is the Old Drunkard\u2019s Pavilion.'],
  ['酿泉','niàng quán','Brewing Spring (a spring name)','酿泉为酒，泉香而酒洌。','Brewing wine from the spring, the spring is fragrant and the wine is clear.'],
  ['觥筹交错','gōng chóu jiāo cuò','wine cups and drinking tallies intermingled (a lively banquet)','觥筹交错，起坐而喧哗者，众宾欢也。','Wine cups and tallies crisscrossing, guests rising and sitting with clamor — that is the joy of the guests.'],
  ['苍颜','cāng yán','aged face','苍颜白发，颓然乎其间者，太守醉也。','With an aged face and white hair, slumping among them — the governor is drunk.'],
  ['伛偻','yǔ lǚ','bent and stooped','伛偻提携，往来而不绝者。','The bent old and the led young, coming and going without end.']
], [
  ['层层剥笋','céng céng bāo sǔn','peeling layers like bamboo shoots','环滁皆山也→西南诸峰→琅琊→酿泉→醉翁亭。','Surrounding Chu are mountains → the southwestern peaks → Langya → Brewing Spring → the Old Drunkard\u2019s Pavilion.','文章开篇由远及近、层层推进，如同剥竹笋一般，最终引出醉翁亭，构思精妙。','The essay opens by moving from far to near, advancing layer by layer, ultimately revealing the pavilion — a masterful structural design.']
]);

// Lesson 13: 湖心亭看雪 (Viewing Snow at the Heart of the Lake)
En('Viewing Snow at the Heart of the Lake', [
  ['雾凇','wù sōng','rime; frost flowers','雾凇沆砀，天与云与山与水，上下一白。','Frost and mist pervaded the air; sky, clouds, mountains, and water were all white, above and below.'],
  ['沆砀','hàng dàng','vast and hazy','雾凇沆砀。','Frost and mist vast and hazy.'],
  ['拏','ná','to row (a boat)','余拏一小舟，拥毳衣炉火。','I rowed a small boat, wrapped in fur garments by the stove.'],
  ['毳衣','cuì yī','fur garment','拥毳衣炉火。','Wrapped in fur garments by the stove.'],
  ['痴','chī','obsessed; crazy','莫说相公痴，更有痴似相公者。','Do not say the gentleman is obsessed — there are others even more obsessed than he.']
], [
  ['白描手法','bái miáo shǒu fǎ','plain sketching technique','天与云与山与水，上下一白。惟长堤一痕、湖心亭一点。','Sky, clouds, mountains, and water were all white. Only a trace of the long embankment, a dot of the pavilion.','用简洁朴素的语言勾勒景物轮廓，不加渲染，以少写多，意境深远。','Using simple, plain language to outline the scene without embellishment, achieving a profound artistic mood with minimal strokes.']
]);

// Lesson 14: 诗词三首 (Three Poems)
En('Three Poems', [
  ['金樽','jīn zūn','golden goblet','金樽清酒斗十千，玉盘珍羞直万钱。','A golden goblet of fine wine, ten thousand a cup; a jade plate of rare delicacies, worth ten thousand coins.'],
  ['济沧海','jì cāng hǎi','to cross the vast sea','长风破浪会有时，直挂云帆济沧海。','The time will come to ride the wind and break the waves, setting sail across the vast sea.'],
  ['婵娟','chán juān','the beauty of the moon','但愿人长久，千里共婵娟。','May we all be blessed with longevity, sharing the beauty of the moon though a thousand miles apart.'],
  ['凄凉','qī liáng','desolate; bleak','巴山楚水凄凉地，二十三年弃置身。','In the desolate lands of Bashan and Chushui, I was cast aside for twenty-three years.'],
  ['琼楼玉宇','qióng lóu yù yǔ','jade palaces and towers','又恐琼楼玉宇，高处不胜寒。','Yet fearing those jade palaces and towers, where high up the cold is unbearable.']
], [
  ['豪放词风','háo fàng cí fēng','bold and unrestrained ci style','明月几时有？把酒问青天。','When did the bright moon first appear? Raising my cup, I ask the blue sky.','苏轼的《水调歌头》以豪放的笔触写月思亲，将个人情感与宇宙哲思相融，超越了一般的离别之叹。','Su Shi\u2019s Water Melody uses bold strokes to write about the moon and missing loved ones, blending personal emotion with cosmic reflection, transcending ordinary laments of parting.']
]);

// Writing: Argumentation Must Be Evidence-Based
En('Argumentation Must Be Evidence-Based', [
  ['论据','lùn jù','evidence; supporting argument','选用的材料要进行具体分析，使之能够支持观点。','Materials selected must be specifically analyzed to support the viewpoint.'],
  ['事例','shì lì','example; instance','运用事例论证时，要选择典型、可靠的事例。','When using examples for argumentation, choose typical and reliable instances.'],
  ['有据','yǒu jù','evidence-based; well-grounded','议论要言之有据。','Argumentation must be evidence-based.'],
  ['道理','dào lǐ','reasoning; principle','道理论证要引用名言或公认的道理。','Reasoning-based argumentation should cite famous sayings or universally recognized principles.'],
  ['典型','diǎn xíng','typical; representative','选取典型的事例来支持论点。','Select representative examples to support the argument.']
], null);

// Extracurricular Classical Poem Recitation (Unit 3)
// Manual insertion: insert vocabWords before the 'poems:' key
{
  const marker3 = 'titleEn: "Extracurricular Classical Poem Recitation", poems:';
  const mIdx3 = code.indexOf(marker3);
  if (mIdx3 !== -1 && !code.slice(mIdx3, mIdx3 + 500).includes('vocabWords:')) {
    const poemsIdx = code.indexOf('poems:', mIdx3);
    const vocabStr3 =
      `vocabWords: [\n` +
      `      {word:'\u620d\u9f13',pinyin:'sh\u00f9 g\u01d4',en:'garrison drum',sentence:'\u620d\u9f13\u65ad\u4eba\u884c\uff0c\u8fb9\u79cb\u4e00\u96c1\u58f0\u3002',sentenceEn:'The garrison drum stops all travelers; on the autumn frontier, a single wild goose cries.'},\n` +
      `      {word:'\u8427\u8427',pinyin:'xi\u0101o xi\u0101o',en:'rustling; desolate',sentence:'\u9e21\u58f0\u8305\u5e97\u6708\uff0c\u4eba\u8ff9\u677f\u6865\u971c\u3002',sentenceEn:'Roosters crow at the moonlit thatched inn; footprints mark the frost on a plank bridge.'},\n` +
      `      {word:'\u8d2c\u8c2a',pinyin:'bi\u01cen zh\u00e9',en:'to be demoted and banished',sentence:'\u5de6\u8fc1\u81f3\u84dd\u5173\u793a\u4f84\u5b59\u6e58\u3002',sentenceEn:'Demoted to Lan Pass, sending a message to my grand-nephew Xiang.'},\n` +
      `      {word:'\u51ed\u8f69',pinyin:'p\u00edng xu\u0101n',en:'to lean on the railing',sentence:'\u4e09\u5e74\u8c2a\u5b26\u6b64\u6816\u8fdf\uff0c\u4e07\u53e4\u60df\u7559\u695a\u5ba2\u60b2\u3002',sentenceEn:'Three years exiled here in idle sojourn; through the ages, only the grief of a traveler from Chu remains.'},\n` +
      `      {word:'\u69f2\u53f6',pinyin:'h\u00fa y\u00e8',en:'oak leaves',sentence:'\u69f2\u53f6\u843d\u5c71\u8def\uff0c\u67b3\u82b1\u660e\u9a7f\u5899\u3002',sentenceEn:'Oak leaves fall on the mountain path; orange blossoms brighten the post station wall.'}\n` +
      `    ], `;
    code = code.slice(0, poemsIdx) + vocabStr3 + code.slice(poemsIdx);
  } else if (mIdx3 === -1) {
    console.log('EN NOT FOUND: Extracurricular Classical Poem Recitation');
  }
}

// ═══════════════════════════════════════════
// UNIT 4 — Fiction (小说)
// ═══════════════════════════════════════════

// Lesson 15: 故乡 (My Hometown)
En('My Hometown', [
  ['萧索','xiāo suǒ','bleak; desolate','苍黄的天底下，远近横着几个萧索的荒村。','Under the pale yellow sky, scattered here and there lay a few bleak, desolate villages.'],
  ['恣睢','zì suī','unruly; unbridled','辛苦恣睢而生活的人。','Those who live in wanton cruelty.'],
  ['隔膜','gé mó','estranged; a barrier','我和闰土之间已经隔了一层可悲的厚障壁了。','Between Runtu and me, a sad, thick wall had risen.'],
  ['愕然','è rán','stunned; astonished','他站住了，脸上现出欢喜和凄凉的神情。','He stood still, his face showing both joy and sorrow.'],
  ['惘然','wǎng rán','bewildered; at a loss','我感到四面有看不见的高墙，使我气闷，又使我惘然。','I felt invisible walls closing in on all sides, making me suffocate and feel bewildered.']
], [
  ['对比刻画','duì bǐ kè huà','character portrayal through contrast','少年闰土天真活泼，中年闰土麻木迟钝。','The young Runtu was innocent and lively; the middle-aged Runtu was numb and dull.','通过少年闰土和中年闰土的外貌、语言、动作的对比，揭示封建社会对农民精神的摧残。','Through contrasting young and middle-aged Runtu in appearance, speech, and actions, the author reveals feudal society\u2019s destruction of the peasant spirit.'],
  ['环境描写','huán jìng miáo xiě','environmental description','苍黄的天底下，远近横着几个萧索的荒村。','Under the pale yellow sky, scattered here and there lay a few bleak, desolate villages.','开篇的荒凉景象暗示了故乡的衰败，奠定了全文悲凉的感情基调。','The bleak opening landscape hints at the hometown\u2019s decline, setting the sorrowful emotional tone for the entire story.']
]);

// Lesson 16: 我的叔叔于勒 (My Uncle Jules)
En('My Uncle Jules', [
  ['拮据','jié jū','financially strained','我家的拮据生活使母亲性情变得很坏。','Our financially strained life made my mother bad-tempered.'],
  ['栈桥','zhàn qiáo','pier; wharf','每星期日我们衣冠整齐地到海边栈桥上散步。','Every Sunday, we dressed up and strolled along the seaside pier.'],
  ['褴褛','lán lǚ','ragged; tattered','我看了看他的手，那是一只满是皱纹的水手的手，又看了看他的脸，那是一张衰老穷苦的脸。','I looked at his hands — wrinkled sailor hands — and then at his face — an old, impoverished face.'],
  ['阔绰','kuò chuò','lavish; extravagant','只要这个好心的于勒一回来，我们的境况就不同了，他可是个阔绰的人。','As soon as this good-hearted Jules returns, our situation will change — he is a lavish man.'],
  ['煞白','shà bái','deathly pale','母亲的脸色煞白。','My mother\u2019s face turned deathly pale.']
], [
  ['第一人称叙事','dì yī rén chēng xù shì','first-person narration','通过少年若瑟夫的视角讲述故事。','The story is told through the perspective of the young Joseph.','用少年视角叙述成人世界的势利与冷漠，形成天真与世故的对照，增强讽刺效果。','Using a young person\u2019s perspective to narrate the adult world\u2019s snobbery and indifference creates a contrast between innocence and worldliness, strengthening the satirical effect.']
]);

// Lesson 17: 孤独之旅 (A Lonely Journey)
En('A Lonely Journey', [
  ['茫然','máng rán','at a loss; bewildered','杜小康只能听从父亲的安排，茫然地跟着走。','Du Xiaokang could only follow his father\u2019s arrangements, walking along in bewilderment.'],
  ['嬉闹','xī nào','to play and frolic','那群鸭子在水上嬉闹。','That flock of ducks frolicked on the water.'],
  ['撩逗','liáo dòu','to tease; to provoke','风撩逗着芦苇的叶子。','The wind teased the leaves of the reeds.'],
  ['旷野','kuàng yě','wilderness; open field','前方是一片旷野，没有一个人影。','Ahead was a wilderness, without a single person in sight.'],
  ['歇斯底里','xiē sī dǐ lǐ','hysterical','暴风雨中杜小康歇斯底里地呼喊。','During the storm, Du Xiaokang screamed hysterically.']
], [
  ['成长小说','chéng zhǎng xiǎo shuō','coming-of-age fiction','杜小康从胆怯恐惧到坚强独立。','Du Xiaokang grows from timidity and fear to strength and independence.','通过一个少年在芦苇荡中放鸭的孤独经历，展示人在困境中的精神成长过程。','Through a boy\u2019s lonely experience herding ducks in the reed marshes, the story reveals the process of spiritual growth through adversity.']
]);

// Writing: Learning to Condense
En('Learning to Condense', [
  ['缩写','suō xiě','to condense; to abridge','保持中心思想不变的前提下，压缩文章的篇幅。','Under the premise of keeping the central idea unchanged, compress the length of the essay.'],
  ['概括','gài kuò','to summarize; to generalize','缩写要对原作进行高度概括。','Condensing requires a high degree of summarization of the original.'],
  ['主干','zhǔ gàn','main trunk; core content','分清原作的主干和枝叶，遵循保持主干删除枝叶的原则。','Distinguish the core content from secondary details, following the principle of keeping the trunk and removing the leaves.'],
  ['取舍','qǔ shě','to select and discard','确定取舍和详略。','Determine what to keep and what to discard, and the level of detail.'],
  ['连贯','lián guàn','coherent; connected','行文时要注意语言的连贯、流畅。','When writing, pay attention to coherence and fluency of language.']
], null);

// Comprehensive Activity: Entering the World of Fiction
En('Entering the World of Fiction', [
  ['情节','qíng jié','plot','那些小说的作者是怎样讲述故事，让你沉浸其中的？','How did those authors tell their stories and make you immerse yourself in them?'],
  ['人物','rén wù','character','抓住主要人物和主要情节。','Grasp the main characters and the main plot.'],
  ['悬念','xuán niàn','suspense','原文中有不少悬念和误会。','The original text contains many suspenseful moments and misunderstandings.'],
  ['曲折','qū zhé','twisting; full of turns','那生动的故事，曲折的情节，鲜活的人物。','Vivid stories, twisting plots, and lively characters.'],
  ['沉浸','chén jìn','to immerse','让你沉浸其中、欲罢不能。','Making you immersed in it, unable to stop.']
], null);

// ═══════════════════════════════════════════
// UNIT 5 — Argumentative Essays (议论文)
// ═══════════════════════════════════════════

// Lesson 18: 中国人失掉自信力了吗 (Have the Chinese Lost Their Self-Confidence?)
En('Have the Chinese Lost Their Self-Confidence?', [
  ['玄虚','xuán xū','mystical and hollow','求神拜佛，是对自己的玄虚。','Praying to gods and worshiping Buddha is self-deceptive mysticism.'],
  ['诓骗','kuāng piàn','to deceive; to swindle','自欺力是诓骗自己。','Self-deception is swindling oneself.'],
  ['脊梁','jǐ liáng','backbone; spine','我们从古以来就有埋头苦干的人，有拼命硬干的人，有为民请命的人，有舍身求法的人，这就是中国的脊梁。','Since ancient times we have had people who toiled tirelessly, who fought desperately, who petitioned for the people, who sacrificed themselves seeking truth — these are the backbone of China.'],
  ['前仆后继','qián pū hòu jì','one after another; in relentless succession','中华民族前仆后继地奋斗。','The Chinese nation fights on in relentless succession.'],
  ['自欺','zì qī','self-deception','失掉的不是自信力，而是自欺力。','What was lost is not self-confidence, but self-deception.']
], [
  ['驳论文','bó lùn wén','refutational essay','先树靶子再逐一反驳。','First set up the target, then refute point by point.','鲁迅先摆出对方的论点和论据，然后逐步驳斥，指出其论证的逻辑错误。','Lu Xun first presents the opposing argument and evidence, then systematically refutes them, exposing the logical fallacies in their reasoning.'],
  ['正面立论','zhèng miàn lì lùn','positive argumentation','这就是中国的脊梁。','These are the backbone of China.','在驳斥错误观点的同时，正面提出自己的论点，用大量事实证明中国人并未失去自信。','While refuting the erroneous view, the author positively presents his own argument, using abundant facts to prove the Chinese have not lost self-confidence.']
]);

// Lesson 19: 怀疑与学问 (Doubt and Scholarship)
En('Doubt and Scholarship', [
  ['墨守','mò shǒu','to cling obstinately to','不论对于哪一种学问，我们都应该持怀疑态度，不当墨守前人的旧说。','Regarding any field of knowledge, we should maintain a doubtful attitude and not cling to old theories of predecessors.'],
  ['辨伪','biàn wěi','to distinguish the genuine from the false','怀疑不仅是从消极方面辨伪去妄的必要步骤。','Doubt is not merely a necessary step for negatively distinguishing truth from falsehood.'],
  ['不攻自破','bù gōng zì pò','to collapse on its own','经过怀疑、思索、辨别，谬误自然不攻自破。','Through doubt, reflection, and discernment, falsehood naturally collapses on its own.'],
  ['大儒','dà rú','great Confucian scholar','古今大学问家、大哲学家都是从怀疑中锻炼出来的。','The great scholars and philosophers of all ages were forged through doubt.'],
  ['锻炼','duàn liàn','to forge; to temper','一切学问家不但对流俗传说要善于怀疑，对于过去学者的学说也要善于怀疑。','All scholars should not only doubt popular legends but also the teachings of past scholars.']
], [
  ['层递论证','céng dì lùn zhèng','progressive argumentation','怀疑→思索→辨别→新学说的产生。','Doubt → reflection → discernment → emergence of new theories.','文章按层次递进的方式展开论证：从怀疑的消极作用（辨伪去妄）到积极作用（建设新学说），逻辑严密。','The essay develops its argument in a progressive manner: from the negative function of doubt (distinguishing truth from falsehood) to its positive function (building new theories), with rigorous logic.']
]);

// Lesson 20: 谈创造性思维 (On Creative Thinking)
En('On Creative Thinking', [
  ['汲取','jí qǔ','to draw; to absorb','创造性思维需要不断汲取知识。','Creative thinking requires constantly absorbing knowledge.'],
  ['根深蒂固','gēn shēn dì gù','deep-rooted','不满足于一个答案的态度不能根深蒂固地扎根。','The attitude of not being satisfied with one answer cannot take deep root.'],
  ['孜孜不倦','zī zī bù juàn','diligent and tireless','创造性人才总是孜孜不倦地汲取知识。','Creative talents are always diligently and tirelessly absorbing knowledge.'],
  ['持之以恒','chí zhī yǐ héng','to persevere; to keep at it','创造力需要持之以恒地探索。','Creativity requires persistent exploration.'],
  ['推敲','tuī qiāo','to deliberate; to weigh carefully','对问题要反复推敲，不满足于一个答案。','One must deliberate on problems repeatedly, not settling for a single answer.']
], null);

// Lesson 21: 创造宣言 (A Declaration of Creativity)
En('A Declaration of Creativity', [
  ['中伤','zhòng shāng','to slander; to smear','有人说环境太平凡了，不能创造。这是对创造的中伤。','Some say the environment is too ordinary for creativity. This is slander against creativity.'],
  ['鲁钝','lǔ dùn','dull; slow-witted','有人说自己太鲁钝了，不能创造。','Some say they are too dull to create.'],
  ['豢养','huàn yǎng','to raise; to keep (animals)','不能因为环境限制就被困境所豢养。','One must not be kept captive by limitations of the environment.'],
  ['画龙点睛','huà lóng diǎn jīng','to add the finishing touch','处处是创造之地，天天是创造之时，人人是创造之人。','Every place is a place for creation, every day is a time for creation, every person is a person of creation.'],
  ['懦夫','nuò fū','coward','只有不愿丢掉旧的一切的懦夫才会这样想。','Only cowards who refuse to abandon the old would think this way.']
], [
  ['排比驳论','pái bǐ bó lùn','refutation through parallel structure','环境太平凡了，不能创造→生活太单调了，不能创造→年纪太小了，不能创造。','The environment is too ordinary for creativity → life is too monotonous → one is too young.','陶行知列举多种借口并逐一反驳，运用排比结构增强气势，彻底推翻不能创造的种种理由。','Tao Xingzhi lists multiple excuses and refutes each one, using parallel structure for momentum, thoroughly demolishing every reason against creativity.']
]);

// Writing: Reasoning Must Be Sound
En('Reasoning Must Be Sound', [
  ['论证','lùn zhèng','argumentation; to argue','论证要合理，逻辑要严密。','Argumentation must be sound, and logic must be rigorous.'],
  ['严密','yán mì','rigorous; tight','论证的逻辑要严密。','The logic of argumentation must be rigorous.'],
  ['谬误','miù wù','fallacy; error','避免论证中的逻辑谬误。','Avoid logical fallacies in argumentation.'],
  ['因果','yīn guǒ','cause and effect','要正确把握事物之间的因果关系。','One must correctly grasp the cause-and-effect relationships between things.'],
  ['以偏概全','yǐ piān gài quán','to generalize from one-sided evidence','论证时要避免以偏概全。','When arguing, avoid generalizing from one-sided evidence.']
], null);

// Oral Communication: Discussion
En('Discussion', [
  ['讨论','tǎo lùn','discussion; to discuss','讨论时要围绕议题，有针对性地发表看法。','During discussion, stay on topic and express views with relevance.'],
  ['议题','yì tí','topic for discussion','围绕议题发表自己的看法。','Express your views around the discussion topic.'],
  ['倾听','qīng tīng','to listen attentively','讨论时要认真倾听别人的发言。','During discussion, listen attentively to others\u2019 remarks.'],
  ['反驳','fǎn bó','to refute; to counter','有理有据地反驳对方的观点。','Refute the opposing viewpoint with reason and evidence.'],
  ['共识','gòng shí','consensus','经过讨论，形成一定的共识。','Through discussion, reach a certain consensus.']
], null);

// ═══════════════════════════════════════════
// UNIT 6 — Classical Fiction (古典小说)
// ═══════════════════════════════════════════

// Lesson 22: 智取生辰纲 (The Clever Seizure of the Birthday Convoy)
En('The Clever Seizure of the Birthday Convoy', [
  ['趱行','zǎn xíng','to hasten on a journey','杨志催促军健趱行。','Yang Zhi urged the soldiers to hasten their march.'],
  ['嗔怒','chēn nù','to be angry; to fly into a rage','杨志嗔怒道。','Yang Zhi said angrily.'],
  ['恁地','nèn dì','like this; in such a way','你这般说，恁地不是好汉。','If you speak like this, you are no hero.'],
  ['干系','gān xì','responsibility; liability','这干系须是俺的。','This responsibility falls on me.'],
  ['面面厮觑','miàn miàn sī qù','to stare at each other in dismay','众军汉面面厮觑，各自不敢动弹。','The soldiers stared at each other in dismay, none daring to move.']
], [
  ['智谋叙事','zhì móu xù shì','narrative of strategy','吴用设计智取生辰纲，杨志精明却仍上当。','Wu Yong devised a plan to cleverly seize the birthday convoy; Yang Zhi was shrewd yet still fell for it.','通过双线叙事，明写杨志押送的小心谨慎，暗写吴用的周密计划，最后在黄泥冈交汇，展现以智胜力的主题。','Through dual-thread narration, the explicit line shows Yang Zhi\u2019s cautious escort while the implicit line reveals Wu Yong\u2019s meticulous plan; they converge at Huangni Ridge, demonstrating the theme of wit triumphing over force.']
]);

// Lesson 23: 范进中举 (Fan Jin Passes the Imperial Examination)
En('Fan Jin Passes the Imperial Examination', [
  ['作揖','zuō yī','to bow with hands clasped','范进向他作揖。','Fan Jin bowed to him with hands clasped.'],
  ['星宿','xīng xiù','constellation; star','如今我做了老爷，就是天上的星宿。','Now that I am a master, I am like a star in the heavens.'],
  ['体统','tǐ tǒng','propriety; decorum','像你这种尖嘴猴腮的人，也该撒抛尿照照自己，不三不四，就想天鹅屁吃！','A person with a face like yours should look in a puddle at himself — such impropriety, dreaming of eating swan meat!'],
  ['腆着','tiǎn zhe','shamelessly presenting','胡屠户腆着肚子来了。','Butcher Hu came shamelessly puffing out his belly.'],
  ['醉醺醺','zuì xūn xūn','tipsy; drunk','胡屠户醉醺醺地走了。','Butcher Hu left in a drunken stupor.']
], [
  ['讽刺手法','fěng cì shǒu fǎ','satirical technique','范进中举前后，众人态度天壤之别。','Before and after Fan Jin passed the exam, people\u2019s attitudes were worlds apart.','通过胡屠户中举前后判若两人的态度对比，以及范进喜极而疯的夸张描写，深刻讽刺了科举制度对人性的扭曲。','Through the stark contrast in Butcher Hu\u2019s attitude before and after Fan Jin\u2019s success, and the exaggerated depiction of Fan Jin going mad with joy, the author deeply satirizes the imperial examination system\u2019s distortion of human nature.']
]);

// Lesson 24: 三顾茅庐 (Three Visits to the Thatched Cottage)
En('Three Visits to the Thatched Cottage', [
  ['拜谒','bài yè','to pay a formal visit','玄德同关、张并从人等来隆中拜谒孔明。','Liu Bei, along with Guan Yu, Zhang Fei, and their attendants, came to Longzhong to pay a formal visit to Kongming.'],
  ['疏懒','shū lǎn','idle and lazy','孔明疏懒性成，屡蒙将军枉临。','Kongming is idle by nature; the general has repeatedly troubled himself to visit.'],
  ['如鱼得水','rú yú dé shuǐ','like a fish in water','孤之有孔明，犹鱼之有水也。','My having Kongming is like a fish having water.'],
  ['经世奇才','jīng shì qí cái','extraordinary talent for governance','此人有经天纬地之才。','This person possesses extraordinary talent for governing the world.'],
  ['三分天下','sān fēn tiān xià','dividing the realm into three','孔明为刘备分析天下三分之势。','Kongming analyzed for Liu Bei the strategic situation of dividing the realm into three.']
], null);

// Lesson 25: 刘姥姥进大观园 (Granny Liu Visits the Grand View Garden)
En('Granny Liu Visits the Grand View Garden', [
  ['蓼溆','liǎo xù','reed and stream scenery','这些小说里的事，跟我们庄户人家的日子不一样。','The events in these novels are different from the daily life of us farm folk.'],
  ['调停','tiáo tíng','to mediate; to manage','凤姐调停得当，安排妥帖。','Sister Feng managed things properly and arranged everything neatly.'],
  ['篾片','miè piàn','bamboo strip; sycophant','那刘姥姥也不过是个篾片相公做的引子。','That Granny Liu was merely a bamboo strip used as an introduction.'],
  ['忍俊不禁','rěn jùn bù jīn','unable to hold back laughter','众人忍俊不禁。','Everyone was unable to hold back their laughter.'],
  ['插科打诨','chā kē dǎ hùn','comic banter; to crack jokes','刘姥姥故意插科打诨，逗得众人大笑。','Granny Liu deliberately made comic remarks, making everyone laugh heartily.']
], [
  ['群像描写','qún xiàng miáo xiě','group portrait description','众人笑的形态各不相同：史湘云喷饭、林黛玉伏案、贾母搂着宝玉、王夫人指着凤姐。','Everyone laughed differently: Shi Xiangyun sprayed her rice, Lin Daiyu collapsed on the table, the Matriarch embraced Baoyu, and Lady Wang pointed at Sister Feng.','曹雪芹通过一个共同场景中各人不同的笑态，精准展现了每个人物的性格特征，以群像刻画达到传神效果。','Cao Xueqin precisely portrays each character\u2019s personality through their distinct ways of laughing in a shared scene, achieving vivid characterization through group portraiture.']
]);

// Writing: Learning to Adapt
En('Learning to Adapt', [
  ['改写','gǎi xiě','to adapt; to rewrite','改写就是在原作基础上进行再创造。','Adapting means recreating on the basis of the original work.'],
  ['视角','shì jiǎo','perspective; point of view','可以变换叙事视角进行改写。','One can adapt by changing the narrative perspective.'],
  ['体裁','tǐ cái','genre; literary form','改写可以改变文章的体裁。','Adapting can change the genre of the text.'],
  ['再创造','zài chuàng zào','recreation; reimagining','改写是在理解原作基础上的再创造。','Adapting is a recreation based on understanding the original work.'],
  ['叙事','xù shì','narrative; narration','改变叙事角度，尝试用不同人物的视角来讲述故事。','Change the narrative angle, trying to tell the story from different characters\u2019 perspectives.']
], null);

// 名著导读: Water Margin: Reading Classical Fiction
En('Water Margin: Reading Classical Fiction', [
  ['好汉','hǎo hàn','hero; brave man','一百零八位好汉的故事。','The stories of one hundred and eight heroes.'],
  ['聚义','jù yì','to gather for a righteous cause','好汉们聚义梁山。','The heroes gathered at Mount Liang for a righteous cause.'],
  ['侠义','xiá yì','chivalry; knight-errantry','水浒传充满侠义精神。','Water Margin is filled with the spirit of chivalry.'],
  ['官逼民反','guān bī mín fǎn','tyranny drives the people to revolt','官逼民反是水浒传的核心主题。','Tyranny driving the people to revolt is the central theme of Water Margin.'],
  ['章回体','zhāng huí tǐ','chapter-structured novel','水浒传是中国四大名著之一，采用章回体结构。','Water Margin is one of the four great Chinese novels, using a chapter-structured format.']
], null);

// Extracurricular Classical Poetry Recitation (Unit 6)
// Manual insertion: insert vocabWords before the 'poems:' key
{
  const marker6 = 'titleEn: "Extracurricular Classical Poetry Recitation",';
  const mIdx6 = code.indexOf(marker6);
  if (mIdx6 !== -1 && !code.slice(mIdx6, mIdx6 + 500).includes('vocabWords:')) {
    const poemsIdx6 = code.indexOf('poems:', mIdx6);
    const vocabStr6 =
      `vocabWords: [\n` +
      `      {word:'\u84b9\u846b',pinyin:'ji\u0101n ji\u0101',en:'reeds',sentence:'\u84b9\u846b\u6768\u67f3\u4f3c\u6c40\u6d32\u3002',sentenceEn:'Reeds and willows resemble an islet.'},\n` +
      `      {word:'\u8721\u70ac',pinyin:'l\u00e0 j\u00f9',en:'wax candle',sentence:'\u6625\u8695\u5230\u6b7b\u4e1d\u65b9\u5c3d\uff0c\u8721\u70ac\u6210\u7070\u6cea\u59cb\u5e72\u3002',sentenceEn:'The silkworm spins silk until death; the candle weeps wax until it turns to ash.'},\n` +
      `      {word:'\u7ed5\u6751',pinyin:'r\u00e0o c\u016bn',en:'surrounding the village',sentence:'\u6811\u7ed5\u6751\u5e84\uff0c\u6c34\u6ee1\u9642\u5858\u3002',sentenceEn:'Trees surround the village, water fills the ponds.'},\n` +
      `      {word:'\u9e67\u9e44',pinyin:'zh\u00e8 g\u016b',en:'partridge',sentence:'\u90c1\u5b64\u53f0\u4e0b\u6e05\u6c5f\u6c34\uff0c\u4e2d\u95f4\u591a\u5c11\u884c\u4eba\u6cea\u3002',sentenceEn:'Below Lonely Pavilion flows the clear river; within it, how many travelers have shed their tears.'},\n` +
      `      {word:'\u800c\u4eca',pinyin:'\u00e9r j\u012bn',en:'now; nowadays',sentence:'\u800c\u4eca\u8bc6\u5c3d\u6101\u6ecb\u5473\uff0c\u6b32\u8bf4\u8fd8\u4f11\u3002',sentenceEn:'Now, having fully known the taste of sorrow, I want to speak but stop myself.'}\n` +
      `    ],\n    `;
    code = code.slice(0, poemsIdx6) + vocabStr6 + code.slice(poemsIdx6);
  } else if (mIdx6 === -1) {
    console.log('EN NOT FOUND: Extracurricular Classical Poetry Recitation');
  }
}

// ═══════════════════════════════════════════
// SAVE AND VALIDATE
// ═══════════════════════════════════════════
saveAndValidate('textbook_g9s1.js', code, 'TB_G9S1');
