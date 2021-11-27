class BasicSalary{
  
   bonus(basicsalary)
    {
        if(basicsalary>=20000){
            var salary=(basicsalary+((19/100)*100));
            return salary;
        }
        else if(basicsalary<20000){
             salary=(basicsalary+((18/100)*100));
            return salary;

        }


    }
}

let BasicSalaryObj=new BasicSalary();
 let BonusSalary=BasicSalaryObj.bonus(20000.5);
 console.log("Total Salary\t"+Math.round(BonusSalary));
 
