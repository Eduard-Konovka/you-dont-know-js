function foo() {
  function bar(a) {
    var i = 3; // без объявления переменной посредством var меняем `i`
    // в окружающей области видимости цикла for-loop
    console.log(a + i, this);
  }

  for (var i = 0; i < 10; i++) {
    bar(i * 2); // упс, впереди бесконечный цикл!
  }
}

const obj = {
  elem: () => foo.call(obj),
  clg: () => console.log(this),
};

obj.elem();
obj.clg();

// =============================================================================

var fn = true;
if (fn) {
  var bar = 'bar';

  console.log(bar);
}
console.log(bar);

for (var i = 0; i < 10; i++) {
  console.log('inner ', i);
}
console.log('outer ', i);

// =============================================================================

{
  var aaa = 30;
  let bbb = 33;
}

console.log('aaa -->', aaa);
// console.log('bbb -->', bbb);

// =============================================================================

var fon = true,
  baz = 10;

if (fon) {
  var bar = 3;

  if (baz > bar) {
    console.log(baz);
  }

  // ...
}

// =============================================================================

function zzz() {
  var z = 5;
  let zz = 6;
  return z + zz;
}

{
  var z = 8;
  let zz = 9;
}

console.log(z);
console.log(zz);
