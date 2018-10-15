function magicMatrix(matrix) {
    matrix = matrix.map((item, i) => {
        let sum = item.reduce((acc, cur) => {
            return acc + cur;
        }, 0);

        return sum;
    });

    let result = matrix.filter((item, i) => (i !== 0 && item != matrix[i - 1]));

    return result.length > 0 ? false : true;
}

console.log(magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));;

console.log(magicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));;

console.log(magicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));;