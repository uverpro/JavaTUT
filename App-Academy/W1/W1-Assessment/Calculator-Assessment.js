// Calculator
// This problem is worth 5 points.
// You may receive partial credit.
// Build a calculator function that takes in three arguments: num1, operator,
// and num2. Each number will be an integer and the operator will be +, -,
// * or /. Your function will perform the calculations between the two
// numbers and return the answer.


// If the operator is invalid, return NaN.


function calculator(num1, operator, num2) {
    if (operator === "+") {
       return num1 + num2;
    }
    if (operator === "-") {
       return num1 - num2;
    }
    if (operator === "*") {
       return num1 * num2;
    }
    if (operator === "/") {
       return num1 / num2;
    }
};

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (calculator(123, "+", 456) === 579) score++;
if (calculator(987, "-", 654) === 333) score++;
if (calculator( 99, "*",   3) === 297) score++;
if (calculator(111, "/",   3) ===  37) score++;

if (isNaN( calculator( 42, "?",  42))) score++;

console.log("You have scored " + score + "/5 points.");
