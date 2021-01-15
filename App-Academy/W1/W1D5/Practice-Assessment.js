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
        if (item === "butter")
          total += 1;
        if (item === "eggs")
          total += 2;
        if (item === "milk")
          total += 3;
        if (item === "bread")
          total += 4;
        if (item === "cheese")
          total += 5;
    }
    return total
  };

  function mostExpensiveGroceries(numsList) {
    let highestCost = 0;
    for (i = 0; i < numsList.length; i++) {
        costOfGroceries() {
          if (nums > highestCost)
            highestCost += nums
        }
      }
      return highestCost
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

//====

function stringChanger(word, operation) {
  let nuWord = "";
  if (operation === "capitalize")
      nuWord += word[0].toUpperCase() + word.slice(1);
  if (operation === "uppercase")
      nuWord += word.toUpperCase();
  if (operation === "double")
      nuWord += word + word;
  if (operation === "reverse")
      nuWord += word.split("").reverse().join("");
  if (operation === "unknown")
      nuWord += word;
  return nuWord;
}

console.log(stringChanger("foo", "capitalize")); // Foo
console.log(stringChanger("foo", "uppercase")); // FOO
console.log(stringChanger("foo", "double")); // foofoo
console.log(stringChanger("foo", "reverse")); // oof
console.log(stringChanger("foo", "unknown")); // foo

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (stringChanger("foo", "capitalize") === "Foo") score++;
if (stringChanger("foo", "uppercase") === "FOO") score++;
if (stringChanger("foo", "double") === "foofoo") score++;
if (stringChanger("foo", "reverse") === "oof") score++;

if (stringChanger("foo", "unknown") === "foo") score++;

console.log("You have scored " + score + "/5 points.");
