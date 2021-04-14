// Plain Old JS Object Lesson Learning Objectives

// 1. Label variables as either Primitive vs. Reference

// * Number
// Yes) Primitive
// No) Reference
let num = 8 //  Primitive (Not mutable)

// * String
// Yes) Primitive
// No) Reference
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
  console.log('Key:', key, 'Value:', notationPractice[key]) // Key: key1 Value: Miah
}
let forOfArr = [1, 2, 3]
for(let element of forOfArr){
  console.log(element) // 1
}
for(let index in forOfArr){
  console.log(Number(index)) // 0
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
  console.log(arg); // 44
  console.log(restArgs); // [ 11, 11, 11, 11, 11, 11, 11, 11, 11, 11 ]
  if (arg > restArgs.reduce((acc, el) => acc += el)) {
      return "arg > restArgs"
  } else {
      return "restArgs > arg"
  }
};
console.log(anotherRestFunction(44, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11)); // restArgs > args
console.log(anotherRestFunction(12, 67, 67676, 67676)); // restArgs > args
console.log(anotherRestFunction(100000, 10, 10, 10, 10)); // arg > restArgs


// 7. Use ...spread syntax for Object literals and Array literals

let notationPractice = {
  'key1': 'Miah',
  'key2': 'Mylo',
  'key3': 'Zac',
  'name': 'Carlos',
  'chad': 'Adrian'
};
let spreadArray = [1, 2, 3, 4, 5]
let spreadArray2 = [6, 7, 8, 9, 10]
let nonSpreadable = 0
console.log([1, 2, 3, 4, 5]) // [ 1, 2, 3, 4, 5 ]
console.log(spreadArray) // [ 1, 2, 3, 4, 5 ]
console.log(1, 2, 3, 4, 5) // 1 2 3 4 5
console.log(12345) // 12345
// console.log(...spreadArray) // ERROR
console.log([12345, ...spreadArray2]) // [ 12345, 6, 7, 8, 9, 10 ]
console.log([...spreadArray, ...spreadArray2]) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// console.log(...spreadArray, ...nonSpreadable) // ERROR
console.log(...Object.keys(notationPractice)) // key1 key2 key3 name chad
console.log(...Object.keys[keys](notationPractice)) // key1 key2 key3 name chad



// 8. Destructure an array to reference specific elements

let destructureArr = ['first', 'third', 'fourth', 'fifth'];
let [first, second, third, fourth, fifth] = destructureArr;
console.log(first); // first
console.log(second); // third
console.log(third); // fourth
console.log(fourth); // fifth
console.log(fifth); // undefined


// 9. Destructure an object to reference specific values

let destructureObj = {
  two: 2,
  three: 'three',
  four: 'papaya',
  one: {
      innerKey: 'nested'
  }
}
let {
  one: funnyName,
  three,
  four,
  two
} = destructureObj;
// console.log(one) // ERROR one is not defined
console.log(funnyName) // object {innerKey: 'nested'}
console.log(two) // 2
console.log(three) // 'three'
console.log(four) // 'papaya'
destructureObj.whateverYouWannaNameThisKey = 5
destructureObj.seven = destructureObj.two
delete destructureObj.two
// destructureObj.seven = valueOfKey
console.log(destructureObj) // =>
// {
//   three: 'three',
//   four: 'papaya',
//   one: { innerKey: 'nested' },
//   whateverYouWannaNameThisKey: 5,
//   seven: 2
// }



// 10. Write a function that accepts an array as an argument
// and returns an object representing the count of each character in the array

let characterArr = ['a', 'w', 'm', 'm', 'c', 'j', 'z', 'c', 'k'];​
let arrToObj = (arr) => {
    let returnObj = {}; // empty object (is out counter)
    arr.forEach(el => { // loop through each element
        if (returnObj[el] === undefined) { //check if each element already exists as a key
            returnObj[el] = 1; // if not, we add it as a key and set the OG value to 1
        } else {
            returnObj[el]++; //if it does exist we want to log that we hit the value again
        }
    })
    return returnObj; // return key value pairs represeting the amount of times we hit the key
}
console.log(arrToObj(characterArr));


function charCount(inputArr) {
  let res = {};
  inputArr.forEach(function(el) {
      if (res[el] === undefined) {
          res[el] = 1;
      } else {
          res[el] += 1;
      }
  });
  return res;
}

console.log(charCount([
  'p', 'n', 'e', 'u', 'm', 'o', 'n', 'o',
  'u', 'l', 't', 'r', 'a', 'm', 'i', 'c',
  'r', 'o', 's', 'c', 'o', 'p', 'i', 'c',
  's', 'i', 'l', 'i', 'c', 'o', 'v', 'o',
  'l', 'c', 'a', 'n', 'o', 'c', 'o', 'n',
  'i', 'o', 's', 'i', 's'
]));

function charCountReduce(inputArr) {

  let res = inputArr.reduce(function(accum, el) {
      if (!(el in accum)) {
          accum[el] = 1;
      } else {
          accum[el] = accum[el] + 1;
      }
      return accum;
  }, {})
  return res;

}
