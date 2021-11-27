let string;
string="10,20,30";
let splitted=string.split(',');

for(let i=0;i<splitted.length;i++){
    
    console.log("String to Integer",parseInt(splitted[i]));
}
//Array Elements-checkout
let num=[];
num.push(10);
num.push(30);
num.push(55);

console.log("Number list",num);
if(num.includes(55)){
    console.log("Number is present");

}
else{
    console.log("Number not present");
}