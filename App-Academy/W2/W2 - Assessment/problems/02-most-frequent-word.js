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
	// let countWord = {};
	// for (let i = 0; i < string.length; i++) {
	// let chars = string[i];
	// if (countWord[chars]) {
	// 		countWord[chars]++
	// 	} else {
	// 		countWord[chars] = 1
	// 	}
	// }
	// let result = " ";
	// for (const key in countWord) {
	// 	let value = countWord[key];
	// 	if (value) {
	// 		result += key;
	// 	}
	// }
	// return result;
};


console.log(mostFrequentWord("I would like a venti coffee and a scone")) // "a"
mostFrequentWord("Can I have a sandwich with tomatoes and lettuce and bacon") // "and"
mostFrequentWord("How much wood could a wood chuck chuck") // "wood" OR "chuck"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mostFrequentWord;
