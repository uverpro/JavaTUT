/* Uncompress
Write a function uncompress(str) that takes in a "compressed" string as an arg.
A compressed string consists of a character
immediately followed by the number of times it appears in the "uncompressed" form.
The function should return a the uncompressed version of the string. See the examples.

Hint: you can use the built-in Number function should
convert a numeric string into the number type.
For example. Number("4") // => 4 */

let uncompress = function (str) {
    let uncompressedStr = "";
    for (let i = 0; i < str.length; i++) {
        let currentEl = str[i];
        let is_NaN = Number(currentEl);
        if (is_NaN !== NaN) {
            let number = Number(currentEl)
            for (let j = 0; j < number; j++) {
                let letter = str[i-1];
                uncompressedStr += letter;
            }
        }
    }
    return uncompressedStr;
};

console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
