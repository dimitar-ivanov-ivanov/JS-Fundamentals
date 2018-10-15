function makeCoffe(input) {
    let coffeCaffeinePrice = 0.8;
    let coffeDecaf = 0.9;
    let tea = 0.8;
    let moneyEarned = 0;

    input.forEach(s => {
        let args = s.split(", ").filter(w => w != "");
        let coinsInserted = +args[0];
        let typeOfDrink = args[1];
        let special = drinkType = args[2];
        let sugar = +args[args.length - 1];
        let milkIsPresent = args[args.length - 2] === "milk";
        let price = 0;

        if (typeOfDrink === "coffee") {
            if (special === "caffeine") {
                price = coffeCaffeinePrice;
            } else if (special === "decaf") {
                price = coffeDecaf;
            }
        } else if (typeOfDrink === "tea") {
            price = tea;
        }

        if (milkIsPresent) {
            price += price * 10 / 100;
            price = +price.toFixed(1);
        }
        if (sugar !== 0) {
            price += 0.1;
        }

        if (coinsInserted >= price) {
            let change = coinsInserted - price;
            console.log(`You ordered ${typeOfDrink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
            moneyEarned += price;
        } else {
            let needed = price - coinsInserted;
         console.log(`Not enough money for ${typeOfDrink}. Need ${needed.toFixed(2)}$ more.`);
        }
    });

    console.log(`Income Report: ${moneyEarned.toFixed(2)}$`);
}

makeCoffe(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']
);

makeCoffe(['8.00, coffee, decaf, 4',
    '1.00, tea, 2']
);