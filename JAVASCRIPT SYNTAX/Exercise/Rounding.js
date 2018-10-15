function round(nums){
  let num = nums[0];
  let precision = nums[1];   

  if(precision > 15){
   precision = 15;   
  }

  let result = +Number(num).toFixed(precision); //convert it to Number
  console.log(result.toString()); //Convert it to string -> removes trailing zeros
}

round([3.1415926535897932384626433832795, 2]);
round([10.5, 3]);