/**
 * Generate literary analysis data files for all textbook lessons.
 * Creates analysis_g{N}s{M}.js with window.AN_G{N}S{M} = [...]
 *
 * Usage: node build/gen_analysis.js [grade] [semester]
 *   No args = generate all missing files
 *   node build/gen_analysis.js 4 1 = generate g4s1 only
 */
const vm = require('vm');
const fs = require('fs');

/* ── Genre database ── */
const GENRE_DB = {
  '古诗': {type:'古诗',subtype:'古典诗歌',
    cn:'本课为古典诗歌，是中国文学的瑰宝。古诗讲究韵律、对仗和意境，以凝练的语言表达丰富的情感和深邃的思想。',
    en:'Classical Chinese poetry — the crown jewel of Chinese literature. These poems achieve extraordinary compression: entire landscapes, philosophies, and emotions distilled into lines of five or seven characters, bound by strict tonal patterns and parallelism.'},
  '散文': {type:'散文',subtype:'叙事散文',
    cn:'散文是一种自由灵活的文学体裁，以真实的生活经验为素材，通过个性化的表达传递思想感情。本文语言优美，结构自然。',
    en:'The Chinese prose essay — a genre prizing authenticity and personal voice. Unlike fiction, it draws from real experience; unlike poetry, it breathes freely without formal constraints. The best essays feel like intimate conversation.'},
  '记叙文': {type:'记叙文',subtype:'叙事文',
    cn:'记叙文以叙述事件为主，通过对人物、事件的描写来表达主题。本文按照事件发展的顺序展开，层次清晰，情节生动。',
    en:'Narrative writing at its core — storytelling with purpose. The author arranges events not just chronologically but dramatically, using scene-setting, rising tension, and resolution to deliver meaning through experience rather than argument.'},
  '说明文': {type:'说明文',subtype:'科普说明文',
    cn:'说明文以介绍事物、阐明事理为目的，语言准确、条理清晰。本文运用多种说明方法，将复杂的知识深入浅出地呈现给读者。',
    en:'Expository writing — the art of making the complex clear. Through classification, comparison, analogy, and concrete examples, the author transforms specialized knowledge into accessible understanding without sacrificing accuracy.'},
  '小说': {type:'小说',subtype:'短篇小说',
    cn:'小说通过塑造人物、构建情节、描绘环境来反映社会生活。本文人物形象鲜明，情节引人入胜，语言富有表现力。',
    en:'Fiction as social mirror — characters, plot, and setting combine to illuminate human nature and society. The author creates a self-contained world where readers discover truth through the lives of imagined (or reimagined) people.'},
  '诗歌': {type:'诗歌',subtype:'现代诗',
    cn:'现代诗突破了古诗的格律限制，以自由的形式和现代的语言表达情感与思想。本诗意象丰富，节奏鲜明，情感真挚。',
    en:'Modern Chinese poetry — freed from classical meter, it finds its own music in imagery, rhythm, and the raw power of contemporary language. Each line is a deliberate choice, each break a breath.'},
  '寓言': {type:'寓言',subtype:'寓言故事',
    cn:'寓言用简短的故事寄托深刻的道理，是古老而智慧的文学形式。故事虽小，道理深远。',
    en:'The fable — ancient wisdom wearing a story\'s mask. In a few hundred words, animals speak, objects think, and ordinary situations reveal universal truths. The brevity is the point: the lesson should hit before you see it coming.'},
  '神话': {type:'神话',subtype:'中国神话',
    cn:'神话是人类最古老的文学形式之一，反映了先民对自然和世界的想象与解释。中国神话蕴含着丰富的民族精神和文化密码。',
    en:'Mythology — humanity\'s first literature. These stories are not mere fantasy; they encode a civilization\'s deepest values: perseverance (Jingwei filling the sea), sacrifice (Prometheus), creation itself (Pangu). Every myth is a philosophy in narrative form.'},
  '议论文': {type:'议论文',subtype:'论说文',
    cn:'议论文以论证为主要表达方式，通过提出论点、列举论据、进行论证来阐明作者的观点和立场。逻辑严密，说理透彻。',
    en:'Argumentative writing — the essay as intellectual combat. A thesis is staked, evidence marshaled, reasoning deployed, and counterarguments anticipated. The best argumentative prose persuades not through force but through the irresistible clarity of its logic.'},
  '文言文': {type:'文言文',subtype:'古典散文',
    cn:'文言文是中国古代的书面语言，以简洁精练著称。本文虽写于千百年前，其思想智慧至今仍有深刻的现实意义。',
    en:'Classical Chinese prose — a language so compressed that a single character can carry the weight of an English paragraph. Reading wenyanwen is like archaeology: beneath each terse phrase lies layers of allusion, history, and philosophy.'},
  '童话': {type:'童话',subtype:'童话故事',
    cn:'童话以丰富的想象和夸张的手法，创造出一个奇妙的幻想世界，在趣味中传递真善美的价值观。',
    en:'The fairy tale — where imagination builds entire worlds and impossible things happen as naturally as breathing. Behind the magic lies moral architecture: kindness rewarded, cruelty exposed, and courage always triumphant.'},
  '戏剧': {type:'戏剧',subtype:'话剧/戏剧文学',
    cn:'戏剧通过人物对话和舞台表演展现冲突，是文学与表演艺术的结合。本文对白精炼，冲突集中，人物个性鲜明。',
    en:'Drama — literature that lives and breathes on stage. Every line must do double duty: reveal character AND advance plot. The dialogue is a chess game, each speech a move toward inevitable confrontation.'},
  '拼音': {type:'拼音课',subtype:'语音教学',
    cn:'拼音是学习汉语的基础工具，通过声母、韵母和声调的组合，帮助学生准确发音和识字。',
    en:'Pinyin lessons — the phonetic foundation of Chinese literacy. These systematic sound-spelling exercises give young learners the tools to decode any character they encounter.'},
  '识字': {type:'识字课',subtype:'汉字启蒙',
    cn:'识字课通过趣味性的编排，帮助学生认识和书写汉字，感受汉字的形体美和文化内涵。',
    en:'Character recognition lessons — where children first discover that Chinese writing is not arbitrary but deeply logical: each character a small picture, a story, a piece of cultural DNA.'},
};

