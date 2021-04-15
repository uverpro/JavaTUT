
/**********************DAY 4 */

// Scope Lesson Learning Objectives

// 1. Identify the difference between const, let, and var declarations
// 2. Explain the difference between const, let, and var declarations

const constVar = 'something I want to be "constant"';
// Block Scoped - in a block of code aka {in here}
// Cannot be reassigned
// Cannot be re-declared

let letVar = 'something I want to be reassignable'
// Block Scoped
// can be reassigned
// cannot be re-declared

var stupidVarVar = 'don\'t do this, I will find you'
// function scoped - available in the function it is declared,
// or globally if not declared in a function
// can be reassigned
// can be re-declared <---- a problem
var stupidVarVar = 'why are you the way that you are var?'
console.log(stupidVarVar) // why are you the way that you are var?


// 3. Predict the evaluation of code that utilizes function scope, block scope,
// lexical scope, and scope chaining

var greeting = 'Hello World!'; // scope? Global
function greet() {
  console.log(greeting);
}
greet(); // output? 'Hello World!'

function greet() {
  var greeting = 'Hello World!'; // scope? function scoped
  console.log(greeting);
}
greet(); // output? 'Hello World'
console.log(greeting); // output? *ERROR, function scoped*

{
  let greeting = 'Hello World!'; // scope? - block scope
  var lang = 'English'; // scope? -function/ global
  console.log(greeting); // output? 'Hello World'
}
console.log(lang); // output? 'English'
console.log(greeting); // output? *ERROR

var name = 'Peter'; // scope? global
function greet() {
  var greeting = 'Hello'; // scope? function
  {
    let lang = 'English'; // scope? block
    'this'
    "these"
    `THIS IS ALSO A STRING`
    `${lang}`
    // console.log(`${lang}: ${greeting} ${name}`);
    console.log(lang, ':', greeting, name)
  }
}
greet(); // output? English: Hello Peter

let number = 42; // scope? global
function printNumber() {
  console.log(number);
}
function log() {
  let number = 54; // scope? block
  printNumber();
}
log(); // output? 42
​
let foo = 'foo'; // scope? global
function bar() {
  let baz = 'baz'; // scope? block
  console.log(baz); // 'baz'
  console.log(foo);// 'foo'
  number = 42; // scope? global
  console.log(number); // 42
}
bar(); // output?


// 4. Define an arrow function

let arrowFunction = () => {
    /* Just an arrow function returning undefined, nothing to see here */
};
console.log(arrowFunction()) // output?


// 5. Implement a closure and explain how the closure effects scope

let faveVideoGames = (arr) => {
    let closedOver = arr;
    let returnFunction = (game) => {
        if (game) {
            arr.push(game);
            return arr;
        }
        return arr;
    }
    return returnFunction
}
let warrenGames = ['The Witcher', 'BOTW', 'Cyberpunk', 'Dark Souls'];
let miahGames = ['Undertale'];​
let warrenGamesFunc = faveVideoGames(warrenGames);
let miahGamesFunc = faveVideoGames(miahGames);​
// console.log(warrenGamesFunc());
// console.log(miahGamesFunc('Bloodborne'))

// When we see `"..."` in the code, it is either rest parameters or the spread syntax.

// There’s an easy way to distinguish between them:

// - When `...` is at the end of function parameters, it’s “rest parameters”
// and gathers the rest of the list of arguments into an array.

// - When `...` occurs in a function call or alike, it’s called a “spread syntax”
// and expands an array into a list.

// Use patterns:

// - Rest parameters are used to create functions that accept any number of arguments.
// - The spread syntax is used to pass an array to functions
// that normally require a list of many arguments.
