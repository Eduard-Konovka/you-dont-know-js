function Foo1() {
  //
}

console.log(Foo1.prototype); // Object { … }

// =============================================================================

function Foo2() {
  return 'Foo2';
}

var a = new Foo2();
console.log('Foo2 --->', Foo2);
console.log('Foo2.prototype --->', Foo2.prototype);
console.log(
  'Foo2.prototype.constructor --->',
  Foo2.prototype.constructor.prototype,
);
console.log(
  'Foo2.prototype.constructor.prototype --->',
  Foo2.prototype.constructor.prototype,
);

console.log('a --->', a);

// =============================================================================

function Foo3(name) {
  this.name = name;
  this.getMyName1 = function () {
    return this.name;
  };
}

Foo3.prototype.getMyName2 = function () {
  return this.name;
};

var c = new Foo3('c');
var b = new Foo3('b');

console.log('a.getMyName1() --->', c.getMyName1()); // "c"
console.log('a.getMyName2() --->', c.getMyName2()); // "c"
console.log('b.getMyName1() --->', b.getMyName1()); // "b"
console.log('b.getMyName2() --->', b.getMyName2()); // "b"

console.log(c); // Object { name: "c", getMyName1: getMyName1() }
console.log(Foo3.prototype); // Object { constructor: function Foo3(name), getMyName2: getMyName2() }

// =============================================================================

function Foo4(name) {
  this.name = name;
}

Foo4.prototype.myName = function () {
  return this.name;
};

function Bar(name, label) {
  Foo4.call(this, name);
  this.label = label;
}

// здесь мы создаем `Bar.prototype`
// связанный с `Foo4.prototype`
Bar.prototype = Object.create(Foo4.prototype);

// Осторожно! Теперь `Bar.prototype.constructor` отсутствует,
// и это придется "пофиксить" вручную,
// если вы привыкли полагаться на подобные свойства!

Bar.prototype.myLabel = function () {
  return this.label;
};

var e = new Bar('', 'obj ');

console.log('e.myName() --->', e.myName()); // e.myName() ---> a
console.log('e.myLabel() --->', e.myLabel()); // e.myLabel() ---> obj a

console.log('Bar.prototype --->', Bar.prototype); // Object { myLabel: myLabel() }

console.log(
  'e.__proto__ === Bar.prototype --->',
  e.__proto__ === Bar.prototype,
);

// =============================================================================

var x = Object.create(null);
x.foo = 555;
var y = Object.create({});

console.log('x --->', x);
console.log('y --->', y);
console.log('y.foo --->', y.foo);
console.log("y.hasOwnProperty('foo') --->", y.hasOwnProperty('foo'));
console.log("y.hasOwnProperty('bar') --->", y.hasOwnProperty('bar'));
