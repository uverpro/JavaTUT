let print2d = function (array) {
    for (let i = 0; i < array.length; i++) {
        let subArray = array[i];
        // console.log(a);
        for (let j = 0; j < a.length; j++) {
            let char = array[j];
            console.log(subArray[char])
        }
    }
};

let array1 = [
    ["a", "b", "c", "d"],
    ["e", "f"],
    ["g", "h", "i"],
  ];
  print2d(array1);
  // prints
  //  a
  //  b
  //  c
  //  d
  //  e
  //  f
  //  g
  //  h
  //  i

  let array2 = [[9, 3, 4], [11], [42, 100]];
  print2d(array2);
  // prints
  //  9
  //  3
  //  4
  //  11
  //  42
  //  100
