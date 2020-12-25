// Write a function `endsInLy` that accepts a string as an argument and returns a boolean indicating
// whether or not the string ends in the substring 'ly'.

let endsInLy = function (str) {
    return (str[str.length - 1] === "y" && (str[str.length - 2] === "l"));
};

// let endsInLy = function (str) {
//     if (str[str.length - 1] === "y" && str[str.length - 2] === "l") {
//         return true;
//     } else {
//         return false;
//     }
// };

console.log(endsInLy("pretty")); // false
console.log(endsInLy("instant")); // false
console.log(endsInLy("analytic")); // false
console.log(endsInLy("timidly")); // true
console.log(endsInLy("fly")); // true
console.log(endsInLy("gallantly")); // true
console.log(endsInLy("bigly")); // true
