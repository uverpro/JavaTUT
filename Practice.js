let arr = [1, 1, 3, 2, 2, 1];

const result = arr.reduce(function(acc, value) {
  if (acc[value]) {
      console.log(acc[value])
    acc[value]++;
    console.log(acc[value])
  } else {
    acc[value] = 1;
    console.log(acc[value])
  }
  console.log(acc)
  return acc;
}, {});

console.log(result);
