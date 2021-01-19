// For Each Method

let parks = ['Zion', 'Yellowstone', 'Acadia', 'Yosemite'];

// This is a classic for loop to return each element in the Array:
for (let i = 0; i < parks.length; i++) {
        let park = parks[i];
        console.log(park);
    }; // <=== This code will print: Zion, Yellowstone, Acadia, Yosemite

// write the "parks.forEach()"
// then, assign forEach a function:
// parks.forEach(function() {})
// then assign an argument for the function

parks.forEach(function(park) {
    console.log(park);
});   // <== Will print: Zion, Yellowstone, Acadia, Yosemite

// You can assign more than 1 argument
// Here we assign the index as the second argument
// Printing the element (ele = park) and the index location of the element

parks.forEach(function(ele, i) {
    console.log(ele);
    console.log(i);
    console.log('---')
});       // <== Will print Zion, 0, ---

// There's a third argument you can input
// The Array itself!

parks.forEach(function(ele, i, array) {
    console.log(ele);
    console.log(i);
    console.log(array);
    console.log('---');
});

/* The names of the arguments do not matter
Under the hood JS will run the element first, then the index, then the array. Always.
to get to index, you have to pass an argument into element first.
to get to array, you have to pass an arguement for element and index first. */

// Use forEach method to concat a new string of all the elements in the array
let str = '';
parks.forEach(function(ele) {
    str += ele;
});
console.log(str); // ZionYellowstoneAcadiaYosemite

/* Summary:
forEach WILL ONLY iterate through an array in order and hit every single element. */

// Map is like forEach but it results in a new array
// the return value of the function that's ran is mapped to a respective place in the new array

let a = [1, 2, 3];

let result = a.map(function(el, i, arr) {
    return el * 2;
});

console.log(result);






// ARRAY#filter





// REDUCE
// Reduces the array into a single char/num using the accumulator
