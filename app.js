//Addition function
function add(...num) {
    return num.reduce((previous, current) => {
        return previous + current;
    });
};

console.log(add(9, 9, "addition"));

//subtraction function
function subtract(...num) {
    return num.reduce((previous, current) => {
        return previous - current;
    });
};

console.log(subtract(9, 6));

//multiplication function

function multiply(...num) {
    return num.reduce((total, current) => total * current);
}

console.log(multiply(2, 2, 4));

//Division function
function divide(...num) {
    return num.reduce((total, current) => total / current);
}

console.log(divide(16, 2, 2, 2));

//Operate
function operate(operator, num1, num2) {
    
}