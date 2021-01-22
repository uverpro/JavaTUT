// SCOPE VARIABLES PART 2

// LET
// "let" is a block scope variable and can be reassigned

function blockScope () {
    let test = "upper scope";
    if (true) {
        let test = "lower scope";
        // console.log(test); // ==> "lower scope"
    }
    console.log(test); // ==> "upper scope"
}



// CONST
