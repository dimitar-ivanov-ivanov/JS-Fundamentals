function cookingByNumbers(input) {
    let num = +input[0];
    let chop = n => n / 2;
    let dice = n => Math.sqrt(n);
    let spice = n => n + 1;
    let bake = n => n * 3;
    let fillet = n => n - n * 20 / 100;

    for (let i = 1; i < input.length; i++) {
        switch (input[i]) {
            case "chop":
                num = chop(num);
                break;
            case "dice":
                num = dice(num);
                break;
            case "spice":
                num = spice(num);
                break;
            case "bake":
                num = bake(num);
                break;
            case "fillet":
                num = fillet(num);
                break;
        }

        console.log(num);
    }
}

//cookingByNumbers([32, "chop", "chop", "chop", "chop", "chop"]);
//cookingByNumbers([9, "dice", "spice", "chop", "bake", "fillet"]);