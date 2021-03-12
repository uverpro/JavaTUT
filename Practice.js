// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5


function costOfGroceries(groceries) {
    let cost = 0;
    for (let i = 0; i < groceries.length; i++) {
        let item = groceries[i];
        if (item === "butter")
            cost += 1;
        if (item === "eggs")
            cost += 2;
        if (item === "milk")
            cost += 3;
        if (item === "bread")
            cost += 4;
        if (item === "cheese")
            cost += 5;
    }
    return cost;
};


function mostExpensiveGroceries(groceriesList) {
        let highestCost = 0;
        let maxIndex = 0;
        for (i = 0; i < groceriesList.length; i++) {
          let currElement = groceriesList[i];
          let currCost = costOfGroceries(currElement);
              if (currCost > highestCost) {
                    highestCost = currCost;
                    maxIndex = i;
            }
        }
    return maxIndex
};


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
