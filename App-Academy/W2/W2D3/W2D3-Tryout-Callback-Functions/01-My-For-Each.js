/*******************************************************************************
Write a function `myForEach` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in the
element, index, and array itself. The function does not need to return any value.

Do not use the built in Array#forEach.

Examples:

myForEach(['a', 'b', 'c'], function (el, i) {
    console.log(el + ' is at index ' + i);
}); // prints
// a is at index 0
// b is at index 1
// c is at index 2

let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']
*******************************************************************************/

let letters = ['a', 'b', 'c']

let myForEach = function(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i]
        cb(el, i)
    }
};

myForEach(letters, function(el, i) {
    console.log(`${el} is at index ${i}`)
})
// a is at index 0
// b is at index 1
// c is at index 2


let arr = [1, 2, 3]

arr.forEach(function(el, i) {
    console.log(`${el} is at index ${i}`)
})
// 1 is at index 0
// 2 is at index 1
// 3 is at index 2
