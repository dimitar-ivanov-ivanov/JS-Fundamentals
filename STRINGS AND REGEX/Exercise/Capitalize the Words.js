function capitalizeWords(str) {
    let result = [];
    let words = str.split(" ");
    for (const word of words) {
        let first = word[0].toUpperCase();
        result.push(first + word.toLowerCase().substr(1, word.length - 1));
    }

    console.log(result.join(" "));
}

capitalizeWords('Capitalize these words');
capitalizeWords('Was that Easy? tRY thIs onE for SiZe!');
