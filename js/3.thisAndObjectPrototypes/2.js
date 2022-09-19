const a = 2;
const b = true;
const c = 'string';
const d = null;
const e = {
  name: 'obj',
};
const f = ['g'];

function fn() {
  console.log(this);
}

fn.call(a); // 2
fn.call(b); // 2
fn.call(c); // 2
fn.call(d); // 2
fn.call(e); // 2
fn.call(f); // 2

// =============================================================================

function foo1(something) {
  console.log(this.a, something);
  return this.a + something;
}

var obj = {
  a: 2,
};

var bar1 = foo1.bind(obj);

var br = bar1(3); // 2 3
console.log(br); // 5

console.log(bar1.name); // bound foo1

// =============================================================================

function foo2(a) {
  this.a = a;
}

var bar2 = new foo2(2);
console.log(bar2.a); // 2
console.log(bar2); // Object { a: 2 }

// =============================================================================

function foo3(something) {
  this.a = something;
}

var obj1 = {};

var bar = foo3.bind(obj1);
bar(2);
console.log(obj1.a); // 2

var baz = new bar(3);
console.log(obj1.a); // 2
console.log(baz.a); // 3

// =============================================================================

var obj = {
  a: 5,
  b: function b() {
    return this;
  },
  d: {
    e: 7,
  },
};

var h = { g: 10 };

console.log('obj.b() ---> ', obj.b());
console.log('obj.call(h) ---> ', obj.b.call(h));

// =============================================================================

function foo5(a, b) {
  console.log('a:' + a + ', b:' + b);
}

// наш пустой DMZ-объект
var ø = Object.create(null);

// распаковываем массив как параметры
foo5.apply(ø, [2, 3]); // a:2, b:3

// каррируем с помощью `bind(..)`
var bar = foo5.bind(ø, 2);
bar(3); // a:2, b:3

// =============================================================================

// Пустой объект без прототипа
var ø = Object.create(null);
