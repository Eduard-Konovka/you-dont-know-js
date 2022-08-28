const foo = function (param) {
  return param * 3;
};

foo.fn = function (prop) {
  return this(prop) - 2;
};

console.log('foo.fn(5) = ', foo.fn(5));
