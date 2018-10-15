function cappyJuice(input) {
    let juices = {};
    let bottles = {};

    input
        .forEach(s => {
            let args = s.split(" => ").filter(w => w != "");
            let product = args[0];
            let quantity = +args[1];

            if (product in juices) {
                juices[product] += quantity;
            } else {
                juices[product] = quantity;
            }

            if (juices[product] >= 1000) {
                if (!(product in bottles)) {
                    bottles[product] = 0;
                }
                bottles[product] += Math.floor(juices[product] / 1000);
                juices[product] %= 1000;
            }
        });
    
    console.log(print(bottles));
    
    function print(bottles) {
        let result = "";
        for (let product in bottles) {
            result += `${product} => ${bottles[product]}\n`;
        }

        return result;
    }
}

cappyJuice(["Orange => 2000",
    "Peach => 1432",
    "Banana => 450",
    "Peach => 600",
    "Strawberry => 549"]);