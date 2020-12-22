// Variables allow you to assign a value

let color = "green"; // let keyword. "=" assighnemt operator.
console.log(color); // green
console.log(color + "!"); // green!

let number = 85;
console.log(number); // 85
console.log(number + 1); // 86
console.log(number); // 85
// +=, -=, *=, /=
number = number + 1;
console.log(number); // 86
number += 1;
console.log(number); // 87
number += 12;
console.log(number); // 99
number -= 9;
console.log(number); // 90
number *= 10;
console.log(number); // 900
number /= 9;
console.log(number); // 100

let i = 0;
console.log(i);
i++; // i += 1
console.log(i);

let x = 0;
console.log(x); // 0
x--;
console.log(x); // -1

let y;
console.log(y); // undefined

// undefined is the default value in Javascript
// don't reuse "let" when reassigning a value

let name = "LeeRoy";
// console.log(nam); // reference error because "nam" isn't even defined. Not part of the code.

let isEven = 50 % 2 === 0;
console.log(isEven); // true
isEven = 51 % 2 === 0;
console.log(isEven); // false
