// Breaking down the filter method

let veggies = ['lettuce', 'celery', 'cabbage', 'carrot'];

let result1 = veggies.filter(function(ele) {
    return ele.includes('a'); // [ 'cabbage', 'carrot' ]
});

// filter returns a new array which passes on a Boolean.
// That's how it chooses which elements to include

console.log(result1);



let veggies = ['lettuce', 'celery', 'cabbage', 'carrot'];

let myFilter = function (array, cb) {
    let selectedItems = [];
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i], i, array) === true) {
            selectedItems.push(array[i]);
        }
    }
    return selectedItems;
};

let result2 = myFilter(veggies, function (element) {
    return element.includes('a');
});
console.log(result2); // [ 'cabbage', 'carrot' ]



let veggies = ['lettuce', 'celery', 'cabbage', 'carrot'];

let myFilter = function (array, cb) {
    let selectedItems = [];
    array.forEach(function(el, index) {
    if (cb(el, index, array) === true) {
            selectedItems.push(array[i]);
        }
    });
    return selectedItems;
};

let result2 = myFilter(veggies, function (element) {
    return element.includes('a');
});
console.log(result2); // [ 'cabbage', 'carrot' ]
