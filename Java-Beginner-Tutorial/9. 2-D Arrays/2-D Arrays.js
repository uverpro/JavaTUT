// 2D ARRAYS
// is a NESTED ARRAY

// let array = [
//     ["a", "b"],
//     ["c", "d", "e"]
// ];

// console.log(array); // [ [ 'a', 'b' ], [ 'c', 'd', 'e' ] ]
// console.log(array[0]); // [ 'a', 'b' ]
// console.log(array[1]); // [ 'c', 'd', 'e' ]

// let subArray = array[1];
// console.log(subArray); // [ 'c', 'd', 'e' ]

// console.log(subArray[2]); // e  >===\
// //                                    >-- UNDERSTAND BOTH OF THESE METHODS
// console.log(array[1][2]); // e  >===/



let array = [
    ["a", "b"],
    ["c", "d", "e"]
    ["f", "g", "h"]
];

for (let i = 0; i < array.length; i++) {
let subArray = array[i];
    for (let j = 0; j < subArray; j++) {
        console.log(subArray[j]);
    }
}
