function calculator(a, b, operator) {
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let divide = (a, b) => a / b;
    let multiply = (a, b) => a * b;

    function performOperation(a, b, operation) {
        return operation(a, b);
    }

    switch (operator) {
        case "+": return performOperation(a, b, add);
        case "-": return performOperation(a, b, subtract);
        case "*": return performOperation(a, b, multiply);
        case "/": return performOperation(a, b, divide);
    }
}

console.log(calculator(2, 4, "+"));
console.log(calculator(3, 3, "/"));
console.log(calculator(18, -1, "*"));