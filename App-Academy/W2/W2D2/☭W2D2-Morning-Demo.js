// input: 1 - non-empty array of numbers
// output: 1 - array of numbers
// goal: treat input array as number, and increment
// each element in array will be single digit
// no leading zero unless it is the number zero
//  [0,1,2] < wouldn't see this
// [0] < might see this
// strategy:
// non-computer:
// yall should be thinking through some things
// you might need to know to solve this problem
// what insights can you get from the prompt?
// if the elements in the array represent a number
// what do we need to know about that number
//  to increment it?
// how would we increment the number 100?
// how would we increment the number 1?
// how would we increment the number 99?
// could use .map because still returning array of the same length?
// Number() -> convert array into number, then increment that way
//
// non-computer strategy
// let digits = [1,2,3] // -> represents 123
// expected output: [1,2,4] -> 124
// spread the numbers apart again
// [1,3,0]
// start at ones column
// add 1 to num at ones column
// if after adding, num is double digit, we need to distribute
// take the (1) will always be a 1
// add that 1 to the num in the "column" to left
// convert our array into actual number
//   convert array to string
//     join("") to create string
//     Number to turn into number
// convert string to number
//   use Number function
// increment number
// change number back to array
//    change num to string
//    change string back to array
// "defensive code"
// account for any potential inconsistencies in inputs
// handling edge cases
// typechecking
const plusOne = function (digits) {
	if (!Array.isArray(digits)) {
		// check that digits is an array
		return null;
	}
	let numString = digits.join("");
	let num = Number(numString);
	num++; // increment our number
	numString = num + "";
	let result = numString.split("");
	console.log(result);
};
plusOne([1, 2, 3]);
plusOne([0]);
plusOne([99]);
