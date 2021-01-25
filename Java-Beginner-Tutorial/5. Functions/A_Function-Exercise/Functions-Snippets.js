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



//Snippet 0-3
let average = function(num1, num2) {
    console.log("Calculating..."); // <-- Will print everytime Return Function is called
    return (num1 + num2) / 2;
};

console.log(average(5, 10)); // 7.5
console.log(average(20, 26)); // 23
console.log(average(50, 100) + 2); // 77

let a = 21 + 3;
let b = 20;
let n = average(a, b);
console.log (average(n, 18)); // 20
// (average((((21 + 3) + 20) / 2 + 18) / 2)) = (((24 + 20) / 2 + 18) / 2) = ((44 / 2 + 18) / 2) = (22 + 18) / 2 = 40 / 2 = 20

// Calculating...  |
// 7.5             | First Call (Line 57)
// Calculating...  |
// 23              | Second Call (Line 58)
// Calculating...  |
// 77              | Third Call (Line 59)
// Calculating...  | Called from the "n" argument (Line 64)
// Calculating...  |
// 20              | "Fourth" Call (Line 64)



//Snippet 0-4
let exclaim = function (str) {
    let capitalized = str.toUpperCase();
    return capitalized + "!!!";
};

let result = exclaim("potato");
console.log(result); // POTATO!!!
console.log(result.length); // 9
console.log(result[0]); // P
console.log(result[result.length - 1]); // !
