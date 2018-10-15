function aggregateTable(input) {
    let arr = input.map(x => x.split("|")
        .filter(x => x !== "")
        .map(x => x.trim()));

    let cities = arr
        .map(item => item[0]);

    let sum = arr
        .map(item => +item[1])
        .reduce((acc, cur) => acc + cur, 0);

    console.log(cities.join(", "));
    console.log(sum);
}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);