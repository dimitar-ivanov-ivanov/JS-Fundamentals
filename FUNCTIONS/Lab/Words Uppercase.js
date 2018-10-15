function wordsUppercase(str) {
    str = str.toUpperCase();
    let words = str.split(/\W+/);
    words = words.filter(w => w != "");
    return words.join(", ");
}

console.log(wordsUppercase("Hi, how are you?"));
console.log(wordsUppercase("hello"));