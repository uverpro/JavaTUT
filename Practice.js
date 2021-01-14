// 6. Write a function that takes in an array of words and a string as arguments
// and returns a boolean indicating whether the string is located inside of the array.
// The function must use Array's indexOf() method.
function inArray (array, string) {
  if (array.indexOf(string) > - 1) {
    return true;
  } else {
    return false;
  }
};

console.log(inArray(["hi", "bye", 8], 8)); // true
console.log(inArray(["hi", "bye", 8], "hi")); // true
console.log(inArray([10, 11, 8], 911)); // false
console.log(inArray([10, 11, 8], 100)); // false
console.log(inArray(["ya", "yo", "no"], "false")); // false
