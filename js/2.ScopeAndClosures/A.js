function foo1() {
  console.log(a1); // 1
}

function bar1() {
  var a1 = 2;
  foo1();
}

var a1 = 1;

bar1();

// =============================================================================

function foo2(place) {
  console.log(place); // 2
}

function bar2() {
  var a2 = 2;
  foo2.call(bar2, a2);
}

var a2 = 1;

bar2();
