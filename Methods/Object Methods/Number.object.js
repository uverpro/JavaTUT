// Number() constructor
// The Number() constructor creates a Number object.

// Syntax
new Number(value)
// Parameters: value: the numeric value of the object being created.

// Creating Number objects
const a = new Number('123'); // a === 123 is false
const b = Number('123');     // b === 123 is true
a instanceof Number;         // is true
b instanceof Number;         // is false
