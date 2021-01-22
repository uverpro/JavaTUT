// CLOSURES
/* One of the most used interview topics!

WHAT IS A CLOSURE?
    - A CLOSURE is when an inner function uses, or changes, variables in an outer function */


// SIMPLE CLOSURE:
function appleTree() {
    let aVariable = "apple";
    function tree() {
        // the inner function has access to the outer functions
        return aVariable;
    }
    return tree();
};

console.log(appleTree()); // ==> "apple"


// Another Simple Closure:
function appleTree() {
    let tree = {type: "apple", grown: false}
    function growtree() {
        tree.grown = true;
    }
    growtree();
    return tree;
};
console.log(appleTree()); // ==> { type: 'apple', grown: true }


// Closures can even close over variable of a returned function!
function treeMaker() {
    let trees = [];
    function addTree(tree) {
        trees.push(tree);
        return trees;
    }
    return addTree;
};

const treeFunc = treeMaker(); // ==> returns a func [Function: addTree]
treeFunc('Pine'); // ==> ["Pine"]


// Closures allow us to create Private State
function  createCounter() {
    let count = 0;

    return function() {
        count++
        return count;
    };
}

let counter1 = createCounter();
console.log(counter1()); // ==> 1
console.log(counter1()); // ==> 2

let counter2 = createCounter();
console.log(counter2()); // ==> 1
// counter2 has a seperate value. Has created a private state
// this is how a closer allows us to access a function after it's been returned
