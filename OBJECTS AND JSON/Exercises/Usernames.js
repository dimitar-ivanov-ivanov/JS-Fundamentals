function getUsernames(input) {
    let set = new Set();
    for (let i = 0; i < input.length; i++) {
        set.add(input[i]);
    }

    let result = [...set.keys()].sort((a,b) => a.length - b.length || a.localeCompare(b));

    console.log(result.join("\n"));
}
/*
getUsernames(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
);*/

getUsernames(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']
);