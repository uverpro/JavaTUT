// RECURSION: "DEBUGGIN" SOLUTION
// coding demo

function doForAll(arr, action) {
    return [action(arr[0]), ...doForAll(arr.slice(1), action)];
}
