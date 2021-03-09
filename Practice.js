function pigLatinWord (word) {
    const vowels = ["a", "e", "i", "o", "u"]
    if (vowels.includes(word[0])) {
        return `${word}yay`
    }
    for (let i = 0; i < word.length; i++)
    if (vowels.includes(word[i])) {
        return `${word.slice(i)}${word.slice(0, i)}ay`
    }
};
console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
