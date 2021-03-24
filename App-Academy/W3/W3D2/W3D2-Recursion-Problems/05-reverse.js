/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.
***********************************************************************/

const reverse = str => {
    if (!str.length) {
        return str; // or "";
    }
    let reversed = str.slice(-1) + reverse(str.slice(0, -1));
    return reversed;
};

console.log(reverse("house")); // "esuoh"
// reverse("dog"); // "god"
// reverse("atom"); // "mota"
// reverse("q"); // "q"
// reverse("id"); // "di"
// reverse(""); // ""

// Input: String.
// Output: Reverse string.

// BASE CASE - empty string
// RECURSIVE CASE - letters exist
// RECURSIVE STEP - approach base case

// by removing one letter from end at a time
// string method - slice
// turn string into array - pop()
