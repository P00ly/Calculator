//Add function
function addition(...num) {
    return num.reduce((previous, current) => {
        return previous + current;
    });
};

