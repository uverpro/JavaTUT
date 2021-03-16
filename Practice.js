function keyInObjectArray(objArray, keyString) {
    for (let i = 0; i < objArray.length; i++)
    console.log(objArray[i])
};

  let objArray = [
    { name: "Rupert" },
    { age: 42 },
    { planet: "Earth", system: "Milky Way" }
  ];

keyInObjectArray(objArray, 'planet'); // => true
//   console.log(keyInObjectArray(objArray, 'age')); // => true
//   console.log(keyInObjectArray(objArray, 'food')); // => false
//   console.log(keyInObjectArray(objArray, 'animal')); // => false
