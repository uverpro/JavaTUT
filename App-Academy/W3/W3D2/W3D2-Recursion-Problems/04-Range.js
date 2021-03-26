/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.
***********************************************************************/

function range(start, end) {
    debugger;
    if (end <= start) {
        debugger;
        return [];
    }
    return [start].concat(range(start + 1, end));
}

console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []
