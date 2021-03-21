/***********************************************************************
Write a function `mostFrequentLetter(string)` that will takes a
string as an argument and returns the character that appears the
most often. In case of a tie, you may return any of the characters.
The string will have at least one character.
***********************************************************************/

function mostFrequentLetter(string) {
	let currentCount = {};
	let highestNum = null;
	let mostFrequentLetter = "";

	for (let i = 0; i < string.length; i++) {
		let char = string[i]
		currentCount[char] = currentCount[char] || 0
		currentCount[char] += 1
		console.log(currentCount[char]);
		console.log(currentCount)
		console.log("BREAK")
	}
	for (letter in currentCount) {
		console.log(letter);
		console.log("---")
		console.log(currentCount[letter])
		if (currentCount[letter] >= highestNum) {
			highestNum = currentCount[letter];
			mostFrequentLetter = letter;
		}
	}
	return mostFrequentLetter;
};

console.log(mostFrequentLetter("apple")); // "p"
console.log(mostFrequentLetter("banana")); // "a"
// console.log(mostFrequentLetter("What about a longer string?")); // " "
