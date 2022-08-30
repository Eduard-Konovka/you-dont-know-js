const num = 1;
const arr = [2];
const obj = {
  param: 3,

  fn: function () {
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

console.log(obj.fn());
console.log(obj.arrow());
console.log(obj.fn.call(num));

// =============================================================================
