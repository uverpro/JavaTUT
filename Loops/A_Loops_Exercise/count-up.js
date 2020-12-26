// Write a function `countUp(max)` that accepts a max number as an argument. The function should print
// all numbers from 1 up to and including the max. The function doesn't need to return any value. It
// should just print to the terminal.

let countUp = function (max) {
    for (let i = 1; i <= max; i++) {
        console.log(i);
    }
};

countUp(5);
// 1, 2, 3, 4, 5
countUp(20);
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
countUp(3);
// 1, 2, 3
