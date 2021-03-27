// Array.unshift()

// The unshift() method adds one or more elements to the beginning of an array
// and returns the new length of the array.

const array = [1, 2, 3];

console.log(array.unshift(4, 5));
// expected output: 5

console.log(array);
// expected output: Array [4, 5, 1, 2, 3]



let array1 = ["shift", "pop"];
array1.shift()
console.log(array1); // [ 'pop' ]
array1.unshift("unshift");
console.log(array1); // [ 'unshift', 'pop' ]
array1.pop();
console.log(array1); // [ 'unshift' ]
array1.push("push");
console.log(array1); // [ 'unshift', 'push' ]
