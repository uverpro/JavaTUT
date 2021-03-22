/*

Write a function `maxWithReduce(nums)` that takes in an array of numbers.
The function should return the largest number of the array.

You can assume that the array will not be empty.

Solve this using Array's `reduce()` method.

Examples:

console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
console.log(maxWithReduce([-2, -3, -7, 3])); // 3

*/

let maxWithReduce = function(nums) {
  return nums.reduce(function(max, num) {
    if (num > max) {
        return num;
    } else {
        return max;
    }
  }, 0);
};

console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
console.log(maxWithReduce([-2, -3, -7, 3])); // 3

// maxWithReduce = (nums) => {
//   let highestNumber = 0;
//   nums.reduce((sum, num) => {
//       if (num > highestNumber) {
//           highestNumber = num;
//       }
//   }, 0);
//   return highestNumber;
// };
