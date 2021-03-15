let nums = [3, 7, 5, 9];

let sum = nums.reduce(function (accum, num, i, array) {
    return accum + num;
});

console.log(sum);
