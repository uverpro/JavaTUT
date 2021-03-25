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



// Identify JavaScript as a language that utilizes an event loop model



// Identify JavaScript as a single threaded language



// Describe the difference between asynchronous and synchronous code



// Execute the asynchronous function setTimeout with a callback.



// Given the function "function asyncy(cb) { setTimeout(cb, 1000); console.log("async") }" and the function "function callback() { console.log("callback"); }", predict the output of "asyncy(callback);"



// Use setInterval to have a function execute 10 times with a 1 second period. After the 10th cycle, clear the interval.



// Write a program that accepts user input using Node’s readline module
