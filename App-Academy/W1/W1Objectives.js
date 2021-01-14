// # W1D1 Learning Objectives

// ## [Expressions Learning Objectives](#expressions)
//   1. [Given a working REPL interface, write and execute a statement that will print “hello world” using console.log](#expressions-objective-1)
//   2. [Identify that strings are a list of characters defined by using double or single quotes](#expressions-objective-2)
//   3. [Given an arithmetic expression using +, -, *, /, %, compute its value](#expressions-objective-3)
//   4. [Given an expression, predict if its value is NaN](#expressions-objective-4)
//   5. [Construct the truth tables for &&, ||, !](#expressions-objective-5)
//   6. [Given an expression consisting of >, >=, ===, <, <=, compute it’s value](#expressions-objective-6)
//   7. [Apply De Morgan’s law to a boolean expression](#expressions-objective-7)
//   8. [Given an expression that utilizes operator precedence, compute its value](#expressions-objective-8)
//   9. [Given an expression, use the grouping operator to change it’s evaluation](#expressions-objective-9)
//   10. [Given expressions using == and ===, compute their values](#expressions-objective-10)
//   11. [Given a code snippet using p(#expressions-objective-1)ostfix ++, postfix --, +=, -=. /=, *=, predict the value of labeled lines](#expressions-objective-11)
//   12. [Create and assign a variable using let to a string, integer, and a boolean. Read its value and print to the console.](#expressions-objective-12)

// ## [Intro to Functions Learning Objectives](#intro-to-functions)
//   1. [Define a function using function declaration](#functions-objective-1)
//   2. [Define a function that calculates the average of two numbers, call it, pass in arguments, and print it’s return value](#functions-objective-2)
//   3. [Identify the difference between parameters vs arguments](#functions-objective-3)


// # Learning Objectives Examples


// ## Expressions

// ### Expressions Objective 1
// Given a working REPL interface, write and execute a statement that will print “hello world” using console.log
```js
console.log("hello world");
```

// ### Expressions Objective 2
// Identify that strings are a list of characters defined by using double or single quotes
```js
"hello world" // valid string
'hello world' // valid string
'hello world" // invalid string!
```
```js
"hello world"[0] // 'h' (indices start at 0)
"hello world"[-1] // undefined (indices outside range of characters return undefined)
"hello world"["hello world".length - 1] // d (since we start at 0, the last character is at the index of length - 1)
```

// ### Expressions Objective 3
// Given an arithmetic expression using +, -, *, /, %, compute its value
```js
console.log(1 + 2); // 3
console.log(14 - 6); // 8
console.log(2 * 3); // 6
console.log(6 / 3); // 2
console.log(7 % 6); // 1
```

// ### Expressions Objective 4
// Given an expression, predict if its value is NaN
```js
let num1;
console.log(1 + 2 * 3); // 7 (multiplication is performed first)
console.log((1 + 2) * 3); // 9 (addition is first because it is grouped)
```

// ### Expressions Objective 5
// Construct the truth tables for &&, ||, !
// - NOT (!)

// | A     | !A    |
// |:-----:|:-----:|
// | true  | false |
// | false | true  |

// - AND (&&)

// | A     | B     | A && B |
// |:-----:|:-----:|:------:|
// | true  | true  | true   |
// | true  | false | false  |
// | false | true  | false  |
// | false | false | false  |

// - OR (||)

// | A     | B     | A \|\| B |
// |:-----:|:-----:|:------:|
// | true  | true  | true   |
// | true  | false | true   |
// | false | true  | true   |
// | false | false | false  |


// ### Expressions Objective 6
// Given an expression consisting of >, >=, ===, <, <=, compute it’s value
```js
console.log(1 > 4); // false
console.log(1 < 4); // true
console.log(4 >= 4); // true
console.log(4 <= 4); // true
console.log(4 === 4); // true

console.log((1 + 3) % 3 === 2 - 6 / 3 + 1) // true
```

