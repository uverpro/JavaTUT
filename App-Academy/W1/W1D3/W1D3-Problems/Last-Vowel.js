// Last Vowel
// Write a function lastVowel(str) that takes in a string
// and returns the last vowel that appears sequentially in the string.
// Note that the string may contain capitalization.

// Hint: You may find the String.toLowerCase or String.toUpperCase methods useful

let lastVowel = function (str) {
    let upperCaseVowels = "AEIOU";
    let lowerCaseVowels = "aeiou";
    for (let i = str.length - 1; i >= 0; i--) {
        if ((upperCaseVowels.includes(str[i])) || (lowerCaseVowels.includes(str[i]))) { // Not necessary
            return str[i];
        }
    }
    return null;
};

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null

let lastVowel = function(str) {
    let vowels = 'aeiou';

    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i];
        if (vowels.includes(char.toLowerCase())) {
            return char;
        }
    }

    return null;
};
