let myIndexOf = function(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (el === target) {
            return i;
        }
    }
    return -1;
};

console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1

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
