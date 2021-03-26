// Recursion: Length of a String
// Write a function that returns the length of a string. Make your function recursive.

// length = (str) => {
//     if (!str.length) {
//         return 0;
//     }
//     let sum = str.indexOf(str[0]) + length(str.slice(1))
//     return sum;
// };

function length(str, count) {
    debugger;
    count =  count || 0;
    if (str.length) {
       return length(str.substr(1), ++count);
    } else {
        debugger;
        return count;
    }
 }

console.log(length("apple")); // 5

console.log(length("make")) // 4

console.log(length("a")) // 1

console.log(length("")) // 0
