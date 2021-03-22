// Plain Old JS Object Lesson Learning Objectives

// 1. Label variables as either Primitive vs. Reference
let num = 8 //  Primitive (Not mutable)
let string = "test" // Primitive (Not mutable)
let bool = true // Primitive (Not mutable)
let nullVal = null // Primitive (Not mutable)
let nanVal = NaN // Primitive (Not mutable)
let undefinedVal = undefined // Primitive (Not mutable)
let arr = ['sup', 'why tho', 1, ['What about me?']] // Reference (Mutable)
let obj = {
    'key': "value",
    'otherKey': 2
} // Reference (Mutable)

// 2. Identify when to use . vs [] when accessing values of an object

const object = { A: 1, B: 2, C: 3 };

for (const value in object) {
  console.log(`${value}: ${object[value]}`);
}
// A: 1
// B: 2
// C: 3

let notationPractice = {
  key1: 'Miah',
  key2: 'Mylo',
  key3: 'Zac',
  name: 'Carlos',
  chad: 'Adrian'
};
let Miah = 'Miah';
let key1 = 'key2';
let name = 'chad';
console.log(notationPractice[Miah]) // undefined
console.log(notationPractice.name) // Carlos
console.log(notationPractice['name']) // Carlos
console.log(notationPractice[name]) // Adrian
console.log(notationPractice.chad) // Adrian
console.log(notationPractice.key1) // Miah === notationPractice['key1']
console.log(notationPractice[key1]) // Mylo


// 3. Use the obj[key] !== undefined pattern
// to check if a given variable that contains a key exists in an object
console.log(notationPractice[Miah] !== undefined) // false
console.log(notationPractice.chad !== undefined) // true
console.log(notationPractice.key3 !== undefined) // true
console.log(notationPractice.warren !== undefined) // false
function changeToRich(obj) {
  if(obj.key1 === undefined){
    obj.key1 = 'Rich'
  }
}
changeToRich(notationPractice);
console.log(notationPractice)



// 4. Utilize Object.keys and Object.values in a function
let notationPractice = {
  'key1': 'Miah',
  'key2': 'Mylo',
  'key3': 'Zac',
  'name': 'Carlos',
  'chad': 'Adrian'
};
let functionUsingObjStuff = (obj) => {
  let keys = Object.keys(obj);
  console.log("This is what Object.keys gives us:", keys)
  let values = Object.values(obj);
  console.log("This is what Object.values gives us", values)
  keys.forEach((key, i) => console.log(key, 'key at index', i))
  values.forEach((value, i) => console.log(value, 'value at index', i))
}
functionUsingObjStuff(notationPractice);



// 5. Iterate through an object using a for...in loop

function keysInObject(obj) {
    for (let key in obj) {
        console.log(key);
    }
}

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
keysInObject(animals);

let notationPractice = {
  'key1': 'Miah',
  'key2': 'Mylo',
  'key3': 'Zac',
  'name': 'Carlos',
  'chad': 'Adrian'
};
for(let key in notationPractice){
  console.log('Key:', key, 'Value:', notationPractice[key])
}
let forOfArr = [1, 2, 3]
for(let element of forOfArr){
  console.log(element)
}
for(let index in forOfArr){
  console.log(Number(index))
}



// 6. Define a function that utilizes ...rest syntax to accept an arbitrary number of arguments

let restFunc = function (...arr) {
  // console.log(arr) [ 1, 2, 5, 6, 7, 8, 9 ]
  return arr.reduce(function (acc, el) {
      return acc + el;
  })
}
console.log(restFunc(1, 2, 5, 6, 7, 8, 9)) // 38

let anotherRestFunction = (arg, ...restArgs) => {
  console.log(arg);
  console.log(restArgs);
  if (arg > restArgs.reduce((acc, el) => acc += el)) {
      return "arg > restArgs"
  } else {
      return "restArgs > args"
  }
};
console.log(anotherRestFunction(44, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11)) //
console.log(anotherRestFunction(12, 67, 67676, 67676)) //


// 7. Use ...spread syntax for Object literals and Array literals

// 8. Destructure an array to reference specific elements

// 9. Destructure an object to reference specific values

// 10. Write a function that accepts an array as an argument
// and returns an object representing the count of each character in the array
