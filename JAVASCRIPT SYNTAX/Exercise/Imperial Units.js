function convertToFeet(inches){
    let feet = Math.floor(inches / 12);
    let feetInches = inches - 12 * feet;
 
    console.log(`${feet}'-${feetInches}"`);
}

convertToFeet(36);
convertToFeet(55);
convertToFeet(11);