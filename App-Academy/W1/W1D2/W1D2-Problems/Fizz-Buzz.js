// Fizz Buzz
// Define a function fizzBuzz(max) that takes a number and prints
// every number from 0 to max (not inclusive) that is divisible by either 3 or 5, but not
// both.

function fizzBuzz (max) {
    for (let i = 0; i < max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            console.log(i)
        }
    }
};

fizzBuzz(20); // 3, 5, 6, 9, 10, 12, 18

function fizzBuzz(max) {
    for (let i = 0; i < max; i += 1) {
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
    }
  };

  function fizzBuzzWhile(max) {
    let i = 0;
    while (i < max) {
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
      i++;
    }
  };

  function fizzBuzzNested(max) {
    for (let i = 0; i < max; i += 1) {
      if (i % 3 === 0) {
        if (i % 5 !== 0) {
          console.log(i);
        }
      } else if (i % 5 === 0) {
        console.log(i);
      }
    }
  };
