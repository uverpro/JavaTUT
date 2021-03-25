// Async Quiz

function asyncy(cb) {
    setTimeout(cb, 1000);
    console.log("async");
  }

  function greet() {
    console.log("hello!");
  }

  asyncy(greet);
