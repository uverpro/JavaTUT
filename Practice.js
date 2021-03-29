function printNumbersBetween(startNum, endNum) {


  console.log(startNum);
  if (startNum = endNum) {
    return startNum;
  }
  if (startNum < endNum) {
    startNum - 1;
  } else {
    startNum + 1;
  }
return printNumbersBetween(startNum, endNum);
}

printNumbersBetween(5, 10);
// 5
// 6
// 7
// 8
// 9
// 10

// printNumbersBetween(2, -2);
// // 2
// // 1
// // 0
// // -1
// // -2
