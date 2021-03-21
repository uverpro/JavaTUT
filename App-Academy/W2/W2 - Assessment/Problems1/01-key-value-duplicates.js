/***********************************************************************
Write a function `keyValueDuplicates(obj)` that takes an object as
an argument and returns an array containing all keys that are also
values in that object.

***********************************************************************/

function keyValueDuplicates(obj) {
	let dupeArray = [];
	for (let currentKey in obj) {
		let value = obj[currentKey]
		if (Object.keys(obj).includes(value)) {
			dupeArray.push(value);
		}
	}
	return dupeArray;
}

obj1 = {"orange": "juice", "apple": "sauce", "sauce": "pan"}
console.log(keyValueDuplicates(obj1)); // ["sauce"]

obj2 = {"big": "foot", "foot": "ball", "ball": "boy", "boy": "scout"}
keyValueDuplicates(obj2) // ["foot", "ball", "boy"]

obj3 = {"pizza": "pie", "apple": "pie", "pumpkin": "pie"}
keyValueDuplicates(obj3) // []
