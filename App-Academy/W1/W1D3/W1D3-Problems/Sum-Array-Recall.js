// Sum Array Recall
// Write a function sumArray(array) that takes in an array of numbers
// and returns the total sum of all the numbers.

function sumArray (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30



// WHILE LOOP:

// function sumArrayWhile(array) {
//     let sum = 0;
//     let i = 0;

//     while (i < array.length) {
//       let num = array[i];
//       sum += num;
//       i++;
//     }

//     return sum;
//   }
