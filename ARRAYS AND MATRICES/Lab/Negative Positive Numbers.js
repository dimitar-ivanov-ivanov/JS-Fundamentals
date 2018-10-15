function arrayOfPositiveAndNegative(arr) {
    let result = [];

    for (const item of arr) {
        if (item < 0) {
            result.unshift(item);
        } else {
            result.push(item);
        }
    }

    console.log(result.join("\n"));
}

arrayOfPositiveAndNegative([7, -2, 8, 9]);
arrayOfPositiveAndNegative([3, -2, 0, -1]);