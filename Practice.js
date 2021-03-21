/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.
*******************************************************************************/

function tripler(array) {
    let tripled = [];
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        tripled.push(num * 3)
    }
    return tripled;
}

 console.log(tripler([1,2,3])); // => [ 3, 6, 9 ]
 console.log(tripler([4, 1, 7])); // => [ 12, 3, 21 ]
