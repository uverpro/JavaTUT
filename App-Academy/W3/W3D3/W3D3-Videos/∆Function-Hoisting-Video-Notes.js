// HOISTING IN JAVASCRIPT



// VARIABLE HOISTING REVIEW:

// VAR HOISTING
function hoistVar() {
    // var dog; is hoisted to the top of the scope but hasn't yet been assigned a value
    console.log(dog);
    var dog = "dog";
}
hoistVar(); // undefined

// VARIABLE HOISTING - CONST and LET
function hoistLetandConst() {
    console.log(cat);
    const cat = "cat";
}
hoistLetandConst(); // ReferenceError: cat is not defined
// CONST and LET exist in the TEMPORAL DEAD ZONE
// The TEMPORAL DEAD ZONE means this variable will not be avaliable until it has been assigned a value



// FUNCTION HOISTING

// FUNCTION DECLERATION HOISTING
hello(); // hello!
function hello() {
    console.log("hello!")
}
// Will hoist function to the top, allowing it to be used wherever you are
// can be somehwat sloppy if the evocation is at the top and the decleration is hidden
// or at the bottom, etc.


// FUNCTION EXPRESSION HOISTING w/ LET & CONST

hello(); // ReferenceError: Cannot access 'hello' before initialization
let hello = function() {
    let hello = function() {
        console.log("hello!")
    }
};
