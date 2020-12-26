//Snippet 1
console.log("hello");

for (let i = 0; i < 5; i++) {
    console.log("code");
}

console.log("goodbye");
// hello, code, code, code, code, code, goodbye



//Snippet 2
console.log("Hi");

for (let i = 3; i <= 7; i++) {
    console.log("program");
    console.log(i);
}

console.log("Bye");
// Hi, program, 3, program, 4, program, 5, program, 6, program, 7, Bye



//Snippet 3
let foo = function () {
    for (let num = 10; num > 0; num -= 2) {
        console.log(num);
    }
};

console.log("begin");
foo();
console.log("end");
foo();
// begin, 10, 8, 6, 4, 2, end, 10, 8, 6, 4, 2



//Snippet 4
let word = "street";
for (let i = 0; i < word.length; i++) {
    console.log(i);
    console.log(word[i]);
}
// 0, s, 1, t, 2, r, 3, e, 4, e, 5, t



//Snippet 5
let total = 0;
for (let i = 1; i < 5; i++) {
    total += i;
    console.log(total);
}

console.log("grand total; " + total);
// 1, 3, 6, 10 grand total; 10
