var fs=require('fs'),vm=require('vm');
console.log('=== G1-G6 Textbook Audit ===\n');
var issues=[];
var totalLessons=0;
var textMap={};

for(var g=1;g<=6;g++){
  for(var s=1;s<=2;s++){
    var f='textbook_g'+g+'s'+s+'.js';
    if(!fs.existsSync(f)){console.log('MISSING: '+f);continue;}
    var c=fs.readFileSync(f,'utf-8');
    var sb={window:{}};
    try{vm.runInNewContext(c,sb);}catch(e){
      issues.push('PARSE_ERROR G'+g+'S'+s+': '+e.message);
      continue;
    }
    var d=sb['TB_G'+g+'S'+s]||sb.window['TB_G'+g+'S'+s];
    if(!d||!d.units){issues.push('NO_DATA G'+g+'S'+s);continue;}

    var lessonCount=0;
    d.units.forEach(function(u){
      if(!u.lessons)return;
      u.lessons.forEach(function(l){
        totalLessons++;
        lessonCount++;
        var t=Array.isArray(l.text)?l.text:[l.text||''];
        var tc=t.join('').length;
        var enCount=Array.isArray(l.textEn)?l.textEn.length:0;
        var tCount=t.length;

        // 1. Paragraph alignment
        if(enCount>0 && tCount!==enCount && !l.multiText){
          issues.push('MISMATCH G'+g+'S'+s+' L'+l.id+': '+l.title+' text='+tCount+' textEn='+enCount);
        }

        // 2. Wrong content (exercise/guidance markers)
        var joined=t.join('');
        var badPatterns=[
          /游记往往包含/,
          /上课发言/,
          /即席讲话/,
          /课堂发言就是/,
          /综合性学习/,
          /口语交际/,
          /写作指导/,
          /整体构思/,
          /确定写作顺序/,
          /列提纲/
        ];
        for(var bp=0;bp<badPatterns.length;bp++){
          var m=joined.match(badPatterns[bp]);
          if(m && tc>100){
            issues.push('WRONG_CONTENT G'+g+'S'+s+' L'+l.id+': '+l.title+' ['+tc+'c] matched: '+m[0]);
            break;
          }
        }

        // 3. Very short text with textEn
        if(tc<10 && enCount>0){
          issues.push('VERY_SHORT G'+g+'S'+s+' L'+l.id+': '+l.title+' ['+tc+'c] has '+enCount+' textEn');
        }

        // 4. Empty text
        if(tc===0 && enCount>0){
          issues.push('EMPTY_TEXT G'+g+'S'+s+' L'+l.id+': '+l.title+' has '+enCount+' textEn but no text');
        }

        // 5. Duplicate check
        if(joined.length>=30){
          var sig=joined.substring(0,100);
          var key='G'+g+'S'+s+'_L'+l.id;
          if(textMap[sig]){
            issues.push('DUPLICATE '+key+' ('+l.title+') same start as '+textMap[sig]);
          }
          textMap[sig]=key+' ('+l.title+')';
        }
      });
    });
    console.log('G'+g+'S'+s+': '+lessonCount+' lessons, '+d.units.length+' units — OK');
  }
}

console.log('\nTotal lessons: '+totalLessons);
console.log('Issues: '+issues.length);
if(issues.length>0){
  console.log('');
  issues.forEach(function(i){console.log('  '+i);});
}else{
  console.log('No issues found!');
}
