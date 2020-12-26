// Write a function named `noOhs` that accepts a string as an argument. The functions should print the
// characters of the string one by one except the character 'o'. The function doesn't need to return
// any value. It should just print to the terminal.


// let noOhs = function (str) {
//     for (let i = 0; i <= str.length -1; i++) {
//         console.log(str[i]);
//     }
// };

// noOhs("code");
// Where I got stuck. Need an if statement


let noOhs = function (str) {
    for (let i = 0; i <= str.length -1; i++) {
        if (str[i] !== "o") {
        console.log(str[i]);
        }
    }
};

noOhs("code");
