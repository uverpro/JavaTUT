/******************************************************************************
Write a function intersect(arr1, arr2) that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Hint: use indexOf
*******************************************************************************/

function intersect(arr1, arr2) {
  let inter = [];
  for (let i = 0; i < arr1.length; i++) {
    let el = arr1[i];
    if (arr2.includes(el)) { // if (arr2.indexOf(el) > -1) {
      inter.push(el);
    }
  }
  return inter;
}

console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])); // => [ 'b', 'd' ]
console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])); // => []
