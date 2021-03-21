/*
Write a function `sumForEach(arr)`
that accepts an array as an arg.
The function should return the total sum
 of all values in the array.

Solve this using Array's `forEach()` method.
*/


sumForEach(['a', 'b', 'c'], function (el, i) {
  console.log(el + ' is at index ' + i);
}); // prints
// a is at index 0
// b is at index 1
// c is at index 2


let letters = ['a', 'b', 'c']

let myForEach = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i]
        console.log(arr[i], i);
    }
};

myForEach(['a', 'b', 'c'])
