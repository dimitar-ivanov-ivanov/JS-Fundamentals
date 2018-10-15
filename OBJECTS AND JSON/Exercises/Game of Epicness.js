function playGame(arr, matrix) {
    let kingdoms = new Map();

    getKingdoms(kingdoms, arr);
    fightKingdoms(kingdoms, matrix);
    print(kingdoms);

    function getKingdoms(kingdoms, arr) {
        arr.forEach(obj => {
            let general = obj.general;
            let kingdom = obj.kingdom;
            let army = obj.army;

            if (!kingdoms.has(kingdom)) {
                kingdoms.set(kingdom, new Map());
            }
            if (!kingdoms.get(kingdom).has(general)) {
                kingdoms.get(kingdom).set(general, {army: army, wins: 0, loses: 0});
            } else {
                let currentArmy = kingdoms.get(kingdom).get(general).army;
                kingdoms.get(kingdom).get(general).army += army;
            }
        });

        return kingdoms;
    }

    function fightKingdoms(kingdoms, matrix) {
        for (let i = 0; i < matrix.length; i++) {
            let [attackingKingdom, attackingGeneralName, defendingKingdom, defendingGeneralName] = matrix[i];
            if (attackingKingdom === defendingKingdom) {
                continue;
            }
            let attackingGeneral = kingdoms.get(attackingKingdom).get(attackingGeneralName);
            let defendingGeneral = kingdoms.get(defendingKingdom).get(defendingGeneralName);

            battle(attackingGeneral, defendingGeneral);
        }
    }

    function battle(firstGeneral, secondGeneral) {
        if (firstGeneral.army > secondGeneral.army) {
            firstGeneral.army += firstGeneral.army * 10 / 100;
            secondGeneral.army -= secondGeneral.army * 10 / 100;
            firstGeneral.wins++;
            secondGeneral.loses++;
        } else if (firstGeneral.army < secondGeneral.army) {
            secondGeneral.army += secondGeneral.army * 10 / 100;
            firstGeneral.army -= firstGeneral.army * 10 / 100;
            secondGeneral.wins++;
            firstGeneral.loses++;
        } else if (firstGeneral.army === secondGeneral.army) {
            return;
        }

        firstGeneral.army = Math.floor(firstGeneral.army);
        secondGeneral.army = Math.floor(secondGeneral.army);
    }

    function sortKingdoms(firstKingdom, secondKingdom) {
        let firstGenerals = Array.from(firstKingdom[1]);
        let secondGenerals = Array.from(secondKingdom[1]);

        let firstTotalWins = firstGenerals.map(x => x[1].wins).reduce((acc, cur) => acc + cur, 0);
        let firstTotalLoses = firstGenerals.map(x => x[1].wins).reduce((acc, cur) => acc + cur, 0);

        let secondTotalWins = secondGenerals.map(x => x[1].wins).reduce((acc, cur) => acc + cur, 0);
        let secondTotalLoses = secondGenerals.map(x => x[1].wins).reduce((acc, cur) => acc + cur, 0);

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

        return firstKingdom[0].localeCompare(secondKingdom[0]);
    }

    function print(kingdoms) {
        let sortedArr = Array.from(kingdoms).sort((a, b) => sortKingdoms(a, b));
        let kingdomWinner = sortedArr[0];
        let generals = Array.from(kingdomWinner[1]).sort((a, b) => b[1].army - a[1].army);
        console.log(`Winner: ${kingdomWinner[0]}`);

        for (let [name, stats] of generals) {
            console.log(`/\\general: ${name}`);
            console.log(`---army: ${stats.army}`);
            console.log(`---wins: ${stats.wins}`);
            console.log(`---losses: ${stats.loses}`);
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


playGame([ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]
)