// Map is like forEach but it results in a new array
// the return value of the function that's ran is mapped to a respective place in the new array

let a = [1, 2, 3];

let result = a.map(function(el, i, arr) {
    return el * 2;
});

console.log(result);

// Array#map

let parks = ['Zion', 'Yellowstone', 'Acadia', 'Yosemite'];

// let newParks = [];
// for (let i = 0; i < parks.length; i++) {
//     let park = parks[i];
//     newParks.push(park.toUpperCase());
// };
// console.log(newParks);

newParks = parks.map(function(park) {
    return park.toUpperCase();
});

console.log(newParks);


/*
    Write a function called timesTwo that
    intakes an array of numbers and
    returns a new array
    where all of the numbers are multiplied by 2
*/

function timesTwo(arr) {
    let result = arr.map(function (num, i, array) {
        return num * 2;
    });
    return result;
};

function timesTwo2(arr) {
    let result = [];
    arr.forEach(function (num) {
        result.push(num * 2)
    });
    return result;
};

console.log(timesTwo([1, 2, 3]));
console.log(timesTwo([-2, 12, 0]));

console.log(timesTwo2([1, 2, 3]));
console.log(timesTwo2([-2, 12, 0]));
