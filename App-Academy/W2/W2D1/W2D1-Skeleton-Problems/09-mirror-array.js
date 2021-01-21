/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:
***********************************************************************/

function mirrorArray(array) {
  let mirroredArray = array.slice(0, array.length);
  for (let i = array.length - 1; i >= 0; i--) {
    let element = array[i];
    mirroredArray.push(element);
  }
  return mirroredArray;
}

console.log(mirrorArray([1, 2, 3]));
