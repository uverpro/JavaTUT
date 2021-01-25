/***********************************************************************
Write a function `keyAdderUniqueVal(object, key, value)` that accepts an
object, a string to be set as a key in that object, and a value. When invoked
the function should assign the key and value arguments as a key value pair in
the object argument ONLY IF the value is not already a value for a different
key in the object. Return the mutated object.

See below for examples

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }
***********************************************************************/

/* 	input: 1 object (cat). 1 Key, which is a string here, (name, color). 1 Value ("willie, "orange")
	output: "return" - 1 JS object

strategy:
if value is not already a value for a different key in object
 		will need to add key value pair into object
	else
		do nothing
	return mutated object

	option 1: iterate over JS object looking at all values
			if value not found, then add new key value pair
			for in loop!

	option 2: can use Object.value(obj) ==> will give an array of value
			look in this array for existence of value in question
			if value is not found, then add in new key value pair */

            function keyAdderUniqueVal(object, key, value) {
                // option 1, for in loop:
                for (let key in object) { // "key" can be anything
                    console.log(key); // name, color
                    if (object [key] === value) { // (object [key] is the value)
                        return object; // 1. returning early if value is found
                    }
                }
                object [key] = value; // add a key value pair #2
                return object; // returning mutated object
            };

            let cat = { name: 'Willie', color: 'orange' };
            console.log(cat);
            keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
            keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
            console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }
