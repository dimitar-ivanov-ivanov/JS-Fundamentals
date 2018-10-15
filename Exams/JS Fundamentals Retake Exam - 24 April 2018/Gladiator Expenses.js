function calculateExpenses(lostFights, helmetPrice, swordPrice, shieldPrice,
                           armorPrice) {
    let helmetBroken = Math.floor(lostFights / 2);
    let swordBroken = Math.floor(lostFights / 3);
    let shieldBroken = Math.floor(lostFights / 6);
    let armorBroken = Math.floor(shieldBroken / 2);
    let totalPrice = helmetBroken * helmetPrice + swordBroken * swordPrice +
        shieldBroken * shieldPrice + armorBroken * armorPrice;

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}
calculateExpenses(7,
    2,
    3,
    4,
    5
);

calculateExpenses(23,
    12.50,
    21.50,
    40,
    200
);
