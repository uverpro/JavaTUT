// Write a function `contains(str1, str2)` that accepts two strings as arguments. The function should
// return a boolean indicating whether or not `str2` is contained within `str1`. The function should
// ignore any differences in capitalization.

let contains = function (str1, str2) {
    // str1.indexOf(str2) // if str2 is in the index of str1 it will be greater than "-1" because "-1" IS NOT A VALID INDEX
    // return str1.indexOf(str2) > -1; // will return all correct except line 13 b/c capitalization
    let lowercasestr1 = str1.toLowerCase();
    let lowercasestr2 = str2.toLowerCase();
    return lowercasestr1.indexOf(lowercasestr2) > -1;
};

console.log(contains("caterpillar", "pill")); // true
console.log(contains("lion's share", "on")); // true
console.log(contains("SORRY", "or")); // true
console.log(contains("tangent", "gem")); // false
console.log(contains("clock", "ok")); // false
