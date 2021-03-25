let bar = function() {
    console.log("Arches");
};

let foo = function() {
    console.log("Everglades");
    bar();
    console.log("Sequoia");
};

console.log("Zion");
foo();
console.log("Acadia");
// Zion, Everglades, Arches, Sequoia, Acadia


let foo = function() {
    console.log("Everglades");
    console.log("Sequoia");
};

console.log("Zion");
foo();
console.log("Acadia");
// Zion, Everglades, Sequoia, Acadia



let bar = function(s) {
    return s.toLowerCase() + "...";
};

let foo = function(message, cb1, cb2) {
    console.log(cb1(message));
    console.log(cb2(message));
};

foo("Hey Programmers", bar, function(s) {
    return s.toUpperCase() + "!";
});
// hey programmers...
// HEY PROGRAMMERS!



let bar = function(mystery) {
    mystery("sneaky");
};

let foo = function(secret) {
    console.log(secret);
};

bar(foo);



let foo = function() {
    console.log("hello");
    return 42;
};
console.log(foo); // [Function: foo]

let foo = function() {
    console.log("hello");
    return 42;
};
foo;
