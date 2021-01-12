// Write a function named `sumUpTo(max)` that accepts a max number as an argument. The function should
// return the total sum of all whole numbers from 1 to the max, inclusive.
//
// For example, sumUpTo(4) should return 10 because 1 + 2 + 3 + 4 = 10.



// let sumUpTo = function (max) {
//     for (let i = 1; i <= max; i++) {
//         console.log(i);
//     }
// }

// sumUpTo(4); // 1, 2, 3, 4
// This is where I got stuck
// Before the FOR LOOP, create a variable "sum" which equals 0.
// On line 10 create "sum += i" so each iteration will add to sum up to "i <= max"
// Between line the brackets on line 11 & 12 add a return function, "return sum"



let sumUpTo = function (max) {
    let sum = 0;
    for (i = 1; i <= max; i++) {
        sum += i
    }
    // console.log(sum);
    return sum
}

console.log(sumUpTo(4)); //sumUpTo(4);
// 10
console.log(sumUpTo(5)); //sumUpTo(5);
// 15
console.log(sumUpTo(2)); //sumUpTo(2);
// 3
