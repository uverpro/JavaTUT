// Reverse Sentence
// Write a function reverseSentence(sentence) that takes in a sentence as an arg.
// The function should return a new sentence where the order of the words is reversed.
// Note that you should reverse the order among words, not the order among characters.

reverseSentence = (sentence) => {
    let newSentence = sentence.split(' ');
    let reversedSentence = [];
    for (let i = newSentence.length; i >= 0; i--) {
        let word = newSentence[i];
        reversedSentence.push(word);
    }
    return reversedSentence.join(" ");
};

console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'
