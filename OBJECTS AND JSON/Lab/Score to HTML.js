function scoreToHtml(json) {
    let objects = JSON.parse(json);
    let html = "<table>\n";
    html += "  <tr><th>name</th><th>score</th></tr>\n";
    for (const obj of objects) {
        html += `  <tr><td>${htmlEscape(obj.name)}</td><td>${obj.score}</td></tr>\n`;
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

//scoreToHtml(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);
scoreToHtml(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']);

