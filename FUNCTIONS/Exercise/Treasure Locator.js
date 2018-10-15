function locateTreasure(array) {
    let islands = getIslands();

    for (let i = 0; i < array.length; i += 2) {
        let x = array[i];
        let y = array[i + 1];
        let landedOnIsland = false;

        for (const island of islands) {
            if (x >= island.x1 && x <= island.x2 &&
                y >= island.y1 && y <= island.y2) {
                landedOnIsland = true;
                console.log(island.name);
            }
        }

        if(!landedOnIsland){
            console.log("On the bottom of the ocean");
        }
    }

    function getIslands() {
        let tuvaluIsland = {
            x1: 1,
            x2: 3,
            y1: 1,
            y2: 3,
            name: "Tuvalu"
        };

        let tokelauIsland = {
            x1: 8,
            x2: 9,
            y1: 0,
            y2: 1,
            name: "Tokelau"
        };

        let samoaIsland = {
            x1: 5,
            x2: 7,
            y1: 3,
            y2: 6,
            name: "Samoa"
        };

        let tongaIsland = {
            x1: 0,
            x2: 2,
            y1: 6,
            y2: 8,
            name: "Tonga"
        };

        let cookIsland = {
            x1: 4,
            x2: 9,
            y1: 7,
            y2: 8,
            name: "Cook"
        };

        return [tuvaluIsland, tokelauIsland, samoaIsland, tongaIsland, cookIsland];
    }
}

locateTreasure([4, 2, 1.5, 6.5, 1, 3]);
locateTreasure([6,4]);