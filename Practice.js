
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

if (calculator( 42, "?", 42) === "Invalid Operator") score++;

console.log("You have scored " + score + "/5 points.");
