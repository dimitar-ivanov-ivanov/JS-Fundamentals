function radio(input) {
    let desiredThickness = +input[0];
    let cut = n => n / 4;
    let lap = n => n * 0.8;
    let grind = n => n - 20;
    let checkEtch = n => n - 1;
    let etch = n => n - 2;

    let transport = n => Math.floor(n);

    for (let i = 1; i < input.length; i++) {
        let crystal = {thickness: +input[i]};

        console.log(`Processing chunk ${crystal.thickness} microns`);

        if (performOperationOnCrystal(crystal, desiredThickness, cut, cut, transport, "Cut")) {
            continue;
        }

        if (performOperationOnCrystal(crystal, desiredThickness, lap, lap, transport, "Lap")) {
            continue;
        }

        if(performOperationOnCrystal(crystal, desiredThickness, grind, grind, transport, "Grind")){
            continue;
        }

        if(performOperationOnCrystal(crystal, desiredThickness, checkEtch, etch, transport, "Etch")){
            continue;
        }

        checkXRay(crystal, desiredThickness);

        function checkXRay(crystal, desiredThickness) {
            if (crystal.thickness + 1 === desiredThickness) {
                console.log("X-ray x1");
                console.log(`Finished crystal ${desiredThickness} microns`);
            }
        }

        function performOperationOnCrystal(crystal, desiredThickness, checkOperation, operation, transport, operationMessage) {
            let counter = 0;
            while (checkOperation(crystal.thickness) >= desiredThickness) {
                crystal.thickness = operation(crystal.thickness);
                counter++;
            }

            if (counter != 0) {
                console.log(`${operationMessage} x${counter}`);
                console.log("Transporting and washing");
                counter = 0;
                crystal.thickness = transport(crystal.thickness);
            }

            if (crystal.thickness === desiredThickness) {
                console.log(`Finished crystal ${desiredThickness} microns`);
                return true;
            }

            return false;
        }
    }
}

//radio([1375, 50000]);
radio([1000, 8100]);