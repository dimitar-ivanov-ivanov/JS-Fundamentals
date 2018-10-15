function cityMarket(sales) {
    let townsAndProducts = new Map();
    sales
        .forEach(s => {
            let [town, product, quantitySale] = s.split(/\s*->\s*/);
            let [salesCount, priceForUnit] = quantitySale.split(/\s*:\s*/);
            let totalPrice = salesCount * priceForUnit;

            if (!townsAndProducts.has(town)) {
                townsAndProducts.set(town, new Map());
            }
            if (!townsAndProducts.get(town).has(product)) {
                townsAndProducts.get(town).set(product, 0);
            }
            let currentSum = townsAndProducts.get(town).get(product);
            townsAndProducts.get(town).set(product, currentSum + totalPrice);
        });

    console.log(print(townsAndProducts));

    function print(townsAndProducts) {
        let result = "";

        for (let [town, products] of townsAndProducts) {
            result += `Town - ${town}\n`;
            for (let [product, totalIncome] of products) {
                result += `$$$${product} : ${totalIncome}\n`;
            }
        }

        return result;
    }
}

cityMarket(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
);