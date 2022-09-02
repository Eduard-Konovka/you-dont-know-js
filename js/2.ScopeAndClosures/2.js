const num = 1;
const arr = [2];
const obj = {
  param: 3,

  fun: function () {
    return this;
  },

  arrow: () => {
    return this;
  },
};

const foo = function () {
  return this + 2;
};

console.log(foo.call(num));
console.log(foo.call(arr[0]));
console.log(foo.call(obj.param));

console.log(obj.fun());
console.log(obj.arrow());
console.log(obj.fun.call(num));

// =============================================================================

function fn1(str) {
  eval(str);
}

fn1('console.log("eval1");');

eval('var b = "eval2"; console.log(b);');

// =============================================================================

function fn2(str) {
  setTimeout(str, 0);
}

fn2('console.log("setTimeout1");');

setTimeout('console.log("setTimeout2");', 0);
setInterval('console.log("setInterval");', 1000);
