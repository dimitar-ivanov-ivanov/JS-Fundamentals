function splitDelimeter(str,delimeter) {
    console.log(str.split(delimeter).join("\n"));
}

splitDelimeter('http://platform.softuni.bg', '.');
splitDelimeter('One-Two-Three-Four-Five', '-');