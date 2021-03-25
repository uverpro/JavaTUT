// THE CALL STACK

// What is the Call Stack?
// The call stack is the structure used in the JavaScript runtime to track
// the execution of function calls

// Stack Data Structure
// A pile of many items
// New items must be place on top of the pile (push)
// Only the top item of the pile can be removed (pop)

//Manipulating the Call Stack
// The items placed on the call stack are referred to as stack frames
// When a function is called, a new frame is pushed onto the stack
// When a function returns, the from the top of the stack is popped off the stack

function foo() {
    console.log("a");
    bar();
    console.log("e");
}

function bar() {
    console.log("b");
    baz();
    console.log("d");
}

function baz() {
    console.log("c");
}

foo();
// a   // push foo()             // 18
// b   // push bar()             // 24
// c   // push baz()             // 30
//        pop baz()              // fully completed
// d   // pop bar()              // 30
// e   // pop foo()              // 24

// Each function must be fully completed before moving in the stack
