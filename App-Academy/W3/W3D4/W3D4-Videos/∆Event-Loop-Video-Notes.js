// THE EVENT LOOP

// How does Javascript handle events?
// Events includes:
    // keys being pressed
    // buttons being cliked
    // the page being scrolled
    // timeouts expired

// What is the event loop?
    // The event loop is the model of execution that Javascript uses

// What structures comprise the event loop?
    // Call Stack
    // Message Que

// What is the message que?
    // The message que is the structure used to track the handling of events

// Que Data Structure
    // Like the line for checkout
    // new items are added to the back of the line (enqueue)
    // items are removed from the front of the line (dequeue)

// Manipulating the message queue
    // the items stored on the message queue are called "messages"
    // when a new event occurs, but the runtime is busy processing another command,
// a message for that event is enqueued
    // when the runtime finishes its current command, the next message is dequeued and processed



function somethingSlow() {
    // some terrible slow implementation
    // assume that this function take 4000 milliseconds to return
}

function foo() {
    console.log("food");
}

function bar() {
    console.log("bark");
    baz();
}

function baz() {
    console.log("bazaar");
}

setTimeout(foo, 1500);
setTimeout(bar, 1000);
somethingSlow;

// Manipulating the message queue
    // the items stored on the message queue are called "messages"
    // when a new event occurs, but the runtime is busy processing another command,
// a message for that event is enqueued
    // when the runtime finishes its current command, the next message is dequeued and processed
