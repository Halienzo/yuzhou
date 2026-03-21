function f(py){
  if(!py||py.length>6)return false;
  return!/[\u0100-\u01FF\u1E00-\u1EFF]/.test(py)&&/^[a-z\u00fc]+$/i.test(py);
}
console.log('de:', f('de'));       // true
console.log('le:', f('le'));       // true
console.log('ma:', f('ma'));       // true
console.log('zi:', f('zi'));       // true
console.log('chūn:', f('chūn'));   // false
console.log('tiān:', f('tiān'));   // false
console.log('lǜ:', f('lǜ'));      // false
console.log('nǚ:', f('nǚ'));      // false
console.log('empty:', f(''));      // false
console.log('null:', f(null));     // false
console.log('123:', f('123'));     // false
