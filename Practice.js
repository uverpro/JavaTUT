let upper = function (str) {
    return str.toUpperCase();
}

let concat = function (str1, str2, cb) {
    let conned = str1.concat(str2)
    if (cb === undefined) {
        return conned;
    } else {
        return upper(conned)
    }
};

console.log(concat("Hello", "World")); // HelloWorld
console.log(concat("Hello", "World", upper)); // HELLOWORLD
