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

// 5. Implement a closure and explain how the closure effects scope
