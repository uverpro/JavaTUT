// Highest Average
// This problem is worth 7 points.
// You may receive partial credit.
// First, create a function called getAverage(nums) which takes a single array
// of numbers and returns the average.


// Then, write a function highestAverage(numsList)
// that takes in a 2-dimensional array of numbers
// and returns the index of the sub-array with the highest average value.

function getAverage(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
        total += num
    }
    return total / nums.length;
  };

function highestAverage(numsList) {
    let highestAvg = 0;
    let maxIndex = 0;
    for (let i = 0; i < numsList.length; i++) {
        let currentElement = numsList[i];
        let currentAverage = getAverage(currentElement);
            if (currentAverage > highestAvg) {
                highestAvg = currentAverage; // just "+", because we're replacing value
                maxIndex = i;
            }
    }
    return maxIndex; // return maxIndex NOT highestAvg
};


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [10000, -9998];
const arrayC = [2, 100, 55, 19];
const arrayD = [4, 8, 12];

let score = 0;

if (getAverage(arrayA) === 3) score++;
if (getAverage(arrayB) === 1) score++;
if (getAverage(arrayC) === 44) score++;
if (getAverage(arrayD) === 8) score++;

if (highestAverage([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
if (highestAverage([arrayA, arrayB]) === 0) score++;
if (highestAverage([arrayA, arrayD]) === 1) score++;

console.log("You have scored " + score + "/7 points.");
