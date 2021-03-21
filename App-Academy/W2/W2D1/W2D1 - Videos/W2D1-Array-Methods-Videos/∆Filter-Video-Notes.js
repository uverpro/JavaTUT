// Array#Filter

/*The filter() method creates a new array with all elements
that pass the test implemented by the provided function.
If given a function that returns a new array based on
an assigned boolean */

let parks = ['Zion', 'Yellowstone', 'Acadia', 'Yosemite'];

// let yParks = [];
//     for (let i = 0; i < parks.length; i++) {
//         let park = parks[i];
//         if (park[0] === "Y") {
//             yParks.push(park);
//         }
//     }
// console.log(yParks); // [ Yellowstone, Yosemite ]

let yParks = parks.filter(function(park){
    return park.includes("Y");
});
console.log(yParks); // [ Yellowstone, Yosemite ]

let firstPark = parks.filter(function (park) { // anonymous functions return element (park), index, array
    return park[0]
});
console.log(firstPark);

let selectedParks = parks.filter(function(park) {
    return park.includes("o");
});


/*
    Write a function called evens
    take intakes an array of numbers and
    returns a new array
    of only the even numbers
    from the original array.

*/

function evens(arr) {
    let result = arr.filter(function (num, i, array) {
        return num % 2 === 0;
    });
    return result;
};

console.log(evens([1, 2, 3]));
console.log(evens([10, 25, 31, 2, 400]));
