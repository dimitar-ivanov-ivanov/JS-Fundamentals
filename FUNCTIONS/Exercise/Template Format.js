function createTemplate(input) {
    let result = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
        "<quiz>\n";

    for (let i = 0; i < input.length; i += 2) {
        let question = input[i];
        let answer = input[i + 1];

        result += `  <question>\n    ${question}\n  </question>\n`;
        result += `  <answer>\n    ${answer}\n  </answer>\n`;
    }

    result += "</quiz>";

    return result;
}


console.log(createTemplate(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]));