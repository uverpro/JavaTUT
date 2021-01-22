// CLOSURE Code Demo

// 1. Closure: a closure is when an inner function uses, or changes,
// variables in an outer function.

function pizzaMaker(food) {
    let order = "I'd like a pizza with ";
    function oven() {
        return order + food;
    }
    return oven();
};

console.log(pizzaMaker("cheese")); // ==> "I'd like a pizza with cheese"



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
