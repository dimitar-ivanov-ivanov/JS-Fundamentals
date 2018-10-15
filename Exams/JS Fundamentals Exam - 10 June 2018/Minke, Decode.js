function decode(input) {
    let countryRegex = /[A-Z][a-z]+[A-Z]/gm;
    let digitsRegex = /\d{3}(\.\d+|)+/gm;
    let startIndex = +input[0];
    let endIndex = +input[1];
    let rightWord = input[2];
    let text = input[3];
    let country = countryRegex.exec(text)[0];
    let allDigits = text.match(digitsRegex);

    let newCountry = country.substring(0, startIndex) + rightWord + country.substring(endIndex + 1, country.length);
    newCountry = newCountry.substring(0, newCountry.length - 1) + newCountry.charAt(newCountry.length - 1).toLowerCase();

    let substition = "";
    for (let i = 0; i < allDigits.length; i++) {
        let currentDigit = Math.ceil(+allDigits[i]);
        substition += String.fromCharCode(currentDigit);
    }

    substition = substition.charAt(0).toUpperCase() + substition.substr(1);


    console.log(`${newCountry} => ${substition}`);
}