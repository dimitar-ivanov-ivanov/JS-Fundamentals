function multiplicationTable(n){
    let str = "<table border=\"1\">";
     
    for(let i = 0;i<=n;i++){
        str += `<tr><th>${i === 0 ? "x" : i }</th>`;
          
        for(let j = 1;j<=n;j++){
            if(i === 0){
                str += `<th>${j}</th>`;
            }
            else{        
                str += `<td>${j * i}</td>`;
             }
        }

        str +="</tr>";
    }
   

    str +="</table>";

    return str;
}

console.log(multiplicationTable(5));