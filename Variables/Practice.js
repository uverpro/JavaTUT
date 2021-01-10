function raisePower (base, exponent) {
    let power = 1;
    for (i = 1; i <= exponent; i++) {
        power *= base;
    }
    return power
};

console.log(raisePower(2, 5));
console.log(raisePower(4, 3));
console.log(raisePower(10, 4));
console.log(raisePower(7, 2));
