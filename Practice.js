/***********************************************************************
Write a function `avgValue(array)` that takes in an array of numbers and
returns the average number.
***********************************************************************/

function avgValue(array) {
    return array.reduce(function(accum, num){
        return accum + num / array.length;
    }, 0);
}

console.log(avgValue([10, 20])); // => 15
console.log(avgValue([2, 3, 7])); // => 4
console.log(avgValue([100, 60, 64])); // => 74.66666666666667



var array = [129, 139, 155, 176],
    average = array.reduce(function (avg, value, _, { length }) {
        return avg + value / length;
    }, 0);

console.log(average);
