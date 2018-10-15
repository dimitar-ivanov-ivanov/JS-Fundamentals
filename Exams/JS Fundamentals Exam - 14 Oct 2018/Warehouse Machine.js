function storeWarehouse(input) {
    let brands = {};

    for (let i = 0; i < input.length; i++) {
        let [command, brand, name, expireDate, quantityStr] = input[i]
            .split(/,\s+/gm)
            .filter(s => s !== "");

        let quantity = +quantityStr;

        switch (command) {
            case "IN":
                addCoffe(brands, brand, name, expireDate, quantity);
                break;
            case "OUT":
                if (brands.hasOwnProperty(brand) && brands[brand].hasOwnProperty(name)) {
                    if (brands[brand][name].expireDate.localeCompare(expireDate) === 1 &&
                        brands[brand][name].quantity >= quantity) {
                        brands[brand][name].quantity -= quantity;
                    }
                }
                break;
            case"REPORT":
                print(brands);
                break;
            case"INSPECTION":
                printSorted(brands);
                break;
            default:
                break;
        }
    }

    function addCoffe(brands, brand, name, expireDate, quantity) {
        if (!brands.hasOwnProperty(brand)) {
            brands[brand] = {};
        }
        if (!brands[brand].hasOwnProperty(name)) {
            brands[brand][name] = {expireDate: expireDate, quantity: quantity};
        } else {
            if (expireDate.localeCompare(brands[brand][name].expireDate) === 1) {
                brands[brand][name].expireDate = expireDate;
            } else if (expireDate.localeCompare(brands[brand][name].expireDate) === 0) {
                brands[brand][name].quantity += quantity;
            }
        }
    }

    function print(brands) {
        console.log(">>>>> REPORT! <<<<<");
        for (let brand of [...Object.entries(brands)]) {
            console.log(`Brand: ${brand[0]}:`);
            for (let coffe of [...Object.entries(brand[1])]) {
                console.log(`-> ${coffe[0]} -> ${coffe[1].expireDate} -> ${coffe[1].quantity}.`);
            }
        }
    }

    function printSorted(brands) {
        console.log(">>>>> INSPECTION! <<<<<");
        let sorted = [...Object.entries(brands)]
            .sort((a, b) => {
                return a[0].localeCompare(b[0])
            });
        for (let [brand, coffes] of sorted) {
            console.log(`Brand: ${brand}:`);
            let sortedCoffes = [...Object.entries(coffes)]
                .sort((a, b) => b[1].quantity - a[1].quantity);
            for (let coffe of sortedCoffes) {
                console.log(`-> ${coffe[0]} -> ${coffe[1].expireDate} -> ${coffe[1].quantity}.`);
            }
        }
    }
}

/*storeWarehouse([
    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "OUT, Lavazza, Crema e Gusto, 2022-05-01, 5",
    "OUT, Folgers, Black Silk, 2022-03-01, 14",
    "OUT, Batdorf & Bronson, Espresso, 2024-05-25, 20",
    "REPORT"]
);*/

/*
storeWarehouse([
        "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
        "IN, Folgers, Black Silk, 2023-03-01, 14",
        "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
        "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
        "IN, Folgers, Black Silk, 2022-01-01, 10",
        "IN, Lavazza, Intenso, 2022-07-19, 20",
        "OUT, Dallmayr, Espresso, 2022-07-19, 15",
        "OUT, Dallmayr, Crema, 2022-07-19, 5",
        "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
        "REPORT",
        "INSPECTION",
    ]
);*/
