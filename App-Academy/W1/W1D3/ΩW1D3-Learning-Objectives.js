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
array2.splice(5, 0, "Borderline")
console.log(array2); // [ 'True', 'Blue', 'Wrap', 'You', 'Up', 'Borderline' ]
array2.splice(2, 3, "Holiday");
console.log(array2); // [ 'True', 'Blue', 'Holiday', 'Borderline' ]


// 5. Write a function that sums up elements of an array, given an array of numbers as an argument
let array = [1, 2, 3, 4, 5];

function sumsOfArray (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
};

console.log(sumsOfArray(array));

// 6. Define a function that takes in an array of numbers
// and returns a new array containing only the primes
function isPrime (number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0)
        return false;
    }
    return true;
};

// console.log(isPrime(11));

let onlyPrimes = function (array) {
	let primes = [];
	for(let i = 0; i < array.length; i++) {
		let num = array[i];
        if (isPrime(num) {
			primes.push(num);
		}
	}
	return primes;
};

console.log(onlyPrimes[1, 4, 5, 10, 11, 21, 23, 31])

// 7. Define a function that takes in a 2D array of numbers
// and returns the total sum of all elements in the array
// NOTE: JUST USE A NESTED LOOP NOT A HELPER FUNCTION!!!

let sumArrays = function (arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
        let subArray = arrays[i];
        for (let j = 0; j < subArray.length; j++) {
            sum += subArray[j];
        }
    }
    return sum;
};
let arra = [5];
let arrb = [5, 5, 5]
let arrc = [0]
let arrd = [[arra], [arrb], [arrc]]
console.log(sumArrays(arrd));
let arr1 = [
            [2, 3],
            [1, 1, 1, 1, 1],
            [5],
            [10, -5]
];

console.log(sumArrays(arr1)); // 20

// 8. Define a function that takes in an array of elements
// and returns a 2d array where the subarrays represent unique pairs of elements


// 9. Define a function that takes in an array of numbers as an argument
// and returns the smallest value in the array; if the array is empty return null
