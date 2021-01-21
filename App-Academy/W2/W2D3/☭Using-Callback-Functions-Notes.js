// Using Callback Functions

/*
let superAdd = function (num1, num2) {
    let sum = num1 + num2;
    return sum
};
*/

// Now let's add a third paramete to be our callback function:

let superAdd = function (num1, num2, cb) {
    let sum = num1 + num2;
    let result = cb(sum);
    return sum;
};

let doubler = function (number) {
    return 2 * number;
};

console.log(superAdd(3, 2, doubler));
