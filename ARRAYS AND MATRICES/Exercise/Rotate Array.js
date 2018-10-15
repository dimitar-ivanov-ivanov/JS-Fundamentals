function rotateArray(input) {
    let n = +input.pop();

    for (let i = 0; i < n; i++) {
        let last = input[input.length - 1];
        for (let j = input.length - 1; j > 0; j--) {
            input[j] = input[j - 1];
        }

        input[0] = last;
    }

    console.log(input.join(" "));
}

rotateArray(['1',
    '2',
    '3',
    '4',
    '2']);

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']);