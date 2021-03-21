// Array#Filter

let parks = ['Zion', 'Yellowstone', 'Acadia', 'Yosemite'];

// let yParks = [];
//     for (let i = 0; i < parks.length; i++) {
//         let park = parks[i];
//         if (park[0] === "Y") {
//             yParks.push(park);
//         }
//     }
// console.log(yParks); // [ Yellowstone, Yosemite ]


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
