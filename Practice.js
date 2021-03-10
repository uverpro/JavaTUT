let countVowels = function(word) {
    let counter = 0;
    let vowels = ["a", "e", "i", "o" ,"u"]
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (letter === vowels) {
            counter += 1;
        }
    }
    return counter;
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2

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
