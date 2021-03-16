let arr1 = [1, 2, 3];
let arr2 = [7, 8, 9];

for (let i = 0; i < 4; i++) {
  for (let j = 2; j < arr2.length; j++) {
    console.log(arr1[i]);
    console.log(arr2[j]);
  }
  console.log('break');
}
