function oddOrEven(num){
   let result = "";
   
    if(!Number.isInteger(num)){
      result = "invalid";
   }
   else if(num % 2 === 0){
      result = "even";
   }
   else{
      result = "odd";
   }
   
   console.log(result);
}

oddOrEven(5);
oddOrEven(8);
oddOrEven(1.5);