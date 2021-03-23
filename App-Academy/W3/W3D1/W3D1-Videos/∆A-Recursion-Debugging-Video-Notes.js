// RECURSION: "DEBUGGING" SOLUTION
// Coding Demo

// BASE CASE: Empty Array
// RECURSIVE STEP: Removing Elements from the collection (.slice(1))
// RECURSIVE CASE: NONE

function doForAll(array, action) {
    return [action(array[0]), ...doForAll(array.slice(1), action)];
};

doForAll([], (x) => x * 2); // => []
doForAll([1, 2, 3], (x) => x + 1); // => [2, 4, 6]
doForAll(["a", "b", "c"], (x) => x.toUpperCase()); // => ["A", "B", "C"]

const halve = (x) => x/2;
doForAll([2, 4], halve); // [1, 2]
// - [1, ...doForAll([4], halve)]
// -- [1, ...[2, ...doForAll([], halve)]]
// --- [1, 2, ...[0, ...doForAll([], halve)]]
// ---- [1, 2, 0, ...[0, ...doForAll([], halve)]] <== will continue forever


// BASE CASE: Empty Array ()
// RECURSIVE STEP: Removing Elements from the collection (.slice(1))
// RECURSIVE CASE:
function doForAll(array, action) {
    if (array.length === 0); {
        return [];
    }
    return [action(array[0]), ...doForAll(array.slice(1), action)];
};
