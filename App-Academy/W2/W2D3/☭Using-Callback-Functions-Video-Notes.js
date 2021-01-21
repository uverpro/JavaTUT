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
    let result = cb(sum); // doubler // negate
    return result;
};

let doubler = function (n) {
    return 2 * n;
};

let negate = function (n) {
    return -1 * n;
};

let result = superAdd(3, 2, function (n) {
    return 2 * n;
});

console.log(superAdd(3, 2, doubler)); // 10
console.log(superAdd(3, 2, negate)); // -5
console.log(result); // 10

// Using Callback Function - Video 2

console.log(Math.sqrt);
console.log(Math.sqrt(81));
