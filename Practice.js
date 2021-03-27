function dynamicRotate(num) {
  return (arr) => {
  if (!num) return arr;

  for (let i = 0; i < Math.abs(num); i++) {
  num > 0 ? arr.unshift(arr.pop()) : arr.push(arr.shift());
  }
  };
  }

  let arr = ["a", "b", "c", "d", "e"];
  rotateRightTwo = dynamicRotate(2);
  rotateRightTwo(arr);
  console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

  let animals = ["wombat", "koala", "opossum", "kangaroo"];
  rotateLeftOne = dynamicRotate(-1);
  rotateLeftOne(animals);
  console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
