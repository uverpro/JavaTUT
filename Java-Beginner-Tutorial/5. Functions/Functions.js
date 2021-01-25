console.log((20 + 25) / 2); // 22.5
console.log((100 + 113) / 2); // 106.5

// Use "Functions" to repeatedly run code like above

// let calculateAverage = function() { // Defining the function. Functions always precede "()"
//     console.log("I am a Function"); // Neither will return because we're not "calling" the Function
//     console.log("Ending Function");
// };

// console.log(calculateAverage); // [Function: calculateAverage]



let functionConsole = function() { // <-- Function Definition
    console.log("I am a Function");
    console.log("Ending Function");
};

console.log("one");
functionConsole(); // <-- Function Call
console.log("two");
functionConsole();
console.log("three");
//functionConsole();
//functionConsole(); Can call this function as many times as I'd like

// one
// I am a Function
// Ending Function
// two

// JS evaluates top down. So first console.log, function call, and then second console.log


// Function Definition
let calculateAverage = function(num1, num2) { // num1, num2 are the functions parameters. Input it will accept
    // let finalAverage = (num1 + num2) / 2; // would be shorter way to write this
    let sum = num1 + num2;
    let finalAverage = sum / 2; // Can have multiple variable and lines in a function
    console.log(finalAverage); // Better to use a return statement here. See line 55.
};

// Function Call
calculateAverage(10, 20); // num1 = 10, num2 = 20. Will return "15"
calculateAverage(50, 100); // Will return "75"
calculateAverage(1000, 1000000); // Will return "500500"
calculateAverage(45, 50); // Will return "47.5"



// New Function
let calAvg = function(canB, any) {
    let finAvg = (canB + any) / 2;
    return finAvg;
    console.log("Dimming? Porque?") // JS will not run any code after a Return Function
};

console.log(calAvg(5, 10)); // By using the Return Function can use this return value in other code
let result = calAvg(5, 10);
console.log(result + 2); // 9.5
// We often take the result of a function and perform other operations on it



// If string is greater than 4 chars, return all upper case. If smaller, return all lower case
let yellOrWhisper = function(str) {
    if (str.length > 4) { // NOTE: Using conditionals inside the function! Write you want the LENGTH of the str to be greater than 4!
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
};

console.log(yellOrWhisper("exCELLent")); // EXCELLENT
console.log(yellOrWhisper("DOG")); // dog
// "str" parameter
// "exCELLent" or "DOG" is the argument
