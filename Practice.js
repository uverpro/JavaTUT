let lastVowel = function (string) {
    let vowels = "aeiouAEIOU";
    for (let i = string.length - 1; i >= 0; i--) {
        let letter = string[i];
        if (vowels.includes(letter)) {
            return letter;
         }
    }
    return null;
};

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
