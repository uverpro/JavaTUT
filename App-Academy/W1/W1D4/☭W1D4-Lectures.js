// Helper Functions

/* Write a function that takes in an array of numbers
and returns a new array */

let isEven = function (num) {
    return num % 2 === 0;
};

let extractEvens = function (numbers) {
    let evens = [];
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (isEven(num)) {
            evens.push(num);
        }
    }
    return evens;
};

console.log(extractEvens([3, 5, 4, 7, 8])); // [4, 8]
console.log(extractEvens([42, 12, 11, 50])); // [42, 12, 50]



let a = function() {
    console.log("starting a"); // 1
    b();
    console.log("ending a") // 4
};

let b = function() {
    console.log("starting b"); // 2
    console.log("ending b"); // 3
};

a();



/* Write a function that accepts an array of numbers
and returns a new array containing only the prime numbers
A prime number is a number that is only divisble by 1 and itself */

let isPrime = function (num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(isPrime(5)); // true
console.log(isPrime(12)); // false

let pickPrimes = function (numbers) {
        let primesArray = [];
        for (let i = 0; i < numbers.length; i++) {
            let num = numbers[i];
            if (isPrime(num)) {
                primesArray.push(num);
        }
    }
    return primesArray;
};

console.log(pickPrimes([4, 7, 5, 12])); // [7, 5]
console.log(pickPrimes([31, 25, 9, 16])); // [31]


/* Write a helper function which returns a boolean
determining whether a word is less than 5 characters

Use the helper function in a function which
removes all characters in a string less than 5 characters in length and
returns

    function removeSmallWords (str) {
    let results = [];
    let split = str.split(" ");
    console.log(split, `<--- this is the split string`);
    for (let i = 0; )
        let joined = split.join(" ");
        console.log(joined, `<-- this is the joined string`);
};

removeSmallWords(`the cat is sooooooo awesome`);
[ 'the', 'cat', 'is', 'sooooooo', 'awesome' ] <--- this is the split string
the cat is sooooooo awesome <-- this is the joined string */


function isLessThanFive (word) {
    return word.length < 5;
};


function removeSmallWords (str) {
    let results = [];
    let split = str.split(" ");
    for (let i = 0; i < split.length; i++) {
        let word = split[i];
        if (!isLessThanFive(word)) {
            results.push(word);
        }
    }
    return results.join(" ");
};

console.log(removeSmallWords(`the cat is sooooooo awesome`));



// 2D Array

let twoDimensional = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];

console.log(twoDimensional[1]); // [ 'd', 'e' ]
console.log(twoDimensional[1][0]); // 'd'

let subArr = twoDimensional[1];
console.log(subArr[0]); // 'd'

// If we style our 2D arrays nicely so that each subarray is on a new line,
// we can interpret the double indices as [row][column]:

let twoDimensional = [
	["a", "b", "c"],
	["d", "e"],
	["f", "g", "h"]];

// get the element in the 0th row, 2nd col:
console.log(twoDimensional[0][2]); // 'c'



// Iterating through 2D Arrays:

let array = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];

for (let i = 0; i < array.length; i++) {
  let subArray = array[i];
  console.log(subArray);

  for (let j = 0; j < subArray.length; j++) {
    console.log(subArray[j]);
  }
};

// In the nested loops above, the i index refers to the current "row"
// and the j index refers to the current "column".



// More Helper Functions

// yellStrings(strings)
// Write a function that takes in an array of strings as an argument.
// It should return array where every string is "yelled", see the example below:


let yellStr = function (str) {
    let upperString = str.toUpperCase();
    return upperString + '!';
}

let yelledStrings = function (strings) {
    let yelled = [];

    for (let i = 0; i < strings.length; i++) {
        let string = strings[i];
        let newString = yellStr(string);
        yelled.push(newString);
    }

    return yelled;
};

console.log(yelledStrings(['hello', 'how', 'are', 'you?']));
// console.log(yell); //=> ['HELLO!', 'HOW!', 'ARE!', 'YOU?!'];

// Write a function laligatSum(n) that takes in a number and returns the
// laligatSum of that number.
// A number's laligat sum is the the sum of all the prime numbers less than or
// equal to that number.

// Not decomposed and thus complex:
function laligatSum(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 1) {
      let prime = true;

      for (let factor = 2; factor < i; factor += 1) {
        if (i % factor === 0) {
          prime = false;
          break;
        }
      }

      if (prime) {
        sum += i;
      }
    }
    return sum;
};

  // Nice and Decomposed:
function isPrime(n) {
    for (let i = 2; i  < n; i += 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  function laligatSum(n) {
    let sum = 0;

    for (let i = 2; i <= n; i += 1) {
      if (isPrime(i)) { // if i is a prime,
        sum += i;       // then add it to sum.
      }
    }

    return sum;
};

console.log(laligatSum(10));
console.log(laligatSum(11));
