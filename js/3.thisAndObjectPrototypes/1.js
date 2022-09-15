window.showThis = function (contex) {
  console.log(`"this" in showThis with ${contex}: `, this);
};

// Вызываем в глобальном контексте
window.showThis('global'); // this in showThis with global: Window
// Вызываем в контексте модуля
showThis('module'); // this in showThis with module: undefined

const user = { name: 'Mango' };

/*
 * Записываем ссылку на функцию в свойство объекта
 * Обратите внимание, что это не вызов - нет ()
 */
user.showContext = showThis;

/*
 * Вызываем функцию в контексте объекта
 * this будет указывать на текущий объект, в контексте
 * которого осуществляется вызов, а не на глобальный объект.
 */

user.showContext('user'); // this in showThis with user: Object { name: "Mango", showContext: showThis(contex) }

// =============================================================================

const hotel = {
  name: 'Resort Hotel',

  showThis(contex) {
    console.log(`"this" in hotel with ${contex}: `, this);
  },
};

const fn = function (callback, contex) {
  /*
   * Во время вызова fn, callback будет ссылкой
   * на функцию showThis объекта hotel.
   * Ее вызов происходит в глобальном контексте,
   * про hotel она ничего не знает.
   * Соответственно this не будет ссылаться на hotel
   */
  callback(contex);
};

// Передается ссылка на функцию а нее ее вызов
fn(hotel.showThis, 'global'); // this in hotel with global: Window или undefined
fn(hotel.showThis.bind(hotel, 'hotel 1'), 'hotel 2'); // this in hotel with hotel 1:Object { name: "Resort Hotel", showThis: showThis() }
fn(hotel.showThis.bind(hotel, 'hotel 1')); // this in hotel with hotel 1: Object { name: "Resort Hotel", showThis: showThis() }
fn(hotel.showThis.bind(hotel), 'hotel 2'); // this in hotel with hotel 2: Object { name: "Resort Hotel", showThis: showThis() }

// =============================================================================

window.eval(`console.log('"this" of eval() in global: ', this);`);
eval(`console.log('"this" of eval() in module: ', this);`);

// =============================================================================

const obj = {
  name: 'obj',
  fn() {
    const arrow = () =>
      console.log(
        `"this" in an arrow function inside a regular function: `,
        this,
      );
    arrow();
  },
  arrow: () => console.log(`"this" in outer arrow function: `, this),
};

obj.fn(); // "this" in an arrow function inside a regular function: Object { name: "obj", fn: fn(), arrow: arrow() }
obj.arrow(); // "this" in outer arrow function: undefined
obj.arrow.bind(obj); // проигнорируется и не выполнится
