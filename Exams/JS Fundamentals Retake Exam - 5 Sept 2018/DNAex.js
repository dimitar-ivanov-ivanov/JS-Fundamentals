function getDna(input) {
    let regex = /^(?<name>[a-zA-Z!@#$?]+)=(?<len>\d+)--(?<genes>\d+)<<(?<organism>[a-zA-Z]+)$/;
    let index = 0;
    let current = input[index];
    let organisms = new Map();

    while (current != "Stop!") {
        if (regex.test(current)) {
            let match = regex.exec(current);
            let len = +match.groups["len"];
            let charsToRemove = "!@#$?";
            let name = Array.from(match.groups["name"]).filter(c => !charsToRemove.includes(c));
            name = name.join("");
            if (name.length !== len) {
                index++;
                current = input[index];
                continue;
            }
            let organism = match.groups["organism"];
            let genes = +match.groups["genes"];
            if (!organisms.has(organism)) {
                organisms.set(organism, 0);
            }
            organisms.set(organism, organisms.get(organism) + genes);
        }
        index++;
        current = input[index];
    }

    let sortArr = Array.from(organisms).sort((a, b) => b[1] - a[1]);
    for (const el of sortArr) {
        console.log(`${el[0]} has genome size of ${el[1]}`);
    }
}

getDna(["!@ab?si?di!a@=7--152<<human",
    "b!etu?la@=6--321<<dog",
    "!curtob@acter##ium$=14--230<<dog",
    "!some@thin@g##=9<<human",
    "Stop!"]);

getDna(["=12<<cat",
"!vi@rus?=2--142",
"?!cur##viba@cter!!=11--800<<cat",
"!fre?esia#=7--450<<mouse",
"@pa!rcuba@cteria$=13--351<<mouse",
"!richel#ia??=8--900<<human",
"Stop!"]);

getDna(["!@ру?би#=4--57<<polecat",
"?do?@#ri#=4--89<<polecat",
"=12<<cat",
"!vi@rus?=2--142",
"@pa!rcu>ba@cteria$=13--234<<mouse",
"?!cur##viba@cter!!=11--680<<cat",
"Stop!"]);