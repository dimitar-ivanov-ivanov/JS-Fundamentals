function lowestPricesForProducts(input) {
    let productsPrices = new Map();
    let productsTowns = new Map();

    input
        .forEach(s => {
            [town, product, price] = s
                .split("|")
                .filter(w => w != "")
                .map(w => w.trim());

            /*if (!productsPrices.has(product) ||
                productsPrices.get(product) > price) {*/
                productsPrices.set(product, price);
                productsTowns.set(product, town);
            //}
        });

    console.log(print(productsPrices, productsTowns));

    function print(productsPrices, productsTowns) {
        let result = "";
        for(let [product,price] of productsPrices){
            result += `${product} -> ${price} (${productsTowns.get(product)})\n`;
        }
        return result;
    }
}

/*
lowestPricesForProducts(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);*/

lowestPricesForProducts(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'New York City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Mexico City | Audi | 100000',
'Washington City | Mercedes | 1000']);