/*

Write a function `twoDimensionalProduct(array)` that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

*/

let twoDimensionalProduct = function (array) {
  let totalProduct = 1;
  array.forEach(function(subArray) { // <= for loop "i", indexing the array
    subArray.forEach(function(num){ // <= for loop "j", indexing the subarry
      totalProduct *= num;
    })
    // totalProduct *= subArray.reduce(function(accum, element){
      // return accum * element;
    // })
  })
  return totalProduct;
};

let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88
