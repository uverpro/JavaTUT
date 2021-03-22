// REVIEW:

// Analyze the for.loop
// Assume you've populated a variable named 'myArray'
const myArray = [1, 2, 3, 4, 5];

// Now loop through the entire array
for (let i=0; i<myArray.length; i++) {
    const element = myArray[i];
    // Do stuff with each element
}
/*
Declare a counter variable starting at zero (let i = 0)
Provided a condition (i < my_array.length),
Incremented the counter variable (i++).
Use a variable (or constant) to make it easier to reference
the current element within the code block.
*/
// Analyze a function
const myFunction = function(value) {
    // Do something with 'value'
}
// Call a function from a for loop:
// Function to do stuff with an array element
const myFunction = function(item, index) {
    // Do something with 'item'
    // Use the 'index' as needed - e.g. special thing for first and/or last item
 }

 // Assume you've populated a variable named 'myArray' with a bunch of stuff
 const myArray = [1, 2, 3, 4, 5];

 // Now loop through the entire array
 for (let i=0; i<myArray.length; i++) {
     myFunction(myArray[i], i);
 }



// Introduction forEach

// The initial value for total sales is zero
let totalSales = 0;

// Function to add a value to the total sales
const addToTotalSales = function (value) {
   totalSales += value;
}

// Some sales numbers to experiment with
const monthlySales = [1234, 2345, 3456, 4567, 5678];

// Loop through all sales numbers to add them to the total
monthlySales.forEach(addToTotalSales);
// for (let i=0; i<monthlySales.length; i++) {
//     addToTotalSales(monthlySales[i]);
// }

// Output the total to the console
console.log('Total Sales are', totalSales);
// Expected result: Total Sales are 17280

let totalSales = 0;
const monthlySales = [1234, 2345, 3456, 4567, 5678];
monthlySales.forEach(function (value) {
    totalSales += value;
});

console.log('Total Sales are', totalSales); // Total Sales are 17280
