// Array Reduce
// Array reduce is helpful when you have an array of multiple numbers or elements
// and you want to reduce the array to a single value.
// For example, you can use reduce to find a mathematical sum
// or even compare word lengths to return the longest word of an array.


// List the arguments that should be used with the Array reduce method
// Explain the difference between the accumulator and initialValue parameters
// Use the reduce function to change an array into a single value

// Array's reduce method take two parameters:
// 1. A callback function
// 2. An initialValue (optional)
// Although initialValue is an optional parameter,
// it is best practice to always include an initialValue
// since it will ensure you get consistent results.

// TypeError that can happen when calling reduce
// on an empty array without an initialValue.


// Example 1 - Reusable parameter function
// The parameter function that performs the summation
// is code separate from the call to Array reduce.
// This approach is easy to read and allows you to reuse
// the function in multiple cases.

// Parameter function
const doSum = function (accumulator, currentValue) {
  return accumulator + currentValue;
}

// Array reduce example 1
const numbers = [0, 1, 2, 3];
const theSum = numbers.reduce(doSum, 0); // (doSum, 1) === 7

console.log(theSum);
// Expected output: 6


// Example 2 - In-line parameter function
// It is a common practice among developers to define the function
// to use for the calculation directly as the parameter on Array reduce.
// It can be helpful for readability to put the initial value into a variable.

// Array reduce example 2
const numbers = [0, 1, 2, 3];
const initialValue = 100;
const theSum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, initialValue);

console.log(theSum);
// Expected output: 106


// Example 3 - Wrapper function
// A very useful pattern is to enclose the use of Array reduce
// (and other array looping functions too) inside an other function.
// That allows you to simply pass in an array
// and get the calculated result from many places throughout your application
// without having to worry about the complexities of using reduce.


// wrapper function
const arraySum = function(array) {
  const initialValue = 0;

  // Array reduce example 3
  return array.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, initialValue);
};

const numbers = [0, 1, 2, 3];
const theSum = arraySum(numbers);

console.log(theSum);
// Expected output: 6



// Breaking down the callback function
// The callback function passed to Array reduce can take up to four arguments:

// accumulator
// currentValue
// index (optional)
// array (optional)

// The first time reduce invokes the callback function,
// the accumulator will be the initialValue,
// and currentValue will be the first element.
// On the next iteration,
// accumulator will reset to be the calculated value returned from the first iteration,
// and currentValue will be the second element of the array.
// This process repeats for every element in the array.
// Once reduce has completely iterated through the array,
// the final value of accumulator will be returned.

// Warning: If no initialValue is NOT provided,
// then the default accumulator is the array's first element
// and the default currentValue is the array's second element.
// In other words, reduce tries to get the initialValue from the array.
// That means if you call reduce on an EMPTY array and with no initialValue,
// you can end up trying to run a calculation with undefined values.
// This often causes errors!

const numbers = [];

const emptyArraySum = function(array) {
  let callback = function(accumulator, currentValue) {
    // accumulator = undefined
    return accumulator + currentValue;
  };

  return array.reduce(callback);
};

const theSum = emptyArraySum(numbers);

// Thrown:
// TypeError: Reduce of empty array with no initial value
//     at array.reduce (<anonymous>)
//     at emptyArraySum
