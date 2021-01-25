// The typeof operator returns a string indicating the type of the unevaluated operand.

console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"

console.log(typeof [1, 2]);
// expected output: "object"

console.log(typeof NaN);
// expected output: "number"
