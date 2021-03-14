let pigLatinWord = function (word) {
    let vowels = "aeiouAEIOU"
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[0])) {
            return word + "yay"
        }
    }
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
