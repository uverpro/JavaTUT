// Destructuring
  // A way to extract data from objects and arrays
// 1. Array Destructuring + Object Destructiong
// 2. Destructuring With an Alias
// 3. Destructuting Function Parameters
//      Extracting values in the function parameters from a passed in argument
// ---------------------------------------------------------
// Array Destructuring Vs.
// Object Destructing
// Array - order matters
let colors = ['red', 'orange', 'yellow' ];
let [ firstColor, secondColor, banana ] = colors;
// debugger
// Object - order does NOT matter
let instructorObject = {
  b: 'Bart',
  s: 'Sergey',
  r: 'Rose'
};
// let { b, s, r } = instructorObject;
let { r, b, s } = instructorObject;
debugger
// ---------------------------------------------------------
// Alias Destructuring - (fancy obj dest)
// destructures & renames your data in one line
// note- alias' are NOT copies of the data. They point to the data.
let data = {
  username: "Jill" ,
  age: 100,
  thingz: ['pomegranate', 'mango', 'strawberry']
}
let { thingz: fruit, username: papaya } = data;
// debugger
// fruit.push('mangooo')
// console.log(fruit)
// console.log(data["thingz"])
// ---------------------------------------------------------
// Nested destructuring
// Access the values stored in objects
//  which are nested inside of other objects
let dog = {
  name: 'Marley',
  age: 3,
  status: 'Good dog',
  tricks: ['sit', 'speak', 'roll over', 'solve calculus'],
  owner: {
    firstName: 'Alissa',
    lastName: 'Crane',
    treats: {
      'special' : 5,
      regular: 3
    }
  }
};
// let specialPrice = dog.owner.treats['special'];
let { owner: { firstName } } = dog;
// console.log(firstName);
let {owner: {treats: { regular } } } = dog
debugger
let { tricks: [ trick1, trick2, trick3 ] } = dog;
// console.log('This dog is loved by ' + firstName);
// console.log('This dog can ' + trick1 + " and " + trick3 );
// -----------------------------------------------------------
// Destructuring Objects for function parameters.
let alvin = { name: 'Alvin', city: 'NYC', neighborhood: 'Brooklyn' };
let rose = { name: 'Rose', city: 'SF', neighborhood: 'Oakland' };
function intro(person) {
  let name = person.name;
  let city = person.city;
  let neighborhood = person.neighborhood;
  console.log(name + ' is from ' + city + ', ' + neighborhood);
}
// intro(alvin);
// vs.
function destructuredIntro( { name, city , neighborhood, banana } ) {
  if (banana === undefined) {
    banana = '';
  }
  console.log(name + ' is from ' + city + ', ' + neighborhood + ', ' + banana);
}
intro(alvin);
destructuredIntro(rose);

//------------------------------------------------------

