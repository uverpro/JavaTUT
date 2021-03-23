// Print Fives
// Write a function printFives(max) that prints out the multiples of 5 that are less than max.
// Try to solve this in two ways, using a conditional (if) and without using a conditional.

function printFives (max) {
    for (let i = 0; i < max; i += 5) {
    console.log(i);
    }
};

function printFives (max) {
    for (let i = 0; i < 20; i++) {
    if (i % 5 === 0) {
        console.log(i);
     }
    }
};


printFives(20) // 0, 5, 10, 15
