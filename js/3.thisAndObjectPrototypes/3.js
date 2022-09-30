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

var obj6 = {};
Object.defineProperty(
  obj6,
  'a',
  // сделаем `a` перечисляемой, как обычно
  { enumerable: true, value: 2 },
);
Object.defineProperty(
  obj6,
  'b',
  // сделаем `b` НЕперечисляемой
  { enumerable: false, value: 3 },
);
obj6.b; // 3
'b' in obj6; // true
obj6.hasOwnProperty('b'); // true
// .......
for (var k in obj6) {
  console.log(k, obj6[k]);
}
// "a" 2

console.log(
  "obj6.propertyIsEnumerable('a') --->",
  obj6.propertyIsEnumerable('a'),
); // true
console.log(
  "obj6.propertyIsEnumerable('b') --->",
  obj6.propertyIsEnumerable('b'),
); // false
console.log('Object.keys(obj6) --->', Object.keys(obj6)); // ["a"]
console.log(
  'Object.getOwnPropertyNames(obj6) --->',
  Object.getOwnPropertyNames(obj6),
); // ["a", "b"]

// =============================================================================

const hotel = ['stars', 5, 'capacity', 100];

hotel['name'] = 'Resort Hotel';

// Перебор ключей объекта hotel
for (const key in hotel) {
  console.log('Key: ', key);
}
// Key: 0
// Key: 1
// Key: 2
// Key: 3
// Key: name

console.log('hotel --->', hotel); // hotel ---> Array(4) [ "stars", 5, "capacity", 100 ]
console.log('hotel.name --->', hotel.name); // hotel.name ---> Resort Hotel
console.log('hotel["name"] --->', hotel['name']); // hotel["name"] ---> Resort Hotel

// =============================================================================

var randoms = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        return { value: Math.random() };
      },
    };
  },
};

var randoms_pool = [];

for (var n of randoms) {
  randoms_pool.push(n);
  // не продолжаем бесконечно!
  if (randoms_pool.length === 100) break;
}

console.log('randoms_pool --->', randoms_pool);
