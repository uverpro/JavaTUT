/***********************************************************************
Write a function, `catchZs` that takes in an arbitrary number of words,
and return the total amount of times that the character "z" either starts
or ends a word.

Examples:

catchZs("fizz", "buzz"); // 2
catchZs("time", "to", "go", "to", "the", "zoo"); // 1
catchZs("Zip", "Zap", "Zop"); // 3
catchZs("pizza"); // 0
catchZs("Zzzzzz"); // 2
***********************************************************************/

function catchZs(...words) {
    count = 0;
    for (let i = 0; i < arguments.length; i++) {
        let word = arguments[i];
        if (word.startsWith("z")) {
        count++;
    }
    if (word.startsWith("Z")) {
        count++;
    }
    if (word.endsWith("z")) {
        count++;
    }
    if (word.endsWith("Z")) {
        count++;
        }
    }
    return count;
};

console.log(catchZs("fizz", "buzz")); // 2
catchZs("time", "to", "go", "to", "the", "zoo"); // 1
catchZs("Zip", "Zap", "Zop"); // 3
catchZs("pizza"); // 0
catchZs("Zzzzzz"); // 2

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = catchZs;
} catch(e) {
    module.exports = null;
}
