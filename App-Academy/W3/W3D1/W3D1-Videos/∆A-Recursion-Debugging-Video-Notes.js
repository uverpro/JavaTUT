// RECURSION: "DEBUGGING" SOLUTION
// Coding Demo

function doForAll(array, action) {
    return [action(array[0]), ...doForAll(array.slice(1), action)];
};

doForAll([], (x) => x * 2); // => []
doForAll([1, 2, 3], (x) => x + 1); // => [2, 4, 6]
doForAll(["a", "b", "c"], (x) => x.toUpperCase()); // => ["A", "B", "C"]
