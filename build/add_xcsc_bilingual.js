#!/usr/bin/env node
/**
 * add_xcsc_bilingual.js — Add English bilingual fields to xcsc_data.js
 *
 * Reads the existing xcsc_data.js, adds stemEn/optionsEn/answerTextEn/explainEn/examPointEn
 * fields to every question, adds titleEn to papers, and fills in missing answers/analysis.
 *
 * Usage: node build/add_xcsc_bilingual.js
 */
const vm = require('vm');
const fs = require('fs');
const path = require('path');

// Load existing data
const xcscPath = path.join(__dirname, '..', 'xcsc_data.js');
const code = fs.readFileSync(xcscPath, 'utf8');
const ctx = { window: {} };
vm.runInNewContext(code, ctx);
const DATA = ctx.window.XCSC_DATA;

// ═══════════════════════════════════════════════════════════
// Paper title translations
// ═══════════════════════════════════════════════════════════
const TITLE_EN = {
  km2020: 'Kunming 2020 Primary-to-Junior Chinese Exam',
  zt2021: 'Zhaotong 2021 Primary-to-Junior Chinese Exam',
  dq2021: 'Diqing 2021 Primary-to-Junior Chinese Exam',
  yn2018: 'Yunnan Province 2018 Primary-to-Junior Chinese Exam',
  km2018: 'Kunming 2018 Primary-to-Junior Chinese Exam',
  yn2019: 'Yunnan Province 2019 Primary-to-Junior Chinese Exam',
  tc2024: 'Tengchong (Baoshan) 2024 Primary-to-Junior Chinese Exam',
  yn2012: 'Yunnan Province 2012 Primary-to-Junior Chinese Exam',
  yn2014: 'Yunnan Province 2014 Primary-to-Junior Chinese Exam',
  dh2023: 'Dehong Prefecture 2023 Primary-to-Junior Chinese Exam',
  qj2023: 'Qujing 2023 Primary-to-Junior Chinese Exam',
  wh2024: 'Kunming Wuhua District 2024 Grade 6 Chinese Graduation Exam',
  xs2024: 'Kunming Xishan District 2024 Grade 6 Chinese Graduation Exam',
  cg2024: 'Kunming Chenggong District 2024 Primary-to-Junior Chinese Exam',
  gd2024: 'Kunming Guandu District 2024 Grade 6 Chinese Graduation Exam',
  pl2024: 'Kunming Panlong District 2024 Grade 6 Chinese Graduation Exam'
};

// ═══════════════════════════════════════════════════════════
// Common examPoint translations
// ═══════════════════════════════════════════════════════════
const EP_EN = {
  '词形':'Word Form','拼音':'Pinyin','字形':'Character Form','字义':'Character Meaning',
  '标点符号':'Punctuation','诗文朗读、默写、翻译':'Poetry Recitation & Writing',
  '语言表达':'Language Expression','文学文化常识':'Literary & Cultural Knowledge',
  '语段阅读':'Passage Reading','记叙文':'Narrative Text','叙事；想象作文':'Narrative & Imaginative Writing',
  '扩写、缩写句子；句式转换':'Sentence Expansion/Reduction & Transformation',
  '课文内容理解':'Text Content Comprehension','拼音；字形':'Pinyin & Character Form',
  '字音辨析':'Phonetic Discrimination','形近字':'Similar Characters',
  '关联词':'Connective Words','引号作用':'Function of Quotation Marks',
  '叠字词语':'Reduplicated-Character Words','古诗积累':'Classical Poetry Knowledge',
  '谚语':'Proverbs','修改病句':'Correcting Faulty Sentences',
  '修改语段':'Editing Paragraphs','看拼音写词语':'Writing Words from Pinyin',
  '标点符号':'Punctuation','改错字':'Correcting Wrong Characters',
  '选词填空':'Word Selection','谚语运用':'Proverb Application',
  '成语变字':'Character Swap Idioms','病句辨析':'Identifying Faulty Sentences',
  '句式变换':'Sentence Pattern Transformation','数字含义':'Numerical Meaning',
  '书写规范':'Handwriting Standards','多音字':'Polyphonic Characters',
  '名人常识':'Famous Figures Knowledge','词语运用':'Word Usage',
  '语句排序':'Sentence Ordering','新闻标题':'News Headline Writing',
  '半命题作文':'Semi-titled Composition','改写作文':'Rewriting Composition',
  '想象作文':'Imaginative Writing','叙事作文':'Narrative Composition',
  '写人作文':'Character Description Writing','成语理解':'Idiom Comprehension',
  '同音字辨析':'Homophone Discrimination','文化常识':'Cultural Knowledge',
  '古文字词释义':'Classical Chinese Word Meanings','成语运用':'Idiom Usage',
  '病句修改/句式转换':'Sentence Correction/Transformation',
  '观点表达':'Expressing Opinions','文言词义':'Classical Chinese Vocabulary',
  '文言翻译':'Classical Chinese Translation','成语填空':'Idiom Fill-in',
  '课文默写/古诗文':'Text & Poetry Writing from Memory',
  '句式转换/病句修改':'Sentence Transformation & Error Correction',
  '笔顺':'Stroke Order','拼音；字形；字义':'Pinyin, Form & Meaning',
  '词语搭配':'Word Collocation','仿写；拟人；修改病句':'Imitation, Personification & Error Correction',
  '诗文默写':'Poetry Writing from Memory','书法常识':'Calligraphy Knowledge',
  '信息提取；口语交际':'Information Extraction & Oral Communication',
  '口语交际':'Oral Communication','字音字形':'Pronunciation & Character Form',
  '近义词':'Synonyms','字词理解':'Word Comprehension',
  '词语搭配':'Word Collocation','说明方法':'Expository Methods',
  '成语积累':'Idiom Accumulation','古诗文积累':'Classical Poetry Accumulation',
  '名言运用':'Applying Famous Quotes','半命题/想象作文':'Semi-titled/Imaginative Writing',
  '缩句；句式转换':'Sentence Reduction & Transformation',
  '看拼音写汉字':'Writing Characters from Pinyin',
  '词形辨析':'Word Form Discrimination',
  '词语含义的理解':'Word Meaning Comprehension',
  '习俗及习俗寓意':'Customs & Their Symbolic Meanings',
  '语言得体':'Language Appropriateness',
  '综合知识判断（字义、表现手法、文章理解、书法作品）':'Comprehensive Knowledge Judgement',
  '语言表达（换词、情境写话、修辞手法）':'Language Expression (Word Replacement, Situational Writing, Rhetoric)',
  '古诗词填空、格言名言':'Poetry & Proverb Fill-in',
  '文章内容理解':'Text Content Comprehension',
  '拓展训练':'Extended Training',
  '字音':'Pronunciation',
  '排序':'Sequencing',
  '汉字结构（造字方法）':'Character Construction Methods',
  '字义（多义字）':'Character Meaning (Polysemous)',
  '词汇运用':'Vocabulary Application',
  '经典名著':'Classic Literature',
  '关联词':'Connective Words',
  '古诗词与重要节日':'Poetry & Traditional Festivals',
  '标点符号运用':'Punctuation Usage',
  '句式衔接':'Sentence Linking',
  '格言名言、古诗词填空':'Quotes & Poetry Fill-in',
  '课文内容填空':'Text Content Fill-in',
  '缩句、句式转换、修改病句':'Sentence Reduction, Transformation & Error Correction',
  '对联':'Couplet Writing',
  '字音辨析':'Phonetic Discrimination',
  '字形辨析':'Character Form Discrimination',
  '词义理解与运用':'Word Meaning & Application',
  '古诗托物言志手法':'Poetry: Object-to-Aspiration Technique',
  '课文内容理解':'Text Content Understanding',
  '病句修改及修改符号使用':'Error Correction & Proofreading Marks',
  '课内人物形象分析':'In-text Character Analysis',
  '传统节日古诗积累':'Festival Poetry Accumulation',
  '夸张句仿写':'Exaggeration Sentence Writing',
  '课内背诵篇目':'Text Recitation',
  '修辞句赏析':'Rhetorical Sentence Appreciation',
  '文段内容理解':'Passage Content Understanding',
  '近义词积累':'Synonym Accumulation',
  '对比阅读':'Comparative Reading',
  '信息辨析':'Information Verification',
  '情境对话':'Situational Dialogue',
  '句子理解与感悟':'Sentence Comprehension & Reflection',
  '材料信息提取':'Material Information Extraction',
  '观点表达':'Expressing Opinions',
  '宣传标语设计':'Slogan Design',
  '综合表达':'Comprehensive Expression',
  '习作表达':'Composition Expression',
  '课内字词书写':'Character Writing from Curriculum',
  '路牌拼写规则':'Road Sign Pinyin Rules',
  '字音字形字义辨析':'Pronunciation, Form & Meaning',
  '多音字辨析':'Polyphonic Character Discrimination',
  '材料筛选':'Material Selection',
  '概括文段大意':'Passage Summary',
  '课文内容与文学常识':'Text Content & Literary Knowledge',
  '说明方法辨析':'Expository Method Identification',
  '阅读方法':'Reading Methods',
  '传统节日诗句匹配':'Festival Poetry Matching',
  '传统节日寓意':'Festival Symbolism',
  '文章内容理解':'Content Comprehension',
  '细节理解':'Detail Comprehension',
  '词语理解':'Word Comprehension',
  '主旨理解':'Theme Understanding',
  '过渡句位置':'Transitional Sentence Placement',
  '人物评价':'Character Evaluation',
  '联系生活表达感受':'Connecting to Life Experience',
  '材料信息运用':'Information Application',
  '文言字义理解':'Classical Chinese Word Meaning',
  '文言文内容理解':'Classical Chinese Content',
  '文言文主旨概括':'Classical Chinese Theme',
  '会徽分析':'Logo Analysis',
  '推荐理由写作':'Recommendation Writing',
  '口语表达':'Oral Expression',
  '叙事作文':'Narrative Composition',
  '看拼音写词语':'Writing Words from Pinyin',
  '错别字辨析':'Incorrect Character Identification',
  '一词多义':'Multiple Meanings of One Word',
  '传统文化':'Traditional Culture',
  '书法鉴赏':'Calligraphy Appreciation',
  '名著阅读':'Classic Novel Reading',
  '综合性学习':'Comprehensive Learning',
  '古诗文默写、名著人物评价':'Poetry Recitation & Character Evaluation',
  '毛笔书写':'Brush Calligraphy',
  '抄写书写':'Copywriting & Handwriting',
  '半命题叙事作文':'Semi-titled Narrative Composition',
  '命题/半命题记叙文':'Titled/Semi-titled Narrative',
  '形声字、多音字字音字义':'Phono-semantic & Polyphonic Characters',
  '年龄称谓':'Age Terminology',
  '仿写句子、借景抒情':'Sentence Imitation & Scenic Emotion',
  '名篇名句默写':'Famous Passage Recitation',
  '命题/半命题记叙文':'Narrative Composition'
};