// ### Expressions Objective 7
// Apply De Morgan’s law to a boolean expression
- !(A || B) === !A && !B
- !(A && B) === !A || !B
```js
console.log(!(true || false)) // false
console.log(!true && !false) // false (equivalent to above)
```

// ### Expressions Objective 8
// Given an expression that utilizes operator precedence, compute its value
```js
console.log(1 + 2 * 3 + 4); // 11 (multiplication is performed first, then addition)
console.log(1 + 2 * 3 % 4); // 3 (multiplication and modulo are performed first, then addition)
```

// ### Expressions Objective 9
// Given an expression, use the grouping operator to change it’s evaluation
```js
console.log(1 + 2 * 3); // 7 (multiplication is performed first)
console.log((1 + 2) * 3); // 9 (addition is first because it is grouped)
```

// ### Expressions Objective 10
// Given expressions using == and ===, compute their values
```js
console.log(4 == '4'); // true (coercion takes place)
console.log(4 === '4'); // false (the number and string are compared directly)
```

// ### Expressions Objective 11
// Given a code snippet using postfix ++, postfix --, +=, -=. /=, *=, predict the value of labeled lines
```js
let age = 5;
console.log(age); // 5
age + 5;
console.log(age); // 5 (age was not reassigned above)
age += 5;
console.log(age); // 10 (+= is shorthand for age = age + 5, so age is reassigned)
age *= 5;
console.log(age); // 50
age -= 5;
console.log(age); // 45
age /= 5;
console.log(age); // 9
age++;
console.log(age); // 10 (++ is shorthand for age = age + 1, so age is reassigned)
age--;
console.log(age); // 9
```

// ### Expressions Objective 12
// Create and assign a variable using let to a string, integer, and a boolean. Read its value and print to the console.
```js
let variable = 'This is a string';
console.log(variable) // This is a string (The value of the variable is what is printed, not the name.)
variable = 8
console.log(variable) // 8 (The variable can be reassigned from the string to an integer.)
variable = true
console.log(variable) // true (Reassignment to a boolean works, too!)
```

// ## Intro to Functions
// ### Functions Objective 1
// Define a function using function declaration
//   - We use the `function` keyword to declare our intent to create a function.
//   - We give our function a name (myNewFunction).
//   - We capture any parameters that are passed in and assign them names (parameter1 and parameter2).
//   - We open up a block with curly braces to house our function's code.
//   - We do any functionality that we want our function to perform.
//   - We use the `return` keyword to return a value from our function (otherwise we return `undefined`).
```js
function myNewFunction(parameter1, parameter2) {
  console.log(parameter1);
  console.log(parameter2);
  return parameter1 + parameter2;
}
```

// ### Functions Objective 2
// Define a function that calculates the average of two numbers, call it, pass in arguments, and print it’s return value
```js
function averageOfTwo(num1, num2){
  let sum = num1 + num2;
  let average = sum / 2;
  return average;
}

console.log(averageOfTwo(3, 7)) // 5
```

// ### Functions Objective 3
// Identify the difference between parameters vs arguments
// - Parameters are in the function definition. They capture the values passed in to the function (arguments) as variable names and allow us to use those values in our function.
// - Arguments are in the function invocation. They are the values that are passed in to the function.
// - In [Objective 2](#functions-objective-2) above, `num1` and `num2` are the parameters while `3` and `7` are the arguments.


// # W1D2 Learning Objectives

// 1. Define a function that accepts a sentence string and two words as args. The function should return a boolean indicating if the sentence includes either word.

```js
function unionInclude(sentence, word1, word2) {
	let sentenceArr = sentence.split(' ');
	return sentenceArr.includes(word1) || sentenceArr.includes(word2);
}

console.log(unionInclude("The quick brown fox jumps over the lazy dog", "nope", "dog"));
```

// 2. Identify a pair of mutually exclusive conditions

