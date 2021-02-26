// Write a function `oneOrNone` that accepts two booleans as arguments.
// The function should return true
// if exactly one of the arguments is true.
// If BOTH arguments are true, then it should return false.

let oneOrNone = function(boo1, boo2) {
    if ((boo1 || boo2) && !(boo1 && boo2)) {
        return true;
        } else {
        return false;
    }
};

console.log(oneOrNone(false, false)); // false
console.log(oneOrNone(true, false)); // true
console.log(oneOrNone(false, true)); // true
console.log(oneOrNone(true, true)); // false
