// Write a function `filterLongWords` that accepts an array of strings as an argument.
//The function should return a new array containing only the strings that are less than 5 characters long.

function filterLongWords (array) {
    let newarray = [];
    for (let i = 0; i < array.length; i++) {
    //    console.log(array[i]);
        let chars = array[i];
        if (chars.length < 5)
        newarray.push(chars);
    }
    return newarray
};


console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']
