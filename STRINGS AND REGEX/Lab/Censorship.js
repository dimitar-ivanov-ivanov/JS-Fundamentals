function censor(text, censorWords) {
    for (const word of censorWords) {
        let censorWord = '-'.repeat(word.length);
        while (text.indexOf(word) > -1) {
            text = text.replace(word, censorWord);
        }
    }

    return text;
}

console.log(censor('roses are red, violets are blue', [', violets are', 'red']));