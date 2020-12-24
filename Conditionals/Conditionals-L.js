// a "Condition" is an expression that evaluates into a Boolean

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

console.log("before");

if (nunumber > 0) {
    console.log('hooray'); // will not print
    console.log('it is positive'); // will not print
} else {
    console.log('boooo'); // will print
    console.log('it is negative'); // will print
}

console.log("after")
