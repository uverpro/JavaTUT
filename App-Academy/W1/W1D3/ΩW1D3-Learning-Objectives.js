// Intermediate Functions Lesson Learning Objectives
// Below is a complete list of the terminal learning objectives across all "Intermediate Function" lessons.
// When you complete these lessons, you should be able to perform each of the following objectives.
// These objectives capture how you may be evaluated on the assessment for these lessons.

// 1. Identify that strings are immutable and arrays are mutable

// 2. Define a function using both function declaration and function expression syntax
// let score = function (num); function score (num)

// 3. Utilize Array.push, .pop, .shift, .unshift to mutate an array
let array1 = ["shift", "pop"];
array1.shift()
console.log(array1); // [ 'pop' ]
array1.unshift("unshift");
console.log(array1); // [ 'unshift', 'pop' ]
array1.pop();
console.log(array1); // [ 'unshift' ]
array1.push("push");
console.log(array1); // [ 'unshift', 'push' ]


// 4. List the arguments that can be used with Array.splice
let array2 = ["True", "Blue", "Vogue", "Borderline"];
array2.splice(2, 0, "Lucky Star")
console.log(array2); // ["True", "Blue", "Lucky Star", "Vogue", "Borderline"]
array2.splice(2, 3);
console.log(array2); // [ 'True', 'Blue' ]
array2.splice(2, 0, "Wrap", "You", "Up");
console.log(array2); // [ 'True', 'Blue', 'Wrap', 'You', 'Up' ]
// Write a function that sums up elements of an array, given an array of numbers as an argument
// Define a function that takes in an array of numbers and returns a new array containing only the primes
// Define a function that takes in a 2D array of numbers and returns the total sum of all elements in the array
// Define a function that takes in an array of elements and returns a 2d array where the subarrays represent unique pairs of elements
// Define a function that takes in an array of numbers as an argument and returns the smallest value in the array; if the array is empty return null
