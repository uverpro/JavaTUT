// The Object Type:

/*  + An unordered collection of key-value pairs
    + Affectionately known by the industry jargon:
    + POJO: Plain Old Javascript Object */


// Things to know about Objects:

/*  1. Used to store multiple key value pairs
        + keys are strings and unique
        + values can be anything (string, other objects, etc.)

    2. ORDER IS NOT GUARANTEED    */



    // let testObject = {};
    // testObject["num"] = 10; <== Bracket Notation
    // testObject.num2 = 20; <== Dot Notation

//            KEY        VALUE
//        |           testObject    |
//        |  "num" |   10           |
//        | "num2" |   20           |
//        |        |   undefined    |

// KEYS WITHOUT ASSIGNED VALUE === undefined
// testObject[0] !== undefined <== FALSE. Will check to see if there is value in a key
// Key [0] doesn't exist

// Bracket notation allows use to use variables as keys!
// let obj = {};
// let string = "apple";
// obj[string] = "yay!";



// Examples
let obj = {};
obj.name = "Mylo";
obj['age'] = 7000
obj.name = "Gandolf";

console.log(obj); // { name: 'Gandalf', age: 7000 }
console.log(obj.name); // Gandalf
console.log(obj.location); // undefined
console.log(obj.age); // 7000
