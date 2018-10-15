function eatMeals(meals, commands) {
    let eaten = 0;

    for (let i = 0; i < commands.length; i++) {
        let args = commands[i].split(" ");
        let command = args[0];

        if(command === undefined){
            continue;
        }

        switch (command) {
            case "Serve":
                if (meals.length > 0) {
                    let last = meals.pop();
                    console.log(`${last} served!`);
                }
                break;
            case "Add":
                if(args.length !== 2){
                    continue;
                }
                let meal = args[1];
                meals.unshift(meal);
                break;
            case "Shift":
                if(args.length !== 3){
                    continue;
                }
                let first = +args[1];
                let second = +args[2];
                if (meals.length > first && meals.length > second) {
                    let temp = meals[first];
                    meals[first] = meals[second];
                    meals[second] = temp;
                }
                break;
            case "Eat":
                if (meals.length > 0) {
                    let first = meals.shift();
                    console.log(`${first} eaten`);
                    eaten++;
                }
                break;
            case "Consume":
                if(args.length !== 3){
                    continue;
                }
                let firstFoodIndex = +args[1];
                let secondFoodIndex = +args[2];
                if (meals.length > firstFoodIndex && meals.length > secondFoodIndex) {
                    meals.splice(firstFoodIndex, secondFoodIndex - firstFoodIndex + 1);
                    eaten += secondFoodIndex - firstFoodIndex + 1;
                    console.log("Burp!");
                }
                break;
            case "End":
                if (meals.length > 0) {
                    console.log(`Meals left: ${meals.join(", ")}`);
                } else {
                    console.log("The food is gone");
                }
                console.log(`Meals eaten: ${eaten}`);
                return;
        }
    }
}

eatMeals(['chicken', 'steak', 'eggs'],
    ['Serve',
        'Eat',
        'End',
        'Consume 0 1']
);

eatMeals(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
    ['Add spaghetti',
        'Shift 0 1',
        'Consume 1 4',
        'End']
);

eatMeals(['carrots', 'apple', 'beet'],
    ['Consume 0 2',
        'End',]
);