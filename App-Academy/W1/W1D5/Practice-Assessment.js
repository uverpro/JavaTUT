// Quiz => Problems I had trouble with

// let num = 100;
// let isBig = num >= 100;
// let isSmall = num < 100;
// console.log(isBig || isSmall);
// TRUE


// Which of the following is NOT true?
// !(!A && !B) === A || B
// A && B === !A || !B    // NOT TRUE
// !A && !B === !(A || B)
// !(A && B) === !A || !B


// What is the best description of the string slice() function?
// Divides a string sentence into an array containing each word
// Divides a string into two
// Removes the first character from a string
// Extracts a section of a string and returns a new string ==> TRUE






// MOST EXPENSIVE GROCERIES

// Compile a price checker for a grocery store. The grocery prices are as follows:
// butter: $1, eggs: $2, milk: $3, bread: $4, cheese: $5
// 1. Create a function called costOfGroceries(grocieries) which takes a single array of grocery items
// and returns the total cost.
// 2. Write a function mostExpensiveGroceries(groceriesList) that takes in a 2-dimensional array of grocery items
// and returns the index of the sub-array with the highest cost.

// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5


function costOfGroceries(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i];
        if (item = "butter")
            total += 1;
        if (item = "eggs")
            total += 2;
        if (item = "milk")
            total += 3;
        if (item = "bread")
            total += 4;
        if (item = "cheese")
            total += 5;
    }
    return total
};

const groceriesA = ['cheese', 'butter', 'eggs'];
console.log(costOfGroceries(groceriesA));  // 8

function mostExpensiveGroceries(numsList) {
    // Your code here
}


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");
