// Write a function `bleepVowels` that accepts a string as an argument.
// The function should return a new string where all vowels are replaced with `*`s.
// Vowels are the letters a, e, i, o, u.

//Alvin's Solution w/ Array

function bleepVowels (str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let bleepd = '';
    for (let i = 0; i < str.length; i++) {
        // can use a variable here. char = str[i] (vowels.indexOf(char), "bleepd += char")
        if (vowels.indexOf(str[i]) >= 0) { // Will return a proper index element (in this case 0, 1, 2, 3, 4). If the element is not present, will return a "-1"
            bleepd += "*";
        } else {
        bleepd += str[i];
        }
    }
    return bleepd;
};

console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
console.log(bleepVowels("slipper")); // 'sl*pp*r'
console.log(bleepVowels("range")); // 'r*ng*'
console.log(bleepVowels("brisk morning")); // 'br*sk m*rn*ng'
console.log(bleepVowels("apple")); // '*ppl*



// My Solution w/o Array
// function bleepVowels (str) {
//     let censored = "";
//     for (i = 0; i < str.length; i++) {
//         let letter = str[i];
//         if (letter === "a" ||
//             letter === "e" ||
//             letter === "i" ||
//             letter === "o" ||
//             letter === "u") {
//             censored += "*";
//         } else {
//             censored += letter;
//         }
//     }
//     return censored
// };

// console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
// console.log(bleepVowels("slipper")); // 'sl*pp*r'
// console.log(bleepVowels("range")); // 'r*ng*'
// console.log(bleepVowels("brisk morning")); // 'br*sk m*rn*ng'
// console.log(bleepVowels("apple"));



// // Modified while loop from AA
// function bleepWords (str) {
// 	let censored = ""; //0
// 	let index = 0;
// while (index < str.length){
//   let letter = str[index]; // 1

//   if (letter === "a" || // 2
//       letter === "e" ||
//       letter === "i" ||
//       letter === "o" ||
//       letter === "u") {
//     censored += "*"; // 3
//   	} else {
//           censored += letter;
//       }
//   index++;
//   }
//   return censored;
// }

// console.log(bleepWords("bootcamp")); // => 3
// console.log(bleepWords("apple")); // => 2
