function findPolution(pollutionMatrixStr, forces) {
    let pollutionMatrix = pollutionMatrixStr.map(x => x.split(" ").map(Number));
    applyForces(pollutionMatrix, forces);
    print(pollutionMatrix);

    function applyForces(pollutionMatrix, forces) {
        for (let i = 0; i < forces.length; i++) {
            let args = forces[i].split(" ");
            let force = args[0];
            let index = +args[1];

            switch (force) {
                case"breeze":
                    for (let j = 0; j < pollutionMatrix[index].length; j++) {
                        pollutionMatrix[index][j] -= 15;
                        if (pollutionMatrix[index][j] < 0) {
                            pollutionMatrix[index][j] = 0;
                        }
                    }
                    break;
                case "gale":
                    for (let j = 0; j < pollutionMatrix.length; j++) {
                        pollutionMatrix[j][index] -= 20;
                        if (pollutionMatrix[j][index] < 0) {
                            pollutionMatrix[j][index] = 0;
                        }
                    }
                    break;
                case"smog":
                    for (let j = 0; j < pollutionMatrix.length; j++) {
                        for (let k = 0; k < pollutionMatrix[j].length; k++) {
                            pollutionMatrix[j][k] += index;
                        }
                    }
                    break;
            }
        }
    }

    function print(pollutionMatrix) {
        let thresholdParticle = 50;

        let result = [];
        for (let i = 0; i < pollutionMatrix.length; i++) {
            for (let j = 0; j < pollutionMatrix[i].length; j++) {
                if (pollutionMatrix[i][j] >= thresholdParticle) {
                    result.push(`[${i}-${j}]`);
                }
            }
        }

        if (result.length > 0) {
            console.log(`Polluted areas: ${result.join(", ")}`);
        } else {
            console.log("No polluted areas");
        }


    }
}

findPolution([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]
);

findPolution([
        "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",
    ],
    [
        "smog 11", "gale 3",
        "breeze 1", "smog 2"
    ]);


findPolution([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]
);