// // Week 2 Practice Problems
// // Here are some practice problems that we came up with and some `console.log` test cases to accompany them.
// // Enjoy!

// // write a function "rollCall(array)"" that
// // takes in an array of people objects,
// // and returns a string with the names of all the people separated by " and "
// //
// // now write that function so that it returns a function that when called later on,
// // will add names to that same string and return the new string every time
// // Bonus: if you can write it such that the returned function can take in one or multiple person arguments at a time to add to the roll call string

// function rollCall(arr) {
//
// }

// let people = [
//   { name: "Maggie", faveColor: "colorful" },
//   { name: "Kush", dog: "fluffy" },
//   { name: "Morgan", height: "tall" },
// ];
// // function rollCall(peopleArr) {
// //   //
// // }

// console.log(rollCall(people)); // "Maggie and Kush and Morgan"

// // where your rollCall function returns another function
// let extraAttendance = rollCall(people);
// console.log(extraAttendance("Joe")); // "Maggie and Kush and Morgan and Joe"
// console.log(extraAttendance("Ashton")); // "Maggie and Kush and Morgan and Joe and Ashton"
// //
// //

// //
// // write a function that
// // receives a string and creates an object with each letter in the string set to a key in that object and the value being the index the letter is found at last
// // now write it so that the value is the index the letter is found at first(ignores the second occurrence of the same letter)
// //
// function vowelFinder(string) {
//   //
// }

// // last vowel appearance index
// console.log(vowelFinder("aardvark")); // {a: 5}
// console.log(vowelFinder("appreciate")); // {i: 6, a: 7, e: 9}
// console.log(vowelFinder("kjsfhsdkj")); // {}

// // first vowel appearance index
// console.log(vowelFinder("aardvark")); // {a: 0}
// console.log(vowelFinder("appreciate")); // {i: 6, a: 0, e: 4}
// console.log(vowelFinder("kjsfhsdkj")); // {}
// //

// //
// // write a function that receives an array of ticket numbers(ie: [74, 82, 13, 133, 65])
// // it should return a function that receives a single person's name(string)
// // once you've given out all the ticket numbers,(one for each person's name)
// // return a pojo that has each person's name pointing to their ticket number

// function ticketMachine(arr) {
//   //
// }

// let ticketBot = ticketMachine([74, 82, 133, 65]);

// console.log(ticketBot("Corina")); // undefined
// console.log(ticketBot("Tom")); // undefined
// console.log(ticketBot("Emily")); // undefined
// console.log(ticketBot("Justin")); // {Corina: 74, Tom: 82, Emily: 133, Justin: 65}

// // write a function that receives three pojos as arguments
// // join these three objects together in the correct `.order`
// let object1 = {
//   name: "name1",
//   continent: "asia",
//   favoriteToy: "basketball",
//   order: 3,
// };
// let object2 = {
//   name: "name2",
//   age: 724,
//   dogName: "Zorro",
//   favoriteToy: "frying pan",
//   order: 1,
// };
// let object3 = {
//   name: "name3",
//   age: 52,
//   favoriteToy: "nintendo",
//   order: 2,
// };

// function objectFusion(obj1, obj2, obj3) {
//   //
// }

// console.log(objectFusion(object1, object2, object3)); //{ name: "name1", dogName: "Zorro", age: 52, continent: "asia", favoriteToy: "basketball", order: 3, }
// //

// //
// // write a function that receives a suffix object --> {"a": "!a!", "e": ":( :( :(", "i": "<3 <3", "o": " Wo0o0o0oW", "u": "......"}
// // and returns another function that expects a string
// //    this function should return a new string with a different suffix added to it depending on which vowel it ends with
// // it should return the original string if there is no vowel at the end of the word

// function suffixAddition(suffixObj) {
//   //
// }

// let suffix = {
//   a: "!a!",
//   e: " :( :( :(",
//   i: "<3 <3",
//   o: " Wo0o0o0oW",
//   u: "......",
// };
// let formatter = suffixAddition(suffix);

// console.log(formatter("apple")); // "apple :( :( :("
// console.log(formatter("data")); // "data!a!"
// console.log(formatter("rodeo")); // "rodeo Wo0o0o0oW"
// console.log(formatter("peach")); // "peach"

// //
// //
// //
// //
// let testObject = {
//   key1: "value1",
//   key2: ["firstElement", 2, { something: "new" }],
//   key3: {
//     inner: "how did I get here?",
//     inception: {
//       deeper: "this is crazy",
//     },
//   },
// };
// // how could you destructure the object above to:
// // - make a variable `key1` that points to "value1"
// console.log(key1); // "value1"

// // - make a variable `something` that points to "new"
// console.log(something); // "new"

// // - make a variable `inception` that points to {deeper: "this is crazy"}
// console.log(inception); // {deeper: "this is crazy"}

// // - make a variable `deeper` that points to "this is crazy"
// console.log(deeper); // "this is crazy"

// // - make a variable `banana` that points to { inner: "how did I get here?", inception: { deeper: "this is crazy"} }
// console.log(banana); // { inner: "how did I get here?", inception: { deeper: "this is crazy"}}

// // - make some variables `joe`, `jesse`, `aa` that point to "firstElement", 2, {something: "new"} respectively
// console.log(joe); // "firstElement"
// console.log(jesse); // 2
// console.log(aa); // {something: "new"}

/*
think about some stuffs:
look at the following statements and
try to come up with code that
"demonstrates" or "proves" the following statements
*/

// scope gets created with {}
// theres is a global/function(local)/block scope
// has something to do with variables and where we can use em
// const and let have different "scoping" than var
// global scope is the "top level" scope
// scope chaining
// closure
//

// // can you explain the difference between scope chaining and closure?
// // can you describe when you would use const vs let vs var? what do each do?

//const
// block scope
// can't reassign, but can mutate
// can't be redeclared  // const car = "car"; const car = "string"
// JEsse said we should use this

// let
// can be reassigned
// can be mutated
// can't be redeclared
// block scope

// var
// can be reassigned
// can be mutated
// function scoped
// can be redeclared
// declaration is hoisted, but not initialized(aka it will point to undefined until assigned a value alter)

// // can you explain the difference between rest and spread?
// // can you explain what a callback is?
// // can you explain how the callback passed into the `.reduce` function is used by reduce?
