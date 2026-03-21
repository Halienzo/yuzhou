/**
 * inject_papers.js - Injects new papers directly into xcsc_data.js
 * Uses JSON.stringify for proper escaping of all Unicode characters
 * Run: node build/inject_papers.js
 */
const fs = require('fs');
const path = require('path');

// Helper: Chinese quotes as proper Unicode
const LQ = '\u201C'; // "
const RQ = '\u201D'; // "

const cg2024b = {
  id: "cg2024b", year: 2024, region: "\u4e91\u5357\u7701", city: "\u6606\u660e\u5e02",
  district: "\u5448\u8d21\u533a",
  title: "\u5448\u8d21\u533a2024\u5e74\u7edf\u7f16\u7248\u5c0f\u5347\u521d\u8003\u8bd5\u8bed\u6587\u8bd5\u5377",
  titleEn: "Kunming Chenggong District 2024 Textbook-Edition Primary-to-Junior Chinese Exam",
  totalScore: 100, duration: 120, hasAnswers: true, hasAnalysis: true, source: "district",
  sections: [
    {
      id: "jichu", name: "\u57fa\u7840\u77e5\u8bc6", nameEn: "Foundational Knowledge", score: 35,
      questions: [
        { num:1, type:"pinyinWrite", score:5,
          stem: "\u5de7\u8bfb\u62fc\u97f3\u5199\u5b57\u8bcd\u3002\n\u6df1\u6df1\u6d45\u6d45\u7684\u811a\u5370\uff0c\u5199\u6ee1\u6210\u957f\u7684\u6545\u4e8b\u3002\u90a3\u5e74\uff0c\u6a58\u7eff\u6a59\u9ec4\uff0czh\u00ec q\u00ec(__)...\u8ba9\u9752\u6625\u4e4b\u82b1zh\u00e0n(__)\u653e\u8000\u773c\u5149\u8292\u3002",
          answerText: "\u7a1a\u6c14\uff1b\u5703\uff1b\u854a\uff1b\u87cb\u86c0\uff1b\u6816\u606f\uff1b\u5f98\u5f8a\uff1b\u4f9d\u5048\uff1b\u60e7\uff1b\u9524\uff1b\u51ff\uff1b\u7efd",
          examPoint: "\u770b\u62fc\u97f3\u5199\u8bcd\u8bed",
          explain: LQ+"\u7a1a"+RQ+LQ+"\u5703"+RQ+LQ+"\u87c0"+RQ+LQ+"\u9524"+RQ+"\u7b14\u753b\u8f83\u590d\u6742\uff0c\u6613\u5199\u9519\u3002\u6ce8\u610f"+LQ+"\u854a"+RQ+"\u662f\u8349\u5b57\u5934\uff0c"+LQ+"\u87c0"+RQ+"\u662f\u866b\u5b57\u65c1\u3002",
          gradeable: true,
          stemEn: "Read pinyin and write the correct characters. A passage about childhood memories with blanks for: zh\u00ec q\u00ec (childish), p\u01d4 (bed), ru\u01d0 (pistil), x\u012b shu\u00e0i (cricket), q\u012b x\u012b (perch), p\u00e1i hu\u00e1i (hesitate), y\u012b w\u0113i (lean close), j\u00f9 (fear), chu\u00ed (hammer), z\u00e1o (chisel), zh\u00e0n (bloom).",
          answerTextEn: "childish spirit; flower bed; pistil; cricket; perch; hesitate; lean close; fear; hammer; chisel; bloom",
          explainEn: "Characters like \u7a1a, \u5703, \u87c0, \u9524 have complex strokes. Note \u854a has grass radical, \u87c0 has insect radical.",
          examPointEn: "Pinyin to Characters"
        },
        { num:2, type:"choice", score:2,
          stem: "\u9009\u51fa\u4e0b\u5217\u6bcf\u7ec4\u8bcd\u8bed\u4e2d\u5e26\u70b9\u5b57\u7684\u9519\u8bef\u8bfb\u97f3\u3002\nA. \u6170\u85c9ji\u00e8  B. \u5f3a\u8feb qi\u00e1ng  C. \u6c14\u6c1bf\u0113n  D. \u955c\u523bju\u0101n",
          options:["\u6170\u85c9ji\u00e8","\u5f3a\u8febqi\u00e1ng","\u6c14\u6c1bf\u0113n","\u955c\u523bju\u0101n"],
          answer:1, answerText:"B", examPoint:"\u5b57\u97f3\u8fa8\u6790",
          explain:"\u5f3a\u8feb\u7684"+LQ+"\u5f3a"+RQ+"\u5e94\u8bfbqi\u01ce ng\uff0c\u4e0d\u8bfbqi\u00e1ng\u3002",
          gradeable:true,
          stemEn:"Select the incorrect pronunciation.\nA. comfort ji\u00e8  B. force qi\u00e1ng  C. atmosphere f\u0113n  D. engrave ju\u0101n",
          optionsEn:["comfort ji\u00e8","force qi\u00e1ng","atmosphere f\u0113n","engrave ju\u0101n"],
          explainEn:"\u5f3a in \u5f3a\u8feb (force) should be qi\u01ceng, not qi\u00e1ng.",
          examPointEn:"Pronunciation"
        },
        { num:3, type:"choice", score:2,
          stem: "\u9009\u51fa\u9519\u8bef\u8bfb\u97f3\u3002\nA. \u5014\u5f3aju\u00e9  B. \u5ac9\u5992j\u00ed  C. \u53f1\u54e4ch\u00e0  D. \u810a\u6881j\u01d0",
          options:["\u5014\u5f3aju\u00e9","\u5ac9\u5992j\u00ed","\u53f1\u54e4ch\u00e0","\u810a\u6881j\u01d0"],
          answer:2, answerText:"C", examPoint:"\u5b57\u97f3\u8fa8\u6790",
          explain:"\u53f1\u54e4\u7684"+LQ+"\u54e4"+RQ+"\u5e94\u8bfbzh\u00e0\uff0c\u4e0d\u8bfbch\u00e0\u3002",
          gradeable:true, stemEn:"Select the incorrect pronunciation.\nA. stubborn ju\u00e9  B. jealous j\u00ed  C. roar ch\u00e0  D. spine j\u01d0",
          optionsEn:["stubborn ju\u00e9","jealous j\u00ed","roar ch\u00e0","spine j\u01d0"],
          explainEn:"\u54e4 in \u53f1\u54e4 should be zh\u00e0, not ch\u00e0.", examPointEn:"Pronunciation"
        },
        { num:4, type:"choice", score:2,
          stem:"\u9009\u51fa\u9519\u8bef\u8bfb\u97f3\u3002\nA. \u6a21\u6837m\u00fa  B. \u60e9\u7f5ach\u011bng  C. \u8ffd\u6eafs\u00f9  D. \u73b2\u73d1\u5254\u900ft\u012b",
          options:["\u6a21\u6837m\u00fa","\u60e9\u7f5ach\u011bng","\u8ffd\u6eafs\u00f9","\u73b2\u73d1\u5254\u900ft\u012b"],
          answer:1, answerText:"B", examPoint:"\u5b57\u97f3\u8fa8\u6790",
          explain:"\u60e9\u7f5a\u7684"+LQ+"\u60e9"+RQ+"\u5e94\u8bfbch\u00e9ng\uff0c\u4e0d\u8bfbch\u011bng\u3002",
          gradeable:true, stemEn:"Select the incorrect pronunciation.", optionsEn:["appearance m\u00fa","punish ch\u011bng","trace s\u00f9","exquisite t\u012b"],
          explainEn:"\u60e9 in \u60e9\u7f5a should be ch\u00e9ng, not ch\u011bng.", examPointEn:"Pronunciation"
        },
        { num:5, type:"choice", score:2,
          stem:"\u9009\u51fa\u9519\u8bef\u8bfb\u97f3\u3002\nA. \u660e\u6643\u6643hu\u00e0ng  B. \u6b3a\u4f94w\u01d4  C. \u7b28\u62d9zhu\u014d  D. \u575a\u52b2j\u00ecng",
          options:["\u660e\u6643\u6643hu\u00e0ng","\u6b3a\u4f94w\u01d4","\u7b28\u62d9zhu\u014d","\u575a\u52b2j\u00ecng"],
          answer:0, answerText:"A", examPoint:"\u5b57\u97f3\u8fa8\u6790",
          explain:"\u660e\u6643\u6643\u7684"+LQ+"\u6643"+RQ+"\u5e94\u8bfbhu\u01ceng\uff0c\u4e0d\u8bfbhu\u00e0ng\u3002",
          gradeable:true, stemEn:"Select the incorrect pronunciation.", optionsEn:["gleaming hu\u00e0ng","bully w\u01d4","clumsy zhu\u014d","strong j\u00ecng"],
          explainEn:"\u6643 in \u660e\u6643\u6643 should be hu\u01ceng, not hu\u00e0ng.", examPointEn:"Pronunciation"
        },
        { num:6, type:"choice", score:2,
          stem:"\u8bf7\u9009\u51fa\u4e0b\u5217\u8bcd\u8bed\u4e2d\u4e66\u5199\u5b8c\u5168\u6b63\u786e\u7684\u4e00\u9879",
          options:["\u901a\u5bb5 \u503e\u8986 \u7e41\u9501 \u9886\u57df","\u84d3\u857e \u8f9f\u9759 \u60df\u6050 \u89c9\u5bdf","\u62e8\u5f04 \u5e72\u8e81 \u5486\u54ee \u8bf8\u4faf","\u6124\u6168 \u601d\u8fa8 \u622a\u7136 \u803d\u641e"],
          answer:3, answerText:"D", examPoint:"\u9519\u522b\u5b57\u8fa8\u6790",
          explain:"A.\u7e41\u9501\u2192\u7e41\u7410\uff1bB.\u8f9f\u9759\u2192\u50fb\u9759\uff1bC.\u5e72\u8e81\u2192\u5e72\u71e5\u3002D\u9879\u5168\u90e8\u6b63\u786e\u3002",
          gradeable:true, stemEn:"Select the group with all characters spelled correctly.",
          optionsEn:["\u901a\u5bb5 \u503e\u8986 \u7e41\u9501(\u00d7) \u9886\u57df","\u84d3\u857e \u8f9f\u9759(\u00d7) \u60df\u6050 \u89c9\u5bdf","\u62e8\u5f04 \u5e72\u8e81(\u00d7) \u5486\u54ee \u8bf8\u4faf","\u6124\u6168 \u601d\u8fa8 \u622a\u7136 \u803d\u641e \u2713"],
          explainEn:"A: \u7e41\u9501\u2192\u7e41\u7410; B: \u8f9f\u9759\u2192\u50fb\u9759; C: \u5e72\u8e81\u2192\u5e72\u71e5. D is all correct.", examPointEn:"Character Spelling"
        },
        { num:7, type:"fillBlank", score:4,
          stem:"\u8bfb\u56fe\u89e3\u4e49\uff0c\u5b8c\u6210\u586b\u7a7a\u3002"+LQ+"\u85cf"+RQ+"\u7684\u6784\u9020\u3001\u591a\u97f3\u5b57\u8fa8\u6790\u3002",
          answerText:"\u5f62\u58f0\uff1b\u4e28\uff1bz\u00e0ng\uff1b\u2462\uff1bc\u00e1ng\uff1b\u2460",
          examPoint:"\u6c49\u5b57\u7ed3\u6784\u00b7\u591a\u97f3\u5b57",
          explain:LQ+"\u85cf"+RQ+"\u662f\u5f62\u58f0\u5b57\uff0c\u7531"+LQ+"\u8279"+RQ+"(\u5f62\u65c1)\u548c"+LQ+"\u81e7"+RQ+"(\u58f0\u65c1)\u7ec4\u6210\u3002"+LQ+"\u85cf\u533b"+RQ+"\u4e2d\u8bfbz\u00e0ng\uff0c\u610f\u4e3a\u897f\u85cf\uff1b"+LQ+"\u85cf\u7740"+RQ+"\u4e2d\u8bfbc\u00e1ng\uff0c\u610f\u4e3a\u9690\u853d\u3002",
          gradeable:false,
          stemEn:"Analyze the character \u85cf (hide/Tibet): structure type, 10th stroke, polyphonic readings.",
          answerTextEn:"Phono-semantic; vertical stroke; z\u00e0ng (Tibet); \u2462; c\u00e1ng (hide); \u2460",
          explainEn:"\u85cf is phono-semantic: \u8279 (grass radical) + \u81e7 (phonetic). In \u85cf\u533b reads z\u00e0ng (Tibet); in \u85cf\u7740 reads c\u00e1ng (hide).",
          examPointEn:"Character Structure \u00b7 Polyphonic Characters"
        },
        { num:8, type:"choice", score:2,
          stem:"\u7ed3\u5408\u8bed\u5883\u9009\u62e9\u6070\u5f53\u7684\u6210\u8bed\u3002\u4e91\u5357\u666f\u8272\u3001\u975e\u9057\u6587\u5316\u9986\u4f53\u9a8c\u3002",
          options:["\u7f8e\u4e0d\u80dc\u6536 \u5fc3\u5e73\u6c14\u548c \u7433\u7405\u6ee1\u76ee \u773c\u82b1\u7f2d\u4e71","\u7433\u7405\u6ee1\u76ee \u5fc3\u5e73\u6c14\u548c \u7f8e\u4e0d\u80dc\u6536 \u76ee\u4e0d\u6687\u63a5","\u7f8e\u4e0d\u80dc\u6536 \u5fc3\u65f7\u795e\u6021 \u7433\u7405\u6ee1\u76ee \u76ee\u4e0d\u6687\u63a5","\u7433\u7405\u6ee1\u76ee \u5fc3\u65f7\u795e\u6021 \u7f8e\u4e0d\u80dc\u6536 \u773c\u82b1\u7f2d\u4e71"],
          answer:2, answerText:"C", examPoint:"\u6210\u8bed\u8fd0\u7528",
          explain:"\u4e91\u5357\u666f\u8272\u591a\u2192\u7f8e\u4e0d\u80dc\u6536\uff1b\u6d31\u6d77\u9a91\u884c\u8eab\u5fc3\u8212\u7545\u2192\u5fc3\u65f7\u795e\u6021\uff1b\u975e\u9057\u54c1\u79cd\u591a\u6837\u2192\u7433\u7405\u6ee1\u76ee\uff1b\u770b\u4e0d\u8fc7\u6765\u2192\u76ee\u4e0d\u6687\u63a5\u3002",
          gradeable:true, stemEn:"Choose correct idioms for a Yunnan tourism passage.",
          optionsEn:["too beautiful / calm / dazzling / dizzying","dazzling / calm / too beautiful / overwhelming","too beautiful / refreshed / dazzling / overwhelming","dazzling / refreshed / too beautiful / dizzying"],
          explainEn:"Scenery\u2192\u7f8e\u4e0d\u80dc\u6536; Erhai cycling\u2192\u5fc3\u65f7\u795e\u6021; handicrafts\u2192\u7433\u7405\u6ee1\u76ee; can\u2019t take it all in\u2192\u76ee\u4e0d\u6687\u63a5.", examPointEn:"Idiom Usage"
        },
        { num:9, type:"choice", score:2,
          stem:"\u8bf7\u9009\u51fa\u4e0b\u5217\u8bf4\u6cd5\u9519\u8bef\u7684\u4e00\u9879\uff08\u6587\u5b66\u5e38\u8bc6\uff09",
          options:["\u300a\u6c64\u59c6\u7d22\u4e9a\u5386\u9669\u8bb0\u300b\u662f\u7f8e\u56fd\u4f5c\u5bb6\u9a6c\u514b\u00b7\u5410\u6e29\u7684\u4f5c\u54c1","\u9605\u8bfb\u540d\u8457\u8981\u5173\u6ce8\u63cf\u5199\u4eba\u7269\u8bed\u8a00\u3001\u52a8\u4f5c\u3001\u795e\u6001\u7684\u53e5\u5b50",LQ+"\u4e24\u5f2f\u4f3c\u8e59\u975e\u8e59\u7b3c\u70df\u7709\u2026"+RQ+"\u662f\u5bf9\u6797\u9edb\u7389\u7684\u63cf\u5199","\u8d75\u5b5f\u9879\u662f\u6211\u56fd\u5b8b\u4ee3\u8457\u540d\u7684\u4e66\u6cd5\u5bb6"],
          answer:3, answerText:"D", examPoint:"\u6587\u5b66\u5e38\u8bc6",
          explain:"\u8d75\u5b5f\u9879\u662f\u5143\u4ee3\u8457\u540d\u4e66\u6cd5\u5bb6\uff0c\u4e0d\u662f\u5b8b\u4ee3\u3002",
          gradeable:true, stemEn:"Select the INCORRECT literary statement.",
          optionsEn:["Tom Sawyer is by Mark Twain \u2713","Reading classics \u2014 focus on character descriptions \u2713",LQ+"Two crescent brows..."+RQ+" describes Lin Daiyu \u2713","Zhao Mengfu was a Song Dynasty calligrapher \u2717"],
          explainEn:"Zhao Mengfu was Yuan Dynasty, not Song.", examPointEn:"Literary Knowledge"
        },
        { num:10, type:"choice", score:2,
          stem:"\u6839\u636e\u8bed\u5883\u9009\u62e9\u53e4\u4ee3\u5e74\u9f84\u79f0\u8c13\u3002",
          options:["\u5f31\u51a0","\u603b\u89d2","\u8c46\u853b","\u5782\u9ae1"],
          answer:1, answerText:"B", examPoint:"\u53e4\u4ee3\u5e74\u9f84\u79f0\u8c13",
          explain:"\u5f31\u51a0\u6307\u7537\u5b5020\u5c81\uff1b\u603b\u89d2\u6307\u516b\u4e5d\u5c81\u81f3\u5341\u4e09\u56db\u5c81\u7684\u5c11\u5e74\uff1b\u8c46\u853b\u6307\u5c11\u5973\u5341\u4e09\u56db\u5c81\uff1b\u5782\u9ae1\u6307\u4e09\u56db\u5c81\u5230\u516b\u4e5d\u5c81\u513f\u7ae5\u3002\u5c0f\u5b66\u751f\u5bf9\u5e94"+LQ+"\u603b\u89d2"+RQ+"\u3002",
          gradeable:true, stemEn:"Choose the correct ancient age term for primary school students.",
          optionsEn:["\u5f31\u51a0 (20 yrs)","\u603b\u89d2 (8-13 yrs)","\u8c46\u853b (13-14 girl)","\u5782\u9ae1 (3-8 yrs)"],
          explainEn:"Primary school students (age 8-13) correspond to \u603b\u89d2.", examPointEn:"Ancient Age Terms"
        },
        { num:11, type:"choice", score:2,
          stem:"\u9009\u62e9\u5173\u8054\u8bcd\u642d\u914d\u3002",
          options:["\u5982\u679c\u2026\u5c31\u2026\u65e2\u2026\u53c8","\u56e0\u4e3a\u2026\u6240\u4ee5\u2026\u65e2\u2026\u53c8","\u5982\u679c\u2026\u5c31\u2026\u4e0d\u8bba\u2026\u90fd","\u56e0\u4e3a\u2026\u6240\u4ee5\u2026\u4e0d\u8bba\u2026\u90fd"],
          answer:1, answerText:"B", examPoint:"\u5173\u8054\u8bcd",
          explain:"\u524d\u4e24\u53e5\u662f\u56e0\u679c\u5173\u7cfb\u2192\u56e0\u4e3a\u2026\u6240\u4ee5\u2026\uff1b\u540e\u4e24\u53e5\u662f\u5e76\u5217\u5173\u7cfb\u2192\u65e2\u2026\u53c8\u2026\u3002",
          gradeable:true, stemEn:"Choose the correct conjunction pairs.",
          optionsEn:["if\u2026then\u2026both\u2026and","because\u2026so\u2026both\u2026and","if\u2026then\u2026regardless","because\u2026so\u2026regardless"],
          explainEn:"First pair is causal (because...so), second pair is parallel (both...and).", examPointEn:"Conjunctions"
        },
        { num:12, type:"choice", score:2,
          stem:"\u9009\u51fa\u6b63\u786e\u7684\u6807\u70b9\u7b26\u53f7\u3002",
          options:["\u201C \u201D \uff1b\u3001","\u2018 \u2019 \u3002\uff0c","\u201C \u201D \u3002\u3001","\u2018 \u2019 \uff1b\u3001"],
          answer:0, answerText:"A", examPoint:"\u6807\u70b9\u7b26\u53f7",
          explain:LQ+"\u4e3a\u662f\u5176\u667a\u5f17\u82e5\u4e0e"+RQ+"\u4e3a\u5f15\u7528\u90e8\u5206\u7528\u53cc\u5f15\u53f7\uff1b\u5e76\u5217\u5206\u53e5\u7528\u5206\u53f7\uff1b\u4eba\u540d\u95f4\u7528\u987f\u53f7\u3002",
          gradeable:true, stemEn:"Choose the correct punctuation marks.",
          optionsEn:["\u201C \u201D ; enumeration comma","\u2018 \u2019 . regular comma","\u201C \u201D . enumeration comma","\u2018 \u2019 ; enumeration comma"],
          explainEn:"Quoted text uses double quotes; parallel clauses use semicolons; names use enumeration commas.", examPointEn:"Punctuation"
        },
        { num:13, type:"sentenceTransform", score:3,
          stem:"\u4eff\u7167\u4f8b\u53e5\uff0c\u501f\u52a9\u5177\u4f53\u666f\u7269\u8868\u8fbe\u771f\u5b9e\u7684\u5fc3\u60c5\u3002",
          answerText:"\u6536\u5230\u521d\u4e2d\u5165\u5b66\u901a\u77e5\u65f6\uff0c\u6211\u6fc0\u52a8\u4e0d\u5df2\uff01\u5fae\u98ce\u62c2\u8fc7\u8138\u5e9e\uff0c\u8def\u8fb9\u7684\u5c0f\u8349\u5411\u6211\u4f4e\u5934\u5fae\u7b11\uff0c\u9e1f\u513f\u5728\u679d\u5934\u6b4c\u5531\u3002",
          examPoint:"\u4eff\u5199\u53e5\u5b50\u00b7\u60c5\u666f\u4ea4\u878d",
          explain:"\u9700\u501f\u52a9\u5468\u56f4\u666f\u7269\u8868\u73b0"+LQ+"\u6fc0\u52a8"+RQ+"\u7684\u5fc3\u60c5\u3002",
          gradeable:false, stemEn:"Imitate the example: express joy through scenery description.",
          answerTextEn:"When I received the admission notice, I was overjoyed! A breeze brushed my face, roadside grass nodded with a smile, birds sang on branches.",
          explainEn:"Use surrounding scenery (birds singing, flowers blooming) to convey excitement.", examPointEn:"Sentence Imitation"
        },
        { num:14, type:"fillBlank", score:5,
          stem:"\u8bfb\u7ecf\u8bf5\u5178\u3002\u53e4\u8bd7\u6587\u9ed8\u5199\uff1a\u52e4\u5b66\u3001\u7acb\u5fd7\u3001\u5bb6\u56fd\u60c5\u6000\u7b49\u4e3b\u9898\u3002",
          answerText:"\u8bfb\u4e66\u987b\u7528\u610f\uff1b\u66f4\u6709\u65e9\u884c\u4eba\uff1b\u8001\u5927\u5f92\u4f24\u60b2\uff1b\u95e8\u524d\u6d41\u6c34\u5c1a\u80fd\u897f\uff1b\u4f11\u5c06\u767d\u53d1\u5531\u9ec4\u9e21\uff1b\u5b70\u4e3a\u6c5d\u591a\u77e5\u4e4e\uff1b\u83ca\u6b8b\u72b9\u6709\u50b2\u971c\u679d\uff1b\u7c89\u8eab\u788e\u9aa8\u6d51\u4e0d\u6015\uff1b\u7559\u53d6\u4e39\u5fc3\u7167\u6c57\u9752\uff1b\u5929\u4e0b\u8c01\u4eba\u4e0d\u8bc6\u541b",
          examPoint:"\u53e4\u8bd7\u6587\u9ed8\u5199",
          explain:"\u6ce8\u610f"+LQ+"\u5b70"+RQ+LQ+"\u60b2"+RQ+LQ+"\u971c"+RQ+LQ+"\u6c57\u9752"+RQ+"\u7b49\u6613\u9519\u5b57\u7684\u4e66\u5199\u3002",
          gradeable:false, stemEn:"Fill in blanks from classical poetry about diligence, ambition, and patriotism.",
          answerTextEn:"Read with care; others rise even earlier; old age brings only regret; the river still flows west; don\u2019t sing of white hair; who says you\u2019re truly wise?; chrysanthemums brave the frost; I fear not being ground to dust; leave a loyal heart shining through history; who would not know you",
          explainEn:"Watch for commonly misspelled characters.", examPointEn:"Classical Poetry Dictation"
        }
      ]
    },
    {
      id:"wenyan", name:"\u6587\u8a00\u6587\u9605\u8bfb", nameEn:"Classical Chinese Reading", score:10,
      questions:[
        { num:15, type:"judgement", score:3,
          stem:"\u9605\u8bfb\u300a\u9879\u7c4d\u5f03\u4e66\u6350\u5251\u300b\uff0c\u5224\u65ad\u6b63\u8bef\u3002",
          answerText:"(1)\u221a (2)\u00d7 (3)\u221a",
          examPoint:"\u6587\u8a00\u6587\u7406\u89e3\u00b7\u5224\u65ad",
          explain:"(1)\u4e24\u4e2a"+LQ+"\u5c11"+RQ+"\u90fd\u662f"+LQ+"\u5c0f\u65f6\u5019"+RQ+"\u7684\u610f\u601d\u3002(2)\u9879\u7fbd\u5fd7\u5927\u4f46\u534a\u9014\u800c\u5e9f\uff0c\u662f"+LQ+"\u5fd7\u5927\u624d\u758f"+RQ+"\u975e"+LQ+"\u6587\u6b66\u517c\u4fee"+RQ+"\u3002(3)\u4e0d\u80af\u7adf\u5b66\u662f\u81f4\u547d\u5f31\u70b9\u3002",
          gradeable:false, stemEn:"Judge statements about Xiang Ji's story.",
          answerTextEn:"(1) \u2713 (2) \u2717 (3) \u2713",
          explainEn:"(1) Both \u5c11 mean 'young'. (2) Xiang Yu was ambitious but abandoned every subject. (3) Refusing to finish studying was his fatal weakness.", examPointEn:"Classical Chinese Comprehension"
        },
        { num:16, type:"fillBlank", score:3,
          stem:"\u7528\u6587\u4e2d\u539f\u53e5\u586b\u7a7a\u3002",
          answerText:"\u8db3\u4ee5\u8bb0\u540d\u59d3\u800c\u5df2\uff1b\u4e00\u4eba\u654c\uff0c\u4e0d\u8db3\u5b66\uff1b\u7565\u77e5\u5176\u610f\uff0c\u53c8\u4e0d\u80af\u7adf\u5b66",
          examPoint:"\u6587\u8a00\u6587\u4fe1\u606f\u63d0\u53d6",
          explain:"\u76f4\u63a5\u4ece\u539f\u6587\u4e2d\u627e\u5230\u9879\u7fbd\u5bf9\u4e66\u3001\u5251\u3001\u5175\u6cd5\u4e09\u8005\u7684\u6001\u5ea6\u539f\u53e5\u3002",
          gradeable:false, stemEn:"Fill in Xiang Yu's own words about writing, swordplay, and military strategy.",
          answerTextEn:"enough to record names; one-person skill, not worth learning; roughly grasped meaning, refused to finish",
          explainEn:"Extract direct quotes from the text.", examPointEn:"Classical Text Extraction"
        },
        { num:17, type:"openEnded", score:4,
          stem:"\u4ece\u8fd9\u4e2a\u6545\u4e8b\u4e2d\u4f60\u6709\u4f55\u611f\u609f\uff1f\u8bf7\u8054\u7cfb\u5b9e\u9645\u3002",
          answerText:"\u4e00\u4e2a\u4eba\u4e0d\u80fd\u7a7a\u6709\u5927\u5fd7\uff0c\u66f4\u91cd\u8981\u7684\u662f\u6301\u4e4b\u4ee5\u6052\u3002\u5b66\u4ec0\u4e48\u90fd\u4e0d\u80fd\u534a\u9014\u800c\u5e9f\u3002",
          examPoint:"\u6587\u8a00\u6587\u611f\u609f",
          explain:"\u56f4\u7ed5"+LQ+"\u6301\u4e4b\u4ee5\u6052"+RQ+LQ+"\u4e0d\u80fd\u534a\u9014\u800c\u5e9f"+RQ+"\u7684\u4e3b\u65e8\u4f5c\u7b54\u3002",
          gradeable:false, stemEn:"What insight did you gain? Connect to your experience.",
          answerTextEn:"One cannot rely on ambition alone \u2014 perseverance is essential. Never give up halfway.",
          explainEn:"Focus on perseverance and finishing what you start.", examPointEn:"Classical Text Reflection"
        }
      ]
    },
    {
      id:"yuedu", name:"\u73b0\u4ee3\u6587\u9605\u8bfb", nameEn:"Modern Reading", score:25,
      questions:[
        { num:18, type:"readingQA", score:3,
          stem:"\u9605\u8bfb\u300a\u5199\u7ed9\u672a\u6765\u7684\u4f60\u300b\uff0c\u6982\u62ec\u4f5c\u8005\u4e09\u65b9\u9762\u7684\u5631\u6258\u3002",
          answerText:"\u2460\u5e0c\u671b\u5b69\u5b50\u81ea\u59cb\u81f3\u7ec8\u90fd\u662f\u7406\u60f3\u4e3b\u4e49\u8005\u3002\u2461\u5e0c\u671b\u5b69\u5b50\u662f\u4e2a\u8e0f\u5b9e\u7684\u4eba\u3002\u2462\u5e0c\u671b\u5b69\u5b50\u8981\u6709\u52c7\u6c14\u6b63\u89c6\u81ea\u5df1\u7684\u7f3a\u70b9\u3002",
          examPoint:"\u5185\u5bb9\u6982\u62ec", explain:"\u4e09\u6bb5\u5206\u522b\u4ee5\u4e0d\u540c\u5e0c\u671b\u5f00\u5934\u3002",
          gradeable:false, stemEn:"Summarize the author's three pieces of advice in 'Letter to Future You'.",
          answerTextEn:"\u2460 Be an unwavering idealist. \u2461 Be down-to-earth. \u2462 Have courage to face your shortcomings.",
          explainEn:"Each paragraph opens with a clear statement of advice.", examPointEn:"Content Summary"
        },
        { num:19, type:"choice", score:2,
          stem:"\u9009\u51fa\u8868\u8ff0\u6b63\u786e\u7684\u4e00\u9879\u3002",
          options:["\u7f8e\u8c8c\u7684\u5973\u5b69\u4e00\u5b9a\u4f1a\u6d41\u4e8e\u6d45\u8584\u548c\u865a\u6d6e","\u6781\u806a\u660e\u7684\u7537\u5b69\u624d\u80fd\u6210\u5c31\u8bb8\u591a\u5927\u4e8b\u5e76\u6d41\u4e8e\u8f7b\u4f7b","\u53d1\u73b0\u7f3a\u70b9\u53ea\u4f1a\u4f7f\u4f60\u6c6e\u4e27\u548c\u81ea\u5351","\u575a\u6301\u7406\u60f3\u548c\u4fe1\u5ff5\u624d\u80fd\u62d2\u7edd\u865a\u8363\u7684\u8bf1\u60d1"],
          answer:3, answerText:"D", examPoint:"\u9605\u8bfb\u7406\u89e3",
          explain:"A\u592a\u7edd\u5bf9\uff1bB\u8bef\u5f15\uff1bC\u5ffd\u7565\u4e86"+LQ+"\u8981\u6b63\u89c6\u5b83"+RQ+"\u3002D\u6b63\u786e\u3002",
          gradeable:true, stemEn:"Which statement correctly reflects the text?",
          optionsEn:["Beautiful girls will definitely become shallow","Smart boys can achieve great things but become frivolous","Finding flaws will only cause depression","Holding ideals helps resist vanity's temptation"],
          explainEn:"A is too absolute; B misquotes; C ignores 'face it'. D is correct.", examPointEn:"Reading Comprehension"
        },
        { num:20, type:"readingQA", score:3,
          stem:"\u8054\u7cfb\u751f\u6d3b\u8c08\u8c08\u5bf9"+LQ+"\u9009\u62e9\u5e73\u5eb8\u867d\u7136\u7a33\u59a5\uff0c\u4f46\u7edd\u65e0\u8272\u5f69"+RQ+"\u7684\u7406\u89e3\u3002",
          answerText:"\u5e73\u5eb8\u6307\u6ca1\u6709\u7279\u522b\u4f18\u79c0\u7684\u72b6\u6001\u3002\u751f\u6d3b\u4e2d\u5145\u6ee1\u673a\u4f1a\u548c\u6311\u6218\uff0c\u5e94\u8be5\u52c7\u6562\u8ffd\u6c42\u68a6\u60f3\u3002",
          examPoint:"\u53e5\u5b50\u7406\u89e3", explain:"\u56f4\u7ed5\u4e0d\u6ee1\u8db3\u4e8e\u5e73\u5eb8\u3001\u52c7\u6562\u8ffd\u6c42\u7684\u4e3b\u65e8\u4f5c\u7b54\u3002",
          gradeable:false, stemEn:"What does 'Choosing mediocrity is safe but colorless' mean?",
          answerTextEn:"Mediocrity means settling for average. Life offers opportunities \u2014 dare to pursue dreams rather than settle.",
          explainEn:"Focus on rejecting mediocrity and pursuing dreams.", examPointEn:"Sentence Interpretation"
        },
        { num:21, type:"openEnded", score:2,
          stem:"\u5bf9\u672a\u6765\u7684\u81ea\u5df1\u5199\u4e00\u53e5\u8bdd\u3002",
          answerText:"\u672a\u6765\u7684\u81ea\u5df1\uff0c\u613f\u4f60\u59cb\u7ec8\u4fdd\u6301\u5bf9\u751f\u6d3b\u7684\u70ed\u7231\uff0c\u52c7\u6562\u9762\u5bf9\u6311\u6218\uff0c\u4e0d\u5fd8\u521d\u5fc3\u3002",
          examPoint:"\u5f00\u653e\u8868\u8fbe", explain:"\u5f00\u653e\u6027\u8bd5\u9898\uff0c\u56f4\u7ed5\u5bf9\u672a\u6765\u81ea\u5df1\u7684\u671f\u671b\u4f5c\u7b54\u3002",
          gradeable:false, stemEn:"Write one sentence to your future self.",
          answerTextEn:"Dear future me, always love life, face challenges bravely, and stay true to yourself.",
          explainEn:"Open-ended \u2014 any sincere message is acceptable.", examPointEn:"Open Expression"
        },
        { num:22, type:"fillBlank", score:2,
          stem:"\u4eca\u5e74\uff0c__\u6708__\u65e5\u7b2c__\u5c4a\u5168\u6c11\u9605\u8bfb\u5927\u4f1a\u5728__\u5f00\u5e55\u3002",
          answerText:"4\uff1b23\uff1b\u4e09\uff1b\u6606\u660e\u5e02",
          examPoint:"\u4fe1\u606f\u63d0\u53d6", explain:"\u4ece\u6750\u6599\u4e2d\u63d0\u53d6\u5173\u952e\u4fe1\u606f\u3002",
          gradeable:true, stemEn:"Fill in: The reading conference opened on [month] [day], [number] session, in [city].",
          answerTextEn:"April; 23; Third; Kunming",
          explainEn:"From Material 1: April 23, 2024 \u2014 3rd National Reading Conference in Kunming.", examPointEn:"Information Extraction"
        },
        { num:23, type:"readingQA", score:3,
          stem:"\u4ece\u513f\u7ae5\u5e74\u9605\u8bfb\u91cf\u5206\u5e03\u56fe\u8868\u4e2d\u63d0\u53d6\u4fe1\u606f\u3002",
          answerText:"\u2460\u513f\u7ae5\u5e74\u5e73\u5747\u9605\u8bfb\u91cf\u572811-30\u672c\u7684\u5360\u6bd4\u6700\u591a(37%)\u3002\u2461100\u672c\u4ee5\u4e0a\u7684\u5360\u6bd4\u6700\u5c11(3%)\u3002",
          examPoint:"\u56fe\u8868\u5206\u6790", explain:"\u63d0\u53d6\u6700\u5927\u503c\u548c\u6700\u5c0f\u503c\u3002",
          gradeable:false, stemEn:"What information can you extract from the children's reading chart?",
          answerTextEn:"\u2460 11-30 books/year is the largest group (37%). \u2461 100+ books/year is the smallest (3%).",
          explainEn:"Identify highest and lowest proportions.", examPointEn:"Chart Analysis"
        },
        { num:24, type:"openEnded", score:3,
          stem:"\u5206\u4eab\u4f60\u53c2\u52a0\u8fc7\u7684\u4e3b\u9898\u9605\u8bfb\u6d3b\u52a8\u6536\u83b7\u3002",
          answerText:"\u53c2\u52a0\u56fe\u4e66\u6f02\u6d41\u6d3b\u52a8\uff0c\u62d3\u5bbd\u4e86\u9605\u8bfb\u89c6\u91ce\uff0c\u63d0\u5347\u4e86\u9605\u8bfb\u7406\u89e3\u80fd\u529b\u3002",
          examPoint:"\u5f00\u653e\u8868\u8fbe", explain:"\u7ed3\u5408\u5b9e\u9645\u7ecf\u5386\u4f5c\u7b54\u3002",
          gradeable:false, stemEn:"Share your experience from a reading activity.",
          answerTextEn:"I joined a 'Book Drift' event, broadening my reading horizons and improving comprehension through discussions.",
          explainEn:"Share a specific reading activity and your gains.", examPointEn:"Open Expression"
        },
        { num:25, type:"openEnded", score:2,
          stem:"\u4e3a\u63a8\u52a8\u5168\u6c11\u9605\u8bfb\u63d0\u51fa\u4e24\u6761\u5ba3\u4f20\u6807\u8bed\u3002",
          answerText:"\u2460\u4ee5\u9605\u8bfb\u6ecb\u517b\u5fc3\u7075\uff0c\u8ba9\u667a\u6167\u7167\u4eae\u672a\u6765\u3002\u2461\u4e66\u9999\u6d78\u6da6\u57ce\u5e02\uff0c\u9605\u8bfb\u4e30\u5bcc\u4eba\u751f\u3002",
          examPoint:"\u5ba3\u4f20\u6807\u8bed", explain:"\u7d27\u6263\u4e3b\u9898\uff0c\u7b80\u6d01\u5bf9\u4ed7\u3002",
          gradeable:false, stemEn:"Create two slogans to promote reading.",
          answerTextEn:"\u2460 Let reading nourish the soul, let wisdom light the future. \u2461 Books permeate the city, reading enriches life.",
          explainEn:"Concise, paired slogans about reading.", examPointEn:"Slogan Writing"
        }
      ]
    },
    {
      id:"xiezuo", name:"\u4e60\u4f5c\u4e0e\u8868\u8fbe", nameEn:"Writing & Expression", score:30,
      questions:[
        { num:26, type:"openEnded", score:10,
          stem:"\u505a\u5bb6\u4e61\u7684\u4ee3\u8a00\u4eba\uff0c\u4ecb\u7ecd\u5bb6\u4e61\u7279\u8272\u3002",
          answerText:"(\u793a\u4f8b)\u6ec7\u6c60\u4f4d\u4e8e\u4e91\u5357\u6606\u660e\uff0c\u662f\u4e2d\u56fd\u6700\u5927\u7684\u9ad8\u539f\u6e56\u6cca\u4e4b\u4e00\uff0c\u88ab\u8a89\u4e3a"+LQ+"\u5357\u65b9\u660e\u73e0"+RQ+"\u3002",
          examPoint:"\u63a8\u8350\u4ecb\u7ecd", explain:"\u6293\u4f4f\u4e3b\u8981\u7279\u70b9\u4ecb\u7ecd\u3002",
          gradeable:false, stemEn:"Be a hometown spokesperson. Introduce a specialty or scenic spot.",
          answerTextEn:"(Example) Dianchi Lake in Kunming is one of China's largest plateau lakes, known as the 'Pearl of the South'.",
          explainEn:"Introduce a hometown feature with specific details.", examPointEn:"Hometown Introduction"
        },
        { num:27, type:"composition", score:20,
          stem:"\u4ee5"+LQ+"__\u7684\u90a3\u4e00\u523b"+RQ+"\u4e3a\u9898\u5199\u4e00\u7bc7\u6587\u7ae0\u3002\u4e0d\u5c11\u4e8e400\u5b57\u3002",
          answerText:"(\u53c2\u8003\u8303\u6587)\u300a\u6218\u80dc\u6050\u60e7\u7684\u90a3\u4e00\u523b\u300b\u8bb2\u8ff0\u653b\u5ca9\u514b\u670d\u6050\u60e7\u7684\u7ecf\u5386\uff0c\u4f53\u73b0\u6311\u6218\u81ea\u6211\u3001\u8d85\u8d8a\u6781\u9650\u7684\u4e3b\u9898\u3002",
          examPoint:"\u534a\u547d\u9898\u4f5c\u6587",
          explain:"\u534a\u547d\u9898\u4f5c\u6587\uff0c\u5173\u952e\u8bcd"+LQ+"\u90a3\u4e00\u523b"+RQ+"\u2014\u2014\u9009\u62e9\u4e00\u4e2a\u5177\u4f53\u7684\u7a81\u7834\u65f6\u523b\u3002",
          gradeable:false, stemEn:"Write an essay titled '__ That Moment'. At least 400 characters.",
          answerTextEn:"(Example) 'The Moment I Conquered Fear' \u2014 overcoming fear during rock climbing, embodying self-challenge.",
          explainEn:"Semi-open topic. Choose a specific breakthrough moment with vivid description.", examPointEn:"Semi-Open Topic Composition"
        }
      ]
    }
  ]
};

