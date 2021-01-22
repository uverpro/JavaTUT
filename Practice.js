// Write a function `stringsToLengths` that accepts an array of strings as an argument.
// The function
// should return a new array containing the lengths of the elements of the original array.

let stringsToLengths = function (array) {
  let nuArray = [];
  for (let i = 0; i < array.length; i++) {
    let words = array[i];
    nuArray.push(words.length);
  }
  return nuArray;
};

console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
// [5, 4, 5, 7]

console.log(stringsToLengths(["on", "off", "handmade"]));
// [2, 3, 8]
