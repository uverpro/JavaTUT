// Arrow Functions
// 1. Syntax
// 2. Scoping with Arrow Functions

// function sayHello(name) {
//     return `Hello ${name}`;
// };

// console.log(sayHello("Leon")); // Hello Leon

let sayHello = (name) => {
    return `Hello ${name}`;
};

console.log(sayHello("Leon")); // Hello Leon

/*
Can implicitly return single expression arrow functions
Implicit return means the function will automatically return value
without having to explicitly use the keyword return
*/
