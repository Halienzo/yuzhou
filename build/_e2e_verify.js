// End-to-end verification: simulate what the HTML renderer does
// for every G7-G9 lesson to ensure English content displays correctly
var fs=require('fs'),vm=require('vm');
console.log('=== End-to-End English Toggle Verification ===\n');

var totalOk=0, totalWarn=0, totalFail=0;

for(var g=1;g<=9;g++){
  for(var s=1;s<=2;s++){
    var f='textbook_g'+g+'s'+s+'.js';
    if(!fs.existsSync(f))continue;
    var c=fs.readFileSync(f,'utf-8');
    var sb={window:{}};
    vm.runInNewContext(c,sb);
    var d=sb['TB_G'+g+'S'+s]||sb.window['TB_G'+g+'S'+s];
    if(!d||!d.units)continue;

    var ok=0, warn=0, fail=0;
    d.units.forEach(function(u){
      if(!u.lessons)return;
      u.lessons.forEach(function(l){
        var text=Array.isArray(l.text)?l.text:(typeof l.text==='string'?[l.text]:[]);
        var textEn=l.textEn?(Array.isArray(l.textEn)?l.textEn:[l.textEn]):null;

        if(!textEn || textEn.length===0){
          // No English content at all
          fail++;
          console.log('  FAIL G'+g+'S'+s+' L'+l.id+' '+l.title+': no textEn');
          return;
        }

        // Simulate the JH renderer logic (lines 18932-18958)
        var cnParas=text;
        if(textEn && cnParas.length<textEn.length && cnParas.length<=2){
          var split=[];
          cnParas.forEach(function(p){
            var parts=p.split(/\n{2,}/);
            if(parts.length>1){parts.forEach(function(ss){if(ss.trim())split.push(ss.trim());});}
            else{
              var lines=p.split('\n');
              if(lines.length>3){lines.forEach(function(ss){if(ss.trim())split.push(ss.trim());});}
              else split.push(p);
            }
          });
          cnParas=split;
        }

        // Count how many English paragraphs will render
        var enRendered=0;
        cnParas.forEach(function(line,i){
          if(textEn[i]) enRendered++;
        });
        // Plus overflow
        if(textEn.length>cnParas.length){
          enRendered+=(textEn.length-cnParas.length);
        }

        if(enRendered===textEn.length){
          ok++;
        } else {
          warn++;
          console.log('  WARN G'+g+'S'+s+' L'+l.id+' '+l.title+': only '+enRendered+'/'+textEn.length+' en paragraphs rendered');
        }
      });
    });
    console.log('G'+g+'S'+s+': '+ok+' ok, '+warn+' warn, '+fail+' fail');
    totalOk+=ok; totalWarn+=warn; totalFail+=fail;
  }
}

console.log('\n=== TOTAL: '+totalOk+' ok, '+totalWarn+' warn, '+totalFail+' fail ===');
if(totalWarn===0 && totalFail===0){
  console.log('All lessons will display English content correctly!');
}
