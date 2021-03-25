setTimeout(function() {
    console.log("time is up");
}, 1000);

console.log("end");

/***********/

function foo() {
    console.log("time is up")
}
setTimeout(foo, 1000); // even without the '1000' arg, setTimeOut will set default to one millisecond
console.log("end");

setTimeout(foo, 1000); // even without the '1000' arg,
// setTimeOut will set default to one millisecond
// setTimeout can accept infinite amount of arguments:
function foo(a, b) {
    console.log("time is up")
    console.log(a + " " + b);
}
setTimeout(foo, 1000, 'potato', 'tomato');
console.log('end');
// end
// time is up
// potato tomato


function foo(a, b) {
    console.log("time is up")
    console.log(a + " " + b);
}
const result = setTimeout(foo, 1000, 'potato', 'tomato');
console.log(result);
console.log('end');
// prints a "Timeout" object!
