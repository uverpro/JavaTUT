/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.
***********************************************************************/

function sumToN(n) {
debugger;
    if (n < 0) return null;
    if (n <= 1) return n; // BASE CASE // n === 1, RECURSIVE CASE
debugger;
    return n + sumToN(n - 1); // RECURSIVE STEP
  }

console.log(sumToN(5)); // returns 15
// console.log(sumToN(1));  // returns 1
// console.log(sumToN(9));  // returns 45
// console.log(sumToN(-8));  // returns null
