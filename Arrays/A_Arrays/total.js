// Write a function `total` that accepts an array of numbers as an argument.
//The function should return the total sum of all elements of the array.

function total (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    }
    return sum
};

console.log(total([3, 2, 8])) // 13
console.log(total([-5, 7, 4, 6])); // 12
console.log(total([7])); // 7
console.log(total([])); // 0
