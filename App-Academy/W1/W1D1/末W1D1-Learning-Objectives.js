// Problem Solving Learning Objectives

// 1. Craft a clear, concise coding question to a more experienced developer
// 2. Research unknown JavaScript code syntax using MDN
// 3. Identify and fix a bug in code based on an error message

function arrayToUpperCase (array) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (typeof element === 'string') { // you need "if (typeof element === 'string')"
        let upperCased = element.toUpperCase();
        array.splice(i, 1, upperCased);
      }
    }
    return array;
  };

  const foods = ['banana', 'taco', 'cookie'];
  console.log(arrayToUpperCase(foods));

// TYPEOF
