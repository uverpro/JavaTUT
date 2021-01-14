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
function containsEither (word, str1, str2) {
    // str1.indexOf(str2) // if str2 is in the index of str1 it will be greater than "-1" because "-1" IS NOT A VALID INDEX
    // return str1.indexOf(str2) > -1; // will return all correct except line 13 b/c capitalization
    let lowerCaseWord = word.toLowerCase();
    let lowerCaseStr1 = str1.toLowerCase();
    let lowerCaseStr2 = str2.toLowerCase();
    if (lowerCaseWord.indexOf(lowerCaseStr1) > -1 || lowerCaseWord.indexOf(lowerCaseStr2) > -1) {
    return true;
    } else return false;
    }

  console.log(containsEither("caterpillar", "pill", "ar")); // true
  console.log(containsEither("lion's share", "on", "io")); // true
  console.log(containsEither("SORRY", "or", "so")); // true
  console.log(containsEither("tangent", "gan", "tan")); // true
  console.log(containsEither("clock", "ok", "co")); // false

// 2. Identify a pair of mutually exclusive conditions.
let str = "I am"
    if (str.length < 5)  {
        console.log(str + " not!");
        } else {
            console.log(str);
}

// 3. Given a for loop, translate it into a while loop, and vice-versa.
let str = "I am a String!"

    for (i = 0; i < str.length; i++) {
        console.log(str[i]);
    }

let str = "I am a String!"
    let i = 0;
    while (i < str.length) {
        console.log(str[i]);
    i++
}

// 4. Write a function that iterates through a provided string argument.
function iterations (str) {
    for (i = 0; i < str.length; i++)
    console.log(str[i]);
};

iterations("Now iterate");

// 5. Given a description of pig latin, write a function that takes in a string argument
// and utilizes String's slice() method to translate the string into pig latin.
function toLatin(sentence) {
	let vowels = 'aeiou';
	let words = sentence.split(' ');
	let result = [];
	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		if (vowels.includes(word.toLowerCase()[0])) {
			// if the word begins with a vowel
			result.push(word + 'yay');
		} else {
			// find first vowel
			let firstVowel = 0;
			for(let j = 1; j < word.length; j++) {
				if (vowels.includes(word.toLowerCase()[j])) {
					firstVowel = j;
					break;
				}
			}
			// build result <post_vowel><pre_vowel>ay
			result.push(word.slice(firstVowel) + word.slice(0, firstVowel) + 'ay');
		}
	}
	return result.join(' ');
};
console.log(toLatin("Heyall"));
console.log(toLatin("There's"));
console.log(toLatin("apple"));


// 6. Write a function that takes in an array of words and a string as arguments
// and returns a boolean indicating whether the string is located inside of the array.
// The function must use Array's indexOf() method.
function inArray (array, string) {
    if (array.indexOf(string) > - 1) {
      return true;
    } else {
      return false;
    }
  };

  console.log(inArray(["hi", "bye", 8], 8)); // true
  console.log(inArray(["hi", "bye", 8], "hi")); // true
  console.log(inArray([10, 11, 8], 911)); // false
  console.log(inArray([10, 11, 8], 100)); // false
  console.log(inArray(["ya", "yo", "no"], "false")); // false


// 7. Define that an array literal is an ordered list of values defined by using bracket
//  and individual values are read by indexing.
let array = ["soup", "eraser", "head", 6, 7];
for (i = 0; i < array.length; i++)
console.log(array[i]); // soup, eraser, head, 6, 7
console.log(array[2]); // head
