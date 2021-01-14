// function eitherWord (str, word1, word2) {
//   for (i = 0; i < str.length; i++) {
//     console.log(str[i])
//     let word = str[i]
//   } if (typeof word === word1 || word2) {
//       return true
//     }
//   };
// eitherWord("I like the cheese", "I", "cheese")
// // console.log(eitherWord("I like the cheese", "I", "cheese"))

function contains (word, str1, str2) {
  // str1.indexOf(str2) // if str2 is in the index of str1 it will be greater than "-1" because "-1" IS NOT A VALID INDEX
  // return str1.indexOf(str2) > -1; // will return all correct except line 13 b/c capitalization
  let lowerCaseWord = word.toLowerCase();
  let lowerCaseStr1 = str1.toLowerCase();
  let lowerCaseStr2 = str2.toLowerCase();
  if (lowerCaseWord.indexOf(lowerCaseStr1) > -1 || lowerCaseWord.indexOf(lowerCaseStr2) > -1) {
  return true;
  } else return false;
  }

console.log(contains("caterpillar", "pill", "ar")); // true
console.log(contains("lion's share", "on", "io")); // true
console.log(contains("SORRY", "or", "so")); // true
console.log(contains("tangent", "gan", "tan")); // true
console.log(contains("clock", "ok", "co")); // false
