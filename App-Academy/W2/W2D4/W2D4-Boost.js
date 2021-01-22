const func1 = function(cb) {
    console.log(cb('Func 1'));
    return 'Func 1';
  }

  function func2(cb) {
    func1(function(arg) {
      return "Callback to " + arg;
    });
    return 'Func 2';
  }

  console.log(func2());
