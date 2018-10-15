function extractUsernames(input) {
    let result = [];
    for (const email of input) {
        let [alias, domain] = email.split("@");
        let username = alias + ".";
        let domainParts = domain.split(".");
        username += domainParts.map(dp => dp[0]).join("");
        result.push(username);
    }

    console.log(result.join(", "));
}

extractUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);