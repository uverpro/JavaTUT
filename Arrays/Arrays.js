


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



let alphabet = ["a", "b", "c", "d", "e", "f", "g"]
console.log(alphabet.indexOf("d")); // 3
console.log(alphabet.indexOf("a")); // 0
console.log(alphabet.indexOf("z")); // -1
// Unlinke a string.indexOf(), an array will not return the first character
// let alphabet = ["a", "b", "c", "dog", "e"]
// console.log(alphabet.indexOf("d")); // -1
// console.log(alphabet.indexOf("dog")); // 3
console.log(alphabet.slice(1, 3)); // b, c



let array = ["art", "banana", "crayon", "dog"];
// let i = 2;
// console.log(array[i]); // crayon
let longWords = []; // An empty string has a valid value, "0"
for (let i = 0; i < array.length; i++) {
    // console.log(i); 0, 1, 2, 3
    // console.log(array[i]); art, banana, crayon, dog
    let word = array[i];
    if (word.length >= 4) {
        longWords.push(word);
    }
}

console.log(longWords); // [ 'banana', 'crayon' ]



let people = ["Leon", "Darren", "Maja Rusa", "Philip"];
// HOW TO CHECK IF AN ELEMENT IS INSIDE OF AN ARRAY:
console.log(people.indexOf("Leon") > -1) // true
console.log(people.indexOf("Svetlana") > -1) // false
