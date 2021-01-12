// String Data Type
// const str = "dogs";
// console.log(str.indexOf("g")); // 2
// console.log(str[2]); // g
// console.log(str[str.length -1]); // will always return the last character! // "s"

// str.indexOf(searchValue [, fromIndex]) // "[]" signifies an option parameter
// let str = "I am a very good man!"
// console.log(str.indexOf("a")) // 2
// console.log(str.indexOf("a", 2)) // 2 (from index is exlusive!)
// console.log(str.indexOf("a", 3)) // 5



// // ====== String Type ======:

// 1. Initialize a variable with a value of 'Hello World'
//  let str = 'Hello World';

// 2. How long is this string?
// console.log(str.length); // 11

// 3. What letter aka character is at position 4?
// console.log(str[4]); // "o"

// 4. What position is character 'H' at?
// console.log(str.indexOf("H")); // "0"



// // ====== Functions ======:

// function addTwo(num1, num2) {
//     return num1 + num2;
// }
// console.log(addtwo(1, 2)); // 3

// # `String Type`
// - Single quotes or Double quotes
//   - Be consistent
//     - 'hello'
//     - "hello"
//     - "hello' -> BAD!
// - Length
//   - The `.length` method returns the number of characters in a string:
//     - `'code'.length` -> 4
// - Indexing Strings
//   - Think of an "`Index`" as the positioning of elements
//   - Indices start at 0



// // ====== Functions ======:
// function averageOfFour(arg1, arg2, arg3, arg4) {
//    console.log((arg1 + arg2 + arg3 + arg4) / 4);
// }

// averageOfFour(1, 20, 500, 11); // 133
// averageOfFour(10, 20, 30, 40); //25





// // ====== Conditionals ===:
// let myBoolean = false;

// if (myBoolean) {
//     console.log("hi");
// } else {
//     console.log("hello");
// }

// myBoolean = 5;
// if (myBoolean < 6) {
//     console.log("this is a truthy value");
// }
// if (myBoolean < 10 ) {
//     console.log("this is a falsey value");
// }

// // 'else' is mutually exclusive:
// let hungerLevel = 5;
// if (hungerLevel < 1) {
//     console.log('not hungry yet');
// } else if (hungerLevel <= 5) {
//     console.log('snack time!');
// } else if (hungerLevel <= 9) {
//     console.log('Time for a meal!');
// } else {
//     console.log('HANGRY!');
// } else if (hungerLevel <= 9) {
//     console.log('almost HANGRY!');
// }





// // ====== Loops ===:

// let ticker = 3;

// while (ticker > 0 ) {
//     console.log("I ran a lap!");
//     ticker--;
// }

// for (let i = 0; i < 3; i++) {
//     console.log("I ran a lap!")
// }




// // ======= Amazing Arrays === :
// let array = [];

// array.push(4);
// array.push(5);
// array.push("sup");

// console.log(array); // => ?
// console.log(array[0]); // => ?
// console.log(array[array.length - 1]); // => ?
// console.log(array.length); // => ?





// # `Functions`
// - input (aka Arguments), output (aka return value),
// - "Invoking a function" --> calling your function into action / running the function code
// - blocks of code that we can invoke multiple times
// - prevent us from having to rewrite code

//   ### The `return` keyword
//   - By default, js functions will return `undefined`.
//   - This, we need to use the `return` keyword:
//     ```js
//     function addTwo(num1, num2) {
//       return num1 + num2;
//     }
//     console.log(addtwo(1, 2)); // 3
//     ```
//   - The `return` keyword stops executing code, nothing else below is run
//     ```js

// # Conditionals
// - AKA the 'if/else if/else' statement
// - Help with 'control flow' (See readings)
// - You can chain these into big blocks for complex logic, ex:
// ```js
// let hungerLevel = 5;
// if (hungerLevel < 1) {
//     console.log('not hungry yet');
// } else if (hungerLevel <= 5) {
//     console.log('snack time!');
// } else if (hungerLevel <= 9) {
//     console.log('Time for a meal!');
// } else {
//     console.log('HANGRY!');
// } else if (hungerLevel <= 9) {
//     console.log('almost HANGRY!');
// }
// ```

// # Loops
// - AKA the 'for' loop and 'while' loop
// - Many types of for loop; here is the conventional and most common one you'll be using at aA:
// ```js
// for (let i = 0; i < arr.length; i++) {
//   // do something
// }
// ```
// - Here is an example while loop:
// ```js
// while (index > 0 ) {
//   // do something
//   index--;
// }
// ```

// # Array Data Type
// - An array holds a COLLECTION of data
// - In JS, you can combine numbers, strings, other arrays etc. into arrays. See here:
// ```js
// let arr = [ 0, 1, "banana", [], [5, 6] ]
// ```
// - Common array methods you will use often: (HINT: look these up in MDN to see what they do!)
//   - array.length
//   - array.push("banana")
//   - array.pop()
//   - array.slice(i, j)
// - Arrays are *not* a primitive data type, and thus *mutable*.
