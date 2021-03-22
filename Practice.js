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
