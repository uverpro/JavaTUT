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



// INTRODUCING FOR EACH

// The initial value for total sales is zero
let totalSales = 0;

// Function to add a value to the total sales
const addToTotalSales = function (value) {
   totalSales += value;
}

// Some sales numbers to experiment with
const monthlySales = [1234, 2345, 3456, 4567, 5678];

// Loop through all sales numbers to add them to the total
// replacing the for loop with the forEach method
monthlySales.forEach(addToTotalSales);
// for (let i=0; i<monthlySales.length; i++) {
//     addToTotalSales(monthlySales[i]);
// }

// Output the total to the console
console.log('Total Sales are', totalSales);
// Expected result: Total Sales are 17280

// Often, developers using forEach will NOT declare the function separately;
// rather, they will put it right inside the call to forEach, as follows:
// Loop through all sales numbers to add them to the total
let totalSales = 0;
const monthlySales = [1234, 2345, 3456, 4567, 5678];
monthlySales.forEach(function (value) {
    totalSales += value;
});

console.log('Total Sales are', totalSales); // Total Sales are 17280



// INTRODUCING MAP
/*
Like forEach, thewill map method  do something with every element in an array.
Difference: map expects a returned value for every element to put into a new array.
To understand onsider another example implemented with a standard for loop. */

// Function to convert an age to a phase of life
const getLifePhase = function(age) {
    if (age < 4)
        return 'Toddler';
    if (age < 13)
        return 'Kid';
    if (age < 18)
        return 'Teenager';
    if (age < 65)
        return 'Adult';
    // if no other condition is met
    return 'Elder';
}

// Array of ages, for example
const ages = [2, 7, 15, 29, 45, 44, 59, 65, 88];

// Loop to convert each age to its life phase
const phases = [];
for (let i=0; i<ages.length; i++) {
    const age = ages[i];
    phases[i] = getLifePhase(age);
}

// Output to console
console.log(phases);
// Expected result:
// [
//   'Toddler',  'Kid',
//   'Teenager', 'Adult',
//   'Adult',    'Adult',
//   'Adult',    'Elder',
//   'Elder'
// ]

// Modifying the for loop to use the Array map method would look like this.

// Loop to convert each age to its life phase
const phases = ages.map(getLifePhase);

// Most of the time, you'll find you don't use the index.
// Here is use case where index is helpful.
// Specifically, it allows you to debug both phases and ages in parallel.

// Output to conole
console.log(phases.map(function (value, index) {
    // use the index from the phases array to access
    // the corresponding value in the ages array
    return value + ' (' + ages[index] + ')';
}));

// Expected result
// [
//   'Toddler (2)',
//   'Kid (7)',
//   'Teenager (15)',
//   'Adult (29)',
//   'Adult (45)',
//   'Adult (44)',
//   'Adult (59)',
//   'Elder (65)',
//   'Elder (88)'
// ]



// INTRODUCING FILTER
// The other most common use case for a for loop takes one array
// and pulls out only certain elements.
// This is called filtering and can be done easily with the Array filter method.

// Consider this filter implemented with a classic for loop.

// Array of toys, for example
const toys = [
    'Red Ball',
    'Pink Elephant',
    'Clown with Red Nose',
    'Teddy Bear (Brown)',
    'Firefighter Hat (Red)'
];

// Loop to get only the red toys
const redToys = [];
for (let i=0; i<toys.length; i++) {
    const toy = toys[i];
    if (toy.toLowerCase().indexOf('red') > -1)
        redToys.push(toy);
}

// Output to console
console.log(redToys);
// Expected output:
//     [ 'Red Ball', 'Clown with Red Nose', 'Firefighter Hat (Red)' ]
