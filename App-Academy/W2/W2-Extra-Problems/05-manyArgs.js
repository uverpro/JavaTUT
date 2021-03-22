/***********************************************************************
Write a function, 'manyArgs' that accepts an arbitrary number of arguments!
What does this mean? Well sometimes your function could be given 20 arguments,
sometimes it could be given 1. Each argument will be a number. Your function
should return an integer representing every argument multiplied together.


Assumption:
Your function will always be passed at LEAST one argument.


Examples:

manyArgs(1, 2, 3, 4, 5, 6, 7) // 5040
manyArgs(1, 2, 5, 6, 7) // 420
manyArgs(1, 2, 5, 6) // 60




***********************************************************************/

// const manyArgs = (num1, ...otherNums) => {
//     let sum = num1;
//     otherNums.forEach(num => {
//         sum *= num;
//     })
//     return sum;
// }

let manyArgs = (...arg1) => arg1.reduce((accum, ele) => accum * ele);
//Define a function many args
//Pass in a parameter using rest parameters
//Set the arg1 as a reduce function
//Set parameters as accum (sum) and ele (iterations after accum)
//Inside the function of reduce we set a fat function that returns an accumulator of every iteration of ele using multiplication

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = manyArgs;
} catch (e) {
    module.exports = null;
}