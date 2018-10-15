function getDna(input) {
    let regex = /([a-z!@$#?]+)=(\d+)--(\d+)<<([a-zA-Z]+)/g;
    let organisms = [];

    for (let line of input) {
        if (line === "Stop") {
            break;
        }

        if(regex.test(line)) {
            let match = regex.exec(line);
            let charsToRemove = "!@#$?";
            let name = Array.from(match[1])
                .filter(c => !charsToRemove.includes(c)).join("");
            let length = +match[2];
            let genes = +match[3];
            let organism = match[4];

            if (name.length != length) {
                continue;
            }

            if (!(organism in organisms)) {
                organisms[organism] = 0;
            }
            organisms[organism] += genes;
        }
    }

    let sorted = [];
    for (const org in organisms) {
        sorted.push([org, organisms[org]]);
    }
    sorted.sort((a,b) => b[1] - a[1]);

    for (let organism of sorted) {
        console.log(`${organism[0]} has genome size of ${organism[1]}`);
    }
}

getDna(["!@ab?si?di!a@=7--152<<human",
    "b!etu?la@=6--321<<dog",
    "!curtob@acter##ium$=14--230<<dog",
    "!some@thin@g##=9<<human",
    "Stop!"]);