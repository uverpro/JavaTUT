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
console.log(str.slice(0, 18)); // Don't slice me bro
console.log(str.substr(27, 16)); // a nice new sting



// Control Flow and Array Lesson Learning Objectives

// 1. Define a function that accepts a sentence string and two words as args.
// The function should return a boolean indicating if the sentence includes either word.
function eitherWord (str, word1, word2) {
    for (i = 0, i < str.length; i++)
    console.log(str[i])
};
console.log(eitherWord("I like the cheese", "I", "cheese"))

// 2. Identify a pair of mutually exclusive conditions.

// 3. Given a for loop, translate it into a while loop, and vice-versa.

// 4. Write a function that iterates through a provided string argument.

// 5. Given a description of pig latin, write a function that takes in a string argument and utilizes String's slice() method to translate the string into pig latin.

// 6. Write a function that takes in an array of words and a string as arguments
// and returns a boolean indicating whether the string is located inside of the array.
// The function must use Array's indexOf() method.

// 7. Define that an array literal is an ordered list of values defined by using bracket
//  and individual values are read by indexing.
