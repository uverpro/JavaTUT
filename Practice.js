let arr = [1, 1, 3, 2, 2, 1];

const result = arr.reduce(function(acc, value) {
  if (acc[value]) {
    acc[value]++;
  } else {
    acc[value] = 1;
  }
  return acc;
}, {});
