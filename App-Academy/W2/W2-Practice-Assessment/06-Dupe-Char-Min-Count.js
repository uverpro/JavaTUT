/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/
// input: 1 string, 1 number
// output: 1 array of char strings
// STRATEGY
// How many times these chars show up
// for the ones that show up at least as many as minCount, keep them
// find out how many times each letter appears
// iterate and counting
// at each char will keep running count for each one I find
// look at collection of char types
// for characters with minCount or higher, add those chars to result array
// return result array


function duplicateCharMinCount(string, minCount) {
	let countObject = {};
	for (let i = 0; i < string.length; i++) {
	let chars = string[i];
	if (countObject[chars]) {
			countObject[chars]++
		} else {
			countObject[chars] = 1
		}
	}
	let result = [];
	for (const key in countObject) {
		let value = countObject[key];
		if (value >= minCount) {
			result.push(key);
		}
	}
	return result;
};

console.log(duplicateCharMinCount("apple", 2)); // ["p"]
console.log(duplicateCharMinCount("banana", 2)); // ["a", "n"]
console.log(duplicateCharMinCount("What about a longer string?", 3)); // ["a", "t", " "]
