// Write a function `caseChange` that accepts a string and a boolean as arguments. The function should
// return the uppercase version of the string if the boolean is true. The function should return the
// lowercase version of the string if the boolean is false.

let caseChange = function (str, boo) {
    if (boo === true) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
};

console.log(caseChange("Super", true)); // SUPER
console.log(caseChange("Super", false)); // super
console.log(caseChange("tAmBourine", true)); // TAMBORINE
console.log(caseChange("tAmBourine", false)); // tamborine
