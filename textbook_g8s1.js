/**
 * 字道 ZiDao — 部编版八年级语文上册 教材数据
 * Grade 8 Semester 1 Textbook Data (PEP Edition)
 * Based on: 义务教育教科书 语文 八年级上册
 */
var TB_G8S1 = {
grade: 8, semester: 1,
units: [
/* ═══════════════════════════════════════════ */
/*  UNIT 1 — 活动·探究 (新闻)                  */
/* ═══════════════════════════════════════════ */
{
  id: 1, title: "第一单元 活动\u00b7探究", titleEn: "Unit 1 Activity & Exploration: Journalism", type: "activity",
  tasks: [
    {id:"task1", title:"新闻阅读", titleEn:"News Reading",
     desc:"阅读消息、新闻特写、通讯、新闻评论等不同体裁的新闻作品，了解新闻内容，把握各自特点。",
     descEn:"Read news dispatches, feature stories, communications, and commentaries; understand news content and grasp the characteristics of each genre."},
    {id:"task2", title:"新闻采访", titleEn:"News Interviewing",
     desc:"熟悉新闻采访的一般方法和步骤，确定报道题材，制订采访方案，分小组进行采访实践。",
     descEn:"Learn general methods and procedures for news interviewing; determine reporting topics, draft interview plans, and conduct group interviews."},
    {id:"task3", title:"新闻写作", titleEn:"News Writing",
     desc:"必做任务：写一则消息；自选任务：撰写新闻特写或通讯；拓展任务：编辑制作报纸或新闻网页。",
     descEn:"Required: write a news dispatch; optional: write a news feature or communication; extended: edit and produce a newspaper or news webpage."}
  ],
  oralComm: {title:"讲述", titleEn:"Narration",
    desc:"注意讲述的对象和场合，重点突出，条理清楚，注意口语表达的特点。",
    descEn:"Pay attention to audience and occasion; keep points clear and well-organized; note characteristics of oral expression."},
  lessons: [
    {
      id: 1, title: "消息二则", titleEn: "Two News Dispatches",
      difficulty: 5,
      author: "毛泽东", authorEn: "Mao Zedong",
      isSelfRead: true,
      text: [
        "我三十万大军胜利南渡长江（一九四九年四月二十二日）",
        "新华社长江前线二十二日二时电 英勇的人民解放军二十一日已有大约三十万人渡过长江。渡江战斗于二十日午夜开始，地点在芜湖、安庆之间。国民党反动派经营了三个半月的长江防线，遇着人民解放军好似摧枯拉朽，军无斗志，纷纷溃退。长江风平浪静，我军万船齐放，直取对岸，不到二十四小时，三十万人民解放军即已突破敌阵，占领南岸广大地区，现正向繁昌、铜陵、青阳、荻港、鲁港诸城进击中。",
        "人民解放军百万大军横渡长江（一九四九年四月二十二日）",
        "新华社长江前线二十二日二十二时电 人民解放军百万大军，从一千余华里的战线上，冲破敌阵，横渡长江。西起九江（不含），东至江阴，均是人民解放军的渡江区域。二十日夜起，长江北岸人民解放军中路军首先突破安庆、芜湖线，渡至繁昌、铜陵、青阳、荻港、鲁港地区，二十四小时内即已渡过三十万人。二十一日下午五时起，我西路军开始渡江，地点在九江、安庆段。至发电时止，该路三十五万人民解放军已渡过三分之二，余部二十三日可渡完。",
        "和中路军所遇敌情一样，我西路军当面之敌亦纷纷溃退，毫无斗志，我军所遇之抵抗，甚为微弱。此种情况，一方面由于人民解放军英勇善战，锐不可当；另一方面，这和国民党反动派拒绝签订和平协定，有很大关系。我东路三十五万大军与西路同日同时发起渡江作战。所有预定计划，都已实现。至发电时止，我东路各军已大部渡过南岸，余部二十三日可以渡完。此处敌军抵抗较为顽强，然在整天激战中，我已歼灭及击溃一切抵抗之敌，占领扬中、镇江、江阴诸县的广大地区，并控制江阴要塞，封锁长江。我军前锋，业已切断镇江、无锡段铁路线。"
      ],
      textEn: [
        "Our 300,000 Troops Successfully Cross the Yangtze (April 22, 1949)",
        "Xinhua News Agency, Yangtze Front, 2:00 AM, April 22 — The heroic People's Liberation Army crossed the Yangtze with approximately 300,000 troops on the 21st. The river-crossing battle began at midnight on the 20th, between Wuhu and Anqing. The Kuomintang's three-and-a-half-month Yangtze defense line crumbled like rotten wood before the PLA, whose troops were demoralized and retreated in disarray. With the Yangtze calm, our forces launched thousands of boats, reaching the opposite bank. In less than 24 hours, 300,000 PLA soldiers broke through enemy lines and occupied vast areas on the south bank.",
        "PLA's Million-Strong Army Crosses the Yangtze (April 22, 1949)",
        "Xinhua News Agency, Yangtze Front, 10:00 PM, April 22 — The PLA's million-strong army broke through enemy lines and crossed the Yangtze along a front of over one thousand li. The crossing zone extended from Jiujiang in the west to Jiangyin in the east. Starting on the night of the 20th, the PLA's Central Route Army first broke through the Anqing-Wuhu line, crossing to the Fanchang-Tongling-Qingyang area, with 300,000 troops crossing within 24 hours. From 5 PM on the 21st, the Western Route Army began crossing between Jiujiang and Anqing.",
        "Like the Central Route Army, the Western Route Army encountered enemy troops who retreated in complete disarray. This was due both to the PLA's bravery and fighting skill, and to the Kuomintang's refusal to sign a peace agreement. The Eastern Route Army of 350,000 launched its crossing on the same day. All planned objectives were achieved. Our Eastern Route forces largely crossed to the south bank, with the remainder to complete crossing on the 23rd. Enemy resistance was stronger here, but after a full day of fierce fighting, we destroyed all resistance, occupied vast areas of Yangzhong, Zhenjiang, and Jiangyin counties, controlled the Jiangyin fortress, and sealed off the Yangtze."
      ],
      vocabWords: [
        {word:'溃退',pinyin:'kuì tuì',en:'to retreat in disarray',sentence:'国民党反动派经营了三个半月的长江防线，遇着人民解放军好似摧枯拉朽，军无斗志，纷纷溃退。',sentenceEn:'The Kuomintang defense line crumbled before the PLA; their troops lost the will to fight and retreated in disarray.'},
        {word:'摧枯拉朽',pinyin:'cuī kū lā xiǔ',en:'to crush rotten wood; irresistible force',sentence:'遇着人民解放军好似摧枯拉朽。',sentenceEn:'Encountering the PLA was like crushing rotten wood.'},
        {word:'锐不可当',pinyin:'ruì bù kě dāng',en:'irresistible; unstoppable',sentence:'我军锐不可当。',sentenceEn:'Our army was unstoppable.'},
        {word:'歼灭',pinyin:'jiān miè',en:'to annihilate; to wipe out',sentence:'我已歼灭及击溃一切抵抗之敌。',sentenceEn:'We annihilated and routed all resisting enemies.'},
        {word:'要塞',pinyin:'yào sài',en:'fortress; stronghold',sentence:'并控制江阴要塞，封锁长江。',sentenceEn:'And controlled the Jiangyin fortress, sealing off the Yangtze.'}
      ],
      grammarPoints: [
        {point:'消息结构',pointEn:'xiāo xi jié gòu',example:'structure of a news dispatch',exampleEn:'标题、电头、导语和主体构成消息的基本结构。',explanation:'Headline, dateline, lead, and body form the basic structure of a news dispatch.',explanationEn:'消息由标题（概括事件）、电头（交代来源）、导语（核心事实）和主体（详细报道）四部分组成。'},
        {point:'新闻六要素',pointEn:'xīn wén liù yào sù',example:'six elements of news',exampleEn:'何时、何地、何事、何人、何故、如何。',explanation:'When, where, what, who, why, and how.',explanationEn:'新闻报道应包含时间、地点、人物、事件、原因和经过六个基本要素，确保信息完整准确。'}
      ],
      readingTips: [
        {cn:"从新闻要素的角度把握课文内容：何时、何地、何事、何人、何故、如何。", en:"Grasp the content through the six news elements: when, where, what, who, why, and how."},
        {cn:"注意消息的标题、电头、导语和主体结构。", en:"Pay attention to headline, dateline, lead, and body structure of the dispatch."},
        {cn:"体会消息语言的准确性和精炼性。", en:"Appreciate the accuracy and conciseness of news language."}
      ],
      authorBio: {cn:"毛泽东（1893\u20141976），字润之，湖南湘潭人。伟大的无产阶级革命家、政治家、军事家，中国共产党、中国人民解放军和中华人民共和国的主要缔造者和领导人。同时也是杰出的诗人和书法家。", en:"Mao Zedong (1893\u20131976), courtesy name Runzhi, was born in Xiangtan, Hunan. He was the principal founder and leader of the CPC, the PLA, and the PRC. He was also an accomplished poet and calligrapher."},
      teachingPoints: [{cn:"掌握消息的基本结构：标题、电头、导语和主体。学会从新闻六要素（何时、何地、何人、何事、何故、如何）的角度把握消息内容。", en:"Master the basic structure of news dispatches: headline, dateline, lead, and body. Learn to grasp content through the six news elements (when, where, who, what, why, how)."}, {cn:"比较两则消息在内容详略和结构上的异同，体会简洁准确的新闻语言特点。", en:"Compare the two dispatches in detail level and structure; appreciate the concise and accurate characteristics of news language."}],
      parentTips: [{cn:"帮助孩子了解解放战争的历史背景，结合地图理解渡江战役的战略意义。", en:"Help your child understand the historical context of the Liberation War; use maps to grasp the strategic significance of the Yangtze crossing."}, {cn:"引导孩子关注日常新闻报道，尝试识别消息的标题、导语和主体部分。", en:"Guide your child to follow daily news reports and try identifying the headline, lead, and body sections."}]
    },
    {
      id: 2, title: "首届诺贝尔奖颁发", titleEn: "First Nobel Prizes Awarded",
      difficulty: 4,
      author: "路透社", authorEn: "Reuters",
      isSelfRead: true,
      text: [
        "路透社斯德哥尔摩1901年12月10日电 瑞典国王和挪威诺贝尔基金会今天首次颁发了诺贝尔奖。根据诺贝尔的遗嘱，诺贝尔奖每年发给那些在过去的一年里，在物理学、化学、生理学或医学、文学及和平事业方面为人类做出最大贡献的人。",
        "今年诺贝尔奖的获得者有：德国的伦琴（物理学奖），他发现了X射线；荷兰的范托夫（化学奖），他发现了化学动力学定律和渗透压定律；德国的贝林（生理学或医学奖），他在血清疗法的研究方面卓有成就；法国的普吕多姆（文学奖），他在诗歌创作方面颇有建树。诺贝尔和平奖的获得者有：瑞士的迪南，他于1864年建立了红十字会；经济学家帕西，他建立了促进国际仲裁的各国议会联盟。",
        "从即日起，根据诺贝尔的遗嘱，诺贝尔奖由4个机构（瑞典3个，挪威1个）颁发。授奖仪式每年于12月10日诺贝尔逝世周年纪念日在瑞典的斯德哥尔摩和挪威的奥斯陆举行。",
        "1867年，瑞典化学家诺贝尔发明了黄色炸药，以后又发明了多种炸药，这使他获得巨额收入。1896年诺贝尔逝世，这笔巨款用来设立诺贝尔奖金。他留下来的资金每年的利息将支付这5种诺贝尔奖金。诺贝尔基金会是这笔资金的合法拥有者，并管理这笔资金的投资，但与诺贝尔奖的评定无关。诺贝尔奖的评议权属于瑞典和挪威的诺贝尔奖评委会。"
      ],
      textEn: [
        "Reuters, Stockholm, December 10, 1901 — The King of Sweden and the Norwegian Nobel Committee today awarded the Nobel Prizes for the first time. According to Nobel's will, the prizes are given annually to those who have made the greatest contributions to humanity in physics, chemistry, physiology or medicine, literature, and peace.",
        "This year's Nobel Prize recipients are: Germany's Roentgen (Physics) for discovering X-rays; the Netherlands' Van't Hoff (Chemistry) for discovering the laws of chemical dynamics and osmotic pressure; Germany's Behring (Physiology or Medicine) for outstanding achievements in serum therapy research; France's Prudhomme (Literature) for his poetic accomplishments. The Nobel Peace Prize recipients are: Switzerland's Dunant, who founded the Red Cross in 1864; and economist Passy, who established the Inter-Parliamentary Union for international arbitration.",
        "Henceforth, according to Nobel's will, the prizes are awarded by four institutions (three in Sweden, one in Norway). The award ceremony takes place annually on December 10, the anniversary of Nobel's death, in Stockholm and Oslo.",
        "In 1867, Swedish chemist Alfred Nobel invented dynamite, later inventing several other explosives, which brought him enormous income. After Nobel's death in 1896, this fortune was used to establish the Nobel Prizes. The Nobel Foundation legally owns and manages the fund's investments but has no role in selecting laureates — that authority belongs to the Swedish and Norwegian Nobel Committees."
      ],
      vocabWords: [
        {word:'颁发',pinyin:'bān fā',en:'to award; to confer',sentence:'瑞典国王和挪威诺贝尔基金会今天首次颁发了诺贝尔奖。',sentenceEn:'The Swedish King and the Norwegian Nobel Committee today awarded the Nobel Prize for the first time.'},
        {word:'遗嘱',pinyin:'yí zhǔ',en:'will; testament',sentence:'根据诺贝尔的遗嘱，诺贝尔奖每年发给做出最大贡献的人。',sentenceEn:'According to Nobel’s will, the Nobel Prize is awarded annually to those who have made the greatest contributions.'},
        {word:'卓有成就',pinyin:'zhuó yǒu chéng jiù',en:'to have remarkable achievements',sentence:'他在血清疗法的研究方面卓有成就。',sentenceEn:'He had remarkable achievements in the research of serum therapy.'},
        {word:'建树',pinyin:'jiàn shù',en:'contributions; accomplishments',sentence:'他在诗歌创作方面颇有建树。',sentenceEn:'He had notable accomplishments in poetry.'},
        {word:'仲裁',pinyin:'zhòng cái',en:'arbitration',sentence:'他建立了促进国际仲裁的各国议会联盟。',sentenceEn:'He founded an inter-parliamentary union to promote international arbitration.'}
      ],
      readingTips: [
        {cn:"关注电头和导语交代了哪些内容。", en:"Note what information the dateline and lead paragraph convey."},
        {cn:"体会消息如何准确表述新闻事实。", en:"Appreciate how the dispatch accurately presents news facts."}
      ],
      authorBio: {cn:"路透社（Reuters），世界最早创办的通讯社之一，1851年由保罗\u00b7朱利叶斯\u00b7路透在英国伦敦创立，是世界前三大多媒体新闻通讯社，总部位于伦敦。", en:"Reuters, one of the world\u2019s earliest news agencies, was founded by Paul Julius Reuter in London in 1851. It is among the top three multimedia news agencies globally, headquartered in London."},
      teachingPoints: [{cn:"学习消息的电头格式，了解通讯社的作用；体会消息如何用简洁的语言准确表述新闻事实。", en:"Learn the dateline format; understand the role of news agencies; appreciate how dispatches accurately present facts with concise language."}, {cn:"注意消息中补充背景信息的写法，理解背景信息对完整呈现新闻事件的作用。", en:"Note how background information is woven into the dispatch, and understand its role in presenting the full picture of a news event."}],
      parentTips: [{cn:"与孩子讨论诺贝尔奖的意义，了解获奖者的贡献领域。", en:"Discuss the significance of the Nobel Prize with your child and explore the laureates\u2019 fields of contribution."}, {cn:"鼓励孩子阅读国际新闻，培养关注世界大事的习惯。", en:"Encourage your child to read international news and develop a habit of following world events."}]
    },
    {
      id: 3, title: "\u201c飞天\u201d凌空", titleEn: "\"Flying Apsara\" Soars",
      difficulty: 5,
      subtitle: "跳水姑娘吕伟夺魁记", subtitleEn: "Diver Lv Wei Wins Gold",
      author: "夏浩然 樊云芳", authorEn: "Xia Haoran & Fan Yunfang",
      isSelfRead: true,
      text: [
        "她站在十米高台的前沿，沉静自若，风度优雅，白云似在她的头顶飘浮，飞鸟掠过她的身旁。这是达卡多拉游泳场的八千名观众一齐翘首而望、屏息敛声的一刹那。",
        "轻舒双臂，向上举起，只见吕伟轻轻一蹬，就向空中飞去。一瞬间，她那修长美妙的身体犹如被空气托住了，衬着蓝天白云，酷似敦煌壁画中凌空翔舞的\u201c飞天\u201d。",
        "紧接着，是向前翻腾一周半，同时伴随着旋风般的空中转体三周，动作疾如流星，又潇洒自如，1.7秒的时间对她似乎特别慷慨，让她从容不迫地展示身体优美的线条。",
        "还没等观众从眼花缭乱中反应过来，她已经展开身体，像轻盈的、笔直的箭，\u201c哧\u201d地插进碧波之中，几串白色的气泡拥抱了这位自天而降的仙女，四面水花则悄然不惊。",
        "\u201c妙！妙极了！\u201d站在我们旁边的一名外国记者跳了起来。这时，整个游泳场都沸腾了，如梦初醒的观众用震耳欲聋的掌声和欢呼声，来向他们喜爱的运动员表达由衷的赞赏。",
        "她的这个动作\u201c5136\u201d，让几位裁判亮出了9.5分的高分。这位年方十六的中国姑娘，赢得了金牌。"
      ],
      textEn: [
        "She stood at the edge of the ten-meter platform, calm and composed, elegant in bearing. Clouds seemed to float above her head, birds glided past her. This was the breathless moment when 8,000 spectators in the Dakar Dora swimming arena craned their necks and held their breath.",
        "She gently extended her arms upward. With a light push, Lv Wei soared into the air. In an instant, her slender, graceful body seemed to be held aloft, set against blue sky and white clouds, resembling an apsara in flight from a Dunhuang mural.",
        "Next came one and a half forward somersaults with three simultaneous twists, the movement swift as a meteor yet effortlessly graceful. The 1.7 seconds seemed particularly generous to her, allowing her to display her body's beautiful lines with unhurried ease.",
        "Before the dazzled spectators could react, she had already stretched her body out and, like a light, straight arrow, plunged into the blue water with a soft swish. Strings of white bubbles embraced this fairy descended from the sky, while the surrounding water barely stirred.",
        "\"Wonderful! Absolutely wonderful!\" A foreign journalist beside us leapt to his feet. The entire arena erupted. The awakened audience expressed their heartfelt admiration with thunderous applause and cheers.",
        "Her dive, coded \"5136,\" earned scores of 9.5 from several judges. This sixteen-year-old Chinese girl had won the gold medal."
      ],
      vocabWords: [
        {word:'凌空',pinyin:'líng kōng',en:'to soar through the air',sentence:'她在空中向前翻腾一周半，如飞天凌空。',sentenceEn:'She somersaulted one and a half times in the air, soaring like a flying apsara.'},
        {word:'翘首',pinyin:'qiáo shǒu',en:'to crane one’s neck; to look up eagerly',sentence:'观众翘首而望。',sentenceEn:'The audience craned their necks to watch.'},
        {word:'酷似',pinyin:'kù sì',en:'to closely resemble',sentence:'她那优美的身姿酷似敦煌壁画上的飞天。',sentenceEn:'Her graceful figure closely resembled the flying apsaras in Dunhuang murals.'},
        {word:'屏息敛声',pinyin:'bǐng xī liǎn shēng',en:'to hold one’s breath in silence',sentence:'全场屏息敛声，静待她入水的一刻。',sentenceEn:'The entire venue held its breath, awaiting the moment she entered the water.'},
        {word:'夺魁',pinyin:'duó kuí',en:'to win first place',sentence:'跳水姑娘吕伟夺魁。',sentenceEn:'Diver Lv Wei won the championship.'}
      ],
      readingTips: [
        {cn:"体会新闻特写如何通过分解动作，形成\u201c慢镜头回放\u201d效果。", en:"Appreciate how the news feature creates a 'slow-motion replay' effect by breaking down the action."},
        {cn:"注意侧面描写（观众反应、外国记者）对烘托主题的作用。", en:"Note how indirect description (audience reactions, foreign journalist) enhances the theme."}
      ],
      authorBio: {cn:"夏浩然、樊云芳，《光明日报》记者。此篇新闻特写发表于1982年11月，报道中国跳水运动员吕伟在新德里第九届亚运会上夺得十米跳台冠军的精彩瞬间。", en:"Xia Haoran and Fan Yunfang were reporters for Guangming Daily. This news feature was published in November 1982, reporting the spectacular moment when Chinese diver Lv Wei won the 10-meter platform gold at the 9th Asian Games in New Delhi."},
      teachingPoints: [{cn:"理解新闻特写的文体特征：抓住新闻事件中最有价值的瞬间，运用文学手法进行放大和再现。", en:"Understand news feature characteristics: capturing the most valuable moment of a news event and amplifying it through literary techniques."}, {cn:"体会\u201c慢镜头回放\u201d的写作技巧——将1.7秒的跳水动作分解成多个画面，形成视觉冲击力。", en:"Appreciate the \u2018slow-motion replay\u2019 technique\u2014decomposing a 1.7-second dive into multiple frames for visual impact."}],
      parentTips: [{cn:"观看跳水比赛视频，引导孩子尝试用\u201c分解动作\u201d的方法描写一个精彩瞬间。", en:"Watch diving competition videos and guide your child to describe a thrilling moment using the \u2018action breakdown\u2019 method."}, {cn:"帮助孩子理解正面描写与侧面描写相结合的写作手法。", en:"Help your child understand the writing technique of combining direct and indirect description."}]
    },
    {
      id: 4, title: "一着惊海天", titleEn: "One Landing Astonishes Sea and Sky",
      difficulty: 4,
      subtitle: "目击我国航母舰载战斗机首架次成功着舰", subtitleEn: "Witnessing the First Successful Carrier Landing of China's Fighter Jet",
      author: "蔡年迟 蒲海洋", authorEn: "Cai Nianchi & Pu Haiyang",
      isSelfRead: true,
      text: [
        "渤海某海域，海风呼啸，海浪澎湃。辽阔的海面上，我国第一艘航空母舰——辽宁舰斩浪向前。舰岛的主桅杆上，艳红的八一军旗迎风招展。",
        "2012年11月23日上午8时，顶着凛冽的寒风，身着不同颜色马甲的甲板工作人员在战位就位。阻拦索安全观察员手持专业工具，一丝不苟地对阻拦索做最后一次检查。备受外界关注的我国航母舰载战斗机首次着舰进入最关键时刻。",
        "这不是一次普通的飞行。航母舰载战斗机上舰，承载着国人的强军梦想。浩瀚的大海可以做证：为了这一梦想成真，古老的中华民族，已经等了近百年；人民海军官兵，已经期盼了半个多世纪。",
        "声如千骑疾，气卷万山来。惊心动魄的一幕出现了：9时08分，伴随震耳欲聋的喷气式发动机轰鸣声，眨眼之间，舰载机的两个主轮触到航母甲板上，机腹后方的尾钩牢牢地挂住了第二道阻拦索。刹那间，疾如闪电的舰载机在阻拦索系统的作用下，滑行数十米后，稳稳地停了下来。",
        "\u201c成功了！\u201d欢呼声中，一颗颗揪紧的心，一下子舒展开来。各个战位上热烈的掌声，瞬间点燃了所有人内心的激情。许多人落泪了！",
        "\u201c咔嚓！\u201d\u201c咔嚓！\u201d随着照相机的快门声响起，中国第一位成功着舰的航母舰载战斗机飞行员的风采，定格在人们的镜头里，镌刻在共和国的史册上。"
      ],
      textEn: [
        "Somewhere in the Bohai Sea, wind howled and waves surged. On the vast sea, China's first aircraft carrier — the Liaoning — cut through the waves. On the island structure's main mast, the bright red August First military flag fluttered in the wind.",
        "At 8:00 AM on November 23, 2012, braving the bitter cold, deck personnel in different colored vests took their stations. Arresting cable safety observers meticulously made their final inspection with professional tools. The highly anticipated first carrier landing of China's fighter jet entered its most critical moment.",
        "This was no ordinary flight. A carrier-based fighter landing on a carrier bore the nation's dream of a strong military. The vast ocean bears witness: for this dream to come true, the ancient Chinese nation had waited nearly a century; the PLA Navy had longed for over half a century.",
        "Sound like a thousand galloping horses, force rolling across ten thousand mountains. The breathtaking moment arrived: at 9:08, amid the deafening roar of jet engines, in the blink of an eye, the fighter's two main wheels touched the carrier deck, and the tail hook firmly caught the second arresting cable. In an instant, the lightning-fast fighter, slowed by the arresting system, slid dozens of meters and came to a steady stop.",
        "\"Success!\" Amid cheers, anxious hearts relaxed at once. Thunderous applause from every station instantly ignited everyone's passion. Many wept!",
        "\"Click!\" \"Click!\" As camera shutters fired, the image of China's first successful carrier-based fighter pilot was frozen in people's lenses and engraved in the annals of the Republic."
      ],
      vocabWords: [
        {word:'着舰',pinyin:'zhuó jiàn',en:'carrier landing',sentence:'目击我国航母舰载战斗机首架次成功着舰。',sentenceEn:'Witnessing the first successful carrier landing of our fighter jet.'},
        {word:'咆哮',pinyin:'páo xiào',en:'to roar; to howl',sentence:'发动机发出震耳欲聋的咆哮。',sentenceEn:'The engine let out a deafening roar.'},
        {word:'镌刻',pinyin:'juān kè',en:'to engrave; to inscribe',sentence:'这一刻将永远镌刻在历史上。',sentenceEn:'This moment will be forever engraved in history.'},
        {word:'白手起家',pinyin:'bái shǒu qǐ jiā',en:'to start from nothing',sentence:'中国海军航空兵白手起家。',sentenceEn:'The Chinese naval aviation force started from nothing.'},
        {word:'殚精竭虑',pinyin:'dān jīng jié lǜ',en:'to exhaust one’s mind and energy',sentence:'科研人员殚精竭虑攻克一个个技术难关。',sentenceEn:'Researchers exhausted their minds and energy to overcome technical challenges one by one.'}
      ],
      grammarPoints: [
        {point:'新闻特写',pointEn:'xīn wén tè xiě',example:'news feature writing',exampleEn:'本文用生动的现场描写记录历史性时刻。',explanation:'This article uses vivid on-site description to record a historic moment.',explanationEn:'新闻特写是截取新闻事件中最富有特征和表现力的片段进行放大描写的一种报道形式。'}
      ],
      readingTips: [
        {cn:"注意通讯如何通过背景介绍和现场描写增强新闻感染力。", en:"Notice how the communication enhances impact through background information and on-the-scene description."},
        {cn:"体会文中引用诗句和侧面烘托的作用。", en:"Appreciate the role of quoted poetry and indirect characterization."}
      ],
      authorBio: {cn:"蔡年迟、蒲海洋，军事记者。本文记录了2012年11月23日中国首艘航空母舰辽宁舰舰载战斗机歼-15首次成功着舰的历史性时刻。", en:"Cai Nianchi and Pu Haiyang are military journalists. This article records the historic moment on November 23, 2012, when the J-15 fighter jet made its first successful landing on China\u2019s first aircraft carrier, the Liaoning."},
      teachingPoints: [{cn:"了解通讯的文体特征：在真实报道的基础上运用文学手法，融入背景叙述和现场描写，增强感染力。", en:"Understand the communication genre: using literary techniques on the basis of truthful reporting, incorporating background narrative and on-scene description to enhance impact."}, {cn:"体会文章如何通过层层铺垫（历史等待\u2192现场紧张\u2192成功瞬间\u2192欢呼庆祝）推向高潮。", en:"Appreciate how the article builds to a climax through layered setup (historical waiting \u2192 on-scene tension \u2192 moment of success \u2192 celebration)."}],
      parentTips: [{cn:"与孩子讨论航母发展对国防建设的重要意义，培养爱国情感。", en:"Discuss with your child the significance of aircraft carrier development for national defense and cultivate patriotic feelings."}, {cn:"引导孩子关注科技新闻，了解重大科技成就背后的努力。", en:"Guide your child to follow technology news and understand the effort behind major technological achievements."}]
    },
    {
      id: 5, title: "国行公祭，为佑世界和平", titleEn: "National Memorial, for World Peace",
      difficulty: 4,
      author: "钟声", authorEn: "Zhong Sheng",
      isSelfRead: true,
      text: [
        "\u201c国行公祭，法立典章。铸兹宝鼎，祀我国殇。\u201d侵华日军南京大屠杀遇难同胞纪念馆集会广场上，国家公祭鼎铭文向世人讲述南京大屠杀史实，讲述设立国家公祭日的初衷。1937年12月13日，侵华日军野蛮侵入南京，随后制造了惨绝人寰的南京大屠杀惨案，30万中国同胞惨遭杀戮。",
        "南京大屠杀发生80年后，全世界的正义之士仍在以不同方式纪念死难者。加拿大安大略省议会于2017年10月通过有关\u201c设立南京大屠杀纪念日\u201d的动议；在日本，由高中和大学老师组成的研究会建议将\u201c南京大屠杀\u201d等词语列入教科书。历史，不可能被忘却！",
        "历史不会因时代变迁而改变，事实也不会因巧舌抵赖而消失。南京大屠杀，早已是所有正义力量的集体记忆，唯有日本右翼分子仍在梦中呓语。国家公祭日之长鸣警钟振聋发聩。",
        "从\u201c恐怖之城\u201d到\u201c和平之城\u201d，南京的命运变迁足证和平是何等珍贵。铭记历史、缅怀先烈、珍爱和平、开创未来，中国一以贯之的和平誓言，彰显坚定的信念、磅礴的力量。"
      ],
      textEn: [
        "\"The nation holds a public memorial, establishing it by law and regulation. Cast this precious tripod, to honor our national martyrs.\" On the assembly square of the Memorial Hall of the Victims in the Nanjing Massacre by Japanese Invaders, the inscription on the National Memorial Tripod tells the world about the Nanjing Massacre and the purpose of establishing a National Memorial Day. On December 13, 1937, Japanese invaders brutally entered Nanjing and perpetrated the Nanjing Massacre, one of the most horrific atrocities in human history, slaughtering 300,000 Chinese compatriots.",
        "Eighty years after the Nanjing Massacre, people of justice worldwide still commemorate the victims in various ways. Ontario's provincial parliament passed a motion in October 2017 to establish a \"Nanjing Massacre Commemorative Day\"; in Japan, a research group of high school and university teachers recommended including terms like \"Nanjing Massacre\" in textbooks. History cannot be forgotten!",
        "History does not change with the times, and facts do not vanish through clever denial. The Nanjing Massacre has long been the collective memory of all forces of justice; only Japanese right-wing elements still mutter in their sleep. The alarm bell of the National Memorial Day is deafening.",
        "From \"city of terror\" to \"city of peace,\" Nanjing's transformation proves how precious peace is. Remembering history, honoring martyrs, cherishing peace, and building the future — China's consistent pledge of peace demonstrates firm conviction and tremendous strength."
      ],
      vocabWords: [
        {word:'公祭',pinyin:'gōng jì',en:'national memorial ceremony',sentence:'国行公祭，为佑世界和平。',sentenceEn:'The national memorial ceremony is held to safeguard world peace.'},
        {word:'铭记',pinyin:'míng jì',en:'to engrave in memory; to always remember',sentence:'铭记历史，不是为了延续仇恨。',sentenceEn:'Remembering history is not to perpetuate hatred.'},
        {word:'惨绝人寰',pinyin:'cǎn jué rén huán',en:'the most tragic in the world',sentence:'南京大屠杀是惨绝人寰的历史悲剧。',sentenceEn:'The Nanjing Massacre was the most tragic historical atrocity.'},
        {word:'篡改',pinyin:'cuàn gǎi',en:'to tamper with; to falsify',sentence:'日本右翼势力企图篡改历史。',sentenceEn:'Japanese right-wing forces attempted to falsify history.'},
        {word:'振聋发聩',pinyin:'zhèn lóng fā kuì',en:'to enlighten the ignorant; earth-shaking',sentence:'文章发出振聋发聩的呼吁。',sentenceEn:'The article issued an earth-shaking appeal.'}
      ],
      grammarPoints: [
        {point:'新闻评论',pointEn:'xīn wén píng lùn',example:'news commentary',exampleEn:'国行公祭，为佑世界和平。',explanation:'The national memorial is held to safeguard world peace.',explanationEn:'新闻评论是针对新闻事件发表看法和见解的文体，具有鲜明的观点和强烈的说服力。'}
      ],
      readingTips: [
        {cn:"注意新闻评论如何运用事实和论据来论证观点。", en:"Note how the news commentary uses facts and evidence to support its argument."},
        {cn:"体会新闻评论鲜明的立场和有力的语言。", en:"Appreciate the clear stance and powerful language of the news commentary."}
      ],
      authorBio: {cn:"\u201c钟声\u201d是《人民日报》国际评论署名，取\u201c中国之声\u201d谐音，代表中国在国际问题上的立场和声音。该栏目自2008年开设以来，已成为中国对外发声的重要平台。", en:"\u2018Zhong Sheng\u2019 is the pen name for international commentaries in People\u2019s Daily, a homophone for \u2018Voice of China.\u2019 Established in 2008, the column has become an important platform for expressing China\u2019s stance on international issues."},
      teachingPoints: [{cn:"理解新闻评论的文体特征：以鲜明的立场和有力的论据阐述观点，以事实为基础展开论证。", en:"Understand news commentary characteristics: presenting viewpoints with a clear stance and strong evidence, building arguments on facts."}, {cn:"学习新闻评论中\u201c摆事实、讲道理\u201d的论证方法，体会语言的严谨和力度。", en:"Learn the \u2018present facts, reason logically\u2019 argumentation method in news commentary; appreciate the rigor and force of the language."}],
      parentTips: [{cn:"利用国家公祭日进行历史教育，帮助孩子理解铭记历史与珍爱和平的关系。", en:"Use the National Memorial Day for history education; help your child understand the relationship between remembering history and cherishing peace."}, {cn:"引导孩子阅读新闻评论，学习区分新闻报道与新闻评论的异同。", en:"Guide your child to read news commentaries and learn to distinguish between news reports and news commentaries."}]
    }
  ]
},
/* ═══════════════════════════════════════════ */
/*  UNIT 2 — 回忆性散文与传记                   */
/* ═══════════════════════════════════════════ */
{
  id: 2, title: "第二单元", titleEn: "Unit 2 — Memoirs & Biographies", type: "kewen",
  writing: {title:"学写传记", titleEn:"Learning to Write Biographies",
    desc:"传记要求真实，涉及的时间、地点、人物、事件等都必须准确。同时可以发挥想象，生动传神地表现人物。",
    descEn:"Biographies must be truthful — all times, places, people, and events must be accurate. Yet imagination can be used to portray characters vividly."},
  comprehensiveLearning: {title:"人无信不立", titleEn:"One Cannot Stand Without Integrity",
    desc:"围绕\u201c信\u201d展开探究，了解\u201c信\u201d的传统内涵和现代意义，举办演讲会。",
    descEn:"Explore the concept of 'xin' (integrity/trust), understand its traditional meaning and modern significance, and hold a speech event."},
  lessons: [
    {
      id: 6, title: "藤野先生", titleEn: "Mr. Fujino",
      difficulty: 4,
      author: "鲁迅", authorEn: "Lu Xun",
      text: [
        "东京也无非是这样。上野的樱花烂熳的时节，望去确也像绯红的轻云，但花下也缺不了成群结队的\u201c清国留学生\u201d的速成班，头顶上盘着大辫子，顶得学生制帽的顶上高高耸起，形成一座富士山。也有解散辫子，盘得平的，除下帽来，油光可鉴，宛如小姑娘的发髻一般，还要将脖子扭几扭。实在标致极了。",
        "到别的地方去看看，如何呢？我就往仙台的医学专门学校去。",
        "过了一星期，大约是星期六，他使助手来叫我了。到得研究室，见他坐在人骨和许多单独的头骨中间。\u201c我的讲义，你能抄下来么？\u201d他问。我交出所抄的讲义去，他收下了，第二三天便还我。原来我的讲义已经从头到末，都用红笔添改过了，不但增加了许多脱漏的地方，连文法的错误，也都一一订正。这样一直继续到教完了他所担任的功课。",
        "中国是弱国，所以中国人当然是低能儿，分数在六十分以上，便不是自己的能力了。但我接着便有参观枪毙中国人的命运了。\u201c万岁！\u201d他们都拍掌欢呼起来。这种欢呼，是每看一片都有的，但在我，这一声却特别听得刺耳。此后回到中国来，我看见那些闲看枪毙犯人的人们——呜呼，无法可想！但在那时那地，我的意见却变化了。",
        "但不知怎地，我总还时时记起他，在我所认为我师的之中，他是最使我感激，给我鼓励的一个。有时我常常想：他的对于我的热心的希望，不倦的教诲，小而言之，是为中国，就是希望中国有新的医学；大而言之，是为学术，就是希望新的医学传到中国去。他的性格，在我的眼里和心里是伟大的，虽然他的姓名并不为许多人所知道。"
      ],
      textEn: [
        "Tokyo was just the same after all. During cherry blossom season in Ueno, the view did resemble light crimson clouds, but beneath the blossoms there was no shortage of Chinese exchange students in their accelerated classes, their queues coiled atop their heads, pushing up their student caps into Mount Fuji shapes. Some had undone their queues and wound them flat — remove their caps and you'd see hair sleek enough to serve as a mirror, just like a little girl's bun, with necks craning this way and that. Truly 'beautiful.'",
        "How about going somewhere else to look around? So I headed for the medical school in Sendai.",
        "About a week later, on a Saturday perhaps, he sent his assistant to summon me. In the research room, I found him sitting among human bones and separate skulls. 'Can you copy down my lectures?' he asked. I handed over my notes; he kept them and returned them in two or three days. My lecture notes had been corrected from beginning to end in red ink — not only were many omissions filled in, but even grammatical errors were corrected one by one. This continued until he had finished teaching his courses.",
        "China was a weak country, so Chinese were naturally inferior — any score above sixty couldn't be earned by one's own ability. Then came my fate of watching Chinese people being shot. 'Long live!' They all clapped and cheered. Such cheers accompanied every slide, but to me, this particular cheer was especially jarring. After returning to China, seeing those idly watching executions — alas, there was nothing to be done! But at that time and place, my views had changed.",
        "Yet somehow I still often remember him. Among those I regard as my teachers, he is the one who gives me the most gratitude and encouragement. I often think: his earnest hopes and tireless teachings for me — on a small scale, were for China, hoping China would have new medicine; on a large scale, were for scholarship, hoping new medicine would reach China. His character, in my eyes and heart, was great, even though his name is unknown to many."
      ],
      vocabWords: [
        {word:'绯红',pinyin:'fēi hóng',en:'crimson; scarlet',sentence:'上野的樱花烂熳的时节，望去确也像绯红的轻云。',sentenceEn:'During cherry blossom season in Ueno, the view indeed resembled light crimson clouds.'},
        {word:'油光可鉴',pinyin:'yóu guāng kě jiàn',en:'so sleek it can serve as a mirror',sentence:'除下帽来，油光可鉴。',sentenceEn:'Remove the cap, and the hair was sleek enough to serve as a mirror.'},
        {word:'抑扬顿挫',pinyin:'yì yáng dùn cuò',en:'with cadence; rhythmic',sentence:'藤野先生说话的声调抑扬顿挫。',sentenceEn:'Mr. Fujino spoke with a rhythmic cadence.'},
        {word:'深恶痛疾',pinyin:'shēn wù tòng jí',en:'to detest deeply',sentence:'他对不认真学习的学生深恶痛疾。',sentenceEn:'He deeply detested students who did not study earnestly.'},
        {word:'匿名',pinyin:'nì míng',en:'anonymous',sentence:'有人写了一封匿名信给我。',sentenceEn:'Someone wrote an anonymous letter to me.'}
      ],
      grammarPoints: [
        {point:'叙事线索',pointEn:'xù shì xiàn suǒ',example:'narrative thread',exampleEn:'明线是与藤野先生的交往，暗线是作者思想感情的变化。',explanation:'The explicit thread is the relationship with Mr. Fujino; the implicit thread is the evolution of the author’s thoughts and feelings.',explanationEn:'叙事散文可以有多条线索：明线推动情节发展，暗线揭示主题思想。'},
        {point:'欲扬先抑',pointEn:'yù yáng xiān yì',example:'suppression before elevation',exampleEn:'先写东京留学生的庸俗，反衬藤野先生的高尚品格。',explanation:'First describing the vulgarity of Chinese students in Tokyo contrasts with Mr. Fujino’s noble character.',explanationEn:'先写不好的方面，再突出好的方面，通过对比形成强烈反差。'}
      ],
      thinkExplore: [
        {cn:"文章记录了作者留学过程中的哪几件事？试为每件事拟一个小标题。", en:"What events from the author's study abroad does the article record? Try giving each a subtitle."},
        {cn:"为什么藤野先生\u201c在我的眼里和心里是伟大的\u201d？", en:"Why is Mr. Fujino 'great in my eyes and heart'?"},
        {cn:"作者为什么用大量篇幅写和藤野先生无关的见闻和感受？", en:"Why does the author devote much space to experiences unrelated to Mr. Fujino?"}
      ],
      accumExtend: [
        {cn:"比较原稿和改定稿的修改，谈谈鲁迅修改文章的方法。", en:"Compare the original and revised drafts to discuss Lu Xun's revision methods."},
        {cn:"\u201c弃医从文\u201d是鲁迅一生中的大事。课后查找相关资料，理解鲁迅这一人生选择。", en:"'Abandoning medicine for literature' was a major decision in Lu Xun's life. Find related materials to understand this choice."}
      ],
      authorBio: {cn:"鲁迅（1881\u20141936），原名周树人，字豫才，浙江绍兴人。中国现代文学的奠基人，伟大的文学家、思想家、革命家。代表作有小说集《呐喊》《彷徨》，散文集《朝花夕拾》，杂文集《坟》《热风》等。本文选自《朝花夕拾》。", en:"Lu Xun (1881\u20131936), born Zhou Shuren in Shaoxing, Zhejiang, was the founder of modern Chinese literature\u2014a great writer, thinker, and revolutionary. Major works include the story collections Call to Arms and Wandering, the essay collection Dawn Blossoms Plucked at Dusk, and numerous essay collections. This text is from Dawn Blossoms Plucked at Dusk."},
      teachingPoints: [{cn:"学习叙事散文的多线索结构：明线是与藤野先生的交往，暗线是作者思想感情的变化（爱国主义）。理解\u201c弃医从文\u201d的深层原因。", en:"Study the multi-thread structure of narrative prose: the explicit thread is the relationship with Mr. Fujino, the implicit thread is the author\u2019s evolving patriotism. Understand the deeper reasons for \u2018abandoning medicine for literature.\u2019"}, {cn:"体会文章选材的典型性——作者选取几个关键事件（改讲义、看幻灯片等）来表现人物精神。", en:"Appreciate the typicality of material selection\u2014the author chooses key events (correcting lecture notes, watching slides) to reveal character."}],
      parentTips: [{cn:"与孩子讨论师生关系的深远影响，引导孩子思考好老师对自己成长的帮助。", en:"Discuss the lasting impact of teacher-student relationships; guide your child to think about how good teachers help their growth."}, {cn:"帮助孩子理解鲁迅\u201c弃医从文\u201d背后的爱国情怀和社会责任感。", en:"Help your child understand the patriotic feelings and social responsibility behind Lu Xun\u2019s decision to abandon medicine for literature."}]
    },
    {
      id: 7, title: "回忆我的母亲", titleEn: "Remembering My Mother",
      difficulty: 5,
      author: "朱德", authorEn: "Zhu De",
      text: [
        "得到母亲去世的消息，我很悲痛。我爱我母亲，特别是她勤劳一生，很多事情是值得我永远回忆的。",
        "母亲是个好劳动。从我能记忆时起，总是天不亮就起床。全家二十多口人，妇女们轮班煮饭，轮到就煮一年。母亲把饭煮了，还要种田，种菜，喂猪，养蚕，纺棉花。因为她身体高大结实，还能挑水挑粪。",
        "勤劳的家庭是有规律有组织的。母亲在家庭里极能任劳任怨。她性格和蔼，没有打骂过我们，也没有同任何人吵过架。母亲同情贫苦的人——这是朴素的阶级意识，虽然自己不富裕，还周济和照顾比自己更穷的亲戚。",
        "我应该感谢母亲，她教给我与困难做斗争的经验。母亲又给我一个强健的身体，一个勤劳的习惯，使我从来没感到过劳累。",
        "母亲是一个平凡的人，她只是中国千百万劳动人民中的一员，但是，正是这千百万人创造了和创造着中国的历史。我将继续尽忠于我们的民族和人民，尽忠于我们的民族和人民的希望——中国共产党，使和母亲同样生活着的人能够过快乐的生活。"
      ],
      textEn: [
        "When I received the news of my mother's passing, I was deeply grieved. I love my mother, especially for her lifelong industriousness — many things are worth remembering forever.",
        "Mother was a good worker. From my earliest memories, she always rose before dawn. With over twenty people in the family, the women took turns cooking — whoever's turn it was cooked for a year. After cooking, mother still had to farm, garden, feed pigs, raise silkworms, and spin cotton. Because she was tall and strong, she could also carry water and haul manure.",
        "An industrious family is orderly and organized. Mother bore all hardships and complaints in the family without resentment. She was gentle-natured, never hit or scolded us, never quarreled with anyone. Mother sympathized with the poor — a simple class consciousness — and despite not being well-off herself, still helped and cared for even poorer relatives.",
        "I should thank my mother for teaching me to struggle against difficulties. She also gave me a strong body and industrious habits, so I never felt fatigued.",
        "Mother was an ordinary person, just one of China's millions of working people, but it is precisely these millions who created and continue to create China's history. I will continue to serve our nation and people faithfully, serving the hope of our nation — the Communist Party of China — so that people living as my mother did can lead happy lives."
      ],
      vocabWords: [
        {word:'任劳任怨',pinyin:'rèn láo rèn yuàn',en:'to bear hardships and complaints without resentment',sentence:'母亲在家庭里极能任劳任怨。',sentenceEn:'Mother bore all hardships and complaints in the family without resentment.'},
        {word:'周济',pinyin:'zhōu jì',en:'to give relief to; to help financially',sentence:'还周济和照顾比自己更穷的亲戚。',sentenceEn:'She still helped and cared for even poorer relatives.'},
        {word:'为富不仁',pinyin:'wéi fù bù rén',en:'the rich are heartless',sentence:'地主为富不仁，压迫佃户。',sentenceEn:'The landlords were heartless and oppressed the tenants.'},
        {word:'不辍',pinyin:'bù chuò',en:'without stopping; ceaselessly',sentence:'母亲勤劳不辍。',sentenceEn:'Mother worked ceaselessly.'},
        {word:'聊叙',pinyin:'liáo xù',en:'to briefly narrate',sentence:'聊叙人伦之情。',sentenceEn:'To briefly narrate family bonds.'}
      ],
      grammarPoints: [
        {point:'夹叙夹议',pointEn:'jiā xù jiā yì',example:'alternating narration and commentary',exampleEn:'我应该感谢母亲，她教给我与困难做斗争的经验。',explanation:'I should thank my mother for teaching me to struggle against difficulties.',explanationEn:'在叙述事实的过程中穿插议论，既展现事迹又揭示意义。'}
      ],
      thinkExplore: [
        {cn:"母亲的\u201c勤劳\u201d是通过哪些事例体现出来的？从文中还可以看出母亲具有怎样的品格？", en:"Through which examples is the mother's 'industriousness' shown? What other qualities can be seen?"},
        {cn:"作者从母亲身上得到了哪些教益？", en:"What lessons did the author learn from his mother?"},
        {cn:"找出文中议论性的语句，理解其含义并体会其作用。", en:"Find argumentative sentences in the text; understand their meaning and appreciate their function."}
      ],
      accumExtend: [
        {cn:"体会文章语言平实如话、字里行间饱含深情的特点。", en:"Appreciate the plain-spoken language that is full of deep emotion between the lines."}
      ],
      authorBio: {cn:"朱德（1886\u20141976），字玉阶，四川仪陇人。伟大的无产阶级革命家、政治家、军事家，中国人民解放军主要缔造者之一，中华人民共和国十大元帅之首。本文写于1944年母亲逝世后。", en:"Zhu De (1886\u20131976), born in Yilong, Sichuan, was a great proletarian revolutionary, statesman, and military strategist. He was one of the principal founders of the PLA and ranked first among the PRC\u2019s Ten Marshals. This essay was written after his mother\u2019s death in 1944."},
      teachingPoints: [{cn:"学习回忆性散文的写法：以时间为线索选取典型事例，将记叙与议论、抒情相结合，表达对母亲的深切怀念。", en:"Learn memoir writing techniques: selecting typical events chronologically, combining narration with commentary and lyricism to express deep remembrance."}, {cn:"体会文章\u201c以小见大\u201d的手法——通过母亲个人的勤劳、善良，映射千百万劳动人民的品质。", en:"Appreciate the \u2018seeing the great through the small\u2019 technique\u2014using the mother\u2019s personal diligence and kindness to reflect the qualities of millions of working people."}],
      parentTips: [{cn:"鼓励孩子讲述或写下对家庭长辈的记忆和感恩之情。", en:"Encourage your child to narrate or write down memories and gratitude toward family elders."}, {cn:"帮助孩子体会\u201c平实语言中蕴含深情\u201d的写作特点，避免过度华丽的辞藻。", en:"Help your child appreciate how plain language can convey deep emotion, avoiding overly ornate expression."}]
    },
    {
      id: 8, title: "列夫\u00b7托尔斯泰", titleEn: "Leo Tolstoy",
      difficulty: 5,
      author: "茨威格", authorEn: "Stefan Zweig",
      isSelfRead: true,
      text: [
        "他生就一副多毛的脸庞，植被多于空地，浓密的胡髭使人难以看清他的内心世界。长髯覆盖了两颊，遮住了嘴唇，遮住了皱似树皮的黝黑脸膛，一根根迎风飘动，颇有长者风度。像米开朗琪罗画的摩西一样，托尔斯泰给人留下的难忘形象，来源于他那犹如卷起的滔滔白浪的大胡子。",
        "这副劳动者的忧郁面孔上笼罩着消沉的阴影，滞留着愚钝和压抑：在他脸上找不到一点儿奋发向上的灵气，找不到精神光彩。他的面容没有一点儿光彩可言。无疑，这张脸平淡无奇，障碍重重，不是传播智慧的庙堂，而是禁锢思想的囚牢。",
        "突然，客人惊奇地屏住了呼吸，只见面前的小个子那对浓似灌木丛的眉毛下面，一对灰色的眼睛射出一道黑豹似的目光。这道目光就像一把锃亮的钢刀刺了过来，又稳又准，击中要害，令你无法动弹，无法躲避。",
        "亏得有这么一对眼睛，托尔斯泰的脸上于是透出一股才气来。高尔基对它们恰如其分的描述，说出了我们的心里话：\u201c托尔斯泰这对眼睛里有一百只眼珠。\u201d",
        "具有这种犀利眼光，能够看清真相的人，可以任意支配整个世界及其知识财富。作为一个始终具有善于观察并能看透事物本质的眼光的人，他肯定缺少一样东西，那就是属于自己的那一份幸福。"
      ],
      textEn: [
        "He was born with a hirsute face, more vegetation than clearing. Dense mustache made it hard to see his inner world. A long beard covered both cheeks, concealing lips and the bark-like dark complexion, each strand waving in the wind with patriarchal dignity. Like Michelangelo's Moses, Tolstoy's unforgettable image came from his great beard like rolling white waves.",
        "This laborer's melancholy face was shrouded in dejection, stagnant with dullness and suppression: not a trace of vitality could be found, no spiritual radiance. Undoubtedly, this face was utterly unremarkable — not a temple spreading wisdom but a prison confining thought.",
        "Suddenly the visitor caught his breath in astonishment. Beneath the small man's eyebrows, thick as shrubs, a pair of gray eyes shot out a panther-like gaze. This gaze pierced like a gleaming steel blade — steady, precise, striking the vital point, leaving you unable to move or evade.",
        "Thanks to these eyes, Tolstoy's face radiated genius. Gorky's apt description spoke our hearts: 'Tolstoy has a hundred eyes in those two eyes of his.'",
        "A person with such piercing vision who can see the truth can command the entire world and its intellectual wealth. Yet as someone who always possessed the ability to observe keenly and penetrate the essence of things, he surely lacked one thing — his own share of happiness."
      ],
      vocabWords: [
        {word:'黝黑',pinyin:'yǒu hēi',en:'swarthy; dark-skinned',sentence:'遮住了皱似树皮的黝黑脸膛。',sentenceEn:'Concealing the dark, bark-like complexion.'},
        {word:'粗制滥造',pinyin:'cū zhì làn zào',en:'crudely and carelessly made',sentence:'这张脸仿佛是粗制滥造的。',sentenceEn:'This face seemed crudely fashioned.'},
        {word:'藏污纳垢',pinyin:'cáng wū nà gòu',en:'to harbor filth',sentence:'这副面孔似乎能藏污纳垢。',sentenceEn:'This countenance seemed capable of harboring every kind of ugliness.'},
        {word:'犀利',pinyin:'xī lì',en:'sharp; incisive',sentence:'那对灰色的眼睛射出犀利的目光。',sentenceEn:'Those gray eyes shot out an incisive gaze.'},
        {word:'锃亮',pinyin:'zèng liàng',en:'shiny; gleaming',sentence:'目光就像一把锃亮的钢刀刺了过来。',sentenceEn:'The gaze pierced like a gleaming steel blade.'}
      ],
      grammarPoints: [
        {point:'欲扬先抑',pointEn:'yù yáng xiān yì',example:'suppression before elevation',exampleEn:'先极力描写平庸的外貌，再突出眼睛的非凡。',explanation:'First describing the ordinary appearance in great detail, then highlighting the extraordinary eyes.',explanationEn:'先写不好的方面来形成铺垫，再突然转向好的方面，形成巨大的反差和强烈的震撼效果。'}
      ],
      readingTips: [
        {cn:"体会欲扬先抑的手法如何形成巨大反差，带给读者强烈震撼。", en:"Appreciate how the technique of 'suppression before elevation' creates a powerful contrast that deeply moves the reader."},
        {cn:"品味作者大量运用比喻和夸张的语言特点。", en:"Savor the author's extensive use of metaphor and hyperbole."}
      ],
      authorBio: {cn:"斯蒂芬\u00b7茨威格（1881\u20141942），奥地利著名小说家、传记作家。代表作有中篇小说《一个陌生女人的来信》、传记《人类群星闪耀时》等。本文选自其传记作品《三作家》中关于托尔斯泰的章节。", en:"Stefan Zweig (1881\u20131942) was a renowned Austrian novelist and biographer. His major works include the novella Letter from an Unknown Woman and the biographical collection Decisive Moments in History. This text is from his biographical work Three Masters, in the chapter on Tolstoy."},
      teachingPoints: [{cn:"理解\u201c欲扬先抑\u201d的写作手法：先极力描写托尔斯泰平庸甚至丑陋的外貌，再突然转向其眼睛的非凡，形成巨大反差。", en:"Understand the \u2018suppression before elevation\u2019 technique: first describing Tolstoy\u2019s ordinary, even ugly appearance in detail, then suddenly revealing the extraordinary power of his eyes, creating a dramatic contrast."}, {cn:"品味文章大量运用比喻和夸张的修辞手法，分析其表达效果。", en:"Savor the extensive use of metaphor and hyperbole, and analyze their expressive effects."}],
      parentTips: [{cn:"和孩子一起查阅托尔斯泰的照片和作品简介，帮助他们更直观地理解课文描写。", en:"Look up photos and biographical overviews of Tolstoy with your child to help them visualize the text\u2019s descriptions."}, {cn:"引导孩子理解\u201c以貌取人\u201d的局限性，讨论外表与内在精神的关系。", en:"Guide your child to understand the limitations of judging by appearances and discuss the relationship between exterior and inner spirit."}]
    },
    {
      id: 9, title: "美丽的颜色", titleEn: "The Beautiful Color",
      difficulty: 5,
      author: "艾芙\u00b7居里", authorEn: "Eve Curie",
      isSelfRead: true,
      text: [
        "娄蒙路的棚屋，可以说是不舒服的典型。在夏天，因为棚顶是玻璃的，棚屋里面燥热得像温室。在冬天，简直不知道是应该希望下霜还是应该下雨。那个炉子即使把它烧到炽热的程度，也令人完全失望。",
        "她独自一个人就是一家工厂。玛丽在院子里穿着满是尘污和酸渍的旧工作服，头发被风吹得飘起来，周围的烟刺激着眼睛和咽喉。",
        "工作日变成了工作月，工作月变成了工作年，比埃尔和玛丽并没有失掉勇气。这种抵抗他们的材料迷住了他们。",
        "有一天，玛丽像期盼别人已经答应给的玩具的小孩一样，怀着热切的好奇心说：\u201c我真想知道\u2018它\u2019会是什么样子，它的相貌如何。比埃尔，在你的想象中，它是什么形状？\u201d这个物理学家和颜悦色地回答：\u201c我不知道……你可以想到，我希望它有很美丽的颜色。\u201d",
        "玛丽说：\u201c不要点灯！\u201d接着轻轻地笑了笑，再说：\u201c你记得你对我说\u2018我希望它有很美丽的颜色\u2019的那一天吗？\u201d镭不只有\u201c美丽的颜色\u201d，它还自动发光！在这个黑暗的棚屋里，那些略带蓝色荧光的轮廓闪耀着，悬在夜的黑暗中。",
        "\u201c看哪……看哪！\u201d这位年轻妇人低声说着。她永远记得看荧光的这一晚，永远记得这种神妙世界的奇观。"
      ],
      textEn: [
        "The shed on Lhomond Street was the epitome of discomfort. In summer, with its glass roof, the interior was hot as a greenhouse. In winter, one hardly knew whether to hope for frost or rain. The stove, even heated to the point of glowing, was utterly disappointing.",
        "She alone was an entire factory. Marie worked in the yard wearing an old work suit covered in dust and acid stains, her hair blown by the wind, the surrounding fumes stinging her eyes and throat.",
        "Working days became working months, working months became working years, and Pierre and Marie did not lose courage. The material that resisted them fascinated them.",
        "One day, Marie, like a child eagerly awaiting a promised toy, said with fervent curiosity: 'I wonder what \"it\" will look like, what its appearance will be. Pierre, what shape do you imagine it has?' The physicist replied gently: 'I don't know... but I hope it will have a very beautiful color.'",
        "Marie said: 'Don't turn on the light!' Then she laughed softly and added: 'Do you remember the day you said to me, \"I hope it will have a very beautiful color\"?' Radium didn't just have a 'beautiful color' — it glowed on its own! In the dark shed, those faintly blue-fluorescent outlines shimmered, suspended in the darkness of night.",
        "'Look... look!' the young woman whispered. She would forever remember this night of watching the glow, forever remember this wondrous spectacle of a magical world."
      ],
      vocabWords: [
        {word:'燥热',pinyin:'zào rè',en:'sweltering',sentence:'棚屋里面燥热得像温室。',sentenceEn:'The shed was as sweltering as a greenhouse.'},
        {word:'炽热',pinyin:'chì rè',en:'scorching; blazing',sentence:'那个炉子即使把它烧到炽热的程度。',sentenceEn:'Even when the stove was heated to a blazing degree.'},
        {word:'沥青',pinyin:'lì qīng',en:'pitch; asphalt',sentence:'在那混着铁屑和沥青的空气中工作。',sentenceEn:'Working in air mixed with iron filings and pitch.'},
        {word:'猝然',pinyin:'cù rán',en:'suddenly; unexpectedly',sentence:'猝然看见了那美丽的颜色。',sentenceEn:'Suddenly she saw that beautiful color.'},
        {word:'荧光',pinyin:'yíng guāng',en:'fluorescence',sentence:'镭射出的荧光在黑暗中闪烁。',sentenceEn:'The fluorescence emitted by radium glowed in the darkness.'}
      ],
      readingTips: [
        {cn:"注意文中多次引用居里夫人自己的话，体会其增强真实性和变换叙述节奏的作用。", en:"Note the frequent quotations from Madame Curie herself, which enhance authenticity and vary the narrative pace."},
        {cn:"感受传记如何通过细节描写展现科学家的坚守与乐观。", en:"Appreciate how biography reveals scientists' perseverance and optimism through detail."}
      ],
      authorBio: {cn:"艾芙\u00b7居里（1904\u20142007），法国钢琴家、作家、记者，居里夫人的小女儿。1937年出版母亲的传记《居里夫人传》，是了解居里夫人生平最权威的作品之一。本文即选自该书。", en:"Eve Curie (1904\u20132007) was a French pianist, author, and journalist, and the younger daughter of Marie Curie. In 1937, she published Madame Curie, a biography of her mother and one of the most authoritative works on Marie Curie\u2019s life. This text is excerpted from that book."},
      teachingPoints: [{cn:"学习传记中引用传主原话来增强真实感和亲切感的写法，注意直接引语对叙述节奏的调节作用。", en:"Learn how quoting the subject\u2019s own words in biography enhances authenticity and intimacy; note how direct speech adjusts narrative pacing."}, {cn:"体会细节描写（简陋的实验室、艰苦的工作条件）如何衬托居里夫妇执着追求科学的精神。", en:"Appreciate how descriptive details (the crude lab, harsh working conditions) set off the Curies\u2019 persistent pursuit of science."}],
      parentTips: [{cn:"与孩子讨论科学发现的过程，理解坚持与耐心的重要性。", en:"Discuss the process of scientific discovery with your child; understand the importance of perseverance and patience."}, {cn:"鼓励孩子阅读其他科学家传记，培养对科学探索的兴趣。", en:"Encourage your child to read other scientists\u2019 biographies and develop an interest in scientific exploration."}]
    }
  ]
},
/* ═══════════════════════════════════════════ */
/*  UNIT 3 — 山水景物 (古文与唐诗)              */
/* ═══════════════════════════════════════════ */
{
  id: 3, title: "第三单元", titleEn: "Unit 3 — Landscapes in Classical Chinese", type: "kewen",
  writing: {title:"学习描写景物", titleEn:"Learning to Describe Scenery",
    desc:"借助联想和想象，学习古人描写山水的方法，练习景物描写。",
    descEn:"Using association and imagination, learn from the ancients' methods of describing landscapes; practice scenic writing."},
  classicBookGuide: {title:"《红星照耀中国》纪实作品的阅读", titleEn:"Red Star Over China: Reading Non-fiction",
    desc:"学习阅读纪实作品的方法，了解中国革命历史。",
    descEn:"Learn methods for reading non-fiction works; understand the history of the Chinese revolution."},
  extracurricularPoetry: [
    {title:"庭中有奇树", titleEn:"A Wondrous Tree in the Courtyard", author:"《古诗十九首》", authorEn:"Nineteen Old Poems"},
    {title:"龟虽寿", titleEn:"Though the Tortoise Lives Long", author:"曹操", authorEn:"Cao Cao"},
    {title:"赠从弟（其二）", titleEn:"To My Cousin (II)", author:"刘桢", authorEn:"Liu Zhen"},
    {title:"梁甫行", titleEn:"Song of Liangfu", author:"曹植", authorEn:"Cao Zhi"}
  ],
  lessons: [
    {
      id: 10, title: "三峡", titleEn: "The Three Gorges",
      difficulty: 4,
      author: "郦道元", authorEn: "Li Daoyuan",
      isClassical: true,
      text: [
            "\u90e6\u9053\u5143\u81ea\u4e09\u5ce1\u4e03\u767e\u91cc\u4e2d\uff0c\u4e24\u5cb8\u8fde\u5c71\uff0c\u7565\u65e0\u9619\u5904\u3002\u91cd\u5ca9\u53e0\u5d82\uff0c\u9690\u5929\u853d\u65e5\uff0c\u81ea\u975e\u4ead\u5348\u591c\u5206\uff0c\u4e0d\u89c1\u66e6\u6708\u3002\u81f3\u4e8e\u590f\u6c34\u8944\u9675\uff0c\u6cbf\u6eaf\u963b\u7edd\u3002\u6216\u738b\u547d\u6025\u5ba3\uff0c\u6709\u65f6\u671d\u53d1\u767d\u5e1d\uff0c\u66ae\u5230\u6c5f\u9675\uff0c\u5176\u95f4\u5343\u4e8c\u767e\u91cc\uff0c\u867d\u4e58\u5954\u5fa1\u98ce\uff0c\u4e0d\u4ee5\u75be\u4e5f\u3002\u6625\u51ac\u4e4b\u65f6\uff0c\u5219\u7d20\u6e4d\u7eff\u6f6d\uff0c\u56de\u6e05\u5012\u5f71\uff0c\u7edd\u591a\u751f\u602a\u67cf\uff0c\u60ac\u6cc9\u7011\u5e03\uff0c\u98de\u6f31\u5176\u95f4\uff0c\u6e05\u8363\u5cfb\u8302\uff0c\u826f\u591a\u8da3\u5473\u3002\u6bcf\u81f3\u6674\u521d\u971c\u65e6\uff0c\u6797\u5bd2\u6da7\u8083\uff0c\u5e38\u6709\u9ad8\u733f\u957f\u5578\uff0c\u5c5e\u5f15\u51c4\u5f02\uff0c\u7a7a\u8c37\u4f20\u54cd\uff0c\u54c0\u8f6c\u4e45\u7edd\u3002\u6545\u6e14\u8005\u6b4c\u66f0\uff1a\u201c\u5df4\u4e1c\u4e09\u5ce1\u5deb\u5ce1\u957f\uff0c\u733f\u9e23\u4e09\u58f0\u6cea\u6cbe\u88f3\u3002\u201d\u9676\u5f18\u666f\u5c71\u5ddd\u4e4b\u7f8e\uff0c\u53e4\u6765\u5171\u8c08\u3002\u9ad8\u5cf0\u5165\u4e91\uff0c\u6e05\u6d41\u89c1\u5e95\u3002\u4e24\u5cb8\u77f3\u58c1\uff0c\u4e94\u8272\u4ea4\u8f89\u3002\u9752\u6797\u7fe0\u7af9\uff0c\u56db\u65f6\u4ff1\u5907\u3002\u6653\u96fe\u5c06\u6b47\uff0c\u733f\u9e1f\u4e71\u9e23\uff1b\u5915\u65e5\u6b32\u9893\uff0c\u6c89\u9cde\u7ade\u8dc3\u3002\u5b9e\u662f\u6b32\u754c\u4e4b\u4ed9\u90fd\u3002\u81ea\u5eb7\u4e50\u4ee5\u6765\uff0c\u672a\u590d\u6709\u80fd\u4e0e\u5176\u5947\u8005\u3002",
            "\u82cf\u8f7c\u5143\u4e30\u516d\u5e74\u5341\u6708\u5341\u4e8c\u65e5\u591c\uff0c\u89e3\u8863\u6b32\u7761\uff0c\u6708\u8272\u5165\u6237\uff0c\u6b23\u7136\u8d77\u884c\u3002\u5ff5\u65e0\u4e0e\u4e3a\u4e50\u8005\uff0c\u9042\u81f3\u627f\u5929\u5bfa\u5bfb\u5f20\u6000\u6c11\u3002\u6000\u6c11\u4ea6\u672a\u5bdd\uff0c\u76f8\u4e0e\u6b65\u4e8e\u4e2d\u5ead\u3002\u5ead\u4e0b\u5982\u79ef\u6c34\u7a7a\u660e\uff0c\u6c34\u4e2d\u85fb\u3001\u8347\u4ea4\u6a2a\uff0c\u76d6\u7af9\u67cf\u5f71\u4e5f\u3002\u4f55\u591c\u65e0\u6708\uff1f\u4f55\u5904\u65e0\u7af9\u67cf\uff1f\u4f46\u5c11\u95f2\u4eba\u5982\u543e\u4e24\u4eba\u8005\u8033\u3002\u5434\u5747\u98ce\u70df\u4ff1\u51c0\uff0c\u5929\u5c71\u5171\u8272\u3002\u4ece\u6d41\u98d8\u8361\uff0c\u4efb\u610f\u4e1c\u897f\u3002\u81ea\u5bcc\u9633\u81f3\u6850\u5e90\u4e00\u767e\u8bb8\u91cc\uff0c\u5947\u5c71\u5f02\u6c34\uff0c\u5929\u4e0b\u72ec\u7edd\u3002\u6c34\u7686\u7f25\u78a7\uff0c\u5343\u4e08\u89c1\u5e95\u3002\u6e38\u9c7c\u7ec6\u77f3\uff0c\u76f4\u89c6\u65e0\u788d\u3002\u6025\u6e4d\u751a\u7bad\uff0c\u731b\u6d6a\u82e5\u5954\u3002\u5939\u5cb8\u9ad8\u5c71\uff0c\u7686\u751f\u5bd2\u6811\uff0c\u8d1f\u52bf\u7ade\u4e0a\uff0c\u4e92\u76f8\u8f69\u9088\uff0c\u4e89\u9ad8\u76f4\u6307\uff0c\u5343\u767e\u6210\u5cf0\u3002\u6cc9\u6c34\u6fc0\u77f3\uff0c\u6ce0\u6ce0\u4f5c\u54cd\uff1b\u597d\u9e1f\u76f8\u9e23\uff0c\u5624\u5624\u6210\u97f5\u3002\u8749\u5219\u5343\u8f6c\u4e0d\u7a77\uff0c\u733f",
            "\u5219\u767e\u53eb\u65e0\u7edd\u3002\u9e22\u98de\u623e\u5929\u8005\uff0c\u671b\u5cf0\u606f\u5fc3\uff1b\u7ecf\u7eb6\u4e16\u52a1\u8005\uff0c\u7aa5\u8c37\u5fd8\u53cd\u3002\u6a2a\u67ef\u4e0a\u853d\uff0c\u5728\u663c\u72b9\u660f\uff1b\u758f\u6761\u4ea4\u6620\uff0c\u6709\u65f6\u89c1\u65e5\u3002\u738b\u7ee9\u4e1c\u768b\u8584\u66ae\u671b\uff0c\u5f99\u501a\u6b32\u4f55\u4f9d\u3002\u6811\u6811\u7686\u79cb\u8272\uff0c\u5c71\u5c71\u552f\u843d\u6656\u3002\u7267\u4eba\u9a71\u728a\u8fd4\uff0c\u730e\u9a6c\u5e26\u79bd\u5f52\u3002\u76f8\u987e\u65e0\u76f8\u8bc6\uff0c\u957f\u6b4c\u6000\u91c7\u8587\u3002\u5d14\u98a2\u6614\u4eba\u5df2\u4e58\u9ec4\u9e64\u53bb\uff0c\u6b64\u5730\u7a7a\u4f59\u9ec4\u9e64\u697c\u3002\u9ec4\u9e64\u4e00\u53bb\u4e0d\u590d\u8fd4\uff0c\u767d\u4e91\u5343\u8f7d\u7a7a\u60a0\u60a0\u3002\u6674\u5ddd\u5386\u5386\u6c49\u9633\u6811\uff0c\u82b3\u8349\u840b\u840b\u9e66\u9e49\u6d32\u3002\u65e5\u66ae\u4e61\u5173\u4f55\u5904\u662f\uff1f\u70df\u6ce2\u6c5f\u4e0a\u4f7f\u4eba\u6101\u3002\u738b\u7ef4\u5355\u8f66\u6b32\u95ee\u8fb9\uff0c\u5c5e\u56fd\u8fc7\u5c45\u5ef6\u3002\u5f81\u84ec\u51fa\u6c49\u585e\uff0c\u5f52\u96c1\u5165\u80e1\u5929\u3002\u5927\u6f20\u5b64\u70df\u76f4\uff0c\u957f\u6cb3\u843d\u65e5\u5706\u3002\u8427\u5173\u9022\u5019\u9a91\uff0c\u90fd\u62a4\u5728\u71d5\u7136\u3002",
            "\u674e\u767d\u6e21\u8fdc\u8346\u95e8\u5916\uff0c\u6765\u4ece\u695a\u56fd\u6e38\u3002\u5c71\u968f\u5e73\u91ce\u5c3d\uff0c\u6c5f\u5165\u5927\u8352\u6d41\u3002\u6708\u4e0b\u98de\u5929\u955c\uff0c\u4e91\u751f\u7ed3\u6d77\u697c\u3002\u4ecd\u601c\u6545\u4e61\u6c34\uff0c\u4e07\u91cc\u9001\u884c\u821f\u3002\u767d\u5c45\u6613\u5b64\u5c71\u5bfa\u5317\u8d3e\u4ead\u897f\uff0c\u6c34\u9762\u521d\u5e73\u4e91\u811a\u4f4e\u3002\u51e0\u5904\u65e9\u83ba\u4e89\u6696\u6811\uff0c\u8c01\u5bb6\u65b0\u71d5\u5544\u6625\u6ce5\u3002\u4e71\u82b1\u6e10\u6b32\u8ff7\u4eba\u773c\uff0c\u6d45\u8349\u624d\u80fd\u6ca1\u9a6c\u8e44\u3002\u6700\u7231\u6e56\u4e1c\u884c\u4e0d\u8db3\uff0c\u7eff\u6768\u9634\u91cc\u767d\u6c99\u5824\u3002"
          ],
      textEn: [
        "Within the seven hundred li of the Three Gorges, mountains line both banks in unbroken succession, with no gap at all. Layer upon layer of cliffs and peaks hide the sky and block the sun — unless at high noon or midnight, neither sun nor moon can be seen.",
        "When summer waters surge over the hills, passage upstream or downstream is completely blocked. Sometimes, when a royal command requires urgent delivery, one may depart from Baidi at dawn and reach Jiangling by evening — a distance of twelve hundred li. Even riding a galloping horse or the wind itself could not be faster.",
        "In spring and winter, white rapids rush over green pools, and clear reflections shimmer. On the highest peaks grow strange cypresses; hanging springs and waterfalls cascade among them. The water is clear, trees flourish, mountains are steep, grasses are lush — truly full of charm.",
        "When the sky first clears on frosty mornings, the forests are cold and the gorges solemn. High-perched gibbons often give long, shrill cries — eerie and drawn-out — that echo through the empty valleys, their mournful sound lingering long before fading. As the fishermen's song goes: 'Of Badong's Three Gorges, the Wu Gorge is longest; at three gibbon cries, tears soak one's clothes.'"
      ],
      vocabWords: [
        {word:'重岩叠嶂',pinyin:'chóng yán dié zhàng',en:'layers of cliffs and peaks',sentence:'重岩叠嶂，隐天蔽日。',sentenceEn:'Layer upon layer of cliffs and peaks hid the sky and blocked the sun.'},
        {word:'沿溯阻绝',pinyin:'yán sù zǔ jué',en:'both downstream and upstream travel blocked',sentence:'至于夏水襄陵，沿溯阻绝。',sentenceEn:'When summer waters surged over the hills, passage in both directions was blocked.'},
        {word:'素湍',pinyin:'sù tuān',en:'white rapids',sentence:'春冬之时，则素湍绿潭。',sentenceEn:'In spring and winter, white rapids rushed over green pools.'},
        {word:'属引凄异',pinyin:'zhǔ yǐn qī yì',en:'prolonged and eerily mournful',sentence:'常有高猿长啸，属引凄异。',sentenceEn:'Often high-perched gibbons gave long cries, prolonged and eerily mournful.'},
        {word:'清荣峻茂',pinyin:'qīng róng jùn mào',en:'water clear, trees lush, mountains steep, grasses thick',sentence:'清荣峻茂，良多趣味。',sentenceEn:'Water clear, trees lush, mountains steep, grasses thick, truly full of charm.'}
      ],
      grammarPoints: [
        {point:'写景顺序',pointEn:'xiě jǐng shùn xù',example:'order of landscape description',exampleEn:'先写山，后写水；写水时先夏后春冬再秋。',explanation:'First describing mountains, then water; for water, starting with summer, then spring-winter, and finally autumn.',explanationEn:'按照由整体到局部、由主要到次要的顺序安排景物描写，层次分明。'}
      ],
      thinkExplore: [
        {cn:"作者是按什么顺序写三峡景物的？这样写有什么好处？", en:"In what order does the author describe the Three Gorges scenery? What are the benefits of this approach?"},
        {cn:"说说作者笔下三峡不同季节的景物各有怎样的特征。", en:"Describe the characteristics of the Three Gorges scenery in each season as portrayed by the author."}
      ],
      accumExtend: [
        {cn:"翻译课文的中间两段，边读边体会不同的语言特点。", en:"Translate the middle two paragraphs; read and appreciate the different language characteristics."}
      ],
      authorBio: {cn:"郦道元（约470\u2014527），字善长，北魏范阳涿县（今河北涿州）人。杰出的地理学家、散文家。所撰《水经注》全面系统地介绍了水道所经地区的自然地理和经济地理等，是中国古代地理名著，文笔优美，具有很高的文学价值。", en:"Li Daoyuan (c. 470\u2013527), courtesy name Shanzhang, was from Zhuoxian (modern Zhuozhou, Hebei) during the Northern Wei dynasty. A distinguished geographer and prose writer, his Commentary on the Waterways Classic systematically describes the natural and economic geography of regions along waterways, and is both a geographical masterpiece and a work of high literary value."},
      teachingPoints: [{cn:"学习文章按季节顺序（夏、春冬、秋）描写三峡景物的结构方法，理解先写夏水的用意（水势最为壮观）。", en:"Study the structural method of describing the Three Gorges by season (summer, spring/winter, autumn); understand why summer water comes first (most spectacular)."}, {cn:"品味骈散结合的语言特点，体会短句的节奏感和音韵美。积累\u201c虽乘奔御风，不以疾也\u201d等经典语句。", en:"Appreciate the blend of parallel and free prose styles; feel the rhythm and musicality of short sentences. Accumulate classic phrases like \u2018even riding a galloping horse could not be faster.\u2019"}],
      parentTips: [{cn:"和孩子一起观看三峡的图片或视频，将古文描写与实景对照，加深理解。", en:"Watch Three Gorges images or videos with your child, comparing the classical descriptions with real scenery to deepen understanding."}, {cn:"帮助孩子背诵全文，这是初中阶段必背古文之一。", en:"Help your child memorize the full text\u2014this is one of the required classical texts for junior high."}]
    },
    {
      id: 11, title: "短文二篇", titleEn: "Two Short Essays",
      difficulty: 4,
      isClassical: true,
      multiText: [
        {
          title: "答谢中书书", titleEn: "Reply to Secretary Xie",
          author: "陶弘景", authorEn: "Tao Hongjing",
          text: [
        "\u7b54\u8c22\u4e2d\u4e66\u4e66\n\u9676\u5f18\u666f\n\u5c71\u5ddd\u4e4b\u7f8e\uff0c\u53e4\u6765\u5171\u8c08\u3002\u9ad8\u5cf0\u5165\u4e91\uff0c\u6e05\u6d41\u89c1\u5e95\u3002\u4e24\u5cb8\u77f3\u58c1\uff0c\u4e94\u8272\u4ea4\u8f89\u3002\u9752\u6797\u7fe0\u7af9\uff0c\u56db\u65f6\u4ff1\u5907\u3002\u6653\u96fe\u5c06\u6b47\uff0c\u733f\u9e1f\u4e71\u9e23\uff1b\u5915\u65e5\u6b32\u9887\uff0c\u6c89\u9c9e\u7ade\u8dc3\u3002\u5b9e\u662f\u6b32\u754c\u4e4b\u4ed9\u90fd\u3002\u81ea\u5eb7\u4e50\u4ee5\u6765\uff0c\u672a\u590d\u6709\u80fd\u4e0e\u5176\u5947\u8005\u3002",
        "\u8bb0\u627f\u5929\u5bfa\u591c\u6e38\n\u82cf\u8f7c\n\u5143\u4e30\u516d\u5e74\u5341\u6708\u5341\u4e8c\u65e5\u591c\uff0c\u89e3\u8863\u6b32\u7761\uff0c\u6708\u8272\u5165\u6237\uff0c\u6b23\u7136\u8d77\u884c\u3002\u5ff5\u65e0\u4e0e\u4e3a\u4e50\u8005\uff0c\u9042\u81f3\u627f\u5929\u5bfa\u5bfb\u5f20\u6000\u6c11\u3002\u6000\u6c11\u4ea6\u672a\u5bdd\uff0c\u76f8\u4e0e\u6b65\u4e8e\u4e2d\u5ead\u3002\u5ead\u4e0b\u5982\u79ef\u6c34\u7a7a\u660e\uff0c\u6c34\u4e2d\u85fb\u3001\u8347\u4ea4\u6a2a\uff0c\u76d6\u7af9\u67cf\u5f71\u4e5f\u3002\u4f55\u591c\u65e0\u6708\uff1f\u4f55\u5904\u65e0\u7af9\u67cf\uff1f\u4f46\u5c11\u95f2\u4eba\u5982\u543e\u4e24\u4eba\u8005\u8033\u3002"
      ],
          textEn: [
        "Reply to Secretary Xie\nTao Hongjing\nThe beauty of mountains and rivers has been a shared topic of admiration since ancient times. Lofty peaks pierce the clouds; clear streams reveal their bottoms. On both banks, the stone walls display five colors in splendid radiance. Green forests and emerald bamboos are present in all four seasons. At dawn, as the morning mist begins to lift, apes and birds cry in chorus; at dusk, as the sun is about to set, fish leap in competition. Truly this is a celestial realm on earth. Since the time of Kangle, there has been none who could match the wonder of this place.",
        "Record of a Night Excursion at Chengtian Temple\nSu Shi\nOn the night of the twelfth day of the tenth month in the sixth year of Yuanfeng, I undressed to go to sleep when moonlight entered through the door. Delighted, I rose and went out. Having no one to share this pleasure with, I went to Chengtian Temple to find Zhang Huaimin. Huaimin had not yet gone to sleep either, and we walked together in the courtyard. The courtyard floor was like a pool of clear water, luminous and transparent, with waterweeds and water chestnuts crisscrossing within—these were actually the shadows of bamboo and cypress. What night is without a moon? What place is without bamboo and cypress? It is only that few are as leisurely as the two of us."
      ]
        },
        {
          title: "记承天寺夜游", titleEn: "Night Walk at Chengtian Temple",
          author: "苏轼", authorEn: "Su Shi",
          text: [
            "元丰六年十月十二日夜，解衣欲睡，月色入户，欣然起行。念无与为乐者，遂至承天寺寻张怀民。怀民亦未寝，相与步于中庭。庭下如积水空明，水中藻荇交横，盖竹柏影也。何夜无月？何处无竹柏？但少闲人如吾两人者耳。"
          ],
          textEn: [
            "On the night of October 12 in the sixth year of Yuanfeng, I was undressing to sleep when moonlight entered the doorway, and I rose happily to walk. Thinking there was no one to share the joy, I went to Chengtian Temple to find Zhang Huaimin. Huaimin had not yet retired either, and we walked together in the courtyard. The courtyard floor was like a pool of crystal-clear water, with water plants crisscrossing in it — but it was actually the shadows of bamboo and cypress. What night lacks a moon? What place lacks bamboo and cypress? It is only that there are few idle people like the two of us."
          ]
        }
      ],
      text: [
        "答谢中书书\n陶弘景\n山川之美，古来共谈。高峰入云，清流见底。两岸石壁，五色交辉。青林翠竹，四时俱备。晓雾将歇，猿鸟乱鸣；夕日欲颓，沉鳞竞跃。实是欲界之仙都。自康乐以来，未复有能与其奇者。",
        "记承天寺夜游\n苏轼\n元丰六年十月十二日夜，解衣欲睡，月色入户，欣然起行。念无与为乐者，遂至承天寺寻张怀民。怀民亦未寝，相与步于中庭。庭下如积水空明，水中藻荇交横，盖竹柏影也。何夜无月？何处无竹柏？但少闲人如吾两人者耳。"
      ],
      textEn: [
        "Reply to Secretary Xie\nby Tao Hongjing\nThe beauty of mountains and rivers has been a shared topic since ancient times. Lofty peaks pierce the clouds; clear streams reveal their bottoms. Stone cliffs on both banks shimmer in five colors. Green forests and emerald bamboo are present in all four seasons. When morning mist lifts, apes and birds cry in chorus; as evening sun sinks, submerged fish leap in competition. This is truly a fairy realm on earth. Since Xie Lingyun, none has shared in its wonders.",
        "Night Walk at Chengtian Temple\nby Su Shi\nOn the night of October 12, sixth year of Yuanfeng, I was undressing to sleep when moonlight entered the doorway, and I rose happily to walk. Thinking there was no one to share the joy, I went to Chengtian Temple to find Zhang Huaimin. He too had not retired, and we walked together in the courtyard. The floor was like crystal-clear water, with plants crisscrossing — but it was bamboo and cypress shadows. What night lacks a moon? What place lacks bamboo and cypress? There are simply few idle people like us two."
      ],
      vocabWords: [
        {word:'交辉',pinyin:'jiāo huī',en:'to shine upon each other',sentence:'两岸石壁，五色交辉。',sentenceEn:'Stone cliffs on both banks shimmered in five colors.'},
        {word:'欲界之仙都',pinyin:'yù jiè zhī xiān dōu',en:'fairyland in the mortal world',sentence:'实是欲界之仙都。',sentenceEn:'It is truly a fairyland in the mortal world.'},
        {word:'积水空明',pinyin:'jī shuǐ kōng míng',en:'clear as pooled water',sentence:'庭下如积水空明。',sentenceEn:'The courtyard was clear as pooled water bathed in moonlight.'},
        {word:'藻荇交横',pinyin:'zǎo xìng jiāo héng',en:'water plants crisscrossing',sentence:'水中藻荇交横，盖竹柏影也。',sentenceEn:'Water plants crisscrossed in the water — actually the shadows of bamboo and cypress.'},
        {word:'闲人',pinyin:'xián rén',en:'a person of leisure',sentence:'但少闲人如吾两人者耳。',sentenceEn:'Only there are few leisurely people like the two of us.'}
      ],
      grammarPoints: [
        {point:'借景抒情',pointEn:'jiè jǐng shū qíng',example:'expressing emotion through scenery',exampleEn:'庭下如积水空明，水中藻荇交横。',explanation:'The courtyard was clear as pooled water; plants seemed to crisscross within.',explanationEn:'通过描写自然景物来表达作者内心的情感和志趣。'}
      ],
      thinkExplore: [
        {cn:"比较两篇短文在句式、节奏等方面的不同之处。", en:"Compare the two essays' differences in sentence patterns and rhythm."},
        {cn:"细读《记承天寺夜游》，体会作者的心境。谈谈对\u201c闲人\u201d的理解。", en:"Read 'Night Walk at Chengtian Temple' closely; appreciate the author's state of mind. Discuss your understanding of 'idle people.'"}
      ],
      authorBio: {cn:"陶弘景（456\u2014536），字通明，南朝齐梁时期道教思想家、医药学家、文学家，人称\u201c山中宰相\u201d。苏轼（1037\u20141101），字子瞻，号东坡居士，北宋杰出文学家、书画家，\u201c唐宋八大家\u201d之一。其诗词文赋皆有极高成就，与父苏洵、弟苏辙并称\u201c三苏\u201d。", en:"Tao Hongjing (456\u2013536), courtesy name Tongming, was a Daoist thinker, physician, and writer of the Southern Dynasties, known as the \u2018Prime Minister in the Mountains.\u2019 Su Shi (1037\u20131101), courtesy name Zizhan, also known as Dongpo Jushi, was an outstanding writer, calligrapher, and painter of the Northern Song, one of the \u2018Eight Great Prose Masters of Tang and Song.\u2019"},
      teachingPoints: [{cn:"比较两篇短文在句式、节奏和情感基调上的差异：《答谢中书书》明快欣悦，《记承天寺夜游》含蓄深沉。", en:"Compare the two essays\u2019 differences in sentence patterns, rhythm, and emotional tone: \u2018Reply to Secretary Xie\u2019 is bright and joyful, while \u2018Night Walk\u2019 is restrained and profound."}, {cn:"理解\u201c闲人\u201d的深层含义——既是被贬谪后的自嘲，也蕴含着超脱达观的人生态度。", en:"Understand the deeper meaning of \u2018idle people\u2019\u2014both self-deprecating humor after demotion and an attitude of transcendent equanimity."}],
      parentTips: [{cn:"选择一个月明之夜和孩子散步，观察月光和影子，体会苏轼笔下的意境。", en:"On a bright moonlit night, take a walk with your child, observe moonlight and shadows, and experience the atmosphere Su Shi describes."}, {cn:"帮助孩子理解苏轼在困境中保持乐观豁达心态的人生智慧。", en:"Help your child understand Su Shi\u2019s life wisdom of maintaining optimism and open-mindedness in adversity."}]
    },
    {
      id: 12, title: "与朱元思书", titleEn: "Letter to Zhu Yuansi",
      difficulty: 4,
      author: "吴均", authorEn: "Wu Jun",
      isSelfRead: true,
      isClassical: true,
      text: [
        "\u98ce\u70df\u4ff1\u51c0\uff0c\u5929\u5c71\u5171\u8272\u3002\u4ece\u6d41\u98d8\u8361\uff0c\u4efb\u610f\u4e1c\u897f\u3002\u81ea\u5bcc\u9633\u81f3\u6850\u5e90\u4e00\u767e\u8bb8\u91cc\uff0c\u5947\u5c71\u5f02\u6c34\uff0c\u5929\u4e0b\u72ec\u7edd\u3002",
        "\u6c34\u7686\u7f25\u78a7\uff0c\u5343\u4e08\u89c1\u5e95\u3002\u6e38\u9c7c\u7ec6\u77f3\uff0c\u76f4\u89c6\u65e0\u788d\u3002\u6025\u6e4d\u751a\u7bad\uff0c\u731b\u6d6a\u82e5\u5954\u3002",
        "\u5939\u5cb8\u9ad8\u5c71\uff0c\u7686\u751f\u5bd2\u6811\uff0c\u8d1f\u52bf\u7ade\u4e0a\uff0c\u4e92\u76f8\u8f69\u9088\uff0c\u4e89\u9ad8\u76f4\u6307\uff0c\u5343\u767e\u6210\u5cf0\u3002\u6cc9\u6c34\u6fc0\u77f3\uff0c\u6cf8\u6cf8\u4f5c\u54cd\uff1b\u597d\u9e1f\u76f8\u9e23\uff0c\u5624\u5624\u6210\u97f5\u3002\u8749\u5219\u5343\u8f6c\u4e0d\u7a77\uff0c\u733f\u5219\u767e\u53eb\u65e0\u7edd\u3002\u9e22\u98de\u623e\u5929\u8005\uff0c\u671b\u5cf0\u606f\u5fc3\uff1b\u7ecf\u7eb6\u4e16\u52a1\u8005\uff0c\u7a85\u8c37\u5fd8\u53cd\u3002\u6a2a\u67ef\u4e0a\u853d\uff0c\u5728\u663c\u72b9\u660f\uff1b\u758f\u6761\u4ea4\u6620\uff0c\u6709\u65f6\u89c1\u65e5\u3002"
      ],
      textEn: [
        "Wind and mist have both cleared; sky and mountains share the same color. Drifting with the current, going wherever fancy takes me. From Fuyang to Tonglu, a hundred li or so—the strange mountains and unusual waters are unparalleled in all the world.",
        "The waters are all deep green, so clear one can see the bottom even at a thousand ren. Swimming fish and fine stones can be observed directly without obstruction. The rapids are swifter than arrows; the fierce waves run like galloping horses.",
        "The high mountains on both banks are all covered with cold-season trees, which compete to grow upward, each striving to surpass the other, reaching straight up to form peaks by the hundreds and thousands. Spring water strikes the rocks, making a bubbling sound. Beautiful birds call to each other in harmonious tones. Cicadas sing endlessly in a thousand variations; apes cry ceaselessly in a hundred calls. Those who soar to reach the heavens find their ambitions calmed when they gaze upon these peaks. Those entangled in worldly affairs find themselves forgetting to return when they enter these valleys. Horizontal branches create shade above, making it seem like dusk even at midday. Sparse branches intertwine, and occasionally a ray of sunlight breaks through."
      ],
      vocabWords: [
        {word:'缥碧',pinyin:'piǎo bì',en:'pale blue-green',sentence:'水皆缥碧，千丈见底。',sentenceEn:'The water was all pale blue-green, with the bottom visible at a thousand feet.'},
        {word:'急湍',pinyin:'jí tuān',en:'swift rapids',sentence:'急湍甚箭，猛浪若奔。',sentenceEn:'The rapids were swifter than arrows, the fierce waves like galloping horses.'},
        {word:'息心',pinyin:'xī xīn',en:'to quiet one’s ambitions',sentence:'鸢飞戾天者，望峰息心。',sentenceEn:'Those who soar to the sky would quiet their ambitions upon seeing these peaks.'},
        {word:'经纶',pinyin:'jīng lún',en:'statecraft; worldly affairs',sentence:'经纶世务者，窥谷忘反。',sentenceEn:'Those immersed in worldly affairs would forget to return upon glimpsing this valley.'},
        {word:'轩邈',pinyin:'xuān miǎo',en:'to reach high and far',sentence:'负势竞上，互相轩邈。',sentenceEn:'They lean on the terrain to compete upward, each reaching higher and farther.'}
      ],
      readingTips: [
        {cn:"体会\u201c奇山异水，天下独绝\u201d如何统领全文。", en:"Appreciate how 'wondrous mountains and unique waters, unmatched in the world' governs the entire text."},
        {cn:"理解\u201c鸢飞戾天者，望峰息心\u201d的深层含义。", en:"Understand the deeper meaning of 'those who soar to the heavens would quiet their ambitions upon seeing these peaks.'"}
      ],
      authorBio: {cn:"吴均（469\u2014520），字叔庠，南朝梁文学家、史学家。其文风清拔有古气，时人称为\u201c吴均体\u201d。此文以书信形式描绘了从富阳至桐庐一带富春江的绮丽风光。", en:"Wu Jun (469\u2013520), courtesy name Shuxiang, was a writer and historian of the Liang dynasty. His writing style was crisp and antiquarian, known as the \u2018Wu Jun style.\u2019 This letter-form essay depicts the beautiful scenery along the Fuchun River from Fuyang to Tonglu."},
      teachingPoints: [{cn:"学习\u201c总\u2014分\u201d结构：\u201c奇山异水，天下独绝\u201d统领全文，下文分别从水和山两方面展开描写。", en:"Learn the \u2018general-detail\u2019 structure: \u2018wondrous mountains and unique waters, unmatched in the world\u2019 governs the text, which then elaborates separately on water and mountains."}, {cn:"体会视觉与听觉描写的结合，以及\u201c鸢飞戾天者，望峰息心\u201d所表达的归隐理想。", en:"Appreciate the combination of visual and auditory description, and the recluse ideal expressed in \u2018those who soar would quiet their ambitions upon seeing these peaks.\u2019"}],
      parentTips: [{cn:"引导孩子欣赏自然美景，讨论古人为何向往山水隐逸生活。", en:"Guide your child to appreciate natural beauty and discuss why ancient scholars yearned for a life in seclusion among mountains and waters."}, {cn:"帮助孩子对比三篇古文（三峡、短文二篇、与朱元思书）在写景手法上的异同。", en:"Help your child compare the three classical texts (Three Gorges, Two Short Essays, Letter to Zhu Yuansi) in their landscape description techniques."}]
    },
    {
      id: 13, title: "唐诗五首", titleEn: "Five Tang Poems",
      difficulty: 5,
      isPoetry: true,
      poems: [
        {title:"野望", titleEn:"Gazing from the Wild", author:"王绩", authorEn:"Wang Ji",
         vocabWords: [
           {word:'徙倚',pinyin:'xǐ yǐ',en:'to pace; to linger',sentence:'东皋薄暮望，徙倚欲何依。',sentenceEn:'At East Ridge I gaze at dusk, pacing, wondering where to turn.'},
           {word:'悠悠',pinyin:'yōu yōu',en:'drifting idly; endless',sentence:'白云千载空悠悠。',sentenceEn:'White clouds drift idly through a thousand years.'},
           {word:'征蓬',pinyin:'zhēng péng',en:'tumbling tumbleweed (metaphor for a traveler)',sentence:'征蓬出汉塞，归雁入胡天。',sentenceEn:'Tumbleweeds drift from Han borders; returning geese enter barbarian skies.'},
           {word:'萋萋',pinyin:'qī qī',en:'lush and thick',sentence:'芳草萋萋鹦鹉洲。',sentenceEn:'Fragrant grass grows lush and thick on Parrot Isle.'},
           {word:'乱花',pinyin:'luàn huā',en:'scattered blossoms',sentence:'乱花渐欲迷人眼，浅草才能没马蹄。',sentenceEn:'Scattered blossoms begin to dazzle the eye; shallow grass barely hides horse hooves.'}
         ],
         text:"东皋薄暮望，徙倚欲何依。\n树树皆秋色，山山唯落晖。\n牧人驱犊返，猎马带禽归。\n相顾无相识，长歌怀采薇。",
         textEn:"At East Ridge I gaze at dusk, pacing, wondering where to turn.\nEvery tree wears autumn colors; every mountain holds the setting glow.\nHerdsmen drive calves home; hunting horses bring back game.\nWe glance at each other, strangers all — I sing a long song, longing for the recluse life."},
        {title:"黄鹤楼", titleEn:"Yellow Crane Tower", author:"崔颢", authorEn:"Cui Hao",
         text:"昔人已乘黄鹤去，此地空余黄鹤楼。\n黄鹤一去不复返，白云千载空悠悠。\n晴川历历汉阳树，芳草萋萋鹦鹉洲。\n日暮乡关何处是？烟波江上使人愁。",
         textEn:"The immortal departed on a yellow crane long ago; this place is left with only Yellow Crane Tower.\nOnce the yellow crane left, it never returned; white clouds drift idly through a thousand years.\nSunlit river clearly shows Hanyang's trees; fragrant grass grows thick on Parrot Isle.\nAt dusk, where is my homeland? The misty river waves stir only sorrow."},
        {title:"使至塞上", titleEn:"Mission to the Frontier", author:"王维", authorEn:"Wang Wei",
         text:"单车欲问边，属国过居延。\n征蓬出汉塞，归雁入胡天。\n大漠孤烟直，长河落日圆。\n萧关逢候骑，都护在燕然。",
         textEn:"A single carriage sets out to visit the frontier, passing through lands beyond Juyan.\nTumbleweeds drift out from Han borders; returning geese enter barbarian skies.\nIn the vast desert, a lone column of smoke rises straight; over the long river, the setting sun hangs round.\nAt Xiao Pass I meet a mounted scout — the commanding general is at Yanran."},
        {title:"渡荆门送别", titleEn:"Crossing at Jingmen to Bid Farewell", author:"李白", authorEn:"Li Bai",
         text:"渡远荆门外，来从楚国游。\n山随平野尽，江入大荒流。\n月下飞天镜，云生结海楼。\n仍怜故乡水，万里送行舟。",
         textEn:"I cross far beyond Jingmen, journeying through the land of Chu.\nMountains end where the plains begin; the river flows into the vast wilderness.\nThe moon below looks like a flying mirror; clouds form mirages above the sea.\nStill I love my homeland's waters, escorting my boat for ten thousand li."},
        {title:"钱塘湖春行", titleEn:"Spring Walk by Qiantang Lake", author:"白居易", authorEn:"Bai Juyi",
         text:"孤山寺北贾亭西，水面初平云脚低。\n几处早莺争暖树，谁家新燕啄春泥。\n乱花渐欲迷人眼，浅草才能没马蹄。\n最爱湖东行不足，绿杨阴里白沙堤。",
         textEn:"North of Gushan Temple, west of Jia Pavilion, the water level is just even, clouds hang low.\nHere and there early orioles compete for sunny trees; whose new swallows peck at spring mud?\nScattered blossoms begin to dazzle the eye; shallow grass barely hides the horse's hooves.\nI love most the eastern lake where I can't walk enough — the White Sand Dike in the shade of green willows."}
      ],
      text: [
        "野望\n[唐] 王绩\n东皋薄暮望，徙倚欲何依。\n树树皆秋色，山山唯落晖。\n牧人驱犊返，猎马带禽归。\n相顾无相识，长歌怀采薇。",
        "黄鹤楼\n[唐] 崔颢\n昔人已乘黄鹤去，此地空余黄鹤楼。\n黄鹤一去不复返，白云千载空悠悠。\n晴川历历汉阳树，芳草萋萋鹦鹉洲。\n日暮乡关何处是？烟波江上使人愁。",
        "使至塞上\n[唐] 王维\n单车欲问边，属国过居延。\n征蓬出汉塞，归雁入胡天。\n大漠孤烟直，长河落日圆。\n萧关逢候骑，都护在燕然。",
        "渡荆门送别\n[唐] 李白\n渡远荆门外，来从楚国游。\n山随平野尽，江入大荒流。\n月下飞天镜，云生结海楼。\n仍怜故乡水，万里送行舟。",
        "钱塘湖春行\n[唐] 白居易\n孤山寺北贾亭西，水面初平云脚低。\n几处早莺争暖树，谁家新燕啄春泥。\n乱花渐欲迷人眼，浅草才能没马蹄。\n最爱湖东行不足，绿杨阴里白沙堤。"
      ],
      textEn: [
        "Gazing from the Wild\n[Tang] Wang Ji\nAt East Ridge I gaze at dusk, pacing, wondering where to turn.\nEvery tree wears autumn colors; every mountain holds the setting glow.\nHerdsmen drive calves home; hunting horses bring back game.\nWe glance at each other, strangers all — I sing a long song, longing for the recluse life.",
        "Yellow Crane Tower\n[Tang] Cui Hao\nThe immortal departed on a yellow crane long ago; this place is left with only Yellow Crane Tower.\nOnce the crane left, it never returned; white clouds drift through a thousand years.\nSunlit river clearly shows Hanyang's trees; fragrant grass grows thick on Parrot Isle.\nAt dusk, where is my homeland? The misty waves stir only sorrow.",
        "Mission to the Frontier\n[Tang] Wang Wei\nA single carriage visits the frontier, passing beyond Juyan.\nTumbleweeds drift from Han borders; returning geese enter barbarian skies.\nVast desert, lone smoke rises straight; long river, setting sun hangs round.\nAt Xiao Pass I meet a scout — the general is at Yanran.",
        "Crossing at Jingmen\n[Tang] Li Bai\nI cross far beyond Jingmen, journeying through Chu.\nMountains end at the plains; the river flows into wilderness.\nMoon below: a flying mirror; clouds above: sea mirages.\nStill I love my homeland's waters, escorting my boat ten thousand li.",
        "Spring Walk by Qiantang Lake\n[Tang] Bai Juyi\nNorth of Gushan Temple, west of Jia Pavilion, water level even, clouds low.\nEarly orioles compete for sunny trees; new swallows peck spring mud.\nScattered blossoms dazzle the eye; shallow grass hides horse hooves.\nI love most the east lake shore — White Sand Dike under green willows."
      ],
      thinkExplore: [
        {cn:"五首唐诗描写了不同的景物，表达了不同的情感。比较它们在写景抒情方面的特点。", en:"The five poems depict different scenery and express different emotions. Compare their characteristics in landscape description and emotional expression."},
        {cn:"赏析\u201c大漠孤烟直，长河落日圆\u201d的意境。", en:"Analyze the artistic conception of 'vast desert, lone smoke rises straight; long river, setting sun hangs round.'"}
      ],
      authorBio: {cn:"本课收录五位唐代诗人的作品：王绩（约589\u2014644），初唐诗人，隐逸诗风；崔颢（约704\u2014754），盛唐诗人，以《黄鹤楼》著称；王维（701\u2014761），盛唐山水田园诗代表，\u201c诗中有画，画中有诗\u201d；李白（701\u2014762），\u201c诗仙\u201d，浪漫主义诗歌代表；白居易（772\u2014846），中唐诗人，倡导新乐府运动。", en:"This lesson includes five Tang poets: Wang Ji (c. 589\u2013644), early Tang recluse poet; Cui Hao (c. 704\u2013754), high Tang, famous for \u2018Yellow Crane Tower\u2019; Wang Wei (701\u2013761), master of landscape poetry (\u2018poetry in painting, painting in poetry\u2019); Li Bai (701\u2013762), the \u2018Immortal Poet\u2019 of Romanticism; and Bai Juyi (772\u2013846), mid-Tang poet and leader of the New Yuefu movement."},
      teachingPoints: [{cn:"比较五首唐诗不同的景物描写和情感表达：王绩的孤独、崔颢的乡愁、王维的壮美、李白的豪放、白居易的早春之喜。", en:"Compare the five poems\u2019 different landscape descriptions and emotions: Wang Ji\u2019s solitude, Cui Hao\u2019s homesickness, Wang Wei\u2019s grandeur, Li Bai\u2019s boldness, and Bai Juyi\u2019s joy of early spring."}, {cn:"重点赏析名句意境：\u201c大漠孤烟直，长河落日圆\u201d如何以极简的语言呈现壮阔的边塞画面。", en:"Focus on appreciating the artistic conception of famous lines: how \u2018vast desert, lone smoke straight; long river, setting sun round\u2019 presents a grand frontier scene with minimal language."}],
      parentTips: [{cn:"和孩子一起朗读五首诗歌，感受不同的节奏和韵律，讨论哪首诗的画面感最强。", en:"Read the five poems aloud with your child, feel different rhythms, and discuss which poem creates the most vivid imagery."}, {cn:"引导孩子积累唐诗名句，理解\u201c借景抒情\u201d的诗歌传统。", en:"Guide your child to accumulate famous Tang poetry lines and understand the tradition of \u2018expressing emotion through scenery.\u2019"}]
    }
  ]
},
/* ═══════════════════════════════════════════ */
/*  UNIT 4 — 散文 (情感与哲理)                  */
/* ═══════════════════════════════════════════ */
{
  id: 4, title: "第四单元", titleEn: "Unit 4 — Prose: Emotion & Philosophy", type: "kewen",
  writing: {title:"语言要连贯", titleEn:"Language Should Be Coherent",
    desc:"学习使语言前后连贯的方法，注意句子之间的逻辑关系和过渡。",
    descEn:"Learn methods to make language coherent; pay attention to logical relationships and transitions between sentences."},
  comprehensiveLearning: {title:"我们的互联网时代", titleEn:"Our Internet Age",
    desc:"了解互联网对生活的影响，探讨网络利弊，形成理性认识。",
    descEn:"Understand the internet's impact on life; discuss its pros and cons; form a rational understanding."},
  lessons: [
    {
      id: 14, title: "背影", titleEn: "The Silhouette (Back View)",
      difficulty: 4,
      author: "朱自清", authorEn: "Zhu Ziqing",
      text: [
        "我与父亲不相见已二年余了，我最不能忘记的是他的背影。",
        "那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子。我从北京到徐州，打算跟着父亲奔丧回家。到徐州见着父亲，看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说：\u201c事已如此，不必难过，好在天无绝人之路！\u201d",
        "我说道：\u201c爸爸，你走吧。\u201d他往车外看了看说：\u201c我买几个橘子去。你就在此地，不要走动。\u201d我看见他戴着黑布小帽，穿着黑布大马褂，深青布棉袍，蹒跚地走到铁道边，慢慢探身下去，尚不大难。可是他穿过铁道，要爬上那边月台，就不容易了。他用两手攀着上面，两脚再向上缩；他肥胖的身子向左微倾，显出努力的样子，这时我看见他的背影，我的泪很快地流下来了。",
        "近几年来，父亲和我都是东奔西走，家中光景是一日不如一日。他少年出外谋生，独力支持，做了许多大事。哪知老境却如此颓唐！他触目伤怀，自然情不能自已。",
        "我读到此处，在晶莹的泪光中，又看见那肥胖的、青布棉袍黑布马褂的背影。唉！我不知何时再能与他相见！"
      ],
      textEn: [
        "It has been over two years since I last saw my father. What I can never forget is his back view — his silhouette.",
        "That winter, my grandmother had died and father had lost his post — misfortunes never come singly. I traveled from Beijing to Xuzhou, planning to return home with father for the funeral. Seeing father in Xuzhou, amid the household's disarray, and thinking of grandmother, tears fell despite myself. Father said: 'What's done is done; no need to grieve. Heaven never seals all exits!'",
        "I said: 'Father, go on.' He glanced outside and said: 'I'll buy some oranges. Stay here, don't move.' I watched him in his black cloth cap and black cloth overcoat, dark blue padded gown, shuffling to the railway tracks. He lowered himself down slowly — that wasn't too hard. But crossing to climb up the other platform was not easy. He gripped the top with both hands, hoisting his feet up; his stout body leaned slightly left, showing the effort. At that moment, seeing his back view, my tears fell quickly.",
        "In recent years, father and I have been running about, and family circumstances have worsened by the day. He went out to earn a living young, supporting himself and accomplishing much. Who could have known old age would be so dismal! Everything he saw pained him; naturally his feelings could not be contained.",
        "Reading that, through glistening tears, I again see that stout silhouette in the dark blue padded gown and black cloth overcoat. Ah! I don't know when I shall see him again!"
      ],
      vocabWords: [
        {word:'狼藉',pinyin:'láng jí',en:'in a mess; in disarray',sentence:'看见满院狼藉的东西。',sentenceEn:'Seeing the yard in complete disarray.'},
        {word:'蹒跚',pinyin:'pán shān',en:'to stagger; to hobble',sentence:'蹒跚地走到铁道边。',sentenceEn:'He staggered toward the railroad tracks.'},
        {word:'踌躇',pinyin:'chóu chú',en:'to hesitate',sentence:'他踌躇了一会，终于决定还是自己送我去。',sentenceEn:'He hesitated a while, then finally decided to see me off himself.'},
        {word:'颓唐',pinyin:'tuí táng',en:'dejected; dispirited',sentence:'哪知老境却如此颓唐！',sentenceEn:'Who would have thought his old age would be so dispirited!'},
        {word:'触目伤怀',pinyin:'chù mù shāng huái',en:'the sight brings grief to the heart',sentence:'他触目伤怀，情郁于中。',sentenceEn:'Every sight brought grief to his heart; emotions weighed heavily within him.'}
      ],
      grammarPoints: [
        {point:'背影的象征意义',pointEn:'bèi yǐng de xiàng zhēng yì yì',example:'symbolic meaning of the silhouette',exampleEn:'他用两手攀着上面，两脚再向上缩。',explanation:'He gripped the top with both hands and drew his feet upward.',explanationEn:'父亲买橘子时的背影是全文情感的凝聚点，象征着深沉而含蓄的父爱。'},
        {point:'叙事散文的选材',pointEn:'xù shì sǎn wén de xuǎn cái',example:'material selection in narrative prose',exampleEn:'作者选取了送别一事中最动人的片段来表现父爱。',explanation:'The author selects the most moving moment from the farewell scene to express fatherly love.',explanationEn:'好的叙事散文善于从日常小事中选取最能打动人心的细节加以描写。'}
      ],
      thinkExplore: [
        {cn:"\u201c背影\u201d在全文中起了什么作用？", en:"What role does the 'silhouette' play throughout the text?"},
        {cn:"文章第6段写父亲过铁道买橘子的过程，作者是怎样描写父亲的背影的？为什么写得这样详细？", en:"In paragraph 6, describing father crossing the tracks to buy oranges, how does the author depict his back view? Why so detailed?"},
        {cn:"\u201c我\u201d对父亲的情感态度有怎样的变化？变化的原因是什么？", en:"How does 'my' emotional attitude toward father change? What causes this change?"}
      ],
      accumExtend: [
        {cn:"赏析本文语言素朴而又典雅、简净而又细致的特点。", en:"Analyze the article's language: plain yet elegant, concise yet meticulous."}
      ],
      authorBio: {cn:"朱自清（1898\u20141948），原名自华，字佩弦，江苏扬州人。现代著名散文家、诗人、学者。其散文素朴缜密、清隽沉郁，代表作有《荷塘月色》《春》《背影》等。《背影》是中国现代散文史上的经典名篇。", en:"Zhu Ziqing (1898\u20131948), born in Yangzhou, Jiangsu, was a celebrated modern essayist, poet, and scholar. His prose is known for being plain yet meticulous, fresh yet profound. Major works include \u2018Moonlight over the Lotus Pond,\u2019 \u2018Spring,\u2019 and \u2018The Silhouette.\u2019 \u2018The Silhouette\u2019 is a classic of modern Chinese prose."},
      teachingPoints: [{cn:"分析\u201c背影\u201d这一核心意象在全文中的作用：开篇点题、中间详写、结尾呼应，以\u201c背影\u201d贯穿全文，凝聚父子深情。", en:"Analyze the role of the \u2018back view\u2019 as the central image: introduced at the beginning, described in detail in the middle, echoed at the end\u2014threading through the entire text to crystallize father-son love."}, {cn:"学习抓住典型细节（穿铁道、爬月台买橘子）进行描写的方法，体会动作描写如何传达感情。", en:"Learn to describe through typical details (crossing the tracks, climbing the platform to buy oranges); appreciate how action description conveys emotion."}],
      parentTips: [{cn:"和孩子分享自己与父母之间的温情记忆，讨论\u201c无言的爱\u201d如何通过细小举动体现。", en:"Share warm memories between you and your own parents with your child; discuss how \u2018unspoken love\u2019 is expressed through small gestures."}, {cn:"引导孩子关注生活中的感人细节，尝试用朴实的语言记录真实情感。", en:"Guide your child to notice touching details in daily life and try recording genuine emotions with plain language."}]
    },
    {
      id: 15, title: "白杨礼赞", titleEn: "Eulogy for the White Poplar",
      difficulty: 5,
      author: "茅盾", authorEn: "Mao Dun",
      text: [
        "白杨树实在是不平凡的，我赞美白杨树！",
        "当汽车在望不到边际的高原上奔驰，扑入你的视野的，是黄绿错综的一条大毯子。黄与绿主宰着，无边无垠，坦荡如砥。这时如果不是宛若并肩的远山的连峰提醒了你，你会忘记了汽车是在高原上行驶。",
        "那是力争上游的一种树，笔直的干，笔直的枝。它的干通常是丈把高，像加过人工似的，一丈以内绝无旁枝。它所有的丫枝一律向上，而且紧紧靠拢，也像加过人工似的，成为一束，绝不旁逸斜出。这是虽在北方风雪的压迫下却保持着倔强挺立的一种树！",
        "它没有婆娑的姿态，没有屈曲盘旋的虬枝。也许你要说它不美。如果美是专指\u201c婆娑\u201d或\u201c旁逸斜出\u201d之类而言，那么，白杨树算不得树中的好女子。但是它伟岸，正直，朴质，严肃，也不缺乏温和，更不用提它的坚强不屈与挺拔。",
        "让那些看不起民众、贱视民众、顽固的倒退的人们去赞美那贵族化的楠木（那也是直挺秀颀的），去鄙视这极常见、极易生长的白杨树吧，我要高声赞美白杨树！"
      ],
      textEn: [
        "The white poplar is truly extraordinary — I praise the white poplar!",
        "As the car races across the endless plateau, what fills your vision is a great carpet of interwoven yellow and green. Yellow and green dominate, boundless, flat as a whetstone. Were it not for the distant mountain peaks reminding you, you'd forget the car is traveling on a plateau.",
        "This is a tree that strives upward — straight trunk, straight branches. Its trunk is usually over ten feet tall, as if artificially shaped, with no side branches within the first ten feet. All its boughs reach uniformly upward, tightly clustered as if man-made — never straying sideways. This is a tree that remains stubbornly upright even under the oppression of northern wind and snow!",
        "It lacks graceful posture and twisted, coiling branches. Perhaps you'd say it's not beautiful. If beauty means only 'graceful swaying' or 'branches straying sideways,' then the white poplar is no beauty among trees. But it is tall, upright, plain, serious, yet not lacking in gentleness — not to mention its unyielding strength.",
        "Let those who look down on the common people, who despise them, who stubbornly cling to regression, go praise the aristocratic nanmu tree (which is also tall and elegantly straight) and disdain this most common, most easily grown white poplar — I shall loudly praise the white poplar!"
      ],
      vocabWords: [
        {word:'坦荡如砥',pinyin:'tǎn dàng rú dǐ',en:'flat and smooth as a whetstone',sentence:'黄与绿主宰着，无边无垠，坦荡如砥。',sentenceEn:'Yellow and green dominate, boundless and flat as a whetstone.'},
        {word:'潜滋暗长',pinyin:'qián zī àn zhǎng',en:'to grow silently and unseen',sentence:'另一种的味儿在你心头潜滋暗长了。',sentenceEn:'Another feeling was growing silently in your heart.'},
        {word:'旁逸斜出',pinyin:'páng yì xié chū',en:'to branch off sideways',sentence:'绝不旁逸斜出。',sentenceEn:'The branches never stray sideways.'},
        {word:'伟岸',pinyin:'wěi àn',en:'tall and sturdy; imposing',sentence:'它伟岸，正直，朴质，严肃。',sentenceEn:'It is imposing, upright, plain, and solemn.'},
        {word:'不折不挠',pinyin:'bù zhé bù náo',en:'unyielding; indomitable',sentence:'不折不挠，对抗着西北风。',sentenceEn:'Unyielding, standing against the northwest wind.'}
      ],
      grammarPoints: [
        {point:'象征手法',pointEn:'xiàng zhēng shǒu fǎ',example:'symbolism',exampleEn:'白杨树象征了北方的农民和民族解放斗争的精神。',explanation:'The white poplar symbolizes northern farmers and the spirit of national liberation.',explanationEn:'用具体的事物来象征某种精神品质或社会力量，使抽象的概念形象化。'},
        {point:'排比反问',pointEn:'pái bǐ fǎn wèn',example:'parallelism with rhetorical questions',exampleEn:'难道你就觉得它只是树？难道你就不想到它的朴质？',explanation:'Do you really think it is just a tree? Do you not think of its plainness?',explanationEn:'连用排比反问句，层层递进，增强气势和说服力。'}
      ],
      thinkExplore: [
        {cn:"作者写白杨树\u201c不平凡\u201d，从哪些方面进行了阐述？", en:"From which aspects does the author explain how the white poplar is 'extraordinary'?"},
        {cn:"体会象征手法的运用——白杨树象征了什么？", en:"Appreciate the use of symbolism — what does the white poplar symbolize?"},
        {cn:"文章反复说\u201c白杨树实在是不平凡的\u201d，这样写有什么效果？", en:"The article repeatedly says the poplar is 'truly extraordinary' — what effect does this have?"}
      ],
      authorBio: {cn:"茅盾（1896\u20141981），原名沈德鸿，字雁冰，浙江桐乡人。中国现代著名作家、文学评论家、社会活动家。代表作有长篇小说《子夜》、短篇小说《林家铺子》《春蚕》等。曾任中华人民共和国文化部部长，\u201c茅盾文学奖\u201d即以其名命名。", en:"Mao Dun (1896\u20131981), born Shen Dehong in Tongxiang, Zhejiang, was a celebrated modern writer, literary critic, and social activist. Major works include the novel Midnight and short stories like \u2018The Shop of the Lin Family.\u2019 He served as PRC Minister of Culture; the \u2018Mao Dun Literature Prize\u2019 is named after him."},
      teachingPoints: [{cn:"理解象征手法的运用：白杨树象征着北方抗日军民朴质、坚强、力求上进的精神品质。学习由物及人的联想写法。", en:"Understand symbolism: the white poplar symbolizes the plain, strong, upward-striving spirit of the northern anti-Japanese soldiers and people. Learn the associative technique from object to person."}, {cn:"分析文章的结构特点：反复赞美（\u201c不平凡\u201d）形成回环往复的节奏，层层递进地揭示白杨树的象征意义。", en:"Analyze the structural features: repeated praise (\u2018extraordinary\u2019) creates a cyclical rhythm, progressively revealing the poplar\u2019s symbolic meaning."}],
      parentTips: [{cn:"在户外活动时观察树木，引导孩子思考不同树木的特点可以象征什么品质。", en:"During outdoor activities, observe trees and guide your child to think about what qualities different trees might symbolize."}, {cn:"帮助孩子理解抗日战争时期的时代背景，体会作者以白杨树礼赞抗日精神的深意。", en:"Help your child understand the WWII-era context and appreciate the author\u2019s deeper meaning in praising the anti-Japanese spirit through the poplar."}]
    },
    {
      id: 16, title: "散文二篇", titleEn: "Two Essays",
      difficulty: 4,
      isSelfRead: true,
      multiText: [
        {
          title: "永久的生命", titleEn: "Eternal Life",
          author: "严文井", authorEn: "Yan Wenjing",
          text: [
            "\u4e25\u6587\u4e95\u8fc7\u53bb\u4e86\u7684\u65f6\u95f4\u6c38\u4e0d\u518d\u56de\u6765\u3002\u4e00\u4e2a\u4eba\u5230\u4e86\u4e09\u5341\u5c81\u7684\u8fb9\u5934\u5c31\u4f1a\u53d1\u73b0\u81ea\u5df1\u4e22\u5931\u4e86\u4e00\u4e9b\u4ec0\u4e48\uff1a\u4e00\u9897\u81fc\u9f7f\uff0c\u4e00\u6bb5\u76f2\u80a0\uff0c\u4e00\u4e9b\u5934\u53d1\uff0c\u4e00\u70b9\u70b9\u548c\u4eba\u5f00\u73a9\u7b11\u7684\u5174\u5473\uff0c\u8fd9\u610f\u5473\u7740\u4ed6\u5df2\u7ecf\u5931\u53bb\u4e86\u90a3\u5927\u534a\u4e2a\u9752\u6625\u3002\u6709\u9650\u7684\u5c81\u6708\u53ea\u80fd\u4e00\u5ea6\u4e3a\u4f60\u6240\u6709\uff0c\u5b83\u4eec\u65e2\u7136\u79bb\u5f00\uff0c\u5c31\u6c38\u8fdc\u4e0d\u4f1a\u518d\u8fd4\u56de\u3002\u667a\u8005\u5bf9\u6b64\u4e5f\u65e0\u80fd\u4e3a\u529b\uff01\u4e2a\u4eba\u751f\u547d\u4e0d\u50cf\u4e00\u4ef6\u886c\u8863\uff0c\u5f53\u4f60\u53d1\u73b0\u5b83\u810f\u4e86\u3001\u7834\u4e86\u7684\u65f6\u5019\uff0c\u5c31\u53ef\u4ee5\u8131\u4e0b\u5b83\u6765\u6d17\u6da4\uff0c\u628a\u5b83\u518d\u8865\u597d\u3002\u90a3\u5b58\u5728\u8fc7\u7684\u5fe7\u6101\uff0c\u4e5f\u8bb8\u4f60\u80fd\u5fd8\u5374\uff0c\u4f46\u5374\u4e0d\u80fd\u53d6\u6d88\u5b83\u9057\u7559\u4e0b\u7684\u5370\u8ff9\u3002\u6211\u4eec\u90fd\u975e\u5e38\u53ef\u601c\uff01\u4eba\u4eec\u5374\u4e0d\u5e94\u8be5\u4e3a\u6b64\u611f\u5230\u60b2\u89c2\u3002\u6211\u4eec\u6ca1\u6709\u65f6\u95f4\u60b2\u89c2\u3002\u6211\u4eec\u5e94\u8be5\u770b\u5230\u751f\u547d\u81ea\u8eab\u7684\u795e\u5947\uff0c\u751f\u547d\u6d41\u52a8\u7740\uff0c\u6c38\u8fdc\u4e0d\u673d\u3002\u5730\u9762\u4e0a\u7684\u5c0f\u8349\uff0c\u5b83\u4eec\u662f\u90a3\u6837\u5351\u5fae\uff0c\u90a3\u6837\u67d4\u5f31\uff0c\u6bcf\u4e2a\u4e25\u5bd2\u7684\u51ac\u5929\u8fc7\u53bb\u540e\uff0c\u5b83\u4eec\u4f9d\u7136\u4e00\u6839\u6839\u4ece\u571f\u58e4\u91cc\u94bb\u51fa\u6765\uff0c\u6b22\u4e50\u5730\u8fce\u7740\u6625\u5929\u7684\u98ce\uff0c\u597d\u50cf\u90a3\u521a\u521a\u8fc7\u53bb\u7684\u5bd2\u51b7\u4ece\u672a\u5b58\u5728\u3002\u4e00\u4e07\u5e74\u524d\u662f\u8fd9\u6837\uff0c\u4e00\u4e07\u5e74\u4ee5\u540e\u4e5f\u662f\u8fd9\u6837\uff01\u5728\u6625\u5929\uff0c\u6211\u4eec\u4ee5\u540c\u6837\u611f\u52a8\u7684\u773c\u5149\u770b\u7740\u5c71\u5761\u4e0a\u90a3\u4e9b\u5c0f\u725b\u728a\uff0c\u5b83\u4eec\u8df3\u8df3\u8e66\u8e66\uff0c\u70ab\u8000\u5b83\u4eec\u904d\u8eab\u91d1\u9ec4\u7684\u8338\u6bdb\u3002\u6c38\u8fdc\u7684\u5c0f\u725b\u728a\uff0c\u6c38\u8fdc\u7684\u91d1\u9ec4\u8272\u8338\u6bdb\uff01\u611f\u8c22\u751f\u547d\u7684\u5947\u8ff9\uff0c\u5b83\u5206\u5f00\u6765\u662f\u6682\u65f6\uff0c\u5408\u8d77\u6765\u5374\u662f\u6c38\u4e45\u3002\u5b83\u662f\u4e00\u4e2a\u4e0d\u61c2\u75b2\u5026\u7684\u65c5\u5ba2\uff0c\u603b\u662f\u53ea\u6682\u65f6\u5728\u54ea\u4e00\u4e2a\u4e2a\u4f53\u5185\u4f4f\u4e00\u4f1a\u513f\uff0c\u4fbf\u53c8\u79bb\u5f00\u524d\u53bb\u3002\u90a3\u4e9b\u4e2a\u4f53\u6d88\u901d\u4e86\uff0c\u5b83\u5374\u6c38\u8fdc\u5b58\u5728\u3002\u5b83\u5145\u6ee1\u4e86\u5e0c\u671b\uff0c\u6c38\u4e0d\u4f11\u6b62\u5730\u7e41\u6b96\u7740\uff0c\u8513\u5ef6\u7740\uff0c\u968f\u5904\u5ba3\u793a\u5b83\u7684\u5feb\u4e50\u548c\u5a01\u52bf\u3002\u6211\u7684\u4f19\u4f34\u4eec\uff0c\u6211\u4eec\u7684\u5fc3\u5e94\u8be5\u611f\u5230\u8212\u7545\u3002\u90a3\u4e9b\u66b4\u541b\u4eec\u80fd\u591f\u6740\u5bb3\u8bb8\u591a\u8bb8\u591a\u4eba\uff0c\u4f46\u662f\u4ed6\u4eec\u6d88\u706d\u4e0d\u4e86\u751f\u547d\u3002\u8ba9\u6211\u4eec\u8d5e\u7f8e\u751f\u547d\uff0c\u8d5e\u7f8e\u90a3\u6bc1\u706d\u4e0d\u6389\u7684\u751f\u547d\u5427\uff01\u6211\u4eec\u5c06\u8981\u4ee5\u4e0d\u58f0\u4e0d\u54cd\u7684\u7231\u60c5\u6765\u8d5e\u7f8e\u5b83\u3002\u751f\u547d\u5728\u90a3\u4e9b\u7ec8\u4e8e\u8981\u51cb\u8c22\u7684\u82b1\u6735\u91cc\u6c38\u5b58\uff0c\u4e0d\u65ad\u7ed9\u4e16\u754c\u4ee5\u8272\u5f69\uff0c\u4e0d\u65ad\u7ed9\u4e16\u754c\u4ee5\u82ac\u82b3\u3002\u51cb\u8c22\u548c\u4e0d\u673d\u6df7\u4e3a\u4e00\u4f53\uff0c\u8fd9\u5c31\u662f\u5947\u8ff9\u3002\u7f57\u7d20\u5bf9\u7231\u60c5\u7684\u6e34\u671b\uff0c\u5bf9\u77e5\u8bc6\u7684\u8ffd\u6c42\uff0c\u5bf9\u4eba\u7c7b\u82e6\u96be\u4e0d\u53ef\u904f\u5236\u7684\u540c\u60c5\uff0c\u8fd9\u4e09\u79cd\u7eaf\u6d01\u800c\u65e0\u6bd4\u5f3a\u70c8\u7684\u611f\u60c5\u652f\u914d\u7740\u6211\u7684\u4e00\u751f\u3002\u8fd9\u4e09\u79cd\u611f\u60c5\u5c31\u50cf\u98d3\u98ce\u4e00\u6837\uff0c\u5728\u6df1\u6df1\u7684\u82e6\u6d77\u4e0a\uff0c\u8086\u610f\u5730\u628a\u6211\u5439\u6765\u5439\u53bb\uff0c\u5439\u5230\u6fd2\u4e34\u7edd\u671b\u7684\u8fb9\u7f18\u3002\u6211\u5bfb\u6c42\u7231\u60c5\uff0c\u9996\u5148\u662f\u56e0\u4e3a\u7231\u60c5\u7ed9\u6211\u5e26\u6765\u72c2\u559c\uff0c\u5b83\u5982\u6b64\u5f3a\u70c8\u4ee5\u81f3\u6211\u7ecf\u5e38\u613f\u610f\u4e3a\u4e86\u51e0\u5c0f\u65f6\u7684\u6b22\u6109\u800c\u727a\u7272\u751f\u547d\u4e2d\u7684\u5176\u4ed6\u4e00\u5207\u3002\u6211\u5bfb\u6c42\u7231\u60c5\uff0c\u5176\u6b21\u662f\u56e0\u4e3a\u7231\u60c5\u89e3\u9664\u5b64\u5bc2\u2014\u2014\u90a3\u662f\u4e00\u9897\u9707\u98a4\u7684\u5fc3\uff0c\u5728\u4e16\u754c\u7684\u8fb9\u7f18\uff0c\u4fef\u77b0\u90a3\u51b0\u51b7\u6b7b\u5bc2\u3001\u6df1\u4e0d\u53ef\u6d4b\u7684\u6df1\u6e0a\u3002\u6211\u5bfb\u6c42\u7231\u60c5\uff0c\u6700\u540e\u662f\u56e0\u4e3a\u5728\u7231\u60c5\u7684\u7ed3\u5408\u4e2d\uff0c\u6211\u770b\u5230\u5723\u8d24\u548c\u8bd7\u4eba\u4eec\u6240\u60f3\u8c61\u7684\u4ed9\u5883\u7684\u795e\u79d8\u7f29\u5f71\u3002\u8fd9\u5c31\u662f\u6211\u6240\u5bfb\u6c42\u7684\uff0c\u867d\u7136\u5b83\u5bf9\u4eba\u751f\u4f3c\u4e4e\u8fc7\u4e8e\u7f8e\u597d\uff0c\u7136\u800c\u6700\u7ec8\u6211\u8fd8\u662f\u5f97\u5230\u4e86\u5b83\u3002\u6211\u4ee5\u540c\u6837\u7684\u70ed\u60c5\u5bfb\u6c42\u77e5\u8bc6\uff0c\u6211\u5e0c\u671b\u4e86\u89e3\u4eba\u7684\u5fc3\u7075\u3002\u6211\u5e0c\u671b\u77e5\u9053\u661f\u8fb0\u4e3a\u4ec0\u4e48\u95ea\u95ea\u53d1\u5149\uff0c\u6211\u8bd5\u56fe\u7406\u89e3\u6bd5\u8fbe\u54e5\u62c9\u65af\u7684\u601d\u60f3\u5a01\u529b\uff0c\u5373\u6570\u5b57\u652f\u914d\u7740\u4e07\u7269\u6d41\u8f6c\u3002\u8fd9\u65b9\u9762\u6211\u83b7\u5f97\u4e00\u4e9b\u6210\u5c31\uff0c\u7136\u800c\u5e76\u4e0d\u591a\u3002\u7231\u60c5\u548c\u77e5\u8bc6\uff0c\u5c3d\u5176\u53ef\u80fd\u5730\u628a\u6211\u5f15\u5411\u4e91\u9704\uff0c\u4f46\u662f\u540c\u60c5\u5fc3\u603b\u628a\u6211\u5e26\u56de\u5c18\u4e16\u3002\u75db\u82e6\u7684\u547c\u53f7\u7684\u56de\u58f0\u5728\u6211\u5fc3\u4e2d\u56de\u8361\u3002\u9965\u997f\u7684\u513f\u7ae5\uff0c\u88ab\u538b\u8feb\u8005\u6298\u78e8\u7684\u53d7\u5bb3\u8005\uff0c\u88ab\u513f\u5973\u89c6\u4e3a\u8d1f\u62c5\u7684\u65e0\u52a9\u7684\u8001\u4eba\uff0c\u4ee5\u53ca\u5145\u6ee1\u5b64\u5bc2\u3001\u8d2b\u7a77\u548c\u75db\u82e6\u7684\u6574\u4e2a\u4e16\u754c\uff0c\u90fd\u662f\u5bf9\u4eba\u7c7b\u5e94\u6709\u751f\u6d3b\u7684\u5632\u8bbd\u3002\u6211\u6e34\u671b\u51cf\u8f7b\u8fd9\u4e9b\u4e0d\u5e78\uff0c\u4f46\u662f\u6211\u65e0\u80fd\u4e3a\u529b\uff0c\u800c\u4e14\u6211\u81ea\u5df1\u4e5f\u6df1\u53d7\u5176\u5bb3\u3002\u8fd9\u5c31\u662f\u6211\u7684\u4e00\u751f\uff0c\u6211\u89c9\u5f97\u6211\u6d3b\u7740\u503c\u5f97\u3002\u5982\u679c\u6709\u673a\u4f1a\u7684\u8bdd\uff0c\u6211\u8fd8\u4e50\u610f\u518d\u6d3b\u4e00\u6b21\u3002\u5b81\u5764\u8981\u6211\u7ed9\u4ed6\u753b\u4e00\u5f20\u753b\uff0c\u8981\u6709\u6606\u660e\u7684\u7279\u70b9\u3002\u6211\u60f3\u4e86\u4e00\u4e9b\u65f6\u5019\uff0c\u753b\u4e86\u4e00\u5e45\uff1a\u53f3\u4e0a\u89d2\u753b\u4e86\u4e00\u7247\u5012\u6302\u7740\u7684\u6d53\u7eff\u7684\u4ed9\u4eba\u638c\uff0c\u672b\u7aef\u5f00\u51fa\u4e00\u6735\u91d1\u9ec4\u8272\u7684\u82b1\uff1b\u5de6\u4e0b\u753b\u4e86\u51e0\u6735\u9752\u5934\u83cc\u548c\u725b\u809d\u83cc\u3002\u9898\u4e86\u8fd9\u6837\u51e0\u884c\u5b57\uff1a\u6211\u60f3\u5ff5\u6606\u660e\u7684\u96e8\u3002\u6211\u4ee5\u524d\u4e0d\u77e5\u9053\u6709\u6240\u8c13\u96e8\u5b63\u3002\u201c\u96e8\u5b63\u201d\uff0c\u662f\u5230\u6606\u660e\u4ee5\u540e\u624d\u6709\u4e86\u5177\u4f53\u611f\u53d7\u7684\u3002\u6211\u4e0d\u8bb0\u5f97\u6606\u660e\u7684\u96e8\u5b63\u6709\u591a\u957f\uff0c\u4ece\u51e0\u6708\u5230\u51e0\u6708\uff0c\u597d\u50cf\u662f\u76f8\u5f53\u957f\u7684\u3002\u4f46\u662f\u5e76\u4e0d\u4f7f\u4eba\u538c\u70e6\u3002\u56e0\u4e3a\u662f\u4e0b\u4e0b\u505c\u505c\uff0c\u505c\u505c\u4e0b\u4e0b\uff0c\u4e0d\u662f\u8fde\u7ef5\u4e0d\u65ad\uff0c\u4e0b\u8d77\u6765\u6ca1\u5b8c\uff0c\u800c\u4e14\u5e76\u4e0d\u4f7f\u4eba\u6c14\u95f7\u3002\u6211\u89c9\u5f97\u6606\u660e\u96e8\u5b63\u6c14\u538b\u4e0d\u4f4e\uff0c\u4eba\u5f88\u8212\u670d\u3002\u6606\u660e\u7684\u96e8\u5b63\u662f\u660e\u4eae\u7684\u3001\u4e30\u6ee1\u7684\uff0c\u4f7f\u4eba\u52a8\u60c5\u7684\u3002\u57ce\u6625\u8349\u6728\u6df1\uff0c\u5b5f\u590f\u8349\u6728\u957f\u3002\u6606\u660e\u7684\u96e8\u5b63\uff0c\u662f\u6d53\u7eff\u7684\u3002\u8349\u6728\u7684\u679d\u53f6\u91cc\u7684\u6c34\u5206\u90fd\u5230\u4e86\u9971\u548c\u72b6\u6001\uff0c\u663e\u793a\u51fa\u8fc7\u5206\u7684\u3001\u8fd1\u4e8e\u5938\u5f20\u7684\u65fa\u76db\u3002\u6211\u7684\u90a3\u5f20\u753b\u662f\u5199\u5b9e\u7684\u3002\u6211\u786e\u5b9e\u4eb2\u773c\u770b\u89c1\u8fc7\u5012\u6302\u7740\u8fd8\u80fd\u5f00\u82b1\u7684\u4ed9\u4eba\u638c\u3002\u65e7\u65e5\u6606\u660e\u4eba\u5bb6\u95e8\u5934\u4e0a\u7528\u4ee5\u8f9f\u90aa\u7684\u591a\u662f\u8fd9\u6837\u4e00\u4e9b\u4e1c\u897f\uff1a\u4e00\u9762\u5c0f\u955c\u5b50\uff0c\u5468\u56f4\u753b\u7740\u516b\u5366\uff0c\u4e0b\u9762\u4fbf\u662f\u4e00\u7247\u4ed9\u4eba\u638c\uff0c\u2014\u2014\u5728\u4ed9\u4eba\u638c\u4e0a\u624e\u4e00\u4e2a\u6d1e\uff0c\u7528\u9ebb\u7ebf\u7a7f\u4e86\uff0c\u6302\u5728\u9489\u5b50\u4e0a\u3002\u6c6a\u66fe\u797a\u6606\u660e\u4ed9\u4eba\u638c\u591a\uff0c\u4e14\u6781\u80a5\u5927\u3002\u6709\u4e9b\u4eba\u5bb6\u5728\u83dc\u56ed\u7684\u5468\u56f4\u79cd\u4e86\u4e00\u5708\u4ed9\u4eba\u638c\u4ee5\u4ee3\u66ff\u7bf1\u7b06\u3002\u2014\u2014\u79cd\u4e86\u4ed9\u4eba\u638c\uff0c\u732a\u7f8a\u4fbf\u4e0d\u6562\u8fdb\u56ed\u5403\u83dc\u4e86\u3002\u4ed9\u4eba\u638c\u6709\u523a\uff0c\u732a\u548c\u7f8a\u6015\u624e\u3002\u6606\u660e\u83cc\u5b50\u6781\u591a\u3002\u96e8\u5b63\u901b\u83dc\u5e02\u573a\uff0c\u968f\u65f6\u53ef\u4ee5\u770b\u5230\u5404\u79cd\u83cc\u5b50\u3002\u6700\u591a\uff0c\u4e5f\u6700\u4fbf\u5b9c\u7684\u662f\u725b\u809d\u83cc\u3002\u725b\u809d\u83cc\u4e0b\u6765\u7684\u65f6\u5019\uff0c\u5bb6\u5bb6\u996d\u9986\u5356\u7092\u725b\u809d\u83cc\uff0c\u8fde\u897f\u5357\u8054\u5927\u98df\u5802\u7684\u684c\u5b50\u4e0a\u90fd\u53ef\u4ee5\u6709\u4e00\u7897\u3002\u725b\u809d\u83cc\u8272\u5982\u725b\u809d\uff0c\u6ed1\uff0c\u5ae9\uff0c\u9c9c\uff0c\u9999\uff0c\u5f88\u597d\u5403\u3002\u7092\u725b\u809d\u83cc\u987b\u591a\u653e\u849c\uff0c\u5426\u5219\u5bb9\u6613\u4f7f\u4eba\u6655\u5012\u3002\u9752\u5934\u83cc\u6bd4\u725b\u809d\u83cc\u7565\u8d35\u3002\u8fd9\u79cd\u83cc\u5b50\u7092\u719f\u4e86\u4e5f\u8fd8\u662f\u6d45\u7eff\u8272\u7684\uff0c\u683c\u8c03\u6bd4\u725b\u809d\u83cc\u9ad8\u3002\u83cc\u4e2d\u4e4b\u738b\u662f\u9e21\uff0c\u5473\u9053\u9c9c\u6d53\uff0c\u65e0\u53ef\u65b9\u6bd4\u3002\u9e21\u662f\u540d\u8d35\u7684\u5c71\u73cd\uff0c\u4f46\u5e76\u4e0d\u771f\u7684\u8d35\u5f97\u60ca\u4eba\u3002\u4e00\u76d8\u7ea2\u70e7\u9e21\u7684\u4ef7\u94b1\u548c\u4e00\u7897\u9ec4\u7116\u9e21\u4e0d\u76f8",
            "\u4e0a\u4e0b\uff0c\u56e0\u4e3a\u8fd9\u4e1c\u897f\u5728\u4e91\u5357\u5e76\u4e0d\u96be\u5f97\u3002\u6709\u4e00\u4e2a\u7b11\u8bdd\uff1a\u6709\u4eba\u4ece\u6606\u660e\u5750\u706b\u8f66\u5230\u5448\u8d21\uff0c\u5728\u8f66\u4e0a\u770b\u5230\u5730\u4e0a\u6709\u4e00\u68f5\u9e21\uff0c\u4ed6\u8df3\u4e0b\u53bb\u628a\u9e21\u6361\u4e86\uff0c\u7d27\u8d76\u4e24\u6b65\uff0c\u8fd8\u80fd\u722c\u4e0a\u706b\u8f66\u3002\u8fd9\u7b11\u8bdd\u7528\u610f\u5728\u8bf4\u660e\u6606\u660e\u5230\u5448\u8d21\u7684\u706b\u8f66\u4e4b\u6162\uff0c\u4f46\u4e5f\u8bf4\u660e\u9e21\u968f\u5904\u53ef\u89c1\u3002\u6709\u4e00\u79cd\u83cc\u5b50\uff0c\u4e2d\u5403\u4e0d\u4e2d\u770b\uff0c\u53eb\u4f5c\u5e72\u5df4\u83cc\u3002\u4e4d\u4e00\u770b\u90a3\u6837\u5b50\uff0c\u771f\u53eb\u4eba\u6000\u7591\uff1a\u8fd9\u79cd\u4e1c\u897f\u4e5f\u80fd\u5403\uff1f\uff01\u989c\u8272\u6df1\u8910\u5e26\u7eff\uff0c\u6709\u70b9\u50cf\u4e00\u5806\u534a\u5e72\u7684\u725b\u7caa\u6216\u4e00\u4e2a\u88ab\u8e29\u7834\u4e86\u7684\u9a6c\u8702\u7a9d\u3002\u91cc\u5934\u8fd8\u6709\u8bb8\u591a\u8349\u830e\u3001\u677e\u6bdb\uff0c\u4e71\u4e03\u516b\u7cdf\uff01\u53ef\u662f\u4e0b\u70b9\u529f\u592b\uff0c\u628a\u8349\u830e\u677e\u6bdb\u62e9\u51c0\uff0c\u6495\u6210\u87f9\u817f\u8089\u7c97\u7ec6\u7684\u4e1d\uff0c\u548c\u9752\u8fa3\u6912\u540c\u7092\uff0c\u5165\u53e3\u4fbf\u4f1a\u4f7f\u4f60\u5f20\u76ee\u7ed3\u820c\uff1a\u8fd9\u4e1c\u897f\u8fd9\u4e48\u597d\u5403\uff1f\uff01\u8fd8\u6709\u4e00\u79cd\u83cc\u5b50\uff0c\u4e2d\u770b\u4e0d\u4e2d\u5403\uff0c\u53eb\u9e21\u6cb9\u83cc\u3002\u90fd\u662f\u4e00\u822c\u5927\u5c0f\uff0c\u6709\u4e00\u5757\u94f6\u5143\u90a3\u6837\u5927\uff0c\u6ef4\u6e9c\u513f\u5706\uff0c\u989c\u8272\u6d45\u9ec4\uff0c\u6070\u4f3c\u9e21\u6cb9\u4e00\u6837\u3002\u8fd9\u79cd\u83cc\u5b50\u53ea\u80fd\u505a\u83dc\u65f6\u914d\u8272\u7528\uff0c\u6ca1\u751a\u5473\u9053\u3002\u96e8\u5b63\u7684\u679c\u5b50\uff0c\u662f\u6768\u6885\u3002\u5356\u6768\u6885\u7684\u90fd\u662f\u82d7\u65cf\u5973\u5b69\u5b50\uff0c\u6234\u4e00\u9876\u5c0f\u82b1\u5e3d\u5b50\uff0c\u7a7f\u7740\u6273\u5c16\u7684\u7ee3\u4e86\u6ee1\u5e2e\u82b1\u7684\u978b\uff0c\u5750\u5728\u4eba\u5bb6\u9636\u77f3\u7684\u4e00\u89d2\uff0c\u4e0d\u65f6\u5406\u559d\u4e00\u58f0\uff1a\u201c\u5356\u6768\u6885\u2014\u2014\u201d\u58f0\u97f3\u5a07\u5a07\u7684\u3002\u5979\u4eec\u7684\u58f0\u97f3\u4f7f\u5f97\u6606\u660e\u96e8\u5b63\u7684\u7a7a\u6c14\u66f4\u52a0\u67d4\u548c\u4e86\u3002\u6606\u660e\u7684\u6768\u6885\u5f88\u5927\uff0c\u6709\u4e00\u4e2a\u4e52\u4e53\u7403\u90a3\u6837\u5927\uff0c\u989c\u8272\u9ed1\u7ea2\u9ed1\u7ea2\u7684\uff0c\u53eb\u4f5c\u201c\u706b\u70ad\u6885\u201d\u3002\u8fd9\u4e2a\u540d\u5b57\u8d77\u5f97\u771f\u597d\uff0c\u771f\u662f\u50cf\u4e00\u7403\u70e7\u5f97\u70bd\u7ea2\u7684\u706b\u70ad\uff01\u4e00\u70b9\u90fd\u4e0d\u9178\uff01\u6211\u5403\u8fc7\u82cf\u5dde\u6d1e\u5ead\u5c71\u7684\u6768\u6885\u3001\u4e95\u5188\u5c71\u7684\u6768\u6885\uff0c\u597d\u50cf\u90fd\u6bd4\u4e0d\u4e0a\u6606\u660e\u7684\u706b\u70ad\u6885\u3002\u96e8\u5b63\u7684\u82b1\u662f\u7f05\u6842\u82b1\u3002\u7f05\u6842\u82b1\u5373\u767d\u5170\u82b1\uff0c\u5317\u4eac\u53eb\u4f5c\u201c\u628a\u513f\u5170\u201d\uff08\u8fd9\u4e2a\u540d\u5b57\u771f\u4e0d\u597d\u542c\uff09\u3002\u4e91\u5357\u628a\u8fd9\u79cd\u82b1\u53eb\u4f5c\u7f05\u6842\u82b1\uff0c\u53ef\u80fd\u6700\u521d\u8fd9\u79cd\u82b1\u662f\u4ece\u7f05\u7538\u4f20\u5165\u7684\uff0c\u800c\u82b1\u7684\u9999\u5473\u53c8\u6709\u70b9\u50cf\u6842\u82b1\uff0c\u5176\u5b9e\u8fd9\u8ddf\u6842\u82b1\u5b9e\u5728\u6ca1\u6709\u4ec0\u4e48\u5173\u7cfb\u3002\u2014\u2014\u4e0d\u8fc7\u8bdd\u53c8\u8bf4\u56de\u6765\uff0c\u522b\u5904\u53eb\u5b83\u767d\u5170\u3001\u628a\u513f\u5170\uff0c\u5b83\u548c\u5170\u82b1\u4e5f\u6328\u4e0d\u4e0a\u5440\uff0c\u4e5f\u4e0d\u8fc7\u662f\u56e0\u4e3a\u5b83\u5f88\u9999\uff0c\u9999\u5f97\u50cf\u5170\u82b1\u3002\u6211\u5728\u5bb6\u4e61\u770b\u5230\u7684\u767d\u5170\u591a\u662f\u4e00\u4eba\u9ad8\uff0c\u6606\u660e\u7684\u7f05\u6842\u662f\u5927\u6811\uff01\u6211\u5728\u82e5\u56ed\u5df7\u4e8c\u53f7\u4f4f\u8fc7\uff0c\u9662\u91cc\u6709\u4e00\u68f5\u5927\u7f05\u6842\uff0c\u5bc6\u5bc6\u7684\u53f6\u5b50\uff0c\u628a\u56db\u5468\u623f\u95f4\u90fd\u6620\u7eff\u4e86\u3002\u7f05\u6842\u76db\u5f00\u7684\u65f6\u5019\uff0c\u623f\u4e1c\uff08\u662f\u4e00\u4e2a\u4e94\u5341\u591a\u5c81\u7684\u5be1\u5987\uff09\u5c31\u548c\u5979\u7684\u4e00\u4e2a\u517b\u5973\uff0c\u642d\u4e86\u68af\u5b50\u4e0a\u53bb\u6458\uff0c\u6bcf\u5929\u8981\u6458\u4e0b\u6765\u597d\u4e9b\uff0c\u62ff\u5230\u82b1\u5e02\u4e0a\u53bb\u5356\u3002\u5979\u5927\u6982\u662f\u6015\u623f\u5ba2\u4eec\u4e71\u6458\u5979\u7684\u82b1\uff0c\u65f6\u5e38\u7ed9\u5404\u5bb6\u9001\u53bb\u4e00\u4e9b\u3002\u6709\u65f6\u9001\u6765\u4e00\u4e2a\u4e03\u5bf8\u76d8\u5b50\uff0c\u91cc\u9762\u6446\u5f97\u6ee1\u6ee1\u7684\u7f05\u6842\u82b1\uff01\u5e26\u7740\u96e8\u73e0\u7684\u7f05\u6842\u82b1\u4f7f\u6211\u7684\u5fc3\u8f6f\u8f6f\u7684\uff0c\u4e0d\u662f\u6000\u4eba\uff0c\u4e0d\u662f\u601d\u4e61\u3002\u96e8\uff0c\u6709\u65f6\u662f\u4f1a\u5f15\u8d77\u4eba\u4e00\u70b9\u6de1\u6de1\u7684\u4e61\u6101\u7684\u3002\u674e\u5546\u9690\u7684\u300a\u591c\u96e8\u5bc4\u5317\u300b\u662f\u4e3a\u8bb8\u591a\u4e45\u5ba2\u7684\u6e38\u5b50\u800c\u5199\u7684\u3002\u6211\u6709\u4e00\u5929\u5728\u79ef\u96e8\u5c11\u4f4f\u7684\u65e9\u6668\u548c\u5fb7\u7199\u4ece\u8054\u5927\u65b0\u6821\u820d\u5230\u83b2\u82b1\u6c60\u53bb\u3002\u770b\u4e86\u6c60\u91cc\u7684\u6ee1\u6c60\u6e05\u6c34\uff0c\u770b\u4e86\u7740\u6bd4\u4e18\u5c3c\u88c5\u7684\u9648\u5706\u5706\u7684\u77f3\u50cf\uff08\u4f20\u8bf4\u9648\u5706\u5706\u968f\u5434\u4e09\u6842\u5230\u4e91\u5357\u540e\u51fa\u5bb6\uff0c\u66ae\u5e74\u6295\u83b2\u82b1\u6c60\u800c\u6b7b\uff09\uff0c\u96e8\u53c8\u4e0b\u8d77\u6765\u4e86\u3002\u83b2\u82b1\u6c60\u8fb9\u6709\u4e00\u6761\u5c0f\u8857\uff0c\u6709\u4e00\u4e2a\u5c0f\u9152\u5e97\uff0c\u6211\u4eec\u8d70\u8fdb\u53bb\uff0c\u8981\u4e86\u4e00\u789f\u732a\u5934\u8089\uff0c\u534a\u5e02\u65a4\u9152\uff08\u88c5\u5728\u4e0a\u4e86\u7eff\u91c9\u7684\u571f\u74f7\u676f\u91cc\uff09\uff0c\u5750\u4e86\u4e0b\u6765\u3002\u96e8\u4e0b\u5927\u4e86\u3002\u9152\u5e97\u6709\u51e0\u53ea\u9e21\uff0c\u90fd\u628a\u8111\u888b\u53cd\u63d2\u5728\u7fc5\u8180\u4e0b\u9762\uff0c\u4e00\u53ea\u811a\u7740\u5730\uff0c\u4e00\u52a8\u4e5f\u4e0d\u52a8\u5730\u5728\u6a90\u4e0b\u7ad9\u7740\u3002\u9152\u5e97\u9662\u5b50\u91cc\u6709\u4e00\u67b6\u5927\u6728\u9999\u82b1\u3002\u6606\u660e\u6728\u9999\u82b1\u5f88\u591a\u3002\u6709\u7684\u5c0f\u6cb3\u6cbf\u5cb8\u90fd\u662f\u6728\u9999\u3002\u4f46\u662f\u8fd9\u6837\u5927\u7684\u6728\u9999\u5374\u4e0d\u591a\u89c1\u3002\u4e00\u68f5\u6728\u9999\uff0c\u722c\u5728\u67b6\u4e0a\uff0c\u628a\u9662\u5b50\u906e\u5f97\u4e25\u4e25\u7684\u3002\u5bc6\u531d\u531d\u7684\u7ec6\u788e\u7684\u7eff\u53f6\uff0c\u6570\u4e0d\u6e05\u7684\u534a\u5f00\u7684\u767d\u82b1\u548c\u9971\u6da8\u7684\u82b1\u9aa8\u6735\uff0c\u90fd\u88ab\u96e8\u6c34\u6dcb\u5f97\u6e7f\u900f\u4e86\u3002\u6211\u4eec\u8d70\u4e0d\u4e86\uff0c\u5c31\u8fd9\u6837\u4e00\u76f4\u5750\u5230\u5348\u540e\u3002\u56db\u5341\u5e74\u540e\uff0c\u6211\u8fd8\u5fd8\u4e0d\u4e86\u90a3\u5929\u7684\u60c5\u5473\uff0c\u5199\u4e86\u4e00\u9996\u8bd7\uff1a\u6211\u60f3\u5ff5\u6606\u660e\u7684\u96e8\u3002"
          ],
          textEn: [
            "Time that has passed never returns. When a person nears thirty, they discover they've lost certain things: a delicate passion, a devoted attachment, a pursuit of rare treasures, an innocent trust in the world.",
            "Yet people should not be pessimistic about this. We have no time for pessimism. We should see the miracle of life itself — life flows on, forever immortal."
          ]
        },
        {
          title: "我为什么而活着", titleEn: "What I Have Lived For",
          author: "罗素", authorEn: "Bertrand Russell",
          text: [
            "三种单纯然而极其强烈的感情支配了我的一生：对爱情的渴望，对知识的追求，以及对人类苦难不可遏制的同情。",
            "这三种感情，就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。"
          ],
          textEn: [
            "Three passions, simple but overwhelmingly strong, have governed my life: the longing for love, the search for knowledge, and unbearable pity for the suffering of mankind.",
            "These passions, like great winds, have blown me hither and thither over a deep ocean of anguish, to the very brink of despair."
          ]
        }
      ],
      text: [
        "永久的生命\n严文井\n过去了的时间永不再回来。一个人到了三十岁的边头就会发现自己丢失了一些什么。然而人们却不应该为此感到悲观。我们应该看到生命自身的神奇，生命流动着，永远不朽。",
        "我为什么而活着\n罗素\n三种单纯然而极其强烈的感情支配了我的一生：对爱情的渴望，对知识的追求，以及对人类苦难不可遏制的同情。这三种感情，就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。"
      ],
      textEn: [
        "Eternal Life\nby Yan Wenjing\nTime past never returns. As one nears thirty, one discovers something lost. Yet we should not be pessimistic. We should see the miracle of life itself — life flows on, forever immortal.",
        "What I Have Lived For\nby Bertrand Russell\nThree simple but overwhelmingly strong passions have governed my life: the longing for love, the search for knowledge, and unbearable pity for human suffering. These passions, like great winds, have blown me hither and thither over a deep ocean of anguish, to the brink of despair."
      ],
      vocabWords: [
        {word:'臼齿',pinyin:'jiù chǐ',en:'molar tooth',sentence:'一个人到了三十岁的边头就会发现丢失了一颗臼齿。',sentenceEn:'At around thirty, a person discovers the loss of a molar tooth.'},
        {word:'洗涤',pinyin:'xǐ dí',en:'to wash; to cleanse',sentence:'个人生命不像一件衬衣，可以脱下它来洗涤。',sentenceEn:'Individual life is not like a shirt that can be taken off and washed.'},
        {word:'卑微',pinyin:'bēi wēi',en:'humble; lowly',sentence:'地面上的小草，它们是那样卑微。',sentenceEn:'The little grasses on the ground are so humble.'},
        {word:'繁殖',pinyin:'fán zhí',en:'to reproduce; to multiply',sentence:'永不休止地繁殖着，蔓延着。',sentenceEn:'Reproducing and spreading without end.'},
        {word:'凋谢',pinyin:'diāo xiè',en:'to wither; to fade',sentence:'个体消逝了，它却永远存在。',sentenceEn:'Individual forms perish, but life itself endures forever.'}
      ],
      readingTips: [
        {cn:"比较两篇散文对生命意义的不同思考角度。", en:"Compare the two essays' different perspectives on the meaning of life."},
        {cn:"品味文章语言的哲理性和抒情性。", en:"Savor the philosophical and lyrical qualities of the language."}
      ],
      authorBio: {cn:"严文井（1915\u20142005），原名严文锦，湖北武昌人，著名作家、儿童文学家，曾任中国作协副主席。罗素（1872\u20141970），英国哲学家、逻辑学家、数学家、社会活动家，1950年诺贝尔文学奖获得者。代表作有《西方哲学史》《幸福之路》等。", en:"Yan Wenjing (1915\u20132005), born in Wuchang, Hubei, was a renowned writer and children\u2019s literature author who served as vice-chairman of the Chinese Writers\u2019 Association. Bertrand Russell (1872\u20131970) was a British philosopher, logician, mathematician, and social activist who received the 1950 Nobel Prize in Literature. Major works include A History of Western Philosophy and The Conquest of Happiness."},
      teachingPoints: [{cn:"比较两篇散文对生命意义的不同思考角度：严文井从生命的延续和不朽出发，罗素从个人追求（爱情、知识、同情）出发。", en:"Compare the two essays\u2019 different perspectives on life\u2019s meaning: Yan Wenjing starts from life\u2019s continuity and immortality, while Russell starts from personal pursuits (love, knowledge, compassion)."}, {cn:"品味哲理性散文的语言特点：简洁凝练、富有张力，以简短的篇幅传达深刻的思想。", en:"Appreciate philosophical prose\u2019s language: concise, powerful, conveying profound thought in brief space."}],
      parentTips: [{cn:"和孩子讨论\u201c生命的意义\u201d这个话题，分享各自的看法。", en:"Discuss the topic of \u2018the meaning of life\u2019 with your child and share each other\u2019s views."}, {cn:"鼓励孩子写一篇短文，谈谈自己\u201c为什么而学习/生活\u201d。", en:"Encourage your child to write a short essay about what they \u2018live/study for.\u2019"}]
    },
    {
      id: 17, title: "昆明的雨", titleEn: "Kunming Rain",
      difficulty: 4,
      author: "汪曾祺", authorEn: "Wang Zengqi",
      isSelfRead: true,
      text: [
        "宁坤要我给他画一张画，要有昆明的特点。我想了一些时候，画了一幅：右上角画了一片倒挂着的浓绿的仙人掌——仙人掌有巴掌大一片，末端开出一朵金黄色的花；左下画了几朵青头菌和牛肝菌。",
        "我想念昆明的雨。昆明的雨季是明亮的、丰满的，使人动情的。昆明的雨季，是浓绿的。草木的枝叶里的水分都到了饱和状态，显示出过分的、近于夸张的旺盛。",
        "卖杨梅的都是苗族女孩子，戴一顶小花帽子，穿着扳尖的绣了满帮花的鞋，坐在人家阶石的一角，不时吆唤一声：\u201c卖杨梅——\u201d声音娇娇的。她们的声音使得昆明雨季的空气更加柔和了。",
        "带着雨珠的缅桂花使我的心软软的，不是怀人，不是思乡，不是因为这花很美。"
      ],
      textEn: [
        "Ningkun asked me to paint him a picture with Kunming characteristics. After some thought, I painted: in the upper right, a thick green cactus hanging upside down — palm-sized, with a golden flower at the tip; in the lower left, a few green-capped and liver-colored mushrooms.",
        "I miss the rain of Kunming. Kunming's rainy season is bright, full, and moving. Kunming's rainy season is deep green. The moisture in plant branches and leaves reaches saturation, displaying an excessive, nearly exaggerated vitality.",
        "The bayberry sellers were all Miao girls, wearing small flowered caps, shoes with embroidered upturned tips, sitting on someone's stone steps, occasionally calling out: 'Selling bayberries—' in a delicate voice. Their voices made the air of Kunming's rainy season even softer.",
        "The rain-pearled michelia flowers made my heart go soft — not because of missing someone, not homesickness, not because the flower was beautiful."
      ],
      vocabWords: [
        {word:'青头菌',pinyin:'qīng tóu jùn',en:'green-cap mushroom',sentence:'青头菌比牛肝菌略贵。',sentenceEn:'Green-cap mushrooms are slightly more expensive than boletus.'},
        {word:'鲜腴',pinyin:'xiān yú',en:'fresh and rich',sentence:'昆明的菌子极多，且鲜腴。',sentenceEn:'Kunming had abundant mushrooms, all fresh and rich.'},
        {word:'缅桂',pinyin:'miǎn guì',en:'Burmese osmanthus',sentence:'缅桂花即白兰花，花香浓郁。',sentenceEn:'The Burmese osmanthus is white magnolia, with a rich fragrance.'},
        {word:'密匝匝',pinyin:'mì zā zā',en:'densely packed',sentence:'密匝匝的细碎的绿叶，数不清的半开的白花和饱涨的花骨朵。',sentenceEn:'Densely packed fine green leaves, countless half-open white flowers and swelling buds.'},
        {word:'情味',pinyin:'qíng wèi',en:'emotional flavor; charm',sentence:'我想念昆明的雨的情味。',sentenceEn:'I miss the emotional charm of Kunming rain.'}
      ],
      readingTips: [
        {cn:"体会汪曾祺散文\u201c淡而有味\u201d的语言风格。", en:"Appreciate Wang Zengqi's prose style — 'light yet flavorful.'"},
        {cn:"注意文章如何通过具体细节表达对昆明的深情怀念。", en:"Note how the article expresses deep nostalgia for Kunming through specific details."}
      ],
      authorBio: {cn:"汪曾祺（1920\u20141997），江苏高邮人，中国当代著名作家、散文家。师承沈从文，文风平淡自然、饶有情趣、意味隽永。代表作有小说《受戒》《大淖记事》等，被誉为\u201c中国最后一个纯粹的文人\u201d。", en:"Wang Zengqi (1920\u20131997), from Gaoyou, Jiangsu, was a celebrated contemporary Chinese writer and essayist. A student of Shen Congwen, his style is natural, charming, and subtly meaningful. Major works include the novels The Ordination and Chronicles of Danao. He is praised as \u2018China\u2019s last pure man of letters.\u2019"},
      teachingPoints: [{cn:"体会汪曾祺\u201c淡而有味\u201d的散文风格：不追求宏大叙事，而是以日常琐事（菌子、杨梅、缅桂花）传达对昆明的深情。", en:"Appreciate Wang Zengqi\u2019s \u2018light yet flavorful\u2019 prose style: instead of grand narratives, he conveys deep feeling for Kunming through everyday details (mushrooms, bayberries, michelia)."}, {cn:"学习\u201c形散神聚\u201d的散文结构：话题看似随意跳转，实则统一于对昆明雨季的深情怀念。", en:"Learn the \u2018scattered form, unified spirit\u2019 essay structure: topics seem to jump freely, but are unified by deep nostalgia for Kunming\u2019s rainy season."}],
      parentTips: [{cn:"一起做一道地方特色菜或小吃，引导孩子体会食物与记忆的联系。", en:"Cook a regional specialty dish or snack together and guide your child to experience the connection between food and memory."}, {cn:"鼓励孩子用简洁生动的语言记录身边的小事，学习\u201c以小见大\u201d的写法。", en:"Encourage your child to record small things around them with concise, vivid language, learning to \u2018see the great through the small.\u2019"}]
    }
  ]
},
/* ═══════════════════════════════════════════ */
/*  UNIT 5 — 说明文                              */
/* ═══════════════════════════════════════════ */
{
  id: 5, title: "第五单元", titleEn: "Unit 5 — Expository Writing", type: "kewen",
  writing: {title:"说明事物要抓住特征", titleEn:"Grasping Key Features in Expository Writing",
    desc:"学习抓住事物的主要特征进行说明，运用恰当的说明方法。",
    descEn:"Learn to identify and explain the main features of things; use appropriate expository methods."},
  oralComm: {title:"复述与转述", titleEn:"Retelling & Relaying",
    desc:"学习复述和转述的基本方法，做到准确、简洁、有条理。",
    descEn:"Learn basic methods of retelling and relaying; be accurate, concise, and well-organized."},
  classicBookGuide: {title:"《昆虫记》科普作品的阅读", titleEn:"The Book of Insects: Reading Popular Science",
    desc:"学习阅读科普作品的方法，感受法布尔的科学精神和文学才华。",
    descEn:"Learn methods for reading popular science works; appreciate Fabre's scientific spirit and literary talent."},
  lessons: [
    {
      id: 18, title: "中国石拱桥", titleEn: "China's Stone Arch Bridges",
      difficulty: 4,
      author: "茅以昇", authorEn: "Mao Yisheng",
      text: [
        "石拱桥的桥洞成弧形，就像虹。古代神话里说，雨后彩虹是\u201c人间天上的桥\u201d，通过彩虹就能上天。我国的石拱桥有悠久的历史。《水经注》里提到的\u201c旅人桥\u201d，大约建成于公元282年，可能是有记载的最早的石拱桥了。",
        "我国的石拱桥几乎到处都有。这些桥大小不一，形式多样，有许多是惊人的杰作。其中最著名的当推河北省赵县的赵州桥，还有北京丰台区的卢沟桥。",
        "赵州桥非常雄伟，全长50.82米，两端宽9.6米，中部略窄，宽约9米。桥的设计完全合乎科学原理，施工技术更是巧妙绝伦。唐朝的张嘉贞说它\u201c制造奇特，人不知其所以为\u201d。",
        "永定河上的卢沟桥，修建于公元1189到1192年间。桥长265米，由11个半圆形的石拱组成，每个石拱长度不一，自16米到21.6米。桥宽约8米，桥面平坦，几乎与河面平行。每两个石拱之间有石砌桥墩，把11个石拱联成一个整体。",
        "为什么我国的石拱桥会有这样光辉的成就呢？首先，在于我国劳动人民的勤劳和智慧。其次，我国石拱桥的设计施工有优良的传统。再其次，我国富有建筑用的各种石料。"
      ],
      textEn: [
        "The arch of a stone arch bridge is curved like a rainbow. Ancient myths say the rainbow after rain is a 'bridge between earth and heaven.' China's stone arch bridges have a long history. The 'Traveler's Bridge' mentioned in the Commentary on the Waterways Classic was built around 282 AD and may be the earliest recorded stone arch bridge.",
        "Stone arch bridges are found almost everywhere in China. These bridges vary in size and form, with many being astonishing masterpieces. The most famous are the Zhaozhou Bridge in Zhao County, Hebei, and the Lugou (Marco Polo) Bridge in Fengtai, Beijing.",
        "The Zhaozhou Bridge is magnificent — 50.82 meters long, 9.6 meters wide at the ends, narrowing to about 9 meters in the middle. Its design fully conforms to scientific principles, and the construction technique is supremely ingenious. The Tang Dynasty's Zhang Jiazhen called it 'uniquely constructed, beyond human understanding.'",
        "The Lugou Bridge over the Yongding River was built between 1189 and 1192. The bridge is 265 meters long, composed of 11 semicircular stone arches, each of varying length, ranging from 16 to 21.6 meters. The bridge is about 8 meters wide, with a level surface nearly parallel to the river. Between every two stone arches there is a stone pier, linking all 11 arches into one unified whole.",
        "Why have China's stone arch bridges achieved such brilliance? First, because of the diligence and wisdom of China's working people. Second, China's stone arch bridge design and construction has an excellent tradition. Third, China is rich in various building stones."
      ],
      vocabWords: [
        {word:'雄跨',pinyin:'xióng kuà',en:'to span grandly',sentence:'能几十年几百年甚至上千年雄跨在江河之上。',sentenceEn:'They can span rivers grandly for decades, centuries, or even millennia.'},
        {word:'巧妙绝伦',pinyin:'qiǎo miào jué lún',en:'extraordinarily ingenious',sentence:'施工技术更是巧妙绝伦。',sentenceEn:'The construction techniques were extraordinarily ingenious.'},
        {word:'匀称',pinyin:'yún chèn',en:'well-proportioned; symmetrical',sentence:'全桥结构匀称，和四周景色配合得十分和谐。',sentenceEn:'The bridge is well-proportioned, harmonizing beautifully with surrounding scenery.'},
        {word:'惟妙惟肖',pinyin:'wéi miào wéi xiào',en:'remarkably true to life',sentence:'桥栏柱上的石刻狮子惟妙惟肖。',sentenceEn:'The stone lions on the bridge railing pillars are remarkably true to life.'},
        {word:'推崇',pinyin:'tuī chóng',en:'to esteem highly',sentence:'马可波罗十分推崇这座桥。',sentenceEn:'Marco Polo highly esteemed this bridge.'}
      ],
      grammarPoints: [
        {point:'举例子',pointEn:'jǔ lì zi',example:'giving examples as explanation',exampleEn:'以赵州桥和卢沟桥为例说明中国石拱桥的特点。',explanation:'Using Zhaozhou Bridge and Lugou Bridge as examples to explain the features of Chinese stone arch bridges.',explanationEn:'举例子是说明文中最常用的说明方法，通过具体实例使抽象概念清晰易懂。'},
        {point:'列数字',pointEn:'liè shù zì',example:'listing figures',exampleEn:'全长50.82米，两端宽9.6米。',explanation:'Total length 50.82 meters, width at both ends 9.6 meters.',explanationEn:'用准确的数字来说明事物的特征，增强说明的科学性和可信度。'}
      ],
      thinkExplore: [
        {cn:"文章选取了哪些例子来说明中国石拱桥的特征？", en:"What examples does the article select to illustrate the characteristics of Chinese stone arch bridges?"},
        {cn:"本文中用了哪些说明方法？找出实例并说说它们的作用。", en:"What expository methods are used? Find examples and explain their function."},
        {cn:"结合加点词语，体会说明文语言的准确、严谨。", en:"Using the highlighted words, appreciate the accuracy and rigor of expository language."}
      ],
      authorBio: {cn:"茅以昇（1896\u20141989），字唐臣，江苏镇江人。著名桥梁专家、教育家，中国近代桥梁工程的奠基人之一。主持设计了我国第一座由中国人自行设计建造的现代化大桥——钱塘江大桥。曾任中国科协副主席。", en:"Mao Yisheng (1896\u20131989), born in Zhenjiang, Jiangsu, was a renowned bridge expert and educator, one of the founders of modern Chinese bridge engineering. He led the design of the Qiantang River Bridge\u2014the first modern bridge designed and built entirely by Chinese. He served as vice-chairman of the China Association for Science and Technology."},
      teachingPoints: [{cn:"掌握常用的说明方法：举例子（赵州桥、卢沟桥）、列数字（长50.82米等）、作比较、打比方（\u201c像虹\u201d）、引用（张嘉贞的话）。", en:"Master common expository methods: giving examples (Zhaozhou, Lugou bridges), listing figures (50.82m), making comparisons, using analogies (\u2018like a rainbow\u2019), and quotation (Zhang Jiazhen\u2019s words)."}, {cn:"体会说明文语言的准确性：\u201c大约\u201d\u201c可能\u201d\u201c几乎\u201d等修饰语体现了科学严谨的态度。", en:"Appreciate the precision of expository language: modifiers like \u2018approximately,\u2019 \u2018possibly,\u2019 \u2018almost\u2019 reflect a scientifically rigorous attitude."}],
      parentTips: [{cn:"带孩子观察附近的桥梁，了解其类型和结构特点。", en:"Take your child to observe nearby bridges and learn about their types and structural features."}, {cn:"鼓励孩子用说明方法（列数字、举例子等）写一篇关于身边事物的说明文。", en:"Encourage your child to write an expository essay about something around them using methods like listing figures and giving examples."}]
    },
    {
      id: 19, title: "苏州园林", titleEn: "Suzhou Gardens",
      difficulty: 4,
      author: "叶圣陶", authorEn: "Ye Shengtao",
      text: [
        "苏州园林据说有一百多处，我到过的不过十多处。倘若要我说说总的印象，我觉得苏州园林是我国各地园林的标本，各地园林或多或少都受到苏州园林的影响。",
        "设计者和匠师们一致追求的是：务必使游览者无论站在哪个点上，眼前总是一幅完美的图画。为了达到这个目的，他们讲究亭台轩榭的布局，讲究假山池沼的配合，讲究花草树木的映衬，讲究近景远景的层次。",
        "苏州园林可绝不讲究对称，好像故意避免似的。这是为什么？用图画来比方，对称的建筑是图案画，不是美术画，而园林是美术画，美术画要求自然之趣，是不讲究对称的。",
        "游览苏州园林必然会注意到花墙和廊子。有墙壁隔着，有廊子界着，层次多了，景致就见得深了。可是墙壁上有砖砌的各式镂空图案，廊子大多是两边无所依傍的，实际是隔而不隔，界而未界，因而更增加了景致的深度。",
        "可以说的当然不止以上这些，这里不再多写了。"
      ],
      textEn: [
        "Suzhou reportedly has over a hundred gardens; I've visited only a dozen or so. If asked for a general impression, I'd say Suzhou gardens are the model for gardens throughout China — gardens everywhere have been influenced by them to some degree.",
        "What designers and craftsmen unanimously pursue is this: visitors should see a perfect picture from any vantage point. To achieve this, they pay careful attention to the layout of pavilions and terraces, the combination of artificial hills and ponds, the interplay of plants and trees, and the layering of near and far views.",
        "Suzhou gardens absolutely avoid symmetry, as if deliberately. Why? To use a painting analogy: symmetrical buildings are pattern drawings, not fine art, while gardens are fine art. Fine art requires natural charm and doesn't demand symmetry.",
        "Visitors inevitably notice the flower walls and corridors. With walls dividing and corridors separating, layers multiply and views deepen. Yet the walls feature various openwork brick patterns, and corridors mostly stand unsupported on both sides — effectively dividing without truly dividing, separating without truly separating — thus adding even more depth to the scenery.",
        "There is certainly more that could be said, but I'll stop here."
      ],
      vocabWords: [
        {word:'因地制宜',pinyin:'yīn dì zhì yí',en:'to adapt to local conditions',sentence:'设计者和匠师们因地制宜，自出心裁。',sentenceEn:'The designers and craftsmen adapted to local conditions and used their own ingenuity.'},
        {word:'自出心裁',pinyin:'zì chū xīn cái',en:'to use one’s own ingenuity',sentence:'因地制宜，自出心裁。',sentenceEn:'Adapting to conditions and using their own ingenuity.'},
        {word:'嶙峋',pinyin:'lín xún',en:'rugged; craggy',sentence:'盘曲嶙峋的枝干就是一幅好画。',sentenceEn:'The rugged, twisting branches were a fine picture in themselves.'},
        {word:'丘壑',pinyin:'qiū hè',en:'hills and valleys; a vision of landscape',sentence:'胸中有丘壑。',sentenceEn:'Having a vision of landscapes in one’s mind.'},
        {word:'镂空',pinyin:'lòu kōng',en:'openwork; hollow carving',sentence:'墙壁上有砖砌的各式镂空图案。',sentenceEn:'The walls had various openwork patterns in brick.'}
      ],
      grammarPoints: [
        {point:'总分结构',pointEn:'zǒng fēn jié gòu',example:'general-to-specific structure',exampleEn:'先总说苏州园林追求完美图画的特点，再分项具体说明。',explanation:'First stating the overall principle that Suzhou Gardens pursue perfect pictures, then explaining each aspect in detail.',explanationEn:'先提出总论点或总特征，再逐一展开具体论述，条理清晰，层次分明。'}
      ],
      thinkExplore: [
        {cn:"课文中哪一句话最能说明苏州园林的整体特征？作者是从哪几个方面来具体展开说明的？", en:"Which sentence best captures the overall feature of Suzhou gardens? From which aspects does the author elaborate?"},
        {cn:"揣摩\u201c标本\u201d\u201c图案画\u201d和\u201c美术画\u201d\u201c隔而不隔，界而未界\u201d等词句的含义。", en:"Ponder the meanings of 'model,' 'pattern drawing' vs. 'fine art,' and 'dividing without truly dividing.'"}
      ],
      authorBio: {cn:"叶圣陶（1894\u20141988），原名叶绍钧，字秉臣，江苏苏州人。现代著名作家、教育家、编辑出版家。代表作有长篇小说《倪焕之》、童话集《稻草人》等，被誉为\u201c优秀的语言艺术家\u201d。对中国现代语文教育贡献巨大。", en:"Ye Shengtao (1894\u20131988), born in Suzhou, Jiangsu, was a celebrated modern writer, educator, and publisher. Major works include the novel Ni Huanzhi and the fairy tale collection The Scarecrow. He is hailed as an \u2018outstanding language artist\u2019 and made enormous contributions to modern Chinese language education."},
      teachingPoints: [{cn:"学习抓住事物总特征进行说明的方法：苏州园林的总特征是\u201c务必使游览者无论站在哪个点上，眼前总是一幅完美的图画\u201d，全文围绕此展开。", en:"Learn to identify and present the overall feature: Suzhou gardens\u2019 key feature is \u2018visitors should see a perfect picture from any vantage point,\u2019 and the entire text revolves around this."}, {cn:"理解\u201c总\u2014分\u2014总\u201d的说明结构，以及从多个角度（布局、配合、映衬、层次）分条说明的方法。", en:"Understand the \u2018general-detail-summary\u2019 expository structure, and the method of explaining from multiple angles (layout, combination, interplay, layering)."}],
      parentTips: [{cn:"观看苏州园林的图片或纪录片，对照课文内容，帮助孩子直观理解。", en:"View photos or documentaries of Suzhou gardens, comparing them with the text to help your child understand visually."}, {cn:"引导孩子观察学校或小区的景观设计，思考\u201c对称\u201d与\u201c自然\u201d哪种更美。", en:"Guide your child to observe landscape design at school or in the neighborhood; discuss whether \u2018symmetry\u2019 or \u2018naturalness\u2019 is more beautiful."}]
    },
    {
      id: 20, title: "人民英雄永垂不朽", titleEn: "The People's Heroes Are Immortal",
      difficulty: 4,
      subtitle: "瞻仰首都人民英雄纪念碑", subtitleEn: "Visiting the Monument to the People's Heroes",
      author: "周定舫", authorEn: "Zhou Dingfang",
      isSelfRead: true,
      text: [
        "我怀着万分崇敬的心情，瞻仰了人民英雄纪念碑。我从东长安街向天安门广场走去，未进入广场就望见纪念碑。它像顶天立地的巨人一样矗立在广场南部，和天安门遥遥相对。",
        "纪念碑是用17000块坚硬的花岗石和洁白的汉白玉砌成的。它矗立在双层台座上，碑身是一块长14.7米、宽2.9米、厚1米、重达60吨的大石碑。这是中国最大的一块碑石。碑身正面（北面）镌刻着毛泽东题写的\u201c人民英雄永垂不朽\u201d八个鎏金大字。",
        "碑座四周的十幅浮雕，概括了中国人民一百多年来，特别是在中国共产党领导下的反帝反封建的革命斗争历史。"
      ],
      textEn: [
        "With deepest reverence, I visited the Monument to the People's Heroes. Walking from East Chang'an Avenue toward Tiananmen Square, I could see the monument before even entering the square. It stands like a towering giant in the southern part of the square, facing Tiananmen from afar.",
        "The monument is built from 17,000 blocks of hard granite and pure white marble. It rises on a two-tiered base; the main body is a single stone slab 14.7 meters long, 2.9 meters wide, 1 meter thick, weighing 60 tons — the largest stone tablet in China. On its front (north) face are engraved eight gilded characters by Mao Zedong: 'The People's Heroes Are Immortal.'",
        "The ten relief carvings around the base summarize over a century of the Chinese people's revolutionary struggle against imperialism and feudalism, especially under the leadership of the Communist Party of China."
      ],
      vocabWords: [
        {word:'瞻仰',pinyin:'zhān yǎng',en:'to pay respect to; to look up at with reverence',sentence:'瞻仰首都人民英雄纪念碑。',sentenceEn:'Paying respect to the Monument to the People’s Heroes in the capital.'},
        {word:'矗立',pinyin:'chù lì',en:'to stand tall; to tower',sentence:'纪念碑矗立在天安门广场中心。',sentenceEn:'The monument stands tall in the center of Tiananmen Square.'},
        {word:'浮雕',pinyin:'fú diāo',en:'relief sculpture',sentence:'碑身四周有十幅巨大的浮雕。',sentenceEn:'Around the monument are ten large relief sculptures.'},
        {word:'上溯',pinyin:'shàng sù',en:'to trace back',sentence:'从碑身的浮雕可以上溯到1840年鸦片战争。',sentenceEn:'From the relief sculptures, one can trace back to the Opium War of 1840.'},
        {word:'丰碑',pinyin:'fēng bēi',en:'great monument; milestone',sentence:'人民英雄永垂不朽的丰碑。',sentenceEn:'The great monument to the immortal people’s heroes.'}
      ],
      readingTips: [
        {cn:"注意文章按照空间顺序（由远及近、由低到高）进行说明的方法。", en:"Note the article's use of spatial order (far to near, low to high) for organization."},
        {cn:"体会说明文中记叙、描写和议论相结合的特点。", en:"Appreciate the combination of narration, description, and commentary in expository writing."}
      ],
      authorBio: {cn:"周定舫，新闻记者、作家。本文最初发表于1958年5月，记述了作者瞻仰人民英雄纪念碑的经过，按照由远到近、由低到高的空间顺序，详细介绍了纪念碑的建筑特点和十幅浮雕所表现的历史内容。", en:"Zhou Dingfang was a journalist and writer. This article was first published in May 1958, recording the author\u2019s visit to the Monument to the People\u2019s Heroes. Following a spatial order from far to near and low to high, it details the monument\u2019s architectural features and the historical events depicted in its ten relief carvings."},
      teachingPoints: [{cn:"学习按照空间顺序（由远及近、由低到高、由整体到局部）组织说明文的方法。", en:"Learn to organize expository writing using spatial order (far to near, low to high, whole to parts)."}, {cn:"体会说明文中融入记叙、描写和议论的写法：记叙瞻仰过程，描写建筑外观，议论历史意义。", en:"Appreciate how narration, description, and commentary are blended: narrating the visit, describing the architecture, and commenting on historical significance."}],
      parentTips: [{cn:"如有机会，带孩子参观人民英雄纪念碑或通过网络虚拟参观，结合课文了解浮雕内容。", en:"If possible, visit the Monument to the People\u2019s Heroes with your child, or take a virtual tour online; learn about the relief carvings with the text."}, {cn:"引导孩子学习用空间顺序描写一处建筑或景点。", en:"Guide your child to practice describing a building or scenic spot using spatial order."}]
    },
    {
      id: 21, title: "蝉", titleEn: "Cicadas",
      difficulty: 5,
      author: "法布尔", authorEn: "Jean-Henri Fabre",
      isSelfRead: true,
      text: [
            "\u8749\u7684\u5730\u7a74\u5e38\u5e38\u5efa\u9020\u5728\u5e72\u71e5\u800c\u9633\u5149\u5145\u8db3\u7684\u5730\u65b9\uff0c\u5927\u90fd\u6316\u5728\u7ed3\u4e86\u4e0d\u5e73\u7684\u8def\u4e0a\u6216\u8005\u6c9f\u6e20\u7684\u659c\u5761\u4e0a\u3002\u7a74\u9053\u7cbe\u5fc3\u5efa\u9020\uff0c\u53e3\u5f84\u7ea6\u4e00\u5bf8\u4e94\u5206\u5230\u4e8c\u5bf8\uff0c\u6316\u5f97\u5f88\u6df1\u3002",
            "\u56db\u5e74\u9ed1\u6697\u4e2d\u7684\u82e6\u5de5\uff0c\u4e00\u4e2a\u6708\u9633\u5149\u4e0b\u7684\u4eab\u4e50\uff0c\u8fd9\u5c31\u662f\u8749\u7684\u751f\u6d3b\u3002\u6211\u4eec\u4e0d\u5e94\u5f53\u8ba8\u538c\u5b83\u90a3\u55a7\u56a3\u7684\u6b4c\u58f0\uff0c\u56e0\u4e3a\u5b83\u6398\u571f\u56db\u5e74\uff0c\u73b0\u5728\u624d\u80fd\u591f\u7a7f\u8d77\u6f02\u4eae\u7684\u8863\u670d\uff0c\u957f\u8d77\u53ef\u4e0e\u98de\u9e1f\u5339\u654c\u7684\u7fc5\u8180\uff0c\u6c90\u6d74\u5728\u6e29\u6696\u7684\u9633\u5149\u4e2d\u3002",
            "\u4ec0\u4e48\u6837\u7684\u94b9\u58f0\u80fd\u54cd\u4eae\u5230\u8db3\u4ee5\u6b4c\u9882\u5b83\u90a3\u6765\u4e4b\u4e0d\u6613\u7684\u5239\u90a3\u6b22\u6109\u5462\uff1f"
          ],
      textEn: [
        "The cicada's underground burrow is usually built in dry, sunny places, mostly dug along uneven roads or on the slopes of ditches. The tunnel is carefully constructed, about 1.5 to 2 inches in diameter, dug very deep.",
        "Four years of toil in darkness, one month of pleasure in sunshine — this is the cicada's life. We should not resent its clamorous song, for after digging underground for four years, it can finally don its beautiful garments, grow wings to rival birds, and bask in warm sunlight.",
        "What cymbal crash could be loud enough to celebrate its hard-won moment of joy?"
      ],
      vocabWords: [
        {word:'隧道',pinyin:'suì dào',en:'tunnel',sentence:'蝉的幼虫从地下的隧道爬出来。',sentenceEn:'The cicada larva crawls out from its underground tunnel.'},
        {word:'涂墁',pinyin:'tú màn',en:'to plaster',sentence:'幼虫用一种黏液涂墁隧道的墙壁。',sentenceEn:'The larva plasters the tunnel walls with a sticky liquid.'},
        {word:'金蝉脱壳',pinyin:'jīn chán tuō qiào',en:'the golden cicada sheds its shell',sentence:'经过漫长的等待，幼虫终于金蝉脱壳。',sentenceEn:'After a long wait, the larva finally sheds its shell like a golden cicada.'},
        {word:'喧嚣',pinyin:'xuān xiāo',en:'noisy; clamorous',sentence:'蝉的喧嚣声充满了整个夏天。',sentenceEn:'The clamorous sound of cicadas filled the entire summer.'},
        {word:'蜕皮',pinyin:'tuì pí',en:'to molt; to shed skin',sentence:'蝉要经历多次蜕皮才能变为成虫。',sentenceEn:'Cicadas must molt multiple times before becoming adults.'}
      ],
      readingTips: [
        {cn:"体会法布尔如何将科学观察与文学描写结合。", en:"Appreciate how Fabre combines scientific observation with literary description."},
        {cn:"注意说明文中拟人手法的运用。", en:"Note the use of personification in expository writing."}
      ],
      authorBio: {cn:"让-亨利\u00b7法布尔（1823\u20141915），法国著名昆虫学家、文学家。代表作《昆虫记》（全十卷）融合了科学观察与文学描写，被誉为\u201c昆虫史诗\u201d，法布尔本人也被称为\u201c昆虫界的荷马\u201d。本文选自《昆虫记》。", en:"Jean-Henri Fabre (1823\u20131915) was a renowned French entomologist and writer. His masterwork Souvenirs Entomologiques (10 volumes) blends scientific observation with literary description and is hailed as an \u2018insect epic.\u2019 Fabre himself is called the \u2018Homer of the Insect World.\u2019 This text is from Souvenirs Entomologiques."},
      teachingPoints: [{cn:"理解科普说明文的特点：将严谨的科学观察融入生动的文学描写，使知识性与趣味性兼备。", en:"Understand the features of popular science writing: integrating rigorous scientific observation with vivid literary description, combining knowledge with interest."}, {cn:"体会拟人手法在说明文中的表达效果：使蝉的生活习性生动可感，激发读者的同情和思考。", en:"Appreciate personification\u2019s effect in expository writing: making the cicada\u2019s habits vivid and relatable, arousing readers\u2019 sympathy and thought."}],
      parentTips: [{cn:"和孩子一起在公园观察昆虫，尝试用科学和文学相结合的方式描述观察发现。", en:"Observe insects in a park with your child and try describing your findings by combining scientific and literary approaches."}, {cn:"推荐孩子阅读《昆虫记》其他章节，培养对自然科学的兴趣。", en:"Recommend other chapters of Fabre\u2019s book to your child to cultivate interest in natural science."}]
    },
    {
      id: 22, title: "梦回繁华", titleEn: "Dreaming Back to Splendor",
      difficulty: 5,
      author: "毛宁", authorEn: "Mao Ning",
      isSelfRead: true,
      text: [
            "\u6bdb\u5b81\u5317\u5b8b\u65f6\u671f\uff0c\u5546\u4e1a\u624b\u5de5\u4e1a\u8fc5\u901f\u53d1\u5c55\uff0c\u57ce\u5e02\u5e03\u5c40\u6253\u7834\u4e86\u574a\u4e0e\u5e02\u7684\u4e25\u683c\u754c\u9650\uff0c\u51fa\u73b0\u7a7a\u524d\u7684\u7e41\u8363\u5c40\u9762\u3002\u5317\u5b8b\u6c74\u4eac\u5546\u4e1a\u7e41\u76db\uff0c\u9664\u8d35\u65cf\u805a\u96c6\u5916\uff0c\u8fd8\u4f4f\u6709\u5927\u91cf\u7684\u5546\u4eba\u3001\u624b\u5de5\u4e1a\u8005\u548c\u5e02\u6c11\uff0c\u57ce\u5e02\u7684\u6587\u5316\u751f\u6d3b\u4e5f\u5341\u5206\u6d3b\u8dc3\u3002\u7531\u6b64\uff0c\u7ed8\u753b\u7684\u9898\u6750\u8303\u56f4\u5728\u53cd\u6620\u73b0\u5b9e\u751f\u6d3b\u65b9\u9762\u5f97\u5230\u4e86\u6781\u5927\u7684\u62d3\u5c55\uff0c\u4ece\u5510\u4ee3\u4ee5\u63cf\u7ed8\u91cd\u5927\u5386\u53f2\u4e8b\u4ef6\u548c\u8d35\u65cf\u751f\u6d3b\u4e3a\u4e3b\uff0c\u6269\u5c55\u5230\u63cf\u7ed8\u57ce\u4e61\u5e02\u4e95\u5e73\u6c11\u751f\u6d3b\u7684\u5404\u4e2a\u65b9\u9762\u3002\u5f20\u62e9\u7aef\u7684\u300a\u6e05\u660e\u4e0a\u6cb3\u56fe\u300b\u4fbf\u662f\u5317\u5b8b\u98ce\u4fd7\u753b\u4f5c\u54c1\u4e2d\u6700\u5177\u4ee3\u8868\u6027\u7684\u4e00\u5e45\u3002\u5f20\u62e9\u7aef\uff0c\u4e3b\u8981\u6d3b\u52a8\u4e8e\u5317\u5b8b\u672b\u5e74\u81f3\u5357\u5b8b\u521d\u5e74\uff0c\u751f\u5352\u5e74\u4e0d\u8be6\uff0c\u5c71\u4e1c\u4e1c\u6b66\u4eba\uff0c\u5b57\u6b63\u9053\uff0c\u53c8\u5b57\u6587\u53cb\u3002\u5e7c\u8bfb\u4e66\u6e38\u5b66\u4e8e\u6c74\u4eac\uff0c\u5fbd\u5b97\u671d\u8fdb\u5165\u7ff0\u6797\uff0c\u636e\u5f20\u8457\u9898\u8dcb\uff0c\u201c\u540e\u4e60\u7ed8\u753b\u201d\uff0c\u64c5\u957f\u754c\u753b\uff0c\u5de5\u821f\u8f66\u3001\u4eba\u7269\u3001\u5e02\u8857\u3001\u57ce\u90ed\uff0c\u81ea\u6210\u4e00\u5bb6\u3002\u9664\u300a\u6e05\u660e\u4e0a\u6cb3\u56fe\u300b\u5916\uff0c\u8fd8\u6709\u300a\u897f\u6e56\u4e89\u6807\u56fe\u300b\u76f8\u4f20\u4e3a\u4ed6\u6240\u753b\u3002\u636e\u540e\u4ee3\u6587\u4eba\u8003\u8ba2\uff0c\u300a\u6e05\u660e\u4e0a\u6cb3\u56fe\u300b\u53ef\u80fd\u4f5c\u4e8e\u653f\u548c\u81f3\u5ba3\u548c\u5e74\u95f4\uff08\u2014\uff09\u3002\u90a3\u6b63\u662f\u5317\u5b8b\u7edf\u6cbb\u8005\u5728\u8986\u706d\u4e4b\u524d\u5927\u9020\u76db\u4e16\u5047\u8c61\uff0c\u4ee5\u6b64\u63a9\u76d6\u5185\u5fe7\u5916\u60a3\u7684\u65f6\u671f\u3002\u5efa\u708e\u4e4b\u540e\uff0c\u5357\u6e21\u7684\u5317\u5b8b\u9057\u6c11\u6000\u5ff5\u6545\u571f\uff0c\u5728\u4ed6\u4eec\u773c\u4e2d\uff0c\u8fd9\u5e45\u56fe\u5377\u5fc5\u6709\u5176\u7279\u6b8a\u7684\u610f\u4e49\uff0c\u6b63\u662f\u4ed6\u4eec\u56de\u9996\u6545\u571f\u3001\u68a6\u56de\u7e41\u534e\u7684\u5199\u7167\u3002\u900f\u8fc7\u6b64\u4e00\u89c2\u5ff5\u6765\u5ba1\u89c6\u8fd9\u5e45\u5343\u53e4\u540d\u4f5c\uff0c\u6211\u4eec\u4f1a\u53d1\u89c9\u90a3\u9690\u85cf\u4e8e\u7e41\u534e\u80cc\u540e\u7684\u5fc3\u60c5\u3002\u5f20\u62e9\u7aef\u753b\u7684\u300a\u6e05\u660e\u4e0a\u6cb3\u56fe\u300b\uff0c\u7ee2\u672c\uff0c\u8bbe\u8272\uff0c\u7eb5\u5398\u7c73\uff0c\u6a2a\u5398\u7c73\u3002\u4f5c\u54c1\u63cf\u7ed8\u4e86\u90fd\u57ce\u6c74\u4eac\u4ece\u57ce\u90ca\u3001\u6c74\u6cb3\u5230\u57ce\u5185\u8857\u5e02\u7684\u7e41\u534e\u666f\u8c61\u3002\u6574\u4e2a\u957f\u5377\u72b9\u5982\u4e00\u90e8\u4e50\u7ae0\uff0c\u7531\u6162\u677f\u3001\u67d4\u677f\uff0c\u9010\u6e10\u8fdb\u5165\u5feb\u677f\u3001\u7d27\u677f\uff0c\u8f6c\u800c\u8fdb\u5165\u5c3e\u58f0\uff0c\u7559\u4e0b\u65e0\u5c3d\u7684\u56de\u5473\u3002\u753b\u9762\u5f00\u5377\u5904\u63cf\u7ed8\u7684\u662f\u6c74\u4eac\u8fd1\u90ca\u7684\u98ce\u5149\u3002\u758f\u6797\u8584\u96fe\uff0c\u519c\u820d\u7530\u7574\uff0c\u6625\u5bd2\u6599\u5ced\uff0c",
            "\u8d76\u96c6\u7684\u4e61\u4eba\u9a71\u8d76\u7740\u5f80\u57ce\u5185\u9001\u70ad\u7684\u6bdb\u9a74\u9a6e\u961f\u3002\u5728\u8fdb\u5165\u5927\u9053\u7684\u5c94\u9053\u4e0a\uff0c\u662f\u4f17\u591a\u4ec6\u4ece\u7c07\u62e5\u7684\u8f7f\u4e58\u961f\u4f0d\uff0c\u4ece\u63d2\u6ee1\u67f3\u679d\u7684\u8f7f\u9876\u53ef\u77e5\u662f\u8e0f\u9752\u626b\u5893\u5f52\u6765\u7684\u6743\u8d35\u3002\u8fd1\u5904\u5c0f\u8def\u4e0a\u9a91\u9a74\u800c\u884c\u7684\u5219\u662f\u957f\u9014\u8dcb\u6d89\u7684\u884c\u65c5\u3002\u6811\u6728\u65b0\u53d1\u7684\u679d\u82bd\uff0c\u8c03\u8282\u4e86\u753b\u9762\u7684\u8272\u5f69\u548c\u758f\u5bc6\uff0c\u8868\u73b0\u51fa\u5317\u56fd\u65e9\u6625\u7684\u6c14\u606f\u3002\u753b\u9762\u4e2d\u6bb5\u662f\u6c74\u6cb3\u4e24\u5cb8\u7684\u7e41\u534e\u60c5\u666f\u3002\u6c74\u6cb3\u662f\u5f53\u65f6\u5357\u5317\u4ea4\u901a\u7684\u5b54\u9053\uff0c\u4e5f\u662f\u5317\u5b8b\u738b\u671d\u56fd\u5bb6\u6f15\u8fd0\u7684\u67a2\u7ebd\u3002\u5de8\u5927\u7684\u6f15\u8239\uff0c\u8233\u823b\u76f8\u63a5\uff0c\u5fd9\u788c\u7684\u8239\u5de5\u4ece\u505c\u6cca\u5728\u6cb3\u8fb9\u7684\u7cae\u8239\u4e0a\u5378\u4e0b\u6c89\u91cd\u7684\u7cae\u5305\uff0c\u7ea4\u592b\u4eec\u62d6\u7740\u8239\u9006\u6c34\u884c\u9a76\uff0c\u4e00\u7247\u7e41\u5fd9\u666f\u8c61\u3002\u6c74\u6cb3\u4e0a\u6709\u4e00\u5ea7\u89c4\u6a21\u5b8f\u655e\u7684\u62f1\u6865\uff0c\u5176\u6865\u65e0\u67f1\uff0c\u4ee5\u5de8\u6728\u865a\u67b6\u800c\u6210\uff0c\u7ed3\u6784\u7cbe\u7f8e\uff0c\u5b9b\u5982\u98de\u8679\u3002\u6865\u7684\u4e24\u7aef\u7d27\u8fde\u7740\u8857\u5e02\uff0c\u8f66\u6c34\u9a6c\u9f99\uff0c\u70ed\u95f9\u975e\u51e1\u3002\u4e00\u8258\u51c6\u5907\u9a76\u8fc7\u62f1\u6865\u7684\u5de8\u5927\u6f15\u8239\u7684\u7ec6\u8282\u63cf\u7ed8\uff0c\u4e00\u76f4\u4e3a\u4eba\u4eec\u6240\u79f0\u9053\uff1a\u8239\u6b63\u5728\u653e\u5012\u6845\u6746\u51c6\u5907\u8fc7\u6865\uff0c\u8239\u592b\u4eec\u547c\u5524\u53eb\u558a\uff0c\u63e1\u7bd9\u76d8\u7d22\u3002\u6865\u4e0a\u547c\u5e94\u76f8\u63a5\uff0c\u5cb8\u8fb9\u6325\u81c2\u52a9\u9635\uff0c\u8fc7\u5f80\u884c\u4eba\u805a\u96c6\u5728\u6865\u5934\u56f4\u89c2\u3002\u800c\u90a3\u4e9b\u8d76\u811a\u3001\u63a8\u8f66\u3001\u6311\u62c5\u7684\u4eba\u4eec\uff0c\u5374\u65e0\u6687\u4e00\u987e\u3002\u8fd9\u7d27\u5f20\u7684\u4e00\u5e55\uff0c\u6210\u4e3a\u5168\u753b\u7684\u4e00\u4e2a\u9ad8\u6f6e\u3002\u540e\u6bb5\u63cf\u5199\u6c74\u4eac\u5e02\u533a\u7684\u8857\u9053\u3002\u5728\u9ad8\u5927\u96c4\u4f1f\u7684\u57ce\u697c\u4e24\u4fa7\uff0c\u8857\u9053\u7eb5\u6a2a\uff0c\u623f\u5c4b\u6797\u7acb\uff0c\u8336\u574a\u3001\u9152\u8086\u3001\u811a\u5e97\u3001\u8089\u94fa\u3001\u5bfa\u89c2\u3001\u516c\u5395\u7b49\u4e00\u5e94\u4ff1\u5168\u3002\u5404\u7c7b\u5e97\u94fa\u7ecf\u8425\u7740\u7f57\u9526\u5e03\u5339\u3001\u6c89\u6a80\u9999\u6599\u3001\u9999\u70db\u7eb8\u9a6c\u3002\u53e6\u6709\u533b\u836f\u95e8\u8bca\u3001\u5927\u8f66\u4fee\u7406\u3001\u770b\u76f8\u7b97\u547d\u3001\u4fee\u9762\u6574\u5bb9\uff0c\u5e94\u6709\u5c3d\u6709\u3002\u8857\u4e0a\u884c\u4eba\u6469\u80a9\u63a5\u8e35\uff0c\u7edc\u7ece\u4e0d\u7edd\uff0c\u58eb\u519c\u5de5\u5546\uff0c\u7537\u5973\u8001\u5c11\uff0c\u5404\u884c\u5404\u4e1a\uff0c\u65e0\u6240\u4e0d\u5907\u3002",
            "\u300a\u6e05\u660e\u4e0a\u6cb3\u56fe\u300b\u91c7\u7528\u4e86\u4e2d\u56fd\u4f20\u7edf\u7ed8\u753b\u7279\u6709\u7684\u624b\u5377\u5f62\u5f0f\uff0c\u4ee5\u79fb\u52a8\u7684\u89c6\u70b9\u6444\u53d6\u5bf9\u8c61\u3002\u5168\u56fe\u5185\u5bb9\u5e9e\u5927\uff0c\u5374\u7e41\u800c\u4e0d\u4e71\uff0c\u957f\u800c\u4e0d\u5197\uff0c\u6bb5\u843d\u6e05\u6670\uff0c\u7ed3\u6784\u4e25\u8c28\u3002\u753b\u4e2d\u4eba\u7269\u6709\u4e94\u767e\u591a\u4e2a\uff0c\u5f62\u6001\u5404\u5f02\u3002\u91c7\u7528\u517c\u5de5\u5e26\u5199\u7684\u624b\u6cd5\uff0c\u7ebf\u6761\u9052\u52b2\uff0c\u7b14\u6cd5\u7075\u52a8\uff0c\u6709\u522b\u4e8e\u4e00\u822c\u7684\u754c\u753b\u3002\u300a\u6e05\u660e\u4e0a\u6cb3\u56fe\u300b\u662f\u4e00\u5e45\u5199\u5b9e\u6027\u5f88\u5f3a\u7684\u4f5c\u54c1\uff0c\u753b\u4e2d\u6240\u7ed8\u666f\u7269\uff0c\u4e0e\u6587\u732e\u4e2d\u6709\u5173\u6c74\u4eac\u7684\u8bb0\u8f7d\u57fa\u672c\u4e00\u81f4\u3002\u300a\u4e1c\u4eac\u68a6\u534e\u5f55\u300b\u4e2d\u6240\u8bb0\u8ff0\u7684\u8857\u5df7\u3001\u9152\u697c\u3001\u996e\u98df\u679c\u5b50\uff0c\u4ee5\u53ca\u201c\u5929\u6653\u8bf8\u4eba\u5165\u5e02\u201d\u201c\u8bf8\u8272\u6742\u5356\u201d\u7b49\uff0c\u90fd\u80fd\u5728\u8fd9\u753b\u9762\u4e2d\u627e\u5230\u751f\u52a8\u7684\u56fe\u91ca\u3002\u753b\u4e2d\u7684\u201c\u5b59\u7f8a\u5e97\u201d\u201c\u811a\u5e97\u201d\u7b49\uff0c\u4e0e\u300a\u4e1c\u4eac\u68a6\u534e\u5f55\u300b\u4e2d\u6240\u8bb0\u7684\u201c\u66f9\u5a46\u5a46\u8089\u997c\u201d\u201c\u6b63\u5e97\u4e03\u5341\u4e8c\u6237\u2026\u2026\u5176\u4f59\u7686\u8c13\u4e4b\u811a\u5e97\u201d\u7b49\uff0c\u65e0\u6709\u4e0d\u7b26\u3002\u753b\u9762\u7ec6\u8282\u7684\u523b\u753b\u4e5f\u5341\u5206\u771f\u5b9e\uff0c\u5982\u6865\u6881\u7684\u7ed3\u6784\uff0c\u8f66\u9a6c\u7684\u6837\u5f0f\uff0c\u4eba\u7269\u7684\u8863\u51a0\u670d\u9970\uff0c\u5404\u884c\u5404\u4e1a\u4eba\u5458\u7684\u6d3b\u52a8\uff0c\u7686\u7ec6\u81f4\u5165\u5fae\u3002\u5b83\u4e0d\u662f\u4e00\u822c\u70ed\u95f9\u573a\u9762\u7684\u8bb0\u5f55\uff0c\u800c\u662f\u901a\u8fc7\u5bf9\u5404\u9636\u5c42\u4eba\u7269\u6d3b\u52a8\u7684\u751f\u52a8\u63cf\u7ed8\uff0c\u6df1\u523b\u5730\u63ed\u793a\u51fa\u8fd9\u4e00\u7279\u5b9a\u5386\u53f2\u65f6\u671f\u7684\u793e\u4f1a\u751f\u6d3b\u72b6\u51b5\u3002\u753b\u4e2d\u4e30\u5bcc\u7684\u5185\u5bb9\uff0c\u6709\u7740\u6587\u5b57\u65e0\u6cd5\u53d6\u4ee3\u7684\u5386\u53f2\u4ef7\u503c\uff0c\u5728\u827a\u672f\u8868\u73b0\u7684\u540c\u65f6\uff0c\u4e5f\u662f\u4e3a\u4e16\u7eaa\u4e2d\u56fd\u57ce\u5e02\u751f\u6d3b\u72b6\u51b5\u7559\u4e0b\u7684\u91cd\u8981\u5f62\u8c61\u8d44\u6599\u3002"
          ],
      textEn: [
        "During the Northern Song dynasty, commerce and handicraft industry developed rapidly. The strict boundaries between residential wards and marketplaces in city layouts were broken, producing unprecedented prosperity. Zhang Zeduan's 'Along the River During the Qingming Festival' was created against this historical backdrop — a genre painting scroll.",
        "Zhang Zeduan's painting is executed in color on silk, measuring 24.8 cm tall and 528.7 cm wide. It depicts the bustling scenes of the Northern Song capital Bianjing (Kaifeng) from the suburbs and the Bian River to the inner-city markets.",
        "This scroll is an extraordinarily vivid picture of 12th-century Chinese urban life and a portrait of the urban economy of 12th-century China."
      ],
      vocabWords: [
        {word:'汴京',pinyin:'Biàn jīng',en:'Bianjing (ancient Kaifeng)',sentence:'张择端画了汴京的繁华景象。',sentenceEn:'Zhang Zeduan depicted the splendor of Bianjing.'},
        {word:'绢本',pinyin:'juàn běn',en:'silk scroll',sentence:'这幅画为绢本设色长卷。',sentenceEn:'This painting is a colored long scroll on silk.'},
        {word:'摩肩接踵',pinyin:'mó jiān jiē zhǒng',en:'shoulder to shoulder; extremely crowded',sentence:'街上行人摩肩接踵。',sentenceEn:'Pedestrians on the street were shoulder to shoulder.'},
        {word:'络绎不绝',pinyin:'luò yì bù jué',en:'in an endless stream',sentence:'行人络绎不绝。',sentenceEn:'Pedestrians passed by in an endless stream.'},
        {word:'长卷',pinyin:'cháng juàn',en:'long scroll',sentence:'清明上河图是一幅长卷。',sentenceEn:'Along the River During Qingming Festival is a long scroll.'}
      ],
      readingTips: [
        {cn:"注意文章如何按照画卷的空间顺序介绍《清明上河图》。", en:"Note how the article follows the scroll's spatial sequence to introduce 'Along the River During the Qingming Festival.'"},
        {cn:"体会说明文中引用资料的作用。", en:"Appreciate the role of quoted sources in expository writing."}
      ],
      authorBio: {cn:"毛宁，当代作家。本文以北宋画家张择端的传世名作《清明上河图》为对象，通过对画卷内容的细致介绍和分析，展现了北宋都城汴京（开封）的繁华景象和市井生活风貌。", en:"Mao Ning is a contemporary writer. This article examines Zhang Zeduan\u2019s masterpiece Along the River During the Qingming Festival, presenting the bustling scenes and daily life of the Northern Song capital Bianjing (Kaifeng) through detailed description and analysis of the scroll\u2019s content."},
      teachingPoints: [{cn:"学习按照画卷的空间顺序（城郊\u2192汴河\u2192城内街市）介绍说明对象的方法。", en:"Learn the method of introducing a subject following the scroll\u2019s spatial sequence (suburbs \u2192 Bian River \u2192 inner-city markets)."}, {cn:"体会引用历史资料和数据增强说明文权威性和可信度的作用。", en:"Appreciate how citing historical sources and data enhances the authority and credibility of expository writing."}],
      parentTips: [{cn:"在网上搜索《清明上河图》的高清全图，和孩子一起对照课文寻找画中描述的场景。", en:"Search for a high-resolution image of \u2018Along the River\u2019 online, and find the scenes described in the text together with your child."}, {cn:"引导孩子了解北宋的社会生活和经济繁荣，拓展历史知识。", en:"Guide your child to learn about Northern Song social life and economic prosperity, expanding their historical knowledge."}]
    }
  ]
},
/* ═══════════════════════════════════════════ */
/*  UNIT 6 — 古代诗文 (品格与志趣)              */
/* ═══════════════════════════════════════════ */
{
  id: 6, title: "第六单元", titleEn: "Unit 6 — Classical Chinese: Character & Aspiration", type: "kewen",
  writing: {title:"表达要得体", titleEn:"Expression Should Be Appropriate",
    desc:"学习根据不同的对象和场合，选择恰当的表达方式和语言风格。",
    descEn:"Learn to choose appropriate expression methods and language styles for different audiences and occasions."},
  comprehensiveLearning: {title:"身边的文化遗产", titleEn:"Cultural Heritage Around Us",
    desc:"了解身边的文化遗产，增强文化遗产保护意识。",
    descEn:"Learn about cultural heritage around us; strengthen awareness of cultural heritage protection."},
  extracurricularPoetry: [
    {title:"浣溪沙（一曲新词酒一杯）", titleEn:"Huan Xi Sha (A New Song, a Cup of Wine)", author:"晏殊", authorEn:"Yan Shu"},
    {title:"采桑子（轻舟短棹西湖好）", titleEn:"Cai Sang Zi (Light Boat on West Lake)", author:"欧阳修", authorEn:"Ouyang Xiu"},
    {title:"相见欢（金陵城上西楼）", titleEn:"Xiang Jian Huan (West Tower of Jinling)", author:"朱敦儒", authorEn:"Zhu Dunru"},
    {title:"如梦令（常记溪亭日暮）", titleEn:"Ru Meng Ling (I Often Remember Sunset at the Creek Pavilion)", author:"李清照", authorEn:"Li Qingzhao"}
  ],
  lessons: [
    {
      id: 23, title: "《孟子》三章", titleEn: "Three Chapters from Mencius",
      difficulty: 5,
      author: "孟子", authorEn: "Mencius",
      isClassical: true,
      text: [
        "\u5f97\u9053\u591a\u52a9\uff0c\u5931\u9053\u5be1\u52a9\n\u5929\u65f6\u4e0d\u5982\u5730\u5229\uff0c\u5730\u5229\u4e0d\u5982\u4eba\u548c\u3002\u4e09\u91cc\u4e4b\u57ce\uff0c\u4e03\u91cc\u4e4b\u90ed\uff0c\u73af\u800c\u653b\u4e4b\u800c\u4e0d\u80dc\u3002\u592b\u73af\u800c\u653b\u4e4b\uff0c\u5fc5\u6709\u5f97\u5929\u65f6\u8005\u77e3\uff0c\u7136\u800c\u4e0d\u80dc\u8005\uff0c\u662f\u5929\u65f6\u4e0d\u5982\u5730\u5229\u4e5f\u3002\u57ce\u975e\u4e0d\u9ad8\u4e5f\uff0c\u6c60\u975e\u4e0d\u6df1\u4e5f\uff0c\u5175\u9769\u975e\u4e0d\u575a\u5229\u4e5f\uff0c\u7c73\u7cb5\u975e\u4e0d\u591a\u4e5f\uff0c\u59d4\u800c\u53bb\u4e4b\uff0c\u662f\u5730\u5229\u4e0d\u5982\u4eba\u548c\u4e5f\u3002\u6545\u66f0\uff1a\u57df\u6c11\u4e0d\u4ee5\u5c01\u7586\u4e4b\u754c\uff0c\u56fa\u56fd\u4e0d\u4ee5\u5c71\u6eaa\u4e4b\u9669\uff0c\u5a01\u5929\u4e0b\u4e0d\u4ee5\u5175\u9769\u4e4b\u5229\u3002\u5f97\u9053\u8005\u591a\u52a9\uff0c\u5931\u9053\u8005\u5be1\u52a9\u3002\u5be1\u52a9\u4e4b\u81f3\uff0c\u4eb2\u621a\u7574\u4e4b\uff1b\u591a\u52a9\u4e4b\u81f3\uff0c\u5929\u4e0b\u987a\u4e4b\u3002\u4ee5\u5929\u4e0b\u4e4b\u6240\u987a\uff0c\u653b\u4eb2\u621a\u4e4b\u6240\u7574\uff0c\u6545\u541b\u5b50\u6709\u4e0d\u6218\uff0c\u6218\u5fc5\u80dc\u77e3\u3002",
        "\u5bcc\u8d35\u4e0d\u80fd\u6deb\n\u666f\u6625\u66f0\uff1a\u201c\u516c\u5b59\u884d\u4e4b\u4e3a\u5927\u4e08\u592b\u4e5f\uff0c\u4e00\u6012\u800c\u8bf8\u4faf\u60e7\uff0c\u5b89\u5c45\u800c\u5929\u4e0b\u606f\u3002\u201d\u5b5f\u5b50\u66f0\uff1a\u201c\u662f\u7109\u5f97\u4e3a\u5927\u4e08\u592b\u4e4e\uff1f\u5b50\u672a\u5b66\u793c\u4e4e\uff1f\u4e08\u592b\u4e4b\u51a0\u4e5f\uff0c\u7236\u547d\u4e4b\uff1b\u5973\u5b50\u4e4b\u5ac1\u4e5f\uff0c\u6bcd\u547d\u4e4b\uff0c\u5f80\u9001\u4e4b\u95e8\uff0c\u6212\u4e4b\u66f0\uff1a\u2018\u5f80\u4e4b\u5973\u5bb6\uff0c\u5fc5\u656c\u5fc5\u621d\uff0c\u65e0\u8fdd\u592b\u5b50\uff01\u2019\u4ee5\u987a\u4e3a\u6b63\u8005\uff0c\u59be\u5987\u4e4b\u9053\u4e5f\u3002\u5c45\u5929\u4e0b\u4e4b\u5e7f\u5c45\uff0c\u7acb\u5929\u4e0b\u4e4b\u6b63\u4f4d\uff0c\u884c\u5929\u4e0b\u4e4b\u5927\u9053\u3002\u5f97\u5fd7\uff0c\u4e0e\u6c11\u7531\u4e4b\uff1b\u4e0d\u5f97\u5fd7\uff0c\u72ec\u884c\u5176\u9053\u3002\u5bcc\u8d35\u4e0d\u80fd\u6deb\uff0c\u8d2b\u8d31\u4e0d\u80fd\u79fb\uff0c\u5a01\u6b66\u4e0d\u80fd\u5c48\u3002\u6b64\u4e4b\u8c13\u5927\u4e08\u592b\u3002\u201d",
        "\u751f\u4e8e\u5fe7\u60a3\uff0c\u6b7b\u4e8e\u5b89\u4e50\n\u821c\u53d1\u4e8e\u754f\u4ea9\u4e4b\u4e2d\uff0c\u5085\u8bf4\u4e3e\u4e8e\u7248\u7b51\u4e4b\u95f4\uff0c\u80f6\u9b2c\u4e3e\u4e8e\u9c7c\u76d0\u4e4b\u4e2d\uff0c\u7ba1\u5937\u543e\u4e3e\u4e8e\u58eb\uff0c\u5b59\u53d4\u6556\u4e3e\u4e8e\u6d77\uff0c\u767e\u91cc\u5960\u4e3e\u4e8e\u5e02\u3002\u6545\u5929\u5c06\u964d\u5927\u4efb\u4e8e\u662f\u4eba\u4e5f\uff0c\u5fc5\u5148\u82e6\u5176\u5fc3\u5fd7\uff0c\u52b3\u5176\u7b4b\u9aa8\uff0c\u997a\u5176\u4f53\u80a4\uff0c\u7a7a\u4e4f\u5176\u8eab\uff0c\u884c\u62c2\u4e71\u5176\u6240\u4e3a\uff0c\u6240\u4ee5\u52a8\u5fc3\u5fcd\u6027\uff0c\u66fe\u76ca\u5176\u6240\u4e0d\u80fd\u3002\u4eba\u6052\u8fc7\uff0c\u7136\u540e\u80fd\u6539\uff1b\u56f0\u4e8e\u5fc3\uff0c\u8861\u4e8e\u8651\uff0c\u800c\u540e\u4f5c\uff1b\u5f81\u4e8e\u8272\uff0c\u53d1\u4e8e\u58f0\uff0c\u800c\u540e\u55bb\u3002\u5165\u5219\u65e0\u6cd5\u5bb6\u62c2\u58eb\uff0c\u51fa\u5219\u65e0\u654c\u56fd\u5916\u60a3\u8005\uff0c\u56fd\u6052\u4ea1\u3002\u7136\u540e\u77e5\u751f\u4e8e\u5fe7\u60a3\uff0c\u800c\u6b7b\u4e8e\u5b89\u4e50\u4e5f\u3002"
      ],
      textEn: [
        "Those Who Follow the Way Receive Much Help\nFavorable weather is not as good as advantageous terrain, and advantageous terrain is not as good as unity among people. A city of three li with outer walls of seven li may be besieged and attacked yet not taken. To besiege and attack it, one must have had favorable weather; yet if it is not taken, this shows that favorable weather is inferior to advantageous terrain. If the walls are not insufficiently high, the moats not insufficiently deep, the weapons not insufficiently sharp, the provisions not insufficiently ample, and yet the defenders abandon the city and flee—this shows that advantageous terrain is inferior to unity among people. Therefore it is said: Keeping the people within borders does not depend on boundary lines; securing the state does not depend on mountain barriers; commanding the world does not depend on military might. He who follows the Way receives much help; he who loses the Way receives little help. When help is at its least, even one’s own kin turn against him. When help is at its greatest, the whole world submits. When the whole world submits and one attacks those whose own kin have turned against them—therefore a gentleman either does not fight, or if he fights, he will certainly win.",
        "Wealth and Rank Cannot Lead Astray\nJing Chun said: “Gongsun Yan and Zhang Yi—are they not true great men? When they are angry, the feudal lords tremble with fear; when they are at peace, the world is at rest.” Mencius said: “How can they be considered great men? Have you not studied ritual? When a man comes of age, his father gives him instructions. When a woman is to be married, her mother gives her instructions, seeing her off at the door and admonishing her: ‘When you go to your husband’s family, you must be respectful and cautious; never disobey your husband!’ To regard obedience as the standard—that is the way of concubines and wives. To dwell in the widest dwelling in the world, to stand in the most correct position in the world, to walk the greatest path in the world. When one achieves one’s ambitions, to walk the path together with the people; when one does not, to walk the path alone. Wealth and rank cannot lead one astray, poverty and lowliness cannot make one waver, force and might cannot make one submit. This is what I call a great man.”",
        "Born in Sorrow, Perish in Comfort\nShun rose from the fields, Fu Yue was raised from among builders, Jiao Ge was raised from the fish and salt trade, Guan Yiwu was raised from imprisonment, Sun Shu’ao was raised from the sea, and Baili Xi was raised from the marketplace. Thus when Heaven is about to confer a great responsibility upon a person, it first bitter his heart and mind, toils his sinews and bones, starves his body, impoverishes his person, and frustrates his every undertaking. By these means it stimulates his heart, toughens his nature, and enhances his capabilities. A person must constantly make mistakes before he can correct them; must be troubled in mind and ponder deeply before he can act; must show it in his face and express it in his voice before others can understand. If within a state there are no principled families and worthy counselors, and outside there are no rival states and foreign threats, that state will inevitably perish. Only then do we understand: one is born in sorrow and perishes in comfort."
      ],
      vocabWords: [
        {word:'天时',pinyin:'tiān shí',en:'favorable timing',sentence:'天时不如地利，地利不如人和。',sentenceEn:'Favorable timing is not as good as geographical advantage; geographical advantage is not as good as unity among people.'},
        {word:'畔',pinyin:'pàn',en:'to betray (same as 叛)',sentence:'寡助之至，亲戚畔之。',sentenceEn:'When one has minimal support, even relatives betray him.'},
        {word:'大丈夫',pinyin:'dà zhàng fu',en:'a man of noble character',sentence:'富贵不能淫，贫贱不能移，威武不能屈。此之谓大丈夫。',sentenceEn:'Wealth cannot corrupt him, poverty cannot sway him, power cannot subdue him. This is what it means to be a man of noble character.'},
        {word:'畎亩',pinyin:'quǎn mǔ',en:'fields; farmland',sentence:'舜发于畎亩之中。',sentenceEn:'Shun rose from the fields.'},
        {word:'曾益',pinyin:'zēng yì',en:'to increase (曾 same as 增)',sentence:'曾益其所不能。',sentenceEn:'To increase what he could not do before.'}
      ],
      grammarPoints: [
        {point:'排比论证',pointEn:'pái bǐ lùn zhèng',example:'parallel argumentation',exampleEn:'舜发于畎亩之中，傅说举于版筑之间，胶鬲举于鱼盐之中。',explanation:'Shun rose from the fields, Fu Yue was raised from wall-building, Jiao Ge was raised from fish and salt trading.',explanationEn:'用一连串排比句列举多个事例来论证观点，气势恢宏，说服力强。'},
        {point:'论证方法',pointEn:'lùn zhèng fāng fǎ',example:'methods of argumentation',exampleEn:'先从反面论证，再从正面论证。',explanation:'Arguing from the negative side first, then from the positive side.',explanationEn:'先说如果没有忧患会导致灭亡，再说正是忧患使人生存，正反对比增强论证力度。'}
      ],
      thinkExplore: [
        {cn:"结合课文内容说说你对\u201c得道者多助，失道者寡助\u201d\u201c生于忧患而死于安乐\u201d的理解。", en:"Based on the text, explain your understanding of 'those with the Way gain many allies' and 'adversity nurtures, comfort kills.'"},
        {cn:"孟子为什么认为公孙衍、张仪不配称为大丈夫？什么样的人才是真正的大丈夫？", en:"Why does Mencius think Gongsun Yan and Zhang Yi are not worthy of being called great men? What kind of person truly qualifies?"},
        {cn:"体会《孟子》大量使用排比句的雄辩气势。", en:"Appreciate the powerful rhetorical force of Mencius' extensive use of parallelism."}
      ],
      authorBio: {cn:"孟子（约前372\u2014前289），名轲，字子舆，邹国（今山东邹城）人。战国时期著名思想家、教育家，儒学代表人物之一，被尊称为\u201c亚圣\u201d。其言论和思想记录在《孟子》一书中，主张\u201c仁政\u201d\u201c民贵君轻\u201d等。", en:"Mencius (c. 372\u2013289 BCE), named Ke, courtesy name Ziyu, from the State of Zou (modern Zoucheng, Shandong). A celebrated thinker and educator of the Warring States period, he was a key Confucian figure, honored as the \u2018Second Sage.\u2019 His thought is recorded in the book Mencius, advocating \u2018benevolent governance\u2019 and \u2018the people are paramount.\u2019"},
      teachingPoints: [{cn:"掌握孟子的论证艺术：大量使用排比句和层递论证，形成气势磅礴的雄辩风格。理解三章各自的核心论点。", en:"Master Mencius\u2019 argumentation art: extensive use of parallelism and progressive reasoning creates a powerful rhetorical style. Understand each chapter\u2019s core argument."}, {cn:"积累经典名句：\u201c天时不如地利，地利不如人和\u201d\u201c富贵不能淫，贫贱不能移，威武不能屈\u201d\u201c生于忧患而死于安乐\u201d。", en:"Accumulate classic quotations: \u2018favorable weather < favorable terrain < unity,\u2019 \u2018wealth cannot corrupt, poverty cannot sway, power cannot bend,\u2019 \u2018adversity nurtures, comfort kills.\u2019"}],
      parentTips: [{cn:"和孩子讨论\u201c大丈夫\u201d的标准，结合现实生活谈谈道德勇气的含义。", en:"Discuss the standards of a \u2018great man\u2019 with your child; connect it to moral courage in real life."}, {cn:"帮助孩子背诵三章原文，这是中考必考篇目。", en:"Help your child memorize all three chapters\u2014these are required texts for the high school entrance exam."}]
    },
    {
      id: 24, title: "愚公移山", titleEn: "The Foolish Old Man Removes the Mountains",
      difficulty: 5,
      author: "《列子》", authorEn: "Liezi",
      isClassical: true,
      text: [
        "\u592a\u884c\u3001\u738b\u5c4b\u4e8c\u5c71\uff0c\u65b9\u4e03\u767e\u91cc\uff0c\u9ad8\u4e07\u4ede\uff0c\u672c\u5728\u5180\u5dde\u4e4b\u5357\uff0c\u6cb3\u9633\u4e4b\u5317\u3002",
        "\u5317\u5c71\u611a\u516c\u8005\uff0c\u5e74\u4e14\u4e5d\u5341\uff0c\u9762\u5c71\u800c\u5c45\u3002\u60e9\u5c71\u5317\u4e4b\u585e\uff0c\u51fa\u5165\u4e4b\u8fe2\u4e5f\uff0c\u805a\u5ba4\u800c\u8c0b\u66f0\uff1a\u201c\u543e\u4e0e\u6c5d\u6bd5\u529b\u5e73\u9669\uff0c\u6307\u901a\u8c6b\u5357\uff0c\u8fbe\u4e8e\u6c49\u9634\uff0c\u53ef\u4e4e\uff1f\u201d\u6742\u7136\u76f8\u8bb8\u3002\u5176\u59bb\u732e\u7591\u66f0\uff1a\u201c\u4ee5\u541b\u4e4b\u529b\uff0c\u66fe\u4e0d\u80fd\u635f\u9b41\u7236\u4e4b\u4e18\uff0c\u5982\u592a\u884c\u3001\u738b\u5c4b\u4f55\uff1f\u4e14\u7109\u7f6e\u571f\u77f3\uff1f\u201d\u6742\u66f0\uff1a\u201c\u6295\u8bf8\u6e24\u6d77\u4e4b\u5c3e\uff0c\u9690\u571f\u4e4b\u5317\u3002\u201d\u9042\u7387\u5b50\u5b59\u8377\u62c5\u8005\u4e09\u592b\uff0c\u53e9\u77f3\u57a6\u58e4\uff0c\u7b95\u755c\u8fd0\u4e8e\u6e24\u6d77\u4e4b\u5c3e\u3002\u90bb\u4eba\u4eac\u57ce\u6c0f\u4e4b\u5b40\u59bb\u6709\u9057\u7537\uff0c\u59cb\u9f87\uff0c\u8df3\u5f80\u52a9\u4e4b\u3002\u5bd2\u6691\u6613\u8282\uff0c\u59cb\u4e00\u53cd\u7109\u3002",
        "\u6cb3\u66f2\u667a\u53df\u7b11\u800c\u6b62\u4e4b\u66f0\uff1a\u201c\u751a\u77e3\uff0c\u6c5d\u4e4b\u4e0d\u60e0\uff01\u4ee5\u6b8b\u5e74\u4f59\u529b\uff0c\u66fe\u4e0d\u80fd\u6bc1\u5c71\u4e4b\u4e00\u6bdb\uff0c\u5176\u5982\u571f\u77f3\u4f55\uff1f\u201d\u5317\u5c71\u611a\u516c\u957f\u606f\u66f0\uff1a\u201c\u6c5d\u5fc3\u4e4b\u56fa\uff0c\u56fa\u4e0d\u53ef\u5f7b\uff0c\u66fe\u4e0d\u82e5\u5b40\u59bb\u5f31\u5b50\u3002\u867d\u6211\u4e4b\u6b7b\uff0c\u6709\u5b50\u5b58\u7109\uff1b\u5b50\u53c8\u751f\u5b59\uff0c\u5b59\u53c8\u751f\u5b50\uff1b\u5b50\u53c8\u6709\u5b50\uff0c\u5b50\u53c8\u6709\u5b59\uff1b\u5b50\u5b50\u5b59\u5b59\u65e0\u7a77\u5339\u4e5f\uff0c\u800c\u5c71\u4e0d\u52a0\u589e\uff0c\u4f55\u82e6\u800c\u4e0d\u5e73\uff1f\u201d\u6cb3\u66f2\u667a\u53df\u4ea1\u4ee5\u5e94\u3002",
        "\u64cd\u86c7\u4e4b\u795e\u95fb\u4e4b\uff0c\u60e7\u5176\u4e0d\u5df2\u4e5f\uff0c\u544a\u4e4b\u4e8e\u5e1d\u3002\u5e1d\u611f\u5176\u8bda\uff0c\u547d\u5938\u5a25\u6c0f\u4e8c\u5b50\u8d1f\u4e8c\u5c71\uff0c\u4e00\u53d8\u6714\u4e1c\uff0c\u4e00\u53d9\u96cd\u5357\u3002\u81ea\u6b64\uff0c\u5180\u4e4b\u5357\uff0c\u6c49\u4e4b\u9634\uff0c\u65e0\u9647\u65ad\u7109\u3002"
      ],
      textEn: [
        "The Taihang and Wangwu mountains, seven hundred li across and ten thousand ren high, originally stood south of Jizhou and north of Heyang.",
        "The Foolish Old Man of the North Mountain, nearly ninety years old, lived facing the mountains. Frustrated by the mountains blocking the road north, making coming and going difficult, he gathered his family and discussed: “Let us put forth all our strength to level the hazardous terrain, opening a path through to the south of Yu Province, reaching the Han River—shall we?” They agreed enthusiastically. His wife raised a doubt: “With your strength, you cannot even diminish Kuifu Hill. What can you do to Taihang and Wangwu? And where will you put all the earth and stones?” They said: “We shall cast them into the tail of the Bohai Sea and the north of Yintu.” So he led his sons and grandsons, three men capable of carrying loads, breaking rocks and digging earth, hauling it in baskets to the tail of the Bohai Sea. A neighbor, the widow of the Jingcheng family, had a young son who was just losing his baby teeth—he skipped off to help them. They worked through the change of seasons, making one round trip per year.",
        "The Wise Old Man of the River Bend laughed and tried to stop him, saying: “How foolish you are! With what remains of your years and strength, you cannot destroy even a single hair of the mountain—what will you do with the earth and stones?” The Foolish Old Man of the North Mountain sighed and said: “Your mind is set so stubbornly that it cannot be penetrated—you are worse than the widow and her young child. Though I shall die, there are my sons. My sons will beget grandsons, and grandsons will beget sons. Those sons will have their own sons, and those sons their own grandsons. Sons and grandsons will continue without end, yet the mountains will not grow—why should I worry that they cannot be leveled?” The Wise Old Man of the River Bend had nothing to say in reply.",
        "The mountain spirit, a god who held serpents, heard of this and feared that the old man would never stop. He reported it to the Emperor of Heaven. The Emperor, moved by his sincerity, commanded the two sons of Kua’e to carry the two mountains on their backs—placing one in Shuodong and the other in Yongnan. From that time on, south of Ji and south of the Han River, there were no more mountain ridges blocking the way."
      ],
      vocabWords: [
        {word:'万仞',pinyin:'wàn rèn',en:'ten thousand ren (extremely tall)',sentence:'太行、王屋二山，方七百里，高万仞。',sentenceEn:'Mount Taihang and Mount Wangwu are seven hundred li across and ten thousand ren high.'},
        {word:'毕力平险',pinyin:'bì lì píng xiǎn',en:'to exert all strength to level the terrain',sentence:'吾与汝毕力平险。',sentenceEn:'I shall exert all strength together with you to level these mountains.'},
        {word:'箕畚',pinyin:'jī běn',en:'dustpan and basket',sentence:'箕畚运于渤海之尾。',sentenceEn:'Carrying earth in dustpans and baskets to the edge of the Bohai Sea.'},
        {word:'寒暑易节',pinyin:'hán shǔ yì jié',en:'cold and heat alternate between seasons',sentence:'寒暑易节，始一反焉。',sentenceEn:'After the seasons alternated between cold and heat, they made one return trip.'},
        {word:'穷匮',pinyin:'qióng kuì',en:'exhausted; depleted',sentence:'子子孙孙无穷匮也。',sentenceEn:'Descendants will continue without end.'}
      ],
      grammarPoints: [
        {point:'寓言寓意',pointEn:'yù yán yù yì',example:'moral of the fable',exampleEn:'愚公精神象征着坚持不懈、知难而进的意志。',explanation:'The spirit of the Foolish Old Man symbolizes perseverance and the will to advance despite difficulty.',explanationEn:'寓言通过简短的故事传达深刻的道理，让读者在故事情节中领悟人生哲理。'}
      ],
      thinkExplore: [
        {cn:"文中人物对愚公移山的态度各不相同。找出相关语句，简析他们的态度。", en:"Characters in the story have different attitudes toward the old man's project. Find relevant sentences and briefly analyze their attitudes."},
        {cn:"这则寓言的寓意是什么？和同学讨论交流。", en:"What is the moral of this fable? Discuss with classmates."}
      ],
      accumExtend: [
        {cn:"翻译句子，体会智叟和愚公两人对话背后的心理。", en:"Translate the sentences and appreciate the psychology behind the dialogue between the wise and foolish old men."}
      ],
      authorBio: {cn:"《列子》，旧题战国时期列御寇所著，现存版本为魏晋时人整理编纂。全书共八篇，保存了大量先秦寓言、神话和民间故事，是道家经典之一。\u201c愚公移山\u201d是其中最著名的寓言之一。", en:"Liezi, traditionally attributed to Lie Yukou of the Warring States period, was compiled in its current form during the Wei-Jin era. The eight-chapter work preserves many pre-Qin fables, myths, and folk tales, and is a Daoist classic. \u2018The Foolish Old Man Removes the Mountains\u2019 is one of its most famous fables."},
      teachingPoints: [{cn:"理解寓言的寓意：愚公精神代表持之以恒、不畏困难的毅力，\u201c智叟\u201d反而是目光短浅的表现。分析人物对话如何揭示不同的人生态度。", en:"Understand the fable\u2019s moral: the Foolish Old Man\u2019s spirit represents perseverance and fearlessness, while the \u2018Wise Old Man\u2019 is actually short-sighted. Analyze how dialogue reveals different attitudes toward life."}, {cn:"学习对比手法在叙事中的运用：愚公与智叟的对比、妻子的\u201c献疑\u201d与智叟的\u201c笑而止之\u201d的对比。", en:"Learn the use of contrast in narrative: Foolish Old Man vs. Wise Old Man; the wife\u2019s \u2018raising doubts\u2019 vs. the Wise Old Man\u2019s \u2018laughing and stopping him.\u2019"}],
      parentTips: [{cn:"和孩子讨论这个寓言的现实意义：面对困难时，是\u201c愚公\u201d的坚持更可贵，还是\u201c智叟\u201d的\u201c聪明\u201d更务实？", en:"Discuss the fable\u2019s real-life relevance: when facing difficulties, is the Foolish Old Man\u2019s persistence more admirable, or the Wise Old Man\u2019s \u2018cleverness\u2019 more practical?"}, {cn:"帮助孩子流利朗读和翻译全文，积累文言实词和虚词。", en:"Help your child read and translate the full text fluently; accumulate classical Chinese content words and function words."}]
    },
    {
      id: 25, title: "周亚夫军细柳", titleEn: "Zhou Yafu's Camp at Xiliu",
      difficulty: 5,
      author: "司马迁", authorEn: "Sima Qian",
      isSelfRead: true,
      isClassical: true,
      text: [
        "\u6587\u5e1d\u4e4b\u540e\u516d\u5e74\uff0c\u5308\u5974\u5927\u5165\u8fb9\u3002\u4e43\u4ee5\u5b97\u6b63\u5218\u793c\u4e3a\u5c06\u519b\uff0c\u519b\u9738\u4e0a\uff1b\u795d\u5179\u4faf\u5f90\u5389\u4e3a\u5c06\u519b\uff0c\u519b\u68d8\u95e8\uff1b\u4ee5\u6cb3\u5185\u5b88\u5468\u4e9a\u592b\u4e3a\u5c06\u519b\uff0c\u519b\u7ec6\u67f3\uff1a\u4ee5\u5907\u80e1\u3002",
        "\u4e0a\u81ea\u52b3\u519b\u3002\u81f3\u9738\u4e0a\u53ca\u68d8\u95e8\u519b\uff0c\u76f4\u9a70\u5165\uff0c\u5c06\u4ee5\u4e0b\u9a91\u9001\u8fce\u3002\u5df2\u800c\u4e4b\u7ec6\u67f3\u519b\uff0c\u519b\u58eb\u540f\u88ab\u7532\uff0c\u9510\u5175\u5203\uff0c\u5f40\u5f29\u6301\u6ee1\u3002\u5929\u5b50\u5148\u9a71\u81f3\uff0c\u4e0d\u5f97\u5165\u3002\u5148\u9a71\u66f0\uff1a\u201c\u5929\u5b50\u4e14\u81f3\uff01\u201d\u519b\u95e8\u90fd\u5c09\u66f0\uff1a\u201c\u5c06\u519b\u4ee4\u66f0\uff1a\u2018\u519b\u4e2d\u95fb\u5c06\u519b\u4ee4\uff0c\u4e0d\u95fb\u5929\u5b50\u4e4b\u8bcf\u3002\u2019\u201d\u5c45\u65e0\u4f55\uff0c\u4e0a\u81f3\uff0c\u53c8\u4e0d\u5f97\u5165\u3002\u4e8e\u662f\u4e0a\u4e43\u4f7f\u4f7f\u6301\u8282\u8bcf\u5c06\u519b\uff1a\u201c\u543e\u6b32\u5165\u52b3\u519b\u3002\u201d\u4e9a\u592b\u4e43\u4f20\u8a00\u5f00\u58c1\u95e8\u3002",
        "\u58c1\u95e8\u58eb\u540f\u8c13\u4ece\u5c5e\u8f66\u9a91\u66f0\uff1a\u201c\u5c06\u519b\u7ea6\uff0c\u519b\u4e2d\u4e0d\u5f97\u9a71\u9a70\u3002\u201d\u4e8e\u662f\u5929\u5b50\u4e43\u6309\u8f54\u5f90\u884c\u3002\u81f3\u8425\uff0c\u5c06\u519b\u4e9a\u592b\u6301\u5175\u63d6\u66f0\uff1a\u201c\u4ecb\u80c4\u4e4b\u58eb\u4e0d\u62dc\uff0c\u8bf7\u4ee5\u519b\u793c\u89c1\u3002\u201d\u5929\u5b50\u4e3a\u52a8\uff0c\u6539\u5bb9\u5f0f\u8f66\uff0c\u4f7f\u4eba\u79f0\u8c22\uff1a\u201c\u7687\u5e1d\u656c\u52b3\u5c06\u519b\u3002\u201d\u6210\u793c\u800c\u53bb\u3002",
        "\u65e2\u51fa\u519b\u95e8\uff0c\u7fa4\u81e3\u7686\u60ca\u3002\u6587\u5e1d\u66f0\uff1a\u201c\u55df\uff0c\u6b64\u771f\u5c06\u519b\u77e3\uff01\u66e9\u8005\u9738\u4e0a\u3001\u68d8\u95e8\u519b\uff0c\u82e5\u513f\u620f\u8033\uff01\u5176\u5c06\u56fa\u53ef\u88ad\u800c\u864f\u4e5f\u3002\u81f3\u4e8e\u4e9a\u592b\uff0c\u53ef\u5f97\u800c\u72af\u90aa\uff01\u201d\u79f0\u5584\u8005\u4e45\u4e4b\u3002"
      ],
      textEn: [
        "In the sixth year after Emperor Wen’s accession, the Xiongnu invaded the border in great force. The Emperor appointed Zong Zheng Liu Li as general, with his army at Bashang; Zhu Ci Hou Xu Li as general, with his army at Jimen; and the Governor of Henei, Zhou Yafu, as general, with his army at Xiliu—all to defend against the Hu.",
        "The Emperor personally went to inspect the armies. Upon reaching Bashang and Jimen, he drove straight in, and the generals and their subordinates came out on horseback to welcome and escort him. Then he went to the army at Xiliu: the soldiers were fully armored with sharp weapons drawn, bows strung and arrows nocked. The Emperor’s herald rode ahead but could not enter. The herald announced: “The Son of Heaven is coming!” The military gate captain said: “The general has given orders: ‘In the army, one heeds the general’s commands, not the Son of Heaven’s edicts.’” Shortly after, the Emperor arrived and again could not enter. Thereupon the Emperor sent an envoy bearing the imperial credentials to inform the general: “I wish to enter and inspect the troops.” Only then did Yafu give the order to open the camp gates.",
        "The gate soldiers told the Emperor’s attending cavalry: “The general has ordered that no galloping is permitted within the camp.” The Son of Heaven then pulled on his reins and proceeded slowly. Upon reaching the headquarters, General Yafu saluted with his weapons in hand and said: “A soldier in armor does not bow; I request permission to greet you with military honors.” The Emperor was moved by this. He changed his expression to one of solemn respect, leaned forward on the crossbar of his chariot, and sent someone to convey: “The Emperor pays his respects to the General.” The ceremony completed, he departed.",
        "After leaving the camp gates, all the courtiers were astonished. Emperor Wen said: “Ah, this is a true general! The camps at Bashang and Jimen were like children’s games! Their generals could easily be captured by surprise. But Yafu—who could challenge him!” He praised him for a long time."
      ],
      vocabWords: [
        {word:'棘门',pinyin:'jí mén',en:'Jimen (place name)',sentence:'上自劳军。至霸上及棘门军。',sentenceEn:'The emperor personally visited the armies, arriving at Bashang and Jimen camps.'},
        {word:'介胄',pinyin:'jiè zhòu',en:'wearing armor and helmet',sentence:'将军约，军中不得驱驰。天子且至，介胄之士不拜。',sentenceEn:'The general ordered: no galloping in camp. When the emperor arrives, armored soldiers do not bow.'},
        {word:'按辔徐行',pinyin:'àn pèi xú xíng',en:'to hold the reins and proceed slowly',sentence:'于是天子乃按辔徐行。',sentenceEn:'So the emperor held his reins and proceeded slowly.'},
        {word:'持兵揖',pinyin:'chí bīng yī',en:'to salute with weapons in hand',sentence:'以军礼见，持兵揖。',sentenceEn:'Meeting with military protocol, saluting with weapons in hand.'},
        {word:'嗟乎',pinyin:'jiē hū',en:'alas; oh',sentence:'嗟乎，此真将军矣！',sentenceEn:'Alas, this is a true general indeed!'}
      ],
      readingTips: [
        {cn:"注意文章如何通过对比手法（霸上、棘门与细柳）突出周亚夫的\u201c真将军\u201d形象。", en:"Note how the article uses contrast (Bashang and Jimen vs. Xiliu) to highlight Zhou Yafu's image as a 'true general.'"},
        {cn:"体会文中\u201c将军令曰\u2018军中闻将军令，不闻天子之诏\u2019\u201d的深意。", en:"Appreciate the deeper meaning of 'In the army, we obey the general's commands, not the emperor's edicts.'"}
      ],
      authorBio: {cn:"司马迁（约前145\u2014约前87），字子长，夏阳（今陕西韩城）人。西汉伟大的史学家、文学家。所著《史记》是中国第一部纪传体通史，记载了从传说中的黄帝到汉武帝太初年间的历史，被鲁迅誉为\u201c史家之绝唱，无韵之《离骚》\u201d。", en:"Sima Qian (c. 145\u2013c. 87 BCE), courtesy name Zichang, from Xiayang (modern Hancheng, Shaanxi). A great historian and writer of the Western Han dynasty. His Records of the Grand Historian is the first Chinese biographical-thematic history, covering from the legendary Yellow Emperor to Emperor Wu of Han. Lu Xun praised it as \u2018the supreme song of historians, a rhymeless Li Sao.\u2019"},
      teachingPoints: [{cn:"学习对比手法在人物刻画中的运用：通过霸上、棘门与细柳三营的对比，突出周亚夫\u201c真将军\u201d的形象。", en:"Learn the use of contrast in characterization: through comparing the Bashang, Jimen, and Xiliu camps, the image of Zhou Yafu as a \u2018true general\u2019 is highlighted."}, {cn:"体会人物对话的精妙：\u201c军中闻将军令，不闻天子之诏\u201d既写出军纪严明，又暗含汉文帝的知人善任。", en:"Appreciate the brilliance of character dialogue: \u2018In the army, we obey the general\u2019s commands\u2019 conveys both strict discipline and Emperor Wen\u2019s ability to recognize talent."}],
      parentTips: [{cn:"与孩子讨论\u201c真将军\u201d的品质：纪律严明、恪尽职守、不畏权贵。这些品质在现代生活中有什么意义？", en:"Discuss the qualities of a \u2018true general\u2019 with your child: strict discipline, faithful duty, not fearing the powerful. What do these qualities mean in modern life?"}, {cn:"帮助孩子理解《史记》的文学价值，推荐阅读其他精彩篇章。", en:"Help your child appreciate the literary value of the Records of the Grand Historian and recommend other engaging chapters."}]
    },
    {
      id: 26, title: "诗词五首", titleEn: "Five Poems and Ci",
      difficulty: 5,
      isPoetry: true,
      poems: [
        {title:"饮酒（其五）", titleEn:"Drinking Wine (V)", author:"陶渊明", authorEn:"Tao Yuanming",
         vocabWords: [
           {word:'结庐',pinyin:'jié lú',en:'to build a hut',sentence:'结庐在人境，而无车马喧。',sentenceEn:'I built my hut amid the world of men, yet hear no clamor of horse or carriage.'},
           {word:'烽火',pinyin:'fēng huǒ',en:'beacon fires (signal of war)',sentence:'烽火连三月，家书抵万金。',sentenceEn:'Beacon fires have burned for three months; a letter from home is worth ten thousand gold.'},
           {word:'折戟',pinyin:'zhé jǐ',en:'a broken halberd',sentence:'折戟沉沙铁未销。',sentenceEn:'A broken halberd sunk in sand, its iron not yet rusted away.'},
           {word:'金鳞',pinyin:'jīn lín',en:'golden scales',sentence:'甲光向日金鳞开。',sentenceEn:'Armor gleams toward the sun like golden scales.'},
           {word:'云涛',pinyin:'yún tāo',en:'cloud waves',sentence:'天接云涛连晓雾。',sentenceEn:'Sky meets cloud waves and morning mist.'}
         ],
         text:"结庐在人境，而无车马喧。\n问君何能尔？心远地自偏。\n采菊东篱下，悠然见南山。\n山气日夕佳，飞鸟相与还。\n此中有真意，欲辨已忘言。",
         textEn:"I built my hut amid the world of men, yet hear no clamor of horse or carriage.\nYou ask how this can be? A distant heart makes any place remote.\nI pick chrysanthemums by the eastern fence; serenely I gaze at the southern mountain.\nMountain air is lovely at sunset; birds fly home together.\nIn this lies a true meaning — I wish to explain, but have forgotten words."},
        {title:"春望", titleEn:"Spring Prospect", author:"杜甫", authorEn:"Du Fu",
         text:"国破山河在，城春草木深。\n感时花溅泪，恨别鸟惊心。\n烽火连三月，家书抵万金。\n白头搔更短，浑欲不胜簪。",
         textEn:"The nation is shattered, but mountains and rivers remain; the city in spring, grasses and trees grow thick.\nMoved by the times, flowers draw tears; hating separation, birds alarm the heart.\nBeacon fires have burned for three months; a letter from home is worth ten thousand gold.\nWhite hair, scratched even shorter, can barely hold a hairpin."},
        {title:"雁门太守行", titleEn:"Ballad of the Governor of Yanmen", author:"李贺", authorEn:"Li He",
         text:"黑云压城城欲摧，甲光向日金鳞开。\n角声满天秋色里，塞上燕脂凝夜紫。\n半卷红旗临易水，霜重鼓寒声不起。\n报君黄金台上意，提携玉龙为君死。",
         textEn:"Black clouds press upon the city, about to crush it; armor gleams toward the sun like golden scales.\nHorn calls fill the sky in autumn colors; border rouge congeals into nighttime purple.\nHalf-furled red banners approach the Yi River; heavy frost, cold drums — their sound will not rise.\nTo repay the lord's kindness shown on the Golden Terrace, I draw my jade-dragon sword, willing to die for my lord."},
        {title:"赤壁", titleEn:"Red Cliff", author:"杜牧", authorEn:"Du Mu",
         text:"折戟沉沙铁未销，自将磨洗认前朝。\n东风不与周郎便，铜雀春深锁二乔。",
         textEn:"A broken halberd sunk in sand, its iron not yet rusted away — I polish and wash it, recognizing a relic of a former dynasty.\nHad the east wind not favored young Commander Zhou, the Bronze Sparrow Tower's spring would have locked away the two Qiao beauties."},
        {title:"渔家傲（天接云涛连晓雾）", titleEn:"Yu Jia Ao (Sky Meets Cloud Waves)", author:"李清照", authorEn:"Li Qingzhao",
         text:"天接云涛连晓雾，星河欲转千帆舞。\n仿佛梦魂归帝所，闻天语，殷勤问我归何处。\n我报路长嗟日暮，学诗谩有惊人句。\n九万里风鹏正举，风休住，蓬舟吹取三山去！",
         textEn:"Sky meets cloud waves and morning mist; the Milky Way seems to turn as a thousand sails dance.\nAs if in a dream, my soul returns to the Heavenly Palace; I hear heaven's voice, earnestly asking where I wish to go.\nI reply: the road is long and I sigh that day grows late; studying poetry, I have only startling verses to show.\nThe roc rises on ninety-thousand-li winds — wind, do not stop! Blow my reed boat to the three sacred isles!"}
      ],
      text: [
        "饮酒（其五）\n[东晋] 陶渊明\n结庐在人境，而无车马喧。\n问君何能尔？心远地自偏。\n采菊东篱下，悠然见南山。\n山气日夕佳，飞鸟相与还。\n此中有真意，欲辨已忘言。",
        "春望\n[唐] 杜甫\n国破山河在，城春草木深。\n感时花溅泪，恨别鸟惊心。\n烽火连三月，家书抵万金。\n白头搔更短，浑欲不胜簪。",
        "雁门太守行\n[唐] 李贺\n黑云压城城欲摧，甲光向日金鳞开。\n角声满天秋色里，塞上燕脂凝夜紫。\n半卷红旗临易水，霜重鼓寒声不起。\n报君黄金台上意，提携玉龙为君死。",
        "赤壁\n[唐] 杜牧\n折戟沉沙铁未销，自将磨洗认前朝。\n东风不与周郎便，铜雀春深锁二乔。",
        "渔家傲（天接云涛连晓雾）\n[宋] 李清照\n天接云涛连晓雾，星河欲转千帆舞。\n仿佛梦魂归帝所，闻天语，殷勤问我归何处。\n我报路长嗟日暮，学诗谩有惊人句。\n九万里风鹏正举，风休住，蓬舟吹取三山去！"
      ],
      textEn: [
        "Drinking Wine (V)\n[Eastern Jin] Tao Yuanming\nI built my hut amid the world of men, yet hear no clamor.\nYou ask how? A distant heart makes any place remote.\nPicking chrysanthemums by the eastern fence, serenely I see the southern mountain.\nMountain air is lovely at dusk; birds fly home together.\nIn this lies true meaning — I wish to explain but have forgotten words.",
        "Spring Prospect\n[Tang] Du Fu\nThe nation shattered, mountains and rivers remain; city in spring, grasses grow thick.\nMoved by the times, flowers draw tears; hating separation, birds alarm the heart.\nBeacon fires burn three months; a letter from home: ten thousand gold.\nWhite hair scratched shorter still, can barely hold a hairpin.",
        "Ballad of the Governor of Yanmen\n[Tang] Li He\nBlack clouds press the city, about to crush it; armor gleams like golden scales in the sun.\nHorns fill the autumn sky; border rouge congeals to purple night.\nHalf-furled red flags near the Yi River; heavy frost, cold drums muffled.\nTo repay my lord's Golden Terrace kindness, I draw my jade-dragon sword to die.",
        "Red Cliff\n[Tang] Du Mu\nA broken halberd in the sand, iron yet unrusted — polished, I recognize a former dynasty.\nHad east wind not favored Zhou Yu, Bronze Sparrow's spring would lock the two Qiaos.",
        "Yu Jia Ao\n[Song] Li Qingzhao\nSky meets cloud waves and dawn mist; the Milky Way turns, a thousand sails dance.\nDreaming, my soul returns to Heaven; heaven's voice asks where I wish to go.\nThe road is long, I sigh at dusk; my poems have only startling lines.\nThe roc rises on ninety-thousand-li winds — wind, don't stop! Blow my boat to the three isles!"
      ],
      thinkExplore: [
        {cn:"体会五首诗词不同的风格和主题。比较陶渊明的闲适与杜甫的忧国忧民。", en:"Appreciate the different styles and themes of the five poems. Compare Tao Yuanming's tranquility with Du Fu's concern for nation and people."},
        {cn:"赏析\u201c采菊东篱下，悠然见南山\u201d的意境之美。", en:"Appreciate the artistic beauty of 'Picking chrysanthemums by the eastern fence, serenely I see the southern mountain.'"},
        {cn:"李清照的词表达了怎样的情感和志向？", en:"What emotions and aspirations does Li Qingzhao's ci express?"}
      ],
      authorBio: {cn:"本课收录五位跨时代诗人词人的经典作品：陶渊明（约365\u2014427），东晋田园诗人，\u201c隐逸诗人之宗\u201d；杜甫（712\u2014770），唐代\u201c诗圣\u201d，忧国忧民；李贺（790\u2014816），唐代\u201c诗鬼\u201d，想象奇特；杜牧（803\u2014852），晚唐杰出诗人，与李商隐并称\u201c小李杜\u201d；李清照（1084\u2014约1155），宋代杰出女词人，\u201c婉约派\u201d代表。", en:"This lesson features five poets/ci writers across eras: Tao Yuanming (c. 365\u2013427), Eastern Jin pastoral poet, \u2018patriarch of recluse poetry\u2019; Du Fu (712\u2013770), the Tang \u2018Poet Sage,\u2019 concerned with nation and people; Li He (790\u2013816), the Tang \u2018Poet Ghost,\u2019 known for wild imagination; Du Mu (803\u2013852), late Tang poet paired with Li Shangyin as \u2018Lesser Li and Du\u2019; Li Qingzhao (1084\u2013c. 1155), outstanding Song female ci writer, representative of the \u2018Graceful and Restrained\u2019 school."},
      teachingPoints: [{cn:"比较不同朝代、不同风格的诗词：陶渊明的恬淡超然、杜甫的沉郁忧国、李贺的奇崛瑰丽、杜牧的咏史深思、李清照的豪放壮志。", en:"Compare poems/ci across dynasties and styles: Tao Yuanming\u2019s serene transcendence, Du Fu\u2019s somber patriotism, Li He\u2019s bizarre magnificence, Du Mu\u2019s reflective history, and Li Qingzhao\u2019s bold ambition."}, {cn:"理解\u201c词\u201d作为一种独特诗歌形式的特点（长短句、依曲填词），比较诗与词在形式和表现力上的差异。", en:"Understand the ci form\u2019s features (irregular line lengths, composed to musical tunes) and compare the formal and expressive differences between shi poetry and ci."}],
      parentTips: [{cn:"和孩子一起朗读五首诗词，感受不同的韵律和意境，讨论最喜欢哪位诗人的风格。", en:"Read the five poems/ci aloud with your child, feel different rhythms and moods, and discuss which poet\u2019s style they prefer."}, {cn:"引导孩子了解各诗词的写作背景，体会诗人的人生际遇如何影响创作。", en:"Guide your child to learn each work\u2019s background and appreciate how the poet\u2019s life experiences influenced their writing."}]
    }
  ]
}
] /* end units */
}; /* end TB_G8S1 */
