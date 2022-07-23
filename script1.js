var arr=[{"Name":"Jhon","age":"23","dob":"17mar1998"},
    {"Name":"Arun","age":"25","dob":"23sep1999"},
    {"Name":"Malar","age":"22","dob":"04aug2000"}];

// Accessing values with different types of for loop by using key

//for loop
for(let i=0;i<arr.length;i++){
  console.log(arr[i].Name);
  console.log(arr[i].age);
  console.log(arr[i].dob);
}

//for in loop
for(var key in arr){
    console.log(arr[key].Name);
    console.log(arr[key].age);
    console.log(arr[key].dob);
}

//for of loop
for(ele of arr){
 console.log(ele.Name);
 console.log(ele.age);
 console.log(ele.dob);
}

//forEach loop
arr.forEach((ele)=>{console.log(ele.Name);
  console.log(ele.age);
  console.log(ele.dob);
});