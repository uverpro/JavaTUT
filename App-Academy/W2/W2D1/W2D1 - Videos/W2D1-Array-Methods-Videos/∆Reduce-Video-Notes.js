// Array#reduce

// In reduce, the first argument is the "accumulator", not the element.

let nums = [3, 7, 5, 9];

let sum = nums.reduce(function (accum, num, i, array) {
    return accum + num;
}); // }, 100); <= THIS WILL ASSIGN THE DEFAULT VALUE OF ACCUM TO "100" => // 124
// Otherwise, the default value of ACCUM is the value of the first index
console.log(sum); // 24
// accum = 3
// el = 7
// accum = 10
// el = 5
// accum = 15
// el = 9
// accum = 24

let sum3 = nums.reduce(function (accum, num, i, array) {
    if (num % 3 === 0) {
        return accum + num;
    } else {
        return accum;
    }
});

console.log(sum3); // 12

let sumAt100 = nums.reduce(function (accum, num) {
    return accum + num;
}, 100);

console.log(sumAt100);



/*
    Write a function called returnNames that
    intakes an array of names and
    returns a string of "Names: "
    with all of the names attached after. Must use the .reduce()
*/

let returnNames = function (names) {
    return names.reduce(function (accum, name) {
        return accum + ' ' + name;
    }, 'Names:');
};

console.log(returnNames(['Cory']));
