let costOfGroceries = function (nums) {
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

let mostExpensiveGroceries = function(numsList) {
  let highestCost = 0;
  for (i = 0; i < numsList.length; i++) {
        if (costOfGroceries(nums) > highestCost)
          highestCost += nums
    }
  }
    return highestCost
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

console.log(mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]));

// function stringChanger(word, operation) {
//   // Your code here
// }

// // TESTS
// // DO NOT MODIFY ANYTHING BELOW THIS LINE

// let score = 0;

// if (stringChanger("foo", "capitalize") === "Foo") score++;
// if (stringChanger("foo", "uppercase") === "FOO") score++;
// if (stringChanger("foo", "double") === "foofoo") score++;
// if (stringChanger("foo", "reverse") === "oof") score++;

// if (stringChanger("foo", "unknown") === "foo") score++;

// console.log("You have scored " + score + "/5 points.");
