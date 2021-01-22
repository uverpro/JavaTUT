// Write a function `stringsToLengths` that accepts an array of strings as an argument.
//The function should return a new array containing the lengths of the elements of the original array.

function stringsToLengths (array) {
    let stringLength = [];
    for (i = 0; i < array.length; i++) {
        let word = array[i];    //console.log(array[i]);
        stringLength.push(word.length); // words[i].length WORKS. No need for conditionals!
        // lengths.push puts "()" into new array
        // words[i].length = words[0].length = belly.length = 5
    }
    return stringLength;
};


console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
// [5, 4, 5, 7]

console.log(stringsToLengths(["on", "off", "handmade"]));
// [2, 3, 8]
