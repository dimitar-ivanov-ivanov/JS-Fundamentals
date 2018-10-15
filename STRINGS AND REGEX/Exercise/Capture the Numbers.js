function captureNums(arr) {
    let pattern = /\d+/gi;
    let result = [];

    for (const sentence of arr) {
        let match = sentence.match(pattern);

        if (match != null) {
            for (let i = 0; i < match.length; i++) {
                result.push(match[i]);
            }
        }
    }

    console.log(result.join(" "));
}

captureNums(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']);

captureNums(['123a456',
    '789b987',
    '654c321',
    '0']);

captureNums(['Let’s go11!!!11!',
    'Okey!1!']);