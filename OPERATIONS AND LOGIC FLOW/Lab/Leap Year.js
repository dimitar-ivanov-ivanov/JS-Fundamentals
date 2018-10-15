function calcLeapYear(year){
    let isLeap = (year % 4 === 0 && year % 100 !== 0) ||
    (year % 400 === 0);

    let result = isLeap ? "yes"  : "no"; 

 console.log(result); 
}

calcLeapYear(1999);
calcLeapYear(2000);
calcLeapYear(1900);