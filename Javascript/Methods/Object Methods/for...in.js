// for...in
// The for...in statement iterates over all enumerable properties
// of an object that are keyed by strings (ignoring ones keyed by Symbols),
// including inherited enumerable properties.

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

let player = { name: "Lebron", skill: "Basketball"};

for (let key in player) { // "key" can be anything. "player" MUST reference "player"
    console.log(key);
    console.log(player.name)
    console.log(player[key])
}
