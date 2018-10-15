function engeneeringCompany(input) {
    let brands = new Map();
    input
        .forEach(s => {
            let args = s.split(" | ").filter(w => w != "");
            let brand = args[0];
            let model = args[1];
            let producedCars = +args[2];

            if (!brands.has(brand)) {
                brands.set(brand, new Map());
            }

            if (!brands.get(brand).has(model)) {
                brands.get(brand).set(model, 0);
            }

            let currentProducedCars = brands.get(brand).get(model);
            brands.get(brand).set(model,currentProducedCars + producedCars);
        });

    print(brands);

    function print(brands) {
        for (let [brand, models] of brands) {
            console.log(brand);
            for (let [model, price] of models) {
                console.log(`###${model} -> ${price}`);
            }
        }
    }
}

engeneeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);