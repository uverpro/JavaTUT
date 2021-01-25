// Write a function `oneOrNone` that accepts two booleans as arguments. The function should return true
// if exactly one of the arguments is true. If BOTH arguments are true, then it should return false.

let oneOrNone = function (arg1, arg2) {
    if (arg1 === true && arg2 === false) {
        return true
    } else if (arg1 === false && arg2 === true) {
        return true
    } else {
        return false
    }
};

// More efficient
// let oneOrMore = function (val1, val2) {
// if ((val1 || val2) && !(val1 && val2)) { // <---- THIS WILL BE A COMMON BOOLEAN OF ONLY RETURNING 1
//      return true;
//  } else {
//    return false;
//  }
// };

console.log(oneOrNone(false, false)); // false
console.log(oneOrNone(true, false)); // true
console.log(oneOrNone(false, true)); // true
console.log(oneOrNone(true, true)); // false
