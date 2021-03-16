/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array
of objects as the first parameter and a string as the second. The
`keyInObjectArray` function will return `true` if any of the objects contains
the `keyString` as a key within them, and `false` if not.

***********************************************************************/

function keyInObjectArray(objArray, keyString) {
  // boolean for false
  let found = false;
  // iterate through the array:
  objArray.forEach(function(obj) {
    //set conditional for boolean
    if (obj[keyString] !== undefined) {
      found = true;
    }
  });
  return found;
}

let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

console.log(keyInObjectArray(objArray, 'planet')); // => true
console.log(keyInObjectArray(objArray, 'age')); // => true
console.log(keyInObjectArray(objArray, 'food')); // => false
console.log(keyInObjectArray(objArray, 'animal')); // => false

// Find the string as a key in the object

// a create a boolean variable initialized to false
// iterate through the array
// look at the objects individually
// if keystring is found, set boolean to true
// return boolean



function keyInObjectArray(objArray, keyString) {
  // iterate through the array:
  for (let i = 0; i < objArray.length; i++) {
        let obj = objArray[i];
    //set conditional for boolean
    if (obj[keyString] !== undefined) {
      return true;
    }
  }
  return false;
};

let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

console.log(keyInObjectArray(objArray, 'planet')); // => true
console.log(keyInObjectArray(objArray, 'age')); // => true
console.log(keyInObjectArray(objArray, 'food')); // => false
console.log(keyInObjectArray(objArray, 'animal')); // => false
