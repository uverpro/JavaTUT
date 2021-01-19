// For Each Method

let parks = ['Zion', 'Yellowstone', 'Acadia', 'Yosemite'];

// This is a classic for loop to return each element in the Array:
// for (let i = 0; i < parks.length; i++) {
    //     let park = parks[i];
    //     console.log(park);
    // }; <=== This code will print: Zion, Yellowstone, Acadia, Yosemite

// write the "parks.forEach()"
// then, assign forEach a function:
// parks.forEach(function() {})
// then assign an argument for the function

// parks.forEach(function(park) {
//     console.log(park);
// });   // <== Will print: Zion, Yellowstone, Acadia, Yosemite

// You can assign more than 1 argument
// Here we assign the index as the second argument
// Printing the element (ele = park) and the index location of the element

// parks.forEach(function(ele, i) {
//     console.log(ele);
//     console.log(i);
//     console.log('---')
// });       <== Will print Zion, 0, ---

// There's a third argument you can input
// The Array itself!

// The names of the arguments do not matter
// Under the hood JS will run the element first, then the index, then the arry. Always.
