

const digitKey = document.querySelectorAll('[data-value]')
const currentOperation = document.getElementById('currentOperation');


//Digit key funcitonality #0-9
digitKey.forEach(item => {
    item.addEventListener('click', () => inputNumber(item.innerHTML))
});

function inputNumber(value) {
    if (currentOperation.innerHTML === '0') {
        currentOperation.innerHTML = '';
    }
    currentOperation.innerHTML += value;
};








//Addition function
function add(...num) {
    return num.reduce((previous, current) => {
        return previous + current;
    });
};


//subtraction function
function subtract(...num) {
    return num.reduce((previous, current) => {
        return previous - current;
    });
};


//multiplication function

function multiply(...num) {
    return num.reduce((total, current) => total * current);
}

//Division function
function divide(...num) {
    return num.reduce((total, current) => total / current);
}


//Operate
function operate(a, b, operator) {
    
}


