let superAdd = function (num1, num2, cb) {
    if (cb === undefined) {  // <=== w/o this would get an error: cb is not a function
        return num1 + num2;
    }
    let sum = num1 + num2;
    let res = cb(sum);
    return res;
};

console.log(superAdd(6,3)); // 9
