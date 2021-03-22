/*
Write a function `maxWithReduce(nums)` that takes in an array of numbers.
The function should return the largest number of the array.

You can assume that the array will not be empty.

Solve this using Array's `reduce()` method.
*/

maxWithReduce = (nums) => {
    let highestNumber = 0;
    nums.reduce((sum, num) => {
        if (num > highestNumber) {
            highestNumber = num;
        }
    }, 0);
    return highestNumber;
};

console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
console.log(maxWithReduce([-2, -3, -7, 3])); // 3
