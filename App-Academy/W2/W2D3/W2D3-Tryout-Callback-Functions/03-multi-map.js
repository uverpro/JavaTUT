/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/

let multiply = function (val, n) {
  return val * n;
}

let multiMap = function (val, n, cb) {
  for (let i = 0; i < n; i++) {
    val = cb(val);
  }
  return val;
};

let result1 = multiMap(10, 8, function(n) {
  return n * 10;
});
console.log(result1);

/*********************************************/

let multiply = function (val) {
  return val * 10;
}

let multiMap = function (val, n, cb) {
  for (let i = 0; i < n; i++) {
    val = cb(val);
  }
  return val;
};

let result1 = multiMap(10, 8, multiply)
console.log(result1);
