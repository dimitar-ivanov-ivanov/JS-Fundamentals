function composeTag(arr){
    let fileLocation = arr[0];
    let alternateText = arr[1];
     
    console.log(`<img src="${fileLocation}" alt="${alternateText}">`);
}

composeTag(['smiley.gif', 'Smiley Face']);