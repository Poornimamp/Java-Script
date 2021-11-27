let num="3,2,10";
let pos=num.split(',');
console.log(pos);
// let value=[];
// for(let i=0;i<pos.length;i++){
//     value[i]=parseInt(pos[i]);
//     console.log(value);
//  num=parseInt(value,10);
// console.log(num);
// }
let var1=pos.splice(0,1);
var1=parseInt(var1);
console.log(var1);
let var2=pos.splice(0,2);
var2=parseInt(var2);
console.log(var2);
console.log("value"+var1 +var2);
let var3=pos.splice(2,1);
var3=parseInt(var3);
console.log(var3);


console.log("Integer value"+ var1+var2+var3);
