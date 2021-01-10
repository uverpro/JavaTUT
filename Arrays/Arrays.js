


let fruits = ["apple", "mango", "kiwi", "grapes"];
console.log(fruits); // Will print the ELEMENTS of the Array
console.log(fruits.length); // WILL print 4 because there are 4 ELEMENTS in the Array
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


// HOW TO CHECK IF AN ELEMENT IS INSIDE OF AN ARRAY:
let people = ["Leon", "Darren", "Maja Rusa", "Philip"];
console.log(people.indexOf("Leon") > -1); // true
console.log(people.indexOf("Svetlana") > -1); // false
//USE "INCLUDES":
console.log(people.includes("Tatyana")); // false
console.log(people.includes("Philip")); // true
// REMEMBER element chars have to match exactly



// HOW TO GRAB INDIVIDUAL WORDS FROM STRINGS (STRING ARE IMMUTABLE. ARRAYS ARE MUTABLE)
let sentence = "I cannot wait for dinner";
// SPLIT METHOD
// to use split you must pass on an argument
// the argument should be the character you want to cut your string from
console.log(sentence.split(" ")); // returns a new array. Doesn't change "sentence".

let words = sentence.split(" ");
console.log(words);

for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
}

console.log(sentence.split("o")); // [ 'I cann', 't wait f', 'r dinner' ]
console.log(sentence.split("ait")); // [ 'I cannot w', ' for dinner' ]
// SPLIT LETS YOU TAKE FROM A STRING AND CREATE A NEW ARRAY



// JOIN METHOD
// The "join()" method creates and returns a new string
// by concatenating all of the elements in an array
let cops = ["Josh", "Frank", "Bologna", "Weinerson", "Mike"]
console.log(cops.join("-"));
let daguys = cops.join("-");
console.log(daguys);
console.log(cops);
let superfans = cops.join("DABEARS");
console.log(superfans);



// Write a function that accepts an array of number as an argument and
// reuturns the smaller number in the array
// If the array is empty it will return null

function smallestNum (arraynums) {
     // to get null add an "if" statement
     if (arraynums.length === 0){
        return null;
    }
    let smallest = arraynums[0]; // Create a new variable. The default value is the first index in the array.
    for (let i = 0; i < arraynums.length; i++) { // change i to default value of "1" so as to not compare index 0 (5) against itself.
        // console.log(arraynums[i]); // 5, 6, 4, 3, 7 // console.log(i); (0, 1, 3, 4,)
        let num = arraynums[i];
        if (num < smallest) { // If the next iteration of arraynums[i] (num) is smaller than arraynums[0] (smallest) "5"
            smallest = num; // Then replace the arraynums[] (smallest)
        }
    }
    return smallest;
};

console.log(smallestNum([5, 6, 4, 3, 7])); // 3
console.log(smallestNum([17, 20]));
console.log(smallestNum([])); // null
// null is a special value in JS used to represent emptiness/nothingness
// null is distinct from undefined because it is deliberate nothingness
