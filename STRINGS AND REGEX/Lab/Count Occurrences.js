function countOccurances(target, text) {
    let count = 0;
    let index = text.indexOf(target);
    while (index > -1) {
        count++;
        index = text.indexOf(target, index + 1);
    }

    return count;
}

console.log(countOccurances('the', 'The quick brown fox jumps over the lay dog.'));