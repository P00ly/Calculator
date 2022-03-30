//Addition function
function addition(...num) {
    return num.reduce((previous, current) => {
        return previous + current;
    });
};

console.log(addition(9, 9, "addition"));

//subtraction function
function subtraction(...num) {
    return num.reduce((previous, current) => {
        return previous - current;
    });
};

console.log(subtraction(9, 6));


