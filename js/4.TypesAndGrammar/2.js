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
