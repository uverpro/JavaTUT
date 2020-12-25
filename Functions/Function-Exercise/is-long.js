// Write a function `isLong` that accepts a string as an argument. The function should return a boolean
// indicating whether or not the string is longer than 5 characters

let isLong = function (str) { // Defined the function and its parameters. Put a space between an anonymous function and its parameters.
    return str.length > 5; // Can be solved using a simple Boolean. No need for if statements or conditionals.
};

// let isLong = function (str) {
//     if (str.length > 5) {
//         return true;
//     } else {
//         return false;
//     }
// };

console.log(isLong("pie")); // false
console.log(isLong("kite")); // false
console.log(isLong("kitty")); // false
console.log(isLong("telescope")); // true
console.log(isLong("thermometer")); // true
console.log(isLong("restaurant")); // true
