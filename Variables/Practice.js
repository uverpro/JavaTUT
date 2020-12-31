// const str = "To be, or not to be, that is the question.";
// let count = 0;
// // let position = str.indexOf("e");

// for (i = 0; i < str.length; i++) {
// console.log(str.indexOf(i));
//     //         let e = str[i];
// //     if (e === "e") {
// //         count += e;
// //     }
// // }

// // console.log(count);

function howManyEs (str) {
let count = 0;
for (i = 0; i < str.length; i++)
    if (str[i] === "e") {
        count += 1;
    }
    return count;
}
// {
//     let e = str[i]
//     if (e === "e") {
//     count++
//     }
//     return count
// }

console.log(howManyEs("To be, or not to be, that is the question."));
