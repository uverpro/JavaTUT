// Long Words
// Write a function longWords(words) that takes in an array of words.
// The function should return an array
// containing only the words that are longer than 5 characters.

let longWords = function (words) {
    let nuArray = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 5) {

        }
    }
};

console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]
