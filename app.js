const digitKey = document.querySelectorAll('[data-value]');
const currentOperation_div = document.getElementById('currentOperation');
const lastOperation_div = document.getElementById('lastOperation');
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');
const operatorKey = document.querySelectorAll('[data-operator]');
const equalKey = document.getElementById('equal');

let firstNumber = '';
let secondNumber = '';
let operator = null;


//Operator button functionality
operatorKey.forEach(item => {
    item.addEventListener('click', () => inputOperation(item.textContent))
});

function inputOperation(value) {
    if (operator !== null) {
    }
    firstNumber = currentOperation_div.textContent;
    operator = value;
    lastOperation_div.textContent = `${firstNumber} ${operator} `;
    currentOperation_div.textContent = '';
};

//Evaluate button functionality 
equalKey.addEventListener('click', evaluateFunc);

function evaluateFunc() {
    if (operator === null) {
        return
    }
    if (operator === '÷' && currentOperation_div === '0') {
        alert('Hey silly, you cant divide by zero!')
        return
    }
    secondNumber = currentOperation_div.textContent;
    lastOperation_div.textContent = `${firstNumber} ${operator} ${secondNumber} =`
    currentOperation_div.textContent = operate(firstNumber, secondNumber, operator);
    operator = null
};

//Digit key funcitonality #0-9 & '.'
digitKey.forEach(item => {
    item.addEventListener('click', () => inputNumber(item.textContent))
});

function inputNumber(value) {
    if (currentOperation_div.textContent === '0') {
        currentOperation_div.textContent = '';
    }
    currentOperation_div.textContent += value;
    disableDecimal();
    enableDecimal();
};

//Clear button functionality 
clearBtn.addEventListener('click', clear);

function clear() {
    if (currentOperation_div.textContent != '0') {
        currentOperation_div.textContent = '0';
        lastOperation_div.textContent = '0';
        firstOperand = '';
        secondOperand = '';
        operator = 'null';
    }
};

//Delete button functionality
deleteBtn.addEventListener('click', deleteFunc);

function deleteFunc () {
    if (currentOperation_div.textContent != '0') {
        currentOperation_div.textContent = currentOperation_div.textContent
            .toString()
            .slice(0, -1)
    }
}
//Decimal rules
function disableDecimal() {
    if (currentOperation_div.textContent.includes('.')) {
        document.getElementById('decimal').disabled = true;
    }
}

function enableDecimal() {
    if (currentOperation_div.textContent.indexOf('.') === -1) {
        document.getElementById('decimal').disabled = false;
    }
};

//create event listener for equal button


//Addition function
function add(a, b) {
   return a + b;
};
//subtraction function
function subtract(a, b) {
    return a - b;
};

//multiplication function

function multiply(a, b) {
    return a * b; 
};

//Division function
function divide(a, b) {
    return a / b;
};

//Operate
function operate(a, b, operator) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '÷':
            if (b === 0) {
                return null
            }
            else return divide(a, b)
        case 'x':   
            return multiply(a, b)
        case '-':
            return subtract(a, b)
        case 'add':
            return add(a, b)
        default:
            return null 
    }
}