// Recursion Lesson Learning Objectives

// Given a recursive function, identify what is the base case and the recursive case.

function sumToN(n) {
    if (n < 0) return null;
    if (n <= 1) return n; // BASE CASE // n === 0, RECURSIVE CASE

    return n + sumToN(n - 1); // RECURSIVE STEP
}

// Identify and use default parameters for functions.



// Define what a "stack overflow" means in JavaScript's call stack.



// Identify what causes the error - RangeError: Maximum call stack.



// Map out the recursive call stack when running a test case through a recursion function.



// Solve problems using recursion.



// Given a buggy recursive function, debug the function.
