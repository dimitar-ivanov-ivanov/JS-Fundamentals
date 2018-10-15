function getChampionship(input) {
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        let args = input[i].split(/\s+->\s+/g);
        let team = args[0];
        let pilot = args[1];
        let pilotPoints = +args[2];

        if (!map.has(team)) {
            map.set(team, new Map());
        }
        if (!map.get(team).has(pilot)) {
            map.get(team).set(pilot, 0);
        }
        let currentPoints = map.get(team).get(pilot);
        map.get(team).set(pilot, currentPoints + pilotPoints);
    }

    let sortedArr = Array.from(map)
        .sort((a, b) => {
            let firstTotalPoints = Array.from(a[1]).map(x => x[1]).reduce((acc, cur) => acc + cur, 0);
            let secondTotalPoints = Array.from(b[1]).map(x => x[1]).reduce((acc, cur) => acc + cur, 0);
            return secondTotalPoints - firstTotalPoints;
        })
        .slice(0, 3)
        .forEach(s => {
            let totalPoints = Array.from(s[1]).map(x => x[1]).reduce((acc, cur) => acc + cur, 0);
            console.log(`${s[0]}: ${totalPoints}`);
            let pilots = Array.from(s[1]).sort((a, b) => b[1] - a[1]);
            pilots.forEach(p => {
                console.log(`-- ${p[0]} -> ${p[1]}`);
            })
        });
}

getChampionship(["Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4"]
);