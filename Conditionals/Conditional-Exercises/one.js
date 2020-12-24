//Snippet 1-1
let a = "celery";
let b = "SQUASH";

if (a === a.toUpperCase()) { // side note: always put () after this Java String Method
    console.log("alpha"); // a ("celery") is not uppercase. WILL NOT print
}

if (b === b.toUpperCase()) {
    console.log("beta"); // b ("SQUASH") is all uppercase, this WILL print
}



//Snippet 1-2
let number = 9;

if (number > 4) {
    console.log("ding"); // WILL print
} else if (number % 3 === 0) {
    console.log("dong"); // true but statement stops running on line 97, thus WILL NOT print
}



//Snippet 1-3
let z = 12;

if (z > 10) {
    console.log("vroom"); // WILL print
}

if (z % 3 === 0) {
    console.log("skrrt"); // since this is a new "if" statement, WILL print
}
