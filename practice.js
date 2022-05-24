function test(){
   let userName= document.getElementById("txtName").value;  
   let userAge= document.getElementById("txtAge").value;
   let userGender= document.getElementById("selGender").value;

   console.log(userName,userAge,userGender);
}



function sum(){
   console.log(10+10);
}
sum();

let sum2= function(){
   console.log(3+3);
}
sum2();