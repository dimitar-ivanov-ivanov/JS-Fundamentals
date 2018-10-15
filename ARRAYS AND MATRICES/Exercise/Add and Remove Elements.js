function addOrRemoveElements(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "add":
                result.push(i + 1);
                break;
            case "remove":
                result.pop();
                break;
        }
    }

    let printResult = result.join("\n");
    console.log(printResult === "" ? "Empty" : printResult);
}

addOrRemoveElements(['add',
    'add',
    'add',
    'add']);

addOrRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']);

addOrRemoveElements(['remove',
    'remove',
    'remove']);