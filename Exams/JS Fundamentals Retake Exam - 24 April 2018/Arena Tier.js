function arena(input) {
    let gladiators = new Map();

    for (let i = 0; i < input.length; i++) {
        let s = input[i];
        if (s === "Ave Cesar") {
            break;
        }

        if (s.includes("vs")) {
            battleGladiators(gladiators, s);
            continue;
        }

        addGladiator(gladiators, s);
    }

    function addGladiator(gladiators, s) {
        let args = s.split(/\s*->\s*/);
        let gladiatorName = args[0];
        let technique = args[1];
        let skill = +args[2];

        if (!gladiators.has(gladiatorName)) {
            gladiators.set(gladiatorName, new Map());
        }
        if (!gladiators.get(gladiatorName).has(technique)) {
            gladiators.get(gladiatorName).set(technique, 0);
        }

        let current = gladiators.get(gladiatorName).get(technique);
        if(current < skill) {
            gladiators.get(gladiatorName).set(technique, current + skill);
        }
    }

    function battleGladiators(gladiators, s) {
        let args = s.split(" vs ");
        let firstGladiatorName = args[0];
        let secondGladiatorName = args[1];
        let firstGladiator = gladiators.get(firstGladiatorName);
        let secondGladiator = gladiators.get(secondGladiatorName);

        if (firstGladiator === undefined || secondGladiator === undefined) {
            return;
        }

        for (let [technique, firstSkill] of firstGladiator) {
            if (secondGladiator.has(technique)) {
                let secondSkill = secondGladiator.get(technique);
                if (firstSkill < secondSkill) {
                    gladiators.delete(firstGladiatorName);
                    return;
                } else if (firstSkill > secondSkill) {
                    gladiators.delete(secondGladiatorName);
                    return;
                }
            }
        }
    }

    print(gladiators);

    function compareGladiators(first, second) {
        let firstTotalSkill = Array.from(first[1]).map(x => x[1]).reduce((acc, cur) => acc + cur, 0);
        let secondTotalSkill = Array.from(second[1]).map(x => x[1]).reduce((acc, cur) => acc + cur, 0);

        if (firstTotalSkill > secondTotalSkill) {
            return -1;
        } else if (firstTotalSkill < secondTotalSkill) {
            return 1;
        }

        return first[0].localeCompare(second[0]);
    }

    function compareTechnique(first, second) {
        if (first[1] > second[1]) {
            return -1;
        } else if (first[1] < second[1]) {
            return 1;
        }

        return first[0].localeCompare(second[0]);
    }

    function print(gladiators) {
        let sortedGladiators = Array.from(gladiators).sort((a, b) => compareGladiators(a, b));

        for (let [gladiator, techniques] of sortedGladiators) {
            let sortedTech = Array.from(techniques).sort((a, b) => compareTechnique(a, b));

            console.log(`${gladiator}: ${sortedTech.map(x => x[1]).reduce((acc, cur) => acc + cur, 0)} skill`);
            for (let [technique, skill] of sortedTech) {
                console.log(`- ${technique} <!> ${skill}`);
            }
        }
    }
}

arena(["Pesho -> BattleCry -> 400",
    "Gosho -> PowerPunch -> 300",
    "Stamat -> Duck -> 200",
    "Stamat -> Tiger -> 250",
    "Ave Cesar"]);


arena(["Pesho -> Duck -> 400",
    "Julius -> Shield -> 150",
    "Gladius -> Heal -> 200",
    "Gladius -> Support -> 250",
    "Gladius -> Shield -> 250",
    "Pesho vs Gladius",
    "Gladius vs Julius",
    "Gladius vs Gosho",
    "Ave Cesar"]);