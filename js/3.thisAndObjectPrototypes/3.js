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
