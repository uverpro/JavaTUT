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
// CONST and LET exist in the TEMPORAL DEAD ZONE
// The TEMPORAL DEAD ZONE means this variable will not be avaliable until it has been assigned a value
