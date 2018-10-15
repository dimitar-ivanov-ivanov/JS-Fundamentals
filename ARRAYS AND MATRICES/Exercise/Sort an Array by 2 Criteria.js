function sortArray(input) {
    input.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        } else if(a.length < b.length) {
            return -1;
        }

        let first = a.toLowerCase();
        let second = b.toLowerCase();
        if (first > second) {
            return 1;
        } else if (first < second) {
            return -1;
        }
        return 0;
    });

    console.log(input.join("\n"));
}

sortArray(['alpha',
    'beta',
    'gamma']);

sortArray(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);

sortArray(['test',
    'Deny',
    'omen',
    'Default']);