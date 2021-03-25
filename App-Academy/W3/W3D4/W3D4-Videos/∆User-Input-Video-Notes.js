const readline = require("readline");
// console.log(readline)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('What is your name?', (answer)=> {
//     console.log(`Hello, ${answer}`)
//     // rl.close();
//     // console.log("after the question") this works
//     rl.question('Where how you from?', (answer)=> {
//             console.log(`${answer} is a beautiful place.`)

//             rl.question("How are you?", thirdAnswer);

//                 rl.question('How did you get here?', handleFourthQuestion); // (answer)=> {
//         //         console.log(`${answer}? Well, glad you found me.`)
//         //         rl.close();
//         // });
//     });
// }); // CB HELL

// CB CHAIN:
    // console.log("after the question") because rl is asynch, it will print before the answer

// rl.question('Where how you from?', (answer)=> {
//     console.log(`${answer} is a beautiful place.`)
//     rl.close();
// });
    // This will not be asked in order b/c it's the same interface
    // You need to include this question in the same callback


const firstQuestion = (answer) => {
    console.log(`Hello, ${answer}`);
    rl.question("Where are you from?", secondAnswer);
}

const secondAnswer = (answer) => {
    console.log(`${answer} is a beautiful place.`)
    rl.question("How are you today?", thirdQuestion);
}

const thirdQuestion = (answer) => {
    console.log(`${answer}? That's interesting...`)
    rl.question("How did you get here?", fourthQuestion)
}

const fourthQuestion = (answer) => {
    console.log(`${answer}? Well, glad you found me.`)
    rl.close();
}

rl.question("What is your name?", firstQuestion);
