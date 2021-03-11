// Helper Functions

/* Write a function that takes in an array of numbers
and returns a new array */

let isEven = function (num) {
    return num % 2 === 0;
};

let extractEvens = function (numbers) {
    let evens = [];
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (isEven(num)) {
            evens.push(num);
        }
    }
    return evens;
};

console.log(extractEvens([3, 5, 4, 7, 8])); // [4, 8]
console.log(extractEvens([42, 12, 11, 50])); // [42, 12, 50]



let a = function() {
    console.log("starting a"); // 1
    b();
    console.log("ending a") // 4
};

let b = function() {
    console.log("starting b"); // 2
    console.log("ending b"); // 3
};

a();
