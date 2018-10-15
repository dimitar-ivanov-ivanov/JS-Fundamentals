function findPalindrome(s) {
    return s === s.split("").reverse().join("");
}

console.log(findPalindrome("haha"));
console.log(findPalindrome("racecar"));
console.log(findPalindrome("unitinu"));