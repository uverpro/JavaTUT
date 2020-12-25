// Write a function `funnySound` that accepts two strings as arguments. The function should return a
// new string containing the first three characters of both strings concatenated together.

// You can assume that the arguments are both at least three characters long.

let funnySound = function (val1, val2) {
    let nuval = val1[val1.length] + val2[val2.length];
    return nuval;
};

console.log(funnySound("tiger", "spoon")); // tigspo
