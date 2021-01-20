

let noE = function (words) {
  let val = words.indexOf("e");
  // let val2 = word.indexOf("E");
  if (val === -1) { // && val2 === -1)
  return true;
} else {
  return false;
  }
};

let removeEWords = function (sentence) {
  let words = sentence.split(" ");
//   let result = "";
//   for (let i = 0; i < words.length; i++) {
//     if (hasE(word) {
//       // do nothing
//   } else {
//     result += word;
//   }
//   return result;
};

let result = words.filter(noE);
console.log(result('What time is it everyone?'));

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
