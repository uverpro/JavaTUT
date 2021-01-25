// Write a function `minToMax(min, max)` that accepts two numbers as arguments. The function should
// print all numbers from min to max inclusive. The function doesn't need to return any value. It
// should just print to the terminal.

let minToMax = function (min, max) {
    for (let i = min; i <= max; i++) {
        console.log(i);
    }
};

minToMax(5, 9);
// 5, 6, 7, 8, 9
minToMax(11, 13);
// 11, 12, 13
minToMax(20, 11);
// WONT PRINT
// Min is 20, is 20 <= 11? NO, FALSE. WONT RUN.
// Even the first iteration of a FOR LOOP has to meet the condition ("i <= max")
