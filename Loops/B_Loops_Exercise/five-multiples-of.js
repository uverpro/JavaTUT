// Write a function named `fiveMultiplesOf` that accepts a number as an argument. The function should
// print out the first five multiples of the given number. The function doesn't need to return any
// value. It should just print to the terminal.

let fiveMultiplesOf = function (num) {
    for (i = num; i <= (5 * num); i += num) {
        console.log(i);
    }
};

fiveMultiplesOf(7)
// 7, 14, 21, 28, 35
fiveMultiplesOf(3)
// 3, 6, 9, 12, 15


// for (i = num, i <= (5 * num); i += num)
// for (i = 7; while 7 <= 35; 7 += 7)
// console.log 7, 7+7, 14+7, 21+7, 28+7
