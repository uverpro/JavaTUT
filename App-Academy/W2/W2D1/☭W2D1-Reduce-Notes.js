let nums = [3, 7, 5, 9];

let sum = nums.reduce(function (accum, num, i, array) {
    if (num % 3 === 0) {
    return accum + num;
    } else {
        return accum;
    }
});

console.log(sum);
