// Callbacks Lesson Learning Objectives


// 1. Given multiple plausible reasons, identify why functions are called
// “First Class Objects” in JavaScript. */

`
Stored in a variable, object, or array
Passed as an argument into a function
Returns from a function
`
let functionVariable = function () {
    return "I am a function"
}

function whatever(cb) {
    return () => {
        return cb();
    }
}
let returnedFunction = whatever(functionVariable);
console.log(returnedFunction())


// 2. Given a code snippet containing an anonymous callback, a named callback,
// and multiple console.logs, predict what will be printed

let functionWithAnonymousCallback = (num, cb) => cb(num);
let callBack = (num) => {
    return num * 2;
}
console.log(functionWithAnonymousCallback(7, callBack)) // 14


// 3. Write a function that takes in a value and two callbacks.
// The function should return the result of the callback that is greater.

let callbackComparison = (val, cb1, cb2) => {
    if (cb1(val) > cb2(val)) {
        return cb1(val)
    } else {
        return cb2(val)
    }
}
let addTwo = num => num + 2;
let doubler = num => num * 2;
console.log(callbackComparison(1, addTwo, doubler)) // 3
console.log(callbackComparison(7, addTwo, doubler)) // 14


// 4. Write a function, myMap, that takes in an array and a callback as arguments.
// The function should mimic the behavior of Array.map.

// 5. Write a function, myFilter, that takes in an array and a callback as arguments.
// The function should mimic the behavior of Array.filter.

// 6. Write a function, myEvery, that takes in an array and a callback as arguments.
// The function should mimic the behavior of Array.every.
