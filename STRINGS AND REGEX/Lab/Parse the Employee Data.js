function parseData(input) {
    let regex = /^([A-Z][a-z]*)\s+-\s+([1-9][0-9]*)\s+-\s+([a-zA-Z0-9- ]+)$/;
    let result = [];

    for (const argument of input) {
        let match = regex.exec(argument);
        if (match) {
            result.push(`Name: ${match[1]}\n` +
                `Position: ${match[3]}\n` +
                `Salary: ${match[2]}`);
        }
    }

    console.log(result.join("\n"));
}

parseData(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']
);

parseData(['Jonathan - 2000 - Manager',
    'Peter- 1000- Chuck',
    'George - 1000 - Team Leader']
);