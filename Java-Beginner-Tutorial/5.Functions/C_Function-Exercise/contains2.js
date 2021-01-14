// 1. Define a function that accepts a sentence string and two words as args.
// The function should return a boolean indicating if the sentence includes either word.

function containsEither (word, str1, str2) {
    // str1.indexOf(str2) // if str2 is in the index of str1 it will be greater than "-1" because "-1" IS NOT A VALID INDEX
    // return str1.indexOf(str2) > -1; // will return all correct except line 13 b/c capitalization
    let lowerCaseWord = word.toLowerCase();
    let lowerCaseStr1 = str1.toLowerCase();
    let lowerCaseStr2 = str2.toLowerCase();
    if (lowerCaseWord.indexOf(lowerCaseStr1) > -1 || lowerCaseWord.indexOf(lowerCaseStr2) > -1) {
    return true;
    } else return false;
    }

  console.log(containsEither("caterpillar", "pill", "ar")); // true
  console.log(containsEither("lion's share", "on", "io")); // true
  console.log(containsEither("SORRY", "or", "so")); // true
  console.log(containsEither("tangent", "gan", "tan")); // true
  console.log(containsEither("clock", "ok", "co")); // false
