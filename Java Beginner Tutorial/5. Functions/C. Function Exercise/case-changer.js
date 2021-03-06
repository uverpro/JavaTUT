// Write a function `caseChange` that accepts a string and a boolean as arguments. The function should
// return the uppercase version of the string if the boolean is true. The function should return the
// lowercase version of the string if the boolean is false.

let caseChange = function (str, boo) {
    if (boo) { // more efficient. An argument is by default true or false. So "boo" = "boo" === true = "true === true"
    // if (boo === true) { <--- How I did, valid
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
};

console.log(caseChange("Super", true)); // SUPER
console.log(caseChange("Super", false)); // super
console.log(caseChange("tAmBourine", true)); // TAMBORINE
console.log(caseChange("tAmBourine", false)); // tamborine
