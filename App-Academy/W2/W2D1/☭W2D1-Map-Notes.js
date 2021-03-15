// Map is like forEach but it results in a new array
// the return value of the function that's ran is mapped to a respective place in the new array

let a = [1, 2, 3];

let result = a.map(function(el, i, arr) {
    return el * 2;
});

console.log(result);


// Array#map

let parks = ['Zion', ]
