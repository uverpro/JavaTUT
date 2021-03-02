// Write a function `removeCapitals` that accepts a string as an argument.
// The function should return a new version of the string with all capital letters removed.

let removeCapitals = function(str) {
    let nuStr = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toLowerCase()) {
            nuStr += char;
        }
    }
    return nuStr;
};

console.log(removeCapitals("fOrEver")); // 'frver'
console.log(removeCapitals("raiNCoat")); // 'raioat'
console.log(removeCapitals("cElLAr Door")); // 'clr oor'
