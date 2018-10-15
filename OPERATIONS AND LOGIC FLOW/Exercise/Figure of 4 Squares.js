function writeFigure(n){
  let lineLength = 2*n -1;

  let totalLines = n % 2 === 0 ? n - 1 : n;

  let linesForCrosses = [0,Math.ceil((totalLines - 2) /2),totalLines-1];

  let str = "";
 
  let dashesLength = (lineLength - 3)/2;  
  let dashes = "-".repeat(dashesLength);
  dashes = `+${dashes}+${dashes}+\n`;
 
  let spacesLength = (lineLength - 3)/2;
  let spaces = " ".repeat(spacesLength);
  spaces = `|${spaces}|${spaces}|\n`;

  for(i = 0;i< totalLines;i++){
      if(linesForCrosses.includes(i)){
          str += dashes;
      }
      else{
          str += spaces;
      }
  }

  str = str.slice(0,str.length-1);
  return str;
}

console.log(writeFigure(4));
console.log(writeFigure(5));
console.log(writeFigure(6));
console.log(writeFigure(7));

