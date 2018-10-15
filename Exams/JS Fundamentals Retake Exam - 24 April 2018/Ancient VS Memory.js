function ancientStrings(input) {
    let fullString = input.join(" ");
    let startRegex = /32656 19759 32763 0\s+(?<len>\d+)\s+0\s+/g;

    while (true) {
        let matches = startRegex.exec(fullString);
        if (matches == undefined) {
            break;
        }

        let len = +matches.groups["len"];

        let regex = new RegExp(`(\\d+(\\s+|)){${len}}`, 'g');
        let nameMatches = regex.exec(fullString.substr(fullString.indexOf(matches[0]) + matches[0].length));
        let nums = nameMatches[0].split(/\s+/).filter(s => s != "").map(Number);

        if (len !== nums.length) {
            continue;
        }

        let name = "";
        for (let i = 0; i < nums.length; i++) {
            name += String.fromCharCode(nums[i]);
        }
        console.log(name);
    }
}

ancientStrings(["32656 19759 32763 0  5  0 80  101 115 104 111 0 0 0 0 0 0 0 0 0 0 0",
    "0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0"]);

ancientStrings(["0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0",
    "5 0 71 111 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0",
    "75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101",
    "114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"]);