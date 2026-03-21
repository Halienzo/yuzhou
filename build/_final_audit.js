var fs=require('fs'),vm=require('vm');
console.log('=== Comprehensive Text Quality Audit ===\n');
var issues=[];
var totalLessons=0;

for(var g=7;g<=9;g++){
  for(var s=1;s<=2;s++){
    var f='textbook_g'+g+'s'+s+'.js';
    var c=fs.readFileSync(f,'utf-8');
    var sb={window:{}};
    vm.runInNewContext(c,sb);
    var d=sb['TB_G'+g+'S'+s]||sb.window['TB_G'+g+'S'+s];
    if(!d||!d.units)continue;
    d.units.forEach(function(u){
      if(!u.lessons)return;
      u.lessons.forEach(function(l){
        totalLessons++;
        var t=Array.isArray(l.text)?l.text:[l.text||''];
        var tc=t.join('').length;
        var enCount=Array.isArray(l.textEn)?l.textEn.length:0;
        var tCount=t.length;

        // 1. Paragraph alignment check
        if(enCount>0 && tCount!==enCount && !l.multiText){
          issues.push('MISMATCH G'+g+'S'+s+' L'+l.id+': '+l.title+' text='+tCount+' textEn='+enCount);
        }

        // 2. Wrong content check (exercise/guidance injected as lesson text)
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

        // 3. Very short text with textEn available
        if(tc<30 && enCount>0){
          issues.push('VERY_SHORT G'+g+'S'+s+' L'+l.id+': '+l.title+' ['+tc+'c] has '+enCount+' textEn paragraphs');
        }

        // 4. Show specific lessons for manual review
        if(l.id===15 && g===7 && s===1){
          console.log('G7S1 L15 '+l.title+': '+tc+'c, preview: '+joined.substring(0,100));
        }
        if(l.id===21 && g===8 && s===1){
          console.log('G8S1 L21 '+l.title+': '+tc+'c, preview: '+joined.substring(0,100));
        }
        if(l.id===14 && g===9 && s===2){
          console.log('G9S2 L14 '+l.title+': '+tc+'c, preview: '+joined.substring(0,80)+'...');
        }
        if(l.id===12 && g===8 && s===1){
          console.log('G8S1 L12 '+l.title+': '+tc+'c, preview: '+joined.substring(0,100));
        }
      });
    });
  }
}

// 5. Duplicate text check
console.log('\n--- Duplicate Check ---');
var textMap={};
for(var g=7;g<=9;g++){
  for(var s=1;s<=2;s++){
    var f='textbook_g'+g+'s'+s+'.js';
    var c=fs.readFileSync(f,'utf-8');
    var sb={window:{}};
    vm.runInNewContext(c,sb);
    var d=sb['TB_G'+g+'S'+s]||sb.window['TB_G'+g+'S'+s];
    if(!d||!d.units)continue;
    d.units.forEach(function(u){
      if(!u.lessons)return;
      u.lessons.forEach(function(l){
        var t=Array.isArray(l.text)?l.text:[l.text||''];
        var joined=t.join('');
        if(joined.length<30)return; // skip very short
        var sig=joined.substring(0,100);
        var key='G'+g+'S'+s+'_L'+l.id;
        if(textMap[sig]){
          issues.push('DUPLICATE '+key+' ('+l.title+') same start as '+textMap[sig]);
        }
        textMap[sig]=key+' ('+l.title+')';
      });
    });
  }
}

console.log('\nTotal lessons checked: '+totalLessons);
console.log('Issues found: '+issues.length);
if(issues.length>0){
  console.log('');
  issues.forEach(function(i){console.log('  '+i);});
}
