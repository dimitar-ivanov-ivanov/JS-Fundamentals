function findVariableNamesInSentences(sentence) {
    let pattern = /\b_([a-zA-Z0-9]+)\b/gi;
    let match = pattern.exec(sentence);
    let result = [];

    while (match != null) {
        result.push(match[1]);
        match = pattern.exec(sentence);
    }

    console.log(result.join(","));
}

findVariableNamesInSentences('The _id and _age variables are both integers.');
findVariableNamesInSentences('Calculate the _area of the _perfectRectangle object.');
findVariableNamesInSentences('__invalidVariable _evenMoreInvalidVariable_ _validVariable');