const digitKey = document.querySelectorAll('[data-value]');
const currentOperation = document.getElementById('currentOperation');
const lastOperation = document.getElementById('lastOperation');
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');

//Digit key funcitonality #0-9
digitKey.forEach(item => {
    item.addEventListener('click', () => inputNumber(item.textContent))
});

function inputNumber(value) {
    if (currentOperation.textContent === '0') {
        currentOperation.textContent = '';
    }
    currentOperation.textContent += value;
};

//Clear button functionality 
clearBtn.addEventListener('click', clear);

function clear() {
    if (currentOperation.textContent != '0') {
        currentOperation.textContent = '0';
        lastOperation.textContent = '0';
    }
};

//Delete button functionality
deleteBtn.addEventListener('click', deleteFunc);

function deleteFunc () {
    if (currentOperation.textContent != '0') {
        currentOperation.textContent = currentOperation.textContent
            .toString()
            .slice(0, -1)
    }
}



//Operate
function operate(a, b, operator) {
    switch (operator) {
        case '÷':
            return divide(a, b)
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
    switch (operator) {
        case '÷':
            return divide(a, b)
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