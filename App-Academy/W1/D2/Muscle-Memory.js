function sayHello (name) {
    let msg = "Hello, " + name + ". How are you?";
    return msg;
  };
console.log(sayHello("world"));


function nonsense (jargon) {
    return jargon + " hibbadeehoopla";
};
console.log(nonsense("HERR"));


function aTen (num1, num2) {
    return num1 + num2;
};
console.log(aTen(5, 50));


function message(positive) {
    return positive + " DO ET";
};
console.log(message("YOU CAN"));


function MAC (MAC) {
    return MAC + " GET TO THE CHOPPA!!!";
};
console.log(MAC("MAC"));


function isEven(num) {
    return num % 2 === 0;
};
console.log(isEven(45));


function divisibleByThree (num) {
    return num % 3 === 0;
};
console.log(divisibleByThree(33));


function list(var1, var2, var3) {
    return var1 + var2 + var3 + " is a list"
};
console.log(list("eggs ", "bacon ", "grease"))


function dearDiary (statement) {
    return "Today I " + statement;
};
console.log(dearDiary("wrote code."));


function HERP (DERP) {
    if (DERP === "HERP") {
        return "HERP A DEE DERP";
    }
};
console.log(HERP("HERP"));
