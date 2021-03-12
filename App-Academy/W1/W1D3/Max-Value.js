// Min Value (*)
// Write a function maxValue(nums) that takes in an array of numbers as an arg.
// The function should return the largest number of the array.
// If the array is empty, the function should return null.
// Research OTHER METHODS to do these equations!!!

let maxValue = function (nums) {
    let max = null;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num > max)
        max = num;
    }
    return max;
};

console.log(maxValue([4, 6, 3, 5, 2, 4])); // 6
console.log(maxValue([-2, -3, -7, 3 ])); // -3
console.log(maxValue([])); // null
