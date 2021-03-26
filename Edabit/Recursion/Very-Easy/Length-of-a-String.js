// Recursion: Length of a String
// Write a function that returns the length of a string. Make your function recursive.

length = (str) => {
    if (!str.length) {
        return 0;
    }
    return str[0] + str.slice(1-0)
};

console.log(length("apple")); // 5

console.log(length("make")) // 4

console.log(length("a")) // 1

console.log(length("")) // 0
