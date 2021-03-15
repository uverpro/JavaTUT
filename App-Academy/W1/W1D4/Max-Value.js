// Max Value
// Write a function maxValue(nums) that takes in an array of numbers as an arg.
// The function should return the largest number of the array.
// If the array is empty, the function should return null.

let maxValue = function (nums) {
    let largestNum = 0;
    if (nums.length === 0) {
        return null;
    }
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num > largestNum) {
            largestNum = num;
        }
    }
    return largestNum;
};


console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null
