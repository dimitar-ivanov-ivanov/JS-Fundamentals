function countWordsWithMap(input) {
    let words = new Map();

    input
        .map(s => s.toLowerCase())
        .forEach(s => {
            s
                .split(/\W+/)
                .filter(w => w != "")
                .forEach(w => {
                    if (words.has(w)) {
                        words.set(w, words.get(w) + 1);
                    } else {
                        words.set(w, 1);
                    }
                });
        });

    print(words);

    function print(words) {
        let keys = Array.from(words.keys()).sort();
        keys.forEach(k => {
           console.log(`'${k}' -> ${words.get(k)} times`);
        });
    }
}

countWordsWithMap(['Far too slow, you\'re far too slow.']);
//countWordsWithMap(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);