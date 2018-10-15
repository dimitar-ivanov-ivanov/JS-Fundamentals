function makeKompot(arr) {
    let fruits = getFruits(arr);
    startKompot(fruits);

    function getFruits(arr) {
        let fruits = new Map();

        for (let i = 0; i < arr.length; i++) {
            let current = arr[i].split(/\s+/g);
            let fruit = current[0];
            let weightInGrams = +current[1] * 1000;

            if (!fruits.has(fruit)) {
                fruits.set(fruit, 0);
            }
            let currentWeight = fruits.get(fruit);
            fruits.set(fruit, currentWeight + weightInGrams);
        }

        return fruits;
    }

    function startKompot(fruits) {
        if (fruits.has("cherry")) {
            let cherry = fruits.get("cherry") / (25 * 9);
            fruits.set("cherry", 0);
            console.log(`Cherry kompots: ${Math.floor(cherry)}`);
        } else {
            console.log(`Cherry kompots: 0`);
        }

        if (fruits.has("peach")) {
            let peach = fruits.get("peach") / (2.5 * 140);
            fruits.set("peach", 0);
            console.log(`Peach kompots: ${Math.floor(peach)}`);
        } else {
            console.log(`Peach kompots: 0`);
        }
        if (fruits.has("plum")) {
            let plum = fruits.get("plum") / (10 * 20);
            fruits.set("plum", 0);
            console.log(`Plum kompots: ${Math.floor(plum)}`);
        } else {
            console.log(`Plum kompots: 0`);
        }

        let totalFruitsOthers = Array.from(fruits).map(x => x[1])
            .reduce((acc, cur) => acc + cur, 0);
        totalFruitsOthers /= 5000;
        console.log(`Rakiya liters: ${totalFruitsOthers.toFixed(2)}`);
    }
}

makeKompot(['cherry 1.2',
    'peach 2.2',
    'plum 5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',
    'plum 10',
    'cherry 20.0',
    'papaya 20']
);

makeKompot(['apple 6',
        'peach 25.158',
        'strawberry 0.200',
        'peach 0.1',
        'banana 1.55',
        'cherry 20.5',
        'banana 16.8',
        'grapes 205.65'
        , 'watermelon 20.54'
    ]
);