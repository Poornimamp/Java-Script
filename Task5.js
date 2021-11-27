let string="50,10,33,7,100";
let splitted=string.split(",");
console.log("String array",splitted);

for(let i=0;i<splitted.length;i++){
splitted[i]=parseInt(splitted[i]); 

}

console.log("Integer Array",splitted);
for(let i=0;i<splitted.length;i++){
for(let j=i+1;j<splitted.length;j++){
    if (splitted[i]>splitted[j]) {
        let temp=splitted[i];
        splitted[i]=splitted[j];
        splitted[j]=temp;
    }
}


}
console.log("Sorted Array",splitted);

// console.log("Ascending Order",splitted.sort());
 console.log("Descending Order",splitted.reverse());


