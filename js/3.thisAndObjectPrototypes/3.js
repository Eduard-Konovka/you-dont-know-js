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

var myObject = {};
Object.defineProperty(myObject, 'a', {
  value: 2,
  writable: false, // не перезаписываемо!
  configurable: true,
  enumerable: true,
});
// myObject.a = 3;
console.log(myObject.a); // 2

console.log(Object.getOwnPropertyDescriptor(myObject, 'a'));

// =============================================================================
