function equalNeighbors(matrix) {
    let neighbors = matrix
        .map((item, i) => {
            let pairs = 0;
            item
                .forEach((innerItem, j) => {
                    if (i + 1 < matrix.length && innerItem === matrix[i + 1][j]) {
                        pairs++;
                    }
                    if (j + 1 < matrix[i].length && innerItem === matrix[i][j + 1]) {
                        pairs++;
                    }
                });

            return pairs;
        })
        .reduce((acc, cur) => {
            return acc + cur;
        }, 0);

    console.log(neighbors);
}

equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);

equalNeighbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]);

equalNeighbors([['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]);