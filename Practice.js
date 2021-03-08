// Write a function `alternatingCaps` that accepts a sentence string as an argument.
// The function should return the sentence where words alternate between lowercase and uppercase.

let alternatingCaps = function (str) {
    let finalSentence = [];
    let sentence = str.split(" ");
    for (let i = 0; i < sentence.length; i++) {
        let word = sentence[i];
        if (i === 0)
            finalSentence.push(word.toLowerCase()); {
        } if (i % 2 === 0) {
            finalSentence.push(word.toLowerCase());
        } else {
            finalSentence.push(word.toUpperCase());
        }
    }
    return finalSentence.join(" ");
};

console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'
