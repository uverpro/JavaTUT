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
// RECURSIVE CASE:
// -

// 1 step:
// RECURSIVE STEP:
// -

// Defintion of recursion: A function calling/causing itself to be reinvoked

// For a recursive function to be safe to run it must have a base case
// (else there's an infinite loop)
// To find a base case, ask, "where does the function stop?"
// Where are we stopping it from recalling?
// Line 5 is base case

// Recursive case is usually the opposite of the base case
