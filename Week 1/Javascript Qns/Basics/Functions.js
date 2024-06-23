function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return Math.abs(a - b);
}

function divide(a, b) {
    return a / b;
}

function Calculator(arithmeticFn, a, b) {
    return arithmeticFn(a, b);
}


console.log(Calculator(subtract, 3, 5))