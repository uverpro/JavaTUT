/***********************************************************************

Write a function  `uniqueKeys` that accepts two objects and returns an array of
keys that are present in the first object but not in both objects.

Examples:

const cat = { legs: 4, favoriteFood: 'catnip', cuteness: 100, sound: 'meow'};
const human = { legs: 4, favoriteFood: 'sushi', money: 0};
uniqueKeys(cat, human); // ['cuteness', 'sound']

const guitar = { strings: 4, volume: 11, color: 'blue' };
const drums = { volume: 8, color: 'red' };
uniqueKeys(guitar, drums); // ['strings']
***********************************************************************/

function uniqueKeys(obj1, obj2) {
    let nuArray = [];
    for (let key in obj1 && obj2)
    console.log(key)
    if (obj1 [key] === obj2 [key]) {

    nuArray.push(obj1 [key]);
}
    return nuArray;
}

const cat = { legs: 4, favoriteFood: 'catnip', cuteness: 100, sound: 'meow'};
const human = { legs: 4, favoriteFood: 'sushi', money: 0};
console.log(uniqueKeys(cat, human)); // ['cuteness', 'sound']

const guitar = { strings: 4, volume: 11, color: 'blue' };
const drums = { volume: 8, color: 'red' };
uniqueKeys(guitar, drums); // ['strings']

// /**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// module.exports = uniqueKeys;
