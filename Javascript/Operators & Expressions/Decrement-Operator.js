// The decrement operator (--) decrements (subtracts one from) its operand and returns a value.

let x = 3;
const y = x--;

console.log(`x:${x}, y:${y}`);
// expected output: "x:2, y:3"

let a = 3;
const b = --a;

console.log(`a:${a}, b:${b}`);
// expected output: "a:2, b:2"

// If used postfix, with operator after operand (for example, x--), the decrement operator decrements
// and returns the value before decrementing.

// If used prefix, with operator before operand (for example, --x), the decrement operator decrements
// and returns the value after decrementing.
