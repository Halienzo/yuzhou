/**
 * 语宙 YuZhou — Literary Analysis Data
 * Grade 9 Semester 2, Unit 5: Drama (戏剧)
 * Lessons 17-19: 屈原（节选）、天下第一楼（节选）、枣儿
 */
var LITERARY_G9S2_U5 = [

/* ─────────────────────────────────────────────── */
/*  Lesson 17: 屈原（节选）— 郭沫若                  */
/* ─────────────────────────────────────────────── */
{
  lessonId: '屈原（节选）',
  genre: {
    type: '戏剧',
    subtype: '历史剧·抒情独白',
    cn: '五幕历史话剧《屈原》中的第五幕第二场，核心为"雷电颂"——一段长篇抒情独白。郭沫若以浪漫主义手法，借战国屈原的形象影射抗日战争时期投降派的卖国行径，属于"借古讽今"的历史剧传统。独白体裁兼具诗歌与戏剧双重特征，被誉为"戏剧中的散文诗"。',
    en: 'An excerpt from Act V, Scene 2 of the five-act historical drama "Qu Yuan," centering on the famous "Ode to Thunder and Lightning" — a sustained lyrical monologue. Guo Moruo used Romanticism to channel the Warring States poet Qu Yuan as an allegory for the surrender faction during the Anti-Japanese War (1942). The monologue blends poetry and drama, often called "a prose poem within a play."'
  },
  era: {
    cn: '郭沫若（1892—1978）于1942年1月在重庆创作此剧。当时抗日战争进入最艰难的相持阶段，国民党消极抗日、积极反共，皖南事变后政治气氛极为压抑。郭沫若以屈原遭谗被囚的历史故事，影射国民党顽固派迫害进步人士的现实。剧中屈原是忠于楚国却被南后、靳尚等人陷害的爱国诗人，与抗战中坚持抗日的进步力量遥相呼应。',
    en: 'Guo Moruo (1892–1978) wrote this play in Chongqing in January 1942, during the most grueling phase of the Anti-Japanese War. After the Southern Anhui Incident, the KMT actively suppressed progressive voices while passively resisting Japan. Guo used Qu Yuan — the patriotic poet of Chu slandered and imprisoned by Queen Nan and the courtier Jin Shang — as an allegory for the KMT persecution of patriots. The play premiered on April 3, 1942, and caused a sensation in wartime Chongqing.'
  },
  structure: {
    type: '独白式层进结构',
    outline: [
      {section: '序幕铺垫', cn: '靳尚密令毒杀屈原，郑詹尹将屈原带出——交代阴谋背景', en: 'Jin Shang orders the poisoning of Qu Yuan; Zheng Zhanyin brings him out — establishing the conspiracy'},
      {section: '呼唤风雷', cn: '"风！你咆哮吧！"——以祈使句召唤自然力量，表达对黑暗沉寂的不满', en: '"Wind! Roar!" — imperative sentences summoning natural forces, expressing fury at darkness and silence'},
      {section: '赞美闪电', cn: '"电！你这宇宙中最犀利的剑"——将电比作剑，从外在武器转向内心之剑', en: '"Lightning! The sharpest sword in the universe" — metaphor of lightning as sword, pivoting from physical to spiritual weapon'},
      {section: '景仰光明', cn: '"光明呀，我景仰你"——由破坏转向建设，表达对光明的信仰', en: '"O Light, I revere you" — shift from destruction to aspiration, expressing faith in illumination'},
      {section: '自我牺牲', cn: '"炸裂呀，我的身体！"——愿以身殉道，与黑暗同归于尽', en: '"Burst apart, my body!" — willingness to sacrifice oneself, annihilating darkness at the cost of one\'s own being'},
      {section: '总结号召', cn: '"鼓动吧，风！咆哮吧，雷！闪耀吧，电！"——三者合一的终极呼唤', en: '"Blow, wind! Roar, thunder! Flash, lightning!" — the ultimate tripartite invocation'}
    ],
    cn: '独白按情感层层递进：从愤怒呼唤→歌颂力量→景仰光明→甘愿牺牲→总呼号，形成一条完整的情感弧线。每层都以感叹号密集推进，节奏由急促到磅礴。',
    en: 'The monologue escalates emotionally: from angry invocation → praising power → revering light → embracing self-sacrifice → final rallying cry. Each layer is propelled by cascading exclamation marks, the rhythm building from urgent to overwhelming.'
  },
  techniques: [
    {para: 3, items: [
      {type: '呼告（apostrophe）', typeEn: 'Apostrophe', cn: '"风！你咆哮吧！咆哮吧！尽力地咆哮吧！"——直接对无生命的自然力发出命令，三次"咆哮吧"构成排比递进，将风人格化为可以响应号召的战友。', en: '"Wind! Roar! Roar! Roar with all your might!" — directly commanding inanimate natural forces. The triple "Roar!" forms a climactic parallelism, personifying wind as a comrade who answers the call.'},
      {type: '反复', typeEn: 'Repetition', cn: '"咆哮吧"三次反复，"应该你咆哮的时候"两次反复——不是简单重复，而是情感的螺旋式上升，如同海浪一层高过一层。', en: 'Triple repetition of "Roar!" and double repetition of "now is the time for you to roar" — not mere redundancy but a spiral intensification of emotion, each wave cresting higher than the last.'}
    ]},
    {para: 4, items: [
      {type: '象征', typeEn: 'Symbolism', cn: '"电"象征正义的力量和人民的觉醒，"比铁还坚固的黑暗"象征反动统治势力。"有形的长剑"指被剥夺的权力和地位，"无形的长剑"指不可摧毁的精神与信念。', en: 'Lightning symbolizes the forces of justice and popular awakening; "darkness harder than iron" symbolizes reactionary rule. The "tangible sword" represents stripped political power; the "invisible sword" represents indestructible spirit and conviction.'},
      {type: '隐喻', typeEn: 'Extended Metaphor', cn: '"电，你这宇宙中的剑，也正是，我心中的剑"——将闪电与精神意志合二为一，外在自然力成为内在信念的投射。', en: '"Lightning, you sword of the cosmos, you are also the sword in my heart" — merging lightning with spiritual will, projecting inner conviction onto external natural force.'}
    ]},
    {para: 5, items: [
      {type: '拟人·通感', typeEn: 'Personification / Synesthesia', cn: '"光明呀，我景仰你，我景仰你，我要向你拜手，我要向你稽首"——对光明行古代跪拜之礼，将抽象的"光明"转化为可敬拜的神圣存在，视觉感受转化为宗教般的崇敬情感。', en: '"O Light, I revere you, I revere you, I bow to you, I prostrate before you" — performing ancient prostration before light, transforming the abstract concept into a sacred being worthy of worship; visual perception becomes religious devotion.'}
    ]},
    {para: 6, items: [
      {type: '夸张', typeEn: 'Hyperbole', cn: '"炸裂呀，我的身体！炸裂呀，宇宙！"——将个体牺牲扩展到宇宙维度，不惜以身殉道、与天地同毁的极端表达，显示屈原"虽九死其犹未悔"的决绝。', en: '"Burst apart, my body! Burst apart, universe!" — expanding individual sacrifice to cosmic scale. This extreme expression of willingness to destroy oneself along with the world echoes Qu Yuan\'s original "Though I die nine deaths, I will not repent."'},
      {type: '排比', typeEn: 'Parallelism', cn: '"把一切的有形，一切的污秽，烧毁了吧，烧毁了吧！"——"一切的……一切的……"排比加"烧毁了吧"反复，将摧毁黑暗的决心推至顶峰。', en: '"Burn away all that is material, all that is foul — burn it away!" — the "all that is..." parallelism combined with repeated "burn it away" drives the determination to destroy darkness to its climax.'}
    ]},
    {para: 7, items: [
      {type: '对仗·总括', typeEn: 'Antithetical Summary', cn: '"鼓动吧，风！咆哮吧，雷！闪耀吧，电！"——三句结构完全对称（动词+吧+主语），将全篇反复出现的风、雷、电三意象最终合流，如同交响乐的终章。', en: '"Blow, wind! Roar, thunder! Flash, lightning!" — three sentences in perfect structural symmetry (verb + imperative particle + subject), merging the three recurrent images of wind, thunder, and lightning into a symphonic finale.'}
    ]}
  ],
  writing: {
    tips: [
      {cn: '呼告手法在抒情文中的运用：直接对抽象事物或自然力发出呼唤，能极大增强情感力度。写作时注意呼告对象要与主题紧密关联。', en: 'Using apostrophe in lyrical writing: directly addressing abstract concepts or natural forces greatly intensifies emotion. Ensure the addressed object is closely related to the theme.'},
      {cn: '反复与排比的配合：相同句式反复出现时，每次都应有情感或意义的递进，避免单纯的机械重复。', en: 'Combining repetition with parallelism: when the same pattern recurs, each instance should escalate in emotion or meaning, avoiding mere mechanical duplication.'},
      {cn: '象征体系的内在一致性：风、雷、电、光明、火构成一组连贯的"正义力量"象征群；黑暗、土偶木梗构成"反动势力"象征群。写作时象征意象应形成体系。', en: 'Internal coherence of symbolic systems: wind, thunder, lightning, light, and fire form a unified cluster symbolizing justice; darkness and clay idols form the cluster of reactionary forces. When writing, symbolic images should form a coherent system.'}
    ],
    gems: [
      {text: '你能拔去我有形的长剑，你不能拔去我无形的长剑呀', cn: '"有形"与"无形"的对比极为精妙：敌人可以剥夺一切外在的东西——官职、自由、生命，却无法摧毁信念和精神。这一句蕴含了屈原《离骚》中"亦余心之所善兮，虽九死其犹未悔"的精神内核。', en: 'The contrast between "tangible" and "intangible" is masterly: enemies can strip away everything external — office, freedom, life — but cannot destroy conviction and spirit. This encapsulates the spiritual core of Qu Yuan\'s Li Sao: "What my heart holds dear, though I die nine deaths, I will not repent."'},
      {text: '光明呀，我景仰你，我景仰你，我要向你拜手，我要向你稽首', cn: '连用两个"景仰你"和两个古代敬礼（拜手、稽首），由轻到重，将对光明的崇敬推至宗教般的虔诚。"稽首"是古代最重的跪拜礼，头触地不起，用于祭天祀神——屈原将"光明"视为至高神祇。', en: 'Two "I revere you" followed by two progressively formal ancient salutations (bowing, full prostration) escalate reverence to religious piety. "Qishou" was the most solemn ancient prostration, head touching the ground — Qu Yuan treats Light as the supreme deity.'},
      {text: '把一切沉睡在黑暗怀里的东西，毁灭，毁灭，毁灭呀', cn: '"黑暗怀里"的拟人化令人毛骨悚然——黑暗如同邪恶的母亲，将一切罪恶孕育在自己的怀抱中。三个"毁灭"形成终章般的定音鼓，干脆决绝。', en: '"In the embrace of darkness" — this personification is chilling: darkness as an evil mother nurturing all wickedness in her bosom. The triple "destroy" strikes like a timpani in the finale, absolute and resolute.'}
    ],
    lab: [
      {cn: '仿写练习：选择一种自然力（如雨、海浪、星光），用呼告和排比手法写一段200字左右的抒情独白，表达某种强烈情感。', en: 'Imitation exercise: Choose a natural force (rain, waves, starlight) and write a lyrical monologue of about 200 characters using apostrophe and parallelism to express an intense emotion.'},
      {cn: '象征替换：将"风雷电"替换为现代意象（如互联网、音乐、知识），改写一段独白，体会象征手法如何为抽象主题赋形。', en: 'Symbol substitution: Replace "wind, thunder, lightning" with modern images (internet, music, knowledge) and rewrite a passage, experiencing how symbolism gives form to abstract themes.'}
    ]
  },
  exam: {
    points: [
      {cn: '理解"雷电颂"中风、雷、电、光明、火等意象的象征意义', en: 'Understand the symbolic meaning of wind, thunder, lightning, light, and fire in the "Ode to Thunder and Lightning"'},
      {cn: '分析历史剧"借古讽今"的创作手法及其时代背景（1942年抗战）', en: 'Analyze the "using the past to satirize the present" technique in historical drama and its wartime context (1942 Anti-Japanese War)'},
      {cn: '品味戏剧独白中排比、反复、呼告等修辞手法的表达效果', en: 'Appreciate the expressive effects of parallelism, repetition, and apostrophe in dramatic monologue'},
      {cn: '理解"有形的长剑"与"无形的长剑"所揭示的精神主题', en: 'Understand the spiritual theme revealed by "tangible sword" vs. "intangible sword"'}
    ],
    templates: [
      {cn: '赏析题："风！你咆哮吧！咆哮吧！尽力地咆哮吧！"请从修辞角度赏析这句话的表达效果。', en: 'Appreciation question: "Wind! Roar! Roar! Roar with all your might!" Analyze the expressive effect of this sentence from a rhetorical perspective.'},
      {cn: '理解题：屈原说"你能拔去我有形的长剑，你不能拔去我无形的长剑"，"有形的长剑"和"无形的长剑"分别指什么？', en: 'Comprehension question: Qu Yuan says "you can take my tangible sword, but you cannot take my intangible sword." What do the two swords refer to?'},
      {cn: '探究题：郭沫若为什么选择在1942年创作历史剧《屈原》？结合时代背景分析其创作意图。', en: 'Inquiry question: Why did Guo Moruo choose to write the historical drama "Qu Yuan" in 1942? Analyze his creative intent in light of the historical context.'}
    ],
    quiz: [
      {
        question: '"雷电颂"中，屈原把"电"比作什么？',
        questionEn: 'In the "Ode to Thunder and Lightning," what does Qu Yuan compare lightning to?',
        answer: 'B',
        options: ['A. 宇宙中最耀眼的灯', 'B. 宇宙中最犀利的剑', 'C. 宇宙中最响亮的鼓', 'D. 宇宙中最炽热的火']
      },
      {
        question: '郭沫若创作《屈原》的直接历史背景是什么？',
        questionEn: 'What was the immediate historical context of Guo Moruo\'s writing of "Qu Yuan"?',
        answer: 'C',
        options: ['A. 五四运动时期，倡导新文化', 'B. 北伐战争时期，鼓舞士气', 'C. 抗日战争相持阶段，借古讽今', 'D. 解放战争时期，呼唤和平']
      },
      {
        question: '独白中"土偶木梗"指的是什么？',
        questionEn: 'What do the "clay and wooden idols" refer to in the monologue?',
        answer: 'D',
        options: ['A. 东皇太一庙中的真正神灵', 'B. 屈原被囚禁时的刑具', 'C. 楚国百姓对屈原的供奉', 'D. 象征昏庸腐朽的当权者']
      },
      {
        question: '下列对"有形的长剑"和"无形的长剑"的理解，最准确的是哪项？',
        questionEn: 'Which is the most accurate interpretation of the "tangible sword" and "intangible sword"?',
        answer: 'A',
        options: ['A. 有形的长剑指被剥夺的权力地位，无形的长剑指坚定的精神信念', 'B. 有形的长剑指战场上的武器，无形的长剑指文学作品的力量', 'C. 有形的长剑指屈原的佩剑，无形的长剑指楚国的军事力量', 'D. 有形的长剑指身体的力量，无形的长剑指友谊的纽带']
      }
    ]
  },
  deep: {
    cultural: {
      cn: '《雷电颂》接续了中国文学"天问"传统——从屈原《天问》到阮籍"大人先生"到龚自珍"九州生气恃风雷"，文人以叩问天地的方式表达对黑暗现实的抗议。郭沫若将这一传统与西方浪漫主义（特别是雪莱《西风颂》"If Winter comes, can Spring be far behind?"的精神）融合，创造出既有中国古典气质又有现代戏剧张力的独白。屈原选择与黑暗同归于尽而非苟且偷生，体现了中国士人"杀身成仁"的价值观。',
      en: 'The "Ode to Thunder and Lightning" continues China\'s "questioning heaven" literary tradition — from Qu Yuan\'s "Heavenly Questions" to Ruan Ji\'s "Great Man" to Gong Zizhen\'s "The vitality of the nine provinces depends on wind and thunder." Scholars challenge heaven and earth to protest dark realities. Guo Moruo fused this tradition with Western Romanticism (especially the spirit of Shelley\'s "Ode to the West Wind": "If Winter comes, can Spring be far behind?"), creating a monologue with both classical Chinese temperament and modern dramatic tension. Qu Yuan\'s choice to perish with darkness rather than live in compromise embodies the Confucian value of "sacrificing one\'s life for righteousness."'
    },
    crossText: {
      cn: '与本单元另两篇戏剧形成鲜明对比：《天下第一楼》以写实主义白描社会百态，《枣儿》以象征主义寄托乡愁——而《屈原》以浪漫主义直抒胸臆。三篇分别代表中国话剧的三种主要风格。若向上追溯，可与九年级上册的《湖心亭看雪》比较：张岱以极简笔墨写孤独，屈原以极繁笔墨写愤怒，两者都是"独"——一个是审美的独，一个是抗争的独。',
      en: 'Sharp contrast with the other two plays in this unit: "The Best Restaurant" uses realism to depict social life; "Dates" uses symbolism to convey nostalgia — while "Qu Yuan" uses Romanticism for direct emotional expression. The three represent the three main styles of modern Chinese drama. Looking back, compare with "Viewing Snow at Huxin Pavilion" (G9 S1): Zhang Dai uses extreme minimalism to write solitude; Qu Yuan uses extreme verbosity to write fury. Both center on "aloneness" — one aesthetic, one defiant.'
    }
  }
},

/* ─────────────────────────────────────────────── */
/*  Lesson 18: 天下第一楼（节选）— 何冀平            */
/* ─────────────────────────────────────────────── */
{
  lessonId: '天下第一楼（节选）',
  genre: {
    type: '戏剧',
    subtype: '京味话剧·世情剧',
    cn: '三幕话剧《天下第一楼》节选自第三幕，是典型的"京味话剧"——继老舍《茶馆》之后北京人艺最重要的现实主义剧目。以清末民初北京老字号烤鸭店"福聚德"为舞台，通过一餐一饮间的人情冷暖折射社会变迁。属于"行当戏"（以特定行业为背景的戏剧），兼具商业史诗与人物群像的特点。',
    en: 'Excerpt from Act III of the three-act play "The Best Restaurant Under Heaven," a quintessential "Beijing-flavor play" — the most important realist drama at the Beijing People\'s Art Theatre after Lao She\'s "Teahouse." Set in "Fujude," a time-honored Beijing roast duck restaurant in the late Qing/early Republic, it reflects social change through the warmth and coldness of daily dining. A "trade play" (drama set in a specific industry), combining commercial epic with ensemble character study.'
  },
  era: {
    cn: '何冀平（1951— ），毕业于中央戏剧学院戏剧文学系，曾任北京人民艺术剧院编剧。1985年，她因一篇关于全聚德烤鸭店的外国记者报道产生灵感，花两年深入采访，甚至考取了二级厨师证。1988年6月12日在首都剧场首演，由夏淳、顾威执导。演出后轰动京城，累计演出超过600场，仅次于《茶馆》，获文华奖和曹禺戏剧文学奖。剧中"福聚德"以全聚德烤鸭店为原型。',
    en: 'He Jiping (b. 1951) graduated from the Central Academy of Drama. In 1985, a foreign journalist\'s article about Quanjude Roast Duck inspired her. She spent two years researching, even earning a second-class chef\'s certificate. The play premiered at the Capital Theatre on June 12, 1988, directed by Xia Chun and Gu Wei. It was a sensation, accumulating over 600 performances (second only to "Teahouse"), winning the Wenhua Award and the Cao Yu Drama Literature Prize. "Fujude" in the play is modeled on Quanjude.'
  },
  structure: {
    type: '多线并进·矛盾交织',
    outline: [
      {section: '开张盛景', cn: '大年初六福聚德开张，"响案板"仪式——表面繁荣的铺垫', en: 'Grand reopening on the 6th day of New Year, the "sounding board" ceremony — setting up surface prosperity'},
      {section: '东家索钱', cn: '唐茂昌强支五百块钱，暗讽卢孟实在老家置产——内部蛀虫的第一层矛盾', en: 'Tang Maochang demands 500 dollars and insinuates Lu Mengshi bought property back home — first layer of internal parasitism'},
      {section: '赏罚分明', cn: '卢孟实罚看落子的伙计、赏成顺——展现其管理才能和"伙计也要体面"的理念', en: 'Lu Mengshi punishes a truant waiter and rewards Chengshun — showcasing management talent and his belief that "workers deserve dignity"'},
      {section: '师傅撂杆', cn: '罗大头与卢孟实冲突，揭父亲被称的旧伤，罗大头撂杆走人——技术骨干的叛离', en: 'Luo Datou clashes with Lu, dredging up the humiliation of Lu\'s father being weighed like livestock — the defection of a key craftsman'},
      {section: '雪上加霜', cn: '唐茂盛借钱并要带走常贵——最后的支柱也被抽走', en: 'Tang Maosheng borrows money and takes away Changgui — even the last pillar is removed'},
      {section: '一语定调', cn: '修鼎新感叹"一个人干，八个人拆"——全剧主题的高度概括', en: 'Xiu Dingxin sighs "One man builds while eight tear it down" — the ultimate summation of the play\'s theme'}
    ],
    cn: '节选的六段情节如同多米诺骨牌依次倒下：每解决一个矛盾就出现新的更大矛盾，形成"繁华中的崩塌"的悲剧节奏。从"响案板"的热闹开场到修鼎新的冷叹收束，构成强烈的反讽效果。',
    en: 'The six episodes fall like dominoes: each resolved conflict triggers a larger one, creating a tragic rhythm of "collapse within prosperity." From the festive "sounding board" opening to Xiu Dingxin\'s cold sigh at the close, a powerful ironic arc emerges.'
  },
  techniques: [
    {para: 1, items: [
      {type: '场面描写（白描）', typeEn: 'Scene Description (Plain Sketch)', cn: '"掌案的把砧板剁得当当响，掌勺的啪啪啪地敲着炒勺"——用声音的细节（当当、啪啪啪）而非华丽辞藻来还原老北京饭庄的开张场面，是京味话剧的标志性手法。', en: '"The chopping board rings dang-dang, the ladle clangs pa-pa-pa" — using sound details rather than ornate language to recreate an old Beijing restaurant\'s opening day, a hallmark technique of Beijing-flavor drama.'}
    ]},
    {para: 3, items: [
      {type: '对比（人物塑造）', typeEn: 'Contrast (Characterization)', cn: '卢孟实同时处罚看落子的伙计和厚赏成顺——一罚一赏之间，刻画出他"严而有情"的管理者形象。"让福聚德的伙计也体面"一语，揭示了他对底层劳动者尊严的维护。', en: 'Lu Mengshi simultaneously punishes a truant waiter and generously rewards Chengshun — the contrast between penalty and reward carves out his image as a "strict yet caring" manager. His declaration that "Fujude\'s workers deserve dignity" reveals his defense of working-class honor.'}
    ]},
    {para: 4, items: [
      {type: '揭伤（戏剧冲突激化）', typeEn: 'Wound-Revealing (Conflict Escalation)', cn: '罗大头揭卢孟实父亲"被人用大秤当牲口称"的旧伤——这是全剧最残酷的台词之一。它将阶级矛盾赤裸裸地呈现：卢孟实再能干，在旧社会等级体系中仍是"五子行"的下等人。', en: 'Luo Datou dredges up the wound of Lu\'s father "being weighed on a giant scale like livestock" — one of the play\'s cruelest lines. It lays class conflict bare: no matter how capable Lu is, in the old hierarchy he remains a lowly "tradesman."'},
      {type: '潜台词', typeEn: 'Subtext', cn: '"卢孟实凄惨地笑着赶走了罗大头"——舞台说明中的"凄惨地笑"蕴含丰富潜台词：不能怒（罗大头是技术支柱）、不能哭（身为管理者的尊严）、不能说（身世之痛无法言说），只能以苦笑消解。', en: '"Lu laughs a bleak, shuddering laugh and orders Luo out" — the stage direction "laughs bleakly" carries rich subtext: he cannot rage (Luo is indispensable), cannot weep (managerial dignity), cannot speak (the pain of his origins is unspeakable) — he can only dissolve it in a bitter laugh.'}
    ]},
    {para: 5, items: [
      {type: '层层加码', typeEn: 'Escalating Pressure', cn: '唐茂盛不仅借钱，还要带走堂头常贵——"一拳砸在柜台上"的动作说明将卢孟实逼到了情感极限。修鼎新的"一个人干，八个人拆"如同判决书般为全局定调。', en: 'Tang Maosheng not only borrows money but takes away Changgui — the stage direction "slams his fist on the counter" shows Lu pushed to emotional breaking point. Xiu Dingxin\'s "One man builds while eight tear it down" serves as a verdict, setting the tone for the entire play.'}
    ]},
    {para: 6, items: [
      {type: '点题式收束', typeEn: 'Thematic Coda', cn: '"一个人干，八个人拆"——此句出自旁观者修鼎新之口，以第三人称视角冷静概括，比当事人卢孟实的愤怒更具穿透力。数字对比（一人vs八人）极为精练地揭示了福聚德由盛转衰的根本原因。', en: '"One man builds while eight tear it down" — spoken by the observer Xiu Dingxin in calm third-person perspective, this is more penetrating than Lu\'s own fury. The numerical contrast (one vs. eight) concisely reveals the fundamental cause of Fujude\'s decline.'}
    ]}
  ],
  writing: {
    tips: [
      {cn: '群像塑造：本剧通过台词和动作在极短篇幅内刻画了五六个鲜明人物。写作时可学习"一句话定性格"的技巧——如唐茂昌的"我一个东家支几个钱"（霸道）、罗大头的"我一撂杆不干，福聚德就得关门"（恃才自傲）。', en: 'Ensemble characterization: the play carves out five or six vivid characters in very short space through dialogue and action. Learn the "one line defines personality" technique — Tang Maochang\'s "I\'m an owner, can\'t I take a few dollars?" (domineering), Luo Datou\'s "If I quit, Fujude closes" (arrogant pride in one\'s skill).'},
      {cn: '用行业细节代替抽象叙述：作者不说"饭店生意好"，而写"响案板"的声音；不说"社会地位低"，而写"用大秤当牲口称"。以具体代替抽象，以细节代替概念。', en: 'Replace abstract narration with trade details: the author never says "business is good" — she writes the sound of the "sounding board." Never says "low social status" — she writes "weighed on a giant scale like livestock." Concrete replaces abstract; detail replaces concept.'},
      {cn: '戏剧中的"冰山理论"：本剧大量使用潜台词。卢孟实"凄惨地笑"背后是无法言说的痛苦；男孩说"我爹在城里又有了一个家"背后是整个家庭的破碎。写对话时，让角色说出的话少于他心里想的。', en: 'The "iceberg theory" in drama: this play relies heavily on subtext. Behind Lu\'s "bleak laugh" lies unspeakable pain. When writing dialogue, have characters say less than they think.'}
    ],
    gems: [
      {text: '一个人干，八个人拆', cn: '全剧最经典的一句台词。用极简的数字对比（一vs八）揭示了一个深刻的社会命题：个人的才能再突出，也敌不过制度性的消耗与寄生。"干"与"拆"的对立也暗喻旧社会能人的悲剧宿命。', en: 'The play\'s most iconic line. With a minimal numerical contrast (one vs. eight), it reveals a profound social proposition: no individual talent can withstand institutional parasitism. The opposition of "build" and "tear down" also implies the tragic fate of capable people in the old society.'},
      {text: '卢孟实凄惨地笑着赶走了罗大头', cn: '这个舞台说明是全剧最精彩的"动作语言"：不是怒目圆睁，不是拍案而起，而是"凄惨地笑"。这个笑容里有被揭伤的痛、不能发作的隐忍、身为管理者的克制，以及对命运的无奈接受。', en: 'This stage direction is the play\'s most brilliant "action language": not glaring eyes, not slamming the table, but "laughing bleakly." In this laugh are the pain of exposed wounds, the endurance of suppressed fury, managerial restraint, and resigned acceptance of fate.'},
      {text: '让福聚德的伙计也体面', cn: '一个"也"字道出了旧社会底层劳动者的处境——"体面"本是人之常情，却因为身处"五子行"而成为需要争取的奢侈品。卢孟实的管理哲学超越了时代，却也注定与旧制度产生根本冲突。', en: 'The word "also" in "workers also deserve dignity" reveals the plight of laborers in the old society — "dignity" should be a basic right, yet for those in the despised trades, it becomes a luxury to fight for. Lu\'s management philosophy transcends his era, which is precisely why it is doomed to clash with the old order.'}
    ],
    lab: [
      {cn: '角色改写：以罗大头的视角改写他与卢孟实冲突的场景，让读者同时理解罗大头的委屈和傲气，体会"一个事件，多种声音"。', en: 'Perspective rewrite: Rewrite the conflict scene from Luo Datou\'s perspective, letting readers understand his grievance and pride, experiencing "one event, multiple voices."'},
      {cn: '续写练习：写一段常贵离开福聚德时的独白或对白（200字），展现他对卢孟实的感激与对命运的无奈。', en: 'Continuation exercise: Write a monologue or dialogue (200 characters) for Changgui as he leaves Fujude, showing his gratitude to Lu Mengshi and resignation to fate.'}
    ]
  },
  exam: {
    points: [
      {cn: '分析福聚德由盛转衰的根本原因及"一个人干，八个人拆"的深层含义', en: 'Analyze the fundamental causes of Fujude\'s decline and the deeper meaning of "one man builds while eight tear it down"'},
      {cn: '品味京味话剧的语言特色：北京方言、行业术语、生活化对白', en: 'Appreciate Beijing-flavor drama\'s linguistic features: Beijing dialect, trade jargon, colloquial dialogue'},
      {cn: '理解卢孟实的人物形象及其悲剧命运的社会根源', en: 'Understand Lu Mengshi\'s character and the social roots of his tragic fate'},
      {cn: '分析戏剧冲突的多层叠加：东家与掌柜、师傅与管理者、内部与外部', en: 'Analyze the multi-layered dramatic conflicts: owner vs. manager, craftsman vs. administrator, internal vs. external'}
    ],
    templates: [
      {cn: '人物分析题：结合课文中的具体言行，分析卢孟实的性格特点。', en: 'Character analysis: Using specific words and actions from the text, analyze Lu Mengshi\'s personality traits.'},
      {cn: '主旨探究题：修鼎新说"一个人干，八个人拆"，结合全文分析这句话揭示了怎样的社会问题。', en: 'Theme inquiry: Xiu Dingxin says "one man builds while eight tear it down." Analyze what social problems this reveals in context.'},
      {cn: '语言鉴赏题：《天下第一楼》被称为"京味话剧"，请从课文中举例分析其语言特色。', en: 'Language appreciation: "The Best Restaurant" is called a "Beijing-flavor play." Cite examples from the text to analyze its linguistic characteristics.'}
    ],
    quiz: [
      {
        question: '课文中"响案板"指的是什么？',
        questionEn: 'What does "sounding board" refer to in the text?',
        answer: 'B',
        options: ['A. 掌柜用算盘记账的声响', 'B. 旧时饭庄开张时砧板、炒勺齐响的吉利习俗', 'C. 伙计们列队喊号迎接客人的仪式', 'D. 厨师比武切菜时的案板声']
      },
      {
        question: '"一个人干，八个人拆"中的"一个人"指的是谁？',
        questionEn: 'Who is the "one person" in "one man builds while eight tear it down"?',
        answer: 'C',
        options: ['A. 修鼎新', 'B. 罗大头', 'C. 卢孟实', 'D. 王子西']
      },
      {
        question: '罗大头揭了卢孟实什么旧伤？',
        questionEn: 'What old wound did Luo Datou expose about Lu Mengshi?',
        answer: 'A',
        options: ['A. 卢孟实的父亲被人用大秤当牲口称', 'B. 卢孟实曾经在街头乞讨度日', 'C. 卢孟实的父亲是前朝罪犯之后', 'D. 卢孟实年轻时曾被福聚德辞退']
      },
      {
        question: '下列对本文主题的理解，最准确的是哪项？',
        questionEn: 'Which is the most accurate understanding of the text\'s theme?',
        answer: 'D',
        options: ['A. 歌颂了老北京饮食文化的博大精深', 'B. 批判了卢孟实独断专行的管理方式', 'C. 表现了师徒关系中的传承与背叛', 'D. 揭示了旧社会制度下个人才能无法对抗体制性消耗的悲剧']
      }
    ]
  },
  deep: {
    cultural: {
      cn: '《天下第一楼》继承了"京味话剧"的血脉——老舍《茶馆》开创了以一个公共空间（茶馆、饭馆）浓缩社会变迁的剧场美学。何冀平在此基础上深入"行当"，将烤鸭制作工序、饭庄经营规矩、北京商业习俗（响案板、东六西四分成）融入戏剧。剧中对联"好一座危楼，谁是主人谁是客；只三间老屋，时宜明月时宜风"（据传上联为康熙所题，下联为纪晓岚对），横批"没有不散的筵席"，以文人的雅致为商人的悲剧添上一层文化苍凉。',
      en: '"The Best Restaurant" inherits the lineage of "Beijing-flavor drama" — Lao She\'s "Teahouse" pioneered the theatrical aesthetics of condensing social change within a single public space. He Jiping deepened this by embedding trade knowledge: roast duck techniques, restaurant management customs, and Beijing business traditions (sounding boards, the 60-40 profit split). The couplet in the play — "What a dangerous tower: who is host, who is guest? / Just three old rooms: sometimes moonlight, sometimes wind" (the first line attributed to Emperor Kangxi, the response to Ji Xiaolan), with the horizontal scroll reading "There is no banquet that does not end" — adds cultural pathos to commercial tragedy.'
    },
    crossText: {
      cn: '与《屈原》的浪漫主义截然不同，《天下第一楼》走的是老舍《茶馆》式的现实主义路线。可做三重对比：（1）语言：屈原用排比呼告如诗如歌，本文用北京方言行话自然流畅；（2）冲突：屈原是个人与黑暗势力的正面对抗，本文是个人被多方势力合围的渐进消耗；（3）结局：屈原选择以死抗争，卢孟实则被迫还乡——一个是英雄的毁灭，一个是能人的败退。这种对比恰好展现了话剧表现社会的两种方式。',
      en: 'Diametrically opposed to the Romanticism of "Qu Yuan," "The Best Restaurant" follows Lao She\'s realist path in "Teahouse." Three-way comparison: (1) Language: Qu Yuan uses parallelism and apostrophe like poetry; this text uses natural Beijing dialect and jargon. (2) Conflict: Qu Yuan confronts dark forces head-on; Lu Mengshi is gradually consumed by surrounding forces. (3) Resolution: Qu Yuan chooses death in defiance; Lu is forced to retreat — one is a hero\'s destruction, the other a capable man\'s defeat. This contrast illustrates two dramatic approaches to representing society.'
    }
  }
},

/* ─────────────────────────────────────────────── */
/*  Lesson 19: 枣儿 — 孙鸿                         */
/* ─────────────────────────────────────────────── */
{
  lessonId: '枣儿',
  genre: {
    type: '戏剧',
    subtype: '话剧小品·象征剧',
    cn: '独幕话剧小品，发表于《剧本》1999年第1期，荣获1999年中国曹禺戏剧奖小品小戏一等奖。以极简的舞台设置（一棵枣树、一老一少）和含蓄的象征手法，探讨城镇化进程中的亲情失落与精神家园的消逝。虽篇幅短小，却具有深远的社会寓意，属于典型的"小剧场戏剧"。',
    en: 'A one-act play published in the journal "Scripts" (1999, Issue 1), winning first prize in the One-Act category of the 1999 Cao Yu Drama Award. With minimalist staging (one jujube tree, one old man, one boy) and restrained symbolism, it explores the loss of family bonds and spiritual homeland amid urbanization. Though brief, its social implications are profound — a quintessential "small theater" drama.'
  },
  era: {
    cn: '孙鸿，当代剧作家，关注农村留守问题和社会变迁。本剧创作于1990年代末，正值中国城镇化急速推进的时期：大量农村青壮年涌入城市务工，留下老人和儿童在乡间守望。"空巢老人"和"留守儿童"成为全社会关注的问题。孙鸿以一棵枣树下的两个守望者，浓缩了这一时代的集体焦虑。',
    en: 'Sun Hong is a contemporary playwright concerned with rural depopulation and social transformation. The play was written in the late 1990s, when China\'s urbanization was accelerating rapidly: vast numbers of rural working-age adults flooded into cities, leaving elderly and children behind. "Empty-nest elderly" and "left-behind children" became nationwide concerns. Sun Hong condensed this era\'s collective anxiety into two figures waiting beneath a jujube tree.'
  },
  structure: {
    type: '回环式结构（首尾呼应）',
    outline: [
      {section: '开场·童谣', cn: '幕后传来童谣"枣儿甜，枣儿香，要吃枣儿喊爹娘"——以声音建构全剧的情感基调', en: 'A folk song drifts from backstage: "Dates are sweet, dates are fragrant, want to eat dates, call for mom and dad" — establishing the emotional keynote through sound'},
      {section: '相遇·分枣', cn: '老人让男孩吃枣儿，讲儿子名叫"枣儿"的来历——以分享食物建立两个陌生人的联结', en: 'The old man shares dates with the boy and tells how his son was named "Zaor" — food-sharing creates a bond between two strangers'},
      {section: '忆往·讲故事', cn: '日本兵被枣儿吓跑、灾荒年靠枣儿存活——枣儿的历史厚度，承载着战争与饥荒的记忆', en: 'The Japanese soldier frightened by a falling date, survival on dates during famine — dates carry the weight of war and hunger in collective memory'},
      {section: '暗涌·巧克力', cn: '"你有了巧克力，就不会来了"——城市文明（巧克力）对乡土文明（枣儿）的冲击', en: '"Once you have chocolate, you won\'t come anymore" — urban civilization (chocolate) encroaching on rural tradition (dates)'},
      {section: '揭底·真相', cn: '"爹不会回来了。我爹在城里又有了一个家"——全剧最沉重的一句话，两个守望者的等待都成为虚妄', en: '"Dad won\'t come back. He has a new family in the city" — the play\'s heaviest line, rendering both characters\' waiting futile'},
      {section: '结尾·呼唤', cn: '二人齐声喊童谣，状如雕塑，响起无数童声——从个体的等待升华为一代人的呼唤', en: 'The two chant the folk song together, still as sculptures, countless children\'s voices rise — individual waiting transcends into a generational call'}
    ],
    cn: '全剧以童谣开始、以童谣结束，形成完整的回环。但开头的童谣是幕后独唱，结尾变为台前齐喊并汇入无数童声——同一首歌，两种表达，由私密变为公共，由个体变为群体，完成了从"一老一少的故事"到"一个时代的呐喊"的升华。',
    en: 'The play opens and closes with the same folk song, forming a complete circle. But the opening is a single voice from backstage, while the ending becomes a joint cry on stage joined by countless children\'s voices — the same song, two expressions, from private to public, individual to collective, completing the transformation from "a story of two people" to "a cry of an era."'
  },
  techniques: [
    {para: 1, items: [
      {type: '舞台意象', typeEn: 'Stage Imagery', cn: '"一棵挂满红枣的老树。树下坐着位形如雕塑的老人"——开场的舞台说明就是一幅完整的象征画面："老树"象征扎根乡土的传统，"红枣"象征丰收却无人享用的空虚，"形如雕塑"暗示老人已等到石化、等到与土地融为一体。', en: '"An old tree laden with red dates. An old man sits beneath it, still as a sculpture" — the opening stage direction is a complete symbolic tableau: "old tree" symbolizes rooted tradition, "red dates" symbolize harvest that no one enjoys, "still as a sculpture" implies the old man has waited so long he has petrified, merging with the land.'},
      {type: '童谣（首尾呼应）', typeEn: 'Folk Song (Circular Structure)', cn: '"枣儿甜，枣儿香，要吃枣儿喊爹娘"——童谣以方言口吻唤起乡土记忆，"喊爹娘"三个字在剧情中获得双重含义：对男孩是喊爹，对老人是被喊（爹娘的角色）。开头由幕后传来（个人记忆），结尾由二人齐喊（集体呼唤），从私语变成呐喊。', en: '"Dates are sweet, dates are fragrant, call for mom and dad" — the folk song evokes rural memory in dialect. "Call for mom and dad" gains double meaning: for the boy it means calling his father; for the old man it means being called (as parent). It shifts from a backstage whisper (private memory) to a joint cry (collective appeal).'}
    ]},
    {para: 4, items: [
      {type: '象征（核心意象）', typeEn: 'Symbolism (Central Image)', cn: '"枣儿"在全剧中至少承载四重象征：（1）亲情的载体——老人以枣联系儿子，男孩留枣给父亲；（2）故乡的代名词——与"巧克力"（城市文明）对立；（3）传统生活方式——"枣树"扎根不动，"人"却远走他乡；（4）精神家园——"枣儿甜"的记忆是最后的精神归属。', en: '"Dates" carry at least four layers of symbolism: (1) vessel of family love — the old man links dates to his son, the boy saves dates for his father; (2) synonym for hometown — opposed to "chocolate" (urban civilization); (3) traditional way of life — the date tree stays rooted while people leave; (4) spiritual homeland — the memory of "sweet dates" is the last spiritual anchor.'},
      {type: '对比（巧克力vs枣儿）', typeEn: 'Contrast (Chocolate vs. Dates)', cn: '"你有了巧克力，就不会来了"——老人的这句话看似随口一说，实则精准地概括了城乡文明的冲突：巧克力代表现代、城市、新潮，枣儿代表传统、乡土、古朴。这不是两种食物的对比，而是两种生活方式、两种文明形态的博弈。', en: '"Once you have chocolate, you won\'t come anymore" — seemingly casual, this line precisely encapsulates the urban-rural cultural clash: chocolate represents modernity, city, novelty; dates represent tradition, countryside, simplicity. This is not a comparison of two foods but a contest between two civilizations.'}
    ]},
    {para: 5, items: [
      {type: '留白（戏剧空白）', typeEn: 'Strategic Silence (Dramatic Blank)', cn: '"爹不会回来了。我爹在城里又有了一个家。"——男孩用最平淡的语气说出最残酷的事实。剧本没有写老人的回应台词，只写了一个动作："老人紧紧搂住男孩"——沉默比千言万语更有力。', en: '"Dad won\'t come back. He has a new family in the city." — the boy states the cruelest fact in the plainest tone. The script gives no dialogue for the old man\'s response, only one action: "The old man hugs the boy tightly" — silence more powerful than a thousand words.'}
    ]},
    {para: 6, items: [
      {type: '定格（雕塑化结尾）', typeEn: 'Freeze Frame (Sculptural Ending)', cn: '"二人翘首远望，状如雕塑。响起无数个童声呼唤声"——结尾的"状如雕塑"与开头老人独坐时的"形如雕塑"首尾呼应，但此刻是两个人一起凝固。"无数个童声"将两个人的等待扩展为千万个留守家庭的呼唤，从个体故事跃升为时代画卷。', en: '"The two gaze into the distance, still as sculptures. Countless children\'s voices echo the call" — the closing "still as sculptures" echoes the opening "motionless as a sculpture," but now two people are frozen together. "Countless children\'s voices" expand two individuals\' waiting into the cry of millions of left-behind families, leaping from personal story to epic tableau.'}
    ]}
  ],
  writing: {
    tips: [
      {cn: '以小见大的象征写作：本剧仅用一棵树、两个人、一种水果就构建了一个完整的社会寓言。写作时可尝试选择一个具体的"物"（如老屋、井、渡船）作为核心意象，让它承载多重含义。', en: 'Symbolism that sees the large in the small: this play builds a complete social allegory with just one tree, two people, and one fruit. When writing, try choosing a concrete object (old house, well, ferry) as your central image, letting it carry multiple meanings.'},
      {cn: '留白与沉默的力量：男孩说出"爹不会回来了"之后，老人没有一句台词——这个沉默比任何回应都更有冲击力。写对话时，学会在关键时刻让角色"不说话"。', en: 'The power of silence: after the boy says "Dad won\'t come back," the old man has no dialogue — this silence is more impactful than any response. When writing dialogue, learn to let characters "not speak" at crucial moments.'},
      {cn: '首尾呼应的深化：同一首童谣出现两次，但情感浓度截然不同——开头是背景音，结尾是呐喊。写作时可用同一个意象或句子开头结尾，但让它在经历了全文的故事后获得新的含义。', en: 'Deepening through circular structure: the same folk song appears twice, but the emotional density is entirely different — background music at the start, a cry at the end. In writing, use the same image or sentence to open and close, but let it acquire new meaning after the story.'}
    ],
    gems: [
      {text: '你有了巧克力，就不会来了', cn: '这句台词是全剧最含蓄的"金句"。表面上，老人在说食物的替代——有了更好吃的东西就不会来吃枣了。实际上，他在说一个时代的替代——现代文明一旦占据了人心，传统的、乡土的、温情的一切都将被遗忘。"巧克力"三个字浓缩了城市对乡村的全部冲击。', en: 'The play\'s most understated gem. On the surface, the old man talks about food substitution. In reality, he speaks of civilizational replacement — once modernity occupies people\'s hearts, everything traditional, rural, and warm will be forgotten. The word "chocolate" condenses the entire impact of city upon countryside.'},
      {text: '出远门的人有时候不认识回家的路了，只要家里人天天喊，他早晚会回来的', cn: '男孩转述母亲的话，既天真又深沉。"不认识回家的路"不是地理上的迷路，而是精神上的迷失——在城市的诱惑中忘记了故土和亲人。"天天喊"是乡村对游子最后的、也是唯一的挽留方式：不能追去，只能等待和呼唤。', en: 'The boy quotes his mother\'s words — both naive and profound. "Not recognizing the way home" is not geographical disorientation but spiritual loss — forgetting homeland and family amid urban temptation. "Calling every day" is the village\'s last and only way to hold on to those who left: unable to pursue, they can only wait and call.'},
      {text: '二人翘首远望，状如雕塑', cn: '结尾的定格画面是全剧最强的视觉意象。"雕塑"意味着永恒的等待——他们已经等到了石化的程度，已经与这片土地融为一体。这个画面同时也是一个隐喻：在急速变迁的时代中，留守者成了被时间遗忘的"雕塑"。', en: 'The freeze-frame ending is the play\'s most powerful visual image. "Sculpture" implies eternal waiting — they have waited to the point of petrification, merged with the land. It is also a metaphor: in an era of rapid change, those left behind become "sculptures" forgotten by time.'}
    ],
    lab: [
      {cn: '改写练习：将《枣儿》的故事改写为一首现代诗（150字左右），保留"枣树""童谣""等待"三个核心意象。', en: 'Rewriting exercise: Transform the story of "Dates" into a modern poem (about 150 characters), retaining the three core images of "jujube tree," "folk song," and "waiting."'},
      {cn: '续写练习：如果老人的儿子或男孩的父亲某天回来了，会发生什么？写一个200字左右的场景。注意：回来未必是团圆，也可能是新的冲突。', en: 'Continuation exercise: What if the old man\'s son or the boy\'s father came back one day? Write a scene of about 200 characters. Note: homecoming need not mean reunion — it could also bring new conflict.'}
    ]
  },
  exam: {
    points: [
      {cn: '理解"枣儿"的多重象征意义：亲情、故乡、传统、精神家园', en: 'Understand the multiple symbolic meanings of "dates": family love, hometown, tradition, spiritual homeland'},
      {cn: '分析首尾童谣的呼应效果及两次出现的不同表达功能', en: 'Analyze the echo effect of the folk song at beginning and end, and the different expressive functions of its two appearances'},
      {cn: '品味"形如雕塑""状如雕塑"等舞台说明的深层含义', en: 'Appreciate the deeper meaning of stage directions like "motionless as a sculpture" and "still as sculptures"'},
      {cn: '理解本剧对城镇化进程中亲情失落与乡土消逝的社会关怀', en: 'Understand the play\'s social concern for the loss of family bonds and disappearance of rural life amid urbanization'}
    ],
    templates: [
      {cn: '象征分析题："枣儿"在文中有哪些象征意义？请结合具体情节分析。', en: 'Symbolism analysis: What symbolic meanings do "dates" carry in the text? Analyze with reference to specific plot points.'},
      {cn: '结构分析题：开头和结尾都出现了同一首童谣，两次出现有什么不同？这样安排有什么作用？', en: 'Structure analysis: The same folk song appears at the beginning and end. How do the two occurrences differ? What is the effect of this arrangement?'},
      {cn: '人物理解题：老人说"你有了巧克力，就不会来了"，这句话表达了老人怎样的心理？', en: 'Character understanding: The old man says "Once you have chocolate, you won\'t come anymore." What psychology does this reveal?'}
    ],
    quiz: [
      {
        question: '老人的儿子名叫"枣儿"，取这个名字的原因是什么？',
        questionEn: 'Why was the old man\'s son named "Zaor" (Dates)?',
        answer: 'B',
        options: ['A. 因为儿子生在枣树下', 'B. 因为算命先生说他命中缺"木"，枣字有"木"', 'C. 因为老人希望儿子的生活像枣一样甜', 'D. 因为家乡以种枣闻名']
      },
      {
        question: '"你有了巧克力，就不会来了"这句话中，"巧克力"象征什么？',
        questionEn: 'In "Once you have chocolate, you won\'t come anymore," what does "chocolate" symbolize?',
        answer: 'C',
        options: ['A. 儿童的零食爱好', 'B. 贫富差距和经济诱惑', 'C. 城市文明和现代生活方式对传统乡土的冲击', 'D. 外国文化对中国文化的侵蚀']
      },
      {
        question: '结尾"响起无数个童声呼唤声"的作用是什么？',
        questionEn: 'What is the function of "countless children\'s voices echoing the call" at the ending?',
        answer: 'D',
        options: ['A. 表明周围有很多孩子在玩耍', 'B. 暗示老人的儿子终于回来了', 'C. 制造热闹的气氛冲淡悲伤', 'D. 将个体的等待升华为整个时代留守者的共同呼唤']
      },
      {
        question: '下列对"形如雕塑""状如雕塑"的理解，最恰当的是哪项？',
        questionEn: 'Which is the most appropriate interpretation of the "sculpture" imagery?',
        answer: 'A',
        options: ['A. 暗示等待者已等到石化，与土地融为一体，象征永恒的守望', 'B. 形容老人和男孩因寒冷而僵硬不动', 'C. 表明老人年纪太大已无法行动自如', 'D. 比喻舞台布景的静态美感']
      }
    ]
  },
  deep: {
    cultural: {
      cn: '《枣儿》触及了中国社会转型中最深层的文化焦虑：土地与人的断裂。在中国传统文化中，"安土重迁"是核心价值观——人应该扎根故土，如同枣树扎根大地。但现代化浪潮将人从土地上连根拔起，"留守"与"远行"构成了当代中国最普遍的家庭叙事。剧中老人用枣儿讲的三个故事——取名、抗日、灾荒——恰好浓缩了20世纪中国农村的三大历史主题。枣树在中国文化中还有"早生贵子"的谐音寓意，但在本剧中，这份"早生贵子"的祝福却变成了"子不在身边"的反讽。',
      en: '"Dates" touches the deepest cultural anxiety of China\'s social transformation: the severance of people from land. In traditional Chinese culture, "settling on the land and being reluctant to move" is a core value — one should root in one\'s homeland like a date tree roots in the earth. But modernization uproots people from the land, and "staying behind" vs. "going away" has become the most universal family narrative in contemporary China. The old man\'s three stories about dates — naming, resisting Japan, surviving famine — condense three great historical themes of 20th-century rural China. In Chinese culture, the date tree also carries the homophonic blessing of "having children early" (早生贵子/枣生贵子), but in this play, that blessing becomes the irony of "the child is no longer by your side."'
    },
    crossText: {
      cn: '与本单元另两部戏剧构成"戏剧风格三重奏"：《屈原》是浪漫主义的激情呐喊，以排山倒海的独白对抗黑暗；《天下第一楼》是现实主义的生活画卷，以世情百态折射社会矛盾；《枣儿》则是象征主义的诗意寓言，以极简场景承载时代之重。三部剧也代表了三种时间维度：《屈原》借古讽今（战国→抗战），《天下第一楼》再现近代（清末民初），《枣儿》直面当下（1990年代城镇化）。此外，《枣儿》的"等待"主题可与贝克特《等待戈多》比较——但不同于戈多式的"荒诞等待"，枣儿中的等待更多的是"深情等待"，虽然结果可能同样落空。',
      en: 'With the other two plays in this unit, "Dates" forms a "dramatic style trio": "Qu Yuan" is Romantic passionate outcry, combating darkness with torrential monologue; "The Best Restaurant" is Realist social panorama, reflecting social contradictions through everyday life; "Dates" is Symbolist poetic allegory, bearing the weight of an era in minimalist staging. The three also represent three temporal dimensions: "Qu Yuan" uses the past to address the present (Warring States → WWII), "The Best Restaurant" recreates the modern era (late Qing/early Republic), "Dates" confronts the contemporary (1990s urbanization). Additionally, the "waiting" theme invites comparison with Beckett\'s "Waiting for Godot" — but unlike Godot\'s absurdist waiting, the waiting in "Dates" is fundamentally affectionate, even if the outcome may be equally futile.'
    }
  }
}

];
