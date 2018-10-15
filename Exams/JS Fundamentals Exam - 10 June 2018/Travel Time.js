function travelTime(input) {
    let countries = {};
    input.forEach(s => {
        let [country, town, costStr] = s.split(/\s+>\s+/g);
        let cost = +costStr;
        if (!(country in countries)) {
            countries[country] = {};
        }
        if (!(town in countries[country]) || countries[country][town] > cost) {
            countries[country][town] = cost;
        }
    });

    let sorted = [...Object.entries(countries)].sort((a, b) => a[0].localeCompare(b[0]));

    for(let [country,towns] of sorted){
        let townsArr =[...Object.entries(towns)].sort((a,b) => b[1] - a[1]);
        console.log(country + " -> " +townsArr.map(x => `${x[0]} -> ${x[1]}`).join(" "));
    }
}

travelTime(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]
);