function arena(input) {
    let gladiators = new Map();
    for (let i = 0; i < input.length; i++) {
        let s = input[i];
        if (s === "Ave Cesar") {
            break;
        }

        let args = [];
        if (s.includes("vs")) {
            args = s.split(/\s*vs\s*/);
            gladiatorMatch(gladiators, args[0], args[1]);
            continue;
        }

        args = s.split(/\s*->\s*/);
        let gladiator = args[0];
        let technique = args[1];
        let skill = +args[2];

        if (!gladiators.has(gladiator)) {
            gladiators.set(gladiator, new Map());
        }

        if (!gladiators.get(gladiator).has(technique)) {
            gladiators.get(gladiator).set(technique, 0);
        }
        if (gladiators.get(gladiator).get(technique) < skill) {
            gladiators.get(gladiator).set(technique, skill);
        }
    }

    //console.log(gladiators);
    print(gladiators);

    function gladiatorMatch(gladiators, firstGladiatorName, secondGladiatorName) {
        let firstGladiator = gladiators.get(firstGladiatorName);
        let secondGladiator = gladiators.get(secondGladiatorName);

        if(firstGladiator === undefined || secondGladiator === undefined){
            return;
        }

        for (let [technique, skill] of firstGladiator) {
            if (secondGladiator.has(technique)) {
                if (skill < secondGladiator.get(technique)) {
                    gladiators.delete(firstGladiatorName);
                    return;
                } else if (skill > secondGladiator.get(technique)) {
                    gladiators.delete(secondGladiatorName);
                    return;
                }
            }
        }
    }

    function compareGladiators(firstGladiator, secondGladiator) {
        let firstSkill = Array.from(firstGladiator[1]).map(x => x[1]).reduce((acc, cur) => acc + cur, 0);
        let secondSkill = Array.from(secondGladiator[1]).map(x => x[1]).reduce((acc, cur) => acc + cur, 0);

        if (firstSkill > secondSkill) {
            return -1;
        } else if (firstSkill < secondSkill) {
            return 1;
        } else {
            return firstGladiator[0].localeCompare(secondGladiator[0]);
        }
    }

    function compareTechniques(firstTechnique, secondTechnique) {
        let firstName = firstTechnique[0];
        let firstSkill = firstTechnique[1];
        let secondName = secondTechnique[0];
        let secondSkill = secondTechnique[1];

        if (firstSkill > secondSkill) {
            return -1;
        } else if (firstSkill < secondSkill) {
            return 1;
        } else {
            return firstName.localeCompare(secondName);
        }
    }

    function print(gladiators) {
        let sorted = Array.from(gladiators).sort((a, b) => compareGladiators(a, b));

        for (let [gladiator, techniques] of sorted) {
            let totalSkill = Array.from(techniques).map(x => x[1]).reduce((acc, cur) => acc + cur, 0);
            console.log(`${gladiator}: ${totalSkill} skill`);

            let sortedTechniques = Array.from(techniques).sort((a, b) => compareTechniques(a, b));
            for (let [technique, skill] of sortedTechniques) {
                console.log(`- ${technique} <!> ${skill}`);
            }
        }
    }
}

/*
arena(["Pesho -> BattleCry -> 400",
    "Gosho -> PowerPunch -> 300",
    "Stamat -> Duck -> 200",
    "Stamat -> Tiger -> 250",
    "Ave Cesar"]);*/

arena(["Pesho -> Duck -> 400",
"Julius -> Shield -> 150",
"Gladius -> Heal -> 200",
"Gladius -> Support -> 250",
"Gladius -> Shield -> 250",
"Pesho vs Gladius",
"Gladius vs Julius",
"Gladius vs Gosho",
"Ave Cesar"]);