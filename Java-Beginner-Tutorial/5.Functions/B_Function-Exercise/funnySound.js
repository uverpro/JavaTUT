// Write a function `funnySound` that accepts two strings as arguments. The function should return a
// new string containing the first three characters of both strings concatenated together.

// You can assume that the arguments are both at least three characters long.

let funnySound = function (val1, val2) {
    return val1.slice(0, 3) + val2.slice(0, 3);
    // let nuval = val1.slice(0, 3) + val2.slice(0, 3); // remember, the second index is exluded
    // return nuval;
};

console.log(funnySound("tiger", "spoon")); // tigspo
console.log(funnySound("computer", "phone")); // compho
console.log(funnySound("skate", "bottle")); // skabot
console.log(funnySound("frog", "ashtray")); // froash
