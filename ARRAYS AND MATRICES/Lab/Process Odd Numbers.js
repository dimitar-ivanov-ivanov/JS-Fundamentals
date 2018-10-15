function oddElementReversedAndDoubled(arr) {
    return arr
        .filter((num, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(" ");
}

console.log(oddElementReversedAndDoubled([10, 15, 20, 25]));
console.log(oddElementReversedAndDoubled([3, 0, 10, 4, 7, 3]));