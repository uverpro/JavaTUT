function foo() {
  console.log("fizz");
}

function bar() {
  console.log("buzz");
}

function boom(cb1, cb2) {
  console.log("zip");
  cb1();
  console.log("zap");
  cb2();
  console.log("zoop");
}

boom(bar, foo);
