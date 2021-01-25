// Write a function named `oddSum(max)` that accepts a max number as an argument. The function should
// return the total sum of all odd numbers from 1 to the max, inclusive.
//
// For example, oddSum(10) should return 25 because 1 + 3 + 5 + 7 + 9 = 25


//Alvins:
let oddSum = function (max) {
    let sum = 0;
    for (let i = 1; i <= max; i++) {
        if (i % 2 === 1) {
            sum += i;           // console.log(i); // odd numbers captured here
      }
    }
    return sum;
};

console.log(oddSum(10)); // 25


// go off of sum-up-to:
// let sumUpTo = function (max) {
//     let sum = 0;
//     for (i = 1; i <= max; i++) {
//         sum += i
//     }
//     // console.log(sum);
//     return sum
// }

// console.log(sumUpTo(4)); //sumUpTo(4);
// 10
// console.log(sumUpTo(5)); //sumUpTo(5);
// 15
// console.log(sumUpTo(2)); //sumUpTo(2);
// 3
