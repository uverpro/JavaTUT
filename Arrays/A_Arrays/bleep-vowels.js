// Write a function `bleepVowels` that accepts a string as an argument.
// The function should return a new string where all vowels are replaced with `*`s.
// Vowels are the letters a, e, i, o, u.

//Alvin's Solution w/ Array

function bleepVowels (str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let bleepd = '';
    for (let i = 0; i < str.length; i++) {
        // can use a variable here. char = str[i] (vowels.indexOf(char), "bleepd += char")
        if (vowels.indexOf(str[i]) > 0) { // Will return a proper index element (in this case 0, 1, 2, 3, 4). If the element is not present, will return a "-1"
            bleepd += "*"
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
