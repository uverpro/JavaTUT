/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.
*/

removeEWords = (sentence) => {
  let words = sentence.split(' ');
  let filtered = words.filter(function(word) {
      return !word.toLowerCase().includes('e');
});
  return filtered.join(' ');
};

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

// let removeEWords = function(sentence) {
//   let strSentence = sentence.split(" ");
//   let result = strSentence.filter(function(el) {
//     return !el.includes("e") && !el.includes("E");
//   });
//   return result.join(" ");
// };

// removeEWords = (sentence) => {
//   let arrSen = sentence.split(' ');
//   let eLess = [];
//       arrSen.filter(function(word){
//       if (word.toLowerCase().indexOf("e") === -1) {
//           eLess.push(word);
//       }
//   });
//   return eLess.join(' ');
// };

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
