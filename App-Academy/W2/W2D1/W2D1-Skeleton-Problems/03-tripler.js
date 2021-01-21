/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.
*******************************************************************************/

function tripler (array) {
  let nuArray = [];
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    nuArray.push(array[i] * 3);
  }
  return nuArray;
};

console.log(tripler([1,2,3])); // => [ 3, 6, 9 ]
console.log(tripler([4, 1, 7])); // => [ 12, 3, 21 ]
