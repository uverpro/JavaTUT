function stayPositive (num) {
    let positivenums = [];
    for (i = 0; i < num.length; i++) {
        if (num[i] > 0) {
            positivenums.push(num[i])
        }
    }
    return positivenums
};

console.log(stayPositive([10, -4, 3, 6])); // [10, 3, 6]
console.log(stayPositive([-5, 11, -40, 30.3, -2])); // [11, 30.3]
console.log(stayPositive([-11, -30])); // []
