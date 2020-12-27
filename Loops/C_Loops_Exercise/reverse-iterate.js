// Write a function `reverseIterate` that accepts a string as an argument.
// The function should print the characters of the string one by one, in reverse order.
//The function doesn't need to return any value.
// It should just print to the terminal.

let reverseIterate = function (str) {
    let stringy = ""
    for (let i = str.length - 1; i < str.length; i--) {
        stringy += i;
        console.log(str[i]);
    }
};

reverseIterate("carrot");
