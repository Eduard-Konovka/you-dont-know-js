const foo1 = function (param) {
  return param * 3;
};

foo1.fn = function (prop) {
  return this(prop) - 2;
};

console.log('foo1.fn(5) = ', foo1.fn(5));

// =============================================================================

const url = (() => window.location)();
console.log(url);

// =============================================================================

function User() {
  var username, password;

  function doLogin(user, pw) {
    username = user;
    password = pw;

    return `${username} ---> ${password}`;
  }

  var publicAPI = {
    login: doLogin,
  };

  return publicAPI;
}

// создать экземпляр модуля `User`
var fred = new User();

const fredData = fred.login('fred', '12Battery34!');
console.log(fredData);

// =============================================================================

function foo2() {
  console.log(this.bar);
}

var bar = 'global';

var obj1 = {
  bar: 'obj1',
  foo2: foo2,
};

var obj2 = {
  bar: 'obj2',
};

//--------

obj1.foo2(); // "obj1"
foo2.call(obj2); // "obj2"
new foo2(); // undefined
// foo2(); // "global"

// =============================================================================

console.log(document);
