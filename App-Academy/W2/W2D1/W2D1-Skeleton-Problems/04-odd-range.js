/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array
containing all positive odd numbers up to `end`.
*******************************************************************************/

function oddRange (end) {
  let positiveNums = [];
  for (let i = 1; i <= end; i++) {
    if (i % 2 !== 0) {
      positiveNums.push(i);
    }
  }
  return positiveNums;
};

console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6)); // => [ 1, 3, 5 ]