// ═══════════════════════════════════════════════════════════
// Translation data — keyed by paperId, then questionNum (as string)
// For readingGroup sub-questions, use "num.subIdx" (e.g. "19.0" for first sub)
// ═══════════════════════════════════════════════════════════
const TR = {
km2020: {
  '1': {stemEn:'Neatly copy "暴露无遗 司空见惯" (completely exposed; commonplace) on the line.', answerTextEn:'暴露无遗 司空见惯', explainEn:'Don\'t confuse 暴 with 爆, or 惯 with 贯.', examPointEn:'Word Form'},
  '2': {stemEn:'Write characters/words from pinyin.', answerTextEn:'grudge; endure; desolate; basis; cliff; swollen; terror; hesitate', explainEn:'Note: 熬 needs the four dots at bottom; 凄 differs from 妻; 崖 differs from 涯.', examPointEn:'Pinyin & Character Form'},
  '3': {stemEn:'Select the item with an incorrect pinyin pronunciation.', optionsEn:['lapel (jīn)','government (zhèn)','drench (lín)','earthworm (yǐn)'], explainEn:'政 should be zhèng, not zhèn.', examPointEn:'Pinyin'},
  '4': {stemEn:'Select the group with an incorrect pinyin pronunciation.', optionsEn:['torture (xíng)','steam (zhēng)','listen (qīng)','brocade flag (jīng)'], explainEn:'锦 should be jǐn, not jīng.', examPointEn:'Pinyin'},
  '5': {stemEn:'Select the group with an incorrect pinyin pronunciation.', optionsEn:['dejected (jī)','sacrifice (xī)','hoof (tí)','assault (xí)'], explainEn:'沮 should be jǔ, not jī.', examPointEn:'Pinyin'},
  '6': {stemEn:'Select the group with an incorrect pinyin pronunciation.', optionsEn:['uneven (cān)','provide (gōng)','see daylight again (chóng)','rummage through (dǎo)'], explainEn:'参差 — 参 should be cēn, not cān.', examPointEn:'Pinyin'},
  '7': {stemEn:'Select the word with an incorrect character.', optionsEn:['lingering sound 粱→梁','all night','emptiness','fiddle with'], explainEn:'余音绕粱: 粱 should be 梁 (beam).', examPointEn:'Character Form'},
  '8': {stemEn:'Select the word with an incorrect character.', optionsEn:['vividly lifelike','cruel 爆→暴','intoxicated','thin/gaunt'], explainEn:'残爆: 爆 should be 暴 (violent).', examPointEn:'Character Form'},
  '9': {stemEn:'Select the word with an incorrect character.', optionsEn:['perceive through subtlety','family situation','grass 平→坪','inspect'], explainEn:'草平 should be 草坪 (lawn).', examPointEn:'Word Form'},
  '10': {stemEn:'Select the word with an incorrect character.', optionsEn:['stride 留→流 star','monotone','generous','cloak'], explainEn:'大步留星 should be 大步流星 (striding).', examPointEn:'Word Form'},
  '11': {stemEn:'Choose the correct meaning for the underlined character.\n思 (sī): A. think/understand; B. miss/remember; C. train of thought.\n①哀思 mourning thoughts ( ) ②文思 literary inspiration ( )\n惊 (jīng): A. scared; B. surprised; C. grand.\n③惊异 astonished ( ) ④惊慌 panicked ( )', answerTextEn:'B; C; B; A', explainEn:'哀思=remembrance; 文思=train of thought; 惊异=surprised; 惊慌=scared.', examPointEn:'Character Meaning'},
  '12': {stemEn:'Identify the function of the ellipsis in each sentence.\nA. interruption; B. omission of items; C. omission of repeated words.', answerTextEn:'A; B', explainEn:'①Interrupted speech; ②List of dried fruits is incomplete.', examPointEn:'Punctuation'},
  '13': {stemEn:'Rewrite sentences as required.\n(1) Shorten the sentence.\n(2) Change passive to "把" sentence.\n(3) Change direct speech to indirect speech.', answerTextEn:'(1) The geese and chickens made clucking sounds.\n(2) Father burned some books and documents.\n(3) Xiaohong said that the school organized an outing that afternoon and she had to go.', explainEn:'Keep subject-verb-object when shortening; swap subject/object for 把 sentences; change pronouns for indirect speech.', examPointEn:'Sentence Reduction & Transformation'},
  '14': {stemEn:'Write the poem "Mooring at Guazhou" from memory.', answerTextEn:'The Yangtze separates Jingkou and Guazhou, / Only a few mountains between Zhongshan. / Spring breeze has greened the south bank again, / When will the bright moon light my way home?', explainEn:'Don\'t confuse 洲 (continent) with 州 (prefecture).', examPointEn:'Poetry Writing from Memory'},
  '15': {stemEn:'Fill in the missing lines from classical poems about the Long March, Jiangnan Spring, Cold Food Festival, and Seeing Off Yuan Er.', answerTextEn:'The Red Army fears not the trials of the Long March; Thousands of rivers and mountains are nothing; Orioles sing among red blossoms for a thousand li; How many towers in the misty rain; Spring flowers fly everywhere in the capital; At dusk palace candles are passed; I urge you to drink one more cup of wine; West of Yangguan there are no old friends.', examPointEn:'Poetry Writing from Memory'},
  '16': {stemEn:'Fill in the blanks from "Two Children Debate the Sun" (classical text).', answerTextEn:'When the sun first rises it is close to people; The sun at first is far away', explainEn:'Don\'t confuse 远 (far) with 运 (transport).', examPointEn:'Text Content Comprehension'},
  '17': {stemEn:'The Chinese people united to fight COVID-19 and achieved a phased victory. Share your thoughts based on what you\'ve seen and heard.', answerTextEn:'In the face of the pandemic, medical workers shuttled between life and death, saving lives with their youth. In the face of disaster, they marched forward fearlessly — true heroes of our time.', explainEn:'Combine personal observations with admiration for frontline heroes.', examPointEn:'Language Expression'},
  '18': {stemEn:'Match literary characters to their works, then evaluate one character.', answerTextEn:'Robinson Crusoe from "Robinson Crusoe" is a resilient, optimistic person.', explainEn:'Tests knowledge of extracurricular reading.', examPointEn:'Literary & Cultural Knowledge'},
  '19': {stemEn:'Read the excerpt from "Spring Festival in Beijing" and answer questions.', contextEn:'When Yuanxiao (glutinous rice balls) appear in shops, another climax of Spring Festival arrives...'},
  '19.0': {stemEn:'Choose the correct pronunciation.', answerTextEn:'bànr; dí', examPointEn:'Pronunciation'},
  '19.1': {stemEn:'Find synonyms and antonyms.\nSynonyms: bustling→___ exactly→___\nAntonyms: elegant→___ low tide→___', answerTextEn:'bustling; exactly right; vulgar; climax', examPointEn:'Synonyms & Antonyms'},
  '19.2': {stemEn:'Explain "悬灯结彩" and "独出心裁" in context.', answerTextEn:'悬灯结彩: Hanging lanterns and colorful decorations, depicting festive celebrations. 独出心裁: Original creativity — here referring to unique ice lantern designs.', examPointEn:'Word Comprehension'},
  '19.3': {stemEn:'The author uses "一律""清一色""通通" — what single word can replace all three?', answerTextEn:'all/entirely', examPointEn:'Synonyms'},
  '19.4': {stemEn:'In the Lantern Festival passage, ___ is described in detail; ___ and eating Yuanxiao are brief.', answerTextEn:'lantern displays; setting off fireworks', examPointEn:'Writing Technique (Detail vs. Summary)'},
  '19.5': {stemEn:'Briefly describe how you celebrate the Lantern Festival.', answerTextEn:'Every Lantern Festival, we buy various flavored Yuanxiao, go to the square for lantern riddles, and admire different lanterns.', examPointEn:'Language Expression'},
  '20': {stemEn:'Read the essay (by Mo Yan, about his mother) and answer questions.', contextEn:'I am my mother\'s youngest child...'},
  '20.0': {stemEn:'Give the passage a suitable title.', answerTextEn:'Mother', examPointEn:'Title Creation'},
  '20.1': {stemEn:'Find words matching: ①panic/fury ②extremely frightened ③respectful ④strut away arrogantly', answerTextEn:'气急败坏 (flustered with anger); 心惊胆战 (terrified); 敬重 (respect); 扬长而去 (swagger away)', examPointEn:'Vocabulary Comprehension'},
  '20.2': {stemEn:'Summarize paragraphs ④ and ⑤ briefly.', answerTextEn:'④Mother gave her dumplings to a begging old man, teaching respect for the elderly.\n⑤I overcharged a cabbage buyer by one dime, and mother said I made her lose face.', examPointEn:'Passage Summarization'},
  '20.3': {stemEn:'Explain the deeper meaning of three sentences.', answerTextEn:'①Teaching forgiveness — the old man is no longer the same person. ②Overcharging one dime reflects on character — greed and lack of empathy. ③Worried about mother\'s health/safety.', examPointEn:'Inferential Reading'},
  '20.4': {stemEn:'What kind of mother is portrayed in this passage?', answerTextEn:'A tolerant, kind, upright, and strong mother.', examPointEn:'Character Analysis'},
  '21': {stemEn:'Choose one topic:\n(1) Write a science fiction story using your imagination.\n(2) Write about "Unforgettable Primary School Life."', examPointEn:'Narrative & Imaginative Writing'}
},
zt2021: {
  '1': {stemEn:'Dictation. Write the characters correctly and neatly.', answerTextEn:'deep thought; towering; ferocious; express oneself; outline', examPointEn:'Word Form'},
  '2': {stemEn:'Write words from pinyin in context.\nThe Chinese Dream instantly ignited the long-dormant aspirations...grand goals...living contentedly.', answerTextEn:'ignite; long dormant; grand; leisurely', explainEn:'Note: 燃 has complex strokes; 宏 differs from 洪.', examPointEn:'Pinyin & Character Form'},
  '3': {stemEn:'Which group of characters has a different first stroke?', optionsEn:['匕鸟饺长','未丙女焉','予了圣登','藏专援域'], explainEn:'In group B, 女 starts with a left-falling dot; the others start with a horizontal stroke.', examPointEn:'Stroke Order'},
  '4': {stemEn:'Select the item where pronunciation, form, AND meaning are all correct.', optionsEn:['brew tea(qī) 独出心栽 die for a cause(place)','choke(gěn) wade through 过犹不及(catch up)','rugged(guǎng) feel ashamed 回眸一笑(head)','born(dàn) straightforward 终年不败(wither)'], explainEn:'A: 栽→裁; B: 哽 is gěng; C: 眸 means eye, not head. D is all correct.', examPointEn:'Pinyin, Form & Meaning'},
  '5': {stemEn:'Select the group with entirely correct word collocations.', optionsEn:['a date/a door/two cattle/a scarf','charge at enemy/provide resources/serve country/cherish time','nourish life/create miracles/stranded on island/increase burden','winding river/glistening tears/severe test/fierce quarrel'], explainEn:'A: 一张围巾→一条; B: 顾惜→珍惜; D: 剧烈→激烈.', examPointEn:'Word Collocation'},
  '6': {stemEn:'Rewrite sentences as required: (1) Imitation writing (2) Personification dialogue (3) Fix faulty sentence', answerTextEn:'(1) Let the flowers of our motherland bloom toward the sun.\n(2) Tianwen-1: Hello friend, pleased to meet you! Mars: Welcome!\n(3) Change "揭牌" (unveil) to "开幕" (open ceremony).', examPointEn:'Imitation, Personification & Error Correction'},
  '7': {stemEn:'Fill in classical poem lines based on context.\n(1) "A Garden Visit" — spring cannot be contained\n(2) "Gazing at the Moon on the 15th" — missing someone\n(3) Su Shi "Huanxisha" — aging wisely\n(4) "The Beauty of Four Seasons" — evening atmosphere', answerTextEn:'Spring fills the garden and cannot be confined; A red apricot branch extends beyond the wall; Tonight the bright moon is watched by all; Who knows whose autumn longing falls; The stream before the gate can still flow west; Don\'t sing of white hair to mock old age; Dusk descends; Even more delightful and refreshing', examPointEn:'Poetry Writing from Memory'},
  '8': {stemEn:'Match calligraphy works with calligraphers and script styles.', answerTextEn:'Wen Zhengming — semi-cursive; Zhiyong — regular script; Huaisu — cursive script', explainEn:'Wen Zhengming excelled at semi-cursive; Zhiyong created the "Eight Principles of Yong" for regular script; Huaisu was the "Sage of Cursive."', examPointEn:'Calligraphy Knowledge'},
  '9': {stemEn:'(1) The girl\'s name is ___.\n(2) Best response to the teacher: A or B?', answerTextEn:'Fang Yue; A', explainEn:'Extract the name from the comic. Option A is more polite and appropriate.', examPointEn:'Information Extraction & Oral Communication'},
  '10': {stemEn:'Classical Chinese reading: "The Young Master of the Yang Family"', contextEn:'A nine-year-old Yang boy was very clever. When Kong Junping visited and pointed at yangmei fruit saying "This is your family\'s fruit," the boy replied: "I\'ve never heard that peacocks belong to your family."'},
  '10.0': {stemEn:'Which phrase should fill the blank?', optionsEn:['未闻孔雀是君子家禽','未闻孔雀是夫子家禽'], examPointEn:'Classical Chinese Comprehension'},
  '10.1': {stemEn:'Fill in appropriate punctuation marks.', answerTextEn:'comma, comma, period, comma', examPointEn:'Punctuation'},
  '10.2': {stemEn:'Explain: ①乃 ②示 ③此是君家果', answerTextEn:'①then/so ②show ③This is your family\'s fruit', examPointEn:'Classical Chinese Vocabulary'},
  '10.3': {stemEn:'Why is the boy\'s reply clever? (Multiple choice)', optionsEn:['Used the surname to make a witty retort','Directly pointed out Kong\'s error','Noted that Kong\'s surname matches "peacock"','Denied Kong\'s claim while respecting an elder'], examPointEn:'Reading Comprehension'},
  '10.4': {stemEn:'How would Kong Junping react? Describe his actions, expression, and thoughts.', answerTextEn:'Kong was startled and thought: This child is quick-witted and eloquent! He laughed heartily and gave a thumbs up.', examPointEn:'Creative Writing'},
  '11': {stemEn:'Non-fiction reading: "How Far Is \'Nature Deficit Disorder\' from You?"', contextEn:'Materials 1-4: About children\'s "Nature Deficit Disorder."'},
  '11.0': {stemEn:'What does "Nature Deficit Disorder" refer to?', answerTextEn:'A range of behavioral and psychological problems caused by children spending too little time in nature.', examPointEn:'Reading Comprehension'},
  '11.1': {stemEn:'What expository method does Material 2 mainly use? What does it illustrate?', answerTextEn:'Using statistics; it shows that when children rely on "ready-made" content, their creativity is severely diminished.', examPointEn:'Expository Methods'},
  '11.2': {stemEn:'What does "成品" (ready-made products) mean in context?', optionsEn:['Manufactured products','Others\' labor results','Ready-made conclusions online','Knowledge from observing nature'], examPointEn:'Contextual Vocabulary'},
  '11.3': {stemEn:'Why can\'t the two instances of "可能" (possibly) be removed?', answerTextEn:'Because lack of nature exposure is a possible factor, not a definite cause. Removing "possibly" would make it absolute, violating the precision of expository writing.', examPointEn:'Language Precision'},
  '11.4': {stemEn:'What is the main purpose of these materials?', optionsEn:['Tell children to avoid electronics','Call for society to address Nature Deficit Disorder','Tell parents that staying indoors is spreading','Tell us how far away we are'], examPointEn:'Main Idea'},
  '11.5': {stemEn:'① Do you agree Mr. Wei should take his son to the hospital? ② Give at least two suggestions.', answerTextEn:'①Disagree. Nature Deficit Disorder isn\'t a medical condition but a psychological issue.\n②Ensure 1+ hours of outdoor activity daily; reduce screen time; visit parks and natural areas on holidays.', examPointEn:'Critical Thinking & Advice'},
  '12': {stemEn:'Fiction reading: Excerpt from "Straw House" (Cao Wenxuan) — about Tuhe (Lu He) performing in a school play.', contextEn:'The story of a bald boy who brilliantly plays a bald villain in the school play...'},
  '12.0': {stemEn:'What does "绝" (superb) mean in "Tuhe played the role superbly"?', answerTextEn:'Brilliantly, vividly — brought to life', examPointEn:'Vocabulary in Context'},
  '12.1': {stemEn:'Place two sentences in the correct positions (choose by number).', answerTextEn:'Position A gets b; Position B gets a', examPointEn:'Text Organization'},
  '12.2': {stemEn:'What technique does Passage [A] use? What details appear in Passage [B]?', answerTextEn:'Contrast; facial expression, actions, dialogue', examPointEn:'Literary Technique'},
  '12.3': {stemEn:'Which understanding is inaccurate?', optionsEn:['Opening sets stage for Luhe\'s appearance','Success proves Luhe has natural talent','Crying expresses excitement and joy','Reflects Cao Wenxuan\'s writing style'], examPointEn:'Reading Comprehension'},
  '12.4': {stemEn:'"Tuhe listened quietly, saying nothing." What was he thinking?', answerTextEn:'The role requires a bald head — I\'m the best fit in the whole school. I should contribute to our school\'s honor.', examPointEn:'Character Psychology'},
  '12.5': {stemEn:'Why did Tuhe cry after the successful performance?', answerTextEn:'He understood how to earn others\' respect through his own efforts, winning glory for the school. He cried tears of joy.', examPointEn:'Emotional Understanding'},
  '12.6': {stemEn:'Who is "the most handsome young man in the world"? What emotion does the author convey?', answerTextEn:'Lu He (Tuhe); admiration and praise', examPointEn:'Author\'s Attitude'},
  '12.7': {stemEn:'If you were Luhe at the award ceremony, what would you say?', answerTextEn:'Classmates, adversity builds character. We must not fall because of setbacks — be brave, be yourself, be better.', examPointEn:'Creative Expression'},
  '13': {stemEn:'(1) How would you invite Yuan Yuan, who dislikes sports, to exercise?\n(2) How would you propose sports-class suggestions to the principal?', answerTextEn:'(1) Yuan Yuan, moderate exercise relaxes the brain, strengthens the body, and improves study efficiency.\n(2) Principal, I suggest weekly PE classes not be replaced; organize fun sports events regularly to inspire enthusiasm.', examPointEn:'Oral Communication'},
  '14': {stemEn:'Choose one topic:\n(1) "Hometown of the Future" — imaginative essay\n(2) "A Different Classroom in Life" — narrative essay\nRequirements: specific content, genuine emotions, ~400 words.', examPointEn:'Imaginative/Narrative Writing'},
  '15': {stemEn:'Handwriting score. Neat, standard, beautiful writing required.', examPointEn:'Handwriting & Neatness'}
},
dq2021: {
  '1': {stemEn:'Copy "斯是陋室 惟吾德馨" (This humble room is ennobled by my virtue) neatly.', answerTextEn:'斯是陋室 惟吾德馨', examPointEn:'Handwriting Standards'},
  '2': {stemEn:'Write words from pinyin in context.\nThe Langya Mountain heroes\' resolute words...heroic sacrifice...solemn declaration...', answerTextEn:'resolute and decisive; sacrifice; declare; boiling; bright; perceive through subtlety', examPointEn:'Writing Words from Pinyin'},
  '3': {stemEn:'Select the group where pronunciation AND character form are both correct.', optionsEn:['stay up(áo) harmony(hè) 狡辨→辩 burst out laughing','mountain range(mài) extra(fèn) 教悔→诲 streamlined troops','hateful(wù) overturn(qīng) paste 技高一筹','Mongolia(mǒng) threaten(hè) immature wholeheartedly'], explainEn:'A: 狡辨→狡辩; B: 教悔→教诲; D: 蒙古 should be měng. C is correct.', examPointEn:'Pronunciation & Character Form'},
  '4': {stemEn:'Replace underlined words with synonyms without changing meaning: 惊异→___ 一切→___', answerTextEn:'astonished→surprised; everything→all', examPointEn:'Synonyms'},
  '5': {stemEn:'Select the group with an incorrect word explanation.', optionsEn:['何当金络脑(when, will)','当春乃发生(sprout, grow)','三军过后尽开颜(Red Army forces)','熟为汝多知乎(knowledge)'], explainEn:'"知" here is interchangeable with "智" (wisdom), not "knowledge."', examPointEn:'Word Comprehension'},
  '6': {stemEn:'Fill the correct set of words: With ___ scientific attitude, ___ organization, ___ requirements, and ___ discipline...', optionsEn:['strict/rigorous/clear/careful','careful/strict/rigorous/clear','rigorous/clear/careful/strict','clear/careful/strict/rigorous'], examPointEn:'Word Collocation'},
  '7': {stemEn:'Which expository methods does this passage about Earth use?', optionsEn:['statistics, comparison, analogy','statistics, comparison, metaphor','definition, comparison, analogy','statistics, analogy, metaphor'], examPointEn:'Expository Methods'},
  '8': {stemEn:'Complete idioms and categorize them by topic (character qualities, expressions, music, painting).', answerTextEn:'曼/苟/丧/睛/汤/钟/俱/栩; Qualities:②⑤ Expression:③⑦ Music:①⑥ Painting:④⑧', examPointEn:'Idiom Accumulation'},
  '9': {stemEn:'Transform sentences: (1)Shorten (2)Write a personification sentence (3)Change to indirect speech (4)Change to double-negative', answerTextEn:'(1) His mind has things.\n(2) The diligent birds have started singing on the branches.\n(3) Beethoven told the blind girl he would play another piece for her.\n(4) Young Pioneers must not fail to be civilized and polite.', examPointEn:'Sentence Pattern Transformation'},
  '10': {stemEn:'Fill in classical poem/quote lines for: (1)heroic integrity (2)encouraging study (3)filial piety (4)expressing homesickness', answerTextEn:'(1) Though bones be ground to powder, I have no fear; I want to leave my pure innocence in the world.\n(2) If you don\'t work hard when young, you\'ll regret it when old.\n(3) A tree would rest but the wind never ceases; a child would care for parents but they may not wait.\n(4) Alone as a stranger in a foreign land, I miss my family more at every festival.', examPointEn:'Classical Poetry Accumulation'},
  '11': {stemEn:'China\'s first poetry collection is "___"; Besides Journey to the West and Water Margin, name two more of the Four Classics; name a work by Tolstoy.', answerTextEn:'Book of Songs; Dream of the Red Chamber; Romance of the Three Kingdoms; War and Peace', examPointEn:'Literary Knowledge'},
  '12': {stemEn:'Role-play: describe the scene of exchanging ill-fitting shoes at a store.', answerTextEn:'Hello ma\'am, my mom bought shoes here — here\'s the receipt. They\'re one size too small, could you please exchange them for a larger pair?...', examPointEn:'Oral Communication'},
  '13': {stemEn:'Read an excerpt from "Spring Festival in Beijing" and answer questions.', contextEn:'Following old Beijing customs, Spring Festival preparations begin around early December...'},
  '13.0': {stemEn:'Add punctuation to the passage.', examPointEn:'Punctuation'},
  '13.1': {stemEn:'Fill in connective words and create a sentence using them.', answerTextEn:'not...but rather...; This book is not Xiao Ming\'s but Xiao Hong\'s.', examPointEn:'Connective Words'},
  '13.2': {stemEn:'The author is ___; the passage describes Laba ___ customs.', answerTextEn:'Lao She; making Laba porridge, soaking Laba garlic', examPointEn:'Text Content Comprehension'},
  '13.3': {stemEn:'What does "a small agricultural product exhibition" refer to? What does it illustrate?', answerTextEn:'The many varieties of rice, beans, and dried fruits in Laba porridge; it shows the extreme richness of ingredients.', examPointEn:'Reading Comprehension'},
  '13.4': {stemEn:'Name one traditional festival besides Spring Festival and its customs.', answerTextEn:'Dragon Boat Festival: eating zongzi (rice dumplings), racing dragon boats.', examPointEn:'Cultural Knowledge'},
  '14': {stemEn:'Classical Chinese reading: "Han E\'s Beautiful Singing"', contextEn:'Long ago, Han E traveled east to Qi. Running out of food, she sang for her living at the Yong Gate. After she left, her lingering melody echoed around the beams for three days without stopping.'},
  '14.0': {stemEn:'Which word explanation is incorrect?', optionsEn:['既: already','去: leave','过: pass through','余: surplus/leftover'], explainEn:'"余" means "remaining/lingering," not "surplus."', examPointEn:'Classical Chinese Vocabulary'},
  '14.1': {stemEn:'What does "善" mean?', answerTextEn:'skilled at, good at', examPointEn:'Classical Chinese Vocabulary'},
  '14.2': {stemEn:'Identify the sentence describing the sequence of events.', answerTextEn:'She passed through Yong Gate, sang for food. After she left, the lingering melody echoed around the beams for three days.', examPointEn:'Narrative Structure'},
  '14.3': {stemEn:'Find an idiom from the text.', answerTextEn:'余音绕梁 (lingering melody echoing around the beams)', examPointEn:'Idiom Recognition'},
  '15': {stemEn:'Modern prose reading: The story of Zhu Kezhen\'s love of science.', contextEn:'Zhu Kezhen loved science... he listened to farmers discuss weather...'},
  '15.0': {stemEn:'Write antonyms: substantial→___ clear→___', answerTextEn:'empty; vague', examPointEn:'Antonyms'},
  '15.1': {stemEn:'Explain "心胸豁亮" (broad-minded).', answerTextEn:'Open-minded and bright in disposition.', examPointEn:'Vocabulary in Context'},
  '15.2': {stemEn:'Add pinyin to characters: 觉___ 行___ 晕___ 兴___', answerTextEn:'jué háng yùn xìng', examPointEn:'Polyphonic Characters'},
  '15.3': {stemEn:'Write two weather proverbs.', answerTextEn:'Long sunny days with heavy fog means rain; long rainy days with heavy fog means clearing.', examPointEn:'Cultural Knowledge'},
  '15.4': {stemEn:'What kind of person was Zhu Kezhen?', answerTextEn:'Diligent, curious, with a strong desire for knowledge and great dedication to research.', examPointEn:'Character Analysis'},
  '16': {stemEn:'Childhood is like a colorful dream. Write about a real childhood experience. Choose your own title.', examPointEn:'Narrative Composition'},
  '17': {stemEn:'Write about "My ___" — a character description essay, at least 400 words.', examPointEn:'Character Description Writing'}
},
yn2018: {
  '1': {stemEn:'Cross out the incorrect pronunciation for each word.\nsuddenly(hū/tū) silk headband(lún/guān) adulterate(chān/cān) thin(bó/báo)...', answerTextEn:'Cross out: tū, lún, cān, báo, jiā, huá, bài, xià', examPointEn:'Phonetic Discrimination'},
  '2': {stemEn:'Choose the correct similar-looking or homophone character:\nnot afraid of ___ing (ridicule), ___ly accepted the task', answerTextEn:'嘲 (ridicule); 毅 (resolute)', examPointEn:'Similar Characters'},
  '3': {stemEn:'Fill in the correct connective words.', optionsEn:['Although...but...also','Although...also...but','Even if...also...but','Since...then...but'], examPointEn:'Connective Words'},
  '4': {stemEn:'Identify the function of quotation marks (A=specific name, B=direct quote, C=sarcasm).', answerTextEn:'B A C A', examPointEn:'Function of Quotation Marks'},
  '5': {stemEn:'Complete words using reduplicated characters: 凉风____ 忧心____ 气势____ 小心____', answerTextEn:'瑟瑟 忡忡 汹汹 翼翼 源源 栩栩 滔滔 愤愤', examPointEn:'Reduplicated-Character Words'},
  '6': {stemEn:'Choose the correct flower names for poem lines about pear blossoms, apricot flowers, sunflowers, and peach blossoms.', optionsEn:['peach/apricot/pear/sunflower','pear/apricot/sunflower/peach','pear/peach/apricot/sunflower','apricot/peach/sunflower/pear'], examPointEn:'Classical Poetry Knowledge'},
  '7': {stemEn:'Fill in proverbs about unity and teamwork.', answerTextEn:'(1)flames rise high (2)a dragon / Mount Tai (3)The collective / wisdom (4)many hands can move mountains (5)one hand cannot clap alone', examPointEn:'Proverbs'},
  '8': {stemEn:'Fix faulty sentences:\n①"Chengdu\'s spring is a city of blooming flowers" — subject mismatch\n②"Whether or not" creates logical inconsistency\n③Wrong word order with "recently unearthed...2000 years ago"', answerTextEn:'①Chengdu is a city of blooming flowers.\n②Cherishing time is the key to success.\n③The exhibit showed precious artifacts from over 2000 years ago.', examPointEn:'Correcting Faulty Sentences', explainEn:'①Remove "的春天" to fix subject; ②Remove "能否" for logical consistency; ③Reorder "新近出土的" and "两千多年前的".'},
  '9': {stemEn:'Use editing marks to correct errors in a paragraph: 署→暑, 加入→参加, 坐→做, 丰满→丰富, 而且→又', answerTextEn:'暑假 (summer vacation), 参加 (participate), 做 (do), 丰富 (rich), 又 (and)', examPointEn:'Editing Paragraphs', explainEn:'Correct character errors and word choices for proper expression.'},
  '10': {stemEn:'Classical poetry: Complete "Autumn Thoughts" by Ma Zhiyuan and related poems.', contextEn:'Withered vines, old trees, crows at dusk...'},
  '10.fill': {stemEn:'Fill in the missing words.', answerTextEn:'crows at dusk; small bridge; west wind & thin horse; heartbroken traveler', examPointEn:'Poetry Completion'},
  '10.0': {stemEn:'Title: "___"; Author: ___; Called the "___" by later generations.', answerTextEn:'Tianjingsha·Autumn Thoughts; Ma Zhiyuan; Ancestor of Autumn Melancholy', examPointEn:'Poetry Knowledge'},
  '10.1': {stemEn:'Which line is the theme of the entire piece?', optionsEn:['Withered vines, old trees, crows at dusk','Small bridge, flowing water, homes','Ancient road, west wind, thin horse','Sunset, the heartbroken one at the horizon'], examPointEn:'Theme Identification'},
  '10.2': {stemEn:'Complete homesickness poems by Wang Wei and He Zhizhang.', answerTextEn:'You must know the things of my hometown; Has the winter plum blossomed by the window yet; My accent unchanged but my hair has grayed; Children see me but don\'t recognize me, smiling they ask where the guest comes from', examPointEn:'Poetry Completion'},
  '11': {stemEn:'Read excerpts from Bing Xin\'s "Just Follow Where Children Are."', contextEn:'Returning from Fragrant Hills, passing the Summer Palace... thousands of children poured out of the gates...'},
  '11.0': {stemEn:'This is from the text "___" by author ___.', answerTextEn:'"Just Follow Where Children Are"; Bing Xin', examPointEn:'Text Attribution'},
  '11.1': {stemEn:'Underline words showing there are many children and the author\'s associations.', answerTextEn:'Many children: thousands upon thousands; Association: the gates were like a giant magic box...releasing groups of little angels.', examPointEn:'Detail Identification'},
  '11.2': {stemEn:'The author uses ___ to metaphorize ___, expressing ___.', answerTextEn:'little angels; children; love for children', examPointEn:'Metaphor Analysis'},
  '11.3': {stemEn:'Explain: "Visitors don\'t know where spring is; just follow where children gather."', answerTextEn:'Visitors don\'t know where to find spring, but wherever many children play, there spring can be found.', examPointEn:'Sentence Interpretation'},
  '11.4': {stemEn:'The quotation marks in this excerpt indicate ___.', answerTextEn:'quotation (direct reference)', examPointEn:'Punctuation Function'},
  '12': {stemEn:'Read an excerpt about the Lantern Festival from "Spring Festival in Beijing."', contextEn:'When Yuanxiao appears, another festival climax arrives. On the fifteenth, lanterns are hung everywhere...'},
  '12.0': {stemEn:'Choose correct pronunciations: 正月(zhēng/zhèng) 张灯结彩(jiē/jié) 老铺子(pù/pū) 水浒传(zhuàn/chuán)', answerTextEn:'zhēng jié pù zhuàn', examPointEn:'Pronunciation'},
  '12.1': {stemEn:'Complete the words: ()灯()彩 ()形()色', answerTextEn:'张 结 各 各', examPointEn:'Word Completion'},
  '12.2': {stemEn:'Find words meaning "all/entirely."', answerTextEn:'一律, 清一色, 通通', examPointEn:'Synonym Recognition'},
  '12.3': {stemEn:'Add appropriate punctuation to the passage.', answerTextEn:'，，，，，《》《》。', examPointEn:'Punctuation'},
  '12.4': {stemEn:'Which is NOT one of the three climaxes of Spring Festival?', optionsEn:['New Year\'s Eve dinner & staying up','New Year visits & temple fairs','New clothes & firecrackers on Day 1','Lantern viewing & fireworks on the 15th'], examPointEn:'Reading Comprehension'},
  '13': {stemEn:'Title: "The Most Beautiful ___" — complete the title and write a composition expressing genuine emotions, 400+ words.', examPointEn:'Semi-titled Composition'}
},
km2018: {
  '1': {stemEn:'Write words from pinyin: bumpy road / reading by candlelight / three to five years / world-renowned', answerTextEn:'颠簸 (bumpy); 秉烛夜游 (candlelight tour); 三年五载 (a few years); 举世瞩目 (world-renowned)', examPointEn:'Writing Words from Pinyin'},
  '2': {stemEn:'Select the sentence with incorrect punctuation.', optionsEn:['A song "Beauty of Taihu"...','Peng Dehuai slowly removed his cap...','Father didn\'t back down: "Aren\'t there enough bad poems?"','Rat-tat-tat... dense bullets poured onto Lugou Bridge.'], examPointEn:'Punctuation'},
  '3': {stemEn:'The underlined characters are wrong; write the corrections: limp→簸 complete→竣 admire→慕 secret→秘 wax→腊 trek→跋 distant→飘 measure→测', answerTextEn:'簸 竣 慕 秘 腊 跋 飘 测', examPointEn:'Correcting Wrong Characters'},
  '4': {stemEn:'Choose the right word (hide/conceal, guard/protect, hope/yearn):\n(1)I looked forward to New Year daily (2)We yearned for a beautiful textbook (3)The hedgehog hid for hibernation (4)Guarding the flag is our duty', answerTextEn:'hope; yearn; hide; guard', examPointEn:'Word Selection'},
  '5': {stemEn:'Fill in appropriate proverbs.\nA. Study must be persistent, never ___\nB. He knew the emperor was suspicious, as the saying goes ___\nC. They didn\'t name you specifically, explaining yourself would be ___', answerTextEn:'fish three days, dry nets two days; accompanying the emperor is like accompanying a tiger; 300 taels of silver buried here (i.e. a dead giveaway)', examPointEn:'Proverb Application'},
  '6': {stemEn:'Change one character in each word to form an idiom:\n(1)杭→航 (2)复咕→吟 (3)改洛→硌 (4)记→认', answerTextEn:'木已成舟 (done deal); 古为今用 (apply the old to the new); 水落石出 (truth revealed); 舍己为人 (sacrifice self for others)', examPointEn:'Character Swap Idioms'},
  '7': {stemEn:'Select the sentence WITHOUT a grammatical error.', optionsEn:['Baotu Spring is one of Jinan\'s three famous sites.','Andersen\'s author is "The Little Match Girl."','The girls danced a "lovely" dance.','The ground made the sun glow red.'], examPointEn:'Identifying Faulty Sentences'},
  '8': {stemEn:'Choose the correct set of connective words.', optionsEn:['As long as...not only...but also','Because...then...so','Only if...then...so','Because...so...and also'], examPointEn:'Connective Words'},
  '9': {stemEn:'(1)Expand sentence (2)Shorten sentence (3)Change rhetorical question to statement', answerTextEn:'(1) With rapid economic development, our city has undergone tremendous changes.\n(2) Lights illuminated the buildings.\n(3) Teachers love students just like mothers love children.', examPointEn:'Sentence Pattern Transformation'},
  '10': {stemEn:'A says 50g is light; B says 12-13 meters is far. Change one character to reverse the meaning.', answerTextEn:'(1)light (2)far (3)"只有"→"竟有"; "就能"→"才能"', examPointEn:'Numerical Meaning'},
  '11': {stemEn:'Complete "Spring Night Rain" poem and answer questions.', contextEn:'Good rain knows its season, when spring comes it falls...'},
  '11.fill': {stemEn:'Fill in missing poem lines.', answerTextEn:'When spring arrives it falls; Sneaking in with the wind at night; Wild paths dark with clouds; Flowers heavy on Brocade City', examPointEn:'Poetry Completion'},
  '11.0': {stemEn:'Seven-character ___, by Tang Dynasty poet ___. Written with great ___ to praise ___.', answerTextEn:'quatrain; Du Fu; joy; spring rain', examPointEn:'Poetry Knowledge'},
  '11.1': {stemEn:'"发生" in the dictionary: A=happen B=sprout C=appear. In "当春乃发生" choose ___.', answerTextEn:'B', examPointEn:'Word in Context'},
  '11.2': {stemEn:'Why does the poet praise the spring rain?', optionsEn:['Good rain knows its season, falls in spring','Sneaks in silently, nourishing all things','Wild paths are dark, only boat lantern shines','Morning reveals wet red, flowers heavy in Brocade City'], examPointEn:'Poetry Comprehension'},
  '12': {stemEn:'Read "Respecting the Humble" — about ants forming a ball to escape fire.', contextEn:'When facing disaster, ants cling together in a black ball and roll away from fire...'},
  '12.0': {stemEn:'Choose correct words (feeble/humble/thin); fill connective words: The truly great is often not ___ but ___.', answerTextEn:'feeble; humble; thin; not...but rather...', examPointEn:'Word Selection & Connectives'},
  '12.1': {stemEn:'Choose synonyms: occasionally / especially / pioneer / decision', answerTextEn:'occasionally; especially; pioneer; decision', examPointEn:'Synonym Selection'},
  '12.2': {stemEn:'(1) "A tiny needle" metaphorizes ___. (2) "A thousand-li levee collapses from ant holes" illustrates ___.', answerTextEn:'the ant\'s spirit; small problems can cause big disasters; the ant\'s strength and greatness', examPointEn:'Metaphor & Proverb Analysis'},
  '13': {stemEn:'Read "The Traveler\'s Tree" — a tree in Africa that provides water to desert travelers.', contextEn:'In Burundi, Africa, two green trees stand before a door... like unfolded feather fans...'},
  '13.0': {stemEn:'Most suitable title for the passage.', optionsEn:['Two Big Trees','The Traveler\'s Tree','A Tree with Character'], examPointEn:'Title Selection'},
  '13.1': {stemEn:'Write words from pinyin: upright / hard / architecture / bright', answerTextEn:'挺拔 坚硬 建筑 明媚', examPointEn:'Writing Words from Pinyin'},
  '13.2': {stemEn:'Check pronunciation correctness: roast(zhì kǎo)___ trek(bá shè)___ town(bǎ)___', answerTextEn:'√ √ ×', examPointEn:'Pronunciation Verification'},
  '13.3': {stemEn:'How many typos in "I raised my head to look up at the traveler\'s tree, unceasing admiration"?', optionsEn:['3: 台→抬, 束→肃, 禁→敬','4: 在→再, 台→抬, 束→肃, 禁→敬','5: 在→再, 台→抬, 尽→禁, 束→肃, 禁→敬'], examPointEn:'Error Detection'},
  '13.4': {stemEn:'Which is the simile?', optionsEn:['Like an unfolded feather fan, or a peacock spreading its tail','Against yellow sand it appears even greener','Better to transplant the tree\'s character into one\'s own heart'], examPointEn:'Rhetorical Device Identification'},
  '13.5': {stemEn:'Which sentence explains where the tree got its name?', optionsEn:['Found growing in vast sandy deserts too','Thirsty travelers... cut a slit and fragrant juice flows out... it is the desert traveler\'s friend','It was born in barren, desolate land'], examPointEn:'Information Extraction'},
  '14': {stemEn:'Rewrite the classical text "Two Children Debate the Sun" as a vivid, detailed story. Create your own title, 400+ words.', examPointEn:'Rewriting Composition'}
},
yn2019: {
  '1': {stemEn:'Neatly copy "博观而约取，厚积而薄发" (Read broadly, extract selectively; accumulate richly, express concisely) onto the grid.', answerTextEn:'博观而约取，厚积而薄发。', examPointEn:'Handwriting Standards'},
  '2': {stemEn:'Select the group where all pinyin annotations are correct.', optionsEn:['A. plastic(shù) annihilate(jiān) serve(shì) tree crown(guàn)','B. bamboo hat(nuó) report(bǐn) contain(yùn) fade(tuì)','C. carve(zhuó) brand(luó) longing(tòng) cleanse(dí)','D. glance back(mòu) connotation(hán) blazing(chì) generous(kǎi)'], explainEn:'A: 塑 should be sù; B: 箬 should be ruò, 禀 should be bǐng; C: 烙 should be lào, 憧 should be chōng. D is correct.', examPointEn:'Phonetic Discrimination'},
  '3': {stemEn:'Choose the correct pronunciation for polyphonic characters:\n①却看妻子___(zǐ/zi) ②嫦娥是后羿的妻子___(zǐ/zi)\n③寻找这件东西___(xī/xi) ④南北东西___(xī/xi)', answerTextEn:'zǐ zi xi xī', examPointEn:'Polyphonic Characters'},
  '4': {stemEn:'Match sentences to famous people (A=Du Fu, B=Wang Wei, C=Zhu Ziqing, D=Lu Xun):\n①Thatched cottage for posterity, poetry sage for millennia ②Some bow down to serve the people ③Poetry in painting, painting in poetry ④Would rather starve than accept American relief grain', answerTextEn:'A D B C', examPointEn:'Famous Figures Knowledge'},
  '5': {stemEn:'Select the item with correct punctuation usage.', optionsEn:['A. Remember "modesty helps, pride hurts" this maxim','B. The song goes: "Beautiful Taihu, beauty in its water!"','C. Ba Jin said he loved moonlit nights, but also starry skies.','D. The zoo has elephants, lions, tigers and many other animals.'], explainEn:'A needs quotation marks around the maxim; B missing opening quote; D needs ellipsis or "etc." C is correct.', examPointEn:'Punctuation'},
  '6': {stemEn:'Select the item where the idiom is used inappropriately.', optionsEn:['A. Cangshan like a screen, Erhai like a mirror — truly 巧夺天工','B. Subtly influencing students','C. The restaurant was brightly lit and bustling','D. You\'re the only national model worker in the county — truly 凤毛麟角'], explainEn:'巧夺天工 means human craftsmanship surpassing nature — cannot describe natural scenery.', examPointEn:'Word Usage'},
  '7': {stemEn:'Arrange sentences in the correct order based on context.', optionsEn:['A. ①③②','B. ③②①','C. ②③①','D. ②①③'], examPointEn:'Sentence Ordering'},
  '8': {stemEn:'Rewrite sentences as required:\n(1) Change rhetorical question to statement\n(2) Change statement to rhetorical question\n(3) Expand sentence\n(4) Shorten sentence', answerTextEn:'(1) We cannot forget this deeper-than-ocean friendship.\n(2) How can we destroy our only Earth?\n(3) A golden full moon hangs in the deep blue sky.\n(4) Lights illuminate the buildings.', examPointEn:'Sentence Pattern Transformation'},
  '9': {stemEn:'Write a headline (max 14 characters) for this news: On March 3, Macau publicly destroyed about 1 million seized pirated discs.', answerTextEn:'Macau\'s First Official Joint Destruction of Pirated Discs', examPointEn:'News Headline Writing'},
  '10': {stemEn:'Read the passage "Autumn" and answer questions.', contextEn:'Crisp autumn arrives. Sky high, clouds light... Earth wears a yellow sweater, withered poplar leaves and crimson maple leaves dance like colorful butterflies...'},
  '10.0': {stemEn:'List color words from the text: green___, ___; yellow___, ___; red___, ___', answerTextEn:'emerald green, verdant; withered yellow, golden; crimson, rosy red', examPointEn:'Vocabulary Identification'},
  '10.1': {stemEn:'What does "yellow sweater" refer to?', answerTextEn:'Fallen leaves and withered grass covering the ground', examPointEn:'Metaphor Comprehension'},
  '10.2': {stemEn:'The passage introduces autumn from ___, ___, ___ perspectives, focusing on representative things like ___, highlighting ___, ___ characteristics.', answerTextEn:'trees, gardens, orchards; poplar, maple, pine, chrysanthemum, persimmon, apple; bountiful harvest, enchanting scenery', examPointEn:'Text Structure Analysis'},
  '11': {stemEn:'Read "A Flash of Thought That Changed a Life" and answer questions.', contextEn:'A female teacher receives a wrong-number call about a girl caught stealing a book. She goes to the bookstore pretending to be the girl\'s mother...'},
  '11.0': {stemEn:'Summarize the main content of the story briefly.', answerTextEn:'A female teacher rescued a girl who stole a book on impulse. Years later, the girl, now successful, came back to thank her.', examPointEn:'Story Summarization'},
  '11.1': {stemEn:'What does "what happened" refer to?', answerTextEn:'A little girl was caught stealing a book; too afraid to tell her family, she dialed a random number that happened to reach the teacher.', examPointEn:'Detail Comprehension'},
  '11.2': {stemEn:'What was the teacher\'s purpose in "specially reminding" the girl to come read books again?', answerTextEn:'She didn\'t want the girl to repeat such mistakes; she wanted to comfort her — a book-loving child\'s mistake can be forgiven.', examPointEn:'Inference'},
  '11.3': {stemEn:'What specifically does "as she had expected" refer to?', answerTextEn:'In the bookstore stood a tearful little girl, with an adult harshly scolding her.', examPointEn:'Detail Identification'},
  '11.4': {stemEn:'Explain the reasons behind the two "smiles" in paragraphs ⑤ and ⑧.', answerTextEn:'First smile: to ease the girl\'s fear and guilt. Second smile: gratification that her actions had changed the girl\'s life.', examPointEn:'Emotional Analysis'},
  '11.5': {stemEn:'The girl "excitedly poured out a torrent of words." Write a few sentences she might say.', answerTextEn:'Do you remember the little girl you claimed as your daughter at that bookstore years ago? I\'m her! Your kindness changed my life!', examPointEn:'Creative Expression'},
  '12': {stemEn:'Choose one topic:\n(1) Invent a fun holiday like "No Socks Day" or "Sleep Day" — explain why and what fun things to do.\n(2) Write about "___ Festival" with creativity, 350+ words.', examPointEn:'Imaginative Writing'}
},
tc2024: {
  '1': {stemEn:'Read the passage about Heshun Ancient Town and answer questions.', contextEn:'Heshun Ancient Town ranks first among "China\'s Top 10 Charming Towns"... architecture blending Chinese and Western styles...'},
  '1.0': {stemEn:'Choose the correct word for "Chinese-Western ___."', optionsEn:['A. 合壁 (wrong char)','B. 和璧 (wrong char)','C. 合璧 (correct: fusion)','D. 和壁 (wrong char)'], examPointEn:'Character Form'},
  '1.1': {stemEn:'Select the item with an incorrect pronunciation.', optionsEn:['A. alley (xiàng)','B. graceful (wǎn)','C. courtyard (yuàn)','D. Taoist temple (guān)'], explainEn:'道观 should be guàn (4th tone).', examPointEn:'Pronunciation'},
  '1.2': {stemEn:'Write synonyms: graceful→___ bright→___', answerTextEn:'reserved/subtle; clear', examPointEn:'Synonyms'},
  '1.3': {stemEn:'Write an advertising slogan for Heshun Ancient Town.', answerTextEn:'Dream of ancient charm in the overseas Chinese homeland; fall in love with Heshun\'s waterside beauty.', examPointEn:'Creative Writing'},
  '2': {stemEn:'Read the passage about Xiao Liang, a leukemia patient who persists in online classes, and answer questions.', contextEn:'Xiao Liang is a leukemia patient who insists on attending online classes...'},
  '2.0': {stemEn:'Choose the most appropriate set of connective words.', optionsEn:['A. Although...but...both...and...','B. Because...so...not only...but also...','C. Although...but...both...and...','D. Even if...still...not only...also...'], examPointEn:'Connective Words'},
  '2.1': {stemEn:'Which word has a different meaning of "症" from "症状" (symptom)?', optionsEn:['A. prescribe the right remedy','B. crux of a problem','C. incurable disease','D. illness'], examPointEn:'Word Meaning'},
  '2.2': {stemEn:'Which sentence uses the same rhetorical device (exaggeration) as "I wish this dream could come true in the blink of an eye"?', optionsEn:['A. The rising sun is as big as a chariot canopy','B. I am a gift exchanged between friends and family','C. Like a drop from a needle tip falling into the sea','D. Tears like rain'], explainEn:'Both are exaggeration (hyperbole).', examPointEn:'Rhetorical Devices'},
  '2.3': {stemEn:'Which underlined word is used inappropriately?', optionsEn:['A. Study with full concentration','B. Truly makes me feel inferior','C. Study with deliberate scheming','D. Must not skim superficially'], explainEn:'处心积虑 is derogatory (conniving), inappropriate for encouragement.', examPointEn:'Word Usage'},
  '3.0': {stemEn:'Which character has the same pronunciation of "着" as in "着陆" (landing)?', optionsEn:['A. whereabouts 着落','B. looking at 看着','C. fascinated 着迷','D. by chance 歪打正着'], examPointEn:'Polyphonic Characters'},
  '3.1': {stemEn:'Which group contains ONLY stories about diligent study?', optionsEn:['A. Reading by firefly light / Rising at cock-crow / Straw boats borrowing arrows','B. Standing at Cheng\'s door in snow / Full concentration / Brilliant strategy','C. Undivided attention / Zheng buying shoes / Handan walking','D. Head-hanging study / Forgetting meals and sleep / Never letting go of a book'], examPointEn:'Cultural Knowledge'},
  '4.0': {stemEn:'Match the couplet: "Spring breeze nurtures peach and plum trees" — choose the best second line.', optionsEn:['A. A devoted heart cultivates talent','B. Only for a garden full of spring','C. Red heart facing the sun cultivates talent','D. Nourishing silently cultivates new people'], examPointEn:'Couplet Matching'},
  '4.1': {stemEn:'Complete the classical poem lines.', answerTextEn:'The Yanshan moon resembles a hook; Light smoke drifts into the homes of five lords; Don\'t say you set out early; When young and strong don\'t work hard, you\'ll regret when old; Blue is extracted from indigo yet surpasses indigo', examPointEn:'Poetry Writing from Memory'},
  '4.2': {stemEn:'Write two four-character idioms synonymous with "笑逐颜开" (beaming with joy).', answerTextEn:'cheering with joy; in high spirits', examPointEn:'Synonym Idioms'},
  '5': {stemEn:'Yuan Longping devoted his life to national grain abundance. Which saying best describes him?', optionsEn:['A. Distance tests a horse; time reveals a heart','B. Devoted until death (Zhuge Liang\'s pledge)','C. Heaven rewards the diligent and self-reliant','D. Even the lowly dare not forget their country'], examPointEn:'Applying Famous Quotes'},
  '6': {stemEn:'Choose the most appropriate order for parallel phrases (barren desert / rudderless ship / endless dark night).', optionsEn:['A. ①③④','B. ④③②','C. ④②①','D. ①②③'], examPointEn:'Sentence Ordering'},
  '7.0': {stemEn:'Which statement about literary works is INCORRECT?', optionsEn:['A. Robinson turned the island into a micro-civilization','B. Nils became a good boy after turning into a tiny elf','C. Narrow-minded people are called Lu Su; generous people are called Zhou Yu','D. Alice can grow big or small by eating mushroom'], explainEn:'It should be reversed: narrow-minded = Zhou Yu, generous = Lu Su.', examPointEn:'Literary Knowledge'},
  '7.1': {stemEn:'Which story-book pairing is INCORRECT?', optionsEn:['A. The startled bird — "Aesop\'s Fables"','B. Subduing demons at Lion-Camel Ridge — "Journey to the West"','C. Fighting the tiger at Jingyang Ridge — "Water Margin"','D. Rescuing Friday — "Robinson Crusoe"'], explainEn:'"The startled bird" is a Chinese historical anecdote, not from Aesop.', examPointEn:'Literary Knowledge'},
  '8': {stemEn:'Write words from pinyin.', answerTextEn:'situation; cloak; terror; creative originality; vassal; stern (of boat); exercise/forge; too busy to attend to', examPointEn:'Writing Words from Pinyin'},
  '9': {stemEn:'Read "Four Seasons of Ginkgo Village" and answer questions.', contextEn:'In spring, ginkgo trees sprout new leaves... summer\'s canopy blocks the sun... autumn\'s golden butterfly-leaves dance in blue sky... winter\'s upright strength...'},
  '9.0': {stemEn:'Explain the underlined phrases: 交相辉映___ 周而复始___', answerTextEn:'mutual radiance: beautiful scenes complementing each other; cycle: repeating continuously in a loop', examPointEn:'Vocabulary in Context'},
  '9.1': {stemEn:'Which understanding is INCORRECT?', optionsEn:['A. Showcases beauty of ginkgo leaf shapes and colors','B. Aims to highlight its tourism value','C. Reflects the passage of time and cycle of life','D. The author has deep affection for Ginkgo Village'], examPointEn:'Reading Comprehension'},
  '9.2': {stemEn:'Find the transitional sentence and explain its function.', answerTextEn:'The four seasons cycle, repeating endlessly; it serves as a bridge connecting the preceding and following paragraphs.', examPointEn:'Text Structure'},
  '9.3': {stemEn:'What rhetorical device does the first paragraph use? Analyze its effect.', answerTextEn:'Simile — vividly describes the shape of new ginkgo leaves, expressing the author\'s fondness for them.', examPointEn:'Rhetorical Analysis'},
  '9.4': {stemEn:'What emotions does the author express?', answerTextEn:'Love and admiration for ginkgo trees.', examPointEn:'Emotional Analysis'},
  '9.5': {stemEn:'What scene comes to mind when reading "golden autumn butterfly-leaves dance in blue sky"?', answerTextEn:'Ginkgo leaves turning golden and falling, like a golden carpet on the ground, like beautiful butterflies dancing in the air.', examPointEn:'Imagery'},
  '10': {stemEn:'Read four materials about Chinese New Year paintings, fading traditions, new customs, and festival definitions. Answer questions.', contextEn:'Material 1: New Year paintings have 2000 years of history... Material 2: The flavor of New Year is fading... Material 3: Modern new customs... Material 4: Festival definition'},
  '10.0': {stemEn:'Judge true or false: ①New Year paintings trace back to Han Dynasty ___ ②"Acting contrarily" refers to elders giving children lucky money ___ ③"Beautiful night of 3rd & 5th" couplet is for Lantern Festival ___', answerTextEn:'√ × ×', examPointEn:'Information Verification'},
  '10.1': {stemEn:'Which summary of the materials is most appropriate?', optionsEn:['A. Material 1 mainly introduces the history of New Year paintings','B. Material 2 explains how Western culture weakened New Year traditions','C. Material 3 introduces modern people\'s new customs for New Year'], examPointEn:'Main Idea'},
  '10.2': {stemEn:'Choose a festival and write about what you\'ve read and what it reminds you of.', answerTextEn:'Lantern Festival: visiting temple fairs, admiring lanterns, guessing lantern riddles. Also known as the "Festival of Lights."', examPointEn:'Creative Expression'},
  '10.3': {stemEn:'Argue whether modern New Year needs traditional customs or new customs, with reasons.', answerTextEn:'Traditional customs: Spring couplets, ancestor worship, etc. are rich in content, full of festive flavor, carrying beautiful hopes; new customs reduce face-to-face interaction and weaken tradition.', examPointEn:'Argumentation'},
  '10.4': {stemEn:'Design a performance segment and write an introduction script.', answerTextEn:'Skit "The Origin of Dragon Boat Festival" — "On the fifth of the fifth month, it is Duanyang. Artemisia at the door fills the house with fragrance."', examPointEn:'Creative Design'},
  '11': {stemEn:'Choose one topic:\n(1) "That time, I ___" — complete the title and write an essay\n(2) "A Day During Spring Festival 2100" — imaginative essay with specific holiday scene descriptions\nRequirements: 450+ words.', examPointEn:'Semi-titled/Imaginative Writing'}
},
yn2012: {
  '1': {stemEn:'Write words from pinyin.\nReading history makes one wise, reading poetry makes one clever(cōnghuì), calculation makes one precise(jīngmíng), philosophy gives one deep(shēnkè) thoughts, logic gives one refinement(xīuyǎng), rhetoric makes one eloquent(shànbiàn).', answerTextEn:'clever; precise; profound; refined; eloquent', examPointEn:'Pinyin & Character Form'},
  '2': {stemEn:'Match paired idioms (write numbers only).\n①The Foolish Old Man Moves Mountains ②Bully using another\'s power ③Quench thirst by imagining plums ④Bitter medicine cures\n⑤Jingwei fills the sea ⑥Satisfy hunger with painted cakes ⑦Honest advice hurts the ear ⑧Fox exploits tiger\'s might', answerTextEn:'①⑤ ②⑧ ③⑥ ④⑦', examPointEn:'Idiom Comprehension'},
  '3': {stemEn:'Fill in homophones for "màn":\n___不经心 ___条斯理 ___山遍野 轻歌___舞\n火势___延 天真烂___ 临窗布___ 嘲笑___骂', answerTextEn:'careless(漫); unhurried(慢); all over(漫); graceful(曼); spread(蔓); innocent(漫); curtain(幔); mock(谩)', examPointEn:'Homophone Discrimination'},
  '4': {stemEn:'The Four Treasures of the Chinese Study are: ( )( )( )( )', answerTextEn:'brush, ink, paper, inkstone', examPointEn:'Cultural Knowledge'},
  '5': {stemEn:'Choose the correct meaning for underlined characters:\n①书诗四句 A.book B.letter C.write\n②学而不厌 A.satisfied B.hate C.weary\n③通宵达旦 A.dawn B.next day C.New Year', answerTextEn:'①C ②A ③A', examPointEn:'Classical Chinese Word Meanings'},
  '6': {stemEn:'Choose the right word to fill each blank:\nIf "Thousand-Hand Guanyin" were danced by a group of (healthy/fit) girls, the (shock/impact) would be greatly reduced. When 21 deaf girls (slowly/gradually) extend their arms on stage, we (marvel/admire) at how they dance so perfectly.', answerTextEn:'healthy; shock; slowly and gracefully; marvel', examPointEn:'Word Selection'},
  '7': {stemEn:'Select the item where the idiom is used inappropriately.', optionsEn:['A. endless stream of people (appropriate)','B. captivating (appropriate)','C. united effort (appropriate)','D. calm and collected (inappropriate for a suspect)'], explainEn:'从容不迫 is usually positive; using it for a suspect trying to hide guilt is inappropriate.', examPointEn:'Idiom Usage'},
  '8': {stemEn:'Complete sentence exercises:\n(1) Fix: "burned and looted" → correct order\n(2) Fix: double negation error\n(3) Change direct to indirect speech\n(4) Shorten sentence', answerTextEn:'(1) Change "burned and looted" to "looted and burned" (chronological order).\n(2) Remove the redundant negation.\n(3) Zhou Yu sighed and said that Zhuge Liang was brilliant and he was truly no match.\n(4) He hauled the bass ashore.', examPointEn:'Sentence Correction/Transformation'},
  '9': {stemEn:'Write two short commentaries on "Candle" from different angles.\nExample for Eraser: ①Sacrifices itself to help others correct mistakes. ②Fixates on others\' mistakes, wasting its own youth.', examPointEn:'Language Expression'},
  '10': {stemEn:'Fill in classical poetry and quotes:\n①The sword\'s edge comes from sharpening...\n②"Spring Night Rain" — imagined dawn scene\n③Li Bai "To Wang Lun" — friendship lines\n④Du Fu "Learning of Army Victory" — lines showing wild joy\n⑤Yu Qian "Lime Chant" — lines of determination\n⑥A maxim about cherishing time', answerTextEn:'①Plum fragrance comes from bitter cold\n②At dawn see red-drenched spots, flowers heavy on Brocade City\n③Peach Blossom Pool is a thousand feet deep, not as deep as Wang Lun\'s farewell love\n④Singing freely in daylight with wine, youth as companion to journey home\n⑤Ground to powder, I fear not; I want to leave pure whiteness in the world\n⑥Don\'t idle away youth; old age brings only sorrow', examPointEn:'Poetry Writing from Memory'},
  '11': {stemEn:'Write the most prominent literary form for each dynasty: Song___ Yuan___ Ming-Qing___', answerTextEn:'ci (lyric poetry); qu (dramatic verse); novel', examPointEn:'Literary Knowledge'},
  // wenyan section uses num:1,2,3 again — use section prefix
  'wy1': {stemEn:'Explain underlined words:\n"或失则多，或失则易" — "或" and "易"\n"然后能救其失也" — "救"', answerTextEn:'或: some people; 易: easy/superficial (studying too lightly); 救: remedy/correct', examPointEn:'Classical Chinese Vocabulary'},
  'wy2': {stemEn:'Translate: "教也者，长善而救其失者也。"', answerTextEn:'The purpose of education is to develop students\' strengths and remedy their weaknesses.', examPointEn:'Classical Chinese Translation'},
  'wy3': {stemEn:'Share your views on the role of teachers.', examPointEn:'Expressing Opinions'},
  // yuedu section readingGroup
  'rd1': {stemEn:'Read the short story "The Test" and answer questions.', contextEn:'A hostess tests her maid\'s honesty by placing 1 yuan, 5 yuan, then 10 yuan at the door on three consecutive days. On the third day, the maid places the 10 yuan on the staircase to reverse-test the hostess.'},
  'rd1.0': {stemEn:'Fill in appropriate connective words.', answerTextEn:'although/but', examPointEn:'Connective Words'},
  'rd1.1': {stemEn:'Choose the correct pronunciation for underlined characters.', answerTextEn:'là; sè; chuāi', examPointEn:'Pronunciation'},
  'rd1.2': {stemEn:'Add appropriate punctuation to the underlined sentence in paragraph ⑤.', examPointEn:'Punctuation'},
  'rd1.3': {stemEn:'①Describe the maid\'s daily behavior (max 10 chars). ②What does "心计" (scheme) in "this money hides a scheme" refer to?', answerTextEn:'①Quick-handed and efficient\n②The hostess used dropped money to test the maid\'s honesty', examPointEn:'Reading Comprehension'},
  'rd1.4': {stemEn:'How did the maid react to each of the hostess\'s three "tests"?', answerTextEn:'1st: casually placed it on the tea table.\n2nd: kicked it under the tea table leg.\n3rd: picked it up, pocketed it, then placed it on the stairs to reverse-test the hostess.', examPointEn:'Detail Extraction'},
  'rd1.5': {stemEn:'What were the direct and root causes of the hostess "blushing and being speechless"?', answerTextEn:'Direct cause: The maid placed money on the stairs and the hostess picked it up herself.\nRoot cause: Her own petty greediness was exposed by the maid.', examPointEn:'Causal Analysis'},
  'rd1.6': {stemEn:'The title "Test" contains two layers of meaning. What are they?', answerTextEn:'①The hostess tests the maid\'s honesty.\n②The maid reverse-tests the hostess\'s honesty.', examPointEn:'Title Analysis'},
  'zw1': {stemEn:'Write a narrative essay titled "Learning to ___" (complete the title yourself). Requirements: ~500 words, no real names/places.', examPointEn:'Semi-titled Composition'}
},
yn2014: {
  '1': {stemEn:'Write words from pinyin: hinder / brew / run rampant / daydream / jealousy / insult / nostalgia / contempt / dislike / persevere', answerTextEn:'hinder; brew; run rampant; reverie; envy; humiliate; nostalgia; scorn; loathe; persevere repeatedly', examPointEn:'Pinyin & Character Form'},
  '2': {stemEn:'Complete idioms:\n()流不息 莫()一是 ()羞成怒 顶礼()拜\n字正()圆 碧血()心 含()茹苦 眉飞色()\n多()善断 ()人不倦', answerTextEn:'川(stream); 衷(heart); 恼(anger); 膜(prostrate); 腔(tone); 丹(loyal); 辛(bitter); 舞(dance); 谋(strategy); 诲(teach)', examPointEn:'Idiom Fill-in'},
  '3': {stemEn:'Use "续" to form different words and fill blanks:\n(1) Students ___ walked out. (2) The war ___ for eight years. (3) The rain ___ for three days. (4) He ___ his journey.', answerTextEn:'one after another; lasted/continued; lasted continuously; continued', examPointEn:'Word Usage'},
  '4': {stemEn:'Rewrite sentences:\n(1) Change to rhetorical question\n(2) Change to negative form\n(3) Fix faulty sentence\n(4) Change direct to indirect speech\n(5) Change to exaggeration sentence', answerTextEn:'(1) Isn\'t Jiangnan a wonderful place of talent and spirit?\n(2) He is not short.\n(3) China has the world\'s unique Terracotta Warriors.\n(4) Sun Wukong told the White Bone Demon that she could fool others but not him.\n(5) This building is so tall it almost touches the sky.', examPointEn:'Sentence Transformation & Error Correction'},
  '5': {stemEn:'Fill in classical texts and poems:\n(1) The tired sun / like a happy child...\n(2) Every dance pose ___ power...\n(3) "The Little Fisher" author: ___ dynasty poet ___\n(4) Confucius: "Learning without thinking is futile, ___"\n(5) Zhu Xi\'s "Reflections on Reading": "___? ___"\n(6) Lu You\'s "To My Son": "___, ___"\n(7) Write a public service ad about cherishing food.', answerTextEn:'(3) Tang, Hu Lingneng; passersby wave from afar, afraid of startling the fish\n(4) thinking without learning is perilous; The Analerta\n(5) How can it be so clear? Living water flows from the source.\n(6) When the royal army reclaims the Central Plains, don\'t forget to tell your father at the family altar.', examPointEn:'Text & Poetry Writing from Memory'},
  '6': {stemEn:'Read "Socrates\' Wheat Parable" and answer questions.', contextEn:'Socrates\' disciples realized: Life is like walking through a wheat field seeking the largest ear. Some seize opportunities; others keep missing them.'},
  '6.0': {stemEn:'Find a pair of antonyms in the text.', answerTextEn:'seizing opportunities — missing opportunities', examPointEn:'Antonyms'},
  '6.1': {stemEn:'What is the function of quotation marks around "麦穗" (wheat ear)?', answerTextEn:'Special meaning (metaphor for life opportunities)', examPointEn:'Punctuation Function'},
  '6.2': {stemEn:'What does "the largest ear" refer to? What about "the ear at hand"?', answerTextEn:'The largest ear = lofty ideals / ultimate goals; the ear at hand = current opportunities within grasp', examPointEn:'Metaphorical Reading'},
  '6.3': {stemEn:'Connect to real life and share what insight you gained.', examPointEn:'Personal Reflection'},
  '7': {stemEn:'Read "The Spring\'s Aspiration" and answer questions.', contextEn:'A tiny trickle aspires to reach the ocean. No small pond can keep it, no small stone can block it, no small flower can distract it — it sings as it flows forward.'},
  '7.0': {stemEn:'Fill in "attract," "retain," and "block" in the correct blanks.', answerTextEn:'retain; block; attract', examPointEn:'Word Selection'},
  '7.1': {stemEn:'What does "here" refer to? What about "these things"?', answerTextEn:'"Here" = the small pond\'s comfortable little world; "these things" = spring flowers and autumn grass', examPointEn:'Pronoun Reference'},
  '7.2': {stemEn:'What rhetorical device is used in "It sings as it gurgles forward"? What is its effect?', answerTextEn:'Personification. It humanizes the spring water, showing its determination to reach the ocean despite obstacles.', examPointEn:'Rhetorical Analysis'},
  '7.3': {stemEn:'Why can\'t the small pond keep the water? (Answer using the original text)', answerTextEn:'A tiny trickle aspires to reach the ocean (涓滴之水，志在海洋)', examPointEn:'Textual Evidence'},
  '8': {stemEn:'Read "Famine in Taipei" and answer questions.', contextEn:'Every time the narrator\'s mother stuffs the suitcase full of things. Father\'s catchphrase: "If you can carry it, it\'s ours."'},
  '8.0': {stemEn:'Explain "口头禅" (catchphrase) and "不约而同" (coincidentally) in context.', answerTextEn:'Catchphrase: a phrase constantly on one\'s lips. Coincidentally: acting the same way without prior agreement.', examPointEn:'Vocabulary Comprehension'},
  '8.1': {stemEn:'What feelings does this essay express?', answerTextEn:'Gratitude and cherishing of parents\' deep, selfless love.', examPointEn:'Emotional Understanding'},
  '8.2': {stemEn:'What does "Famine in Taipei" specifically refer to? What does it imply?', answerTextEn:'It refers to the mother stuffing the suitcase full, as if Taipei lacks everything. It implies the mother\'s boundless love and concern for her child.', examPointEn:'Title Analysis'},
  '8.3': {stemEn:'Explain: "While you can still carry things, while the suitcase still has room, stuff in a little more love!"', answerTextEn:'While parents are still around, cherish and feel their love; also give back love to them while you can.', examPointEn:'Sentence Interpretation'},
  '9': {stemEn:'Oral expression: Zhang Lin likes reading extracurricular books before exams. Her father says she should study instead of reading "leisure books." Help Zhang Lin explain.', examPointEn:'Oral Communication'},
  '10': {stemEn:'Write an essay titled "___, I Want to Say to You." Requirements: complete the title, 400+ words, no real names.', examPointEn:'Semi-titled Composition'}
},
dh2023: {
  '1': {stemEn:'Copy the following passage neatly and write characters from pinyin. Under the guidance of the Party\'s 20th Congress, the ethnic groups of Dehong Prefecture unite and progress, making contributions in various lǐng yù (fields), creating a scene of wàn xiàng gēng xīn (everything renewed), giving yì yì (meaning) to our lives.', answerTextEn:'fields; everything renewed; meaning (plus neat copying of the full passage)', explainEn:'Don\'t confuse 领域 with 淋浴; 万象更新: note 象 vs 像; 意义 vs 异议.', examPointEn:'Writing Words from Pinyin'},
  '2': {stemEn:'Select the group where all characters are written correctly.', optionsEn:['A. 腊月 元霄(error)','B. 清脆 惊皇(error)','C. 严峻 苦刑(correct)','D. 辟静(error) 鞭炮'], explainEn:'A: 元霄→元宵; B: 惊皇→惊惶; D: 辟静→僻静.', examPointEn:'Character Form'},
  '3': {stemEn:'Replace the underlined word with a synonym that keeps the meaning: "He speaks and acts in a straightforward manner (直截了当), never dawdling."', optionsEn:['A. Fully concentrated','B. Decisive and resolute','C. Hesitant and indecisive','D. Arbitrary and dictatorial'], explainEn:'Both 直截了当 and 斩钉截铁 mean decisive and straightforward.', examPointEn:'Word Comprehension'},
  '4': {stemEn:'Select the correct statement about customs and their symbolic meanings.', optionsEn:['A. Eating rice cake at New Year symbolizes children growing taller','B. Carving bats on buildings symbolizes warding off evil','C. Eating fish at New Year symbolizes always having fish to eat','D. Eating mooncakes at Mid-Autumn symbolizes happiness and reunion'], explainEn:'A = improvement year by year; B = fortune and happiness; C = abundance (余=surplus, homophone of 鱼=fish).', examPointEn:'Cultural Knowledge'},
  '5': {stemEn:'Select the most appropriate expression for a specific social occasion.', optionsEn:['A. Thank everyone for helping me win this award; I\'ll work harder. (acceptance speech)','B. I\'ll attend grandpa\'s birthday and make him feel honored. (family event — misused idiom)','C. My honorable surname is Wang. (self-intro — misused honorific)','D. I lost a dictionary; if found, hand it over immediately. (lost & found — rude tone)'], explainEn:'B: 蓬荜生辉 is a self-deprecating honorific, wrong here; C: 贵姓 is for asking others; D: too commanding.', examPointEn:'Language Appropriateness'},
  '6': {stemEn:'True or False (10 items covering writing techniques, pinyin rules, classical Chinese, reading methods, emotional expression, text structure, calligraphy, debate skills, and literary analysis).', answerTextEn:'(1)True (2)False (3)False (4)True (5)False (6)True (7)True (8)False (9)True (10)True', explainEn:'(2) "Zhong Nanshan" should be "Zhong Nanshan" with capital initials; (3) first 之=swan, second 之=the focused person; (5) "Hurrying" uses direct expression, "That Sunday" uses indirect; (8) "Xuanmi Pagoda Stele" is by Liu Gongquan, not Zhao Mengfu.', examPointEn:'Comprehensive Knowledge'},
  '7': {stemEn:'Complete exercises:\n(1) Replace "说" with a synonym in "He said ___: \'So beautiful!\'".\n(2) Write about walking in an alley in both good and bad moods.\n(3) Write a sentence using exaggeration to express "the place is tiny."', answerTextEn:'(1) exclaimed/praised\n(2) Good mood: humming a tune, warm lights, even the dog seems joyful. Bad mood: gray sky, dark walls frowning, a dog howling annoyingly.\n(3) This place is so tiny that even ants would struggle to breathe here.', examPointEn:'Language Expression'},
  '8': {stemEn:'Fill in classical poetry and proverbs:\n(1) Time reveals character: "___,___"\n(2) Spring scenery + noble integrity from "Lime Chant"\n(3) Sima Qian on death\'s weight\n(4) A proverb about the value of practice', answerTextEn:'(1) Distance tests a horse\'s strength; time reveals a person\'s heart\n(2) A red apricot branch extends beyond the wall; Ground to powder I fear not, I want to leave pure whiteness in the world\n(3) Some deaths are heavier than Mount Tai, some lighter than a feather\n(4) Books are only truly missed when needed; things are only understood through experience', examPointEn:'Poetry & Proverbs'},
  '9': {stemEn:'Read "Truth Is the Shadow of Doubt" and answer questions.', contextEn:'A French psychologist gave the same impossible test to French and Shanghai students (86 cows + 34 sheep on a ship = captain\'s age?). 90% of French students questioned it; only 10% of Shanghai students did.'},
  '9.0': {stemEn:'Identify the main argument of the text.', answerTextEn:'Truth is the shadow of doubt.', examPointEn:'Main Argument'},
  '9.1': {stemEn:'Summarize the example; what is the benefit of quoting famous people?', answerTextEn:'Example: A psychologist gave French and Shanghai students an impossible test. 90% of French students said it was unanswerable; only 10% of Shanghai students did.\nBenefit: Strengthens the argument about the importance of questioning.', examPointEn:'Argumentation Analysis'},
  '10': {stemEn:'From the experiment, education emphasizing ___ promotes thinking; education emphasizing ___ leads to blind obedience.', answerTextEn:'respecting truth; respecting the teacher', examPointEn:'Reading Comprehension'},
  '11': {stemEn:'After reading, what are your thoughts?', answerTextEn:'We should not blindly follow authority; we need a questioning spirit and persistent pursuit of truth.', examPointEn:'Critical Thinking'},
  '12': {stemEn:'Read the story "Step by Step" and answer questions.', contextEn:'57 years ago, five boys invited "me" to climb a cliff. Weak and sickly, I barely climbed up but froze on a ledge. At dusk, my father guided me down one step at a time. This became my lifelong belief — focus on the first small step.'},
  '12.0': {stemEn:'Give the passage a suitable title.', answerTextEn:'Walk One Step, Then Another', examPointEn:'Title Creation'},
  '12.1': {stemEn:'Fill in appropriate connective words in paragraph ③.', answerTextEn:'Although... but... moreover...', examPointEn:'Connective Words'},
  '12.2': {stemEn:'Explain: ①随声附和 ②高不可攀', answerTextEn:'①Echo others without independent thinking ②So high it cannot be climbed', examPointEn:'Vocabulary Comprehension'},
  '12.3': {stemEn:'The father\'s guidance section uses ___ and ___ descriptions. The benefit is ___.', answerTextEn:'language; expression/demeanor; It shows the father\'s gentleness and care, letting readers feel his crucial role during the child\'s difficulty.', examPointEn:'Writing Technique'},
  '12.4': {stemEn:'Some say Jerry is not "my" best friend. Do you agree? Why?', answerTextEn:'Disagree — he IS the best friend. Jerry initially encouraged "don\'t be a coward"; in the end, he worried about safety on the cliff and brought the father to help.', examPointEn:'Character Evaluation'},
  '17': {stemEn:'Imagine riding a time machine to the past or future with technologies like nanotech, 5G, AI robots, or drones. Write a science fiction story.\nRequirements: ①Create your own title ②Smooth language, specific content ③Vivid imagination, engaging plot ④Neat handwriting ⑤350+ words.', examPointEn:'Imaginative Writing'}
},
qj2023: {
  '1': {stemEn:'Read pinyin carefully and write neatly (8 words).', answerTextEn:'bird\'s-eye view; cook porridge; curse; move; defense; unbridled; panicked; immature', explainEn:'Don\'t confuse 鸟瞰 with 橄, 挪 with 哪, 御 with 卸, 幼 with 幻.', examPointEn:'Writing Words from Pinyin'},
  '2': {stemEn:'Underline the correct pronunciation for each word: ferment, genuine, slender, bow+arrow pellet, blazing, dazzled.', answerTextEn:'jiào; wěi; xiān; zhuó; chì; xuàn', explainEn:'纤: xiān (thin) vs qiàn (boatman); 缴: zhuó (arrow pellet) vs jiǎo (pay).', examPointEn:'Pronunciation'},
  '3': {stemEn:'Select the group with NO incorrect characters.', optionsEn:['A. concise/self-ashamed/杞人忧天/polite — errors','B. unparalleled/persevere/ocean drop/innate — errors','C. reverie/reading aloud/imaginative/radiant — correct','D. refined/graceful/golden splendor/impressive — errors'], explainEn:'A: 佛→弗, 忆→杞, 理→礼; B: 轮→伦, 励→厉; D: 而→尔, 壁→碧.', examPointEn:'Character Form'},
  '4': {stemEn:'Arrange time-related idioms from shortest to longest duration:\n①一朝一夕 ②地老天荒 ③经年累月 ④稍纵即逝', optionsEn:['A. ④①③②','B. ③④②①','C. ①③④②','D. ④①②③'], explainEn:'④ fleeting → ① one day → ③ years and months → ② ages and ages.', examPointEn:'Sequencing'},
  '5': {stemEn:'Which character was created using a DIFFERENT method from the other three?', optionsEn:['A. 轮(wheel)','B. 轫(brake)','C. 藤(vine)','D. 囚(prisoner)'], explainEn:'A, B, C are phono-semantic compounds; D (囚) is an ideogrammatic compound (person inside an enclosure).', examPointEn:'Character Construction'},
  '6': {stemEn:'Choose the correct meaning for the underlined character in each idiom:\n(1) 独出心裁: 裁 = A.conceive B.judge C.restrict\n(2) 精兵简政: 政 = A.government B.household affairs C.national affairs\n(3) 见微知著: 著 = A.write B.reveal/show C.works\n(4) 赴汤蹈火: 汤 = A.hot water B.broth C.herbal medicine', answerTextEn:'(1)A (2)C (3)B (4)A', examPointEn:'Character Meaning in Idioms'},
  '7': {stemEn:'Fill in the most appropriate words: weak/feeble/soft\n(1) The nation gradually ___ declined. (2) Through exercise, dad\'s ___ body recovered. (3) His ___ character prevented victory.', optionsEn:['A. feeble-weak-soft','B. declining-feeble-soft','C. feeble-soft-declining','D. declining-soft-feeble'], explainEn:'declining = national power waning; feeble = physical weakness; soft = character weakness.', examPointEn:'Word Usage'},
  '8': {stemEn:'Fill in appropriate idioms based on context and hints:\n(1) He was so scared he ___ (2) "Eating pork prevents smog" — experts call this ___ (3) Fame should be ___ (lighter than a feather) (4) As the saying goes, "___" (misfortune may be blessing)', answerTextEn:'(1) trembling with fear (2) unheard-of (3) lighter than a feather (4) the old man at the border lost his horse', examPointEn:'Idiom Application'},
  '9': {stemEn:'Which character-book pairing is INCORRECT?', optionsEn:['A. Wang Xifeng — "Dream of Red Mansions"','B. Wu Song — "Water Margin"','C. Yan Jiansheng — "The Scholars"','D. Lin Xiangru — "Romance of Three Kingdoms"'], explainEn:'Lin Xiangru is from "Records of the Grand Historian," not "Romance of Three Kingdoms."', examPointEn:'Literary Knowledge'},
  '10': {stemEn:'Choose the most appropriate set of connective words.', optionsEn:['A. No matter...all...even if...also...','B. Even if...still...not only...but also...','C. Since...then...although...but...','D. Not only...but also...because...so...'], examPointEn:'Connective Words'},
  '11': {stemEn:'Which poem-festival pairing is INCORRECT?', optionsEn:['A. "At dusk palace candles are passed" — Cold Food Festival','B. "Firecrackers mark the passing year" — Spring Festival','C. "Brothers climb high, wearing dogwood" — Double Ninth','D. "Tonight all watch the bright moon" — Qixi Festival'], explainEn:'D is from "Gazing at the Moon on the 15th" — it\'s Mid-Autumn, not Qixi.', examPointEn:'Poetry & Festivals'},
  '12': {stemEn:'Select the item with correct punctuation usage.', optionsEn:['A. "Oh!" said dad thoughtfully: "Of course..."','B. A tourist was asking the officer how to get there?','C. Everyone likes reading "Red Crag" this classic.','D. Early summer in Spring City: green willows, birds singing; May in Cuancheng: plums on branches, flowers blooming.'], explainEn:'A: after "said" use comma, not colon; B: statement, use period not question mark; C: "Red Crag" needs book title marks 《》.', examPointEn:'Punctuation'},
  '13': {stemEn:'Fill in matching phrases: exploring history →___; entering nature →___; feeling family →___; understanding society →___\n①view worldly scenery ②enjoy warm feast ③experience changing tides ④savor life\'s flavors', optionsEn:['A. ①③②④','B. ④①③②','C. ③①②④','D. ③②①④'], examPointEn:'Sentence Matching'},
  '14': {stemEn:'Fill in classical quotes and poems:\n(1) "Bitter medicine benefits illness, ___"\n(2) Fan Zhongyan / Han Yu / Su Shi poem lines\n(3) "Trees would rest but wind never stops, ___"\n(4) Lu Xun\'s spirit: "___, willing servant of the people"', answerTextEn:'(1) Honest advice offends the ear but benefits conduct\n(2) Watch a small boat amid waves; Surpassing the smoky willows of the imperial capital; Who says life cannot be young again\n(3) Children would serve parents but parents may not wait\n(4) Fierce-browed, I coolly defy a thousand pointing fingers', examPointEn:'Poetry & Proverbs'},
  '15': {stemEn:'Fill in text passages:\n(1) From Zhu Ziqing\'s "Hurrying" — like light smoke...\n(2) From "Learning to Play Go" — Yiqiu, the best player in the land...', answerTextEn:'(1) blown away by breeze; thin mist; Zhu Ziqing; Hurrying\n(2) the best Go player in the nation; taught two people; concentrated fully; thinking a swan was coming; one must never be half-hearted', examPointEn:'Text Content'},
  '16': {stemEn:'Rewrite sentences:\n(1) Shorten the sentence\n(2) Change direct to indirect speech\n(3) Fix faulty sentence — remove double negative error', answerTextEn:'(1) I heard the melody.\n(2) Uncle said in his letter that he would definitely come visit me when he had time.\n(3) Remove "不" — "To prevent traffic accidents" (not "to prevent not having traffic accidents").', examPointEn:'Sentence Transformation'},
  '17': {stemEn:'Using given words, compose a couplet expressing gratitude to teachers:\nWords: brush-soaked / sunny / ink-rich / breezy / bloom peach & plum / write history', answerTextEn:'First line: Sunny and breezy, peach and plum bloom\nSecond line: Brush soaked, ink rich, writing history', examPointEn:'Couplet Writing'},
  '18': {stemEn:'Look at the toothpaste image and complete exercises.', contextEn:'A tube of Zhonghua brand dual-calcium anti-cavity toothpaste: brand, weight (140g), ingredients (dual calcium), flavor (cool mint), function (cavity prevention).'},
  '18.0': {stemEn:'What information can we get from this toothpaste?', optionsEn:['A. Brand, origin, weight, ingredients, flavor','B. Brand, weight, color, ingredients, function','C. Brand, weight, ingredients, flavor, function','D. Brand, weight, ingredients, function, shelf life'], examPointEn:'Information Extraction'},
  '18.1': {stemEn:'Based on the toothpaste\'s features, design a slogan.', answerTextEn:'Dual calcium prevents cavities — great value in a big tube.', examPointEn:'Creative Writing'},
  '20': {stemEn:'Read an excerpt from "Sixteen Years Ago" and answer questions.', contextEn:'In the courtroom, "we" see Father wearing old gray cotton robe, no glasses, messy long hair over a calm, kind face.'},
  '20.0': {stemEn:'Write antonyms: composed→___ great→___', answerTextEn:'agitated (flustered); ordinary (insignificant)', examPointEn:'Antonyms'},
  '20.1': {stemEn:'The dash in the passage serves to:', optionsEn:['A. Topic change','B. Explanation','C. Shift in meaning','D. Speech interruption'], examPointEn:'Punctuation Function'},
  '20.2': {stemEn:'The passage mainly describes ___.', answerTextEn:'"We" meeting Father in the courtroom.', examPointEn:'Main Idea'},
  '20.3': {stemEn:'The underlined sentence describes Father\'s ___ and ___. "No glasses" and "messy hair" show ___; "calm" shows ___; "kind" shows ___.', answerTextEn:'appearance; demeanor; he suffered cruel torture; he remained strong and composed after brutal treatment; his love for family', examPointEn:'Character Description Analysis'},
  '20.4': {stemEn:'"His heart was filled with a great power." What is this "great power"?', answerTextEn:'Li Dazhao\'s faith in the revolutionary cause.', examPointEn:'Inferential Reading'},
  '25': {stemEn:'Read "Penmanship Childhood" by Yu Qiuyu and answer questions.', contextEn:'The author recalls childhood memories with brush and ink: writing exams with wine-soaked ink to prevent freezing; teacher carrying him to the river to wash off ink; borrowing library books by writing in small regular script; villagers\' tradition of revering written characters.'},
  '25.0': {stemEn:'"Our brush calligraphy had the lingering spirit of Li Bai from the very start." This means:', optionsEn:['A. Our calligraphy looked like Li Bai\'s','B. Our calligraphy had Li Bai\'s flavor','C. Li Bai drank wine and wrote poetry; we dipped in wine to write — as if channeling the poet\'s spirit','D. Our poems resembled Li Bai\'s style'], examPointEn:'Figurative Language'},
  '25.1': {stemEn:'Summarize the main events: ①___ ②Teacher carried me to wash ink ③___ ④Villagers revered written characters', answerTextEn:'①Dipping brushes in wine for year-end exams ③Teacher required us to borrow books using small regular script', examPointEn:'Event Summarization'},
  '25.2': {stemEn:'The "penmanship" in the title "Penmanship Childhood" refers to:', optionsEn:['A. Writing brushes and ink','B. Characters written with brush and ink','C. Borrowing books with brush calligraphy','D. Written words and culture'], examPointEn:'Title Interpretation'},
  '25.3': {stemEn:'Analyze the rhetorical device and effect of the underlined sentence ("those running feet, those cradling arms, that clear river water").', answerTextEn:'Parallelism — conveys the author\'s experience of receiving the teacher\'s care in primary school, reflecting the beauty of his ink-and-brush childhood.', examPointEn:'Rhetorical Analysis'},
  '25.4': {stemEn:'Which is the most accurate understanding of the ending\'s characteristics and function?', optionsEn:['A. Abrupt ending with structural echo, showing the author left hometown for the wider world','B. Abrupt ending leaving questions about what the author\'s starting point was','C. Natural, concise ending highlighting the theme: childhood learning and the rich cultural atmosphere laid foundations for becoming a renowned scholar','D. Natural ending: villagers\' respect for writing gave the author a good foundation'], examPointEn:'Text Structure & Theme'},
  '30': {stemEn:'Complete based on your reading:\n(1) "Tom Sawyer" was written by ___(country)\'s ___.\n(2) Describe what kind of person Tom Sawyer is.', answerTextEn:'(1) American; Mark Twain\n(2) Tom is a clever, mischievous boy who hates stuffy indoor life and hypocritical religious education, rebelling through truancy, pranks, and running away with his "pirate gang."', examPointEn:'Literary Knowledge'},
  '31': {stemEn:'Among integrity, wealth, health, and friendship — if you could only choose one, what would you choose and why?', answerTextEn:'Health is paramount! Without it, everything else loses its meaning.', examPointEn:'Oral Expression'},
  '32': {stemEn:'Choose one topic:\n(1) Write about "happiness" — tell a story from your life\n(2) "I give a thumbs-up to ___" — describe a specific event\nRequirements: 500+ words, genuine emotions, no real names.', examPointEn:'Narrative Composition'}
},
wh2024: {
  '1': {stemEn:'Write words from pinyin in context about the 3rd Reading Conference, Kunming\'s cultural tourism field(lǐngyù), book collections(jí), not delaying(dān), sacrifice(xīshēng), surging waves(xiōngyǒngpéngpài), perceiving subtleties(jiànwēizhīzhù), generous(kāngkǎi).', answerTextEn:'field; collection; delay; sacrifice; surging; perceiving subtleties; generous', examPointEn:'Character Writing'},
  '2': {stemEn:'Select the group with all correct pronunciations.', optionsEn:['A. provide(gōng) instruct(fēn) threaten(hè) hair-trigger(fà)','B. pace(huí) nimble(líng) picky(tì) meticulous(sī)','C. noon(shǎng) prick(zā) command(chà) accustomed(guàn)','D. hate(zēng) pistil(ruǐ) envy(jí) heartstring(xuán)'], explainEn:'B: 徘徊 huái, 挑剔 ti; C: 扎针 zhā, 叱咤 zhà; D: 心弦 xián. A is correct.', examPointEn:'Phonetic Discrimination'},
  '3': {stemEn:'Select the group with all correctly written words.', optionsEn:['A. everything renewed / incredible / fully focused / bless in disguise','B. see daylight again / sobbing / absolutely must / creative originality','C. overwhelmed / deeply regret / maternal love / commanding view','D. die for a worthy cause / across the land / completely different / rummage through'], explainEn:'A: 万像→万象; B: 重建→重见, 万不得以→已; C: 追悔莫急→及. D is correct.', examPointEn:'Character Form'},
  '4': {stemEn:'Fill in the correct idioms: never skim(走马观花); reads ___ly(踏踏实实); learned greatly(受益匪浅); felt ___ly inferior(自愧弗如).', optionsEn:['A. skim/indifferent/ashamed/ill-informed','B. skim/indifferent/benefited/ill-informed','C. skim/steadily/benefited/ashamed','D. skim/steadily/ashamed/benefited'], examPointEn:'Idiom Usage'},
  '5': {stemEn:'Which poem does NOT endow its subject with human character and aspirations?', optionsEn:['A. Lotus gone, no rain-catching caps; chrysanthemum remains, frost-defying branches','B. Through a thousand blows and strikes still standing strong','C. Ground to powder I fear not; I want to leave purity in the world','D. Through golden armor worn by a hundred desert battles, I won\'t return until Loulan falls'], explainEn:'D expresses a soldier\'s direct emotion — not the "object symbolizing character" technique (托物言志).', examPointEn:'Poetic Technique'},
  '6': {stemEn:'True or False about text content:\n(1) "Laba Porridge" — Lao She describes the warmth of family life\n(2) "Tom Sawyer" excerpt — Tom and Becky returning from the cave\n(3) "Learning to Play Go" — not concentrating means falling behind\n(4) Boyle compiled the theory of continental drift', answerTextEn:'(1)× (2)√ (3)√ (4)×', explainEn:'(1) Author is Shen Congwen, not Lao She; (4) It was Wegener, not Boyle.', examPointEn:'Text Content'},
  '7': {stemEn:'Use proofreading marks to correct a lost-and-found notice.', examPointEn:'Proofreading'},
  '8': {stemEn:'Fill in text knowledge:\n(1) "Two Children Debate the Sun" from ___; shows children\'s ___ and Confucius\'s ___\n(2) Li Dazhao\'s revolutionary image; Dong Cunrui is a ___ warrior; Chairman Mao\'s ___ (4-char phrase)', answerTextEn:'(1) "Liezi·Tangwen"; keen observation / daring to challenge authority; honest and humble attitude\n(2) steadfast and unyielding; fearless and selfless; love for the people / caring for the masses', examPointEn:'Text Content & Character Analysis'},
  '9': {stemEn:'Poetry and festivals: "___,秋思落谁家" is ___ Festival; "千门万户曈曈日,___" is ___ Festival; "粽包分两髻" is ___ Festival; "细看茱萸一笑" is ___ Festival.', answerTextEn:'Tonight all watch the bright moon; Mid-Autumn; Always replace old peach charms with new; Spring; Dragon Boat; Double Ninth', examPointEn:'Festival Poetry'},
  '10': {stemEn:'Using exaggeration (like the example), write a sentence with one of the given words.', answerTextEn:'Example: I was so excited that a million volts of electricity surged through me. / I jumped a thousand feet high with joy.', examPointEn:'Exaggeration Writing'},
  '11': {stemEn:'Read "Hurrying" and "That Sunday" excerpts. Answer questions.', contextEn:'Selection 1 from "Hurrying": how time slips away in daily life. Selection 2 from "That Sunday": a child waiting for mother through an agonizing day.'},
  '11.0': {stemEn:'Fill in the blank from "Hurrying" (original text).', answerTextEn:'I cover my face and sigh, but the shadows of new days already begin to flash past in my sighs.', examPointEn:'Text Recitation'},
  '11.1': {stemEn:'"The sun has feet; it moves softly and quietly, and I follow, spinning mindlessly." This uses ___ to show ___.', answerTextEn:'personification; time slips away unknowingly, leaving one helpless and melancholic', examPointEn:'Rhetorical Analysis'},
  '11.2': {stemEn:'The author of "That Sunday" uses ___, ___, ___, ___ four examples to show "this time was hard to endure."', answerTextEn:'playing hopscotch; watching clouds; poking at ant nests; flipping through picture books', examPointEn:'Detail Identification'},
  '11.3': {stemEn:'Write three words with the same meaning as "空空落落" (empty and desolate).', answerTextEn:'completely empty; devoid of anything; empty and barren', examPointEn:'Synonym Vocabulary'},
  '11.4': {stemEn:'Both selections express genuine emotion. What is similar about their methods of expression?', answerTextEn:'Both embed emotions into concrete objects. "Hurrying" uses the sun\'s movement to convey the passage of time; "That Sunday" uses hopscotch, clouds, ant nests, and picture books to show the shift from excitement to disappointment.', examPointEn:'Comparative Reading'},
  '16': {stemEn:'Read "Reading Requires Selection" and answer questions.', contextEn:'An essay arguing that students should choose quality literary works, biographies, science books, and reference books.'},
  '16.0': {stemEn:'True or False based on the text:\n(1) Quality literature provides spiritual enrichment and teaches what good writing is\n(2) Students can ONLY choose literary works, biographies, and science books\n(3) The article\'s viewpoint is: reading requires selection\n(4) "因人而异" and "日新月异" share the same meaning of "异" as "奇才异能"', answerTextEn:'(1)√ (2)× (3)√ (4)×', explainEn:'(2) "Only" is too absolute; (4) 异 in the first two means "different"; in 奇才异能 it means "special/extraordinary."', examPointEn:'Information Verification'},
  '16.1': {stemEn:'Based on paragraph ⑥, complete a dialogue persuading Xiao Dong to read a children\'s book.', answerTextEn:'Xiao Dong, interests can be cultivated through reading. Plus, reading broadens your horizons and expands your knowledge. "The Wonderful Adventures of Nils" is really fun and worth reading!', examPointEn:'Situational Dialogue'},
  '16.2': {stemEn:'Goethe said "Reading a good book is like talking with a noble person." Name a book you\'ve read and discuss this quote.', answerTextEn:'Example: "Journey to the West." Reading it teaches us qualities like perseverance from the characters — when facing difficulties, we should be brave and find solutions.', examPointEn:'Reading Reflection'},
  '19': {stemEn:'Read three materials about World Reading Day and the 3rd National Reading Conference. Answer questions.', contextEn:'Material 1: World Reading Day (April 23); Material 2: Six themes of the 3rd National Reading Conference; Material 3: Kunming as host city.'},
  '19.0': {stemEn:'UNESCO declared April 23 as ___; this year\'s ___ National Reading Conference was held in ___; the theme is: ___.', answerTextEn:'World Reading Day; 3rd; Kunming; Building a Reading Society, Sharing Modern Civilization', examPointEn:'Information Extraction'},
  '19.1': {stemEn:'Which theme would you most want to attend, and why?', answerTextEn:'I\'d like "Methods of Reading" because I struggle with reading efficiency and want to learn better techniques.', examPointEn:'Personal Expression'},
  '19.2': {stemEn:'Design a publicity slogan for the National Reading Conference.', answerTextEn:'A single lamp lights a room; a good book illuminates every heart.', examPointEn:'Slogan Design'},
  '19.3': {stemEn:'Discuss the importance of reading using all three materials, incorporating a quote about books.', answerTextEn:'"Books are medicine — good reading can cure ignorance." Reading keeps the mind active, improves thinking, builds vocabulary, enhances writing, relieves stress, and gives us courage to face challenges.', examPointEn:'Comprehensive Expression'},
  '23': {stemEn:'Choose one activity:\nActivity 1: Childhood Memories — write about an emotional experience from 6 years of school\nActivity 2: Childhood Scenery — describe a memorable Kunming landscape\nRequirements: 400+ words, genuine emotions.', examPointEn:'Narrative/Descriptive Composition'}
},
xs2024: {
  '1': {stemEn:'Fill in pinyin to complete the passage: friends from 五湖四海(wǔhúsìhǎi/all corners), mountain\'s steepness(jùn), chat freely(liáo), wander(páihuái) the streets...', answerTextEn:'from all over; steep; chat; wander', examPointEn:'Character Writing'},
  '2': {stemEn:'Fill in classical text lines: "Past days like ___, blown by breeze, like thin mist, ___ by morning sun"; "Some deaths heavier than ___, lighter than ___"; "___, things only understood through experience"; "Through a thousand blows ___"', answerTextEn:'light smoke; evaporated; Mount Tai; a feather; Books are only missed when needed; still standing strong, despite winds from all directions', examPointEn:'Text Recitation'},
  '3': {stemEn:'Select the road sign that follows pinyin spelling rules for "Tuodong Road."', optionsEn:['A. TUODONGLU','B. TUODONG LU','C. Tuodong lu','D. TUO DONG LU'], explainEn:'Road sign rules: all caps, proper noun and generic word separated.', examPointEn:'Pinyin Rules'},
  '4': {stemEn:'Select the INCORRECT option in three groups:\n(1) Pronunciation (2) Character form (3) Character meaning', answerTextEn:'(1)B (2)C (3)D', explainEn:'(1) 分外 fèn; (2) 司空见惯 not 贯; (3) 乃=but/yet, not "still."', examPointEn:'Pronunciation, Form & Meaning'},
  '5': {stemEn:'Choose the correct pronunciation of "藏" in two contexts: museum collection(cáng) vs treasure trove(zàng).', answerTextEn:'(1)B.cáng (2)A.zàng', explainEn:'馆藏 = to store/collect (cáng); 宝藏 = stored treasure (zàng).', examPointEn:'Polyphonic Characters'},
  '6': {stemEn:'Select what content is suitable for a Kunming Museum introduction.', optionsEn:['A. ①②','B. ③④','C. ①③④','D. ①②③④'], examPointEn:'Material Selection'},
  '7': {stemEn:'Select the best summary of the museum\'s role in society.', optionsEn:['A. Museums can display heritage','B. Museums display artifacts','C. Museums bring artifacts to life','D. Museums display artifacts, interpret their value, and nourish society with culture'], examPointEn:'Main Idea'},
  '8': {stemEn:'Select the INCORRECT statement about "琴棋书画" (the four arts).', optionsEn:['A. "Qin" reminds us of Boya\'s superb zither skills','B. "Chess" reminds us of Yiqiu teaching two students','C. "Calligraphy" — Zhao Mengfu\'s kaishu: lean and strong','D. "Painting" — the famous "Along the River During Qingming Festival"'], explainEn:'Zhao Mengfu\'s style is elegant and graceful; "lean and strong" describes Liu Gongquan.', examPointEn:'Literary & Cultural Knowledge'},
  '9': {stemEn:'Select the expository method NOT used in the Victory Hall description.', optionsEn:['A. Statistics','B. Comparison','C. Examples','D. Analogy/metaphor'], explainEn:'"28.12 acres, 4600m²" = statistics; "like a mountain" = analogy; "such as..." = examples. No comparison used.', examPointEn:'Expository Methods'},
  '10': {stemEn:'Select the INCORRECT reading advice.', optionsEn:['A. Distinguishing main and secondary ideas helps understand the author\'s purpose','B. When reading classics, character evaluation should be one-dimensional','C. Copy favorite passages into notebooks','D. Asking questions and looking things up expands knowledge'], explainEn:'Character evaluation should be multi-dimensional, not one-dimensional.', examPointEn:'Reading Methods'},
  '11': {stemEn:'Match poetry with traditional festivals from the nursery rhyme.', answerTextEn:'④ ② ③ ①', examPointEn:'Festival Poetry Matching'},
  '12': {stemEn:'"Which festival, tangyuan smiles" — select tangyuan\'s symbolic meaning.', optionsEn:['A. Out with the old, in with the new','B. Abundance every year','C. Family reunion','D. Everything goes well'], examPointEn:'Festival Symbolism'},
  '13': {stemEn:'Read "Flute Sound Becomes National Spirit" about Nie Er and answer questions.', contextEn:'The story of Nie Er from his birth in Kunming\'s Yongdao Street, learning the flute, studying, joining Shanghai opera society, composing revolutionary songs, to creating "March of the Volunteers" (national anthem).'},
  '13.0': {stemEn:'Select the INCORRECT content statement.', optionsEn:['A. Carpenter Qiu taught Nie Er the flute','B. All listed songs were independently composed by Nie Er','C. Paragraphs ② and ⑨ both mention flute music, creating thematic echo'], explainEn:'"March of the Volunteers" had lyrics by Tian Han — not solely Nie Er\'s creation.', examPointEn:'Reading Comprehension'},
  '13.1': {stemEn:'Select the INCORRECT statement about Nie Er\'s former residence.', optionsEn:['A. A traditional Kunming "Single Seal" house','B. A two-story, three-room wood-earth structure','C. A post-and-beam residential building without a courtyard'], explainEn:'The text mentions "entering the courtyard" — so there IS a courtyard.', examPointEn:'Detail Comprehension'},
  '13.2': {stemEn:'Choose the best interpretation of "如鱼得水" (like a fish in water) in context.', optionsEn:['A. Nie Er took to swimming','B. Shanghai felt as freeing as water','C. The opera society let Nie Er fully use his musical talent — like a fish finding its ideal environment'], examPointEn:'Idiom in Context'},
  '13.3': {stemEn:'Select the MAIN reason "March of the Volunteers" became China\'s national anthem.', optionsEn:['A. Composed by young musician Nie Er','B. It voiced the masses\' cry for national salvation, embodying the Chinese spirit of fearless determination','C. It was the theme song of the anti-Japanese film "Children of Troubled Times"'], examPointEn:'Main Idea'},
  '13.4': {stemEn:'Where should the transitional sentence "Hard work opened doors to both music and knowledge" be placed?', optionsEn:['A. Start of paragraph ②','B. Start of paragraph ③','C. Start of paragraph ④'], explainEn:'Para ② covers music learning; para ③ covers academic learning. The sentence bridges both.', examPointEn:'Text Structure'},
  '13.5': {stemEn:'Choose the best award citation for Nie Er as a "Yunnan Milestone" honoree.', optionsEn:['A. Outstanding people\'s musician who played the flute beautifully','B. Talented, lively; served as lead violinist','C. Composer of the national anthem, voice of the people, pioneer of revolutionary music, pride of Yunnan'], examPointEn:'Character Evaluation'},
  '13.6': {stemEn:'When do you hear or sing the national anthem? How does it make you feel?', answerTextEn:'School flag ceremonies, Tiananmen ceremonies, award ceremonies, national memorials, etc. Singing it fills me with patriotic pride, remembering our ancestors\' sacrifices.', examPointEn:'Personal Connection'},
  '20': {stemEn:'Read three materials about tea culture and answer questions.', contextEn:'Material 1: Types and functions of tea (green, red, black, white). Material 2: Classical Chinese from Ming Dynasty about Yunnan tea culture. Material 3: The 16th Yunnan Pu\'er Tea International Expo.'},
  '20.0': {stemEn:'Select the INCORRECT tea recommendation.', optionsEn:['A. Green tea to relieve uncle\'s travel fatigue','B. Red tea to warm aunt on a cold day','C. All teas are basically the same — I\'ll pour any kind'], explainEn:'Material 1 states teas differ greatly in characteristics and function — C is wrong.', examPointEn:'Information Application'},
  '20.1': {stemEn:'What does "节" mean in "烹瀹之节" (steps of tea preparation)?', optionsEn:['A. Festival','B. Step/method','C. Economize'], examPointEn:'Classical Chinese Vocabulary'},
  '20.2': {stemEn:'Which is NOT a reason for "Yunnan\'s lack of fine tea"?', optionsEn:['A. The land doesn\'t produce it','B. Locals don\'t know harvesting and processing','C. Don\'t know brewing methods'], explainEn:'The text says "非其地不产也" — the land DOES produce tea, so A is not a reason.', examPointEn:'Classical Chinese Comprehension'},
  '20.3': {stemEn:'Which topic does Material 2 cover?', optionsEn:['A. Production methods','B. Planting methods','C. Transportation methods'], examPointEn:'Content Classification'},
  '20.4': {stemEn:'True or False about the Tea Expo:\n(1) 4-day event at Spring City Theater (2) Uncle, aunt, and cousin can all find things of interest (3) They can enter the venue at 6pm on April 22', answerTextEn:'(1)× (2)√ (3)×', explainEn:'(1) Venue is Kunming Dianchi International Convention Center; (3) Hours are 9:00-17:00.', examPointEn:'Information Verification'},
  '20.5': {stemEn:'Evaluate a student\'s logo design for the Tea Expo.', answerTextEn:'Good design. The logo features teapot, tea leaves, and dove — green leaves symbolize nature; tea aroma is inviting; dove symbolizes peace. It fits the theme "Green Yunnan Tea, World Pu\'er."', examPointEn:'Design Evaluation'},
  '20.6': {stemEn:'Write two reasons to recommend visiting the Tea Expo.', answerTextEn:'①Many tea varieties with different characteristics and benefits — the Expo offers deeper understanding. ②Multiple quality tea companies showcase products across the entire tea industry chain — a rare opportunity.', examPointEn:'Persuasive Writing'},
  '25': {stemEn:'As a representative of Kunming students, share your hopes for the city\'s future development on the "Kids\' Eye on the World" show.', answerTextEn:'I hope Kunming continues to develop as a livable, workable, enjoyable, and visitable city, strengthening people\'s sense of happiness.', examPointEn:'Oral Expression'},
  '26': {stemEn:'Write about one unforgettable experience in Kunming. Requirements: 400+ words, genuine emotions, no real names/schools.', examPointEn:'Narrative Composition'}
},
cg2024: {
  '1': {stemEn:'Write characters from pinyin: childish spirit(zhìqì), garden(pǔ), pistil(ruǐ), cricket(xīshuài), perch(qīxī), wander(páihuái), nestle(yīwēi), fearless(bùjù), hammered and chiseled(chuízáo), bloom(zhàn).', answerTextEn:'childish; garden; pistil; cricket; perch; wander; nestle; fear; hammer; chisel; bloom', examPointEn:'Writing Words from Pinyin'},
  '2': {stemEn:'Select the INCORRECT pronunciation: A.comfort(jiè) B.force(qiáng) C.atmosphere(fēn) D.engrave(juān)', optionsEn:['A. 慰藉 jiè','B. 强迫 qiáng','C. 气氛 fēn','D. 镌刻 juān'], explainEn:'强迫 should be qiǎng.', examPointEn:'Pronunciation'},
  '3': {stemEn:'Select the INCORRECT pronunciation: A.stubborn(jué) B.envy(jí) C.command(chà) D.spine(jǐ)', optionsEn:['A. 倔强 jué','B. 嫉妒 jí','C. 叱咤 chà','D. 脊梁 jǐ'], explainEn:'叱咤 should be zhà.', examPointEn:'Pronunciation'},
  '4': {stemEn:'Select the INCORRECT pronunciation: A.appearance(mú) B.punish(chěng) C.trace back(sù) D.exquisite(tī)', optionsEn:['A. 模样 mú','B. 惩罚 chěng','C. 追溯 sù','D. 玲珑剔透 tī'], explainEn:'惩罚 should be chéng.', examPointEn:'Pronunciation'},
  '5': {stemEn:'Select the INCORRECT pronunciation: A.gleaming(huàng) B.bully(wǔ) C.clumsy(zhuō) D.resilient(jìng)', optionsEn:['A. 明晃晃 huàng','B. 欺侮 wǔ','C. 笨拙 zhuō','D. 坚劲 jìng'], explainEn:'明晃晃 should be huǎng.', examPointEn:'Pronunciation'},
  '6': {stemEn:'Select the group with all correctly written words.', optionsEn:['A. all night / capsized / tedious(error) / domain','B. bud / secluded(error) / fear / detect','C. fiddle / dry(error) / roar / feudal lord','D. indignant / discernment / completely / delay'], examPointEn:'Character Form'},
  '7': {stemEn:'Read the character chart: (1)"藏" is a ___ character, 10th stroke is ___. (2)In "Tibetan medicine/language/clothing" read ___; in "hiding a manga village" read ___.', answerTextEn:'phono-semantic; vertical stroke; zàng; cáng', examPointEn:'Character Structure & Polyphony'},
  '8': {stemEn:'Fill in idioms matching context about Erhai\'s moon, Cangshan\'s snow, etc.', optionsEn:['A. overwhelmingly beautiful / calm / dazzling array / dizzying','B. dazzling array / calm / overwhelmingly beautiful / overwhelmed','C. overwhelmingly beautiful / refreshed / dazzling array / overwhelmed','D. dazzling array / refreshed / overwhelmingly beautiful / dizzying'], examPointEn:'Idiom Usage'},
  '9': {stemEn:'Select the INCORRECT statement.', optionsEn:['A. Tom Sawyer by American Mark Twain','B. Focus on character descriptions in classics','C. Lin Daiyu\'s description with furrowed brows and expressive eyes','D. Zhao Mengfu — Song Dynasty calligrapher, strict and stately style'], explainEn:'Zhao Mengfu was Yuan Dynasty, not Song Dynasty.', examPointEn:'Literary Knowledge'},
  '10': {stemEn:'Choose the most appropriate age-related term for the context.', optionsEn:['A. 弱冠(20 years old)','B. 总角(child 8-13)','C. 豆蔻(girl ~13)','D. 垂髫(child)'], examPointEn:'Age Terminology'},
  '11': {stemEn:'Choose the best set of connective words.', optionsEn:['A. If...then...both...and','B. Because...so...both...and','C. If...then...regardless...all','D. Because...so...regardless...all'], examPointEn:'Connective Words'},
  '12': {stemEn:'Select the correct punctuation for the blanks.', optionsEn:['A. double quotes; semicolon+comma','B. single quotes; period+comma','C. double quotes; period+comma','D. single quotes; semicolon+comma'], examPointEn:'Punctuation'},
  '13': {stemEn:'Imitate the example: borrow from scenery to express emotion. Example (sad): flowers drooping. Now write for (happy): receiving school admission notice...', answerTextEn:'A gentle breeze caresses my face, roadside grass bows and smiles at me, birds sing on the branches.', examPointEn:'Imagery & Emotion'},
  '14': {stemEn:'Fill in classical poetry:\nStudy hard: "Read with purpose, ___"; "Don\'t say you started early, ___"; "Young and idle, ___"; Su Shi: "Who says life can\'t be young? ___! ___"; Two Children: "___?"', answerTextEn:'each character worth a thousand gold; someone started earlier; old age brings only sorrow; The stream before the gate can still flow west; Don\'t sing of white hair mocking old age; How do you know so much?', examPointEn:'Poetry Writing from Memory'},
  '15': {stemEn:'Fill in aspirational poetry: Su Shi\'s chrysanthemum resilience; Yu Qian\'s purity; Wen Tianxiang\'s patriotism; Gao Shi\'s confidence.', answerTextEn:'Chrysanthemum remains, frost-defying branches; Ground to powder I fear not; Leaving a loyal heart to shine through history; Who in the world doesn\'t know you', examPointEn:'Poetry Writing from Memory'},
  '16': {stemEn:'Read the classical text "Xiang Ji Abandons Study" — Xiang Yu as a youth studied writing, swords, then military strategy, but "略知其意，又不肯竟学" (grasped the gist but refused to study thoroughly). Answer questions.', contextEn:'Xiang Yu abandoned books, swords, and ultimately even military strategy, never finishing what he started.'},
  '16.0': {stemEn:'True or False:\n①"少" has the same meaning as in "少小离家老大回"\n②Xiang Yu was ambitious AND well-versed in literature and martial arts\n③"Not finishing study" was Xiang Yu\'s fatal flaw', answerTextEn:'①√ ②× ③√', explainEn:'Xiang Yu was ambitious but shallow — never mastered anything.', examPointEn:'Classical Chinese Comprehension'},
  '16.1': {stemEn:'Fill in original text: Why Xiang Yu wouldn\'t study writing, swords, or military strategy.', answerTextEn:'Writing only records names; swords defeat one person — not worth learning; learn to defeat ten thousand; grasped the gist but refused to finish studying', examPointEn:'Textual Evidence'},
  '16.2': {stemEn:'What insight do you gain from this story? Connect to real life.', answerTextEn:'One cannot succeed with ambition alone — perseverance is essential. Whatever we do, we must see it through and never give up halfway.', examPointEn:'Personal Reflection'},
  '17': {stemEn:'Read "Letter to Your Future Self" — three pieces of advice about being an idealist, being practical, and having courage to face flaws.', contextEn:'Three passages advising children: remain a steadfast idealist, be a grounded person, and have the courage to face your own shortcomings.'},
  '17.0': {stemEn:'Summarize the three aspects of the author\'s heartfelt advice.', answerTextEn:'①Be a steadfast idealist throughout life; ②Be a practical, grounded person; ③Have the courage to honestly confront your shortcomings.', examPointEn:'Content Summarization'},
  '17.1': {stemEn:'Select the correct statement.', optionsEn:['A. Beautiful girls always get things easily and become shallow','B. Only extremely smart boys can achieve great things','C. Discovering your flaws will only make you depressed','D. Sticking to your ideals teaches you to resist vanity\'s temptation'], examPointEn:'Reading Comprehension'},
  '17.2': {stemEn:'Discuss: "Choosing mediocrity is safe, but utterly colorless."', answerTextEn:'Mediocrity is safe but lacks pursuit and vibrancy. Life offers opportunities and challenges — we should bravely chase dreams and transcend the ordinary.', examPointEn:'Sentence Interpretation'},
  '17.3': {stemEn:'Write one sentence to your future self.', answerTextEn:'Stay curious, face your flaws honestly, embrace challenges bravely, and keep striving to improve.', examPointEn:'Creative Expression'},
  '18': {stemEn:'Read three materials about the National Reading Conference and children\'s reading statistics. Answer questions.', contextEn:'Material 1: 3rd National Reading Conference opens in Kunming; Material 2: Creative reading activities across China; Material 3: Chart of children\'s annual reading volume distribution.'},
  '18.0': {stemEn:'This year, the ___ National Reading Conference opened on ___/___ in ___.', answerTextEn:'3rd; April; 23rd; Kunming', examPointEn:'Information Extraction'},
  '18.1': {stemEn:'What information can you derive from Material 3\'s data?', answerTextEn:'①Most children read 11-30 books annually; ②Fewest children read 100+ books annually.', examPointEn:'Data Interpretation'},
  '18.2': {stemEn:'Recall a themed reading activity you participated in. Share your gains.', answerTextEn:'Reading accumulates writing material, improves writing, broadens horizons, and enriches knowledge.', examPointEn:'Personal Sharing'},
  '18.3': {stemEn:'Write two slogans to promote reading.', answerTextEn:'①Let reading nourish the soul; let wisdom illuminate the future. ②Books perfume the city; reading enriches life.', examPointEn:'Slogan Design'},
  '19': {stemEn:'Be your hometown\'s spokesperson — introduce a local specialty, project, or scenic spot (50 words max).', answerTextEn:'Dianchi Lake in Kunming is one of China\'s largest plateau lakes — flat terrain, clear water, stunning scenery — known as the "Southern Pearl."', examPointEn:'Promotional Writing'},
  '20': {stemEn:'Write an essay titled "___ at That Moment." Requirements: complete the title, specific content, clear theme, 400+ words, no real names.', examPointEn:'Semi-titled Composition'}
},
gd2024: {
  '1': {stemEn:'Write "一路追光" (Chasing Light All the Way) in brush calligraphy — correct, balanced, on the answer sheet, neat and within borders.', examPointEn:'Calligraphy'},
  '2': {stemEn:'Write characters from pinyin: gears(chǐlún), immature(yòuzhì), bright(míngmèi), books(shūjí), wander(páihuái), responsibility(zérèn).', answerTextEn:'gears; immature; bright; books; wander; responsibility', examPointEn:'Writing Words from Pinyin'},
  '3': {stemEn:'Select the group with all correct pronunciations.', optionsEn:['A. swan(hú) boast(xū) pass(shì) hazelnut(qín)','B. tremble(zhàn) embankment(dī) swollen(zhàng) latitude(wéi)','C. vine(wàn) Yan Mountain(yàn) provoke(xìn) raise livestock(xù)','D. shop(pù) render(xuàn) report(bǐng) discouraged(něi)'], explainEn:'A: 榛 zhēn; B: 颤 chàn; C: 燕山 yān. D is correct.', examPointEn:'Pronunciation'},
  '4': {stemEn:'Select the group with INCORRECTLY written words.', optionsEn:['A. all night / amazed / comfort / absolutely must','B. detect / desolate / cruel punishment / die worthily','C. marquis(error) / domain / debate(error) / accustomed','D. just right / cricket / sacrifice / bless in disguise'], explainEn:'C: 王候→王侯, 辨论→辩论.', examPointEn:'Character Form'},
  '5': {stemEn:'Select the pair where the underlined character has a DIFFERENT meaning.', optionsEn:['A. galloping(走) horse / rabbit ran(走) into a tree','B. when(及) midday / too much is as bad as too little(及)','C. together(俱) with him / tears and words all(俱) together','D. boiling water(汤) / midday sun like reaching into hot water(汤)'], explainEn:'A: both mean "run"; B: "及" = "when/reaching" vs "reaching up to"; C: both mean "all/together"; D: both mean "hot water."', examPointEn:'Word Meaning'},
  '6': {stemEn:'Which word is used INAPPROPRIATELY in the news broadcast?', optionsEn:['A. Readers gathered from all over (五湖四海)','B. Splashing Festival scenes made netizens burst into laughter (哄堂大笑)','C. Wherever our cultural relics are, they\'ll come home (天涯海角)','D. Many companies are eager to try (跃跃欲试)'], explainEn:'哄堂大笑 means everyone in a room laughing — doesn\'t fit the context of online viewing.', examPointEn:'Word Usage'},
  '7': {stemEn:'Select the INCORRECT custom-meaning pairing.', optionsEn:['A. New Year rice cake: everything improving yearly','B. New Year fish: abundance yearly','C. Carved bats on buildings: family reunion','D. Mid-Autumn mooncakes: happiness and reunion'], explainEn:'Carved bats symbolize fortune (福=homophone of 蝠), not reunion.', examPointEn:'Cultural Knowledge'},
  '8': {stemEn:'Select the most accurate evaluation of this calligraphy work.', optionsEn:['A. Rounded strokes with regular script intent','B. Wild brushwork, bold and flowing, done in one breath','C. Overall elegant and graceful, stable and balanced','D. Rigorous structure, even and spacious'], examPointEn:'Calligraphy Appreciation'},
  '9': {stemEn:'Select the INCORRECT statement about four student artworks paired with classic novels.', optionsEn:['A. The four books are Robinson Crusoe, Journey to the West, Water Margin, Nils','B. Robinson Crusoe by English Daniel Defoe','C. Nils is a world-renowned children\'s work with themes of homesickness','D. Writing a synopsis: read, understand, outline, condense, polish, connect'], explainEn:'The third artwork mentions "Zhuge Liang governing Shu" — that\'s "Romance of Three Kingdoms," not Water Margin.', examPointEn:'Literary Knowledge'},
  '10': {stemEn:'Read the school\'s activity announcement and answer questions.', contextEn:'School promotion calling for "Chasing Light Youth Growth Season" graduation activities.'},
  '10.0': {stemEn:'Replace "time flies, in the blink of an eye, six years passed" with the most appropriate idiom pair.', optionsEn:['A. Yearning for each day / days feel like years','B. White steed passing / grand momentum','C. Time flies like an arrow / days and months fly','D. Year after year / endlessly distant'], examPointEn:'Idiom Selection'},
  '10.1': {stemEn:'Which sentence uses the same rhetorical device (exaggeration) as the underlined sentence?', optionsEn:['A. The peanut shed its red coat — that goes without saying','B. He let out a great shout and the mountains shook three times','C. Past days like light smoke blown by breeze, like mist evaporated by sun','D. Forever grateful to my teacher, the school bulletin board, the red circles on my work'], explainEn:'The underlined = exaggeration; B also = exaggeration. A = personification; C = simile; D = parallelism.', examPointEn:'Rhetorical Devices'},
  '11': {stemEn:'Fill in poetry and evaluate literary characters in graduation messages.', answerTextEn:'When young don\'t work hard; children wish to serve parents but they may not wait; moistening silently; despite winds from all directions; leaving pure whiteness; resilient, optimistic Robinson; kind, brave Nils; powerful, loyal Sun Wukong; patriotic, humorous Lu Xun', examPointEn:'Poetry & Character Evaluation'},
  '12': {stemEn:'Which is NOT an appropriate way to collect six years of growth materials?', optionsEn:['A. Review awards, trophies, prizes','B. Plan a post-graduation vacation with family','C. Organize photos and videos from six years','D. Collect growth-related works'], explainEn:'Vacation planning is not collecting growth materials.', examPointEn:'Practical Knowledge'},
  '13': {stemEn:'Read "Sixteen Years Ago" (courtroom scene) and answer questions.', contextEn:'Li Dazhao\'s family meets him in court — old robe, no glasses, messy hair, but calm and kind expression.'},
  '13.0': {stemEn:'Find synonyms from the text: kind(和蔼)→___; quick-witted(机敏)→___; furious(火冒三丈)→___', answerTextEn:'kind/gentle(慈祥); clever/resourceful(机智); seething with rage(怒气冲冲)', examPointEn:'Synonym Extraction'},
  '13.1': {stemEn:'Paragraph ① describes Father\'s ___ and ___. From this we sense ___.', answerTextEn:'appearance; demeanor; that despite suffering cruel torture, Father remained strong and loving toward his family', examPointEn:'Character Description'},
  '13.2': {stemEn:'The dash in paragraph ④ serves to:', optionsEn:['A. Sound prolongation','B. Meaning shift','C. Explanation','D. Summarizing'], examPointEn:'Punctuation Function'},
  '13.3': {stemEn:'"A great power filled his heart" — what is this "great power"?', answerTextEn:'His faith in the revolutionary cause.', examPointEn:'Inferential Reading'},
  '13.4': {stemEn:'Many heroes like Li Dazhao inspire us. Let us learn from "heroes through the ages" and draw strength from their example.', examPointEn:'Personal Reflection'},
  '14': {stemEn:'Read about "Two Bombs, One Star" scientist Wang Xiji from Kunming — Southwest Associated University, studies in America, leading rocket development, to proposing manned spaceflight.', contextEn:'Wang Xiji: born in Kunming, studied at Southwest Associated University and in America, returned to lead China\'s first sounding rocket launch from a rice paddy, later proposing manned space programs.'},
  '14.0': {stemEn:'Use the timeline to organize events (4 blanks for the mind map).', answerTextEn:'①1940 (enrolled at Virginia Tech); ②1960 (successfully launched first sounding rocket); ③1958 led team to research rockets; ④1999 awarded "Two Bombs One Star" medal', examPointEn:'Information Organization'},
  '14.1': {stemEn:'Select the INCORRECT understanding of the title "Paving Stone for Aerospace."', optionsEn:['A. Wang Xiji built a solid foundation for China\'s space program','B. Like a humble paving stone, but essential for aerospace infrastructure','C. His success was mainly due to studying at Virginia Tech','D. Called a paving stone because he switched fields wherever needed'], examPointEn:'Title Interpretation'},
  '14.2': {stemEn:'Seeing Yunnan astronaut Gui Haichao complete his mission, what would 100-year-old Wang Xiji say?', answerTextEn:'Our space dream has become reality. The years of anonymity and hardship have been rewarded. You\'ve inherited our mission — truly the pride of our nation.', examPointEn:'Creative Expression'},
  '14.3': {stemEn:'As a young scientist of the new era, my dream is ___. To achieve it, I will (write two points).', answerTextEn:'Dream: to contribute to the nation and society. (1) Stay committed, cherish time, study diligently. (2) Keep learning new knowledge and skills, dare to explore.', examPointEn:'Personal Aspiration'},
  '15': {stemEn:'Read three materials about Xizhou Ancient Town, Mengzi\'s heritage, and Guandu District\'s intangible cultural heritage. Answer questions.', contextEn:'Material 1: Xizhou and thousand-year Mengzi history. Material 2: Yunnan\'s new tourism combinations. Material 3: Guandu District\'s intangible cultural heritage.'},
  '15.0': {stemEn:'Explain "不期而遇" (unexpected encounter) in context.', answerTextEn:'Meeting unexpectedly without arrangement — here referring to how the Yunnan-Vietnam Railway\'s meter gauge interweaves with French romantic charm.', examPointEn:'Vocabulary in Context'},
  '15.1': {stemEn:'True or False: ①Xizhou was the secondary capital of Nanzhao Kingdom ②Literary masters make Xizhou and Mengzi appealing because of their long history ③Material 2 introduces four new tourism combinations ④Intangible cultural heritage is very distant from us and doesn\'t need attention', answerTextEn:'①√ ②√ ③√ ④×', examPointEn:'Information Verification'},
  '15.2': {stemEn:'Choose a scenic spot from Material 3 and design a study trip plan.', examPointEn:'Research Planning'},
  '16': {stemEn:'Choose one:\n(1) "On the Path of Light: ___" — record the most memorable person or event from school\n(2) "My Future Self" — imagine your future\nRequirements: 400+ words, genuine emotions.', examPointEn:'Narrative Composition'}
},
pl2024: {
  '1': {stemEn:'Fill in characters from pinyin: invasion(qīnxí), oppression(yāpò), entrust(jìtuō), overturn(qīngfù), completely different(jiéránbùtóng), prosperity(xīngwàng).', answerTextEn:'invasion; oppression; entrust; overthrow; completely different; prosperity', examPointEn:'Writing Words from Pinyin'},
  '2': {stemEn:'Neatly copy Liu Shahe\'s words: "Ideals are lamps lighting the night road; ideals are roads leading you to dawn."', examPointEn:'Handwriting'},
  '3': {stemEn:'Read the passage about China\'s technological innovations and answer questions.', contextEn:'A passage about China\'s achievements in technology, economy, and culture, with character selection and idiom usage exercises.'},
  '3.0': {stemEn:'Choose the correct character: domain ①(预/誉/域); ②(坚/艰/兼)solid steps; not ③(伴/拌/绊)tripped by difficulties', answerTextEn:'域(domain); 坚(solid); 绊(trip)', examPointEn:'Character Selection'},
  '3.1': {stemEn:'Which four-character phrase is used INCORRECTLY?', optionsEn:['A. Art treasures see daylight again 重见天日','B. Rural areas look brand new 焕然一新','C. Thanks to their equanimity 心平气和','D. Makes them doubly inspired 倍感振奋'], explainEn:'心平气和 (calm, unhurried) doesn\'t fit describing scientific breakthroughs.', examPointEn:'Idiom Usage'},
  '3.2': {stemEn:'"然" in dictionary: ①yes/correct ②thus/so ③suffix indicating state. Which has the same meaning as in "肃然起敬" (respectfully)?', optionsEn:['A. 怡然自得 (contentedly)','B. 取之，信然 (indeed so)','C. 非然也 (not so)','D. 笑而然之 (smiled in agreement)'], explainEn:'Both 肃然 and 怡然 use "然" as a suffix indicating state.', examPointEn:'Character Meaning'},
  '3.3': {stemEn:'China\'s patent innovations are globally renowned — this comes from the spirit of "___."', optionsEn:['A. If you can renew yourself daily, do so day by day','B. Blue comes from indigo yet surpasses it','C. Don\'t say you started early; someone started earlier','D. Among three travelers, one is surely my teacher'], explainEn:'Only A (苟日新) captures the spirit of innovation.', examPointEn:'Quote Application'},
  '3.4': {stemEn:'How should primary students use electronic devices to aid learning?', answerTextEn:'Use them as learning aids — looking up information, watching educational videos. Control screen time to protect eyesight. Parents and teachers should guide information filtering.', examPointEn:'Critical Thinking'},
  '4': {stemEn:'Fill in poetry with the theme "Ideals and Aspirations":\nFrom "The Cowherd Star" "___,脉脉不得语"; "If someone knows where spring went,___"; "Spring breeze greens Jiangnan ___,___"; "The Horse Poem" "___,___"; From "Hurrying" "除___外…被___吹散了…被初阳___"; "not afraid of others\' ___"', answerTextEn:'A single water separating; call it back to stay together; again, when will the bright moon light my way home; When will the golden bridle come, galloping through autumn; wandering; breeze; evaporated; criticism', examPointEn:'Poetry Writing from Memory'},
  '5': {stemEn:'Graduation activities — write farewell messages and choose speech materials.', contextEn:'A graduation event called "Remember the Past, Set Sail for Dreams."'},
  '5.0': {stemEn:'Write a graduation message for Liu Jiajia (helpful, excellent grades, but sometimes arrogant).', answerTextEn:'Jiajia, you\'re kind and talented! Remember: "Pride brings loss; humility brings gain." Stay humble and your future will be even brighter!', examPointEn:'Personalized Writing'},
  '5.1': {stemEn:'For a speech on "Youth Should Aim High," which material does NOT fit?', optionsEn:['A. Hua Luogeng aspired from childhood to scale mathematics\' heights','B. Li Ning trained relentlessly to become an Olympic champion','C. Zhou Enlai resolved to "study for China\'s rise"','D. Lei Feng devoted himself to serving the people, doing good deeds for a thousand miles'], explainEn:'D is about selfless service, not about aiming high.', examPointEn:'Material Selection'},
  '6': {stemEn:'Read the classical text "Drawing a Snake and Adding Feet" and answer questions.', contextEn:'A man at a sacrificial feast wins the snake-drawing contest but foolishly adds feet to the snake, losing his wine to the runner-up.'},
  '6.0': {stemEn:'Explain "足" in two contexts: ①数人饮之不足 ②为蛇足者', answerTextEn:'①enough/sufficient ②feet/legs', examPointEn:'Classical Chinese Vocabulary'},
  '6.1': {stemEn:'True or False:\n①"之" has the same meaning in both sentences\n②"亡" has the same meaning as in "亡羊补牢"\n③"为" has different pronunciations in the two usages', answerTextEn:'①× ②√ ③√', explainEn:'①"之" = pronoun vs particle; ②"亡" = lose in both; ③"为" = wéi (draw) vs wèi (because).', examPointEn:'Classical Chinese Grammar'},
  '6.2': {stemEn:'Translate: "蛇固无足，子安能为之足？"', answerTextEn:'Snakes inherently have no feet — how can you draw feet for one?', examPointEn:'Classical Chinese Translation'},
  '6.3': {stemEn:'Why did the man "ultimately lose his wine"?', answerTextEn:'Snakes have no feet; he unnecessarily added them, so his drawing was invalid — an act of self-defeating excess.', examPointEn:'Causal Analysis'},
  '6.4': {stemEn:'The idiom "过犹不及" (going too far is as bad as not going far enough) comes to mind. What does "drawing a snake and adding feet" satirize?', answerTextEn:'It satirizes those who ignore objective reality, act presumptuously, and end up ruining things by overdoing them.', examPointEn:'Idiom & Moral'},
  '7': {stemEn:'Read four materials about sports and exercise, and answer questions.', contextEn:'Material 1: Kunming\'s 12th Minority Sports Games. Material 2: Outdoor exercise modes. Material 3: Class committee discussing student fitness. Material 4: Changchong Mountain outdoor activities.'},
  '7.0': {stemEn:'True or False: ①Changchong Mountain is great for outdoor exercise ②Minority athletes had the highest participation rate ③There are only three outdoor exercise modes', answerTextEn:'①√ ②√ ③×', examPointEn:'Information Verification'},
  '7.1': {stemEn:'The underlined sentence in Material 1 uses ___ and ___ expository methods. Their function is ___.', answerTextEn:'examples; statistics; highlighting the number and richness of sports events', examPointEn:'Expository Methods'},
  '7.2': {stemEn:'To learn about Kunming outdoor activities, read Material ___. From it, we learn ___.', answerTextEn:'2; outdoor sports are trending in Kunming with many modes that improve endurance, fitness, cardiopulmonary function, and muscle strength', examPointEn:'Material Reading'},
  '7.3': {stemEn:'Which classmate\'s opinion do you agree with? Give reasons using the materials.', answerTextEn:'Agree with the PE commissioner. Exercise builds fitness, immunity, and brain development. Education isn\'t just academics — it\'s holistic development.', examPointEn:'Argumentation'},
  '7.4': {stemEn:'Give Material 4 paragraph ②\'s described scene a name.', answerTextEn:'Afternoon Cloud Gazing', examPointEn:'Creative Title'},
  '7.5': {stemEn:'Give at least 2 suggestions for students\' holiday exercise.', answerTextEn:'①Exercise outdoors in sunshine and fresh air; ②Choose activities based on interest and ability; ③Start gradually and maintain consistency.', examPointEn:'Practical Advice'},
  '8': {stemEn:'Read "Zongzi Growing on Trees" and answer questions.', contextEn:'At age 5, the narrator is sick at home and thinks zongzi are a fruit. After dreaming of zongzi trees, the father travels 20 miles overnight for reeds and glutinous rice, and parents hang homemade zongzi on a tree to fulfill the child\'s wish.'},
  '8.0': {stemEn:'Summarize paragraph content: ①-② First seeing zongzi → ③-④___ → ⑤-⑦___ → ⑧-⑨___ → ⑩-⑪ Missing the tree zongzi', answerTextEn:'Mind full of zongzi thoughts; Cutting zongzi from the tree; Eating the zongzi', examPointEn:'Content Summarization'},
  '8.1': {stemEn:'Paragraph ⑩ describes what the parents did. Chronologically, this could be placed after which paragraph?', optionsEn:['A. Paragraph ②','B. Paragraph ③','C. Paragraph ④','D. Paragraph ⑤'], explainEn:'Para ④: child tells parents about wanting zongzi. Para ⑤: zongzi appear on tree. The parents\' actions happen between ④ and ⑤.', examPointEn:'Narrative Sequence'},
  '8.2': {stemEn:'The three underlined sentences specifically describe the zongzi\'s ___, expressing the author\'s love for zongzi.', answerTextEn:'shape, size, color, aroma, and taste', examPointEn:'Descriptive Detail'},
  '8.3': {stemEn:'Which is the most accurate understanding of the three underlined sentences\' technique?', optionsEn:['A. Using concrete objects to express emotions','B. Describing from multiple angles','C. Using specific examples to support a point','D. Capturing features to write specifically'], examPointEn:'Writing Technique'},
  '8.4': {stemEn:'How do you understand: "The experience of zongzi growing on trees that year will forever be my most cherished Dragon Boat memory"?', answerTextEn:'What\'s truly cherished isn\'t the zongzi themselves, but the parents\' selfless love — father traveling far for reeds and rice, mother wrapping zongzi through the night, then hanging them on the tree.', examPointEn:'Emotional Understanding'},
  '9': {stemEn:'Choose one:\nTopic 1: An unforgettable event from six years of school — write the cause, process, result, and feelings.\nTopic 2: "That Is a Scenery" — a narrative essay (not a scenic description essay; focus on people/events that brighten life).\nRequirements: genuine emotions, no real names.', examPointEn:'Narrative Composition'}
}
};

