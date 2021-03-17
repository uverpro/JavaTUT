function myMap(array, cb) {
    let mapped = [];
    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        mapped.push(cb(ele));
    }
    return mapped;
}

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!'; });

console.log(result2);
