
    // Initialize variable
    var a=10;
    var b=20;
    var c=a+b;
    //Display total value output at console
    console.log("Total"+c);
    //Using wrapper class
    var mark1=11;
    var mark2=22;
    var mark3=50;
    var total=mark1+mark2+mark3;
    console.log("Total"+total);
    var avg=(total/3);
    console.log("Average"+parseInt(avg));
    //String Concatenation
    var firstName="Sarvesh";
    var lastname="Poorni";
    var fullName=firstName+lastname;
    console.log("Fullname  " +fullName);
    //Conditional Statement
    var mark=40;
    if(mark>=50)
    {
        console.log("Pass");
    }
    else{
        console.log("Fail");
    }
    //Using Boolean values True/False
    let val=54;
    var result=val>=50;//Note:Variable result values stores boolean values true/false
    if(result)
    {
        console.log("Pass");
    }
    else{
        console.log("Fail");
    }
    //To find today's date
    var today=new Date;
    console.log("Today Date"+today);
    //To print validate a string
   var Firstname=null;
   // var Firstname="Sumitha"
    if(Firstname!=null)    
        console.log("valid")    
    else
        console.log("Invalid")
    
    //Using logical operator
   var name="";
    //var name="Sumitha";
   var name=null;
  //  if(name==null||name==""){
      if(name==null&&name==""){

        console.log("name:invalid");
    }
        else{
            console.log("name:valid");
        }
//Pgm2
var age=0;
//var age=-10;
//var age=101;
var age=10;
if(age<=0||age>100)
{
    console.log("age:invalid")
}
    else{
        console.log("age:valid")
    }
    //using Function
function add(a,b)
{
    var c=a+b;
    console.log("Result"+c)
}
add(4,5);
add(30,25);
//Using return call in function
function add(a,b)
{
    var c=a+b;
    return c;
}
var result=add(4,5);
console.log("Result1 :"+result)
//add(30,25);
