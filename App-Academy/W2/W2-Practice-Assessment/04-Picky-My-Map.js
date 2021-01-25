/***********************************************************************
Write a function `pickyMyMap` that accepts an array and a callback as
arguments. The function should call the callback for each element of the
array, passing in the element and return a new array of the results of
each call to the callback function. If the result of the callback function
returns something falsey, then do not add it in the result array.

const nums = [1, 2, 3, 4];
pickyMyMap(nums, (num) => num - 2); // [-1, 1, 2]

const booleans = [true, false, true, false, true];
pickyMyMap(booleans, (boolean) => !boolean); // [true, true]

You may not use Array's `map()`, `filter()`, or `forEach()` methods.
***********************************************************************/
// input: 1 array and 1 cb function
// output: array of modified values that pass the test
// STRATEGY:
// result array
// iterate over collection
// call callback for each element
// if return value of callback is truthy
// 		add modified value to result array
// else do nothing
// at end of iteration
// return result

function pickyMyMap (collection, callback) {
	let result = [];
	for (let i = 0; i < collection.length; i++) {
		let el = collection[i];
		let value = callback(el);
		if (value) { // will determine if truthy
			console.log(value);
			result.push(value);
		}
	}
	return result;
};

const nums = [1, 2, 3, 4];
console.log(pickyMyMap(nums, (num) => num - 2)); // [-1, 1, 2]
let numbers = [100, 500, 40, 50, 1000];
console.log(pickyMyMap(numbers, (num) => num - 50));
