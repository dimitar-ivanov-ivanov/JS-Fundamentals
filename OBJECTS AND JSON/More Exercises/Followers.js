function addPeopleFollowThem(input) {
    let website = getWebsite(input);
    print(website);

    function getWebsite(input) {
        let website = new Map();
        let welcomeCommands = input.filter(s => s.includes("Welcome"));

        for (let i = 0; i < welcomeCommands.length; i++) {
            let args = welcomeCommands[i].split(", ");
            let username = args[1];
            if (!website.has(username)) {
                website.set(username, {followers: new Set(), following: 0});
            }
        }

        let followingCommands = input.filter(s => !s.includes("Welcome"));
        for (let i = 0; i < followingCommands.length; i++) {
            let s = followingCommands[i];
            let args = s.split(" ");
            let first = args[0];
            let second = args[2];
            if (website.has(first) && website.has(second) && first !== second &&
                !website.get(second).followers.has(first)) {
                website.get(second).followers.add(first);
                website.get(first).following++;
            }
        }

        return website;
    }

    function compareUsers(a, b) {
        let followersA = a[1].followers.size;
        let followersB = b[1].followers.size;

        if (followersA > followersB) {
            return -1;
        } else if (followersA < followersB) {
            return 1;
        }

        return b[0].localeCompare(a[0]);
    }


    function print(website) {
        let sortedArr = Array.from(website).sort((a, b) => compareUsers(a, b));
        console.log(`Total users registered: ${website.size}`);
        for (let i = 0; i < sortedArr.length; i++) {
            let current = sortedArr[i];
            console.log(`${i + 1}. ${current[0]} : ${current[1].following} following, ${current[1].followers.size} followers`);
            if (i === 0) {
                let followers = Array.from(current[1].followers).sort();
                for (let j = 0; j < followers.length; j++) {
                    console.log(`*  ${followers[j]}`);
                }
            }
        }
    }
}

addPeopleFollowThem(["Welcome, EmilConrad",
    "Welcome, VenomTheDoctor",
    "Welcome, Saffrona",
    "Saffrona followed EmilConrad",
    "Saffrona followed VenomTheDoctor",
    "EmilConrad followed VenomTheDoctor",
    "VenomTheDoctor followed VenomTheDoctor",
    "Saffrona followed EmilConrad"]);

addPeopleFollowThem(["Welcome, JennaMarbles",
    "JennaMarbles followed Zoella",
    "Welcome, AmazingPhil",
    "JennaMarbles followed AmazingPhil",
    "Welcome, Zoella",
    "Welcome, JennaMarbles",
    "Zoella followed AmazingPhil",
    "Christy followed Zoella",
    "Zoella followed Christy",
    "Welcome, JacksGap",
    "JacksGap followed JennaMarbles",
    "Welcome, PewDiePie",
    "Welcome, Zoella"]);

