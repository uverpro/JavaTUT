// SCOPE VARIABLES PART 2



// LET
// "let" is a block scope variable and can be reassigned
// (can't redeclare a variable within the same scope but can reassign it)

function blockScope () {
    let test = "upper scope";
    // let test = "not upper scope" // ==> ERROR
    // test = "not upper scope" // ==> "not upper scope"
    if (true) {
        let test = "lower scope";
        console.log(test); // ==> "lower scope"
    }
    console.log(test); // ==> "upper scope"
}

blockScope();



// CONST
// "const" - is BLOCK SCOPED and can NOT be reassigned!
// (but is mutable!)

function constBlockScope () {
    const test = ["upper scope"];
    // const = ["not upper scope"] // ==> ERROR
    if (true) {
        const test = ["lower scope"];
        console.log(test); // ==> [ "upper scope" ]
    }
    console.log(test); // ==> [ "upper scope" ]
};

constBlockScope();



// VAR
// "var" is FUNCTION SCOPED and can be reassigned
// var is legacy. Use let & const

function varStringMachine () {
    var string = "I'm function scoped!";
    if (true) {
        var string = "I've been reassigned within a block";
    }
    console.log(string);
};

varStringMachine(); // ==> "I've been reassined within a block"



// HOISTING!
/* Hoisting is when you take the name of a function or a variable (in this case variable)
and you hoist it to the top of that particular scope.
This differs between let & const and var! */

// Hoisting with Var
function hoistVar () {
    console.log(dog); // undefined
    var dog = "dog";
    console.log(dog); // dog
};

hoistVar(); // ==> undefined
// when you define a function with var (line 65),
// it will hoist the variable name to the top of that scope
// the value when hoisted will by default be set to "undefined"
// the value is not assigned until line 67!

// Hoisting with Let and Const
function hoistLetandConst () {
    console.log(cat); // ==> ERROR
    let cat = "cat";
};

hoistLetandConst(); // ==> ERROR: cat is not defined.
