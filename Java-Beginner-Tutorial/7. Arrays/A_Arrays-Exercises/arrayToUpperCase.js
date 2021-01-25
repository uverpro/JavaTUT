// Take an existing array and capitalize any strings within the array

const foods = [0, "banana", 2, "apple", 4, "strawberry"];

function arrayToUpperCase (array) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (typeof element === 'string') {
        let upperCased = element.toUpperCase();
        array.splice(i, 1, upperCased);
      }
    }
    return array;
  };

console.log(arrayToUpperCase(foods));
