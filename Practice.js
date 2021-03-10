let longestName = function (array) {
    let longestName = array[0];
    for (let i = 0; i < array.length; i++) {
        let currentName = array[i];
        if (currentName.length > longestName.length) {
            longestName = currentName;
        }
    }
    return longestName;
};

testNames = ["James", "Patricia", "Michael", "Elizabeth", "Christopher",
             "Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
             "Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]

console.log(longestName(testNames)); // "Christopher"










// // 8. Define a function that takes in an array of elements
// // and returns a 2d array where the subarrays represent unique pairs of elements

// let pairPrint = function (array) {
//     let pairedArrays = [];
//     let pairs = [];
//     for (let i = 0; i < array.length; i++) {
//         let a = array[i];
//         for (let j = i + 1; j < array.length; j++) {
//             let b = array[j];
//             pairs.push(a, b);
//         }
//     }
//     return pairedArrays.push(pairs);
// };

// console.log(pairPrint(["artichoke", "broccoli", "carrot", "daikon"]));
// // prints
// //  artichoke - broccoli
// //  artichoke - carrot
// //  artichoke - daikon
// //  broccoli - carrot
// //  broccoli - daikon
// //  carrot - daikon

// console.log(pairPrint(["apple", "banana", "clementine"]));
// // prints
// //  apple - banana
// //  apple - clementine
// //  banana - clementine
