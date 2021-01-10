function censorE (str) {
    let nustr = "";
    for (i = 0; i < str.length; i++) {
        if (str[i] === "e") {
            nustr += "*";
        } else {
    nustr += str[i]
    }
}
    return nustr;
};

console.log(censorE("speedy"));
