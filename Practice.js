function sumToN(n) {
  if (n < 0) return null;
  if (n <= 1) return n;

  return n + sumToN(n - 1);
}

console.log(sumToN(5)); // returns 15
console.log(sumToN(1));  // returns 1
console.log(sumToN(9));  // returns 45
console.log(sumToN(-8));  // returns null
