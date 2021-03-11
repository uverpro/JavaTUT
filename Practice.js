let fizzBuzz = function (max) {
    let nums = [];
    for (let i = 0; i < max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 ===0)) {
            nums.push(i);
        }
    }
    return nums;
};

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]
