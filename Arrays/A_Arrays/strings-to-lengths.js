// Write a function `stringsToLengths` that accepts an array of strings as an argument.
//The function should return a new array containing the lengths of the elements of the original array.

function stringsToLengths (words) {
    let lengths = [];
    for (i = 0; i < words.length; i++) {
        let nums = words[i];    //console.log(array[i]);
        lengths.push(nums.length); // words[i].length WORKS. No need for conditionals!
    }
    return lengths;
};


console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
// [5, 4, 5, 7]

console.log(stringsToLengths(["on", "off", "handmade"]));
// [2, 3, 8]
