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
console.log(43 > 42) // true
console.log(43 < 42) // false
