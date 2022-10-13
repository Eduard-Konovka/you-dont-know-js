var s = new String('Hello World!');
console.log(s); // String { "Hello World!" }
console.log(s.toString()); // "Hello World!"

var ss = String('Hello World!');
console.log(ss); // "Hello World!"

// =============================================================================

console.log(
  'Object.prototype.toString.call("") --->',
  Object.prototype.toString.call(''),
); // [object String]

console.log(
  'Object.prototype.toString.call(0) --->',
  Object.prototype.toString.call(0),
); // [object Number]

console.log(
  'Object.prototype.toString.call(true) --->',
  Object.prototype.toString.call(true),
); // [object Boolean]

console.log(
  'Object.prototype.toString.call(Symbol()) --->',
  Object.prototype.toString.call(Symbol()),
); // [object Symbol]

console.log(
  'Object.prototype.toString.call(null) --->',
  Object.prototype.toString.call(null),
); // [object Null]

console.log(
  'Object.prototype.toString.call(undefined) --->',
  Object.prototype.toString.call(undefined),
); // [object Undefined]

console.log(
  'Object.prototype.toString.call() --->',
  Object.prototype.toString.call(),
); // [object Undefined]

console.log(
  'Object.prototype.toString.call({}) --->',
  Object.prototype.toString.call({}),
); // [object Object]

console.log(
  'Object.prototype.toString.call([]) --->',
  Object.prototype.toString.call([]),
); // [object Array]

console.log(
  'Object.prototype.toString.call(/regex-literal/i) --->',
  Object.prototype.toString.call(/regex-literal/i),
); // [object RegExp]

console.log(
  'Object.prototype.toString.call(function () {}) --->',
  Object.prototype.toString.call(function () {}),
); // [object Function]

console.log(
  'Object.prototype.toString.call(() => {}) --->',
  Object.prototype.toString.call(() => {}),
); // [object Function]

console.log(
  'Object.prototype.toString.call(Error()) --->',
  Object.prototype.toString.call(Error()),
); // [object Error]

console.log(
  'Object.prototype.toString.call(EvalError(), RangeError, ReferenceError(), SyntaxError(), TypeError(), URIError()) --->',
  Object.prototype.toString.call(
    EvalError(),
    RangeError(),
    ReferenceError(),
    SyntaxError(),
    TypeError(),
    URIError(),
  ),
); // [object Error]

console.log(
  'Object.prototype.toString.call(new Date()) --->',
  Object.prototype.toString.call(new Date()),
); // [object Date]

console.log(
  'Object.prototype.toString.call(Date()) --->',
  Object.prototype.toString.call(Date()),
); // [object String]

console.log(
  'Object.prototype.toString.call(Date) --->',
  Object.prototype.toString.call(Date),
); // [object Function]

console.log(
  'Object.prototype.toString.call(Math) --->',
  Object.prototype.toString.call(Math),
); // [object Math]

console.log(
  'Object.prototype.toString.call(arguments) --->',
  Object.prototype.toString.call(),
); // [object arguments]

console.log(
  'Object.prototype.toString.call(new Map()) --->',
  Object.prototype.toString.call(new Map()),
); // [object Map]

console.log(
  'Object.prototype.toString.call(new Set()) --->',
  Object.prototype.toString.call(new Set()),
); // [object Set]

console.log(
  'Object.prototype.toString.call(new WeakMap()) --->',
  Object.prototype.toString.call(new WeakMap()),
); // [object WeakMap]

console.log(
  'Object.prototype.toString.call(new WeakSet()) --->',
  Object.prototype.toString.call(new WeakSet()),
); // [object WeakSet]

console.log(
  'Object.prototype.toString.call(JSON) --->',
  Object.prototype.toString.call(JSON),
); // [object JSON]

console.log(
  'Object.prototype.toString.call(Promise) --->',
  Object.prototype.toString.call(Promise),
); // [object Function]

console.log(
  'Object.prototype.toString.call(DataView) --->',
  Object.prototype.toString.call(DataView),
); // [object Function]

console.log(
  'Object.prototype.toString.call(Int8Array) --->',
  Object.prototype.toString.call(Int8Array),
); // [object Function]

console.log(
  'Object.prototype.toString.call(Intl) --->',
  Object.prototype.toString.call(Intl),
); // [object Intl]

console.log(
  'Object.prototype.toString.call(Intl.DateTimeFormat) --->',
  Object.prototype.toString.call(Intl.DateTimeFormat),
); // [object Function]

console.log(
  'Object.prototype.toString.call(Reflect) --->',
  Object.prototype.toString.call(Reflect),
); // [object Reflect]

console.log(
  'Object.prototype.toString.call(Proxy) --->',
  Object.prototype.toString.call(Proxy),
); // [object Function]

console.log(
  'Object.prototype.toString.call(eval()) --->',
  Object.prototype.toString.call(eval()),
); // [object Function]

console.log(
  'Object.prototype.toString.call(eval()) --->',
  Object.prototype.toString.call(eval()),
); // [object Undefined]

console.log(
  'Object.prototype.toString.call(isNaN()) --->',
  Object.prototype.toString.call(isNaN()),
); // [object Boolean]

console.log(
  'Object.prototype.toString.call(isFinite()) --->',
  Object.prototype.toString.call(isFinite()),
); // [object Boolean]

console.log(
  'Object.prototype.toString.call(parseInt()) --->',
  Object.prototype.toString.call(parseInt()),
); // [object Number]

console.log(
  'Object.prototype.toString.call(Function().arguments) --->',
  Object.prototype.toString.call(Function().arguments),
); // [object Null]

// =============================================================================

var a = new Boolean(false);
var b = false;

if (!a) {
  console.log('Oops a!');
  // никогда не запустится - сами объекты являются "истинными"
}

if (!a.valueOf()) {
  console.log('Oops a!'); // запустится
}

if (!b) {
  console.log('Oops b!'); // запустится
}

// =============================================================================

function unique(arr) {
  return [...new Set(arr)];
}

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.log(unique(values)); // Hare,Krishna,:-O

// =============================================================================

var c = new Array(3);
var d = [undefined, undefined, undefined];
var e = [];
e.length = 3;

console.log(c); // Array(3) [ <3 empty slots> ] или [empty × 3]
console.log(d); // Array(3) [undefined, undefined, undefined]
console.log(e); // Array(3) [ <3 empty slots> ] или [empty × 3]
console.log(e.length); // 3

delete d[1];

console.log(d); // Array(3) [ undefined, <1 empty slot>, undefined ] или [undefined, empty, undefined]

// =============================================================================

c.join('-'); // "--"
d.join('-'); // "--"

console.log(
  'c.map --->',
  c.map(function (v, i) {
    return i;
  }),
); // Array(3) [ <3 empty slots> ] или [empty × 3]
console.log(
  'd.map --->',
  d.map(function (v, i) {
    return i;
  }),
); // Array(3) [ 0, <1 empty slot>, 2 ] или [0, empty, 2]
