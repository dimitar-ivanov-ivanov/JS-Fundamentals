function startRace(arr) {
    let pilots = arr.shift().split(/\s+/g);
    for (let data of arr) {
        let [command, pilot] = data.split(/\s+/g);
        switch (command) {
            case "Join":
                if (!pilots.includes(pilot)) {
                    pilots.push(pilot);
                }
                break;
            case "Crash":
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf(pilot);
                    pilots.splice(index, 1);
                }
                break;
            case "Pit":
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf(pilot);
                    if (index !== pilots.length - 1) {
                        pilots.splice(index, 1);
                        pilots.splice(index + 1, 0,pilot);
                    }
                }
                break;
            case "Overtake":
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf(pilot);
                    if (index !== 0) {
                        pilots.splice(index, 1);
                        pilots.splice(index - 1, 0, pilot);
                    }
                }
                break;
        }
    }

    console.log(pilots.join(" ~ "));
}

startRace(["Vetel Hamilton Slavi",
    "Pit Hamilton",
    "Overtake Vetel",
    "Crash Slavi"]
);

startRace(["Vetel Hamilton Raikonnen Botas Slavi",
    "Pit Hamilton",
    "Overtake LeClerc",
    "Join Ricardo",
    "Crash Botas",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Crash Slavi"]
);