// HOISTING IN JAVASCRIPT

// FUNCTION HOISTING

// VARIABLE HOISTING REVIEW:

function hoistVar() {
    // var dog; is hoisted to the top of the scope but hasn't yet been assigned a value
    console.log(dog);
    var dog = "dog";
}
hoistVar(); // undefined
