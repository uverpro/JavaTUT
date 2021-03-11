let removeLastVowel = function (word) {
    let vowels = "aeiou"
    for (let i = word.length - 1; i >= 0; i--) {
        console.log(word[i]);
    }
};

removeLastVowel('bootcamp')
// console.log(removeLastVowel('bootcamp')); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
// console.log(removeLastVowel('thy')); // 'thy'
