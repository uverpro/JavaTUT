// Number Data Types

console.log(1 + 1); // 2
console.log(2.5 - 2); // .5
console.log(3 * 4); // 12
console.log(99 / 9); // 11

// Syntax:
// "+" = addition
// "-" = subtraction
// "*" = multiplication
// "/" = division

console.log(3 + 2 * 4); // 11
// REMEMBER: Order of operation. Multiplication takes precedent over addition
console.log((3 + 2) * 4); // 20



// Modulo Operation (%)

console.log(20 % 5); // 0
console.log(21 % 5); // 1
console.log(22 % 5); // 2
console.log(23 % 5); // 3
console.log(24 % 5); // 4
console.log(25 % 5); // 0
console.log(26 % 5); // 1

// Modulo finds the remainder
console.log(21 % 5); // 1
console.log(25 % 5); // 0


// If a smaller number is getting modulo by a larger number, it will return the "smaller number"
    // AKA the first number or number getting moduloed
console.log(7 % 21); // 7



// Modulo can be used to return a boolean value

booleanOfFive = (num) => {
    return num % 5;
};

console.log(booleanOfFive(31)); // false
console.log(booleanOfFive(35)); // true
