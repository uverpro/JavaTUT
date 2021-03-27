// The substr() method returns a portion of the string,
// starting at the specified index and extending for a given number of characters afterwards.

const str = 'Mozilla';

console.log(str.substr(1, 2)); // gives the next two chars from str[1]
// expected output: "oz"

console.log(str.substr(2)); // works same as slice without an optional argument
// expected output: "zilla"

console.log(str.slice(1, 5)); // slice method is exclusive
// ozil
console.log(str.substr(1, 5)); // substr method is inclusive
// ozill
