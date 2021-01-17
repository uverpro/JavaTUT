// The splice() method changes the contents of an array by removing or replacing existing elements
// and/or adding new elements in place.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]



let array2 = ["True", "Blue", "Vogue", "Borderline"];
array2.splice(2, 0, "Lucky Star")
console.log(array2); // ["True", "Blue", "Lucky Star", "Vogue", "Borderline"]
array2.splice(2, 3);
console.log(array2); // [ 'True', 'Blue' ]
array2.splice(2, 0, "Wrap", "You", "Up");
console.log(array2); // [ 'True', 'Blue', 'Wrap', 'You', 'Up' ]
array2.splice(5, 0, "Borderline")
console.log(array2); // [ 'True', 'Blue', 'Wrap', 'You', 'Up', 'Borderline' ]
array2.splice(2, 3, "Holiday");
console.log(array2); // [ 'True', 'Blue', 'Holiday', 'Borderline' ]
