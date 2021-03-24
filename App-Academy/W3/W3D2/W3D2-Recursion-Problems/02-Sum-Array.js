/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!
***********************************************************************/

sumArray = (array) => {
    debugger;
    if (!array.length) {
        return 0;
    }
    let sum = array[0] + sumArray(array.slice(1));
    debugger;
    return sum;
};

console.log(sumArray([1, 2, 3])); //  6
// sumArray([0, 1, -3]); //  -2
// sumArray([1, 2, 3, 4, 5]); // 15
