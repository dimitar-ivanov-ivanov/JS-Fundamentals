function nonDecreasingSubsequence(input) {
    let n = input.length;
    input = input.map(Number);
    let biggest;
    let result = [];

    for (let i = 0; i < n; i++) {
        if (biggest != undefined) {
            if (input[i] >= biggest) {
                result.push(input[i]);
                biggest = input[i];
            }
        } else {
            biggest = input[i];
            result.push(input[i]);
        }
    }

    console.log(result.join("\n"));
}

nonDecreasingSubsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);

nonDecreasingSubsequence([1,
    2,
    3,
    4]);

nonDecreasingSubsequence([20,
    3,
    2,
    15,
    6,
    1]);