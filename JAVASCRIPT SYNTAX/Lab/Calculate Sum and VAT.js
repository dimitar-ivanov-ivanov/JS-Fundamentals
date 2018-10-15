function sumAndVat(args){
    let sum = 0;

    for(let arg of args){
        sum += +arg;
    }

    let vat = sum * 0.2;
    let total =  sum * 1.2;

    console.log("sum = "  + sum);
    console.log("VAT = " + vat);
    console.log("total = " + total);
}

sumAndVat(["1.20", "2.60", "3.50"]);
