function countATMMoney(input) {
    let atm = [];

    for (let i = 0; i < input.length; i++) {
        let ar = input[i];
        let currentCash = 0;
        if (ar.length > 2) {
            for (let j = 0; j < ar.length; j++) {
                atm.push(ar[j]);
                currentCash += ar[j];
            }
            atm = Array.from(atm.sort((a, b) => b - a));
            let totalAtm = atm.reduce((a, b) => a + b, 0);
            console.log(`Service Report: ${currentCash}$ inserted. Current balance: ${totalAtm}$.`);

        } else if (ar.length === 2) {
            let balance = ar[0];
            let withdaralMoney = ar[1];
            let withdralalTemp = withdaralMoney;

            if (balance < withdaralMoney) {
                console.log(`Not enough money in your account. Account balance: ${balance}$.`);
                continue;
            }

            let totalATM = atm.reduce((a, b) => a + b, 0);
            if (totalATM < withdaralMoney) {
                console.log("ATM machine is out of order!");
                continue;
            }

            for (let j = 0; j < atm.length; j++) {
                if (atm[j] <= withdralalTemp) {
                    withdralalTemp -= atm[j];
                    atm.splice(j, 1);
                    j--;
                }
                if (withdralalTemp <= 0) {
                    break;
                }
            }

            balance -= withdaralMoney;
            console.log(`You get ${withdaralMoney}$. Account balance: ${balance}$. Thank you!`);
        } else if (ar.length === 1) {
            let toFind = ar[0];
            let count = atm.filter(n => n === toFind).length;
            console.log(`Service Report: Banknotes from ${toFind}$: ${count}.`);
        }

    }
}

countATMMoney([[20, 5, 100, 20, 1],
        [457, 25],
        [1],
        [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
        [20, 85],
        [5000, 4500],
    ]
);