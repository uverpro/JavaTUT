/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.
*******************************************************************************/

function reverseString(string) {
  let words = string.split("-"); // [ 'Go', 'to', 'the', 'store' ]
    let reversed = []; //  [ 'store', 'the', 'to', 'Go' ]
  for (let i = words.length - 1; i >= 0; i--) {
    let word = words[i];
    reversed.push(word);
  }
  return reversed.join("-");
}

console.log(reverseString("Go-to-the-store")); // => "store-the-to-Go"
console.log(reverseString("Jump,-jump-for-joy")); // => "joy-for-jump-Jump,"
