// Avg Val
// Write a function avgVal(arr) that accepts an array as an arg.
// The function should return the average of all values in the array.
// If the array is empty, it should return null.

let avgVal = function (array) {
    if (array.length === 0) {
        return null;
    }
        let sum = 0;
        for (let i =0; i < array.length; i++) {
            let num = array[i];
            sum += num;
    }
    return sum / array.length;
};


console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
