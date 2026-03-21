/**
 * 字道 ZiDao — 部编版一年级语文下册 教材数据
 * Grade 1 Semester 2 Textbook Data (PEP Edition)
 * Based on: 义务教育教科书 语文 一年级下册 (2016)
 */
var TB_G1S2 = {
grade: 1, semester: 2,
totalRecogChars: 400,
totalWriteChars: 200,
units: [
/* ═══════════════════════════════════════════ */
/*  UNIT 1 — 识字（一）Literacy 1             */
/* ═══════════════════════════════════════════ */
{
  id: 1, title: "识字（一）", titleEn: "Literacy (I)",
  type: "shizi",
  lessons: [
    {id:1,title:"春夏秋冬",titleEn:"Spring, Summer, Autumn, Winter",
      difficulty: 1,
      text:["春风  夏雨  秋霜  冬雪","春风吹  夏雨落  秋霜降  冬雪飘","青草  红花  游鱼  飞鸟","池草青  山花红  鱼出水  鸟入林"],
      textEn:["Spring wind  Summer rain  Autumn frost  Winter snow","Spring wind blows  Summer rain falls  Autumn frost descends  Winter snow drifts","Green grass  Red flowers  Swimming fish  Flying birds","Pond grass is green  Mountain flowers are red  Fish leap from water  Birds enter the forest"],
      textPinyin:["chūn fēng  xià yǔ  qiū shuāng  dōng xuě","chūn fēng chuī  xià yǔ luò  qiū shuāng jiàng  dōng xuě piāo","qīng cǎo  hóng huā  yóu yú  fēi niǎo","chí cǎo qīng  shān huā hóng  yú chū shuǐ  niǎo rù lín"],
      recognizeChars:["霜","吹","落","降","飘","游","池","入"],
      writeChars:["春","冬","风","雪","花","飞","入"],
      vocabWords: [
        {word:'春风',pinyin:'chūn fēng',en:'spring breeze',sentence:'春风吹。',sentenceEn:'Spring breeze blows.'},
        {word:'夏雨',pinyin:'xià yǔ',en:'summer rain',sentence:'夏雨落。',sentenceEn:'Summer rain falls.'},
        {word:'秋霜',pinyin:'qiū shuāng',en:'autumn frost',sentence:'秋霜降。',sentenceEn:'Autumn frost descends.'},
        {word:'冬雪',pinyin:'dōng xuě',en:'winter snow',sentence:'冬雪飘。',sentenceEn:'Winter snow drifts.'},
        {word:'青草',pinyin:'qīng cǎo',en:'green grass',sentence:'池草青。',sentenceEn:'The pond grass is green.'},
        {word:'红花',pinyin:'hóng huā',en:'red flowers',sentence:'山花红。',sentenceEn:'Mountain flowers are red.'}
      ],
      footnotes: [
        {term:"\u6625\u98ce", termEn:"spring breeze", definition:"ch\u016bn f\u0113ng\uff0cspring breeze\u3002", definitionEn:"spring breeze"},
        {term:"\u590f\u96e8", termEn:"summer rain", definition:"xi\u00e0 y\u01d4\uff0csummer rain\u3002", definitionEn:"summer rain"},
        {term:"\u79cb\u971c", termEn:"autumn frost", definition:"qi\u016b shu\u0101ng\uff0cautumn frost\u3002", definitionEn:"autumn frost"},
        {term:"\u51ac\u96ea", termEn:"winter snow", definition:"d\u014dng xu\u011b\uff0cwinter snow\u3002", definitionEn:"winter snow"},
        {term:"\u9752\u8349", termEn:"green grass", definition:"q\u012bng c\u01ceo\uff0cgreen grass\u3002", definitionEn:"green grass"},
        {term:"\u7ea2\u82b1", termEn:"red flowers", definition:"h\u00f3ng hu\u0101\uff0cred flowers\u3002", definitionEn:"red flowers"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读课文，背诵课文",en:"Read aloud and recite"},
        {type:"learn",cn:"看图说话：说说你喜欢哪个季节",en:"Look at the picture: Which season do you like?"}
      ],
      teachingPoints:[
        {cn:"认识四季的代表事物：风、雨、霜、雪",en:"Learn representative elements of four seasons: wind, rain, frost, snow"},
        {cn:"学习动词搭配：吹、落、降、飘",en:"Learn verb collocations: blow, fall, descend, drift"}
      ],
      parentTips:[
        {cn:"带孩子观察四季变化的自然现象",en:"Observe seasonal changes in nature with your child"},
        {cn:"用图片帮助记忆霜和雪的区别",en:"Use pictures to help distinguish frost from snow"}
      ]
    },
    {id:2,title:"姓氏歌",titleEn:"The Surname Song",
      difficulty: 1,
      text:["你姓什么？我姓李。","什么李？木子李。","他姓什么？他姓张。","什么张？弓长张。","古月胡，口天吴，","双人徐，言午许。","中国姓氏有很多，","赵、钱、孙、李，","周、吴、郑、王，","诸葛、东方，","上官、欧阳……"],
      textEn:["What is your surname? My surname is Li.","Which Li? Wood-Child Li.","What is his surname? His surname is Zhang.","Which Zhang? Bow-Long Zhang.","Ancient-Moon Hu, Mouth-Sky Wu,","Double-Person Xu, Speech-Noon Xu.","China has many surnames,","Zhao, Qian, Sun, Li,","Zhou, Wu, Zheng, Wang,","Zhuge, Dongfang,","Shangguan, Ouyang..."],
      textPinyin:["nǐ xìng shén me? wǒ xìng lǐ.","shén me lǐ? mù zǐ lǐ.","tā xìng shén me? tā xìng zhāng.","shén me zhāng? gōng cháng zhāng.","gǔ yuè hú, kǒu tiān wú,","shuāng rén xú, yán wǔ xǔ.","zhōng guó xìng shì yǒu hěn duō,","zhào, qián, sūn, lǐ,","zhōu, wú, zhèng, wáng,","zhū gě, dōng fāng,","shàng guān, ōu yáng……"],
      recognizeChars:["姓","氏","李","张","古","吴","赵","钱","孙","周","王","官"],
      writeChars:["姓","什","么","双","国","王","方"],
      vocabWords: [
        {word:'姓氏',pinyin:'xìng shì',en:'surname',sentence:'中国姓氏有很多。',sentenceEn:'China has many surnames.'},
        {word:'什么',pinyin:'shén me',en:'what',sentence:'你姓什么？',sentenceEn:'What is your surname?'},
        {word:'双人',pinyin:'shuāng rén',en:'double-person radical',sentence:'双人徐。',sentenceEn:'Double-person Xu.'},
        {word:'国',pinyin:'guó',en:'country',sentence:'中国姓氏有很多。',sentenceEn:'China has many surnames.'},
        {word:'方',pinyin:'fāng',en:'direction; square',sentence:'东方。',sentenceEn:'Dongfang (Eastern).'}
      ],
      footnotes: [
        {term:"\u59d3\u6c0f", termEn:"surname", definition:"x\u00ecng sh\u00ec\uff0csurname\u3002", definitionEn:"surname"},
        {term:"\u4ec0\u4e48", termEn:"what", definition:"sh\u00e9n me\uff0cwhat\u3002", definitionEn:"what"},
        {term:"\u53cc\u4eba", termEn:"double-person radical", definition:"shu\u0101ng r\u00e9n\uff0cdouble-person radical\u3002", definitionEn:"double-person radical"},
        {term:"\u56fd", termEn:"country", definition:"gu\u00f3\uff0ccountry\u3002", definitionEn:"country"},
        {term:"\u65b9", termEn:"direction; square", definition:"f\u0101ng\uff0cdirection; square\u3002", definitionEn:"direction; square"}
      ],
      readingTips: [
        {cn:"\u6709\u8da3\u5730\u8bfb\u4e00\u8bfb\uff0c\u8fb9\u8bfb\u8fb9\u62cd\u624b\u6253\u8282\u62cd\u3002\u8bd5\u7740\u80cc\u8bf5\u4e0b\u6765\u3002", en:"Read it aloud in a fun way, clapping along to the rhythm. Try to memorize it."},
        {cn:"\u548c\u7238\u7238\u5988\u5988\u4e00\u8d77\u8bfb\uff0c\u770b\u770b\u8c01\u8bfb\u5f97\u66f4\u6d41\u5229\u3002", en:"Read together with your parents and see who can read more fluently."}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read aloud"},
        {type:"create",cn:"用合一合的方法记住姓氏中的字",en:"Use the combination method to remember surname characters"}
      ],
      teachingPoints:[
        {cn:"学习用部件拆分法记忆汉字：木+子=李",en:"Learn character decomposition: wood+child=Li"},
        {cn:"了解中国常见的姓氏和复姓",en:"Learn common Chinese surnames and compound surnames"}
      ],
      parentTips:[
        {cn:"告诉孩子自己姓什么，怎么拆分",en:"Tell the child your surname and how to decompose it"},
        {cn:"和孩子玩拆字游戏",en:"Play character decomposition games"}
      ]
    },
    {id:3,title:"小青蛙",titleEn:"The Little Frog",
      difficulty: 1,
      text:["河水清清天气晴，","小小青蛙大眼睛。","保护禾苗吃害虫，","做了不少好事情。","请你爱护小青蛙，","好让禾苗不生病。"],
      textEn:["The river is clear and the weather is fine,","A little frog with big eyes.","It protects the crops by eating pests,","Doing many good deeds.","Please take care of the little frog,","So the crops won't get sick."],
      textPinyin:["hé shuǐ qīng qīng tiān qì qíng,","xiǎo xiǎo qīng wā dà yǎn jīng.","bǎo hù hé miáo chī hài chóng,","zuò le bù shǎo hǎo shì qíng.","qǐng nǐ ài hù xiǎo qīng wā,","hǎo ràng hé miáo bù shēng bìng."],
      recognizeChars:["清","晴","眼","睛","保","护","害","事","情","请","让","病"],
      writeChars:["青","清","气","晴","情","请","生"],
      vocabWords: [
        {word:'青蛙',pinyin:'qīng wā',en:'frog',sentence:'小小青蛙大眼睛。',sentenceEn:'A little frog with big eyes.'},
        {word:'保护',pinyin:'bǎo hù',en:'protect',sentence:'保护禾苗吃害虫。',sentenceEn:'Protect crops by eating pests.'},
        {word:'害虫',pinyin:'hài chóng',en:'pest',sentence:'青蛙吃害虫。',sentenceEn:'Frogs eat pests.'},
        {word:'事情',pinyin:'shì qíng',en:'matter; deed',sentence:'做了不少好事情。',sentenceEn:'Did many good deeds.'},
        {word:'爱护',pinyin:'ài hù',en:'cherish; protect',sentence:'请你爱护小青蛙。',sentenceEn:'Please protect the little frog.'}
      ],
      footnotes: [
        {term:"\u9752\u86d9", termEn:"frog", definition:"q\u012bng w\u0101\uff0cfrog\u3002", definitionEn:"frog"},
        {term:"\u4fdd\u62a4", termEn:"protect", definition:"b\u01ceo h\u00f9\uff0cprotect\u3002", definitionEn:"protect"},
        {term:"\u5bb3\u866b", termEn:"pest", definition:"h\u00e0i ch\u00f3ng\uff0cpest\u3002", definitionEn:"pest"},
        {term:"\u4e8b\u60c5", termEn:"matter; deed", definition:"sh\u00ec q\u00edng\uff0cmatter; deed\u3002", definitionEn:"matter; deed"},
        {term:"\u7231\u62a4", termEn:"cherish; protect", definition:"\u00e0i h\u00f9\uff0ccherish; protect\u3002", definitionEn:"cherish; protect"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读儿歌",en:"Read the children's song aloud"},
        {type:"learn",cn:"找一找：清、晴、请、情、睛有什么相同的地方？",en:"Find: what do 清,晴,请,情,睛 have in common?"}
      ],
      teachingPoints:[
        {cn:"学习形声字：青字族（清、晴、请、情、睛）",en:"Learn phonetic-semantic characters: the 青 family (清,晴,请,情,睛)"},
        {cn:"了解青蛙是益虫，保护庄稼",en:"Understand frogs are beneficial insects that protect crops"}
      ],
      parentTips:[
        {cn:"帮助孩子发现青字族的规律",en:"Help the child discover the pattern in the 青-family characters"},
        {cn:"讲讲青蛙吃害虫的故事",en:"Tell stories about frogs eating pests"}
      ]
    },
    {id:4,title:"猜字谜",titleEn:"Character Riddles",
      difficulty: 1,
      text:["左边绿，右边红，","左右相遇起凉风。","绿的喜欢及时雨，","红的最怕水来攻。","（谜底：秋）","言来互相尊重，","心至令人感动，","日出万里无云，","水到纯净透明。","（谜底：青）"],
      textEn:["Green on the left, red on the right,","When they meet, a cool wind rises.","The green one likes timely rain,","The red one most fears water's attack.","(Answer: 秋 autumn)","With speech comes mutual respect,","With heart comes something moving,","When the sun rises, clear skies for miles,","When water arrives, pure and transparent.","(Answer: 青 blue-green)"],
      textPinyin:["zuǒ biān lǜ, yòu biān hóng,","zuǒ yòu xiāng yù qǐ liáng fēng.","lǜ de xǐ huan jí shí yǔ,","hóng de zuì pà shuǐ lái gōng.","(mí dǐ: qiū)","yán lái hù xiāng zūn zhòng,","xīn zhì lìng rén gǎn dòng,","rì chū wàn lǐ wú yún,","shuǐ dào chún jìng tòu míng.","(mí dǐ: qīng)"],
      recognizeChars:["相","遇","喜","欢","怕","言","互","令","动","万","纯","净"],
      writeChars:["字","左","右","红","时","动","万"],
      vocabWords: [
        {word:'字谜',pinyin:'zì mí',en:'character riddle',sentence:'猜字谜。',sentenceEn:'Guess character riddles.'},
        {word:'相遇',pinyin:'xiāng yù',en:'meet',sentence:'左右相遇起凉风。',sentenceEn:'When they meet, a cool wind rises.'},
        {word:'尊重',pinyin:'zūn zhòng',en:'respect',sentence:'言来互相尊重。',sentenceEn:'With speech comes mutual respect.'},
        {word:'感动',pinyin:'gǎn dòng',en:'moved; touched',sentence:'心至令人感动。',sentenceEn:'With heart comes something moving.'},
        {word:'纯净',pinyin:'chún jìng',en:'pure; clean',sentence:'水到纯净透明。',sentenceEn:'Water arrives pure and clear.'}
      ],
      footnotes: [
        {term:"\u5b57\u8c1c", termEn:"character riddle", definition:"z\u00ec m\u00ed\uff0ccharacter riddle\u3002", definitionEn:"character riddle"},
        {term:"\u76f8\u9047", termEn:"meet", definition:"xi\u0101ng y\u00f9\uff0cmeet\u3002", definitionEn:"meet"},
        {term:"\u5c0a\u91cd", termEn:"respect", definition:"z\u016bn zh\u00f2ng\uff0crespect\u3002", definitionEn:"respect"},
        {term:"\u611f\u52a8", termEn:"moved; touched", definition:"g\u01cen d\u00f2ng\uff0cmoved; touched\u3002", definitionEn:"moved; touched"},
        {term:"\u7eaf\u51c0", termEn:"pure; clean", definition:"ch\u00fan j\u00ecng\uff0cpure; clean\u3002", definitionEn:"pure; clean"}
      ],
      readingTips: [
        {cn:"\u6709\u8da3\u5730\u8bfb\u4e00\u8bfb\uff0c\u8fb9\u8bfb\u8fb9\u62cd\u624b\u6253\u8282\u62cd\u3002\u8bd5\u7740\u80cc\u8bf5\u4e0b\u6765\u3002", en:"Read it aloud in a fun way, clapping along to the rhythm. Try to memorize it."},
        {cn:"\u548c\u7238\u7238\u5988\u5988\u4e00\u8d77\u8bfb\uff0c\u770b\u770b\u8c01\u8bfb\u5f97\u66f4\u6d41\u5229\u3002", en:"Read together with your parents and see who can read more fluently."}
      ],
      exercises:[
        {type:"guess",cn:"根据字谜猜汉字",en:"Guess the character from the riddle"},
        {type:"create",cn:"试着编一个简单的字谜",en:"Try to create a simple character riddle"}
      ],
      teachingPoints:[
        {cn:"学习汉字结构：禾+火=秋",en:"Learn character structure: grain+fire=autumn"},
        {cn:"字谜是学习汉字的有趣方法",en:"Character riddles are a fun way to learn characters"}
      ],
      parentTips:[
        {cn:"和孩子一起猜字谜，激发识字兴趣",en:"Solve character riddles together to inspire interest"},
        {cn:"鼓励孩子自己编字谜",en:"Encourage the child to create their own riddles"}
      ]
    }
  ],
  garden: {
    shiziStation: {
      title:"识字加油站", titleEn:"Character Booster",
      items: [{chars:["阴","晴","雾","雷","阵雨","暴雨","霜冻","雨夹雪"],category:"天气预报词语 Weather Forecast Words"}]
    },
    wordSentence: {
      title:"字词句运用", titleEn:"Words & Sentences",
      items: [
        {text:"连一连：字和拼音",textEn:"Match: characters and pinyin"},
        {text:"读一读，记一记",textEn:"Read and memorize"}
      ]
    },
    writingHints: {
      title:"书写提示", titleEn:"Writing Tips",
      rules: [
        {cn:"左右结构的字：左窄右宽",en:"Left-right structure: left narrow, right wide"},
        {cn:"注意字的间架结构要匀称",en:"Note: character proportions should be balanced"}
      ]
    },
    accumulation: {
      title:"日积月累", titleEn:"Daily Accumulation",
      content: {
        title:"春晓", titleEn:"Spring Dawn",
        difficulty: 1,
        author:"孟浩然", authorEn:"Meng Haoran",
        text:["春眠不觉晓，","处处闻啼鸟。","夜来风雨声，","花落知多少。"],
        textEn:["In spring sleep, unaware of dawn,","Everywhere, singing birds are heard.","In the night came the sound of wind and rain,","Who knows how many flowers have fallen?"],
        textPinyin:["chūn mián bù jué xiǎo,","chù chù wén tí niǎo.","yè lái fēng yǔ shēng,","huā luò zhī duō shǎo."]
      }
    },
    readWithAdults: {
      title:"和大人一起读", titleEn:"Read with Adults",
      content: {
        title:"谁和谁好", titleEn:"Who Gets Along with Whom",
        text:"谁和谁好？藤和瓜好，它们手拉手，不吵也不闹。谁和谁好？蜜蜂和花好，蜜蜂来采蜜，花儿仰脸笑。谁和谁好？白云和风好，风往哪里刮，云往哪里跑。谁和谁好？我和同学好，大家唱着歌，一起上学校。",
        textEn:"Who gets along? The vine and the melon — they hold hands, no fighting or fussing. Who gets along? The bee and the flower — the bee comes for nectar, the flower smiles up. Who gets along? The cloud and the wind — wherever the wind blows, the cloud follows. Who gets along? My classmates and I — we sing songs together on the way to school."
      }
    }
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 2 — 课文（一）Texts 1                */
/* ═══════════════════════════════════════════ */
{
  id: 2, title: "课文（一）", titleEn: "Texts (I)",
  type: "kewen",
  lessons: [
    {id:1,title:"吃水不忘挖井人",titleEn:"Drinking Water, Don't Forget the Well Digger",
      difficulty: 1,
      text:["瑞金城外有个村子叫沙洲坝。","毛主席在江西领导革命的时候，在那儿住过。","村子里没有井，吃水要到很远的地方去挑。","毛主席就带领战士和乡亲们挖了一口井，让乡亲们吃上了甜水。","解放以后，乡亲们在井旁边立了一块石碑，上面刻着：\u201C吃水不忘挖井人，时刻想念毛主席。\u201D"],
      textEn:["Outside Ruijin city there is a village called Shazhou Dam.","When Chairman Mao led the revolution in Jiangxi, he lived there.","The village had no well — people had to carry water from far away.","Chairman Mao led the soldiers and villagers to dig a well, giving everyone sweet water.","After liberation, the villagers erected a stone tablet by the well. It read: 'Drinking water, don't forget the well digger; always remember Chairman Mao.'"],
      textPinyin:["ruì jīn chéng wài yǒu gè cūn zi jiào shā zhōu bà.","máo zhǔ xí zài jiāng xī lǐng dǎo gé mìng de shí hou, zài nàr zhù guò.","cūn zi lǐ méi yǒu jǐng, chī shuǐ yào dào hěn yuǎn de dì fāng qù tiāo.","máo zhǔ xí jiù dài lǐng zhàn shì hé xiāng qīn men wā le yī kǒu jǐng, ràng xiāng qīn men chī shàng le tián shuǐ.","jiě fàng yǐ hòu, xiāng qīn men zài jǐng páng biān lì le yī kuài shí bēi, shàng miàn kè zhe: 'chī shuǐ bù wàng wā jǐng rén, shí kè xiǎng niàn máo zhǔ xí.'"],
      recognizeChars:["吃","忘","井","村","叫","毛","主","席","乡","亲","战","士"],
      writeChars:["吃","叫","主","江","住","没","以"],
      vocabWords: [
        {word:'村子',pinyin:'cūn zi',en:'village',sentence:'瑞金城外有个村子。',sentenceEn:'Outside Ruijin there is a village.'},
        {word:'井',pinyin:'jǐng',en:'well',sentence:'毛主席带领战士挖了一口井。',sentenceEn:'Chairman Mao led soldiers to dig a well.'},
        {word:'主席',pinyin:'zhǔ xí',en:'chairman',sentence:'毛主席在这里住过。',sentenceEn:'Chairman Mao lived here.'},
        {word:'忘记',pinyin:'wàng jì',en:'forget',sentence:'吃水不忘挖井人。',sentenceEn:'When drinking water, remember the well digger.'},
        {word:'战士',pinyin:'zhàn shì',en:'soldier',sentence:'带领战士挖井。',sentenceEn:'Led soldiers to dig wells.'}
      ],
      footnotes: [
        {term:"\u6751\u5b50", termEn:"village", definition:"c\u016bn zi\uff0cvillage\u3002", definitionEn:"village"},
        {term:"\u4e95", termEn:"well", definition:"j\u01d0ng\uff0cwell\u3002", definitionEn:"well"},
        {term:"\u4e3b\u5e2d", termEn:"chairman", definition:"zh\u01d4 x\u00ed\uff0cchairman\u3002", definitionEn:"chairman"},
        {term:"\u5fd8\u8bb0", termEn:"forget", definition:"w\u00e0ng j\u00ec\uff0cforget\u3002", definitionEn:"forget"},
        {term:"\u6218\u58eb", termEn:"soldier", definition:"zh\u00e0n sh\u00ec\uff0csoldier\u3002", definitionEn:"soldier"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"为什么乡亲们要立石碑？",en:"Why did the villagers erect a stone tablet?"}
      ],
      teachingPoints:[
        {cn:"理解饮水思源、感恩的道理",en:"Understand the meaning of gratitude — remembering those who helped"},
        {cn:"了解简单的历史知识",en:"Learn basic historical knowledge"}
      ],
      parentTips:[
        {cn:"给孩子讲讲感恩的故事",en:"Tell the child stories about gratitude"},
        {cn:"引导孩子说说生活中要感谢谁",en:"Guide the child to think about who to thank in daily life"}
      ]
    },
    {id:2,title:"我多想去看看",titleEn:"How I Want to Go See",
      difficulty: 1,
      text:["妈妈告诉我，","沿着弯弯的小路，","就会走出天山。","遥远的北京城，","有一座雄伟的天安门，","广场上的升旗仪式非常壮观。","我对妈妈说，","我多想去看看，我多想去看看！","爸爸告诉我，","沿着宽宽的公路，","就会走出北京。","遥远的新疆，","有美丽的天山，","雪山上盛开着洁白的雪莲。","我对爸爸说，","我多想去看看，我多想去看看！"],
      textEn:["Mama tells me,","Along the winding path,","You can walk out of the Tianshan Mountains.","In faraway Beijing,","There is a grand Tiananmen,","The flag-raising ceremony on the square is magnificent.","I say to Mama,","How I want to go see, how I want to go see!","Papa tells me,","Along the wide highway,","You can drive out of Beijing.","In faraway Xinjiang,","There are beautiful Tianshan Mountains,","Snow lotuses bloom white on the snowy peaks.","I say to Papa,","How I want to go see, how I want to go see!"],
      textPinyin:["mā ma gào su wǒ,","yán zhe wān wān de xiǎo lù,","jiù huì zǒu chū tiān shān.","yáo yuǎn de běi jīng chéng,","yǒu yī zuò xióng wěi de tiān ān mén,","guǎng chǎng shàng de shēng qí yí shì fēi cháng zhuàng guān.","wǒ duì mā ma shuō,","wǒ duō xiǎng qù kàn kan, wǒ duō xiǎng qù kàn kan!","bà ba gào su wǒ,","yán zhe kuān kuān de gōng lù,","jiù huì zǒu chū běi jīng.","yáo yuǎn de xīn jiāng,","yǒu měi lì de tiān shān,","xuě shān shàng shèng kāi zhe jié bái de xuě lián.","wǒ duì bà ba shuō,","wǒ duō xiǎng qù kàn kan, wǒ duō xiǎng qù kàn kan!"],
      recognizeChars:["想","告","诉","路","京","安","门","广","非","常","壮","观"],
      writeChars:["会","走","北","京","门","广"],
      vocabWords: [
        {word:'北京',pinyin:'běi jīng',en:'Beijing',sentence:'北京是我国的首都。',sentenceEn:'Beijing is our capital.'},
        {word:'天安门',pinyin:'tiān ān mén',en:'Tiananmen',sentence:'天安门广场的升旗仪式。',sentenceEn:'Flag-raising ceremony at Tiananmen.'},
        {word:'广场',pinyin:'guǎng chǎng',en:'square; plaza',sentence:'天安门广场多壮观。',sentenceEn:'How grand Tiananmen Square is.'},
        {word:'告诉',pinyin:'gào su',en:'tell',sentence:'妈妈告诉我。',sentenceEn:'Mom told me.'},
        {word:'壮观',pinyin:'zhuàng guān',en:'spectacular',sentence:'升旗仪式非常壮观。',sentenceEn:'The flag ceremony is spectacular.'}
      ],
      footnotes: [
        {term:"\u5317\u4eac", termEn:"Beijing", definition:"b\u011bi j\u012bng\uff0cBeijing\u3002", definitionEn:"Beijing"},
        {term:"\u5929\u5b89\u95e8", termEn:"Tiananmen", definition:"ti\u0101n \u0101n m\u00e9n\uff0cTiananmen\u3002", definitionEn:"Tiananmen"},
        {term:"\u5e7f\u573a", termEn:"square; plaza", definition:"gu\u01ceng ch\u01ceng\uff0csquare; plaza\u3002", definitionEn:"square; plaza"},
        {term:"\u544a\u8bc9", termEn:"tell", definition:"g\u00e0o su\uff0ctell\u3002", definitionEn:"tell"},
        {term:"\u58ee\u89c2", termEn:"spectacular", definition:"zhu\u00e0ng gu\u0101n\uff0cspectacular\u3002", definitionEn:"spectacular"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读课文，注意感叹句的语气",en:"Read aloud, pay attention to the tone of exclamations"},
        {type:"discuss",cn:"你最想去什么地方看看？",en:"Where do you most want to visit?"}
      ],
      teachingPoints:[
        {cn:"课文结构对称：妈妈→北京→天安门 / 爸爸→新疆→天山",en:"Symmetric structure: Mama→Beijing→Tiananmen / Papa→Xinjiang→Tianshan"},
        {cn:"感受祖国的辽阔和美丽",en:"Appreciate the vastness and beauty of the motherland"}
      ],
      parentTips:[
        {cn:"给孩子看天安门升旗、天山雪莲的图片或视频",en:"Show pictures/videos of Tiananmen flag ceremony and Tianshan snow lotus"},
        {cn:"和孩子聊聊想去的地方",en:"Talk about places you'd like to visit together"}
      ]
    },
    {id:3,title:"一个接一个",titleEn:"One After Another",
      difficulty: 1,
      text:["月夜，正玩着踩影子，","就听大人叫着：\u201C快回家睡觉！\u201D","唉，我好想再多玩一会儿啊。","不过，回家睡着了，","倒可以做各种各样的梦呢！","正做着好梦，","又听见大人叫着：\u201C该起床上学啦！\u201D","唉，要是不上学就好了。","不过，去了学校，","就能见到小伙伴，多么开心哪！","正和小伙伴们玩着跳房子，","操场上却响起了上课铃声。","唉，要是没有上课铃就好了。","不过，听老师讲故事，","也是很快乐很有趣的呀！","别的孩子也是这样吗？","也像我一样，这么想吗？"],
      textEn:["On a moonlit night, just playing shadow-stepping,","An adult calls: 'Come home and sleep!'","Sigh, I really want to play a little longer.","But once I fall asleep at home,","I can have all kinds of dreams!","Just having a nice dream,","An adult calls again: 'Time to get up for school!'","Sigh, if only I didn't have to go to school.","But at school,","I can see my friends — how happy!","Just playing hopscotch with friends,","The class bell rings on the playground.","Sigh, if only there were no class bell.","But listening to the teacher tell stories","Is also very fun and interesting!","Do other children think the same way?","Do they think like me too?"],
      textPinyin:["yuè yè, zhèng wán zhe cǎi yǐng zi,","jiù tīng dà rén jiào zhe: 'kuài huí jiā shuì jiào!'","āi, wǒ hǎo xiǎng zài duō wán yī huìr a.","bù guò, huí jiā shuì zháo le,","dào kě yǐ zuò gè zhǒng gè yàng de mèng ne!","zhèng zuò zhe hǎo mèng,","yòu tīng jiàn dà rén jiào zhe: 'gāi qǐ chuáng shàng xué la!'","āi, yào shi bù shàng xué jiù hǎo le.","bù guò, qù le xué xiào,","jiù néng jiàn dào xiǎo huǒ bàn, duō me kāi xīn na!","zhèng hé xiǎo huǒ bàn men wán zhe tiào fáng zi,","cāo chǎng shàng què xiǎng qǐ le shàng kè líng shēng.","āi, yào shi méi yǒu shàng kè líng jiù hǎo le.","bù guò, tīng lǎo shī jiǎng gù shi,","yě shì hěn kuài lè hěn yǒu qù de ya!","bié de hái zi yě shì zhè yàng ma?","yě xiàng wǒ yī yàng, zhè me xiǎng ma?"],
      recognizeChars:["接","觉","再","做","各","种","样","梦","伙","伴","却","趣"],
      writeChars:["过","各","种","样","伙","伴","这"],
      vocabWords: [
        {word:'月亮',pinyin:'yuè liang',en:'moon',sentence:'月亮已经升起来了。',sentenceEn:'The moon has already risen.'},
        {word:'各种各样',pinyin:'gè zhǒng gè yàng',en:'all kinds',sentence:'做各种各样的梦。',sentenceEn:'Dream all kinds of dreams.'},
        {word:'伙伴',pinyin:'huǒ bàn',en:'companion',sentence:'和小伙伴一起玩。',sentenceEn:'Play with friends.'},
        {word:'有趣',pinyin:'yǒu qù',en:'interesting',sentence:'上课也很有趣呀。',sentenceEn:'Classes are interesting too.'},
        {word:'操场',pinyin:'cāo chǎng',en:'playground',sentence:'在操场上玩。',sentenceEn:'Play on the playground.'}
      ],
      footnotes: [
        {term:"\u6708\u4eae", termEn:"moon", definition:"yu\u00e8 liang\uff0cmoon\u3002", definitionEn:"moon"},
        {term:"\u5404\u79cd\u5404\u6837", termEn:"all kinds", definition:"g\u00e8 zh\u01d2ng g\u00e8 y\u00e0ng\uff0call kinds\u3002", definitionEn:"all kinds"},
        {term:"\u4f19\u4f34", termEn:"companion", definition:"hu\u01d2 b\u00e0n\uff0ccompanion\u3002", definitionEn:"companion"},
        {term:"\u6709\u8da3", termEn:"interesting", definition:"y\u01d2u q\u00f9\uff0cinteresting\u3002", definitionEn:"interesting"},
        {term:"\u64cd\u573a", termEn:"playground", definition:"c\u0101o ch\u01ceng\uff0cplayground\u3002", definitionEn:"playground"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读课文，读出不同的语气",en:"Read aloud with different tones for each part"},
        {type:"discuss",cn:"你有过这样的想法吗？",en:"Have you ever had thoughts like these?"}
      ],
      teachingPoints:[
        {cn:"学习转折句式：虽然...不过...",en:"Learn the turning pattern: although... but..."},
        {cn:"体会乐观的心态：每件事都有好的一面",en:"Appreciate optimism: everything has a bright side"}
      ],
      parentTips:[
        {cn:"和孩子分享自己小时候类似的经历",en:"Share similar childhood experiences"},
        {cn:"引导孩子学会积极看待事情",en:"Guide the child to think positively about things"}
      ]
    },
    {id:4,title:"四个太阳",titleEn:"Four Suns",
      difficulty: 1,
      text:["我画了个绿绿的太阳，挂在夏天的天空。高山、田野、街道、校园，到处一片清凉。","我画了个金黄的太阳，送给秋天。果园里，果子熟了。金黄的落叶忙着邀请小伙伴，请他们尝尝水果的香甜。","我画了个红红的太阳，照亮冬天。阳光温暖着小朋友冻僵的手和脸。","春天，春天的太阳该画什么颜色呢？哦，画个彩色的。因为春天是个多彩的季节。"],
      textEn:["I drew a green sun and hung it in the summer sky. Mountains, fields, streets, schoolyards — everywhere is cool and refreshing.","I drew a golden sun as a gift for autumn. In the orchard, the fruits are ripe. Golden fallen leaves busily invite friends to taste the sweet fruits.","I drew a red sun to brighten winter. Sunlight warms little friends' frozen hands and faces.","Spring — what color should the spring sun be? Oh, a colorful one! Because spring is a colorful season."],
      textPinyin:["wǒ huà le gè lǜ lǜ de tài yáng, guà zài xià tiān de tiān kōng. gāo shān, tián yě, jiē dào, xiào yuán, dào chù yī piàn qīng liáng.","wǒ huà le gè jīn huáng de tài yáng, sòng gěi qiū tiān. guǒ yuán lǐ, guǒ zi shú le. jīn huáng de luò yè máng zhe yāo qǐng xiǎo huǒ bàn, qǐng tā men cháng cháng shuǐ guǒ de xiāng tián.","wǒ huà le gè hóng hóng de tài yáng, zhào liàng dōng tiān. yáng guāng wēn nuǎn zhe xiǎo péng yǒu dòng jiāng de shǒu hé liǎn.","chūn tiān, chūn tiān de tài yáng gāi huà shén me yán sè ne? ò, huà gè cǎi sè de. yīn wèi chūn tiān shì gè duō cǎi de jì jié."],
      recognizeChars:["太","阳","道","送","忙","尝","香","甜","温","暖","该","颜","因","辄"],
      writeChars:["太","阳","校","金","秋","因","为"],
      vocabWords: [
        {word:'太阳',pinyin:'tài yáng',en:'sun',sentence:'我画了四个太阳。',sentenceEn:'I drew four suns.'},
        {word:'清凉',pinyin:'qīng liáng',en:'cool; refreshing',sentence:'绿绿的太阳送来清凉。',sentenceEn:'The green sun brings coolness.'},
        {word:'温暖',pinyin:'wēn nuǎn',en:'warm',sentence:'红红的太阳温暖大家。',sentenceEn:'The red sun warms everyone.'},
        {word:'果园',pinyin:'guǒ yuán',en:'orchard',sentence:'金黄的太阳照耀果园。',sentenceEn:'The golden sun shines on the orchard.'},
        {word:'色彩',pinyin:'sè cǎi',en:'color',sentence:'春天是多彩的季节。',sentenceEn:'Spring is a colorful season.'}
      ],
      footnotes: [
        {term:"\u592a\u9633", termEn:"sun", definition:"t\u00e0i y\u00e1ng\uff0csun\u3002", definitionEn:"sun"},
        {term:"\u6e05\u51c9", termEn:"cool; refreshing", definition:"q\u012bng li\u00e1ng\uff0ccool; refreshing\u3002", definitionEn:"cool; refreshing"},
        {term:"\u6e29\u6696", termEn:"warm", definition:"w\u0113n nu\u01cen\uff0cwarm\u3002", definitionEn:"warm"},
        {term:"\u679c\u56ed", termEn:"orchard", definition:"gu\u01d2 yu\u00e1n\uff0corchard\u3002", definitionEn:"orchard"},
        {term:"\u8272\u5f69", termEn:"color", definition:"s\u00e8 c\u01cei\uff0ccolor\u3002", definitionEn:"color"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read aloud"},
        {type:"create",cn:"你想画什么样的太阳？画一画，说一说",en:"What sun would you draw? Draw it and talk about it"}
      ],
      teachingPoints:[
        {cn:"体会想象力：用不同颜色的太阳代表四季",en:"Appreciate imagination: different colored suns for four seasons"},
        {cn:"理解为什么每个季节需要不同的太阳",en:"Understand why each season needs a different sun"}
      ],
      parentTips:[
        {cn:"让孩子画出自己心中的四个太阳",en:"Let the child draw their own four suns"},
        {cn:"和孩子讨论每个季节的特点",en:"Discuss the characteristics of each season"}
      ]
    }
  ],
  garden: {
    shiziStation: {
      title:"识字加油站", titleEn:"Character Booster",
      items: [{chars:["评","访","认","读","论","证"],category:"言字旁 Speech radical words"}]
    },
    wordSentence: {
      title:"字词句运用", titleEn:"Words & Sentences",
      items: [
        {text:"读一读，记一记：太阳——阳光，小桥——桥洞",textEn:"Read and remember compound words"},
        {text:"连一连：天气和活动",textEn:"Match: weather and activities"}
      ]
    },
    accumulation: {
      title:"日积月累", titleEn:"Daily Accumulation",
      content: {
        title:"赠汪伦", titleEn:"Gift to Wang Lun",
        difficulty: 1,
        author:"李白", authorEn:"Li Bai",
        text:["李白乘舟将欲行，","忽闻岸上踏歌声。","桃花潭水深千尺，","不及汪伦送我情。"],
        textEn:["Li Bai is about to depart by boat,","When suddenly footsteps and singing sound from the shore.","The peach blossom pool is a thousand feet deep,","But not as deep as Wang Lun's farewell feeling for me."],
        textPinyin:["lǐ bái chéng zhōu jiāng yù xíng,","hū wén àn shàng tà gē shēng.","táo huā tán shuǐ shēn qiān chǐ,","bù jí wāng lún sòng wǒ qíng."]
      }
    },
    readWithAdults: {
      title:"和大人一起读", titleEn:"Read with Adults",
      content: {
        title:"阳光", titleEn:"Sunshine",
        text:"阳光像金子，洒遍田野、高山和小河。田里的禾苗，因为有了阳光，更绿了。山上的小树，因为有了阳光，更高了。河面闪着阳光，小河就像长长的锦缎了。早晨，我拉开窗帘，阳光就跳进了我的家。谁也捉不住阳光，阳光是大家的。",
        textEn:"Sunlight is like gold, spread across fields, mountains, and rivers. The crops in the fields, with sunlight, grow greener. The trees on the mountains, with sunlight, grow taller. The river surface sparkles with sunlight, like a long silk brocade. In the morning, I open the curtains and sunlight leaps into my home. Nobody can catch sunlight — sunlight belongs to everyone."
      }
    }
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 3 — 课文（二）Texts 2                */
/* ═══════════════════════════════════════════ */
{
  id: 3, title: "课文（二）", titleEn: "Texts (II)",
  type: "kewen",
  lessons: [
    {id:5,title:"小公鸡和小鸭子",titleEn:"Little Rooster and Little Duck",
      difficulty: 1,
      text:["小公鸡和小鸭子一块儿出去玩。它们走进一片草地。小公鸡找到了许多虫子，吃得很欢。小鸭子捉不到虫子，急得直哭。小公鸡看见了，捉到虫子就给小鸭子吃。","它们走到小河边。小鸭子说：\u201C公鸡弟弟，我到河里捉鱼给你吃。\u201D小公鸡说：\u201C我也去。\u201D小鸭子说：\u201C不行，不行，你不会游泳，会淹死的！\u201D","小公鸡不信，偷偷地跟在小鸭子后面，也下了水。小公鸡脚站不稳，直扑腾，差点儿被水淹死。小鸭子忙让小公鸡骑到自己的背上。"],
      textEn:["Little Rooster and Little Duck went out to play together. They walked into a field of grass. Little Rooster found many bugs and ate happily. Little Duck couldn't catch any bugs and cried. Little Rooster saw this and gave the bugs he caught to Little Duck.","They came to a river. Little Duck said: 'Rooster brother, let me catch fish in the river for you.' Little Rooster said: 'I'll go too.' Little Duck said: 'No, no! You can't swim — you'll drown!'","Little Rooster didn't believe it and secretly followed Little Duck into the water. Little Rooster couldn't stand steady and flailed about, nearly drowning. Little Duck quickly let Little Rooster ride on his back."],
      textPinyin:["xiǎo gōng jī hé xiǎo yā zi yī kuàir chū qù wán. tā men zǒu jìn yī piàn cǎo dì. xiǎo gōng jī zhǎo dào le xǔ duō chóng zi, chī de hěn huān. xiǎo yā zi zhuō bù dào chóng zi, jí de zhí kū. xiǎo gōng jī kàn jiàn le, zhuō dào chóng zi jiù gěi xiǎo yā zi chī.","tā men zǒu dào xiǎo hé biān. xiǎo yā zi shuō:\" gōng jī dì di, wǒ dào hé lǐ zhuō yú gěi nǐ chī.\" xiǎo gōng jī shuō:\" wǒ yě qù.\" xiǎo yā zi shuō:\" bù xíng, bù xíng, nǐ bú huì yóu yǒng, huì yān sǐ de!\"","xiǎo gōng jī bú xìn, tōu tōu dì gēn zài xiǎo yā zi hòu miàn, yě xià le shuǐ. xiǎo gōng jī jiǎo zhàn bù wěn, zhí pū téng, chà diǎn ér bèi shuǐ yān sǐ. xiǎo yā zi máng ràng xiǎo gōng jī qí dào zì jǐ de bèi shàng."],
      recognizeChars:["块","捉","急","直","河","行","信","跟","忙","背","死","哭"],
      writeChars:["他","她","也","地","听","哥"],
      vocabWords: [
        {word:'一块儿',pinyin:'yī kuàir',en:'together',sentence:'他们一块儿出去玩。',sentenceEn:'They went out to play together.'},
        {word:'捉虫',pinyin:'zhuō chóng',en:'catch bugs',sentence:'小公鸡捉虫子。',sentenceEn:'The rooster catches bugs.'},
        {word:'急忙',pinyin:'jí máng',en:'hurriedly',sentence:'小公鸡急忙跳下水。',sentenceEn:'The rooster hurriedly jumped in.'},
        {word:'游泳',pinyin:'yóu yǒng',en:'swim',sentence:'小鸭子会游泳。',sentenceEn:'The duckling can swim.'},
        {word:'感谢',pinyin:'gǎn xiè',en:'thank',sentence:'小鸭子感谢小公鸡。',sentenceEn:'The duckling thanked the rooster.'}
      ],
      footnotes: [
        {term:"\u4e00\u5757\u513f", termEn:"together", definition:"y\u012b ku\u00e0ir\uff0ctogether\u3002", definitionEn:"together"},
        {term:"\u6349\u866b", termEn:"catch bugs", definition:"zhu\u014d ch\u00f3ng\uff0ccatch bugs\u3002", definitionEn:"catch bugs"},
        {term:"\u6025\u5fd9", termEn:"hurriedly", definition:"j\u00ed m\u00e1ng\uff0churriedly\u3002", definitionEn:"hurriedly"},
        {term:"\u6e38\u6cf3", termEn:"swim", definition:"y\u00f3u y\u01d2ng\uff0cswim\u3002", definitionEn:"swim"},
        {term:"\u611f\u8c22", termEn:"thank", definition:"g\u01cen xi\u00e8\uff0cthank\u3002", definitionEn:"thank"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"分角色朗读课文",en:"Read with assigned roles"},
        {type:"discuss",cn:"小公鸡和小鸭子各有什么本领？",en:"What are each one's abilities?"}
      ],
      teachingPoints:[
        {cn:"学会互相帮助：各有所长",en:"Learn to help each other: everyone has strengths"},
        {cn:"理解不同动物的特点",en:"Understand different animals' characteristics"}
      ],
      parentTips:[
        {cn:"让孩子说说自己有什么本领",en:"Let the child talk about their own abilities"},
        {cn:"引导孩子学会向朋友求助和帮助朋友",en:"Guide the child to seek help and help friends"}
      ]
    },
    {id:6,title:"树和喜鹊",titleEn:"The Tree and the Magpie",
      difficulty: 1,
      text:["从前，这里只有一棵树，树上只有一个鸟窝，鸟窝里只有一只喜鹊。","树很孤单，喜鹊也很孤单。","后来，这里种了好多好多树，每棵树上都有鸟窝，每个鸟窝里都有喜鹊。","树有了邻居，喜鹊也有了邻居。","每天天一亮，喜鹊们叽叽喳喳叫几声，打过招呼，飞到很远的地方去。天一黑，又叽叽喳喳地一起飞回窝里，安安静静地睡觉了。","树很快乐，喜鹊也很快乐。"],
      textEn:["Once, there was only one tree here, with only one nest in it, and only one magpie in the nest.","The tree was lonely, and the magpie was lonely too.","Later, many trees were planted here. Every tree had a nest, and every nest had a magpie.","The tree had neighbors, and the magpie had neighbors too.","Every morning at dawn, the magpies chirped to greet each other, then flew far away. At dusk, they chirped again as they flew back to their nests and slept peacefully.","The tree was happy, and the magpie was happy too."],
      textPinyin:["cóng qián, zhè lǐ zhǐ yǒu yī kē shù, shù shàng zhǐ yǒu yī gè niǎo wō, niǎo wō lǐ zhǐ yǒu yī zhī xǐ què.","shù hěn gū dān, xǐ què yě hěn gū dān.","hòu lái, zhè lǐ zhǒng le hǎo duō hǎo duō shù, měi kē shù shàng dōu yǒu niǎo wō, měi gè niǎo wō lǐ dōu yǒu xǐ què.","shù yǒu le lín jū, xǐ què yě yǒu le lín jū.","měi tiān tiān yí liàng, xǐ què men jī ji zhā zhā jiào jǐ shēng, dǎ guò zhāo hū, fēi dào hěn yuǎn de dì fāng qù. tiān yì hēi, yòu jī ji zhā zhā dì yì qǐ fēi huí wō lǐ, ān ān jìng jìng dì shuì jiào le.","shù hěn kuài lè, xǐ què yě hěn kuài lè."],
      recognizeChars:["单","居","招","呼","静","乐","窝","棵","孤","邻","鸟","安"],
      writeChars:["单","居","招","呼","快","乐"],
      vocabWords: [
        {word:'孤单',pinyin:'gū dān',en:'lonely',sentence:'一棵树很孤单。',sentenceEn:'One tree is very lonely.'},
        {word:'邻居',pinyin:'lín jū',en:'neighbor',sentence:'树有了邻居。',sentenceEn:'The tree has neighbors.'},
        {word:'快乐',pinyin:'kuài lè',en:'happy',sentence:'大家都很快乐。',sentenceEn:'Everyone is happy.'},
        {word:'喜鹊',pinyin:'xǐ què',en:'magpie',sentence:'喜鹊叽叽喳喳。',sentenceEn:'Magpies chatter away.'}
      ],
      footnotes: [
        {term:"\u5b64\u5355", termEn:"lonely", definition:"g\u016b d\u0101n\uff0clonely\u3002", definitionEn:"lonely"},
        {term:"\u90bb\u5c45", termEn:"neighbor", definition:"l\u00edn j\u016b\uff0cneighbor\u3002", definitionEn:"neighbor"},
        {term:"\u5feb\u4e50", termEn:"happy", definition:"ku\u00e0i l\u00e8\uff0chappy\u3002", definitionEn:"happy"},
        {term:"\u559c\u9e4a", termEn:"magpie", definition:"x\u01d0 qu\u00e8\uff0cmagpie\u3002", definitionEn:"magpie"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"为什么后来树和喜鹊都快乐了？",en:"Why did the tree and magpie become happy later?"}
      ],
      teachingPoints:[
        {cn:"理解孤独和友伴的关系",en:"Understand the relationship between loneliness and companionship"},
        {cn:"学习反复的句式：只有一...只有一...",en:"Learn the repetitive pattern: only one... only one..."}
      ],
      parentTips:[
        {cn:"引导孩子体会有朋友的快乐",en:"Guide the child to appreciate the joy of having friends"},
        {cn:"鼓励孩子主动交朋友",en:"Encourage the child to make friends proactively"}
      ]
    },
    {id:7,title:"怎么都快乐",titleEn:"Happy No Matter What",
      difficulty: 1,
      text:["一个人玩，很好！","独自一个，静悄悄的，","正好用纸折船，折马……","踢毽子，跳绳，搭积木，","当然还有看书，画画，听音乐……","两个人玩，很好！","讲故事得有人听才行，","你讲我听，我讲你听。","还可以下棋，打羽毛球……","三个人玩，很好！","讲故事多个人听更有劲，","两个人甩绳子，你来跳。","四个人玩，很好！","五个人玩，很好！","许多人玩，更好！","人多，什么游戏都能玩，","拔河，老鹰捉小鸡……","连开运动会也可以！"],
      textEn:["Playing alone — great!","All by yourself, nice and quiet,","Just right for folding paper boats, paper horses...","Kicking shuttlecocks, jumping rope, building blocks,","And of course reading, drawing, listening to music...","Two people playing — great!","Telling stories needs someone to listen,","You tell, I listen; I tell, you listen.","You can also play chess, badminton...","Three people playing — great!","More listeners make storytelling more fun,","Two swing the rope while you jump.","Four people playing — great!",
"Five people playing — great!","Many people playing — even better!","With many people, you can play any game,","Tug-of-war, eagle catches chicks...","You can even hold a sports meet!"],
      textPinyin:["yī gè rén wán, hěn hǎo!","dú zì yī gè, jìng qiāo qiāo de,","zhèng hǎo yòng zhǐ zhé chuán, zhé mǎ......","tī jiàn zi, tiào shéng, dā jī mù,","dāng rán hái yǒu kàn shū, huà huà, tīng yīn yuè......","liǎng gè rén wán, hěn hǎo!","jiǎng gù shi děi yǒu rén tīng cái xíng,","nǐ jiǎng wǒ tīng, wǒ jiǎng nǐ tīng.","hái kě yǐ xià qí, dǎ yǔ máo qiú......","sān gè rén wán, hěn hǎo!","jiǎng gù shi duō gè rén tīng gèng yǒu jìn,","liǎng gè rén shuǎi shéng zi, nǐ lái tiào.","sì gè rén wán, hěn hǎo!","wǔ gè rén wán, hěn hǎo!","xǔ duō rén wán, gèng hǎo!","rén duō, shén me yóu xì dōu néng wán,","bá hé, lǎo yīng zhuō xiǎo jī......","lián kāi yùn dòng huì yě kě yǐ!"],
      recognizeChars:["独","跳","绳","讲","得","羽","球","戏","拔","鹰","连","运"],
      writeChars:["玩","很","当","音","讲","行","许"],
      vocabWords: [
        {word:'独自',pinyin:'dú zì',en:'alone',sentence:'一个人玩也很好。',sentenceEn:'Playing alone is also good.'},
        {word:'跳绳',pinyin:'tiào shéng',en:'jump rope',sentence:'两个人可以跳绳。',sentenceEn:'Two people can jump rope.'},
        {word:'排球',pinyin:'pái qiú',en:'volleyball',sentence:'大家一起打排球。',sentenceEn:'Everyone plays volleyball together.'},
        {word:'篮球',pinyin:'lán qiú',en:'basketball',sentence:'可以打篮球。',sentenceEn:'Can play basketball.'},
        {word:'快乐',pinyin:'kuài lè',en:'happy',sentence:'怎么都快乐！',sentenceEn:'Happy no matter what!'}
      ],
      footnotes: [
        {term:"\u72ec\u81ea", termEn:"alone", definition:"d\u00fa z\u00ec\uff0calone\u3002", definitionEn:"alone"},
        {term:"\u8df3\u7ef3", termEn:"jump rope", definition:"ti\u00e0o sh\u00e9ng\uff0cjump rope\u3002", definitionEn:"jump rope"},
        {term:"\u6392\u7403", termEn:"volleyball", definition:"p\u00e1i qi\u00fa\uff0cvolleyball\u3002", definitionEn:"volleyball"},
        {term:"\u7bee\u7403", termEn:"basketball", definition:"l\u00e1n qi\u00fa\uff0cbasketball\u3002", definitionEn:"basketball"},
        {term:"\u5feb\u4e50", termEn:"happy", definition:"ku\u00e0i l\u00e8\uff0chappy\u3002", definitionEn:"happy"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"你喜欢一个人玩还是和朋友一起玩？",en:"Do you prefer playing alone or with friends?"}
      ],
      teachingPoints:[
        {cn:"无论人数多少都能找到快乐",en:"You can find happiness regardless of the number of people"},
        {cn:"学习列举的写法",en:"Learn the listing/enumeration writing technique"}
      ],
      parentTips:[
        {cn:"和孩子一起做文中提到的活动",en:"Do the activities mentioned in the text with your child"},
        {cn:"引导孩子学会独处和合作",en:"Guide the child to enjoy both solitude and cooperation"}
      ]
    }
  ],
  garden: {
    shiziStation: {
      title:"识字加油站", titleEn:"Character Booster",
      items: [{chars:["跑","踢","跳","踩","跟","蹦"],category:"足字旁 Foot radical words"}]
    },
    wordSentence: {
      title:"字词句运用", titleEn:"Words & Sentences",
      items: [
        {text:"读一读，说一说",textEn:"Read and discuss"},
        {text:"照样子说一说：小公鸡和小鸭子",textEn:"Follow the pattern: Little Rooster and Little Duck"}
      ]
    },
    writingHints: {
      title:"书写提示", titleEn:"Writing Tips",
      rules: [
        {cn:"上下结构的字：上紧下松",en:"Top-bottom structure: top tight, bottom loose"},
        {cn:"注意横画的长短变化",en:"Note the variation in horizontal stroke lengths"}
      ]
    },
    accumulation: {
      title:"日积月累", titleEn:"Daily Accumulation",
      content: {
        title:"赠刘景文", titleEn:"Gift to Liu Jingwen",
        difficulty: 1,
        author:"苏轼", authorEn:"Su Shi",
        text:["荷尽已无擎雨盖，","菊残犹有傲霜枝。","一年好景君须记，","最是橙黄橘绿时。"],
        textEn:["The lotus has withered, no more umbrellas to hold the rain,","The chrysanthemum fades, yet its branches brave the frost.","The best scenery of the year you must remember:","It is when oranges are yellow and tangerines green."],
        textPinyin:["hé jìn yǐ wú qíng yǔ gài,","jú cán yóu yǒu ào shuāng zhī.","yī nián hǎo jǐng jūn xū jì,","zuì shì chéng huáng jú lǜ shí."]
      }
    },
    readWithAdults: {
      title:"和大人一起读", titleEn:"Read with Adults",
      content: {
        title:"胖乎乎的小手", titleEn:"Chubby Little Hands",
        text:"全家人都喜欢兰兰画的这张画。爸爸刚下班回来，拿起画看了又看，把画贴在了墙上。兰兰不明白，问：\u201C我只是画了自己的小手啊！我有那么多画，您为什么只贴这一张呢？\u201D爸爸说：\u201C这胖乎乎的小手替我拿过拖鞋呀！\u201D妈妈说：\u201C这胖乎乎的小手给我洗过手绢啊！\u201D姥姥说：\u201C这胖乎乎的小手帮我挠过痒痒啊！\u201D兰兰明白了全家人为什么都喜欢这张画。她高兴地说：\u201C等我长大了，小手变成了大手，它会帮你们做更多的事情！\u201D",
        textEn:"The whole family loved Lanlan's drawing. Papa came home, studied the drawing, and posted it on the wall. Lanlan was puzzled: 'I only drew my own little hands! I have so many drawings — why did you only post this one?' Papa said: 'These chubby little hands have fetched my slippers!' Mama said: 'These chubby little hands have washed my handkerchief!' Grandma said: 'These chubby little hands have scratched my itches!' Lanlan understood why everyone loved this drawing. She said happily: 'When I grow up and my little hands become big hands, they'll do even more for you!'"
      }
    }
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 4 — 课文（三）Texts 3                */
/* ═══════════════════════════════════════════ */
{
  id: 4, title: "课文（三）", titleEn: "Texts (III)",
  type: "kewen",
  lessons: [
    {id:8,title:"静夜思",titleEn:"Quiet Night Thoughts",
      difficulty: 1,
      author:"李白",authorEn:"Li Bai",
      authorBio: {cn: "李白（701—762），字太白，号青莲居士，唐代伟大的浪漫主义诗人，世称\u201c诗仙\u201d。著有《李太白集》。", en: "Li Bai (701-762), courtesy name Taibai, was a great Romantic poet of the Tang Dynasty, known as the 'Immortal of Poetry.' His works are compiled in the Li Taibai Collection."},
      text:["床前明月光，","疑是地上霜。","举头望明月，","低头思故乡。"],
      textEn:["Bright moonlight before my bed,","Could it be frost on the ground?","I raise my head to gaze at the bright moon,","And lower it, thinking of my homeland."],
      textPinyin:["chuáng qián míng yuè guāng,","yí shì dì shàng shuāng.","jǔ tóu wàng míng yuè,","dī tóu sī gù xiāng."],
      recognizeChars:["思","床","前","光","低","故","乡","举","望","疑","霜","明"],
      writeChars:["思","床","前","光","低","故","乡"],
      vocabWords: [
        {word:'床前',pinyin:'chuáng qián',en:'before the bed',sentence:'床前明月光。',sentenceEn:'Bright moonlight before the bed.'},
        {word:'月光',pinyin:'yuè guāng',en:'moonlight',sentence:'床前明月光。',sentenceEn:'Bright moonlight before the bed.'},
        {word:'故乡',pinyin:'gù xiāng',en:'hometown',sentence:'低头思故乡。',sentenceEn:'Bowing my head, I think of home.'},
        {word:'举头',pinyin:'jǔ tóu',en:'raise head',sentence:'举头望明月。',sentenceEn:'Raising my head, I gaze at the moon.'},
        {word:'思念',pinyin:'sī niàn',en:'miss; long for',sentence:'思念远方的故乡。',sentenceEn:'Missing the faraway hometown.'}
      ],
      footnotes: [
        {term:"\u5e8a\u524d", termEn:"before the bed", definition:"chu\u00e1ng qi\u00e1n\uff0cbefore the bed\u3002", definitionEn:"before the bed"},
        {term:"\u6708\u5149", termEn:"moonlight", definition:"yu\u00e8 gu\u0101ng\uff0cmoonlight\u3002", definitionEn:"moonlight"},
        {term:"\u6545\u4e61", termEn:"hometown", definition:"g\u00f9 xi\u0101ng\uff0chometown\u3002", definitionEn:"hometown"},
        {term:"\u4e3e\u5934", termEn:"raise head", definition:"j\u01d4 t\u00f3u\uff0craise head\u3002", definitionEn:"raise head"},
        {term:"\u601d\u5ff5", termEn:"miss; long for", definition:"s\u012b ni\u00e0n\uff0cmiss; long for\u3002", definitionEn:"miss; long for"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读古诗，背诵古诗",en:"Read and recite the poem"},
        {type:"discuss",cn:"诗人在想什么？",en:"What is the poet thinking about?"}
      ],
      teachingPoints:[
        {cn:"这是最经典的思乡诗之一",en:"One of the most classic homesickness poems"},
        {cn:"月亮常常是思念家乡的象征",en:"The moon is often a symbol of missing home"}
      ],
      parentTips:[
        {cn:"在夜晚看月亮时带孩子一起背诵",en:"Recite together while looking at the moon at night"},
        {cn:"讲讲李白的故事",en:"Tell stories about Li Bai"}
      ]
    },
    {id:9,title:"夜色",titleEn:"Night Colors",
      difficulty: 1,
      text:["我从前胆子很小很小，","天一黑就不敢往外瞧。","妈妈把勇敢的故事讲了又讲，","可我一看窗外心就乱跳……","爸爸晚上偏要拉我去散步，","原来花草都像白天一样微笑。","从此再黑再黑的夜晚，","我也能看见小鸟怎样在月光下睡觉……"],
      textEn:["I used to be very, very timid,","As soon as it got dark, I didn't dare look outside.","Mama told brave stories again and again,","But when I looked out the window my heart raced...","Papa insisted on taking me for walks at night,","And I discovered flowers and grass smiled just like daytime.","From then on, no matter how dark the night,","I could see how birds sleep in the moonlight..."],
      textPinyin:["wǒ cóng qián dǎn zi hěn xiǎo hěn xiǎo,","tiān yī hēi jiù bù gǎn wǎng wài qiáo.","mā ma bǎ yǒng gǎn de gù shi jiǎng le yòu jiǎng,","kě wǒ yī kàn chuāng wài xīn jiù luàn tiào……","bà ba wǎn shàng piān yào lā wǒ qù sàn bù,","yuán lái huā cǎo dōu xiàng bái tiān yī yàng wēi xiào.","cóng cǐ zài hēi zài hēi de yè wǎn,","wǒ yě néng kàn jiàn xiǎo niǎo zěn yàng zài yuè guāng xià shuì jiào……"],
      recognizeChars:["胆","敢","往","外","勇","窗","乱","偏","散","原","微","笑"],
      writeChars:["色","外","看","爸","晚","笑","再"],
      vocabWords: [
        {word:'胆子',pinyin:'dǎn zi',en:'courage',sentence:'我的胆子很小。',sentenceEn:'I am not very brave.'},
        {word:'窗户',pinyin:'chuāng hu',en:'window',sentence:'从窗户往外看。',sentenceEn:'Looking out the window.'},
        {word:'勇敢',pinyin:'yǒng gǎn',en:'brave',sentence:'变得越来越勇敢。',sentenceEn:'Becoming braver and braver.'},
        {word:'微笑',pinyin:'wēi xiào',en:'smile',sentence:'花儿在微笑。',sentenceEn:'Flowers are smiling.'},
        {word:'散步',pinyin:'sàn bù',en:'take a walk',sentence:'和爸爸出去散步。',sentenceEn:'Go for a walk with dad.'}
      ],
      footnotes: [
        {term:"\u80c6\u5b50", termEn:"courage", definition:"d\u01cen zi\uff0ccourage\u3002", definitionEn:"courage"},
        {term:"\u7a97\u6237", termEn:"window", definition:"chu\u0101ng hu\uff0cwindow\u3002", definitionEn:"window"},
        {term:"\u52c7\u6562", termEn:"brave", definition:"y\u01d2ng g\u01cen\uff0cbrave\u3002", definitionEn:"brave"},
        {term:"\u5fae\u7b11", termEn:"smile", definition:"w\u0113i xi\u00e0o\uff0csmile\u3002", definitionEn:"smile"},
        {term:"\u6563\u6b65", termEn:"take a walk", definition:"s\u00e0n b\u00f9\uff0ctake a walk\u3002", definitionEn:"take a walk"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"有感情地朗读课文",en:"Read with feeling"},
        {type:"discuss",cn:"你怕黑吗？怎么克服的？",en:"Are you afraid of the dark? How did you overcome it?"}
      ],
      teachingPoints:[
        {cn:"克服恐惧需要勇气和亲身体验",en:"Overcoming fear needs courage and personal experience"},
        {cn:"注意诗歌的前后对比：害怕→不怕",en:"Note the contrast: afraid → not afraid"}
      ],
      parentTips:[
        {cn:"如果孩子怕黑，可以带孩子在夜晚散步",en:"If the child fears darkness, take walks at night"},
        {cn:"通过亲身体验帮助孩子克服恐惧",en:"Help the child overcome fears through experience"}
      ]
    },
    {id:10,title:"端午粽",titleEn:"Dragon Boat Festival Rice Dumplings",
      difficulty: 1,
      text:["一到端午节，外婆总会煮好一锅粽子，盼着我们回去。","粽子是用青青的箬竹叶包的，里面裹着白白的糯米，中间有一颗红红的枣。外婆一掀开锅盖，煮熟的粽子就飘出一股清香来。剥开粽叶，咬一口粽子，真是又黏又甜。","外婆包的粽子十分好吃，花样也多。除了红枣粽，还有红豆粽和鲜肉粽。","长大了我才知道，人们端午节吃粽子，据说是为了纪念爱国诗人屈原。"],
      textEn:["Every Dragon Boat Festival, Grandma would always cook a pot of zongzi (rice dumplings) and wait for us to visit.","The zongzi are wrapped in green bamboo leaves, filled with white sticky rice, with a red date in the middle. When Grandma lifts the pot lid, a sweet fragrance rises from the cooked dumplings. Peeling the leaves and taking a bite — so sticky and sweet!","Grandma's zongzi are delicious, with many varieties. Besides red date zongzi, there are red bean and fresh meat ones.","When I grew up, I learned that people eat zongzi on Dragon Boat Festival to commemorate the patriotic poet Qu Yuan."],
      textPinyin:["yī dào duān wǔ jié, wài pó zǒng huì zhǔ hǎo yī guō zòng zi, pàn zhe wǒ men huí qù.","zòng zǐ shì yòng qīng qīng de ruò zhú yè bāo de, lǐ miàn guǒ zhe bái bái de nuò mǐ, zhōng jiān yǒu yì kē hóng hóng de zǎo. wài pó yì xiān kāi guō gài, zhǔ shú de zòng zǐ jiù piāo chū yì gǔ qīng xiāng lái. bāo kāi zòng yè, yǎo yì kǒu zòng zǐ, zhēn shì yòu nián yòu tián.","wài pó bāo de zòng zǐ shí fēn hǎo chī, huā yàng yě duō. chú le hóng zǎo zòng, hái yǒu hóng dòu zòng hé xiān ròu zòng.","zhǎng dà le wǒ cái zhī dào, rén men duān wǔ jié chī zòng zi, jù shuō shì wèi le jì niàn ài guó shī rén qū yuán."],
      recognizeChars:["端","粽","节","总","米","间","分","豆","肉","带","知","据","念"],
      writeChars:["午","节","叶","米","真","分","豆"],
      vocabWords: [
        {word:'端午节',pinyin:'duān wǔ jié',en:'Dragon Boat Festival',sentence:'端午节吃粽子。',sentenceEn:'Eat rice dumplings on Dragon Boat Festival.'},
        {word:'粽子',pinyin:'zòng zi',en:'rice dumpling',sentence:'外婆包的粽子十分好吃。',sentenceEn:'Grandma makes delicious dumplings.'},
        {word:'箬叶',pinyin:'ruò yè',en:'bamboo leaf',sentence:'粽子用箬叶包的。',sentenceEn:'Dumplings are wrapped in bamboo leaves.'},
        {word:'糯米',pinyin:'nuò mǐ',en:'glutinous rice',sentence:'里面裹着糯米。',sentenceEn:'Filled with glutinous rice inside.'},
        {word:'纪念',pinyin:'jì niàn',en:'commemorate',sentence:'纪念爱国诗人屈原。',sentenceEn:'Commemorating the patriotic poet Qu Yuan.'}
      ],
      footnotes: [
        {term:"\u7aef\u5348\u8282", termEn:"Dragon Boat Festival", definition:"du\u0101n w\u01d4 ji\u00e9\uff0cDragon Boat Festival\u3002", definitionEn:"Dragon Boat Festival"},
        {term:"\u7cbd\u5b50", termEn:"rice dumpling", definition:"z\u00f2ng zi\uff0crice dumpling\u3002", definitionEn:"rice dumpling"},
        {term:"\u7bac\u53f6", termEn:"bamboo leaf", definition:"ru\u00f2 y\u00e8\uff0cbamboo leaf\u3002", definitionEn:"bamboo leaf"},
        {term:"\u7cef\u7c73", termEn:"glutinous rice", definition:"nu\u00f2 m\u01d0\uff0cglutinous rice\u3002", definitionEn:"glutinous rice"},
        {term:"\u7eaa\u5ff5", termEn:"commemorate", definition:"j\u00ec ni\u00e0n\uff0ccommemorate\u3002", definitionEn:"commemorate"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"你吃过粽子吗？你最喜欢什么馅的？",en:"Have you eaten zongzi? What filling do you prefer?"}
      ],
      teachingPoints:[
        {cn:"了解端午节的习俗和来历",en:"Learn Dragon Boat Festival customs and origins"},
        {cn:"感受家庭亲情和传统文化",en:"Feel family warmth and traditional culture"}
      ],
      parentTips:[
        {cn:"端午节时和孩子一起包粽子",en:"Make zongzi together during Dragon Boat Festival"},
        {cn:"给孩子讲屈原的故事",en:"Tell the child about Qu Yuan"}
      ]
    },
    {id:11,title:"彩虹",titleEn:"Rainbow",
      difficulty: 1,
      text:["雨停了，天上有一座美丽的桥。","爸爸，你那把浇花用的水壶呢？如果我提着它，走到桥上，把水洒下来，那不就是我在下雨吗？你就不用挑水去浇田了，你高兴吗？","妈妈，你梳头用的那面镜子呢？如果我拿着它，走到桥上，天上不就多了一个月亮吗？我拿着圆圆的月亮照着你梳头，你高兴吗？","哥哥，你系在门前树上的秋千呢？如果我把它挂在彩虹桥上，坐着秋千荡来荡去，花裙子飘啊飘的，不就成了一朵彩云吗？你看见了，高兴吗？"],
      textEn:["The rain stopped, and there's a beautiful bridge in the sky.","Papa, where's your watering can? If I carry it onto the bridge and sprinkle water down, wouldn't that be me making rain? You wouldn't need to carry water to the fields — would you be happy?","Mama, where's the mirror you use to comb your hair? If I take it onto the bridge, wouldn't there be another moon in the sky? I'd hold the round moon while you comb your hair — would you be happy?","Brother, where's the swing tied to the tree by the door? If I hang it on the rainbow bridge and swing back and forth, my flowery skirt floating — wouldn't it look like a colorful cloud? Would you be happy to see it?"],
      textPinyin:["yǔ tíng le, tiān shàng yǒu yī zuò měi lì de qiáo.","bà ba, nǐ nà bǎ jiāo huā yòng de shuǐ hú ne? rú guǒ wǒ tí zhe tā, zǒu dào qiáo shàng, bǎ shuǐ sǎ xià lái, nà bú jiù shì wǒ zài xià yǔ ma? nǐ jiù bú yòng tiāo shuǐ qù jiāo tián le, nǐ gāo xìng ma?","mā ma, nǐ shū tóu yòng de nà miàn jìng zi ne? rú guǒ wǒ ná zhe tā, zǒu dào qiáo shàng, tiān shàng bú jiù duō le yí gè yuè liàng ma? wǒ ná zhe yuán yuán de yuè liàng zhào zhe nǐ shū tóu, nǐ gāo xìng ma?","gē ge, nǐ xì zài mén qián shù shàng de qiū qiān ne? rú guǒ wǒ bǎ tā guà zài cǎi hóng qiáo shàng, zuò zhe qiū qiān dàng lái dàng qù, huā qún zǐ piāo a piāo de, bú jiù chéng le yì duǒ cǎi yún ma? nǐ kàn jiàn le, gāo xìng ma?"],
      recognizeChars:["虹","座","浇","提","洒","挑","镜","拿","照","秋","千","裙"],
      writeChars:["那","着","到","高","兴","千","成"],
      vocabWords: [
        {word:'彩虹',pinyin:'cǎi hóng',en:'rainbow',sentence:'雨过天晴出现彩虹。',sentenceEn:'After rain clears, a rainbow appears.'},
        {word:'浇花',pinyin:'jiāo huā',en:'water flowers',sentence:'拿水壶去浇花。',sentenceEn:'Take the watering can to water flowers.'},
        {word:'镜子',pinyin:'jìng zi',en:'mirror',sentence:'彩虹像镜子。',sentenceEn:'The rainbow is like a mirror.'},
        {word:'高兴',pinyin:'gāo xìng',en:'happy',sentence:'你高兴吗？',sentenceEn:'Are you happy?'},
        {word:'秋千',pinyin:'qiū qiān',en:'swing',sentence:'彩虹像秋千。',sentenceEn:'The rainbow is like a swing.'}
      ],
      footnotes: [
        {term:"\u5f69\u8679", termEn:"rainbow", definition:"c\u01cei h\u00f3ng\uff0crainbow\u3002", definitionEn:"rainbow"},
        {term:"\u6d47\u82b1", termEn:"water flowers", definition:"ji\u0101o hu\u0101\uff0cwater flowers\u3002", definitionEn:"water flowers"},
        {term:"\u955c\u5b50", termEn:"mirror", definition:"j\u00ecng zi\uff0cmirror\u3002", definitionEn:"mirror"},
        {term:"\u9ad8\u5174", termEn:"happy", definition:"g\u0101o x\u00ecng\uff0chappy\u3002", definitionEn:"happy"},
        {term:"\u79cb\u5343", termEn:"swing", definition:"qi\u016b qi\u0101n\uff0cswing\u3002", definitionEn:"swing"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读课文，注意问句的语气",en:"Read aloud, note the questioning tone"},
        {type:"create",cn:"你想在彩虹桥上做什么？",en:"What would you do on a rainbow bridge?"}
      ],
      teachingPoints:[
        {cn:"体会想象力的美妙：把彩虹想象成桥",en:"Appreciate imagination: rainbow as a bridge"},
        {cn:"学习反复句式：如果我...不就...吗？",en:"Learn the pattern: if I... wouldn't it...?"}
      ],
      parentTips:[
        {cn:"雨后看到彩虹时复习这篇课文",en:"Review this text when seeing a rainbow after rain"},
        {cn:"鼓励孩子发挥想象力",en:"Encourage the child's imagination"}
      ]
    }
  ],
  garden: {
    shiziStation: {
      title:"识字加油站", titleEn:"Character Booster",
      items: [{chars:["眉毛","鼻子","嘴巴","脖子","手臂","肚子","小腿","脚尖"],category:"身体部位 Body Parts"}]
    },
    wordSentence: {
      title:"字词句运用", titleEn:"Words & Sentences",
      items: [
        {text:"读一读，说一说",textEn:"Read and discuss"},
        {text:"仿写句子：如果我有……就……",textEn:"Write similar sentences: If I had... then..."}
      ]
    },
    accumulation: {
      title:"日积月累", titleEn:"Daily Accumulation",
      content: {
        title:"寻隐者不遇", titleEn:"Seeking the Hermit Without Success",
        difficulty: 2,
        author:"贾岛", authorEn:"Jia Dao",
        text:["松下问童子，","言师采药去。","只在此山中，","云深不知处。"],
        textEn:["Under the pines, I asked the boy apprentice,","He said his master went to gather herbs.","He is somewhere on this mountain,","But the clouds are too deep to know where."],
        textPinyin:["sōng xià wèn tóng zǐ,","yán shī cǎi yào qù.","zhǐ zài cǐ shān zhōng,","yún shēn bù zhī chù."]
      }
    },
    readWithAdults: {
      title:"和大人一起读", titleEn:"Read with Adults",
      content: {
        title:"妞妞赶牛", titleEn:"Niúniú Herding Cows",
        text:"妞妞赶牛，牛拗妞妞拽牛，牛扭头顶妞妞，妞妞拧牛扭住牛，牛牛拉住妞妞手。",
        textEn:"Niuniu herds the cow. The cow resists, Niuniu pulls. The cow turns and butts Niuniu. Niuniu twists and holds the cow. The cow and Niuniu hold hands. (This is a tongue twister!)"
      }
    }
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 5 — 识字（二）Literacy 2             */
/* ═══════════════════════════════════════════ */
{
  id: 5, title: "识字（二）", titleEn: "Literacy (II)",
  type: "shizi",
  lessons: [
    {id:5,title:"动物儿歌",titleEn:"Animal Song",
      difficulty: 2,
      text:["蜻蜓半空展翅飞，","蝴蝶花间捉迷藏。","蚯蚓土里造宫殿，","蚂蚁地上运食粮。","蝌蚪池中游得欢，","蜘蛛房前结网忙。"],
      textEn:["Dragonflies spread wings and fly in mid-air,","Butterflies play hide and seek among flowers.","Earthworms build palaces underground,","Ants carry food on the ground.","Tadpoles swim happily in the pond,","Spiders busily weave webs by the house."],
      textPinyin:["qīng tíng bàn kōng zhǎn chì fēi,","hú dié huā jiān zhuō mí cáng.","qiū yǐn tǔ lǐ zào gōng diàn,","mǎ yǐ dì shàng yùn shí liáng.","kē dǒu chí zhōng yóu de huān,","zhī zhū fáng qián jié wǎng máng."],
      recognizeChars:["蜻","蜓","迷","藏","造","食","粮","蜘","蛛","网","蚯","蚓"],
      writeChars:["间","迷","造","运","池","欢","网"],
      vocabWords: [
        {word:'蜻蜓',pinyin:'qīng tíng',en:'dragonfly',sentence:'蜻蜓半空展翅飞。',sentenceEn:'Dragonflies spread wings in mid-air.'},
        {word:'蝴蝶',pinyin:'hú dié',en:'butterfly',sentence:'蝴蝶花间捉迷藏。',sentenceEn:'Butterflies play hide-and-seek among flowers.'},
        {word:'蚯蚓',pinyin:'qiū yǐn',en:'earthworm',sentence:'蚯蚓土里造宫殿。',sentenceEn:'Earthworms build palaces in soil.'},
        {word:'蚂蚁',pinyin:'mǎ yǐ',en:'ant',sentence:'蚂蚁地上运食粮。',sentenceEn:'Ants transport food on the ground.'},
        {word:'蝌蚪',pinyin:'kē dǒu',en:'tadpole',sentence:'蝌蚪池中游得欢。',sentenceEn:'Tadpoles swim happily in the pond.'},
        {word:'蜘蛛',pinyin:'zhī zhū',en:'spider',sentence:'蜘蛛房前结网忙。',sentenceEn:'Spiders busily weave webs by the house.'}
      ],
      footnotes: [
        {term:"\u873b\u8713", termEn:"dragonfly", definition:"q\u012bng t\u00edng\uff0cdragonfly\u3002", definitionEn:"dragonfly"},
        {term:"\u8774\u8776", termEn:"butterfly", definition:"h\u00fa di\u00e9\uff0cbutterfly\u3002", definitionEn:"butterfly"},
        {term:"\u86af\u8693", termEn:"earthworm", definition:"qi\u016b y\u01d0n\uff0cearthworm\u3002", definitionEn:"earthworm"},
        {term:"\u8682\u8681", termEn:"ant", definition:"m\u01ce y\u01d0\uff0cant\u3002", definitionEn:"ant"},
        {term:"\u874c\u86aa", termEn:"tadpole", definition:"k\u0113 d\u01d2u\uff0ctadpole\u3002", definitionEn:"tadpole"},
        {term:"\u8718\u86db", termEn:"spider", definition:"zh\u012b zh\u016b\uff0cspider\u3002", definitionEn:"spider"}
      ],
      readingTips: [
        {cn:"\u6709\u8da3\u5730\u8bfb\u4e00\u8bfb\uff0c\u8fb9\u8bfb\u8fb9\u62cd\u624b\u6253\u8282\u62cd\u3002\u8bd5\u7740\u80cc\u8bf5\u4e0b\u6765\u3002", en:"Read it aloud in a fun way, clapping along to the rhythm. Try to memorize it."},
        {cn:"\u548c\u7238\u7238\u5988\u5988\u4e00\u8d77\u8bfb\uff0c\u770b\u770b\u8c01\u8bfb\u5f97\u66f4\u6d41\u5229\u3002", en:"Read together with your parents and see who can read more fluently."}
      ],
      exercises:[
        {type:"read",cn:"朗读儿歌",en:"Read the children's song aloud"},
        {type:"learn",cn:"虫字旁的字有哪些？",en:"Which characters have the insect radical?"}
      ],
      teachingPoints:[
        {cn:"认识虫字旁：蜻蜓、蝴蝶、蚯蚓、蚂蚁、蝌蚪、蜘蛛",en:"Learn insect radical characters"},
        {cn:"了解小动物的习性",en:"Learn about small animals' habits"}
      ],
      parentTips:[
        {cn:"带孩子观察这些小动物",en:"Take the child to observe these small creatures"},
        {cn:"一起背诵这首儿歌",en:"Recite this song together"}
      ]
    },
    {id:6,title:"古对今",titleEn:"Ancient Pairs with Modern",
      difficulty: 2,
      text:["古对今，圆对方。","严寒对酷暑，春暖对秋凉。","晨对暮，雪对霜。","和风对细雨，朝霞对夕阳。","桃对李，柳对杨。","莺歌对燕舞，鸟语对花香。"],
      textEn:["Ancient pairs with modern, round pairs with square.","Bitter cold pairs with intense heat, spring warmth pairs with autumn cool.","Morning pairs with evening, snow pairs with frost.","Gentle wind pairs with fine rain, morning glow pairs with sunset.","Peach pairs with plum, willow pairs with poplar.","Oriole songs pair with swallow dances, bird chirps pair with flower fragrance."],
      textPinyin:["gǔ duì jīn, yuán duì fāng.","yán hán duì kù shǔ, chūn nuǎn duì qiū liáng.","chén duì mù, xuě duì shuāng.","hé fēng duì xì yǔ, zhāo xiá duì xī yáng.","táo duì lǐ, liǔ duì yáng.","yīng gē duì yàn wǔ, niǎo yǔ duì huā xiāng."],
      recognizeChars:["古","凉","细","夕","李","语","香","严","寒","酷","暑","晨","暮","朝","霞"],
      writeChars:["古","凉","细","夕","李","语","香"],
      vocabWords: [
        {word:'古今',pinyin:'gǔ jīn',en:'ancient and modern',sentence:'古对今。',sentenceEn:'Ancient pairs with modern.'},
        {word:'朝霞',pinyin:'zhāo xiá',en:'morning glow',sentence:'和风对细雨，朝霞对夕阳。',sentenceEn:'Gentle wind pairs with fine rain, morning glow with sunset.'},
        {word:'严寒',pinyin:'yán hán',en:'severe cold',sentence:'严寒对酷暑。',sentenceEn:'Severe cold pairs with intense heat.'},
        {word:'酷暑',pinyin:'kù shǔ',en:'intense heat',sentence:'严寒对酷暑。',sentenceEn:'Severe cold pairs with intense heat.'},
        {word:'鸟语花香',pinyin:'niǎo yǔ huā xiāng',en:'birds singing, flowers fragrant',sentence:'鸟语花香，春光明媚。',sentenceEn:'Birds sing and flowers bloom in bright spring.'}
      ],
      footnotes: [
        {term:"\u53e4\u4eca", termEn:"ancient and modern", definition:"g\u01d4 j\u012bn\uff0cancient and modern\u3002", definitionEn:"ancient and modern"},
        {term:"\u671d\u971e", termEn:"morning glow", definition:"zh\u0101o xi\u00e1\uff0cmorning glow\u3002", definitionEn:"morning glow"},
        {term:"\u4e25\u5bd2", termEn:"severe cold", definition:"y\u00e1n h\u00e1n\uff0csevere cold\u3002", definitionEn:"severe cold"},
        {term:"\u9177\u6691", termEn:"intense heat", definition:"k\u00f9 sh\u01d4\uff0cintense heat\u3002", definitionEn:"intense heat"},
        {term:"\u9e1f\u8bed\u82b1\u9999", termEn:"birds singing, flowers fragrant", definition:"ni\u01ceo y\u01d4 hu\u0101 xi\u0101ng\uff0cbirds singing, flowers fragrant\u3002", definitionEn:"birds singing, flowers fragrant"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读课文，背诵课文",en:"Read and recite"},
        {type:"learn",cn:"试着自己对对子",en:"Try creating your own pairs"}
      ],
      teachingPoints:[
        {cn:"学习对仗：上下对应、词性相同",en:"Learn parallelism: corresponding positions, same word classes"},
        {cn:"积累优美的词语",en:"Accumulate elegant vocabulary"}
      ],
      parentTips:[
        {cn:"和孩子玩对对子游戏",en:"Play the pairing game with the child"},
        {cn:"引导发现自然中的对应关系",en:"Guide discovery of corresponding relationships in nature"}
      ]
    },
    {id:7,title:"操场上",titleEn:"On the Playground",
      difficulty: 2,
      text:["打球  拔河  拍皮球","跳高  跑步  踢足球","铃声响，下课了，","操场上，真热闹。","跳绳踢毽丢沙包，","天天锻炼身体好。"],
      textEn:["Playing ball  Tug-of-war  Bouncing balls","High jump  Running  Playing soccer","The bell rings, class is over,","The playground is bustling.","Jumping rope, kicking shuttlecocks, tossing sandbags,","Daily exercise keeps you healthy."],
      textPinyin:["dǎ qiú  bá hé  pāi pí qiú","tiào gāo  pǎo bù  tī zú qiú","líng shēng xiǎng, xià kè le,","cāo chǎng shàng, zhēn rè nào.","tiào shéng tī jiàn diū shā bāo,","tiān tiān duàn liàn shēn tǐ hǎo."],
      recognizeChars:["操","场","铃","热","闹","锻","炼","体","拍","跑","足","踢","响","课","身"],
      writeChars:["打","拍","跑","足","声","身","体"],
      vocabWords: [
        {word:'操场',pinyin:'cāo chǎng',en:'playground',sentence:'下课了，操场上真热闹。',sentenceEn:'Class is over, the playground is lively.'},
        {word:'打球',pinyin:'dǎ qiú',en:'play ball',sentence:'打球、拔河、拍皮球。',sentenceEn:'Play ball, tug-of-war, bounce a ball.'},
        {word:'拔河',pinyin:'bá hé',en:'tug-of-war',sentence:'大家一起拔河。',sentenceEn:'Everyone plays tug-of-war together.'},
        {word:'跑步',pinyin:'pǎo bù',en:'run',sentence:'铃声响，回教室，跑步走。',sentenceEn:'Bell rings, run back to class.'},
        {word:'锻炼',pinyin:'duàn liàn',en:'exercise',sentence:'锻炼身体很重要。',sentenceEn:'Exercise is very important.'}
      ],
      footnotes: [
        {term:"\u64cd\u573a", termEn:"playground", definition:"c\u0101o ch\u01ceng\uff0cplayground\u3002", definitionEn:"playground"},
        {term:"\u6253\u7403", termEn:"play ball", definition:"d\u01ce qi\u00fa\uff0cplay ball\u3002", definitionEn:"play ball"},
        {term:"\u62d4\u6cb3", termEn:"tug-of-war", definition:"b\u00e1 h\u00e9\uff0ctug-of-war\u3002", definitionEn:"tug-of-war"},
        {term:"\u8dd1\u6b65", termEn:"run", definition:"p\u01ceo b\u00f9\uff0crun\u3002", definitionEn:"run"},
        {term:"\u953b\u70bc", termEn:"exercise", definition:"du\u00e0n li\u00e0n\uff0cexercise\u3002", definitionEn:"exercise"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read aloud"},
        {type:"learn",cn:"提手旁和足字旁的字分别表示什么？",en:"What do hand-radical and foot-radical characters represent?"}
      ],
      teachingPoints:[
        {cn:"提手旁→手的动作：打、拍、拔",en:"Hand radical → hand actions: hit, pat, pull"},
        {cn:"足字旁→脚的动作：跑、跳、踢",en:"Foot radical → foot actions: run, jump, kick"}
      ],
      parentTips:[
        {cn:"和孩子一起做课文中提到的运动",en:"Do the sports mentioned in the text together"},
        {cn:"帮孩子理解偏旁和字义的关系",en:"Help understand the relationship between radicals and meanings"}
      ]
    },
    {id:8,title:"人之初",titleEn:"At the Beginning of Man",
      difficulty: 2,
      text:["人之初，性本善。","性相近，习相远。","苟不教，性乃迁。","教之道，贵以专。","子不学，非所宜。","幼不学，老何为。","玉不琢，不成器。","人不学，不知义。"],
      textEn:["At the beginning of man, nature is good.","Natures are similar, but habits make them different.","If not taught, nature will change.","The way of teaching values focus and dedication.","A child who doesn't learn is not doing right.","Young and unlearned, what will old age bring?","Jade uncut cannot become a vessel.","A person unlearned cannot know righteousness."],
      textPinyin:["rén zhī chū, xìng běn shàn.","xìng xiāng jìn, xí xiāng yuǎn.","gǒu bù jiào, xìng nǎi qiān.","jiào zhī dào, guì yǐ zhuān.","zǐ bù xué, fēi suǒ yí.","yòu bù xué, lǎo hé wéi.","yù bù zhuó, bù chéng qì.","rén bù xué, bù zhī yì."],
      recognizeChars:["之","初","性","善","习","教","迁","贵","专","幼","玉","义"],
      writeChars:["之","相","近","习","远","玉","义"],
      vocabWords: [
        {word:'性',pinyin:'xìng',en:'nature; character',sentence:'人之初，性本善。',sentenceEn:'At birth, human nature is good.'},
        {word:'善',pinyin:'shàn',en:'good; kind',sentence:'性本善。',sentenceEn:'Nature is inherently good.'},
        {word:'习',pinyin:'xí',en:'practice; learn',sentence:'性相近，习相远。',sentenceEn:'Nature is similar, habits make us different.'},
        {word:'教',pinyin:'jiào',en:'teach',sentence:'苟不教，性乃迁。',sentenceEn:'Without teaching, nature will stray.'},
        {word:'勤',pinyin:'qín',en:'diligent',sentence:'幼不学，非所宜。',sentenceEn:'Not studying when young is unwise.'}
      ],
      footnotes: [
        {term:"\u6027", termEn:"nature; character", definition:"x\u00ecng\uff0cnature; character\u3002", definitionEn:"nature; character"},
        {term:"\u5584", termEn:"good; kind", definition:"sh\u00e0n\uff0cgood; kind\u3002", definitionEn:"good; kind"},
        {term:"\u4e60", termEn:"practice; learn", definition:"x\u00ed\uff0cpractice; learn\u3002", definitionEn:"practice; learn"},
        {term:"\u6559", termEn:"teach", definition:"ji\u00e0o\uff0cteach\u3002", definitionEn:"teach"},
        {term:"\u52e4", termEn:"diligent", definition:"q\u00edn\uff0cdiligent\u3002", definitionEn:"diligent"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读背诵",en:"Read and recite"},
        {type:"discuss",cn:"你觉得学习重要吗？为什么？",en:"Do you think learning is important? Why?"}
      ],
      teachingPoints:[
        {cn:"这是《三字经》的开篇，是经典蒙学教材",en:"This is the opening of the Three Character Classic, a traditional primer"},
        {cn:"理解学习的重要性",en:"Understand the importance of learning"}
      ],
      parentTips:[
        {cn:"给孩子介绍《三字经》的背景",en:"Introduce the background of Three Character Classic"},
        {cn:"用玉不琢不成器的比喻激励孩子",en:"Motivate the child with the 'uncut jade' metaphor"}
      ]
    }
  ],
  garden: {
    shiziStation: {
      title:"识字加油站", titleEn:"Character Booster",
      items: [{chars:["饭","能","饱","茶","泡","轻","鞭","炮"],category:"与食物相关的词 Food-related Words"}]
    },
    wordSentence: {
      title:"字词句运用", titleEn:"Words & Sentences",
      items: [
        {text:"读一读，想一想",textEn:"Read and think"},
        {text:"加偏旁变新字：青→清、请、晴",textEn:"Add radicals to make new characters: 青→清,请,晴"}
      ]
    },
    accumulation: {
      title:"日积月累", titleEn:"Daily Accumulation",
      content: {
        title:"谚语积累", titleEn:"Proverb Collection",
        difficulty: 2,
        text:["朝霞不出门，晚霞行千里。","有雨山戴帽，无雨半山腰。","早晨下雨当日晴，晚上下雨到天明。","蚂蚁搬家蛇过道，大雨不久要来到。"],
        textEn:["Morning glow, don't go out; evening glow, travel far.","Rain caps on mountains mean rain; clear waists mean no rain.","Morning rain clears by day; evening rain lasts till dawn.","Ants moving and snakes crossing paths — heavy rain is coming soon."],
        textPinyin:["zhāo xiá bù chū mén, wǎn xiá xíng qiān lǐ.","yǒu yǔ shān dài mào, wú yǔ bàn shān yāo.","zǎo chén xià yǔ dāng rì qíng, wǎn shàng xià yǔ dào tiān míng.","mǎ yǐ bān jiā shé guò dào, dà yǔ bù jiǔ yào lái dào."]
      }
    },
    readWithAdults: {
      title:"和大人一起读", titleEn:"Read with Adults",
      content: {
        title:"孙悟空打妖怪", titleEn:"Sun Wukong Fights Monsters",
        text:"唐僧骑马咚那个咚，后面跟着个孙悟空。孙悟空，跑得快，后面跟着个猪八戒。猪八戒，鼻子长，后面跟着个沙和尚。沙和尚，挑着箩，后面来了个老妖婆。老妖婆，真正坏，骗过唐僧和八戒。唐僧八戒真糊涂，是人是妖分不出。分不出，上了当，多亏孙悟空眼睛亮。眼睛亮，冒金光，高高举起金箍棒。金箍棒，有力量，妖魔鬼怪消灭光。",
        textEn:"Tang Monk rides his horse clip-clop, followed by Sun Wukong. Sun Wukong runs fast, followed by Zhu Bajie. Zhu Bajie with his long nose, followed by Sha Monk. Sha Monk carries his load, then comes an old demoness. The demoness is wicked, fooling Tang Monk and Bajie. They can't tell human from demon! Thankfully Sun Wukong has keen eyes, shining golden light. He raises his golden cudgel high — with great power, all demons are destroyed!"
      }
    }
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 6 — 课文（四）Texts 4                */
/* ═══════════════════════════════════════════ */
{
  id: 6, title: "课文（四）", titleEn: "Texts (IV)",
  type: "kewen",
  lessons: [
    {id:12,title:"古诗二首",titleEn:"Two Ancient Poems",
      difficulty: 2,
      text:["池上","小娃撑小艇，偷采白莲回。","不解藏踪迹，浮萍一道开。","小池","泉眼无声惜细流，","树阴照水爱晴柔。","小荷才露尖尖角，","早有蜻蜓立上头。"],
      textEn:["On the Pond (by Bai Juyi)","A child paddles a small boat, stealing white lotuses.","Not knowing how to hide the trail — duckweed parts in a line.","Little Pond (by Yang Wanli)","The spring eye silently cherishes its gentle flow,","Tree shade on the water loves the soft, clear day.","The little lotus just shows its pointed tip,","Already a dragonfly stands upon it."],
      textPinyin:["chí shàng","xiǎo wá chēng xiǎo tǐng, tōu cǎi bái lián huí.","bù jiě cáng zōng jì, fú píng yī dào kāi.","xiǎo chí","quán yǎn wú shēng xī xì liú,","shù yīn zhào shuǐ ài qíng róu.","xiǎo hé cái lù jiān jiān jiǎo,","zǎo yǒu qīng tíng lì shàng tóu."],
      recognizeChars:["首","踪","迹","浮","萍","泉","流","爱","柔","荷","露","角"],
      writeChars:["首","采","无","树","爱","尖","角"],
      vocabWords: [
        {word:'池塘',pinyin:'chí táng',en:'pond',sentence:'泉眼无声惜细流。',sentenceEn:'The spring silently treasures its thin stream.'},
        {word:'荷花',pinyin:'hé huā',en:'lotus flower',sentence:'小荷才露尖尖角。',sentenceEn:'The young lotus just shows its pointed tip.'},
        {word:'蜻蜓',pinyin:'qīng tíng',en:'dragonfly',sentence:'早有蜻蜓立上头。',sentenceEn:'A dragonfly already stands upon it.'},
        {word:'首',pinyin:'shǒu',en:'measure word for poems',sentence:'古诗二首。',sentenceEn:'Two ancient poems.'}
      ],
      footnotes: [
        {term:"\u6c60\u5858", termEn:"pond", definition:"ch\u00ed t\u00e1ng\uff0cpond\u3002", definitionEn:"pond"},
        {term:"\u8377\u82b1", termEn:"lotus flower", definition:"h\u00e9 hu\u0101\uff0clotus flower\u3002", definitionEn:"lotus flower"},
        {term:"\u873b\u8713", termEn:"dragonfly", definition:"q\u012bng t\u00edng\uff0cdragonfly\u3002", definitionEn:"dragonfly"},
        {term:"\u9996", termEn:"measure word for poems", definition:"sh\u01d2u\uff0cmeasure word for poems\u3002", definitionEn:"measure word for poems"}
      ],
      readingTips: [
        {cn:"\u8bd5\u7740\u6709\u611f\u60c5\u5730\u6717\u8bfb\u8fd9\u9996\u53e4\u8bd7\uff0c\u6ce8\u610f\u8282\u594f\u548c\u97f5\u5f8b\u3002\u60f3\u4e00\u60f3\u8bd7\u4eba\u63cf\u7ed8\u4e86\u600e\u6837\u7684\u753b\u9762\u3002", en:"Try reading this poem aloud with feeling, paying attention to rhythm and rhyme. Think about what scene the poet painted."},
        {cn:"\u627e\u51fa\u8bd7\u4e2d\u4f60\u559c\u6b22\u7684\u8bcd\u8bed\uff0c\u8bf4\u8bf4\u4e3a\u4ec0\u4e48\u559c\u6b22\u3002", en:"Find your favorite words in the poem and say why you like them."}
      ],
      exercises:[
        {type:"read",cn:"朗读古诗，背诵古诗",en:"Read and recite both poems"},
        {type:"discuss",cn:"两首诗分别写了什么？",en:"What does each poem describe?"}
      ],
      teachingPoints:[
        {cn:"两首诗都写夏天的池塘，角度不同",en:"Both poems describe summer ponds from different angles"},
        {cn:"体会古诗的画面美",en:"Appreciate the visual beauty of ancient poems"}
      ],
      parentTips:[
        {cn:"带孩子观察池塘里的荷花、蜻蜓",en:"Observe lotus flowers and dragonflies at a pond"},
        {cn:"背诵后可以让孩子画出诗中的画面",en:"After memorizing, let the child draw the scenes from the poems"}
      ]
    },
    {id:13,title:"荷叶圆圆",titleEn:"Round, Round Lotus Leaves",
      difficulty: 2,
      text:["荷叶圆圆的，绿绿的。","小水珠说：\u201C荷叶是我的摇篮。\u201D小水珠躺在荷叶上，眨着亮晶晶的眼睛。","小蜻蜓说：\u201C荷叶是我的停机坪。\u201D小蜻蜓立在荷叶上，展开透明的翅膀。","小青蛙说：\u201C荷叶是我的歌台。\u201D小青蛙蹲在荷叶上，呱呱地放声歌唱。","小鱼儿说：\u201C荷叶是我的凉伞。\u201D小鱼儿在荷叶下笑嘻嘻地游来游去，捧起一朵朵很美很美的水花。"],
      textEn:["The lotus leaves are round and green.","Little water drop says: 'The lotus leaf is my cradle.' It lies on the leaf, blinking its sparkling eyes.","Little dragonfly says: 'The lotus leaf is my landing pad.' It stands on the leaf, spreading its transparent wings.","Little frog says: 'The lotus leaf is my stage.' It crouches on the leaf, singing loudly: ribbit, ribbit!","Little fish says: 'The lotus leaf is my parasol.' It swims happily under the leaf, tossing up beautiful splashes."],
      textPinyin:["hé yè yuán yuán de, lǜ lǜ de.","xiǎo shuǐ zhū shuō:\" hé yè shì wǒ de yáo lán.\" xiǎo shuǐ zhū tǎng zài hé yè shàng, zhǎ zhe liàng jīng jīng de yǎn jīng.","xiǎo qīng tíng shuō:\" hé yè shì wǒ de tíng jī píng.\" xiǎo qīng tíng lì zài hé yè shàng, zhǎn kāi tòu míng de chì bǎng.","xiǎo qīng wā shuō:\" hé yè shì wǒ de gē tái.\" xiǎo qīng wā dūn zài hé yè shàng, guā guā dì fàng shēng gē chàng.","xiǎo yú er shuō:\" hé yè shì wǒ de liáng sǎn.\" xiǎo yú er zài hé yè xià xiào xī xī dì yóu lái yóu qù, pěng qǐ yì duǒ duǒ hěn měi hěn měi de shuǐ huā."],
      recognizeChars:["珠","摇","篮","躺","晶","停","坪","透","翅","膀","蹲","嘻"],
      writeChars:["亮","机","台","放","鱼","朵","美"],
      vocabWords: [
        {word:'荷叶',pinyin:'hé yè',en:'lotus leaf',sentence:'荷叶圆圆的，绿绿的。',sentenceEn:'Lotus leaves are round and green.'},
        {word:'水珠',pinyin:'shuǐ zhū',en:'water droplet',sentence:'水珠躺在荷叶上。',sentenceEn:'Water droplets lie on lotus leaves.'},
        {word:'摇篮',pinyin:'yáo lán',en:'cradle',sentence:'荷叶是小水珠的摇篮。',sentenceEn:'The lotus leaf is a cradle for droplets.'},
        {word:'停机坪',pinyin:'tíng jī píng',en:'landing pad',sentence:'荷叶是蜻蜓的停机坪。',sentenceEn:'The lotus leaf is a landing pad for dragonflies.'},
        {word:'歌台',pinyin:'gē tái',en:'singing stage',sentence:'荷叶是小青蛙的歌台。',sentenceEn:'The lotus leaf is a singing stage for frogs.'}
      ],
      footnotes: [
        {term:"\u8377\u53f6", termEn:"lotus leaf", definition:"h\u00e9 y\u00e8\uff0clotus leaf\u3002", definitionEn:"lotus leaf"},
        {term:"\u6c34\u73e0", termEn:"water droplet", definition:"shu\u01d0 zh\u016b\uff0cwater droplet\u3002", definitionEn:"water droplet"},
        {term:"\u6447\u7bee", termEn:"cradle", definition:"y\u00e1o l\u00e1n\uff0ccradle\u3002", definitionEn:"cradle"},
        {term:"\u505c\u673a\u576a", termEn:"landing pad", definition:"t\u00edng j\u012b p\u00edng\uff0clanding pad\u3002", definitionEn:"landing pad"},
        {term:"\u6b4c\u53f0", termEn:"singing stage", definition:"g\u0113 t\u00e1i\uff0csinging stage\u3002", definitionEn:"singing stage"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"create",cn:"你觉得荷叶还像什么？",en:"What else do you think lotus leaves look like?"}
      ],
      teachingPoints:[
        {cn:"学习比喻：荷叶是摇篮、停机坪、歌台、凉伞",en:"Learn metaphors: lotus leaf as cradle, landing pad, stage, parasol"},
        {cn:"体会拟人手法的趣味",en:"Appreciate the fun of personification"}
      ],
      parentTips:[
        {cn:"带孩子看荷塘或荷花图片",en:"Show the child lotus pond photos or visit one"},
        {cn:"引导孩子用'...是我的...'造句",en:"Guide the child to make sentences with '...is my...'"}
      ]
    },
    {id:14,title:"要下雨了",titleEn:"It's Going to Rain",
      difficulty: 2,
      text:["小白兔弯着腰在山坡上割草。天气很闷，小白兔直起身子，伸了伸腰。","小燕子从他头上飞过。小白兔大声喊：\u201C燕子，燕子，你为什么飞得这么低？\u201D","燕子边飞边说：\u201C要下雨了。空气很潮湿，虫子的翅膀沾了小水珠，飞不高，我正忙着捉虫子呢！\u201D","是要下雨了吗？小白兔往前边池子里一看，小鱼都游到水面上来了。","小白兔跑过去，问：\u201C小鱼，小鱼，今天怎么有空出来呀？\u201D","小鱼说：\u201C要下雨了，水里闷得很，我们到水面上来透透气。小白兔，你快回家吧，小心淋雨！\u201D","小白兔连忙挎起篮子往家跑。他看见路边的小蚂蚁正在搬家呢。","小白兔把要下雨的消息告诉了蚂蚁。","大雨真的下起来了！"],
      textEn:["Little White Rabbit was bending down cutting grass on the hillside. The weather was stuffy. He straightened up and stretched.","A little swallow flew over his head. Little White Rabbit called out loudly: 'Swallow, swallow, why are you flying so low?'","The swallow said while flying: 'It's going to rain. The air is humid, the insects' wings are wet with water drops — they can't fly high, and I'm busy catching them!'","Is it really going to rain? Rabbit looked at the nearby pond — the fish had all come to the surface.","'Little fish, why are you out today?'","'It's going to rain! The water is stuffy — we came to the surface for air. Go home quick before you get wet!'","Rabbit quickly grabbed his basket and ran home. He saw ants moving house by the road.","He told the ants the news about the rain.","And the heavy rain really did start pouring!"],
      textPinyin:["xiǎo bái tù wān zhe yāo zài shān pō shàng gē cǎo. tiān qì hěn mēn, xiǎo bái tù zhí qǐ shēn zi, shēn le shēn yāo.","xiǎo yàn zi cóng tā tóu shàng fēi guò. xiǎo bái tù dà shēng hǎn:\" yàn zi, yàn zi, nǐ wèi shén me fēi dé zhè me dī?\"","yàn zi biān fēi biān shuō:\" yào xià yǔ le. kōng qì hěn cháo shī, chóng zǐ de chì bǎng zhān le xiǎo shuǐ zhū, fēi bù gāo, wǒ zhèng máng zhe zhuō chóng zǐ ne!\"","shì yào xià yǔ le ma? xiǎo bái tù wǎng qián biān chí zǐ lǐ yí kàn, xiǎo yú dōu yóu dào shuǐ miàn shàng lái le.","xiǎo bái tù pǎo guò qù, wèn:\" xiǎo yú, xiǎo yú, jīn tiān zěn me yǒu kōng chū lái ya?\"","xiǎo yú shuō:\" yào xià yǔ le, shuǐ lǐ mēn dé hěn, wǒ men dào shuǐ miàn shàng lái tòu tòu qì. xiǎo bái tù, nǐ kuài huí jiā ba, xiǎo xīn lín yǔ!\"","xiǎo bái tù lián máng kuà qǐ lán zi wǎng jiā pǎo. tā kàn jiàn lù biān de xiǎo mǎ yǐ zhèng zài bān jiā ne.","xiǎo bái tù bǎ yào xià yǔ de xiāo xī gào sù le mǎ yǐ.","dà yǔ zhēn de xià qǐ lái le!"],
      recognizeChars:["腰","坡","割","闷","伸","喊","潮","湿","虫","消","搬","阵"],
      writeChars:["直","呀","边","呢","吗","吧","加"],
      vocabWords: [
        {word:'下雨',pinyin:'xià yǔ',en:'rain',sentence:'要下雨了。',sentenceEn:'It is going to rain.'},
        {word:'燕子',pinyin:'yàn zi',en:'swallow',sentence:'小燕子飞得很低。',sentenceEn:'The swallow flies very low.'},
        {word:'虫子',pinyin:'chóng zi',en:'bug',sentence:'虫子飞不高。',sentenceEn:'Bugs cannot fly high.'},
        {word:'蚂蚁',pinyin:'mǎ yǐ',en:'ant',sentence:'蚂蚁忙着搬家。',sentenceEn:'Ants are busy moving house.'},
        {word:'消息',pinyin:'xiāo xi',en:'news; message',sentence:'小鱼知道下雨的消息。',sentenceEn:'The little fish knows the rain is coming.'}
      ],
      footnotes: [
        {term:"\u4e0b\u96e8", termEn:"rain", definition:"xi\u00e0 y\u01d4\uff0crain\u3002", definitionEn:"rain"},
        {term:"\u71d5\u5b50", termEn:"swallow", definition:"y\u00e0n zi\uff0cswallow\u3002", definitionEn:"swallow"},
        {term:"\u866b\u5b50", termEn:"bug", definition:"ch\u00f3ng zi\uff0cbug\u3002", definitionEn:"bug"},
        {term:"\u8682\u8681", termEn:"ant", definition:"m\u01ce y\u01d0\uff0cant\u3002", definitionEn:"ant"},
        {term:"\u6d88\u606f", termEn:"news; message", definition:"xi\u0101o xi\uff0cnews; message\u3002", definitionEn:"news; message"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"分角色朗读课文",en:"Role-play reading"},
        {type:"discuss",cn:"下雨前还有哪些自然现象？",en:"What other natural signs appear before rain?"}
      ],
      teachingPoints:[
        {cn:"了解下雨前的自然现象：燕子低飞、鱼浮水面、蚂蚁搬家",en:"Learn pre-rain signs: low-flying swallows, surfacing fish, ants moving"},
        {cn:"学习科学观察的方法",en:"Learn the method of scientific observation"}
      ],
      parentTips:[
        {cn:"下雨前带孩子观察这些现象",en:"Observe these phenomena with the child before rain"},
        {cn:"引导孩子关注天气变化",en:"Guide the child to pay attention to weather changes"}
      ]
    }
  ],
  garden: {
    shiziStation: {
      title:"识字加油站", titleEn:"Character Booster",
      items: [{chars:["花骨朵","葡萄","紫色","狐狸","蘑菇","笔架"],category:"生字积累 New Character Accumulation"}]
    },
    wordSentence: {
      title:"字词句运用", titleEn:"Words & Sentences",
      items: [
        {text:"读读说说",textEn:"Read and discuss"},
        {text:"照样子说一说：圆圆的、弯弯的",textEn:"Follow the pattern: round-round, curved-curved"}
      ]
    },
    writingHints: {
      title:"书写提示", titleEn:"Writing Tips",
      rules: [
        {cn:"包围结构的字：先外后内再封口",en:"Enclosing structure: outside first, then inside, then seal"},
        {cn:"注意笔顺规则",en:"Pay attention to stroke order rules"}
      ]
    },
    accumulation: {
      title:"日积月累", titleEn:"Daily Accumulation",
      content: {
        title:"小池", titleEn:"Little Pond (Extended)",
        difficulty: 2,
        text:["荷叶罗裙一色裁，","芙蓉向脸两边开。","乱入池中看不见，","闻歌始觉有人来。"],
        textEn:["Her silk skirt is the same green as lotus leaves,","Lotus blooms face her cheeks on both sides.","She blends into the pond, unseen,","Only when her singing starts do we know someone is there."],
        textPinyin:["hé yè luó qún yī sè cái,","fú róng xiàng liǎn liǎng biān kāi.","luàn rù chí zhōng kàn bù jiàn,","wén gē shǐ jué yǒu rén lái."]
      }
    },
    readWithAdults: {
      title:"和大人一起读", titleEn:"Read with Adults",
      content: {
        title:"夏夜多美", titleEn:"How Beautiful the Summer Night",
        text:"夏夜，公园里静悄悄的。一只小蚂蚁掉进池塘里，一片睡莲叶子看见了，忙让他爬了上来。小蚂蚁非常感激。睡莲看他还在发抖，就问：\u201C你的家在哪里？\u201D\u201C在那边的花坛旁边。\u201D一只萤火虫飞来了，看见小蚂蚁正焦急地看着远方。蜻蜓也飞来了。他们一起帮助小蚂蚁回到了家。",
        textEn:"On a summer night, the park is very quiet. A little ant fell into the pond. A water lily leaf saw it and quickly let it climb up. The ant was very grateful. The lily asked: 'Where is your home?' 'By the flower bed over there.' A firefly came and saw the worried ant looking into the distance. A dragonfly also came. Together they helped the ant get home."
      }
    }
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 7 — 课文（五）Texts 5                */
/* ═══════════════════════════════════════════ */
{
  id: 7, title: "课文（五）", titleEn: "Texts (V)",
  type: "kewen",
  lessons: [
    {id:15,title:"文具的家",titleEn:"Where Stationery Lives",
      difficulty: 2,
      text:["贝贝一回到家，就向妈妈要新的铅笔、新的橡皮。妈妈说：\u201C你怎么天天丢东西呢？\u201D","贝贝眨着一双大眼睛，对妈妈说：\u201C我也不知道。\u201D","妈妈说：\u201C贝贝，你有一个家，每天放学后，你都平平安安地回家。你要想想，你的铅笔、你的橡皮，它们有没有家？\u201D","贝贝想起来了，她书包里的文具盒，就是铅笔的家、橡皮的家。","从此，每天放学的时候，贝贝都要仔细检查，铅笔呀，橡皮呀，转笔刀呀，所有的小伙伴是不是都回家了。"],
      textEn:["As soon as Beibei got home, she asked Mama for new pencils and erasers. Mama said: 'Why do you lose things every day?'","Beibei blinked her big eyes: 'I don't know either.'","Mama said: 'Beibei, you have a home, and every day after school, you come back home safe and sound. You should think about it — your pencils, your erasers, do they have a home?'","Beibei remembered — the pencil case in her bag is the home for pencils and erasers!","From then on, every day after school, Beibei carefully checked that all her little friends — pencils, erasers, sharpener — had all gone home."],
      textPinyin:["bèi bèi yì huí dào jiā, jiù xiàng mā ma yào xīn de qiān bǐ, xīn de xiàng pí. mā ma shuō:\" nǐ zěn me tiān tiān diū dōng xī ne?\"","bèi bèi zhǎ zhe yì shuāng dà yǎn jīng, duì mā ma shuō:\" wǒ yě bù zhī dào.\"","mā ma shuō:\" bèi bèi, nǐ yǒu yí gè jiā, měi tiān fàng xué hòu, nǐ dōu píng píng ān ān dì huí jiā. nǐ yào xiǎng xiǎng, nǐ de qiān bǐ, nǐ de xiàng pí, tā men yǒu méi yǒu jiā?\"","bèi bèi xiǎng qǐ lái le, tā shū bāo lǐ de wén jù hé, jiù shì qiān bǐ de jiā, xiàng pí de jiā.","cóng cǐ, měi tiān fàng xué de shí hòu, bèi bèi dōu yào zǐ xì jiǎn chá, qiān bǐ ya, xiàng pí ya, zhuǎn bǐ dāo ya, suǒ yǒu de xiǎo huǒ bàn shì bu shì dōu huí jiā le."],
      recognizeChars:["具","次","丢","哦","仔","细","检","查","所","文","新","平","安"],
      writeChars:["文","次","找","平","办","让","包"],
      vocabWords: [
        {word:'文具',pinyin:'wén jù',en:'stationery',sentence:'文具有自己的家。',sentenceEn:'Stationery has its own home.'},
        {word:'丢',pinyin:'diū',en:'lose',sentence:'铅笔只用了一次就丢了。',sentenceEn:'The pencil was lost after one use.'},
        {word:'仔细',pinyin:'zǐ xì',en:'careful',sentence:'你要仔细一点儿。',sentenceEn:'You need to be more careful.'},
        {word:'检查',pinyin:'jiǎn chá',en:'check',sentence:'每天都要检查。',sentenceEn:'Check every day.'},
        {word:'平平安安',pinyin:'píng píng ān ān',en:'safe and sound',sentence:'让文具平平安安回家。',sentenceEn:'Let stationery return home safely.'}
      ],
      footnotes: [
        {term:"\u6587\u5177", termEn:"stationery", definition:"w\u00e9n j\u00f9\uff0cstationery\u3002", definitionEn:"stationery"},
        {term:"\u4e22", termEn:"lose", definition:"di\u016b\uff0close\u3002", definitionEn:"lose"},
        {term:"\u4ed4\u7ec6", termEn:"careful", definition:"z\u01d0 x\u00ec\uff0ccareful\u3002", definitionEn:"careful"},
        {term:"\u68c0\u67e5", termEn:"check", definition:"ji\u01cen ch\u00e1\uff0ccheck\u3002", definitionEn:"check"},
        {term:"\u5e73\u5e73\u5b89\u5b89", termEn:"safe and sound", definition:"p\u00edng p\u00edng \u0101n \u0101n\uff0csafe and sound\u3002", definitionEn:"safe and sound"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"你是怎么保管文具的？",en:"How do you take care of your stationery?"}
      ],
      teachingPoints:[
        {cn:"养成爱护文具、整理物品的好习惯",en:"Develop good habits of caring for stationery and organizing things"},
        {cn:"学会自己的事情自己做",en:"Learn to do your own things yourself"}
      ],
      parentTips:[
        {cn:"引导孩子每天检查自己的文具",en:"Guide the child to check stationery daily"},
        {cn:"培养孩子的整理能力",en:"Develop the child's organizing skills"}
      ]
    },
    {id:16,title:"一分钟",titleEn:"One Minute",
      difficulty: 2,
      text:["丁零零，闹钟响了。元元打了个哈欠，翻了个身，心想：再睡一分钟吧，就一分钟，不会迟到的。","过了一分钟，元元起来了。他很快地洗了脸，吃了早点，就背着书包上学去了。","走到十字路口，他看见前面是绿灯，刚想走过去，红灯亮了。他叹了口气，说：\u201C要是早一分钟就好了。\u201D","他等了好一会儿，才走过十字路口。他向停在车站的公共汽车跑去，眼看就跑到车站了，车子开了。他叹了口气，说：\u201C要是早一分钟就好了。\u201D","他等啊等，一直不见汽车的影子，元元决定走到学校去。","到了学校，已经上课了。元元红着脸，低着头，坐到了自己的座位上。","李老师看了看手表，说：\u201C元元，今天你迟到了二十分钟。\u201D","元元非常后悔。"],
      textEn:["Ring ring, the alarm went off. Yuanyuan yawned and rolled over, thinking: just one more minute, just one minute, I won't be late.","After one minute, Yuanyuan got up. He quickly washed his face, ate breakfast, and headed to school.","At the crossroads, the light was green, but just as he started to cross, it turned red. He sighed: 'If only I'd been one minute earlier.'","He waited for quite a while before finally crossing the intersection. He ran toward the bus stopped at the station — just as he was about to reach it, the bus drove away. He let out a sigh and said: 'If only I'd been one minute earlier.'","He waited and waited, but no bus came. He decided to walk to school.","At school, class had already started. Yuanyuan sat down at his seat, red-faced and head down.","The teacher looked at her watch: 'Yuanyuan, you're twenty minutes late today.'","Yuanyuan deeply regretted it."],
      textPinyin:["dīng líng líng, nào zhōng xiǎng le. yuán yuán dǎ le gè hā qian, fān le gè shēn, xīn xiǎng: zài shuì yì fēn zhōng ba, jiù yì fēn zhōng, bú huì chí dào de.","guò le yì fēn zhōng, yuán yuán qǐ lái le. tā hěn kuài dì xǐ le liǎn, chī le zǎo diǎn, jiù bèi zhe shū bāo shàng xué qù le.","zǒu dào shí zì lù kǒu, tā kàn jiàn qián miàn shì lǜ dēng, gāng xiǎng zǒu guò qù, hóng dēng liàng le. tā tàn le kǒu qì, shuō:\" yào shi zǎo yì fēn zhōng jiù hǎo le.\"","tā děng le hǎo yí huì er, cái zǒu guò shí zì lù kǒu. tā xiàng tíng zài chē zhàn de gōng gòng qì chē pǎo qù, yǎn kàn jiù pǎo dào chē zhàn le, chē zi kāi le. tā tàn le kǒu qì, shuō:\" yào shi zǎo yì fēn zhōng jiù hǎo le.\"","tā děng a děng, yì zhí bú jiàn qì chē de yǐng zi, yuán yuán jué dìng zǒu dào xué xiào qù.","dào le xué xiào, yǐ jīng shàng kè le. yuán yuán hóng zhe liǎn, dī zhe tóu, zuò dào le zì jǐ de zuò wèi shàng.","lǐ lǎo shī kàn le kàn shǒu biǎo, shuō:\" yuán yuán, jīn tiān nǐ chí dào le èr shí fēn zhōng.\"","yuán yuan fēi cháng hòu huǐ."],
      recognizeChars:["钟","元","洗","共","汽","决","定","已","经","坐","座","要"],
      writeChars:["钟","元","洗","共","已","经","坐"],
      vocabWords: [
        {word:'闹钟',pinyin:'nào zhōng',en:'alarm clock',sentence:'丁零零，闹钟响了。',sentenceEn:'Ring ring, the alarm goes off.'},
        {word:'迟到',pinyin:'chí dào',en:'be late',sentence:'元元迟到了。',sentenceEn:'Yuanyuan was late.'},
        {word:'后悔',pinyin:'hòu huǐ',en:'regret',sentence:'元元非常后悔。',sentenceEn:'Yuanyuan deeply regretted it.'},
        {word:'叹气',pinyin:'tàn qì',en:'sigh',sentence:'元元叹了口气。',sentenceEn:'Yuanyuan sighed.'},
        {word:'决定',pinyin:'jué dìng',en:'decide',sentence:'决定再睡一分钟。',sentenceEn:'Decided to sleep one more minute.'}
      ],
      footnotes: [
        {term:"\u95f9\u949f", termEn:"alarm clock", definition:"n\u00e0o zh\u014dng\uff0calarm clock\u3002", definitionEn:"alarm clock"},
        {term:"\u8fdf\u5230", termEn:"be late", definition:"ch\u00ed d\u00e0o\uff0cbe late\u3002", definitionEn:"be late"},
        {term:"\u540e\u6094", termEn:"regret", definition:"h\u00f2u hu\u01d0\uff0cregret\u3002", definitionEn:"regret"},
        {term:"\u53f9\u6c14", termEn:"sigh", definition:"t\u00e0n q\u00ec\uff0csigh\u3002", definitionEn:"sigh"},
        {term:"\u51b3\u5b9a", termEn:"decide", definition:"ju\u00e9 d\u00ecng\uff0cdecide\u3002", definitionEn:"decide"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"一分钟重要吗？为什么？",en:"Is one minute important? Why?"}
      ],
      teachingPoints:[
        {cn:"理解时间的重要性：一分钟可以影响很多事",en:"Understand time's importance: one minute can change many things"},
        {cn:"学会珍惜时间",en:"Learn to cherish time"}
      ],
      parentTips:[
        {cn:"引导孩子养成守时的好习惯",en:"Guide the child to develop punctuality"},
        {cn:"和孩子讨论一分钟能做什么",en:"Discuss what can be done in one minute"}
      ]
    },
    {id:17,title:"动物王国开大会",titleEn:"The Animal Kingdom Holds a Meeting",
      difficulty: 2,
      text:["动物王国要开大会，老虎让狗熊通知大家。","狗熊用喇叭大声喊：\u201C大家注意，动物王国要开大会，请你们都参加！\u201D一连说了十遍。","狐狸奔来了，对狗熊说：\u201C你说一百遍，大会也开不起来。\u201D\u201C为什么？\u201D狗熊问。\u201C因为你没告诉大家，大会在哪一天开，是今天，还是明天，还是\u2026\u2026\u201D","狗熊一听，伸了伸舌头，做了个鬼脸，连忙说：\u201C对，对，对！\u201D于是就去问老虎。老虎说：\u201C大会就在明天开，你快去通知大家吧！\u201D","狗熊又用喇叭大声喊：\u201C大家注意，动物王国要在明天开大会，请你们都参加！\u201D一连说了十遍。","大灰狼跑来对狗熊说：\u201C你说一百遍，大会也开不起来。\u201D\u201C为什么？\u201D狗熊问。\u201C因为你没告诉大家，在明天什么时候开，上午还是下午，几点钟开。\u201D","狗熊一听，说：\u201C有道理，有道理！\u201D于是又去问老虎。老虎说：\u201C大会就在明天上午八点开，你再去通知大家吧！\u201D","狗熊又用喇叭大声喊：\u201C大家注意，动物王国要在明天上午八点开大会，请你们都参加！\u201D一连说了十遍。","梅花鹿奔来问狗熊：\u201C大会在哪儿开呀？你得说清楚。\u201D狗熊捶捶自己的脑袋，说：\u201C我怎么没问清楚呢？\u201D于是又去问老虎。","\u201C哎呀！忘了说地点。大会在森林广场开，你再去通知大家吧！\u201D老虎对狗熊说。","\u201C请注意啦！\u201D狗熊又用喇叭大声喊，\u201C明天上午八点，在森林广场开大会，请大家准时参加！\u201D一连说了十遍。","这一次，大家都明白了。第二天上午，动物们都来到森林广场，准时参加了大会。"],
      textEn:["The Animal Kingdom was going to hold a meeting. Tiger asked Bear to notify everyone.","Bear shouted through a megaphone: \u201CAttention everyone! The Animal Kingdom is holding a meeting \u2014 please attend!\u201D He said it ten times in a row.","Fox came running over and said: \u201CYou could say it a hundred times and the meeting still won\u2019t happen.\u201D \u201CWhy?\u201D asked Bear. \u201CBecause you didn\u2019t tell everyone which day the meeting is \u2014 today, tomorrow, or when?\u201D","Bear stuck out his tongue and made a funny face, then hurried to say: \u201CRight, right, right!\u201D So he went to ask Tiger. Tiger said: \u201CThe meeting is tomorrow. Go notify everyone quickly!\u201D","Bear shouted through the megaphone again: \u201CAttention! The Animal Kingdom is holding a meeting tomorrow \u2014 please attend!\u201D He said it ten times in a row.","Big Gray Wolf ran over and said: \u201CYou could say it a hundred times and the meeting still won\u2019t happen.\u201D \u201CWhy?\u201D asked Bear. \u201CBecause you didn\u2019t say what time tomorrow \u2014 morning or afternoon, what hour?\u201D","Bear said: \u201CThat makes sense, that makes sense!\u201D So he went to ask Tiger again. Tiger said: \u201CThe meeting is tomorrow morning at eight. Go notify everyone again!\u201D","Bear shouted through the megaphone again: \u201CAttention! The Animal Kingdom is holding a meeting tomorrow at 8 AM \u2014 please attend!\u201D He said it ten times in a row.","Sika Deer ran over and asked: \u201CWhere is the meeting? You need to be clear.\u201D Bear thumped his own head: \u201CHow did I forget to ask?\u201D So he went to ask Tiger again.","\u201COh dear! I forgot to say the location. The meeting is at Forest Square. Go notify everyone again!\u201D Tiger said to Bear.","\u201CAttention please!\u201D Bear shouted through the megaphone again. \u201CTomorrow at 8 AM, there will be a meeting at Forest Square. Please attend on time!\u201D He said it ten times in a row.","This time, everyone understood. The next morning, all the animals came to Forest Square and attended the meeting on time."],
      textPinyin:["dòng wù wáng guó yào kāi dà huì, lǎo hǔ ràng gǒu xióng tōng zhī dà jiā.","gǒu xióng yòng lǎ ba dà shēng hǎn: \u201Cdà jiā zhù yì, dòng wù wáng guó yào kāi dà huì, qǐng nǐ men dōu cān jiā!\u201D yī lián shuō le shí biàn.","hú li bēn lái le, duì gǒu xióng shuō: \u201Cnǐ shuō yī bǎi biàn, dà huì yě kāi bù qǐ lái.\u201D \u201Cwèi shén me?\u201D gǒu xióng wèn. \u201Cyīn wèi nǐ méi gào su dà jiā, dà huì zài nǎ yī tiān kāi, shì jīn tiān, hái shì míng tiān, hái shì...\u201D","gǒu xióng yī tīng, shēn le shēn shé tou, zuò le gè guǐ liǎn, lián máng shuō: \u201Cduì, duì, duì!\u201D yú shì jiù qù wèn lǎo hǔ. lǎo hǔ shuō: \u201Cdà huì jiù zài míng tiān kāi, nǐ kuài qù tōng zhī dà jiā ba!\u201D","gǒu xióng yòu yòng lǎ ba dà shēng hǎn: \u201Cdà jiā zhù yì, dòng wù wáng guó yào zài míng tiān kāi dà huì, qǐng nǐ men dōu cān jiā!\u201D yī lián shuō le shí biàn.","dà huī láng pǎo lái duì gǒu xióng shuō: \u201Cnǐ shuō yī bǎi biàn, dà huì yě kāi bù qǐ lái.\u201D \u201Cwèi shén me?\u201D gǒu xióng wèn. \u201Cyīn wèi nǐ méi gào su dà jiā, zài míng tiān shén me shí hou kāi, shàng wǔ hái shì xià wǔ, jǐ diǎn zhōng kāi.\u201D","gǒu xióng yī tīng, shuō: \u201Cyǒu dào lǐ, yǒu dào lǐ!\u201D yú shì yòu qù wèn lǎo hǔ. lǎo hǔ shuō: \u201Cdà huì jiù zài míng tiān shàng wǔ bā diǎn kāi, nǐ zài qù tōng zhī dà jiā ba!\u201D","gǒu xióng yòu yòng lǎ ba dà shēng hǎn: \u201Cdà jiā zhù yì, dòng wù wáng guó yào zài míng tiān shàng wǔ bā diǎn kāi dà huì, qǐng nǐ men dōu cān jiā!\u201D yī lián shuō le shí biàn.","méi huā lù bēn lái wèn gǒu xióng: \u201Cdà huì zài nǎr kāi ya? nǐ děi shuō qīng chu.\u201D gǒu xióng chuí chuí zì jǐ de nǎo dai, shuō: \u201Cwǒ zěn me méi wèn qīng chu ne?\u201D yú shì yòu qù wèn lǎo hǔ.","\u201Cāi ya! wàng le shuō dì diǎn. dà huì zài sēn lín guǎng chǎng kāi, nǐ zài qù tōng zhī dà jiā ba!\u201D lǎo hǔ duì gǒu xióng shuō.","\u201Cqǐng zhù yì la!\u201D gǒu xióng yòu yòng lǎ ba dà shēng hǎn, \u201Cmíng tiān shàng wǔ bā diǎn, zài sēn lín guǎng chǎng kāi dà huì, qǐng dà jiā zhǔn shí cān jiā!\u201D yī lián shuō le shí biàn.","zhè yī cì, dà jiā dōu míng bai le. dì èr tiān shàng wǔ, dòng wù men dōu lái dào sēn lín guǎng chǎng, zhǔn shí cān jiā le dà huì."],
      recognizeChars:["注","意","遍","准","第","鬼","脸","通","虎","熊","终","于"],
      writeChars:["要","连","百","还","舌","点"],
      vocabWords: [
        {word:'通知',pinyin:'tōng zhī',en:'notice; notify',sentence:'狗熊发通知。',sentenceEn:'The bear issues a notice.'},
        {word:'大会',pinyin:'dà huì',en:'big meeting',sentence:'动物王国开大会。',sentenceEn:'The animal kingdom holds a meeting.'},
        {word:'遍',pinyin:'biàn',en:'measure word for times',sentence:'一遍又一遍。',sentenceEn:'Again and again.'},
        {word:'准时',pinyin:'zhǔn shí',en:'on time',sentence:'请大家准时参加。',sentenceEn:'Please attend on time.'},
        {word:'注意',pinyin:'zhù yì',en:'pay attention',sentence:'注意通知的要素。',sentenceEn:'Pay attention to notice elements.'}
      ],
      footnotes: [
        {term:"\u901a\u77e5", termEn:"notice; notify", definition:"t\u014dng zh\u012b\uff0cnotice; notify\u3002", definitionEn:"notice; notify"},
        {term:"\u5927\u4f1a", termEn:"big meeting", definition:"d\u00e0 hu\u00ec\uff0cbig meeting\u3002", definitionEn:"big meeting"},
        {term:"\u904d", termEn:"measure word for times", definition:"bi\u00e0n\uff0cmeasure word for times\u3002", definitionEn:"measure word for times"},
        {term:"\u51c6\u65f6", termEn:"on time", definition:"zh\u01d4n sh\u00ed\uff0con time\u3002", definitionEn:"on time"},
        {term:"\u6ce8\u610f", termEn:"pay attention", definition:"zh\u00f9 y\u00ec\uff0cpay attention\u3002", definitionEn:"pay attention"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"分角色朗读",en:"Role-play reading"},
        {type:"discuss",cn:"通知应该包含哪些信息？",en:"What information should a notice include?"}
      ],
      teachingPoints:[
        {cn:"学会完整表达：时间、地点、事件",en:"Learn to communicate completely: time, place, event"},
        {cn:"培养清楚表达的能力",en:"Develop the ability to express ideas clearly"}
      ],
      parentTips:[
        {cn:"让孩子练习完整地传达信息",en:"Let the child practice conveying complete messages"},
        {cn:"在生活中练习通知别人的表达",en:"Practice notifying others in daily life"}
      ]
    },
    {id:18,title:"小猴子下山",titleEn:"Little Monkey Goes Down the Mountain",
      difficulty: 2,
      text:["有一天，小猴子下山来。他走到一块玉米地里，看见玉米结得又大又多，非常高兴，就掰了一个，扛着往前走。","小猴子扛着玉米，走到一棵桃树下。他看见满树的桃子又大又红，非常高兴，就扔了玉米，去摘桃子。","小猴子捧着几个桃子，走到一片瓜地里。他看见满地的西瓜又大又圆，非常高兴，就扔了桃子，去摘西瓜。","小猴子抱着一个大西瓜往回走。走着走着，他看见一只小兔子蹦蹦跳跳的，真可爱，就扔了西瓜，去追小兔子。","小兔子跑进树林里，不见了。小猴子只好空着手回家去。"],
      textEn:["One day, Little Monkey came down the mountain. In a cornfield, he saw big, plentiful corn, happily picked one, and carried it forward.","Carrying the corn, he passed a peach tree. Seeing big, red peaches, he happily threw away the corn to pick peaches.","Holding peaches, he came to a melon patch. Seeing big, round watermelons, he threw away the peaches to pick watermelon.","Little Monkey hugged a big watermelon and headed back. As he walked along, he saw a little rabbit hopping and bouncing about — so cute! He threw away the watermelon and chased after the little rabbit.","The rabbit ran into the forest and disappeared. Little Monkey had to go home empty-handed."],
      textPinyin:["yǒu yì tiān, xiǎo hóu zi xià shān lái. tā zǒu dào yí kuài yù mǐ dì lǐ, kàn jiàn yù mǐ jié dé yòu dà yòu duō, fēi cháng gāo xìng, jiù bāi le yí gè, káng zhe wǎng qián zǒu.","xiǎo hóu zi káng zhe yù mǐ, zǒu dào yì kē táo shù xià. tā kàn jiàn mǎn shù de táo zǐ yòu dà yòu hóng, fēi cháng gāo xìng, jiù rēng le yù mǐ, qù zhāi táo zǐ.","xiǎo hóu zi pěng zhe jǐ gè táo zǐ, zǒu dào yí piàn guā dì lǐ. tā kàn jiàn mǎn dì de xī guā yòu dà yòu yuán, fēi cháng gāo xìng, jiù rēng le táo zǐ, qù zhāi xī guā.","xiǎo hóu zi bào zhe yí gè dà xī guā wǎng huí zǒu. zǒu zhe zǒu zhe, tā kàn jiàn yì zhī xiǎo tù zi bèng bèng tiào tiào de, zhēn kě ài, jiù rēng le xī guā, qù zhuī xiǎo tù zi.","xiǎo tù zi pǎo jìn shù lín lǐ, bú jiàn le. xiǎo hóu zi zhǐ hǎo kōng zhuó shǒu huí jiā qù."],
      recognizeChars:["猴","结","掰","扛","满","扔","摘","捧","瓜","抱","蹦","追"],
      writeChars:["块","非","常","往","瓜","进","空"],
      vocabWords: [
        {word:'猴子',pinyin:'hóu zi',en:'monkey',sentence:'小猴子下山来。',sentenceEn:'The little monkey came down the mountain.'},
        {word:'玉米',pinyin:'yù mǐ',en:'corn',sentence:'看见一片玉米地。',sentenceEn:'Saw a cornfield.'},
        {word:'桃子',pinyin:'táo zi',en:'peach',sentence:'他看见满树的桃子。',sentenceEn:'He saw a tree full of peaches.'},
        {word:'西瓜',pinyin:'xī guā',en:'watermelon',sentence:'他看见满地的西瓜。',sentenceEn:'He saw watermelons everywhere.'},
        {word:'空着手',pinyin:'kōng zhe shǒu',en:'empty-handed',sentence:'最后空着手回家。',sentenceEn:'In the end, returned empty-handed.'}
      ],
      footnotes: [
        {term:"\u7334\u5b50", termEn:"monkey", definition:"h\u00f3u zi\uff0cmonkey\u3002", definitionEn:"monkey"},
        {term:"\u7389\u7c73", termEn:"corn", definition:"y\u00f9 m\u01d0\uff0ccorn\u3002", definitionEn:"corn"},
        {term:"\u6843\u5b50", termEn:"peach", definition:"t\u00e1o zi\uff0cpeach\u3002", definitionEn:"peach"},
        {term:"\u897f\u74dc", termEn:"watermelon", definition:"x\u012b gu\u0101\uff0cwatermelon\u3002", definitionEn:"watermelon"},
        {term:"\u7a7a\u7740\u624b", termEn:"empty-handed", definition:"k\u014dng zhe sh\u01d2u\uff0cempty-handed\u3002", definitionEn:"empty-handed"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"朗读课文",en:"Read the text aloud"},
        {type:"discuss",cn:"小猴子为什么空手回家？",en:"Why did Little Monkey go home empty-handed?"}
      ],
      teachingPoints:[
        {cn:"做事要专心，不能三心二意",en:"Focus on what you do — don't be fickle"},
        {cn:"学习动词：掰、扛、扔、摘、捧、抱",en:"Learn action verbs: break, carry, throw, pick, hold, hug"}
      ],
      parentTips:[
        {cn:"引导孩子理解做事要有始有终",en:"Guide the child to finish what they start"},
        {cn:"用动作表演帮助理解动词的区别",en:"Act out the different verbs to understand them"}
      ]
    }
  ],
  garden: {
    shiziStation: {
      title:"识字加油站", titleEn:"Character Booster",
      items: [{chars:["工厂","医院","果园","学校","军营","商店"],category:"场所 Places"}]
    },
    wordSentence: {
      title:"字词句运用", titleEn:"Words & Sentences",
      items: [
        {text:"读一读，照样子说一说",textEn:"Read and follow the pattern"},
        {text:"又大又红、又大又圆",textEn:"Big and red, big and round"}
      ]
    },
    accumulation: {
      title:"日积月累", titleEn:"Daily Accumulation",
      content: {
        title:"明日歌（节选）", titleEn:"Song of Tomorrow (Excerpt)",
        difficulty: 2,
        text:["明日复明日，","明日何其多。","我生待明日，","万事成蹉跎。"],
        textEn:["Tomorrow after tomorrow,","How many tomorrows there are!","If I spend my life waiting for tomorrow,","Everything will be wasted."],
        textPinyin:["míng rì fù míng rì,","míng rì hé qí duō.","wǒ shēng dài míng rì,","wàn shì chéng cuō tuó."]
      }
    },
    readWithAdults: {
      title:"和大人一起读", titleEn:"Read with Adults",
      content: {
        title:"三只白鹤", titleEn:"Three White Cranes",
        text:"三只白鹤在河里捉到了鱼，吃不完，想留到明天吃。第一只白鹤看了看太阳，把鱼埋在了太阳底下。第二只白鹤看了看月亮，把鱼埋在了月亮底下。第三只白鹤看了看大柳树旁边，把鱼埋在了柳树旁边。第二天，太阳在哪里？月亮在哪里？只有大柳树还在原来的地方。第三只白鹤找到了鱼。",
        textEn:"Three white cranes caught fish in the river. They couldn't eat it all and wanted to save some for tomorrow. The first buried fish 'under the sun.' The second buried fish 'under the moon.' The third buried fish next to a big willow tree. The next day — where was the sun? Where was the moon? Only the willow tree was still in its place. The third crane found her fish."
      }
    }
  }
},
/* ═══════════════════════════════════════════ */
/*  UNIT 8 — 课文（六）Texts 6                */
/* ═══════════════════════════════════════════ */
{
  id: 8, title: "课文（六）", titleEn: "Texts (VI)",
  type: "kewen",
  lessons: [
    {id:19,title:"棉花姑娘",titleEn:"Miss Cotton",
      difficulty: 2,
      text:["棉花姑娘生病了，叶子上有许多可恶的蚜虫。她多么盼望有医生来给她治病啊！","燕子飞来了。棉花姑娘说：\u201C请你帮我捉害虫吧！\u201D燕子说：\u201C对不起，我只会捉空中飞的害虫，你还是请别人帮忙吧！\u201D","啄木鸟飞来了。棉花姑娘说：\u201C请你帮我捉害虫吧！\u201D啄木鸟说：\u201C对不起，我只会捉树干里的害虫，你还是请别人帮忙吧！\u201D","青蛙跳来了。棉花姑娘又说：\u201C请你帮我捉害虫吧！\u201D青蛙说：\u201C对不起，我只会捉田里的害虫，你还是请别人帮忙吧！\u201D","忽然，一群圆圆的小虫子飞来了，很快就把蚜虫吃光了。棉花姑娘惊奇地问：\u201C你们是谁呀？\u201D小虫子说：\u201C我们是七星瓢虫，专吃蚜虫。\u201D","不久，棉花姑娘的病好了，长出了碧绿碧绿的叶子，吐出了雪白雪白的棉花。她咧开嘴笑啦！"],
      textEn:["Miss Cotton was sick — hateful aphids covered her leaves. How she wished a doctor would come!","A swallow flew over. Miss Cotton said: 'Please help me catch the pests!' The swallow said: 'Sorry, I can only catch insects flying in the air. You'd better ask someone else for help!'","A woodpecker flew over. Miss Cotton said: 'Please help me catch the pests!' The woodpecker said: 'Sorry, I can only catch insects inside tree trunks. You'd better ask someone else for help!'","A frog hopped over. Miss Cotton said again: 'Please help me catch the pests!' The frog said: 'Sorry, I can only catch insects in the fields. You'd better ask someone else for help!'","Suddenly, a group of round little bugs flew in and quickly ate all the aphids. 'Who are you?' asked Miss Cotton in surprise. 'We are seven-spot ladybugs — we specialize in eating aphids!'","Soon Miss Cotton recovered, growing lush green leaves and producing snow-white cotton. She grinned with joy!"],
      textPinyin:["mián huā gū niáng shēng bìng le, yè zǐ shàng yǒu xǔ duō kě wù de yá chóng. tā duō me pàn wàng yǒu yī shēng lái gěi tā zhì bìng a!","yàn zi fēi lái le. mián huā gū niáng shuō:\" qǐng nǐ bāng wǒ zhuō hài chóng ba!\" yàn zi shuō:\" duì bù qǐ, wǒ zhī huì zhuō kōng zhōng fēi de hài chóng, nǐ hái shì qǐng bié rén bāng máng ba!\"","zhuó mù niǎo fēi lái le. mián huā gū niáng shuō:\" qǐng nǐ bāng wǒ zhuō hài chóng ba!\" zhuó mù niǎo shuō:\" duì bù qǐ, wǒ zhī huì zhuō shù gàn lǐ de hài chóng, nǐ hái shì qǐng bié rén bāng máng ba!\"","qīng wā tiào lái le. mián huā gū niáng yòu shuō:\" qǐng nǐ bāng wǒ zhuō hài chóng ba!\" qīng wā shuō:\" duì bù qǐ, wǒ zhī huì zhuō tián lǐ de hài chóng, nǐ hái shì qǐng bié rén bāng máng ba!\"","hū rán, yì qún yuán yuán de xiǎo chóng zǐ fēi lái le, hěn kuài jiù bǎ yá chóng chī guāng le. mián huā gū niáng jīng qí dì wèn:\" nǐ men shì shuí ya?\" xiǎo chóng zǐ shuō:\" wǒ men shì qī xīng piáo chóng, zhuān chī yá chóng.\"","bù jiǔ, mián huā gū niáng de bìng hǎo le, cháng chū le bì lǜ bì lǜ de yè zi, tǔ chū le xuě bái xuě bái de mián huā. tā liē kāi zuǐ xiào lā!"],
      recognizeChars:["棉","娘","治","燕","别","干","然","奇","颗","瓢","碧","吐"],
      writeChars:["病","医","别","干","奇","星","七"],
      vocabWords: [
        {word:'棉花',pinyin:'mián hua',en:'cotton',sentence:'棉花姑娘生病了。',sentenceEn:'Miss Cotton is sick.'},
        {word:'蚜虫',pinyin:'yá chóng',en:'aphid',sentence:'蚜虫吃棉花叶子。',sentenceEn:'Aphids eat cotton leaves.'},
        {word:'治病',pinyin:'zhì bìng',en:'cure illness',sentence:'请帮我治治病吧。',sentenceEn:'Please help me get cured.'},
        {word:'七星瓢虫',pinyin:'qī xīng piáo chóng',en:'ladybug',sentence:'七星瓢虫来了。',sentenceEn:'The ladybug has come.'},
        {word:'碧绿',pinyin:'bì lǜ',en:'emerald green',sentence:'棉花姑娘长出碧绿的叶子。',sentenceEn:'Miss Cotton grew emerald green leaves.'}
      ],
      footnotes: [
        {term:"\u68c9\u82b1", termEn:"cotton", definition:"mi\u00e1n hua\uff0ccotton\u3002", definitionEn:"cotton"},
        {term:"\u869c\u866b", termEn:"aphid", definition:"y\u00e1 ch\u00f3ng\uff0caphid\u3002", definitionEn:"aphid"},
        {term:"\u6cbb\u75c5", termEn:"cure illness", definition:"zh\u00ec b\u00ecng\uff0ccure illness\u3002", definitionEn:"cure illness"},
        {term:"\u4e03\u661f\u74e2\u866b", termEn:"ladybug", definition:"q\u012b x\u012bng pi\u00e1o ch\u00f3ng\uff0cladybug\u3002", definitionEn:"ladybug"},
        {term:"\u78a7\u7eff", termEn:"emerald green", definition:"b\u00ec l\u01dc\uff0cemerald green\u3002", definitionEn:"emerald green"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"分角色朗读课文",en:"Role-play reading"},
        {type:"discuss",cn:"为什么只有七星瓢虫能帮棉花姑娘？",en:"Why could only ladybugs help Miss Cotton?"}
      ],
      teachingPoints:[
        {cn:"不同动物吃不同的害虫：各有所长",en:"Different animals eat different pests: each has strengths"},
        {cn:"了解益虫的作用",en:"Understand the role of beneficial insects"}
      ],
      parentTips:[
        {cn:"给孩子看瓢虫吃蚜虫的图片或视频",en:"Show ladybug-eating-aphid pictures or videos"},
        {cn:"引导孩子了解自然界的食物链",en:"Guide the child to learn about the food chain"}
      ]
    },
    {id:20,title:"咕咚",titleEn:"Gudong!",
      difficulty: 2,
      text:["木瓜熟了。一个木瓜从高高的树上掉进湖里，\u201C咕咚\u201D！","兔子吓了一跳，拔腿就跑。","小猴子看见了，问他为什么跑。兔子一边跑一边叫：\u201C不好啦，\u2018咕咚\u2019来了，大家快跑哇！\u201D","小猴子一听，就跟着跑起来。他一边跑一边大叫：\u201C不好啦，不好啦，\u2018咕咚\u2019来了，大家快跑哇！\u201D","这一下可热闘了。狐狸呀，山羊啊，小鹿哇，一个跟着一个跑起来。大家一边跑一边叫：\u201C快逃命啊，\u2018咕咚\u2019来了！\u201D","大象看见了，也跟着跑起来。野牛拦住他，问：\u201C\u2018咕咚\u2019在哪里，你看见了？\u201D大象说：\u201C没看见，大家都说\u2018咕咚\u2019来了。\u201D野牛拦住大伙问，大伙都说没看见。最后问兔子，兔子说：\u201C是我听见的，\u2018咕咚\u2019就在那边的湖里。\u201D","兔子领着大家来到湖边。正好又有一个木瓜从高高的树上掉进湖里，\u201C咕咚\u201D！","大伙你看看我，我看看你，都笑了。"],
      textEn:["A papaya was ripe. It fell from the tall tree into the lake — 'Gudong!'","Rabbit was startled and ran.","Little Monkey saw him and asked why he was running. Rabbit yelled while running: 'Oh no! Gudong is coming! Everyone run!'","As soon as Little Monkey heard this, he started running along too. He ran and shouted: 'Oh no, oh no! Gudong is coming! Everyone run!'","Now things really got chaotic. Fox, goat, deer — one after another they all started running. Everyone ran and shouted: 'Run for your lives! Gudong is coming!'","Elephant saw them and started running along too. Buffalo blocked his way and asked: 'Where is Gudong? Did you see it?' Elephant said: 'I didn't see it — everyone says Gudong is coming.' Buffalo stopped the whole group and asked — they all said they hadn't seen it. Finally he asked Rabbit, and Rabbit said: 'I heard it! Gudong is right there in that lake.'","Rabbit led everyone to the lakeside. Just then, another papaya fell from the tall tree into the lake — 'Gudong!'","Everyone looked at each other and laughed."],
      textPinyin:["mù guā shú le. yī gè mù guā cóng gāo gāo de shù shàng diào jìn hú lǐ, 'gū dōng'!","tù zi xià le yī tiào, bá tuǐ jiù pǎo.","xiǎo hóu zi kàn jiàn le, wèn tā wèi shén me pǎo. tù zi yì biān pǎo yì biān jiào:\" bù hǎo lā,' gū dōng' lái le, dà jiā kuài pǎo wā!\"","xiǎo hóu zi yì tīng, jiù gēn zhe pǎo qǐ lái. tā yì biān pǎo yì biān dà jiào:\" bù hǎo lā, bù hǎo lā,' gū dōng' lái le, dà jiā kuài pǎo wā!\"","zhè yí xià kě rè dòu le. hú li ya, shān yáng a, xiǎo lù wā, yí gè gēn zhe yí gè pǎo qǐ lái. dà jiā yì biān pǎo yì biān jiào:\" kuài táo mìng a,' gū dōng' lái le!\"","dà xiàng kàn jiàn le, yě gēn zhe pǎo qǐ lái. yě niú lán zhù tā, wèn:\"' gū dōng' zài nǎ lǐ, nǐ kàn jiàn le?\" dà xiàng shuō:\" méi kàn jiàn, dà jiā dōu shuō' gū dōng' lái le.\" yě niú lán zhù dà huǒ wèn, dà huǒ dōu shuō méi kàn jiàn. zuì hòu wèn tù zǐ, tù zi shuō:\" shì wǒ tīng jiàn de,' gū dōng' jiù zài nà biān de hú lǐ.\"","tù zi lǐng zhe dà jiā lái dào hú biān. zhèng hǎo yòu yǒu yí gè mù guā cóng gāo gāo de shù shàng diào jìn hú lǐ,\" gū dōng\"!","dà huǒ nǐ kàn kan wǒ, wǒ kàn kan nǐ, dōu xiào le."],
      recognizeChars:["咕","咚","熟","掉","吓","鹿","逃","命","象","野","拦","领"],
      writeChars:["家","象","都","吓","叫","跟"],
      vocabWords: [
        {word:'咕咚',pinyin:'gū dōng',en:'thud; splash',sentence:'咕咚一声。',sentenceEn:'A thud sound.'},
        {word:'木瓜',pinyin:'mù guā',en:'papaya',sentence:'一个木瓜掉进湖里。',sentenceEn:'A papaya fell into the lake.'},
        {word:'逃跑',pinyin:'táo pǎo',en:'run away',sentence:'兔子拔腿就跑。',sentenceEn:'The rabbit ran away at once.'},
        {word:'拦住',pinyin:'lán zhù',en:'stop; block',sentence:'野牛拦住了大家。',sentenceEn:'The buffalo stopped everyone.'},
        {word:'害怕',pinyin:'hài pà',en:'afraid',sentence:'大家都害怕。',sentenceEn:'Everyone was afraid.'}
      ],
      footnotes: [
        {term:"\u5495\u549a", termEn:"thud; splash", definition:"g\u016b d\u014dng\uff0cthud; splash\u3002", definitionEn:"thud; splash"},
        {term:"\u6728\u74dc", termEn:"papaya", definition:"m\u00f9 gu\u0101\uff0cpapaya\u3002", definitionEn:"papaya"},
        {term:"\u9003\u8dd1", termEn:"run away", definition:"t\u00e1o p\u01ceo\uff0crun away\u3002", definitionEn:"run away"},
        {term:"\u62e6\u4f4f", termEn:"stop; block", definition:"l\u00e1n zh\u00f9\uff0cstop; block\u3002", definitionEn:"stop; block"},
        {term:"\u5bb3\u6015", termEn:"afraid", definition:"h\u00e0i p\u00e0\uff0cafraid\u3002", definitionEn:"afraid"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"分角色朗读",en:"Role-play reading"},
        {type:"discuss",cn:"这个故事告诉我们什么道理？",en:"What lesson does this story teach us?"}
      ],
      teachingPoints:[
        {cn:"不要盲目跟从，要自己去看看、想想",en:"Don't blindly follow — think and investigate for yourself"},
        {cn:"理解传言可能越传越走样",en:"Understand how rumors can distort"}
      ],
      parentTips:[
        {cn:"和孩子讨论生活中不要人云亦云",en:"Discuss not blindly following others in daily life"},
        {cn:"鼓励孩子遇事多思考",en:"Encourage the child to think before acting"}
      ]
    },
    {id:21,title:"小壁虎借尾巴",titleEn:"Little Gecko Borrows a Tail",
      difficulty: 2,
      text:["小壁虎在墙角捉蚊子，一条蛇咬住了他的尾巴。小壁虎一挣，挣断尾巴逃走了。","没有尾巴多难看哪！小壁虎想，向谁去借一条尾巴呢？","小壁虎爬呀爬，爬到小河边。他看见小鱼摇着尾巴，在河里游来游去。小壁虎说：\u201C小鱼姐姐，您的尾巴借给我行吗？\u201D小鱼说：\u201C不行啊，我要用尾巴拨水呢。\u201D","小壁虎爬呀爬，爬到大树上。他看见老牛甩着尾巴，在树下吃草。小壁虎说：\u201C牛伯伯，您的尾巴借给我行吗？\u201D老牛说：\u201C不行啊，我要用尾巴赶蝇子呢。\u201D","小壁虎爬呀爬，爬到房檐下。他看见燕子摆着尾巴，在空中飞来飞去。小壁虎说：\u201C燕子阿姨，您的尾巴借给我行吗？\u201D燕子说：\u201C不行啊，我要用尾巴掌握方向呢。\u201D","小壁虎借不到尾巴，心里很难过。他爬呀爬，爬回家里找妈妈。","小壁虎把借尾巴的事告诉了妈妈。妈妈笑着说：\u201C傻孩子，你转过身子看看。\u201D小壁虎转身一看，高兴地叫起来：\u201C我长出一条新尾巴啦！\u201D"],
      textEn:["Little Gecko was catching mosquitoes on a wall when a snake bit his tail. He struggled free, breaking off his tail to escape.","Without a tail — how ugly! 'Who can I borrow a tail from?'","Little Gecko crawled and crawled until he reached the riverside. He saw a little fish swishing her tail, swimming back and forth in the river. Little Gecko said: 'Fish sister, could you lend me your tail?' The little fish said: 'I'm afraid not — I need my tail to paddle through the water!'","Little Gecko crawled and crawled until he reached a big tree. He saw Old Ox swishing his tail, eating grass under the tree. Little Gecko said: 'Uncle Ox, could you lend me your tail?' Old Ox said: 'I'm afraid not — I need my tail to swat flies!'","Little Gecko crawled and crawled until he reached the eaves of a house. He saw a swallow swaying her tail, flying back and forth in the air. Little Gecko said: 'Aunt Swallow, could you lend me your tail?' The swallow said: 'I'm afraid not — I need my tail to steer!'","Gecko couldn't borrow a tail and felt sad. He crawled home to Mama.","Little Gecko told Mama about trying to borrow a tail. Mama smiled and said: 'Silly child, turn around and look.' Little Gecko turned around, looked, and happily cried out: 'I've grown a new tail!'"],
      textPinyin:["xiǎo bì hǔ zài qiáng jiǎo zhuō wén zǐ, yì tiáo shé yǎo zhù le tā de wěi ba. xiǎo bì hǔ yí zhèng, zhèng duàn wěi ba táo zǒu le.","méi yǒu wěi ba duō nán kàn nǎ! xiǎo bì hǔ xiǎng, xiàng shuí qù jiè yì tiáo wěi ba ne?","xiǎo bì hǔ pá ya pá, pá dào xiǎo hé biān. tā kàn jiàn xiǎo yú yáo zhe wěi bā, zài hé lǐ yóu lái yóu qù. xiǎo bì hǔ shuō:\" xiǎo yú jiě jie, nín de wěi bā jiè gěi wǒ xíng ma?\" xiǎo yú shuō:\" bù xíng a, wǒ yào yòng wěi ba bō shuǐ ne.\"","xiǎo bì hǔ pá ya pá, pá dào dà shù shàng. tā kàn jiàn lǎo niú shuǎi zhe wěi ba, zài shù xià chī cǎo. xiǎo bì hǔ shuō:\" niú bó bo, nín de wěi ba jiè gěi wǒ xíng ma?\" lǎo niú shuō:\" bù xíng a, wǒ yào yòng wěi ba gǎn yíng zǐ ne.\"","xiǎo bì hǔ pá ya pá, pá dào fáng yán xià. tā kàn jiàn yàn zi bǎi zhe wěi bā, zài kōng zhōng fēi lái fēi qù. xiǎo bì hǔ shuō:\" yàn zi ā yí, nín de wěi bā jiè gěi wǒ xíng ma?\" yàn zi shuō:\" bù xíng a, wǒ yào yòng wěi ba zhǎng wò fāng xiàng ne.\"","xiǎo bì hǔ jiè bú dào wěi ba, xīn lǐ hěn nán guò. tā pá ya pá, pá huí jiā lǐ zhǎo mā ma.","xiǎo bì hǔ bǎ jiè wěi bā de shì gào sù le mā ma. mā ma xiào zhe shuō:\" shǎ hái zi, nǐ zhuǎn guò shēn zi kàn kàn.\" xiǎo bì hǔ zhuǎn shēn yí kàn, gāo xìng dì jiào qǐ lái:\" wǒ cháng chū yì tiáo xīn wěi ba lā!\""],
      recognizeChars:["壁","虎","借","蚊","蛇","逃","难","姐","拨","甩","赶","房","转","条"],
      writeChars:["河","姐","借","呢","呀","哪","新"],
      vocabWords: [
        {word:'壁虎',pinyin:'bì hǔ',en:'gecko',sentence:'小壁虎在墙上爬。',sentenceEn:'The gecko crawls on the wall.'},
        {word:'尾巴',pinyin:'wěi ba',en:'tail',sentence:'小壁虎的尾巴断了。',sentenceEn:'The gecko broke its tail.'},
        {word:'借',pinyin:'jiè',en:'borrow',sentence:'小壁虎去借尾巴。',sentenceEn:'The gecko went to borrow a tail.'},
        {word:'摇',pinyin:'yáo',en:'wag; shake',sentence:'小鱼摇着尾巴游。',sentenceEn:'The fish swims wagging its tail.'},
        {word:'长出',pinyin:'zhǎng chū',en:'grow out',sentence:'新尾巴长出来了！',sentenceEn:'A new tail has grown!'}
      ],
      footnotes: [
        {term:"\u58c1\u864e", termEn:"gecko", definition:"b\u00ec h\u01d4\uff0cgecko\u3002", definitionEn:"gecko"},
        {term:"\u5c3e\u5df4", termEn:"tail", definition:"w\u011bi ba\uff0ctail\u3002", definitionEn:"tail"},
        {term:"\u501f", termEn:"borrow", definition:"ji\u00e8\uff0cborrow\u3002", definitionEn:"borrow"},
        {term:"\u6447", termEn:"wag; shake", definition:"y\u00e1o\uff0cwag; shake\u3002", definitionEn:"wag; shake"},
        {term:"\u957f\u51fa", termEn:"grow out", definition:"zh\u01ceng ch\u016b\uff0cgrow out\u3002", definitionEn:"grow out"}
      ],
      readingTips: [
        {cn:"\u8fb9\u8bfb\u8fb9\u60f3\uff0c\u6587\u7ae0\u8bb2\u4e86\u4e00\u4ef6\u4ec0\u4e48\u4e8b\uff1f\u4f60\u89c9\u5f97\u6709\u8da3\u5417\uff1f", en:"As you read, think: what is this story about? Do you find it interesting?"},
        {cn:"\u8bfb\u5b8c\u540e\u8bd5\u7740\u7528\u81ea\u5df1\u7684\u8bdd\u628a\u6545\u4e8b\u8bb2\u7ed9\u522b\u4eba\u542c\u3002", en:"After reading, try retelling the story in your own words."}
      ],
      exercises:[
        {type:"read",cn:"分角色朗读课文",en:"Role-play reading"},
        {type:"discuss",cn:"动物的尾巴分别有什么用处？",en:"What are the functions of different animals' tails?"}
      ],
      teachingPoints:[
        {cn:"不同动物尾巴的功能：鱼-拨水、牛-赶蝇子、燕子-掌握方向",en:"Tail functions: fish-swimming, ox-swatting flies, swallow-steering"},
        {cn:"壁虎有再生能力：尾巴断了能长出来",en:"Geckos have regeneration: tails grow back"}
      ],
      parentTips:[
        {cn:"和孩子聊聊其他动物尾巴的作用",en:"Discuss other animals' tail functions"},
        {cn:"鼓励孩子了解动物的自我保护能力",en:"Encourage learning about animals' self-defense abilities"}
      ]
    }
  ],
  garden: {
    shiziStation: {
      title:"识字加油站", titleEn:"Character Booster",
      items: [{chars:["卫生间","牙刷","刷牙","梳子","毛巾","脸盆","香皂","洗衣机"],category:"生活用品 Daily Items"}]
    },
    wordSentence: {
      title:"字词句运用", titleEn:"Words & Sentences",
      items: [
        {text:"加上标点：说一说为什么",textEn:"Add punctuation: explain why"},
        {text:"把句子说完整",textEn:"Complete the sentences"}
      ]
    },
    writingHints: {
      title:"书写提示", titleEn:"Writing Tips",
      rules: [
        {cn:"半包围结构的字：先外后内",en:"Semi-enclosing structure: outside first, then inside"},
        {cn:"注意字的重心平稳",en:"Maintain character balance"}
      ]
    },
    accumulation: {
      title:"日积月累", titleEn:"Daily Accumulation",
      content: {
        title:"谚语积累", titleEn:"Proverb Collection",
        difficulty: 2,
        text:["小葱拌豆腐——一清二白","竹篮打水——一场空","芝麻开花——节节高","十五个吊桶打水——七上八下"],
        textEn:["Scallion mixed with tofu — crystal clear (clean and white)","Carrying water in a bamboo basket — all in vain (comes out empty)","Sesame flowers blooming — rising higher and higher","Fifteen buckets in the well — nervous (seven up, eight down)"],
        textPinyin:["xiǎo cōng bàn dòu fu —— yī qīng èr bái","zhú lán dǎ shuǐ —— yī chǎng kōng","zhī ma kāi huā —— jié jié gāo","shí wǔ gè diào tǒng dǎ shuǐ —— qī shàng bā xià"]
      }
    },
    readWithAdults: {
      title:"和大人一起读", titleEn:"Read with Adults",
      content: {
        title:"小熊住山洞", titleEn:"Little Bear Lives in a Cave",
        text:"小熊一家住在山洞里。熊爸爸对小熊说：\u201C我们去砍些树，造一间木头房子住。\u201D春天，他们走进森林。树上长满了绿叶，小熊舍不得砍。夏天，树上开满了花儿，小熊舍不得砍。秋天，树上结满了果子，小熊舍不得砍。冬天，树上有许多鸟儿，小熊舍不得砍。一年又一年，他们没有砍树造房子，一直住在山洞里。森林里的动物们都很感激小熊一家，给他们送来一束束美丽的鲜花。",
        textEn:"Little Bear's family lived in a cave. Papa Bear said: 'Let's cut some trees to build a wooden house.' In spring, the trees were full of green leaves — Little Bear couldn't bear to cut them. In summer, full of flowers — he couldn't. In autumn, full of fruit — he couldn't. In winter, full of birds — he couldn't. Year after year, they never cut the trees and stayed in the cave. The forest animals, grateful, brought them beautiful bouquets of flowers."
      }
    }
  },
  oralComm: {
    title:"一起做游戏", titleEn:"Let's Play Together",
    objectives: [
      {cn:"用简单的话说清楚游戏规则",en:"Explain game rules using simple language"},
      {cn:"按一定顺序说",en:"Explain in logical order"}
    ],
    activities: [
      {cn:"你最喜欢什么游戏？说说怎么玩",en:"What's your favorite game? Explain how to play"},
      {cn:"讲清楚游戏的人数、规则和玩法",en:"Clearly state the number of players, rules, and how to play"},
      {cn:"大家一起玩一玩",en:"Let's all play together"}
    ]
  }
}
]};
