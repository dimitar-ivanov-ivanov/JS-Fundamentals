function jsonTable(input) {
    let html = "<table>\n";

    input
        .forEach(s => {
            let employee = JSON.parse(s);
            html += "\t<tr>\n";
            html += `\t\t<td>${htmlEscape(employee.name)}</td>\n`;
            html += `\t\t<td>${htmlEscape(employee.position)}</td>\n`;
            html += `\t\t<td>${+employee.salary}</td>\n`;
            html += "\t<tr>\n";
        });

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

jsonTable(['{"name": "Pesho", "position": "Promenliva", "salary": 100000}',
    '{"name": "Teo", "position": "Lecturer", "salary": 1000}',
    '{"name": "Georgi", "position": "Lecturer", "salary": 1000}'
]);