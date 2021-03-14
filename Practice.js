function countVowel(str) {

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = ('Enter a string: HERE ');

const result = countVowel(string);

console.log(result);
