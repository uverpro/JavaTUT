/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.

Examples:

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

*/

let removeEWords = function(sentence) {
  let strSentence = sentence.split(" ");
  let result = strSentence.filter(function(el) {
    return !el.includes("e") && !el.includes("E");
  });
  return result.join(" ");
};

// let noE = function (words) {
//   let val = words.indexOf("e");
//   // let val2 = word.indexOf("E");
//   if (val === -1) { // && val2 === -1)
//   return true;
// } else {
//   return false;
//   }
// };

// let removeEWords = function (sentence) {
//   let words = sentence.split(" ")
// //   let result = "";
// //   for (let i = 0; i < words.length; i++) {
// //     if (hasE(word) {
// //       // do nothing
// //   } else {
// //     result += word;
// //   }
// //   return result;
// let result = words.filter(noE);
// return result.join(" ");
// };




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
