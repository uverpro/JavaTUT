// SCOPE & VARIABLES PART 1

// Scope determines what set of variables are accessible
// at anytime you are running your program.

//GLOBAL SCOPE:
let apple = "apple";
console.log(apple); // ==> "apple"

function sayApple() {
    console.log(apple);
}
sayApple(); // ==> "apple"
// Have access to the Function/Local scope as well as any previous declared variables


//FUNCTION/LOCAL SCOPE:
function sayPotato() {
    let potato = "hello, this is a potato.";
    console.log(potato);
};

sayPotato(); // ==> "hello, this is a potato."

console.log(potato); // ==> ERROR
// Don't have access to potato variable because it's defined within the function scope


// BLOCK SCOPE:
let carrot = "snake";
if (true) {
    let carrot = "carrot";
    console.log(carrot);
}

console.log(carrot); // "carrot" // "snake"
// First printed the value of carrot INSIDE the block
// Second printed the value established in the global scope
