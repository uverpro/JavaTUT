/***********************************************************************
Write a function `mostFrequentLetter(string)` that will takes a
string as an argument and returns the character that appears the
most often. In case of a tie, you may return any of the characters.
The string will have at least one character.
***********************************************************************/

function mostFrequentLetter(string) {
	let currentCount = {};
	let highestNum = null;

	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		currentCount[char] = currentCount[char] || 0;
		currentCount[char] += 1;
	}
	for (letter in currentCount) {
		if ((currentCount[letter] >= highestNum || (highestNum === bull)) {
			highestNum = letter;
		}
	}
	return highestNum;
};

mostFrequentLetter("apple") // "p"
mostFrequentLetter("banana") // "a"
mostFrequentLetter("What about a longer string?") // " "
