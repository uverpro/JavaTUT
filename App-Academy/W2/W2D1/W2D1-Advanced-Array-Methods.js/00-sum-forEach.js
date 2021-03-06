/*
Write a function `sumForEach(arr)` that accepts an array as an arg.
The function should return the total sum of all values in the array.

Solve this using Array's `forEach()` method.
*/

let sumForEach = function (array) {
    let sum = 0;
    array.forEach(function(num){
        sum += num;
    })
    return sum;
};


console.log(sumForEach([4, 3, -1, 10])); // 16
console.log(sumForEach([6, 7, 2])); // 15
console.log(sumForEach([])); // 0

// const sumForEach = (arr) => {
//     return arr.reduce(function(acum, num){
//         return acum + num;
//     }, 0);
// }
