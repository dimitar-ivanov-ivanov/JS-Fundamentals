function townsPopulation(input) {
    let towns = new Map();
    input
        .map(s => s.split("<->").filter(w => w != "").map(w => w.trim()))
        .forEach(s => {
            let name = s[0];
            let population = +s[1];

            if (!towns.has(name)) {
                towns.set(name, 0);
            }
            towns.set(name, towns.get(name) + population);
        });

    print(towns);

    function print(towns) {
        for (let [k, v] of towns) {
            console.log(k + " : " + v);
        }
    }
}

townsPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);

townsPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);