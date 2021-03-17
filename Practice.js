let upper = function (str) {
    return str.toUpperCase();
}

let concat = function (str1, str2, cb) {
    let conned = str1.concat(str2)
    if (cb === undefined) {
        return conned;
    } else {
        return cb(conned) // upper(conned)
    }
};

console.log(concat("Hello ", "World")); // HelloWorld
console.log(concat("Hello ", "World", upper)); // HELLOWORLD
console.log(concat("Hello ", "World", "str")); // cb is not a function
console.log(concat("Hello ", "World", "anything")); // HELLOWORLD IF return upper(conned)
