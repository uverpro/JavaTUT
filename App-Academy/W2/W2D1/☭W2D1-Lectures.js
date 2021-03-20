/*
    1.) forEach is an array method that will run a function for each element of the array
    2.) Javascript will pass to that function 3 things: the element, the index, and the array
        (in this order) for each iteration, whether or not we use that information
    3.) After the function ends/returns, forEach does not do anything or care about the return value of
    that function that runs every time

    forEach, map, filter, and reduce, are all array methods that run a function for each element of the array
    but they differ in what they do with the return value of that function
        forEach doesn't care, .map maps the return value to a place in the new array
    filter uses the return value to determine if an element should be included or not in the new array
    reduce sets its accumulator to the return value of the function on each iteration
*/

[1,2,3].forEach(function(el, i, arr){
    console.log(el);
    console.log(i);
    console.log(arr);
});

function myIncludes(arr, target) {
    let result = false;
    arr.forEach(function (el) {
        if (el === target) {
            result = true;
        }
    });
    return result;
}

console.log(myIncludes([1, 2, 3], 3));

// Array#map is an array method that runs a function each time
    // for every element of the array,
    // and 'maps' the return value of that function to a corresponding place in a new array

    // needs a return statement otherwise will map 'undefined'
    // like #forEach, #map passes the element, index, and array to the function given


let arr = [1, 2, 3];

let answer = arr.map(function (ele, index, array) {
    return ele * 2;
})

console.log(answer); // [2, 4, 6]
console.log(arr); // unmodified original array [1, 2, 3]


// Array#filter

// Array#filter is an array method that runs/performs a function each time
// for every element of the array, and returns a new array


// needs to return a boolean
// if the boolean value is true, when run for an element, that element is saved in the new array
// if the boolean value is false, that element is not included in the new array
// like #forEach, #filter also passes the element, index, and array to the function given

let nums = [10, 4, 2, -1, 5];
let newArr = nums.filter(function (el, i, arr) {
    return (i % 2 === 0);
});
// [10, 4]
console.log(nums); // original unmodified array
console.log(newArr); // newArray


// Array#reduce is an array method that runs a function each time
// for every element of the array,
// and assigns the the return value of that function to the accumulator variable
// every time the function is run
// at the very end, #reduce returns the final accumulator value


// initial accumulator is default the first value of the array
// find sum of array with reduce

let sum = [1, 2, 3].reduce(function(acc, el, i, arr){
    return acc + el;
});

// #reduce takes an optional second argument that can be the default starting value for the accumulator:

let sum = [1, 2, 3].reduce(function (acc, el, i, arr) {
    return acc + el;
}, 100);

let names = ["justin", "christina", "miah", "adrian"];

let longest = names.reduce(function(acc, name){
    if (name.length > acc.length) {
        return name;
    } else {
        return acc;
    }
});

// acc: christina
// name: adrian

console.log(longest);
