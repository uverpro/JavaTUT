
let removeCapitals = function (str) {
    let capstr = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i]; // assign the str[i] a variable
        if (char === char.toUpperCase()) {  //  if (str[i] === str[i].toLowerCase()) {
        capstr -= char //  capstr += str[i]
         }
        }
    return capstr;
    }

console.log(removeCapitals("fOrEver")); // frver
console.log(removeCapitals("raiNCoat")); // raioat
console.log(removeCapitals("cElLAr Door")); // clr oor
