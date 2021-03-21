/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.
*******************************************************************************/

function reverseString(string) {
  let words = string.split("-"); // [ 'Go', 'to', 'the', 'store' ]
  console.log(words)
  let reversed = [];
  for (let i = string.length - 1; i >= 0; i--) {

  }
}

console.log(reverseString("Go-to-the-store")); // => "store-the-to-Go"
console.log(reverseString("Jump,-jump-for-joy")); // => "joy-for-jump-Jump,"