// pl2024b paper (abbreviated for space - using same pattern)
const pl2024b = {
  id:"pl2024b", year:2024, region:"\u4e91\u5357\u7701", city:"\u6606\u660e\u5e02", district:"\u76d8\u9f99\u533a",
  title:"\u76d8\u9f99\u533a2024\u5b66\u5e74\u516d\u5e74\u7ea7\u4e0b\u5b66\u671f\u671f\u672b\u6bd5\u4e1a\u8003\u8bd5\u8bed\u6587\u8bd5\u5377",
  titleEn:"Kunming Panlong District 2024 Grade 6 Second-Semester Final Exam",
  totalScore:100, duration:120, hasAnswers:true, hasAnalysis:true, source:"district",
  sections:[
    {
      id:"jilei", name:"\u79ef\u7d2f\u4e0e\u8fd0\u7528", nameEn:"Accumulation & Application", score:34,
      questions:[
        { num:1, type:"pinyinWrite", score:9,
          stem:"\u6839\u636e\u62fc\u97f3\u628a\u8fd9\u6bb5\u6587\u5b57\u8865\u5145\u5b8c\u6574\uff08\u515a\u53f2\u9605\u8bfb\u7bc7\u7ae0\uff09\uff0c\u5e76\u5de5\u6574\u62b7\u5199\u6d41\u6c99\u6cb3\u540d\u53e5\u3002",
          answerText:"(1)\u4fb5\u88ad\uff1b\u538b\u8feb\uff1b\u5bc4\u6258\uff1b\u503e\u8986\uff1b\u622a\u7136\u4e0d\u540c\uff1b\u5174\u65fa\n(2)\u7406\u60f3\u662f\u706f\uff0c\u7167\u4eae\u591c\u884c\u7684\u8def\uff1b\u7406\u60f3\u662f\u8def\uff0c\u5f15\u4f60\u8d70\u5230\u9ece\u660e\u3002",
          examPoint:"\u770b\u62fc\u97f3\u5199\u8bcd\u8bed\u00b7\u62b7\u5199",
          explain:"\u6ce8\u610f"+LQ+"\u88ad"+RQ+LQ+"\u8986"+RQ+LQ+"\u622a"+RQ+"\u7b49\u96be\u5199\u5b57\u3002",
          gradeable:false, stemEn:"Fill in characters from pinyin in a Party history passage, then neatly copy a quote by Liu Shahe.",
          answerTextEn:"(1) invasion; oppression; aspiration; overthrow; completely different; prosperous\n(2) Ideals are lamps lighting the night road; ideals are roads leading you to dawn.",
          explainEn:"Watch for complex characters: \u88ad, \u8986, \u622a.", examPointEn:"Pinyin to Characters \u00b7 Handwriting"
        },
        { num:2, type:"choice", score:2,
          stem:"\u53e5\u5b50\u4e2d\u52a0\u70b9\u7684\u56db\u5b57\u8bcd\u8fd0\u7528\u6709\u8bef\u7684\u4e00\u9879\u662f",
          options:["\u91cd\u89c1\u5929\u65e5","\u7115\u7136\u4e00\u65b0","\u5fc3\u5e73\u6c14\u548c","\u500d\u611f\u632f\u594b"],
          answer:2, answerText:"C", examPoint:"\u6210\u8bed\u8fd0\u7528",
          explain:LQ+"\u5fc3\u5e73\u6c14\u548c"+RQ+"\u5f62\u5bb9\u4e0d\u6025\u8e81\uff0c\u7528\u5728\u79d1\u5b66\u7a81\u7834\u8bed\u5883\u4e2d\u4e0d\u6070\u5f53\u3002",
          gradeable:true, stemEn:"Which idiom is used incorrectly?",
          optionsEn:["see daylight again","completely renewed","calm and composed","greatly encouraged"],
          explainEn:"\u5fc3\u5e73\u6c14\u548c doesn't fit the context of scientific breakthroughs.", examPointEn:"Idiom Usage"
        },
        { num:3, type:"choice", score:2,
          stem:LQ+"\u7136"+RQ+"\u5b57\u8bcd\u4e49\u8fa8\u6790\uff1a\u54ea\u9879\u662f"+LQ+"\u8bcd\u5c3e"+RQ+"\u7528\u6cd5\uff1f",
          options:["\u6021\u7136\u81ea\u5f97","\u4fe1\u7136","\u975e\u7136\u4e5f","\u5904\u58eb\u7b11\u800c\u7136\u4e4b"],
          answer:0, answerText:"A", examPoint:"\u591a\u4e49\u5b57\u8fa8\u6790",
          explain:"\u6021\u7136\u81ea\u5f97\u7684"+LQ+"\u7136"+RQ+"\u662f\u8bcd\u5c3e\uff08\u2026\u7684\u6837\u5b50\uff09\u3002",
          gradeable:true, stemEn:"Which usage of \u7136 means 'suffix (appearance)'?",
          optionsEn:["\u6021\u7136\u81ea\u5f97 \u2014 suffix","\u4fe1\u7136 \u2014 indeed so","\u975e\u7136\u4e5f \u2014 not so","\u7136\u4e4b \u2014 agreed"],
          explainEn:"In \u6021\u7136, \u7136 is a suffix meaning 'in such a manner'.", examPointEn:"Polysemous Character"
        },
        { num:4, type:"choice", score:2,
          stem:"\u9009\u51fa\u6700\u4f53\u73b0"+LQ+"\u521b\u65b0\u8fdb\u53d6\u7cbe\u795e"+RQ+"\u7684\u540d\u8a00\u3002",
          options:["\u82df\u65e5\u65b0\uff0c\u65e5\u65e5\u65b0\uff0c\u53c8\u65e5\u65b0","\u9752\uff0c\u53d6\u4e4b\u4e8e\u84dd\u800c\u9752\u4e8e\u84dd","\u83ab\u9053\u541b\u884c\u65e9\uff0c\u66f4\u6709\u65e9\u884c\u4eba","\u4e09\u4eba\u884c\uff0c\u5fc5\u6709\u6211\u5e08\u7109"],
          answer:0, answerText:"A", examPoint:"\u540d\u8a00\u8fd0\u7528",
          explain:LQ+"\u82df\u65e5\u65b0\uff0c\u65e5\u65e5\u65b0\uff0c\u53c8\u65e5\u65b0"+RQ+"\u5f3a\u8c03\u4e0d\u65ad\u521b\u65b0\u3002",
          gradeable:true, stemEn:"Which quote best matches 'innovative spirit'?",
          optionsEn:["Renew yourself daily","Blue surpasses indigo","Others are even earlier","Among three, one is my teacher"],
          explainEn:"'Renew yourself daily' best matches innovation.", examPointEn:"Classical Quote Application"
        },
        { num:5, type:"openEnded", score:3,
          stem:"\u5c0f\u5b66\u751f\u5e94\u8be5\u5982\u4f55\u4f7f\u7528\u7535\u5b50\u4ea7\u54c1\u6765\u8f85\u52a9\u5b66\u4e60\uff1f",
          answerText:"\u9009\u62e9\u9002\u5408\u81ea\u5df1\u5e74\u9f84\u7684\u8bbe\u5907\uff0c\u6bcf\u5929\u4e0d\u8d85\u8fc7\u4e00\u5c0f\u65f6\uff0c\u4e3b\u8981\u7528\u4e8e\u67e5\u9605\u5b66\u4e60\u8d44\u6599\u3002",
          examPoint:"\u5f00\u653e\u8868\u8fbe", explain:"\u4ece\u4f7f\u7528\u65f6\u95f4\u3001\u65b9\u5f0f\u3001\u76ee\u7684\u7b49\u65b9\u9762\u4f5c\u7b54\u3002",
          gradeable:false, stemEn:"How should students use electronic devices for learning?",
          answerTextEn:"Choose age-appropriate devices, limit to under one hour daily, primarily for research.",
          explainEn:"Address usage time, purpose, and boundaries.", examPointEn:"Open Expression"
        },
        { num:6, type:"fillBlank", score:10,
          stem:"\u53e4\u8bd7\u6587\u3001\u73b0\u4ee3\u6563\u6587\u540d\u53e5\u9ed8\u5199\u3002",
          answerText:"\u76c8\u76c8\u4e00\u6c34\u95f4\uff1b\u5524\u53d6\u5f52\u6765\u540c\u4f4f\uff1b\u6625\u98ce\u53c8\u7eff\u6c5f\u5357\u5cb8\uff1b\u660e\u6708\u4f55\u65f6\u7167\u6211\u8fd8\uff1b\u5927\u6f20\u6c99\u5982\u96ea\uff1b\u71d5\u5c71\u6708\u4f3c\u94a9\uff1b\u5f98\u5f8a\uff1b\u5fae\u98ce\uff1b\u84b8\u878d\uff1b\u6279\u8bc4",
          examPoint:"\u53e4\u8bd7\u6587\u00b7\u73b0\u4ee3\u6587\u9ed8\u5199",
          explain:"\u6ce8\u610f"+LQ+"\u76c8"+RQ+LQ+"\u5f98\u5f8a"+RQ+LQ+"\u84b8\u878d"+RQ+"\u7684\u4e66\u5199\u3002",
          gradeable:false, stemEn:"Fill in classical poetry and modern prose quotes.",
          answerTextEn:"a river shimmering between; call spring back; spring breeze greens the south bank; when will the moon shine me home; desert sand like snow; Yanshan moon like a hook; lingering; breeze; evaporated; criticism",
          explainEn:"Covers classical poetry and modern prose. Watch for tricky characters.", examPointEn:"Poetry & Prose Dictation"
        },
        { num:7, type:"openEnded", score:2,
          stem:"\u6839\u636e\u4eba\u7269\u540d\u7247\u5199\u6bd5\u4e1a\u8d60\u8a00\u3002",
          answerText:"(\u793a\u4f8b)\u4f73\u4f73\uff0c\u4f60\u4e50\u4e8e\u52a9\u4eba\u3001\u6210\u7ee9\u4f18\u5f02\uff0c\u5e0c\u671b\u4f60\u7ee7\u7eed\u4fdd\u6301\u8c26\u865a\uff0c\u672a\u6765\u66f4\u52a0\u7cbe\u5f69\uff01",
          examPoint:"\u8d60\u8a00\u5199\u4f5c", explain:"\u7a81\u51fa\u4f18\u70b9\uff0c\u59d4\u5a49\u63d0\u9192\u4e0d\u8db3\u3002",
          gradeable:false, stemEn:"Write a graduation message for a friend.",
          answerTextEn:"(Example) Jiajia, you're kind and outstanding. Stay humble \u2014 your future will be even brighter!",
          explainEn:"Highlight strengths, gently mention weakness.", examPointEn:"Farewell Message"
        },
        { num:8, type:"choice", score:2,
          stem:"\u54ea\u9879\u6750\u6599\u4e0d\u7b26\u5408"+LQ+"\u5c11\u5e74\u5f53\u5fd7\u5b58\u9ad8\u8fdc"+RQ+"\u4e3b\u9898\uff1f",
          options:["\u534e\u7f57\u5e9a\u4ece\u5c0f\u7acb\u5fd7\u653b\u767b\u6570\u5b66\u9ad8\u5cf0","\u674e\u5b81\u81ea\u5e7c\u7acb\u5fd7\u523b\u82e6\u7ec3\u4e60\u4f53\u64cd","\u5468\u6069\u6765\u4ece\u5c0f\u7acb\u5fd7"+LQ+"\u4e3a\u4e2d\u534e\u4e4b\u5d1b\u8d77\u800c\u8bfb\u4e66"+RQ,"\u96f7\u950b\u5168\u5fc3\u5168\u610f\u4e3a\u4eba\u6c11\u670d\u52a1"],
          answer:3, answerText:"D", examPoint:"\u6750\u6599\u7b5b\u9009",
          explain:"A/B/C\u90fd\u662f"+LQ+"\u5c11\u5e74\u7acb\u5fd7"+RQ+"\u7684\u5178\u578b\uff1bD\u662f"+LQ+"\u5949\u732e"+RQ+"\u4e3b\u9898\u3002",
          gradeable:true, stemEn:"Which material does NOT fit 'Youth should aim high'?",
          optionsEn:["Hua Luogeng \u2014 math aspiration","Li Ning \u2014 Olympic aspiration","Zhou Enlai \u2014 study for China's rise","Lei Feng \u2014 serving the people"],
          explainEn:"A/B/C are about youthful ambition. D is about dedication, not aiming high.", examPointEn:"Theme-Based Material Selection"
        }
      ]
    },
    {
      id:"yuedu", name:"\u9605\u8bfb\u4e0e\u9274\u8d4f", nameEn:"Reading & Appreciation", score:36,
      questions:[
        { num:9, type:"fillBlank", score:2, stem:"\u300a\u753b\u86c7\u6dfb\u8db3\u300b\u4e2d"+LQ+"\u8db3"+RQ+"\u7684\u4e0d\u540c\u542b\u4e49\u3002", answerText:"\u2460\u591f \u2461\u753b\u811a", examPoint:"\u6587\u8a00\u6587\u00b7\u591a\u4e49\u5b57", explain:LQ+"\u4e0d\u8db3"+RQ+"\u7684"+LQ+"\u8db3"+RQ+"\u662f"+LQ+"\u591f"+RQ+"\uff1b"+LQ+"\u4e3a\u86c7\u8db3"+RQ+"\u7684"+LQ+"\u8db3"+RQ+"\u662f\u540d\u8bcd"+LQ+"\u811a"+RQ+"\u3002", gradeable:false, stemEn:"Explain different meanings of \u8db3 in 'Drawing Legs on a Snake'.", answerTextEn:"\u2460 enough \u2461 legs/feet", explainEn:"In \u4e0d\u8db3, \u8db3 means 'enough'; in \u4e3a\u86c7\u8db3, \u8db3 means 'legs'.", examPointEn:"Classical Chinese Polysemy" },
        { num:10, type:"judgement", score:2, stem:"\u300a\u753b\u86c7\u6dfb\u8db3\u300b\u4e2d"+LQ+"\u4e4b"+RQ+"\u548c"+LQ+"\u4ea1"+RQ+"\u7684\u8bcd\u4e49\u5224\u65ad\u3002", answerText:"\u2460\u00d7 \u2461\u221a", examPoint:"\u6587\u8a00\u6587\u00b7\u865a\u8bcd\u8fa8\u6790", explain:"\u2460\u524d\u4e00\u4e2a"+LQ+"\u4e4b"+RQ+"\u662f\u4ee3\u8bcd\uff0c\u540e\u4e00\u4e2a\u662f\u52a9\u8bcd\u3002\u2461\u4e24\u4e2a"+LQ+"\u4ea1"+RQ+"\u90fd\u662f"+LQ+"\u5931\u53bb"+RQ+"\u3002", gradeable:false, stemEn:"Judge if \u4e4b and \u4ea1 have the same meaning in both phrases.", answerTextEn:"\u2460 \u2717 \u2461 \u2713", explainEn:"\u2460 First \u4e4b is pronoun, second is particle. \u2461 Both \u4ea1 mean 'lose'.", examPointEn:"Classical Chinese Function Words" },
        { num:11, type:"fillBlank", score:2, stem:"\u7ffb\u8bd1\uff1a\u86c7\u56fa\u65e0\u8db3\uff0c\u5b50\u5b89\u80fd\u4e3a\u4e4b\u8db3\uff1f", answerText:"\u86c7\u672c\u6765\u6ca1\u6709\u811a\uff0c\u4f60\u600e\u4e48\u80fd\u7ed9\u5b83\u6dfb\u4e0a\u811a\u5462\uff1f", examPoint:"\u6587\u8a00\u6587\u7ffb\u8bd1", explain:"\u56fa=\u672c\u6765\uff1b\u5b50=\u4f60\uff1b\u5b89\u80fd=\u600e\u80fd\u3002", gradeable:false, stemEn:"Translate: Snakes inherently have no legs \u2014 how can you draw legs for it?", answerTextEn:"Snakes have no legs \u2014 how can you add legs to it?", explainEn:"\u56fa=inherently; \u5b50=you; \u5b89\u80fd=how can.", examPointEn:"Classical Chinese Translation" },
        { num:12, type:"readingQA", score:2, stem:"\u4e00\u820d\u4eba"+LQ+"\u7ec8\u4ea1\u5176\u9152"+RQ+"\u7684\u539f\u56e0\u662f\u4ec0\u4e48\uff1f", answerText:"\u86c7\u672c\u6765\u6ca1\u6709\u811a\uff0c\u4ed6\u5374\u591a\u6b64\u4e00\u4e3e\u753b\u4e0a\u811a\uff0c\u5bfc\u81f4\u53e6\u4e00\u4eba\u5148\u5b8c\u6210\u5e76\u593a\u8d70\u4e86\u9152\u3002", examPoint:"\u6587\u8a00\u6587\u00b7\u56e0\u679c\u5206\u6790", explain:"\u539f\u6587\u70b9\u660e\u539f\u56e0\u3002", gradeable:false, stemEn:"Why did the man lose his wine?", answerTextEn:"He unnecessarily drew legs on his completed snake, allowing another person to finish first.", explainEn:"He lost by adding unnecessary embellishments.", examPointEn:"Classical Chinese Causal Analysis" },
        { num:13, type:"openEnded", score:3, stem:LQ+"\u8fc7\u72b9\u4e0d\u53ca"+RQ+"\u4e0e\u300a\u753b\u86c7\u6dfb\u8db3\u300b\u7684\u8054\u7cfb\u3002", answerText:"\u4e24\u8005\u90fd\u8bf4\u660e\u505a\u4e8b\u8fc7\u5934\u548c\u4e0d\u591f\u4e00\u6837\u4e0d\u597d\u3002\u5e94\u9002\u53ef\u800c\u6b62\u3002", examPoint:"\u6210\u8bed\u7406\u89e3", explain:"\u5c06\u4e24\u8005\u4e3b\u65e8\u8054\u7cfb\u8d77\u6765\u3002", gradeable:false, stemEn:"How does '\u8fc7\u72b9\u4e0d\u53ca' relate to the snake-legs story?", answerTextEn:"Both teach that overdoing is as bad as underdoing. Know when to stop.", explainEn:"Connect both themes: excess equals deficiency.", examPointEn:"Idiom & Story Connection" },
        { num:14, type:"judgement", score:3, stem:"\u4f53\u80b2\u8fd0\u52a8\u6750\u6599\u5224\u65ad\u3002", answerText:"\u2460\u221a \u2461\u221a \u2462\u00d7", examPoint:"\u4fe1\u606f\u5224\u65ad", explain:"\u2460\u6b63\u786e\u3002\u2461\u6b63\u786e\u3002\u2462\u9519\u8bef\uff0c\u6750\u6599\u8bf4"+LQ+"\u6709\u5f88\u591a\u6a21\u5f0f"+RQ+"\u3002", gradeable:false, stemEn:"Judge sports material statements.", answerTextEn:"\u2460 \u2713 \u2461 \u2713 \u2462 \u2717", explainEn:"\u2462 Wrong \u2014 the text says 'many models', not 'only three'.", examPointEn:"Information Judgment" },
        { num:15, type:"fillBlank", score:3, stem:"\u8bf4\u660e\u65b9\u6cd5\u53ca\u4f5c\u7528\u3002", answerText:"\u4e3e\u4f8b\u5b50\uff1b\u5217\u6570\u5b57\uff1b\u5177\u4f53\u8bf4\u660e\u4e86\u9879\u76ee\u591a\u3002", examPoint:"\u8bf4\u660e\u65b9\u6cd5", explain:"\u4e3e\u4f8b+\u5217\u6570\u5b57\u3002", gradeable:false, stemEn:"What explanation methods are used?", answerTextEn:"Giving examples; listing numbers; specifically describes the many events.", explainEn:"Examples + numbers.", examPointEn:"Explanation Methods" },
        { num:16, type:"readingQA", score:3, stem:"\u4f60\u540c\u610f\u54ea\u4f4d\u73ed\u59d4\u7684\u89c2\u70b9\uff1f", answerText:"\u540c\u610f\u4f53\u80b2\u59d4\u5458\u3002\u4f53\u80b2\u4e0d\u4ec5\u5173\u4e4e\u6210\u7ee9\uff0c\u8fd8\u80fd\u589e\u5f3a\u4f53\u8d28\u3001\u4f7f\u4eba\u7ec8\u8eab\u53d7\u76ca\u3002", examPoint:"\u89c2\u70b9\u9610\u8ff0", explain:"\u7ed3\u5408\u8881\u9686\u5e73\u4f8b\u5b50\u652f\u6491\u3002", gradeable:false, stemEn:"Which committee member's view would you support?", answerTextEn:"The PE committee member. Sports benefit lifelong health, not just grades.", explainEn:"Support with the Yuan Longping example.", examPointEn:"Opinion Expression" },
        { num:17, type:"choice", score:2, stem:"\u300a\u957f\u5728\u6811\u4e0a\u7684\u7cbd\u5b50\u300b\u53d9\u4e8b\u987a\u5e8f\u3002", options:["\u7b2c\u2461\u81ea\u7136\u6bb5\u540e","\u7b2c\u2462\u81ea\u7136\u6bb5\u540e","\u7b2c\u2463\u81ea\u7136\u6bb5\u540e","\u7b2c\u2464\u81ea\u7136\u6bb5\u540e"], answer:2, answerText:"C", examPoint:"\u53d9\u4e8b\u987a\u5e8f", explain:"\u7b2c\u2463\u6bb5\u5199\u5b69\u5b50\u544a\u77e5\u7236\u6bcd\uff0c\u7236\u6bcd\u8fde\u591c\u505a\u7cbd\u5b50\u5e94\u5728\u5176\u540e\u3002", gradeable:true, stemEn:"In chronological order, paragraph \u246b belongs after which paragraph?", optionsEn:["After \u2461","After \u2462","After \u2463","After \u2464"], explainEn:"The child tells parents in \u2463; parents making zongzi overnight follows.", examPointEn:"Narrative Sequence" },
        { num:18, type:"fillBlank", score:2, stem:"\u4e09\u5904\u753b\u7ebf\u53e5\u5b50\u63cf\u5199\u4e86\u7cbd\u5b50\u7684__\u3002", answerText:"\u5f62\u72b6\u3001\u5927\u5c0f\u3001\u989c\u8272\u3001\u5473\u9053", examPoint:"\u63cf\u5199\u89d2\u5ea6", explain:"\u591a\u611f\u5b98\u89d2\u5ea6\u63cf\u5199\u3002", gradeable:false, stemEn:"The underlined sentences describe the zongzi's __.", answerTextEn:"shape, size, color, and taste", explainEn:"Multi-sensory descriptions.", examPointEn:"Descriptive Angles" },
        { num:19, type:"choice", score:2, stem:"\u8868\u8fbe\u65b9\u6cd5\u7406\u89e3\u3002", options:["\u501f\u52a9\u5177\u4f53\u4e8b\u7269\u8868\u8fbe\u611f\u60c5","\u4ece\u51e0\u4e2a\u65b9\u9762\u628a\u4e8b\u7269\u5199\u6e05\u695a","\u8fd0\u7528\u5177\u4f53\u4e8b\u4f8b\u8bf4\u660e\u89c2\u70b9","\u6293\u4f4f\u4e8b\u7269\u7684\u7279\u70b9\u5199\u5177\u4f53"], answer:3, answerText:"D", examPoint:"\u5199\u4f5c\u624b\u6cd5", explain:"\u6293\u4f4f\u7cbd\u5b50\u7279\u70b9\u6765\u5199\u5177\u4f53\u3002", gradeable:true, stemEn:"Which writing technique best describes the underlined sentences?", optionsEn:["Express emotions through objects","Describe from multiple aspects","Use examples to prove a point","Capture features in detail"], explainEn:"The sentences capture specific features of zongzi vividly.", examPointEn:"Writing Technique" },
        { num:20, type:"readingQA", score:4, stem:"\u7406\u89e3"+LQ+"\u90a3\u5e74\u7cbd\u5b50\u957f\u5728\u6811\u4e0a\u7684\u7ecf\u5386\uff0c\u6c38\u8fdc\u90fd\u662f\u6211\u6700\u6000\u5ff5\u7684\u7aef\u5348\u8bb0\u5fc6"+RQ+"\u3002", answerText:"\u7236\u6bcd\u4e3a\u6ee1\u8db3\u5b69\u5b50\u613f\u671b\u8fde\u591c\u505a\u7cbd\u5b50\u6302\u5728\u6811\u4e0a\u3002\u8bb0\u5fc6\u627f\u8f7d\u7684\u662f\u7236\u6bcd\u65e0\u79c1\u7684\u7231\u3002", examPoint:"\u53e5\u5b50\u7406\u89e3\u00b7\u4e3b\u65e8", explain:"\u8868\u9762\u5199\u7cbd\u5b50\uff0c\u6df1\u5c42\u5199\u7236\u6bcd\u7684\u7231\u3002", gradeable:false, stemEn:"How do you understand this sentence?", answerTextEn:"Parents secretly made zongzi and hung them on trees. The memory treasures parental love, not just the taste.", explainEn:"Surface: zongzi. Deeper: parental love.", examPointEn:"Sentence Understanding \u00b7 Theme" }
      ]
    },
    {
      id:"xiezuo", name:"\u8868\u8fbe\u4e0e\u9274\u8d4f", nameEn:"Expression & Appreciation", score:30,
      questions:[
        { num:21, type:"composition", score:30,
          stem:"\u4efb\u9009\u4e00\u9898\uff1a\u2460\u96be\u5fd8\u7684\u77ac\u95f4\uff1b\u2461\u300a\u90a3\u662f\u4e00\u9053\u98ce\u666f\u300b\u3002",
          answerText:"(\u53c2\u8003\u8303\u6587\u4e00)\u300a\u96e8\u4e2d\u7684\u4f1e\u300b\u2014\u2014\u670b\u53cb\u501f\u4f1e\u7684\u6e29\u6696\u6545\u4e8b\u3002(\u53c2\u8003\u8303\u6587\u4e8c)\u300a\u90a3\u662f\u4e00\u9053\u98ce\u666f\u300b\u2014\u2014\u4ea4\u8b66\u5e2e\u52a9\u4fee\u7406\u81ea\u884c\u8f66\u7684\u611f\u4eba\u7ecf\u5386\u3002",
          examPoint:"\u547d\u9898/\u81ea\u547d\u9898\u4f5c\u6587",
          explain:"\u9898\u76ee\u4e00\u4e3a\u81ea\u547d\u9898\u53d9\u4e8b\u4f5c\u6587\u3002\u9898\u76ee\u4e8c"+LQ+"\u98ce\u666f"+RQ+"\u4e0d\u9650\u4e8e\u81ea\u7136\u666f\u8272\uff0c\u53ef\u5199\u4eba\u6216\u4e8b\u3002",
          gradeable:false, stemEn:"Choose one: \u2460 An unforgettable moment; \u2461 'That Is a Scenery'.",
          answerTextEn:"(Example 1) 'The Umbrella in the Rain' \u2014 a friend lending an umbrella. (Example 2) 'That Is a Scenery' \u2014 a traffic officer helping repair a bicycle.",
          explainEn:"Topic 1: Free-title narrative. Topic 2: 'Scenery' is metaphorical.", examPointEn:"Narrative Composition"
        }
      ]
    }
  ]
};

