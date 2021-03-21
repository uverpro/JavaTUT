/***********************************************************************
Write a function `diffArrayLen(arr1, arr2)` that takes two arrays. The
function should return true if the arrays have different lengths. The
function should return false otherwise.
***********************************************************************/

function diffArrayLen(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return true;
    }
        return false;
};

let a1 = ['a', 'b', 'c'];
let a2 = ['w', 'x', 'y'];
let a3 = [1, 3, 7, 4];

console.log(diffArrayLen(a1, a2)); // => false
console.log(diffArrayLen(a1, a3)); // => true
