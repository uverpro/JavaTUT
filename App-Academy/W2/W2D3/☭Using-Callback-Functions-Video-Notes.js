// Using Callback Functions - Video 1

/*
let superAdd = function (num1, num2) {
    let sum = num1 + num2;
    return sum
};
*/

// Now let's add a third paramete to be our callback function:

let superAdd = function (num1, num2, cb) {
    console.log(cb)
    let sum = num1 + num2;
    let result = cb(sum); // doubler
    return sum;
};

let doubler = function (n) {
    return 2 * n;
};

let negate = function (n) {
    return -1 * n;
};

console.log(superAdd(3, 2, doubler));
console.log(superAdd(3, 2, negate));
