function printArrayWithGivenDelimeter(input){
    let delimeter = input.pop();
    console.log(input.join(delimeter));
}

printArrayWithGivenDelimeter(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']);

printArrayWithGivenDelimeter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_']);