/* Array Sum
Write a function sumArray(arr) that accepts an array as an arg.
The function should return the total sum of all values in the array. */

let getSum = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        sum += num;
    }
    return sum;
};

let sumArray = function (array) {
    return getSum(array);
};

console.log(sumArray([4, 3, -1, 10])); // 16
console.log(sumArray([6, 7, 2])); // 15
console.log(sumArray([])); // 0
