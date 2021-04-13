/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.
***********************************************************************/

function getFullName(person) {
  let name = `${person.firstName} ${person.lastName}`
  return name;
}

let p1 = {firstName: 'John', lastName: 'Doe'};
console.log(getFullName(p1)); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
console.log(getFullName(p2)); // => 'Charlie Brown'
