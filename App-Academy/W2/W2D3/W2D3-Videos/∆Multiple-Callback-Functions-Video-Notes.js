// Taking Multiple Callbacks

// Write a function, greaterResult that
// accepts a number and two callbacks as arguments
// The function should call both callbacks
// passing in the number and
// return the result of the callback which is larger

let greaterResult = function (num, cb1, cb2) {

};

let doubler = function (n) {
    return n * 2;
};

let squarer = function (n) {
    return n * n;
};

console.log(greaterResult(5, doubler, squarer)); // 25
console.log(greaterResult(1, doubler, squarer)); // 2
