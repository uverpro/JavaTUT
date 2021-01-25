// Write a function `startsWithR` that accepts a string as an argument and returns a boolean indicating
// whether or not the string starts with 'r' or 'R'.

let startsWithR = function (str) {
// return str[0] === ("r" || "R"); // CLOSE (original try). Will return "true" || R
    return str[0] === "r" || str[0] === "R"; // most effecient

    // if (str[0] === "r") { // second try, just ineffecient but works
    //     return true;
    // } else if (str[0] === "R") {
    //     return true;
    // } else {
    //     return false
    // }
};


console.log(startsWithR("roger that")); // true
console.log(startsWithR("Row, row, row your boat")); // true
console.log(startsWithR("slip")); // false
console.log(startsWithR("Taxicab")); // false
