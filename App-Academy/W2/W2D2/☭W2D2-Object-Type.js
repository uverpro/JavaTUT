// THE OBJECT TYPE

// Objects are a Data Type, like string or arrays
// they store other data like an array stores elements

// Objects store VALUE that is associated with a KEY
// KEYS are almost always strings
// VALUES can be any data type: numbers, strings, arrays, other objects, etc.

// In other programming languages similar data structures are
// referred to as "dictionaries", "maps", or "associative arrays"

// Difference from Arrays:
// 1. Instead of accessing values within an object through an index with numbers,
// objects are indexed using KEYS
// 2. Order is NOT guaranteed within an Object. When you iterate through the values
// in an object, they may not be in the same order as when they were entered.


// Objects are defined by using curly braces: {}. See below for an example:

let Car = {};
console.log(Car) // {}
// here is our new empty object!

// Objects are POGOs aka "plain old javascript objects"


// SETTING KEYS AND VALUES

// Think of an object like a car
// A car can have a color, a number of wheels, a numbers of seats, a weight, etc.
// All different properties you wouldn't list in a particular order
// though all these properties have defining characteristics

// Create a "car" object to represent that collection of properties
// You can create a new key-value pairs by using bracket [] notation
// and assignment =.
// Note: the key inside the brackets is represented with a string:

Car["Color"] = "Blue";
console.log(Car); // { Color: 'Blue' }
Car["Seats"] = 2;
console.log(Car); // { Color: 'Blue', Seats: 2 }
