function getTowns(input) {
    let result = [];

    for (let i = 1; i < input.length; i++) {
        let args = input[i].split(/\s*\|\s*/).filter(s => s !== "");
        let town = {
            Town: args[0],
            Latitude: +args[1],
            Longitude: +args[2]
        };

        result.push(town);
    }

    console.log(JSON.stringify(result));
}

getTowns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

getTowns(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);