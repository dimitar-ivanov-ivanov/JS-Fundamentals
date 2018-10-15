function diagonalsInMatrix(input) {
    let matrix = input.map(x => x.split(" ").map(Number));

    function printMatrix(matrix) {
        return matrix.map(item => item.join(" ")).join("\n");
    }

    let leftToRight = matrix
        .map((item, index) => {
            return +item
                .filter((innerItem, innerIndex) => {
                    return innerIndex === index;
                })[0];
        })
        .reduce((acc, cur) => {
            return acc + cur;
        }, 0);

    let rightToLeft = matrix
        .map((item, index) => {
            return +item
                .filter((innerItem, innerIndex) => {
                    return innerIndex === item.length - index - 1;
                })[0];
        })
        .reduce((acc, cur) => {
            return acc + cur;
        }, 0);

    if (leftToRight !== rightToLeft) {
        return printMatrix(matrix);
    }

    let sum = leftToRight;

    //every element that is not apart of either diagonals gets set to their sum
    matrix = matrix
        .map((item, index) => {
            return item
                .map((innerItem, innerIndex) => {
                    if (innerIndex !== item.length - index - 1 &&
                        innerIndex != index) {
                        return sum;
                    }
                    return innerItem;
                });
        });

    return printMatrix(matrix);
}

console.log(diagonalsInMatrix(['1 1 1',
    '1 1 1',
    '1 1 0']));

console.log(diagonalsInMatrix(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']));
;