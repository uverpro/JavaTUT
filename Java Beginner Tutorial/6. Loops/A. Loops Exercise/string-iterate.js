// Write a function `stringIterate` that accepts a string as an argument. The function should print out
// each character of the string, one by one. The function doesn't need to return any value. It should
// just print to the terminal.

// let stringIterate = function (str) {
//     for (let i = 0; i <= str.length - 1; i++) { // str.length - 1 is always the last char
//         console.log(str[i]); // str[i] returns chars
//     }
// };

function stringIterate (str) {
    for (let i = 0; i < str.length; i++)
    console.log(str[i]);
};

stringIterate("celery");
// c, e, l, e, r, y
stringIterate("hat");
// h, a, t
