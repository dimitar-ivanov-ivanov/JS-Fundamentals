function work(input) {
    let specialized = new Set();
    specialized.add("Programming");
    specialized.add("Hardware maintenance");
    specialized.add("Cooking");
    specialized.add("Translating");
    specialized.add("Designing");

    let average = new Set();
    average.add("Driving");
    average.add("Managing");
    average.add("Fishing");
    average.add("Gardening");

    let clumsy = new Set();
    clumsy.add("Singing");
    clumsy.add("Accounting");
    clumsy.add("Teaching");
    clumsy.add("Exam-Making");
    clumsy.add("Acting");
    clumsy.add("Writing");
    clumsy.add("Lecturing");
    clumsy.add("Modeling");
    clumsy.add("Nursing");

    let totalMoney = 0;
    let specializedCount = 0;
    let clumsyCount = 0;

    for (let i = 0; i < input.length; i++) {
        let args = input[i].split(/\s+:\s+/);
        let job = args[0];
        let money = +args[1];

        if (specialized.has(job)) {
            if (money < 200) {
                continue;
            }
            specializedCount++;
            money *= 0.8;
            totalMoney += money;
            if (specializedCount === 2) {
                totalMoney += 200;
                specializedCount = 0;
            }
        } else if (clumsy.has(job)) {
            clumsyCount++;
            if (clumsyCount === 2) {
                money -= 5 * money / 100;
            } else if (clumsyCount === 3) {
                money -= 10 * money / 100;
                count = 0;
            }
            totalMoney += money;
        } else {
            totalMoney += money;
        }
    }

    console.log(`Final sum: ${totalMoney.toFixed(2)}`);

    if (totalMoney < 1000) {
        console.log(`Mariyka need to earn ${(1000 - totalMoney).toFixed(2)} gold more to continue in the next task.`);
    } else {
        console.log(`Mariyka earned ${(totalMoney - 1000).toFixed(2)} gold more.`);
    }
}