// fn();

var fn = function () {
  console.log(a); // undefined

  var a = 2;
};

// =============================================================================

foo();
function foo() {
  console.log('a');
}

b = 'b';
console.log(b);
{
  var b;
}

// =============================================================================
