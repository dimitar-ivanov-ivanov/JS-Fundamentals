function getSurvey(input){
    let fullRegex = /<svg><cat><text>(.*?)<\/text><\/cat>\s*<cat>(.*?)<\/cat><\/svg>/g;
    let firstCatRegex = /<text>(?<heading>.*?)\[(?<label>.*?)\]<\/text>/g;
    let secondCatRegex = /<g>\s*<val>\s*(?<rating>\d+)\s*<\/val>\s*(?<vote>\d+)\s*<\/g>/g;

}

/*function procesSurvery(input) {
    let fullRegex = /<svg>(?<first><cat>(.*?)<\/cat>)\s*(?<second><cat>(.*?)<\/cat>)<\/svg>/g;
    let ratingRegex = /<g><val>(?<rating>\d+)<\/val>(?<vote>\d+)<\/g>/g;
    let labelRegex = /<text>(?<heading>.*?)\[(?<label>.*?)\]<\/text>/g;
    let totalRating = 0;
    let totalVote = 0;

    let match = fullRegex.exec(input);
    if (!input.includes("<svg>") || !input.includes("</svg>")) {
        console.log("No survey found");
        return;
    }

    if (match === null) {
        console.log("Invalid format");
        return;
    }

    let labelMatch = labelRegex.exec(match.groups["first"]);
    if (labelMatch === null || labelMatch.groups["label"] === null) {
        console.log("Invalid format");
        return;
    }

    let label = labelMatch.groups["label"];
    let secondCat = match.groups["second"];

    while (true) {
        let ratingMatch = ratingRegex.exec(secondCat);
        if (ratingMatch === null) {
            break;
        }
        let rating = +ratingMatch.groups["rating"];
        let vote = +ratingMatch.groups["vote"];
        if (rating >= 1 && rating <= 10 && vote >= 0) {
            totalRating += rating * vote;
            totalVote += vote;
        }
    }

    let average = totalRating / totalVote;

    console.log(`${label}: ${(+average.toFixed(2)).toString()}`);
}
*/

procesSurvery("<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>");
//procesSurvery("<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>");
//procesSurvery("<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It's great, don't mess with it!</p><p>I'd like to have the option for delivery</p>");
//procesSurvery("<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>");