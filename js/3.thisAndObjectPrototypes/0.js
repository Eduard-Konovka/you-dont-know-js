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
  fn(method = 'without metods') {
    const arrow = () =>
      console.log(
        `"this" in an arrow function inside a regular function ${method}: `,
        this,
      );
    arrow();
  },
  arrow: (method = 'without metods') =>
    console.log(`"this" in outer arrow function ${method}: `, this),
};

obj.fn(); // "this" in an arrow function inside a regular function without metods: Object { name: "obj", fn: fn(), arrow: arrow() }
obj.fn.call(window, 'through metods "call"'); // "this" in an arrow function inside a regular function through metods "call": Window
obj.fn.apply(window, ['through metods "apply"']); // "this" in an arrow function inside a regular function through metods "apply": Window
const bindFn = obj.fn.bind(window, 'through metods "bind"'); // передастся в bindFn привязка вызова obj.fn.call(window, 'through metods "call"')
bindFn(); // "this" in an arrow function inside a regular function through metods "bind": Window

obj.arrow(); // "this" in outer arrow function without metods: undefined
obj.arrow.call(obj, 'through metods "call"'); // "this" in outer arrow function through metods "call": undefined
obj.arrow.apply(obj, ['through metods "apply"']); // "this" in outer arrow function through metods "apply": undefined
const bindObj = obj.arrow.bind(obj, 'through metods "bind"'); // передастся в bindObj привязка вызова obj.arrow.call(obj, 'through metods "call"')
bindObj(); // "this" in outer arrow function through metods "bind": undefined
