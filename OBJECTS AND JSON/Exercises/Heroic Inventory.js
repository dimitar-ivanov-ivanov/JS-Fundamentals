function inventory(input) {
    let heroData = [];
    for (let i = 0; i < input.length; i++) {
        let args = input[i].split(" / ");

        let name = args[0];
        let level = +args[1];
        let items = [];

        if (args.length > 2) {
            items = args[2].split(", ");
        }

        let hero = {
            name: name,
            level: level,
            items: items
        };

        heroData.push(hero);
    }

    console.log(JSON.stringify(heroData));
}

inventory(['Isacc / 25 / Apple, GravityGun',
    'Bob / 13  /',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);