/* ── Technique templates ── */
const TECH_DB = {
  '比喻': {typeEn:'Metaphor',
    cn:'运用比喻手法，将抽象的概念具体化，使读者获得鲜明直观的感受，增强了表达的生动性和感染力。',
    en:'A metaphor bridges the abstract and concrete, giving readers a vivid sensory handle on ideas that might otherwise slip through their fingers. The comparison illuminates both sides — the thing described and the thing it\'s compared to.'},
  '拟人': {typeEn:'Personification',
    cn:'赋予事物以人的动作、情感或特征，使描写对象变得亲切生动，拉近了读者与描写对象之间的距离。',
    en:'Personification breathes life into the inanimate — rivers sing, mountains stand guard, flowers dance. By lending human qualities to non-human things, the writer creates empathy where none existed.'},
  '排比': {typeEn:'Parallelism',
    cn:'运用排比句式，增强语势，形成节奏感和韵律美，使表达更加充分有力，感情更加强烈奔放。',
    en:'Parallel structure creates rhythm and momentum — each phrase builds on the last, gathering force like waves approaching shore. The repetition is not redundancy but amplification.'},
  '对比': {typeEn:'Contrast',
    cn:'通过对比手法，将不同事物或同一事物的不同方面进行比较，突出各自的特点，深化了文章的主题和读者的理解。',
    en:'Contrast is the writer\'s spotlight — by placing opposites side by side, each quality becomes sharper, more vivid, more undeniable. What is large seems larger next to what is small.'},
  '夸张': {typeEn:'Hyperbole',
    cn:'运用夸张手法，对事物的特征进行放大或缩小的描述，突出事物的本质特点，增强表达效果。',
    en:'Hyperbole — deliberate exaggeration for effect. The writer knows (and the reader knows) this isn\'t literally true, but the overstatement captures an emotional truth that plain description would miss.'},
  '反复': {typeEn:'Repetition',
    cn:'通过词语或句式的反复使用，强调关键信息，增强语言的节奏感和情感的表达力度。',
    en:'Repetition is not carelessness but craft — each recurrence deepens the meaning, shifts the emphasis, or builds emotional intensity. Like a musical motif, it gains power through return.'},
  '设问': {typeEn:'Rhetorical Question',
    cn:'用设问的方式引起读者的思考和注意，在行文中制造悬念，然后自问自答，使论述更加深入透彻。',
    en:'The rhetorical question — not seeking an answer but planting one. By phrasing a statement as a question, the writer invites readers to think for themselves, making the eventual answer feel discovered rather than imposed.'},
  '侧面描写': {typeEn:'Indirect Description',
    cn:'不直接描写对象本身，而是通过周围事物的反应来间接展现对象的特点，这种\"不写而写\"的手法往往更具说服力。',
    en:'Instead of describing the subject directly, the author shows its effect on everything around it — a technique of strategic omission. What we don\'t see directly, we imagine more powerfully.'},
  '细节描写': {typeEn:'Detail',
    cn:'通过精准的细节刻画，让读者如临其境、如见其人。好的细节描写是文章的\"眼睛\"，最能打动人心。',
    en:'The telling detail — a single precise observation that makes an entire scene come alive. Great writers know that one perfect detail is worth a hundred generalizations.'},
  '首尾呼应': {typeEn:'Circular Closure',
    cn:'文章开头与结尾相互呼应，形成完整的结构闭环，使文章浑然一体，主题得到升华和强化。',
    en:'The ending echoes the beginning, but with transformation — we return to where we started, yet everything has changed. This circular structure gives the reader a sense of completion and inevitability.'},
  '借景抒情': {typeEn:'Emotion Through Scenery',
    cn:'作者将情感寄托于景物描写之中，使自然景观成为内心情感的外在表达，达到\"一切景语皆情语\"的艺术效果。',
    en:'The landscape becomes an emotional canvas — every mountain, river, and cloud is charged with the writer\'s feelings. In Chinese literary tradition, this fusion of scenery and sentiment is the highest form of lyrical expression.'},
  '动静结合': {typeEn:'Motion-Stillness Contrast',
    cn:'将动态描写与静态描写相结合，以动衬静或以静衬动，使画面更加立体生动，富有层次感。',
    en:'The interplay of motion and stillness — a rushing waterfall makes the surrounding rocks seem more solid; a motionless heron makes the flowing stream seem faster. Each state defines the other.'},
  '象征': {typeEn:'Symbolism',
    cn:'用具体的事物来象征抽象的概念或精神品质，使文章的主题更加含蓄深远，给读者留下丰富的想象空间。',
    en:'Symbolism gives abstract ideas a physical body — a road becomes a life journey, a seed becomes hope, a wall becomes division. The concrete object carries invisible freight.'},
  '列举': {typeEn:'Enumeration',
    cn:'通过列举多个具体事例或事物，使说明更加充分具体，增强文章的说服力和信息量。',
    en:'Enumeration — the power of the list. By stacking example upon example, the writer builds an overwhelming case. Each item adds weight; the cumulative effect is irresistible.'},
  '短句': {typeEn:'Short Sentences',
    cn:'运用短句，节奏紧凑有力，营造出紧张、兴奋或强调的效果。短句如鼓点，敲击读者的心灵。',
    en:'Short sentences. Punchy. Urgent. They hit like drumbeats, creating tension or emphasis that long, flowing sentences cannot achieve. The brevity is the power.'},
};

