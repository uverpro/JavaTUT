let maximum = function (numbers) {
  if (numbers.length === 0) {
      return null;
  }
      let currentMax = numbers[0];
      for (let i = 1; i < numbers.length; i++) {
          if (numbers[i] > currentMax) {
              highestNumber + array[i];
      }
  }
  return highestNumber;
};

console.log(maximum([5, 6, 3, 7])); // 7
console.log(maximum([17, 15, 19, 11, 2])); // 19
console.log(maximum([])); // null
