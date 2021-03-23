// Min Value (*)
// Write a function minValue(nums) that takes in an array of numbers as an arg.
// The function should return the smallest number of the array.
// If the array is empty, the function should return null.
// Research OTHER METHODS to do these equations!!!

let minValue = function(nums) {
    let min = null; // <== 1. SET TO NULL. Null is outside datatypes, represents NOTHINGNESS
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (min === null || num < min) { // 4. Add OR statement here to assign a value to min! (Read below)
            min = num; // 2. just a variable reassignment. The left always changes
        }
    }
    return min;
};

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null

console.log(5 < null); // 3. false (!!)

// 4. With an OR statement, only one has to be true. Since the first part is ALWAYS true
// it automatically reassigns min from null to nums[i]! Which solves the probelm on line 22! (3.)

// REMEMBER NULL!
