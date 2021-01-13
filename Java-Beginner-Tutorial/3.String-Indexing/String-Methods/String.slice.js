// SLICE method
let myString = "qrstuv";
console.log(myString[1]); // r
console.log(myString.slice(1)); // rstuv
console.log(myString.slice(2)); // stuv
// Slice evaluates to a new string but does not change your variable AKA "myString"

let subStr = myString.slice(3);
console.log(subStr); // tuv
console.log(myString); // qrstuv

let newStr = myString.slice(1, 4);
console.log(newStr); // rst
// first number always included (inclusive)
// second number is ALWAYS excluded (exclusive)

console.log(myString.slice(-4)); // stuv
// "-4" refers to the fourth character from the last index
// -1 = v, -2 = u, -3 = t, -4 = s

console.log(myString.slice(0, -3)); // qrs
// remember, second is EXCLUDED (exclusion)
