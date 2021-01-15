// Define a function logBetween(lowNum, highNum) that will print every number from lowNum to highNum, inclusive.
// Inclusive means that the range includes lowNum and highNum.

// This function only needs to print using console.log it does not need to return.

// For loop
function logBetween (lowNum, highNum) {
    for (i = lowNum; i <= highNum; i++)
    console.log(i) // console.log(i) not console.log([i])
};

logBetween(-1, 2); // prints out: -1, 0, 1, 2

logBetween(14, 6); // => prints nothing

logBetween(4, 6); // prints out: 4, 5, 6

// While loop
function logBetween (lowNum, highNum) {
    let i = lowNum;
    while (i <= highNum) {
        console.log(i);
        i++;
    }
};
