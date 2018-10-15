function modifyAverage(num) {
    let str = num.toString();
    while (sumDigitsAverage(str) <= 5) {
        str += "9";
    }

    return str;

    function sumDigitsAverage(str) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str[i] - '0';
        }

        return sum / str.length;
    }
}

console.log(modifyAverage(101));
console.log(modifyAverage(5835));