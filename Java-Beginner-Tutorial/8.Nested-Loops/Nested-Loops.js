// NESTED LOOPS

/*
for (let i = 1; i <= 5; i++) {
    console.log(i) // 1, 2, 3, 4, 5
};
*/

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(i, j);
//     1 1, 1 2, 1 3, // first iteration of i (outer loop)
//     2 1, 2 2, 2 3, // second
//     3 1, 3 2, 3 3, // third
//     4 1, 4 2, 4 3, // fourth
//     5 1, 5 2, 5 3 // fifth
//     }
// };

for (let i = 1; i <= 5; i++) {
    console.log(i)
    console.log("   beginning inner loop")
    for (let j = 1; j <= 3; j++) {
        console.log(" ", j);
    }
    console.log("   finishing inner loop")
};
