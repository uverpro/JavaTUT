// for...in

/* The for...in statement iterates over all enumerable properties of an object
that are keyed by strings (ignoring ones keyed by Symbols),
including inherited enumerable properties. */

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

let monsters = {'Canada': 'Sasquatch', 'Nepal': 'Yeti', 'Scotland': 'Loch Ness Monster'};
let pets = ["Crom", "Ren", "Toby", "Ivan"];

console.log(monsters);
for (let prop in monsters) {
    console.log(prop);
    console.log(monsters[prop]);
    console.log("In", prop, "we have the", monsters[prop]);
};

for (let property in pets) {
    console.log(`At ${property} we have ${pets}`);
    console.log(`At ${property} we have ${pets[property]}`);

};
