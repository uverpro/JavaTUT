// Write a function `makeAcronym` that accepts a sentence string as an argument.
// The function should return a string
// containing the first character of each word in the sentence.

let makeAcronym = function (str) {
    let nuStr = "";
    let nuArr = str.split(" ")
    for (let i = 0; i < nuArr.length; i++) {
        let word = nuArr[i];
        nuStr += word[0].toUpperCase();
        // console.log(word[0])
        // for (let j = 0; j < word.length; j++) {
        //     console.log(word[j])
        // }
    }
    return nuStr;
};

console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS
