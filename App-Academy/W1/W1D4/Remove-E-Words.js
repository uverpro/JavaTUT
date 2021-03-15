// Remove E Words
// Write a function removeEWords(sentence) that accepts a sentence string as an arg.
// The function should return a new string,
// containing only the words that don't have the letter "e" in them.

let removeEWords = function (sentence) {
    let words = sentence.split(' ');
    let filtered = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (!word.includes('e')) {
            filtered.push(word);
        }
    }
    return filtered.join(' ');
};


console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
