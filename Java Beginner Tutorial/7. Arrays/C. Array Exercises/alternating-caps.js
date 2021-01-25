// Write a function `alternatingCaps` that accepts a sentence string as an argument.
// The function should return the sentence where words alternate between lowercase and uppercase.

let alternatingCaps = function(sentence) {
    let words = sentence.split(" ");
    let newSentence = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (i % 2 === 0) {
            newSentence.push(word.toLowerCase());
        } else {
            newSentence.push(word.toUpperCase());
        }
    }
    return newSentence.join(" "); // USE JOIN HERE
};

console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'
