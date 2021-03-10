let reverseString = function (str) {
	let mutant = str.split(" ");
    console.log(mutant);
  	let reverse = mutant.reverse();
    console.log(reverse);
  	return reverse.toString(" ");
};



console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'


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
