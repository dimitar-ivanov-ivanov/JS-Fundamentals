function mineBitcoin(input) {
    let bitcoin = 0;
    let money = 0;
    let bitcoinToLeva = 11949.16;
    let goldToLeva = 67.51;
    let firstDayOfPurchase = -1;
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        let currentMoney = +input[i];
        count++;
        if (count === 3) {
            currentMoney -= (currentMoney * 30) / 100;
            count = 0;
        }
        money += currentMoney * goldToLeva;
        if (money > bitcoinToLeva) {
            if (firstDayOfPurchase === -1) {
                firstDayOfPurchase = i + 1;
            }
            bitcoin += Math.floor(money / bitcoinToLeva);
            money = money % bitcoinToLeva;
        }
    }

    console.log(`Bought bitcoins: ${bitcoin}`);
    if (firstDayOfPurchase !== -1) {
        console.log(`Day of the first purchased bitcoin: ${firstDayOfPurchase}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

mineBitcoin(["100", "200", "300"]);
mineBitcoin(["50", "100"]);
mineBitcoin(["3124.15", "504.212", "2511.124"]);