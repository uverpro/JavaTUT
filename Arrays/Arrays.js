


let fruits = ["apple", "mango", "kiwi", "grapes"];
console.log(fruits); // Will print the ELEMENTS of the Array
console.log(fruits.length); // WILL print 4 because there are 3 ELEMENTS in the Array
console.log(fruits[0]); // WILL print "apple" because ELEMENTS in array begin at "0", same as indices



let stuff = [true, 42, "dog"]; // Can put anything into an Array. Booleans, numbers, strings.
console.log(stuff);


//THE PUSH METHOD
let pushstuff = [false, 85, "tooty"]
console.log(pushstuff); // 3
pushstuff.push("fruity");
console.log(pushstuff);
pushstuff.push("on rooty");
console.log(pushstuff);
console.log(pushstuff.length);
// ADDS ELEMENT TO THE END OF AN ARRAY



// DOC THE OTHER METHODS



let alphabet = ["a", "b", "c", "d", "e"]
console.log(alphabet.indexOf("d")); // 3
console.log(alphabet.indexOf("a")); // 0
console.log(alphabet.indexOf("z")); // -1
// Unlinke a string.indexOf(), an array will not return the first character
// let alphabet = ["a", "b", "c", "dog", "e"]
// console.log(alphabet.indexOf("d")); // -1
