// Write a function named `stringRepeater(str, num)` that accepts a string and a number as arguments.
// The function should return a new string consisting of the `str` repeated `num` number of times.

// Alvin's Solution

let stringRepeater = function (str, num) {
    let repeatedStr = "";
    for (let i = 1; i <= num; i++) {
        repeatedStr += str;
    }
    return repeatedStr;
};

console.log(stringRepeater("q", 4)); // qqqq
console.log(stringRepeater("go", 2));  // gogo
console.log(stringRepeater("tac", 3)); // tactactac

// declare the function & parameters
// declare variable = empty string aka "" (same as 0 in a number problem)
// run the for loop
// is 1 <= 2? TRUE
// "" + "go"
// run the loop
// is 2 <= 2? TRUE
// "go" + "go"
// run the for loop
// is 3 <= 2? FALSE.
// end loop
// return "gogo"
// A FOR LOOP is just to run the code below a certain number of times
