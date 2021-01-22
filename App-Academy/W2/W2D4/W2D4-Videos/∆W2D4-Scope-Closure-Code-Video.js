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



function groceryList(list) {
    let groceries = list;

    function addItem() {
        groceries.push("and ice cream!")
    }

    addItem();
    return groceries;
}

console.log(groceryList(["milk", "eggs"]));
