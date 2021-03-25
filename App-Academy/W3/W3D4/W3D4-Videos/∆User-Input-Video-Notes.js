const readline = require("readline");
// console.log(readline)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name?', (answer)=> {
    console.log(`Hello, ${answer}`)
});

rl.question("What do you think of Node?", (answer)=> {
    console.log(`I couldn't agree more that ${answer}`)
});