/* ── Lesson metadata (manually curated key lessons) ── */
const LESSON_META = {
  // G1
  '我上学了':{g:'识字',techs:['细节描写']},
  '天地人':{g:'识字',techs:['象征']},
  '金木水火土':{g:'识字',techs:['对比']},
  '口耳目':{g:'识字',techs:['细节描写']},
  '日月水火':{g:'识字',techs:['象征']},
  '对韵歌':{g:'识字',techs:['对比','排比']},
  '秋天':{g:'散文',techs:['拟人','细节描写']},
  '小小的船':{g:'诗歌',techs:['比喻','拟人']},
  '江南':{g:'古诗',techs:['反复','细节描写']},
  '四季':{g:'诗歌',techs:['拟人','排比']},
  '画':{g:'古诗',techs:['对比']},
  '大小多少':{g:'识字',techs:['对比']},
  '小书包':{g:'识字',techs:['列举']},
  '日月明':{g:'识字',techs:['象征']},
  '升国旗':{g:'记叙文',techs:['细节描写']},
  '影子':{g:'诗歌',techs:['比喻','拟人']},
  '比尾巴':{g:'诗歌',techs:['对比','设问']},
  '青蛙写诗':{g:'诗歌',techs:['拟人','比喻']},
  '雨点儿':{g:'童话',techs:['拟人','对比']},
  '明天要远足':{g:'诗歌',techs:['反复','细节描写']},
  '大还是小':{g:'散文',techs:['对比']},
  '项链':{g:'散文',techs:['比喻','细节描写']},
  '雪地里的小画家':{g:'诗歌',techs:['拟人','排比']},
  '乌鸦喝水':{g:'寓言',techs:['细节描写']},
  '小蜗牛':{g:'童话',techs:['拟人','细节描写']},
  // G4
  '观潮':{g:'散文',techs:['比喻','夸张','排比','动静结合']},
  '走月亮':{g:'散文',techs:['拟人','借景抒情','细节描写']},
  '现代诗二首':{g:'诗歌',techs:['比喻','拟人']},
  '繁星':{g:'散文',techs:['排比','借景抒情']},
  '一个豆荚里的五粒豆':{g:'童话',techs:['对比','象征']},
  '夜间飞行的秘密':{g:'说明文',techs:['设问','列举']},
  '呼风唤雨的世纪':{g:'说明文',techs:['对比','列举']},
  '蝴蝶的家':{g:'散文',techs:['设问','拟人']},
  '爬山虎的脚':{g:'说明文',techs:['比喻','细节描写']},
  '蟋蟀的住宅':{g:'说明文',techs:['拟人','细节描写','对比']},
  '盘古开天地':{g:'神话',techs:['夸张','排比','对比']},
  '精卫填海':{g:'神话',techs:['象征']},
  '普罗米修斯':{g:'神话',techs:['对比','细节描写']},
  '女娲补天':{g:'神话',techs:['夸张','排比']},
  '麻雀':{g:'记叙文',techs:['细节描写','对比','短句']},
  '爬天都峰':{g:'记叙文',techs:['对比','细节描写']},
  '牛和鹅':{g:'记叙文',techs:['对比','细节描写']},
  '一只窝囊的大老虎':{g:'记叙文',techs:['细节描写','对比']},
  '陀螺':{g:'记叙文',techs:['细节描写','象征']},
  '为中华之崛起而读书':{g:'记叙文',techs:['对比','细节描写','设问']},
  '梅兰芳蓄须':{g:'记叙文',techs:['对比','细节描写']},
  '延安，我把你追寻':{g:'诗歌',techs:['排比','象征','反复']},
  '王戎不取道旁李':{g:'文言文',techs:['设问','对比']},
  '西门豹治邺':{g:'记叙文',techs:['对比','细节描写']},
  '故事二则':{g:'记叙文',techs:['细节描写']},
  // G4S2
  '古诗词三首':{g:'古诗',techs:['借景抒情','对比']},
  '乡下人家':{g:'散文',techs:['拟人','排比','借景抒情']},
  '天窗':{g:'散文',techs:['比喻','对比']},
  '三月桃花水':{g:'散文',techs:['比喻','拟人','排比']},
  '琥珀':{g:'说明文',techs:['细节描写','设问']},
  '飞向蓝天的恐龙':{g:'说明文',techs:['列举','对比']},
  '纳米技术就在我们身边':{g:'说明文',techs:['列举','比喻']},
  '千年梦圆在今朝':{g:'说明文',techs:['列举','对比']},
  '短诗三首':{g:'诗歌',techs:['比喻','象征']},
  '绿':{g:'诗歌',techs:['排比','拟人']},
  '白桦':{g:'诗歌',techs:['比喻','拟人']},
  '在天晴了的时候':{g:'诗歌',techs:['拟人','细节描写']},
  '猫':{g:'散文',techs:['对比','细节描写','拟人']},
  '母鸡':{g:'散文',techs:['对比','细节描写']},
  '白鹅':{g:'散文',techs:['拟人','对比','夸张']},
  '海上日出':{g:'散文',techs:['细节描写','对比','排比']},
  '记金华的双龙洞':{g:'记叙文',techs:['细节描写','比喻']},
  '文言文二则':{g:'文言文',techs:['对比']},
  '小英雄雨来（节选）':{g:'小说',techs:['细节描写','对比','短句']},
  '我们家的男子汉':{g:'散文',techs:['细节描写','对比']},
  '芦花鞋':{g:'小说',techs:['细节描写','象征']},
  '"诺曼底号"遇难记':{g:'小说',techs:['短句','对比','细节描写']},
  '黄继光':{g:'记叙文',techs:['细节描写','短句']},
  '挑山工':{g:'记叙文',techs:['对比','象征','细节描写']},
  '宝葫芦的秘密（节选）':{g:'童话',techs:['夸张','细节描写']},
  '巨人的花园':{g:'童话',techs:['对比','象征','拟人']},
  '海的女儿':{g:'童话',techs:['象征','对比']},
  // G5
  '白鹭':{g:'散文',techs:['比喻','对比','排比']},
  '落花生':{g:'散文',techs:['对比','象征']},
  '桂花雨':{g:'散文',techs:['细节描写','借景抒情']},
  '珍珠鸟':{g:'散文',techs:['细节描写','拟人']},
  '搭石':{g:'散文',techs:['细节描写','象征']},
  '将相和':{g:'记叙文',techs:['对比','细节描写']},
  '什么比猎豹的速度更快':{g:'说明文',techs:['对比','列举','设问']},
  '冀中的地道战':{g:'说明文',techs:['列举','细节描写']},
  '猎人海力布':{g:'神话',techs:['细节描写','对比']},
  '牛郎织女（一）':{g:'神话',techs:['拟人','细节描写']},
  '牛郎织女（二）':{g:'神话',techs:['对比','夸张']},
  '少年中国说（节选）':{g:'议论文',techs:['排比','比喻','对比']},
  '圆明园的毁灭':{g:'记叙文',techs:['对比','排比','列举']},
  '小岛':{g:'记叙文',techs:['细节描写','象征']},
  '太阳':{g:'说明文',techs:['列举','对比','比喻']},
  '松鼠':{g:'说明文',techs:['拟人','细节描写']},
  '慈母情深':{g:'记叙文',techs:['细节描写','反复','短句']},
  '父爱之舟':{g:'散文',techs:['细节描写','象征','借景抒情']},
  '"精彩极了"和"糟糕透了"':{g:'记叙文',techs:['对比','细节描写']},
  '四季之美':{g:'散文',techs:['细节描写','排比','借景抒情']},
  '鸟的天堂':{g:'散文',techs:['对比','动静结合','细节描写']},
  '月迹':{g:'散文',techs:['象征','细节描写']},
  '古人谈读书':{g:'文言文',techs:['排比','对比']},
  '忆读书':{g:'散文',techs:['列举','细节描写']},
  '我的"长生果"':{g:'散文',techs:['比喻','细节描写']},
  // G5S2
  '祖父的园子':{g:'散文',techs:['拟人','排比','细节描写']},
  '月是故乡明':{g:'散文',techs:['借景抒情','对比']},
  '梅花魂':{g:'记叙文',techs:['象征','细节描写','首尾呼应']},
  '草船借箭':{g:'小说',techs:['细节描写','对比']},
  '景阳冈':{g:'小说',techs:['细节描写','夸张','短句']},
  '猴王出世':{g:'小说',techs:['夸张','排比','细节描写']},
  '红楼春趣':{g:'小说',techs:['细节描写','对比']},
  '青山处处埋忠骨':{g:'记叙文',techs:['细节描写','对比']},
  '军神':{g:'记叙文',techs:['细节描写','对比','侧面描写']},
  '清贫':{g:'记叙文',techs:['对比','细节描写']},
  '人物描写一组':{g:'小说',techs:['细节描写','对比']},
  '刷子李':{g:'小说',techs:['细节描写','侧面描写','对比']},
  '自相矛盾':{g:'寓言',techs:['对比']},
  '田忌赛马':{g:'记叙文',techs:['对比','细节描写']},
  '跳水':{g:'小说',techs:['短句','细节描写']},
  '威尼斯的小艇':{g:'散文',techs:['比喻','细节描写','动静结合']},
  '牧场之国':{g:'散文',techs:['拟人','排比','借景抒情']},
  '金字塔':{g:'说明文',techs:['列举','对比']},
  '杨氏之子':{g:'文言文',techs:['设问','对比']},
  '手指':{g:'散文',techs:['拟人','对比','排比']},
  '童年的发现':{g:'记叙文',techs:['细节描写','设问']},
  // G6
  '草原':{g:'散文',techs:['比喻','排比','借景抒情','动静结合']},
  '丁香结':{g:'散文',techs:['象征','借景抒情','比喻']},
  '花之歌':{g:'散文',techs:['拟人','排比','象征']},
  '七律·长征':{g:'诗歌',techs:['夸张','对比','排比']},
  '狼牙山五壮士':{g:'记叙文',techs:['细节描写','对比','短句']},
  '开国大典':{g:'记叙文',techs:['排比','细节描写']},
  '灯光':{g:'记叙文',techs:['首尾呼应','细节描写','象征']},
  '我的战友邱少云':{g:'记叙文',techs:['细节描写','侧面描写','对比']},
  '竹节人':{g:'散文',techs:['细节描写','对比']},
  '宇宙生命之谜':{g:'说明文',techs:['列举','设问','对比']},
  '故宫博物院':{g:'说明文',techs:['列举','细节描写']},
  '桥':{g:'小说',techs:['象征','短句','对比']},
  '穷人':{g:'小说',techs:['细节描写','对比','侧面描写']},
  '金色的鱼钩':{g:'记叙文',techs:['细节描写','象征']},
  '夏天里的成长':{g:'散文',techs:['排比','列举']},
  '盼':{g:'记叙文',techs:['细节描写','反复']},
  '只有一个地球':{g:'说明文',techs:['列举','比喻','对比']},
  '青山不老':{g:'记叙文',techs:['对比','象征']},
  '三黑和土地':{g:'诗歌',techs:['比喻','拟人','排比']},
  '月光曲':{g:'记叙文',techs:['细节描写','借景抒情','侧面描写']},
  '京剧趣谈':{g:'说明文',techs:['列举','对比']},
  '少年闰土':{g:'小说',techs:['对比','细节描写']},
  '好的故事':{g:'散文',techs:['象征','细节描写']},
  '我的伯父鲁迅先生':{g:'记叙文',techs:['细节描写','对比']},
  '有的人——纪念鲁迅有感':{g:'诗歌',techs:['对比','排比','反复']},
  // G6S2 (handled separately - already has rich data)
  '北京的春节':{g:'散文',techs:['列举','比喻','对比','排比','侧面描写','首尾呼应']},
  '腊八粥':{g:'小说',techs:['细节描写','拟人']},
  '匆匆':{g:'散文',techs:['排比','比喻','设问','拟人']},
  '藏戏':{g:'说明文',techs:['设问','列举','对比']},
  '鲁滨逊漂流记（节选）':{g:'小说',techs:['细节描写','对比']},
  '骑鹅旅行记（节选）':{g:'童话',techs:['拟人','细节描写']},
  '汤姆·索亚历险记（节选）':{g:'小说',techs:['细节描写','夸张']},
  '那个星期天':{g:'散文',techs:['细节描写','借景抒情']},
  '十六年前的回忆':{g:'记叙文',techs:['首尾呼应','细节描写','对比']},
  '为人民服务':{g:'议论文',techs:['排比','列举','对比']},
  '董存瑞舍身炸暗堡':{g:'记叙文',techs:['细节描写','短句']},
  '真理诞生于一百个问号之后':{g:'议论文',techs:['列举','设问']},
  '表里的生物':{g:'记叙文',techs:['细节描写','设问']},
  '他们那时候多有趣啊':{g:'小说',techs:['对比','设问']},
  '难忘的启蒙':{g:'散文',techs:['细节描写']},
  '同窗之情':{g:'散文',techs:['细节描写']},
  '致母校的一封信':{g:'记叙文',techs:['排比']},
  '毕业赠言':{g:'散文',techs:['排比']},
  // G7
  '春':{g:'散文',techs:['比喻','排比','拟人','动静结合','借景抒情']},
  '济南的冬天':{g:'散文',techs:['比喻','拟人','对比','借景抒情']},
  '雨的四季':{g:'散文',techs:['拟人','排比','细节描写','借景抒情']},
  '古代诗歌四首':{g:'古诗',techs:['借景抒情','对比']},
  '秋天的怀念':{g:'散文',techs:['细节描写','象征','反复']},
  '散步':{g:'散文',techs:['象征','对比','细节描写']},
  '散文诗二首':{g:'诗歌',techs:['象征','比喻']},
  '《世说新语》二则':{g:'文言文',techs:['比喻','对比']},
  '从百草园到三味书屋':{g:'散文',techs:['对比','细节描写','排比']},
  '再塑生命的人':{g:'记叙文',techs:['细节描写','比喻']},
  '《论语》十二章':{g:'文言文',techs:['排比','对比','比喻']},
  '纪念白求恩':{g:'议论文',techs:['对比','排比']},
  '植树的牧羊人':{g:'小说',techs:['对比','细节描写','象征']},
  '走一步，再走一步':{g:'记叙文',techs:['细节描写','象征']},
  '诫子书':{g:'文言文',techs:['对比','排比']},
  '动物笑谈':{g:'散文',techs:['细节描写','夸张']},
  '狼':{g:'文言文',techs:['细节描写','对比']},
  '皇帝的新装':{g:'童话',techs:['对比','夸张','反复']},
  '天上的街市':{g:'诗歌',techs:['比喻','拟人','象征']},
  '女娲造人':{g:'神话',techs:['拟人','细节描写']},
  '寓言四则':{g:'寓言',techs:['对比','象征']},
  // G7S2
  '邓稼先':{g:'记叙文',techs:['对比','排比','细节描写']},
  '郓稼先':{g:'记叙文',techs:['对比','排比','细节描写']},
  '说和做——记闻一多先生言行片段':{g:'记叙文',techs:['对比','排比','细节描写']},
  '回忆鲁迅先生（节选）':{g:'散文',techs:['细节描写']},
  '孙权劝学':{g:'文言文',techs:['对比','细节描写']},
  '黄河颂':{g:'诗歌',techs:['排比','比喻','象征']},
  '老山界':{g:'记叙文',techs:['细节描写','对比','借景抒情']},
  '谁是最可爱的人':{g:'记叙文',techs:['排比','细节描写','对比']},
  '土地的誓言':{g:'散文',techs:['排比','拟人','象征']},
  '木兰诗':{g:'古诗',techs:['排比','对比','夸张']},
  '阿长与《山海经》':{g:'散文',techs:['细节描写','对比','反复']},
  '老王':{g:'散文',techs:['细节描写','对比']},
  '台阶':{g:'小说',techs:['象征','细节描写','对比']},
  '卖油翁':{g:'文言文',techs:['对比','细节描写']},
  '叶圣陶先生二三事':{g:'散文',techs:['细节描写']},
  '驿路梨花':{g:'小说',techs:['象征','设问']},
  '最苦与最乐':{g:'议论文',techs:['对比','排比','设问']},
  '短文两篇':{g:'散文',techs:['象征','比喻']},
  '紫藤萝瀑布':{g:'散文',techs:['象征','比喻','借景抒情','细节描写']},
  '一棵小桃树':{g:'散文',techs:['象征','借景抒情','细节描写']},
  '外国诗二首':{g:'诗歌',techs:['象征','比喻']},
  '古代诗歌五首':{g:'古诗',techs:['借景抒情','对比']},
  '伟大的悲剧':{g:'记叙文',techs:['对比','细节描写']},
  '太空一日':{g:'记叙文',techs:['细节描写','短句']},
  '带上她的眼睛':{g:'小说',techs:['象征','对比','细节描写']},
  '活板':{g:'文言文',techs:['列举','细节描写']},
  // G8
  '消息二则':{g:'记叙文',techs:['短句','对比']},
  '首届诺贝尔奖颁发':{g:'记叙文',techs:['列举','细节描写']},
  '"飞天"凌空':{g:'记叙文',techs:['比喻','细节描写','短句']},
  '一着惊海天':{g:'记叙文',techs:['细节描写','短句','比喻']},
  '国行公祭，为佑世界和平':{g:'议论文',techs:['排比','对比']},
  '藤野先生':{g:'散文',techs:['细节描写','对比','象征']},
  '回忆我的母亲':{g:'记叙文',techs:['细节描写','对比']},
  '列夫·托尔斯泰':{g:'散文',techs:['比喻','夸张','对比','细节描写']},
  '美丽的颜色':{g:'记叙文',techs:['细节描写','对比','象征']},
  '三峡':{g:'文言文',techs:['对比','排比','借景抒情','动静结合']},
  '短文二篇':{g:'文言文',techs:['借景抒情','对比']},
  '与朱元思书':{g:'文言文',techs:['动静结合','比喻','排比']},
  '唐诗五首':{g:'古诗',techs:['借景抒情','对比']},
  '背影':{g:'散文',techs:['细节描写','反复','首尾呼应']},
  '白杨礼赞':{g:'散文',techs:['象征','排比','对比','反复']},
  '散文二篇':{g:'散文',techs:['比喻','排比']},
  '昆明的雨':{g:'散文',techs:['细节描写','借景抒情']},
  '中国石拱桥':{g:'说明文',techs:['列举','对比','细节描写']},
  '苏州园林':{g:'说明文',techs:['列举','对比','比喻']},
  '人民英雄永垂不朽':{g:'说明文',techs:['列举','细节描写']},
  '蝉':{g:'说明文',techs:['细节描写','拟人']},
  '梦回繁华':{g:'说明文',techs:['细节描写','列举']},
  '《孟子》三章':{g:'文言文',techs:['排比','对比','比喻']},
  '愚公移山':{g:'文言文',techs:['对比','夸张']},
  '周亚夫军细柳':{g:'文言文',techs:['对比','细节描写','侧面描写']},
  '诗词五首':{g:'古诗',techs:['借景抒情','对比']},
  // G8S2
  '社戏':{g:'小说',techs:['细节描写','借景抒情','对比']},
  '回延安':{g:'诗歌',techs:['排比','比喻','拟人']},
  '安塞腰鼓':{g:'散文',techs:['排比','比喻','短句','夸张']},
  '灯笼':{g:'散文',techs:['象征','细节描写']},
  '大自然的语言':{g:'说明文',techs:['拟人','列举','比喻']},
  '阿西莫夫短文两篇':{g:'说明文',techs:['设问','对比']},
  '大雁归来':{g:'散文',techs:['拟人','细节描写']},
  '时间的脚印':{g:'说明文',techs:['拟人','比喻','列举']},
  '桃花源记':{g:'文言文',techs:['对比','细节描写','象征']},
  '小石潭记':{g:'文言文',techs:['借景抒情','动静结合','细节描写']},
  '核舟记':{g:'文言文',techs:['列举','细节描写']},
  '《诗经》二首':{g:'古诗',techs:['反复','比喻']},
  '最后一次讲演':{g:'议论文',techs:['排比','对比','反复','设问']},
  '应有格物致知精神':{g:'议论文',techs:['列举','对比','设问']},
  '我一生中的重要抉择':{g:'议论文',techs:['列举','对比']},
  '庆祝奥林匹克运动复兴25周年':{g:'议论文',techs:['排比','对比']},
  '壶口瀑布':{g:'散文',techs:['比喻','排比','象征','动静结合']},
  '在长江源头各拉丹冬':{g:'散文',techs:['细节描写','比喻']},
  '登勃朗峰':{g:'散文',techs:['细节描写','比喻']},
  '一滴水经过丽江':{g:'散文',techs:['拟人','细节描写']},
  '《庄子》二则':{g:'文言文',techs:['比喻','对比']},
  '《礼记》二则':{g:'文言文',techs:['排比','比喻']},
  '马说':{g:'文言文',techs:['象征','比喻','排比']},
  '唐诗三首':{g:'古诗',techs:['借景抒情','对比']},
  // G9
  '沁园春·雪':{g:'诗歌',techs:['比喻','夸张','对比','排比']},
  '周总理，你在哪里':{g:'诗歌',techs:['反复','排比','拟人']},
  '我爱这土地':{g:'诗歌',techs:['象征','比喻']},
  '乡愁':{g:'诗歌',techs:['象征','排比','比喻']},
  '你是人间的四月天':{g:'诗歌',techs:['比喻','排比','拟人']},
  '我看':{g:'诗歌',techs:['拟人','比喻','借景抒情']},
  '敬业与乐业':{g:'议论文',techs:['列举','排比','对比','设问']},
  '就英法联军远征中国致巴特勒上尉的信':{g:'议论文',techs:['对比','排比','反复']},
  '论教养':{g:'议论文',techs:['对比','列举']},
  '精神的三间小屋':{g:'散文',techs:['比喻','排比','象征']},
  '岳阳楼记':{g:'文言文',techs:['对比','排比','借景抒情','象征']},
  '醉翁亭记':{g:'文言文',techs:['排比','借景抒情','动静结合']},
  '湖心亭看雪':{g:'文言文',techs:['对比','细节描写','借景抒情']},
  '诗词三首':{g:'古诗',techs:['借景抒情','对比','象征']},
  '故乡':{g:'小说',techs:['对比','象征','细节描写']},
  '我的叔叔于勒':{g:'小说',techs:['对比','细节描写','侧面描写']},
  '孤独之旅':{g:'小说',techs:['象征','细节描写','借景抒情']},
  '中国人失掉自信力了吗':{g:'议论文',techs:['设问','对比','排比']},
  '怀疑与学问':{g:'议论文',techs:['列举','对比']},
  '谈创造性思维':{g:'议论文',techs:['列举','设问']},
  '创造宣言':{g:'议论文',techs:['排比','比喻','列举']},
  '智取生辰纲':{g:'小说',techs:['细节描写','对比','侧面描写']},
  '范进中举':{g:'小说',techs:['夸张','对比','细节描写']},
  '三顾茅庐':{g:'小说',techs:['细节描写','对比','排比']},
  '刘姥姥进大观园':{g:'小说',techs:['细节描写','对比','夸张']},
  // G9S2
  '祖国啊，我亲爱的祖国':{g:'诗歌',techs:['象征','排比','对比']},
  '梅岭三章':{g:'诗歌',techs:['比喻','对比','夸张']},
  '短诗五首':{g:'诗歌',techs:['象征','比喻']},
  '海燕':{g:'散文',techs:['象征','对比','排比','拟人']},
  '孔乙己':{g:'小说',techs:['细节描写','对比','侧面描写','反复']},
  '变色龙':{g:'小说',techs:['对比','夸张','细节描写']},
  '溜索':{g:'小说',techs:['细节描写','对比','短句']},
  '蒲柳人家（节选）':{g:'小说',techs:['细节描写','比喻','夸张']},
  '鱼我所欲也':{g:'文言文',techs:['比喻','排比','对比']},
  '唐雎不辱使命':{g:'文言文',techs:['对比','细节描写']},
  '送东阳马生序':{g:'文言文',techs:['对比','细节描写']},
  '词四首':{g:'古诗',techs:['借景抒情','对比','象征']},
  '短文两篇_g9':{g:'散文',techs:['比喻','对比']},
  '山水画的意境':{g:'议论文',techs:['列举','比喻']},
  '无言之美':{g:'议论文',techs:['列举','对比','比喻']},
  '驱遣我们的想象':{g:'议论文',techs:['列举','设问']},
  '屈原（节选）':{g:'戏剧',techs:['排比','象征','拟人','夸张']},
  '天下第一楼（节选）':{g:'戏剧',techs:['对比','细节描写']},
  '枣儿':{g:'戏剧',techs:['象征','对比']},
  '曹刿论战':{g:'文言文',techs:['对比','细节描写']},
  '邹忌讽齐王纳谏':{g:'文言文',techs:['比喻','对比','排比']},
};

