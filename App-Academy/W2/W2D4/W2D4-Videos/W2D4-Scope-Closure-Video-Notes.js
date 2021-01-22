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
