//Snippet 0-1
if (false) {
    console.log("foo");
}

if (true) {
    console.log("bar"); // will return true because a Conditional is by default true because JAVA
}



//Snippet 0-2
if (false || false) {
    console.log("boop")
}

if (true || false) {
    console.log("beep") // see line 7
}



//Snippet 0-3
let num = 40;

if (num > 0) {
    console.log("zip"); // 40 > 0, thus WILL print "zip"
}

if (num % 2 === 0) {
    console.log("zoop"); // 40 is even, thus WILL print "zoop"
}



//Snippet 0-4
let word = "jeep";

if (word[0] === "d") {
    console.log("yer"); // the first index of "jeep" is "j", so false, thus WILL NOT print "yer"
} else {
    console.log("nah"); // WILL print "nah"
}



//Snippet 0-5
let sentence = "roger that";

if (sentence[sentence.length - 1] === "t") { // personal note: using if (sentence.length - 1) would return [ 9 ]
    console.log("ends in t"); // variable[variable.length - 1] will return the last CHAR in a string, which in "sentence" ("roger that") is "t", thus WILL print
} else {
    console.log("does not end in t");
}

if (sentence.length <= 4) {
    console.log("short");
} else {
    console.log("long"); // sentence ("roger that") is greater than 4 so WILL print
}



//Snippet 1-0
let qty = 38;

if (qty > 30 && qty % 5 === 4) { // AND GATE, so BOTH conditions must be met to return true
    console.log("swish"); // first condition met, second condition would be met if "qty = 39"
} else {
    console.log("swoosh"); // WILL print. qty is > 30, but the % 5 of qty is "3", not "4"
}

if (qty > 0) { // new statement
    console.log("pos"); // WILL print
}
