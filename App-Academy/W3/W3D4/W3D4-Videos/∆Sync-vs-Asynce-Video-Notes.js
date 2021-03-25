// SYNCHRONOUS vs ASYNCHRONOUS CODE


// WHAT DOES IT MEAN TO BE SYNCHRONOUS?
    // In SYNCHRONOUS programming, we must wait for the current command to complete
// before moving executing another command.
    // There is an inherent order to synchronous code!


// WHAT DOES IT MEAN TO ASYNCHRONOUS?
    // In ASYNCHRONOUS programming, we can continue to execute another command,
// even if the current command has not yet been completed.
    // There may not be a gauranteed order to asynchronous code!


// Synchronous:
console.log("one");
console.log("two");
console.log("three");


// Asynchronous:
let foo = function() {
    console.log("two");
}

console.log("one");
foo();
console.log("three");
// Although this is predictable, the code "jumps around".
// It is NOT read in a strictly "top down" fashion
