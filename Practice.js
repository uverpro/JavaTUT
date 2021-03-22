/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.
*/

removeEWords = (sentence) => {
    let arrSen = sentence.split(' ');
    let eLess = [];
        arrSen.filter(function(word){
        if (word.toLowerCase().indexOf("e") === -1) {
            eLess.push(word);
        }
    });
    return eLess.join(' ');
};

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
