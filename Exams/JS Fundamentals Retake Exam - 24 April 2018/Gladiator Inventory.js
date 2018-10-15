function gladiatorInventory(input) {
    let inventory = input[0].split(" ");

    for (let i = 0; i < input.length; i++) {
        let args = input[i].split(" ");
        let command = args[0];
        let item = args[1];
        let itemIndex = inventory.indexOf(item);

        switch (command) {
            case"Buy":
                if(itemIndex === -1) {
                    inventory.push(item);
                }
                break;
            case"Trash":
                if (itemIndex !== -1) {
                    inventory.splice(itemIndex, 1);
                }
                break;
            case"Repair":
                if (itemIndex !== -1) {
                    let removedItem = inventory.splice(itemIndex, 1)[0];
                    inventory.push(removedItem);
                }
                break;
            case"Upgrade":
                args = item.split("-");
                item = args[0];
                let upgradePart = args[1];
                itemIndex = inventory.indexOf(item);
                if (itemIndex !== -1) {
                    let upgradedItem = inventory[itemIndex] + ":" + upgradePart;
                    inventory.splice(itemIndex + 1, 0, upgradedItem);
                }
                break;
        }
    }

    console.log(inventory.join(" "));
}

gladiatorInventory(["SWORD Shield Spear",
    "Buy Bag",
    "Trash Shield",
    "Repair Spear",
    "Upgrade SWORD-Steel",
    "Fight!"]);

gladiatorInventory(["SWORD Shield Spear",
    "Trash Bow",
    "Repair Shield",
    "Upgrade Helmet-V",
    "Fight!"]);