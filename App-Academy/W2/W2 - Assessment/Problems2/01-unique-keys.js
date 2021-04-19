/***********************************************************************
Write a function  `uniqueKeys` that accepts two objects and returns an array of
keys that are present in the first object but not in both objects.
***********************************************************************/

function uniqueKeys(obj1, obj2) {
    let k1 = Object.keys(obj1);
    return k1.filter(function(x) {
        return obj2[x] === undefined;
    });
};

const cat = { legs: 4, favoriteFood: 'catnip', cuteness: 100, sound: 'meow'};
const human = { legs: 4, favoriteFood: 'sushi', money: 0};
console.log(uniqueKeys(cat, human)); // ['cuteness', 'sound']

const guitar = { strings: 4, volume: 11, color: 'blue' };
const drums = { volume: 8, color: 'red' };
uniqueKeys(guitar, drums); // ['strings']
