console.log(true); // true
console.log(false); // false
console.log(!true); // false
console.log(!!true); // true
console.log(!false); // true
console.log(!!false); // false

console.log(false && false); // false
console.log(false && true); // false
console.log(true && false); // false
console.log(true && true); // true

console.log(false || false); // false
console.log(false || true); // true
console.log(true || false); // true
console.log(true || true); // true

console.log(true && !false); // true
console.log(true || !false); // true

// && operation takes precedent over || operation
console.log(false && false || true); // true
console.log(false && (false || true)); // false

// check for equality (===)
// not equal to (!==)
console.log(42 === 42); // true
console.log(43 === 42); // false
console.log(43 !== 42) // true
console.log(43 > 42); // true
console.log(43 < 42); // false
console.log(43 >= 42); // true
console.log(43 <= 42); // false
console.log(43 >= 43); // true
console.log(43 <= 43); // true

console.log('apple' === 'apple') // true
console.log('apple' === 'Apple') // false

// > or < in Strings measure the order of characters in alphabetical order
console.log('cat' < 'dog') // true
console.log('cat' < 'cats') // true
console.log('cat' < 'apple') // false

// === "strict" equality
// == "loose" equality
console.log()
