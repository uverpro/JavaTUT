/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:
***********************************************************************/

function mirrorArray(array) {
  let mirroredArray = array.slice(0, array.length); // [ 1, 2, 3 ]
  for (let i = array.length - 1; i >= 0; i--) {
    let element = array[i];
    mirroredArray.push(element); // 3, 2, 1
  }
  return mirroredArray;
}

console.log(mirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
console.log(mirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]



// long solution
function mirrorArray(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    let el = array[i];
    newArray.push(el);
  }

  for (let i = array.length - 1; i >= 0; i -= 1) {
    let el = array[i];
    newArray.push(el);
  }

  return newArray;
}
