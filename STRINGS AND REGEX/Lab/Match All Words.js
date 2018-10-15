function matchWords(input) {
    let regex = /\W+/;
    let words = input.split(regex).filter(w => w != "");
    console.log(words.join("|"));
}

matchWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');
matchWords('_(Underscores) are also word characters');