/* ── Helper: safe string ── */
function esc(s) {
  return s.replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\n/g,'\\n')
    .replace(/\u201c/g,'\\u201c').replace(/\u201d/g,'\\u201d')
    .replace(/\u2018/g,'\\u2018').replace(/\u2019/g,'\\u2019');
}

/* ── Build one analysis entry ── */
function buildEntry(lesson, grade, semester, idx) {
  const title = lesson.title;
  const meta = LESSON_META[title] || {};
  const genreKey = meta.g || (title.match(/[a-z]/) ? '拼音' : '散文');
  const genre = GENRE_DB[genreKey] || GENRE_DB['散文'];
  const techNames = meta.techs || ['细节描写'];

  const isPinyin = genreKey === '拼音';
  const isShizi = genreKey === '识字';
  const isClassical = genreKey === '文言文' || genreKey === '古诗';
  const hasText = lesson.text && lesson.text.length > 0;
  const textLen = hasText ? lesson.text.length : 0;

  let entry = {};
  entry.lessonId = title;

  // Genre
  entry.genre = {
    type: genre.type,
    subtype: genre.subtype,
    cn: genre.cn,
    en: genre.en
  };

  // Techniques
  if (!isPinyin && hasText) {
    entry.techniques = [];
    techNames.forEach((tName, ti) => {
      const tech = TECH_DB[tName];
      if (!tech) return;
      const paraIdx = Math.min(ti, textLen - 1);
      entry.techniques.push({
        para: paraIdx,
        items: [{
          type: tName,
          typeEn: tech.typeEn,
          cn: tech.cn,
          en: tech.en
        }]
      });
    });
  } else if (isPinyin) {
    entry.techniques = [{
      para: 0,
      items: [{
        type: '语音教学',
        typeEn: 'Phonetic Teaching',
        cn: '通过系统的声韵母教学，帮助学生建立准确的语音意识，为识字阅读打下基础。',
        en: 'Systematic phonetic instruction builds the sound-symbol connections that underpin all future reading and character recognition.'
      }]
    }];
  }

  // Writing
  entry.writing = {
    tips: [],
    gems: []
  };

  if (!isPinyin) {
    // Generate 1-2 tips based on techniques
    techNames.slice(0, 2).forEach(tName => {
      const tech = TECH_DB[tName];
      if (!tech) return;
      entry.writing.tips.push({
        cn: `学习本文中${tName}手法的运用，尝试在自己的作文中模仿类似的表达方式。`,
        en: `Study how ${tech.typeEn.toLowerCase()} is used in this text, then experiment with similar techniques in your own writing.`
      });
    });

    // Add a gem if text exists
    if (hasText && lesson.text[0]) {
      const firstLine = lesson.text[0].substring(0, 30);
      entry.writing.gems.push({
        text: firstLine + (lesson.text[0].length > 30 ? '...' : ''),
        cn: '开篇句子定下了全文的基调，值得仔细品味其遣词造句的精妙之处。',
        en: 'The opening line sets the tone for the entire piece — notice how every word choice is deliberate, establishing mood and direction from the very first breath.'
      });
    }
  }

  // Exam
  entry.exam = { quiz: [] };

  if (!isPinyin && !isShizi) {
    // Generate 1-2 quiz questions
    if (techNames.length > 0) {
      const t = TECH_DB[techNames[0]];
      if (t) {
        entry.exam.quiz.push({
          question: `本文主要运用了哪种修辞/写作手法？`,
          questionEn: `What is the primary literary technique used in this text?`,
          answer: 0,
          options: [
            techNames[0],
            techNames.length > 1 ? (Object.keys(TECH_DB).find(k => !techNames.includes(k)) || '反问') : '反问',
            Object.keys(TECH_DB).find(k => k !== techNames[0] && !techNames.includes(k)) || '通感',
            '以上都不是'
          ]
        });
      }
    }
  }

  // Era (G3+)
  if (grade >= 3 && !isPinyin && !isShizi) {
    entry.era = {
      cn: `本文选自部编版${grade}年级语文教材，是该学段重要的课文之一。通过学习本文，学生可以提升阅读理解能力和文学鉴赏水平。`,
      en: `Selected for the PEP Chinese textbook at grade ${grade} level, this text represents a key milestone in the curriculum. It develops both reading comprehension skills and literary appreciation appropriate for this stage of learning.`
    };
  }

  // Structure (G3+)
  if (grade >= 3 && hasText && textLen >= 3 && !isPinyin && !isShizi) {
    entry.structure = {
      type: textLen <= 5 ? '总分' : '总分总',
      outline: [
        {label:'开篇',labelEn:'Opening',weight:1,detail:false},
        {label:'展开',labelEn:'Development',weight:Math.max(1, textLen - 2),detail:true},
        {label:'结尾',labelEn:'Ending',weight:1,detail:false}
      ],
      cn: `全文共${textLen}个自然段，结构层次清晰。开篇引入主题，中间部分展开详细叙述或描写，结尾总结升华，首尾呼应，浑然一体。`,
      en: `The text spans ${textLen} paragraphs with clear structural logic. The opening establishes the theme, the middle section develops it through detailed narration or description, and the conclusion elevates the theme — creating a satisfying arc of discovery.`
    };
  }

  // Deep (G3+)
  if (grade >= 3 && !isPinyin && !isShizi) {
    entry.deep = {
      cultural: {
        cn: `本文蕴含的文化价值在于帮助学生理解中国语文教育的核心素养：语言建构与运用、思维发展与提升、审美鉴赏与创造、文化传承与理解。`,
        en: `This text embodies the four pillars of Chinese language education: linguistic competence, critical thinking, aesthetic appreciation, and cultural understanding. Each reading deepens the student's connection to these foundational values.`
      }
    };
  }

  // Classical (G7+ for 文言文)
  if (grade >= 7 && isClassical && genreKey === '文言文') {
    entry.classical = {
      keyWords: {
        cn: '本文包含多个重点文言实词和虚词，需要重点掌握其古今异义、一词多义和词类活用等现象。',
        en: 'This classical text contains key content words and function particles requiring mastery of ancient-modern meaning shifts, polysemy, and flexible word-class usage — the three pillars of wenyanwen vocabulary study.'
      },
      sentences: {
        cn: '注意本文中的特殊句式，如判断句、省略句、倒装句等，这些是中考文言文阅读的重点考查内容。',
        en: 'Pay attention to special sentence patterns: equative sentences, elliptical constructions, and inverted word order. These patterns recur across all classical texts and are testing staples.'
      },
      comparison: {
        cn: '对比文言文中的用字与现代汉语的表达差异，理解古今语言的演变规律，加深对汉语发展历史的认识。',
        en: 'Compare classical and modern Chinese expression — notice how a single ancient character often expands into a two-character modern word, and how word order has shifted over centuries. This comparison illuminates the living evolution of the Chinese language.'
      }
    };
  }

  // Exam points (G5+)
  if (grade >= 5 && !isPinyin && !isShizi) {
    entry.exam.points = [{
      type: '阅读理解',
      cn: `理解文章主旨和作者的思想感情是本课的核心考点。注意把握${techNames[0]}等写作手法在文中的具体运用及其表达效果。`,
      en: `Understanding the central theme and the author's emotional intent is the key exam focus. Pay special attention to how ${(TECH_DB[techNames[0]]||{}).typeEn||'the technique'} functions in context and its expressive effect.`
    }];
  }

  // Exam templates (G5+)
  if (grade >= 5 && !isPinyin && !isShizi) {
    entry.exam.templates = [{
      question: `分析本文的写作特色。`,
      questionEn: `Analyze the writing characteristics of this text.`,
      cn: `本文主要运用了${techNames.join('、')}等手法，语言${genreKey==='散文'?'优美生动':'准确有力'}，结构${textLen>5?'层次分明':'简洁明快'}，表达了作者深刻的思想感情。`,
      en: `This text primarily employs ${techNames.map(t=>(TECH_DB[t]||{}).typeEn||t).join(', ')}. The language is ${genreKey==='散文'?'elegant and vivid':'precise and powerful'}, the structure ${textLen>5?'well-layered':'concise and crisp'}, effectively conveying the author's profound thoughts and emotions.`
    }];
  }

  // Writing lab (G5+)
  if (grade >= 5 && !isPinyin && !isShizi) {
    entry.writing.lab = [{
      title: `模仿练习：${techNames[0]}`,
      titleEn: `Imitation Exercise: ${(TECH_DB[techNames[0]]||{}).typeEn||techNames[0]}`,
      cn: `仿照本文中${techNames[0]}的手法，写一个100字左右的片段，主题可以自选。注意把握${techNames[0]}的核心特点：形象生动、表达精准。`,
      en: `Model your writing on the ${(TECH_DB[techNames[0]]||{}).typeEn||'technique'} used in this text. Write a ~100-word passage on any topic, focusing on capturing the essence of the technique: vivid imagery and precise expression.`
    }];
  }

  // Deep extras (G5+)
  if (grade >= 5 && entry.deep) {
    entry.deep.crossText = {
      cn: `本文与同单元的其他课文形成互补关系，建议对比阅读，关注不同作者处理相似主题时的不同切入角度和表达策略。`,
      en: `This text complements others in the same unit. Compare how different authors approach similar themes from different angles — the contrast reveals not just different styles but different ways of thinking about the world.`
    };
  }

  return entry;
}

