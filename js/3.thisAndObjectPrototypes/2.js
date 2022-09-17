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
