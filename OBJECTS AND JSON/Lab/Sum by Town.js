function sumByTown(input) {
    let towns = {};
    for (let i = 0; i < input.length; i += 2) {
        if (input[i] in towns) {
            towns[input[i]] += +input[i + 1];
        } else {
            towns[input[i]] = +input[i + 1];
        }
    }

    console.log(JSON.stringify(towns));
}

sumByTown(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4']
);
sumByTown(['Sofia',
    '20',
    'Varna',
    '3',
    'sofia',
    '5',
    'varna',
    '4']);