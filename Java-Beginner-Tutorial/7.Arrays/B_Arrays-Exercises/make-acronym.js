// Write a function `makeAcronym` that accepts a sentence string as an argument.
// The function should return a string
// containing the first character of each word in the sentence.

let makeAcronym = function (sentence) {
    newString = "";
    let words = sentence.split(" "); // ["New", "York"]
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        newString += word[0];
    }
    return newString.toUpperCase();
};

console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS
