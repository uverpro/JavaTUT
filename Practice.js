// Vowel Counter Recall
// Write a function, countVowels(word), that takes in a string word
// and returns the number of vowels in the word.
// Vowels are the letters "a", "e", "i", "o", "u".

let countVowels = function (word) {
  let vowels = ["a", "e", "i", "o", "u"];
  vowelCount = 0;
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (vowels.includes(letter)) {
        vowelCount++
      }
    }
    return vowelCount;
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
