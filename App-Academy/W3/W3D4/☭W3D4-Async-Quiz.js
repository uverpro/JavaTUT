// Async Quiz

// 1.
function asyncy(cb) {
    setTimeout(cb, 1000);
    console.log("async");
  }

  function greet() {
    console.log("hello!");
  }

  asyncy(greet); // async, hello!



// 2.
function far() {
    console.log('farm!')
}

function boo() {
    console.log('boop!');
    far();
}

console.log('fizz');
setTimeout(boo, 1000);
console.log('buzz');
// fizz, buzz, boop!, farm!



// 3.
function boo() {
    console.log('boop!');
}

console.log('fizz');
setTimeout(boo, 1000);
console.log('buzz');
// fizz, buzz, boop!



// 4.
function far() {
    console.log('farm!')
}

function boo() {
    console.log('boop!');
    setTimeout(far, 1000);
    console.log('boop!');
}

setTimeout(boo, 1000);
console.log('buzz');
// buzz, boop!, boop!, farm!



// 5.
function boo() {
    console.log('boop!');
}

console.log('fizz');
setTimeout(boo, 0);
console.log('buzz');
// fizz, buzz, boop!
