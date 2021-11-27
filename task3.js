//Find Lowest value 
let num=[];
num=[12,13,1,5,4];
for(let i=0;i<num.length;i++){
    for(let j=i+1;j<num.length;j++){
        if(num[i]<num[j])
        {
           
        }          
                 
      else {
          let temp=num[i];
          num[i]=num[j];
          num[j]=temp;

      }
      
   }  
      
}
console.log("Lowest value\t"+num[0]);