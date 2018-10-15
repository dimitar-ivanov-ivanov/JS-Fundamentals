function startRace(input) {
    let pilots = input[0].split(/\s+/g);

    for (let i = 1; i < input.length; i++) {
        let args = input[i].split(/\s+/g);
        let command = args[0];
        let pilot = args[1];
        let temp = "";
        let nextIndex = 0;
        let indexOfPilot = pilots.indexOf(pilot);

        if (indexOfPilot === -1 && command !== "Join") {
            continue;
        }

        switch (command) {
            case "Join":
                if(indexOfPilot !== -1){
                    continue;
                }
                pilots.push(pilot);
                break;
            case "Crash":
                pilots.splice(indexOfPilot, 1);
                break;
            case "Pit":
                if (indexOfPilot === 0) {
                    nextIndex = pilots.length - 1;
                } else {
                    nextIndex = indexOfPilot - 1;
                }
                temp = pilots[indexOfPilot];
                pilots[indexOfPilot] = pilots[nextIndex];
                pilots[nextIndex] = temp;
                break;
            case "Overtake":
                if (indexOfPilot === pilots.length - 1) {
                    nextIndex = 0;
                } else {
                    nextIndex = indexOfPilot + 1;
                }
                temp = pilots[indexOfPilot];
                pilots[indexOfPilot] = pilots[nextIndex];
                pilots[nextIndex] = temp;
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