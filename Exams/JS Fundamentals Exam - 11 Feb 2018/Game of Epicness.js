function playGame(arr, matrix) {
    let kingdoms = getKingdoms(arr);
    battleKingdoms(kingdoms, matrix);
    print(kingdoms);

    function getKingdoms(arr) {
        let kingdoms = new Map();
        for (let i = 0; i < arr.length; i++) {
            let obj = arr[i];
            if (!kingdoms.has(obj.kingdom)) {
                kingdoms.set(obj.kingdom, new Map());
            }
            if (!kingdoms.get(obj.kingdom).has(obj.general)) {
                kingdoms.get(obj.kingdom).set(obj.general, {wins: 0, loses: 0, army: 0});
            }
            kingdoms.get(obj.kingdom).get(obj.general).army += obj.army;
        }
        return kingdoms;
    }

    function battleKingdoms(kingdoms, matrix) {
        for (let i = 0; i < matrix.length; i++) {
            [attackingKingdomName, attackingGeneralName, defendingKingdomName, defendingGeneralName]
                = matrix[i];
            if (attackingKingdomName === defendingKingdomName) {
                continue;
            }
            let attackingGeneral = kingdoms.get(attackingKingdomName).get(attackingGeneralName);
            let defendingGeneral = kingdoms.get(defendingKingdomName).get(defendingGeneralName);

            if(attackingGeneral === null || defendingGeneral === null){
                continue;
            }

            if (attackingGeneral.army > defendingGeneral.army) {
                attackingGeneral.army += attackingGeneral.army * 10 / 100;
                defendingGeneral.army -= defendingGeneral.army * 10 / 100;
                attackingGeneral.wins++;
                defendingGeneral.loses++;
                attackingGeneral.army = Math.floor(attackingGeneral.army);
                defendingGeneral.army = Math.floor(defendingGeneral.army);

            } else if (attackingGeneral.army < defendingGeneral.army) {
                attackingGeneral.army -= attackingGeneral.army * 10 / 100;
                defendingGeneral.army += defendingGeneral.army * 10 / 100;
                attackingGeneral.loses++;
                defendingGeneral.wins++;
                attackingGeneral.army = Math.floor(attackingGeneral.army);
                defendingGeneral.army = Math.floor(defendingGeneral.army);
            }

            attackingGeneral.army = Math.max(0, attackingGeneral.army);
            defendingGeneral.army = Math.max(0, defendingGeneral.army);
        }
    }

    function compareKingdoms(first, second) {
        let firstTotalWins = Array.from(first[1]).map(x => x[1].wins).reduce((acc, cur) => acc + cur, 0);
        let firstTotalLoses = Array.from(first[1]).map(x => x[1].loses).reduce((acc, cur) => acc + cur, 0);

        let secondTotalWins = Array.from(second[1]).map(x => x[1].wins).reduce((acc, cur) => acc + cur, 0);
        let secondTotalLoses = Array.from(second[1]).map(x => x[1].loses).reduce((acc, cur) => acc + cur, 0);

        if (firstTotalWins > secondTotalWins) {
            return -1;
        } else if (firstTotalWins < secondTotalWins) {
            return 1;
        }

        if (firstTotalLoses > secondTotalLoses) {
            return 1;
        } else if (firstTotalLoses < secondTotalLoses) {
            return -1;
        }

        return first[0].localeCompare(second[1]);
    }

    function print(kingdoms) {
        let sortedArr = Array.from(kingdoms).sort((a, b) => compareKingdoms(a, b));
        let winner = sortedArr[0];
        console.log(`Winner: ${winner[0]}`);
        let generals = Array.from(winner[1]).sort((a, b) => b[1].army - a[1].army);

        for (let i = 0; i < generals.length; i++) {
            console.log(`/\\general: ${generals[i][0]}`);
            console.log(`---army: ${generals[i][1].army}`);
            console.log(`---wins: ${generals[i][1].wins}`);
            console.log(`---losses: ${generals[i][1].loses}`);
        }
    }
}


playGame([{kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 0},
        {kingdom: "YorkenShire", general: "Quinn", army: 2000},
        {kingdom: "Maiden Way", general: "Berinon", army: 100000}],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]
);
