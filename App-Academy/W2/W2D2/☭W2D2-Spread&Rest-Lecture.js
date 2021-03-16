// Rest and Spread:
// 1. Rest Parameters - grab the rest of the parameters.
// 2. Spread Operator:
//      a. spread elements into data structures
//      b. spread iterable data types within function arguments



// Without Rest:
function colorPicker(color) {
    let string = `I picked the following colors: ${color}`;
    return string;
};

console.log(colorPicker("red", "blue")); // I picked the following colors: red
                                         //   will ignore blue
                                         //   or any arguments not included in parameters

function colorPicker(color, secondColor) {
    let string = `I picked the following colors: ${color}, ${secondColor}`;
    return string;
};

console.log(colorPicker("red", "blue")); // I picked the following colors: red, blue

// With Rest:

function colorPicker(color, ...otherColors) {
    let string = `I picked the following colors: ${color}`;
    // console.log(otherColors); // [ 'blue', 'yellow', 'orange', 'green' ];
    otherColors.forEach(function(arg){
        string = `${string}, ${arg}`
    })
    return string;
};

console.log(colorPicker("red", "blue", "yellow", "orange", "green"));



// Object

let array1 = ['zebra', 'bird', 'parrot'];
let array2 = ['lion', 'bison', 'panther'];

// Without Spread:
let array3 = array1.concat(array2);
console.log(array3); // [ 'zebra', 'bird', 'parrot', 'lion', 'bison', 'panther' ]
// With Spread:
let array4 = [...array1, ...array2];
console.log(array4); // [ 'zebra', 'bird', 'parrot', 'lion', 'bison', 'panther' ]

let obj1 = { car: "Nissan", color: "white" };
let obj2 = { wheels: 4, radio: "loud" };
let obj3 = { ...obj1, ...obj2};
console.log(obj3);


function colorPicker(color1, color2) {
        return `It don't matter if you're ${color1} or ${color2}!`;
};

let colorArray = ['white', 'black'];
console.log(colorPicker(...colorArray)); // It don't matter if you're white or black!
console.log(colorPicker(colorArray)); // It don't matter if you're white,black or undefined!
