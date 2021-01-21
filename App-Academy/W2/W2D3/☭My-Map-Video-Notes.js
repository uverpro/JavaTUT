// My Map Callback

let peeps = ["Kafa", "Cindy", "Jon", "Paloma"];

// let newPeeps = peeps.map(function(el){
//     return el.toUpperCase() + "!!!!";
// });

// console.log(newPeeps); // [ 'KAFA!!!!', 'CINDY!!!!', 'JON!!!!', 'PALOMA!!!!' ]

let myMap = function (array, cb) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        let res = cb(el, i, array);
        newArray.push(res);
    }
    return newArray;
};

let newPeeps = myMap(peeps, function(el){
    return el.toUpperCase() + "!!!!";
});

console.log(newPeeps);



let nuMap = function (array, cb) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        let res = cb(el, i, array);
        newArray.push(res);
    }
    return newArray;
};

let res = nuMap([4, 9, 81, 25], function (n) {
    return 2 * n;
});

let squared = nuMap([4, 9, 81, 25], Math.sqrt);

console.log(res);
console.log(squared);
