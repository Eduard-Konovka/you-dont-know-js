var a = '2235861';
var b = Symbol();

function foo(a, b, c, d) {
  var arr = Array.from(arguments);

  return arr;
}

console.log(foo(a, '2', 56, true, b)); // Array(5) [ "2235861", "2", 56, true, Symbol() ]
console.log(Array.from(a)); // Array(7) [ "2", "2", "3", "5", "8", "6", "1" ]

// =============================================================================

var c = 'abcdeg';

var d = c.split('').reverse().join('');

console.log('"abcdeg" reverse --->', `"${d}"`);

// =============================================================================

// Don’t use this!
var naiveReverse = function (string) {
  console.log(string.split('').reverse().join(''));
};

console.log('foo𝌆bar');
// But!:
naiveReverse('foo𝌆bar');

// =============================================================================

var undefined = 3;
console.log(undefined); // 3

var fff;
fff = undefined;
console.log(fff); // 3
console.log(void fff); // undefined

// =============================================================================

var g = 2 / 'foo';
var h = 'goo';

console.log('g --->', g); // NaN
console.log('typeof g --->', typeof g); // number

console.log('a == NaN --->', a == NaN); // false
console.log('a === NaN --->', a === NaN); // false
console.log('NaN !== NaN --->', NaN !== NaN); // true
console.log('isNaN(g) --->', isNaN(g)); // true
console.log('Number.isNaN(g) --->', Number.isNaN(g)); // true
console.log('isNaN(h) --->', isNaN(h)); // true !!!!!
console.log('Number.isNaN(h) --->', Number.isNaN(h)); // false !!!

// =============================================================================

var l = Number.MAX_VALUE;
console.log('l --->', l); // 1.7976931348623157e+308
console.log('l + l -->', l + l); // Infinity
console.log('l + Math.pow(2, 970) --->', l + Math.pow(2, 970)); // Infinity
console.log('l + Math.pow(2, 969) --->', l + Math.pow(2, 969)); // 1.7976931348623157e+308

console.log('1 / 0 --->', 1 / 0); // Infinity
console.log('-1 / 0 --->', -1 / 0); // -Infinity
console.log('0 / 1 --->', 0 / 1); // 0
console.log('0 / -1 --->', 0 / -1); // -0
console.log('0 / 0 --->', 0 / 0); // NaN
console.log('Infinity / 0 --->', Infinity / 0); // Infinity
console.log('Infinity / 1 --->', Infinity / 1); // Infinity
console.log('Infinity / -1 --->', Infinity / -1); // -Infinity
console.log('0 / Infinity --->', 0 / Infinity); // 0
console.log('1 / Infinity --->', 1 / Infinity); // 0
console.log('-1 / Infinity --->', -1 / Infinity); // -0
console.log('Infinity / Infinity --->', Infinity / Infinity); // NaN

// =============================================================================

// Функция проверки отрицательности нуля:
function isNegativeZero(n) {
  n = Number(n);
  return n === 0 && 1 / n === -Infinity;
}

console.log('Отрицательный ноль "-0"? --->', isNegativeZero(-0)); // true
console.log('Отрицательный ноль "0 / -3"? --->', isNegativeZero(0 / -3)); // true
console.log('Отрицательный ноль "0"? --->', isNegativeZero(0)); // false

// Или для ES6:
console.log('Object.is(-0, -0) --->', Object.is(-0, -0)); // true
console.log('Object.is(0 / -3, -0) --->', Object.is(0 / -3, -0)); // true
console.log('Object.is(0, -0) --->', Object.is(0, -0)); // false

// Зачем нам нужен отрицательный ноль, вместо обычного значения?
//
// Есть определенные случаи где разработчики используют величину значения для
// определения одних данных (например скорость перемещения анимации в кадре),
// а знак этого числа number для представления других данных (например,
// направление перемещения).
//
// В этих случаях, как в примере выше, если переменная достигнет нуля и
// потеряет знак, тогда, вы потеряете информацию о том, откуда она пришла,
// до того как достигла нулевого значения. Сохранение знака нуля предупреждает
// потерю этой информации.

// =============================================================================

var k = [1, 2, 3];
var m = k;
console.log('k --->', k);
console.log('m --->', m);
k = 'dfg';
console.log('k --->', k);
console.log('m --->', m);
