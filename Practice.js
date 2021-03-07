// Write a function `reverseArray` that accepts an array as an argument.
// The function should return a array
// containing the elements of the original array in reverse order.

let reverseArray = function (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        newArray.unshift(el);
    }
    return newArray;
};

console.log(reverseArray(["zero", "one", "two", "three"])); // ['three', 'two', 'one', 'zero']
console.log(reverseArray([7, 1, 8])); // [8, 1, 7]
