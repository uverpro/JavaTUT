// JAVASCRIPT THREADING

// What is a thread?
// Not exclusive to JS, a computer science term
// In programming, the term "THREAD OF EXECUTION" refers to a sequence of commands


// SINGLE-THREADED vs MULTI-THREADED EXECUTION

// SINGLE-THREADED EXECUTION: only ONE command can be processed at a time

// MULTI-THREADED EXECUTION: multiple commands can be processed at the same time


// Kitchen Analogy:
// Single-Threaded: one chef preparing all dished one after the other
// Multi-Threaded: multiple chefs preparing different dishes at the same time

// JAVASCRIPT IS A SINGLE-THREADED LANGUAGE (common interview question)


function nextTask() {
    console.log("done!")
}

setTimeout(function() {
    console.log("times up!")
}, 1000);

nextTask();


function blockingTheThread() {
    while(true) {
    }
    console.log("done!");
}

setTimeout(function () {
    console.log("time's up!")
}, 1000);

blockingTheThread();