// Object Lecture
// ?
// The Object Type
// An unordered collection of key-value pairs
// POJO- Plain Old JavaScript Object
​
// Keys are strings and must be unique
// Keys point to values
​
// Values can be anything!
// Objects are unordered, order is not guaranteed!
​
​
// Initializing an empty object
// Adding key-value pairs.
​
// Iterating through an object
​
// ?
​
let myObject = {};
​
//  1.BRACKET notation
myObject["Adrian Rampy"] = "PST";
myObject["adrian"] = "EST";
​
// DYNAMICALLY add key-value pairs
let key = 'Justin N';
myObject[key] = 'PST';
myObject["Justin"] = 'PST';
​
// We can only use dot notation if we know EXACTLY what a key will be.
myObject.miah = 'EST';
myObject.emily = '?';
​
let banana = 'Miah';
myObject.banana = 'EST';
​
// iteration through an object
values = Object.values(myObject)
keys = Object.keys(myObject)
​
for (const key in myObject){
  // debugger
  console.log(key)

// =============================================================

/**
 * Pirmitive Data Types cannot be DIRECTLY changed in memory.
 *    Instead, they have 'pointers', that get reassigned
 *    to whatever new value you are attempting to reassign
 *    your Primitive Data Type variable to.
 *
 * Reference Data Types CAN BE DIRECTLY changed in memory,
 *    aka they can be 'mutated', and are 'mutable' data types.
 *
 *
 * Reference => MUTABLE
 * Primitive => IMMUTABLE
 *
 */
// PRIMITIVE :
  // Boolean
  // Null
  // Undefined
  // Number
  // String

// REFERENCE :
  // Object
  ​
  // ------------------------------------------------
  ​
  // Setting variables equal to each other and memory.
  ​
    // If we set variables holding primitive data types equal to each other
    // and then change one of those variables, the other variable will
    //  remain unchanged.
  ​
    // If we set variables holding reference data types equal to each other
    // and then change one of those variables, both variables will change.
  ​
  ​
  // Primitive example:
  ​
  let prim1 = 'old value';
  let prim2 = prim1; // 'old value'
  ​
  // console.log(prim1);
  // console.log(prim2);
  ​
  // reassign prim1
  prim1 = 'new value';
  debugger
  ​
  ​
  //  Reference example:
  ​
  let ref1 = { key: 'old value'};
  let ref2 = ref1;
  ​
  debugger
  ​
  // mutating ref1
  ref1.newKey = 'kiwi'
  ref2.updatingRefTwo = true;
  debugger
  ​
  // Reassignment shown below creates a new array
  // rather than mutating the array.
  // This would not change the value in ref2
  ref1 = ['new value'];
  debugger

  // ===========================================================

  // 1. Rest Operator - takes in the rest of parameters
​
function smoothie(ingredient1, ingredient2) {
  console.log('Contains: ' + ingredient1 + ' & ' + ingredient2);
}
// smoothie('mango', 'strawberry');
​
​
// What if we had a lot more arguments / smoothie ingredients ?
​
​
// We can use rest parameters to make the function more dynamic and
  // take in any number of arguments.
​
function restSmoothie(...allIngredients) {
  let res = 'Contains: ';
  // for (let i = 0; i < allIngredients.length; i++) {
  //   res = res + ' and ' + allIngredients[i];
  // }
  allIngredients.forEach( function(ele) {
    res = res + ' and ' + ele;
  })
​
  console.log(res); // 'Contains: and ginger and banana';
}
​
restSmoothie('ginger', 'banana'); // ['banana', 'kiwi']
// restSmoothie('ginger', 'pepper', 'turmeric', 'milk', ); // ['pepper', 'turmeric', 'milk',]
// restSmoothie('ginger', 'pepper', 'turmeric', 'milk', 'banana', 'kiwi');
​
​
​
​
​
​
​
// ----------------------------------------------------
​
// Spread Operator
​
// Spread with Arrays:
let smallDogs = ['chihuahua', 'pomeranian', 'maltese'];
let mediumDogs = ['poodle', 'collie', 'basset hound'];
let largeDogs = ['saint bernard', 'great dane', 'english mastiff'];
​
let allDogsOneString = [ smallDogs + mediumDogs + largeDogs];
let allDogs = [ ...smallDogs, ...mediumDogs, ...largeDogs];
let allDogsV2 = [ smallDogs, mediumDogs, largeDogs];
​
​
// Spread with Objects
let sfInstructors = {
  c: 'carlos',
  m: 'mike',
  j1: 'jen',
  j3: 'julia'
};
​
let nyInstructors = {
  d: 'David',
  p: 'Paloma',
  k: 'Kafele',
  j1: 'Josh'
};
​
// let combinedInstructors = { ...sfInstructors, ...nyInstructors };
let combinedInstructors = { ...nyInstructors , ...sfInstructors};
debugger
combinedInstructors['j2'] = 'julia'
delete combinedInstructors['j3']
debugger
​
// spread in a function
function spreadDemo(dog1, dog2, dog3) {
  console.log(dog1, dog2, dog3)
}
​
let dogs = ['bob', 'bill', 'betty']
// spreadDemo(...dogs)
