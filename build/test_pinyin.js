const fs=require('fs');
const html=fs.readFileSync('../Chinese chars.html','utf8');
const vm=require('vm');

// Extract the main inline script (second script block)
const re=/<script[^>]*>([\s\S]*?)<\/script>/g;
re.exec(html); // skip first (HanziWriter)
const m=re.exec(html);
const code=m[1];

// Create mock DOM
function mockEl(id){
  return {
    id:id,style:{},innerHTML:'',textContent:'',
    className:'',dataset:{},
    classList:{add:function(){},remove:function(){},toggle:function(){}},
    prepend:function(){},appendChild:function(){},
    querySelector:function(){return mockEl('_sub');},
    querySelectorAll:function(){return [];},
    setAttribute:function(){},
    setAttributeNS:function(){},
    insertBefore:function(){},
    addEventListener:function(){},
    getBoundingClientRect:function(){return{width:200,height:200};}
  };
}

var els={};
var mockDoc={
  getElementById:function(id){
    if(!els[id])els[id]=mockEl(id);
    return els[id];
  },
  createElement:function(tag){return mockEl('_new_'+tag);},
  createElementNS:function(){return mockEl('_ns');},
  createTextNode:function(t){return {textContent:t,nodeType:3};},
  addEventListener:function(){},
  body:{classList:{toggle:function(){},add:function(){},remove:function(){}},style:{}}
};

var ctx={
  document:mockDoc,
  window:{},
  HanziWriter:{create:function(){return{showCharacter:function(){},animateCharacter:function(){},quiz:function(){}};},loadCharacterData:function(){return Promise.resolve(null);}},
  console:console,
  navigator:{userAgent:''},
  localStorage:{getItem:function(){return null;},setItem:function(){}},
  speechSynthesis:{cancel:function(){},getVoices:function(){return[];},speak:function(){},addEventListener:function(){}},
  setTimeout:setTimeout,
  clearTimeout:clearTimeout,
  setInterval:setInterval,
  clearInterval:clearInterval,
  requestAnimationFrame:function(){},
  cancelAnimationFrame:function(){},
  global:global,
  location:{href:''},
  performance:{now:function(){return Date.now();}},
  matchMedia:function(){return{matches:false,addEventListener:function(){}};},
  IntersectionObserver:function(){this.observe=function(){};},
  Path2D:function(){},
  XMLHttpRequest:function(){this.open=function(){};this.send=function(){};this.overrideMimeType=function(){};}
};
ctx.window=ctx;
ctx.window.document=mockDoc;
ctx.self=ctx;

try{
  var script=new vm.Script(code,{filename:'app.js'});
  var context=vm.createContext(ctx);
  script.runInContext(context);

  console.log('Script executed OK');
  console.log('enterPinyin:', typeof context.enterPinyin);
  console.log('renderPinyinDash:', typeof context.renderPinyinDash);
  console.log('PINYIN_DATA:', typeof context.PINYIN_DATA);
  console.log('PINYIN_DATA.initials.length:', context.PINYIN_DATA?context.PINYIN_DATA.initials.length:'N/A');
  console.log('PINYIN_DATA.finals.length:', context.PINYIN_DATA?context.PINYIN_DATA.finals.length:'N/A');

  // Try enterPinyin
  try{
    context.enterPinyin();
    console.log('\nenterPinyin() ran OK');
    var pv=els['pinyinView'];
    if(pv){
      console.log('pinyinView innerHTML length:', pv.innerHTML.length);
      console.log('pinyinView display:', pv.style.display);
      if(pv.innerHTML.length>0){
        console.log('First 300 chars:', pv.innerHTML.substring(0,300));
      } else {
        console.log('WARNING: pinyinView innerHTML is EMPTY!');
      }
    }
  }catch(e){
    console.log('\nenterPinyin() ERROR:', e.message);
    console.log('Stack:', e.stack.split('\n').slice(0,5).join('\n'));
  }

}catch(e){
  console.log('Script error:', e.message);
  console.log('Stack:', e.stack.split('\n').slice(0,5).join('\n'));
}
