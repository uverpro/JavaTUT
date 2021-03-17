// Taking Multiple Callbacks

let greaterResult = function (num, cb1, cb2) {

};

let doubler = function (n) {
    return n * 2;
};

let squarer = function (n) {
    return n * n;
};

console.log(greaterResult(5, doubler, squarer)); // 25
console.log(greaterResult(1, douber, squarer)); // 2
