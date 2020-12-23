console.log('marker'[0]); // m
console.log('marker'[1]); // a
console.log('marker'[2]); // r
console.log('marker'[3]); // k
console.log('marker'[4]); // e
console.log('marker'[5]); // r

console.log('marker'[0 + 0]); // m
console.log('marker'[0 + 1]); // a
console.log('marker'[1 + 1]); // r
console.log('marker'[1 + 2]); // k
console.log('marker'[2 + 2]); // e
console.log('marker'[3 + 2]); // r



let str = "mackys";
console.log(str[5]); // s
console.log(str[6]); // undefined
console.log(str[-1]); // undefined
console.log([str.length - 1]); // [ 5 ]
console.log(str[str.length - 1]); // s



// ".length -1" will always return the last character in a String.
let String = "Evenflow";
console.log(String[String.length - 1]); // w
console.log(String[String.length]); // undefined
// The "length" of "Evenflow" is 8. The "indecies" is 0, 1, 2, 3, 4, 5, 6, 7
// (8 - 1) = [7] = w



let stri = 'cats';
console.log(stri.indexOf('a')); // 1
console.log(stri.indexOf('t')); // 2

console.log(stri.indexOf('Q')); // -1
// any char referenced that is not in the string will return "-1" because Java.

console.log(stri.indexOf('at')); // 1
// will return the index of the first char
console.log(stri.indexOf('atsr')); // -1
// the chars in the substring within ".indexOf" has to match the string exactly or return -1

let sentence = "Hey everyone, how are you doing?";
console.log(sentence.indexOf("every")); // 4
console.log(sentence.indexOf("every") > -1); // true
