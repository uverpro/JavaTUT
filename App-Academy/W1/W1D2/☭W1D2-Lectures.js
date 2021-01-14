// a "CONDITION" is an expression that evaluates into a Boolean
// Conditions utilize control flow
// "CONTROL FLOW" is the order in which instructions are executed within a program
// Control flow is modified by using "CONTROL STRUCTURES"
// Control Structures are expressions which alter the control flow based on given parameters
// Control Structures in JS allow program flow to change within a unit of code or within a function
// "CONDITIONAL STATEMENTS" is one of two main control structures



// String Data Type
const str = "dogs";
console.log(str.indexOf("g")); // 2
console.log(str[2]); // g
console.log(str[str.length -1]); // will always return the last character! // "s"
console.log(str.length -1); // 3

// str.indexOf(searchValue [, fromIndex]) // "[]" signifies an option parameter
let str = "I am a very good man!"
console.log(str.indexOf("a")) // 2
console.log(str.indexOf("a", 2)) // 2 (from index is exlusive!)
console.log(str.indexOf("a", 3)) // 5



// Function Note:
function addThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  addThreeNumbers(1, 2); // => NaN
  addThreeNumbers(1, 2, 3, 4); // => 6




// Function Lecture
// Basic Concept: Write a function once (function decleration)
// "use" it as many times as we please (function calls)

// Function Definition Break Down
// 1. The name of the function
// let functionName = function ()
// 2. A list of PARAMETERS to the function, enclosed in parentheses, "()"
// let functionName = function (num)
// 3. The code to be run when this function is run, enclosed in braces (curly brackets), "{}"
let functionName = function (num) {
return num + 5;
};
console.log(functionName(5)); // 10

// Function Definition Example
// function decleration: function thisIsMyName (parameter1, parameter2) {
//     the code to be ran
// };
// function invocation: thisIsMyName("argument1", "argument2");



// Array Lecture
// Things to know
// 1. Used to store multiple values within a list-like structure
// -Values are stored in order
// -Values are seperated by commas
// 2. Arrays are dynamic, with no set length
// - You can add and remove items
// 3. Arrays are Global Objects
// - You can make a new array anywhere!

// Combining Arrays
// The Concat Method (see other methods at end of this lecture)
// Returns a combination of two arrays WITHOUT modifying either one
let first = [1, 2, 3];
let second = [5, 5, 5];
let third = first.concat(second);
console.log(third); // => [1, 2, 3, 5, 5, 5]
console.log(first); // => [1, 2, 3]



// // ====== String Type ======:

// 1. Initialize a variable with a value of 'Hello World'
 let str = 'Hello World';

// 2. How long is this string?
console.log(str.length); // 11

// 3. What letter aka character is at position 4?
console.log(str[4]); // "o"

// 4. What position is character 'H' at?
console.log(str.indexOf("H")); // "0"



// // ====== Functions ======:

function addTwo(num1, num2) {
    return num1 + num2;
}
console.log(addtwo(1, 2)); // 3

// # `String Type`
// - Single quotes or Double quotes
//   - Be consistent
//     - 'hello'
//     - "hello"
//     - "hello' -> BAD!
// - Length
//   - The `.length` method returns the number of characters in a string:
//     - `'code'.length` -> 4
// - Indexing Strings
//   - Think of an "`Index`" as the positioning of elements
//   - Indices start at 0





// // ====== Functions ======:
function averageOfFour(arg1, arg2, arg3, arg4) {
   console.log((arg1 + arg2 + arg3 + arg4) / 4);
};

averageOfFour(1, 20, 500, 11); // 133
averageOfFour(10, 20, 30, 40); //25

function averageOfFour(arg1, arg2, arg3, arg4) {
   return (arg1 + arg2 + arg3 + arg4) / 4;
};

console.log(averageOfFour(1, 2, 3, 4)); // 2.5





// // ====== Conditionals ===:
let myBoolean = false;

