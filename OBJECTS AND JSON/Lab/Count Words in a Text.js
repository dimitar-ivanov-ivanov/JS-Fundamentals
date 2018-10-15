function countWordsInText(input) {
    let words = {};
    input.forEach(s => {
        let splitArr = s.split(/\W+/).filter(w => w != "");
        splitArr.forEach(w => {
            if (w in words) {
                words[w]++;
            } else {
                words[w] = 1;
            }
        });
    });

    console.log(JSON.stringify(words));
}

countWordsInText(['Far too slow, you\'re far too slow.']);
countWordsInText(['JS devs use Node.js for server-side JS.-- JS for devs']);