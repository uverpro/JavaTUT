salesTax = (...nums) => {
    sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        sum += num;
    }
    return `$${(sum * .09).toFixed(2)}`
};

console.log(salesTax(30, 70)); // '$9.00'
console.log(salesTax(1.12, 2.23, 3.34, 4.45)); // '$1.00'
console.log(salesTax(4.99, 9.99, 19.99)); // '$3.15'
