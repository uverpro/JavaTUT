// a "CONDITION" is an expression that evaluates into a Boolean
// Conditions utilize control flow
// "CONTROL FLOW" is the order in which instructions are executed within a program
// Control flow is modified by using "CONTROL STRUCTURES"
// Control Structures are expressions which alter the control flow based on given parameters
// Control Structures in JS allow program flow to change within a unit of code or within a function
// "CONDITIONAL STATEMENTS" is one of two main control structures



let firstnum = -8;
// "if" is a new keyword that marks a block of statements to be executed, depending on the condition
if (firstnum > 0) {
    console.log('nothing') // will not print
}



let number = 5;
console.log("before");
if (number > 0) {
    console.log('hooray'); // will print
    console.log('it is positive'); // will print
} else {
    console.log('boooo'); // will not print
    console.log('it is negative'); // will not print
}
console.log("after")



let nunumber = -5;
console.log("second-before");
if (nunumber > 0) {
    console.log('hooray'); // will not print
    console.log('it is positive'); // will not print
} else {
    console.log('boooo'); // will print
    console.log('it is negative'); // will print
}
console.log("second-after")



let zero = 0;
console.log("third-before");
if (zero > 0) {
    console.log('hooray'); // will not print
    console.log('it is positive'); // will not print
} else if (zero < 0) {
    console.log('boooo'); // will not print
    console.log('it is negative'); // will not print
} else {
    console.log("it is zero"); // will print
}
console.log("third-after")



let mod = 0;

if (mod % 2 === 0) {
    console.log("it is even"); // will print
} else {
    console.log(" it is odd"); // will not print
}



let numod = 6; // the code runs from the top down

if (numod > 0) {
    console.log("it is positive"); // the code will stop running here
} else if (numod % 2 === 0) {
    console.log("it is even"); // even tho this is true, it stopped running on line 65
}



let both = 6;

if (both > 0) {
    console.log("it is positive");
}

if (both % 2 === 0) { // avoid line 67 by creating a new chain by using a new "if" statement
    console.log("it is even");
}



let namen = "Leon";

if (namen.length > 4) {
    console.log("long name");
} else {
    console.log("short name");
}

if (namen[0] === "P") {
    console.log("starts with P")
} else {
    console.log("doesn't start with P")
}



let nunamen = "Philip";

if (nunamen.length > 4) {
    console.log("long name");
} else {
    console.log("short name");
}

if (nunamen.indexOf("P") === 0) { // same as (nunamen[0] === "P")
    console.log("starts with P")
} else {
    console.log("doesn't start with P")
}
