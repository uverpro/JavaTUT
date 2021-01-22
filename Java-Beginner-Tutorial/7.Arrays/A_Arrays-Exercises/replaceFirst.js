// Write a function which replaces the first index of an array w/o returning a new array

function replaceFirst (array, newVal) {
    array[0] = newVal;
};

let letters = ["a", "b"];

console.log(letters); // [ 'a', 'b']
replaceFirst(letters, "x");
console.log(letters); // [ 'x', 'b']
