// Test pinyin coverage by loading hsk_index.js via vm
var fs = require("fs");
var vm = require("vm");
var html = fs.readFileSync("Chinese chars.html", "utf-8");

var m = html.match(/const RAW_DATA=(\[[\s\S]*?\]);/);
if(!m){console.log("RAW_DATA not found"); process.exit();}
var data = JSON.parse(m[1]);
var total = data.length;
var empty = data.filter(function(d){return !d.p;}).length;
console.log("RAW_DATA total:", total, "with pinyin:", total-empty, "empty:", empty, "(" + (empty/total*100).toFixed(1) + "%)");

// Load HSK_INDEX via sandbox
var hiContent = fs.readFileSync("hsk_index.js", "utf-8");
var sandbox = {};
vm.runInNewContext(hiContent, sandbox);
var HSK_INDEX = sandbox.HSK_INDEX;
var hskCount = Object.keys(HSK_INDEX).length;
console.log("\nHSK_INDEX entries:", hskCount);

var emptyChars = data.filter(function(d){return !d.p;}).map(function(d){return d.c;});
var inHsk = emptyChars.filter(function(ch){return HSK_INDEX[ch];}).length;
console.log("  Empty-pinyin chars covered by HSK:", inHsk, "of", empty, "(" + (inHsk/empty*100).toFixed(1) + "%)");

// Overall coverage
var hasPySet = {};
data.forEach(function(d){if(d.p)hasPySet[d.c]=1;});
var allChars = data.map(function(d){return d.c;});
var covered = allChars.filter(function(ch){return hasPySet[ch] || HSK_INDEX[ch];}).length;
console.log("\n== TOTAL coverage (RAW pinyin + HSK lazy-load):", covered, "/", total, "(" + (covered/total*100).toFixed(1) + "%)");
var uncovered = allChars.filter(function(ch){return !hasPySet[ch] && !HSK_INDEX[ch];});
console.log("  Still uncovered:", uncovered.length, "chars");
if(uncovered.length>0 && uncovered.length<50) console.log("  Chars:", uncovered.join(''));

// WORD_PINYIN fallback for remaining uncovered
var wpm = html.match(/const WORD_PINYIN=(\{[\s\S]*?\});/);
if(!wpm) wpm = html.match(/var WORD_PINYIN=(\{[\s\S]*?\});/);
if(wpm && uncovered.length > 0){
  var wp = JSON.parse(wpm[1]);
  var wpResolved = 0;
  uncovered.forEach(function(ch){
    if(wp[ch]){wpResolved++;return;}
    for(var w in wp){
      if(w.length===2 && (w.charAt(0)===ch || w.charAt(1)===ch)){wpResolved++;return;}
    }
  });
  console.log("  WORD_PINYIN resolves", wpResolved, "more");
  console.log("  Final uncovered:", uncovered.length - wpResolved, "chars");
}
