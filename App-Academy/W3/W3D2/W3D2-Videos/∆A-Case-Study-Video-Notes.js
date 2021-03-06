// RECURSION: A CASE STUDY

function countdown (num) {
    if (num ===0) {
        return;
    }

    console.log(num);
    countdown(num - 1);

}

countdown(5);

// 2 cases:
// BASE CASE: The situation in which the function stops recursing
// - num === 0;
// RECURSIVE CASE: Where causes our function to keep recursing
// - num > 0;

// 1 step:
// RECURSIVE STEP: what we use to work towards our base case
// - num - 1;

// Defintion of recursion: A function calling/causing itself to be reinvoked

// For a recursive function to be safe to run it must have a base case
// (else there's an infinite loop)
// To find a base case, ask, "where does the function stop?"
// Where are we stopping it from recalling?
// Line 4 is base case

// Recursive case is usually the opposite of the base case
// The num being greater than 0 is the recursive case

// Recursive step: we don't want an infinite loop. We want something to work us towards
// our base case. To that, we need a recursive step
