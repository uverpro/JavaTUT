/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

// Input ==> obj, key
// Output ===> boolean determind if key is in object

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}

let doesKeyExist = function (obj) {
  for (let i = 0; i < obj.length; i++)
  console.log(i)
}

doesKeyExist(obj1);

doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
