// Reverse String
// Write a function reverseString(str) that takes in a string.
// The function should return a new string where the order the characters is reversed.

let reverseString = function (str) {
    return str.split("").reverse().join("");
};


console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'
