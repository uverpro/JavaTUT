console.log('marker'[0]); // m
console.log('marker'[1]); // a
console.log('marker'[2]); // r
console.log('marker'[3]); // k
console.log('marker'[4]); // e
console.log('marker'[5]); // r

console.log('marker'[0 + 0]); // m
console.log('marker'[0 + 1]); // a
console.log('marker'[1 + 1]); // r
console.log('marker'[1 + 2]); // k
console.log('marker'[2 + 2]); // e
console.log('marker'[3 + 2]); // r

let str = "mackys";
console.log(str[5]); // s
console.log(str[6]); // undefined
console.log(str[-1]); // undefined
console.log([str.length - 1]); // [ 5 ]
console.log(str[str.length - 1]) // s
