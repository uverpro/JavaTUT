// String.charAt() method => Same as String[]
// .charAt() method returns a character unit located at specific index
const sentence = "The happy little boy."
console.log(sentence[4]); // h
console.log(sentence.indexOf("h")); // 1
console.log(sentence.indexOf("h", 3)); // 4
console.log(sentence.charAt(4)); // h

const index = 4;
console.log("The character at index " + index + " is " + sentence.charAt(index));
// The character at index 4 is h
console.log("The character at index " + index + " is " + sentence[index]);
// The character at index 4 is h
