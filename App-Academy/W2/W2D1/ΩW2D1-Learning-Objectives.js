// Plain Old JS Object Lesson Learning Objectives

// 1. Label variables as either Primitive vs. Reference
"Strings are Primitive";
5, 4, 3, 2, 1; // so are numbers
(A || B); // Don't forget the Booleans

[ Arrays, are, reference, type ];

// 2. Identify when to use . vs [] when accessing values of an object

const object = { a: 1, b: 2, c: 3 };

for (const value in object) {
  console.log(`${value}: ${object[value]}`);
}

// 3. Use the obj[key] !== undefined pattern
// to check if a given variable that contains a key exists in an object



// 4. Utilize Object.keys and Object.values in a function

// 5. Iterate through an object using a for...in loop

function keysInObject(obj) {
    for (let key in obj) {
        console.log(key);
    }
}

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
keysInObject(animals);

// 6. Define a function that utilizes ...rest syntax to accept an arbitrary number of arguments

// 7. Use ...spread syntax for Object literals and Array literals

// 8. Destructure an array to reference specific elements

// 9. Destructure an object to reference specific values

// 10. Write a function that accepts an array as an argument
// and returns an object representing the count of each character in the array
