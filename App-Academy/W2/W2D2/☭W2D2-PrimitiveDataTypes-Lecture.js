// Primtive Data Types vs Reference Data Types

// Primitive Data Types:
/*
1. Boolean - True or False
2. Null - represents the intentional absence of value
3. Undefined - default return value for many things in JS
4. Number - actual numbers we use (1, 2, 3, 4, 5)
5. String - ordered collection of characters ("apple")
*/

// Reference Data Type:
// 1. Object
//    *An Array is also ad type of object!


// Primitive Data Types are Immutable
// They can't be changed directly
let word = "dog";
let newWord = word.toUpperCase();
console.log(word); // dog
console.log(newWord); // DOG

// num = 5
// num is the reference variable
// 5 is retrieved from the computer
// let num1 = 5
// let num2 = num1;
// console.log(num1, num2) // 5
// let num1 = num1 + 3;
// doesn't change anything, just references 8 now
