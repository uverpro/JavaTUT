// Strings Learning Objectives

// 1. Describe the properties of a string
// Strings are immutable.
// They consist of characters or numbers (or are empty) withing "" or ''.
// They have a length of 0 or greater

// 2. Create a string
let str = "";

// 3. Find the length of a string
console.log(str.length); // 0

// 4. Find the character at a certain index in a string
str = "Nu"
console.log(str[1]); // u

// 5. Concatenate two strings together
console.log("strings are now " + "one");

// 6. Find the first instance of a character in a string
str = "Longer"
console.log(str[0]); // L
// 7. Create a new string from a sub-section of another string

str = "Don't slice me bro, to get a nice new sting or something."
console.log(str.slice(0, 18));
console.log(str.substr(27, 16));
