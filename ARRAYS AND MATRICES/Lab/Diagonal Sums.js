function diagonalSums(matrix) {
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

    console.log(leftToRight + " " + rightToLeft);
}

diagonalSums([[20, 40],
    [10, 60]]);

diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);