/***********************************************************************
You are given a recursive function, `printOuterNumsFirst()`, that takes an array
of numbers, and prints each number. If the length of the array is odd, then take
the number from the end of the array and print it. If the length of the array is
even, then take the number from the beginning of the array and print it.

The code is almost working but unfortunately, there are a few bugs. Use
the debugging skills you've been practicing and the VSCode debugger to
identify and solve the bugs.

Examples:

printOuterNumsFirst([1, 2, 3, 4, 5, 6, 7, 8]);
// 1
// 8
// 2
// 7
// 3
// 6
// 4
// 5

printOuterNumsFirst([21, 4, 6, 93, 78]);
// 78
// 21
// 93
// 4
// 6

Run tests on just this file by typing `npm test test/04-print-outer-nums-first-spec.js`
on the command line.

***********************************************************************/

function printNumbersBetween(startNum, endNum) {

  // Your code here

  // Print the number
  console.log(startNum);

  // Base Case: Stop the program when startNum equals endNum
  if (startNum === endNum) {
    return;
  }

  // If the starting number is greater than the ending
  // number, decrease it by one. Otherwise, increase
  // it by one.
  if (startNum > endNum) {
    startNum -= 1;
  } else {
    startNum += 1;
  }

  // Make a recursive call with the modified number.
  printNumbersBetween(startNum, endNum);

}

printNumbersBetween(5, 10);
// 5
// 6
// 7
// 8
// 9
// 10

printNumbersBetween(2, -2);
// 2
// 1
// 0
// -1
// -2
