// Callback Quiz Review

let bar = function() {
    console.log("Arches"); // 3
};

let foo = function() {
    console.log("Everglades"); // 2
    bar();
    console.log("Sequoia"); // 4
};

console.log("Zion"); // 1
foo();
console.log("Acadia"); // 5
// Zion, Everglades, Arches, Sequoia, Acadia


let foo = function() {
    console.log("Everglades"); // 2
    console.log("Sequoia"); // 3
};

console.log("Zion"); // 1
foo();
console.log("Acadia"); // 4
// Zion, Everglades, Sequoia, Acadia



let bar = function(s) {
    return s.toLowerCase() + "..."; // 1
};

let foo = function(message, cb1, cb2) {
    console.log(cb1(message)); // 1
    console.log(cb2(message)); // 2
};

foo("Hey Programmers", bar, function(s) {
    return s.toUpperCase() + "!"; // 2
});
// hey programmers...
// HEY PROGRAMMERS!



function foo() {
    console.log("fizz"); // 4
}

function bar() {
    console.log("buzz"); // 2
}

function boom(cb1, cb2) {
    console.log("zip"); // 1
    cb1();
    console.log("zap"); // 3
    cb2();
    console.log("zoop"); // 5
}

boom(bar, foo);
// zip, buzz, zap, fizz, zoop



let bar = function(mystery) {
    mystery("sneaky");
};

let foo = function(secret) {
    console.log(secret);
};

bar(foo);
// foo is the function acting as the callback


let foo = function() {
    console.log("hello");
    return 42;
};
console.log(foo); // [Function: foo]

let foo = function() {
    console.log("hello");
    return 42;
};
foo; // prints nothing
