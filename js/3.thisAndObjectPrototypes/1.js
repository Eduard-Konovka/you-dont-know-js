function foo1(num) {
  console.log('foo1: ' + num);

  // Отслеживаем сколько раз `foo1` была вызвана
  this.count++;
}

foo1.count = 0;
window.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo1.call(window, i);
  }
}
// foo1: 6
// foo1: 7
// foo1: 8
// foo1: 9

// Сколько раз была вызвана `foo1`?
console.log('to call foo1: ', foo1.count); // 0 -- WTF?
console.log('to call foo1: ', window.count); // 4 -- !

// =============================================================================

function foo2(num) {
  console.log('foo2: ' + num);

  // следим, сколько раз вызывается функция
  foo2.count++;
}

foo2.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo2(i);
  }
}
// foo2: 6
// foo2: 7
// foo2: 8
// foo2: 9

// сколько раз `foo2` была вызвана?
console.log('to call foo2: ', foo2.count); // 4

// =============================================================================

function foo3(num) {
  console.log('foo3: ' + num);

  // следим, сколько раз вызывается функция
  // Заметьте: `this` теперь действительно ссылается на `foo3`, это основано на том,
  // как `foo3` вызывается (см. ниже)
  this.count++;
}

foo3.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    // используя `call(..)` мы гарантируем что `this`
    // ссылается на объект функции (`foo3`) изнутри
    foo3.call(foo3, i);
  }
}
// foo3: 6
// foo3: 7
// foo3: 8
// foo3: 9

// сколько раз `foo3` была вызвана?
console.log('to call foo3: ', foo3.count); // 4
