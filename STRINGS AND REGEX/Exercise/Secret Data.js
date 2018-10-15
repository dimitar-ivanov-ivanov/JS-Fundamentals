function secretData(input) {
    let regexes = [/(\*[A-Z][a-zA-Z]+)(?= |\t|$)/g,
    /(\+[0-9-]{10})(?= |\t|$)/g,
    /(![a-zA-Z0-9]+)(?= |\t|$)/g,
    /(_[A-Za-z0-9]+)(?= |\t|$)/g];

    input.map(s => {
        regexes.forEach(r => {
            s = s.replace(r, (m) => "|".repeat(m.length))
        });
        console.log(s);
    });
}

secretData(['Agen Ivankov *Ivankov Ivankov picked up +555-49-796 and !2491a23BVB34Q and _Aurora21']);