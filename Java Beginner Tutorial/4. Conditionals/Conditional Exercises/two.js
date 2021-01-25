//Snippet 2-1
let nonsense = "blog trust fund tattooed williamsburg poke roof party";
// console.log(nonsense.indexOf("ok")) // 39
let hasOk = nonsense.indexOf("ok") > -1; // TRUE statement

if (hasOk) {
    console.log("yeet"); // WILL print because hasOk is a true statement
} else if (nonsense.length > 10) {
    console.log("yo"); // true but stops running at line 7
} else {
    console.log("no");
}

let hasZoo = nonsense.indexOf("zoo") > -1; // console.log(nonsense.indexOf("zoo") = -1, thus FALSE
let hasFun = nonsense.indexOf("fun") > -1; // console.log(nonsense.indexOf("fun")) = 11, thus TRUE

if (hasZoo && hasOk) { // AND statement - BOTH conditions must be met
    console.log("cool"); // first condition not met thus WONT print
} else if (hasOk) {
    console.log("rad"); // WILL print because "hasOk === true"
} else if (hasFun) {
    console.log("dope"); // TRUE but stops running on line 20
} else {
    console.log("nope"); // stop running on line 20
}



//Snippet 2-2
let q = 25;
if (q % 3 === 0 && q % 5 === 0) { // AND statement, both conditions must be met to return true
    console.log("both"); // WONT print, first condition not met
} else if (q % 3 === 0 || q % 5 === 0) { // OR statement, only one condition must be met
    console.log("either"); // WILL print. Second condition === true
} else {
    console.log("neither")
}

let r = 9;
if (r % 3 === 0 && r % 5 === 0) {
    console.log("both"); // WONT print, second condition not met
} else if (r % 3 === 0 || r % 5 === 0) {
    console.log("either"); // WILL print, first condition met
} else {
    console.log("neither");
}

let s = 15;
if (s % 3 === 0 && s % 5 === 0) {
    console.log("both"); // WILL print, both conditions met aka both conditions are true
} else if (s % 3 === 0 || s % 5 === 0) {
    console.log("either"); // WONT print, both conditions true, but code stops running at line 50
} else {
    console.log("neither");
}

let t = 11;
if (t % 3 === 0 && t % 5 === 0) {
    console.log("both"); // WONT PRINT. Neither condition true
} else if (t % 3 === 0 || t % 5 === 0) {
    console.log("either"); // see line 59
} else {
    console.log("neither"); // WILL PRINT as neither previous statement is true
}
