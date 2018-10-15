function roadRadar(input) {
    let speed = input[0];
    let area = input[1];

    let areaLimits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    };

    let currentLimit = areaLimits[area];

    let diff = speed - currentLimit;

    if (diff > 0) {
        if (diff <= 20) {
            console.log("speeding");
        } else if (diff <= 40) {
            console.log("excessive speeding");
        } else {
            console.log("reckless driving");
        }
    }
}

roadRadar([40, "city"]);
roadRadar([21, "residential"]);
roadRadar([120, "interstate"]);
roadRadar([200, "motorway"]);