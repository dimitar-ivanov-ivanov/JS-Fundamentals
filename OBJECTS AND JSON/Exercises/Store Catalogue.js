function catalogue(input) {
    let letterArr = {};
    input
        .forEach(s => {
            let args = s.split(": ").filter(w => w != "");
            let product = args[0].trim();
            let price = +args[1];
            let firstLetter = product[0];

            if (!(firstLetter in letterArr)) {
                letterArr[firstLetter] = {};
            }

            letterArr[firstLetter][product] = price;
        });

    console.log(print(letterArr));

    function print(letterArr) {
        let result = "";
        let allLetters = Array.from(Object.keys(letterArr)).sort();

        for (const letter of allLetters) {
            let allProducts = Array.from(Object.keys(letterArr[letter])).sort();
            result += letter + "\n";
            for (const product of allProducts) {
                result += `  ${product}: ${letterArr[letter][product]}\n`;
            }
        }

        return result;
    }
}

catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);

catalogue(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']);