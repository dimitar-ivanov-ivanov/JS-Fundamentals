function findWordOccurances(text, word) {
    text = text.toLowerCase();
    word = word.toLowerCase();

    let inside = `\\b${word}\\b`;
    let regex = text.match(new RegExp(inside, 'g'));
    console.log(regex ? regex.length : 0);
}

findWordOccurances('The waterfall was so high, that the child couldn’t see its peak.', 'the');