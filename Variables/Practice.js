function stringRepeater (str, num) {
    let rep = "";
    for (let i = 1; i <= num; i++) {
        rep += str
    }
    return rep
};

console.log(stringRepeater("q", 4));
