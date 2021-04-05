/******************************************************************************
  #01 - Identify and generate valid JSON-formatted strings
 ******************************************************************************/
// let array = [1, 'hello, "world"', 3.14, { id: 17 }];
// let jsonArray = JSON.stringify(array);
// console.log(jsonArray); // '[1, "hello, \"world\"", 3.14, {"id":17}]'

// CANNOT DO
// jsonArray.forEach(el => console.log(el))

/******************************************************************************
  #02 - Use JSON.parse to deserialize JSON-formatted strings
 ******************************************************************************/
// let jsonArray = '[1, "hello, \\"world\\"", 3.14, { "id": 17 }]';
// // console.log(jsonArray);
// let deserializedArray = JSON.parse(jsonArray);
// console.log(deserializedArray);

// // CAN DO
// deserializedArray.forEach((el) => console.log(el));

/******************************************************************************
  #03 - Use JSON.stringify to serialize JavaScript objects
 ******************************************************************************/
// main difference between objects in JS vs JSON is that keys in JSON
// must be surrounded by escaped quotation marks

// let object = { name: "sergey", age: 15 };
// let json = JSON.stringify(object);
// console.log(json); // "{ \"name\": \"sergey\", \"age\": 15 }"

// let json = "{ \"name\": \"sergey\", \"age\": 15 }"
// let object = JSON.parse(json);
// console.log(object); // { name: 'sergey', age: 15 }

document.addEventListener('DOMContentLoaded', () => {
/***************************************************************************
#02 - Construct JavaScript to add, modify, and remove data in localStorage using the Web Storage API.
**************************************************************************/
// storing items in local storage
let key = 'TAs';
let value = ['Dillon', 'Kristen', 'Michael', 'Senyo'];
// must serialize value before storing in local storage
let serializedValue = JSON.stringify(value);
sessionStorage.setItem(key, serializedValue);

// not going to work
// console.log(JSON.parse("<h2>gobeldygoop</h2>"));

/***************************************************************************
#03 - Add, modify, and remove data in localStorage with key-value pairs
**************************************************************************/
// retrieving items from local storage
let instructors = sessionStorage.getItem(key); // ["Dillon", "Kristen", "Michael", "Senyo"];
console.log('instructors : ', instructors);
console.log('typeof instructors: ', typeof instructors); // string

// deserializing values retrieved from local storage
let deserializedInstructors = JSON.parse(instructors);
console.log('deserializedInstructors: ', deserializedInstructors);
console.log(
'typeof deserializedInstructors: ',
typeof deserializedInstructors
); // object

let val = sessionStorage.getItem('banana');
console.log(val); // null

// this wont work because instructors is JSON str not a JS obj
// instructors.forEach((ta) => console.log(ta));

// this will work because deserializedInstructors is now a JS obj
// deserializedInstructors.forEach((ta) => console.log(ta));
});
