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

// 4. Define an arrow function

// 5. Implement a closure and explain how the closure effects scope
