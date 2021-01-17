// Array.push()

// The push() method adds one or more elements to the end of an array
// and returns the new length of the array.

let pushstuff = [false, 85, "tooty"]
console.log(pushstuff); // 3
pushstuff.push("fruity");
console.log(pushstuff);
pushstuff.push("on rooty");
console.log(pushstuff);
console.log(pushstuff.length);
// ADDS ELEMENT TO THE END OF AN ARRAY
// [ false, 85, 'tooty' ]
// [ false, 85, 'tooty', 'fruity' ]
// [ false, 85, 'tooty', 'fruity', 'on rooty' ]
// 5



const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]



let array1 = ["shift", "pop"];
array1.shift()
console.log(array1); // [ 'pop' ]
array1.unshift("unshift");
console.log(array1); // [ 'unshift', 'pop' ]
array1.pop();
console.log(array1); // [ 'unshift' ]
array1.push("push");
console.log(array1); // [ 'unshift', 'push' ]
