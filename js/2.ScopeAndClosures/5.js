function foo() {
  var a = 1;

  function bar() {
    console.log(a);
  }

  return bar;
}

var baz = foo();

baz(); // 1 -- Ого, замыкание только что было раскрыто, мужики!

// =============================================================================

function foo2() {
  var a = 2;

  function baz2() {
    console.log(a); // 2
  }

  bar2(baz2);
}

function bar2(fn) {
  fn(); // смотри мам, я видел замыкание!
}

foo2();

// =============================================================================

var fn3;

function foo3() {
  var a = 3;

  function baz3() {
    console.log(a);
  }

  fn3 = baz3; // присваиваем `baz` глобальной переменной
}

function bar3() {
  fn3(); // смотри мам, я видел замыкание!
}

foo3();

bar3(); // 3

// =============================================================================

// var в цикле
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log('var ---> ', i);
  }, i * 1000);
}

// против let в цикле
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log('let ---> ', i);
  }, i * 1000);
}

// IIFE
for (var i = 1; i <= 5; i++) {
  (function () {
    var j = i;
    setTimeout(function timer() {
      console.log('IIFE ---> ', j);
    }, j * 1000);
  })();
}

// или с параметром равным i
for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log('IIFE(i) ---> ', j);
    }, j * 1000);
  })(i);
}

// =============================================================================

function CoolModule() {
  var something = 'cool';
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join(' ! '));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
  // или
  // return { doSomething2, doAnother2 };
}
var foo4 = CoolModule();

foo4.doSomething(); // cool
foo4.doAnother(); // 1 ! 2 ! 3
// или
// CoolModule().doSomething(); // cool
// CoolModule().doAnother(); // 1 ! 2 ! 3

// =============================================================================

// singleton
var foo5 = (function CoolModule() {
  var something = 'cool';
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join(' ! '));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
})();

foo5.doSomething(); // cool
foo5.doAnother(); // 1 ! 2 ! 3

// =============================================================================
