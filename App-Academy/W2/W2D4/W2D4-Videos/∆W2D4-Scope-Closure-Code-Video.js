// CLOSURE Code Demo

// 1. Closure: a closure is when an inner function uses, or changes,
// variables in an outer function.

function pizzaMaker(food) { // 2. Ran
    let order = "I'd like a pizza with ";
    function oven() { // 4. Ran
        return order + food; // 5. Returned
    }
    return oven(); // 3. Evoked. // 6. Returned
};

console.log(pizzaMaker("cheese")); // 1. Evoked
// ==> "I'd like a pizza with cheese"

/******************************************************************* */

function groceryList(list) { // 1. Evoked.
    let groceries = list; // isn't necessary, WILL WORK with "list"

    function addItem() { // 3. Ran.
        groceries.push("and ice cream!") // push adds element to the END of the array
    }

    addItem(); // 2. Evoked.
    return groceries; // 4. Returned.
}

console.log(groceryList(["milk", "eggs"]));
// ==> [ 'milk', 'eggs', 'and ice cream!' ]

// Line 29 evokes function "groceryList(list)" on line 18
// Line 25 evokes function "addItem()" on line 21
// Line 21 function "addItem()" pushes arguement into "list"
// Line 26 returns groceries (aka list) which was modified by function "addItem"

/************************************************************************************** */

function elephantCollector() {
    const elephants = ["dumbo"];

    return function (name) {
        elephants.push(name);
        return elephants;
    };
}

console.log(elephantCollector()); // [Function]
const elephantParade = elephantCollector()
// console.log(elephantParade); // [Function]
// console.log(elephantParade()); // [ 'dumbo', undefined ]
// console.log(elephantParade("Sandy")); // [ 'dumbo', undefined, 'Sandy' ]
console.log(elephantParade("Sandy")); // [ 'dumbo', 'Sandy' ]
// by calling the innter function (line 43) via line 54, we gain access to
// the variable "elephants"
elephantParade("Augi");
console.log(elephantParade("Rayna")); // [ 'dumbo', 'Sandy', 'Augi', 'Rayna' ]
