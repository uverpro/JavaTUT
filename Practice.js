// function getAverage(nums) {
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     // console.log(nums[i])
//     let num = nums[i];
//       total += num
//   }
//   return total / nums.length;
// }

// const arrayA = [1, 2, 3, 4, 5];
// // const arrayB = [10000, -9998];
// // const arrayC = [2, 100, 55, 19];
// // const arrayD = [4, 8, 12];

// // getAverage(arrayA);

// console.log(getAverage(arrayA));

function highestAverage(numsList) {
  let highest = 0;
  for (let j = 0; j < numsList.length - 1; j++) {
      let currentElement = numsList[j];
    console.log(currentElement)
  }
}

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [10000, -9998];
const arrayC = [2, 100, 55, 19];
const arrayD = [4, 8, 12];

highestAverage([arrayA, arrayB, arrayC, arrayD])
