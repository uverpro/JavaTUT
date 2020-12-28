// Write a function `numOdds` that accepts an array of numbers as an argument.
// The function should return a number representing the count of odd elements in the array.

function numOdds (numbers) {
    let total = 0;
    for (i = 0; i < numbers.length; i++) {
        // console.log(numbers[i]);
        let num = numbers[i];
        if (num % 2 !== 0) {
        total += 1;
        }
    }
    return total
};

console.log(numOdds([4, 7, 2, 5, 9])); // 3
console.log(numOdds([11, 31, 58, 99, 21, 60])); // 4
console.log(numOdds([100, 40, 4])); // 0
