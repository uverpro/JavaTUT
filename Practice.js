let upper = function(string) {
    return string.toUpperCase();
};
let concat = function(str1, str2, cb) {
    let str3 = str1 + str2;
    if (cb === undefined) {
        return str3;
    } else {
        return cb(str3);
    }
};
console.log(concat('Troy &', ' Abed', upper));
