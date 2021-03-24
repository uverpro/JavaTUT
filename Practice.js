// On (02)Sum Array, why isn't the return a "zero" rather than being zero being added to the sum

// On Range, why doesn't the array stop one numbers short of end

function sumToN(n, end) {
  if (n = end) return n; // BASE CASE // n === 0, RECURSIVE CASE

  return n + sumToN(n + 1, end); // RECURSIVE STEP
}

console.log(sumToN(1, 5)); // returns 15


// index.js
#element {
  font-size: 10px;
  color: green;
  transition-property: color;
  transition-duration: 5s;
}

#element:hover {
  font-size: 30px;
  color: red;
}
