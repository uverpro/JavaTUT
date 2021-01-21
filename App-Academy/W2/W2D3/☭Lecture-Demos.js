// ============================ DEMO 2

let superAdd = function (num1, num2, cb) {
    if (cb === undefined) {  // <=== w/o this would get an error: cb is not a function
        return num1 + num2;
    }
    let sum = num1 + num2;
    let res = cb(sum);
    return res;
};

console.log(superAdd(6,3)); // 9



// ============================== DEMO 3

let greaterResult = function (num, cb1, cb2) {
    let res1 = cb1(num)
    let res2 = cb2(num)

    if (res1 > res2) {
        return res1
    } else {
        return res2
    }
}

let doubler = function (n) {
    return n * 2;
}

let squarer = function (n) {
    return n * n;
}

console.log(greaterResult(5, doubler, squarer));

// 1. Line 20. num is defined as "5"
// 2. Line 20. Evoke "doubler"
// 3. Line 12/13. 5 * n = "10" (res1)
// 4. Line 20. Evoke "squarer".
// 5. Line 16/17. 5 * 5 aka n * n = 25. (res2)
// 6. Line 5 - 8. (10 > 25) = false, return res2 (25)
// 7. Line 20. Console Log return, 25


// =========================================== DEMO 4

// forEach Callback

let peeps = ["Kafa", "Cindy", "Jon", "Paloma"];

// peeps.forEach(function(el, i, array) {
//     console.log(`${el} is at index ${i}`);
//     console.log(array);
// });

let myForEach = function (array, cb) {            // Creating our own forEach
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        cb (el, i, array);
    }
};

myForEach (peeps, function (el, i, array) { // This behaves the same as forEach method
    console.log(`${el} is at index ${i}`);
});

// Iterates through peeps via for loop/for each.
// the cb function can return index, element, and array
// the cb is evoked in the myForEach method
// can return any of the three, like element & index (in example). Array is ignored
// but under the hood the cb function is returning all three
