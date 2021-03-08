// Write a function `alternatingCaps` that accepts a sentence string as an argument.
// The function should return the sentence where words alternate between lowercase and uppercase.

let alternatingCaps = function (str) {
    let finalSentence = [];
    let sentence = str.split(" ");
    for (let i = 0; i < sentence.length; i++) {
        let word = sentence[i];
        if (i === 0 || i % 3 === 0) {
            finalSentence.push(word.toUpperCase());
        } else {
            finalSentence.push(word.toLowerCase());
        }
    }
    return finalSentence;
};

console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'