```js
let point = 10;
if (5 > point) {
	console.log(" (*) " + point + " < 5");
} else {
	console.log(" (*) " + point + " >= 5");
}
```

// 3. Given a for loop, translate it into a while loop, and vice-versa

```js
let sum = 0;
// (initialize; condition; increment)
for (let i = 0; i < 10; i++ ) {
	sum += i;
}
console.log(sum);
```

//  translates to

```js
let sum = 0;
let i = 0; // initialize
while(i < 10) { // condition
	sum += i;
	i++; // increment
}
console.log(sum);
```

// 4. Write a function that iterates through a provided string argument

```js
function containsNumber(str) {
	// containsNumber returns true if str contains any number from 0-9
	for (let i = 0; i < str.length; i++) {
		if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(str[i])) {
			return true;
		}
	}
	return false;
}

console.log(containsNumber('She sells sea shells by the sea shore'));
console.log(containsNumber('1'));
console.log(containsNumber('aab12'));
```

// 5. Given a description of pig latin, write a function that takes in a string argument and utilizes String#slice to translate the string into pig latin.


```js
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
}
```


// 6. Write a function that takes in an array of words and a string as arguments
// and returns a boolean indicating whether the string is located inside of the array.
// The function must use Array#indexOf.

```js
function containsString(arr, str) {
	if (arr.indexOf(str) >= 0) {
		return true;
	} else {
		return false;
	}
}
```

// 7. Define that an array literal is an ordered list of values defined by using bracket
// and individual values are read by indexing.

```js
let numbers = ['one', 'two', 'three', 'four', 'five', ];
let letters = ['a', 'b', 'c', 'd', 'e', 'f', ];
let ints = [0, 1, 2, 3, 4, 5, ];

console.log(ints[1]);
console.log(numbers[1]); // index 1, value 'two'
```

// 8. Prevent code that can throw an exception from causing the program to crash.

```js
try {
	let a = 0;
	a.nothing();
} catch (e) {
	console.log("There was an error:");
	console.log(e);
	console.log("Continuing...");
}
```


// # W1D3 Learning Objectives


// 1. Identify that strings are immutable and arrays are mutable

// In JavaScript, everything except Arrays and Objects are immutable.  Immutable variables are modifiable in place.

```js
let arr = [];
arr.push('foo');
```

// When we push, the `arr` variable is modified directly.

// Rather than actually changing immutable variables, JavasScript internally  allocates space for the modified variable, makes the changes, but makes no changes to the original variable.

```js
let str = '';
str += 'foo';
```

// When we use `+=` here, JavaScript internally creates a whole new String.

// 2. Define a function using both function declaration and function expression syntax

// Function declaration syntax:

```js
function sum(num1, num2) {
	return num1 + num2;
}
```
// Function expression syntax:

```js
let sum = function(num1, num2) {
	return num1 + num2;
};
```

// 3. Utilize Array#push, #pop, #shift, #unshift to mutate an array

```js
let names = ['Ian', 'Javier', 'Dean'];

//Use push and pop to add and remove from the _end_ of the array
names.push('Mashu');
console.log(names);

let name = names.pop();
console.log(name, names);

//Use unshift and shift to add and remove from the _front_ of the array
names.unshift('Curtis');
console.log(names);

name = names.shift();
console.log(name, names);
```

// 4. List the arguments that can be used with Array#splice

`Array#splice(startIndex, deleteCount, str1, str2, ...)`

// Let's look at a few examples:

```js
let sovietSpaceDogs = ['Laika', 'Belka', 'Strelka'];

// use slice to append
sovietSpaceDogs.splice(sovietSpaceDogs.length, 0, 'Pchyolka', 'Mushka');
console.log(sovietSpaceDogs);

// use slice to replace first two Dogs with one new one.
let removed = sovietSpaceDogs.splice(0, 2, 'Chernushka');
console.log(sovietSpaceDogs);
console.log(removed);

```


