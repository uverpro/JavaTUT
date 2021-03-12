let maxValue = function (nums) {
    let min = null;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num > min) {
            min = num;
        }
    }
    return min;
};

console.log(maxValue([4, 6, 3, 5, 2, 4])); // 2
console.log(maxValue([-2, -3, -7, 3 ])); // -7
console.log(maxValue([])); // null
