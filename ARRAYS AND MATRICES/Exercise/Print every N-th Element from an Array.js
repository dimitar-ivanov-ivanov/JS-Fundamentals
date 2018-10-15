function printEveryNthElement(input) {
    let n = input.pop();
    let printArray = input.filter((x, i) => i % n === 0);
    console.log(printArray.join("\n"));
}

printEveryNthElement(['5',
    '20',
    '31',
    '4',
    '20',
    '2']);

printEveryNthElement(['dsa',
    'asd',
    'test',
    'tset',
    '2']);

printEveryNthElement(['1',
    '2',
    '3',
    '4',
    '5',
    '6']);