// HOISTING IN JAVASCRIPT

// FUNCTION HOISTING


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
