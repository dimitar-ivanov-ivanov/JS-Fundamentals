function lastKSequence(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = i;
        let previouK = result.slice(start, end);
        let sum = previouK.reduce((a, b) => a + b, 0);
        result.push(sum);
    }

    console.log(result.join(" "));
}

lastKSequence(6, 3);
lastKSequence(8, 2);