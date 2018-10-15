function scanTickets(text, command) {
    let passangerRegex = / [A-Z][A-Za-z]*-[A-Z][A-Za-z]*( |\.-[A-Z][A-Za-z]* )/g
    let airportRegex = / ([A-Z]{3})\/([A-Z]{3}) /g;
    let flightNumberRegex = / [A-Z]{1,3}\d{1,5} /g;
    let companyRegex = /- [A-Z][A-Za-z]*\*[A-Z][A-Za-z]* /g;

    let name = passangerRegex.exec(text);
    let flight = airportRegex.exec(text);
    let company = companyRegex.exec(text);
    let flightNumber = flightNumberRegex.exec(text);
    let startingAirport = "";
    let destinationAirport = "";

    if (name !== null) {
        name = name[0].trim().replace(/-/g, ' ');
    }

    if (company !== null) {
        company = company[0]
            .trim()
            .split(/[- *]+/g)
            .filter(s => s != "")
            .join(" ");
    }

    if (flightNumber !== null) {
        flightNumber = flightNumber[0].trim();
    }

    if (flight !== null) {
        startingAirport = flight[1];
        destinationAirport = flight[2];
        flight = flight[0].trim();
    }

    switch (command) {
        case "name":
            console.log(`Mr/Ms, ${name}, have a nice flight!`);
            break;
        case "flight":
            console.log(`Your flight number ${flightNumber} is from ${startingAirport} to ${destinationAirport}.`);
            break;
        case "company":
            console.log(`Have a nice flight with ${company}.`);
            break;
        case "all":
            console.log(`Mr/Ms, ${name}, your flight number ${flightNumber} is from ${startingAirport} to ${destinationAirport}. Have a nice flight with ${company}.`);
            break;
    }
}

scanTickets('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ', 'all');

//scanTickets(' TEST-T.-TESTOV   SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ', 'flight');