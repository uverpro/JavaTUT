/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.
***********************************************************************/

const arrowAvgValue = (array) =>{
  let sum = array.reduce((acc, el) => (acc += el));
  let avg = sum / array.length;
  return avg;
};

console.log(arrowAvgValue([10, 20])); // => 15
console.log(arrowAvgValue([2, 3, 7])); // => 4
console.log(arrowAvgValue([100, 60, 64])); // => 74.66666666666667
