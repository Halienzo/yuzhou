/**
 * b2_km2017.js - 2017 Kunming exam paper data (no answer key)
 */
const LQ = '\u201C';
const RQ = '\u201D';

module.exports = {
  id: "km2017", year: 2017, region: "\u4e91\u5357\u7701", city: "\u6606\u660e\u5e02",
  district: "",
  title: "2017\u5e74\u4e91\u5357\u7701\u6606\u660e\u5e02\u8bed\u6587\u5c0f\u5347\u521d\u8bd5\u5377",
  titleEn: "2017 Yunnan Kunming Primary-to-Junior Chinese Exam",
  totalScore: 100, duration: 120, hasAnswers: false, hasAnalysis: false, source: "city",
  sections: [
    {
      id: "jichu", name: "\u57fa\u7840\u77e5\u8bc6", nameEn: "Foundational Knowledge", score: 28,
      questions: [
        { num:1, type:"pinyinWrite", score:8,
          stem: "\u6839\u636e\u62fc\u97f3\uff0c\u628a\u6c49\u5b57\u6216\u8bcd\u8bed\u5de5\u6574\u5730\u5199\u5728\u62ec\u53f7\u548c\u7530\u5b57\u683c\u91cc\u3002\ny\u00e1ng\uff1a\u6d0b\uff08\u3000\uff09\u3001\u575a\uff08\u3000\uff09\u3001\uff08\u3000\uff09\u7acb\u3001\u98d8\uff08\u3000\uff09\ny\u00f9\uff1a\u72b9\uff08\u3000\uff09\u3001\u62b5\uff08\u3000\uff09\u3001\u5bcc\uff08\u3000\uff09\u3001\uff08\u3000\uff09\u8a00\n\u53e6\u5199\u56db\u4e2a\u8bcd\u8bed\u5728\u7530\u5b57\u683c\u91cc\u3002",
          answerText: "\u6d0b\u6ea2\u3001\u575a\u6bc5\u3001\u5c79\u7acb\u3001\u98d8\u626c\uff1b\u72b9\u8c6b\u3001\u62b5\u5fa1\u3001\u5bcc\u88d5\u3001\u5bd3\u8a00",
          examPoint: "\u62fc\u97f3\u5199\u5b57",
          explain: "y\u00e1ng\u97f3\u5b57\uff1a\u6ea2\u3001\u6bc5\u3001\u5c79\u3001\u626c\uff1by\u00f9\u97f3\u5b57\uff1a\u8c6b\u3001\u5fa1\u3001\u88d5\u3001\u5bd3\u3002\u7530\u5b57\u683c\u8bcd\u8bed\u7b54\u6848\u4e0d\u552f\u4e00\u3002",
          gradeable: false,
          stemEn: "Write characters for y\u00e1ng group (ocean_, firm_, _stand, float_) and y\u00f9 group (still_, resist_, rich_, _speech), plus 4 words in grid.",
          answerTextEn: "overflow, resolute, stand tall, flutter; hesitate, resist, abundant, fable",
          explainEn: "y\u00e1ng: \u6ea2\u6bc5\u5c79\u626c; y\u00f9: \u8c6b\u5fa1\u88d5\u5bd3. Grid answers vary.",
          examPointEn: "Pinyin to Characters"
        },
        { num:2, type:"fillBlank", score:9,
          stem: "\u5148\u8865\u5145\u4e0b\u5217\u6210\u8bed\uff0c\u518d\u9009\u51fa\u90fd\u662f\u8912\u4e49\u8bcd\u7684\u4e00\u7ec4\u3002\n1.\u98a0(\u3000)\u6d41\u79bb \u987e\u540d\u601d(\u3000) \u55f7\u55f7\u5f85(\u3000) \u660e\u5bdf\u79cb(\u3000)\n2.(\u3000)\u7f9e\u6210\u6012 (\u3000)\u8c0b\u5df2\u4e45 \u6012\u53d1\u51b2(\u3000) \u60ca\u6050\u4e07(\u3000)\n3.\u9876\u793c(\u3000)\u62dc \u94f6\u88c5\u7d20(\u3000) \u9707\u8033(\u3000)\u804b (\u3000)\u6d41\u4e0d\u606f\n4.\u6e29\u6587\u5c14(\u3000) (\u3000)\u7cbe\u4f1a\u795e (\u3000)\u4eba\u4e0d\u5026 \u6177(\u3000)\u6fc0\u6602\n\u90fd\u662f\u8912\u4e49\u8bcd\u7684\u4e00\u7ec4\uff1a(\u3000)",
          answerText: "\u6c9b\u3001\u4e49\u3001\u54fa\u3001\u6beb\uff1b\u604b\u3001\u84c4\u3001\u51a0\u3001\u72b6\uff1b\u819c\u3001\u88f9\u3001\u6b32\u3001\u5ddd\uff1b\u96c5\u3001\u805a\u3001\u8bf2\u3001\u6168\u3002\u7b2c4\u7ec4",
          examPoint: "\u6210\u8bed\u8865\u5145\uff1b\u8912\u8d2c\u4e49",
          explain: "\u7b2c4\u7ec4\u5168\u662f\u8912\u4e49\u8bcd\u3002\u7b2c1\u7ec4\u6709\u201c\u98a0\u6c9b\u6d41\u79bb\u201d\u975e\u8912\u4e49\uff1b\u7b2c2\u7ec4\u6709\u201c\u604b\u7f9e\u6210\u6012\u201d\u975e\u8912\u4e49\u3002",
          gradeable: true,
          stemEn: "Complete 16 idioms, then identify the group where ALL are commendatory.\n1. drift_about / as_name_suggests / crying_for_food / perceive_details\n2. shame_into_rage / premeditated / furious / terrified\n3. worship / silver_clad / deafening / flowing_endlessly\n4. refined / concentrated / tireless_teacher / impassioned\nAll commendatory: (__)",
          answerTextEn: "Group 4",
          explainEn: "Group 4 words are all positive. Groups 1-3 contain negative or neutral terms.",
          examPointEn: "Idiom Completion; Commendatory vs Derogatory"
        },
        { num:3, type:"choice", score:4,
          stem: "1.\u4e0b\u9762\u52a0\u70b9\u5b57\u7684\u6ce8\u97f3\u4e0d\u6b63\u786e\u7684\u4e00\u4e2a\u662f(\u3000)\n A.\u6b7c(ji\u0101n)\u706d B.\u5f00\u51ff(z\u00e1o) C.\u6e5b(zh\u00e0n)\u84dd D.\u5927\u6982(g\u00e0i)\n2.\u52a0\u70b9\u5b57\u89e3\u91ca\u4e0d\u6b63\u786e\u7684\u4e00\u9879\u662f(\u3000)\n A.\u9887\u6709\u8282\u594f(\u5f88) B.\u6e05\u98ce\u5f90\u6765(\u7f13\u6162\u5730) C.\u8361\u6f3e(\u6c34\u9762\u52a8\u8361) D.\u8d1f\u9685\u987d\u6297(\u5c71\u3001\u6c34\u5f2f\u66f2\u8f6c\u89d2\u7684\u5730\u65b9)",
          answerText: "1.\u5f85\u786e\u8ba4\uff1b2.D",
          examPoint: "\u5b57\u97f3\uff1b\u5b57\u4e49",
          explain: "\u7b2c2\u5c0f\u9898\uff1a\u201c\u8d1f\u9685\u987d\u6297\u201d\u7684\u201c\u9685\u201d\u610f\u4e3a\u89d2\u843d\uff0c\u4e0d\u662f\u201c\u5c71\u6c34\u5f2f\u66f2\u8f6c\u89d2\u7684\u5730\u65b9\u201d\u3002",
          gradeable: false,
          stemEn: "1. Which pronunciation is wrong? A.\u6b7c(ji\u0101n) B.\u51ff(z\u00e1o) C.\u6e5b(zh\u00e0n) D.\u6982(g\u00e0i)\n2. Which meaning is wrong? A.\u9887=very B.\u5f90=slowly C.\u8361\u6f3e=rippling D.\u9685=bend in mountain/river",
          answerTextEn: "1. TBD; 2. D (\u9685 means corner, not bend in mountain/river)",
          explainEn: "Q2: \u9685 in \u8d1f\u9685\u987d\u6297 means corner/nook, not bend in mountain/river.",
          examPointEn: "Pronunciation; Character Meaning"
        }
      ]
    },
    {
      id: "jilei", name: "\u79ef\u7d2f\u8fd0\u7528", nameEn: "Accumulation & Application", score: 26,
      questions: [
        { num:4, type:"fillBlank", score:11,
          stem: "\u6839\u636e\u8bfe\u6587\u5185\u5bb9\u586b\u7a7a\u3002\n1.(\u3000)\u8bfb\u4fbf\u4e8e\u601d\u7d22\uff0c(\u3000)\u8bfb\u4fbf\u4e8e(\u3000)\u3002(\u3000)\u8bfb\u597d\u4e66\uff0c\u5982\u83b7(\u3000)\uff1b(\u3000)\u8bfb\u597d\u4e66\uff0c\u5982\u9022\u6545\u77e5\u3002\n2.\u6e38\u89c8\u53cc\u9f99\u6d1e\uff0c\u8fdb\u5185\u6d1e\uff0c\u201c\u6211\u201d(\u3000\u3000)\uff0c\u81ea\u4ee5\u4e3a\u4ece(\u3000)\u5230(\u3000)\uff0c\u5230(\u3000)\uff0c\u5230(\u3000)\uff0c\u6ca1\u6709\u4e00\u5904\u4e0d\u8d34\u7740\u8239\u5e95\u4e86\u3002",
          answerText: "\u9ed8\u3001\u6717\u3001\u8bb0\u5fc6\u3001\u521d\u3001\u826f\u53cb\u3001\u518d\uff1b\u628a\u5934\u7a0d\u5fae\u62ac\u8d77\u4e00\u70b9\u3001\u540e\u8111\u52fa\u3001\u80a9\u80cc\u3001\u81c0\u90e8\u3001\u811a\u8ddf",
          examPoint: "\u8bfe\u6587\u586b\u7a7a",
          explain: "\u7b2c1\u9898\u51fa\u81ea\u8bfb\u4e66\u540d\u8a00\u3002\u7b2c2\u9898\u51fa\u81ea\u53f6\u5723\u9676\u300a\u8bb0\u91d1\u534e\u7684\u53cc\u9f99\u6d1e\u300b\u3002",
          gradeable: false,
          stemEn: "1. (__) reading aids thinking, (__) reading aids (__). First reading is like gaining a (__); re-reading like meeting an old friend.\n2. In Shuanglong Cave, 'I' (__), from (__) to (__), to (__), to (__), touching the boat bottom.",
          answerTextEn: "silent, aloud, memory, first, good friend, again; raised head slightly, back of head, shoulders, hips, heels",
          explainEn: "Q1: reading proverb. Q2: from Ye Shengtao's 'A Visit to Shuanglong Cave'.",
          examPointEn: "Text Completion"
        },
        { num:5, type:"fillBlank", score:15,
          stem: "\u6839\u636e\u8bed\u5883\u5b8c\u6210\u7ec3\u4e60\u3002\n1.\u5434\u738b\u505a\u4e8b\u65f6\u4e00\u5fc3\u60f3\u5f97\u5230\u773c\u524d\u7684\u5229\u76ca\uff0c\u5c11\u5e74\u7528(\u3000\u3000\u3000\u3000)\u8fd9\u516b\u4e2a\u5b57\u6210\u8bed\u529d\u544a\u4ed6\u3002\n2.\u5f20\u5fd7\u548c\u770b\u89c1\u201c(\u3000)\u767d\u9e6d\u98de\uff0c(\u3000)\u9cc5\u9c7c\u80a5\u201d\u5199\u4e0b\u4e86\u201c(\u3000\u3000)\u201d\uff0c\u8868\u8fbe\u4e86\u8bd7\u4eba(\u3000\u3000)\u7684\u601d\u60f3\u611f\u60c5\uff1b\u201c(\u3000\u3000)\uff0c\u8981\u7559\u6e05\u767d\u5728\u4eba\u95f4\u201d\u8868\u73b0\u4e86\u4e8e\u8c26(\u3000\u3000)\u7684\u54c1\u8d28\u3002\n3.\u5b54\u5b50\u501f\u6c34\u55bb\u4eba\uff1a\u6c34\u6709(\u3000)\u3001\u6709(\u3000)\u3001\u6709(\u3000)\uff0c\u6c34\u662f(\u3000)\u554a\uff01\u5b54\u5b50\u662f\u4e00\u4f4d(\u3000\u3000)\u7684\u8001\u5e08\u3002\u540d\u8a00\uff1a(\u3000)\uff0c\u53ef\u4ee5\u4e3a\u5e08\u77e3\uff01",
          answerText: "\u87b3\u8782\u6355\u8749\uff0c\u9ec4\u96c0\u5728\u540e\uff1b\u897f\u585e\u5c71\u524d\u3001\u6843\u82b1\u6d41\u6c34\u3001\u9752\u7b9b\u7b20\u7eff\u84d1\u8863\u659c\u98ce\u7ec6\u96e8\u4e0d\u987b\u5f52\u3001\u5411\u5f80\u81ea\u7531\u3001\u7c89\u9aa8\u788e\u8eab\u6d51\u4e0d\u6015\u3001\u4e0d\u754f\u727a\u7272\u575a\u5b88\u9ad8\u6d01\uff1b\u5fb7\u884c\u3001\u60c5\u4e49\u3001\u5fd7\u5411\u3001\u771f\u541b\u5b50\u3001\u8bf2\u4eba\u4e0d\u5026\uff08\u6216\u4e07\u4e16\u5e08\u8868\uff09\u3001\u6e29\u6545\u800c\u77e5\u65b0",
          examPoint: "\u53e4\u8bd7\u6587\u3001\u6210\u8bed\u586b\u7a7a",
          explain: "\u87b3\u8782\u6355\u8749\u9ec4\u96c0\u5728\u540e\u52dd\u544a\u5434\u738b\u3002\u5f20\u5fd7\u548c\u300a\u6e14\u6b4c\u5b50\u300b\u3001\u4e8e\u8c26\u300a\u77f3\u7070\u541f\u300b\u3001\u5b54\u5b50\u8bba\u6c34\u3002",
          gradeable: false,
          stemEn: "1. The boy used the idiom (__) to warn the King of Wu.\n2. Zhang Zhihe: '(__) white egrets fly, (__) mandarin fish fat' \u2192 '(__)', expressing (__) feelings; '(__), leaving purity' shows Yu Qian's (__) character.\n3. Confucius on water: virtue (__), kindness (__), aspiration (__). Water is (__). Confucius is a (__) teacher. Saying: (__), one can be a teacher.",
          answerTextEn: "Mantis stalks cicada, oriole behind; West Fortress Mountain, peach blossom water, green hat green coat no need to return, love of freedom, willing to sacrifice, upholding integrity; virtue, kindness, aspiration, true gentleman, tireless teacher, reviewing old to learn new",
          explainEn: "Mantis-cicada idiom warns king. Zhang Zhihe's Fisherman's Song, Yu Qian's Ode to Limestone, Confucius on water.",
          examPointEn: "Poetry, Idioms & Text Completion"
        }
      ]
    },
    {
      id: "yuedu", name: "\u9605\u8bfb\u611f\u609f", nameEn: "Reading Comprehension", score: 23,
      questions: [
        { num:6, type:"readingQA", score:9,
          stem: "\u300a\u4e09\u4e9a\u843d\u65e5\u300b\u7247\u6bb5\u9605\u8bfb\u3002\n1.\u8054\u7cfb\u4e0a\u4e0b\u6587\u5199\u51fa\u201c\u7855\u5927\u65e0\u670b\u201d\u7684\u610f\u601d\u3002\n2.\u52fe\u51fa\u6bd4\u55bb\u53e5\u548c\u62df\u4eba\u53e5\u3002\n3.\u63cf\u8ff0\u843d\u65e5\u7684\u56db\u4e2a\u53d8\u5316\u9636\u6bb5\u3002",
          answerText: "\u7855\u5927\u65e0\u670b\uff1a\u5de8\u5927\u65e0\u6bd4\u3002\u6bd4\u55bb\uff1a\u50cf\u5927\u7ea2\u706f\u7b3c\uff1b\u50cf\u8df3\u6c34\u5458\u3002\u62df\u4eba\uff1a\u4efb\u6027\u5730\u987d\u76ae\u5730\u8e66\u8df3\u3002\u56db\u9636\u6bb5\uff1a\u6536\u655b\u5149\u8292\u2192\u6162\u6162\u4e0b\u6c89\u2192\u5728\u6d77\u9762\u8e66\u8df3\u2192\u60c4\u7136\u65e0\u58f0\u5165\u6c34",
          examPoint: "\u9605\u8bfb\u7406\u89e3\uff1b\u4fee\u8f9e",
          explain: "\u8282\u9009\u81ea\u300a\u4e09\u4e9a\u843d\u65e5\u300b\uff0c\u63cf\u5199\u65e5\u843d\u666f\u8272\u3002",
          gradeable: false,
          stemEn: "Reading 'Sunset in Sanya':\n1. Explain '\u7855\u5927\u65e0\u670b'.\n2. Identify simile and personification.\n3. Describe four stages of sunset.",
          answerTextEn: "Enormously large. Simile: like a red lantern, like a diver. Personification: playfully bounced. Stages: dimming \u2192 sinking \u2192 bouncing \u2192 silently entering water.",
          explainEn: "From 'Sunset in Sanya'. Uses simile (lantern, diver) and personification (playful, willful sun).",
          examPointEn: "Reading Comprehension; Rhetoric"
        },
        { num:7, type:"readingQA", score:14,
          stem: "\u300a\u62e5\u62b1\u6bd4\u8033\u5149\u66f4\u6709\u529b\u91cf\u300b\u9605\u8bfb\u3002\n1.\u8c26\u900a/\u7d22\u8981\u7684\u8fd1\u53cd\u4e49\u8bcd\u3002\n2.\u7f29\u53e5\u3002\n3.\u753b\u7ebf\u53e5\u5b50\u542b\u4e49\u3002\n4.\u6982\u62ec\u4e3b\u8981\u5185\u5bb9\u3002\n5.\u8bc4\u4ef7\u8d1d\u5229\u7684\u7236\u4eb2\u3002",
          answerText: "\u8c26\u900a\uff1a\u8fd1\u2014\u8c26\u865a\uff0c\u53cd\u2014\u50b2\u6162\uff1b\u7d22\u8981\uff1a\u8fd1\u2014\u8bf7\u6c42\uff0c\u53cd\u2014\u7ed9\u4e88\u3002\u7f29\u53e5\uff1a\u7236\u4eb2\u662f\u8fd0\u52a8\u5458\u3002\u542b\u4e49\uff1a\u7231\u4e0e\u5305\u5bb9\u6bd4\u60e9\u7f5a\u66f4\u80fd\u611f\u5316\u4eba\u3002\u4e3b\u8981\u5185\u5bb9\uff1a\u8d1d\u5229\u5c0f\u65f6\u5019\u67d3\u4e0a\u70df\u763e\uff0c\u7236\u4eb2\u7528\u62e5\u62b1\u4ee3\u66ff\u8033\u5149\uff0c\u8ba9\u4ed6\u6212\u70df\u3002\u8bc4\u4ef7\uff1a\u667a\u6167\u3001\u5145\u6ee1\u7231\u5fc3\u7684\u7236\u4eb2\u3002",
          examPoint: "\u8fd1\u53cd\u4e49\u8bcd\uff1b\u7f29\u53e5\uff1b\u9605\u8bfb\u7406\u89e3",
          explain: "\u8bb2\u8ff0\u7403\u738b\u8d1d\u5229\u5c0f\u65f6\u5019\u67d3\u4e0a\u70df\u763e\uff0c\u7236\u4eb2\u7528\u62e5\u62b1\u800c\u975e\u6253\u9a82\u6765\u6559\u80b2\u4ed6\u7684\u6545\u4e8b\u3002",
          gradeable: false,
          stemEn: "Reading 'A Hug Is Stronger Than a Slap' (Pel\u00e9 story):\n1. Synonyms/antonyms for '\u8c26\u900a'/'\u7d22\u8981'.\n2. Shorten sentence.\n3. Explain underlined sentence.\n4. Summarize.\n5. Evaluate Pel\u00e9's father.",
          answerTextEn: "\u8c26\u900a: syn=modest, ant=arrogant; \u7d22\u8981: syn=request, ant=give. Shortened: Father was athlete. Meaning: love > punishment. Summary: Pel\u00e9 picked up smoking, father hugged instead of hitting, he quit. Father: wise and loving.",
          explainEn: "Story of Pel\u00e9's father using embrace instead of punishment to correct his son.",
          examPointEn: "Synonyms/Antonyms; Sentence Reduction; Reading Comprehension"
        }
      ]
    },
    {
      id: "zuowen", name: "\u4e60\u4f5c\u5b9e\u8df5", nameEn: "Composition", score: 23,
      questions: [
        { num:8, type:"composition", score:23,
          stem: "\u9898\u76ee\uff1a\u7b2c\u4e00\u6b21______\u3002\u9009\u62e9\u4f60\u6700\u719f\u6089\u3001\u6700\u611f\u5174\u8da3\u7684\u5185\u5bb9\u5199\u4e00\u7bc7\u4e60\u4f5c\u3002\u8981\u6c42\uff1a\u5185\u5bb9\u5177\u4f53\uff0c\u8bed\u53e5\u901a\u987a\uff0c\u611f\u60c5\u771f\u5b9e\u3002\u5b57\u6570\u4e0d\u5c11\u4e8e400\u5b57\u3002",
          answerText: "\uff08\u4f5c\u6587\u9898\uff0c\u65e0\u6807\u51c6\u7b54\u6848\uff09",
          examPoint: "\u534a\u547d\u9898\u4f5c\u6587",
          explain: "\u9009\u62e9\u5370\u8c61\u6df1\u523b\u7684\u201c\u7b2c\u4e00\u6b21\u201d\u7ecf\u5386\uff0c\u5199\u6e05\u695a\u7ecf\u8fc7\u548c\u542f\u793a\u3002",
          gradeable: false,
          stemEn: "Title: 'The First Time ______'. Write about a memorable first-time experience. 400+ words.",
          answerTextEn: "(Composition, no standard answer)",
          explainEn: "Choose a memorable first experience, describe the process, share the lesson.",
          examPointEn: "Semi-prompted Narrative"
        }
      ]
    }
  ]
};
