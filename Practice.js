let hasVowel = function (str) {
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i <str.length; i++) {
        let letter = str[i];
        if (vowels.includes(letter)) {
            return true;
        }
    }
    return false;
};

console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false
