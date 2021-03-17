// Using Callback Functions - Video 1

/*
let superAdd = function (num1, num2) {
    let sum = num1 + num2;
    return sum
};
*/

// Now let's add a third parameter to be our callback function:

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

console.log(Math.sqrt); // [Function: sqrt]
console.log(Math.sqrt(81)); // 9

// Math.sqrt is a function so we can use it ass a call back!

console.log(superAdd(80, 1, Math.sqrt)); // 9

let foo = function (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
};

foo ('alpha', 'bravo', 'charlie')
foo ('alpha', 'bravo',) // will return undefined, missing an argument
foo ('alpha', 'bravo', 'charlie', 'tango')

// This will safeguard against that:
// let superAdd = function (num1, num2, cb) {
//     if (cb === undefined) {
//         return num1 + num2
//     } else {
//     let sum = num1 + num2;
//     return cb(sum);
//     }
// };

// console.log(superAdd(80, 1)) // 81