// ═══════════════════════════════════════════════════════════
// Apply translations + fill missing data
// ═══════════════════════════════════════════════════════════
function applyTranslations(data) {
  data.papers.forEach(p => {
    // Add titleEn
    if (TITLE_EN[p.id]) p.titleEn = TITLE_EN[p.id];

    // Update flags for papers where we've added answers
    if (p.id === 'yn2012' || p.id === 'yn2014') {
      p.hasAnswers = true;
    }
    if (p.id === 'yn2018' || p.id === 'km2018') {
      p.hasAnalysis = true; // We added explainEn
    }

    const tr = TR[p.id];
    if (!tr) return;

    (p.sections || []).forEach(sec => {
      // Add section nameEn if missing
      if (sec.nameEn) { /* already has it */ }

      (sec.questions || []).forEach(q => {
        const key = String(q.num);
        const t = tr[key];
        if (t) {
          if (t.stemEn) q.stemEn = t.stemEn;
          if (t.optionsEn) q.optionsEn = t.optionsEn;
          if (t.answerTextEn) q.answerTextEn = t.answerTextEn;
          if (t.explainEn) q.explainEn = t.explainEn;
          if (t.contextEn) q.contextEn = t.contextEn;
          if (t.examPointEn) q.examPointEn = t.examPointEn;
          // Fill in missing explain from explainEn source
          if (t.explainEn && !q.explain) {
            q.explain = ''; // Will show English explanation only
          }
        }

        // Apply examPoint translation
        if (q.examPoint && EP_EN[q.examPoint] && !q.examPointEn) {
          q.examPointEn = EP_EN[q.examPoint];
        }

        // Handle readingGroup sub-questions
        if (q.type === 'readingGroup' && q.subQuestions) {
          // Context translation
          const ct = tr[key];
          if (ct && ct.contextEn) q.contextEn = ct.contextEn;

          q.subQuestions.forEach((sq, si) => {
            // Try multiple key formats:
            // 1. "num.idx" (e.g. "19.0") — standard format
            // 2. "subNum" (e.g. "12" for dh2023/qj2023 style subNum keys)
            // 3. "num.fill" for poem fill sub-questions
            const sKey = key + '.' + si;
            let stActual = tr[sKey];
            if (!stActual && sq.subNum) {
              // Try subNum as direct key (strip parentheses/dashes)
              const snKey = String(sq.subNum).replace(/[()（）\-]/g, '').trim();
              stActual = tr[snKey];
              // Also try with section-level numbering like "21(1)"
              if (!stActual) stActual = tr[sq.subNum];
            }
            if (!stActual) {
              // Try "num.fill" for poem fill sub-questions
              stActual = tr[key + '.fill'];
            }
            if (stActual) {
              if (stActual.stemEn) sq.stemEn = stActual.stemEn;
              if (stActual.optionsEn) sq.optionsEn = stActual.optionsEn;
              if (stActual.answerTextEn) sq.answerTextEn = stActual.answerTextEn;
              if (stActual.explainEn) sq.explainEn = stActual.explainEn;
              if (stActual.examPointEn) sq.examPointEn = stActual.examPointEn;
              if (stActual.contextEn) sq.contextEn = stActual.contextEn;
            }
            if (sq.examPoint && EP_EN[sq.examPoint] && !sq.examPointEn) {
              sq.examPointEn = EP_EN[sq.examPoint];
            }
          });
        }
      });
    });
  });
}

