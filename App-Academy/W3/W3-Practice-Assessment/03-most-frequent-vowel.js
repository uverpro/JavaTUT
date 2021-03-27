/***********************************************************************
Write a recursive function called `mostFrequentVowel(words, counter)` which
takes in an array of words as lowercase strings and returns the vowel that shows
up the most in all the strings in the array.

If there are no vowels at all, return an empty string "".

Your function should also accept a `counter` parameter that will be an empty
object by default.

Each recursive step should count the vowels in the last string in the array
and add them to the `counter`. Return the vowel with the greatest count in
the `counter` object.

Only the following will be considered as vowels: 'a', 'e', 'i', 'o', 'u'.

// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
// mostFrequentVowel(words, counter)

// Step 0: Call `mostFrequentVowel` on the `words` array
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
mostFrequentVowel(words, counter)

// Step 1: Count the vowels in 'lime'
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = { i: 1, e: 1 }
mostFrequentVowel(words, counter)

// Step 2: Count the vowels in 'coconut'
// words = ['apple', 'pear', 'melon', 'coconut']
// counter = { i: 1, e: 1, o: 2, u: 1 }
mostFrequentVowel(words, counter)

// Step 3: Count the vowels in 'melon'
// words = ['apple', 'pear', 'melon']
// counter = { i: 1, e: 2, o: 3, u: 1 }
mostFrequentVowel(words, counter)

// Step 4: Count the vowels in 'pear'
// words = ['apple', 'pear']
// counter = { i: 1, e: 3, o: 3, u: 1, a: 1 }
mostFrequentVowel(words, counter)

// Step 5: Count the vowels in 'apple'
// words = ['apple']
// counter = { i: 1, e: 4, o: 3, u: 1, a: 2 }
mostFrequentVowel(words, counter)

// Step 6: No words remaining, return 'e'
// words = []
// counter = { i: 1, e: 4, o: 3, u: 1, a: 3 }
mostFrequentVowel(words, counter)
***********************************************************************/

// Understand
//// Count all of the vowels in a list of words and
//// return the vowel that occurs most frequently
//// count last string first
// Plan
//// Base case: an empty array
//// Recursive step: remove an element from the array before the recursive call
//// Helper Functions:
////// countVowels
//////// accept a word and our counter
//////// iterate over the letters
//////// check if the char is a vowel
//////// check if the vowel is a key in counter
////////// increase that count by 1
////////// else: initialize the count at 1
//////// return ?
////// largestValue
/////// find the largest value and return its key
/////// store vowel, store the currentLargest
/////// iterate over the keys, comparing and replacing our variables
/////// return the key
// Do
const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const countVowels = (word, counter) => {
  debugger;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (VOWELS.includes(char)) {
      if (counter[char]) {
        counter[char]++;
      } else {
        counter[char] = 1;
      }
    }
  }
};
const largestValue = (counter) => {
  debugger;
  let vowel = '';
  let max = 0;
  for (let currentVowel in counter) {
    if (counter[currentVowel] > max) {
      vowel = currentVowel;
      max = counter[currentVowel];
    }
  }
  return vowel;
};
const mostFrequentVowel = function (words, counter = {}) {
  debugger;
  if (!words.length) {
    return largestValue(counter);
  }
  countVowels(words.pop(), counter);
  return mostFrequentVowel(words, counter);
};

console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse'])); // 'o'
console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken'])); // 'i' or 'o'