// 5. Write a function that sums up elements of an array, given an array of numbers as an argument

```js
function sumElems(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}
```

// 7. Define a function that takes in an array of numbers are returns a new array containing only the primes

// Using a for loop

```js
function isPrime(num) {
	for(let i = 0; i < num/2; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

function onlyPrimes(arr) {
	let primes = [];
	for(let i = 0; i < arr.length; i++) {
		if (isPrime(arr[i])) {
			primes.push(arr[i]);
		}
	}
	return primes;
}
```

// 8. Define a function that takes in a 2D array of numbers and returns the total sum of all elements in the array

```js
function sum2DArray(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			sum += array[i][j];
		}
	}
	return sum;
}
```

// 9. Define a function that takes in an array of elements and returns a 2d array where the subarrays represent unique pairs of elements

```js
function uniquePairs(array) {
	let result2d = [];
	for(let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
            let pair = [array[i], array[j]];
            result2d.push(pair);
		}
	}
	return result2d;
}

console.log(uniquePairs(['1', '2', '3']));
```

// 10. Define a function that takes in an array of numbers as an argument and returns the smallest value in the array; if the array is empty return null

```js
function smallestValue(array) {
	if (array.length === 0) {
		return null;
	}
	let minValue = array[0];
	for (let i = 1; i < array.length; i++) {
			if (array[i] < minValue) {
				minValue = array[i];
			}
	}
	return minValue;
}
```


// # W1D4 Learning Objectives


// 6. Utilize Array#forEach, #map, #filter, #reduce in a function

// Array#forEach

```js
function sumElems(arr) {
	let sum = 0;
	arr.forEach(function(elem) {
		sum += elem;
	});
	return sum;
}
```

// Array#map

```js
function wordLength(arr) {
	let wordLengths = arr.map(function (elem) {
		return elem.length;
	});
	return wordLengths;
}
```


// Array#filter

```js
// This expects a utility function called isPrime
// that returns true for a prime number, false otherwise
function pickPrimes(arr) {
	return arr.filter(isPrime);
}
```


// Array#reduce

```js
function sumElems(arr) {
	let sum = 0;
	return arr.reduce(function(accum, elem) {
		return accum + elem;
	});
	return sum;
}
```

// 7. Define a function that takes in an array of numbers are returns a new array containing only the primes

// Using a for loop

```js
function isPrime(num) {
	for(let i = 0; i < num/2; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

function onlyPrimes(arr) {
	return arr.filter(isPrime);
}
```

// 8. Define a function that takes in a 2D array of numbers and returns the total sum of all elements in the array

```js
function sum2DArray(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			sum += array[i][j];
		}
	}
	return sum;
}
```
// translates to

```js
function sum2DArray(arr) {
	return arr.reduce(function (accum, el) {
		let innerSum = 0;
		for (int i = 0; i < el.length; i++) {
			innerSum += el[i];
		}
		return accum + innerSum;
	}, 0);
}
```

// We can use reduce a second time on each inner function:

```js
function sum2DArray(arr) {
    return arr.reduce(function (accum, el) {
        return accum + el.reduce(function (acc2, el2) {
            return acc2 + el2;
        }, 0);
    }, 0);
}
```



// 9. Define a function that takes in an array of numbers as an argument and returns the smallest value in the array; if the array is empty return null

```js
function smallestValue(array) {
	if (array.length === 0) {
		return null;
	}
	let minValue = array[0];
	for (let i = 1; i < array.length; i++) {
			if (array[i] < minValue) {
				minValue = array[i];
			}
	}
	return minValue;
}
```

// translates to:

```js
function smallestValue(arr) {
	if (arr.length == 0) {
		return null;
	}

	let minValue = arr.reduce(function(accum, el) {
		if (el < accum) {
			return el;
		}
		return accum;
	}, arr[0]);
	return minValue;
}
```
