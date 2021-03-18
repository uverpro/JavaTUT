/***********************************************************************
Write a function named: countDownTimer(n). This function will represent a count
down of days till the New Year. The countDownTimer function will
take in a number argument (n) the first time it is called and if that
number is greater than 0 the countDownTimer will return a function.

The function returned by countDownTimer can then be invoked n times before it
returns a string of "Happy New Year!". Look closely at how this function is
invoked below:

Example 1:
  console.log(countDownTimer(0)); // prints "Happy New Year!"

Example 3:
  let oneDay = countDownTimer(1); // returns a function
  console.log(oneDay()); // prints "Happy New Year!"

Example 3:
  let twoDays = countDownTimer(2); // returns a function
  console.log(twoDays()); // returns a function
  console.log(twoDays()); // prints "Happy New Year!"

Example 4:
  let threeDays = countDownTimer(3); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // prints "Happy New Year!"

***********************************************************************/
/*
input: 1 number
output: return a function OR a string
strategy:
n argument is related to when we return a function or string
I want to return a function from countDownTimer
Will need to make that function first
I'll need to know when to return that function
This function will need some information from the original function
*/

let countDownTimer = function (n) {
  if (n === 0) {
    console.log(`Happy New Year!`)
  }
  return function() {
    console.log(`Happy`);
  }
};

oneDay = countDownTimer (1);
oneDay()
























let variable = "string"
function countDownTimer(n){
  if (n > 0) {
    return function outer () {
      n--;
      if (n <= 0) {
      console.log("Happy New Year")
      return "Happy New Year"
      } else {
        return console.log("HELP"); // suppose to be function
      }
    }
  }
  console.log("Happy New Year")
  return "Happy New Year"
};

console.log(countDownTimer(0)); // prints "Happy New Year!"
console.log(countDownTimer(1)); // returns a function
console.log(countDownTimer(2)); // returns a function
console.log(countDownTimer(3));
