let array=[];
array=[22,30,16];
let index=[];
index=[2,0,1];
let resarray=[];
for(let i=0;i<array.length;i++){
    let position=index[i];
    resarray[position]=array[i];

}
console.log("Array elements position changed",resarray);
