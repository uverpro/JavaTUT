// Write a function `divisors` that accepts a number as an argument.
//The function should return an array containing all positive numbers that can divide into the argument.

function divisors (number) {
    let divarray = [];
    for (i = 1; i <= number; i++) {
        // console.log(i) will print 1 - 15 (use for number count!)
        // console.log(number) will print "15", 15 times
        let num = i;
        if (number % num === 0) {
            divarray.push(num);
        }
    }
    return divarray;
};

console.log(divisors(15)); // [1, 3, 5, 15]
console.log(divisors(7)); // [1, 7]
console.log(divisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
