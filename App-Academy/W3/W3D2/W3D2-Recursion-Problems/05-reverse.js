/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.
***********************************************************************/

const reverse = str => {
    debugger;
    if (!str.length) {
        return str; // or ""; // BASE CASE
    }
    let reversed = str.slice(-1) + reverse(str.slice(0, -1)); // reverse(str.slice(1)) + str[0]
    debugger;
    return reversed;
};

console.log(reverse("house")); // "esuoh"
// reverse("dog"); // "god"
// reverse("atom"); // "mota"
// reverse("q"); // "q"
// reverse("id"); // "di"
// reverse(""); // ""

// Input: String.
// Output: Reverse string.

// BASE CASE - empty string
// RECURSIVE CASE - letters exist
// RECURSIVE STEP - approach base case

// by removing one letter from end at a time
// string method - slice
// turn string into array - pop()

let reverse = function (string, array = string.split(''), newString = array.pop()) {
    debugger;
    if (array.length === 0) {
      debugger;
      return newString;
    }
    newString += array.pop();
    return reverse(array.join(''), array, newString);
  };
