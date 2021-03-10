let halfLength = function (str) {
    for (let i = 0; i < str.length / 2; i++) {
        console.log(i);
    }
    // return str.length / 2
};

let string = "eeeeeeeeeeeeeeeeeeeeeeeeeeewwwwwwwwwwwwwwwwwwwwwwwyyyyyyyyyyyeeeeeeeeeeeeeeaaaaaaaaaaaaa"

console.log(halfLength(string));

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
