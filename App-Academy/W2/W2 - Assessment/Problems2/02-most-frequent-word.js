/***********************************************************************
Write a function, 'mostFrequentWord'. It will take a string
as an argument and return the word that appears most often. In case of a
tie, you may return any of the words. The string will always have at least
one word. You do not have to consider punctuation.

Examples:

mostFrequentWord("I would like a venti coffee and a scone") // "a"
mostFrequentWord("Can I have a sandwich with tomatoes and lettuce and bacon") // "and"
mostFrequentWord("How much wood could a wood chuck chuck") // "wood" OR "chuck"
***********************************************************************/

function mostFrequentWord(string) {
	let words = string.split(" ");
	// console.log(words);
	let occurences = {};
		for (let word of words) {
			if (occurences[word]) {
				occurences[word]++;
			} else {
				occurences[word] = 1;
			}
		}
		// console.log(occurences);
	let max = 0;
	let mostRepeatedWord = "";
		for (let word of words) {
			if (occurences[word] > max) {
			max = occurences[word];
			mostRepeatedWord = word;
		}
	}
	return mostRepeatedWord;
}


console.log(mostFrequentWord("I would like a venti coffee and a scone")) // "a"
mostFrequentWord("Can I have a sandwich with tomatoes and lettuce and bacon") // "and"
mostFrequentWord("How much wood could a wood chuck chuck") // "wood" OR "chuck"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mostFrequentWord;
