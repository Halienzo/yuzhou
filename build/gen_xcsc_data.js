#!/usr/bin/env node
/**
 * gen_xcsc_data.js - Generate structured exam data for 小升初真题 module
 *
 * This script was used to initially parse the extracted text files
 * (all_docx_content.txt, all_doc_content.txt) from the tests/ directory.
 * The output is xcsc_data.js which is loaded by the app at runtime.
 *
 * Usage: node build/gen_xcsc_data.js
 *
 * Note: The xcsc_data.js file has been manually refined after initial
 * generation. Re-running this script will overwrite manual edits.
 */

const fs = require('fs');
const path = require('path');

// Paper metadata - 20 unique papers
const PAPER_META = [
  { id:'yn2012', year:2012, region:'云南省', city:'', district:'', title:'2012年云南小升初语文考试真题', totalScore:100, duration:100, hasAnswers:false, hasAnalysis:false, source:'province' },
  { id:'yn2014', year:2014, region:'云南省', city:'', district:'', title:'2014年春季学期升学考试语文真题', totalScore:100, duration:120, hasAnswers:false, hasAnalysis:false, source:'province' },
  { id:'km2017', year:2017, region:'云南省', city:'昆明市', district:'', title:'2017年云南昆明小升初语文考试真题', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:false, source:'city' },
  { id:'yn2018', year:2018, region:'云南省', city:'', district:'', title:'2018年云南小升初语文真题及答案', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:false, source:'province' },
  { id:'km2018', year:2018, region:'云南省', city:'昆明市', district:'', title:'2018年云南昆明小升初语文真题及答案', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:false, source:'city' },
  { id:'yn2019', year:2019, region:'云南省', city:'', district:'', title:'2019年云南省小升初语文真题及答案', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:true, source:'province' },
  { id:'km2020', year:2020, region:'云南省', city:'昆明市', district:'', title:'2020年云南省昆明市语文小升初试卷', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:true, source:'city' },
  { id:'zt2021', year:2021, region:'云南省', city:'昭通市', district:'', title:'2021年云南省昭通市小升初语文试卷', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:true, source:'city' },
  { id:'dq2021', year:2021, region:'云南省', city:'迪庆州', district:'', title:'2021年云南省迪庆州小升初语文试卷', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:true, source:'city' },
  { id:'cg2021', year:2021, region:'云南省', city:'昆明市', district:'呈贡区', title:'2021年云南省昆明市呈贡区小升初考试语文试卷', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:true, source:'district' },
  { id:'xs2021', year:2021, region:'云南省', city:'昆明市', district:'西山区', title:'2021年云南省昆明市西山区小升初语文试卷', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:true, source:'district' },
  { id:'xs2022', year:2022, region:'云南省', city:'昆明市', district:'西山区', title:'2022年云南省昆明市西山区小升初语文试卷', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:true, source:'district' },
  { id:'dh2023', year:2023, region:'云南省', city:'德宏州', district:'', title:'2023年云南省德宏州小升初语文试卷', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:false, source:'city' },
  { id:'qj2023', year:2023, region:'云南省', city:'曲靖市', district:'', title:'2023年云南省曲靖市小升初语文试卷', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:true, source:'city' },
  { id:'wh2024', year:2024, region:'云南省', city:'昆明市', district:'五华区', title:'2024年云南省昆明市五华区小升初考试语文试卷', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:false, source:'district' },
  { id:'cg2024', year:2024, region:'云南省', city:'昆明市', district:'呈贡区', title:'2024年云南省昆明市呈贡区小升初考试语文试卷', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:true, source:'district' },
  { id:'gd2024', year:2024, region:'云南省', city:'昆明市', district:'官渡区', title:'2024年云南省昆明市官渡区小升初考试语文试卷', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:false, source:'district' },
  { id:'pl2024', year:2024, region:'云南省', city:'昆明市', district:'盘龙区', title:'2024年云南省昆明市盘龙区小升初考试语文试卷', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:false, source:'district' },
  { id:'xs2024', year:2024, region:'云南省', city:'昆明市', district:'西山区', title:'2024年云南省昆明市西山区小升初考试语文试卷', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:false, source:'district' },
  { id:'tc2024', year:2024, region:'云南省', city:'保山市', district:'腾冲市', title:'2024年云南省保山市腾冲小升初语文试卷', totalScore:100, duration:120, hasAnswers:true, hasAnalysis:true, source:'district' }
];

console.log(`[gen_xcsc_data] ${PAPER_META.length} papers defined`);
console.log('[gen_xcsc_data] Data file xcsc_data.js should be manually maintained');
console.log('[gen_xcsc_data] Paper IDs:', PAPER_META.map(p => p.id).join(', '));
