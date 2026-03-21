function _tbIsPoem(l){
  if(!l||!l.text)return false;
  var textArr=Array.isArray(l.text)?l.text:(typeof l.text==='string'?[l.text]:[]);
  if(!textArr.length)return false;
  var t=l.title||'';
  if(/散文诗/.test(t))return false;
  if(/古诗|诗词|诗歌|唐诗|宋词|元曲|七律|五律|七绝|五绝|绝句|律诗|乐府|浣溪沙|水调歌头|词[三二两四五六]首|诗[三二两四五六]首/.test(t))return true;
  var lines=[];
  textArr.forEach(function(s){s.split('\n').forEach(function(sub){if(sub.trim())lines.push(sub.trim());});});
  if(lines.length<2)return false;
  var pureLines=lines.map(function(ln){return ln.replace(/[\s，。！？、；：""''（）《》—…\[\]【】·]/g,'');});
  var allShort=pureLines.every(function(p){return p.length<=16;});
  var avgLen=pureLines.reduce(function(s,p){return s+p.length;},0)/pureLines.length;
  if(allShort&&avgLen<=12&&lines.length>=4)return true;
  if(l.author&&allShort&&avgLen<=14)return true;
  return false;
}
var tests=[
  {title:'静夜思',author:'李白',text:['床前明月光，','疑是地上霜。','举头望明月，','低头思故乡。']},
  {title:'古诗二首',text:['村居 [清]高鼎','草长莺飞二月天，拂堤杨柳醉春烟。','儿童散学归来早，忙趁东风放纸鸢。','咏柳 [唐]贺知章','碧玉妆成一树高，万条垂下绿丝绦。','不知细叶谁裁出，二月春风似剪刀。']},
  {title:'七律·长征',text:['七律·长征\n毛泽东\n红军不怕远征难，万水千山只等闲。\n五岭逶迤腾细浪，乌蒙磅礴走泥丸。\n金沙水拍云崖暖，大渡桥横铁索寒。\n更喜岷山千里雪，三军过后尽开颜。']},
  {title:'吃水不忘挖井人',text:['瑞金城外有个村子叫沙洲坝。','毛主席在江西领导革命的时候，在那儿住过。','村子里没有井，吃水要到很远的地方去挑。']},
  {title:'狼牙山五壮士',text:['1941年秋，日寇集中兵力，向我晋察冀根据地大举进犯。当时七连奉命在狼牙山一带坚持游击战争。经过一个多月英勇奋战，七连决定向龙王庙转移。']},
  {title:'春晓',author:'孟浩然',text:['春眠不觉晓，','处处闻啼鸟。','夜来风雨声，','花落知多少。']},
  {title:'池上',author:'白居易',text:['小娃撑小艇，','偷采白莲回。','不解藏踪迹，','浮萍一道开。']},
  {title:'散文诗二首',author:'泰戈尔、冰心',text:['假如我变成了一朵金色花，为了好玩，长在树的高枝上，笑嘻嘻地在空中摇摆，又在新叶上跳舞，妈妈，你会认识我吗？']},
  {title:'古代诗歌四首',author:'曹操、李白',text:['观沧海\n曹操\n东临碣石，以观沧海。\n水何澹澹，山岛竦峙。\n树木丛生，百草丰茂。\n秋风萧瑟，洪波涌起。']},
  {title:'秋词（其一）',author:'刘禹锡',text:'自古逢秋悲寂寥，我言秋日胜春朝。\n晴空一鹤排云上，便引诗情到碧霄。'},
  {title:'唐诗五首',text:['野望\n王绩\n东皋薄暮望，徙倚欲何依。\n树树皆秋色，山山唯落晖。','黄鹤楼\n崔颢\n昔人已乘黄鹤去，此地空余黄鹤楼。\n黄鹤一去不复返，白云千载空悠悠。']}
];
tests.forEach(function(t){
  console.log(t.title+': isPoem='+_tbIsPoem(t));
});
