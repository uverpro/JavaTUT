/*******************************************************************************
Write a function `myFilter` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in
the element. The function should return a new array containing
the elements that result in true when passed to the callback.

Do not use the built in Array#filter.

Examples:

let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0;
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']
*******************************************************************************/

let nums = [-10, 16, 49, 36, -2, -9]
let isPositive = function (n) {
    return n > 0;
};
let square = function (n) {
    return n * n;
};
let selectiveMap = function (array, cb1, cb2) {
    let nuArray = [];
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        if (cb1(el)) {
            nuArray.push(cb2(el));
        } else {
            nuArray.push(el);
        }
    }
    return nuArray;
};

console.log(selectiveMap(nums, isPositive, square))
