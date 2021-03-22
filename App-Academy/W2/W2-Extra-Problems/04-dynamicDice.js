/***********************************************************************
It's the weekend, and you're hanging out with your friends. Your friends decide
to play a game of dungeons and dragons. You are chosen to be the Game Master, it
is up to you to keep track of their dice rolls. You decide to write a
function, 'dynamicDice(sides)'. The 'dynamicDice' function should return a 'NEW FUNCTION',
that accepts a number representing the total rolls you get multiplied by the sides of the dice
from the first function. The returned function should return the maximum number you can get
based on the sides of the dice, and the amount of rolls you are allotted.
For example if you have a 20 sided die, and can only roll it once, the highest number
you can get is 20.

Assumptions:
You can be given the following dice types
20 sided, 12 sided, 10 sided, 8 sided, 6 sided, and 4 sided.

Examples:

const newDice = dynamicDice(20); // returns a function
newDice(5); // 100

const newDice2 = dynamicDice(10); // returns a function
newDice2(5); // 50

const newDice3 = dynamicDice(12); // returns a function
newDice3(2); // 24


***********************************************************************/
//Declaring dynamic newDice and taking in the number of sides of a dice
const dynamicDice = function (sides) {
  // Returning a new function (closure) that takes in a new dice
  return function newDice(rolls) {
    //Return the possible max value
    return (sides * rolls);
  }
}

// let dynamicDice = sides => (rolls) => sides * rolls;
//Define a dynamicDice function 
//Define sides as the parameter, sides is now equal to how many sides is on the dice;
//Defining rolls as a function with a parameter with rolls by using paranthesis
//Using the rolls function we multiply the number of rolls, which then returns the total of sides and rolls


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicDice;
} catch {
  module.exports = null;
}