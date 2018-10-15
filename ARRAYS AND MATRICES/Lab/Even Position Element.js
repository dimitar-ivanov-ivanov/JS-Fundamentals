function evenPositionElements(array) {
    let result = [];
    for (const arrayKey in array) {
        if (arrayKey % 2 === 0) {
            result.push(array[arrayKey]);
        }
    }
    return result.join(" ");
}

console.log(evenPositionElements(["20", "30", "40"]));
console.log(evenPositionElements(["5", "10"]));