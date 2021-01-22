// forEach Callback

let peeps = ["Kafa", "Cindy", "Jon", "Paloma"];

// peeps.forEach(function(el, i, array) {
//     console.log(`${el} is at index ${i}`);
//     console.log(array);
// });

let myForEach = function (array, cb) {
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        cb (el, i, array);
    }
};

myForEach (peeps, function (el, i, array) { // This behaves the same as lines 5-8
    console.log(`${el} is at index ${i}`);
});

// Iterates through peeps via for loop/for each.
// the cb function can return index, element, and array
// the cb is evoked in the myForEach method
// can return any of the three, like element & index (in example). Array is ignored
// but under the hood the cb function is returning all three