if (myBoolean) {
    console.log("hi");
} else {
    console.log("hello");
};
// hello

myBoolean = 5;
if (myBoolean < 6) {
    console.log("this is a truthy value");
};
if (myBoolean < 10 ) {
    console.log("this is a falsey value");
};
// this is a truthy value
// this is a falsey value



// 'else' is mutually exclusive:
let hungerLevel = 5; // let hungerLevel = 15; // "almost HANGRY!"
if (hungerLevel < 1) {
    console.log('not hungry yet');
} else if (hungerLevel <= 5) {
    console.log('snack time!'); // WILL print
} else if (hungerLevel <= 9) {
    console.log('Time for a meal!');
} else if (hungerLevel <= 10) {
    console.log('HANGRY!');
} else {
    console.log('almost HANGRY!');
};
// snack time!



let hungerLevel = 5;

if (hungerLevel < 1) {
    console.log('not hungry yet'); // WONT print
}

if (hungerLevel <= 5) {
    console.log('snack time!'); // WILL print
}

if (hungerLevel <= 9) {
    console.log('Time for a meal!'); // WILL print
}

if (hungerLevel <= 10) {
    console.log('HANGRY!'); // WILL print

} else {
    console.log('almost HANGRY!'); // WONT print
};



// // ====== Loops ===:

let ticker = 3;

// WHILE LOOP
while (ticker > 0 ) {
    console.log("I ran a lap!");
    ticker--;
}
// will print "I ran a lap!" 3x

// FOR LOOP
for (let i = 0; i < 3; i++) {
    console.log("I ran a lap!")
}
// will print "I ran a lap!" 3x



// // ======= Amazing Arrays === :
let array = [];

array.push(4);
console.log(array); // [ 4 ]
array.push(5);
console.log(array); // [ 4, 5 ]
array.push("sup");
console.log(array); // [ 4, 5, 'sup' ]
console.log(array[0]); // => 4
console.log(array[array.length - 1]); // 'sup'
console.log(array.length); // => 3





// # `Functions`
// - input (aka Arguments), output (aka return value),
// - "Invoking a function" --> calling your function into action / running the function code
// - blocks of code that we can invoke multiple times
// - prevent us from having to rewrite code

//   ### The `return` keyword
//   - By default, js functions will return `undefined`.
//   - This, we need to use the `return` keyword:
//     ```js
//     function addTwo(num1, num2) {
//       return num1 + num2;
//     }
//     console.log(addtwo(1, 2)); // 3
//     ```
//   - The `return` keyword stops executing code, nothing else below is run
//     ```js

// # Conditionals
// - AKA the 'if/else if/else' statement
// - Help with 'control flow' (See readings)
// - You can chain these into big blocks for complex logic, ex:
// ```js
// let hungerLevel = 5;
// if (hungerLevel < 1) {
//     console.log('not hungry yet');
// } else if (hungerLevel <= 5) {
//     console.log('snack time!');
// } else if (hungerLevel <= 9) {
//     console.log('Time for a meal!');
// } else {
//     console.log('HANGRY!');
// } else if (hungerLevel <= 9) {
//     console.log('almost HANGRY!');
// }
// ```

// # Loops
// - AKA the 'for' loop and 'while' loop
// - Many types of for loop; here is the conventional and most common one you'll be using at aA:
// ```js
// for (let i = 0; i < arr.length; i++) {
//   // do something
// }
// ```
// - Here is an example while loop:
// ```js
// while (index > 0 ) {
//   // do something
//   index--;
// }
// ```

// # Array Data Type
// - An array holds a COLLECTION of data
// - In JS, you can combine numbers, strings, other arrays etc. into arrays. See here:
// ```js
// let arr = [ 0, 1, "banana", [], [5, 6] ]
// ```
// - Common array methods you will use often: (HINT: look these up in MDN to see what they do!)
//   - array.length
//   - array.push("banana")
//   - array.pop()
//   - array.slice(i, j)
// - Arrays are *not* a primitive data type, and thus *mutable*.
