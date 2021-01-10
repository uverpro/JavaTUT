function bleepVowels (str) {
    let censored = "";
    for (i = 0; i < str.length; i++) {
        let letter = str[i];
        if (letter === "a" ||
            letter === "e" ||
            letter === "i" ||
            letter === "o" ||
            letter === "u") {
            censored += "*";
        } else {
            censored += letter;
        }
    }
    return censored
};

console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
console.log(bleepVowels("slipper")); // 'sl*pp*r'
console.log(bleepVowels("range")); // 'r*ng*'
console.log(bleepVowels("brisk morning")); // 'br*sk m*rn*ng'
console.log(bleepVowels("apple"));