/* ── Serialize entry to JS ── */
function serializeEntry(entry) {
  let lines = [];
  lines.push(`  {`);
  lines.push(`    lessonId: '${esc(entry.lessonId)}',`);

  // Genre
  lines.push(`    genre: {type:'${esc(entry.genre.type)}',subtype:'${esc(entry.genre.subtype)}',`);
  lines.push(`      cn:'${esc(entry.genre.cn)}',`);
  lines.push(`      en:'${esc(entry.genre.en)}'`);
  lines.push(`    },`);

  // Era
  if (entry.era) {
    lines.push(`    era: {`);
    lines.push(`      cn:'${esc(entry.era.cn)}',`);
    lines.push(`      en:'${esc(entry.era.en)}'`);
    lines.push(`    },`);
  }

  // Structure
  if (entry.structure) {
    lines.push(`    structure: {`);
    lines.push(`      type:'${esc(entry.structure.type)}',`);
    lines.push(`      outline:[`);
    entry.structure.outline.forEach((o, i) => {
      const comma = i < entry.structure.outline.length - 1 ? ',' : '';
      lines.push(`        {label:'${esc(o.label)}',labelEn:'${esc(o.labelEn)}',weight:${o.weight},detail:${o.detail}}${comma}`);
    });
    lines.push(`      ],`);
    lines.push(`      cn:'${esc(entry.structure.cn)}',`);
    lines.push(`      en:'${esc(entry.structure.en)}'`);
    lines.push(`    },`);
  }

  // Techniques
  if (entry.techniques && entry.techniques.length) {
    lines.push(`    techniques: [`);
    entry.techniques.forEach((t, ti) => {
      lines.push(`      {para:${t.para},items:[`);
      t.items.forEach((it, ii) => {
        lines.push(`        {type:'${esc(it.type)}',typeEn:'${esc(it.typeEn)}',`);
        lines.push(`         cn:'${esc(it.cn)}',`);
        lines.push(`         en:'${esc(it.en)}'}`);
      });
      lines.push(`      ]}${ti < entry.techniques.length - 1 ? ',' : ''}`);
    });
    lines.push(`    ],`);
  }

  // Writing
  if (entry.writing) {
    lines.push(`    writing: {`);
    if (entry.writing.tips && entry.writing.tips.length) {
      lines.push(`      tips: [`);
      entry.writing.tips.forEach((t, i) => {
        lines.push(`        {cn:'${esc(t.cn)}',en:'${esc(t.en)}'}${i < entry.writing.tips.length - 1 ? ',' : ''}`);
      });
      lines.push(`      ],`);
    }
    if (entry.writing.gems && entry.writing.gems.length) {
      lines.push(`      gems: [`);
      entry.writing.gems.forEach((g, i) => {
        lines.push(`        {text:'${esc(g.text)}',cn:'${esc(g.cn)}',en:'${esc(g.en)}'}${i < entry.writing.gems.length - 1 ? ',' : ''}`);
      });
      lines.push(`      ]${entry.writing.lab ? ',' : ''}`);
    }
    if (entry.writing.lab && entry.writing.lab.length) {
      lines.push(`      lab: [`);
      entry.writing.lab.forEach((l, i) => {
        lines.push(`        {title:'${esc(l.title)}',titleEn:'${esc(l.titleEn)}',cn:'${esc(l.cn)}',en:'${esc(l.en)}'}${i < entry.writing.lab.length - 1 ? ',' : ''}`);
      });
      lines.push(`      ]`);
    }
    lines.push(`    },`);
  }

  // Exam
  if (entry.exam) {
    lines.push(`    exam: {`);
    if (entry.exam.points && entry.exam.points.length) {
      lines.push(`      points: [`);
      entry.exam.points.forEach((p, i) => {
        lines.push(`        {type:'${esc(p.type)}',cn:'${esc(p.cn)}',en:'${esc(p.en)}'}${i < entry.exam.points.length - 1 ? ',' : ''}`);
      });
      lines.push(`      ],`);
    }
    if (entry.exam.templates && entry.exam.templates.length) {
      lines.push(`      templates: [`);
      entry.exam.templates.forEach((t, i) => {
        lines.push(`        {question:'${esc(t.question)}',questionEn:'${esc(t.questionEn)}',cn:'${esc(t.cn)}',en:'${esc(t.en)}'}${i < entry.exam.templates.length - 1 ? ',' : ''}`);
      });
      lines.push(`      ],`);
    }
    if (entry.exam.quiz && entry.exam.quiz.length) {
      lines.push(`      quiz: [`);
      entry.exam.quiz.forEach((q, i) => {
        const opts = q.options.map(o => `'${esc(o)}'`).join(',');
        lines.push(`        {question:'${esc(q.question)}',questionEn:'${esc(q.questionEn)}',answer:${q.answer},options:[${opts}]}${i < entry.exam.quiz.length - 1 ? ',' : ''}`);
      });
      lines.push(`      ]`);
    }
    lines.push(`    },`);
  }

  // Deep
  if (entry.deep) {
    lines.push(`    deep: {`);
    const deepKeys = Object.keys(entry.deep);
    deepKeys.forEach((dk, di) => {
      const d = entry.deep[dk];
      lines.push(`      ${dk}: {cn:'${esc(d.cn)}',en:'${esc(d.en)}'}${di < deepKeys.length - 1 ? ',' : ''}`);
    });
    lines.push(`    }${entry.classical ? ',' : ''}`);
  }

  // Classical
  if (entry.classical) {
    lines.push(`    classical: {`);
    const cKeys = Object.keys(entry.classical);
    cKeys.forEach((ck, ci) => {
      const c = entry.classical[ck];
      lines.push(`      ${ck}: {cn:'${esc(c.cn)}',en:'${esc(c.en)}'}${ci < cKeys.length - 1 ? ',' : ''}`);
    });
    lines.push(`    }`);
  }

  lines.push(`  }`);
  return lines.join('\n');
}

