function bleepVowels (str) {
    let nustr = "";
    for (i = 0; i < str.length; i++) {
        if (str[i] === "a" || "e" || "i" || "o" || "u")
        nustr += "*";
    } else {
        nustr += str[i];
    }
    }
    return nustr;
};

console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
console.log(bleepVowels("slipper")); // 'sl*pp*r'
console.log(bleepVowels("range")); // 'r*ng*'
console.log(bleepVowels("brisk morning")); // 'br*sk m*rn*ng'
