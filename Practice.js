// Write a function `filterLongWords` that accepts an array of strings as an argument.
// The function should return a new array
// containing only the strings that are less than 5 characters long.

let filterLongWords = function (array) {
    let nuArr = [];
    for (let i = 0; i < array.length; i++) {
        let word = array[i];
        if (word.length < 5) {
            nuArr.push(word);
        }
    }
    return nuArr;
};

console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']
