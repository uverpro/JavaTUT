// RECURSION: "DEBUGGING" SOLUTION
// Coding Demo

function doForAll(array, action) {
    return [action(array[0]), ...doForAll(arr.slice(1), action)];
};
