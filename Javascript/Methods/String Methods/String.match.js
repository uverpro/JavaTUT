// String.prototype.match()

// The match() method retrieves the result of
// matching a string against a regular expression.

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]

// program to count the number of vowels in a string



function countVowel(str) {

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = "Javascript Program";

const result = countVowel(string);

console.log(result);
