function extractText(str) {
    let result = [];
    let first = str.indexOf("(");

    while (first > -1) {
        let second = str.indexOf(")", first + 1);

        if (second != -1) {
            let substr = str.substr(first + 1, second - first - 1);
            result.push(substr);
        } else {
            break;
        }

        first = str.indexOf("(", second + 1);
    }

    return result.join(", ");
}

console.log(extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'));