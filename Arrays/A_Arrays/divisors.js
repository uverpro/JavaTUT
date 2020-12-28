// Write a function `divisors` that accepts a number as an argument.
//The function should return an array containing all positive numbers that can divide into the argument.

function divisors (number) {
    let divarray = [];
    for (i = 1; i <= number; i++) {
        // console.log(i) 1 - number (use for number count!)
        // console.log(number) number Xnumber of times
        if (number % i === 0) {
            divarray.push(i);
        }
    }
    return divarray;
};

console.log(divisors(15)); // [1, 3, 5, 15]
console.log(divisors(7)); // [1, 7]
console.log(divisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
