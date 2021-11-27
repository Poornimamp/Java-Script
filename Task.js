//Using PUSH and INCLUDES function
let department=[];
  department.push("CSE");
  department.push("IT");
  department.push("ECE");
  department.push("MECH");
  console.log("Dept Names :" +department);
  console.log("Number of items",department.length);
  console.log("Search:exists",department.includes("ECE"));
  if(department.includes("EEE"))
  {
    console.log("The given department is given CSE");

  }
  else{
    console.log("The department CSE not found");
  }
  //sorting function
  console.log("Before Sorting",department);
 //console.log( department.sort());
 console.log("After sorting(Ascending)",department.sort());
 console.log("After sorting(Descending)",department.reverse());
 //console.log("After sorting(Descending)"+department);

  
