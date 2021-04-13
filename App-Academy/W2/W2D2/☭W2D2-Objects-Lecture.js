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
obj.name = "Cory";
obj['age'] = 7000
obj.name = "Gandolf";

console.log(obj); // { name: 'Gandalf', age: 7000 }
console.log(obj.name); // Gandalf
console.log(obj.location); // undefined
console.log(obj.age); // 7000

let location = "Middle Earth"
obj[location] = true;
console.log(obj); // { name: 'Gandolf', age: 7000, 'Middle Earth': true }
let newKey = "location";
obj["location"] = "Middle Earth";
console.log(obj); // { name: 'Gandolf', age: 7000, 'Middle Earth': true, location: 'Middle Earth'}



let story = {
    beginning: 'Once upon a time...',
    end: 'And they lived happily ever after'
};

let makeAStory = function() {
    if (story.middle === undefined) {
        story.middle = "drama";
        console.log('added middle');
    } else {
        console.log('story complete');
    }
};

makeAStory(); // "added middle" - if conditional is true, now object is changed
makeAStory(); // "story complete"



let arrUser = ['Cory', 35, 'Coder', 'CT'];

let user = {
    name: 'Cory',
    age: 35,
    job: 'Coder',
    address: 'CT'
}

console.log(user.age); // 35



let Biff = {
    type: 'dog',
    age: 10,
};

let Buster = Biff;
Buster.age = 0;

console.log(Biff, Buster); // { type: 'dog', age: 0 } { type: 'dog', age: 0 }
