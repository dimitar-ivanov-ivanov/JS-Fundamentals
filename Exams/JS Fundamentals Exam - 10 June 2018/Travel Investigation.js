function startTravel(input) {
    let delimeter = input[1];
    let companies = input[0].split(delimeter).filter(s => s !== "");
    let valid = [];
    let invalid = [];

    for (let i = 2; i < input.length; i++) {
        let sentence = input[i].toLowerCase();
        let sentenceIsValid = true;
        for (let j = 0; j < companies.length; j++) {
            if (!sentence.includes(companies[j])) {
                sentenceIsValid = false;
                break;
            }
        }
        if (sentenceIsValid) {
            valid.push(sentence);
        } else {
            invalid.push(sentence);
        }
    }

    if (valid.length > 0) {
        console.log("ValidSentences");
        valid.forEach((val, i) => console.log(`${i + 1}. ${val}`));
    }

    if(valid.length > 0 && invalid.length > 0){
        console.log("==============================");
    }

    if(invalid.length > 0){
        console.log("InvalidSentences");
        invalid.forEach((val,i) => console.log(`${i+1}. ${val}`));
    }
}

/*
startTravel(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "]);
*/

startTravel(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
);


// function getTravel(input) {
//     let delimeter = input[1];
//     let companies = input[0].split(delimeter).filter(s => s != "");
//     let sentences = input.slice(2, input.length);
//     let validSentences = [];
//     let invalidSentence = [];
//
//     for (let i = 0; i < sentences.length; i++) {
//         let sentence = sentences[i].toLowerCase();
//         let includesAllComp = true;
//         for (let j = 0; j < companies.length; j++) {
//             if (!sentence.includes(companies[j])) {
//                 includesAllComp = false;
//                 break;
//             }
//         }
//         if (includesAllComp) {
//             validSentences.push(sentence);
//         } else {
//             invalidSentence.push(sentence);
//         }
//     }
//
//     if (validSentences.length > 0) {
//         console.log("ValidSentences");
//         for (let i = 0; i < validSentences.length; i++) {
//             console.log((i + 1) + ". " + validSentences[i]);
//         }
//     }
//
//     if(validSentences.length > 0 && invalidSentence.length > 0){
//         console.log("==============================");
//     }
//
//     if (invalidSentence.length > 0) {
//         console.log("InvalidSentences");
//         for (let i = 0; i < invalidSentence.length; i++) {
//             console.log((i + 1) + ". " + invalidSentence[i]);
//         }
//     }
// }