// ═══════════════════════════════════════════════════════════
// Serialize data back to JS
// ═══════════════════════════════════════════════════════════
function serialize(data) {
  const indent = '  ';
  let out = `/**
 * xcsc_data.js — 小升初真题 Structured Exam Data (Bilingual Edition)
 * ${data.papers.length} papers from Yunnan Province (2012-2024)
 * All questions include Chinese + English bilingual fields
 * Loaded lazily by the app via loadXcscData()
 */
window.XCSC_DATA = `;

  out += JSON.stringify(data, null, 2)
    // Convert keys from "key": to key:  for JS object style
    .replace(/"(\w+)":/g, '$1:')
    // But restore string values that got unquoted
    .replace(/: "([^"]*)"/g, ":'$1'")
    .replace(/: true/g, ':true')
    .replace(/: false/g, ':false')
    .replace(/: null/g, ':null')
    .replace(/: (\d+)/g, ':$1');

  out += ';\n';
  return out;
}

// Run
applyTranslations(DATA);
const output = serialize(DATA);
const outPath = path.join(__dirname, '..', 'xcsc_data.js');
fs.writeFileSync(outPath, output, 'utf8');
console.log(`✓ Written ${outPath} (${(output.length/1024).toFixed(1)} KB)`);
console.log(`  ${DATA.papers.length} papers, bilingual edition`);

// Stats
let translated = 0, total = 0;
DATA.papers.forEach(p => {
  (p.sections||[]).forEach(s => {
    (s.questions||[]).forEach(q => {
      total++;
      if (q.stemEn) translated++;
      if (q.type === 'readingGroup' && q.subQuestions) {
        q.subQuestions.forEach(sq => {
          total++;
          if (sq.stemEn) translated++;
        });
      }
    });
  });
});
console.log(`  ${translated}/${total} questions with English translations`);
