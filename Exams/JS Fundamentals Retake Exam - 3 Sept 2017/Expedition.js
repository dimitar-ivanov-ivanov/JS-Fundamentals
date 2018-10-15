function makeExpedition(primary, secondary, overlay, startCoordinates) {
    for (let i = 0; i < overlay.length; i++) {
        overlayMatrix(primary, secondary, overlay[i]);
    }

    findExit(primary, startCoordinates);

    function overlayMatrix(primary, secondary, start) {
        let startRow = start[0];
        let startCol = start[1];
        if (startRow < 0 || startRow > primary.length || startCol < 0 ||
            startCol > primary[0].length) {
            return;
        }

        for (let i = 0; i < secondary.length; i++) {
            for (let j = 0; j < secondary[i].length; j++) {
                let primaryRow = startRow + i
                let primaryCol = startCol + j;
                if (primaryRow >= 0 && primaryRow < primary.length && primaryCol >= 0 &&
                    primaryCol < primary[0].length) {
                    if (secondary[i][j] === 1) {
                        if (primary[primaryRow][primaryCol] === 1) {
                            primary[primaryRow][primaryCol] = 0;
                        } else if (primary[primaryRow][primaryCol] === 0) {
                            primary[primaryRow][primaryCol] = 1;
                        }
                    }
                }
            }
        }
    }

    function findExit(primary, startCoordinates) {
        let row = startCoordinates[0];
        let col = startCoordinates[1];
        let visited = [];
        let step = 0;

        for (let i = 0; i < primary.length; i++) {
            visited.push([]);
            for (let j = 0; j < primary[i].length; j++) {
                visited[i].push(false);
            }
        }

        while (true) {
            visited[row][col] = true;
            step++;
            let currentVal = primary[row][col];
            if (row - 1 >= 0 && !visited[row - 1][col] && primary[row - 1][col] === 0) {
                row--;
                continue;
            }
            if (row + 1 < primary.length && !visited[row + 1][col] && primary[row + 1][col] === 0) {
                row++;
                continue;
            }
            if (col + 1 < primary[row].length && !visited[row][col + 1] && primary[row][col + 1] === 0) {
                col++;
                continue;
            }
            if (col - 1 >= 0 && !visited[row][col - 1] && primary[row][col - 1] === 0) {
                col--;
                continue;
            }

            console.log(step);
            if (row === 0) {
                console.log("Top");
                return;
            } else if (row === primary.length - 1) {
                console.log("Bottom");
                return;
            } else if (col === 0) {
                console.log("Left");
                return;
            } else if (col === primary[row].length - 1) {
                console.log("Right");
                return;
            }

            console.log(getQuadrant(primary.length, primary[0].length, row, col));

            return;
        }
    }

    function getQuadrant(n, m, row, col) {
        let firstRowStart = 0;
        let firstRowEnd = n / 2 - 1;
        let firstColStart = m / 2;
        let firstColEnd = m - 1;
        let secondRowStart = 0;
        let secondRowEnd = n / 2 - 1;
        let secondColStart = 0;
        let secondColEnd = m / 2 - 1;

        let thirdRowStart = n / 2;
        let thirdRowEnd = n - 1;
        let thirdColStart = 0;
        let thirdColEnd = m / 2 - 1;
        let fourthRowStart = n / 2;
        let fourthRowEnd = n - 1;
        let fourthColStart = m / 2;
        let fourthColEnd = m - 1;

        if (row >= firstRowStart && row <= firstRowEnd &&
            col >= firstColStart && col <= firstColEnd) {
            return "Dead end 1";
        }
        if (row >= secondRowStart && row <= secondRowEnd &&
            col >= secondColStart && col <= secondColEnd) {
            return "Dead end 2";
        }
        if (row >= thirdRowStart && row <= thirdRowEnd &&
            col >= thirdColStart && col <= thirdColEnd) {
            return "Dead end 3";
        }
        if (row >= fourthRowStart && row <= fourthRowEnd &&
            col >= fourthColStart && col <= fourthColEnd) {
            return "Dead end 4";
        }
    }
}

makeExpedition([[1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 0, 0]],
    [[0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]],
    [[1, 1],
        [2, 3],
        [5, 3]],
    [0, 2]
);

makeExpedition([[1, 1, 0, 1],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [1, 0, 1, 0]],
    [[0, 0, 1, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1]],
    [[0, 0],
        [2, 1],
        [1, 0]],
    [2, 0]
);