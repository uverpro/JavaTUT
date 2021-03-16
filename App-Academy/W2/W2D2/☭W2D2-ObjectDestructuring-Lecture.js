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
console.log(thirdColor); // yellow



// Destructuring Objects:
// 1. Destructuring Keys
// 2. Aliased Destructuring
// 3. Nested Destructuring
// 4. Destructuring Objects in Parameters

let obj = { name: "Sandy", instruments: ["guitar", "bass"] };

// let { name, instruments } = obj;
// console.log(name); // Sandy
// console.log(instruments); // [ 'guitar', 'bass' ]

let { name, instruments: music } = obj;
console.log(name); // Sandy
console.log(music); // [ 'guitar', 'bass' ]



// 3. Nested Destructuring
let zooAnimals = {
    animalId: 12,
    species: "Hippo",
    favoriteFood: "Pizza",
    fullName: {
        fname: "Sophia",
        lname: "theCuteHippo"
    }
};
// console.log(fname); // <== ERROR, can't reference before initialization;
// trying to get Sophia:
let { fullName: {fname} } = zooAnimals;
console.log(fname);
let { fullName: {lname} } = zooAnimals;
console.log(lname);



// 4. Destructuring Objects in Parameters

let parrot = { name: "Layla", likes: "pets", toys: 1000 };

// function sayHelloName(name) {
//     console.log("Hello to " + parrotname);
// };
// sayHelloName(parrot); // Hello to Layla

function sayHelloName({ name }) {
    console.log("Hello to " + name);
}

function sayHowManyToys ({ toys }) {
    console.log("We've got " + toys + " toys");
}

sayHelloName(parrot);
sayHowManyToys(parrot);



// Examples:
let { person, animal } = { person: 'Claude', animal: 'elephant' };
console.log(person, animal);

let music = { tempo: 120, genre: 'March'};
let { tempo, genre } = music;
console.log(tempo, genre); // 120 March
