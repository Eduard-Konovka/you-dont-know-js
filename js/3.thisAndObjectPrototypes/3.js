// читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for('id'); // если символа не существует, он будет создан

// читаем его снова и записываем в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for('id');

// проверяем -- это один и тот же символ
console.log(id === idAgain); // true

// =============================================================================

var myArray = ['foo', 42, 'bar'];
myArray.baz = 'baz';
myArray.length; // 3
myArray.baz; // "baz"
console.log(myArray, myArray.baz);

// =============================================================================

var obj1 = {};
Object.defineProperty(obj1, 'a', {
  value: 2,
  writable: false, // не перезаписываемо!
  configurable: true,
  enumerable: true,
});
// obj.a = 3;
console.log(obj1.a); // 2

console.log(Object.getOwnPropertyDescriptor(obj1, 'a'));

// =============================================================================

var obj2 = {
  a: undefined,
};
console.log('obj2.a --->', obj2.a); // undefined
console.log('obj2.b --->', obj2.b); // undefined

// =============================================================================

var obj3 = {
  // определим геттер для `a`
  get a() {
    return this._a_;
  },
  // определим сеттер для `a`
  set a(val) {
    this._a_ = val * 2;
  },
};
obj3.a = 2;
console.log('obj3.a --->', obj3.a); // 4

// =============================================================================

var obj4 = {
  a: 2,
};
console.log("'a' in obj4 --->", 'a' in obj4); // true
console.log("'b' in obj4 --->", 'b' in obj4); // false
console.log("obj4.hasOwnProperty('a') --->", obj4.hasOwnProperty('a')); // true
console.log("obj4.hasOwnProperty('b') --->", obj4.hasOwnProperty('b')); // false

// =============================================================================

var obj5 = Object.create(null);

console.log("'b' in obj5 --->", 'a' in obj5); // false
// console.log("obj5.hasOwnProperty('a') --->", obj5.hasOwnProperty('b')); // Uncaught TypeError: obj5.hasOwnProperty is not a function
console.log(
  "Object.prototype.hasOwnProperty.call(obj5, 'a') --->",
  Object.prototype.hasOwnProperty.call(obj5, 'a'),
);

// =============================================================================