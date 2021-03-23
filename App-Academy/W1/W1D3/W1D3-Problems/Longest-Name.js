// Longest Name - Debugging (*)
// The function `longestName() takes an array of names and returns the longest.
// If there's a tie, it returns the first name of the longest length.
// However, this implementation is full of bugs!
// Use your debugging skills to find and fix those bugs.

// What I wrote:
// function longestName(names) {
//     let longestName = "";
//     for (i = 0; i < names.length; i++)
//     // console.log(names[i].length) // will return the individual strings
//     if (names[i].length > longestName.length) {
//         longestName = names[i];
//     }
//     return longestName
// };

// testNames = ["James", "Patricia", "Michael", "Elizabeth", "Christopher",
//              "Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
//              "Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]

// // longestName(testNames);
// console.log(longestName(testNames)); // "Christopher"


// The exercise:
function longestName(names) {
    console.log("Start")
    // Set the first name to be the longest
    let currentLongest = names[1];
    console.log(names.length)
    // Check each other name in the array starting from the second
    for (let i = 2 ; i < names.length ; i++) {
        console.log(names[i])
        // If the name we're checking is longer than our
        // current longest, set that name to be the new longest
        if (names[i].length > currentLongest.length) {
            currentLongest = names[i];
        }

    }
    console.log("End")
    return currentLongest;
}

testNames = ["James", "Patricia", "Michael", "Elizabeth", "Christopher",
             "Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
             "Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]

console.log(longestName(testNames)); // "Christopher"
