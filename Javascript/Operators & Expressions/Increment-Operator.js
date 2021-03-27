// The increment operator (++) increments (adds one to) its operand and returns a value.

let x = 3;
const y = x++;

console.log(`x:${x}, y;${y}`);
console.log("x:" + x + ", y:" + y);
// expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
console.log("a:" + a + ", b:" + b);
// expected output: "a:4, b:4"

// If used postfix, with operator after operand (for example, x++),
// the increment operator increments and returns the value before incrementing.
// If used prefix, with operator before operand (for example, ++x),
// the increment operator increments and returns the value after incrementing.

// count++ is post increment where ++count is pre increment.
// suppose you write count++ means value increase after execute this statement.
// but in case ++count value will increase while executing this line.