/* ── Main: generate analysis file ── */
function generateFile(grade, semester) {
  const varName = `AN_G${grade}S${semester}`;
  const tbFile = `textbook_g${grade}s${semester}.js`;
  const outFile = `analysis_g${grade}s${semester}.js`;

  if (!fs.existsSync(tbFile)) {
    console.log(`  Skip: ${tbFile} not found`);
    return;
  }

  // Check if rich data already exists (g6s2 has hand-crafted data)
  if (fs.existsSync(outFile)) {
    try {
      const ctx2 = vm.createContext({window:{}});
      vm.runInContext(fs.readFileSync(outFile, 'utf8'), ctx2);
      const existing = ctx2.window[varName];
      if (existing && existing.length > 0 && existing[0].lessonId) {
        console.log(`  Skip: ${outFile} already has ${existing.length} correct-format entries`);
        return;
      }
    } catch(e) {}
  }

  // Load textbook
  const ctx = vm.createContext({});
  vm.runInContext(fs.readFileSync(tbFile, 'utf8'), ctx);
  const tbKey = Object.keys(ctx).find(k => k.startsWith('TB_'));
  const tb = ctx[tbKey];

  const lessons = [];
  (tb.units || []).forEach(u => {
    (u.lessons || [u]).forEach(l => lessons.push(l));
  });

  console.log(`  ${outFile}: generating ${lessons.length} entries...`);

  const entries = lessons.map((l, i) => buildEntry(l, grade, semester, i));

  let js = `/**\n * \u8BED\u5B99 YuZhou \u2014 Literary Analysis: Grade ${grade}, Semester ${semester}\n * Auto-generated \u2014 ${entries.length} lessons\n */\nwindow.${varName} = [\n`;
  js += entries.map((e, i) => serializeEntry(e) + (i < entries.length - 1 ? ',' : '')).join('\n');
  js += '\n];\n';

  fs.writeFileSync(outFile, js, 'utf8');

  // Verify
  try {
    const vctx = vm.createContext({window:{}});
    vm.runInContext(js, vctx);
    const arr = vctx.window[varName];
    console.log(`  \u2713 ${outFile}: ${arr.length} entries verified`);
  } catch(e) {
    console.error(`  \u2717 ${outFile}: syntax error!`, e.message);
  }
}

/* ── CLI ── */
const args = process.argv.slice(2);
if (args.length === 2) {
  generateFile(parseInt(args[0]), parseInt(args[1]));
} else {
  console.log('Generating analysis files for all grades...');
  for (let g = 1; g <= 9; g++) {
    for (let s = 1; s <= 2; s++) {
      generateFile(g, s);
    }
  }
}
