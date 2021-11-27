//Find Greatest value 
let num=[];
num=[12,13,22,5,4];
// for(let i=0;i<num.length;i++){
//     for(let j=i+1;j<num.length;j++){
//         if(num[i]>num[j])
//         {
//            break;
//         }
            
           
          
        
//       else {
//           let temp=num[i];
//           num[i]=num[j];
//           num[j]=temp;

//       }
      
//    }  
      
// }
// console.log("Greatest value\t"+num[0]);
let max=0;
for(let i=0;i<num.length;i++){
    if(max<num[i])
    {
        max=num[i];
    }
}
console.log("Greatest value"+max);
let min=num[0];

for(let i=1;i<num.length;i++){
    if(min>num[i]){
           min=num[i];
    }
}
console.log("Lowest value"+min);




