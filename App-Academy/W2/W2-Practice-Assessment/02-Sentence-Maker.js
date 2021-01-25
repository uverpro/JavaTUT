/***********************************************************************
Write a function using fat arrow syntax, `sentenceMaker` that
takes in any number of arguments as strings, and create a sentence out
of it. You may assume that all arguments will be strings. Add an exclamation
mark at the end of the sentence.

Examples:

sentenceMaker('Hello', 'World'); // 'Hello World!'
sentenceMaker('I', 'love', 'coding'); // 'I love coding!'
sentenceMaker('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'); // 'The quick brown fox jumps over the lazy dog!'
***********************************************************************/

// input 1 or more strings
// output 1 string
// Strategy:
// capture all arguments into collection
// create result string
// iterate over this collection
// add every word and a space to result string
// if the word is the last word, add "!" to result string
// return result

const sentenceMaker = (...collection) => { // the rest operator "..." simply allows infinite args
	let result = "";
	for (let i = 0; i < collection.length; i++) {
		let word = collection[i];
		if (i === collection.length - 1) {
			result += `${word}!`
			return result; // returning early
		}
		result += `${word} `
	}
};

console.log(sentenceMaker('Hello', 'World')); // 'Hello World!'
console.log(sentenceMaker('I', 'love', 'coding')); // 'I love coding!'
console.log(sentenceMaker('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog')); // 'The quick brown fox jumps over the lazy dog!'
