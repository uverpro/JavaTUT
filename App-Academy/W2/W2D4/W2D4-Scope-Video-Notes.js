// SCOPE VIDEO
/*

The Scope of a program in JS is the set of variable
that are avaliable for use within the program.


DIFFERENT TYPES OF SCOPE IN JS:

1. GLOBAL - the global space is Javascript
Variables: declared variables in the global scope

2. LOCAL or FUNCTION - created when a function is defined
Variables: includes arguments, local variables, previously declared variables

3. BLOCK SCOPE - created by entering a pair of curly braces
Variables: denoted by the "{ }" includes previously declared variables.



GLOBAL SCOPE EXAMPLE:
const bear = { sound: "RAWR!" }

LOCAL/FUNCTION SCOPE EXAMPLE:
function bearMaker (name) {
    return "I'm" + name + " the bear Rawr!"
};
console.log(bearMaker("Miley"));

BLOCK SCOPE EXAMPLE:
if (true) {
    let candle = "fire!";
    console.log(fire);
};



What variables are avaliable in each scope?


What variables does the bearMaker function have access to?
function bearMaker (name) {
    return "I'm" + name + " the bear Rawr!"
};
console.log(bearMaker("Miley"));
// 1. Incoming Args (name)
// 2. Variables declared in the Function (bearString)


What variables does the bearMaker function have access to?
let newBear = "Lewis";
function bearMaker (name) {
    let bearString = "Here we got" + name " and " + newBear + " the bears!"
    return bearString;
};
console.log(bearMaker("Miley"));
// 1. Incoming Args (name)
// 2. Variables declared in the Function (bearString)
// 3. Previously declared variables (nuewBear)



What will be printed when the below garden function is invoked?
function garden() {
    let flower = "lily";

    function flowerBed() {
        console.log(flower);
    }
    flowerBed();
}

garden(); // ==> "lily"

It will return "lily" because of "scope chaining".

function garden() {
    let flower = "lily";

    function flowerBed() {
    let flower = "Not a Lilly!"
        console.log(flower);
    }
    flowerBed();
}

garden(); // ==> "Not a Lilly!"

*/
