// === Problem Solving Learning Objectives

// 1. Craft a clear, concise coding question to a more experienced developer
// 2. Research unknown JavaScript code syntax using MDN
// 3. Identify and fix a bug in code based on an error message

function arrayToUpperCase (array) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (typeof element === 'string') { // you need "if (typeof element === 'string')"
        let upperCased = element.toUpperCase();
        array.splice(i, 1, upperCased);
      }
    }
    return array;
  };

  const foods = ['banana', 'taco', 'cookie'];
  console.log(arrayToUpperCase(foods));

// TYPEOF

// When is it appropriate for the typeof operator to be used?



// === Expression Lesson Learning Objectives

// 1.Given a working REPL interface, write and execute a statement that will print “hello world” using console.log
console.log("Hello World");

// 2. Identify that strings are a list of characters defined by using double or single quotes
let str1 = 'This is a "string".'
let str2 = "This isn't not a string."

// 3. Given an arithmetic expression using +, -, *, /, %, compute its value
console.log(5 + 5) // 5
console.log(5 - 5) // 0
console.log(5 * 5) // 25
console.log(5 / 5) // 1
console.log(5 % 5) // 0

// 4. Given an expression, predict if its value is NaN
// Construct the truth tables for &&, ||, !
//  X       Y     !X     !Y    ( X && Y )  ( X || Y )
// false	false	 true 	true     false	     false
// false	true	 true 	false    false	     true
// true	  false	 false  true	   false	     true
// true	  true	 false 	false    true	       true

// 5. Given an expression consisting of >, >=, ===, <, <=, compute it’s value
console.log(5 > 5); // false
console.log(5 >= 5); // true
console.log(5 === 5); // true
console.log(5 < 5); // false
console.log(5 <= 5); // true

// 6. Apply De Morgan’s law to a boolean expression
// !A && !B = !(A || B)

// 7. Given an expression that utilizes operator precedence, compute its value
console.log(5 + 5 % 5); // 5

// 8. Given an expression, use the grouping operator to change it’s evaluation
console.log((5 * 5) / 5); // 5

// 9. Given expressions using == and ===, compute their values
console.log(5 == "5"); // true
console.log(5 === "5"); // false

// 10. Given a code snippet using postfix ++, postfix --, +=, -=, /=, *=, predict the value of labeled lines

// 11. Create and assign a variable using let to a string, integer, and a boolean. Read its value and print to the console.
