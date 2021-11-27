let array=[];
array=[2,3,6,1,9];
let sum=0;
let product=1;
for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
        
    }
    else{
        sum=sum+array[i];
        product=product*array[i];
    }
}
console.log("Sum of odd numbers",sum);
console.log("product of odd numbers",product);
