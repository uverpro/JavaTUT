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
