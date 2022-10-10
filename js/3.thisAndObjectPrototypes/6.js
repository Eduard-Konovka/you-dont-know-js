class Task1 {
  // конструктор `Task1()`
  constructor(ID) {
    this.id = ID;
  }

  outputTask() {
    console.log(this.id);
  }
}

class XYZ1 extends Task1 {
  // конструктор `XYZ1()`
  constructor(id, Label) {
    super(id);
    this.label = Label;
  }

  outputTask() {
    super.outputTask();
    console.log(this.label);
  }
}

class ABC1 extends Task1 {
  // конструктор `ABC1()`
  constructor(id, Name) {
    super(id);
    this.name = Name;
  }

  outputTask() {
    super.outputTask();
    console.log(this.name);
  }
}

const mango1 = new XYZ1('1', 'Mango1');
const avocado1 = new ABC1('2', 'Avocado1');

mango1.outputTask();
avocado1.outputTask();

// =============================================================================

var Task2 = {
  setID: function (ID) {
    this.id = ID;
  },
  outputID: function () {
    console.log(this.id);
  },
};

// `XYZ2` делегирует `Task2`
var XYZ2 = Object.create(Task2);

XYZ2.prepareTask = function (ID, Label) {
  this.setID(ID);
  this.label = Label;
};

XYZ2.outputTaskDetails = function () {
  this.outputID();
  console.log(this.label);
};

// ABC2 = Object.create(Task2);
// ABC2 ... = ...

XYZ2.prepareTask('11', 'Mango2');

XYZ2.outputTaskDetails();

// =============================================================================

function Foo1(who) {
  this.me = who;
}
Foo1.prototype.identify = function () {
  return 'I am ' + this.me;
};

function Bar1(who) {
  Foo1.call(this, who);
}
Bar1.prototype = Object.create(Foo1.prototype);

Bar1.prototype.speak = function () {
  console.log('Hello, ' + this.identify() + '.');
};

var b1 = new Bar1('b1');
var b2 = new Bar1('b2');

b1.speak();
b2.speak();

// =============================================================================

var Foo2 = {
  init: function (who) {
    this.me = who;
  },
  identify: function () {
    return 'I am ' + this.me;
  },
};

var Bar2 = Object.create(Foo2);

Bar2.speak = function () {
  console.log('Hello, ' + this.identify() + '.');
};

var b11 = Object.create(Bar2);
b11.init('b11');
var b22 = Object.create(Bar2);
b22.init('b22');

b11.speak();
b22.speak();

// =============================================================================
