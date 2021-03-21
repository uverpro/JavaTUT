/******************************************************************************
Write a function fuzzBizz(max) that returns an array of numbers under
the max. Each number should be either divisible by 2 or 7, BUT NOT BOTH.
*******************************************************************************/

function fuzzBizz(max) {
  buzzed = [];
  for (let i = 0; i < max; i++) {
    if ((i % 2 === 0 || i % 7 === 0) &&
      !(i % 2 === 0 && i % 7 === 0)) {
        buzzed.push(i);
      }
  }
  return buzzed;
}

console.log(fuzzBizz(17)); // => [ 2, 4, 6, 7, 8, 10, 12, 16 ]
console.log(fuzzBizz(30)); // => [ 2, 4, 6, 7, 8, 10, 12, 16, 18, 20, 21, 22, 24, 26 ]
