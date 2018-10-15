function fromJSONToHTMLTable(input) {
    let objects = JSON.parse(input);
    let html = "<table>\n";
    html += "  <tr>";
    for (const key in objects[0]) {
        html += `<th>${key}</th>`;
    }
    html += "</tr>\n";

    for (const obj of objects) {
        html += "  <tr>";
        for (const key in obj) {
            html += `<td>${htmlEscape(obj[key].toString())}</td>`;
        }
        html += "</tr>\n";
    }

    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    html += "</table>";
    console.log(html);
}

fromJSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
fromJSONToHTMLTable(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']);