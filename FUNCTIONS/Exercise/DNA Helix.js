function helix(input) {
    let rows = +input;
    let dna = "ATCGTTAGGG";
    let currentIndex = 0;
    let placeholders = ["**${0}${1}"];

    for (let i = 0; i < rows; i++) {
        let currentRow = i % 4;

        if (currentIndex === dna.length) {
            currentIndex = 0;
        }

        if (currentRow === 0) {
            console.log(`**${dna[currentIndex++]}${dna[currentIndex++]}**`);
        } else if (currentRow === 1) {
            console.log(`*${dna[currentIndex++]}--${dna[currentIndex++]}*`);
        } else if (currentRow === 2) {
            console.log(`${dna[currentIndex++]}----${dna[currentIndex++]}`);
        } else if (currentRow === 3) {
            console.log(`*${dna[currentIndex++]}--${dna[currentIndex++]}*`);
        }

    }
}

helix(4);
helix(10);