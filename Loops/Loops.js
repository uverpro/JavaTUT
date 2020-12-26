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



// REMEMBER: "i" is used to stand for "index" or "iteration"
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




let str = "dog";
for (let i = 0; i < 3; i++) {
    console.log(i); // WILL PRINT 0, 1, 2
};
// let str = "dog";
// console.log(str[1]); // WILL PRINT "a"
// let str = "dog";
// let i = 1;
// console.log(str[i]); // WILL PRINT "a"
// let str = "dog";
for (let i = 0; i < 3; i++) {
    console.log(str[i]); // WILL PRINT "d", "o", "g"
};


let str2 = "potato";
for (let i = 0; i < 3; i++) {
    console.log(str2[i]);
}; // WILL PRINT "p", "o", "t"


// Let's make a FOR LOOP that will iterate through every char regardless of string length.
let str3 = "SCHWORDEBURG!!!";
for (let i = 0; i < str3.length; i++) {
    console.log(str3[i]);
}; // THIS IS HOW WE DOOO IT



// let str = "CARS".
// The string length is "4", but the indices are 0, 1, 2, 3.
// That's why you put "<" rather than "<="
// If a FOR LOOP of "CARS" read "i <= str.length;" would print - "C", "A", "R", "S", "undefined".
// Because of the extra iteration.

let str4 = "CARS"; // Good diagram of a FOR LOOP
for (let i = 0; i < str4.length; i++) {
    console.log(i);
    console.log(str4[i]);
    console.log("----")
};



let sum = 0
// sum = 0                               //(0 <= 3? TRUE so run the code)
// FIRST LOOP:  0(sum) + 1(num) = 1
// sum = 1                               //(1 <= 3? TRUE so run the code)
// SECOND LOOP: 1(sum) + 2(num) = 3
// sum = 3                               //(3 <= 3? TRUE so run the code)
// THIRD LOOP: 3(sum) + 3(num) = 6
// sum = 6                               //(6 <= 3? FALSE so STAHP)
for (let num = 1; num <= 3; num++) {
    sum += num;
};
console.log(sum); // 6



for (let num = 1; num <= 10; num++) {
    console.log(num);
    if (num % 2 === 0) {
        console.log("It is even!")
    } else {
        console.log("It is odd!")
    }
};



let total = 0;
for (let i = 1; i < 5; i++) {
    total += i; // bc of this: 1, 3, 6, 10. Runs 4 times. (0 + 1), (1 + 2), (3 + 3), (6 + 4)
    console.log(total);
}

console.log("grand total; " + total)
// 1, 3, 6, 10 grand total; 10
