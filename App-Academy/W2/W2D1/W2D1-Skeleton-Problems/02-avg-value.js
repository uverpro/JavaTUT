/***********************************************************************
Write a function `avgValue(array)` that takes in an array of numbers and
returns the average number.
***********************************************************************/

function avgValue(array) {
  return array.reduce(function(accum, num){
      return accum + num / array.length;
  }, 0); // <== have to set accum to 0
}

console.log(avgValue([10, 20])); // => 15
console.log(avgValue([2, 3, 7])); // => 4
console.log(avgValue([100, 60, 64])); // => 74.66666666666667

// function avgValue(array) {
//   let total = 0;

//   for (let i = 0; i < array.length; i += 1) {
//     let num = array[i];
//     total += num;
//   }

//   let avg = total / array.length;
//   return avg;
// }
