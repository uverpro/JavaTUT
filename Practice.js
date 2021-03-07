let smallestNumber = function (nums) {
    let smallest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        if (num < smallest) {
            smallest = num;
        }
    }
    return smallest;
};

smallestNumber([5, 6, 4, 3, 7]); // 3
smallestNumber([17, 20]); // 17
smallestNumber([]); // null
