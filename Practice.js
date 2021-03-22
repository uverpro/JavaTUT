/*
Write a function `sumWithReduce(nums)` that takes in an array of numbers.
The function should return the total sum of all numbers in the array.

Solve this using Array's `reduce()` method.
*/

sumWithReduce = (nums) => {
    return nums.reduce(function(accum, el) {
        return accum + el;
    }, 0)
};

console.log(sumWithReduce([10, 3, 5, 2])); // 20
console.log(sumWithReduce([])); // 0
