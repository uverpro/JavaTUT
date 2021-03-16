// Rest and Spread:
// 1. Rest Parameters - grab the rest of the parameters.
// 2. Spread Operator:
//      a. spread elements into data structures
//      b. spread iterable data types within function arguments



// Without Rest:
/* function colorPicker(color) {
    let string = `I picked the following colors: ${color}`;
    return string;
};

console.log(colorPicker("red", "blue")); // I picked the following colors: red
                                            will ignore blue
                                            or any arguments not included in parameters

function colorPicker(color, secondColor) {
    let string = `I picked the following colors: ${color}, ${secondColor}`;
    return string;
};

console.log(colorPicker("red", "blue")); // I picked the following colors: red, blue
*/

function colorPicker(color, ...otherColors) {
    let string = `I picked the following colors: ${color}`;
    // console.log(secondColor); // [ 'blue' ]
    // console.log(otherColors); // [ 'yellow', 'orange', 'green' ];
    return string;
};

console.log(colorPicker("red", "blue", "yellow", "orange", "green"));
