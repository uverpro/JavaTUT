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

let result = myFilter(veggies, function (element) {

})
