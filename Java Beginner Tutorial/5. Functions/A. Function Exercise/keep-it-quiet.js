// Write a function `keepItQuiet` that accepts a string as an argument. The function should return the
// lowercase version of the string with 3 periods added to the end of it.

let keepItQuiet = function(str) { // Defined the function and used "str" as a parameter for a string argument
    let shh = str.toLowerCase(); // will return a lower case version of the string with 3 periods added to the end of it
    return shh + "...";
};

console.log(keepItQuiet("HOORAY")); // hooray...
console.log(keepItQuiet("Doggo")); // doggo...
console.log(keepItQuiet("WHAT?!?!")); // what?!?!...
