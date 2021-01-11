// Data Types in JS
// Numbers - (0, 1, 2, 3...)
// Booleans - True/False
// Strings - "Hello World!"
// Arrays - [0, 1, 2, 3...]
// Objects - (POGOs) {key1:"value1",key2:"value2"}

// "()" are grouping operators
// "++" is the "increment operator"

// JS reads from top down

// Variable name to the left, value to the right
// Variable Declerations:
// "let" (can be reassigned)
// "const" (cant be reassigned)

// Variable Assignment - assigns value to the variable

// let age = 0;
// age = 5;
// age += 5;
// console.log(age); // 10

// let count = 0;
// count++
// console.log(count) // 1

// let food; (declared by not assighned a value)
// console.log(food) // Undefined
// By default variable values are undefined
// console.log(food + 4) // NaN
// Any illegal math will return "NaN" AKA NOT A NUMBER



// BOOLEAN TYPE
// Boolean is a true or false value
// Syntax:
// console.log(true); // true
// console.log(false); // false

// Not Operator (!)
// - reverses a Boolean Value
// console.log(!true); // false
// console.log(!false); // true
// console.log(!!true); // true
// console.log(!!false); // false

// And Operator (&&)
// returns true only when both sides are true
// returns false when at least one side is false
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && false); // false

// Or Operator (||)
// returns false only when both sides are false
// returns true when at least one side is true
// console.log(false || false); // false
// console.log(true || false); // true
// console.log(true || true); // true

// console.log(!(true && false)); // (false || true) // true
// console.log(!(false || false)); // (true && true) // true



// Comparison Operators
// >, <, >=, <=, ===, !==
// will return a Boolean

// console.log("a" < "b"); // true
// console.log("z" > "b"); // true
// JS will evaluate them in alphabetical order
// console.log("cat" < "zoo"); // true
// console.log("cat" > "banana"); // true
// console.log("app" < "apple"); // true

// "===" vs "=="
// A tale of two Equality Operators
// console.log(5 === "5"); // false
// console.log(5 == "5"); // true (types are coerced by JS)
// console.log([] == 0); // true (unpredictable)
// avoid "=="
