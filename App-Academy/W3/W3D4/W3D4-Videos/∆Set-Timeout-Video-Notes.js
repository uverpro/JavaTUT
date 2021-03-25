setTimeout(function() {
    console.log("time is up");
}, 1000);

console.log("end");

/***********/

function foo() {
    console.log("time is up")
}
setTimeout(foo, 1000);
console.log("end");
