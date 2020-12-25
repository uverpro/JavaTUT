// Write a function `isDivBy4` that accepts a number as an argument. The function should return a
// boolean indicating whether or not the number is divisible by 4.

let isDivBy4 = function(num) { // the "if" & "else" Statements are in the first brackets
    if (num % 4 === 0) { // every Return Function has its own curly brackets
    return true;
} else {
    return false;
    }
};

console.log(isDivBy4(8)); // true
console.log(isDivBy4(12)); // true
console.log(isDivBy4(24)); // true
console.log(isDivBy4(9)); // false
console.log(isDivBy4(10)); // false
