// Array.shift()

// The shift() method removes the first element from an array and returns that removed element.
// This method changes the length of the array.

const array = [1, 2, 3];

const firstElement = array.shift();

console.log(array);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1



let array1 = ["shift", "pop"];
array1.shift()
console.log(array1); // [ 'pop' ]
array1.unshift("unshift");
console.log(array1); // [ 'unshift', 'pop' ]
array1.pop();
console.log(array1); // [ 'unshift' ]
array1.push("push");
console.log(array1); // [ 'unshift', 'push' ]
