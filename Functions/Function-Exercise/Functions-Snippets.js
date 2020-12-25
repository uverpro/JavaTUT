//Snippet 0-1
let greet = function() {
    console.log("Hey");
    console.log("Programmers!");
};

let whistle = function() {
    console.log("DOOT");
};

console.log("First");
console.log("Second");
greet();
console.log("Third");
console.log("Fourth");
whistle();

// First
// Second
// Hey
// Programmers!
// Third
// Fourth
// DOOT



//Snippet 0-2
let howMany = function() {
    return 42;
};

console.log(howMany); // [Function: howMany] just printing the name of the function because there are no arguments
console.log(howMany()); // 42

const theAnswer = howMany();
console.log(theAnswer); // 42

let howMuch = function() {
    5; // There is no Return Function
};
console.log(howMuch()); // undefined because there's no Return Function within the code of the function

// [Function: howMany]
// 42
// 42
// undefined
