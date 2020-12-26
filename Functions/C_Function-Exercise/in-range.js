// Write a function `inRange(min, max, n)` that accepts three numbers as arguments. The function should
// return a boolean indicating if `n` is between `min` and `max` inclusive.
// Inclusive === "<=" || ">="

let inRange = function (min, max, n) {
    return n >= min && n <= max; // more efficient
};
    //     if (n >= min && n <= max) { // How I solved it, valid but inefficient
//         return true;
//     } else {
//         return false;
//     }
// };

console.log(inRange(5, 13, 8)); // true
console.log(inRange(5, 13, 29)); // false
console.log(inRange(100, 125, 100)); // true
console.log(inRange(100, 125, 99)); // false
console.log(inRange(40, 45, 44)); // true
console.log(inRange(40, 45, 45)); // true
console.log(inRange(40, 45, 46)); // false
