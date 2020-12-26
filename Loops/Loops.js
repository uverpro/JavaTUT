console.log("I am Hungry");
console.log("I am Hungry");
console.log("I am Hungry");
console.log("I am Hungry");
console.log("I am Hungry");
// What if I want to run this command "x" amount of times?
//for (let count = 0; count <= 4; count++) {}; // Use a "for loop"
    // Memorize these three steps of a "for loop".
        // 1. Variable Decleration.
        // 2. Boolean expression that is true as long as I want the loop to run. In this example, 0 through 4.
        // 3. Incremental increase. In this example, hit each number, increment by 1.

for (let count = 0; count <= 4; count++) {
    console.log("I am Hungry"); // Will print 5 times AKA "0-4"
};
// Start at 0.
// Is 0 <= 4?
// So long as statement is true, it will run the code.
// ITERATION. Each time code is ran in a "for loop" it's referred to as an ITERATION. A SINGLE CYCLE.
// Incremental increase by one.
// Is 1 <= 4?
// It will repeat until "count = 5"
// 5 is not <= 4, so it will return false and stop running the code inside the "for loop"



console.log("Start");
for (let i = 0; i <= 9; i++) {
    console.log("In the Loop");
}; // will print 10x
console.log("End");



for (let i = 10; i >= 0; i--) { // for (let i = 10; i >= 0; i++) WOULD RUN FOREVER
    console.log(i);
}; // will "count down" from 10 to 0
console.log("LIFT OFF!");



console.log("Let's count by two's!")
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
};
console.log("GOOD JERB!");
