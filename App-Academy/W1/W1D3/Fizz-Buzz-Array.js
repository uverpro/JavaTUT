// Fizz Buzz Array
// Write a function fizzBuzz(max) that accepts a number as an arg.

// The function should return an array containing all positive numbers
// less than max that are divisible by either 3 or 5, but not both.

let fizzBuzz = function (max) {
    let nuArray = [];
    for (let i = 1; i < max; i++) {
        let num = i
        if ((num % 3 === 0 || num % 5 === 0)
        && !(num % 3 === 0 && num % 5 === 0)) {
            nuArray.push(num);
        }
    }
    return nuArray;
};

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18
