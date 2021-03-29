/***********************************************************************
You are given a recursive function, `printNumbersBetween()`, that takes
a start and end number and prints all the integers between them in order.
If the first number is smaller, it should print in increasing order. If
the first number is larger, it should print in decreasing order.

The code is almost working but unfortunately, there are a few bugs. Use
the debugging skills you've been practicing and the VSCode debugger to
identify and solve the bugs.
***********************************************************************/


function printNumbersBetween(startNum, endNum) {

    // Print the number
    console.log(startNum);

    // Base Case: Stop the program when startNum equals endNum
    if (startNum = endNum) {
        return;
    }

    // If the starting number is greater than the ending
    // number, decrease it by one. Otherwise, increase
    // it by one.
    if (startNum < endNum) {
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
