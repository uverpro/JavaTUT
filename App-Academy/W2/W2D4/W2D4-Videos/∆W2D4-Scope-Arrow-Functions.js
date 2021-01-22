// Arrow Functions
// 1. Syntax
// 2. Scoping with Arrow Functions

////////////////////////////////

function sayHello(name) {
    return `Hello ${name}`;
};

console.log(sayHello("Leon")); // Hello Leon

////////////////////////////////

let sayHello = (name) => {
    return `Hello ${name}`;
};

console.log(sayHello("Leon")); // Hello Leon

////////////////////////////////

let sayHello = name => `Hello ${name}`;

console.log(sayHello("Leon"));

/*
Can implicitly return single expression arrow functions
Implicit return means the function will automatically return value
without having to explicitly use the keyword return
*/

/**********************************************************************/

function myFilter(array, cb) {
    let filtered = [];
    array.forEach(function (ele, i) {
        if (cb(ele)) {
            filtered.push(ele);
        }
    });
    return filtered;
}

console.log(myFilter([1, 2, 3], (el) => el === 1)); // [ 1 ]



const myFilter = (array, cb) => {
    let filtered = [];
    array.forEach((ele, i) => {
        if (cb(ele)) {
            filtered.push(ele);
        }
    });
    return filtered;
};

console.log(myFilter([1, 2, 3], el => el === 1)); // [ 1 ]
