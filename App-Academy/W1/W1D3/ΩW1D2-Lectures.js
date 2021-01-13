// {/* <label>Favorite Cookie</label>
// <input type="text" id="fav-cookie" name="favorite_cookie">
// What HTML attribute needs to be added to the label tag to connect it to the input tag?
// And what would be the value of the HTML attribute?


// for="fav-cookie"

// EXPLANATION
// The "for" attribute on a label tag is should have the same value as the id of the input
// you want to connect the label to.
// Alternatively, you can put the input element inside of the label element.



// FUNCTION DECLERATION SYNTAX
// function sayHello () {
    // console.log('hello);
    // console.log('bye');
// };

// FUNCTION EXPRESSION SYNTAX
// let sayHello = function () {
//      console.log('hello');
//      console.log('bye');
//};





// === Array.prototype.push
// let people = ['Miah'];
// let firstPeople = people;

// people.push('Adrian');
// people.push('Tom');
// people.push('Justin');
// people.push('Emily');

// console.log(people); // [ 'Miah', 'Adrian', 'Tom', 'Justin', 'Emily' ]
// console.log(firstPeople === people); // true



// === Array.prototype.pop
// Permanently removes and returns the last element in an array
// let dogs = ['Fido', 'Digby', 'Fluffy'];
// let beforePop = dogs;

// const lastDog = dogs.pop();

// console.log(lastDog); // 'Fluffy'
// console.log(dogs); // ['Fido', 'Digby']
// console.log(beforePop === dogs); // true



// === Array.prototype.shift
// let cats = ['Paprika', 'Whiskers', 'Garfield'];
// let beforeShift = cats;

// let firstCat = cats.shift();

// console.log(firstCat); // 'Paprika'
// console.log(cats); // ['Whiskers', 'Garfield']
// console.log(beforeShift === cats);



// Array.prototype.unshift
let beforeUnshift = cats;

cats.unshift('Sennacy');

// console.log(cats); // ['Sennacy', 'Whiskers', 'Garfield']
// console.log(beforeUnshift === cats);



// Array.prototype.splice
// The splice() method changes the contents of an array by removing or replacing existing elements
// and/or adding new elements in place.
// let drinks = ['coffee', 'oj', 'pumpkin juice'];
// drinks.splice(1, 2, 'milk');

// console.log(drinks); // [ 'coffee', 'milk' ]



// ARRAY FUNCTIONS

// Iteration tracking:
// let foods = ['banana', 'taco', 'cookie'];
//     for (i = 0; i < 3; i++) {    // "i < foods.length; will go through all elements"
//         let currentFood = foods[i];
//         console.log(currentFood); // banana, taco, cookie
// };

// console.log(foods); // [ bananna, taco, cookie ]



// Given an Array of Strings, turn each element (aka ITERATION) uppercased

function arrayToUpperCase (array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof element === 'string') {
      let upperCased = element.toUpperCase();
      array.splice(i, 1, upperCased);
    }
  }
  return array;
};

const foods = ['banana', 'taco', 'cookie'];
console.log(arrayToUpperCase(foods));

// function declaration syntax
// function name is built into the declaration of the function
function sayHello1() {
    console.log('Function Declaration Syntax');
  }
  sayHello1();


  console.log('--------');


  // function expression syntax
  // setting a variable to an anonymous function
  let sayHello2 = function() {
    console.log('Function Expression Syntax');
  };
  sayHello2();

  console.log('--------');

  // first class objects - something you can store in a variable
  let name = 'Alvin'
  let age = 1000;
  let getAvg = function(num1, num2) {
    return (num1 + num2)/2
  };



  // console.log(getAvg); // will log the function
  // console.log(getAvg(3, 4)) // will log the return of the function





  // can pass functions around to other variables
  let anotherVar = getAvg;
  console.log(anotherVar(5, 6));
