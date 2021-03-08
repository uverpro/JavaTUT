// Write a function `lengthiestWord` that accepts a sentence string as an argument.
// The function should return the longest word of the sentence.
// If there is a tie, return the word that appears later in the sentence.

let lengthiestWord = function (str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
    }
};

console.log(lengthiestWord("I am pretty hungry")); // 'hungry'
console.log(lengthiestWord("we should think outside of the box")); // 'outside'
console.log(lengthiestWord("down the rabbit hole")); // 'rabbit'
console.log(lengthiestWord("simmer down")); // 'simmer'
