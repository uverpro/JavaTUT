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

const groceriesA = ['cheese', 'butter', 'eggs'];
console.log(costOfGroceries(groceriesA));  // 8