// --- Main: inject into xcsc_data.js ---
const filePath = path.join(__dirname, '..', 'xcsc_data.js');
let src = fs.readFileSync(filePath, 'utf8');

const endMarker = '\n  ]\n};';
const idx = src.lastIndexOf(endMarker);
if (idx === -1) { console.error('Cannot find papers array end'); process.exit(1); }

const indent = '    ';
const cg = JSON.stringify(cg2024b, null, 4).split('\n').map(l => indent + l).join('\n');
const pl = JSON.stringify(pl2024b, null, 4).split('\n').map(l => indent + l).join('\n');
const newData = ',\n' + cg + ',\n' + pl;

src = src.slice(0, idx) + newData + endMarker;
src = src.replace(/\* 16 papers from/, '* 18 papers from');

fs.writeFileSync(filePath, src, 'utf8');

// Validate
try {
  const m = src.match(/window\.XCSC_DATA\s*=\s*(\{[\s\S]*\});/);
  if (m) {
    const data = JSON.parse(m[1]);
    let totalQ = 0;
    data.papers.forEach(p => p.sections.forEach(s => { totalQ += s.questions.length; }));
    console.log('\u2705 xcsc_data.js updated: ' + data.papers.length + ' papers, ' + totalQ + ' questions');
    const newPapers = data.papers.filter(p => p.id === 'cg2024b' || p.id === 'pl2024b');
    newPapers.forEach(p => {
      const q = p.sections.reduce((a,s) => a + s.questions.length, 0);
      console.log('  + ' + p.id + ': ' + p.title + ' (' + q + ' questions)');
    });
  }
} catch (e) { console.error('\u274c Validation failed:', e.message); process.exit(1); }
