const readline = require("readline");
// console.log(readline)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name?', (answer)=> {
    console.log(`Hello, ${answer}`)
    // rl.close();
    // console.log("after the question") this works
    rl.question('Where how you from?', (answer)=> {
            console.log(`${answer} is a beautiful place.`)
            rl.close();
        });
});

// CB CHAIN:
    // console.log("after the question") because rl is asynch, it will print before the answer

// rl.question('Where how you from?', (answer)=> {
//     console.log(`${answer} is a beautiful place.`)
//     rl.close();
// });
    // This will not be asked in order b/c it's the same interface
    // You need to include this question in the same callback
