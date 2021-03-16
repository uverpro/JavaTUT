// Object Destructuring

// Array Destructuring:
// 1. Destructuring Elements in Order

let array = ["blue", "red", "yellow", "green", "pink"];

// So far:
// let firstColor = array[0];
// let secondColor = array[1];
// console.log(firstColor); // blue
// console.log(secondColor); // red

let [firstColor, secondColor, thirdColor] = array;
console.log(firstColor); // blue
console.log(secondColor); // red



// Examples:
let { person, animal } = { person: 'Claude', animal: 'elephant' };
console.log(person, animal);

let [game, player] = ["State o' Decay", "Cory"];
