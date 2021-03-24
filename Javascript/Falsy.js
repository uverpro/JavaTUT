// Falsy
// A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

// JavaScript uses type conversion to coerce any value to a Boolean in contexts that require it, such as conditionals and loops.

// Complete list of JavaScript falsy values

// false	The keyword false.
// 0	The Number zero (so, also 0.0, etc., and 0x0).
// -0	The Number negative zero (so, also -0.0, etc., and -0x0).
// 0n, -0n	The BigInt zero and negative zero (so, also 0x0n/-0x0n).
// "", '', ``	Empty string value.
// null	null — the absence of any value.
// undefined	undefined — the primitive value.
// NaN	NaN — not a number.
// document.all	Objects are falsy if and only if they have the [[IsHTMLDDA]] internal slot.
// That slot only exists in document.all and cannot be set using JavaScript.
// Examples
// Examples of falsy values in JavaScript (which are coerced to false in Boolean contexts, and thus bypass the if block):

if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
// The logical AND operator, &&
// If the first object is falsy, it returns that object

false && "dog"
// ↪ false

0 && "dog"
// ↪ 0
